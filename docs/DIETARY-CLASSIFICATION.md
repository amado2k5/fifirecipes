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

## Re-running

```bash
python3 scripts/diet/extract.py public/data/recipes <work> --batch 50   # compact English view
# review every <work>/batch-NNN.json with the PROMPT.md rules -> <work>/out/batch-NNN.json
python3 scripts/diet/derive.py <work>      # writes scripts/diet/facts.json and src/data/recipeDietary.json
npm run prebuild                           # regenerates public/data with `dietary`
```

`scripts/diet/facts.json` is the audit trail (merged facts per recipe). New or edited recipes need their facts
produced again; recipes missing from the AI output make `derive.py` stop.
