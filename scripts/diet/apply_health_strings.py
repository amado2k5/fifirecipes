"""Insert the allergen and diabetic UI strings into every language block of src/data/translations.ts (idempotent)."""
import re, json, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from health_strings import S, KEYS
p = pathlib.Path(__file__).resolve().parents[2] / 'src/data/translations.ts'
text = p.read_text(encoding='utf-8')
# idempotent: drop lines inserted by an earlier run
text = '\n'.join(l for l in text.split('\n') if not re.match(r'^    (' + '|'.join(KEYS) + r'): ', l))
lines = text.split('\n'); out = []; start = False; n = 0
for ln in lines:
    out.append(ln)
    if ln.startswith('export const UI_TRANSLATIONS'): start = True
    m = re.match(r"^  ([a-z]{2}): \{$", ln) if start else None
    if m:
        lang = m.group(1)
        assert len(S[lang]) == len(KEYS), (lang, len(S[lang]))
        for k, v in zip(KEYS, S[lang]): out.append(f"    {k}: {json.dumps(v, ensure_ascii=False)},")
        n += 1
assert n == len(S) == 29, (n, len(S))
text = '\n'.join(out)
assert text.count('allergenContains:') == 29
p.write_text(text, encoding='utf-8'); print('inserted into', n, 'languages')
