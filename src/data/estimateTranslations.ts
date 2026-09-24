import { SupportedLanguage } from '../types';
import { CostGroup, HealthTag } from './recipeEstimates';

export interface EstimateStrings {
  tab: string;
  nutritionTitle: string;
  /** `{n}` is replaced with the servings count. */
  perServingBasis: string;
  nutrient: string;
  perServing: string;
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
  fiber: string;
  sugar: string;
  kcal: string;
  grams: string;
  energySplit: string;
  healthTitle: string;
  tags: Record<HealthTag, { label: string; hint: string }>;
  costTitle: string;
  ingredientGroup: string;
  costUsd: string;
  groups: Record<CostGroup, string>;
  total: string;
  costPerServing: string;
  estimated: string;
  nutritionNote: string;
  costNote: string;
  /** `{v}` is replaced with the value. */
  kcalChip: string;
  costChip: string;
}

const en: EstimateStrings = {
  tab: 'Nutrition & Cost',
  nutritionTitle: 'Nutritional Value',
  perServingBasis: 'Per serving — the recipe makes about {n} servings',
  nutrient: 'Nutrient',
  perServing: 'Per serving',
  calories: 'Calories',
  protein: 'Protein',
  fat: 'Fat',
  carbs: 'Carbohydrates',
  fiber: 'Fiber',
  sugar: 'Sugars',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'Where the calories come from',
  healthTitle: 'Health Notes',
  tags: {
    highProtein: { label: 'High protein', hint: 'A generous share of the calories comes from protein.' },
    goodFiber: { label: 'Good source of fiber', hint: 'Around 5 g of fiber or more per serving.' },
    light: { label: 'Light dish', hint: 'Under 250 kcal per serving.' },
    hearty: { label: 'Hearty & filling', hint: '600 kcal or more per serving — enjoy as a main meal.' },
    highSugar: { label: 'High in sugar', hint: 'Best enjoyed as an occasional treat.' },
    highFat: { label: 'Rich in fat', hint: 'Half or more of the calories come from fat.' },
    lowFat: { label: 'Low in fat', hint: '5 g of fat or less per serving.' },
    meatFree: { label: 'Meat-free', hint: 'No meat, poultry or fish in the ingredients.' }
  },
  costTitle: 'Estimated Recipe Cost',
  ingredientGroup: 'Ingredient group',
  costUsd: 'Cost (USD)',
  groups: {
    protein: 'Meat, poultry & seafood',
    dairyEggs: 'Dairy, ghee & eggs',
    produce: 'Vegetables, herbs & fruit',
    grains: 'Rice, flour, pasta & legumes',
    fats: 'Cooking oils & fats',
    sweeteners: 'Sugar, honey & syrups',
    specialty: 'Nuts, dried fruit & specialty items',
    spices: 'Spices & seasonings'
  },
  total: 'Estimated total',
  costPerServing: 'Per serving',
  estimated: 'estimated',
  nutritionNote: 'Approximate values calculated from the recipe’s ingredients using typical nutrient data. They are not a substitute for professional dietary advice.',
  costNote: 'Based on average US supermarket prices; actual costs vary by country, season and brand.',
  kcalChip: '≈ {v} kcal / serving',
  costChip: '≈ {v} / serving'
};

const ar: EstimateStrings = {
  tab: 'القيمة الغذائية والتكلفة',
  nutritionTitle: 'القيمة الغذائية',
  perServingBasis: 'لكل حصة — تكفي الوصفة حوالي {n} حصص',
  nutrient: 'العنصر الغذائي',
  perServing: 'القيمة لكل حصة',
  calories: 'السعرات الحرارية',
  protein: 'البروتين',
  fat: 'الدهون',
  carbs: 'الكربوهيدرات',
  fiber: 'الألياف',
  sugar: 'السكريات',
  kcal: 'سعرة',
  grams: 'جرام',
  energySplit: 'مصدر السعرات الحرارية',
  healthTitle: 'ملاحظات صحية',
  tags: {
    highProtein: { label: 'غني بالبروتين', hint: 'نسبة كبيرة من السعرات مصدرها البروتين.' },
    goodFiber: { label: 'مصدر جيد للألياف', hint: 'حوالي 5 جرام ألياف أو أكثر في الحصة.' },
    light: { label: 'طبق خفيف', hint: 'أقل من 250 سعرة حرارية للحصة.' },
    hearty: { label: 'طبق مُشبع', hint: '600 سعرة أو أكثر للحصة — مناسب كوجبة رئيسية.' },
    highSugar: { label: 'مرتفع السكر', hint: 'يُفضل تناوله باعتدال وفي المناسبات.' },
    highFat: { label: 'غني بالدهون', hint: 'نصف السعرات أو أكثر مصدرها الدهون.' },
    lowFat: { label: 'قليل الدهون', hint: '5 جرام دهون أو أقل في الحصة.' },
    meatFree: { label: 'خالٍ من اللحوم', hint: 'لا يحتوي على لحوم أو دواجن أو أسماك.' }
  },
  costTitle: 'التكلفة المالية للوصفة',
  ingredientGroup: 'المكونات',
  costUsd: 'التكلفة بالدولار ($)',
  groups: {
    protein: 'لحوم ودواجن ومأكولات بحرية',
    dairyEggs: 'ألبان وسمن وبيض',
    produce: 'خضروات وأعشاب وفاكهة',
    grains: 'أرز ودقيق ومكرونة وبقوليات',
    fats: 'زيوت ودهون الطهي',
    sweeteners: 'سكر وعسل وقطر',
    specialty: 'مكسرات وفواكه مجففة ومكونات خاصة',
    spices: 'بهارات وتوابل'
  },
  total: 'إجمالي التكلفة التقديرية',
  costPerServing: 'تكلفة الحصة',
  estimated: 'تقديري',
  nutritionNote: 'قيم تقريبية محسوبة من مكونات الوصفة وفق بيانات غذائية معتادة، ولا تُغني عن استشارة أخصائي التغذية.',
  costNote: 'محسوبة وفق متوسط أسعار المتاجر في الولايات المتحدة، وتختلف التكلفة الفعلية حسب البلد والموسم والعلامة التجارية.',
  kcalChip: '≈ {v} سعرة / حصة',
  costChip: '≈ {v} / حصة'
};

const fr: EstimateStrings = {
  tab: 'Nutrition et coût',
  nutritionTitle: 'Valeur nutritionnelle',
  perServingBasis: 'Par portion — la recette donne environ {n} portions',
  nutrient: 'Nutriment',
  perServing: 'Par portion',
  calories: 'Calories',
  protein: 'Protéines',
  fat: 'Lipides',
  carbs: 'Glucides',
  fiber: 'Fibres',
  sugar: 'Sucres',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'Origine des calories',
  healthTitle: 'Notes santé',
  tags: {
    highProtein: { label: 'Riche en protéines', hint: 'Une part importante des calories provient des protéines.' },
    goodFiber: { label: 'Bonne source de fibres', hint: 'Environ 5 g de fibres ou plus par portion.' },
    light: { label: 'Plat léger', hint: 'Moins de 250 kcal par portion.' },
    hearty: { label: 'Copieux et rassasiant', hint: '600 kcal ou plus par portion — idéal en plat principal.' },
    highSugar: { label: 'Riche en sucre', hint: 'À savourer de temps en temps.' },
    highFat: { label: 'Riche en matières grasses', hint: 'La moitié des calories ou plus provient des lipides.' },
    lowFat: { label: 'Pauvre en matières grasses', hint: '5 g de lipides ou moins par portion.' },
    meatFree: { label: 'Sans viande', hint: 'Ni viande, ni volaille, ni poisson dans les ingrédients.' }
  },
  costTitle: 'Coût estimé de la recette',
  ingredientGroup: 'Groupe d’ingrédients',
  costUsd: 'Coût (USD)',
  groups: {
    protein: 'Viandes, volailles et fruits de mer',
    dairyEggs: 'Produits laitiers, beurre clarifié et œufs',
    produce: 'Légumes, herbes et fruits',
    grains: 'Riz, farine, pâtes et légumineuses',
    fats: 'Huiles et matières grasses',
    sweeteners: 'Sucre, miel et sirops',
    specialty: 'Fruits secs, noix et produits spéciaux',
    spices: 'Épices et assaisonnements'
  },
  total: 'Total estimé',
  costPerServing: 'Par portion',
  estimated: 'estimation',
  nutritionNote: 'Valeurs approximatives calculées à partir des ingrédients de la recette et de données nutritionnelles courantes. Elles ne remplacent pas l’avis d’un professionnel de la nutrition.',
  costNote: 'Basé sur les prix moyens des supermarchés américains ; le coût réel varie selon le pays, la saison et la marque.',
  kcalChip: '≈ {v} kcal / portion',
  costChip: '≈ {v} / portion'
};

const es: EstimateStrings = {
  tab: 'Nutrición y costo',
  nutritionTitle: 'Valor nutricional',
  perServingBasis: 'Por porción — la receta rinde unas {n} porciones',
  nutrient: 'Nutriente',
  perServing: 'Por porción',
  calories: 'Calorías',
  protein: 'Proteínas',
  fat: 'Grasas',
  carbs: 'Carbohidratos',
  fiber: 'Fibra',
  sugar: 'Azúcares',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'De dónde vienen las calorías',
  healthTitle: 'Notas de salud',
  tags: {
    highProtein: { label: 'Alto en proteínas', hint: 'Buena parte de las calorías proviene de las proteínas.' },
    goodFiber: { label: 'Buena fuente de fibra', hint: 'Alrededor de 5 g de fibra o más por porción.' },
    light: { label: 'Plato ligero', hint: 'Menos de 250 kcal por porción.' },
    hearty: { label: 'Contundente y saciante', hint: '600 kcal o más por porción — ideal como plato principal.' },
    highSugar: { label: 'Alto en azúcar', hint: 'Mejor disfrutarlo de vez en cuando.' },
    highFat: { label: 'Rico en grasas', hint: 'La mitad o más de las calorías proviene de las grasas.' },
    lowFat: { label: 'Bajo en grasas', hint: '5 g de grasa o menos por porción.' },
    meatFree: { label: 'Sin carne', hint: 'Sin carne, aves ni pescado en los ingredientes.' }
  },
  costTitle: 'Costo estimado de la receta',
  ingredientGroup: 'Grupo de ingredientes',
  costUsd: 'Costo (USD)',
  groups: {
    protein: 'Carnes, aves y mariscos',
    dairyEggs: 'Lácteos, mantequilla clarificada y huevos',
    produce: 'Verduras, hierbas y frutas',
    grains: 'Arroz, harina, pasta y legumbres',
    fats: 'Aceites y grasas para cocinar',
    sweeteners: 'Azúcar, miel y almíbares',
    specialty: 'Frutos secos, fruta deshidratada y productos especiales',
    spices: 'Especias y condimentos'
  },
  total: 'Total estimado',
  costPerServing: 'Por porción',
  estimated: 'estimado',
  nutritionNote: 'Valores aproximados calculados a partir de los ingredientes de la receta con datos nutricionales habituales. No sustituyen el consejo de un profesional de la nutrición.',
  costNote: 'Basado en precios promedio de supermercados de EE. UU.; el costo real varía según el país, la temporada y la marca.',
  kcalChip: '≈ {v} kcal / porción',
  costChip: '≈ {v} / porción'
};

const ja: EstimateStrings = {
  tab: '栄養とコスト',
  nutritionTitle: '栄養価',
  perServingBasis: '1人分あたり — このレシピは約{n}人分です',
  nutrient: '栄養素',
  perServing: '1人分あたり',
  calories: 'エネルギー',
  protein: 'たんぱく質',
  fat: '脂質',
  carbs: '炭水化物',
  fiber: '食物繊維',
  sugar: '糖類',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'カロリーの内訳',
  healthTitle: '健康メモ',
  tags: {
    highProtein: { label: '高たんぱく', hint: 'カロリーの多くをたんぱく質が占めています。' },
    goodFiber: { label: '食物繊維が豊富', hint: '1人分あたり約5g以上の食物繊維。' },
    light: { label: '軽めの一品', hint: '1人分あたり250kcal未満。' },
    hearty: { label: 'ボリューム満点', hint: '1人分あたり600kcal以上 — メインディッシュ向き。' },
    highSugar: { label: '糖分が多め', hint: 'ときどきのお楽しみにおすすめです。' },
    highFat: { label: '脂質が多め', hint: 'カロリーの半分以上が脂質由来です。' },
    lowFat: { label: '低脂肪', hint: '1人分あたり脂質5g以下。' },
    meatFree: { label: '肉・魚不使用', hint: '材料に肉・鶏肉・魚介を含みません。' }
  },
  costTitle: 'レシピの概算費用',
  ingredientGroup: '材料グループ',
  costUsd: '費用(米ドル)',
  groups: {
    protein: '肉・鶏肉・魚介',
    dairyEggs: '乳製品・ギー・卵',
    produce: '野菜・ハーブ・果物',
    grains: '米・小麦粉・パスタ・豆類',
    fats: '食用油・油脂',
    sweeteners: '砂糖・はちみつ・シロップ',
    specialty: 'ナッツ・ドライフルーツ・特別な食材',
    spices: 'スパイス・調味料'
  },
  total: '概算合計',
  costPerServing: '1人分あたり',
  estimated: '概算',
  nutritionNote: 'レシピの材料と一般的な栄養データから算出したおおよその値です。専門家による栄養指導に代わるものではありません。',
  costNote: '米国のスーパーマーケットの平均価格に基づいています。実際の費用は国・季節・ブランドによって異なります。',
  kcalChip: '約{v} kcal/1人分',
  costChip: '約{v}/1人分'
};

const hi: EstimateStrings = {
  tab: 'पोषण और लागत',
  nutritionTitle: 'पोषण मूल्य',
  perServingBasis: 'प्रति सर्विंग — यह रेसिपी लगभग {n} सर्विंग बनाती है',
  nutrient: 'पोषक तत्व',
  perServing: 'प्रति सर्विंग',
  calories: 'कैलोरी',
  protein: 'प्रोटीन',
  fat: 'वसा',
  carbs: 'कार्बोहाइड्रेट',
  fiber: 'फाइबर',
  sugar: 'शर्करा',
  kcal: 'kcal',
  grams: 'ग्राम',
  energySplit: 'कैलोरी कहाँ से आती है',
  healthTitle: 'स्वास्थ्य नोट्स',
  tags: {
    highProtein: { label: 'उच्च प्रोटीन', hint: 'कैलोरी का बड़ा हिस्सा प्रोटीन से आता है।' },
    goodFiber: { label: 'फाइबर का अच्छा स्रोत', hint: 'प्रति सर्विंग लगभग 5 ग्राम या अधिक फाइबर।' },
    light: { label: 'हल्का व्यंजन', hint: 'प्रति सर्विंग 250 kcal से कम।' },
    hearty: { label: 'भरपेट और पौष्टिक', hint: 'प्रति सर्विंग 600 kcal या अधिक — मुख्य भोजन के रूप में उपयुक्त।' },
    highSugar: { label: 'अधिक शर्करा', hint: 'कभी-कभार के लिए बेहतर।' },
    highFat: { label: 'वसा से भरपूर', hint: 'आधी या अधिक कैलोरी वसा से आती है।' },
    lowFat: { label: 'कम वसा', hint: 'प्रति सर्विंग 5 ग्राम या कम वसा।' },
    meatFree: { label: 'मांस-रहित', hint: 'सामग्री में मांस, चिकन या मछली नहीं।' }
  },
  costTitle: 'रेसिपी की अनुमानित लागत',
  ingredientGroup: 'सामग्री समूह',
  costUsd: 'लागत (USD)',
  groups: {
    protein: 'मांस, चिकन और समुद्री भोजन',
    dairyEggs: 'डेयरी, घी और अंडे',
    produce: 'सब्ज़ियाँ, जड़ी-बूटियाँ और फल',
    grains: 'चावल, आटा, पास्ता और दालें',
    fats: 'खाना पकाने का तेल और वसा',
    sweeteners: 'चीनी, शहद और चाशनी',
    specialty: 'मेवे, सूखे फल और विशेष सामग्री',
    spices: 'मसाले और सीज़निंग'
  },
  total: 'अनुमानित कुल',
  costPerServing: 'प्रति सर्विंग',
  estimated: 'अनुमानित',
  nutritionNote: 'रेसिपी की सामग्री और सामान्य पोषण आँकड़ों से निकाले गए अनुमानित मान। ये किसी पोषण विशेषज्ञ की सलाह का विकल्प नहीं हैं।',
  costNote: 'अमेरिकी सुपरमार्केट की औसत कीमतों पर आधारित; वास्तविक लागत देश, मौसम और ब्रांड के अनुसार बदलती है।',
  kcalChip: '≈ {v} kcal / सर्विंग',
  costChip: '≈ {v} / सर्विंग'
};

const pt: EstimateStrings = {
  tab: 'Nutrição e custo',
  nutritionTitle: 'Valor nutricional',
  perServingBasis: 'Por porção — a receita rende cerca de {n} porções',
  nutrient: 'Nutriente',
  perServing: 'Por porção',
  calories: 'Calorias',
  protein: 'Proteínas',
  fat: 'Gorduras',
  carbs: 'Carboidratos',
  fiber: 'Fibras',
  sugar: 'Açúcares',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'De onde vêm as calorias',
  healthTitle: 'Notas de saúde',
  tags: {
    highProtein: { label: 'Rico em proteínas', hint: 'Boa parte das calorias vem das proteínas.' },
    goodFiber: { label: 'Boa fonte de fibras', hint: 'Cerca de 5 g de fibras ou mais por porção.' },
    light: { label: 'Prato leve', hint: 'Menos de 250 kcal por porção.' },
    hearty: { label: 'Substancioso', hint: '600 kcal ou mais por porção — ideal como prato principal.' },
    highSugar: { label: 'Rico em açúcar', hint: 'Melhor saborear de vez em quando.' },
    highFat: { label: 'Rico em gorduras', hint: 'Metade ou mais das calorias vem das gorduras.' },
    lowFat: { label: 'Pouca gordura', hint: '5 g de gordura ou menos por porção.' },
    meatFree: { label: 'Sem carne', hint: 'Sem carne, aves ou peixe nos ingredientes.' }
  },
  costTitle: 'Custo estimado da receita',
  ingredientGroup: 'Grupo de ingredientes',
  costUsd: 'Custo (USD)',
  groups: {
    protein: 'Carnes, aves e frutos do mar',
    dairyEggs: 'Laticínios, manteiga clarificada e ovos',
    produce: 'Legumes, ervas e frutas',
    grains: 'Arroz, farinha, massas e leguminosas',
    fats: 'Óleos e gorduras de cozinha',
    sweeteners: 'Açúcar, mel e caldas',
    specialty: 'Castanhas, frutas secas e itens especiais',
    spices: 'Especiarias e temperos'
  },
  total: 'Total estimado',
  costPerServing: 'Por porção',
  estimated: 'estimado',
  nutritionNote: 'Valores aproximados calculados a partir dos ingredientes da receita com dados nutricionais usuais. Não substituem a orientação de um profissional de nutrição.',
  costNote: 'Com base nos preços médios de supermercados dos EUA; o custo real varia conforme o país, a estação e a marca.',
  kcalChip: '≈ {v} kcal / porção',
  costChip: '≈ {v} / porção'
};

const ru: EstimateStrings = {
  tab: 'Питание и стоимость',
  nutritionTitle: 'Пищевая ценность',
  perServingBasis: 'На порцию — рецепт рассчитан примерно на {n} порций',
  nutrient: 'Нутриент',
  perServing: 'На порцию',
  calories: 'Калории',
  protein: 'Белки',
  fat: 'Жиры',
  carbs: 'Углеводы',
  fiber: 'Клетчатка',
  sugar: 'Сахара',
  kcal: 'ккал',
  grams: 'г',
  energySplit: 'Откуда берутся калории',
  healthTitle: 'Заметки о здоровье',
  tags: {
    highProtein: { label: 'Много белка', hint: 'Значительная часть калорий приходится на белок.' },
    goodFiber: { label: 'Хороший источник клетчатки', hint: 'Около 5 г клетчатки или больше на порцию.' },
    light: { label: 'Лёгкое блюдо', hint: 'Менее 250 ккал на порцию.' },
    hearty: { label: 'Сытное блюдо', hint: '600 ккал и более на порцию — подходит как основное блюдо.' },
    highSugar: { label: 'Много сахара', hint: 'Лучше оставить для особых случаев.' },
    highFat: { label: 'Жирное блюдо', hint: 'Половина калорий или больше приходится на жиры.' },
    lowFat: { label: 'Мало жира', hint: '5 г жира или меньше на порцию.' },
    meatFree: { label: 'Без мяса', hint: 'В составе нет мяса, птицы или рыбы.' }
  },
  costTitle: 'Примерная стоимость рецепта',
  ingredientGroup: 'Группа продуктов',
  costUsd: 'Стоимость (USD)',
  groups: {
    protein: 'Мясо, птица и морепродукты',
    dairyEggs: 'Молочные продукты, топлёное масло и яйца',
    produce: 'Овощи, зелень и фрукты',
    grains: 'Рис, мука, макароны и бобовые',
    fats: 'Растительные масла и жиры',
    sweeteners: 'Сахар, мёд и сиропы',
    specialty: 'Орехи, сухофрукты и особые продукты',
    spices: 'Специи и приправы'
  },
  total: 'Итого (оценка)',
  costPerServing: 'На порцию',
  estimated: 'оценка',
  nutritionNote: 'Приблизительные значения, рассчитанные по ингредиентам рецепта на основе типичных данных о пищевой ценности. Не заменяют консультацию специалиста по питанию.',
  costNote: 'По средним ценам супермаркетов США; фактическая стоимость зависит от страны, сезона и марки.',
  kcalChip: '≈ {v} ккал / порция',
  costChip: '≈ {v} / порция'
};

const zh: EstimateStrings = {
  tab: '营养与成本',
  nutritionTitle: '营养价值',
  perServingBasis: '每份 — 本食谱约可做 {n} 份',
  nutrient: '营养成分',
  perServing: '每份',
  calories: '热量',
  protein: '蛋白质',
  fat: '脂肪',
  carbs: '碳水化合物',
  fiber: '膳食纤维',
  sugar: '糖',
  kcal: '千卡',
  grams: '克',
  energySplit: '热量来源',
  healthTitle: '健康提示',
  tags: {
    highProtein: { label: '高蛋白', hint: '大部分热量来自蛋白质。' },
    goodFiber: { label: '膳食纤维丰富', hint: '每份约含 5 克或更多膳食纤维。' },
    light: { label: '清淡菜品', hint: '每份低于 250 千卡。' },
    hearty: { label: '丰盛饱腹', hint: '每份 600 千卡或以上 — 适合作为主餐。' },
    highSugar: { label: '含糖量高', hint: '建议偶尔享用。' },
    highFat: { label: '脂肪含量高', hint: '一半或以上的热量来自脂肪。' },
    lowFat: { label: '低脂', hint: '每份脂肪 5 克或以下。' },
    meatFree: { label: '无肉', hint: '食材中不含肉类、禽类或鱼类。' }
  },
  costTitle: '食谱估算成本',
  ingredientGroup: '食材类别',
  costUsd: '成本(美元)',
  groups: {
    protein: '肉类、禽类和海鲜',
    dairyEggs: '乳制品、酥油和鸡蛋',
    produce: '蔬菜、香草和水果',
    grains: '大米、面粉、面食和豆类',
    fats: '食用油和油脂',
    sweeteners: '糖、蜂蜜和糖浆',
    specialty: '坚果、果干和特色食材',
    spices: '香料和调味品'
  },
  total: '估算总计',
  costPerServing: '每份',
  estimated: '估算',
  nutritionNote: '根据食谱食材和常见营养数据计算的近似值，不能替代专业营养建议。',
  costNote: '按美国超市平均价格估算；实际成本因国家、季节和品牌而异。',
  kcalChip: '约 {v} 千卡/份',
  costChip: '约 {v}/份'
};

const de: EstimateStrings = {
  tab: 'Nährwerte & Kosten',
  nutritionTitle: 'Nährwerte',
  perServingBasis: 'Pro Portion — das Rezept ergibt etwa {n} Portionen',
  nutrient: 'Nährstoff',
  perServing: 'Pro Portion',
  calories: 'Kalorien',
  protein: 'Eiweiß',
  fat: 'Fett',
  carbs: 'Kohlenhydrate',
  fiber: 'Ballaststoffe',
  sugar: 'Zucker',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'Woher die Kalorien stammen',
  healthTitle: 'Gesundheitshinweise',
  tags: {
    highProtein: { label: 'Eiweißreich', hint: 'Ein großer Teil der Kalorien stammt aus Eiweiß.' },
    goodFiber: { label: 'Gute Ballaststoffquelle', hint: 'Etwa 5 g Ballaststoffe oder mehr pro Portion.' },
    light: { label: 'Leichtes Gericht', hint: 'Unter 250 kcal pro Portion.' },
    hearty: { label: 'Herzhaft & sättigend', hint: '600 kcal oder mehr pro Portion — ideal als Hauptgericht.' },
    highSugar: { label: 'Zuckerreich', hint: 'Am besten als gelegentlicher Genuss.' },
    highFat: { label: 'Fettreich', hint: 'Die Hälfte der Kalorien oder mehr stammt aus Fett.' },
    lowFat: { label: 'Fettarm', hint: '5 g Fett oder weniger pro Portion.' },
    meatFree: { label: 'Ohne Fleisch', hint: 'Kein Fleisch, Geflügel oder Fisch in den Zutaten.' }
  },
  costTitle: 'Geschätzte Rezeptkosten',
  ingredientGroup: 'Zutatengruppe',
  costUsd: 'Kosten (USD)',
  groups: {
    protein: 'Fleisch, Geflügel & Meeresfrüchte',
    dairyEggs: 'Milchprodukte, Butterschmalz & Eier',
    produce: 'Gemüse, Kräuter & Obst',
    grains: 'Reis, Mehl, Nudeln & Hülsenfrüchte',
    fats: 'Speiseöle & Fette',
    sweeteners: 'Zucker, Honig & Sirup',
    specialty: 'Nüsse, Trockenobst & Spezialzutaten',
    spices: 'Gewürze & Würzmittel'
  },
  total: 'Geschätzte Summe',
  costPerServing: 'Pro Portion',
  estimated: 'geschätzt',
  nutritionNote: 'Ungefähre Werte, berechnet aus den Rezeptzutaten mit üblichen Nährwertdaten. Sie ersetzen keine professionelle Ernährungsberatung.',
  costNote: 'Basierend auf durchschnittlichen US-Supermarktpreisen; die tatsächlichen Kosten variieren je nach Land, Saison und Marke.',
  kcalChip: '≈ {v} kcal / Portion',
  costChip: '≈ {v} / Portion'
};

const it: EstimateStrings = {
  tab: 'Nutrizione e costo',
  nutritionTitle: 'Valori nutrizionali',
  perServingBasis: 'Per porzione — la ricetta dà circa {n} porzioni',
  nutrient: 'Nutriente',
  perServing: 'Per porzione',
  calories: 'Calorie',
  protein: 'Proteine',
  fat: 'Grassi',
  carbs: 'Carboidrati',
  fiber: 'Fibre',
  sugar: 'Zuccheri',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'Da dove vengono le calorie',
  healthTitle: 'Note sulla salute',
  tags: {
    highProtein: { label: 'Ricco di proteine', hint: 'Buona parte delle calorie proviene dalle proteine.' },
    goodFiber: { label: 'Buona fonte di fibre', hint: 'Circa 5 g di fibre o più per porzione.' },
    light: { label: 'Piatto leggero', hint: 'Meno di 250 kcal per porzione.' },
    hearty: { label: 'Sostanzioso', hint: '600 kcal o più per porzione — ideale come piatto unico.' },
    highSugar: { label: 'Ricco di zuccheri', hint: 'Meglio gustarlo ogni tanto.' },
    highFat: { label: 'Ricco di grassi', hint: 'Metà delle calorie o più proviene dai grassi.' },
    lowFat: { label: 'Povero di grassi', hint: '5 g di grassi o meno per porzione.' },
    meatFree: { label: 'Senza carne', hint: 'Niente carne, pollame o pesce tra gli ingredienti.' }
  },
  costTitle: 'Costo stimato della ricetta',
  ingredientGroup: 'Gruppo di ingredienti',
  costUsd: 'Costo (USD)',
  groups: {
    protein: 'Carne, pollame e frutti di mare',
    dairyEggs: 'Latticini, burro chiarificato e uova',
    produce: 'Verdure, erbe e frutta',
    grains: 'Riso, farina, pasta e legumi',
    fats: 'Oli e grassi da cucina',
    sweeteners: 'Zucchero, miele e sciroppi',
    specialty: 'Frutta secca, frutta essiccata e ingredienti speciali',
    spices: 'Spezie e condimenti'
  },
  total: 'Totale stimato',
  costPerServing: 'Per porzione',
  estimated: 'stima',
  nutritionNote: 'Valori approssimativi calcolati dagli ingredienti della ricetta con dati nutrizionali comuni. Non sostituiscono il parere di un professionista della nutrizione.',
  costNote: 'Basato sui prezzi medi dei supermercati statunitensi; il costo reale varia in base al paese, alla stagione e alla marca.',
  kcalChip: '≈ {v} kcal / porzione',
  costChip: '≈ {v} / porzione'
};

const el: EstimateStrings = {
  tab: 'Διατροφή & Κόστος',
  nutritionTitle: 'Διατροφική αξία',
  perServingBasis: 'Ανά μερίδα — η συνταγή βγάζει περίπου {n} μερίδες',
  nutrient: 'Θρεπτικό συστατικό',
  perServing: 'Ανά μερίδα',
  calories: 'Θερμίδες',
  protein: 'Πρωτεΐνες',
  fat: 'Λιπαρά',
  carbs: 'Υδατάνθρακες',
  fiber: 'Φυτικές ίνες',
  sugar: 'Σάκχαρα',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'Από πού προέρχονται οι θερμίδες',
  healthTitle: 'Σημειώσεις υγείας',
  tags: {
    highProtein: { label: 'Υψηλή πρωτεΐνη', hint: 'Μεγάλο μέρος των θερμίδων προέρχεται από πρωτεΐνη.' },
    goodFiber: { label: 'Καλή πηγή φυτικών ινών', hint: 'Περίπου 5 g φυτικές ίνες ή περισσότερο ανά μερίδα.' },
    light: { label: 'Ελαφρύ πιάτο', hint: 'Κάτω από 250 kcal ανά μερίδα.' },
    hearty: { label: 'Χορταστικό', hint: '600 kcal ή περισσότερο ανά μερίδα — ιδανικό ως κυρίως πιάτο.' },
    highSugar: { label: 'Πολλή ζάχαρη', hint: 'Καλύτερα για περιστασιακή απόλαυση.' },
    highFat: { label: 'Πλούσιο σε λιπαρά', hint: 'Οι μισές θερμίδες ή περισσότερες προέρχονται από λιπαρά.' },
    lowFat: { label: 'Χαμηλά λιπαρά', hint: '5 g λιπαρά ή λιγότερο ανά μερίδα.' },
    meatFree: { label: 'Χωρίς κρέας', hint: 'Χωρίς κρέας, πουλερικά ή ψάρι στα υλικά.' }
  },
  costTitle: 'Εκτιμώμενο κόστος συνταγής',
  ingredientGroup: 'Ομάδα υλικών',
  costUsd: 'Κόστος (USD)',
  groups: {
    protein: 'Κρέας, πουλερικά & θαλασσινά',
    dairyEggs: 'Γαλακτοκομικά, βούτυρο γκι & αυγά',
    produce: 'Λαχανικά, μυρωδικά & φρούτα',
    grains: 'Ρύζι, αλεύρι, ζυμαρικά & όσπρια',
    fats: 'Λάδια & λίπη μαγειρικής',
    sweeteners: 'Ζάχαρη, μέλι & σιρόπια',
    specialty: 'Ξηροί καρποί, αποξηραμένα φρούτα & ειδικά υλικά',
    spices: 'Μπαχαρικά & καρυκεύματα'
  },
  total: 'Εκτιμώμενο σύνολο',
  costPerServing: 'Ανά μερίδα',
  estimated: 'εκτίμηση',
  nutritionNote: 'Κατά προσέγγιση τιμές, υπολογισμένες από τα υλικά της συνταγής με συνήθη διατροφικά δεδομένα. Δεν υποκαθιστούν τη συμβουλή επαγγελματία διατροφολόγου.',
  costNote: 'Με βάση τις μέσες τιμές σούπερ μάρκετ των ΗΠΑ· το πραγματικό κόστος διαφέρει ανά χώρα, εποχή και μάρκα.',
  kcalChip: '≈ {v} kcal / μερίδα',
  costChip: '≈ {v} / μερίδα'
};

const ur: EstimateStrings = {
  tab: 'غذائیت اور لاگت',
  nutritionTitle: 'غذائی قدر',
  perServingBasis: 'فی حصہ — یہ ترکیب تقریباً {n} حصے بناتی ہے',
  nutrient: 'غذائی جزو',
  perServing: 'فی حصہ',
  calories: 'کیلوریز',
  protein: 'پروٹین',
  fat: 'چکنائی',
  carbs: 'کاربوہائیڈریٹس',
  fiber: 'فائبر',
  sugar: 'شکر',
  kcal: 'کیلوری',
  grams: 'گرام',
  energySplit: 'کیلوریز کہاں سے آتی ہیں',
  healthTitle: 'صحت سے متعلق نوٹس',
  tags: {
    highProtein: { label: 'زیادہ پروٹین', hint: 'کیلوریز کا بڑا حصہ پروٹین سے آتا ہے۔' },
    goodFiber: { label: 'فائبر کا اچھا ذریعہ', hint: 'فی حصہ تقریباً 5 گرام یا زیادہ فائبر۔' },
    light: { label: 'ہلکا پکوان', hint: 'فی حصہ 250 کیلوری سے کم۔' },
    hearty: { label: 'بھرپور اور پیٹ بھرنے والا', hint: 'فی حصہ 600 کیلوری یا زیادہ — اہم کھانے کے طور پر موزوں۔' },
    highSugar: { label: 'زیادہ شکر', hint: 'کبھی کبھار کھانا بہتر ہے۔' },
    highFat: { label: 'چکنائی سے بھرپور', hint: 'آدھی یا زیادہ کیلوریز چکنائی سے آتی ہیں۔' },
    lowFat: { label: 'کم چکنائی', hint: 'فی حصہ 5 گرام یا کم چکنائی۔' },
    meatFree: { label: 'گوشت کے بغیر', hint: 'اجزاء میں گوشت، مرغی یا مچھلی نہیں۔' }
  },
  costTitle: 'ترکیب کی تخمینی لاگت',
  ingredientGroup: 'اجزاء کا گروپ',
  costUsd: 'لاگت (امریکی ڈالر)',
  groups: {
    protein: 'گوشت، مرغی اور سمندری غذا',
    dairyEggs: 'دودھ کی مصنوعات، گھی اور انڈے',
    produce: 'سبزیاں، جڑی بوٹیاں اور پھل',
    grains: 'چاول، آٹا، پاستا اور دالیں',
    fats: 'کھانا پکانے کا تیل اور چکنائی',
    sweeteners: 'چینی، شہد اور شیرہ',
    specialty: 'میوے، خشک پھل اور خاص اجزاء',
    spices: 'مصالحے اور سیزننگ'
  },
  total: 'کل تخمینی لاگت',
  costPerServing: 'فی حصہ',
  estimated: 'تخمینی',
  nutritionNote: 'ترکیب کے اجزاء اور عام غذائی اعداد و شمار سے نکالی گئی تقریبی قدریں۔ یہ کسی ماہرِ غذائیت کے مشورے کا متبادل نہیں ہیں۔',
  costNote: 'امریکی سپر مارکیٹوں کی اوسط قیمتوں پر مبنی؛ اصل لاگت ملک، موسم اور برانڈ کے لحاظ سے مختلف ہوتی ہے۔',
  kcalChip: '≈ {v} کیلوری / حصہ',
  costChip: '≈ {v} / حصہ'
};

const fa: EstimateStrings = {
  tab: 'ارزش غذایی و هزینه',
  nutritionTitle: 'ارزش غذایی',
  perServingBasis: 'برای هر وعده — این دستور حدود {n} وعده است',
  nutrient: 'ماده مغذی',
  perServing: 'هر وعده',
  calories: 'کالری',
  protein: 'پروتئین',
  fat: 'چربی',
  carbs: 'کربوهیدرات',
  fiber: 'فیبر',
  sugar: 'قند',
  kcal: 'کیلوکالری',
  grams: 'گرم',
  energySplit: 'منبع کالری‌ها',
  healthTitle: 'نکات سلامت',
  tags: {
    highProtein: { label: 'پرپروتئین', hint: 'بخش زیادی از کالری از پروتئین تأمین می‌شود.' },
    goodFiber: { label: 'منبع خوب فیبر', hint: 'حدود ۵ گرم فیبر یا بیشتر در هر وعده.' },
    light: { label: 'غذای سبک', hint: 'کمتر از ۲۵۰ کیلوکالری در هر وعده.' },
    hearty: { label: 'مقوی و سیرکننده', hint: '۶۰۰ کیلوکالری یا بیشتر در هر وعده — مناسب وعده اصلی.' },
    highSugar: { label: 'پرقند', hint: 'بهتر است گاه‌به‌گاه میل شود.' },
    highFat: { label: 'پرچرب', hint: 'نیمی از کالری یا بیشتر از چربی است.' },
    lowFat: { label: 'کم‌چرب', hint: '۵ گرم چربی یا کمتر در هر وعده.' },
    meatFree: { label: 'بدون گوشت', hint: 'بدون گوشت، مرغ یا ماهی در مواد اولیه.' }
  },
  costTitle: 'هزینه تخمینی دستور پخت',
  ingredientGroup: 'گروه مواد اولیه',
  costUsd: 'هزینه (دلار آمریکا)',
  groups: {
    protein: 'گوشت، مرغ و غذاهای دریایی',
    dairyEggs: 'لبنیات، روغن حیوانی و تخم‌مرغ',
    produce: 'سبزیجات، سبزی معطر و میوه',
    grains: 'برنج، آرد، ماکارونی و حبوبات',
    fats: 'روغن‌ها و چربی‌های پخت‌وپز',
    sweeteners: 'شکر، عسل و شربت',
    specialty: 'آجیل، میوه خشک و اقلام ویژه',
    spices: 'ادویه و چاشنی'
  },
  total: 'جمع تخمینی',
  costPerServing: 'هر وعده',
  estimated: 'تخمینی',
  nutritionNote: 'مقادیر تقریبی که از مواد اولیه دستور پخت و داده‌های رایج تغذیه‌ای محاسبه شده‌اند و جایگزین توصیه متخصص تغذیه نیستند.',
  costNote: 'بر اساس میانگین قیمت فروشگاه‌های آمریکا؛ هزینه واقعی بسته به کشور، فصل و برند متفاوت است.',
  kcalChip: '≈ {v} کیلوکالری / وعده',
  costChip: '≈ {v} / وعده'
};

const tr: EstimateStrings = {
  tab: 'Besin Değeri ve Maliyet',
  nutritionTitle: 'Besin Değeri',
  perServingBasis: 'Porsiyon başına — tarif yaklaşık {n} porsiyondur',
  nutrient: 'Besin öğesi',
  perServing: 'Porsiyon başına',
  calories: 'Kalori',
  protein: 'Protein',
  fat: 'Yağ',
  carbs: 'Karbonhidrat',
  fiber: 'Lif',
  sugar: 'Şeker',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'Kaloriler nereden geliyor',
  healthTitle: 'Sağlık Notları',
  tags: {
    highProtein: { label: 'Yüksek protein', hint: 'Kalorilerin önemli bir kısmı proteinden gelir.' },
    goodFiber: { label: 'İyi bir lif kaynağı', hint: 'Porsiyon başına yaklaşık 5 g veya daha fazla lif.' },
    light: { label: 'Hafif yemek', hint: 'Porsiyon başına 250 kcal’nin altında.' },
    hearty: { label: 'Doyurucu', hint: 'Porsiyon başına 600 kcal veya daha fazla — ana öğün olarak ideal.' },
    highSugar: { label: 'Şekeri yüksek', hint: 'Ara sıra tüketmek en iyisi.' },
    highFat: { label: 'Yağı yüksek', hint: 'Kalorilerin yarısı veya fazlası yağdan gelir.' },
    lowFat: { label: 'Az yağlı', hint: 'Porsiyon başına 5 g veya daha az yağ.' },
    meatFree: { label: 'Etsiz', hint: 'Malzemelerde et, tavuk veya balık yok.' }
  },
  costTitle: 'Tahmini Tarif Maliyeti',
  ingredientGroup: 'Malzeme grubu',
  costUsd: 'Maliyet (USD)',
  groups: {
    protein: 'Et, tavuk ve deniz ürünleri',
    dairyEggs: 'Süt ürünleri, sade yağ ve yumurta',
    produce: 'Sebze, yeşillik ve meyve',
    grains: 'Pirinç, un, makarna ve baklagiller',
    fats: 'Yemeklik yağlar',
    sweeteners: 'Şeker, bal ve şuruplar',
    specialty: 'Kuruyemiş, kuru meyve ve özel ürünler',
    spices: 'Baharat ve çeşniler'
  },
  total: 'Tahmini toplam',
  costPerServing: 'Porsiyon başına',
  estimated: 'tahmini',
  nutritionNote: 'Tarifin malzemelerinden ve yaygın besin verilerinden hesaplanan yaklaşık değerlerdir. Profesyonel beslenme tavsiyesinin yerini tutmaz.',
  costNote: 'ABD süpermarketlerinin ortalama fiyatlarına dayanır; gerçek maliyet ülkeye, mevsime ve markaya göre değişir.',
  kcalChip: '≈ {v} kcal / porsiyon',
  costChip: '≈ {v} / porsiyon'
};

const ku: EstimateStrings = {
  tab: 'Xurek û Lêçûn',
  nutritionTitle: 'Nirxa Xurekê',
  perServingBasis: 'Ji bo her beşekê — reçete bi qasî {n} beşan çêdike',
  nutrient: 'Madeya xurekê',
  perServing: 'Ji bo her beşekê',
  calories: 'Kalorî',
  protein: 'Proteîn',
  fat: 'Rûn',
  carbs: 'Karbohîdrat',
  fiber: 'Lîf',
  sugar: 'Şekir',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'Kalorî ji ku tên',
  healthTitle: 'Têbiniyên Tenduristiyê',
  tags: {
    highProtein: { label: 'Proteîna bilind', hint: 'Beşeke mezin a kaloriyan ji proteînê tê.' },
    goodFiber: { label: 'Çavkaniyeke baş a lîfê', hint: 'Ji bo her beşekê bi qasî 5 g lîf an zêdetir.' },
    light: { label: 'Xwarina sivik', hint: 'Ji bo her beşekê kêmtir ji 250 kcal.' },
    hearty: { label: 'Têrker', hint: 'Ji bo her beşekê 600 kcal an zêdetir — ji bo xwarina sereke baş e.' },
    highSugar: { label: 'Şekira zêde', hint: 'Çêtir e ku carinan were xwarin.' },
    highFat: { label: 'Rûnê zêde', hint: 'Nîvê kaloriyan an zêdetir ji rûn tê.' },
    lowFat: { label: 'Kêmrûn', hint: 'Ji bo her beşekê 5 g rûn an kêmtir.' },
    meatFree: { label: 'Bê goşt', hint: 'Di pêkhateyan de goşt, mirîşk an masî tune.' }
  },
  costTitle: 'Lêçûna Texmînî ya Reçeteyê',
  ingredientGroup: 'Koma pêkhateyan',
  costUsd: 'Lêçûn (USD)',
  groups: {
    protein: 'Goşt, mirîşk û berhemên deryayê',
    dairyEggs: 'Berhemên şîr, rûnê nivîşk û hêk',
    produce: 'Sebze, giya û fêkî',
    grains: 'Birinc, ard, makarne û lebat',
    fats: 'Rûnên xwarinçêkirinê',
    sweeteners: 'Şekir, hingiv û şerbet',
    specialty: 'Gwîz, fêkiyên hişk û hêmanên taybet',
    spices: 'Biharat û çêjdar'
  },
  total: 'Giştî ya texmînî',
  costPerServing: 'Ji bo her beşekê',
  estimated: 'texmînî',
  nutritionNote: 'Nirxên nêzîkî ku ji pêkhateyên reçeteyê û daneyên xurekê yên asayî hatine hesibandin. Ew şûna şîreta pisporê xurekê nagirin.',
  costNote: 'Li gorî bihayên navîn ên supermarketên DYA; lêçûna rastîn li gorî welat, demsal û marqeyê diguhere.',
  kcalChip: '≈ {v} kcal / beş',
  costChip: '≈ {v} / beş'
};

const id: EstimateStrings = {
  tab: 'Gizi & Biaya',
  nutritionTitle: 'Nilai Gizi',
  perServingBasis: 'Per porsi — resep ini menghasilkan sekitar {n} porsi',
  nutrient: 'Zat gizi',
  perServing: 'Per porsi',
  calories: 'Kalori',
  protein: 'Protein',
  fat: 'Lemak',
  carbs: 'Karbohidrat',
  fiber: 'Serat',
  sugar: 'Gula',
  kcal: 'kkal',
  grams: 'g',
  energySplit: 'Asal kalori',
  healthTitle: 'Catatan Kesehatan',
  tags: {
    highProtein: { label: 'Tinggi protein', hint: 'Sebagian besar kalori berasal dari protein.' },
    goodFiber: { label: 'Sumber serat yang baik', hint: 'Sekitar 5 g serat atau lebih per porsi.' },
    light: { label: 'Hidangan ringan', hint: 'Kurang dari 250 kkal per porsi.' },
    hearty: { label: 'Mengenyangkan', hint: '600 kkal atau lebih per porsi — cocok sebagai hidangan utama.' },
    highSugar: { label: 'Tinggi gula', hint: 'Sebaiknya dinikmati sesekali.' },
    highFat: { label: 'Tinggi lemak', hint: 'Setengah kalori atau lebih berasal dari lemak.' },
    lowFat: { label: 'Rendah lemak', hint: '5 g lemak atau kurang per porsi.' },
    meatFree: { label: 'Tanpa daging', hint: 'Tidak ada daging, unggas, atau ikan dalam bahan.' }
  },
  costTitle: 'Perkiraan Biaya Resep',
  ingredientGroup: 'Kelompok bahan',
  costUsd: 'Biaya (USD)',
  groups: {
    protein: 'Daging, unggas & makanan laut',
    dairyEggs: 'Susu olahan, ghee & telur',
    produce: 'Sayuran, rempah daun & buah',
    grains: 'Beras, tepung, pasta & kacang-kacangan',
    fats: 'Minyak & lemak masak',
    sweeteners: 'Gula, madu & sirup',
    specialty: 'Kacang, buah kering & bahan khusus',
    spices: 'Bumbu & penyedap'
  },
  total: 'Perkiraan total',
  costPerServing: 'Per porsi',
  estimated: 'perkiraan',
  nutritionNote: 'Nilai perkiraan yang dihitung dari bahan resep menggunakan data gizi umum. Bukan pengganti saran ahli gizi.',
  costNote: 'Berdasarkan harga rata-rata supermarket di AS; biaya sebenarnya berbeda menurut negara, musim, dan merek.',
  kcalChip: '≈ {v} kkal / porsi',
  costChip: '≈ {v} / porsi'
};

const sw: EstimateStrings = {
  tab: 'Lishe na Gharama',
  nutritionTitle: 'Thamani ya Lishe',
  perServingBasis: 'Kwa kila sehemu — mapishi haya yanatosha takriban sehemu {n}',
  nutrient: 'Kirutubisho',
  perServing: 'Kwa kila sehemu',
  calories: 'Kalori',
  protein: 'Protini',
  fat: 'Mafuta',
  carbs: 'Wanga',
  fiber: 'Nyuzinyuzi',
  sugar: 'Sukari',
  kcal: 'kcal',
  grams: 'g',
  energySplit: 'Kalori zinatoka wapi',
  healthTitle: 'Maelezo ya Afya',
  tags: {
    highProtein: { label: 'Protini nyingi', hint: 'Sehemu kubwa ya kalori inatoka kwenye protini.' },
    goodFiber: { label: 'Chanzo kizuri cha nyuzinyuzi', hint: 'Takriban g 5 za nyuzinyuzi au zaidi kwa sehemu.' },
    light: { label: 'Mlo mwepesi', hint: 'Chini ya kcal 250 kwa sehemu.' },
    hearty: { label: 'Mlo wa kushibisha', hint: 'kcal 600 au zaidi kwa sehemu — unafaa kama mlo mkuu.' },
    highSugar: { label: 'Sukari nyingi', hint: 'Ni bora kufurahia mara moja moja.' },
    highFat: { label: 'Mafuta mengi', hint: 'Nusu ya kalori au zaidi inatoka kwenye mafuta.' },
    lowFat: { label: 'Mafuta kidogo', hint: 'g 5 za mafuta au chini kwa sehemu.' },
    meatFree: { label: 'Bila nyama', hint: 'Hakuna nyama, kuku wala samaki kwenye viungo.' }
  },
  costTitle: 'Makadirio ya Gharama ya Mapishi',
  ingredientGroup: 'Kundi la viungo',
  costUsd: 'Gharama (USD)',
  groups: {
    protein: 'Nyama, kuku na vyakula vya baharini',
    dairyEggs: 'Bidhaa za maziwa, samli na mayai',
    produce: 'Mboga, majani ya viungo na matunda',
    grains: 'Mchele, unga, tambi na jamii ya kunde',
    fats: 'Mafuta ya kupikia',
    sweeteners: 'Sukari, asali na sharubati',
    specialty: 'Karanga, matunda yaliyokaushwa na bidhaa maalum',
    spices: 'Viungo na vikolezo'
  },
  total: 'Jumla ya makadirio',
  costPerServing: 'Kwa kila sehemu',
  estimated: 'makadirio',
  nutritionNote: 'Thamani za takriban zilizokokotolewa kutoka kwa viungo vya mapishi kwa kutumia takwimu za kawaida za lishe. Si mbadala wa ushauri wa mtaalamu wa lishe.',
  costNote: 'Kulingana na wastani wa bei za maduka makubwa ya Marekani; gharama halisi hutofautiana kwa nchi, msimu na chapa.',
  kcalChip: '≈ kcal {v} / sehemu',
  costChip: '≈ {v} / sehemu'
};

const ko: EstimateStrings = {
  tab: '영양 및 비용',
  nutritionTitle: '영양 정보',
  perServingBasis: '1인분 기준 — 이 레시피는 약 {n}인분입니다',
  nutrient: '영양소',
  perServing: '1인분당',
  calories: '열량',
  protein: '단백질',
  fat: '지방',
  carbs: '탄수화물',
  fiber: '식이섬유',
  sugar: '당류',
  kcal: 'kcal',
  grams: 'g',
  energySplit: '열량 구성',
  healthTitle: '건강 메모',
  tags: {
    highProtein: { label: '고단백', hint: '열량의 상당 부분이 단백질에서 나옵니다.' },
    goodFiber: { label: '식이섬유가 풍부함', hint: '1인분당 식이섬유 약 5g 이상.' },
    light: { label: '가벼운 요리', hint: '1인분당 250kcal 미만.' },
    hearty: { label: '든든한 요리', hint: '1인분당 600kcal 이상 — 주식으로 좋습니다.' },
    highSugar: { label: '당류가 많음', hint: '가끔 즐기는 것이 좋습니다.' },
    highFat: { label: '지방이 많음', hint: '열량의 절반 이상이 지방에서 나옵니다.' },
    lowFat: { label: '저지방', hint: '1인분당 지방 5g 이하.' },
    meatFree: { label: '고기 없음', hint: '재료에 육류, 가금류, 생선이 없습니다.' }
  },
  costTitle: '레시피 예상 비용',
  ingredientGroup: '재료 그룹',
  costUsd: '비용 (USD)',
  groups: {
    protein: '육류, 가금류 및 해산물',
    dairyEggs: '유제품, 기(ghee) 및 달걀',
    produce: '채소, 허브 및 과일',
    grains: '쌀, 밀가루, 파스타 및 콩류',
    fats: '식용유 및 유지류',
    sweeteners: '설탕, 꿀 및 시럽',
    specialty: '견과류, 말린 과일 및 특수 재료',
    spices: '향신료 및 양념'
  },
  total: '예상 합계',
  costPerServing: '1인분당',
  estimated: '추정치',
  nutritionNote: '레시피 재료와 일반적인 영양 데이터를 바탕으로 계산한 대략적인 값입니다. 전문 영양 상담을 대신하지 않습니다.',
  costNote: '미국 슈퍼마켓 평균 가격 기준이며, 실제 비용은 국가, 계절, 브랜드에 따라 다릅니다.',
  kcalChip: '약 {v} kcal / 1인분',
  costChip: '약 {v} / 1인분'
};

const ESTIMATE_STRINGS: Partial<Record<SupportedLanguage, EstimateStrings>> = {
  en, ar, fr, es, ja, hi, pt, ru, zh, de, it, el, ur, fa, tr, ku, id, sw, ko
};

export function getEstimateStrings(lang: SupportedLanguage): EstimateStrings {
  return ESTIMATE_STRINGS[lang] || en;
}
