#!/usr/bin/env python3
"""Script-consistency lint for the world-cuisine recipes (w-*).

    python3 scripts/world/lint_language.py                 # report, exit 1 on findings
    python3 scripts/world/lint_language.py --json out.json # also dump findings
    python3 scripts/world/lint_language.py --lang Ku       # one table (AR = catalog)

Every string field is split into runs of a single Unicode script; a run whose
script is not allowed for the field's language is a finding. Catches glued
fragments ('عصיר', 'ティース푼', 'Farciсsez'), whole fields in the wrong
script (Sorani Arabic-script entries in the Kurmanji table), leftover English/Spanish words
in non-Latin languages, and U+FFFD replacement characters.

Also checks, per w-* recipe: every table has an entry; ingredient and
instruction counts match the catalog; no empty strings; and Arabic
ingredient names avoid the known mistranslations in glossary_ar.json.
See docs/TRANSLATION_GUIDE.md.
"""
import argparse
import json
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

RANGES = [
    ((0x0600, 0x06FF), 'Arabic'), ((0x0750, 0x077F), 'Arabic'),
    ((0x08A0, 0x08FF), 'Arabic'), ((0xFB50, 0xFDFF), 'Arabic'),
    ((0xFE70, 0xFEFF), 'Arabic'),
    ((0x0041, 0x005A), 'Latin'), ((0x0061, 0x007A), 'Latin'),
    ((0x00C0, 0x024F), 'Latin'), ((0x1E00, 0x1EFF), 'Latin'),
    ((0xFF21, 0xFF3A), 'Latin'), ((0xFF41, 0xFF5A), 'Latin'),
    ((0x0370, 0x03FF), 'Greek'), ((0x1F00, 0x1FFF), 'Greek'),
    ((0x0400, 0x04FF), 'Cyrillic'),
    ((0x0590, 0x05FF), 'Hebrew'),
    ((0x0900, 0x097F), 'Devanagari'),
    ((0x0C00, 0x0C7F), 'Telugu'), ((0x0980, 0x09FF), 'Bengali'),
    ((0x3040, 0x309F), 'Hiragana'), ((0x30A0, 0x30FF), 'Katakana'),
    ((0x31F0, 0x31FF), 'Katakana'), ((0xFF66, 0xFF9F), 'Katakana'),
    ((0x3400, 0x4DBF), 'Han'), ((0x4E00, 0x9FFF), 'Han'),
    ((0xF900, 0xFAFF), 'Han'), ((0x3005, 0x3007), 'Han'),
    ((0xAC00, 0xD7AF), 'Hangul'), ((0x1100, 0x11FF), 'Hangul'),
    ((0x3130, 0x318F), 'Hangul'),
    ((0x0E00, 0x0E7F), 'Thai'),
]

# Kurdish is Kurmanji (Latin script) everywhere in the app — UI, chapter names, core recipes.
LATIN_LANGS = ['En', 'Es', 'Fr', 'De', 'It', 'Nl', 'Pt', 'Pl', 'Sv', 'Tr', 'Id', 'Sw', 'Ku', 'Vi']
ALLOWED = {**{l: {'Latin'} for l in LATIN_LANGS},
           'AR': {'Arabic'}, 'Fa': {'Arabic'}, 'Ur': {'Arabic'},
           'Ps': {'Arabic'},
           'El': {'Greek'}, 'Ru': {'Cyrillic'}, 'He': {'Hebrew'},
           'Hi': {'Devanagari'}, 'Te': {'Telugu'}, 'Bn': {'Bengali'}, 'Ko': {'Hangul'},
           'Zh': {'Han'}, 'Ja': {'Hiragana', 'Katakana', 'Han'}}
# Latin tokens tolerated inside non-Latin languages
UNITS = re.compile(r'^(?:g|kg|ml|l|cm|mm|C|F|x)$')


def script(ch):
    o = ord(ch)
    for (lo, hi), name in RANGES:
        if lo <= o <= hi:
            if name == 'Arabic' and unicodedata.category(ch)[0] in 'NPZSC':
                return None  # Arabic digits/punctuation are neutral
            if unicodedata.category(ch)[0] != 'L' and unicodedata.category(ch) != 'Mn' \
                    and name not in ('Arabic',):
                return None
            return name
    return None


def runs(s):
    out, cur, buf = [], None, ''
    for ch in s:
        sc = script(ch)
        if sc is None and unicodedata.category(ch) == 'Mn' and cur:
            sc = cur  # combining mark continues the run
        if sc != cur:
            if cur:
                out.append((cur, buf))
            cur, buf = sc, ''
        buf += ch
    if cur:
        out.append((cur, buf))
    return out


# Common characters that exist only in Traditional Chinese. The Zh table is
# Simplified; whole recipes were once found in Traditional (w-jp-010..014).
TRADITIONAL_ONLY = set('們個這東鍋麵雞魚鹽湯醬燒蝦豬薑蔥蘿蔔餅糰熱將與為過後時開關點邊攪鐘'
                       '進煉蘇醃滷燉糧蠔壓鬆盤裡當應從間溫爐壺蓋塊條絲攤捲餡麥穀會讓還變請給說層濃軟')


def check(lang, s):
    bad = []
    if '�' in s:
        bad.append('U+FFFD')
    if lang == 'Zh':
        trad = sorted({c for c in s if c in TRADITIONAL_ONLY})
        if trad:
            bad.append('traditional:' + ''.join(trad))
    allow = ALLOWED[lang]
    for sc, tok in runs(s):
        if sc in allow:
            continue
        if sc == 'Latin' and 'Latin' not in allow and (len(tok) <= 2 and tok.isupper() or UNITS.match(tok)):
            continue  # section letters A/B, units
        bad.append(f'{sc}:{tok}')
    return bad


def walk(o, path=''):
    if isinstance(o, str):
        yield path, o
    elif isinstance(o, dict):
        for k, v in o.items():
            yield from walk(v, f'{path}.{k}' if path else k)
    elif isinstance(o, list):
        for i, v in enumerate(o):
            yield from walk(v, f'{path}[{i}]')


CATALOG_FIELDS = ('title', 'chapter', 'category', 'method', 'prep', 'cook',
                  'servings', 'notes')


def catalog_fields(r):
    for k in CATALOG_FIELDS:
        if isinstance(r.get(k), str):
            yield k, r[k]
    for i, ing in enumerate(r['ingredients']):
        yield f'ingredients[{i}][0]', ing[0]
        yield f'ingredients[{i}][1]', ing[1]
    for i, st in enumerate(r['steps']):
        yield f'steps[{i}][0]', st[0]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--json')
    ap.add_argument('--lang')
    ap.add_argument('--quiet', action='store_true')
    args = ap.parse_args()
    findings = []

    catalog = [r for f in sorted((ROOT / 'src/data/world').glob('*.json'))
               for r in json.loads(f.read_text())]
    glossary = {k: v for k, v in json.loads(
        (ROOT / 'scripts/world/glossary_ar.json').read_text()).items() if not k.startswith('_')}
    if args.lang in (None, 'AR'):
        for r in catalog:
            for p, s in catalog_fields(r):
                bad = check('AR', s)
                if bad:
                    findings.append(dict(lang='AR', id=r['id'], path=p, bad=bad, text=s))
            for i, ing in enumerate(r['ingredients']):
                for key, g in glossary.items():
                    hit = [t for t in g['not'] if key in ing[3].lower() and t in ing[0]]
                    if hit:
                        findings.append(dict(lang='AR', id=r['id'], path=f'ingredients[{i}][0]',
                                             bad=[f'glossary:{key} -> {g["use"]}'], text=ing[0]))

    for f in sorted((ROOT / 'src/data').glob('recipeTranslations*.json')):
        lang = f.stem.replace('recipeTranslations', '') or 'En'
        if args.lang and args.lang != lang:
            continue
        table = json.loads(f.read_text())
        for r in catalog:
            e = table.get(r['id'])
            if e is None:
                findings.append(dict(lang=lang, id=r['id'], path='', bad=['missing entry'], text=''))
            elif (len(e.get('ingredients', {})), len(e.get('instructions', {}))) != \
                    (len(r['ingredients']), len(r['steps'])):
                findings.append(dict(lang=lang, id=r['id'], path='', text='', bad=[
                    f"counts {len(e.get('ingredients', {}))}/{len(e.get('instructions', {}))} "
                    f"!= catalog {len(r['ingredients'])}/{len(r['steps'])}"]))
        for rid, entry in table.items():
            if not rid.startswith('w-'):
                continue
            # Shape: every step is a plain string and every ingredient is
            # {name, standardAmount}. Model output has put ingredient objects
            # and Python dict reprs into step slots, which walk() would accept.
            for k, v in entry.get('instructions', {}).items():
                if not isinstance(v, str) or v.lstrip().startswith(('{', '[')):
                    findings.append(dict(lang=lang, id=rid, path=f'instructions.{k}',
                                         bad=['not a plain string'], text=str(v)))
            for k, v in entry.get('ingredients', {}).items():
                if not (isinstance(v, dict) and all(isinstance(v.get(f), str)
                                                    for f in ('name', 'standardAmount'))):
                    findings.append(dict(lang=lang, id=rid, path=f'ingredients.{k}',
                                         bad=['bad ingredient shape'], text=str(v)))
            for p, s in walk(entry):
                if p == 'chapter':
                    continue  # runtime uses CHAPTER_NAMES_*[chapterNumber]
                bad = check(lang, s) + ([] if s.strip() else ['empty'])
                if bad:
                    findings.append(dict(lang=lang, id=rid, path=p, bad=bad, text=s))

    counts = {}
    for x in findings:
        counts[x['lang']] = counts.get(x['lang'], 0) + 1
    if not args.quiet:
        for x in findings:
            print(f"{x['lang']} {x['id']} {x['path']}: {' '.join(x['bad'])[:60]} | {x['text'][:90]}")
    print('\n' + ', '.join(f'{k}: {v}' for k, v in sorted(counts.items(), key=lambda kv: -kv[1])))
    print(f'{len(findings)} findings')
    if args.json:
        Path(args.json).write_text(json.dumps(findings, ensure_ascii=False, indent=1))
    sys.exit(1 if findings else 0)


if __name__ == '__main__':
    main()
