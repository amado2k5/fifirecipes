// Generic Arabic-amount normalizer for translation drafts.
//   node scripts/translations/fix-amounts.mjs <lang>
// Reads norm/{lang}.json: { exact, numbers, units, mods }.
// Parses "<num>? <unit> <modifier>?" compositionally; unmapped strings are
// reported so the map can be extended. Rewrites drafts/{lang}/*.json in place.
import { readFile, writeFile, readdir } from 'node:fs/promises';

const lang = process.argv[2];
if (!lang) { console.error('usage: fix-amounts.mjs <lang>'); process.exit(1); }

const map = JSON.parse(await readFile(`scripts/translations/norm/${lang}.json`, 'utf-8'));
const EXACT = map.exact ?? {};
const NUMS = map.numbers ?? {};
const UNITS = map.units ?? {};
const MODS = map.mods ?? {};
const unitKeys = Object.keys(UNITS).sort((a, b) => b.length - a.length);

const AR = /[؀-ۿݐ-ݿﭐ-﷿]/;
const AR_DIGIT = { '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9' };
const NUM_RE = /^(\d+(?:[./]\d+)?(?:\s*-\s*\d+(?:[./]\d+)?)?|نص|نصف|ربع|تلت|ثلث)\s*/;

function parseNum(tok) {
  tok = tok.trim().replace(/[٠-٩]/g, d => AR_DIGIT[d]).replace(/\s*-\s*/, '–');
  return NUMS[tok] ?? tok;
}

function tr(v, depth = 0) {
  const s = v.trim().replace(/[٠-٩]/g, d => AR_DIGIT[d]);
  if (!s) return s;
  if (EXACT[s] !== undefined) return EXACT[s];

  // "<partA> و <partB>" where right side starts with a digit → time/compound joins
  const wIdx = s.indexOf(' و ');
  if (wIdx > 0 && /^\d/.test(s.slice(wIdx + 3)) && depth < 2) {
    const a = tryParse(s.slice(0, wIdx), depth + 1);
    const b = tryParse(s.slice(wIdx + 3), depth + 1);
    if (a && b) return a + ' ' + b;
  }

  return tryParse(s, depth);
}

function tryParse(s, depth) {
  // optional leading quantity
  let num = null, rest = s;
  const nm = s.match(NUM_RE);
  if (nm) { num = parseNum(nm[1]); rest = s.slice(nm[0].length); }
  // longest-prefix unit match
  for (const uk of unitKeys) {
    if (rest === uk || rest.startsWith(uk + ' ') || rest.startsWith(uk + '(')) {
      const unit = UNITS[uk];
      let tail = rest.slice(uk.length).trim();
      if (tail.startsWith('(') && tail.endsWith(')')) {
        const inner = tail.slice(1, -1);
        const mt = MODS[inner] ?? EXACT[inner];
        if (mt !== undefined) tail = mt ? `(${mt})` : '';
        else if (inner) tail = ` (${inner})`;
      } else if (tail) {
        const mt = MODS[tail] ?? EXACT[tail];
        if (mt === undefined) return null;
        tail = mt ? ', ' + mt : '';
      }
      return (num ? num + ' ' : '1 ') + unit + tail;
    }
  }
  // no leading num and whole string is a unit → "1 <unit>"
  if (!num && UNITS[rest] !== undefined) return '1 ' + UNITS[rest];
  // whole string is a modifier phrase (e.g. "مفرومة", "شرايح")
  if (!num && MODS[rest] !== undefined) return MODS[rest] || '1';
  return null;
}

const files = (await readdir(`scripts/translations/drafts/${lang}`)).filter(f => f.endsWith('.json'));
const unmapped = new Set();
let fixed = 0;

for (const f of files) {
  const p = `scripts/translations/drafts/${lang}/${f}`;
  const draft = JSON.parse(await readFile(p, 'utf-8'));
  const fix = (id, label, cur) => {
    if (typeof cur !== 'string' || !AR.test(cur)) return cur;
    const t = tr(cur);
    if (t !== null && !AR.test(t)) { fixed++; return t; }
    unmapped.add(`${id}\t${label}\t${cur}`);
    return cur;
  };
  for (const [id, e] of Object.entries(draft)) {
    for (const fld of ['prepTime', 'cookTime', 'servings', 'prep', 'cook'])
      if (e[fld] !== undefined) e[fld] = fix(id, fld, e[fld]);
    for (const [iid, ing] of Object.entries(e.ingredients ?? {}))
      if (ing?.standardAmount) ing.standardAmount = fix(id, `${iid}.amount`, ing.standardAmount);
  }
  await writeFile(p, JSON.stringify(draft, null, 2) + '\n');
}
console.log(`${lang}: fixed ${fixed} fields across ${files.length} files`);
if (unmapped.size) {
  console.log(`UNMAPPED (${unmapped.size}):`);
  for (const u of [...unmapped].sort()) console.log('  ' + u);
  process.exitCode = 2;
}
