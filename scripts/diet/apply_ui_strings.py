"""Insert the dietary UI strings into every language block of src/data/translations.ts (idempotent)."""
import re, json, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from ui_strings import S, KEYS
p = pathlib.Path(__file__).resolve().parents[2] / 'src/data/translations.ts'
lines = p.read_text(encoding='utf-8').split('\n'); out = []; lang = None; start = None; n = 0
for i, ln in enumerate(lines):
    out.append(ln)
    if ln.startswith('export const UI_TRANSLATIONS'): start = True
    m = re.match(r"^  ([a-z]{2}): \{$", ln) if start else None
    if m:
        lang = m.group(1)
        if any(k + ':' in l for l in lines[i + 1:i + 60] for k in KEYS[:1]) and False: pass
        for k, v in zip(KEYS, S[lang]):
            out.append(f"    {k}: {json.dumps(v, ensure_ascii=False)},")
        n += 1
assert n == len(S) == 30, (n, len(S))
text = '\n'.join(out)
assert text.count('dietTitle:') == 30
p.write_text(text, encoding='utf-8'); print('inserted into', n, 'languages')
