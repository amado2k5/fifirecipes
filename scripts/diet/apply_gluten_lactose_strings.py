"""Insert the gluten and lactose UI strings (scripts/diet/gl-strings/<lang>.json) into every language block of
src/data/translations.ts (idempotent). Checks every language has all keys and no stray script."""
import re, json, pathlib, unicodedata
HERE = pathlib.Path(__file__).resolve().parent
KEYS = ['glutenFree', 'glutenContains', 'glutenCheck', 'lactoseFree', 'lactoseContains', 'lactoseCheck', 'glutenLactoseNote']
SCRIPT = {'ar': 'ARABIC', 'fa': 'ARABIC', 'ur': 'ARABIC', 'ps': 'ARABIC', 'he': 'HEBREW', 'ru': 'CYRILLIC', 'el': 'GREEK', 'hi': 'DEVANAGARI',
          'te': 'TELUGU', 'bn': 'BENGALI', 'ja': 'CJK', 'zh': 'CJK', 'ko': 'HANGUL'}
WORDS = ['ARABIC', 'HEBREW', 'CYRILLIC', 'GREEK', 'DEVANAGARI', 'TELUGU', 'BENGALI', 'CJK', 'HIRAGANA', 'KATAKANA', 'HANGUL']

def script(ch):
    if not ch.isalpha(): return None
    n = unicodedata.name(ch, '')
    for w in WORDS:
        if n.startswith(w): return 'CJK' if w in ('HIRAGANA', 'KATAKANA') else w
    return 'LATIN' if n.startswith('LATIN') else 'OTHER'

S = {}
for f in sorted((HERE / 'gl-strings').glob('*.json')):
    lang = f.stem; d = json.load(open(f, encoding='utf-8'))
    assert list(d) == KEYS, (lang, list(d))
    for k, v in d.items():
        assert isinstance(v, str) and v.strip(), (lang, k)
        bad = {script(c) for c in v} - {None, 'LATIN', SCRIPT.get(lang, 'LATIN')}
        assert not bad, (lang, k, bad)
        if lang != 'en': assert v != json.load(open(HERE / 'gl-strings/en.json'))[k], (lang, k, 'left in English')
    S[lang] = d
assert len(S) == 29, len(S)

p = HERE.parents[1] / 'src/data/translations.ts'
text = p.read_text(encoding='utf-8')
text = '\n'.join(l for l in text.split('\n') if not re.match(r'^    (' + '|'.join(KEYS) + r'): ', l))
out = []; start = False; n = 0
for ln in text.split('\n'):
    out.append(ln)
    if ln.startswith('export const UI_TRANSLATIONS'): start = True
    m = re.match(r"^  ([a-z]{2}): \{$", ln) if start else None
    if m:
        for k in KEYS: out.append(f"    {k}: {json.dumps(S[m.group(1)][k], ensure_ascii=False)},")
        n += 1
assert n == 29, n
p.write_text('\n'.join(out), encoding='utf-8'); print('inserted into', n, 'languages')
