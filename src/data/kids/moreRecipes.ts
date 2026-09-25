import type { KidsIngredient, KidsRecipe, KidsStep } from '../../kids/types';

// Shorthand for the recipes below: Arabic first, then English.
const t = (ar: string, en: string) => ({ ar, en });
const ing = (art: string, ar: string, en: string): KidsIngredient => ({ art, text: t(ar, en) });
const step = (act: string, items: string[], ar: string, en: string, extra: Partial<Omit<KidsStep, 'act' | 'items' | 'text'>> = {}): KidsStep =>
  ({ act, ...(items.length ? { items } : {}), ...extra, text: t(ar, en) });

const WASH_AFTER_RAW = step('rinse', ['water'], 'اغسل يديك جيداً بالصابون بعد لمس اللحم النيء.', 'Wash your hands well with soap after touching raw meat.');

export const MORE_KIDS_RECIPES: KidsRecipe[] = [
  // ---------------- Breakfast ----------------
  {
    id: 'smiley-toast', group: 'breakfast', ages: '3-5', minutes: 10, servings: 2, noCook: false,
    allergens: ['gluten', 'milk'], cover: 'smiley-toast',
    title: t('توست الوجه الضاحك', 'Smiley-Face Toast'),
    intro: t('توست مقرمش بابتسامة من الفاكهة!', 'Crunchy toast with a fruit smile!'),
    ingredients: [
      ing('toast', '2 شريحة توست', '2 slices of bread'),
      ing('labneh', '2 ملعقة كبيرة لبنة أو جبنة كريمي', '2 tablespoons labneh or cream cheese'),
      ing('blueberries', '4 حبات توت أزرق', '4 blueberries'),
      ing('strawberry', '2 حبة فراولة', '2 strawberries'),
      ing('banana', 'نصف موزة', 'Half a banana'),
      ing('honey', 'قليل من العسل', 'A little honey')
    ],
    tools: ['toaster', 'butter-knife', 'board', 'plate'],
    steps: [
      step('toast', ['toast'], 'شخص كبير يحمّص الخبز في المحمصة.', 'A grown-up toasts the bread in the toaster.', { adult: 'hot' }),
      step('cool', ['toast'], 'انتظر دقيقة حتى يبرد قليلاً.', 'Wait a minute for it to cool a little.', { timer: 1 }),
      step('spread', ['labneh'], 'افرد اللبنة على التوست بسكين الزبدة.', 'Spread the labneh on the toast with a butter knife.'),
      step('cut', ['banana', 'strawberry'], 'قطّع الموز والفراولة شرائح.', 'Slice the banana and strawberries.', { tool: 'butter-knife' }),
      step('arrange', ['blueberries', 'strawberry', 'banana'], 'اصنع وجهاً: عيون من التوت، وابتسامة من الفراولة، وشعر من الموز!', 'Make a face: blueberry eyes, a strawberry smile and banana hair!', { on: 'toast' }),
      step('drizzle', ['honey'], 'زيّنه بخيط رفيع من العسل، ثم كُل!', 'Add a thin line of honey, then eat!', { on: 'smiley-toast' })
    ],
    tip: t('جرّب وجه قطة أو شمساً أو سيارة!', 'Try a cat face, a sun or a car!')
  },
  {
    id: 'overnight-oats', group: 'breakfast', ages: '3-5', minutes: 10, servings: 1, noCook: true,
    allergens: ['milk', 'gluten'], cover: 'overnight-oats',
    title: t('شوفان الليل في برطمان', 'Overnight Oats in a Jar'),
    intro: t('جهّزه قبل النوم، وفي الصباح تجد فطارك جاهزاً!', 'Make it before bed, and breakfast is ready in the morning!'),
    ingredients: [
      ing('oats', 'نصف كوب شوفان', '½ cup oats'),
      ing('milk', 'نصف كوب لبن', '½ cup milk'),
      ing('yogurt', '3 ملاعق كبيرة زبادي', '3 tablespoons yogurt'),
      ing('honey', '1 ملعقة صغيرة عسل', '1 teaspoon honey'),
      ing('banana', 'نصف موزة', 'Half a banana'),
      ing('blueberries', 'حفنة توت أو أي فاكهة تحبها', 'A handful of berries or any fruit you like')
    ],
    tools: ['jar', 'spoon', 'measuring-cup', 'fridge'],
    steps: [
      step('pour', ['oats'], 'ضع الشوفان في البرطمان.', 'Put the oats in the jar.', { on: 'jar' }),
      step('pour', ['milk', 'yogurt', 'honey'], 'أضف اللبن والزبادي والعسل.', 'Add the milk, yogurt and honey.', { on: 'jar' }),
      step('shake', ['jar'], 'أغلق الغطاء جيداً، ثم رجّ البرطمان بقوة!', 'Close the lid tight, then shake the jar hard!'),
      step('chill', ['jar'], 'ضعه في الثلاجة طوال الليل.', 'Put it in the fridge overnight.'),
      step('cut', ['banana'], 'في الصباح، قطّع الموزة بسكين الزبدة.', 'In the morning, slice the banana with a butter knife.', { tool: 'butter-knife' }),
      step('arrange', ['banana', 'blueberries'], 'زيّن الشوفان بالفاكهة وكُل بالملعقة!', 'Top the oats with fruit and eat with a spoon!', { on: 'overnight-oats' })
    ],
    tip: t('أضف ملعقة كاكاو لشوفان بالشوكولاتة.', 'Add a spoon of cocoa for chocolate oats.')
  },
  {
    id: 'labneh-balls', group: 'breakfast', ages: '6-8', minutes: 45, servings: 4, noCook: true,
    allergens: ['milk', 'sesame'], cover: 'labneh-balls',
    title: t('كرات اللبنة بالزعتر', "Labneh Balls with Za'atar"),
    intro: t('كرات صغيرة من اللبنة تدحرجها في الزعتر الأخضر.', "Little balls of labneh rolled in green za'atar."),
    ingredients: [
      ing('labneh', '1 كوب لبنة سميكة', '1 cup thick labneh'),
      ing('olive-oil', '2 ملعقة كبيرة زيت زيتون', '2 tablespoons olive oil'),
      ing('zaatar', '3 ملاعق كبيرة زعتر', "3 tablespoons za'atar"),
      ing('pita', 'عيش للأكل', 'Bread to eat them with')
    ],
    tools: ['bowl', 'spoon', 'plate', 'fridge'],
    steps: [
      step('chill', ['labneh'], 'ضع اللبنة في الثلاجة 30 دقيقة حتى يسهل تشكيلها.', 'Chill the labneh for 30 minutes so it is easy to shape.', { timer: 30 }),
      step('rub', ['olive-oil'], 'ادهن يديك بقليل من زيت الزيتون.', 'Rub a little olive oil on your hands.'),
      step('roll', ['labneh-balls'], 'خذ ملعقة صغيرة من اللبنة، وكوّرها بين يديك.', 'Take a teaspoon of labneh and roll it into a ball between your hands.'),
      step('dip', ['zaatar'], 'دحرج كل كرة في الزعتر.', "Roll each ball in the za'atar."),
      step('arrange', ['labneh-balls'], 'رصّها في طبق، وأضف قليلاً من زيت الزيتون.', 'Put them on a plate with a little olive oil.'),
      step('eat', ['labneh-balls'], 'كُلها مع العيش!', 'Eat them with bread!')
    ],
    tip: t('دحرج بعضها في السمسم أو الشطة الحلوة لألوان مختلفة.', 'Roll some in sesame seeds or paprika for different colours.')
  },
  {
    id: 'mini-manakish', group: 'breakfast', ages: '6-8', minutes: 25, servings: 4, noCook: false,
    allergens: ['gluten', 'sesame', 'milk'], cover: 'manakish',
    title: t('مناقيش زعتر صغيرة', "Mini Za'atar Manakish"),
    intro: t('خبز صغير بالزعتر وزيت الزيتون، ريحته تملأ البيت!', "Little breads with za'atar and olive oil that make the whole house smell good!"),
    ingredients: [
      ing('pita', '4 أرغفة عيش شامي صغيرة', '4 small pita breads'),
      ing('zaatar', '4 ملاعق كبيرة زعتر', "4 tablespoons za'atar"),
      ing('olive-oil', '4 ملاعق كبيرة زيت زيتون', '4 tablespoons olive oil'),
      ing('white-cheese', 'جبنة بيضاء (اختياري)', 'White cheese (optional)')
    ],
    tools: ['bowl', 'spoon', 'tray', 'oven'],
    steps: [
      step('pour', ['zaatar', 'olive-oil'], 'ضع الزعتر وزيت الزيتون في السلطانية.', "Put the za'atar and olive oil in the bowl."),
      step('stir', [], 'قلّب حتى يصبح عجينة خضراء.', 'Stir until it becomes a green paste.'),
      step('arrange', ['pita'], 'ضع الأرغفة على صينية الفرن.', 'Put the breads on the baking tray.', { on: 'tray' }),
      step('spread', ['zaatar'], 'افرد خليط الزعتر على كل رغيف بظهر الملعقة.', "Spread the za'atar mix on each bread with the back of a spoon.", { on: 'pita', tool: 'spoon' }),
      step('sprinkle', ['white-cheese'], 'فتّت قليلاً من الجبنة فوق بعضها إذا أحببت.', 'Crumble a little cheese on some if you like.', { on: 'pita' }),
      step('bake', ['manakish'], 'شخص كبير يخبزها على 200 درجة لمدة 8 دقائق.', 'A grown-up bakes them at 200°C (400°F) for 8 minutes.', { adult: 'oven', timer: 8 }),
      step('cool', ['manakish'], 'انتظر دقيقتين، ثم قطّعها واستمتع.', 'Wait 2 minutes, then tear and enjoy.', { timer: 2 })
    ],
    tip: t('أضف طماطم وخياراً فوقها بعد الخبز.', 'Add tomato and cucumber on top after baking.')
  },
  {
    id: 'egg-muffins', group: 'breakfast', ages: '6-8', minutes: 30, servings: 3, noCook: false,
    allergens: ['eggs', 'milk'], cover: 'egg-muffins',
    title: t('مافن البيض بالخضار', 'Egg Muffin Cups'),
    intro: t('بيض وخضار وجبنة في قوالب صغيرة، مثل الكب كيك!', 'Eggs, veggies and cheese in little cups, like cupcakes!'),
    ingredients: [
      ing('egg', '4 بيضات', '4 eggs'),
      ing('milk', '2 ملعقة كبيرة لبن', '2 tablespoons milk'),
      ing('bell-pepper', 'نصف فلفل ملون يقطعه شخص كبير مكعبات', 'Half a bell pepper, diced by a grown-up'),
      ing('cherry-tomatoes', '4 طماطم شيري', '4 cherry tomatoes'),
      ing('cheese', 'نصف كوب جبنة مبشورة', '½ cup grated cheese'),
      ing('salt', 'رشة ملح', 'A pinch of salt'),
      ing('oil', 'قليل من الزيت لدهن القالب', 'A little oil for the tin')
    ],
    tools: ['bowl', 'whisk', 'muffin-tin', 'butter-knife', 'oven'],
    steps: [
      step('spread', ['oil'], 'ادهن قالب المافن بقليل من الزيت.', 'Rub a little oil inside the muffin tin.', { on: 'muffin-tin', tool: 'spoon' }),
      step('crack', ['egg'], 'اكسر البيض في السلطانية، واحدة كل مرة.', 'Crack the eggs into the bowl, one at a time.'),
      step('pour', ['milk', 'salt'], 'أضف اللبن والملح.', 'Add the milk and salt.'),
      step('whisk', [], 'اخفق حتى يصبح لونه أصفر كله.', 'Whisk until it is all yellow.'),
      step('cut', ['cherry-tomatoes'], 'قطّع الطماطم الشيري أنصافاً بسكين الزبدة.', 'Cut the cherry tomatoes in half with a butter knife.', { tool: 'butter-knife' }),
      step('sprinkle', ['bell-pepper', 'cherry-tomatoes', 'cheese'], 'وزّع الفلفل والطماطم والجبنة في القوالب.', 'Share the pepper, tomatoes and cheese between the cups.', { on: 'muffin-tin' }),
      step('pour', ['measuring-cup'], 'صب البيض فوقها حتى نصف كل قالب تقريباً.', 'Pour the egg over them until each cup is about half full.', { on: 'muffin-tin' }),
      step('bake', ['egg-muffins'], 'شخص كبير يخبزها على 180 درجة لمدة 18 دقيقة.', 'A grown-up bakes them at 180°C (350°F) for 18 minutes.', { adult: 'oven', timer: 18 }),
      step('cool', ['egg-muffins'], 'انتظر 5 دقائق، ثم أخرجها بالملعقة.', 'Wait 5 minutes, then lift them out with a spoon.', { timer: 5 })
    ],
    tip: t('أضف ذرة أو بازلاء أو أي خضار تحبها.', 'Add corn, peas or any vegetable you like.')
  },

  // ---------------- Snacks ----------------
  {
    id: 'cucumber-caterpillar', group: 'snack', ages: '3-5', minutes: 10, servings: 2, noCook: true,
    allergens: ['milk'], cover: 'cucumber-caterpillar',
    title: t('دودة الخيار', 'Cucumber Caterpillar'),
    intro: t('دودة خضراء لطيفة من الخيار والطماطم.', 'A cute green caterpillar made of cucumber and tomato.'),
    ingredients: [
      ing('cucumber', '1 خيارة', '1 cucumber'),
      ing('cherry-tomatoes', '1 طماطم شيري', '1 cherry tomato'),
      ing('cream', '2 ملعقة كبيرة جبنة كريمي', '2 tablespoons cream cheese'),
      ing('raisins', '2 حبة زبيب للعيون', '2 raisins for eyes'),
      ing('carrot', '2 عود جزر رفيع للقرون', '2 thin carrot sticks for feelers')
    ],
    tools: ['board', 'knife', 'butter-knife', 'plate'],
    steps: [
      step('rinse', ['cucumber'], 'اغسل الخيارة وجففها.', 'Wash and dry the cucumber.'),
      step('cut', ['cucumber'], 'شخص كبير يقطع الخيارة دوائر.', 'A grown-up slices the cucumber into circles.', { adult: 'knife' }),
      step('arrange', ['cucumber'], 'رص الدوائر في خط متعرج مثل الدودة.', 'Line up the circles in a wiggly line, like a caterpillar.'),
      step('spread', ['cream'], 'ضع نقطة جبنة كريمي على كل دائرة.', 'Put a dot of cream cheese on each circle.', { on: 'cucumber' }),
      step('arrange', ['cherry-tomatoes', 'raisins', 'carrot'], 'اجعل الطماطم رأساً، والزبيب عيوناً، والجزر قروناً!', 'Add a tomato head, raisin eyes and carrot feelers!'),
      step('eat', ['cucumber-caterpillar'], 'ابدأ من الذيل. قرمش قرمش!', 'Start at the tail. Crunch, crunch!')
    ],
    tip: t('اصنع دودة مخططة من الخيار والجزر.', 'Make a stripy one with cucumber and carrot slices.')
  },
  {
    id: 'apple-donuts', group: 'snack', ages: '3-5', minutes: 10, servings: 2, noCook: true,
    allergens: ['milk', 'gluten'], cover: 'apple-donuts',
    title: t('دونتس التفاح', 'Apple "Donuts"'),
    intro: t('حلقات تفاح تشبه الدونتس، ولكنها فاكهة!', 'Apple rings that look like donuts, but they are fruit!'),
    ingredients: [
      ing('apple', '1 تفاحة كبيرة', '1 big apple'),
      ing('yogurt', '4 ملاعق كبيرة زبادي سميك أو جبنة كريمي', '4 tablespoons thick yogurt or cream cheese'),
      ing('honey', '1 ملعقة صغيرة عسل', '1 teaspoon honey'),
      ing('sprinkles', 'حلوى ملونة', 'Colourful sprinkles'),
      ing('granola', '2 ملعقة كبيرة جرانولا', '2 tablespoons granola')
    ],
    tools: ['board', 'knife', 'butter-knife', 'bowl', 'plate'],
    steps: [
      step('rinse', ['apple'], 'اغسل التفاحة.', 'Wash the apple.'),
      step('cut', ['apple'], 'شخص كبير ينزع قلب التفاحة ويقطعها حلقات سميكة.', 'A grown-up takes out the core and cuts the apple into thick rings.', { adult: 'knife' }),
      step('stir', ['yogurt', 'honey'], 'اخلط الزبادي مع العسل.', 'Mix the yogurt with the honey.'),
      step('spread', ['yogurt'], 'افرد الزبادي على كل حلقة تفاح.', 'Spread the yogurt on each apple ring.', { on: 'apple' }),
      step('sprinkle', ['sprinkles', 'granola'], 'زيّنها بالحلوى الملونة والجرانولا.', 'Decorate with sprinkles and granola.', { on: 'apple-donuts' }),
      step('eat', ['apple-donuts'], 'كُلها قبل أن ينزلق الزبادي!', 'Eat them before the yogurt slides off!')
    ],
    tip: t('جرّب زبدة الفول السوداني والزبيب بدلاً من الزبادي.', 'Try peanut butter and raisins instead of yogurt.')
  },
  {
    id: 'hummus-veggie-face', group: 'snack', ages: '3-5', minutes: 10, servings: 2, noCook: true,
    allergens: ['sesame', 'gluten'], cover: 'hummus-face',
    title: t('طبق الحمص بوجه الخضار', 'Hummus Veggie Face'),
    intro: t('طبق حمص يبتسم لك بعيون وشعر من الخضار!', 'A plate of hummus that smiles back, with veggie eyes and hair!'),
    ingredients: [
      ing('hummus', '1 كوب حمص بطحينة جاهز', '1 cup ready-made hummus'),
      ing('carrot', '2 جزرة', '2 carrots'),
      ing('cucumber', '1 خيارة', '1 cucumber'),
      ing('cherry-tomatoes', '2 طماطم شيري', '2 cherry tomatoes'),
      ing('bell-pepper', '1 فلفل أحمر أو أخضر', '1 red or green pepper'),
      ing('pita', 'عيش للغمس', 'Bread for dipping')
    ],
    tools: ['board', 'knife', 'spoon', 'plate'],
    steps: [
      step('rinse', ['carrot', 'cucumber'], 'اغسل كل الخضار.', 'Wash all the vegetables.'),
      step('cut', ['carrot', 'bell-pepper'], 'شخص كبير يقطع الجزر أصابع، والخيار دوائر، والفلفل شرائح.', 'A grown-up cuts the carrots into sticks, the cucumber into circles and the pepper into strips.', { adult: 'knife' }),
      step('spread', ['hummus'], 'افرد الحمص في الطبق على شكل دائرة كبيرة.', 'Spread the hummus into a big circle on the plate.', { on: 'plate', tool: 'spoon' }),
      step('arrange', ['cucumber', 'cherry-tomatoes', 'bell-pepper'], 'اصنع عيوناً من الخيار، وأنفاً من الطماطم، وابتسامة من الفلفل.', 'Make cucumber eyes, a tomato nose and a pepper smile.', { on: 'hummus' }),
      step('arrange', ['carrot'], 'أضف أصابع الجزر شعراً حول الوجه!', 'Add carrot sticks around the face for hair!', { on: 'hummus-face' }),
      step('eat', ['hummus-face'], 'اغمس الخضار والعيش في الحمص.', 'Dip the veggies and bread in the hummus.')
    ],
    tip: t('اصنع وجه أسد بشعر كثير من الجزر.', 'Make a lion with lots of carrot hair.')
  },
  {
    id: 'banana-snowmen', group: 'snack', ages: '3-5', minutes: 10, servings: 2, noCook: true,
    allergens: ['milk'], cover: 'banana-snowman',
    title: t('رجل الثلج من الموز', 'Banana Snowmen'),
    intro: t('رجل ثلج صغير على عود، ويمكنك أكله!', 'A little snowman on a stick that you can eat!'),
    ingredients: [
      ing('banana', '2 موزة', '2 bananas'),
      ing('strawberry', '2 حبة فراولة', '2 strawberries'),
      ing('chocolate-chips', '12 قطعة شوكولاتة صغيرة', '12 chocolate chips'),
      ing('carrot', 'قطعة جزر صغيرة جداً للأنف', 'A tiny piece of carrot for the nose')
    ],
    tools: ['skewer', 'butter-knife', 'knife', 'board', 'plate'],
    steps: [
      step('peel', ['banana'], 'قشّر الموز.', 'Peel the bananas.'),
      step('cut', ['banana'], 'قطّع الموز دوائر سميكة بسكين الزبدة.', 'Cut the bananas into thick circles with a butter knife.', { tool: 'butter-knife' }),
      step('thread', ['banana', 'banana', 'banana'], 'اشبك 3 دوائر موز في العود: هذا رجل الثلج!', 'Push 3 banana circles onto a stick: that is your snowman!'),
      step('cut', ['strawberry'], 'شخص كبير يقطع رأس الفراولة ليصبح قبعة.', 'A grown-up cuts the top off a strawberry to make a hat.', { adult: 'knife' }),
      step('arrange', ['strawberry', 'chocolate-chips', 'carrot'], 'ضع القبعة، واصنع عيوناً وأزراراً من الشوكولاتة، وأنفاً من الجزر.', 'Put the hat on top, then add chocolate-chip eyes and buttons and a carrot nose.', { on: 'banana-snowman' }),
      step('eat', ['banana-snowman'], 'كُله قبل أن يصبح بنياً!', 'Eat it before it turns brown!')
    ],
    tip: t('ضعه في الفريزر 30 دقيقة لرجل ثلج بارد فعلاً.', 'Freeze it for 30 minutes for a really cold snowman.')
  },
  {
    id: 'cracker-towers', group: 'snack', ages: '3-5', minutes: 10, servings: 2, noCook: true,
    allergens: ['gluten', 'milk'], cover: 'cracker-tower',
    title: t('أبراج البسكويت والجبنة', 'Cheese & Cracker Towers'),
    intro: t('ابنِ أعلى برج تستطيع... ثم كُله!', 'Build the tallest tower you can... then eat it!'),
    ingredients: [
      ing('crackers', '8 قطع بسكويت مالح', '8 crackers'),
      ing('cheese', '4 شرائح جبنة', '4 cheese slices'),
      ing('cucumber', 'نصف خيارة شرائح', 'Half a cucumber, sliced'),
      ing('cherry-tomatoes', '4 طماطم شيري', '4 cherry tomatoes'),
      ing('lettuce', 'ورقتان خس', '2 lettuce leaves')
    ],
    tools: ['board', 'butter-knife', 'cookie-cutter', 'plate'],
    steps: [
      step('shape', ['cheese'], 'قطّع الجبنة بالقطاعة أشكالاً، أو قسّمها مربعات.', 'Cut the cheese into shapes with a cutter, or break it into squares.'),
      step('tear', ['lettuce'], 'قطّع الخس بيديك قطعاً صغيرة.', 'Tear the lettuce into small pieces with your hands.'),
      step('cut', ['cherry-tomatoes'], 'قطّع الطماطم أنصافاً بسكين الزبدة.', 'Cut the tomatoes in half with a butter knife.', { tool: 'butter-knife' }),
      step('stack', ['crackers', 'cheese', 'lettuce', 'cucumber'], 'ابنِ البرج: بسكويت، جبنة، خس، خيار، ثم بسكويت مرة أخرى!', 'Build: cracker, cheese, lettuce, cucumber, then another cracker!'),
      step('arrange', ['cherry-tomatoes'], 'ضع نصف طماطماية على القمة.', 'Put half a tomato on the very top.', { on: 'cracker-tower' }),
      step('eat', ['cracker-tower'], 'من بنى أعلى برج؟ الآن كُله!', 'Who built the tallest tower? Now eat it!')
    ],
    tip: t('جرّب الزيتون أو اللبنة في طابق جديد.', 'Try olives or labneh for a new floor.')
  },
  {
    id: 'tortilla-pinwheels', group: 'snack', ages: '6-8', minutes: 15, servings: 3, noCook: true,
    allergens: ['gluten', 'milk'], cover: 'pinwheels',
    title: t('لفائف التورتيلا الدوّارة', 'Tortilla Pinwheels'),
    intro: t('لف التورتيلا واقطعها لترى دوائر ملونة مثل الحلزون!', 'Roll up a tortilla and slice it to see colourful spirals!'),
    ingredients: [
      ing('tortilla', '2 رغيف تورتيلا كبير', '2 large tortillas'),
      ing('cream', '4 ملاعق كبيرة جبنة كريمي', '4 tablespoons cream cheese'),
      ing('carrot', '1 جزرة مبشورة', '1 grated carrot'),
      ing('lettuce', '4 أوراق خس', '4 lettuce leaves'),
      ing('cheese', 'نصف كوب جبنة مبشورة', '½ cup grated cheese')
    ],
    tools: ['board', 'butter-knife', 'knife', 'plate'],
    steps: [
      step('spread', ['cream'], 'افرد الجبنة الكريمي على التورتيلا كلها.', 'Spread cream cheese all over the tortilla.', { on: 'tortilla' }),
      step('sprinkle', ['carrot', 'cheese'], 'رش الجزر المبشور والجبنة.', 'Sprinkle on the grated carrot and cheese.', { on: 'tortilla' }),
      step('arrange', ['lettuce'], 'غطّها بأوراق الخس.', 'Cover it with lettuce leaves.', { on: 'tortilla' }),
      step('wrap', ['tortilla'], 'لف التورتيلا بإحكام مثل السجادة.', 'Roll the tortilla up tight, like a rug.'),
      step('cut', ['pinwheels'], 'شخص كبير يقطعها شرائح.', 'A grown-up cuts it into slices.', { adult: 'knife' }),
      step('arrange', ['pinwheels'], 'رصّها في الطبق لترى الحلزونات!', 'Lay them on the plate to see the spirals!')
    ],
    tip: t('أضف سبانخ أو شرائح خيار لألوان أكثر.', 'Add spinach or cucumber for more colours.')
  },
  {
    id: 'frozen-yogurt-bark', group: 'snack', ages: '3-5', minutes: 15, servings: 4, noCook: true,
    allergens: ['milk', 'gluten'], cover: 'yogurt-bark',
    title: t('لوح الزبادي المجمّد', 'Frozen Yogurt Bark'),
    intro: t('زبادي وفاكهة مجمدة تكسرها قطعاً مثل الشوكولاتة.', 'Frozen yogurt and fruit that you break into pieces like chocolate.'),
    ingredients: [
      ing('yogurt', '2 كوب زبادي سميك', '2 cups thick yogurt'),
      ing('honey', '2 ملعقة كبيرة عسل', '2 tablespoons honey'),
      ing('strawberry', '6 حبات فراولة', '6 strawberries'),
      ing('blueberries', 'حفنة توت أزرق', 'A handful of blueberries'),
      ing('granola', '3 ملاعق كبيرة جرانولا', '3 tablespoons granola')
    ],
    tools: ['bowl', 'spoon', 'tray', 'baking-paper', 'butter-knife', 'fridge'],
    steps: [
      step('stir', ['yogurt', 'honey'], 'اخلط الزبادي والعسل.', 'Mix the yogurt and honey.'),
      step('arrange', ['baking-paper'], 'غطِّ الصينية بورق الزبدة.', 'Cover the tray with baking paper.', { on: 'tray' }),
      step('spread', ['yogurt'], 'افرد الزبادي على الورق بظهر الملعقة.', 'Spread the yogurt on the paper with the back of a spoon.', { on: 'tray', tool: 'spoon' }),
      step('cut', ['strawberry'], 'قطّع الفراولة قطعاً صغيرة.', 'Cut the strawberries into small pieces.', { tool: 'butter-knife' }),
      step('sprinkle', ['strawberry', 'blueberries', 'granola'], 'رش الفاكهة والجرانولا فوق الزبادي.', 'Sprinkle the fruit and granola over the yogurt.', { on: 'tray' }),
      step('freeze', ['yogurt-bark'], 'ضعها في الفريزر 3 ساعات.', 'Freeze for 3 hours.'),
      step('tear', ['yogurt-bark'], 'اكسرها قطعاً بيديك وكُلها بسرعة!', 'Break it into pieces with your hands and eat it quickly!')
    ],
    tip: t('رش قليلاً من جوز الهند أو الشوكولاتة.', 'Add coconut or chocolate chips too.')
  },
  {
    id: 'fruit-ice-pops', group: 'snack', ages: '3-5', minutes: 15, servings: 6, noCook: true,
    allergens: [], cover: 'ice-pops',
    title: t('مصاصات الفاكهة المجمّدة', 'Fruit Ice Pops'),
    intro: t('مصاصات ملونة من العصير وقطع الفاكهة للأيام الحارة.', 'Colourful pops made of juice and fruit pieces, for hot days.'),
    ingredients: [
      ing('juice', '2 كوب عصير برتقال أو مانجو', '2 cups orange or mango juice'),
      ing('strawberry', '4 حبات فراولة', '4 strawberries'),
      ing('kiwi', '1 كيوي', '1 kiwi'),
      ing('blueberries', 'حفنة توت أزرق', 'A handful of blueberries')
    ],
    tools: ['ice-pop-mold', 'measuring-cup', 'board', 'butter-knife', 'knife', 'fridge'],
    steps: [
      step('cut', ['strawberry'], 'قطّع الفراولة قطعاً صغيرة بسكين الزبدة.', 'Cut the strawberries into small pieces with a butter knife.', { tool: 'butter-knife' }),
      step('cut', ['kiwi'], 'شخص كبير يقشّر الكيوي ويقطعه.', 'A grown-up peels and cuts the kiwi.', { adult: 'knife' }),
      step('pour', ['strawberry', 'kiwi', 'blueberries'], 'ضع قطع الفاكهة في القوالب.', 'Drop the fruit pieces into the moulds.', { on: 'ice-pop-mold' }),
      step('pour', ['juice'], 'صب العصير حتى يقترب من الحافة.', 'Pour in the juice almost to the top.', { on: 'ice-pop-mold' }),
      step('press', ['stick'], 'أدخل العيدان أو غطاء القالب.', 'Push in the sticks or the mould lid.'),
      step('freeze', ['ice-pops'], 'جمّدها 4 ساعات على الأقل.', 'Freeze for at least 4 hours.'),
      step('eat', ['ice-pops'], 'ضع القالب تحت ماء دافئ ثوانٍ لتخرج بسهولة.', 'Hold the mould under warm water for a few seconds so the pops slide out.')
    ],
    tip: t('اصنع طبقتين: عصير برتقال ثم عصير فراولة.', 'Make two layers: orange juice, then strawberry juice.')
  },

  // ---------------- Savoury ----------------
  {
    id: 'homemade-hummus', group: 'savoury', ages: '6-8', minutes: 15, servings: 4, noCook: false,
    allergens: ['sesame'], cover: 'hummus',
    title: t('الحمص بالطحينة', 'Homemade Hummus'),
    intro: t('حمص ناعم وكريمي تصنعه بنفسك في دقائق.', 'Smooth, creamy hummus you make yourself in minutes.'),
    ingredients: [
      ing('chickpeas', '1 علبة حمص مسلوق', '1 can cooked chickpeas'),
      ing('tahini', '3 ملاعق كبيرة طحينة', '3 tablespoons tahini'),
      ing('lemon', '1 ليمونة', '1 lemon'),
      ing('garlic', 'فص ثوم صغير (اختياري)', '1 small garlic clove (optional)'),
      ing('salt', 'رشة ملح', 'A pinch of salt'),
      ing('water', '3 ملاعق كبيرة ماء بارد', '3 tablespoons cold water'),
      ing('olive-oil', 'زيت زيتون للتزيين', 'Olive oil to finish'),
      ing('paprika', 'رشة شطة حلوة', 'A pinch of paprika')
    ],
    tools: ['sieve', 'juicer', 'blender', 'spoon', 'plate'],
    steps: [
      step('rinse', ['chickpeas'], 'اشطف الحمص في المصفاة تحت الماء.', 'Rinse the chickpeas in the sieve under the tap.'),
      step('squeeze', ['lemon'], 'اعصر الليمونة على العصارة.', 'Squeeze the lemon on the lemon squeezer.'),
      step('pour', ['chickpeas', 'tahini', 'lemon'], 'ضع الحمص والطحينة وعصير الليمون والملح في الخلاط.', 'Put the chickpeas, tahini, lemon juice and salt in the blender.', { on: 'blender' }),
      step('pour', ['garlic', 'water'], 'أضف الثوم والماء البارد.', 'Add the garlic and cold water.', { on: 'blender' }),
      step('blend', ['chickpeas'], 'شخص كبير يشغّل الخلاط حتى يصبح الحمص ناعماً جداً.', 'A grown-up blends it until very smooth.', { adult: 'blender' }),
      step('spread', ['hummus'], 'افرده في الطبق واصنع دوامة بالملعقة.', 'Spread it on a plate and make a swirl with the spoon.', { on: 'plate', tool: 'spoon' }),
      step('drizzle', ['olive-oil', 'paprika'], 'زيّنه بزيت الزيتون والشطة الحلوة.', 'Finish with olive oil and paprika.', { on: 'hummus' })
    ],
    tip: t('أضف بنجراً مسلوقاً لحمص وردي!', 'Add cooked beetroot for pink hummus!')
  },
  {
    id: 'fattoush', group: 'savoury', ages: '6-8', minutes: 20, servings: 4, noCook: false,
    allergens: ['gluten'], cover: 'fattoush',
    title: t('سلطة فتوش', 'Fattoush Salad'),
    intro: t('سلطة مقرمشة بالعيش المحمص، وأنت تقطع الخس بيديك!', 'A crunchy salad with toasted bread, and you tear the lettuce yourself!'),
    ingredients: [
      ing('pita', '1 رغيف عيش شامي', '1 pita bread'),
      ing('lettuce', '1 خسة صغيرة', '1 small lettuce'),
      ing('cucumber', '1 خيارة', '1 cucumber'),
      ing('cherry-tomatoes', '8 طماطم شيري', '8 cherry tomatoes'),
      ing('radish', '3 حبات فجل', '3 radishes'),
      ing('mint', 'حفنة نعناع', 'A handful of mint'),
      ing('lemon', 'نصف ليمونة', 'Half a lemon'),
      ing('olive-oil', '3 ملاعق كبيرة زيت زيتون', '3 tablespoons olive oil'),
      ing('salt', 'رشة ملح', 'A pinch of salt')
    ],
    tools: ['bowl', 'board', 'knife', 'butter-knife', 'tray', 'oven'],
    steps: [
      step('tear', ['pita'], 'قطّع العيش بيديك قطعاً صغيرة.', 'Tear the bread into small pieces with your hands.'),
      step('bake', ['pita'], 'شخص كبير يحمّصها في الفرن 7 دقائق حتى تقرمش.', 'A grown-up toasts them in the oven for 7 minutes until crunchy.', { adult: 'oven', timer: 7 }),
      step('rinse', ['lettuce', 'radish'], 'اغسل كل الخضار.', 'Wash all the vegetables.'),
      step('tear', ['lettuce', 'mint'], 'قطّع الخس والنعناع بيديك في السلطانية.', 'Tear the lettuce and mint into the bowl.'),
      step('cut', ['cucumber', 'radish'], 'شخص كبير يقطع الخيار والفجل.', 'A grown-up cuts the cucumber and radishes.', { adult: 'knife' }),
      step('cut', ['cherry-tomatoes'], 'قطّع الطماطم الشيري أنصافاً بسكين الزبدة.', 'Cut the cherry tomatoes in half with a butter knife.', { tool: 'butter-knife' }),
      step('squeeze', ['lemon'], 'اعصر الليمون، وأضف الزيت والملح، ثم قلّب.', 'Squeeze in the lemon, add the oil and salt, then toss.'),
      step('sprinkle', ['pita'], 'أضف العيش المقرمش في الآخر حتى يبقى مقرمشاً!', 'Add the crunchy bread last, so it stays crunchy!', { on: 'fattoush' })
    ],
    tip: t('رش السماق فوقها إذا وجدته.', 'Sprinkle sumac on top if you have it.')
  },
  {
    id: 'pasta-salad', group: 'savoury', ages: '6-8', minutes: 25, servings: 4, noCook: false,
    allergens: ['gluten', 'milk'], cover: 'pasta-salad',
    title: t('سلطة المكرونة الملونة', 'Colourful Pasta Salad'),
    intro: t('مكرونة بأشكال ممتعة مع خضار بكل الألوان.', 'Fun pasta shapes with vegetables in every colour.'),
    ingredients: [
      ing('pasta', '2 كوب مكرونة أشكال', '2 cups pasta shapes'),
      ing('corn', 'نصف كوب ذرة', '½ cup sweetcorn'),
      ing('cherry-tomatoes', '8 طماطم شيري', '8 cherry tomatoes'),
      ing('bell-pepper', '1 فلفل ملون', '1 bell pepper'),
      ing('cucumber', '1 خيارة', '1 cucumber'),
      ing('cheese', 'نصف كوب جبنة مكعبات', '½ cup cheese cubes'),
      ing('olive-oil', '3 ملاعق كبيرة زيت زيتون', '3 tablespoons olive oil'),
      ing('lemon', 'نصف ليمونة', 'Half a lemon'),
      ing('salt', 'رشة ملح', 'A pinch of salt')
    ],
    tools: ['pot', 'strainer', 'bowl', 'board', 'knife', 'butter-knife', 'spoon'],
    steps: [
      step('boil', ['pasta'], 'شخص كبير يسلق المكرونة في ماء بملح حوالي 10 دقائق.', 'A grown-up boils the pasta in salty water for about 10 minutes.', { adult: 'stove', timer: 10 }),
      step('pour', ['pasta'], 'الشخص الكبير يصفّيها ويشطفها بماء بارد.', 'The grown-up drains it and rinses it with cold water.', { on: 'strainer', adult: 'hot' }),
      step('cut', ['bell-pepper', 'cucumber'], 'شخص كبير يقطع الفلفل والخيار مكعبات.', 'A grown-up cuts the pepper and cucumber into cubes.', { adult: 'knife' }),
      step('cut', ['cherry-tomatoes'], 'قطّع الطماطم الشيري أنصافاً بسكين الزبدة.', 'Cut the cherry tomatoes in half with a butter knife.', { tool: 'butter-knife' }),
      step('pour', ['pasta', 'corn', 'cheese'], 'ضع المكرونة والذرة والجبنة والخضار في السلطانية.', 'Put the pasta, corn, cheese and vegetables in the bowl.'),
      step('squeeze', ['lemon'], 'اعصر الليمون، وأضف الزيت والملح.', 'Squeeze in the lemon and add the oil and salt.'),
      step('stir', [], 'قلّب بلطف حتى تختلط الألوان.', 'Stir gently until all the colours are mixed.')
    ],
    tip: t('أضف تونة أو زيتوناً لسلطة أكبر.', 'Add tuna or olives for a bigger salad.')
  },
  {
    id: 'koshari-bowl', group: 'savoury', ages: '6-8', minutes: 30, servings: 4, noCook: false,
    allergens: ['gluten'], cover: 'koshari', archiveRecipeId: 'leg-01',
    title: t('طبق الكشري على ذوقك', 'Build-Your-Own Koshari Bowl'),
    intro: t('الكشري المصري، وأنت تبني طبقك طبقة فوق طبقة!', 'Egyptian koshari, and you build your bowl layer by layer!'),
    ingredients: [
      ing('rice', '1 كوب أرز مطبوخ', '1 cup cooked rice'),
      ing('lentils', '1 كوب عدس بجبة مطبوخ', '1 cup cooked brown lentils'),
      ing('pasta', '1 كوب مكرونة صغيرة مسلوقة', '1 cup cooked small pasta'),
      ing('chickpeas', 'نصف كوب حمص مسلوق', '½ cup cooked chickpeas'),
      ing('tomato-sauce', '1 كوب صلصة طماطم', '1 cup tomato sauce'),
      ing('cumin', 'رشة كمون', 'A pinch of cumin'),
      ing('fried-onions', 'نصف كوب بصل مقرمش', '½ cup crispy fried onions')
    ],
    tools: ['pot', 'bowl', 'spoon', 'ladle'],
    steps: [
      step('boil', ['rice', 'lentils'], 'شخص كبير يطبخ الأرز والعدس والمكرونة، أو يسخّنها إذا كانت جاهزة.', 'A grown-up cooks the rice, lentils and pasta, or warms them up if they are ready-made.', { adult: 'stove' }),
      step('simmer', ['tomato-sauce', 'cumin'], 'الشخص الكبير يسخّن الصلصة مع الكمون.', 'The grown-up warms the tomato sauce with the cumin.', { adult: 'stove' }),
      step('layer', ['rice', 'lentils'], 'ضع الأرز والعدس في قاع السلطانية.', 'Put rice and lentils in the bottom of your bowl.', { on: 'bowl' }),
      step('layer', ['pasta'], 'أضف طبقة المكرونة.', 'Add a layer of pasta.', { on: 'bowl' }),
      step('sprinkle', ['chickpeas'], 'رش الحمص فوقها.', 'Sprinkle the chickpeas on top.', { on: 'bowl' }),
      step('pour', ['ladle'], 'صب الصلصة الدافئة بالمغرفة، بحذر!', 'Spoon on the warm sauce with a ladle, carefully!', { on: 'bowl' }),
      step('sprinkle', ['fried-onions'], 'زيّن الطبق بالبصل المقرمش!', 'Top it with crispy onions!', { on: 'koshari' })
    ],
    tip: t('الكبار الذين يحبون الحار يضيفون دقة الخل والثوم.', 'Grown-ups who like it spicy add the garlic-vinegar sauce.')
  },
  {
    id: 'kofta-fingers', group: 'savoury', ages: '6-8', minutes: 35, servings: 4, noCook: false,
    allergens: ['gluten'], cover: 'kofta', archiveRecipeId: 'meat-58',
    title: t('أصابع الكفتة بالفرن', 'Oven Kofta Fingers'),
    intro: t('شكّل أصابع الكفتة بيديك، والفرن يكمل الباقي.', 'Shape kofta fingers with your hands, and the oven does the rest.'),
    ingredients: [
      ing('minced-meat', '500 جرام لحم مفروم', '500 g (1 lb) minced meat'),
      ing('onion', '1 بصلة صغيرة يبشرها شخص كبير', '1 small onion, grated by a grown-up'),
      ing('parsley', 'حفنة بقدونس', 'A handful of parsley'),
      ing('toast', '3 ملاعق كبيرة بقسماط', '3 tablespoons breadcrumbs'),
      ing('cumin', 'نصف ملعقة صغيرة كمون', '½ teaspoon cumin'),
      ing('salt', 'نصف ملعقة صغيرة ملح', '½ teaspoon salt')
    ],
    tools: ['bowl', 'gloves', 'tray', 'baking-paper', 'oven'],
    steps: [
      step('tear', ['parsley'], 'قطّع أوراق البقدونس بيديك قطعاً صغيرة.', 'Pull the parsley leaves into small bits.'),
      step('pour', ['minced-meat', 'onion', 'parsley'], 'ضع اللحم والبصل والبقدونس في السلطانية.', 'Put the meat, onion and parsley in the bowl.'),
      step('pour', ['toast', 'cumin', 'salt'], 'أضف البقسماط والكمون والملح.', 'Add the breadcrumbs, cumin and salt.'),
      step('knead', ['gloves', 'minced-meat'], 'البس القفازات، واعجن الخليط بيديك.', 'Put on gloves and squish it all together.'),
      step('roll', ['kofta'], 'شكّل أصابع طويلة مثل السجق، وضعها على الصينية.', 'Shape long fingers like sausages and put them on the tray.'),
      WASH_AFTER_RAW,
      step('bake', ['kofta'], 'شخص كبير يخبزها على 200 درجة لمدة 20 دقيقة.', 'A grown-up bakes them at 200°C (400°F) for 20 minutes.', { adult: 'oven', timer: 20 }),
      step('eat', ['kofta'], 'كُلها مع العيش والسلطة!', 'Eat them with bread and salad!')
    ],
    tip: t('اغمسها في الطحينة.', 'Dip them in tahini.')
  },
  {
    id: 'chicken-nuggets', group: 'savoury', ages: '6-8', minutes: 40, servings: 4, noCook: false,
    allergens: ['eggs', 'gluten'], cover: 'nuggets',
    title: t('ناجتس الفراخ المقرمش بالفرن', 'Crunchy Oven Chicken Nuggets'),
    intro: t('ناجتس مقرمش بالكورن فليكس، في الفرن بدلاً من القلي.', 'Nuggets with a cornflake crunch, baked instead of fried.'),
    ingredients: [
      ing('chicken', '2 صدر فراخ', '2 chicken breasts'),
      ing('egg', '1 بيضة', '1 egg'),
      ing('cornflakes', '2 كوب كورن فليكس', '2 cups cornflakes'),
      ing('paprika', 'نصف ملعقة صغيرة شطة حلوة', '½ teaspoon paprika'),
      ing('salt', 'رشة ملح', 'A pinch of salt')
    ],
    tools: ['plastic-bag', 'bowl', 'fork', 'gloves', 'tray', 'oven'],
    steps: [
      step('cut', ['chicken'], 'شخص كبير يقطع الفراخ قطعاً صغيرة.', 'A grown-up cuts the chicken into bite-size pieces.', { adult: 'knife' }),
      step('pour', ['cornflakes', 'paprika', 'salt'], 'ضع الكورن فليكس والشطة والملح في كيس وأغلقه.', 'Put the cornflakes, paprika and salt in a bag and close it.', { on: 'plastic-bag' }),
      step('knead', ['plastic-bag'], 'اضغط الكيس بيديك حتى يصبح فتاتاً!', 'Squash the bag with your hands until it is all crumbs!'),
      step('crack', ['egg'], 'اكسر البيضة في السلطانية واخفقها بالشوكة.', 'Crack the egg into the bowl and beat it with a fork.'),
      step('dip', ['chicken'], 'البس القفازات، واغمس كل قطعة في البيض.', 'Put on gloves and dip each piece in the egg.'),
      step('dip', ['nuggets'], 'ثم دحرجها في الكورن فليكس وضعها على الصينية.', 'Then roll it in the cornflakes and put it on the tray.', { on: 'plastic-bag' }),
      step('rinse', ['water'], 'اغسل يديك جيداً بالصابون بعد لمس الفراخ النيئة.', 'Wash your hands well with soap after touching raw chicken.'),
      step('bake', ['nuggets'], 'شخص كبير يخبزها على 200 درجة لمدة 20 دقيقة حتى تنضج تماماً.', 'A grown-up bakes them at 200°C (400°F) for 20 minutes, until cooked all the way through.', { adult: 'oven', timer: 20 })
    ],
    tip: t('اغمسها في الكاتشب أو الزبادي بالثوم.', 'Dip them in ketchup or garlic yogurt.')
  },
  {
    id: 'stuffed-pita-pockets', group: 'savoury', ages: '3-5', minutes: 10, servings: 2, noCook: true,
    allergens: ['gluten', 'milk'], cover: 'pita-pocket',
    title: t('ساندويتش جيب العيش', 'Stuffed Pita Pockets'),
    intro: t('جيوب من العيش تملؤها بكل ما تحب!', 'Bread pockets you fill with everything you like!'),
    ingredients: [
      ing('pita', '2 رغيف عيش', '2 pita breads'),
      ing('white-cheese', '4 ملاعق كبيرة جبنة بيضاء', '4 tablespoons white cheese'),
      ing('cucumber', 'نصف خيارة', 'Half a cucumber'),
      ing('tomato', '1 طماطم', '1 tomato'),
      ing('lettuce', '2 ورقة خس', '2 lettuce leaves'),
      ing('olives', '6 زيتونات منزوعة النوى', '6 pitted olives')
    ],
    tools: ['board', 'knife', 'spoon', 'plate'],
    steps: [
      step('cut', ['cucumber', 'tomato'], 'شخص كبير يقطع الخيار والطماطم شرائح.', 'A grown-up slices the cucumber and tomato.', { adult: 'knife' }),
      step('cut', ['pita'], 'ويقطع كل رغيف نصفين ليصبح جيبين.', 'They also cut each bread in half to make two pockets.', { adult: 'knife' }),
      step('tear', ['lettuce'], 'قطّع الخس بيديك.', 'Tear the lettuce with your hands.'),
      step('fill', ['white-cheese'], 'افتح الجيب واملأه بالجبنة بالملعقة.', 'Open a pocket and spoon in the cheese.', { on: 'pita' }),
      step('fill', ['cucumber', 'tomato', 'lettuce'], 'أضف الخضار داخل الجيب.', 'Push the vegetables inside.', { on: 'pita' }),
      step('fill', ['olives'], 'ضع الزيتون في الآخر، واضغط بلطف.', 'Add the olives last and press gently.', { on: 'pita-pocket' }),
      step('eat', ['pita-pocket'], 'امسكه بيديك الاثنتين وكُل!', 'Hold it with both hands and eat!')
    ],
    tip: t('جرّب البيض المسلوق أو الحمص بدلاً من الجبنة.', 'Try boiled egg or hummus instead of cheese.')
  },
  {
    id: 'cheese-quesadilla', group: 'savoury', ages: '6-8', minutes: 15, servings: 2, noCook: false,
    allergens: ['gluten', 'milk'], cover: 'quesadilla',
    title: t('كساديا الجبنة', 'Cheese Quesadilla Triangles'),
    intro: t('تورتيلا مقرمشة بجبنة ذائبة تمتد مع كل قضمة!', 'Crispy tortilla with melty cheese that stretches with every bite!'),
    ingredients: [
      ing('tortilla', '2 رغيف تورتيلا', '2 tortillas'),
      ing('cheese', '1 كوب جبنة مبشورة', '1 cup grated cheese'),
      ing('corn', '3 ملاعق كبيرة ذرة', '3 tablespoons sweetcorn'),
      ing('bell-pepper', 'قليل من الفلفل المقطع', 'A little chopped pepper')
    ],
    tools: ['pan', 'spatula', 'board', 'knife', 'plate'],
    steps: [
      step('sprinkle', ['cheese'], 'رش الجبنة على نصف التورتيلا.', 'Sprinkle the cheese over half of the tortilla.', { on: 'tortilla' }),
      step('sprinkle', ['corn', 'bell-pepper'], 'أضف الذرة والفلفل.', 'Add the corn and pepper.', { on: 'tortilla' }),
      step('fold', ['tortilla'], 'اطوِ التورتيلا نصفين مثل الكتاب.', 'Fold the tortilla in half like a book.'),
      step('cook', ['quesadilla'], 'شخص كبير يحمّرها في الطاسة دقيقتين.', 'A grown-up cooks it in the pan for 2 minutes.', { adult: 'stove' }),
      step('flip', ['quesadilla'], 'يقلبها الشخص الكبير حتى تسيح الجبنة.', 'The grown-up flips it until the cheese melts.', { adult: 'stove' }),
      step('cut', ['quesadilla'], 'شخص كبير يقطعها مثلثات.', 'A grown-up cuts it into triangles.', { adult: 'knife' }),
      step('cool', ['quesadilla'], 'انتظر دقيقتين، فالجبنة ساخنة جداً!', 'Wait 2 minutes: the cheese is very hot!', { timer: 2 })
    ],
    tip: t('اغمسها في الزبادي أو صلصة الطماطم.', 'Dip them in yogurt or tomato sauce.')
  },
  {
    id: 'magic-vegetable-soup', group: 'savoury', ages: '6-8', minutes: 40, servings: 4, noCook: false,
    allergens: [], cover: 'veg-soup',
    title: t('شوربة الخضار السحرية', 'Magic Vegetable Soup'),
    intro: t('ضع الخضار الملونة في الحلة، وشاهد السحر يحدث!', 'Put colourful vegetables in the pot and watch the magic happen!'),
    ingredients: [
      ing('carrot', '2 جزرة', '2 carrots'),
      ing('potato', '1 بطاطس', '1 potato'),
      ing('zucchini', '1 كوسة', '1 courgette (zucchini)'),
      ing('onion', '1 بصلة', '1 onion'),
      ing('tomato', '2 طماطم', '2 tomatoes'),
      ing('peas', 'نصف كوب بازلاء مجمدة', '½ cup frozen peas'),
      ing('water', '4 أكواب ماء', '4 cups water'),
      ing('salt', 'رشة ملح', 'A pinch of salt'),
      ing('parsley', 'حفنة بقدونس', 'A handful of parsley')
    ],
    tools: ['pot', 'board', 'knife', 'ladle', 'bowl'],
    steps: [
      step('rinse', ['carrot', 'zucchini'], 'اغسل كل الخضار جيداً.', 'Wash all the vegetables well.'),
      step('cut', ['carrot', 'potato'], 'شخص كبير يقشّر الخضار ويقطعها مكعبات.', 'A grown-up peels the vegetables and cuts them into cubes.', { adult: 'knife' }),
      step('pour', ['carrot', 'potato', 'onion'], 'ضع الخضار في الحلة الباردة قبل تشغيل النار.', 'Put the vegetables into the cold pot, before the stove is on.', { on: 'pot' }),
      step('pour', ['peas', 'tomato'], 'أضف البازلاء والطماطم. عُدّ حبات البازلاء إن استطعت!', 'Add the peas and tomatoes. Count the peas if you can!', { on: 'pot' }),
      step('pour', ['water', 'salt'], 'أضف الماء والملح.', 'Add the water and salt.', { on: 'pot' }),
      step('boil', [], 'شخص كبير يطبخ الشوربة 25 دقيقة حتى تطرى الخضار.', 'A grown-up cooks the soup for 25 minutes until the vegetables are soft.', { adult: 'stove', timer: 25 }),
      step('tear', ['parsley'], 'قطّع البقدونس بيديك ورشه فوق الشوربة.', 'Tear the parsley and sprinkle it over the soup.'),
      step('cool', ['veg-soup'], 'انتظر 5 دقائق وانفخ قبل أن تأكل!', 'Wait 5 minutes and blow before you eat!', { timer: 5 })
    ],
    tip: t('أضف شعرية أو مكرونة صغيرة لشوربة أكبر.', 'Add vermicelli or small pasta for a heartier soup.')
  },
  {
    id: 'egg-salad-sandwiches', group: 'savoury', ages: '6-8', minutes: 25, servings: 2, noCook: false,
    allergens: ['eggs', 'gluten', 'milk'], cover: 'egg-sandwich',
    title: t('ساندويتش سلطة البيض', 'Egg Salad Sandwiches'),
    intro: t('قشّر البيض بنفسك واهرسه لساندويتش لذيذ.', 'Peel and mash the eggs yourself for a yummy sandwich.'),
    ingredients: [
      ing('egg', '4 بيضات', '4 eggs'),
      ing('yogurt', '3 ملاعق كبيرة زبادي أو مايونيز', '3 tablespoons yogurt or mayonnaise'),
      ing('salt', 'رشة ملح', 'A pinch of salt'),
      ing('cumin', 'رشة كمون', 'A pinch of cumin'),
      ing('toast', '4 شرائح توست', '4 slices of bread'),
      ing('lettuce', '2 ورقة خس', '2 lettuce leaves')
    ],
    tools: ['pot', 'bowl', 'fork', 'spoon', 'cookie-cutter'],
    steps: [
      step('boil', ['egg'], 'شخص كبير يسلق البيض 10 دقائق.', 'A grown-up boils the eggs for 10 minutes.', { adult: 'stove', timer: 10 }),
      step('soak', ['egg', 'water'], 'الشخص الكبير يضع البيض في ماء بارد حتى يبرد.', 'The grown-up puts the eggs in cold water to cool.', { adult: 'hot', timer: 5 }),
      step('peel', ['egg'], 'اطرق البيضة على الطاولة، ثم قشّرها. ممتع!', 'Tap the egg on the table, then peel it. Fun!'),
      step('mash', ['egg'], 'اهرس البيض بالشوكة في السلطانية.', 'Mash the eggs with a fork in the bowl.'),
      step('pour', ['yogurt', 'salt', 'cumin'], 'أضف الزبادي والملح والكمون وقلّب.', 'Add the yogurt, salt and cumin, and stir.'),
      step('spread', ['egg'], 'افرد سلطة البيض على شريحة توست.', 'Spread the egg salad on a slice of bread.', { on: 'toast', tool: 'spoon' }),
      step('arrange', ['lettuce', 'toast'], 'ضع ورقة خس وغطّها بشريحة أخرى.', 'Add a lettuce leaf and put another slice on top.', { on: 'toast' }),
      step('shape', ['egg-sandwich'], 'قطّعه بالقطاعة لأشكال ممتعة!', 'Cut it into fun shapes with a cookie cutter!')
    ],
    tip: t('أضف قليلاً من الشبت أو البصل الأخضر.', 'Add a little dill or spring onion.')
  },
  {
    id: 'sweet-potato-wedges', group: 'savoury', ages: '6-8', minutes: 40, servings: 4, noCook: false,
    allergens: [], cover: 'potato-wedges',
    title: t('أصابع البطاطا الحلوة', 'Sweet Potato Wedges'),
    intro: t('أصابع برتقالية مقرمشة من الفرن، حلوة ومالحة معاً!', 'Crispy orange wedges from the oven, sweet and salty at once!'),
    ingredients: [
      ing('sweet-potato', '2 بطاطا حلوة', '2 sweet potatoes'),
      ing('olive-oil', '2 ملعقة كبيرة زيت زيتون', '2 tablespoons olive oil'),
      ing('paprika', 'نصف ملعقة صغيرة شطة حلوة', '½ teaspoon paprika'),
      ing('salt', 'رشة ملح', 'A pinch of salt')
    ],
    tools: ['board', 'knife', 'bowl', 'tray', 'baking-paper', 'oven'],
    steps: [
      step('rinse', ['sweet-potato'], 'اغسل البطاطا الحلوة وافركها جيداً.', 'Wash and scrub the sweet potatoes.'),
      step('cut', ['sweet-potato'], 'شخص كبير يقطعها أصابع سميكة.', 'A grown-up cuts them into thick wedges.', { adult: 'knife' }),
      step('pour', ['sweet-potato', 'olive-oil'], 'ضعها في السلطانية مع الزيت.', 'Put them in the bowl with the oil.'),
      step('sprinkle', ['paprika', 'salt'], 'رش الشطة الحلوة والملح.', 'Sprinkle on the paprika and salt.'),
      step('mix', [], 'قلّبها حتى تتغطى كلها.', 'Toss them until they are all coated.'),
      step('arrange', ['sweet-potato'], 'رصّها على الصينية بحيث لا تتلامس.', 'Lay them on the tray so they do not touch.', { on: 'tray' }),
      step('bake', ['potato-wedges'], 'شخص كبير يخبزها على 200 درجة لمدة 25 دقيقة.', 'A grown-up bakes them at 200°C (400°F) for 25 minutes.', { adult: 'oven', timer: 25 }),
      step('cool', ['potato-wedges'], 'انتظر 3 دقائق ثم كُلها بأصابعك!', 'Wait 3 minutes, then eat them with your fingers!', { timer: 3 })
    ],
    tip: t('اغمسها في الزبادي بالنعناع.', 'Dip them in yogurt with mint.')
  },

  // ---------------- Sweets ----------------
  {
    id: 'eid-kahk', group: 'sweet', ages: '6-8', minutes: 60, servings: 12, noCook: false,
    allergens: ['milk', 'gluten'], cover: 'kahk', archiveRecipeId: 'des-71',
    title: t('كحك العيد', 'Eid Kahk Cookies'),
    intro: t('شكّل كحك العيد وانقشه مثل تيتا، واحشه بالعجوة!', 'Shape and stamp Eid kahk like Teta did, filled with dates!'),
    ingredients: [
      ing('flour', '2 كوب دقيق', '2 cups flour'),
      ing('butter', '1 كوب زبدة أو سمن طري', '1 cup soft butter or ghee'),
      ing('powdered-sugar', '2 ملعقة كبيرة سكر بودرة', '2 tablespoons powdered sugar'),
      ing('baking-powder', 'نصف ملعقة صغيرة بيكنج بودر', '½ teaspoon baking powder'),
      ing('milk', '4 ملاعق كبيرة لبن', '4 tablespoons milk'),
      ing('date-paste', 'نصف كوب عجوة', '½ cup date paste'),
      ing('powdered-sugar', 'سكر بودرة للتزيين', 'Powdered sugar to dust on top')
    ],
    tools: ['bowl', 'spoon', 'cookie-mold', 'tray', 'oven'],
    steps: [
      step('pour', ['flour', 'powdered-sugar', 'baking-powder'], 'ضع الدقيق والسكر والبيكنج بودر في السلطانية.', 'Put the flour, sugar and baking powder in the bowl.'),
      step('pour', ['butter', 'milk'], 'أضف الزبدة الطرية واللبن.', 'Add the soft butter and milk.'),
      step('knead', ['dough-ball'], 'اعجن بيديك حتى تصبح عجينة ناعمة لا تلتصق.', 'Knead with your hands into a smooth dough that does not stick.'),
      step('roll', ['date-paste'], 'كوّر العجوة كرات صغيرة جداً.', 'Roll the date paste into tiny balls.'),
      step('fill', ['date-paste'], 'افرد كرة عجين، ضع العجوة في وسطها، وأغلقها.', 'Flatten a ball of dough, put a date ball in the middle and close it up.', { on: 'dough-ball' }),
      step('stamp', ['kahk'], 'انقش الوجه بالمنقاش، أو ارسم خطوطاً بالشوكة.', 'Stamp the top with a kahk stamp, or draw lines with a fork.'),
      step('bake', ['kahk'], 'شخص كبير يخبزها على 180 درجة لمدة 15 دقيقة.', 'A grown-up bakes them at 180°C (350°F) for 15 minutes.', { adult: 'oven', timer: 15 }),
      step('sprinkle', ['powdered-sugar'], 'بعد أن تبرد، رش السكر البودرة مثل الثلج!', 'Once cool, dust them with powdered sugar like snow!', { on: 'kahk' })
    ],
    tip: t('احشُ بعضها بالملبن أو الشوكولاتة.', 'Fill some with Turkish delight or chocolate.')
  },
  {
    id: 'one-bowl-basbousa', group: 'sweet', ages: '6-8', minutes: 45, servings: 12, noCook: false,
    allergens: ['milk', 'gluten', 'nuts'], cover: 'basbousa', archiveRecipeId: 'des-01',
    title: t('البسبوسة في سلطانية واحدة', 'One-Bowl Basbousa'),
    intro: t('بسبوسة ذهبية بالشربات، كل شيء في سلطانية واحدة!', 'Golden basbousa soaked in syrup, all mixed in one bowl!'),
    ingredients: [
      ing('semolina', '1 كوب سميد', '1 cup semolina'),
      ing('sugar', 'نصف كوب سكر', '½ cup sugar'),
      ing('coconut', 'نصف كوب جوز هند', '½ cup shredded coconut'),
      ing('baking-powder', '1 ملعقة صغيرة بيكنج بودر', '1 teaspoon baking powder'),
      ing('yogurt', '1 كوب زبادي', '1 cup yogurt'),
      ing('butter', 'نصف كوب زبدة ذائبة', '½ cup melted butter'),
      ing('almonds', '12 حبة لوز', '12 almonds'),
      ing('syrup', '1 كوب شربات بارد يجهزه شخص كبير', '1 cup cold sugar syrup, made ahead by a grown-up')
    ],
    tools: ['microwave', 'bowl', 'spoon', 'tray', 'butter-knife', 'oven'],
    steps: [
      step('microwave', ['butter'], 'شخص كبير يذوّب الزبدة في الميكروويف.', 'A grown-up melts the butter in the microwave.', { adult: 'microwave' }),
      step('pour', ['semolina', 'sugar', 'coconut'], 'ضع السميد والسكر وجوز الهند والبيكنج بودر في السلطانية.', 'Put the semolina, sugar, coconut and baking powder in the bowl.'),
      step('pour', ['yogurt', 'butter'], 'أضف الزبادي والزبدة الذائبة.', 'Add the yogurt and melted butter.'),
      step('stir', [], 'قلّب بالملعقة حتى يختلط كل شيء.', 'Stir with the spoon until everything is mixed.'),
      step('spread', ['semolina'], 'افرد الخليط في الصينية المدهونة، وسوِّ الوجه.', 'Spread the mix in a greased tray and smooth the top.', { on: 'tray', tool: 'spoon' }),
      step('cut', ['basbousa'], 'ارسم مربعات أو معينات بسكين الزبدة.', 'Mark squares or diamonds with a butter knife.', { on: 'tray', tool: 'butter-knife' }),
      step('press', ['almonds'], 'ضع حبة لوز في وسط كل قطعة.', 'Press an almond into the middle of each piece.'),
      step('bake', ['basbousa'], 'شخص كبير يخبزها على 180 درجة 30 دقيقة حتى تصبح ذهبية.', 'A grown-up bakes it at 180°C (350°F) for 30 minutes, until golden.', { adult: 'oven', timer: 30 }),
      step('pour', ['syrup'], 'الشخص الكبير يصب الشربات البارد على البسبوسة الساخنة. شششش!', 'The grown-up pours the cold syrup over the hot basbousa. Tssss!', { on: 'basbousa', adult: 'hot' })
    ],
    tip: t('اتركها ساعة لتشرب الشربات قبل الأكل.', 'Leave it for an hour to soak up the syrup before eating.')
  },
  {
    id: 'mahalabiya-cups', group: 'sweet', ages: '6-8', minutes: 25, servings: 4, noCook: false,
    allergens: ['milk', 'nuts'], cover: 'mahalabiya', archiveRecipeId: 'des-17',
    title: t('أكواب المهلبية المزيّنة', 'Decorated Mahalabiya Cups'),
    intro: t('مهلبية بيضاء ناعمة تزينها أنت بالألوان!', 'Smooth white milk pudding that you decorate with colours!'),
    ingredients: [
      ing('milk', '3 أكواب لبن', '3 cups milk'),
      ing('cornstarch', '4 ملاعق كبيرة نشا', '4 tablespoons cornstarch'),
      ing('sugar', '4 ملاعق كبيرة سكر', '4 tablespoons sugar'),
      ing('vanilla', '1 ملعقة صغيرة فانيليا', '1 teaspoon vanilla'),
      ing('pistachios', 'فستق مطحون للتزيين', 'Ground pistachios to decorate'),
      ing('strawberry', 'فراولة للتزيين', 'Strawberries to decorate'),
      ing('sprinkles', 'حلوى ملونة', 'Colourful sprinkles')
    ],
    tools: ['pot', 'whisk', 'measuring-cup', 'glass', 'fridge'],
    steps: [
      step('pour', ['milk'], 'صب كوباً من اللبن البارد في الحلة.', 'Pour 1 cup of the cold milk into the pot.', { on: 'pot' }),
      step('pour', ['cornstarch', 'sugar'], 'أضف النشا والسكر.', 'Add the cornstarch and sugar.', { on: 'pot' }),
      step('whisk', [], 'اخفق جيداً حتى يذوب النشا.', 'Whisk well until the cornstarch disappears.', { on: 'pot' }),
      step('pour', ['milk'], 'أضف باقي اللبن.', 'Add the rest of the milk.', { on: 'pot' }),
      step('simmer', [], 'شخص كبير يطبخها على نار هادئة ويقلّب حتى تثقل.', 'A grown-up cooks it on low heat, stirring until thick.', { adult: 'stove' }),
      step('pour', ['vanilla'], 'الشخص الكبير يضيف الفانيليا ويصبها في الأكواب.', 'The grown-up stirs in the vanilla and pours it into cups.', { on: 'glass', adult: 'hot' }),
      step('chill', ['mahalabiya'], 'ضعها في الثلاجة ساعتين حتى تجمد.', 'Chill for 2 hours until set.'),
      step('sprinkle', ['pistachios', 'strawberry', 'sprinkles'], 'زيّنها بالفستق والفراولة والألوان كما تحب!', 'Decorate with pistachios, strawberries and sprinkles however you like!', { on: 'mahalabiya' })
    ],
    tip: t('أضف ملعقة كاكاو لمهلبية بالشوكولاتة.', 'Add a spoon of cocoa for chocolate mahalabiya.')
  },
  {
    id: 'om-ali-croissants', group: 'sweet', ages: '6-8', minutes: 35, servings: 6, noCook: false,
    allergens: ['milk', 'gluten', 'nuts'], cover: 'om-ali', archiveRecipeId: 'des-67',
    title: t('أم علي بالكرواسون', 'Om Ali with Croissants'),
    intro: t('حلوى مصرية دافئة باللبن والمكسرات، بالكرواسون السهل.', 'A warm Egyptian pudding with milk and nuts, made the easy way with croissants.'),
    ingredients: [
      ing('croissant', '4 كرواسون سادة', '4 plain croissants'),
      ing('milk', '3 أكواب لبن', '3 cups milk'),
      ing('sugar', '3 ملاعق كبيرة سكر', '3 tablespoons sugar'),
      ing('raisins', '3 ملاعق كبيرة زبيب', '3 tablespoons raisins'),
      ing('coconut', '3 ملاعق كبيرة جوز هند', '3 tablespoons shredded coconut'),
      ing('pistachios', '3 ملاعق كبيرة مكسرات مجروشة', '3 tablespoons chopped nuts'),
      ing('cream', 'نصف كوب قشطة (اختياري)', '½ cup cream (optional)')
    ],
    tools: ['tray', 'pot', 'spoon', 'oven'],
    steps: [
      step('tear', ['croissant'], 'قطّع الكرواسون بيديك قطعاً كبيرة.', 'Tear the croissants into big pieces with your hands.'),
      step('arrange', ['croissant'], 'وزّعها في طبق الفرن.', 'Spread them out in the oven dish.', { on: 'tray' }),
      step('sprinkle', ['raisins', 'coconut', 'pistachios'], 'رش الزبيب وجوز الهند والمكسرات بين القطع.', 'Sprinkle the raisins, coconut and nuts between the pieces.', { on: 'tray' }),
      step('boil', ['milk', 'sugar'], 'شخص كبير يسخّن اللبن مع السكر حتى يغلي.', 'A grown-up heats the milk with the sugar until it boils.', { adult: 'stove' }),
      step('pour', ['milk'], 'الشخص الكبير يصب اللبن الساخن فوق الكرواسون.', 'The grown-up pours the hot milk over the croissants.', { on: 'tray', adult: 'hot' }),
      step('drizzle', ['cream'], 'ضع ملاعق صغيرة من القشطة فوقها إذا أحببت.', 'Add little spoonfuls of cream on top if you like.', { on: 'om-ali' }),
      step('bake', ['om-ali'], 'شخص كبير يخبزها على 200 درجة 15 دقيقة حتى يحمرّ الوجه.', 'A grown-up bakes it at 200°C (400°F) for 15 minutes, until golden on top.', { adult: 'oven', timer: 15 }),
      step('cool', ['om-ali'], 'انتظر 5 دقائق، فهي ساخنة جداً!', 'Wait 5 minutes: it is very hot!', { timer: 5 })
    ],
    tip: t('جرّب قطع الموز بدلاً من الزبيب.', 'Try banana pieces instead of raisins.')
  },
  {
    id: 'chocolate-biscuit-salami', group: 'sweet', ages: '6-8', minutes: 25, servings: 8, noCook: false,
    allergens: ['milk', 'gluten'], cover: 'biscuit-salami',
    title: t('سلامي الشوكولاتة بالبسكويت', 'Chocolate Biscuit "Salami"'),
    intro: t('حلوى بدون فرن تشبه السلامي، ولكنها شوكولاتة وبسكويت!', 'A no-bake treat that looks like salami, but it is chocolate and biscuits!'),
    ingredients: [
      ing('biscuits', '200 جرام بسكويت شاي', '200 g (7 oz) plain tea biscuits'),
      ing('chocolate', '150 جرام شوكولاتة', '150 g (5 oz) chocolate'),
      ing('butter', '3 ملاعق كبيرة زبدة', '3 tablespoons butter'),
      ing('milk', '3 ملاعق كبيرة لبن', '3 tablespoons milk'),
      ing('powdered-sugar', 'سكر بودرة للتزيين', 'Powdered sugar to dust')
    ],
    tools: ['plastic-bag', 'bowl', 'microwave', 'spoon', 'cling-film', 'fridge', 'knife'],
    steps: [
      step('pour', ['biscuits'], 'ضع البسكويت في كيس وأغلقه.', 'Put the biscuits in a bag and close it.', { on: 'plastic-bag' }),
      step('knead', ['plastic-bag'], 'اكسر البسكويت بيديك قطعاً صغيرة، ولكن ليس ناعماً جداً.', 'Break the biscuits into small pieces with your hands, but not too fine.'),
      step('microwave', ['chocolate', 'butter'], 'شخص كبير يذوّب الشوكولاتة والزبدة واللبن في الميكروويف.', 'A grown-up melts the chocolate, butter and milk in the microwave.', { adult: 'microwave' }),
      step('pour', ['biscuits'], 'صب البسكويت في الشوكولاتة الذائبة.', 'Tip the biscuits into the melted chocolate.'),
      step('stir', [], 'قلّب حتى يتغطى كل البسكويت.', 'Stir until all the biscuits are covered.'),
      step('wrap', ['cling-film'], 'ضع الخليط على ورق النايلون، ولفه مثل السجق.', 'Put the mix on cling film and roll it into a sausage.'),
      step('chill', ['biscuit-salami'], 'ضعه في الثلاجة ساعتين حتى يجمد.', 'Chill for 2 hours until firm.'),
      step('cut', ['biscuit-salami'], 'رش السكر البودرة، ثم يقطعه شخص كبير شرائح.', 'Dust it with powdered sugar, then a grown-up slices it.', { adult: 'knife' })
    ],
    tip: t('أضف مارشميلو صغيراً أو زبيباً للخليط.', 'Add mini marshmallows or raisins to the mix.')
  },
  {
    id: 'cookie-cutter-cookies', group: 'sweet', ages: '6-8', minutes: 45, servings: 10, noCook: false,
    allergens: ['milk', 'gluten', 'eggs'], cover: 'butter-cookies',
    title: t('بسكويت بالقطّاعات', 'Cookie-Cutter Butter Cookies'),
    intro: t('افرد العجين واختر أشكالك: نجوم وقلوب وحيوانات!', 'Roll out the dough and pick your shapes: stars, hearts and animals!'),
    ingredients: [
      ing('butter', 'نصف كوب زبدة طرية', '½ cup soft butter'),
      ing('powdered-sugar', 'نصف كوب سكر بودرة', '½ cup powdered sugar'),
      ing('egg', '1 بيضة', '1 egg'),
      ing('vanilla', '1 ملعقة صغيرة فانيليا', '1 teaspoon vanilla'),
      ing('flour', '2 كوب دقيق', '2 cups flour'),
      ing('sprinkles', 'حلوى ملونة', 'Colourful sprinkles')
    ],
    tools: ['bowl', 'spoon', 'rolling-pin', 'cookie-cutter', 'tray', 'oven'],
    steps: [
      step('stir', ['butter', 'powdered-sugar'], 'اخلط الزبدة والسكر حتى يصبح الخليط كريمياً.', 'Mix the butter and sugar until creamy.'),
      step('crack', ['egg', 'vanilla'], 'أضف البيضة والفانيليا وقلّب.', 'Add the egg and vanilla and stir.'),
      step('pour', ['flour'], 'أضف الدقيق شيئاً فشيئاً.', 'Add the flour a little at a time.'),
      step('knead', ['dough-ball'], 'اعجن بيديك حتى تصبح كرة ناعمة.', 'Knead with your hands into a smooth ball.'),
      step('roll-out', ['dough-ball'], 'افرد العجين بالنشابة حتى يصبح بسُمك إصبعك الصغير.', 'Roll out the dough until it is as thick as your little finger.'),
      step('shape', ['butter-cookies'], 'اضغط بالقطاعات لعمل نجوم وقلوب وحيوانات!', 'Press out stars, hearts and animals with the cutters!', { on: 'baking-paper' }),
      step('sprinkle', ['sprinkles'], 'ضعها على الصينية ورش الحلوى الملونة فوقها.', 'Put them on the tray and add sprinkles.', { on: 'butter-cookies' }),
      step('bake', ['butter-cookies'], 'شخص كبير يخبزها على 180 درجة 10 دقائق.', 'A grown-up bakes them at 180°C (350°F) for 10 minutes.', { adult: 'oven', timer: 10 }),
      step('cool', ['butter-cookies'], 'اتركها تبرد 15 دقيقة قبل الأكل.', 'Let them cool for 15 minutes before eating.', { timer: 15 })
    ],
    tip: t('اجمع بقايا العجين وافردها مرة أخرى.', 'Squash the leftover dough together and roll it out again.')
  },
  {
    id: 'mug-cake', group: 'sweet', ages: '6-8', minutes: 10, servings: 1, noCook: false,
    allergens: ['milk', 'gluten'], cover: 'mug-cake',
    title: t('كيكة المج بالشوكولاتة', 'Chocolate Mug Cake'),
    intro: t('كيكة كاملة في مج، جاهزة في دقيقة!', 'A whole cake in a mug, ready in a minute!'),
    ingredients: [
      ing('flour', '4 ملاعق كبيرة دقيق', '4 tablespoons flour'),
      ing('sugar', '3 ملاعق كبيرة سكر', '3 tablespoons sugar'),
      ing('cocoa', '2 ملعقة كبيرة كاكاو', '2 tablespoons cocoa powder'),
      ing('baking-powder', 'ربع ملعقة صغيرة بيكنج بودر', '¼ teaspoon baking powder'),
      ing('milk', '4 ملاعق كبيرة لبن', '4 tablespoons milk'),
      ing('oil', '2 ملعقة كبيرة زيت', '2 tablespoons oil'),
      ing('chocolate-chips', '1 ملعقة كبيرة شوكولاتة صغيرة', '1 tablespoon chocolate chips')
    ],
    tools: ['mug', 'fork', 'spoon', 'microwave'],
    steps: [
      step('pour', ['flour', 'sugar', 'cocoa'], 'ضع الدقيق والسكر والكاكاو والبيكنج بودر في المج.', 'Put the flour, sugar, cocoa and baking powder in the mug.', { on: 'mug' }),
      step('mix', [], 'قلّب بالشوكة.', 'Stir with the fork.', { on: 'mug', tool: 'fork' }),
      step('pour', ['milk', 'oil'], 'أضف اللبن والزيت.', 'Add the milk and oil.', { on: 'mug' }),
      step('mix', [], 'قلّب جيداً حتى تختفي كل البقع البيضاء.', 'Stir well until all the white bits are gone.', { on: 'mug', tool: 'fork' }),
      step('sprinkle', ['chocolate-chips'], 'رش الشوكولاتة الصغيرة فوقها.', 'Sprinkle the chocolate chips on top.', { on: 'mug' }),
      step('microwave', ['mug-cake'], 'شخص كبير يضعه في الميكروويف دقيقة واحدة تقريباً.', 'A grown-up microwaves it for about 1 minute.', { adult: 'microwave' }),
      step('cool', ['mug-cake'], 'انتظر 3 دقائق، فالمج ساخن جداً!', 'Wait 3 minutes: the mug is very hot!', { timer: 3 })
    ],
    tip: t('ضع ملعقة زبادي أو آيس كريم فوقها.', 'Top it with a spoon of yogurt or ice cream.')
  },
  {
    id: 'cornflake-nests', group: 'sweet', ages: '3-5', minutes: 20, servings: 8, noCook: false,
    allergens: ['milk', 'gluten'], cover: 'cornflake-nests',
    title: t('أعشاش الكورن فليكس', 'Cornflake Chocolate Nests'),
    intro: t('أعشاش شوكولاتة مقرمشة فيها بيض ملون صغير!', 'Crunchy chocolate nests with little colourful eggs inside!'),
    ingredients: [
      ing('chocolate', '150 جرام شوكولاتة', '150 g (5 oz) chocolate'),
      ing('cornflakes', '2 كوب كورن فليكس', '2 cups cornflakes'),
      ing('chocolate-eggs', 'بيض شوكولاتة صغير أو حلوى ملونة', 'Mini chocolate eggs or sweets')
    ],
    tools: ['bowl', 'microwave', 'spoon', 'paper-cases', 'fridge'],
    steps: [
      step('microwave', ['chocolate'], 'شخص كبير يذوّب الشوكولاتة في الميكروويف.', 'A grown-up melts the chocolate in the microwave.', { adult: 'microwave' }),
      step('pour', ['cornflakes'], 'أضف الكورن فليكس إلى الشوكولاتة.', 'Add the cornflakes to the chocolate.'),
      step('stir', [], 'قلّب بلطف حتى تتغطى كلها.', 'Stir gently until they are all covered.'),
      step('scoop', ['spoon'], 'ضع ملعقة من الخليط في كل كوب ورقي.', 'Put a spoonful into each paper case.', { on: 'paper-cases' }),
      step('press', ['cornflake-nests'], 'اضغط في الوسط بظهر الملعقة لتصنع عشاً.', 'Press the middle with the back of the spoon to make a nest.'),
      step('arrange', ['chocolate-eggs'], 'ضع البيض الصغير في كل عش!', 'Put little eggs in each nest!', { on: 'cornflake-nests' }),
      step('chill', ['cornflake-nests'], 'ضعها في الثلاجة 30 دقيقة.', 'Chill for 30 minutes.', { timer: 30 })
    ],
    tip: t('استخدم الشوكولاتة البيضاء لأعشاش بيضاء.', 'Use white chocolate for snowy nests.')
  },
  {
    id: 'banana-muffins', group: 'sweet', ages: '6-8', minutes: 40, servings: 12, noCook: false,
    allergens: ['eggs', 'milk', 'gluten'], cover: 'banana-muffins',
    title: t('مافن الموز', 'Banana Muffins'),
    intro: t('أفضل طريقة لاستخدام الموز البني: مافن طري وحلو!', 'The best way to use brown bananas: soft, sweet muffins!'),
    ingredients: [
      ing('banana', '3 موزات ناضجة جداً', '3 very ripe bananas'),
      ing('egg', '1 بيضة', '1 egg'),
      ing('sugar', 'ثلث كوب سكر', '⅓ cup sugar'),
      ing('oil', 'ثلث كوب زيت', '⅓ cup oil'),
      ing('milk', 'ربع كوب لبن', '¼ cup milk'),
      ing('flour', '1 ونصف كوب دقيق', '1½ cups flour'),
      ing('baking-powder', '2 ملعقة صغيرة بيكنج بودر', '2 teaspoons baking powder')
    ],
    tools: ['bowl', 'fork', 'spoon', 'muffin-tin', 'paper-cases', 'oven'],
    steps: [
      step('peel', ['banana'], 'قشّر الموز.', 'Peel the bananas.'),
      step('mash', ['banana'], 'اهرس الموز بالشوكة حتى يصبح مثل البيوريه.', 'Mash the bananas with a fork until they are mushy.'),
      step('crack', ['egg'], 'اكسر البيضة فوق الموز.', 'Crack the egg over the bananas.'),
      step('pour', ['sugar', 'oil', 'milk'], 'أضف السكر والزيت واللبن وقلّب.', 'Add the sugar, oil and milk, and stir.'),
      step('pour', ['flour', 'baking-powder'], 'أضف الدقيق والبيكنج بودر.', 'Add the flour and baking powder.'),
      step('stir', [], 'قلّب بلطف فقط حتى يختفي الدقيق. لا تُكثر التقليب!', 'Stir gently just until the flour disappears. Do not over-mix!'),
      step('scoop', ['paper-cases'], 'ضع الأكواب الورقية في القالب، واملأ كل واحد حتى ثلثيه.', 'Put paper cases in the tin and fill each one two-thirds full.', { on: 'muffin-tin' }),
      step('bake', ['banana-muffins'], 'شخص كبير يخبزها على 180 درجة لمدة 20 دقيقة.', 'A grown-up bakes them at 180°C (350°F) for 20 minutes.', { adult: 'oven', timer: 20 }),
      step('cool', ['banana-muffins'], 'اتركها تبرد 10 دقائق.', 'Let them cool for 10 minutes.', { timer: 10 })
    ],
    tip: t('أضف شوكولاتة صغيرة أو زبيباً للخليط.', 'Add chocolate chips or raisins to the mix.')
  },
  {
    id: 'cream-qatayef', group: 'sweet', ages: '6-8', minutes: 20, servings: 6, noCook: true,
    allergens: ['milk', 'gluten', 'nuts'], cover: 'qatayef-cream', archiveRecipeId: 'des-57',
    title: t('قطايف عصافيري بالقشطة', 'Cream-Filled Qatayef'),
    intro: t('قطايف رمضان محشوة بالقشطة، بدون قلي أو فرن!', 'Ramadan qatayef filled with cream, with no frying or oven!'),
    ingredients: [
      ing('qatayef', '12 قطعة قطايف صغيرة جاهزة', '12 small ready-made qatayef'),
      ing('cream', '1 كوب قشطة', '1 cup thick cream (ashta)'),
      ing('pistachios', '3 ملاعق كبيرة فستق مطحون', '3 tablespoons ground pistachios'),
      ing('honey', 'عسل أو شربات للتزيين', 'Honey or syrup to drizzle')
    ],
    tools: ['spoon', 'bowl', 'plate'],
    steps: [
      step('fold', ['qatayef'], 'اطوِ القطايفة نصفين، واضغط طرفها السفلي فقط لتبقى مفتوحة مثل المخروط.', 'Fold a qatayef in half and pinch just the bottom edge, so it stays open like a cone.'),
      step('fill', ['cream'], 'املأ الفتحة بالقشطة بالملعقة الصغيرة.', 'Fill the opening with cream using a teaspoon.', { on: 'qatayef' }),
      step('dip', ['pistachios'], 'اغمس طرف القشطة في الفستق الأخضر.', 'Dip the cream end into the green pistachios.'),
      step('arrange', ['qatayef-cream'], 'رصّها في الطبق.', 'Line them up on the plate.'),
      step('drizzle', ['honey'], 'زيّنها بخيط من العسل أو الشربات.', 'Drizzle a little honey or syrup on top.', { on: 'qatayef-cream' }),
      step('eat', ['qatayef-cream'], 'رمضان كريم! كُلها باردة.', 'Ramadan Kareem! Eat them cold.')
    ],
    tip: t('اغمس بعضها في جوز الهند بدلاً من الفستق.', 'Dip some in coconut instead of pistachios.')
  },
  {
    id: 'date-maamoul', group: 'sweet', ages: '6-8', minutes: 60, servings: 12, noCook: false,
    allergens: ['milk', 'gluten'], cover: 'maamoul',
    title: t('معمول بالتمر', 'Date Maamoul'),
    intro: t('كعك العيد المحشو بالتمر، تشكّله بالقالب أو بالشوكة.', 'Date-filled Eid cookies that you shape with a mould or a fork.'),
    ingredients: [
      ing('semolina', '1 كوب سميد', '1 cup semolina'),
      ing('flour', '1 كوب دقيق', '1 cup flour'),
      ing('butter', 'ثلاثة أرباع كوب زبدة ذائبة', '¾ cup melted butter'),
      ing('powdered-sugar', '2 ملعقة كبيرة سكر بودرة', '2 tablespoons powdered sugar'),
      ing('milk', '4 ملاعق كبيرة لبن', '4 tablespoons milk'),
      ing('date-paste', '1 كوب عجوة', '1 cup date paste')
    ],
    tools: ['microwave', 'bowl', 'cookie-mold', 'tray', 'oven'],
    steps: [
      step('microwave', ['butter'], 'شخص كبير يذوّب الزبدة في الميكروويف.', 'A grown-up melts the butter in the microwave.', { adult: 'microwave' }),
      step('pour', ['semolina', 'flour', 'powdered-sugar'], 'ضع السميد والدقيق والسكر في السلطانية.', 'Put the semolina, flour and sugar in the bowl.'),
      step('pour', ['butter', 'milk'], 'أضف الزبدة الذائبة واللبن.', 'Add the melted butter and milk.'),
      step('knead', ['dough-ball'], 'اعجن بيديك حتى تصبح عجينة طرية.', 'Knead with your hands into a soft dough.'),
      step('roll', ['date-paste'], 'كوّر العجوة كرات صغيرة.', 'Roll the date paste into small balls.'),
      step('fill', ['date-paste'], 'غلّف كل كرة عجوة بقطعة من العجين.', 'Wrap each date ball in a piece of dough.', { on: 'dough-ball' }),
      step('stamp', ['maamoul'], 'اضغطها في قالب المعمول ثم اطرقه لتخرج، أو انقشها بالشوكة.', 'Press it into the maamoul mould and tap it out, or draw lines with a fork.'),
      step('bake', ['maamoul'], 'شخص كبير يخبزها على 180 درجة لمدة 20 دقيقة.', 'A grown-up bakes them at 180°C (350°F) for 20 minutes.', { adult: 'oven', timer: 20 }),
      step('sprinkle', ['powdered-sugar'], 'بعد أن تبرد، رش السكر البودرة.', 'Once cool, dust them with powdered sugar.', { on: 'maamoul' })
    ],
    tip: t('احشُ بعضها بالجوز أو الفستق إذا لم يكن عندك حساسية.', 'Fill some with walnuts or pistachios if no one has a nut allergy.')
  },
  {
    id: 'chocolate-strawberries', group: 'sweet', ages: '3-5', minutes: 20, servings: 4, noCook: false,
    allergens: ['milk'], cover: 'choco-strawberries',
    title: t('فراولة بالشوكولاتة', 'Chocolate-Dipped Strawberries'),
    intro: t('فراولة حمراء مغموسة في الشوكولاتة. سهلة وجميلة!', 'Red strawberries dipped in chocolate. Easy and pretty!'),
    ingredients: [
      ing('strawberry', '12 حبة فراولة', '12 strawberries'),
      ing('chocolate', '100 جرام شوكولاتة', '100 g (3½ oz) chocolate'),
      ing('sprinkles', 'حلوى ملونة', 'Colourful sprinkles'),
      ing('coconut', 'جوز هند مبشور', 'Shredded coconut')
    ],
    tools: ['bowl', 'microwave', 'tray', 'baking-paper', 'fridge'],
    steps: [
      step('rinse', ['strawberry'], 'اغسل الفراولة وجففها جيداً جداً.', 'Wash the strawberries and dry them really well.'),
      step('microwave', ['chocolate'], 'شخص كبير يذوّب الشوكولاتة في الميكروويف.', 'A grown-up melts the chocolate in the microwave.', { adult: 'microwave' }),
      step('dip', ['strawberry'], 'امسك الفراولة من أوراقها واغمسها في الشوكولاتة.', 'Hold a strawberry by its leaves and dip it in the chocolate.'),
      step('sprinkle', ['sprinkles', 'coconut'], 'رش الحلوى الملونة أو جوز الهند.', 'Add sprinkles or coconut.', { on: 'choco-strawberries' }),
      step('arrange', ['choco-strawberries'], 'ضعها على ورق الزبدة.', 'Put them on baking paper.', { on: 'baking-paper' }),
      step('chill', ['choco-strawberries'], 'ضعها في الثلاجة 20 دقيقة حتى تجمد الشوكولاتة.', 'Chill for 20 minutes until the chocolate sets.', { timer: 20 })
    ],
    tip: t('اغمس نصفها في شوكولاتة بيضاء.', 'Dip half of them in white chocolate.')
  },
  {
    id: 'rice-pudding', group: 'sweet', ages: '6-8', minutes: 45, servings: 4, noCook: false,
    allergens: ['milk'], cover: 'rice-pudding', archiveRecipeId: 'des-25',
    title: t('أرز باللبن', 'Rice Pudding'),
    intro: t('أرز باللبن الكريمي بالقرفة، مثل أرز تيتا!', 'Creamy rice pudding with cinnamon, just like Teta made!'),
    ingredients: [
      ing('rice', 'نصف كوب أرز مصري', '½ cup short-grain rice'),
      ing('water', '1 كوب ماء', '1 cup water'),
      ing('milk', '4 أكواب لبن', '4 cups milk'),
      ing('sugar', 'نصف كوب سكر', '½ cup sugar'),
      ing('vanilla', 'قليل من الفانيليا', 'A little vanilla'),
      ing('cinnamon', 'قرفة للتزيين', 'Cinnamon to decorate'),
      ing('raisins', 'زبيب للتزيين', 'Raisins to decorate')
    ],
    tools: ['sieve', 'pot', 'spoon', 'bowl', 'fridge'],
    steps: [
      step('rinse', ['rice'], 'اغسل الأرز في المصفاة حتى يصبح الماء صافياً.', 'Rinse the rice in the sieve until the water runs clear.'),
      step('pour', ['rice', 'water'], 'ضع الأرز والماء في الحلة.', 'Put the rice and water in the pot.', { on: 'pot' }),
      step('boil', ['rice'], 'شخص كبير يطبخ الأرز في الماء 10 دقائق.', 'A grown-up cooks the rice in the water for 10 minutes.', { adult: 'stove', timer: 10 }),
      step('simmer', ['milk', 'sugar'], 'يضيف الشخص الكبير اللبن والسكر، ويطبخه على نار هادئة 25 دقيقة مع التقليب.', 'The grown-up adds the milk and sugar and cooks it on low heat for 25 minutes, stirring.', { adult: 'stove', timer: 25 }),
      step('pour', ['vanilla'], 'الشخص الكبير يضيف الفانيليا ويصبه في الأطباق.', 'The grown-up stirs in the vanilla and pours it into bowls.', { on: 'bowl', adult: 'hot' }),
      step('chill', ['rice-pudding'], 'اتركه يبرد، ثم ضعه في الثلاجة.', 'Let it cool, then put it in the fridge.'),
      step('sprinkle', ['cinnamon', 'raisins'], 'زيّنه بالقرفة والزبيب.', 'Decorate with cinnamon and raisins.', { on: 'rice-pudding' })
    ],
    tip: t('ارسم وجهاً ضاحكاً بالقرفة!', 'Draw a smiley face with the cinnamon!')
  },

  // ---------------- Drinks ----------------
  {
    id: 'mint-lemonade', group: 'drink', ages: '3-5', minutes: 10, servings: 4, noCook: true,
    allergens: [], cover: 'lemonade',
    title: t('ليمون بالنعناع', 'Mint Lemonade'),
    intro: t('ليمونادة باردة منعشة تعصرها بيديك!', 'Cold, fresh lemonade that you squeeze yourself!'),
    ingredients: [
      ing('lemon', '4 ليمونات', '4 lemons'),
      ing('sugar', '4 ملاعق كبيرة سكر', '4 tablespoons sugar'),
      ing('water', '4 أكواب ماء بارد', '4 cups cold water'),
      ing('mint', 'حفنة نعناع', 'A handful of mint'),
      ing('ice', 'مكعبات ثلج', 'Ice cubes')
    ],
    tools: ['knife', 'juicer', 'pitcher', 'spoon', 'glass'],
    steps: [
      step('rinse', ['lemon', 'mint'], 'اغسل الليمون والنعناع.', 'Wash the lemons and mint.'),
      step('cut', ['lemon'], 'شخص كبير يقطع الليمون نصفين.', 'A grown-up cuts the lemons in half.', { adult: 'knife' }),
      step('squeeze', ['lemon'], 'اعصر كل نصف على العصارة. لف، لف!', 'Squeeze each half on the lemon squeezer. Twist, twist!'),
      step('pour', ['lemon', 'sugar'], 'صب العصير في الإبريق وأضف السكر.', 'Pour the juice into the jug and add the sugar.', { on: 'pitcher' }),
      step('pour', ['water'], 'أضف الماء البارد وقلّب حتى يذوب السكر.', 'Add the cold water and stir until the sugar dissolves.', { on: 'pitcher' }),
      step('tear', ['mint'], 'قطّع النعناع بيديك وأضفه. شم الرائحة!', 'Tear the mint and add it. Smell that!'),
      step('pour', ['ice'], 'ضع الثلج في الأكواب وصب الليمون.', 'Put ice in the glasses and pour in the lemonade.', { on: 'glass' })
    ],
    tip: t('أضف شرائح فراولة لليمونادة وردية.', 'Add strawberry slices for pink lemonade.')
  },
  {
    id: 'hot-sahlab', group: 'drink', ages: '6-8', minutes: 15, servings: 2, noCook: false,
    allergens: ['milk', 'nuts'], cover: 'sahlab',
    title: t('السحلب الساخن', 'Hot Sahlab'),
    intro: t('مشروب الشتاء الكريمي الدافئ، مزيّن بالمكسرات والقرفة.', 'A creamy, warm winter drink topped with nuts and cinnamon.'),
    ingredients: [
      ing('milk', '2 كوب لبن', '2 cups milk'),
      ing('cornstarch', '2 ملعقة كبيرة نشا', '2 tablespoons cornstarch'),
      ing('sugar', '2 ملعقة كبيرة سكر', '2 tablespoons sugar'),
      ing('vanilla', 'قليل من الفانيليا', 'A little vanilla'),
      ing('coconut', 'جوز هند مبشور', 'Shredded coconut'),
      ing('pistachios', 'مكسرات مجروشة', 'Chopped nuts'),
      ing('cinnamon', 'رشة قرفة', 'A pinch of cinnamon')
    ],
    tools: ['pot', 'whisk', 'mug', 'spoon'],
    steps: [
      step('pour', ['milk'], 'صب اللبن البارد في الحلة.', 'Pour the cold milk into the pot.', { on: 'pot' }),
      step('pour', ['cornstarch', 'sugar'], 'أضف النشا والسكر.', 'Add the cornstarch and sugar.', { on: 'pot' }),
      step('whisk', [], 'اخفق حتى يذوب النشا تماماً.', 'Whisk until the cornstarch is gone.', { on: 'pot' }),
      step('simmer', ['vanilla'], 'شخص كبير يطبخه على نار هادئة مع الفانيليا ويقلّب حتى يثقل.', 'A grown-up cooks it on low heat with the vanilla, stirring until thick.', { adult: 'stove' }),
      step('pour', ['milk'], 'الشخص الكبير يصبه في المج.', 'The grown-up pours it into mugs.', { on: 'mug', adult: 'hot' }),
      step('sprinkle', ['coconut', 'pistachios', 'cinnamon'], 'زيّنه بجوز الهند والمكسرات والقرفة.', 'Top it with coconut, nuts and cinnamon.', { on: 'sahlab' }),
      step('cool', ['sahlab'], 'انتظر قليلاً وانفخ قبل أن تشرب!', 'Wait a little and blow before you drink!', { timer: 2 })
    ],
    tip: t('أضف زبيباً أو موزاً مقطعاً فوقه.', 'Add raisins or banana slices on top.')
  },
  {
    id: 'iced-karkade', group: 'drink', ages: '6-8', minutes: 25, servings: 4, noCook: false,
    allergens: [], cover: 'karkade',
    title: t('كركديه بارد', 'Iced Hibiscus (Karkade)'),
    intro: t('مشروب مصري أحمر بلون الياقوت، بارد ومنعش!', 'A ruby-red Egyptian drink, cold and refreshing!'),
    ingredients: [
      ing('hibiscus', 'نصف كوب كركديه مجفف', '½ cup dried hibiscus flowers'),
      ing('water', '4 أكواب ماء', '4 cups water'),
      ing('sugar', '4 ملاعق كبيرة سكر', '4 tablespoons sugar'),
      ing('lemon', 'نصف ليمونة (اختياري)', 'Half a lemon (optional)'),
      ing('ice', 'ثلج', 'Ice')
    ],
    tools: ['pitcher', 'sieve', 'spoon', 'glass', 'fridge'],
    steps: [
      step('pour', ['hibiscus'], 'ضع الكركديه في الإبريق. انظر كم هو أحمر!', 'Put the hibiscus in the jug. Look how red it is!', { on: 'pitcher' }),
      step('pour', ['water'], 'شخص كبير يصب الماء الساخن فوقه.', 'A grown-up pours hot water over it.', { on: 'pitcher', adult: 'hot' }),
      step('cool', ['pitcher'], 'انتظر 15 دقيقة حتى يصبح اللون أحمر غامقاً.', 'Wait 15 minutes until it turns dark red.', { timer: 15 }),
      step('pour', ['sieve'], 'الشخص الكبير يصفّيه بالمصفاة.', 'The grown-up strains it through the sieve.', { on: 'pitcher', adult: 'hot' }),
      step('stir', ['sugar'], 'أضف السكر وقلّب حتى يذوب.', 'Add the sugar and stir until it dissolves.', { on: 'pitcher' }),
      step('chill', ['pitcher'], 'ضعه في الثلاجة حتى يبرد جداً.', 'Chill it in the fridge until very cold.'),
      step('pour', ['ice'], 'صبه على الثلج، واعصر عليه قليلاً من الليمون إذا أحببت.', 'Pour it over ice, with a squeeze of lemon if you like.', { on: 'glass' })
    ],
    tip: t('جمّده في قوالب المصاصات لمصاصات حمراء.', 'Freeze it in ice-pop moulds for red ice pops.')
  }
];
