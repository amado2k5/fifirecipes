/**
 * Converts the channel's LLM-authored drafts into the compact per-category
 * files that src/data/chapters/fatmaAbuHaty.ts expands into Recipe objects.
 *
 *   npx tsx scripts/channel-recipes/import-drafts.ts
 *
 * Reads transcripts/channel-fatma-abu-haty/drafts.jsonl (one dish per line)
 * and metadata.jsonl (video titles for citations and the Videos tab).
 * Normalizes every draft onto the site's vocabularies:
 *   - category   → the site's 18 category names (sauce/tool oddballs mapped)
 *   - method     → cookingMethod: inferred from the step text, since the LLM
 *                  often wrote a freeform description instead of a method
 *   - ingredients→ [name, amount, MasterIngredient.category]
 *   - steps      → [text, phase]; unknown phases collapse to "cook"/"prep"
 * Drafts with no ingredients or no steps, and drafts labelled "duplicate",
 * are skipped and listed in the report.
 *
 * Writes src/data/fatmaAbuHaty/<slug>.json, sourceVideos.json (the video each
 * recipe was extracted from, prepended to its Videos tab), titlesEn.json if
 * missing (filled later by the English translation pass), and an
 * import-report.txt next to the input for review.
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import type { MasterIngredient, Recipe, UniqueInstruction } from '../../src/types';

const DATA = 'transcripts/channel-fatma-abu-haty';
const OUT = 'src/data/fatmaAbuHaty';

type IngredientCategory = MasterIngredient['category'];
type Phase = UniqueInstruction['phase'];

interface Draft {
  key: string;
  label: 'new' | 'variant' | 'duplicate' | 'unclear';
  site_match?: string;
  video: string;
  other_videos?: string[];
  title: string;
  category: string;
  method?: string;
  prep?: string | null;
  cook?: string | null;
  servings?: string | null;
  difficulty?: Recipe['difficulty'];
  start?: number;
  confidence?: string;
  match_reason?: string;
  ingredients?: [string, string, string][];
  steps?: (string | string[])[];
  notes?: string | null;
}

interface VideoMeta {
  id: string;
  title?: string;
  duration?: string; // seconds, as a string
  view_count?: string;
}

interface ChannelEntry {
  id: string;
  title: string;
  category: string;
  method: string;
  prep?: string;
  cook?: string;
  servings?: string;
  difficulty?: Recipe['difficulty'];
  /** YouTube video id + the second the cooking starts, for the source link. */
  video: string;
  start: number;
  /** Video title at import time, used as the source citation. */
  videoTitle: string;
  /** Other channel videos that cook the same dish (they appear in the tab too). */
  otherVideos?: string[];
  label: string;
  siteMatch?: string;
  ingredients: [string, string, IngredientCategory][];
  steps: (string | [string, Phase])[];
  notes?: string;
}

// Site categories, in display order, mapped to the JSON file that holds them.
const CATEGORY_FILES: [string, string][] = [
  ['لحوم وطيور', 'meats'],
  ['بحريات', 'fish'],
  ['خضروات', 'vegetables'],
  ['بقوليات', 'legumes'],
  ['محشوات', 'stuffed'],
  ['نشويات', 'starches'],
  ['شوربات وحساء', 'soups'],
  ['سلطات', 'salads'],
  ['معجنات', 'pastries'],
  ['أكلات شهية', 'savory'],
  ['وجبات سريعة', 'quick'],
  ['حلويات شرقية', 'easternDesserts'],
  ['حلويات غربية', 'westernDesserts'],
  ['حلويات خفيفة', 'lightDesserts'],
  ['فطائر حلوة', 'sweetPies'],
  ['آيس كريم', 'iceCream'],
  ['مشروبات', 'beverages'],
  ['خشاف', 'kompot']
];
const CATEGORY_SLUG = new Map(CATEGORY_FILES);

// The LLM invented a few categories that do not exist on the site.
const CATEGORY_FIX: Record<string, string> = {
  'صلصات': 'سلطات',
  'صلصات وتوابل': 'سلطات',
  'صلصصات وصلصات': 'سلطات',
  'حلويات سريعة': 'حلويات خفيفة'
};

// Categories whose dishes are typically assembled without cooking. Their
// recipes can still simmer a syrup (تسبيك), boil (سلق) or be preserves
// (حفظ وتجميد), but never bake, fry or grill — those keyword hits there are
// noise like "steamed milk" for a latte.
const NO_COOK = new Set(['مشروبات', 'سلطات', 'آيس كريم', 'خشاف']);
const NO_COOK_ALLOWED = new Set(['تسبيك', 'سلق', 'حفظ وتجميد']);

// Keyword scoring against the step text. Watch the false-positive traps:
// "تقليب" contains قلي, "شوية" contains شوي, and notes often mention
// "يُحفظ في الثلاجة" (storage, not preserving) — so the patterns use
// verb forms and strong preserve cues only.
const METHOD_RULES: [string, RegExp][] = [
  ['حفظ وتجميد', /برطمان|تعقيم|معقم|مخلل|تخليل|مربى/],
  ['فرن', /فرن|ميكروي?ف|ميكروويف|صاج/],
  ['شي', /يُ?شوى|تُ?شوى|مشوي|شواية|شواء|الفحم|الشوي/],
  ['قلي', /يُ?قلى|تُ?قلى|نقلى|قليها|قلى في|القلي|مقلية|مقليات|قلاية|زيت غزير|الزيت الساخن/],
  ['تحمير', /تحمير|يُ?حمَّ?ر|تُ?حمَّ?ر|تشويح|يُ?شوَّ?ح|تشويحة/],
  ['سلق', /سلق|مسلوق|مسلوقة/],
  ['بخار', /بخار|حمام مائي/],
  ['تسبيك', /نار هادئ|تسبيك|يتسبك|يُ?ترك على (ال)?نار|يُ?طهى|تُ?طهى|يغلي|تغلي|ينضج|يثقل/]
];

const INGREDIENT_CATEGORY_FIX: Record<string, IngredientCategory> = {
  'fruit': 'sweet_fruit',
  'egg': 'dairy_fat',
  'nut': 'other',
  'chocolate': 'other',
  'dairy_fات': 'dairy_fat',
  'vegetable|meat_poultry': 'vegetable',
  'meat_poultry|dairy_fat': 'meat_poultry'
};
const VALID_INGREDIENT_CATEGORIES = new Set<IngredientCategory>([
  'meat_poultry', 'seafood', 'vegetable', 'dairy_fat', 'grain_starch',
  'spice_seasoning', 'sweet_fruit', 'liquid', 'other'
]);

const PHASE_FIX: Record<string, Phase> = { mix: 'prep', shape: 'prep', knead: 'prep', bake: 'cook' };
const VALID_PHASES = new Set<Phase>(['prep', 'cook', 'finish', 'alternative']);

function detectMethod(draft: Draft): string {
  const text = [...(draft.steps ?? []), draft.notes ?? '']
    .map(s => (Array.isArray(s) ? s.join(' ') : s))
    .join(' ');
  const scores = METHOD_RULES.map(([method, re]) => {
    const hits = text.match(new RegExp(re.source, 'g'));
    return { method, hits: hits?.length ?? 0 };
  });
  const best = scores.reduce((a, b) => (b.hits > a.hits ? b : a));
  if (best.hits > 0) {
    if (NO_COOK.has(draft.category) && !NO_COOK_ALLOWED.has(best.method)) return 'سلطات ومشروبات';
    return best.method;
  }
  return NO_COOK.has(draft.category) ? 'سلطات ومشروبات' : 'تسبيك';
}

function fixIngredientCategory(value: string): IngredientCategory {
  if (VALID_INGREDIENT_CATEGORIES.has(value as IngredientCategory)) return value as IngredientCategory;
  return INGREDIENT_CATEGORY_FIX[value] ?? 'other';
}

function normalizeSteps(steps: (string | string[])[]): (string | [string, Phase])[] {
  const out: (string | [string, Phase])[] = [];
  for (const step of steps) {
    if (typeof step === 'string') {
      if (step.trim()) out.push(step.trim());
      continue;
    }
    const [text, tag] = step;
    if (typeof text === 'string' && text.trim()) {
      if (typeof tag === 'string' && (VALID_PHASES.has(tag as Phase) || PHASE_FIX[tag])) {
        out.push([text.trim(), VALID_PHASES.has(tag as Phase) ? (tag as Phase) : PHASE_FIX[tag]]);
      } else {
        // A list whose second element is prose, not a phase tag: split into two steps.
        out.push(text.trim());
        if (typeof tag === 'string' && tag.trim().length > 3) out.push(tag.trim());
      }
    }
  }
  return out;
}

// Same-dish detection: the pipeline sometimes emits the same dish twice
// (same video listed twice, or a dish repeated across videos). Titles are
// compared after stripping diacritics, tatweel, alef/taa variants and the
// "طريقة عمل/تحضير" lead-in.
function normalizeTitle(title: string): string {
  return title
    .replace(/[ً-ْٰـ]/g, '')
    .replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
    .replace(/^طريقة\s+(عمل|تحضير)\s+/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatDuration(seconds?: string): string | undefined {
  const total = Number(seconds);
  if (!Number.isFinite(total) || total <= 0) return undefined;
  const m = Math.floor(total / 60);
  const s = Math.round(total % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

// YouTube-style view text ("4.4 مليون مشاهدة"), matching fetch-videos output.
function formatViews(count?: string): string | undefined {
  const n = Number(count);
  if (!Number.isFinite(n) || n <= 0) return undefined;
  const trim = (v: number) => String(Math.round(v * 10) / 10);
  if (n >= 1_000_000) return `${trim(n / 1_000_000)} مليون مشاهدة`;
  if (n >= 1_000) return `${trim(n / 1_000)} ألف مشاهدة`;
  return `${n} مشاهدة`;
}

async function main() {
  const drafts = (await readFile(path.join(DATA, 'drafts.jsonl'), 'utf-8'))
    .split('\n').filter(Boolean).map(l => JSON.parse(l) as Draft);
  const meta = new Map<string, VideoMeta>();
  for (const line of (await readFile(path.join(DATA, 'metadata.jsonl'), 'utf-8')).split('\n')) {
    if (!line.trim()) continue;
    const row = JSON.parse(line) as VideoMeta;
    if (row.id) meta.set(row.id, row);
  }

  // Fold same-dish drafts into one: keep the richer write-up, move the other
  // videos onto it. Most repeats are the same video emitted twice.
  const kept = new Map<string, Draft>();
  const merged: string[] = [];
  for (const draft of drafts) {
    if (draft.label === 'duplicate') continue;
    const key = normalizeTitle(draft.title);
    const existing = kept.get(key);
    if (!existing) { kept.set(key, draft); continue; }
    const richer = (existing.ingredients?.length ?? 0) + (existing.steps?.length ?? 0) >=
      (draft.ingredients?.length ?? 0) + (draft.steps?.length ?? 0) ? existing : draft;
    const other = richer === existing ? draft : existing;
    richer.other_videos = [...new Set([...(richer.other_videos ?? []), other.video, ...(other.other_videos ?? [])])]
      .filter(v => v !== richer.video);
    kept.set(key, richer);
    merged.push(`${other.title} (${other.video}) → kept ${richer.video}`);
  }

  const skipped: string[] = [];
  const entries: ChannelEntry[] = [];
  for (const draft of kept.values()) {
    const ingredients = (draft.ingredients ?? []).filter(i => i[0]?.trim());
    const steps = normalizeSteps(draft.steps ?? []);
    if (!ingredients.length || !steps.length) {
      skipped.push(`${draft.title} (${draft.video}): no ingredients/steps`);
      continue;
    }
    const category = CATEGORY_FIX[draft.category] ?? draft.category;
    if (!CATEGORY_SLUG.has(category)) {
      skipped.push(`${draft.title} (${draft.video}): unknown category ${draft.category}`);
      continue;
    }
    const normalized: Draft = { ...draft, category };
    entries.push({
      id: '', // assigned after sorting
      title: draft.title.trim(),
      category,
      method: detectMethod(normalized),
      ...(draft.prep ? { prep: draft.prep } : {}),
      ...(draft.cook ? { cook: draft.cook } : {}),
      ...(draft.servings ? { servings: draft.servings.replace(/أشخاص|أشخاصًا/g, 'أفراد').replace(/شخص/g, 'فرد') } : {}),
      ...(draft.difficulty ? { difficulty: draft.difficulty } : {}),
      video: draft.video,
      start: Math.max(0, Math.round(draft.start ?? 0)),
      videoTitle: meta.get(draft.video)?.title ?? '',
      label: draft.label,
      ...(draft.site_match ? { siteMatch: draft.site_match } : {}),
      ...(draft.other_videos?.length ? { otherVideos: draft.other_videos } : {}),
      ingredients: ingredients.map(i => [i[0].trim(), (i[1] ?? 'حسب الرغبة').trim() || 'حسب الرغبة', fixIngredientCategory(i[2] ?? '')]),
      steps,
      ...(draft.notes?.trim() ? { notes: draft.notes.trim() } : {})
    });
  }

  // Group by category (site order) and sort by title inside each group, so the
  // fah-NNN ids are stable and related dishes share an id range.
  entries.sort((a, b) => {
    const ca = CATEGORY_FILES.findIndex(([c]) => c === a.category);
    const cb = CATEGORY_FILES.findIndex(([c]) => c === b.category);
    return ca - cb || a.title.localeCompare(b.title, 'ar');
  });
  entries.forEach((e, i) => { e.id = `fah-${String(i + 1).padStart(3, '0')}`; });

  await mkdir(OUT, { recursive: true });
  const report: string[] = [];
  for (const [category, slug] of CATEGORY_FILES) {
    const group = entries.filter(e => e.category === category);
    if (!group.length) continue;
    await writeFile(path.join(OUT, `${slug}.json`), JSON.stringify(group, null, 1) + '\n');
    report.push(`${category} → ${slug}.json: ${group.length}`);
  }

  // The video each recipe came from; generate-public-index.ts puts it first in
  // the recipe's Videos tab.
  const sourceVideos: Record<string, unknown> = {};
  for (const e of entries) {
    const m = meta.get(e.video);
    const seen = new Set<string>();
    const videos = [e.video, ...(e.otherVideos ?? [])]
      .filter(v => !seen.has(v) && !!seen.add(v))
      .map(v => {
        const vm = meta.get(v);
        return {
          id: v,
          title: vm?.title ?? e.videoTitle,
          channel: 'فاطمة أبو حاتي',
          ...(formatDuration(vm?.duration) ? { duration: formatDuration(vm!.duration) } : {}),
          ...(formatViews(vm?.view_count) ? { views: formatViews(vm!.view_count) } : {})
        };
      });
    sourceVideos[e.id] = videos;
  }
  await writeFile(path.join(OUT, 'sourceVideos.json'), JSON.stringify(sourceVideos, null, 1) + '\n');

  // Placeholder the English pass fills; never overwrite a filled file.
  try {
    await access(path.join(OUT, 'titlesEn.json'));
  } catch {
    await writeFile(path.join(OUT, 'titlesEn.json'), '{}\n');
  }

  const methodStats = new Map<string, number>();
  for (const e of entries) methodStats.set(e.method, (methodStats.get(e.method) ?? 0) + 1);
  report.push('', `total imported: ${entries.length}`, `same-dish drafts merged: ${merged.length}`, ...merged,
    `skipped: ${skipped.length}`, ...skipped,
    '', 'methods:', ...[...methodStats.entries()].map(([m, n]) => `  ${m}: ${n}`));
  await writeFile(path.join(DATA, 'import-report.txt'), report.join('\n') + '\n');
  console.log(report.join('\n'));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
