#!/usr/bin/env python3
"""Emit a static HTML review page from world/sources/<iso2>.yaml files.

Usage: review.py [--out ../world/review.html] [--top 150]
Serves the discovery gate: ranked candidates per country with local names,
source links and duplicate flags.
"""
import argparse
import html
from pathlib import Path

import yaml

WORLD = Path(__file__).resolve().parent.parent.parent / 'world'


def load(iso: str) -> dict:
    return yaml.safe_load((WORLD / 'sources' / f'{iso}.yaml').read_text())


def esc(s) -> str:
    return html.escape(str(s or ''))


def src_cell(urls) -> str:
    if not urls:
        return '<span class="none">—</span>'
    out = []
    for u in urls[:4]:
        dom = u.split('/')[2].replace('www.', '')
        out.append(f'<a href="{esc(u)}" target="_blank">{esc(dom)}</a>')
    extra = f' +{len(urls)-4}' if len(urls) > 4 else ''
    return '<br>'.join(out) + extra


def table(dishes, top) -> str:
    rows = []
    for i, d in enumerate(dishes[:top], 1):
        dup = ''
        if d.get('dup_suspect'):
            m = d['dup_suspect'][0]
            dup = f'<span class="dup" title="{esc(m.get("titleEn",""))}">dup? {esc(m["id"])}</span>'
        wiki = d.get('wiki') or ''
        title = esc(d['dish'])
        name = f'<a href="{esc(wiki)}" target="_blank">{title}</a>' if wiki else title
        nsrc = len(d.get('urls') or [])
        cls = '' if nsrc else ' class="nosrc"'
        rows.append(
            f'<tr{cls}><td class="r">{i}</td><td>{name}</td>'
            f'<td class="ar">{esc(d.get("local_name"))}</td>'
            f'<td>{src_cell(d.get("urls"))}</td><td>{dup}</td></tr>')
    return ('<table><tr><th>#</th><th>dish</th><th>local name</th>'
            '<th>sources</th><th>dup</th></tr>' + ''.join(rows) + '</table>')


def dropped_table(dropped) -> str:
    from collections import Counter
    c = Counter(d['status'] for d in dropped)
    chips = ' '.join(f'<span class="chip">{esc(k)}: {v}</span>'
                     for k, v in c.most_common())
    return chips


CSS = '''
body{font:14px/1.5 -apple-system,system-ui,sans-serif;max-width:1100px;
margin:24px auto;padding:0 16px;color:#222}
h1{font-size:22px} h2{font-size:18px;margin-top:32px;border-bottom:2px solid #ddd;
padding-bottom:4px}
table{border-collapse:collapse;width:100%}
td,th{border-bottom:1px solid #eee;padding:4px 8px;text-align:left;
vertical-align:top}
th{background:#fafafa;position:sticky;top:0}
td.r{color:#999;text-align:right}
td.ar{direction:rtl;font-family:"Geeza Pro","Arial",sans-serif;color:#555;
white-space:nowrap}
tr.nosrc td{background:#fff8f0}
.none{color:#c33}
.dup{color:#b58900;font-size:12px}
.chip{display:inline-block;background:#f0f0f0;border-radius:10px;
padding:2px 10px;margin:2px;font-size:12px}
a{color:#06c;text-decoration:none} a:hover{text-decoration:underline}
.summary{color:#666;font-size:13px}
'''


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', nargs='+', default=['ma', 'jp', 'mx'])
    ap.add_argument('--top', type=int, default=150)
    ap.add_argument('--out', default=str(WORLD / 'review.html'))
    args = ap.parse_args()

    parts = [f'<html><head><meta charset="utf-8"><style>{CSS}</style>'
             '<title>World cuisines — discovery review</title></head><body>'
             '<h1>World cuisines — pilot discovery review</h1>'
             '<p class="summary">Ranked candidates from Wikipedia categories, '
             'list articles and pageviews. Rows shaded orange have no recipe '
             'source yet. Click a dish for its Wikipedia article, a domain '
             'for the candidate source page.</p>']
    for iso in args.iso:
        d = load(iso)
        dishes = d['dishes']
        sourced = sum(1 for x in dishes[:130] if x.get('urls'))
        parts.append(
            f'<h2>{esc(d["country"])} ({iso}) — {len(dishes)} candidates, '
            f'{sourced}/130 top sourced</h2>'
            f'<p class="summary">dropped: {dropped_table(d.get("dropped", []))}</p>'
            + table(dishes, args.top))
    parts.append('</body></html>')
    Path(args.out).write_text(''.join(parts))
    print(args.out)


if __name__ == '__main__':
    main()
