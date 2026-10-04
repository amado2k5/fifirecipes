"""Arabic + Latin text normalization for title/dish matching."""
import re
import unicodedata

_TASHKEEL = re.compile(r'[ً-ْٰـ]')
_PUNCT = re.compile(r'[^\w\s]', re.UNICODE)
_WS = re.compile(r'\s+')


def norm_ar(s: str) -> str:
    s = _TASHKEEL.sub('', s)
    s = s.replace('أ', 'ا').replace('إ', 'ا').replace('آ', 'ا')
    s = s.replace('ة', 'ه').replace('ى', 'ي')
    s = _PUNCT.sub(' ', s)
    return _WS.sub(' ', s).strip()


def norm_latin(s: str) -> str:
    s = unicodedata.normalize('NFKD', s)
    s = ''.join(c for c in s if not unicodedata.combining(c))
    s = s.lower().replace('’', "'")
    s = _PUNCT.sub(' ', s)
    s = _WS.sub(' ', s).strip()
    # naive singularize last char s→'' for each token
    return ' '.join(t[:-1] if len(t) > 3 and t.endswith('s') else t
                    for t in s.split())


def norm_any(s: str) -> str:
    return norm_ar(s) if re.search(r'[؀-ۿ]', s) else norm_latin(s)
