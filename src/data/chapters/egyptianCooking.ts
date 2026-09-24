import { MasterIngredient, Recipe, UniqueInstruction } from '../../types';
import mezze from '../egyptianCooking/mezze.json';
import breakfast from '../egyptianCooking/breakfast.json';
import mainCoursesA from '../egyptianCooking/mainCoursesA.json';
import mainCoursesB from '../egyptianCooking/mainCoursesB.json';
import mainCoursesC from '../egyptianCooking/mainCoursesC.json';
import sweetsAndBeverages from '../egyptianCooking/sweetsAndBeverages.json';

// Recipes from Samia Abdennour's cookbook "Egyptian Cooking and Other Middle
// Eastern Recipes" (AUC Press), limited to dishes the site did not already
// have in Arabic or English. Each one was rewritten in our own words from the
// book (not copied) and credits the recipe number and page it comes from,
// linking to that page of the book on Google Books. They exist in English only
// for now, so every text field below holds English and the recipes are listed
// in the English interface alone until they are translated. The JSON files use
// a compact authoring format that is expanded into full Recipe objects below.

type Category = keyof typeof CATEGORIES;
type Method = keyof typeof METHODS;

interface BookRecipe {
  /** The recipe's number in the book. */
  num: number;
  /** Page number as printed in the book. */
  page: number;
  title: string;
  category: Category;
  method: Method;
  prep?: string;
  cook?: string;
  servings?: string;
  difficulty?: Recipe['difficulty'];
  /** [name, amount, ingredient category] */
  ingredients: [string, string, MasterIngredient['category']][];
  /**
   * [text, phase]; phase defaults to "cook". Variations the book gives as a
   * short change to the main recipe are steps with the "alternative" phase.
   */
  steps: (string | [string, UniqueInstruction['phase']])[];
  notes?: string;
}

// The site's category and cooking-method keys (Arabic), so the new recipes
// share the existing filters and their translations.
const CATEGORIES = {
  meat: 'لحوم وطيور',
  fish: 'بحريات',
  vegetables: 'خضروات',
  legumes: 'بقوليات',
  salads: 'سلطات',
  soups: 'شوربات وحساء',
  starches: 'نشويات',
  stuffed: 'محشوات',
  pastries: 'معجنات',
  savory: 'أكلات شهية',
  easternDesserts: 'حلويات شرقية',
  lightDesserts: 'حلويات خفيفة',
  beverages: 'مشروبات'
} as const;

const METHODS = {
  boil: 'سلق',
  simmer: 'تسبيك',
  fry: 'تحمير وقلي',
  grill: 'شوي',
  bake: 'خبز وتسوية بالفرن',
  noCook: 'سلطات ومشروبات',
  preserve: 'حفظ وتجميد'
} as const;

const BOOK_NAME = 'Egyptian Cooking and Other Middle Eastern Recipes — Samia Abdennour (AUC Press)';
// Google Books opens the book at a printed page with pg=PA<page>.
const BOOK_URL = 'https://books.google.com/books?vid=ISBN9781617972669&pg=PA';

function toRecipe(entry: BookRecipe): Recipe {
  const id = `ec-${String(entry.num).padStart(3, '0')}`;
  const instructions: UniqueInstruction[] = entry.steps.map((step, index) => {
    const [text, phase] = typeof step === 'string' ? [step, 'cook' as const] : step;
    return {
      stepNumber: index + 1,
      text,
      textEn: text,
      phase,
      sourceDocs: [],
      ...(phase === 'alternative' ? { isAlternative: true, importance: 'variation' as const } : { importance: 'core' as const })
    };
  });
  return {
    id,
    title: entry.title,
    titleEn: entry.title,
    englishOnly: true,
    chapter: 'Chapter 9: From the Cookbook “Egyptian Cooking”',
    chapterNumber: 9,
    category: CATEGORIES[entry.category],
    cookingMethod: METHODS[entry.method],
    prepTime: entry.prep,
    cookTime: entry.cook,
    servings: entry.servings,
    difficulty: entry.difficulty,
    masterIngredients: entry.ingredients.map(([name, standardAmount, category], index) => ({
      id: `${id}-i${index + 1}`,
      name,
      nameEn: name,
      standardAmount,
      category,
      sourceVariations: {},
      isMerged: false,
      originalOccurrencesCount: 1
    })),
    uniqueInstructions: instructions,
    culturalNotes: entry.notes,
    source: {
      name: BOOK_NAME,
      url: `${BOOK_URL}${entry.page}`,
      collection: 'abdennour',
      citation: `Recipe ${entry.num}, page ${entry.page}`
    },
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: instructions.length,
      totalMasterIngredients: entry.ingredients.length,
      overlapPercentage: 0,
      documentsPresent: [],
      reconciliationSummary: 'A recipe from Samia Abdennour’s cookbook “Egyptian Cooking”, rewritten in our own words with the source credited.'
    },
    rawDocVersions: {}
  };
}

export const egyptianCookingRecipes: Recipe[] = ([
  mezze,
  breakfast,
  mainCoursesA,
  mainCoursesB,
  mainCoursesC,
  sweetsAndBeverages
] as unknown as BookRecipe[][]).flat().map(toRecipe);
