#!/usr/bin/env python3
"""Merge a /tmp/<iso>-<Lang>.json translation file into scripts/world/i18n-fill/<Lang>.json.

Usage: python3 tmp/w_merge.py <iso> <Lang>

Input format: {rid: {"t": title, "i": [[name, amount], ...], "s": [step, ...], "n": notes}}
- i entries are zipped onto the English ingredient keys in order
- s entries are zipped onto the English instruction keys in order
Validates counts against the catalog English source before merging.
"""
import json
import re
import sys

REPO = '/Users/ahmedabdelaal/Documents/GitHub/fifirecipes'
iso, lang = sys.argv[1], sys.argv[2]
src = f'/tmp/{iso}-{lang}.json'

cat = json.load(open(f'{REPO}/src/data/world/{iso}.json'))


def en_src(e):
    return {'title': e['titleEn'],
            'ingredients': {f"{e['id']}-i{n + 1}":
                            {'name': i[3] or i[0],
                             'standardAmount': i[4] or i[1]}
                            for n, i in enumerate(e['ingredients'])},
            'instructions': {str(i + 1): s[1] or s[0]
                             for i, s in enumerate(e['steps'])},
            'culturalNotes': e.get('notesEn') or ''}


en = {e['id']: en_src(e) for e in cat}
T = json.load(open(src))
out = {}
errs = []
for rid, e in en.items():
    t = T.get(rid)
    if t is None:
        errs.append(f'{rid}: missing from fill')
        continue
    if len(t['i']) != len(e['ingredients']):
        errs.append(f'{rid}: {len(t["i"])} ingredients vs {len(e["ingredients"])} en')
        continue
    if len(t['s']) != len(e['instructions']):
        errs.append(f'{rid}: {len(t["s"])} steps vs {len(e["instructions"])} en')
        continue
    ing = {k: {'name': n, 'standardAmount': a}
           for k, (n, a) in zip(e['ingredients'], t['i'])}
    ins = {k: s for k, s in zip(e['instructions'], t['s'])}
    out[rid] = {'title': t['t'], 'ingredients': ing, 'instructions': ins,
                'culturalNotes': t['n'], 'chapter': iso}


def nums(s):
    return re.findall(r'\d+(?:[.,]\d+)?', s)


EXTRA_OK = ('175', '188', '165', '43', '45', '180', '190', '200', '160',
            '220', '25', '2', '23', '33', '2.5', '30', '120', '240', '480',
            '60', '710', '950', '360', '180')

for rid, e in en.items():
    t = out.get(rid)
    if not t:
        continue
    for k, es in e['instructions'].items():
        tn = nums(t['instructions'][k])
        en_ = nums(es)
        extra = [x for x in tn if x not in en_ and x not in EXTRA_OK]
        if extra:
            print(f'NUM? {rid} step {k}: extra {extra} | en={en_} | {t["instructions"][k][:80]}')

if errs:
    print('\n'.join(errs))
    sys.exit(1)
if len(out) != len(en):
    print(f'only {len(out)} of {len(en)} entries')
    sys.exit(1)

p = f'{REPO}/scripts/world/i18n-fill/{lang}.json'
d = json.load(open(p))
d.update(out)
with open(p, 'w') as f:
    json.dump(d, f, ensure_ascii=False, indent=1)
print(f'{lang}: {len(out)} {iso} entries merged into {p}')
