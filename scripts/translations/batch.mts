/**
 * Splits the Fatma Abu Haty drafts into fixed 50-recipe batches by id and
 * gives the translator a compact English source sheet for each one.
 *
 *   npx tsx scripts/translations/batch.mts prep <lang> <n> <fullDraftDir>
 *       Batch n covers fah-(50n-49)..fah-50n (the last batch runs to fah-808).
 *       Reads the per-category drafts made by draft-entries.ts from
 *       <fullDraftDir>, normalizes Arabic amounts/times with norm/{lang}.json
 *       (via amount-cover.mts), writes drafts/{lang}/b{nn}.json and prints the
 *       source sheet: the English title, notes and steps, plus every
 *       ingredient name or amount still unresolved.
 *
 *   npx tsx scripts/translations/batch.mts fills <lang> <n> <notes.txt>
 *       Converts compact translator notes into fills/{lang}/b{nn}.json:
 *         @fah-001              start a recipe
 *         T: title              N: culturalNotes
 *         P: prepTime  C: cookTime  V: servings  M: cookingMethod  (overrides)
 *         i2: name              ingredient name
 *         a2: amount            ingredient amount override
 *         1: step text          instruction step
 *
 * Then: apply-fills.ts <lang> b{nn} → write-entries.ts <lang> drafts/{lang}/b{nn}.json
 */
import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { loadMap, makeTr } from './amount-cover.mts';
import { fileOf } from './audit';

const AR = /[؀-ۿݐ-ݿﭐ-﷿]/;
const LAST = 808;
// Arabic-script languages can't be checked for untranslated Arabic, so every
// amount and time is shown for review instead.
const checkArabic = (lang: string) => !['ur', 'fa', 'ps'].includes(lang);

const pad = (n: number) => String(n).padStart(2, '0');
function range(n: number) {
  const from = (n - 1) * 50 + 1;
  const to = n === 16 ? LAST : n * 50;
  return { from, to };
}
const num = (id: string) => Number(id.split('-')[1]);

async function prep(lang: string, n: number, dir: string) {
  const { from, to } = range(n);
  const tr = makeTr(await loadMap(lang));
  const en = JSON.parse(await readFile('src/data/recipeTranslations.json', 'utf-8'));
  const batch: Record<string, any> = {};
  for (const f of (await readdir(dir)).filter(f => f.endsWith('.json'))) {
    const d = JSON.parse(await readFile(`${dir}/${f}`, 'utf-8'));
    for (const [id, e] of Object.entries<any>(d)) if (num(id) >= from && num(id) <= to) batch[id] = e;
  }
  const ids = Object.keys(batch).sort((a, b) => num(a) - num(b));
  // Reuse earlier work: map English ingredient names and step texts to what
  // they were translated as in the merged table (most frequent rendering).
  const table = JSON.parse(await readFile(fileOf(lang), 'utf-8'));
  const votes = new Map<string, Map<string, number>>();
  const vote = (k: string | undefined, v: string | undefined) => {
    if (!k?.trim() || !v?.trim()) return;
    const m = votes.get(k) ?? new Map<string, number>();
    m.set(v, (m.get(v) ?? 0) + 1); votes.set(k, m);
  };
  for (const [tid, t] of Object.entries<any>(table)) {
    const s = en[tid];
    if (!s) continue;
    for (const [iid, ing] of Object.entries<any>(t.ingredients ?? {})) vote('i:' + s.ingredients?.[iid]?.name, ing?.name);
    if (tid.startsWith('fah-')) for (const [sk, st] of Object.entries<any>(t.instructions ?? {})) vote('s:' + s.instructions?.[sk], st);
  }
  const known = (k: string) => {
    const m = votes.get(k);
    return m ? [...m].sort((a, b) => b[1] - a[1])[0][0] : undefined;
  };
  const norm = (v: string | undefined) => {
    if (typeof v !== 'string' || !AR.test(v)) return v;
    const t = tr(v);
    return t && t.trim() ? t : v;
  };
  const isOpen = (v: string | undefined) => !!v && (checkArabic(lang) ? AR.test(v) : true);
  const words: Record<string, string> = JSON.parse(await readFile('scripts/translations/meta-words.json', 'utf-8'))[lang] ?? {};
  const keys = Object.keys(words).sort((a, b) => b.length - a.length);
  const esc = (k: string) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const metaRe = new RegExp(`(?<![A-Za-z])(${keys.map(esc).join('|')})(?![A-Za-z])`, 'g');
  // Localizes an already-normalized English time/servings value; null when a
  // word is left that the map doesn't cover.
  const metaTr = (v: string | undefined) => {
    if (!v?.trim() || !keys.length) return null;
    const parts: string[] = [];
    const masked = v.replace(metaRe, k => { parts.push(words[k]); return `\u0000${parts.length - 1}\u0000`; });
    if (/[A-Za-z]/.test(masked)) return null;
    return masked.replace(/\u0000(\d+)\u0000/g, (_, i) => parts[Number(i)]);
  };
  const lines: string[] = [];
  const out: Record<string, any> = {};
  for (const id of ids) {
    const e = batch[id];
    const s = en[id];
    const metaDone = new Set<string>();
    for (const f of ['prepTime', 'cookTime', 'servings']) {
      if (!e[f]) continue;
      const t = metaTr(s[f]);
      if (t) { e[f] = t; metaDone.add(f); } else e[f] = norm(e[f]);
    }
    for (const [iid, ing] of Object.entries<any>(e.ingredients)) {
      ing.standardAmount = norm(ing.standardAmount);
      if (!ing.name?.trim()) ing.name = known('i:' + s.ingredients?.[iid]?.name) ?? '';
    }
    const reused = new Set<string>();
    for (const sk of Object.keys(e.instructions)) {
      const t = known('s:' + s.instructions?.[sk]);
      if (t && !e.instructions[sk]) { e.instructions[sk] = t; reused.add(sk); }
    }
    out[id] = e;

    lines.push(`@${id} ${s.title}`);
    const meta = [['P', 'prepTime'], ['C', 'cookTime'], ['V', 'servings']]
      .filter(([, f]) => !metaDone.has(f) && isOpen(e[f]))
      .map(([k, f]) => `${k}? ${s[f] ?? ''} [${e[f]}]`);
    if (meta.length) lines.push(meta.join(' | '));
    if (s.culturalNotes && e.culturalNotes !== undefined) lines.push(`N> ${s.culturalNotes}`);
    for (const [iid, ing] of Object.entries<any>(e.ingredients)) {
      const k = iid.split('-i')[1];
      const enI = s.ingredients?.[iid] ?? {};
      const needName = !ing.name?.trim();
      const needAmt = isOpen(ing.standardAmount);
      if (needName || needAmt) {
        lines.push(` ${needName ? 'i' : ' '}${needAmt ? 'a' : ' '}${k} ${enI.name ?? ''}${needAmt || needName ? ` [${needAmt ? `AR:${ing.standardAmount} EN:${enI.standardAmount ?? ''}` : ing.standardAmount ?? ''}]` : ''}`);
      }
    }
    for (const [sk] of Object.entries(e.instructions)) if (!reused.has(sk)) lines.push(` ${sk}> ${s.instructions?.[sk] ?? e._ar.steps[sk]}`);
  }
  await mkdir(`scripts/translations/drafts/${lang}`, { recursive: true });
  await writeFile(`scripts/translations/drafts/${lang}/b${pad(n)}.json`, JSON.stringify(out, null, 2) + '\n');
  console.log(lines.join('\n'));
  console.error(`${lang} b${pad(n)}: ${ids.length} recipes (${ids[0]}..${ids.at(-1)})`);
}

async function fills(lang: string, n: number, notes: string) {
  const txt = await readFile(notes, 'utf-8');
  const out: Record<string, any> = {};
  let cur: any = null, id = '';
  for (const raw of txt.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('@')) { id = line.slice(1).split(/\s/)[0]; cur = out[id] = { ingredients: {}, instructions: {} }; continue; }
    if (!cur) throw new Error(`line before any @id: ${line}`);
    const m = line.match(/^([TNPCVM]|i\d+|a\d+|\d+):\s?(.*)$/);
    if (!m) throw new Error(`${id}: bad line: ${line}`);
    const [, k, v] = m;
    const val = v.trim();
    if (k === 'T') cur.title = val;
    else if (k === 'N') cur.culturalNotes = val;
    else if (k === 'P') cur.prepTime = val;
    else if (k === 'C') cur.cookTime = val;
    else if (k === 'V') cur.servings = val;
    else if (k === 'M') cur.cookingMethod = val;
    else if (k[0] === 'i') (cur.ingredients[`${id}-i${k.slice(1)}`] ??= {}).name = val;
    else if (k[0] === 'a') (cur.ingredients[`${id}-i${k.slice(1)}`] ??= {}).standardAmount = val;
    else cur.instructions[k] = val;
  }
  await mkdir(`scripts/translations/fills/${lang}`, { recursive: true });
  const path = `scripts/translations/fills/${lang}/b${pad(n)}.json`;
  await writeFile(path, JSON.stringify(out, null, 1) + '\n');
  console.log(`${Object.keys(out).length} recipes → ${path}`);
}

const [cmd, lang, nArg, arg] = process.argv.slice(2);
const n = Number(nArg);
if (!lang || !(n >= 1 && n <= 16) || !arg) {
  console.error('usage: batch.mts prep <lang> <1-16> <fullDraftDir> | fills <lang> <1-16> <notes.txt>');
  process.exit(1);
}
await (cmd === 'prep' ? prep(lang, n, arg) : cmd === 'fills' ? fills(lang, n, arg) : Promise.reject(new Error(`unknown command ${cmd}`)));
