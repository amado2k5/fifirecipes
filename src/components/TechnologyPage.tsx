import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, GitPullRequest, Scale, ShieldCheck, Bug } from 'lucide-react';
import { SupportedLanguage } from '../types';

interface TechnologyPageProps {
  lang: SupportedLanguage;
  recipeCount?: number;
  onBack: () => void;
}

interface TechItem { title: string; text: string }
interface TechSection { id: string; heading: string; intro?: string; items: TechItem[] }
interface TechContent {
  footerLink: string;
  back: string;
  title: string;
  intro: string;
  stats: { recipes: string; languages: string; platforms: string; accounts: string };
  sections: TechSection[];
  openSource: {
    heading: string;
    text: string;
    points: string[];
    buttons: { code: string; contribute: string; license: string; issues: string; privacy: string };
    reposHeading: string;
  };
  cookwala: { heading: string; text: string; button: string };
}

// One JSON file per language, fetched only for the language being read.
const loaders = import.meta.glob<{ default: TechContent }>('../data/technology/*.json');

export async function loadTechnologyContent(lang: SupportedLanguage): Promise<TechContent> {
  const load = loaders[`../data/technology/${lang}.json`] ?? loaders['../data/technology/en.json'];
  return (await load()).default;
}

const GITHUB = 'https://github.com/amado2k5';
const REPOS: { name: string; label: string }[] = [
  { name: 'fifirecipes', label: 'fifi.cooking (website, data, worker)' },
  { name: 'fifirecipes-android', label: 'Android' },
  { name: 'fifirecipes-ipadosapp', label: 'iPhone and iPad' },
  { name: 'fifirecipes-tvos', label: 'Apple TV' },
  { name: 'fifirecipes-amazonfire', label: 'Amazon Fire TV' },
  { name: 'fifirecipe-samsungsmarttv', label: 'Samsung Smart TV' },
  { name: 'cookwala', label: 'Cookwala' },
];
// Cookwala's site exists in these languages; every other language reads the English pages.
const COOKWALA_LANGS = new Set(['ar', 'de', 'es', 'fr', 'pt']);
const RTL_LANGS = new Set(['ar', 'fa', 'ur', 'ps', 'he']);
const LANGUAGE_COUNT = 29;
const PLATFORM_COUNT = 6;

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ lang, recipeCount, onBack }) => {
  const isRtl = RTL_LANGS.has(lang);
  const [content, setContent] = useState<TechContent | null>(null);

  useEffect(() => {
    let current = true;
    loadTechnologyContent(lang).then(c => { if (current) setContent(c); });
    return () => { current = false; };
  }, [lang]);

  if (!content) {
    return <div className="py-16 text-center text-xs text-stone-400 animate-pulse">…</div>;
  }

  const cookwalaUrl = COOKWALA_LANGS.has(lang) ? `https://cookwala.ai/${lang}/` : 'https://cookwala.ai/';
  const stats: [string, string][] = [
    [recipeCount ? recipeCount.toLocaleString(lang) : '2,000+', content.stats.recipes],
    [String(LANGUAGE_COUNT), content.stats.languages],
    [String(PLATFORM_COUNT), content.stats.platforms],
    ['0', content.stats.accounts],
  ];
  const button = 'inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors';

  return (
    <article className="max-w-5xl mx-auto px-0 sm:px-4 py-4 sm:py-8 space-y-10">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-amber-800 transition-colors"
      >
        {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
        <span>{content.back}</span>
      </button>

      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">{content.title}</h1>
        <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">{content.intro}</p>
      </header>

      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-2xl bg-amber-50 border border-amber-100 px-4 py-4 text-center">
            <dt className="text-2xl sm:text-3xl font-extrabold text-amber-800" dir="ltr">{value}</dt>
            <dd className="mt-1 text-xs sm:text-sm text-stone-600">{label}</dd>
          </div>
        ))}
      </dl>

      {content.sections.map(section => (
        <section key={section.id} id={section.id} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">{section.heading}</h2>
          {section.intro && <p className="text-stone-600 leading-relaxed max-w-3xl">{section.intro}</p>}
          <ul className="grid gap-3 sm:grid-cols-2">
            {section.items.map(item => (
              <li key={item.title} className="rounded-2xl bg-white border border-stone-200 p-4 sm:p-5">
                <h3 className="font-bold text-stone-900">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section id="open-source" className="rounded-3xl bg-stone-900 text-stone-100 p-6 sm:p-10 space-y-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{content.openSource.heading}</h2>
        <p className="leading-relaxed text-stone-300 max-w-3xl">{content.openSource.text}</p>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm text-stone-300">
          {content.openSource.points.map(point => (
            <li key={point} className="flex gap-2"><span aria-hidden="true" className="text-amber-400">✓</span><span>{point}</span></li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={`${GITHUB}/fifirecipes`} target="_blank" rel="noopener noreferrer" className={`${button} bg-amber-500 text-stone-900 hover:bg-amber-400`}>
            <ExternalLink className="w-4 h-4" />{content.openSource.buttons.code}
          </a>
          <a href={`${GITHUB}/fifirecipes/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer" className={`${button} bg-stone-700 text-white hover:bg-stone-600`}>
            <GitPullRequest className="w-4 h-4" />{content.openSource.buttons.contribute}
          </a>
          <a href={`${GITHUB}/fifirecipes/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className={`${button} bg-stone-700 text-white hover:bg-stone-600`}>
            <Scale className="w-4 h-4" />{content.openSource.buttons.license}
          </a>
          <a href={`${GITHUB}/fifirecipes/issues`} target="_blank" rel="noopener noreferrer" className={`${button} bg-stone-700 text-white hover:bg-stone-600`}>
            <Bug className="w-4 h-4" />{content.openSource.buttons.issues}
          </a>
          <a href={`${import.meta.env.BASE_URL}privacy.html`} className={`${button} bg-stone-700 text-white hover:bg-stone-600`}>
            <ShieldCheck className="w-4 h-4" />{content.openSource.buttons.privacy}
          </a>
        </div>
        <div className="pt-4">
          <h3 className="text-sm font-bold text-white">{content.openSource.reposHeading}</h3>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2 text-sm" dir="ltr">
            {REPOS.map(repo => (
              <li key={repo.name}>
                <a href={`${GITHUB}/${repo.name}`} target="_blank" rel="noopener noreferrer" className="text-amber-300 underline hover:text-amber-200">
                  {repo.name}
                </a>
                <span className="text-stone-400"> — {repo.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cookwala" className="rounded-3xl bg-amber-50 border border-amber-200 p-6 sm:p-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">{content.cookwala.heading}</h2>
        <p className="leading-relaxed text-stone-700 max-w-3xl">{content.cookwala.text}</p>
        <a href={cookwalaUrl} target="_blank" rel="noopener" className={`${button} bg-amber-600 text-white hover:bg-amber-700`}>
          <ExternalLink className="w-4 h-4" />{content.cookwala.button}
        </a>
      </section>
    </article>
  );
};
