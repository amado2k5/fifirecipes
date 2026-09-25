/**
 * Finds YouTube videos (normal videos and Shorts) for every recipe that has
 * a Videos tab and saves them to src/data/recipeVideos.json, which
 * scripts/generate-public-index.ts turns into one small file per recipe.
 *
 * Run weekly by .github/workflows/refresh-recipe-videos.yml. It can also be
 * run by hand from any machine that can reach youtube.com:
 *
 *   npx tsx scripts/recipe-videos/fetch-videos.ts [--only id1,id2] [--limit n] [--max-age-days n]
 *
 * Recipes fetched within --max-age-days (default 6) are skipped, so an
 * interrupted run picks up where it stopped.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { allRecipes } from '../../src/data/recipes';
import { arabicVideoQuery, cleanDishTitle, englishVideoQuery } from '../../src/utils/videoQuery';
import { rankVideos, searchYouTube, type VideoResult } from './youtube';

const OUTPUT = 'src/data/recipeVideos.json';
const ARABIC_VIDEOS = 20;
const ENGLISH_VIDEOS = 12;
const DELAY_MS = 400;
const CONCURRENCY = 2;

type StoredVideo = Omit<VideoResult, 'published'>;
interface RecipeVideosEntry {
  fetched: string;
  ar: StoredVideo[];
  en?: StoredVideo[];
}

const args = process.argv.slice(2);
const option = (name: string) => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 ? args[index + 1] : undefined;
};
const only = option('only')?.split(',');
const limit = Number(option('limit') ?? Infinity);
const maxAgeDays = Number(option('max-age-days') ?? 6);

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
// "3 years ago" goes stale in a stored file.
const store = (videos: VideoResult[]): StoredVideo[] => videos.map(({ published: _published, ...video }) => video);

async function search(query: string, hl: string, gl: string): Promise<VideoResult[]> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await searchYouTube(query, hl, gl);
    } catch (error) {
      if (attempt === 3) throw error;
      await sleep(2000 * attempt);
    }
  }
}

let data: Record<string, RecipeVideosEntry> = {};
try {
  data = JSON.parse(await readFile(OUTPUT, 'utf-8'));
} catch {
  // First run.
}

// One recipe per line keeps the weekly diffs readable.
async function save() {
  const ids = Object.keys(data).sort();
  await writeFile(OUTPUT, `{\n${ids.map(id => `${JSON.stringify(id)}:${JSON.stringify(data[id])}`).join(',\n')}\n}\n`);
}

const today = new Date().toISOString().slice(0, 10);
const isFresh = (entry: RecipeVideosEntry | undefined) =>
  !!entry && (Date.now() - Date.parse(entry.fetched)) / 86_400_000 < maxAgeDays;

const queue = allRecipes
  .filter(recipe => !recipe.englishOnly)
  .filter(recipe => (only ? only.includes(recipe.id) : !isFresh(data[recipe.id])))
  .slice(0, limit);

console.log(`Searching YouTube for ${queue.length} recipes…`);
let done = 0;
let failed = 0;
let empty = 0;

async function worker() {
  for (let recipe = queue.shift(); recipe; recipe = queue.shift()) {
    try {
      const ar = rankVideos(cleanDishTitle(recipe.title), [await search(arabicVideoQuery(recipe.title), 'ar', 'EG')], ARABIC_VIDEOS);
      await sleep(DELAY_MS);
      const en = recipe.titleEn
        ? rankVideos(cleanDishTitle(recipe.titleEn), [await search(englishVideoQuery(recipe.titleEn), 'en', 'US')], ENGLISH_VIDEOS)
        : [];
      data[recipe.id] = { fetched: today, ar: store(ar), ...(en.length ? { en: store(en) } : {}) };
      if (!ar.length && !en.length) empty++;
    } catch (error) {
      failed++;
      console.warn(`  ${recipe.id}: ${(error as Error).message}`);
      // Stop early when YouTube refuses every request (blocked or changed API).
      if (failed >= 10 && failed === done + 1) throw new Error('YouTube rejected the first 10 recipes; stopping.');
    }
    done++;
    if (done % 25 === 0) {
      await save();
      console.log(`  ${done} done (${failed} failed, ${empty} without videos)`);
    }
    await sleep(DELAY_MS);
  }
}

try {
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
} finally {
  await save();
}
console.log(`Finished: ${done - failed} recipes updated, ${failed} failed, ${empty} without matching videos.`);
if (done > 0 && failed === done) process.exit(1);
