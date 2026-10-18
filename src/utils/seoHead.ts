import type { Recipe, SupportedLanguage } from '../types';
import { TOP_20_LANGUAGES } from '../data/translations';
import { getRecipeImagePath } from '../data/recipeImages';
import { isListedIn } from './recipeVisibility';

/**
 * Head tags for search engines: the canonical URL, the hreflang cluster and the
 * meta description/keywords of the page being viewed.
 *
 * GitHub Pages serves index.html for every ?lang= and ?recipe= URL, so the
 * inline script in index.html sets a first, self-referencing canonical and
 * hreflang cluster from the URL alone. Once a recipe from the URL has loaded,
 * refineRecipeLinks() completes its cluster exactly as the static recipe pages
 * (scripts/generate-public-index.ts) and the sitemaps list it.
 */

export const SITE_ORIGIN = 'https://fifi.cooking';

/** The language a recipe's own text is written in; its static page /recipe/<id>/ is in that language. */
export const recipeBaseLanguage = (recipe: Pick<Recipe, 'englishOnly'>): SupportedLanguage => (recipe.englishOnly ? 'en' : 'ar');

const listedIn = (recipe: Recipe, lang: SupportedLanguage) =>
  isListedIn({ arabicOnly: !recipe.titleEn, englishOnly: recipe.englishOnly }, lang);

/** URL of a recipe in one language (same rule as the static pages and the sitemaps). */
export function recipeUrl(recipe: Recipe, lang: SupportedLanguage): string {
  const id = encodeURIComponent(recipe.id);
  return lang === recipeBaseLanguage(recipe) ? `${SITE_ORIGIN}/recipe/${id}/` : `${SITE_ORIGIN}/?recipe=${id}&lang=${lang}`;
}

/** Absolute image URL for a recipe (same rule as the static pages). */
export function recipeImageUrl(recipe: Recipe): string {
  if (recipe.imageUrl) return recipe.imageUrl;
  const path = getRecipeImagePath(recipe.id);
  return path ? `${SITE_ORIGIN}/${path}` : `${SITE_ORIGIN}/logo-transparent.png`;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const link = document.createElement('link');
  link.rel = rel;
  if (hreflang) link.hreflang = hreflang;
  link.href = href;
  document.head.appendChild(link);
}

/** Once the recipe named in the URL has loaded: its listed languages, its static page as its own-language URL. */
export function refineRecipeLinks(recipe: Recipe): void {
  const params = new URLSearchParams(window.location.search);
  if (params.get('recipe') !== recipe.id) return;
  const urlLang = TOP_20_LANGUAGES.find(language => language.code === params.get('lang'))?.code as SupportedLanguage | undefined;
  const languages = TOP_20_LANGUAGES.map(language => language.code as SupportedLanguage).filter(lang => listedIn(recipe, lang));
  const page = recipeUrl(recipe, recipeBaseLanguage(recipe));

  document.querySelectorAll('link[rel="alternate"][hreflang], link[rel="canonical"]').forEach(link => link.remove());
  for (const lang of languages) setLink('alternate', recipeUrl(recipe, lang), lang);
  setLink('alternate', page, 'x-default');
  setLink('canonical', urlLang && languages.includes(urlLang) ? recipeUrl(recipe, urlLang) : page);
}

function setMeta(attribute: 'name' | 'property', key: string, content: string | null) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!content) {
    meta?.remove();
    return;
  }
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

/** Description and keywords in the language being shown. */
export function setPageMeta(title: string, description: string, keywords: string[]): void {
  setMeta('name', 'description', description);
  setMeta('name', 'keywords', keywords.length ? keywords.join(', ') : null);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
}
