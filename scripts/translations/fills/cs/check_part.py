#!/usr/bin/env python3
"""Validate a Czech translation part file against its English source."""
import json, re, sys

def numtoks(s):
    return re.findall(r'[¼½¾⅓⅔⅛]|\d+\s*°\s*[CF]|\d+(?:\.\d+)?', s)

def shape(a, b, path, bad):
    if isinstance(a, dict):
        if not isinstance(b, dict):
            bad.append((path, 'type', type(b)))
            return
        if set(a) != set(b):
            bad.append((path, 'keys', set(a) ^ set(b)))
        else:
            for k in a:
                shape(a[k], b[k], f'{path}.{k}', bad)
    elif isinstance(a, str) and not isinstance(b, str):
        bad.append((path, 'type', type(b)))

en_path, cs_path = sys.argv[1], sys.argv[2]
en, cs = json.load(open(en_path)), json.load(open(cs_path))
bad = []
extra = set(cs) - set(en)
missing = set(en) - set(cs)
if extra: print('EXTRA IDS:', sorted(extra))
if missing: print('MISSING IDS:', sorted(missing))
for rid in set(en) & set(cs):
    shape(en[rid], cs[rid], rid, bad)
    for sec in ('ingredients', 'instructions'):
        if sec not in en[rid] or not isinstance(cs[rid].get(sec), dict):
            continue
        for k in en[rid][sec]:
            if k not in cs[rid][sec]:
                continue
            ea = en[rid][sec][k]['standardAmount'] if sec == 'ingredients' else en[rid][sec][k]
            ca = cs[rid][sec][k]['standardAmount'] if sec == 'ingredients' else cs[rid][sec][k]
            if isinstance(ea, str) and isinstance(ca, str) and numtoks(ea) != numtoks(ca):
                bad.append((rid, k, 'nums', ea, ca))
print(f'{cs_path}: {len(cs)} ids, {len(bad)} problems')
for b in bad[:20]:
    print(' ', b)
sys.exit(1 if bad or extra or missing else 0)
