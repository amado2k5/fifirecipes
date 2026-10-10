# Romanian (ro) translation conventions

Target: standard Romanian (DOOM3 orthography), Latin script, left-to-right.
**ă, â, î, ș, ț are required letters.** Use the comma-below forms ș (U+0219) and
ț (U+021B), never the cedilla forms ş/ţ. Use â inside words and î at the start/end
(pâine, câine, a hotărî, înăbușire). Formal-polite imperative for steps
("Tăiați ceapa", "Adăugați sarea"), consistently across all recipes.

You receive `fills/ro-src/chunk-NN.json`: a dict `{recipeId: entry}` of ENGLISH
source entries (copied from `src/data/recipeTranslations.json`). Output
`fills/ro/chunk-NN.json` (or `chunk-NN.partK.json`) with the same shape and the
SAME recipe ids, fully translated. Merge with
`npx tsx scripts/translations/write-entries.ts ro <file>`.

## Output contract

For every recipe id in the source chunk, emit exactly one entry with these keys:

- `title` (required, Romanian)
- `chapter`: ONLY from the pinned map below; omit the key if the source has none
- `category`, `cookingMethod`: pinned map below; omit if absent/null
- `prepTime`, `cookTime`: "25 mins" → "25 min", "1 hour" → "1 oră",
  "2 hours" → "2 ore", "1.5 hours" → "1.5 ore". Keep every number identical
  (do not change 1.5 to 1,5).
- `servings`: patterns below; keep every number identical
- `culturalNotes`: translate fully when the source has it (never shorten)
- `ingredients`: `{ "<same ingredient id>": {"name": "<Romanian name>"} }`.
  Include EVERY ingredient id from the source. Value = `{"name": ...}` ONLY;
  do NOT copy `standardAmount`, `nameEn` or `amountEn` (amounts are localized
  separately by `amount-cover.mts`).
- `instructions`: `{ "<same step key>": "<Romanian step>" }`. Same keys as the
  source, same order. Translate each step COMPLETELY: never merge, drop,
  reorder or summarize steps. If a source step is "", output "—".

## Hard rules

- Keep all numbers, fractions (½, ¼, ¾), temperatures (°C / °F) and metric units
  (g, kg, ml, l, cm, mm) verbatim. NEVER convert units.
- English unit words inside text: tablespoon(s)/tbsp → "lingură/linguri",
  teaspoon(s)/tsp → "linguriță/lingurițe", cup(s) → "cană/căni",
  glass(es) → "pahar/pahare", pinch → "un praf", handful → "o mână".
  Numbers ≥ 20 take "de": "20 de minute", "250 de grame" (but "250 g").
- No foreign words: everything in Romanian. Exceptions: proper names, dish
  names (koshari, molokhia, mahshi, baklava, kabsa, phở, sushi), brand names and
  metric units. Gloss an unfamiliar dish name once in the title if the English does.
- No pork or alcohol, including hidden ones (mirin, cooking wine). If the English
  source contains one, flag it in RESUME.md instead of translating it.
- `null`, `""`, missing keys → mirror the source (omit or keep empty).

## Pinned vocabulary

### Chapters (exact strings)

| source | Romanian |
|---|---|
| Chapter 1: Meats, Poultry & Seafood | Capitolul 1: Carne, pasăre și fructe de mare |
| Chapter 2: Soups, Salads, Vegetables & Pulses | Capitolul 2: Supe, salate, legume și leguminoase |
| Chapter 2: Soups, Salads, Vegetables & Legumes | Capitolul 2: Supe, salate, legume și leguminoase |
| Chapter 2: Soups, Salads & Vegetables | Capitolul 2: Supe, salate și legume |
| Chapter 3: Starches, Stuffed Foods & Pastries | Capitolul 3: Preparate cu amidon, umpluturi și produse de patiserie |
| Chapter 3: Starches | Capitolul 3: Preparate cu amidon |
| Chapter 3: Pastas, Stuffed Dishes & Pastries | Capitolul 3: Paste, preparate umplute și produse de patiserie |
| Chapter 4: Desserts & Beverages | Capitolul 4: Deserturi și băuturi |
| Chapter 4: Pastries, Light Desserts & Beverages | Capitolul 4: Produse de patiserie, deserturi ușoare și băuturi |
| Chapter 4: Beverages & Refreshments | Capitolul 4: Băuturi și răcoritoare |
| Chapter 5: Traditional Eastern Desserts & Sweets | Capitolul 5: Deserturi și dulciuri orientale tradiționale |
| Chapter 9: Egyptian Cooking | Capitolul 9: Bucătăria egipteană |
| Chapter 10: Fatma Abu Haty Channel Recipes | Capitolul 10: Rețete de pe canalul Fatma Abu Haty |
| From Osool El Tahy (Principles of Cooking) | Din Osool El Tahy (Principiile gătitului) |
| مطبخ الهند | Bucătăria indiană |
| مطبخ إثيوبيا | Bucătăria etiopiană |
| مطبخ إسبانيا | Bucătăria spaniolă |
| مطبخ إيران | Bucătăria iraniană |
| مطبخ إيطاليا | Bucătăria italiană |
| مطبخ إندونيسيا | Bucătăria indoneziană |
| مطبخ الصين | Bucătăria chineză |
| مطبخ اليونان | Bucătăria grecească |
| مطبخ اليابان | Bucătăria japoneză |
| مطبخ بيرو | Bucătăria peruană |
| مطبخ تركيا | Bucătăria turcească |
| مطبخ تايلاند | Bucătăria thailandeză |
| مطبخ فيتنام | Bucătăria vietnameză |
| مطبخ فرنسا | Bucătăria franceză |
| مطبخ الفلبين | Bucătăria filipineză |
| مطبخ كوريا الجنوبية | Bucătăria sud-coreeană |
| مطبخ لبنان | Bucătăria libaneză |
| مطبخ المغرب | Bucătăria marocană |
| مطبخ المكسيك | Bucătăria mexicană |
| مطبخ ماليزيا | Bucătăria malaeziană |
| مطبخ نيجيريا | Bucătăria nigeriană |

### Categories (exact strings)

| source | Romanian |
|---|---|
| Meats & Poultry | Carne și pasăre |
| Meats | Carne |
| Poultry | Pasăre |
| Fish & Seafood | Pește și fructe de mare |
| Seafood | Fructe de mare |
| Quick Meals | Preparate rapide |
| Savory Dishes | Preparate sărate |
| Savory Favorites | Preparate sărate preferate |
| Starches | Preparate cu amidon |
| Grains & Starches | Cereale și preparate cu amidon |
| Rice, Pastas & Bakes | Orez, paste și preparate la cuptor |
| Pastries | Produse de patiserie |
| Sweet Pastries | Produse de patiserie dulci |
| Baking & Pastries | Coacere și patiserie |
| Stuffed Dishes | Preparate umplute |
| Vegetables | Legume |
| Vegetables & Stews | Legume și tocănițe |
| Legumes | Leguminoase |
| Legumes & Heritage Dishes | Leguminoase și preparate tradiționale |
| Soups | Supe |
| Soups & Broths | Supe și supe limpezi |
| Salads | Salate |
| Salads & Dips | Salate și sosuri de înmuiat |
| Eastern Desserts | Deserturi orientale |
| Western Desserts | Deserturi occidentale |
| Light Desserts | Deserturi ușoare |
| Fruit Compote | Compot de fructe |
| Ice Cream | Înghețată |
| Beverages | Băuturi |
| Beverages & Refreshments | Băuturi și răcoritoare |
| Various | Diverse |

### Cooking methods (exact strings)

| source | Romanian |
|---|---|
| Baking | Coacere |
| Oven Baking | Coacere la cuptor |
| Slow Simmering | Înăbușire lentă |
| Slow Simmering (Tasbeek) | Înăbușire lentă (tasbeek) |
| Cooking | Gătire |
| cooking | gătire |
| Boiling | Fierbere |
| Boiling & Broth | Fierbere și supă |
| Frying | Prăjire |
| Pan-Frying | Prăjire în tigaie |
| Pan-Frying & Crisping | Prăjire în tigaie și rumenire |
| Grilling | Frigere la grătar |
| Charcoal & Oven Grilling | Grătar pe cărbuni și la cuptor |
| Steaming | Gătire la abur |
| Salads & Beverages | Salate și băuturi |
| Preserving | Conservare |
| Preserving & Freezing | Conservare și congelare |
| No Cook | Fără gătire |
| assembly | asamblare |
| Chilled / Cold Preparation | Preparare la rece / fără gătire |

### Servings patterns

- "N servings" → "N porții" ("1 serving" → "1 porție"; ≥ 20 → "20 de porții")
- "N pieces" → "N bucăți"; "N cups" → "N căni"; "N glasses" → "N pahare"
- "N sandwiches" → "N sandvișuri"; "N pies" → "N plăcinte"; "N loaves" → "N pâini"
- "N jars" → "N borcane"; "N people" → "N persoane"; "N balls" → "N biluțe"
- "N rolls" → "N rulouri"; "N slices" → "N felii"
- "as needed" → "cât este nevoie"; "about N" → "aproximativ N"
- "enough for X" → "suficient pentru X"; "keeps N weeks/months" → "se păstrează N săptămâni/luni"
- keep kg/g/ml quantities verbatim ("about 800 g" → "aproximativ 800 g")

### Ingredient glossary (pinned, extend consistently)

beef carne de vită, veal carne de vițel, chicken pui, lamb carne de miel,
mutton carne de oaie, minced/ground meat carne tocată, fish pește, shrimp creveți,
egg ou, milk lapte, butter unt, ghee/clarified butter unt limpezit (ghee),
cheese brânză, white cheese brânză albă, yogurt iaurt, cream smântână lichidă,
sour cream smântână, rice orez, flour făină, semolina griș, sugar zahăr,
salt sare, oil ulei, olive oil ulei de măsline, onion ceapă, garlic usturoi,
tomato roșie, tomato paste pastă de roșii, potato cartof, carrot morcov,
eggplant vânătă, zucchini dovlecel, pepper ardei, bell pepper ardei gras,
hot pepper ardei iute, parsley pătrunjel, cilantro/fresh coriander coriandru verde,
dill mărar, mint mentă, cumin chimion, coriander (seed) coriandru,
cinnamon scorțișoară, cloves cuișoare, allspice ienibahar, paprika boia,
black pepper piper negru, bay leaf frunză de dafin, thyme cimbru, oregano oregano,
basil busuioc, cardamom cardamom, nutmeg nucșoară, peanuts arahide,
pine nuts semințe de pin, almonds migdale, walnuts nuci, hazelnuts alune de pădure,
pistachios fistic, raisins stafide, currants coacăze uscate, honey miere,
tahini tahini, chickpeas năut, lentils linte, fava beans bob, beans fasole,
peas mazăre, okra bame, molokhia molokhia (frunze de iută), vine leaves frunze de viță,
cabbage varză, cauliflower conopidă, spinach spanac, bean sprouts germeni de fasole,
daikon ridiche albă (daikon), pasta paste, vermicelli fidea, bread pâine,
broth/stock supă concentrată (NOT "ciorbă"), lemon lămâie, orange portocală,
apple măr, banana banană, dates curmale, sesame susan, vanilla vanilie,
cocoa cacao, chocolate ciocolată, vinegar oțet, baking soda bicarbonat de sodiu,
yeast drojdie, baking powder praf de copt, cornstarch amidon de porumb,
starch amidon, syrup sirop, rose water apă de trandafiri, orange blossom water
apă de flori de portocal, water apă, ice gheață.

## Known mistranslations (must NOT appear wrong)

- "allspice" is NOT "toate condimentele" → "ienibahar"
- "pine nuts" → "semințe de pin" (NOT "nuci")
- "cilantro/coriander leaves" → "coriandru verde" (NOT "pătrunjel")
- "currants" → "coacăze uscate"; "raisins" → "stafide"
- "cloves" (spice) → "cuișoare"; "cloves of garlic" → "căței de usturoi"
- "broth/stock" → "supă concentrată" / "supă" (never "ciorbă", which is a sour soup)
- "corn" → "porumb" (NOT "corn"); "pepper" (vegetable) → "ardei", (spice) → "piper"
- "eggplant" → "vânătă/vinete" (NOT "patlagea"); "zucchini" → "dovlecel"
- "cream" → "smântână lichidă"; "sour cream" → "smântână"
- never "porc/slănină/bacon/șuncă/jambon/untură/vin/bere/rom/lichior/coniac" (halal rule)

## Halal vocabulary (never produce)

carne de porc, porc, slănină, bacon, șuncă, jambon, untură, mistreț;
vin (note: "oțet de vin" is flagged too, so write just "oțet" unless the English
names it), bere (but "drojdie de bere" = brewer's yeast is allowlisted),
rom, lichior, coniac, vodcă, whisky, brandy, țuică, pălincă, șampanie, alcool
(except "fără alcool"); carne de urs, carne de cal, carne de câine.
"vinete" (eggplants) is safe: matching is word-bounded on "vin".
Unspecified "ground meat/minced meat" → "carne tocată" alone is fine when the
English leaves it unspecified; if the English names the animal, keep it.
