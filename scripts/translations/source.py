#!/usr/bin/env python3
"""Dump source text for translators as JSONL.

  source.py recipes fah-001 fah-202   English entry + Arabic original per recipe
  source.py missing <lang> fah-001 fah-202   same, only recipes absent from <lang>
  source.py notes <lang>              English culturalNotes missing in <lang>
  source.py glossary <lang>           English -> <lang> ingredient names already in use
"""

import collections
import json
import sys
from pathlib import Path

from merge import DATA, id_key, table_path


def arabic_originals():
    out = {}
    for path in sorted((DATA / 'fatmaAbuHaty').glob('*.json')):
        records = json.loads(path.read_text(encoding='utf-8'))
        if isinstance(records, list):
            for r in records:
                if isinstance(r, dict) and str(r.get('id', '')).startswith('fah-'):
                    out[r['id']] = {k: r.get(k) for k in ('title', 'prep', 'cook', 'servings', 'ingredients', 'steps', 'notes')}
    return out


def emit(obj):
    print(json.dumps(obj, ensure_ascii=False))


def main():
    mode = sys.argv[1]
    english = json.loads(table_path('en').read_text(encoding='utf-8'))
    if mode in ('recipes', 'missing'):
        args = sys.argv[2:]
        target = json.loads(table_path(args.pop(0)).read_text(encoding='utf-8')) if mode == 'missing' else {}
        start, end = id_key(args[0]), id_key(args[1])
        arabic = arabic_originals()
        for rid in sorted((k for k in english if id_key(k)[0] == start[0] and start <= id_key(k) <= end), key=id_key):
            if rid not in target:
                emit({'id': rid, 'en': english[rid], 'ar': arabic.get(rid)})
    elif mode == 'notes':
        target = json.loads(table_path(sys.argv[2]).read_text(encoding='utf-8'))
        for rid, entry in english.items():
            if entry.get('culturalNotes') and rid in target and not target[rid].get('culturalNotes'):
                emit({'id': rid, 'title': target[rid].get('title'), 'culturalNotes': entry['culturalNotes']})
    elif mode == 'glossary':
        target = json.loads(table_path(sys.argv[2]).read_text(encoding='utf-8'))
        pairs = collections.defaultdict(collections.Counter)
        for rid, entry in target.items():
            for iid, value in (entry.get('ingredients') or {}).items():
                src = english.get(rid, {}).get('ingredients', {}).get(iid, {}).get('name')
                if src and value.get('name'):
                    pairs[src.strip().lower()][value['name'].strip()] += 1
        for src, counts in sorted(pairs.items(), key=lambda kv: -sum(kv[1].values())):
            name, n = counts.most_common(1)[0]
            print(f'{src}\t{name}\t{n}')
    else:
        sys.exit(__doc__)


if __name__ == '__main__':
    main()
