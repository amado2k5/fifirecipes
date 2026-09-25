import type { SupportedLanguage } from '../types';
import type { KidsAdultReason, KidsAllergen, KidsGroup } from './types';

export interface KidsStrings {
  title: string;
  subtitle: string;
  all: string;
  groups: Record<KidsGroup, string>;
  noCook: string;
  /** {a} is an age band like "3–5". */
  ages: string;
  anyAge: string;
  /** {n} is a number. */
  minutes: string;
  servings: string;
  steps: string;
  grownUpHelps: string;
  empty: string;
  loading: string;
  error: string;
  retry: string;
  back: string;
  getReady: string;
  readyWash: string;
  readyApron: string;
  readyGrownUp: string;
  whatYouNeed: string;
  tapToTick: string;
  tools: string;
  letsCook: string;
  /** {n} is the step number, {t} the number of steps. */
  stepOf: string;
  previous: string;
  next: string;
  finish: string;
  readAloud: string;
  stopReading: string;
  /** {m} is a number of minutes. */
  startTimer: string;
  pauseTimer: string;
  timeUp: string;
  adult: Record<KidsAdultReason, string>;
  contains: string;
  allergens: Record<KidsAllergen, string>;
  madeIt: string;
  madeItSub: string;
  tipTitle: string;
  certificate: string;
  yourName: string;
  /** {name} is the child's name, {recipe} the recipe's title. */
  certificateLine: string;
  superChef: string;
  saveCertificate: string;
  cookAgain: string;
  archiveVersion: string;
  share: string;
  copied: string;
  toolNames: Record<string, string>;
}

const ar: KidsStrings = {
  title: 'الطبخ مع الأطفال',
  subtitle: 'وصفات ممتعة للطهاة الصغار. اطبخ دائماً وبجانبك شخص كبير!',
  all: 'الكل',
  groups: { breakfast: 'فطار', snack: 'سناكس', savoury: 'أكلات مالحة', sweet: 'حلويات', drink: 'مشروبات' },
  noCook: 'بدون طبخ',
  ages: 'عمر {a}',
  anyAge: 'كل الأعمار',
  minutes: '{n} دقيقة',
  servings: 'يكفي {n}',
  steps: '{n} خطوات',
  grownUpHelps: 'بمساعدة الكبار',
  empty: 'لا توجد وصفات هنا. جرّب اختياراً آخر!',
  loading: 'جارٍ التحميل…',
  error: 'تعذر التحميل. تأكد من الاتصال بالإنترنت.',
  retry: 'حاول مرة أخرى',
  back: 'كل الوصفات',
  getReady: 'استعد!',
  readyWash: 'اغسل يديك بالصابون',
  readyApron: 'البس المريلة',
  readyGrownUp: 'اطلب من شخص كبير أن يطبخ معك',
  whatYouNeed: 'ماذا تحتاج؟',
  tapToTick: 'اضغط على كل واحد عندما تجهزه.',
  tools: 'الأدوات',
  letsCook: 'هيا نطبخ!',
  stepOf: 'الخطوة {n} من {t}',
  previous: 'السابق',
  next: 'تمام! التالي',
  finish: 'انتهيت!',
  readAloud: 'اقرأ لي',
  stopReading: 'توقف',
  startTimer: 'ابدأ مؤقت {m} دقيقة',
  pauseTimer: 'إيقاف مؤقت',
  timeUp: 'انتهى الوقت!',
  adult: {
    knife: 'السكين للكبار فقط',
    oven: 'الفرن ساخن: بمساعدة الكبار',
    stove: 'النار ساخنة: بمساعدة الكبار',
    hot: 'ساخن! بمساعدة الكبار',
    blender: 'الخلاط حاد: بمساعدة الكبار',
    microwave: 'الميكروويف للكبار'
  },
  contains: 'يحتوي على',
  allergens: { nuts: 'مكسرات', peanuts: 'فول سوداني', eggs: 'بيض', milk: 'لبن', gluten: 'قمح', sesame: 'سمسم' },
  madeIt: 'أحسنت! لقد صنعتها!',
  madeItSub: 'حان وقت المشاركة والاستمتاع.',
  tipTitle: 'في المرة القادمة جرّب:',
  certificate: 'شهادة الطاهي',
  yourName: 'اكتب اسمك',
  certificateLine: '{name} طبخ {recipe}!',
  superChef: 'طاهٍ ماهر',
  saveCertificate: 'احفظ الشهادة',
  cookAgain: 'اطبخها مرة أخرى',
  archiveVersion: 'شاهد وصفة تيتا فاطمة للكبار',
  share: 'مشاركة',
  copied: 'تم نسخ الرابط!',
  toolNames: {
    bowl: 'سلطانية',
    whisk: 'مضرب',
    'measuring-cup': 'كوب قياس',
    pan: 'طاسة',
    spatula: 'مقلّب',
    plate: 'طبق',
    glass: 'كوب',
    spoon: 'ملعقة',
    'butter-knife': 'سكين زبدة',
    knife: 'سكين (للكبار)',
    board: 'لوح تقطيع',
    skewer: 'أعواد خشب',
    fork: 'شوكة',
    tray: 'صينية فرن',
    oven: 'فرن',
    microwave: 'ميكروويف',
    blender: 'خلاط',
    fridge: 'ثلاجة',
    stick: 'أعواد آيس كريم',
    pot: 'حلّة',
    jar: 'برطمان',
    cup: 'كوب',
    'rolling-pin': 'نشابة',
    'cookie-cutter': 'قطاعة بسكويت',
    'ice-pop-mold': 'قوالب مصاصات',
    'paper-cup': 'أكواب ورقية',
    stove: 'بوتاجاز',
    toaster: 'محمصة خبز',
    mug: 'مج',
    'muffin-tin': 'قالب مافن',
    'cookie-mold': 'منقاش أو قالب',
    ladle: 'مغرفة',
    strainer: 'مصفاة',
    pitcher: 'إبريق',
    gloves: 'قفازات',
    'baking-paper': 'ورق زبدة',
    'plastic-bag': 'كيس بلاستيك',
    'cling-film': 'ورق نايلون',
    'paper-cases': 'أكواب ورقية',
    juicer: 'عصارة ليمون',
    sieve: 'مصفاة صغيرة'
  }
};

const en: KidsStrings = {
  title: 'Cooking with Kids',
  subtitle: 'Fun recipes for little chefs. Always cook with a grown-up nearby!',
  all: 'All',
  groups: { breakfast: 'Breakfast', snack: 'Snacks', savoury: 'Savoury', sweet: 'Sweets', drink: 'Drinks' },
  noCook: 'No cooking',
  ages: 'Ages {a}',
  anyAge: 'Any age',
  minutes: '{n} min',
  servings: 'Serves {n}',
  steps: '{n} steps',
  grownUpHelps: 'Grown-up helps',
  empty: 'No recipes here. Try another choice!',
  loading: 'Loading…',
  error: 'Could not load. Check your internet connection.',
  retry: 'Try again',
  back: 'All recipes',
  getReady: 'Get ready!',
  readyWash: 'Wash your hands with soap',
  readyApron: 'Put on an apron',
  readyGrownUp: 'Ask a grown-up to cook with you',
  whatYouNeed: 'What you need',
  tapToTick: 'Tap each one when you have it.',
  tools: 'Tools',
  letsCook: "Let's cook!",
  stepOf: 'Step {n} of {t}',
  previous: 'Back',
  next: 'Done! Next',
  finish: 'All done!',
  readAloud: 'Read to me',
  stopReading: 'Stop',
  startTimer: 'Start a {m}-minute timer',
  pauseTimer: 'Pause',
  timeUp: "Time's up!",
  adult: {
    knife: 'Only grown-ups use the knife',
    oven: 'The oven is hot: a grown-up helps',
    stove: 'The stove is hot: a grown-up helps',
    hot: 'Hot! A grown-up helps',
    blender: 'The blender is sharp: a grown-up helps',
    microwave: 'A grown-up uses the microwave'
  },
  contains: 'Contains',
  allergens: { nuts: 'Nuts', peanuts: 'Peanuts', eggs: 'Eggs', milk: 'Milk', gluten: 'Wheat', sesame: 'Sesame' },
  madeIt: 'You made it!',
  madeItSub: 'Time to share and enjoy.',
  tipTitle: 'Next time, try this:',
  certificate: 'Chef certificate',
  yourName: 'Write your name',
  certificateLine: '{name} made {recipe}!',
  superChef: 'Super Chef',
  saveCertificate: 'Save certificate',
  cookAgain: 'Cook it again',
  archiveVersion: "See Teta Fatma's grown-up recipe",
  share: 'Share',
  copied: 'Link copied!',
  toolNames: {
    bowl: 'Bowl',
    whisk: 'Whisk',
    'measuring-cup': 'Measuring cup',
    pan: 'Frying pan',
    spatula: 'Spatula',
    plate: 'Plate',
    glass: 'Glass',
    spoon: 'Spoon',
    'butter-knife': 'Butter knife',
    knife: 'Knife (grown-ups)',
    board: 'Cutting board',
    skewer: 'Wooden sticks',
    fork: 'Fork',
    tray: 'Baking tray',
    oven: 'Oven',
    microwave: 'Microwave',
    blender: 'Blender',
    fridge: 'Fridge',
    stick: 'Ice-cream sticks',
    pot: 'Pot',
    jar: 'Jar',
    cup: 'Cup',
    'rolling-pin': 'Rolling pin',
    'cookie-cutter': 'Cookie cutter',
    'ice-pop-mold': 'Ice-pop moulds',
    'paper-cup': 'Paper cups',
    stove: 'Stove',
    toaster: 'Toaster',
    mug: 'Mug',
    'muffin-tin': 'Muffin tin',
    'cookie-mold': 'Cookie stamp or mould',
    ladle: 'Ladle',
    strainer: 'Colander',
    pitcher: 'Jug',
    gloves: 'Gloves',
    'baking-paper': 'Baking paper',
    'plastic-bag': 'Plastic bag',
    'cling-film': 'Cling film',
    'paper-cases': 'Paper cases',
    juicer: 'Lemon squeezer',
    sieve: 'Sieve'
  }
};

const STRINGS: Partial<Record<SupportedLanguage, KidsStrings>> = { ar, en };

export const getKidsStrings = (lang: SupportedLanguage): KidsStrings => STRINGS[lang] ?? en;

export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));

/** The voice language for reading steps aloud. */
export const SPEECH_LANG: Partial<Record<SupportedLanguage, string>> = { ar: 'ar-EG', en: 'en-US' };
