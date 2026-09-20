/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { allRecipes, computeDatabaseStats } from './data/recipes';
import { Recipe, SupportedLanguage, UserProfile } from './types';
import { Header } from './components/Header';
import { RecipeList } from './components/RecipeList';
import { MasterIngredientsView } from './components/MasterIngredientsView';
import { DocumentComparator } from './components/DocumentComparator';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { SingleRecipeShareModal } from './components/SingleRecipeShareModal';
import { AuthModal } from './components/AuthModal';
import { FatmaMemorialSection } from './components/FatmaMemorialSection';
import { TributePage } from './components/TributePage';
import { AdminDashboard } from './components/AdminDashboard';
import { ExportModal } from './components/ExportModal';
import { 
  subscribeToRecipes, 
  syncAllRecipesToFirestore,
  recordActivityLog,
  saveUserProfileToFirestore
} from './services/firestoreRecipeService';
import { getStoredUser, signOutUser, saveStoredUser, isUserAdmin } from './services/authService';
import { detectUserLanguage, getUIText, TOP_20_LANGUAGES } from './data/translations';
import { getLocalizedRecipe } from './utils/recipeLocalization';
import { ChefHat, Music, Heart, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

const BOOKMARKS_STORAGE_KEY = 'fatma_saved_recipes';

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
    const storedUser = getStoredUser();
    const sharedLanguage = getSharedLanguage();
    if (sharedLanguage) {
      return sharedLanguage;
    }
    if (storedUser?.preferredLanguage) {
      return storedUser.preferredLanguage === 'ar' ? 'ar' : 'en';
    }
    return detectUserLanguage();
  });
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';

  // Master Recipes State
  const [recipes, setRecipes] = useState<Recipe[]>(allRecipes);
  
  // Navigation Tabs: explorer | saved | biography | ingredients | comparator | admin
  const [activeTab, setActiveTab] = useState<'explorer' | 'saved' | 'biography' | 'ingredients' | 'comparator' | 'tribute' | 'admin'>('explorer');
  
  // Active Modals & Selected Items
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [sharingRecipe, setSharingRecipe] = useState<Recipe | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Authenticated User Profile (Google, Apple, Facebook, X, Instagram, TikTok)
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => getStoredUser());

  // Bookmarks / Favorites State
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
      const user = getStoredUser();
      if (user && user.bookmarks) return user.bookmarks;
      return [];
    } catch {
      return [];
    }
  });

  // Cloud Firestore Sync State (kept for background persistence; not exposed in public UI)
  const [cloudStatus, setCloudStatus] = useState<'idle' | 'syncing' | 'connected' | 'error'>('idle');
  const [cloudRecipeCount, setCloudRecipeCount] = useState<number>(0);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Calculate live database statistics
  const stats = useMemo(() => computeDatabaseStats(recipes), [recipes]);

  // Handle bookmark toggle
  const handleToggleBookmark = useCallback(async (recipe: Recipe, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const isCurrentlyBookmarked = bookmarkedIds.includes(recipe.id);
    let updated: string[];

    if (isCurrentlyBookmarked) {
      updated = bookmarkedIds.filter(id => id !== recipe.id);
      setNotification({
        message: isAr ? `تمت إزالة "${recipe.title}" من المفضلة` : `Removed "${recipe.title}" from saved`,
        type: 'success'
      });
    } else {
      updated = [...bookmarkedIds, recipe.id];
      setNotification({
        message: isAr ? `تمت إضافة "${recipe.title}" إلى المفضلة ❤️` : `Saved "${recipe.title}" to favorites ❤️`,
        type: 'success'
      });
    }

    setBookmarkedIds(updated);
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }

    // Sync with User Profile in Firestore if signed in
    if (currentUser) {
      const updatedProfile: UserProfile = {
        ...currentUser,
        bookmarks: updated,
        lastActiveAt: new Date().toISOString()
      };
      setCurrentUser(updatedProfile);
      saveStoredUser(updatedProfile);
      await saveUserProfileToFirestore(updatedProfile);

      // Log activity
      await recordActivityLog(
        'bookmark',
        recipe.id,
        recipe.title,
        currentUser.id,
        currentUser.name,
        isCurrentlyBookmarked ? 'Removed from favorites' : 'Added to favorites'
      );
    }

    setTimeout(() => setNotification(null), 3500);
  }, [bookmarkedIds, currentUser, isAr]);

  // Handle User Star Rating
  const handleUserRate = useCallback(async (recipe: Recipe, rating: number) => {
    if (currentUser) {
      const updatedRatings = { ...(currentUser.ratings || {}), [recipe.id]: rating };
      const updatedProfile: UserProfile = {
        ...currentUser,
        ratings: updatedRatings,
        lastActiveAt: new Date().toISOString()
      };
      setCurrentUser(updatedProfile);
      saveStoredUser(updatedProfile);
      await saveUserProfileToFirestore(updatedProfile);

      await recordActivityLog(
        'rating',
        recipe.id,
        recipe.title,
        currentUser.id,
        currentUser.name,
        `Rated ${rating} stars`
      );
    }

    setNotification({
      message: isAr ? `شكراً لتقييمك (${rating} نجوم) ⭐` : `Thank you for rating (${rating} stars) ⭐`,
      type: 'success'
    });
    setTimeout(() => setNotification(null), 3500);
  }, [currentUser, isAr]);

  // Handle Language Selection with User Profile Persistence
  const handleSelectLanguage = (newLang: SupportedLanguage) => {
    setLang(newLang);
    if (currentUser) {
      const updatedProfile: UserProfile = {
        ...currentUser,
        preferredLanguage: newLang,
        lastActiveAt: new Date().toISOString()
      };
      setCurrentUser(updatedProfile);
      saveStoredUser(updatedProfile);
      saveUserProfileToFirestore(updatedProfile).catch(console.error);
    }
  };

  // Handle User Sign-In or Profile Change with Automatic Admin Role Detection
  const handleUserChanged = (user: UserProfile | null) => {
    setCurrentUser(user);
    if (user) {
      if (user.preferredLanguage && user.preferredLanguage !== lang) {
        setLang(user.preferredLanguage);
      }
      // If user is an admin, immediately switch to the admin view (3-doc diff analyzer)
      if (isUserAdmin(user)) {
        setActiveTab('admin');
        setNotification({
          message: isAr 
            ? `مرحباً بك (${user.name})! تم تفعيل حساب المشرف وفتح مقارنة وتدقيق الوثائق الثلاث تلقائياً.`
            : `Welcome (${user.name})! Admin role detected: 3-Doc Diff Analyzer unlocked.`,
          type: 'success'
        });
        setTimeout(() => setNotification(null), 5000);
      }
    } else {
      if (activeTab === 'admin') {
        setActiveTab('explorer');
      }
    }
  };

  // Handle User Sign-Out
  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
    if (activeTab === 'admin') {
      setActiveTab('explorer');
    }
    setNotification({
      message: isAr ? 'تم تسجيل الخروج بنجاح' : 'Signed out successfully',
      type: 'success'
    });
    setTimeout(() => setNotification(null), 3500);
  };

  // Initialize and listen to Firebase Firestore
  useEffect(() => {
    let hasAttemptedAutoSeed = false;

    const unsubscribe = subscribeToRecipes(
      (cloudRecipes) => {
        if (cloudRecipes && cloudRecipes.length > 0) {
          setRecipes(cloudRecipes);
          setCloudRecipeCount(cloudRecipes.length);
          setCloudStatus('connected');
        } else if (!hasAttemptedAutoSeed) {
          hasAttemptedAutoSeed = true;
          // Auto-seed Firestore with master recipes on first run
          setCloudStatus('syncing');
          syncAllRecipesToFirestore(allRecipes).then((res) => {
            if (res.success) {
              setCloudStatus('connected');
              setCloudRecipeCount(res.count);
              setNotification({
                message: isAr
                  ? `تمت مزامنة ${res.count} وصفة لمعمارية د. فاطمة القاوقجي في Firestore بنجاح!`
                  : `Successfully synced ${res.count} recipes to Firebase Firestore!`,
                type: 'success'
              });
              setTimeout(() => setNotification(null), 5000);
            } else {
              setCloudStatus('idle');
            }
          }).catch(() => {
            setCloudStatus('idle');
          });
        } else {
          setCloudStatus('connected');
          setCloudRecipeCount(0);
        }
      },
      (error) => {
        console.warn('Firestore subscription status:', error);
        setCloudStatus('error');
      }
    );

    return () => unsubscribe();
  }, [isAr]);

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
      setNotification({ message: isAr ? 'تم نسخ رابط الموقع' : 'Site link copied', type: 'success' });
      setTimeout(() => setNotification(null), 3500);
    }
  };

  // Handle manual sync button click
  const handleManualSync = async () => {
    setCloudStatus('syncing');
    const res = await syncAllRecipesToFirestore(recipes);
    if (res.success) {
      setCloudStatus('connected');
      setCloudRecipeCount(res.count);
      setNotification({
        message: isAr
          ? `تم تحديث ومزامنة ${res.count} وصفة في Firebase Firestore!`
          : `Updated and synchronized ${res.count} recipes in Firebase Firestore!`,
        type: 'success'
      });
      setTimeout(() => setNotification(null), 5000);
    } else {
      setCloudStatus('error');
      setNotification({
        message: isAr
          ? `تعذرت المزامنة: ${res.error || 'يرجى التحقق من اتصال الشبكة'}`
          : `Sync error: ${res.error || 'Please check network connection'}`,
        type: 'error'
      });
      setTimeout(() => setNotification(null), 6000);
    }
  };

  // Filter public recipes (hiding unpublished recipes from public catalogue)
  const publicRecipes = useMemo(() => recipes, [recipes]);

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
      numberOfItems: publicRecipes.length,
      itemListElement: publicRecipes.map((recipe, index) => ({
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
  }, [lang, publicRecipes]);

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
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={handleSelectLanguage}
        onShareSite={handleShareSite}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onSignOut={handleSignOut}
        savedCount={bookmarkedIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* TAB 1: ALL RECIPES EXPLORER */}
        {activeTab === 'explorer' && (
          <RecipeList
            recipes={publicRecipes}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            lang={lang}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onOpenShare={(recipe, e) => {
              e.stopPropagation();
              setSharingRecipe(recipe);
            }}
          />
        )}

        {/* TAB 2: MY BOOKMARKS / SAVED */}
        {activeTab === 'saved' && (
          <RecipeList
            recipes={publicRecipes}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            lang={lang}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onOpenShare={(recipe, e) => {
              e.stopPropagation();
              setSharingRecipe(recipe);
            }}
            onlyBookmarked={true}
          />
        )}

        {/* TAB 3: ABOUT DR. FATMA ALKAWOKGY MEMORIAL */}
        {activeTab === 'biography' && (
          <FatmaMemorialSection lang={lang} onOpenTribute={() => setActiveTab('tribute')} />
        )}

        {activeTab === 'tribute' && (
          <TributePage lang={lang} onBack={() => setActiveTab('biography')} />
        )}

        {/* TAB 4: UNIFIED MASTER INGREDIENTS */}
        {activeTab === 'ingredients' && (
          <MasterIngredientsView
            recipes={publicRecipes}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            lang={lang}
          />
        )}

        {/* TAB 5: ADMIN 3-DOC DIFF & RECONCILIATION DASHBOARD (ADMIN-ONLY) */}
        {activeTab === 'admin' && (
          <AdminDashboard
            recipes={recipes}
            onRecipeUpdated={(updatedRecipe) => {
              setRecipes(prev => prev.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
            }}
            lang={lang}
            currentUser={currentUser}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}
      </main>

      {/* Recipe Detail Modal with Star Rating, Comments & Single Share */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          lang={lang}
          currentUser={currentUser}
          isBookmarked={bookmarkedIds.includes(selectedRecipe.id)}
          onToggleBookmark={(r) => handleToggleBookmark(r)}
          onOpenShareModal={(r) => setSharingRecipe(r)}
          onUserRate={(r, rating) => handleUserRate(r, rating)}
        />
      )}

      {/* Single Recipe Share Modal (Individual recipe share & export only) */}
      {sharingRecipe && (
        <SingleRecipeShareModal
          recipe={sharingRecipe}
          isOpen={true}
          onClose={() => setSharingRecipe(null)}
          lang={lang}
          currentUser={currentUser}
        />
      )}

      {/* Social Authentication Modal (Google, Apple, Facebook, X, Instagram, TikTok) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onUserChanged={handleUserChanged}
        lang={lang}
        onSelectLanguage={handleSelectLanguage}
      />

      {/* Database Export Modal (Admin / Academic Research) */}
      <ExportModal
        recipes={recipes}
        stats={stats}
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        lang={lang}
      />

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
                  {isAr 
                    ? 'إرث الدكتورة فاطمة القاوقجي (1943–2026) • دكتوراه البيانو بكلية التربية الموسيقية، الزمالك، القاهرة' 
                    : 'The Culinary Archive of Dr. Fatma Alkawokgy (1943–2026) • Doctorate in Piano, Cairo'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-stone-600 text-xs">
              <button
                onClick={() => setActiveTab('biography')}
                className="hover:text-amber-800 transition-colors flex items-center gap-1 font-semibold"
              >
                <Music className="w-3.5 h-3.5 text-amber-600" />
                <span>{getUIText(lang, 'navAboutFatma')}</span>
              </button>

              <button
                onClick={() => setActiveTab('saved')}
                className="hover:text-rose-600 transition-colors flex items-center gap-1 font-semibold"
              >
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>{getUIText(lang, 'navMyBookmarks')} ({bookmarkedIds.length})</span>
              </button>

              {isUserAdmin(currentUser) && (
                <button
                  onClick={() => setActiveTab('admin')}
                  className="hover:text-amber-800 transition-colors text-xs text-amber-800 font-bold flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200"
                >
                  <span>👑</span>
                  <span>{getUIText(lang, 'navAdminDashboard')}</span>
                </button>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-2">
            <div>
              {isAr
                ? 'جميع حقوق وصفات د. فاطمة القاوقجي محفوظة لعائلتها ومحبي فنها وتراثها الموسيقي والطهوي.'
                : 'All rights reserved to the culinary and artistic legacy of Dr. Fatma Alkawokgy.'}
            </div>
            <div className="flex items-center gap-2">
              <span>{isAr ? 'العربية والإنجليزية مدعومتان' : 'Arabic and English supported'}</span>
              <span>•</span>
              <span>{isAr ? 'مشاركة الوصفة الفردية مفعّلة' : 'Single-Recipe Sharing Enabled'}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
