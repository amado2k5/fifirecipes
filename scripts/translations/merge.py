#!/usr/bin/env python3
"""Merge translated recipes into src/data/recipeTranslations<Xx>.json.

Usage: merge.py <input.jsonl> <lang> [--from fah-001 --to fah-100]

Each input line is {"id", "title", "prepTime", "cookTime", "servings",
"culturalNotes", "ingredients": {id: {"name", "standardAmount"}},
"instructions": {"1": text, ...}}. Entries are validated against the English
table (same ingredient ids and step numbers, no empty strings) and appended to
the language file without re-serializing the existing entries. Ids already in
the file are replaced in place only for fields given (culturalNotes-only
lines are allowed for existing entries).
"""

import argparse
import json
import re
import sys
from pathlib import Path

DATA = Path(__file__).resolve().parents[2] / 'src' / 'data'
FIELDS = ('title', 'prepTime', 'cookTime', 'servings', 'culturalNotes')


def table_path(lang):
    return DATA / f"recipeTranslations{'' if lang == 'en' else lang[0].upper() + lang[1:]}.json"


def id_key(recipe_id):
    prefix, num = recipe_id.rsplit('-', 1)
    return prefix, int(num)


def validate(entry, src):
    errors = []
    for field in ('title',) + tuple(f for f in FIELDS[1:] if src.get(f)):
        if not isinstance(entry.get(field), str) or not entry[field].strip():
            errors.append(f'missing {field}')
    ingredients = entry.get('ingredients') or {}
    if set(ingredients) != set(src['ingredients']):
        errors.append(f'ingredient ids differ: missing {sorted(set(src["ingredients"]) - set(ingredients))} '
                      f'extra {sorted(set(ingredients) - set(src["ingredients"]))}')
    for iid, value in ingredients.items():
        if not isinstance(value, dict) or not str(value.get('name', '')).strip():
            errors.append(f'empty name {iid}')
        elif src['ingredients'].get(iid, {}).get('standardAmount') and not str(value.get('standardAmount', '')).strip():
            errors.append(f'empty amount {iid}')
    steps = entry.get('instructions') or {}
    if set(steps) != set(src['instructions']):
        errors.append(f'steps differ: missing {sorted(set(src["instructions"]) - set(steps))} '
                      f'extra {sorted(set(steps) - set(src["instructions"]))}')
    if any(not isinstance(v, str) or not v.strip() for v in steps.values()):
        errors.append('empty step')
    return errors


def site_entry(entry, src):
    out = {field: entry[field].strip() for field in FIELDS if src.get(field) or entry.get(field)}
    out['ingredients'] = {
        iid: {'name': entry['ingredients'][iid]['name'].strip(),
              'standardAmount': str(entry['ingredients'][iid].get('standardAmount', '')).strip()}
        for iid in src['ingredients']
    }
    out['instructions'] = {n: entry['instructions'][n].strip() for n in src['instructions']}
    return out


def serialize(recipe_id, entry, indent):
    body = json.dumps(entry, ensure_ascii=False, indent=indent)
    body = body.replace('\n', '\n' + ' ' * indent)
    return ' ' * indent + json.dumps(recipe_id) + ': ' + body


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('input')
    ap.add_argument('lang')
    ap.add_argument('--from', dest='start')
    ap.add_argument('--to', dest='end')
    ap.add_argument('--dry-run', action='store_true')
    args = ap.parse_args()

    english = json.loads(table_path('en').read_text(encoding='utf-8'))
    path = table_path(args.lang)
    text = path.read_text(encoding='utf-8')
    table = json.loads(text)

    def in_range(recipe_id):
        if args.start and (id_key(recipe_id)[0] != id_key(args.start)[0] or id_key(recipe_id) < id_key(args.start)):
            return False
        if args.end and (id_key(recipe_id)[0] != id_key(args.end)[0] or id_key(recipe_id) > id_key(args.end)):
            return False
        return True

    incoming, failed = {}, {}
    for line in Path(args.input).read_text(encoding='utf-8').splitlines():
        if not line.strip():
            continue
        entry = json.loads(line)
        recipe_id = entry['id']
        if recipe_id not in english or not in_range(recipe_id):
            continue
        if recipe_id in table:
            continue
        errors = validate(entry, english[recipe_id])
        if errors:
            failed[recipe_id] = errors
        else:
            incoming[recipe_id] = site_entry(entry, english[recipe_id])

    for recipe_id, errors in failed.items():
        print(f'{args.lang} {recipe_id}: {"; ".join(errors)}', file=sys.stderr)
    if failed:
        sys.exit(f'{args.lang}: {len(failed)} invalid entries, nothing written')
    if not incoming:
        print(f'{args.lang}: nothing to merge')
        return

    indent = len(re.match(r'\{\n( *)', text).group(1))
    close = text.rstrip().rfind('}')
    head = text[:close].rstrip()
    tail = text[close:]
    chunk = ',\n'.join(serialize(rid, incoming[rid], indent) for rid in sorted(incoming, key=id_key))
    new_text = f'{head},\n{chunk}\n{tail}'
    merged = json.loads(new_text)
    assert all(rid in merged for rid in incoming) and len(merged) == len(table) + len(incoming)
    if not args.dry_run:
        path.write_text(new_text, encoding='utf-8')
    print(f'{args.lang}: merged {len(incoming)} entries into {path.name} ({len(merged)} total)')


if __name__ == '__main__':
    main()
