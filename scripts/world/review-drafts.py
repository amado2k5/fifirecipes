#!/usr/bin/env python3
"""Post-distill review page: drafts + ledger for eyeball vetoes before import.

Usage: review-drafts.py [--out ../world/review-drafts.html]
"""
import argparse
import json
from pathlib import Path

WORLD = Path(__file__).resolve().parent.parent.parent / 'world'
DISTILLED = WORLD / 'distilled'

CSS = '''
body{font:14px/1.5 -apple-system,system-ui,sans-serif;max-width:1150px;
margin:24px auto;padding:0 16px;color:#222}
h1{font-size:22px} h2{font-size:18px;margin-top:32px;border-bottom:2px solid
#ddd;padding-bottom:4px}
table{border-collapse:collapse;width:100%}
td,th{border-bottom:1px solid #eee;padding:4px 8px;text-align:left;
vertical-align:top}
th{background:#fafafa;position:sticky;top:0}
td.ar{direction:rtl;font-family:"Geeza Pro","Arial",sans-serif}
tr.unc{background:#fff8f0} tr.skip td{color:#999}
.flag{display:inline-block;border-radius:10px;padding:1px 8px;font-size:12px;
margin-right:4px}
.f-unc{background:#fdf0d5;color:#8a6d00}
.f-skip{background:#f0f0f0;color:#777}
.f-halal{background:#e5f5e0;color:#2a6b2a}
a{color:#06c;text-decoration:none} a:hover{text-decoration:underline}
.summary{color:#666;font-size:13px}
'''


def esc(s) -> str:
    import html
    return html.escape(str(s or ''))


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', nargs='+', default=['ma', 'jp', 'mx'])
    ap.add_argument('--out', default=str(WORLD / 'review-drafts.html'))
    args = ap.parse_args()

    # ledger lookups: dish slug -> reason/stage
    review, rejected = {}, {}
    for line in (WORLD / 'review.jsonl').read_text().splitlines():
        e = json.loads(line)
        review.setdefault((e['iso2'], e['dish']), []).append(e)
    rj = WORLD / 'rejected.jsonl'
    if rj.exists():
        for line in rj.read_text().splitlines():
            e = json.loads(line)
            if e.get('stage') == 'llm':
                rejected.setdefault((e['iso2'], e['dish']), []).append(e)

    parts = [f'<html><head><meta charset="utf-8"><style>{CSS}</style>'
             '<title>World cuisines — draft review</title></head><body>'
             '<h1>Distilled drafts — pre-import review</h1>'
             '<p class="summary">One row per distilled recipe. '
             '<b>uncertain</b> rows had a non-clean halal verdict — check the '
             'reason before approving. Rows under "skipped" were rejected by '
             'the gates and will not import.</p>']
    for iso in args.iso:
        rows, skips = [], []
        for p in sorted((DISTILLED / iso).glob('*.json')):
            if p.parent.name != iso:
                continue
            d = json.loads(p.read_text())
            slug = p.stem
            m = d.get('_meta', {})
            unc = m.get('llm_halal') == 'uncertain'
            reasons = ''
            if unc:
                rs = [r for e in review.get((iso, slug), [])
                      for r in (e.get('reasons') or [])]
                reasons = '; '.join(rs)
            flag = ('<span class="flag f-unc">uncertain</span>'
                    if unc else '<span class="flag f-halal">halal</span>')
            url = m.get('source_url', '')
            dom = url.split('/')[2].replace('www.', '') if url else ''
            rows.append(
                f'<tr{" class=unc" if unc else ""}><td>{esc(m.get("dish"))}'
                f'</td><td><b>{esc(d.get("title_en"))}</b>'
                f'<br><span class="ar">{esc(d.get("title_ar"))}</span></td>'
                f'<td>{flag}{esc(reasons)}</td>'
                f'<td><a href="{esc(url)}" target="_blank">{esc(dom)}</a></td>'
                f'</tr>')
        for (i, slug), evs in sorted(review.items()):
            if i != iso:
                continue
            e = evs[-1]
            if e.get('stage') not in ('dish_match', 'canonical'):
                continue  # uncertain-halal rows already appear above
            skips.append(
                f'<tr class="skip"><td>{esc(slug)}</td>'
                f'<td>{esc(e.get("got_title") or "")}</td>'
                f'<td><span class="flag f-skip">{esc(e.get("stage") or "uncertain")}'
                f'</span>{"; ".join(e.get("reasons") or [])}</td>'
                f'<td><a href="{esc(e.get("url",""))}" target="_blank">src</a>'
                f'</td></tr>')
        for (i, slug), evs in sorted(rejected.items()):
            if i != iso:
                continue
            e = evs[-1]
            skips.append(
                f'<tr class="skip"><td>{esc(slug)}</td><td></td>'
                f'<td><span class="flag f-skip">llm-haram</span>'
                f'{"; ".join(e.get("reasons") or [])}</td><td></td></tr>')
        parts.append(f'<h2>{iso} — {len(rows)} drafts</h2>'
                     '<table><tr><th>dish</th><th>title</th><th>halal</th>'
                     '<th>source</th></tr>' + ''.join(rows) + '</table>')
        if skips:
            parts.append('<details><summary>skipped by gates '
                         f'({len(skips)})</summary><table>' + ''.join(skips)
                         + '</table></details>')
    parts.append('</body></html>')
    Path(args.out).write_text(''.join(parts))
    print(args.out)


if __name__ == '__main__':
    main()
