# Czech (cs) recipe translation — style sheet

You are translating `fifirecipes` recipe entries from English to Czech.
Output must be a single JSON object mapping recipe id -> entry, same keys and
same structure as the source. `json.dumps(..., ensure_ascii=False, indent=1)`.

## Structure (never break)

- Keep every recipe id, every ingredient key (`xxx-i1`), every instruction key
  (`"1"`, `"2"`, …) identical to the source.
- Ingredients: `{ "name": "…", "standardAmount": "…" }` — both translated.
- Instructions: plain strings only, never objects/lists.
- Same number of instructions as the source. Never drop or merge steps.
- `chapter`/`category`/`cookingMethod`/`prepTime`/`cookTime`/`servings`/`title`
  translated; ingredient keys are NOT translated.

## Language rules

- Czech only, Latin script with normal Czech diacritics (ě š č ř ž ý á í é ů ú ó ď ť ň).
  No English words left in the text (except unit symbols g, kg, ml, l, cm, mm,
  and single capital section letters A/B).
- Translate from the English field — never from another language.
- **Keep all numbers, times and temperatures exactly as in English.** Do not
  convert units (cups stay šálky, °F stays °F, inches stay palce, oz/lb stay
  unce/libra). Only the unit *word* is translated — and it must be translated:
  "inch" -> "palec", "minutes" -> "minut"/"min".
- Never shorten a step. Every sentence and clause of the English must appear
  in the Czech (watch negations: "so it does *not* stick").
- Plural forms: use natural Czech (1 šálek, 2–4 šálky, 5+ šálků;
  1 lžička / 2–4 lžičky / 5+ lžiček) but the quantities themselves never change.

## Standard vocabulary

| English | Czech |
|---|---|
| tablespoon (tbsp) | lžíce (lž.) |
| teaspoon (tsp) | lžička (lžič.) |
| cup | šálek |
| ounce (oz) | unce |
| pound (lb) | libra |
| min | min |
| ground cumin | mletý kmín |
| ground coriander | mletý koriandr |
| cilantro | čerstvý koriandr (listy) |
| parsley | petržel |
| allspice | nové koření |
| pine nuts | piniové oříšky |
| peanuts | arašídy / podzemnice olejné |
| eggplant | liliek / baklažán |
| rice | rýže |
| peas | hrášek |
| cloves | hřebíček |
| currants / raisins | rybíz / rozinky |
| bean sprouts | fazolové klíčky |
| lamb | jehněčí maso |
| broth / stock | vývar |
| bonito flakes | vločky bonito |
| serve | podávat / servírovat |
| ghee / baladi ghee | přepuštěné máslo (ghee) |
| baking soda | jedlá soda |
| baking powder | prášek do pečiva |
| molasses | melasa |
| semolina | krupice |
| molokhia | molokhie |
| daikon | ředkev daikon |

## Halal (enforced by linter)

- No pork or pork derivatives and no alcohol in any form — including mirin,
  sake, cooking wine, wine vinegar, vanilla *extract*. If English says
  "halal teriyaki sauce made without mirin", keep the halal qualifier in Czech.
- Never introduce: vepřové, bůček, slanina, šunka, sádlo (pork lard),
  víno, pivo, rum, likér, pálenka, koňské maso, psí maso, medvědí maso.
- "minced/ground meat" — always name the animal from the English
  ("ground beef" -> "mleté hovězí"), never just "mleté maso" when the animal is known.
- "pivní kvasnice" (brewer's yeast) is fine; "vinné listy" (vine leaves) is fine.
- Write dish names in Latin Czech script, no parenthetical foreign names.
- No brand names — use the generic product (Kewpie -> japonská majonéza).

## Field notes

- `title`: what the dish IS. Must match the English meaning.
- `culturalNotes`: full Czech translation, keep every sentence.
- `standardAmount`: translate the amount phrase ("1 large onion, finely diced"
  -> "1 velká cibule, najemno nakrájená") keeping numbers identical.
