// Estimated nutrition (per serving) and ingredient cost (whole recipe, USD)
// for each recipe. Values are approximations derived from each recipe's
// master ingredients and typical USDA-style nutrient data and average US
// supermarket prices (2026); the UI always labels them as estimates.
// Reference/technique entries without a dish (e.g. veg-52 storage tips) are
// intentionally omitted.

export type CostGroup =
  | 'protein'     // meat, poultry, fish & seafood (incl. broth made from them)
  | 'dairyEggs'   // milk, yogurt, cheese, cream, butter, ghee, eggs
  | 'produce'     // fresh vegetables, herbs & fruit
  | 'grains'      // rice, flour, pasta, bread, phyllo, legumes
  | 'fats'        // cooking & frying oils and other fats
  | 'sweeteners'  // sugar, honey, molasses, syrups, jelly powder
  | 'specialty'   // nuts, dried fruit, chocolate, tahini, olives, condiments
  | 'spices';     // spices, salt, vinegar, seasonings

export const COST_GROUP_ORDER: CostGroup[] = ['protein', 'dairyEggs', 'produce', 'grains', 'fats', 'sweeteners', 'specialty', 'spices'];

export interface RecipeEstimate {
  /** Number of servings the per-serving nutrition is based on. */
  servings: number;
  /** Per serving. */
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
  sugar: number;
  /** Whole-recipe ingredient cost in USD, grouped. */
  cost: Partial<Record<CostGroup, number>>;
}

// The estimates table itself lives in recipeEstimatesData.ts and is only read at
// build time; the browser receives each recipe's estimate inside that recipe's
// data file and registers it here when the recipe is opened.
const loadedEstimates: Record<string, RecipeEstimate> = {};

export function registerRecipeEstimate(recipeId: string, estimate: RecipeEstimate | undefined): void {
  if (estimate) loadedEstimates[recipeId] = estimate;
}

export function getRecipeEstimate(recipeId: string): RecipeEstimate | undefined {
  return loadedEstimates[recipeId];
}

export type HealthTag = 'highProtein' | 'goodFiber' | 'light' | 'hearty' | 'highSugar' | 'highFat' | 'lowFat' | 'meatFree';

/** Share of calories (0-100) from protein, fat and carbohydrates. */
export function getEnergySplit(e: RecipeEstimate) {
  const p = e.protein * 4;
  const f = e.fat * 9;
  const c = e.carbs * 4;
  const total = p + f + c || 1;
  const protein = Math.round((p / total) * 100);
  const fat = Math.round((f / total) * 100);
  return { protein, fat, carbs: Math.max(0, 100 - protein - fat) };
}

export function getHealthTags(e: RecipeEstimate): HealthTag[] {
  const split = getEnergySplit(e);
  const tags: HealthTag[] = [];
  if (e.protein >= 20 || (e.protein >= 10 && split.protein >= 25)) tags.push('highProtein');
  if (e.fiber >= 5) tags.push('goodFiber');
  if (e.kcal >= 600) tags.push('hearty');
  else if (e.kcal < 250) tags.push('light');
  if (e.sugar >= 25) tags.push('highSugar');
  if (e.fat >= 15 && split.fat >= 50) tags.push('highFat');
  else if (e.fat <= 5 && e.kcal >= 60) tags.push('lowFat');
  if (!e.cost.protein) tags.push('meatFree');
  return tags;
}

/** A rounded ±spread range around an estimate, e.g. 320 kcal → [290, 350]. */
export function toRange(value: number, spread: number, step: number): [number, number] {
  const lo = Math.max(0, Math.round((value * (1 - spread)) / step) * step);
  const hi = Math.max(lo, Math.round((value * (1 + spread)) / step) * step);
  return [lo, hi];
}

export function getCostTotal(e: RecipeEstimate): number {
  return COST_GROUP_ORDER.reduce((sum, g) => sum + (e.cost[g] || 0), 0);
}

/** "4" for whole numbers, "3–4" for half servings like 3.5. */
export function formatServings(n: number): string {
  return Number.isInteger(n) ? String(n) : `${Math.floor(n)}–${Math.ceil(n)}`;
}

export function formatUsd(value: number): string {
  return `$${value.toFixed(2)}`;
}

/** schema.org Recipe fields (nutrition + yield) for structured data. */
export function recipeNutritionSchema(recipeId: string) {
  const e = loadedEstimates[recipeId];
  if (!e) return {};
  return {
    recipeYield: `${formatServings(e.servings)} servings`,
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '1 serving',
      calories: `${e.kcal} calories`,
      proteinContent: `${e.protein} g`,
      fatContent: `${e.fat} g`,
      carbohydrateContent: `${e.carbs} g`,
      fiberContent: `${e.fiber} g`,
      sugarContent: `${e.sugar} g`
    }
  };
}
