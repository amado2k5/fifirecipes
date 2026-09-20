/**
 * Memorial and biographical archive of Dr. Fatma Alkawokgy (1943 - 2026)
 */

export interface FatmaBio {
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  birthYear: number;
  deathDate: string; // 2026-05-08
  institutionAr: string;
  institutionEn: string;
  yearsCollecting: number;
  taglineAr: string;
  taglineEn: string;
  biographyAr: string[];
  biographyEn: string[];
  philosophyAr: string;
  philosophyEn: string;
  memorialPlaqueAr: string;
  memorialPlaqueEn: string;
  milestones: {
    year: string;
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
  }[];
}

export const FATMA_BIOGRAPHY: FatmaBio = {
  nameAr: 'د. فاطمة القاوقجي',
  nameEn: 'Dr. Fatma Alkawokgy',
  titleAr: 'عازفة البيانو، الأستاذة الأكاديمية، ومؤرخة فنون الطهي التراثي المصري',
  titleEn: 'Classical Pianist, Academic Professor, and Chronicler of Egyptian Culinary Heritage',
  birthYear: 1943,
  deathDate: '2026-05-08',
  institutionAr: 'كلية التربية الموسيقية – الزمالك، جامعة حلوان، القاهرة',
  institutionEn: 'Faculty of Music Education – Zamalek, Helwan University, Cairo, Egypt',
  yearsCollecting: 20,
  taglineAr: 'عقود من الشغف في تدوين أسرار المطبخ المصري المتوارث بدقة الموسيقى ونبض المحبة',
  taglineEn: 'Decades of devotion chronicling the authentic secrets of Egyptian heritage cooking with musical precision and enduring warmth',
  philosophyAr: 'الطهي مثل العزف على البيانو؛ النغمات لا تكتمل إلا بالتناغم الصادق، والوجبة الأصيلة لا تنضج إلا بضبط الإيقاع وصبر الروح ونقاء المقادير.',
  philosophyEn: 'Cooking is much like playing the piano: a chord is never complete without harmonic balance, and a dish never reaches true soul without rhythm, patient fire, and devotion to pure ingredients.',
  memorialPlaqueAr: 'تخليداً لذكرى الراحلة الكريمة د. فاطمة القاوقجي (1943 – 2026). امرأة فاضلة جمعت بين رفعة الفن الموسيقي وأصالة البيت المصري العريق. صُنِع هذا الموقع ليبقى إرثها حيّاً في كل مطبخ وبيت.',
  memorialPlaqueEn: 'Dedicated to the immortal memory of Dr. Fatma Alkawokgy (1943–2026). An extraordinary artist who bridged the sublime heights of classical piano with the timeless warmth of the Egyptian culinary hearth. This living cookbook ensures her generous legacy lives on forever.',
  biographyAr: [
    'ولدت الدكتورة فاطمة القاوقجي في مصر عام 1943 في زمن كانت فيه تقاليد المطبخ والبيوت المصرية تُروى شفاهة وتتوارثها الأمهات بالخبرة الفطرية والمشاهدة.',
    'التحقت بكلية التربية الموسيقية بالزمالك عندما كانت في نحو الثامنة عشرة من عمرها (حوالي عام 1961)، حيث درست وتدرجت ونالت درجة الدكتوراه في فن البيانو، وعملت أستاذة ومربية لأجيال من الطلاب في قلب القاهرة، وظلت بالكلية حتى غادرتها في عام 1980، حاملة في وجدانها دقة النغم الموسيقي والنظام الصارم المقترن برقة الإحساس.',
    'وعلى مدار عقود متصلة، كرّست جهودها لجمع وتدوين واختبار وصفات المطبخ المصري التراثي الأصيل. كانت تقابل ربات البيوت والطهاة الكبار، وتدون كل طريقة بتفاصيلها الدقيقة وتزن مقاديرها بالميزان، وتجرب كل طبق مراراً حتى تتوصل إلى المقادير المعيارية المحققة التي تجمع بين المذاق الأصيل وسهولة الإعداد.',
    'تركت وراءها مخطوطات زاخرة بالخبرات والوصفات المتنوعة، والتي استخلصنا منها هذا الكتاب المرجعي الإلكتروني ليكون دليلاً جامعاً لكل محبي الطهي الأصيل حول العالم.',
    'رحلت عن عالمنا في الثامن من مايو عام 2026، تاركة أثراً طيباً لا يُمحى، وهذا الموقع هو نافذة الوفاء لروحها الطاهرة ليبقى علمها ومحبتها حاضراً في كل وجبة تُطهى بحب.'
  ],
  biographyEn: [
    'Dr. Fatma Alkawokgy was born in Egypt in 1943, during an era when the treasured wisdom of Egyptian kitchens was passed down orally through grandmothers and mothers.',
    'At around 18 years of age (circa 1961), she entered the prestigious Faculty of Music Education in Zamalek, Cairo. There she studied, earned her Doctorate in Classical Piano, and taught generations of aspiring artists and musicians until concluding her academic career there in 1980, blending rigorous artistic discipline with profound cultural sensibility.',
    'Alongside her musical accomplishments, Dr. Fatma embarked on a lifelong devotion: meticulously documenting, testing, cross-referencing, and perfecting hundreds of Egyptian culinary recipes. She interviewed master cooks, weighed ingredients by the gram, tested variations over flame, and recorded the subtle nuances between regional preparations.',
    'Her handwritten notes form the foundational core of this digital archive—now preserved with modern culinary science and multi-language access.',
    'Dr. Fatma passed away on May 8, 2026. This interactive cookbook stands as a perpetual monument to her generosity, her intellectual rigor, and her boundless love for Egyptian culture.'
  ],
  milestones: [
    {
      year: '1943',
      titleAr: 'الميلاد والنشأة',
      titleEn: 'Birth & Early Roots',
      descAr: 'ولدت في القاهرة ونشأت في أسرة مصرية عريقة تعشق الفن والأدب والتقاليد الأصيلة.',
      descEn: 'Born in Cairo into a cultured Egyptian family steeped in arts, literature, and hospitable traditions.'
    },
    {
      year: 'حوالي 1961',
      titleAr: 'الالتحاق بكلية التربية الموسيقية بالزمالك',
      titleEn: 'Entered Music Faculty in Zamalek (Age ~18)',
      descAr: 'التحقت بكلية التربية الموسيقية بالزمالك في سن الثامنة عشرة لدراسة فن البيانو والموسيقى الأكاديمية.',
      descEn: 'Entered the Faculty of Music Education in Zamalek at approximately age 18 to pursue classical piano and music education.'
    },
    {
      year: '1980',
      titleAr: 'إتمام المسيرة الأكاديمية بالزمالك',
      titleEn: 'Concluded Zamalek Faculty Career',
      descAr: 'نالت درجة الدكتوراه ودرّست أجيالاً من الموسيقيين حتى مغادرتها الكلية عام 1980 للتفرغ لآفاق جديدة.',
      descEn: 'Conferred her Doctorate in Piano, instructed generations of musicians, and completed her tenure at the faculty in 1980.'
    },
    {
      year: '1980 - 2020',
      titleAr: 'عقود من التوثيق والتحقيق التراثي',
      titleEn: 'Decades of Culinary Fieldwork',
      descAr: 'كرست جهودها لجمع وتحقيق وتجربة وصفات الطبخ المصري الأصيل عبر 3 وثائق ومخطوطات متكاملة.',
      descEn: 'Dedicated decades to collecting, cooking, testing, and compiling authentic Egyptian recipe manuscripts.'
    },
    {
      year: '8 مايو 2026',
      titleAr: 'الرحيل وبقاء الأثر',
      titleEn: 'Passing & Everlasting Legacy',
      descAr: 'انتقلت إلى رحمة الله في 8 مايو 2026 مخلفة إرثاً إنسانياً وأكاديمياً وطهياً عظيماً يُخلَّد في هذا الموقع.',
      descEn: 'Passed away on May 8, 2026, leaving an indelible artistic, culinary, and human heritage preserved forever.'
    }
  ]
};
