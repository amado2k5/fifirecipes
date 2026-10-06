---
name: world-cuisines-pipeline
description: Resume or re-run the fifirecipes world-cuisines build — discovery, distillation, halal audit, i18n-fill translations, estimates, FLUX banner generation, and per-country PR shipping with the ship-ready gate.
---

# World Cuisines Pipeline

The operational runbook lives in `docs/WORLD-PIPELINE.md` at the repo root —
read it before resuming any of: country discovery/distillation, halal
certification, per-language translation via `scripts/world/fill-i18n.py`,
nutrition/cost estimates in `src/data/worldRecipeEstimates.ts`, FLUX banner
generation on the Mac, or per-country shipping via
`scripts/recipe-images/work/ship_country.py`.

Key rules: halal + translations run on Devin (never local LLM); distill
sequentially; two FLUX workers max; a country ships only when its
`work/ship-ready/<iso>` marker exists (i.e. all 24 language tables +
estimates complete). TV chapter visibility is gated by
`tvEligibleRecipes` (all picker languages).
