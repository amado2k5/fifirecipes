#!/usr/bin/env python3
"""Halal scan of the translated recipe text (world and core recipes).

    python3 scripts/world/halal_i18n.py            # exit 1 on any hit
    python3 scripts/world/halal_i18n.py --lang Sv  # one table

halal_audit.py only reads the English source, but mistranslation can put
pork or alcohol into a halal recipe. All of these reached main in Oct 2026:
"bacon leg of lamb" (Ur), "bear meat" and "toddy" (Hi), "сало" for suet
(Ru), "pork broth" for chicken broth (Te), "Schweinefilet" for skirt steak
(De), "bonitofläsk" for bonito flakes (Sv), "cebollas de puerco" for green
onions (Es). This scans titles, notes, ingredient names and amounts, and
steps of every table for pork, alcohol, intoxicant and non-halal-animal
words.

Matching is whole-word. Substring matching gives false hits such as بيرة
in كبيرة, 술 in 큰술, öl in maismjöl and κρασ in θερμοκρασία. If a real
word is wrongly flagged, add it to ALLOW for that language, not by
removing the term.
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# Stems (prefix match within a word) per language. Keep them specific.
TERMS = {
    'Es': r'cerdo|puerco|tocino|manteca de cerdo|jam[oó]n|chorizo|vino|cerveza|ron|jerez|licor|tequila|caballo|perro',
    'Fr': r'porc|lardons?|saindoux|jambon|vin|bi[eè]re|rhum|liqueur|cognac|cheval|chien',
    'De': r'schwein\w*|speck|schmalz|schinken|wein|bier|rum|lik[oö]r|weinbrand|pferd\w*|hund\w*',
    'It': r'maiale|lardo|sugna|strutto|pancetta|prosciutto|guanciale|salsiccia di maiale|vino|birra|rum|liquore|grappa|marsala|cavallo|cane|limoncello',
    'Nl': r'varken\w*|spek|reuzel|ham|wijn|bier|rum|likeur|paard\w*|hond\w*',
    'Pt': r'porco|toucinho|banha de porco|presunto|vinho|cerveja|rum|licor|cacha[cç]a|cavalo|cachorro|c[aã]o|pernil(?! de (?:cordeiro|borrego|carneiro|vaca))|limoncel+o',
    'Pl': r'wieprz\w*|boczek|smalec(?! kacz)|szynk\w*|win[oa]|piw\w*|rum|likier\w*|w[oó]dk\w*|konin\w*|psie mięso',
    'Sv': r'fläsk\w*|gris\w*|bacon|ister|skinka|vin|[oö]l|rom|lik[oö]r|tj[aä]der|hästkött|hundkött',
    'Tr': r'domuz|jambon|[şs]arap|bira|rom|lik[oö]r|rak[ıi]|at eti|k[oö]pek',
    'Id': r'babi(?! laut)|lemak babi|ham|anggur merah|bir|rum|arak|tuak|kuda|anjing',
    'Sw': r'nguruwe|bekoni|divai|mvinyo|bia|pombe|ramu|farasi|mbwa|punda',
    # not "bîra": also "memory". "şirab"/"şîrab" was used for syrup and read as
    # wine; "bozkurt" (grey wolf) was used for turkey. Syrup is "şerbet".
    'Ku': r'beraz|[şs]erab\w*|[şs][iî]rab\w*|b[iî]re|araq|hesp|kûçik|se|bozkur[tk]\w*|gur',
    'Ru': r'свин\w*|сало|бекон|ветчин\w*|вин[оа]|пив\w*|ром|ликёр\w*|водк\w*|коньяк\w*|медвеж\w*|конин\w*|собач\w*',
    # Not ρούμι: it is also Rumi cheese, which the Egyptian recipes use often.
    'El': r'χοιρ\w*|μπέικον|ζαμπόν|κρασ[ίι]\w*|μπύρα|λικέρ|ούζο|αρκούδ\w*|άλογ\w*|σκύλ\w*|οίν\w*|οιν[οό]\w*',
    'He': r'חזיר|בייקון|שומן חזיר|יין|בירה|רום|ליקר|דוב|סוס|כלב',
    'Fa': r'خوک|گوشت خوک|بیکن|ژامبون|شراب|آبجو|الکل|عرق|خرس|اسب|سگ',
    'Ur': r'سور|خنزیر|بیکن|شراب|بیئر|الکحل|تاڑی|بھنگ|ریچھ|گھوڑ\w*|کت[اے]',
    'Ps': r'خنزیر|سوږر|بیکن|شراب|بیر|الکول|خرس|آس|سپی',
    'Hi': r'सूअर|पोर्क|बेकन|हैम|शराब|वाइन|बीयर|रम|ताड़ी|भांग|भालू|घोड़\w*|कुत्त\w*',
    'Te': r'పంది[\u0C00-\u0C7F]*|బేకన్|హామ్|వైన్|బీర్|మద్యం|సారాయి|కల్లు[\u0C00-\u0C7F]*|ఎలుగుబంటి|గుర్ర[\u0C00-\u0C7F]*|కుక్క(?:లు|ల|ను|కు)?(?:\s*మాంసం)?',
    'Bn': r'শূকর|শুকর|পোর্ক|বেকন|হ্যাম|লার্ড|ওয়াইন|মদ|মদ্য|শরাব|অ্যালকোহল|বিয়ার|রম|ভোদকা|উইস্কি|ব্র্যান্ডি|লিকার|জিন|ভালুক|ঘোড়া|কুকুর',
    'Ja': r'豚|ポーク|ベーコン|ハム|ラード|日本酒|料理酒|みりん|味醂|ワイン|ビール|ラム酒|焼酎|熊|馬肉|犬',
    'Zh': r'猪|豬|培根|火腿|猪油|料酒|黄酒|米酒|白酒|啤酒|葡萄酒|朗姆|熊|马肉|狗',
    'Ko': r'돼지|베이컨|햄|라드|청주|정종|맛술|미림|소주|와인|맥주|럼주|곰고기|말고기|개고기',
    'Vi': r'lợn|heo|giăm bông|ba rọi|rượu|cồn|bia|vodka|whisky|whiskey|brandy|gấu|ngựa|chó',
    # "verë/vera" is both wine and summer in Albanian — allowlisted below as a
    # phrase ("stinë e verës"); word-bounded matching keeps "veranda" etc. safe.
    'Sq': r'derr\w*|proshut\w*|pancet\w*|bekon\w*|bacon|sallam\w*|mortadel\w*|lard\w*|verë|vera|verën|verës|birr\w*|raki\w*|vodk\w*|uiski|whisky|brendi|konjak|likër\w*|shampanj\w*|vermut|arak|tequila|alkohol\w*|ari\b|arin\b|ariu\b|kalë|kali\b|kuaj\w*|qen\b|qeni\b|qentë\b|hotdog\w*',
}
# Offensive words that mistranslation has produced (not halal, but must never
# appear): Hebrew "oz" as אונס (rape), Swahili sugar as "kafiri" (infidel) and
# "shoga", Hindi "floured" as दलित (a caste name).
OFFENSIVE = {'He': r'אונס', 'Sw': r'kafiri|shoga', 'Hi': r'दलित'}
for _l, _t in OFFENSIVE.items():
    TERMS[_l] = TERMS[_l] + '|' + _t

# Words that contain a term but are fine.
ALLOW = {
    'Sv': {'vinäger', 'vinägern', 'vindruvor', 'vin- eller', 'vinblad'},
    'Nl': {'hamburger'},
    'Id': {'bulu babi', 'anggur merah tanpa biji', 'selai anggur merah', 'ragi bir'},  # sea urchin; red grapes; brewer's yeast
    'Ru': {'винегрет', 'пивные дрожжи'},
    'Fr': {'vinaigre', 'vinaigrette'},
    'Es': {'vinagre', 'vinagreta', 'ronda'},
    'Pt': {'vinagre', 'vinagrete'},
    'It': {'vinaigrette', 'lievito di birra'},  # the normal Italian word for fresh yeast
    'De': {'butterschmalz', 'lammschmalz', 'rinderschmalz', 'weinblätter', 'wein- oder'},  # ghee; vine leaves
    'Zh': {'酒石酸', '石狗公', '啤酒酵母'},  # 石狗公 = scorpionfish; brewer's yeast
    'Ja': {'刻みりんご', 'ビール酵母', 'タビール', 'ラハム', 'ルラード'},  # apple; brewer's yeast; tabil; lahm; roulade
    'Ko': {'맥주 효모', '룰라드'},
    'He': {'שמרי בירה'},  # brewer's yeast
    'Pl': {'drożdże piwne'},
    'Te': {'బీర్ యీస్ట్'},
    'Bn': {'বিয়ার ইস্ট'},
    'Vi': {'men bia', 'óc chó'},
    'Sq': {'maja e birrës', 'maja e birres', 'maje birre', 'maje birrë', 'majenë birre',
           'stinë e verës', 'stine e veres', 'stinë së verës', 'stine se veres',
           'sallamurë', 'sallamurës', 'sallamurën', 'sallamura',
           'gjatë verës', 'gjate veres', 'në verë', 'ne vere'},  # brewer's yeast; summer season; brine
    'Tr': {'bira mayası'},
    'Fa': {'عرق بهارنارنج', 'عرق گلاب', 'عرق نعناع', 'عرق\u200cسوس', 'عرق سوس', 'بدون الکل'},  # distillates, licorice
    'Ur': {'بغیر شراب'},
    'Ps': {'بې الکول'},
    'Hi': {'बिना शराब'},
    'Sw': {'bila pombe'},
}
NON_SPACED = {'Ja', 'Zh', 'Ko'}  # no spaces between words: match anywhere
# Indic scripts: \w misses vowel signs, so bound words by the script's range.
INDIC = {'Hi': '\u0900-\u097F', 'Te': '\u0C00-\u0C7F', 'Bn': '\u0980-\u09FF'}
ARABIC = {'Fa', 'Ur', 'Ps'}


# Compounding languages glue words together ("bonitofläsk" = bonito pork,
# "Schweinefilet"), so these stems also match inside a word.
COMPOUND = {'Sv': 'fläsk|skink|gris(?:kött|fett)|vinsvinäger|vitvinäger', 'De': 'schwein|schmalz|speck(?!s)',
            'Nl': 'varkens?|reuzel', 'Pl': 'wieprz'}


def pattern(lang):
    t = TERMS[lang]
    if lang in COMPOUND:
        t = t + '|' + r'\w*(?:' + COMPOUND[lang] + r')\w*'
    if lang in NON_SPACED:
        return re.compile(t)
    if lang in INDIC:
        r = INDIC[lang]
        return re.compile(f'(?<![{r}])(?:{t})(?![{r}])')
    if lang in ARABIC:
        # Letters only: Arabic punctuation (، ؛ ؟) shares the Unicode block and
        # must still end a word ("بیکن، گوشت" = "bacon, meat" was missed).
        letters = '\\u0620-\\u064A\\u066E-\\u06D3\\u06D5\\u06EE-\\u06FF'
        return re.compile(f'(?<![{letters}])(?:ال)?(?:{t})(?![{letters}])')
    if lang == 'He':
        return re.compile('(?<![\\u05D0-\\u05EA])[הובלמש]?(?:' + t + ')(?![\\u05D0-\\u05EA])')
    return re.compile(r'(?<!\w)(?:' + t + r')(?!\w)', re.I)


def covers(low, phrase, pos):
    """True if an occurrence of the allowed phrase spans position pos."""
    i = low.find(phrase)
    while i != -1:
        if i <= pos < i + len(phrase):
            return True
        i = low.find(phrase, i + 1)
    return False


def fields(entry):
    yield 'title', entry.get('title', '')
    yield 'culturalNotes', entry.get('culturalNotes') or ''
    for k, v in entry.get('ingredients', {}).items():
        if isinstance(v, dict):
            yield f'ingredients.{k}', f"{v.get('name', '')} | {v.get('standardAmount', '')}"
    for k, v in entry.get('instructions', {}).items():
        yield f'instructions.{k}', v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--lang')
    args = ap.parse_args()
    hits = 0
    english = json.loads((ROOT / 'src/data/recipeTranslations.json').read_text())
    for lang in sorted(TERMS):
        if args.lang and args.lang != lang:
            continue
        rx = pattern(lang)
        allow = ALLOW.get(lang, set())
        table = json.loads((ROOT / f'src/data/recipeTranslations{lang}.json').read_text())
        for rid, entry in table.items():
            if rid not in english:  # orphaned ids are never shown
                continue
            for path, text in fields(entry):
                low = text.lower()
                for m in rx.finditer(text):
                    if any(covers(low, a, m.start()) for a in allow):
                        continue
                    hits += 1
                    print(f'{lang} {rid} {path}: "{m.group(0)}" | {text[max(0, m.start() - 40):m.end() + 40]}')
    print(f'{hits} halal hits in translations')
    sys.exit(1 if hits else 0)


if __name__ == '__main__':
    main()
