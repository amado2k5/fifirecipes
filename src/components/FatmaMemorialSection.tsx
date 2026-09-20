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
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const getMilestoneYear = (year: string) => {
    if (isAr) return year;
    if (year === 'حوالي 1961') return 'c. 1961';
    if (year === '8 مايو 2026') return 'May 8, 2026';
    return year;
  };

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
            src="/logo-transparent.png"
            alt={isAr ? 'شعار د. فاطمة القاوقجي' : 'Dr. Fatma Alkawokgy logo'}
            className="w-28 h-28 sm:w-36 sm:h-36 object-cover object-center rounded-2xl bg-white/90 p-2 shadow-lg mb-5"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
            <Music className="w-3.5 h-3.5" />
            <span>{isAr ? '1943 – 2026 • كلية التربية الموسيقية بالزمالك' : '1943 – 2026 • Faculty of Music Education, Zamalek, Cairo, Egypt'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {isAr ? FATMA_BIOGRAPHY.nameAr : FATMA_BIOGRAPHY.nameEn}
          </h1>

          <p className="text-base sm:text-xl text-amber-100/90 font-light leading-relaxed mb-6">
            {isAr ? FATMA_BIOGRAPHY.titleAr : FATMA_BIOGRAPHY.titleEn}
          </p>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8">
            {isAr ? FATMA_BIOGRAPHY.taglineAr : FATMA_BIOGRAPHY.taglineEn}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-800 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="font-bold text-white">1943 – 2026</div>
                <div className="text-[11px] text-stone-400">{isAr ? 'رحلة العطاء والأثر' : 'A life of purpose and impact'}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Building className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="font-bold text-white">{isAr ? 'تربية موسيقية - الزمالك' : 'Music Education - Zamalek'}</div>
                <div className="text-[11px] text-stone-400">{isAr ? 'أستاذة العزف على البيانو' : 'Piano Professor'}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="font-bold text-white">{isAr ? '20 عاماً من البحث' : '20 Years of Research'}</div>
                <div className="text-[11px] text-stone-400">{isAr ? 'تدوين وتحقيق الوصفات' : 'Recipe documentation and preservation'}</div>
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
            <span>{isAr ? 'فلسفة د. فاطمة: الموسيقى ونغمات الطهي' : "Dr. Fatma's Philosophy: Music & Culinary Harmony"}</span>
          </div>
          <blockquote className="text-base sm:text-xl font-serif text-amber-950 italic leading-relaxed">
            "{isAr ? FATMA_BIOGRAPHY.philosophyAr : FATMA_BIOGRAPHY.philosophyEn}"
          </blockquote>
          <div className="mt-4 text-xs font-bold text-amber-800">
            — {isAr ? FATMA_BIOGRAPHY.nameAr : FATMA_BIOGRAPHY.nameEn}
          </div>
        </div>
      </div>

      {/* Main Biography Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-stone-200 pb-3">
            <BookOpen className="w-5 h-5 text-amber-700" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              {isAr ? 'السيرة التوثيقية ومسيرة جمع التراث' : 'The Life & Legacy of Dr. Fatma'}
            </h2>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            {(isAr ? FATMA_BIOGRAPHY.biographyAr : FATMA_BIOGRAPHY.biographyEn).map((paragraph, idx) => (
              <p key={idx} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Memorial Plaque Card */}
          <div className="p-6 bg-stone-900 text-amber-100 rounded-2xl border border-amber-900/50 shadow-md">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>{isAr ? 'لوحة الوفاء والتخليد' : 'Memorial Dedication Plaque'}</span>
            </div>
            <p className="text-sm sm:text-base font-serif italic leading-relaxed text-stone-200">
              "{isAr ? FATMA_BIOGRAPHY.memorialPlaqueAr : FATMA_BIOGRAPHY.memorialPlaqueEn}"
            </p>
          </div>
        </div>

        {/* Milestones & Academic Highlights */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 border-b border-stone-200 pb-3">
            <Award className="w-5 h-5 text-amber-700" />
            <h3 className="text-lg font-bold text-stone-900">
              {isAr ? 'محطات مضيئة' : 'Milestones in Life & Art'}
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
                  {isAr ? ms.titleAr : ms.titleEn}
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {isAr ? ms.descAr : ms.descEn}
                </p>
              </div>
            ))}
          </div>

          {/* Heritage archive card */}
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
            <h4 className="font-bold text-xs text-stone-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>{isAr ? 'أرشيف الوصفات التراثية' : 'Heritage Recipe Archive'}</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isAr
                ? 'يجمع هذا الأرشيف وصفات د. فاطمة القاوقجي وملاحظاتها التراثية لخدمة الطهاة والباحثين حول العالم.'
                : 'This open archive preserves Dr. Fatma Alkawokgy’s recipes and culinary notes for cooks and researchers everywhere.'}
            </p>
          </div>

          <button
            onClick={onOpenTribute}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 px-4 py-3 text-sm font-bold text-white hover:bg-amber-800 transition-colors"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>{isAr ? 'اكتبوا تحية لفاطمة' : 'Write a tribute to Fatma'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
