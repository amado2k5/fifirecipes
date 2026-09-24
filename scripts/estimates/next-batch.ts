import { allRecipes } from '../../src/data/recipes';
import { RECIPE_ESTIMATES } from '../../src/data/recipeEstimatesData';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const skipFile = join(__dirname, 'skip.json');
const skip = new Set(JSON.parse(readFileSync(skipFile, 'utf-8')));

const countMode = process.argv.includes('--count');
const numArg = process.argv.find(arg => /^\d+$/.test(arg));
const batchSize = numArg ? parseInt(numArg, 10) : 20;

const missing = allRecipes
  .filter(r => !RECIPE_ESTIMATES[r.id] && !skip.has(r.id))
  .sort((a, b) => a.id.localeCompare(b.id));

const remaining = missing.length;

if (countMode) {
  console.log(`REMAINING ${remaining}`);
  process.exit(0);
}

const batch = missing.slice(0, batchSize);

console.log(`REMAINING ${remaining}`);

for (const recipe of batch) {
  const servingsStr = recipe.servings ?? '?';
  const servingsNum = parseFloat(servingsStr);
  const servingsText = Number.isInteger(servingsNum)
    ? `${Math.round(servingsNum)} servings`
    : `${Math.floor(servingsNum)}–${Math.ceil(servingsNum)} servings`;

  console.log(`${recipe.id} | ${recipe.title} | ${servingsText}`);

  for (const ing of recipe.masterIngredients) {
    console.log(`  - ${ing.name}: ${ing.standardAmount}`);
  }
}
