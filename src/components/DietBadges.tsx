import React from 'react';
import { SupportedLanguage } from '../types';
import { getUIText } from '../data/translations';
import CLAIMS from '../data/recipeDietaryCodes.json';

const ORDER = ['halal', 'kosher', 'vegetarian', 'vegan'] as const;
const KEY: Record<(typeof ORDER)[number], string> = {
  halal: 'dietHalal', kosher: 'dietKosher', vegetarian: 'dietVegetarian', vegan: 'dietVegan'
};

/** Dietary claims worked out from a recipe's ingredients and steps (scripts/diet). Never a certification. */
export const DietBadges: React.FC<{ recipeId: string; lang: SupportedLanguage }> = ({ recipeId, lang }) => {
  const claims = (CLAIMS as Record<string, string[]>)[recipeId];
  if (!claims || claims.length === 0) return null;
  const note = getUIText(lang, 'dietNote');
  return (
    <div className="pt-2" data-testid="diet-badges">
      <div className="flex flex-wrap items-center gap-1.5" role="list" aria-label={getUIText(lang, 'dietTitle')}>
        {ORDER.filter(c => claims.includes(c)).map(c => (
          <span key={c} role="listitem" title={note}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {getUIText(lang, KEY[c])}
          </span>
        ))}
      </div>
      <p className="mt-1.5 text-[10px] leading-snug text-stone-400 max-w-xl">{note}</p>
    </div>
  );
};
