/**
 * Video search for fifi.cooking's recipe "Videos" tab.
 *
 *   GET /search?dish=<dish name>&lang=<site language>  →  { dish, videos: VideoResult[] }
 *
 * The static site cannot query YouTube from the browser (no CORS), so this
 * Cloudflare Worker runs the search, keeps the videos that are about the dish,
 * and caches the answer at the edge for a week, so each dish costs YouTube
 * one pair of searches per week no matter how many visitors open it.
 */
import { rankVideos, searchYouTube } from './youtube';

interface Env {
  /** Comma-separated origins allowed to call the worker. */
  ALLOWED_ORIGINS?: string;
}

interface WorkerContext {
  waitUntil(promise: Promise<unknown>): void;
}

const MAX_VIDEOS = 20;

/** The site's languages: the word people add to a dish name to find a cooking video, and a region to search from. */
const LANGUAGES: Record<string, { recipe: string; gl: string }> = {
  ar: { recipe: 'طريقة عمل', gl: 'EG' },
  en: { recipe: 'recipe', gl: 'US' },
  fr: { recipe: 'recette', gl: 'FR' },
  es: { recipe: 'receta', gl: 'ES' },
  de: { recipe: 'rezept', gl: 'DE' },
  it: { recipe: 'ricetta', gl: 'IT' },
  pt: { recipe: 'receita', gl: 'BR' },
  ru: { recipe: 'рецепт', gl: 'RU' },
  tr: { recipe: 'tarifi', gl: 'TR' },
  ja: { recipe: 'レシピ', gl: 'JP' },
  zh: { recipe: '做法', gl: 'TW' },
  ko: { recipe: '레시피', gl: 'KR' },
  hi: { recipe: 'रेसिपी', gl: 'IN' },
  ur: { recipe: 'ترکیب', gl: 'PK' },
  fa: { recipe: 'طرز تهیه', gl: 'IR' },
  el: { recipe: 'συνταγή', gl: 'GR' },
  id: { recipe: 'resep', gl: 'ID' },
  sw: { recipe: 'mapishi', gl: 'KE' },
  ku: { recipe: 'reçete', gl: 'IQ' }
};
const CACHE_SECONDS = 7 * 24 * 60 * 60;
const DEFAULT_ORIGINS = 'https://fifi.cooking,https://www.fifi.cooking,https://amado2k5.github.io,http://localhost:3000,http://localhost:4174';

function corsHeaders(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get('origin') ?? '';
  const allowed = (env.ALLOWED_ORIGINS || DEFAULT_ORIGINS).split(',').map(value => value.trim());
  return allowed.includes(origin) ? { 'access-control-allow-origin': origin, vary: 'origin' } : {};
}

function json(body: unknown, status: number, headers: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...headers }
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: WorkerContext): Promise<Response> {
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: { ...cors, 'access-control-allow-methods': 'GET' } });
    const url = new URL(request.url);
    if (request.method !== 'GET' || url.pathname !== '/search') return json({ error: 'not found' }, 404, cors);

    const dish = (url.searchParams.get('dish') ?? '').replace(/\s+/g, ' ').trim().slice(0, 120);
    const lang = LANGUAGES[url.searchParams.get('lang') ?? ''] ? url.searchParams.get('lang')! : 'ar';
    if (!dish) return json({ error: 'missing dish' }, 400, cors);

    // One cache entry per dish, whichever site origin asked for it.
    const cache = await caches.open('video-search');
    const cacheKey = new Request(`https://video-search.cache/v1/${lang}/${encodeURIComponent(dish)}`);
    const cached = await cache.match(cacheKey);
    if (cached) return json(await cached.json(), 200, { ...cors, 'x-cache': 'hit' });

    const { recipe, gl } = LANGUAGES[lang];
    const queries = lang === 'ar' || lang === 'fa' ? [`${recipe} ${dish}`, `${dish} #shorts`] : [`${dish} ${recipe}`, `${dish} #shorts`];
    const settled = await Promise.allSettled(queries.map(query => searchYouTube(query, lang, gl)));
    const lists = settled.flatMap(result => (result.status === 'fulfilled' ? [result.value] : []));
    if (!lists.length) {
      const reason = settled[0].status === 'rejected' ? String(settled[0].reason) : 'unknown';
      return json({ error: 'search failed', reason }, 502, cors);
    }

    const body = { dish, videos: rankVideos(dish, lists, MAX_VIDEOS) };
    ctx.waitUntil(cache.put(cacheKey, new Response(JSON.stringify(body), {
      headers: { 'content-type': 'application/json', 'cache-control': `public, max-age=${CACHE_SECONDS}` }
    })));
    return json(body, 200, { ...cors, 'cache-control': 'public, max-age=3600', 'x-cache': 'miss' });
  }
};
