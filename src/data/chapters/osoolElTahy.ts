import { MasterIngredient, Recipe, UniqueInstruction } from '../../types';
import soups from '../osoolElTahy/soups.json';
import meats from '../osoolElTahy/meats.json';
import poultry from '../osoolElTahy/poultry.json';
import fish from '../osoolElTahy/fish.json';
import vegetables from '../osoolElTahy/vegetables.json';
import legumesAndGrains from '../osoolElTahy/legumesAndGrains.json';
import stuffed from '../osoolElTahy/stuffed.json';
import riceAndPasta from '../osoolElTahy/riceAndPasta.json';
import eggs from '../osoolElTahy/eggs.json';
import various from '../osoolElTahy/various.json';
import titlesEn from '../osoolElTahy/titlesEn.json';

// Recipes from the classic Egyptian cookbook «أصول الطهي النظري والعملي» by
// Nazira Nicola and Bahia Osman, limited to dishes the site did not already
// have. Each one was rewritten in our own words from the book (not copied),
// and credits the volume and page it comes from, linking to the scan on the
// Internet Archive. The JSON files use a compact authoring format that is
// expanded into full Recipe objects below.

interface BookRecipe {
  id: string;
  /** Page number as printed in the book (the four volumes share one numbering). */
  page: number;
  title: string;
  category: string;
  method: string;
  prep?: string;
  cook?: string;
  servings?: string;
  difficulty?: Recipe['difficulty'];
  /** [name, amount, ingredient category] */
  ingredients: [string, string, MasterIngredient['category']][];
  /**
   * [text, phase]; phase defaults to "cook". Variations the book gives as a
   * short change to the main recipe are steps with the "alternative" phase.
   */
  steps: (string | [string, UniqueInstruction['phase']])[];
  notes?: string;
}

const ARCHIVE_ITEM = 'https://archive.org/download/20240330_20240330_1122/';

// Where each printed page sits in the scans. The book is split into four PDFs
// on the Internet Archive; joined, they form the full 913-page scan (the title
// page of parts 2-4 aside). A few printed pages are duplicated or missing in
// the scan, so the distance between the printed number and the scan position
// shifts along the book; these are the measured distances.
const SCAN_OFFSETS: [firstPage: number, offset: number][] = [
  [1, 11],
  [177, 12],
  [205, 13],
  [270, 12],
  [287, 13],
  [445, 14],
  [652, 14],
  [700, 15],
  [760, 16],
  [850, 17]
];

// Each part's first page in the joined scan (0-based), and how its own page
// numbering relates to it (parts 2-4 start with a title page of their own).
const VOLUMES = [
  { label: 'الجزء الأول', file: 'اصول الطهى لنظيرة نقولا.pdf', firstScanPage: 0, ownTitlePage: 0 },
  { label: 'الجزء الثاني', file: 'اصول الطهى الجزء الثانى.pdf', firstScanPage: 113, ownTitlePage: 1 },
  { label: 'الجزء الثالث', file: 'اصول الطهى .. نظيرة نقولا وبهية عثمان .. الجزء الثالث.pdf', firstScanPage: 260, ownTitlePage: 1 },
  { label: 'الجزء الرابع', file: 'اصول الطهى .. نظيرة نقولا وبهية عثمان .. الجزء الرابع.pdf', firstScanPage: 570, ownTitlePage: 1 }
];

function bookSource(page: number): NonNullable<Recipe['source']> {
  const offset = SCAN_OFFSETS.filter(([firstPage]) => page >= firstPage).pop()![1];
  const scanPage = page + offset;
  const volume = [...VOLUMES].reverse().find(v => scanPage >= v.firstScanPage)!;
  // PDF viewers number pages from 1.
  const pdfPage = scanPage - volume.firstScanPage + volume.ownTitlePage + 1;
  return {
    name: 'أصول الطهي النظري والعملي — نظيرة نقولا وبهية عثمان',
    url: `${ARCHIVE_ITEM}${encodeURIComponent(volume.file)}#page=${pdfPage}`,
    collection: 'osool',
    citation: `${volume.label}، صفحة ${page}`
  };
}

function toRecipe(entry: BookRecipe): Recipe {
  const instructions: UniqueInstruction[] = entry.steps.map((step, index) => {
    const [text, phase] = typeof step === 'string' ? [step, 'cook' as const] : step;
    return {
      stepNumber: index + 1,
      text,
      phase,
      sourceDocs: [],
      ...(phase === 'alternative' ? { isAlternative: true, importance: 'variation' as const } : { importance: 'core' as const })
    };
  });
  return {
    id: entry.id,
    title: entry.title,
    titleEn: (titlesEn as Record<string, string>)[entry.id] ?? '',
    chapter: 'الباب الثامن: من كتاب أصول الطهي',
    chapterNumber: 8,
    category: entry.category,
    cookingMethod: entry.method,
    prepTime: entry.prep,
    cookTime: entry.cook,
    servings: entry.servings,
    difficulty: entry.difficulty,
    masterIngredients: entry.ingredients.map(([name, standardAmount, category], index) => ({
      id: `${entry.id}-i${index + 1}`,
      name,
      standardAmount,
      category,
      sourceVariations: {},
      isMerged: false,
      originalOccurrencesCount: 1
    })),
    uniqueInstructions: instructions,
    culturalNotes: entry.notes,
    source: bookSource(entry.page),
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: instructions.length,
      totalMasterIngredients: entry.ingredients.length,
      overlapPercentage: 0,
      documentsPresent: [],
      reconciliationSummary: 'وصفة من كتاب «أصول الطهي» لنظيرة نقولا وبهية عثمان، أعيدت صياغتها مع ذكر المصدر.'
    },
    rawDocVersions: {}
  };
}

export const osoolElTahyRecipes: Recipe[] = ([
  soups,
  meats,
  poultry,
  fish,
  vegetables,
  legumesAndGrains,
  stuffed,
  riceAndPasta,
  eggs,
  various
] as unknown as BookRecipe[][]).flat().map(toRecipe);
