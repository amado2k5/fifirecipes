/**
 * Recipe photos live in public/recipe-images/<recipe id>.jpg.
 * Add a recipe's id here once its photo is in that folder.
 */

const RECIPES_WITH_IMAGES = [
  'meat-01', 'meat-02', 'meat-03', 'meat-04', 'meat-05',
  'meat-06', 'meat-07', 'meat-08', 'meat-09', 'meat-10'
];

export const RECIPE_IMAGES: Record<string, string> = Object.fromEntries(
  RECIPES_WITH_IMAGES.map(id => [id, `${import.meta.env.BASE_URL}recipe-images/${id}.jpg`])
);

export const DEFAULT_RECIPE_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';

export function getRecipeImage(id: string, customImage?: string): string {
  if (customImage && customImage.trim().length > 0) return customImage;
  return RECIPE_IMAGES[id] || DEFAULT_RECIPE_IMAGE;
}
