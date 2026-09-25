import type { SupportedLanguage } from '../types';
import type { KidsRecipe, KidsRecipeCard, LocalizedKidsRecipe } from './types';

/** One language's text for a recipe, as kept in src/data/kids/translations/<lang>.json. */
export interface KidsRecipeTranslation {
  title: string;
  intro: string;
  ingredients: string[];
  steps: string[];
  tip?: string;
}

/**
 * A recipe's text in one language: from its own fields (Arabic and English)
 * or from that language's translation file. Returns the names of any
 * missing texts instead when it is not fully translated.
 */
export function localizeKidsRecipe(
  recipe: KidsRecipe,
  lang: SupportedLanguage,
  translation?: KidsRecipeTranslation
): LocalizedKidsRecipe | string[] {
  const missing: string[] = [];
  const pick = (own: Partial<Record<SupportedLanguage, string>> | undefined, translated: string | undefined, name: string) => {
    const value = own?.[lang] ?? translated;
    if (!value) missing.push(name);
    return value ?? '';
  };
  const localized: LocalizedKidsRecipe = {
    id: recipe.id,
    group: recipe.group,
    ages: recipe.ages,
    minutes: recipe.minutes,
    servings: recipe.servings,
    noCook: recipe.noCook,
    allergens: recipe.allergens,
    cover: recipe.cover,
    ...(recipe.archiveRecipeId ? { archiveRecipeId: recipe.archiveRecipeId } : {}),
    title: pick(recipe.title, translation?.title, 'title'),
    intro: pick(recipe.intro, translation?.intro, 'intro'),
    ingredients: recipe.ingredients.map((ingredient, i) => ({
      art: ingredient.art,
      text: pick(ingredient.text, translation?.ingredients[i], `ingredient ${i + 1}`)
    })),
    tools: recipe.tools,
    steps: recipe.steps.map(({ text, ...step }, i) => ({ ...step, text: pick(text, translation?.steps[i], `step ${i + 1}`) })),
    ...(recipe.tip ? { tip: pick(recipe.tip, translation?.tip, 'tip') } : {})
  };
  return missing.length ? missing : localized;
}

export const kidsRecipeCard = (recipe: LocalizedKidsRecipe): KidsRecipeCard => ({
  id: recipe.id,
  group: recipe.group,
  ages: recipe.ages,
  minutes: recipe.minutes,
  noCook: recipe.noCook,
  allergens: recipe.allergens,
  cover: recipe.cover,
  title: recipe.title,
  stepCount: recipe.steps.length,
  needsAdult: recipe.steps.some(step => step.adult)
});
