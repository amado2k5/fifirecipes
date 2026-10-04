"""Polite, resumable HTTP fetcher.

Rules enforced (from docs/world-cuisines-devin-prompt.md):
  * cache every response at world/cache/<domain>/<sha1>.html, never fetch twice
  * >=3s between requests to the same domain
  * descriptive User-Agent
  * robots.txt honoured per domain
  * ~1,500 fetches/day/domain ceiling
"""
import hashlib
import json
import time
import urllib.error
import urllib.parse
import urllib.request
import urllib.robotparser
from pathlib import Path

from worldutil import CACHE, UA, LOGS

MIN_INTERVAL = 3.0
DAILY_CAP = 1500

_last_hit: dict[str, float] = {}
_robots: dict[str, urllib.robotparser.RobotFileParser | None] = {}
_counts_path = LOGS / 'fetch-counts.json'


def _domain(url: str) -> str:
    return urllib.parse.urlparse(url).netloc.lower().removeprefix('www.')


def _day_counts() -> dict[str, int]:
    try:
        return json.loads(_counts_path.read_text())
    except Exception:
        return {}


def _bump(key: str) -> None:
    d = _day_counts()
    d[key] = d.get(key, 0) + 1
    _counts_path.write_text(json.dumps(d))


def _allowed(url: str) -> bool:
    dom = _domain(url)
    if dom not in _robots:
        robots_url = (f'{urllib.parse.urlparse(url).scheme}://'
                      f'{urllib.parse.urlparse(url).netloc}/robots.txt')
        rp = urllib.robotparser.RobotFileParser()
        rp.set_url(robots_url)
        try:
            # fetch with our UA — default urllib UA gets 403 on wikimedia
            # which robotparser would misread as disallow-all
            req = urllib.request.Request(robots_url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                rp.parse(r.read().decode('utf-8', 'replace').splitlines())
            _robots[dom] = rp
        except urllib.error.HTTPError as e:
            _robots[dom] = None if e.code == 404 else rp
        except Exception:
            _robots[dom] = None
    rp = _robots[dom]
    return True if rp is None else rp.can_fetch(UA, url)


def fetch(url: str, *, binary: bool = False) -> str | bytes | None:
    """Return cached or freshly fetched content; None on failure/robots block."""
    dom = _domain(url)
    key = hashlib.sha1(url.encode()).hexdigest()
    dest = CACHE / dom / f'{key}.html'
    if dest.exists():
        data = dest.read_bytes()
        return data if binary else data.decode('utf-8', 'replace')

    today = time.strftime('%Y-%m-%d')
    counts = _day_counts()
    if counts.get(f'{today}:{dom}', 0) >= DAILY_CAP:
        raise RuntimeError(f'daily fetch cap reached for {dom}')
    if not _allowed(url):
        return None

    gap = MIN_INTERVAL - (time.time() - _last_hit.get(dom, 0))
    if gap > 0:
        time.sleep(gap)
    _last_hit[dom] = time.time()

    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
    except urllib.error.HTTPError as e:
        if e.code in (403, 429):
            print(f'BLOCKED {e.code} {url} — stopping; check site/ToS')
            raise
        print(f'HTTP {e.code} {url}')
        return None
    except Exception as e:
        print(f'fetch failed {url}: {e}')
        return None

    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    meta = dest.with_suffix('.url')
    meta.write_text(url)
    _bump(f'{today}:{dom}')
    return data if binary else data.decode('utf-8', 'replace')


def cached_path(url: str) -> Path:
    return (CACHE / _domain(url) /
            f"{hashlib.sha1(url.encode()).hexdigest()}.html")
