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
