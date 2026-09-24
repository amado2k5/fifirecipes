import type { SupportedLanguage } from '../types';

/**
 * Whether a recipe is listed in a language. Recipes that so far exist in only
 * one language (Arabic or English) are listed in that language alone until
 * they are translated.
 */
export function isListedIn(recipe: { arabicOnly?: boolean; englishOnly?: boolean }, lang: SupportedLanguage): boolean {
  if (recipe.arabicOnly) return lang === 'ar';
  if (recipe.englishOnly) return lang === 'en';
  return true;
}

/** The audiences the header statistics are precomputed for. */
export type StatsAudience = 'ar' | 'en' | 'other';

export const statsAudienceOf = (lang: SupportedLanguage): StatsAudience =>
  lang === 'ar' || lang === 'en' ? lang : 'other';
