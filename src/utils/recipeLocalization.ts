import { MasterIngredient, Recipe, SupportedLanguage } from '../types';

export type RecipeTranslation = {
  title?: string;
  chapter?: string;
  category?: string;
  cookingMethod?: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  culturalNotes?: string;
  ingredients?: Record<string, { name?: string; standardAmount?: string }>;
  instructions?: Record<string, string>;
};

export type TranslationTable = Record<string, RecipeTranslation>;

function isArabicLocale(lang: SupportedLanguage): boolean {
  return lang === 'ar';
}

// Recipe translations are not bundled. The browser receives them in two
// layers: a small per-language table of card fields (title, category, times,
// preview ingredients) fetched by ensureTranslationTable(), and each recipe's
// full translations inside that recipe's own data file, registered when the
// recipe is opened. Both are merged here, per recipe, so the lookup functions
// below just read whatever has arrived and fall back to the recipe's own
// fields for anything that has not.
const translationTables: Partial<Record<SupportedLanguage, TranslationTable>> = {};
const cardTablePromises: Partial<Record<SupportedLanguage, Promise<void>>> = {};

export function registerTranslations(lang: SupportedLanguage, table: TranslationTable): void {
  const target = (translationTables[lang] ??= {});
  for (const [recipeId, incoming] of Object.entries(table)) {
    const existing = target[recipeId];
    target[recipeId] = existing
      ? {
          ...existing,
          ...incoming,
          ingredients: { ...existing.ingredients, ...incoming.ingredients },
          instructions: { ...existing.instructions, ...incoming.instructions }
        }
      : incoming;
  }
}

// Fetches (once) the card-level translation table for a language. Call this
// when `lang` changes and re-render once it resolves.
export function ensureTranslationTable(lang: SupportedLanguage, load: (lang: SupportedLanguage) => Promise<TranslationTable>): Promise<void> {
  if (isArabicLocale(lang)) return Promise.resolve();
  cardTablePromises[lang] ??= load(lang)
    .then(table => registerTranslations(lang, table))
    .catch(() => {
      // Let a later call retry; the untranslated fallbacks keep the UI usable.
      delete cardTablePromises[lang];
    });
  return cardTablePromises[lang]!;
}

function getTranslationTable(lang: SupportedLanguage): TranslationTable | undefined {
  return translationTables[lang];
}

const CHAPTER_NAMES: Record<number, string> = {
  1: 'Chapter 1: Meats, Poultry & Seafood',
  2: 'Chapter 2: Soups, Salads, Vegetables & Legumes',
  3: 'Chapter 3: Starches, Stuffed Dishes & Pastries',
  4: 'Chapter 4: Pastries, Light Desserts & Beverages',
  5: 'Chapter 5: Eastern Desserts',
  6: 'Chapter 6: Western Desserts',
  7: 'Chapter 7: Additional Recipes',
  8: 'Chapter 8: From the Cookbook “Osool El-Tahy”',
  9: 'Chapter 9: From the Cookbook “Egyptian Cooking”',
  10: 'Chapter 10: Fatma Abu Haty Channel Recipes'
};

const CHAPTER_NAMES_FR: Record<number, string> = {
  1: 'Chapitre 1 : Viandes, Volailles et Fruits de Mer',
  2: 'Chapitre 2 : Soupes, Salades, Légumes et Légumineuses',
  3: 'Chapitre 3 : Féculents, Plats Farcis et Pâtisseries',
  4: 'Chapitre 4 : Pâtisseries, Desserts Légers et Boissons',
  5: 'Chapitre 5 : Desserts Orientaux',
  6: 'Chapitre 6 : Desserts Occidentaux',
  7: 'Chapitre 7 : Recettes supplémentaires',
  8: 'Chapitre 8 : Tiré du livre « Osool El-Tahy »',
  9: 'Chapitre 9 : Tiré du livre « Egyptian Cooking »',
  10: 'Chapitre 10 : Recettes de la chaîne Fatma Abu Haty'
};

const CHAPTER_NAMES_ES: Record<number, string> = {
  1: 'Capítulo 1: Carnes, Aves y Mariscos',
  2: 'Capítulo 2: Sopas, Ensaladas, Verduras y Legumbres',
  3: 'Capítulo 3: Féculas, Platos Rellenos y Pasteles Salados',
  4: 'Capítulo 4: Pastelería, Postres Ligeros y Bebidas',
  5: 'Capítulo 5: Postres Orientales',
  6: 'Capítulo 6: Postres Occidentales',
  7: 'Capítulo 7: Recetas adicionales',
  8: 'Capítulo 8: Del libro de cocina “Osool El-Tahy”',
  9: 'Capítulo 9: Del libro de cocina “Egyptian Cooking”',
  10: 'Capítulo 10: Recetas del canal de Fatma Abu Haty'
};

const CHAPTER_NAMES_JA: Record<number, string> = {
  1: '第1章：肉・鶏肉・魚介類',
  2: '第2章：スープ・サラダ・野菜・豆類',
  3: '第3章：主食・詰め物料理・生地料理',
  4: '第4章：焼き菓子・軽いデザート・飲み物',
  5: '第5章：東洋のデザート',
  6: '第6章：西洋のデザート',
  7: '第7章：追加レシピ',
  8: '第8章：料理本「オスール・エル＝タヒー」より',
  9: '第9章：料理本「Egyptian Cooking」より',
  10: '第10章：ファトマ・アブ・ハーティーのチャンネルレシピ'
};

const CHAPTER_NAMES_HI: Record<number, string> = {
  1: 'अध्याय 1: मांस, मुर्ग़ और समुद्री भोजन',
  2: 'अध्याय 2: सूप, सलाद, सब्ज़ियां और दालें',
  3: 'अध्याय 3: स्टार्च, भरवां व्यंजन और पेस्ट्री',
  4: 'अध्याय 4: पेस्ट्री, हल्की मिठाइयां और पेय',
  5: 'अध्याय 5: पूर्वी मिठाइयां',
  6: 'अध्याय 6: पश्चिमी मिठाइयां',
  7: 'अध्याय 7: अतिरिक्त व्यंजन',
  8: 'अध्याय 8: पाक-पुस्तक “उसूल ए-तही” से',
  9: 'अध्याय 9: पाक-पुस्तक “Egyptian Cooking” से',
  10: 'अध्याय 10: फातिमा अबू हाती चैनल की रेसिपियां'
};

const CHAPTER_NAMES_PT: Record<number, string> = {
  1: 'Capítulo 1: Carnes, Aves e Frutos do Mar',
  2: 'Capítulo 2: Sopas, Saladas, Legumes e Leguminosas',
  3: 'Capítulo 3: Amidos, Pratos Recheados e Massas Folhadas',
  4: 'Capítulo 4: Massas, Doces Leves e Bebidas',
  5: 'Capítulo 5: Sobremesas Orientais',
  6: 'Capítulo 6: Sobremesas Ocidentais',
  7: 'Capítulo 7: Receitas adicionais',
  8: 'Capítulo 8: Do livro de receitas “Osool El-Tahy”',
  9: 'Capítulo 9: Do livro de receitas “Egyptian Cooking”',
  10: 'Capítulo 10: Receitas do canal Fatma Abu Haty'
};

const CHAPTER_NAMES_RU: Record<number, string> = {
  1: 'Глава 1: Мясо, Птица и Морепродукты',
  2: 'Глава 2: Супы, Салаты, Овощи и Бобовые',
  3: 'Глава 3: Крахмалистые блюда, Фаршированные блюда и Выпечка',
  4: 'Глава 4: Выпечка, Лёгкие десерты и Напитки',
  5: 'Глава 5: Восточные десерты',
  6: 'Глава 6: Западные десерты',
  7: 'Глава 7: Дополнительные рецепты',
  8: 'Глава 8: Из поваренной книги «Усуль ат-Тахи»',
  9: 'Глава 9: Из поваренной книги «Egyptian Cooking»',
  10: 'Глава 10: Рецепты канала Фатмы Абу Хати'
};

const CHAPTER_NAMES_ZH: Record<number, string> = {
  1: '第一章：肉类、禽类与海鲜',
  2: '第二章：汤品、沙拉、蔬菜与豆类',
  3: '第三章：主食、酿馅菜肴与面点',
  4: '第四章：糕点、清爽甜点与饮品',
  5: '第五章：东方甜点',
  6: '第六章：西式甜点',
  7: '第七章：补充食谱',
  8: '第8章：摘自烹饪书《Osool El-Tahy》',
  9: '第9章：摘自烹饪书《Egyptian Cooking》',
  10: '第10章：法蒂玛·阿布·哈蒂频道食谱'
};

const CHAPTER_NAMES_DE: Record<number, string> = {
  1: 'Kapitel 1: Fleisch, Geflügel und Meeresfrüchte',
  2: 'Kapitel 2: Suppen, Salate, Gemüse und Hülsenfrüchte',
  3: 'Kapitel 3: Sättigungsbeilagen, gefüllte Gerichte und Gebäck',
  4: 'Kapitel 4: Gebäck, leichte Nachspeisen und Getränke',
  5: 'Kapitel 5: Orientalische Süßspeisen',
  6: 'Kapitel 6: Westliche Süßspeisen',
  7: 'Kapitel 7: Zusätzliche Rezepte',
  8: 'Kapitel 8: Aus dem Kochbuch „Osool El-Tahy“',
  9: 'Kapitel 9: Aus dem Kochbuch „Egyptian Cooking“',
  10: 'Kapitel 10: Rezepte vom Kanal Fatma Abu Haty'
};

const CHAPTER_NAMES_IT: Record<number, string> = {
  1: 'Capitolo 1: Carni, Pollame e Frutti di Mare',
  2: 'Capitolo 2: Zuppe, Insalate, Verdure e Legumi',
  3: 'Capitolo 3: Amidi, Piatti Ripieni e Pasticceria Salata',
  4: 'Capitolo 4: Pasticceria, Dolci Leggeri e Bevande',
  5: 'Capitolo 5: Dolci Orientali',
  6: 'Capitolo 6: Dolci Occidentali',
  7: 'Capitolo 7: Ricette aggiuntive',
  8: 'Capitolo 8: Dal ricettario “Osool El-Tahy”',
  9: 'Capitolo 9: Dal ricettario “Egyptian Cooking”',
  10: 'Capitolo 10: Ricette del canale Fatma Abu Haty'
};

const CHAPTER_NAMES_EL: Record<number, string> = {
  1: 'Κεφάλαιο 1: Κρέατα, Πουλερικά και Θαλασσινά',
  2: 'Κεφάλαιο 2: Σούπες, Σαλάτες, Λαχανικά και Όσπρια',
  3: 'Κεφάλαιο 3: Αμυλούχα, Γεμιστά Πιάτα και Αλμυρή Ζαχαροπλαστική',
  4: 'Κεφάλαιο 4: Ζαχαροπλαστική, Ελαφριά Επιδόρπια και Ροφήματα',
  5: 'Κεφάλαιο 5: Ανατολίτικα Γλυκά',
  6: 'Κεφάλαιο 6: Δυτικά Γλυκά',
  7: 'Κεφάλαιο 7: Επιπλέον συνταγές',
  8: 'Κεφάλαιο 8: Από το βιβλίο μαγειρικής «Osool El-Tahy»',
  9: 'Κεφάλαιο 9: Από το βιβλίο μαγειρικής «Egyptian Cooking»',
  10: 'Κεφάλαιο 10: Συνταγές του καναλιού Fatma Abu Haty'
};

const CHAPTER_NAMES_UR: Record<number, string> = {
  1: 'باب 1: گوشت، مرغی اور سمندری غذا',
  2: 'باب 2: سوپ، سلاد، سبزیاں اور دالیں',
  3: 'باب 3: نشاستہ دار کھانے، بھرے ہوئے پکوان اور پیسٹری',
  4: 'باب 4: پیسٹری، ہلکی میٹھی اشیاء اور مشروبات',
  5: 'باب 5: مشرقی مٹھائیاں',
  6: 'باب 6: مغربی مٹھائیاں',
  7: 'باب 7: اضافی ترکیبیں',
  8: 'باب 8: پکوان کی کتاب «اصول الطہی» سے',
  9: 'باب 9: پکوان کی کتاب «Egyptian Cooking» سے',
  10: 'باب 10: فاطمہ ابو ہاتی چینل کی ترکیبیں'
};

const CHAPTER_NAMES_FA: Record<number, string> = {
  1: 'فصل 1: گوشت، مرغ و غذاهای دریایی',
  2: 'فصل 2: سوپ، سالاد، سبزیجات و حبوبات',
  3: 'فصل 3: غذاهای نشاسته‌ای، دلمه‌ها و شیرینی‌های شور',
  4: 'فصل 4: شیرینی‌ها، دسرهای سبک و نوشیدنی‌ها',
  5: 'فصل 5: شیرینی‌های شرقی',
  6: 'فصل 6: شیرینی‌های غربی',
  7: 'فصل ۷: دستورهای افزوده',
  8: 'فصل 8: از کتاب آشپزی «اصول الطهی»',
  9: 'فصل 9: از کتاب آشپزی «Egyptian Cooking»',
  10: 'فصل 10: دستورهای کانال فاطمه ابوهاتی'
};

const CHAPTER_NAMES_TR: Record<number, string> = {
  1: 'Bölüm 1: Et, Tavuk ve Deniz Ürünleri',
  2: 'Bölüm 2: Çorbalar, Salatalar, Sebzeler ve Baklagiller',
  3: 'Bölüm 3: Nişastalı Yemekler, Dolmalar ve Hamur İşleri',
  4: 'Bölüm 4: Hamur İşleri, Hafif Tatlılar ve İçecekler',
  5: 'Bölüm 5: Doğu Tatlıları',
  6: 'Bölüm 6: Batı Tatlıları',
  7: 'Bölüm 7: Ek Tarifler',
  8: 'Bölüm 8: “Osool El-Tahy” yemek kitabından',
  9: 'Bölüm 9: “Egyptian Cooking” yemek kitabından',
  10: 'Bölüm 10: Fatma Abu Haty kanalından tarifler'
};

const CHAPTER_NAMES_KU: Record<number, string> = {
  1: 'Beş 1: Goşt, Mirîşk û Berhemên Deryayê',
  2: 'Beş 2: Şorbe, Selete, Sebze û Lebûbiyat',
  3: 'Beş 3: Xwarinên Nîşasteyî, Dolme û Hevîrkirî',
  4: 'Beş 4: Hevîrkirî, Şîraniyên Sivik û Vexwarin',
  5: 'Beş 5: Şîraniyên Rojhilatî',
  6: 'Beş 6: Şîraniyên Rojavayî',
  7: 'Beşa 7: Reçeteyên Zêde',
  8: 'Beş 8: Ji pirtûka xwarinê “Osool El-Tahy”',
  9: 'Beş 9: Ji pirtûka xwarinê “Egyptian Cooking”',
  10: 'Beş 10: Reçeteyên kanala Fatma Abu Haty'
};

const CHAPTER_NAMES_ID: Record<number, string> = {
  1: 'Bab 1: Daging, Unggas, dan Hidangan Laut',
  2: 'Bab 2: Sup, Salad, Sayuran, dan Kacang-kacangan',
  3: 'Bab 3: Hidangan Berpati, Isian, dan Aneka Pastri',
  4: 'Bab 4: Aneka Pastri, Makanan Manis Ringan, dan Minuman',
  5: 'Bab 5: Hidangan Manis Timur',
  6: 'Bab 6: Hidangan Manis Barat',
  7: 'Bab 7: Resep Tambahan',
  8: 'Bab 8: Dari buku masak “Osool El-Tahy”',
  9: 'Bab 9: Dari buku masak “Egyptian Cooking”',
  10: 'Bab 10: Resep dari kanal Fatma Abu Haty'
};

const CHAPTER_NAMES_SW: Record<number, string> = {
  1: 'Sura ya 1: Nyama, Kuku na Vyakula vya Baharini',
  2: 'Sura ya 2: Supu, Saladi, Mboga na Jamii ya Kunde',
  3: 'Sura ya 3: Vyakula vya Wanga, Vilivyojazwa na Vyakula vya Unga',
  4: 'Sura ya 4: Vyakula vya Unga, Vitamu Vyepesi na Vinywaji',
  5: 'Sura ya 5: Vitamu vya Mashariki',
  6: 'Sura ya 6: Vitamu vya Magharibi',
  7: 'Sura ya 7: Mapishi ya Ziada',
  8: 'Sura ya 8: Kutoka kitabu cha mapishi “Osool El-Tahy”',
  9: 'Sura ya 9: Kutoka kitabu cha mapishi “Egyptian Cooking”',
  10: 'Sura ya 10: Mapishi ya kituo cha Fatma Abu Haty'
};

const CHAPTER_NAMES_KO: Record<number, string> = {
  1: '제1장: 육류, 가금류 및 해산물',
  2: '제2장: 수프, 샐러드, 채소 및 콩류',
  3: '제3장: 전분 요리, 속을 채운 요리 및 페이스트리',
  4: '제4장: 페이스트리, 가벼운 디저트 및 음료',
  5: '제5장: 동양 디저트',
  6: '제6장: 서양 디저트',
  7: '제7장: 추가 레시피',
  8: '제8장: 요리책 “Osool El-Tahy”에서',
  9: '제9장: 요리책 “Egyptian Cooking”에서',
  10: '제10장: 파트마 아부 하티 채널 레시피'
};

const CHAPTER_NAMES_NL: Record<number, string> = {
  1: 'Hoofdstuk 1: Vlees, Gevogelte & Zeevruchten',
  2: 'Hoofdstuk 2: Soepen, Salades, Groenten & Peulvruchten',
  3: 'Hoofdstuk 3: Zetmeelgerechten, Gevulde Gerechten & Deegwaren',
  4: 'Hoofdstuk 4: Deegwaren, Lichte Desserts & Dranken',
  5: 'Hoofdstuk 5: Oosterse Desserts',
  6: 'Hoofdstuk 6: Westerse Desserts',
  7: 'Hoofdstuk 7: Aanvullende Recepten',
  8: 'Hoofdstuk 8: Uit het kookboek “Osool El-Tahy”',
  9: 'Hoofdstuk 9: Uit het kookboek “Egyptian Cooking”',
  10: 'Hoofdstuk 10: Recepten van het Fatma Abu Haty-kanaal'
};

const CHAPTER_NAMES_PS: Record<number, string> = {
  1: 'لومړی باب: غوښه، مرغ او سمندري خوړه',
  2: 'دوهم باب: سوپونه، سلاتونه، سبزیجات او لوبیا',
  3: 'دریم باب: نشاسته لرونکي خوړه، ډک شوي خواړه او خمیري خواړه',
  4: 'څلورم باب: خمیري خواړه، سپکې خوږې خواړه او څښاکونه',
  5: 'پنځم باب: ختیځې خوږې خواړه',
  6: 'شپږم باب: لویدیځې خوږې خواړه',
  7: 'اووم باب: اضافي ترکیبونه',
  8: 'اتم باب: د پخلی کتاب «اصول الطهي» څخه',
  9: 'نهم باب: د «Egyptian Cooking» له پخلی کتاب څخه',
  10: 'لسم باب: د فاطمه ابو هاتي د چینل ترکیبونه'
};

const CHAPTER_NAMES_HE: Record<number, string> = {
  1: 'פרק 1: בשר, עוף ופירות ים',
  2: 'פרק 2: מרקים, סלטים, ירקות וקטניות',
  3: 'פרק 3: מנות עמילן, מנות ממולאות ומאפים',
  4: 'פרק 4: מאפים, קינוחים קלים ושתייה',
  5: 'פרק 5: קינוחים מזרחיים',
  6: 'פרק 6: קינוחים מערביים',
  7: 'פרק 7: מתכונים נוספים',
  8: 'פרק 8: מתוך ספר הבישול “Osool El-Tahy”',
  9: 'פרק 9: מתוך ספר הבישול “Egyptian Cooking”',
  10: 'פרק 10: מתכונים מערוץ פאטמה אבו האטי'
};

const CHAPTER_NAMES_PL: Record<number, string> = {
  1: 'Rozdział 1: Mięso, drób i owoce morza',
  2: 'Rozdział 2: Zupy, sałatki, warzywa i strączki',
  3: 'Rozdział 3: Dania skrobiowe, farszywane i wypieki',
  4: 'Rozdział 4: Wypieki, lekkie desery i napoje',
  5: 'Rozdział 5: Desery wschodnie',
  6: 'Rozdział 6: Desery zachodnie',
  7: 'Rozdział 7: Dodatkowe przepisy',
  8: 'Rozdział 8: Z książki kucharskiej „Osool El-Tahy”',
  9: 'Rozdział 9: Z książki kucharskiej „Egyptian Cooking”',
  10: 'Rozdział 10: Przepisy z kanału Fatma Abu Haty'
};

const CHAPTER_NAMES_SV: Record<number, string> = {
  1: 'Kapitel 1: Kött, fågel och skaldjur',
  2: 'Kapitel 2: Soppor, sallader, grönsaker och baljväxter',
  3: 'Kapitel 3: Stärkelserätter, fyllda rätter och bakverk',
  4: 'Kapitel 4: Bakverk, lätta desserter och drycker',
  5: 'Kapitel 5: Orientaliska desserter',
  6: 'Kapitel 6: Västerländska desserter',
  7: 'Kapitel 7: Ytterligare recept',
  8: 'Kapitel 8: Ur kokboken ”Osool El-Tahy”',
  9: 'Kapitel 9: Ur kokboken ”Egyptian Cooking”',
  10: 'Kapitel 10: Recept från Fatma Abu Hatys kanal'
};

const CHAPTER_NAMES_TE: Record<number, string> = {
  1: 'అధ్యాయం 1: మాంసం, కోళ్లు & సీఫుడ్',
  2: 'అధ్యాయం 2: సూప్స్, సలాడ్‌లు, కూరగాయలు & పప్పుధాన్యాలు',
  3: 'అధ్యాయం 3: స్టార్చ్ వంటకాలు, స్టఫ్డ్ వంటకాలు & పేస్ట్రీలు',
  4: 'అధ్యాయం 4: పేస్ట్రీలు, తేలికపాటి మిఠాయిలు & పానీయాలు',
  5: 'అధ్యాయం 5: తూర్పు మిఠాయిలు',
  6: 'అధ్యాయం 6: పాశ్చాత్య మిఠాయిలు',
  7: 'అధ్యాయం 7: అదనపు వంటకాలు',
  8: 'అధ్యాయం 8: “ఉసూల్ ఎల్-తహీ” వంట పుస్తకం నుండి',
  9: 'అధ్యాయం 9: “ఈజిప్షియన్ కుకింగ్” పుస్తకం నుండి',
  10: 'అధ్యాయం 10: ఫాత్మా అబూ హాతీ ఛానెల్ వంటకాలు'
};

const CATEGORY_NAMES: Record<string, string> = {
  'مشروبات وآيس كريم': 'Beverages & Ice Cream',
  'لحوم ودواجن': 'Meats & Poultry',
  'أسماك ومأكولات بحرية': 'Fish & Seafood',
  'بحريات': 'Fish & Seafood',
  'لحوم وطيور': 'Meats & Poultry',
  'نشويات': 'Starches',
  'معجنات': 'Pastries',
  'خضروات': 'Vegetables',
  'بقوليات': 'Legumes',
  'شوربات وحساء': 'Soups',
  'سلطات': 'Salads',
  'حلويات شرقية': 'Eastern Desserts',
  'حلويات غربية': 'Western Desserts',
  'نشويات ومحاشي ومعجنات': 'Starches, Stuffed Dishes & Pastries',
  'شوربة وسلطات': 'Soups & Salads',
  'خضروات وبقوليات': 'Vegetables & Legumes',
  'محشوات': 'Stuffed Dishes',
  'أكلات شهية': 'Savory Favorites',
  'وجبات سريعة': 'Quick Meals',
  'فطائر حلوة': 'Sweet Pastries',
  'حلويات خفيفة': 'Light Desserts',
  'خشاف': 'Fruit Compote',
  'آيس كريم': 'Ice Cream',
  'مشروبات': 'Beverages'
};

const CATEGORY_NAMES_FR: Record<string, string> = {
  'مشروبات وآيس كريم': 'Boissons et Glaces',
  'لحوم ودواجن': 'Viandes et Volailles',
  'أسماك ومأكولات بحرية': 'Poissons et Fruits de Mer',
  'بحريات': 'Poissons et Fruits de Mer',
  'لحوم وطيور': 'Viandes et Volailles',
  'نشويات': 'Féculents',
  'معجنات': 'Pâtisseries',
  'خضروات': 'Légumes',
  'بقوليات': 'Légumineuses',
  'شوربات وحساء': 'Soupes',
  'سلطات': 'Salades',
  'حلويات شرقية': 'Desserts Orientaux',
  'حلويات غربية': 'Desserts Occidentaux',
  'نشويات ومحاشي ومعجنات': 'Féculents, Plats Farcis et Pâtisseries',
  'شوربة وسلطات': 'Soupes et Salades',
  'خضروات وبقوليات': 'Légumes et Légumineuses',
  'محشوات': 'Plats Farcis',
  'أكلات شهية': 'Plats Savoureux',
  'وجبات سريعة': 'Repas Rapides',
  'فطائر حلوة': 'Pâtisseries Sucrées',
  'حلويات خفيفة': 'Desserts Légers',
  'خشاف': 'Compote de Fruits',
  'آيس كريم': 'Glace',
  'مشروبات': 'Boissons'
};

const CATEGORY_NAMES_ES: Record<string, string> = {
  'مشروبات وآيس كريم': 'Bebidas y Helados',
  'لحوم ودواجن': 'Carnes y Aves',
  'أسماك ومأكولات بحرية': 'Pescados y Mariscos',
  'بحريات': 'Pescados y Mariscos',
  'لحوم وطيور': 'Carnes y Aves',
  'نشويات': 'Féculas',
  'معجنات': 'Pastelería',
  'خضروات': 'Verduras',
  'بقوليات': 'Legumbres',
  'شوربات وحساء': 'Sopas',
  'سلطات': 'Ensaladas',
  'حلويات شرقية': 'Postres Orientales',
  'حلويات غربية': 'Postres Occidentales',
  'نشويات ومحاشي ومعجنات': 'Féculas, Platos Rellenos y Pastelería',
  'شوربة وسلطات': 'Sopas y Ensaladas',
  'خضروات وبقوليات': 'Verduras y Legumbres',
  'محشوات': 'Platos Rellenos',
  'أكلات شهية': 'Platos Sabrosos',
  'وجبات سريعة': 'Comidas Rápidas',
  'فطائر حلوة': 'Pasteles Dulces',
  'حلويات خفيفة': 'Postres Ligeros',
  'خشاف': 'Compota de Frutas',
  'آيس كريم': 'Helado',
  'مشروبات': 'Bebidas'
};

const CATEGORY_NAMES_JA: Record<string, string> = {
  'مشروبات وآيس كريم': '飲み物とアイスクリーム',
  'لحوم ودواجن': '肉と鶏肉',
  'أسماك ومأكولات بحرية': '魚介類',
  'بحريات': '魚介類',
  'لحوم وطيور': '肉と鶏肉',
  'نشويات': '主食',
  'معجنات': '生地料理',
  'خضروات': '野菜',
  'بقوليات': '豆類',
  'شوربات وحساء': 'スープ',
  'سلطات': 'サラダ',
  'حلويات شرقية': '東洋のデザート',
  'حلويات غربية': '西洋のデザート',
  'نشويات ومحاشي ومعجنات': '主食・詰め物料理・生地料理',
  'شوربة وسلطات': 'スープとサラダ',
  'خضروات وبقوليات': '野菜と豆類',
  'محشوات': '詰め物料理',
  'أكلات شهية': '美味しい料理',
  'وجبات سريعة': '簡単な食事',
  'فطائر حلوة': '甘いパイ',
  'حلويات خفيفة': '軽いデザート',
  'خشاف': 'フルーツコンポート',
  'آيس كريم': 'アイスクリーム',
  'مشروبات': '飲み物'
};

const CATEGORY_NAMES_HI: Record<string, string> = {
  'مشروبات وآيس كريم': 'पेय और आइसक्रीम',
  'لحوم ودواجن': 'मांस और मुर्ग़',
  'أسماك ومأكولات بحرية': 'मछली और समुद्री भोजन',
  'بحريات': 'मछली और समुद्री भोजन',
  'لحوم وطيور': 'मांस और मुर्ग़',
  'نشويات': 'स्टार्च',
  'معجنات': 'पेस्ट्री',
  'خضروات': 'सब्ज़ियां',
  'بقوليات': 'दालें',
  'شوربات وحساء': 'सूप',
  'سلطات': 'सलाद',
  'حلويات شرقية': 'पूर्वी मिठाइयां',
  'حلويات غربية': 'पश्चिमी मिठाइयां',
  'نشويات ومحاشي ومعجنات': 'स्टार्च, भरवां व्यंजन और पेस्ट्री',
  'شوربة وسلطات': 'सूप और सलाद',
  'خضروات وبقوليات': 'सब्ज़ियां और दालें',
  'محشوات': 'भरवां व्यंजन',
  'أكلات شهية': 'स्वादिष्ट व्यंजन',
  'وجبات سريعة': 'फटाफट भोजन',
  'فطائر حلوة': 'मीठी पेस्ट्री',
  'حلويات خفيفة': 'हल्की मिठाइयां',
  'خشاف': 'फलों का मुरब्बा',
  'آيس كريم': 'आइसक्रीम',
  'مشروبات': 'पेय'
};

const CATEGORY_NAMES_PT: Record<string, string> = {
  'مشروبات وآيس كريم': 'Bebidas e Sorvetes',
  'لحوم ودواجن': 'Carnes e Aves',
  'أسماك ومأكولات بحرية': 'Peixes e Frutos do Mar',
  'بحريات': 'Peixes e Frutos do Mar',
  'لحوم وطيور': 'Carnes e Aves',
  'نشويات': 'Amidos',
  'معجنات': 'Massas Folhadas',
  'خضروات': 'Legumes',
  'بقوليات': 'Leguminosas',
  'شوربات وحساء': 'Sopas',
  'سلطات': 'Saladas',
  'حلويات شرقية': 'Sobremesas Orientais',
  'حلويات غربية': 'Sobremesas Ocidentais',
  'نشويات ومحاشي ومعجنات': 'Amidos, Pratos Recheados e Massas Folhadas',
  'شوربة وسلطات': 'Sopas e Saladas',
  'خضروات وبقوليات': 'Legumes e Leguminosas',
  'محشوات': 'Pratos Recheados',
  'أكلات شهية': 'Pratos Saborosos',
  'وجبات سريعة': 'Refeições Rápidas',
  'فطائر حلوة': 'Massas Doces',
  'حلويات خفيفة': 'Sobremesas Leves',
  'خشاف': 'Compota de Frutas',
  'آيس كريم': 'Sorvete',
  'مشروبات': 'Bebidas'
};

const CATEGORY_NAMES_RU: Record<string, string> = {
  'مشروبات وآيس كريم': 'Напитки и Мороженое',
  'لحوم ودواجن': 'Мясо и Птица',
  'أسماك ومأكولات بحرية': 'Рыба и Морепродукты',
  'بحريات': 'Рыба и Морепродукты',
  'لحوم وطيور': 'Мясо и Птица',
  'نشويات': 'Крахмалистые блюда',
  'معجنات': 'Выпечка',
  'خضروات': 'Овощи',
  'بقوليات': 'Бобовые',
  'شوربات وحساء': 'Супы',
  'سلطات': 'Салаты',
  'حلويات شرقية': 'Восточные десерты',
  'حلويات غربية': 'Западные десерты',
  'نشويات ومحاشي ومعجنات': 'Крахмалистые блюда, Фаршированные блюда и Выпечка',
  'شوربة وسلطات': 'Супы и Салаты',
  'خضروات وبقوليات': 'Овощи и Бобовые',
  'محشوات': 'Фаршированные блюда',
  'أكلات شهية': 'Пикантные блюда',
  'وجبات سريعة': 'Быстрые блюда',
  'فطائر حلوة': 'Сладкая выпечка',
  'حلويات خفيفة': 'Лёгкие десерты',
  'خشاف': 'Фруктовый компот',
  'آيس كريم': 'Мороженое',
  'مشروبات': 'Напитки'
};

const CATEGORY_NAMES_ZH: Record<string, string> = {
  'مشروبات وآيس كريم': '饮品与冰淇淋',
  'لحوم ودواجن': '肉类与禽类',
  'أسماك ومأكولات بحرية': '鱼类与海鲜',
  'بحريات': '鱼类与海鲜',
  'لحوم وطيور': '肉类与禽类',
  'نشويات': '主食',
  'معجنات': '面点',
  'خضروات': '蔬菜',
  'بقوليات': '豆类',
  'شوربات وحساء': '汤品',
  'سلطات': '沙拉',
  'حلويات شرقية': '东方甜点',
  'حلويات غربية': '西式甜点',
  'نشويات ومحاشي ومعجنات': '主食、酿馅菜肴与面点',
  'شوربة وسلطات': '汤品与沙拉',
  'خضروات وبقوليات': '蔬菜与豆类',
  'محشوات': '酿馅菜肴',
  'أكلات شهية': '美味佳肴',
  'وجبات سريعة': '快手菜',
  'فطائر حلوة': '甜味酥点',
  'حلويات خفيفة': '清爽甜点',
  'خشاف': '水果蜜饯',
  'آيس كريم': '冰淇淋',
  'مشروبات': '饮品'
};

const CATEGORY_NAMES_DE: Record<string, string> = {
  'مشروبات وآيس كريم': 'Getränke & Eiscreme',
  'لحوم ودواجن': 'Fleisch & Geflügel',
  'أسماك ومأكولات بحرية': 'Fisch & Meeresfrüchte',
  'بحريات': 'Fisch & Meeresfrüchte',
  'لحوم وطيور': 'Fleisch & Geflügel',
  'نشويات': 'Sättigungsbeilagen',
  'معجنات': 'Gebäck',
  'خضروات': 'Gemüse',
  'بقوليات': 'Hülsenfrüchte',
  'شوربات وحساء': 'Suppen',
  'سلطات': 'Salate',
  'حلويات شرقية': 'Orientalische Süßspeisen',
  'حلويات غربية': 'Westliche Süßspeisen',
  'نشويات ومحاشي ومعجنات': 'Sättigungsbeilagen, gefüllte Gerichte und Gebäck',
  'شوربة وسلطات': 'Suppen & Salate',
  'خضروات وبقوليات': 'Gemüse & Hülsenfrüchte',
  'محشوات': 'Gefüllte Gerichte',
  'أكلات شهية': 'Herzhafte Favoriten',
  'وجبات سريعة': 'Schnelle Gerichte',
  'فطائر حلوة': 'Süßes Gebäck',
  'حلويات خفيفة': 'Leichte Nachspeisen',
  'خشاف': 'Fruchtkompott',
  'آيس كريم': 'Eiscreme',
  'مشروبات': 'Getränke'
};

const CATEGORY_NAMES_IT: Record<string, string> = {
  'مشروبات وآيس كريم': 'Bevande e Gelati',
  'لحوم ودواجن': 'Carni e Pollame',
  'أسماك ومأكولات بحرية': 'Pesce e Frutti di Mare',
  'بحريات': 'Pesce e Frutti di Mare',
  'لحوم وطيور': 'Carni e Pollame',
  'نشويات': 'Amidi',
  'معجنات': 'Pasticceria',
  'خضروات': 'Verdure',
  'بقوليات': 'Legumi',
  'شوربات وحساء': 'Zuppe',
  'سلطات': 'Insalate',
  'حلويات شرقية': 'Dolci Orientali',
  'حلويات غربية': 'Dolci Occidentali',
  'نشويات ومحاشي ومعجنات': 'Amidi, Piatti Ripieni e Pasticceria',
  'شوربة وسلطات': 'Zuppe e Insalate',
  'خضروات وبقوليات': 'Verdure e Legumi',
  'محشوات': 'Piatti Ripieni',
  'أكلات شهية': 'Piatti Sfiziosi',
  'وجبات سريعة': 'Pasti Veloci',
  'فطائر حلوة': 'Pasticcini Dolci',
  'حلويات خفيفة': 'Dolci Leggeri',
  'خشاف': 'Composta di Frutta',
  'آيس كريم': 'Gelato',
  'مشروبات': 'Bevande'
};

const CATEGORY_NAMES_EL: Record<string, string> = {
  'مشروبات وآيس كريم': 'Ροφήματα και Παγωτό',
  'لحوم ودواجن': 'Κρέατα και Πουλερικά',
  'أسماك ومأكولات بحرية': 'Ψάρια και Θαλασσινά',
  'بحريات': 'Ψάρια και Θαλασσινά',
  'لحوم وطيور': 'Κρέατα και Πουλερικά',
  'نشويات': 'Αμυλούχα',
  'معجنات': 'Ζαχαροπλαστική',
  'خضروات': 'Λαχανικά',
  'بقوليات': 'Όσπρια',
  'شوربات وحساء': 'Σούπες',
  'سلطات': 'Σαλάτες',
  'حلويات شرقية': 'Ανατολίτικα Γλυκά',
  'حلويات غربية': 'Δυτικά Γλυκά',
  'نشويات ومحاشي ومعجنات': 'Αμυλούχα, Γεμιστά Πιάτα και Ζαχαροπλαστική',
  'شوربة وسلطات': 'Σούπες και Σαλάτες',
  'خضروات وبقوليات': 'Λαχανικά και Όσπρια',
  'محشوات': 'Γεμιστά Πιάτα',
  'أكلات شهية': 'Νόστιμα Πιάτα',
  'وجبات سريعة': 'Γρήγορα Γεύματα',
  'فطائر حلوة': 'Γλυκές Πίτες',
  'حلويات خفيفة': 'Ελαφριά Επιδόρπια',
  'خشاف': 'Κομπόστα Φρούτων',
  'آيس كريم': 'Παγωτό',
  'مشروبات': 'Ροφήματα'
};

const CATEGORY_NAMES_UR: Record<string, string> = {
  'مشروبات وآيس كريم': 'مشروبات اور آئس کریم',
  'لحوم ودواجن': 'گوشت اور مرغی',
  'أسماك ومأكولات بحرية': 'مچھلی اور سمندری غذا',
  'بحريات': 'مچھلی اور سمندری غذا',
  'لحوم وطيور': 'گوشت اور مرغی',
  'نشويات': 'نشاستہ دار کھانے',
  'معجنات': 'پیسٹری',
  'خضروات': 'سبزیاں',
  'بقوليات': 'دالیں',
  'شوربات وحساء': 'سوپ',
  'سلطات': 'سلاد',
  'حلويات شرقية': 'مشرقی مٹھائیاں',
  'حلويات غربية': 'مغربی مٹھائیاں',
  'نشويات ومحاشي ومعجنات': 'نشاستہ دار کھانے، بھرے ہوئے پکوان اور پیسٹری',
  'شوربة وسلطات': 'سوپ اور سلاد',
  'خضروات وبقوليات': 'سبزیاں اور دالیں',
  'محشوات': 'بھرے ہوئے پکوان',
  'أكلات شهية': 'مزیدار پکوان',
  'وجبات سريعة': 'فوری کھانے',
  'فطائر حلوة': 'میٹھی پیسٹری',
  'حلويات خفيفة': 'ہلکی میٹھی اشیاء',
  'خشاف': 'خشک میوے کا شربت (خشاف)',
  'آيس كريم': 'آئس کریم',
  'مشروبات': 'مشروبات'
};

const CATEGORY_NAMES_FA: Record<string, string> = {
  'مشروبات وآيس كريم': 'نوشیدنی‌ها و بستنی',
  'لحوم ودواجن': 'گوشت و مرغ',
  'أسماك ومأكولات بحرية': 'ماهی و غذاهای دریایی',
  'بحريات': 'ماهی و غذاهای دریایی',
  'لحوم وطيور': 'گوشت و مرغ',
  'نشويات': 'غذاهای نشاسته‌ای',
  'معجنات': 'شیرینی‌های خمیری',
  'خضروات': 'سبزیجات',
  'بقوليات': 'حبوبات',
  'شوربات وحساء': 'سوپ‌ها',
  'سلطات': 'سالادها',
  'حلويات شرقية': 'شیرینی‌های شرقی',
  'حلويات غربية': 'شیرینی‌های غربی',
  'نشويات ومحاشي ومعجنات': 'غذاهای نشاسته‌ای، دلمه‌ها و شیرینی‌های خمیری',
  'شوربة وسلطات': 'سوپ و سالاد',
  'خضروات وبقوليات': 'سبزیجات و حبوبات',
  'محشوات': 'دلمه‌ها',
  'أكلات شهية': 'غذاهای خوشمزه',
  'وجبات سريعة': 'غذاهای سریع',
  'فطائر حلوة': 'شیرینی‌های خمیری شیرین',
  'حلويات خفيفة': 'دسرهای سبک',
  'خشاف': 'خوشاب میوه',
  'آيس كريم': 'بستنی',
  'مشروبات': 'نوشیدنی‌ها'
};

const CATEGORY_NAMES_TR: Record<string, string> = {
  'مشروبات وآيس كريم': 'İçecekler ve Dondurma',
  'لحوم ودواجن': 'Et ve Tavuk',
  'أسماك ومأكولات بحرية': 'Balık ve Deniz Ürünleri',
  'بحريات': 'Balık ve Deniz Ürünleri',
  'لحوم وطيور': 'Et ve Tavuk',
  'نشويات': 'Nişastalı Yemekler',
  'معجنات': 'Hamur İşleri',
  'خضروات': 'Sebzeler',
  'بقوليات': 'Baklagiller',
  'شوربات وحساء': 'Çorbalar',
  'سلطات': 'Salatalar',
  'حلويات شرقية': 'Doğu Tatlıları',
  'حلويات غربية': 'Batı Tatlıları',
  'نشويات ومحاشي ومعجنات': 'Nişastalı Yemekler, Dolmalar ve Hamur İşleri',
  'شوربة وسلطات': 'Çorbalar ve Salatalar',
  'خضروات وبقوليات': 'Sebzeler ve Baklagiller',
  'محشوات': 'Dolmalar',
  'أكلات شهية': 'Lezzetli Yemekler',
  'وجبات سريعة': 'Pratik Yemekler',
  'فطائر حلوة': 'Tatlı Hamur İşleri',
  'حلويات خفيفة': 'Hafif Tatlılar',
  'خشاف': 'Hoşaf',
  'آيس كريم': 'Dondurma',
  'مشروبات': 'İçecekler'
};

const CATEGORY_NAMES_KU: Record<string, string> = {
  'مشروبات وآيس كريم': 'Vexwarin û Qeşa',
  'لحوم ودواجن': 'Goşt û Mirîşk',
  'أسماك ومأكولات بحرية': 'Masî û Berhemên Deryayê',
  'بحريات': 'Masî û Berhemên Deryayê',
  'لحوم وطيور': 'Goşt û Mirîşk',
  'نشويات': 'Xwarinên Nîşasteyî',
  'معجنات': 'Hevîrkirî',
  'خضروات': 'Sebze',
  'بقوليات': 'Lebûbiyat',
  'شوربات وحساء': 'Şorbe',
  'سلطات': 'Selete',
  'حلويات شرقية': 'Şîraniyên Rojhilatî',
  'حلويات غربية': 'Şîraniyên Rojavayî',
  'نشويات ومحاشي ومعجنات': 'Xwarinên Nîşasteyî, Dolme û Hevîrkirî',
  'شوربة وسلطات': 'Şorbe û Selete',
  'خضروات وبقوليات': 'Sebze û Lebûbiyat',
  'محشوات': 'Dolme',
  'أكلات شهية': 'Xwarinên Bitam',
  'وجبات سريعة': 'Xwarinên Bilez',
  'فطائر حلوة': 'Hevîrkiriyên Şêrîn',
  'حلويات خفيفة': 'Şîraniyên Sivik',
  'خشاف': 'Xoşaf',
  'آيس كريم': 'Qeşa (Dondurma)',
  'مشروبات': 'Vexwarin'
};

const CATEGORY_NAMES_ID: Record<string, string> = {
  'مشروبات وآيس كريم': 'Minuman & Es Krim',
  'لحوم ودواجن': 'Daging & Unggas',
  'أسماك ومأكولات بحرية': 'Ikan & Hidangan Laut',
  'بحريات': 'Ikan & Hidangan Laut',
  'لحوم وطيور': 'Daging & Unggas',
  'نشويات': 'Hidangan Berpati',
  'معجنات': 'Aneka Pastri',
  'خضروات': 'Sayuran',
  'بقوليات': 'Kacang-kacangan',
  'شوربات وحساء': 'Sup',
  'سلطات': 'Salad',
  'حلويات شرقية': 'Hidangan Manis Timur',
  'حلويات غربية': 'Hidangan Manis Barat',
  'نشويات ومحاشي ومعجنات': 'Hidangan Berpati, Isian & Pastri',
  'شوربة وسلطات': 'Sup & Salad',
  'خضروات وبقوليات': 'Sayuran & Kacang-kacangan',
  'محشوات': 'Sayuran Isi',
  'أكلات شهية': 'Hidangan Gurih',
  'وجبات سريعة': 'Hidangan Cepat Saji',
  'فطائر حلوة': 'Pastri Manis',
  'حلويات خفيفة': 'Makanan Manis Ringan',
  'خشاف': 'Khoshaf',
  'آيس كريم': 'Es Krim',
  'مشروبات': 'Minuman'
};

const CATEGORY_NAMES_SW: Record<string, string> = {
  'مشروبات وآيس كريم': 'Vinywaji na Aiskrimu',
  'لحوم ودواجن': 'Nyama na Kuku',
  'أسماك ومأكولات بحرية': 'Samaki na Vyakula vya Baharini',
  'بحريات': 'Samaki na Vyakula vya Baharini',
  'لحوم وطيور': 'Nyama na Kuku',
  'نشويات': 'Vyakula vya Wanga',
  'معجنات': 'Vyakula vya Unga',
  'خضروات': 'Mboga',
  'بقوليات': 'Jamii ya Kunde',
  'شوربات وحساء': 'Supu',
  'سلطات': 'Saladi',
  'حلويات شرقية': 'Vitamu vya Mashariki',
  'حلويات غربية': 'Vitamu vya Magharibi',
  'نشويات ومحاشي ومعجنات': 'Vyakula vya Wanga, Vilivyojazwa na vya Unga',
  'شوربة وسلطات': 'Supu na Saladi',
  'خضروات وبقوليات': 'Mboga na Jamii ya Kunde',
  'محشوات': 'Mboga Zilizojazwa',
  'أكلات شهية': 'Vyakula Vitamu vya Chumvi',
  'وجبات سريعة': 'Vyakula vya Haraka',
  'فطائر حلوة': 'Vyakula vya Unga Vitamu',
  'حلويات خفيفة': 'Vitamu Vyepesi',
  'خشاف': 'Khoshaf',
  'آيس كريم': 'Aiskrimu',
  'مشروبات': 'Vinywaji'
};

const CATEGORY_NAMES_KO: Record<string, string> = {
  'مشروبات وآيس كريم': '음료 및 아이스크림',
  'لحوم ودواجن': '육류 및 가금류',
  'أسماك ومأكولات بحرية': '생선 및 해산물',
  'بحريات': '생선 및 해산물',
  'لحوم وطيور': '육류 및 가금류',
  'نشويات': '전분 요리',
  'معجنات': '페이스트리',
  'خضروات': '채소',
  'بقوليات': '콩류',
  'شوربات وحساء': '수프',
  'سلطات': '샐러드',
  'حلويات شرقية': '동양 디저트',
  'حلويات غربية': '서양 디저트',
  'نشويات ومحاشي ومعجنات': '전분 요리, 속을 채운 요리 및 페이스트리',
  'شوربة وسلطات': '수프 및 샐러드',
  'خضروات وبقوليات': '채소 및 콩류',
  'محشوات': '속을 채운 채소',
  'أكلات شهية': '짭짤한 요리',
  'وجبات سريعة': '간편식',
  'فطائر حلوة': '달콤한 페이스트리',
  'حلويات خفيفة': '가벼운 디저트',
  'خشاف': '호샤프',
  'آيس كريم': '아이스크림',
  'مشروبات': '음료'
};

const CATEGORY_NAMES_NL: Record<string, string> = {
  'مشروبات وآيس كريم': 'Dranken & IJs',
  'لحوم ودواجن': 'Vlees & Gevogelte',
  'أسماك ومأكولات بحرية': 'Vis & Zeevruchten',
  'بحريات': 'Vis & Zeevruchten',
  'لحوم وطيور': 'Vlees & Gevogelte',
  'نشويات': 'Zetmeelgerechten',
  'معجنات': 'Deegwaren',
  'خضروات': 'Groenten',
  'بقوليات': 'Peulvruchten',
  'شوربات وحساء': 'Soepen',
  'سلطات': 'Salades',
  'حلويات شرقية': 'Oosterse Desserts',
  'حلويات غربية': 'Westerse Desserts',
  'نشويات ومحاشي ومعجنات': 'Zetmeel, Gevulde Gerechten & Deegwaren',
  'شوربة وسلطات': 'Soepen & Salades',
  'خضروات وبقوليات': 'Groenten & Peulvruchten',
  'محشوات': 'Gevulde Gerechten',
  'أكلات شهية': 'Hartige Favorieten',
  'وجبات سريعة': 'Snelle Maaltijden',
  'فطائر حلوة': 'Zoete Deegwaren',
  'حلويات خفيفة': 'Lichte Desserts',
  'خشاف': 'Vruchtencompote',
  'آيس كريم': 'IJs',
  'مشروبات': 'Dranken'
};

const CATEGORY_NAMES_PS: Record<string, string> = {
  'مشروبات وآيس كريم': 'څښاکونه او بستني',
  'لحوم ودواجن': 'غوښه او مرغ',
  'أسماك ومأكولات بحرية': 'کبان او سمندري خوړه',
  'بحريات': 'کبان او سمندري خوړه',
  'لحوم وطيور': 'غوښه او مرغ',
  'نشويات': 'نشاسته لرونکي خوړه',
  'معجنات': 'خمیري خواړه',
  'خضروات': 'سبزیجات',
  'بقوليات': 'لوبیا',
  'شوربات وحساء': 'سوپونه',
  'سلطات': 'سلاتونه',
  'حلويات شرقية': 'ختیځې خوږې خواړه',
  'حلويات غربية': 'لویدیځې خوږې خواړه',
  'نشويات ومحاشي ومعجنات': 'نشاسته لرونکي خوړه، ډک شوي خواړه او خمیري خواړه',
  'شوربة وسلطات': 'سوپ او سلات',
  'خضروات وبقوليات': 'سبزیجات او لوبیا',
  'محشوات': 'ډک شوي خواړه',
  'أكلات شهية': 'خوندور خواړه',
  'وجبات سريعة': 'چټکي خواړه',
  'فطائر حلوة': 'خوږې خمیري خواړه',
  'حلويات خفيفة': 'سپکې خوږې خواړه',
  'خشاف': 'خوشاف',
  'آيس كريم': 'بستني',
  'مشروبات': 'څښاکونه'
};

const CATEGORY_NAMES_HE: Record<string, string> = {
  'مشروبات وآيس كريم': 'שתייה וגלידה',
  'لحوم ودواجن': 'בשר ועוף',
  'أسماك ومأكولات بحرية': 'דגים ופירות ים',
  'بحريات': 'דגים ופירות ים',
  'لحوم وطيور': 'בשר ועופות',
  'نشويات': 'מנות עמילן',
  'معجنات': 'מאפים',
  'خضروات': 'ירקות',
  'بقوليات': 'קטניות',
  'شوربات وحساء': 'מרקים',
  'سلطات': 'סלטים',
  'حلويات شرقية': 'קינוחים מזרחיים',
  'حلويات غربية': 'קינוחים מערביים',
  'نشويات ومحاشي ومعجنات': 'מנות עמילן, מנות ממולאות ומאפים',
  'شوربة وسلطات': 'מרק וסלטים',
  'خضروات وبقوليات': 'ירקות וקטניות',
  'محشوات': 'מנות ממולאות',
  'أكلات شهية': 'מנות טעימות',
  'وجبات سريعة': 'ארוחות מהירות',
  'فطائر حلوة': 'פשטידות מתוקות',
  'حلويات خفيفة': 'קינוחים קלים',
  'خشاف': 'חושאף',
  'آيس كريم': 'גלידה',
  'مشروبات': 'שתייה'
};

const CATEGORY_NAMES_PL: Record<string, string> = {
  'مشروبات وآيس كريم': 'Napoje i lody',
  'لحوم ودواجن': 'Mięso i drób',
  'أسماك ومأكولات بحرية': 'Ryby i owoce morza',
  'بحريات': 'Ryby i owoce morza',
  'لحوم وطيور': 'Mięso i drób',
  'نشويات': 'Dania skrobiowe',
  'معجنات': 'Wypieki',
  'خضروات': 'Warzywa',
  'بقوليات': 'Strączki',
  'شوربات وحساء': 'Zupy',
  'سلطات': 'Sałatki',
  'حلويات شرقية': 'Desery wschodnie',
  'حلويات غربية': 'Desery zachodnie',
  'نشويات ومحاشي ومعجنات': 'Dania skrobiowe, farszywane i wypieki',
  'شوربة وسلطات': 'Zupy i sałatki',
  'خضروات وبقوليات': 'Warzywa i strączki',
  'محشوات': 'Dania farszywane',
  'أكلات شهية': 'Pyszne dania',
  'وجبات سريعة': 'Szybkie posiłki',
  'فطائر حلوة': 'Słodkie ciasta',
  'حلويات خفيفة': 'Lekkie desery',
  'خشاف': 'Choszaf',
  'آيس كريم': 'Lody',
  'مشروبات': 'Napoje'
};

const CATEGORY_NAMES_SV: Record<string, string> = {
  'مشروبات وآيس كريم': 'Drycker och glass',
  'لحوم ودواجن': 'Kött och fågel',
  'أسماك ومأكولات بحرية': 'Fisk och skaldjur',
  'بحريات': 'Fisk och skaldjur',
  'لحوم وطيور': 'Kött och fågel',
  'نشويات': 'Stärkelserätter',
  'معجنات': 'Bakverk',
  'خضروات': 'Grönsaker',
  'بقوليات': 'Baljväxter',
  'شوربات وحساء': 'Soppor',
  'سلطات': 'Sallader',
  'حلويات شرقية': 'Orientaliska desserter',
  'حلويات غربية': 'Västerländska desserter',
  'نشويات ومحاشي ومعجنات': 'Stärkelserätter, fyllda rätter och bakverk',
  'شوربة وسلطات': 'Soppor och sallader',
  'خضروات وبقوليات': 'Grönsaker och baljväxter',
  'محشوات': 'Fyllda rätter',
  'أكلات شهية': 'Läckra rätter',
  'وجبات سريعة': 'Snabba måltider',
  'فطائر حلوة': 'Söta pajer',
  'حلويات خفيفة': 'Lätta desserter',
  'خشاف': 'Khoshaf',
  'آيس كريم': 'Glass',
  'مشروبات': 'Drycker'
};

const CATEGORY_NAMES_TE: Record<string, string> = {
  'مشروبات وآيس كريم': 'పానీయాలు & ఐస్ క్రీమ్',
  'لحوم ودواجن': 'మాంసం & కోళ్లు',
  'أسماك ومأكولات بحرية': 'చేపలు & సీఫుడ్',
  'بحريات': 'చేపలు & సీఫుడ్',
  'لحوم وطيور': 'మాంసం & కోళ్లు',
  'نشويات': 'స్టార్చ్ వంటకాలు',
  'معجنات': 'పేస్ట్రీలు',
  'خضروات': 'కూరగాయలు',
  'بقوليات': 'పప్పుధాన్యాలు',
  'شوربات وحساء': 'సూప్స్',
  'سلطات': 'సలాడ్‌లు',
  'حلويات شرقية': 'తూర్పు మిఠాయిలు',
  'حلويات غربية': 'పాశ్చాత్య మిఠాయిలు',
  'نشويات ومحاشي ومعجنات': 'స్టార్చ్, స్టఫ్డ్ వంటకాలు & పేస్ట్రీలు',
  'شوربة وسلطات': 'సూప్స్ & సలాడ్‌లు',
  'خضروات وبقوليات': 'కూరగాయలు & పప్పుధాన్యాలు',
  'محشوات': 'స్టఫ్డ్ వంటకాలు',
  'أكلات شهية': 'రుచికరమైన ప్రత్యేక వంటకాలు',
  'وجبات سريعة': 'త్వరిత భోజనాలు',
  'فطائر حلوة': 'తీపి పేస్ట్రీలు',
  'حلويات خفيفة': 'తేలికపాటి మిఠాయిలు',
  'خشاف': 'పండ్ల కొమ్పోట్ (ఖోషాఫ్)',
  'آيس كريم': 'ఐస్ క్రీమ్',
  'مشروبات': 'పానీయాలు'
};

const COOKING_METHODS: Record<string, string> = {
  'سلطات ومشروبات': 'Salads & Beverages',
  'سلق وتسبيك': 'Boiling & Slow Simmering',
  'تسبيك': 'Slow Simmering',
  'تحمير وقلي': 'Pan-Frying & Crisping',
  'شوي': 'Grilling',
  'شي': 'Grilling',
  'خبز وتسوية بالفرن': 'Baking & Oven Cooking',
  'سلق': 'Boiling',
  'تحمير': 'Pan-Frying',
  'فرن': 'Baking',
  'قلي': 'Frying',
  'خبز': 'Baking',
  'بخار': 'Steaming',
  'حفظ وتجميد': 'Preserving & Freezing'
};

const COOKING_METHODS_FR: Record<string, string> = {
  'سلطات ومشروبات': 'Salades et Boissons',
  'سلق وتسبيك': "Cuisson à l'Eau et Mijotage",
  'تسبيك': 'Mijotage Lent',
  'تحمير وقلي': 'Poêlée et Friture',
  'شوي': 'Grillade',
  'شي': 'Grillade',
  'خبز وتسوية بالفرن': 'Cuisson au Four',
  'سلق': "Cuisson à l'Eau",
  'تحمير': 'Cuisson à la Poêle',
  'فرن': 'Cuisson au Four',
  'قلي': 'Friture',
  'خبز': 'Cuisson au Four',
  'حفظ وتجميد': 'Conservation et Congélation'
};

const COOKING_METHODS_ES: Record<string, string> = {
  'سلطات ومشروبات': 'Ensaladas y Bebidas',
  'سلق وتسبيك': 'Hervido y Cocción Lenta',
  'تسبيك': 'Cocción Lenta',
  'تحمير وقلي': 'Sofrito y Fritura',
  'شوي': 'A la Parrilla',
  'شي': 'A la Parrilla',
  'خبز وتسوية بالفرن': 'Horneado',
  'سلق': 'Hervido',
  'تحمير': 'Sofrito',
  'فرن': 'Horneado',
  'قلي': 'Fritura',
  'خبز': 'Horneado',
  'حفظ وتجميد': 'Conservación y Congelación'
};

const COOKING_METHODS_JA: Record<string, string> = {
  'سلطات ومشروبات': 'サラダと飲み物',
  'سلق وتسبيك': '茹でとじっくり煮込み',
  'تسبيك': 'じっくり煮込み',
  'تحمير وقلي': '焼き炒めと揚げ物',
  'شوي': 'グリル',
  'شي': 'グリル',
  'خبز وتسوية بالفرن': 'オーブン焼き',
  'سلق': '茹で',
  'تحمير': '焼き炒め',
  'فرن': 'オーブン焼き',
  'قلي': '揚げ物',
  'خبز': 'オーブン焼き',
  'حفظ وتجميد': '保存と冷凍'
};

const COOKING_METHODS_HI: Record<string, string> = {
  'سلطات ومشروبات': 'सलाद और पेय',
  'سلق وتسبيك': 'उबालना और धीमी आंच पर पकाना',
  'تسبيك': 'धीमी आंच पर पकाना',
  'تحمير وقلي': 'भूनना और तलना',
  'شوي': 'ग्रिल करना',
  'شي': 'ग्रिल करना',
  'خبز وتسوية بالفرن': 'ओवन में पकाना',
  'سلق': 'उबालना',
  'تحمير': 'भूनना',
  'فرن': 'ओवन में पकाना',
  'قلي': 'तलना',
  'خبز': 'ओवन में पकाना',
  'حفظ وتجميد': 'संरक्षण और फ्रीज़ करना'
};

const COOKING_METHODS_PT: Record<string, string> = {
  'سلطات ومشروبات': 'Saladas e Bebidas',
  'سلق وتسبيك': 'Cozimento e Fervura Lenta',
  'تسبيك': 'Fervura Lenta',
  'تحمير وقلي': 'Refogado e Frito',
  'شوي': 'Grelhado',
  'شي': 'Grelhado',
  'خبز وتسوية بالفرن': 'Assado no Forno',
  'سلق': 'Cozido',
  'تحمير': 'Refogado',
  'فرن': 'Assado',
  'قلي': 'Frito',
  'خبز': 'Assado',
  'حفظ وتجميد': 'Conservação e Congelamento'
};

const COOKING_METHODS_RU: Record<string, string> = {
  'سلطات ومشروبات': 'Салаты и Напитки',
  'سلق وتسبيك': 'Варка и Медленное тушение',
  'تسبيك': 'Медленное тушение',
  'تحمير وقلي': 'Обжарка и Жарка во фритюре',
  'شوي': 'Гриль',
  'شي': 'Гриль',
  'خبز وتسوية بالفرن': 'Выпекание в духовке',
  'سلق': 'Варка',
  'تحمير': 'Обжарка',
  'فرن': 'Выпекание',
  'قلي': 'Жарка',
  'خبز': 'Выпекание',
  'حفظ وتجميد': 'Консервация и Заморозка'
};

const COOKING_METHODS_ZH: Record<string, string> = {
  'سلطات ومشروبات': '沙拉与饮品',
  'سلق وتسبيك': '水煮与慢炖',
  'تسبيك': '慢炖',
  'تحمير وقلي': '煎炒与油炸',
  'شوي': '烧烤',
  'شي': '烧烤',
  'خبز وتسوية بالفرن': '烤箱烘烤',
  'سلق': '水煮',
  'تحمير': '煎炒',
  'فرن': '烘烤',
  'قلي': '油炸',
  'خبز': '烘烤',
  'حفظ وتجميد': '保存与冷冻'
};

const COOKING_METHODS_DE: Record<string, string> = {
  'سلطات ومشروبات': 'Salate & Getränke',
  'سلق وتسبيك': 'Kochen & langsames Schmoren',
  'تسبيك': 'Langsames Schmoren',
  'تحمير وقلي': 'Anbraten & Frittieren',
  'شوي': 'Grillen',
  'شي': 'Grillen',
  'خبز وتسوية بالفرن': 'Backen im Ofen',
  'سلق': 'Kochen',
  'تحمير': 'Anbraten',
  'فرن': 'Backen',
  'قلي': 'Frittieren',
  'خبز': 'Backen',
  'حفظ وتجميد': 'Konservieren & Einfrieren'
};

const COOKING_METHODS_IT: Record<string, string> = {
  'سلطات ومشروبات': 'Insalate e Bevande',
  'سلق وتسبيك': 'Bollitura e Cottura Lenta',
  'تسبيك': 'Cottura Lenta',
  'تحمير وقلي': 'Rosolatura e Frittura',
  'شوي': 'Alla Griglia',
  'شي': 'Alla Griglia',
  'خبز وتسوية بالفرن': 'Cottura al Forno',
  'سلق': 'Bollitura',
  'تحمير': 'Rosolatura',
  'فرن': 'Al Forno',
  'قلي': 'Frittura',
  'خبز': 'Cottura al Forno',
  'حفظ وتجميد': 'Conservazione e Congelamento'
};

const COOKING_METHODS_EL: Record<string, string> = {
  'سلطات ومشروبات': 'Σαλάτες και Ροφήματα',
  'سلق وتسبيك': 'Βράσιμο και Σιγανό Μαγείρεμα',
  'تسبيك': 'Σιγανό Μαγείρεμα',
  'تحمير وقلي': 'Ρόδισμα και Τηγάνισμα',
  'شوي': 'Ψητό στη Σχάρα',
  'شي': 'Ψητό στη Σχάρα',
  'خبز وتسوية بالفرن': 'Ψήσιμο στο Φούρνο',
  'سلق': 'Βράσιμο',
  'تحمير': 'Ρόδισμα',
  'فرن': 'Στο Φούρνο',
  'قلي': 'Τηγάνισμα',
  'خبز': 'Ψήσιμο στο Φούρνο',
  'حفظ وتجميد': 'Συντήρηση και Κατάψυξη'
};

const COOKING_METHODS_UR: Record<string, string> = {
  'سلطات ومشروبات': 'سلاد اور مشروبات',
  'سلق وتسبيك': 'ابالنا اور دم پر پکانا',
  'تسبيك': 'دم پر پکانا',
  'تحمير وقلي': 'بھوننا اور تلنا',
  'شوي': 'گرل کرنا',
  'شي': 'گرل کرنا',
  'خبز وتسوية بالفرن': 'اوون میں بیک کرنا',
  'سلق': 'ابالنا',
  'تحمير': 'بھوننا',
  'فرن': 'اوون میں بیک کرنا',
  'قلي': 'تلنا',
  'خبز': 'بیک کرنا',
  'حفظ وتجميد': 'محفوظ کرنا اور فریز کرنا'
};

const COOKING_METHODS_FA: Record<string, string> = {
  'سلطات ومشروبات': 'سالاد و نوشیدنی',
  'سلق وتسبيك': 'آب‌پز و پخت آرام',
  'تسبيك': 'پخت آرام',
  'تحمير وقلي': 'تفت دادن و سرخ کردن',
  'شوي': 'کبابی',
  'شي': 'کبابی',
  'خبز وتسوية بالفرن': 'پخت در فر',
  'سلق': 'آب‌پز',
  'تحمير': 'تفت دادن',
  'فرن': 'پخت در فر',
  'قلي': 'سرخ کردن',
  'خبز': 'پخت در فر',
  'حفظ وتجميد': 'نگهداری و انجماد'
};

const COOKING_METHODS_TR: Record<string, string> = {
  'سلطات ومشروبات': 'Salatalar ve İçecekler',
  'سلق وتسبيك': 'Haşlama ve Kısık Ateşte Pişirme',
  'تسبيك': 'Kısık Ateşte Pişirme',
  'تحمير وقلي': 'Kavurma ve Kızartma',
  'شوي': 'Izgara',
  'شي': 'Izgara',
  'خبز وتسوية بالفرن': 'Fırında Pişirme',
  'سلق': 'Haşlama',
  'تحمير': 'Kavurma',
  'فرن': 'Fırında',
  'قلي': 'Kızartma',
  'خبز': 'Fırında Pişirme',
  'حفظ وتجميد': 'Saklama ve Dondurma'
};

const COOKING_METHODS_KU: Record<string, string> = {
  'سلطات ومشروبات': 'Selete û Vexwarin',
  'سلق وتسبيك': 'Kelandin û Pijandina li ser Agirê Nizm',
  'تسبيك': 'Pijandina li ser Agirê Nizm',
  'تحمير وقلي': 'Sorkirin û Qelandin',
  'شوي': 'Biraştin',
  'شي': 'Biraştin',
  'خبز وتسوية بالفرن': 'Pijandina di Firinê de',
  'سلق': 'Kelandin',
  'تحمير': 'Sorkirin',
  'فرن': 'Di Firinê de',
  'قلي': 'Qelandin',
  'خبز': 'Pijandina di Firinê de',
  'حفظ وتجميد': 'Parastin û Cemidandin'
};

const COOKING_METHODS_ID: Record<string, string> = {
  'سلطات ومشروبات': 'Salad & Minuman',
  'سلق وتسبيك': 'Merebus & Memasak dengan Api Kecil',
  'تسبيك': 'Memasak dengan Api Kecil',
  'تحمير وقلي': 'Menumis & Menggoreng',
  'شوي': 'Memanggang',
  'شي': 'Memanggang',
  'خبز وتسوية بالفرن': 'Memanggang di Oven',
  'سلق': 'Merebus',
  'تحمير': 'Menumis',
  'فرن': 'Oven',
  'قلي': 'Menggoreng',
  'خبز': 'Memanggang di Oven',
  'حفظ وتجميد': 'Penyimpanan & Pembekuan'
};

const COOKING_METHODS_SW: Record<string, string> = {
  'سلطات ومشروبات': 'Saladi na Vinywaji',
  'سلق وتسبيك': 'Kuchemsha na Kupika kwa Moto Mdogo',
  'تسبيك': 'Kupika kwa Moto Mdogo',
  'تحمير وقلي': 'Kukaanga Kidogo na Kukaanga',
  'شوي': 'Kuchoma',
  'شي': 'Kuchoma',
  'خبز وتسوية بالفرن': 'Kuoka Ovenini',
  'سلق': 'Kuchemsha',
  'تحمير': 'Kukaanga Kidogo',
  'فرن': 'Oveni',
  'قلي': 'Kukaanga',
  'خبز': 'Kuoka Ovenini',
  'حفظ وتجميد': 'Kuhifadhi na Kugandisha'
};

const COOKING_METHODS_KO: Record<string, string> = {
  'سلطات ومشروبات': '샐러드 및 음료',
  'سلق وتسبيك': '삶기 및 약불 조리',
  'تسبيك': '약불 조리',
  'تحمير وقلي': '볶기 및 튀기기',
  'شوي': '굽기',
  'شي': '굽기',
  'خبز وتسوية بالفرن': '오븐 굽기',
  'سلق': '삶기',
  'تحمير': '볶기',
  'فرن': '오븐',
  'قلي': '튀기기',
  'خبز': '오븐 굽기',
  'حفظ وتجميد': '보관 및 냉동'
};

const COOKING_METHODS_NL: Record<string, string> = {
  'سلطات ومشروبات': 'Salades & Dranken',
  'سلق وتسبيك': 'Koken & Langzaam Sudderen',
  'تسبيك': 'Langzaam Sudderen',
  'تحمير وقلي': 'Aanbakken & Krokant Bakken',
  'شوي': 'Grillen',
  'شي': 'Grillen',
  'خبز وتسوية بالفرن': 'Bakken & Ovengerechten',
  'سلق': 'Koken',
  'تحمير': 'Aanbakken',
  'فرن': 'Bakken',
  'قلي': 'Frituren',
  'خبز': 'Bakken',
  'حفظ وتجميد': 'Conserveren & Invriezen'
};

const COOKING_METHODS_PS: Record<string, string> = {
  'سلطات ومشروبات': 'سلاتونه او څښاکونه',
  'سلق وتسبيك': 'ایستل او ورو پخلی',
  'تسبيك': 'ورو پخلی',
  'تحمير وقلي': 'تاوول او تلل',
  'شوي': 'کباب کول',
  'شي': 'کباب کول',
  'خبز وتسوية بالفرن': 'په تنور کې پخلی',
  'سلق': 'ایستل',
  'تحمير': 'تاوول',
  'فرن': 'په تنور کې پخلی',
  'قلي': 'تلل',
  'خبز': 'په تنور کې پخلی',
  'حفظ وتجميد': 'ساتل او کنګل کول'
};

const COOKING_METHODS_HE: Record<string, string> = {
  'سلطات ومشروبات': 'סלטים ושתייה',
  'سلق وتسبيك': 'בישול והתאה איטית',
  'تسبيك': 'בישול איטי',
  'تحمير وقلي': 'השחמה וטיגון',
  'شوي': 'צלייה על האש',
  'شي': 'צלייה על האש',
  'خبز وتسوية بالفرن': 'אפייה בתנור',
  'سلق': 'בישול',
  'تحمير': 'השחמה במחבת',
  'فرن': 'אפייה בתנור',
  'قلي': 'טיגון',
  'خبز': 'אפייה',
  'حفظ وتجميد': 'שימור והקפאה'
};

const COOKING_METHODS_PL: Record<string, string> = {
  'سلطات ومشروبات': 'Sałatki i napoje',
  'سلق وتسبيك': 'Gotowanie i powolne duszenie',
  'تسبيك': 'Powolne duszenie',
  'تحمير وقلي': 'Rumienienie na patelni i smażenie',
  'شوي': 'Grillowanie',
  'شي': 'Grillowanie',
  'خبز وتسوية بالفرن': 'Pieczenie w piekarniku',
  'سلق': 'Gotowanie',
  'تحمير': 'Rumienienie na patelni',
  'فرن': 'Pieczenie w piekarniku',
  'قلي': 'Smażenie',
  'خبز': 'Pieczenie',
  'حفظ وتجميد': 'Przechowywanie i mrożenie'
};

const COOKING_METHODS_SV: Record<string, string> = {
  'سلطات ومشروبات': 'Sallader och drycker',
  'سلق وتسبيك': 'Kokning och långsam sjudning',
  'تسبيك': 'Långsam sjudning',
  'تحمير وقلي': 'Brynning och stekning',
  'شوي': 'Grillning',
  'شي': 'Grillning',
  'خبز وتسوية بالفرن': 'Bakning i ugn',
  'سلق': 'Kokning',
  'تحمير': 'Brynning',
  'فرن': 'Bakning i ugn',
  'قلي': 'Stekning',
  'خبز': 'Bakning',
  'حفظ وتجميد': 'Förvaring och frysning'
};

const COOKING_METHODS_TE: Record<string, string> = {
  'سلطات ومشروبات': 'సలాడ్‌లు & పానీయాలు',
  'سلق وتسبيك': 'ఉడికించడం & మెల్లని మాగ్చడం',
  'تسبيك': 'మెల్లని మాగ్చడం',
  'تحمير وقلي': 'వేయించడం & వేపుడు',
  'شوي': 'గ్రిల్లింగ్',
  'شي': 'గ్రిల్లింగ్',
  'خبز وتسوية بالفرن': 'బేకింగ్ & ఓవెన్ కుకింగ్',
  'سلق': 'ఉడికించడం',
  'تحمير': 'వేయించడం',
  'فرن': 'బేకింగ్',
  'قلي': 'వేపుడు',
  'خبز': 'బేకింగ్',
  'بخار': 'ఆవిరిపై వంట',
  'حفظ وتجميد': 'నిల్వ & ఫ్రీజింగ్'
};

/** Vocab lookup exposed for the translation build scripts. */
export const RECIPE_VOCAB: Record<string, { category: Record<string, string>; method: Record<string, string> }> = {
  en: { category: CATEGORY_NAMES, method: COOKING_METHODS },
  fr: { category: CATEGORY_NAMES_FR, method: COOKING_METHODS_FR },
  es: { category: CATEGORY_NAMES_ES, method: COOKING_METHODS_ES },
  ja: { category: CATEGORY_NAMES_JA, method: COOKING_METHODS_JA },
  hi: { category: CATEGORY_NAMES_HI, method: COOKING_METHODS_HI },
  pt: { category: CATEGORY_NAMES_PT, method: COOKING_METHODS_PT },
  ru: { category: CATEGORY_NAMES_RU, method: COOKING_METHODS_RU },
  zh: { category: CATEGORY_NAMES_ZH, method: COOKING_METHODS_ZH },
  de: { category: CATEGORY_NAMES_DE, method: COOKING_METHODS_DE },
  it: { category: CATEGORY_NAMES_IT, method: COOKING_METHODS_IT },
  el: { category: CATEGORY_NAMES_EL, method: COOKING_METHODS_EL },
  ur: { category: CATEGORY_NAMES_UR, method: COOKING_METHODS_UR },
  fa: { category: CATEGORY_NAMES_FA, method: COOKING_METHODS_FA },
  tr: { category: CATEGORY_NAMES_TR, method: COOKING_METHODS_TR },
  ku: { category: CATEGORY_NAMES_KU, method: COOKING_METHODS_KU },
  id: { category: CATEGORY_NAMES_ID, method: COOKING_METHODS_ID },
  sw: { category: CATEGORY_NAMES_SW, method: COOKING_METHODS_SW },
  ko: { category: CATEGORY_NAMES_KO, method: COOKING_METHODS_KO },
  nl: { category: CATEGORY_NAMES_NL, method: COOKING_METHODS_NL },
  ps: { category: CATEGORY_NAMES_PS, method: COOKING_METHODS_PS },
  he: { category: CATEGORY_NAMES_HE, method: COOKING_METHODS_HE },
  pl: { category: CATEGORY_NAMES_PL, method: COOKING_METHODS_PL },
  sv: { category: CATEGORY_NAMES_SV, method: COOKING_METHODS_SV },
  te: { category: CATEGORY_NAMES_TE, method: COOKING_METHODS_TE },
};

const INGREDIENT_TERMS: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'ground soapwort root'],
  ['خميرة بيرة طبيعية', 'fresh brewer’s yeast'],
  ['شربات بارد كثيف وجوز هند', 'cold thick syrup and coconut'],
  ['زيت غزير للقلي على مرحلتين', 'deep frying oil'],
  ['ماء دافئ للعجين', 'warm water for the dough'],
  ['سكر أبيض للخميرة', 'white sugar for the yeast'],
  ['جوز هند', 'coconut'],
  ['شربات', 'syrup'],
  ['خروب مجروش قطع صغيرة', 'small pieces of crushed carob'],
  ['سكر أبيض للكرملة', 'white sugar for caramelizing'],
  ['ماء نقي', 'pure water'],
  ['بصل', 'onion'],
  ['ثوم', 'garlic'],
  ['طماطم', 'tomato'],
  ['لحم مفروم', 'minced meat'],
  ['لحم', 'meat'],
  ['دجاج', 'chicken'],
  ['أرانب', 'rabbit'],
  ['سمك', 'fish'],
  ['جمبري', 'shrimp'],
  ['كاليماري', 'calamari'],
  ['أرز', 'rice'],
  ['مكرونة', 'macaroni'],
  ['بطاطس', 'potatoes'],
  ['باذنجان', 'eggplant'],
  ['عدس', 'lentils'],
  ['ملوخية', 'molokhia'],
  ['فول', 'fava beans'],
  ['حمص', 'chickpeas'],
  ['دقيق', 'flour'],
  ['سميد', 'semolina'],
  ['نشا', 'cornstarch'],
  ['سمن بلدي', 'Egyptian baladi ghee'],
  ['سمن', 'ghee'],
  ['زيت', 'oil'],
  ['ملح', 'salt'],
  ['فلفل أسود', 'black pepper'],
  ['كمون', 'cumin'],
  ['كزبرة', 'coriander'],
  ['قرفة', 'cinnamon'],
  ['سكر', 'sugar'],
  ['ليمون', 'lemon'],
  ['خل', 'vinegar'],
  ['ماء', 'water']
];

const INGREDIENT_TERMS_FR: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'racine de saponaire moulue'],
  ['خميرة بيرة طبيعية', 'levure de bière fraîche'],
  ['شربات بارد كثيف وجوز هند', 'sirop froid épais et noix de coco'],
  ['زيت غزير للقلي على مرحلتين', 'huile de friture'],
  ['ماء دافئ للعجين', 'eau tiède pour la pâte'],
  ['سكر أبيض للخميرة', 'sucre blanc pour la levure'],
  ['جوز هند', 'noix de coco'],
  ['شربات', 'sirop'],
  ['خروب مجروش قطع صغيرة', 'petits morceaux de caroube concassée'],
  ['سكر أبيض للكرملة', 'sucre blanc pour la caramélisation'],
  ['ماء نقي', 'eau pure'],
  ['بصل', 'oignon'],
  ['ثوم', 'ail'],
  ['طماطم', 'tomate'],
  ['لحم مفروم', 'viande hachée'],
  ['لحم', 'viande'],
  ['دجاج', 'poulet'],
  ['أرانب', 'lapin'],
  ['سمك', 'poisson'],
  ['جمبري', 'crevettes'],
  ['كاليماري', 'calamars'],
  ['أرز', 'riz'],
  ['مكرونة', 'macaronis'],
  ['بطاطس', 'pommes de terre'],
  ['باذنجان', 'aubergine'],
  ['عدس', 'lentilles'],
  ['ملوخية', 'moloukhia'],
  ['فول', 'fèves'],
  ['حمص', 'pois chiches'],
  ['دقيق', 'farine'],
  ['سميد', 'semoule'],
  ['نشا', 'fécule de maïs'],
  ['سمن بلدي', 'ghee baladi égyptien'],
  ['سمن', 'ghee'],
  ['زيت', 'huile'],
  ['ملح', 'sel'],
  ['فلفل أسود', 'poivre noir'],
  ['كمون', 'cumin'],
  ['كزبرة', 'coriandre'],
  ['قرفة', 'cannelle'],
  ['سكر', 'sucre'],
  ['ليمون', 'citron'],
  ['خل', 'vinaigre'],
  ['ماء', 'eau']
];

const INGREDIENT_TERMS_ES: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'raíz de saponaria molida'],
  ['خميرة بيرة طبيعية', 'levadura de cerveza fresca'],
  ['شربات بارد كثيف وجوز هند', 'almíbar frío espeso y coco'],
  ['زيت غزير للقلي على مرحلتين', 'aceite abundante para freír'],
  ['ماء دافئ للعجين', 'agua tibia para la masa'],
  ['سكر أبيض للخميرة', 'azúcar blanca para la levadura'],
  ['جوز هند', 'coco'],
  ['شربات', 'almíbar'],
  ['خروب مجروش قطع صغيرة', 'trozos pequeños de algarroba molida'],
  ['سكر أبيض للكرملة', 'azúcar blanca para caramelizar'],
  ['ماء نقي', 'agua pura'],
  ['بصل', 'cebolla'],
  ['ثوم', 'ajo'],
  ['طماطم', 'tomate'],
  ['لحم مفروم', 'carne molida'],
  ['لحم', 'carne'],
  ['دجاج', 'pollo'],
  ['أرانب', 'conejo'],
  ['سمك', 'pescado'],
  ['جمبري', 'camarones'],
  ['كاليماري', 'calamares'],
  ['أرز', 'arroz'],
  ['مكرونة', 'macarrones'],
  ['بطاطس', 'papas'],
  ['باذنجان', 'berenjena'],
  ['عدس', 'lentejas'],
  ['ملوخية', 'molokhia'],
  ['فول', 'habas'],
  ['حمص', 'garbanzos'],
  ['دقيق', 'harina'],
  ['سميد', 'sémola'],
  ['نشا', 'maicena'],
  ['سمن بلدي', 'ghee baladi egipcio'],
  ['سمن', 'ghee'],
  ['زيت', 'aceite'],
  ['ملح', 'sal'],
  ['فلفل أسود', 'pimienta negra'],
  ['كمون', 'comino'],
  ['كزبرة', 'cilantro'],
  ['قرفة', 'canela'],
  ['سكر', 'azúcar'],
  ['ليمون', 'limón'],
  ['خل', 'vinagre'],
  ['ماء', 'agua']
];

const INGREDIENT_TERMS_JA: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', '挽いたサボンソウの根'],
  ['خميرة بيرة طبيعية', '生ビール酵母'],
  ['شربات بارد كثيف وجوز هند', '冷たい濃いシロップとココナッツ'],
  ['زيت غزير للقلي على مرحلتين', '揚げ油'],
  ['ماء دافئ للعجين', '生地用のぬるま湯'],
  ['سكر أبيض للخميرة', '酵母用の白砂糖'],
  ['جوز هند', 'ココナッツ'],
  ['شربات', 'シロップ'],
  ['خروب مجروش قطع صغيرة', '砕いたキャロブの小片'],
  ['سكر أبيض للكرملة', 'カラメル用の白砂糖'],
  ['ماء نقي', '純水'],
  ['بصل', '玉ねぎ'],
  ['ثوم', 'にんにく'],
  ['طماطم', 'トマト'],
  ['لحم مفروم', 'ひき肉'],
  ['لحم', '肉'],
  ['دجاج', '鶏肉'],
  ['أرانب', 'ウサギ肉'],
  ['سمك', '魚'],
  ['جمبري', 'エビ'],
  ['كاليماري', 'イカ'],
  ['أرز', '米'],
  ['مكرونة', 'マカロニ'],
  ['بطاطس', 'じゃがいも'],
  ['باذنجان', 'なす'],
  ['عدس', 'レンズ豆'],
  ['ملوخية', 'モロヘイヤ'],
  ['فول', 'そら豆'],
  ['حمص', 'ひよこ豆'],
  ['دقيق', '小麦粉'],
  ['سميد', 'セモリナ粉'],
  ['نشا', 'コーンスターチ'],
  ['سمن بلدي', 'バラディギー(エジプト産ギー)'],
  ['سمن', 'ギー'],
  ['زيت', '油'],
  ['ملح', '塩'],
  ['فلفل أسود', '黒こしょう'],
  ['كمون', 'クミン'],
  ['كزبرة', 'コリアンダー'],
  ['قرفة', 'シナモン'],
  ['سكر', '砂糖'],
  ['ليمون', 'レモン'],
  ['خل', '酢'],
  ['ماء', '水']
];

const INGREDIENT_TERMS_HI: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'पिसी हुई साबुनवर्ट जड़'],
  ['خميرة بيرة طبيعية', 'ताज़ा बीयर यीस्ट'],
  ['شربات بارد كثيف وجوز هند', 'ठंडा गाढ़ा शर्बत और नारियल'],
  ['زيت غزير للقلي على مرحلتين', 'तलने के लिए भरपूर तेल'],
  ['ماء دافئ للعجين', 'आटे के लिए गुनगुना पानी'],
  ['سكر أبيض للخميرة', 'यीस्ट के लिए सफ़ेद चीनी'],
  ['جوز هند', 'नारियल'],
  ['شربات', 'शर्बत'],
  ['خروب مجروش قطع صغيرة', 'खरूब के छोटे कुटे टुकड़े'],
  ['سكر أبيض للكرملة', 'कैरेमल के लिए सफ़ेद चीनी'],
  ['ماء نقي', 'शुद्ध पानी'],
  ['بصل', 'प्याज़'],
  ['ثوم', 'लहसुन'],
  ['طماطم', 'टमाटर'],
  ['لحم مفروم', 'कीमा'],
  ['لحم', 'मांस'],
  ['دجاج', 'मुर्ग़ा'],
  ['أرانب', 'खरगोश'],
  ['سمك', 'मछली'],
  ['جمبري', 'झींगा'],
  ['كاليماري', 'स्क्विड'],
  ['أرز', 'चावल'],
  ['مكرونة', 'मैकरोनी'],
  ['بطاطس', 'आलू'],
  ['باذنجان', 'बैंगन'],
  ['عدس', 'मसूर दाल'],
  ['ملوخية', 'मुलूखिया'],
  ['فول', 'फ़ूल (सेम)'],
  ['حمص', 'छोले'],
  ['دقيق', 'आटा'],
  ['سميد', 'सूजी'],
  ['نشا', 'कॉर्नफ़्लोर'],
  ['سمن بلدي', 'देसी घी'],
  ['سمن', 'घी'],
  ['زيت', 'तेल'],
  ['ملح', 'नमक'],
  ['فلفل أسود', 'काली मिर्च'],
  ['كمون', 'जीरा'],
  ['كزبرة', 'धनिया'],
  ['قرفة', 'दालचीनी'],
  ['سكر', 'चीनी'],
  ['ليمون', 'नींबू'],
  ['خل', 'सिरका'],
  ['ماء', 'पानी']
];

const INGREDIENT_TERMS_PT: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'raiz de saponária moída'],
  ['خميرة بيرة طبيعية', 'fermento biológico fresco'],
  ['شربات بارد كثيف وجوز هند', 'calda fria grossa e coco'],
  ['زيت غزير للقلي على مرحلتين', 'óleo abundante para fritar'],
  ['ماء دافئ للعجين', 'água morna para a massa'],
  ['سكر أبيض للخميرة', 'açúcar branco para o fermento'],
  ['جوز هند', 'coco'],
  ['شربات', 'calda'],
  ['خروب مجروش قطع صغيرة', 'pedacinhos de alfarroba moída'],
  ['سكر أبيض للكرملة', 'açúcar branco para caramelizar'],
  ['ماء نقي', 'água pura'],
  ['بصل', 'cebola'],
  ['ثوم', 'alho'],
  ['طماطم', 'tomate'],
  ['لحم مفروم', 'carne moída'],
  ['لحم', 'carne'],
  ['دجاج', 'frango'],
  ['أرانب', 'coelho'],
  ['سمك', 'peixe'],
  ['جمبري', 'camarão'],
  ['كاليماري', 'lula'],
  ['أرز', 'arroz'],
  ['مكرونة', 'macarrão'],
  ['بطاطس', 'batata'],
  ['باذنجان', 'berinjela'],
  ['عدس', 'lentilha'],
  ['ملوخية', 'molokhia'],
  ['فول', 'fava'],
  ['حمص', 'grão-de-bico'],
  ['دقيق', 'farinha de trigo'],
  ['سميد', 'semolina'],
  ['نشا', 'amido de milho'],
  ['سمن بلدي', 'ghee baladi egípcio'],
  ['سمن', 'ghee'],
  ['زيت', 'óleo'],
  ['ملح', 'sal'],
  ['فلفل أسود', 'pimenta-do-reino'],
  ['كمون', 'cominho'],
  ['كزبرة', 'coentro'],
  ['قرفة', 'canela'],
  ['سكر', 'açúcar'],
  ['ليمون', 'limão'],
  ['خل', 'vinagre'],
  ['ماء', 'água']
];

const INGREDIENT_TERMS_RU: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'молотый корень мыльнянки'],
  ['خميرة بيرة طبيعية', 'свежие пивные дрожжи'],
  ['شربات بارد كثيف وجوز هند', 'холодный густой сироп и кокос'],
  ['زيت غزير للقلي على مرحلتين', 'растительное масло для жарки во фритюре'],
  ['ماء دافئ للعجين', 'тёплая вода для теста'],
  ['سكر أبيض للخميرة', 'белый сахар для дрожжей'],
  ['جوز هند', 'кокос'],
  ['شربات', 'сироп'],
  ['خروب مجروش قطع صغيرة', 'мелко измельчённый кэроб'],
  ['سكر أبيض للكرملة', 'белый сахар для карамелизации'],
  ['ماء نقي', 'чистая вода'],
  ['بصل', 'лук'],
  ['ثوم', 'чеснок'],
  ['طماطم', 'помидор'],
  ['لحم مفروم', 'фарш'],
  ['لحم', 'мясо'],
  ['دجاج', 'курица'],
  ['أرانب', 'кролик'],
  ['سمك', 'рыба'],
  ['جمبري', 'креветки'],
  ['كاليماري', 'кальмары'],
  ['أرز', 'рис'],
  ['مكرونة', 'макароны'],
  ['بطاطس', 'картофель'],
  ['باذنجان', 'баклажан'],
  ['عدس', 'чечевица'],
  ['ملوخية', 'молохия'],
  ['فول', 'фасоль фава'],
  ['حمص', 'нут'],
  ['دقيق', 'мука'],
  ['سميد', 'манная крупа'],
  ['نشا', 'кукурузный крахмал'],
  ['سمن بلدي', 'египетское топлёное масло (гхи)'],
  ['سمن', 'топлёное масло (гхи)'],
  ['زيت', 'растительное масло'],
  ['ملح', 'соль'],
  ['فلفل أسود', 'чёрный перец'],
  ['كمون', 'кумин'],
  ['كزبرة', 'кориандр'],
  ['قرفة', 'корица'],
  ['سكر', 'сахар'],
  ['ليمون', 'лимон'],
  ['خل', 'уксус'],
  ['ماء', 'вода']
];

const INGREDIENT_TERMS_ZH: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', '磨碎的肥皂草根'],
  ['خميرة بيرة طبيعية', '新鲜啤酒酵母'],
  ['شربات بارد كثيف وجوز هند', '冰镇浓糖浆和椰蓉'],
  ['زيت غزير للقلي على مرحلتين', '油炸用油'],
  ['ماء دافئ للعجين', '和面用温水'],
  ['سكر أبيض للخميرة', '酵母用白糖'],
  ['جوز هند', '椰蓉'],
  ['شربات', '糖浆'],
  ['خروب مجروش قطع صغيرة', '碎角豆小块'],
  ['سكر أبيض للكرملة', '焦糖用白糖'],
  ['ماء نقي', '纯净水'],
  ['بصل', '洋葱'],
  ['ثوم', '大蒜'],
  ['طماطم', '西红柿'],
  ['لحم مفروم', '肉末'],
  ['لحم', '肉'],
  ['دجاج', '鸡肉'],
  ['أرانب', '兔肉'],
  ['سمك', '鱼'],
  ['جمبري', '虾'],
  ['كاليماري', '鱿鱼'],
  ['أرز', '大米'],
  ['مكرونة', '通心粉'],
  ['بطاطس', '土豆'],
  ['باذنجان', '茄子'],
  ['عدس', '扁豆'],
  ['ملوخية', '摩洛希亚叶'],
  ['فول', '蚕豆'],
  ['حمص', '鹰嘴豆'],
  ['دقيق', '面粉'],
  ['سميد', '粗粒小麦粉'],
  ['نشا', '玉米淀粉'],
  ['سمن بلدي', '埃及酥油'],
  ['سمن', '酥油'],
  ['زيت', '油'],
  ['ملح', '盐'],
  ['فلفل أسود', '黑胡椒'],
  ['كمون', '孜然'],
  ['كزبرة', '香菜籽'],
  ['قرفة', '肉桂'],
  ['سكر', '糖'],
  ['ليمون', '柠檬'],
  ['خل', '醋'],
  ['ماء', '水']
];

const INGREDIENT_TERMS_DE: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'gemahlene Seifenkrautwurzel'],
  ['خميرة بيرة طبيعية', 'frische Bierhefe'],
  ['شربات بارد كثيف وجوز هند', 'kalter dickflüssiger Sirup und Kokosraspeln'],
  ['زيت غزير للقلي على مرحلتين', 'reichlich Öl zum Frittieren'],
  ['ماء دافئ للعجين', 'lauwarmes Wasser für den Teig'],
  ['سكر أبيض للخميرة', 'weißer Zucker für die Hefe'],
  ['جوز هند', 'Kokosraspeln'],
  ['شربات', 'Sirup'],
  ['خروب مجروش قطع صغيرة', 'kleine Stücke gemahlener Johannisbrot'],
  ['سكر أبيض للكرملة', 'weißer Zucker zum Karamellisieren'],
  ['ماء نقي', 'reines Wasser'],
  ['بصل', 'Zwiebel'],
  ['ثوم', 'Knoblauch'],
  ['طماطم', 'Tomate'],
  ['لحم مفروم', 'Hackfleisch'],
  ['لحم', 'Fleisch'],
  ['دجاج', 'Hähnchen'],
  ['أرانب', 'Kaninchen'],
  ['سمك', 'Fisch'],
  ['جمبري', 'Garnelen'],
  ['كاليماري', 'Calamari'],
  ['أرز', 'Reis'],
  ['مكرونة', 'Makkaroni'],
  ['بطاطس', 'Kartoffeln'],
  ['باذنجان', 'Aubergine'],
  ['عدس', 'Linsen'],
  ['ملوخية', 'Molokhia'],
  ['فول', 'dicke Bohnen'],
  ['حمص', 'Kichererbsen'],
  ['دقيق', 'Mehl'],
  ['سميد', 'Grieß'],
  ['نشا', 'Speisestärke'],
  ['سمن بلدي', 'ägyptisches Baladi-Ghee'],
  ['سمن', 'Ghee'],
  ['زيت', 'Öl'],
  ['ملح', 'Salz'],
  ['فلفل أسود', 'schwarzer Pfeffer'],
  ['كمون', 'Kreuzkümmel'],
  ['كزبرة', 'Koriander'],
  ['قرفة', 'Zimt'],
  ['سكر', 'Zucker'],
  ['ليمون', 'Zitrone'],
  ['خل', 'Essig'],
  ['ماء', 'Wasser']
];

const INGREDIENT_TERMS_IT: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'radice di saponaria macinata'],
  ['خميرة بيرة طبيعية', 'lievito di birra fresco'],
  ['شربات بارد كثيف وجوز هند', 'sciroppo freddo denso e cocco grattugiato'],
  ['زيت غزير للقلي على مرحلتين', 'abbondante olio per friggere'],
  ['ماء دافئ للعجين', 'acqua tiepida per l’impasto'],
  ['سكر أبيض للخميرة', 'zucchero bianco per il lievito'],
  ['جوز هند', 'cocco grattugiato'],
  ['شربات', 'sciroppo'],
  ['خروب مجروش قطع صغيرة', 'piccoli pezzi di carruba macinata'],
  ['سكر أبيض للكرملة', 'zucchero bianco per caramellare'],
  ['ماء نقي', 'acqua pura'],
  ['بصل', 'cipolla'],
  ['ثوم', 'aglio'],
  ['طماطم', 'pomodoro'],
  ['لحم مفروم', 'carne macinata'],
  ['لحم', 'carne'],
  ['دجاج', 'pollo'],
  ['أرانب', 'coniglio'],
  ['سمك', 'pesce'],
  ['جمبري', 'gamberi'],
  ['كاليماري', 'calamari'],
  ['أرز', 'riso'],
  ['مكرونة', 'maccheroni'],
  ['بطاطس', 'patate'],
  ['باذنجان', 'melanzana'],
  ['عدس', 'lenticchie'],
  ['ملوخية', 'molokhia'],
  ['فول', 'fave'],
  ['حمص', 'ceci'],
  ['دقيق', 'farina'],
  ['سميد', 'semolino'],
  ['نشا', 'amido'],
  ['سمن بلدي', 'ghee egiziano baladi'],
  ['سمن', 'ghee'],
  ['زيت', 'olio'],
  ['ملح', 'sale'],
  ['فلفل أسود', 'pepe nero'],
  ['كمون', 'cumino'],
  ['كزبرة', 'coriandolo'],
  ['قرفة', 'cannella'],
  ['سكر', 'zucchero'],
  ['ليمون', 'limone'],
  ['خل', 'aceto'],
  ['ماء', 'acqua']
];

const INGREDIENT_TERMS_EL: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'τριμμένη ρίζα σαπουνόχορτου'],
  ['خميرة بيرة طبيعية', 'φρέσκια μαγιά μπύρας'],
  ['شربات بارد كثيف وجوز هند', 'κρύο πηχτό σιρόπι και καρύδα'],
  ['زيت غزير للقلي على مرحلتين', 'άφθονο λάδι για τηγάνισμα'],
  ['ماء دافئ للعجين', 'χλιαρό νερό για τη ζύμη'],
  ['سكر أبيض للخميرة', 'λευκή ζάχαρη για τη μαγιά'],
  ['جوز هند', 'καρύδα'],
  ['شربات', 'σιρόπι'],
  ['خروب مجروش قطع صغيرة', 'μικρά κομμάτια τριμμένης χαρουπιάς'],
  ['سكر أبيض للكرملة', 'λευκή ζάχαρη για καραμελοποίηση'],
  ['ماء نقي', 'καθαρό νερό'],
  ['بصل', 'κρεμμύδι'],
  ['ثوم', 'σκόρδο'],
  ['طماطم', 'ντομάτα'],
  ['لحم مفروم', 'κιμάς'],
  ['لحم', 'κρέας'],
  ['دجاج', 'κοτόπουλο'],
  ['أرانب', 'κουνέλι'],
  ['سمك', 'ψάρι'],
  ['جمبري', 'γαρίδες'],
  ['كاليماري', 'καλαμάρι'],
  ['أرز', 'ρύζι'],
  ['مكرونة', 'μακαρόνια'],
  ['بطاطس', 'πατάτες'],
  ['باذنجان', 'μελιτζάνα'],
  ['عدس', 'φακές'],
  ['ملوخية', 'μολοχία'],
  ['فول', 'κουκιά'],
  ['حمص', 'ρεβίθια'],
  ['دقيق', 'αλεύρι'],
  ['سميد', 'σιμιγδάλι'],
  ['نشا', 'κορν φλάουρ'],
  ['سمن بلدي', 'αιγυπτιακό γκι μπαλάντι'],
  ['سمن', 'γκι'],
  ['زيت', 'λάδι'],
  ['ملح', 'αλάτι'],
  ['فلفل أسود', 'μαύρο πιπέρι'],
  ['كمون', 'κύμινο'],
  ['كزبرة', 'κόλιανδρος'],
  ['قرفة', 'κανέλα'],
  ['سكر', 'ζάχαρη'],
  ['ليمون', 'λεμόνι'],
  ['خل', 'ξύδι'],
  ['ماء', 'νερό']
];

const INGREDIENT_TERMS_UR: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'پسی ہوئی عرقِ حلاوہ (سوپ وورٹ کی جڑ)'],
  ['خميرة بيرة طبيعية', 'تازہ خمیر'],
  ['شربات بارد كثيف وجوز هند', 'گاڑھا ٹھنڈا شیرہ اور ناریل'],
  ['زيت غزير للقلي على مرحلتين', 'تلنے کے لیے وافر تیل'],
  ['ماء دافئ للعجين', 'آٹا گوندھنے کے لیے نیم گرم پانی'],
  ['سكر أبيض للخميرة', 'خمیر کے لیے سفید چینی'],
  ['جوز هند', 'ناریل'],
  ['شربات', 'شیرہ'],
  ['خروب مجروش قطع صغيرة', 'کٹے ہوئے خروب کے چھوٹے ٹکڑے'],
  ['سكر أبيض للكرملة', 'کیریملائز کرنے کے لیے سفید چینی'],
  ['ماء نقي', 'صاف پانی'],
  ['بصل', 'پیاز'],
  ['ثوم', 'لہسن'],
  ['طماطم', 'ٹماٹر'],
  ['لحم مفروم', 'قیمہ'],
  ['لحم', 'گوشت'],
  ['دجاج', 'مرغی'],
  ['أرانب', 'خرگوش'],
  ['سمك', 'مچھلی'],
  ['جمبري', 'جھینگے'],
  ['كاليماري', 'کیلاماری'],
  ['أرز', 'چاول'],
  ['مكرونة', 'میکرونی'],
  ['بطاطس', 'آلو'],
  ['باذنجان', 'بینگن'],
  ['عدس', 'مسور کی دال'],
  ['ملوخية', 'ملوخیہ'],
  ['فول', 'فول (باقلا)'],
  ['حمص', 'چنے'],
  ['دقيق', 'میدہ'],
  ['سميد', 'سوجی'],
  ['نشا', 'کارن فلور'],
  ['سمن بلدي', 'دیسی گھی'],
  ['سمن', 'گھی'],
  ['زيت', 'تیل'],
  ['ملح', 'نمک'],
  ['فلفل أسود', 'کالی مرچ'],
  ['كمون', 'زیرہ'],
  ['كزبرة', 'دھنیا'],
  ['قرفة', 'دار چینی'],
  ['سكر', 'چینی'],
  ['ليمون', 'لیموں'],
  ['خل', 'سرکہ'],
  ['ماء', 'پانی']
];

const INGREDIENT_TERMS_FA: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'ریشه چوبک کوبیده'],
  ['خميرة بيرة طبيعية', 'خمیر مایه تازه'],
  ['شربات بارد كثيف وجوز هند', 'شربت غلیظ سرد و نارگیل'],
  ['زيت غزير للقلي على مرحلتين', 'روغن فراوان برای سرخ کردن'],
  ['ماء دافئ للعجين', 'آب ولرم برای خمیر'],
  ['سكر أبيض للخميرة', 'شکر سفید برای خمیر مایه'],
  ['جوز هند', 'نارگیل'],
  ['شربات', 'شربت'],
  ['خروب مجروش قطع صغيرة', 'تکه‌های کوچک خرنوب خردشده'],
  ['سكر أبيض للكرملة', 'شکر سفید برای کاراملی کردن'],
  ['ماء نقي', 'آب تصفیه‌شده'],
  ['بصل', 'پیاز'],
  ['ثوم', 'سیر'],
  ['طماطم', 'گوجه‌فرنگی'],
  ['لحم مفروم', 'گوشت چرخ‌کرده'],
  ['لحم', 'گوشت'],
  ['دجاج', 'مرغ'],
  ['أرانب', 'خرگوش'],
  ['سمك', 'ماهی'],
  ['جمبري', 'میگو'],
  ['كاليماري', 'کالاماری'],
  ['أرز', 'برنج'],
  ['مكرونة', 'ماکارونی'],
  ['بطاطس', 'سیب‌زمینی'],
  ['باذنجان', 'بادمجان'],
  ['عدس', 'عدس'],
  ['ملوخية', 'ملوخیه'],
  ['فول', 'باقلا'],
  ['حمص', 'نخود'],
  ['دقيق', 'آرد'],
  ['سميد', 'سمولینا'],
  ['نشا', 'نشاسته ذرت'],
  ['سمن بلدي', 'روغن حیوانی محلی'],
  ['سمن', 'روغن حیوانی'],
  ['زيت', 'روغن'],
  ['ملح', 'نمک'],
  ['فلفل أسود', 'فلفل سیاه'],
  ['كمون', 'زیره'],
  ['كزبرة', 'گشنیز'],
  ['قرفة', 'دارچین'],
  ['سكر', 'شکر'],
  ['ليمون', 'لیمو'],
  ['خل', 'سرکه'],
  ['ماء', 'آب']
];

const INGREDIENT_TERMS_TR: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'dövülmüş çöven kökü'],
  ['خميرة بيرة طبيعية', 'yaş maya'],
  ['شربات بارد كثيف وجوز هند', 'soğuk koyu şerbet ve hindistancevizi'],
  ['زيت غزير للقلي على مرحلتين', 'kızartmalık bol yağ'],
  ['ماء دافئ للعجين', 'hamur için ılık su'],
  ['سكر أبيض للخميرة', 'maya için toz şeker'],
  ['جوز هند', 'hindistancevizi'],
  ['شربات', 'şerbet'],
  ['خروب مجروش قطع صغيرة', 'küçük parça kırılmış keçiboynuzu'],
  ['سكر أبيض للكرملة', 'karamelize etmek için toz şeker'],
  ['ماء نقي', 'arıtılmış su'],
  ['بصل', 'soğan'],
  ['ثوم', 'sarımsak'],
  ['طماطم', 'domates'],
  ['لحم مفروم', 'kıyma'],
  ['لحم', 'et'],
  ['دجاج', 'tavuk'],
  ['أرانب', 'tavşan'],
  ['سمك', 'balık'],
  ['جمبري', 'karides'],
  ['كاليماري', 'kalamar'],
  ['أرز', 'pirinç'],
  ['مكرونة', 'makarna'],
  ['بطاطس', 'patates'],
  ['باذنجان', 'patlıcan'],
  ['عدس', 'mercimek'],
  ['ملوخية', 'molehiya'],
  ['فول', 'bakla'],
  ['حمص', 'nohut'],
  ['دقيق', 'un'],
  ['سميد', 'irmik'],
  ['نشا', 'mısır nişastası'],
  ['سمن بلدي', 'köy tereyağı (sade yağ)'],
  ['سمن', 'sade yağ'],
  ['زيت', 'yağ'],
  ['ملح', 'tuz'],
  ['فلفل أسود', 'karabiber'],
  ['كمون', 'kimyon'],
  ['كزبرة', 'kişniş'],
  ['قرفة', 'tarçın'],
  ['سكر', 'şeker'],
  ['ليمون', 'limon'],
  ['خل', 'sirke'],
  ['ماء', 'su']
];

const INGREDIENT_TERMS_KU: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'koka çovenê ya kutayî'],
  ['خميرة بيرة طبيعية', 'hevîrtirşê teze'],
  ['شربات بارد كثيف وجوز هند', 'şerbeta sar a tîr û gûza hindî'],
  ['زيت غزير للقلي على مرحلتين', 'gelek rûn ji bo qelandinê'],
  ['ماء دافئ للعجين', 'ava şilêr ji bo hevîr'],
  ['سكر أبيض للخميرة', 'şekirê spî ji bo hevîrtirş'],
  ['جوز هند', 'gûza hindî'],
  ['شربات', 'şerbet'],
  ['خروب مجروش قطع صغيرة', 'xernûba kutayî perçeyên biçûk'],
  ['سكر أبيض للكرملة', 'şekirê spî ji bo karamelê'],
  ['ماء نقي', 'ava paqij'],
  ['بصل', 'pîvaz'],
  ['ثوم', 'sîr'],
  ['طماطم', 'bacanê sor'],
  ['لحم مفروم', 'goştê hêrayî'],
  ['لحم', 'goşt'],
  ['دجاج', 'mirîşk'],
  ['أرانب', 'kêvroşk'],
  ['سمك', 'masî'],
  ['جمبري', 'karîdes'],
  ['كاليماري', 'kalamar'],
  ['أرز', 'birinc'],
  ['مكرونة', 'makarone'],
  ['بطاطس', 'kartol'],
  ['باذنجان', 'bacanê reş'],
  ['عدس', 'nîsk'],
  ['ملوخية', 'molexiye'],
  ['فول', 'baqil'],
  ['حمص', 'nok'],
  ['دقيق', 'ard'],
  ['سميد', 'simîd'],
  ['نشا', 'nîşasteya garis'],
  ['سمن بلدي', 'rûnê nivîşk ê gundî'],
  ['سمن', 'rûnê nivîşk'],
  ['زيت', 'rûn'],
  ['ملح', 'xwê'],
  ['فلفل أسود', 'îsota reş'],
  ['كمون', 'zîre'],
  ['كزبرة', 'gijnîj'],
  ['قرفة', 'darçîn'],
  ['سكر', 'şekir'],
  ['ليمون', 'lîmon'],
  ['خل', 'sirke'],
  ['ماء', 'av']
];

const INGREDIENT_TERMS_ID: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'akar soapwort tumbuk'],
  ['خميرة بيرة طبيعية', 'ragi segar'],
  ['شربات بارد كثيف وجوز هند', 'sirup gula dingin kental dan kelapa'],
  ['زيت غزير للقلي على مرحلتين', 'minyak banyak untuk menggoreng'],
  ['ماء دافئ للعجين', 'air hangat untuk adonan'],
  ['سكر أبيض للخميرة', 'gula pasir untuk ragi'],
  ['جوز هند', 'kelapa'],
  ['شربات', 'sirup gula'],
  ['خروب مجروش قطع صغيرة', 'carob tumbuk potongan kecil'],
  ['سكر أبيض للكرملة', 'gula pasir untuk karamel'],
  ['ماء نقي', 'air bersih'],
  ['بصل', 'bawang bombai'],
  ['ثوم', 'bawang putih'],
  ['طماطم', 'tomat'],
  ['لحم مفروم', 'daging cincang'],
  ['لحم', 'daging'],
  ['دجاج', 'ayam'],
  ['أرانب', 'kelinci'],
  ['سمك', 'ikan'],
  ['جمبري', 'udang'],
  ['كاليماري', 'cumi-cumi'],
  ['أرز', 'beras'],
  ['مكرونة', 'pasta'],
  ['بطاطس', 'kentang'],
  ['باذنجان', 'terung'],
  ['عدس', 'lentil'],
  ['ملوخية', 'mulukhiyah'],
  ['فول', 'kacang fava'],
  ['حمص', 'kacang arab'],
  ['دقيق', 'tepung terigu'],
  ['سميد', 'semolina'],
  ['نشا', 'tepung maizena'],
  ['سمن بلدي', 'samin desa'],
  ['سمن', 'samin'],
  ['زيت', 'minyak'],
  ['ملح', 'garam'],
  ['فلفل أسود', 'lada hitam'],
  ['كمون', 'jintan'],
  ['كزبرة', 'ketumbar'],
  ['قرفة', 'kayu manis'],
  ['سكر', 'gula'],
  ['ليمون', 'lemon'],
  ['خل', 'cuka'],
  ['ماء', 'air']
];

const INGREDIENT_TERMS_SW: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'mizizi ya soapwort iliyotwangwa'],
  ['خميرة بيرة طبيعية', 'hamira mbichi'],
  ['شربات بارد كثيف وجوز هند', 'shira nzito baridi na nazi'],
  ['زيت غزير للقلي على مرحلتين', 'mafuta mengi ya kukaangia'],
  ['ماء دافئ للعجين', 'maji ya uvuguvugu ya kukandia'],
  ['سكر أبيض للخميرة', 'sukari nyeupe kwa hamira'],
  ['جوز هند', 'nazi'],
  ['شربات', 'shira'],
  ['خروب مجروش قطع صغيرة', 'karobu iliyopondwa vipande vidogo'],
  ['سكر أبيض للكرملة', 'sukari nyeupe kwa karameli'],
  ['ماء نقي', 'maji safi'],
  ['بصل', 'kitunguu'],
  ['ثوم', 'kitunguu saumu'],
  ['طماطم', 'nyanya'],
  ['لحم مفروم', 'nyama ya kusaga'],
  ['لحم', 'nyama'],
  ['دجاج', 'kuku'],
  ['أرانب', 'sungura'],
  ['سمك', 'samaki'],
  ['جمبري', 'kamba'],
  ['كاليماري', 'ngisi'],
  ['أرز', 'mchele'],
  ['مكرونة', 'tambi'],
  ['بطاطس', 'viazi'],
  ['باذنجان', 'biringanya'],
  ['عدس', 'dengu'],
  ['ملوخية', 'mlukhia'],
  ['فول', 'baqila'],
  ['حمص', 'chana'],
  ['دقيق', 'unga wa ngano'],
  ['سميد', 'semolina'],
  ['نشا', 'wanga wa mahindi'],
  ['سمن بلدي', 'samli ya kienyeji'],
  ['سمن', 'samli'],
  ['زيت', 'mafuta'],
  ['ملح', 'chumvi'],
  ['فلفل أسود', 'pilipili manga'],
  ['كمون', 'jira'],
  ['كزبرة', 'giligilani'],
  ['قرفة', 'mdalasini'],
  ['سكر', 'sukari'],
  ['ليمون', 'limau'],
  ['خل', 'siki'],
  ['ماء', 'maji']
];

const INGREDIENT_TERMS_KO: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', '빻은 비누풀 뿌리'],
  ['خميرة بيرة طبيعية', '생이스트'],
  ['شربات بارد كثيف وجوز هند', '진한 차가운 시럽과 코코넛'],
  ['زيت غزير للقلي على مرحلتين', '튀김용 넉넉한 기름'],
  ['ماء دافئ للعجين', '반죽용 미지근한 물'],
  ['سكر أبيض للخميرة', '이스트용 백설탕'],
  ['جوز هند', '코코넛'],
  ['شربات', '시럽'],
  ['خروب مجروش قطع صغيرة', '잘게 부순 캐롭'],
  ['سكر أبيض للكرملة', '캐러멜용 백설탕'],
  ['ماء نقي', '깨끗한 물'],
  ['بصل', '양파'],
  ['ثوم', '마늘'],
  ['طماطم', '토마토'],
  ['لحم مفروم', '다진 고기'],
  ['لحم', '고기'],
  ['دجاج', '닭고기'],
  ['أرانب', '토끼고기'],
  ['سمك', '생선'],
  ['جمبري', '새우'],
  ['كاليماري', '오징어'],
  ['أرز', '쌀'],
  ['مكرونة', '파스타'],
  ['بطاطس', '감자'],
  ['باذنجان', '가지'],
  ['عدس', '렌틸콩'],
  ['ملوخية', '몰로키아'],
  ['فول', '잠두콩'],
  ['حمص', '병아리콩'],
  ['دقيق', '밀가루'],
  ['سميد', '세몰리나'],
  ['نشا', '옥수수 전분'],
  ['سمن بلدي', '전통 기'],
  ['سمن', '기'],
  ['زيت', '기름'],
  ['ملح', '소금'],
  ['فلفل أسود', '후추'],
  ['كمون', '커민'],
  ['كزبرة', '고수'],
  ['قرفة', '계피'],
  ['سكر', '설탕'],
  ['ليمون', '레몬'],
  ['خل', '식초'],
  ['ماء', '물']
];

const INGREDIENT_TERMS_NL: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'gemalen zeepkruidwortel'],
  ['خميرة بيرة طبيعية', 'verse biergist'],
  ['شربات بارد كثيف وجوز هند', 'koude dikke siroop en kokosrasp'],
  ['زيت غزير للقلي على مرحلتين', 'ruim olie om te frituren'],
  ['ماء دافئ للعجين', 'lauw water voor het deeg'],
  ['سكر أبيض للخميرة', 'witte suiker voor de gist'],
  ['جوز هند', 'kokosrasp'],
  ['شربات', 'siroop'],
  ['خروب مجروش قطع صغيرة', 'kleine stukjes gemalen johannesbrood'],
  ['سكر أبيض للكرملة', 'witte suiker om te karamelliseren'],
  ['ماء نقي', 'zuiver water'],
  ['بصل', 'ui'],
  ['ثوم', 'knoflook'],
  ['طماطم', 'tomaat'],
  ['لحم مفروم', 'gehakt'],
  ['لحم', 'vlees'],
  ['دجاج', 'kip'],
  ['أرانب', 'konijn'],
  ['سمك', 'vis'],
  ['جمبري', 'garnalen'],
  ['كاليماري', 'inktvis'],
  ['أرز', 'rijst'],
  ['مكرونة', 'pasta'],
  ['بطاطس', 'aardappelen'],
  ['باذنجان', 'aubergine'],
  ['عدس', 'linzen'],
  ['ملوخية', 'molokhia'],
  ['فول', 'tuinbonen'],
  ['حمص', 'kikkererwten'],
  ['دقيق', 'bloem'],
  ['سميد', 'griesmeel'],
  ['نشا', 'zetmeel'],
  ['سمن بلدي', 'Egyptische baladi-geklaarde boter'],
  ['سمن', 'geklaarde boter (ghee)'],
  ['زيت', 'olie'],
  ['ملح', 'zout'],
  ['فلفل أسود', 'zwarte peper'],
  ['كمون', 'komijn'],
  ['كزبرة', 'koriander'],
  ['قرفة', 'kaneel'],
  ['سكر', 'suiker'],
  ['ليمون', 'citroen'],
  ['خل', 'azijn'],
  ['ماء', 'water']
];

const INGREDIENT_TERMS_PS: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'کوبل شوې د صابون بوټي ریښه'],
  ['خميرة بيرة طبيعية', 'تازه خمیر'],
  ['شربات بارد كثيف وجوز هند', 'غلیظ یخ شربت او ناریل'],
  ['زيت غزير للقلي على مرحلتين', 'د تللو لپاره ډېر غوړ'],
  ['ماء دافئ للعجين', 'د خمیر لپاره نیمګرمې اوبه'],
  ['سكر أبيض للخميرة', 'د خمیر لپاره سپینه بوره'],
  ['جوز هند', 'ناریل'],
  ['شربات', 'شربت'],
  ['خروب مجروش قطع صغيرة', 'د خروب کوچنۍ ټوټې'],
  ['سكر أبيض للكرملة', 'د کارامیل لپاره سپینه بوره'],
  ['ماء نقي', 'پاکې اوبه'],
  ['بصل', 'پیاز'],
  ['ثوم', 'اوږه'],
  ['طماطم', 'رومي'],
  ['لحم مفروم', 'قیمه'],
  ['لحم', 'غوښه'],
  ['دجاج', 'مرغ'],
  ['أرانب', 'خرګوش'],
  ['سمك', 'کب'],
  ['جمبري', 'میګو'],
  ['كاليماري', 'کالاماري'],
  ['أرز', 'وریژه'],
  ['مكرونة', 'ماکاروني'],
  ['بطاطس', 'کچالو'],
  ['باذنجان', 'بادنجان'],
  ['عدس', 'عدس'],
  ['ملوخية', 'ملوخیه'],
  ['فول', 'باقلاوه'],
  ['حمص', 'نخود'],
  ['دقيق', 'اوړه'],
  ['سميد', 'سوجي'],
  ['نشا', 'نشاسته'],
  ['سمن بلدي', 'کورنی غښ'],
  ['سمن', 'غښ'],
  ['زيت', 'غوړ'],
  ['ملح', 'مالګه'],
  ['فلفل أسود', 'تور مرچ'],
  ['كمون', 'زیره'],
  ['كزبرة', 'ګشنیز'],
  ['قرفة', 'دارچین'],
  ['سكر', 'بوره'],
  ['ليمون', 'لیمو'],
  ['خل', 'سرکه'],
  ['ماء', 'اوبه']
];

const INGREDIENT_TERMS_HE: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'שורש סבונית טחון'],
  ['خميرة بيرة طبيعية', 'שמרי בירה טריים'],
  ['شربات بارد كثيف وجوز هند', 'סירופ קר סמיך וקוקוס'],
  ['زيت غزير للقلي على مرحلتين', 'שמן בשפע לטיגון'],
  ['ماء دافئ للعجين', 'מים פושרים לבצק'],
  ['سكر أبيض للخميرة', 'סוכר לבן לשמרים'],
  ['جوز هند', 'קוקוס'],
  ['شربات', 'סירופ'],
  ['خروب مجروش قطع صغيرة', 'חרובים קצוצים'],
  ['سكر أبيض للكرملة', 'סוכר לבן לקירמול'],
  ['ماء نقي', 'מים נקיים'],
  ['بصل', 'בצל'],
  ['ثوم', 'שום'],
  ['طماطم', 'עגבניות'],
  ['لحم مفروم', 'בשר טחון'],
  ['لحم', 'בשר'],
  ['دجاج', 'עוף'],
  ['أرانب', 'ארנבות'],
  ['سمك', 'דגים'],
  ['جمبري', 'שרימפס'],
  ['كاليماري', 'קלמארי'],
  ['أرز', 'אורז'],
  ['مكرونة', 'פסטה'],
  ['بطاطس', 'תפוחי אדמה'],
  ['باذنجان', 'חצילים'],
  ['عدس', 'עדשים'],
  ['ملوخية', 'מלוחייה'],
  ['فول', 'פול'],
  ['حمص', 'חומוס'],
  ['دقيق', 'קמח'],
  ['سميد', 'סולת'],
  ['نشا', 'עמילן'],
  ['سمن بلدي', 'חמאה מזוקקת ביתית'],
  ['سمن', 'גהי'],
  ['زيت', 'שמן'],
  ['ملح', 'מלח'],
  ['فلفل أسود', 'פלפל שחור'],
  ['كمون', 'כמון'],
  ['كزبرة', 'כוסברה'],
  ['قرفة', 'קינמון'],
  ['سكر', 'סוכר'],
  ['ليمون', 'לימון'],
  ['خل', 'חומץ'],
  ['ماء', 'מים']
];

const INGREDIENT_TERMS_PL: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'mielony korzeń mydlnicy'],
  ['خميرة بيرة طبيعية', 'świeże drożdże piwne'],
  ['شربات بارد كثيف وجوز هند', 'zimny gęsty syrop i kokos'],
  ['زيت غزير للقلي على مرحلتين', 'duża ilość oleju do smażenia'],
  ['ماء دافئ للعجين', 'letnia woda do ciasta'],
  ['سكر أبيض للخميرة', 'biały cukier do drożdży'],
  ['جوز هند', 'kokos'],
  ['شربات', 'syrop'],
  ['خروب مجروش قطع صغيرة', 'posiekany chleb świętojański'],
  ['سكر أبيض للكرملة', 'biały cukier do karmelizacji'],
  ['ماء نقي', 'czysta woda'],
  ['بصل', 'cebula'],
  ['ثوم', 'czosnek'],
  ['طماطم', 'pomidory'],
  ['لحم مفروم', 'mięso mielone'],
  ['لحم', 'mięso'],
  ['دجاج', 'kurczak'],
  ['أرانب', 'króliki'],
  ['سمك', 'ryby'],
  ['جمبري', 'krewetki'],
  ['كاليماري', 'kalmary'],
  ['أرز', 'ryż'],
  ['مكرونة', 'makaron'],
  ['بطاطس', 'ziemniaki'],
  ['باذنجان', 'bakłażan'],
  ['عدس', 'soczewica'],
  ['ملوخية', 'melochia'],
  ['فول', 'bób'],
  ['حمص', 'ciecierzyca'],
  ['دقيق', 'mąka'],
  ['سميد', 'kasza manna'],
  ['نشا', 'skrobia'],
  ['سمن بلدي', 'domowe masło klarowane'],
  ['سمن', 'ghee'],
  ['زيت', 'olej'],
  ['ملح', 'sól'],
  ['فلفل أسود', 'czarny pieprz'],
  ['كمون', 'kminek'],
  ['كزبرة', 'kolendra'],
  ['قرفة', 'cynamon'],
  ['سكر', 'cukier'],
  ['ليمون', 'cytryna'],
  ['خل', 'ocet'],
  ['ماء', 'woda']
];

const INGREDIENT_TERMS_SV: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'mald såpnejsrot'],
  ['خميرة بيرة طبيعية', 'färsk öljäst'],
  ['شربات بارد كثيف وجوز هند', 'kall tjock sirap och kokos'],
  ['زيت غزير للقلي على مرحلتين', 'rikligt med olja för stekning'],
  ['ماء دافئ للعجين', 'ljummet vatten till degen'],
  ['سكر أبيض للخميرة', 'vitt socker till jästen'],
  ['جوز هند', 'kokos'],
  ['شربات', 'sirap'],
  ['خروب مجروش قطع صغيرة', 'hackat johannesbröd'],
  ['سكر أبيض للكرملة', 'vitt socker för karamellisering'],
  ['ماء نقي', 'rent vatten'],
  ['بصل', 'lök'],
  ['ثوم', 'vitlök'],
  ['طماطم', 'tomater'],
  ['لحم مفروم', 'köttfärs'],
  ['لحم', 'kött'],
  ['دجاج', 'kyckling'],
  ['أرانب', 'kaniner'],
  ['سمك', 'fisk'],
  ['جمبري', 'räkor'],
  ['كاليماري', 'bläckfisk'],
  ['أرز', 'ris'],
  ['مكرونة', 'pasta'],
  ['بطاطس', 'potatis'],
  ['باذنجان', 'aubergine'],
  ['عدس', 'linser'],
  ['ملوخية', 'molokhia'],
  ['فول', 'bondbönor'],
  ['حمص', 'kikärter'],
  ['دقيق', 'mjöl'],
  ['سميد', 'mannagryn'],
  ['نشا', 'stärkelse'],
  ['سمن بلدي', 'hemmagjort ghee'],
  ['سمن', 'ghee'],
  ['زيت', 'olja'],
  ['ملح', 'salt'],
  ['فلفل أسود', 'svartpeppar'],
  ['كمون', 'spiskummin'],
  ['كزبرة', 'koriander'],
  ['قرفة', 'kanel'],
  ['سكر', 'socker'],
  ['ليمون', 'citron'],
  ['خل', 'ättika'],
  ['ماء', 'vatten']
];

const INGREDIENT_TERMS_TE: Array<[string, string]> = [
  ['عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)', 'దంచిన సపోనరియా వేరు'],
  ['خميرة بيرة طبيعية', 'తాజా బ్రూయర్స్ ఈస్ట్'],
  ['شربات بارد كثيف وجوز هند', 'చల్లని గట్టి పాకం మరియు కొబ్బరి'],
  ['زيت غزير للقلي على مرحلتين', 'డీప్ ఫ్రై నూనె'],
  ['ماء دافئ للعجين', 'పిండి కోసం గోరువెచ్చని నీరు'],
  ['سكر أبيض للخميرة', 'ఈస్ట్ కోసం తెల్ల చక్కెర'],
  ['جوز هند', 'కొబ్బరి'],
  ['شربات', 'పాకం'],
  ['خروب مجروش قطع صغيرة', 'చిన్న చిన్న నూరిన క్యారోబ్ ముక్కలు'],
  ['سكر أبيض للكرملة', 'కారమెల్ చేయడానికి తెల్ల చక్కెర'],
  ['ماء نقي', 'శుద్ధమైన నీరు'],
  ['بصل', 'ఉల్లిపాయ'],
  ['ثوم', 'వెల్లుల్లి'],
  ['طماطم', 'టమాటా'],
  ['لحم مفروم', 'కీమా'],
  ['لحم', 'మాంసం'],
  ['دجاج', 'కోడి'],
  ['أرانب', 'కుందేలు'],
  ['سمك', 'చేప'],
  ['جمبري', 'రొయ్యలు'],
  ['كاليماري', 'కాలమారి'],
  ['أرز', 'బియ్యం'],
  ['مكرونة', 'మెకరోని'],
  ['بطاطس', 'బంగాళాదుంప'],
  ['باذنجان', 'వంకాయ'],
  ['عدس', 'మసూర్ పప్పు'],
  ['ملوخية', 'మొలోఖియా'],
  ['فول', 'చిక్కుడు గింజలు'],
  ['حمص', 'శనగలు'],
  ['دقيق', 'గోధుమ పిండి'],
  ['سميد', 'సెమోలినా (రవ్వ)'],
  ['نشا', 'కార్న్ స్టార్చ్'],
  ['سمن بلدي', 'ఈజిప్షియన్ బలది నెయ్యి'],
  ['سمن', 'నెయ్యి'],
  ['زيت', 'నూనె'],
  ['ملح', 'ఉప్పు'],
  ['فلفل أسود', 'మిరియాలు'],
  ['كمون', 'జీలకర్ర'],
  ['كزبرة', 'కొత్తిమీర'],
  ['قرفة', 'దాల్చినచెక్క'],
  ['سكر', 'చక్కెర'],
  ['ليمون', 'నిమ్మకాయ'],
  ['خل', 'వినిగర్'],
  ['ماء', 'నీరు']
];


export function getLocalizedPhase(phase: string, lang: SupportedLanguage): string {
  if (isArabicLocale(lang)) {
    return {
      prep: 'تحضير',
      cook: 'طهو',
      finish: 'تقديم',
      alternative: 'طريقة بديلة'
    }[phase] || phase;
  }

  if (lang === 'fr') {
    return {
      prep: 'Préparation',
      cook: 'Cuisson',
      finish: 'Finition',
      alternative: 'Méthode alternative'
    }[phase] || phase;
  }

  if (lang === 'es') {
    return {
      prep: 'Preparación',
      cook: 'Cocción',
      finish: 'Presentación',
      alternative: 'Método alternativo'
    }[phase] || phase;
  }

  if (lang === 'ja') {
    return {
      prep: '下ごしらえ',
      cook: '調理',
      finish: '仕上げ',
      alternative: '代替の作り方'
    }[phase] || phase;
  }

  if (lang === 'hi') {
    return {
      prep: 'तैयारी',
      cook: 'पकाना',
      finish: 'परोसना',
      alternative: 'वैकल्पिक तरीका'
    }[phase] || phase;
  }

  if (lang === 'pt') {
    return {
      prep: 'Preparo',
      cook: 'Cozimento',
      finish: 'Finalização',
      alternative: 'Método alternativo'
    }[phase] || phase;
  }

  if (lang === 'ru') {
    return {
      prep: 'Подготовка',
      cook: 'Приготовление',
      finish: 'Подача',
      alternative: 'Альтернативный способ'
    }[phase] || phase;
  }

  if (lang === 'zh') {
    return {
      prep: '准备',
      cook: '烹饪',
      finish: '装盘',
      alternative: '替代做法'
    }[phase] || phase;
  }

  if (lang === 'de') {
    return {
      prep: 'Zubereitung',
      cook: 'Kochen',
      finish: 'Anrichten',
      alternative: 'Alternative Methode'
    }[phase] || phase;
  }

  if (lang === 'ur') {
    return {
      prep: 'تیاری',
      cook: 'پکانا',
      finish: 'پیش کرنا',
      alternative: 'متبادل طریقہ'
    }[phase] || phase;
  }

  if (lang === 'fa') {
    return {
      prep: 'آماده‌سازی',
      cook: 'پخت',
      finish: 'سرو',
      alternative: 'روش جایگزین'
    }[phase] || phase;
  }

  if (lang === 'ko') {
    return {
      prep: '준비',
      cook: '조리',
      finish: '마무리',
      alternative: '다른 방법'
    }[phase] || phase;
  }

  if (lang === 'sw') {
    return {
      prep: 'Maandalizi',
      cook: 'Kupika',
      finish: 'Kupakua',
      alternative: 'Njia mbadala'
    }[phase] || phase;
  }

  if (lang === 'id') {
    return {
      prep: 'Persiapan',
      cook: 'Memasak',
      finish: 'Penyajian',
      alternative: 'Cara alternatif'
    }[phase] || phase;
  }

  if (lang === 'ku') {
    return {
      prep: 'Amadekirin',
      cook: 'Pijandin',
      finish: 'Pêşkêşkirin',
      alternative: 'Rêbaza alternatîf'
    }[phase] || phase;
  }

  if (lang === 'tr') {
    return {
      prep: 'Hazırlık',
      cook: 'Pişirme',
      finish: 'Servis',
      alternative: 'Alternatif yöntem'
    }[phase] || phase;
  }

  if (lang === 'nl') {
    return {
      prep: 'Voorbereiding',
      cook: 'Bereiding',
      finish: 'Afwerken',
      alternative: 'Alternatieve methode'
    }[phase] || phase;
  }

  if (lang === 'ps') {
    return {
      prep: 'چمتووالی',
      cook: 'پخلی',
      finish: 'وړاندې کول',
      alternative: 'بله طریقه'
    }[phase] || phase;
  }

  if (lang === 'he') {
    return {
      prep: 'הכנה',
      cook: 'בישול',
      finish: 'הגשה',
      alternative: 'שיטה חלופית'
    }[phase] || phase;
  }

  if (lang === 'pl') {
    return {
      prep: 'Przygotowanie',
      cook: 'Gotowanie',
      finish: 'Podanie',
      alternative: 'Metoda alternatywna'
    }[phase] || phase;
  }

  if (lang === 'sv') {
    return {
      prep: 'Förberedelse',
      cook: 'Tillagning',
      finish: 'Servering',
      alternative: 'Alternativ metod'
    }[phase] || phase;
  }

  if (lang === 'te') {
    return {
      prep: 'ముందు తయారీ',
      cook: 'వంట',
      finish: 'వడ్డింపు',
      alternative: 'ప్రత్యామ్నాయ పద్ధతి'
    }[phase] || phase;
  }

  return {
    prep: 'Preparation',
    cook: 'Cooking',
    finish: 'Finishing',
    alternative: 'Alternative method'
  }[phase] || phase;
}

const ARABIC_DIGITS: Record<string, string> = {
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9'
};

const MEASUREMENT_REPLACEMENTS_EN: Array<[string, string]> = [
  ['دقائق', 'mins'],
  ['دقيقة', 'min'],
  ['ساعات', 'hrs'],
  ['ساعة', 'hr'],
  ['أكواب', 'cups'],
  ['كوب', 'cup'],
  ['قطع صغيرة', 'small pieces'],
  ['خروب', 'carob'],
  ['ملاعق كبيرة', 'tbsp'],
  ['ملعقة كبيرة', 'tbsp'],
  ['ملاعق صغيرة', 'tsp'],
  ['ملعقة صغيرة', 'tsp'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'liter'],
  ['نصف', 'half'],
  ['ربع', 'quarter'],
  ['حسب الرغبة', 'to taste'],
  ['أفراد', 'servings'],
  ['أشخاص', 'people'],
  ['شخص', 'person'],
  ['إلى', 'to'],
  ['من', 'from']
];

const MEASUREMENT_REPLACEMENTS_FR: Array<[string, string]> = [
  ['دقائق', 'min'],
  ['دقيقة', 'min'],
  ['ساعات', 'h'],
  ['ساعة', 'h'],
  ['أكواب', 'tasses'],
  ['كوب', 'tasse'],
  ['قطع صغيرة', 'petits morceaux'],
  ['خروب', 'caroube'],
  ['ملاعق كبيرة', 'c. à soupe'],
  ['ملعقة كبيرة', 'c. à soupe'],
  ['ملاعق صغيرة', 'c. à café'],
  ['ملعقة صغيرة', 'c. à café'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'litre'],
  ['نصف', 'demi'],
  ['ربع', 'quart'],
  ['حسب الرغبة', 'selon le goût'],
  ['أفراد', 'portions'],
  ['أشخاص', 'personnes'],
  ['شخص', 'personne'],
  ['إلى', 'à'],
  ['من', 'de']
];

const MEASUREMENT_REPLACEMENTS_ES: Array<[string, string]> = [
  ['دقائق', 'min'],
  ['دقيقة', 'min'],
  ['ساعات', 'h'],
  ['ساعة', 'h'],
  ['أكواب', 'tazas'],
  ['كوب', 'taza'],
  ['قطع صغيرة', 'trozos pequeños'],
  ['خروب', 'algarroba'],
  ['ملاعق كبيرة', 'cdas'],
  ['ملعقة كبيرة', 'cda'],
  ['ملاعق صغيرة', 'cdtas'],
  ['ملعقة صغيرة', 'cdta'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'litro'],
  ['نصف', 'medio'],
  ['ربع', 'cuarto'],
  ['حسب الرغبة', 'al gusto'],
  ['أفراد', 'porciones'],
  ['أشخاص', 'personas'],
  ['شخص', 'persona'],
  ['إلى', 'a'],
  ['من', 'de']
];

const MEASUREMENT_REPLACEMENTS_JA: Array<[string, string]> = [
  ['دقائق', '分'],
  ['دقيقة', '分'],
  ['ساعات', '時間'],
  ['ساعة', '時間'],
  ['أكواب', 'カップ'],
  ['كوب', 'カップ'],
  ['قطع صغيرة', '小さく切ったもの'],
  ['خروب', 'キャロブ'],
  ['ملاعق كبيرة', '大さじ'],
  ['ملعقة كبيرة', '大さじ'],
  ['ملاعق صغيرة', '小さじ'],
  ['ملعقة صغيرة', '小さじ'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'リットル'],
  ['نصف', '半分'],
  ['ربع', '四分の一'],
  ['حسب الرغبة', 'お好みで'],
  ['أفراد', '人分'],
  ['أشخاص', '人'],
  ['شخص', '人'],
  ['إلى', '〜'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_HI: Array<[string, string]> = [
  ['دقائق', 'मिनट'],
  ['دقيقة', 'मिनट'],
  ['ساعات', 'घंटे'],
  ['ساعة', 'घंटा'],
  ['أكواب', 'कप'],
  ['كوب', 'कप'],
  ['قطع صغيرة', 'छोटे टुकड़े'],
  ['خروب', 'खरूब'],
  ['ملاعق كبيرة', 'बड़े चम्मच'],
  ['ملعقة كبيرة', 'बड़ा चम्मच'],
  ['ملاعق صغيرة', 'छोटे चम्मच'],
  ['ملعقة صغيرة', 'छोटा चम्मच'],
  ['كيلوغرام', 'किलोग्राम'],
  ['كيلو', 'किलो'],
  ['جرام', 'ग्राम'],
  ['غرام', 'ग्राम'],
  ['لتر', 'लीटर'],
  ['نصف', 'आधा'],
  ['ربع', 'चौथाई'],
  ['حسب الرغبة', 'स्वादानुसार'],
  ['أفراد', 'लोगों के लिए'],
  ['أشخاص', 'व्यक्ति'],
  ['شخص', 'व्यक्ति'],
  ['إلى', 'से'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_PT: Array<[string, string]> = [
  ['دقائق', 'min'],
  ['دقيقة', 'min'],
  ['ساعات', 'h'],
  ['ساعة', 'h'],
  ['أكواب', 'xícaras'],
  ['كوب', 'xícara'],
  ['قطع صغيرة', 'pedacinhos'],
  ['خروب', 'alfarroba'],
  ['ملاعق كبيرة', 'colheres de sopa'],
  ['ملعقة كبيرة', 'colher de sopa'],
  ['ملاعق صغيرة', 'colheres de chá'],
  ['ملعقة صغيرة', 'colher de chá'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'litro'],
  ['نصف', 'meio'],
  ['ربع', 'quarto'],
  ['حسب الرغبة', 'a gosto'],
  ['أفراد', 'porções'],
  ['أشخاص', 'pessoas'],
  ['شخص', 'pessoa'],
  ['إلى', 'a'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_RU: Array<[string, string]> = [
  ['دقائق', 'мин'],
  ['دقيقة', 'мин'],
  ['ساعات', 'ч'],
  ['ساعة', 'ч'],
  ['أكواب', 'стаканов'],
  ['كوب', 'стакан'],
  ['قطع صغيرة', 'маленькие кусочки'],
  ['خروب', 'кэроб'],
  ['ملاعق كبيرة', 'ст. л.'],
  ['ملعقة كبيرة', 'ст. л.'],
  ['ملاعق صغيرة', 'ч. л.'],
  ['ملعقة صغيرة', 'ч. л.'],
  ['كيلوغرام', 'кг'],
  ['كيلو', 'кг'],
  ['جرام', 'г'],
  ['غرام', 'г'],
  ['لتر', 'л'],
  ['نصف', 'половина'],
  ['ربع', 'четверть'],
  ['حسب الرغبة', 'по вкусу'],
  ['أفراد', 'порций'],
  ['أشخاص', 'человек'],
  ['شخص', 'человек'],
  ['إلى', '–'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_ZH: Array<[string, string]> = [
  ['دقائق', '分钟'],
  ['دقيقة', '分钟'],
  ['ساعات', '小时'],
  ['ساعة', '小时'],
  ['أكواب', '杯'],
  ['كوب', '杯'],
  ['قطع صغيرة', '小块'],
  ['خروب', '角豆'],
  ['ملاعق كبيرة', '汤匙'],
  ['ملعقة كبيرة', '汤匙'],
  ['ملاعق صغيرة', '茶匙'],
  ['ملعقة صغيرة', '茶匙'],
  ['كيلوغرام', '千克'],
  ['كيلو', '千克'],
  ['جرام', '克'],
  ['غرام', '克'],
  ['لتر', '升'],
  ['نصف', '半'],
  ['ربع', '四分之一'],
  ['حسب الرغبة', '适量'],
  ['أفراد', '人份'],
  ['أشخاص', '人'],
  ['شخص', '人'],
  ['إلى', '至'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_DE: Array<[string, string]> = [
  ['دقائق', 'Min.'],
  ['دقيقة', 'Min.'],
  ['ساعات', 'Std.'],
  ['ساعة', 'Std.'],
  ['أكواب', 'Tassen'],
  ['كوب', 'Tasse'],
  ['قطع صغيرة', 'kleine Stücke'],
  ['خروب', 'Johannisbrot'],
  ['ملاعق كبيرة', 'EL'],
  ['ملعقة كبيرة', 'EL'],
  ['ملاعق صغيرة', 'TL'],
  ['ملعقة صغيرة', 'TL'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'l'],
  ['نصف', 'halb'],
  ['ربع', 'Viertel'],
  ['حسب الرغبة', 'nach Geschmack'],
  ['أفراد', 'Portionen'],
  ['أشخاص', 'Personen'],
  ['شخص', 'Person'],
  ['إلى', 'bis'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_IT: Array<[string, string]> = [
  ['دقائق', 'min'],
  ['دقيقة', 'min'],
  ['ساعات', 'ore'],
  ['ساعة', 'ora'],
  ['أكواب', 'tazze'],
  ['كوب', 'tazza'],
  ['قطع صغيرة', 'pezzetti'],
  ['خروب', 'carruba'],
  ['ملاعق كبيرة', 'cucchiai'],
  ['ملعقة كبيرة', 'cucchiaio'],
  ['ملاعق صغيرة', 'cucchiaini'],
  ['ملعقة صغيرة', 'cucchiaino'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'l'],
  ['نصف', 'mezzo'],
  ['ربع', 'un quarto'],
  ['حسب الرغبة', 'q.b.'],
  ['أفراد', 'porzioni'],
  ['أشخاص', 'persone'],
  ['شخص', 'persona'],
  ['إلى', 'a'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_EL: Array<[string, string]> = [
  ['دقائق', 'λεπτ.'],
  ['دقيقة', 'λεπτ.'],
  ['ساعات', 'ώρ.'],
  ['ساعة', 'ώρ.'],
  ['أكواب', 'φλιτζάνια'],
  ['كوب', 'φλιτζάνι'],
  ['قطع صغيرة', 'μικρά κομμάτια'],
  ['خروب', 'χαρούπι'],
  ['ملاعق كبيرة', 'κ.σ.'],
  ['ملعقة كبيرة', 'κ.σ.'],
  ['ملاعق صغيرة', 'κ.γ.'],
  ['ملعقة صغيرة', 'κ.γ.'],
  ['كيلوغرام', 'κιλό'],
  ['كيلو', 'κιλό'],
  ['جرام', 'γρ.'],
  ['غرام', 'γρ.'],
  ['لتر', 'λίτρο'],
  ['نصف', 'μισό'],
  ['ربع', 'τέταρτο'],
  ['حسب الرغبة', 'κατά βούληση'],
  ['أفراد', 'μερίδες'],
  ['أشخاص', 'άτομα'],
  ['شخص', 'άτομο'],
  ['إلى', 'έως'],
  ['من', '']
];

// Urdu keeps more of the Arabic amount wording than the other languages
// (it has no Latin-style abbreviations to fall back on), so this table also
// covers the common counted items like onions, eggs and garlic cloves.
const MEASUREMENT_REPLACEMENTS_UR: Array<[string, string]> = [
  ['دقائق', 'منٹ'],
  ['دقيقة', 'منٹ'],
  ['ساعات', 'گھنٹے'],
  ['ساعة', 'گھنٹہ'],
  ['كوب كبير', 'بڑا کپ'],
  ['أكواب', 'کپ'],
  ['كوب', 'کپ'],
  ['قطع صغيرة', 'چھوٹے ٹکڑے'],
  ['خروب', 'خروب'],
  ['ملاعق كبيرة', 'کھانے کے چمچ'],
  ['ملعقة كبيرة', 'کھانے کا چمچ'],
  ['ملاعق صغيرة', 'چائے کے چمچ'],
  ['ملعقة صغيرة', 'چائے کا چمچ'],
  ['ملعقة شاي', 'چائے کا چمچ'],
  ['ملاعق', 'چمچ'],
  ['ملعقة', 'چمچ'],
  ['كيلوغرام', 'کلو'],
  ['كيلو', 'کلو'],
  ['جرام', 'گرام'],
  ['غرام', 'گرام'],
  ['لتر', 'لیٹر'],
  ['نصف', 'آدھا'],
  ['ربع', 'چوتھائی'],
  ['حسب الرغبة', 'حسبِ ذائقہ'],
  ['حسب الحاجة', 'حسبِ ضرورت'],
  ['للتزيين', 'سجاوٹ کے لیے'],
  ['للتحلية', 'میٹھا کرنے کے لیے'],
  ['للحشو', 'بھرنے کے لیے'],
  ['للقلي', 'تلنے کے لیے'],
  ['للوجه', 'اوپر لگانے کے لیے'],
  ['للقالب', 'سانچے کے لیے'],
  ['للتغليف', 'لپیٹنے کے لیے'],
  ['تتبيل', 'میرینیٹ'],
  ['تبريد', 'ٹھنڈا کرنا'],
  ['تجميد', 'فریز کرنا'],
  ['تخمير', 'خمیر اٹھنا'],
  ['قليل من كل', 'ہر ایک تھوڑا سا'],
  ['قليل', 'تھوڑا سا'],
  ['غزير', 'وافر مقدار'],
  ['رشة', 'چٹکی'],
  ['حوالي', 'تقریباً'],
  ['بصلة متوسطة', 'درمیانہ پیاز'],
  ['بصلة كبيرة', 'بڑا پیاز'],
  ['بصلة صغيرة', 'چھوٹا پیاز'],
  ['بصلات', 'پیاز'],
  ['بصلة', 'پیاز'],
  ['رأس ثوم', 'لہسن کی گٹھی'],
  ['فصوص', 'جوے'],
  ['فص', 'جوا'],
  ['بيضات', 'انڈے'],
  ['بيضة', 'انڈا'],
  ['ثمرات', 'عدد'],
  ['ثمرة', 'عدد'],
  ['حبة', 'عدد'],
  ['قطعة', 'ٹکڑا'],
  ['قطع', 'ٹکڑے'],
  ['دجاجة', 'مرغی'],
  ['جزرة', 'گاجر'],
  ['عصير', 'رس'],
  ['ليمونة', 'لیموں'],
  ['علبة', 'ڈبہ'],
  ['حزمة', 'گڈی'],
  ['رغيف', 'روٹی'],
  ['أرغفة', 'روٹیاں'],
  ['باكو', 'پیکٹ'],
  ['لفة', 'رول'],
  ['شرائح', 'قتلے'],
  ['سندوتشات', 'سینڈوچ'],
  ['أفراد', 'افراد'],
  ['فرد', 'فرد'],
  ['أشخاص', 'افراد'],
  ['شخص', 'فرد'],
  ['أو', 'یا'],
  ['إلى', 'سے'],
  ['من', '']
];

// Persian, like Urdu, keeps the counted items (onions, eggs, garlic cloves)
// in words since the amounts stay in the Arabic script.
const MEASUREMENT_REPLACEMENTS_FA: Array<[string, string]> = [
  ['دقائق', 'دقیقه'],
  ['دقيقة', 'دقیقه'],
  ['ساعات', 'ساعت'],
  ['ساعة', 'ساعت'],
  ['كوب كبير', 'پیمانه بزرگ'],
  ['أكواب', 'پیمانه'],
  ['كوب', 'پیمانه'],
  ['قطع صغيرة', 'تکه‌های کوچک'],
  ['خروب', 'خرنوب'],
  ['ملاعق كبيرة', 'قاشق غذاخوری'],
  ['ملعقة كبيرة', 'قاشق غذاخوری'],
  ['ملاعق صغيرة', 'قاشق چای‌خوری'],
  ['ملعقة صغيرة', 'قاشق چای‌خوری'],
  ['ملعقة شاي', 'قاشق چای‌خوری'],
  ['ملاعق', 'قاشق'],
  ['ملعقة', 'قاشق'],
  ['كيلوغرام', 'کیلو'],
  ['كيلو', 'کیلو'],
  ['جرام', 'گرم'],
  ['غرام', 'گرم'],
  ['لتر', 'لیتر'],
  ['نصف', 'نصف'],
  ['ربع', 'یک‌چهارم'],
  ['حسب الرغبة', 'به میزان لازم'],
  ['حسب الحاجة', 'به اندازه نیاز'],
  ['للتزيين', 'برای تزئین'],
  ['للتحلية', 'برای شیرین کردن'],
  ['للحشو', 'برای پرکردن'],
  ['للقلي', 'برای سرخ کردن'],
  ['للوجه', 'برای روی آن'],
  ['للقالب', 'برای قالب'],
  ['للتغليف', 'برای پوشاندن'],
  ['تتبيل', 'مرینیت'],
  ['تبريد', 'خنک کردن'],
  ['تجميد', 'منجمد کردن'],
  ['تخمير', 'ور آمدن'],
  ['قليل من كل', 'از هر کدام کمی'],
  ['قليل', 'کمی'],
  ['غزير', 'به مقدار فراوان'],
  ['رشة', 'یک پنس'],
  ['حوالي', 'حدود'],
  ['بصلة متوسطة', 'پیاز متوسط'],
  ['بصلة كبيرة', 'پیاز بزرگ'],
  ['بصلة صغيرة', 'پیاز کوچک'],
  ['بصلات', 'پیاز'],
  ['بصلة', 'پیاز'],
  ['رأس ثوم', 'بوته سیر'],
  ['فصوص', 'حبه'],
  ['فص', 'حبه'],
  ['بيضات', 'تخم‌مرغ'],
  ['بيضة', 'تخم‌مرغ'],
  ['ثمرات', 'عدد'],
  ['ثمرة', 'عدد'],
  ['حبة', 'عدد'],
  ['قطعة', 'تکه'],
  ['قطع', 'تکه'],
  ['دجاجة', 'مرغ'],
  ['جزرة', 'هویج'],
  ['عصير', 'آب'],
  ['ليمونة', 'لیمو'],
  ['علبة', 'قوطی'],
  ['حزمة', 'دسته'],
  ['رغيف', 'نان'],
  ['أرغفة', 'نان'],
  ['باكو', 'بسته'],
  ['لفة', 'رول'],
  ['شرائح', 'ورقه'],
  ['سندوتشات', 'ساندویچ'],
  ['أفراد', 'نفر'],
  ['فرد', 'نفر'],
  ['أشخاص', 'نفر'],
  ['شخص', 'نفر'],
  ['أو', 'یا'],
  ['إلى', 'تا'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_TR: Array<[string, string]> = [
  ['دقائق', 'dk'],
  ['دقيقة', 'dk'],
  ['ساعات', 'saat'],
  ['ساعة', 'saat'],
  ['أكواب', 'su bardağı'],
  ['كوب', 'su bardağı'],
  ['قطع صغيرة', 'küçük parça'],
  ['خروب', 'keçiboynuzu'],
  ['ملاعق كبيرة', 'yemek kaşığı'],
  ['ملعقة كبيرة', 'yemek kaşığı'],
  ['ملاعق صغيرة', 'çay kaşığı'],
  ['ملعقة صغيرة', 'çay kaşığı'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'litre'],
  ['نصف', 'yarım'],
  ['ربع', 'çeyrek'],
  ['حسب الرغبة', 'damak zevkine göre'],
  ['أفراد', 'kişilik'],
  ['أشخاص', 'kişi'],
  ['شخص', 'kişi'],
  ['إلى', '–'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_KU: Array<[string, string]> = [
  ['دقائق', 'deq'],
  ['دقيقة', 'deq'],
  ['ساعات', 'saet'],
  ['ساعة', 'saet'],
  ['أكواب', 'tas'],
  ['كوب', 'tas'],
  ['قطع صغيرة', 'perçeyên biçûk'],
  ['خروب', 'xernûb'],
  ['ملاعق كبيرة', 'kevçiyê mezin'],
  ['ملعقة كبيرة', 'kevçiyê mezin'],
  ['ملاعق صغيرة', 'kevçiyê biçûk'],
  ['ملعقة صغيرة', 'kevçiyê biçûk'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'lître'],
  ['نصف', 'nîv'],
  ['ربع', 'çarîk'],
  ['حسب الرغبة', 'li gorî dilxwaziyê'],
  ['أفراد', 'kes'],
  ['أشخاص', 'kes'],
  ['شخص', 'kes'],
  ['إلى', '–'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_ID: Array<[string, string]> = [
  ['دقائق', 'menit'],
  ['دقيقة', 'menit'],
  ['ساعات', 'jam'],
  ['ساعة', 'jam'],
  ['أكواب', 'cangkir'],
  ['كوب', 'cangkir'],
  ['قطع صغيرة', 'potongan kecil'],
  ['خروب', 'carob'],
  ['ملاعق كبيرة', 'sdm'],
  ['ملعقة كبيرة', 'sdm'],
  ['ملاعق صغيرة', 'sdt'],
  ['ملعقة صغيرة', 'sdt'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'liter'],
  ['نصف', 'setengah'],
  ['ربع', 'seperempat'],
  ['حسب الرغبة', 'secukupnya'],
  ['أفراد', 'porsi'],
  ['أشخاص', 'orang'],
  ['شخص', 'orang'],
  ['إلى', '–'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_SW: Array<[string, string]> = [
  ['دقائق', 'dakika'],
  ['دقيقة', 'dakika'],
  ['ساعات', 'saa'],
  ['ساعة', 'saa'],
  ['أكواب', 'vikombe'],
  ['كوب', 'kikombe'],
  ['قطع صغيرة', 'vipande vidogo'],
  ['خروب', 'karobu'],
  ['ملاعق كبيرة', 'vijiko vikubwa'],
  ['ملعقة كبيرة', 'kijiko kikubwa'],
  ['ملاعق صغيرة', 'vijiko vidogo'],
  ['ملعقة صغيرة', 'kijiko kidogo'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'lita'],
  ['نصف', 'nusu'],
  ['ربع', 'robo'],
  ['حسب الرغبة', 'kwa kadiri upendavyo'],
  ['أفراد', 'watu'],
  ['أشخاص', 'watu'],
  ['شخص', 'mtu'],
  ['إلى', '–'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_KO: Array<[string, string]> = [
  ['دقائق', '분'],
  ['دقيقة', '분'],
  ['ساعات', '시간'],
  ['ساعة', '시간'],
  ['أكواب', '컵'],
  ['كوب', '컵'],
  ['قطع صغيرة', '작은 조각'],
  ['خروب', '캐롭'],
  ['ملاعق كبيرة', '큰술'],
  ['ملعقة كبيرة', '큰술'],
  ['ملاعق صغيرة', '작은술'],
  ['ملعقة صغيرة', '작은술'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'L'],
  ['نصف', '1/2'],
  ['ربع', '1/4'],
  ['حسب الرغبة', '기호에 따라'],
  ['أفراد', '인분'],
  ['أشخاص', '인분'],
  ['شخص', '인분'],
  ['إلى', '–'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_NL: Array<[string, string]> = [
  ['دقائق', 'min.'],
  ['دقيقة', 'min.'],
  ['ساعات', 'uur'],
  ['ساعة', 'uur'],
  ['أكواب', 'kopjes'],
  ['كوب', 'kopje'],
  ['قطع صغيرة', 'kleine stukjes'],
  ['خروب', 'johannesbrood'],
  ['ملاعق كبيرة', 'el'],
  ['ملعقة كبيرة', 'el'],
  ['ملاعق صغيرة', 'tl'],
  ['ملعقة صغيرة', 'tl'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'l'],
  ['نصف', 'half'],
  ['ربع', 'kwart'],
  ['حسب الرغبة', 'naar smaak'],
  ['أفراد', 'porties'],
  ['أشخاص', 'personen'],
  ['شخص', 'persoon'],
  ['إلى', 'tot'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_PS: Array<[string, string]> = [
  ['دقائق', 'دقیقې'],
  ['دقيقة', 'دقیقه'],
  ['ساعات', 'ساعتونه'],
  ['ساعة', 'ساعت'],
  ['كوب كبير', 'لویه پیاله'],
  ['أكواب', 'پیالې'],
  ['كوب', 'پیاله'],
  ['قطع صغيرة', 'کوچنۍ ټوټې'],
  ['خروب', 'خروب'],
  ['ملاعق كبيرة', 'د خواړو چمچې'],
  ['ملعقة كبيرة', 'د خواړو چمچه'],
  ['ملاعق صغيرة', 'د چای چمچې'],
  ['ملعقة صغيرة', 'د چای چمچه'],
  ['ملعقة شاي', 'د چای چمچه'],
  ['ملاعق', 'چمچې'],
  ['ملعقة', 'چمچه'],
  ['كيلوغرام', 'کیلو'],
  ['كيلو', 'کیلو'],
  ['جرام', 'ګرام'],
  ['غرام', 'ګرام'],
  ['لتر', 'لیتر'],
  ['نصف', 'نیمه'],
  ['ربع', 'څلورمه'],
  ['حسب الرغبة', 'د خوند له مخې'],
  ['حسب الحاجة', 'د اړتیا له مخې'],
  ['للتزيين', 'د ښکلا لپاره'],
  ['للتحلية', 'د خوږولو لپاره'],
  ['للحشو', 'د ډکولو لپاره'],
  ['للقلي', 'د تللو لپاره'],
  ['للوجه', 'د پاس لپاره'],
  ['للقالب', 'د بڼې لپاره'],
  ['للتغليف', 'د لپېټولو لپاره'],
  ['تتبيل', 'میرینیټ'],
  ['تبريد', 'یخ کول'],
  ['تجميد', 'کنګل کول'],
  ['تخمير', 'د خمیر پورته کېدل'],
  ['قليل من كل', 'له هرې یوې لږ'],
  ['قليل', 'لږ'],
  ['غزير', 'ډېره اندازه'],
  ['رشة', 'ټوچ'],
  ['حوالي', 'نږدې'],
  ['بصلة متوسطة', 'منځنی پیاز'],
  ['بصلة كبيرة', 'لوی پیاز'],
  ['بصلة صغيرة', 'کوچنی پیاز'],
  ['بصلات', 'پیازونه'],
  ['بصلة', 'پیاز'],
  ['رأس ثوم', 'د اوږو ګل'],
  ['فصوص', 'د اوږو جې'],
  ['فص', 'د اوږو جه'],
  ['بيضات', 'هګۍ'],
  ['بيضة', 'هګۍ'],
  ['ثمرات', 'عدد'],
  ['ثمرة', 'عدد'],
  ['حبة', 'دانې'],
  ['قطعة', 'ټوټه'],
  ['قطع', 'ټوټې'],
  ['دجاجة', 'مرغ'],
  ['جزرة', 'ګازره'],
  ['عصير', 'رس'],
  ['ليمونة', 'لیمو'],
  ['علبة', 'قوطي'],
  ['حزمة', 'ډله'],
  ['رغيف', 'ډوډۍ'],
  ['أرغفة', 'ډوډۍ'],
  ['باكو', 'بسته'],
  ['لفة', 'رول'],
  ['شرائح', 'ورقې'],
  ['سندوتشات', 'سینډویچ'],
  ['أفراد', 'کسان'],
  ['فرد', 'کس'],
  ['أشخاص', 'کسان'],
  ['شخص', 'کس'],
  ['أو', 'یا'],
  ['إلى', 'تر'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_HE: Array<[string, string]> = [
  ['دقائق', 'דקות'],
  ['دقيقة', 'דקה'],
  ['ساعات', 'שעות'],
  ['ساعة', 'שעה'],
  ['كوب كبير', 'כוס גדולה'],
  ['أكواب', 'כוסות'],
  ['كوب', 'כוס'],
  ['قطع صغيرة', 'חתיכות קטנות'],
  ['خروب', 'חרוב'],
  ['ملاعق كبيرة', 'כפות'],
  ['ملعقة كبيرة', 'כף'],
  ['ملاعق صغيرة', 'כפיות'],
  ['ملعقة صغيرة', 'כפית'],
  ['ملعقة شاي', 'כפית'],
  ['ملاعق', 'כפות'],
  ['ملعقة', 'כף'],
  ['كيلوغرام', 'ק"ג'],
  ['كيلو', 'ק"ג'],
  ['جرام', 'גרם'],
  ['غرام', 'גרם'],
  ['لتر', 'ליטר'],
  ['نصف', 'חצי'],
  ['ربع', 'רבע'],
  ['حسب الرغبة', 'לפי הטעם'],
  ['حسب الحاجة', 'לפי הצורך'],
  ['للتزيين', 'לקישוט'],
  ['للتحلية', 'להמתקה'],
  ['للحشو', 'למילוי'],
  ['للقلي', 'לטיגון'],
  ['للوجه', 'לציפוי'],
  ['للقالب', 'לתבנית'],
  ['للتغليف', 'לעטיפה'],
  ['تتبيل', 'למרינדה'],
  ['تبريد', 'לקירור'],
  ['تجميد', 'להקפאה'],
  ['تخمير', 'לתפיחה'],
  ['قليل من كل', 'מעט מכל אחד'],
  ['قليل', 'מעט'],
  ['غزير', 'כמות גדולה'],
  ['رشة', 'קורט'],
  ['حوالي', 'בערך'],
  ['بصلة متوسطة', 'בצל בינוני'],
  ['بصلة كبيرة', 'בצל גדול'],
  ['بصلة صغيرة', 'בצל קטן'],
  ['بصلات', 'בצלים'],
  ['بصلة', 'בצל'],
  ['رأس ثوم', 'ראש שום'],
  ['فصوص', 'שיני שום'],
  ['فص', 'שן שום'],
  ['بيضات', 'ביצים'],
  ['بيضة', 'ביצה'],
  ['ثمرات', 'יחידות'],
  ['ثمرة', 'יחידה'],
  ['حبة', 'יחידה'],
  ['قطعة', 'חתיכה'],
  ['قطع', 'חתיכות'],
  ['دجاجة', 'תרנגולת'],
  ['جزرة', 'גזר'],
  ['عصير', 'מיץ'],
  ['ليمونة', 'לימון'],
  ['علبة', 'קופסה'],
  ['حزمة', 'חבילה'],
  ['رغيف', 'כיכר'],
  ['أرغفة', 'כיכרות'],
  ['باكو', 'שקית'],
  ['لفة', 'רול'],
  ['شرائح', 'פרוסות'],
  ['سندوتشات', 'כריכים'],
  ['أفراد', 'סועדים'],
  ['فرد', 'סועד'],
  ['أشخاص', 'סועדים'],
  ['شخص', 'סועד'],
  ['أو', 'או'],
  ['إلى', 'עד'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_PL: Array<[string, string]> = [
  ['دقائق', 'min'],
  ['دقيقة', 'min'],
  ['ساعات', 'godziny'],
  ['ساعة', 'godzina'],
  ['كوب كبير', 'duża szklanka'],
  ['أكواب', 'szklanki'],
  ['كوب', 'szklanka'],
  ['قطع صغيرة', 'małe kawałki'],
  ['خروب', 'chleb świętojański'],
  ['ملاعق كبيرة', 'łyżki'],
  ['ملعقة كبيرة', 'łyżka'],
  ['ملاعق صغيرة', 'łyżeczki'],
  ['ملعقة صغيرة', 'łyżeczka'],
  ['ملعقة شاي', 'łyżeczka'],
  ['ملاعق', 'łyżki'],
  ['ملعقة', 'łyżka'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'litr'],
  ['نصف', 'połowa'],
  ['ربع', 'ćwierć'],
  ['حسب الرغبة', 'według smaku'],
  ['حسب الحاجة', 'według potrzeby'],
  ['للتزيين', 'do dekoracji'],
  ['للتحلية', 'do osłodzenia'],
  ['للحشو', 'do farszu'],
  ['للقلي', 'do smażenia'],
  ['للوجه', 'do posmarowania wierzchu'],
  ['للقالب', 'do formy'],
  ['للتغليف', 'do zawinięcia'],
  ['تتبيل', 'do marynaty'],
  ['تبريد', 'do schłodzenia'],
  ['تجميد', 'do zamrożenia'],
  ['تخمير', 'do wyrośnięcia'],
  ['قليل من كل', 'trochę z każdego'],
  ['قليل', 'trochę'],
  ['غزير', 'obfita ilość'],
  ['رشة', 'szczypta'],
  ['حوالي', 'około'],
  ['بصلة متوسطة', 'średnia cebula'],
  ['بصلة كبيرة', 'duża cebula'],
  ['بصلة صغيرة', 'mała cebula'],
  ['بصلات', 'cebule'],
  ['بصلة', 'cebula'],
  ['رأس ثوم', 'główka czosnku'],
  ['فصوص', 'ząbki czosnku'],
  ['فص', 'ząbek czosnku'],
  ['بيضات', 'jajka'],
  ['بيضة', 'jajko'],
  ['ثمرات', 'sztuki'],
  ['ثمرة', 'sztuka'],
  ['حبة', 'sztuka'],
  ['قطعة', 'kawałek'],
  ['قطع', 'kawałki'],
  ['دجاجة', 'kurczak'],
  ['جزرة', 'marchewka'],
  ['عصير', 'sok'],
  ['ليمونة', 'cytryna'],
  ['علبة', 'puszka'],
  ['حزمة', 'pęczek'],
  ['رغيف', 'chleb'],
  ['أرغفة', 'chleby'],
  ['باكو', 'torebka'],
  ['لفة', 'rolka'],
  ['شرائح', 'plastry'],
  ['سندوتشات', 'kanapki'],
  ['أفراد', 'osoby'],
  ['فرد', 'osoba'],
  ['أشخاص', 'osoby'],
  ['شخص', 'osoba'],
  ['أو', 'lub'],
  ['إلى', 'do'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_SV: Array<[string, string]> = [
  ['دقائق', 'min'],
  ['دقيقة', 'min'],
  ['ساعات', 'timmar'],
  ['ساعة', 'timme'],
  ['كوب كبير', 'stor kopp'],
  ['أكواب', 'koppar'],
  ['كوب', 'kopp'],
  ['قطع صغيرة', 'små bitar'],
  ['خروب', 'johannesbröd'],
  ['ملاعق كبيرة', 'matskedar'],
  ['ملعقة كبيرة', 'matsked'],
  ['ملاعق صغيرة', 'teskedar'],
  ['ملعقة صغيرة', 'tesked'],
  ['ملعقة شاي', 'tesked'],
  ['ملاعق', 'matskedar'],
  ['ملعقة', 'matsked'],
  ['كيلوغرام', 'kg'],
  ['كيلو', 'kg'],
  ['جرام', 'g'],
  ['غرام', 'g'],
  ['لتر', 'liter'],
  ['نصف', 'halv'],
  ['ربع', 'kvarts'],
  ['حسب الرغبة', 'efter smak'],
  ['حسب الحاجة', 'efter behov'],
  ['للتزيين', 'till garnering'],
  ['للتحلية', 'till sötning'],
  ['للحشو', 'till fyllningen'],
  ['للقلي', 'till stekning'],
  ['للوجه', 'till pensling av ytan'],
  ['للقالب', 'till formen'],
  ['للتغليف', 'till inslagning'],
  ['تتبيل', 'till marinaden'],
  ['تبريد', 'för kylning'],
  ['تجميد', 'för frysning'],
  ['تخمير', 'för jäsning'],
  ['قليل من كل', 'lite av varje'],
  ['قليل', 'lite'],
  ['غزير', 'riklig mängd'],
  ['رشة', 'nypa'],
  ['حوالي', 'cirka'],
  ['بصلة متوسطة', 'medelstor lök'],
  ['بصلة كبيرة', 'stor lök'],
  ['بصلة صغيرة', 'liten lök'],
  ['بصلات', 'lökar'],
  ['بصلة', 'lök'],
  ['رأس ثوم', 'vitlöksskalle'],
  ['فصوص', 'vitlöksklyftor'],
  ['فص', 'vitlöksklyfta'],
  ['بيضات', 'ägg'],
  ['بيضة', 'ägg'],
  ['ثمرات', 'stycken'],
  ['ثمرة', 'stycke'],
  ['حبة', 'stycke'],
  ['قطعة', 'bit'],
  ['قطع', 'bitar'],
  ['دجاجة', 'kyckling'],
  ['جزرة', 'morot'],
  ['عصير', 'juice'],
  ['ليمونة', 'citron'],
  ['علبة', 'burk'],
  ['حزمة', 'knippe'],
  ['رغيف', 'bröd'],
  ['أرغفة', 'bröd'],
  ['باكو', 'påse'],
  ['لفة', 'rulle'],
  ['شرائح', 'skivor'],
  ['سندوتشات', 'mackor'],
  ['أفراد', 'personer'],
  ['فرد', 'person'],
  ['أشخاص', 'personer'],
  ['شخص', 'person'],
  ['أو', 'eller'],
  ['إلى', 'till'],
  ['من', '']
];

const MEASUREMENT_REPLACEMENTS_TE: Array<[string, string]> = [
  ['دقائق', 'నిమిషాలు'],
  ['دقيقة', 'నిమిషం'],
  ['ساعات', 'గంటలు'],
  ['ساعة', 'గంట'],
  ['أكواب', 'కప్పులు'],
  ['كوب', 'కప్పు'],
  ['قطع صغيرة', 'చిన్న ముక్కలు'],
  ['خروب', 'క్యారోబ్'],
  ['ملاعق كبيرة', 'టేబుల్ స్పూన్లు'],
  ['ملعقة كبيرة', 'టేబుల్ స్పూన్'],
  ['ملاعق صغيرة', 'టీస్పూన్లు'],
  ['ملعقة صغيرة', 'టీస్పూన్'],
  ['ملعقة شاي', 'టీస్పూన్'],
  ['ملاعق', 'స్పూన్లు'],
  ['ملعقة', 'స్పూన్'],
  ['كيلوغرام', 'కిలో'],
  ['كيلو', 'కిలో'],
  ['جرام', 'గ్రా'],
  ['غرام', 'గ్రా'],
  ['لتر', 'లీటర్'],
  ['نصف', 'సగం'],
  ['ربع', 'పావు'],
  ['حسب الرغبة', 'రుచికి సరిపడా'],
  ['أفراد', 'మందికి'],
  ['أشخاص', 'మందికి'],
  ['شخص', 'మందికి'],
  ['إلى', '–'],
  ['من', '']
];

export function getLocalizedMeasurement(value: string | undefined, lang: SupportedLanguage, kind: 'time' | 'servings' | 'amount'): string | undefined {
  if (!value || isArabicLocale(lang)) return value;

  let translated = value.replace(/[٠-٩]/g, digit => ARABIC_DIGITS[digit] || digit);
  const replacements = lang === 'fr' ? MEASUREMENT_REPLACEMENTS_FR : lang === 'es' ? MEASUREMENT_REPLACEMENTS_ES : lang === 'ja' ? MEASUREMENT_REPLACEMENTS_JA : lang === 'hi' ? MEASUREMENT_REPLACEMENTS_HI : lang === 'pt' ? MEASUREMENT_REPLACEMENTS_PT : lang === 'ru' ? MEASUREMENT_REPLACEMENTS_RU : lang === 'zh' ? MEASUREMENT_REPLACEMENTS_ZH : lang === 'de' ? MEASUREMENT_REPLACEMENTS_DE : lang === 'it' ? MEASUREMENT_REPLACEMENTS_IT : lang === 'el' ? MEASUREMENT_REPLACEMENTS_EL : lang === 'ur' ? MEASUREMENT_REPLACEMENTS_UR : lang === 'fa' ? MEASUREMENT_REPLACEMENTS_FA : lang === 'tr' ? MEASUREMENT_REPLACEMENTS_TR : lang === 'ku' ? MEASUREMENT_REPLACEMENTS_KU : lang === 'id' ? MEASUREMENT_REPLACEMENTS_ID : lang === 'sw' ? MEASUREMENT_REPLACEMENTS_SW : lang === 'ko' ? MEASUREMENT_REPLACEMENTS_KO : lang === 'nl' ? MEASUREMENT_REPLACEMENTS_NL : lang === 'ps' ? MEASUREMENT_REPLACEMENTS_PS : lang === 'he' ? MEASUREMENT_REPLACEMENTS_HE : lang === 'pl' ? MEASUREMENT_REPLACEMENTS_PL : lang === 'sv' ? MEASUREMENT_REPLACEMENTS_SV : lang === 'te' ? MEASUREMENT_REPLACEMENTS_TE : MEASUREMENT_REPLACEMENTS_EN;
  // Urdu, Persian, and Pashto are written in the same script as the Arabic
  // source, so the cleanup below that drops untranslated Arabic words would
  // also erase their terms. Park each such term behind a placeholder until
  // that has run.
  const keptTerms: string[] = [];
  const keepScript = lang === 'ur' || lang === 'fa' || lang === 'ps';
  for (const [arabic, localized] of replacements) {
    translated = keepScript && localized
      ? translated.replaceAll(arabic, () => `\uE000${keptTerms.push(localized) - 1}\uE001`)
      : translated.replaceAll(arabic, localized);
  }

  translated = translated
    .replace(/[؀-ۿ]+/g, '')
    .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
    .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\uE000(\d+)\uE001/g, (_, index) => keptTerms[Number(index)])
    .trim();

  if (kind === 'time' && /^\d[\d\s-]*$/.test(translated.trim())) {
    return `${translated.trim()} ${lang === 'ur' ? 'منٹ' : lang === 'fa' ? 'دقیقه' : lang === 'ps' ? 'دقیقه' : lang === 'he' ? 'דקות' : lang === 'tr' ? 'dk' : lang === 'ku' ? 'deq' : lang === 'id' ? 'menit' : lang === 'sw' ? 'dakika' : lang === 'ko' ? '분' : lang === 'te' ? 'నిమిషాలు' : 'min'}`;
  }
  return translated.trim();
}

export type LocalizableRecipe = Pick<Recipe, 'id' | 'title' | 'titleEn' | 'chapter' | 'chapterNumber' | 'category' | 'cookingMethod' | 'prepTime' | 'cookTime' | 'servings' | 'culturalNotes' | 'translations'>;

export function getLocalizedRecipe(recipe: LocalizableRecipe, lang: SupportedLanguage) {
  const translation = recipe.translations?.[lang];
  const table = getTranslationTable(lang);
  const generated = table?.[recipe.id];
  if (isArabicLocale(lang)) {
    return {
      title: recipe.title,
      chapter: recipe.chapter,
      category: recipe.category,
      cookingMethod: recipe.cookingMethod,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servings: recipe.servings,
      culturalNotes: recipe.culturalNotes
    };
  }

  const chapterNames = lang === 'fr' ? CHAPTER_NAMES_FR : lang === 'es' ? CHAPTER_NAMES_ES : lang === 'ja' ? CHAPTER_NAMES_JA : lang === 'hi' ? CHAPTER_NAMES_HI : lang === 'pt' ? CHAPTER_NAMES_PT : lang === 'ru' ? CHAPTER_NAMES_RU : lang === 'zh' ? CHAPTER_NAMES_ZH : lang === 'de' ? CHAPTER_NAMES_DE : lang === 'it' ? CHAPTER_NAMES_IT : lang === 'el' ? CHAPTER_NAMES_EL : lang === 'ur' ? CHAPTER_NAMES_UR : lang === 'fa' ? CHAPTER_NAMES_FA : lang === 'tr' ? CHAPTER_NAMES_TR : lang === 'ku' ? CHAPTER_NAMES_KU : lang === 'id' ? CHAPTER_NAMES_ID : lang === 'sw' ? CHAPTER_NAMES_SW : lang === 'ko' ? CHAPTER_NAMES_KO : lang === 'nl' ? CHAPTER_NAMES_NL : lang === 'ps' ? CHAPTER_NAMES_PS : lang === 'he' ? CHAPTER_NAMES_HE : lang === 'pl' ? CHAPTER_NAMES_PL : lang === 'sv' ? CHAPTER_NAMES_SV : lang === 'te' ? CHAPTER_NAMES_TE : CHAPTER_NAMES;
  const categoryNames = lang === 'fr' ? CATEGORY_NAMES_FR : lang === 'es' ? CATEGORY_NAMES_ES : lang === 'ja' ? CATEGORY_NAMES_JA : lang === 'hi' ? CATEGORY_NAMES_HI : lang === 'pt' ? CATEGORY_NAMES_PT : lang === 'ru' ? CATEGORY_NAMES_RU : lang === 'zh' ? CATEGORY_NAMES_ZH : lang === 'de' ? CATEGORY_NAMES_DE : lang === 'it' ? CATEGORY_NAMES_IT : lang === 'el' ? CATEGORY_NAMES_EL : lang === 'ur' ? CATEGORY_NAMES_UR : lang === 'fa' ? CATEGORY_NAMES_FA : lang === 'tr' ? CATEGORY_NAMES_TR : lang === 'ku' ? CATEGORY_NAMES_KU : lang === 'id' ? CATEGORY_NAMES_ID : lang === 'sw' ? CATEGORY_NAMES_SW : lang === 'ko' ? CATEGORY_NAMES_KO : lang === 'nl' ? CATEGORY_NAMES_NL : lang === 'ps' ? CATEGORY_NAMES_PS : lang === 'he' ? CATEGORY_NAMES_HE : lang === 'pl' ? CATEGORY_NAMES_PL : lang === 'sv' ? CATEGORY_NAMES_SV : lang === 'te' ? CATEGORY_NAMES_TE : CATEGORY_NAMES;
  const cookingMethods = lang === 'fr' ? COOKING_METHODS_FR : lang === 'es' ? COOKING_METHODS_ES : lang === 'ja' ? COOKING_METHODS_JA : lang === 'hi' ? COOKING_METHODS_HI : lang === 'pt' ? COOKING_METHODS_PT : lang === 'ru' ? COOKING_METHODS_RU : lang === 'zh' ? COOKING_METHODS_ZH : lang === 'de' ? COOKING_METHODS_DE : lang === 'it' ? COOKING_METHODS_IT : lang === 'el' ? COOKING_METHODS_EL : lang === 'ur' ? COOKING_METHODS_UR : lang === 'fa' ? COOKING_METHODS_FA : lang === 'tr' ? COOKING_METHODS_TR : lang === 'ku' ? COOKING_METHODS_KU : lang === 'id' ? COOKING_METHODS_ID : lang === 'sw' ? COOKING_METHODS_SW : lang === 'ko' ? COOKING_METHODS_KO : lang === 'nl' ? COOKING_METHODS_NL : lang === 'ps' ? COOKING_METHODS_PS : lang === 'he' ? COOKING_METHODS_HE : lang === 'pl' ? COOKING_METHODS_PL : lang === 'sv' ? COOKING_METHODS_SV : lang === 'te' ? COOKING_METHODS_TE : COOKING_METHODS;
  const traditionalCookingLabel = lang === 'fr' ? 'Cuisine traditionnelle' : lang === 'es' ? 'Cocina tradicional' : lang === 'ja' ? '伝統的な調理法' : lang === 'hi' ? 'पारंपरिक पाककला' : lang === 'pt' ? 'Culinária tradicional' : lang === 'ru' ? 'Традиционное приготовление' : lang === 'zh' ? '传统烹饪' : lang === 'de' ? 'Traditionelle Küche' : lang === 'it' ? 'Cucina tradizionale' : lang === 'ur' ? 'روایتی طریقہ' : lang === 'fa' ? 'آشپزی سنتی' : lang === 'tr' ? 'Geleneksel pişirme' : lang === 'ku' ? 'Pijandina kevneşopî' : lang === 'id' ? 'Masakan tradisional' : lang === 'sw' ? 'Upishi wa jadi' : lang === 'ko' ? '전통 조리법' : lang === 'nl' ? 'Traditionele bereiding' : lang === 'ps' ? 'دودیز پخلی' : lang === 'he' ? 'בישול מסורתי' : lang === 'pl' ? 'Tradycyjne gotowanie' : lang === 'sv' ? 'Traditionell tillagning' : lang === 'te' ? 'సాంప్రదాయ వంట' : 'Traditional cooking';

  return {
    title: translation?.title || generated?.title || recipe.titleEn || recipe.title,
    chapter: chapterNames[recipe.chapterNumber] || recipe.chapter,
    category: translation?.category || generated?.category || categoryNames[recipe.category] || recipe.category,
    cookingMethod: translation?.cookingMethod || generated?.cookingMethod || cookingMethods[recipe.cookingMethod] || traditionalCookingLabel,
    prepTime: getLocalizedMeasurement(translation?.prepTime || generated?.prepTime || recipe.prepTime, lang, 'time'),
    cookTime: getLocalizedMeasurement(translation?.cookTime || generated?.cookTime || recipe.cookTime, lang, 'time'),
    servings: getLocalizedMeasurement(translation?.servings || generated?.servings || recipe.servings, lang, 'servings'),
    culturalNotes: translation?.culturalNotes || generated?.culturalNotes || recipe.culturalNotes
  };
}

export function getLocalizedIngredient(ingredient: Pick<MasterIngredient, 'name' | 'nameEn'> & { id?: string }, lang: SupportedLanguage, recipeId?: string): string {
  if (isArabicLocale(lang)) return ingredient.name;

  const table = getTranslationTable(lang);
  const generatedIngredient = table && ingredient.id
    ? (recipeId ? table[recipeId] : Object.values(table).find(recipe => recipe.ingredients?.[ingredient.id!]))?.ingredients?.[ingredient.id]
    : undefined;
  if (generatedIngredient?.name) return generatedIngredient.name;

  if (lang === 'fr') {
    let translated = ingredient.name;
    for (const [arabic, french] of INGREDIENT_TERMS_FR) {
      translated = translated.replaceAll(arabic, french);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Ingrédient';
  }

  if (lang === 'es') {
    let translated = ingredient.name;
    for (const [arabic, spanish] of INGREDIENT_TERMS_ES) {
      translated = translated.replaceAll(arabic, spanish);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Ingrediente';
  }

  if (lang === 'ja') {
    let translated = ingredient.name;
    for (const [arabic, japanese] of INGREDIENT_TERMS_JA) {
      translated = translated.replaceAll(arabic, japanese);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || '食材';
  }

  if (lang === 'hi') {
    let translated = ingredient.name;
    for (const [arabic, hindi] of INGREDIENT_TERMS_HI) {
      translated = translated.replaceAll(arabic, hindi);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'सामग्री';
  }

  if (lang === 'pt') {
    let translated = ingredient.name;
    for (const [arabic, portuguese] of INGREDIENT_TERMS_PT) {
      translated = translated.replaceAll(arabic, portuguese);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Ingrediente';
  }

  if (lang === 'ru') {
    let translated = ingredient.name;
    for (const [arabic, russian] of INGREDIENT_TERMS_RU) {
      translated = translated.replaceAll(arabic, russian);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Ингредиент';
  }

  if (lang === 'zh') {
    let translated = ingredient.name;
    for (const [arabic, chinese] of INGREDIENT_TERMS_ZH) {
      translated = translated.replaceAll(arabic, chinese);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || '食材';
  }

  if (lang === 'de') {
    let translated = ingredient.name;
    for (const [arabic, german] of INGREDIENT_TERMS_DE) {
      translated = translated.replaceAll(arabic, german);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Zutat';
  }

  if (lang === 'it') {
    let translated = ingredient.name;
    for (const [arabic, italian] of INGREDIENT_TERMS_IT) {
      translated = translated.replaceAll(arabic, italian);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Ingrediente';
  }

  if (lang === 'el') {
    let translated = ingredient.name;
    for (const [arabic, greek] of INGREDIENT_TERMS_EL) {
      translated = translated.replaceAll(arabic, greek);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Συστατικό';
  }

  if (lang === 'ur') {
    // Same script as the Arabic source, so untranslated words are left in
    // place rather than stripped (stripping would also remove the Urdu terms).
    let translated = ingredient.name;
    for (const [arabic, urdu] of INGREDIENT_TERMS_UR) {
      translated = translated.replaceAll(arabic, urdu);
    }
    return translated.replace(/\s{2,}/g, ' ').trim() || ingredient.nameEn || 'جزو';
  }

  if (lang === 'fa') {
    // Same script as the Arabic source, so untranslated words are left in
    // place rather than stripped (stripping would also remove the Persian terms).
    let translated = ingredient.name;
    for (const [arabic, persian] of INGREDIENT_TERMS_FA) {
      translated = translated.replaceAll(arabic, persian);
    }
    return translated.replace(/\s{2,}/g, ' ').trim() || ingredient.nameEn || 'ماده اولیه';
  }

  if (lang === 'tr') {
    let translated = ingredient.name;
    for (const [arabic, turkish] of INGREDIENT_TERMS_TR) {
      translated = translated.replaceAll(arabic, turkish);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Malzeme';
  }

  if (lang === 'ku') {
    let translated = ingredient.name;
    for (const [arabic, kurdish] of INGREDIENT_TERMS_KU) {
      translated = translated.replaceAll(arabic, kurdish);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Pêkhate';
  }

  if (lang === 'id') {
    let translated = ingredient.name;
    for (const [arabic, indonesian] of INGREDIENT_TERMS_ID) {
      translated = translated.replaceAll(arabic, indonesian);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Bahan';
  }

  if (lang === 'sw') {
    let translated = ingredient.name;
    for (const [arabic, swahili] of INGREDIENT_TERMS_SW) {
      translated = translated.replaceAll(arabic, swahili);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Kiungo';
  }

  if (lang === 'ko') {
    let translated = ingredient.name;
    for (const [arabic, korean] of INGREDIENT_TERMS_KO) {
      translated = translated.replaceAll(arabic, korean);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || '재료';
  }

  if (lang === 'nl') {
    let translated = ingredient.name;
    for (const [arabic, dutch] of INGREDIENT_TERMS_NL) {
      translated = translated.replaceAll(arabic, dutch);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Ingrediënt';
  }

  if (lang === 'ps') {
    // Same script as the Arabic source, so untranslated words are left in
    // place rather than stripped (stripping would also remove the Pashto terms).
    let translated = ingredient.name;
    for (const [arabic, pashto] of INGREDIENT_TERMS_PS) {
      translated = translated.replaceAll(arabic, pashto);
    }
    return translated.replace(/\s{2,}/g, ' ').trim() || ingredient.nameEn || 'ماده';
  }

  if (lang === 'he') {
    let translated = ingredient.name;
    for (const [arabic, hebrew] of INGREDIENT_TERMS_HE) {
      translated = translated.replaceAll(arabic, hebrew);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'מצרך';
  }

  if (lang === 'pl') {
    let translated = ingredient.name;
    for (const [arabic, polish] of INGREDIENT_TERMS_PL) {
      translated = translated.replaceAll(arabic, polish);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Składnik';
  }

  if (lang === 'sv') {
    let translated = ingredient.name;
    for (const [arabic, swedish] of INGREDIENT_TERMS_SV) {
      translated = translated.replaceAll(arabic, swedish);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'Ingrediens';
  }

  if (lang === 'te') {
    let translated = ingredient.name;
    for (const [arabic, telugu] of INGREDIENT_TERMS_TE) {
      translated = translated.replaceAll(arabic, telugu);
    }
    translated = translated
      .replace(/[؀-ۿ]+/g, '')
      .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
      .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return translated || ingredient.nameEn || 'పదార్థం';
  }

  if (ingredient.nameEn) return ingredient.nameEn;
  let translated = ingredient.name;
  for (const [arabic, english] of INGREDIENT_TERMS) {
    translated = translated.replaceAll(arabic, english);
  }
  translated = translated
    .replace(/[؀-ۿ]+/g, '')
    .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
    .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return translated || 'Ingredient';
}

export function getLocalizedIngredientAmount(ingredient: Pick<MasterIngredient, 'id' | 'standardAmount' | 'standardAmountEn'>, lang: SupportedLanguage, recipeId?: string): string {
  if (isArabicLocale(lang)) return ingredient.standardAmount;
  const table = getTranslationTable(lang);
  const generatedIngredient = table
    ? (recipeId ? table[recipeId] : Object.values(table).find(recipe => recipe.ingredients?.[ingredient.id]))?.ingredients?.[ingredient.id]
    : undefined;
  // Recipes from an English source keep their original amount; use it rather
  // than guessing an English one back from the Arabic translation.
  if (!generatedIngredient?.standardAmount && ingredient.standardAmountEn) return ingredient.standardAmountEn;
  return getLocalizedMeasurement(generatedIngredient?.standardAmount || ingredient.standardAmount, lang, 'amount') || '';
}

export function getLocalizedInstruction(recipeId: string, stepNumber: number, text: string, lang: SupportedLanguage, textEn?: string): string {
  if (isArabicLocale(lang)) return text;
  const table = getTranslationTable(lang);
  const generated = table?.[recipeId]?.instructions?.[String(stepNumber)];
  if (generated) return generated;
  return textEn || text;
}
