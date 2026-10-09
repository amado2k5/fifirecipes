// Display-time grammar and style fixes for recipe measurements. The recipe data
// comes from several sources and mixes "min"/"mins"/"hours", "2 cup" and
// "12 دقائق"; fixing it where it is shown keeps every collection consistent
// without rewriting thousands of data fields.

const ARABIC_INDIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

function leadingNumber(text: string): number {
  const ascii = text.replace(/[٠-٩]/g, d => String(ARABIC_INDIC_DIGITS.indexOf(d)));
  return Number(ascii);
}

// Arabic number agreement for time units: 3-10 take the plural (دقائق, ساعات,
// أيام), 11 and up take the singular (دقيقة, ساعة, يوم). 1 and 2 are left as written.
const ARABIC_UNITS: [singular: string, plural: string][] = [
  ['دقيقة', 'دقائق'],
  ['ساعة', 'ساعات'],
  ['يوم', 'أيام']
];

export function normalizeArabicMeasurement(value: string): string {
  let result = value;
  for (const [singular, plural] of ARABIC_UNITS) {
    result = result.replace(
      new RegExp(`([0-9٠-٩]+)(\\s*)(${singular}|${plural})(?![\\u0600-\\u06FF])`, 'g'),
      (match, digits: string, space: string) => {
        const n = leadingNumber(digits);
        if (n >= 3 && n <= 10) return `${digits}${space}${plural}`;
        if (n >= 11) return `${digits}${space}${singular}`;
        return match;
      }
    );
  }
  return result;
}

// English: one abbreviation style for time ("min", "hr"), and plurals for
// countable units after a number other than one.
const ENGLISH_COUNT_UNITS: Record<string, string> = {
  cup: 'cups',
  serving: 'servings',
  piece: 'pieces',
  pie: 'pies',
  sandwich: 'sandwiches',
  patty: 'patties',
  glass: 'glasses',
  ball: 'balls',
  roll: 'rolls',
  disc: 'discs',
  loaf: 'loaves',
  tray: 'trays',
  tablespoon: 'tablespoons',
  teaspoon: 'teaspoons',
  portion: 'portions',
  slice: 'slices',
  bowl: 'bowls'
};

export function normalizeEnglishMeasurement(value: string, kind: 'time' | 'servings' | 'amount'): string {
  let result = value;
  if (kind === 'time') {
    result = result
      .replace(/\b(min|mins|minute|minutes)\b/gi, 'min')
      .replace(/\b(hr|hrs|hour|hours)\b/gi, 'hr');
  }
  // "2 cup" -> "2 cups"; "1 cup" stays; ranges and halves count as plural.
  result = result.replace(
    new RegExp(`(\\d+(?:[.,]\\d+)?|[½¼¾⅓⅔])(\\s*(?:[-–]\\s*\\d+(?:[.,]\\d+)?)?\\s*)(${Object.keys(ENGLISH_COUNT_UNITS).join('|')})\\b(?!s)`, 'gi'),
    (match, amount: string, between: string, unit: string) => {
      const isOne = Number(amount.replace(',', '.')) === 1 && !between.trim();
      const plural = ENGLISH_COUNT_UNITS[unit.toLowerCase()];
      return isOne || !plural ? match : `${amount}${between}${plural}`;
    }
  );
  return result;
}
