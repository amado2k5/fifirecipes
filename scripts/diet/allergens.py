"""Step 4: allergens, "no allergens found" and diabetic status, plus the extra dietary claims they allow.

Usage: python3 scripts/diet/allergens.py <work dir with recipes.jsonl from extract.py> [--public public/data/recipes]
Reads  <work>/recipes.jsonl               compact English view of every recipe (extract.py)
       scripts/diet/facts.json            the reviewed facts (derive.py): dairy, egg, fish, shellfish and the uncertain items
       public/data/recipes/<id>.json      the nutrition estimate per serving (`estimate`)
Writes src/data/recipeHealth.json         {id: {a: [allergen codes], s: status, d: diabetic status}}  (app bundle, compact)
       src/data/recipeDietaryExtra.json   {id: [{claim, basis, ruleset, note}]}  gluten_free, dairy_free, nut_free, diabetic_friendly
       scripts/diet/allergen_facts.json   audit trail: evidence per allergen found and the processed items seen

Allergen codes are the EU-14 names Cookwala uses: milk, eggs, cereals_gluten, nuts, peanuts, sesame, soybeans, fish, crustaceans,
molluscs, celery, mustard, lupin, sulphites.
Status  c = contains (at least one allergen found)
        n = none found: nothing in the ingredient names or steps, no bought/compound item that could hide one, recipe reviewed
        l = check labels: nothing found, but a bought or compound item (stock cube, sauce, spice mix...) may hide one
        u = not assessed (no reviewed facts for the recipe yet)
Diabetic  f friendly | b borderline | n not friendly | u unknown (no nutrition estimate)
          friendly: sugar 5 g or less and carbohydrate 30 g or less per serving, carbohydrate at most 40% of the energy, 12 servings or fewer;
          not friendly: sugar over 15 g or carbohydrate over 60 g per serving.
These are screens, not certifications and not medical advice. Positive claims are written only when the screen is confident.
"""
import json, re, sys, os, argparse, pathlib, glob
HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]
sys.path.insert(0, str(HERE)); sys.path.insert(0, str(ROOT / 'scripts' / 'world'))
from textnorm import norm_latin
from scan import PLANT, scan

CODES = ['milk', 'eggs', 'cereals_gluten', 'nuts', 'peanuts', 'sesame', 'soybeans', 'fish', 'crustaceans', 'molluscs', 'celery', 'mustard', 'lupin', 'sulphites']
RULESET_ALLERGEN = 'fifi-allergen-1'
RULESET_DIABETIC = 'fifi-diabetic-1'


def rx(words):
    """Match whole words after norm_latin (lower case, accents off, trailing s dropped on words over 3 letters)."""
    norm = sorted({norm_latin(w) for w in words}, key=len, reverse=True)
    return re.compile(r'(?<![a-z])(' + '|'.join(re.escape(w) for w in norm) + r')(?![a-z])')


RX = {
    'cereals_gluten': rx(['wheat', 'bread', 'breadcrumbs', 'bread crumbs', 'pasta', 'macaroni', 'spaghetti', 'noodles', 'vermicelli', 'couscous', 'bulgur', 'burghul', 'bulghur',
                          'freekeh', 'firik', 'farika', 'semolina', 'suji', 'sooji', 'rava', 'barley', 'rye', 'oats', 'oat', 'phyllo', 'filo', 'fillo', 'pastry', 'dough', 'biscuits', 'biscuit',
                          'pizza', 'tortilla', 'pita', 'pitta', 'baguette', 'croissant', 'seitan', 'malt', 'ramen', 'udon', 'soba', 'somen', 'panko', 'orzo', 'lasagna', 'lasagne',
                          'crackers', 'cracker', 'wafer', 'kataifi', 'kunafa', 'konafa', 'kanafeh', 'toast', 'maida', 'atta', 'spelt', 'farro', 'kamut', 'einkorn', 'gluten', 'beer',
                          'cake', 'cookie', 'cookies', 'pie crust', 'puff pastry', 'rusk', 'cornbread', 'dumpling wrapper', 'wonton', 'soy sauce', 'teriyaki', 'hoisin', 'gochujang',
                          'semolina flour', 'plain flour', 'all purpose flour', 'bread flour', 'self raising flour', 'whole wheat flour', 'wholemeal flour', 'cake flour']),
    'nuts': rx(['almond', 'walnut', 'pistachio', 'hazelnut', 'cashew', 'pecan', 'macadamia', 'brazil nut', 'pine nut', 'pignoli', 'praline', 'marzipan', 'nutella', 'gianduja',
                'frangipane', 'nut', 'nuts', 'dukkah', 'duqqa', 'dukka', 'baklava']),
    'peanuts': rx(['peanut', 'groundnut', 'peanuts']),
    'sesame': rx(['sesame', 'tahini', 'tahina', 'halawa', 'halva', 'halwa', 'gomasio', 'zaatar', "za'atar", 'zatar', 'dukkah', 'duqqa', 'dukka', 'simsim', 'sesame oil']),
    'soybeans': rx(['soy', 'soya', 'soybean', 'soybeans', 'tofu', 'edamame', 'miso', 'tempeh', 'natto', 'tamari', 'soy sauce', 'doenjang', 'gochujang', 'ssamjang', 'hoisin', 'teriyaki', 'soy milk']),
    'celery': rx(['celery', 'celeriac', 'celery salt', 'celery seed']),
    'mustard': rx(['mustard', 'mustard seed', 'mustard oil', 'sarson']),
    'lupin': rx(['lupin', 'lupini', 'lupine', 'termis', 'tirmis']),
    'sulphites': rx(['wine', 'wine vinegar', 'sulphite', 'sulfite', 'sulphur dioxide', 'dried apricot', 'qamar al din', 'amardeen', 'apricot leather']),
    'crustaceans': rx(['shrimp', 'prawn', 'crab', 'lobster', 'crayfish', 'crawfish', 'langoustine', 'krill', 'shrimp paste']),
    'molluscs': rx(['squid', 'calamari', 'octopus', 'cuttlefish', 'clam', 'mussel', 'oyster', 'scallop', 'snail', 'escargot', 'abalone', 'cockle', 'whelk', 'conch', 'oyster sauce']),
    'fish': rx(['worcestershire', 'anchovy', 'anchovies', 'fish sauce', 'nam pla']),
}
# In steps, gluten words are limited to ones that mean wheat in the pot: "toast the spices", "serve with bread" and "rice cakes" are not.
STEP_GLUTEN = rx(['wheat', 'breadcrumbs', 'bread crumbs', 'semolina', 'pasta', 'macaroni', 'spaghetti', 'noodles', 'vermicelli', 'couscous', 'bulgur', 'pastry', 'phyllo', 'filo', 'fillo', 'dough', 'soy sauce', 'beer', 'malt', 'gluten'])
# gluten-free flours: "rice flour" etc. are not wheat; "flour" alone (or plain, wheat, bread...) is
GF_FLOUR = re.compile(r'(?<![a-z])(rice|corn|maize|chickpea|gram|besan|almond|coconut|potato|tapioca|cassava|sorghum|millet|masa|arrowroot|glutinous|buckwheat|lentil|fava|bean|pea|banana|cashew|teff|amaranth|quinoa|nut|cocoa|gluten free|gf|soy|soya)\s+(?:[a-z]+\s+)?flour')
FLOUR = re.compile(r'(?<![a-z])flour(?![a-z])')
GF_NOODLE = re.compile(r'(?<![a-z])(rice|glass|mung bean|bean thread|cellophane|konjac|shirataki|sweet potato)\s+(?:[a-z]+\s+)?(noodle|vermicelli)')
GF_TORTILLA = re.compile(r'(?<![a-z])corn\s+tortilla')
NOT_NUT = re.compile(r'(?<![a-z])(coconut|nutmeg|butternut|chestnut|water chestnut|doughnut|donut|nut free|nutri)')
# bought or compound items that can carry an allergen the list does not name
PROCESSED = re.compile(r'(?<![a-z])(stock cube|bouillon|stock powder|instant stock|stock mix|maggi|knorr|ketchup|ready made|readymade|store bought|shop bought|bought|packaged|packet|canned soup|tinned|curry paste|curry powder|spice mix|spice blend|seasoning mix|seasoning cube|seasoning blend|baking mix|cake mix|instant|sauce mix|salad dressing|dressing|pesto|chocolate|candy|sweets|sprinkles|jelly|jello|food colou?r|essence|extract|worcestershire|barbecue sauce|bbq sauce|hot sauce|chili sauce|chilli sauce|sriracha|sausage|hot dog|cheese slice|processed cheese|marinade|mayonnaise|margarine|custard powder|cream powder|baking powder|yeast extract|vinegar sauce|bottled|jar|salami|pastirma|basturma|luncheon|spread|nutella|biscuit|ice cream|dried fruit|raisin|sultana|date syrup|molasses)')


def evidence(found, code, text, where):
    found.setdefault(code, [])
    if len(found[code]) < 3: found[code].append(f'{where}: {text[:60]}')


def line_allergens(line, where):
    """Allergens named in one ingredient line or step."""
    found = {}
    raw = norm_latin(line.split('|')[0]) if where == 'ingredient' else norm_latin(line)
    plain = PLANT.sub(' ', raw)
    for code, r in RX.items():
        text = raw
        if code == 'cereals_gluten':
            text = GF_NOODLE.sub(' ', GF_TORTILLA.sub(' ', raw))
            m = r.search(text)
            if m: evidence(found, code, m.group(1), where)
            # a flour that is not named gluten-free is wheat flour
            if FLOUR.search(GF_FLOUR.sub(' ', raw)): evidence(found, code, 'flour', where)
            continue
        if code == 'nuts': text = NOT_NUT.sub(' ', raw)
        m = r.search(text)
        if m: evidence(found, code, m.group(1), where)
    # milk, eggs, fish, shellfish: the repo's own keyword layer (plant-based look-alikes already removed there)
    return found, plain


def processed_hits(rec):
    out = set()
    for line in rec['ingredients']:
        m = PROCESSED.search(norm_latin(line.split('|')[0]))
        if m: out.add(m.group(1))
    return sorted(out)


def derive_one(rec, facts, estimate):
    found = {}
    for line in rec['ingredients']:
        f, _ = line_allergens(line, 'ingredient')
        for k, v in f.items(): found.setdefault(k, []).extend(v)
    # steps add things cooks bring in without listing: only the high-signal allergens
    stext = norm_latin(' '.join(rec['steps']))
    for code in ('cereals_gluten', 'nuts', 'peanuts', 'sesame', 'soybeans', 'celery', 'mustard', 'crustaceans', 'molluscs'):
        text = stext
        if code == 'cereals_gluten':
            text = GF_NOODLE.sub(' ', GF_TORTILLA.sub(' ', GF_FLOUR.sub(' ', stext)))
        if code == 'nuts': text = NOT_NUT.sub(' ', stext)
        m = (RX[code].search(text) if code != 'cereals_gluten' else (STEP_GLUTEN.search(text) or FLOUR.search(text)))
        if m: evidence(found, code, m.group(1) if m.groups() else m.group(0), 'step')
    # reviewed facts + the existing keyword scan: milk, eggs, fish, shellfish
    s = scan(rec)
    tags = set(facts['contains']) if facts else set()
    tags |= set(s)
    if 'dairy' in tags: found.setdefault('milk', []).append('facts: dairy')
    if 'egg' in tags: found.setdefault('eggs', []).append('facts: egg')
    if 'finned_fish' in tags or 'nonkosher_fish' in tags: found.setdefault('fish', []).append('facts: fish')
    if 'shellfish' in tags and 'crustaceans' not in found and 'molluscs' not in found:
        found['crustaceans'] = ['facts: shellfish (kind not stated)']; found['molluscs'] = ['facts: shellfish (kind not stated)']
    contains = [c for c in CODES if c in found]
    proc = processed_hits(rec)
    unc = {x['tag'] for x in (facts['uncertain'] if facts else [])}
    reviewed = facts is not None
    if contains: status = 'c'
    elif not reviewed: status = 'u'
    elif proc or unc & {'stock_unspecified', 'hidden_animal_unknown'}: status = 'l'
    else: status = 'n'
    dia = 'u'
    if estimate and isinstance(estimate.get('carbs'), (int, float)) and isinstance(estimate.get('sugar'), (int, float)):
        c, su = estimate['carbs'], estimate['sugar']
        kcal, serv = estimate.get('kcal'), estimate.get('servings')
        # friendly also needs carbohydrate to be a modest share of the energy and a believable serving count: a cookie recipe divided
        # into 40 servings can look light per serving and still be sugar and starch
        share_ok = isinstance(kcal, (int, float)) and kcal > 0 and c * 4 / kcal <= 0.40
        serv_ok = isinstance(serv, (int, float)) and 0 < serv <= 12
        dia = 'n' if (su > 15 or c > 60) else 'f' if (su <= 5 and c <= 30 and share_ok and serv_ok) else 'b'
    return contains, status, dia, found, proc


def extra_claims(contains, status, dia, proc, unc_hidden, reviewed, rid):
    """Positive claims only, and only when nothing bought or compound could hide the allergen."""
    out = []
    safe = reviewed and not proc and not unc_hidden
    if safe and 'cereals_gluten' not in contains:
        out.append(('gluten_free', RULESET_ALLERGEN, 'No gluten found in the ingredients or steps. Cross-contact is not assessed; check labels of bought items.'))
    if safe and 'milk' not in contains:
        out.append(('dairy_free', RULESET_ALLERGEN, 'No milk or dairy found in the ingredients or steps. Check labels of bought items.'))
    if safe and not ({'nuts', 'peanuts'} & set(contains)):
        out.append(('nut_free', RULESET_ALLERGEN, 'No nuts or peanuts found in the ingredients or steps. Cross-contact is not assessed; check labels of bought items.'))
    if dia == 'f':
        out.append(('diabetic_friendly', RULESET_DIABETIC, 'Estimate from the nutrition estimate per serving (sugar 5 g or less, carbohydrate 30 g or less, carbohydrate at most 40% of the energy, 12 servings or fewer). Not medical advice; ask a doctor or dietitian.'))
    return out


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('work'); ap.add_argument('--public', default=str(ROOT / 'public/data/recipes'))
    a = ap.parse_args()
    recipes = [json.loads(l) for l in open(os.path.join(a.work, 'recipes.jsonl'))]
    facts_all = json.load(open(HERE / 'facts.json'))
    health, extra, audit = {}, {}, {}
    stat = {'c': 0, 'n': 0, 'l': 0, 'u': 0, 'f': 0, 'b': 0, 'dn': 0, 'du': 0}
    for rec in recipes:
        rid = rec['id']; facts = facts_all.get(rid)
        pf = os.path.join(a.public, rid + '.json')
        est = json.load(open(pf)).get('estimate') if os.path.exists(pf) else None
        contains, status, dia, found, proc = derive_one(rec, facts, est)
        unc_hidden = bool(facts and {x['tag'] for x in facts['uncertain']} & {'stock_unspecified', 'hidden_animal_unknown'})
        health[rid] = {'a': contains, 's': status, 'd': dia}
        claims = extra_claims(contains, status, dia, proc, unc_hidden, facts is not None, rid)
        if claims: extra[rid] = [{'claim': c, 'basis': 'ingredients', 'ruleset': rs, 'note': n} for c, rs, n in claims]
        audit[rid] = {'evidence': {k: v[:3] for k, v in found.items()}, **({'processed': proc} if proc else {})}
        stat[status] += 1
        stat['f' if dia == 'f' else 'b' if dia == 'b' else 'dn' if dia == 'n' else 'du'] += 1
    json.dump(health, open(ROOT / 'src/data/recipeHealth.json', 'w'), sort_keys=True, separators=(',', ':'), ensure_ascii=False)
    json.dump(extra, open(ROOT / 'src/data/recipeDietaryExtra.json', 'w'), sort_keys=True, indent=0, ensure_ascii=False)
    json.dump(audit, open(HERE / 'allergen_facts.json', 'w'), sort_keys=True, indent=0, ensure_ascii=False)
    print(len(recipes), 'recipes', stat, '| extra claims on', len(extra))


if __name__ == '__main__':
    main()
