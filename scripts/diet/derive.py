"""Step 3: merge AI facts + keyword scan, derive dietary claims, write the datasets.

Usage: python3 scripts/diet/derive.py <work dir with recipes.jsonl and out/batch-*.json>
Writes  scripts/diet/facts.json        audit trail: merged facts per recipe
        src/data/recipeDietaryCodes.json  {id: [claim, ...]}  compact copy for the app bundle
        src/data/recipeDietary.json    {id: [{claim, basis, ruleset, note?}]}  (source of truth, flows to Cookwala)
        <work>/review.json             recipes with uncertain/disagreeing facts, for a human
Only POSITIVE claims are written. A claim is withheld whenever a relevant fact is uncertain.
"""
import json, sys, glob, os, collections, pathlib
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE)); sys.path.insert(0, str(HERE.parents[0] / 'world'))
from scan import scan
from halal import gate
from tags import TAGS, UNCERTAIN_ONLY

RULESET = 'fifi-diet-1'
MEATISH = {'red_meat', 'poultry', 'animal_fat'}
NOT_VEG = {'pork','red_meat','poultry','other_land_animal','finned_fish','nonkosher_fish','shellfish','gelatin','animal_fat','blood'}
NOT_HALAL = {'pork','blood','gelatin','alcohol','other_land_animal'}
NOT_KOSHER = {'pork','other_land_animal','shellfish','nonkosher_fish','blood','gelatin','alcohol'}
HALAL_UNSURE = NOT_HALAL | {'hidden_animal_unknown', 'stock_unspecified'}
VEG_UNSURE = NOT_VEG | {'stock_unspecified','hidden_animal_unknown'}
KOSHER_UNSURE = NOT_KOSHER | {'hidden_animal_unknown'}

def derive(facts, uncertain, rec):
    f = set(facts); u = {x['tag'] for x in uncertain}
    claims = []
    if not (f & NOT_VEG) and not (u & VEG_UNSURE):
        note = 'Cheese rennet source not stated.' if 'animal_rennet_possible' in u else None
        claims.append(('vegetarian', note))
        if not (f & {'egg','dairy','honey'}) and not u:
            claims.append(('vegan', None))
    st, _ = gate('\n'.join(rec['ingredients'] + rec['steps']))
    if not (f & NOT_HALAL) and not (u & HALAL_UNSURE) and st == 'halal':
        bits = []
        if f & MEATISH: bits.append('Meat assumed halal-slaughtered.')
        if 'animal_rennet_possible' in u: bits.append('Cheese rennet source not stated.')
        claims.append(('halal', ' '.join(bits) or None))
    km = bool(f & MEATISH); kd = 'dairy' in f
    if not (f & NOT_KOSHER) and not (u & KOSHER_UNSURE) and not (km and kd) and not (km and 'finned_fish' in f) \
       and not ('stock_unspecified' in u and kd):
        kind = 'meat' if km else 'dairy' if kd else 'pareve'
        bits = [f'Kosher-compatible by ingredients ({kind}).', 'Not certified: meat must be kosher-slaughtered; processed items, cheese and wine need a hechsher.']
        claims.append(('kosher', ' '.join(bits)))
    return claims

def main(work):
    recipes = {json.loads(l)['id']: json.loads(l) for l in open(os.path.join(work, 'recipes.jsonl'))}
    ai = {}
    for f in sorted(glob.glob(os.path.join(work, 'out', 'batch-*.json'))):
        for r in json.load(open(f)): ai[r['id']] = r
    missing = sorted(set(recipes) - set(ai)); extra = sorted(set(ai) - set(recipes))
    if missing or extra: sys.exit(f'coverage: {len(missing)} recipes without AI facts (e.g. {missing[:5]}), {len(extra)} unknown ids')
    valid = set(TAGS) | set(UNCERTAIN_ONLY)
    out, merged, review, stat = {}, {}, [], collections.Counter()
    for rid, rec in recipes.items():
        a = ai[rid]
        bad = [t for t in a['contains'] if t not in TAGS] + [x['tag'] for x in a['uncertain'] if x['tag'] not in valid]
        if bad: sys.exit(f'{rid}: unknown tags {bad}')
        s = scan(rec)
        facts = sorted(set(a['contains']) | set(s))
        unc = [x for x in a['uncertain'] if x['tag'] not in facts]
        only_scan = sorted(set(s) - set(a['contains'])); only_ai = sorted(set(a['contains']) - set(s))
        merged[rid] = {'contains': facts, 'uncertain': unc, **({'scanOnly': only_scan} if only_scan else {}), **({'aiOnly': only_ai} if only_ai else {})}
        for t in only_scan: stat['scan-only ' + t] += 1
        for t in only_ai: stat['ai-only ' + t] += 1
        flagged = bool(a.get('flag'))
        claims = [] if flagged else derive(facts, unc, rec)
        if claims:
            out[rid] = [{'claim': c, 'basis': 'ingredients', 'ruleset': RULESET, **({'note': n} if n else {})} for c, n in claims]
        for c, _ in claims: stat['claim ' + c] += 1
        if flagged or unc or only_scan or only_ai:
            review.append({'id': rid, 'title': rec['title'], 'flag': a.get('flag', ''), 'uncertain': unc, 'scanOnly': only_scan, 'aiOnly': only_ai,
                           'evidence': a.get('evidence', {}), 'scanEvidence': {t: s[t][:2] for t in only_scan}})
    json.dump(merged, open(HERE / 'facts.json', 'w'), indent=0, sort_keys=True, ensure_ascii=False)
    json.dump(out, open(HERE.parents[1] / 'src' / 'data' / 'recipeDietary.json', 'w'), indent=0, sort_keys=True, ensure_ascii=False)
    # compact claims for the app bundle (the full file with notes feeds public/data)
    json.dump({k: [c['claim'] for c in v] for k, v in out.items()}, open(HERE.parents[1] / 'src' / 'data' / 'recipeDietaryCodes.json', 'w'), sort_keys=True, separators=(',', ':'))
    json.dump(review, open(os.path.join(work, 'review.json'), 'w'), ensure_ascii=False, indent=1)
    print(len(recipes), 'recipes;', len(out), 'with at least one claim;', len(review), 'in review')
    for k, v in sorted(stat.items()): print(f'  {k}: {v}')

if __name__ == '__main__': main(sys.argv[1])
