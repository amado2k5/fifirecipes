"""Step 1 of the dietary pipeline: compact English view of every recipe.

Reads the generated public/data/recipes/*.json and writes
  <out>/recipes.jsonl   one compact recipe per line (id, title, ingredients, steps)
  <out>/batch-NNN.json  the same, in batches for the AI reviewers
Usage: python3 scripts/diet/extract.py <public/data/recipes> <out> [--batch 50]
"""
import json, sys, glob, os, argparse

ap = argparse.ArgumentParser()
ap.add_argument('src'); ap.add_argument('out'); ap.add_argument('--batch', type=int, default=50)
a = ap.parse_args()
os.makedirs(a.out, exist_ok=True)

def compact(f):
    d = json.load(open(f)); r = d['recipe']; en = d['translations'].get('en') or {}
    ings = []
    for i in r.get('masterIngredients', []):
        e = (en.get('ingredients') or {}).get(i['id']) or {}
        ings.append(f"{e.get('name') or i.get('nameEn') or i['name']} | {e.get('standardAmount') or i.get('standardAmountEn') or i.get('standardAmount','')}")
    steps = en.get('instructions') or {}
    if steps:
        steps = [steps[k] for k in sorted(steps, key=lambda k: int(k) if str(k).isdigit() else 0)]
    else:
        steps = [s.get('textEn') or s['text'] for s in r.get('uniqueInstructions', [])]
    return {'id': r['id'], 'title': en.get('title') or r.get('titleEn') or r['title'],
            'category': en.get('category', ''), 'ingredients': ings, 'steps': steps}

recipes = [compact(f) for f in sorted(glob.glob(os.path.join(a.src, '*.json')))]
with open(os.path.join(a.out, 'recipes.jsonl'), 'w') as fh:
    for r in recipes: fh.write(json.dumps(r, ensure_ascii=False) + '\n')
for n in range(0, len(recipes), a.batch):
    json.dump(recipes[n:n + a.batch], open(os.path.join(a.out, f'batch-{n // a.batch:03d}.json'), 'w'), ensure_ascii=False, indent=0)
print(len(recipes), 'recipes,', (len(recipes) + a.batch - 1) // a.batch, 'batches')
