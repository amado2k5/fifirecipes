// Normalizes leftover Arabic amount/unit strings in the en/quick draft.
// Exact-match map over the known vocabulary; anything unmapped is printed.
import { readFile, writeFile } from 'node:fs/promises';

const M = {
  // weights / volumes
  'نص كيلو': '500 g (½ kg)',
  'نص كيلو مقطعة مكعبات صغيرة': '500 g, diced small',
  'نص كيلو (4 كوب)': '500 g (4 cups)',
  'حوالي كيلو': 'about 1 kg',
  'مقدار كيلو': '1 kg',
  'كيلو ونصف': '1.5 kg',
  'كيلو ونص': '1.5 kg',
  'ميت جرام': '100 g',
  'نص لتر': '500 ml (½ liter)',
  'لتر ونصف': '1.5 liters',
  'نص فنجال': '½ small cup',
  // cups
  'نص كوب': '½ cup', 'نص كوباية': '½ cup', 'نصف كوباية': '½ cup',
  'نص كباية': '½ cup', '1/2 كباية': '½ cup', '0.5 كوب': '½ cup',
  'كوباية': '1 cup', 'كباية': '1 cup', '1 كباية': '1 cup',
  'كباية كبيرة': '1 large cup',
  'كوبايتين': '2 cups', 'كوبين': '2 cups', '2 كبايات': '2 cups',
  '4 كبايات': '4 cups', '3-4 كؤوس': '3–4 cups',
  'كوب ونص': '1½ cups', '1 كوب + نصف كوب': '1½ cups', '1 و1/2 كوب': '1½ cups',
  'كوب وربع': '1¼ cups', '1 كوب وربع': '1¼ cups',
  'كباية وثلث': '1⅓ cups',
  'ربع كوباية': '¼ cup', 'ربع كباية': '¼ cup', '1/4 كباية': '¼ cup',
  '1 كوب مبشور': '1 cup, grated',
  // spoons
  'معلقة كبيرة': '1 tbsp', 'معلقة كبيرة ممسوحة': '1 level tbsp',
  '1 ملعقة كبيرة مفرومة': '1 tbsp, minced',
  'معلقة صغيرة': '1 tsp', '1 ملعقة صغيرة (حسب الرغبة)': '1 tsp (to taste)',
  'معلقة صغيرة (اختياري)': '1 tsp (optional)',
  'نص معلقة صغيرة': '½ tsp', 'نص ملعقة صغيرة': '½ tsp',
  'ربع معلقة صغيرة': '¼ tsp', 'نص معلقة': '½ spoon',
  'معلقة': '1 spoon', 'معلقة وربع': '1¼ spoons',
  'معلقتان': '2 spoons', 'معلقتين': '2 spoons',
  'معلقتان صغيرتان': '2 tsp', '2 ملاعق صغيرة': '2 tsp',
  'معلقتين كبار': '2 tbsp', 'معلقتين كبيرتين': '2 tbsp',
  '2 معلقتان كبيرتان': '2 tbsp', '2 معلقتين كبار': '2 tbsp',
  '2 ملاpoons كبيرة': '2 tbsp', '2 ملاعق كبيرة': '2 tbsp',
  '2-3 معلقتين': '2–3 spoons', '2 علقتين': '2 spoons',
  '3 معالق': '3 spoons', '3-4 معالق': '3–4 spoons',
  '2 معالق كبار': '2 tbsp', '3 معالق كبار': '3 tbsp',
  '4 معالق كبار': '4 tbsp', '4 معالق كبيرة': '4 tbsp',
  'علاقتين كبار': '2 tbsp',
  '5 ملعقة كبيرة': '5 tbsp', '6 ملاعق كبيرة': '6 tbsp',
  '3 ملاعق كبيرة (اختياري)': '3 tbsp (optional)',
  '3 ملاعق كبيرة + نصف كوب': '3 tbsp + ½ cup',
  // pinches / dashes
  'رشة': 'a pinch', '1 رشة': 'a pinch', 'رشة صغيرة': 'a small pinch',
  'رشة (حسب الرغبة)': 'a pinch (to taste)',
  'رشفة': 'a sprinkle', 'شوية': 'a little', 'نقطة': 'a dash',
  'حسب الحاجة': 'as needed', 'اختياري': 'optional', 'باقية': 'the rest',
  // packets / cans / cubes
  'باكت': '1 packet', 'باكيت': '1 packet', '1 باكت': '1 packet',
  '1 باكيت': '1 packet', '2 باكت': '2 packets',
  'كيس': '1 bag', '1 كيس': '1 bag', '2 كيس': '2 bags',
  'بكتين': '2 packets', 'بكة أو مكعب': '1 packet or cube',
  'مكعب': '1 cube', 'مكعب واحد': '1 cube',
  'علبة صغيرة': '1 small carton', 'علبة واحدة': '1 carton',
  'علبة صغيرة (حوالي 100 جرام)': '1 small carton (~100 g)',
  '1 علبة (120 جرام)': '1 container (120 g)',
  '1 علبة كبيرة': '1 large container',
  '1 علبة كبيرة (حوالي 120 جرام)': '1 large container (~120 g)',
  '3 علب (120 جرام لكل علبة)': '3 containers (120 g each)',
  'قلبتين': '2 cartons',
  // pieces / produce
  'شريحة': '1 slice', 'شرايح': 'slices', '2 شرائح': '2 slices',
  '8 شرائح': '8 slices', 'قطعتين': '2 pieces', '2 بضعة': '2 pieces',
  '2 فصوص': '2 cloves', '2 ورقة': '2 leaves', 'عدة أوراق': 'several leaves',
  '1 خيارة': '1 cucumber',
  '1 بصلة مقطعة صغير': '1 onion, finely chopped',
  'بصلة واحدة': '1 onion', 'بصلة متوسطة': '1 medium onion',
  '2 بصل متوسط الحجم': '2 medium onions',
  'رأس كبيرة': '1 large head',
  'قرن': '1 pod', 'قرن واحد': '1 pod', '2 فلفل': '2 peppers',
  '1 من كل لون': '1 of each color',
  '4 طماطم': '4 tomatoes', '4 صدور': '4 breasts', '2 جزر': '2 carrots',
  '4-5 ليمونات': '4–5 lemons', '1 ليمونة كبيرة': '1 large lemon',
  '1 حبة مفروم': '1, minced', '1 حبة مفرومة': '1, minced',
  '1 حبة مقطعة': '1, chopped', '1 حبة مقطعة مكعبات صغيرة': '1, diced small',
  '1 حبة صغيرة مبشورة': '1 small, grated',
  '2 حبات': '2 pieces', '2 حبات كبيرة': '2 large pieces',
  '3 حبات مقطعة لمكعبات': '3, diced', '4 حبات متوسطة': '4 medium',
  '4 حبات متوسطة الحجم': '4 medium', '3 حزم': '3 bunches',
  '2 بياض بيض': '2 egg whites', '3-4 سواة': '3–4 pieces',
  '3 ترغفة': '3 loaves', '4 رغيف': '4 loaves', '12 رغيف': '12 loaves',
  // yields / servings
  '4 أطباق': '4 servings', '4 أقراص': '4 patties',
  '4 ساندوتشات': '4 sandwiches', '6 ساندوتشات': '6 sandwiches',
  '6 سندويشات': '6 sandwiches', '4-6 ساندوتشات': '4–6 sandwiches',
  '4-6 سندويتشات': '4–6 sandwiches', '10 سندوتشات': '10 sandwiches',
  '10-15 ساندوتش': '10–15 sandwiches', '12 ساندوتش': '12 sandwiches',
  '12 سندوتش': '12 sandwiches', '12-15 ساندوتش': '12–15 sandwiches',
  '15 ساندوتش': '15 sandwiches', '15 ساندويتش': '15 sandwiches',
  '20 ساندوتش': '20 sandwiches', '20 ساندويتش': '20 sandwiches',
  '28 ساندوتش': '28 sandwiches', '30 ساندويتش': '30 sandwiches',
  'حوالي 20 سندوتش': 'about 20 sandwiches',
  '12 كاب': '12 cups', '12-15 كرتة': '12–15 balls',
  '6-8 قوارب': '6–8 boats', '6-7 وحدات': '6–7 pieces',
  '8 وحدات': '8 pieces', '4-6 وجبات': '4–6 servings',
  // times
  '10-15 دقيقة': '10–15 min', '15 دقائق': '15 min',
  '1 ساعة إلى 1 ساعة وربع': '1–1¼ hours',
  // inline dump of a whole ingredient list (source data quirk)
  '4 كوبات دقيق، ربع كوبية خميرة، معلقة كبيرة سكر، نص معلقة صغيرة ملح، كوبية لبن دافي، كوبية زبادي':
    '4 cups flour, ¼ cup yeast, 1 tbsp sugar, ½ tsp salt, 1 cup warm milk, 1 cup yogurt',
};

const AR = /[؀-ۿݐ-ݿﭐ-﷿]/;
const path = 'scripts/translations/drafts/en/quick.json';
const draft = JSON.parse(await readFile(path, 'utf-8'));
const unmapped = new Set();
let fixed = 0;
const fix = (id, label, cur) => {
  if (typeof cur !== 'string' || !AR.test(cur)) return cur;
  const key = cur.trim();
  if (M[key]) { fixed++; return M[key]; }
  unmapped.add(`${id}\t${label}\t${cur}`);
  return cur;
};
for (const [id, e] of Object.entries(draft)) {
  for (const f of ['prepTime', 'cookTime', 'servings'])
    if (e[f] !== undefined) e[f] = fix(id, f, e[f]);
  for (const [iid, ing] of Object.entries(e.ingredients ?? {}))
    if (ing?.standardAmount) ing.standardAmount = fix(id, `${iid}.amount`, ing.standardAmount);
}
await writeFile(path, JSON.stringify(draft, null, 2) + '\n');
console.log(`fixed ${fixed} fields`);
if (unmapped.size) { console.log('UNMAPPED:'); for (const u of [...unmapped].sort()) console.log('  ' + u); process.exitCode = 2; }
