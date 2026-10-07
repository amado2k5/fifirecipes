# Bengali (bn) rollout — resume prompt

Paste this into a fresh Devin session to resume after a restart:

---

Continue the Bengali (bn) language rollout in `/Users/ahmedabdelaal/Documents/GitHub/uber_eats/fifirecipes` on branch `lang/bn`. Read `scripts/translations/fills/bn/RESUME.md` for full state. Do NOT commit or merge to `main` until everything is complete.

## Already done — do not redo
- Website infra: `bn` in `SupportedLanguage`, `UI_TRANSLATIONS.bn`, `detectUserLocale`, Noto Sans Bengali webfont + `[lang="bn"]` CSS, all 5 vocab tables in `recipeLocalization.ts`, `bn` blocks in `additionalRecipesText`/`estimateTranslations`/`videoTranslations`/`videoQuery`, all `t()` call sites, kids i18n (`src/kids/i18n/bn.ts`, `SPEECH_LANG` bn-BD, `KIDS_TOGGLE_LABELS.bn`), generator wiring, `norm/bn.json` (100% of 19,699 Arabic amounts mapped), world linters know Bn.
- Kids mode: `src/data/kids/translations/bn.json` (50 recipes), `public/data/kids/bn/` generated.
- ALL apps complete and validated: Fire TV, Samsung TV, tvOS, iOS, iPadOS, Android (each has Bengali strings + allergens + fonts + tests/builds green). Do not touch sibling app repos.

## What remains

Merged so far: **840/2380** — chunks
01 02 03 07 08 09 11 13 16 17 18 19 22 23 24 27 30 31 43 46 56.

Still missing (translate these): 04 05 06 10 12 14 15 20 21 25 26
28 29 32 33 34 35 36 37 38 39 40 41 42 44 45 47 48 49 50 51 52 53
54 55 57 58 59 60.

0. **FIRST merge any unmerged fills**: for each `fills/bn/chunk-NN.json` whose recipe IDs are not yet in `src/data/recipeTranslationsBn.json`, run:
   `npx tsx scripts/translations/write-entries.ts bn scripts/translations/fills/bn/chunk-NN.json`
   (Background translation agents may have written fills between the last commit and now — check `git status`/`ls` for uncommitted fills and commit them too.)
   Agents may also leave `chunk-NN.partK.json` files: if `chunk-NN.json` exists and verifies, parts are stale — delete them. If only parts exist, merge whichever parts cover all source recipe IDs (or just retranslate the chunk).

1. **Recipe translations** — `scripts/translations/fills/bn-src/chunk-*.json` holds 60 English source chunks (~40 recipes each, 2,380 total). For every `bn-src/chunk-NN.json` that has NO corresponding `fills/bn/chunk-NN.json`, translate it and write `fills/bn/chunk-NN.json`. Then merge via write-entries.ts as above.

   Per-entry fill format (same recipe IDs as source):
   - `title`: Bengali translation
   - `chapter`/`category`/`cookingMethod`: translate if present; omit if absent
   - `prepTime`/`cookTime`/`servings`: natural Bengali ("15 মিনিট", "4-6 জন"), numbers identical
   - `culturalNotes`: full translation if present; omit if absent (keep "" if source "")
   - `ingredients`: same ingredient IDs, each `{"name": "<Bengali>"}` — never `standardAmount` (filled mechanically)
   - `instructions`: same step keys, full Bengali per step — never drop/merge/summarize

   Rules: genuine fluent Bengali, no Latin/Arabic leakage in values, preserve all numbers/units/temperatures/negations, never convert units, transliterate brand/dish names. Verify each file: same recipe IDs, same ingredient IDs, same step keys, zero `[A-Za-z]` in values.

2. **Amounts**: `npx tsx scripts/translations/amount-cover.mts bn --write` — fills `standardAmount` from `norm/bn.json`.

3. **Validate**: all 2,380 IDs in `recipeTranslationsBn.json`; `python3 scripts/world/lint_language.py bn` shows 0 bn findings; `python3 scripts/world/halal_i18n.py bn` clean.

4. **Reveal**: add `bn` to `TOP_20_LANGUAGES` in `src/data/translations.ts`: `{ code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr', flag: '🇧🇩' }` after the `te` entry. Regenerate: `npx tsx scripts/generate-public-index.ts` and `npx tsx scripts/generate-tv-index.ts` (and any other `generate-*` scripts that emit per-language output).

5. **Final validation**: `npx tsc --noEmit` and `npm run build` must pass. `npm run check:world` has pre-existing non-bn findings (baseline red on main) — Bengali-specific findings must be zero. Then report done; user decides when to merge `lang/bn` → `main`.

## Caution
- Agents/subagents may die on session restarts — chunk fills on disk are durable; always check `ls scripts/translations/fills/bn/` to see what's actually done before relaunching translation work.
