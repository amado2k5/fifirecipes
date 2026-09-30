# Fatma Abu Haty recipe import — status

Branch: `feat/fatma-abu-haty-recipes` (worktree `fifirecipes-abuhaty`)

## Done

- **Import**: 808 deduplicated recipes (`fah-001`…`fah-808`) from `drafts.jsonl`
  (944 drafts → 942 usable → 941 imported → 808 after same-dish dedup).
  Chapter 10 `src/data/chapters/fatmaAbuHaty.ts`, data in `src/data/fatmaAbuHaty/*.json`,
  `abuhaty` collection, `citationVideo` label, per-recipe source video wiring.
- **Estimates**: nutrition + cost for all 808 appended to `src/data/missingEstimates.ts`.
- **Image prompts**: `image-prompts/descriptions.md` (808 lines) +
  `image-prompts/gemini-prompt.md`. Actual banner generation deferred by user.
- **Translation pipeline**: `translate/translate.py` (mlx_lm batch, resumable),
  `translate/assemble.py` (merges into `recipeTranslations*.json`).

## In progress — translations (Phase 4)

Paused mid-run. Per-language progress lives in `translate/out/<lang>.jsonl`
(gitignored — do NOT clean that folder).

| lang | status |
|---|---|
| en | DONE 808/808 |
| fr | 805 done, 3 failed (needs retry) |
| es | 806 done, 2 failed |
| ja | 805 done, 3 failed |
| hi | 806 done, 2 failed |
| pt | 300/808 in progress |
| ru zh de it el ur fa tr ku id sw ko nl ps he pl sv | not started (17) |

Failures are listed in `translate/out/<lang>.errors.jsonl`; re-running the
command retries them (a recipe is only "done" once written to `<lang>.jsonl`).

## To resume

```bash
cd transcripts/channel-fatma-abu-haty/translate
/opt/homebrew/Caskroom/miniconda/base/bin/python3 translate.py \
  --lang en,fr,es,ja,hi,pt,ru,zh,de,it,el,ur,fa,tr,ku,id,sw,ko,nl,ps,he,pl,sv \
  --batch 20 > run1.log 2>&1 &
```

Then merge each finished language:

```bash
python3 translate/assemble.py en fr es ja hi pt ru zh de it el ur fa tr ku id sw ko nl ps he pl sv
npx tsx scripts/validate-translations.ts   # run from repo root
```

`assemble.py en` also writes `src/data/fatmaAbuHaty/titlesEn.json`.

## Remaining (Phase 5)

- [ ] Wire `fatmaAbuHatyRecipes` into `allRecipes` in `src/data/recipes.ts`
      (do this only AFTER all 23 language tables are complete — the
      `generateTvData()` gate fails the build otherwise)
- [ ] `npm run lint`, `npx tsx scripts/validate-translations.ts`,
      `npx tsx scripts/generate-public-index.ts`, build + smoke check
- [ ] Banner images: deferred — generate via `image-prompts/` sheet later,
      drop into `public/recipe-images/fah-NNN.jpg`, add `idRange('fah',1,808)`
      to `RECIPES_WITH_IMAGES`, run `npm run thumbnails`
- [ ] Push + PR (partial: branch pushed/merged mid-way on user request)
