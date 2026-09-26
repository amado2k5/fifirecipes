import { MasterIngredient, Recipe, UniqueInstruction } from '../../types';
import mezze from '../egyptianCooking/mezze.json';
import breakfast from '../egyptianCooking/breakfast.json';
import mainCoursesA from '../egyptianCooking/mainCoursesA.json';
import mainCoursesB from '../egyptianCooking/mainCoursesB.json';
import mainCoursesC from '../egyptianCooking/mainCoursesC.json';
import mainCoursesD from '../egyptianCooking/mainCoursesD.json';
import sweetsAndBeverages from '../egyptianCooking/sweetsAndBeverages.json';

// Recipes from Samia Abdennour's cookbook "Egyptian Cooking and Other Middle
// Eastern Recipes" (AUC Press), limited to dishes the site did not already
// have in Arabic or English. Each one was rewritten in our own words from the
// book (not copied) and credits the recipe number and page it comes from,
// linking to that page of the book on Google Books. The JSON files use
// a compact authoring format that is expanded into full Recipe objects below.

type Category = keyof typeof CATEGORIES;
type Method = keyof typeof METHODS;

interface BookRecipe {
  num: number;
  page: number;
  title: string;
  titleAr?: string;
  category: Category;
  method: Method;
  prep?: string;
  prepAr?: string;
  cook?: string;
  cookAr?: string;
  servings?: string;
  servingsAr?: string;
  difficulty?: Recipe['difficulty'];
  ingredients: (string | [string, string, MasterIngredient['category']] | [string, string, MasterIngredient['category'], string, string])[];
  steps: (string | [string, UniqueInstruction['phase']] | [string, string, UniqueInstruction['phase']])[];
  notes?: string;
  notesAr?: string;
}

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
const BOOK_URL = 'https://books.google.com/books?vid=ISBN9781617972669&pg=PA';

function toRecipe(entry: BookRecipe): Recipe {
  const id = `ec-${String(entry.num).padStart(3, '0')}`;
  const hasArabic = !!entry.titleAr;

  const instructions: UniqueInstruction[] = entry.steps.map((step, index) => {
    let text: string, textEn: string, phase: UniqueInstruction['phase'];

    if (typeof step === 'string') {
      text = step;
      textEn = step;
      phase = 'cook';
    } else if (step.length === 2) {
      [text, phase] = step as [string, UniqueInstruction['phase']];
      textEn = text;
    } else {
      const [stepText, stepTextAr, stepPhase] = step as [string, string, UniqueInstruction['phase']];
      text = stepTextAr;
      textEn = stepText;
      phase = stepPhase;
    }

    return {
      stepNumber: index + 1,
      text,
      textEn,
      phase,
      sourceDocs: [],
      ...(phase === 'alternative' ? { isAlternative: true, importance: 'variation' as const } : { importance: 'core' as const })
    };
  });

  const chapterAr = 'الباب التاسع: من كتاب Egyptian Cooking لسامية عبد النور';
  const chapterEn = 'Chapter 9: From the Cookbook "Egyptian Cooking"';

  return {
    id,
    title: hasArabic ? entry.titleAr! : entry.title,
    titleEn: entry.title,
    ...(hasArabic ? {} : { englishOnly: true }),
    chapter: hasArabic ? chapterAr : chapterEn,
    chapterNumber: 9,
    category: CATEGORIES[entry.category],
    cookingMethod: METHODS[entry.method],
    prepTime: hasArabic ? entry.prepAr : entry.prep,
    cookTime: hasArabic ? entry.cookAr : entry.cook,
    servings: hasArabic ? entry.servingsAr : entry.servings,
    difficulty: entry.difficulty,
    masterIngredients: entry.ingredients.map(([name, standardAmount, category, ...rest], index) => {
      const nameAr = rest[0] as string | undefined;
      const standardAmountAr = rest[1] as string | undefined;

      return {
        id: `${id}-i${index + 1}`,
        name: nameAr || name,
        nameEn: name,
        standardAmount: standardAmountAr || standardAmount,
        ...(standardAmountAr ? { standardAmountEn: standardAmount } : {}),
        category: category as MasterIngredient['category'],
        sourceVariations: {},
        isMerged: false,
        originalOccurrencesCount: 1
      };
    }),
    uniqueInstructions: instructions,
    culturalNotes: hasArabic ? entry.notesAr : entry.notes,
    source: {
      name: BOOK_NAME,
      url: `${BOOK_URL}${entry.page}`,
      collection: 'abdennour',
      citation: hasArabic ? `Recipe ${entry.num}, page ${entry.page}` : `Recipe ${entry.num}, page ${entry.page}`
    },
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: instructions.length,
      totalMasterIngredients: entry.ingredients.length,
      overlapPercentage: 0,
      documentsPresent: [],
      reconciliationSummary: 'A recipe from Samia Abdennour\'s cookbook "Egyptian Cooking", rewritten in our own words with the source credited.'
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
  mainCoursesD,
  sweetsAndBeverages
] as unknown as BookRecipe[][]).flat().map(toRecipe);
