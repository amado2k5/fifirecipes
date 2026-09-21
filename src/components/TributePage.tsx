import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, Send } from 'lucide-react';
import { SupportedLanguage } from '../types';

interface TributePageProps {
  lang: SupportedLanguage;
  onBack: () => void;
}

const TRIBUTE_RECIPIENT_EMAIL = 'ahamdy@gmail.com';

export const TributePage: React.FC<TributePageProps> = ({ lang, onBack }) => {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  const t = (ar: string, en: string, fr: string, es: string) => (isAr ? ar : isFr ? fr : isEs ? es : en);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const subject = t(
      `[fifi.cooking] تحية لروح فاطمة القاوقجي من ${name.trim()}`,
      `[fifi.cooking] A tribute to Dr. Fatma Alkawokgy from ${name.trim()}`,
      `[fifi.cooking] Un hommage à la mémoire du Dr Fatma Alkawokgy de la part de ${name.trim()}`,
      `[fifi.cooking] Un homenaje a la memoria de la Dra. Fatma Alkawokgy de parte de ${name.trim()}`
    );
    const bodyLines = [
      message.trim(),
      '',
      '---',
      t(`الاسم: ${name.trim()}`, `Name: ${name.trim()}`, `Nom : ${name.trim()}`, `Nombre: ${name.trim()}`),
    ];
    if (location.trim()) {
      bodyLines.push(t(`المدينة أو البلد: ${location.trim()}`, `City or country: ${location.trim()}`, `Ville ou pays : ${location.trim()}`, `Ciudad o país: ${location.trim()}`));
    }
    const body = bodyLines.join('\n');

    window.location.href = `mailto:${TRIBUTE_RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-amber-800 transition-colors"
      >
        {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
        <span>{t('العودة إلى صفحة فاطمة', 'Back to Fatma’s story', 'Retour à l’histoire de Fatma', 'Volver a la historia de Fatma')}</span>
      </button>

      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Heart className="w-4 h-4 fill-current" />
          <span>{t('كتاب الذكريات', 'A Book of Remembrance', 'Un Livre de Souvenirs', 'Un Libro de Recuerdos')}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
          {t('اكتبوا تحية لروح فاطمة', 'Leave a tribute to Fatma', 'Laissez un hommage à Fatma', 'Deja un homenaje a Fatma')}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
          {t(
            'شاركونا ذكرى أو كلمة محبة أو قصة عن أثر د. فاطمة القاوقجي في حياتكم. سيتم إرسال تحيتك عبر البريد الإلكتروني.',
            'Share a memory, a word of love, or a story about the mark Dr. Fatma Alkawokgy left on your life. Your tribute will be sent by email.',
            'Partagez un souvenir, un mot d’affection ou une histoire sur l’empreinte laissée par le Dr Fatma Alkawokgy dans votre vie. Votre hommage sera envoyé par e-mail.',
            'Comparte un recuerdo, una palabra de cariño o una historia sobre la huella que la Dra. Fatma Alkawokgy dejó en tu vida. Tu homenaje se enviará por correo electrónico.'
          )}
        </p>
      </header>

      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-7 shadow-sm space-y-4">
          <div>
            <label htmlFor="tribute-name" className="block text-sm font-bold text-stone-800 mb-1.5">
              {t('الاسم', 'Your name', 'Votre nom', 'Tu nombre')}
            </label>
            <input id="tribute-name" value={name} onChange={event => setName(event.target.value)} required maxLength={80} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <div>
            <label htmlFor="tribute-location" className="block text-sm font-bold text-stone-800 mb-1.5">
              {t('المدينة أو البلد (اختياري)', 'City or country (optional)', 'Ville ou pays (facultatif)', 'Ciudad o país (opcional)')}
            </label>
            <input id="tribute-location" value={location} onChange={event => setLocation(event.target.value)} maxLength={80} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <div>
            <label htmlFor="tribute-message" className="block text-sm font-bold text-stone-800 mb-1.5">
              {t('تحيتك', 'Your tribute', 'Votre hommage', 'Tu homenaje')}
            </label>
            <textarea id="tribute-message" value={message} onChange={event => setMessage(event.target.value)} required maxLength={1200} rows={7} className="w-full resize-y rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm leading-relaxed focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 px-4 py-3 text-sm font-bold text-white hover:bg-amber-800">
            <Send className="w-4 h-4" />
            <span>{t('إرسال التحية بالبريد الإلكتروني', 'Send tribute by email', 'Envoyer l’hommage par e-mail', 'Enviar homenaje por correo')}</span>
          </button>
          {submitted && (
            <p className="text-sm font-semibold text-emerald-700">
              {t(
                'تم فتح برنامج البريد الإلكتروني لديك برسالة جاهزة — أرسلها لإتمام مشاركة تحيتك.',
                'Your email app should have opened with a ready message — send it to share your tribute.',
                'Votre application e-mail devrait s’être ouverte avec un message prêt — envoyez-le pour partager votre hommage.',
                'Tu aplicación de correo debería haberse abierto con un mensaje listo — envíalo para compartir tu homenaje.'
              )}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
