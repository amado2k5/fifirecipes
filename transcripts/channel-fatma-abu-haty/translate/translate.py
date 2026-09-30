#!/usr/bin/env python3
"""Translate Fatma Abu Haty recipe sources into site languages via local MLX.

Resumable: reads translate/src.jsonl, writes one JSON line per recipe to
translate/out/<lang>.jsonl, skipping recipe ids already translated.
Uses mlx_lm.batch_generate for batched decoding.

Run with the conda python: /opt/homebrew/Caskroom/miniconda/base/bin/python3
Usage: translate.py --lang en [--batch 16] [--model mlx-community/...] [--limit N]
"""

import argparse
import json
import re
from pathlib import Path

from mlx_lm import load, batch_generate
from mlx_lm.sample_utils import make_sampler

BASE = Path(__file__).parent
SRC = BASE / 'src.jsonl'
OUTDIR = BASE / 'out'

LANG_NAMES = {
    'en': 'English', 'fr': 'French', 'es': 'Spanish', 'ja': 'Japanese',
    'hi': 'Hindi', 'pt': 'Portuguese', 'ru': 'Russian', 'zh': 'Chinese (Simplified)',
    'de': 'German', 'it': 'Italian', 'el': 'Greek', 'ur': 'Urdu',
    'fa': 'Persian (Farsi)', 'tr': 'Turkish', 'ku': 'Kurdish (Kurmanji, Latin script)',
    'id': 'Indonesian', 'sw': 'Swahili', 'ko': 'Korean', 'nl': 'Dutch',
    'ps': 'Pashto', 'he': 'Hebrew', 'pl': 'Polish', 'sv': 'Swedish',
}

GLOSSARY = {
    'en': ('Transliterate Egyptian dish names per site convention: Kunafa, Kofta, '
           'Hawawshi, Fatta, Molokhia, Basbousa, Baladi, Feteer, Roz bel Laban, Sambosa, '
           'Shakshuka, Mahshi (stuffed vegetables), Koshari, Tameya (Egyptian falafel).'),
}

SYS = ('You translate Egyptian home-cooking recipes from Arabic into {lang}. '
       'Reply with ONLY valid JSON — the same JSON object with every Arabic string '
       'value translated into {lang}. Keep all keys, ids, and numbers unchanged. '
       '{glossary}')

USER = ('Translate this recipe JSON into {lang}. The "ingredients" object maps each '
        'id to [name, amount] — translate BOTH. The "instructions" object maps step '
        'numbers to text — translate the text.\n{recipe}')


def extract_json(text):
    text = re.sub(r'<think>.*?</think>', '', text, flags=re.S).strip()
    m = re.search(r'\{.*\}', text, re.S)
    if not m:
        return None
    try:
        return json.loads(m.group(0))
    except json.JSONDecodeError:
        # truncation repair: close open braces/keys
        frag = m.group(0)
        for tail in ('"}', '"}]}', '}', '"}'):
            try:
                return json.loads(frag + tail)
            except json.JSONDecodeError:
                pass
    return None


def norm_ingredient(v):
    """Accept [name, amount] or {name, amount|standardAmount}; return {name, amount}."""
    if isinstance(v, dict):
        return {'name': str(v.get('name', '')), 'amount': str(v.get('amount', v.get('standardAmount', '')))}
    if isinstance(v, list):
        return {'name': str(v[0]) if v else '', 'amount': str(v[1]) if len(v) > 1 else ''}
    if isinstance(v, str):
        return {'name': v, 'amount': ''}
    return None


def validate(recipe, entry):
    """Return (normalized_entry, error)."""
    if not isinstance(entry, dict) or not isinstance(entry.get('title'), str) or not entry['title'].strip():
        return None, 'no title'
    ing = entry.get('ingredients')
    if not isinstance(ing, dict):
        return None, 'no ingredients'
    src_ids = {i['id'] for i in recipe['ingredients']}
    if set(ing) != src_ids:
        return None, f'ingredient ids mismatch: missing {sorted(src_ids - set(ing))}, extra {sorted(set(ing) - src_ids)}'
    ning = {}
    for k, v in ing.items():
        nv = norm_ingredient(v)
        if not nv or not nv['name'].strip():
            return None, f'empty ingredient name at {k}'
        ning[k] = nv
    ins = entry.get('instructions')
    if not isinstance(ins, dict):
        return None, 'no instructions'
    src_ns = {str(s['n']) for s in recipe['instructions']}
    got = {str(k) for k in ins}
    if got != src_ns:
        return None, f'instruction keys mismatch: missing {sorted(src_ns - got)}, extra {sorted(got - src_ns)}'
    nins = {str(k): v for k, v in ins.items()}
    if not all(isinstance(v, str) and v.strip() for v in nins.values()):
        return None, 'empty instruction'

    out = {'id': recipe['id'], 'title': entry['title'],
           'prepTime': entry.get('prepTime', ''), 'cookTime': entry.get('cookTime', ''),
           'servings': entry.get('servings', ''),
           'culturalNotes': entry.get('culturalNotes', ''),
           'ingredients': ning, 'instructions': nins}
    return out, None


def recipe_json(recipe):
    return json.dumps({
        'title': recipe['title'],
        'prepTime': recipe.get('prepTime', ''), 'cookTime': recipe.get('cookTime', ''),
        'servings': recipe.get('servings', ''),
        'culturalNotes': recipe.get('culturalNotes', ''),
        'ingredients': {i['id']: [i['name'], i.get('amount', '')]
                        for i in recipe['ingredients']},
        'instructions': {s['n']: s['text'] for s in recipe['instructions']},
    }, ensure_ascii=False)


def prompts_for(recipes, tok, lang):
    sys_p = SYS.format(lang=LANG_NAMES[lang],
                       glossary=GLOSSARY.get(lang, 'Use standard culinary terms; transliterate Egyptian dish names.'))
    encoded = []
    for r in recipes:
        msgs = [{'role': 'system', 'content': sys_p},
                {'role': 'user', 'content': USER.format(lang=LANG_NAMES[lang],
                                                       recipe=recipe_json(r))}]
        encoded.append(tok.encode(
            tok.apply_chat_template(msgs, add_generation_prompt=True, tokenize=False)))
    return encoded


def run_batch(model, tok, recipes, lang, max_tokens=4096):
    resp = batch_generate(model, tok, prompts_for(recipes, tok, lang),
                          max_tokens=max_tokens,
                          sampler=make_sampler(temp=0.1))
    results, retry = [], []
    for r, text in zip(recipes, resp.texts):
        entry = extract_json(text)
        if entry is None:
            retry.append((r, 'no json'))
            continue
        out, err = validate(r, entry)
        if out:
            results.append(out)
        else:
            retry.append((r, err))
    return results, retry


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--lang', required=True,
                    help='comma-separated language codes, e.g. en or en,fr,es')
    ap.add_argument('--batch', type=int, default=16)
    ap.add_argument('--model', default='mlx-community/Qwen3-30B-A3B-Instruct-2507-4bit')
    ap.add_argument('--limit', type=int, default=0)
    args = ap.parse_args()

    langs = [l.strip() for l in args.lang.split(',')]
    for l in langs:
        if l not in LANG_NAMES:
            ap.error(f'unknown lang {l}')

    recipes = [json.loads(l) for l in open(SRC)]
    model = tok = None

    for lang in langs:
        out_path = OUTDIR / f'{lang}.jsonl'
        done = set()
        if out_path.exists():
            for l in open(out_path):
                try:
                    done.add(json.loads(l)['id'])
                except Exception:
                    pass
        todo = [r for r in recipes if r['id'] not in done]
        if args.limit:
            todo = todo[:args.limit]
        print(f'{lang}: {len(done)} done, {len(todo)} to translate', flush=True)
        if not todo:
            continue
        if model is None:
            model, tok = load(args.model)

        fout = open(out_path, 'a')
        errf = open(OUTDIR / f'{lang}.errors.jsonl', 'a')
        n_done = n_fail = 0

        for i in range(0, len(todo), args.batch):
            chunk = todo[i:i + args.batch]
            results, retry = run_batch(model, tok, chunk, lang)
            # retry failures once, one at a time
            for r, _err in retry:
                res2, retry2 = run_batch(model, tok, [r], lang)
                if res2:
                    results.extend(res2)
                else:
                    errf.write(json.dumps({'id': r['id'], 'err': retry2[0][1]},
                                          ensure_ascii=False) + '\n')
                    errf.flush()
                    n_fail += 1
            for out in results:
                fout.write(json.dumps(out, ensure_ascii=False) + '\n')
            fout.flush()
            n_done += len(results)
            print(f'{lang}: {n_done}/{len(todo)} ({n_fail} failed)', flush=True)

        fout.close()
        errf.close()
        print(f'{lang}: complete — {n_done} written, {n_fail} failed', flush=True)


if __name__ == '__main__':
    main()
