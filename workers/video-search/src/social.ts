/**
 * TikTok, Instagram and Facebook offer no public search API, so their public
 * videos are found through a web search engine (Brave Search API) restricted
 * to each site, and kept only when the link points at an embeddable video.
 */
import type { VideoResult } from './youtube';

const BRAVE_URL = 'https://api.search.brave.com/res/v1/web/search';

type Platform = Exclude<VideoResult['platform'], 'youtube'>;

const SITES: Record<Platform, string> = {
  tiktok: 'tiktok.com',
  instagram: 'instagram.com',
  facebook: 'facebook.com'
};

/** Recognises a video link and returns its platform-specific id. */
export function videoFromUrl(url: string): { platform: Platform; id: string; short: boolean } | undefined {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return undefined;
  }
  const host = parsed.hostname.replace(/^(www|m|web)\./, '');
  const path = parsed.pathname;
  if (host === 'tiktok.com') {
    const match = path.match(/^\/@[^/]+\/video\/(\d+)/);
    return match ? { platform: 'tiktok', id: match[1], short: true } : undefined;
  }
  if (host === 'instagram.com') {
    const match = path.match(/^\/(?:[^/]+\/)?(reel|reels|p|tv)\/([\w-]+)/);
    // Posts ("/p/") may be photos; only reels and IGTV are always videos.
    return match && match[1] !== 'p' ? { platform: 'instagram', id: match[2], short: true } : undefined;
  }
  if (host === 'facebook.com' || host === 'fb.watch') {
    const reel = path.match(/^\/reel\/(\d+)/);
    if (reel) return { platform: 'facebook', id: reel[1], short: true };
    const video = path.match(/^\/[^/]+\/videos\/(?:[^/]+\/)?(\d+)/) ?? (path.startsWith('/watch') ? [null, parsed.searchParams.get('v')] : null);
    return video?.[1] ? { platform: 'facebook', id: video[1], short: false } : undefined;
  }
  return undefined;
}

// Search engines append the site's name to page titles.
const cleanTitle = (title: string) =>
  title
    .replace(/<[^>]+>/g, '')
    .replace(/\s*[|\-–—]\s*(TikTok|Instagram|Facebook)\s*$/i, '')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .trim();

async function searchSite(query: string, platform: Platform, apiKey: string, lang: string): Promise<VideoResult[]> {
  const params = new URLSearchParams({ q: `${query} site:${SITES[platform]}`, count: '20', safesearch: 'strict', search_lang: lang });
  const response = await fetch(`${BRAVE_URL}?${params}`, {
    headers: { accept: 'application/json', 'x-subscription-token': apiKey }
  });
  if (!response.ok) throw new Error(`Brave search answered ${response.status}`);
  const body = (await response.json()) as { web?: { results?: { url: string; title: string; thumbnail?: { src?: string }; profile?: { name?: string } }[] } };
  const videos: VideoResult[] = [];
  for (const result of body.web?.results ?? []) {
    const video = videoFromUrl(result.url);
    if (!video || video.platform !== platform) continue;
    const title = cleanTitle(result.title);
    if (!title) continue;
    videos.push({
      platform,
      id: video.id,
      url: result.url,
      title,
      ...(result.thumbnail?.src ? { thumbnail: result.thumbnail.src } : {}),
      ...(result.profile?.name ? { channel: result.profile.name } : {}),
      ...(video.short ? { short: true } : {})
    });
  }
  return videos;
}

/**
 * The public TikTok, Instagram and Facebook videos a web search finds for the
 * query, one list per platform. Platforms whose search fails are left out.
 */
export async function searchSocial(query: string, apiKey: string, lang: string): Promise<VideoResult[][]> {
  const settled = await Promise.allSettled((Object.keys(SITES) as Platform[]).map(platform => searchSite(query, platform, apiKey, lang)));
  return settled.flatMap(result => (result.status === 'fulfilled' ? [result.value] : []));
}
