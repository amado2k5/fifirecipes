#!/usr/bin/env python3
"""Rescue dishes whose first source failed the dish_match/canonical gates.

    .venv/bin/python rescue.py --iso ma

For every 'sourced'/'needs_review' dish with no distilled draft, re-extracts
the recipe from the *cached* HTML of its other ok/review URLs (no network)
and writes candidates to world/distilled/<iso>/alt/<slug>__<n>.json.
distill.py --llm picks those up on its next run.
"""
import argparse
import json
from pathlib import Path

import db
from distill import DISTILLED, extract_recipe, slugify
from httpcache import cached_path


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', required=True)
    args = ap.parse_args()
    c = db.conn()
    n_alt = 0
    for dish in c.execute(
            "SELECT dish FROM dishes WHERE iso2=? AND status IN "
            "('sourced','needs_review')", (args.iso,)).fetchall():
        slug = slugify(dish['dish'])
        out_dir = DISTILLED / args.iso
        if (out_dir / f'{slug}.json').exists():
            continue  # already has a draft
        used = set()
        first = out_dir / 'sources' / f'{slug}.json'
        if first.exists():
            used.add(json.loads(first.read_text()).get('url'))
        rows = c.execute(
            "SELECT url FROM urls WHERE iso2=? AND dish=? AND status IN "
            "('ok','review')", (args.iso, dish['dish'])).fetchall()
        alts = [r['url'] for r in rows if r['url'] not in used]
        if not alts:
            continue
        alt_dir = out_dir / 'alt'
        alt_dir.mkdir(parents=True, exist_ok=True)
        for i, url in enumerate(alts[:4]):
            cached = cached_path(url)
            if not cached.exists():
                continue
            r = extract_recipe(cached.read_text(encoding='utf-8',
                                                errors='replace'), url)
            if not r or len(r['ingredients']) < 3:
                continue
            (alt_dir / f'{slug}__{i}.json').write_text(
                json.dumps(r, ensure_ascii=False, indent=1))
            n_alt += 1
        print(f"  {dish['dish']}: {min(len(alts), 4)} alternates")
    print(f'{n_alt} alternate extractions for {args.iso}')


if __name__ == '__main__':
    main()
