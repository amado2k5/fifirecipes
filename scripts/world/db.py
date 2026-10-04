"""world/state.db — resumable state for the world-cuisines pipeline."""
import sqlite3
from datetime import datetime, timezone

from worldutil import DB

SCHEMA = """
CREATE TABLE IF NOT EXISTS dishes (
  iso2 TEXT NOT NULL,
  dish TEXT NOT NULL,
  local_name TEXT,
  wiki_url TEXT,
  score REAL DEFAULT 0,
  rank INTEGER,
  status TEXT NOT NULL DEFAULT 'candidate',
  note TEXT,
  updated_at TEXT,
  PRIMARY KEY (iso2, dish)
);
CREATE TABLE IF NOT EXISTS urls (
  url TEXT PRIMARY KEY,
  iso2 TEXT,
  dish TEXT,
  domain TEXT,
  fetched INTEGER DEFAULT 0,
  jsonld INTEGER,
  status TEXT,
  note TEXT,
  updated_at TEXT
);
CREATE TABLE IF NOT EXISTS recipes (
  id TEXT PRIMARY KEY,
  iso2 TEXT,
  dish TEXT,
  path TEXT,
  status TEXT,
  updated_at TEXT
);
CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT);
"""


def conn() -> sqlite3.Connection:
    c = sqlite3.connect(DB)
    c.row_factory = sqlite3.Row
    c.executescript(SCHEMA)
    return c


def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec='seconds')


def upsert_dish(c: sqlite3.Connection, iso2: str, dish: str, **kw) -> None:
    cols = ['iso2', 'dish', *kw]
    c.execute(
        f"INSERT INTO dishes ({','.join(cols)}) VALUES ({','.join('?' * len(cols))}) "
        f"ON CONFLICT (iso2, dish) DO UPDATE SET "
        f"{','.join(f'{k}=excluded.{k}' for k in kw)}",
        [iso2, dish, *kw.values()])
