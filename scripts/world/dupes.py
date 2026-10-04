"""Uniqueness gate: world dish vs every existing site recipe.

Stage 1 (deterministic): normalized-title match across ar title, titleEn and
all translated titles.
Stage 2 (embedding): multilingual-e5-large over 'title | titleEn', cosine
>= THRESH marks a suspect for the LLM judge (run separately when GPU free).
"""
import json
from functools import lru_cache
from pathlib import Path

import numpy as np

from textnorm import norm_any
from worldutil import WORLD, DUPLICATES

THRESH = 0.86
TITLES = WORLD / 'site_titles.json'


@lru_cache
def site_rows() -> list[dict]:
    data = json.loads(TITLES.read_text())
    rows = []
    for rid, r in data.items():
        forms = [r['title'], r.get('titleEn') or '', *r['translations']]
        rows.append({'id': rid, 'title': r['title'], 'titleEn': r.get('titleEn'),
                     'norm': {norm_any(f) for f in forms if f},
                     'text': f"{r['title']} | {r.get('titleEn') or ''}"})
    return rows


def title_match(dish: str, local: str | None = None) -> dict | None:
    """Exact normalized-title duplicate or None."""
    needles = {norm_any(dish)}
    if local:
        needles.add(norm_any(local))
    for row in site_rows():
        if needles & row['norm']:
            return row
    return None


_model = None
_site_embs = None


def _embedder():
    global _model, _site_embs
    if _model is None:
        from sentence_transformers import SentenceTransformer
        _model = SentenceTransformer('intfloat/multilingual-e5-large')
        rows = site_rows()
        _site_embs = _model.encode(
            ['passage: ' + r['text'] for r in rows],
            normalize_embeddings=True, batch_size=64,
            show_progress_bar=True)
    return _model, _site_embs


def embedding_suspects(dish: str, k: int = 5, thresh: float = THRESH) -> list[dict]:
    """Top-k site recipes by cosine similarity; >= thresh are suspects."""
    model, site_embs = _embedder()
    rows = site_rows()
    q = model.encode('query: ' + dish, normalize_embeddings=True)
    sims = site_embs @ q
    top = np.argsort(-sims)[:k]
    return [{'id': rows[i]['id'], 'title': rows[i]['title'],
             'titleEn': rows[i]['titleEn'], 'score': round(float(sims[i]), 3)}
            for i in top if sims[i] >= thresh]


def log_duplicate(dish: str, iso2: str, match: dict, stage: str) -> None:
    with DUPLICATES.open('a') as f:
        f.write(json.dumps({'dish': dish, 'iso2': iso2, 'match': match,
                            'stage': stage}, ensure_ascii=False,
                           default=sorted) + '\n')
