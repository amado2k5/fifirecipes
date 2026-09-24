import { allRecipes } from '../src/data/recipes';

// Get all non-ec recipes
const nonEcRecipes = allRecipes.filter(r => !r.id.startsWith('ec-'));
const ecRecipes = allRecipes.filter(r => r.id.startsWith('ec-'));

console.log(`Total non-ec recipes: ${nonEcRecipes.length}`);
console.log(`Total ec recipes: ${ecRecipes.length}\n`);

// Group non-ec recipes by category
const byCategory: Record<string, typeof nonEcRecipes> = {};
nonEcRecipes.forEach(r => {
  if (!byCategory[r.category]) byCategory[r.category] = [];
  byCategory[r.category].push(r);
});

// Dump all non-ec recipes with their Arabic titles and ingredient summaries
console.log('=== NON-EC RECIPES BY CATEGORY ===\n');
Object.entries(byCategory).forEach(([category, recipes]) => {
  console.log(`\n${category}:`);
  recipes.forEach(r => {
    console.log(`  ${r.id}: ${r.title}`);
    const ingredients = r.masterIngredients.map(i => i.name).join('; ');
    console.log(`     Ingredients: ${ingredients.substring(0, 120)}...`);
  });
});

// Now dump EC recipes for comparison
console.log('\n\n=== EC RECIPES ===\n');
ecRecipes.forEach(r => {
  console.log(`${r.id}: ${r.title}`);
  const ingredients = r.masterIngredients.map(i => i.name).join('; ');
  console.log(`   Ingredients: ${ingredients.substring(0, 120)}...`);
});
