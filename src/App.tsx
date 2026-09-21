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
import { getLocalizedRecipe } from './utils/recipeLocalization';
import { shareRecipe } from './services/recipeShareService';
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
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const isFr = lang === 'fr';
  const t = (ar: string, en: string, fr: string) => (isAr ? ar : isFr ? fr : en);

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
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.title = selectedRecipe
      ? `${getLocalizedRecipe(selectedRecipe, lang).title} | ${getUIText(lang, 'appTitle')}`
      : getUIText(lang, 'appTitle');
  }, [isAr, lang, selectedRecipe]);

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
      setNotification({ message: t('تم نسخ رابط الموقع', 'Site link copied', 'Lien du site copié'), type: 'success' });
      setTimeout(() => setNotification(null), 3500);
    }
  };

  const handleShareRecipe = async (recipe: Recipe) => {
    const title = getLocalizedRecipe(recipe, lang).title;
    const result = await shareRecipe(recipe, lang, title);
    if (result.copied) {
      setNotification({ message: t('تم نسخ رابط الوصفة', 'Recipe link copied', 'Lien de la recette copié'), type: 'success' });
      setTimeout(() => setNotification(null), 3500);
    }
  };

  const handleFeedback = () => {
    const subject = t(
      '[fifi.cooking] ملاحظات حول موقع وصفات د. فاطمة القاوقجي',
      '[fifi.cooking] Feedback on Fatma Alkawokgy Recipes site',
      '[fifi.cooking] Commentaires sur le site des recettes de Fatma Alkawokgy'
    );
    const body = t(
      'مرحباً،\n\nأود مشاركة السؤال أو الملاحظة أو المشكلة التالية:\n\n',
      'Hello,\n\nI would like to share the following question, comment, or issue:\n\n',
      'Bonjour,\n\nJe souhaite partager la question, le commentaire ou le problème suivant :\n\n'
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
          recipeCuisine: 'Egyptian',
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
      dir={isAr ? 'rtl' : 'ltr'}
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
                    'Les Archives Culinaires du Dr Fatma Alkawokgy (1943–2026) • Doctorat en Piano, Le Caire'
                  )}
                </span>
              </div>
            </div>

            <button
              onClick={handleFeedback}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 rounded-xl transition-colors border border-stone-200"
            >
              <Mail className="w-3.5 h-3.5 text-amber-700" />
              <span>{t('أسئلة أو ملاحظات أو مشاكل؟ أرسل ملاحظاتك', 'Questions, comments, or issues? Submit feedback', 'Questions, commentaires ou problèmes ? Envoyez vos remarques')}</span>
            </button>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-2">
            <div>
              {t(
                'جميع حقوق وصفات د. فاطمة القاوقجي محفوظة لعائلتها ومحبي فنها وتراثها الموسيقي والطهوي.',
                'All rights reserved to the culinary and artistic legacy of Dr. Fatma Alkawokgy.',
                "Tous droits réservés à l'héritage culinaire et artistique du Dr Fatma Alkawokgy."
              )}
            </div>
            <div className="flex items-center gap-2">
              <span>{t('العربية والإنجليزية والفرنسية مدعومة', 'Arabic, English, and French supported', 'Arabe, anglais et français pris en charge')}</span>
              <span>•</span>
              <span>{t('مشاركة الوصفة الفردية مفعّلة', 'Single-Recipe Sharing Enabled', 'Partage de Recette Individuelle Activé')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
