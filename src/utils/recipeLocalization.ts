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

const ENGLISH_RECIPE_TRANSLATIONS = recipeTranslations as Record<string, RecipeTranslation>;

const CHAPTER_NAMES: Record<number, string> = {
  1: 'Chapter 1: Meats, Poultry & Seafood',
  2: 'Chapter 2: Soups, Salads, Vegetables & Legumes',
  3: 'Chapter 3: Starches, Stuffed Dishes & Pastries',
  4: 'Chapter 4: Pastries, Light Desserts & Beverages',
  5: 'Chapter 5: Eastern Desserts',
  6: 'Chapter 6: Western Desserts'
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
  'خبز': 'Baking'
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

export function getLocalizedMeasurement(value: string | undefined, lang: SupportedLanguage, kind: 'time' | 'servings' | 'amount'): string | undefined {
  if (!value || isArabicLocale(lang)) return value;

  let translated = value.replace(/[٠-٩]/g, digit => ARABIC_DIGITS[digit] || digit);
  const replacements: Array<[string, string]> = [
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
  for (const [arabic, english] of replacements) {
    translated = translated.replaceAll(arabic, english);
  }

  translated = translated
    .replace(/[\u0600-\u06FF]+/g, '')
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
  const generatedEnglish = lang === 'en' ? ENGLISH_RECIPE_TRANSLATIONS[recipe.id] : undefined;
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

  return {
    title: translation?.title || generatedEnglish?.title || recipe.titleEn || recipe.title,
    chapter: CHAPTER_NAMES[recipe.chapterNumber] || recipe.chapter,
    category: translation?.category || generatedEnglish?.category || CATEGORY_NAMES[recipe.category] || recipe.category,
    cookingMethod: translation?.cookingMethod || generatedEnglish?.cookingMethod || COOKING_METHODS[recipe.cookingMethod] || 'Traditional cooking',
    prepTime: getLocalizedMeasurement(translation?.prepTime || generatedEnglish?.prepTime || recipe.prepTime, lang, 'time'),
    cookTime: getLocalizedMeasurement(translation?.cookTime || generatedEnglish?.cookTime || recipe.cookTime, lang, 'time'),
    servings: getLocalizedMeasurement(translation?.servings || generatedEnglish?.servings || recipe.servings, lang, 'servings'),
    culturalNotes: translation?.culturalNotes || generatedEnglish?.culturalNotes || recipe.culturalNotes
  };
}

export function getLocalizedIngredient(ingredient: Pick<MasterIngredient, 'name' | 'nameEn'> & { id?: string }, lang: SupportedLanguage): string {
  if (isArabicLocale(lang)) return ingredient.name;
  const generatedIngredient = lang === 'en' && ingredient.id ? Object.values(ENGLISH_RECIPE_TRANSLATIONS).find(recipe => recipe.ingredients?.[ingredient.id!])?.ingredients?.[ingredient.id] : undefined;
  if (ingredient.nameEn || generatedIngredient?.name) return ingredient.nameEn || generatedIngredient?.name || ingredient.name;
  let translated = ingredient.name;
  for (const [arabic, english] of INGREDIENT_TERMS) {
    translated = translated.replaceAll(arabic, english);
  }
  translated = translated
    .replace(/[\u0600-\u06FF]+/g, '')
    .replace(/\(\s*[\/:|,-]*\s*\)/g, '')
    .replace(/\s*[\/:|,-]\s*(?=\s|$)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return translated || 'Ingredient';
}

export function getLocalizedIngredientAmount(ingredient: Pick<MasterIngredient, 'id' | 'standardAmount'>, lang: SupportedLanguage): string {
  if (isArabicLocale(lang)) return ingredient.standardAmount;
  const generatedIngredient = lang === 'en' ? Object.values(ENGLISH_RECIPE_TRANSLATIONS).find(recipe => recipe.ingredients?.[ingredient.id])?.ingredients?.[ingredient.id] : undefined;
  return getLocalizedMeasurement(generatedIngredient?.standardAmount || ingredient.standardAmount, lang, 'amount') || '';
}

export function getLocalizedInstruction(recipeId: string, stepNumber: number, text: string, lang: SupportedLanguage, textEn?: string): string {
  if (isArabicLocale(lang)) return text;
  return ENGLISH_RECIPE_TRANSLATIONS[recipeId]?.instructions?.[String(stepNumber)] || textEn || text;
}