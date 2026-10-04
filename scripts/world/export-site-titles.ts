// Dump every site recipe title (ar + en + all translations) to
// world/site_titles.json for the world-cuisines duplicate gate.
//   npx tsx scripts/world/export-site-titles.ts
import { writeFileSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allRecipes } from '../../src/data/recipes';
import { allWorldRecipes } from '../../src/data/chapters/world';

const HERE = dirname(fileURLToPath(import.meta.url));
const dataDir = join(HERE, '../../src/data');
const out: Record<string, { title: string; titleEn?: string; translations: string[] }> = {};

// Include not-yet-ready world entries: a dish claimed for one country must
// also block duplicates discovered for later countries.
for (const r of [...allRecipes, ...allWorldRecipes]) {
  out[r.id] = { title: r.title, titleEn: r.titleEn, translations: [] };
}

for (const f of readdirSync(dataDir)) {
  if (!/^recipeTranslations([A-Z][a-z])?\.json$/.test(f)) continue;
  const map = JSON.parse(readFileSync(join(dataDir, f), 'utf-8'));
  for (const [id, t] of Object.entries<{ title?: string }>(map)) {
    if (out[id] && t?.title) out[id].translations.push(t.title);
  }
}

writeFileSync(join(HERE, '../../world/site_titles.json'),
  JSON.stringify(out));
console.log(`${Object.keys(out).length} recipes -> world/site_titles.json`);
