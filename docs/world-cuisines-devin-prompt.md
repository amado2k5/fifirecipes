# Devin Desktop Prompt: World Cuisines Encyclopedia for fifirecipes

> Paste everything below the line into Devin Desktop running on the Mac.
> Background and reasoning: `docs/world-cuisines-plan.md`.

---

## 0. Who you are working for and the ground rules

You are working on my Mac (Apple M4 Max, 128 GB RAM, macOS) in the repo
`/Users/ahmedabdelaal/Documents/GitHub/fifirecipes`. It is a React + Vite + TypeScript recipe
website (https://fifi.cooking). Its base content language is Arabic, it is translated into 24
languages, and it serves a public data API consumed by native apps in sibling repos:

| App | Local path |
|---|---|
| Android phone/tablet (Kotlin/Compose) | `../fifirecipes-android` |
| iPhone (Swift) | `../fifirecipes-ios` |
| iPad (Swift) | `../fifirecipes-ipadosapp` |
| Apple TV (Swift) | `../fifirecipes-tvos` |
| Amazon Fire TV (web/Capacitor) | `../fifirecipes-amazonfire` |
| Samsung TV (Tizen web) | `../fifirecipes-samsungtv` |

**Mission:** build a "World Cuisines" encyclopedia. For every country, add its most famous and
most-cooked dishes (sweet, savory, any taste), **at most 100 per country**, each country being
its own chapter. Every recipe must be **fully halal**, must be **unique to the website**, and
must ship with a banner, a thumbnail, all translations, and nutrition + cost estimates.

**Ground rules (apply to every step):**

1. **Work locally.** Use the local models already downloaded on this Mac (listed in §2)
   for all bulk work. Paid cloud LLM/image APIs are not allowed unless I approve them.
2. **One GPU job at a time.** Two MLX/mflux processes at once run out of GPU memory. Before
   starting any model job, run `ps aux | grep -E "mlx|mflux|python" | grep -v grep` and wait
   or ask if one is running.
3. **Everything is resumable and idempotent.** Keep all pipeline state in SQLite
   (`world/state.db`). Re-running any script skips finished work. Wrap long runs in
   `caffeinate -i` and run them with `nohup ... >> world/logs/<step>.log 2>&1 &` so they
   survive the session.
4. **Work dir.** Put all scratch data in `world/` at the repo root (add `world/` to
   `.gitignore`): page cache, raw scrapes, state.db, logs, rejected/duplicates/review lists.
   Only scripts, final recipe data, images, and docs get committed.
5. **Never invent facts in the data.** A recipe comes from at least one real source page that
   you fetched and parsed. If you can't find a solid source for a dish, skip the dish.
6. **Never force-push, never rewrite history, never commit secrets.**
7. **Stop and ask me** (don't work around it) on: repeated HTTP 403/429 or CAPTCHA from a site,
   a validation/build failure you can't fix cleanly, a needed change to an app repo, or
   anything that requires an account, payment or store submission.
8. **Write progress** to `world/PROGRESS.md` (gitignored copy) and a committed summary in
   `docs/world-cuisines-progress.md`: per country, the counts at each stage and what's left.
   Also include the exact resume commands, so any session can pick up where the last stopped.

---

## 1. Decisions (defaults are set; confirm with me at the very start, in one message)

Ask me these once, up front. If I say "use defaults", proceed with the **bold** option.

1. **Seafood:** **all fish and seafood allowed** (shrimp, crab, mussels, squid, etc.),
   or fish-only (strict Hanafi).
2. **Ambiguous ingredients:**
   - **Reject the recipe:** wine, beer, spirits, liqueur, sake, mirin, shaoxing/cooking
     wine, wine vinegar, sherry vinegar, balsamic containing wine must, vanilla *extract*
     (vanilla bean, powder and alcohol-free vanilla are fine), rum/brandy flavorings that
     contain alcohol, "non-alcoholic" beer/wine (often contain traces), gelatin of
     unspecified source, rennet of unspecified animal source when it is listed as an
     ingredient.
   - **Accept:** soy sauce, regular/distilled/apple/rice vinegar (not rice wine), plain
     cheese, fish sauce, Worcestershire (if no pork/anchovy issue for your seafood ruling).
   - **Review list (not on site):** anything else unclear.
3. **"Top 100 recipes" and "top 100 dishes"** are **one ranked list per country, max 100**.
4. **Content language:** **write each recipe in Arabic (base fields) and English together
   during distillation**, like every other chapter. Then translate into the other languages.
5. **Pushing:** **branch → PR → squash-merge automatically per chunk** (needs `gh` auth), or
   commit directly to `main` and push.
6. **Pilot countries:** **Morocco, Japan, Mexico** (one familiar, one with lots of
   haram-risk ingredients like mirin/sake/pork, one large cuisine).

---

## 2. What already exists (read these files before writing code)

### Recipe data model
- `src/types.ts`: `Recipe`, `MasterIngredient` (and its `category` union), `UniqueInstruction`
  (`phase`, `importance`), `RecipeSource` (`collection?: 'chefteta' | 'osool' | 'abdennour' | 'abuhaty'`),
  `RecipeCollection`, `RecipeSummary` (`arabicOnly` / `englishOnly` hide a recipe in other
  languages until translated).
- `src/data/recipes.ts`: `allRecipes` concatenates every chapter's array. New chapters
  must be registered here.
- **Template to copy:** `src/data/chapters/fatmaAbuHaty.ts` + `src/data/fatmaAbuHaty/*.json`.
  This is the most recent chapter (808 recipes, chapter 10, ids `fah-001…`). It uses a compact
  JSON authoring format (`id, title, category, method, prep, cook, servings, difficulty,
  ingredients: [name, amount, category][], steps: (string | [string, phase])[], notes`) and
  expands it to `Recipe` in `toRecipe()`. English titles come from `titlesEn.json`. The source
  is credited via `source: { name, url, collection, citation }`.
- Existing chapters: 1–9 (book/cookbook chapters, `osool-*`, `ec-*`, `add-*`, etc.) and
  10 (`fah-*`). **New country chapters start at chapterNumber 11.**

### Images
- `src/data/recipeImages.ts`: explicit list of recipe ids that have a photo, plus
  `getRecipeImagePath()`.
- Photos: `public/recipe-images/<id>.jpg` (1024×768, JPEG quality 82).
- Thumbnails: `npm run thumbnails` (`scripts/generate-thumbnails.ts`, sharp, 800 px wide,
  q70, mozjpeg) writes `public/recipe-images/thumbs/<id>.jpg`, skipping up-to-date ones.

### Banner generation pipeline (needs recovery, see Step 0)
`scripts/recipe-images/` previously held a local pipeline. Its **`.py` sources are missing**.
Only `generate.pyc, publish.pyc, ship.pyc, state.pyc` and `__pycache__/*.cpython-312.pyc`
remain, plus the venv `.venv-mflux` (mflux 0.20 + mlx-lm, Python 3.12) and
`work/state.db`. What it did:
1. `export-missing.ts` dumped recipes without an image to `work/recipes.json`.
2. `describe.py` used `mlx-community/Qwen3-30B-A3B-Instruct-2507-4bit` to write a one-line
   visual brief per dish (what the finished dish looks like, colours, garnish, vessel).
3. `generate.py --model flux2-klein-9b --variants 1 [--auto-publish]` used mflux with
   `black-forest-labs/FLUX.2-klein-9B` (~100 s/image on this Mac). The prompt appended
   **SCENE_RULES**: one dish alone on a bare table, natural window light, overhead or 45°
   food-photography angle, no text, no hands, no extra props (local models draw every object
   a prompt names, so listing dishware/extras caused clutter). It retried on GPU OOM.
4. `publish.py` converted the approved image to 1024×768 JPEG q82 into `public/recipe-images/`
   and appended the id to `src/data/recipeImages.ts`.
5. `ship.py` committed every 50 banners.
6. `dashboard.py` served a small review page on localhost:8765.

### Translations
- Languages: read `TOP_20_LANGUAGES` in `src/data/translations.ts` (the source of truth; 24
  entries including `ar` and `en`). Don't hard-code the list.
- Translation tables: `src/data/recipeTranslations.json` (English) and
  `src/data/recipeTranslations<Xx>.json` per language, keyed by recipe id.
- Pipeline in `scripts/translations/`: `build-glossary.ts` → `draft-entries.ts <lang> <slug>`
  → author `fills/<lang>/<slug>.json` → `apply-fills.ts` → `write-entries.ts` →
  (English only) `fill-titles.ts`. Ledger and rules: `scripts/translations/PROGRESS.md`.
- Validation: `npx tsx scripts/validate-translations.ts` (one known pre-existing issue: 26
  "ingredient key mismatch" errors in pt/ru/zh on old book recipes. Don't count those as yours,
  don't add new ones).
- Local engine: `~/fifirecipes-translation-work/mlx_translate.py` (+ `translate.py` prompts
  and validation, `merge.py`). Model `mlx-community/gemma-4-26b-a4b-it-4bit`, **batch size 20**
  (batch 64 produced broken JSON), ~11 translations/min, resumable (skips existing
  `out/<lang>/<id>.json`). Its job list `recipes.json` is stale. Generate a new one for the
  world ids.

### Nutrition and cost
- `scripts/estimates/PROGRESS.md` holds the rules (follow them exactly):
  - servings: realistic, half-integers allowed;
  - per serving, whole numbers: kcal, protein, fat, carbs, fiber, sugar, from typical USDA
    composition of each ingredient × amount; **protein×4 + fat×9 + carbs×4 within ±15% of
    kcal**;
  - cost per whole recipe, USD to nearest $0.05, average 2026 US supermarket prices, split into
    buckets `protein, dairyEggs, produce, grains, fats, sweeteners, specialty, spices`
    (at least one non-empty).
- Tools: `scripts/estimates/next-batch.ts`, `append.ts`, `skip.json`. Data:
  `src/data/recipeEstimatesData.ts` (+ `additionalRecipeEstimates.ts`, `missingEstimates.ts`),
  shape `{ servings, kcal, protein, fat, carbs, fiber, sugar, cost: {...} }`.
  `src/data/estimateTranslations.ts` may need entries too. Check how existing ids are handled.

### Public data / apps
- `scripts/generate-public-index.ts` (runs as `predev`/`prebuild`) writes `public/data/**`
  and calls `scripts/generate-tv-index.ts`, which writes `public/data/tv/{manifest.json,
  index/<lang>.json, feed/<lang>.json, chapters/<lang>.json, kids/<lang>.json, images.json}`.
  Spec: `docs/tv-api.md`, `scripts/tv-api.schema.json`. **The build fails loudly when an
  active recipe, an image file, or a fully translated language is missing.** That is the gate.
- Duplicate helpers: `scripts/find-duplicates.ts`, `scripts/check-duplicates-detailed.ts`.

### Local models available (Hugging Face cache `~/.cache/huggingface/hub`)
- `mlx-community/Qwen2.5-72B-Instruct-4bit`: strongest, slow; use for halal judging and
  rewriting where quality matters most.
- `mlx-community/Qwen3-30B-A3B-Instruct-2507-4bit` / `Qwen3.6-35B-A3B-4bit`: fast MoE; good
  for structured extraction.
- `mlx-community/gemma-4-26b-a4b-it-4bit`: translation engine.
- `intfloat/multilingual-e5-large`: embeddings for duplicate detection.
- `black-forest-labs/FLUX.2-klein-9B`: banner images (via mflux).

### Commands
- `npm run lint` (tsc), `npm run build`, `npm run dev` (port 3000), `npx vite preview --port 4174`.
- Node via `npx tsx`. Python: create `scripts/world/.venv` (Python 3.12) for new scripts;
  reuse `scripts/recipe-images/.venv-mflux` for images and `~/.venvs/mlx-translate` for
  translation.
- Android builds need Java 17: `JAVA_HOME=/opt/homebrew/opt/openjdk@17`.

---

## 3. Hard rules for content

### 3.1 Halal gate (whole-recipe rejection)
If **any** ingredient (or any step, e.g. "deglaze with wine", "flambé with cognac", "brush
with lard") is haram, **reject the entire recipe**. **Never remove, omit or substitute an
ingredient**, because it changes the dish. Haram / reject list (multilingual; maintain it in
`scripts/world/halal_rules.yaml` with English + local-language names + common brand/product
terms):

- **Pork and derivatives:** pork, ham, bacon, lard, pancetta, guanciale, prosciutto, jamón,
  speck, chorizo, salami, pepperoni, mortadella, lardons, chicharrón (pork), char siu, Schmalz
  (when pork), pork gelatin, pig's feet/trotters/ears, "manteca de cerdo", 豚/猪/돼지, etc.
  (Treat chorizo/salami/sausage/hot dog/pepperoni as pork **unless** the source says
  beef/chicken/halal.)
- **Alcohol in any form as an ingredient**, per decision 2: wine, beer, cider (alcoholic),
  spirits, liqueurs, sake, mirin, shaoxing, soju, makgeolli, cooking wine, wine vinegar, rum,
  brandy, cognac, vodka, kirsch, vanilla extract, etc. ("rhum", "vino", "Wein", "酒", "味醂",
  "미림"…).
- **Blood and blood products:** black pudding, blood sausage, morcilla, boudin noir,
  sundae (Korean), blood tofu, dinuguan, etc.
- **Prohibited animals:** carnivorous animals, birds of prey, dog, cat, donkey/mule/horse
  (horse is disputed, so reject), frogs, snakes/reptiles, turtles, insects (except locusts),
  and animals found dead.
- **Gelatin/rennet/enzymes** of unspecified or pork source, per decision 2.
- **Seafood** per decision 1.

Run the gate **twice and require both to pass:**
1. **Deterministic:** normalized-text match of every ingredient line and step against
   `halal_rules.yaml` (case/accent-insensitive, word-boundary aware, multiple scripts).
2. **Local LLM classifier** (Qwen2.5-72B): given the full recipe, return JSON
   `{verdict: "halal" | "haram" | "uncertain", reasons: [...], triggering_items: [...]}`.

Outcomes: haram goes to `world/rejected.jsonl` (id, dish, country, url, triggering item,
which layer). Uncertain goes to `world/review.jsonl` and **never** onto the site. Only
halal+halal passes. **Meat** (beef/lamb/chicken etc.) is assumed to be halal-slaughtered and
is allowed; add a one-line note to the chapter intro saying recipes assume halal-certified
meat.

### 3.2 Uniqueness gate (no recipe the site already has)
Every added recipe must be a dish the site **does not already have**. A candidate matching
**any** existing site recipe (all chapters/collections: book chapters, `add-*`, `osool-*`,
`ec-*`, `fah-*`, kids) is **excluded**, not added as a variant. A dish claimed by several
countries (hummus, baklava, falafel, shawarma, kebab, couscous, dolma, pilaf, biryani…)
goes to **one country only**, the one with the strongest claim per its Wikipedia origin.
Record the assignment in `world/dish_owner.yaml` and never add it again.

Matching, in order:
1. **Normalized title match** against `title`, `titleEn`, and every translated title in all
   `src/data/recipeTranslations*.json`. Arabic normalization: strip tashkeel/tatweel,
   unify أ/إ/آ→ا, ة→ه, ى→ي. Latin normalization: lowercase, strip accents/punctuation,
   singularize. Also compare the dish's local name and common transliterations.
2. **Embedding similarity:** `multilingual-e5-large` over `"<title> | <titleEn> | <top 8
   ingredients>"`. Get top-5 nearest site recipes for each candidate.
3. **LLM judge:** for any neighbour above the threshold (start at cosine 0.86, tune it on the
   pilot), ask the local LLM "same dish (allowing minor regional variation) or a genuinely
   different dish?" **When in doubt, exclude.**

Log every exclusion to `world/duplicates.jsonl` with the matched site id and the reason. Run
this gate **at discovery** (so the slack candidates refill the list) **and again at import**
against everything on `main` at that moment, including world recipes from earlier countries.
Also dedupe within a country (one recipe per dish).

### 3.3 Sources, scraping and copyright
- Obey `robots.txt` (use `urllib.robotparser`). Set a descriptive User-Agent, e.g.
  `fifirecipes-research/1.0 (+https://fifi.cooking)`. Wait **≥3 s between requests per
  domain**, never fetch in parallel against the same domain, and stay under ~1,500 fetches/day
  per domain.
- Cache every fetched page under `world/cache/<domain>/<sha1>.html` and never fetch the same
  URL twice.
- Skip sites whose Terms of Service forbid automated access. Record the decision per domain
  in `world/sites.yaml` (`domain, robots_ok, tos_ok, notes, rate_limit_s`).
- Prefer pages with **schema.org `Recipe` JSON-LD** (parse with the `recipe-scrapers` Python
  package, falling back to `extruct` / raw JSON-LD). Prefer authentic regional sources
  (national food sites, well-known cooks from that country) over generic aggregators.
- **Never download, copy or adapt source photos.** Banners are generated locally.
- **Rewrite** the recipe text in our own words (both Arabic and English), keeping the
  method, quantities, and authenticity. Credit the source in `source` exactly like
  `fatmaAbuHaty.ts`:
  `{ name: "<Site name>", url: "<page url>", collection: "world", citation: "<original dish title>" }`.
- Using Wikipedia: use the MediaWiki API (`action=parse` / `action=query`) and the Wikimedia
  pageviews REST API for ranking. Don't scrape HTML.
- Ranking sites like TasteAtlas may be read for reference but **not scraped**.

---

## 4. Steps

### Step 0: Setup, decisions, and banner pipeline recovery
1. Ask me the §1 decisions (one message). Record the answers in `docs/world-cuisines-progress.md`.
2. `git pull` on main. Make sure `npm ci`, `npm run lint` and `npm run build` pass before any change.
   Note any pre-existing failures.
3. Create `world/` (gitignored), `scripts/world/` and `scripts/world/.venv`; install
   `recipe-scrapers extruct requests beautifulsoup4 pyyaml rapidfuzz sentence-transformers
   mlx-lm pydantic`.
4. **Recover the banner pipeline.** Search for the original `.py` sources: other clones in
   `~/Documents/GitHub/*` (e.g. `fifirecipes-banners-pr`, `fifirecipes_clone`,
   `fifirecipes-clone-2`, `temp_clone`), `git stash list`, Time Machine, VS Code local
   history. If they're not found, **rebuild** `export.ts`, `describe.py`, `generate.py`,
   `publish.py`, `state.py` (and optionally `dashboard.py`) in `scripts/recipe-images/` from
   the description in §2, using the `.pyc` files as reference (`python3.12 -c "import
   dis, marshal; ..."` or `pycdc` if installable) to recover constants like the prompt template
   and SCENE_RULES. Make them accept `--ids-file` so they run on world ids only. Test on 3
   dishes, show me the images, then **commit the restored sources**.

### Step 1: Discovery (`scripts/world/discover.py`)
1. `world/countries.yaml`: all UN member and observer states, with `iso2`, English name,
   Arabic name, a stable `order` (alphabetical by English name), and chapter titles
   (Arabic `"مطبخ <الدولة>"`, English `"<Country> Cuisine"`, plus translations in Step 6).
2. Per country, build up to **130 ranked candidate dishes** (slack for rejections):
   - Gather candidates from Wikipedia "List of <demonym> dishes", "<Country> cuisine", and
     linked dish articles in English **and** the country's main language wiki.
   - Score each by number of independent lists mentioning it + 12-month Wikimedia pageviews
     of its article (sum across languages) + presence on ≥2 recipe sites.
   - Drop inherently haram dishes here (pork/blood/alcohol-defined dishes) → `rejected.jsonl`.
   - Drop duplicates of site recipes / dishes owned by another country (§3.2) → `duplicates.jsonl`.
   - Drop things that aren't recipes (generic ingredients, plain bread products sold
     commercially, raw fruits, drinks that are just brands).
3. Per dish, find **1–3 recipe URLs** with Recipe JSON-LD on allowed sites (§3.3), using web
   search queries like `"<dish> recipe"` and `"<local dish name> <local word for recipe>"`.
4. Output `world/sources/<iso2>.yaml` (`rank, dish, local_name, wiki_url, score, urls[]`) and
   a short markdown report per country.
5. **Pilot gate:** show me the three pilot countries' lists before Step 2.

### Step 2: Distillation (`scripts/world/distill.py`)
For each dish, in rank order:
1. Fetch (cached, rate-limited) → parse Recipe JSON-LD → raw record in `world/raw/<iso2>/`.
2. **Halal gate** on the raw record (both layers). Reject or review as per §3.1.
3. Pick the best source (completeness of ingredients with quantities, clear steps,
   authenticity).
4. LLM rewrite into the compact JSON schema used by `src/data/fatmaAbuHaty/*.json`, extended
   with English:
   ```json
   {
     "id": "w-ma-001",
     "country": "MA",
     "rank": 1,
     "title": "<Arabic title>",
     "titleEn": "<English title>",
     "localName": "<name in local language/script>",
     "category": "<Arabic category, reuse existing category strings where they fit>",
     "categoryEn": "...",
     "method": "<Arabic cooking method>",
     "methodEn": "...",
     "prep": "20 دقيقة", "cook": "45 دقيقة", "servings": "4 أفراد",
     "difficulty": "easy|medium|hard",
     "ingredients": [["<Arabic name>", "<Arabic amount>", "<MasterIngredient category>", "<English name>", "<English amount>"]],
     "steps": [["<Arabic step>", "<phase>", "<English step>"]],
     "notes": "<Arabic: 2–3 sentences on the dish's place in the country's food culture>",
     "notesEn": "...",
     "source": { "name": "...", "url": "...", "citation": "<original title>" }
   }
   ```
   - Amounts in metric (keep spoons/cups where natural); keep Arabic amount style
     consistent with existing recipes (look at several `fah-*` entries).
   - `MasterIngredient` categories and `UniqueInstruction` phases must be valid values
     from `src/types.ts`.
5. **Halal gate again** on the rewritten recipe. Rewriting must not introduce or hide
   anything.
6. Schema-validate (pydantic). Write `world/distilled/<iso2>/<id>.json`.
7. Ids are `w-<iso2 lowercase>-NNN`, numbered by final rank after filtering, and **stable**:
   once an id is assigned to a dish it never changes (store it in state.db).
8. Stop at 100 accepted per country. Print a per-country table:
   candidates / fetched / parsed / halal-rejected / review / duplicates / accepted.

### Step 3: Import into the site (`scripts/world/import.ts`)
1. Add `'world'` to `RecipeSource['collection']` and `RecipeCollection` in `src/types.ts`, and
   wherever collections are listed/labelled (`src/components/RecipeList.tsx`,
   `RecipeDetailModal.tsx`, UI string tables for all languages, `generate-public-index.ts`,
   `generate-tv-index.ts`, `scripts/tv-api.schema.json`). Grep for `'abuhaty'` to find every
   place.
2. Write `src/data/world/<iso2>.json` (Arabic fields + `titleEn`) and
   `src/data/chapters/world.ts` modelled on `fatmaAbuHaty.ts`. Each country gets its own
   `chapter` string and `chapterNumber` = 10 + its `order`, so numbers are stable and don't
   reshuffle when countries are added later. Register `worldRecipes` in `src/data/recipes.ts`.
3. Put the English content into `src/data/recipeTranslations.json` in the same shape existing
   English entries use (check `fah-*` English entries) and fill English titles the way
   `fill-titles.ts` expects.
4. Re-run the **uniqueness gate** (§3.2) against `allRecipes` on current main; enforce ≤100
   per country.
5. **Visibility:** a world recipe must not appear on the site until it has a banner,
   thumbnail, all translations and an estimate. Implement a small "ready" filter (e.g.
   `scripts/world/ready.json` generated by a checker, and `worldRecipes` only exports ready
   ids). Then `npm run build` never fails on half-finished recipes and nothing half-done is
   ever visible.
6. Check the UI with ~200 chapters: chapter filter/dropdown (may need grouping by continent
   or a searchable list), `/chapter/*` routes, home rows, kids section unaffected. If the
   chapter selector becomes unusable, add a continent grouping (`continent` in
   `countries.yaml`). Keep the UI change minimal and consistent with the existing style.
7. Search: make sure a search for the **country name** (in every language) finds that
   country's recipes. If search only covers title/ingredients, add the chapter/country name
   to the indexed fields.

### Step 4: Banners
Run the restored pipeline on the world ids:
`export → describe (brief includes the country and its traditional serving vessel, e.g. tagine
pot, donburi bowl, comal) → generate --model flux2-klein-9b --variants 1 → publish`.
- Run under `caffeinate -i` with nohup, resumable via state.db.
- ~100 s/image. Report throughput after the first 20.
- Spot-check 1 in 20 images (look at them). Regenerate any that show the wrong dish, text,
  hands, clutter, or haram-looking items (wine glasses, bacon garnish).

### Step 5: Thumbnails
`npm run thumbnails`. Verify every world id has both `public/recipe-images/<id>.jpg` and
`public/recipe-images/thumbs/<id>.jpg`.

### Step 6: Translations
1. Target languages = every code in `TOP_20_LANGUAGES` (`src/data/translations.ts`). Arabic
   and English are already done in Step 2.
2. Add country names, chapter titles, and dish names to the glossary
   (`scripts/translations/glossary`, `build-glossary.ts`). Keep dish names in their
   well-known form per language (e.g. "Couscous", "クスクス").
3. Generate a fresh job list for world ids and run the local Gemma engine
   (`~/fifirecipes-translation-work/mlx_translate.py`, `BATCH=20`, `MLX_MODEL` default)
   into its `out/<lang>/<id>.json`, or use the `scripts/translations` drafts/fills flow. Follow
   the rules in `scripts/translations/PROGRESS.md` and add a "World cuisines" ledger section.
4. Merge into `src/data/recipeTranslations<Xx>.json` and run
   `npx tsx scripts/validate-translations.ts`. Fix every new error (re-translate failed or
   garbled outputs; log them in `world/logs/bad-translations.log`).
5. Translate the new UI strings (collection label "World Cuisines", continent names if added)
   into every language.

### Step 7: Nutrition and cost
For every world id, compute an estimate following `scripts/estimates/PROGRESS.md` exactly.
- Local LLM proposes per-ingredient grams + per-100g USDA-typical macros + unit prices;
  Python sums them. A deterministic check enforces the ±15% macro-energy rule and a non-empty
  cost bucket. Retry or flag on failure.
- Append via `scripts/estimates/append.ts` (or the same file/shape it writes) and log
  batches in `scripts/estimates/PROGRESS.md`.
- Sanity bounds: kcal/serving between 20 and 1,500; cost between $0.50 and $80 per recipe.
  Anything outside goes to manual review.

### Step 8: Verification (per chunk, and in full after each country)
1. `npm run lint` and `npm run build` must pass with zero new errors.
2. `npx tsx scripts/validate-translations.ts`: zero new errors.
3. `npm run dev` (port 3000), then in a browser check:
   - languages: **ar** (RTL), **en**, **ja** (CJK), **ur** (RTL non-Arabic);
   - per new country: the chapter appears, recipe cards show thumbnails, detail view shows
     banner, ingredients, steps, cultural note, nutrition + cost panel and source credit;
   - search finds a new recipe by dish name, by country name and by a key ingredient;
   - the collection filter "World Cuisines" works;
   - no console errors.
   Take screenshots into `world/screens/<iso2>/`.
4. Inspect `public/data/tv/index/<lang>.json`, `feed/<lang>.json`, `chapters/<lang>.json`:
   world recipes/chapters are present and valid against `scripts/tv-api.schema.json`. Record
   file sizes. **If any per-language index grows beyond ~2× its current size, stop and
   propose paging/splitting** before continuing. TV devices are memory-constrained.
5. **Apps** (read-only checks unless I approve changes):
   - In each app repo, grep for hard-coded chapter counts/ids, the collection enum
     (`abuhaty`, `osool`…), and chapter-list rendering. Report anything that would break or
     hide `world` recipes or ~200 chapters.
   - Run each repo's existing tests and smoke scripts against the locally built data (e.g.
     `../fifirecipes-samsungtv/scripts/tv-smoke.mjs`; Android `./gradlew test` with Java 17;
     iOS/iPadOS/tvOS `xcodebuild test` on a simulator). Point them at the local build
     (`npx vite preview --port 4174`) if they support a base-URL override.
   - **Don't** bump app versions, sign, or submit to any store. List the needed app changes
     for me.

### Step 9: Shipping in chunks
- Ship **one country at a time, in chunks of about 50 recipes** (a country with ≤60 recipes
  ships in one chunk). Each chunk must be **complete**: data + banner + thumbnail + all
  translations + estimate + `ready` flag, with lint, build and validate-translations passing.
- Commit message: `feat(world): <Country> recipes w-<iso2>-NNN–NNN (<n>)`, with a body
  listing counts (accepted / halal-rejected / duplicates excluded).
- Push per decision 5. For PRs:
  `git switch -c world/<iso2>-<n> origin/main` → commit → push →
  `gh pr create --fill` → wait for checks → `gh pr merge --squash --delete-branch`.
  Pull main before the next chunk.
- Never commit `world/` (cache, state.db, raw pages, logs), `.venv*`, or model files.
- After each chunk, post a 3-line update: country, ids shipped, rejected/duplicate counts,
  and what's next.

---

## 5. Order of work and pacing

1. Step 0 (decisions, baseline build, banner pipeline recovery + 3-image test). **Wait for
   my OK on the test images.**
2. Steps 1–9 for the **3 pilot countries**, end to end. **Then stop and show me** a per-country
   summary, 10 sample recipes per country (Arabic + English), the rejected/review/duplicate
   lists, screenshots, the tv index size deltas, and the measured throughput for each stage
   with an extrapolated total timeline.
3. After my approval, continue **country by country** in `countries.yaml` order without
   asking, scheduling GPU stages back to back (distill LLM → banners → translations →
   estimates for one country while discovery/scraping (CPU/network only) runs ahead for the
   next countries).
4. Stop and ask only for the §0 rule 7 cases, or if more than 10% of a country's
   recipes land in `review.jsonl`.

## 6. Definition of done
- Every country with enough well-documented halal, unique dishes has a chapter with ≤100
  recipes. Countries with fewer real dishes simply have fewer; never pad.
- Every world recipe: unique to the site, halal by both gates, credited source, Arabic +
  English + all other site languages, banner + thumbnail, nutrition + cost, searchable by
  name/country/ingredient, visible on web and in the TV/app data feeds.
- `npm run build` and `validate-translations` clean. All work pushed. `docs/world-cuisines-progress.md`
  is up to date, with final counts and the lists of countries skipped and why.
