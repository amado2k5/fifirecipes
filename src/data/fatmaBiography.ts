/**
 * Memorial and biographical archive of Dr. Fatma Alkawokgy (1943 - 2026)
 */

export interface FatmaBio {
  nameAr: string;
  nameEn: string;
  nameFr: string;
  nameEs: string;
  titleAr: string;
  titleEn: string;
  titleFr: string;
  titleEs: string;
  birthYear: number;
  deathDate: string; // 2026-05-08
  institutionAr: string;
  institutionEn: string;
  yearsCollecting: number;
  taglineAr: string;
  taglineEn: string;
  taglineFr: string;
  taglineEs: string;
  biographyAr: string[];
  biographyEn: string[];
  biographyFr: string[];
  biographyEs: string[];
  philosophyAr: string;
  philosophyEn: string;
  philosophyFr: string;
  philosophyEs: string;
  memorialPlaqueAr: string;
  memorialPlaqueEn: string;
  memorialPlaqueFr: string;
  memorialPlaqueEs: string;
  milestones: {
    year: string;
    titleAr: string;
    titleEn: string;
    titleFr: string;
    titleEs: string;
    descAr: string;
    descEn: string;
    descFr: string;
    descEs: string;
  }[];
}

export const FATMA_BIOGRAPHY: FatmaBio = {
  nameAr: 'د. فاطمة القاوقجي',
  nameEn: 'Dr. Fatma Alkawokgy',
  nameFr: 'Dr Fatma Alkawokgy',
  nameEs: 'Dra. Fatma Alkawokgy',
  titleAr: 'عازفة البيانو، الأستاذة الأكاديمية، ومؤرخة فنون الطهي التراثي المصري',
  titleEn: 'Classical Pianist, Academic Professor, and Chronicler of Egyptian Culinary Heritage',
  titleFr: 'Pianiste Classique, Professeure Universitaire et Chroniqueuse du Patrimoine Culinaire Égyptien',
  titleEs: 'Pianista Clásica, Profesora Universitaria y Cronista del Patrimonio Culinario Egipcio',
  birthYear: 1943,
  deathDate: '2026-05-08',
  institutionAr: 'كلية التربية الموسيقية – الزمالك، جامعة حلوان، القاهرة',
  institutionEn: 'Faculty of Music Education – Zamalek, Helwan University, Cairo, Egypt',
  yearsCollecting: 20,
  taglineAr: 'عقود من الشغف في تدوين أسرار المطبخ المصري المتوارث بدقة الموسيقى ونبض المحبة',
  taglineEn: 'Decades of devotion chronicling the authentic secrets of Egyptian heritage cooking with musical precision and enduring warmth',
  taglineFr: "Des décennies de dévouement à consigner les secrets authentiques de la cuisine patrimoniale égyptienne, avec la précision de la musique et une chaleur durable",
  taglineEs: 'Décadas de devoción consignando los secretos auténticos de la cocina patrimonial egipcia, con la precisión de la música y una calidez perdurable',
  philosophyAr: 'الطهي مثل العزف على البيانو؛ النغمات لا تكتمل إلا بالتناغم الصادق، والوجبة الأصيلة لا تنضج إلا بضبط الإيقاع وصبر الروح ونقاء المقادير.',
  philosophyEn: 'Cooking is much like playing the piano: a chord is never complete without harmonic balance, and a dish never reaches true soul without rhythm, patient fire, and devotion to pure ingredients.',
  philosophyFr: "Cuisiner ressemble beaucoup à jouer du piano : un accord n'est jamais complet sans un équilibre harmonieux, et un plat n'atteint sa véritable âme que par le rythme, un feu patient et le dévouement à des ingrédients purs.",
  philosophyEs: 'Cocinar se parece mucho a tocar el piano: un acorde nunca está completo sin un equilibrio armónico, y un plato nunca alcanza su verdadera alma sin ritmo, fuego paciente y devoción por los ingredientes puros.',
  memorialPlaqueAr: 'تخليداً لذكرى الراحلة الكريمة د. فاطمة القاوقجي (1943 – 2026). امرأة فاضلة جمعت بين رفعة الفن الموسيقي وأصالة البيت المصري العريق. صُنِع هذا الموقع ليبقى إرثها حيّاً في كل مطبخ وبيت.',
  memorialPlaqueEn: 'Dedicated to the immortal memory of Dr. Fatma Alkawokgy (1943–2026). An extraordinary artist who bridged the sublime heights of classical piano with the timeless warmth of the Egyptian culinary hearth. This living cookbook ensures her generous legacy lives on forever.',
  memorialPlaqueFr: "Dédié à la mémoire immortelle du Dr Fatma Alkawokgy (1943–2026). Une artiste extraordinaire qui a su unir les sommets sublimes du piano classique à la chaleur intemporelle du foyer culinaire égyptien. Ce livre de cuisine vivant fait perdurer à jamais son généreux héritage.",
  memorialPlaqueEs: 'Dedicado a la memoria inmortal de la Dra. Fatma Alkawokgy (1943–2026). Una artista extraordinaria que unió las alturas sublimes del piano clásico con la calidez atemporal del hogar culinario egipcio. Este libro de cocina viviente asegura que su generoso legado perdure para siempre.',
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
  milestones: [
    {
      year: '1943',
      titleAr: 'الميلاد والنشأة',
      titleEn: 'Birth & Early Roots',
      titleFr: 'Naissance et Racines',
      titleEs: 'Nacimiento y Primeras Raíces',
      descAr: 'ولدت في القاهرة ونشأت في أسرة مصرية عريقة تعشق الفن والأدب والتقاليد الأصيلة.',
      descEn: 'Born in Cairo into a cultured Egyptian family steeped in arts, literature, and hospitable traditions.',
      descFr: "Née au Caire au sein d'une famille égyptienne cultivée, passionnée d'art, de littérature et de traditions hospitalières.",
      descEs: 'Nació en El Cairo en el seno de una culta familia egipcia apasionada por el arte, la literatura y las tradiciones hospitalarias.'
    },
    {
      year: 'حوالي 1961',
      titleAr: 'الالتحاق بكلية التربية الموسيقية بالزمالك',
      titleEn: 'Entered Music Faculty in Zamalek (Age ~18)',
      titleFr: 'Entrée à la Faculté de Musique de Zamalek (vers 18 ans)',
      titleEs: 'Ingreso a la Facultad de Música de Zamalek (~18 años)',
      descAr: 'التحقت بكلية التربية الموسيقية بالزمالك في سن الثامنة عشرة لدراسة فن البيانو والموسيقى الأكاديمية.',
      descEn: 'Entered the Faculty of Music Education in Zamalek at approximately age 18 to pursue classical piano and music education.',
      descFr: "Intègre la Faculté d'Éducation Musicale de Zamalek à environ 18 ans pour étudier le piano classique et la pédagogie musicale.",
      descEs: 'Ingresó en la Facultad de Educación Musical de Zamalek a los 18 años aproximadamente para estudiar piano clásico y educación musical.'
    },
    {
      year: '1980',
      titleAr: 'إتمام المسيرة الأكاديمية بالزمالك',
      titleEn: 'Concluded Zamalek Faculty Career',
      titleFr: 'Fin de Carrière à la Faculté de Zamalek',
      titleEs: 'Fin de la Carrera Académica en Zamalek',
      descAr: 'نالت درجة الدكتوراه ودرّست أجيالاً من الموسيقيين حتى مغادرتها الكلية عام 1980 للتفرغ لآفاق جديدة.',
      descEn: 'Conferred her Doctorate in Piano, instructed generations of musicians, and completed her tenure at the faculty in 1980.',
      descFr: 'Obtient son doctorat en piano, enseigne à des générations de musiciens, et achève sa carrière à la faculté en 1980.',
      descEs: 'Obtuvo su doctorado en piano, enseñó a generaciones de músicos y concluyó su etapa en la facultad en 1980.'
    },
    {
      year: '1980 - 2020',
      titleAr: 'عقود من التوثيق والتحقيق التراثي',
      titleEn: 'Decades of Culinary Fieldwork',
      titleFr: 'Décennies de Travail Culinaire de Terrain',
      titleEs: 'Décadas de Trabajo Culinario de Campo',
      descAr: 'كرست جهودها لجمع وتحقيق وتجربة وصفات الطبخ المصري الأصيل عبر 3 وثائق ومخطوطات متكاملة.',
      descEn: 'Dedicated decades to collecting, cooking, testing, and compiling authentic Egyptian recipe manuscripts.',
      descFr: 'Consacre des décennies à recueillir, cuisiner, tester et rassembler des manuscrits de recettes égyptiennes authentiques.',
      descEs: 'Dedicó décadas a recopilar, cocinar, probar y compilar manuscritos de recetas egipcias auténticas.'
    },
    {
      year: '8 مايو 2026',
      titleAr: 'الرحيل وبقاء الأثر',
      titleEn: 'Passing & Everlasting Legacy',
      titleFr: 'Disparition et Héritage Éternel',
      titleEs: 'Fallecimiento y Legado Eterno',
      descAr: 'انتقلت إلى رحمة الله في 8 مايو 2026 مخلفة إرثاً إنسانياً وأكاديمياً وطهياً عظيماً يُخلَّد في هذا الموقع.',
      descEn: 'Passed away on May 8, 2026, leaving an indelible artistic, culinary, and human heritage preserved forever.',
      descFr: "S'est éteinte le 8 mai 2026, laissant un héritage artistique, culinaire et humain indélébile, préservé pour toujours.",
      descEs: 'Falleció el 8 de mayo de 2026, dejando un legado artístico, culinario y humano imborrable, preservado para siempre.'
    }
  ]
};
