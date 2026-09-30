/**
 * Applies a translator's "fills" file onto a draft, producing the complete
 * batch file that write-entries.ts merges into a recipeTranslations table.
 *
 *   npx tsx scripts/translations/apply-fills.ts <lang> <slug>
 *
 * Reads:
 *   scripts/translations/drafts/{lang}/{slug}.json   (glossary-prefilled draft)
 *   scripts/translations/fills/{lang}/{slug}.json    (translator work — see below)
 * Writes the completed batch back over the draft file.
 *
 * fills file shape (only what's not resolvable — everything else optional):
 *   { "<id>": { "title": "...", "culturalNotes": "...", "prepTime": "...",
 *               "cookTime": "...", "servings": "...", "category": "...",
 *               "cookingMethod": "...",
 *               "ingredients": { "<iid>": "name" } ,   // name overrides only
 *               "instructions": { "1": "..." } } }
 *
 * Any field still empty after merging (title, instructions, unfilled
 * ingredient names) is reported as an error; nothing is written on failure.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

async function main() {
  const [lang, slug] = process.argv.slice(2);
  const draftPath = `scripts/translations/drafts/${lang}/${slug}.json`;
  const fillsPath = `scripts/translations/fills/${lang}/${slug}.json`;
  if (!existsSync(draftPath) || !existsSync(fillsPath)) {
    console.error(`need both ${draftPath} and ${fillsPath}`);
    process.exit(1);
  }
  interface FillEntry {
    title?: string;
    category?: string;
    cookingMethod?: string;
    prepTime?: string;
    cookTime?: string;
    servings?: string;
    culturalNotes?: string;
    ingredients?: Record<string, string | { name?: string; standardAmount?: string }>;
    instructions?: Record<string, string>;
  }
  interface DraftEntry {
    title?: string;
    category?: string;
    cookingMethod?: string;
    prepTime?: string;
    cookTime?: string;
    servings?: string;
    culturalNotes?: string;
    ingredients?: Record<string, { name?: string; standardAmount?: string }>;
    instructions?: Record<string, string>;
    _ar?: { notes?: string; ingredients?: string[] };
  }
  const draft = JSON.parse(await readFile(draftPath, 'utf-8')) as Record<string, DraftEntry>;
  const fills = JSON.parse(await readFile(fillsPath, 'utf-8')) as Record<string, FillEntry>;

  const errors: string[] = [];
  const pending: string[] = [];
  for (const [id, entry] of Object.entries(draft)) {
    const fill = fills[id];
    if (!fill) { pending.push(id); continue; }
    for (const f of ['title', 'category', 'cookingMethod', 'prepTime', 'cookTime', 'servings', 'culturalNotes'] as const) {
      if (fill[f] !== undefined) entry[f] = fill[f];
    }
    for (const [iid, ov] of Object.entries(fill.ingredients ?? {})) {
      if (!entry.ingredients?.[iid]) { errors.push(`${id}: fill for unknown ingredient ${iid}`); continue; }
      if (typeof ov === 'string') entry.ingredients[iid].name = ov;
      else { if (ov.name) entry.ingredients[iid].name = ov.name; if (ov.standardAmount) entry.ingredients[iid].standardAmount = ov.standardAmount; }
    }
    for (const [sk, text] of Object.entries(fill.instructions ?? {})) {
      if (entry.instructions?.[sk] !== undefined) entry.instructions[sk] = text;
      else errors.push(`${id}: fill for unknown step ${sk}`);
    }
  }
  for (const id of Object.keys(fills)) {
    if (!draft[id]) errors.push(`fills has unknown recipe ${id}`);
  }

  // Arabic-script languages legitimately keep U+06xx chars; for the rest,
  // any Arabic left in a field means an untranslated remnant slipped through.
  const checkArabic = !['ur', 'fa', 'ps', 'he'].includes(lang);
  const AR = /[؀-ۿݐ-ݿﭐ-﷿]/;
  const scan = (id: string, label: string, v: unknown) => {
    if (checkArabic && typeof v === 'string' && AR.test(v)) errors.push(`${id}: Arabic remnant in ${label}: ${v.slice(0, 40)}`);
  };

  // Everything must be filled before this is mergeable.
  for (const [id, entry] of Object.entries(draft)) {
    if (!entry.title?.trim()) errors.push(`${id}: title empty`);
    scan(id, 'title', entry.title);
    scan(id, 'category', entry.category);
    scan(id, 'cookingMethod', entry.cookingMethod);
    scan(id, 'prepTime', entry.prepTime);
    scan(id, 'cookTime', entry.cookTime);
    scan(id, 'servings', entry.servings);
    scan(id, 'culturalNotes', entry.culturalNotes);
    for (const [sk, sv] of Object.entries(entry.instructions ?? {})) {
      if (!sv?.trim()) errors.push(`${id}: step ${sk} empty`);
      else scan(id, `step ${sk}`, sv);
    }
    for (const [iid, ing] of Object.entries(entry.ingredients ?? {})) {
      if (!ing.name?.trim()) errors.push(`${id}: ingredient ${iid} name empty (ar: ${JSON.stringify(entry._ar?.ingredients?.[Number(iid.split('-i')[1]) - 1] ?? '?')})`);
      else scan(id, `ingredient ${iid} name`, ing.name);
      scan(id, `ingredient ${iid} amount`, ing.standardAmount);
    }
    if (entry._ar?.notes && !entry.culturalNotes?.trim()) errors.push(`${id}: culturalNotes empty but source notes exist`);
  }

  if (pending.length) console.log(`no fills for ${pending.length} recipes: ${pending.slice(0, 10).join(', ')}${pending.length > 10 ? '…' : ''}`);
  if (errors.length) {
    console.error(`ERRORS — nothing written:\n  ${errors.slice(0, 50).join('\n  ')}${errors.length > 50 ? `\n  …and ${errors.length - 50} more` : ''}`);
    process.exit(1);
  }
  await writeFile(draftPath, JSON.stringify(draft, null, 2) + '\n');
  console.log(`${lang}/${slug}: fills applied → ${draftPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
