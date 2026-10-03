/**
 * Dump recipes that have no banner photo to scripts/recipe-images/work/recipes.json,
 * which state.py syncs into work/state.db for the describe → generate → publish → ship
 * pipeline.
 *
 *   npx tsx scripts/recipe-images/export-missing.ts [--ids a b c] [--ids-file FILE]
 *                                                   [--extra-file JSON] [--out FILE]
 *
 * --ids/--ids-file restrict the export to the given recipe ids (used for the
 * world-cuisines ids). --extra-file merges per-id extra fields (e.g. section,
 * refs, localName, country) into the written rows.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allRecipes } from '../../src/data/recipes';
import { getRecipeImagePath } from '../../src/data/recipeImages';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const WORK = resolve(HERE, 'work');
const OUT_DEFAULT = resolve(WORK, 'recipes.json');
const IMAGES_DIR = resolve(ROOT, 'public/recipe-images');

interface ExportRow {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  cookingMethod?: string;
  ingredients?: string[];
  instructions?: string[];
  duplicateOf?: string;
  [key: string]: unknown;
}

function argList(flag: string): string[] {
  const i = process.argv.indexOf(flag);
  if (i === -1) return [];
  const out: string[] = [];
  for (const v of process.argv.slice(i + 1)) {
    if (v.startsWith('--')) break;
    out.push(v);
  }
  return out;
}

function argValue(flag: string): string | undefined {
  return argList(flag)[0];
}

/** fah-* entries labeled 'variant' reuse the photo of their site match. */
function variantDuplicates(): Map<string, string> {
  const dir = resolve(ROOT, 'src/data/fatmaAbuHaty');
  const dup = new Map<string, string>();
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.json')) continue;
    const rows = JSON.parse(readFileSync(resolve(dir, f), 'utf8')) as { id: string; label?: string; siteMatch?: string }[];
    if (!Array.isArray(rows)) continue;
    for (const r of rows) if (r.label === 'variant' && r.siteMatch) dup.set(r.id, r.siteMatch);
  }
  return dup;
}

function main() {
  const ids = [...argList('--ids'), ...(argValue('--ids-file')
    ? readFileSync(argValue('--ids-file')!, 'utf8').split('\n').map(s => s.trim()).filter(Boolean)
    : [])];
  const extra: Record<string, Record<string, unknown>> = argValue('--extra-file')
    ? JSON.parse(readFileSync(argValue('--extra-file')!, 'utf8'))
    : {};
  const out = argValue('--out') ?? OUT_DEFAULT;
  const dup = variantDuplicates();

  const rows: ExportRow[] = [];
  for (const r of allRecipes) {
    if (ids.length && !ids.includes(r.id)) continue;
    const published = getRecipeImagePath(r.id) !== undefined || existsSync(resolve(IMAGES_DIR, `${r.id}.jpg`));
    if (published && !ids.length) continue;
    rows.push({
      id: r.id,
      title: r.title,
      ...(r.titleEn ? { titleEn: r.titleEn } : {}),
      category: r.category,
      cookingMethod: r.cookingMethod,
      ingredients: r.masterIngredients.map(i => i.name),
      instructions: r.uniqueInstructions.map(s => s.text),
      ...(dup.get(r.id) ? { duplicateOf: dup.get(r.id) } : {}),
      ...(extra[r.id] ?? {})
    });
  }
  writeFileSync(out, JSON.stringify(rows, null, 1) + '\n');
  console.log(`Wrote ${rows.length} recipes to ${out}`);
}

main();
