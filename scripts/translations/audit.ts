/**
 * Reports, per language, recipes missing from its translation table and
 * entries whose ingredient/instruction keys don't cover the recipe.
 *
 *   npx tsx scripts/translations/audit.ts           summary
 *   npx tsx scripts/translations/audit.ts --json    per-recipe detail
 *
 * Chapter, category and cooking method are localized from vocabulary maps in
 * src/utils/recipeLocalization.ts, so only per-recipe text is checked here.
 */
import { readFileSync } from 'node:fs';
import { allRecipes } from '../../src/data/recipes';
import type { RecipeTranslation } from '../../src/utils/recipeLocalization';

export const LANGS = ['en', 'de', 'el', 'es', 'fa', 'fr', 'he', 'hi', 'id', 'it', 'ja', 'ko', 'ku', 'nl', 'pl', 'ps', 'pt', 'ru', 'sv', 'sw', 'tr', 'ur', 'zh', 'te', 'bn', 'vi', 'sq'] as const;

export const fileOf = (lang: string) =>
  `src/data/recipeTranslations${lang === 'en' ? '' : lang[0].toUpperCase() + lang.slice(1)}.json`;

type Recipe = (typeof allRecipes)[number];

export function problems(recipe: Recipe, entry: RecipeTranslation | undefined): string[] {
  if (!entry) return ['absent'];
  const out: string[] = [];
  if (!entry.title) out.push('title');
  const ingredients = recipe.masterIngredients.filter(i => !entry.ingredients?.[i.id]?.name).map(i => i.id);
  if (ingredients.length) out.push(`ingredients:${ingredients.join(',')}`);
  const steps = recipe.uniqueInstructions.map(s => String(s.stepNumber)).filter(n => !entry.instructions?.[n]);
  if (steps.length) out.push(`instructions:${steps.join(',')}`);
  return out;
}

function main() {
const report: Record<string, Record<string, string[]>> = {};
for (const lang of LANGS) {
  const table: Record<string, RecipeTranslation> = JSON.parse(readFileSync(fileOf(lang), 'utf-8'));
  report[lang] = {};
  for (const recipe of allRecipes) {
    if (recipe.englishOnly && lang === 'en') continue;
    const found = problems(recipe, table[recipe.id]);
    if (found.length) report[lang][recipe.id] = found;
  }
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(report, null, 1));
} else {
  console.log(`recipes: ${allRecipes.length}`);
  for (const lang of LANGS) {
    const entries = Object.entries(report[lang]);
    const absent = entries.filter(([, p]) => p[0] === 'absent');
    const byPrefix = new Map<string, number>();
    for (const [id] of absent) byPrefix.set(id.split('-')[0], (byPrefix.get(id.split('-')[0]) ?? 0) + 1);
    const partial = entries.filter(([, p]) => p[0] !== 'absent').map(([id]) => id);
    console.log(`${lang}: ${absent.length} absent [${[...byPrefix].map(([k, v]) => `${k}:${v}`).join(' ')}], ${partial.length} incomplete${partial.length ? ` (${partial.slice(0, 8).join(', ')}${partial.length > 8 ? ', …' : ''})` : ''}`);
  }
}
}

if (import.meta.url === `file://${process.argv[1]}`) main();
