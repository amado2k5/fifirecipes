#!/usr/bin/env python3
"""Step 6: nutrition + cost estimates for world recipes.

    .venv/bin/python estimates.py [--iso ma]

For each entry in src/data/world/<iso2>.json without an estimate, asks the
local instruct model for a RecipeEstimate (servings, per-serving macros,
whole-recipe USD cost by group) and emits
src/data/worldRecipeEstimates.ts. Resumable per recipe.
"""
import argparse
import json
import re
from pathlib import Path

from worldutil import REPO

SRC_WORLD = REPO / 'src' / 'data' / 'world'
OUT_TS = REPO / 'src' / 'data' / 'worldRecipeEstimates.ts'
COST_GROUPS = ['protein', 'dairyEggs', 'produce', 'grains', 'fats',
               'sweeteners', 'specialty', 'spices']

SYSTEM = """You estimate nutrition and cost for recipes. Reply with JSON only:
{"servings": <number>, "kcal": <per serving>, "protein": <g>, "fat": <g>,
 "carbs": <g>, "fiber": <g>, "sugar": <g>,
 "cost": {"protein": <$>, "dairyEggs": <$>, "produce": <$>, "grains": <$>,
          "fats": <$>, "sweeteners": <$>, "specialty": <$>, "spices": <$>}}
Rules: macros are per serving; cost is the WHOLE recipe's ingredient cost in
USD at average US supermarket prices (omit zero groups). Use USDA-style
values; rough approximations are expected."""


def json_from(text: str) -> dict | None:
    m = re.search(r'\{.*\}', text, re.DOTALL)
    if not m:
        return None
    try:
        return json.loads(m.group(0))
    except json.JSONDecodeError:
        return None


KEY_TO_GROUP = {
    'sugar': 'sweeteners', 'honey': 'sweeteners', 'molasses': 'sweeteners',
    'syrup': 'sweeteners', 'milk': 'dairyEggs', 'butter': 'dairyEggs',
    'cream': 'dairyEggs', 'cheese': 'dairyEggs', 'egg': 'dairyEggs',
    'eggs': 'dairyEggs', 'yogurt': 'dairyEggs', 'oil': 'fats',
    'oliveoil': 'fats', 'flour': 'grains', 'rice': 'grains',
    'bread': 'grains', 'pasta': 'grains', 'tortilla': 'grains',
    'salt': 'spices', 'pepper': 'spices', 'cinnamon': 'spices',
    'cloves': 'spices', 'cumin': 'spices', 'ginger': 'spices',
    'meat': 'protein', 'beef': 'protein', 'chicken': 'protein',
    'lamb': 'protein', 'fish': 'protein', 'shrimp': 'protein',
    'onion': 'produce', 'garlic': 'produce', 'tomato': 'produce',
    'potato': 'produce', 'lime': 'produce', 'lemon': 'produce',
    'cilantro': 'produce', 'avocado': 'produce', 'mango': 'produce',
}


def norm_cost(cost: dict) -> dict | None:
    """Fold ingredient-named cost keys into the 8 CostGroups."""
    out: dict[str, float] = {}
    for k, v in cost.items():
        if not isinstance(v, (int, float)):
            return None
        g = k if k in COST_GROUPS else KEY_TO_GROUP.get(
            re.sub(r'[^a-z]', '', k.lower()), 'specialty')
        out[g] = round(out.get(g, 0) + v, 2)
    return out


def valid_est(e: dict) -> bool:
    keys = ('servings', 'kcal', 'protein', 'fat', 'carbs', 'fiber', 'sugar')
    if any(not isinstance(e.get(k), (int, float)) for k in keys):
        return False
    cost = e.get('cost')
    if not isinstance(cost, dict) or not all(
            isinstance(v, (int, float)) for v in cost.values()):
        return False
    e['cost'] = norm_cost(cost)
    return e['cost'] is not None


MACRO_KEYS = ('kcal', 'protein', 'fat', 'carbs', 'fiber', 'sugar')


def validate_entry(rid: str, est) -> list:
    """Same rules as scripts/estimates/append.ts for hand-written batches."""
    if not isinstance(est, dict):
        return [f'{rid}: not an object']
    errs = []
    if not isinstance(est.get('servings'), (int, float)) \
            or est['servings'] <= 0:
        errs.append(f'{rid}: servings must be > 0')
    for k in MACRO_KEYS:
        v = est.get(k)
        if not isinstance(v, (int, float)) or int(v) != v or v < 0:
            errs.append(f'{rid}: {k} must be a whole number >= 0')
        else:
            est[k] = int(v)
    cost = est.get('cost')
    if not isinstance(cost, dict) or not cost:
        errs.append(f'{rid}: must have at least one cost bucket')
    elif norm_cost(cost) is None:
        errs.append(f'{rid}: non-numeric cost value')
    else:
        est['cost'] = norm_cost(cost)
    if errs or not est.get('kcal'):
        return errs
    calc = est['protein'] * 4 + est['fat'] * 9 + est['carbs'] * 4
    if abs(calc - est['kcal']) / est['kcal'] > 0.15:
        errs.append(f"{rid}: calculated kcal ({calc}) differs >15% "
                    f"from kcal ({est['kcal']})")
    return errs


def apply_batch(path: Path) -> None:
    """Merge a hand-written {id: estimate} JSON batch (Devin-authored)."""
    import sys
    batch = json.loads(path.read_text())
    known = {e['id'] for p in SRC_WORLD.glob('*.json')
             for e in json.loads(p.read_text())}
    done = load_done()
    errors = []
    for rid, est in batch.items():
        if rid not in known:
            errors.append(f'{rid}: unknown recipe id')
        elif rid in done:
            print(f'  {rid}: already present, skipped')
        else:
            errors += validate_entry(rid, est)
    if errors:
        print('\n'.join(errors), file=sys.stderr)
        sys.exit(1)
    for rid, est in batch.items():
        if rid not in done:
            done[rid] = {k: est[k] for k in ('servings',) + MACRO_KEYS}
            done[rid]['cost'] = est['cost']
    write_ts(done)
    print(f'{len(done)} total -> {OUT_TS}')


def load_done() -> dict:
    if not OUT_TS.exists():
        return {}
    m = re.search(r'=\s*(\{.*\});?\s*$', OUT_TS.read_text(), re.DOTALL)
    if not m:
        return {}
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError:
        import ast
        return ast.literal_eval(m.group(1))  # legacy single-quoted body


def write_ts(estimates: dict) -> None:
    body = json.dumps(dict(sorted(estimates.items())),
                        ensure_ascii=False, indent=2)
    OUT_TS.write_text(
        "import type { RecipeEstimate } from './recipeEstimates';\n\n"
        "// Estimated nutrition (per serving) and ingredient cost (whole\n"
        "// recipe, USD) for world-cuisine recipes; same approximation rules\n"
        "// as recipeEstimates.ts. Generated by scripts/world/estimates.py.\n"
        'export const WORLD_RECIPE_ESTIMATES: '
        'Record<string, RecipeEstimate> = ' + body + ';\n')


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', nargs='*', default=['ma', 'jp', 'mx'])
    ap.add_argument('--apply', metavar='JSON',
                    help='merge a hand-written {id: estimate} batch and exit')
    args = ap.parse_args()

    if args.apply:
        apply_batch(Path(args.apply))
        return

    entries = []
    for iso in args.iso:
        p = SRC_WORLD / f'{iso}.json'
        if p.exists():
            entries += json.loads(p.read_text())
    done = load_done()
    todo = [e for e in entries if e['id'] not in done]
    print(f'{len(todo)} estimates to generate ({len(done)} cached)')
    if not todo:
        write_ts(done)
        return

    from mlx_lm import generate, load
    model, tok = load('mlx-community/Qwen3-30B-A3B-Instruct-2507-4bit')
    for e in todo:
        ings = '\n'.join(
            f"- {i[3] or i[0]}: {i[4] or i[1]}" for i in e['ingredients'])
        prompt = (f"Recipe: {e['titleEn']} ({e.get('title','')})\n"
                  f"Servings field: {e.get('servings') or 'unknown'}\n"
                  f"Ingredients:\n{ings}")
        msgs = [{'role': 'system', 'content': SYSTEM},
                {'role': 'user', 'content': prompt}]
        text = tok.apply_chat_template(msgs, tokenize=False,
                                       add_generation_prompt=True)
        out = generate(model, tok, prompt=text, max_tokens=512,
                       verbose=False)
        est = json_from(out)
        if not est or not valid_est(est):
            print(f"  {e['id']}: bad output, retry next run")
            continue
        done[e['id']] = {k: est[k] for k in
                         ('servings', 'kcal', 'protein', 'fat', 'carbs',
                          'fiber', 'sugar')} | {'cost': est['cost']}
        write_ts(done)  # resumable: persist after every recipe
        print(f"  {e['id']} {e['titleEn']}: {est['kcal']} kcal")
    print(f'{len(done)} total -> {OUT_TS}')


if __name__ == '__main__':
    main()
