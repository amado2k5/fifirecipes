import type { SupportedLanguage } from '../types';

/** A piece of text in each language it has been written or translated into. */
export type KidsText = Partial<Record<SupportedLanguage, string>>;

export type KidsGroup = 'breakfast' | 'snack' | 'savoury' | 'sweet' | 'drink';
export type KidsAges = '3-5' | '6-8' | '9+';
/** Why a grown-up has to help with a step. */
export type KidsAdultReason = 'knife' | 'oven' | 'stove' | 'hot' | 'blender' | 'microwave';
export type KidsAllergen = 'nuts' | 'peanuts' | 'eggs' | 'milk' | 'gluten' | 'sesame';

export interface KidsIngredient {
  /** A drawing from src/kids/art.ts. */
  art: string;
  text: KidsText;
}

export interface KidsStep {
  /** The action drawn for the step (see SCENES in src/kids/StepPicture.tsx). */
  act: string;
  /** Drawings of what the step uses, shown in the scene. */
  items?: string[];
  /** Replaces the scene's usual container (e.g. a glass instead of a bowl). */
  on?: string;
  /** Replaces the scene's usual tool (e.g. a butter knife instead of a knife). */
  tool?: string;
  adult?: KidsAdultReason;
  /** Minutes to wait; the step shows a countdown timer. */
  timer?: number;
  text: KidsText;
}

export interface KidsRecipe {
  id: string;
  group: KidsGroup;
  ages: KidsAges;
  /** Minutes from start to eating, not counting freezing or chilling overnight. */
  minutes: number;
  servings: number;
  /** No oven, stove, microwave or blender at all. */
  noCook: boolean;
  allergens: KidsAllergen[];
  /** The drawing on the recipe's card. */
  cover: string;
  /** A recipe in Dr. Fatma's archive this is a simple version of. */
  archiveRecipeId?: string;
  title: KidsText;
  intro: KidsText;
  ingredients: KidsIngredient[];
  tools: string[];
  steps: KidsStep[];
  /** A fun idea to try next time. */
  tip?: KidsText;
}

/** A recipe with its text in one language, as served in public/data/kids/<lang>/<id>.json. */
export interface LocalizedKidsRecipe {
  id: string;
  group: KidsGroup;
  ages: KidsAges;
  minutes: number;
  servings: number;
  noCook: boolean;
  allergens: KidsAllergen[];
  cover: string;
  archiveRecipeId?: string;
  title: string;
  intro: string;
  ingredients: { art: string; text: string }[];
  tools: string[];
  steps: (Omit<KidsStep, 'text'> & { text: string })[];
  tip?: string;
}

/** The card slice of a recipe, as served in public/data/kids/<lang>/index.json. */
export type KidsRecipeCard = Pick<LocalizedKidsRecipe, 'id' | 'group' | 'ages' | 'minutes' | 'noCook' | 'allergens' | 'cover' | 'title'> & {
  stepCount: number;
  needsAdult: boolean;
};

export type { SupportedLanguage };
