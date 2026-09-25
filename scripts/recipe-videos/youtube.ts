/**
 * Searches YouTube through its public web client API ("InnerTube") — the same
 * endpoint youtube.com's own search box calls — so no API key or quota is
 * needed. The response layout changes from time to time, so the parser walks
 * the whole tree looking for the few renderer shapes that describe a video
 * rather than depending on one fixed path.
 */

export interface VideoResult {
  id: string;
  title: string;
  channel?: string;
  duration?: string;
  views?: string;
  published?: string;
  /** A YouTube Short (vertical video). */
  short?: boolean;
}

const SEARCH_URL = 'https://www.youtube.com/youtubei/v1/search?prettyPrint=false';
const CLIENT_VERSION = '2.20250925.01.00';

export async function searchYouTube(query: string, hl = 'ar', gl = 'EG'): Promise<VideoResult[]> {
  const response = await fetch(SEARCH_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-youtube-client-name': '1',
      'x-youtube-client-version': CLIENT_VERSION,
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36',
      'accept-language': `${hl},en;q=0.8`
    },
    body: JSON.stringify({
      context: { client: { clientName: 'WEB', clientVersion: CLIENT_VERSION, hl, gl } },
      query
    })
  });
  if (!response.ok) throw new Error(`YouTube search answered ${response.status}`);
  return parseSearchResponse(await response.json());
}

type Node = Record<string, any>;

const text = (value: any): string | undefined => {
  if (!value) return undefined;
  if (typeof value === 'string') return value;
  if (typeof value.simpleText === 'string') return value.simpleText;
  if (typeof value.content === 'string') return value.content;
  if (Array.isArray(value.runs)) return value.runs.map((run: Node) => run.text ?? '').join('') || undefined;
  return undefined;
};

const isShortEndpoint = (endpoint: Node | undefined) =>
  !!endpoint?.reelWatchEndpoint || String(endpoint?.commandMetadata?.webCommandMetadata?.url ?? '').startsWith('/shorts/');

function fromVideoRenderer(r: Node): VideoResult | undefined {
  if (typeof r.videoId !== 'string') return undefined;
  const title = text(r.title);
  if (!title) return undefined;
  return {
    id: r.videoId,
    title,
    channel: text(r.ownerText) ?? text(r.longBylineText) ?? text(r.shortBylineText),
    duration: text(r.lengthText),
    views: text(r.shortViewCountText) ?? text(r.viewCountText),
    published: text(r.publishedTimeText),
    ...(isShortEndpoint(r.navigationEndpoint) ? { short: true } : {})
  };
}

function fromReelItem(r: Node): VideoResult | undefined {
  if (typeof r.videoId !== 'string') return undefined;
  const title = text(r.headline) ?? text(r.accessibility?.accessibilityData?.label);
  if (!title) return undefined;
  return { id: r.videoId, title, views: text(r.viewCountText), short: true };
}

function fromShortsLockup(r: Node): VideoResult | undefined {
  const id = r.onTap?.innertubeCommand?.reelWatchEndpoint?.videoId ?? r.entityId?.replace(/^shorts-shelf-item-/, '');
  const title = text(r.overlayMetadata?.primaryText) ?? r.accessibilityText;
  if (typeof id !== 'string' || !title) return undefined;
  return { id, title, views: text(r.overlayMetadata?.secondaryText), short: true };
}

/** Collects every video in a search response, in the order YouTube ranked them. */
export function parseSearchResponse(root: unknown): VideoResult[] {
  const results: VideoResult[] = [];
  const seen = new Set<string>();
  const add = (video: VideoResult | undefined) => {
    if (video && !seen.has(video.id)) {
      seen.add(video.id);
      results.push(video);
    }
  };
  const walk = (node: unknown) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    const n = node as Node;
    if (n.videoRenderer) add(fromVideoRenderer(n.videoRenderer));
    else if (n.reelItemRenderer) add(fromReelItem(n.reelItemRenderer));
    else if (n.shortsLockupViewModel) add(fromShortsLockup(n.shortsLockupViewModel));
    else for (const value of Object.values(n)) walk(value);
  };
  walk(root);
  return results;
}

// --- Relevance -------------------------------------------------------------

// Words that say nothing about which dish a video is about.
const STOPWORDS = new Set([
  'طريقه', 'عمل', 'عمايل', 'اعداد', 'تحضير', 'وصفه', 'اكله', 'احلى', 'اسهل', 'اطيب', 'الشيف', 'شيف', 'مع', 'في', 'من', 'على',
  'او', 'و', 'ب', 'بال', 'ال', 'الى', 'عن', 'shorts', 'short', 'recipe', 'how', 'to', 'make', 'the', 'a', 'and', 'with', 'of',
  'recette', 'receta', 'rezept', 'ricetta', 'receita', 'рецепт', 'tarifi', 'tarif', 'resep', 'mapishi', 'reçete', 'συνταγή',
  'رسيبي', 'ترکیب', 'طرز', 'تهیه', 'de', 'la', 'le', 'du', 'des', 'et', 'con', 'el', 'y', 'mit', 'und', 'di', 'con', 'e', 'com', 'с', 'и', 've', 'dan'
]);

// Scripts written without spaces, where a dish name is matched as a substring.
const UNSPACED = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/;

/** Folds the spelling variants of Arabic letters and strips diacritics. */
export function normalizeArabic(value: string): string {
  return value
    .toLowerCase()
    .replace(/[ً-ٰٟـ]/g, '') // harakat, dagger alef, tatweel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي');
}

function tokens(value: string): string[] {
  return normalizeArabic(value)
    .split(/[^\p{L}\p{N}]+/u)
    // Drop the definite article and a leading "بـ/و" so "بالأرز" matches "أرز".
    .map(word => word.replace(/^(وال|بال|فال|كال|لل|ال)(?=\p{L}{2,})/u, ''))
    .filter(word => word.length > 1 && !STOPWORDS.has(word));
}

/** Share (0–1) of the dish's words that appear in a video title. */
export function relevance(dishName: string, videoTitle: string): number {
  const wanted = [...new Set(tokens(dishName))];
  if (!wanted.length) return 0;
  const have = tokens(videoTitle);
  const haystack = normalizeArabic(videoTitle);
  const matches = wanted.filter(word =>
    have.some(other => other === word || (word.length > 3 && (other.startsWith(word) || word.startsWith(other)))) ||
    (UNSPACED.test(word) && haystack.includes(word))
  );
  return matches.length / wanted.length;
}

/**
 * Merges result lists, keeps the videos whose title shares at least one of the
 * dish's words, and orders them by that match first and YouTube's rank second.
 */
export function rankVideos(dishName: string, lists: VideoResult[][], limit: number): VideoResult[] {
  const seen = new Set<string>();
  const scored: { video: VideoResult; score: number; rank: number }[] = [];
  let rank = 0;
  const longest = Math.max(0, ...lists.map(list => list.length));
  for (let i = 0; i < longest; i++) {
    for (const list of lists) {
      const video = list[i];
      if (!video || seen.has(video.id)) continue;
      seen.add(video.id);
      const score = relevance(dishName, video.title);
      if (score > 0) scored.push({ video, score, rank: rank++ });
    }
  }
  // Coarse buckets so a slightly better word match does not bury a top result.
  const bucket = (score: number) => (score >= 0.99 ? 2 : score >= 0.5 ? 1 : 0);
  const ranked = scored.sort((a, b) => bucket(b.score) - bucket(a.score) || a.rank - b.rank).map(entry => entry.video);
  return balanceShorts(ranked, limit);
}

/**
 * YouTube search pages are dominated by Shorts. Alternates full videos and
 * Shorts (full video first), keeping each group in rank order, and lets
 * Shorts fill at most half of the list unless there are too few full videos.
 */
export function balanceShorts(videos: VideoResult[], limit: number): VideoResult[] {
  const full = videos.filter(video => !video.short);
  const shorts = videos.filter(video => video.short);
  const maxShorts = Math.max(Math.ceil(limit / 2), limit - full.length);
  const result: VideoResult[] = [];
  let usedShorts = 0;
  while (result.length < limit && (full.length || (shorts.length && usedShorts < maxShorts))) {
    if (full.length) result.push(full.shift()!);
    if (result.length < limit && shorts.length && usedShorts < maxShorts) {
      result.push(shorts.shift()!);
      usedShorts++;
    }
  }
  return result;
}
