# Translation guide (Claude, Devin, local models)

Read this before you add, translate or edit any recipe text. Every rule here
comes from a real bug that reached `main`: Arabic titles with the wrong
meaning, Kurdish in two different scripts, Hangul inside Japanese, Arabic
inside Hebrew, "pickled vomit" in Polish, and a pork recipe that went live.

## The one command that must pass

```bash
npm run check:world
```

It runs three checks:
- `lint:lang` (script consistency, structure, Arabic glossary). Every
  step must be a plain string and every ingredient `{name, standardAmount}`.
- `lint:halal` (halal audit of the English source of the world catalog)
- `tsc --noEmit`

Also run `npm run lint:halal-i18n`. It scans the **translations** for pork,
alcohol and non-halal-animal words, which `lint:halal` never sees. It is
not in `check:world` yet, because w-jp-040 (tonkatsu sauce) is still under
review. Any other hit is a bug.

It must exit 0 before you commit anything under `src/data/`. Also run
`npm run build` before you open a PR. **Never commit with known findings,
and never weaken the linter to make it pass.** If a check is genuinely
wrong, fix the check in its own commit and explain why.

The checker cannot catch everything. Text can pass and still be wrong:
- the right script but the wrong language (e.g. Pashto entries written in Persian)
- garbled filler (e.g. Swahili "kikombe cha kikombe…")
- a wrong but real word (e.g. "celery" for cilantro)

That's why the manual review in step 5 below is required.

## What went wrong in October 2026 (read this first)

All 161 world recipes passed `check:world` and three chapters went live.
A field-by-field comparison with the English then showed that **35–60% of
the instruction fields in every language were wrong**. Swahili, Pashto and
Hebrew were close to 100% wrong. The script linter could not see any of it.
What we found, and the rule each finding added:

1. **Filler and wrong-language text in the right script.** Swahili "kikombe
   cha kikombe", Pashto written in Persian, Hebrew "השווה" for every verb.
   → Compare **every** field with the English, not a sample (step 5).
2. **Wrong but real words.** Eggplant became "baklava" (El), "cookie" (Fa)
   and "almond-coloured" (Ur). Rice became "flour", tbsp became "dollar"
   (Fa), pot became "suit" (Pl), cloves became "teeth" (Ur), and serve
   became "submit" (El). → See the known-mistranslations table.
3. **Halal broken by translation alone.** The English was halal, but the
   translation said "bacon" (Ur), "bear meat" and "toddy" (Hi), "сало"
   (pork fat, Ru), "pork broth" (Te), "Schweinefilet" (De), "bonito pork"
   and "pork salt" (Sv), and "pork onions" (Es). → `lint:halal-i18n`, and
   halal is part of the per-field review.
4. **Dropped content.** Steps were shortened and lost actions,
   temperatures, °F and gas marks, and negations ("so the rice does *not*
   stick"). → Never shorten. Every sentence of the English must be in the
   translation.
5. **Units converted.** Inches became cm, °F became °C, cups became ml, and
   tsp and tbsp were swapped. → Keep the English units and numbers. Only
   the unit word is translated, and it must be translated: "inch" was left
   in English in Sv, Tr, Pl and It text (tum, inç, cal, pollice).
6. **Broken structure.** Some instruction slots held an ingredient object, a
   nested `{"1": …}` or a Python dict string, and the linter walked
   straight past them. → `lint:lang` now checks the shape of every field.
7. **Ingredient names and titles are as bad as steps.** "Boneless leg of
   lamb" was wrong in 8 of 24 tables. → Review names and titles too, not
   only instructions.
8. **Traditional characters in the Simplified Chinese table.** Five
   recipes (w-jp-010 to 014) were written in Traditional Chinese, and the
   script linter counts both as Han. Their titles were also wrong ("sushi
   bread" for shokupan, tamagoyaki for imagawayaki). → `lint:lang` now
   rejects common Traditional-only characters in `Zh`.
9. **Translations made from a different draft.** French entries for 8
   Italian recipes (w-it-003 to w-it-010) followed another version of each
   recipe: the steps did not match the English step numbers. → Translate
   only from the current `recipeTranslations.json` entry, after the
   catalog is final, and compare step counts *and* content.
10. **Recipes imported without translations.** 16 Italian recipes reached
   `main` without any translation entries, and `check:world` failed for
   everyone. → An import commit must include all 24 tables, or stay on its
   branch.

## Where the text lives

| What | File | Notes |
|---|---|---|
| Arabic catalog (the site's primary language) | `src/data/world/<iso>.json` | `title`, `category`, `method`, `notes`, `ingredients[i][0..1]`, `steps[i][0]`. The English source sits beside it: `titleEn`, `notesEn`, `ingredients[i][3..4]`, `steps[i][1]` |
| English table (the source for every other language) | `src/data/recipeTranslations.json` | Translate other languages **from this**, not from another translation |
| Other languages | `src/data/recipeTranslations<Xx>.json` | Same keys as the English entry |
| Chapter names | `CHAPTER_NAMES_*` in `src/utils/recipeLocalization.ts` | The `chapter` value inside translation entries is ignored at runtime |
| Arabic glossary | `scripts/world/glossary_ar.json` | Canonical Arabic ingredient names, enforced by the linter |
| Halal rules / vetoes | `scripts/world/halal_rules.yaml`, `scripts/world/vetoed.txt` | |

Don't touch the core recipes (ids without the `w-` prefix) unless you are
asked to.

## Script per language (enforced by `lint:lang`)

| Code | Language | Script | Notes |
|---|---|---|---|
| (catalog) | Arabic | Arabic | RTL |
| `` (En), Es, Fr, De, It, Nl, Pt, Pl, Sv, Tr, Id, Sw | … | Latin | |
| **Ku** | **Kurdish = Kurmanji** | **Latin** (ç ê î ş û) | **Never Sorani / Arabic script.** The UI, chapter names and all core recipes are Kurmanji, and `ku` is laid out LTR. Units: `kevçî mezin` (tbsp), `kevçî çayê` (tsp), `qede` (cup) |
| Fa, Ur, Ps | Persian, Urdu, Pashto | Arabic | RTL. Pashto must be Pashto, not Persian |
| He | Hebrew | Hebrew | RTL |
| El | Greek | Greek | |
| Ru | Russian | Cyrillic | |
| Hi | Hindi | Devanagari | |
| Te | Telugu | Telugu | |
| Ko | Korean | Hangul | No kanji or kana |
| Zh | Chinese | **Simplified** Han | No kana, no traditional characters |
| Ja | Japanese | Hiragana + Katakana + Kanji | Units: `小さじ` / `大さじ` / `カップ` |

The only Latin allowed inside non-Latin languages is: `g kg ml l cm mm C F x`
and single capital section letters (`A`, `B`).

## Translation rules

1. **Rewrite whole fields from English.** When a field is broken, retranslate
   the whole field from the English table. Don't patch only the bad token: the
   text around a corrupted fragment was almost always wrong too.
2. **Use one script.** No foreign word or character anywhere, and never two
   scripts inside one word (`عصיר`, `ティース푼`, `Farciсsez` with a Cyrillic
   `с`, `الكокوس`). Also never leave a `U+FFFD` replacement character (`�`).
3. **Write dish names in the target script** (e.g. `queso fresco` →
   `κέσο φρέσκο` / `кесо фреско` / `جبن كيسو فريسكو`). Don't add native-script
   parentheticals (`(紅白なます)`, `(蛋撻)`) or Wikipedia disambiguation
   labels (`(طعام)`, `(أكلة)`, `(الحلوى)`).
4. **No brand names.** Use the generic product: `Diamond Crystal` → coarse
   salt, `Kewpie` → Japanese mayonnaise, `Bull Dog` → tonkatsu sauce.
5. **The meaning must match the English.** An Arabic title must say what the
   dish *is*. For example, "Mexican Adobo" is not `العجوة` (date paste),
   "Manjū" must not read as `مانجو` (mango), and "buri" (yellowtail) is not
   `البوري` (mullet).
6. **Keep the structure.** Every table has an entry for every `w-*` id, with
   the same ingredient keys and the same number of instructions as the
   catalog. Quantities, times and temperatures are unchanged.
7. **Keep the JSON formatting.** Use `json.dumps(..., ensure_ascii=False)`,
   keep each file's indent (`indent=1` everywhere except
   `src/data/world/vn.json`, which uses `indent=2`), and keep whether the file
   ends with a newline. A diff should show only the lines you changed.
8. **Use one spelling per term.** For Arabic, use `glossary_ar.json`. When you
   find a new mistranslation, add it to the glossary (`use` plus `not`) so the
   linter catches it next time.

### Known mistranslations: check these in every new batch

| English | Wrong renderings seen | Correct (Arabic / example) |
|---|---|---|
| allspice | cardamom (الهيل), aloe (アロエ), clove, mint | بهار حلو · オールスパイス |
| pine nuts | pistachio, almonds | صنوبر · 松の実 |
| cilantro | celery (كرفس), dill, spinach, cumin | كزبرة خضراء |
| parsley | carom seed, scallion, cabbage | بقدونس |
| peanuts | pistachio (فستق), hazelnut, almond | فول سوداني |
| daikon | yacón (جاكون), sauerkraut, cucumber, "vomit" | فجل أبيض (دايكون) |
| bean sprouts | soybeans (فول الصويا) | براعم الفاصولياء |
| ground cumin/coriander | "ground-meat cumin" (挽き肉のクミン), "of kidneys" | كمون مطحون |
| caul fat | "uterine membrane fat" (الغشاء الرحمي) | ثرب الغنم |
| eggplant | avocado, baklava, cookie, "almond-coloured", melon | باذنجان |
| rice | flour, wheat, oats | أرز |
| currants / raisins | cherries, grapes, dates, strawberries, gooseberry | زبيب / كشمش |
| peas | green peppers, lentils, green beans | بازلاء |
| cloves | cardamom, "teeth", "hooves", "small nails", toddy | قرنفل |
| lamb | beef, veal, goat, "bear", "bacon", "child" | لحم ضأن |
| broth / stock | butter, sugar, ice, broccoli, "salt water" | مرق |
| bonito flakes | "bonito pork" (bonitofläsk) | رقائق البونيتو |
| tbsp / tsp | swapped, "dollar", "artillery", "spoon" | ملعقة كبيرة / صغيرة |
| serve | "submit" (υποβάλετε) | يُقدَّم |

## Halal rules (enforced by `lint:halal`)

- No pork or pork derivatives, and no alcohol in any form, including
  mirin, sake, cooking wine, wine vinegar and vanilla *extract*.
- Watch for pork that hides under a dish name: chashu, char siu, tonkotsu,
  Chinese sausage / lap cheong, carnitas, al pastor.
- Seafood is allowed. Meat is assumed to be halal-slaughtered.
- A halal substitute is fine (e.g. "halal Chinese-style beef sausage"), but
  it must be written into the **English source text** so the gate sees it.
- **A translation can break halal on its own.** Run `lint:halal-i18n`, and
  when you review a field, check the meat, fat and liquids against the
  English. Words that look alike are the danger: سور / سورج, "smalec"
  (lard) vs "smalec kaczy" (duck fat), "bulu babi" (sea urchin).
- **Hidden alcohol in ready-made products.** Store-bought teriyaki sauce
  and ponzu usually contain mirin, and vanilla and orange *extract* are
  alcohol-based. Write a halal version into the English
  ("vanilla powder", "halal teriyaki sauce made without mirin or sake").
  This includes alternatives written in the **amount** column
  ("… (or 2 tsp vanilla extract)"). `halal_audit.py` now scans it too.
- **Notes that name a pork dish** (e.g. "Bì cuốn", "tonkatsu") need
  rewording, even when the recipe itself is halal.
- When `lint:halal` flags a recipe: substitute the ingredient in the source,
  or remove the recipe. **If you meet a new pork or alcohol term, add it to
  the `reject:` list in `halal_rules.yaml` in the same commit.**

### Removing a recipe

Remove it from every place below in one commit. Afterwards, `git grep <id>`
must only match generated files (`public/recipes.json`, `public/sitemap.xml`).

1. `src/data/world/<iso>.json` (the entry)
2. All 24 `src/data/recipeTranslations*.json` tables (the key)
3. `scripts/world/i18n-todo/*.json` (the key, if present)
4. `src/data/worldRecipeEstimates.ts` (the block)
5. `src/data/recipeImages.ts` (the id in `RECIPES_WITH_IMAGES`)
6. `git rm` `public/recipe-images/<id>.jpg` and `public/recipe-images/thumbs/<id>.jpg`
7. Append `<iso>/<draft-slug>\t<reason>` to `scripts/world/vetoed.txt`, so
   `import.py` never brings it back. The draft slug is the file stem in
   `world/distilled/<iso>/`.
8. Update the counts in `docs/world-cuisines-progress.md`.

## Workflow for a new batch or chapter

1. **Import:** run `distill.py`, then `import.py`, then
   `npm run lint:halal`. Halal certification is NOT done at the distill
   step — the local model's verdicts missed hidden pork (capocollo,
   finocchiona, chashu). The gate is `halal.py` at import plus a
   **semantic audit of every recipe's ingredients/notes at the
   postdistill handoff**, before any translation or `ready`.
2. **Write the Arabic catalog text.** Check every title against `titleEn`
   for meaning, and use glossary spellings.
3. **Build the English table**, then translate every other language **from
   English**. Kurdish = Kurmanji (Latin script).
4. **Run `npm run check:world`** and fix every finding by retranslating the
   whole field.
5. **Do a manual review**, which the checker can't do:
   - Compare **every** step, note, ingredient name and title in every
     language with the English. A sample of 10 missed most errors.
   - Check that the numbers in each field match the English (see the
     number check in "For agents running a batch" below).
   - Check every row of the known-mistranslations table above.
   - For Pashto, confirm it is Pashto and not Persian.
   - Run `npm run lint:halal-i18n`.
6. **Only then** set `ready: true` for the chapter.
7. Commit in small commits by area (catalog, Kurdish, other languages).
   The PR must list before/after `check:world` counts and a few before → after
   examples.

## For agents running a batch (Claude, Devin)

- Split the work by language, about 40 recipes per agent. Give each agent
  the English plus the current text, and have it output **only the fields
  it changes**. This roughly halves the cost when a table is mostly right.
- Save output in parts as you go, under file names unique to the agent
  (`tmp-<Lang>-<chunk>-*`). Two agents sharing a helper file overwrote
  each other's input. A scratch directory can also be wiped when the
  session restarts, so don't keep the only copy there.
- Before merging, compare the digits in each changed field with the
  English. Any extra number is usually a unit conversion that has to be
  reverted.
- Commit one language per commit, with `check:world` passing. Then a stop
  at any point leaves finished work behind.

## For local-model output

`scripts/world/translate.py` produces a first draft only. Its prompt states
these rules, but the model still produces mixed-script and wrong-meaning
text, so treat its output as untrusted until `check:world` passes and the
manual review in step 5 is done.
