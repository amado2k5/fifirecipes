"""Shared paths/config for the world-cuisines pipeline."""
from pathlib import Path

import yaml

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
WORLD = REPO / 'world'
DB = WORLD / 'state.db'
CACHE = WORLD / 'cache'
LOGS = WORLD / 'logs'
SOURCES = WORLD / 'sources'
REJECTED = WORLD / 'rejected.jsonl'
REVIEW = WORLD / 'review.jsonl'
DUPLICATES = WORLD / 'duplicates.jsonl'
DISH_OWNER = WORLD / 'dish_owner.yaml'
SITES = WORLD / 'sites.yaml'
COUNTRIES = WORLD / 'countries.yaml'
UA = 'fifirecipes-research/1.0 (+https://fifi.cooking)'

for d in (WORLD, CACHE, LOGS, SOURCES):
    d.mkdir(parents=True, exist_ok=True)


def load_countries() -> dict[str, dict]:
    data = yaml.safe_load(COUNTRIES.read_text())
    return {c['iso2']: c for c in data['countries']}
