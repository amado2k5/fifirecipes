"""Shared vocabulary for the dietary pipeline (facts a recipe CONTAINS)."""
TAGS = {
    'pork': 'pork or any pig product: bacon, ham, lard, pancetta, chorizo, pork gelatin, chashu',
    'red_meat': 'beef, veal, lamb, mutton, goat, camel, offal, "meat"/mince, or a stock made from them',
    'poultry': 'chicken, duck, turkey, goose, quail, pigeon, or a stock made from them',
    'other_land_animal': 'rabbit, horse, frog, snail, insects, game not covered above',
    'finned_fish': 'any fish with fins: tuna, salmon, anchovy, sardine, fish sauce, bonito/dashi, caviar',
    'nonkosher_fish': 'fish without scales (catfish, eel, shark, monkfish, ray, sturgeon/caviar, swordfish)',
    'shellfish': 'crustaceans, molluscs, squid, octopus, oyster sauce, shrimp paste',
    'egg': 'eggs or egg products (mayonnaise, meringue, egg wash)',
    'dairy': 'milk, cream, butter, ghee, cheese, yogurt, whey, milk powder, condensed milk, labneh',
    'honey': 'honey',
    'gelatin': 'gelatin (any source) or marshmallow/jelly made with it',
    'animal_fat': 'lard, tallow, suet, schmaltz, rendered or "animal" fat, lamb tail fat',
    'alcohol': 'wine, beer, spirits, liqueur, mirin, sake, cooking wine, rum/brandy, wine vinegar',
    'alcohol_trace': 'vanilla or other extract, soy sauce, vinegar: trace alcohol only',
    'blood': 'blood or blood sausage',
}
# Tags the reviewer may put in `uncertain` instead of `contains` when it cannot tell.
UNCERTAIN_ONLY = {
    'animal_rennet_possible': 'cheese whose rennet is not stated',
    'stock_unspecified': 'stock, broth or bouillon whose base is not stated',
    'hidden_animal_unknown': 'a bought or compound item that may hide animal products '
                             '(puff pastry, Worcestershire sauce, pesto, candy, shortening)',
}
