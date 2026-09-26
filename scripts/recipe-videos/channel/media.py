"""Step 4a: download each video and read it locally.

For every video id given (or the main video of every new/variant dish in
match.jsonl), writes into <data>/media/<id>/:
  audio.m4a          the soundtrack
  whisper.json       Whisper large-v3 segments (Arabic)
  ocr.json           on-screen text read from a frame every --every seconds
The video file itself is deleted after OCR. The first error from YouTube stops
the run (exit code 2) instead of retrying. Finished steps are skipped, so the
script can be stopped and re-run.
"""
from __future__ import annotations

import argparse
import json
import os
import random
import subprocess
import sys
import tempfile
import time
from pathlib import Path

import yt_dlp

# Set YTDLP_BROWSER=chrome to send requests as the YouTube account signed in
# to that browser, which gets past YouTube's "confirm you're not a bot" check.
BROWSER_COOKIES = {"cookiesfrombrowser": (os.environ["YTDLP_BROWSER"],)} if os.environ.get("YTDLP_BROWSER") else {}

WHISPER_MODEL = "mlx-community/whisper-large-v3-mlx"


def download(video_id: str, folder: Path, delay: float) -> Path:
    existing = list(folder.glob("video.*"))
    if existing:
        return existing[0]
    opts = {
        "quiet": True, "no_warnings": True, "js_runtimes": {"node": {}}, **BROWSER_COOKIES,
        "format": "bv*[height<=480]+ba/b[height<=480]/b",
        "merge_output_format": "mp4",
        "sleep_interval_requests": 5,
        "ratelimit": 2_000_000,  # bytes per second
        "outtmpl": str(folder / "video.%(ext)s"),
    }
    time.sleep(random.uniform(delay, delay * 1.8))
    try:
        with yt_dlp.YoutubeDL(opts) as ydl:
            ydl.download([f"https://www.youtube.com/watch?v={video_id}"])
    except Exception as e:  # noqa: BLE001 - any YouTube error stops the run: no retries
        print(f"STOPPED on YouTube error at {video_id}: {e}", flush=True)
        sys.exit(2)
    return next(folder.glob("video.*"))


def extract_audio(video: Path, folder: Path) -> Path:
    audio = folder / "audio.m4a"
    if not audio.exists():
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", str(video), "-vn", "-c:a", "copy", str(audio)],
                       check=True)
    return audio


def transcribe(audio: Path, folder: Path) -> None:
    out = folder / "whisper.json"
    if out.exists():
        return
    import mlx_whisper
    result = mlx_whisper.transcribe(
        str(audio), path_or_hf_repo=WHISPER_MODEL, language="ar",
        condition_on_previous_text=False, word_timestamps=True, hallucination_silence_threshold=2,
    )
    segments = [{"start": round(s["start"], 1), "end": round(s["end"], 1), "text": s["text"].strip()}
                for s in result["segments"]]
    out.write_text(json.dumps(segments, ensure_ascii=False, indent=0))


def read_screen(video: Path, folder: Path, every: float) -> None:
    out = folder / "ocr.json"
    if out.exists():
        return
    from ocrmac import ocrmac
    lines, last = [], set()
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(["ffmpeg", "-loglevel", "error", "-i", str(video), "-vf", f"fps=1/{every}",
                        f"{tmp}/f%05d.png"], check=True)
        for i, frame in enumerate(sorted(Path(tmp).glob("*.png"))):
            found = ocrmac.OCR(str(frame), language_preference=["ar-SA", "en-US"], recognition_level="accurate").recognize()
            texts = {t.strip() for t, conf, _ in found if conf >= 0.5 and len(t.strip()) > 1}
            for text in sorted(texts - last):
                lines.append({"t": round(i * every, 1), "text": text})
            last = texts
    out.write_text(json.dumps(lines, ensure_ascii=False, indent=0))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("data", type=Path)
    parser.add_argument("ids", nargs="*", help="video ids; default: main video of every new/variant dish")
    parser.add_argument("--every", type=float, default=2.0, help="seconds between OCR frames")
    parser.add_argument("--delay", type=float, default=5)
    parser.add_argument("--keep-video", action="store_true")
    args = parser.parse_args()

    ids = args.ids
    if not ids:
        rows = [json.loads(l) for l in (args.data / "match.jsonl").read_text().splitlines()]
        ids = list(dict.fromkeys(r["videos"][0] for r in rows if r.get("label") in ("new", "variant", "unclear")))
    print(f"{len(ids)} videos", flush=True)

    for n, video_id in enumerate(ids, 1):
        folder = args.data / "media" / video_id
        folder.mkdir(parents=True, exist_ok=True)
        if (folder / "whisper.json").exists() and (folder / "ocr.json").exists():
            continue
        print(f"[{n}/{len(ids)}] {video_id}", flush=True)
        video = download(video_id, folder, args.delay)
        try:
            transcribe(extract_audio(video, folder), folder)
            read_screen(video, folder, args.every)
        except Exception as e:  # noqa: BLE001 - log and move on to the next video
            print(f"  failed: {str(e)[:200]}", flush=True)
            continue
        if not args.keep_video:
            video.unlink()


if __name__ == "__main__":
    main()
