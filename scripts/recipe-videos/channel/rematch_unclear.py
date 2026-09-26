"""Step 5: match the dishes whose titles did not name them, now that draft.py has
named them from the video. Updates their label in drafts.jsonl in place
(unclear -> duplicate / variant / new) and records the closest site recipe.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from rapidfuzz import fuzz, process

sys.path.insert(0, str(Path(__file__).parent))
from arabic import normalize  # noqa: E402
from local_llm import ask_json  # noqa: E402
from match import EMBED_MODEL, SHORTLIST, SYSTEM, load_jsonl  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("data", type=Path)
    args = parser.parse_args()

    site = load_jsonl(args.data / "site_recipes.jsonl")
    site_keys = [normalize(r["title"]) for r in site]
    drafts_path = args.data / "drafts.jsonl"
    drafts = load_jsonl(drafts_path)
    todo = [d for d in drafts if d.get("label") == "unclear" and d.get("title")]
    print(f"{len(todo)} unclear drafts to match", flush=True)
    if not todo:
        return

    from sentence_transformers import SentenceTransformer
    embedder = SentenceTransformer(EMBED_MODEL)
    site_vecs = embedder.encode([f"passage: {r['title']} {r.get('titleEn', '')}" for r in site],
                                normalize_embeddings=True, batch_size=64)

    for draft in todo:
        fuzzy = process.extract(normalize(draft["title"]), site_keys, scorer=fuzz.token_set_ratio, limit=SHORTLIST)
        vec = embedder.encode([f"query: {draft['title']}"], normalize_embeddings=True)[0]
        picks = list(dict.fromkeys([i for _, _, i in fuzzy] + [int(i) for i in (site_vecs @ vec).argsort()[::-1][:SHORTLIST]]))
        listing = "\n".join(f"- {site[i]['id']}: {site[i]['title']} — {'، '.join(site[i]['ingredients'][:10])}" for i in picks)
        ingredients = "، ".join(i[0] for i in draft.get("ingredients") or [])
        try:
            result = ask_json(SYSTEM, f"طبق القناة: {draft['title']} (المكوّنات: {ingredients})\n\nأقرب وصفات الموقع:\n{listing}",
                              max_tokens=200)
        except ValueError as e:
            result = {"label": "error", "match": None, "reason": str(e)[:200]}
        draft["label"], draft["site_match"], draft["match_reason"] = result.get("label"), result.get("match"), result.get("reason")
        print(f"{draft['title']}: {draft['label']} {draft['site_match'] or ''}", flush=True)

    drafts_path.write_text("".join(json.dumps(d, ensure_ascii=False) + "\n" for d in drafts))


if __name__ == "__main__":
    main()
