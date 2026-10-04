#!/usr/bin/env python3
"""Step 3 import: distilled drafts -> src/data/world/<iso2>.json.

    .venv/bin/python import.py --iso ma          # write entries (ready=false)
    .venv/bin/python import.py --iso ma --ready  # flip ready flags whose
                                                 # artifacts all exist

Re-runs the uniqueness gate against current site data (incl. earlier world
recipes) before writing, assigns w-<iso2>-NNN ids, and updates
world/dish_owner.yaml.
"""
import argparse
import json
import re
import urllib.parse
from pathlib import Path

import yaml

import db
import dupes
from worldutil import COUNTRIES, DISH_OWNER, DUPLICATES, REPO, WORLD

DISTILLED = WORLD / 'distilled'
SRC_DATA = REPO / 'src' / 'data'
READY_CHECKERS = []  # filled below

HARD_TO_MASTER = {'hard': 'master', 'easy': 'easy', 'medium': 'medium',
                  'master': 'master'}
ING_CATS = {'meat_poultry', 'seafood', 'vegetable', 'dairy_fat', 'grain_starch',
            'spice_seasoning', 'sweet_fruit', 'liquid', 'other'}


def next_ids(iso2: str, n: int, existing: list[dict]) -> list[str]:
    taken = {r['id'] for e in (SRC_DATA / 'world').glob('*.json')
             for r in json.loads(e.read_text())} | \
            {r['id'] for r in existing}
    nums = sorted(int(m.group(1)) for i in taken
                  if (m := re.fullmatch(r'w-' + iso2 + r'-(\d+)', i)))
    start = (nums[-1] + 1) if nums else 1
    return [f'w-{iso2}-{i:03d}' for i in range(start, start + n)]


def draft_to_entry(draft: dict, rid: str, country: dict) -> dict | None:
    try:
        cats = draft.get('category_ar', 'أطباق رئيسية')
        ings = []
        for ing in draft['ingredients']:
            cat = ing.get('cat', 'other')
            ings.append([ing['name_ar'], ing.get('amount_ar', ''),
                         cat if cat in ING_CATS else 'other',
                         ing.get('name_en'), ing.get('amount_en')])
        sar, sen = draft['steps_ar'], draft.get('steps_en', [])
        steps = [[a, sen[i] if i < len(sen) else ''] for i, a in enumerate(sar)]
        return {
            'id': rid,
            'title': draft['title_ar'],
            'titleEn': draft['title_en'],
            'chapter': country['chapter'],
            'chapterNumber': 10 + country['order'],
            'category': cats,
            'method': draft.get('method_ar', 'طهي'),
            'prep': draft.get('prep_ar'),
            'cook': draft.get('cook_ar'),
            'servings': draft.get('servings_ar'),
            'difficulty': HARD_TO_MASTER.get(
                draft.get('difficulty', 'medium'), 'medium'),
            'ingredients': ings,
            'steps': steps,
            'notes': draft.get('notes_ar'),
            'notesEn': draft.get('notes_en'),
            'sourceName': draft['_meta']['source_name'],
            'sourceUrl': draft['_meta']['source_url'],
            'imageBrief': draft.get('image_brief'),
            'ready': False,
        }
    except (KeyError, TypeError) as e:
        print(f"    {draft.get('_meta', {}).get('dish', '?')}: bad draft ({e})")
        return None


_LANG_FILES = None


def _all_translation_ids() -> set[str]:
    global _LANG_FILES
    if _LANG_FILES is None:
        ids = None
        for f in SRC_DATA.glob('recipeTranslations*.json'):
            have = set(json.loads(f.read_text()))
            ids = have if ids is None else ids & have
        _LANG_FILES = ids or set()
    return _LANG_FILES


def artifacts_ready(rid: str) -> bool:
    """Banner + thumbnail + every translation + an estimate entry."""
    pub = REPO / 'public'
    if not (pub / 'recipe-images' / f'{rid}.jpg').exists():
        return False
    if not (pub / 'recipe-images' / 'thumbs' / f'{rid}.jpg').exists():
        return False
    if rid not in _all_translation_ids():
        return False
    for f in (SRC_DATA / 'recipeEstimatesData.ts',
              SRC_DATA / 'additionalRecipeEstimates.ts',
              SRC_DATA / 'worldRecipeEstimates.ts'):
        if f.exists() and f"'{rid}'" in f.read_text():
            return True
    return False


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', required=True)
    ap.add_argument('--ready', action='store_true')
    args = ap.parse_args()

    countries = {c['iso2']: c for c in
                 yaml.safe_load(COUNTRIES.read_text())['countries']}
    country = countries[args.iso]
    path = SRC_DATA / 'world' / f'{args.iso}.json'
    existing = json.loads(path.read_text()) if path.exists() else []

    if args.ready:
        n = 0
        for e in existing:
            if not e.get('ready') and artifacts_ready(e['id']):
                e['ready'] = True
                n += 1
        path.parent.mkdir(exist_ok=True)
        path.write_text(json.dumps(existing, ensure_ascii=False, indent=1))
        print(f'{n} entries marked ready in {path.name}')
        return

    drafts = sorted(DISTILLED.glob(f'{args.iso}/*.json'))
    drafts = [d for d in drafts if d.parent.name == args.iso]
    print(f'{len(drafts)} drafts for {args.iso}')
    # idempotent: skip drafts already imported under a previous run
    imported_srcs = {e.get('sourceUrl') for e in existing}
    imported_titles = {str(e.get('titleEn', '')).lower() for e in existing}
    # re-run title dup gate vs current site
    kept = []
    for d in drafts:
        draft = json.loads(d.read_text())
        dish = draft.get('title_en') or draft['_meta']['dish']
        if draft['_meta'].get('source_url') in imported_srcs or \
                str(dish).lower() in imported_titles:
            continue
        if (m := dupes.title_match(dish)) and m['id'] not in \
                {e['id'] for e in existing}:
            print(f'    dup {dish} -> {m["id"]}; skipped')
            dupes.log_duplicate(dish, args.iso, m, 'import-title')
            continue
        kept.append((d, draft))
    ids = next_ids(args.iso, len(kept), existing)
    entries = existing[:]
    for (d, draft), rid in zip(kept, ids):
        e = draft_to_entry(draft, rid, country)
        if e:
            entries.append(e)
    path.parent.mkdir(exist_ok=True)
    path.write_text(json.dumps(entries, ensure_ascii=False, indent=1))
    # dish ownership
    owner = yaml.safe_load(DISH_OWNER.read_text()) if DISH_OWNER.exists() else {}
    for e in entries:
        key = e['titleEn'].lower()
        owner.setdefault(key, {'iso2': args.iso, 'id': e['id']})
    DISH_OWNER.write_text(yaml.safe_dump(owner, allow_unicode=True,
                                         sort_keys=True))
    write_index()
    print(f'{len(kept)} imported -> {path} ({len(entries)} total)')


def write_index() -> None:
    """Regenerate src/data/world/index.ts — static imports of every country
    file (Node-side data scripts can't use import.meta.glob)."""
    files = sorted(p.stem for p in (SRC_DATA / 'world').glob('*.json'))
    lines = [
        '// Generated by scripts/world/import.py — do not edit by hand.',
        *[f"import {f.replace('-', '_')} from './{f}.json';" for f in files],
        '',
        'const worldEntries = ['
        + ', '.join(f'...{f.replace("-", "_")}' for f in files) + '];',
        'export default worldEntries;',
        '',
    ]
    (SRC_DATA / 'world' / 'index.ts').write_text('\n'.join(lines))


if __name__ == '__main__':
    main()
