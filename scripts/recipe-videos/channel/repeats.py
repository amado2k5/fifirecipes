"""Report dishes the channel covers in more than one video.

Groups classify.jsonl dishes by normalized name (as match.py does) and also
merges near-identical names (fuzzy ratio >= 90). Writes repeats.tsv: one row
per repeated dish with its video count, the most-viewed video (the one the
pipeline keeps) and the other videos.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from rapidfuzz import fuzz

sys.path.insert(0, str(Path(__file__).parent))
from arabic import normalize  # noqa: E402

data = Path(sys.argv[1])
views, titles = {}, {}
for line in (data / "channel_videos.tsv").read_text().splitlines():
    cols = line.split("\t")
    if len(cols) > 3:
        views[cols[0]] = int(cols[2]) if cols[2].isdigit() else 0

groups: dict[str, dict] = {}
for line in (data / "classify.jsonl").read_text().splitlines():
    row = json.loads(line)
    titles[row["id"]] = row["title"]
    for dish in row.get("dishes") or []:
        if dish.get("unclear"):
            continue
        key = normalize(dish.get("name", ""))
        if key:
            g = groups.setdefault(key, {"name": dish["name"], "videos": set()})
            g["videos"].add(row["id"])

# Merge near-identical names, largest groups first.
keys = sorted(groups, key=lambda k: -len(groups[k]["videos"]))
merged: list[dict] = []
for key in keys:
    for m in merged:
        if fuzz.ratio(key, m["key"]) >= 90:
            m["videos"] |= groups[key]["videos"]
            m["names"].add(groups[key]["name"])
            break
    else:
        merged.append({"key": key, "names": {groups[key]["name"]}, "videos": set(groups[key]["videos"])})

repeats = sorted((m for m in merged if len(m["videos"]) > 1), key=lambda m: -len(m["videos"]))
lines = ["videos\tdish\tother_names\tkept_video\tkept_title\tother_videos"]
for m in repeats:
    vids = sorted(m["videos"], key=lambda v: -views.get(v, 0))
    names = sorted(m["names"], key=len)
    lines.append("\t".join([str(len(vids)), names[0], " / ".join(names[1:]), vids[0], titles.get(vids[0], "")[:80],
                            " ".join(vids[1:])]))
(data / "repeats.tsv").write_text("\n".join(lines) + "\n")
total = sum(len(m["videos"]) for m in repeats)
print(f"{len(merged)} distinct dishes; {len(repeats)} appear in 2+ videos, covering {total} video-dish pairs "
      f"({total - len(repeats)} are repeats)")
for m in repeats[:40]:
    print(f"{len(m['videos']):3d}  {sorted(m['names'], key=len)[0]}")
