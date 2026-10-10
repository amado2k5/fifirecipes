import type { SupportedLanguage } from '../types';

/**
 * A recipe title as people would type it into YouTube: without parenthesised
 * notes or a leading "عمل" ("making …").
 */
export function cleanDishTitle(title: string): string {
  const name = title
    .replace(/\([^)]*\)|（[^）]*）/g, ' ')
    .replace(/^\s*عمل\s+/, '')
    .replace(/\s+/g, ' ')
    .trim();
  return name || title.trim();
}

export const arabicVideoQuery = (title: string) => `طريقة عمل ${cleanDishTitle(title)}`;

export const englishVideoQuery = (titleEn: string) => `${cleanDishTitle(titleEn)} recipe`;

/**
 * How a visitor in each site language would search YouTube for the dish:
 * the localized dish name plus that language's "recipe / how to make" term,
 * so results come back in the visitor's own language.
 */
const VIDEO_SEARCH_QUERIES: Record<SupportedLanguage, (dish: string) => string> = {
  ar: dish => `طريقة عمل ${dish}`,
  en: dish => `${dish} recipe`,
  fr: dish => `${dish} recette`,
  es: dish => `${dish} receta`,
  de: dish => `${dish} Rezept`,
  it: dish => `${dish} ricetta`,
  tr: dish => `${dish} tarifi`,
  ru: dish => `${dish} рецепт`,
  pt: dish => `${dish} receita`,
  ja: dish => `${dish} レシピ`,
  zh: dish => `${dish} 做法`,
  hi: dish => `${dish} रेसिपी`,
  ko: dish => `${dish} 레시피`,
  id: dish => `resep ${dish}`,
  fa: dish => `طرز تهیه ${dish}`,
  el: dish => `${dish} συνταγή`,
  nl: dish => `${dish} recept`,
  pl: dish => `${dish} przepis`,
  sv: dish => `${dish} recept`,
  ur: dish => `${dish} ترکیب`,
  ku: dish => `reçeteya ${dish}`,
  sw: dish => `mapishi ya ${dish}`,
  ps: dish => `د ${dish} جوړولو طریقه`,
  he: dish => `מתכון ל${dish}`,
  te: dish => `${dish} రెసిపీ`,
  bn: dish => `${dish} রেসিপি`,
  vi: dish => `cách làm ${dish}`,
  sq: dish => `recetë për ${dish}`,
  cs: dish => `${dish} recept`,
  ro: dish => `rețetă ${dish}`,
};

export const localizedVideoQuery = (dish: string, lang: SupportedLanguage): string =>
  (VIDEO_SEARCH_QUERIES[lang] ?? VIDEO_SEARCH_QUERIES.en)(dish);
