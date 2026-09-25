#!/usr/bin/env python3
"""Download a YouTube video's transcript plus its metadata.

Writes two files per video into --out-dir:
  <video_id>.json  metadata, transcript segments with timestamps, and the full text
  <video_id>.md    the same content in readable form (paste this to Claude)

Setup:
  pip install yt-dlp youtube-transcript-api

Usage:
  python youtube_transcript.py https://www.youtube.com/watch?v=HPMa3h8nY9k
  python youtube_transcript.py URL1 URL2 --lang ar en --out-dir transcripts
  python youtube_transcript.py URL --cookies-from-browser chrome   # if YouTube asks you to sign in

The transcript comes from uploaded subtitles when the video has them, otherwise
from YouTube's auto-generated captions. The output records which one was used.
"""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

try:
    import yt_dlp
except ImportError:
    sys.exit("yt-dlp is not installed. Run: pip install yt-dlp youtube-transcript-api")

METADATA_FIELDS = [
    "id", "title", "fulltitle", "webpage_url",
    "channel", "channel_id", "channel_url", "channel_follower_count", "channel_is_verified",
    "uploader", "uploader_id", "uploader_url",
    "upload_date", "timestamp", "release_date",
    "duration", "duration_string",
    "view_count", "like_count", "comment_count",
    "description", "tags", "categories", "chapters",
    "language", "availability", "age_limit", "live_status", "was_live",
    "width", "height", "fps", "resolution",
    "thumbnail",
]


def format_timestamp(seconds: float) -> str:
    seconds = int(seconds)
    h, rem = divmod(seconds, 3600)
    m, s = divmod(rem, 60)
    return f"{h}:{m:02d}:{s:02d}" if h else f"{m}:{s:02d}"


def pick_track(info: dict, langs: list[str]) -> tuple[str, str, list[dict]] | None:
    """Return (kind, language, formats) for the best caption track available."""
    manual = info.get("subtitles") or {}
    auto = info.get("automatic_captions") or {}

    for lang in langs:
        for key in (lang, *[k for k in manual if k.startswith(f"{lang}-")]):
            if key in manual:
                return "manual", key, manual[key]
        # "-orig" is the caption in the spoken language; plain codes may be machine translations.
        for key in (f"{lang}-orig", lang):
            if key in auto:
                return "auto-generated", key, auto[key]

    # Fall back to whatever language the video is actually spoken in.
    if manual:
        key = next(iter(manual))
        return "manual", key, manual[key]
    orig = [k for k in auto if k.endswith("-orig")]
    if orig:
        return "auto-generated", orig[0], auto[orig[0]]
    return None


def parse_json3(data: dict) -> list[dict]:
    segments = []
    for event in data.get("events", []):
        text = "".join(seg.get("utf8", "") for seg in event.get("segs") or []).strip()
        if not text:
            continue
        start = event.get("tStartMs", 0) / 1000
        segments.append({
            "start": round(start, 3),
            "duration": round(event.get("dDurationMs", 0) / 1000, 3),
            "timestamp": format_timestamp(start),
            "text": text.replace("\n", " "),
        })
    return segments


def transcript_via_ytdlp(ydl: yt_dlp.YoutubeDL, info: dict, langs: list[str]) -> dict | None:
    track = pick_track(info, langs)
    if not track:
        return None
    kind, lang, formats = track
    fmt = next((f for f in formats if f.get("ext") == "json3"), None)
    if not fmt:
        return None
    raw = ydl.urlopen(fmt["url"]).read().decode("utf-8")
    segments = parse_json3(json.loads(raw))
    if not segments:
        return None
    return {"source": "yt-dlp", "kind": kind, "language": lang, "segments": segments}


def transcript_via_api(video_id: str, langs: list[str]) -> dict | None:
    try:
        from youtube_transcript_api import YouTubeTranscriptApi
    except ImportError:
        return None
    try:
        if hasattr(YouTubeTranscriptApi, "get_transcript"):  # versions before 1.0
            rows = YouTubeTranscriptApi.get_transcript(video_id, languages=langs)
            lang = langs[0]
        else:
            fetched = YouTubeTranscriptApi().fetch(video_id, languages=langs)
            rows = [{"text": s.text, "start": s.start, "duration": s.duration} for s in fetched]
            lang = fetched.language_code
    except Exception as exc:  # the library raises many specific error types
        print(f"  youtube-transcript-api failed: {exc}", file=sys.stderr)
        return None
    segments = [{
        "start": round(r["start"], 3),
        "duration": round(r["duration"], 3),
        "timestamp": format_timestamp(r["start"]),
        "text": r["text"].replace("\n", " ").strip(),
    } for r in rows if r["text"].strip()]
    return {"source": "youtube-transcript-api", "kind": "unknown", "language": lang, "segments": segments}


def write_markdown(path: Path, meta: dict, transcript: dict | None) -> None:
    lines = [f"# {meta.get('title')}", ""]
    rows = [
        ("URL", meta.get("webpage_url")),
        ("Channel", meta.get("channel")),
        ("Channel URL", meta.get("channel_url")),
        ("Subscribers", meta.get("channel_follower_count")),
        ("Uploaded", meta.get("upload_date")),
        ("Length", meta.get("duration_string")),
        ("Views", meta.get("view_count")),
        ("Likes", meta.get("like_count")),
        ("Comments", meta.get("comment_count")),
        ("Language", meta.get("language")),
        ("Categories", ", ".join(meta.get("categories") or [])),
        ("Tags", ", ".join(meta.get("tags") or [])),
        ("Thumbnail", meta.get("thumbnail")),
    ]
    lines += [f"- **{k}:** {v}" for k, v in rows if v not in (None, "")]

    if meta.get("chapters"):
        lines += ["", "## Chapters", ""]
        lines += [f"- {format_timestamp(c['start_time'])} {c['title']}" for c in meta["chapters"]]

    lines += ["", "## Description", "", meta.get("description") or "(none)", "", "## Transcript", ""]
    if transcript:
        lines.append(f"_Source: {transcript['kind']} captions, language `{transcript['language']}`_")
        lines.append("")
        lines += [f"[{s['timestamp']}] {s['text']}" for s in transcript["segments"]]
    else:
        lines.append("(no transcript available)")

    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def process(url: str, langs: list[str], out_dir: Path, cookies_browser: str | None) -> bool:
    opts = {"quiet": True, "no_warnings": True, "skip_download": True}
    if cookies_browser:
        opts["cookiesfrombrowser"] = (cookies_browser,)

    with yt_dlp.YoutubeDL(opts) as ydl:
        try:
            info = ydl.extract_info(url, download=False)
        except yt_dlp.utils.DownloadError as exc:
            print(f"Could not read {url}: {exc}", file=sys.stderr)
            return False

        meta = {k: info.get(k) for k in METADATA_FIELDS if info.get(k) is not None}
        if meta.get("upload_date"):
            d = meta["upload_date"]
            meta["upload_date"] = f"{d[:4]}-{d[4:6]}-{d[6:]}"

        print(f"{meta.get('title')}  [{meta.get('channel')}, {meta.get('duration_string')}]")
        transcript = transcript_via_ytdlp(ydl, info, langs)

    if not transcript:
        transcript = transcript_via_api(info["id"], langs)

    if transcript:
        transcript["text"] = " ".join(s["text"] for s in transcript["segments"])
        print(f"  transcript: {len(transcript['segments'])} lines "
              f"({transcript['kind']}, {transcript['language']})")
    else:
        print("  no transcript found; saving metadata only", file=sys.stderr)

    out_dir.mkdir(parents=True, exist_ok=True)
    result = {
        "fetched_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "metadata": meta,
        "transcript": transcript,
    }
    json_path = out_dir / f"{info['id']}.json"
    md_path = out_dir / f"{info['id']}.md"
    json_path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    write_markdown(md_path, meta, transcript)
    print(f"  saved {json_path} and {md_path}")
    return True


def main() -> None:
    parser = argparse.ArgumentParser(description="Save a YouTube video's transcript and metadata.")
    parser.add_argument("urls", nargs="+", help="video URLs or IDs")
    parser.add_argument("--lang", nargs="+", default=["ar", "en"],
                        help="preferred transcript languages, in order (default: ar en)")
    parser.add_argument("--out-dir", type=Path, default=Path("transcripts"),
                        help="output folder (default: ./transcripts)")
    parser.add_argument("--cookies-from-browser", metavar="BROWSER",
                        help="use your browser's YouTube login, e.g. chrome, firefox, safari")
    args = parser.parse_args()

    ok = [process(u, args.lang, args.out_dir, args.cookies_from_browser) for u in args.urls]
    sys.exit(0 if all(ok) else 1)


if __name__ == "__main__":
    main()
