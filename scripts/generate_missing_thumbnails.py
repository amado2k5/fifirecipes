#!/usr/bin/env python3
"""Generate missing thumbnails for banner images.

This script scans the `public/recipe-images` directory for image files.
For each image, it checks whether a corresponding thumbnail exists in the
`public/recipe-images/thumbs` subdirectory. If the thumbnail is missing, the
script creates one using Pillow (PIL) and saves it with the same filename
inside the `thumbs` folder.

Usage:
    python generate_missing_thumbnails.py

The script assumes a thumbnail size of 200×200 pixels (preserving the
aspect ratio) which matches the existing thumbnails in the repository.
"""

import os
from pathlib import Path
from PIL import Image

# Configuration
BASE_DIR = Path(__file__).resolve().parents[1]  # repository root (scripts/..)
IMAGES_DIR = BASE_DIR / "public" / "recipe-images"
THUMBS_DIR = IMAGES_DIR / "thumbs"
THUMB_SIZE = (200, 200)  # max width/height

def ensure_thumb_dir():
    """Create the thumbnails directory if it does not exist."""
    THUMBS_DIR.mkdir(parents=True, exist_ok=True)

def generate_thumbnail(src_path: Path, dst_path: Path):
    """Create a thumbnail for *src_path* and write it to *dst_path*.

    The thumbnail preserves the original aspect ratio and fits within
    ``THUMB_SIZE``.
    """
    try:
        with Image.open(src_path) as im:
            im.thumbnail(THUMB_SIZE, Image.LANCZOS)
            # Save as JPEG to match existing thumbnails
            im.save(dst_path, format="JPEG")
            print(f"Created thumbnail: {dst_path.relative_to(BASE_DIR)}")
    except Exception as e:
        print(f"Error processing {src_path.name}: {e}")

def main():
    ensure_thumb_dir()
    for entry in IMAGES_DIR.iterdir():
        if entry.is_file() and entry.suffix.lower() in {".jpg", ".jpeg", ".png"}:
            thumb_path = THUMBS_DIR / entry.name
            if not thumb_path.exists():
                generate_thumbnail(entry, thumb_path)

if __name__ == "__main__":
    main()
