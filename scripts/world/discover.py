#!/usr/bin/env python3
"""Step 1 discovery: ranked dish candidates + source URLs for one country.

    .venv/bin/python discover.py --iso ma [--limit 130] [--no-pageviews]

Resumable: rows live in world/state.db; re-running only fills gaps.
Output:    world/sources/<iso2>.yaml + dishes/urls tables.
"""
import argparse
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

import yaml
from bs4 import BeautifulSoup

import db
import dupes
from httpcache import fetch, UA
from textnorm import norm_latin, norm_any
from worldutil import COUNTRIES, SITES, SOURCES, UA

# dish-level haram: canonical version is non-halal, no authentic variant exists
TITLE_HARAM = re.compile(
    r'\b(pork|bacon|ham|lard|chorizo|salami|pepperoni|pancetta|prosciutto|'
    r'guanciale|speck|mortadella|chicharron|carnitas|cochinita|al pastor|'
    r'pastor|tonkotsu|chashu|butaniku|buta no|kakuni|lechon|lechón|tocino|'
    r'pernil|boudin|morcilla|blood sausage|black pudding|wild boar|boar|'
    r'pigs? trotters?|head cheese|scrapple|longganisa|sisig|menudo|'
    r'moronga|chistorra|sobrasada|nduja|alheira|butifarra|'
    r'pozole|posole)\b', re.IGNORECASE)
# menudo/pozole are traditionally pork-free in many regions — actually keep
# them; they get decided at recipe level. Remove from the regex above? They
# are listed; safer to reject dish only when pork is canonical. Handled by
# TITLE_HARAM_EXCEPT below.
TITLE_HARAM_EXCEPT = {'menudo', 'pozole', 'posole'}

NON_DISH = re.compile(
    r'(disambiguation|list of|cuisine|history|company|brand|restaurant|'
    r'chef|industry|museum|festival|street food|etiquette|table manners|'
    r'drink|beverage company|brewery|winery|distiller|'
    r'identifier|wayback|archive|catalog|doi\b|isbn|issn|oclc|jstor|s2cid|'
    r'wikimedia|mediawiki|creative commons|retrieved|encyclopedia)', re.IGNORECASE)

NON_DISH_TOKENS = {'restaurant', 'cuisine', 'drink', 'brewery', 'bakery',
                   'company', 'festival'}

STOP_SLUG = {'recipe', 'recipes', 'easy', 'best', 'authentic', 'how', 'to',
             'make', 'homemade', 'the', 'a', 'an', 'of', 'and', 'with',
             'style', 'traditional', 'classic', 'simple'}

ENWIKI = 'https://en.wikipedia.org/w/api.php'
PV = ('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/'
      'en.wikipedia/all-access/all-agents/{title}/daily/{start}/{end}')


def api(lang: str, params: dict) -> dict:
    base = f'https://{lang}.wikipedia.org/w/api.php' if lang != 'wikibooks' \
        else 'https://en.wikibooks.org/w/api.php'
    url = base + '?' + urllib.parse.urlencode(
        {'format': 'json', 'formatversion': '2', **params})
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def cat_members(lang: str, cat: str, depth: int = 1) -> set[str]:
    """Article titles in a category, recursing one level into subcategories."""
    out: set[str] = set()
    seen: set[str] = set()
    queue = [(cat, depth)]
    while queue:
        c, d = queue.pop()
        if c in seen:
            continue
        seen.add(c)
        cmcontinue = None
        while True:
            params = {'action': 'query', 'list': 'categorymembers',
                      'cmtitle': c, 'cmlimit': '500'}
            if cmcontinue:
                params['cmcontinue'] = cmcontinue
            try:
                data = api(lang, params)
            except Exception:
                break
            for m in data.get('query', {}).get('categorymembers', []):
                if m['ns'] == 0:
                    out.add(m['title'])
                elif m['ns'] == 14 and d > 0:
                    queue.append((m['title'], d - 1))
            cmcontinue = data.get('continue', {}).get('cmcontinue')
            if not cmcontinue:
                break
            time.sleep(1)
    return out


def page_links(lang: str, title: str) -> set[str]:
    try:
        data = api(lang, {'action': 'parse', 'page': title, 'prop': 'links'})
    except Exception:
        return set()
    return {l['title'] for l in data.get('parse', {}).get('links', [])
            if l.get('ns') == 0 and 'exists' in l}


def collect_candidates(country: dict) -> dict[str, int]:
    """enwiki+localwiki candidates -> mention count."""
    dem = country['demonym']
    hits: dict[str, int] = {}
    sources = [
        cat_members('en', f'Category:{dem} cuisine', depth=1),
        page_links('en', f'List of {dem} dishes'),
        page_links('en', f'{dem} cuisine'),
    ]
    for s in sources:
        for t in s:
            hits[t] = hits.get(t, 0) + 1
    # local-language wiki category via sitelink
    try:
        ll = api('en', {'action': 'query', 'prop': 'langlinks',
                        'lllang': country['wiki_lang'], 'lllimit': '10',
                        'titles': f'Category:{dem} cuisine', 'redirects': '1'})
        for p in ll.get('query', {}).get('pages', []):
            for l in p.get('langlinks', []):
                for t in cat_members(country['wiki_lang'], l['title'], 1):
                    hits.setdefault(f'{country["wiki_lang"]}:{t}', 1)
    except Exception:
        pass
    return hits


def local_names(titles: list[str], lang: str) -> dict[str, str]:
    out = {}
    for i in range(0, len(titles), 50):
        try:
            data = api('en', {'action': 'query', 'prop': 'langlinks',
                              'lllang': lang, 'lllimit': '500',
                              'titles': '|'.join(titles[i:i + 50]),
                              'redirects': '1'})
            for p in data.get('query', {}).get('pages', []):
                lls = p.get('langlinks')
                if lls:
                    out[p['title']] = lls[0]['title']
        except Exception:
            pass
        time.sleep(1)
    return out


def pageviews(titles: list[str]) -> dict[str, int]:
    """12-month enwiki view counts; ~3s/request, cached reruns are free."""
    end = datetime.now(timezone.utc).strftime('%Y%m%d')
    start = (datetime.now(timezone.utc).replace(year=datetime.now().year - 1)
             .strftime('%Y%m%d'))
    out = {}
    for i, t in enumerate(titles):
        url = PV.format(title=urllib.parse.quote(t.replace(' ', '_')),
                        start=start, end=end)
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                items = json.load(r).get('items', [])
                out[t] = sum(i['views'] for i in items)
        except Exception:
            out[t] = 0
        if i % 20 == 0:
            print(f'  pageviews {i}/{len(titles)}')
        time.sleep(3)
    return out


def slug_tokens(url: str) -> set[str]:
    slug = urllib.parse.unquote(urllib.parse.urlparse(url).path)
    toks = re.findall(r'[a-z0-9]+', slug.lower())
    return {t for t in toks if t not in STOP_SLUG and len(t) > 2}


def slug_match(dish: str, url: str) -> bool:
    dt = set(norm_latin(base_dish(dish)).split()) - STOP_SLUG
    if not dt:
        return False
    st = slug_tokens(url)
    return dt <= st or len(dt & st) / len(dt | st) >= 0.6


def base_dish(dish: str) -> str:
    """'Kibi dango (millet dumpling)' -> 'Kibi dango'."""
    return re.sub(r'\s*\([^)]*\)', '', dish).strip()


def fuzzy_match(dish: str, text: str) -> bool:
    """Every dish token must appear or be within ~75% edit-similarity of some
    text token — handles transliteration variants (baghrir~beghrir)."""
    from difflib import SequenceMatcher
    dt = set(norm_latin(base_dish(dish)).split()) - STOP_SLUG
    st = set(norm_latin(text).split()) - STOP_SLUG
    if not dt or not st:
        return False
    return all(t in st or
               max((SequenceMatcher(None, t, s).ratio() for s in st),
                   default=0) >= 0.75
               for t in dt)


def sitemap_urls(dom: str, max_maps: int = 12) -> list[str]:
    """All post URLs from a WordPress-style sitemap_index.xml."""
    urls = []
    try:
        html = fetch(f'https://{dom}/sitemap_index.xml') or \
            fetch(f'https://{dom}/sitemap.xml')
    except Exception:
        html = None
    if not html:
        return urls
    try:
        root = ET.fromstring(html)
    except ET.ParseError:
        return urls
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    maps = [loc.text for loc in root.findall('.//s:loc', ns)]
    for m in maps[:max_maps]:
        if not m or not re.search(r'(post|recipes?|dishes?)', m, re.I):
            continue
        try:
            sub = fetch(m)
        except Exception:
            continue
        if not sub:
            continue
        try:
            sroot = ET.fromstring(sub)
            urls += [loc.text for loc in sroot.findall('.//s:loc', ns) if loc.text]
        except ET.ParseError:
            continue
    print(f'    {dom}: {len(urls)} sitemap urls')
    return urls


def wikidata_descs(titles: list[str]) -> dict[str, str]:
    """One-line Wikidata descriptions, batched 50/request."""
    out = {}
    for i in range(0, len(titles), 50):
        try:
            data = api('en', {'action': 'query', 'prop': 'description',
                              'titles': '|'.join(titles[i:i + 50]),
                              'redirects': '1'})
            for p in data.get('query', {}).get('pages', []):
                if p.get('description'):
                    out[p['title']] = p['description']
        except Exception:
            pass
        time.sleep(1)
    return out


NON_DISH_DESC = re.compile(
    r'(ingredient|condiment|sauce|seasoning|spice|paste|oil|beverage|drink|'
    r'alcohol|cocktail|liquor|liqueur|wine|beer|sake|whisk|tea\b|coffee|'
    r'fruit|vegetable|herb|grain|rice variety|wheat|bean|pepper|cultivar|'
    r'species|animal|breed|company|restaurant|film|book|manga|song|'
    r'person|prefecture|city|district|ward|station|museum|brand)', re.I)
def wiki_categories(titles: list[str]) -> dict[str, list[str]]:
    """Category titles per article, batched 50/request."""
    out: dict[str, list[str]] = {}
    for i in range(0, len(titles), 50):
        try:
            data = api('en', {'action': 'query', 'prop': 'categories',
                              'cllimit': '500',
                              'titles': '|'.join(titles[i:i + 50]),
                              'redirects': '1'})
            for p in data.get('query', {}).get('pages', []):
                out[p['title']] = [c['title'] for c in p.get('categories', [])]
        except Exception:
            pass
        time.sleep(1)
    return out


DISH_CAT = re.compile(
    r'cuisine|dishes|soups|breads?|desserts?|sweets|pastries|confections?|'
    r'noodles|dumplings|curries|salads|sandwiches|appetizers|snacks|'
    r'porridges|omelett?es|pancakes|stews|hot ?pots?|skewers|kebabs|'
    r'pickles|fermented foods|street food|baked goods|cakes|cookies|'
    r'puddings|custards|pies|tarts|meat dishes|fish dishes|seafood|'
    r'rice dishes|poultry dishes|vegetable dishes|breakfast|foods?$',
    re.I)


def is_dish_by_cats(cats: list[str]) -> bool | None:
    """True when any category looks dish-like, False when the article is
    clearly non-food, None when undecidable."""
    joined = ' '.join(cats)
    if DISH_CAT.search(joined):
        return True
    if not cats:
        return None
    return False


DISH_DESC = re.compile(
    r'(dish|soup|stew|noodle|pasta|bread|dumpling|snack|dessert|cake|'
    r'pastry|confection|curry|salad|porridge|omelet|pancake|sandwich|'
    r'rice bowl|hot pot|hotpot|skewer|dough|cuisine|cooking|fried|'
    r'grilled|pickled|fermented soybean dish|sweet|cookie|biscuit|'
    r'pudding|custard|jelly|broth|stuffed|meatball|cutlet|croquette|'
    r'appetizer|side dish|street food|meal)', re.I)


def ic_search_links(demonym: str, pages: int = 12) -> list[str]:
    out = []
    for p in range(1, pages + 1):
        html = fetch('https://www.internationalcuisine.com/?' +
                     urllib.parse.urlencode({'s': demonym, 'paged': p}))
        if not html:
            break
        soup = BeautifulSoup(html, 'html.parser')
        links = [a['href'] for a in soup.select('article a[href], h2 a[href], h3 a[href]')
                 if 'internationalcuisine.com/' in a['href']
                 and 'wprm_print' not in a['href'] and '?' not in a['href']]
        if not links:
            break
        out += links
    return out


def wikibooks_links(country: dict) -> list[str]:
    out = []
    for page in (f"Cookbook:Cuisine of {country['name_en']}",
                 f"Cookbook:{country['demonym']} cuisine"):
        html = fetch(f'https://en.wikibooks.org/wiki/'
                     + urllib.parse.quote(page.replace(' ', '_')))
        if not html:
            continue
        soup = BeautifulSoup(html, 'html.parser')
        out += ['https://en.wikibooks.org' + a['href']
                for a in soup.select('#mw-content-text a[href^="/wiki/Cookbook:"]')]
    return out


_dead_domains: set[str] = set()


def wp_search(dish: str, dom: str) -> list[str]:
    """WordPress REST search on an allowlisted domain; skips dead domains."""
    if dom in _dead_domains:
        return []
    try:
        html = fetch(f'https://{dom}/wp-json/wp/v2/search?' +
                     urllib.parse.urlencode({'search': base_dish(dish),
                                             'per_page': '5'}))
    except Exception:
        _dead_domains.add(dom)
        return []
    if not html:
        _dead_domains.add(dom)   # wp-json 404 = not a WP site
        return []
    try:
        import html as h
        return [r['url'] for r in json.loads(html)
                if slug_match(dish, r.get('url', ''))
                or fuzzy_match(dish, r.get('url', ''))
                or fuzzy_match(dish, h.unescape(r.get('title', '')))][:3]
    except Exception:
        _dead_domains.add(dom)   # non-JSON response = not WP either
        return []


_ddg_dead = False


def ddg_links(dish: str, allowed: set[str]) -> list[str]:
    """Best-effort search fallback; disables itself after the first block."""
    global _ddg_dead
    if _ddg_dead:
        return []
    try:
        html = fetch('https://lite.duckduckgo.com/lite/?' +
                     urllib.parse.urlencode({'q': f'{dish} recipe'}))
    except Exception:
        _ddg_dead = True
        print('  DDG blocked — disabling search fallback for this run')
        return []
    if not html:
        return []
    soup = BeautifulSoup(html, 'html.parser')
    out = []
    for a in soup.select('a.result-link, td a[href]'):
        href = a.get('href', '')
        dom = urllib.parse.urlparse(href).netloc.lower().removeprefix('www.')
        if dom in allowed and href not in out:
            out.append(href)
    return out[:3]


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', required=True)
    ap.add_argument('--limit', type=int, default=90)  # buffer vs 50/country cap
    ap.add_argument('--no-pageviews', action='store_true')
    ap.add_argument('--no-urls', action='store_true')
    ap.add_argument('--force', action='store_true',
                    help='run even for tier-3 countries')
    args = ap.parse_args()

    countries = {c['iso2']: c for c in
                 yaml.safe_load(COUNTRIES.read_text())['countries']}
    country = countries[args.iso]
    if country.get('tier', 3) == 3 and not args.force:
        sys.exit(f"{args.iso} is tier 3 — out of scope (use --force)")
    sites = yaml.safe_load(SITES.read_text())['sites']
    # yaml parses unquoted yes/no as booleans — normalise to bool
    for s in sites:
        s['robots_ok'] = s['robots_ok'] not in (False, 'no')
    allowed = {s['domain'] for s in sites if s['robots_ok']}
    regional = {s['domain'] for s in sites
                if s['robots_ok'] and s['regional'] in ('all', args.iso)}

    c = db.conn()

    # --- 1. wiki candidates -------------------------------------------------
    existing = c.execute(
        "SELECT COUNT(*) n FROM dishes WHERE iso2=?", (args.iso,)).fetchone()['n']
    if not existing:
        print('collecting wiki candidates...')
        hits = collect_candidates(country)
        print(f'  {len(hits)} raw candidates')
        for t, n in sorted(hits.items()):
            status, note = 'candidate', None
            if t.startswith(f'{country["wiki_lang"]}:'):
                status, note = 'local_only', None
            elif NON_DISH.search(t) or set(norm_latin(t).split()) & NON_DISH_TOKENS:
                status, note = 'dropped_nonrecipe', 'title heuristic'
            elif TITLE_HARAM.search(t) and not TITLE_HARAM_EXCEPT & set(norm_latin(t).split()):
                status, note = 'dropped_haram', 'title rule'
            elif (m := dupes.title_match(t)):
                status, note = 'dropped_dup', m['id']
                dupes.log_duplicate(t, args.iso, m, 'title')
            db.upsert_dish(c, args.iso, t, score=float(n), status=status,
                           note=note, updated_at=db.now())
        c.commit()
        # local names
        cand = [r['dish'] for r in c.execute(
            "SELECT dish FROM dishes WHERE iso2=? AND status='candidate'",
            (args.iso,))]
        names = local_names(cand, country['wiki_lang'])
        for t, ln in names.items():
            c.execute('UPDATE dishes SET local_name=? WHERE iso2=? AND dish=?',
                      (ln, args.iso, t))
        c.commit()
    else:
        print(f'resuming: {existing} dishes already in db')

    # --- 2. pageviews + rank -------------------------------------------------
    rows = c.execute(
        "SELECT dish, score FROM dishes WHERE iso2=? AND status='candidate' "
        "ORDER BY score DESC", (args.iso,)).fetchall()
    titles = [r['dish'] for r in rows]
    if not args.no_pageviews:
        missing = [t for t in titles[:150]
                   if not c.execute(
                       "SELECT 1 FROM meta WHERE k=?", (f'pv:{args.iso}:{t}',)
                   ).fetchone()]
        if missing:
            print(f'pageviews for top {len(missing)} candidates...')
            pv = pageviews(missing)
            for t, v in pv.items():
                c.execute('INSERT OR REPLACE INTO meta VALUES (?,?)',
                          (f'pv:{args.iso}:{t}', str(v)))
            c.commit()
    for r in rows:
        v = int((c.execute('SELECT v FROM meta WHERE k=?',
                           (f'pv:{args.iso}:{r["dish"]}',)).fetchone()
                 or {'v': '0'})['v'])
        c.execute('UPDATE dishes SET score=? WHERE iso2=? AND dish=?',
                  (float(r['score']) * 1_000_000 + v, args.iso, r['dish']))
    c.commit()

    # --- 2b. wikidata-description filter (ingredients/drinks/meta out) -------
    if not c.execute(
            "SELECT 1 FROM dishes WHERE iso2=? AND status='dropped_desc'",
            (args.iso,)).fetchone():
        top_check = [r['dish'] for r in c.execute(
            "SELECT dish FROM dishes WHERE iso2=? AND status='candidate' "
            'ORDER BY score DESC LIMIT 170', (args.iso,))]
        descs = wikidata_descs(top_check)
        ndropped = 0
        for t, desc in descs.items():
            if NON_DISH_DESC.search(desc) and not DISH_DESC.search(desc):
                c.execute('UPDATE dishes SET status=?, note=? '
                          'WHERE iso2=? AND dish=?',
                          ('dropped_desc', desc[:80], args.iso, t))
                ndropped += 1
        c.commit()
        print(f'  dropped {ndropped} non-dish by description')

    # --- 2c. category-membership dish check ----------------------------------
    if not c.execute(
            "SELECT 1 FROM dishes WHERE iso2=? AND status='dropped_cat'",
            (args.iso,)).fetchone():
        top_check = [r['dish'] for r in c.execute(
            "SELECT dish FROM dishes WHERE iso2=? AND status='candidate' "
            'ORDER BY score DESC LIMIT 170', (args.iso,))]
        cats = wiki_categories(top_check)
        ndropped = 0
        for t, cl in cats.items():
            if is_dish_by_cats(cl) is False:
                c.execute('UPDATE dishes SET status=?, note=? '
                          'WHERE iso2=? AND dish=?',
                          ('dropped_cat', ','.join(cl[:4])[:80],
                           args.iso, t))
                ndropped += 1
        c.commit()
        print(f'  dropped {ndropped} non-dish by categories')

    # --- 3. source URLs -------------------------------------------------------
    top = c.execute(
        "SELECT dish FROM dishes WHERE iso2=? AND status='candidate' "
        'ORDER BY score DESC LIMIT ?', (args.iso, args.limit)).fetchall()
    top_dishes = [r['dish'] for r in top]
    dish_url: dict[str, list[str]] = {d: [] for d in top_dishes}
    if not args.no_urls:
        print('harvesting sitemap/index links...')
        link_pool: set[str] = set()
        for dom in sorted(regional):
            for u in sitemap_urls(dom):
                link_pool.add(u)
        link_pool |= set(ic_search_links(country['demonym']))
        link_pool |= set(wikibooks_links(country))
        print(f'  {len(link_pool)} candidate links')
        for u in sorted(link_pool):
            for d in top_dishes:
                if len(dish_url[d]) < 3 and (slug_match(d, u)
                                             or fuzzy_match(d, u)):
                    dish_url[d].append(u)
        have = sum(1 for us in dish_url.values() if us)
        # WP REST search for every dish that still needs sources —
        # highest-yield path: exact-dish search on allowlisted domains
        first = [s['domain'] for s in sites
                 if s['robots_ok'] and s['regional'] == args.iso]
        rest = [d2 for d2 in sorted(regional) if d2 not in first]
        domains = (first + rest)
        need = [d for d in top_dishes if len(dish_url[d]) < 2]
        print(f'  {have} slug-matched; WP search for {len(need)} dishes '
              f'across {len(domains)} domains')
        for d in need:
            for dom in domains[:5]:
                if len(dish_url[d]) >= 2:
                    break
                dish_url[d] += [u for u in wp_search(d, dom)
                                if u not in dish_url[d]][:2 - len(dish_url[d])]
        for d in top_dishes[:60]:
            if len(dish_url[d]) < 2:
                dish_url[d] += [u for u in ddg_links(d, allowed)
                                if u not in dish_url[d]][:3 - len(dish_url[d])]

    # --- 3b. embedding dup suspects (CPU e5) ---------------------------------
    suspects: dict[str, list[dict]] = {}
    try:
        print('embedding dup check on final candidates...')
        for d in top_dishes:
            s = dupes.embedding_suspects(d)
            if s:
                suspects[d] = s
                c.execute("UPDATE dishes SET note=? WHERE iso2=? AND dish=?",
                          ('e5 suspect: ' + s[0]['id'], args.iso, d))
        c.commit()
        print(f'  {len(suspects)} suspects flagged for LLM judge')
    except Exception as e:
        print(f'  embedding check skipped: {e}')

    # --- 4. persist -----------------------------------------------------------
    out = {'iso2': args.iso,
           'country': country['name_en'],
           'generated': db.now(),
           'dishes': []}
    final = c.execute(
        'SELECT dish, local_name, score FROM dishes WHERE iso2=? AND '
        "status='candidate' ORDER BY score DESC", (args.iso,)).fetchall()
    # intra-country dedup (top 250): same dish under variant wiki titles
    seen_dishes: list[str] = []
    deduped = []
    for r in final[:250]:
        if any(fuzzy_match(r['dish'], o) and fuzzy_match(o, r['dish'])
               for o in seen_dishes):
            continue
        seen_dishes.append(r['dish'])
        deduped.append(r)
    final = deduped + final[250:]
    for rank, r in enumerate(final, 1):
        urls = dish_url.get(r['dish'], [])
        for u in urls:
            dom = urllib.parse.urlparse(u).netloc.lower().removeprefix('www.')
            c.execute('INSERT OR IGNORE INTO urls '
                      '(url, iso2, dish, domain, updated_at) '
                      'VALUES (?,?,?,?,?)',
                      (u, args.iso, r['dish'], dom, db.now()))
        out['dishes'].append({
            'rank': rank, 'dish': r['dish'],
            'local_name': r['local_name'],
            'score': int(r['score']),
            'wiki': 'https://en.wikipedia.org/wiki/'
                    + urllib.parse.quote(r['dish'].replace(' ', '_')),
            'urls': urls,
            'dup_suspect': suspects.get(r['dish']),
        })
    c.commit()
    drops = c.execute(
        "SELECT status, dish, note FROM dishes WHERE iso2=? AND "
        "status != 'candidate' ORDER BY status, dish", (args.iso,)).fetchall()
    out['dropped'] = [{'status': r['status'], 'dish': r['dish'],
                       'note': r['note']} for r in drops]
    dest = SOURCES / f'{args.iso}.yaml'
    dest.write_text(yaml.safe_dump(out, allow_unicode=True, sort_keys=False))
    n_urls = sum(len(d['urls']) for d in out['dishes'])
    print(f'{len(final)} candidates, {n_urls} source urls -> {dest}')


if __name__ == '__main__':
    main()
