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

// Where each printed page sits in the four scanned PDFs on the Internet Archive.
const VOLUMES = [
  { label: 'الجزء الأول', file: 'اصول الطهى لنظيرة نقولا.pdf', lastPage: 101, offset: 11 },
  { label: 'الجزء الثاني', file: 'اصول الطهى الجزء الثانى.pdf', lastPage: 246, offset: -101 },
  { label: 'الجزء الثالث', file: 'اصول الطهى .. نظيرة نقولا وبهية عثمان .. الجزء الثالث.pdf', lastPage: 556, offset: -246 },
  { label: 'الجزء الرابع', file: 'اصول الطهى .. نظيرة نقولا وبهية عثمان .. الجزء الرابع.pdf', lastPage: Infinity, offset: -552 }
];

function bookSource(page: number): NonNullable<Recipe['source']> {
  const volume = VOLUMES.find(v => page <= v.lastPage)!;
  // PDF viewers number pages from 1.
  const pdfPage = page + volume.offset + 1;
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
    // Arabic only for now; translations are added later.
    titleEn: '',
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
