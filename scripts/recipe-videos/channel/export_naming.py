"""Export the videos that still need dish names as small batch files, so any
Claude session (for example one in the cloud, working from the branch) can do
the naming step without the local model.

Writes <data>/naming/batch_NNN.jsonl, 100 videos per file, each line:
  {"id", "title", "chapters", "description"}
Only videos with fetched metadata and no line in classify.jsonl are exported.
See <data>/naming/NAMING.md for the instructions and check_naming.py to merge.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

BATCH = 100

data = Path(sys.argv[1])
done = set()
if (data / "classify.jsonl").exists():
    done = {json.loads(l)["id"] for l in (data / "classify.jsonl").read_text().splitlines()}
rows, seen = [], set()
for line in (data / "metadata.jsonl").read_text().splitlines():
    r = json.loads(line)
    if "error" in r or r["id"] in done or r["id"] in seen:
        continue
    seen.add(r["id"])
    rows.append({"id": r["id"], "title": r["title"],
                 "chapters": [c["title"] for c in (r.get("chapters") or [])],
                 "description": (r.get("description") or "")[:900]})

out = data / "naming"
out.mkdir(exist_ok=True)
for old in out.glob("batch_*.jsonl"):
    old.unlink()
for n in range(0, len(rows), BATCH):
    path = out / f"batch_{n // BATCH + 1:03d}.jsonl"
    path.write_text("".join(json.dumps(r, ensure_ascii=False) + "\n" for r in rows[n:n + BATCH]))
print(f"{len(rows)} videos in {(len(rows) + BATCH - 1) // BATCH} batches")
