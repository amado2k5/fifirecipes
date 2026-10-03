"""Generate candidate banner photos for recipes that have a brief, with a local mflux model.

Each recipe gets --variants candidates (different seeds) in work/candidates/<model>/.
Recipes marked 'regenerate' in the review dashboard get fresh seeds. The model stays
loaded for the whole run; stop with Ctrl-C at any time and rerun to continue.

    .venv-mflux/bin/python generate.py --model qwen-edit [--ids ...] [--ids-file FILE] [--limit N] [--variants 2]
"""

import argparse
import json
import random
import time
from pathlib import Path

import publish
import ship
import state

ROOT = state.HERE.parent.parent
PUBLISH_EVERY = 10
REFS = ROOT / 'public' / 'recipe-images'
OUT = state.WORK / 'candidates'
WIDTH, HEIGHT = 1024, 768

SECTIONS = {
    'لحوم وطيور': ('meat and poultry dishes: stews, roasts, trays, kofta and grilled meats', ['meat-03', 'meat-20']),
    'بحريات': ('fish and seafood dishes', ['sea-02', 'sea-08']),
    'شوربات وحساء': ('soups and broths', ['soup-02', 'soup-04']),
    'سلطات': ('salads, dips, dressings and pickles', ['salad-08', 'salad-03']),
    'أكلات شهية': ('appetizers, savory bites, egg dishes and light meals', ['savory-08', 'salad-08']),
    'خضروات': ('vegetable dishes, stews and bakes', ['veg-05', 'veg-20']),
    'بقوليات': ('beans, lentils and legume dishes', ['leg-04', 'leg-02']),
    'نشويات': ('rice, pasta and grain dishes', ['pasta-15', 'pasta-05']),
    'محشوات': ('stuffed vegetables and vine leaves', ['stuff-03', 'stuff-08']),
    'معجنات': ('savory bakes, breads, pies and pastries', ['bake-03', 'bake-10']),
    'وجبات سريعة': ('sandwiches and quick meals', ['quick-02', 'savory-02']),
    'حلويات شرقية': ('oriental sweets and syrup-soaked desserts', ['des-10', 'bake-10']),
    'حلويات غربية': ('cakes, creams and western-style desserts', ['des-90', 'des-10']),
    'حلويات خفيفة': ('light desserts, puddings, jams and sweet snacks', ['des-10', 'des-90']),
    'فطائر حلوة': ('sweet pies and tarts', ['bake-03', 'des-10']),
    'مشروبات': ('drinks, juices and hot beverages', ['bev-02', 'bev-04']),
}
DEFAULT_SECTION = ('home-cooked Egyptian dishes', ['meat-03', 'veg-05'])

RULES = """Rules:
- Home-cooked Egyptian food as a grandmother makes it for her family. Real home cooking, not restaurant or bakery plating.
- Served in home dishware: a round aluminum baking tray, a Pyrex dish, a frying pan, a pot, a plain ceramic plate or bowl, or small glass cups.
- The dish is centred and fills about 60% of the frame, with empty space on all sides so it can be cropped into a wide thumbnail.
- Landscape 4:3. Photorealistic, true-to-life colours, shallow depth of field. Steam only when the dish is served hot.
- The wooden table must have natural, sharp wood grain. No smearing, blur, or colour streaks anywhere in the frame.
- NEVER include text, labels, watermarks, logos, brand names, people, or hands.
- Show only the ingredients listed, plus at most one simple extra (Egyptian baladi bread, lemon wedges, or a glass of Egyptian tea)."""

SCENE_RULES = """Rules:
- Exactly one dish, alone in the middle of an otherwise bare wooden table. The only other thing in the frame is a folded linen cloth at the back edge of the table.
- Home-cooked Egyptian food as a grandmother makes it for her family, in her own plain home dishware. Real home cooking, not restaurant plating.
- The dish is centred and fills about 60% of the frame, with bare table visible on all sides.
- Photorealistic, true-to-life colours, shallow depth of field. Steam only when the dish is served hot; cold dishes and drinks have no steam.
- Natural, sharp wood grain. No smearing, blur, or colour streaks anywhere in the frame.
- No text, labels, logos, people or hands."""

STYLE_TEXT = 'The photo is taken on a worn, rustic wooden kitchen table with deep, sharp natural wood grain, a folded beige linen cloth at the back edge. Warm, soft daylight comes from a bright window at the back left, softly out of focus. Camera at a three-quarter overhead angle, about 45 degrees. Warm, natural colour grading with gentle shadows.'

NEGATIVE = 'text, letters, watermark, logo, label, people, hands, fingers, restaurant plating, blur, smear, colour streaks, cartoon, illustration, CGI'


def build_prompt(brief: str, category: str, with_refs: bool, section: str | None = None) -> str:
    section = section or SECTIONS.get(category, DEFAULT_SECTION)[0]
    if with_refs:
        intro = ("You are a food photographer shooting a memorial cookbook of an Egyptian grandmother's home recipes. "
                 "The reference photos are from the same cookbook. Match their style exactly: the same worn wooden "
                 "table, warm side window light, camera angle, and colour grading. Replace the food and dishware "
                 "completely with the new dish below; do not copy the food, bread, glasses or any other objects from "
                 "the references. This part of the cookbook is "
                 f'{section}.')
    else:
        intro = ("A photograph for a memorial cookbook of an Egyptian grandmother's home recipes, from the part of "
                 f'the cookbook with {section}. {STYLE_TEXT}')
    return f'{intro}\n{SCENE_RULES}\n\nDish: {brief}'


class Backend:
    name: str
    uses_refs: bool

    def generate(self, prompt: str, refs: list[Path], seed: int, out: Path) -> None:
        raise NotImplementedError


class QwenEdit(Backend):
    name, uses_refs = 'qwen-edit', True

    def __init__(self, quantize: int, steps: int):
        from mflux.models.qwen.variants.edit.qwen_image_edit import QwenImageEdit
        self.model = QwenImageEdit(quantize=quantize)
        self.steps = steps

    def generate(self, prompt, refs, seed, out):
        image = self.model.generate_image(
            seed=seed,
            prompt=prompt,
            negative_prompt=NEGATIVE,
            width=WIDTH,
            height=HEIGHT,
            guidance=2.5,
            image_path=str(refs[0]),
            image_paths=[str(p) for p in refs],
            num_inference_steps=self.steps,
            scheduler='linear')
        image.save(path=out, export_json_metadata=False)


class Flux2Edit(Backend):
    name, uses_refs = 'flux2-klein-9b', True

    def __init__(self, quantize: int, steps: int):
        from mflux.models.common.resolution.config_resolution import ConfigResolution
        from mflux.models.flux2.variants import Flux2KleinEdit
        config = ConfigResolution.resolve_restricted('flux2-klein-9b', 'flux2-klein-9b')
        self.model = Flux2KleinEdit(model_config=config, quantize=quantize)
        self.steps = steps

    def generate(self, prompt, refs, seed, out):
        image = self.model.generate_image(
            seed=seed,
            prompt=prompt,
            width=WIDTH,
            height=HEIGHT,
            guidance=1.0,
            image_paths=refs,
            num_inference_steps=self.steps,
            scheduler='flow_match_euler_discrete')
        image.save(path=out, export_json_metadata=False)


class ZImageTurbo(Backend):
    name, uses_refs = 'z-image-turbo', False

    def __init__(self, quantize: int, steps: int):
        from mflux.models.common.resolution.config_resolution import ConfigResolution
        from mflux.models.z_image.variants.z_image import ZImage
        config = ConfigResolution.resolve_restricted('z-image-turbo', 'z-image-turbo')
        self.model = ZImage(model_config=config, quantize=quantize)
        self.steps = steps

    def generate(self, prompt, refs, seed, out):
        image = self.model.generate_image(
            seed=seed,
            prompt=prompt,
            width=WIDTH,
            height=HEIGHT,
            guidance=0.0,
            image_path=None,
            num_inference_steps=self.steps,
            image_strength=None,
            scheduler='linear',
            negative_prompt=None)
        image.save(path=out, export_json_metadata=False)


BACKENDS = {'qwen-edit': (QwenEdit, 20), 'flux2-klein-9b': (Flux2Edit, 4), 'z-image-turbo': (ZImageTurbo, 9)}


def generate_with_retry(backend: Backend, prompt: str, refs: list[Path], seed: int, out: Path, attempts: int = 10) -> None:
    import mlx.core as mx
    for attempt in range(attempts):
        try:
            backend.generate(prompt, refs, seed, out)
            return
        except RuntimeError as e:
            if 'Insufficient Memory' not in str(e) or attempt == attempts - 1:
                raise
            mx.clear_cache()
            print(f'GPU out of memory, retrying in 60 s ({attempt + 1}/{attempts})', flush=True)
            time.sleep(60)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--model', choices=BACKENDS, required=True)
    ap.add_argument('--ids', nargs='*')
    ap.add_argument('--ids-file', type=Path, help='file with one recipe id per line')
    ap.add_argument('--limit', type=int)
    ap.add_argument('--variants', type=int, default=2)
    ap.add_argument('--steps', type=int)
    ap.add_argument('--quantize', type=int, default=8)
    ap.add_argument('--force', action='store_true', help='generate even if the recipe already has candidates')
    ap.add_argument('--auto-publish', action='store_true',
                    help='approve each new image without review, publish every %d recipes, and merge a pull request every %d banners' % (PUBLISH_EVERY, ship.BATCH))
    args = ap.parse_args()

    db = state.connect()
    statuses = ('described', 'regenerate', 'generated') if args.force else ('described', 'regenerate')
    rows = db.execute(
        f"SELECT * FROM recipes WHERE brief IS NOT NULL AND status IN ({','.join('?' * len(statuses))}) ORDER BY status = 'regenerate' DESC, id",
        statuses).fetchall()
    ids = list(args.ids or [])
    if args.ids_file:
        ids += [line.strip() for line in args.ids_file.read_text().splitlines() if line.strip()]
    if ids:
        rows = [r for r in rows if r['id'] in ids]
    rows = rows[:args.limit]
    if not rows:
        print('Nothing to generate.')
        return

    # Per-recipe prompt overrides exported into work/recipes.json (world cuisines
    # set a cuisine section line and style references there).
    overrides = {r['id']: r for r in state.load_recipes()} if state.RECIPES_JSON.exists() else {}

    cls, default_steps = BACKENDS[args.model]
    print(f'Loading {args.model}…', flush=True)
    backend = cls(args.quantize, args.steps or default_steps)
    out_dir = OUT / backend.name
    out_dir.mkdir(parents=True, exist_ok=True)

    for i, r in enumerate(rows, 1):
        extra = overrides.get(r['id'], {})
        section, ref_ids = SECTIONS.get(r['category'], (extra.get('section') or DEFAULT_SECTION[0],
                                                      extra.get('refs') or DEFAULT_SECTION[1]))
        refs = [REFS / f'{rid}.jpg' for rid in ref_ids]
        prompt = build_prompt(r['brief'], r['category'], backend.uses_refs, section)
        for _ in range(args.variants):
            seed = random.randrange(1, 2**31)
            out = out_dir / f"{r['id']}_{seed}.png"
            t0 = time.time()
            generate_with_retry(backend, prompt, refs, seed, out)
            candidate = state.add_candidate(db, r['id'], backend.name, seed, out, time.time() - t0)
            print(f"[{i}/{len(rows)}] {r['id']} seed {seed}: {time.time() - t0:.0f}s", flush=True)

        if args.auto_publish:
            state.set_status(db, r['id'], 'approved', chosen=candidate)
            if i % PUBLISH_EVERY == 0 or i == len(rows):
                publish.publish_approved(db)
                ship.ship(db, all_=i == len(rows))
        else:
            state.set_status(db, r['id'], 'generated')


if __name__ == '__main__':
    main()
