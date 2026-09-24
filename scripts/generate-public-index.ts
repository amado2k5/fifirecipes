import { mkdir, writeFile } from 'node:fs/promises';
import { allRecipes } from '../src/data/recipes';
import { RECIPE_ESTIMATES } from '../src/data/recipeEstimates';

const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://fifi.cooking').replace(/\/$/, '');
const publicRecipes = allRecipes;
const SUPPORTED_LANGUAGES = ['ar', 'en', 'fr', 'es', 'ja', 'hi', 'pt', 'ru', 'zh', 'de', 'it', 'el', 'ur', 'fa', 'tr', 'ku', 'id', 'sw', 'ko'];

await mkdir('public', { recursive: true });
await writeFile('public/recipes.json', JSON.stringify({
  name: 'Fatma Alkawokgy public recipe archive',
  description: 'Open recipe archive for public use, search, preservation, and research.',
  estimatesNote: 'estimates: per-serving nutrition and whole-recipe ingredient cost (USD) are approximations.',
  recipes: publicRecipes.map(recipe => ({ ...recipe, estimates: RECIPE_ESTIMATES[recipe.id] }))
}, null, 2));

const urls = [
  siteUrl,
  ...SUPPORTED_LANGUAGES.map(lang => `${siteUrl}/?lang=${lang}`),
  ...publicRecipes.flatMap(recipe =>
    SUPPORTED_LANGUAGES.map(lang => `${siteUrl}/?recipe=${encodeURIComponent(recipe.id)}&lang=${lang}`)
  )
]
  // <loc> content must be XML-escaped per the sitemap protocol.
  .map(url => `  <url><loc>${url.replace(/&/g, '&amp;')}</loc></url>`)
  .join('\n');
await writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);