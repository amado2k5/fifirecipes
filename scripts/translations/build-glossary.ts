/**
 * Builds per-language translation glossaries from the existing recipe
 * translation tables, so the Fatma Abu Haty pass (808 recipes × 24 langs)
 * reuses established terminology instead of drifting.
 *
 *   npx tsx scripts/translations/build-glossary.ts
 *
 * Writes scripts/translations/glossary/{lang}.json with:
 *   ingredients : ar ingredient name      -> localized name
 *   amounts     : ar standardAmount       -> localized standardAmount
 *   categories  : ar recipe.category      -> localized category
 *   methods     : ar recipe.cookingMethod -> localized method
 *   timings     : ar prepTime/cookTime/servings -> localized string
 *
 * Conflicts (same ar term translated differently across recipes) resolve to
 * the most frequent target; alternates are kept under `conflicts` for review.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { allRecipes } from '../../src/data/recipes';
import * as loc from '../../src/utils/recipeLocalization';

const SUFFIX: Record<string, string> = {
  en: '', fr: 'Fr', es: 'Es', ja: 'Ja', hi: 'Hi', pt: 'Pt', ru: 'Ru', zh: 'Zh', de: 'De',
  it: 'It', el: 'El', ur: 'Ur', fa: 'Fa', tr: 'Tr', ku: 'Ku', id: 'Id', sw: 'Sw',
  ko: 'Ko', nl: 'Nl', ps: 'Ps', he: 'He', pl: 'Pl', sv: 'Sv', te: 'Te', bn: 'Bn', vi: 'Vi', sq: 'Sq'
};

type Table = Record<string, {
  title?: string;
  category?: string;
  cookingMethod?: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  ingredients?: Record<string, { name?: string; standardAmount?: string }>;
}>;

interface Gloss {
  [term: string]: string;
}

async function loadTable(lang: string): Promise<Table> {
  const suffix = SUFFIX[lang];
  const file = `src/data/recipeTranslations${suffix}.json`;
  return JSON.parse(await (await import('node:fs/promises')).readFile(file, 'utf-8'));
}

function tally(map: Map<string, Map<string, number>>, k: string | undefined, v: string | undefined) {
  if (!k || !v) return;
  const inner = map.get(k) ?? new Map<string, number>();
  inner.set(v, (inner.get(v) ?? 0) + 1);
  map.set(k, inner);
}

function resolve(map: Map<string, Map<string, number>>): { gloss: Gloss; conflicts: Record<string, string[]> } {
  const gloss: Gloss = {};
  const conflicts: Record<string, string[]> = {};
  for (const [k, inner] of map) {
    const ranked = [...inner.entries()].sort((a, b) => b[1] - a[1]);
    gloss[k] = ranked[0][0];
    if (ranked.length > 1) conflicts[k] = ranked.slice(1).map(([v]) => v);
  }
  return { gloss, conflicts };
}

async function main() {
  await mkdir('scripts/translations/glossary', { recursive: true });
  for (const lang of Object.keys(SUFFIX)) {
    const table = await loadTable(lang);
    const ingredients = new Map<string, Map<string, number>>();
    const amounts = new Map<string, Map<string, number>>();
    const categories = new Map<string, Map<string, number>>();
    const methods = new Map<string, Map<string, number>>();
    const timings = new Map<string, Map<string, number>>();

    for (const recipe of allRecipes) {
      const entry = table[recipe.id];
      if (!entry) continue;
      tally(categories, recipe.category, entry.category);
      tally(methods, recipe.cookingMethod, entry.cookingMethod);
      tally(timings, recipe.prepTime, entry.prepTime);
      tally(timings, recipe.cookTime, entry.cookTime);
      tally(timings, recipe.servings, entry.servings);
      for (const mi of recipe.masterIngredients ?? []) {
        const ti = entry.ingredients?.[mi.id];
        tally(ingredients, mi.name, ti?.name);
        tally(amounts, mi.standardAmount, ti?.standardAmount);
      }
    }

    // The curated vocab maps in recipeLocalization.ts are authoritative for
    // categories/methods — the table tally is only a fallback for terms they
    // don't cover (tables carry inconsistent values for the same ar term).
    const cats = resolve(categories);
    const meths = resolve(methods);
    const vocab = loc.RECIPE_VOCAB[lang] ?? loc.RECIPE_VOCAB.en;
    const canonCat = vocab?.category;
    const canonMeth = vocab?.method;
    cats.gloss = { ...cats.gloss, ...canonCat };
    meths.gloss = { ...meths.gloss, ...canonMeth };

    const out = {
      lang,
      ingredients: resolve(ingredients),
      amounts: resolve(amounts),
      categories: cats,
      methods: meths,
      timings: resolve(timings)
    };
    await writeFile(`scripts/translations/glossary/${lang}.json`, JSON.stringify(out, null, 2) + '\n');
    console.log(`${lang}: ${Object.keys(out.ingredients.gloss).length} ingredients, ${Object.keys(out.amounts.gloss).length} amounts, ${Object.keys(out.categories.gloss).length} categories, ${Object.keys(out.methods.gloss).length} methods, ${Object.keys(out.timings.gloss).length} timings`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
