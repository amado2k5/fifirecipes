# Romanian (ro) rollout tracker

Source: `fills/ro-src/chunk-01..60.json` (English, 2380 recipes) + `kids.json`.
Output: `fills/ro/chunk-NN.json` → `npx tsx scripts/translations/write-entries.ts ro <file>`.
Rules: `CONVENTIONS.md` here + `docs/TRANSLATION_GUIDE.md`.

## Per-chunk gate

1. `npx tsx scripts/translations/write-entries.ts ro scripts/translations/fills/ro/chunk-NN.json`
2. `python3 scripts/world/lint_language.py --lang Ro` (script findings 0; "missing entry" only for untranslated chunks)
3. `python3 scripts/world/halal_i18n.py --lang Ro` → 0 hits
4. Digit parity: every number in each field matches the English

## Done

- UI, biography, estimates, videos, technology page, diet strings, kids mode (50 recipes, `src/data/kids/translations/ro.json`)

## Chunks

| chunk | status |
|---|---|
| 01 | done |
| 02 | done |
| 03 | done |
| 04 | done |
| 05 | done |
| 06 | done |
| 07 | done |
| 08 | done |
| 09 | done |
| 10 | done |
| 11 | done |
| 12 | done |
| 13 | done |
| 14 | done |
| 15 | done |
| 16 | done |
| 17 | done |
| 18 | done |
| 19 | done |
| 20 | done |
| 21 | done |
| 22 | done |
| 23 | done |
| 24 | done |
| 25 | done |
| 26 | done |
| 27 | done |
| 28 | done |
| 29 | done |
| 30 | done |
| 31 | done |
| 32 | done |
| 33 | done |
| 34 | done |
| 35 | done |
| 36 | done |
| 37 | done |
| 38 | done |
| 39 | done |
| 40 | done |
| 41 | done |
| 42–60 | pending |

## Final

- `npx tsx scripts/translations/amount-cover.mts ro --write`, `audit-amounts.mts`, `audit.ts`
- `npm run check:world`, `npm run build`
- Reveal: add `ro` to `TOP_20_LANGUAGES` (translations.ts) and `SUPPORTED_LANGUAGES` (generate-public-index.ts)
