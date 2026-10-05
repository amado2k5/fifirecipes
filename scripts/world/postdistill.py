#!/usr/bin/env python3
"""Post-distill watcher: turn finished draft dirs into staged work.

    .venv/bin/python postdistill.py          # daemon, polls every 60s
    .venv/bin/python postdistill.py --once   # single sweep

While the GPU distills country N+1, the CPU can already import country N
and feed the banner queue — nothing waits on the whole chain ending.

Per-draft flow: each sweep imports every NEW draft file (import.py is
idempotent — already-imported ids are skipped), seeds the banner
pipeline and refreshes world/devin-queue/<iso>.json with:

  - source: per-recipe English dump (title/ings/steps/notes)
  - flags:  halal hits, latin-in-arabic, dupe titles
  - audit:  {done: [...], pending: [...]} — the Devin-side halal
            certification ledger, tracked per recipe; pending grows as
            drafts land, done grows as each is certified
  - checks: lint:lang + lint:halal output, once the country is finished
            (chain moved on, chain done, or drafts quiet)

Batched where it must be: banner generation waits for the GPU (it
shares it with distill), thumbnails + ready flips happen per chapter.

The Devin side only has to: SEMANTIC HALAL AUDIT of every recipe's
ingredients/notes (the local model's verdicts are untrusted — it missed
capocollo and passed pork salami) -> translate 24 tables -> estimates
-> check:world + manual review -> commit. Banners generate on the GPU
whenever it is free, no manual seeding needed.

Rules for everything this produces: docs/TRANSLATION_GUIDE.md. In
particular, never set ready:true until `npm run check:world` passes and
the guide's step-5 manual review is done.
"""
import argparse
import json
import re
import subprocess
import sys
import time
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).parent))
sys.path.insert(0, str(Path(__file__).parent.parent / 'recipe-images'))

import dupes
import halal
from worldutil import REPO, WORLD

DISTILLED = WORLD / 'distilled'
QUEUE = WORLD / 'devin-queue'
SRC_WORLD = REPO / 'src' / 'data' / 'world'
IMG_WORK = REPO / 'scripts' / 'recipe-images' / 'work'
CHAIN_LOG = WORLD / 'logs' / 'gpu-chain2.log'
QUIET_SECS = 600  # drafts untouched this long + no distill proc => done
LATIN = re.compile(r'[A-Za-zÀ-ž]+')
ARABIC = re.compile(r'[؀-ۿ]')
AR_UNITS = re.compile(r'^(?:cm|mm|g|kg|ml|l|tsp|tbsp|F|C|x|X|×|A|B|oz|lb)$',
                      re.IGNORECASE)


def chain_position() -> tuple[str | None, bool]:
    """(iso currently distilling, chain finished) from the chain log."""
    if not CHAIN_LOG.exists():
        return None, False
    txt = CHAIN_LOG.read_text(errors='replace')
    marks = re.findall(r'llm distill: (\w+)', txt)
    done = 'distill chain complete' in txt
    return (marks[-1] if marks else None), done


def distill_running(iso: str) -> bool:
    r = subprocess.run(['pgrep', '-f', f'distill.py --iso {iso}'],
                       capture_output=True)
    return r.returncode == 0


def drafts_of(iso: str) -> list[Path]:
    return sorted(DISTILLED.glob(f'{iso}/*.json'))


def is_complete(iso: str, current: str | None, chain_done: bool,
                order: list[str]) -> bool:
    if not drafts_of(iso):
        return False
    if iso not in order:
        return False
    # parallel distill pool: a later marker no longer implies done —
    # the process itself must have exited
    if distill_running(iso):
        return False
    if chain_done:
        return True
    if current and order.index(iso) < order.index(current):
        return True
    # fallback: quiet dir and no distill process for this iso
    newest = max(p.stat().st_mtime for p in drafts_of(iso))
    return (time.time() - newest) > QUIET_SECS and not distill_running(iso)


def imported_ids(iso: str) -> set[str]:
    path = SRC_WORLD / f'{iso}.json'
    if not path.exists():
        return set()
    return {e['id'] for e in json.loads(path.read_text())}


def run_import(iso: str) -> int:
    r = subprocess.run(
        [sys.executable, str(Path(__file__).parent / 'import.py'),
         '--iso', iso], capture_output=True, text=True)
    return len(imported_ids(iso))


def seed_banners(iso: str) -> int:
    """Append flattened rows to work/recipes.json + set briefs in state.db."""
    import state  # scripts/recipe-images/state.py
    entries = json.loads((SRC_WORLD / f'{iso}.json').read_text())
    path = IMG_WORK / 'recipes.json'
    rows = json.loads(path.read_text())
    have = {r['id'] for r in rows}
    added = 0
    for e in entries:
        if e['id'] in have:
            continue
        rows.append({
            'id': e['id'], 'title': e['title'], 'titleEn': e['titleEn'],
            'category': e['category'], 'cookingMethod': e['method'],
            'ingredients': [i[0] for i in e['ingredients']],
            'instructions': [s[0] for s in e['steps']],
        })
        added += 1
    path.write_text(json.dumps(rows, ensure_ascii=False, indent=1))
    db = state.connect()
    state.sync_recipes(db)
    for e in entries:
        if e.get('imageBrief'):
            state.set_brief(db, e['id'], e['imageBrief'])
    db.commit()
    db.close()
    return added


def run_checks() -> dict:
    """lint:lang + lint:halal right after import (guide workflow step 1).

    Output is stored in the handoff so the translation side sees the
    state of the world catalog before it starts."""
    out = {}
    for name in ('lint:lang', 'lint:halal'):
        r = subprocess.run(['npm', 'run', '-s', name], cwd=REPO,
                           capture_output=True, text=True)
        out[name] = {'exit': r.returncode,
                     'tail': (r.stdout + r.stderr).strip()[-2000:]}
    return out


def flag_report(iso: str, ids: set[str]) -> tuple[list[dict], dict]:
    """Halal-gate + dupe-title + mixed-script scan over imported entries."""
    entries = {e['id']: e for e in
               json.loads((SRC_WORLD / f'{iso}.json').read_text())}
    flags, source = [], {}
    for rid in sorted(ids):
        e = entries.get(rid)
        if not e:
            continue
        source[rid] = {
            'title_en': e['titleEn'],
            'ingredients': [[i[3], i[4]] for i in e['ingredients']],
            'steps': [s[1] for s in e['steps']],
            'notes_en': e.get('notesEn', ''),
        }
        verdict, hits = halal.gate(
            ' '.join([e['titleEn'], e.get('notesEn', ''),
                      ' '.join(i[3] or '' for i in e['ingredients'])]))
        if verdict != 'halal':
            flags.append({'rid': rid, 'kind': 'halal', 'hits': hits})
        for fld in ('title', 'notes'):
            toks = [t for t in LATIN.findall(e.get(fld, '') or '')
                    if not AR_UNITS.match(t)]
            if toks:
                flags.append({'rid': rid, 'kind': f'latin-in-{fld}',
                              'hits': toks})
        for i, ing in enumerate(e['ingredients']):
            toks = [t for t in LATIN.findall(str(ing[0]))
                    if not AR_UNITS.match(t)]
            if toks:
                flags.append({'rid': rid, 'kind': f'latin-in-ing[{i}]',
                              'hits': toks})
                break
        if (m := dupes.title_match(e['titleEn'])) and \
                m['id'] not in ids:
            flags.append({'rid': rid, 'kind': 'dupe-title',
                          'hits': [m['id'], m.get('title', '')]})
    return flags, source


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--once', action='store_true')
    args = ap.parse_args()

    # distill order from the chain script (15 banked countries); any other
    # iso with a distilled dir is appended so future batches are covered
    order = 'it es kr in th tr id lb et ir my ng gr pe ph'.split()
    order += [d.name for d in DISTILLED.iterdir()
              if d.is_dir() and d.name not in order]
    QUEUE.mkdir(exist_ok=True)
    done: set[str] = set()

    while True:
        current, chain_done = chain_position()
        for iso in order:
            if iso in done:
                continue
            mpath = QUEUE / f'{iso}.json'
            catalog = SRC_WORLD / f'{iso}.json'
            drafts = drafts_of(iso)
            marker = (json.loads(mpath.read_text())
                      if mpath.exists() else {})
            # a catalog with no marker is a hand-built chapter — never
            # re-import it (formatting churn, risks manual fixes)
            if catalog.exists() and not mpath.exists():
                done.add(iso)
                continue
            if not drafts:
                continue
            # per-draft flow: import whenever new drafts have landed
            seen = marker.get('drafts_seen', 0)
            if len(drafts) > seen:
                n = run_import(iso)
                ids = imported_ids(iso)
                img = seed_banners(iso) if ids else 0
                flags, source = flag_report(iso, ids)
                audited = marker.get('audit', {}).get('done', [])
                marker.update({
                    'iso': iso, 'imported': len(ids),
                    'banners_seeded': marker.get('banners_seeded', 0) + img,
                    'status': 'awaiting-halal-audit',
                    'drafts_seen': len(drafts),
                    'flags': flags, 'source': source,
                    'audit': {'done': audited,
                              'pending': sorted(ids - set(audited))},
                })
                mpath.write_text(json.dumps(marker, ensure_ascii=False,
                                            indent=1))
                print(f'[postdistill] {iso}: {len(drafts)} drafts, '
                      f'{len(ids)} imported, {img} new banner rows, '
                      f'{len(flags)} flags', flush=True)
            # run the lints once, when the country is finished
            if marker and not marker.get('checks') and \
                    is_complete(iso, current, chain_done, order):
                marker['checks'] = run_checks()
                marker['distill_done'] = True
                mpath.write_text(json.dumps(marker, ensure_ascii=False,
                                            indent=1))
                print(f'[postdistill] {iso}: distill complete, '
                      f'lints recorded', flush=True)
        if args.once:
            break
        time.sleep(60)


if __name__ == '__main__':
    main()
