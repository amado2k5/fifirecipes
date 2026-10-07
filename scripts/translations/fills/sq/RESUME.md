# sq rollout tracker

Source: `fills/sq-src/chunk-01..60.json` (2380 recipes) + `kids.json` (50).
Read `CONVENTIONS.md` first — pinned chapter/category/method/unit strings.

Per chunk: translate into `fills/sq/chunk-NN.partK.json` (~10–15 recipes per
part), combine into `fills/sq/chunk-NN.json`, then:

    npx tsx scripts/translations/write-entries.ts sq scripts/translations/fills/sq/chunk-NN.json

Errors from write-entries = missing ids / empty fields / wrong ingredient or
step keys — fix the fill and rerun. Warnings = optional fields absent.

| chunk | ids | status |
|---|---|---|
| 01–47 | core recipes (1881) | pending |
| 48–60 | world w-* (499) | pending |

## Post-merge

- `npx tsx scripts/translations/amount-cover.mts sq --write` — fills
  `standardAmount` from `norm/sq.json` + `norm-ext/sq.json`; iterate until 0
  unmapped (run against allWorldRecipes too — non-ready w-* ids are not in
  allRecipes).
- `python3 scripts/world/lint_language.py --lang Sq` → 0 findings.
- `python3 scripts/world/halal_i18n.py --lang Sq` → 0 findings.
- `npm run check:world` → no Sq findings (other-language baseline pre-exists).

## Open flags

(none yet — agents: note any source entries that mention pork/alcohol or were
untranslatable here)
