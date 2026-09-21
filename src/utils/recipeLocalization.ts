import { MasterIngredient, Recipe, SupportedLanguage } from '../types';
import recipeTranslations from '../data/recipeTranslations.json';
import recipeTranslationsFr from '../data/recipeTranslationsFr.json';
import recipeTranslationsEs from '../data/recipeTranslationsEs.json';

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

const ENGLISH_RECIPE_TRANSLATIONS = recipeTranslations as Record<string, RecipeTranslation>;
const FRENCH_RECIPE_TRANSLATIONS = recipeTranslationsFr as Record<string, RecipeTranslation>;
const SPANISH_RECIPE_TRANSLATIONS = recipeTranslationsEs as Record<string, RecipeTranslation>;

function getTranslationTable(lang: SupportedLanguage): Record<string, RecipeTranslation> | undefined {
  if (lang === 'en') return ENGLISH_RECIPE_TRANSLATIONS;
  if (lang === 'fr') return FRENCH_RECIPE_TRANSLATIONS;
  if (lang === 'es') return SPANISH_RECIPE_TRANSLATIONS;
  return undefined;
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

export function getLocalizedMeasurement(value: string | undefined, lang: SupportedLanguage, kind: 'time' | 'servings' | 'amount'): string | undefined {
  if (!value || isArabicLocale(lang)) return value;

  let translated = value.replace(/[٠-٩]/g, digit => ARABIC_DIGITS[digit] || digit);
  const replacements = lang === 'fr' ? MEASUREMENT_REPLACEMENTS_FR : lang === 'es' ? MEASUREMENT_REPLACEMENTS_ES : MEASUREMENT_REPLACEMENTS_EN;
  for (const [arabic, localized] of replacements) {
    translated = translated.replaceAll(arabic, localized);
  }

  translated = translated
    .replace(/[؀-ۿ]+/g, '')
    .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
    .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  if (kind === 'time' && /^\d[\d\s-]*$/.test(translated.trim())) {
    return `${translated.trim()} min`;
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

  const chapterNames = lang === 'fr' ? CHAPTER_NAMES_FR : lang === 'es' ? CHAPTER_NAMES_ES : CHAPTER_NAMES;
  const categoryNames = lang === 'fr' ? CATEGORY_NAMES_FR : lang === 'es' ? CATEGORY_NAMES_ES : CATEGORY_NAMES;
  const cookingMethods = lang === 'fr' ? COOKING_METHODS_FR : lang === 'es' ? COOKING_METHODS_ES : COOKING_METHODS;
  const traditionalCookingLabel = lang === 'fr' ? 'Cuisine traditionnelle' : lang === 'es' ? 'Cocina tradicional' : 'Traditional cooking';

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
