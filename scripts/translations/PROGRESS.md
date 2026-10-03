# Recipe Translation Progress

## Fatma Abu Haty channel activation (808 recipes × 24 languages)

Pipeline: `build-glossary.ts` → `draft-entries.ts <lang> <slug>` → author
`fills/<lang>/<slug>.json` → `apply-fills.ts` → `write-entries.ts` →
(en only) `fill-titles.ts`. Ledger below; `✅` = merged into the table.

| slug | recipes | en | fr | es | ja | hi | pt | ru | zh | de | it | el | ur | fa | tr | ku | id | sw | ko | nl | ps | he | pl | sv |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|stuffed|4|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|legumes|11|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|iceCream|13|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|vegetables|14|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|savory|16|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|fish|20|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|beverages|24|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|salads|24|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|starches|47|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|pastries| 48 |✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|  |  |  |  |  |  |  |
|westernDesserts|57|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|lightDesserts|73|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|easternDesserts|76|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|soups|8|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|sweetPies|106|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
|quick|130|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅||||||||
| meats | 137 |✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|  |  |  |  |  |  |

## Rules

- Translate title, chapter, category, cookingMethod, timing fields, culturalNotes
- Translate all ingredient names but keep standardAmount as-is (measurements/quantities remain in Arabic)
- Translate all instruction text to clear, actionable steps
- Maintain consistency with existing 282 translations for cooking terminology
- Ingredient names should be specific enough to identify but standardized across similar recipes
- Chapter: Always "Chapter 1: Meats, Poultry & Seafood" for meat chapter recipes
- Category: Always "Meats & Poultry" for meat chapter recipes
- Cooking methods: "Grilling", "Pan-Frying", "Slow Simmering (Tasbeek)"

## Translation Sources

1. **Meats & Poultry Chapter** (meat-01 to meat-60): 60 recipes total
   - Translated: meat-01 to meat-07 (prior work)
   - Remaining: meat-33 to meat-60 (28 recipes)

2. **Seafood Chapter** (sea-01 to sea-XX): TBD recipes
3. **Additional Recipes** (additional-01 to additional-XX): 257 recipes
4. **Osool El Tahy** (cookbooks): 324 recipes
5. **Egyptian Cooking** (historical): 94 recipes

**Total untranslated: 727 recipes**

## Batches

### Batch 1: meat-08 to meat-32
- **Date**: 2026-09-24
- **Count**: 25 recipes
- **Status**: ✅ COMPLETE
- **Recipes**: Grilled meats, pan-seared beef, breaded chicken, shawarma, kofta, hamburgers
- **Notes**: All ingredient names translated, standardAmount preserved in original format

---

## Fatma Abu Haty (fah-*) EN Translation Pass

Chapter 10: Fatma Abu Haty Channel Recipes — 808 recipes, EN fills authored per source file.

| File | Count | Status |
|------|-------|--------|
|stuffed|4|✅ merged|
|legumes|11|✅ merged|
|iceCream|13|✅ merged|
|vegetables|14|✅ merged|
|savory|16|✅ merged|
|fish|20|✅ merged|
|beverages|24|✅ merged|
|salads|24|✅ merged|
|starches|47|✅ merged|
 | pastries | 48 | ✅ merged |
|westernDesserts|57|✅ merged|
|lightDesserts|73|✅ merged|
|easternDesserts|76|✅ merged (warn: fah-493/495/499/500/526 no cookTime)|
|sweetPies|106|✅ merged (clean)|
|soups|8|✅ merged|
|quick|130|✅ merged (clean)|
| meats | 137 | ✅ merged (warn: fah-078/101 no cookTime in source) |

EN merged so far: **808 / 808 — COMPLETE**

## FR Translation Pass

All 17 files merged into `recipeTranslationsFr.json` — **808 / 808 — COMPLETE**.
meats merged with 3 non-fatal warnings (fah-040 no cookingMethod,
fah-078/fah-101 no cookTime — all absent from source META).

## ES Translation Pass

| File | Count | Status |
|------|-------|--------|
|stuffed|4|✅ merged|
|legumes|11|✅ merged|
|iceCream|13|✅ merged|
|vegetables|14|✅ merged|
|savory|16|✅ merged|
|fish|20|✅ merged|
|beverages|24|✅ merged|
|salads|24|✅ merged|
|starches|47|✅ merged|
 | pastries | 48 | ✅ merged |
|soups|8|✅ merged|
|westernDesserts|57|✅ merged|
|lightDesserts|73|✅ merged|
|easternDesserts|76|✅ merged|
|sweetPies|106|✅ merged|
|quick|130|✅ merged (clean)|
| meats | 137 | ✅ merged |

ES merged so far: **808 / 808 — COMPLETE**

## JA Translation Pass

All 17 files merged into `recipeTranslationsJa.json` — **808 / 808 — COMPLETE**.
meats merged with 3 non-fatal warnings (fah-040 no cookingMethod,
fah-078/fah-101 no cookTime — all absent from source META).

| File | Count | Status |
|------|-------|--------|
|stuffed|4|✅ merged|
|legumes|11|✅ merged|
|iceCream|13|✅ merged|
|vegetables|14|✅ merged|
|savory|16|✅ merged|
|fish|20|✅ merged|
|beverages|24|✅ merged|
|salads|24|✅ merged|
|starches|47|✅ merged|
 | pastries | 48 | ✅ merged |
|soups|8|✅ merged|
|westernDesserts|57|✅ merged|
|lightDesserts|73|✅ merged|
|easternDesserts|76|✅ merged (warn: fah-491 no cookingMethod; fah-493/495/499/500/526 no cookTime — all absent from source)|
|sweetPies|106|✅ merged|
|quick|130|✅ merged (clean)|
| meats | 137 | ✅ merged (warn: fah-040 no cookingMethod; fah-078/101 no cookTime — absent from source) |

JA merged so far: **808 / 808 — COMPLETE**

## HI Translation Pass

All 17 files merged into `recipeTranslationsHi.json` — **808 / 808 — COMPLETE**.
meats merged with 2 non-fatal warnings (fah-078/fah-101 no cookTime —
absent from source META; fah-040 cookingMethod filled with "भाप में पकाना" / steam).

| File | Count | Status |
|------|-------|--------|
| stuffed | 4 | ✅ merged |
| legumes | 11 | ✅ merged |
| iceCream | 13 | ✅ merged |||||||||||||| ✅ |||||||||
| vegetables | 14 | ✅ merged |
| savory | 16 | ✅ merged |||||||||||||| ✅ |||||||||
| fish | 20 | ✅ merged |
| beverages | 24 | ✅ merged |||||||||||||| ✅ |||||||||
| salads | 24 | ✅ merged |
| starches | 47 | ✅ merged |
| pastries | 48 | ✅ merged |||||||||||||| ✅ |||||||||
| soups | 8 | ✅ merged |
| westernDesserts | 57 | ✅ merged |
| lightDesserts | 73 | ✅ merged |
| easternDesserts | 76 | ✅ merged |
| sweetPies | 106 | ✅ merged |
| quick | 130 | ✅ merged |
| meats | 137 | ✅ merged (warn: fah-078/101 no cookTime — absent from source) |

HI merged so far: **808 / 808 — COMPLETE**

## PT Translation Pass

| File | Count | Status |
|------|-------|--------|
| stuffed | 4 | ✅ merged |
| legumes | 11 | ✅ merged |
| iceCream | 13 | ✅ merged |||||||||||||| ✅ |||||||||
| vegetables | 14 | ✅ merged |
| savory | 16 | ✅ merged |||||||||||||| ✅ |||||||||
| fish | 20 | ✅ merged |
| beverages | 24 | ✅ merged |||||||||||||| ✅ |||||||||
| salads | 24 | ✅ merged |
| starches | 47 | ✅ merged |
| pastries | 48 | ✅ merged |||||||||||||| ✅ |||||||||
| soups | 8 | ✅ merged |
| westernDesserts | 57 | ✅ merged |
| lightDesserts | 73 | ✅ merged |
| easternDesserts | 76 | ✅ merged |
| sweetPies | 106 | ✅ merged |
| quick | 130 | ✅ merged |
| meats | 137 | ✅ merged |

PT merged so far: **808 / 808** — COMPLETE

## RU Translation Pass

| File | Count | Status |
|------|-------|--------|
| stuffed | 4 | ✅ merged |
| legumes | 11 | ✅ merged |
| iceCream | 13 | ✅ merged |||||||||||||| ✅ |||||||||
| vegetables | 14 | ✅ merged |
| savory | 16 | ✅ merged |||||||||||||| ✅ |||||||||
| fish | 20 | ✅ merged |
| beverages | 24 | ✅ merged |||||||||||||| ✅ |||||||||
| salads | 24 | ✅ merged |
| starches | 47 | ✅ merged |
| pastries | 48 | ✅ merged |||||||||||||| ✅ |||||||||
| soups | 8 | ✅ merged |
| westernDesserts | 57 | ✅ merged |
| lightDesserts | 73 | ✅ merged |
| easternDesserts | 76 | ✅ merged |
| sweetPies | 106 | ✅ merged |
| quick | 130 | ✅ merged |
| meats | 137 | ✅ merged (warn: fah-078/101 no cookTime — absent from source) |

RU merged so far: **808 / 808** — COMPLETE

## ZH Translation Pass

| File | Count | Status |
|------|-------|--------|
| stuffed | 4 | ✅ merged |
| legumes | 11 | ✅ merged |
| iceCream | 13 | ✅ merged |||||||||||||| ✅ |||||||||
| vegetables | 14 | ✅ merged |
| savory | 16 | ✅ merged |||||||||||||| ✅ |||||||||
| fish | 20 | ✅ merged |
| beverages | 24 | ✅ merged |||||||||||||| ✅ |||||||||
| salads | 24 | ✅ merged |
| starches | 47 | ✅ merged |
| pastries | 48 | ✅ merged |||||||||||||| ✅ |||||||||
| soups | 8 | ✅ merged |
| westernDesserts | 57 | ✅ merged |
| lightDesserts | 73 | ✅ merged |
| easternDesserts | 76 | ✅ merged |
| sweetPies | 106 | ✅ merged |
| quick | 130 | ✅ merged |
| meats | 137 | ✅ merged (warn: fah-078/101 no cookTime — absent from source) |

ZH merged so far: **808 / 808** — COMPLETE

## DE — German

All 17 files merged into `recipeTranslationsDe.json` — **808 / 808 — COMPLETE**.
meats merged with 2 non-fatal warnings (fah-078/101 no cookTime — absent from source); fah-040 cookingMethod filled (Dämpfen).

## IT — Italian (complete: 808 / 808)

Merged into `recipeTranslationsIt.json`: stuffed, legumes, iceCream,
vegetables, savory, fish, beverages, salads, soups, starches, pastries,
westernDesserts, lightDesserts, easternDesserts, sweetPies, quick, meats.
All warnings were source-side gaps (missing cookTime in EN source);
easternDesserts fah-491 cookingMethod filled (Cottura a vapore);
meats fah-040 cookingMethod filled (Cottura a vapore).

## EL — Greek

808/808 COMPLETE — all 17 categories merged into `recipeTranslationsEl.json`:
stuffed(4), legumes(11), iceCream(13), vegetables(14), savory(16), fish(20),
beverages(24), salads(24), soups(8), starches(47), pastries(48),
westernDesserts(57), lightDesserts(73), easternDesserts(76), sweetPies(106),
quick(130), meats(137). All warnings were source-side gaps (missing cookTime
in EN source); easternDesserts fah-491 and meats fah-040 cookingMethod filled
(Ατμός).
## UR — Urdu

808/808 — all 17 categories merged into `recipeTranslationsUr.json`:
stuffed(4), legumes(11), iceCream(13), vegetables(14), savory(16), fish(20),
beverages(24), salads(24), soups(8), starches(47), pastries(48),
westernDesserts(57), lightDesserts(73), easternDesserts(76), sweetPies(106),
quick(130), meats(137). All warnings were source-side gaps
(missing cookTime in EN source); easternDesserts fah-491 cookingMethod
filled (بخار میں پکانا). fix-amounts.mjs patched: Urdu is Arabic script, so
the "result must contain no Arabic-range chars" guard rejected every
conversion — now writes any successful, changed translation.

## FA — Persian

- Drafts generated for all 17 categories; `norm-fa.mjs` + `fix-amounts` normalize amounts to Persian units.
- All 17 categories merged → **808 / 808 COMPLETE**.
- `meats` merged with 2 non-fatal warnings (fah-078/fah-101 no cookTime in source).
- Empty `cookTime` fields are source-side gaps (same as other languages).

## TR — Turkish

All 17 files merged into `recipeTranslationsTr.json` — **808 / 808 — COMPLETE**.
`meats` merged with 3 non-fatal warnings (fah-040 no cookingMethod,
fah-078/fah-101 no cookTime — all source-side gaps). `quick` merged clean.
Audit: 0 absent, 0 incomplete.

## KU — Kurdish (Kurmanji)

- `norm/ku.json` extended with Kurdish unit/meta strings (kes, saet, min, etc.); `fix-amounts` `نصف`-before-`نص` parser fix applied.
- `meats` merged (137/137); `quick` merged (130/130) → **267 / 808**.
- `fish` (20), `vegetables` (14), `legumes` (11), `stuffed` (4), `starches` (47), `soups` (8), `salads` (24) merged → **395 / 808**.
- 3 non-fatal warnings: fah-040 no cookingMethod; fah-078/fah-101 no cookTime — all absent from source.
- `quick` merged clean: 0 Arabic remnants, 0 empty fields; audit shows 0 incomplete ku fah-* entries.
- fah-138..fah-265 batch merged clean: 0 Arabic remnants, 0 empty fields; 15 empty `cookTime` are source-side gaps (same as en).
- `pastries` (48), `savory` (16), `iceCream` (13), `beverages` (24) merged clean → **496 / 808**.
- `easternDesserts` (76), `westernDesserts` (57) merged clean → **629 / 808**; 6 empty `cookTime` (fah-495/499/500/526/539/565) are source-side gaps (same as en).
- `lightDesserts` (73) merged clean → **702 / 808**; 12 empty `cookTime` are source-side gaps (no-bake recipes).
- `sweetPies` (106) merged clean → **808 / 808 — complete**. Audit: 0 incomplete, 0 Arabic leaks; no source-side `cookTime` gaps in this category.

## ID — Indonesian

- Glossary built (3,022 ingredient mappings); `norm/id.json` extended with
  meta/servings/time strings (`orang`, `menit`, `jam`, `potong`, `buah`,
  `sejumput`, `sesuai selera`).
- `meats` merged with 3 non-fatal warnings (fah-040 no cookingMethod;
  fah-078/fah-101 no cookTime — all absent from source).
- `quick` (130) merged — table at 1,340 entries (267/808 fah-*).
- `fish` (20), `vegetables` (14), `legumes` (11), `stuffed` (4),
  `starches` (47), `soups` (8), `salads` (24) merged — 128 recipes.
  Table at 1,468 entries (395/808 fah-*). 7 no-cookTime warnings
  (fah-146/147/157/165/257/263/265) are source-side gaps — all are
  no-cook recipes (preserves, pickles, sauces).
- `savory` (16), `iceCream` (13), `beverages` (24), `pastries` (48)
  merged — 101 recipes. Table at 1,569 entries (496/808 fah-*).
  3 no-cookTime warnings (fah-316/782/807) are source-side gaps —
  all confirmed empty in EN source.
- `westernDesserts` (57), `lightDesserts` (73), `easternDesserts` (76),
  `sweetPies` (106) merged — 312 recipes. Table at 1,881 entries —
  **808/808 fah-* complete**. Full audit: 0 incomplete, 0 Arabic leaks.
  `cookTime` warnings during merge are source-side gaps (no-bake recipes).

## SW — Swahili

- `norm/sw.json` extended with servings/time mappings (watu, vipande, dakika, saa).
- `fix-amounts.mjs` patched: `نصف` now tokenized before `نص` (NUM_RE alternation order).
- meats(137) merged → 137/808. warnings: fah-078/fah-101 no cookTime in source.
- meats fah-040 cookingMethod filled (Kupika kwa Mvuke).
- quick(100/130) merged → 237/808 (milestone merge; remaining 30 pending).
- Remaining: quick tail (30) + 15 categories.
