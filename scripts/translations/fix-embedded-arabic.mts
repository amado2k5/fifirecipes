/**
 * Replaces Arabic fragments left inside already-translated text (mostly
 * parenthetical glosses in standardAmount like "(نحو 390 جرام)") with real
 * translations. Simple measure fragments go through the per-language norm
 * parser (makeTr); the structural phrases use FRAG below.
 *
 *   npx tsx scripts/translations/fix-embedded-arabic.mts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { loadMap, makeTr } from './amount-cover.mts';
import { fileOf } from './audit';

const AR_INNER = /[؀-ۿ]/;

const FRAG: Record<string, Record<string, string>> = {
  de: {
    'إذا احتاج الأمر للتماسك': 'bei Bedarf zum Binden',
    'أو 2 بيضة مخفوقة': 'oder 2 verquirlte Eier',
    '150-200 جرام للقطعة': '150–200 g pro Stück',
    'نصفها للقلي': 'die Hälfte zum Braten',
    'واحدة منها صحيحة': 'eine davon ganz',
    'أو ملعقتان زيت': 'oder 2 EL Öl',
    'أو ملعقة كاري معجون': 'oder 1 EL Currypaste',
    'وللتقديم': 'und zum Servieren',
    'أو ملعقتان حمص جاف': 'oder 2 EL getrocknete Kichererbsen',
    'ويمكن الاستغناء عنها': 'kann weggelassen werden',
    'للحساء': 'für die Suppe',
    'وملعقتان للقاع': 'und 2 EL für den Boden',
    'وقليل للتحمير': 'und etwas zum Anbraten',
    'وملعقة للفرن': 'und 1 EL für den Ofen',
    '3 أكواب ونصف': '3½ Tassen',
    'ونصف كوب آخر للتقديم': 'und weitere ½ Tasse zum Servieren',
    'أو قرصان من الخضرة': 'oder 2 Küchlein aus zubereitetem Blattgemüse',
  },
  el: {
    'إذا احتاج الأمر للتماسك': 'αν χρειαστεί για να δέσει',
    'أو 2 بيضة مخفوقة': 'ή 2 χτυπημένα αυγά',
    '150-200 جرام للقطعة': '150–200 γρ. το τεμάχιο',
    'نصفها للقلي': 'τα μισά για τηγάνισμα',
    'واحدة منها صحيحة': 'το ένα ολόκληρο',
    'أو ملعقتان زيت': 'ή 2 κ.σ. λάδι',
    'أو ملعقة كاري معجون': 'ή 1 κ.σ. πάστα κάρυ',
    'وللتقديم': 'και για το σερβίρισμα',
    'أو ملعقتان حمص جاف': 'ή 2 κ.σ. αποξηραμένα ρεβίθια',
    'ويمكن الاستغناء عنها': 'μπορεί να παραλειφθεί',
    'للحساء': 'για τη σούπα',
    'وملعقتان للقاع': 'και 2 κ.σ. για τη βάση',
    'وقليل للتحمير': 'και λίγο για το σοτάρισμα',
    'وملعقة للفرن': 'και 1 κ.σ. για το φούρνο',
    '3 أكواب ونصف': '3½ φλιτζάνια',
    'ونصف كوب آخر للتقديم': 'και άλλο ½ φλιτζάνι για το σερβίρισμα',
    'أو قرصان من الخضرة': 'ή 2 κεφτέδες από έτοιμα χόρτα',
  },
  es: {
    'إذا احتاج الأمر للتماسك': 'si hace falta para ligar',
    'أو 2 بيضة مخفوقة': 'o 2 huevos batidos',
  },
  he: {
    'إذا احتاج الأمر للتماسك': 'אם יש צורך לקשירה',
    'أو 2 بيضة مخفوقة': 'או 2 ביצים טרופות',
    '150-200 جرام للقطعة': '‏150–200 גרם ליחידה',
    'نصفها للقلي': 'מחציתם לטיגון',
    'واحدة منها صحيحة': 'אחת מהן שלמה',
    'أو ملعقتان زيت': 'או 2 כפות שמן',
    'أو ملعقة كاري معجون': 'או כף משחת קארי',
    'وللتقديم': 'ולהגשה',
    'أو ملعقتان حمص جاف': 'או 2 כפות חומוס יבש',
    'ويمكن الاستغناء عنها': 'אפשר לוותר עליו',
    'للحساء': 'למרק',
    'وملعقتان للقاع': 'ו-2 כפות לתחתית',
    'وقليل للتحمير': 'ומעט לטיגון',
    'وملعقة للفرن': 'וכף לתנור',
    '3 أكواب ونصف': '3½ כוסות',
    'ونصف كوب آخر للتقديم': 'ועוד ½ כוס להגשה',
    'أو قرصان من الخضرة': 'או 2 קציצות של ירק מוכן',
  },
  hi: {
    'إذا احتاج الأمر للتماسك': 'ज़रूरत पड़ने पर बांधने के लिए',
    'أو 2 بيضة مخفوقة': 'या 2 फेंटे हुए अंडे',
  },
  id: {
    'إذا احتاج الأمر للتماسك': 'bila perlu untuk mengikat',
    'أو 2 بيضة مخفوقة': 'atau 2 telur kocok',
  },
  it: {
    'إذا احتاج الأمر للتماسك': "se necessario per legare",
    'أو 2 بيضة مخفوقة': 'o 2 uova sbattute',
  },
  ja: {
    'إذا احتاج الأمر للتماسك': '必要に応じてとろみ付け用',
    'أو 2 بيضة مخفوقة': 'または溶き卵2個',
    '150-200 جرام للقطعة': '1個150–200 g',
    'نصفها للقلي': '半分は揚げ用',
    'واحدة منها صحيحة': 'そのうち1個は丸ごと',
    'أو ملعقتان زيت': 'または油大さじ2',
    'أو ملعقة كاري معجون': 'またはカレーペースト大さじ1',
    'وللتقديم': '盛り付け用',
    'أو ملعقتان حمص جاف': 'または乾燥ひよこ豆大さじ2',
    'ويمكن الاستغناء عنها': '省略可能',
    'للحساء': 'スープ用',
    'وملعقتان للقاع': '底用に大さじ2',
    'وقليل للتحمير': '炒め用に少々',
    'وملعقة للفرن': 'オーブン用に大さじ1',
    '3 أكواب ونصف': 'カップ3½',
    'ونصف كوب آخر للتقديم': '盛り付け用にさらに½カップ',
    'أو قرصان من الخضرة': 'または調理済み青菜2個分',
  },
  ko: {
    'إذا احتاج الأمر للتماسك': '필요하면 농도 조절용',
    'أو 2 بيضة مخفوقة': '또는 푼 달걀 2개',
  },
  ku: {
    'إذا احتاج الأمر للتماسك': 'hewce be ji bo girêdanê',
    'أو 2 بيضة مخفوقة': 'an 2 hêk lûx kirî',
    '150-200 جرام للقطعة': '150–200 g ji bo her perçeyê',
    'نصفها للقلي': 'nîvê wan ji bo sor kirin',
    'واحدة منها صحيحة': 'yek ji wan tije',
    'أو ملعقتان زيت': 'an 2 kevçî mezin rûn',
    'أو ملعقة كاري معجون': 'an 1 kevçî yeke pesta karî',
    'وللتقديم': 'û ji bo pêşkêş kirinê',
    'أو ملعقتان حمص جاف': 'an 2 kevçî mezin noxut hişk',
    'ويمكن الاستغناء عنها': 'dikare were ferz kirin',
    'للحساء': 'ji bo şorbayê',
    'وملعقتان للقاع': 'û 2 kevçî mezin ji bo binê',
    'وقليل للتحمير': 'û hinek ji bo sor kirin',
    'وملعقة للفرن': 'û 1 kevçî yeke ji bo firnê',
    '3 أكواب ونصف': '3½ qede',
    'ونصف كوب آخر للتقديم': 'û ½ qede din ji bo pêşkêş kirinê',
    'أو قرصان من الخضرة': 'an 2 keyk ji sebzeyên amadekirî',
  },
  nl: {
    'إذا احتاج الأمر للتماسك': 'indien nodig om te binden',
    'أو 2 بيضة مخفوقة': 'of 2 geklopte eieren',
    '150-200 جرام للقطعة': '150–200 gr per stuk',
    'نصفها للقلي': 'de helft om te bakken',
    'واحدة منها صحيحة': 'één ervan heel',
    'أو ملعقتان زيت': 'of 2 eetlepels olie',
    'أو ملعقة كاري معجون': 'of 1 eetlepel kerriepasta',
    'وللتقديم': 'en om te serveren',
    'أو ملعقتان حمص جاف': 'of 2 eetlepels gedroogde kikkererwten',
    'ويمكن الاستغناء عنها': 'kan weggelaten worden',
    'للحساء': 'voor de soep',
    'وملعقتان للقاع': 'en 2 eetlepels voor de bodem',
    'وقليل للتحمير': 'en wat om aan te bakken',
    'وملعقة للفرن': 'en 1 eetlepel voor de oven',
    '3 أكواب ونصف': '3½ koppen',
    'ونصف كوب آخر للتقديم': 'en nog ½ kop om te serveren',
    'أو قرصان من الخضرة': 'of 2 koekjes van bereid bladgroente',
  },
  pl: {
    'إذا احتاج الأمر للتماسك': 'w razie potrzeby do związania',
    'أو 2 بيضة مخفوقة': 'lub 2 roztrzepane jajka',
    '150-200 جرام للقطعة': '150–200 g za sztukę',
    'نصفها للقلي': 'połowa do smażenia',
    'واحدة منها صحيحة': 'jedna z nich w całości',
    'أو ملعقتان زيت': 'lub 2 łyżki oleju',
    'أو ملعقة كاري معجون': 'lub 1 łyżka pasty curry',
    'وللتقديم': 'i do podania',
    'أو ملعقتان حمص جاف': 'lub 2 łyżki suszonej ciecierzycy',
    'ويمكن الاستغناء عنها': 'można pominąć',
    'للحساء': 'do zupy',
    'وملعقتان للقاع': 'i 2 łyżki na spód',
    'وقليل للتحمير': 'i trochę do podsmażenia',
    'وملعقة للفرن': 'i 1 łyżka do piekarnika',
    '3 أكواب ونصف': '3½ szklanki',
    'ونصف كوب آخر للتقديم': 'i kolejne ½ szklanki do podania',
    'أو قرصان من الخضرة': 'lub 2 placki z przygotowanej zieleniny',
  },
  pt: {
    'إذا احتاج الأمر للتماسك': 'se necessário para ligar',
    'أو 2 بيضة مخفوقة': 'ou 2 ovos batidos',
    '150-200 جرام للقطعة': '150–200 g por peça',
    'نصفها للقلي': 'metade para fritar',
    'واحدة منها صحيحة': 'um deles inteiro',
    'أو ملعقتان زيت': 'ou 2 colheres de sopa de óleo',
    'أو ملعقة كاري معجون': 'ou 1 colher de sopa de pasta de caril',
    'وللتقديم': 'e para servir',
    'أو ملعقتان حمص جاف': 'ou 2 colheres de sopa de grão-de-bico seco',
    'ويمكن الاستغناء عنها': 'pode ser omitido',
    'للحساء': 'para a sopa',
    'وملعقتان للقاع': 'e 2 colheres de sopa para o fundo',
    'وقليل للتحمير': 'e um pouco para alourar',
    'وملعقة للفرن': 'e 1 colher de sopa para o forno',
    '3 أكواب ونصف': '3½ chávenas',
    'ونصف كوب آخر للتقديم': 'e mais ½ chávena para servir',
    'أو قرصان من الخضرة': 'ou 2 bolinhos de verdes preparados',
  },
  ru: {
    'إذا احتاج الأمر للتماسك': 'при необходимости для связывания',
    'أو 2 بيضة مخفوقة': 'или 2 взбитых яйца',
    '150-200 جرام للقطعة': '150–200 г на штуку',
    'نصفها للقلي': 'половина — для жарки',
    'واحدة منها صحيحة': 'одна из них целая',
    'أو ملعقتان زيت': 'или 2 ст. л. масла',
    'أو ملعقة كاري معجون': 'или 1 ст. л. пасты карри',
    'وللتقديم': 'и для подачи',
    'أو ملعقتان حمص جاف': 'или 2 ст. л. сухого нута',
    'ويمكن الاستغناء عنها': 'можно опустить',
    'للحساء': 'для супа',
    'وملعقتان للقاع': 'и 2 ст. л. на дно',
    'وقليل للتحمير': 'и немного для обжарки',
    'وملعقة للفرن': 'и 1 ст. л. для духовки',
    '3 أكواب ونصف': '3½ стакана',
    'ونصف كوب آخر للتقديم': 'и ещё ½ стакана для подачи',
    'أو قرصان من الخضرة': 'или 2 лепёшки из приготовленной зелени',
  },
  sv: {
    'إذا احتاج الأمر للتماسك': 'vid behov för att binda',
    'أو 2 بيضة مخفوقة': 'eller 2 uppvispade ägg',
    '150-200 جرام للقطعة': '150–200 g per stycke',
    'نصفها للقلي': 'hälften för stekning',
    'واحدة منها صحيحة': 'en av dem hel',
    'أو ملعقتان زيت': 'eller 2 msk olja',
    'أو ملعقة كاري معجون': 'eller 1 msk currypasta',
    'وللتقديم': 'och för servering',
    'أو ملعقتان حمص جاف': 'eller 2 msk torkade kikärtor',
    'ويمكن الاستغناء عنها': 'kan utelämnas',
    'للحساء': 'till soppan',
    'وملعقتان للقاع': 'och 2 msk till botten',
    'وقليل للتحمير': 'och lite till att fräsa',
    'وملعقة للفرن': 'och 1 msk till ugnen',
    '3 أكواب ونصف': '3½ koppar',
    'ونصف كوب آخر للتقديم': 'och ytterligare ½ kopp för servering',
    'أو قرصان من الخضرة': 'eller 2 biffar av tillredda grönsaker',
  },
  sw: {
    'إذا احتاج الأمر للتماسك': 'ikihitajika kwa kuunganisha',
    'أو 2 بيضة مخفوقة': 'au mayai 2 yaliyochapwa',
    '150-200 جرام للقطعة': '150–200 g kwa kipande',
    'نصفها للقلي': 'nusu kwa kukaanga',
    'واحدة منها صحيحة': 'moja yao nzima',
    'أو ملعقتان زيت': 'au vijiko 2 vikubwa vya mafuta',
    'أو ملعقة كاري معجون': 'au kijiko 1 kikubwa cha pesto ya curry',
    'وللتقديم': 'na kwa kutoa',
    'أو ملعقتان حمص جاف': 'au vijiko 2 vikubwa vya chana kavu',
    'ويمكن الاستغناء عنها': 'inaweza kuachwa',
    'للحساء': 'kwa supu',
    'وملعقتان للقاع': 'na vijiko 2 vikubwa kwa chini',
    'وقليل للتحمير': 'na kidogo kwa kukaanga',
    'وملعقة للفرن': 'na kijiko 1 kikubwa kwa oven',
    '3 أكواب ونصف': 'vikombe 3½',
    'ونصف كوب آخر للتقديم': 'na kikombe ½ kingine kwa kutoa',
    'أو قرصان من الخضرة': 'au keki 2 za mboga zilizoandaliwa',
  },
  tr: {
    'إذا احتاج الأمر للتماسك': 'gerekirse bağlamak için',
    'أو 2 بيضة مخفوقة': 'veya 2 çırpılmış yumurta',
    '150-200 جرام للقطعة': 'adet başına 150–200 g',
    'نصفها للقلي': 'yarısı kızartmak için',
    'واحدة منها صحيحة': 'biri bütün',
    'أو ملعقتان زيت': 'veya 2 yemek kaşığı yağ',
    'أو ملعقة كاري معجون': 'veya 1 yemek kaşığı köri ezmesi',
    'وللتقديم': 've servis için',
    'أو ملعقتان حمص جاف': 'veya 2 yemek kaşığı kuru nohut',
    'ويمكن الاستغناء عنها': 'atlanabilir',
    'للحساء': 'çorba için',
    'وملعقتان للقاع': 've taban için 2 yemek kaşığı',
    'وقليل للتحمير': 've kavurmak için biraz',
    'وملعقة للفرن': 've fırın için 1 yemek kaşığı',
    '3 أكواب ونصف': '3½ su bardağı',
    'ونصف كوب آخر للتقديم': 've servis için ½ su bardağı daha',
    'أو قرصان من الخضرة': 'veya hazırlanmış yeşillikten 2 köfte',
  },
  zh: {
    'إذا احتاج الأمر للتماسك': '如需增加黏性',
    'أو 2 بيضة مخفوقة': '或2个打散的鸡蛋',
    '150-200 جرام للقطعة': '每块150–200克',
    'نصفها للقلي': '一半用于煎',
    'واحدة منها صحيحة': '其中1个完整',
    'أو ملعقتان زيت': '或油2大勺',
    'أو ملعقة كاري معجون': '或咖喱酱1大勺',
    'وللتقديم': '以及装盘用',
    'أو ملعقتان حمص جاف': '或干鹰嘴豆2大勺',
    'ويمكن الاستغناء عنها': '可省略',
    'للحساء': '汤用',
    'وملعقتان للقاع': '铺底用大勺2',
    'وقليل للتحمير': '以及煸炒用少许',
    'وملعقة للفرن': '烤箱用大勺1',
    '3 أكواب ونصف': '3½杯',
    'ونصف كوب آخر للتقديم': '装盘再加½杯',
    'أو قرصان من الخضرة': '或调好的青菜饼2个',
  },
};

const AFFECTED = Object.keys(FRAG);
const leftover: Record<string, Set<string>> = {};

for (const lang of AFFECTED) {
  const tr = makeTr(await loadMap(lang));
  const fragExact = FRAG[lang];
  const tablePath = fileOf(lang);
  const table: Record<string, any> = JSON.parse(readFileSync(tablePath, 'utf-8'));
  let fixed = 0;

  const fixText = (v: string): string =>
    v.replace(/\(([^()]*)\)/g, (whole, inner) => {
      if (!AR_INNER.test(inner)) return whole;
      const key = inner.trim();
      const t = fragExact[key] ?? tr(key);
      if (t == null) {
        (leftover[lang] ??= new Set()).add(key);
        return whole;
      }
      fixed++;
      return `(${t})`;
    });

  for (const entry of Object.values(table)) {
    for (const k of ['title', 'prepTime', 'cookTime', 'servings', 'culturalNotes'] as const)
      if (typeof entry[k] === 'string') entry[k] = fixText(entry[k]);
    for (const ing of Object.values<any>(entry.ingredients ?? {})) {
      if (ing?.name) ing.name = fixText(ing.name);
      if (ing?.standardAmount) ing.standardAmount = fixText(ing.standardAmount);
    }
    for (const [n, txt] of Object.entries<string>(entry.instructions ?? {}))
      if (typeof txt === 'string') entry.instructions[n] = fixText(txt);
  }

  writeFileSync(tablePath, JSON.stringify(table, null, 2) + '\n');
  console.log(`${lang}: ${fixed} fragments replaced`);
}

const left = Object.entries(leftover);
if (left.length) {
  for (const [l, s] of left) for (const f of s) console.log(`UNRESOLVED ${l}\t${f}`);
  process.exitCode = 1;
}
