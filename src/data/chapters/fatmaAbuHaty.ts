import { MasterIngredient, Recipe, UniqueInstruction } from '../../types';
import meats from '../fatmaAbuHaty/meats.json';
import fish from '../fatmaAbuHaty/fish.json';
import vegetables from '../fatmaAbuHaty/vegetables.json';
import legumes from '../fatmaAbuHaty/legumes.json';
import stuffed from '../fatmaAbuHaty/stuffed.json';
import starches from '../fatmaAbuHaty/starches.json';
import soups from '../fatmaAbuHaty/soups.json';
import salads from '../fatmaAbuHaty/salads.json';
import pastries from '../fatmaAbuHaty/pastries.json';
import savory from '../fatmaAbuHaty/savory.json';
import quick from '../fatmaAbuHaty/quick.json';
import easternDesserts from '../fatmaAbuHaty/easternDesserts.json';
import westernDesserts from '../fatmaAbuHaty/westernDesserts.json';
import lightDesserts from '../fatmaAbuHaty/lightDesserts.json';
import sweetPies from '../fatmaAbuHaty/sweetPies.json';
import iceCream from '../fatmaAbuHaty/iceCream.json';
import beverages from '../fatmaAbuHaty/beverages.json';
import titlesEn from '../fatmaAbuHaty/titlesEn.json';

// Recipes from Chef Fatma Abu Haty's YouTube channel, drafted by the local
// pipeline (transcripts/channel-fatma-abu-haty) from each video's description,
// on-screen text and Whisper transcript, then reviewed for structure by
// scripts/channel-recipes/import-drafts.ts. Each recipe credits the video it
// was written from. Until titlesEn.json is filled they are Arabic-only.
// The JSON files use a compact authoring format expanded below.

interface ChannelRecipe {
  id: string;
  title: string;
  category: string;
  method: string;
  prep?: string;
  cook?: string;
  servings?: string;
  difficulty?: Recipe['difficulty'];
  video: string;
  /** Second in the video where the cooking starts; deep-links the source. */
  start: number;
  videoTitle: string;
  label: 'new' | 'variant';
  /** Closest existing site recipe for variants (kept for provenance). */
  siteMatch?: string;
  otherVideos?: string[];
  ingredients: [string, string, MasterIngredient['category']][];
  steps: (string | [string, UniqueInstruction['phase']])[];
  notes?: string;
}

const CHANNEL_NAME = 'قناة فاطمة أبو حاتي — يوتيوب';
const CHAPTER = 'الباب العاشر: وصفات قناة فاطمة أبو حاتي';

function videoSource(entry: ChannelRecipe): NonNullable<Recipe['source']> {
  return {
    name: CHANNEL_NAME,
    url: `https://www.youtube.com/watch?v=${entry.video}${entry.start > 0 ? `&t=${entry.start}s` : ''}`,
    collection: 'abuhaty',
    citation: entry.videoTitle
  };
}

function toRecipe(entry: ChannelRecipe): Recipe {
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
    chapter: CHAPTER,
    chapterNumber: 10,
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
    source: videoSource(entry),
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: instructions.length,
      totalMasterIngredients: entry.ingredients.length,
      overlapPercentage: 0,
      documentsPresent: [],
      reconciliationSummary: 'وصفة من قناة فاطمة أبو حاتي على يوتيوب، أعدنا صياغتها بأسلوبنا مع حفظ حق المصدر.'
    },
    rawDocVersions: {}
  };
}

export const fatmaAbuHatyRecipes: Recipe[] = ([
  meats,
  fish,
  vegetables,
  legumes,
  stuffed,
  starches,
  soups,
  salads,
  pastries,
  savory,
  quick,
  easternDesserts,
  westernDesserts,
  lightDesserts,
  sweetPies,
  iceCream,
  beverages
] as unknown as ChannelRecipe[][]).flat().map(toRecipe);
