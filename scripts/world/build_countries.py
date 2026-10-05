#!/usr/bin/env python3
"""Build world/countries.yaml: every UN member and observer state with iso2,
English name, Arabic name (from the ar.wikipedia sitelink), continent, cuisine
demonym, local Wikipedia language, and stable order (alphabetical English).

    .venv/bin/python build_countries.py
"""

import sys
import time
import urllib.parse
import urllib.request
import json
from pathlib import Path

import yaml

HERE = Path(__file__).resolve().parent
WORLD = HERE.parent.parent / 'world'

# iso2, English name, cuisine demonym, continent, local wiki language, enwiki
# title override (when it differs from the English name)
COUNTRIES = [
    # Africa
    ('DZ', 'Algeria', 'Algerian', 'Africa', 'ar', None),
    ('AO', 'Angola', 'Angolan', 'Africa', 'pt', None),
    ('BJ', 'Benin', 'Beninese', 'Africa', 'fr', None),
    ('BW', 'Botswana', 'Botswanan', 'Africa', 'en', None),
    ('BF', 'Burkina Faso', 'Burkinabé', 'Africa', 'fr', None),
    ('BI', 'Burundi', 'Burundian', 'Africa', 'fr', None),
    ('CV', 'Cabo Verde', 'Cape Verdean', 'Africa', 'pt', 'Cape Verde'),
    ('CM', 'Cameroon', 'Cameroonian', 'Africa', 'fr', None),
    ('CF', 'Central African Republic', 'Central African', 'Africa', 'fr', None),
    ('TD', 'Chad', 'Chadian', 'Africa', 'ar', None),
    ('KM', 'Comoros', 'Comorian', 'Africa', 'ar', None),
    ('CG', 'Republic of the Congo', 'Congolese', 'Africa', 'fr', 'Republic of the Congo'),
    ('CD', 'Democratic Republic of the Congo', 'Congolese', 'Africa', 'fr', 'Democratic Republic of the Congo'),
    ('CI', "Côte d'Ivoire", 'Ivorian', 'Africa', 'fr', 'Ivory Coast'),
    ('DJ', 'Djibouti', 'Djiboutian', 'Africa', 'ar', 'Djibouti'),
    ('EG', 'Egypt', 'Egyptian', 'Africa', 'ar', None),
    ('GQ', 'Equatorial Guinea', 'Equatoguinean', 'Africa', 'es', None),
    ('ER', 'Eritrea', 'Eritrean', 'Africa', 'ti', None),
    ('SZ', 'Eswatini', 'Swazi', 'Africa', 'en', None),
    ('ET', 'Ethiopia', 'Ethiopian', 'Africa', 'am', None),
    ('GA', 'Gabon', 'Gabonese', 'Africa', 'fr', None),
    ('GM', 'The Gambia', 'Gambian', 'Africa', 'en', 'The Gambia'),
    ('GH', 'Ghana', 'Ghanaian', 'Africa', 'en', None),
    ('GN', 'Guinea', 'Guinean', 'Africa', 'fr', 'Guinea'),
    ('GW', 'Guinea-Bissau', 'Bissau-Guinean', 'Africa', 'pt', 'Guinea-Bissau'),
    ('KE', 'Kenya', 'Kenyan', 'Africa', 'sw', None),
    ('LS', 'Lesotho', 'Basotho', 'Africa', 'st', None),
    ('LR', 'Liberia', 'Liberian', 'Africa', 'en', None),
    ('LY', 'Libya', 'Libyan', 'Africa', 'ar', None),
    ('MG', 'Madagascar', 'Malagasy', 'Africa', 'mg', None),
    ('MW', 'Malawi', 'Malawian', 'Africa', 'en', None),
    ('ML', 'Mali', 'Malian', 'Africa', 'fr', None),
    ('MR', 'Mauritania', 'Mauritanian', 'Africa', 'ar', None),
    ('MU', 'Mauritius', 'Mauritian', 'Africa', 'fr', None),
    ('MA', 'Morocco', 'Moroccan', 'Africa', 'ar', None),
    ('MZ', 'Mozambique', 'Mozambican', 'Africa', 'pt', None),
    ('NA', 'Namibia', 'Namibian', 'Africa', 'en', None),
    ('NE', 'Niger', 'Nigerien', 'Africa', 'fr', None),
    ('NG', 'Nigeria', 'Nigerian', 'Africa', 'en', None),
    ('RW', 'Rwanda', 'Rwandan', 'Africa', 'rw', None),
    ('ST', 'São Tomé and Príncipe', 'Santomean', 'Africa', 'pt', 'São Tomé and Príncipe'),
    ('SN', 'Senegal', 'Senegalese', 'Africa', 'fr', None),
    ('SC', 'Seychelles', 'Seychellois', 'Africa', 'fr', None),
    ('SL', 'Sierra Leone', 'Sierra Leonean', 'Africa', 'en', None),
    ('SO', 'Somalia', 'Somali', 'Africa', 'so', None),
    ('ZA', 'South Africa', 'South African', 'Africa', 'en', None),
    ('SS', 'South Sudan', 'South Sudanese', 'Africa', 'en', None),
    ('SD', 'Sudan', 'Sudanese', 'Africa', 'ar', None),
    ('TZ', 'Tanzania', 'Tanzanian', 'Africa', 'sw', None),
    ('TG', 'Togo', 'Togolese', 'Africa', 'fr', None),
    ('TN', 'Tunisia', 'Tunisian', 'Africa', 'ar', None),
    ('UG', 'Uganda', 'Ugandan', 'Africa', 'sw', None),
    ('ZM', 'Zambia', 'Zambian', 'Africa', 'en', None),
    ('ZW', 'Zimbabwe', 'Zimbabwean', 'Africa', 'en', None),
    # Asia
    ('AF', 'Afghanistan', 'Afghan', 'Asia', 'fa', None),
    ('AM', 'Armenia', 'Armenian', 'Asia', 'hy', None),
    ('AZ', 'Azerbaijan', 'Azerbaijani', 'Asia', 'az', None),
    ('BH', 'Bahrain', 'Bahraini', 'Asia', 'ar', None),
    ('BD', 'Bangladesh', 'Bangladeshi', 'Asia', 'bn', None),
    ('BT', 'Bhutan', 'Bhutanese', 'Asia', 'dz', None),
    ('BN', 'Brunei', 'Bruneian', 'Asia', 'ms', None),
    ('KH', 'Cambodia', 'Cambodian', 'Asia', 'km', None),
    ('CN', 'China', 'Chinese', 'Asia', 'zh', None),
    ('CY', 'Cyprus', 'Cypriot', 'Asia', 'el', None),
    ('GE', 'Georgia', 'Georgian', 'Asia', 'ka', 'Georgia (country)'),
    ('IN', 'India', 'Indian', 'Asia', 'hi', None),
    ('ID', 'Indonesia', 'Indonesian', 'Asia', 'id', None),
    ('IR', 'Iran', 'Iranian', 'Asia', 'fa', None),
    ('IQ', 'Iraq', 'Iraqi', 'Asia', 'ar', None),
    ('IL', 'Israel', 'Israeli', 'Asia', 'he', None),
    ('JP', 'Japan', 'Japanese', 'Asia', 'ja', None),
    ('JO', 'Jordan', 'Jordanian', 'Asia', 'ar', None),
    ('KZ', 'Kazakhstan', 'Kazakh', 'Asia', 'kk', None),
    ('KW', 'Kuwait', 'Kuwaiti', 'Asia', 'ar', None),
    ('KG', 'Kyrgyzstan', 'Kyrgyz', 'Asia', 'ky', None),
    ('LA', 'Laos', 'Lao', 'Asia', 'lo', None),
    ('LB', 'Lebanon', 'Lebanese', 'Asia', 'ar', None),
    ('MY', 'Malaysia', 'Malaysian', 'Asia', 'ms', None),
    ('MV', 'Maldives', 'Maldivian', 'Asia', 'dv', None),
    ('MN', 'Mongolia', 'Mongolian', 'Asia', 'mn', None),
    ('MM', 'Myanmar', 'Burmese', 'Asia', 'my', None),
    ('NP', 'Nepal', 'Nepalese', 'Asia', 'ne', None),
    ('KP', 'North Korea', 'North Korean', 'Asia', 'ko', None),
    ('OM', 'Oman', 'Omani', 'Asia', 'ar', None),
    ('PK', 'Pakistan', 'Pakistani', 'Asia', 'ur', None),
    ('PS', 'Palestine', 'Palestinian', 'Asia', 'ar', 'State of Palestine'),
    ('PH', 'Philippines', 'Filipino', 'Asia', 'tl', None),
    ('QA', 'Qatar', 'Qatari', 'Asia', 'ar', None),
    ('SA', 'Saudi Arabia', 'Saudi', 'Asia', 'ar', None),
    ('SG', 'Singapore', 'Singaporean', 'Asia', 'ms', None),
    ('KR', 'South Korea', 'Korean', 'Asia', 'ko', 'South Korea'),
    ('LK', 'Sri Lanka', 'Sri Lankan', 'Asia', 'si', None),
    ('SY', 'Syria', 'Syrian', 'Asia', 'ar', None),
    ('TJ', 'Tajikistan', 'Tajik', 'Asia', 'tg', None),
    ('TH', 'Thailand', 'Thai', 'Asia', 'th', None),
    ('TL', 'Timor-Leste', 'Timorese', 'Asia', 'pt', 'East Timor'),
    ('TR', 'Turkey', 'Turkish', 'Asia', 'tr', 'Turkey'),
    ('TM', 'Turkmenistan', 'Turkmen', 'Asia', 'tk', None),
    ('AE', 'United Arab Emirates', 'Emirati', 'Asia', 'ar', None),
    ('UZ', 'Uzbekistan', 'Uzbek', 'Asia', 'uz', None),
    ('VN', 'Vietnam', 'Vietnamese', 'Asia', 'vi', None),
    ('YE', 'Yemen', 'Yemeni', 'Asia', 'ar', None),
    # Europe
    ('AL', 'Albania', 'Albanian', 'Europe', 'sq', None),
    ('AD', 'Andorra', 'Andorran', 'Europe', 'ca', None),
    ('AT', 'Austria', 'Austrian', 'Europe', 'de', None),
    ('BY', 'Belarus', 'Belarusian', 'Europe', 'be', None),
    ('BE', 'Belgium', 'Belgian', 'Europe', 'fr', None),
    ('BA', 'Bosnia and Herzegovina', 'Bosnian', 'Europe', 'bs', 'Bosnia and Herzegovina'),
    ('BG', 'Bulgaria', 'Bulgarian', 'Europe', 'bg', None),
    ('HR', 'Croatia', 'Croatian', 'Europe', 'hr', None),
    ('CZ', 'Czechia', 'Czech', 'Europe', 'cs', 'Czech Republic'),
    ('DK', 'Denmark', 'Danish', 'Europe', 'da', None),
    ('EE', 'Estonia', 'Estonian', 'Europe', 'et', None),
    ('FI', 'Finland', 'Finnish', 'Europe', 'fi', None),
    ('FR', 'France', 'French', 'Europe', 'fr', None),
    ('DE', 'Germany', 'German', 'Europe', 'de', None),
    ('GR', 'Greece', 'Greek', 'Europe', 'el', None),
    ('HU', 'Hungary', 'Hungarian', 'Europe', 'hu', None),
    ('IS', 'Iceland', 'Icelandic', 'Europe', 'is', None),
    ('IE', 'Ireland', 'Irish', 'Europe', 'en', 'Republic of Ireland'),
    ('IT', 'Italy', 'Italian', 'Europe', 'it', None),
    ('LV', 'Latvia', 'Latvian', 'Europe', 'lv', None),
    ('LI', 'Liechtenstein', 'Liechtensteiner', 'Europe', 'de', None),
    ('LT', 'Lithuania', 'Lithuanian', 'Europe', 'lt', None),
    ('LU', 'Luxembourg', 'Luxembourgish', 'Europe', 'lb', None),
    ('MT', 'Malta', 'Maltese', 'Europe', 'mt', None),
    ('MD', 'Moldova', 'Moldovan', 'Europe', 'ro', None),
    ('MC', 'Monaco', 'Monégasque', 'Europe', 'fr', None),
    ('ME', 'Montenegro', 'Montenegrin', 'Europe', 'sr', None),
    ('NL', 'Netherlands', 'Dutch', 'Europe', 'nl', 'Netherlands'),
    ('MK', 'North Macedonia', 'Macedonian', 'Europe', 'mk', None),
    ('NO', 'Norway', 'Norwegian', 'Europe', 'no', None),
    ('PL', 'Poland', 'Polish', 'Europe', 'pl', None),
    ('PT', 'Portugal', 'Portuguese', 'Europe', 'pt', None),
    ('RO', 'Romania', 'Romanian', 'Europe', 'ro', None),
    ('RU', 'Russia', 'Russian', 'Europe', 'ru', None),
    ('SM', 'San Marino', 'Sammarinese', 'Europe', 'it', None),
    ('RS', 'Serbia', 'Serbian', 'Europe', 'sr', None),
    ('SK', 'Slovakia', 'Slovak', 'Europe', 'sk', None),
    ('SI', 'Slovenia', 'Slovenian', 'Europe', 'sl', None),
    ('ES', 'Spain', 'Spanish', 'Europe', 'es', None),
    ('SE', 'Sweden', 'Swedish', 'Europe', 'sv', None),
    ('CH', 'Switzerland', 'Swiss', 'Europe', 'de', None),
    ('UA', 'Ukraine', 'Ukrainian', 'Europe', 'uk', None),
    ('GB', 'United Kingdom', 'British', 'Europe', 'en', 'United Kingdom'),
    ('VA', 'Vatican City', 'Vatican', 'Europe', 'it', 'Vatican City'),
    # North America
    ('AG', 'Antigua and Barbuda', 'Antiguan', 'North America', 'en', 'Antigua and Barbuda'),
    ('BS', 'The Bahamas', 'Bahamian', 'North America', 'en', 'The Bahamas'),
    ('BB', 'Barbados', 'Barbadian', 'North America', 'en', None),
    ('BZ', 'Belize', 'Belizean', 'North America', 'en', None),
    ('CA', 'Canada', 'Canadian', 'North America', 'en', None),
    ('CR', 'Costa Rica', 'Costa Rican', 'North America', 'es', None),
    ('CU', 'Cuba', 'Cuban', 'North America', 'es', None),
    ('DM', 'Dominica', 'Dominican', 'North America', 'en', None),
    ('DO', 'Dominican Republic', 'Dominican', 'North America', 'es', 'Dominican Republic'),
    ('SV', 'El Salvador', 'Salvadoran', 'North America', 'es', None),
    ('GD', 'Grenada', 'Grenadian', 'North America', 'en', None),
    ('GT', 'Guatemala', 'Guatemalan', 'North America', 'es', None),
    ('HT', 'Haiti', 'Haitian', 'North America', 'ht', None),
    ('HN', 'Honduras', 'Honduran', 'North America', 'es', None),
    ('JM', 'Jamaica', 'Jamaican', 'North America', 'en', None),
    ('MX', 'Mexico', 'Mexican', 'North America', 'es', None),
    ('NI', 'Nicaragua', 'Nicaraguan', 'North America', 'es', None),
    ('PA', 'Panama', 'Panamanian', 'North America', 'es', None),
    ('KN', 'Saint Kitts and Nevis', 'Kittitian', 'North America', 'en', 'Saint Kitts and Nevis'),
    ('LC', 'Saint Lucia', 'Saint Lucian', 'North America', 'en', 'Saint Lucia'),
    ('VC', 'Saint Vincent and the Grenadines', 'Vincentian', 'North America', 'en', 'Saint Vincent and the Grenadines'),
    ('TT', 'Trinidad and Tobago', 'Trinidadian', 'North America', 'en', 'Trinidad and Tobago'),
    ('US', 'United States', 'American', 'North America', 'en', 'United States'),
    # South America
    ('AR', 'Argentina', 'Argentine', 'South America', 'es', None),
    ('BO', 'Bolivia', 'Bolivian', 'South America', 'es', None),
    ('BR', 'Brazil', 'Brazilian', 'South America', 'pt', None),
    ('CL', 'Chile', 'Chilean', 'South America', 'es', None),
    ('CO', 'Colombia', 'Colombian', 'South America', 'es', None),
    ('EC', 'Ecuador', 'Ecuadorian', 'South America', 'es', None),
    ('GY', 'Guyana', 'Guyanese', 'South America', 'en', None),
    ('PY', 'Paraguay', 'Paraguayan', 'South America', 'es', None),
    ('PE', 'Peru', 'Peruvian', 'South America', 'es', None),
    ('SR', 'Suriname', 'Surinamese', 'South America', 'nl', None),
    ('UY', 'Uruguay', 'Uruguayan', 'South America', 'es', None),
    ('VE', 'Venezuela', 'Venezuelan', 'South America', 'es', None),
    # Oceania
    ('AU', 'Australia', 'Australian', 'Oceania', 'en', None),
    ('FJ', 'Fiji', 'Fijian', 'Oceania', 'en', None),
    ('KI', 'Kiribati', 'I-Kiribati', 'Oceania', 'en', None),
    ('MH', 'Marshall Islands', 'Marshallese', 'Oceania', 'mh', 'Marshall Islands'),
    ('FM', 'Micronesia', 'Micronesian', 'Oceania', 'en', 'Federated States of Micronesia'),
    ('NR', 'Nauru', 'Nauruan', 'Oceania', 'en', None),
    ('NZ', 'New Zealand', 'New Zealand', 'Oceania', 'en', 'New Zealand'),
    ('PW', 'Palau', 'Palauan', 'Oceania', 'en', 'Palau'),
    ('PG', 'Papua New Guinea', 'Papua New Guinean', 'Oceania', 'en', 'Papua New Guinea'),
    ('WS', 'Samoa', 'Samoan', 'Oceania', 'sm', 'Samoa'),
    ('SB', 'Solomon Islands', 'Solomon Islander', 'Oceania', 'en', 'Solomon Islands'),
    ('TO', 'Tonga', 'Tongan', 'Oceania', 'to', 'Tonga'),
    ('TV', 'Tuvalu', 'Tuvaluan', 'Oceania', 'en', 'Tuvalu'),
    ('VU', 'Vanuatu', 'Ni-Vanuatu', 'Oceania', 'en', 'Vanuatu'),
]

# enwiki titles whose ar sitelink is absent; hardcode the Arabic country name
AR_FALLBACK = {
    'State of Palestine': 'فلسطين',
    'East Timor': 'تيمور الشرقية',
}

API = 'https://en.wikipedia.org/w/api.php'
UA = {'User-Agent': 'fifirecipes-research/1.0 (+https://fifi.cooking)'}


def api_get(params: dict) -> dict:
    url = API + '?' + urllib.parse.urlencode({'format': 'json', 'formatversion': '2', **params})
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def arabic_names(titles: list[str]) -> dict[str, str]:
    """ar.wikipedia sitelink for each enwiki title, batched 50/request."""
    out: dict[str, str] = {}
    for i in range(0, len(titles), 50):
        batch = titles[i:i + 50]
        data = api_get({'action': 'query', 'prop': 'langlinks', 'lllang': 'ar',
                        'lllimit': '500',
                        'titles': '|'.join(batch), 'redirects': '1'})
        norm = {n['to']: n['from'] for n in data.get('query', {}).get('normalized', [])}
        for page in data.get('query', {}).get('pages', []):
            src = norm.get(page['title'], page['title'])
            lls = page.get('langlinks', [])
            if lls:
                out[src] = lls[0]['title']
        time.sleep(1)
    return out


def main() -> None:
    titles = {wiki or name: (iso, name, dem, cont, lang)
              for iso, name, dem, cont, lang, wiki in COUNTRIES}
    ar = arabic_names(list(titles))
    rows = []
    for order, (iso2, name_en, demonym, continent, wiki_lang, wiki) in enumerate(
            sorted(COUNTRIES, key=lambda c: c[1]), 1):
        wt = wiki or name_en
        name_ar = ar.get(wt, AR_FALLBACK.get(wt, ''))
        if not name_ar:
            print(f'WARN no Arabic title for {name_en} ({wt})', file=sys.stderr)
        rows.append({
            'iso2': iso2.lower(),
            'name_en': name_en,
            'name_ar': name_ar,
            'demonym': demonym,
            'continent': continent,
            'wiki_lang': wiki_lang,
            'order': order,
            'chapter': f'مطبخ {name_ar}' if name_ar else f'مطبخ {name_en}',
            'chapterEn': f'{name_en} Cuisine',
        })
    # merge tier data when tier_probe.py has run (tier 1/2 = in scope, 3 = skip)
    tiers_path = WORLD / 'tiers.json'
    if tiers_path.exists():
        tiers = json.loads(tiers_path.read_text())
        for r in rows:
            r['tier'] = tiers.get(r['iso2'], {}).get('tier', 3)
    WORLD.mkdir(exist_ok=True)
    path = WORLD / 'countries.yaml'
    path.write_text(yaml.safe_dump({'countries': rows}, allow_unicode=True, sort_keys=False))
    missing = [r['name_en'] for r in rows if not r['name_ar']]
    print(f'{len(rows)} countries -> {path}; missing Arabic names: {missing}')


if __name__ == '__main__':
    main()
