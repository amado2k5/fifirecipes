# Dietary claims (halal, kosher, vegetarian, vegan)

Every recipe may carry **positive** dietary claims in `src/data/recipeDietary.json`
(`{id: [{claim, basis: "ingredients", ruleset, note?}]}`). They flow into
`public/data/recipes/<id>.json` (`dietary`), the schema.org JSON-LD is unchanged, and the
Cookwala exporter copies them into `safety.dietary` of each document on its next import.

**These are not certifications.** A claim means: the ingredient list and steps contain nothing that breaks
the rule, judged on 2026-10-08 with ruleset `fifi-diet-1`. Meat is assumed halal/kosher-slaughtered.
Processed ingredients (cheese, stock cubes, bought pastry) are not verified. Nobody should rely on a claim
for a medical or religious obligation without checking labels.

## How a claim is made (three layers, all must agree)

1. **AI fact extraction** (`extract.py`, then reviewer agents with `PROMPT.md` rules): for every recipe, read
   every ingredient line and every step, and list which restricted items it CONTAINS (pork, red meat, poultry,
   fish, shellfish, egg, dairy, honey, gelatin, animal fat, alcohol, blood...) or is UNCERTAIN about
   (stock with no stated base, cheese rennet, bought items that may hide animal products).
2. **Keyword scan** (`scan.py`) of ingredient names and steps, independent of the AI, plus the repo's own halal
   gate (`scripts/world/halal.py`). Facts are the union of both: anything either layer sees counts.
3. **Rules** (`derive.py`) turn facts into claims. A claim is withheld whenever a relevant fact is uncertain.

| Claim | Withheld when the recipe has |
|---|---|
| vegetarian | meat, poultry, fish, shellfish, gelatin, animal fat, blood, or uncertain stock/hidden animal items. Cheese with unstated rennet still qualifies, with a note. |
| vegan | anything above, or egg, dairy, honey, or any uncertain item |
| halal | pork, blood, gelatin, alcohol (incl. wine vinegar and vanilla *extract*), non-halal animals, unspecified stock, hidden-animal items, or the halal gate says haram/uncertain |
| kosher | pork, shellfish, scaleless fish, other non-kosher animals, blood, gelatin, alcohol, meat or poultry together with dairy, meat with fish, unspecified stock together with dairy. Note says meat, dairy or pareve. |

Recipes whose text is broken or contradictory (AI `flag`, e.g. the title says chicken but none is listed) get **no** claims.

## Verification

A blind second review of a random sample of 120 recipes with claims (seed 20261008, fresh reviewers, no access to
our verdicts) gave 0 contradictions out of 279 claim checks; it answered "unsure" on 34, mostly plain "vanilla"
(treated as alcohol-free here; only "vanilla extract" blocks halal) and cheese rennet.

## Where users see it

- **App and site:** `src/components/DietBadges.tsx` shows the badges and a "not a certification" note in the recipe
  header, from the compact `src/data/recipeDietaryCodes.json`. The labels are UI strings in
  `src/data/translations.ts` (`dietTitle`, `dietNote`, `dietHalal`, `dietKosher`, `dietVegetarian`, `dietVegan`) in all 29
  languages (Kurdish is Kurmanji in Latin script). Source of the strings: `scripts/diet/ui_strings.py`.
  These were written without native-speaker review; have a reader of each language check them.
- **Search engines:** `suitableForDiet` (schema.org) in each recipe page's JSON-LD.
- **Data:** `dietary` in `public/data/recipes/<id>.json`, with notes; Cookwala reads it from there.

## Re-running

```bash
python3 scripts/diet/extract.py public/data/recipes <work> --batch 50   # compact English view
# review every <work>/batch-NNN.json with the PROMPT.md rules -> <work>/out/batch-NNN.json
python3 scripts/diet/derive.py <work>      # writes scripts/diet/facts.json and src/data/recipeDietary.json
npm run prebuild                           # regenerates public/data with `dietary`
```

`scripts/diet/facts.json` is the audit trail (merged facts per recipe). New or edited recipes need their facts
produced again; recipes missing from the AI output make `derive.py` stop.

## Allergens, "no allergens found" and diabetic estimate (2026-10-08)

`scripts/diet/allergens.py` adds three things on top of the reviewed dietary claims. It runs after `derive.py` and never changes
`recipeDietary.json`.

| Output | File | Meaning |
|---|---|---|
| Allergens | `src/data/recipeHealth.json` (`a`, `s`) | EU-14 allergens found in the ingredient lines and steps: milk, eggs, gluten (`cereals_gluten`), nuts, peanuts, sesame, soy (`soybeans`), fish, crustaceans, molluscs, celery, mustard, lupin, sulphites. Status `c` contains, `n` none found, `l` check labels, `u` not assessed. |
| Diabetic estimate | `src/data/recipeHealth.json` (`d`) | `f` friendly, `b` borderline, `n` not friendly, `u` unknown. From the nutrition estimate per serving: friendly = sugar 5 g or less, carbohydrate 30 g or less, carbohydrate at most 40% of the energy, 12 servings or fewer; not friendly = sugar over 15 g or carbohydrate over 60 g; everything else borderline. |
| Extra claims | `src/data/recipeDietaryExtra.json` | Positive claims in the same shape as the reviewed ones: `gluten_free`, `dairy_free`, `nut_free` (ruleset `fifi-allergen-1`) and `diabetic_friendly` (ruleset `fifi-diabetic-1`). They are merged into `dietary` in `public/data/recipes/<id>.json`. |

`scripts/diet/allergen_facts.json` is the audit trail: the evidence for each allergen found and the bought or compound items seen.

**How it decides.** Three layers, as for the dietary claims: a keyword scan of ingredient names (whole words; plant look-alikes
such as coconut milk, eggplant, cornflour and nutmeg do not match), a limited scan of the steps (only words that mean the thing is in the
pot: dough, wheat, pasta, tahini...; "toast the spices" and "serve with bread" do not count), and the reviewed facts (dairy, egg, fish,
shellfish from `facts.json`). **None found** needs all of these: nothing found, the recipe was reviewed (it is in `facts.json`),
no stock, bouillon, bought sauce, spice mix, chocolate, jelly or other compound item that could hide an allergen, and no uncertain
item in the reviewed facts. Otherwise the status is **check labels** or **not assessed**. `gluten_free`, `dairy_free` and `nut_free`
follow the same rule, so they are rarer than a plain "not found".

**Not guarantees.** Allergens are worked out from the text and may be incomplete; cross-contact is never assessed; people with an allergy
must read labels. The diabetic label is an estimate from modelled nutrition and is never "safe": it is not medical advice. The thresholds
are a judgement call and should be reviewed by a dietitian before anyone relies on them. A recipe cut into many tiny servings can look light
per serving, which is why the energy-share and serving-count limits exist.

**Where users see it.** `src/components/HealthTags.tsx`: chips on every recipe card ("Contains: Milk · Eggs", "No major allergens found",
"Diabetic-friendly (estimate)", "Not diabetic-friendly (estimate)") and in the recipe header with the notes. UI strings in 29 languages come from
`scripts/diet/health_strings.py` (written without native-speaker review; have a reader of each language check them), inserted into
`src/data/translations.ts` by `scripts/diet/apply_health_strings.py`. `suitableForDiet` in the JSON-LD gains `GlutenFreeDiet` and
`DiabeticDiet`. Cookwala reads `allergens` and `diabetic` from `public/data/recipes/<id>.json` (its exporter replaces its own
name-based allergen guess with these).

**Re-running** (after `derive.py`, and again whenever recipes or estimates change):

```bash
python3 scripts/diet/extract.py public/data/recipes <work> --batch 50    # compact view, if not done already
python3 scripts/diet/allergens.py <work>                                 # recipeHealth.json, recipeDietaryExtra.json, allergen_facts.json
python3 scripts/diet/apply_health_strings.py                             # only when the strings change
npm run prebuild                                                         # regenerates public/data with allergens, diabetic and the extra claims
```
