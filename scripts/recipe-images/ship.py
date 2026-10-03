"""Put published banners on the site: every BATCH images, commit them to a branch off
the latest main, push, open a pull request and merge it.

The work happens in a dedicated worktree (../fifirecipes-banners-pr) so the main
checkout, and whatever else is in progress there, is never touched.

    .venv-mflux/bin/python ship.py [--all]    # --all ships a final batch smaller than BATCH
"""

import argparse
import re
import shutil
import subprocess
import time

import state
from publish import STAGED

ROOT = state.HERE.parent.parent
WORKTREE = ROOT.parent / 'fifirecipes-banners-pr'
BATCH = 50
START, END = ('// Generated banners (scripts/recipe-images/ship.py)', '// End of generated banners')
ATTRIBUTION = '\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>'
PR_FOOTER = '\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)'


def run(*cmd: str, cwd=WORKTREE) -> str:
    return subprocess.run(cmd, cwd=cwd, check=True, capture_output=True, text=True).stdout.strip()


def update_registry(path, ids: list[str]) -> None:
    text = path.read_text()
    block = re.search(f'\\n *{re.escape(START)}\\n(.*?)\\n *{re.escape(END)}', text, re.S)
    existing = set(re.findall(r"'([\w-]+)'", block.group(1))) if block else set()
    all_ids = sorted(existing | set(ids))
    lines = ['  ' + ', '.join(f"'{x}'" for x in all_ids[i:i + 8]) + ','
             for i in range(0, len(all_ids), 8)]
    new_block = f'\n  {START}\n' + '\n'.join(lines) + f'\n  {END}'
    if block:
        text = text[:block.start()] + new_block + text[block.end():]
    else:
        anchor = "  ...idRange('bev', 1, 5)\n];"
        if anchor not in text:
            raise RuntimeError('recipeImages.ts changed shape; cannot find where to list generated banners')
        text = text.replace(anchor, "  ...idRange('bev', 1, 5)," + new_block + '\n];')
    path.write_text(text)


def ship_batch(db, ids: list[str]) -> str:
    run('git', 'fetch', 'origin', 'main', cwd=ROOT)
    if not WORKTREE.exists():
        run('git', 'worktree', 'add', '--detach', str(WORKTREE), 'origin/main', cwd=ROOT)
    branch = f'banners/{time.strftime("%Y%m%d-%H%M%S")}'
    run('git', 'reset', '--hard')
    run('git', 'clean', '-fd')
    run('git', 'checkout', '-B', branch, 'origin/main')

    for rid in ids:
        shutil.copy2(STAGED / f'{rid}.jpg', WORKTREE / 'public' / 'recipe-images' / f'{rid}.jpg')
    update_registry(WORKTREE / 'src' / 'data' / 'recipeImages.ts', ids)

    title = f'Add banner photos for {len(ids)} recipes ({ids[0]} to {ids[-1]})'
    run('git', 'add', 'public/recipe-images', 'src/data/recipeImages.ts')
    run('git', 'commit', '-m',
        title + '\n\nGenerated locally with FLUX.2 klein 9B (scripts/recipe-images).' + ATTRIBUTION)
    run('git', 'push', '-u', 'origin', branch)

    body = (f'Banner photos for {len(ids)} recipes that had none, generated locally with FLUX.2 '
            f'klein 9B using existing banners as style references, and listed in `src/data/recipeImages.ts`.'
            f'\n\nRecipes: ' + ', '.join(f'`{i}`' for i in ids) + PR_FOOTER)
    url = run('gh', 'pr', 'create', '--base', 'main', '--head', branch, '--title', title, '--body', body)
    run('gh', 'pr', 'merge', url, '--squash', '--delete-branch')
    run('git', 'checkout', '--detach', 'origin/main')
    run('git', 'branch', '-D', branch)
    db.executemany('UPDATE recipes SET pr = ? WHERE id = ?', [(url, rid) for rid in ids])
    return url


def ship(db, all_=False) -> None:
    while True:
        ids = [r['id'] for r in db.execute(
            "SELECT id FROM recipes WHERE status = 'published' AND pr IS NULL ORDER BY id")]
        if not ids or (len(ids) < BATCH and not all_):
            return
        try:
            url = ship_batch(db, ids[:BATCH])
            print(f'Merged {min(len(ids), BATCH)} banners: {url}', flush=True)
        except subprocess.CalledProcessError as e:
            print(f'Shipping failed, will retry later: {" ".join(e.cmd[:3])}: {e.stderr.strip()[:300]}',
                  flush=True)
            return


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--all', action='store_true')
    args = ap.parse_args()
    ship(state.connect(), args.all)


if __name__ == '__main__':
    main()
