#!/usr/bin/env python3
"""Step 2 distill: fetched source -> halal gates -> LLM rewrite -> draft JSON.

    .venv/bin/python distill.py --iso ma            # parse + det gate only
    .venv/bin/python distill.py --iso ma --llm      # + LLM classify & rewrite

Phases (resumable per-URL and per-dish via world/state.db):
  parse    fetch each source url, extract schema.org Recipe via extruct /
           recipe-scrapers, run deterministic halal gate. First clean source
           wins; a dish is 'rejected' only when every source fails or is haram.
  llm      Qwen2.5-72B-Instruct-4bit bilingual ar/en rewrite (halal
           certification happens at the postdistill audit, not here)
           into the compact WorldRecipe authoring format.
Output: world/distilled/<iso2>/<slug>.json + rejected/review/duplicates ledgers.
"""
import argparse
import json
import re
import sys
import unicodedata
import urllib.parse
from pathlib import Path

import yaml
from bs4 import BeautifulSoup

import db
import halal
from httpcache import fetch
from worldutil import COUNTRIES, REJECTED, REVIEW, WORLD

DISTILLED = WORLD / 'distilled'

ING_CATS = {'meat_poultry', 'seafood', 'vegetable', 'dairy_fat', 'grain_starch',
            'spice_seasoning', 'sweet_fruit', 'liquid', 'other'}


# ---------------- parse -----------------------------------------------------

def extract_recipe(html: str, url: str) -> dict | None:
    """schema.org Recipe via extruct, falling back to recipe-scrapers."""
    data = None
    try:
        import extruct
        found = extruct.extract(html, base_url=url, syntaxes=['json-ld'])
        for item in found.get('json-ld', []):
            items = item if isinstance(item, list) else [item]
            for it in items:
                graph = it.get('@graph', [it]) if isinstance(it, dict) else [it]
                for node in graph:
                    if isinstance(node, dict) and 'Recipe' in \
                            (node.get('@type') if isinstance(
                                node.get('@type'), list) else [node.get('@type')]):
                        data = node
                        break
    except Exception:
        data = None
    if not data:
        try:
            from recipe_scrapers import scrape_html
            s = scrape_html(html, org_url=url)
            data = {'name': s.title(),
                    'recipeIngredient': s.ingredients(),
                    'recipeInstructions': [{'text': t}
                                           for t in s.instructions_list()],
                    'recipeYield': [str(s.yields())],
                    'description': s.description()}
        except Exception:
            return None
    ings = data.get('recipeIngredient') or []
    steps_raw = data.get('recipeInstructions') or []
    steps = []
    for s in (steps_raw if isinstance(steps_raw, list) else [steps_raw]):
        if isinstance(s, str):
            steps.append(s)
        elif isinstance(s, dict):
            steps.append(s.get('text') or s.get('name') or '')
    name = data.get('name') or ''
    y = data.get('recipeYield')
    servings = (y[0] if isinstance(y, list) and y else y) or ''
    return {'name': str(name).strip(),
            'ingredients': [str(i).strip() for i in ings if str(i).strip()],
            'steps': [str(s).strip() for s in steps if str(s).strip()],
            'servings': str(servings),
            'description': str(data.get('description') or ''),
            'image': None,  # never reuse source photos
            'url': url}


def recipe_text(r: dict) -> str:
    return '\n'.join([r['name'], *r['ingredients'], *r['steps']])


def parse_phase(iso2: str, limit: int = 160) -> None:
    c = db.conn()
    keep = {r['dish'] for r in c.execute(
        "SELECT dish FROM dishes WHERE iso2=? AND status='candidate' "
        "ORDER BY score DESC LIMIT ?", (iso2, limit)).fetchall()}
    urls = [u for u in c.execute(
        "SELECT * FROM urls WHERE iso2=? AND fetched=0 ORDER BY dish",
        (iso2,)).fetchall() if u['dish'] in keep]
    print(f'{len(urls)} urls to parse')
    dead: set[str] = set()  # domains that 403/429 this run
    for u in urls:
        if u['domain'] in dead:
            c.execute("UPDATE urls SET fetched=1, status='blocked' WHERE url=?",
                      (u['url'],))
            c.commit()
            continue
        status, note = 'no_html', None
        try:
            html = fetch(u['url'])
        except Exception:
            html, status = None, 'blocked'
            dead.add(u['domain'])
        if html:
            r = extract_recipe(html, u['url'])
            if not r or len(r['ingredients']) < 3 or len(r['steps']) < 1:
                status = 'no_recipe'
            else:
                verdict, hits = halal.gate(recipe_text(r))
                if verdict == 'haram':
                    status, note = 'haram', ','.join(hits)
                    with REJECTED.open('a') as f:
                        f.write(json.dumps(
                            {'iso2': iso2, 'dish': u['dish'], 'url': u['url'],
                             'stage': 'det', 'hits': hits},
                            ensure_ascii=False) + '\n')
                else:
                    status = 'ok' if verdict == 'halal' else 'review'
                    note = ','.join(hits) if hits else None
                    dest = DISTILLED / iso2 / 'sources'
                    dest.mkdir(parents=True, exist_ok=True)
                    slug = slugify(u['dish'])
                    out = dest / f'{slug}.json'
                    if not out.exists():  # first clean source wins
                        out.write_text(
                            json.dumps(r, ensure_ascii=False, indent=1))
        c.execute('UPDATE urls SET fetched=1, status=?, note=? WHERE url=?',
                  (status, note, u['url']))
        c.commit()
        print(f"  {u['dish']:35s} {u['domain']:30s} {status}")
    # dish-level rollup: first ok url wins
    for dish in c.execute(
            "SELECT DISTINCT dish FROM urls WHERE iso2=?", (iso2,)):
        rows = c.execute(
            "SELECT status FROM urls WHERE iso2=? AND dish=? AND fetched=1",
            (iso2, dish['dish'])).fetchall()
        stats = [r['status'] for r in rows]
        if 'ok' in stats or 'review' in stats:
            st = 'sourced' if 'ok' in stats else 'needs_review'
        elif stats and all(s in ('haram',) for s in stats):
            st = 'rejected'
        else:
            st = 'unsourced'
        c.execute('UPDATE dishes SET status=? WHERE iso2=? AND dish=?',
                  (st, iso2, dish['dish']))
    c.commit()


# ---------------- llm -------------------------------------------------------

SYSTEM_REWRITE = """You rewrite recipes for an Arabic-first multilingual cooking site.
Return ONLY valid JSON with this shape:
{"title_ar": "...", "title_en": "...",
 "category_ar": "<one of: أطباق رئيسية|مقبلات وسلطات|شوربات|مخبوزات|حلويات|مشروبات|إفطار|حشوات>",
 "method_ar": "<cooking method in Arabic, 1-3 words>",
 "prep_ar": "<prep time Arabic e.g. 20 دقيقة>", "cook_ar": "<cook time Arabic>",
 "servings_ar": "<e.g. 4-6 أفراد>", "difficulty": "easy|medium|master",
 "ingredients": [{"name_ar": "...", "name_en": "...", "amount_ar": "...",
   "amount_en": "...", "cat": "meat_poultry|seafood|vegetable|dairy_fat|grain_starch|spice_seasoning|sweet_fruit|liquid|other"}],
 "steps_ar": ["..."], "steps_en": ["..."],
 "notes_ar": "<1-2 sentences of cultural context in Arabic>",
 "notes_en": "<same in English>",
 "image_brief": "<one English sentence: the finished dish and its traditional vessel, for a food photo>",
 "dish_match": true, "canonical": true}
The user message names the dish this source was found for and the country.
If the source page actually teaches a different dish, still return the JSON
but set "dish_match": false and title_en/title_ar for what the page really
is. Set "canonical": false unless the recipe is a named, recognized
preparation of that country's cuisine (a dish people there would name) —
not merely because its main ingredient is eaten there, and not a generic,
foreign or arbitrary recipe. An ingredient or broad food category as the
expected dish means canonical is almost always false.
Rewrite ingredients and steps in your own words (never copy the source).
Keep measurements metric/imperial as in the source. Arabic must be fluent
Modern Standard Arabic."""


def llm_call(model_tok, prompt: str, system: str, max_tokens: int = 4096) -> str:
    from mlx_lm import generate
    model, tok = model_tok
    msgs = [{'role': 'system', 'content': system},
            {'role': 'user', 'content': prompt}]
    text = tok.apply_chat_template(msgs, tokenize=False,
                                   add_generation_prompt=True)
    return generate(model, tok, prompt=text, max_tokens=max_tokens,
                    verbose=False)


def json_from(text: str) -> dict | None:
    m = re.search(r'\{.*\}', text, re.DOTALL)
    if not m:
        return None
    try:
        return json.loads(m.group(0))
    except json.JSONDecodeError:
        return None


def valid_draft(draft: dict) -> bool:
    """Minimum shape the importer and the app rely on."""
    if not isinstance(draft.get('title_ar'), str) or \
            not isinstance(draft.get('title_en'), str) or \
            not draft['title_ar'].strip() or not draft['title_en'].strip():
        return False
    ings = draft.get('ingredients')
    steps = draft.get('steps_ar')
    if not isinstance(ings, list) or len(ings) < 2 or \
            not isinstance(steps, list) or len(steps) < 2:
        return False
    for ing in ings:
        if not isinstance(ing, dict) or \
                not str(ing.get('name_ar') or '').strip() or \
                not str(ing.get('name_en') or '').strip():
            return False
    return all(str(s).strip() for s in steps)


def slugify(name: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')


def llm_phase(iso2: str) -> None:
    from mlx_lm import load
    c = db.conn()
    country = next((x for x in yaml.safe_load(COUNTRIES.read_text())
                    ['countries'] if x['iso2'] == iso2), None)
    model = load('mlx-community/Qwen2.5-72B-Instruct-4bit')
    dish_by_slug = {
        slugify(r['dish']): r for r in c.execute(
            'SELECT dish, local_name FROM dishes WHERE iso2=?', (iso2,))}
    src_dir = DISTILLED / iso2 / 'sources'
    out_dir = DISTILLED / iso2
    # primary sources first, then rescue.py alternates (named <slug>__<n>)
    candidates = sorted(src_dir.glob('*.json')) + \
        sorted((out_dir / 'alt').glob('*.json'))
    vetoed = {ln.split('\t')[0].split('/')[1]
              for ln in (Path(__file__).parent / 'vetoed.txt').read_text().splitlines()
              if ln.startswith(f'{iso2}/')} if (Path(__file__).parent / 'vetoed.txt').exists() \
        else set()
    for path in candidates:
        dish_slug = path.stem.split('__')[0]
        if dish_slug in vetoed:
            continue
        dest = out_dir / f'{dish_slug}.json'
        if dest.exists():
            continue
        src = json.loads(path.read_text())
        # Halal certification is done Devin-side at the postdistill
        # handoff audit (plus the deterministic gate in halal.py at
        # import). The local verdict was unreliable — it missed capocollo
        # and passed pork salami — and cost an extra LLM call per source.
        verdict = 'deferred'
        # rewrite — the expected dish name lets the model flag a source page
        # that actually teaches a different recipe (bad search match)
        dish_name = dish_by_slug.get(dish_slug)
        country_name = country['name_en'] if country else iso2
        expected = (
            f'Country: {country_name}. '
            + (f'Expected dish: "{dish_name["dish"]}"'
               + (f' (local name: "{dish_name["local_name"]}")'
                  if dish_name and dish_name['local_name'] else '')
               if dish_name else ''))
        draft = json_from(llm_call(
            model,
            f'{expected}\nSource recipe ({src["url"]}):\n{recipe_text(src)}',
            SYSTEM_REWRITE))
        if not draft or not valid_draft(draft):
            print(f'  {dish_slug}: rewrite failed, will retry next run')
            continue
        if draft.get('dish_match') is False:
            with REVIEW.open('a') as f:
                f.write(json.dumps(
                    {'iso2': iso2, 'dish': dish_slug, 'url': src['url'],
                     'stage': 'dish_match',
                     'got_title': draft.get('title_en')},
                    ensure_ascii=False) + '\n')
            print(f'  {dish_slug}: source is "{draft.get("title_en")}" — '
                  'skipped (dish mismatch)')
            continue
        if draft.get('canonical') is False:
            with REVIEW.open('a') as f:
                f.write(json.dumps(
                    {'iso2': iso2, 'dish': dish_slug, 'url': src['url'],
                     'stage': 'canonical',
                     'got_title': draft.get('title_en')},
                    ensure_ascii=False) + '\n')
            print(f'  {dish_slug}: "{draft.get("title_en")}" not canonical '
                  f'for {iso2} — skipped')
            continue
        draft['_meta'] = {'iso2': iso2, 'dish': dish_slug,
                          'source_url': src['url'],
                          'source_name': urllib.parse.urlparse(
                              src['url']).netloc.replace('www.', ''),
                          'llm_halal': verdict}
        dest.write_text(json.dumps(draft, ensure_ascii=False, indent=1))
        print(f'  {dish_slug}: distilled ({verdict})')


# ---------------- main --------------------------------------------------------

def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', required=True)
    ap.add_argument('--llm', action='store_true')
    ap.add_argument('--limit', type=int, default=110)  # attrition buffer vs 50 cap
    args = ap.parse_args()
    parse_phase(args.iso, args.limit)
    if args.llm:
        llm_phase(args.iso)


if __name__ == '__main__':
    main()
