/**
 * Recipe photos live in public/recipe-images/<recipe id>.jpg.
 * Add a recipe's id range here once its photos are in that folder.
 */

// Ids are sequential within each prefix, so photos are listed as ranges.
const idRange = (prefix: string, from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `${prefix}-${String(from + i).padStart(2, '0')}`);

const RECIPES_WITH_IMAGES = [
  ...idRange('meat', 1, 60),
  ...idRange('sea', 1, 12),
  ...idRange('soup', 1, 5),
  ...idRange('salad', 1, 11),
  ...idRange('veg', 1, 35),
  ...idRange('veg', 37, 52),
  ...idRange('leg', 1, 5),
  ...idRange('pasta', 1, 26),
  ...idRange('stuff', 1, 11),
  ...idRange('bake', 1, 15),
  ...idRange('savory', 1, 12),
  ...idRange('quick', 1, 8),
  ...idRange('des', 1, 113),
  ...idRange('bev', 1, 5)
];

const RECIPES_WITH_IMAGES_SET = new Set(RECIPES_WITH_IMAGES);

// The build scripts import this module under Node, where import.meta.env is not defined.
const BASE_URL = import.meta.env?.BASE_URL ?? '/';

/** Path of the recipe's own photo (relative to the site root), if it has one. */
export function getRecipeImagePath(id: string): string | undefined {
  return RECIPES_WITH_IMAGES_SET.has(id) ? `recipe-images/${id}.jpg` : undefined;
}

export const DEFAULT_RECIPE_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=75';

export function getRecipeImage(id: string, customImage?: string): string {
  if (customImage && customImage.trim().length > 0) return customImage;
  const path = getRecipeImagePath(id);
  return path ? `${BASE_URL}${path}` : DEFAULT_RECIPE_IMAGE;
}

/** Card-sized copy of the recipe's photo (see scripts/generate-thumbnails.ts). */
export function getRecipeThumbnail(id: string, customImage?: string): string {
  if (customImage && customImage.trim().length > 0) return customImage;
  return RECIPES_WITH_IMAGES_SET.has(id) ? `${BASE_URL}recipe-images/thumbs/${id}.jpg` : DEFAULT_RECIPE_IMAGE;
}
