# World Cuisines pipeline — operational runbook

How to resume or re-run the tier-1/tier-2 world-cuisine build. Read this plus
`docs/TRANSLATION_GUIDE.md` and `AGENTS.md` before touching `src/data/`.

## Scope and end state

- 108 countries (31 tier-1 + 77 tier-2, list is in `scripts/world/` country
  tables and `world/sources/<iso>.yaml`), **max 50 recipes per country**.
- Each country = one `chapterNumber` in `src/data/world/<iso>.json` + one
  "chapter" on the site/TV.
- Every recipe must be: halal-audited, translated into all 24 language tables,
  have a banner + thumbnail, and nutrition+cost estimates — **before** its
  chapter is considered done.

## Directory map

| Path | Purpose |
|---|---|
| `world/sources/<iso>.yaml` | discovered source lists per country |
| `world/distilled/<iso>/` | draft JSONs produced by distillation |
| `scripts/world/state.db` | SQLite ledger (halal status, discovery state) |
| `src/data/world/<iso>.json` | imported catalog (chapter data, Arabic fields) |
| `src/data/world/index.ts` | wires every `w_<iso>` catalog into the app |
| `src/data/recipeTranslations*.json` | per-language tables (En + 23) |
| `src/data/worldRecipeEstimates.ts` | nutrition + USD cost per recipe |
| `scripts/recipe-images/` | image pipeline (gitignored — see AGENTS.md) |
| `scripts/recipe-images/work/state.db` | image statuses: pending → described → generated → approved → published → shipped |
| `scripts/recipe-images/work/ship-ready/<iso>` | **Devin gate**: file exists ⇒ country may ship |

## Pipeline phases

1. **Discover** (`scripts/world/discover.py`) — banks source lists to
   `world/sources/`. Was stopped at ~85/108 countries by user request.
2. **Distill** (`scripts/world/distill.py`) — local Mac LLM drafts recipes from
   sources into `world/distilled/<iso>/`. MUST run sequentially (parallel runs
   OOM-crashed the 128 GB Mac). Skips already-done dishes; rejects
   source/dish mismatches.
3. **Import** (`scripts/world/postdistill.py` watcher / `import.py`) — drafts →
   `src/data/world/<iso>.json`, syncs En table, seeds image briefs into
   `scripts/recipe-images/work/state.db` (status `described`).
   Countries imported before brief-seeding existed need manual seeding:
   `postdistill.seed_banners()` (done for `it`, `es`).
4. **Halal audit — Devin only, never the local model.** Deterministic scan
   (`scripts/world/halal.py` + `halal_rules.yaml`) then semantic review of
   ingredients/steps/titles for hidden pork/alcohol (spam, lap cheong, bushmeat,
   gelatin/jello, extracts, generic "meat", "dumplings"). Fix by substituting
   halal equivalents in catalog + draft, or veto the recipe.
5. **Translations — Devin only.** Source entries:
   `scripts/world/i18n-fill/source-<iso>.json` (export English rows).
   Write `scripts/world/i18n-fill/<Lang>.json` (keyed by recipe id; fields
   `title, ingredients{id:{name,standardAmount}}, instructions{n:text},
   culturalNotes, chapter`), MERGE with existing file, then
   `python3 scripts/world/fill-i18n.py --apply <code>`. Languages:
   De El Es Fa Fr He Hi Id It Ja Ko Ku Nl Pl Ps Pt Ru Sv Sw Te Tr Ur Zh (+En).
   Kurdish = Kurmanji Latin script.
6. **Estimates** — append per-recipe nutrition/cost entries to
   `src/data/worldRecipeEstimates.ts` (format copied from existing entries;
   cost buckets: protein dairyEggs produce grains fats sweeteners specialty
   spices). `npx tsc --noEmit` must pass.
7. **Banners** — FLUX.2-klein-9B on the Mac, **two** concurrent workers max:
   `.venv-mflux/bin/python generate.py --model flux2-klein-9b --ids-file work/halfA.txt`
   (and `halfB.txt`). ~5–6 min/image with 2 workers. Candidates land in
   `work/candidates/flux2-klein-9b/`. No `--publish-every/--merge-every` flags.
8. **Ship** — `/tmp/country-shipper.sh` sweeps every 5 min and calls
   `work/ship_country.py <iso>`, which approves→publishes→thumbnails→registry→
   PR→squash-merge **only if `work/ship-ready/<iso>` exists**. Create that
   marker (`touch work/ship-ready/<iso>`) only when phases 5+6 are complete for
   the country AND all its banners are generated. PRs merge into
   `../fifirecipes-banners-pr` worktree; merges log to
   `world/logs/country-ships.log`.

## Visibility gates

- **fifi.cooking + all apps**: live as soon as catalog + images merge (GitHub
  Pages deploys `main` automatically).
- **FireTV/TV chapter rail**: `tvEligibleRecipes` in
  `scripts/generate-tv-index.ts` requires every `TOP_20_LANGUAGES` entry (25
  picker languages incl. sv/te; `ar` exempt — Arabic lives in the catalog) to
  have title+ingredients+instructions for every recipe in the chapter. A
  chapter stays invisible on TV until its last language lands.

## Verification

- `npm run check:world` before every commit touching `src/data/`.
- `npx tsc --noEmit` after editing `worldRecipeEstimates.ts`.
- `python3 scripts/world/fill-i18n.py --status` for translation coverage.

## Resume checklist (where things stood 2026-10-06)

- Distill: complete for `it es kr in th tr id lb et ir my ng gr pe ph`.
- Shipped: `es` (PR #270), `et` (PR #271) — both shipped BEFORE the
  translation/estimate gate existed; backfill their remaining languages on main.
- Image queue order: `es et gr id in ir it kr lb my ng pe ph th tr`.
- Spain translations: 9/24 done (en es fr de it tr nl pt ru); 15 to go.
- Ethiopia: needs translations (23 langs × 5 recipes) + estimates.
- All later countries: estimates + 23-language translations still pending;
  ship only after `ship-ready` marker is created.
- `work/ship-ready/`: create per country when phases 5+6 finish.
