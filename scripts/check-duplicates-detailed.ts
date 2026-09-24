import { allRecipes } from '../src/data/recipes';

const ecRecipes = allRecipes.filter(r => r.id.startsWith('ec-'));
const otherRecipes = allRecipes.filter(r => !r.id.startsWith('ec-'));

console.log(`Checking ${ecRecipes.length} EC recipes against ${otherRecipes.length} other recipes\n`);

// Function to normalize text for comparison
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Function to get ingredient summary
function getIngredientSummary(recipe: typeof ecRecipes[0]): string {
  return recipe.masterIngredients
    .map(i => normalizeText(i.name))
    .sort()
    .join(' | ');
}

// Function to get step summary
function getStepSummary(recipe: typeof ecRecipes[0]): string {
  return recipe.uniqueInstructions
    .map(i => normalizeText(i.text))
    .join(' | ');
}

// Check each EC recipe against all other recipes
const potentialDuplicates: Array<{ecId: string, ecTitle: string, otherId: string, otherTitle: string, similarity: number}> = [];

ecRecipes.forEach(ecRecipe => {
  otherRecipes.forEach(otherRecipe => {
    // Check title similarity
    const ecTitleNorm = normalizeText(ecRecipe.title);
    const otherTitleNorm = normalizeText(otherRecipe.title);

    // Check if titles are very similar or if one contains key words of the other
    const titleMatch = ecTitleNorm === otherTitleNorm ||
                       ecTitleNorm.includes(otherTitleNorm.substring(0, 10)) ||
                       otherTitleNorm.includes(ecTitleNorm.substring(0, 10));

    // Check ingredient similarity - if they share many ingredients
    const ecIngredients = getIngredientSummary(ecRecipe);
    const otherIngredients = getIngredientSummary(otherRecipe);

    // Check category match
    const categoryMatch = ecRecipe.category === otherRecipe.category;

    // Check cooking method match
    const methodMatch = ecRecipe.cookingMethod === otherRecipe.cookingMethod;

    if ((titleMatch || (categoryMatch && methodMatch)) && ecRecipe.id !== otherRecipe.id) {
      console.log(`\n❓ Possible duplicate:`);
      console.log(`   EC: ${ecRecipe.id} - ${ecRecipe.title}`);
      console.log(`   Other: ${otherRecipe.id} - ${otherRecipe.title}`);
      console.log(`   Category: ${ecRecipe.category} vs ${otherRecipe.category}`);
      console.log(`   Method: ${ecRecipe.cookingMethod} vs ${otherRecipe.cookingMethod}`);
      console.log(`   EC ingredients (${ecRecipe.masterIngredients.length}): ${ecRecipe.masterIngredients.map(i => i.name).join('; ')}`);
      console.log(`   Other ingredients (${otherRecipe.masterIngredients.length}): ${otherRecipe.masterIngredients.map(i => i.name).join('; ')}`);
    }
  });
});

console.log('\n✅ Duplicate check complete');
