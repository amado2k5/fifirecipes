import React, { useState, useMemo } from 'react';
import { Recipe, MasterIngredient, SupportedLanguage } from '../types';
import { buildGlobalIngredientRegistry, GlobalIngredientSummary } from '../data/recipes';
import {
  Search,
  Layers,
  CheckCircle2,
  BookOpen,
  Filter,
  Flame,
  UtensilsCrossed
} from 'lucide-react';
import { getLocalizedIngredient } from '../utils/recipeLocalization';

interface MasterIngredientsViewProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  lang: SupportedLanguage;
}

const CATEGORY_NAMES: Record<MasterIngredient['category'], { ar: string; en: string; fr: string }> = {
  meat_poultry: { ar: 'لحوم ودواجن', en: 'Meat & Poultry', fr: 'Viandes et Volailles' },
  seafood: { ar: 'أسماك ومأكولات بحرية', en: 'Seafood', fr: 'Fruits de Mer' },
  vegetable: { ar: 'خضروات وأعشاب', en: 'Vegetables & Herbs', fr: 'Légumes et Herbes' },
  dairy_fat: { ar: 'ألبان ودهون', en: 'Dairy & Fats', fr: 'Produits Laitiers et Matières Grasses' },
  grain_starch: { ar: 'حبوب ونشويات', en: 'Grains & Starches', fr: 'Céréales et Féculents' },
  spice_seasoning: { ar: 'توابل وبهارات', en: 'Spices & Seasoning', fr: 'Épices et Assaisonnements' },
  sweet_fruit: { ar: 'سكريات وفواكه', en: 'Sweets & Fruits', fr: 'Sucreries et Fruits' },
  liquid: { ar: 'سوائل ومشروبات', en: 'Liquids & Broths', fr: 'Liquides et Bouillons' },
  other: { ar: 'أخرى', en: 'Other', fr: 'Autres' }
};

export const MasterIngredientsView: React.FC<MasterIngredientsViewProps> = ({
  recipes,
  onSelectRecipe,
  lang
}) => {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const isFr = lang === 'fr';
  const langKey: 'ar' | 'en' | 'fr' = isAr ? 'ar' : isFr ? 'fr' : 'en';
  const t = (ar: string, en: string, fr: string) => (isAr ? ar : isFr ? fr : en);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');


  const registry = useMemo(() => buildGlobalIngredientRegistry(recipes), [recipes]);

  const filteredItems = useMemo(() => {
    return registry.filter(item => {
      const matchesSearch = getLocalizedIngredient(item, lang).toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [registry, searchTerm, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-amber-600" />
              <span>{t('سجل المكونات الموحدة (Master Ingredients Registry)', 'Master Ingredients Registry', 'Registre des Ingrédients Principaux')}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              {t(
                `سجل مفتوح يضم ${registry.length} مكوناً معيارياً مع ربط كل مكون بالوصفات التي تستخدمه.`,
                `An open catalogue of ${registry.length} canonical ingredients linked to the recipes that use them.`,
                `Un catalogue ouvert de ${registry.length} ingrédients principaux, chacun relié aux recettes qui l'utilisent.`
              )}
            </p>
          </div>

          <div className="bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold">
            <span>{t('إجمالي المكونات الموحدة:', 'Total Master Ingredients:', "Total des ingrédients principaux :")}</span>{' '}
            <strong className="text-base text-amber-700">{registry.length}</strong>
          </div>
        </div>

        {/* Filters and search */}
        <div className="mt-5 pt-5 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('ابحث عن مكون (مثل: سمن بلدي، حبهان...)', 'Search ingredient (e.g. Cardamom, Ghee)...', 'Rechercher un ingrédient (ex. cardamome, ghee)...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-3 pr-10 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {t('الكل', 'All', 'Tout')} ({registry.length})
            </button>
            {Object.entries(CATEGORY_NAMES).map(([catKey, label]) => {
              const count = registry.filter(r => r.category === catKey).length;
              if (count === 0) return null;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === catKey
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {label[langKey]} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Master Ingredients */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-xl border border-stone-200/80 p-4 shadow-2xs hover:shadow-sm hover:border-amber-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                  {CATEGORY_NAMES[item.category]?.[langKey] || item.category}
                </span>

                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {t(`${item.recipesCount} وصفات`, `${item.recipesCount} recipes`, `${item.recipesCount} recettes`)}
                </span>
              </div>

              <h3 className="text-base font-bold text-stone-900 mt-2">
                {getLocalizedIngredient(item, lang)}
              </h3>
            </div>

            <div className="mt-3 pt-3 border-t border-stone-100">
              <span className="text-[11px] text-stone-500 font-semibold block mb-1.5">
                {t('الوصفات التي تستخدمه:', 'Used in recipes:', 'Utilisé dans les recettes :')}
              </span>
              <div className="flex flex-wrap gap-1">
                {item.recipeTitles.map(r => {
                  const fullRecipe = recipes.find(rec => rec.id === r.id);
                  return (
                    <button
                      key={r.id}
                      onClick={() => fullRecipe && onSelectRecipe(fullRecipe)}
                      className="inline-flex items-center text-[11px] px-2 py-0.5 rounded bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/60 font-medium transition-colors"
                      title={r.standardAmount ? `الكمية القياسية: ${r.standardAmount}` : undefined}
                    >
                      {getLocalizedIngredient({ name: r.title }, lang)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 text-stone-500">
          <UtensilsCrossed className="w-8 h-8 text-stone-300 mx-auto mb-2" />
          <p className="font-semibold text-sm">{t('لا توجد مكونات مطابقة لبحثك', 'No ingredients match your query', 'Aucun ingrédient ne correspond à votre recherche')}</p>
        </div>
      )}
    </div>
  );
};
