/**
 * Validates recipe translation files against the active recipe ID set and the
 * English source structure.
 *
 * Usage: npx tsx scripts/validate-translations.ts [lang ...]
 *   With no args, validates every recipeTranslations*.json except the English
 *   source. Exits non-zero on any error.
 */
import { readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { allRecipes } from '../src/data/recipes';
import enTable from '../src/data/recipeTranslations.json';

type Entry = {
  title?: string;
  ingredients?: Record<string, { name?: string }>;
  instructions?: Record<string, string>;
};

const ACTIVE_IDS = allRecipes.map(r => r.id);

const SUFFIX: Record<string, string> = {
  fr: 'Fr', es: 'Es', ja: 'Ja', hi: 'Hi', pt: 'Pt', ru: 'Ru', zh: 'Zh', de: 'De',
  it: 'It', el: 'El', ur: 'Ur', fa: 'Fa', tr: 'Tr', ku: 'Ku', id: 'Id', sw: 'Sw',
  ko: 'Ko', nl: 'Nl', ps: 'Ps', he: 'He', pl: 'Pl', sv: 'Sv'
};

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
    const suffix = SUFFIX[lang];
    const file = `src/data/recipeTranslations${suffix}.json`;
    const table = JSON.parse(await readFile(file, 'utf-8')) as Record<string, Entry>;
    const errors: string[] = [];
    const en = enTable as Record<string, Entry>;

    const missing = ACTIVE_IDS.filter(id => !(id in table));
    const extra = Object.keys(table).filter(id => !ACTIVE_IDS.includes(id));
    if (missing.length) errors.push(`${missing.length} missing ids (e.g. ${missing.slice(0, 5).join(', ')})`);
    if (extra.length) errors.push(`${extra.length} extra ids (e.g. ${extra.slice(0, 5).join(', ')})`);

    let full = 0, titleOnly = 0;
    for (const [id, entry] of Object.entries(table)) {
      if (!ACTIVE_IDS.includes(id)) continue;
      if (!entry.title || typeof entry.title !== 'string') errors.push(`${id}: missing title`);
      const src = en[id];
      if (!src) continue;
      const hasContent = entry.ingredients && Object.keys(entry.ingredients).length &&
        entry.instructions && Object.keys(entry.instructions).length;
      if (hasContent) {
        full++;
        const srcIng = Object.keys(src.ingredients ?? {});
        const gotIng = Object.keys(entry.ingredients!);
        const srcIns = Object.keys(src.instructions ?? {});
        const gotIns = Object.keys(entry.instructions!);
        if (srcIng.join() !== gotIng.join()) errors.push(`${id}: ingredient key mismatch`);
        if (srcIns.join() !== gotIns.join()) errors.push(`${id}: instruction key mismatch`);
        for (const [iid, ing] of Object.entries(entry.ingredients!)) {
          if (!ing?.name?.trim()) errors.push(`${id}/${iid}: empty name`);
        }
        for (const [sid, text] of Object.entries(entry.instructions!)) {
          if (!text?.trim()) errors.push(`${id} step ${sid}: empty instruction`);
        }
      } else {
        titleOnly++;
      }
      if (errors.length > 30) { errors.push('…truncated'); break; }
    }
    console.log(`${lang}: ${Object.keys(table).length} keys, ${full} full, ${titleOnly} title-only, ${missing.length} missing, ${extra.length} extra`);
    if (errors.length) { anyError = true; console.log(`  ERRORS:\n  ${errors.join('\n  ')}`); }
  }
  process.exit(anyError ? 1 : 0);
}

main();
