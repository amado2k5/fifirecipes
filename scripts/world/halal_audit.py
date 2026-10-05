#!/usr/bin/env python3
"""Halal audit of every world recipe already in the catalog.

    python3 scripts/world/halal_audit.py            # exit 1 if anything is haram
    python3 scripts/world/halal_audit.py --review   # also list 'uncertain' hits

distill.py gates drafts before import, but rules evolve (chashu slipped
through until it was added). Run this after every import and before marking
a chapter ready. A haram hit means: swap the ingredient for a halal
equivalent in the source text, or remove the recipe and add its slug to
vetoed.txt. See docs/TRANSLATION_GUIDE.md.
"""
import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from halal import gate  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--review', action='store_true')
    args = ap.parse_args()
    haram = 0
    for f in sorted((ROOT / 'src/data/world').glob('*.json')):
        for r in json.loads(f.read_text()):
            text = ' '.join([r['titleEn'], r.get('notesEn') or '',
                             *[f'{g[3]} {g[4]}' for g in r['ingredients']],
                             *[s[1] for s in r['steps']]])
            verdict, hits = gate(text)
            if verdict == 'haram' or (args.review and verdict == 'uncertain'):
                print(f"{verdict:9} {r['id']} {r['titleEn'][:50]} | {', '.join(hits)}")
            haram += verdict == 'haram'
    print(f'{haram} haram recipes')
    sys.exit(1 if haram else 0)


if __name__ == '__main__':
    main()
