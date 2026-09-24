// Estimated nutrition (per serving) and ingredient cost (whole recipe, USD)
// for each recipe. Values are approximations derived from each recipe's
// master ingredients and typical USDA-style nutrient data and average US
// supermarket prices (2026); the UI always labels them as estimates.
// Reference/technique entries without a dish (e.g. veg-52 storage tips) are
// intentionally omitted.

import { ADDITIONAL_RECIPE_ESTIMATES } from './additionalRecipeEstimates';

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

export const RECIPE_ESTIMATES: Record<string, RecipeEstimate> = {
  'meat-01': { servings: 5, kcal: 320, protein: 32, fat: 20, carbs: 4, fiber: 1, sugar: 2, cost: { protein: 10, produce: 1, fats: 0.5, spices: 0.5 } },
  'meat-02': { servings: 5, kcal: 290, protein: 34, fat: 14, carbs: 6, fiber: 1, sugar: 3, cost: { protein: 16, produce: 1.5, fats: 0.5, spices: 0.5 } },
  'meat-03': { servings: 4.5, kcal: 360, protein: 25, fat: 18, carbs: 22, fiber: 3, sugar: 4, cost: { protein: 8, produce: 2, fats: 0.5, spices: 0.5 } },
  'meat-04': { servings: 4, kcal: 260, protein: 22, fat: 17, carbs: 5, fiber: 1, sugar: 3, cost: { protein: 7, produce: 1, fats: 0.5, spices: 0.3 } },
  'meat-05': { servings: 5, kcal: 340, protein: 22, fat: 22, carbs: 12, fiber: 2, sugar: 1, cost: { protein: 7, grains: 0.5, produce: 0.5, spices: 0.5, specialty: 0.5 } },
  'meat-06': { servings: 3.5, kcal: 280, protein: 28, fat: 14, carbs: 10, fiber: 1, sugar: 2, cost: { protein: 6, produce: 2, fats: 0.4, spices: 0.5 } },
  'meat-07': { servings: 3, kcal: 520, protein: 32, fat: 22, carbs: 48, fiber: 2, sugar: 1, cost: { protein: 18, grains: 1, produce: 0.5, fats: 0.8, spices: 0.5 } },
  'meat-08': { servings: 4, kcal: 480, protein: 42, fat: 32, carbs: 5, fiber: 1, sugar: 2, cost: { protein: 16, produce: 0.5, fats: 0.4, spices: 0.5 } },
  'meat-09': { servings: 4, kcal: 520, protein: 50, fat: 32, carbs: 5, fiber: 1, sugar: 2, cost: { protein: 14, produce: 0.8, fats: 0.4, spices: 0.4 } },
  'meat-10': { servings: 4, kcal: 430, protein: 28, fat: 33, carbs: 5, fiber: 1, sugar: 2, cost: { protein: 5, produce: 1.5, fats: 0.8, spices: 0.5 } },
  'meat-11': { servings: 4, kcal: 420, protein: 42, fat: 20, carbs: 16, fiber: 2, sugar: 2, cost: { protein: 12, produce: 1.5, fats: 0.8, spices: 0.5 } },
  'meat-12': { servings: 4, kcal: 290, protein: 24, fat: 19, carbs: 6, fiber: 1, sugar: 3, cost: { protein: 7, produce: 1, fats: 0.4, spices: 0.3 } },
  'meat-13': { servings: 4, kcal: 430, protein: 45, fat: 26, carbs: 3, fiber: 0, sugar: 1, cost: { protein: 13, produce: 0.5, fats: 0.5, spices: 0.4 } },
  'meat-14': { servings: 4, kcal: 460, protein: 46, fat: 26, carbs: 9, fiber: 2, sugar: 5, cost: { protein: 13, produce: 1.5, fats: 0.5, spices: 0.4 } },
  'meat-15': { servings: 4, kcal: 440, protein: 45, fat: 26, carbs: 5, fiber: 1, sugar: 3, cost: { protein: 13, produce: 0.4, fats: 0.5, spices: 0.3 } },
  'meat-16': { servings: 4, kcal: 320, protein: 26, fat: 20, carbs: 8, fiber: 1, sugar: 5, cost: { protein: 7, produce: 0.6, dairyEggs: 0.3, fats: 0.5, spices: 0.3 } },
  'meat-17': { servings: 4, kcal: 390, protein: 55, fat: 16, carbs: 7, fiber: 1, sugar: 4, cost: { protein: 10, produce: 1, dairyEggs: 1.2, fats: 0.4, spices: 0.4 } },
  'meat-18': { servings: 4, kcal: 360, protein: 55, fat: 10, carbs: 12, fiber: 2, sugar: 4, cost: { protein: 10, produce: 1, grains: 0.2, fats: 0.3, spices: 0.5 } },
  'meat-19': { servings: 4, kcal: 370, protein: 56, fat: 11, carbs: 11, fiber: 1, sugar: 5, cost: { protein: 10, produce: 0.8, grains: 0.1, dairyEggs: 0.4, fats: 0.3, spices: 0.4 } },
  'meat-20': { servings: 4, kcal: 420, protein: 40, fat: 25, carbs: 7, fiber: 1, sugar: 0, cost: { protein: 7, grains: 0.1, fats: 0.5, spices: 0.6 } },
  'meat-21': { servings: 4, kcal: 520, protein: 46, fat: 33, carbs: 8, fiber: 2, sugar: 3, cost: { protein: 13, produce: 1.5, specialty: 0.6, fats: 0.8, spices: 0.4 } },
  'meat-22': { servings: 3.5, kcal: 350, protein: 28, fat: 23, carbs: 6, fiber: 1, sugar: 2, cost: { protein: 7, produce: 0.8, fats: 0.3, spices: 1.2 } },
  'meat-23': { servings: 4, kcal: 560, protein: 52, fat: 28, carbs: 24, fiber: 1, sugar: 2, cost: { protein: 12, produce: 0.8, dairyEggs: 0.8, grains: 0.8, fats: 1, spices: 0.4 } },
  'meat-24': { servings: 3.5, kcal: 290, protein: 32, fat: 11, carbs: 14, fiber: 1, sugar: 3, cost: { protein: 5, produce: 0.4, grains: 0.1, fats: 0.5, spices: 0.8 } },
  'meat-25': { servings: 4, kcal: 480, protein: 36, fat: 28, carbs: 18, fiber: 1, sugar: 1, cost: { protein: 7, dairyEggs: 0.6, grains: 0.6, fats: 1, spices: 0.3 } },
  'meat-26': { servings: 4, kcal: 390, protein: 18, fat: 24, carbs: 24, fiber: 1, sugar: 4, cost: { protein: 3, produce: 0.3, dairyEggs: 1, grains: 0.6, fats: 1, spices: 0.3 } },
  'meat-27': { servings: 4, kcal: 600, protein: 42, fat: 36, carbs: 24, fiber: 1, sugar: 2, cost: { protein: 7, produce: 0.4, dairyEggs: 0.6, grains: 0.7, fats: 1.5, spices: 0.5 } },
  'meat-28': { servings: 4, kcal: 640, protein: 42, fat: 40, carbs: 26, fiber: 1, sugar: 1, cost: { protein: 7, produce: 0.4, dairyEggs: 0.6, grains: 0.8, fats: 1.5, spices: 0.4 } },
  'meat-29': { servings: 4, kcal: 540, protein: 40, fat: 34, carbs: 14, fiber: 1, sugar: 2, cost: { protein: 7, produce: 0.4, dairyEggs: 0.6, grains: 0.3, fats: 1.4, spices: 0.5 } },
  'meat-30': { servings: 7, kcal: 190, protein: 15, fat: 12, carbs: 6, fiber: 1, sugar: 1, cost: { protein: 7, produce: 0.8, dairyEggs: 0.6, grains: 0.1, fats: 0.3, spices: 0.3 } },
  'meat-31': { servings: 5, kcal: 300, protein: 32, fat: 18, carbs: 3, fiber: 1, sugar: 1, cost: { protein: 7, produce: 0.5, dairyEggs: 0.3, fats: 0.3, spices: 0.3 } },
  'meat-32': { servings: 4, kcal: 420, protein: 28, fat: 26, carbs: 18, fiber: 1, sugar: 1, cost: { protein: 4, produce: 0.3, dairyEggs: 0.3, grains: 0.5, fats: 1, spices: 0.3 } },
  'meat-33': { servings: 4, kcal: 430, protein: 27, fat: 26, carbs: 20, fiber: 1, sugar: 2, cost: { protein: 7, grains: 0.3, produce: 0.6, dairyEggs: 0.9, fats: 0.8, spices: 0.3 } },
  'meat-34': { servings: 4, kcal: 230, protein: 14, fat: 12, carbs: 16, fiber: 1, sugar: 2, cost: { protein: 3.5, grains: 0.3, produce: 0.6, dairyEggs: 0.3, spices: 0.4 } },
  'meat-35': { servings: 4, kcal: 390, protein: 23, fat: 24, carbs: 22, fiber: 2, sugar: 2, cost: { protein: 7, produce: 1.5, grains: 0.3, fats: 0.6, spices: 0.3 } },
  'meat-36': { servings: 4, kcal: 90, protein: 2, fat: 0, carbs: 20, fiber: 4, sugar: 6, cost: { produce: 3, spices: 0.3 } },
  'meat-37': { servings: 4, kcal: 330, protein: 22, fat: 23, carbs: 8, fiber: 1, sugar: 2, cost: { protein: 7, produce: 0.8, grains: 0.05, fats: 0.5, spices: 0.3 } },
  'meat-38': { servings: 4, kcal: 90, protein: 2, fat: 6, carbs: 9, fiber: 2, sugar: 5, cost: { produce: 2, fats: 0.3, spices: 0.3 } },
  'meat-39': { servings: 4, kcal: 330, protein: 22, fat: 21, carbs: 13, fiber: 1, sugar: 3, cost: { protein: 7, produce: 0.3, grains: 0.3, spices: 0.3 } },
  'meat-40': { servings: 7, kcal: 360, protein: 22, fat: 22, carbs: 18, fiber: 3, sugar: 1, cost: { protein: 10, grains: 0.5, produce: 0.8, fats: 0.8, specialty: 2, spices: 0.4 } },
  'meat-41': { servings: 4, kcal: 160, protein: 7, fat: 13, carbs: 4, fiber: 1, sugar: 2, cost: { protein: 2, specialty: 2, fats: 0.3, produce: 0.3, spices: 0.2 } },
  'meat-42': { servings: 4, kcal: 70, protein: 2, fat: 4, carbs: 7, fiber: 1, sugar: 4, cost: { produce: 1.5, dairyEggs: 0.8, fats: 0.3, spices: 0.4 } },
  'meat-43': { servings: 4, kcal: 80, protein: 1, fat: 5, carbs: 8, fiber: 2, sugar: 4, cost: { produce: 2, fats: 0.3, spices: 0.5 } },
  'meat-44': { servings: 5, kcal: 380, protein: 36, fat: 22, carbs: 9, fiber: 2, sugar: 5, cost: { protein: 11, produce: 2, fats: 0.5, spices: 0.5 } },
  'meat-45': { servings: 5, kcal: 440, protein: 40, fat: 26, carbs: 11, fiber: 2, sugar: 4, cost: { protein: 11, produce: 3, dairyEggs: 2, specialty: 1, fats: 0.6, spices: 0.4 } },
  'meat-46': { servings: 4, kcal: 520, protein: 44, fat: 35, carbs: 5, fiber: 0, sugar: 0, cost: { protein: 7, grains: 0.1, fats: 0.6, spices: 0.5 } },
  'meat-47': { servings: 7, kcal: 420, protein: 48, fat: 22, carbs: 5, fiber: 1, sugar: 2, cost: { protein: 30, produce: 1.5, spices: 0.6 } },
  'meat-48': { servings: 7, kcal: 160, protein: 4, fat: 9, carbs: 14, fiber: 1, sugar: 6, cost: { produce: 2, dairyEggs: 2, fats: 0.4, grains: 0.1, spices: 0.5 } },
  'meat-49': { servings: 5, kcal: 360, protein: 40, fat: 18, carbs: 8, fiber: 1, sugar: 6, cost: { protein: 11, produce: 1.5, dairyEggs: 2, fats: 0.4, spices: 0.5 } },
  'meat-50': { servings: 5, kcal: 400, protein: 40, fat: 24, carbs: 5, fiber: 1, sugar: 2, cost: { protein: 13, produce: 1, fats: 0.3, spices: 0.3 } },
  'meat-51': { servings: 4, kcal: 300, protein: 29, fat: 17, carbs: 7, fiber: 1, sugar: 4, cost: { protein: 5, produce: 0.6, dairyEggs: 0.6, spices: 0.4 } },
  'meat-52': { servings: 4, kcal: 380, protein: 40, fat: 20, carbs: 8, fiber: 2, sugar: 4, cost: { protein: 7, produce: 1.2, fats: 0.4, spices: 0.5 } },
  'meat-53': { servings: 4, kcal: 560, protein: 46, fat: 34, carbs: 16, fiber: 1, sugar: 6, cost: { protein: 7, specialty: 2, produce: 0.5, grains: 0.8, fats: 0.3, dairyEggs: 2.5, spices: 0.2 } },
  'meat-54': { servings: 4, kcal: 380, protein: 56, fat: 16, carbs: 3, fiber: 0, sugar: 2, cost: { protein: 10, fats: 0.5, dairyEggs: 0.8, spices: 0.5 } },
  'meat-55': { servings: 4, kcal: 520, protein: 62, fat: 28, carbs: 5, fiber: 0, sugar: 3, cost: { protein: 10, produce: 0.4, dairyEggs: 5, fats: 0.4, spices: 0.3 } },
  'meat-56': { servings: 4, kcal: 680, protein: 34, fat: 52, carbs: 18, fiber: 1, sugar: 3, cost: { protein: 20, produce: 0.8, dairyEggs: 0.8, grains: 0.4, spices: 0.4 } },
  'meat-57': { servings: 9, kcal: 480, protein: 62, fat: 24, carbs: 3, fiber: 0, sugar: 1, cost: { protein: 30, produce: 1, fats: 0.6, spices: 0.8 } },
  'meat-58': { servings: 4, kcal: 420, protein: 28, fat: 28, carbs: 14, fiber: 1, sugar: 2, cost: { protein: 7, produce: 0.3, dairyEggs: 0.6, grains: 0.5, fats: 0.8, spices: 0.3, specialty: 0.5 } },
  'meat-59': { servings: 4, kcal: 420, protein: 42, fat: 24, carbs: 8, fiber: 1, sugar: 4, cost: { protein: 7, produce: 1.5, dairyEggs: 1, fats: 0.6, spices: 0.5 } },
  'meat-60': { servings: 5, kcal: 480, protein: 28, fat: 24, carbs: 38, fiber: 2, sugar: 2, cost: { protein: 5, produce: 0.4, dairyEggs: 1.5, grains: 3, fats: 1.5, specialty: 0.3, spices: 0.2 } },
  'sea-01': { servings: 4, kcal: 450, protein: 36, fat: 22, carbs: 28, fiber: 1, sugar: 1, cost: { protein: 14, produce: 0.8, grains: 0.8, dairyEggs: 0.6, fats: 1.5, spices: 0.6 } },
  'sea-02': { servings: 4, kcal: 320, protein: 38, fat: 12, carbs: 16, fiber: 6, sugar: 2, cost: { protein: 14, grains: 0.8, produce: 1.5, spices: 0.6 } },
  'sea-03': { servings: 4, kcal: 470, protein: 28, fat: 12, carbs: 62, fiber: 2, sugar: 3, cost: { protein: 12, grains: 2, produce: 0.8, fats: 0.4, spices: 0.4 } },
  'sea-04': { servings: 4, kcal: 380, protein: 22, fat: 18, carbs: 30, fiber: 1, sugar: 0, cost: { protein: 10, grains: 0.4, produce: 0.5, fats: 1.2, spices: 0.4 } },
  'sea-05': { servings: 4, kcal: 70, protein: 2, fat: 4, carbs: 6, fiber: 0, sugar: 3, cost: { grains: 0.05, fats: 0.2, dairyEggs: 0.3, spices: 0.1 } },
  'sea-06': { servings: 5, kcal: 360, protein: 42, fat: 16, carbs: 10, fiber: 2, sugar: 4, cost: { protein: 18, produce: 2, fats: 0.5, spices: 0.4 } },
  'sea-07': { servings: 4, kcal: 320, protein: 36, fat: 16, carbs: 8, fiber: 2, sugar: 4, cost: { protein: 14, produce: 1.8, fats: 0.4, spices: 0.4 } },
  'sea-08': { servings: 5, kcal: 380, protein: 36, fat: 14, carbs: 26, fiber: 3, sugar: 5, cost: { protein: 14, produce: 2.5, dairyEggs: 0.8, grains: 0.1, spices: 0.5 } },
  'sea-09': { servings: 4, kcal: 360, protein: 36, fat: 16, carbs: 16, fiber: 1, sugar: 0, cost: { protein: 16, grains: 0.2, fats: 1.2, produce: 0.4, spices: 0.4 } },
  'sea-10': { servings: 4, kcal: 240, protein: 42, fat: 3, carbs: 12, fiber: 3, sugar: 5, cost: { protein: 22, produce: 2.5, spices: 0.8 } },
  'sea-11': { servings: 4, kcal: 310, protein: 42, fat: 10, carbs: 12, fiber: 3, sugar: 5, cost: { protein: 22, produce: 2.5, specialty: 0.4, spices: 0.8 } },
  'sea-12': { servings: 4, kcal: 290, protein: 42, fat: 8, carbs: 12, fiber: 3, sugar: 5, cost: { protein: 22, produce: 2.5, fats: 0.4, spices: 0.8 } },
  'soup-01': { servings: 5, kcal: 140, protein: 6, fat: 5, carbs: 18, fiber: 4, sugar: 6, cost: { protein: 1.5, produce: 3, dairyEggs: 0.4, spices: 0.4 } },
  'soup-02': { servings: 5, kcal: 330, protein: 16, fat: 8, carbs: 50, fiber: 10, sugar: 4, cost: { grains: 2.5, produce: 1.5, dairyEggs: 0.6, fats: 0.4, spices: 0.4 } },
  'salad-01': { servings: 4, kcal: 190, protein: 5, fat: 16, carbs: 8, fiber: 3, sugar: 0, cost: { specialty: 3, produce: 0.4, spices: 0.3 } },
  'salad-02': { servings: 4, kcal: 170, protein: 4, fat: 13, carbs: 12, fiber: 6, sugar: 6, cost: { produce: 4, specialty: 1.5, fats: 0.8, spices: 0.3 } },
  'soup-03': { servings: 2.5, kcal: 110, protein: 4, fat: 6, carbs: 11, fiber: 0, sugar: 0, cost: { protein: 0.8, grains: 0.1, dairyEggs: 0.3, spices: 0.1 } },
  'soup-04': { servings: 4, kcal: 190, protein: 15, fat: 10, carbs: 10, fiber: 1, sugar: 4, cost: { protein: 2, produce: 0.3, grains: 0.1, dairyEggs: 1, spices: 0.4 } },
  'soup-05': { servings: 4, kcal: 120, protein: 3, fat: 7, carbs: 12, fiber: 2, sugar: 7, cost: { produce: 1, dairyEggs: 0.8, grains: 0.05, protein: 0.8, spices: 0.2 } },
  'salad-03': { servings: 8, kcal: 130, protein: 1, fat: 14, carbs: 0, fiber: 0, sugar: 0, cost: { fats: 0.8, dairyEggs: 0.3, spices: 0.3 } },
  'salad-04': { servings: 4, kcal: 330, protein: 24, fat: 18, carbs: 18, fiber: 1, sugar: 5, cost: { protein: 4, dairyEggs: 1.5, specialty: 0.5, fats: 0.3, grains: 0.5, spices: 0.1 } },
  'salad-05': { servings: 4, kcal: 50, protein: 3, fat: 2, carbs: 5, fiber: 0, sugar: 4, cost: { dairyEggs: 0.6, produce: 0.5, spices: 0.1 } },
  'salad-06': { servings: 4, kcal: 20, protein: 1, fat: 0, carbs: 4, fiber: 0, sugar: 0, cost: { produce: 0.5, spices: 0.4 } },
  'salad-07': { servings: 5, kcal: 240, protein: 10, fat: 12, carbs: 24, fiber: 7, sugar: 3, cost: { grains: 2, produce: 1, dairyEggs: 0.6, specialty: 0.6, fats: 0.3, spices: 0.3 } },
  'salad-08': { servings: 4, kcal: 120, protein: 3, fat: 3, carbs: 20, fiber: 4, sugar: 5, cost: { produce: 3.5, grains: 0.5, specialty: 0.5, spices: 0.3 } },
  'salad-09': { servings: 8, kcal: 140, protein: 2, fat: 15, carbs: 1, fiber: 0, sugar: 0, cost: { dairyEggs: 0.9, fats: 0.8, produce: 0.3, spices: 0.2 } },
  'salad-10': { servings: 5, kcal: 330, protein: 4, fat: 28, carbs: 16, fiber: 4, sugar: 3, cost: { produce: 2.5, specialty: 1.5 } },
  'salad-11': { servings: 4, kcal: 120, protein: 2, fat: 7, carbs: 14, fiber: 3, sugar: 4, cost: { produce: 2.5, fats: 0.3, spices: 0.2 } },
  'veg-01': { servings: 5, kcal: 120, protein: 6, fat: 7, carbs: 10, fiber: 4, sugar: 2, cost: { produce: 3, protein: 2, dairyEggs: 0.6, spices: 0.4 } },
  'veg-02': { servings: 5, kcal: 230, protein: 5, fat: 7, carbs: 40, fiber: 6, sugar: 3, cost: { produce: 5, protein: 1.5, dairyEggs: 0.6, spices: 0.2 } },
  'leg-01': { servings: 6, kcal: 520, protein: 17, fat: 10, carbs: 92, fiber: 11, sugar: 6, cost: { grains: 4, produce: 2, fats: 1, spices: 0.6 } },
  'leg-02': { servings: 6, kcal: 380, protein: 16, fat: 22, carbs: 32, fiber: 9, sugar: 2, cost: { grains: 2, produce: 1.5, specialty: 0.8, fats: 1.5, spices: 0.4 } },
  'veg-03': { servings: 5, kcal: 380, protein: 36, fat: 20, carbs: 14, fiber: 5, sugar: 6, cost: { protein: 13, produce: 4, fats: 0.4, spices: 0.3 } },
  'veg-04': { servings: 5, kcal: 400, protein: 34, fat: 22, carbs: 16, fiber: 5, sugar: 6, cost: { protein: 7, produce: 4, fats: 0.4, spices: 0.4 } },
  'veg-05': { servings: 4, kcal: 130, protein: 3, fat: 7, carbs: 15, fiber: 5, sugar: 4, cost: { produce: 3, fats: 0.5, spices: 0.2 } },
  'veg-06': { servings: 4, kcal: 120, protein: 4, fat: 7, carbs: 13, fiber: 5, sugar: 6, cost: { produce: 3, protein: 0.8, fats: 0.4, spices: 0.2 } },
  'veg-07': { servings: 4, kcal: 280, protein: 22, fat: 15, carbs: 14, fiber: 5, sugar: 6, cost: { produce: 3, protein: 6, fats: 0.4, spices: 0.2 } },
  'veg-08': { servings: 4, kcal: 290, protein: 6, fat: 7, carbs: 50, fiber: 4, sugar: 3, cost: { produce: 2.5, grains: 0.8, fats: 0.4, spices: 0.2 } },
  'veg-09': { servings: 4, kcal: 110, protein: 3, fat: 7, carbs: 11, fiber: 4, sugar: 4, cost: { produce: 2.5, fats: 0.4, spices: 0.2 } },
  'veg-10': { servings: 4, kcal: 230, protein: 10, fat: 8, carbs: 30, fiber: 10, sugar: 12, cost: { produce: 5, protein: 0.8, fats: 0.4, spices: 0.2 } },
  'veg-11': { servings: 4, kcal: 300, protein: 8, fat: 7, carbs: 50, fiber: 5, sugar: 5, cost: { grains: 0.8, produce: 2.5, fats: 0.4, spices: 0.2 } },
  'veg-12': { servings: 6, kcal: 380, protein: 18, fat: 16, carbs: 40, fiber: 8, sugar: 8, cost: { produce: 5, grains: 1, protein: 5, fats: 0.6, specialty: 1.5, spices: 0.3 } },
  'veg-13': { servings: 4, kcal: 150, protein: 5, fat: 7, carbs: 18, fiber: 8, sugar: 6, cost: { produce: 5, protein: 0.8, fats: 0.4, spices: 0.2 } },
  'veg-14': { servings: 5, kcal: 290, protein: 20, fat: 16, carbs: 17, fiber: 7, sugar: 6, cost: { produce: 5, protein: 5, fats: 0.4, spices: 0.2 } },
  'veg-15': { servings: 4, kcal: 120, protein: 4, fat: 7, carbs: 13, fiber: 3, sugar: 8, cost: { produce: 4, protein: 0.6, fats: 0.4, spices: 0.2 } },
  'veg-16': { servings: 4, kcal: 190, protein: 9, fat: 12, carbs: 13, fiber: 3, sugar: 10, cost: { produce: 3, dairyEggs: 1.2, protein: 0.4, fats: 0.3, spices: 0.2 } },
  'veg-17': { servings: 5, kcal: 220, protein: 10, fat: 13, carbs: 16, fiber: 2, sugar: 10, cost: { produce: 2.5, dairyEggs: 1.5, grains: 0.2, protein: 0.4, fats: 0.3, spices: 0.2 } },
  'veg-18': { servings: 6, kcal: 130, protein: 6, fat: 8, carbs: 9, fiber: 0, sugar: 7, cost: { dairyEggs: 1.5, grains: 0.1, fats: 0.2, spices: 0.1 } },
  'veg-19': { servings: 4, kcal: 260, protein: 12, fat: 20, carbs: 9, fiber: 3, sugar: 7, cost: { produce: 4, dairyEggs: 4, specialty: 1.5 } },
  'veg-20': { servings: 5, kcal: 300, protein: 18, fat: 18, carbs: 16, fiber: 3, sugar: 8, cost: { produce: 4, protein: 3, dairyEggs: 2, grains: 0.3, spices: 0.3 } },
  'veg-21': { servings: 5, kcal: 230, protein: 4, fat: 7, carbs: 38, fiber: 6, sugar: 4, cost: { produce: 5, protein: 0.8, fats: 0.4, spices: 0.2 } },
  'veg-22': { servings: 5, kcal: 220, protein: 3, fat: 17, carbs: 16, fiber: 7, sugar: 9, cost: { produce: 5, protein: 0.6, fats: 1.2, spices: 0.2 } },
  'veg-23': { servings: 5, kcal: 320, protein: 12, fat: 24, carbs: 16, fiber: 7, sugar: 9, cost: { produce: 5, protein: 3, dairyEggs: 0.8, fats: 1.2, spices: 0.2 } },
  'veg-24': { servings: 4, kcal: 260, protein: 3, fat: 22, carbs: 16, fiber: 8, sugar: 9, cost: { produce: 5, fats: 1.5, spices: 0.3 } },
  'veg-25': { servings: 6, kcal: 520, protein: 20, fat: 22, carbs: 60, fiber: 6, sugar: 6, cost: { produce: 4, protein: 7, grains: 1.5, fats: 1.5, spices: 0.5 } },
  'veg-26': { servings: 5, kcal: 280, protein: 12, fat: 20, carbs: 14, fiber: 4, sugar: 6, cost: { produce: 4, protein: 3, fats: 1.2, spices: 0.3 } },
  'veg-27': { servings: 5, kcal: 330, protein: 15, fat: 23, carbs: 16, fiber: 4, sugar: 7, cost: { produce: 4, protein: 3, dairyEggs: 2.5, fats: 1, spices: 0.3 } },
  'veg-28': { servings: 5, kcal: 120, protein: 4, fat: 6, carbs: 14, fiber: 7, sugar: 1, cost: { produce: 8, fats: 0.4, spices: 0.2 } },
  'veg-29': { servings: 5, kcal: 220, protein: 12, fat: 12, carbs: 16, fiber: 7, sugar: 3, cost: { produce: 8, protein: 4, fats: 0.4, spices: 0.2 } },
  'veg-30': { servings: 4, kcal: 130, protein: 7, fat: 7, carbs: 9, fiber: 5, sugar: 1, cost: { produce: 5, fats: 0.4, spices: 0.2 } },
  'veg-31': { servings: 4, kcal: 160, protein: 7, fat: 8, carbs: 17, fiber: 6, sugar: 4, cost: { produce: 6, protein: 0.4, fats: 0.4, grains: 0.1, spices: 0.2 } },
  'veg-32': { servings: 4, kcal: 130, protein: 7, fat: 5, carbs: 17, fiber: 7, sugar: 4, cost: { produce: 6, grains: 0.2, fats: 0.3, spices: 0.5 } },
  'veg-33': { servings: 5, kcal: 190, protein: 13, fat: 12, carbs: 10, fiber: 5, sugar: 2, cost: { produce: 5, protein: 1, dairyEggs: 1, fats: 0.3, spices: 0.2 } },
  'veg-34': { servings: 6, kcal: 420, protein: 35, fat: 20, carbs: 26, fiber: 7, sugar: 6, cost: { produce: 6, protein: 13, fats: 0.5, spices: 0.4 } },
  'veg-35': { servings: 6, kcal: 440, protein: 34, fat: 20, carbs: 32, fiber: 4, sugar: 6, cost: { produce: 4, protein: 13, fats: 0.4, spices: 0.4 } },
  'veg-37': { servings: 4, kcal: 180, protein: 2, fat: 9, carbs: 22, fiber: 3, sugar: 1, cost: { produce: 1.2, dairyEggs: 0.6, spices: 0.1 } },
  'veg-38': { servings: 4, kcal: 190, protein: 3, fat: 8, carbs: 26, fiber: 3, sugar: 2, cost: { produce: 1.2, dairyEggs: 0.6, spices: 0.1 } },
  'veg-39': { servings: 4, kcal: 330, protein: 10, fat: 20, carbs: 28, fiber: 2, sugar: 2, cost: { produce: 1.2, protein: 2, dairyEggs: 1.2, grains: 0.4, fats: 0.8, spices: 0.2 } },
  'veg-40': { servings: 4, kcal: 160, protein: 3, fat: 7, carbs: 22, fiber: 3, sugar: 1, cost: { produce: 1.2, dairyEggs: 0.2, fats: 0.2, spices: 0.2 } },
  'veg-41': { servings: 4, kcal: 200, protein: 3, fat: 9, carbs: 28, fiber: 4, sugar: 6, cost: { produce: 2, fats: 0.3, spices: 0.2 } },
  'veg-42': { servings: 4, kcal: 380, protein: 5, fat: 22, carbs: 40, fiber: 5, sugar: 4, cost: { produce: 3, fats: 1.5 } },
  'veg-43': { servings: 4, kcal: 50, protein: 1, fat: 3, carbs: 4, fiber: 1, sugar: 2, cost: { produce: 1, fats: 0.2, spices: 0.1 } },
  'veg-44': { servings: 4, kcal: 330, protein: 5, fat: 18, carbs: 38, fiber: 4, sugar: 2, cost: { produce: 2.5, protein: 0.5, fats: 1.2, spices: 0.2 } },
  'veg-45': { servings: 5, kcal: 300, protein: 11, fat: 13, carbs: 36, fiber: 4, sugar: 6, cost: { produce: 2.5, dairyEggs: 3, fats: 0.3, spices: 0.1 } },
  'veg-46': { servings: 4, kcal: 200, protein: 5, fat: 7, carbs: 30, fiber: 3, sugar: 4, cost: { produce: 1.5, dairyEggs: 0.4, fats: 0.3 } },
  'veg-47': { servings: 4, kcal: 70, protein: 0, fat: 7, carbs: 1, fiber: 0, sugar: 0, cost: { fats: 0.4, produce: 0.2, spices: 0.3 } },
  'veg-48': { servings: 4, kcal: 270, protein: 4, fat: 16, carbs: 28, fiber: 3, sugar: 1, cost: { produce: 1.2, dairyEggs: 0.2, grains: 0.1, fats: 1, spices: 0.3 } },
  'veg-49': { servings: 4, kcal: 290, protein: 3, fat: 18, carbs: 30, fiber: 3, sugar: 0, cost: { produce: 1.2, fats: 1, spices: 0.1 } },
  'veg-50': { servings: 4, kcal: 240, protein: 4, fat: 16, carbs: 20, fiber: 2, sugar: 5, cost: { produce: 1, dairyEggs: 0.4, grains: 0.1, fats: 1, spices: 0.4 } },
  'veg-51': { servings: 4, kcal: 190, protein: 3, fat: 10, carbs: 22, fiber: 5, sugar: 5, cost: { produce: 3, fats: 0.6, spices: 0.4 } },
  'leg-03': { servings: 5, kcal: 220, protein: 12, fat: 4, carbs: 36, fiber: 12, sugar: 4, cost: { grains: 1.2, produce: 1.5, fats: 0.3, spices: 0.3 } },
  'leg-04': { servings: 4, kcal: 380, protein: 19, fat: 10, carbs: 55, fiber: 11, sugar: 4, cost: { grains: 2, produce: 1, dairyEggs: 0.5, spices: 0.3 } },
  'leg-05': { servings: 4, kcal: 180, protein: 12, fat: 1, carbs: 32, fiber: 10, sugar: 4, cost: { grains: 1, produce: 1, spices: 0.2 } },
  'pasta-01': { servings: 7, kcal: 640, protein: 30, fat: 30, carbs: 62, fiber: 3, sugar: 8, cost: { grains: 2, protein: 6, dairyEggs: 5, spices: 0.3 } },
  'pasta-02': { servings: 7, kcal: 720, protein: 40, fat: 28, carbs: 78, fiber: 3, sugar: 5, cost: { protein: 14, grains: 2.5, produce: 1.5, dairyEggs: 1, spices: 0.4 } },
  'bake-01': { servings: 6, kcal: 540, protein: 20, fat: 34, carbs: 38, fiber: 1, sugar: 3, cost: { grains: 4, protein: 6, dairyEggs: 5 } },
  'pasta-03': { servings: 3.5, kcal: 260, protein: 4, fat: 8, carbs: 44, fiber: 1, sugar: 0, cost: { grains: 0.8, dairyEggs: 0.3 } },
  'pasta-04': { servings: 4, kcal: 310, protein: 7, fat: 13, carbs: 42, fiber: 0, sugar: 6, cost: { grains: 0.8, dairyEggs: 1.2 } },
  'pasta-05': { servings: 5, kcal: 580, protein: 40, fat: 28, carbs: 40, fiber: 0, sugar: 5, cost: { protein: 12, grains: 0.8, dairyEggs: 1.2, spices: 0.2 } },
  'pasta-06': { servings: 5, kcal: 500, protein: 18, fat: 16, carbs: 70, fiber: 2, sugar: 16, cost: { grains: 1.5, protein: 3, produce: 0.4, specialty: 3, dairyEggs: 0.4, spices: 0.3 } },
  'pasta-07': { servings: 5, kcal: 20, protein: 0, fat: 0, carbs: 5, fiber: 0, sugar: 5, cost: { sweeteners: 0.1 } },
  'pasta-08': { servings: 4, kcal: 380, protein: 13, fat: 16, carbs: 46, fiber: 1, sugar: 6, cost: { grains: 0.8, protein: 2, dairyEggs: 1.5, spices: 0.1 } },
  'pasta-09': { servings: 4, kcal: 560, protein: 42, fat: 24, carbs: 40, fiber: 0, sugar: 0, cost: { protein: 7, grains: 0.8, dairyEggs: 0.4, spices: 0.5 } },
  'pasta-10': { servings: 6, kcal: 380, protein: 15, fat: 12, carbs: 52, fiber: 5, sugar: 6, cost: { grains: 1, produce: 2, protein: 3, dairyEggs: 0.4, spices: 0.2 } },
  'pasta-11': { servings: 5, kcal: 380, protein: 9, fat: 10, carbs: 62, fiber: 3, sugar: 3, cost: { grains: 1.5, protein: 1, produce: 0.8, dairyEggs: 0.4, spices: 0.2 } },
  'pasta-12': { servings: 4, kcal: 510, protein: 15, fat: 9, carbs: 92, fiber: 5, sugar: 6, cost: { grains: 2, produce: 1, protein: 1, fats: 0.3, spices: 0.2 } },
  'pasta-13': { servings: 4, kcal: 520, protein: 16, fat: 9, carbs: 94, fiber: 5, sugar: 7, cost: { grains: 2.5, produce: 1, protein: 1.5, dairyEggs: 0.4, spices: 0.2 } },
  'pasta-14': { servings: 5, kcal: 580, protein: 32, fat: 18, carbs: 72, fiber: 4, sugar: 5, cost: { grains: 2.5, protein: 7, produce: 1, dairyEggs: 0.4, spices: 0.3 } },
  'pasta-15': { servings: 5, kcal: 540, protein: 26, fat: 16, carbs: 70, fiber: 5, sugar: 6, cost: { grains: 2.5, protein: 7, produce: 1.5, dairyEggs: 0.6, spices: 0.3 } },
  'pasta-16': { servings: 4, kcal: 560, protein: 19, fat: 15, carbs: 86, fiber: 5, sugar: 6, cost: { grains: 1.5, produce: 0.8, dairyEggs: 1.8, fats: 0.3, spices: 0.1 } },
  'pasta-17': { servings: 4, kcal: 500, protein: 15, fat: 10, carbs: 88, fiber: 6, sugar: 6, cost: { grains: 1.5, produce: 1.5, fats: 0.3, spices: 0.1 } },
  'pasta-18': { servings: 5, kcal: 640, protein: 42, fat: 22, carbs: 66, fiber: 3, sugar: 4, cost: { grains: 1.5, protein: 7, produce: 0.8, dairyEggs: 0.6, fats: 0.3, spices: 0.3 } },
  'pasta-19': { servings: 4, kcal: 600, protein: 28, fat: 20, carbs: 78, fiber: 3, sugar: 4, cost: { grains: 1.5, protein: 4, dairyEggs: 2, fats: 0.3, specialty: 0.5 } },
  'pasta-20': { servings: 4, kcal: 500, protein: 15, fat: 9, carbs: 90, fiber: 4, sugar: 3, cost: { grains: 1.5, protein: 1, produce: 0.3, dairyEggs: 0.3, spices: 0.1 } },
  'pasta-21': { servings: 4, kcal: 510, protein: 15, fat: 10, carbs: 90, fiber: 5, sugar: 6, cost: { grains: 1.5, produce: 1.2, specialty: 1, fats: 0.3, spices: 0.1 } },
  'pasta-22': { servings: 4, kcal: 530, protein: 17, fat: 12, carbs: 88, fiber: 4, sugar: 3, cost: { grains: 1.5, produce: 0.3, dairyEggs: 0.6, fats: 0.3 } },
  'pasta-23': { servings: 4, kcal: 480, protein: 28, fat: 12, carbs: 64, fiber: 4, sugar: 5, cost: { grains: 2, protein: 4, produce: 2, fats: 0.3, spices: 0.6 } },
  'pasta-24': { servings: 5, kcal: 680, protein: 42, fat: 26, carbs: 68, fiber: 3, sugar: 6, cost: { grains: 1.5, protein: 7, dairyEggs: 3, fats: 0.3, spices: 0.3 } },
  'pasta-25': { servings: 5, kcal: 200, protein: 18, fat: 12, carbs: 6, fiber: 1, sugar: 3, cost: { protein: 7, produce: 0.8, spices: 0.3 } },
  'pasta-26': { servings: 7, kcal: 560, protein: 28, fat: 28, carbs: 48, fiber: 2, sugar: 7, cost: { grains: 2, protein: 7, dairyEggs: 5, spices: 0.2 } },
  'stuff-01': { servings: 5, kcal: 230, protein: 4, fat: 6, carbs: 40, fiber: 2, sugar: 3, cost: { grains: 1.2, produce: 1.5, fats: 0.4, spices: 0.3 } },
  'stuff-02': { servings: 7, kcal: 240, protein: 5, fat: 7, carbs: 40, fiber: 8, sugar: 8, cost: { produce: 6, grains: 1.2, dairyEggs: 0.6, spices: 0.3 } },
  'stuff-03': { servings: 6, kcal: 230, protein: 5, fat: 6, carbs: 40, fiber: 4, sugar: 6, cost: { produce: 5, grains: 1.2, dairyEggs: 0.6, spices: 0.3 } },
  'stuff-04': { servings: 5, kcal: 250, protein: 6, fat: 8, carbs: 40, fiber: 4, sugar: 7, cost: { produce: 4, grains: 1, dairyEggs: 0.5, spices: 0.3 } },
  'stuff-05': { servings: 6, kcal: 330, protein: 12, fat: 15, carbs: 38, fiber: 5, sugar: 4, cost: { produce: 3, protein: 3, dairyEggs: 0.5, fats: 0.8, spices: 0.2 } },
  'stuff-06': { servings: 4.5, kcal: 230, protein: 13, fat: 12, carbs: 20, fiber: 10, sugar: 4, cost: { produce: 10, protein: 3, fats: 0.3, spices: 0.2 } },
  'stuff-07': { servings: 4, kcal: 70, protein: 1, fat: 6, carbs: 4, fiber: 1, sugar: 2, cost: { produce: 1, fats: 0.3, spices: 0.1 } },
  'stuff-08': { servings: 7, kcal: 230, protein: 4, fat: 8, carbs: 36, fiber: 4, sugar: 3, cost: { produce: 5, grains: 1.2, dairyEggs: 0.6, spices: 0.3 } },
  'stuff-09': { servings: 6, kcal: 230, protein: 5, fat: 6, carbs: 40, fiber: 6, sugar: 7, cost: { produce: 5, grains: 1.2, dairyEggs: 0.6, spices: 0.3 } },
  'stuff-10': { servings: 5, kcal: 420, protein: 16, fat: 20, carbs: 44, fiber: 2, sugar: 4, cost: { grains: 3, protein: 3, dairyEggs: 1.5, fats: 1 } },
  'stuff-11': { servings: 4, kcal: 130, protein: 7, fat: 10, carbs: 6, fiber: 1, sugar: 3, cost: { produce: 1.2, dairyEggs: 0.8, fats: 0.3, spices: 0.2 } },
  'bake-02': { servings: 7, kcal: 420, protein: 16, fat: 20, carbs: 44, fiber: 2, sugar: 3, cost: { grains: 3, dairyEggs: 1.8, protein: 3, fats: 0.3, spices: 0.2 } },
  'bake-03': { servings: 7, kcal: 480, protein: 22, fat: 24, carbs: 44, fiber: 2, sugar: 1, cost: { grains: 3, protein: 7, dairyEggs: 0.8, fats: 0.6, spices: 0.4 } },
  'bake-04': { servings: 6, kcal: 440, protein: 12, fat: 20, carbs: 54, fiber: 1, sugar: 12, cost: { grains: 3, dairyEggs: 2.5, sweeteners: 0.3 } },
  'bake-05': { servings: 4, kcal: 220, protein: 13, fat: 12, carbs: 15, fiber: 0, sugar: 8, cost: { dairyEggs: 2.2, grains: 0.1, protein: 2, produce: 0.2, spices: 0.2 } },
  'bake-06': { servings: 7, kcal: 410, protein: 10, fat: 24, carbs: 38, fiber: 1, sugar: 1, cost: { grains: 0.8, dairyEggs: 3.5, fats: 0.5, spices: 0.1 } },
  'bake-07': { servings: 7, kcal: 460, protein: 20, fat: 20, carbs: 48, fiber: 3, sugar: 5, cost: { grains: 3, dairyEggs: 2, protein: 4, produce: 2, specialty: 0.6, spices: 0.4 } },
  'bake-08': { servings: 6, kcal: 470, protein: 14, fat: 24, carbs: 48, fiber: 2, sugar: 4, cost: { grains: 3, dairyEggs: 1.5, produce: 1.2, fats: 0.5 } },
  'bake-09': { servings: 7, kcal: 420, protein: 22, fat: 18, carbs: 42, fiber: 2, sugar: 1, cost: { grains: 3, protein: 7, dairyEggs: 0.4, spices: 0.3 } },
  'bake-10': { servings: 11, kcal: 230, protein: 6, fat: 10, carbs: 30, fiber: 3, sugar: 1, cost: { grains: 1, fats: 1.5, produce: 3, protein: 3, spices: 0.2 } },
  'bake-11': { servings: 6, kcal: 80, protein: 3, fat: 5, carbs: 6, fiber: 3, sugar: 1, cost: { produce: 5, fats: 0.3, spices: 0.2 } },
  'bake-12': { servings: 5, kcal: 380, protein: 18, fat: 20, carbs: 30, fiber: 2, sugar: 5, cost: { dairyEggs: 2.5, grains: 0.3, fats: 0.4, protein: 3, produce: 0.4 } },
  'bake-13': { servings: 7, kcal: 400, protein: 14, fat: 22, carbs: 36, fiber: 1, sugar: 3, cost: { grains: 0.8, dairyEggs: 5, fats: 0.6, protein: 3, specialty: 1 } },
  'bake-14': { servings: 4, kcal: 45, protein: 1, fat: 3, carbs: 4, fiber: 1, sugar: 3, cost: { produce: 0.8, fats: 0.2, spices: 0.1 } },
  'bake-15': { servings: 7, kcal: 440, protein: 20, fat: 22, carbs: 38, fiber: 1, sugar: 3, cost: { grains: 0.8, dairyEggs: 4, fats: 0.6, protein: 5, specialty: 1.5, produce: 0.5 } },
  'savory-01': { servings: 2, kcal: 280, protein: 14, fat: 20, carbs: 10, fiber: 1, sugar: 3, cost: { dairyEggs: 0.8, produce: 0.4, grains: 0.05, spices: 0.2 } },
  'savory-02': { servings: 1.5, kcal: 310, protein: 19, fat: 24, carbs: 6, fiber: 1, sugar: 3, cost: { dairyEggs: 1, produce: 0.3, spices: 0.1 } },
  'savory-03': { servings: 2.5, kcal: 300, protein: 16, fat: 22, carbs: 10, fiber: 2, sugar: 6, cost: { dairyEggs: 1.5, produce: 1.5, spices: 0.2 } },
  'savory-04': { servings: 3.5, kcal: 290, protein: 15, fat: 13, carbs: 28, fiber: 8, sugar: 4, cost: { grains: 1.5, dairyEggs: 0.8, produce: 0.8, fats: 0.3, spices: 0.2 } },
  'savory-05': { servings: 3.5, kcal: 270, protein: 16, fat: 18, carbs: 10, fiber: 3, sugar: 2, cost: { dairyEggs: 1.5, grains: 0.5, produce: 0.5, fats: 0.3, spices: 0.2 } },
  'savory-06': { servings: 3.5, kcal: 230, protein: 11, fat: 9, carbs: 28, fiber: 9, sugar: 4, cost: { grains: 1.2, produce: 1, fats: 0.3, protein: 0.5, spices: 0.2 } },
  'savory-07': { servings: 1, kcal: 230, protein: 10, fat: 14, carbs: 16, fiber: 1, sugar: 2, cost: { dairyEggs: 0.8, grains: 0.2, produce: 0.3 } },
  'savory-08': { servings: 1, kcal: 190, protein: 3, fat: 12, carbs: 18, fiber: 1, sugar: 1, cost: { grains: 0.3, dairyEggs: 0.2, spices: 0.3 } },
  'savory-09': { servings: 1, kcal: 380, protein: 20, fat: 20, carbs: 30, fiber: 1, sugar: 2, cost: { grains: 0.4, protein: 1.5, dairyEggs: 0.3, fats: 0.4, produce: 0.2, spices: 0.1 } },
  'savory-10': { servings: 1, kcal: 480, protein: 14, fat: 26, carbs: 48, fiber: 3, sugar: 4, cost: { grains: 0.8, dairyEggs: 1.2, produce: 0.4, fats: 0.4, specialty: 0.2 } },
  'savory-11': { servings: 1, kcal: 380, protein: 20, fat: 18, carbs: 34, fiber: 2, sugar: 4, cost: { grains: 0.4, protein: 1.5, dairyEggs: 0.8, produce: 0.5, fats: 0.2 } },
  'savory-12': { servings: 4, kcal: 210, protein: 7, fat: 10, carbs: 24, fiber: 1, sugar: 4, cost: { dairyEggs: 0.8, grains: 0.2, protein: 0.5, produce: 0.3, fats: 0.3, spices: 0.1 } },
  'quick-01': { servings: 4, kcal: 560, protein: 56, fat: 20, carbs: 38, fiber: 2, sugar: 4, cost: { protein: 10, grains: 2.5, dairyEggs: 1.5, fats: 0.2, spices: 0.4 } },
  'quick-02': { servings: 2, kcal: 460, protein: 36, fat: 20, carbs: 34, fiber: 2, sugar: 6, cost: { protein: 3, grains: 1.2, produce: 0.8, dairyEggs: 2, fats: 0.2 } },
  'quick-03': { servings: 3.5, kcal: 480, protein: 32, fat: 22, carbs: 36, fiber: 2, sugar: 5, cost: { protein: 3.5, grains: 2, dairyEggs: 1.5, produce: 0.6, fats: 0.3, spices: 0.2 } },
  'quick-04': { servings: 2.5, kcal: 500, protein: 36, fat: 20, carbs: 42, fiber: 2, sugar: 4, cost: { grains: 1.5, protein: 3.5, dairyEggs: 0.6, specialty: 0.5, spices: 0.2 } },
  'quick-05': { servings: 4, kcal: 440, protein: 30, fat: 14, carbs: 46, fiber: 2, sugar: 6, cost: { protein: 4, grains: 2.5, dairyEggs: 1.5, produce: 0.4, spices: 0.3 } },
  'quick-06': { servings: 4, kcal: 480, protein: 28, fat: 20, carbs: 46, fiber: 2, sugar: 6, cost: { protein: 6, grains: 2.5, dairyEggs: 1.2, produce: 1, fats: 0.2, spices: 0.3 } },
  'quick-07': { servings: 2, kcal: 680, protein: 36, fat: 32, carbs: 60, fiber: 3, sugar: 8, cost: { protein: 4, grains: 1.2, specialty: 0.8, dairyEggs: 1, produce: 0.6 } },
  'quick-08': { servings: 2, kcal: 470, protein: 26, fat: 18, carbs: 48, fiber: 3, sugar: 6, cost: { protein: 2.5, grains: 1.2, specialty: 0.6, produce: 1.2 } },
  'des-01': { servings: 9, kcal: 480, protein: 6, fat: 20, carbs: 70, fiber: 1, sugar: 48, cost: { grains: 1.5, dairyEggs: 3, sweeteners: 2, specialty: 2.5 } },
  'des-02': { servings: 6, kcal: 420, protein: 4, fat: 12, carbs: 76, fiber: 1, sugar: 42, cost: { grains: 0.8, sweeteners: 1.5, fats: 1.5, spices: 0.3 } },
  'bev-01': { servings: 7, kcal: 110, protein: 0, fat: 0, carbs: 28, fiber: 3, sugar: 25, cost: { specialty: 3, sweeteners: 0.6 } },
  'des-03': { servings: 2.5, kcal: 240, protein: 5, fat: 8, carbs: 38, fiber: 1, sugar: 14, cost: { grains: 0.2, dairyEggs: 0.4, sweeteners: 0.8 } },
  'des-04': { servings: 4, kcal: 620, protein: 12, fat: 30, carbs: 78, fiber: 2, sugar: 48, cost: { dairyEggs: 2.5, grains: 0.4, sweeteners: 1.5, specialty: 4 } },
  'des-05': { servings: 6, kcal: 330, protein: 3, fat: 20, carbs: 38, fiber: 2, sugar: 35, cost: { dairyEggs: 2, sweeteners: 0.6, specialty: 2.5 } },
  'des-06': { servings: 5, kcal: 360, protein: 6, fat: 12, carbs: 58, fiber: 2, sugar: 44, cost: { grains: 0.2, sweeteners: 0.8, dairyEggs: 1.5, produce: 1.5 } },
  'des-07': { servings: 7, kcal: 190, protein: 2, fat: 10, carbs: 22, fiber: 0, sugar: 7, cost: { grains: 0.3, dairyEggs: 0.3, fats: 0.8, sweeteners: 0.6 } },
  'des-08': { servings: 9, kcal: 420, protein: 6, fat: 18, carbs: 60, fiber: 1, sugar: 30, cost: { grains: 0.8, sweeteners: 1, dairyEggs: 2.5, specialty: 2 } },
  'des-09': { servings: 7, kcal: 520, protein: 11, fat: 28, carbs: 56, fiber: 2, sugar: 18, cost: { grains: 3, fats: 1, dairyEggs: 1.5, specialty: 3, sweeteners: 0.3 } },
  'des-10': { servings: 6, kcal: 110, protein: 4, fat: 3, carbs: 16, fiber: 0, sugar: 12, cost: { dairyEggs: 0.8, sweeteners: 0.2, grains: 0.1 } },
  'des-11': { servings: 7, kcal: 430, protein: 9, fat: 22, carbs: 50, fiber: 1, sugar: 14, cost: { grains: 3, fats: 1, dairyEggs: 1.5, sweeteners: 0.6 } },
  'des-12': { servings: 6, kcal: 480, protein: 10, fat: 26, carbs: 52, fiber: 3, sugar: 14, cost: { grains: 3, dairyEggs: 1.2, specialty: 4 } },
  'des-13': { servings: 5, kcal: 330, protein: 9, fat: 14, carbs: 42, fiber: 1, sugar: 20, cost: { grains: 0.3, dairyEggs: 1.5, sweeteners: 1.2, specialty: 1.5 } },
  'des-14': { servings: 7, kcal: 420, protein: 4, fat: 22, carbs: 52, fiber: 3, sugar: 26, cost: { grains: 4, produce: 3, dairyEggs: 0.8, sweeteners: 0.4 } },
  'des-15': { servings: 11, kcal: 190, protein: 6, fat: 6, carbs: 28, fiber: 1, sugar: 1, cost: { grains: 1, dairyEggs: 1, protein: 2 } },
  'des-16': { servings: 1, kcal: 300, protein: 10, fat: 16, carbs: 28, fiber: 1, sugar: 8, cost: { grains: 0.2, dairyEggs: 0.6, sweeteners: 0.2, specialty: 0.8 } },
  'des-17': { servings: 4, kcal: 170, protein: 4, fat: 4, carbs: 30, fiber: 0, sugar: 20, cost: { dairyEggs: 0.8, sweeteners: 0.3, grains: 0.1 } },
  'des-18': { servings: 4, kcal: 200, protein: 5, fat: 6, carbs: 32, fiber: 1, sugar: 22, cost: { dairyEggs: 0.8, sweeteners: 0.3, grains: 0.1, specialty: 0.5 } },
  'des-19': { servings: 5, kcal: 190, protein: 3, fat: 3, carbs: 38, fiber: 2, sugar: 26, cost: { sweeteners: 1.2, produce: 3, grains: 1.5 } },
  'des-20': { servings: 5, kcal: 260, protein: 5, fat: 8, carbs: 42, fiber: 1, sugar: 28, cost: { dairyEggs: 0.8, sweeteners: 0.3, grains: 1.2, specialty: 0.5 } },
  'des-21': { servings: 7, kcal: 200, protein: 5, fat: 5, carbs: 34, fiber: 2, sugar: 22, cost: { grains: 0.6, sweeteners: 0.8, dairyEggs: 1.2 } },
  'des-22': { servings: 5, kcal: 260, protein: 7, fat: 9, carbs: 38, fiber: 1, sugar: 24, cost: { dairyEggs: 1.2, grains: 0.3, sweeteners: 0.3, specialty: 0.5 } },
  'des-23': { servings: 5, kcal: 240, protein: 6, fat: 5, carbs: 42, fiber: 0, sugar: 28, cost: { dairyEggs: 1.2, grains: 0.3, sweeteners: 0.4 } },
  'des-24': { servings: 6, kcal: 55, protein: 0, fat: 0, carbs: 14, fiber: 0, sugar: 14, cost: { sweeteners: 0.2 } },
  'des-25': { servings: 4, kcal: 250, protein: 7, fat: 5, carbs: 44, fiber: 0, sugar: 22, cost: { dairyEggs: 0.8, grains: 0.4, sweeteners: 0.3, specialty: 1 } },
  'des-26': { servings: 6, kcal: 300, protein: 9, fat: 8, carbs: 48, fiber: 0, sugar: 28, cost: { dairyEggs: 2, grains: 0.8, sweeteners: 0.4, specialty: 1.5 } },
  'des-27': { servings: 6, kcal: 240, protein: 5, fat: 3, carbs: 50, fiber: 3, sugar: 36, cost: { dairyEggs: 0.8, grains: 0.3, produce: 2, specialty: 3, sweeteners: 0.3 } },
  'des-28': { servings: 4, kcal: 280, protein: 7, fat: 5, carbs: 52, fiber: 0, sugar: 30, cost: { dairyEggs: 0.8, grains: 0.4, sweeteners: 0.4 } },
  'des-29': { servings: 5, kcal: 330, protein: 8, fat: 12, carbs: 48, fiber: 0, sugar: 18, cost: { grains: 0.8, dairyEggs: 2, sweeteners: 0.3 } },
  'des-30': { servings: 6, kcal: 200, protein: 8, fat: 7, carbs: 26, fiber: 0, sugar: 26, cost: { dairyEggs: 1.8, sweeteners: 0.3 } },
  'des-31': { servings: 5, kcal: 380, protein: 13, fat: 6, carbs: 70, fiber: 10, sugar: 16, cost: { grains: 2, dairyEggs: 0.8, sweeteners: 0.3 } },
  'des-32': { servings: 7, kcal: 420, protein: 12, fat: 8, carbs: 76, fiber: 9, sugar: 34, cost: { grains: 2, dairyEggs: 0.8, sweeteners: 0.6, specialty: 3 } },
  'des-33': { servings: 5, kcal: 200, protein: 2, fat: 2, carbs: 46, fiber: 3, sugar: 36, cost: { specialty: 4, sweeteners: 0.2, grains: 0.05 } },
  'des-34': { servings: 6, kcal: 290, protein: 4, fat: 8, carbs: 54, fiber: 6, sugar: 30, cost: { produce: 3, specialty: 2, dairyEggs: 0.5, sweeteners: 0.4 } },
  'des-35': { servings: 8, kcal: 300, protein: 4, fat: 7, carbs: 58, fiber: 6, sugar: 34, cost: { produce: 5, sweeteners: 0.6, dairyEggs: 2 } },
  'des-36': { servings: 8, kcal: 380, protein: 5, fat: 9, carbs: 72, fiber: 2, sugar: 60, cost: { produce: 3, sweeteners: 1, dairyEggs: 1.5, specialty: 2, grains: 0.2 } },
  'des-37': { servings: 8, kcal: 120, protein: 4, fat: 7, carbs: 11, fiber: 0, sugar: 7, cost: { dairyEggs: 1.5, grains: 0.1, sweeteners: 0.2 } },
  'des-38': { servings: 4, kcal: 140, protein: 1, fat: 0, carbs: 35, fiber: 3, sugar: 30, cost: { produce: 3, sweeteners: 0.2 } },
  'des-39': { servings: 5, kcal: 230, protein: 8, fat: 5, carbs: 40, fiber: 3, sugar: 36, cost: { dairyEggs: 2.5, sweeteners: 0.4, produce: 3 } },
  'des-40': { servings: 4, kcal: 120, protein: 1, fat: 0, carbs: 30, fiber: 3, sugar: 26, cost: { produce: 3, sweeteners: 0.2 } },
  'des-41': { servings: 4, kcal: 330, protein: 3, fat: 2, carbs: 82, fiber: 8, sugar: 66, cost: { specialty: 6, sweeteners: 0.2 } },
  'des-42': { servings: 7, kcal: 380, protein: 3, fat: 1, carbs: 98, fiber: 11, sugar: 78, cost: { specialty: 14, sweeteners: 0.3 } },
  'des-43': { servings: 6, kcal: 200, protein: 7, fat: 6, carbs: 30, fiber: 0, sugar: 22, cost: { dairyEggs: 1.8, sweeteners: 0.2, grains: 0.1 } },
  'des-44': { servings: 8, kcal: 330, protein: 5, fat: 16, carbs: 42, fiber: 1, sugar: 30, cost: { dairyEggs: 5, grains: 2.5, specialty: 2 } },
  'des-45': { servings: 4, kcal: 350, protein: 4, fat: 18, carbs: 44, fiber: 1, sugar: 42, cost: { dairyEggs: 2, sweeteners: 0.3, produce: 2.5 } },
  'des-46': { servings: 6, kcal: 380, protein: 8, fat: 28, carbs: 26, fiber: 2, sugar: 22, cost: { specialty: 3, dairyEggs: 3, sweeteners: 0.3 } },
  'des-47': { servings: 8, kcal: 520, protein: 5, fat: 46, carbs: 28, fiber: 0, sugar: 26, cost: { dairyEggs: 8, sweeteners: 0.6 } },
  'des-48': { servings: 4, kcal: 300, protein: 3, fat: 25, carbs: 16, fiber: 0, sugar: 16, cost: { dairyEggs: 2, sweeteners: 0.1 } },
  'des-49': { servings: 5, kcal: 200, protein: 2, fat: 9, carbs: 30, fiber: 1, sugar: 28, cost: { produce: 2, sweeteners: 0.3, dairyEggs: 1 } },
  'des-50': { servings: 4, kcal: 480, protein: 7, fat: 20, carbs: 68, fiber: 2, sugar: 48, cost: { dairyEggs: 3, grains: 2, specialty: 2, produce: 1.5 } },
  'bev-02': { servings: 4, kcal: 110, protein: 0, fat: 0, carbs: 28, fiber: 1, sugar: 26, cost: { specialty: 1.5, sweeteners: 0.4 } },
  'bev-03': { servings: 4, kcal: 15, protein: 0, fat: 0, carbs: 4, fiber: 0, sugar: 2, cost: { specialty: 1.5 } },
  'bev-04': { servings: 4, kcal: 180, protein: 1, fat: 0, carbs: 45, fiber: 2, sugar: 42, cost: { specialty: 2, sweeteners: 0.3 } },
  'bev-05': { servings: 4, kcal: 200, protein: 3, fat: 8, carbs: 30, fiber: 0, sugar: 18, cost: { dairyEggs: 0.8, grains: 0.5, sweeteners: 0.3, specialty: 0.8 } },
  'des-51': { servings: 9, kcal: 520, protein: 7, fat: 30, carbs: 58, fiber: 3, sugar: 32, cost: { grains: 3, dairyEggs: 2.5, specialty: 6, sweeteners: 1 } },
  'des-52': { servings: 9, kcal: 440, protein: 8, fat: 22, carbs: 54, fiber: 1, sugar: 28, cost: { grains: 3, dairyEggs: 3, sweeteners: 0.8, specialty: 3 } },
  'des-53': { servings: 9, kcal: 480, protein: 8, fat: 24, carbs: 58, fiber: 2, sugar: 34, cost: { grains: 3, dairyEggs: 2.5, sweeteners: 1, specialty: 4 } },
  'des-54': { servings: 9, kcal: 110, protein: 3, fat: 6, carbs: 12, fiber: 1, sugar: 11, cost: { specialty: 3, sweeteners: 0.3, dairyEggs: 0.3 } },
  'des-55': { servings: 8, kcal: 470, protein: 7, fat: 24, carbs: 58, fiber: 3, sugar: 32, cost: { grains: 3, dairyEggs: 2, specialty: 5, sweeteners: 1 } },
  'des-56': { servings: 8, kcal: 500, protein: 7, fat: 28, carbs: 56, fiber: 1, sugar: 30, cost: { grains: 3, dairyEggs: 5, sweeteners: 1, specialty: 2 } },
  'des-57': { servings: 7, kcal: 430, protein: 7, fat: 20, carbs: 56, fiber: 2, sugar: 30, cost: { grains: 3, specialty: 4, fats: 1, sweeteners: 1 } },
  'des-58': { servings: 7, kcal: 380, protein: 6, fat: 16, carbs: 54, fiber: 1, sugar: 34, cost: { grains: 0.5, dairyEggs: 2, sweeteners: 1, fats: 1.5 } },
  'des-59': { servings: 9, kcal: 520, protein: 5, fat: 32, carbs: 56, fiber: 6, sugar: 46, cost: { specialty: 5, sweeteners: 1.2, dairyEggs: 3, grains: 0.2 } },
  'des-60': { servings: 9, kcal: 520, protein: 4, fat: 30, carbs: 62, fiber: 7, sugar: 56, cost: { specialty: 7, sweeteners: 1.2 } },
  'des-61': { servings: 11, kcal: 440, protein: 8, fat: 22, carbs: 56, fiber: 2, sugar: 34, cost: { grains: 1.2, sweeteners: 1.2, fats: 1.5, dairyEggs: 2.5, produce: 0.5 } },
  'des-62': { servings: 6, kcal: 380, protein: 5, fat: 18, carbs: 50, fiber: 1, sugar: 28, cost: { grains: 0.4, dairyEggs: 2.5, sweeteners: 1, specialty: 0.5 } },
  'des-63': { servings: 13, kcal: 160, protein: 2, fat: 10, carbs: 16, fiber: 3, sugar: 14, cost: { specialty: 3, dairyEggs: 2.5 } },
  'des-64': { servings: 7, kcal: 380, protein: 6, fat: 10, carbs: 66, fiber: 1, sugar: 42, cost: { grains: 2, sweeteners: 0.8, dairyEggs: 2, specialty: 2 } },
  'des-65': { servings: 5, kcal: 300, protein: 5, fat: 7, carbs: 55, fiber: 1, sugar: 22, cost: { grains: 0.6, sweeteners: 0.4, dairyEggs: 0.6, specialty: 2 } },
  'des-66': { servings: 4, kcal: 320, protein: 4, fat: 8, carbs: 58, fiber: 1, sugar: 26, cost: { grains: 0.3, dairyEggs: 0.6, sweeteners: 0.4, specialty: 1.5 } },
  'des-67': { servings: 7, kcal: 420, protein: 12, fat: 22, carbs: 44, fiber: 2, sugar: 26, cost: { grains: 1.2, specialty: 4, dairyEggs: 4, sweeteners: 0.4 } },
  'des-68': { servings: 22, kcal: 160, protein: 2, fat: 9, carbs: 20, fiber: 1, sugar: 10, cost: { grains: 0.6, dairyEggs: 4, specialty: 0.6, sweeteners: 1 } },
  'des-69': { servings: 5, kcal: 460, protein: 11, fat: 8, carbs: 86, fiber: 5, sugar: 22, cost: { grains: 2.5, dairyEggs: 0.6, sweeteners: 0.4, specialty: 1 } },
  'des-70': { servings: 16, kcal: 110, protein: 1, fat: 7, carbs: 10, fiber: 0, sugar: 4, cost: { grains: 0.2, dairyEggs: 1.5, specialty: 0.8 } },
  'des-71': { servings: 32, kcal: 200, protein: 3, fat: 11, carbs: 22, fiber: 1, sugar: 7, cost: { grains: 1.5, dairyEggs: 6, specialty: 5, spices: 0.5 } },
  'des-72': { servings: 32, kcal: 50, protein: 0, fat: 1, carbs: 11, fiber: 0, sugar: 9, cost: { specialty: 5 } },
  'des-73': { servings: 32, kcal: 35, protein: 0, fat: 0, carbs: 8, fiber: 0, sugar: 7, cost: { specialty: 4, dairyEggs: 0.2 } },
  'des-74': { servings: 11, kcal: 560, protein: 7, fat: 28, carbs: 70, fiber: 2, sugar: 28, cost: { grains: 1.5, dairyEggs: 6, sweeteners: 0.6, spices: 0.6 } },
  'des-75': { servings: 11, kcal: 600, protein: 8, fat: 28, carbs: 80, fiber: 4, sugar: 30, cost: { grains: 1.5, dairyEggs: 6, specialty: 4, spices: 0.5 } },
  'des-76': { servings: 22, kcal: 120, protein: 1, fat: 6, carbs: 16, fiber: 0, sugar: 10, cost: { produce: 0.3, grains: 0.3, fats: 0.4, sweeteners: 0.6, dairyEggs: 0.5 } },
  'des-77': { servings: 20, kcal: 150, protein: 3, fat: 5, carbs: 24, fiber: 1, sugar: 12, cost: { grains: 0.4, sweeteners: 0.6, dairyEggs: 1.5, specialty: 1.5 } },
  'des-78': { servings: 27, kcal: 55, protein: 2, fat: 1, carbs: 10, fiber: 0, sugar: 8, cost: { dairyEggs: 1.8, grains: 0.1, sweeteners: 0.4 } },
  'des-79': { servings: 20, kcal: 160, protein: 2, fat: 8, carbs: 20, fiber: 1, sugar: 11, cost: { grains: 0.4, dairyEggs: 3, sweeteners: 0.6, specialty: 1.5 } },
  'des-80': { servings: 22, kcal: 120, protein: 2, fat: 5, carbs: 17, fiber: 1, sugar: 10, cost: { grains: 0.3, sweeteners: 0.4, dairyEggs: 1.5, specialty: 1.2 } },
  'des-81': { servings: 27, kcal: 230, protein: 3, fat: 14, carbs: 24, fiber: 1, sugar: 10, cost: { grains: 0.8, dairyEggs: 5, sweeteners: 0.6, specialty: 3 } },
  'des-82': { servings: 20, kcal: 150, protein: 2, fat: 8, carbs: 18, fiber: 1, sugar: 11, cost: { grains: 0.3, dairyEggs: 1.5, sweeteners: 0.6, specialty: 1.5 } },
  'des-83': { servings: 11, kcal: 520, protein: 10, fat: 22, carbs: 72, fiber: 1, sugar: 48, cost: { grains: 0.8, sweeteners: 1.5, dairyEggs: 4, produce: 0.3, specialty: 0.3 } },
  'des-84': { servings: 8, kcal: 150, protein: 5, fat: 3, carbs: 26, fiber: 0, sugar: 18, cost: { dairyEggs: 1.5, grains: 0.2, sweeteners: 0.4 } },
  'des-85': { servings: 8, kcal: 380, protein: 5, fat: 26, carbs: 36, fiber: 6, sugar: 30, cost: { specialty: 4, dairyEggs: 1.5, sweeteners: 0.8, grains: 0.05 } },
  'des-86': { servings: 11, kcal: 250, protein: 3, fat: 14, carbs: 30, fiber: 1, sugar: 20, cost: { grains: 0.3, sweeteners: 0.4, dairyEggs: 2, specialty: 3 } },
  'des-87': { servings: 10, kcal: 390, protein: 5, fat: 18, carbs: 54, fiber: 1, sugar: 32, cost: { grains: 0.4, produce: 0.6, sweeteners: 0.8, dairyEggs: 1.2, fats: 1 } },
  'des-88': { servings: 7, kcal: 280, protein: 9, fat: 10, carbs: 40, fiber: 3, sugar: 22, cost: { grains: 2, dairyEggs: 3, sweeteners: 0.4, produce: 2.5 } },
  'des-89': { servings: 11, kcal: 430, protein: 8, fat: 14, carbs: 70, fiber: 2, sugar: 42, cost: { grains: 0.8, sweeteners: 1, dairyEggs: 3, specialty: 1.5 } },
  'des-90': { servings: 11, kcal: 90, protein: 1, fat: 7, carbs: 7, fiber: 1, sugar: 5, cost: { dairyEggs: 1, specialty: 1.5, sweeteners: 0.2 } },
  'des-91': { servings: 11, kcal: 470, protein: 7, fat: 20, carbs: 66, fiber: 1, sugar: 38, cost: { dairyEggs: 4, sweeteners: 1.2, grains: 0.8, produce: 0.3 } },
  'des-92': { servings: 8, kcal: 300, protein: 5, fat: 10, carbs: 50, fiber: 2, sugar: 42, cost: { produce: 3, dairyEggs: 1.8, sweeteners: 0.6 } },
  'des-93': { servings: 8, kcal: 340, protein: 6, fat: 16, carbs: 44, fiber: 0, sugar: 34, cost: { dairyEggs: 1.5, grains: 0.3, sweeteners: 0.5, fats: 0.6 } },
  'des-94': { servings: 9, kcal: 410, protein: 6, fat: 20, carbs: 52, fiber: 2, sugar: 32, cost: { grains: 0.6, sweeteners: 0.8, fats: 1, dairyEggs: 1.5, produce: 3 } },
  'des-95': { servings: 9, kcal: 130, protein: 0, fat: 5, carbs: 22, fiber: 0, sugar: 22, cost: { sweeteners: 0.4, dairyEggs: 1, produce: 2 } },
  'des-96': { servings: 9, kcal: 380, protein: 6, fat: 16, carbs: 54, fiber: 1, sugar: 30, cost: { grains: 0.6, dairyEggs: 4, sweeteners: 0.6, specialty: 2 } },
  'des-97': { servings: 8, kcal: 370, protein: 7, fat: 4, carbs: 76, fiber: 1, sugar: 52, cost: { dairyEggs: 1.8, grains: 0.5, sweeteners: 1.2 } },
  'des-98': { servings: 10, kcal: 330, protein: 7, fat: 12, carbs: 50, fiber: 1, sugar: 40, cost: { grains: 0.4, sweeteners: 0.8, dairyEggs: 4, produce: 3 } },
  'des-99': { servings: 10, kcal: 70, protein: 3, fat: 2, carbs: 10, fiber: 0, sugar: 7, cost: { dairyEggs: 1.5, sweeteners: 0.2, grains: 0.1 } },
  'des-100': { servings: 10, kcal: 420, protein: 6, fat: 22, carbs: 48, fiber: 1, sugar: 16, cost: { grains: 1, dairyEggs: 5, produce: 1.5, sweeteners: 0.4 } },
  'des-101': { servings: 10, kcal: 240, protein: 6, fat: 7, carbs: 38, fiber: 1, sugar: 30, cost: { grains: 0.2, sweeteners: 0.4, dairyEggs: 2, specialty: 1.5 } },
  'des-102': { servings: 10, kcal: 190, protein: 2, fat: 10, carbs: 26, fiber: 2, sugar: 22, cost: { dairyEggs: 2, specialty: 2, sweeteners: 0.4 } },
  'des-103': { servings: 10, kcal: 280, protein: 6, fat: 4, carbs: 56, fiber: 1, sugar: 44, cost: { grains: 0.4, sweeteners: 0.8, dairyEggs: 2, produce: 3 } },
  'des-104': { servings: 7, kcal: 200, protein: 6, fat: 12, carbs: 16, fiber: 0, sugar: 8, cost: { dairyEggs: 2.5, grains: 0.1, specialty: 1.5 } },
  'des-105': { servings: 7, kcal: 90, protein: 1, fat: 3, carbs: 16, fiber: 1, sugar: 14, cost: { specialty: 1, sweeteners: 0.2, dairyEggs: 0.3 } },
  'des-106': { servings: 7, kcal: 300, protein: 8, fat: 18, carbs: 28, fiber: 1, sugar: 10, cost: { dairyEggs: 3, grains: 0.4, fats: 1.5, specialty: 1.5, sweeteners: 0.2 } },
  'des-107': { servings: 9, kcal: 420, protein: 6, fat: 20, carbs: 54, fiber: 2, sugar: 34, cost: { grains: 4, dairyEggs: 3, specialty: 3, produce: 2 } },
  'des-108': { servings: 9, kcal: 90, protein: 4, fat: 3, carbs: 12, fiber: 1, sugar: 9, cost: { dairyEggs: 2, sweeteners: 0.2, specialty: 0.8 } },
  'des-109': { servings: 10, kcal: 90, protein: 1, fat: 6, carbs: 9, fiber: 0, sugar: 8, cost: { dairyEggs: 3, produce: 1.5, sweeteners: 0.1 } },
  'des-110': { servings: 10, kcal: 160, protein: 1, fat: 10, carbs: 18, fiber: 1, sugar: 17, cost: { dairyEggs: 2.5, sweeteners: 0.3, specialty: 2 } },
  'des-111': { servings: 10, kcal: 80, protein: 2, fat: 5, carbs: 8, fiber: 1, sugar: 7, cost: { dairyEggs: 1, specialty: 1, sweeteners: 0.2 } },
  'des-112': { servings: 10, kcal: 120, protein: 0, fat: 9, carbs: 10, fiber: 0, sugar: 10, cost: { dairyEggs: 2, sweeteners: 0.2, produce: 0.5 } },
  'des-113': { servings: 10, kcal: 30, protein: 1, fat: 0, carbs: 7, fiber: 0, sugar: 6, cost: { sweeteners: 0.8, dairyEggs: 0.3 } },
};

// The additional (non-manuscript) recipes keep their estimates in a separate file.
Object.assign(RECIPE_ESTIMATES, ADDITIONAL_RECIPE_ESTIMATES);

export function getRecipeEstimate(recipeId: string): RecipeEstimate | undefined {
  return RECIPE_ESTIMATES[recipeId];
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
  const e = RECIPE_ESTIMATES[recipeId];
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
