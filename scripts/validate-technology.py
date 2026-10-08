#!/usr/bin/env python3
"""Checks src/data/technology/<lang>.json against en.json: same structure, nothing
empty, protected names kept, and no stray scripts (one script per language, plus
Latin for product names). Usage: validate-technology.py [lang ...]  (default: all)"""
import json, re, sys, unicodedata
from pathlib import Path

DIR = Path(__file__).resolve().parent.parent / 'src/data/technology'
PROTECTED = ['fifi.cooking', 'Cookwala', 'React', 'TypeScript', 'Vite', 'Tailwind', 'GitHub', 'Cloudflare', 'Kotlin',
             'Jetpack Compose', 'SwiftUI', 'Tizen', 'FLUX.2', 'MIT', 'IndexNow', 'schema.org', 'check:world',
             'Lucide', 'Motion', 'YouTube', 'MCP', 'JSON', 'tvOS', 'Fire OS', 'Chromebook', 'Siri Remote', 'sharp', 'Kurmanji']
SCRIPT = {'ar': 'ARABIC', 'fa': 'ARABIC', 'ur': 'ARABIC', 'ps': 'ARABIC', 'he': 'HEBREW', 'ru': 'CYRILLIC', 'el': 'GREEK',
          'hi': 'DEVANAGARI', 'te': 'TELUGU', 'bn': 'BENGALI', 'ja': 'CJK', 'zh': 'CJK', 'ko': 'HANGUL'}
SCRIPT_WORDS = ['ARABIC', 'HEBREW', 'CYRILLIC', 'GREEK', 'DEVANAGARI', 'TELUGU', 'BENGALI', 'CJK', 'HIRAGANA', 'KATAKANA', 'HANGUL']

def flatten(o, path=''):
    if isinstance(o, dict):
        for k, v in o.items(): yield from flatten(v, f'{path}/{k}')
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from flatten(v, f'{path}[{i}]')
    else:
        yield path, o

def script_of(ch):
    if not ch.isalpha(): return None
    n = unicodedata.name(ch, '')
    for w in SCRIPT_WORDS:
        if n.startswith(w): return 'CJK' if w in ('HIRAGANA', 'KATAKANA') else w
    return 'LATIN' if n.startswith('LATIN') else 'OTHER'

def main():
    en = dict(flatten(json.load(open(DIR / 'en.json', encoding='utf-8'))))
    langs = sys.argv[1:] or sorted(p.stem for p in DIR.glob('*.json') if p.stem != 'en')
    errors = 0
    for lang in langs:
        f = DIR / f'{lang}.json'
        if not f.exists(): print(f'{lang}: MISSING'); errors += 1; continue
        try: tr = dict(flatten(json.load(open(f, encoding='utf-8'))))
        except Exception as e: print(f'{lang}: invalid JSON ({e})'); errors += 1; continue
        problems = []
        if set(tr) != set(en): problems.append(f'keys differ: missing {sorted(set(en)-set(tr))[:3]} extra {sorted(set(tr)-set(en))[:3]}')
        allowed = {'LATIN', SCRIPT.get(lang, 'LATIN')}
        for k, v in tr.items():
            if k not in en: continue
            if not isinstance(v, str) or not v.strip(): problems.append(f'{k}: empty'); continue
            for tok in PROTECTED:
                if tok in en[k] and tok not in v: problems.append(f'{k}: lost "{tok}"')
            for ch in v:
                s = script_of(ch)
                if s and s not in allowed:
                    problems.append(f'{k}: stray {s} character {ch!r}'); break
            if lang != 'en' and v == en[k] and len(v) > 25: problems.append(f'{k}: left in English')
            for url in re.findall(r'https?://\S+', en[k]):
                if url not in v: problems.append(f'{k}: lost URL')
        if problems:
            errors += 1; print(f'{lang}: {len(problems)} problem(s)'); [print('  ', p) for p in problems[:12]]
        else: print(f'{lang}: ok')
    sys.exit(1 if errors else 0)

main()
