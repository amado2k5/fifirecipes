import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Pause, Play, RotateCw, Share2, Timer, Volume2, VolumeX } from 'lucide-react';
import type { SupportedLanguage } from '../types';
import type { LocalizedKidsRecipe } from './types';
import { loadKidsRecipe } from '../services/recipeData';
import { KidsArt, StepPicture } from './KidsArt';
import { KidsCertificate } from './KidsCertificate';
import { GROUP_STYLE, ageLabel } from './theme';
import { SPEECH_LANG, fill, getKidsStrings, type KidsStrings } from './strings';

interface KidsRecipeViewProps {
  id: string;
  lang: SupportedLanguage;
  onBack: () => void;
  onOpenArchiveRecipe: (id: string) => void;
}

type Stage = 'ready' | 'steps' | 'done';

const bigButton = 'inline-flex items-center justify-center gap-2 min-h-14 px-6 rounded-full border-2 text-lg font-extrabold shadow-[0_4px_0_rgba(74,52,38,0.25)] active:translate-y-0.5 active:shadow-none transition-transform disabled:opacity-40 disabled:pointer-events-none';
const smallButton = 'inline-flex items-center gap-1.5 min-h-11 px-4 rounded-full border-2 border-stone-300 bg-white text-sm font-bold text-stone-800 hover:bg-violet-50';

/** Reads text aloud with the device's own voices (free, works offline on most phones). */
function useSpeech(lang: SupportedLanguage) {
  const [speaking, setSpeaking] = useState(false);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const stop = () => {
    if (supported) window.speechSynthesis.cancel();
    setSpeaking(false);
  };
  const speak = (text: string) => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = SPEECH_LANG[lang] ?? lang;
    utterance.rate = 0.9;
    const voice = window.speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith(lang));
    if (voice) utterance.voice = voice;
    utterance.onend = utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };
  useEffect(() => () => { if (supported) window.speechSynthesis.cancel(); }, [supported]);
  return { supported, speaking, speak, stop };
}

function beep() {
  try {
    const context = new AudioContext();
    [0, 0.35, 0.7].forEach(start => {
      const tone = context.createOscillator();
      const gain = context.createGain();
      tone.frequency.value = 880;
      gain.gain.setValueAtTime(0.25, context.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + start + 0.3);
      tone.connect(gain).connect(context.destination);
      tone.start(context.currentTime + start);
      tone.stop(context.currentTime + start + 0.3);
    });
    navigator.vibrate?.([200, 100, 200]);
  } catch {
    // No sound on this device; the "Time's up!" message still shows.
  }
}

const StepTimer: React.FC<{ minutes: number; text: KidsStrings }> = ({ minutes, text }) => {
  const [left, setLeft] = useState(minutes * 60);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const tick = setInterval(() => setLeft(s => {
      if (s <= 1) {
        setRunning(false);
        beep();
        return 0;
      }
      return s - 1;
    }), 1000);
    return () => clearInterval(tick);
  }, [running]);
  const clock = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
  if (left === 0) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-lg font-extrabold kids-pop">
        ⏰ {text.timeUp}
        <button onClick={() => setLeft(minutes * 60)} className="p-1 rounded-full bg-white/25" aria-label={text.retry}><RotateCw className="w-4 h-4" /></button>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setRunning(r => !r)} className={`${smallButton} border-orange-300 bg-orange-50`}>
        {running ? <Pause className="w-4 h-4" /> : left < minutes * 60 ? <Play className="w-4 h-4" /> : <Timer className="w-4 h-4" />}
        {running ? text.pauseTimer : left < minutes * 60 ? clock : fill(text.startTimer, { m: minutes })}
      </button>
      {(running || left < minutes * 60) && <span className="text-2xl font-extrabold tabular-nums text-orange-700" dir="ltr">{clock}</span>}
    </div>
  );
};

const Confetti: React.FC = () => {
  const colors = ['#ff4d5e', '#ffc93c', '#4caf50', '#4a6fe3', '#9c6ade', '#ff9f1c'];
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-40 motion-reduce:hidden" aria-hidden="true">
      {Array.from({ length: 60 }, (_, i) => (
        <span
          key={i}
          className="absolute top-0 block w-2.5 h-4 rounded-sm"
          style={{
            left: `${(i * 37) % 100}%`,
            background: colors[i % colors.length],
            animation: `kids-fall ${2.2 + (i % 7) * 0.3}s ${(i % 10) * 0.12}s ease-in forwards`
          }}
        />
      ))}
    </div>
  );
};

export const KidsRecipeView: React.FC<KidsRecipeViewProps> = ({ id, lang, onBack, onOpenArchiveRecipe }) => {
  const text = getKidsStrings(lang);
  const isRtl = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const [recipe, setRecipe] = useState<LocalizedKidsRecipe | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [stage, setStage] = useState<Stage>('ready');
  const [step, setStep] = useState(0);
  const [have, setHave] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);
  const speech = useSpeech(lang);
  const touchStart = useRef<number | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    loadKidsRecipe(lang, id).then(
      r => !cancelled && setRecipe(r),
      () => !cancelled && setFailed(true)
    );
    return () => { cancelled = true; };
  }, [id, lang, attempt]);

  useEffect(() => {
    speech.stop();
    topRef.current?.scrollIntoView({ block: 'start' });
    // Only when the screen changes.
  }, [stage, step]);

  const total = recipe?.steps.length ?? 0;
  const go = (next: number) => {
    if (next < 0) return setStage('ready');
    if (next >= total) return setStage('done');
    setStep(next);
  };

  useEffect(() => {
    if (stage !== 'steps') return;
    const onKey = (event: KeyboardEvent) => {
      const forward = isRtl ? 'ArrowLeft' : 'ArrowRight';
      const backward = isRtl ? 'ArrowRight' : 'ArrowLeft';
      if (event.key === forward) go(step + 1);
      if (event.key === backward) go(step - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const share = async () => {
    const url = new URL(window.location.href);
    url.search = '';
    url.searchParams.set('lang', lang);
    url.searchParams.set('kids', '1');
    url.searchParams.set('kid', id);
    const data = { title: recipe?.title, url: url.toString() };
    if (navigator.share) await navigator.share(data).catch(() => undefined);
    else {
      await navigator.clipboard?.writeText(url.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  if (failed) {
    return (
      <div className="flex flex-col items-center gap-3 py-12 text-lg font-semibold text-stone-700">
        <p>{text.error}</p>
        <button onClick={() => setAttempt(n => n + 1)} className={smallButton}><RotateCw className="w-4 h-4" /> {text.retry}</button>
        <button onClick={onBack} className={smallButton}><BackIcon className="w-4 h-4" /> {text.back}</button>
      </div>
    );
  }
  if (!recipe) {
    return <div className="mx-auto max-w-3xl h-[70vh] rounded-3xl bg-white/70 border-4 border-white animate-pulse" aria-busy="true" aria-label={text.loading} />;
  }

  const style = GROUP_STYLE[recipe.group];
  const current = recipe.steps[step];

  return (
    <div ref={topRef} className="mx-auto max-w-3xl scroll-mt-4">
      <div className="flex items-center gap-2 mb-4">
        <button onClick={stage === 'steps' ? () => setStage('ready') : onBack} className={smallButton}>
          <BackIcon className="w-4 h-4" /> {stage === 'steps' ? recipe.title : text.back}
        </button>
        <button onClick={share} className={`${smallButton} ms-auto`}>
          <Share2 className="w-4 h-4" /> {copied ? text.copied : text.share}
        </button>
      </div>

      {stage === 'ready' && (
        <div className="space-y-6">
          <section className={`rounded-[2rem] border-4 ${style.card} p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-[0_6px_0_rgba(74,52,38,0.18)]`}>
            <span className="rounded-full bg-white p-3 shrink-0">
              <KidsArt id={recipe.cover} className="w-32 h-32 sm:w-40 sm:h-40" />
            </span>
            <div className="text-center sm:text-start">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-violet-900">{recipe.title}</h1>
              <p className="mt-1 text-lg font-semibold text-stone-700">{recipe.intro}</p>
              <p className="mt-3 flex flex-wrap justify-center sm:justify-start gap-1.5 text-sm font-bold">
                <span className="px-3 py-1 rounded-full bg-white">⏱ {fill(text.minutes, { n: recipe.minutes })}</span>
                <span className="px-3 py-1 rounded-full bg-white">🍽 {fill(text.servings, { n: recipe.servings })}</span>
                <span className="px-3 py-1 rounded-full bg-white">{fill(text.ages, { a: ageLabel(recipe.ages) })}</span>
                {recipe.noCook
                  ? <span className="px-3 py-1 rounded-full bg-emerald-500 text-white">❄️ {text.noCook}</span>
                  : recipe.steps.some(s => s.adult) && <span className="px-3 py-1 rounded-full bg-violet-500 text-white">🧑 {text.grownUpHelps}</span>}
              </p>
              {recipe.allergens.length > 0 && (
                <p className="mt-2 text-sm font-bold text-rose-800">⚠️ {text.contains}: {recipe.allergens.map(a => text.allergens[a]).join(isRtl ? '، ' : ', ')}</p>
              )}
              {recipe.archiveRecipeId && (
                <button onClick={() => onOpenArchiveRecipe(recipe.archiveRecipeId!)} className="mt-2 text-sm font-bold text-amber-800 underline underline-offset-4">
                  📖 {text.archiveVersion}
                </button>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-violet-900 mb-3">{text.getReady}</h2>
            <ul className="grid grid-cols-3 gap-2 sm:gap-4">
              {([['wash-hands', text.readyWash], ['apron', text.readyApron], ['grown-up', text.readyGrownUp]] as const).map(([art, label]) => (
                <li key={art} className="rounded-3xl bg-white border-4 border-sky-200 p-2 sm:p-3 text-center">
                  <KidsArt id={art} className="w-full max-w-28 mx-auto aspect-square" />
                  <span className="block text-sm sm:text-base font-bold leading-tight">{label}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-violet-900">{text.whatYouNeed}</h2>
            <p className="mb-3 text-sm font-semibold text-stone-600">{text.tapToTick}</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {recipe.ingredients.map((ingredient, i) => {
                const got = have.has(i);
                return (
                  <li key={i}>
                    <button
                      onClick={() => setHave(set => {
                        const next = new Set(set);
                        if (next.has(i)) next.delete(i); else next.add(i);
                        return next;
                      })}
                      aria-pressed={got}
                      className={`relative w-full h-full flex items-center gap-2 rounded-2xl border-4 p-2 text-start transition-colors ${got ? 'bg-emerald-100 border-emerald-400' : 'bg-white border-amber-200 hover:border-amber-300'}`}
                    >
                      <KidsArt id={ingredient.art} className="w-14 h-14 sm:w-16 sm:h-16 shrink-0" />
                      <span className="text-sm sm:text-base font-bold leading-snug">{ingredient.text}</span>
                      {got && <span className="absolute -top-2 -end-2 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center kids-pop"><Check className="w-4 h-4" strokeWidth={4} /></span>}
                    </button>
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-5 mb-2 text-xl font-extrabold text-violet-900">{text.tools}</h3>
            <ul className="flex flex-wrap gap-2">
              {recipe.tools.map(tool => (
                <li key={tool} className="flex items-center gap-1.5 rounded-2xl bg-white border-4 border-sky-200 pe-3 p-1">
                  <KidsArt id={tool} className="w-10 h-10 sm:w-12 sm:h-12" />
                  <span className="text-sm font-bold">{text.toolNames[tool] ?? tool}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex justify-center pb-4">
            <button onClick={() => { setStep(0); setStage('steps'); }} className={`${bigButton} bg-orange-500 border-orange-600 text-white text-2xl px-10`}>
              {text.letsCook} <NextIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {stage === 'steps' && current && (
        <div
          onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
          onTouchEnd={e => {
            if (touchStart.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStart.current;
            touchStart.current = null;
            if (Math.abs(dx) < 60) return;
            go(step + ((dx < 0) !== isRtl ? 1 : -1));
          }}
        >
          <ol className="flex gap-1.5 mb-3" aria-label={fill(text.stepOf, { n: step + 1, t: total })}>
            {recipe.steps.map((_, i) => (
              <li key={i} className={`h-3 flex-1 rounded-full ${i < step ? 'bg-emerald-400' : i === step ? 'bg-orange-500' : 'bg-white border-2 border-stone-200'}`} />
            ))}
          </ol>

          <section key={step} className="kids-pop rounded-[2rem] bg-white border-4 border-amber-200 p-3 sm:p-5 shadow-[0_6px_0_rgba(74,52,38,0.18)]">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 shrink-0 rounded-full bg-orange-500 text-white text-2xl font-extrabold flex items-center justify-center">{step + 1}</span>
              <span className="text-base font-bold text-stone-500">{fill(text.stepOf, { n: step + 1, t: total })}</span>
              {speech.supported && (
                <button onClick={() => (speech.speaking ? speech.stop() : speech.speak(current.text))} className={`${smallButton} ms-auto`}>
                  {speech.speaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{speech.speaking ? text.stopReading : text.readAloud}</span>
                </button>
              )}
            </div>

            <div className="my-3 rounded-3xl bg-amber-50">
              <StepPicture {...current} className="w-full max-h-[38vh] [@media(max-height:500px)]:max-h-[30vh] mx-auto" />
            </div>

            {current.adult && (
              <p className="mb-3 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-violet-100 border-2 border-violet-300 text-violet-900 text-base font-extrabold">
                <KidsArt id="grown-up" className="w-8 h-8 shrink-0" /> {text.adult[current.adult]}
              </p>
            )}
            <p className="text-2xl sm:text-3xl font-extrabold leading-snug text-stone-900">{current.text}</p>
            {current.timer && <div className="mt-4"><StepTimer key={step} minutes={current.timer} text={text} /></div>}
          </section>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button onClick={() => go(step - 1)} className={`${bigButton} bg-white border-stone-300 text-stone-800`}>
              <BackIcon className="w-5 h-5" /> <span className="hidden sm:inline">{text.previous}</span>
            </button>
            <button onClick={() => go(step + 1)} className={`${bigButton} flex-1 sm:flex-none ${step === total - 1 ? 'bg-emerald-500 border-emerald-600' : 'bg-orange-500 border-orange-600'} text-white`}>
              {step === total - 1 ? `🎉 ${text.finish}` : <>{text.next} <NextIcon className="w-5 h-5" /></>}
            </button>
          </div>
        </div>
      )}

      {stage === 'done' && (
        <div className="space-y-6 text-center">
          <Confetti />
          <section className="kids-pop rounded-[2rem] bg-white border-4 border-emerald-300 p-5 sm:p-8">
            <KidsArt id={recipe.cover} className="w-40 h-40 mx-auto" />
            <h1 className="text-4xl font-extrabold text-emerald-700">🎉 {text.madeIt}</h1>
            <p className="mt-1 text-lg font-semibold text-stone-700">{text.madeItSub}</p>
          </section>
          {recipe.tip && (
            <section className="rounded-3xl bg-sky-100 border-4 border-sky-300 p-4 text-start">
              <h2 className="text-xl font-extrabold text-sky-900">💡 {text.tipTitle}</h2>
              <p className="text-lg font-semibold">{recipe.tip}</p>
            </section>
          )}
          <KidsCertificate recipe={recipe} lang={lang} text={text} />
          <div className="flex flex-wrap justify-center gap-3 pb-6">
            <button onClick={() => { setStep(0); setStage('steps'); }} className={`${bigButton} bg-orange-500 border-orange-600 text-white`}>
              <RotateCw className="w-5 h-5" /> {text.cookAgain}
            </button>
            <button onClick={onBack} className={`${bigButton} bg-white border-stone-300 text-stone-800`}>
              <BackIcon className="w-5 h-5" /> {text.back}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
