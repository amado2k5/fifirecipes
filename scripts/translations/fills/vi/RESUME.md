# Vietnamese (vi) translation rollout — RESUME

Branch: `lang/vi` (off latest main incl. bn merge).
Goal: all 2,380 recipe translations + all site/app strings in Vietnamese.

## State

- `fills/vi-src/chunk-01..60.json` — English source (2,380 recipes, copied
  from bn-src; same chunk boundaries/IDs).
- `fills/vi-src/kids.json` — 50 kids recipes (English source).
- `fills/vi/chunk-NN.json` — completed Vietnamese fills (merge targets).
- `src/data/recipeTranslationsVi.json` — target table (starts as `{}`).

## Fill spec (same as bn)

For each source entry: same recipe ID, same top-level keys. Translate ALL
values to fluent Vietnamese. Ingredients: same IDs, `{"name": "<vi>"}` ONLY —
never `standardAmount`. Instructions: same step keys, never drop/merge/
summarize. Keep `chapter`/`category`/`cookingMethod`/`prepTime`/`cookTime`/
`servings`/`culturalNotes` translated; keep `culturalNotes` empty `""` if
source is empty. Preserve numbers, °C/°F, units verbatim. No Arabic script,
no non-Vietnamese foreign words (except units/brand names where natural).
Halal: never introduce thịt lợn/heo, giăm bông, ba rọi, mỡ lợn, rượu, cồn,
bia (except "men bia" = brewer's yeast), vodka, whisky, brandy, thịt gấu,
thịt ngựa, thịt chó.

Empty-source instruction steps: use `—` (em dash) — established bn
convention for genuinely empty steps (e.g. w-my-014, w-gr-005).

## Merge

`npx tsx scripts/translations/write-entries.ts vi scripts/translations/fills/vi/chunk-NN.json`

## Amounts

After all 60 chunks: `npx tsx scripts/translations/amount-cover.mts vi --write`
PLUS a pass over `allWorldRecipes` (non-ready world recipes are NOT in
`allRecipes`) — see /tmp pattern used for bn. Mappings in
`scripts/translations/norm/vi.json` + `norm-ext/vi.json`.
Watch: the `(paren)` fallback emits raw source text when unmapped — every
written value must be re-linted for Arabic/Latin leakage.

## Validation gates (all must pass)

- 2,380 IDs in `recipeTranslationsVi.json`
- `python3 scripts/world/lint_language.py --lang Vi` → 0 findings
- `python3 scripts/world/halal_i18n.py --lang Vi` → 0 hits
- `npm run check:world` → 0 Vi findings (pre-existing non-vi baseline is ok)
- `npx tsc --noEmit` and `npm run build` pass
- `npx tsx scripts/generate-public-index.ts` + `generate-tv-index.ts`

## Status: IN PROGRESS — infra + src generated, agents translating.
