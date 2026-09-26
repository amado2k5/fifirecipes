"""Step 4b: write a draft recipe for every new/variant dish with the local LLM.

Uses the video description, the on-screen text (ocr.json) and the Whisper
transcript (whisper.json) from media.py. Writes drafts.jsonl in the compact
authoring format of src/data/osoolElTahy/*.json, with the video id and the
second the cooking starts in place of the book page. Resumable.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from classify import CATEGORIES  # noqa: E402
from local_llm import ask_json  # noqa: E402

SYSTEM = f"""أنت محرر وصفات مصري محترف. تكتب وصفة طبق واحد بأسلوبك الخاص (لا تنسخ كلام المقدِّمة حرفيًا) اعتمادًا على
وصف فيديو ونص مكتوب على الشاشة وتفريغ صوتي آلي قد يحتوي أخطاء سماع (صحّحها من السياق، مثل "المرأة الفورية" = "المرقة الفورية").
اكتب بالعربية الفصحى البسيطة. أعد JSON فقط بهذا الشكل:
{{"title": "...", "category": "واحدة من: {"، ".join(CATEGORIES)}", "method": "...",
  "prep": "20 دقيقة" أو null, "cook": "..." أو null, "servings": "..." أو null, "difficulty": "easy" | "medium" | "master",
  "start": ثانية بداية التحضير في الفيديو (رقم),
  "ingredients": [["اسم المكوّن", "الكمية", "meat_poultry|seafood|vegetable|dairy_fat|grain_starch|spice_seasoning|sweet_fruit|liquid|other"]],
  "steps": ["خطوة" أو ["خطوة", "prep|cook|finish|alternative"]],
  "notes": "نصائح المقدِّمة المفيدة وطرق الحفظ أو التقديم البديلة" أو null,
  "confidence": "high" | "medium" | "low"}}
- الكميات من الوصف أو الشاشة أولًا، ثم من الكلام. إن لم تُذكر الكمية اكتب "حسب الرغبة".
- لا تخترع مكوّنات أو خطوات غير موجودة في المصادر. إن كانت المصادر ناقصة فاجعل confidence منخفضة.
- الخطوات الافتراضية phase = cook؛ اكتب phase فقط لغير ذلك.
- تجاهل الدعاية وطلبات الاشتراك."""


def transcript_text(folder: Path) -> str:
    path = folder / "whisper.json"
    if not path.exists():
        return ""
    return "\n".join(f"[{int(s['start'])}] {s['text']}" for s in json.loads(path.read_text()))


def screen_text(folder: Path) -> str:
    path = folder / "ocr.json"
    if not path.exists():
        return ""
    seen, lines = set(), []
    for row in json.loads(path.read_text()):
        if row["text"] not in seen:
            seen.add(row["text"])
            lines.append(f"[{int(row['t'])}] {row['text']}")
    return "\n".join(lines[:250])


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("data", type=Path)
    parser.add_argument("--limit", type=int)
    parser.add_argument("--only", nargs="*", help="dish keys to (re)draft")
    args = parser.parse_args()

    meta = {}
    for line in (args.data / "metadata.jsonl").read_text().splitlines():
        row = json.loads(line)
        if "error" not in row:
            meta[row["id"]] = row
    dishes = [json.loads(l) for l in (args.data / "match.jsonl").read_text().splitlines()]
    dishes = [d for d in dishes if d.get("label") in ("new", "variant", "unclear")]
    out_path = args.data / "drafts.jsonl"
    done = {json.loads(l)["key"] for l in out_path.read_text().splitlines()} if out_path.exists() else set()
    todo = [d for d in dishes if (d["key"] in args.only if args.only else d["key"] not in done)]
    todo = [d for d in todo if (args.data / "media" / d["videos"][0] / "whisper.json").exists()]
    if args.limit:
        todo = todo[:args.limit]
    print(f"{len(dishes)} new/variant dishes, {len(todo)} ready to draft", flush=True)

    with out_path.open("a") as out:
        for n, dish in enumerate(todo, 1):
            video = dish["videos"][0]
            folder = args.data / "media" / video
            m = meta.get(video, {})
            user = "\n\n".join(filter(None, [
                f"الطبق المطلوب: {dish['name']}" + (" (اسمه غير محدد في العنوان: سمِّه اسمًا دقيقًا من الفيديو، وإن كان الفيديو يعرض عدة أطباق مختلفة فاكتب أهمها فقط)" if dish.get("unclear") else ""),
                f"عنوان الفيديو: {m.get('title', '')}",
                f"وصف الفيديو:\n{(m.get('description') or '')[:2500]}" if m.get("description") else "",
                f"النص المكتوب على الشاشة (بالثواني):\n{screen_text(folder)}" if screen_text(folder) else "",
                f"التفريغ الصوتي (بالثواني):\n{transcript_text(folder)}",
            ]))
            try:
                recipe = ask_json(SYSTEM, user, max_tokens=2500)
            except ValueError as e:
                recipe = {"error": str(e)[:300]}
            row = {"key": dish["key"], "label": dish["label"], "site_match": dish.get("match"),
                   "video": video, "other_videos": dish["videos"][1:], **recipe}
            out.write(json.dumps(row, ensure_ascii=False) + "\n")
            out.flush()
            print(f"{n}/{len(todo)} {dish['name']}", flush=True)


if __name__ == "__main__":
    main()
