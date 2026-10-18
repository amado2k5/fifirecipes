# Dietary fact extraction: reviewer instructions

You read recipes (English ingredients and steps) and report which animal-derived or
restricted items each recipe CONTAINS. You do NOT decide halal, kosher or vegetarian;
code does that from your facts. Be accurate and conservative: a missed item can mislead
someone with a dietary rule.

## Input / output
Input: a batch file `batch-NNN.json`, an array of recipes {id, title, category, ingredients[], steps[]}.
Output: write `out/batch-NNN.json` (same NNN) containing a JSON array with one object per recipe,
in the same order, nothing else:
  {"id": "...", "contains": ["tag", ...], "uncertain": [{"tag": "...", "why": "short reason"}, ...],
   "evidence": {"tag": "quoted ingredient or step words"}, "flag": ""}

## Tags for `contains` (use only these)
- `pork`: pork or any pig product: bacon, ham, lard, pancetta, chorizo, pork gelatin, chashu
- `red_meat`: beef, veal, lamb, mutton, goat, camel, offal, "meat"/mince, or a stock made from them
- `poultry`: chicken, duck, turkey, goose, quail, pigeon, or a stock made from them
- `other_land_animal`: rabbit, horse, frog, snail, insects, game not covered above
- `finned_fish`: any fish with fins: tuna, salmon, anchovy, sardine, fish sauce, bonito/dashi, caviar
- `nonkosher_fish`: fish without scales (catfish, eel, shark, monkfish, ray, sturgeon/caviar, swordfish)
- `shellfish`: crustaceans, molluscs, squid, octopus, oyster sauce, shrimp paste
- `egg`: eggs or egg products (mayonnaise, meringue, egg wash)
- `dairy`: milk, cream, butter, ghee, cheese, yogurt, whey, milk powder, condensed milk, labneh
- `honey`: honey
- `gelatin`: gelatin (any source) or marshmallow/jelly made with it
- `animal_fat`: lard, tallow, suet, schmaltz, rendered or "animal" fat, lamb tail fat
- `alcohol`: wine, beer, spirits, liqueur, mirin, sake, cooking wine, rum/brandy, wine vinegar
- `alcohol_trace`: vanilla or other extract, soy sauce, vinegar: trace alcohol only
- `blood`: blood or blood sausage

## Tags only for `uncertain` (also allowed: any tag above when you cannot tell)
- `animal_rennet_possible`: cheese whose rennet is not stated
- `stock_unspecified`: stock, broth or bouillon whose base is not stated
- `hidden_animal_unknown`: a bought or compound item that may hide animal products (puff pastry, Worcestershire sauce, pesto, candy, shortening)

## Rules
1. Read EVERY ingredient line and EVERY step of EVERY recipe. Do not sample, do not skim.
2. `contains` = the recipe clearly uses it, in an ingredient line OR added in a step (e.g. "deglaze with white wine",
   "fry in lard", "brush with egg", "add a splash of rum"), including optional ingredients and garnishes.
3. A named dish or product that normally hides an animal item goes to `uncertain`, not `contains`, unless the
   recipe states the item: Worcestershire sauce (anchovy), pesto (cheese), puff pastry or pie crust (butter or lard),
   marshmallow (gelatin), candy, stock cubes, "shortening", cheese with no stated rennet, "broth" with no base.
4. Plant-based look-alikes do not count: coconut milk, peanut butter, cocoa butter, eggplant, butternut, cream of
   tartar, vegetable stock, almond milk. Do not tag them.
5. Alcohol: `alcohol` = wine, beer, spirits, liqueur, mirin, sake, cooking wine, wine vinegar, rum/brandy extracts used as
   a drink-strength ingredient. `alcohol_trace` = vanilla extract, other flavour extracts, soy sauce, ordinary vinegar.
   Non-alcoholic versions (ginger ale, root beer, alcohol-free wine) are not alcohol.
6. Stock/broth: tag by its base (chicken stock -> poultry, beef/lamb -> red_meat, fish -> finned_fish).
   Unstated base -> uncertain `stock_unspecified`.
7. Fish sauce, anchovy, bonito flakes, dashi -> finned_fish. Oyster sauce, shrimp paste -> shellfish.
   Squid and octopus -> shellfish AND nonkosher_fish. Caviar/roe: finned_fish (+ nonkosher_fish if sturgeon).
8. Butter, ghee, cream, yogurt, labneh, cheese, milk, milk powder, condensed milk -> dairy. Eggs and mayonnaise -> egg.
9. `evidence` must quote the words from the recipe for every tag in `contains`. If you cannot quote it, use `uncertain`.
10. `flag`: leave "" normally. Put a short note ONLY if the recipe text is broken, contradictory or not a food recipe.
11. Do not infer from the title alone; use the ingredients and steps. If the title says "chicken" but no chicken is
    listed or used, put it in `flag`.
12. Never invent items. Output valid JSON only; no commentary in the file.
