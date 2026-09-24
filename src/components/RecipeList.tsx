import React, { useState, useMemo, useEffect, useRef } from 'react';
import { RecipeCollection, RecipeSummary, SupportedLanguage } from '../types';
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
import { getLocalizedRecipe } from '../utils/recipeLocalization';
import { getAdditionalRecipesText } from '../data/additionalRecipesText';
import { loadSearchIndex, prefetchRecipe } from '../services/recipeData';

interface RecipeListProps {
  recipes: RecipeSummary[];
  /** Total recipes in this language, known before every index page has arrived. */
  totalRecipes?: number;
  /** More index pages are still arriving. */
  loading: boolean;
  loadFailed: boolean;
  openingRecipeId: string | null;
  onSelectRecipe: (recipe: RecipeSummary) => void;
  lang: SupportedLanguage;
  onOpenShare: (recipe: RecipeSummary, e: React.MouseEvent) => void;
}

// Cards are rendered in batches: enough to fill a large screen a few times
// over, then another batch each time the visitor nears the end of the list.
const BATCH_SIZE = 24;

export const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  totalRecipes,
  loading,
  loadFailed,
  openingRecipeId,
  onSelectRecipe,
  lang,
  onOpenShare
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

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCookingMethod, setSelectedCookingMethod] = useState<string>('all');
  const [collection, setCollection] = useState<'all' | RecipeCollection>('all');
  const additionalText = getAdditionalRecipesText(lang);
  const [sortBy, setSortBy] = useState<'overlap' | 'title' | 'ingredients' | 'steps'>('overlap');

  // Reset localized filter selections when the display language changes,
  // since category/method labels are language-specific strings.
  React.useEffect(() => {
    setSelectedCategory('all');
    setSelectedCookingMethod('all');
  }, [lang]);

  const baseRecipes = recipes;
  const totalCount = Math.max(totalRecipes ?? 0, baseRecipes.length);

  // Ingredient-level search uses a per-language search index fetched the first
  // time the visitor types; until it arrives, titles and categories still match.
  const [searchIndex, setSearchIndex] = useState<Record<string, string> | null>(null);
  useEffect(() => {
    setSearchIndex(null);
    if (!searchTerm) return;
    let cancelled = false;
    loadSearchIndex(lang).then(index => !cancelled && setSearchIndex(index)).catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [lang, searchTerm !== '']);

  const categories = useMemo(() => {
    return Array.from(new Set(recipes.map(r => getLocalizedRecipe(r, lang).category)));
  }, [recipes, lang]);

  const cookingMethods = useMemo(() => {
    return Array.from(new Set(recipes.map(r => getLocalizedRecipe(r, lang).cookingMethod)));
  }, [recipes, lang]);

  // Filter and Sort
  const filteredRecipes = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return baseRecipes.filter(r => {
      const localized = getLocalizedRecipe(r, lang);
      const matchSearch =
        !normalizedSearch ||
        searchIndex?.[r.id]?.includes(normalizedSearch) ||
        localized.title.toLowerCase().includes(normalizedSearch) ||
        r.title.toLowerCase().includes(normalizedSearch) ||
        localized.category.toLowerCase().includes(normalizedSearch) ||
        r.category.toLowerCase().includes(normalizedSearch);

      const matchCategory = selectedCategory === 'all' || localized.category === selectedCategory;
      const matchMethod = selectedCookingMethod === 'all' || localized.cookingMethod === selectedCookingMethod;
      const matchCollection = collection === 'all' || r.collection === collection;

      return matchSearch && matchCategory && matchMethod && matchCollection;
    }).sort((a, b) => {
      if (sortBy === 'overlap') {
        return b.overlapPercentage - a.overlapPercentage;
      }
      if (sortBy === 'title') {
        return getLocalizedRecipe(a, lang).title.localeCompare(getLocalizedRecipe(b, lang).title);
      }
      if (sortBy === 'ingredients') {
        return b.ingredientCount - a.ingredientCount;
      }
      if (sortBy === 'steps') {
        return b.stepCount - a.stepCount;
      }
      return 0;
    });
  }, [baseRecipes, searchTerm, searchIndex, selectedCategory, selectedCookingMethod, collection, sortBy, lang]);

  // Progressive rendering: start with one batch, add another whenever the
  // sentinel below the grid comes within ~1.5 screens of the viewport.
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [searchTerm, selectedCategory, selectedCookingMethod, collection, sortBy, lang]);

  const hasMore = visibleCount < filteredRecipes.length;
  const sentinelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setVisibleCount(count => count + BATCH_SIZE);
        }
      },
      { rootMargin: '150% 0px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, filteredRecipes]);

  const visibleRecipes = filteredRecipes.slice(0, visibleCount);
  // The cookbook collections are only offered in languages that list their recipes.
  const presentCollections = useMemo(() => new Set(baseRecipes.map(r => r.collection)), [baseRecipes]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedCookingMethod('all');
    setCollection('all');
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
              {t('ترتيب حسب:', 'Sort by:', 'Trier par :', 'Ordenar por:', '並び替え:', 'क्रमबद्ध करें:', 'Ordenar por:', 'Сортировать по:', '排序方式：', 'Sortieren nach:', 'Ordina per:', 'Ταξινόμηση κατά:', 'ترتیب:', 'مرتب‌سازی:', 'Sırala:', 'Rêz bike:', 'Urutkan:', 'Panga kwa:', '정렬:')}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 text-xs font-medium rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-stone-800"
            >
              <option value="overlap">{t('نسبة التطابق وإزالة التكرار (الأعلى)', 'Highest Overlap %', 'Chevauchement le Plus Élevé (%)', 'Mayor % de Coincidencia', '一致率が高い順', 'सर्वाधिक मिलान %', 'Maior % de Coincidência', 'Наибольшее % совпадения', '重合度最高（%）', 'Höchste Übereinstimmung (%)', 'Sovrapposizione più alta (%)', 'Υψηλότερο Ποσοστό Επικάλυψης (%)', 'سب سے زیادہ مماثلت %', 'بیشترین درصد همپوشانی', 'En Yüksek Örtüşme %', 'Rêjeya Hevgirtinê ya Herî Bilind %', 'Kecocokan Tertinggi %', 'Ulinganifu wa Juu Zaidi %', '일치도 높은 순 %')}</option>
              <option value="title">{t('الاسم أبجدياً (أ-ي)', 'Alphabetical (A-Z)', 'Alphabétique (A-Z)', 'Alfabético (A-Z)', '名前順(あいうえお順)', 'वर्णानुक्रम (अ-ज्ञ)', 'Alfabético (A-Z)', 'По алфавиту (А-Я)', '按字母顺序（A-Z）', 'Alphabetisch (A-Z)', 'Alfabetico (A-Z)', 'Αλφαβητικά (Α-Ω)', 'حروفِ تہجی کے لحاظ سے (A-Z)', 'الفبایی (A-Z)', 'Alfabetik (A-Z)', 'Alfabetîk (A-Z)', 'Alfabetis (A-Z)', 'Kialfabeti (A-Z)', '가나다순 (A-Z)')}</option>
              <option value="ingredients">{t('عدد المقادير المدمجة', 'Most Ingredients', "Le Plus d'Ingrédients", 'Más Ingredientes', '材料が多い順', 'सर्वाधिक सामग्री', 'Mais Ingredientes', 'Больше всего ингредиентов', '食材最多', 'Meiste Zutaten', 'Più Ingredienti', 'Περισσότερα Υλικά', 'سب سے زیادہ اجزاء', 'بیشترین مواد اولیه', 'En Çok Malzeme', 'Herî Zêde Pêkhate', 'Bahan Terbanyak', 'Viungo Vingi Zaidi', '재료 많은 순')}</option>
              <option value="steps">{t('عدد الخطوات الفريدة', 'Most Unique Steps', "Le Plus d'Étapes", 'Más Pasos Únicos', '手順が多い順', 'सर्वाधिक विशिष्ट चरण', 'Mais Passos Únicos', 'Больше всего уникальных шагов', '独特步骤最多', 'Meiste einzigartige Schritte', 'Più Passaggi Unici', 'Περισσότερα Μοναδικά Βήματα', 'سب سے زیادہ منفرد مراحل', 'بیشترین مراحل منحصربه‌فرد', 'En Çok Özgün Adım', 'Herî Zêde Gavên Resen', 'Langkah Orisinal Terbanyak', 'Hatua Asilia Nyingi Zaidi', '원본 단계 많은 순')}</option>
            </select>
          </div>
        </div>

        {/* Secondary Filters (Cooking Method) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-stone-400 font-medium">{t('طريقة الطهو:', 'Method:', 'Méthode :', 'Método:', '調理法:', 'विधि:', 'Método:', 'Метод:', '方法：', 'Methode:', 'Metodo:', 'Μέθοδος:', 'طریقہ:', 'روش:', 'Yöntem:', 'Rêbaz:', 'Metode:', 'Njia:', '조리법:')}</span>
          <button
            onClick={() => setSelectedCookingMethod('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              selectedCookingMethod === 'all' ? 'bg-amber-100 text-amber-800' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {t('الكل', 'All', 'Tout', 'Todos', 'すべて', 'सभी', 'Todos', 'Все', '全部', 'Alle', 'Tutti', 'Όλα', 'سب', 'همه', 'Tümü', 'Hemû', 'Semua', 'Zote', '전체')}
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

          {(selectedCategory !== 'all' || selectedCookingMethod !== 'all' || collection !== 'all' || searchTerm) && (
            <button
              onClick={resetFilters}
              className="mr-auto text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t('إعادة ضبط الفلاتر', 'Reset filters', 'Réinitialiser les filtres', 'Restablecer filtros', 'フィルターをリセット', 'फ़िल्टर रीसेट करें', 'Redefinir filtros', 'Сбросить фильтры', '重置筛选', 'Filter zurücksetzen', 'Reimposta filtri', 'Επαναφορά φίλτρων', 'فلٹر ختم کریں', 'پاک کردن فیلترها', 'Filtreleri sıfırla', 'Parzûnan ji nû ve saz bike', 'Atur ulang filter', 'Weka upya vichujio', '필터 초기화')}</span>
            </button>
          )}
        </div>

        {/* Collection: Dr. Fatma's archive vs. the additional (credited) recipes */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          {([
            ['all', additionalText.collectionAll],
            ['archive', additionalText.collectionArchive],
            ['chefteta', additionalText.collectionAdditional],
            ...(presentCollections.has('osool') ? [['osool', additionalText.collectionOsool] as const] : []),
            ...(presentCollections.has('abdennour') ? [['abdennour', additionalText.collectionAbdennour] as const] : [])
          ] as const).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setCollection(value)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                collection === value ? 'bg-sky-100 text-sky-900 font-bold' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Secondary Filters (Category) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-stone-400 font-medium">{t('التصنيف:', 'Category:', 'Catégorie :', 'Categoría:', 'カテゴリー:', 'श्रेणी:', 'Categoria:', 'Категория:', '分类：', 'Kategorie:', 'Categoria:', 'Κατηγορία:', 'زمرہ:', 'دسته:', 'Kategori:', 'Kategorî:', 'Kategori:', 'Kategoria:', '분류:')}</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              selectedCategory === 'all' ? 'bg-amber-100 text-amber-800' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {t('الكل', 'All', 'Tout', 'Todos', 'すべて', 'सभी', 'Todos', 'Все', '全部', 'Alle', 'Tutti', 'Όλα', 'سب', 'همه', 'Tümü', 'Hemû', 'Semua', 'Zote', '전체')}
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
            `عرض ${filteredRecipes.length} من أصل ${totalCount} وصفة`,
            `Showing ${filteredRecipes.length} of ${totalCount} recipes`,
            `Affichage de ${filteredRecipes.length} sur ${totalCount} recettes`,
            `Mostrando ${filteredRecipes.length} de ${totalCount} recetas`,
            `${totalCount}件中${filteredRecipes.length}件のレシピを表示`,
            `कुल ${totalCount} में से ${filteredRecipes.length} रेसिपी दिखाई जा रही हैं`,
            `Mostrando ${filteredRecipes.length} de ${totalCount} receitas`,
            `Показано ${filteredRecipes.length} из ${totalCount} рецептов`,
            `显示 ${filteredRecipes.length} / ${totalCount} 个食谱`,
            `Zeigt ${filteredRecipes.length} von ${totalCount} Rezepten`,
            `Visualizzazione di ${filteredRecipes.length} su ${totalCount} ricette`,
            `Εμφάνιση ${filteredRecipes.length} από ${totalCount} συνταγές`,
            `${totalCount} میں سے ${filteredRecipes.length} ترکیبیں دکھائی جا رہی ہیں`,
            `نمایش ${filteredRecipes.length} از ${totalCount} دستور`,
            `${totalCount} tariften ${filteredRecipes.length} tanesi gösteriliyor`,
            `${filteredRecipes.length} ji ${totalCount} reçeteyan têne nîşandan`,
            `Menampilkan ${filteredRecipes.length} dari ${totalCount} resep`,
            `Inaonyesha mapishi ${filteredRecipes.length} kati ya ${totalCount}`,
            `레시피 ${totalCount}개 중 ${filteredRecipes.length}개 표시`
          )}
        </span>
      </div>

      {/* Recipe Grid */}
      {filteredRecipes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={onSelectRecipe}
                onPrefetch={prefetchRecipe}
                isOpening={openingRecipeId === recipe.id}
                lang={lang}
                onOpenShare={onOpenShare}
              />
            ))}
          </div>

          <div ref={sentinelRef} className="flex flex-col items-center gap-2 py-4 text-xs text-stone-500" aria-live="polite">
            {hasMore ? (
              // Also a plain button, for keyboard users and browsers without IntersectionObserver.
              <button
                onClick={() => setVisibleCount(count => count + BATCH_SIZE)}
                className="px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
              >
                {getUIText(lang, 'showMoreRecipes')}
              </button>
            ) : loading ? (
              <span className="animate-pulse">{getUIText(lang, 'loadingMoreRecipes')}</span>
            ) : null}
          </div>
        </>
      ) : loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" aria-busy="true" aria-label={getUIText(lang, 'loadingMoreRecipes')}>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="h-[26rem] rounded-2xl border border-stone-200 bg-white animate-pulse" />
          ))}
        </div>
      ) : loadFailed ? (
        <div className="bg-white rounded-2xl border border-rose-200 p-12 text-center text-rose-800 text-sm font-semibold">
          {getUIText(lang, 'recipesLoadFailed')}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center text-stone-500 space-y-3">
          <UtensilsCrossed className="w-10 h-10 text-stone-300 mx-auto" />
          <h4 className="text-base font-bold text-stone-800">
            {t('لا توجد وصفات تطابق خيارات البحث', 'No recipes match your filter criteria', 'Aucune recette ne correspond à vos critères', 'Ninguna receta coincide con tus criterios de búsqueda', '検索条件に一致するレシピが見つかりませんでした', 'आपके खोज मानदंड से मेल खाने वाली कोई रेसिपी नहीं मिली', 'Nenhuma receita corresponde aos critérios de busca', 'Нет рецептов, соответствующих условиям поиска', '没有符合筛选条件的食谱', 'Keine Rezepte entsprechen Ihren Suchkriterien', 'Nessuna ricetta corrisponde ai criteri di ricerca', 'Καμία συνταγή δεν ταιριάζει με τα κριτήρια αναζήτησής σας', 'آپ کے فلٹر سے کوئی ترکیب نہیں ملی', 'هیچ دستوری با فیلترهای شما مطابقت ندارد', 'Filtrelerinizle eşleşen tarif yok', 'Tu reçete li gorî parzûnên te nehat dîtin', 'Tidak ada resep yang cocok dengan filter Anda', 'Hakuna mapishi yanayolingana na vichujio vyako', '필터와 일치하는 레시피가 없습니다')}
          </h4>
          <p className="text-xs max-w-sm mx-auto text-stone-500">
            {t(
              'جرّب البحث بكلمات أخرى أو إعادة ضبط الفلاتر لاستعراض كامل قاعدة البيانات.',
              'Try changing your search terms or resetting the active filters.',
              'Essayez d’autres termes de recherche ou réinitialisez les filtres actifs.',
              'Prueba con otros términos de búsqueda o restablece los filtros activos.',
              '検索キーワードを変えるか、フィルターをリセットしてお試しください。',
              'दूसरे खोज शब्द आज़माएँ या सक्रिय फ़िल्टर रीसेट करें।',
              'Tente alterar os termos de busca ou redefinir os filtros ativos.',
              'Попробуйте изменить поисковый запрос или сбросить активные фильтры.',
              '请尝试更换搜索关键词，或重置当前筛选条件。',
              'Versuchen Sie andere Suchbegriffe oder setzen Sie die aktiven Filter zurück.',
              'Prova a modificare i termini di ricerca o a reimpostare i filtri attivi.',
              'Δοκιμάστε άλλους όρους αναζήτησης ή επαναφέρετε τα ενεργά φίλτρα.',
              'تلاش کے الفاظ بدل کر دیکھیں یا فعال فلٹر ختم کریں۔',
              'عبارت جستجو را تغییر دهید یا فیلترهای فعال را پاک کنید.',
              'Arama terimlerinizi değiştirin veya etkin filtreleri sıfırlayın.',
              'Peyvên lêgerînê biguherîne an jî parzûnên çalak ji nû ve saz bike.',
              'Ubah kata pencarian atau atur ulang filter yang aktif.',
              'Badilisha maneno ya utafutaji au weka upya vichujio vilivyowashwa.',
              '검색어를 바꾸거나 적용된 필터를 초기화해 보세요.'
            )}
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
          >
            {t('إظهار جميع الوصفات', 'Show All Recipes', 'Afficher Toutes les Recettes', 'Mostrar Todas las Recetas', 'すべてのレシピを表示', 'सभी रेसिपी दिखाएँ', 'Mostrar Todas as Receitas', 'Показать Все Рецепты', '显示所有食谱', 'Alle Rezepte Anzeigen', 'Mostra Tutte le Ricette', 'Εμφάνιση Όλων των Συνταγών', 'تمام ترکیبیں دکھائیں', 'نمایش همه دستورها', 'Tüm Tarifleri Göster', 'Hemû Reçeteyan Nîşan Bide', 'Tampilkan Semua Resep', 'Onyesha Mapishi Yote', '모든 레시피 보기')}
          </button>
        </div>
      )}
    </div>
  );
};

