# World Cuisines Encyclopedia — Plan & Execution Prompt

Drafted 2026-10-03 against `main @ f3fa9626` (1,881 recipes, chapters 1–10, 24 languages).

---

## Part A — Plan (for you to read)

### What the repo already gives us

| Need | Existing piece | State |
|---|---|---|
| Chapter from a JSON corpus | `src/data/chapters/fatmaAbuHaty.ts` + `src/data/fatmaAbuHaty/*.json` (compact authoring format → `Recipe`) | Best template to copy |
| Collection filter | `RecipeCollection` / `RecipeSource.collection` in `src/types.ts` | Needs a new value, e.g. `'world'` |
| Banners | `scripts/recipe-images/` (mflux FLUX.2 klein 9B, `.venv-mflux`, `work/state.db`) | **The `.py` sources are gone** (only `.pyc` + venvs + state.db remain; not in git history). Must be recovered or rebuilt first |
| Thumbnails | `npm run thumbnails` (`scripts/generate-thumbnails.ts`, 800 px, q70) | Ready |
| Translations | `scripts/translations/` (glossary → draft-entries → fills → apply-fills → write-entries; `validate-translations.ts`) + local Gemma 4 engine in `~/fifirecipes-translation-work` | Ready; 24 languages |
| Nutrition/cost | `scripts/estimates/` (`next-batch.ts`, `append.ts`, rules in `PROGRESS.md`) | Ready |
| App data feed | `scripts/generate-public-index.ts` → `public/data/**` incl. `public/data/tv/**` (fails loudly on missing image/translation) | Ready |
| Apps | `../fifirecipes-android`, `-ios`, `-ipadosapp`, `-tvos`, `-amazonfire`, `-samsungtv` | Consume the public data API |

### Phases

0. **Decisions + pilot.** Settle the open questions below, then run the whole pipeline end to end on **3 pilot countries** (e.g. Morocco, Japan, Mexico) before scaling.
1. **Source discovery.** For each country, build a ranked list of up to 100 well-known dishes from reference lists (Wikipedia "List of X dishes", national cuisine articles). Then find, per dish, 1–3 recipe pages from reputable sites that publish schema.org `Recipe` JSON-LD. Output `world/sources/<iso2>.yaml` plus a global `world/sites.yaml` (allowed domains, robots.txt status, rate limit).
   **Uniqueness:** a dish already on the site (any chapter) or already given to another country is dropped, and the next-ranked dish takes its place. That's why discovery collects ~130 candidates per country.
2. **Distill locally** (Python, Mac). `recipe-scrapers` / JSON-LD extraction → a local LLM (mlx-lm, Qwen/Gemma) normalizes and rewrites the recipe in our own words → **halal gate rejects the whole recipe** on any haram ingredient (never substitutes) → `world/distilled/<iso2>/<id>.json` + `world/rejected.jsonl` with reasons. SQLite state, resumable.
3. **Import.** A script converts the distilled JSON into `src/data/world/<iso2>.json` + `src/data/chapters/world.ts`. One chapter per country, ≤100 recipes, IDs `w-<iso2>-NNN`, chapterNumber 11+.
4. **Banners.** Use the restored mflux pipeline (brief → FLUX.2 klein → 1024×768 JPEG q82 → `recipeImages.ts`).
5. **Thumbnails.** `npm run thumbnails`.
6. **Translate** into every site language via the existing pipeline (local model, validated).
7. **Verify** the site (render, search, chapter filter, collection filter, every language) and every app repo (data feed, chapter rails with many more chapters, search).
8. **Estimates.** Nutrition + cost per `scripts/estimates/PROGRESS.md` rules.
9. **Ship** in chunks of about 50 recipes, each one fully done (data + banner + thumb + translations + estimates) and passing `npm run build` + `validate-translations`.

### Scale reality check

- ~195 countries × ≤100 = **up to ~19,500 recipes**, which is 10× the current site. Realistically many small countries have <30 distinct well-documented dishes, so expect **~8,000–12,000**.
- Banners at ~100 s each come to **~10–22 days** of continuous GPU time.
- Translations: about 10k recipes × 23 languages ≈ 230k jobs; at ~11/min that is **~14 days**.
- The GPU jobs can't run in parallel (OOM, per earlier runs), so plan on **4–8 weeks** of wall-clock time on the M4 Max, run country by country, with each country shipping on its own.
- Payload: check the per-language index and `public/data/tv/index/<lang>.json` sizes after the pilot. They may need splitting or paging.

### Decisions you need to make (the prompt asks these first)

1. **Shellfish/seafood.** Strict-Hanafi (fish only, no shrimp/crab/mussels), or all seafood allowed (majority view)? Recommended default: allow all seafood, matching the site's existing seafood recipes.
2. **Ambiguous ingredients.** Vanilla extract, soy sauce (trace alcohol from fermentation), Dijon mustard (some contain wine), non-halal-certified gelatin, rennet in cheese, "cooking wine"/mirin/sake, wine vinegar, non-alcoholic beer, rum *flavoring*. Recommended default: reject when the ingredient *is* alcohol or alcohol-made (wine, mirin, sake, beer, liqueur, wine vinegar, vanilla extract) or when gelatin's source is unspecified. Accept soy sauce, regular vinegar and plain cheese. Anything else ambiguous goes to `world/review.jsonl` and is never silently included.
3. **"Top 100 recipes" + "top 100 dishes".** Read these as **one ranked list per country, capped at 100** (the cap you set in step 3).
4. **Content language.** The site's base text is Arabic. Should distilled recipes be written in Arabic (like every other chapter) with English as the first translation, or English-first? Recommended: author Arabic + English together at distillation time so the recipes show in both base languages immediately.
5. **Push style.** You said "push to main". Earlier pipelines used a worktree → PR → squash-merge per batch, which keeps CI and history clean. Recommended: same PR flow, auto-merged.
6. **Copyright/ToS.** Ingredient lists aren't copyrightable, but recipe text and photos are. The prompt rewrites every recipe in our own words, credits the source URL (`source.name/url/citation`, like the fah chapter), never copies photos, honours robots.txt, and skips sites whose terms forbid scraping (for example, TasteAtlas is OK for *ranking reference by hand* only, not for scraping).

---

## Part B — The prompt (paste into a new Claude Code session at the repo root)

```text
You are working in /Users/ahmedabdelaal/Documents/GitHub/fifirecipes (React/Vite site,
Arabic-base recipes, 24 languages, data served to Android/iOS/iPadOS/tvOS/Fire TV/Samsung TV
apps in sibling repos ../fifirecipes-*). Read docs/world-cuisines-plan.md Part A first.

GOAL
Build a "World Cuisines" encyclopedia: for each country, its most famous, most-cooked
dishes (sweet, savory, anything), up to 100 per country, each as its own chapter named
after the country, with banner, thumbnail, all translations, nutrition and cost. Every
recipe must be fully halal.

HARD RULES
- Halal gate: if ANY ingredient is haram (pork or any pork derivative: lard, bacon, ham,
  prosciutto, pancetta, chorizo/salami unless explicitly halal, pork gelatin; alcohol of any
  kind as an ingredient: wine, beer, spirits, liqueur, sake, mirin, cooking wine, wine
  vinegar, alcohol-based extracts; blood or blood products: black pudding, blood sausage;
  carnivorous animals, birds of prey, donkey/mule, frogs, reptiles, insects except locusts;
  gelatin or rennet of unspecified/pork source), REJECT THE WHOLE RECIPE. Never remove or
  substitute an ingredient. Log every rejection with the triggering ingredient to
  world/rejected.jsonl. Anything uncertain goes to world/review.jsonl, not to the site.
  Run the gate twice: a deterministic multilingual keyword/regex list
  (world/halal_rules.yaml, covering English + local names, e.g. "guanciale", "lardons",
  "Schmalz", "味醂", "vino", "rhum") AND a local-LLM classifier. A recipe passes only if
  both pass.
- Prefer local compute (mlx-lm models already on this Mac, mflux for images). Do not run
  two GPU jobs at once (they OOM); check `ps` for mlx/mflux jobs before starting one.
- Scraping etiquette: obey robots.txt, identify a User-Agent, ≥3 s between requests per
  domain, cache every fetched page under world/cache/ so nothing is fetched twice, and stop
  and tell me on repeated 403/429 errors (no aggressive retries). Never download or reuse
  source photos.
- Rewrite every recipe in our own words (Arabic base + English), keep source credit
  (name, url, citation) like src/data/chapters/fatmaAbuHaty.ts does.
- Max 100 recipes per country.
- UNIQUENESS (strict): every added recipe must be a dish the site does not already have.
  A candidate that matches ANY existing site recipe (all 1,881+ across every chapter and
  collection, including fah-*, osool, ec, add, kids) is EXCLUDED, not flagged and not
  added as a variant. The same applies across countries: a dish claimed by several
  countries (hummus, baklava, falafel, kebab, couscous...) goes to ONE country only, the
  one with the strongest claim, and never again. Matching, in order:
  (1) normalized title match (Arabic diacritics/alef/taa-marbuta/ya normalization;
  English lowercase/accents/plurals; also the dish's local and transliterated names) against
  title + titleEn + every translated title in src/data/recipeTranslations*.json;
  (2) multilingual embedding similarity (e5, already used by the channel pipeline) over
  title + main ingredients, top-5 nearest site recipes;
  (3) the local LLM judges "same dish or a genuinely different dish?" for any neighbour
  above the similarity threshold, and when in doubt, exclude.
  Log every exclusion with the matched site id to world/duplicates.jsonl. Run the
  check at discovery (Step 1, so candidates are backfilled from the slack) and again at
  import (Step 3, as a hard gate against everything on main at that moment).
- All bulk state in SQLite (world/state.db) and resumable; every script is idempotent.
- Keep work data (cache, raw scrapes, state.db) in a gitignored world/ dir at the repo root;
  only final data, images, and scripts get committed.

STEP 0 — Before writing code, ask me (AskUserQuestion) the open decisions listed in
Part A ("Decisions you need to make"): seafood ruling, ambiguous-ingredient defaults,
content language, push style (direct to main vs PR+auto-merge), and which 3 pilot countries.
Then recover the banner pipeline: scripts/recipe-images/ only has .pyc files now
(describe/generate/publish/ship/state). Look for the .py sources (other clones under
~/Documents/GitHub, Time Machine, `git stash list`, editor history). If they're not found,
rebuild them from the .pyc files (`python -m dis`, or pycdc if available) and from the
pipeline description in memory (FLUX.2 klein 9B, SCENE_RULES "one dish alone on a bare
table", 1 variant, 1024×768 JPEG q82, ids registered in src/data/recipeImages.ts). Commit
the restored sources this time.

STEP 1 — Source discovery (scripts/world/discover.py)
- Country list: ISO 3166 sovereign states (world/countries.yaml with iso2, English name,
  Arabic name, and the canonical chapter title "باب <الدولة>" / "<Country>").
- Per country, a ranked candidate dish list (≤130 so there's slack after halal/dup
  filtering) from Wikipedia "List of <X> dishes" / "<X> cuisine" pages (via the MediaWiki
  API, not HTML scraping), ranked by cross-source mentions + Wikipedia pageviews. Dishes
  that are inherently haram (e.g. pork-based national dishes) are dropped here with a log
  entry.
- Per dish, find 1–3 recipe URLs on reputable sites that expose schema.org Recipe JSON-LD
  (allowlist in world/sites.yaml with robots/ToS status; include strong regional sites per
  cuisine, not only US sites). Use web search for discovery.
- Output world/sources/<iso2>.yaml and a short report per country. Show me the pilot
  countries' lists before Step 2.

STEP 2 — Distill (scripts/world/distill.py, Python 3.12 venv in scripts/world/.venv)
- Fetch (cached) → parse JSON-LD (`recipe-scrapers` + fallback to raw JSON-LD) →
  local LLM normalizes to the compact ChannelRecipe-style schema used in
  src/data/fatmaAbuHaty/*.json (title, titleEn, category, method, prep, cook, servings,
  difficulty, ingredients [name, amount, MasterIngredient category], steps with phases,
  notes = short cultural note about the dish and country) → halal gate (both layers) →
  pick the best of the 1–3 sources (most complete, most authentic) → validate schema →
  world/distilled/<iso2>/<id>.json.
- IDs: w-<iso2>-NNN in dish-rank order.
- Print per-country counts: candidates / fetched / parsed / halal-rejected / review /
  duplicates / accepted.

STEP 3 — Import (scripts/world/import.ts)
- Copy the fatmaAbuHaty pattern: src/data/world/<iso2>.json + src/data/chapters/world.ts
  mapping each country to its own chapter (chapter = country title, chapterNumber starting
  at 11, ordered by a fixed list so numbers are stable), source.collection = 'world' (add
  'world' to RecipeSource.collection and RecipeCollection, and to the collection filter UI
  and its labels in all languages). Register in src/data/recipes.ts.
- Enforce ≤100 per country and re-run the strict uniqueness gate against all recipes
  currently on main (including world recipes from earlier countries). Check the UI copes with ~200 chapters (chapter
  filter/dropdown, chapter routes /chapter/*, kids/featured rows unaffected). Add
  search-by-country if chapter filtering alone is clumsy.
- New recipes must stay hidden (like arabicOnly/englishOnly) until they have a banner,
  thumbnail and all translations, so a half-done country never ships.

STEP 4 — Banners: run the restored pipeline on the new ids (export → describe → generate
--model flux2-klein-9b --variants 1 → publish). The brief must say the dish's country and
plating style. Run it under caffeinate, resumable, and check the dashboard
(launch.json "banner-dashboard").

STEP 5 — Thumbnails: `npm run thumbnails`. Confirm a thumbs/<id>.jpg exists for every new id.

STEP 6 — Translations: every language the site supports (read the list from the code, not
from memory). Use the existing scripts/translations pipeline and the local Gemma engine;
add a ledger section to scripts/translations/PROGRESS.md; keep the glossary consistent
(add country/dish names to the glossary). `npx tsx scripts/validate-translations.ts` must
pass with zero new errors.

STEP 7 — Verification
- `npm run lint`, `npm run build` (generate-public-index fails loudly on missing
  images/translations, so treat any failure as a blocker).
- Start the dev server via preview_start and, for at least Arabic, English and one RTL +
  one CJK language: open a few new recipes per country, check the banner, thumbnail,
  ingredients, steps, nutrition/cost panel, chapter filter, collection filter, and search
  by dish name, by country name, and by ingredient.
- Inspect public/data/tv/{index,feed,chapters}/<lang>.json for the new chapters/recipes
  and check file sizes. If an index grows past what the TV clients handle comfortably,
  propose paging.
- In each app repo (../fifirecipes-android, -ios, -ipadosapp, -tvos, -amazonfire,
  -samsungtv) read how chapters and search are consumed and confirm nothing hard-codes
  chapter counts/ids or the collection enum. Run each repo's existing tests/smoke scripts
  (e.g. scripts/tv-smoke.mjs for Samsung) against the new data, and use the iOS
  simulator for iOS/iPadOS/tvOS. Report anything that needs an app release; don't bump
  versions or submit to stores.

STEP 8 — Nutrition & cost: follow scripts/estimates/PROGRESS.md exactly (USDA-based per
serving, macro-energy within ±15%, whole-recipe USD cost to $0.05 in buckets). Use
next-batch.ts/append.ts and log batches in PROGRESS.md. Compute with the local LLM plus a
deterministic check of the ±15% rule.

STEP 9 — Shipping
- Ship one country at a time in chunks of ~50 recipes. Each chunk must be complete
  (data + banner + thumb + all translations + estimates) and pass lint, build and
  validate-translations before commit.
- Commit message: "feat(world): <Country> recipes <first>–<last> (<n>)". Push per the
  push style I chose in Step 0. Never force-push; never commit world/cache or state.db.
- After each chunk, report briefly: country, ids, rejected count, and what's next.

PACE
Do the 3 pilot countries end to end first and stop for my review. Then continue country by
country without asking, except: stop on scraping blocks, failed validation you can't fix,
or any recipe the halal gate marks uncertain at more than 10% of a country's recipes.
Keep my memory notes updated with status and resume commands.
```
