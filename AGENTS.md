# Recipe banner image pipeline — findings (2026-10-03)

## Location
`scripts/recipe-images/` in the MAIN checkout
`/Users/ahmedabdelaal/Documents/GitHub/fifirecipes` (sibling of this
uber_eats clone, both under `~/Documents/GitHub/`). The whole dir is
gitignored there (`.gitignore` line 20) and NOT readable/writable by the
agent's file tools — use shell commands (cat/exec) to access it.

## State of the code
The `.py` sources were deleted; only compiled files remain:
- `generate.pyc`, `publish.pyc`, `ship.pyc`, `state.pyc`
- `__pycache__/*.cpython-312.pyc`
Bytecode is intact and readable with Python 3.12.9 at
`scripts/recipe-images/.venv-mflux/bin/python` via:
`f.read(16); dis.dis(marshal.load(f))`. Disassembly dumps were saved to
`/tmp/{generate,publish,ship,state}.dis` (may be gone after reboot).

## What each script does (recovered from bytecode)

### state.py — SQLite progress tracker (`work/state.db`)
- Table `recipes`: id, collection, title, title_en, category, brief, status,
  chosen, duplicate_of, updated_at, pr
- Statuses: `pending → described → generated → approved → published → shipped`
- `sync_recipes()` imports new recipes from `work/recipes.json`
- `set_brief`, `set_status`, `add_candidate` (model/seed/path/seconds)

### generate.py — image generator
- Generates `--variants` candidates per recipe into
  `work/candidates/<model>/<id>_<seed>.png` with a local mflux model
- Backends: `Flux2Edit`, `QwenEdit`, `ZImageTurbo` (image-edit models taking
  reference photos)
- Production model: `black-forest-labs/FLUX.2-klein-9B` (~100s/image, 4 steps,
  see `work/flux2-test.log`; HF snapshot cached in ~/.cache/huggingface)
- Prompt: "memorial cookbook of an Egyptian grandmother's home recipes" —
  one dish centered on a worn wooden table, folded beige linen cloth, warm
  window light; per-category text for meats/appetizers/oriental-sweets/
  puddings; negative prompt bans text/watermarks/people/hands/CGI
- `generate_with_retry()` waits out transient GPU-memory exhaustion
- Flags: `--variants`, `--force`, `--auto` (auto-approve + publish every N +
  PR/merge every M — last run used publish-10/merge-50 per `work/latest.txt`)
- Query: `SELECT * FROM recipes WHERE brief IS NOT NULL AND status IN (...)
  ORDER BY status = 'regenerate' DESC, id`

### publish.py — compressor
- Converts approved candidates → `work/published/<id>.jpg`
- Staging dir keeps the main checkout untouched

### ship.py — git shipper
- Works in dedicated worktree `../fifirecipes-banners-pr` (that's what that
  sibling folder is for)
- Every BATCH images: branch off latest main, commit, push, `gh pr`, merge
- `update_registry()` inserts sorted ids between markers in
  `RECIPES_WITH_IMAGES` in `src/data/recipeImages.ts`
- PR body mentions "Generated locally with FLUX.2 klein 9B"
- Commit trailer: Co-Authored-By Claude + Claude Code link

## Artifacts in work/
- `recipes.json` (952KB recipe catalog), `state.db` (811KB; -shm/-wal present)
- `published/` — 808 files `fah-NNN.jpg` (Fatma Abu Haty chapter)
- `candidates/flux2-klein-9b/` — candidate PNGs incl. `add-*`, `ec-*`,
  `osool-*` prefixes
- `latest.txt` — run journal; `describe.log` (179KB brief-writing log);
  `download-flux2.log`; `recipeImages.ts.bak`

## Related files
- `scripts/generate-thumbnails.ts` — sharp → 800px mozjpeg thumbs in
  `public/recipe-images/thumbs/` (`npm run thumbnails`)
- `scripts/generate_missing_thumbnails.py` — PIL 200px thumbs (in sibling
  clones: fifirecipes-banners-pr, -abuhaty, -clone-2)
- `transcripts/channel-fatma-abu-haty/image-prompts/gemini-prompt.md` —
  earlier MANUAL Gemini-chat workflow for the same fah-* images
- Envs: `.venv-mflux` (py3.12, mflux — production), `.venv`, `.venv-test`
  (py3.14, diffusers)
