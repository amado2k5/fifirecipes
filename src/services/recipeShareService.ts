import { Recipe, SupportedLanguage } from '../types';

/**
 * Clean URL of the current recipe
 */
export function getRecipeShareUrl(recipeId: string, lang: SupportedLanguage): string {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('recipe', recipeId);
    url.searchParams.set('lang', lang);
    return url.toString();
  }
  return `https://fifi.cooking/?recipe=${recipeId}&lang=${lang}`;
}

/**
 * Share a single recipe using the operating system's native share sheet
 * (same mechanism as the site-wide share button), falling back to
 * copying the link to the clipboard when the Web Share API isn't
 * available.
 */
export async function shareRecipe(recipe: Recipe, lang: SupportedLanguage, title: string): Promise<{ shared: boolean; copied: boolean }> {
  const url = getRecipeShareUrl(recipe.id, lang);
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
