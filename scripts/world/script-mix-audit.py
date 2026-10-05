#!/usr/bin/env python3
"""Detect mixed-script corruption (Latin fragments embedded in native-script text).

    .venv/bin/python script-mix-audit.py            # catalog + all tables
    .venv/bin/python script-mix-audit.py --titles   # titles only

Catches the token-level corruption the local model produces:
'فrijوليس', 'اسcoop', '티ー스poon', 'بowl', 'تسوkemen', '羊肉börek'.
Units (cm, g, tsp), temps (F/C), section letters (A/B) and the
multiplication sign are whitelisted.
"""
import argparse
import glob
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
UNITS = re.compile(
    r'^(?:cm|mm|g|kg|ml|l|tsp|tbsp|F|C|x|X|×|A|B|oz|lb|mins?|hrs?|OK)$',
    re.IGNORECASE,
)
# known-good proper nouns / romanised dish names adjacent to native script
ALLOWED = {'Diamond', 'Crystal', 'Bì', 'cuốn'}
SCRIPT = {
    'Fa': r'[؀-ۿ]', 'Ur': r'[؀-ۿ]', 'Ps': r'[؀-ۿ]',
    'He': r'[֐-׿]', 'Ja': r'[぀-ヿ一-鿿]',
    'Ko': r'[가-힯]', 'Zh': r'[一-鿿]',
    'Hi': r'[ऀ-ॿ]', 'Te': r'[ఀ-౿]',
    'El': r'[Ͱ-Ͽ]', 'Ru': r'[Ѐ-ӿ]',
}
LATIN = re.compile(r'[A-Za-zÀ-ž]+')


def scan(value, rx, hits):
    if isinstance(value, str):
        for m in LATIN.finditer(value):
            if UNITS.match(m.group(0)) or m.group(0) in ALLOWED:
                continue
            before = value[m.start() - 1] if m.start() else ''
            after = value[m.end()] if m.end() < len(value) else ''
            if re.match(rx, before) or re.match(rx, after):
                hits.append((m.group(0), value[:100]))
                return
    elif isinstance(value, dict):
        for v in value.values():
            scan(v, rx, hits)
    elif isinstance(value, list):
        for v in value:
            scan(v, rx, hits)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--titles', action='store_true')
    args = ap.parse_args()
    total = 0

    # Arabic catalog (world/*.json) — Arabic is the source language
    ar = SCRIPT['Fa']
    for f in sorted((ROOT / 'src/data/world').glob('*.json')):
        for e in json.loads(f.read_text()):
            hits = []
            if args.titles:
                scan(e.get('title', ''), ar, hits)
            else:
                scan({k: e[k] for k in
                      ('title', 'notes', 'ingredients', 'steps') if k in e},
                     ar, hits)
            for tok, s in hits:
                total += 1
                print(f'{f.stem} {e["id"]}: {tok} | {s}')

    # translation tables
    for f in sorted((ROOT / 'src/data').glob('recipeTranslations*.json')):
        lang = f.name.split('recipeTranslations')[1].replace('.json', '')
        lang = lang or 'En'
        if lang not in SCRIPT:
            continue
        rx = SCRIPT[lang]
        for rid, entry in json.loads(f.read_text()).items():
            if not rid.startswith('w-'):
                continue
            hits = []
            scan(entry.get('title', '') if args.titles else entry, rx, hits)
            for tok, s in hits:
                total += 1
                print(f'{lang} {rid}: {tok} | {s}')

    print(f'\n{total} corrupted fields')
    sys.exit(1 if total else 0)


if __name__ == '__main__':
    main()
