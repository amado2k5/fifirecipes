"""Deterministic keyword layer: what a recipe visibly contains (ingredient names + steps).

Independent of the AI reviewers; derive.py combines the two (union = conservative).
"""
import re, sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1] / 'world'))
from textnorm import norm_latin
from halal import gate  # the repo's existing halal gate and its rules file

def _rx(words): return re.compile(r'(?<![a-z])(' + '|'.join(sorted(map(re.escape, words), key=len, reverse=True)) + r')(?![a-z])')
# plant-based look-alikes that must not match
PLANT = _rx(['coconut milk','coconut cream','coconut butter','almond milk','soy milk','soya milk','oat milk','rice milk',
 'cashew milk','nut milk','plant milk','peanut butter','almond butter','nut butter','cocoa butter','shea butter','cashew cream',
 'vegan butter','sausage shaped','sausage-shaped','vegan cheese','vegan mayonnaise','egg replacer','flax egg','eggplant','egg plant','butternut','butterbean','butter bean',
 'buttercup','butterscotch','honeydew','cream of tartar','sweet potato','vegetable stock','vegetable broth','mushroom stock',
 'vegetable bouillon','honeysuckle','coconut yogurt','soy yogurt','soy cheese','eggless'])
RX = {
 'pork': _rx(['pork','bacon','ham','pancetta','prosciutto','lard','chorizo','salami','pepperoni','gammon','chashu','char siu','pig','boar']),
 'red_meat': _rx(['beef','veal','lamb','mutton','goat','camel','steak','mince','minced meat','ground meat','meat','liver','kidney','tripe','tongue','oxtail','brisket','shank','ribs','sirloin','kofta','kofte','kebab','shawarma','meatball','meatballs','offal','brain','bone marrow','bone broth','beef stock','lamb stock','meat stock','meat broth','pastrami','salami','sujuk','sucuk','basturma','pasturma']),
 'poultry': _rx(['chicken','duck','turkey','goose','quail','pigeon','squab','poultry','hen','rooster','chicken stock','chicken broth','chicken bouillon']),
 'other_land_animal': _rx(['rabbit','horse','frog','snail','escargot','cricket','venison','deer','ostrich','kangaroo','donkey']),
 'finned_fish': _rx(['fish','tuna','salmon','anchovy','anchovies','sardine','sardines','cod','tilapia','trout','mackerel','sea bass','bass','haddock','herring','bonito','dashi','caviar','roe','halibut','snapper','mullet','sole','carp','fish sauce','fish stock','sea bream','bream','pollock','hake','whitebait','kingfish','swordfish','eel','catfish','shark','monkfish']),
 'nonkosher_fish': _rx(['eel','catfish','shark','monkfish','ray','sturgeon','caviar','swordfish','anglerfish','squid','octopus']),
 'shellfish': _rx(['shrimp','shrimps','prawn','prawns','crab','lobster','crayfish','crawfish','squid','calamari','octopus','cuttlefish','clam','clams','mussel','mussels','oyster','oysters','scallop','scallops','shellfish','seafood','oyster sauce','shrimp paste','langoustine','abalone','cockle','cockles','sea urchin','conch','snail']),
 'egg': _rx(['egg','eggs','egg yolk','egg yolks','egg white','egg whites','mayonnaise','mayo','meringue','aioli','custard']),
 'dairy': _rx(['milk','cream','butter','ghee','cheese','yogurt','yoghurt','labneh','whey','casein','buttermilk','ricotta','mozzarella','parmesan','feta','halloumi','paneer','mascarpone','kashk','qishta','ashta','kaymak','condensed milk','evaporated milk','milk powder','custard','ice cream','cheddar','cream cheese','sour cream','creme fraiche','crème fraîche','curd','khoa','khoya','samneh','smen','jibneh','baladi cheese','rumi cheese','gruyere','gouda','brie','pecorino','mozarella','kefir']),
 'honey': _rx(['honey']),
 'gelatin': _rx(['gelatin','gelatine','marshmallow','marshmallows','jello','jelly crystals']),
 'animal_fat': _rx(['lard','tallow','suet','schmaltz','animal fat','dripping','drippings','rendered fat','tail fat','sheep tail fat','alya','lamb fat','beef fat','chicken fat','duck fat','goose fat','bacon fat','fat tail','kidney fat']),
 'blood': _rx(['blood','blood sausage','black pudding','morcilla','boudin noir']),
}
NEG_PREFIX = re.compile(r'\b(without|no|non|free|vegan|vegetarian|plant based|dairy free|egg free)\b')

GELATIN_QUAL = re.compile(r'(halal|beef|bovine)\s*\(?(beef|bovine)?\)?\s*(gelatin)')

def scan(rec):
    """-> {tag: [evidence strings]} for one compact recipe (extract.py format)."""
    found = {}
    def hit(tag, text, where):
        found.setdefault(tag, []).append(f'{where}: {text[:80]}')
    for line in rec['ingredients']:
        name = GELATIN_QUAL.sub(r'\3', norm_latin(line.split('|')[0]))
        plain = PLANT.sub(' ', name)
        for tag, rx in RX.items():
            m = rx.search(plain)
            if m: hit(tag, m.group(1), 'ingredient')
        st, why = gate(line.split('|')[0])
        if st == 'haram':
            for w in why:
                if any(k in w for k in ('vanilla','extract','wine vinegar')): found.setdefault('alcohol_trace', []).append(f'ingredient: {w}')
                elif w in ('gelatin','gelatine','rennet'): pass
                elif w in ('lard','pork','bacon','ham','pig','boar') or 'pork' in w: pass
                else: hit('alcohol', w, 'ingredient')
    stext = ' '.join(norm_latin(s) for s in rec['steps'])
    stext = PLANT.sub(' ', stext)
    # Steps only add things that cooks bring in without listing: alcohol, lard/fat, gelatin, blood, pork, stock.
    for tag in ('pork', 'animal_fat', 'gelatin', 'blood'):
        m = RX[tag].search(stext)
        if m: hit(tag, m.group(1), 'step')
    st, why = gate(' '.join(rec['steps']))
    for w in why:
        if st == 'haram' and not any(k in w for k in ('pork','lard','bacon','ham','gelatin','rennet','vanilla','extract')): hit('alcohol', w, 'step')
    return found
