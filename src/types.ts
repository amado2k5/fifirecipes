export type DocumentId = 'doc1' | 'doc2' | 'doc3';

export interface IngredientVariation {
  doc1?: string;
  doc2?: string;
  doc3?: string;
}

export interface MasterIngredient {
  id: string;
  name: string;
  nameEn?: string;
  standardAmount: string;
  unit?: string;
  category: 'meat_poultry' | 'seafood' | 'vegetable' | 'dairy_fat' | 'grain_starch' | 'spice_seasoning' | 'sweet_fruit' | 'liquid' | 'other';
  notes?: string;
  sourceVariations: IngredientVariation;
  isMerged: boolean; // True if it appeared with slight variations in multiple docs and got merged
  originalOccurrencesCount: number;
}

export interface UniqueInstruction {
  stepNumber: number;
  text: string;
  textEn?: string;
  phase: 'prep' | 'cook' | 'finish' | 'alternative';
  isAlternative?: boolean;
  alternativeLabel?: string;
  sourceDocs: DocumentId[];
  isUniqueToDoc?: DocumentId; // If this instruction only existed in one doc
  importance?: 'core' | 'tip' | 'variation';
}

export interface RawDocVersion {
  title: string;
  pageNumber?: number;
  ingredients: string[];
  instructions: string[];
  notes?: string[];
}

export interface OverlapAnalysis {
  duplicateInstructionCount: number;
  mergedIngredientsCount: number;
  totalUniqueSteps: number;
  totalMasterIngredients: number;
  overlapPercentage: number;
  documentsPresent: DocumentId[];
  reconciliationSummary: string;
}

export interface Recipe {
  id: string;
  title: string;
  titleEn: string;
  chapter: string;
  chapterNumber: number;
  category: string;
  cookingMethod: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  difficulty?: 'easy' | 'medium' | 'master';
  imageUrl?: string;
  masterIngredients: MasterIngredient[];
  uniqueInstructions: UniqueInstruction[];
  alternativeMethods?: {
    title: string;
    steps: string[];
    sourceDoc: DocumentId;
  }[];
  servingSuggestions?: string;
  preservationTips?: string;
  culturalNotes?: string;
  translations?: Record<string, {
    title: string;
    category?: string;
    cookingMethod?: string;
    prepTime?: string;
    cookTime?: string;
    servings?: string;
    culturalNotes?: string;
    ingredientsSummary?: string[];
    instructionsSummary?: string[];
  }>;
  overlapAnalysis: OverlapAnalysis;
  /** Set on the additional recipes that do not come from Dr. Fatma's manuscripts. */
  source?: RecipeSource;
  /**
   * Only an English version exists so far (the text fields hold English);
   * hidden in the other languages until translated.
   */
  englishOnly?: boolean;
  rawDocVersions: {
    doc1?: RawDocVersion;
    doc2?: RawDocVersion;
    doc3?: RawDocVersion;
  };
}

export interface RecipeSource {
  name: string;
  url: string;
  /** Which outside collection the recipe belongs to (used by the collection filter). */
  collection?: 'chefteta' | 'osool' | 'abdennour';
  /** Where in the source the recipe appears, e.g. "الجزء الثالث، صفحة 298". */
  citation?: string;
}

export type RecipeCollection = 'archive' | 'chefteta' | 'osool' | 'abdennour';

/**
 * The lightweight slice of a recipe needed to render its card, sort and filter
 * the list. The full recipe is fetched separately when it is opened.
 */
export interface RecipeSummary {
  id: string;
  title: string;
  titleEn: string;
  chapter: string;
  chapterNumber: number;
  category: string;
  cookingMethod: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  imageUrl?: string;
  collection: RecipeCollection;
  /** Only an Arabic version exists so far; hidden in the other languages until translated. */
  arabicOnly?: boolean;
  /** Only an English version exists so far; hidden in the other languages until translated. */
  englishOnly?: boolean;
  ingredientCount: number;
  stepCount: number;
  overlapPercentage: number;
  /** The first few ingredients, shown as pills on the card. */
  previewIngredients: Pick<MasterIngredient, 'id' | 'name' | 'nameEn'>[];
}

export type SupportedLanguage =
  | 'ar' | 'en' | 'fr' | 'es' | 'de' | 'it' | 'tr' | 'ru' | 'pt' | 'ja' 
  | 'zh' | 'hi' | 'ko' | 'id' | 'fa' | 'el' | 'nl' | 'pl' | 'sv' | 'ur' | 'ku' | 'sw';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  dir: 'rtl' | 'ltr';
  flag: string;
}


export interface DatabaseStats {
  totalRecipes: number;
  totalMasterIngredients: number;
  totalUniqueInstructions: number;
  totalRedundantIngredientsMerged: number;
  totalRedundantInstructionsUnified: number;
  averageOverlapRatio: number;
  categoryBreakdown: Record<string, number>;
  chapterBreakdown: Record<string, number>;
}
