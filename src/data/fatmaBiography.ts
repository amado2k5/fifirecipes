/**
 * Memorial and biographical archive of Dr. Fatma Alkawokgy (1943 - 2026)
 */

export interface FatmaBio {
  nameAr: string;
  nameEn: string;
  nameFr: string;
  nameEs: string;
  nameJa: string;
  nameHi: string;
  namePt: string;
  nameRu: string;
  nameZh: string;
  nameDe: string;
  nameIt: string;
  nameEl: string;
  nameUr: string;
  titleAr: string;
  titleEn: string;
  titleFr: string;
  titleEs: string;
  titleJa: string;
  titleHi: string;
  titlePt: string;
  titleRu: string;
  titleZh: string;
  titleDe: string;
  titleIt: string;
  titleEl: string;
  titleUr: string;
  birthYear: number;
  deathDate: string; // 2026-05-08
  institutionAr: string;
  institutionEn: string;
  yearsCollecting: number;
  taglineAr: string;
  taglineEn: string;
  taglineFr: string;
  taglineEs: string;
  taglineJa: string;
  taglineHi: string;
  taglinePt: string;
  taglineRu: string;
  taglineZh: string;
  taglineDe: string;
  taglineIt: string;
  taglineEl: string;
  taglineUr: string;
  biographyAr: string[];
  biographyEn: string[];
  biographyFr: string[];
  biographyEs: string[];
  biographyJa: string[];
  biographyHi: string[];
  biographyPt: string[];
  biographyRu: string[];
  biographyZh: string[];
  biographyDe: string[];
  biographyIt: string[];
  biographyEl: string[];
  biographyUr: string[];
  philosophyAr: string;
  philosophyEn: string;
  philosophyFr: string;
  philosophyEs: string;
  philosophyJa: string;
  philosophyHi: string;
  philosophyPt: string;
  philosophyRu: string;
  philosophyZh: string;
  philosophyDe: string;
  philosophyIt: string;
  philosophyEl: string;
  philosophyUr: string;
  memorialPlaqueAr: string;
  memorialPlaqueEn: string;
  memorialPlaqueFr: string;
  memorialPlaqueEs: string;
  memorialPlaqueJa: string;
  memorialPlaqueHi: string;
  memorialPlaquePt: string;
  memorialPlaqueRu: string;
  memorialPlaqueZh: string;
  memorialPlaqueDe: string;
  memorialPlaqueIt: string;
  memorialPlaqueEl: string;
  memorialPlaqueUr: string;
  milestones: {
    year: string;
    titleAr: string;
    titleEn: string;
    titleFr: string;
    titleEs: string;
    titleJa: string;
    titleHi: string;
    titlePt: string;
    titleRu: string;
    titleZh: string;
    titleDe: string;
    titleIt: string;
    titleEl: string;
    titleUr: string;
    descAr: string;
    descEn: string;
    descFr: string;
    descEs: string;
    descJa: string;
    descHi: string;
    descPt: string;
    descRu: string;
    descZh: string;
    descDe: string;
    descIt: string;
    descEl: string;
    descUr: string;
  }[];
}

export const FATMA_BIOGRAPHY: FatmaBio = {
  nameAr: 'د. فاطمة القاوقجي',
  nameEn: 'Dr. Fatma Alkawokgy',
  nameFr: 'Dr Fatma Alkawokgy',
  nameEs: 'Dra. Fatma Alkawokgy',
  nameJa: 'ファトマ・アルカウォクジ博士',
  nameHi: 'डॉ. फातिमा अलकावोकजी',
  namePt: 'Dra. Fatma Alkawokgy',
  nameRu: 'Д-р Фатма Алькавокджи',
  nameZh: '法特玛·卡沃克吉博士',
  nameDe: 'Dr. Fatma Alkawokgy',
  nameIt: 'Dott.ssa Fatma Alkawokgy',
  nameEl: 'Δρ. Φάτμα Αλκαβόκτζι',
  nameUr: 'ڈاکٹر فاطمہ القاوقجی',
  titleAr: 'عازفة البيانو، الأستاذة الأكاديمية، ومؤرخة فنون الطهي التراثي المصري',
  titleEn: 'Classical Pianist, Academic Professor, and Chronicler of Egyptian Culinary Heritage',
  titleFr: 'Pianiste Classique, Professeure Universitaire et Chroniqueuse du Patrimoine Culinaire Égyptien',
  titleEs: 'Pianista Clásica, Profesora Universitaria y Cronista del Patrimonio Culinario Egipcio',
  titleJa: 'クラシックピアニスト、大学教授、そしてエジプト料理の伝統を記録した記録者',
  titleHi: 'शास्त्रीय पियानोवादक, अकादमिक प्रोफ़ेसर, और मिस्री पाक विरासत की संरक्षिका',
  titlePt: 'Pianista Clássica, Professora Acadêmica e Cronista do Patrimônio Culinário Egípcio',
  titleRu: 'Пианистка-классик, профессор университета и летописец египетского кулинарного наследия',
  titleZh: '古典钢琴家、大学教授、埃及烹饪传统记录者',
  titleDe: 'Klassische Pianistin, Hochschulprofessorin und Chronistin des ägyptischen Kulinarischen Erbes',
  titleIt: 'Pianista Classica, Professoressa Universitaria e Cronista del Patrimonio Culinario Egiziano',
  titleEl: 'Κλασική Πιανίστρια, Πανεπιστημιακή Καθηγήτρια και Χρονικογράφος της Αιγυπτιακής Γαστρονομικής Κληρονομιάς',
  titleUr: 'کلاسیکی پیانو نواز، تعلیمی پروفیسر اور مصری کھانوں کے ورثے کی محافظ',
  birthYear: 1943,
  deathDate: '2026-05-08',
  institutionAr: 'كلية التربية الموسيقية – الزمالك، جامعة حلوان، القاهرة',
  institutionEn: 'Faculty of Music Education – Zamalek, Helwan University, Cairo, Egypt',
  yearsCollecting: 20,
  taglineAr: 'عقود من الشغف في تدوين أسرار المطبخ المصري المتوارث بدقة الموسيقى ونبض المحبة',
  taglineEn: 'Decades of devotion chronicling the authentic secrets of Egyptian heritage cooking with musical precision and enduring warmth',
  taglineFr: "Des décennies de dévouement à consigner les secrets authentiques de la cuisine patrimoniale égyptienne, avec la précision de la musique et une chaleur durable",
  taglineEs: 'Décadas de devoción consignando los secretos auténticos de la cocina patrimonial egipcia, con la precisión de la música y una calidez perdurable',
  taglineJa: '本場エジプト料理の秘訣を、音楽のような正確さと変わらぬ温かさで書き記してきた、幾十年にもわたる情熱の記録',
  taglineHi: 'प्रामाणिक मिस्री पारंपरिक व्यंजनों के रहस्यों को संगीत जैसी सटीकता और स्थायी आत्मीयता के साथ दर्ज करने के दशकों का समर्पण',
  taglinePt: 'Décadas de dedicação registrando os segredos autênticos da culinária tradicional egípcia com precisão musical e calor duradouro',
  taglineRu: 'Десятилетия преданного труда по документированию подлинных секретов традиционной египетской кухни с музыкальной точностью и неизменной теплотой',
  taglineZh: '数十年如一日，以音乐般的精准与历久弥新的温情，记录正宗埃及传统美食的秘诀',
  taglineDe: 'Jahrzehntelange Hingabe an die Dokumentation der authentischen Geheimnisse der ägyptischen Küche mit musikalischer Präzision und bleibender Herzlichkeit',
  taglineIt: 'Decenni di dedizione nel raccogliere i segreti autentici della cucina tradizionale egiziana, con la precisione della musica e un calore che dura nel tempo',
  taglineEl: 'Δεκαετίες αφοσίωσης στην καταγραφή των αυθεντικών μυστικών της παραδοσιακής αιγυπτιακής κουζίνας, με μουσική ακρίβεια και διαρκή θαλπωρή',
  taglineUr: 'کئی دہائیوں کی لگن سے مصری روایتی کھانوں کے اصل راز موسیقی جیسی باریکی اور لازوال گرمجوشی کے ساتھ قلم بند کیے',
  philosophyAr: 'الطهي مثل العزف على البيانو؛ النغمات لا تكتمل إلا بالتناغم الصادق، والوجبة الأصيلة لا تنضج إلا بضبط الإيقاع وصبر الروح ونقاء المقادير.',
  philosophyEn: 'Cooking is much like playing the piano: a chord is never complete without harmonic balance, and a dish never reaches true soul without rhythm, patient fire, and devotion to pure ingredients.',
  philosophyFr: "Cuisiner ressemble beaucoup à jouer du piano : un accord n'est jamais complet sans un équilibre harmonieux, et un plat n'atteint sa véritable âme que par le rythme, un feu patient et le dévouement à des ingrédients purs.",
  philosophyEs: 'Cocinar se parece mucho a tocar el piano: un acorde nunca está completo sin un equilibrio armónico, y un plato nunca alcanza su verdadera alma sin ritmo, fuego paciente y devoción por los ingredientes puros.',
  philosophyJa: '料理はピアノを弾くことによく似ています。和音は調和がなければ完成せず、料理もまた、リズムと辛抱強い火加減、そして純粋な食材への愛情がなければ、真の魂に到達することはできません。',
  philosophyHi: 'खाना बनाना पियानो बजाने जैसा ही है: कोई भी स्वर-समूह सामंजस्यपूर्ण संतुलन के बिना पूरा नहीं होता, और कोई भी व्यंजन लय, धैर्यपूर्ण आंच, और शुद्ध सामग्री के प्रति समर्पण के बिना अपनी असली आत्मा तक नहीं पहुंच पाता।',
  philosophyPt: 'Cozinhar é muito parecido com tocar piano: um acorde nunca está completo sem equilíbrio harmônico, e um prato nunca alcança sua verdadeira alma sem ritmo, fogo paciente e devoção a ingredientes puros.',
  philosophyRu: 'Готовить — это очень похоже на игру на пианино: аккорд никогда не бывает завершён без гармоничного равновесия, а блюдо никогда не обретает истинную душу без ритма, терпеливого огня и преданности чистым ингредиентам.',
  philosophyZh: '烹饪就像演奏钢琴：和弦唯有和谐才能圆满，菜肴唯有节奏、耐心的火候与对纯净食材的执着，才能真正拥有灵魂。',
  philosophyDe: 'Kochen ist dem Klavierspiel sehr ähnlich: Ein Akkord ist nie vollständig ohne harmonischen Ausgleich, und ein Gericht erreicht seine wahre Seele nur durch Rhythmus, geduldiges Feuer und die Hingabe an reine Zutaten.',
  philosophyIt: 'Cucinare è molto simile a suonare il pianoforte: un accordo non è mai completo senza un equilibrio armonico, e un piatto raggiunge la sua vera anima solo attraverso il ritmo, un fuoco paziente e la dedizione a ingredienti puri.',
  philosophyEl: 'Το μαγείρεμα μοιάζει πολύ με το παίξιμο του πιάνου: μια συγχορδία δεν είναι ποτέ πλήρης χωρίς αρμονική ισορροπία, και ένα πιάτο δεν αγγίζει την αληθινή του ψυχή χωρίς ρυθμό, υπομονετική φωτιά και αφοσίωση σε καθαρά υλικά.',
  philosophyUr: 'کھانا پکانا بالکل پیانو بجانے جیسا ہے: کوئی سُر ہم آہنگ توازن کے بغیر مکمل نہیں ہوتا، اور کوئی پکوان تال، دھیمی آنچ اور خالص اجزاء سے لگن کے بغیر اپنی اصل روح تک نہیں پہنچتا۔',
  memorialPlaqueAr: 'تخليداً لذكرى الراحلة الكريمة د. فاطمة القاوقجي (1943 – 2026). امرأة فاضلة جمعت بين رفعة الفن الموسيقي وأصالة البيت المصري العريق. صُنِع هذا الموقع ليبقى إرثها حيّاً في كل مطبخ وبيت.',
  memorialPlaqueEn: 'Dedicated to the immortal memory of Dr. Fatma Alkawokgy (1943–2026). An extraordinary artist who bridged the sublime heights of classical piano with the timeless warmth of the Egyptian culinary hearth. This living cookbook ensures her generous legacy lives on forever.',
  memorialPlaqueFr: "Dédié à la mémoire immortelle du Dr Fatma Alkawokgy (1943–2026). Une artiste extraordinaire qui a su unir les sommets sublimes du piano classique à la chaleur intemporelle du foyer culinaire égyptien. Ce livre de cuisine vivant fait perdurer à jamais son généreux héritage.",
  memorialPlaqueEs: 'Dedicado a la memoria inmortal de la Dra. Fatma Alkawokgy (1943–2026). Una artista extraordinaria que unió las alturas sublimes del piano clásico con la calidez atemporal del hogar culinario egipcio. Este libro de cocina viviente asegura que su generoso legado perdure para siempre.',
  memorialPlaqueJa: 'ファトマ・アルカウォクジ博士(1943–2026)の不滅の記憶に捧ぐ。クラシックピアノの崇高な高みと、エジプトの台所の変わらぬ温かさを結びつけた、類まれな芸術家でした。この生き続けるレシピ集が、彼女の寛大な遺産を永遠に伝えていきます。',
  memorialPlaqueHi: 'डॉ. फातिमा अलकावोकजी (1943–2026) की अमर स्मृति को समर्पित। एक असाधारण कलाकार, जिन्होंने शास्त्रीय पियानो की उदात्त ऊंचाइयों को मिस्री रसोई की कालातीत आत्मीयता से जोड़ा। यह जीवंत रेसिपी संग्रह उनकी उदार विरासत को सदा जीवित रखता है।',
  memorialPlaquePt: 'Dedicado à memória imortal da Dra. Fatma Alkawokgy (1943–2026). Uma artista extraordinária que uniu as alturas sublimes do piano clássico ao calor atemporal do lar culinário egípcio. Este livro de receitas vivo garante que seu generoso legado viva para sempre.',
  memorialPlaqueRu: 'Посвящается бессмертной памяти д-ра Фатмы Алькавокджи (1943–2026). Необыкновенная артистка, соединившая возвышенные высоты классического фортепиано с неизменной теплотой египетского кулинарного очага. Эта живая кулинарная книга навсегда сохраняет её щедрое наследие.',
  memorialPlaqueZh: '谨此致敬法特玛·卡沃克吉博士（1943–2026年）永恒的记忆。她是一位非凡的艺术家，将古典钢琴的崇高境界与埃及厨房历久不衰的温暖融为一体。这本鲜活的食谱网站，让她慷慨的遗产得以永远延续。',
  memorialPlaqueDe: 'Dem unsterblichen Andenken von Dr. Fatma Alkawokgy (1943–2026) gewidmet. Eine außergewöhnliche Künstlerin, die die erhabenen Höhen des klassischen Klaviers mit der zeitlosen Wärme der ägyptischen Küche verband. Dieses lebendige Kochbuch bewahrt ihr großzügiges Vermächtnis für immer.',
  memorialPlaqueIt: 'Dedicato alla memoria immortale della Dott.ssa Fatma Alkawokgy (1943–2026). Un’artista straordinaria che ha unito le vette sublimi del pianoforte classico al calore senza tempo del focolare culinario egiziano. Questo ricettario vivente custodisce per sempre la sua generosa eredità.',
  memorialPlaqueEl: 'Αφιερωμένο στην αθάνατη μνήμη της Δρ. Φάτμα Αλκαβόκτζι (1943–2026). Μια εξαιρετική καλλιτέχνις που ένωσε τα υψηλά ιδανικά του κλασικού πιάνου με τη διαχρονική θαλπωρή της αιγυπτιακής κουζίνας. Αυτό το ζωντανό βιβλίο μαγειρικής διασφαλίζει ότι η γενναιόδωρη κληρονομιά της θα ζει για πάντα.',
  memorialPlaqueUr: 'ڈاکٹر فاطمہ القاوقجی (1943–2026) کی لازوال یاد کے نام۔ ایک غیر معمولی فنکارہ جنہوں نے کلاسیکی پیانو کی بلندیوں کو مصری باورچی خانے کی سدا بہار گرمجوشی سے جوڑا۔ ترکیبوں کی یہ زندہ کتاب ان کے فیاض ورثے کو ہمیشہ قائم رکھے گی۔',
  biographyAr: [
    'ولدت الدكتورة فاطمة القاوقجي في مصر عام 1943 في زمن كانت فيه تقاليد المطبخ والبيوت المصرية تُروى شفاهة وتتوارثها الأمهات بالخبرة الفطرية والمشاهدة.',
    'التحقت بكلية التربية الموسيقية بالزمالك عندما كانت في نحو الثامنة عشرة من عمرها (حوالي عام 1961)، حيث درست وتدرجت ونالت درجة الدكتوراه في فن البيانو، وعملت أستاذة ومربية لأجيال من الطلاب في قلب القاهرة، وظلت بالكلية حتى غادرتها في عام 1980، حاملة في وجدانها دقة النغم الموسيقي والنظام الصارم المقترن برقة الإحساس.',
    'وعلى مدار عقود متصلة، كرّست جهودها لجمع وتدوين واختبار وصفات المطبخ المصري التراثي الأصيل. كانت تقابل ربات البيوت والطهاة الكبار، وتدون كل طريقة بتفاصيلها الدقيقة وتزن مقاديرها بالميزان، وتجرب كل طبق مراراً حتى تتوصل إلى المقادير المعيارية المحققة التي تجمع بين المذاق الأصيل وسهولة الإعداد.',
    'تركت وراءها مخطوطات زاخرة بالخبرات والوصفات المتنوعة، والتي استخلصنا منها هذا الكتاب المرجعي الإلكتروني ليكون دليلاً جامعاً لكل محبي الطهي الأصيل حول العالم.',
    'رحلت عن عالمنا في الثامن من مايو عام 2026، تاركة أثراً طيباً لا يُمحى، وهذا الموقع هو نافذة الوفاء لروحها الطاهرة ليبقى علمها ومحبتها حاضراً في كل وجبة تُطهى بحب.'
  ],
  biographyFr: [
    "Le Dr Fatma Alkawokgy est née en Égypte en 1943, à une époque où le précieux savoir des cuisines égyptiennes se transmettait oralement, de grand-mères en mères.",
    "Vers l'âge de 18 ans (aux alentours de 1961), elle intègre la prestigieuse Faculté d'Éducation Musicale de Zamalek, au Caire. Elle y étudie, obtient son doctorat en piano classique, et enseigne à des générations d'artistes et de musiciens en herbe, jusqu'à la fin de sa carrière académique en 1980, alliant une rigueur artistique exigeante à une profonde sensibilité culturelle.",
    "Parallèlement à ses accomplissements musicaux, le Dr Fatma s'est vouée toute sa vie à une mission : documenter méticuleusement, tester, recouper et perfectionner des centaines de recettes culinaires égyptiennes. Elle interrogeait les grands cuisiniers, pesait les ingrédients au gramme près, testait les variantes sur le feu et consignait les nuances subtiles entre les préparations régionales.",
    "Ses notes manuscrites forment le socle fondateur de cette archive numérique — aujourd'hui préservée grâce à la science culinaire moderne et à un accès multilingue.",
    "Le Dr Fatma s'est éteinte le 8 mai 2026. Ce livre de cuisine interactif demeure un monument perpétuel à sa générosité, à sa rigueur intellectuelle et à son amour sans limites pour la culture égyptienne."
  ],
  biographyEn: [
    'Dr. Fatma Alkawokgy was born in Egypt in 1943, during an era when the treasured wisdom of Egyptian kitchens was passed down orally through grandmothers and mothers.',
    'At around 18 years of age (circa 1961), she entered the prestigious Faculty of Music Education in Zamalek, Cairo. There she studied, earned her Doctorate in Classical Piano, and taught generations of aspiring artists and musicians until concluding her academic career there in 1980, blending rigorous artistic discipline with profound cultural sensibility.',
    'Alongside her musical accomplishments, Dr. Fatma embarked on a lifelong devotion: meticulously documenting, testing, cross-referencing, and perfecting hundreds of Egyptian culinary recipes. She interviewed master cooks, weighed ingredients by the gram, tested variations over flame, and recorded the subtle nuances between regional preparations.',
    'Her handwritten notes form the foundational core of this digital archive—now preserved with modern culinary science and multi-language access.',
    'Dr. Fatma passed away on May 8, 2026. This interactive cookbook stands as a perpetual monument to her generosity, her intellectual rigor, and her boundless love for Egyptian culture.'
  ],
  biographyEs: [
    'La Dra. Fatma Alkawokgy nació en Egipto en 1943, en una época en que la valiosa sabiduría de las cocinas egipcias se transmitía oralmente de abuelas a madres.',
    'A los 18 años aproximadamente (hacia 1961), ingresó en la prestigiosa Facultad de Educación Musical de Zamalek, en El Cairo. Allí estudió, obtuvo su doctorado en Piano Clásico y enseñó a generaciones de artistas y músicos en ciernes hasta concluir su carrera académica en 1980, combinando una rigurosa disciplina artística con una profunda sensibilidad cultural.',
    'Junto a sus logros musicales, la Dra. Fatma emprendió una devoción de toda la vida: documentar meticulosamente, probar, contrastar y perfeccionar cientos de recetas culinarias egipcias. Entrevistó a grandes cocineros, pesó los ingredientes al gramo, probó variaciones al fuego y registró los matices sutiles entre las preparaciones regionales.',
    'Sus notas manuscritas forman el núcleo fundacional de este archivo digital, hoy preservado con la ciencia culinaria moderna y acceso multilingüe.',
    'La Dra. Fatma falleció el 8 de mayo de 2026. Este libro de cocina interactivo es un monumento perpetuo a su generosidad, su rigor intelectual y su amor infinito por la cultura egipcia.'
  ],
  biographyJa: [
    'ファトマ・アルカウォクジ博士は1943年、エジプトで生まれました。当時、エジプトの台所に伝わる大切な知恵は、祖母から母へと口伝えで受け継がれていました。',
    '18歳ごろ(1961年頃)、カイロにあるザマレク音楽教育学部という名門校に入学。そこでクラシックピアノを学び、博士号を取得し、1980年にキャリアを終えるまで多くの若い芸術家や音楽家たちを指導しました。厳格な芸術的規律と、深い文化的感受性を兼ね備えた指導者でした。',
    '音楽での功績とともに、ファトマ博士は生涯をかけたもう一つの使命に取り組みました。エジプト料理のレシピを丹念に記録し、試作し、照合し、洗練させることです。名だたる料理人たちに話を聞き、食材をグラム単位で計量し、火加減の違いを何度も試し、地域ごとの微妙な違いを書き留めました。',
    '彼女の手書きのノートは、このデジタルアーカイブの礎となっています。今では現代の調理科学と多言語対応によって、大切に保存されています。',
    'ファトマ博士は2026年5月8日に逝去しました。このインタラクティブなレシピ集は、彼女の寛大さ、知的誠実さ、そしてエジプト文化への尽きせぬ愛を永遠に伝える記念碑です。'
  ],
  biographyHi: [
    'डॉ. फातिमा अलकावोकजी का जन्म 1943 में मिस्र में हुआ, उस दौर में जब मिस्री रसोई की अनमोल विद्या दादी-नानी से मां तक मौखिक रूप से चली आती थी।',
    'लगभग 18 वर्ष की आयु में (सन् 1961 के आसपास), उन्होंने काहिरा के ज़मालेक स्थित प्रतिष्ठित संगीत शिक्षा महाविद्यालय में प्रवेश लिया। वहां उन्होंने अध्ययन किया, शास्त्रीय पियानो में डॉक्टरेट प्राप्त की, और 1980 में अपना अकादमिक जीवन पूरा करने तक कई पीढ़ियों के उभरते कलाकारों और संगीतकारों को सिखाया, कठोर कलात्मक अनुशासन को गहरी सांस्कृतिक संवेदनशीलता के साथ जोड़ते हुए।',
    'अपनी संगीत उपलब्धियों के साथ-साथ, डॉ. फातिमा ने जीवन भर एक और समर्पण निभाया: मिस्र के सैकड़ों पारंपरिक व्यंजनों को बारीकी से दर्ज करना, परखना, तुलना करना और परिष्कृत करना। उन्होंने प्रमुख रसोइयों से बातचीत की, सामग्री को ग्राम-दर-ग्राम तौला, आंच पर विभिन्न विधियों को आज़माया, और क्षेत्रीय व्यंजनों के सूक्ष्म भेद दर्ज किए।',
    'उनकी हस्तलिखित टिप्पणियां इस डिजिटल संग्रह की बुनियाद हैं — जिन्हें अब आधुनिक पाक विज्ञान और बहुभाषी पहुंच के साथ संरक्षित किया गया है।',
    'डॉ. फातिमा का 8 मई 2026 को निधन हो गया। यह इंटरैक्टिव रेसिपी संग्रह उनकी उदारता, बौद्धिक निष्ठा, और मिस्री संस्कृति के प्रति असीम प्रेम का एक स्थायी स्मारक है।'
  ],
  biographyPt: [
    'A Dra. Fatma Alkawokgy nasceu no Egito em 1943, numa época em que a preciosa sabedoria das cozinhas egípcias era transmitida oralmente de avós para mães.',
    'Por volta dos 18 anos (cerca de 1961), ingressou na prestigiosa Faculdade de Educação Musical de Zamalek, no Cairo. Lá estudou, obteve seu Doutorado em Piano Clássico e ensinou gerações de artistas e músicos em formação até concluir sua carreira acadêmica ali em 1980, unindo rigorosa disciplina artística a uma profunda sensibilidade cultural.',
    'Além de suas conquistas musicais, a Dra. Fatma dedicou-se por toda a vida a uma missão: documentar meticulosamente, testar, comparar e aperfeiçoar centenas de receitas culinárias egípcias. Entrevistou grandes cozinheiros, pesou ingredientes ao grama, testou variações no fogo e registrou as sutis nuances entre as preparações regionais.',
    'Suas anotações manuscritas formam o núcleo fundamental deste arquivo digital — hoje preservado com a ciência culinária moderna e acesso em múltiplos idiomas.',
    'A Dra. Fatma faleceu em 8 de maio de 2026. Este livro de receitas interativo é um monumento perpétuo à sua generosidade, seu rigor intelectual e seu amor infinito pela cultura egípcia.'
  ],
  biographyRu: [
    'Д-р Фатма Алькавокджи родилась в Египте в 1943 году, в эпоху, когда бесценная мудрость египетских кухонь передавалась устно от бабушек к матерям.',
    'Примерно в 18 лет (около 1961 года) она поступила на престижный факультет музыкального образования в Замалеке, Каир. Там она училась, получила докторскую степень по классическому фортепиано и обучала поколения начинающих артистов и музыкантов вплоть до завершения своей академической карьеры в 1980 году, сочетая строгую творческую дисциплину с глубокой культурной чуткостью.',
    'Наряду со своими музыкальными достижениями, д-р Фатма посвятила всю жизнь ещё одному делу: тщательному документированию, тестированию, сопоставлению и совершенствованию сотен египетских кулинарных рецептов. Она беседовала с признанными поварами, взвешивала ингредиенты до грамма, пробовала разные способы приготовления на огне и фиксировала тонкие различия между региональными рецептами.',
    'Её рукописные записи легли в основу этого цифрового архива — ныне сохранённого благодаря современной кулинарной науке и доступу на нескольких языках.',
    'Д-р Фатма скончалась 8 мая 2026 года. Эта интерактивная кулинарная книга остаётся вечным памятником её щедрости, интеллектуальной строгости и безграничной любви к египетской культуре.'
  ],
  biographyZh: [
    '法特玛·卡沃克吉博士于1943年出生在埃及，那个年代，埃及厨房里珍贵的智慧都是靠祖母和母亲口耳相传下来的。',
    '大约18岁那年（约1961年），她考入开罗扎马雷克著名的音乐教育学院。在那里，她刻苦学习，获得了古典钢琴博士学位，并教导了几代有志成为艺术家和音乐家的学生，直到1980年结束她的学术生涯，将严谨的艺术素养与深厚的文化情怀融为一体。',
    '在音乐成就之外，法特玛博士毕生投身于另一项事业：细致地记录、试验、比对并完善数百道埃及传统菜肴。她走访了众多名厨，以克为单位精确称量食材，反复在炉火上试验不同做法，并记录下各地做法之间微妙的差异。',
    '她手写的笔记，构成了这个数字档案的核心基础——如今借助现代烹饪科学与多语言支持得以完好保存。',
    '法特玛博士于2026年5月8日与世长辞。这本互动食谱网站，将永远见证她的慷慨、严谨的治学精神，以及她对埃及文化无尽的热爱。'
  ],
  biographyDe: [
    'Dr. Fatma Alkawokgy wurde 1943 in Ägypten geboren, in einer Zeit, in der das kostbare Wissen der ägyptischen Küchen mündlich von Großmüttern an Mütter weitergegeben wurde.',
    'Im Alter von etwa 18 Jahren (um 1961) trat sie in die renommierte Fakultät für Musikpädagogik in Zamalek, Kairo, ein. Dort studierte sie, erwarb ihren Doktortitel in klassischem Klavier und unterrichtete Generationen angehender Künstler und Musiker, bis sie ihre akademische Laufbahn dort 1980 beendete, wobei sie strenge künstlerische Disziplin mit tiefer kultureller Sensibilität verband.',
    'Neben ihren musikalischen Leistungen widmete sich Dr. Fatma zeitlebens einer weiteren Aufgabe: der sorgfältigen Dokumentation, dem Testen, dem Abgleichen und der Perfektionierung Hunderter ägyptischer Rezepte. Sie befragte renommierte Köche, wog Zutaten grammgenau ab, testete Variationen am Herd und hielt die feinen Unterschiede zwischen regionalen Zubereitungen fest.',
    'Ihre handschriftlichen Notizen bilden den Grundstein dieses digitalen Archivs — heute bewahrt durch moderne Kochwissenschaft und mehrsprachigen Zugang.',
    'Dr. Fatma verstarb am 8. Mai 2026. Dieses interaktive Kochbuch ist ein bleibendes Denkmal für ihre Großzügigkeit, ihre intellektuelle Strenge und ihre grenzenlose Liebe zur ägyptischen Kultur.'
  ],
  biographyIt: [
    'La Dott.ssa Fatma Alkawokgy nacque in Egitto nel 1943, in un’epoca in cui il prezioso sapere delle cucine egiziane veniva tramandato oralmente dalle nonne alle madri.',
    'Verso i 18 anni (intorno al 1961), entrò nella prestigiosa Facoltà di Educazione Musicale di Zamalek, al Cairo. Lì studiò, conseguì il dottorato in Pianoforte Classico e insegnò a generazioni di aspiranti artisti e musicisti fino a concludere la sua carriera accademica nel 1980, unendo una rigorosa disciplina artistica a una profonda sensibilità culturale.',
    'Accanto ai suoi successi musicali, la Dott.ssa Fatma si dedicò per tutta la vita a un’altra missione: documentare meticolosamente, testare, confrontare e perfezionare centinaia di ricette della cucina egiziana. Intervistò grandi cuochi, pesò gli ingredienti al grammo, provò variazioni sul fuoco e annotò le sottili differenze tra le preparazioni regionali.',
    'I suoi appunti manoscritti costituiscono il nucleo fondante di questo archivio digitale, oggi conservato grazie alla scienza culinaria moderna e all’accesso multilingue.',
    'La Dott.ssa Fatma è mancata l’8 maggio 2026. Questo ricettario interattivo resta un monumento perenne alla sua generosità, al suo rigore intellettuale e al suo amore sconfinato per la cultura egiziana.'
  ],
  biographyEl: [
    'Η Δρ. Φάτμα Αλκαβόκτζι γεννήθηκε στην Αίγυπτο το 1943, σε μια εποχή που η πολύτιμη σοφία των αιγυπτιακών κουζινών μεταδιδόταν προφορικά από τις γιαγιάδες στις μητέρες.',
    'Περίπου στα 18 της χρόνια (γύρω στο 1961), εισήχθη στην περίφημη Σχολή Μουσικής Παιδαγωγικής του Ζαμάλεκ, στο Κάιρο. Εκεί σπούδασε, απέκτησε το διδακτορικό της στο Κλασικό Πιάνο και δίδαξε γενιές νέων καλλιτεχνών και μουσικών μέχρι που ολοκλήρωσε την ακαδημαϊκή της πορεία εκεί το 1980, συνδυάζοντας αυστηρή καλλιτεχνική πειθαρχία με βαθιά πολιτισμική ευαισθησία.',
    'Παράλληλα με τα μουσικά της επιτεύγματα, η Δρ. Φάτμα αφιερώθηκε σε ένα δια βίου έργο: την επιμελή καταγραφή, δοκιμή, διασταύρωση και τελειοποίηση εκατοντάδων αιγυπτιακών συνταγών. Συνομίλησε με σπουδαίους μάγειρες, ζύγιζε τα υλικά στο γραμμάριο, δοκίμαζε παραλλαγές πάνω στη φωτιά και κατέγραφε τις λεπτές αποχρώσεις ανάμεσα στις τοπικές παρασκευές.',
    'Οι χειρόγραφες σημειώσεις της αποτελούν τον θεμέλιο λίθο αυτού του ψηφιακού αρχείου —σήμερα διατηρημένο με τη σύγχρονη μαγειρική επιστήμη και πολύγλωσση πρόσβαση.',
    'Η Δρ. Φάτμα απεβίωσε στις 8 Μαΐου 2026. Αυτό το διαδραστικό βιβλίο μαγειρικής παραμένει ένα διαρκές μνημείο στη γενναιοδωρία της, την πνευματική της αυστηρότητα και την απεριόριστη αγάπη της για την αιγυπτιακή κουλτούρα.'
  ],
  biographyUr: [
    'ڈاکٹر فاطمہ القاوقجی 1943 میں مصر میں پیدا ہوئیں، اُس دور میں جب مصری باورچی خانوں کا قیمتی علم نانیوں دادیوں اور ماؤں کے ذریعے زبانی طور پر منتقل ہوتا تھا۔',
    'تقریباً 18 سال کی عمر میں (1961 کے لگ بھگ) انہوں نے قاہرہ کے علاقے زمالک میں واقع ممتاز فیکلٹی آف میوزک ایجوکیشن میں داخلہ لیا۔ وہاں انہوں نے تعلیم حاصل کی، کلاسیکی پیانو میں ڈاکٹریٹ کی ڈگری لی، اور 1980 میں اپنے تعلیمی سفر کے اختتام تک فنکاروں اور موسیقاروں کی کئی نسلوں کو پڑھایا، جس میں انہوں نے سخت فنی نظم و ضبط کو گہری ثقافتی حساسیت کے ساتھ یکجا کیا۔',
    'اپنی موسیقی کی کامیابیوں کے ساتھ ساتھ ڈاکٹر فاطمہ نے عمر بھر ایک مشن اپنایا: سینکڑوں مصری پکوانوں کی ترکیبوں کو باریکی سے قلم بند کرنا، آزمانا، ان کا باہمی موازنہ کرنا اور انہیں بہتر بنانا۔ وہ ماہر باورچیوں سے گفتگو کرتیں، اجزاء کو گرام کے حساب سے تولتیں، مختلف طریقوں کو چولہے پر آزماتیں، اور علاقائی ترکیبوں کے درمیان باریک فرق کو درج کرتیں۔',
    'ان کے ہاتھ سے لکھے نوٹس اس ڈیجیٹل ذخیرے کی بنیاد ہیں — جو اب جدید کھانا پکانے کی سائنس اور کئی زبانوں تک رسائی کے ساتھ محفوظ ہیں۔',
    'ڈاکٹر فاطمہ 8 مئی 2026 کو انتقال کر گئیں۔ ترکیبوں کی یہ انٹرایکٹو کتاب ان کی سخاوت، علمی باریک بینی اور مصری ثقافت سے ان کی بے پناہ محبت کی ایک دائمی یادگار ہے۔'
  ],
  milestones: [
    {
      year: '1943',
      titleAr: 'الميلاد والنشأة',
      titleEn: 'Birth & Early Roots',
      titleFr: 'Naissance et Racines',
      titleEs: 'Nacimiento y Primeras Raíces',
      titleJa: '誕生と幼少期',
      titleHi: 'जन्म और प्रारंभिक जड़ें',
      descAr: 'ولدت في القاهرة ونشأت في أسرة مصرية عريقة تعشق الفن والأدب والتقاليد الأصيلة.',
      descEn: 'Born in Cairo into a cultured Egyptian family steeped in arts, literature, and hospitable traditions.',
      descFr: "Née au Caire au sein d'une famille égyptienne cultivée, passionnée d'art, de littérature et de traditions hospitalières.",
      descEs: 'Nació en El Cairo en el seno de una culta familia egipcia apasionada por el arte, la literatura y las tradiciones hospitalarias.',
      descJa: 'カイロで生まれ、芸術と文学、そしてもてなしの伝統を大切にする教養あるエジプトの家庭で育ちました。',
      descHi: 'काहिरा में जन्मीं और कला, साहित्य तथा आतिथ्य परंपराओं से समृद्ध एक सुसंस्कृत मिस्री परिवार में पलीं।',
      titlePt: 'Nascimento e Primeiras Raízes',
      descPt: 'Nasceu no Cairo em uma família egípcia culta, apaixonada por arte, literatura e tradições hospitaleiras.',
      titleRu: 'Рождение и Ранние Корни',
      descRu: 'Родилась в Каире в культурной египетской семье, увлечённой искусством, литературой и традициями гостеприимства.',
      titleZh: '出生与早年经历',
      descZh: '出生于开罗一个热爱艺术、文学与好客传统的教养世家。',
      titleDe: 'Geburt und frühe Wurzeln',
      descDe: 'Geboren in Kairo in eine gebildete ägyptische Familie, die Kunst, Literatur und Gastfreundschaft schätzte.',
      titleIt: 'Nascita e Prime Radici',
      descIt: 'Nata al Cairo in una colta famiglia egiziana appassionata di arte, letteratura e tradizioni ospitali.',
      titleEl: 'Γέννηση και Πρώτες Ρίζες',
      titleUr: 'پیدائش اور ابتدائی جڑیں',
      descEl: 'Γεννήθηκε στο Κάιρο σε μια καλλιεργημένη αιγυπτιακή οικογένεια αφοσιωμένη στην τέχνη, τη λογοτεχνία και τις φιλόξενες παραδόσεις.',
      descUr: 'قاہرہ میں ایک مہذب مصری خاندان میں پیدا ہوئیں جو فنون، ادب اور مہمان نوازی کی روایات سے مالا مال تھا۔'
    },
    {
      year: 'حوالي 1961',
      titleAr: 'الالتحاق بكلية التربية الموسيقية بالزمالك',
      titleEn: 'Entered Music Faculty in Zamalek (Age ~18)',
      titleFr: 'Entrée à la Faculté de Musique de Zamalek (vers 18 ans)',
      titleEs: 'Ingreso a la Facultad de Música de Zamalek (~18 años)',
      titleJa: 'ザマレク音楽学部への入学(18歳頃)',
      titleHi: 'ज़मालेक संगीत महाविद्यालय में प्रवेश (लगभग 18 वर्ष की आयु में)',
      descAr: 'التحقت بكلية التربية الموسيقية بالزمالك في سن الثامنة عشرة لدراسة فن البيانو والموسيقى الأكاديمية.',
      descEn: 'Entered the Faculty of Music Education in Zamalek at approximately age 18 to pursue classical piano and music education.',
      descFr: "Intègre la Faculté d'Éducation Musicale de Zamalek à environ 18 ans pour étudier le piano classique et la pédagogie musicale.",
      descEs: 'Ingresó en la Facultad de Educación Musical de Zamalek a los 18 años aproximadamente para estudiar piano clásico y educación musical.',
      descJa: '18歳頃、ザマレク音楽教育学部に入学し、クラシックピアノと音楽教育を学びました。',
      descHi: 'लगभग 18 वर्ष की आयु में ज़मालेक स्थित संगीत शिक्षा महाविद्यालय में प्रवेश लिया, शास्त्रीय पियानो और संगीत शिक्षा के अध्ययन हेतु।',
      titlePt: 'Ingresso na Faculdade de Música de Zamalek (~18 anos)',
      descPt: 'Ingressou na Faculdade de Educação Musical de Zamalek com aproximadamente 18 anos para estudar piano clássico e educação musical.',
      titleRu: 'Поступление на факультет музыки в Замалеке (~18 лет)',
      descRu: 'Поступила на факультет музыкального образования в Замалеке примерно в 18 лет, чтобы изучать классическое фортепиано и музыкальное образование.',
      titleZh: '考入扎马雷克音乐学院（约18岁）',
      descZh: '约18岁时考入开罗扎马雷克音乐教育学院，攻读古典钢琴与音乐教育。',
      titleDe: 'Eintritt in die Musikfakultät Zamalek (Alter ~18)',
      descDe: 'Trat im Alter von etwa 18 Jahren in die Fakultät für Musikpädagogik in Zamalek ein, um klassisches Klavier und Musikpädagogik zu studieren.',
      titleIt: 'Ingresso alla Facoltà di Musica di Zamalek (~18 anni)',
      descIt: 'Entrò nella Facoltà di Educazione Musicale di Zamalek a circa 18 anni per studiare pianoforte classico ed educazione musicale.',
      titleEl: 'Εισαγωγή στη Σχολή Μουσικής του Ζαμάλεκ (Ηλικία ~18)',
      titleUr: 'زمالک کی میوزک فیکلٹی میں داخلہ (تقریباً 18 سال کی عمر میں)',
      descEl: 'Εισήχθη στη Σχολή Μουσικής Παιδαγωγικής του Ζαμάλεκ σε ηλικία περίπου 18 ετών για να σπουδάσει κλασικό πιάνο και μουσική εκπαίδευση.',
      descUr: 'تقریباً 18 سال کی عمر میں کلاسیکی پیانو اور موسیقی کی تعلیم کے لیے زمالک کی فیکلٹی آف میوزک ایجوکیشن میں داخلہ لیا۔'
    },
    {
      year: '1980',
      titleAr: 'إتمام المسيرة الأكاديمية بالزمالك',
      titleEn: 'Concluded Zamalek Faculty Career',
      titleFr: 'Fin de Carrière à la Faculté de Zamalek',
      titleEs: 'Fin de la Carrera Académica en Zamalek',
      titleJa: 'ザマレクでの学究生活の終わり',
      titleHi: 'ज़मालेक में अकादमिक जीवन का समापन',
      descAr: 'نالت درجة الدكتوراه ودرّست أجيالاً من الموسيقيين حتى مغادرتها الكلية عام 1980 للتفرغ لآفاق جديدة.',
      descEn: 'Conferred her Doctorate in Piano, instructed generations of musicians, and completed her tenure at the faculty in 1980.',
      descFr: 'Obtient son doctorat en piano, enseigne à des générations de musiciens, et achève sa carrière à la faculté en 1980.',
      descEs: 'Obtuvo su doctorado en piano, enseñó a generaciones de músicos y concluyó su etapa en la facultad en 1980.',
      descJa: 'ピアノの博士号を取得し、多くの世代の音楽家を指導した後、1980年に学部での在任期間を終えました。',
      descHi: 'पियानो में डॉक्टरेट प्राप्त की, कई पीढ़ियों के संगीतकारों को सिखाया, और 1980 में महाविद्यालय में अपना कार्यकाल पूरा किया।',
      titlePt: 'Conclusão da Carreira na Faculdade de Zamalek',
      descPt: 'Obteve seu Doutorado em Piano, lecionou para gerações de músicos e concluiu seu período na faculdade em 1980.',
      titleRu: 'Завершение карьеры на факультете в Замалеке',
      descRu: 'Получила докторскую степень по фортепиано, обучала поколения музыкантов и завершила свою работу на факультете в 1980 году.',
      titleZh: '结束扎马雷克学院的学术生涯',
      descZh: '获得钢琴博士学位，教导了几代音乐家，并于1980年结束在学院的任教生涯。',
      titleDe: 'Abschluss der Laufbahn an der Fakultät Zamalek',
      descDe: 'Erwarb ihren Doktortitel in Klavier, unterrichtete Generationen von Musikern und beendete 1980 ihre Tätigkeit an der Fakultät.',
      titleIt: 'Conclusione della Carriera alla Facoltà di Zamalek',
      descIt: 'Conseguì il dottorato in Pianoforte, insegnò a generazioni di musicisti e concluse il suo incarico presso la facoltà nel 1980.',
      titleEl: 'Ολοκλήρωση της Ακαδημαϊκής Πορείας στο Ζαμάλεκ',
      titleUr: 'زمالک فیکلٹی میں تعلیمی سفر کا اختتام',
      descEl: 'Απέκτησε το διδακτορικό της στο πιάνο, δίδαξε γενιές μουσικών και ολοκλήρωσε τη θητεία της στη σχολή το 1980.',
      descUr: 'پیانو میں ڈاکٹریٹ کی ڈگری حاصل کی، موسیقاروں کی کئی نسلوں کو تعلیم دی، اور 1980 میں فیکلٹی میں اپنی مدتِ ملازمت مکمل کی۔'
    },
    {
      year: '1980 - 2020',
      titleAr: 'عقود من التوثيق والتحقيق التراثي',
      titleEn: 'Decades of Culinary Fieldwork',
      titleFr: 'Décennies de Travail Culinaire de Terrain',
      titleEs: 'Décadas de Trabajo Culinario de Campo',
      titleJa: '料理のフィールドワークに費やした数十年',
      titleHi: 'पाक अनुसंधान के दशकों',
      descAr: 'كرست جهودها لجمع وتحقيق وتجربة وصفات الطبخ المصري الأصيل عبر 3 وثائق ومخطوطات متكاملة.',
      descEn: 'Dedicated decades to collecting, cooking, testing, and compiling authentic Egyptian recipe manuscripts.',
      descFr: 'Consacre des décennies à recueillir, cuisiner, tester et rassembler des manuscrits de recettes égyptiennes authentiques.',
      descEs: 'Dedicó décadas a recopilar, cocinar, probar y compilar manuscritos de recetas egipcias auténticas.',
      descJa: '本場エジプト料理のレシピ原稿を収集し、実際に作り、試し、まとめ上げることに、数十年を捧げました。',
      descHi: 'प्रामाणिक मिस्री व्यंजनों की पांडुलिपियों को एकत्र करने, पकाने, परखने और संकलित करने में दशकों समर्पित किए।',
      titlePt: 'Décadas de Pesquisa Culinária',
      descPt: 'Dedicou décadas a coletar, cozinhar, testar e compilar manuscritos de receitas egípcias autênticas.',
      titleRu: 'Десятилетия кулинарных полевых исследований',
      descRu: 'Посвятила десятилетия сбору, приготовлению, тестированию и составлению подлинных рукописей египетских рецептов.',
      titleZh: '数十年的烹饪田野调查',
      descZh: '数十年间致力于收集、烹制、试验并整理正宗埃及食谱手稿。',
      titleDe: 'Jahrzehnte kulinarischer Feldforschung',
      descDe: 'Widmete Jahrzehnte dem Sammeln, Kochen, Testen und Zusammenstellen authentischer ägyptischer Rezeptmanuskripte.',
      titleIt: 'Decenni di Ricerca Culinaria sul Campo',
      descIt: 'Dedicò decenni a raccogliere, cucinare, testare e raccogliere in manoscritti le ricette autentiche della cucina egiziana.',
      titleEl: 'Δεκαετίες Γαστρονομικής Έρευνας Πεδίου',
      titleUr: 'کھانوں پر دہائیوں کی تحقیق',
      descEl: 'Αφιέρωσε δεκαετίες στη συλλογή, το μαγείρεμα, τη δοκιμή και τη συγκέντρωση αυθεντικών χειρόγραφων αιγυπτιακών συνταγών.',
      descUr: 'اصل مصری ترکیبوں کے مسودات جمع کرنے، پکانے، آزمانے اور مرتب کرنے میں کئی دہائیاں وقف کیں۔'
    },
    {
      year: '8 مايو 2026',
      titleAr: 'الرحيل وبقاء الأثر',
      titleEn: 'Passing & Everlasting Legacy',
      titleFr: 'Disparition et Héritage Éternel',
      titleEs: 'Fallecimiento y Legado Eterno',
      titleJa: '逝去と永遠に続く遺産',
      titleHi: 'निधन और चिरस्थायी विरासत',
      titlePt: 'Falecimento e Legado Eterno',
      titleRu: 'Кончина и вечное наследие',
      titleZh: '辞世与永恒的遗产',
      titleDe: 'Tod und fortwährendes Vermächtnis',
      titleIt: 'Scomparsa ed Eredità Perenne',
      titleEl: 'Αποχώρηση και Αιώνια Κληρονομιά',
      titleUr: 'انتقال اور لازوال ورثہ',
      descAr: 'انتقلت إلى رحمة الله في 8 مايو 2026 مخلفة إرثاً إنسانياً وأكاديمياً وطهياً عظيماً يُخلَّد في هذا الموقع.',
      descEn: 'Passed away on May 8, 2026, leaving an indelible artistic, culinary, and human heritage preserved forever.',
      descFr: "S'est éteinte le 8 mai 2026, laissant un héritage artistique, culinaire et humain indélébile, préservé pour toujours.",
      descEs: 'Falleció el 8 de mayo de 2026, dejando un legado artístico, culinario y humano imborrable, preservado para siempre.',
      descJa: '2026年5月8日に逝去し、芸術的にも、料理の面でも、人としても消えることのない遺産を残しました。それは永遠に保存されていきます。',
      descHi: '8 मई 2026 को निधन हो गया, जो अपने पीछे एक अमिट कलात्मक, पाक और मानवीय विरासत छोड़ गईं, जो सदा के लिए संरक्षित रहेगी।',
      descPt: 'Faleceu em 8 de maio de 2026, deixando um legado artístico, culinário e humano indelével, preservado para sempre.',
      descRu: 'Скончалась 8 мая 2026 года, оставив неизгладимое художественное, кулинарное и человеческое наследие, сохранённое навсегда.',
      descZh: '于2026年5月8日辞世，留下永不磨灭的艺术、烹饪与人格遗产，被永久珍藏。',
      descDe: 'Verstarb am 8. Mai 2026 und hinterließ ein unauslöschliches künstlerisches, kulinarisches und menschliches Erbe, das für immer bewahrt wird.',
      descIt: 'Scomparsa l’8 maggio 2026, lasciando un’eredità artistica, culinaria e umana indelebile, custodita per sempre.',
      descEl: 'Απεβίωσε στις 8 Μαΐου 2026, αφήνοντας πίσω της μια ανεξίτηλη καλλιτεχνική, γαστρονομική και ανθρώπινη κληρονομιά, διατηρημένη για πάντα.',
      descUr: '8 مئی 2026 کو انتقال کر گئیں، اور اپنے پیچھے فن، کھانوں اور انسانیت کا ایک انمٹ ورثہ چھوڑ گئیں جو ہمیشہ محفوظ رہے گا۔'
    }
  ]
};
