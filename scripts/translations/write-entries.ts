/**
 * Safely merges a batch of translated entries into a recipeTranslations*.json
 * table, with validation — hand-editing 60k-line JSON files invites corruption.
 *
 *   npx tsx scripts/translations/write-entries.ts <lang> <batch.json>
 *
 * batch.json shape: { "<recipeId>": { title, chapter?, category?, cookingMethod?,
 *   prepTime?, cookTime?, servings?, culturalNotes?, ingredients: {id:{name,standardAmount?}},
 *   instructions: {"1": "..."} } }
 *
 * Validations (hard errors):
 *   - id must exist in fatmaAbuHatyRecipes or allRecipes
 *   - title, ingredients, instructions must be non-empty
 *   - ingredient ids must match the recipe's masterIngredients exactly
 *   - instruction keys must cover every stepNumber exactly
 * Warnings (printed, non-fatal): missing optional fields, notes present in
 * source but culturalNotes absent.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { allRecipes } from '../../src/data/recipes';
import { fatmaAbuHatyRecipes } from '../../src/data/chapters/fatmaAbuHaty';

const SUFFIX: Record<string, string> = {
  en: '', fr: 'Fr', es: 'Es', ja: 'Ja', hi: 'Hi', pt: 'Pt', ru: 'Ru', zh: 'Zh', de: 'De',
  it: 'It', el: 'El', ur: 'Ur', fa: 'Fa', tr: 'Tr', ku: 'Ku', id: 'Id', sw: 'Sw',
  ko: 'Ko', nl: 'Nl', ps: 'Ps', he: 'He', pl: 'Pl', sv: 'Sv', te: 'Te'
};

const recipesById = new Map([...allRecipes, ...fatmaAbuHatyRecipes].map(r => [r.id, r]));

type Entry = {
  title?: string;
  chapter?: string;
  category?: string;
  cookingMethod?: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  culturalNotes?: string;
  ingredients?: Record<string, { name?: string; standardAmount?: string }>;
  instructions?: Record<string, string>;
};

async function main() {
  const [lang, batchFile] = process.argv.slice(2);
  if (!lang || !batchFile || !(lang in SUFFIX)) {
    console.error('usage: write-entries.ts <lang> <batch.json>  (langs: ' + Object.keys(SUFFIX).join(' ') + ')');
    process.exit(1);
  }
  const rawBatch = JSON.parse(await readFile(batchFile, 'utf-8')) as Record<string, Entry>;
  // Strip `_`-prefixed draft helper keys (e.g. `_ar` source sidebars).
  const batch: Record<string, Entry> = {};
  for (const [id, entry] of Object.entries(rawBatch)) {
    batch[id] = Object.fromEntries(Object.entries(entry).filter(([k]) => !k.startsWith('_'))) as Entry;
  }
  const file = `src/data/recipeTranslations${SUFFIX[lang]}.json`;
  const table = JSON.parse(await readFile(file, 'utf-8')) as Record<string, Entry>;

  const errors: string[] = [];
  const warnings: string[] = [];
  for (const [id, entry] of Object.entries(batch)) {
    const recipe = recipesById.get(id);
    if (!recipe) { errors.push(`${id}: unknown recipe id`); continue; }
    if (!entry.title?.trim()) errors.push(`${id}: missing title`);
    if (!entry.ingredients || !Object.keys(entry.ingredients).length) errors.push(`${id}: missing ingredients`);
    if (!entry.instructions || !Object.keys(entry.instructions).length) errors.push(`${id}: missing instructions`);

    const miIds = (recipe.masterIngredients ?? []).map(i => i.id);
    const entryIds = Object.keys(entry.ingredients ?? {});
    const missIng = miIds.filter(i => !entryIds.includes(i));
    const extraIng = entryIds.filter(i => !miIds.includes(i));
    if (missIng.length) errors.push(`${id}: missing ingredient ids ${missIng.join(',')}`);
    if (extraIng.length) errors.push(`${id}: unknown ingredient ids ${extraIng.join(',')}`);
    for (const [iid, ing] of Object.entries(entry.ingredients ?? {})) {
      if (!ing?.name?.trim()) errors.push(`${id}.${iid}: empty ingredient name`);
    }

    const steps = (recipe.uniqueInstructions ?? []).map(s => String(s.stepNumber));
    const entrySteps = Object.keys(entry.instructions ?? {});
    const missSt = steps.filter(s => !entrySteps.includes(s));
    const extraSt = entrySteps.filter(s => !steps.includes(s));
    if (missSt.length) errors.push(`${id}: missing step keys ${missSt.join(',')}`);
    if (extraSt.length) errors.push(`${id}: extra step keys ${extraSt.join(',')}`);
    for (const [sk, sv] of Object.entries(entry.instructions ?? {})) {
      if (!sv?.trim()) errors.push(`${id}: empty instruction ${sk}`);
    }

    for (const f of ['category', 'cookingMethod', 'prepTime', 'cookTime', 'servings'] as const) {
      if (!entry[f]) warnings.push(`${id}: no ${f}`);
    }
    if (recipe.culturalNotes && !entry.culturalNotes) warnings.push(`${id}: source has notes, culturalNotes absent`);
  }

  if (errors.length) {
    console.error(`ERRORS — nothing written:\n  ${errors.slice(0, 40).join('\n  ')}${errors.length > 40 ? `\n  …and ${errors.length - 40} more` : ''}`);
    process.exit(1);
  }
  if (warnings.length) console.log(`warnings (${warnings.length}):\n  ${warnings.slice(0, 20).join('\n  ')}${warnings.length > 20 ? `\n  …and ${warnings.length - 20} more` : ''}`);

  const ordered = [...Object.keys(batch)].sort();
  let added = 0, updated = 0;
  for (const id of ordered) {
    if (table[id]) updated++; else added++;
    table[id] = batch[id];
  }
  await writeFile(file, JSON.stringify(table, null, 2) + '\n');
  console.log(`${lang}: ${added} added, ${updated} updated → ${file} (total ${Object.keys(table).length})`);
}

main().catch((e) => { console.error(e); process.exit(1); });
