"""Progress of the banner-generation pipeline, kept in work/state.db.

Each recipe moves through these statuses:
  pending     no photo brief yet
  described   has a brief, waiting for images
  generated   has candidate images, waiting for review
  regenerate  reviewer asked for new candidates (optionally after editing the brief)
  approved    reviewer picked a candidate
  published   the picked candidate is in public/recipe-images
  reuse       duplicate of a recipe that already has a photo
"""

import json
import sqlite3
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
WORK = HERE / 'work'
DB_PATH = WORK / 'state.db'
RECIPES_JSON = WORK / 'recipes.json'

COLLECTIONS = {'add': 'Additional Recipes', 'osool': 'Osool El Tahy', 'ec': 'Egyptian Cooking'}

SCHEMA = """
CREATE TABLE IF NOT EXISTS recipes (
  id TEXT PRIMARY KEY,
  collection TEXT NOT NULL,
  title TEXT NOT NULL,
  title_en TEXT,
  category TEXT NOT NULL,
  brief TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  chosen INTEGER REFERENCES candidates(id),
  duplicate_of TEXT,
  updated_at REAL
);
CREATE TABLE IF NOT EXISTS candidates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recipe_id TEXT NOT NULL REFERENCES recipes(id),
  model TEXT NOT NULL,
  seed INTEGER NOT NULL,
  path TEXT NOT NULL,
  seconds REAL,
  created_at REAL NOT NULL
);
CREATE INDEX IF NOT EXISTS candidates_recipe ON candidates(recipe_id);
"""


def connect() -> sqlite3.Connection:
    WORK.mkdir(exist_ok=True)
    db = sqlite3.connect(DB_PATH, timeout=30, isolation_level=None)
    db.row_factory = sqlite3.Row
    db.execute('PRAGMA journal_mode=WAL')
    db.executescript(SCHEMA)
    columns = {row['name'] for row in db.execute('PRAGMA table_info(recipes)')}
    if 'pr' not in columns:
        db.execute('ALTER TABLE recipes ADD COLUMN pr TEXT')
    return db


def collection_of(recipe_id: str) -> str:
    return recipe_id.rsplit('-', 1)[0]


def load_recipes() -> list[dict]:
    return json.loads(RECIPES_JSON.read_text())


def sync_recipes(db: sqlite3.Connection) -> list[dict]:
    recipes = load_recipes()
    for r in recipes:
        db.execute(
            'INSERT OR IGNORE INTO recipes (id, collection, title, title_en, category, status, duplicate_of, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            (r['id'], collection_of(r['id']), r['title'], r.get('titleEn'), r['category'],
             'reuse' if r.get('duplicateOf') else 'pending', r.get('duplicateOf'), time.time()))
    return recipes


def set_brief(db: sqlite3.Connection, recipe_id: str, brief: str) -> None:
    db.execute(
        "UPDATE recipes SET brief = ?, updated_at = ?, status = CASE WHEN status = 'pending' THEN 'described' ELSE status END WHERE id = ?",
        (brief, time.time(), recipe_id))


def set_status(db: sqlite3.Connection, recipe_id: str, status: str, chosen: int | None = None) -> None:
    db.execute('UPDATE recipes SET status = ?, chosen = COALESCE(?, chosen), updated_at = ? WHERE id = ?',
               (status, chosen, time.time(), recipe_id))


def add_candidate(db: sqlite3.Connection, recipe_id: str, model: str, seed: int, path: Path, seconds: float) -> int:
    cur = db.execute(
        'INSERT INTO candidates (recipe_id, model, seed, path, seconds, created_at) VALUES (?, ?, ?, ?, ?, ?)',
        (recipe_id, model, seed, str(path.relative_to(WORK)), seconds, time.time()))
    return cur.lastrowid
