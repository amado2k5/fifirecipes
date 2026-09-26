# Dish naming for the Fatma Abu Haty channel import

This folder holds YouTube videos from the channel of فاطمة أبو حاتي that still
need their dishes named. Naming is step 2 of the local pipeline in
`scripts/recipe-videos/channel/`. It is done here by a Claude session instead of
the local model, and the results are merged back on the Mac.

## Task

For each `batch_NNN.jsonl`, write `result_NNN.jsonl` next to it: one line per
video, in any order, covering every video in the batch.

Input line: `{"id", "title", "chapters", "description"}` (description is the
first 900 characters of the video description; it often lists the ingredients).

Output line (JSON, one per line, Arabic text as UTF-8, not escaped):

```json
{"id": "HPMa3h8nY9k", "kind": "recipe", "dishes": [{"name": "الكبيبة الغمراوي", "category": "لحوم وطيور", "method": "سلق"}]}
```

- `kind`
  - `recipe`: the video makes one dish.
  - `multi`: it makes several complete dishes, including "3 ideas for…" videos.
  - `other`: not a recipe (vlog, appliance review with no real dish, children's story, cleaning tips, greetings, contest).
- `dishes`: empty exactly when `kind` is `other`.
- `name`: the dish as a cookbook would title it, in short clear Arabic. Drop the
  promotional words ("سر", "أسهل طريقة", "على أصولها", "زي المطاعم"), and keep
  what distinguishes the dish ("كفتة الأرز", "بسبوسة بالقشطة"). Egyptian names are
  fine (فراخ، رز، مكرونة). Titles in English get an Arabic dish name.
- Complete side dishes named in the title (rice, salad, sauce) are dishes of their own.
- `category`: exactly one of
  لحوم وطيور، بحريات، خضروات، بقوليات، محشوات، نشويات، شوربات وحساء، سلطات، معجنات،
  أكلات شهية، وجبات سريعة، حلويات شرقية، حلويات غربية، حلويات خفيفة، فطائر حلوة،
  آيس كريم، مشروبات، خشاف
- `method`: the cooking method in a word or two (سلق، قلي، شوي، خبز في الفرن، طاجن، بدون طهي…).
- **Never guess.** When the title and description do not name the dish (for example
  "كيكة الطفولة", "أربع حشوات مختلفة", "3 أفكار للانش بوكس"), write the most precise
  general name they do give ("كيكة", "جلاش رول") and add `"unclear": true` to that
  dish. Do not invent fillings or flavours. The pipeline names these later from the
  video's transcript.

Examples (from videos already named):

| Title (shortened) | Result |
|---|---|
| اسرار البقلاوة بالقشطة… قرمشة من برّه | recipe: بقلاوة بالقشطة (حلويات شرقية) |
| الملوخية الخضراء مع الفراخ المحمرة والرز المفلفل | multi: ملوخية خضراء، فراخ محمرة، رز بالشعرية |
| ريحة البيت… وكيكة الطفولة اللي بتدوب | recipe: كيكة (unclear) |
| رحلتي من أم إلي صانعه محتوي طبخ | other |
| تجربتي مع قلاية بدون زيت… هتحمري وتخبزي | other, unless the description shows a real dish being cooked |

## Workflow

1. Name one batch at a time and write its `result_NNN.jsonl`.
2. Check it (plain Python, no dependencies):
   `python scripts/recipe-videos/channel/check_naming.py transcripts/channel-fatma-abu-haty`
   It lists every problem (missing videos, bad categories, bad JSON). Fix them and
   re-run it until batches you have finished report none. Batches you have not
   reached yet show as "missing"; that is expected.
3. Commit and push the result files after every few batches, so work is never lost.
   Do not change the batch files, the scripts, or anything outside this folder.

When every batch has a clean result file, say so. On the Mac, the results are then
merged with `check_naming.py … --merge` and the pipeline continues with matching.
