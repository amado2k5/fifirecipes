import React from 'react';
import type { SupportedLanguage } from '../types';
import { KIDS_TOGGLE_LABELS, loadKidsApp } from './languages';

interface KidsToggleProps {
  lang: SupportedLanguage;
  kidsMode: boolean;
  onChange: (kidsMode: boolean) => void;
}

/**
 * The switch between the normal site and Cooking with Kids mode. It sits in
 * the same place in both headers, so one tap always goes back.
 */
export const KidsToggle: React.FC<KidsToggleProps> = ({ lang, kidsMode, onChange }) => {
  const labels = KIDS_TOGGLE_LABELS[lang];
  if (!labels) return null;
  const side = (active: boolean) =>
    `inline-flex items-center gap-1 px-3 min-h-9 rounded-full whitespace-nowrap transition-colors ${
      active ? 'bg-white text-stone-900 shadow-sm' : 'text-white/95 hover:bg-white/20'
    }`;
  return (
    <div
      role="radiogroup"
      className="inline-flex items-center p-0.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 shadow-sm"
      // Fetch kids mode's code as soon as the visitor shows interest.
      onPointerEnter={() => void loadKidsApp()}
      onFocus={() => void loadKidsApp()}
    >
      <button role="radio" aria-checked={!kidsMode} onClick={() => onChange(false)} className={side(!kidsMode)}>
        <span aria-hidden="true">🍲</span>
        {labels.grownUps}
      </button>
      <button role="radio" aria-checked={kidsMode} onClick={() => onChange(true)} className={side(kidsMode)}>
        <span aria-hidden="true">🧑‍🍳</span>
        {labels.kids}
      </button>
    </div>
  );
};
