"""Step 3: compare every channel dish with the site's recipes.

1. Groups the channel's own repeats (same normalized dish name) into one dish,
   keeping the most-viewed video as its main source.
2. Shortlists site recipes by fuzzy title match and multilingual embeddings.
3. Asks the local LLM whether the dish is a duplicate, a variant, or new.

Writes match.jsonl (resumable) and review.tsv (sorted: new, variant, duplicate).
"""
from __future__ import annotations

import argparse
import json
import sys
from collections import defaultdict
from pathlib import Path

from rapidfuzz import fuzz, process

sys.path.insert(0, str(Path(__file__).parent))
from arabic import normalize  # noqa: E402
from local_llm import ask_json  # noqa: E402

EMBED_MODEL = "intfloat/multilingual-e5-large"
SHORTLIST = 8

SYSTEM = """أنت محرر في موقع وصفات مصري. تُعطى طبقًا من قناة يوتيوب وقائمة بأقرب وصفات موجودة في الموقع.
حدّد العلاقة وأعد JSON فقط:
{"label": "duplicate" | "variant" | "new", "match": "معرّف أقرب وصفة أو null", "reason": "جملة قصيرة"}
- duplicate: نفس الطبق (حتى لو اختلف الاسم قليلًا أو تفاصيل التتبيل).
- variant: طبق قريب جدًا لكنه مختلف فعلًا في المكوّن الأساسي أو الحشوة أو طريقة الطهي (مثل كفتة الأرز المسلوقة مقابل الكبيبة الغمراوي).
- new: لا يوجد في القائمة ما يشبهه."""


def load_jsonl(path: Path) -> list[dict]:
    return [json.loads(l) for l in path.read_text().splitlines() if l.strip()] if path.exists() else []


def group_dishes(data: Path) -> list[dict]:
    views = {}
    for line in (data / "channel_videos.tsv").read_text().splitlines():
        cols = line.split("\t")
        views[cols[0]] = int(cols[2]) if len(cols) > 2 and cols[2].isdigit() else 0
    groups: dict[str, dict] = {}
    for row in load_jsonl(data / "classify.jsonl"):
        for dish in row.get("dishes") or []:
            key = normalize(dish.get("name", ""))
            if not key:
                continue
            if dish.get("unclear"):
                key = f"{key} #{row['id']}"
            g = groups.setdefault(key, {"key": key, "name": dish["name"], "category": dish.get("category", ""),
                                        "method": dish.get("method", ""), "unclear": bool(dish.get("unclear")),
                                        "videos": []})
            g["videos"].append(row["id"])
    for g in groups.values():
        g["videos"] = sorted(set(g["videos"]), key=lambda v: -views.get(v, 0))
    return sorted(groups.values(), key=lambda g: g["key"])


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("data", type=Path)
    parser.add_argument("--limit", type=int)
    args = parser.parse_args()

    site = load_jsonl(args.data / "site_recipes.jsonl")
    site_keys = [normalize(r["title"]) for r in site]
    dishes = group_dishes(args.data)

    from sentence_transformers import SentenceTransformer
    embedder = SentenceTransformer(EMBED_MODEL)
    site_vecs = embedder.encode([f"passage: {r['title']} {r.get('titleEn', '')}" for r in site],
                                normalize_embeddings=True, batch_size=64)

    out_path = args.data / "match.jsonl"
    done = {r["key"] for r in load_jsonl(out_path)}
    todo = [d for d in dishes if d["key"] not in done]
    if args.limit:
        todo = todo[:args.limit]
    print(f"{len(dishes)} distinct dishes, {len(todo)} to match", flush=True)

    with out_path.open("a") as out:
        for n, dish in enumerate(todo, 1):
            fuzzy = process.extract(dish["key"], site_keys, scorer=fuzz.token_set_ratio, limit=SHORTLIST)
            vec = embedder.encode([f"query: {dish['name']}"], normalize_embeddings=True)[0]
            semantic = (site_vecs @ vec).argsort()[::-1][:SHORTLIST]
            picks = list(dict.fromkeys([i for _, _, i in fuzzy] + [int(i) for i in semantic]))
            best_fuzzy = fuzzy[0][1] if fuzzy else 0

            if dish["unclear"]:
                result = {"label": "unclear", "match": None, "reason": "dish not named in title; named after transcription"}
            elif best_fuzzy == 100 and len(dish["key"].split()) > 1 and site_keys[fuzzy[0][2]] == dish["key"]:
                result = {"label": "duplicate", "match": site[fuzzy[0][2]]["id"], "reason": "exact title"}
            else:
                listing = "\n".join(
                    f"- {site[i]['id']}: {site[i]['title']} — {'، '.join(site[i]['ingredients'][:10])}" for i in picks)
                user = (f"طبق القناة: {dish['name']} (التصنيف: {dish['category']}، الطريقة: {dish['method']})\n\n"
                        f"أقرب وصفات الموقع:\n{listing}")
                try:
                    result = ask_json(SYSTEM, user, max_tokens=200)
                except ValueError as e:
                    result = {"label": "error", "match": None, "reason": str(e)[:200]}
            match_id = result.get("match")
            match_title = next((r["title"] for r in site if r["id"] == match_id), "")
            row = {**dish, **result, "match_title": match_title, "fuzzy": best_fuzzy}
            out.write(json.dumps(row, ensure_ascii=False) + "\n")
            out.flush()
            if n % 25 == 0 or n == len(todo):
                print(f"{n}/{len(todo)}", flush=True)

    order = {"new": 0, "variant": 1, "unclear": 2, "error": 3, "duplicate": 4}
    rows = sorted(load_jsonl(out_path), key=lambda r: (order.get(r.get("label"), 2), r["category"], r["name"]))
    lines = ["label\tdish\tcategory\tclosest_site_recipe\tsite_id\treason\tvideo_count\tmain_video"]
    for r in rows:
        lines.append("\t".join([r.get("label", ""), r["name"], r["category"], r.get("match_title", ""),
                                str(r.get("match") or ""), (r.get("reason") or "").replace("\t", " "),
                                str(len(r["videos"])), f"https://www.youtube.com/watch?v={r['videos'][0]}"]))
    (args.data / "review.tsv").write_text("\n".join(lines) + "\n")
    counts = defaultdict(int)
    for r in rows:
        counts[r.get("label")] += 1
    print(dict(counts))


if __name__ == "__main__":
    main()
