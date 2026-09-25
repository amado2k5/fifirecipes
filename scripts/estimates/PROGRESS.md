# Missing Recipe Estimates

## Rules

When estimating nutrition and cost for a recipe:

- **Servings**: Based on typical meal portion sizes, using half-integers where recipes naturally divide that way (e.g., 4.5 for recipes that serve 4–5).
- **Nutrition per serving** (whole numbers, grams):
  - Derived from each ingredient's typical USDA composition and the standardAmount.
  - Decimal values are rounded to whole numbers.
  - Constraint: protein×4 + fat×9 + carbs×4 must be within ±15% of kcal (macros must account for nearly all energy).
- **Cost per whole recipe** (USD, to nearest $0.05):
  - Average 2026 US supermarket prices: conventional produce, bulk dried goods, standard proteins.
  - Allocated to cost buckets (protein, dairyEggs, produce, grains, fats, sweeteners, specialty, spices).
  - At least one bucket must have a value.

## Log

- ec-003–ec-052: 20 added (Egyptian Cooking intro recipes: beans, pastries, cheese spreads, pickles, eggs)
- ec-053–ec-098: 20 added (Egyptian Cooking egg dishes and stews)
- ec-105–ec-157: 20 added (Chicken dishes, couscous, and eggplant)
- ec-158–ec-208: 20 added (Fish, organ meats, and lentils)
- ec-213–osool-006: 20 added (Beef/lamb dishes and technique broths)
