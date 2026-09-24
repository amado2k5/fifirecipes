import type { RecipeEstimate } from './recipeEstimates';

// Estimates for recipes that had none; filled in batches by scripts/estimates/*.
export const MISSING_ESTIMATES: Record<string, RecipeEstimate> = {  'ec-003': {"servings":6,"kcal":130,"protein":8,"fat":1,"carbs":24,"fiber":6,"sugar":0,"cost":{"grains":1,"produce":0.5,"fats":0.1,"spices":0.05}},
  'ec-005': {"servings":12,"kcal":360,"protein":28,"fat":18,"carbs":20,"fiber":2,"sugar":0,"cost":{"protein":14,"grains":1,"produce":0.3,"fats":0.5,"spices":0.2}},
  'ec-007': {"servings":5,"kcal":200,"protein":12,"fat":12,"carbs":8,"fiber":1,"sugar":1,"cost":{"dairyEggs":2.5,"produce":1}},
  'ec-009': {"servings":5,"kcal":180,"protein":14,"fat":12,"carbs":5,"fiber":0,"sugar":2,"cost":{"dairyEggs":2.5,"specialty":0.5,"spices":0.1}},
  'ec-014': {"servings":6,"kcal":150,"protein":30,"fat":2,"carbs":0,"fiber":0,"sugar":0,"cost":{"protein":8,"produce":0.5,"spices":0.1}},
  'ec-016': {"servings":12,"kcal":280,"protein":8,"fat":12,"carbs":36,"fiber":2,"sugar":1,"cost":{"grains":0.5,"dairyEggs":4,"fats":1.5,"spices":0.2,"specialty":2.5}},
  'ec-017': {"servings":10,"kcal":220,"protein":8,"fat":14,"carbs":16,"fiber":0,"sugar":0,"cost":{"grains":3,"dairyEggs":2,"specialty":0.5,"fats":0.5}},
  'ec-021': {"servings":4,"kcal":120,"protein":6,"fat":6,"carbs":12,"fiber":3,"sugar":6,"cost":{"produce":1.5,"dairyEggs":1.5,"specialty":0.5}},
  'ec-022': {"servings":4,"kcal":80,"protein":1,"fat":4,"carbs":10,"fiber":2,"sugar":5,"cost":{"produce":1.5,"fats":0.2,"spices":0.2,"specialty":0.1}},
  'ec-023': {"servings":4,"kcal":100,"protein":2,"fat":5,"carbs":11,"fiber":2,"sugar":5,"cost":{"produce":1.5,"fats":0.2,"spices":0.2}},
  'ec-024': {"servings":10,"kcal":24,"protein":1,"fat":0,"carbs":5,"fiber":1,"sugar":2,"cost":{"produce":1,"spices":0.2}},
  'ec-032': {"servings":8,"kcal":15,"protein":1,"fat":0,"carbs":3,"fiber":1,"sugar":2,"cost":{"produce":1,"spices":0.2}},
  'ec-035': {"servings":8,"kcal":80,"protein":3,"fat":4,"carbs":9,"fiber":1,"sugar":2,"cost":{"produce":1.5,"dairyEggs":0.5,"grains":0.1,"fats":0.3}},
  'ec-042': {"servings":5,"kcal":180,"protein":12,"fat":12,"carbs":2,"fiber":0,"sugar":0,"cost":{"dairyEggs":1.2,"produce":0.3,"fats":0.2,"spices":0.1}},
  'ec-043': {"servings":5,"kcal":180,"protein":12,"fat":12,"carbs":2,"fiber":0,"sugar":0,"cost":{"dairyEggs":1.2,"produce":0.3,"fats":0.2}},
  'ec-044': {"servings":5,"kcal":250,"protein":24,"fat":16,"carbs":2,"fiber":0,"sugar":0,"cost":{"dairyEggs":1.2,"protein":4,"fats":0.2}},
  'ec-045': {"servings":5,"kcal":160,"protein":12,"fat":9,"carbs":6,"fiber":1,"sugar":2,"cost":{"dairyEggs":1.2,"produce":1,"fats":0.2,"spices":0.1}},
  'ec-047': {"servings":5,"kcal":200,"protein":12,"fat":14,"carbs":2,"fiber":0,"sugar":0,"cost":{"dairyEggs":1.2,"produce":0.2,"fats":0.3,"spices":0.1}},
  'ec-048': {"servings":5,"kcal":120,"protein":13,"fat":5,"carbs":3,"fiber":0,"sugar":1,"cost":{"dairyEggs":1.6,"specialty":0.2}},
  'ec-052': {"servings":5,"kcal":180,"protein":12,"fat":12,"carbs":4,"fiber":0,"sugar":0,"cost":{"dairyEggs":1.2,"grains":0.1,"fats":0.2,"spices":0.2}}
};
