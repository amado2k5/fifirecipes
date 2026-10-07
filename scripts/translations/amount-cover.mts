// Measure coverage of norm/{lang}.json against Arabic amounts missing from the
// corresponding translation table; also fills them when --write is passed.
//   npx tsx scripts/translations/amount-cover.mts <lang> [--write]
import { readFile, writeFile } from 'node:fs/promises';
import { allRecipes } from '../../src/data/recipes';

const SUFFIX: Record<string,string> = { fr:'Fr', es:'Es', de:'De', it:'It', pt:'Pt', nl:'Nl', pl:'Pl', sv:'Sv', ru:'Ru', el:'El', tr:'Tr', id:'Id', sw:'Sw', ku:'Ku', hi:'Hi', ur:'Ur', fa:'Fa', ps:'Ps', he:'He', ja:'Ja', zh:'Zh', ko:'Ko', te:'Te', bn:'Bn' };

export async function loadMap(lang: string) {
  const map = JSON.parse(await readFile(`scripts/translations/norm/${lang}.json`, 'utf-8'));
  try {
    const ext = JSON.parse(await readFile(`scripts/translations/norm-ext/${lang}.json`, 'utf-8'));
    for (const k of ['exact','numbers','units','mods','preMods','nouns']) Object.assign(map[k] ??= {}, ext[k] ?? {});
    for (const k of ['orJoin','plusJoin','approx','perJoin']) if (ext[k] !== undefined) map[k] = ext[k];
  } catch { /* no ext file */ }
  return map;
}
const AR_DIGIT: Record<string,string> = { '٠':'0','١':'1','٢':'2','٣':'3','٤':'4','٥':'5','٦':'6','٧':'7','٨':'8','٩':'9' };
const NUM_RE = /^(\d+(?:[./]\d+)?(?:\s*(?:[-–]|إلى)\s*\d+(?:[./]\d+)?)?(?:\s*ونصف|\s*ونص|\s*وربع|\s*وثلث|\s*وتلت)?|ثلاثة أرباع|نصفين|نصف|نص|ثلثا|ثلث|تلت|ربع|ثمن|ثُمن|اثنتان|اثنان|اثنين|واحدة|واحد|أربعة|ثلاثة|خمسة|ستة|سبعة|ثمانية|تسعة|عشرة|عشر|خمس|زوج)\s*/;
const AR = /[؀-ۿݐ-ݿﭐ-﷿]/;

const WORD_NUM: Record<string,string> = { 'واحد':'1','واحدة':'1','اثنان':'2','اثنين':'2','ثلاثة':'3','أربعة':'4','خمسة':'5','ستة':'6','سبعة':'7','ثمانية':'8','تسعة':'9','عشرة':'10','عشر':'10','خمس':'5','ثلاثة أرباع':'¾','نصفين':'2 halves','زوج':'2' };

export function makeTr(map: any) {
  const EXACT = map.exact ?? {}, NUMS = map.numbers ?? {}, UNITS = map.units ?? {}, MODS = map.mods ?? {}, PREMODS = map.preMods ?? {}, NOUNS = map.nouns ?? {};
  const unitKeys = Object.keys(UNITS).sort((a, b) => b.length - a.length);
  const OR_JOIN = map.orJoin ?? ' or ';
  const PLUS_JOIN = map.plusJoin ?? ' + ';
  const APPROX = map.approx ?? 'about';
  const PER_JOIN = map.perJoin ?? ' per ';

  function parseNum(tok: string){
    tok = tok.trim().replace(/[٠-٩]/g,d=>AR_DIGIT[d]).replace(/\s*[-–]\s*/,'–').replace(/\s*إلى\s*/,'–');
    tok = tok.replace(/ ونصف$/, '½').replace(/ ونص$/, '½').replace(/ وربع$/, '¼').replace(/ وثلث$/, '⅓').replace(/ وتلت$/, '⅓');
    if (NUMS[tok] !== undefined) return NUMS[tok];
    if (WORD_NUM[tok] !== undefined) return WORD_NUM[tok];
    if (/^\d/.test(tok)) return tok;
    return NUMS[tok] ?? tok;
  }

  function tr(v: string, depth=0): string | null {
    const s = v.trim().replace(/[٠-٩]/g,d=>AR_DIGIT[d]);
    if (!s) return s;
    if (EXACT[s] !== undefined) return EXACT[s];
    if (depth < 2) {
      const am = s.match(/^(حوالي|تقريبا|تقريباً|حوالى|نحو)\s+/);
      if (am) { const t = tr(s.slice(am[0].length), depth+1); if (t) return APPROX + ' ' + t; }
      const pIdx = s.indexOf(' لكل ');
      if (pIdx > 0) {
        const a = tr(s.slice(0,pIdx), depth+1), b = tr(s.slice(pIdx+5), depth+1);
        if (a && b) return a + PER_JOIN + b;
      }
      for (const [sep, joiner] of [[' + ', PLUS_JOIN], [' أو ', OR_JOIN]] as const) {
        if (s.includes(sep)) {
          const parts = s.split(sep).map(p => tr(p, depth+1));
          if (parts.every(p => p !== null)) return parts.join(joiner);
        }
      }
      const wIdx = s.indexOf(' و ');
      if (wIdx > 0 && /^\d/.test(s.slice(wIdx+3))) {
        const a = tryParse(s.slice(0,wIdx), depth+1), b = tryParse(s.slice(wIdx+3), depth+1);
        if (a && b) return a + ' ' + b;
      }
    }
    return tryParse(s, depth);
  }
  function tryParse(s: string, depth=0): string | null {
  let num: string | null = null, rest = s;
  const nm = s.match(NUM_RE);
  if (nm) { num = parseNum(nm[1]); rest = s.slice(nm[0].length).trim(); }
  if (num !== null && AR.test(num)) return null;
  if (num !== null && !rest) return num;
  for (const uk of unitKeys) {
    if (rest === uk || rest.startsWith(uk+' ') || rest.startsWith(uk+'(')) {
      const unit = UNITS[uk];
      let tail = rest.slice(uk.length).trim();
      if (tail.startsWith('(') && tail.endsWith(')')) {
        const inner = tail.slice(1,-1);
        const mt = MODS[inner] ?? EXACT[inner];
        if (mt !== undefined) tail = mt ? `(${mt})` : '';
        else if (inner) { const rec = depth < 2 ? tr(inner, depth+1) : null; tail = rec ? `(${rec})` : ` (${inner})`; }
      } else if (tail) {
        const pt = PREMODS[tail];
        if (pt !== undefined) return (num ? num+' ' : '1 ') + (pt ? pt + ' ' : '') + unit;
        const nt = NOUNS[tail];
        if (nt !== undefined) return (num ? num+' ' : '1 ') + unit + (nt ? ' ' + nt : '');
        const mt = MODS[tail] ?? EXACT[tail];
        if (mt === undefined) return null;
        tail = mt ? ', ' + mt : '';
      }
      return (num ? num+' ' : '1 ') + unit + tail;
    }
  }
    if (!num && UNITS[rest] !== undefined) return '1 ' + UNITS[rest];
    if (!num && MODS[rest] !== undefined) return MODS[rest] || '1';
    if (num !== null && MODS[rest] !== undefined) { const m = MODS[rest]; return num + (m ? ' ' + m : ''); }
    if (num !== null && EXACT[rest] !== undefined) { const m = EXACT[rest]; return num + (m ? ' ' + m : ''); }
    return null;
  }
  return tr;
}

async function main() {
const lang = process.argv[2];
const WRITE = process.argv.includes('--write');
const map = await loadMap(lang);
const tr = makeTr(map);
const tablePath = `src/data/recipeTranslations${SUFFIX[lang]}.json`;
const table = JSON.parse(await readFile(tablePath, 'utf-8'));
const unmapped = new Map<string, number>();
let filled = 0, stillMissing = 0, total = 0;

for (const r of allRecipes) {
  const entry = table[r.id];
  for (const ing of r.masterIngredients) {
    const arAmt = (ing.standardAmount || '').trim();
    if (!arAmt) continue;
    const cur = entry?.ingredients?.[ing.id]?.standardAmount;
    if (cur && String(cur).trim()) continue;
    total++;
    const t = tr(arAmt);
    if (t !== null && t.trim()) {
      filled++;
      if (WRITE && entry?.ingredients?.[ing.id]) entry.ingredients[ing.id].standardAmount = t;
    } else {
      stillMissing++;
      unmapped.set(arAmt, (unmapped.get(arAmt) ?? 0) + 1);
    }
  }
}
console.log(`${lang}: missing ${total}, mapped ${filled}, unmapped ${stillMissing} (${unmapped.size} unique)`);
if (WRITE) await writeFile(tablePath, JSON.stringify(table, null, 2) + '\n');
const dumpIdx = process.argv.indexOf('--dump');
if (dumpIdx > 0) {
  const en = JSON.parse(await readFile('src/data/recipeTranslations.json', 'utf-8'));
  const enRef = new Map<string, Map<string, number>>();
  for (const r of allRecipes) for (const ing of r.masterIngredients) {
    const ar = (ing.standardAmount || '').trim();
    if (!ar || !unmapped.has(ar)) continue;
    const e = en[r.id]?.ingredients?.[ing.id]?.standardAmount;
    if (!e) continue;
    const m = enRef.get(ar) ?? new Map();
    m.set(e, (m.get(e) ?? 0) + 1); enRef.set(ar, m);
  }
  const rows = [...unmapped.entries()].sort((a,b)=>b[1]-a[1]).map(([ar,c]) =>
    `${c}\t${ar}\t${[...(enRef.get(ar)?.entries() ?? [])].sort((x,y)=>y[1]-x[1])[0]?.[0] ?? ''}`);
  await writeFile(process.argv[dumpIdx+1], rows.join('\n') + '\n');
  console.log(`dumped ${rows.length} → ${process.argv[dumpIdx+1]}`);
}
const top = [...unmapped.entries()].sort((a,b)=>b[1]-a[1]).slice(0, 30);
for (const [a,c] of top) console.log(`${c}\t${a}`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
