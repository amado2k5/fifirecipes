import React, { useState } from 'react';
import { Recipe, SupportedLanguage } from '../types';
import {
  X,
  Layers,
  Sparkles,
  Clock,
  Flame,
  Users,
  HelpCircle,
  Share2,
  BookOpen,
  ScrollText
} from 'lucide-react';
import { getRecipeImage } from '../data/recipeImages';
import { getUIText } from '../data/translations';
import { getLocalizedIngredient, getLocalizedIngredientAmount, getLocalizedInstruction, getLocalizedPhase, getLocalizedRecipe } from '../utils/recipeLocalization';
import { OriginalManuscriptModal, getManuscriptSource } from './OriginalManuscriptModal';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  lang: SupportedLanguage;
  onShareRecipe: (recipe: Recipe) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  lang,
  onShareRecipe
}) => {
  const [activeTab, setActiveTab] = useState<'master' | 'instructions'>('master');
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [showManuscript, setShowManuscript] = useState(false);

  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  const isJa = lang === 'ja';
  const isHi = lang === 'hi';
  const t = (ar: string, en: string, fr: string, es: string, ja: string, hi: string) => (isAr ? ar : isFr ? fr : isEs ? es : isJa ? ja : isHi ? hi : en);

  if (!recipe) return null;

  const imageUrl = getRecipeImage(recipe.id, recipe.imageUrl);
  const localized = getLocalizedRecipe(recipe, lang);
  // The original-manuscript scroll is an Arabic-only archival feature.
  const showManuscriptTrigger = lang === 'ar' && !!getManuscriptSource(recipe);

  const toggleIngredientCheck = (id: string) => {
    setCheckedIngredients(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const manuscriptTrigger = showManuscriptTrigger && (
    <div className="flex justify-center pt-2">
      <button
        onClick={() => setShowManuscript(true)}
        className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold text-[#5c3616] bg-gradient-to-b from-[#f3e3b8] to-[#e3c98a] border border-[#8a5a2b]/50 shadow-sm hover:shadow-md hover:from-[#f7ecc9] hover:to-[#e9d29a] transition-all"
      >
        <ScrollText className="w-4 h-4 text-[#8a5a2b] group-hover:scale-110 transition-transform" />
        <span className="manuscript-heading-font">المخطوطة الأصلية</span>
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh] my-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Visual Hero Header */}
        <div className="relative h-[clamp(120px,32vh,18rem)] w-full overflow-hidden bg-stone-900 shrink-0">
          <img
            src={imageUrl}
            alt={localized.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-black/30" />

          {/* Top Bar Actions */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-600/90 text-white backdrop-blur-xs shadow-xs">
                {localized.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-stone-200 backdrop-blur-xs border border-white/10">
                {localized.cookingMethod}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Share Single Recipe */}
              <button
                onClick={() => onShareRecipe(recipe)}
                className="w-9 h-9 rounded-full bg-white/90 text-stone-800 hover:text-amber-800 hover:bg-white flex items-center justify-center shadow-xs transition-transform active:scale-95"
                title={getUIText(lang, 'shareRecipe')}
              >
                <Share2 className="w-4 h-4" />
              </button>

              {/* Close */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-stone-300 hover:text-white flex items-center justify-center border border-white/10 shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Hero Info */}
          <div className="absolute bottom-2 sm:bottom-4 left-4 right-4 z-10 text-white">
            <div className="space-y-0.5 sm:space-y-1 max-w-2xl">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-xs">
                {localized.title}
              </h2>
              {recipe.titleEn && (
                <p className="[@media(max-height:420px)]:hidden text-xs sm:text-sm text-stone-300 font-medium" dir="ltr">
                  {recipe.titleEn}
                </p>
              )}
            </div>

            {/* Quick Specs Strip */}
            <div className="[@media(max-height:420px)]:hidden flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-2 mt-2 border-t border-white/10">
              {localized.prepTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t(`التحضير: ${localized.prepTime}`, `Prep: ${localized.prepTime}`, `Préparation : ${localized.prepTime}`, `Preparación: ${localized.prepTime}`, `下ごしらえ: ${localized.prepTime}`, `तैयारी: ${localized.prepTime}`)}</span>
                </div>
              )}
              {localized.cookTime && (
                <div className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t(`الطهو: ${localized.cookTime}`, `Cook: ${localized.cookTime}`, `Cuisson : ${localized.cookTime}`, `Cocción: ${localized.cookTime}`, `調理: ${localized.cookTime}`, `पकाना: ${localized.cookTime}`)}</span>
                </div>
              )}
              {localized.servings && (
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{localized.servings}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-stone-200 bg-stone-50 px-4 sm:px-6 overflow-x-auto scrollbar-none shrink-0">
          <button
            onClick={() => setActiveTab('master')}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'master'
                ? 'border-amber-600 text-amber-900 bg-white shadow-2xs font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-600" />
            <span>{getUIText(lang, 'ingredients')}</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-amber-100 text-amber-800 font-bold">
              {recipe.masterIngredients.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('instructions')}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'instructions'
                ? 'border-amber-600 text-amber-900 bg-white shadow-2xs font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{getUIText(lang, 'instructions')}</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-800 font-bold">
              {recipe.uniqueInstructions.length}
            </span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: MASTER INGREDIENTS */}
          {activeTab === 'master' && (
            <div className="space-y-4">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p>
                    {t(
                      'المقادير المعيارية المضبوطة بدقة. يمكنك النقر على المربع لتحديد المكونات الجاهزة أثناء الطهو.',
                      'Exact master measurements reconciled across Dr. Fatma’s notes. Check off ingredients as you prepare.',
                      'Mesures exactes et harmonisées d’après les notes du Dr Fatma. Cochez les ingrédients au fur et à mesure de la préparation.',
                      'Medidas exactas conciliadas a partir de las notas de la Dra. Fatma. Marca los ingredientes a medida que los prepares.',
                      'ファトマ博士のノートをもとにした正確な分量です。準備が済んだ材料はチェックを入れてください。',
                      'डॉ. फातिमा के नोट्स के अनुसार सटीक मानक माप। तैयार होते ही सामग्री को चेक करें।'
                    )}
                  </p>
                </div>
                <button
                  onClick={() => onShareRecipe(recipe)}
                  className="px-3 py-1 text-xs font-semibold text-amber-800 bg-white border border-amber-300 rounded-lg hover:bg-amber-50 shrink-0"
                >
                  {getUIText(lang, 'shareRecipe')}
                </button>
              </div>

              <div className="divide-y divide-stone-100 border border-stone-200/80 rounded-2xl overflow-hidden bg-white">
                {recipe.masterIngredients.map((ing) => {
                  const isChecked = !!checkedIngredients[ing.id];
                  return (
                    <div key={ing.id} className={`p-4 transition-colors ${isChecked ? 'bg-stone-50/60' : 'hover:bg-stone-50/40'}`}>
                      <div className="flex items-center justify-between select-none">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleIngredientCheck(ing.id)}
                            className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-stone-300 cursor-pointer"
                          />
                          <div className={isChecked ? 'line-through opacity-50' : ''}>
                            <span className="font-bold text-stone-900 text-sm sm:text-base">
                              {getLocalizedIngredient(ing, lang, recipe.id)}
                            </span>
                            <span className="mx-2 text-stone-400">—</span>
                            <span className="text-amber-800 font-semibold text-xs sm:text-sm bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                              {getLocalizedIngredientAmount(ing, lang, recipe.id)}
                            </span>
                            {ing.notes && (
                              <span className="text-stone-500 text-xs mr-2 italic">({ing.notes})</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {manuscriptTrigger}
            </div>
          )}

          {/* TAB 2: UNIQUE INSTRUCTIONS */}
          {activeTab === 'instructions' && (
            <div className="space-y-4">
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-xs sm:text-sm text-emerald-900 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">
                      {t('خطوات الطهو الفريدة بعد تنقية وتوحيد الشروح', 'Step-by-step master cooking instructions', 'Instructions de cuisson détaillées, étape par étape', 'Instrucciones de cocina detalladas, paso a paso', 'ステップごとの詳しい調理手順', 'चरण-दर-चरण मुख्य पाक विधि')}
                    </p>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      {t(
                        'مرتبة بالتسلسل الزمني الدقيق للتحضير مع إبراز الطرق البديلة ونكهات فاطمة القاوقجي الخاصة.',
                        'Sequence verified for optimal culinary results.',
                        'Séquence vérifiée pour un résultat culinaire optimal.',
                        'Secuencia verificada para obtener resultados culinarios óptimos.',
                        '最適な仕上がりになるよう手順を確認済みです。',
                        'बेहतरीन पाक परिणाम के लिए क्रम की जांच की गई है।'
                      )}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onShareRecipe(recipe)}
                  className="px-3 py-1 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 shrink-0"
                >
                  {getUIText(lang, 'shareRecipe')}
                </button>
              </div>

              <div className="space-y-3.5">
                {recipe.uniqueInstructions.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-4 rounded-2xl border border-stone-200/80 bg-white hover:border-amber-300 transition-all shadow-2xs"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 bg-stone-900 text-white">
                        {step.stepNumber}
                      </span>
                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                            {getLocalizedPhase(step.phase, lang)}
                          </span>
                        </div>
                        <p className="recipe-reading-copy text-stone-800">
                          {getLocalizedInstruction(recipe.id, step.stepNumber, step.text, lang, step.textEn)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {recipe.culturalNotes && (
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl">
                  <h4 className="font-bold text-xs text-amber-900 mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    <span>{getUIText(lang, 'tips')}</span>
                  </h4>
                  <p className="recipe-reading-copy text-stone-700">
                    {localized.culturalNotes}
                  </p>
                </div>
              )}

              {manuscriptTrigger}
            </div>
          )}
        </div>
      </div>

      {showManuscript && (
        <OriginalManuscriptModal recipe={recipe} onClose={() => setShowManuscript(false)} />
      )}
    </div>
  );
};
