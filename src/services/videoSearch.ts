import type { Recipe, SupportedLanguage } from '../types';
import { getLocalizedRecipe } from '../utils/recipeLocalization';

// Client for the video-search worker (workers/video-search). Searching happens
// only when a visitor opens a recipe's Videos tab; nothing here runs on page load.

export type VideoPlatform = 'youtube' | 'tiktok' | 'instagram' | 'facebook';

export interface RecipeVideo {
  platform: VideoPlatform;
  id: string;
  /** The video's page (TikTok, Instagram, Facebook). */
  url?: string;
  title: string;
  thumbnail?: string;
  channel?: string;
  duration?: string;
  views?: string;
  published?: string;
  short?: boolean;
}

/** Set at build time (repository variable VIDEO_SEARCH_URL); without it only the platform links show. */
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
    .filter(video => !seen.has(`${video.platform}:${video.id}`) && !!seen.add(`${video.platform}:${video.id}`))
    .slice(0, MAX_VIDEOS);
}

export const PLATFORM_NAMES: Record<VideoPlatform, string> = {
  youtube: 'YouTube',
  tiktok: 'TikTok',
  instagram: 'Instagram',
  facebook: 'Facebook'
};

// YouTube's 320×180 thumbnail, about 10 KB: light enough for a grid of twenty on a slow connection.
export const videoThumbnail = (video: RecipeVideo): string | undefined =>
  video.thumbnail ?? (video.platform === 'youtube' ? `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg` : undefined);

export function videoEmbedUrl(video: RecipeVideo): string {
  switch (video.platform) {
    case 'tiktok':
      return `https://www.tiktok.com/embed/v2/${video.id}`;
    case 'instagram':
      return `https://www.instagram.com/reel/${video.id}/embed/`;
    case 'facebook':
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url ?? `https://www.facebook.com/watch/?v=${video.id}`)}&show_text=false&autoplay=true`;
    default:
      return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`;
  }
}

export function videoPageUrl(video: RecipeVideo): string {
  if (video.url) return video.url;
  if (video.platform !== 'youtube') return videoEmbedUrl(video);
  return video.short ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`;
}

/** Each platform's own search page for the dish, for visitors who want more than the grid shows. */
export function platformSearchLinks(dish: string): { name: string; url: string }[] {
  const q = encodeURIComponent(dish);
  return [
    { name: 'YouTube', url: `https://www.youtube.com/results?search_query=${q}` },
    { name: 'TikTok', url: `https://www.tiktok.com/search/video?q=${q}` },
    { name: 'Instagram', url: `https://www.instagram.com/explore/search/keyword/?q=${q}` },
    { name: 'Facebook', url: `https://www.facebook.com/search/videos/?q=${q}` }
  ];
}
