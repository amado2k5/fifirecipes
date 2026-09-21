/**
 * Recipe photos live in public/recipe-images/<recipe id>.jpg.
 * Add a recipe's id range here once its photos are in that folder.
 */

// Ids are sequential within each prefix, so photos are listed as ranges.
const idRange = (prefix: string, from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `${prefix}-${String(from + i).padStart(2, '0')}`);

const RECIPES_WITH_IMAGES = [
  ...idRange('meat', 1, 40),
  ...idRange('des', 64, 113)
];

export const RECIPE_IMAGES: Record<string, string> = Object.fromEntries(
  RECIPES_WITH_IMAGES.map(id => [id, `${import.meta.env.BASE_URL}recipe-images/${id}.jpg`])
);

export const DEFAULT_RECIPE_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';

export function getRecipeImage(id: string, customImage?: string): string {
  if (customImage && customImage.trim().length > 0) return customImage;
  return RECIPE_IMAGES[id] || DEFAULT_RECIPE_IMAGE;
}
