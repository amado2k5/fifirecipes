# Devin task: fix language / script problems in the world-cuisine recipes

## Context
Repo: fifirecipes, branch off latest `main` (HEAD `1d736267`).
Scope: the 162 world-cuisine recipes (`w-cn-*`, `w-fr-*`, `w-jp-*`, `w-ma-*`, `w-mx-*`, `w-vn-*`):
- Arabic source: `src/data/world/{cn,fr,jp,ma,mx,vn}.json` (fields `title`, `category`, `method`, `prep`, `cook`, `servings`, `notes`, `ingredients[i][0..1]`, `steps[i][0]`)
- 24 translation tables: `src/data/recipeTranslations{,Es,Fr,De,It,Nl,Pt,Pl,Sv,Tr,Id,Sw,El,Ru,Ja,Zh,Ko,Hi,Te,Fa,Ur,Ps,Ku,He}.json`, only the `w-*` keys

The Japan, Morocco and Mexico chapters are already `ready: true`, so users can see these errors now. Fix those three chapters first.

Commit `1d736267` ("Fix mixed-script corruption") fixed about 330 fields, but it missed a lot. A script-run scan of current `main` still finds the problems below. **Do not change the Egyptian, fah-\*, osool or kids recipes.**

## Step 0: write the checker first (and commit it)
Add `scripts/world/lint_language.py`. It should exit non-zero on any finding, and you'll run it before and after the fix. For every string field, split the text into runs of a single Unicode script and flag any run whose script is not allowed for the language:

| Lang | Allowed letter scripts |
|---|---|
| Arabic source (world/*.json), fa, ur, ps | Arabic |
| en, es, fr, de, it, nl, pt, pl, sv, tr, id, sw, **ku** (Kurmanji) | Latin |
| el | Greek · ru: Cyrillic · he: Hebrew · hi: Devanagari · te: Telugu · ko: Hangul · zh: Han · ja: Hiragana + Katakana + Han |

Always allowed: digits (Western and Arabic-Indic), punctuation, `×`, `°`, `½ ¼ ¾`, and the unit tokens `g kg ml l cm mm °C °F`. Also flag:
- the replacement character `U+FFFD` (`�`)
- runs of two different scripts glued together inside one word (e.g. `عصיר`, `ティース푼`, `Farciсsez`)
- in non-Latin languages, any Latin word longer than 2 letters

Add an `npm run lint:lang` script for it.

## Step 1: fix mixed-script corruption (current counts on main)
Rewrite each flagged field as natural, fully native text. Translate or transliterate foreign words into the target script. Never just delete the fragment.

- **Kurdish (`Ku`), the biggest problem:** the app's Kurdish is **Kurmanji in Latin script** (UI strings, `CHAPTER_NAMES_KU`, and all 1,881 core recipes, e.g. `meat-01` "Goşt û Mirîşka Kelandî"; `ku` is laid out LTR). Of the 162 world recipes, 86 are in Sorani Arabic script (wrong script for this app) and 76 are garbled pseudo-Kurmanji (`Kamaboko bi xwînê`: `xwînê` means "blood"). **Retranslate all 162 world recipes into proper Kurmanji (Latin script)** from the English table, matching the core recipes' vocabulary.
- **Hebrew (`He`), 52 recipes:** Arabic glued into Hebrew (`عصיר לימון` should be `מיץ לימון`, `הוסףعصיר`) and Korean `밀` (should be `קמח`/`חיטה`).
- **Japanese (`Ja`), 34 recipes:** Hangul inside katakana (`ティース푼`, about 100 amounts) should be `小さじ`. Use `小さじ`/`大さじ`/`カップ` consistently.
- **Urdu (`Ur`), 26 recipes:** Chinese `乾` / `乾燥` used for "dried" (`乾 خمیر`, `乾 گول فاوا بینز`) should be `خشک`.
- **Chinese (`Zh`), 33 recipes:** English left in sentences (`缓缓 simmer 的酱汁`), Japanese kana (`ふりかけ`), brand/romaji in parentheses (`Gari`, `Wakame`, `Cremini`, `Diamond Crystal`). Translate them, or drop the parenthetical when a Chinese name exists.
- **Korean (`Ko`), 22 recipes:** Katakana glued in (`카레 파ン` should be `카레빵`), Latin (`agedama`, `생 rice`, `Bil Zbib`).
- **Greek (`El`), 20 recipes:** German/Spanish leftovers (`schwarz piper` should be `μαύρο πιπέρι`, `warqa`, `queso fresco`, `de árbol`). Transliterate into Greek.
- **Russian (`Ru`), 14 recipes:** `Diamond Crystal`, `Bull Dog`, `Longhorn`, `queso fresco`, `(Hispanoamérica)`. Transliterate into Cyrillic or use a generic term (`кошерная соль`).
- **Persian (`Fa`), 8 recipes:** `dates` should be `خرما`, `yolks` should be `زرده‌ها`, `jalapeño` should be `هالاپینو`, `champignon`.
- **Hindi / Telugu / Pashto:** `�หยूड़` (Thai + U+FFFD, w-mx-004 Hi), `त fraish मछली` (w-mx-013 Hi), `融化的 బటర్` (w-mx-028 Te, which should be `కరిగించిన వెన్న`), `హరిత షిసో � Leaves` (w-jp-031 Te), `Bì cuốn` in Hi/Te/Ps notes.
- **Latin-script languages:** `均匀ment` (w-mx-030 Fr), `Farciсsez` with a Cyrillic с (w-cn-013 Fr), `chipсы` with Cyrillic (w-mx-033 Pl). Remove the native-script parentheticals `(Kōhaku Namasu 紅白なます)` (w-jp-022) and `(蛋撻)` (w-cn-008) from the titles and notes in all Latin-script languages, keeping only the romanized name.
- **Arabic source:** Cyrillic `ок` inside `الكокوس` (w-cn-009 ×2, w-mx-022) should be `جوز الهند`. `一把` as an amount (w-jp-023) should be `حفنة`.

## Step 2: Arabic quality (the user's main concern)
The Arabic in `src/data/world/*.json` is the primary language of the site and must read as natural, correct Arabic. Rules:
- No Latin, Cyrillic or CJK characters in any Arabic field.
- Use the established Arabic name for a dish when one exists. Otherwise give a clean Arabic transliteration, optionally followed by a short Arabic descriptor. Don't add labels like `(طعام)` / `(أكلة)` / `(الحلوى)`; those are Wikipedia-disambiguation leftovers.
- Use one spelling per term across all recipes (pick one and apply it everywhere).

**Wrong Arabic titles to fix (meaning is wrong, not just spelling):**
| id | current | problem | suggested |
|---|---|---|---|
| w-mx-001 | العجوة المكسيكية | عجوة = date paste | صلصة الأدوبو المكسيكية |
| w-fr-008 | كرات الشوكولاتة الفرنسية | English is *French Chocolate Crêpes* | كريب الشوكولاتة الفرنسي |
| w-fr-004 | ثوم الماريناد | it's confit, not marinade | ثوم كونفي (مطهو ببطء في الزيت) |
| w-fr-007 | البطاطا المذابة | literal "melted potatoes" | بطاطس فوندان |
| w-fr-002 | كالاماري مع الطحينة اليونانية | tzatziki isn't tahini | كاليماري مع صلصة التزاتزيكي |
| w-fr-003 | الشاليمون (الكاليسون) | invented word | كاليسون (حلوى اللوز الفرنسية) |
| w-fr-006 | فلاميتش (فطيرة البصل الفرنسي) | it's leek, not onion | فلاميش (فطيرة الكرّاث الفرنسية) |
| w-fr-011 | الخبز المُعَطَّر (الكعك) | | كعكة التوابل الفرنسية (بان دبيس) |
| w-cn-002 | الباغوزي المخبوز | | باوزي مخبوز (كعك صيني محشو) |
| w-cn-005 | مأكولات بوذا | | طبق خضار بوذا |
| w-cn-006 | سلطة التوفو مع البيض المخمر | century egg | توفو مع بيض القرن |
| w-cn-007 | فونغ يانغ البيض بالجمبري | | إيغ فو يونغ بالجمبري (عجة صينية) |
| w-cn-008 | الحلى البيضية (التابا) | | تارت البيض الصيني |
| w-cn-009 | …بالفستق المطحون | peanuts ≠ pistachio | …بالفول السوداني المطحون |
| w-cn-011 | صلصة الغمس للشواء الساخن | hot pot ≠ grill | صلصة غمس الهوت بوت البكينية |
| w-cn-014 | الباغيت الصيني (منتو) | not a baguette | خبز المانتو الصيني على البخار |
| w-cn-016 | كعك الروبيان | crackers | رقائق الجمبري |
| w-cn-019 | …والصلصة الفولية | peanut sauce | …وصلصة الفول السوداني |
| w-jp-006 | داسي المزج (أواسه داشي) | typo | مرق الداشي (أواسه داشي) |
| w-jp-022 | الناماسو المخلل من الجاكون والجزر | جاكون = yacón, not daikon | ناماسو: مخلل الفجل الأبيض (دايكون) والجزر |
| w-jp-026 | …مع الكابتشي… | cabbage = ملفوف | حساء الميسو بالملفوف وبيض الأونسن |
| w-jp-030 | الشيكوكو | it's Shiruko | الشيروكو (حساء الفاصوليا الحمراء الحلو) |
| w-jp-032 | سوبيا (سوبا) | | نودلز السوبا |
| w-jp-034 | تاكويكي | Takoyaki | تاكوياكي |
| w-jp-012 | إيماواياكي (أوبانيكي) | | إيماغاوايكي (أوبانياكي) |
| w-jp-042 | …بالقمح المحمص | nukazuke = rice bran | …بنخالة الأرز |
| w-ma-007 | الشبكية | | الشباكية |
| w-ma-010 | غورية | | غريبة بالعسل |
| w-ma-015 | مقروض, category أطباق رئيسية / طهي بالغلي | it's a fried date pastry | category حلويات, method قلي |
| w-ma-025 | الطيحان المغربي | | طيحان محشي (طحال محشو) |
| w-mx-003 | (الأمريكتان الإسبانية) | | الألفاخور |
| w-mx-015 | شامويادا المكسيكية | | مانغونادا (شامويادا) |
| w-mx-019 | الشوشويات (البُليتة) | | شوشوياتس (كرات عجين الذرة) |
| w-mx-031 | …تصفيه (method) | | تصفية |
| w-mx-040 | الآذان (البالمييه) - نوع من الخبز الحلو | | بالمييه (أوريخاس) |
| w-mx-046 | الفلفل الحار المليء | المليء = "full" | فلفل محشي (تشيلي ريينو) |
| w-vn-002 | اللحم المشوي بورق اللف | | لحم بقري مشوي بأوراق اللا لوت |
| w-vn-004 | بانيه بياء | | بان بيا (كعكة فيتنامية محشوة) |
| w-vn-006 | شاي تروي نويك | Chè is a dessert, not tea | تشي تروي نووك (كرات أرز في شراب الزنجبيل) |
| w-vn-007 | ثَّاش سُوآنغ سَآو | broken diacritics | هلام العشب (ثاتش سونغ ساو) |

Also check every other title. Remove the disambiguation suffixes in w-ma-012 `(شوربة)`, w-ma-013 `(أكلة)`, w-mx-014 `(طعام)`, w-mx-022 `(الحلوى)`, w-mx-032 `(الغذاء)`.

**Wrong Arabic ingredient terms (fix everywhere they appear, ingredients and steps):**
- allspice: `الهيل` (which is cardamom) should be `بهارات حلوة / بهار جامايكي`
- cilantro: `كرفس` (celery) should be `كزبرة خضراء`
- crushed peanuts: `الفستق المطحون` should be `فول سوداني مطحون`
- bean sprouts: `فول الصويا` / `البراعم` should be `براعم الفاصولياء`
- daikon: `الجاكون` should be `فجل أبيض (دايكون)`
- heavy cream: `كريمة ثقيلة` should be `كريمة خفق`
- jalapeño: plain `فلفل حار` (loses meaning) should be `فلفل هالابينو`

**Normalize spelling variants (one form each):** `توفو` (not `توافو`/`تو فو`), `ميسو` (not `ميزو`), `بيكنج بودر` (currently 7 variants), `جبن كيسو فريسكو` (currently 5 variants), `تورتيا` (not `تورتيليا`/`تورتيليات`), `تشيبوتلي`, `هالابينو`. Write the canonical terms to `scripts/world/glossary_ar.json` and use them from there.

## Step 3: semantic spot-fixes found in other languages
- Ja w-ma-001: `アロエ` (aloe) for allspice should be `オールスパイス`. `ピスタチオ` for pine nuts should be `松の実`. `挽き肉のクミン/コリアンダー/シナモン` ("ground-meat cumin") should be `クミンパウダー` etc.
- Pl w-jp-022: `Kiszona rzyga` ("pickled vomit") should be `Marynowana rzodkiew daikon i marchew`
- Nl w-jp-022: `Zuurkool` (sauerkraut) should be `Ingelegde daikon en wortel`
- Fr w-jp-022: `Concombre` (cucumber) should be `Radis daikon`
- Ku `xwînê` (blood) everywhere: this gets fixed by the Kurmanji retranslation.
- After fixing the known ones, review all the translations of allspice, pine nuts, cilantro, daikon, peanuts and century egg in every language. The same mistakes probably repeat.

## Out of scope / leave alone
- The `chapter` value inside translation entries is Arabic in every language. That's harmless, because the runtime uses `CHAPTER_NAMES_*[chapterNumber]` (`src/utils/recipeLocalization.ts:3990`). Don't spend time on it.
- `×`, `A`/`B` section labels and `°F` in steps are fine.
- Don't change ids, ingredient/step counts, amounts, the `ready` flags, or the halal-related substitutions.

## Acceptance criteria
1. `npm run lint:lang` exits 0 on all 162 `w-*` recipes in the Arabic source and all 24 tables.
2. All 162 Kurdish `w-*` entries are in Kurmanji Latin script, matching the rest of the Kurdish table.
3. Every title in the Arabic table above is fixed, and no Arabic title ends in `(طعام)`/`(أكلة)`/`(الحلوى)`/`(الغذاء)`/`(شوربة)`.
4. Ingredient and instruction key counts per recipe are unchanged in every table (currently all match).
5. `npm run build` passes.
6. Open one PR per area: (a) linter + Arabic source, (b) Kurdish retranslation, (c) all other languages. Each PR description lists the before/after lint counts and 10 sample before → after rows. Don't self-merge. Leave the PRs for review.
