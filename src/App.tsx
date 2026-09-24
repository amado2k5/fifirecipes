/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { allRecipes, computeDatabaseStats } from './data/recipes';
import { Recipe, SupportedLanguage } from './types';
import { Header } from './components/Header';
import { RecipeList } from './components/RecipeList';
import { MasterIngredientsView } from './components/MasterIngredientsView';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { FatmaMemorialSection } from './components/FatmaMemorialSection';
import { TributePage } from './components/TributePage';
import { detectUserLanguage, getUIText, TOP_20_LANGUAGES } from './data/translations';
import { getLocalizedRecipe, ensureTranslationTable } from './utils/recipeLocalization';
import { shareRecipe } from './services/recipeShareService';
import { recipeNutritionSchema } from './data/recipeEstimates';
import { CheckCircle2, AlertCircle, Mail } from 'lucide-react';

const FEEDBACK_EMAIL = 'ahamdy@gmail.com';

function getSharedLanguage(): SupportedLanguage | null {
  if (typeof window === 'undefined') return null;
  const value = new URLSearchParams(window.location.search).get('lang');
  return TOP_20_LANGUAGES.some(language => language.code === value)
    ? value as SupportedLanguage
    : null;
}

export default function App() {
  // Localization: Auto-detected from browser/OS or user choice (20 languages supported)
  // Defaults to Arabic if user locale is not detected or unrecognized
  const [lang, setLang] = useState<SupportedLanguage>(() => {
    const sharedLanguage = getSharedLanguage();
    if (sharedLanguage) {
      return sharedLanguage;
    }
    return detectUserLanguage();
  });
  // The active language's recipe-translation JSON is fetched on demand (see
  // ensureTranslationTable) instead of being bundled for every visitor;
  // this re-renders once that chunk arrives so translated text appears.
  const [, forceTranslationsRerender] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureTranslationTable(lang).then(() => {
      if (!cancelled) forceTranslationsRerender(v => v + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [lang]);
  const isRtl = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  const isJa = lang === 'ja';
  const isHi = lang === 'hi';
  const isPt = lang === 'pt';
  const isRu = lang === 'ru';
  const isZh = lang === 'zh';
  const isDe = lang === 'de';
  const isIt = lang === 'it';
  const isEl = lang === 'el';
  const isUr = lang === 'ur';
  const isFa = lang === 'fa';
  const isTr = lang === 'tr';
  const isKu = lang === 'ku';
  const isId = lang === 'id';
  const isSw = lang === 'sw';
  const isKo = lang === 'ko';
  const t = (ar: string, en: string, fr: string, es: string, ja: string, hi: string, pt: string, ru: string, zh: string, de: string, it: string, el: string, ur: string, fa: string, tr: string, ku: string, id: string, sw: string, ko: string) => (isAr ? ar : isFr ? fr : isEs ? es : isJa ? ja : isHi ? hi : isPt ? pt : isRu ? ru : isZh ? zh : isDe ? de : isIt ? it : isEl ? el : isUr ? ur : isFa ? fa : isTr ? tr : isKu ? ku : isId ? id : isSw ? sw : isKo ? ko : en);

  // Master Recipes (static public archive)
  const recipes = allRecipes;

  // Navigation Tabs: explorer | biography | ingredients
  const [activeTab, setActiveTab] = useState<'explorer' | 'biography' | 'ingredients' | 'tribute'>('explorer');

  // Active Modals & Selected Items
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Calculate live database statistics
  const stats = useMemo(() => computeDatabaseStats(recipes), [recipes]);

  useEffect(() => {
    const recipeId = typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('recipe')
      : null;
    if (recipeId) {
      const recipe = recipes.find(item => item.id === recipeId);
      if (recipe) setSelectedRecipe(recipe);
    }
  }, [recipes]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = selectedRecipe
      ? `${getLocalizedRecipe(selectedRecipe, lang).title} | ${getUIText(lang, 'appTitle')}`
      : getUIText(lang, 'appTitle');
  }, [isRtl, lang, selectedRecipe]);

  const handleShareSite = async () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('recipe');
    url.searchParams.set('lang', lang);
    const shareData = {
      title: getUIText(lang, 'appTitle'),
      url: url.toString()
    };
    if (navigator.share) {
      await navigator.share(shareData).catch(() => undefined);
    } else {
      await navigator.clipboard.writeText(url.toString());
      setNotification({ message: t('تم نسخ رابط الموقع', 'Site link copied', 'Lien du site copié', 'Enlace del sitio copiado', 'サイトのリンクをコピーしました', 'साइट लिंक कॉपी हो गया', 'Link do site copiado', 'Ссылка на сайт скопирована', '网站链接已复制', 'Website-Link kopiert', 'Link del sito copiato', 'Ο σύνδεσμος του ιστοτόπου αντιγράφηκε', 'سائٹ کا لنک کاپی ہو گیا', 'پیوند سایت کپی شد', 'Site bağlantısı kopyalandı', 'Girêdana malperê hat kopîkirin', 'Tautan situs disalin', 'Kiungo cha tovuti kimenakiliwa', '사이트 링크가 복사되었습니다'), type: 'success' });
      setTimeout(() => setNotification(null), 3500);
    }
  };

  const handleShareRecipe = async (recipe: Recipe) => {
    const title = getLocalizedRecipe(recipe, lang).title;
    const result = await shareRecipe(recipe, lang, title);
    if (result.copied) {
      setNotification({ message: t('تم نسخ رابط الوصفة', 'Recipe link copied', 'Lien de la recette copié', 'Enlace de la receta copiado', 'レシピのリンクをコピーしました', 'रेसिपी लिंक कॉपी हो गया', 'Link da receita copiado', 'Ссылка на рецепт скопирована', '食谱链接已复制', 'Rezept-Link kopiert', 'Link della ricetta copiato', 'Ο σύνδεσμος της συνταγής αντιγράφηκε', 'ترکیب کا لنک کاپی ہو گیا', 'پیوند دستور کپی شد', 'Tarif bağlantısı kopyalandı', 'Girêdana reçeteyê hat kopîkirin', 'Tautan resep disalin', 'Kiungo cha mapishi kimenakiliwa', '레시피 링크가 복사되었습니다'), type: 'success' });
      setTimeout(() => setNotification(null), 3500);
    }
  };

  const handleFeedback = () => {
    const subject = t(
      '[fifi.cooking] ملاحظات حول موقع وصفات د. فاطمة القاوقجي',
      '[fifi.cooking] Feedback on Fatma Alkawokgy Recipes site',
      '[fifi.cooking] Commentaires sur le site des recettes de Fatma Alkawokgy',
      '[fifi.cooking] Comentarios sobre el sitio de recetas de Fatma Alkawokgy',
      '[fifi.cooking] ファトマ・アルカウォクジ・レシピサイトへのご意見',
      '[fifi.cooking] डॉ. फातिमा अलकावोकजी रेसिपी साइट पर प्रतिक्रिया',
      '[fifi.cooking] Feedback sobre o site de receitas da Dra. Fatma Alkawokgy',
      '[fifi.cooking] Отзыв о сайте рецептов Фатмы Алькавокджи',
      '[fifi.cooking] 关于法特玛·卡沃克吉食谱网站的反馈',
      '[fifi.cooking] Feedback zur Fatma-Alkawokgy-Rezeptseite',
      '[fifi.cooking] Feedback sul sito delle ricette di Fatma Alkawokgy',
      '[fifi.cooking] Σχόλια για τον ιστότοπο συνταγών της Φάτμα Αλκαβοκτζή',
      '[fifi.cooking] فاطمہ القاوقجی کی ترکیبوں کی سائٹ کے بارے میں رائے',
      '[fifi.cooking] بازخورد درباره سایت دستورهای فاطمه القاوقجی',
      '[fifi.cooking] Fatma Alkawokgy Tarifleri sitesi hakkında geri bildirim',
      '[fifi.cooking] Nêrîn li ser malpera Reçeteyên Fatma Alkawokgy',
      '[fifi.cooking] Masukan tentang situs Resep Fatma Alkawokgy',
      '[fifi.cooking] Maoni kuhusu tovuti ya Mapishi ya Fatma Alkawokgy',
      '[fifi.cooking] 파트마 알카우크지 레시피 사이트에 대한 의견'
    );
    const body = t(
      'مرحباً،\n\nأود مشاركة السؤال أو الملاحظة أو المشكلة التالية:\n\n',
      'Hello,\n\nI would like to share the following question, comment, or issue:\n\n',
      'Bonjour,\n\nJe souhaite partager la question, le commentaire ou le problème suivant :\n\n',
      'Hola,\n\nQuisiera compartir la siguiente pregunta, comentario o problema:\n\n',
      'こんにちは。\n\n以下の質問・コメント・問題を共有したいと思います:\n\n',
      'नमस्ते,\n\nमैं निम्नलिखित प्रश्न, टिप्पणी या समस्या साझा करना चाहूंगा/चाहूंगी:\n\n',
      'Olá,\n\nGostaria de compartilhar a seguinte pergunta, comentário ou problema:\n\n',
      'Здравствуйте,\n\nХочу поделиться следующим вопросом, комментарием или проблемой:\n\n',
      '您好，\n\n我想反馈以下问题、意见或建议：\n\n',
      'Hallo,\n\nIch möchte folgende Frage, Anmerkung oder Problem mitteilen:\n\n',
      'Ciao,\n\nVorrei condividere la seguente domanda, commento o problema:\n\n',
      'Γεια σας,\n\nΘα ήθελα να μοιραστώ την παρακάτω ερώτηση, σχόλιο ή πρόβλημα:\n\n',
      'السلام علیکم،\n\nمیں درج ذیل سوال، رائے یا مسئلہ شیئر کرنا چاہتا/چاہتی ہوں:\n\n',
      'سلام،\n\nمی‌خواهم پرسش، نظر یا مشکل زیر را مطرح کنم:\n\n',
      'Merhaba,\n\nAşağıdaki soruyu, yorumu veya sorunu paylaşmak istiyorum:\n\n',
      'Silav,\n\nEz dixwazim pirs, şîrove an pirsgirêka jêrîn parve bikim:\n\n',
      'Halo,\n\nSaya ingin menyampaikan pertanyaan, komentar, atau masalah berikut:\n\n',
      'Habari,\n\nNingependa kushiriki swali, maoni, au tatizo lifuatalo:\n\n',
      '안녕하세요,\n\n다음 질문, 의견 또는 문제를 공유하고 싶습니다:\n\n'
    );
    window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const scriptId = 'public-recipe-structured-data';
    const existingScript = document.getElementById(scriptId);
    existingScript?.remove();

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    const siteUrl = new URL(window.location.href);
    siteUrl.search = '';
    siteUrl.hash = '';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: getUIText(lang, 'appTitle'),
      numberOfItems: recipes.length,
      itemListElement: recipes.map((recipe, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}?recipe=${encodeURIComponent(recipe.id)}&lang=${lang}`,
        item: {
          '@type': 'Recipe',
          name: recipe.title,
          alternateName: recipe.titleEn,
          recipeCategory: recipe.category,
          // Only Dr. Fatma's own archive is Egyptian home cooking; additional recipes credit their source.
          ...(recipe.source ? { isBasedOn: recipe.source.url } : { recipeCuisine: 'Egyptian' }),
          ...recipeNutritionSchema(recipe.id),
          recipeIngredient: recipe.masterIngredients.map(ingredient => `${ingredient.name}: ${ingredient.standardAmount}`),
          recipeInstructions: recipe.uniqueInstructions.map(instruction => ({
            '@type': 'HowToStep',
            position: instruction.stepNumber,
            text: instruction.text
          }))
        }
      }))
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [lang, recipes]);

  return (
    <div
      className="min-h-screen bg-stone-100/60 text-stone-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-5 left-5 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className={`p-4 rounded-2xl shadow-xl border flex items-center gap-3 text-xs sm:text-sm max-w-md ${
            notification.type === 'success'
              ? 'bg-stone-900 text-white border-amber-500/50 ring-2 ring-amber-500/20'
              : 'bg-rose-900 text-white border-rose-700'
          }`}>
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            )}
            <span className="leading-snug font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Main Navigation Header */}
      <Header
        stats={stats}
        activeTab={activeTab === 'tribute' ? 'biography' : activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        onShareSite={handleShareSite}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* TAB 1: ALL RECIPES EXPLORER */}
        {activeTab === 'explorer' && (
          <RecipeList
            recipes={recipes}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            lang={lang}
            onOpenShare={(recipe, e) => {
              e.stopPropagation();
              handleShareRecipe(recipe);
            }}
          />
        )}

        {/* TAB 2: ABOUT DR. FATMA ALKAWOKGY MEMORIAL */}
        {activeTab === 'biography' && (
          <FatmaMemorialSection lang={lang} onOpenTribute={() => setActiveTab('tribute')} />
        )}

        {activeTab === 'tribute' && (
          <TributePage lang={lang} onBack={() => setActiveTab('biography')} />
        )}

        {/* TAB 3: UNIFIED MASTER INGREDIENTS */}
        {activeTab === 'ingredients' && (
          <MasterIngredientsView
            recipes={recipes}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            lang={lang}
          />
        )}
      </main>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          lang={lang}
          onShareRecipe={handleShareRecipe}
        />
      )}

      {/* Modern Footer with Memorial Tribute */}
      <footer className="bg-white border-t border-stone-200 mt-auto py-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-600 flex items-center justify-center text-white shrink-0">
                <img src={`${import.meta.env.BASE_URL}logo-transparent.png`} alt="" className="w-7 h-7 object-cover object-center rounded-lg" />
              </div>
              <div>
                <span className="font-bold text-stone-900 block text-sm">
                  {getUIText(lang, 'appTitle')}
                </span>
                <span className="text-[11px] text-stone-500">
                  {t(
                    'إرث الدكتورة فاطمة القاوقجي (1943–2026) • دكتوراه البيانو بكلية التربية الموسيقية، الزمالك، القاهرة',
                    'The Culinary Archive of Dr. Fatma Alkawokgy (1943–2026) • Doctorate in Piano, Cairo',
                    'Les Archives Culinaires du Dr Fatma Alkawokgy (1943–2026) • Doctorat en Piano, Le Caire',
                    'El Archivo Culinario de la Dra. Fatma Alkawokgy (1943–2026) • Doctorado en Piano, El Cairo',
                    'ファトマ・アルカウォクジ博士の料理アーカイブ(1943–2026)• ピアノ博士号、カイロ',
                    'डॉ. फातिमा अलकावोकजी (1943–2026) की पाक विरासत • पियानो में डॉक्टरेट, संगीत शिक्षा महाविद्यालय, ज़मालेक, काहिरा',
                    'O Legado Culinário da Dra. Fatma Alkawokgy (1943–2026) • Doutorado em Piano, Cairo',
                    'Кулинарное наследие д-ра Фатмы Алькавокджи (1943–2026) • Доктор фортепиано, Каир',
                    '法特玛·卡沃克吉博士的美食档案(1943–2026年)• 钢琴博士，开罗',
                    'Das kulinarische Erbe von Dr. Fatma Alkawokgy (1943–2026) • Doktortitel in Klavier, Kairo',
                    'L’Archivio Culinario della Dott.ssa Fatma Alkawokgy (1943–2026) • Dottorato in Pianoforte, Il Cairo',
                    'Η Γαστρονομική Κληρονομιά της Δρ. Φάτμα Αλκαβοκτζή (1943–2026) • Διδακτορικό στο Πιάνο, Κάιρο',
                    'ڈاکٹر فاطمہ القاوقجی (1943–2026) کا کھانوں کا ذخیرہ • پیانو میں ڈاکٹریٹ، قاہرہ',
                    'آرشیو آشپزی دکتر فاطمه القاوقجی (1943–2026) • دکترای پیانو، قاهره',
                    'Dr. Fatma Alkawokgy’nin Mutfak Arşivi (1943–2026) • Piyano Doktorası, Kahire',
                    'Arşîva Metbexê ya Dr. Fatma Alkawokgy (1943–2026) • Doktoraya Piyanoyê, Qahîre',
                    'Arsip Kuliner Dr. Fatma Alkawokgy (1943–2026) • Doktor Piano, Kairo',
                    'Hifadhi ya Upishi ya Dkt. Fatma Alkawokgy (1943–2026) • Shahada ya Uzamivu ya Piano, Kairo',
                    '파트마 알카우크지 박사의 요리 아카이브 (1943–2026) • 피아노 박사, 카이로'
                  )}
                </span>
              </div>
            </div>

            <button
              onClick={handleFeedback}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 rounded-xl transition-colors border border-stone-200"
            >
              <Mail className="w-3.5 h-3.5 text-amber-700" />
              <span>{t('أسئلة أو ملاحظات أو مشاكل؟ أرسل ملاحظاتك', 'Questions, comments, or issues? Submit feedback', 'Questions, commentaires ou problèmes ? Envoyez vos remarques', '¿Preguntas, comentarios o problemas? Envía tus comentarios', 'ご質問・ご意見・不具合の報告はこちら', 'सवाल, टिप्पणी या समस्या? प्रतिक्रिया भेजें', 'Dúvidas, comentários ou problemas? Envie seu feedback', 'Вопросы, комментарии или проблемы? Отправьте отзыв', '有问题、意见或建议？请提交反馈', 'Fragen, Anmerkungen oder Probleme? Feedback senden', 'Domande, commenti o problemi? Invia un feedback', 'Ερωτήσεις, σχόλια ή προβλήματα; Στείλτε τα σχόλιά σας', 'سوالات، رائے یا مسائل؟ اپنی رائے بھیجیں', 'پرسش، نظر یا مشکلی دارید؟ بازخورد بفرستید', 'Sorularınız, yorumlarınız veya sorunlarınız mı var? Geri bildirim gönderin', 'Pirs, şîrove an pirsgirêkên te hene? Nêrînê bişîne', 'Punya pertanyaan, komentar, atau masalah? Kirim masukan', 'Una maswali, maoni, au matatizo? Tuma maoni', '질문, 의견 또는 문제가 있으신가요? 의견 보내기')}</span>
            </button>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-2">
            <div className="space-y-1">
              <p>
                {t(
                  'جميع حقوق وصفات د. فاطمة القاوقجي محفوظة لعائلتها ومحبي فنها وتراثها الموسيقي والطهوي.',
                  'All rights reserved to the culinary and artistic legacy of Dr. Fatma Alkawokgy.',
                  "Tous droits réservés à l'héritage culinaire et artistique du Dr Fatma Alkawokgy.",
                  'Todos los derechos reservados al legado culinario y artístico de la Dra. Fatma Alkawokgy.',
                  'ファトマ・アルカウォクジ博士の料理と芸術の遺産に関する権利は保護されています。',
                  'डॉ. फातिमा अलकावोकजी की पाक और कलात्मक विरासत के सभी अधिकार सुरक्षित हैं।',
                  'Todos os direitos reservados ao legado culinário e artístico da Dra. Fatma Alkawokgy.',
                  'Все права на кулинарное и художественное наследие д-ра Фатмы Алькавокджи защищены.',
                  '法特玛·卡沃克吉博士的美食与艺术遗产版权所有。',
                  'Alle Rechte am kulinarischen und künstlerischen Erbe von Dr. Fatma Alkawokgy vorbehalten.',
                  'Tutti i diritti riservati all’eredità culinaria e artistica della Dott.ssa Fatma Alkawokgy.',
                  'Με επιφύλαξη όλων των δικαιωμάτων επί της γαστρονομικής και καλλιτεχνικής κληρονομιάς της Δρ. Φάτμα Αλκαβοκτζή.',
                  'ڈاکٹر فاطمہ القاوقجی کے کھانوں اور فن کے ورثے کے جملہ حقوق محفوظ ہیں۔',
                  'تمامی حقوق میراث آشپزی و هنری دکتر فاطمه القاوقجی محفوظ است.',
                  'Dr. Fatma Alkawokgy’nin mutfak ve sanat mirasına ait tüm hakları saklıdır.',
                  'Hemû maf ji bo mîrata metbex û hunerî ya Dr. Fatma Alkawokgy parastî ne.',
                  'Seluruh hak atas warisan kuliner dan seni Dr. Fatma Alkawokgy dilindungi.',
                  'Haki zote za urithi wa upishi na sanaa wa Dkt. Fatma Alkawokgy zimehifadhiwa.',
                  '파트마 알카우크지 박사의 요리 및 예술 유산에 대한 모든 권리 보유.'
                )}
              </p>
              <p>
                <a
                  href="https://creativecommons.org/publicdomain/zero/1.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-700 transition-colors"
                >
                  {t(
                    'هذا المحتوى متاح مجاناً للجميع للاستخدام والنسخ والاستنساخ وإعادة النشر بأي شكل وفي أي مكان، دون أي قيود.',
                    'This content is free for anyone to use, copy, replicate, and republish in any form, anywhere, with no restrictions.',
                    'Ce contenu est libre d’utilisation, de copie, de reproduction et de republication sous toute forme, en tout lieu, sans aucune restriction.',
                    'Este contenido es libre para que cualquiera lo use, copie, reproduzca y vuelva a publicar de cualquier forma, en cualquier lugar, sin restricciones.',
                    'このコンテンツは、形式を問わず、場所を問わず、誰でも自由に使用・コピー・複製・再公開できます。制限は一切ありません。',
                    'यह सामग्री किसी भी रूप में, कहीं भी, बिना किसी सीमा के, उपयोग, प्रतिलिपि, पुनरुत्पादन और पुनःप्रकाशन के लिए स्वतंत्र रूप से उपलब्ध है।',
                    'Este conteúdo é livre para qualquer pessoa usar, copiar, reproduzir e republicar em qualquer formato, em qualquer lugar, sem restrições.',
                    'Этот контент можно свободно использовать, копировать, воспроизводить и переиздавать в любой форме и где угодно, без каких-либо ограничений.',
                    '本内容任何人均可免费使用、复制、转载和再发布，形式不限，地点不限，没有任何限制。',
                    'Dieser Inhalt darf von jedem frei verwendet, kopiert, vervielfältigt und in jeder Form und an jedem Ort ohne Einschränkungen weiterveröffentlicht werden.',
                    'Questo contenuto è liberamente utilizzabile da chiunque: può essere usato, copiato, riprodotto e ripubblicato in qualsiasi forma e ovunque, senza alcuna limitazione.',
                    'Αυτό το περιεχόμενο διατίθεται ελεύθερα σε όλους για χρήση, αντιγραφή, αναπαραγωγή και αναδημοσίευση σε οποιαδήποτε μορφή, οπουδήποτε, χωρίς κανέναν περιορισμό.',
                    'یہ مواد ہر کسی کے لیے مفت ہے: اسے کسی بھی شکل میں، کہیں بھی، بغیر کسی پابندی کے استعمال، کاپی، نقل اور دوبارہ شائع کیا جا سکتا ہے۔',
                    'این محتوا برای همه آزاد است: می‌توان آن را به هر شکل و در هر جا، بدون هیچ محدودیتی استفاده، کپی، بازتولید و بازنشر کرد.',
                    'Bu içerik herkes tarafından her biçimde, her yerde, hiçbir kısıtlama olmaksızın kullanılabilir, kopyalanabilir, çoğaltılabilir ve yeniden yayımlanabilir.',
                    'Ev naverok dikare ji aliyê her kesî ve, bi her awayî, li her derê, bê ti sînor were bikaranîn, kopîkirin, zêdekirin û ji nû ve weşandin.',
                    'Konten ini bebas digunakan, disalin, diperbanyak, dan diterbitkan ulang oleh siapa pun, dalam bentuk apa pun, di mana pun, tanpa batasan apa pun.',
                    'Maudhui haya yanaweza kutumiwa, kunakiliwa, kuzalishwa upya, na kuchapishwa upya na mtu yeyote, kwa namna yoyote, mahali popote, bila kizuizi chochote.',
                    '이 콘텐츠는 누구나 어떤 형태로든, 어디서든, 아무런 제한 없이 사용, 복사, 복제 및 재출판할 수 있습니다.'
                  )}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>{t('العربية والإنجليزية والفرنسية والإسبانية واليابانية والهندية والبرتغالية والروسية والصينية والألمانية والإيطالية واليونانية والأردية والفارسية والتركية والكردية والإندونيسية والسواحيلية والكورية مدعومة', 'Arabic, English, French, Spanish, Japanese, Hindi, Portuguese, Russian, Chinese, German, Italian, Greek, Urdu, Persian, Turkish, Kurdish, Indonesian, Swahili, and Korean supported', 'Arabe, anglais, français, espagnol, japonais, hindi, portugais, russe, chinois, allemand, italien, grec, ourdou, persan, turc, kurde, indonésien, swahili et coréen pris en charge', 'Árabe, inglés, francés, español, japonés, hindi, portugués, ruso, chino, alemán, italiano, griego, urdu, persa, turco, kurdo, indonesio, suajili y coreano disponibles', 'アラビア語・英語・フランス語・スペイン語・日本語・ヒンディー語・ポルトガル語・ロシア語・中国語・ドイツ語・イタリア語・ギリシャ語・ウルドゥー語・ペルシャ語・トルコ語・クルド語・インドネシア語・スワヒリ語・韓国語に対応', 'अरबी, अंग्रेज़ी, फ़्रेंच, स्पेनिश, जापानी, हिन्दी, पुर्तगाली, रूसी, चीनी, जर्मन, इतालवी, यूनानी, उर्दू, फ़ारसी, तुर्की, कुर्दी, इंडोनेशियाई, स्वाहिली और कोरियाई उपलब्ध', 'Suporte para árabe, inglês, francês, espanhol, japonês, hindi, português, russo, chinês, alemão, italiano, grego, urdu, persa, turco, curdo, indonésio, suaíli e coreano', 'Поддержка арабского, английского, французского, испанского, японского, хинди, португальского, русского, китайского, немецкого, итальянского, греческого, урду, персидского, турецкого, курдского, индонезийского, суахили и корейского', '支持阿拉伯语、英语、法语、西班牙语、日语、印地语、葡萄牙语、俄语、中文、德语、意大利语、希腊语、乌尔都语、波斯语、土耳其语、库尔德语、印尼语、斯瓦希里语和韩语', 'Unterstützung für Arabisch, Englisch, Französisch, Spanisch, Japanisch, Hindi, Portugiesisch, Russisch, Chinesisch, Deutsch, Italienisch, Griechisch, Urdu, Persisch, Türkisch, Kurdisch, Indonesisch, Swahili und Koreanisch', 'Supporto per arabo, inglese, francese, spagnolo, giapponese, hindi, portoghese, russo, cinese, tedesco, italiano, greco, urdu, persiano, turco, curdo, indonesiano, swahili e coreano', 'Υποστήριξη αραβικών, αγγλικών, γαλλικών, ισπανικών, ιαπωνικών, χίντι, πορτογαλικών, ρωσικών, κινεζικών, γερμανικών, ιταλικών, ελληνικών, ουρντού, περσικών, τουρκικών, κουρδικών, ινδονησιακών, σουαχίλι και κορεατικών', 'عربی، انگریزی، فرانسیسی، ہسپانوی، جاپانی، ہندی، پرتگالی، روسی، چینی، جرمن، اطالوی، یونانی، اردو، فارسی، ترکی، کردی، انڈونیشیائی، سواحلی اور کوریائی دستیاب', 'عربی، انگلیسی، فرانسوی، اسپانیایی، ژاپنی، هندی، پرتغالی، روسی، چینی، آلمانی، ایتالیایی، یونانی، اردو، فارسی، ترکی، کردی، اندونزیایی، سواحیلی و کره‌ای پشتیبانی می‌شوند', 'Arapça, İngilizce, Fransızca, İspanyolca, Japonca, Hintçe, Portekizce, Rusça, Çince, Almanca, İtalyanca, Yunanca, Urduca, Farsça, Türkçe, Kürtçe, Endonezce, Svahili ve Korece desteklenir', 'Erebî, Îngilîzî, Fransî, Spanî, Japonî, Hindî, Portugalî, Rûsî, Çînî, Almanî, Îtalî, Yewnanî, Ûrdûyî, Farisî, Tirkî, Kurdî, Endonezyayî, Swahîlî û Koreyî têne piştgirîkirin', 'Tersedia dalam bahasa Arab, Inggris, Prancis, Spanyol, Jepang, Hindi, Portugis, Rusia, Mandarin, Jerman, Italia, Yunani, Urdu, Persia, Turki, Kurdi, Indonesia, Swahili, dan Korea', 'Inapatikana kwa Kiarabu, Kiingereza, Kifaransa, Kihispania, Kijapani, Kihindi, Kireno, Kirusi, Kichina, Kijerumani, Kiitaliano, Kigiriki, Kiurdu, Kiajemi, Kituruki, Kikurdi, Kiindonesia, Kiswahili, na Kikorea', '아랍어, 영어, 프랑스어, 스페인어, 일본어, 힌디어, 포르투갈어, 러시아어, 중국어, 독일어, 이탈리아어, 그리스어, 우르두어, 페르시아어, 튀르키예어, 쿠르드어, 인도네시아어, 스와힐리어, 한국어 지원')}</span>
              <span>•</span>
              <span>{t('مشاركة الوصفة الفردية مفعّلة', 'Single-Recipe Sharing Enabled', 'Partage de Recette Individuelle Activé', 'Compartir Receta Individual Habilitado', '個別レシピの共有が可能', 'एकल रेसिपी साझा करने की सुविधा उपलब्ध', 'Compartilhamento de receita individual habilitado', 'Доступен обмен ссылкой на отдельный рецепт', '支持单个食谱分享', 'Teilen einzelner Rezepte aktiviert', 'Condivisione della singola ricetta attiva', 'Ενεργοποιημένη κοινή χρήση μεμονωμένης συνταγής', 'انفرادی ترکیب شیئر کرنے کی سہولت دستیاب', 'اشتراک‌گذاری تک‌دستور فعال است', 'Tek Tarif Paylaşımı Etkin', 'Parvekirina Reçeteya Takekesî Çalak e', 'Berbagi Resep Satuan Diaktifkan', 'Kushiriki Mapishi Moja Kumewezeshwa', '개별 레시피 공유 활성화됨')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
