# Recipe Translation Progress

## Fatma Abu Haty channel activation (808 recipes × 24 languages)

Pipeline: `build-glossary.ts` → `draft-entries.ts <lang> <slug>` → author
`fills/<lang>/<slug>.json` → `apply-fills.ts` → `write-entries.ts` →
(en only) `fill-titles.ts`. Ledger below; `✅` = merged into the table.

| slug | recipes | en | fr | es | ja | hi | pt | ru | zh | de | it | el | ur | fa | tr | ku | id | sw | ko | nl | ps | he | pl | sv |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| stuffed | 4 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| legumes | 11 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iceCream | 13 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| vegetables | 14 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| savory | 16 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| fish | 20 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| beverages | 24 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| salads | 24 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| starches | 47 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| pastries | 48 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| westernDesserts | 57 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| lightDesserts | 73 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| easternDesserts | 76 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| soups | 8 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| sweetPies | 106 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| quick | 130 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| meats | 137 | ✅ | ✅ | ✅ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

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
| stuffed | 4 | ✅ merged |
| legumes | 11 | ✅ merged |
| iceCream | 13 | ✅ merged |
| vegetables | 14 | ✅ merged |
| savory | 16 | ✅ merged |
| fish | 20 | ✅ merged |
| beverages | 24 | ✅ merged |
| salads | 24 | ✅ merged |
| starches | 47 | ✅ merged |
| pastries | 48 | ✅ merged |
| westernDesserts | 57 | ✅ merged |
| lightDesserts | 73 | ✅ merged |
| easternDesserts | 76 | ✅ merged (warn: fah-493/495/499/500/526 no cookTime) |
| sweetPies | 106 | ✅ merged (clean) |
| soups | 8 | ✅ merged |
| quick | 130 | ✅ merged (clean) |
| meats | 137 | ✅ merged (warn: fah-078/101 no cookTime in source) |

EN merged so far: **808 / 808 — COMPLETE**

## FR Translation Pass

All 17 files merged into `recipeTranslationsFr.json` — **808 / 808 — COMPLETE**.
meats merged with 3 non-fatal warnings (fah-040 no cookingMethod,
fah-078/fah-101 no cookTime — all absent from source META).

## ES Translation Pass (in progress)

| File | Count | Status |
|------|-------|--------|
| stuffed | 4 | ✅ merged |
| legumes | 11 | ✅ merged |
| iceCream | 13 | ✅ merged |
| vegetables | 14 | ✅ merged |
| savory | 16 | ✅ merged |
| fish | 20 | ✅ merged |
| beverages | 24 | ✅ merged |
| salads | 24 | ✅ merged |
| starches | 47 | ✅ merged |
| pastries | 48 | ✅ merged |
| soups | 8 | ✅ merged |
| westernDesserts | 57 | ✅ merged |
| lightDesserts | 73 | ✅ merged |
| easternDesserts | 76 | ✅ merged |
| sweetPies | 106 | ✅ merged |
| quick | 130 | ✅ merged (clean) |
| meats | 137 | ⏳ in progress |

ES merged so far: **671 / 808** — remaining: meats
