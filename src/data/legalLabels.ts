import type { SupportedLanguage } from '../types';

// Footer links to the legal pages in public/ (terms.html, privacy.html, disclaimer.html, copyright.html),
// and the one-line rights notice that sits above them. The pages themselves are in English with an Arabic summary.
export interface LegalLabels {
  terms: string;
  privacy: string;
  disclaimer: string;
  copyright: string;
  /** Replaces the old "free for anyone, no restrictions" line, which was wrong for the credited third-party collections. */
  rights: string;
}

export const LEGAL_PAGES: { key: Exclude<keyof LegalLabels, 'rights'>; href: string }[] = [
  { key: 'terms', href: 'terms.html' },
  { key: 'privacy', href: 'privacy.html' },
  { key: 'disclaimer', href: 'disclaimer.html' },
  { key: 'copyright', href: 'copyright.html' },
];

export const LEGAL_LABELS: Record<SupportedLanguage, LegalLabels> = {
  ar: { terms: 'شروط الاستخدام', privacy: 'الخصوصية', disclaimer: 'إخلاء المسؤولية', copyright: 'حقوق النشر', rights: 'وصفات أرشيف عائلة الدكتورة فاطمة القاوقجي متاحة لإعادة الاستخدام بلا قيود (CC0)؛ أما الوصفات المنسوبة إلى كتب أو قنوات أو مواقع أخرى فحقوقها لأصحابها.' },
  en: { terms: 'Terms of use', privacy: 'Privacy', disclaimer: 'Disclaimer', copyright: 'Copyright', rights: "Dr. Fatma Alkawokgy's family recipes are free for anyone to reuse (CC0); recipes credited to other books, channels or websites belong to their owners." },
  fr: { terms: "Conditions d'utilisation", privacy: 'Confidentialité', disclaimer: 'Avertissement', copyright: "Droits d'auteur", rights: "Les recettes familiales du Dr Fatma Alkawokgy sont libres de réutilisation (CC0) ; les recettes attribuées à d'autres livres, chaînes ou sites appartiennent à leurs auteurs." },
  es: { terms: 'Condiciones de uso', privacy: 'Privacidad', disclaimer: 'Aviso legal', copyright: 'Derechos de autor', rights: 'Las recetas familiares de la Dra. Fatma Alkawokgy son de libre reutilización (CC0); las recetas atribuidas a otros libros, canales o sitios pertenecen a sus autores.' },
  ja: { terms: '利用規約', privacy: 'プライバシー', disclaimer: '免責事項', copyright: '著作権', rights: 'ファトマ・アルカウォクジ博士の家庭のレシピは誰でも自由に再利用できます（CC0）。他の書籍・チャンネル・サイトに由来するレシピの権利はそれぞれの権利者に帰属します。' },
  hi: { terms: 'उपयोग की शर्तें', privacy: 'गोपनीयता', disclaimer: 'अस्वीकरण', copyright: 'कॉपीराइट', rights: 'डॉ. फातिमा अलकावोकजी के पारिवारिक व्यंजन कोई भी दोबारा उपयोग कर सकता है (CC0); अन्य किताबों, चैनलों या वेबसाइटों से लिए गए व्यंजनों के अधिकार उनके स्वामियों के हैं।' },
  pt: { terms: 'Termos de uso', privacy: 'Privacidade', disclaimer: 'Aviso legal', copyright: 'Direitos autorais', rights: 'As receitas de família da Dra. Fatma Alkawokgy são de livre reutilização (CC0); as receitas creditadas a outros livros, canais ou sites pertencem aos seus autores.' },
  ru: { terms: 'Условия использования', privacy: 'Конфиденциальность', disclaimer: 'Отказ от ответственности', copyright: 'Авторские права', rights: 'Семейные рецепты д-ра Фатмы Алькавокджи можно свободно использовать (CC0); права на рецепты из других книг, каналов и сайтов принадлежат их владельцам.' },
  zh: { terms: '使用条款', privacy: '隐私', disclaimer: '免责声明', copyright: '版权', rights: '法特玛·卡沃克吉博士的家庭食谱可供任何人自由再利用（CC0）；注明来自其他书籍、频道或网站的食谱，其权利归原作者所有。' },
  de: { terms: 'Nutzungsbedingungen', privacy: 'Datenschutz', disclaimer: 'Haftungsausschluss', copyright: 'Urheberrecht', rights: 'Die Familienrezepte von Dr. Fatma Alkawokgy sind frei wiederverwendbar (CC0); Rezepte, die anderen Büchern, Kanälen oder Websites zugeschrieben sind, gehören ihren Rechteinhabern.' },
  it: { terms: "Termini d'uso", privacy: 'Privacy', disclaimer: 'Avvertenze', copyright: "Diritto d'autore", rights: 'Le ricette di famiglia della Dott.ssa Fatma Alkawokgy sono liberamente riutilizzabili (CC0); le ricette attribuite ad altri libri, canali o siti appartengono ai rispettivi titolari.' },
  el: { terms: 'Όροι χρήσης', privacy: 'Απόρρητο', disclaimer: 'Αποποίηση ευθύνης', copyright: 'Πνευματικά δικαιώματα', rights: 'Οι οικογενειακές συνταγές της Δρ. Φάτμα Αλκαουόκτζι είναι ελεύθερες για επαναχρησιμοποίηση (CC0)· οι συνταγές που αποδίδονται σε άλλα βιβλία, κανάλια ή ιστότοπους ανήκουν στους δικαιούχους τους.' },
  ur: { terms: 'شرائطِ استعمال', privacy: 'رازداری', disclaimer: 'دستبرداری', copyright: 'کاپی رائٹ', rights: 'ڈاکٹر فاطمہ القاوقجی کی خاندانی تراکیب ہر کوئی آزادانہ دوبارہ استعمال کر سکتا ہے (CC0)؛ دوسری کتابوں، چینلز یا ویب سائٹس سے منسوب تراکیب کے حقوق ان کے مالکان کے پاس ہیں۔' },
  fa: { terms: 'شرایط استفاده', privacy: 'حریم خصوصی', disclaimer: 'سلب مسئولیت', copyright: 'حق نشر', rights: 'دستورهای خانوادگی دکتر فاطمه القاوقجی برای استفادهٔ دوباره آزاد است (CC0)؛ حقوق دستورهایی که به کتاب‌ها، کانال‌ها یا وب‌سایت‌های دیگر نسبت داده شده‌اند از آنِ صاحبانشان است.' },
  tr: { terms: 'Kullanım koşulları', privacy: 'Gizlilik', disclaimer: 'Sorumluluk reddi', copyright: 'Telif hakkı', rights: "Dr. Fatma Alkawokgy'nin aile tarifleri herkesin serbestçe yeniden kullanımına açıktır (CC0); başka kitaplara, kanallara veya sitelere atfedilen tariflerin hakları sahiplerine aittir." },
  ku: { terms: 'Mercên bikaranînê', privacy: 'Nepenî', disclaimer: 'Redkirina berpirsiyariyê', copyright: 'Mafê weşanê', rights: 'Reçeteyên malbatî yên Dr. Fatma Alkawokgy ji bo her kesî azad in ku ji nû ve bikar bînin (CC0); mafê reçeteyên ku ji pirtûk, kanal an malperên din hatine girtin aîdî xwediyên wan e.' },
  id: { terms: 'Ketentuan penggunaan', privacy: 'Privasi', disclaimer: 'Penafian', copyright: 'Hak cipta', rights: 'Resep keluarga Dr. Fatma Alkawokgy bebas digunakan ulang oleh siapa pun (CC0); resep yang dikreditkan ke buku, kanal, atau situs lain adalah milik pemiliknya.' },
  sw: { terms: 'Masharti ya matumizi', privacy: 'Faragha', disclaimer: 'Kanusho', copyright: 'Hakimiliki', rights: 'Mapishi ya familia ya Dkt. Fatma Alkawokgy ni huru kwa yeyote kuyatumia tena (CC0); mapishi yanayotajwa kutoka vitabu, chaneli au tovuti nyingine ni mali ya wamiliki wake.' },
  ko: { terms: '이용 약관', privacy: '개인정보', disclaimer: '면책 조항', copyright: '저작권', rights: '파트마 알카우크지 박사의 가족 레시피는 누구나 자유롭게 재사용할 수 있습니다(CC0). 다른 책, 채널, 웹사이트에서 온 레시피의 권리는 해당 권리자에게 있습니다.' },
  nl: { terms: 'Gebruiksvoorwaarden', privacy: 'Privacy', disclaimer: 'Disclaimer', copyright: 'Auteursrecht', rights: 'De familierecepten van Dr. Fatma Alkawokgy zijn vrij herbruikbaar (CC0); recepten die aan andere boeken, kanalen of websites worden toegeschreven, behoren toe aan hun rechthebbenden.' },
  ps: { terms: 'د کارونې شرطونه', privacy: 'محرمیت', disclaimer: 'د مسؤلیت ردول', copyright: 'د خپرولو حق', rights: 'د ډاکټرې فاطمې القاوقجي کورني ترکیبونه هر څوک په وړیا توګه بیا کارولی شي (CC0)؛ هغه ترکیبونه چې نورو کتابونو، چینلونو یا ویب پاڼو ته منسوب دي، د خپلو خاوندانو دي.' },
  he: { terms: 'תנאי שימוש', privacy: 'פרטיות', disclaimer: 'הסתייגות', copyright: 'זכויות יוצרים', rights: 'מתכוני המשפחה של ד"ר פאטמה אלקאווקג׳י חופשיים לשימוש חוזר (CC0); מתכונים המיוחסים לספרים, ערוצים או אתרים אחרים שייכים לבעליהם.' },
  pl: { terms: 'Warunki korzystania', privacy: 'Prywatność', disclaimer: 'Zastrzeżenia', copyright: 'Prawa autorskie', rights: 'Rodzinne przepisy dr Fatmy Alkawokgy można swobodnie wykorzystywać (CC0); przepisy przypisane innym książkom, kanałom lub stronom należą do ich właścicieli.' },
  sv: { terms: 'Användarvillkor', privacy: 'Integritet', disclaimer: 'Ansvarsfriskrivning', copyright: 'Upphovsrätt', rights: 'Dr. Fatma Alkawokgys familjerecept är fria för alla att återanvända (CC0); recept som tillskrivs andra böcker, kanaler eller webbplatser tillhör sina rättighetshavare.' },
  te: { terms: 'వినియోగ నిబంధనలు', privacy: 'గోప్యత', disclaimer: 'నిరాకరణ', copyright: 'కాపీరైట్', rights: 'డా. ఫాత్మా అల్-కవుక్జీ కుటుంబ వంటకాలను ఎవరైనా స్వేచ్ఛగా మళ్ళీ వాడుకోవచ్చు (CC0); ఇతర పుస్తకాలు, ఛానెళ్లు లేదా వెబ్‌సైట్‌లకు ఆపాదించిన వంటకాల హక్కులు వాటి యజమానులవి.' },
  bn: { terms: 'ব্যবহারের শর্তাবলি', privacy: 'গোপনীয়তা', disclaimer: 'দায়মুক্তি', copyright: 'কপিরাইট', rights: 'ডা. ফাতমা আলকাউকজির পারিবারিক রেসিপি যে কেউ অবাধে পুনর্ব্যবহার করতে পারেন (CC0); অন্য বই, চ্যানেল বা ওয়েবসাইটের নামে উল্লিখিত রেসিপির স্বত্ব তাদের মালিকদের।' },
  vi: { terms: 'Điều khoản sử dụng', privacy: 'Quyền riêng tư', disclaimer: 'Tuyên bố miễn trừ', copyright: 'Bản quyền', rights: 'Các công thức gia đình của Dr. Fatma Alkawokgy được tự do tái sử dụng (CC0); các công thức ghi nguồn từ sách, kênh hoặc trang web khác thuộc về chủ sở hữu của chúng.' },
  sq: { terms: 'Kushtet e përdorimit', privacy: 'Privatësia', disclaimer: 'Mohim përgjegjësie', copyright: 'E drejta e autorit', rights: 'Recetat familjare të Dr. Fatma Alkawokgy janë të lira për t\'u ripërdorur nga kushdo (CC0); recetat që u atribuohen librave, kanaleve ose faqeve të tjera u përkasin pronarëve të tyre.' },
  cs: { terms: 'Podmínky užívání', privacy: 'Soukromí', disclaimer: 'Vyloučení odpovědnosti', copyright: 'Autorská práva', rights: 'Rodinné recepty dr. Fatmy Alkawokgy může kdokoli volně znovu použít (CC0); recepty připsané jiným knihám, kanálům či webům patří jejich vlastníkům.' },
  ro: { terms: 'Termeni de utilizare', privacy: 'Confidențialitate', disclaimer: 'Declinarea răspunderii', copyright: 'Drepturi de autor', rights: 'Rețetele de familie ale dr. Fatma Alkawokgy pot fi reutilizate liber de oricine (CC0); rețetele atribuite altor cărți, canale sau site-uri aparțin titularilor lor.' },
};
