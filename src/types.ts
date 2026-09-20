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
  disabled?: boolean;
  visibility?: boolean;
  averageRating?: number;
  ratingsCount?: number;
  sharesCount?: number;
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
  rawDocVersions: {
    doc1?: RawDocVersion;
    doc2?: RawDocVersion;
    doc3?: RawDocVersion;
  };
}

export type SupportedLanguage = 
  | 'ar' | 'en' | 'fr' | 'es' | 'de' | 'it' | 'tr' | 'ru' | 'pt' | 'ja' 
  | 'zh' | 'hi' | 'ko' | 'id' | 'fa' | 'el' | 'nl' | 'pl' | 'sv' | 'ur';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  dir: 'rtl' | 'ltr';
  flag: string;
}

export type AuthProviderType = 'google' | 'apple' | 'facebook' | 'x' | 'instagram' | 'tiktok' | 'email';

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  provider: AuthProviderType;
  avatar?: string;
  role?: 'admin' | 'user';
  preferredLanguage?: SupportedLanguage;
  bookmarks: string[]; // recipe IDs
  history: {
    recipeId: string;
    recipeTitle: string;
    viewedAt: string;
  }[];
  ratings: Record<string, number>; // recipeId -> star rating (1-5)
  createdAt: string;
  lastActiveAt: string;
}

export interface RecipeComment {
  id: string;
  recipeId: string;
  recipeTitle: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  userProvider: AuthProviderType | 'guest';
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Tribute {
  id: string;
  name: string;
  message: string;
  location?: string;
  language: SupportedLanguage;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  actionType: 'share' | 'bookmark' | 'rating' | 'comment' | 'view';
  recipeId: string;
  recipeTitle: string;
  platform?: 'whatsapp' | 'sms' | 'x' | 'email' | 'copy_link' | 'pdf_export' | 'md_export';
  userId?: string;
  userName?: string;
  userProvider?: string;
  details?: string;
  createdAt: string;
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
