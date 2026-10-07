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
| 01–06 | core recipes add-* (240) | done |
| 07–24 | core recipes | pending |
| 25–30 | core recipes (240) | done |
| 31–36 | core recipes fah-* (240) | done |
| 37–47 | core recipes fah-* (440) | done |
| 48 | fah-137 + w-ma-*/w-jp-* (40) | done |
| 49 | world w-jp/w-mx (40) | done |
| 50 | world w-mx/w-ma (40) | done |
| 51 | world w-zh/w-fr/w-vn (40) | done |
| 52 | world w-vn/w-it/w-es (40) | done |
| 53 | world w-es/w-kr (40) | done |
| 54 | world w-in (40) | done |
| 55 | world w-in/w-th (40) | done |
| 56 | world w-th/w-id (40) | done |
| 57 | world w-ir/w-my/w-et (40) | done |
| 58 | world w-et/w-id/w-lb (40) | done |
| 59 | world w-lb/w-my/w-ng/w-gr (40) | done |
| 60 | world w-gr/w-pe/w-ph (20) | done |

## Post-merge

- `npx tsx scripts/translations/amount-cover.mts sq --write` — fills
  `standardAmount` from `norm/sq.json` + `norm-ext/sq.json`; iterate until 0
  unmapped (run against allWorldRecipes too — non-ready w-* ids are not in
  allRecipes).
- `python3 scripts/world/lint_language.py --lang Sq` → 0 findings.
- `python3 scripts/world/halal_i18n.py --lang Sq` → 0 findings.
- `npm run check:world` → no Sq findings (other-language baseline pre-exists).

Status 2026-10-07 (chunks 55–60 landed, 220 w-* recipes):

- write-entries: 220 w-* entries written (chunk-55..60), warnings only
  (optional fields absent in source).
- amount-cover: allRecipes 0 unmapped; w-* run against allWorldRecipes —
  0 unmapped after adding ~245 `exact` amount strings to
  `norm-ext/sq.json` (uncë, kg, inç, kërcell, hellë, tasa, kanaçe…).
- 268 `standardAmount` values that kept Arabic parenthetical tails were
  re-translated in `src/data/recipeTranslationsSq.json` (per-recipe fix,
  guided by `standardAmountEn`).
- lint_language --lang Sq: 119 findings, all `missing entry` for catalog
  w-* recipes belonging to still-pending chunks (48–54). 0 shape/Arabic
  findings on written entries.
- halal_i18n --lang Sq: 0 hits after (a) renaming `sallam` → `suxhuk`
  where the source is halal beef sausage (w-vn-001, w-it-004, w-es-006),
  `proshutë` → `mish i thatë` for halal turkey ham (w-es-009), and
  (b) allowlisting `sallamurë*` (brine) and `gjatë verës`/`në verë`
  (summer) in `scripts/world/halal_i18n.py`.
- halal_audit: 0 haram recipes. check_categories + tsc --noEmit: clean.

## Open flags

Chunks 01–06 (add-* + mixed core ids, translated and validated; flags kept
as source-faithful):

- `chunk-02` / `add-022` — "Homemade Turkish-Style Chicken Mortadella"
  rendered as `Salçiçe e butë pule shtëpiake në stil turk`; the borrowed
  word `mortadelë` was deliberately avoided. Chicken-based, halal in
  source — terminology flag only.
- `chunk-02` / `add-053` — "Crispy Stuffed Mumbar" — sheep casing stuffed
  with rice, traditional halal dish; informational only.
- `chunk-05` / `add-166` — optional filling list mentions `sausage`
  (unspecified type, same concern as earlier `bake-15`/`fah-322` flags).
  Translated `salçiçe`.
- Gelatine, explicitly halal/beef in source (informational only):
  `add-013` (`Xhelatinë mishi lope`), `add-020` (`Xhelatinë halal (mishi
  lope)`), `add-202` (`Xhel luleshtrydhe halal`).
- `add-037` — trotter soup (natural gelatine); `add-179` — pressed beef
  with suet; both halal in source, informational only.
- No pork, bacon, ham (non-halal), or alcohol terms in source or output
  for chunks 01–06. No recipes flagged for removal.

Chunks 25–30 (translated and validated; flags kept as source-faithful):

- `chunk-27` / `bake-15` — ingredient `sausage and olives` + garnish step
  mentions sausage. Sausage type unspecified in source; possibly non-halal.
- `chunk-29` / `fah-322` — ingredient `Sausages` + sauté step. Same concern.
- `chunk-29` / `fah-786` — `Marshmallows` ingredient (gelatin risk).
- `chunk-30` / `fah-808` — served with marshmallows (gelatin risk).
- `chunk-27` / `bake-12` — `grated Rumi cheese` — Rumi/Roumi is a hard
  Egyptian cheese; not alcohol despite the name. Informational only.

Chunks 55–58 (world w-*, translated and validated; flags kept as
source-faithful):

- `chunk-55` / `w-th-003` — `Halal chicken sausage (Chinese style)`.
  Explicitly halal in source; translated as `suxhuk pule halal` —
  informational only.
- `chunk-57` / `w-my-004` — `Char Siu Sauce` ingredient on chicken.
  Commercial char siu sauce is typically pork-free but is a pork-marinade
  product; flag for halal review. Translated source-faithfully as
  `salcë Char Siu`.
- `chunk-58` / `w-lb-009` — `Worcestershire sauce` — some brands contain
  non-halal ingredients/alcohol traces; informational flag.
- `chunk-58` / `w-lb-012` — `marshmallows` ingredient (gelatin risk,
  same as earlier fah-* flags).

Chunks 49–54 (world w-*, translated and validated; flags kept as
source-faithful):

- Halal meat products, explicit in source (informational only):
  `w-vn-001` halal Chinese-style beef sausage (`suxhuk lope në stil
  kinez halal`), `w-it-004` halal beef sausage, `w-es-006` halal beef
  sausages, `w-es-009` halal turkey ham (`mish i thatë pune halal`),
  `w-kr-006` + `w-kr-011` halal chicken luncheon meat,
  `w-kr-022` halal beef or vegetable dumplings.
- Seafood items, source-faithful (halal by most schools; informational):
  shrimp/prawns — `w-mx-002`, `w-cn-007`, `w-cn-016`, `w-vn-001`,
  `w-vn-005`, `w-kr-004`, `w-kr-016`, `w-kr-019`, `w-kr-030`; oysters /
  oyster sauce — `w-jp-040`, `w-cn-005` (vegetarian oyster sauce),
  `w-cn-015`, `w-vn-002`; clams — `w-kr-030`; anchovies/anchovy stock —
  `w-fr-012`, `w-fr-014`, `w-kr-008`, `w-kr-009`, `w-kr-029`, `w-kr-030`.
- `w-in-035` Falooda — `gelatinous` is a texture word for soaked sabja
  seeds, not a gelatin ingredient. No flag.
- No pork, bacon, ham (non-halal), or alcohol terms in source or output
  for chunks 49–54. No recipes flagged for removal.

Chunks 31–36 (core fah-*, translated and validated; flags kept as
source-faithful):

- Processed-meat fillings/ingredients, type unspecified in source —
  halal depends on product; `sausages` → `suxhukë`, `pastrami` →
  `baqarma (mish i konservuar)`/`pastrami`: `chunk-31` fah-215, fah-218;
  `chunk-32` fah-271, fah-272, fah-273, fah-275, fah-276, fah-278,
  fah-285, fah-288; `chunk-33` fah-313.
- `Mayonnaise` (emulsifier/egg-source ambiguity): fah-275, fah-276,
  fah-313, fah-609, fah-461.
- Gelatin/marshmallow/jelly products (gelatin source unspecified):
  fah-548, fah-552, fah-608, fah-613, fah-614, fah-615, fah-618,
  fah-619, fah-620, fah-624, fah-639, fah-648, fah-656, fah-657.
- Instant stock cubes (flavouring source unspecified): fah-206, fah-209,
  fah-302, fah-234, fah-238, fah-239.
- `fah-237` — rabbit meat; halal in itself, informational only.
- No pork, bacon, ham (non-halal), or alcohol terms in source or output
  for chunks 31–36. No recipes flagged for removal.

Chunks 43–48 (fah-* + w-ma-*/w-jp-*, translated and validated; flags kept
as source-faithful):

- Processed-meat ingredients, type unspecified in source — halal depends
  on product: `salami` → `Salam` (`chunk-43` fah-405); `sausage(s)` /
  `sujuk` → `suxhuk` (fah-403, fah-404, fah-406, fah-420, fah-436,
  fah-039, fah-040, fah-048); `pastrami` → `pastrami` (fah-410, fah-418,
  fah-427, fah-429, fah-433, fah-438, fah-442, fah-444, fah-445).
  Egyptian pastirma/sujuk is normally beef; flagged per the standing
  processed-meat convention.
- `chunk-48` / `w-ma-013` — Khlea/gueddid: meat preserved in beef fat;
  traditional halal Moroccan product. Informational only.
- `chunk-48` / `w-ma-025` — stuffed spleen with beef suet; halal offal,
  informational only.
- `chunk-48` / `w-jp-002` — imitation crab (kanikama); fish-based,
  informational only.
- `smen` (fermented clarified butter) in w-ma-012/016/019/020 — halal,
  informational only.
- No pork, bacon, ham (non-halal), or alcohol terms in source or output
  for chunks 43–48. No recipes flagged for removal.

Chunks 59–60 (world w-*, translated and validated; no new halal flags):

- `chunk-59` — 40 recipes (w-lb-026..034, w-my-014..023, w-ng-001..014,
  w-gr-001..007). No pork/alcohol terms in source or output.
- `chunk-60` — 20 recipes (w-gr-008..016, w-pe-001..009, w-ph-001..002).
  No pork/alcohol terms in source or output. Note: `w-pe-004` Anticucho
  uses beef heart — halal in itself; informational only.
