"""Check dish-naming results written by a Claude session and merge them.

  python scripts/recipe-videos/channel/check_naming.py <data>          # check every result file
  python scripts/recipe-videos/channel/check_naming.py <data> --merge  # check, then append to classify.jsonl

Each <data>/naming/batch_NNN.jsonl needs a result file result_NNN.jsonl with one
line per video (see NAMING.md). Plain Python, no dependencies.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

CATEGORIES = ["لحوم وطيور", "بحريات", "خضروات", "بقوليات", "محشوات", "نشويات", "شوربات وحساء", "سلطات",
              "معجنات", "أكلات شهية", "وجبات سريعة", "حلويات شرقية", "حلويات غربية", "حلويات خفيفة",
              "فطائر حلوة", "آيس كريم", "مشروبات", "خشاف"]
KINDS = {"recipe", "multi", "other"}


def check_result(batch: Path, result: Path) -> tuple[list[dict], list[str]]:
    expected = {json.loads(l)["id"]: json.loads(l)["title"] for l in batch.read_text().splitlines() if l.strip()}
    rows, problems = [], []
    if not result.exists():
        return [], [f"{result.name}: missing"]
    for n, line in enumerate(result.read_text().splitlines(), 1):
        if not line.strip():
            continue
        try:
            row = json.loads(line)
        except json.JSONDecodeError as e:
            problems.append(f"{result.name}:{n}: not JSON ({e})")
            continue
        vid = row.get("id")
        if vid not in expected:
            problems.append(f"{result.name}:{n}: unknown id {vid!r}")
            continue
        if row.get("kind") not in KINDS:
            problems.append(f"{result.name}:{n}: kind must be one of {sorted(KINDS)}")
        dishes = row.get("dishes")
        if not isinstance(dishes, list) or (row.get("kind") == "other") != (dishes == []):
            problems.append(f"{result.name}:{n}: dishes must be a list, empty only when kind is other")
            dishes = []
        for d in dishes:
            if not isinstance(d, dict) or not d.get("name"):
                problems.append(f"{result.name}:{n}: every dish needs a name")
            elif d.get("category") not in CATEGORIES:
                problems.append(f"{result.name}:{n}: category {d.get('category')!r} is not in the list")
        rows.append({"id": vid, "title": expected[vid], "has_metadata": True, "kind": row.get("kind"),
                     "dishes": dishes, "named_by": "claude"})
    missing = set(expected) - {r["id"] for r in rows}
    if missing:
        problems.append(f"{result.name}: {len(missing)} videos missing, e.g. {sorted(missing)[:3]}")
    if len(rows) != len({r["id"] for r in rows}):
        problems.append(f"{result.name}: duplicate ids")
    return rows, problems


def main() -> None:
    data = Path(sys.argv[1])
    folder = data / "naming"
    all_rows, all_problems = [], []
    for batch in sorted(folder.glob("batch_*.jsonl")):
        rows, problems = check_result(batch, folder / batch.name.replace("batch_", "result_"))
        all_rows += rows
        all_problems += problems
    for p in all_problems:
        print(p)
    print(f"{len(all_rows)} videos checked, {len(all_problems)} problems")
    if "--merge" in sys.argv:
        if all_problems:
            sys.exit("not merging: fix the problems first")
        done = {json.loads(l)["id"] for l in (data / "classify.jsonl").read_text().splitlines()}
        new = [r for r in all_rows if r["id"] not in done]
        with (data / "classify.jsonl").open("a") as f:
            for r in new:
                f.write(json.dumps(r, ensure_ascii=False) + "\n")
        print(f"merged {len(new)} videos into classify.jsonl")
    sys.exit(1 if all_problems else 0)


if __name__ == "__main__":
    main()
