import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RotateCw } from 'lucide-react';
import type { SupportedLanguage } from '../types';
import type { KidsAges, KidsGroup, KidsRecipeCard } from './types';
import { LanguageSelector } from '../components/LanguageSelector';
import { KidsToggle } from './KidsToggle';
import { loadKidsIndex } from '../services/recipeData';
import { CrayonFilter, KidsArt } from './KidsArt';
import { KidsRecipeView } from './KidsRecipeView';
import { fill, getKidsStrings } from './strings';
import { AGES, GROUPS, GROUP_STYLE, ageLabel } from './theme';

// Cooking with Kids mode. Loaded only when the header button is pressed (or
// the page is opened with ?kids=1), so the rest of the site never pays for it.

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Baloo+Bhaijaan+2:wght@500;700;800&display=swap';

const KIDS_CSS = `
[dir] .kids-root, [dir] .kids-root button, [dir] .kids-root input { font-family: 'Baloo 2', 'Baloo Bhaijaan 2', system-ui, sans-serif; }
[dir="rtl"] .kids-root, [dir="rtl"] .kids-root button, [dir="rtl"] .kids-root input { font-family: 'Baloo Bhaijaan 2', 'Baloo 2', system-ui, sans-serif; }
.kids-root { background-color: #fff8e7; background-image: radial-gradient(#f9d9a6 1.2px, transparent 1.2px); background-size: 22px 22px; }
@keyframes kids-fall { 0% { transform: translateY(-10vh) rotate(0); opacity: 1; } 100% { transform: translateY(105vh) rotate(720deg); opacity: 0.9; } }
@keyframes kids-pop { 0% { transform: scale(0.6); opacity: 0; } 70% { transform: scale(1.08); } 100% { transform: scale(1); opacity: 1; } }
@keyframes kids-wiggle { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(-6deg); } 75% { transform: rotate(6deg); } }
.kids-pop { animation: kids-pop 0.35s ease-out both; }
.kids-wiggle:hover { animation: kids-wiggle 0.5s ease-in-out; }
@media (prefers-reduced-motion: reduce) { .kids-pop, .kids-wiggle:hover { animation: none; } }
`;

interface KidsAppProps {
  lang: SupportedLanguage;
  setLang: (lang: SupportedLanguage) => void;
  onExit: () => void;
  onOpenArchiveRecipe: (id: string) => void;
}

const readKidParam = () => new URLSearchParams(window.location.search).get('kid');

function writeKidParam(id: string | null) {
  const url = new URL(window.location.href);
  if (id) url.searchParams.set('kid', id);
  else url.searchParams.delete('kid');
  window.history.replaceState(null, '', url);
}

export default function KidsApp({ lang, setLang, onExit, onOpenArchiveRecipe }: KidsAppProps) {
  const text = getKidsStrings(lang);
  const [cards, setCards] = useState<KidsRecipeCard[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [group, setGroup] = useState<KidsGroup | 'all'>('all');
  const [age, setAge] = useState<KidsAges | 'any'>('any');
  const [noCookOnly, setNoCookOnly] = useState(false);
  const [openId, setOpenId] = useState<string | null>(readKidParam);

  useEffect(() => {
    if (document.getElementById('kids-font')) return;
    const link = document.createElement('link');
    link.id = 'kids-font';
    link.rel = 'stylesheet';
    link.href = FONT_URL;
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    loadKidsIndex(lang).then(
      list => !cancelled && setCards(list),
      () => !cancelled && setFailed(true)
    );
    return () => { cancelled = true; };
  }, [lang, attempt]);

  const open = useCallback((id: string | null) => {
    setOpenId(id);
    writeKidParam(id);
    window.scrollTo({ top: 0 });
  }, []);

  const shown = useMemo(() => (cards ?? []).filter(card =>
    (group === 'all' || card.group === group) &&
    (!noCookOnly || card.noCook) &&
    (age === 'any' || AGES.indexOf(card.ages) <= AGES.indexOf(age))
  ), [cards, group, age, noCookOnly]);

  const chip = (active: boolean, activeClass = 'bg-violet-500 border-violet-600') =>
    `kids-wiggle inline-flex items-center gap-1.5 min-h-11 px-4 rounded-full border-2 text-sm sm:text-base font-bold transition-colors shadow-[0_3px_0_rgba(74,52,38,0.25)] ${
      active ? `${activeClass} text-white` : 'bg-white border-stone-300 text-stone-800 hover:bg-violet-50'
    }`;

  return (
    <div className="kids-root min-h-screen flex flex-col text-stone-900">
      <style>{KIDS_CSS}</style>
      <CrayonFilter />

      <header className="bg-gradient-to-r from-amber-200 via-pink-200 to-sky-200 border-b-4 border-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
          <button onClick={() => open(null)} className="flex items-center gap-2 min-w-0 text-start">
            <KidsArt id="chef" className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />
            <span className="min-w-0">
              <span className="block text-xl sm:text-3xl font-extrabold leading-tight text-violet-900">{text.title}</span>
              <span className="hidden sm:block text-sm font-semibold text-stone-700">{text.subtitle}</span>
            </span>
          </button>
          <div className="ms-auto flex flex-wrap items-center justify-end gap-2">
            <LanguageSelector currentLang={lang} onSelectLang={setLang} />
            <KidsToggle lang={lang} kidsMode onChange={kids => !kids && onExit()} />
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-5 sm:py-8">
        {openId ? (
          <KidsRecipeView
            key={`${openId}-${lang}`}
            id={openId}
            lang={lang}
            onBack={() => open(null)}
            onOpenArchiveRecipe={onOpenArchiveRecipe}
          />
        ) : (
          <>
            <p className="sm:hidden mb-4 text-sm font-semibold text-stone-700">{text.subtitle}</p>

            <div className="flex flex-wrap gap-2 mb-3" role="group">
              <button onClick={() => setGroup('all')} className={chip(group === 'all')} aria-pressed={group === 'all'}>
                ⭐ {text.all}
              </button>
              {GROUPS.map(g => (
                <button key={g} onClick={() => setGroup(g)} className={chip(group === g, GROUP_STYLE[g].chip)} aria-pressed={group === g}>
                  <span aria-hidden="true">{GROUP_STYLE[g].emoji}</span> {text.groups[g]}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-6" role="group">
              <button onClick={() => setNoCookOnly(v => !v)} className={chip(noCookOnly, 'bg-emerald-500 border-emerald-600')} aria-pressed={noCookOnly}>
                <span aria-hidden="true">❄️</span> {text.noCook}
              </button>
              <button onClick={() => setAge('any')} className={chip(age === 'any', 'bg-orange-500 border-orange-600')} aria-pressed={age === 'any'}>
                {text.anyAge}
              </button>
              {AGES.map(a => (
                <button key={a} onClick={() => setAge(a)} className={chip(age === a, 'bg-orange-500 border-orange-600')} aria-pressed={age === a}>
                  {fill(text.ages, { a: ageLabel(a) })}
                </button>
              ))}
            </div>

            {failed && (
              <div className="flex flex-col items-center gap-3 py-12 text-lg font-semibold text-stone-700">
                <p>{text.error}</p>
                <button onClick={() => setAttempt(n => n + 1)} className={chip(false)}>
                  <RotateCw className="w-4 h-4" /> {text.retry}
                </button>
              </div>
            )}

            {!cards && !failed && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" aria-busy="true" aria-label={text.loading}>
                {Array.from({ length: 8 }, (_, i) => <div key={i} className="aspect-[4/5] rounded-3xl bg-white/70 border-4 border-white animate-pulse" />)}
              </div>
            )}

            {cards && shown.length === 0 && <p className="py-12 text-center text-lg font-bold text-stone-600">{text.empty}</p>}

            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              {shown.map(card => (
                <li key={card.id} className="kids-pop">
                  <button
                    onClick={() => open(card.id)}
                    className={`group w-full h-full flex flex-col text-start rounded-3xl border-4 ${GROUP_STYLE[card.group].card} p-3 shadow-[0_5px_0_rgba(74,52,38,0.2)] hover:-translate-y-1 transition-transform`}
                  >
                    <span className="block rounded-2xl bg-white/80 p-2">
                      <KidsArt id={card.cover} className="w-full aspect-square group-hover:scale-105 transition-transform" />
                    </span>
                    <span className="mt-2 block text-base sm:text-xl font-extrabold leading-tight text-stone-900">{card.title}</span>
                    <span className="mt-auto pt-2 flex flex-wrap gap-1 text-[11px] sm:text-xs font-bold">
                      <span className="px-2 py-0.5 rounded-full bg-white text-stone-700">⏱ {fill(text.minutes, { n: card.minutes })}</span>
                      <span className="px-2 py-0.5 rounded-full bg-white text-stone-700">{fill(text.ages, { a: ageLabel(card.ages) })}</span>
                      {card.noCook
                        ? <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white">❄️ {text.noCook}</span>
                        : card.needsAdult && <span className="px-2 py-0.5 rounded-full bg-violet-500 text-white">🧑 {text.grownUpHelps}</span>}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}
