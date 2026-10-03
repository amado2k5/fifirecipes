"""Write a one-line photo brief for each recipe that does not have one yet, using a
local mlx-lm model. The brief describes the finished dish as it should appear in the
photo: name, vessel, visible ingredients, colours, garnish, and serving temperature.

Reads recipes with status 'pending' from work/state.db (synced from work/recipes.json
by state.sync_recipes) and stores the result with state.set_brief, which moves them
to 'described'. Resumable: already-described recipes are skipped.

    .venv-mflux/bin/python describe.py [--ids ...] [--ids-file FILE] [--limit N] [--model MODEL]
"""

import argparse
from pathlib import Path

import state

DEFAULT_MODEL = 'mlx-community/Qwen3-30B-A3B-Instruct-2507-4bit'

SYSTEM = """You write one-line visual briefs for a food-photography image generator. Given a recipe, describe the finished dish in one or two sentences: the dish name in English, the serving vessel, the main visible ingredients, colours and garnish, and end with the serving temperature ("served hot" / "served cold" / "served at room temperature"). Describe only what the camera would see; never mention people, hands, text, camera or lighting. Reply with the brief only, no preamble."""


def brief_for(model, tokenizer, recipe: dict, extra: dict) -> str:
    from mlx_lm.generate import generate
    lines = [f"Title: {recipe['title']}"]
    if recipe.get('titleEn'):
        lines.append(f"English title: {recipe['titleEn']}")
    if extra.get('country'):
        lines.append(f"Country: {extra['country']}")
    if extra.get('localName'):
        lines.append(f"Local name: {extra['localName']}")
    lines.append(f"Category: {recipe['category']}")
    if recipe.get('ingredients'):
        lines.append('Ingredients: ' + ', '.join(recipe['ingredients'][:12]))
    if recipe.get('instructions'):
        lines.append('Method: ' + ' '.join(recipe['instructions'][:3]))
    if extra.get('country'):
        lines.append("Name the country, and serve the dish in that country's traditional vessel "
                     '(tagine pot, donburi bowl, comal, …) when there is one.')
    messages = [{'role': 'system', 'content': SYSTEM}, {'role': 'user', 'content': '\n'.join(lines)}]
    prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
    return generate(model, tokenizer, prompt=prompt, max_tokens=120, verbose=False).strip()


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--ids', nargs='*')
    ap.add_argument('--ids-file', type=Path, help='file with one recipe id per line')
    ap.add_argument('--limit', type=int)
    ap.add_argument('--model', default=DEFAULT_MODEL)
    args = ap.parse_args()

    db = state.connect()
    exported = {r['id']: r for r in state.sync_recipes(db)}
    rows = db.execute(
        "SELECT * FROM recipes WHERE brief IS NULL AND status = 'pending' ORDER BY id").fetchall()
    ids = list(args.ids or [])
    if args.ids_file:
        ids += [line.strip() for line in args.ids_file.read_text().splitlines() if line.strip()]
    if ids:
        rows = [r for r in rows if r['id'] in ids]
    rows = rows[:args.limit]
    if not rows:
        print('Nothing to describe.')
        return

    from mlx_lm import load
    model, tokenizer = load(args.model)

    for i, r in enumerate(rows, 1):
        recipe = dict(r)
        extra = exported.get(r['id'], {})
        recipe.update({k: v for k, v in extra.items() if k not in recipe})
        brief = brief_for(model, tokenizer, recipe, extra)
        state.set_brief(db, r['id'], brief)
        print(f'[{i}/{len(rows)}] {r["id"]}: {brief}', flush=True)


if __name__ == '__main__':
    main()
