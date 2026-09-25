import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Play, RotateCw, Search, X } from 'lucide-react';
import type { Recipe, SupportedLanguage } from '../types';
import { getVideoStrings } from '../data/videoTranslations';
import {
  RecipeVideo,
  getDishSearchName,
  loadVideosFor,
  videoEmbedUrl,
  videoPageUrl,
  videoThumbnail,
  youtubeSearchUrl
} from '../services/videoSearch';

// Loaded only when the Videos tab is opened (see RecipeDetailModal).

interface RecipeVideosPanelProps {
  recipe: Recipe;
  lang: SupportedLanguage;
}

type State = { status: 'loading' } | { status: 'ready'; videos: RecipeVideo[] } | { status: 'error' };

export const RecipeVideosPanel: React.FC<RecipeVideosPanelProps> = ({ recipe, lang }) => {
  const text = getVideoStrings(lang);
  const isRtl = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const [state, setState] = useState<State>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);
  const [current, setCurrent] = useState<number | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading' });
    setCurrent(null);
    loadVideosFor(recipe, lang).then(
      videos => !cancelled && setState({ status: 'ready', videos }),
      () => !cancelled && setState({ status: 'error' })
    );
    return () => { cancelled = true; };
  }, [recipe, lang, attempt]);

  // Bring the player into view whenever another video starts.
  useEffect(() => {
    if (current !== null) playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [current]);

  useEffect(() => {
    if (current === null) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setCurrent(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current]);

  const videos = state.status === 'ready' ? state.videos : [];
  const playing = current !== null ? videos[current] : undefined;
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;
  const navButton = 'inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 disabled:opacity-40 disabled:pointer-events-none';

  return (
    <div className="space-y-4">
      <p className="bg-red-50/70 border border-red-200/80 rounded-2xl p-4 text-xs sm:text-sm text-red-950">{text.intro}</p>

      {playing && current !== null && (
        <div ref={playerRef} className="scroll-mt-2 rounded-2xl border border-stone-200 bg-stone-950 overflow-hidden">
          <div className={playing.short ? 'mx-auto h-[min(70vh,calc((100vw-3rem)*16/9))] aspect-[9/16]' : 'w-full aspect-video'}>
            <iframe
              key={playing.id}
              src={videoEmbedUrl(playing)}
              title={playing.title}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="bg-white p-3 sm:p-4 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-bold text-stone-900 line-clamp-2" dir="auto">{playing.title}</p>
                {playing.channel && <p className="text-xs text-stone-500 truncate" dir="auto">{playing.channel}</p>}
              </div>
              <button
                onClick={() => setCurrent(null)}
                className="w-8 h-8 shrink-0 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center"
                aria-label={text.close}
                title={text.close}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={() => setCurrent(current - 1)} disabled={current === 0} className={navButton}>
                <PrevIcon className="w-4 h-4" />
                {text.previous}
              </button>
              <span className="text-xs text-stone-500 tabular-nums" dir="ltr">{current + 1} / {videos.length}</span>
              <button onClick={() => setCurrent(current + 1)} disabled={current === videos.length - 1} className={navButton}>
                {text.next}
                <NextIcon className="w-4 h-4" />
              </button>
              <a
                href={videoPageUrl(playing)}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-red-600 text-white hover:bg-red-700"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {text.openOn.replace('{p}', 'YouTube')}
              </a>
            </div>
          </div>
        </div>
      )}

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

      {state.status === 'ready' && videos.length === 0 && (
        <p className="py-6 text-center text-sm text-stone-600">{text.empty}</p>
      )}

      {videos.length > 0 && (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
          {videos.map((video, index) => (
            <li key={video.id}>
              <button
                onClick={() => setCurrent(index)}
                aria-current={index === current}
                className="group w-full text-start space-y-1.5"
              >
                <div className={`relative aspect-video rounded-xl overflow-hidden bg-stone-200 ${index === current ? 'ring-3 ring-red-600 ring-offset-2' : ''}`}>
                  <img
                    src={videoThumbnail(video)}
                    alt=""
                    width={320}
                    height={180}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${index === current ? 'bg-red-600' : 'bg-black/60 group-hover:bg-red-600'}`}>
                      <Play className="w-5 h-5 text-white fill-white" />
                    </span>
                  </span>
                  {video.short && (
                    <span className="absolute top-1.5 start-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white">{text.short}</span>
                  )}
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

      <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-stone-600">
          <Search className="w-3.5 h-3.5" />
          {text.searchOn}
        </span>
        <a
          href={youtubeSearchUrl(getDishSearchName(recipe, lang))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-stone-300 bg-white text-stone-800 hover:bg-stone-50"
        >
          YouTube
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
