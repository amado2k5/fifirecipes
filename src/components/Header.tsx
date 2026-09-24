import React from 'react';
import { DatabaseStats, SupportedLanguage } from '../types';
import {
  BookOpen,
  Layers,
  Music,
  Share2
} from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { getUIText } from '../data/translations';

interface HeaderProps {
  stats: DatabaseStats;
  activeTab: 'explorer' | 'biography' | 'ingredients';
  setActiveTab: (tab: 'explorer' | 'biography' | 'ingredients') => void;
  lang: SupportedLanguage;
  setLang: (l: SupportedLanguage) => void;
  onShareSite: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  stats,
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onShareSite
}) => {
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

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-xs">
      {/* Top Bar with Memorial Brand & Language Selector */}
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

          {/* Right Action Controls: Language and sharing */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Arabic / English selector */}
            <LanguageSelector currentLang={lang} onSelectLang={setLang} />

            <button
              onClick={onShareSite}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 rounded-xl transition-colors border border-stone-200"
              title={t('مشاركة الموقع', 'Share this site', 'Partager ce site', 'Compartir este sitio', 'このサイトをシェア', 'इस साइट को शेयर करें', 'Compartilhar este site', 'Поделиться этим сайтом', '分享此网站', 'Diese Seite teilen', 'Condividi questo sito', 'Κοινοποίηση αυτού του ιστότοπου', 'یہ سائٹ شیئر کریں', 'اشتراک‌گذاری این سایت', 'Bu siteyi paylaş', 'Vê malperê parve bike', 'Bagikan situs ini', 'Shiriki tovuti hii', '이 사이트 공유하기')}
            >
              <Share2 className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">{t('مشاركة الموقع', 'Share site', 'Partager le site', 'Compartir sitio', 'サイトをシェア', 'साइट शेयर करें', 'Compartilhar site', 'Поделиться сайтом', '分享网站', 'Seite teilen', 'Condividi sito', 'Κοινοποίηση', 'سائٹ شیئر کریں', 'اشتراک سایت', 'Siteyi paylaş', 'Malperê parve bike', 'Bagikan situs', 'Shiriki tovuti', '사이트 공유')}</span>
            </button>
          </div>
        </div>

        {/* Global Key Metrics Ribbon */}
        <div className="grid grid-cols-3 gap-2.5 py-2.5 text-stone-700 text-xs">
          <div
            onClick={() => setActiveTab('explorer')}
            className="flex items-center gap-2 bg-stone-50/80 hover:bg-amber-50/50 px-3 py-1.5 rounded-xl border border-stone-200/70 cursor-pointer transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <div>
              <span className="font-bold text-stone-900">{stats.totalRecipes}</span>
              <span className="text-stone-500 text-[11px] ms-1">{t('وصفة موحدة', 'Recipes', 'Recettes', 'Recetas', 'レシピ', 'व्यंजन', 'Receitas', 'Рецепты', '食谱', 'Rezepte', 'Ricette', 'Συνταγές', 'ترکیبیں', 'دستورها', 'Tarif', 'Reçete', 'Resep', 'Mapishi', '레시피')}</span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab('ingredients')}
            className="flex items-center gap-2 bg-stone-50/80 hover:bg-emerald-50/50 px-3 py-1.5 rounded-xl border border-stone-200/70 cursor-pointer transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold text-stone-900">{stats.totalMasterIngredients}</span>
              <span className="text-stone-500 text-[11px] ms-1">{t('مكون رئيسي', 'Ingredients', 'Ingrédients', 'Ingredientes', '食材', 'सामग्री', 'Ingredientes', 'Ингредиенты', '食材', 'Zutaten', 'Ingredienti', 'Υλικά', 'اجزاء', 'مواد اولیه', 'Malzeme', 'Pêkhate', 'Bahan', 'Viungo', '재료')}</span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab('biography')}
            className="flex items-center gap-2 bg-stone-50/80 hover:bg-purple-50/50 px-3 py-1.5 rounded-xl border border-stone-200/70 cursor-pointer transition-colors"
          >
            <Music className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <div>
              <span className="font-bold text-stone-900">20 {t('عاماً', 'Years', 'Ans', 'Años', '年', 'वर्ष', 'Anos', 'Лет', '年', 'Jahre', 'Anni', 'Χρόνια', 'سال', 'سال', 'Yıl', 'Sal', 'Tahun', 'Miaka', '년')}</span>
              <span className="text-stone-500 text-[11px] ms-1">{t('جمع وتدوين', 'Collection', 'Collecte', 'Recopilación', '記録収集', 'संकلन', 'Coleção', 'Коллекция', '收集整理', 'Sammlung', 'Raccolta', 'Συλλογή', 'جمع و تدوین', 'گردآوری', 'Derleme', 'Berhevkirin', 'Kompilasi', 'Mkusanyiko', '컬렉션')}</span>
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

          {/* 2. About Dr. Fatma Biography */}
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

          {/* 3. Master Ingredients Registry */}
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`inline-flex items-center gap-2 py-2 px-3 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'ingredients'
                ? 'bg-stone-200 text-stone-900 font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>{getUIText(lang, 'navIngredientsRegistry')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
