import { writeFile } from 'node:fs/promises';
import { allRecipes } from '../../src/data/recipes';
const en = JSON.parse(await (await import('node:fs/promises')).readFile('src/data/recipeTranslations.json','utf-8'));
const CH = parseInt(process.argv[2] ?? '1');
const slice = allRecipes.slice((CH-1)*100, CH*100);
const out: Record<string, any> = {};
for (const r of slice) {
  out[r.id] = {
    title: r.title,
    chapter: (r as any).chapter, category: (r as any).category, cookingMethod: (r as any).cookingMethod,
    prepTime: (r as any).prepTime, cookTime: (r as any).cookTime, servings: (r as any).servings,
    ingredients: Object.fromEntries((r.masterIngredients ?? []).map(i => [i.id, {
      name: i.name, standardAmount: (i as any).standardAmount ?? '',
      nameEn: en[r.id]?.ingredients?.[i.id]?.name, amountEn: en[r.id]?.ingredients?.[i.id]?.standardAmount }])),
    instructions: Object.fromEntries((r.uniqueInstructions ?? []).map(s => [String(s.stepNumber), { ar: s.text, en: en[r.id]?.instructions?.[String(s.stepNumber)] ?? '' }])),
    enTitle: en[r.id]?.title,
  };
}
await writeFile(`/tmp/te-chunk${CH}-source.json`, JSON.stringify(out, null, 1));
console.log(`${slice.length} recipes → /tmp/te-chunk${CH}-source.json; ids: ${slice[0].id}..${slice[slice.length-1].id}`);
