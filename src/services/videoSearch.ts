import type { Recipe, SupportedLanguage } from '../types';
import { cleanDishTitle } from '../utils/videoQuery';
import { getLocalizedRecipe } from '../utils/recipeLocalization';
import { loadRecipeVideos } from './recipeData';

// The Videos tab's data: YouTube videos found by scripts/recipe-videos/fetch-videos.ts
// and served as one small static file per recipe. Nothing here runs until the tab is opened.

export interface RecipeVideo {
  id: string;
  title: string;
  channel?: string;
  duration?: string;
  views?: string;
  /** A YouTube Short (vertical video). */
  short?: boolean;
}

interface RecipeVideosFile {
  ar: RecipeVideo[];
  en?: RecipeVideo[];
}

const MAX_VIDEOS = 20;

/** The Videos tab is rolled out to the recipes written in Arabic first. */
export const hasVideosTab = (recipe: Recipe) => !recipe.englishOnly;

/**
 * Up to twenty videos: Arabic-language results for Arabic readers; for
 * everyone else the English-language results first, then the Arabic ones.
 */
export async function loadVideosFor(recipe: Recipe, lang: SupportedLanguage): Promise<RecipeVideo[]> {
  const file = await loadRecipeVideos<RecipeVideosFile>(recipe.id);
  const lists = lang === 'ar' ? [file.ar] : [file.en ?? [], file.ar];
  const seen = new Set<string>();
  return lists
    .flat()
    .filter(video => !seen.has(video.id) && !!seen.add(video.id))
    .slice(0, MAX_VIDEOS);
}

/** The dish's name for a YouTube search link, in the visitor's language when translated. */
export function getDishSearchName(recipe: Recipe, lang: SupportedLanguage): string {
  const localized = lang === 'ar' ? recipe.title : getLocalizedRecipe(recipe, lang).title || recipe.title;
  return cleanDishTitle(localized);
}

// 320×180, about 10 KB each: light enough for a grid of twenty on a slow connection.
export const videoThumbnail = (video: RecipeVideo) => `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;

export const videoEmbedUrl = (video: RecipeVideo) =>
  `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`;

export const videoPageUrl = (video: RecipeVideo) =>
  video.short ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`;

/** YouTube's own search page for the dish, for visitors who want more than the tab shows. */
export const youtubeSearchUrl = (dish: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(dish)}`;
