/**
 * Generates translation DRAFTS for the Fatma Abu Haty recipes: every field the
 * per-language glossary can resolve is prefilled, the rest is left empty with
 * the Arabic source kept inline under `_ar` for the translator to fill.
 *
 *   npx tsx scripts/translations/draft-entries.ts <lang> <categorySlug|all>
 *
 * e.g. `npx tsx scripts/translations/draft-entries.ts en meats`
 *      `npx tsx scripts/translations/draft-entries.ts fr all`
 *
 * Writes scripts/translations/drafts/{lang}/{slug}.json — edit that file (fill
 * `title`, `instructions`, novel ingredients, `culturalNotes`), then merge with
 * write-entries.ts. Keys starting with `_` are stripped on merge.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const FILES = ['meats', 'fish', 'vegetables', 'legumes', 'stuffed', 'starches', 'soups',
  'salads', 'pastries', 'savory', 'quick', 'easternDesserts', 'westernDesserts',
  'lightDesserts', 'sweetPies', 'iceCream', 'beverages'];

const CHAPTER_EN = 'Chapter 10: Fatma Abu Haty Channel Recipes';

// Arabic names can embed the measure word (e.g. "كوب لبن دافئ" with amount "1").
// If the amount is a bare number, carry the unit into the draft amount so
// fix-amounts.mjs translates it instead of losing it (e.g. "1 cup" -> "1").
const EMBEDDED_UNIT = /^(كوبية|كباية|كوب|علبة|باكيت|باكو|كيس|لفة|رأس|فصوص|فص|شرائح|شريحة|قطعة|قطع|مكعب|ملعقة(?:\s+صغيرة|\s+كبيرة)?|حبة|رغيف|عدد)\s+/;
const BARE_NUMBER = /^\d+(?:[/.\-]\d+)*$/;

type ChannelRecipe = {
  id: string; title: string; category: string; method: string;
  prep?: string; cook?: string; servings?: string; difficulty?: string;
  siteMatch?: string; notes?: string;
  ingredients: [string, string, string][];
  steps: (string | [string, string])[];
};

type Glossary = {
  ingredients: { gloss: Record<string, string> };
  amounts: { gloss: Record<string, string> };
  categories: { gloss: Record<string, string> };
  methods: { gloss: Record<string, string> };
  timings: { gloss: Record<string, string> };
};

async function main() {
  const [lang, slugArg] = process.argv.slice(2);
  if (!lang || !slugArg) {
    console.error('usage: draft-entries.ts <lang> <categorySlug|all>');
    process.exit(1);
  }
  const g: Glossary = JSON.parse(await readFile(`scripts/translations/glossary/${lang}.json`, 'utf-8'));
  const slugs = slugArg === 'all' ? FILES : [slugArg];
  await mkdir(`scripts/translations/drafts/${lang}`, { recursive: true });

  for (const slug of slugs) {
    const path = `src/data/fatmaAbuHaty/${slug}.json`;
    if (!existsSync(path)) { console.error(`skip ${slug}: ${path} missing`); continue; }
    const recipes = JSON.parse(await readFile(path, 'utf-8')) as ChannelRecipe[];
    const draft: Record<string, unknown> = {};
    let glossHits = 0, glossMiss = 0;

    for (const r of recipes) {
      const ingredients: Record<string, unknown> = {};
      r.ingredients.forEach(([name, amount], i) => {
        const gname = g.ingredients.gloss[name];
        let gamount = g.amounts.gloss[amount] ?? amount;
        const embedded = EMBEDDED_UNIT.exec(name.trim());
        if (embedded && BARE_NUMBER.test(String(gamount).trim())) {
          gamount = `${String(gamount).trim()} ${embedded[1]}`;
        }
        gname ? glossHits++ : glossMiss++;
        ingredients[`${r.id}-i${i + 1}`] = { name: gname ?? '', standardAmount: gamount };
      });
      const instructions: Record<string, string> = {};
      const arSteps: Record<string, string> = {};
      r.steps.forEach((s, i) => {
        const text = typeof s === 'string' ? s : s[0];
        arSteps[String(i + 1)] = text;
        instructions[String(i + 1)] = '';
      });
      draft[r.id] = {
        _ar: {
          title: r.title,
          category: r.category, method: r.method,
          prep: r.prep, cook: r.cook, servings: r.servings,
          notes: r.notes, siteMatch: r.siteMatch,
          ingredients: r.ingredients.map(([n, a]) => `${a} ${n}`),
          steps: arSteps
        },
        title: '',
        chapter: CHAPTER_EN,
        category: g.categories.gloss[r.category] ?? '',
        cookingMethod: g.methods.gloss[r.method] ?? '',
        prepTime: g.timings.gloss[r.prep ?? ''] ?? r.prep ?? '',
        cookTime: g.timings.gloss[r.cook ?? ''] ?? r.cook ?? '',
        servings: g.timings.gloss[r.servings ?? ''] ?? r.servings ?? '',
        ...(r.notes ? { culturalNotes: '' } : {}),
        ingredients,
        instructions
      };
    }
    const out = `scripts/translations/drafts/${lang}/${slug}.json`;
    await writeFile(out, JSON.stringify(draft, null, 2) + '\n');
    console.log(`${lang}/${slug}: ${recipes.length} recipes, glossary ${glossHits}/${glossHits + glossMiss} ingredient hits → ${out}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
