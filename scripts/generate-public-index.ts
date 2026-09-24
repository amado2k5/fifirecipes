/**
 * Builds everything the site serves as static data (run before `dev`/`build`):
 *
 *  public/data/                 fetched by the browser on demand (gitignored)
 *    manifest.json              version, page count and header statistics
 *    index/<n>.json             recipe card summaries, PAGE_SIZE per page, in the
 *                               list's default order so the first page renders first
 *    i18n/<lang>.json           card-level translations (title, category, times…)
 *    search/<lang>.json         one lowercase search string per recipe
 *    recipes/<id>.json          a full recipe + its estimate + all its translations
 *    ingredients/<lang>.json    the master-ingredient registry, localized
 *  public/recipe/<id>/index.html  a static, JavaScript-free page per recipe for
 *                               search engines and link previews (gitignored)
 *  public/recipes.json          the whole open archive in one file
 *  public/sitemap.xml
 *
 * Nothing under src/data/chapters is bundled into the app any more: the browser
 * only downloads the pages, translations and recipes it actually shows.
 */
import { createHash } from 'node:crypto';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { allRecipes, buildGlobalIngredientRegistry, computeDatabaseStats } from '../src/data/recipes';
import { RECIPE_ESTIMATES } from '../src/data/recipeEstimatesData';
import { formatServings, getCostTotal, type RecipeEstimate } from '../src/data/recipeEstimates';
import { getRecipeImagePath } from '../src/data/recipeImages';
import {
  getLocalizedIngredient,
  getLocalizedRecipe,
  registerTranslations,
  type TranslationTable
} from '../src/utils/recipeLocalization';
import type { Recipe, RecipeCollection, RecipeSummary, SupportedLanguage } from '../src/types';

const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://fifi.cooking').replace(/\/$/, '');
const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['ar', 'en', 'fr', 'es', 'ja', 'hi', 'pt', 'ru', 'zh', 'de', 'it', 'el', 'ur', 'fa', 'tr', 'ku', 'id', 'sw', 'ko'];
const TRANSLATION_FILES: Partial<Record<SupportedLanguage, string>> = {
  en: 'recipeTranslations.json',
  fr: 'recipeTranslationsFr.json',
  es: 'recipeTranslationsEs.json',
  ja: 'recipeTranslationsJa.json',
  hi: 'recipeTranslationsHi.json',
  pt: 'recipeTranslationsPt.json',
  ru: 'recipeTranslationsRu.json',
  zh: 'recipeTranslationsZh.json',
  de: 'recipeTranslationsDe.json',
  it: 'recipeTranslationsIt.json',
  el: 'recipeTranslationsEl.json',
  ur: 'recipeTranslationsUr.json',
  fa: 'recipeTranslationsFa.json',
  tr: 'recipeTranslationsTr.json',
  ku: 'recipeTranslationsKu.json',
  id: 'recipeTranslationsId.json',
  sw: 'recipeTranslationsSw.json',
  ko: 'recipeTranslationsKo.json'
};
/** Cards per index page; the first page is all a visitor waits for. */
const PAGE_SIZE = 100;
const PREVIEW_INGREDIENTS = 3;
const DATA_DIR = 'public/data';

const tables: Partial<Record<SupportedLanguage, TranslationTable>> = {};
for (const [lang, file] of Object.entries(TRANSLATION_FILES) as [SupportedLanguage, string][]) {
  tables[lang] = JSON.parse(await readFile(`src/data/${file}`, 'utf-8'));
  // Register the full tables so the localization helpers below can resolve
  // localized titles/ingredients exactly as the browser will.
  registerTranslations(lang, tables[lang]!);
}

const collectionOf = (recipe: Recipe): RecipeCollection =>
  !recipe.source ? 'archive' : recipe.source.collection ?? 'chefteta';
// A recipe only has non-Arabic text once it has an English title.
const isArabicOnly = (recipe: Recipe) => !recipe.titleEn;

// Same order as the list's default sort (highest overlap first, stable), so
// the first index page holds exactly the cards a visitor sees first.
const orderedRecipes = [...allRecipes].sort(
  (a, b) => b.overlapAnalysis.overlapPercentage - a.overlapAnalysis.overlapPercentage
);

const summaries: RecipeSummary[] = orderedRecipes.map(recipe => ({
  id: recipe.id,
  title: recipe.title,
  titleEn: recipe.titleEn,
  chapter: recipe.chapter,
  chapterNumber: recipe.chapterNumber,
  category: recipe.category,
  cookingMethod: recipe.cookingMethod,
  prepTime: recipe.prepTime,
  cookTime: recipe.cookTime,
  servings: recipe.servings,
  imageUrl: recipe.imageUrl,
  collection: collectionOf(recipe),
  ...(isArabicOnly(recipe) ? { arabicOnly: true } : {}),
  ingredientCount: recipe.masterIngredients.length,
  stepCount: recipe.uniqueInstructions.length,
  overlapPercentage: recipe.overlapAnalysis.overlapPercentage,
  previewIngredients: recipe.masterIngredients.slice(0, PREVIEW_INGREDIENTS).map(({ id, name, nameEn }) => ({ id, name, ...(nameEn ? { nameEn } : {}) }))
}));

const files = new Map<string, string>();
const put = (path: string, value: unknown) => files.set(path, JSON.stringify(value));

// Card index, paged.
const pageCount = Math.ceil(summaries.length / PAGE_SIZE);
for (let page = 0; page < pageCount; page++) {
  put(`index/${page}.json`, summaries.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE));
}

// Card-level translations: only what a card needs, per language.
for (const [lang, table] of Object.entries(tables) as [SupportedLanguage, TranslationTable][]) {
  const cardTable: TranslationTable = {};
  for (const summary of summaries) {
    const entry = table[summary.id];
    if (!entry) continue;
    const previewIngredients = Object.fromEntries(
      summary.previewIngredients
        .filter(ingredient => entry.ingredients?.[ingredient.id]?.name)
        .map(ingredient => [ingredient.id, { name: entry.ingredients![ingredient.id].name }])
    );
    cardTable[summary.id] = {
      title: entry.title,
      category: entry.category,
      cookingMethod: entry.cookingMethod,
      prepTime: entry.prepTime,
      cookTime: entry.cookTime,
      servings: entry.servings,
      ...(Object.keys(previewIngredients).length ? { ingredients: previewIngredients } : {})
    };
  }
  put(`i18n/${lang}.json`, cardTable);
}

// Search strings: the localized and Arabic title, category and every ingredient.
for (const lang of SUPPORTED_LANGUAGES) {
  const search: Record<string, string> = {};
  for (const recipe of orderedRecipes) {
    if (lang !== 'ar' && isArabicOnly(recipe)) continue;
    const localized = getLocalizedRecipe(recipe, lang);
    search[recipe.id] = [
      localized.title,
      recipe.title,
      recipe.titleEn,
      localized.category,
      recipe.category,
      ...recipe.masterIngredients.flatMap(ingredient => [ingredient.name, getLocalizedIngredient(ingredient, lang, recipe.id)])
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
  }
  put(`search/${lang}.json`, search);
}

// Full recipes, each with its estimate and every translation it has.
for (const recipe of orderedRecipes) {
  const translations: Partial<Record<SupportedLanguage, TranslationTable[string]>> = {};
  for (const [lang, table] of Object.entries(tables) as [SupportedLanguage, TranslationTable][]) {
    if (table[recipe.id]) translations[lang] = table[recipe.id];
  }
  put(`recipes/${recipe.id}.json`, { recipe, estimate: RECIPE_ESTIMATES[recipe.id], translations });
}

// Master-ingredient registry, localized per language.
for (const lang of SUPPORTED_LANGUAGES) {
  const recipes = lang === 'ar' ? orderedRecipes : orderedRecipes.filter(recipe => !isArabicOnly(recipe));
  put(`ingredients/${lang}.json`, buildGlobalIngredientRegistry(recipes).map(item => ({
    ...item,
    localizedName: getLocalizedIngredient(item, lang, item.sourceRecipeId)
  })));
}

const version = createHash('sha256')
  .update([...files.entries()].map(([path, body]) => path + body).join('\n'))
  .digest('hex')
  .slice(0, 12);
put('manifest.json', {
  version,
  pageSize: PAGE_SIZE,
  pageCount,
  total: summaries.length,
  stats: {
    all: computeDatabaseStats(orderedRecipes),
    translated: computeDatabaseStats(orderedRecipes.filter(recipe => !isArabicOnly(recipe)))
  }
});

await rm(DATA_DIR, { recursive: true, force: true });
for (const [path, body] of files) {
  const fullPath = `${DATA_DIR}/${path}`;
  await mkdir(fullPath.slice(0, fullPath.lastIndexOf('/')), { recursive: true });
  await writeFile(fullPath, body);
}

// ---------------------------------------------------------------------------
// Static per-recipe pages for crawlers (and anyone without JavaScript).

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// "15 دقيقة" / "1 ساعة" → ISO-8601 duration, when the text is a plain amount.
function toIsoDuration(value?: string): string | undefined {
  if (!value) return undefined;
  const normalized = value.replace(/[٠-٩]/g, digit => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)));
  const amount = normalized.match(/\d+(?:\.\d+)?/)?.[0];
  if (!amount) return undefined;
  if (/ساع/.test(normalized)) return `PT${Math.round(Number(amount) * 60)}M`;
  if (/دقيق|min/.test(normalized)) return `PT${Math.round(Number(amount))}M`;
  return undefined;
}

const OSOOL_BOOK = {
  '@type': 'Book',
  name: 'أصول الطهي النظري والعملي',
  alternateName: 'Osool El Tahy',
  author: [
    { '@type': 'Person', name: 'نظيرة نقولا' },
    { '@type': 'Person', name: 'بهية عثمان' }
  ],
  url: 'https://archive.org/details/20240330_20240330_1122'
};

function recipeJsonLd(recipe: Recipe, estimate: RecipeEstimate | undefined, pageUrl: string, imageUrl: string) {
  const prepTime = toIsoDuration(recipe.prepTime);
  const cookTime = toIsoDuration(recipe.cookTime);
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    ...(recipe.titleEn ? { alternateName: recipe.titleEn } : {}),
    url: pageUrl,
    image: imageUrl,
    inLanguage: 'ar',
    recipeCategory: recipe.category,
    ...(recipe.source
      ? { isBasedOn: recipe.source.collection === 'osool' ? { ...OSOOL_BOOK, url: recipe.source.url } : recipe.source.url }
      : { recipeCuisine: 'Egyptian', author: { '@type': 'Person', name: 'د. فاطمة القاوقجي', alternateName: 'Dr. Fatma Alkawokgy' } }),
    ...(prepTime ? { prepTime } : {}),
    ...(cookTime ? { cookTime } : {}),
    ...(estimate
      ? {
          recipeYield: `${formatServings(estimate.servings)} servings`,
          nutrition: {
            '@type': 'NutritionInformation',
            servingSize: '1 serving',
            calories: `${estimate.kcal} calories`,
            proteinContent: `${estimate.protein} g`,
            fatContent: `${estimate.fat} g`,
            carbohydrateContent: `${estimate.carbs} g`,
            fiberContent: `${estimate.fiber} g`,
            sugarContent: `${estimate.sugar} g`
          },
          estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: getCostTotal(estimate).toFixed(2) }
        }
      : recipe.servings ? { recipeYield: recipe.servings } : {}),
    recipeIngredient: recipe.masterIngredients.map(ingredient => `${ingredient.name}: ${ingredient.standardAmount}`),
    recipeInstructions: recipe.uniqueInstructions.map(step => ({ '@type': 'HowToStep', position: step.stepNumber, text: step.text }))
  };
}

function staticRecipePage(recipe: Recipe): string {
  const estimate = RECIPE_ESTIMATES[recipe.id];
  const pageUrl = `${siteUrl}/recipe/${encodeURIComponent(recipe.id)}/`;
  const appUrl = `${siteUrl}/?recipe=${encodeURIComponent(recipe.id)}&lang=ar`;
  const imagePath = getRecipeImagePath(recipe.id);
  const imageUrl = recipe.imageUrl || (imagePath ? `${siteUrl}/${imagePath}` : `${siteUrl}/logo-transparent.png`);
  const description = `${recipe.title}: ${recipe.masterIngredients.slice(0, 6).map(ingredient => ingredient.name).join('، ')}.`;
  const source = recipe.source
    ? `<p class="source">وصفة إضافية من خارج مخطوطات د. فاطمة القاوقجي، أعدنا صياغتها بأسلوبنا مع حفظ حق المصدر.<br>المصدر: <a href="${escapeHtml(recipe.source.url)}" rel="noopener">${escapeHtml(recipe.source.name)}</a>${recipe.source.citation ? ` — ${escapeHtml(recipe.source.citation)}` : ''}</p>`
    : '<p class="source">من أرشيف وصفات د. فاطمة القاوقجي (1943–2026).</p>';
  const nutrition = estimate
    ? `<h2>القيمة الغذائية والتكلفة (تقديرية)</h2>
<table>
<tr><th>عدد الحصص</th><td>${formatServings(estimate.servings)}</td></tr>
<tr><th>السعرات للحصة</th><td>${estimate.kcal} سعر حراري</td></tr>
<tr><th>البروتين</th><td>${estimate.protein} جم</td></tr>
<tr><th>الدهون</th><td>${estimate.fat} جم</td></tr>
<tr><th>الكربوهيدرات</th><td>${estimate.carbs} جم</td></tr>
<tr><th>الألياف</th><td>${estimate.fiber} جم</td></tr>
<tr><th>السكريات</th><td>${estimate.sugar} جم</td></tr>
<tr><th>تكلفة المكونات للوصفة كاملة</th><td>$${getCostTotal(estimate).toFixed(2)} (دولار أمريكي)</td></tr>
</table>
<p class="note">قيم تقريبية محسوبة من المكونات ومتوسط الأسعار، وليست قياساً معملياً.</p>`
    : '';
  const facts = [
    recipe.prepTime && `التحضير: ${recipe.prepTime}`,
    recipe.cookTime && `الطهو: ${recipe.cookTime}`,
    recipe.servings && `يكفي: ${recipe.servings}`
  ].filter(Boolean).join(' · ');
  const alternates = SUPPORTED_LANGUAGES
    .filter(lang => lang === 'ar' || !isArabicOnly(recipe))
    .map(lang => `<link rel="alternate" hreflang="${lang}" href="${escapeHtml(`${siteUrl}/?recipe=${encodeURIComponent(recipe.id)}&lang=${lang}`)}">`)
    .join('\n');

  return `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(recipe.title)} | وصفات د. فاطمة القاوقجي</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${escapeHtml(pageUrl)}">
${alternates}
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHtml(recipe.title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:image" content="${escapeHtml(imageUrl)}">
<meta property="og:url" content="${escapeHtml(pageUrl)}">
<script type="application/ld+json">${JSON.stringify(recipeJsonLd(recipe, estimate, pageUrl, imageUrl)).replace(/</g, '\\u003c')}</script>
<style>
body{font-family:Tajawal,system-ui,sans-serif;max-width:760px;margin:0 auto;padding:16px;line-height:1.8;color:#1c1917;background:#fafaf9}
h1{margin:.2em 0;font-size:1.7em}h2{margin-top:1.4em;font-size:1.2em;border-bottom:2px solid #f59e0b;padding-bottom:.2em}
.en{color:#78716c;margin:0}.facts{color:#57534e}.source{background:#f0f9ff;border:1px solid #bae6fd;padding:.6em .9em;border-radius:10px}
.cta{display:inline-block;margin:1em 0;padding:.6em 1.1em;background:#d97706;color:#fff;border-radius:10px;text-decoration:none;font-weight:700}
table{border-collapse:collapse}th,td{border:1px solid #e7e5e4;padding:.3em .8em;text-align:start}.note{color:#78716c;font-size:.9em}
img{max-width:100%;border-radius:14px}
</style>
</head>
<body>
<main>
<p><a href="${escapeHtml(siteUrl)}/">وصفات د. فاطمة القاوقجي</a> › ${escapeHtml(recipe.category)}</p>
${imagePath ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(recipe.title)}" width="760" loading="lazy">` : ''}
<h1>${escapeHtml(recipe.title)}</h1>
${recipe.titleEn ? `<p class="en" lang="en" dir="ltr">${escapeHtml(recipe.titleEn)}</p>` : ''}
${facts ? `<p class="facts">${escapeHtml(facts)}</p>` : ''}
${source}
<a class="cta" href="${escapeHtml(appUrl)}">افتح الوصفة في الموقع التفاعلي</a>
<h2>المقادير</h2>
<ul>
${recipe.masterIngredients.map(ingredient => `<li>${escapeHtml(ingredient.name)}: ${escapeHtml(ingredient.standardAmount)}</li>`).join('\n')}
</ul>
<h2>طريقة التحضير</h2>
<ol>
${recipe.uniqueInstructions.map(step => `<li>${escapeHtml(step.text)}</li>`).join('\n')}
</ol>
${recipe.culturalNotes ? `<h2>ملاحظات</h2>\n<p>${escapeHtml(recipe.culturalNotes)}</p>` : ''}
${nutrition}
</main>
</body>
</html>
`;
}

await rm('public/recipe', { recursive: true, force: true });
for (const recipe of orderedRecipes) {
  await mkdir(`public/recipe/${recipe.id}`, { recursive: true });
  await writeFile(`public/recipe/${recipe.id}/index.html`, staticRecipePage(recipe));
}

// ---------------------------------------------------------------------------
// Open data dump and sitemap.

await writeFile('public/recipes.json', JSON.stringify({
  name: 'Fatma Alkawokgy public recipe archive',
  description: 'Open recipe archive for public use, search, preservation, and research.',
  estimatesNote: 'estimates: per-serving nutrition and whole-recipe ingredient cost (USD) are approximations.',
  recipes: allRecipes.map(recipe => ({ ...recipe, estimates: RECIPE_ESTIMATES[recipe.id] }))
}, null, 2));

const urls = [
  siteUrl,
  ...SUPPORTED_LANGUAGES.map(lang => `${siteUrl}/?lang=${lang}`),
  ...orderedRecipes.map(recipe => `${siteUrl}/recipe/${encodeURIComponent(recipe.id)}/`),
  ...orderedRecipes.flatMap(recipe =>
    SUPPORTED_LANGUAGES
      .filter(lang => lang === 'ar' || !isArabicOnly(recipe))
      .map(lang => `${siteUrl}/?recipe=${encodeURIComponent(recipe.id)}&lang=${lang}`)
  )
]
  // <loc> content must be XML-escaped per the sitemap protocol.
  .map(url => `  <url><loc>${url.replace(/&/g, '&amp;')}</loc></url>`)
  .join('\n');
await writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

console.log(`Recipe data ${version}: ${summaries.length} recipes in ${pageCount} index pages, ${files.size} data files, ${orderedRecipes.length} static pages.`);
