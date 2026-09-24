import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, Send } from 'lucide-react';
import { SupportedLanguage } from '../types';

interface TributePageProps {
  lang: SupportedLanguage;
  onBack: () => void;
}

const TRIBUTE_RECIPIENT_EMAIL = 'ahamdy@gmail.com';

export const TributePage: React.FC<TributePageProps> = ({ lang, onBack }) => {
  const isRtl = lang === 'ar' || lang === 'fa' || lang === 'ur';
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
      `[fifi.cooking] Un homenaje a la memoria de la Dra. Fatma Alkawokgy de parte de ${name.trim()}`,
      `[fifi.cooking] ${name.trim()}様からファトマ・アルカウォクジ博士への追悼メッセージ`,
      `[fifi.cooking] डॉ. फ़ातिमा अलक़ावुक्जी की याद में ${name.trim()} की ओर से एक श्रद्धांजलि`,
      `[fifi.cooking] Uma homenagem à Dra. Fatma Alkawokgy de ${name.trim()}`,
      `[fifi.cooking] Дань памяти д-ру Фатме Алькавокги от ${name.trim()}`,
      `[fifi.cooking] 来自${name.trim()}对法特玛·卡沃克吉博士的悼念`,
      `[fifi.cooking] Eine Hommage an Dr. Fatma Alkawokgy von ${name.trim()}`,
      `[fifi.cooking] Un omaggio alla Dott.ssa Fatma Alkawokgy da ${name.trim()}`,
      `[fifi.cooking] Ένας φόρος τιμής στη μνήμη της Δρ. Fatma Alkawokgy από ${name.trim()}`,
      `[fifi.cooking] ${name.trim()} کی جانب سے ڈاکٹر فاطمہ القاوقجی کو خراجِ عقیدت`,
      `[fifi.cooking] یادبودی برای دکتر فاطمه القاوقجی از طرف ${name.trim()}`,
      `[fifi.cooking] ${name.trim()} tarafından Dr. Fatma Alkawokgy için bir anma yazısı`,
      `[fifi.cooking] Nivîsareke bîranînê ji bo Dr. Fatma Alkawokgy ji aliyê ${name.trim()} ve`,
      `[fifi.cooking] Kenangan untuk Dr. Fatma Alkawokgy dari ${name.trim()}`,
      `[fifi.cooking] Kumbukumbu kwa ajili ya Dkt. Fatma Alkawokgy kutoka kwa ${name.trim()}`,
      `[fifi.cooking] ${name.trim()} 님이 남긴 파트마 알카우크지 박사에 대한 추억`
    );
    const bodyLines = [
      message.trim(),
      '',
      '---',
      t(`الاسم: ${name.trim()}`, `Name: ${name.trim()}`, `Nom : ${name.trim()}`, `Nombre: ${name.trim()}`, `お名前: ${name.trim()}`, `नाम: ${name.trim()}`, `Nome: ${name.trim()}`, `Имя: ${name.trim()}`, `姓名：${name.trim()}`, `Name: ${name.trim()}`, `Nome: ${name.trim()}`, `Όνομα: ${name.trim()}`, `نام: ${name.trim()}`, `نام: ${name.trim()}`, `Ad: ${name.trim()}`, `Nav: ${name.trim()}`, `Nama: ${name.trim()}`, `Jina: ${name.trim()}`, `이름: ${name.trim()}`),
    ];
    if (location.trim()) {
      bodyLines.push(t(`المدينة أو البلد: ${location.trim()}`, `City or country: ${location.trim()}`, `Ville ou pays : ${location.trim()}`, `Ciudad o país: ${location.trim()}`, `都市または国: ${location.trim()}`, `शहर या देश: ${location.trim()}`, `Cidade ou país: ${location.trim()}`, `Город или страна: ${location.trim()}`, `城市或国家：${location.trim()}`, `Stadt oder Land: ${location.trim()}`, `Città o paese: ${location.trim()}`, `Πόλη ή χώρα: ${location.trim()}`, `شہر یا ملک: ${location.trim()}`, `شهر یا کشور: ${location.trim()}`, `Şehir veya ülke: ${location.trim()}`, `Bajar an welat: ${location.trim()}`, `Kota atau negara: ${location.trim()}`, `Mji au nchi: ${location.trim()}`, `도시 또는 국가: ${location.trim()}`));
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
        {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
        <span>{t('العودة إلى صفحة فاطمة', 'Back to Fatma’s story', 'Retour à l’histoire de Fatma', 'Volver a la historia de Fatma', 'ファトマ博士の物語に戻る', 'फ़ातिमा की कहानी पर वापस जाएं', 'Voltar à história de Fatma', 'Вернуться к истории Фатмы', '返回法特玛的故事', 'Zurück zu Fatmas Geschichte', 'Torna alla storia di Fatma', 'Επιστροφή στην ιστορία της Fatma', 'فاطمہ کی کہانی پر واپس جائیں', 'بازگشت به داستان فاطمه', 'Fatma’nın hikâyesine dön', 'Vegere çîroka Fatma', 'Kembali ke kisah Fatma', 'Rudi kwenye hadithi ya Fatma', '파트마의 이야기로 돌아가기')}</span>
      </button>

      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Heart className="w-4 h-4 fill-current" />
          <span>{t('كتاب الذكريات', 'A Book of Remembrance', 'Un Livre de Souvenirs', 'Un Libro de Recuerdos', '追悼のメッセージ集', 'यादों की किताब', 'Um Livro de Memórias', 'Книга Памяти', '追忆之书', 'Ein Buch der Erinnerung', 'Un Libro del Ricordo', 'Ένα Βιβλίο Μνήμης', 'یادوں کی کتاب', 'دفتر یادبود', 'Anı Defteri', 'Deftera Bîranînan', 'Buku Kenangan', 'Kitabu cha Kumbukumbu', '추억의 방명록')}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
          {t('اكتبوا تحية لروح فاطمة', 'Leave a tribute to Fatma', 'Laissez un hommage à Fatma', 'Deja un homenaje a Fatma', 'ファトマ博士への追悼メッセージ', 'फ़ातिमा को श्रद्धांजलि लिखें', 'Deixe uma homenagem para Fatma', 'Оставьте дань памяти Фатме', '为法特玛留言悼念', 'Hinterlassen Sie eine Hommage an Fatma', 'Lascia un omaggio a Fatma', 'Αφήστε έναν φόρο τιμής στη Fatma', 'فاطمہ کے لیے خراجِ عقیدت پیش کریں', 'برای فاطمه یادبودی بگذارید', 'Fatma için bir anma yazısı bırakın', 'Ji bo Fatma nivîsareke bîranînê bihêle', 'Tinggalkan kenangan untuk Fatma', 'Acha kumbukumbu kwa ajili ya Fatma', '파트마를 위한 추억 남기기')}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
          {t(
            'شاركونا ذكرى أو كلمة محبة أو قصة عن أثر د. فاطمة القاوقجي في حياتكم. سيتم إرسال تحيتك عبر البريد الإلكتروني.',
            'Share a memory, a word of love, or a story about the mark Dr. Fatma Alkawokgy left on your life. Your tribute will be sent by email.',
            'Partagez un souvenir, un mot d’affection ou une histoire sur l’empreinte laissée par le Dr Fatma Alkawokgy dans votre vie. Votre hommage sera envoyé par e-mail.',
            'Comparte un recuerdo, una palabra de cariño o una historia sobre la huella que la Dra. Fatma Alkawokgy dejó en tu vida. Tu homenaje se enviará por correo electrónico.',
            'ファトマ・アルカウォクジ博士があなたの人生に残した思い出や、感謝の言葉、エピソードをお寄せください。メッセージはメールで送信されます。',
            'डॉ. फ़ातिमा अलक़ावुक्जी ने आपके जीवन पर जो छाप छोड़ी है, उसके बारे में कोई याद, स्नेह भरे शब्द या कहानी साझा करें। आपकी श्रद्धांजलि ईमेल के ज़रिए भेजी जाएगी।',
            'Compartilhe uma lembrança, uma palavra de carinho ou uma história sobre a marca que a Dra. Fatma Alkawokgy deixou em sua vida. Sua homenagem será enviada por e-mail.',
            'Поделитесь воспоминанием, тёплым словом или историей о том, какой след д-р Фатма Алькавокги оставила в вашей жизни. Ваше сообщение будет отправлено по электронной почте.',
            '分享一段回忆、一句深情的话，或法特玛·卡沃克吉博士对您人生留下印记的故事。您的悼念将通过电子邮件发送。',
            'Teilen Sie eine Erinnerung, ein liebevolles Wort oder eine Geschichte über den Eindruck, den Dr. Fatma Alkawokgy in Ihrem Leben hinterlassen hat. Ihre Hommage wird per E-Mail versendet.',
            'Condividi un ricordo, una parola d’affetto o una storia sull’impronta che la Dott.ssa Fatma Alkawokgy ha lasciato nella tua vita. Il tuo omaggio sarà inviato via e-mail.',
            'Μοιραστείτε μια ανάμνηση, μια λέξη αγάπης ή μια ιστορία για το αποτύπωμα που άφησε η Δρ. Fatma Alkawokgy στη ζωή σας. Ο φόρος τιμής σας θα σταλεί μέσω e-mail.',
            'کوئی یاد، محبت بھرے الفاظ، یا کوئی واقعہ شیئر کریں کہ ڈاکٹر فاطمہ القاوقجی نے آپ کی زندگی پر کیا نقش چھوڑا۔ آپ کا پیغام ای میل کے ذریعے بھیجا جائے گا۔',
            'خاطره‌ای، سخنی از سر مهر یا داستانی از ردی که دکتر فاطمه القاوقجی بر زندگی شما گذاشت بنویسید. پیام شما با ایمیل ارسال می‌شود.',
            'Dr. Fatma Alkawokgy’nin hayatınızda bıraktığı iz hakkında bir anı, sevgi dolu bir söz ya da bir hikâye paylaşın. Mesajınız e-posta ile gönderilecektir.',
            'Bîranînek, gotineke bi hezkirin an çîrokek li ser şopa ku Dr. Fatma Alkawokgy di jiyana te de hiştiye parve bike. Peyama te dê bi e-nameyê were şandin.',
            'Bagikan kenangan, ucapan penuh kasih, atau kisah tentang jejak yang ditinggalkan Dr. Fatma Alkawokgy dalam hidup Anda. Pesan Anda akan dikirim melalui email.',
            'Shiriki kumbukumbu, neno la upendo, au hadithi kuhusu alama ambayo Dkt. Fatma Alkawokgy aliacha katika maisha yako. Ujumbe wako utatumwa kwa barua pepe.',
            '파트마 알카우크지 박사가 당신의 삶에 남긴 흔적에 대한 추억, 사랑의 말, 또는 이야기를 나눠 주세요. 메시지는 이메일로 전송됩니다.'
          )}
        </p>
      </header>

      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-7 shadow-sm space-y-4">
          <div>
            <label htmlFor="tribute-name" className="block text-sm font-bold text-stone-800 mb-1.5">
              {t('الاسم', 'Your name', 'Votre nom', 'Tu nombre', 'お名前', 'आपका नाम', 'Seu nome', 'Ваше имя', '您的姓名', 'Ihr Name', 'Il tuo nome', 'Το όνομά σας', 'آپ کا نام', 'نام شما', 'Adınız', 'Navê te', 'Nama Anda', 'Jina lako', '이름')}
            </label>
            <input id="tribute-name" value={name} onChange={event => setName(event.target.value)} required maxLength={80} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <div>
            <label htmlFor="tribute-location" className="block text-sm font-bold text-stone-800 mb-1.5">
              {t('المدينة أو البلد (اختياري)', 'City or country (optional)', 'Ville ou pays (facultatif)', 'Ciudad o país (opcional)', '都市または国(任意)', 'शहर या देश (वैकल्पिक)', 'Cidade ou país (opcional)', 'Город или страна (необязательно)', '城市或国家（选填）', 'Stadt oder Land (optional)', 'Città o paese (facoltativo)', 'Πόλη ή χώρα (προαιρετικό)', 'شہر یا ملک (اختیاری)', 'شهر یا کشور (اختیاری)', 'Şehir veya ülke (isteğe bağlı)', 'Bajar an welat (vebijarkî)', 'Kota atau negara (opsional)', 'Mji au nchi (si lazima)', '도시 또는 국가 (선택)')}
            </label>
            <input id="tribute-location" value={location} onChange={event => setLocation(event.target.value)} maxLength={80} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <div>
            <label htmlFor="tribute-message" className="block text-sm font-bold text-stone-800 mb-1.5">
              {t('تحيتك', 'Your tribute', 'Votre hommage', 'Tu homenaje', 'メッセージ', 'आपकी श्रद्धांजलि', 'Sua homenagem', 'Ваше сообщение', '您的悼念寄语', 'Ihre Hommage', 'Il tuo omaggio', 'Ο φόρος τιμής σας', 'آپ کا خراجِ عقیدت', 'یادبود شما', 'Anma yazınız', 'Nivîsara te ya bîranînê', 'Kenangan Anda', 'Kumbukumbu yako', '나의 추억')}
            </label>
            <textarea id="tribute-message" value={message} onChange={event => setMessage(event.target.value)} required maxLength={1200} rows={7} className="w-full resize-y rounded-xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm leading-relaxed focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
          </div>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 px-4 py-3 text-sm font-bold text-white hover:bg-amber-800">
            <Send className="w-4 h-4" />
            <span>{t('إرسال التحية بالبريد الإلكتروني', 'Send tribute by email', 'Envoyer l’hommage par e-mail', 'Enviar homenaje por correo', 'メールで送信する', 'ईमेल से श्रद्धांजलि भेजें', 'Enviar homenagem por e-mail', 'Отправить дань памяти по эл. почте', '通过邮件发送悼念', 'Hommage per E-Mail senden', 'Invia omaggio via e-mail', 'Αποστολή φόρου τιμής μέσω e-mail', 'ای میل کے ذریعے بھیجیں', 'ارسال یادبود با ایمیل', 'E-posta ile gönder', 'Bi e-nameyê bişîne', 'Kirim melalui email', 'Tuma kwa barua pepe', '이메일로 보내기')}</span>
          </button>
          {submitted && (
            <p className="text-sm font-semibold text-emerald-700">
              {t(
                'تم فتح برنامج البريد الإلكتروني لديك برسالة جاهزة — أرسلها لإتمام مشاركة تحيتك.',
                'Your email app should have opened with a ready message — send it to share your tribute.',
                'Votre application e-mail devrait s’être ouverte avec un message prêt — envoyez-le pour partager votre hommage.',
                'Tu aplicación de correo debería haberse abierto con un mensaje listo — envíalo para compartir tu homenaje.',
                'メールアプリにメッセージが準備された状態で開いているはずです。送信してメッセージを届けてください。',
                'आपका ईमेल ऐप एक तैयार संदेश के साथ खुल गया होगा — अपनी श्रद्धांजलि साझा करने के लिए उसे भेज दें।',
                'Seu aplicativo de e-mail deve ter aberto com uma mensagem pronta — envie-a para compartilhar sua homenagem.',
                'Ваше почтовое приложение должно было открыться с готовым письмом — отправьте его, чтобы поделиться своей данью памяти.',
                '您的邮件应用应已打开并准备好一封邮件——发送即可分享您的悼念。',
                'Ihre E-Mail-App sollte sich mit einer vorbereiteten Nachricht geöffnet haben — senden Sie sie, um Ihre Hommage zu teilen.',
                'La tua app di posta dovrebbe essersi aperta con un messaggio pronto — inviala per condividere il tuo omaggio.',
                'Η εφαρμογή email σας θα πρέπει να έχει ανοίξει με ένα έτοιμο μήνυμα — στείλτε το για να μοιραστείτε τον φόρο τιμής σας.',
                'آپ کی ای میل ایپ ایک تیار پیغام کے ساتھ کھل گئی ہوگی — اپنا خراجِ عقیدت شیئر کرنے کے لیے اسے بھیج دیں۔',
                'برنامه ایمیل شما باید با یک پیام آماده باز شده باشد — برای به اشتراک گذاشتن یادبود خود آن را ارسال کنید.',
                'E-posta uygulamanız hazır bir mesajla açılmış olmalı — anma yazınızı paylaşmak için gönderin.',
                'Divê sepana te ya e-nameyê bi peyameke amade vebûbe — ji bo parvekirina nivîsara xwe ya bîranînê wê bişîne.',
                'Aplikasi email Anda seharusnya terbuka dengan pesan yang sudah siap — kirimkan untuk membagikan kenangan Anda.',
                'Programu yako ya barua pepe inapaswa kuwa imefunguka na ujumbe tayari — utume ili kushiriki kumbukumbu yako.',
                '이메일 앱이 메시지가 준비된 상태로 열렸을 것입니다. 전송하여 추억을 나눠 주세요.'
              )}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
