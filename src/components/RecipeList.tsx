import React, { useState, useMemo } from 'react';
import { Recipe, SupportedLanguage } from '../types';
import { RecipeCard } from './RecipeCard';
import {
  Search,
  Filter,
  SlidersHorizontal,
  UtensilsCrossed,
  X,
  Flame,
  Layers,
  Sparkles
} from 'lucide-react';
import { getUIText } from '../data/translations';
import { getLocalizedIngredient, getLocalizedRecipe } from '../utils/recipeLocalization';

interface RecipeListProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  lang: SupportedLanguage;
  onOpenShare: (recipe: Recipe, e: React.MouseEvent) => void;
}

export const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  onSelectRecipe,
  lang,
  onOpenShare
}) => {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  const isJa = lang === 'ja';
  const isHi = lang === 'hi';
  const t = (ar: string, en: string, fr: string, es: string, ja: string, hi: string) => (isAr ? ar : isFr ? fr : isEs ? es : isJa ? ja : isHi ? hi : en);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCookingMethod, setSelectedCookingMethod] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'overlap' | 'title' | 'ingredients' | 'steps'>('overlap');

  // Reset localized filter selections when the display language changes,
  // since category/method labels are language-specific strings.
  React.useEffect(() => {
    setSelectedCategory('all');
    setSelectedCookingMethod('all');
  }, [lang]);

  const baseRecipes = recipes;

  const categories = useMemo(() => {
    return Array.from(new Set(recipes.map(r => getLocalizedRecipe(r, lang).category)));
  }, [recipes, lang]);

  const cookingMethods = useMemo(() => {
    return Array.from(new Set(recipes.map(r => getLocalizedRecipe(r, lang).cookingMethod)));
  }, [recipes, lang]);

  // Filter and Sort
  const filteredRecipes = useMemo(() => {
    return baseRecipes.filter(r => {
      const localized = getLocalizedRecipe(r, lang);
      const normalizedSearch = searchTerm.toLowerCase();
      const matchSearch =
        localized.title.toLowerCase().includes(normalizedSearch) ||
        r.title.toLowerCase().includes(normalizedSearch) ||
        localized.category.toLowerCase().includes(normalizedSearch) ||
        r.category.toLowerCase().includes(normalizedSearch) ||
        r.masterIngredients.some(i => getLocalizedIngredient(i, lang, r.id).toLowerCase().includes(normalizedSearch));

      const matchCategory = selectedCategory === 'all' || localized.category === selectedCategory;
      const matchMethod = selectedCookingMethod === 'all' || getLocalizedRecipe(r, lang).cookingMethod === selectedCookingMethod;

      return matchSearch && matchCategory && matchMethod;
    }).sort((a, b) => {
      if (sortBy === 'overlap') {
        return b.overlapAnalysis.overlapPercentage - a.overlapAnalysis.overlapPercentage;
      }
      if (sortBy === 'title') {
        return getLocalizedRecipe(a, lang).title.localeCompare(getLocalizedRecipe(b, lang).title);
      }
      if (sortBy === 'ingredients') {
        return b.masterIngredients.length - a.masterIngredients.length;
      }
      if (sortBy === 'steps') {
        return b.uniqueInstructions.length - a.uniqueInstructions.length;
      }
      return 0;
    });
  }, [baseRecipes, searchTerm, selectedCategory, selectedCookingMethod, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedCookingMethod('all');
    setSortBy('overlap');
  };

  return (
    <div className="space-y-6">
      {/* Controls Container */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        {/* Search and sorting */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={getUIText(lang, 'searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-stone-500 whitespace-nowrap">
              {t('ترتيب حسب:', 'Sort by:', 'Trier par :', 'Ordenar por:', '並び替え:', 'क्रमबद्ध करें:')}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 text-xs font-medium rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-stone-800"
            >
              <option value="overlap">{t('نسبة التطابق وإزالة التكرار (الأعلى)', 'Highest Overlap %', 'Chevauchement le Plus Élevé (%)', 'Mayor % de Coincidencia', '一致率が高い順', 'सर्वाधिक मिलान %')}</option>
              <option value="title">{t('الاسم أبجدياً (أ-ي)', 'Alphabetical (A-Z)', 'Alphabétique (A-Z)', 'Alfabético (A-Z)', '名前順(あいうえお順)', 'वर्णानुक्रम (अ-ज्ञ)')}</option>
              <option value="ingredients">{t('عدد المقادير المدمجة', 'Most Ingredients', "Le Plus d'Ingrédients", 'Más Ingredientes', '材料が多い順', 'सर्वाधिक सामग्री')}</option>
              <option value="steps">{t('عدد الخطوات الفريدة', 'Most Unique Steps', "Le Plus d'Étapes", 'Más Pasos Únicos', '手順が多い順', 'सर्वाधिक विशिष्ट चरण')}</option>
            </select>
          </div>
        </div>

        {/* Secondary Filters (Cooking Method) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-stone-400 font-medium">{t('طريقة الطهو:', 'Method:', 'Méthode :', 'Método:', '調理法:', 'विधि:')}</span>
          <button
            onClick={() => setSelectedCookingMethod('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              selectedCookingMethod === 'all' ? 'bg-amber-100 text-amber-800' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {t('الكل', 'All', 'Tout', 'Todos', 'すべて', 'सभी')}
          </button>
          {cookingMethods.map(m => (
            <button
              key={m}
              onClick={() => setSelectedCookingMethod(m)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                selectedCookingMethod === m ? 'bg-amber-100 text-amber-800 font-bold' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {m}
            </button>
          ))}

          {(selectedCategory !== 'all' || selectedCookingMethod !== 'all' || searchTerm) && (
            <button
              onClick={resetFilters}
              className="mr-auto text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t('إعادة ضبط الفلاتر', 'Reset filters', 'Réinitialiser les filtres', 'Restablecer filtros', 'フィルターをリセット', 'फ़िल्टर रीसेट करें')}</span>
            </button>
          )}
        </div>

        {/* Secondary Filters (Category) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-stone-400 font-medium">{t('التصنيف:', 'Category:', 'Catégorie :', 'Categoría:', 'カテゴリー:', 'श्रेणी:')}</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              selectedCategory === 'all' ? 'bg-amber-100 text-amber-800' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {t('الكل', 'All', 'Tout', 'Todos', 'すべて', 'सभी')}
          </button>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                selectedCategory === c ? 'bg-amber-100 text-amber-800 font-bold' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Counter indicator */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>
          {t(
            `عرض ${filteredRecipes.length} من أصل ${baseRecipes.length} وصفة`,
            `Showing ${filteredRecipes.length} of ${baseRecipes.length} recipes`,
            `Affichage de ${filteredRecipes.length} sur ${baseRecipes.length} recettes`,
            `Mostrando ${filteredRecipes.length} de ${baseRecipes.length} recetas`,
            `${baseRecipes.length}件中${filteredRecipes.length}件のレシピを表示`,
            `कुल ${baseRecipes.length} में से ${filteredRecipes.length} रेसिपी दिखाई जा रही हैं`
          )}
        </span>
      </div>

      {/* Recipe Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelectRecipe}
              lang={lang}
              onOpenShare={onOpenShare}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center text-stone-500 space-y-3">
          <UtensilsCrossed className="w-10 h-10 text-stone-300 mx-auto" />
          <h4 className="text-base font-bold text-stone-800">
            {t('لا توجد وصفات تطابق خيارات البحث', 'No recipes match your filter criteria', 'Aucune recette ne correspond à vos critères', 'Ninguna receta coincide con tus criterios de búsqueda', '検索条件に一致するレシピが見つかりませんでした', 'आपके खोज मानदंड से मेल खाने वाली कोई रेसिपी नहीं मिली')}
          </h4>
          <p className="text-xs max-w-sm mx-auto text-stone-500">
            {t(
              'جرّب البحث بكلمات أخرى أو إعادة ضبط الفلاتر لاستعراض كامل قاعدة البيانات.',
              'Try changing your search terms or resetting the active filters.',
              'Essayez d’autres termes de recherche ou réinitialisez les filtres actifs.',
              'Prueba con otros términos de búsqueda o restablece los filtros activos.',
              '検索キーワードを変えるか、フィルターをリセットしてお試しください。',
              'दूसरे खोज शब्द आज़माएँ या सक्रिय फ़िल्टर रीसेट करें।'
            )}
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
          >
            {t('إظهار جميع الوصفات', 'Show All Recipes', 'Afficher Toutes les Recettes', 'Mostrar Todas las Recetas', 'すべてのレシピを表示', 'सभी रेसिपी दिखाएँ')}
          </button>
        </div>
      )}
    </div>
  );
};

