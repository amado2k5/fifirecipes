import { Recipe, DatabaseStats, MasterIngredient } from '../types';
import { meatsAndPoultryRecipes } from './chapters/meatsAndPoultry';
import { seafoodRecipes } from './chapters/seafood';
import { soupsAndSaladsRecipes } from './chapters/soupsAndSalads';
import { vegetablesAndLegumesRecipes } from './chapters/vegetablesAndLegumes';
import { pastasAndBakingRecipes } from './chapters/pastasAndBaking';
import { dessertsAndBeveragesRecipes } from './chapters/dessertsAndBeverages';
import { additionalRecipes } from './chapters/additionalRecipes';
import { osoolElTahyRecipes } from './chapters/osoolElTahy';
import { egyptianCookingRecipes } from './chapters/egyptianCooking';

export const allRecipes: Recipe[] = [
  ...meatsAndPoultryRecipes,
  ...seafoodRecipes,
  ...soupsAndSaladsRecipes,
  ...vegetablesAndLegumesRecipes,
  ...pastasAndBakingRecipes,
  ...dessertsAndBeveragesRecipes,
  ...additionalRecipes,
  ...osoolElTahyRecipes,
  ...egyptianCookingRecipes
];

export function computeDatabaseStats(recipes: Recipe[] = allRecipes): DatabaseStats {
  let totalMasterIngredients = 0;
  let totalUniqueInstructions = 0;
  let totalRedundantIngredientsMerged = 0;
  let totalRedundantInstructionsUnified = 0;
  const categoryBreakdown: Record<string, number> = {};
  const chapterBreakdown: Record<string, number> = {};

  recipes.forEach(r => {
    totalMasterIngredients += r.masterIngredients.length;
    totalUniqueInstructions += r.uniqueInstructions.length;
    totalRedundantIngredientsMerged += r.overlapAnalysis.mergedIngredientsCount;
    totalRedundantInstructionsUnified += r.overlapAnalysis.duplicateInstructionCount;

    categoryBreakdown[r.category] = (categoryBreakdown[r.category] || 0) + 1;
    chapterBreakdown[r.chapter] = (chapterBreakdown[r.chapter] || 0) + 1;
  });

  const totalRawInstructions = totalUniqueInstructions + totalRedundantInstructionsUnified;
  const averageOverlapRatio = totalRawInstructions > 0 ? (totalRedundantInstructionsUnified / totalRawInstructions) * 100 : 0;

  return {
    totalRecipes: recipes.length,
    totalMasterIngredients,
    totalUniqueInstructions,
    totalRedundantIngredientsMerged,
    totalRedundantInstructionsUnified,
    averageOverlapRatio: Math.round(averageOverlapRatio),
    categoryBreakdown,
    chapterBreakdown
  };
}

export interface GlobalIngredientSummary {
  id: string;
  name: string;
  nameEn?: string;
  sourceRecipeId: string;
  category: MasterIngredient['category'];
  recipesCount: number;
  recipeTitles: { id: string; title: string; standardAmount: string }[];
}

export function buildGlobalIngredientRegistry(recipes: Recipe[] = allRecipes): GlobalIngredientSummary[] {
  const map = new Map<string, GlobalIngredientSummary>();

  recipes.forEach(recipe => {
    recipe.masterIngredients.forEach(ing => {
      // Normalize key slightly
      const key = ing.name.trim();
      const existing = map.get(key);
      if (existing) {
        existing.recipesCount++;
        existing.recipeTitles.push({
          id: recipe.id,
          title: recipe.title,
          standardAmount: ing.standardAmount
        });
      } else {
        map.set(key, {
          id: ing.id,
          name: ing.name,
          nameEn: ing.nameEn,
          sourceRecipeId: recipe.id,
          category: ing.category,
          recipesCount: 1,
          recipeTitles: [{
            id: recipe.id,
            title: recipe.title,
            standardAmount: ing.standardAmount
          }]
        });
      }
    });
  });

  return Array.from(map.values()).sort((a, b) => b.recipesCount - a.recipesCount);
}
