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
- `lint:lang` (script consistency, structure, Arabic glossary)
- `lint:halal` (halal audit of the whole world catalog)
- `tsc --noEmit`

It must exit 0 before you commit anything under `src/data/`. Also run
`npm run build` before you open a PR. **Never commit with known findings,
and never weaken the linter to make it pass.** If a check is genuinely
wrong, fix the check in its own commit and explain why.

The checker cannot catch everything. Text can pass and still be wrong:
- the right script but the wrong language (e.g. Pashto entries written in Persian)
- garbled filler (e.g. Swahili "kikombe cha kikombe…")
- a wrong but real word (e.g. "celery" for cilantro)

That's why the manual review in step 5 below is required.

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
| eggplant | avocado | باذنجان |

## Halal rules (enforced by `lint:halal`)

- No pork or pork derivatives, and no alcohol in any form, including
  mirin, sake, cooking wine, wine vinegar and vanilla *extract*.
- Watch for pork that hides under a dish name: chashu, char siu, tonkotsu,
  Chinese sausage / lap cheong, carnitas, al pastor.
- Seafood is allowed. Meat is assumed to be halal-slaughtered.
- A halal substitute is fine (e.g. "halal Chinese-style beef sausage"), but
  it must be written into the **English source text** so the gate sees it.
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
   - For each language, compare about 10 random fields against the English.
   - Check every title.
   - Check every row of the known-mistranslations table above.
   - For Pashto, confirm it is Pashto and not Persian.
6. **Only then** set `ready: true` for the chapter.
7. Commit in small commits by area (catalog, Kurdish, other languages).
   The PR must list before/after `check:world` counts and a few before → after
   examples.

## For local-model output

`scripts/world/translate.py` produces a first draft only. Its prompt states
these rules, but the model still produces mixed-script and wrong-meaning
text, so treat its output as untrusted until `check:world` passes and the
manual review in step 5 is done.
