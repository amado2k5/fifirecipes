/**
 * Builds the TV-optimised slice of the public data API for the Amazon Fire TV
 * client — see docs/tv-api.md:
 *
 *   public/data/tv/manifest.json        version, languages, endpoint templates
 *   public/data/tv/index/<lang>.json    one compact recipe-card index per language
 *   public/data/tv/feed/<lang>.json     home rows (featured / recent / chapters / kids)
 *   public/data/tv/chapters/<lang>.json localised chapter list for browse rails
 *   public/data/tv/kids/<lang>.json     compact kids cards (details stay in data/kids/)
 *   public/data/tv/images.json          image paths + pixel size per recipe photo
 *
 * scripts/generate-public-index.ts calls generateTvData() with the inputs it
 * has already loaded, so the TV files share the site's content version and are
 * written in the same pass. `npm run tvdata` re-runs just this layer against an
 * already-generated public/data (it reads manifest.json for the version).
 *
 * The build fails loudly when an active recipe, a referenced image file or a
 * fully translated language is missing.
 */
import { existsSync, readFileSync } from 'node:fs';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';
import { allRecipes } from '../src/data/recipes';
import { getRecipeImagePath } from '../src/data/recipeImages';
import { TOP_20_LANGUAGES } from '../src/data/translations';
import {
  getLocalizedRecipe,
  registerTranslations,
  type TranslationTable
} from '../src/utils/recipeLocalization';
import { KIDS_TOGGLE_LABELS } from '../src/kids/languages';
import type { KidsRecipeCard } from '../src/kids/types';
import type { Recipe, SupportedLanguage } from '../src/types';

/** Everything generateTvData needs, already loaded by the main generator. */
export interface TvDataContext {
  /** Content version — the same hash as data/manifest.json. */
  version: string;
  /** Active catalog in the list's default order. */
  orderedRecipes: Recipe[];
  /** Registered translation tables keyed by language. */
  tables: Partial<Record<SupportedLanguage, TranslationTable>>;
  /** Kids cards per language, as written to data/kids/<lang>/index.json. */
  kidsIndex: Partial<Record<SupportedLanguage, KidsRecipeCard[]>>;
  /** src/data/recipeVideos.json, keyed by recipe id. */
  videos: Record<string, { ar?: unknown[]; en?: unknown[] }>;
  /** Same signature as the main generator's `put`: path → JSON body. */
  put: (path: string, value: unknown) => void;
}

/** Recipes in the "featured" and "recently added" home rows. */
const FEATURED_COUNT = 20;
const RECENT_COUNT = 20;
const TV_DIR = 'public/data/tv';

/** Pixel width of the card thumbnails in public/recipe-images/thumbs/. */
const CARD_IMAGE_WIDTH = 800;
/** Originals this wide can serve a full-bleed @3x iPhone hero (~390pt). */
const RETINA_HERO_MIN_WIDTH = 1200;

// Row titles for the two home rows that are not chapters. The kids row reuses
// KIDS_TOGGLE_LABELS; anything missing falls back to English.
const TV_ROW_TITLES: Partial<Record<SupportedLanguage, { featured: string; recent: string }>> = {
  ar: { featured: 'وصفات مميزة', recent: 'أضيفت حديثاً' },
  en: { featured: 'Featured', recent: 'Recently added' },
  fr: { featured: 'À la une', recent: 'Ajoutées récemment' },
  es: { featured: 'Destacadas', recent: 'Añadidas recientemente' },
  ja: { featured: '注目のレシピ', recent: '最近追加されたレシピ' },
  hi: { featured: 'चुनिंदा', recent: 'हाल ही में जोड़ी गई' },
  pt: { featured: 'Em destaque', recent: 'Adicionadas recentemente' },
  ru: { featured: 'Рекомендуемые', recent: 'Недавно добавленные' },
  zh: { featured: '精选', recent: '最新添加' },
  de: { featured: 'Empfohlen', recent: 'Kürzlich hinzugefügt' },
  it: { featured: 'In evidenza', recent: 'Aggiunte di recente' },
  el: { featured: 'Επιλεγμένες', recent: 'Πρόσφατα προστέθηκαν' },
  ur: { featured: 'نمایاں', recent: 'حال ہی میں شامل شدہ' },
  fa: { featured: 'منتخب', recent: 'اخیراً اضافه‌شده' },
  tr: { featured: 'Öne çıkanlar', recent: 'Son eklenenler' },
  ku: { featured: 'Taybet', recent: 'Vê dawiyê hatine zêdekirin' },
  id: { featured: 'Unggulan', recent: 'Baru ditambahkan' },
  sw: { featured: 'Zilizoangaziwa', recent: 'Zilizoongezwa hivi karibuni' },
  ko: { featured: '추천', recent: '최근 추가' },
  nl: { featured: 'Uitgelicht', recent: 'Recent toegevoegd' },
  ps: { featured: 'غوره شوي', recent: 'په وروستي کې ورزیاتې شوي' },
  he: { featured: 'מומלצות', recent: 'נוספו לאחרונה' },
  pl: { featured: 'Polecane', recent: 'Ostatnio dodane' },
  sv: { featured: 'Utvalda', recent: 'Senast tillagda' },
  te: { featured: 'ప్రత్యేక వంటకాలు', recent: 'ఇటీవల జోడించినవి' },
  bn: { featured: 'বাছাই করা রেসিপি', recent: 'সম্প্রতি যোগ করা হয়েছে' },
  sq: { featured: 'Të zgjedhura', recent: 'Shtuar së fundi' }
};

const rowTitles = (lang: SupportedLanguage) => TV_ROW_TITLES[lang] ?? TV_ROW_TITLES.en!;

/**
 * A language is complete when every active recipe resolves to a full entry
 * (title + ingredients + instructions). Arabic is the archive's own language
 * and has no translation table.
 */
const isComplete = (lang: SupportedLanguage, recipes: Recipe[], tables: TvDataContext['tables']) => {
  if (lang === 'ar') return true;
  const table = tables[lang];
  if (!table) return false;
  return recipes.every(recipe => {
    const entry = table[recipe.id];
    return Boolean(entry?.title && entry.ingredients && entry.instructions);
  });
};

/**
 * The recipes eligible for the TV layer: those fully translated in every
 * picker language. Recipes still being translated join the index automatically
 * once their last language lands, instead of dropping every language.
 */
export const tvEligibleRecipes = (recipes: Recipe[], tables: TvDataContext['tables']) =>
  recipes.filter(recipe =>
    TOP_20_LANGUAGES.every(({ code }) => {
      if (code === 'ar') return true;
      const entry = tables[code]?.[recipe.id];
      return Boolean(entry?.title && entry.ingredients && entry.instructions);
    })
  );

// ---------------------------------------------------------------------------
// Minimal JSON-Schema validator for the subset used by tv-api.schema.json.

interface Schema {
  $ref?: string;
  type?: string;
  required?: string[];
  properties?: Record<string, Schema>;
  additionalProperties?: boolean | Schema;
  items?: Schema;
  enum?: unknown[];
  pattern?: string;
  minLength?: number;
  minItems?: number;
  minProperties?: number;
}

function validateJson(value: unknown, schema: Schema, root: { definitions: Record<string, Schema> }, path: string, errors: string[]) {
  if (schema.$ref) {
    const target = root.definitions[schema.$ref.replace('#/definitions/', '')];
    if (!target) errors.push(`${path}: unknown $ref ${schema.$ref}`);
    else validateJson(value, target, root, path, errors);
    return;
  }
  if (schema.enum && !schema.enum.includes(value)) {
    errors.push(`${path}: ${JSON.stringify(value)} not in ${JSON.stringify(schema.enum)}`);
    return;
  }
  if (schema.type) {
    const ok =
      schema.type === 'array' ? Array.isArray(value)
      : schema.type === 'integer' ? typeof value === 'number' && Number.isInteger(value)
      : schema.type === 'number' ? typeof value === 'number'
      : schema.type === 'object' ? typeof value === 'object' && value !== null && !Array.isArray(value)
      : typeof value === schema.type;
    if (!ok) {
      errors.push(`${path}: expected ${schema.type}, got ${JSON.stringify(value)?.slice(0, 80)}`);
      return;
    }
  }
  if (typeof value === 'string') {
    if (schema.minLength && value.length < schema.minLength) errors.push(`${path}: shorter than ${schema.minLength}`);
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) errors.push(`${path}: ${value} fails /${schema.pattern}/`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems && value.length < schema.minItems) errors.push(`${path}: fewer than ${schema.minItems} items`);
    if (schema.items) value.forEach((item, i) => validateJson(item, schema.items!, root, `${path}[${i}]`, errors));
  }
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const record = value as Record<string, unknown>;
    if (schema.minProperties && Object.keys(record).length < schema.minProperties) {
      errors.push(`${path}: fewer than ${schema.minProperties} properties`);
    }
    for (const key of schema.required ?? []) {
      if (!(key in record)) errors.push(`${path}: missing "${key}"`);
    }
    for (const [key, child] of Object.entries(schema.properties ?? {})) {
      if (key in record) validateJson(record[key], child, root, `${path}.${key}`, errors);
    }
    const extras = Object.keys(record).filter(key => !(schema.properties && key in schema.properties));
    if (schema.additionalProperties === false) {
      for (const key of extras) errors.push(`${path}: unexpected "${key}"`);
    } else if (typeof schema.additionalProperties === 'object') {
      for (const key of extras) validateJson(record[key], schema.additionalProperties, root, `${path}.${key}`, errors);
    }
  }
}

const schemaFor = (path: string): string => {
  if (path === 'manifest.json') return 'manifest';
  if (path === 'images.json') return 'images';
  return path.slice(0, path.indexOf('/'));
};

/** Every string in a generated TV file that is a site-relative image path. */
function* sitePaths(value: unknown): Generator<string> {
  if (typeof value === 'string') {
    if (value.startsWith('/') && /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(value)) yield value;
  } else if (Array.isArray(value)) {
    for (const item of value) yield* sitePaths(item);
  } else if (typeof value === 'object' && value !== null) {
    for (const item of Object.values(value)) yield* sitePaths(item);
  }
}

// ---------------------------------------------------------------------------

/** Pre-built home layouts per language; clients pick one at random each time Home is shown. */
const HOME_VARIANT_COUNT = 30;
/** Recipes per rail in a home variant (chapter rails are teasers; the full chapter is in Chapters). */
const HOME_RAIL_SIZE = 20;

/** Small seeded PRNG so a given data version always yields the same variants. */
const seededRandom = (seed: string) => {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return () => {
    h = (h + 0x6d2b79f5) >>> 0;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const shuffled = <T,>(items: T[], random: () => number) => {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

interface HomeVariant {
  hero: string;
  /** featured, recent and one rail per chapter — no recipe appears twice, hero included. */
  rails: { key: string; items: string[] }[];
}

/**
 * Language-independent home layouts: every variant has a different hero (a
 * recipe with a photo) and fresh, non-overlapping rails drawn from the whole
 * eligible catalogue, so the page never repeats a recipe.
 */
function buildHomeVariants(recipes: Recipe[], seed: string, hasPhoto: (id: string) => boolean): HomeVariant[] {
  const random = seededRandom(seed);
  const chapterNumbers = [...new Set(recipes.map(recipe => recipe.chapterNumber))].sort((a, b) => a - b);
  const heroes = shuffled(recipes.filter(recipe => hasPhoto(recipe.id)).map(recipe => recipe.id), random);
  return Array.from({ length: HOME_VARIANT_COUNT }, (_, n) => {
    const hero = heroes[n % heroes.length];
    const taken = new Set([hero]);
    const draw = (candidates: Recipe[]) => {
      const items: string[] = [];
      for (const recipe of shuffled(candidates, random)) {
        if (items.length === HOME_RAIL_SIZE) break;
        if (taken.has(recipe.id)) continue;
        taken.add(recipe.id);
        items.push(recipe.id);
      }
      return items;
    };
    const rails = [
      { key: 'featured', items: draw(recipes) },
      { key: 'recent', items: draw(recipes) },
      ...chapterNumbers.map(chapter => ({ key: `chapter:${chapter}`, items: draw(recipes.filter(recipe => recipe.chapterNumber === chapter)) }))
    ].filter(rail => rail.items.length > 0);
    return { hero, rails };
  });
}

/**
 * Emits every tv/* file through `put`, validates them, and returns the map of
 * path → JSON body (used by the standalone `npm run tvdata` run to write the
 * files itself).
 */
export async function generateTvData({ version, orderedRecipes, tables, kidsIndex, videos, put }: TvDataContext) {
  const tvFiles = new Map<string, string>();
  const emit = (path: string, value: unknown) => {
    tvFiles.set(path, JSON.stringify(value));
    put(path, value);
  };

  const completeLanguages = TOP_20_LANGUAGES.filter(({ code }) => isComplete(code, orderedRecipes, tables));
  const dropped = TOP_20_LANGUAGES.filter(({ code }) => !isComplete(code, orderedRecipes, tables));
  if (dropped.length) {
    const detail = dropped.map(({ code }) => {
      const table = tables[code];
      const missing = table
        ? orderedRecipes.filter(recipe => !table[recipe.id]?.ingredients || !table[recipe.id]?.instructions).length
        : orderedRecipes.length;
      return `${code} (${missing} of ${orderedRecipes.length} recipes without full translations)`;
    });
    throw new Error(`TV data: languages dropped from the picker:\n  ${detail.join('\n  ')}`);
  }

  const imageOf = (id: string) =>
    existsSync(`public/recipe-images/thumbs/${id}.jpg`) ? `/recipe-images/thumbs/${id}.jpg` : undefined;
  const hasVideo = (id: string) => Boolean(videos[id]?.ar?.length || videos[id]?.en?.length);

  const homeVariants = buildHomeVariants(orderedRecipes, version, id => Boolean(imageOf(id)));

  // One card index and one home feed per fully translated language.
  for (const { code } of completeLanguages) {
    const index = orderedRecipes.map(recipe => {
      const localized = getLocalizedRecipe(recipe, code);
      const image = imageOf(recipe.id) ?? recipe.imageUrl;
      return {
        id: recipe.id,
        title: localized.title,
        ...(recipe.titleEn && localized.title !== recipe.titleEn ? { titleEn: recipe.titleEn } : {}),
        category: localized.category,
        ...(localized.cookingMethod ? { cookingMethod: localized.cookingMethod } : {}),
        ...(localized.prepTime ? { prepTime: localized.prepTime } : {}),
        ...(localized.cookTime ? { cookTime: localized.cookTime } : {}),
        ...(localized.servings ? { servings: localized.servings } : {}),
        ...(recipe.difficulty ? { difficulty: recipe.difficulty } : {}),
        ...(image ? { image } : {}),
        hasVideo: hasVideo(recipe.id),
        chapter: recipe.chapterNumber,
        chapterName: localized.chapter
      };
    });
    emit(`tv/index/${code}.json`, index);

    const titles = rowTitles(code);
    const chapterNumbers = [...new Set(orderedRecipes.map(recipe => recipe.chapterNumber))].sort((a, b) => a - b);
    const eligibleIds = new Set(orderedRecipes.map(recipe => recipe.id));
    const rows = [
      { key: 'featured', title: titles.featured, items: orderedRecipes.slice(0, FEATURED_COUNT).map(recipe => recipe.id) },
      { key: 'recent', title: titles.recent, items: [...allRecipes].filter(recipe => eligibleIds.has(recipe.id)).slice(-RECENT_COUNT).reverse().map(recipe => recipe.id) },
      ...chapterNumbers.map(chapter => ({
        key: `chapter:${chapter}`,
        title: getLocalizedRecipe(orderedRecipes.find(recipe => recipe.chapterNumber === chapter)!, code).chapter,
        items: orderedRecipes.filter(recipe => recipe.chapterNumber === chapter).map(recipe => recipe.id)
      })),
      ...(kidsIndex[code]?.length
        ? [{ key: 'kids', title: KIDS_TOGGLE_LABELS[code]?.kids ?? 'Cooking with Kids', items: kidsIndex[code]!.map(card => card.id) }]
        : [])
    ];
    emit(`tv/feed/${code}.json`, { rows });

    // Random home layouts: same row titles, new hero + items every variant.
    const titleOf = new Map(rows.map(row => [row.key, row.title]));
    const kidsRow = rows.find(row => row.key === 'kids');
    const variantRandom = seededRandom(`${version}:${code}:kids`);
    emit(`tv/feed-variants/${code}.json`, {
      variants: homeVariants.map(variant => ({
        hero: variant.hero,
        rows: [
          ...variant.rails.map(rail => ({ key: rail.key, title: titleOf.get(rail.key)!, items: rail.items })),
          ...(kidsRow ? [{ ...kidsRow, items: shuffled(kidsRow.items, variantRandom) }] : [])
        ]
      }))
    });

    emit(`tv/chapters/${code}.json`, chapterNumbers.map(chapter => {
      const recipes = orderedRecipes.filter(recipe => recipe.chapterNumber === chapter);
      const cover = recipes.map(recipe => imageOf(recipe.id)).find(Boolean);
      return {
        id: chapter,
        name: getLocalizedRecipe(recipes[0], code).chapter,
        recipeCount: recipes.length,
        ...(cover ? { coverImage: cover } : {})
      };
    }));

    if (kidsIndex[code]?.length) {
      emit(`tv/kids/${code}.json`, kidsIndex[code]!.map(({ id, title, group, ages, minutes, noCook, cover }) =>
        ({ id, title, group, ages, minutes, noCook, cover })));
    }
  }

  // Every recipe photo on disk, with its pixel size for layout math.
  // The archive's originals top out at ~1200px wide: `card2x`/`full2x` point
  // at the best file a Retina client can use (docs/tv-api.md). `card2x` is
  // only emitted when it beats the 800px card thumb; `full2x` only when the
  // original truly reaches @3x-hero resolution.
  const images: Record<string, { card: string; card2x?: string; full: string; full2x?: string; w: number; h: number }> = {};
  await Promise.all(orderedRecipes.map(async recipe => {
    if (!getRecipeImagePath(recipe.id)) return;
    const full = `/recipe-images/${recipe.id}.jpg`;
    if (!existsSync(`public${full}`)) return;
    try {
      const { width, height } = await sharp(`public${full}`).metadata();
      if (!width || !height) return;
      images[recipe.id] = {
        card: `/recipe-images/thumbs/${recipe.id}.jpg`,
        ...(width > CARD_IMAGE_WIDTH ? { card2x: full } : {}),
        full,
        ...(width >= RETINA_HERO_MIN_WIDTH ? { full2x: full } : {}),
        w: width,
        h: height
      };
    } catch {
      // An unreadable file fails below in the image-path validation anyway if referenced.
    }
  }));
  emit('tv/images.json', images);

  emit('tv/manifest.json', {
    version,
    generatedAt: new Date().toISOString(),
    recipeCount: orderedRecipes.length,
    pageSize: 100,
    languages: completeLanguages.map(({ code, name, nativeName, dir }) => ({
      code,
      nativeName,
      englishName: name,
      dir,
      complete: true
    })),
    endpoints: {
      index: '/data/tv/index/{lang}.json',
      feed: '/data/tv/feed/{lang}.json',
      feedVariants: '/data/tv/feed-variants/{lang}.json',
      chapters: '/data/tv/chapters/{lang}.json',
      kids: '/data/tv/kids/{lang}.json',
      recipe: '/data/recipes/{id}.json',
      i18n: '/data/i18n/{lang}.json',
      search: '/data/search/{lang}.json',
      videos: '/data/videos/{id}.json',
      kidsRecipe: '/data/kids/{lang}/{id}.json',
      images: '/data/tv/images.json'
    }
  });

  validateTvData(tvFiles, orderedRecipes);
  return tvFiles;
}

/**
 * Validates every generated TV file against scripts/tv-api.schema.json, checks
 * that no active recipe id is missing from any language index and that every
 * site-relative path points at a real file under public/. Throws on the first
 * problem list.
 */
export function validateTvData(tvFiles: Map<string, string>, orderedRecipes: Recipe[]) {
  const root = JSON.parse(readFileSync('scripts/tv-api.schema.json', 'utf-8')) as { definitions: Record<string, Schema> };
  const problems: string[] = [];
  const parsed = new Map<string, unknown>();
  const activeIds = new Set(orderedRecipes.map(recipe => recipe.id));
  const languageCodes = new Set<string>();

  for (const [path, body] of tvFiles) {
    let value: unknown;
    try {
      value = JSON.parse(body);
    } catch (error) {
      problems.push(`${path}: does not parse (${(error as Error).message})`);
      continue;
    }
    parsed.set(path, value);
    const errors: string[] = [];
    validateJson(value, { $ref: `#/definitions/${schemaFor(path.slice(3))}` }, root, path, errors);
    problems.push(...errors);
    for (const sitePath of sitePaths(value)) {
      if (!existsSync(`public${sitePath}`)) problems.push(`${path}: ${sitePath} does not exist under public/`);
    }
  }

  const manifest = parsed.get('tv/manifest.json') as { languages?: { code: string }[] } | undefined;
  for (const { code } of manifest?.languages ?? []) languageCodes.add(code);
  for (const code of languageCodes) {
    const index = parsed.get(`tv/index/${code}.json`) as { id: string }[] | undefined;
    if (!index) {
      problems.push(`manifest lists ${code} but tv/index/${code}.json is missing`);
      continue;
    }
    const ids = new Set(index.map(card => card.id));
    const missing = [...activeIds].filter(id => !ids.has(id));
    const extra = [...ids].filter(id => !activeIds.has(id));
    if (missing.length) problems.push(`tv/index/${code}.json: ${missing.length} recipes missing (${missing.slice(0, 5).join(', ')}…)`);
    if (extra.length) problems.push(`tv/index/${code}.json: ${extra.length} unknown ids (${extra.slice(0, 5).join(', ')}…)`);

    const feed = parsed.get(`tv/feed/${code}.json`) as { rows: { key: string; items: string[] }[] } | undefined;
    for (const row of feed?.rows ?? []) {
      if (row.key === 'kids') continue;
      const unknown = row.items.filter(id => !ids.has(id));
      if (unknown.length) problems.push(`tv/feed/${code}.json row "${row.key}": unknown ids ${unknown.slice(0, 5).join(', ')}`);
    }
    const variants = (parsed.get(`tv/feed-variants/${code}.json`) as { variants: { hero: string; rows: { key: string; items: string[] }[] }[] } | undefined)?.variants;
    if (!variants) problems.push(`tv/feed-variants/${code}.json is missing`);
    variants?.forEach((variant, n) => {
      const seen = new Set<string>([variant.hero]);
      if (!ids.has(variant.hero)) problems.push(`tv/feed-variants/${code}.json #${n}: unknown hero ${variant.hero}`);
      for (const row of variant.rows) {
        if (row.key === 'kids') continue;
        for (const id of row.items) {
          if (!ids.has(id)) problems.push(`tv/feed-variants/${code}.json #${n} row "${row.key}": unknown id ${id}`);
          else if (seen.has(id)) problems.push(`tv/feed-variants/${code}.json #${n}: ${id} appears twice`);
          seen.add(id);
        }
      }
    });
    const chapters = parsed.get(`tv/chapters/${code}.json`) as { id: number }[] | undefined;
    for (const row of feed?.rows ?? []) {
      if (row.key.startsWith('chapter:') && !chapters?.some(chapter => `chapter:${chapter.id}` === row.key)) {
        problems.push(`tv/feed/${code}.json row "${row.key}" has no matching chapter`);
      }
    }
  }

  if (problems.length) throw new Error(`TV data validation failed:\n  ${problems.join('\n  ')}`);
}

// ---------------------------------------------------------------------------
// Standalone run (`npm run tvdata`): rebuilds just the tv/ directory against an
// already-generated public/data, reusing its manifest version so cache-busting
// stays consistent.

async function main() {
  const tables: TvDataContext['tables'] = {};
  for (const { code } of TOP_20_LANGUAGES) {
    if (code === 'ar') continue;
    const file = code === 'en' ? 'recipeTranslations.json' : `recipeTranslations${code[0].toUpperCase()}${code.slice(1)}.json`;
    try {
      tables[code] = JSON.parse(await readFile(`src/data/${file}`, 'utf-8'));
      registerTranslations(code, tables[code]!);
    } catch {
      // A language without a table is reported by the completeness check.
    }
  }

  const manifest = JSON.parse(await readFile('public/data/manifest.json', 'utf-8')) as { version: string };
  const kidsIndex: TvDataContext['kidsIndex'] = {};
  for (const code of Object.keys(KIDS_TOGGLE_LABELS) as SupportedLanguage[]) {
    try {
      kidsIndex[code] = JSON.parse(await readFile(`public/data/kids/${code}/index.json`, 'utf-8'));
    } catch {
      // Kids mode not generated for this language yet.
    }
  }
  const videos = JSON.parse(await readFile('src/data/recipeVideos.json', 'utf-8')) as TvDataContext['videos'];
  const orderedRecipes = tvEligibleRecipes(
    [...allRecipes].sort((a, b) => b.overlapAnalysis.overlapPercentage - a.overlapAnalysis.overlapPercentage),
    tables
  );

  const files = await generateTvData({
    version: manifest.version,
    orderedRecipes,
    tables,
    kidsIndex,
    videos,
    put: () => {}
  });

  await rm(TV_DIR, { recursive: true, force: true });
  for (const [path, body] of files) {
    const fullPath = `${TV_DIR}/${path.slice(3)}`;
    await mkdir(fullPath.slice(0, fullPath.lastIndexOf('/')), { recursive: true });
    await writeFile(fullPath, body);
  }
  console.log(`TV data ${manifest.version}: ${files.size} files under ${TV_DIR}/.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
