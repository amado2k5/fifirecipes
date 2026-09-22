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
import { getLocalizedIngredient, getLocalizedRecipe } from '../utils/recipeLocalization';

interface MasterIngredientsViewProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  lang: SupportedLanguage;
}

const CATEGORY_NAMES: Record<MasterIngredient['category'], { ar: string; en: string; fr: string; es: string; ja: string; hi: string }> = {
  meat_poultry: { ar: 'لحوم ودواجن', en: 'Meat & Poultry', fr: 'Viandes et Volailles', es: 'Carnes y Aves', ja: '肉と鶏肉', hi: 'मांस और मुर्ग़' },
  seafood: { ar: 'أسماك ومأكولات بحرية', en: 'Seafood', fr: 'Fruits de Mer', es: 'Mariscos', ja: '魚介類', hi: 'समुद्री भोजन' },
  vegetable: { ar: 'خضروات وأعشاب', en: 'Vegetables & Herbs', fr: 'Légumes et Herbes', es: 'Verduras y Hierbas', ja: '野菜とハーブ', hi: 'सब्ज़ियां और जड़ी-बूटियां' },
  dairy_fat: { ar: 'ألبان ودهون', en: 'Dairy & Fats', fr: 'Produits Laitiers et Matières Grasses', es: 'Lácteos y Grasas', ja: '乳製品と油脂', hi: 'डेयरी और वसा' },
  grain_starch: { ar: 'حبوب ونشويات', en: 'Grains & Starches', fr: 'Céréales et Féculents', es: 'Granos y Féculas', ja: '穀物と主食', hi: 'अनाज और स्टार्च' },
  spice_seasoning: { ar: 'توابل وبهارات', en: 'Spices & Seasoning', fr: 'Épices et Assaisonnements', es: 'Especias y Condimentos', ja: 'スパイスと調味料', hi: 'मसाले और सीज़निंग' },
  sweet_fruit: { ar: 'سكريات وفواكه', en: 'Sweets & Fruits', fr: 'Sucreries et Fruits', es: 'Dulces y Frutas', ja: '甘味料と果物', hi: 'मिठास और फल' },
  liquid: { ar: 'سوائل ومشروبات', en: 'Liquids & Broths', fr: 'Liquides et Bouillons', es: 'Líquidos y Caldos', ja: '液体とだし', hi: 'तरल और शोरबा' },
  other: { ar: 'أخرى', en: 'Other', fr: 'Autres', es: 'Otros', ja: 'その他', hi: 'अन्य' }
};

export const MasterIngredientsView: React.FC<MasterIngredientsViewProps> = ({
  recipes,
  onSelectRecipe,
  lang
}) => {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  const isJa = lang === 'ja';
  const isHi = lang === 'hi';
  const langKey: 'ar' | 'en' | 'fr' | 'es' | 'ja' | 'hi' = isAr ? 'ar' : isFr ? 'fr' : isEs ? 'es' : isJa ? 'ja' : isHi ? 'hi' : 'en';
  const t = (ar: string, en: string, fr: string, es: string, ja: string, hi: string) => (isAr ? ar : isFr ? fr : isEs ? es : isJa ? ja : isHi ? hi : en);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');


  const registry = useMemo(() => buildGlobalIngredientRegistry(recipes), [recipes]);

  const filteredItems = useMemo(() => {
    return registry.filter(item => {
      const matchesSearch = getLocalizedIngredient(item, lang, item.sourceRecipeId).toLowerCase().includes(searchTerm.toLowerCase());
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
              <span>{t('سجل المكونات الموحدة (Master Ingredients Registry)', 'Master Ingredients Registry', 'Registre des Ingrédients Principaux', 'Registro de Ingredientes Principales', '食材一覧', 'मुख्य सामग्री रजिस्ट्री')}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              {t(
                `سجل مفتوح يضم ${registry.length} مكوناً معيارياً مع ربط كل مكون بالوصفات التي تستخدمه.`,
                `An open catalogue of ${registry.length} canonical ingredients linked to the recipes that use them.`,
                `Un catalogue ouvert de ${registry.length} ingrédients principaux, chacun relié aux recettes qui l'utilisent.`,
                `Un catálogo abierto de ${registry.length} ingredientes principales, cada uno vinculado a las recetas que lo utilizan.`,
                `${registry.length}種類の主要食材を、それぞれ使用しているレシピとともに紹介する公開カタログです。`,
                `${registry.length} मानक सामग्रियों की एक खुली सूची, जिसमें हर सामग्री को उसका उपयोग करने वाले व्यंजनों से जोड़ा गया है।`
              )}
            </p>
          </div>

          <div className="bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold">
            <span>{t('إجمالي المكونات الموحدة:', 'Total Master Ingredients:', "Total des ingrédients principaux :", 'Total de Ingredientes Principales:', '主要食材の合計数:', 'कुल मुख्य सामग्रियां:')}</span>{' '}
            <strong className="text-base text-amber-700">{registry.length}</strong>
          </div>
        </div>

        {/* Filters and search */}
        <div className="mt-5 pt-5 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('ابحث عن مكون (مثل: سمن بلدي، حبهان...)', 'Search ingredient (e.g. Cardamom, Ghee)...', 'Rechercher un ingrédient (ex. cardamome, ghee)...', 'Buscar ingrediente (ej. cardamomo, ghee)...', '食材を検索(例:カルダモン、ギー)...', 'सामग्री खोजें (जैसे: इलायची, घी...)')}
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
              {t('الكل', 'All', 'Tout', 'Todos', 'すべて', 'सभी')} ({registry.length})
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
                  {t(`${item.recipesCount} وصفات`, `${item.recipesCount} recipes`, `${item.recipesCount} recettes`, `${item.recipesCount} recetas`, `${item.recipesCount}件のレシピ`, `${item.recipesCount} व्यंजन`)}
                </span>
              </div>

              <h3 className="text-base font-bold text-stone-900 mt-2">
                {getLocalizedIngredient(item, lang, item.sourceRecipeId)}
              </h3>
            </div>

            <div className="mt-3 pt-3 border-t border-stone-100">
              <span className="text-[11px] text-stone-500 font-semibold block mb-1.5">
                {t('الوصفات التي تستخدمه:', 'Used in recipes:', 'Utilisé dans les recettes :', 'Usado en las recetas:', '使用しているレシピ:', 'जिन व्यंजनों में उपयोग होता है:')}
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
                      {fullRecipe ? getLocalizedRecipe(fullRecipe, lang).title : r.title}
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
          <p className="font-semibold text-sm">{t('لا توجد مكونات مطابقة لبحثك', 'No ingredients match your query', 'Aucun ingrédient ne correspond à votre recherche', 'Ningún ingrediente coincide con tu búsqueda', '検索条件に一致する食材が見つかりませんでした', 'आपकी खोज से मेल खाने वाली कोई सामग्री नहीं मिली')}</p>
        </div>
      )}
    </div>
  );
};
