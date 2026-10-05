# World Cuisines — progress

Track record for the world-cuisines encyclopedia build
(`docs/world-cuisines-plan.md`, `docs/world-cuisines-devin-prompt.md`).
Detailed working log lives in the gitignored `world/PROGRESS.md`.

## Decisions (confirmed 2026-10-03)

- Seafood: all fish and seafood allowed (shrimp, crab, mussels, squid…).
- Ambiguous ingredients: default reject/accept/review lists from the prompt.
- One ranked list per country, max 100, never padded.
- Arabic + English authored together at distillation; other 22 languages via
  the local translation pipeline.
- Ship via branch → PR → squash-merge per ~50-recipe chunk.
- Pilots: Morocco (`w-ma-*`), Japan (`w-jp-*`), Mexico (`w-mx-*`).

## Status

| Step | State | Notes |
|---|---|---|
| 0. Setup + banner pipeline | done | committed via PR #238 (`06d02e83`) |
| 1. Discovery | approved by user 2026-10-03 | pilots ma/jp/mx; lists in `world/sources/` |
| 2. Distill | done | 124 drafts → 115 after manual veto; ledgers in `world/` |
| 3. Import | done | `src/data/world/{ma,jp,mx}.json`, 115 entries, `ready:false` |
| 4–7. Assets | in progress | estimates done (115); translations running; banners prepped |
| 8. Verify | not started | web + tv data + app repos |
| 9. Ship | not started | PR per ~50-recipe chunk |

## Step 0 detail

Baseline on `main` (post-pull): `npm ci --legacy-peer-deps`, `npm run lint`,
`npm run build` all green. `validate-translations.ts` has 26 pre-existing
"ingredient key mismatch" errors in each of pt/ru/zh (book chapters only) —
do not count or add to these.

Banner pipeline sources were lost (only `.pyc` remained). Rebuilt from the
disassembly dumps in `scripts/recipe-images/disassembly/`: `state.py`,
`publish.py`, `ship.py`, `generate.py` are faithful reconstructions;
`describe.py`, `export-missing.ts` and `dashboard.py` were written new to the
documented behavior. All accept `--ids`/`--ids-file`; `generate.py` also
reads per-recipe `section`/`refs` overrides from `work/recipes.json`.

GPU test (FLUX.2 klein 9B, quantize 8, 4 steps, refs `meat-03`/`veg-05`):
3 images at ~80 s each, on-style. Approved; sources committed via PR #238.

## Scope (updated 2026-10-04)

User decision: tier-1/tier-2 countries only, **max 50 recipes/country**.
`world/tiers.json` ranks all 195 countries by enwiki "X cuisine" category
size: 31 tier-1 (>=80 members), 77 tier-2 (25-79), 87 tier-3 (<25, skipped).
Scope = 108 countries. `discover.py` refuses tier-3 unless `--force`;
`import.py` caps at `MAX_PER_COUNTRY = 50`; parse `--limit` lowered to 110.

## Step 1 detail

195-country metadata in `world/countries.yaml` (arwiki names, `مطبخ <الدولة>`
chapters). Discovery: `scripts/world/discover.py` ranks Wikipedia category +
list-article + local-wiki candidates by pageviews, filters non-dishes
(wikidata descriptions + category checks), applies the deterministic halal
name gate, and matches recipe URLs on allowlisted sites (sitemaps, WP REST
search, fuzzy transliteration matching). Site duplicates logged to
`world/duplicates.jsonl` (title + e5 embedding suspects).

Pilot results: ma 438 candidates/218 sourced, jp 1,552/303, mx 1,117/256;
top-130 coverage 85/111/104. Residual ~10% noise (ingredient/meta pages)
self-eliminates at distill. User reviewed the ranked lists
(`world/review.html`, `scripts/world/review.py`) and approved 2026-10-03.

Known issue: `dishes.score` inflates cosmetically across resume runs
(`score*1e6+pageviews` re-applied); ordering stays monotonic but the field
should be rewritten before scaling to all 195 countries.

## Live state (2026-10-05)

**Shipped**: 161 recipes across 6 chapters — ma 27, jp 43, mx 49
(visible, `ready:true`, banners+thumbs on main via PRs #239-241), fr 14,
cn 21, vn 7 (`ready:false`, banners generating). All 24 translation
tables 161/161, estimates 161/161, field-level verified.

**Removed**: w-jp-041 Tsukemen — chashu topping is pork by default and
slipped through the gate (no rule for chashu). Vetoed as `jp/tsukemen`;
chashu / char siu / tonkotsu added to `halal_rules.yaml` reject list.

**Mixed-script corruption fix** (`1d736267`): local model left truncated
Latin fragments mid-word in Arabic-script text (فrijوليس, اسcoop,
티ー스poon, بowl, 羊肉börek). Rewrote ~330 fields across the catalog +
11 translation tables. That detector only caught Latin next to native
script; it missed Kurmanji-Latin Kurdish (76 recipes), Hangul/Han/Thai/
Arabic fragments in other scripts, and U+FFFD. Replaced by
`scripts/world/lint_language.py` (`npm run lint:lang`): every field is
split into single-script runs and any run outside the language's allowed
script fails. Run it after every import/distill/translate batch; it must
exit 0.

**Chapter names**: `CHAPTER_NAMES` maps now cover all 21 in-flight
countries (chapters 45/66/69/74/84/85/86/90/92/101/110/117/123/133/144/
145/169/171/181/189/202) × 24 languages. Chapter number = `10 + order`
from `world/countries.yaml`; new countries need a name added per map
when imported.

**Chains running**: GPU banners for fr/cn/vn (42) → then auto-distill
for 15 banked countries (it es kr in th tr id lb et ir my ng gr pe ph).
Discovery chain grinding the remaining 87 tier-1/2 countries
(`world/logs/discover-rest.log`, resumable per-country).
