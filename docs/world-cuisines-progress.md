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
| 0. Setup + banner pipeline | awaiting user OK on 3 test banners | sources rebuilt from bytecode, see `scripts/recipe-images/` |
| 1. Discovery | not started | `scripts/world/discover.py` |
| 2. Distill | not started | `scripts/world/distill.py` |
| 3. Import | not started | `scripts/world/import.ts` |
| 4–7. Assets | not started | banners, thumbs, translations, estimates |
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
3 images at ~80 s each, on-style. Pending user sign-off, then the restored
sources get committed.
