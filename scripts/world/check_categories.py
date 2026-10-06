#!/usr/bin/env python3
"""Fail when a recipe category has no translation in some language.

Recipe categories are stored in Arabic. On a non-Arabic page each one is shown
through the CATEGORY_NAMES* tables in src/utils/recipeLocalization.ts; a
category missing from a table shows up as raw Arabic in the filter chips
(e.g. "أطباق رئيسية" on the English site). Run via `npm run check:world`.
"""
import glob
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / 'src' / 'data'

# Categories defined by key in egyptianCooking.ts are already Arabic there.
TS_CATEGORY = re.compile(r"""^\s{4}"?category"?:\s*['"]([^'"]+)['"]""", re.M)


def recipe_categories() -> dict[str, str]:
    """Raw category -> one file it came from."""
    found: dict[str, str] = {}
    for path in (DATA / 'chapters').glob('*.ts'):
        for cat in TS_CATEGORY.findall(path.read_text(encoding='utf-8')):
            found.setdefault(cat, str(path.relative_to(ROOT)))
    for folder in ('osoolElTahy', 'fatmaAbuHaty', 'world'):
        for path in glob.glob(str(DATA / folder / '*.json')):
            try:
                entries = json.loads(Path(path).read_text(encoding='utf-8'))
            except json.JSONDecodeError:
                continue
            if not isinstance(entries, list):
                continue
            for entry in entries:
                if isinstance(entry, dict) and 'id' in entry and isinstance(entry.get('category'), str):
                    found.setdefault(entry['category'], str(Path(path).relative_to(ROOT)))
    # Ingredient categories (meat_poultry, …) share the field name; keep recipe ones only.
    return {c: f for c, f in found.items() if re.search(r'[؀-ۿ]', c)}


def main() -> int:
    source = (ROOT / 'src' / 'utils' / 'recipeLocalization.ts').read_text(encoding='utf-8')
    tables = {
        m.group(1): set(re.findall(r"'([^']+)':", m.group(2)))
        for m in re.finditer(r"const (CATEGORY_NAMES\w*): Record<string, string> = \{([\s\S]*?)\n\};", source)
    }
    if not tables:
        print('check_categories: no CATEGORY_NAMES tables found', file=sys.stderr)
        return 1
    problems = []
    for cat, origin in sorted(recipe_categories().items()):
        missing = sorted(name for name, keys in tables.items() if cat not in keys)
        if missing:
            problems.append(f"  '{cat}' (from {origin}) missing in: {', '.join(missing)}")
    if problems:
        print('Recipe categories without a translation (they would show in Arabic):', file=sys.stderr)
        print('\n'.join(problems), file=sys.stderr)
        print('Add them to every CATEGORY_NAMES* table in src/utils/recipeLocalization.ts.', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
