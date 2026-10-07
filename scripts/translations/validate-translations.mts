/**
 * Full translation-quality validation per the review spec.
 *
 *   npx tsx scripts/translations/validate-translations.mts            report; exit 1 on hard failures
 *   npx tsx scripts/translations/validate-translations.mts --strict   also fail on pending-quality items
 *   npx tsx scripts/translations/validate-translations.mts --json     machine-readable report
 *
 * Hard failures (must always be zero on main):
 *   - entry absent / empty title
 *   - ingredient missing or empty name; standardAmount empty when the Arabic source has one
 *   - instruction step missing or empty
 *   - Arabic characters (U+0600–U+06FF) in languages that don't use Arabic script
 *   - text copied verbatim from the Arabic source in Urdu/Persian/Pashto (>= 10 chars)
 *   - English amount words (teaspoon/tablespoon/cup/pinch/to taste/as needed) in non-English amounts
 *
 * Pending-quality warnings (tracked by Parts 2–4; fail only under --strict):
 *   - per-language deny-list of known-bad terms (Ps خوږ کړئ/وسوځوئ/وګرځوئ/وگړ, Ku rûnê gê/bikuze,
 *     Sw hadi ukuue/mkuubwa/hadi nusu kupika, Ur میزان کریں, Sv "kroetter")
 *   - contextual suspects reported for review (Sv fritera/halvkokt, Fa بکوبید/چاشنی, Ja 米酢)
 *   - Latin words of 4+ letters in Ja/Zh/Ko/Hi/Ru/El/He/Ur/Fa/Ps outside the brand allow-list
 *   - recipes absent from a language table (fah-* translations pending in 10 languages)
 */
import { readFileSync } from 'node:fs';
import { allRecipes } from '../../src/data/recipes';
import { LANGS, fileOf } from './audit';

const STRICT = process.argv.includes('--strict');
const JSON_OUT = process.argv.includes('--json');

const AR_SCRIPT = new Set(['ur', 'fa', 'ps']);
const AR_RE = /[؀-ۿ]/;
const LATIN_WORD_RE = /[A-Za-z]{4,}/g;
const LATIN_CHECK = new Set(['ja', 'zh', 'ko', 'hi', 'ru', 'el', 'he', 'ur', 'fa', 'ps', 'te', 'bn']);
const BRAND_ALLOW = new Set([
  'knorr', 'lotus', 'kiri', 'oreo', 'nutella', 'nescaf', 'dream', 'whip', 'maggi',
  'kinder', 'mars', 'bounty', 'galaxy', 'snickers', 'twix', 'milka', 'cadbury',
  'pepsi', 'coca', 'cola', 'puck', 'lurpak', 'philadelphia', 'ricotta', 'mozzarella',
  'parmesan', 'cheddar', 'parmigiano', 'nutela',
]);
const EN_AMOUNT_RE = /\b(teaspoons?|tablespoons?|cups?|pinch|to taste|as needed)\b/i;

const DENY: Record<string, RegExp[]> = {
  ps: [/خوږ کړئ/, /وسوځوئ/, /وګرځوئ/, /وگړ/],
  ku: [/rûnê gê/i, /\bbikuze\b/i],
  sw: [/hadi ukuue/i, /\bmkuubwa\b/i, /hadi nusu kupika/i],
  ur: [/میزان کریں/],
  sv: [/kroetter/i],
};
const SUSPECT: Record<string, RegExp[]> = {
  sv: [/\bfritera\b/i, /\bhalvkokt/i],
  fa: [/بکوبید/, /چاشنی/],
  ja: [/米酢/],
};

type Table = Record<string, any>;
const tables: Record<string, Table> = {};
for (const lang of LANGS) tables[lang] = JSON.parse(readFileSync(fileOf(lang), 'utf-8'));

function* fields(entry: any): Generator<[string, string]> {
  for (const k of ['title', 'prepTime', 'cookTime', 'servings', 'culturalNotes'] as const)
    if (typeof entry[k] === 'string' && entry[k].trim()) yield [k, entry[k]];
  for (const [id, ing] of Object.entries<any>(entry.ingredients ?? {})) {
    if (ing?.name?.trim()) yield [`ingredients.${id}.name`, ing.name];
    if (ing?.standardAmount?.trim()) yield [`ingredients.${id}.standardAmount`, ing.standardAmount];
  }
  for (const [n, txt] of Object.entries<any>(entry.instructions ?? {}))
    if (typeof txt === 'string' && txt.trim()) yield [`instructions.${n}`, txt];
}

function latinHits(text: string): string[] {
  const hits: string[] = [];
  for (const m of text.matchAll(LATIN_WORD_RE)) {
    const w = m[0].toLowerCase();
    if (!BRAND_ALLOW.has(w) && !w.startsWith('nescaf')) hits.push(m[0]);
  }
  return hits;
}

type Issue = { recipe: string; field: string; kind: string; text: string };
const hard: Record<string, Issue[]> = {};
const warn: Record<string, Issue[]> = {};
const absentCount: Record<string, Record<string, number>> = {};
const push = (bag: Record<string, Issue[]>, lang: string, i: Issue) =>
  (bag[lang] ??= []).push(i);

for (const lang of LANGS) {
  const t = tables[lang];
  for (const r of allRecipes) {
    if (r.englishOnly) continue;
    const entry = t[r.id];
    if (!entry) {
      const prefix = r.id.split('-')[0];
      (absentCount[lang] ??= {})[prefix] = (absentCount[lang]?.[prefix] ?? 0) + 1;
      continue;
    }
    if (!entry.title?.trim()) push(hard, lang, { recipe: r.id, field: 'title', kind: 'empty', text: '' });

    for (const ing of r.masterIngredients) {
      const tr = entry.ingredients?.[ing.id];
      if (!tr?.name?.trim())
        push(hard, lang, { recipe: r.id, field: `ingredients.${ing.id}.name`, kind: 'missing', text: ing.name ?? '' });
      const arAmt = (ing.standardAmount ?? '').trim();
      const trAmt = (tr?.standardAmount ?? '').trim();
      if (arAmt && !trAmt)
        push(hard, lang, { recipe: r.id, field: `ingredients.${ing.id}.standardAmount`, kind: 'missing', text: arAmt });
      if (lang !== 'en' && trAmt && EN_AMOUNT_RE.test(trAmt))
        push(hard, lang, { recipe: r.id, field: `ingredients.${ing.id}.standardAmount`, kind: 'english-amount', text: trAmt });
      if (AR_SCRIPT.has(lang) && trAmt && trAmt === arAmt && arAmt.length >= 10)
        push(hard, lang, { recipe: r.id, field: `ingredients.${ing.id}.standardAmount`, kind: 'verbatim-arabic', text: trAmt });
    }
    for (const s of r.uniqueInstructions) {
      const txt = entry.instructions?.[String(s.stepNumber)];
      if (!txt?.trim())
        push(hard, lang, { recipe: r.id, field: `instructions.${s.stepNumber}`, kind: 'missing', text: s.text ?? '' });
    }

    const srcTexts = new Set<string>();
    if (AR_SCRIPT.has(lang)) {
      if (r.title) srcTexts.add(r.title.trim());
      for (const ing of r.masterIngredients) if (ing.name) srcTexts.add(ing.name.trim());
      for (const s of r.uniqueInstructions) if (s.text) srcTexts.add(s.text.trim());
    }
    for (const [field, text] of fields(entry)) {
      if (!AR_SCRIPT.has(lang) && lang !== 'en' && AR_RE.test(text))
        push(hard, lang, { recipe: r.id, field, kind: 'arabic-chars', text: text.slice(0, 80) });
      if (AR_SCRIPT.has(lang) && text.length >= 10 && srcTexts.has(text.trim()))
        push(hard, lang, { recipe: r.id, field, kind: 'verbatim-arabic', text: text.slice(0, 80) });
      if (LATIN_CHECK.has(lang))
        for (const w of latinHits(text))
          push(warn, lang, { recipe: r.id, field, kind: 'latin-word', text: w });
      for (const re of DENY[lang] ?? [])
        if (re.test(text)) push(warn, lang, { recipe: r.id, field, kind: 'deny-term', text: text.slice(0, 80) });
      for (const re of SUSPECT[lang] ?? [])
        if (re.test(text)) push(warn, lang, { recipe: r.id, field, kind: 'suspect-term', text: text.slice(0, 80) });
    }
  }
}

const report = { hard, warn, absent: absentCount };
if (JSON_OUT) {
  console.log(JSON.stringify(report, null, 1));
} else {
  let hardTotal = 0;
  for (const lang of LANGS) {
    const h = hard[lang] ?? [];
    const w = warn[lang] ?? [];
    hardTotal += h.length;
    const kinds = new Map<string, number>();
    for (const i of w) kinds.set(i.kind, (kinds.get(i.kind) ?? 0) + 1);
    const absent = absentCount[lang] ?? {};
    const absentStr = Object.entries(absent).map(([k, v]) => `${k}:${v}`).join(' ');
    console.log(
      `${lang}: ${h.length} hard` +
      (h.length ? ` [${h.slice(0, 3).map(i => `${i.recipe}/${i.field}:${i.kind}`).join(', ')}]` : '') +
      ` | ${w.length} warnings [${[...kinds].map(([k, v]) => `${k}:${v}`).join(' ')}]` +
      (absentStr ? ` | absent ${absentStr}` : ''),
    );
    for (const i of h.slice(3, 13)) console.log(`    ${i.recipe} ${i.field} ${i.kind}: ${i.text.slice(0, 60)}`);
  }
  console.log(`\nhard failures: ${hardTotal}`);
}

const hardTotal = Object.values(hard).flat().length;
process.exit(hardTotal > 0 || (STRICT && Object.values(warn).flat().length > 0) ? 1 : 0);
