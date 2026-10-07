// Audit missing standardAmount translations per language.
//   npx tsx scripts/translations/audit-amounts.mts
import { readFile } from 'node:fs/promises';
import { allRecipes } from '../../src/data/recipes';

const LANGS = ['Fr','Es','De','It','Pt','Nl','Pl','Sv','Ru','El','Tr','Id','Sw','Ku','Hi','Ur','Fa','Ps','He','Ja','Zh','Ko','Bn'];

const ingIdsOf = new Map(allRecipes.map(r => [r.id, r.masterIngredients.filter(i => (i.standardAmount || '').trim())]));

const uniques = new Map<string, number>();
for (const L of LANGS) {
  const t = JSON.parse(await readFile(`src/data/recipeTranslations${L === 'En' ? '' : L}.json`, 'utf-8'));
  let total = 0, missing = 0; const rset = new Set<string>();
  for (const r of allRecipes) {
    const tr = t[r.id]; if (!tr?.ingredients) { /* count all as missing */ }
    for (const ing of r.masterIngredients) {
      if (!(ing.standardAmount || '').trim()) continue;
      total++;
      const amt = tr?.ingredients?.[ing.id]?.standardAmount;
      if (!amt || !String(amt).trim()) { missing++; rset.add(r.id); uniques.set(ing.standardAmount.trim(), (uniques.get(ing.standardAmount.trim()) ?? 0) + 1); }
    }
  }
  console.log(`${L}: ${missing}/${total} missing (${(100*missing/total).toFixed(1)}%), recipes affected ${rset.size}`);
}
console.log(`\nunique Arabic amounts missing: ${uniques.size}`);
const sorted = [...uniques.entries()].sort((a,b)=>b[1]-a[1]);
console.log(sorted.slice(0, 30).map(([a,c])=>`${c}\t${a}`).join('\n'));
