#!/usr/bin/env python3
"""Fetch metadata (title, description, chapters, tags, stats) for every video
listed in a channel listing TSV, one JSON object per line.

The listing is what `yt-dlp --flat-playlist --print '%(id)s\t...'` writes; only
the first column (the video id) is read. Videos already in the output file are
skipped, so an interrupted run picks up where it stopped. The first error from
YouTube stops the run (exit code 2) instead of retrying.

Usage:
  python channel_metadata.py transcripts/channel-fatma-abu-haty/channel_videos.tsv \
      transcripts/channel-fatma-abu-haty/metadata.jsonl [--delay 5]
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import random
import re
import time
from pathlib import Path

import yt_dlp

# Set YTDLP_BROWSER=chrome to send requests as the YouTube account signed in
# to that browser, which gets past YouTube's "confirm you're not a bot" check.
BROWSER_COOKIES = {"cookiesfrombrowser": (os.environ["YTDLP_BROWSER"],)} if os.environ.get("YTDLP_BROWSER") else {}

FIELDS = [
    "id", "title", "description", "chapters", "tags", "categories",
    "duration", "upload_date", "view_count", "like_count", "comment_count",
]


VIDEO_ID = re.compile(r"[A-Za-z0-9_-]{11}")

# Seconds between the several HTTP requests yt-dlp makes for one video.
REQUEST_GAP = 2


class YouTubeError(Exception):
    pass


def fetch(video_id: str, delay: float) -> dict:
    """Fetch one video's metadata. Any error from YouTube stops the whole run: no retries."""
    time.sleep(random.uniform(delay, delay * 1.2))
    opts = {"quiet": True, "no_warnings": True, "skip_download": True, "ignore_no_formats_error": True,
            "js_runtimes": {"node": {}}, "sleep_interval_requests": REQUEST_GAP, **BROWSER_COOKIES}
    try:
        with yt_dlp.YoutubeDL(opts) as ydl:
            info = ydl.extract_info(f"https://www.youtube.com/watch?v={video_id}", download=False)
    except Exception as e:  # noqa: BLE001
        raise YouTubeError(f"{video_id}: {e}") from e
    return {k: info.get(k) for k in FIELDS}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("listing")
    parser.add_argument("output")
    parser.add_argument("--limit", type=int, default=int(os.environ.get("FETCH_LIMIT", 0)) or None,
                        help="only the first N videos of the listing (newest first); the rest are skipped")
    parser.add_argument("--delay", type=float, default=5, help="minimum seconds between videos")
    args = parser.parse_args()

    # Titles can contain line breaks, so skip lines that do not start with a video id.
    ids = [line.split("\t")[0] for line in Path(args.listing).read_text().splitlines()
           if VIDEO_ID.fullmatch(line.split("\t")[0])]
    if args.limit:
        ids = ids[:args.limit]
    out = Path(args.output)
    done = set()
    if out.exists():
        for line in out.read_text().splitlines():
            row = json.loads(line)
            if "error" not in row:
                done.add(row["id"])
    todo = [i for i in ids if i not in done]
    print(f"{len(ids)} listed, {len(done)} done, {len(todo)} to fetch", flush=True)

    fetched = 0
    with out.open("a") as f:
        for video_id in todo:
            try:
                row = fetch(video_id, args.delay)
            except YouTubeError as e:
                print(f"STOPPED on YouTube error after {fetched} videos: {e}", flush=True)
                sys.exit(2)
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
            f.flush()
            fetched += 1
            if fetched % 25 == 0 or fetched == len(todo):
                print(f"{fetched}/{len(todo)} fetched", flush=True)


if __name__ == "__main__":
    main()
