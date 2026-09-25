import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { RecipeEstimate } from '../../src/data/recipeEstimates';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (!process.argv[2]) {
  console.error('Usage: npx tsx append.ts <json-file-path>');
  process.exit(1);
}

const jsonPath = process.argv[2];
const estimates: Record<string, RecipeEstimate> = JSON.parse(readFileSync(jsonPath, 'utf-8'));

const errors: string[] = [];

for (const [id, estimate] of Object.entries(estimates)) {
  // Validate all fields present
  if (!('servings' in estimate) || !('kcal' in estimate) || !('protein' in estimate) ||
      !('fat' in estimate) || !('carbs' in estimate) || !('fiber' in estimate) ||
      !('sugar' in estimate) || !('cost' in estimate)) {
    errors.push(`${id}: missing required fields`);
    continue;
  }

  // Validate nutrition is whole numbers and non-negative
  if (!Number.isInteger(estimate.kcal) || estimate.kcal < 0) errors.push(`${id}: kcal must be whole number >= 0`);
  if (!Number.isInteger(estimate.protein) || estimate.protein < 0) errors.push(`${id}: protein must be whole number >= 0`);
  if (!Number.isInteger(estimate.fat) || estimate.fat < 0) errors.push(`${id}: fat must be whole number >= 0`);
  if (!Number.isInteger(estimate.carbs) || estimate.carbs < 0) errors.push(`${id}: carbs must be whole number >= 0`);
  if (!Number.isInteger(estimate.fiber) || estimate.fiber < 0) errors.push(`${id}: fiber must be whole number >= 0`);
  if (!Number.isInteger(estimate.sugar) || estimate.sugar < 0) errors.push(`${id}: sugar must be whole number >= 0`);

  // Validate servings > 0
  if (typeof estimate.servings !== 'number' || estimate.servings <= 0) {
    errors.push(`${id}: servings must be > 0`);
  }

  // Validate protein*4 + fat*9 + carbs*4 within 15% of kcal
  const calculatedKcal = estimate.protein * 4 + estimate.fat * 9 + estimate.carbs * 4;
  const kcalTarget = estimate.kcal;
  if (kcalTarget > 0) {
    const diff = Math.abs(calculatedKcal - kcalTarget) / kcalTarget;
    if (diff > 0.15) {
      errors.push(`${id}: calculated kcal (${calculatedKcal}) differs >15% from kcal (${kcalTarget})`);
    }
  }

  // Validate at least one cost bucket
  if (!estimate.cost || Object.keys(estimate.cost).length === 0) {
    errors.push(`${id}: must have at least one cost bucket`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

// Append to missingEstimates.ts
const missingPath = join(__dirname, '../../src/data/missingEstimates.ts');
const content = readFileSync(missingPath, 'utf-8');

// Find the closing "};" and insert before it
const lines = content.split('\n');
let insertIndex = -1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('};')) {
    insertIndex = i;
    break;
  }
}

if (insertIndex === -1) {
  console.error('Could not find closing "};" in missingEstimates.ts');
  process.exit(1);
}

const newEntries = Object.entries(estimates)
  .map(([id, est]) => `  '${id}': ${JSON.stringify(est)}`)
  .join(',\n');

const beforeClosing = lines.slice(0, insertIndex).join('\n');
const closing = lines[insertIndex];

const newContent = beforeClosing + (beforeClosing.endsWith('{') ? '' : ',\n') + newEntries + '\n' + closing + '\n' + lines.slice(insertIndex + 1).join('\n');

writeFileSync(missingPath, newContent);
console.log(`✓ Appended ${Object.keys(estimates).length} entries to missingEstimates.ts`);
