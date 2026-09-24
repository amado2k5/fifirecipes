import { SupportedLanguage } from '../types';

// UI strings for the additional recipes (chapter 7), which come from outside
// Dr. Fatma's manuscripts and are credited to their source.
export interface AdditionalRecipesText {
  badge: string;
  notice: string;
  sourceLabel: string;
  ingredientsNote: string;
  collectionAll: string;
  collectionArchive: string;
  collectionAdditional: string;
  collectionOsool: string;
  citationLabel: string;
  tips: string;
}

const TEXT: Partial<Record<SupportedLanguage, AdditionalRecipesText>> & { en: AdditionalRecipesText } = {
  ar: {
    badge: 'وصفة إضافية',
    notice: 'هذه وصفة إضافية وليست من مخطوطات د. فاطمة القاوقجي. أعدنا صياغتها بتصرف، مع حفظ حق المصدر.',
    sourceLabel: 'المصدر:',
    ingredientsNote: 'المقادير كما وردت في المصدر بعد تنسيقها. يمكنك النقر على المربع لتحديد المكونات الجاهزة أثناء الطهو.',
    collectionAll: 'كل الوصفات',
    collectionArchive: 'أرشيف د. فاطمة',
    collectionAdditional: 'وصفات إضافية (Chef Teta)',
    collectionOsool: 'كتاب أصول الطهي',
    citationLabel: 'الموضع في الكتاب:',
    tips: 'نصائح وملاحظات'
  },
  en: {
    badge: 'Additional recipe',
    notice: 'This is an additional recipe, not from Dr. Fatma Alkawokgy’s manuscripts. We rewrote it in our own words and credit the original source.',
    sourceLabel: 'Source:',
    ingredientsNote: 'Measurements as given by the source, tidied into our format. Check off ingredients as you prepare.',
    collectionAll: 'All recipes',
    collectionArchive: 'Dr. Fatma’s archive',
    collectionAdditional: 'Additional recipes (Chef Teta)',
    collectionOsool: 'Osool El Tahy cookbook',
    citationLabel: 'In the book:',
    tips: 'Tips & notes'
  },
  fr: {
    badge: 'Recette supplémentaire',
    notice: 'Cette recette supplémentaire ne provient pas des manuscrits du Dr Fatma Alkawokgy. Nous l’avons réécrite avec nos propres mots en citant la source d’origine.',
    sourceLabel: 'Source :',
    ingredientsNote: 'Quantités reprises de la source et mises à notre format. Cochez les ingrédients au fur et à mesure de la préparation.',
    collectionAll: 'Toutes les recettes',
    collectionArchive: 'Archive du Dr Fatma',
    collectionAdditional: 'Recettes supplémentaires (Chef Teta)',
    collectionOsool: 'Livre Osool El Tahy',
    citationLabel: 'Dans le livre :',
    tips: 'Conseils et notes'
  },
  es: {
    badge: 'Receta adicional',
    notice: 'Esta es una receta adicional que no procede de los manuscritos de la Dra. Fatma Alkawokgy. La hemos redactado con nuestras propias palabras y citamos la fuente original.',
    sourceLabel: 'Fuente:',
    ingredientsNote: 'Cantidades tomadas de la fuente y adaptadas a nuestro formato. Marca los ingredientes a medida que los prepares.',
    collectionAll: 'Todas las recetas',
    collectionArchive: 'Archivo de la Dra. Fatma',
    collectionAdditional: 'Recetas adicionales (Chef Teta)',
    collectionOsool: 'Libro Osool El Tahy',
    citationLabel: 'En el libro:',
    tips: 'Consejos y notas'
  },
  ja: {
    badge: '追加レシピ',
    notice: 'これはファトマ・アルカウォクジー博士の手稿によらない追加レシピです。独自の言葉で書き直し、出典を明記しています。',
    sourceLabel: '出典:',
    ingredientsNote: '分量は出典に基づき、当サイトの形式に整えたものです。準備が済んだ材料はチェックを入れてください。',
    collectionAll: 'すべてのレシピ',
    collectionArchive: 'ファトマ博士のアーカイブ',
    collectionAdditional: '追加レシピ (Chef Teta)',
    collectionOsool: '料理書『オスール・エル・タヒー』',
    citationLabel: '書籍内の位置:',
    tips: 'コツとメモ'
  },
  hi: {
    badge: 'अतिरिक्त व्यंजन',
    notice: 'यह एक अतिरिक्त व्यंजन है, जो डॉ. फातिमा अलकावोकजी की पांडुलिपियों से नहीं है। हमने इसे अपने शब्दों में लिखा है और मूल स्रोत का श्रेय दिया है।',
    sourceLabel: 'स्रोत:',
    ingredientsNote: 'माप स्रोत के अनुसार हैं, हमारे प्रारूप में व्यवस्थित। तैयार होते ही सामग्री को चेक करें।',
    collectionAll: 'सभी व्यंजन',
    collectionArchive: 'डॉ. फातिमा का संग्रह',
    collectionAdditional: 'अतिरिक्त व्यंजन (Chef Teta)',
    collectionOsool: 'ओसूल अल-तही पाकपुस्तक',
    citationLabel: 'पुस्तक में:',
    tips: 'सुझाव और टिप्पणियाँ'
  },
  pt: {
    badge: 'Receita adicional',
    notice: 'Esta é uma receita adicional, que não vem dos manuscritos da Dra. Fatma Alkawokgy. Nós a reescrevemos com nossas próprias palavras e creditamos a fonte original.',
    sourceLabel: 'Fonte:',
    ingredientsNote: 'Medidas conforme a fonte, organizadas no nosso formato. Marque os ingredientes à medida que for preparando.',
    collectionAll: 'Todas as receitas',
    collectionArchive: 'Arquivo da Dra. Fatma',
    collectionAdditional: 'Receitas adicionais (Chef Teta)',
    collectionOsool: 'Livro Osool El Tahy',
    citationLabel: 'No livro:',
    tips: 'Dicas e notas'
  },
  ru: {
    badge: 'Дополнительный рецепт',
    notice: 'Это дополнительный рецепт, не входящий в рукописи д-ра Фатмы Алкавокджи. Мы пересказали его своими словами и указываем первоисточник.',
    sourceLabel: 'Источник:',
    ingredientsNote: 'Количества взяты из источника и приведены к нашему формату. Отмечайте ингредиенты по мере подготовки.',
    collectionAll: 'Все рецепты',
    collectionArchive: 'Архив д-ра Фатмы',
    collectionAdditional: 'Дополнительные рецепты (Chef Teta)',
    collectionOsool: 'Книга «Осуль эт-Тахи»',
    citationLabel: 'В книге:',
    tips: 'Советы и заметки'
  },
  zh: {
    badge: '补充食谱',
    notice: '这是一道补充食谱，并非出自法特玛·阿尔卡沃克吉博士的手稿。我们用自己的语言重新撰写，并注明原始出处。',
    sourceLabel: '出处：',
    ingredientsNote: '用量依据原出处，并按本站格式整理。准备好后即可勾选相应食材。',
    collectionAll: '全部食谱',
    collectionArchive: '法特玛博士档案',
    collectionAdditional: '补充食谱 (Chef Teta)',
    collectionOsool: '《烹饪原理》食谱书',
    citationLabel: '书中位置：',
    tips: '烹饪贴士'
  },
  de: {
    badge: 'Zusätzliches Rezept',
    notice: 'Dies ist ein zusätzliches Rezept und stammt nicht aus den Manuskripten von Dr. Fatma Alkawokgy. Wir haben es in eigenen Worten neu formuliert und nennen die Originalquelle.',
    sourceLabel: 'Quelle:',
    ingredientsNote: 'Mengen laut Quelle, in unser Format übertragen. Haken Sie die Zutaten ab, sobald Sie sie vorbereitet haben.',
    collectionAll: 'Alle Rezepte',
    collectionArchive: 'Archiv von Dr. Fatma',
    collectionAdditional: 'Zusätzliche Rezepte (Chef Teta)',
    collectionOsool: 'Kochbuch Osool El Tahy',
    citationLabel: 'Im Buch:',
    tips: 'Tipps & Hinweise'
  },
  it: {
    badge: 'Ricetta aggiuntiva',
    notice: 'Questa è una ricetta aggiuntiva, non tratta dai manoscritti della Dott.ssa Fatma Alkawokgy. L’abbiamo riscritta con parole nostre citando la fonte originale.',
    sourceLabel: 'Fonte:',
    ingredientsNote: 'Dosi riprese dalla fonte e adattate al nostro formato. Spunta gli ingredienti man mano che li prepari.',
    collectionAll: 'Tutte le ricette',
    collectionArchive: 'Archivio della Dott.ssa Fatma',
    collectionAdditional: 'Ricette aggiuntive (Chef Teta)',
    collectionOsool: 'Libro Osool El Tahy',
    citationLabel: 'Nel libro:',
    tips: 'Consigli e note'
  },
  el: {
    badge: 'Επιπλέον συνταγή',
    notice: 'Αυτή είναι μια επιπλέον συνταγή και δεν προέρχεται από τα χειρόγραφα της Δρ. Φάτμα Αλκαβόκτζι. Την ξαναγράψαμε με δικά μας λόγια και αναφέρουμε την αρχική πηγή.',
    sourceLabel: 'Πηγή:',
    ingredientsNote: 'Ποσότητες σύμφωνα με την πηγή, προσαρμοσμένες στη μορφή μας. Τσεκάρετε τα υλικά καθώς τα ετοιμάζετε.',
    collectionAll: 'Όλες οι συνταγές',
    collectionArchive: 'Αρχείο της Δρ. Φάτμα',
    collectionAdditional: 'Επιπλέον συνταγές (Chef Teta)',
    collectionOsool: 'Βιβλίο Osool El Tahy',
    citationLabel: 'Στο βιβλίο:',
    tips: 'Συμβουλές & σημειώσεις'
  },
  ur: {
    badge: 'اضافی ترکیب',
    notice: 'یہ ایک اضافی ترکیب ہے جو ڈاکٹر فاطمہ القاوقجی کے مخطوطات سے نہیں ہے۔ ہم نے اسے اپنے الفاظ میں لکھا ہے اور اصل ماخذ کا حوالہ دیا ہے۔',
    sourceLabel: 'ماخذ:',
    ingredientsNote: 'مقداریں ماخذ کے مطابق ہیں اور ہمارے انداز میں ترتیب دی گئی ہیں۔ تیاری کے ساتھ ساتھ اجزاء پر نشان لگاتے جائیں۔',
    collectionAll: 'تمام ترکیبیں',
    collectionArchive: 'ڈاکٹر فاطمہ کا ذخیرہ',
    collectionAdditional: 'اضافی ترکیبیں (Chef Teta)',
    collectionOsool: 'کتاب اصول الطہی',
    citationLabel: 'کتاب میں:',
    tips: 'مشورے اور نوٹس'
  },
  fa: {
    badge: 'دستور افزوده',
    notice: 'این یک دستور افزوده است و از دست‌نوشته‌های دکتر فاطمه القاوقجی نیست. آن را با واژه‌های خودمان بازنویسی کرده‌ایم و منبع اصلی را ذکر می‌کنیم.',
    sourceLabel: 'منبع:',
    ingredientsNote: 'اندازه‌ها مطابق منبع است و در قالب ما مرتب شده است. هنگام آماده‌سازی، مواد را علامت بزنید.',
    collectionAll: 'همه دستورها',
    collectionArchive: 'آرشیو دکتر فاطمه',
    collectionAdditional: 'دستورهای افزوده (Chef Teta)',
    collectionOsool: 'کتاب اصول الطهی',
    citationLabel: 'در کتاب:',
    tips: 'نکات و یادداشت‌ها'
  },
  tr: {
    badge: 'Ek tarif',
    notice: 'Bu, Dr. Fatma Alkawokgy’nin el yazmalarından olmayan ek bir tariftir. Kendi sözlerimizle yeniden yazdık ve özgün kaynağı belirtiyoruz.',
    sourceLabel: 'Kaynak:',
    ingredientsNote: 'Ölçüler kaynaktaki gibidir, bizim biçimimize uyarlanmıştır. Hazırladıkça malzemeleri işaretleyin.',
    collectionAll: 'Tüm tarifler',
    collectionArchive: 'Dr. Fatma’nın arşivi',
    collectionAdditional: 'Ek tarifler (Chef Teta)',
    collectionOsool: 'Osool El Tahy yemek kitabı',
    citationLabel: 'Kitapta:',
    tips: 'İpuçları ve notlar'
  },
  ku: {
    badge: 'Reçeteya zêde',
    notice: 'Ev reçeteyeke zêde ye û ne ji destnivîsên Dr. Fatma Alkawokgy ye. Me ew bi gotinên xwe ji nû ve nivîsî û çavkaniya wê ya resen destnîşan dikin.',
    sourceLabel: 'Çavkanî:',
    ingredientsNote: 'Pîvan li gorî çavkaniyê ne û bi forma me hatine rêkxistin. Dema amade dikî pêkhateyan nîşan bike.',
    collectionAll: 'Hemû reçete',
    collectionArchive: 'Arşîva Dr. Fatma',
    collectionAdditional: 'Reçeteyên zêde (Chef Teta)',
    collectionOsool: 'Pirtûka Osool El Tahy',
    citationLabel: 'Di pirtûkê de:',
    tips: 'Şîret û not'
  },
  id: {
    badge: 'Resep tambahan',
    notice: 'Ini adalah resep tambahan, bukan dari naskah Dr. Fatma Alkawokgy. Kami menuliskannya kembali dengan kata-kata kami sendiri dan mencantumkan sumber aslinya.',
    sourceLabel: 'Sumber:',
    ingredientsNote: 'Takaran sesuai sumber, dirapikan ke format kami. Centang bahan saat Anda menyiapkannya.',
    collectionAll: 'Semua resep',
    collectionArchive: 'Arsip Dr. Fatma',
    collectionAdditional: 'Resep tambahan (Chef Teta)',
    collectionOsool: 'Buku masak Osool El Tahy',
    citationLabel: 'Dalam buku:',
    tips: 'Tips & catatan'
  },
  sw: {
    badge: 'Pishi la ziada',
    notice: 'Hili ni pishi la ziada, si kutoka kwenye miswada ya Dkt. Fatma Alkawokgy. Tumeliandika upya kwa maneno yetu wenyewe na tunataja chanzo chake asili.',
    sourceLabel: 'Chanzo:',
    ingredientsNote: 'Vipimo ni kama vilivyo kwenye chanzo, vimepangwa kwa mtindo wetu. Weka alama kwenye viungo unapoviandaa.',
    collectionAll: 'Mapishi yote',
    collectionArchive: 'Hifadhi ya Dkt. Fatma',
    collectionAdditional: 'Mapishi ya ziada (Chef Teta)',
    collectionOsool: 'Kitabu cha Osool El Tahy',
    citationLabel: 'Katika kitabu:',
    tips: 'Vidokezo na maelezo'
  },
  ko: {
    badge: '추가 레시피',
    notice: '이 레시피는 파트마 알카워크지 박사의 필사본에서 나온 것이 아닌 추가 레시피입니다. 저희의 말로 다시 쓰고 원출처를 밝혔습니다.',
    sourceLabel: '출처:',
    ingredientsNote: '분량은 출처를 따르되 저희 형식에 맞게 정리했습니다. 준비하면서 재료에 체크하세요.',
    collectionAll: '전체 레시피',
    collectionArchive: '파트마 박사 아카이브',
    collectionAdditional: '추가 레시피 (Chef Teta)',
    collectionOsool: '요리책 《우술 알타히》',
    citationLabel: '책 속 위치:',
    tips: '팁과 메모'
  }
};

export function getAdditionalRecipesText(lang: SupportedLanguage): AdditionalRecipesText {
  return TEXT[lang] || TEXT.en;
}
