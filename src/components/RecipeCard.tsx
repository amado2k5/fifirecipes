import React, { useEffect, useRef, useState } from 'react';
import { RecipeSummary, SupportedLanguage } from '../types';
import {
  Flame,
  Clock,
  Users,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Share2,
  Loader2
} from 'lucide-react';
import { getRecipeThumbnail } from '../data/recipeImages';
import { getUIText } from '../data/translations';
import { getAdditionalRecipesText } from '../data/additionalRecipesText';
import { HealthTags } from './HealthTags';
import { getLocalizedIngredient, getLocalizedRecipe } from '../utils/recipeLocalization';

interface RecipeCardProps {
  recipe: RecipeSummary;
  onSelect: (recipe: RecipeSummary) => void;
  /** Starts fetching the full recipe when the pointer or focus lands on the card. */
  onPrefetch?: (recipeId: string) => void;
  /** The full recipe is being fetched after a click. */
  isOpening?: boolean;
  lang: SupportedLanguage;
  onOpenShare: (recipe: RecipeSummary, e: React.MouseEvent) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onSelect,
  onPrefetch,
  isOpening = false,
  lang,
  onOpenShare
}) => {
  const isRtl = lang === 'ar' || lang === 'fa' || lang === 'ur' || lang === 'ps' || lang === 'he';
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
  const isNl = lang === 'nl';
  const isPs = lang === 'ps';
  const isHe = lang === 'he';
  const isPl = lang === 'pl';
  const isSv = lang === 'sv';
  const isTe = lang === 'te';
  const isBn = lang === 'bn';
  const isVi = lang === 'vi';
  const isSq = lang === 'sq';
  const isCs = lang === 'cs';
  const isRo = lang === 'ro';
  const t = (ar: string, en: string, fr: string, es: string, ja: string, hi: string, pt: string, ru: string, zh: string, de: string, it: string, el: string, ur: string, fa: string, tr: string, ku: string, id: string, sw: string, ko: string, nl = en, ps = en, he = en, pl = en, sv = en, te = en, bn = en, vi = en, sq = en, cs = en, ro = en) => (isAr ? ar : isFr ? fr : isEs ? es : isJa ? ja : isHi ? hi : isPt ? pt : isRu ? ru : isZh ? zh : isDe ? de : isIt ? it : isEl ? el : isUr ? ur : isFa ? fa : isTr ? tr : isKu ? ku : isId ? id : isSw ? sw : isKo ? ko : isNl ? nl : isPs ? ps : isHe ? he : isPl ? pl : isSv ? sv : isTe ? te : isBn ? bn : isVi ? vi : isSq ? sq : isCs ? cs : isRo ? ro : en);
  const imageUrl = getRecipeThumbnail(recipe.id, recipe.imageUrl);

  // The photo is requested only while the card is near the viewport, and the
  // request is dropped if the card leaves before it finishes. With native
  // lazy loading, every card flicked past during a fast scroll kept its
  // download going, so on slow connections the cards the reader stopped on
  // waited behind all of them.
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(() => typeof IntersectionObserver === 'undefined');
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null);
  const imageLoaded = loadedUrl === imageUrl;
  useEffect(() => {
    const box = imageBoxRef.current;
    if (!box || imageLoaded || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      entries => setNearViewport(entries[entries.length - 1].isIntersecting),
      { rootMargin: '50% 0px' }
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, [imageLoaded]);
  const localized = getLocalizedRecipe(recipe, lang);
  const localizedIngredientNames = Array.from(new Set(
    recipe.previewIngredients.map(ingredient => getLocalizedIngredient(ingredient, lang, recipe.id))
  ));

  return (
    <div 
      onClick={() => onSelect(recipe)}
      onKeyDown={(e) => {
        if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect(recipe);
        }
      }}
      onPointerEnter={() => onPrefetch?.(recipe.id)}
      onFocus={() => onPrefetch?.(recipe.id)}
      role="button"
      tabIndex={0}
      aria-busy={isOpening}
      className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-xl hover:border-amber-400/90 transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden"
    >
      {/* Visual Photography Header */}
      <div ref={imageBoxRef} className="relative h-48 w-full overflow-hidden bg-stone-100">
        <img
          src={nearViewport || imageLoaded ? imageUrl : undefined}
          alt={localized.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          decoding="async"
          onLoad={() => setLoadedUrl(imageUrl)}
        />
        {isOpening && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/40 backdrop-blur-[1px]">
            <Loader2 className="w-8 h-8 text-amber-700 animate-spin" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20" />

        {/* Floating Actions on Image */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={(e) => onOpenShare(recipe, e)}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-stone-700 hover:text-amber-700 hover:bg-white flex items-center justify-center shadow-xs transition-transform active:scale-95"
            title={getUIText(lang, 'shareRecipe')}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pill on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-white">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-600/90 backdrop-blur-xs text-white shadow-xs">
            <Flame className="w-3 h-3" />
            <span>{localized.category}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Cooking method header */}
          <div className="flex items-center justify-end gap-1.5 text-[11px] text-stone-500 mb-1.5 font-medium">
            {recipe.collection !== 'archive' && (
              <span className="bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 rounded-md font-semibold shrink-0">
                {getAdditionalRecipesText(lang).badge}
              </span>
            )}
            <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-semibold shrink-0">
              {localized.cookingMethod}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-1">
            {localized.title}
          </h3>
          {recipe.titleEn && recipe.titleEn !== localized.title && (
            <p className="text-xs text-stone-500 font-medium mt-0.5 line-clamp-1" dir="ltr">
              {recipe.titleEn}
            </p>
          )}

          {/* Times & Servings: three fixed slots, so a missing value shows "—" and can never shift another row into its place. */}
          <dl className="grid grid-cols-3 gap-2 text-xs text-stone-600 mt-3 pt-2.5 border-t border-stone-100">
            {([
              { key: 'prepTime', Icon: Clock, tone: 'text-stone-400', value: localized.prepTime },
              { key: 'cookTime', Icon: Flame, tone: 'text-amber-500', value: localized.cookTime },
              { key: 'servings', Icon: Users, tone: 'text-stone-400', value: localized.servings }
            ] as const).map(({ key, Icon, tone, value }) => (
              <div key={key} className="flex items-center gap-1 min-w-0" title={getUIText(lang, key)}>
                <dt className="sr-only">{getUIText(lang, key)}</dt>
                <Icon className={`w-3.5 h-3.5 shrink-0 ${tone}`} aria-hidden="true" />
                <dd className="truncate">{value?.trim() ? value : '—'}</dd>
              </div>
            ))}
          </dl>

          {/* Master Ingredients Pills */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-1">
              {localizedIngredientNames.slice(0, 3).map((ingredientName) => (
                <span 
                  key={ingredientName} 
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] bg-stone-50 text-stone-700 border border-stone-200"
                >
                  {ingredientName}
                </span>
              ))}
              {recipe.ingredientCount > 3 && (
                <span
                  className="text-[10px] text-stone-400 self-center px-1"
                  title={`+${recipe.ingredientCount - 3} ${getUIText(lang, 'moreIngredients')}`}
                >
                  <span aria-hidden="true">+{recipe.ingredientCount - 3}</span>
                  <span className="sr-only">{`+${recipe.ingredientCount - 3} ${getUIText(lang, 'moreIngredients')}`}</span>
                </span>
              )}
            </div>
            <HealthTags recipeId={recipe.id} lang={lang} variant="card" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50 text-[11px]">
            <Sparkles className="w-3 h-3 text-emerald-600" />
<span className="font-semibold">{recipe.stepCount} {t('خطوة فريدة', 'steps', 'étapes', 'pasos', 'ステップ', 'चरण', 'passos', (recipe.stepCount % 10 === 1 && recipe.stepCount % 100 !== 11 ? 'шаг' : [2, 3, 4].includes(recipe.stepCount % 10) && ![12, 13, 14].includes(recipe.stepCount % 100) ? 'шага' : 'шагов'), '步骤', 'Schritte', 'passaggi', 'βήματα', 'مراحل', 'مرحله', 'adım', 'gav', 'langkah', 'hatua', '단계', 'stappen', 'ګامونه', 'שלבים', 'kroków', 'steg', 'దశలు', 'ধাপ', 'bước', 'hapa', 'kroky', 'pași')}</span> </div> <span className="font-semibold text-amber-700 group-hover:text-amber-900 flex items-center gap-1"> <span>{t('عرض الوصفة', 'View Recipe', 'Voir la Recette', 'Ver Receta', 'レシピを見る', 'रेसिपी देखें', 'Ver Receita', 'Смотреть Рецепт', '查看食谱', 'Rezept Ansehen', 'Vedi Ricetta', 'Δείτε τη Συνταγή', 'ترکیب دیکھیں', 'مشاهده دستور', 'Tarifi Gör', 'Reçeteyê Bibîne', 'Lihat Resep', 'Tazama Mapishi', '레시피 보기', 'Recept bekijken', 'ترکیب وګورئ', 'צפו במתכון', 'Zobacz przepis', 'Visa recept', 'వంటకం చూడండి', 'রেসিপি দেখুন', 'Xem công thức', 'Shiko recetën', 'Zobrazit recept', 'Vezi rețeta')}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </span>
        </div>
      </div>
    </div>
  );
};

