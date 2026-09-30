#!/usr/bin/env python3
"""Assemble translated recipe output into the site's translation JSON files.

Usage: assemble.py <lang> [<lang> ...]

Reads translate/out/<lang>.jsonl, converts each entry to the site shape
(ingredients become {name, standardAmount}), and merges the fah-* keys into
src/data/recipeTranslations<Suffix>.json. For 'en' it also writes
src/data/fatmaAbuHaty/titlesEn.json.
"""

import json
import sys
from pathlib import Path

BASE = Path(__file__).parent
OUTDIR = BASE / 'out'
DATA = BASE.parents[2] / 'src' / 'data'

SUFFIX = {
    'fr': 'Fr', 'es': 'Es', 'ja': 'Ja', 'hi': 'Hi', 'pt': 'Pt', 'ru': 'Ru',
    'zh': 'Zh', 'de': 'De', 'it': 'It', 'el': 'El', 'ur': 'Ur', 'fa': 'Fa',
    'tr': 'Tr', 'ku': 'Ku', 'id': 'Id', 'sw': 'Sw', 'ko': 'Ko', 'nl': 'Nl',
    'ps': 'Ps', 'he': 'He', 'pl': 'Pl', 'sv': 'Sv',
}


def site_entry(e):
    return {
        'title': e['title'],
        'prepTime': e.get('prepTime', ''),
        'cookTime': e.get('cookTime', ''),
        'servings': e.get('servings', ''),
        'culturalNotes': e.get('culturalNotes', ''),
        'ingredients': {
            iid: {'name': v['name'],
                  'standardAmount': v.get('amount', '')}
            for iid, v in e['ingredients'].items()
        },
        'instructions': e['instructions'],
    }


def assemble(lang):
    path = OUTDIR / f'{lang}.jsonl'
    entries = {}
    for line in open(path):
        line = line.strip()
        if not line:
            continue
        e = json.loads(line)
        entries[e['id']] = site_entry(e)
    if not entries:
        print(f'{lang}: no entries in {path}')
        return

    table_file = DATA / f'recipeTranslations{SUFFIX.get(lang, "")}.json'
    table = json.loads(table_file.read_text())
    table.update(entries)
    table_file.write_text(json.dumps(table, ensure_ascii=False, indent=1) + '\n')
    print(f'{lang}: merged {len(entries)} fah-* entries into {table_file.name} '
          f'({len(table)} total)')

    if lang == 'en':
        titles = {rid: e['title'] for rid, e in entries.items()}
        (DATA / 'fatmaAbuHaty' / 'titlesEn.json').write_text(
            json.dumps(titles, ensure_ascii=False, indent=1) + '\n')
        print(f'en: wrote {len(titles)} titles to titlesEn.json')


if __name__ == '__main__':
    for lang in sys.argv[1:]:
        assemble(lang)
