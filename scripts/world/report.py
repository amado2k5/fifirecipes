#!/usr/bin/env python3
"""Render the pilot-gate report from world/sources/<iso2>.yaml files.

    .venv/bin/python report.py [--iso ma jp mx] [--top 60]
"""
import argparse
import re

import yaml

from worldutil import SOURCES

JUNK = re.compile(
    r'(identifier|wayback|language|culture|protests|revolt|sultanate|'
    r'national dish|lists? of|cookware|tea culture|fusion|beer in|'
    r'wine in|breads$|as food$|rice$|syrup$|paste$|roe$|laver|'
    r'muscat|radish|banana|panela|chipotle|as-pergillus|oryzae)', re.I)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', nargs='+', default=['ma', 'jp', 'mx'])
    ap.add_argument('--top', type=int, default=60)
    args = ap.parse_args()
    for iso in args.iso:
        d = yaml.safe_load((SOURCES / f'{iso}.yaml').read_text())
        dishes = d['dishes']
        t130 = dishes[:130]
        print(f"\n## {iso.upper()} — {d['country']}")
        print(f"candidates: {len(dishes)} | top-130 with sources: "
          f"{sum(1 for x in t130 if x['urls'])} | "
          f"dropped: {len(d.get('dropped', []))}")
        print(f"\n| # | dish | local name | sources | dup? |")
        print(f"|---|---|---|---|---|")
        n = 0
        for x in dishes:
            if n >= args.top:
                break
            if JUNK.search(x['dish']) and not x['urls']:
                continue
            n += 1
            sus = (x['dup_suspect'][0]['id'] + f" ({x['dup_suspect'][0]['score']})"
                   if x.get('dup_suspect') else '')
            doms = ','.join(sorted({
                u.split('/')[2].replace('www.', '') for u in x['urls']}))
            print(f"| {x['rank']} | {x['dish']} | {x['local_name'] or ''} "
                  f"| {doms or '—'} | {sus} |")


if __name__ == '__main__':
    main()
