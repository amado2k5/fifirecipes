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
        r.masterIngredients.some(i => getLocalizedIngredient(i, lang).toLowerCase().includes(normalizedSearch));

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
              {isAr ? 'ترتيب حسب:' : 'Sort by:'}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 text-xs font-medium rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-stone-800"
            >
              <option value="overlap">{isAr ? 'نسبة التطابق وإزالة التكرار (الأعلى)' : 'Highest Overlap %'}</option>
              <option value="title">{isAr ? 'الاسم أبجدياً (أ-ي)' : 'Alphabetical (A-Z)'}</option>
              <option value="ingredients">{isAr ? 'عدد المقادير المدمجة' : 'Most Ingredients'}</option>
              <option value="steps">{isAr ? 'عدد الخطوات الفريدة' : 'Most Unique Steps'}</option>
            </select>
          </div>
        </div>

        {/* Secondary Filters (Cooking Method) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-stone-400 font-medium">{isAr ? 'طريقة الطهو:' : 'Method:'}</span>
          <button
            onClick={() => setSelectedCookingMethod('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              selectedCookingMethod === 'all' ? 'bg-amber-100 text-amber-800' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {isAr ? 'الكل' : 'All'}
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
              <span>{isAr ? 'إعادة ضبط الفلاتر' : 'Reset filters'}</span>
            </button>
          )}
        </div>

        {/* Secondary Filters (Category) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-stone-400 font-medium">{isAr ? 'التصنيف:' : 'Category:'}</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              selectedCategory === 'all' ? 'bg-amber-100 text-amber-800' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {isAr ? 'الكل' : 'All'}
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
          {isAr
            ? `عرض ${filteredRecipes.length} من أصل ${baseRecipes.length} وصفة`
            : `Showing ${filteredRecipes.length} of ${baseRecipes.length} recipes`}
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
            {isAr ? 'لا توجد وصفات تطابق خيارات البحث' : 'No recipes match your filter criteria'}
          </h4>
          <p className="text-xs max-w-sm mx-auto text-stone-500">
            {isAr ? 'جرّب البحث بكلمات أخرى أو إعادة ضبط الفلاتر لاستعراض كامل قاعدة البيانات.' : 'Try changing your search terms or resetting the active filters.'}
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
          >
            {isAr ? 'إظهار جميع الوصفات' : 'Show All Recipes'}
          </button>
        </div>
      )}
    </div>
  );
};

