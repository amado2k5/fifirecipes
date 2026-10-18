import React from 'react';
import { SupportedLanguage } from '../types';
import { getUIText } from '../data/translations';
import HEALTH from '../data/recipeHealth.json';

type Health = { a: string[]; s: 'c' | 'n' | 'l' | 'u'; d: 'f' | 'b' | 'n' | 'u'; g?: 'f' | 'c' | 'l' | 'u'; l?: 'f' | 'c' | 'l' | 'u' };
const DATA = HEALTH as unknown as Record<string, Health>;

const ALLERGEN_KEY: Record<string, string> = {
  milk: 'allergenMilk', eggs: 'allergenEggs', cereals_gluten: 'allergenGluten', nuts: 'allergenNuts', peanuts: 'allergenPeanuts',
  sesame: 'allergenSesame', soybeans: 'allergenSoy', fish: 'allergenFish', crustaceans: 'allergenCrustaceans',
  molluscs: 'allergenMolluscs', celery: 'allergenCelery', mustard: 'allergenMustard', lupin: 'allergenLupin', sulphites: 'allergenSulphites'
};
// Gluten and lactose: free / contains / check labels (low or possible). Not assessed shows nothing.
const GLUTEN_KEY = { f: 'glutenFree', c: 'glutenContains', l: 'glutenCheck' } as const;
const LACTOSE_KEY = { f: 'lactoseFree', c: 'lactoseContains', l: 'lactoseCheck' } as const;
const GL_TONE = { f: 'good', c: 'warn', l: 'plain' } as const;
const DIABETIC_KEY = { f: 'diabeticFriendly', b: 'diabeticBorderline', n: 'diabeticNot' } as const;

type Tone = 'good' | 'warn' | 'bad' | 'plain';
const LIGHT: Record<Tone, string> = {
  good: 'bg-emerald-50 text-emerald-800 border-emerald-200', warn: 'bg-amber-50 text-amber-900 border-amber-200',
  bad: 'bg-rose-50 text-rose-800 border-rose-200', plain: 'bg-stone-50 text-stone-600 border-stone-200'
};
const DARK: Record<Tone, string> = {
  good: 'bg-emerald-400/15 text-emerald-100 border-emerald-300/40', warn: 'bg-amber-400/15 text-amber-100 border-amber-300/40',
  bad: 'bg-rose-400/20 text-rose-100 border-rose-300/40', plain: 'bg-white/10 text-white border-white/25'
};

/** Allergens found in a recipe, and a diabetic-friendliness estimate. Screens worked out by scripts/diet/allergens.py: never medical advice or a guarantee. */
export const HealthTags: React.FC<{ recipeId: string; lang: SupportedLanguage; variant?: 'card' | 'detail' }> = ({ recipeId, lang, variant = 'card' }) => {
  const h = DATA[recipeId];
  if (!h) return null;
  const detail = variant === 'detail';
  const palette = detail ? DARK : LIGHT;
  const names = h.a.map(code => getUIText(lang, ALLERGEN_KEY[code] ?? '')).filter(Boolean);
  // Every allergen is named: a bare "+2" would hide which allergens they are.
  const shown = names;

  const chips: { key: string; tone: Tone; text: string; title: string }[] = [];
  if (h.s === 'c' && names.length) {
    chips.push({ key: 'allergen', tone: 'warn', text: `${getUIText(lang, 'allergenContains')}: ${shown.join(' · ')}`, title: names.join(', ') });
  } else if (h.s === 'n') {
    chips.push({ key: 'allergen', tone: 'good', text: getUIText(lang, 'allergenNone'), title: getUIText(lang, 'allergenNote') });
  } else if (h.s === 'l') {
    chips.push({ key: 'allergen', tone: 'plain', text: getUIText(lang, 'allergenCheck'), title: getUIText(lang, 'allergenNote') });
  } else if (detail && h.s === 'u') {
    chips.push({ key: 'allergen', tone: 'plain', text: getUIText(lang, 'allergenUnknown'), title: getUIText(lang, 'allergenNote') });
  }
  // the recipe header already lists every allergen, so "Contains: Gluten" there makes a separate "Contains gluten" chip a duplicate
  if (h.g && h.g !== 'u' && !(detail && h.g === 'c' && h.a.includes('cereals_gluten'))) {
    chips.push({ key: 'gluten', tone: GL_TONE[h.g], text: getUIText(lang, GLUTEN_KEY[h.g]), title: getUIText(lang, 'glutenLactoseNote') });
  }
  if (h.l && h.l !== 'u') {
    chips.push({ key: 'lactose', tone: GL_TONE[h.l], text: getUIText(lang, LACTOSE_KEY[h.l]), title: getUIText(lang, 'glutenLactoseNote') });
  }
  if (h.d !== 'u') {
    chips.push({ key: 'diabetic', tone: h.d === 'f' ? 'good' : h.d === 'b' ? 'warn' : 'bad', text: getUIText(lang, DIABETIC_KEY[h.d]), title: getUIText(lang, 'diabeticNote') });
  }
  if (!chips.length) return null;

  return (
    <div className={detail ? 'pt-2' : 'mt-2'} data-testid={detail ? 'health-tags-detail' : 'health-tags'}>
      <div className="flex flex-wrap items-center gap-1" role="list">
        {chips.map(c => (
          <span key={c.key} role="listitem" title={c.title}
            className={`inline-flex items-center rounded-full border px-2 py-0.5 ${detail ? 'text-[11px] font-semibold' : 'text-[10px] font-medium leading-tight'} ${palette[c.tone]}`}>
            {c.text}
          </span>
        ))}
      </div>
      {detail && (
        <p className="mt-1.5 text-[10px] leading-snug text-stone-400 max-w-xl">{getUIText(lang, 'allergenNote')} {getUIText(lang, 'diabeticNote')}</p>
      )}
    </div>
  );
};
