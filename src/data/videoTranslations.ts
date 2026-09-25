import { SupportedLanguage } from '../types';

export interface VideoStrings {
  tab: string;
  intro: string;
  loading: string;
  empty: string;
  error: string;
  retry: string;
  /** `{p}` is replaced with the platform name. */
  openOn: string;
  searchOn: string;
  previous: string;
  next: string;
  short: string;
  close: string;
}

const en: VideoStrings = {
  tab: 'Videos',
  intro: 'Videos found automatically by searching for this dish. They belong to their creators and may differ from Dr. Fatma’s recipe.',
  loading: 'Searching for videos…',
  empty: 'No matching videos found yet.',
  error: 'Videos could not be loaded right now.',
  retry: 'Try again',
  openOn: 'Open on {p}',
  searchOn: 'Search this dish on',
  previous: 'Previous',
  next: 'Next',
  short: 'Short',
  close: 'Close'
};

const STRINGS: Partial<Record<SupportedLanguage, VideoStrings>> = {
  en,
  ar: {
    tab: 'فيديوهات',
    intro: 'فيديوهات تم العثور عليها تلقائيًا بالبحث عن اسم الطبق. الفيديوهات ملك أصحابها وقد تختلف عن وصفة د. فاطمة.',
    loading: 'جارٍ البحث عن الفيديوهات…',
    empty: 'لم يتم العثور على فيديوهات مطابقة بعد.',
    error: 'تعذّر تحميل الفيديوهات الآن.',
    retry: 'حاول مرة أخرى',
    openOn: 'افتح على {p}',
    searchOn: 'ابحث عن هذا الطبق على',
    previous: 'السابق',
    next: 'التالي',
    short: 'شورت',
    close: 'إغلاق'
  },
  fr: {
    tab: 'Vidéos',
    intro: 'Vidéos trouvées automatiquement en recherchant ce plat. Elles appartiennent à leurs auteurs et peuvent différer de la recette du Dr Fatma.',
    loading: 'Recherche de vidéos…',
    empty: 'Aucune vidéo correspondante pour l’instant.',
    error: 'Impossible de charger les vidéos pour le moment.',
    retry: 'Réessayer',
    openOn: 'Ouvrir sur {p}',
    searchOn: 'Rechercher ce plat sur',
    previous: 'Précédente',
    next: 'Suivante',
    short: 'Short',
    close: 'Fermer'
  },
  es: {
    tab: 'Vídeos',
    intro: 'Vídeos encontrados automáticamente al buscar este plato. Pertenecen a sus autores y pueden diferir de la receta de la Dra. Fatma.',
    loading: 'Buscando vídeos…',
    empty: 'Todavía no hay vídeos que coincidan.',
    error: 'No se pudieron cargar los vídeos ahora.',
    retry: 'Reintentar',
    openOn: 'Abrir en {p}',
    searchOn: 'Buscar este plato en',
    previous: 'Anterior',
    next: 'Siguiente',
    short: 'Short',
    close: 'Cerrar'
  },
  ja: {
    tab: '動画',
    intro: 'この料理名で自動検索した動画です。動画の権利は投稿者に帰属し、ファトマ博士のレシピとは異なる場合があります。',
    loading: '動画を検索中…',
    empty: '一致する動画はまだ見つかりません。',
    error: '現在、動画を読み込めません。',
    retry: '再試行',
    openOn: '{p}で開く',
    searchOn: 'この料理を検索:',
    previous: '前へ',
    next: '次へ',
    short: 'ショート',
    close: '閉じる'
  },
  hi: {
    tab: 'वीडियो',
    intro: 'इस व्यंजन को खोजकर अपने-आप मिले वीडियो। ये उनके रचनाकारों के हैं और डॉ. फातिमा की विधि से अलग हो सकते हैं।',
    loading: 'वीडियो खोजे जा रहे हैं…',
    empty: 'अभी कोई मिलते-जुलते वीडियो नहीं मिले।',
    error: 'अभी वीडियो लोड नहीं हो सके।',
    retry: 'फिर से कोशिश करें',
    openOn: '{p} पर खोलें',
    searchOn: 'यह व्यंजन यहाँ खोजें',
    previous: 'पिछला',
    next: 'अगला',
    short: 'शॉर्ट',
    close: 'बंद करें'
  },
  pt: {
    tab: 'Vídeos',
    intro: 'Vídeos encontrados automaticamente ao pesquisar este prato. Pertencem aos seus autores e podem diferir da receita da Dra. Fatma.',
    loading: 'Procurando vídeos…',
    empty: 'Ainda não há vídeos correspondentes.',
    error: 'Não foi possível carregar os vídeos agora.',
    retry: 'Tentar novamente',
    openOn: 'Abrir no {p}',
    searchOn: 'Pesquisar este prato no',
    previous: 'Anterior',
    next: 'Próximo',
    short: 'Short',
    close: 'Fechar'
  },
  ru: {
    tab: 'Видео',
    intro: 'Видео найдены автоматически по названию блюда. Они принадлежат своим авторам и могут отличаться от рецепта д-ра Фатмы.',
    loading: 'Ищем видео…',
    empty: 'Подходящих видео пока нет.',
    error: 'Сейчас не удалось загрузить видео.',
    retry: 'Повторить',
    openOn: 'Открыть в {p}',
    searchOn: 'Искать блюдо в',
    previous: 'Назад',
    next: 'Далее',
    short: 'Shorts',
    close: 'Закрыть'
  },
  zh: {
    tab: '视频',
    intro: '按菜名自动搜索到的视频。视频归其作者所有，可能与法特玛博士的食谱不同。',
    loading: '正在搜索视频…',
    empty: '暂未找到匹配的视频。',
    error: '暂时无法加载视频。',
    retry: '重试',
    openOn: '在 {p} 打开',
    searchOn: '在以下平台搜索此菜',
    previous: '上一个',
    next: '下一个',
    short: '短视频',
    close: '关闭'
  },
  de: {
    tab: 'Videos',
    intro: 'Automatisch gefundene Videos zu diesem Gericht. Sie gehören ihren Urhebern und können vom Rezept von Dr. Fatma abweichen.',
    loading: 'Videos werden gesucht…',
    empty: 'Noch keine passenden Videos gefunden.',
    error: 'Videos konnten gerade nicht geladen werden.',
    retry: 'Erneut versuchen',
    openOn: 'Auf {p} öffnen',
    searchOn: 'Dieses Gericht suchen auf',
    previous: 'Zurück',
    next: 'Weiter',
    short: 'Short',
    close: 'Schließen'
  },
  it: {
    tab: 'Video',
    intro: 'Video trovati automaticamente cercando questo piatto. Appartengono ai loro autori e possono differire dalla ricetta della Dott.ssa Fatma.',
    loading: 'Ricerca dei video…',
    empty: 'Nessun video corrispondente per ora.',
    error: 'Impossibile caricare i video in questo momento.',
    retry: 'Riprova',
    openOn: 'Apri su {p}',
    searchOn: 'Cerca questo piatto su',
    previous: 'Precedente',
    next: 'Successivo',
    short: 'Short',
    close: 'Chiudi'
  },
  el: {
    tab: 'Βίντεο',
    intro: 'Βίντεο που βρέθηκαν αυτόματα με αναζήτηση του πιάτου. Ανήκουν στους δημιουργούς τους και ίσως διαφέρουν από τη συνταγή της Δρ. Φάτμα.',
    loading: 'Αναζήτηση βίντεο…',
    empty: 'Δεν βρέθηκαν ακόμη σχετικά βίντεο.',
    error: 'Δεν ήταν δυνατή η φόρτωση των βίντεο τώρα.',
    retry: 'Δοκιμάστε ξανά',
    openOn: 'Άνοιγμα στο {p}',
    searchOn: 'Αναζήτηση του πιάτου στο',
    previous: 'Προηγούμενο',
    next: 'Επόμενο',
    short: 'Short',
    close: 'Κλείσιμο'
  },
  ur: {
    tab: 'ویڈیوز',
    intro: 'اس ڈش کو تلاش کر کے خودکار طور پر ملنے والی ویڈیوز۔ یہ اپنے تخلیق کاروں کی ہیں اور ڈاکٹر فاطمہ کی ترکیب سے مختلف ہو سکتی ہیں۔',
    loading: 'ویڈیوز تلاش کی جا رہی ہیں…',
    empty: 'ابھی کوئی ملتی جلتی ویڈیو نہیں ملی۔',
    error: 'اس وقت ویڈیوز لوڈ نہیں ہو سکیں۔',
    retry: 'دوبارہ کوشش کریں',
    openOn: '{p} پر کھولیں',
    searchOn: 'یہ ڈش تلاش کریں',
    previous: 'پچھلی',
    next: 'اگلی',
    short: 'شارٹ',
    close: 'بند کریں'
  },
  fa: {
    tab: 'ویدیوها',
    intro: 'ویدیوهایی که با جست‌وجوی نام این غذا به‌طور خودکار پیدا شده‌اند. متعلق به سازندگانشان هستند و ممکن است با دستور دکتر فاطمه فرق داشته باشند.',
    loading: 'در حال جست‌وجوی ویدیوها…',
    empty: 'هنوز ویدیوی مرتبطی پیدا نشد.',
    error: 'اکنون امکان بارگذاری ویدیوها نیست.',
    retry: 'تلاش دوباره',
    openOn: 'باز کردن در {p}',
    searchOn: 'جست‌وجوی این غذا در',
    previous: 'قبلی',
    next: 'بعدی',
    short: 'شورت',
    close: 'بستن'
  },
  tr: {
    tab: 'Videolar',
    intro: 'Bu yemek aranarak otomatik bulunan videolar. Sahiplerine aittir ve Dr. Fatma’nın tarifinden farklı olabilir.',
    loading: 'Videolar aranıyor…',
    empty: 'Henüz eşleşen video bulunamadı.',
    error: 'Videolar şu anda yüklenemedi.',
    retry: 'Tekrar dene',
    openOn: '{p} üzerinde aç',
    searchOn: 'Bu yemeği şurada ara',
    previous: 'Önceki',
    next: 'Sonraki',
    short: 'Short',
    close: 'Kapat'
  },
  ku: {
    tab: 'Vîdyo',
    intro: 'Vîdyoyên ku bi lêgerîna navê vî xwarinê bixweber hatine dîtin. Yên afirînerên wan in û dibe ku ji reçeteya Dr. Fatma cuda bin.',
    loading: 'Li vîdyoyan tê gerîn…',
    empty: 'Hîn vîdyoyek li hev nehat dîtin.',
    error: 'Niha vîdyo nehatin barkirin.',
    retry: 'Dîsa biceribîne',
    openOn: 'Li ser {p} veke',
    searchOn: 'Vî xwarinê lê bigere li',
    previous: 'Berê',
    next: 'Paşê',
    short: 'Short',
    close: 'Bigire'
  },
  id: {
    tab: 'Video',
    intro: 'Video yang ditemukan otomatis dengan mencari hidangan ini. Video milik pembuatnya dan bisa berbeda dari resep Dr. Fatma.',
    loading: 'Mencari video…',
    empty: 'Belum ada video yang cocok.',
    error: 'Video tidak dapat dimuat saat ini.',
    retry: 'Coba lagi',
    openOn: 'Buka di {p}',
    searchOn: 'Cari hidangan ini di',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
    short: 'Short',
    close: 'Tutup'
  },
  sw: {
    tab: 'Video',
    intro: 'Video zilizopatikana kiotomatiki kwa kutafuta mlo huu. Ni mali ya waundaji wake na zinaweza kutofautiana na mapishi ya Dkt. Fatma.',
    loading: 'Inatafuta video…',
    empty: 'Bado hakuna video zinazolingana.',
    error: 'Video hazikuweza kupakiwa sasa.',
    retry: 'Jaribu tena',
    openOn: 'Fungua kwenye {p}',
    searchOn: 'Tafuta mlo huu kwenye',
    previous: 'Iliyotangulia',
    next: 'Inayofuata',
    short: 'Short',
    close: 'Funga'
  },
  ko: {
    tab: '동영상',
    intro: '요리 이름으로 자동 검색한 동영상입니다. 동영상의 권리는 제작자에게 있으며 파트마 박사의 레시피와 다를 수 있습니다.',
    loading: '동영상을 검색하는 중…',
    empty: '아직 일치하는 동영상이 없습니다.',
    error: '지금은 동영상을 불러올 수 없습니다.',
    retry: '다시 시도',
    openOn: '{p}에서 열기',
    searchOn: '이 요리 검색:',
    previous: '이전',
    next: '다음',
    short: '쇼츠',
    close: '닫기'
  }
};

export const getVideoStrings = (lang: SupportedLanguage): VideoStrings => STRINGS[lang] ?? en;
