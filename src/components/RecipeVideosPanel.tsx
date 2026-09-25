import React, { useEffect, useState } from 'react';
import { ExternalLink, Play, RotateCw, Search, X } from 'lucide-react';
import type { Recipe, SupportedLanguage } from '../types';
import { getVideoStrings } from '../data/videoTranslations';
import {
  PLATFORM_NAMES,
  RecipeVideo,
  VideoPlatform,
  VIDEO_SEARCH_URL,
  getDishSearchName,
  getLocalizedDishName,
  platformSearchLinks,
  searchRecipeVideos,
  videoEmbedUrl,
  videoPageUrl,
  videoThumbnail
} from '../services/videoSearch';

// Loaded only when the Videos tab is opened (see RecipeDetailModal).

interface RecipeVideosPanelProps {
  recipe: Recipe;
  lang: SupportedLanguage;
}

const PLATFORM_BADGE: Record<VideoPlatform, string> = {
  youtube: 'bg-red-600',
  tiktok: 'bg-black',
  instagram: 'bg-gradient-to-r from-fuchsia-600 to-orange-500',
  facebook: 'bg-blue-600'
};

type State = { status: 'loading' } | { status: 'ready'; videos: RecipeVideo[] } | { status: 'error' };

export const RecipeVideosPanel: React.FC<RecipeVideosPanelProps> = ({ recipe, lang }) => {
  const text = getVideoStrings(lang);
  // Platform searches use the dish's name in the visitor's language when there is one.
  const dish = getLocalizedDishName(recipe, lang) ?? getDishSearchName(recipe);
  const [state, setState] = useState<State>(VIDEO_SEARCH_URL ? { status: 'loading' } : { status: 'ready', videos: [] });
  const [attempt, setAttempt] = useState(0);
  const [playing, setPlaying] = useState<RecipeVideo | null>(null);

  useEffect(() => {
    if (!VIDEO_SEARCH_URL) return;
    let cancelled = false;
    setState({ status: 'loading' });
    searchRecipeVideos(recipe, lang).then(
      videos => !cancelled && setState({ status: 'ready', videos }),
      () => !cancelled && setState({ status: 'error' })
    );
    return () => { cancelled = true; };
  }, [recipe, lang, attempt]);

  return (
    <div className="space-y-4">
      <p className="bg-red-50/70 border border-red-200/80 rounded-2xl p-4 text-xs sm:text-sm text-red-950">{text.intro}</p>

      {state.status === 'loading' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" aria-busy="true" aria-label={text.loading}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="space-y-2 animate-pulse">
              <div className="aspect-video rounded-xl bg-stone-200" />
              <div className="h-3 rounded bg-stone-200 w-5/6" />
              <div className="h-3 rounded bg-stone-100 w-1/2" />
            </div>
          ))}
        </div>
      )}

      {state.status === 'error' && (
        <div className="flex flex-col items-center gap-3 py-6 text-sm text-stone-600">
          <p>{text.error}</p>
          <button
            onClick={() => setAttempt(n => n + 1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 bg-white font-semibold text-stone-800 hover:bg-stone-50"
          >
            <RotateCw className="w-4 h-4" />
            {text.retry}
          </button>
        </div>
      )}

      {state.status === 'ready' && VIDEO_SEARCH_URL && state.videos.length === 0 && (
        <p className="py-6 text-center text-sm text-stone-600">{text.empty}</p>
      )}

      {state.status === 'ready' && state.videos.length > 0 && (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
          {state.videos.map(video => (
            <li key={`${video.platform}:${video.id}`}>
              <button onClick={() => setPlaying(video)} className="group w-full text-start space-y-1.5">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-stone-700 to-stone-900">
                  {videoThumbnail(video) ? (
                    <img
                      src={videoThumbnail(video)}
                      alt=""
                      width={320}
                      height={180}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <span className="absolute inset-x-0 bottom-2 text-center text-[11px] font-semibold text-white/70">{PLATFORM_NAMES[video.platform]}</span>
                  )}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </span>
                  </span>
                  <span className={`absolute top-1.5 start-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold text-white ${PLATFORM_BADGE[video.platform]}`}>
                    {video.platform === 'youtube' && video.short ? text.short : PLATFORM_NAMES[video.platform]}
                  </span>
                  {video.duration && (
                    <span className="absolute bottom-1.5 end-1.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-black/75 text-white" dir="ltr">{video.duration}</span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-stone-900 line-clamp-2 leading-snug" dir="auto">{video.title}</p>
                {(video.channel || video.views) && (
                  <p className="text-[11px] text-stone-500 truncate" dir="auto">
                    {[video.channel, video.views].filter(Boolean).join(' · ')}
                  </p>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="pt-2 border-t border-stone-100 space-y-2">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-stone-600">
          <Search className="w-3.5 h-3.5" />
          {text.searchOn}
        </p>
        <div className="flex flex-wrap gap-2">
          {platformSearchLinks(dish).map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-stone-300 bg-white text-stone-800 hover:bg-stone-50"
            >
              {link.name}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>

      {playing && <VideoPlayer video={playing} closeLabel={text.close} openLabel={text.openOn.replace('{p}', PLATFORM_NAMES[playing.platform])} onClose={() => setPlaying(null)} />}
    </div>
  );
};

const VideoPlayer: React.FC<{ video: RecipeVideo; closeLabel: string; openLabel: string; onClose: () => void }> = ({
  video,
  closeLabel,
  openLabel,
  onClose
}) => {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/90 flex flex-col items-center justify-center p-3 sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={video.title}>
      <div className="w-full max-w-4xl flex flex-col items-center gap-3" onClick={event => event.stopPropagation()}>
        <div className="w-full flex items-center justify-between gap-3">
          <a
            href={videoPageUrl(video)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white hover:opacity-90 ${PLATFORM_BADGE[video.platform]}`}
          >
            <ExternalLink className="w-4 h-4" />
            {openLabel}
          </a>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label={closeLabel}
            title={closeLabel}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className={video.short ? 'h-[min(78vh,calc(100vw*16/9))] aspect-[9/16]' : 'w-full aspect-video max-h-[78vh]'}>
          <iframe
            src={videoEmbedUrl(video)}
            title={video.title}
            className="w-full h-full rounded-xl bg-black"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <p className="w-full text-sm font-semibold text-white line-clamp-2" dir="auto">{video.title}</p>
      </div>
    </div>
  );
};
