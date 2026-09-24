import { MasterIngredient, Recipe, SupportedLanguage } from '../types';
import recipeTranslations from '../data/recipeTranslations.json';

type RecipeTranslation = {
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

type TranslationTable = Record<string, RecipeTranslation>;

// English is small (~50KB) and is the fallback language for unrecognized
// locales, so it's bundled eagerly. The other languages' recipe-translation
// tables are large (~400KB each) and are fetched on demand via
// ensureTranslationTable() so a visitor only downloads the language(s) they
// actually use instead of all of them on every page load.
const ENGLISH_RECIPE_TRANSLATIONS = recipeTranslations as TranslationTable;

const LAZY_TRANSLATION_LOADERS: Partial<Record<SupportedLanguage, () => Promise<{ default: TranslationTable }>>> = {
  fr: () => import('../data/recipeTranslationsFr.json') as Promise<{ default: TranslationTable }>,
  es: () => import('../data/recipeTranslationsEs.json') as Promise<{ default: TranslationTable }>,
  ja: () => import('../data/recipeTranslationsJa.json') as Promise<{ default: TranslationTable }>,
  hi: () => import('../data/recipeTranslationsHi.json') as Promise<{ default: TranslationTable }>,
  pt: () => import('../data/recipeTranslationsPt.json') as Promise<{ default: TranslationTable }>,
  ru: () => import('../data/recipeTranslationsRu.json') as Promise<{ default: TranslationTable }>,
  zh: () => import('../data/recipeTranslationsZh.json') as Promise<{ default: TranslationTable }>,
  de: () => import('../data/recipeTranslationsDe.json') as Promise<{ default: TranslationTable }>,
  it: () => import('../data/recipeTranslationsIt.json') as Promise<{ default: TranslationTable }>,
  el: () => import('../data/recipeTranslationsEl.json') as Promise<{ default: TranslationTable }>,
  ur: () => import('../data/recipeTranslationsUr.json') as Promise<{ default: TranslationTable }>,
  fa: () => import('../data/recipeTranslationsFa.json') as Promise<{ default: TranslationTable }>,
  tr: () => import('../data/recipeTranslationsTr.json') as Promise<{ default: TranslationTable }>
};

const lazyTranslationCache: Partial<Record<SupportedLanguage, TranslationTable>> = {};
const lazyTranslationPromises: Partial<Record<SupportedLanguage, Promise<void>>> = {};

// Kicks off (or reuses) the fetch of a language's recipe-translation JSON
// chunk. Call this when `lang` changes and re-render once it resolves;
// getLocalizedRecipe/getLocalizedIngredient/getLocalizedInstruction already
// fall back to each recipe's embedded English fields while the chunk is
// still loading, so there's no broken state in between.
export function ensureTranslationTable(lang: SupportedLanguage): Promise<void> {
  if (lazyTranslationCache[lang] || !LAZY_TRANSLATION_LOADERS[lang]) {
    return Promise.resolve();
  }
  if (!lazyTranslationPromises[lang]) {
    lazyTranslationPromises[lang] = LAZY_TRANSLATION_LOADERS[lang]!().then(mod => {
      lazyTranslationCache[lang] = mod.default;
    });
  }
  return lazyTranslationPromises[lang]!;
}

function getTranslationTable(lang: SupportedLanguage): TranslationTable | undefined {
  if (lang === 'en') return ENGLISH_RECIPE_TRANSLATIONS;
  return lazyTranslationCache[lang];
}

const CHAPTER_NAMES: Record<number, string> = {
  1: 'Chapter 1: Meats, Poultry & Seafood',
  2: 'Chapter 2: Soups, Salads, Vegetables & Legumes',
  3: 'Chapter 3: Starches, Stuffed Dishes & Pastries',
  4: 'Chapter 4: Pastries, Light Desserts & Beverages',
  5: 'Chapter 5: Eastern Desserts',
  6: 'Chapter 6: Western Desserts'
};

const CHAPTER_NAMES_FR: Record<number, string> = {
  1: 'Chapitre 1 : Viandes, Volailles et Fruits de Mer',
  2: 'Chapitre 2 : Soupes, Salades, Légumes et Légumineuses',
  3: 'Chapitre 3 : Féculents, Plats Farcis et Pâtisseries',
  4: 'Chapitre 4 : Pâtisseries, Desserts Légers et Boissons',
  5: 'Chapitre 5 : Desserts Orientaux',
  6: 'Chapitre 6 : Desserts Occidentaux'
};

const CHAPTER_NAMES_ES: Record<number, string> = {
  1: 'Capítulo 1: Carnes, Aves y Mariscos',
  2: 'Capítulo 2: Sopas, Ensaladas, Verduras y Legumbres',
  3: 'Capítulo 3: Féculas, Platos Rellenos y Pasteles Salados',
  4: 'Capítulo 4: Pastelería, Postres Ligeros y Bebidas',
  5: 'Capítulo 5: Postres Orientales',
  6: 'Capítulo 6: Postres Occidentales'
};

const CHAPTER_NAMES_JA: Record<number, string> = {
  1: '第1章：肉・鶏肉・魚介類',
  2: '第2章：スープ・サラダ・野菜・豆類',
  3: '第3章：主食・詰め物料理・生地料理',
  4: '第4章：焼き菓子・軽いデザート・飲み物',
  5: '第5章：東洋のデザート',
  6: '第6章：西洋のデザート'
};

const CHAPTER_NAMES_HI: Record<number, string> = {
  1: 'अध्याय 1: मांस, मुर्ग़ और समुद्री भोजन',
  2: 'अध्याय 2: सूप, सलाद, सब्ज़ियां और दालें',
  3: 'अध्याय 3: स्टार्च, भरवां व्यंजन और पेस्ट्री',
  4: 'अध्याय 4: पेस्ट्री, हल्की मिठाइयां और पेय',
  5: 'अध्याय 5: पूर्वी मिठाइयां',
  6: 'अध्याय 6: पश्चिमी मिठाइयां'
};

const CHAPTER_NAMES_PT: Record<number, string> = {
  1: 'Capítulo 1: Carnes, Aves e Frutos do Mar',
  2: 'Capítulo 2: Sopas, Saladas, Legumes e Leguminosas',
  3: 'Capítulo 3: Amidos, Pratos Recheados e Massas Folhadas',
  4: 'Capítulo 4: Massas, Doces Leves e Bebidas',
  5: 'Capítulo 5: Sobremesas Orientais',
  6: 'Capítulo 6: Sobremesas Ocidentais'
};

const CHAPTER_NAMES_RU: Record<number, string> = {
  1: 'Глава 1: Мясо, Птица и Морепродукты',
  2: 'Глава 2: Супы, Салаты, Овощи и Бобовые',
  3: 'Глава 3: Крахмалистые блюда, Фаршированные блюда и Выпечка',
  4: 'Глава 4: Выпечка, Лёгкие десерты и Напитки',
  5: 'Глава 5: Восточные десерты',
  6: 'Глава 6: Западные десерты'
};

const CHAPTER_NAMES_ZH: Record<number, string> = {
  1: '第一章：肉类、禽类与海鲜',
  2: '第二章：汤品、沙拉、蔬菜与豆类',
  3: '第三章：主食、酿馅菜肴与面点',
  4: '第四章：糕点、清爽甜点与饮品',
  5: '第五章：东方甜点',
  6: '第六章：西式甜点'
};

const CHAPTER_NAMES_DE: Record<number, string> = {
  1: 'Kapitel 1: Fleisch, Geflügel und Meeresfrüchte',
  2: 'Kapitel 2: Suppen, Salate, Gemüse und Hülsenfrüchte',
  3: 'Kapitel 3: Sättigungsbeilagen, gefüllte Gerichte und Gebäck',
  4: 'Kapitel 4: Gebäck, leichte Nachspeisen und Getränke',
  5: 'Kapitel 5: Orientalische Süßspeisen',
  6: 'Kapitel 6: Westliche Süßspeisen'
};

const CHAPTER_NAMES_IT: Record<number, string> = {
  1: 'Capitolo 1: Carni, Pollame e Frutti di Mare',
  2: 'Capitolo 2: Zuppe, Insalate, Verdure e Legumi',
  3: 'Capitolo 3: Amidi, Piatti Ripieni e Pasticceria Salata',
  4: 'Capitolo 4: Pasticceria, Dolci Leggeri e Bevande',
  5: 'Capitolo 5: Dolci Orientali',
  6: 'Capitolo 6: Dolci Occidentali'
};

const CHAPTER_NAMES_EL: Record<number, string> = {
  1: 'Κεφάλαιο 1: Κρέατα, Πουλερικά και Θαλασσινά',
  2: 'Κεφάλαιο 2: Σούπες, Σαλάτες, Λαχανικά και Όσπρια',
  3: 'Κεφάλαιο 3: Αμυλούχα, Γεμιστά Πιάτα και Αλμυρή Ζαχαροπλαστική',
  4: 'Κεφάλαιο 4: Ζαχαροπλαστική, Ελαφριά Επιδόρπια και Ροφήματα',
  5: 'Κεφάλαιο 5: Ανατολίτικα Γλυκά',
  6: 'Κεφάλαιο 6: Δυτικά Γλυκά'
};

const CHAPTER_NAMES_UR: Record<number, string> = {
  1: 'باب 1: گوشت، مرغی اور سمندری غذا',
  2: 'باب 2: سوپ، سلاد، سبزیاں اور دالیں',
  3: 'باب 3: نشاستہ دار کھانے، بھرے ہوئے پکوان اور پیسٹری',
  4: 'باب 4: پیسٹری، ہلکی میٹھی اشیاء اور مشروبات',
  5: 'باب 5: مشرقی مٹھائیاں',
  6: 'باب 6: مغربی مٹھائیاں'
};

const CHAPTER_NAMES_FA: Record<number, string> = {
  1: 'فصل 1: گوشت، مرغ و غذاهای دریایی',
  2: 'فصل 2: سوپ، سالاد، سبزیجات و حبوبات',
  3: 'فصل 3: غذاهای نشاسته‌ای، دلمه‌ها و شیرینی‌های شور',
  4: 'فصل 4: شیرینی‌ها، دسرهای سبک و نوشیدنی‌ها',
  5: 'فصل 5: شیرینی‌های شرقی',
  6: 'فصل 6: شیرینی‌های غربی'
};

const CHAPTER_NAMES_TR: Record<number, string> = {
  1: 'Bölüm 1: Et, Tavuk ve Deniz Ürünleri',
  2: 'Bölüm 2: Çorbalar, Salatalar, Sebzeler ve Baklagiller',
  3: 'Bölüm 3: Nişastalı Yemekler, Dolmalar ve Hamur İşleri',
  4: 'Bölüm 4: Hamur İşleri, Hafif Tatlılar ve İçecekler',
  5: 'Bölüm 5: Doğu Tatlıları',
  6: 'Bölüm 6: Batı Tatlıları'
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

const isArabicLocale = (lang: SupportedLanguage) => lang === 'ar';

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

  if (lang === 'tr') {
    return {
      prep: 'Hazırlık',
      cook: 'Pişirme',
      finish: 'Servis',
      alternative: 'Alternatif yöntem'
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

export function getLocalizedMeasurement(value: string | undefined, lang: SupportedLanguage, kind: 'time' | 'servings' | 'amount'): string | undefined {
  if (!value || isArabicLocale(lang)) return value;

  let translated = value.replace(/[٠-٩]/g, digit => ARABIC_DIGITS[digit] || digit);
  const replacements = lang === 'fr' ? MEASUREMENT_REPLACEMENTS_FR : lang === 'es' ? MEASUREMENT_REPLACEMENTS_ES : lang === 'ja' ? MEASUREMENT_REPLACEMENTS_JA : lang === 'hi' ? MEASUREMENT_REPLACEMENTS_HI : lang === 'pt' ? MEASUREMENT_REPLACEMENTS_PT : lang === 'ru' ? MEASUREMENT_REPLACEMENTS_RU : lang === 'zh' ? MEASUREMENT_REPLACEMENTS_ZH : lang === 'de' ? MEASUREMENT_REPLACEMENTS_DE : lang === 'it' ? MEASUREMENT_REPLACEMENTS_IT : lang === 'el' ? MEASUREMENT_REPLACEMENTS_EL : lang === 'ur' ? MEASUREMENT_REPLACEMENTS_UR : lang === 'fa' ? MEASUREMENT_REPLACEMENTS_FA : lang === 'tr' ? MEASUREMENT_REPLACEMENTS_TR : MEASUREMENT_REPLACEMENTS_EN;
  // Urdu and Persian are written in the same script as the Arabic source, so
  // the cleanup below that drops untranslated Arabic words would also erase
  // their terms. Park each such term behind a placeholder until that has run.
  const keptTerms: string[] = [];
  const keepScript = lang === 'ur' || lang === 'fa';
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
    return `${translated.trim()} ${lang === 'ur' ? 'منٹ' : lang === 'fa' ? 'دقیقه' : lang === 'tr' ? 'dk' : 'min'}`;
  }
  return translated.trim();
}

export function getLocalizedRecipe(recipe: Recipe, lang: SupportedLanguage) {
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

  const chapterNames = lang === 'fr' ? CHAPTER_NAMES_FR : lang === 'es' ? CHAPTER_NAMES_ES : lang === 'ja' ? CHAPTER_NAMES_JA : lang === 'hi' ? CHAPTER_NAMES_HI : lang === 'pt' ? CHAPTER_NAMES_PT : lang === 'ru' ? CHAPTER_NAMES_RU : lang === 'zh' ? CHAPTER_NAMES_ZH : lang === 'de' ? CHAPTER_NAMES_DE : lang === 'it' ? CHAPTER_NAMES_IT : lang === 'el' ? CHAPTER_NAMES_EL : lang === 'ur' ? CHAPTER_NAMES_UR : lang === 'fa' ? CHAPTER_NAMES_FA : lang === 'tr' ? CHAPTER_NAMES_TR : CHAPTER_NAMES;
  const categoryNames = lang === 'fr' ? CATEGORY_NAMES_FR : lang === 'es' ? CATEGORY_NAMES_ES : lang === 'ja' ? CATEGORY_NAMES_JA : lang === 'hi' ? CATEGORY_NAMES_HI : lang === 'pt' ? CATEGORY_NAMES_PT : lang === 'ru' ? CATEGORY_NAMES_RU : lang === 'zh' ? CATEGORY_NAMES_ZH : lang === 'de' ? CATEGORY_NAMES_DE : lang === 'it' ? CATEGORY_NAMES_IT : lang === 'el' ? CATEGORY_NAMES_EL : lang === 'ur' ? CATEGORY_NAMES_UR : lang === 'fa' ? CATEGORY_NAMES_FA : lang === 'tr' ? CATEGORY_NAMES_TR : CATEGORY_NAMES;
  const cookingMethods = lang === 'fr' ? COOKING_METHODS_FR : lang === 'es' ? COOKING_METHODS_ES : lang === 'ja' ? COOKING_METHODS_JA : lang === 'hi' ? COOKING_METHODS_HI : lang === 'pt' ? COOKING_METHODS_PT : lang === 'ru' ? COOKING_METHODS_RU : lang === 'zh' ? COOKING_METHODS_ZH : lang === 'de' ? COOKING_METHODS_DE : lang === 'it' ? COOKING_METHODS_IT : lang === 'el' ? COOKING_METHODS_EL : lang === 'ur' ? COOKING_METHODS_UR : lang === 'fa' ? COOKING_METHODS_FA : lang === 'tr' ? COOKING_METHODS_TR : COOKING_METHODS;
  const traditionalCookingLabel = lang === 'fr' ? 'Cuisine traditionnelle' : lang === 'es' ? 'Cocina tradicional' : lang === 'ja' ? '伝統的な調理法' : lang === 'hi' ? 'पारंपरिक पाककला' : lang === 'pt' ? 'Culinária tradicional' : lang === 'ru' ? 'Традиционное приготовление' : lang === 'zh' ? '传统烹饪' : lang === 'de' ? 'Traditionelle Küche' : lang === 'it' ? 'Cucina tradizionale' : lang === 'ur' ? 'روایتی طریقہ' : lang === 'fa' ? 'آشپزی سنتی' : lang === 'tr' ? 'Geleneksel pişirme' : 'Traditional cooking';

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

export function getLocalizedIngredientAmount(ingredient: Pick<MasterIngredient, 'id' | 'standardAmount'>, lang: SupportedLanguage, recipeId?: string): string {
  if (isArabicLocale(lang)) return ingredient.standardAmount;
  const table = getTranslationTable(lang);
  const generatedIngredient = table
    ? (recipeId ? table[recipeId] : Object.values(table).find(recipe => recipe.ingredients?.[ingredient.id]))?.ingredients?.[ingredient.id]
    : undefined;
  return getLocalizedMeasurement(generatedIngredient?.standardAmount || ingredient.standardAmount, lang, 'amount') || '';
}

export function getLocalizedInstruction(recipeId: string, stepNumber: number, text: string, lang: SupportedLanguage, textEn?: string): string {
  if (isArabicLocale(lang)) return text;
  const table = getTranslationTable(lang);
  const generated = table?.[recipeId]?.instructions?.[String(stepNumber)];
  if (generated) return generated;
  return textEn || text;
}
