# Albanian (sq) translation conventions

Target: standard Albanian (shqip standard), Latin script. **ë and ç are required
letters** — never write e/c instead (e.g. ëmbëlsira, not embelsira; copë, not
cope). Left-to-right.

You receive `fills/sq-src/chunk-NN.json` — a dict `{recipeId: entry}` of ENGLISH
source entries. Output `fills/sq/chunk-NN.partK.json` files with the same shape
and the SAME recipe ids, fully translated.

## Output contract

For every recipe id in the source chunk, emit exactly one entry with these keys:

- `title` (required, Albanian)
- `chapter` — ONLY from the pinned map below; omit the key if source has none
- `category`, `cookingMethod` — pinned map below; omit if absent/null
- `prepTime`, `cookTime` — translate, e.g. "25 minutes" → "25 minuta",
  "1 hour" → "1 orë", "1.5 hours" → "1,5 orë"? NO — keep digits as-is:
  "1.5 hours" → "1.5 orë". Keep every number identical.
- `servings` — patterns below; keep every number identical
- `culturalNotes` — translate fully when the source has it (never shorten)
- `ingredients` — `{ "<same ingredient id>": {"name": "<albanian name>"} }`.
  Include EVERY ingredient id from the source. Value = `{"name": ...}` ONLY —
  do NOT copy `standardAmount`, `nameEn` or `amountEn` into the output.
- `instructions` — `{ "<same step key>": "<albanian step>" }`. Same keys as the
  source, in the same order. Translate each step COMPLETELY — never merge,
  drop, reorder or summarize steps. If a source step is an empty string "",
  output "—".

## Hard rules

- Keep all numbers, fractions (½, ¼, ¾), temperatures (°C / °F) and metric
  units (g, kg, ml, l, cm, mm) verbatim. NEVER convert units.
- Translate English unit words inside text: tablespoon(s)/tbsp → "lugë gjelle",
  teaspoon(s)/tsp → "lugë çaji", cup(s) → "filxhan", glass(es) → "gotë".
  But "1 kg" stays "1 kg", "200 g" stays "200 g".
- No foreign words — everything in Albanian. Exceptions: proper names,
  dish names (börek → burek is fine, baklava, kabsa, phở), brand names,
  and metric units.
- No pork or alcohol, including hidden ones. If the English says bacon → the
  recipe should never produce "bekon/proshutë/derr"; if it does, flag it in
  RESUME.md instead of translating. Same for wine/beer/spirits.
- `null`, `""`, missing keys → mirror the source (omit or keep empty).

## Pinned vocabulary

### Chapters (exact strings)

| source | Albanian |
|---|---|
| Chapter 1: Meats, Poultry & Seafood | Kapitulli 1: Mish, shpendë & ushqime deti |
| Chapter 2: Soups, Salads, Vegetables & Pulses | Kapitulli 2: Supa, sallata, perime & bishtajore |
| Chapter 2: Soups, Salads, Vegetables & Legumes | Kapitulli 2: Supa, sallata, perime & bishtajore |
| Chapter 2: Soups, Salads & Vegetables | Kapitulli 2: Supa, sallata & perime |
| Chapter 3: Starches, Stuffed Foods & Pastries | Kapitulli 3: Niseshte, pjata të mbushura & brumëra |
| Chapter 3: Starches | Kapitulli 3: Niseshte |
| Chapter 3: Pastas, Stuffed Dishes & Pastries | Kapitulli 3: Makarona, pjata të mbushura & brumëra |
| Chapter 4: Desserts & Beverages | Kapitulli 4: Ëmbëlsira & pije |
| Chapter 4: Pastries, Light Desserts & Beverages | Kapitulli 4: Brumëra, ëmbëlsira të lehta & pije |
| Chapter 4: Beverages & Refreshments | Kapitulli 4: Pije & freskuese |
| Chapter 5: Traditional Eastern Desserts & Sweets | Kapitulli 5: Ëmbëlsira lindore tradicionale |
| Chapter 9: Egyptian Cooking | Kapitulli 9: Kuzhina egjiptiane |
| Chapter 10: Fatma Abu Haty Channel Recipes | Kapitulli 10: Receta nga kanali Fatma Abu Haty |
| From Osool El Tahy (Principles of Cooking) | Nga Osool El Tahy (Parimet e gatimit) |
| مطبخ الهند | Kuzhina indiane |
| مطبخ إثيوبيا | Kuzhina etiopiane |
| مطبخ إسبانيا | Kuzhina spanjolle |
| مطبخ إيران | Kuzhina iraniane |
| مطبخ إيطاليا | Kuzhina italiane |
| مطبخ إندونيسيا | Kuzhina indoneziane |
| مطبخ الصين | Kuzhina kineze |
| مطبخ اليونان | Kuzhina greke |
| مطبخ اليابان | Kuzhina japoneze |
| مطبخ بيرو | Kuzhina peruane |
| مطبخ تركيا | Kuzhina turke |
| مطبخ تايلاند | Kuzhina tajlandeze |
| مطبخ فيتنام | Kuzhina vietnameze |
| مطبخ فرنسا | Kuzhina franceze |
| مطبخ الفلبين | Kuzhina filipinase |
| مطبخ كوريا الجنوبية | Kuzhina e Koresë së Jugut |
| مطبخ لبنان | Kuzhina libaneze |
| مطبخ المغرب | Kuzhina marokene |
| مطبخ المكسيك | Kuzhina meksikane |
| مطبخ ماليزيا | Kuzhina malajiane |
| مطبخ نيجيريا | Kuzhina nigeriane |

### Categories (exact strings)

| source | Albanian |
|---|---|
| Meats & Poultry | Mish & shpendë |
| Meats | Mish |
| Poultry | Shpendë |
| Fish & Seafood | Peshk & ushqime deti |
| Seafood | Ushqime deti |
| Quick Meals | Ushqime të shpejta |
| Savory Dishes | Pjata të kripura |
| Savory Favorites | Të preferuara të kripura |
| Starches | Niseshte |
| Grains & Starches | Drithëra & niseshte |
| Rice, Pastas & Bakes | Oriz, makarona & pjata në furrë |
| Pastries | Brumëra |
| Sweet Pastries | Brumëra të ëmbla |
| Baking & Pastries | Pjekje & brumëra |
| Stuffed Dishes | Pjata të mbushura |
| Vegetables | Perime |
| Vegetables & Stews | Perime & gjellë |
| Legumes | Bishtajore |
| Legumes & Heritage Dishes | Bishtajore & pjata tradicionale |
| Soups | Supa |
| Soups & Broths | Supa & lëngje |
| Salads | Sallata |
| Salads & Dips | Sallata & salca zhytëse |
| Eastern Desserts | Ëmbëlsira lindore |
| Western Desserts | Ëmbëlsira perëndimore |
| Light Desserts | Ëmbëlsira të lehta |
| Fruit Compote | Komposto frutash |
| Ice Cream | Akullore |
| Beverages | Pije |
| Beverages & Refreshments | Pije & freskuese |
| Various | Të ndryshme |

### Cooking methods (exact strings)

| source | Albanian |
|---|---|
| Baking | Pjekje |
| Oven Baking | Pjekje në furrë |
| Slow Simmering | Zierje e ngadaltë |
| Slow Simmering (Tasbeek) | Zierje e ngadaltë (Tasbeek) |
| Cooking | Gatim |
| cooking | gatim |
| Boiling | Zierje |
| Boiling & Broth | Zierje & lëng |
| Frying | Skuqje |
| Pan-Frying | Skuqje në tigan |
| Pan-Frying & Crisping | Skuqje në tigan & kërcëllim |
| Grilling | Në zgarë |
| Charcoal & Oven Grilling | Zgarë me qymyr & në furrë |
| Steaming | Në avull |
| Salads & Beverages | Sallata & pije |
| Preserving | Ruajtje |
| Preserving & Freezing | Ruajtje & ngrirje |
| No Cook | Pa gatim |
| assembly | asamblim |
| Chilled / Cold Preparation | Përgatitje e ftohtë / pa gatim |

### Servings patterns

- "N servings" → "N porsione"; "N–M servings" → "N–M porsione"
- "N pieces" → "N copë"; "N cups" → "N filxhana"; "N glasses" → "N gota"
- "N sandwiches" → "N sanduiçë"; "N pies" → "N pite"; "N loaves" → "N bukë"
- "N jars" → "N kavanoza"; "N people" → "N persona"
- "N balls" → "N toptha"; "N rolls" → "N rrotulla"; "N slices" → "N feta"
- "as needed" → "sipas nevojës"; "about N" → "rreth N"
- "enough for X" → "sa për X" (e.g. "sa për një tortë")
- "keeps N weeks/months" → "ruhet N javë/muaj"
- keep kg/g/ml quantities verbatim ("about 800 g" → "rreth 800 g")

### Ingredient glossary (pinned, extend consistently)

beef mish lope, chicken pulë, lamb mish qengji, fish peshk, shrimp karkalec,
egg vezë, milk qumësht, butter gjalpë, cheese djathë, yogurt kos,
rice oriz, flour miell, sugar sheqer, salt kripë, oil vaj, olive oil vaj ulliri,
onion qepë, garlic hudhër, tomato domate, potato patate, carrot karrotë,
eggplant patëllxhan, zucchini kungull i njomë, pepper spec, bell pepper spec i zier,
parsley majdanoz, cilantro koriandër i njomë, dill koper, mint mentë,
cumin kimion, coriander koriandër, cinnamon kanellë, cloves karafilë (erëzë),
allspice spec jamaikan, paprika paprika, black pepper piper i zi,
bay leaf gjethë dafine, thyme majë, oregano rigon, basil borzilok,
peanuts kikirikë, pine nuts mana pishë, almonds bajame, walnuts arra,
raisins rrush i thatë, currants stafide, honey mjaltë, tahini tahini,
chickpeas qiqra, lentils thjerrëza, beans fasule, peas bizele,
bean sprouts filiza fasule, daikon rrepkë e bardhë (daikon),
pasta makarona, bread bukë, butter oil/ghee gjalpë i shkrirë,
cream krem, sour cream krem i thartë, broth lëng mishi/buljon,
lemon limon, orange portokall, apple mollë, banana banane, dates hurma,
sesame susam, vanilla vanilje, cocoa kakao, chocolate çokollatë,
vinegar uthull, baking soda bikarbonat sode, yeast maje, baking powder pluhur pjekje,
cornstarch niseshte misri, starch niseshte, water ujë, ice akull.

## Known mistranslations (must NOT appear wrong)

- "allspice" is NOT "all spices" → "spec jamaikan"
- "pine nuts" → "mana pishë" (NOT "arra")
- "cilantro/coriander leaves" → "koriandër i njomë" (NOT "majdanoz")
- "currants" → "stafide"; "raisins" → "rrush i thatë"
- "cloves" (spice) → "karafilë"; "cloves of garlic" → "thelpinj hudhre"
- "broth/stock" → "lëng mishi" (NOT "supë")
- "bean sprouts" → "filiza fasule"; "daikon" → "rrepkë e bardhë (daikon)"
- never "proshutë/bekon/mish derri/verë/birrë/raki" — see halal rule

## Halal vocabulary (never produce)

mish derri, derr, proshutë, pancetë, bekon, sallam, mortadelë, lard;
verë/vera (alcohol; "verë" as a season means summer — prefer "stinë e verës"
only if the English literally says summer, and it will be flagged, so prefer
rephrasing); birrë, raki, vodka, uiski, brendi, konjak, likër, shampanjë,
vermut, arak, tequila; mish ari, kalë/kuaj, qen.
Unspecified "ground meat/minced meat" → "mish i grirë" alone is fine when the
English leaves it unspecified; if the English names the animal, keep it.
