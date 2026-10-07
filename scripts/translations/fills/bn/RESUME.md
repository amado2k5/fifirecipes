# Bengali (bn) rollout — COMPLETE

The bn rollout is finished on branch `lang/bn`. Do NOT merge to `main` without user approval.

## Final state
- **2,380/2,380** recipe translation entries merged into `src/data/recipeTranslationsBn.json` (all 60 `bn-src` chunks).
- **Amounts**: all 25,290 master `standardAmount` values localized — including non-ready world recipes (`allWorldRecipes`), which `amount-cover.mts` does not reach. `scripts/translations/norm-ext/bn.json` (500 exact + units/mods/nouns) was created to cover them. Also fixed mixed-script `গ্রাম` (Arabic `ام`) and a `বিয়ার` (খমিরা البيرة → ইস্ট) leak in `norm/bn.json`.
- **Validation**: `lint_language.py --lang Bn` → 0 findings; `halal_i18n.py --lang Bn` → 0 hits; `check:world` → 0 Bn findings (other languages carry a pre-existing ~7.5k finding baseline).
- **Reveal**: `bn` added to `TOP_20_LANGUAGES` after `te`; `generate-public-index.ts` (21 index pages, 5,642 data files) and `generate-tv-index.ts` (132 files) regenerated.
- **Build**: `npx tsc --noEmit` and `npm run build` pass.

## Notes for future work
- `norm-ext/bn.json` exists now — `loadMap` merges it over `norm/bn.json` automatically.
- The amount translator leaks raw Arabic into `(paren)` tails when the inner phrase is unmapped; always lint after filling amounts. Multi-paren sources need whole-string `exact` entries.
- `amount-cover.mts` iterates `allRecipes` (ready world recipes only); for non-ready `w-*` amounts, translate `ing.standardAmount` over `allWorldRecipes` with `makeTr(loadMap('bn'))`.
