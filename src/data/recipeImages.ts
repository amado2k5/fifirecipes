/**
 * Recipe photos live in public/recipe-images/<recipe id>.jpg.
 * Add a recipe's id here once its photo is in that folder.
 */

const RECIPES_WITH_IMAGES = [
  'meat-01', 'meat-02', 'meat-03', 'meat-04', 'meat-05',
  'meat-06', 'meat-07', 'meat-08', 'meat-09', 'meat-10',
  'meat-11', 'meat-12', 'meat-13', 'meat-14', 'meat-15',
  'meat-16', 'meat-17', 'meat-18', 'meat-19', 'meat-20',
  'meat-21', 'meat-22', 'meat-23', 'meat-24', 'meat-25',
  'meat-26', 'meat-27', 'meat-28', 'meat-29', 'meat-30',
  'meat-31', 'meat-32', 'meat-33', 'meat-34', 'meat-35',
  'meat-36', 'meat-37', 'meat-38', 'meat-39', 'meat-40'
];

export const RECIPE_IMAGES: Record<string, string> = Object.fromEntries(
  RECIPES_WITH_IMAGES.map(id => [id, `${import.meta.env.BASE_URL}recipe-images/${id}.jpg`])
);

export const DEFAULT_RECIPE_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';

export function getRecipeImage(id: string, customImage?: string): string {
  if (customImage && customImage.trim().length > 0) return customImage;
  return RECIPE_IMAGES[id] || DEFAULT_RECIPE_IMAGE;
}
