#!/usr/bin/env python3
"""Merge all chunk-*-part-*.json files into recipeTranslationsCs.json.

Usage: python3 merge_parts.py [--check-only]
Reports duplicate IDs, missing IDs vs the English table, and per-chunk coverage.
"""
import json, glob, os, sys, re, collections

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '../../../..'))
EN = os.path.join(REPO, 'src/data/recipeTranslations.json')
OUT = os.path.join(REPO, 'src/data/recipeTranslationsCs.json')

en = json.load(open(EN))
# Normalise off-vocab category/method spellings across agent part files.
NORMALISE = {
    'Východní dezerty': 'Východní sladkosti',
    'Pomalé tažení (tasbík)': 'Pomalé dušení (tasbík)',
    'Konervování a mrazení': 'Konzervování a mražení',
    'Konzerování a mrazení': 'Konzervování a mražení',
}

merged = {}
dupes = collections.Counter()
for f in sorted(glob.glob(os.path.join(HERE, 'chunk-*-part-*.json'))):
    d = json.load(open(f))
    for k in d:
        if k in merged:
            dupes[k] += 1
        merged[k] = d[k]
for v in merged.values():
    for field in ('category', 'cookingMethod'):
        if v.get(field) in NORMALISE:
            v[field] = NORMALISE[v[field]]

missing = sorted(set(en) - set(merged))
extra = sorted(set(merged) - set(en))

print(f'merged: {len(merged)} ids | english: {len(en)} | missing: {len(missing)} | extra: {len(extra)} | dupes: {len(dupes)}')
if dupes:
    print('duplicate ids:', dict(dupes))
if missing[:20]:
    print('missing sample:', missing[:20])
if extra[:20]:
    print('extra ids:', extra[:20])

# structural parity check on merged ids
problems = []
warnings = []
NUM_RE = r'\d+(?:[.,/-]\d+)?'
def norm(s):
    return s.replace(',', '.').replace('–', '-').replace('—', '-')
for rid in merged:
    if rid not in en:
        continue
    s, t = en[rid], merged[rid]
    si = set(s.get('ingredients', {}))
    ti = set(t.get('ingredients', {}))
    if si != ti:
        problems.append(f'{rid}: ingredient keys differ ({len(si)} vs {len(ti)})')
    sn = set(s.get('instructions', {}))
    tn = set(t.get('instructions', {}))
    if sn != tn:
        problems.append(f'{rid}: instruction keys differ ({len(sn)} vs {len(tn)})')
    # numeric parity in instructions (decimal-comma normalised, multiset
    # compare to allow grammatical reordering)
    for k in sn & tn:
        a = sorted(re.findall(NUM_RE, norm(s['instructions'][k])))
        b = sorted(re.findall(NUM_RE, norm(t['instructions'][k])))
        if a != b:
            problems.append(f'{rid} instr {k}: numbers {a} != {b}')
    # numeric parity in ingredient amounts (warning-only: spelled-out
    # numbers and en-dash/decimal-comma localization are legitimate)
    for ik in si & ti:
        a = sorted(re.findall(NUM_RE, norm(s['ingredients'][ik].get('standardAmount', ''))))
        b = sorted(re.findall(NUM_RE, norm(t['ingredients'][ik].get('standardAmount', ''))))
        if a != b:
            warnings.append(f'{rid} ingr {ik}: amounts {a} != {b}')

print(f'structural/numeric problems: {len(problems)} | amount warnings: {len(warnings)}')
for p in problems[:40]:
    print(' ', p)
for w in warnings[:40]:
    print('  ~', w)

if '--check-only' not in sys.argv:
    if missing or problems:
        print('NOT WRITING output: fix missing ids / problems first')
        sys.exit(1)
    with open(OUT, 'w', encoding='utf-8') as fh:
        json.dump(merged, fh, ensure_ascii=False, indent=1)
        fh.write('\n')
    print('wrote', OUT)
