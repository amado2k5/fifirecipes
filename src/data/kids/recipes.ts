import type { KidsRecipe } from '../../kids/types';
import { GROUPS } from '../../kids/theme';
import { MORE_KIDS_RECIPES } from './moreRecipes';

/**
 * Recipes for Cooking with Kids mode, written for children: one action per
 * step, short sentences, cups and spoons instead of grams, and every step
 * with a knife, heat or a blender marked for a grown-up.
 *
 * Other languages live in src/data/kids/translations/<lang>.json and are
 * merged in by scripts/generate-public-index.ts, which also checks that every
 * drawing exists and every text is translated.
 */
const FIRST_RECIPES: KidsRecipe[] = [
  {
    id: 'pancake-animals',
    group: 'breakfast',
    ages: '6-8',
    minutes: 30,
    servings: 4,
    noCook: false,
    allergens: ['eggs', 'milk', 'gluten'],
    cover: 'pancake-bear',
    title: { ar: 'بان كيك الحيوانات', en: 'Pancake Animals' },
    intro: {
      ar: 'فطائر بان كيك هشة تحوّلها إلى حيوانات تؤكل!',
      en: 'Fluffy pancakes you turn into animals you can eat!'
    },
    ingredients: [
      { art: 'flour', text: { ar: '1 كوب دقيق', en: '1 cup flour' } },
      { art: 'sugar', text: { ar: '1 ملعقة كبيرة سكر', en: '1 tablespoon sugar' } },
      { art: 'baking-powder', text: { ar: '2 ملعقة صغيرة بيكنج بودر', en: '2 teaspoons baking powder' } },
      { art: 'egg', text: { ar: '1 بيضة', en: '1 egg' } },
      { art: 'milk', text: { ar: '1 كوب لبن', en: '1 cup milk' } },
      { art: 'oil', text: { ar: '2 ملعقة كبيرة زيت', en: '2 tablespoons oil' } },
      { art: 'banana', text: { ar: '1 موزة', en: '1 banana' } },
      { art: 'blueberries', text: { ar: 'حفنة توت أزرق', en: 'A handful of blueberries' } },
      { art: 'strawberry', text: { ar: '4 حبات فراولة', en: '4 strawberries' } }
    ],
    tools: ['bowl', 'whisk', 'measuring-cup', 'pan', 'spatula', 'butter-knife', 'plate'],
    steps: [
      {
        act: 'pour',
        items: ['flour', 'sugar', 'baking-powder'],
        text: { ar: 'ضع الدقيق والسكر والبيكنج بودر في السلطانية.', en: 'Put the flour, sugar and baking powder in the bowl.' }
      },
      {
        act: 'crack',
        items: ['egg'],
        text: { ar: 'اكسر البيضة في كوب أولاً، ثم صبها في السلطانية.', en: 'Crack the egg into a cup first, then tip it into the bowl.' }
      },
      {
        act: 'pour',
        items: ['milk', 'oil'],
        text: { ar: 'صب اللبن والزيت.', en: 'Pour in the milk and the oil.' }
      },
      {
        act: 'whisk',
        text: { ar: 'اخفق حتى يصبح الخليط ناعماً بدون كتل كبيرة.', en: 'Whisk until the batter is smooth, with no big lumps.' }
      },
      {
        act: 'cook',
        items: ['pancake'],
        adult: 'stove',
        text: {
          ar: 'شخص كبير يصب دائرة كبيرة ودائرتين صغيرتين للأذنين في الطاسة الساخنة.',
          en: 'A grown-up pours one big circle and two small ear circles into the hot pan.'
        }
      },
      {
        act: 'flip',
        items: ['pancake'],
        adult: 'stove',
        text: { ar: 'عندما تظهر فقاعات على الوجه، يقلبها الشخص الكبير.', en: 'When bubbles pop on top, the grown-up flips it over.' }
      },
      {
        act: 'cut',
        items: ['banana', 'strawberry'],
        tool: 'butter-knife',
        text: { ar: 'قطّع الموز والفراولة شرائح بسكين الزبدة.', en: 'Slice the banana and strawberries with a butter knife.' }
      },
      {
        act: 'arrange',
        items: ['banana', 'blueberries', 'strawberry'],
        text: {
          ar: 'اصنع وجه دبدوب: أنف من الموز، وعيون من التوت، وخدود من الفراولة!',
          en: 'Make a bear face: a banana nose, blueberry eyes and strawberry cheeks!'
        }
      }
    ],
    tip: { ar: 'جرّب أرنباً بأذنين طويلتين، أو قطة بشوارب من الموز.', en: 'Try a bunny with long ears, or a cat with banana whiskers.' }
  },
  {
    id: 'rainbow-parfait',
    group: 'breakfast',
    ages: '3-5',
    minutes: 10,
    servings: 2,
    noCook: true,
    allergens: ['milk', 'gluten'],
    cover: 'parfait',
    title: { ar: 'بارفيه قوس قزح', en: 'Rainbow Yogurt Parfait' },
    intro: {
      ar: 'طبقات ملونة من الزبادي والفاكهة في كوب شفاف، مثل قوس قزح!',
      en: 'Colourful layers of yogurt and fruit in a clear glass, just like a rainbow!'
    },
    ingredients: [
      { art: 'yogurt', text: { ar: '2 كوب زبادي', en: '2 cups plain yogurt' } },
      { art: 'strawberry', text: { ar: '6 حبات فراولة', en: '6 strawberries' } },
      { art: 'orange', text: { ar: '1 يوسفية أو برتقالة صغيرة', en: '1 mandarin or small orange' } },
      { art: 'banana', text: { ar: '1 موزة', en: '1 banana' } },
      { art: 'kiwi', text: { ar: '1 كيوي', en: '1 kiwi' } },
      { art: 'blueberries', text: { ar: 'حفنة توت أزرق', en: 'A handful of blueberries' } },
      { art: 'granola', text: { ar: '4 ملاعق كبيرة جرانولا', en: '4 tablespoons granola' } },
      { art: 'honey', text: { ar: '2 ملعقة صغيرة عسل', en: '2 teaspoons honey' } }
    ],
    tools: ['glass', 'spoon', 'butter-knife', 'board'],
    steps: [
      {
        act: 'peel',
        items: ['orange', 'banana'],
        text: { ar: 'قشّر اليوسفية والموزة، وفصّص اليوسفية.', en: 'Peel the mandarin and the banana. Pull the mandarin into pieces.' }
      },
      {
        act: 'cut',
        items: ['banana', 'strawberry'],
        tool: 'butter-knife',
        text: { ar: 'قطّع الموز والفراولة بسكين الزبدة.', en: 'Cut the banana and strawberries with a butter knife.' }
      },
      {
        act: 'cut',
        items: ['kiwi'],
        adult: 'knife',
        text: { ar: 'شخص كبير يقشّر الكيوي ويقطعه.', en: 'A grown-up peels and cuts the kiwi.' }
      },
      {
        act: 'pour',
        items: ['yogurt'],
        on: 'glass',
        text: { ar: 'ضع ملعقتين من الزبادي في قاع كل كوب.', en: 'Put 2 spoons of yogurt in the bottom of each glass.' }
      },
      {
        act: 'layer',
        items: ['strawberry', 'orange', 'banana', 'kiwi', 'blueberries'],
        text: {
          ar: 'أضف لوناً واحداً من الفاكهة كل مرة: أحمر، برتقالي، أصفر، أخضر، أزرق!',
          en: 'Add one fruit colour at a time: red, orange, yellow, green, blue!'
        }
      },
      {
        act: 'sprinkle',
        items: ['granola'],
        on: 'glass',
        text: { ar: 'ضع قليلاً من الزبادي فوقها، ثم رش الجرانولا.', en: 'Add a little more yogurt on top, then sprinkle the granola.' }
      },
      {
        act: 'drizzle',
        items: ['honey'],
        on: 'parfait',
        text: { ar: 'زيّنه بقليل من العسل، وكُل بالملعقة!', en: 'Drizzle a little honey and eat it with a spoon!' }
      }
    ],
    tip: { ar: 'استخدم كوباً شفافاً لترى قوس قزح الخاص بك.', en: 'Use a clear glass so you can see your rainbow.' }
  },
  {
    id: 'ants-on-a-log',
    group: 'snack',
    ages: '3-5',
    minutes: 10,
    servings: 2,
    noCook: true,
    allergens: ['peanuts'],
    cover: 'ants-on-a-log',
    title: { ar: 'نمل على جذع شجرة', en: 'Ants on a Log' },
    intro: {
      ar: 'عيدان كرفس مقرمشة عليها صف من "النمل" اللذيذ.',
      en: 'Crunchy celery logs with a line of yummy "ants" on top.'
    },
    ingredients: [
      { art: 'celery', text: { ar: '4 عيدان كرفس', en: '4 celery sticks' } },
      {
        art: 'peanut-butter',
        text: { ar: '4 ملاعق كبيرة زبدة فول سوداني (أو طحينة أو جبنة كريمي)', en: '4 tablespoons peanut butter (or tahini or cream cheese)' }
      },
      { art: 'raisins', text: { ar: '2 ملعقة كبيرة زبيب', en: '2 tablespoons raisins' } }
    ],
    tools: ['board', 'knife', 'butter-knife', 'plate'],
    steps: [
      {
        act: 'rinse',
        items: ['celery'],
        text: { ar: 'اغسل الكرفس تحت الماء وجففه.', en: 'Wash the celery under running water and dry it.' }
      },
      {
        act: 'cut',
        items: ['celery'],
        adult: 'knife',
        text: { ar: 'شخص كبير يقطع كل عود إلى 3 جذوع قصيرة.', en: 'A grown-up cuts each stick into 3 short logs.' }
      },
      {
        act: 'spread',
        items: ['peanut-butter'],
        on: 'celery',
        text: { ar: 'املأ كل جذع بزبدة الفول السوداني بسكين الزبدة.', en: 'Fill each log with peanut butter using a butter knife.' }
      },
      {
        act: 'arrange',
        items: ['raisins'],
        on: 'celery',
        text: { ar: 'ضع "نمل" الزبيب في صف فوق كل جذع.', en: 'Put the raisin "ants" in a line on top of each log.' }
      },
      {
        act: 'eat',
        items: ['ants-on-a-log'],
        text: { ar: 'عُدّ النمل، ثم كُل بقرمشة!', en: 'Count your ants, then crunch!' }
      }
    ],
    tip: { ar: 'جرّب التوت البري المجفف ليصبح "دعسوقة" حمراء.', en: 'Try dried cranberries to make red "ladybugs".' }
  },
  {
    id: 'rainbow-fruit-kebabs',
    group: 'snack',
    ages: '3-5',
    minutes: 15,
    servings: 3,
    noCook: true,
    allergens: [],
    cover: 'fruit-kebab',
    title: { ar: 'أسياخ فاكهة قوس قزح', en: 'Rainbow Fruit Kebabs' },
    intro: {
      ar: 'اشبك الفاكهة في أعواد بألوان قوس قزح كلها.',
      en: 'Thread fruit onto sticks in every colour of the rainbow.'
    },
    ingredients: [
      { art: 'strawberry', text: { ar: '6 حبات فراولة', en: '6 strawberries' } },
      { art: 'orange', text: { ar: '2 يوسفية', en: '2 mandarins' } },
      { art: 'pineapple', text: { ar: '6 قطع أناناس', en: '6 pineapple chunks' } },
      { art: 'kiwi', text: { ar: '2 كيوي', en: '2 kiwis' } },
      { art: 'blueberries', text: { ar: '12 حبة توت أزرق', en: '12 blueberries' } },
      { art: 'grapes', text: { ar: '6 حبات عنب أحمر', en: '6 red grapes' } }
    ],
    tools: ['skewer', 'board', 'knife', 'plate'],
    steps: [
      {
        act: 'rinse',
        items: ['strawberry', 'grapes', 'blueberries'],
        text: { ar: 'اغسل كل الفاكهة وجففها.', en: 'Wash all the fruit and dry it.' }
      },
      {
        act: 'cut',
        items: ['kiwi', 'pineapple'],
        adult: 'knife',
        text: { ar: 'شخص كبير يقشّر الكيوي ويقطع الفاكهة الكبيرة مكعبات.', en: 'A grown-up peels the kiwi and cuts the big fruit into chunks.' }
      },
      {
        act: 'peel',
        items: ['orange'],
        text: { ar: 'قشّر اليوسفية وفصّصها.', en: 'Peel the mandarins and pull them into pieces.' }
      },
      {
        act: 'thread',
        items: ['strawberry', 'orange', 'pineapple', 'kiwi', 'blueberries', 'grapes'],
        text: {
          ar: 'اشبك الفاكهة في العود بترتيب قوس قزح: أحمر، برتقالي، أصفر، أخضر، أزرق، بنفسجي.',
          en: 'Push the fruit onto a stick in rainbow order: red, orange, yellow, green, blue, purple.'
        }
      },
      {
        act: 'eat',
        items: ['fruit-kebab'],
        text: { ar: 'امسك العود بحذر، فطرفه مدبب!', en: 'Hold the stick carefully: the tip is pointy!' }
      }
    ],
    tip: { ar: 'اغمسها في زبادي بالعسل.', en: 'Dip them in yogurt mixed with a little honey.' }
  },
  {
    id: 'date-energy-balls',
    group: 'snack',
    ages: '3-5',
    minutes: 25,
    servings: 4,
    noCook: true,
    allergens: ['sesame'],
    cover: 'energy-balls',
    title: { ar: 'كرات التمر والشوفان', en: 'Date & Oat Energy Balls' },
    intro: {
      ar: 'كرات حلوة من التمر بدون فرن، تكوّرها بيديك!',
      en: 'Sweet date balls with no oven: you roll them with your hands!'
    },
    ingredients: [
      { art: 'dates', text: { ar: '1 كوب بلح طري منزوع النوى', en: '1 cup soft pitted dates' } },
      { art: 'water', text: { ar: 'ماء دافئ', en: 'Warm water' } },
      { art: 'oats', text: { ar: '1 كوب شوفان', en: '1 cup oats' } },
      { art: 'tahini', text: { ar: '2 ملعقة كبيرة طحينة', en: '2 tablespoons tahini' } },
      { art: 'cocoa', text: { ar: '1 ملعقة كبيرة كاكاو', en: '1 tablespoon cocoa powder' } },
      { art: 'coconut', text: { ar: '3 ملاعق كبيرة جوز هند مبشور', en: '3 tablespoons shredded coconut' } }
    ],
    tools: ['bowl', 'fork', 'spoon', 'plate', 'fridge'],
    steps: [
      {
        act: 'soak',
        items: ['dates', 'water'],
        adult: 'hot',
        timer: 10,
        text: { ar: 'شخص كبير يغطي البلح بماء دافئ. انتظر 10 دقائق.', en: 'A grown-up covers the dates with warm water. Wait 10 minutes.' }
      },
      {
        act: 'mash',
        items: ['dates'],
        text: { ar: 'صفِّ الماء، ثم اهرس البلح بالشوكة حتى يصبح عجينة.', en: 'Pour off the water, then mash the dates with a fork into a paste.' }
      },
      {
        act: 'pour',
        items: ['oats', 'tahini', 'cocoa'],
        text: { ar: 'أضف الشوفان والطحينة والكاكاو.', en: 'Add the oats, tahini and cocoa.' }
      },
      {
        act: 'knead',
        items: ['dough-ball'],
        text: { ar: 'قلّب بالملعقة، ثم اعجن بيديك النظيفتين.', en: 'Stir with a spoon, then squish it all together with clean hands.' }
      },
      {
        act: 'roll',
        items: ['energy-balls'],
        text: { ar: 'كوّر كرات صغيرة بحجم البلية الكبيرة.', en: 'Roll little balls, as big as a large marble.' }
      },
      {
        act: 'dip',
        items: ['coconut'],
        text: { ar: 'دحرج كل كرة في جوز الهند كأنها ثلج!', en: 'Roll each ball in coconut, like snow!' }
      },
      {
        act: 'chill',
        items: ['energy-balls'],
        timer: 20,
        text: { ar: 'ضعها في الثلاجة 20 دقيقة، ثم استمتع!', en: 'Put them in the fridge for 20 minutes, then enjoy!' }
      }
    ],
    tip: { ar: 'دحرج بعضها في الكاكاو وبعضها في جوز الهند لطبق بلونين.', en: 'Roll some in cocoa and some in coconut for a two-colour plate.' }
  },
  {
    id: 'pita-pizza-faces',
    group: 'savoury',
    ages: '3-5',
    minutes: 25,
    servings: 4,
    noCook: false,
    allergens: ['milk', 'gluten'],
    cover: 'pizza-face',
    title: { ar: 'بيتزا العيش بالوجوه الضاحكة', en: 'Pita Pizza Faces' },
    intro: {
      ar: 'بيتزا صغيرة على العيش، وكل واحدة لها وجه مضحك تصنعه أنت!',
      en: 'Little pizzas on flatbread, each with a funny face you make yourself!'
    },
    ingredients: [
      { art: 'pita', text: { ar: '4 أرغفة عيش بلدي أو شامي صغيرة', en: '4 small pita or baladi breads' } },
      { art: 'tomato-sauce', text: { ar: '8 ملاعق كبيرة صلصة طماطم', en: '8 tablespoons tomato sauce' } },
      { art: 'cheese', text: { ar: '1 كوب جبنة موتزاريلا مبشورة', en: '1 cup grated mozzarella' } },
      { art: 'olives', text: { ar: '8 شرائح زيتون أسود', en: '8 black olive slices' } },
      { art: 'bell-pepper', text: { ar: '1 فلفل أخضر صغير، يقطعه شخص كبير شرائح', en: '1 small green pepper, cut into strips by a grown-up' } },
      { art: 'cherry-tomatoes', text: { ar: '4 حبات طماطم شيري مقطوعة نصفين', en: '4 cherry tomatoes, cut in half' } }
    ],
    tools: ['tray', 'spoon', 'oven', 'plate'],
    steps: [
      {
        act: 'arrange',
        items: ['pita'],
        on: 'tray',
        text: { ar: 'ضع الأرغفة على صينية الفرن.', en: 'Put the breads on the baking tray.' }
      },
      {
        act: 'spread',
        items: ['tomato-sauce'],
        on: 'pita',
        tool: 'spoon',
        text: { ar: 'افرد ملعقتين من الصلصة على كل رغيف بظهر الملعقة.', en: 'Spread 2 spoons of sauce on each bread with the back of a spoon.' }
      },
      {
        act: 'sprinkle',
        items: ['cheese'],
        on: 'pita',
        text: { ar: 'رش الجبنة على الرغيف كله.', en: 'Sprinkle cheese all over the bread.' }
      },
      {
        act: 'arrange',
        items: ['olives', 'cherry-tomatoes', 'bell-pepper'],
        on: 'pita',
        text: { ar: 'اصنع وجهاً: عيون من الزيتون، وأنف من الطماطم، وابتسامة من الفلفل.', en: 'Make a face: olive eyes, a tomato nose and a pepper smile.' }
      },
      {
        act: 'bake',
        items: ['pizza-face'],
        adult: 'oven',
        timer: 10,
        text: {
          ar: 'شخص كبير يخبزها في فرن 200 درجة لمدة 10 دقائق تقريباً حتى تسيح الجبنة.',
          en: 'A grown-up bakes them at 200°C (400°F) for about 10 minutes, until the cheese melts.'
        }
      },
      {
        act: 'cool',
        items: ['pizza-face'],
        timer: 3,
        text: { ar: 'انتظر 3 دقائق، فالجبنة الساخنة تحرق! ثم كُل.', en: 'Wait 3 minutes, because hot cheese burns! Then eat.' }
      }
    ],
    tip: { ar: 'اصنع شعراً مضحكاً من شرائح فلفل زيادة.', en: 'Make silly hair with extra pepper strips.' }
  },
  {
    id: 'foul-face-sandwich',
    group: 'breakfast',
    ages: '6-8',
    minutes: 15,
    servings: 2,
    noCook: false,
    allergens: ['gluten'],
    cover: 'foul-sandwich',
    title: { ar: 'ساندويتش الفول الضاحك', en: 'Funny-Face Foul Sandwich' },
    intro: {
      ar: 'فطار الصباح المصري، ولكن بوجه مبتسم!',
      en: 'The Egyptian breakfast favourite, with a smiling face!'
    },
    ingredients: [
      { art: 'foul', text: { ar: '1 علبة فول مدمس', en: '1 can cooked fava beans (foul)' } },
      { art: 'olive-oil', text: { ar: '1 ملعقة كبيرة زيت زيتون', en: '1 tablespoon olive oil' } },
      { art: 'lemon', text: { ar: 'نصف ليمونة', en: 'Half a lemon' } },
      { art: 'cumin', text: { ar: 'رشة كمون', en: 'A pinch of cumin' } },
      { art: 'salt', text: { ar: 'رشة ملح', en: 'A pinch of salt' } },
      { art: 'pita', text: { ar: '2 رغيف عيش بلدي', en: '2 baladi or pita breads' } },
      { art: 'cucumber', text: { ar: '1 خيارة صغيرة شرائح', en: '1 small cucumber, sliced' } },
      { art: 'tomato', text: { ar: '1 طماطم صغيرة شرائح', en: '1 small tomato, sliced' } }
    ],
    tools: ['bowl', 'fork', 'spoon', 'microwave', 'plate'],
    steps: [
      {
        act: 'microwave',
        items: ['foul'],
        adult: 'microwave',
        text: { ar: 'شخص كبير يسخن الفول في الميكروويف دقيقة واحدة.', en: 'A grown-up warms the foul in the microwave for 1 minute.' }
      },
      {
        act: 'mash',
        items: ['foul'],
        text: { ar: 'اهرس الفول بالشوكة. هرس، هرس!', en: 'Mash the foul with a fork. Squish, squish!' }
      },
      {
        act: 'squeeze',
        items: ['lemon'],
        text: { ar: 'اعصر الليمونة على الفول، وانتبه للبذور!', en: 'Squeeze the lemon over the foul. Watch out for seeds!' }
      },
      {
        act: 'pour',
        items: ['olive-oil', 'cumin', 'salt'],
        text: { ar: 'أضف الزيت والكمون والملح، ثم قلّب.', en: 'Add the oil, cumin and salt, then stir.' }
      },
      {
        act: 'fill',
        items: ['foul'],
        on: 'pita',
        text: { ar: 'افتح جيب العيش بحذر واملأه بالفول بالملعقة.', en: 'Open the bread pocket carefully and spoon the foul inside.' }
      },
      {
        act: 'arrange',
        items: ['cucumber', 'tomato'],
        text: { ar: 'اصنع له وجهاً: عيون من الخيار، وابتسامة من الطماطم!', en: 'Give it a face: cucumber eyes and a tomato smile!' }
      }
    ],
    tip: { ar: 'أضف بيضة مسلوقة لتصبح أنفاً مضحكاً.', en: 'Add a boiled egg for a funny nose.' }
  },
  {
    id: 'ghorayeba',
    group: 'sweet',
    ages: '6-8',
    minutes: 40,
    servings: 10,
    noCook: false,
    allergens: ['milk', 'gluten', 'nuts'],
    cover: 'ghorayeba',
    title: { ar: 'الغريبة', en: 'Ghorayeba Butter Cookies' },
    intro: {
      ar: 'بسكويت العيد الأبيض الذي يذوب في الفم، بثلاثة مكونات فقط!',
      en: 'Snowy-white Eid cookies that melt in your mouth, with just three ingredients!'
    },
    ingredients: [
      { art: 'butter', text: { ar: 'نصف كوب زبدة أو سمن طري', en: '½ cup soft butter or ghee' } },
      { art: 'powdered-sugar', text: { ar: 'نصف كوب سكر بودرة', en: '½ cup powdered sugar' } },
      { art: 'flour', text: { ar: '1 ونصف كوب دقيق', en: '1½ cups flour' } },
      { art: 'pistachios', text: { ar: '20 حبة فستق أو لوز', en: '20 pistachios or almonds' } }
    ],
    tools: ['bowl', 'spoon', 'measuring-cup', 'tray', 'oven'],
    steps: [
      {
        act: 'stir',
        items: ['butter', 'powdered-sugar'],
        text: { ar: 'اخلط الزبدة الطرية مع السكر البودرة حتى يصبح الخليط كريمياً وأبيض.', en: 'Mix the soft butter and powdered sugar until creamy and white.' }
      },
      {
        act: 'pour',
        items: ['flour'],
        text: { ar: 'أضف الدقيق شيئاً فشيئاً.', en: 'Add the flour a little at a time.' }
      },
      {
        act: 'knead',
        items: ['dough-ball'],
        text: { ar: 'اعجن بيديك حتى تصبح عجينة طرية.', en: 'Squeeze it with your hands into a soft dough.' }
      },
      {
        act: 'roll',
        items: ['dough-ball'],
        text: { ar: 'كوّر كرات صغيرة وضعها على الصينية، ثم اضغطها قليلاً.', en: 'Roll small balls, put them on the tray and press them down a little.' }
      },
      {
        act: 'press',
        items: ['pistachios'],
        text: { ar: 'اضغط حبة فستق فوق كل قطعة.', en: 'Press one pistachio on top of each cookie.' }
      },
      {
        act: 'bake',
        items: ['ghorayeba'],
        adult: 'oven',
        timer: 15,
        text: {
          ar: 'شخص كبير يخبزها على 160 درجة لمدة 15 دقيقة. يجب أن تبقى بيضاء!',
          en: 'A grown-up bakes them at 160°C (320°F) for 15 minutes. They should stay white!'
        }
      },
      {
        act: 'cool',
        items: ['ghorayeba'],
        timer: 20,
        text: { ar: 'اتركها تبرد تماماً، فالغريبة الدافئة تتكسر بسهولة.', en: 'Let them cool completely: warm ghorayeba breaks easily.' }
      }
    ],
    tip: { ar: 'شكّل العجين قلوباً أو هلالاً بدلاً من الكرات.', en: 'Shape the dough into hearts or moons instead of balls.' }
  },
  {
    id: 'chocolate-banana-pops',
    group: 'sweet',
    ages: '3-5',
    minutes: 20,
    servings: 4,
    noCook: false,
    allergens: ['milk'],
    cover: 'banana-pops',
    title: { ar: 'مصاصات الموز بالشوكولاتة', en: 'Chocolate Banana Pops' },
    intro: {
      ar: 'موز على عود، مغموس في الشوكولاتة ومزين بالألوان، ثم يتجمد!',
      en: 'Bananas on a stick, dipped in chocolate, covered in sprinkles, then frozen!'
    },
    ingredients: [
      { art: 'banana', text: { ar: '2 موزة', en: '2 bananas' } },
      { art: 'stick', text: { ar: '4 أعواد آيس كريم', en: '4 ice-cream sticks' } },
      { art: 'chocolate', text: { ar: '100 جرام شوكولاتة', en: '100 g (3½ oz) chocolate' } },
      { art: 'sprinkles', text: { ar: 'حلوى ملونة للتزيين', en: 'Colourful sprinkles' } }
    ],
    tools: ['board', 'butter-knife', 'microwave', 'bowl', 'tray', 'fridge'],
    steps: [
      {
        act: 'peel',
        items: ['banana'],
        text: { ar: 'قشّر الموز.', en: 'Peel the bananas.' }
      },
      {
        act: 'cut',
        items: ['banana'],
        tool: 'butter-knife',
        text: { ar: 'اقطع كل موزة نصفين بسكين الزبدة.', en: 'Cut each banana in half with a butter knife.' }
      },
      {
        act: 'press',
        items: ['stick'],
        text: { ar: 'أدخل عوداً في الطرف المقطوع من كل نصف.', en: 'Push a stick into the cut end of each half.' }
      },
      {
        act: 'microwave',
        items: ['chocolate'],
        adult: 'microwave',
        text: { ar: 'شخص كبير يذوّب الشوكولاتة في الميكروويف، 30 ثانية كل مرة.', en: 'A grown-up melts the chocolate in the microwave, 30 seconds at a time.' }
      },
      {
        act: 'dip',
        items: ['banana-pops'],
        text: { ar: 'اغمس الموزة في الشوكولاتة وأدرها.', en: 'Dip each banana into the chocolate and turn it.' }
      },
      {
        act: 'sprinkle',
        items: ['sprinkles'],
        on: 'banana-pops',
        text: { ar: 'بسرعة! رش الحلوى الملونة قبل أن تجمد الشوكولاتة.', en: 'Quick! Add sprinkles before the chocolate sets.' }
      },
      {
        act: 'freeze',
        items: ['banana-pops'],
        text: { ar: 'ضعها على صينية في الفريزر لمدة ساعتين.', en: 'Put them on a tray in the freezer for 2 hours.' }
      }
    ],
    tip: { ar: 'جرّب بسكويت مطحون بدلاً من الحلوى الملونة.', en: 'Try crushed biscuits instead of sprinkles.' }
  },
  {
    id: 'strawberry-banana-smoothie',
    group: 'drink',
    ages: '3-5',
    minutes: 10,
    servings: 2,
    noCook: false,
    allergens: ['milk'],
    cover: 'smoothie',
    title: { ar: 'سموذي الفراولة والموز', en: 'Strawberry-Banana Smoothie' },
    intro: {
      ar: 'مشروب وردي بارد ولذيذ تصنعه في دقائق.',
      en: 'A cold, pink, yummy drink you make in minutes.'
    },
    ingredients: [
      { art: 'strawberry', text: { ar: '8 حبات فراولة', en: '8 strawberries' } },
      { art: 'banana', text: { ar: '1 موزة', en: '1 banana' } },
      { art: 'yogurt', text: { ar: 'نصف كوب زبادي', en: '½ cup yogurt' } },
      { art: 'milk', text: { ar: '1 كوب لبن', en: '1 cup milk' } },
      { art: 'honey', text: { ar: '1 ملعقة صغيرة عسل', en: '1 teaspoon honey' } },
      { art: 'ice', text: { ar: '4 مكعبات ثلج', en: '4 ice cubes' } }
    ],
    tools: ['blender', 'measuring-cup', 'glass'],
    steps: [
      {
        act: 'rinse',
        items: ['strawberry'],
        text: { ar: 'اغسل الفراولة وانزع أوراقها الخضراء.', en: 'Wash the strawberries and pull off the green leaves.' }
      },
      {
        act: 'peel',
        items: ['banana'],
        text: { ar: 'قشّر الموزة وقطّعها بيديك.', en: 'Peel the banana and break it into pieces with your hands.' }
      },
      {
        act: 'pour',
        items: ['strawberry', 'banana', 'yogurt'],
        on: 'blender',
        text: { ar: 'ضع الفاكهة والزبادي في الخلاط.', en: 'Put the fruit and yogurt into the blender.' }
      },
      {
        act: 'pour',
        items: ['milk', 'honey', 'ice'],
        on: 'blender',
        text: { ar: 'أضف اللبن والعسل والثلج، وأغلق الغطاء جيداً!', en: 'Add the milk, honey and ice. Put the lid on tight!' }
      },
      {
        act: 'blend',
        items: ['strawberry', 'banana'],
        adult: 'blender',
        text: { ar: 'شخص كبير يشغّل الخلاط حتى يصبح ناعماً ووردياً.', en: 'A grown-up blends it until smooth and pink.' }
      },
      {
        act: 'pour',
        items: ['smoothie'],
        on: 'glass',
        text: { ar: 'صبه في الأكواب، وبالهنا والشفا!', en: 'Pour it into glasses and say cheers!' }
      }
    ],
    tip: { ar: 'جمّد الباقي في قوالب المصاصات.', en: 'Freeze any leftovers in ice-pop moulds.' }
  }
];

/** Every kids recipe, grouped in the order of the filter chips (breakfast first). */
export const KIDS_RECIPES: KidsRecipe[] = [...FIRST_RECIPES, ...MORE_KIDS_RECIPES]
  .map((recipe, index) => ({ recipe, index }))
  .sort((a, b) => GROUPS.indexOf(a.recipe.group) - GROUPS.indexOf(b.recipe.group) || a.index - b.index)
  .map(({ recipe }) => recipe);
