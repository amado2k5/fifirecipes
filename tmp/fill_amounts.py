#!/usr/bin/env python3
"""Fill empty ingredient amounts in a compact /tmp/<iso>-<Lang>.json file
using amount_i18n.translate(lang, en_amount)."""
import json, sys
sys.path.insert(0, '/Users/ahmedabdelaal/Documents/GitHub/fifirecipes/tmp')
from amount_i18n import translate, leftovers

iso, lang = sys.argv[1], sys.argv[2]
en = json.load(open(f'/tmp/{iso}-en.json'))
d = json.load(open(f'/tmp/{iso}-{lang}.json'))
miss = []
for rid, r in d.items():
    ens = en[rid]['i']
    assert len(r['i']) == len(ens), rid
    for i, pair in enumerate(r['i']):
        if len(pair) < 2 or not pair[1]:
            pair[:] = pair[:1] + [translate(lang, ens[i][1])]
        left = leftovers(lang, pair[1])
        if left:
            miss.append((rid, i + 1, pair[1], left))
json.dump(d, open(f'/tmp/{iso}-{lang}.json', 'w'), ensure_ascii=False, indent=1)
print(f'{lang}: {len(d)} recipes; {len(miss)} amounts with leftover English')
for m in miss[:20]:
    print('  ', m)

# --- clove disambiguation: garlic 'cloves' -> Zehen etc; spice 'cloves' -> Nelken etc
CLOVES = {
 'De': ('Zehen', 'Nelken'), 'Es': ('dientes', 'clavos'), 'Fa': ('حبه', 'میخک'),
 'Fr': ('gousses', 'clous de girofle'), 'Id': ('siung', 'buah cengkih'),
 'It': ('spicchi', 'chiodi di garofano'), 'Ja': ('片', '粒'), 'Ko': ('쪽', '개'),
 'Ku': ('hîngiv', 'qaranfîl'), 'Nl': ('teentjes', 'kruidnagels'),
 'Pl': ('ząbki', 'goździki'), 'Ps': ('جوش', 'لونګ'), 'Pt': ('dentes', 'cravos'),
 'Ru': ('зубчика', 'бутона'), 'Sv': ('klyftor', 'kryddnejlikor'),
 'Sw': ('vitunguu', 'karafuu'), 'Te': ('అల్లి', 'లవంగాలు'), 'Tr': ('diş', 'karanfil'),
 'Ur': ('جوے', 'لونگ'), 'Zh': ('瓣', '粒'), 'Bn': ('কোয়া', 'লবঙ্গ'),
 'He': ('שיני', 'ציפורני'), 'Hi': ('कलियाँ', 'लौंग'), 'El': ('σκελίδες', 'γαριφαλό'),
}
d2 = json.load(open(f'/tmp/{iso}-{lang}.json'))
g_word, s_word = CLOVES.get(lang, ('cloves', 'cloves'))
fixed = 0
for rid, r in d2.items():
    ens = en[rid]['i']
    for i, pair in enumerate(r['i']):
        if len(pair) > 1 and pair[1]:
            ena = ens[i][1]; ename = ens[i][0].lower()
            if 'clove' in ena:
                if 'garlic' in ename:
                    new = pair[1].replace(s_word, g_word)
                else:
                    new = pair[1].replace(g_word, s_word)
                if new != pair[1]:
                    pair[1] = new; fixed += 1
if fixed:
    json.dump(d2, open(f'/tmp/{iso}-{lang}.json', 'w'), ensure_ascii=False, indent=1)
print(f'cloves fixed: {fixed}')
