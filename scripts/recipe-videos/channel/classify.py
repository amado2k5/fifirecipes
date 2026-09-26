"""Step 2: name the dishes in every channel video with the local LLM.

Reads the channel listing (all videos) and metadata.jsonl (Arabic titles and
descriptions, where fetched). Writes classify.jsonl, one line per video.
Resumable: videos already classified are skipped. Re-run after more metadata
arrives with --refresh-metadata to redo videos that were classified from the
listing title alone.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import time
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from local_llm import ask_json  # noqa: E402

CATEGORIES = ["لحوم وطيور", "بحريات", "خضروات", "بقوليات", "محشوات", "نشويات", "شوربات وحساء", "سلطات",
              "معجنات", "أكلات شهية", "وجبات سريعة", "حلويات شرقية", "حلويات غربية", "حلويات خفيفة",
              "فطائر حلوة", "آيس كريم", "مشروبات", "خشاف"]

SYSTEM = f"""أنت محرر وصفات مصري. تقرأ عنوان فيديو طبخ ووصفه وتستخرج الأطباق التي يُحضّرها الفيديو فعلًا.
أعد كائن JSON فقط بهذا الشكل:
{{"kind": "recipe" | "multi" | "other",
  "dishes": [{{"name": "اسم الطبق بالعربية المختصرة الواضحة كما يُكتب في كتاب طبخ", "category": "...", "method": "طريقة الطهي في كلمة أو كلمتين"}}]}}
- recipe: وصفة واحدة. multi: أكثر من وصفة كاملة في الفيديو. other: ليس وصفة (مدونة، حديث، تجربة منتج، تجميعة فيديوهات قديمة).
- اسم الطبق بدون عبارات دعائية مثل "سر" أو "أسهل طريقة" أو "على أصولها"، واذكر النوع المميّز إن وُجد (مثل "كفتة الأرز" أو "بسبوسة بالقشطة").
- الأطباق الجانبية الكاملة المذكورة في العنوان (مثل الأرز أو السلطة أو الصوص) أطباق مستقلة.
- category واحدة من: {"، ".join(CATEGORIES)}.
- إن كان العنوان بالإنجليزية فاكتب اسم الطبق بالعربية.
- لا تخمّن أبدًا: إذا لم يُسمِّ العنوان أو الوصف الطبق صراحةً (مثل "كيكة الطفولة" أو "3 أفكار للانش بوكس" أو "أربع حشوات مختلفة") فاكتب أدق اسم عام مذكور (مثل "كيكة" أو "جلاش رول") وأضف "unclear": true للطبق، ولا تخترع حشوات أو نكهات غير مذكورة.
- الفيديو الذي يعرض أفكارًا أو وصفات متعددة هو multi وليس other.
- category يجب أن تكون حرفيًا واحدة من القائمة أعلاه، ولا تستخدم تصنيفًا غيرها.
- إذا كان other فاجعل dishes قائمة فارغة."""


def load_videos(data: Path) -> list[dict]:
    meta = {}
    for line in (data / "metadata.jsonl").read_text().splitlines():
        row = json.loads(line)
        if "error" not in row:
            meta[row["id"]] = row
    videos = []
    for line in (data / "channel_videos.tsv").read_text().splitlines():
        cols = line.split("\t")
        if not re.fullmatch(r"[A-Za-z0-9_-]{11}", cols[0]):  # titles can contain line breaks
            continue
        m = meta.get(cols[0])
        videos.append({
            "id": cols[0],
            "title": m["title"] if m else (cols[3] if len(cols) > 3 else ""),
            "description": (m or {}).get("description") or "",
            "chapters": [c["title"] for c in ((m or {}).get("chapters") or [])],
            "has_metadata": bool(m),
        })
    return videos


def prompt_for(video: dict) -> str:
    parts = [f"العنوان: {video['title']}"]
    if video["chapters"]:
        parts.append("الفصول: " + " / ".join(video["chapters"]))
    if video["description"]:
        parts.append("الوصف (مقتطف):\n" + video["description"][:900])
    return "\n".join(parts)


def other_classify_running() -> bool:
    pids = subprocess.run(["pgrep", "-f", "python.*channel/classify.py"], capture_output=True, text=True).stdout.split()
    return any(int(p) not in (os.getpid(), os.getppid()) for p in pids)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("data", type=Path)
    parser.add_argument("--limit", type=int)
    parser.add_argument("--refresh-metadata", action="store_true")
    parser.add_argument("--only-with-metadata", action="store_true",
                        help="skip videos whose metadata has not been fetched yet")
    args = parser.parse_args()

    # Naming is paused while this file exists (the pipeline waits here).
    while (args.data / "PAUSE_CLASSIFY").exists():
        print("paused: PAUSE_CLASSIFY exists; waiting", flush=True)
        time.sleep(300)

    # The translation job's local model and this one do not fit in GPU memory together.
    while subprocess.run(["pgrep", "-f", "mlx_translate.py"], capture_output=True).returncode == 0:
        print("mlx_translate.py is running; waiting", flush=True)
        time.sleep(300)

    # Only one copy may run: each loads a 41 GB model and appends to the same file.
    while other_classify_running():
        print("another classify.py is running; waiting", flush=True)
        time.sleep(300)

    out_path = args.data / "classify.jsonl"
    done = {}
    if out_path.exists():
        for line in out_path.read_text().splitlines():
            row = json.loads(line)
            done[row["id"]] = row
    videos = load_videos(args.data)
    todo = [v for v in videos if v["id"] not in done
            or (args.refresh_metadata and v["has_metadata"] and not done[v["id"]]["has_metadata"])]
    if args.only_with_metadata:
        todo = [v for v in todo if v["has_metadata"]]
    if args.limit:
        todo = todo[:args.limit]
    print(f"{len(videos)} videos, {len(todo)} to classify", flush=True)

    with out_path.open("a") as out:
        for n, video in enumerate(todo, 1):
            try:
                result = ask_json(SYSTEM, prompt_for(video), max_tokens=400)
            except ValueError as e:
                result = {"kind": "error", "dishes": [], "error": str(e)}
            for dish in result.get("dishes") or []:
                if dish.get("category") not in CATEGORIES:
                    dish["category_raw"], dish["category"] = dish.get("category"), ""
            row = {"id": video["id"], "title": video["title"], "has_metadata": video["has_metadata"], **result}
            out.write(json.dumps(row, ensure_ascii=False) + "\n")
            out.flush()
            if n % 25 == 0 or n == len(todo):
                print(f"{n}/{len(todo)}", flush=True)


if __name__ == "__main__":
    main()
