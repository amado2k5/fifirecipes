#!/usr/bin/env python3
"""Export missing translation entries for manual (Devin-model) translation and
merge completed batches back.

    .venv/bin/python fill-i18n.py --export ku      # -> world/i18n-todo/ku.json
    .venv/bin/python fill-i18n.py --apply ku       # <- world/i18n-fill/ku.json
    .venv/bin/python fill-i18n.py --status         # gap report

Fill files map recipe id -> entry with title/ingredients/instructions/
culturalNotes. Keys must match the source entry exactly; invalid entries are
left pending and reported.
"""
import argparse
import json
import sys
from pathlib import Path

import yaml

REPO = Path(__file__).resolve().parents[2]
SRC_DATA = REPO / 'src' / 'data'
WORLD = REPO / 'world'
TODO = Path(__file__).parent / 'i18n-fill-src'
FILL = Path(__file__).parent / 'i18n-fill'

LANGS = {'De': 'German', 'El': 'Greek', 'Es': 'Spanish', 'Fa': 'Persian',
         'Fr': 'French', 'He': 'Hebrew', 'Hi': 'Hindi', 'Id': 'Indonesian',
         'It': 'Italian', 'Ja': 'Japanese', 'Ko': 'Korean', 'Ku': 'Kurdish',
         'Nl': 'Dutch', 'Pl': 'Polish', 'Ps': 'Pashto', 'Pt': 'Portuguese',
         'Ru': 'Russian', 'Sv': 'Swedish', 'Sw': 'Swahili', 'Te': 'Telugu', 'Cs': 'Czech',
         'Tr': 'Turkish', 'Ur': 'Urdu', 'Zh': 'Chinese', 'Bn': 'Bengali', 'Vi': 'Vietnamese',
         'Sq': 'Albanian'}


def world_entries() -> list[dict]:
    out = []
    for p in sorted((SRC_DATA / 'world').glob('[a-z][a-z].json')):
        out += json.loads(p.read_text())
    return out


def table_path(suffix: str) -> Path:
    return SRC_DATA / ('recipeTranslations.json' if suffix == 'en'
                       else f'recipeTranslations{suffix}.json')


def load_table(suffix: str) -> dict:
    p = table_path(suffix)
    return json.loads(p.read_text()) if p.exists() else {}


def en_src(e: dict) -> dict:
    return {'title': e['titleEn'],
            'ingredients': {f"{e['id']}-i{n + 1}":
                            {'name': i[3] or i[0],
                             'standardAmount': i[4] or i[1]}
                            for n, i in enumerate(e['ingredients'])},
            'instructions': {str(i + 1): s[1] or s[0]
                             for i, s in enumerate(e['steps'])},
            'culturalNotes': e.get('notesEn') or ''}


def valid(t: dict, src: dict) -> bool:
    if not isinstance(t, dict) or not t.get('title'):
        return False
    ings, ins = t.get('ingredients'), t.get('instructions')
    if not isinstance(ings, dict) or not isinstance(ins, dict):
        return False
    if set(ings) != set(src['ingredients']) or set(ins) != set(src['instructions']):
        return False
    return all(isinstance(v, dict) and v.get('name') for v in ings.values())


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--export', metavar='LANG')
    ap.add_argument('--apply', metavar='LANG')
    ap.add_argument('--status', action='store_true')
    args = ap.parse_args()

    entries = {e['id']: e for e in world_entries()}

    if args.status:
        for suffix in ['en', *LANGS]:
            table = load_table(suffix)
            miss = [i for i in entries if i not in table]
            if miss:
                print(f'{suffix}: {len(miss)} missing')
        return

    suffix = args.export or args.apply or ''
    lang_name = LANGS.get(suffix, 'English')
    table = load_table(suffix)
    missing = [e for e in entries.values() if e['id'] not in table]

    if args.export:
        TODO.mkdir(exist_ok=True)
        payload = {e['id']: en_src(e) for e in missing}
        (TODO / f'{suffix}.json').write_text(
            json.dumps({'_lang': lang_name, **payload},
                       ensure_ascii=False, indent=1))
        print(f'{len(payload)} entries -> world/i18n-todo/{suffix}.json '
              f'({lang_name})')
        return

    # apply
    fill_path = FILL / f'{suffix}.json'
    if not fill_path.exists():
        sys.exit(f'no fill file: {fill_path}')
    fill = json.loads(fill_path.read_text())
    srcs = {e['id']: en_src(e) for e in missing}
    ok, bad = 0, []
    for rid, t in fill.items():
        if rid in srcs and valid(t, srcs[rid]):
            t['chapter'] = entries[rid]['chapter']
            table[rid] = t
            ok += 1
        else:
            bad.append(rid)
    table_path(suffix).write_text(json.dumps(table, ensure_ascii=False,
                                           indent=1) + '\n')
    print(f'{suffix}: {ok} applied, {len(bad)} invalid {bad[:8]}')


if __name__ == '__main__':
    main()
