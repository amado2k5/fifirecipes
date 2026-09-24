import React from 'react';
import { Recipe, SupportedLanguage } from '../types';
import {
  Flame,
  Clock,
  Users,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Share2
} from 'lucide-react';
import { getRecipeImage } from '../data/recipeImages';
import { getUIText } from '../data/translations';
import { getAdditionalRecipesText } from '../data/additionalRecipesText';
import { getLocalizedIngredient, getLocalizedRecipe } from '../utils/recipeLocalization';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
  lang: SupportedLanguage;
  onOpenShare: (recipe: Recipe, e: React.MouseEvent) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onSelect,
  lang,
  onOpenShare
}) => {
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
  const imageUrl = getRecipeImage(recipe.id, recipe.imageUrl);
  const localized = getLocalizedRecipe(recipe, lang);
  const localizedIngredientNames = Array.from(new Set(
    recipe.masterIngredients.map(ingredient => getLocalizedIngredient(ingredient, lang, recipe.id))
  ));

  return (
    <div 
      onClick={() => onSelect(recipe)}
      className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-xl hover:border-amber-400/90 transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden"
    >
      {/* Visual Photography Header */}
      <div className="relative h-48 w-full overflow-hidden bg-stone-100">
        <img
          src={imageUrl}
          alt={localized.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
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
            {recipe.source && (
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
          {recipe.titleEn && (
            <p className="text-xs text-stone-500 font-medium mt-0.5 line-clamp-1" dir="ltr">
              {recipe.titleEn}
            </p>
          )}

          {/* Times & Servings */}
          <div className="flex items-center gap-3 text-xs text-stone-600 mt-3 pt-2.5 border-t border-stone-100">
            {localized.prepTime && (
              <div className="flex items-center gap-1" title={getUIText(lang, 'prepTime')}>
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>{localized.prepTime}</span>
              </div>
            )}
            {localized.cookTime && (
              <div className="flex items-center gap-1" title={getUIText(lang, 'cookTime')}>
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>{localized.cookTime}</span>
              </div>
            )}
            {localized.servings && (
              <div className="flex items-center gap-1" title={getUIText(lang, 'servings')}>
                <Users className="w-3.5 h-3.5 text-stone-400" />
                <span>{localized.servings}</span>
              </div>
            )}
          </div>

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
              {recipe.masterIngredients.length > 3 && (
                <span className="text-[10px] text-stone-400 self-center px-1">
                  +{recipe.masterIngredients.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50 text-[11px]">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span className="font-semibold">{recipe.uniqueInstructions.length} {t('خطوة فريدة', 'steps', 'étapes', 'pasos', 'ステップ', 'चरण', 'passos', 'шагов', '步骤', 'Schritte', 'passaggi', 'βήματα', 'مراحل', 'مرحله', 'adım', 'gav', 'langkah', 'hatua', '단계')}</span>
          </div>

          <span className="font-semibold text-amber-700 group-hover:text-amber-900 flex items-center gap-1">
            <span>{t('عرض الوصفة', 'View Recipe', 'Voir la Recette', 'Ver Receta', 'レシピを見る', 'रेसिपी देखें', 'Ver Receita', 'Смотреть Рецепт', '查看食谱', 'Rezept Ansehen', 'Vedi Ricetta', 'Δείτε τη Συνταγή', 'ترکیب دیکھیں', 'مشاهده دستور', 'Tarifi Gör', 'Reçeteyê Bibîne', 'Lihat Resep', 'Tazama Mapishi', '레시피 보기')}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </span>
        </div>
      </div>
    </div>
  );
};

