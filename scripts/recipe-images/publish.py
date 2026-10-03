"""Compress approved candidates into work/published/<id>.jpg, ready for ship.py to
commit to the site. Staging here keeps the main checkout untouched, so other work in
it never gets mixed into the banner pull requests.

    .venv-mflux/bin/python publish.py [--limit N]
"""

import argparse

from PIL import Image

import state

STAGED = state.WORK / 'published'
SIZE = (1024, 768)
QUALITY = 82


def compress(src, dest) -> int:
    with Image.open(src) as im:
        im = im.convert('RGB')
        if im.size != SIZE:
            im = im.resize(SIZE, Image.LANCZOS)
        im.save(dest, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
    return dest.stat().st_size


def publish_approved(db, limit: int | None = None) -> None:
    rows = db.execute(
        "SELECT r.id, c.path FROM recipes r JOIN candidates c ON c.id = r.chosen WHERE r.status = 'approved' ORDER BY r.id"
    ).fetchall()[:limit]
    if not rows:
        return
    STAGED.mkdir(exist_ok=True)
    total = 0
    for r in rows:
        total += compress(state.WORK / r['path'], STAGED / f"{r['id']}.jpg")
        state.set_status(db, r['id'], 'published')
    print(f'Published {len(rows)} banners, {total / len(rows) / 1024:.0f} KB average', flush=True)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--limit', type=int)
    args = ap.parse_args()
    publish_approved(state.connect(), args.limit)


if __name__ == '__main__':
    main()
