// Normalizes leftover Arabic amount/unit strings in the en/meats draft.
// Exact-match map over the known vocabulary; anything unmapped is printed.
import { readFile, writeFile } from 'node:fs/promises';

const M = {
  // weights / volumes
  'نص كيلو': '500 g (½ kg)',
  'نص كيلو (سدر)': '500 g, ground',
  '0.5 كيلو مقطعة لمكعبات ومتحمرة': '500 g, diced & browned',
  'حوالي كيلو': 'about 1 kg',
  'كيلو ونص': '1.5 kg',
  'اتنين كيلو': '2 kg',
  '2.5 كيلو': '2.5 kg',
  '3 كيلو': '3 kg',
  '1-2 كيلو': '1–2 kg',
  '0.25 كيلو': '250 g (¼ kg)',
  'ربع كيلو مبشور': '¼ kg, grated',
  '1.3 كيلو': '1.3 kg',
  // cups
  'نص كوب': '½ cup', 'نص كوباية': '½ cup', 'نص كباية': '½ cup',
  'نص كوباية كبيرة': '½ large cup',
  'كوباية': '1 cup', 'كباية': '1 cup', '1 كوباية': '1 cup',
  'كوب واحد': '1 cup', 'مقدار كأس': '1 cup',
  'كوبين': '2 cups', '2 أكواب': '2 cups', '3 أكواب مغلية': '3 cups, boiling',
  '3 كبيات': '3 cups', '5 كوب': '5 cups',
  'كوب ونص': '1½ cups', '1 كوب + نصف كوب': '1½ cups',
  '2 كوب وربع': '2¼ cups', 'ربع كوباية': '¼ cup',
  'ربع كوب لكل كوب رز': '¼ cup per cup of rice',
  'تلت كوب': '⅓ cup',
  // spoons
  'معلقة كبيرة': '1 tbsp', '1 ملعقة كبيرة ممسوحة': '1 level tbsp',
  '1 ملعقة كبيرة مفرومة': '1 tbsp, minced', '1 ملعقة كبيرة مفروم': '1 tbsp, minced',
  '1 ملعقة كبيرة لكل فرخة': '1 tbsp per chicken',
  '2 ملعقة كبيرة (اختياري)': '2 tbsp (optional)',
  'معلقة صغيرة': '1 tsp', '1 معلقة صغيرة': '1 tsp',
  'معلقة صغيرة مفرومة': '1 tsp, minced', '1 ملعقة صغيرة مفرومة': '1 tsp, minced',
  'نص معلقة صغيرة': '½ tsp', 'نص ملعقة صغيرة': '½ tsp',
  'ربع معلقة صغيرة': '¼ tsp',
  'معلقة': '1 spoon', '1 معلقة': '1 spoon', 'معلقة ونصف': '1½ spoons',
  'معلقتين': '2 spoons', '2 ملعقتان': '2 spoons', '2 ملعقتين': '2 spoons',
  '2 ملاعق': '2 spoons', '2 معلقة': '2 spoons', 'علاقتين': '2 spoons',
  '4 معلقة': '4 spoons', 'عصير 2 ملعقتان': 'juice, 2 spoons',
  '2 ملاعق كبيرة': '2 tbsp', '2 معلقة كبيرة': '2 tbsp',
  '2 معالق كبيرة': '2 tbsp', '2 ملاعق كبار': '2 tbsp', 'معلقتين كبار': '2 tbsp',
  '3 معالق كبيرة': '3 tbsp', '4 معالق كبار': '4 tbsp', '4 معالق كبيرة': '4 tbsp',
  '8 معالق كبار': '8 tbsp',
  '2 ملاعق صغيرة': '2 tsp', '2 ملاعق صغيرتين': '2 tsp', '2 معلقات صغيرتين': '2 tsp',
  // pinches / dashes
  '1 رشة': 'a pinch', 'رشه': 'a pinch', 'رشفة': 'a sprinkle',
  'شوية': 'a little', 'نقطتان': '2 dashes',
  'حسب الحاجة': 'as needed', 'حسب الطريقة': 'as per method',
  'حسب الكمية المطلوبة': 'as much as needed', 'حسب عدد الأفراد': 'per person',
  'بقية الكمية': 'the rest',
  'ملعقة ونصف': '1½ spoons', '2 ورقتان': '2 leaves', '2 حبتان': '2 pieces',
  '1 عصير ليمون': 'juice of 1 lemon', '12-15 رول': '12–15 rolls',
  'ظرف (اختياري)': '1 packet (optional)', 'مفرومة': 'minced', 'مكعبات صغيرة': 'small cubes',
  'شرايح': 'slices', 'متقطعة شرايح': 'sliced',
  'كبار متقطعين شرايح': 'large, sliced',
  'مقطعة على الطرنشات ومتحمرة': 'sliced & browned',
  'كبار مفرومين ناعم': 'large, finely minced',
  'قطعة صغيرة مفرومة': '1 small piece, minced',
  // packets / cans / cubes
  'باكيت': '1 packet', '1 باكيت': '1 packet', '1 باكت': '1 packet',
  '1 باكة': '1 packet', 'باكت أو اثنين': '1–2 packets',
  '1 كيس': '1 bag', '1 كيس (اختياري)': '1 packet (optional)',
  'مكعب': '1 cube', '2 مكعبات': '2 cubes', '1 مكعب (اختياري)': '1 cube (optional)',
  'علبة كبيرة': '1 large container', 'نص برطمانين': 'half of 2 jars',
  // pieces / produce
  '8 قطع': '8 pieces', '5 قطع': '5 pieces', '2-3 قطع': '2–3 pieces',
  '14 قطعة': '14 pieces', '15 وحدة': '15 pieces', '60 وحدة': '60 pieces',
  'نصين': '2 halves', '1 صغير': '1 small', '1 كبيرة': '1 large', '1 كبيرة مفرومة': '1 large, minced',
  '2 متوسطة': '2 medium', '2 حبات': '2 pieces', '3 حبة': '3 pieces',
  '2 حبات كبيرة': '2 large', '2 حبات متوسطة': '2 medium', '4 حبات متوسطة': '4 medium',
  '2-3 حبة': '2–3 pieces', '1 حبة (حسب الرغبة)': '1 (to taste)',
  '3 حبات (أحمر، أصفر، أخضر)': '3 (red, yellow, green)',
  'حبتان مبشورتان': '2, grated',
  '1 حبة مفرومة': '1, minced', '1 حبة مقطعة': '1, chopped',
  '1 حبة مقطعة صغيرة': '1, finely chopped', '2 حبة مقطعة': '2, chopped',
  '2 ورقة': '2 leaves', '2 أوراق': '2 leaves', '3 أوراق': '3 leaves',
  '2-3 ورقة': '2–3 leaves', '7 أوراق': '7 leaves',
  'فصين': '2 cloves', '2 فصوص': '2 cloves', '2 فصوص مهروسة': '2 cloves, crushed',
  '2 فصوص مفرومين': '2 cloves, minced', 'فص واحد': '1 clove',
  'ست فصوص': '6 cloves', '6-7 فصوص': '6–7 cloves',
  'بصلة واحدة': '1 onion', '1 بصل': '1 onion',
  'بصلة كبيرة': '1 large onion', '1 بصلة مفرومة': '1 onion, minced',
  '1 بصلة كبيرة مفرومة': '1 large onion, minced',
  'بصلة كبيرة مفرومة ناعم': '1 large onion, finely minced',
  'بصلية متوسطة': '1 medium onion', '2 بصل متوسط': '2 medium onions',
  '2 بصل كبير': '2 large onions', '3 بصلات كبيرة': '3 large onions',
  '4 بصلات متوسطة الحجم': '4 medium onions',
  '1 بصلة كبيرة أو 2 بصلات متوسطة': '1 large or 2 medium onions',
  '1 قرن': '1 pod', 'قرن فلفل': '1 pepper pod', 'قرنين': '2 pods', 'نص قرن': '½ pod',
  '2 فلفل': '2 peppers', '2 طماطم': '2 tomatoes', '1 طماطم': '1 tomato',
  '2 جزر': '2 carrots', 'جزرتين': '2 carrots',
  '2 ليمونة': '2 lemons', '2 ليمونات': '2 lemons', 'نص ليمونة': '½ lemon',
  '1 من كل لون': '1 of each color',
  '2 عيدان': '2 sticks', '2 عود مفرومين': '2 stalks, minced',
  'ربطة': '1 bunch', '3 ربطات': '3 bunches', 'نص حزمة': '½ bunch',
  'حوالي ربطة': 'about 1 bunch', '1/2 حزمة': '½ bunch',
  '3 رغيف': '3 loaves',
  '2 فرخة': '2 chickens', '1 فرخة مخلية': '1 chicken, deboned',
  '1 فرخة مقطعة إلى 4 قطع': '1 chicken, quartered',
  '1 فرخة مقطعة إلى 8 أو 4 قطع': '1 chicken, cut into 4 or 8 pieces',
  // yields / times
  'يكفي لصنع كمية كبيرة من اللانشون تكفي أسبوعًا أو أكثر': 'yields a large batch, enough for a week or more',
  '2 ساعات': '2 hours', 'ساعتين': '2 hours', '4 ساعات': '4 hours',
  '2.5 ساعات': '2½ hours', '2-3 ساعات': '2–3 hours',
  'ساعتين ونصف': '2½ hours', 'ساعتين وربع': '2¼ hours',
  '1 ساعة وربع': '1¼ hours', 'حوالي ساعة': 'about 1 hour',
  'حوالي ساعة وربع': 'about 1¼ hours', '1 ساعة و 30 دقيقة': '1 hour 30 min',
  '1 ساعة إلى 1 ساعة ونصف': '1–1½ hours',
  '3 ساعات و 15 دقيقة': '3 hours 15 min', '3 ساعات و15 دقيقة': '3 hours 15 min',
  '2 ساعات و 10 دقائق': '2 hours 10 min',
};

const AR = /[؀-ۿݐ-ݿﭐ-﷿]/;
const path = 'scripts/translations/drafts/en/meats.json';
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
