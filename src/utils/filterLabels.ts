// The category and cooking-method filters are built from the recipe data, where
// the same idea is spelled several ways ("cooking" / "Cooking", "Oven Baking" /
// "Baking"). Options are grouped by a normalised key so each idea appears once.

// English near-duplicates folded into one option. Keys and values are lower case.
const SYNONYMS: Record<string, string> = {
  'oven baking': 'baking',
  'slow simmering (tasbeek)': 'slow simmering',
  'pan-frying & crisping': 'pan-frying',
  'boiling & broth': 'boiling',
  'charcoal & oven grilling': 'grilling',
  'preserving': 'preserving & freezing',
  'chilled / cold preparation': 'no cook',
  'assembly': 'no cook',
  'traditional cooking': 'cooking'
};

export function filterKey(label: string): string {
  const normalised = label.trim().replace(/\s+/g, ' ').toLocaleLowerCase();
  return SYNONYMS[normalised] ?? normalised;
}

export interface FilterOption {
  key: string;
  label: string;
}

/** One option per filterKey, labelled with the properly capitalised spelling when the data has one. */
export function buildFilterOptions(labels: string[]): FilterOption[] {
  const best = new Map<string, { label: string; score: number }>();
  for (const raw of labels) {
    const label = raw.trim();
    if (!label) continue;
    const key = filterKey(label);
    const startsUpper = label.charAt(0) !== label.charAt(0).toLocaleLowerCase();
    // Prefer the canonical wording, then a capitalised spelling.
    const score = (label.toLocaleLowerCase() === key ? 2 : 0) + (startsUpper ? 1 : 0);
    const current = best.get(key);
    if (!current || score > current.score) best.set(key, { label, score });
  }
  return Array.from(best, ([key, { label }]) => ({ key, label: label.charAt(0).toLocaleUpperCase() + label.slice(1) }));
}
