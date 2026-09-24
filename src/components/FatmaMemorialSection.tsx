import React from 'react';
import {
  Heart,
  Award,
  BookOpen,
  Music,
  Calendar,
  Building,
  Clock,
  Sparkles,
  Quote
} from 'lucide-react';
import { FATMA_BIOGRAPHY } from '../data/fatmaBiography';
import { SupportedLanguage } from '../types';
import { MessageSquareHeart } from 'lucide-react';

interface FatmaMemorialSectionProps {
  lang: SupportedLanguage;
  onOpenTribute: () => void;
}

export const FatmaMemorialSection: React.FC<FatmaMemorialSectionProps> = ({ lang, onOpenTribute }) => {
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
  const getMilestoneYear = (year: string) => {
    if (isAr) return year;
    if (year === 'حوالي 1961') return isFr ? 'v. 1961' : isEs ? 'c. 1961' : isJa ? '1961年頃' : isHi ? 'लगभग 1961' : isPt ? 'c. 1961' : isRu ? 'около 1961 г.' : isZh ? '1961年左右' : isDe ? 'um 1961' : isIt ? 'c. 1961' : isEl ? 'περ. 1961' : isUr ? 'تقریباً 1961' : isFa ? 'حدود 1961' : isTr ? 'y. 1961' : isKu ? 'nêzîkî 1961' : isId ? 'sekitar 1961' : isSw ? 'takriban 1961' : isKo ? '1961년경' : 'c. 1961';
    if (year === '8 مايو 2026') return isFr ? '8 mai 2026' : isEs ? '8 de mayo de 2026' : isJa ? '2026年5月8日' : isHi ? '8 मई 2026' : isPt ? '8 de maio de 2026' : isRu ? '8 мая 2026 г.' : isZh ? '2026年5月8日' : isDe ? '8. Mai 2026' : isIt ? '8 maggio 2026' : isEl ? '8 Μαΐου 2026' : isUr ? '8 مئی 2026' : isFa ? '8 مه 2026' : isTr ? '8 Mayıs 2026' : isKu ? '8ê Gulana 2026' : isId ? '8 Mei 2026' : isSw ? '8 Mei 2026' : isKo ? '2026년 5월 8일' : 'May 8, 2026';
    return year;
  };
  const name = isAr ? FATMA_BIOGRAPHY.nameAr : isFr ? FATMA_BIOGRAPHY.nameFr : isEs ? FATMA_BIOGRAPHY.nameEs : isJa ? FATMA_BIOGRAPHY.nameJa : isHi ? FATMA_BIOGRAPHY.nameHi : isPt ? FATMA_BIOGRAPHY.namePt : isRu ? FATMA_BIOGRAPHY.nameRu : isZh ? FATMA_BIOGRAPHY.nameZh : isDe ? FATMA_BIOGRAPHY.nameDe : isIt ? FATMA_BIOGRAPHY.nameIt : isEl ? FATMA_BIOGRAPHY.nameEl : isUr ? FATMA_BIOGRAPHY.nameUr : isFa ? FATMA_BIOGRAPHY.nameFa : isTr ? FATMA_BIOGRAPHY.nameTr : isKu ? FATMA_BIOGRAPHY.nameKu : isId ? FATMA_BIOGRAPHY.nameId : isSw ? FATMA_BIOGRAPHY.nameSw : isKo ? FATMA_BIOGRAPHY.nameKo : FATMA_BIOGRAPHY.nameEn;
  const title = isAr ? FATMA_BIOGRAPHY.titleAr : isFr ? FATMA_BIOGRAPHY.titleFr : isEs ? FATMA_BIOGRAPHY.titleEs : isJa ? FATMA_BIOGRAPHY.titleJa : isHi ? FATMA_BIOGRAPHY.titleHi : isPt ? FATMA_BIOGRAPHY.titlePt : isRu ? FATMA_BIOGRAPHY.titleRu : isZh ? FATMA_BIOGRAPHY.titleZh : isDe ? FATMA_BIOGRAPHY.titleDe : isIt ? FATMA_BIOGRAPHY.titleIt : isEl ? FATMA_BIOGRAPHY.titleEl : isUr ? FATMA_BIOGRAPHY.titleUr : isFa ? FATMA_BIOGRAPHY.titleFa : isTr ? FATMA_BIOGRAPHY.titleTr : isKu ? FATMA_BIOGRAPHY.titleKu : isId ? FATMA_BIOGRAPHY.titleId : isSw ? FATMA_BIOGRAPHY.titleSw : isKo ? FATMA_BIOGRAPHY.titleKo : FATMA_BIOGRAPHY.titleEn;
  const tagline = isAr ? FATMA_BIOGRAPHY.taglineAr : isFr ? FATMA_BIOGRAPHY.taglineFr : isEs ? FATMA_BIOGRAPHY.taglineEs : isJa ? FATMA_BIOGRAPHY.taglineJa : isHi ? FATMA_BIOGRAPHY.taglineHi : isPt ? FATMA_BIOGRAPHY.taglinePt : isRu ? FATMA_BIOGRAPHY.taglineRu : isZh ? FATMA_BIOGRAPHY.taglineZh : isDe ? FATMA_BIOGRAPHY.taglineDe : isIt ? FATMA_BIOGRAPHY.taglineIt : isEl ? FATMA_BIOGRAPHY.taglineEl : isUr ? FATMA_BIOGRAPHY.taglineUr : isFa ? FATMA_BIOGRAPHY.taglineFa : isTr ? FATMA_BIOGRAPHY.taglineTr : isKu ? FATMA_BIOGRAPHY.taglineKu : isId ? FATMA_BIOGRAPHY.taglineId : isSw ? FATMA_BIOGRAPHY.taglineSw : isKo ? FATMA_BIOGRAPHY.taglineKo : FATMA_BIOGRAPHY.taglineEn;
  const philosophy = isAr ? FATMA_BIOGRAPHY.philosophyAr : isFr ? FATMA_BIOGRAPHY.philosophyFr : isEs ? FATMA_BIOGRAPHY.philosophyEs : isJa ? FATMA_BIOGRAPHY.philosophyJa : isHi ? FATMA_BIOGRAPHY.philosophyHi : isPt ? FATMA_BIOGRAPHY.philosophyPt : isRu ? FATMA_BIOGRAPHY.philosophyRu : isZh ? FATMA_BIOGRAPHY.philosophyZh : isDe ? FATMA_BIOGRAPHY.philosophyDe : isIt ? FATMA_BIOGRAPHY.philosophyIt : isEl ? FATMA_BIOGRAPHY.philosophyEl : isUr ? FATMA_BIOGRAPHY.philosophyUr : isFa ? FATMA_BIOGRAPHY.philosophyFa : isTr ? FATMA_BIOGRAPHY.philosophyTr : isKu ? FATMA_BIOGRAPHY.philosophyKu : isId ? FATMA_BIOGRAPHY.philosophyId : isSw ? FATMA_BIOGRAPHY.philosophySw : isKo ? FATMA_BIOGRAPHY.philosophyKo : FATMA_BIOGRAPHY.philosophyEn;
  const biography = isAr ? FATMA_BIOGRAPHY.biographyAr : isFr ? FATMA_BIOGRAPHY.biographyFr : isEs ? FATMA_BIOGRAPHY.biographyEs : isJa ? FATMA_BIOGRAPHY.biographyJa : isHi ? FATMA_BIOGRAPHY.biographyHi : isPt ? FATMA_BIOGRAPHY.biographyPt : isRu ? FATMA_BIOGRAPHY.biographyRu : isZh ? FATMA_BIOGRAPHY.biographyZh : isDe ? FATMA_BIOGRAPHY.biographyDe : isIt ? FATMA_BIOGRAPHY.biographyIt : isEl ? FATMA_BIOGRAPHY.biographyEl : isUr ? FATMA_BIOGRAPHY.biographyUr : isFa ? FATMA_BIOGRAPHY.biographyFa : isTr ? FATMA_BIOGRAPHY.biographyTr : isKu ? FATMA_BIOGRAPHY.biographyKu : isId ? FATMA_BIOGRAPHY.biographyId : isSw ? FATMA_BIOGRAPHY.biographySw : isKo ? FATMA_BIOGRAPHY.biographyKo : FATMA_BIOGRAPHY.biographyEn;
  const memorialPlaque = isAr ? FATMA_BIOGRAPHY.memorialPlaqueAr : isFr ? FATMA_BIOGRAPHY.memorialPlaqueFr : isEs ? FATMA_BIOGRAPHY.memorialPlaqueEs : isJa ? FATMA_BIOGRAPHY.memorialPlaqueJa : isHi ? FATMA_BIOGRAPHY.memorialPlaqueHi : isPt ? FATMA_BIOGRAPHY.memorialPlaquePt : isRu ? FATMA_BIOGRAPHY.memorialPlaqueRu : isZh ? FATMA_BIOGRAPHY.memorialPlaqueZh : isDe ? FATMA_BIOGRAPHY.memorialPlaqueDe : isIt ? FATMA_BIOGRAPHY.memorialPlaqueIt : isEl ? FATMA_BIOGRAPHY.memorialPlaqueEl : isUr ? FATMA_BIOGRAPHY.memorialPlaqueUr : isFa ? FATMA_BIOGRAPHY.memorialPlaqueFa : isTr ? FATMA_BIOGRAPHY.memorialPlaqueTr : isKu ? FATMA_BIOGRAPHY.memorialPlaqueKu : isId ? FATMA_BIOGRAPHY.memorialPlaqueId : isSw ? FATMA_BIOGRAPHY.memorialPlaqueSw : isKo ? FATMA_BIOGRAPHY.memorialPlaqueKo : FATMA_BIOGRAPHY.memorialPlaqueEn;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Memorial Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white shadow-2xl border border-stone-800">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-amber-950/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1520523839898-50712825e3a7?auto=format&fit=crop&w=1600&q=80"
          alt="Classical Piano and Heritage"
          className="absolute inset-0 w-full h-full object-cover opacity-25 z-0"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-20 p-6 sm:p-12 max-w-3xl">
          <img
            src={`${import.meta.env.BASE_URL}logo-transparent.png`}
            alt={t('شعار د. فاطمة القاوقجي', 'Dr. Fatma Alkawokgy logo', 'Logo du Dr Fatma Alkawokgy', 'Logotipo de la Dra. Fatma Alkawokgy', 'ファトマ・アルカウォクジ博士のロゴ', 'डॉ. फातिमा अल-कावोक्जी का लोगो', 'Logotipo da Dra. Fatma Alkawokgy', 'Логотип д-ра Фатмы Алькавокджи', '法特玛·卡沃克吉博士徽标', 'Logo von Dr. Fatma Alkawokgy', 'Logo della Dott.ssa Fatma Alkawokgy', 'Λογότυπο της Δρ. Φάτμα Αλκαβόκτζι', 'ڈاکٹر فاطمہ القاوقجی کا لوگو', 'لوگوی دکتر فاطمه القاوقجی', 'Dr. Fatma Alkawokgy logosu', 'Logoya Dr. Fatma Alkawokgy', 'Logo Dr. Fatma Alkawokgy', 'Nembo ya Dkt. Fatma Alkawokgy', '파트마 알카우크지 박사 로고')}
            className="w-28 h-28 sm:w-36 sm:h-36 object-cover object-center rounded-2xl bg-white/90 p-2 shadow-lg mb-5"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
            <Music className="w-3.5 h-3.5" />
            <span>{t('1943 – 2026 • كلية التربية الموسيقية بالزمالك', '1943 – 2026 • Faculty of Music Education, Zamalek, Cairo, Egypt', '1943 – 2026 • Faculté d’Éducation Musicale, Zamalek, Le Caire, Égypte', '1943 – 2026 • Facultad de Educación Musical, Zamalek, El Cairo, Egipto', '1943年 – 2026年 • ザマレク音楽教育学部(エジプト・カイロ)', '1943 – 2026 • संगीत शिक्षा संकाय, ज़मालेक, काहिरा, मिस्र', '1943 – 2026 • Faculdade de Educação Musical, Zamalek, Cairo, Egito', '1943 – 2026 • Факультет музыкального образования, Замалек, Каир, Египет', '1943年 – 2026年 • 埃及开罗扎马雷克音乐教育学院', '1943 – 2026 • Fakultät für Musikpädagogik, Zamalek, Kairo, Ägypten', '1943 – 2026 • Facoltà di Educazione Musicale, Zamalek, Il Cairo, Egitto', '1943 – 2026 • Σχολή Μουσικής Παιδαγωγικής, Ζαμάλεκ, Κάιρο, Αίγυπτος', '1943 – 2026 • فیکلٹی آف میوزک ایجوکیشن، زمالک، قاہرہ، مصر', '1943 – 2026 • دانشکده آموزش موسیقی، زمالک، قاهره، مصر', '1943 – 2026 • Müzik Eğitimi Fakültesi, Zamalek, Kahire, Mısır', '1943 – 2026 • Fakulteya Perwerdeya Mûzîkê, Zamalek, Qahîre, Misir', '1943 – 2026 • Fakultas Pendidikan Musik, Zamalek, Kairo, Mesir', '1943 – 2026 • Kitivo cha Elimu ya Muziki, Zamalek, Kairo, Misri', '1943 – 2026 • 카이로 자말렉 음악교육대학, 이집트')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {name}
          </h1>

          <p className="text-base sm:text-xl text-amber-100/90 font-light leading-relaxed mb-6">
            {title}
          </p>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8">
            {tagline}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-800 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="font-bold text-white">1943 – 2026</div>
                <div className="text-[11px] text-stone-400">{t('رحلة العطاء والأثر', 'A life of purpose and impact', 'Une vie de sens et d’impact', 'Una vida de propósito e impacto', '目的と功績に満ちた人生', 'उद्देश्य और प्रभाव से भरा जीवन', 'Uma vida de propósito e impacto', 'Жизнь, полная смысла и значимости', '充满使命与影响的一生', 'Ein Leben voller Sinn und Wirkung', 'Una vita di scopo e impatto', 'Μια ζωή γεμάτη σκοπό και αντίκτυπο', 'مقصد اور اثر سے بھرپور زندگی', 'زندگی‌ای سرشار از هدف و تأثیر', 'Anlam ve etki dolu bir yaşam', 'Jiyaneke tijî wate û bandor', 'Kehidupan yang penuh makna dan pengaruh', 'Maisha yaliyojaa maana na athari', '의미와 영향으로 가득한 삶')}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Building className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="font-bold text-white">{t('تربية موسيقية - الزمالك', 'Music Education - Zamalek', 'Éducation Musicale - Zamalek', 'Educación Musical - Zamalek', '音楽教育 - ザマレク', 'संगीत शिक्षा - ज़मालेक', 'Educação Musical - Zamalek', 'Музыкальное образование - Замалек', '音乐教育 - 扎马雷克', 'Musikpädagogik - Zamalek', 'Educazione Musicale - Zamalek', 'Μουσική Παιδαγωγική - Ζαμάλεκ', 'میوزک ایجوکیشن - زمالک', 'آموزش موسیقی - زمالک', 'Müzik Eğitimi - Zamalek', 'Perwerdeya Mûzîkê - Zamalek', 'Pendidikan Musik - Zamalek', 'Elimu ya Muziki - Zamalek', '음악교육 - 자말렉')}</div>
                <div className="text-[11px] text-stone-400">{t('أستاذة العزف على البيانو', 'Piano Professor', 'Professeure de Piano', 'Profesora de Piano', 'ピアノ教授', 'पियानो प्रोफेसर', 'Professora de Piano', 'Профессор фортепиано', '钢琴教授', 'Klavierprofessorin', 'Professoressa di Pianoforte', 'Καθηγήτρια Πιάνου', 'پیانو کی پروفیسر', 'استاد پیانو', 'Piyano Profesörü', 'Profesora Piyanoyê', 'Profesor Piano', 'Profesa wa Piano', '피아노 교수')}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="font-bold text-white">{t('20 عاماً من البحث', '20 Years of Research', '20 Années de Recherche', '20 Años de Investigación', '20年間の研究', '20 वर्षों का शोध', '20 Anos de Pesquisa', '20 лет исследований', '20年研究历程', '20 Jahre Forschung', '20 Anni di Ricerca', '20 Χρόνια Έρευνας', '20 سال کی تحقیق', '20 سال پژوهش', '20 Yıllık Araştırma', '20 Sal Lêkolîn', '20 Tahun Penelitian', 'Miaka 20 ya Utafiti', '20년의 연구')}</div>
                <div className="text-[11px] text-stone-400">{t('تدوين وتحقيق الوصفات', 'Recipe documentation and preservation', 'Documentation et préservation des recettes', 'Documentación y preservación de recetas', 'レシピの記録と保存', 'व्यंजनों का दस्तावेज़ीकरण और संरक्षण', 'Documentação e preservação de receitas', 'Документирование и сохранение рецептов', '食谱的记录与保存', 'Dokumentation und Bewahrung von Rezepten', 'Documentazione e conservazione delle ricette', 'Καταγραφή και διαφύλαξη συνταγών', 'ترکیبوں کی دستاویز بندی اور حفاظت', 'ثبت و نگهداری دستورهای آشپزی', 'Tariflerin kayıt altına alınması ve korunması', 'Tomarkirin û parastina reçeteyan', 'Mendokumentasikan dan melestarikan resep', 'Kurekodi na kuhifadhi mapishi', '레시피 기록과 보존')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Musical Harmony & Culinary Philosophy */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8 relative">
        <Quote className="w-10 h-10 text-amber-300 absolute top-4 right-4 sm:top-6 sm:right-6 opacity-60" />
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{t('فلسفة د. فاطمة: الموسيقى ونغمات الطهي', "Dr. Fatma's Philosophy: Music & Culinary Harmony", 'La Philosophie du Dr Fatma : Musique et Harmonie Culinaire', 'La Filosofía de la Dra. Fatma: Música y Armonía Culinaria', 'ファトマ博士の哲学:音楽と料理の調和', 'डॉ. फातिमा का दर्शन: संगीत और पाककला का सामंजस्य', 'A Filosofia da Dra. Fatma: Música e Harmonia Culinária', 'Философия д-ра Фатмы: музыка и кулинарная гармония', '法特玛博士的哲学：音乐与烹饪的和谐', 'Dr. Fatmas Philosophie: Musik und kulinarische Harmonie', 'La Filosofia della Dott.ssa Fatma: Musica e Armonia Culinaria', 'Η Φιλοσοφία της Δρ. Φάτμα: Μουσική και Γαστρονομική Αρμονία', 'ڈاکٹر فاطمہ کا فلسفہ: موسیقی اور کھانوں کی ہم آہنگی', 'فلسفه دکتر فاطمه: هماهنگی موسیقی و آشپزی', 'Dr. Fatma’nın Felsefesi: Müzik ve Mutfak Uyumu', 'Felsefeya Dr. Fatma: Ahenga Mûzîk û Metbexê', 'Filosofi Dr. Fatma: Harmoni Musik dan Masakan', 'Falsafa ya Dkt. Fatma: Upatanifu wa Muziki na Upishi', '파트마 박사의 철학: 음악과 요리의 조화')}</span>
          </div>
          <blockquote className="text-base sm:text-xl font-serif text-amber-950 italic leading-relaxed">
            "{philosophy}"
          </blockquote>
          <div className="mt-4 text-xs font-bold text-amber-800">
            — {name}
          </div>
        </div>
      </div>

      {/* Main Biography Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-stone-200 pb-3">
            <BookOpen className="w-5 h-5 text-amber-700" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              {t('السيرة التوثيقية ومسيرة جمع التراث', 'The Life & Legacy of Dr. Fatma', 'La Vie et l’Héritage du Dr Fatma', 'La Vida y el Legado de la Dra. Fatma', 'ファトマ博士の生涯と遺産', 'डॉ. फातिमा का जीवन और विरासत', 'A Vida e o Legado da Dra. Fatma', 'Жизнь и наследие д-ра Фатмы', '法特玛博士的生平与遗产', 'Das Leben und Vermächtnis von Dr. Fatma', 'La Vita e l’Eredità della Dott.ssa Fatma', 'Η Ζωή και η Κληρονομιά της Δρ. Φάτμα', 'ڈاکٹر فاطمہ کی زندگی اور ورثہ', 'زندگی و میراث دکتر فاطمه', 'Dr. Fatma’nın Hayatı ve Mirası', 'Jiyan û Mîrata Dr. Fatma', 'Kehidupan dan Warisan Dr. Fatma', 'Maisha na Urithi wa Dkt. Fatma', '파트마 박사의 삶과 유산')}
            </h2>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            {biography.map((paragraph, idx) => (
              <p key={idx} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Memorial Plaque Card */}
          <div className="p-6 bg-stone-900 text-amber-100 rounded-2xl border border-amber-900/50 shadow-md">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>{t('لوحة الوفاء والتخليد', 'Memorial Dedication Plaque', 'Plaque Commémorative', 'Placa Conmemorativa', '追悼のプレート', 'स्मृति समर्पण पट्टिका', 'Placa Comemorativa', 'Мемориальная посвятительная табличка', '纪念献辞牌匾', 'Gedenktafel zu Ehren', 'Targa Commemorativa', 'Αναμνηστική Πλάκα Αφιέρωσης', 'یادگاری تختی', 'لوح یادبود', 'Anma Plaketi', 'Lewheya Bîranînê', 'Plakat Peringatan', 'Bamba la Kumbukumbu', '추모 명판')}</span>
            </div>
            <p className="text-sm sm:text-base font-serif italic leading-relaxed text-stone-200">
              "{memorialPlaque}"
            </p>
          </div>
        </div>

        {/* Milestones & Academic Highlights */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 border-b border-stone-200 pb-3">
            <Award className="w-5 h-5 text-amber-700" />
            <h3 className="text-lg font-bold text-stone-900">
              {t('محطات مضيئة', 'Milestones in Life & Art', 'Jalons d’une Vie et d’un Art', 'Hitos de una Vida y un Arte', '人生と芸術の歩み', 'जीवन और कला के महत्वपूर्ण पड़ाव', 'Marcos de uma Vida e uma Arte', 'Вехи жизни и творчества', '人生与艺术的重要历程', 'Meilensteine eines Lebens und einer Kunst', 'Tappe di una Vita e di un’Arte', 'Σταθμοί μιας Ζωής και μιας Τέχνης', 'زندگی اور فن کے اہم سنگِ میل', 'نقاط عطف زندگی و هنر', 'Hayatta ve Sanatta Dönüm Noktaları', 'Qonaxên Girîng di Jiyan û Hunerê de', 'Tonggak Penting dalam Kehidupan dan Seni', 'Hatua Muhimu katika Maisha na Sanaa', '삶과 예술의 이정표')}
            </h3>
          </div>

          <div className="relative border-l-2 border-amber-200 pl-4 space-y-6 ml-2">
            {FATMA_BIOGRAPHY.milestones.map((ms, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-600 border-2 border-white shadow-xs group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {getMilestoneYear(ms.year)}
                </span>
                <h4 className="text-sm font-bold text-stone-900 mt-1">
                  {isAr ? ms.titleAr : isFr ? ms.titleFr : isEs ? ms.titleEs : isJa ? ms.titleJa : isHi ? ms.titleHi : isPt ? ms.titlePt : isRu ? ms.titleRu : isZh ? ms.titleZh : isDe ? ms.titleDe : isIt ? ms.titleIt : isEl ? ms.titleEl : isUr ? ms.titleUr : isFa ? ms.titleFa : isTr ? ms.titleTr : isKu ? ms.titleKu : isId ? ms.titleId : isSw ? ms.titleSw : isKo ? ms.titleKo : ms.titleEn}
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {isAr ? ms.descAr : isFr ? ms.descFr : isEs ? ms.descEs : isJa ? ms.descJa : isHi ? ms.descHi : isPt ? ms.descPt : isRu ? ms.descRu : isZh ? ms.descZh : isDe ? ms.descDe : isIt ? ms.descIt : isEl ? ms.descEl : isUr ? ms.descUr : isFa ? ms.descFa : isTr ? ms.descTr : isKu ? ms.descKu : isId ? ms.descId : isSw ? ms.descSw : isKo ? ms.descKo : ms.descEn}
                </p>
              </div>
            ))}
          </div>

          {/* Heritage archive card */}
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
            <h4 className="font-bold text-xs text-stone-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>{t('أرشيف الوصفات التراثية', 'Heritage Recipe Archive', 'Archive des Recettes Patrimoniales', 'Archivo de Recetas Patrimoniales', '伝統レシピのアーカイブ', 'पारंपरिक व्यंजनों का संग्रह', 'Arquivo de Receitas do Patrimônio', 'Архив традиционных рецептов', '传统食谱档案库', 'Archiv der traditionellen Rezepte', 'Archivio delle Ricette Tradizionali', 'Αρχείο Παραδοσιακών Συνταγών', 'ورثے کی ترکیبوں کا ذخیرہ', 'آرشیو دستورهای آشپزی سنتی', 'Geleneksel Tarif Arşivi', 'Arşîva Reçeteyên Kevneşopî', 'Arsip Resep Tradisional', 'Hifadhi ya Mapishi ya Jadi', '전통 요리 아카이브')}</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t(
                'يجمع هذا الأرشيف وصفات د. فاطمة القاوقجي وملاحظاتها التراثية لخدمة الطهاة والباحثين حول العالم.',
                'This open archive preserves Dr. Fatma Alkawokgy’s recipes and culinary notes for cooks and researchers everywhere.',
                'Cette archive ouverte préserve les recettes et notes culinaires du Dr Fatma Alkawokgy pour les cuisiniers et chercheurs du monde entier.',
                'Este archivo abierto preserva las recetas y notas culinarias de la Dra. Fatma Alkawokgy para cocineros e investigadores de todo el mundo.',
                'この公開アーカイブは、世界中の料理人や研究者のために、ファトマ・アルカウォクジ博士のレシピと料理に関する記録を保存しています。',
                'यह खुला संग्रह दुनिया भर के रसोइयों और शोधकर्ताओं के लिए डॉ. फातिमा अल-कावोक्जी के व्यंजनों और पाक-संबंधी टिप्पणियों को संरक्षित करता है।',
                'Este arquivo aberto preserva as receitas e anotações culinárias da Dra. Fatma Alkawokgy para cozinheiros e pesquisadores de todo o mundo.',
                'Этот открытый архив сохраняет рецепты и кулинарные записи д-ра Фатмы Алькавокджи для поваров и исследователей по всему миру.',
                '这个开放档案库保存了法特玛·卡沃克吉博士的食谱与烹饪笔记，供世界各地的厨师和研究者使用。',
                'Dieses offene Archiv bewahrt die Rezepte und kulinarischen Aufzeichnungen von Dr. Fatma Alkawokgy für Köche und Forscher auf der ganzen Welt.',
                'Questo archivio aperto conserva le ricette e gli appunti culinari della Dott.ssa Fatma Alkawokgy per cuochi e ricercatori di tutto il mondo.',
                'Αυτό το ανοιχτό αρχείο διαφυλάσσει τις συνταγές και τις γαστρονομικές σημειώσεις της Δρ. Φάτμα Αλκαβόκτζι για μάγειρες και ερευνητές σε όλο τον κόσμο.',
                'یہ کھلا ذخیرہ ڈاکٹر فاطمہ القاوقجی کی ترکیبوں اور کھانا پکانے کے نوٹس کو دنیا بھر کے باورچیوں اور محققین کے لیے محفوظ رکھتا ہے۔',
                'این آرشیو باز، دستورها و یادداشت‌های آشپزی دکتر فاطمه القاوقجی را برای آشپزان و پژوهشگران در سراسر جهان حفظ می‌کند.',
                'Bu açık arşiv, Dr. Fatma Alkawokgy’nin tariflerini ve mutfak notlarını dünyanın her yerindeki aşçılar ve araştırmacılar için korur.',
                'Ev arşîva vekirî reçete û notên metbexê yên Dr. Fatma Alkawokgy ji bo aşpêj û lêkolînerên li seranserê cîhanê diparêze.',
                'Arsip terbuka ini melestarikan resep dan catatan kuliner Dr. Fatma Alkawokgy bagi para juru masak dan peneliti di seluruh dunia.',
                'Hifadhi hii huria inahifadhi mapishi na maelezo ya upishi ya Dkt. Fatma Alkawokgy kwa ajili ya wapishi na watafiti duniani kote.',
                '이 공개 아카이브는 전 세계의 요리사와 연구자를 위해 파트마 알카우크지 박사의 레시피와 요리 노트를 보존합니다.'
              )}
            </p>
          </div>

          <button
            onClick={onOpenTribute}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 px-4 py-3 text-sm font-bold text-white hover:bg-amber-800 transition-colors"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>{t('اكتبوا تحية لفاطمة', 'Write a tribute to Fatma', 'Écrivez un hommage à Fatma', 'Escribe un homenaje a Fatma', 'ファトマ博士へメッセージを書く', 'फातिमा को श्रद्धांजलि लिखें', 'Escreva uma homenagem a Fatma', 'Напишите памятное послание Фатме', '为法特玛写一段悼念留言', 'Schreiben Sie eine Würdigung für Fatma', 'Scrivi un omaggio a Fatma', 'Γράψτε έναν φόρο τιμής στη Φάτμα', 'فاطمہ کے لیے خراجِ عقیدت لکھیں', 'برای فاطمه یادبودی بنویسید', 'Fatma için bir anma yazısı yazın', 'Ji bo Fatma nivîsareke bîranînê binivîse', 'Tulis kenangan untuk Fatma', 'Andika kumbukumbu kwa ajili ya Fatma', '파트마를 위한 추억 남기기')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
