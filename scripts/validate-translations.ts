/**
 * Validates recipe translation files against the active recipe ID set and the
 * English source structure.
 *
 * Usage: npx tsx scripts/validate-translations.ts [lang ...]
 *   With no args, validates every recipeTranslations*.json except the English
 *   source. Exits non-zero on any error.
 */
import { pathToFileURL } from 'node:url';
import { readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { allRecipes } from '../src/data/recipes';
import enTable from '../src/data/recipeTranslations.json';
import { LANGS, fileOf } from './translations/audit';

type Entry = {
  title?: string;
  ingredients?: Record<string, { name?: string; standardAmount?: string }>;
  instructions?: Record<string, string>;
};

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value);

const ACTIVE_IDS = allRecipes.map(r => r.id);
const activeIds = new Set(ACTIVE_IDS);

async function main() {
  let langs = process.argv.slice(2);
  if (!langs.length) {
    langs = readdirSync('src/data')
      .filter(f => /^recipeTranslations.+\.json$/.test(f) && f !== 'recipeTranslations.json')
      .map(f => f.replace('recipeTranslations', '').replace('.json', ''))
      .map(s => s.toLowerCase());
  }

  let anyError = false;
  for (const lang of langs) {
    if (!LANGS.includes(lang as typeof LANGS[number])) {
      console.error(`Unsupported translation language: ${lang}`);
      anyError = true;
      continue;
    }
    const file = fileOf(lang);
    let parsed: unknown;
    try { parsed = JSON.parse(await readFile(file, 'utf-8')); }
    catch (error) { console.error(`${lang}: cannot read translation JSON (${String(error)})`); anyError = true; continue; }
    if (!isRecord(parsed)) { console.error(`${lang}: translation table must be an object`); anyError = true; continue; }
    const table = parsed as Record<string, Entry>;
    const errors: string[] = [];
    const en = enTable as Record<string, Entry>;

    const missing = ACTIVE_IDS.filter(id => !(id in table));
    const extra = Object.keys(table).filter(id => !activeIds.has(id));
    if (missing.length) errors.push(`${missing.length} missing ids (e.g. ${missing.slice(0, 5).join(', ')})`);
    if (extra.length) errors.push(`${extra.length} extra ids (e.g. ${extra.slice(0, 5).join(', ')})`);

    let full = 0, titleOnly = 0;
    for (const [id, entry] of Object.entries(table)) {
      if (!activeIds.has(id)) continue;
      if (!isRecord(entry)) { errors.push(`${id}: translation entry must be an object`); continue; }
      if (typeof entry.title !== 'string' || !entry.title.trim()) errors.push(`${id}: missing title`);
      const src = en[id];
      if (!src) continue;
      const hasContent = isRecord(entry.ingredients) && Object.keys(entry.ingredients).length &&
        isRecord(entry.instructions) && Object.keys(entry.instructions).length;
      if (hasContent) {
        full++;
        const srcIng = Object.keys(src.ingredients ?? {});
        const gotIng = Object.keys(entry.ingredients!);
        const srcIns = Object.keys(src.instructions ?? {});
        const gotIns = Object.keys(entry.instructions!);
        if (srcIng.sort().join() !== gotIng.sort().join()) errors.push(`${id}: ingredient key mismatch`);
        if (srcIns.sort().join() !== gotIns.sort().join()) errors.push(`${id}: instruction key mismatch`);
        for (const [iid, ing] of Object.entries(entry.ingredients!)) {
          if (!isRecord(ing)) { errors.push(`${id}/${iid}: ingredient must be an object`); continue; }
          if (typeof ing?.name !== 'string' || !ing.name.trim()) errors.push(`${id}/${iid}: empty name`);
          if (src.ingredients?.[iid]?.standardAmount?.trim() && (typeof ing.standardAmount !== 'string' || !ing.standardAmount.trim()))
            errors.push(`${id}/${iid}: empty amount`);
        }
        for (const [sid, text] of Object.entries(entry.instructions!)) {
          if (typeof text !== 'string' || !text.trim()) errors.push(`${id} step ${sid}: empty instruction`);
        }
      } else {
        titleOnly++;
        errors.push(`${id}: incomplete translation (ingredients or instructions absent)`);
      }
    }
    console.log(`${lang}: ${Object.keys(table).length} keys, ${full} full, ${titleOnly} title-only, ${missing.length} missing, ${extra.length} extra`);
    if (errors.length) { anyError = true; console.log(`  ERRORS (${errors.length}):\n  ${errors.slice(0, 30).join('\n  ')}${errors.length > 30 ? '\n  …additional errors omitted from display' : ''}`); }
  }
  process.exit(anyError ? 1 : 0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
