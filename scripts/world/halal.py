"""Deterministic halal gate driven by halal_rules.yaml."""
import re
from pathlib import Path

from textnorm import norm_any


def _load_rules(text: str) -> dict:
    try:
        import yaml
        return yaml.safe_load(text)
    except ImportError:  # the rules file is plain "section:" + "- item" lists
        rules, cur = {}, None
        for ln in text.splitlines():
            ln = ln.split('#', 1)[0].rstrip()
            if ln and not ln.startswith(' ') and ln.endswith(':'):
                cur = rules.setdefault(ln[:-1], [])
            elif ln.strip().startswith('- ') and cur is not None:
                cur.append(ln.strip()[2:].strip())
        return rules


_RULES = _load_rules((Path(__file__).parent / 'halal_rules.yaml').read_text())


def _compile(terms: list[str]) -> re.Pattern:
    parts = sorted({norm_any(t) for t in terms if t}, key=len, reverse=True)
    return re.compile(r'(?<!\w)(' + '|'.join(re.escape(p) for p in parts) +
                      r')(?!\w)', re.IGNORECASE)


REJECT = _compile(_RULES['reject'])
REVIEW = _compile(_RULES['review'])
ACCEPT = _compile(_RULES['accept'])


def gate(text: str) -> tuple[str, list[str]]:
    """Return ('halal'|'haram'|'uncertain', hits). Accept terms mask hits."""
    n = norm_any(text)
    hits = [m.group(1) for m in REJECT.finditer(n)]
    for m in ACCEPT.finditer(n):
        hits = [h for h in hits if not (h in m.group(0) or m.group(0) in h)]
    if hits:
        return 'haram', sorted(set(hits))
    rev = [m.group(1) for m in REVIEW.finditer(n)]
    for m in ACCEPT.finditer(n):
        rev = [h for h in rev if not (h in m.group(0) or m.group(0) in h)]
    if rev:
        return 'uncertain', sorted(set(rev))
    return 'halal', []
