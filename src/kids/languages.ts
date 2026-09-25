import type { SupportedLanguage } from '../types';

// Kept tiny: this and KidsToggle are the only parts of kids mode in the main bundle.

/**
 * The header toggle's labels in each language whose kids recipes are fully
 * translated. Kids mode is offered only in these languages.
 */
export const KIDS_TOGGLE_LABELS: Partial<Record<SupportedLanguage, { grownUps: string; kids: string }>> = {
  ar: { grownUps: 'مطبخ الكبار', kids: 'الطبخ مع الأطفال' },
  en: { grownUps: 'Grown-ups', kids: 'Cooking with Kids' },
  fr: { grownUps: 'Les grands', kids: 'Cuisiner avec les enfants' },
  es: { grownUps: 'Mayores', kids: 'Cocinar con niños' },
  ja: { grownUps: '大人', kids: 'こどもとクッキング' },
  hi: { grownUps: 'बड़े', kids: 'बच्चों के साथ कुकिंग' },
  pt: { grownUps: 'Adultos', kids: 'Cozinhar com crianças' },
  ru: { grownUps: 'Взрослые', kids: 'Готовим с детьми' },
  zh: { grownUps: '大人', kids: '和孩子一起做饭' },
  de: { grownUps: 'Erwachsene', kids: 'Kochen mit Kindern' },
  it: { grownUps: 'Grandi', kids: 'Cucinare con i bambini' },
  el: { grownUps: 'Μεγάλοι', kids: 'Μαγειρεύω με τα παιδιά' },
  ur: { grownUps: 'بڑے', kids: 'بچوں کے ساتھ کوکنگ' },
  fa: { grownUps: 'بزرگ‌ترها', kids: 'آشپزی با بچه‌ها' },
  tr: { grownUps: 'Büyükler', kids: 'Çocuklarla Yemek' },
  ku: { grownUps: 'Mezin', kids: 'Bi Zarokan re Çêkirin' },
  id: { grownUps: 'Dewasa', kids: 'Masak Bersama Anak' },
  sw: { grownUps: 'Watu wazima', kids: 'Kupika na Watoto' }
};

export const hasKidsMode = (lang: SupportedLanguage) => lang in KIDS_TOGGLE_LABELS;

export const loadKidsApp = () => import('./KidsApp');
