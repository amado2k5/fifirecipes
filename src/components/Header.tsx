import React from 'react';
import { DatabaseStats, SupportedLanguage, UserProfile } from '../types';
import { 
  BookOpen, 
  Layers, 
  Sparkles, 
  Scale, 
  ChefHat,
  Heart,
  Music,
  Shield,
  User,
  LogIn,
  LogOut,
  Flame,
  Share2
} from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { getUIText } from '../data/translations';
import { isUserAdmin } from '../services/authService';

interface HeaderProps {
  stats: DatabaseStats;
  activeTab: 'explorer' | 'saved' | 'biography' | 'ingredients' | 'comparator' | 'tribute' | 'admin';
  setActiveTab: (tab: 'explorer' | 'saved' | 'biography' | 'ingredients' | 'comparator' | 'tribute' | 'admin') => void;
  lang: SupportedLanguage;
  setLang: (l: SupportedLanguage) => void;
  onShareSite: () => void;
  currentUser: UserProfile | null;
  onOpenAuthModal: () => void;
  onSignOut: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  stats,
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onShareSite,
  currentUser,
  onOpenAuthModal,
  onSignOut,
  savedCount
}) => {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-xs">
      {/* Top Bar with Memorial Brand, Language Selector & Auth */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between py-3.5 border-b border-stone-100 gap-3">
          
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <div 
              onClick={() => setActiveTab('biography')}
              className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-stone-900 shadow-sm ring-4 ring-stone-200/70 shrink-0 cursor-pointer group"
              title="د. فاطمة القاوقجي (1943 - 2026) • كلية التربية الموسيقية بالزمالك"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo-transparent.png`}
                alt="د. فاطمة القاوقجي"
                className="w-10 h-10 object-cover object-center rounded-xl group-hover:scale-110 transition-transform"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 
                  onClick={() => setActiveTab('explorer')}
                  className="text-lg sm:text-xl font-black tracking-tight text-stone-900 cursor-pointer hover:text-amber-800 transition-colors"
                >
                  {getUIText(lang, 'appTitle')}
                </h1>

                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80">
                  <Music className="w-3 h-3 text-amber-600" />
                  <span>1943–2026</span>
                </span>

              </div>

              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                {getUIText(lang, 'appSubtitle')}
              </p>
            </div>
          </div>

          {/* Right Action Controls: Language, sharing, and account */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Arabic / English selector */}
            <LanguageSelector currentLang={lang} onSelectLang={setLang} />

            <button
              onClick={onShareSite}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 rounded-xl transition-colors border border-stone-200"
              title={isAr ? 'مشاركة الموقع' : 'Share this site'}
            >
              <Share2 className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">{isAr ? 'مشاركة الموقع' : 'Share site'}</span>
            </button>

            {/* Authentication Button or User Pill */}
            {currentUser ? (
              <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 p-1 pl-2.5 rounded-xl">
                <img
                  src={currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
                  alt={currentUser.name}
                  className="w-7 h-7 rounded-lg object-cover border border-amber-500/40"
                  referrerPolicy="no-referrer"
                />
                <div 
                  onClick={() => {
                    if (isUserAdmin(currentUser)) {
                      setActiveTab('admin');
                    }
                  }}
                  className={`text-left hidden sm:block ${isUserAdmin(currentUser) ? 'cursor-pointer hover:opacity-80' : ''}`}
                  title={isUserAdmin(currentUser) ? (isAr ? 'حساب مشرف: انقر لفتح مساحة الإدارة' : 'Admin: Open the management workspace') : undefined}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-stone-800 leading-tight truncate max-w-[110px]">
                      {currentUser.name}
                    </span>
                    {isUserAdmin(currentUser) && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-100 text-amber-900 font-bold border border-amber-300">
                        👑 {isAr ? 'مشرف' : 'Admin'}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-stone-400 capitalize">
                    {currentUser.provider}
                  </div>
                </div>
                <button
                  onClick={onSignOut}
                  className="p-1 rounded-lg text-stone-400 hover:text-rose-600 transition-colors"
                  title={getUIText(lang, 'signOut')}
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors shadow-xs"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{getUIText(lang, 'loginBtn')}</span>
              </button>
            )}
          </div>
        </div>

        {/* Global Key Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2.5 text-stone-700 text-xs">
          <div 
            onClick={() => setActiveTab('explorer')}
            className="flex items-center gap-2 bg-stone-50/80 hover:bg-amber-50/50 px-3 py-1.5 rounded-xl border border-stone-200/70 cursor-pointer transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <div>
              <span className="font-bold text-stone-900">{stats.totalRecipes}</span>
              <span className="text-stone-500 text-[11px] ml-1">{isAr ? 'وصفة موحدة' : 'Recipes'}</span>
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('ingredients')}
            className="flex items-center gap-2 bg-stone-50/80 hover:bg-emerald-50/50 px-3 py-1.5 rounded-xl border border-stone-200/70 cursor-pointer transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold text-stone-900">{stats.totalMasterIngredients}</span>
              <span className="text-stone-500 text-[11px] ml-1">{isAr ? 'مكون رئيسي' : 'Ingredients'}</span>
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('biography')}
            className="flex items-center gap-2 bg-stone-50/80 hover:bg-purple-50/50 px-3 py-1.5 rounded-xl border border-stone-200/70 cursor-pointer transition-colors"
          >
            <Music className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <div>
              <span className="font-bold text-stone-900">20 {isAr ? 'عاماً' : 'Years'}</span>
              <span className="text-stone-500 text-[11px] ml-1">{isAr ? 'جمع وتدوين' : 'Collection'}</span>
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('saved')}
            className="flex items-center gap-2 bg-stone-50/80 hover:bg-rose-50/50 px-3 py-1.5 rounded-xl border border-stone-200/70 cursor-pointer transition-colors"
          >
            <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <div>
              <span className="font-bold text-stone-900">{savedCount}</span>
              <span className="text-stone-500 text-[11px] ml-1">{isAr ? 'في المفضلة' : 'Saved'}</span>
            </div>
          </div>
        </div>

        {/* Modern Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 sm:pb-0 pt-1 border-t border-stone-100 scrollbar-none text-xs sm:text-sm font-semibold">
          {/* 1. Recipe Catalog */}
          <button
            onClick={() => setActiveTab('explorer')}
            className={`inline-flex items-center gap-2 py-2 px-3 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'explorer'
                ? 'bg-amber-100 text-amber-900 font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>{getUIText(lang, 'navAllRecipes')}</span>
          </button>

          {/* 2. My Saved / Bookmarks */}
          <button
            onClick={() => setActiveTab('saved')}
            className={`inline-flex items-center gap-2 py-2 px-3 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'saved'
                ? 'bg-rose-100 text-rose-900 font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Heart className={`w-4 h-4 ${activeTab === 'saved' ? 'fill-current text-rose-600' : 'text-stone-500'}`} />
            <span>{getUIText(lang, 'navMyBookmarks')}</span>
            {savedCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-200 text-rose-900 font-bold">
                {savedCount}
              </span>
            )}
          </button>

          {/* 3. About Dr. Fatma Biography */}
          <button
            onClick={() => setActiveTab('biography')}
            className={`inline-flex items-center gap-2 py-2 px-3 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'biography'
                ? 'bg-amber-100 text-amber-900 font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Music className="w-4 h-4 text-amber-700" />
            <span>{getUIText(lang, 'navAboutFatma')}</span>
          </button>

          {/* 4. Master Ingredients Registry */}
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`inline-flex items-center gap-2 py-2 px-3 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'ingredients'
                ? 'bg-stone-200 text-stone-900 font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>{isAr ? 'فهرس المكونات المعيارية' : 'Ingredients Registry'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
