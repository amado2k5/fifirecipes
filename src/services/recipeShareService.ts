import { Recipe, SupportedLanguage } from '../types';
import { recipeUrl } from '../utils/seoHead';

/**
 * Canonical URL of a recipe in one language. Uses the static-page scheme
 * (/recipe/<id>/ for base language, /recipe/<id>/<lang>/ for others) so
 * shared links point to indexable, bot-readable pages.
 */
export function getRecipeShareUrl(recipeId: string, lang: SupportedLanguage, englishOnly = false): string {
  return recipeUrl({ id: recipeId, englishOnly } as Recipe, lang);
}

/**
 * Share a single recipe using the operating system's native share sheet
 * (same mechanism as the site-wide share button), falling back to
 * copying the link to the clipboard when the Web Share API isn't
 * available.
 */
export async function shareRecipe(recipe: Pick<Recipe, 'id' | 'englishOnly'>, lang: SupportedLanguage, title: string): Promise<{ shared: boolean; copied: boolean }> {
  const url = getRecipeShareUrl(recipe.id, lang, recipe.englishOnly);
  const shareData = { title, url };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return { shared: true, copied: false };
    } catch {
      return { shared: false, copied: false };
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    return { shared: false, copied: true };
  } catch {
    return { shared: false, copied: false };
  }
}
