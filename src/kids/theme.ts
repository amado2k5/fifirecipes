import type { KidsAges, KidsGroup } from './types';

export const GROUP_STYLE: Record<KidsGroup, { emoji: string; card: string; chip: string }> = {
  breakfast: { emoji: '🥞', card: 'bg-amber-100 border-amber-300', chip: 'bg-amber-400 border-amber-500' },
  snack: { emoji: '🍎', card: 'bg-lime-100 border-lime-300', chip: 'bg-lime-400 border-lime-500' },
  savoury: { emoji: '🍕', card: 'bg-rose-100 border-rose-300', chip: 'bg-rose-400 border-rose-500' },
  sweet: { emoji: '🧁', card: 'bg-pink-100 border-pink-300', chip: 'bg-pink-400 border-pink-500' },
  drink: { emoji: '🥤', card: 'bg-sky-100 border-sky-300', chip: 'bg-sky-400 border-sky-500' }
};

export const GROUPS: KidsGroup[] = ['breakfast', 'snack', 'savoury', 'sweet', 'drink'];
export const AGES: KidsAges[] = ['3-5', '6-8', '9+'];
// Isolated left-to-right so "3–5" does not read "5–3" in Arabic.
export const ageLabel = (ages: KidsAges) => `\u2066${ages.replace('-', '–')}\u2069`;
