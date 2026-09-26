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
  ...idRange('bev', 1, 5),
  // Generated banners (scripts/recipe-images/ship.py)
  'add-001', 'add-002', 'add-003', 'add-004', 'add-005', 'add-006', 'add-007', 'add-008',
  'add-009', 'add-010', 'add-011', 'add-012', 'add-013', 'add-014', 'add-015', 'add-016',
  'add-017', 'add-018', 'add-019', 'add-020', 'add-021', 'add-022', 'add-023', 'add-024',
  'add-025', 'add-026', 'add-027', 'add-028', 'add-029', 'add-030', 'add-031', 'add-032',
  'add-033', 'add-034', 'add-035', 'add-036', 'add-037', 'add-038', 'add-039', 'add-040',
  'add-041', 'add-042', 'add-043', 'add-044', 'add-045', 'add-046', 'add-047', 'add-048',
  'add-049', 'add-050', 'add-051', 'add-052', 'add-053', 'add-054', 'add-055', 'add-056',
  'add-057', 'add-058', 'add-059', 'add-060', 'add-061', 'add-062', 'add-063', 'add-064',
  'add-065', 'add-066', 'add-067', 'add-068', 'add-069', 'add-070', 'add-071', 'add-072',
  'add-073', 'add-074', 'add-075', 'add-114', 'add-222', 'add-234', 'ec-089', 'ec-124',
  'osool-026', 'osool-433', 'osool-813',
  // End of generated banners
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
