#!/usr/bin/env python3
"""Step 5: translations for world recipes into every recipeTranslations*.json.

    .venv/bin/python translate.py [--iso ma] [--langs Ja,Ur] [--batch 5]

English (recipeTranslations.json) is assembled from the bilingual entry
fields — no model needed. All other languages are translated per recipe by
the local instruct model in batches; resumable per recipe id.

Local-model output is NOT trusted: after every run, `npm run check:world`
must pass (see docs/TRANSLATION_GUIDE.md).
"""
import argparse
import json
import re
from pathlib import Path

from worldutil import REPO

SRC_DATA = REPO / 'src' / 'data'
SRC_WORLD = SRC_DATA / 'world'

LANGS = {
    'De': 'German', 'El': 'Greek', 'Es': 'Spanish', 'Fa': 'Persian (Farsi)',
    'Fr': 'French', 'He': 'Hebrew', 'Hi': 'Hindi', 'Id': 'Indonesian',
    'It': 'Italian', 'Ja': 'Japanese', 'Ko': 'Korean',
    'Ku': 'Kurdish (Kurmanji)', 'Nl': 'Dutch', 'Pl': 'Polish',
    'Ps': 'Pashto', 'Pt': 'Portuguese', 'Ru': 'Russian', 'Sv': 'Swedish',
    'Sw': 'Swahili', 'Te': 'Telugu', 'Tr': 'Turkish', 'Ur': 'Urdu',
    'Zh': 'Simplified Chinese', 'Bn': 'Bengali',
}
EN_FILE = SRC_DATA / 'recipeTranslations.json'

SYSTEM = """You translate recipe data for a cooking site. You get a JSON object:
{recipe_id: {"title": .., "ingredients": {ing_id: {"name": ..,
"standardAmount": ..}}, "instructions": {"1": .., "2": ..},
"culturalNotes": ..}}
Translate every VALUE into {lang}. Keep keys and structure EXACTLY the same.
Translate ingredient names and amounts naturally (units may stay in cups/tbsp
or be metric — whichever reads better). Instructions must be clear and
actionable.
Write every value ONLY in the normal script of {lang} (Kurdish means
Kurmanji in Latin letters). Never leave English, Spanish, Japanese or any
other foreign words or characters in the text: translate them, or spell
dish names in {lang}'s own script. Never mix scripts inside a word. No brand
names; use the generic product. Do not copy native-script names in
parentheses (e.g. 紅白なます). Never add pork or alcohol.
Reply with JSON only — no commentary, no markdown fences."""


def en_entry(e: dict) -> dict:
    """English entry assembled from the entry's own English fields."""
    ings = {f"{e['id']}-i{i + 1}": {'name': ing[3] or ing[0],
                                    'standardAmount': ing[4] or ing[1]}
            for i, ing in enumerate(e['ingredients'])}
    instr = {str(i + 1): s[1] or s[0] for i, s in enumerate(e['steps'])}
    out = {'title': e['titleEn'], 'chapter': e['chapter'],
           'ingredients': ings, 'instructions': instr}
    if e.get('notesEn'):
        out['culturalNotes'] = e['notesEn']
    return out


def en_source(e: dict) -> dict:
    """Compact payload sent to the translator."""
    return {'title': e['titleEn'],
            'ingredients': {f"{e['id']}-i{n + 1}":
                            {'name': ing[3] or ing[0],
                             'standardAmount': ing[4] or ing[1]}
                            for n, ing in enumerate(e['ingredients'])},
            'instructions': {str(i + 1): s[1] or s[0]
                             for i, s in enumerate(e['steps'])},
            'culturalNotes': e.get('notesEn') or ''}


def json_from(text: str) -> dict | None:
    m = re.search(r'\{.*\}', text, re.DOTALL)
    if not m:
        return None
    try:
        return json.loads(m.group(0))
    except json.JSONDecodeError:
        return None


def valid(t: dict, src: dict) -> bool:
    if not isinstance(t.get('title'), str) or not t['title'].strip():
        return False
    if set(t.get('ingredients', {})) != set(src['ingredients']):
        return False
    return set(t.get('instructions', {})) == set(src['instructions'])


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--iso', nargs='*', default=['ma', 'jp', 'mx'])
    ap.add_argument('--langs', default='')
    ap.add_argument('--batch', type=int, default=5)
    args = ap.parse_args()

    entries = []
    for iso in args.iso:
        p = SRC_WORLD / f'{iso}.json'
        if p.exists():
            entries += json.loads(p.read_text())

    # --- English: deterministic -----------------------------------------
    en = json.loads(EN_FILE.read_text())
    added = 0
    for e in entries:
        if e['id'] not in en:
            en[e['id']] = en_entry(e)
            added += 1
    if added:
        EN_FILE.write_text(json.dumps(en, ensure_ascii=False, indent=1) + '\n')
    print(f'en: {added} entries added')

    # --- Other languages: LLM --------------------------------------------
    wanted = {s: n for s, n in LANGS.items()
              if not args.langs or s in args.langs.split(',')}
    plan = []
    for suffix, lang in wanted.items():
        path = SRC_DATA / f'recipeTranslations{suffix}.json'
        table = json.loads(path.read_text()) if path.exists() else {}
        todo = [e for e in entries if e['id'] not in table]
        plan.append((suffix, lang, path, table, todo))
        print(f'{suffix}: {len(todo)} to translate')
    if not any(t[4] for t in plan):
        return

    from mlx_lm import generate, load
    model, tok = load('mlx-community/Qwen3-30B-A3B-Instruct-2507-4bit')

    def llm(system: str, payload: dict) -> str:
        msgs = [{'role': 'system', 'content': system},
                {'role': 'user', 'content': json.dumps(
                    payload, ensure_ascii=False)}]
        text = tok.apply_chat_template(msgs, tokenize=False,
                                       add_generation_prompt=True)
        return generate(model, tok, prompt=text, max_tokens=8192,
                        verbose=False)

    for suffix, lang, path, table, todo in plan:
        if not todo:
            continue
        for i in range(0, len(todo), args.batch):
            chunk = todo[i:i + args.batch]
            payload = {e['id']: en_source(e) for e in chunk}
            out = json_from(
                llm(SYSTEM.replace('{lang}', lang), payload)) or {}
            got = 0
            for e in chunk:
                t = out.get(e['id'])
                src = payload[e['id']]
                if t and valid(t, src):
                    t['chapter'] = e['chapter']
                    table[e['id']] = t
                    got += 1
                else:
                    print(f'  {suffix} {e["id"]}: bad/missing, retry')
            path.write_text(json.dumps(table, ensure_ascii=False,
                                       indent=1) + '\n')
            print(f'{suffix} [{i + len(chunk)}/{len(todo)}] +{got}')


if __name__ == '__main__':
    main()
