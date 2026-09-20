import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, Heart, Quote, Send } from 'lucide-react';
import { SupportedLanguage, Tribute } from '../types';
import { addTribute, subscribeToTributes } from '../services/tributeService';

interface TributePageProps {
  lang: SupportedLanguage;
  onBack: () => void;
}

export const TributePage: React.FC<TributePageProps> = ({ lang, onBack }) => {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => subscribeToTributes(setTributes), []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      await addTribute({
        name: name.trim(),
        location: location.trim() || undefined,
        message: message.trim(),
        language: lang
      });
      setName('');
      setLocation('');
      setMessage('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-amber-800 transition-colors"
      >
        {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
        <span>{isAr ? 'العودة إلى صفحة فاطمة' : 'Back to Fatma’s story'}</span>
      </button>

      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Heart className="w-4 h-4 fill-current" />
          <span>{isAr ? 'كتاب الذكريات' : 'A Book of Remembrance'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
          {isAr ? 'اكتبوا تحية لروح فاطمة' : 'Leave a tribute to Fatma'}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
          {isAr
            ? 'شاركونا ذكرى أو كلمة محبة أو قصة عن أثر د. فاطمة القاوقجي في حياتكم.'
            : 'Share a memory, a word of love, or a story about the mark Dr. Fatma Alkawokgy left on your life.'}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 items-start">
        <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-7 shadow-sm space-y-4">
          <div>
            <label htmlFor="tribute-name" className="block text-sm font-bold text-stone-800 mb-1.5">
              {isAr ? 'الاسم' : 'Your name'}
            </label>
            <input id="tribute-name" value={name} onChange={event => setName(event.target.value)} required maxLength={80} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <div>
            <label htmlFor="tribute-location" className="block text-sm font-bold text-stone-800 mb-1.5">
              {isAr ? 'المدينة أو البلد (اختياري)' : 'City or country (optional)'}
            </label>
            <input id="tribute-location" value={location} onChange={event => setLocation(event.target.value)} maxLength={80} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <div>
            <label htmlFor="tribute-message" className="block text-sm font-bold text-stone-800 mb-1.5">
              {isAr ? 'تحيتك' : 'Your tribute'}
            </label>
            <textarea id="tribute-message" value={message} onChange={event => setMessage(event.target.value)} required maxLength={1200} rows={7} className="w-full resize-y rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm leading-relaxed focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 px-4 py-3 text-sm font-bold text-white hover:bg-amber-800 disabled:opacity-60">
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? (isAr ? 'جارٍ النشر...' : 'Posting...') : (isAr ? 'نشر التحية' : 'Post tribute')}</span>
          </button>
          {submitted && <p className="text-sm font-semibold text-emerald-700">{isAr ? 'تم نشر تحيتك. شكراً لمشاركتها.' : 'Your tribute has been posted. Thank you for sharing it.'}</p>}
        </form>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-stone-900">{isAr ? 'تحيات الزوار' : 'Tributes from visitors'}</h2>
          {tributes.length === 0 && <p className="rounded-2xl border border-dashed border-stone-300 p-6 text-sm text-stone-500">{isAr ? 'كن أول من يكتب تحية.' : 'Be the first to leave a tribute.'}</p>}
          {tributes.map(tribute => (
            <article key={tribute.id} className="relative rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <Quote className="absolute top-4 right-4 w-7 h-7 text-amber-200" />
              <p className="pr-8 text-sm sm:text-base leading-relaxed text-stone-700 whitespace-pre-wrap">{tribute.message}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-bold text-stone-900">{tribute.name}</span>
                {tribute.location && <><span>•</span><span>{tribute.location}</span></>}
                <span>•</span><Clock className="w-3.5 h-3.5" /><time dateTime={tribute.createdAt}>{new Date(tribute.createdAt).toLocaleDateString(lang)}</time>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};