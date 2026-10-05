#!/usr/bin/env python3
"""Tier each country by enwiki cuisine-category size (one API call each).

    .venv/bin/python tier_probe.py

Writes world/tiers.json: {iso2: {'members': n, 'tier': 1|2|3}}
Tier 1: >=80 members | Tier 2: 25-79 | Tier 3: <25
"""
import json, time
import urllib.parse, urllib.request

import yaml

ROOT = __file__.rsplit('/', 2)[0] + '/..'
UA = 'fifirecipes-world-bot/1.0 (+https://fifi.cooking; recipe research)'
API = 'https://en.wikipedia.org/w/api.php'


def cat_size(title: str) -> int:
    n = 0
    params = {'action': 'query', 'list': 'categorymembers',
              'cmtitle': title, 'cmlimit': '500',
              'cmtype': 'page', 'format': 'json'}
    for _ in range(4):  # pagination cap 2000
        url = API + '?' + urllib.parse.urlencode(params)
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        d = json.loads(urllib.request.urlopen(req, timeout=20).read())
        n += len(d['query']['categorymembers'])
        if 'continue' not in d:
            return n
        params['cmcontinue'] = d['continue']['cmcontinue']
    return n


def main() -> None:
    countries = yaml.safe_load(open(f'{ROOT}/world/countries.yaml'))['countries']
    out_path = f'{ROOT}/world/tiers.json'
    try:
        out = json.load(open(out_path))
    except FileNotFoundError:
        out = {}
    for c in countries:
        if c['iso2'] in out:
            continue
        size = cat_size(f"Category:{c['demonym']} cuisine")
        if size == 0:
            size = cat_size(f"Category:{c['name_en']} cuisine")
        tier = 1 if size >= 80 else 2 if size >= 25 else 3
        out[c['iso2']] = {'members': size, 'tier': tier,
                          'name': c['name_en']}
        print(f"{c['iso2']:>3} {c['name_en'][:28]:<30} {size:>4} t{tier}", flush=True)
        json.dump(out, open(out_path, 'w'), indent=0)
        time.sleep(2)
    tiers = [0, 0, 0, 0]
    for v in out.values():
        tiers[v['tier']] += 1
    print('tier counts:', tiers[1:])


if __name__ == '__main__':
    main()
