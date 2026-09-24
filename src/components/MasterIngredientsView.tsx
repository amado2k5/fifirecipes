import React, { useState, useMemo, useEffect } from 'react';
import { RecipeSummary, MasterIngredient, SupportedLanguage } from '../types';
import { IngredientRegistryItem, loadIngredientRegistry } from '../services/recipeData';
import {
  Search,
  Layers,
  CheckCircle2,
  BookOpen,
  Filter,
  Flame,
  UtensilsCrossed
} from 'lucide-react';
import { getLocalizedRecipe } from '../utils/recipeLocalization';
import { getUIText } from '../data/translations';

interface MasterIngredientsViewProps {
  recipes: RecipeSummary[];
  onSelectRecipe: (recipeId: string) => void;
  lang: SupportedLanguage;
}

const CATEGORY_NAMES: Record<MasterIngredient['category'], { ar: string; en: string; fr: string; es: string; ja: string; hi: string; pt: string; ru: string; zh: string; de: string; it: string; el: string; ur: string; fa: string; tr: string; ku: string; id: string; sw: string; ko: string }> = {
  meat_poultry: { ar: 'لحوم ودواجن', en: 'Meat & Poultry', fr: 'Viandes et Volailles', es: 'Carnes y Aves', ja: '肉と鶏肉', hi: 'मांस और मुर्ग़', pt: 'Carnes e Aves', ru: 'Мясо и Птица', zh: '肉类与禽类', de: 'Fleisch & Geflügel', it: 'Carne e Pollame', el: 'Κρέας & Πουλερικά', ur: 'گوشت اور مرغی', fa: 'گوشت و مرغ', tr: 'Et ve Tavuk', ku: 'Goşt û Mirîşk', id: 'Daging & Unggas', sw: 'Nyama na Kuku', ko: '육류 및 가금류' },
  seafood: { ar: 'أسماك ومأكولات بحرية', en: 'Seafood', fr: 'Fruits de Mer', es: 'Mariscos', ja: '魚介類', hi: 'समुद्री भोजन', pt: 'Frutos do Mar', ru: 'Морепродукты', zh: '海鲜', de: 'Meeresfrüchte', it: 'Frutti di Mare', el: 'Θαλασσινά', ur: 'سمندری غذا', fa: 'غذاهای دریایی', tr: 'Deniz Ürünleri', ku: 'Berhemên Deryayê', id: 'Hidangan Laut', sw: 'Vyakula vya Baharini', ko: '해산물' },
  vegetable: { ar: 'خضروات وأعشاب', en: 'Vegetables & Herbs', fr: 'Légumes et Herbes', es: 'Verduras y Hierbas', ja: '野菜とハーブ', hi: 'सब्ज़ियां और जड़ी-बूटियां', pt: 'Vegetais e Ervas', ru: 'Овощи и Травы', zh: '蔬菜与香草', de: 'Gemüse & Kräuter', it: 'Verdure ed Erbe', el: 'Λαχανικά & Βότανα', ur: 'سبزیاں اور جڑی بوٹیاں', fa: 'سبزیجات و گیاهان معطر', tr: 'Sebzeler ve Otlar', ku: 'Sebze û Giya', id: 'Sayuran & Rempah Daun', sw: 'Mboga na Mitishamba', ko: '채소 및 허브' },
  dairy_fat: { ar: 'ألبان ودهون', en: 'Dairy & Fats', fr: 'Produits Laitiers et Matières Grasses', es: 'Lácteos y Grasas', ja: '乳製品と油脂', hi: 'डेयरी और वसा', pt: 'Laticínios e Gorduras', ru: 'Молочные продукты и Жиры', zh: '乳制品与油脂', de: 'Milchprodukte & Fette', it: 'Latticini e Grassi', el: 'Γαλακτοκομικά & Λιπαρά', ur: 'دودھ کی مصنوعات اور چکنائی', fa: 'لبنیات و چربی‌ها', tr: 'Süt Ürünleri ve Yağlar', ku: 'Berhemên Şîr û Rûn', id: 'Produk Susu & Lemak', sw: 'Maziwa na Mafuta', ko: '유제품 및 유지류' },
  grain_starch: { ar: 'حبوب ونشويات', en: 'Grains & Starches', fr: 'Céréales et Féculents', es: 'Granos y Féculas', ja: '穀物と主食', hi: 'अनाज और स्टार्च', pt: 'Grãos e Amidos', ru: 'Крупы и Крахмалистые продукты', zh: '谷物与主食', de: 'Getreide & Sättigungsbeilagen', it: 'Cereali e Amidi', el: 'Δημητριακά & Αμυλούχα', ur: 'اناج اور نشاستہ', fa: 'غلات و نشاسته‌ها', tr: 'Tahıllar ve Nişastalılar', ku: 'Dexl û Xwarinên Nîşasteyî', id: 'Biji-bijian & Tepung', sw: 'Nafaka na Wanga', ko: '곡물 및 전분' },
  spice_seasoning: { ar: 'توابل وبهارات', en: 'Spices & Seasoning', fr: 'Épices et Assaisonnements', es: 'Especias y Condimentos', ja: 'スパイスと調味料', hi: 'मसाले और सीज़निंग', pt: 'Especiarias e Temperos', ru: 'Специи и Приправы', zh: '香料与调味料', de: 'Gewürze & Würzmittel', it: 'Spezie e Condimenti', el: 'Μπαχαρικά & Καρυκεύματα', ur: 'مصالحے اور ذائقے', fa: 'ادویه و چاشنی‌ها', tr: 'Baharatlar ve Çeşniler', ku: 'Biharat û Tamdêr', id: 'Bumbu & Rempah', sw: 'Viungo na Vikolezo', ko: '향신료 및 양념' },
  sweet_fruit: { ar: 'سكريات وفواكه', en: 'Sweets & Fruits', fr: 'Sucreries et Fruits', es: 'Dulces y Frutas', ja: '甘味料と果物', hi: 'मिठास और फल', pt: 'Doces e Frutas', ru: 'Сладости и Фрукты', zh: '糖类与水果', de: 'Süßes & Obst', it: 'Dolci e Frutta', el: 'Γλυκά & Φρούτα', ur: 'مٹھاس اور پھل', fa: 'شیرینی‌ها و میوه‌ها', tr: 'Tatlandırıcılar ve Meyveler', ku: 'Şêrînker û Fêkî', id: 'Pemanis & Buah', sw: 'Vitamu na Matunda', ko: '단맛 재료 및 과일' },
  liquid: { ar: 'سوائل ومشروبات', en: 'Liquids & Broths', fr: 'Liquides et Bouillons', es: 'Líquidos y Caldos', ja: '液体とだし', hi: 'तरल और शोरबा', pt: 'Líquidos e Caldos', ru: 'Жидкости и Бульоны', zh: '汤汁与高汤', de: 'Flüssigkeiten & Brühen', it: 'Liquidi e Brodi', el: 'Υγρά & Ζωμοί', ur: 'مائعات اور یخنی', fa: 'مایعات و آب‌گوشت', tr: 'Sıvılar ve Et Suları', ku: 'Şilav û Avgoşt', id: 'Cairan & Kaldu', sw: 'Vimiminika na Supu', ko: '액체 및 육수' },
  other: { ar: 'أخرى', en: 'Other', fr: 'Autres', es: 'Otros', ja: 'その他', hi: 'अन्य', pt: 'Outros', ru: 'Прочее', zh: '其他', de: 'Sonstiges', it: 'Altro', el: 'Άλλα', ur: 'دیگر', fa: 'سایر', tr: 'Diğer', ku: 'Yên Din', id: 'Lainnya', sw: 'Vinginevyo', ko: '기타' }
};

export const MasterIngredientsView: React.FC<MasterIngredientsViewProps> = ({
  recipes,
  onSelectRecipe,
  lang
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
  const langKey: 'ar' | 'en' | 'fr' | 'es' | 'ja' | 'hi' | 'pt' | 'ru' | 'zh' | 'de' | 'it' | 'el' | 'ur' | 'fa' | 'tr' | 'ku' | 'id' | 'sw' | 'ko' = isAr ? 'ar' : isFr ? 'fr' : isEs ? 'es' : isJa ? 'ja' : isHi ? 'hi' : isPt ? 'pt' : isRu ? 'ru' : isZh ? 'zh' : isDe ? 'de' : isIt ? 'it' : isEl ? 'el' : isUr ? 'ur' : isFa ? 'fa' : isTr ? 'tr' : isKu ? 'ku' : isId ? 'id' : isSw ? 'sw' : isKo ? 'ko' : 'en';
  const t = (ar: string, en: string, fr: string, es: string, ja: string, hi: string, pt: string, ru: string, zh: string, de: string, it: string, el: string, ur: string, fa: string, tr: string, ku: string, id: string, sw: string, ko: string) => (isAr ? ar : isFr ? fr : isEs ? es : isJa ? ja : isHi ? hi : isPt ? pt : isRu ? ru : isZh ? zh : isDe ? de : isIt ? it : isEl ? el : isUr ? ur : isFa ? fa : isTr ? tr : isKu ? ku : isId ? id : isSw ? sw : isKo ? ko : en);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');


  // The registry is precomputed and localized at build time; fetched when this tab opens.
  const [registry, setRegistry] = useState<IngredientRegistryItem[]>([]);
  const [registryState, setRegistryState] = useState<'loading' | 'ready' | 'failed'>('loading');
  useEffect(() => {
    let cancelled = false;
    setRegistryState('loading');
    loadIngredientRegistry(lang)
      .then(items => {
        if (cancelled) return;
        setRegistry(items);
        setRegistryState('ready');
      })
      .catch(() => !cancelled && setRegistryState('failed'));
    return () => {
      cancelled = true;
    };
  }, [lang]);
  const recipesById = useMemo(() => new Map(recipes.map(recipe => [recipe.id, recipe])), [recipes]);

  const filteredItems = useMemo(() => {
    return registry.filter(item => {
      const matchesSearch = item.localizedName.toLowerCase().includes(searchTerm.toLowerCase());
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
              <span>{t('سجل المكونات الموحدة (Master Ingredients Registry)', 'Master Ingredients Registry', 'Registre des Ingrédients Principaux', 'Registro de Ingredientes Principales', '食材一覧', 'मुख्य सामग्री रजिस्ट्री', 'Registro de Ingredientes Principais', 'Реестр основных ингредиентов', '主要食材登记册', 'Register der Hauptzutaten', 'Registro degli Ingredienti Principali', 'Μητρώο Βασικών Υλικών', 'بنیادی اجزاء کی فہرست', 'فهرست مواد اولیه اصلی', 'Temel Malzemeler Kataloğu', 'Kataloga Pêkhateyên Bingehîn', 'Katalog Bahan Utama', 'Orodha ya Viungo Vikuu', '주요 재료 목록')}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              {t(
                `سجل مفتوح يضم ${registry.length} مكوناً معيارياً مع ربط كل مكون بالوصفات التي تستخدمه.`,
                `An open catalogue of ${registry.length} canonical ingredients linked to the recipes that use them.`,
                `Un catalogue ouvert de ${registry.length} ingrédients principaux, chacun relié aux recettes qui l'utilisent.`,
                `Un catálogo abierto de ${registry.length} ingredientes principales, cada uno vinculado a las recetas que lo utilizan.`,
                `${registry.length}種類の主要食材を、それぞれ使用しているレシピとともに紹介する公開カタログです。`,
                `${registry.length} मानक सामग्रियों की एक खुली सूची, जिसमें हर सामग्री को उसका उपयोग करने वाले व्यंजनों से जोड़ा गया है।`,
                `Um catálogo aberto com ${registry.length} ingredientes principais, cada um vinculado às receitas que o utilizam.`,
                `Открытый каталог из ${registry.length} основных ингредиентов, каждый из которых связан с рецептами, где он используется.`,
                `一份开放的目录，收录了${registry.length}种标准食材，并关联到使用它们的食谱。`,
                `Ein offener Katalog mit ${registry.length} Standardzutaten, jede verknüpft mit den Rezepten, die sie verwenden.`,
                `Un catalogo aperto di ${registry.length} ingredienti standard, ciascuno collegato alle ricette che lo utilizzano.`,
                `Ένας ανοιχτός κατάλογος με ${registry.length} βασικά υλικά, καθένα συνδεδεμένο με τις συνταγές που το χρησιμοποιούν.`,
                `${registry.length} بنیادی اجزاء کی کھلی فہرست، ان ترکیبوں کے ساتھ جن میں یہ استعمال ہوتے ہیں۔`,
                `فهرستی باز از ${registry.length} ماده اولیه اصلی، همراه با دستورهایی که از آن‌ها استفاده می‌کنند.`,
                `Kullanıldıkları tariflerle birlikte ${registry.length} temel malzemenin açık kataloğu.`,
                `Kataloga vekirî ya ${registry.length} pêkhateyên bingehîn bi reçeteyên ku tê de têne bikaranîn.`,
                `Katalog terbuka berisi ${registry.length} bahan utama beserta resep yang menggunakannya.`,
                `Orodha huria ya viungo vikuu ${registry.length} pamoja na mapishi yanayovitumia.`,
                `주요 재료 ${registry.length}가지와 이를 사용하는 레시피를 담은 공개 목록입니다.`
              )}
            </p>
          </div>

          <div className="bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold">
            <span>{t('إجمالي المكونات الموحدة:', 'Total Master Ingredients:', "Total des ingrédients principaux :", 'Total de Ingredientes Principales:', '主要食材の合計数:', 'कुल मुख्य सामग्रियां:', 'Total de Ingredientes Principais:', 'Всего основных ингредиентов:', '主要食材总数：', 'Hauptzutaten insgesamt:', 'Totale Ingredienti Principali:', 'Σύνολο Βασικών Υλικών:', 'بنیادی اجزاء کی کل تعداد:', 'تعداد کل مواد اولیه اصلی:', 'Toplam Temel Malzeme:', 'Hemû Pêkhateyên Bingehîn:', 'Total Bahan Utama:', 'Jumla ya Viungo Vikuu:', '주요 재료 총계:')}</span>{' '}
            <strong className="text-base text-amber-700">{registry.length}</strong>
          </div>
        </div>

        {/* Filters and search */}
        <div className="mt-5 pt-5 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('ابحث عن مكون (مثل: سمن بلدي، حبهان...)', 'Search ingredient (e.g. Cardamom, Ghee)...', 'Rechercher un ingrédient (ex. cardamome, ghee)...', 'Buscar ingrediente (ej. cardamomo, ghee)...', '食材を検索(例:カルダモン、ギー)...', 'सामग्री खोजें (जैसे: इलायची, घी...)', 'Buscar ingrediente (ex.: cardamomo, ghee)...', 'Поиск ингредиента (напр., кардамон, гхи)...', '搜索食材（例如：小豆蔻、酥油）...', 'Zutat suchen (z. B. Kardamom, Ghee)...', 'Cerca ingrediente (es. cardamomo, ghee)...', 'Αναζήτηση υλικού (π.χ. κάρδαμο, γκι)...', 'جزو تلاش کریں (مثلاً الائچی، گھی)...', 'جستجوی ماده اولیه (مثلاً هل، روغن حیوانی)...', 'Malzeme ara (örn. Kakule, Sade Yağ)...', 'Li pêkhateyan bigere (mînak: Hêl, Rûnê Nivîşk)...', 'Cari bahan (mis. Kapulaga, Samin)...', 'Tafuta viungo (mf. Iliki, Samli)...', '재료 검색 (예: 카다멈, 기)...')}
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
              {t('الكل', 'All', 'Tout', 'Todos', 'すべて', 'सभी', 'Todos', 'Все', '全部', 'Alle', 'Tutti', 'Όλα', 'سب', 'همه', 'Tümü', 'Hemû', 'Semua', 'Vyote', '전체')} ({registry.length})
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
                  {t(`${item.recipesCount} وصفات`, `${item.recipesCount} recipes`, `${item.recipesCount} recettes`, `${item.recipesCount} recetas`, `${item.recipesCount}件のレシピ`, `${item.recipesCount} व्यंजन`, `${item.recipesCount} receitas`, `${item.recipesCount} рецептов`, `${item.recipesCount}个食谱`, `${item.recipesCount} Rezepte`, `${item.recipesCount} ricette`, `${item.recipesCount} συνταγές`, `${item.recipesCount} ترکیبیں`, `${item.recipesCount} دستور`, `${item.recipesCount} tarif`, `${item.recipesCount} reçete`, `${item.recipesCount} resep`, `Mapishi ${item.recipesCount}`, `레시피 ${item.recipesCount}개`)}
                </span>
              </div>

              <h3 className="text-base font-bold text-stone-900 mt-2">
                {item.localizedName}
              </h3>
            </div>

            <div className="mt-3 pt-3 border-t border-stone-100">
              <span className="text-[11px] text-stone-500 font-semibold block mb-1.5">
                {t('الوصفات التي تستخدمه:', 'Used in recipes:', 'Utilisé dans les recettes :', 'Usado en las recetas:', '使用しているレシピ:', 'जिन व्यंजनों में उपयोग होता है:', 'Usado nas receitas:', 'Используется в рецептах:', '使用于以下食谱：', 'Verwendet in Rezepten:', 'Utilizzato nelle ricette:', 'Χρησιμοποιείται στις συνταγές:', 'ان ترکیبوں میں استعمال:', 'به‌کاررفته در دستورهای:', 'Kullanıldığı tarifler:', 'Di van reçeteyan de tê bikaranîn:', 'Digunakan dalam resep:', 'Hutumika katika mapishi:', '사용된 레시피:')}
              </span>
              <div className="flex flex-wrap gap-1">
                {item.recipeTitles.map(r => {
                  const summary = recipesById.get(r.id);
                  return (
                    <button
                      key={r.id}
                      onClick={() => onSelectRecipe(r.id)}
                      className="inline-flex items-center text-[11px] px-2 py-0.5 rounded bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/60 font-medium transition-colors"
                      title={r.standardAmount ? `الكمية القياسية: ${r.standardAmount}` : undefined}
                    >
                      {summary ? getLocalizedRecipe(summary, lang).title : r.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {registryState !== 'ready' && (
        <div className={`text-center py-12 bg-white rounded-2xl border text-sm font-semibold ${registryState === 'failed' ? 'border-rose-200 text-rose-800' : 'border-stone-200 text-stone-500 animate-pulse'}`}>
          {getUIText(lang, registryState === 'failed' ? 'recipesLoadFailed' : 'loadingMoreRecipes')}
        </div>
      )}

      {registryState === 'ready' && filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 text-stone-500">
          <UtensilsCrossed className="w-8 h-8 text-stone-300 mx-auto mb-2" />
          <p className="font-semibold text-sm">{t('لا توجد مكونات مطابقة لبحثك', 'No ingredients match your query', 'Aucun ingrédient ne correspond à votre recherche', 'Ningún ingrediente coincide con tu búsqueda', '検索条件に一致する食材が見つかりませんでした', 'आपकी खोज से मेल खाने वाली कोई सामग्री नहीं मिली', 'Nenhum ingrediente corresponde à sua busca', 'Ингредиенты по вашему запросу не найдены', '没有找到匹配的食材', 'Keine Zutaten entsprechen Ihrer Suche', 'Nessun ingrediente corrisponde alla tua ricerca', 'Κανένα υλικό δεν ταιριάζει με την αναζήτησή σας', 'آپ کی تلاش سے کوئی جزو نہیں ملا', 'هیچ ماده اولیه‌ای با جستجوی شما مطابقت ندارد', 'Aramanızla eşleşen malzeme yok', 'Tu pêkhate li gorî lêgerîna te nehat dîtin', 'Tidak ada bahan yang cocok dengan pencarian Anda', 'Hakuna viungo vinavyolingana na utafutaji wako', '검색과 일치하는 재료가 없습니다')}</p>
        </div>
      )}
    </div>
  );
};
