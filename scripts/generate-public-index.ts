import { mkdir, writeFile } from 'node:fs/promises';
import { allRecipes } from '../src/data/recipes';

const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://fatma-alkawokgy-recipes.web.app').replace(/\/$/, '');
const publicRecipes = allRecipes;

await mkdir('public', { recursive: true });
await writeFile('public/recipes.json', JSON.stringify({
  name: 'Fatma Alkawokgy public recipe archive',
  description: 'Open recipe archive for public use, search, preservation, and research.',
  recipes: publicRecipes
}, null, 2));

const urls = [siteUrl, ...publicRecipes.map(recipe => `${siteUrl}/?recipe=${encodeURIComponent(recipe.id)}&lang=ar`)]
  .map(url => `  <url><loc>${url}</loc></url>`)
  .join('\n');
await writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);