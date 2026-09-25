import type { Recipe, SupportedLanguage } from '../types';
import { getLocalizedRecipe } from '../utils/recipeLocalization';

// Client for the video-search worker (workers/video-search). Searching happens
// only when a visitor opens a recipe's Videos tab; nothing here runs on page load.

export interface RecipeVideo {
  id: string;
  title: string;
  channel?: string;
  duration?: string;
  views?: string;
  published?: string;
  short?: boolean;
}

/** Set at build time (repository variable VIDEO_SEARCH_URL); without it only the YouTube search link shows. */
export const VIDEO_SEARCH_URL = ((import.meta.env.VITE_VIDEO_SEARCH_URL as string | undefined) ?? '').replace(/\/$/, '');

const MAX_VIDEOS = 20;
const REQUEST_TIMEOUT_MS = 15000;

/** The Videos tab is rolled out to the recipes written in Arabic first. */
export const hasVideosTab = (recipe: Recipe) => !recipe.englishOnly;

/** A title as people would search for it: without parenthesised notes or a leading "عمل" ("making …"). */
const cleanTitle = (title: string) =>
  title.replace(/\([^)]*\)|（[^）]*）/g, ' ').replace(/^\s*عمل\s+/, '').replace(/\s+/g, ' ').trim() || title.trim();

/** The dish's Arabic name, the one most videos of Egyptian dishes use. */
export const getDishSearchName = (recipe: Recipe) => cleanTitle(recipe.title);

/** The dish's name in the visitor's language, when the recipe has been translated into it. */
export function getLocalizedDishName(recipe: Recipe, lang: SupportedLanguage): string | undefined {
  if (lang === 'ar') return undefined;
  const title = getLocalizedRecipe(recipe, lang).title;
  return title && title !== recipe.title ? cleanTitle(title) : undefined;
}

const requests = new Map<string, Promise<RecipeVideo[]>>();

function searchDish(dish: string, lang: SupportedLanguage): Promise<RecipeVideo[]> {
  const key = `${lang}|${dish}`;
  let request = requests.get(key);
  if (!request) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    request = fetch(`${VIDEO_SEARCH_URL}/search?dish=${encodeURIComponent(dish)}&lang=${lang}`, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error(`${response.status} searching videos`);
        return response.json() as Promise<{ videos: RecipeVideo[] }>;
      })
      .then(body => body.videos ?? [])
      .finally(() => clearTimeout(timer));
    // Forget failures so "Try again" really retries.
    request.catch(() => requests.delete(key));
    requests.set(key, request);
  }
  return request;
}

/**
 * Up to twenty videos of the dish: those found in the visitor's language
 * first, then the Arabic ones. Fails only when every search fails.
 */
export async function searchRecipeVideos(recipe: Recipe, lang: SupportedLanguage): Promise<RecipeVideo[]> {
  if (!VIDEO_SEARCH_URL) return [];
  const localized = getLocalizedDishName(recipe, lang);
  const searches = [...(localized ? [searchDish(localized, lang)] : []), searchDish(getDishSearchName(recipe), 'ar')];
  const settled = await Promise.allSettled(searches);
  if (settled.every(result => result.status === 'rejected')) throw (settled[0] as PromiseRejectedResult).reason;
  const seen = new Set<string>();
  return settled
    .flatMap(result => (result.status === 'fulfilled' ? result.value : []))
    .filter(video => !seen.has(video.id) && !!seen.add(video.id))
    .slice(0, MAX_VIDEOS);
}

// 320×180, about 10 KB each: light enough for a grid of twenty on a slow connection.
export const videoThumbnail = (video: RecipeVideo) => `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;

export const videoEmbedUrl = (video: RecipeVideo) =>
  `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`;

export const videoPageUrl = (video: RecipeVideo) =>
  video.short ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`;

/** YouTube's own search page for the dish, for visitors who want more than the grid shows. */
export const youtubeSearchUrl = (dish: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(dish)}`;
