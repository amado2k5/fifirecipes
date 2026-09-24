import { Recipe } from '../../types';

export const pastasAndBakingRecipes: Recipe[] = [
  {
    id: 'pasta-01',
    title: 'المكرونة بالباشاميل والعصاج',
    titleEn: 'Classic Baked Macaroni Béchamel with Minced Meat Filling',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '40 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'pb1-1',
        name: 'مكرونة فرن (قلم / بيني)',
        standardAmount: '1/2 كيلو مكرونة فرن',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو مكرونة فرن',
          doc2: '1/2 كيلو مكرونة فرن',
          doc3: 'نصف ك مكرونة فرن'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb1-2',
        name: 'عصاج لحم مفروم أو بصل متبل',
        standardAmount: '1/4 إلى 1/2 كيلو عصاج لحم مفروم بالبصل',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'بصلة كبيرة أو عصاج (انظري باب اللحوم)',
          doc2: 'بصلة كبيرة أو عصاج',
          doc3: 'بصلة ك أو عصاج'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb1-3',
        name: 'دقيق أبيض للبشاميل',
        standardAmount: '3 ملاعق كبيرة دقيق',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة دقيق',
          doc2: '3 ملعقة كبيرة دقيق',
          doc3: '3 م ك دقيق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb1-4',
        name: 'حليب (لبن) مغلي دافئ',
        standardAmount: '3 أكواب لبن (أو حسب الحاجة)',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 أكواب لبن',
          doc2: '3 أكواب لبن',
          doc3: '3 أكواب لبن'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb1-5',
        name: 'بيض طازج للبشاميل والوجه',
        standardAmount: '4 بيضات (أو 2 بيضة مخفوقة)',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '4 بيضات – سمن أو زيت',
          doc2: '4 بيضات',
          doc3: '4 بيضات'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb1-6',
        name: 'سمن بلدي وزبدة للوجه',
        standardAmount: '2 ملعقة كبيرة سمن + قطعة زبد على الوجه',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'سمن أو زيت – قطعة زبد على الوجه',
          doc2: 'سمن أو زيت – قطعة زبد',
          doc3: 'سمن أو زيت – قطعة زبد'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb1-7',
        name: 'توابل (ملح وفلفل أسود وجوزة الطيب)',
        standardAmount: 'ملح وفلفل أسود',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح – فلفل',
          doc2: 'ملح – فلفل',
          doc3: 'ملح – فلفل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'عمل الباشاميل الحريري: يسيح السمن أو الزيت ويضاف له الدقيق مع التحريك الجيد بالملعقة الخشب على درجة حرارة هادئة حتى يصفر لونه دون أن يحترق. يرفع الإناء ويضاف إليه اللبن المغلي تدريجياً مع التقليب السريع بالمضرب السلك حتى لا يتكتل.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تتبيل وإنهاء الباشاميل: يعاد الإناء على درجة حرارة متوسطة مع استمرار التقليب ويتبل بالملح والفلفل حتى يصل إلى السمك المطلوب (سميكاً نوعاً ما). بعد أن يبرد الخليط يضاف إليه البيض المخفوق بالفلفل ويقلب جيداً.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'سلق المكرونة وتطعيمها: بعد سلق مكرونة الفرن تصفى، ويقدح السمن أو الزيت وتحمر فيه البصلة ثم تخلط بالمكرونة المسلوقة وتقلب جيداً وتتبل بالملح والفلفل (أو استبدال البصل بكمية من العصاج).',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'دمج المكرونة بالصلصة: تسكب 1/3 كمية الباشاميل على المكرونة المسلوقة وتخلط معها جيداً لتتماسك القطع لاحقاً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'رص الصينية: تدهن الصينية دهناً خفيفاً وتوضع بها نصف المكرونة، ثم تفرد طبقة العصاج المفروم في المنتصف، ثم توضع باقي المكرونة، ويسكب فوقها باقي الباشاميل المخفوق معه البيض.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'الخبز والتحمير: توضع قطعة زبد على الوجه وتدخل فرن متوسط الحرارة حتى يحمر الوجه وتكتسب لوناً ذهبياً غنياً.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 5,
      mergedIngredientsCount: 7,
      totalUniqueSteps: 6,
      totalMasterIngredients: 7,
      overlapPercentage: 96,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'وصفة المكرونة بالباشاميل الكلاسيكية متطابقة تماماً بين النسخ الثلاث؛ تم توحيد مقادير الدقيق واللبن والبيض وتقنية خلط ثلث الباشاميل مع المكرونة قبل الرص.'
    },
    rawDocVersions: {
      doc1: {
        title: 'المكرونة بالباشامل',
        pageNumber: 138,
        ingredients: ['1/2 كيلو مكرونة فرن', '3 ملعقة كبيرة دقيق', '3 أكواب لبن', 'ملح وفلفل', '4 بيضات', 'سمن أو زيت', 'بصلة كبيرة أو عصاج'],
        instructions: ['يسيح السمن ويضاف الدقيق ثم اللبن المغلي مع الضرب السريع', 'يعاد على النار حتى يسمك ثم يضاف البيض المخفوق بعد التبريد', 'تسلق المكرونة وتخلط بثلث الباشاميل', 'تدهن الصينية وتوضع المكرونة والعصاج ثم باقي الباشاميل والزبد']
      },
      doc3: {
        title: '23- المكرونة بالباشامل',
        pageNumber: 115,
        ingredients: ['نصف ك مكرونة فرن', '3 م ك دقيق', '3 أكواب لبن', 'ملح - فلفل', '4 بيضات', 'سمن أو زيت', 'بصلة ك أو عصاج'],
        instructions: ['يسيح السمن ويضاف له الدقيق', 'يرفع ويضاف اللبن المغلي مع التقليب السريع', 'يسكب 1/3 كمية الباشاميل على المكرونة', 'تدهن الصينية وتوضع بها المكرونة ثم باقي الباشاميل مع بيض مخفوق']
      }
    }
  },
  {
    id: 'pasta-02',
    title: 'الفتة المصرية بالخل والثوم والصلصة (الثريد)',
    titleEn: 'Egyptian Fatta with Garlic-Vinegar Sauce & Crispy Flatbread',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'pb2-1',
        name: 'خبز بلدي مقطع مكعبات ومحمص',
        standardAmount: '2 رغيف بلدي',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 رغيف بلدي',
          doc2: '2 رغيف بلدي',
          doc3: '2 رغيف بلدي (أو كيس خبز شامي لفتة الزبادي)'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb2-2',
        name: 'أرز أبيض مفلفل',
        standardAmount: '1 كوب أرز مصري مطهو أبيض',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'كوب أرز',
          doc2: 'كوب أرز',
          doc3: 'كوب أرز'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb2-3',
        name: 'مرق لحم أو ضأن ساخن',
        standardAmount: '2 كوب مرق لحم غني',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب مرق',
          doc2: '2 كوب مرق',
          doc3: '2 كوب مرق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb2-4',
        name: 'ثوم مفري للدقة',
        standardAmount: '1/2 رأس ثوم مفري',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 رأس ثوم مفري',
          doc2: '1/2 رأس ثوم مفري',
          doc3: 'نصف رأس ثوم مفري'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb2-5',
        name: 'صلصة طماطم معصورة',
        standardAmount: '2 ملعقة كبيرة صلصة طماطم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 م صلصة طماطم',
          doc2: '2 م صلصة طماطم',
          doc3: '2 م صلصة طماطم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb2-6',
        name: 'خل أبيض نقي',
        standardAmount: '2 ملعقة كبيرة خل',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 م خل',
          doc2: '2 م خل',
          doc3: '2 م خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb2-7',
        name: 'سمن بلدي وزيت',
        standardAmount: '2 ملعقة سمن أو زيت',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 م سمن أو زيت',
          doc2: '2 م سمن أو زيت',
          doc3: '2 م سمن أو زيت'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb2-8',
        name: 'زبادي وثوم ولوز محمر (لفتة الزبادي)',
        standardAmount: '4 أكواب زبادي + فص ثوم + لوز محمر',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '4 أكواب زبادي – ملعقة صغيرة ثوم مفري – لوز محمر (في فتة الزبادي)',
          doc2: '4 أكواب زبادي – ثوم ولوز',
          doc3: '4 أكواب زبادي – م ص ثوم مفري – لوز محمر'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'طهو الأرز الأبيض: يطهى الأرز الأبيض المفلفل بالطريقة المعتادة مع قليل من السمن والملح والماء حتى ينضج.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحميص الخبز: يقطع الخبز البلدي قطعاً صغيرة ويحمر في السمن أو الزيت أو يدخل في الفرن حتى يقرمش ويأخذ لوناً ذهبياً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'طشة الخل والثوم والصلصة: يسخن الزيت أو السمن ويحمر فيه الثوم المفري حتى يصفر لونه، ثم يضاف إليه الخل ويقلب جيداً في درجة حرارة متوسطة، ثم نضيف الصلصة المخففة بقليل من المرق والملح والفلفل، ونأخذ جزءاً من هذه الصلصة جانباً لتجميل الوجه.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تشريب الخبز: نضيف المرق المملح الساخن إلى بقية الصلصة حتى الغليان، ثم نسكبها على الخبز المحمر حتى يتشرب تماماً ويطرى مع بقاء قرمشة خفيفة.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'الرص الهندسي للفتة: نحضر طبق كبير للتقديم ونضع 1/2 كمية الخبز وفوقه 1/2 كمية الأرز ثم باقي الخبز وباقي الأرز، ونضع الصلصة على شكل خطوط لتجميل وجه الأرز، ويرص اللحم المسلوق المحمر فوقها (ترتيب: خبز – أرز – خبز – أرز – صلصة).',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'طريقة فتة الزبادي باللحم (النسخة الإضافية): يقطع اللحم مكعبات ويسلق مع الملح والفلفل والحبهان. يقطع الخبز الشامي مربعات ويحمر في الزيت. يخلط الزبادي بالثوم المفري. في طبق التقديم نضع الخبز المحمر ثم اللحم ويسكب المرق الساخن ثم الأرز الأبيض المفلفل ويصب الزبادي بالثوم فوق الأرز ويجمل باللوز المحمر بالسمن.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'فتة الزبادي باللحم واللوز المحمر',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'variation'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 4,
      mergedIngredientsCount: 8,
      totalUniqueSteps: 6,
      totalMasterIngredients: 8,
      overlapPercentage: 92,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'دمج وصفتي الفتة المصرية بالصلصة والخل والثوم وفتة الزبادي الشامية باللوز المحمر في سجل متكامل مع خطوات الرص الدقيقة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الفتة (الثريد) / الفتة بالزبادي',
        pageNumber: 125,
        ingredients: ['2 رغيف بلدي', 'كوب أرز', '2 كوب مرق', 'ملح وفلفل', '1/2 رأس ثوم مفري', '2 م صلصة طماطم', '2 م خل', '2 م سمن أو زيت', 'كيس خبز شامي', '4 أكواب زبادي', 'لوز'],
        instructions: ['يطهى الأرز الأبيض', 'يقطع الخبز ويحمر في السمن', 'يحمر الثوم ويضاف الخل والصلصة والمرق', 'يسكب المرق على الخبز', 'رص الطبقات: خبز - أرز - خبز - أرز - صلصة', 'فتة الزبادي بخلط الزبادي بالثوم وتزيين اللوز']
      },
      doc3: {
        title: '2- الفتة ( الثريد ) / 3- الفتة بالزبادي',
        pageNumber: 99,
        ingredients: ['2 رغيف بلدي', 'كوب أرز', '2 كوب مرق', 'نصف رأس ثوم مفري', '2 م صلصة طماطم', '2 م خل', '2 م سمن أو زيت'],
        instructions: ['يطهى الأرز الأبيض', 'يقطع الخبز قطعاً صغيرة ويحمر في الزيت أو الفرن', 'يحمر الثوم ويضاف الخل والصلصة', 'يغرف طبقات متناوبة مع الصلصة واللحم']
      }
    }
  },
  {
    id: 'bake-01',
    title: 'الجلاش بالبسطرمة والجبن الرومي',
    titleEn: 'Baked Goulash Pastry with Pastirma & Melted Cheese',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'pb3-1',
        name: 'رقائق جلاش طازجة',
        standardAmount: '1/2 كيلو لفة جلاش',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو جلاش',
          doc2: '1/2 كيلو جلاش',
          doc3: 'سلاج ك 1/2 (جلاش)'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb3-2',
        name: 'بسطرمة بلدي منقاة من الثوم الخارجي',
        standardAmount: '1/4 كيلو بسطرمة شرائح',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو بسطرمة',
          doc2: '1/4 كيلو بسطرمة',
          doc3: '1/4 ك بسطرمة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb3-3',
        name: 'حليب (لبن) وقشطة للتشريب والوجه',
        standardAmount: '1 كوب لبن كبير + قطعة قشطة للوجه',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب لبن كبير – قشدة للوجه',
          doc2: '1 كوب لبن كبير – قشدة',
          doc3: '1 كوب لبن كبير – قشدة للوجه'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'pb3-4',
        name: 'سمن سايح وزيت',
        standardAmount: '1/2 كوب زيت أو سمن سايح',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب زيت أو سمن – زيت',
          doc2: '1/2 كوب زيت أو سمن',
          doc3: '1/2 كوب زيت أو سمن سايح'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'رص الطبقة الأولى بدون دهن الرقائق: تدهن صينية خفيفاً بالزيت وتوضع فيها 1/2 كمية الجلاش مرة واحدة بدون دهن طبقات الجلاش الفردية (سر التوريق السريع).',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 2,
        text: 'وضع الحشوة: ترص البسطرمة بانتظام فوقها ثم تغطى بباقي كمية الجلاش دون تقطيع (يمكن استعمال أي حشوة أخرى كالعصاج أو الجبن).',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'صب السمن الساخن: يسخن الزيت أو السمن السايح تسخيناً جيداً جداً دون أن يقدح، ويصب فوق الجلاش مع مراعاة عدم تقطيع الجلاش ليتغلغل السمن بين الطبقات.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'الخبز المبدئي: يدخل فرن متوسط الحرارة حتى يصبح لونها ذهبياً.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'التشريب باللبن والقشطة: يصب فوقها كوب اللبن الكبير ويضاف إليه قطعة قشطة على الوجه، وتظل في الفرن حتى تتشرب السائل ويحمر الوجه.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'التهدئة والقلب: بعد خروجها مباشرة تغطى حتى تظل طرية، وبعد أن تبرد تقلب في طبق على الوجه الآخر وتقدم مربعات مقرمشة.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 4,
      totalUniqueSteps: 6,
      totalMasterIngredients: 4,
      overlapPercentage: 94,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'طريقة مبتكرة للجلاش بدون دهن راق بـ راق، موحدة بين الوثائق الثلاث مع تقنية صب السمن الدافئ ثم تشريبه بالحليب والقشطة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الجلاش بالبسطرمة',
        pageNumber: 155,
        ingredients: ['1/2 كيلو جلاش', '1/2 كوب زيت أو سمن', '1/4 كيلو بسطرمة', '1 كوب لبن كبير', 'قشدة للوجه'],
        instructions: ['تدهن صينية ويوضع نصف الجلاش بدون دهن طبقات', 'ترص البسطرمة وتغطى بباقي الجلاش', 'يسخن السمن ويصب فوق الجلاش', 'يدخل فرن متوسط حتى يصير ذهبيا', 'يصب كوب اللبن والقشطة حتى يحمر', 'تغطى وتقلب على الوجه الآخر']
      },
      doc3: {
        title: '7- الجلاش بالبسطرمة',
        pageNumber: 134,
        ingredients: ['1/2 ك جلاش', '1/2 كوب زيت أو سمن', '1/4 ك بسطرمة', '1 كوب لبن كبير - قشدة للوجه'],
        instructions: ['تدهن صينية خفيفا بالزيت وتوضع نصف كمية الجلاش بدون دهن الطبقات', 'ترص البسطرمة بانتظام', 'يسخن الزيت أو السمن السايح تسخينا جيدا دون أن يقدح', 'يصب فوق الجلاش', 'يصب كوب اللبن الكبير وتظل في الفرن حتى تتشرب']
      }
    }
  },
  {
    id: 'pasta-03',
    title: 'الأرز المفلفل',
    titleEn: 'Plain Fluffy Rice with Toasted Vermicelli',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'سلق',
    prepTime: '5 دقائق',
    cookTime: '30 دقيقة',
    servings: '3-4 أفراد',
    masterIngredients: [
      {
        id: 'pb4-1',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb4-2',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb4-3',
        name: 'شعرية',
        nameEn: 'Vermicelli',
        standardAmount: '1 ملعقة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb4-4',
        name: 'ملح',
        nameEn: 'Salt',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb4-5',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'ينقى الأرز ويغسل جيدا مرارا.',
        textEn: 'Sort and wash the rice thoroughly, several times.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يسخن السمن أو الزيت ويضاف إليه قليل من الشعرية حتى تحمر.',
        textEn: 'Heat the ghee or oil and add a little vermicelli, stirring until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف كوب الماء والملح وملعقة خل حسب الرغبة وتترك حتى الغليان.',
        textEn: 'Add the cup of water, salt, and a tablespoon of vinegar if desired, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف الأرز إلى الماء المغلي حتى يتشرب تماما، ثم تهدأ درجة الحرارة جدا ويغطى ويترك حوالي نصف ساعة ويقلب من آن لآخر حتى النضج.',
        textEn: 'Add the rice to the boiling water until fully absorbed, then lower the heat very low, cover, and cook for about half an hour, stirring occasionally, until done.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يمكن أن يطهى الأرز بدون شعرية.',
        textEn: 'The rice can also be made without the vermicelli.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الأرز المفلفل',
        ingredients: ['كوب أرز', '2 ملعقة كبيرة سمن أو زيت', 'م شعرية', 'ملح', 'كوب ماء'],
        instructions: ['ينقي الأرز ويغسل جيدا مرارا.', 'يسخن السمن أو الزيت ويضاف إليه قليل من الشعرية حتى تحمر.', 'يضاف كوب الماء والملح وملعقة خل حسب الرغبة وتترك حتى الغليان.', 'يضاف الأرز إلى الماء المغلي حتى يتشرب تماما ثم تهدأ درجة الحرارة جدا ويغطى ويترك حوالي ½ ساعة ويقلب من آن لآخر حتى النضج.', 'يمكن أن يطهى الأرز بدون شعرية.']
      }
    }
  },
  {
    id: 'pasta-04',
    title: 'الأرز المعمَر',
    titleEn: 'Baked Rice in Milk ("Roz Moamar")',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '40 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb5-1',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb5-2',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb5-3',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb5-4',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'ينقع الأرز حوالي ساعة.',
        textEn: 'Soak the rice for about an hour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر بايركس ويدهن خفيفا بملعقة سمن ثم يوضع فيه الأرز.',
        textEn: 'Lightly grease a Pyrex dish with a tablespoon of ghee, then add the rice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يصب فوق الأرز اللبن الساخن المتبل بالملح والفلفل ويغطى.',
        textEn: 'Pour hot milk, seasoned with salt and pepper, over the rice, and cover.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يدخل فرن متوسط الحرارة حتى يقرب من النضج.',
        textEn: 'Bake in a medium oven until nearly cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تسيَح ملعقة سمن وتسكب على سطح الأرز بعد رفع الغطاء، وتترك حتى يتم النضج كاملا.',
        textEn: 'Melt a tablespoon of ghee and pour over the surface of the rice after removing the cover, and continue baking uncovered until fully cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الأرز المعمَر',
        ingredients: ['كوب أرز', '2 ملعقة كبيرة سمن', '2 كوب لبن', 'ملح', 'فلفل'],
        instructions: ['ينقع الأرز حوالي ساعة.', 'نحضر بايركس ويدهن خفيفا بمعلقة سمن ثم يوضع فيه الأرز.', 'يصب فوق الأرز اللبن الساخن المتبل بالملح والفلفل ويغطى.', 'يدخل فرن متوسط الحرارة حتى يقرب من النضج.', 'تسيَح ملعقة سمن وتسكب على سطح الأرز بعد رفع الغطاء وتركه حتى يتم النضج كاملا.']
      }
    }
  },
  {
    id: 'pasta-05',
    title: 'أرز معمَر بالدجاج أو اللحوم',
    titleEn: 'Baked Rice in Milk with Chicken or Beef',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '45 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'pb6-1',
        name: 'لحم أو دجاجة',
        nameEn: 'Beef or chicken',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb6-2',
        name: 'أرز منقوع',
        nameEn: 'Soaked rice',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb6-3',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb6-4',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb6-5',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع اللحم مكعبات أو الدجاج أرباعا، وتتبل جيدا بالملح والفلفل.',
        textEn: 'Cut the beef into cubes, or the chicken into quarters, and season well with salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر البايركس ويدهن خفيفا بالسمن.',
        textEn: 'Lightly grease a Pyrex dish with ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع فيه نصف كمية الأرز المنقوع ثم اللحم أو الدجاج المقطع ثم باقي الأرز.',
        textEn: 'Layer in half the soaked rice, then the meat or chicken, then the rest of the rice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يتم نضجه بنفس خطوات الأرز المعمر السابق (اللبن الساخن المتبل، الفرن، ثم السمن على الوجه).',
        textEn: 'Finish as with the plain baked rice above: pour over hot seasoned milk, bake, then drizzle ghee on top to finish.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'أرز معمَر بالدجاج أو اللحوم',
        ingredients: ['1 كيلو لحم أو دجاجة', 'كوب أرز منقوع', '2 كوب لبن', 'ملح', 'فلفل', 'سمن'],
        instructions: ['يقطع اللحم مكعبات أو الدجاج إربع وتتبل جيدا بالملح والفلفل.', 'نحضر الباريركس ويدهن خفيفا بالسمن.', 'يوضع فيه ½ كمية الأرز المنقوع ثم اللحم أو الدجاج المقطع ثم باقي الأرز.', 'يتم نضجه بنفس خطوات الأرز المعمر  السابق.']
      }
    }
  },
  {
    id: 'pasta-06',
    title: 'أرز بالخلطة والكراميل',
    titleEn: 'Rice with Chicken Liver, Caramel and Toasted Nuts',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'pb7-1',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb7-2',
        name: 'كبدة وقونصة الدجاج',
        nameEn: 'Chicken liver and gizzards',
        standardAmount: 'حسب الرغبة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb7-3',
        name: 'بصلة متوسطة',
        nameEn: 'Medium onion',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb7-4',
        name: 'زبيب',
        nameEn: 'Raisins',
        standardAmount: '2 ملعقة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb7-5',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb7-6',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb7-7',
        name: 'لوز أو بندق',
        nameEn: 'Almonds or hazelnuts',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb7-8',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb7-9',
        name: 'كراميل (انظري الوصفة التالية)',
        nameEn: 'Caramel (see recipe below)',
        standardAmount: 'الكمية الناتجة',
        category: 'other',
        sourceVariations: {
          doc1: 'الكمية الناتجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'ينقى الأرز ويغسل جيدا.',
        textEn: 'Sort and wash the rice well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمر الكبدة والقونصة في سمن أو زيت وتنشل، ثم يحمر اللوز أو البندق في نفس الإناء ثم الزبيب حتى يصفر وينشل.',
        textEn: 'Brown the liver and gizzards in ghee or oil and remove; in the same pot, toast the almonds or hazelnuts, then the raisins until golden, and remove.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر إناء به زيت أو سمن لتحمير البصلة، ثم تصب فوقها المرق المتبل بالملح والفلفل والبهار وتترك حتى تغلي.',
        textEn: 'Brown the onion in oil or ghee in a pot, then pour in the broth seasoned with salt, pepper and mixed spice, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد الغليان تسكب باحتراس على الكراميل، ثم نضع الأرز والكبد والقونصة، ويترك على درجة حرارة هادئة جدا حتى ينضج الأرز.',
        textEn: 'Once boiling, carefully pour over the caramel, then add the rice, liver and gizzards, and cook over very low heat until the rice is done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يسكب في طبق التقديم ويجمل الوجه بالمكسرات والزبيب.',
        textEn: 'Transfer to the serving dish and garnish with the toasted nuts and raisins.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'أرز بالخلطة والكراميل',
        ingredients: ['2 كوب أرز', 'كبدة وقونصة الدجاج', 'بصلة متوسطة', '2م زبيب', '2 كوب مرق', 'ملح', 'فلفل بهار', 'لوز أو بندق', 'سمن أو زيت'],
        instructions: ['ينقى الأرز ويغسل جيدا.', 'تحمر الكبدة والقونصة في سمن أو زيت وتنشل ثم يحمر اللوز أو البندق في نفس الإناء ثم الزبيب حتى يصفر وينشل.', 'نحضر إناء به زيت أو سمن لتحمير البصلة ثم تصب فوقها المرق المتبل بالملح والفلفل والبهار وتترك حتى تغلي.', 'بعد الغليان تسكب باحتراس على الكراميل ثم نضع الأرز والكبد والقونصة ويترك على درجة حرارة هادئة جدا حتى ينضج الأرز.', 'يسكب في طبقة التقديم ويجمل الوجه بالمكسرات والزبيب.']
      }
    }
  },
  {
    id: 'pasta-07',
    title: 'عمل الكراميل',
    titleEn: 'Simple Caramel (for Rice with Caramel)',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '2 دقائق',
    cookTime: '8 دقائق',
    servings: 'يكفي لطاجن أرز واحد',
    masterIngredients: [
      {
        id: 'pb8-1',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '2 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb8-2',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1 ملعقة كبيرة',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb8-3',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: '1/2 ملعقة صغيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يحرق السكر مع الماء والليمون على درجة حرارة هادئة حتى تصبح كراميلة، وتترك حتى تبرد تماما وتجمد.',
        textEn: 'Cook the sugar with the water and lemon juice over low heat until it caramelizes, then let it cool completely and set.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 1,
      totalMasterIngredients: 3,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل الكراميل',
        ingredients: ['2 ملعقة كبيرة سكر', 'ملعقة كبيرة ماء', '½ ملعقة صغيرة  ليمون'],
        instructions: ['يحرق السكر مع الماء والليمون على درجة حرارة هادئة حتى تصبح كراميلة وتترك حتى تبرد تماما وتجمد']
      }
    }
  },
  {
    id: 'pasta-08',
    title: 'أرز بالباشامل',
    titleEn: 'Baked Rice with Assag and Béchamel',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb9-1',
        name: 'أرز مفلفل (انظري الوصفة أعلاه)',
        nameEn: 'Cooked fluffy rice (see recipe above)',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb9-2',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb9-3',
        name: 'عصاج (انظري باب اللحوم)',
        nameEn: '"Assag" minced meat filling (see meats section)',
        standardAmount: 'قليل',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb9-4',
        name: 'باشاميل (انظري باب الخضروات)',
        nameEn: 'Béchamel (see vegetables section)',
        standardAmount: '1-2 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '1-2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يطهى الأرز الأبيض بطريقة الأرز المفلفل.',
        textEn: 'Cook plain white rice as for fluffy rice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر بايركس ونضع فيه الأرز المطهو مع خلطه جيدا بالعصاج، ثم نسكب عليه الباشاميل.',
        textEn: 'In a Pyrex dish, mix the cooked rice well with the assag, then pour the béchamel over it.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يدخل فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Bake in a medium oven until golden on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'أرز بالباشامل',
        ingredients: ['كوب أرز', 'ملح', 'فلفل', 'قليل من العصاج (انظري باب اللحوم)'],
        instructions: ['يطهى الأرز الأبيض بطريقة الأرز المفلفل.', 'نحضر بايركس ونضع فيه الأرز المطهو مع خلطه جيدا بالعصاج ثم نسكب عليه الباشامل.', 'يدخل فرن متوسط الحرارة حتى يحمر الوجه.']
      }
    }
  },
  {
    id: 'pasta-09',
    title: 'أرز الشركسية',
    titleEn: 'Circassian-Style Rice with Chicken',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb10-1',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb10-2',
        name: 'دجاجة مسلوقة',
        nameEn: 'Boiled chicken',
        standardAmount: '1 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb10-3',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '4 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb10-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb10-5',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb10-6',
        name: 'حبهان ومستكة',
        nameEn: 'Cardamom and mastic',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقدح السمن أو الزيت ويضاف إليه الحبهان والمستكة لإعطاء نكهة طيبة.',
        textEn: 'Heat the ghee or oil and add the cardamom and mastic for flavor.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف المرق ويترك حتى الغليان ويتبل بالملح والفلفل.',
        textEn: 'Add the broth, bring to a boil, and season with salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يقطع الدجاج المسلوق شرائح صغيرة.',
        textEn: 'Cut the boiled chicken into small strips.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يوضع الأرز في المرق ويقلب معه شرائح الدجاج.',
        textEn: 'Add the rice to the broth, stirring in the chicken strips.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يترك الأرز على درجة حرارة هادئة بدون تقليب حتى يمتص ماءه ويصير أشبه بالعصيدة.',
        textEn: 'Cook over low heat without stirring until it absorbs the liquid and takes on a thick, porridge-like texture.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'أرز الشركسية',
        ingredients: ['كوب أرز', 'دجاجة مسلوقة', '4 أكواب مرق', '2 ملعقة كبيرة سمن أو زيت', 'ملح فلفل', 'حبهان', 'مستكة'],
        instructions: ['يقدح السمن أو الزيت ويضاف إليه الحبهان والمستكة لإعطاء نكهة طيبة.', 'يضاف المرق ويترك حتى الغليان ويتبل بالملح والفلفل.', 'يقطع الدجاج المسلوق شرائح صغيرة.', 'يوضع الأرز في المرق ويقلب معه شرائح الدجاج.', 'يترك الأرز على درجة حرارة هادئة بدون تقليب حتى يمتص ماءه ويصير أشبه بالعصيدة.']
      }
    }
  },
  {
    id: 'pasta-10',
    title: 'الأرز بالخضار والعصاج',
    titleEn: 'Layered Rice, Peas, Carrots and Assag Timbale',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'pb11-1',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1.5 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb11-2',
        name: 'مرق أو ماء',
        nameEn: 'Broth or water',
        standardAmount: '1.5 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb11-3',
        name: 'بصلة متوسطة',
        nameEn: 'Medium onion',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb11-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb11-5',
        name: 'جزر',
        nameEn: 'Carrots',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb11-6',
        name: 'عصاج (انظري باب اللحوم)',
        nameEn: '"Assag" minced meat filling (see meats section)',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb11-7',
        name: 'بازلاء',
        nameEn: 'Green peas',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسيح الزيت أو السمن ويحمر فيه البصلة المفرية حتى تصفر.',
        textEn: 'Melt the oil or ghee and brown the grated onion in it until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يسكب عليها المرق أو الماء المتبل بالملح والفلفل حتى الغليان.',
        textEn: 'Pour in the seasoned broth or water and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع الأرز داخل المرق أو الماء ويترك على درجة حرارة هادئة حتى يتشرب السائل، ثم نخفض الحرارة جدا حتى النضج.',
        textEn: 'Add the rice to the broth and simmer over low heat until it absorbs the liquid, then lower the heat further until fully cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تسلق البازلاء مع الملح والفلفل ثم ترفع وتصفى من الماء، ويتبع نفس الشيء في سلق الجزر.',
        textEn: 'Boil the peas with salt and pepper, then drain; do the same for the carrots.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يجهز العصاج بالطريقة المعروفة.',
        textEn: 'Prepare the assag as usual.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نحضر إناء به زيت وتشوح فيه البازلاء والجزر كل على حدة.',
        textEn: 'Sauté the peas and carrots separately in a little oil.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'نحضر سلطانية عميقة نضع في قاعها طبقة من العصاج، ثم طبقة من البازلاء ثم طبقة من الأرز ثم طبقة من الجزر، ويعاد الترتيب مرة أخرى حتى ينتهي المقدار.',
        textEn: 'In a deep bowl, layer assag on the bottom, then peas, then rice, then carrots, and repeat until finished.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'نحضر طبق التقديم المستدير ونضعه فوق السلطانية ونقلب الأرز باحتراس، ويمكن تجميل الوجه بالصنوبر.',
        textEn: 'Place a round serving plate over the bowl and carefully invert; garnish with pine nuts if desired.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الأرز بالخضار والعصاج',
        ingredients: ['½1 كوب أرز', '½1 كوب مرق أو ماء', 'بصلة متوسطة', '2 ملعقة سمن أو زيت', '½ كيلو جزر', '¼ كيلو عصاج (انظري باب اللحوم)', '¼ كيلو بازلاء'],
        instructions: ['يسيح الزيت أو السمن ويحمر فيه البصلة المفرية حتى تصفر.', 'يسكب عليها المرق أو الماء المتبل بالملح والفلفل حتى الغليان.', 'نضع الأرز داخل المرق أو الماء ويترك على درجة حرارة هادئة حتى يتشرب السائل ثم نخفض الحرارة جدا حتى النضج.', 'تسلق البسلة مع الملح والفلفل ثم ترفع وتصفى من الماء.', 'يتبع نفس الشيء في سلق الجزر.', 'يجهز العصاج بالطريقة المعروفة.', 'نحضر إناء به زيت وتشوح فيه البسلة والجزر كل على حدة.', 'نحضر سلطانية عميقة نضع في قاعها راق من العصاج ثم نضع فوقه راق من البسلة ثم راق من الأرز ثم راق من الجزر ثم يعاد الترتيب مرة أخرى حتى ينتهي المقدار.', 'نحضر طبق التقديم المستدير ونضعه فوق السلطانية ونقلب الأرز باحتراس . وممكن تجميل الوجه بالصنوبر.']
      }
    }
  },
  {
    id: 'pasta-11',
    title: 'الفتَة (الثريد)',
    titleEn: 'Fatta (Thareed) with Rice and Garlic-Tomato Sauce',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'pb12-1',
        name: 'خبز بلدي',
        nameEn: 'Baladi bread',
        standardAmount: '2 رغيف',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 رغيف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb12-2',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb12-3',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb12-4',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb12-5',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1/2 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb12-6',
        name: 'صلصة طماطم',
        nameEn: 'Tomato paste',
        standardAmount: '2 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb12-7',
        name: 'خل',
        nameEn: 'Vinegar',
        standardAmount: '2 ملعقة كبيرة',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb12-8',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يطهى الأرز الأبيض مثل الطريقة السابقة.',
        textEn: 'Cook plain white rice as before.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقطع الخبز قطعا صغيرة ويحمر في الزيت أو السمن أو يدخل الفرن.',
        textEn: 'Cut the bread into small pieces and fry in oil or ghee, or toast in the oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسخن الزيت أو السمن ويحمر فيه الثوم حتى يصفر، ثم يضاف إليه الخل ويقلب جيدا على درجة حرارة متوسطة.',
        textEn: 'Heat oil or ghee and brown the garlic until golden, then add the vinegar and stir well over medium heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف الصلصة المخففة بقليل من المرق وتقلب جيدا مع الملح والفلفل.',
        textEn: 'Add the tomato paste thinned with a little broth, and mix well with salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نأخذ جزءا من هذه الصلصة ونضعه في طبق صغير لتجميل وجه الأرز.',
        textEn: 'Set aside a small portion of this sauce to garnish the top of the rice.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 6,
        text: 'نضيف المرق المملح إلى بقية الصلصة حتى الغليان، ثم نسكبها على الخبز المحمر حتى يتشرب تماما.',
        textEn: 'Add the seasoned broth to the rest of the sauce and bring to a boil, then pour it over the fried bread until fully absorbed.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'نحضر طبقا كبيرا للتقديم ونضع نصف كمية الخبز وفوقه نصف كمية الأرز ثم الخبز ثم نصف الأرز الباقي، ونضع الصلصة المحفوظة لتجميل الأرز.',
        textEn: 'On a large serving platter, layer half the bread, then half the rice, then the rest of the bread, then the remaining rice, and garnish the top with the reserved sauce.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الفتَة (الثريد)',
        ingredients: ['2 رغيف بلدي', 'كوب أرز', '2 كوب مرق', 'ملح', 'فلفل', '½ رأس ثوم مفري', '2 م صلصة طماطم', '2 م خل', '2 م سمن أو زيت'],
        instructions: ['يطهى الأرز الأبيض مثل الطريقة السابقة.', 'يقطع الخبز قطعا صغيرة ويحمر في الزيت أو السمن أو يدخل في الفرن.', 'يسخن الزيت أو السمن ويحمر فيه الثوم حتى يصفر ثم يضاف إليه الخل ويقلب جيدا في درجة حرارة متوسطة.', 'نضيف الصلصة المخففة بقليل من المرق وتقلب جيدا مع الملح والفلفل.', 'نأخذ جزء من هذه الصلصة ونضعها في طبق صغير لتجميل وجه الأرز.', 'نضيف المرق المملح إلى بقية الصلصة حتى الغليان ثم نسكبها على الخبز المحمر حتى يتشرب تماما.', 'نحضر طبق كبير للتقديم ونضع ½ كمية الخبز وفوقه ½ كمية الأرز ثم الخبز ونصف الأرز الباقي ونضع الصلصة لتجميل الأرز.', 'خبز ___ أرز ___ خبز ___أرز ___صلصة']
      }
    }
  },
  {
    id: 'pasta-12',
    title: 'الشعرية',
    titleEn: 'Toasted Vermicelli in Tomato Broth',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb13-1',
        name: 'شعرية',
        nameEn: 'Vermicelli',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb13-2',
        name: 'بصلة متوسطة',
        nameEn: 'Medium onion',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb13-3',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '1/4 كيلو أو 2 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو أو 2 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb13-4',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb13-5',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb13-6',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقدح السمن أو الزيت وتحمر فيه الشعرية حتى يصير لونها ذهبيا.',
        textEn: 'Heat the ghee or oil and toast the vermicelli in it until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب في الخلاط البصل والطماطم، وممكن استبدال الطماطم بالصلصة.',
        textEn: 'Blend the onion and tomatoes (or tomato paste).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر إناء آخر ونضع فيه المرق وخليط البصل والطماطم ونتبلهم بالملح والفلفل حتى الغليان.',
        textEn: 'In another pot, combine the broth with the onion-tomato mixture, season with salt and pepper, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يسكب المرق بالصلصة على الشعرية ويقلبوا جيدا، ثم تهدأ الحرارة وبعد أن تتشرب الشعرية السائل تخفض الحرارة حتى النضج.',
        textEn: 'Pour the broth-sauce over the vermicelli and mix well, then lower the heat, and once the vermicelli absorbs the liquid, reduce further until fully cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'ممكن استبدال المرق بالماء مع زيادة كمية السمن أو الزيت إلى الضعف.',
        textEn: 'Broth can be replaced with water, doubling the amount of ghee or oil.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الشعرية',
        ingredients: ['½ كيلو شعرية', 'بصلة متوسطة', '¼  كيلو طماطم أو 2 ملعقة صلصة طماطم', '2 كوب مرق', 'ملح', 'فلفل', '2 ملعقة زيت أو سمن'],
        instructions: ['يقدح السمن أو الزيت وتحمر فيه الشعرية حتى يصير لونها ذهبياً.', 'يضرب في الخلاط البصل والطماطم وممكن استبدال الطماطم بالصلصة.', 'نحضر إناء آخر و ونضع فيه المرق وخليط البصل والطماطم ونتبلهم بالملح والفلفل حتى الغليان.', 'يسكب المرق بالصلصة على الشعرية ويقلبوا جيدا ثم تهدأ الحرارة وبعد أن تتشرب الشعرية السائل تخفض الحرارة حتى النضج.', 'ممكن استبدال المرق بالماء مع زيادة كمية السمن أو الزيت إلى الضعف.']
      }
    }
  },
  {
    id: 'pasta-13',
    title: 'لسان العصفور بالمرق',
    titleEn: 'Toasted Orzo in Tomato Broth',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb14-1',
        name: 'لسان عصفور',
        nameEn: 'Orzo pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb14-2',
        name: 'بصلة متوسطة وطماطم',
        nameEn: 'Medium onion and tomato',
        standardAmount: '1 بصلة و1/4 كيلو طماطم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة و1/4 كيلو طماطم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb14-3',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '4 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb14-4',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb14-5',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb14-6',
        name: 'زبيب',
        nameEn: 'Raisins, for garnish',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقدح السمن أو الزيت ويحمر فيه لسان العصفور حتى يصير لونه ذهبيا.',
        textEn: 'Heat the ghee or oil and toast the orzo in it until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب في الخلاط البصل والطماطم، وممكن استبدال الطماطم بالصلصة.',
        textEn: 'Blend the onion and tomato (or use tomato paste instead).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف أكواب المرق (أو ماء متبل بالملح والفلفل مع مضاعفة كمية السمن أو الزيت) لخليط البصل والطماطم في إناء آخر ويترك حتى الغليان.',
        textEn: 'Add the broth (or seasoned water, doubling the ghee or oil) to the onion-tomato mixture in another pot and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يسكب المرق بالصلصة على لسان العصفور ويقلبوا جيدا، ثم تهدأ الحرارة وبعد أن يتشرب السائل تخفض الحرارة حتى النضج.',
        textEn: 'Pour the broth-sauce over the orzo and mix well, then lower the heat, and once the liquid is absorbed, reduce further until fully cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد غرف لسان العصفور في طبق التقديم يجمل بالزبيب المحمر في السمن.',
        textEn: 'Once served, garnish with raisins toasted in ghee.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'لسان العصفور بالمرق',
        ingredients: ['½ كيلو لسان عصفور', '4 أكواب مرق', 'ملح', 'فلفل', 'سمن أو زيت'],
        instructions: ['يقدح السمن أو الزيت ويحمر فيه لسان العصفور حتى يصير لونه ذهبيا.', 'يضرب في الخلاط البصل والطماطم وممكن استبدال الطماطم بالصلصة.', 'تضاف أكواب المرق (أو ماء متبل بالملح والفلفل مع مضاعفة كمية السمن أو الزيت) لخليط البصل و الطماطم في إناء آخر و يترك حتى الغليان.', 'يسكب المرق بالصلصة على لسان العصفور ويقلبوا جيدا ثم تهدأ الحرارة وبعد أن يتشرب السائل تخفض الحرارة حتى النضج.', 'بعد غرف لسان العصفور في طبق التقديم يجمل بالزبيب المحمر في السمن.']
      }
    }
  },
  {
    id: 'pasta-14',
    title: 'لسان العصفور مع اللحم',
    titleEn: 'Baked Orzo with Beef in Tomato Broth',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '40 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'pb15-1',
        name: 'لسان عصفور',
        nameEn: 'Orzo pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb15-2',
        name: 'لحم',
        nameEn: 'Beef',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb15-3',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb15-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb15-5',
        name: 'بصلة وطماطم',
        nameEn: 'Onion and tomato',
        standardAmount: '1 بصلة و1/4 كيلو طماطم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة و1/4 كيلو طماطم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb15-6',
        name: 'مرق أو ماء',
        nameEn: 'Broth or water',
        standardAmount: '4 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسلق اللحم المقطع والمتبل بالملح والفلفل والبهار نصف سلق فقط.',
        textEn: 'Parboil the seasoned diced beef until only half cooked.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب في الخلاط البصل والطماطم، وممكن استبدال الطماطم بالصلصة.',
        textEn: 'Blend the onion and tomato (or use tomato paste instead).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسكب المرق بالصلصة على لسان العصفور واللحم في بايركس.',
        textEn: 'Pour the broth-sauce over the orzo and meat in a Pyrex dish.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن متوسط الحرارة حتى يتم النضج.',
        textEn: 'Bake in a medium oven until fully cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'لسان العصفور مع اللحم',
        ingredients: ['½ كيلو لسان عصفور', '½ كيلو لحم', 'ملح', 'ففل', 'بهار', 'سمن أو زيت', '4 أكواب مرق أو ماء'],
        instructions: ['يسلق اللحم المقطع والمتبل بالملح والفلفل والبهار نصف سلق فقط.', 'يضرب في الخلاط البصل والطماطم وممكن استبدال الطماطم بالصلصة.', 'يسكب المرق بالصلصة على لسان العصفور و اللحم في بايركس.', 'تدخل فرن متوسط الحرارة حتى يتم النضج.']
      }
    }
  },
  {
    id: 'pasta-15',
    title: 'الكسكسي بيخنى اللحم',
    titleEn: 'Steamed Couscous with Beef Stew',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '1 ساعة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'pb16-1',
        name: 'كسكسي',
        nameEn: 'Couscous',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb16-2',
        name: 'لحم بتلو',
        nameEn: 'Veal',
        standardAmount: '1/2 كيلو أو أقل',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو أو أقل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb16-3',
        name: 'بصل مفري غليظ',
        nameEn: 'Coarsely grated onion',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb16-4',
        name: 'طماطم مصفاة',
        nameEn: 'Strained tomatoes',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb16-5',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb16-6',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'قليل',
        category: 'liquid',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb16-7',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نحضر إناء واسعا ومرتفع الحافة ويملأ بالماء لمنتصفه، وتوضع مصفاة فوقه وتلحم معها بطبقة من العجين (دقيق معجون بالماء)، ويرفع على درجة حرارة متوسطة حتى الغليان.',
        textEn: 'Fill a wide, deep pot halfway with water. Place a steamer basket over it, sealing the join with a strip of flour-and-water dough, and bring to a boil over medium heat.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع الكسكسي في شاشة بحجمه وتطوى أطرافها داخل المصفاة لتغطيته، ثم تغطى بغطاء الإناء، ويترك على درجة حرارة هادئة من 20 إلى 30 دقيقة.',
        textEn: 'Place the couscous in a cloth sized to fit the steamer, fold the edges over to cover it, put the lid on, and steam over low heat for 20-30 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترفع الشاشة من المصفاة بحرص ويفرد الكسكسي في وعاء ويقلب بالمقصوصة لفصل الذرات بعضها عن بعض، ثم يترك ليهدأ. يرش بمقدار كوب من الماء البارد أو المرق وتفكك الذرات بخفة باليد.',
        textEn: 'Carefully lift out the cloth and spread the couscous in a bowl, fluffing it with a fork to separate the grains, then let it rest. Sprinkle with about a cup of cold water or broth and gently break up the grains by hand.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يعاد الكسكسي إلى الشاش ويوضع في المصفاة ويغطى ويطهى ثانيا لمدة 30 دقيقة.',
        textEn: 'Return the couscous to the cloth and steamer, cover, and steam again for 30 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'ينزع من الشاش ويوضع في الوعاء على درجة حرارة هادئة، ويضاف إليه السمن حسب الرغبة ويقلَب بالمقصوصة وهو ساخن.',
        textEn: 'Remove from the cloth into the bowl, stir in ghee to taste while still hot, fluffing with a fork.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يقدح السمن ويحمر فيه البصل، ثم يضاف اللحم المقطع مكعبات صغيرة ويحمر معه، ثم يضاف الطماطم المصفاة والملح والفلفل والبهار.',
        textEn: 'Heat the ghee and brown the onion, then add the diced meat and brown together, then add the strained tomatoes, salt, pepper and mixed spice.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تترك على درجة حرارة هادئة حتى ينضج اللحم، ثم يضاف قليل من الماء حتى تغلي وتترك حتى ينضج اللحم تماما.',
        textEn: 'Simmer over low heat until the meat is nearly cooked, then add a little water, bring to a boil, and simmer until fully cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يغرف الكسكسي الساخن في طبق ويجمل باليخنى، أو يوضع اليخنى في طبق آخر.',
        textEn: 'Serve the hot couscous topped with the stew, or serve the stew alongside in a separate dish.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'بدلا من اليخنى، يقدح السمن وتوضع بعض الصلصة أو عصير الطماطم المتبلة بالملح والفلفل، ونضيف لها كمية قليلة من الماء وتترك حتى الغليان وتصير سميكة نوعا ما. تصب الصلصة في إناء صغير ويوضع مرق ساخن في سلطانية أخرى، ثم يغرف الكسكسي في الطبق ويؤكل مع المرق والصلصة.',
        textEn: 'Instead of the stew, heat ghee with a little tomato sauce or juice seasoned with salt and pepper, add a little water, and simmer until somewhat thick. Serve this sauce in a small bowl alongside hot broth in another, and eat the couscous with both the broth and the sauce.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة إضافية بالصلصة والمرق بدلا من اليخنى',
        sourceDocs: ['doc1'],
        importance: 'variation'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 9,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكسكسي بيخنى اللحم',
        ingredients: ['½ كيلو كسكسي', '½ كيلو لحم بتلو أو أقل', '½ كيلو بصل مفري غليظ', '¼ كيلو طماطم مصفاه', '2 ملعقة كبيرة سمن', 'قليل من الماء', 'ملح', 'فلفل', 'بهار'],
        instructions: ['نحضر إناء واسع ومرتفع الحافة ويملأ بالماء لمنتصفه.', 'توضع مصفاة فوق الإناء وتلحم معها بطبقة من العجين (المكون من دقيق معجون بالماء).', 'يرفع الإناء على درجة حرارة متوسطة حتى الغليان.', 'يوضع الكسكسي في شاشة بحجمه وتطوى أطرافها داخل المصفاة لتغطيته ثم تغطى بغطاء الإناء.', 'يترك على درجة حرارة هادئة من 20 : 30 دقيقة.', 'ترفع الشاشة من المصفاة بحرص ويفرد الكسكسي في وعاء ويقلب بالمقصوصة لفصل الذرات بعضها عن بعض ثم يترك ليهدأ.', 'يرش بمقدار كوب من الماء البارد أو المرق وتفكك الذرات بخفه باليد.', 'يعاد الكسكسي إلى الشاشة ويوضع في المصفاة ويغطي ويطهى ثانيا لمدة 30 دقيقة.', 'ينزع من الشاشة ويوضع في الوعاء على درجة حرارة هادئة ويضاف إليه السمن حسب الرغبة ويقلَب بالمقصوصة وهو ساخن.', 'يقدح السمن ويحمر فيه البصل ثم يضاف اللحم المقطع مكعبات صغيرة ويحمر معه ثم يضاف الطماطم المصفاة والملح والفلفل والبهار.', 'تترك على درجة حرارة هادئة حتى تنضج اللحم ثم يضاف قليل من الماء حتى تغلي ثم تترك حتى ينضج اللحم تماما.', 'يغرف الكسكسي الساخن في طبق ويجمل باليخنى أو يوضع اليخنى في طبق آخر.', 'بدلا من اليخني يقدح السمن و توضع بعض الصلصة أو عصير الطماطم المتبلة بالملح والفلفل.', 'نضيف لها كمية قليلة من الماء وتترك حتى الغليان وتصير سمكية نوعا ما.', 'تصب الصلصة في إناء صغير و نضع مرق ساخن في سلطانية أخرى.', 'ثم يغرف الكسكسي في الطبق ويؤكل مع المرق والصلصة.']
      }
    }
  },
  {
    id: 'pasta-16',
    title: 'مكرونة بصلصة الطماطم',
    titleEn: 'Pasta in Tomato Sauce with Cheese',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb17-1',
        name: 'مكرونة',
        nameEn: 'Pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb17-2',
        name: 'طماطم معصورة أو صلصة',
        nameEn: 'Pressed tomatoes or tomato paste',
        standardAmount: '1/4 كيلو أو 2 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو أو 2 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb17-3',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb17-4',
        name: 'عصير ليمون أو خل',
        nameEn: 'Lemon juice or vinegar',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb17-5',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb17-6',
        name: 'جبن مبشور',
        nameEn: 'Grated cheese',
        standardAmount: '1/8 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلى مقدار كاف من الماء المضاف إليه الملح والخل، ثم توضع فيه المكرونة، ويترك الإناء مكشوفا حتى تنضج، ثم تصفى من ماء السلق.',
        textEn: 'Bring plenty of salted, vinegared water to a boil, add the pasta, cook uncovered until done, and drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقدح السمن أو الزيت وتضاف إليه الطماطم المعصورة (أو صلصة الطماطم) حتى تنضج.',
        textEn: 'Heat the ghee or oil and add the pressed tomatoes (or tomato paste), cooking until softened.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف قليل من الماء ويتبل بالملح والفلفل وعصير ليمونة أو ملعقة خل ويترك حتى الغليان.',
        textEn: 'Add a little water, season with salt, pepper and lemon juice or vinegar, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تضاف لها المكرونة وتقلب بخفة، ثم تغرف ويرش السطح بالجبن المبشور.',
        textEn: 'Add the pasta and toss gently, then serve topped with grated cheese.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يمكن إضافة بصلة متوسطة تحمر في الزيت ثم يضاف إليها عصير الطماطم أو ملعقتي صلصة الطماطم وتستكمل بنفس الطريقة.',
        textEn: 'A medium onion can be browned in the oil first, then the tomato juice or paste added, continuing the same way.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'إضافة بصل',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مكرونة بصلصة الطماطم',
        ingredients: ['½ كيلو مكرونة', '¼ كيلو طماطم معصورة أو 2 م صلصة طماطم', 'ملح', 'فلفل', 'عصير ليمونة أو ملعقة كبيرة خل', '2 م سمن أو زيت', '⅛ كيلو جبن مبشور'],
        instructions: ['يغلى مقدار كاف من الماء المضاف إليه الملح والخل ثم توضع فيه المكرونة.', 'يترك الإناء مكشوفا حتى يتم نضجها ثم تصفى من ماء السلق لتستعمل.', 'يقدح السمن أو الزيت وتضاف إليه الطماطم المعصورة (أو صلصة الطماطم) حتى تنضج الطماطم.', 'يضاف قليل من الماء ويتبل بالملح والفلفل وعصير ليمونة أوملعقة خل ويترك حتى الغليان.', 'تضاف لها المكرونة وتقلب بخفة.', 'تغرف ويرش السطح بالجبن المبشور.', 'يمكن إضافة بصلة متوسطة تحمر في الزيت ثم يضاف إليها عصير الطماطم أو ملعقتي صلصة الطماطم وتستكمل بنفس الطريقة.']
      }
    }
  },
  {
    id: 'pasta-17',
    title: 'مكرونة بالخضار',
    titleEn: 'Pasta with Sautéed Carrots and Peas',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb18-1',
        name: 'مكرونة',
        nameEn: 'Pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb18-2',
        name: 'بصلة متوسطة',
        nameEn: 'Medium onion',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb18-3',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '2 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb18-4',
        name: 'ورق لورا مطحون',
        nameEn: 'Ground bay leaf',
        standardAmount: 'قليل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb18-5',
        name: 'جزرة',
        nameEn: 'Carrot',
        standardAmount: '1 جزرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 جزرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb18-6',
        name: 'بازلاء',
        nameEn: 'Green peas',
        standardAmount: 'قليل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb18-7',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb18-8',
        name: 'خس وجرجير للتزيين',
        nameEn: 'Lettuce and arugula, for garnish',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلى مقدار كاف من الماء المضاف إليه الملح والخل، ثم توضع فيه المكرونة، ويترك الإناء مكشوفا حتى تنضج، ثم تصفى.',
        textEn: 'Bring plenty of salted, vinegared water to a boil, add the pasta, cook uncovered until done, and drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمر بصلة مفرية ثم يضاف إليها الثوم المفري ويتبلوا بالملح والفلفل وورق اللورا.',
        textEn: 'Brown the grated onion, then add the crushed garlic, and season with salt, pepper and ground bay leaf.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تسلق جزرة مع قليل من البازلاء ثم يسكبوا على البصلة ويقلبوا جيدا، ثم تخلط جيدا بالمكرونة.',
        textEn: 'Boil the carrot with a little of the peas, then add to the onion and mix well, then combine thoroughly with the pasta.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يجمل الوجه بورق الخس والجرجير.',
        textEn: 'Garnish with lettuce and arugula leaves.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مكرونة بالخضار',
        ingredients: ['½ كيلو مكرونة', 'بصلة متوسطة', '2 فص ثوم مفري', 'ملح', 'فلفل', 'ورق اللورا المطحون', 'جزرة', 'قليل من البسلة', 'زيت أو سمن'],
        instructions: ['يغلى مقدار كاف من الماء المضاف إليه الملح والخل ثم توضع فيه المكرونة.', 'يترك الإناء مكشوفا حتى يتم نضجها ثم تصفى من ماء السلق لتستعمل.', 'تحمر بصلة مفرية ثم يضاف إليها الثوم المفري ويتبلوا بالملح والفلفل وورق اللورا.', 'تسلق جزرة مع قليل من البسلة ثم يسكبوا على البصلة ويقلبوا جيدا ثم تخلط جيدا بالمكرونة.', 'يجمل الوجه بورق الخس والجرجير.']
      }
    }
  },
  {
    id: 'pasta-18',
    title: 'مكرونة بصلصلة الفريدو',
    titleEn: 'Pasta with Chicken in Alfredo-Style White Sauce',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'pb19-1',
        name: 'مكرونة',
        nameEn: 'Pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-2',
        name: 'دجاجة',
        nameEn: 'Chicken',
        standardAmount: '1 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-3',
        name: 'بصلة صغيرة',
        nameEn: 'Small onion',
        standardAmount: '1 بصلة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-4',
        name: 'فلفلة خضراء',
        nameEn: 'Green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-5',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-6',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-7',
        name: 'خل',
        nameEn: 'Vinegar',
        standardAmount: '1 ملعقة كبيرة',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-8',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-9',
        name: 'مرق ولبن ومستردة',
        nameEn: 'Broth, milk and mustard',
        standardAmount: 'قليل من كل',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'قليل من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb19-10',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلى مقدار كاف من الماء المضاف إليه الملح والخل، ثم توضع فيه المكرونة، ويترك الإناء مكشوفا حتى تنضج، ثم تصفى.',
        textEn: 'Bring plenty of salted, vinegared water to a boil, add the pasta, cook uncovered until done, and drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تسلق الدجاجة مع البصل والتوابل وترفع من المرق وتقطع صغيرا جدا، ثم تقلب في الدقيق المخلوط بالثوم المفري.',
        textEn: 'Boil the chicken with the onion and spices, lift out of the broth, and cut into very small pieces, then toss in flour mixed with crushed garlic.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحمر بصلة مفرية في الزيت، ثم يضاف إليها الدجاج المقطع والثوم المفري والفلفل المقطع صغيرا والخل ويقلبوا جيدا.',
        textEn: 'Brown a grated onion in oil, then add the diced chicken, crushed garlic, finely chopped green pepper and vinegar, and mix well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف قليل من المرق أو الماء المضاف إليه قليل من اللبن والمستردة.',
        textEn: 'Add a little broth or water with a little milk and mustard.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تضاف المكرونة وتخلط جيدا، ثم نحضر بايركس مدهون زيت ونسكب فيه المكرونة المخلوطة وتغطى.',
        textEn: 'Add the pasta and mix well, then transfer to an oiled Pyrex dish and cover.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدخل الفرن على درجة حرارة هادئة لمدة بسيطة حتى تتشرب السائل.',
        textEn: 'Bake briefly in a low oven until the liquid is absorbed.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 10,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مكرونة بصلصلة الفريدو',
        ingredients: ['½ كيلو مكرونة', '1 دجاجة', 'بصلة صغيرة', 'ثمرة فلفل أخضر', 'ملح', 'فلفل', 'فص ثوم مفري', '2 ملعقة كبيرة دقيق', 'ملعقة كبيرة خل', '2 ملعقة كبيرة زيت', 'قليل من المرق أو الماجي مع قليل من الماء', 'قليل من اللبن', 'ملعقة صغيرة  مستردة'],
        instructions: ['يغلى مقدار كاف من الماء المضاف إليه الملح والخل ثم توضع فيه المكرونة.', 'يترك الإناء مكشوفا حتى يتم نضجها ثم تصفى من ماء السلق لتستعمل.', 'تسلق الدجاجة مع البصل والتوابل وترفع من المرق وتقطع صغيرا جدا.', 'تقلب في الدقيق المخلوط بالثوم المفري.', 'تحمر بصلة مفرية في الزيت ثم يضاف إليها الدجاج المقطع والثوم المفري والفلفل المقطع صغيرا والخل ويقلبوا جيدا.', 'يضاف قليل من المرق أو الماء المضاف إليه الماجي مع قليل من اللبن.', 'تضاف المكرونة وتخلط جيدا.', 'نحضر بايركس مدهون زيت ونسكب فيه المكرونة المخلوطة بالخلطة السابقة وتغطى.', 'تدخل الفرن على درجة حرارة هادئة لمدة بسيطة حتى تتشرب السائل.']
      }
    }
  },
  {
    id: 'pasta-19',
    title: 'مكرونة بالجبن',
    titleEn: 'Pasta with Melted Cheese and Chicken Sauce',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb20-1',
        name: 'مكرونة',
        nameEn: 'Pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb20-2',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '2 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb20-3',
        name: 'قطع دجاج مقطعة صغيرا',
        nameEn: 'Diced chicken pieces',
        standardAmount: 'حسب الرغبة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb20-4',
        name: 'جبن مطبوخ (كباية)',
        nameEn: 'Processed melting cheese ("kabaya")',
        standardAmount: '1/3 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb20-5',
        name: 'لبن وقشدة',
        nameEn: 'Milk and clotted cream',
        standardAmount: 'قليل من كل',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'قليل من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb20-6',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb20-7',
        name: 'زيتون للتزيين',
        nameEn: 'Olives, for garnish',
        standardAmount: 'حسب الرغبة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلى مقدار كاف من الماء المضاف إليه الملح والخل، ثم توضع فيه المكرونة، ويترك الإناء مكشوفا حتى تنضج، ثم تصفى.',
        textEn: 'Bring plenty of salted, vinegared water to a boil, add the pasta, cook uncovered until done, and drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يحمر الثوم المفري في الزيت حتى يصفر لونه.',
        textEn: 'Brown the crushed garlic in oil until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضيف قطع الدجاج إلى الثوم ويقلبوا جيدا.',
        textEn: 'Add the chicken pieces to the garlic and mix well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف الجبن المطبوخ مع قليل من اللبن والقشدة والماء حتى تسيح الجبن ويسمك القوام.',
        textEn: 'Add the melting cheese with a little milk, clotted cream and water, until the cheese melts and the sauce thickens.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تسكب الخلطة على المكرونة وتجمل بقطع الزيتون.',
        textEn: 'Pour the sauce over the pasta and garnish with olive pieces.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مكرونة بالجبن',
        ingredients: ['½ كيلو مكرونة', '2 فص ثوم مفري', 'قطع دجاج مقطعة صغيرا', '⅓ كوب من الجبن المطبوخ (كباية) مع قليل من اللبن والقشدة', 'قليل من الماء وماجي', 'زيت'],
        instructions: ['يغلى مقدار كاف من الماء المضاف إليه الملح والخل ثم توضع فيه المكرونة.', 'يترك الإناء مكشوفا حتى يتم نضجها ثم تصفى من ماء السلق لتستعمل.', 'يحمر الثوم المفري في الزيت حتى يصفر لونه.', 'نضيف قطع الدجاج إلى الثوم ويقلبوا جيدا.', 'نضيف الجبن المطبوخ مع قليل من اللبن والقشدة والماء وماجي حتى تسيح الجبن ويسمك القوام.', 'تسكب الخلطة على المكرونة وتجمل بقطع الزيتون.']
      }
    }
  },
  {
    id: 'pasta-20',
    title: 'المكرونة المحمرة',
    titleEn: 'Browned Pasta Simmered in Broth',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb21-1',
        name: 'مكرونة',
        nameEn: 'Pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb21-2',
        name: 'مرق أو ماء',
        nameEn: 'Broth or water',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb21-3',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb21-4',
        name: 'بصلة صغيرة',
        nameEn: 'Small onion',
        standardAmount: '1 بصلة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb21-5',
        name: 'صلصة طماطم',
        nameEn: 'Tomato paste',
        standardAmount: '1 ملعقة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb21-6',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقدح السمن أو الزيت وتحمر فيه المكرونة مع التقليب حتى يصفر لونها.',
        textEn: 'Heat the ghee or oil and toast the raw pasta in it, stirring, until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي المرق أو الماء مع الملح والفلفل.',
        textEn: 'Bring the broth or water to a boil with salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسكب على المكرونة المحمرة وتترك على درجة حرارة منخفضة حتى تتشرب السائل، وتترك مغطاة حتى النضج.',
        textEn: 'Pour over the browned pasta and simmer over low heat, covered, until the liquid is absorbed and fully cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يمكن تحمير بصلة صغيرة وصلصة الطماطم وإضافتهما إلى المرق أو الماء المغلي واستكمال عملية الطهي.',
        textEn: 'A small browned onion and a little tomato paste can be added to the boiling broth or water before finishing the cooking.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'المكرونة المحمرة',
        ingredients: ['½ كيلو مكرونة', '2 كوب مرق أو ماء مع ماجي', 'ملح', 'فلفل', 'بصلة صغيرة', 'ملعقة صغيرة  صلصة طماطم', 'سمن أو زيت'],
        instructions: ['يقدح السمن أو الزيت وتحمر فيه المكرونة مع التقليب حتى يصفر لونها.', 'يغلي المرق أو الماء مع الماجي ويتبل بالملح والفلفل.', 'يسكب على المكرونة المحمرة وتترك على درجة حرارة منخفضة حتى تتشرب السائل وتترك مغطاة حتى النضج.', 'يمكن تحمير بصلة صغيرة وصلصة الطماطم وإضافتهم إلى المرق أو الماء المغلي وتستكمل عملية الطهي.']
      }
    }
  },
  {
    id: 'pasta-21',
    title: 'مكرونة بالفلفل الأخضر والزيتون',
    titleEn: 'Pasta with Green Pepper, Tomato and Olives',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb22-1',
        name: 'مكرونة',
        nameEn: 'Pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb22-2',
        name: 'بصلة متوسطة',
        nameEn: 'Medium onion',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb22-3',
        name: 'عصير طماطم أو صلصة',
        nameEn: 'Tomato juice or tomato paste',
        standardAmount: '1 كوب أو 2 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كوب أو 2 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb22-4',
        name: 'فلفلة خضراء',
        nameEn: 'Green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb22-5',
        name: 'زيتون مقطع',
        nameEn: 'Sliced olives',
        standardAmount: 'حسب الرغبة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb22-6',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb22-7',
        name: 'ليمون أو خل',
        nameEn: 'Lemon juice or vinegar',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb22-8',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلى مقدار كاف من الماء المضاف إليه الملح والخل، ثم توضع فيه المكرونة، ويترك الإناء مكشوفا حتى تنضج، ثم تصفى.',
        textEn: 'Bring plenty of salted, vinegared water to a boil, add the pasta, cook uncovered until done, and drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقدح السمن أو الزيت وتصفر فيه البصلة، ثم نضيف عصير الطماطم أو صلصة الطماطم ويتبلوا بالملح والفلفل وعصير الليمون أو الخل.',
        textEn: 'Heat the ghee or oil and lightly brown the onion, then add the tomato juice or paste, and season with salt, pepper and lemon juice or vinegar.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'بعد نضج الطماطم نضيف الفلفل المقطع صغيرا ويقلبوا تقليبتين.',
        textEn: 'Once the tomato softens, add the finely chopped green pepper and stir briefly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضع المكرونة المسلوقة في هذه الخلطة وتقلب جيدا، وتجمل بالزيتون المقطع.',
        textEn: 'Add the boiled pasta to this mixture and mix well, garnishing with sliced olives.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مكرونة بالفلفل الأخضر والزيتون',
        ingredients: ['½ كيلو مكرونة', 'بصلة متوسطة', 'كوب عصير طماطم أو 2 م صلصة', 'ثمرة فلفلة خضراء', 'زيتون مقطع', 'ملح', 'فلفل', 'ليمون أو م خل'],
        instructions: ['يغلى مقدار كاف من الماء المضاف إليه الملح والخل ثم توضع فيه المكرونة.', 'يترك الإناء مكشوفا حتى يتم نضجها ثم تصفى من ماء السلق لتستعمل.', 'يقدح السمن أو الزيت وتصفر فيه البصلة ثم نضيف عصير الطماطم أو صلصة الطماطم ويتبلوا بالملح والفلفل وعصير الليمون أو الخل.', 'بعد نضج الطماطم نضيف الفلفل المقطع صغيرا ويقلبوا تقليبتين.', 'نضع المكرونة المسلوقة في هذه الخلطة وتقلب جيدا.', 'تجمل بالزيتون المقطع.']
      }
    }
  },
  {
    id: 'pasta-22',
    title: 'مكرونة بالبطاطس',
    titleEn: 'Baked Pasta and Potato Bake',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb23-1',
        name: 'مكرونة',
        nameEn: 'Pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb23-2',
        name: 'بطاطس',
        nameEn: 'Potato',
        standardAmount: '1 حبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb23-3',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '2 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '2 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb23-4',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb23-5',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلى مقدار كاف من الماء المضاف إليه الملح والخل، ثم توضع فيه المكرونة، ويترك الإناء مكشوفا حتى تنضج، ثم تصفى.',
        textEn: 'Bring plenty of salted, vinegared water to a boil, add the pasta, cook uncovered until done, and drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تسلق البطاطس وتبشر ثم تخلط بالبيض المخفوق والمتبل بالملح والفلفل جيدا، ثم تخلط المكرونة بهذه الخلطة.',
        textEn: 'Boil the potato, grate it, and mix well with the beaten, seasoned egg, then combine with the pasta.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدهن صينية أو بايركس بالسمن أو الزيت وتوضع بها المكرونة مع وضع قطعة زبد على الوجه.',
        textEn: 'Grease a tray or Pyrex dish with ghee or oil, add the pasta mixture, and top with a knob of butter.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'هز البايركس جيدا ثم إدخالها فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Shake the dish gently to settle, then bake in a medium oven until golden on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مكرونة بالبطاطس',
        ingredients: ['½ كيلو مكرونة', 'حبة بطاطس', '2 بيضة', 'ملح', 'فلفل', 'زيت'],
        instructions: ['يغلى مقدار كاف من الماء المضاف إليه الملح والخل ثم توضع فيه المكرونة.', 'يترك الإناء مكشوفا حتى يتم نضجها ثم تصفى من ماء السلق لتستعمل.', 'تسلق البطاطس وتبشر ثم تخلط بالبيض المخفوق والمتبل بالملح والفلفل جيدا ثم تخلط المكرونة بهذه الخلطة.', 'تدهن صينية أو بايركس بالسمن أو الزيت وتوضع بها المكرونة مع وضع قطعة زبد على الوجه.', 'هز البايركس جيدا ثم إدخالها فرن متوسط الحرارة حتى يحمر الوجه.']
      }
    }
  },
  {
    id: 'pasta-23',
    title: 'مكرونة الباستا الصيني',
    titleEn: 'Chinese-Style Flat Noodles with Chicken and Cabbage',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'pb24-1',
        name: 'باستا عريضة مبططة',
        nameEn: 'Flat wide noodles',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-2',
        name: 'دجاج مسلوق',
        nameEn: 'Boiled chicken',
        standardAmount: 'حسب الرغبة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-3',
        name: 'فلفل رومي',
        nameEn: 'Bell pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-4',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '2 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-5',
        name: 'ورق كرنب',
        nameEn: 'Cabbage leaves',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-6',
        name: 'خل',
        nameEn: 'Vinegar',
        standardAmount: '2 ملعقة كبيرة',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-7',
        name: 'ليمون',
        nameEn: 'Lemon',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-8',
        name: 'صوص الصويا',
        nameEn: 'Soy sauce',
        standardAmount: '3 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '3 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-9',
        name: 'ملح وفلفل وزعتر وسماق',
        nameEn: 'Salt, pepper, thyme and sumac',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb24-10',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلى مقدار كاف من الماء المضاف إليه الملح والخل، ثم توضع فيه الباستا، ويترك الإناء مكشوفا حتى تنضج، ثم تصفى.',
        textEn: 'Bring plenty of salted, vinegared water to a boil, add the noodles, cook uncovered until done, and drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقطع الدجاج المسلوق قطعا عرضيا، ويقطع ورق الكرنب الصغير والفلفل الرومي قطعا رفيعة وكذا الثوم يقطع صغيرا.',
        textEn: 'Cut the boiled chicken crosswise into pieces; thinly slice the small cabbage leaves and bell pepper, and finely chop the garlic.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يقدح الزيت ثم تحمر فيه قطع الدجاج، ثم يضاف إليها الخل ثم ملعقة صغيرة من صوص الصويا حسب الرغبة.',
        textEn: 'Heat the oil and brown the chicken pieces, then add the vinegar and a teaspoon of soy sauce to taste.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف ورق الكرنب للخليط ثم التوابل والخل، ومرة ثانية قليل من صوص الصويا مع قليل من الماء لتخفيفها.',
        textEn: 'Add the cabbage to the mixture with the spices and vinegar, and a little more soy sauce thinned with a little water.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يقلب ورق الكرنب في الخليط حتى يلين، ثم يضاف الفلفل الرومي.',
        textEn: 'Stir the cabbage in the mixture until softened, then add the bell pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تضاف الباستا المسلوقة إلى الخليط مع قليل من صوص الصويا والليمون، مع إضافة الماء حسب الحاجة والزيت.',
        textEn: 'Add the boiled noodles to the mixture with a little more soy sauce and lemon juice, adding water and oil as needed.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يمكن إضافة ملح الليمون والفلفل.',
        textEn: 'Sumac salt and pepper can be added to taste.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 10,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مكرونة الباستا الصيني',
        ingredients: ['قليل من الباستا العريضة المبططة', 'دجاج مسلوق', 'ثمرة فلفل رومي', '2 فص ثوم', 'ورق كرنب', '2 ملعقة كبيرة خل', 'ليمون', '3 ملعقة صغيرة  من صوص الصويا حسب الرغبة', 'ملح', 'فلفل', 'زعتر', 'السماق'],
        instructions: ['يغلى مقدار كاف من الماء المضاف إليه الملح والخل ثم توضع فيه المكرونة الباستا.', 'يترك الإناء مكشوفا حتى يتم نضجها ثم تصفى من ماء السلق لتستعمل.', 'يقطع الدجاج المسلوق قطع عرضيا (كمية الدجاج حسب الرغبة).', 'يقطع ورق الكرنب الصغير والفلفل الرومي قطعا رفيعة وكذا الثوم يقطع صغيرا.', 'يقدح الزيت ثم تحمر فيه قطع الدجاج ثم يضاف إليها الخل ثم ملعقة صغيرة  من صوص الصويا حسب الرغبة.', 'يضاف ورق الكرنب للخليط ثم التوابل والخل ومرة ثانية قليل من صوص الصويا مع قليل من الماء لتخفيفها.', 'يقلب ورق الكرنب في الخليط حتى يلين ثم يضاف الفلفل الرومي.', 'تضاف المكرونة المسلوقة إلى الخليط مع قليل من صوص الصويا والليمون مع إضافة الماء حسب الحاجة مع الزيت.', 'يمكن اضافة ملح الليمون و الفلفل.']
      }
    }
  },
  {
    id: 'pasta-24',
    title: 'مكرونة نجرسكو',
    titleEn: 'Pasta Negresco with Chicken and Béchamel',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '25 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'pb25-1',
        name: 'مكرونة طويلة مبططة',
        nameEn: 'Long flat pasta',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb25-2',
        name: 'دجاجة مسلوقة',
        nameEn: 'Boiled chicken',
        standardAmount: '1 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb25-3',
        name: 'زبد',
        nameEn: 'Butter',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb25-4',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb25-5',
        name: 'باشاميل (انظري باب الخضروات)',
        nameEn: 'Béchamel (see vegetables section)',
        standardAmount: '2 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb25-6',
        name: 'ملح وفلفل وحبهان ومستكة',
        nameEn: 'Salt, pepper, cardamom and mastic',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb25-7',
        name: 'جبن مبشور',
        nameEn: 'Grated cheese',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تسلق المكرونة وتصفى.',
        textEn: 'Boil the pasta and drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع الدجاجة المسلوقة قطعا رفيعة ثم تشوح في الزبد وتخلط بالمكرونة المسلوقة خلطا جيدا.',
        textEn: 'Cut the boiled chicken into thin strips, sauté in butter, and mix thoroughly with the boiled pasta.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط نصف مقدار الباشاميل بالمكرونة مع الدجاج.',
        textEn: 'Mix half of the béchamel into the pasta with the chicken.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن صينية أو بايركس بالزيت أو السمن وتوضع فيها المكرونة.',
        textEn: 'Grease a tray or Pyrex dish with oil or ghee and add the pasta.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يوضع بقية الباشاميل على سطح المكرونة ومعها قطعة زبد أو سمن والجبن المبشور.',
        textEn: 'Spread the remaining béchamel over the top with a knob of butter or ghee and grated cheese, then bake until golden.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مكرونة نجرسكو',
        ingredients: ['½ كيلو مكرونة طويلة مبططة', 'دجاجة مسلوقة', 'زبد', 'زيت أو سمن', 'الصلصة البيضاء ( الباشامل )', 'ملح', 'فلفل', 'حبهان', 'مستكة', 'جبن مبشور'],
        instructions: ['تسلق المكرونة وتصفى.', 'تقطع الدجاجة المسلوقة قطعا رفيعة ثم تشوح في الزبد وتخلط بالمكرونة المسلوقة خلطا جيدا.', 'يخلط ½ مقدار الباشامل بالمكرونة مع الدجاج.', 'تدهن صينية أو بايركس بالزيت أو السمن وتوضع فيها المكرونة.', 'يوضع بقية الباشامل على سطح المكرونة ومعها قطعة زبد أو سمن والجبن المبشور.']
      }
    }
  },
  {
    id: 'pasta-25',
    title: 'عمل العصاج',
    titleEn: '"Assag" Minced Meat Sauce, Loose Style (for Pastries)',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: 'حشوة متعددة الاستخدام',
    masterIngredients: [
      {
        id: 'pb26-1',
        name: 'لحم مفروم',
        nameEn: 'Minced meat',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb26-2',
        name: 'بصلة كبيرة مفرية',
        nameEn: 'Grated large onion',
        standardAmount: '1 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb26-3',
        name: 'صلصة طماطم',
        nameEn: 'Tomato paste',
        standardAmount: '2 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb26-4',
        name: 'ملح وفلفل وزعتر وسماق',
        nameEn: 'Salt, pepper, thyme and sumac',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb26-5',
        name: 'خل',
        nameEn: 'Vinegar',
        standardAmount: '1 ملعقة',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb26-6',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: 'عصير ليمونة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'عصير ليمونة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يطهى العصاج بالبصل والصلصة والملح والفلفل والزعتر والسماق والخل والليمون، مع مراعاة أن يكون العصاج مائلا إلى السيولة إلى حد ما.',
        textEn: 'Cook the minced meat with the onion, tomato paste, salt, pepper, thyme, sumac, vinegar and lemon juice, keeping the mixture somewhat loose and juicy (for filling pastries).',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 1,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل العصاج',
        ingredients: ['½ كيلو لحم مفروم', 'بصلة كبيرة مفرية', '2 ملعقة كبيرة صلصة', 'ملح', 'فلفل', 'زعتر', 'سماق', 'ملعقة خل', 'عصير ليمونة'],
        instructions: ['يطهى العصاج بالبصل والصلصة والملح والفلفل والزعتر والسماق والخل والليمون مع مراعاة أن يكون العصاج مائلا إلى السيولة إلى حد ما.']
      }
    }
  },
  {
    id: 'pasta-26',
    title: 'اللازانيا',
    titleEn: 'Layered Lasagna with Assag and Béchamel',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'نشويات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '20 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'pb27-1',
        name: 'لازانيا',
        nameEn: 'Lasagna sheets',
        standardAmount: '1 كيس (500 جم)',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كيس (500 جم)'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb27-2',
        name: 'عصاج (انظري باب اللحوم)',
        nameEn: '"Assag" minced meat filling (see meats section)',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb27-3',
        name: 'جبن مبشور',
        nameEn: 'Grated cheese',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb27-4',
        name: 'باشاميل (انظري باب الخضروات)',
        nameEn: 'Béchamel (see vegetables section)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb27-5',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'pb27-6',
        name: 'زبد وبقسماط',
        nameEn: 'Butter and breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تسلق اللازانيا في 4 لتر من الماء المغلي والملح لمدة 15 دقيقة.',
        textEn: 'Boil the lasagna sheets in 4 liters of salted boiling water for 15 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر صينية مدهونة بالزيت ثم رشة خفيفة من البقسماط.',
        textEn: 'Oil a tray and dust it lightly with breadcrumbs.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نبدأ بترتيب الطبقات بطبقة باشاميل ثم طبقة عصاج ثم رشة جبن رومي وحوالي 3 شرائط لازانيا يوضعوا بالطول ونصف شريط يوضع بالعرض حسب حجم الصينية.',
        textEn: 'Layer in: béchamel, then assag, then a sprinkle of grated cheese, then about 3 lasagna sheets lengthwise and half a sheet crosswise, to fit the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تكرر الترتيبات نفسها، وآخر مرة نبدأ بالعصاج ثم اللازانيا ثم الجبن المبشور وأخيرا الباشاميل وقطعة زبد على الوجه.',
        textEn: 'Repeat the layers, finishing with assag, then lasagna, then grated cheese, and finally béchamel topped with a knob of butter.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدخل فرن متوسط الحرارة لمدة ثلث ساعة تقريبا حتى يحمر الوجه.',
        textEn: 'Bake in a medium oven for about 20 minutes until golden on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تغطى حتى تظل طرية.',
        textEn: 'Cover after baking to keep it tender.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'اللازانيا',
        ingredients: ['كيس لازانيا 500جم', '½ كيلو عصاج', 'جبن مبشور', 'باشامل', 'ملح', 'فلفل'],
        instructions: ['تسلق اللازانيا في 4 لتر من الماء المغلي والملح لمدة 15 دقيقة.', 'نحضر صينية مدهونة بالزيت ثم رشة خفيفة من البقسماط.', 'نبدأ بترتيب الطبقات بطبقة باشامل ثم طبقة عصاج ثم رشة جبن رومي وحوالي 3 شرائط لازانيا يوضعوا بالطول و ½ شريط يوضع بالعرض حسب حجم الصينية.', 'تكرر الترتيبات نفسها وآخر مرة نبدأ بالعصاج ثم اللازانيا ثم الجبن المبشور وأخيرا الباشامل وقطعة زبد على الوجه.', 'تدخل فرن متوسط الحرارة لمدة ⅓ ساعة تقريبا حتى يحمر الوجه.', 'تغطى حتى تظل طرية.']
      }
    }
  },
  {
    id: 'stuff-01',
    title: 'خلطة الحشو',
    titleEn: 'Rice Stuffing Mix (for Stuffed Vegetables)',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '10 دقائق',
    servings: 'يكفي لحشو 1 كيلو خضار',
    masterIngredients: [
      {
        id: 'st1-1',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1-2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1-2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st1-2',
        name: 'بصلة كبيرة',
        nameEn: 'Large onion',
        standardAmount: '1-2 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1-2 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st1-3',
        name: 'طماطم',
        nameEn: 'Tomatoes',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st1-4',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st1-5',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st1-6',
        name: 'بقدونس مفري',
        nameEn: 'Chopped parsley',
        standardAmount: '1 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st1-7',
        name: 'شبت ونعناع جاف',
        nameEn: 'Dill and dried mint',
        standardAmount: 'قليل من كل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'قليل من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st1-8',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st1-9',
        name: 'لحم مفروم (اختياري)',
        nameEn: 'Minced meat, optional',
        standardAmount: 'حسب الرغبة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع البصل والطماطم والبقدونس والشبت والنعناع إذا كان أخضر.',
        textEn: 'Chop the onion, tomatoes, parsley, dill and mint (if fresh).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع الخضروات في الخلاط مع الملح والفلفل والبهار.',
        textEn: 'Blend the vegetables with salt, pepper and mixed spice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يغسل الأرز ويصفى جيدا من الماء.',
        textEn: 'Wash the rice and drain it well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'توضع الخلطة في إناء على درجة حرارة متوسطة مع السمن أو الزيت والليمون وتترك حتى الغليان.',
        textEn: 'Heat the blended mixture in a pot over medium heat with the ghee or oil and lemon juice, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تخلط المقادير جيدا بالأرز وتكون معدة للحشو.',
        textEn: 'Mix well with the rice; the stuffing is now ready to use.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'ممكن استبدال الأرز بالعصاج (انظري باب اللحوم).',
        textEn: 'The rice can be replaced with the assag filling (see the meats section).',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'استخدام العصاج بدلا من الأرز',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'خلطة الحشو',
        ingredients: ['1 : 2 كوب أرز', '1 : 2 بصلة كبيرة', '¼ كيلو  طماطم', 'ملح', 'فلفل', 'بهار', 'عصير ليمون', 'ملعقة كبيرة بقدونس مفري', 'قليل من الشبت والنعناع الجاف', '2 ملعقة كبيرة سمن أو زيت', 'وقد يستعمل اللحم المفري'],
        instructions: ['يقطع البصل والطماطم والبقدونس والشبت والنعناع إذا كان أخضر.', 'توضع الخضروات في الخلاط مع الملح والفلفل والبهار.', 'يغسل الأرز ويصفى جيدا من الماء.', 'توضع الخلطة في إناء على درجة حرارة متوسطة مع السمن أو الزيت والليمون وتترك حتى الغليان.', 'تخلط المقادير جيدا بالأرز وتكون معدة للحشو.', 'ممكن استبدال الأرز بالعصاج (انظري باب اللحوم).']
      }
    }
  },
  {
    id: 'stuff-02',
    title: 'الباذنجان الأبيض أو الأسود المحشو',
    titleEn: 'Stuffed White or Black Baby Eggplants',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '45 دقيقة',
    cookTime: '40 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'st2-1',
        name: 'باذنجان أروس أسود أو أبيض',
        nameEn: 'Small black or white eggplants',
        standardAmount: '20 حبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '20 حبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st2-2',
        name: 'خلطة حشو بدون لحم (انظري الوصفة أعلاه)',
        nameEn: 'Rice stuffing mix, without meat (see recipe above)',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st2-3',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st2-4',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st2-5',
        name: 'طماطم معصورة',
        nameEn: 'Pressed tomatoes',
        standardAmount: '1/2 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st2-6',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تطرى كمية الباذنجان قليلا باليد ثم يقوَر بحرص.',
        textEn: 'Soften the eggplants slightly by hand, then carefully core them.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يترك في ماء مملح حوالي نصف ساعة ثم يصفى.',
        textEn: 'Soak in salted water for about half an hour, then drain.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يحشى بخلطة الحشو حسب كمية الخضار مع ترك فراغ في الجزء العلوي من الباذنجان بدون حشو.',
        textEn: 'Stuff with the filling, leaving a small gap unstuffed at the top of each eggplant.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يرص في إناء ويسقى بعصير الطماطم والماء والملح والفلفل.',
        textEn: 'Arrange in a pot and cover with the pressed tomatoes, water, salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يضاف السمن أو الزيت ويغطى الإناء ويترك على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add the ghee or oil, cover, and simmer over low heat until cooked through.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'ممكن إضافة مقدار من الماء كلما احتاج الأمر.',
        textEn: 'Add more water as needed during cooking.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الباذنجان الأبيض أو الأسود المحشو',
        ingredients: ['20 من باذنجان أروس أسود أو باذنجان أبيض', 'خلطة حشو بدون استخدام لحم مفروم', '2 ملعقة كبيرة سمن', 'ملح', 'فلفل', '½ كوب طماطم معصورة', 'كوب ماء'],
        instructions: ['تطرى كمية الباذنجان قليلا باليد ثم يقوَر بحرص.', 'يترك في ماء مملح حوالي ½ ساعة ثم يصفى.', 'يحشى بخلطة الحشو حسب كمية الخضار مع ترك فراغ في الجزء العلوي من الباذنجان بدون حشو.', 'يرص في إناء ويسقى بعصير الطماطم والماء والملح والفلفل.', 'يضاف السمن أو الزيت ويغطى الإناء ويترك على درجة حرارة هادئة حتى النضج.', 'ممكن إضافة مقدار من الماء كلما احتاج الأمر.']
      }
    }
  },
  {
    id: 'stuff-03',
    title: 'الفلفل الأخضر المحشو',
    titleEn: 'Stuffed Green Peppers',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '30 دقيقة',
    cookTime: '35 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'st3-1',
        name: 'فلفل أخضر',
        nameEn: 'Green peppers',
        standardAmount: '1.25 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1.25 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st3-2',
        name: 'خلطة حشو بدون لحم (انظري الوصفة أعلاه)',
        nameEn: 'Rice stuffing mix, without meat (see recipe above)',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st3-3',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st3-4',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st3-5',
        name: 'ماء أو مرق',
        nameEn: 'Water or broth',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغسل الفلفل ويزال الكأس باحتراس ثم إزالة البذور.',
        textEn: 'Wash the peppers, carefully remove the tops, and remove the seeds.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يحشى بخلطة الحشو مع ترك فراغ حتى تغطى الفتحة بالكأس.',
        textEn: 'Stuff with the filling, leaving a little room to cover the opening with the reserved top.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرص في إناء ويصب فوقه السمن أو الزيت والماء أو المرق المغلي مع الملح والفلفل إن وجد.',
        textEn: 'Arrange in a pot and pour over the ghee or oil and hot water or broth, with salt and pepper if needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يغطى الإناء ويرفع على درجة حرارة هادئة حتى النضج.',
        textEn: 'Cover and simmer over low heat until cooked through.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الفلفل الأخضر المحشو',
        ingredients: ['¼1 كيلو فلفل', 'خلطة حشو بدون استخدام لحم مفروم', '2 ملعقة كبيرة سمن', 'ملح', 'فلفل', 'كوب ماء أو مرق'],
        instructions: ['يغسل الفلفل ويزال الكأس باحتراس ثم إزالة البذور.', 'يحشى بخلطة الحشو مع ترك فراغ حتى تغطى الفتحة بالكأس.', 'يرص في إناء ويصب فوقه السمن أو الزيت والماء أو المرق المغلي مع الملح والفلفل إن وجد.', 'يغطى الإناء ويرفع على درجة حرارة هادئة حتى النضج.']
      }
    }
  },
  {
    id: 'stuff-04',
    title: 'الكوسة المحشوة',
    titleEn: 'Stuffed Zucchini with Rice or Assag',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '35 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'st4-1',
        name: 'كوسة صغيرة',
        nameEn: 'Small zucchini',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st4-2',
        name: 'خلطة حشو بالأرز أو بالعصاج (انظري باب اللحوم)',
        nameEn: 'Stuffing with rice, or with assag (see meats section)',
        standardAmount: '1 كوب أرز أو 1/4 كيلو عصاج',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب أرز أو 1/4 كيلو عصاج'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st4-3',
        name: 'طماطم مصفاة',
        nameEn: 'Strained tomatoes',
        standardAmount: '1 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st4-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st4-5',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st4-6',
        name: 'بصلة وطماطم وكرفس (للقاع)',
        nameEn: 'Onion, tomato and celery, for the pot\'s base',
        standardAmount: 'شرائح من كل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'شرائح من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st4-7',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1/2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يوضع في قاع الإناء شرائح من بصلة وطماطم وكرفس.',
        textEn: 'Line the bottom of the pot with slices of onion, tomato and celery.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقَور الكوسة باحتراس بعد تقشيرها وتحشى بخلطة الحشو.',
        textEn: 'Peel and carefully core the zucchini, then stuff with the filling.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترص في الإناء ويضاف إليها الطماطم المعصورة وحوالي نصف كوب ماء فقط مغلى مع الملح والفلفل والبهار والسمن.',
        textEn: 'Arrange in the pot and add the strained tomatoes with about half a cup of boiling water, salt, pepper, mixed spice and the ghee.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يغطى الإناء ويرفع على درجة حرارة هادئة ويترك حتى النضج.',
        textEn: 'Cover and simmer over low heat until cooked through.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكوسة المحشوة',
        ingredients: ['1 كيلو  كوسة صغيرة نوعا', 'خلطة حشو باستخدام كوب أرز أو باستخدام ¼ كيلو عصاج (انظري باب اللحوم)', 'كوب طماطم مصفاة', '2 ملعقة كبيرة سمن أو زيت', 'ملح', 'فلفل', 'بهار', 'قليل من الماء المغلي'],
        instructions: ['يوضع في قاع الإناء شرائح من بصلة ووحدة طماطم وكرافس.', 'تقَور الكوسة باحتراس بعد تقشيرها وتحشى بخلطة الحشو.', 'ترص في إناء ويضاف إليه الطماطم المعصورة وحوالي ½ كوب ماء فقط مغلى مع الملح والفلفل والبهار والسمن.', 'يغطى الإناء ويرفع على درجة حرارة هادئة ويترك حتى النضج.']
      }
    }
  },
  {
    id: 'stuff-05',
    title: 'البطاطس المحشوة',
    titleEn: 'Potatoes Stuffed with Assag',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '35 دقيقة',
    cookTime: '35 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'st5-1',
        name: 'بطاطس متوسطة',
        nameEn: 'Medium potatoes',
        standardAmount: '1.25 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1.25 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st5-2',
        name: 'عصاج بالطماطم أو الصلصة (انظري باب اللحوم)',
        nameEn: 'Assag with tomatoes or tomato paste (see meats section)',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st5-3',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st5-4',
        name: 'عصير طماطم',
        nameEn: 'Tomato juice',
        standardAmount: '1 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st5-5',
        name: 'ماء أو مرق',
        nameEn: 'Water or broth',
        standardAmount: 'قليل',
        category: 'liquid',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st5-6',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st5-7',
        name: 'زيت للتحمير',
        nameEn: 'Oil, for browning',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقشر البطاطس ويقور باحتراس ثم يغسل بالماء ويجفف.',
        textEn: 'Peel the potatoes and carefully core them, then rinse and dry.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يحمر تحميرا نصفيا في الزيت.',
        textEn: 'Lightly half-brown them in oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يحشى بالعصاج ويرص في بايركس لطهوه في الفرن أو يرص في إناء لطهوه فوق الموقد.',
        textEn: 'Stuff with the assag, then arrange in a Pyrex dish to bake, or in a pot to cook on the stovetop.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يسكب عليه عصير الطماطم والسائل المتبل بالملح والفلفل والسمن.',
        textEn: 'Pour over the tomato juice and the seasoned liquid with the ghee.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يغطى الإناء ويترك على درجة حرارة هادئة حتى النضج، أو يمكن أن يوضع في فرن متوسط الحرارة مع تغطيته حتى النضج.',
        textEn: 'Cover and simmer over low heat until cooked, or bake covered in a medium oven until done.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'البطاطس المحشوة',
        ingredients: ['¼1 كيلو  بطاطس متوسط الحجم', '¼ كيلو  عصاج بالطماطم أو الصلصة (انظري باب اللحوم)', 'سمن', 'كوب عصير طماطم', 'قليل من الماء أو المرق', 'ملح', 'فلفل', 'زيت للتحمير'],
        instructions: ['يقشر البطاطس ويقور باحتراس ثم يغسل بالماء ويجفف.', 'يحمر ½ تحمير في الزيت.', 'يحشى بالعصاج ويرص في بايركس لطهوه في الفرن أو يرص في إناء لطهوه فوق البوتاجاز.', 'يسكب عليه عصير الطماطم والسائل المتبل بالملح والفلفل والسمن.', 'يغطى الإناء ويترك على درجة حرارة هادئة حتى النضج.', 'يمكن أن يوضع في فرن متوسط الحرارة مع تغطيته حتى النضج.']
      }
    }
  },
  {
    id: 'stuff-06',
    title: 'الخرشوف المحشو',
    titleEn: 'Artichokes Stuffed with Assag in "Damaa" Sauce',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-5 أفراد',
    masterIngredients: [
      {
        id: 'st6-1',
        name: 'خرشوف مسلوق نصف سلق',
        nameEn: 'Parboiled artichokes',
        standardAmount: '10 حبات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '10 حبات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st6-2',
        name: 'عصاج بالطماطم (انظري باب اللحوم)',
        nameEn: 'Assag with tomatoes (see meats section)',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st6-3',
        name: 'صلصة الدمعة (انظري الوصفة التالية)',
        nameEn: '"Damaa" fresh tomato sauce (see recipe below)',
        standardAmount: '1 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يحشى الخرشوف بالعصاج ويرص في إناء ثم تصب عليه الدمعة.',
        textEn: 'Stuff the artichokes with the assag, arrange in a pot, and pour the damaa sauce over them.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغطى الإناء ويطهى على درجة حرارة هادئة، أو يرص في صينية ويدخل الفرن ويغطى حتى النضج.',
        textEn: 'Cover and simmer over low heat, or bake covered in a tray in the oven until cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يمكن تغطية الخرشوف بطبقة من الباشاميل في حالة طهوه في الفرن.',
        textEn: 'A layer of béchamel can be added on top if baking in the oven.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 3,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الخرشوف المحشو',
        ingredients: ['عدد 10 حبات من الخرشوف المسلوق نصف سلق', '¼ كيلو  عصاج بالطماطم (انظري باب اللحوم)', 'مقدار من صلصة الدمعة'],
        instructions: ['يحشى الخرشوف بالعصاج ويرص في إناء ثم تصب عليه الدمعة.', 'يغطى الإناء ويطهى على درجة حرارة هادئة أو يرص في صينية ويدخل الفرن ويغطى حتى النضج.', 'يمكن تغطية الخرشوف بطبقة من الباشامل في حالة طهوه في الفرن.']
      }
    }
  },
  {
    id: 'stuff-07',
    title: 'عمل صلصة الدمعة',
    titleEn: 'Fresh Tomato "Damaa" Sauce (for Stuffed Artichokes)',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '15 دقيقة',
    servings: 'حوالي كوب',
    masterIngredients: [
      {
        id: 'st7-1',
        name: 'طماطم معصورة',
        nameEn: 'Pressed tomatoes',
        standardAmount: '1 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st7-2',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1/8 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/8 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st7-3',
        name: 'خل',
        nameEn: 'Vinegar',
        standardAmount: '1 ملعقة كبيرة',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st7-4',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st7-5',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st7-6',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يحمر الثوم في سمن أو زيت، ثم يصب عليه عصير الطماطم حتى تنضج على درجة حرارة هادئة، ثم الخل ثم الماء والملح والفلفل.',
        textEn: 'Brown the garlic in ghee or oil, then pour in the tomato juice and cook over low heat until softened, then add the vinegar, water, salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 1,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل صلصة الدمعة',
        ingredients: ['ا كوب طماطم معصورة', '⅛ رأس ثوم مفري', 'ملعقة كبيرة خل', 'كوب ما ء', 'ملح', 'فلفل', '2 ملعقة كبيرة سمن أو زيت'],
        instructions: ['يحمر الثوم في سمن أو زيت ثم يصب عليه عصير الطماطم حتى تنضج على درجة حرارة هادئة ثم الخل ثم الماء والملح والفلفل.']
      }
    }
  },
  {
    id: 'stuff-08',
    title: 'محشو ورق العنب',
    titleEn: 'Stuffed Grape Leaves (Mahshi Waraq Enab)',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '1 ساعة',
    cookTime: '40 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'st8-1',
        name: 'ورق عنب ناعم',
        nameEn: 'Tender grape leaves',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st8-2',
        name: 'خلطة حشو بالأرز أو بالعصاج (انظري باب اللحوم)',
        nameEn: 'Stuffing with rice, or with assag (see meats section)',
        standardAmount: '1 كوب أرز أو 1/4 كيلو عصاج',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب أرز أو 1/4 كيلو عصاج'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st8-3',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st8-4',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'قليل',
        category: 'liquid',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st8-5',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st8-6',
        name: 'ثوم صحيح أو مقطع',
        nameEn: 'Whole or chopped garlic cloves',
        standardAmount: '2 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st8-7',
        name: 'بصلة رفيعة ومدعوكة، وطماطم شرائح (للقاع)',
        nameEn: 'Thinly sliced, mashed onion, and sliced tomato, for the pot\'s base',
        standardAmount: 'حسب الحاجة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغسل ورق العنب مرارا في الماء البارد ثم يفرد ويرتب.',
        textEn: 'Wash the grape leaves several times in cold water, then lay them out flat.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تسلق كل مجموعة في الماء المغلي المضاف إليه قليل من الملح ويرفع باحتراس ويوضع في مصفاة.',
        textEn: 'Blanch each batch in salted boiling water, then carefully lift out into a colander.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقطع أعناق الورق ثم تفرد الورقة بحيث تكون الناحية الملساء للخارج.',
        textEn: 'Trim the stems, and lay each leaf flat with the smooth side facing down.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يوضع جزء قليل من خلطة الحشو على الورقة وتلف كالإصبع حتى تنتهي الكمية.',
        textEn: 'Place a little of the stuffing on the leaf and roll into a small finger shape; repeat until finished.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يفرش قاع الإناء بطبقة بسيطة من ورق العنب غير المحشو مع شرائح بصلة رفيعة ومدعوكة بالملح والفلفل وطماطم ترانشات وقليل من الثوم المقطع والليمون.',
        textEn: 'Line the pot\'s base with a thin layer of unstuffed grape leaves, thin onion slices mashed with salt and pepper, sliced tomato, a little chopped garlic and lemon.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يرص الورق المحشو بنظام ويصب فوقه الليمون والسمن والثوم.',
        textEn: 'Arrange the stuffed rolls neatly on top, and pour over the lemon juice, ghee and garlic.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يرفع الإناء على درجة حرارة هادئة مع تغطيته لمدة 3 دقائق، ثم يسكب فوقه قليل من المرق أو الماء المملح ويغطى حتى النضج.',
        textEn: 'Cook over low heat, covered, for 3 minutes, then pour a little broth or salted water over it, cover, and cook until done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يقدم ومعه سلطة الزبادي.',
        textEn: 'Serve with a yogurt salad.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'محشو ورق العنب',
        ingredients: ['½ كيلو  ورق عنب ناعم', 'خلطة حشو باستخدام كوب أرز أو باستخدام ¼ كيلو عصاج (انظري باب اللحوم)', '2 ملعقة كبيرة سمن', 'قليل من الماء', 'ملح', 'م عصير ليمون', '2 فص ثوم صحيح أو مقطع'],
        instructions: ['يغسل ورق العنب مرارا في الماء البارد ثم يفرد ويرتب.', 'تسلق كل مجموعة في الماء المغلي المضاف إليه قليل من الملح ويرفع باحتراس ويوضع في مصفاة.', 'تقطع أعناق الورق ثم تفرد الورقة بحيث تكون الناحية الملساء للخارج.', 'يوضع جزء قليل من خلطة الحشو على الورقة وتلف كالإصبع حتى تنتهي الكمية.', 'يفرش قاع الإناء بطبقة بسيطة من ورق العنب الغير محشو مع شرائح بصلة رفيعة ومدعوكة بالملح والفلفل وطماطم ترانشات وقليل من الثوم المقطع والليمون.', 'يرص الورق المحشو بنظام ويصب فوقه الليمون والسمن و الثوم.', 'يرفع الإناء على درجة حرارة هادئة مع تغطيته لمدة 3 دقائق ثم يسكب فوقه قليل من المرق أو الماء المملح ويغطى حتى النضج.', 'يقدم ومعه سلطة الزبادي.']
      }
    }
  },
  {
    id: 'stuff-09',
    title: 'الكرنب المحشو',
    titleEn: 'Stuffed Cabbage Rolls with Dill and Cumin',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '45 دقيقة',
    cookTime: '35 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'st9-1',
        name: 'كرنبة متوسطة مسلوقة',
        nameEn: 'Medium boiled cabbage',
        standardAmount: '1 كرنبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كرنبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st9-2',
        name: 'شبت',
        nameEn: 'Dill',
        standardAmount: '2-4 حزم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2-4 حزم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st9-3',
        name: 'خلطة الحشو بدون بقدونس ونعناع ولحم (انظري الوصفة أعلاه)',
        nameEn: 'Rice stuffing mix, without parsley, mint or meat (see recipe above)',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st9-4',
        name: 'عصير طماطم',
        nameEn: 'Tomato juice',
        standardAmount: '1 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st9-5',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st9-6',
        name: 'كمون',
        nameEn: 'Cumin',
        standardAmount: '1 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st9-7',
        name: 'ماء أو مرق',
        nameEn: 'Water or broth',
        standardAmount: 'قليل',
        category: 'liquid',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تنزع الأوراق الخارجية الخضراء وتفصل الأوراق الباقية عن بعضها وتغسل باحتراس.',
        textEn: 'Remove the tough outer leaves, separate the remaining leaves, and wash carefully.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي الماء المضاف إليه الملح والكمون، وتلقى كمية من الأوراق في الماء الساخن وتترك حتى تنضج ثم ترفع باحتراس، وهكذا حتى نهاية الكمية.',
        textEn: 'Boil water with salt and cumin, blanch batches of the leaves until softened, then carefully lift out; repeat for all the leaves.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحشى كل ورقة بقليل من خلطة الحشو.',
        textEn: 'Stuff each leaf with a little of the filling.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تلف كالإصبع مع ملاحظة أن يكون السطح الأملس للخارج.',
        textEn: 'Roll into a finger shape, with the smooth side facing out.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرص في إناء بانتظام ويرفع على درجة حرارة هادئة لمدة 5 دقائق.',
        textEn: 'Arrange neatly in a pot and cook over low heat for 5 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يصب فوقه عصير الطماطم وقليل من المرق أو الماء المملح.',
        textEn: 'Pour over the tomato juice and a little broth or salted water.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يترك على درجة حرارة متوسطة حتى قرب النضج ثم تخفض الحرارة حتى يتم النضج.',
        textEn: 'Cook over medium heat until nearly done, then lower the heat until fully cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكرنب المحشو',
        ingredients: ['كرنبة متوسطة مسلوقة', 'من 2 : 4 حزم شبت', 'خلطة الحشو (بدون البقدونس والنعناع و اللحم المفروم)', 'كوب عصير طماطم', '2 ملعقة كبيرة سمن', 'ملعقة صغيرة كمون', 'قليل من الماء أو المرق'],
        instructions: ['نزع الأوراق الخارجية الخضراء وتفصل الأوراق الباقية عن بعضها وتغسل باحتراس.', 'يغلي الماء المضاف إليه الملح والكمون وتلقي كمية من الأوراق في الماء الساخن وتترك حتى تنضج ثم ترفع باحتراس وهكذا حتى نهاية الكمية.', 'تحشى كل ورقة بقليل من خلطة الحشو.', 'تلف كالإصبع مع ملاحظة أن يكون السطح الأملس للخارج.', 'يرص في إناء بانتظام ويرفع على درجة حرارة هادئة لمدة 5 دقائق.', 'يصب فوقه عصير الطماطم وقليل من المرق أو الماء المملح.', 'يترك على درجة حرارة متوسطة حتى قرب النضج ثم تخفض الحرارة حتى يتم النضج.']
      }
    }
  },
  {
    id: 'stuff-10',
    title: 'القطايف المحشوة بالعصاج أو الشكشوكة',
    titleEn: 'Savory Qatayef Stuffed with Assag or Shakshuka',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'st10-1',
        name: 'قطايف',
        nameEn: 'Qatayef pancakes',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st10-2',
        name: 'عصاج أو شكشوكة (انظري باب اللحوم أو الوصفة التالية)',
        nameEn: 'Assag, or shakshuka (see meats section, or the recipe below)',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st10-3',
        name: 'جبن رومي مبشور',
        nameEn: 'Grated Romy cheese',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st10-4',
        name: 'سمن أو زيت للتحمير',
        nameEn: 'Ghee or oil, for frying',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يوضع جزء من الحشو في القطايف ثم تطوى نصفين مع الضغط على الطرفين حتى يلتصقا.',
        textEn: 'Place some of the filling on a qatayef pancake, fold in half, and press the edges to seal.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمر في السمن أو الزيت المقدوح وترفع على مناديل ورقية.',
        textEn: 'Fry in hot ghee or oil and drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترش بالجبنة المبشورة وتقدم.',
        textEn: 'Sprinkle with grated cheese and serve.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يمكن حشو القطايف بالجبن والزبد المخلوط مع الجرجير المقطَع.',
        textEn: 'The qatayef can also be filled with cheese and butter mixed with chopped arugula.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'حشوة الجبن والجرجير',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'القطايف المحشوة بالعصاج أو الشكشوكة',
        ingredients: ['½ كيلو قطايف', '¼ كيلو عصاج (انظري باب اللحوم) أو شكشوكة', 'جبن رومي مبشور'],
        instructions: ['يوضع جزء من الحشو في القطايف ثم تطوى نصفين مع الضغط على الطرفين حتى يلتصقا.', 'تحمر في السمن أو الزيت المقدوح وترفع على مناديل ورقية.', 'ترش بالجبنة المبشورة و تقدم.', 'يمكن حشو القطايف بالجبن و الزبد المخلوط مع الجرجير المقطَع.']
      }
    }
  },
  {
    id: 'stuff-11',
    title: 'عمل الشكشوكة',
    titleEn: 'Shakshuka Filling (for Savory Pastries)',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'محشوات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '10 دقائق',
    servings: 'حشوة متعددة الاستخدام',
    masterIngredients: [
      {
        id: 'st11-1',
        name: 'بصلة كبيرة',
        nameEn: 'Large onion',
        standardAmount: '1 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st11-2',
        name: 'فلفلة كبيرة',
        nameEn: 'Large pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st11-3',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '3-4 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '3-4 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st11-4',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'st11-5',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تبشر البصلة وتحمر في السمن أو الزيت حتى الاصفرار، ثم نضيف الفلفلة المقطعة صغيرا وتقلب تقليبتين فقط.',
        textEn: 'Grate the onion and brown it in ghee or oil until golden, then add the finely chopped pepper and stir just briefly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق البيض ويتبل جيدا بالملح والفلفل والبهار، ثم يسكب على البصل والفلفل على درجة حرارة متوسطة مع التقليب حتى يتماسك الخضار مع البيض.',
        textEn: 'Beat the eggs and season well with salt, pepper and mixed spice, then pour over the onion and pepper over medium heat, stirring until the eggs set together with the vegetables.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل الشكشوكة',
        ingredients: ['بصلة كبيرة', 'فلفلة كبيرة', '3 : 4 بيضات', 'ملح', 'فلفل', 'بهار', 'سمن أو زيت'],
        instructions: ['تبشر البصلة وتحمر في السمن أو الزيت حتى الإصفرار ثم نضيف الفلفلة المقطعة صغيرا وتقلب تقليبتين فقط.', 'يخفق البيض ويتبل جيدا بالملح والفلفل والبهار ثم يسكب على البصل والفلفل على درجة حرارة متوسطة مع التقليب حتى يتماسك الخضار مع البيض.']
      }
    }
  },
  {
    id: 'bake-02',
    title: 'الباتيه بالعصاج',
    titleEn: 'Phyllo Pie with Assag and Milk-Egg Custard',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '40 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'bk2-1',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk2-2',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk2-3',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '3 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '3 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk2-4',
        name: 'عصاج (انظري باب اللحوم)',
        nameEn: '"Assag" minced meat filling (see meats section)',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk2-5',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk2-6',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يجهز الجلاش بوضع نصفه في صينية مدهونة بالسمن الخفيف.',
        textEn: 'Lightly grease a tray with ghee and layer in half the phyllo sheets.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع العصاج فوق نصف كمية الجلاش ثم تغطى ببقية الجلاش.',
        textEn: 'Spread the assag over the phyllo, then cover with the remaining sheets.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يقطع سمبوسات قبل دخولها الفرن ويصب فوقها السمن.',
        textEn: 'Score into diamond shapes before baking and drizzle ghee over the top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن متوسط الحرارة لمدة نصف ساعة تقريبا حتى يصفر لون الجلاش ويصير ذهبيا.',
        textEn: 'Bake in a medium oven for about half an hour until the phyllo turns golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يغلي اللبن ويتبل بالملح والفلفل والبهار، وبعد أن يبرد يضاف إليه البيض المخفوق جيدا.',
        textEn: 'Boil the milk and season with salt, pepper and mixed spice; once cooled, whisk in the well-beaten eggs.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يسكب خليط اللبن والبيض فوق الجلاش وملعقة سمن، ويترك داخل الفرن حتى يحمر الوجه ثم يغطى ويطفأ الفرن.',
        textEn: 'Pour the milk-egg mixture over the pastry with a spoonful of ghee, return to the oven until golden on top, then cover and turn off the oven to let it soak.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الباتيه بالعصاج',
        ingredients: ['½ كيلو جلاش', '2 كوب لبن', '3 بيضات', '¼ كيلو  عصاج (انظري باب اللحوم)', '2 م سمن أو زيت', 'ملح', 'فلفل', 'بهار'],
        instructions: ['يجهز الجلاش بوضع نصفه في صينية مدهونة بالسمن الخفيف.', 'يوضع العصاج فوق ½ كمية الجلاش ثم تغطى ببقية الجلاش.', 'يقطع سمبوسات قبل دخولها الفرن ويصب فوقها السمن.', 'تدخل فرن متوسط الحرارة لمدة ½ ساعة تقريبا حتى يصفر لون الجلاش ويصير ذهبيا.', 'يغلي اللبن ويتبل بالملح والفلفل والبهار وبعد أن يبرد يضاف إليه البيض المخفوق جيدا.', 'يسكب خليط اللبن والبيض فوق الجلاش وملعقة سمن ويترك داخل الفرن حتى يحمر الوجه ثم يغطى ويطفئ الفرن.']
      }
    }
  },
  {
    id: 'bake-03',
    title: 'الباتيه بشاورمة الدجاج أو اللحم',
    titleEn: 'Phyllo Pie with Shawarma Filling',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'bk3-1',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk3-2',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1 كوب + 1 كوب بارد للتشريب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب + 1 كوب بارد للتشريب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk3-3',
        name: 'حشوة شاورمة اللحم (انظري باب اللحوم)',
        nameEn: 'Beef shawarma filling (see meats section)',
        standardAmount: 'حسب الحاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk3-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk3-5',
        name: 'سمن للوجه',
        nameEn: 'Ghee, for the top',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تدهن صينية خفيفا بالسمن، ثم توضع فيها رقائق الجلاش واحدة واحدة، وتسقى كل واحدة بقليل من المرق المضاف إليه الزيت أو السمن.',
        textEn: 'Lightly grease a tray with ghee, layer in the phyllo sheets one at a time, moistening each with a little broth mixed with oil or ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع الحشوة فوق نصف كمية الجلاش.',
        textEn: 'Spread the shawarma filling over half the layered phyllo.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدهن بقية رقائق الجلاش بنفس الطريقة ثم يوضع سمن على الوجه وتقطع.',
        textEn: 'Layer and moisten the remaining sheets the same way, drizzle ghee on top, and score into portions.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد النضج تماما واحمرار الوجه يصب عليه كوب من المرق البارد.',
        textEn: 'Once fully baked and golden on top, pour a cup of cold broth over it.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تترك داخل الفرن حتى تتشرب السائل ثم تغطى ويطفأ الفرن.',
        textEn: 'Leave in the oven until the liquid is absorbed, then cover and turn off the oven.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الباتيه بشاورمة الدجاج أو اللحم',
        ingredients: ['½ كيلو  جلاش', 'كوب مرق', 'كمية من حشوة شاورمة اللحم (انظري باب اللحوم)', '2 ملعقة كبيرة سمن أو زيت', 'سمن للوجه'],
        instructions: ['تدهن صينية خفيفا بالسمن ثم توضع فيها رقائق الجلاش واحدة واحدة وتسقى كل واحدة بقليل من المرق المضاف إليه الزيت أو السمن.', 'توضع الحشوة فوق ½ كمية الجلاش.', 'تدهن بقية رقائق الجلاش بنفس الطريقة ثم يوضع سمن على الوجه وتقطع.', 'بعد النضج تماما واحمرار الوجه يصب عليه كوب من المرق البارد.', 'تترك داخل الفرن حتى تتشرب السائل ثم تغطى ويطفئ الفرن.']
      }
    }
  },
  {
    id: 'bake-04',
    title: 'الباتية بالكريمة',
    titleEn: 'Phyllo Pie with Custard Cream',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'bk4-1',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk4-2',
        name: 'كريمة (انظري الوصفة التالية)',
        nameEn: 'Custard cream (see recipe below)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk4-3',
        name: 'لبن أو مرق بارد',
        nameEn: 'Cold milk or broth',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk4-4',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نحضر صينية مدهونة ونضع نصف كمية الجلاش، ثم نضع الكريمة، وفوقها نصف الكمية الباقية من الجلاش، وفوقها ملعقة السمن، وتقطع.',
        textEn: 'In a greased tray, layer half the phyllo, spread the custard cream, cover with the remaining phyllo, drizzle with the tablespoon of ghee, and score into portions.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تدخل فرن متوسط الحرارة حتى يصبح لونها ذهبيا.',
        textEn: 'Bake in a medium oven until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تسقى باللبن البارد أو المرق البارد وتترك حتى تتشرب السائل، ثم تغطى ويطفأ الفرن.',
        textEn: 'Pour over the cold milk or broth, leave until absorbed, then cover and turn off the oven.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الباتية بالكريمة',
        ingredients: ['½ كيلو  جلاش', 'كريمة', 'كوب لبن أو كوب مرق', 'ملعقة كبيرة سمن'],
        instructions: ['نحضر صينية مدهونة ونضع نصف كمية الجلاش ثم نضع الكريمة وفوقها ½ الكمية الباقية من الجلاش وفوقها ملعقة السمن وتقطع.', 'تدخل فرن متوسط الحرارة حتى يصبح لونها ذهبيا.', 'تسقى باللبن البارد أو المرق البارد وتترك حتى تتشرب السائل ثم تغطى ويطفئ البوتاجاز (الفرن).']
      }
    }
  },
  {
    id: 'bake-05',
    title: 'عمل الكريمة',
    titleEn: 'Savory Custard Cream with Lemon Zest and Cold Cuts',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: 'يكفي لباتيه واحدة',
    masterIngredients: [
      {
        id: 'bk5-1',
        name: 'دقيق أو كورن فلاور',
        nameEn: 'Flour or cornflour',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk5-2',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk5-3',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '2 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '2 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk5-4',
        name: 'قشر ليمون',
        nameEn: 'Lemon zest',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk5-5',
        name: 'جبن رومي مبشور',
        nameEn: 'Grated Romy cheese',
        standardAmount: '3 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk5-6',
        name: 'لانشون حلال (بقري أو دجاج)',
        nameEn: 'Halal beef or chicken luncheon meat',
        standardAmount: 'قطع',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'قطع'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk5-7',
        name: 'بقدونس مفري',
        nameEn: 'Chopped parsley',
        standardAmount: 'قليل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk5-8',
        name: 'ملح وفلفل وبهار وقرفة وقرنفل',
        nameEn: 'Salt, pepper, mixed spice, cinnamon and cloves',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلي اللبن ويوضع فيه التوابل وقشر الليمونة المغسولة.',
        textEn: 'Boil the milk with the spices and the washed lemon zest.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البيض مع الدقيق ويقلب جيدا، ثم يضاف إلى اللبن الساخن مع ضربهم بالمضرب على درجة حرارة هادئة، ثم يضاف إليه البقدونس.',
        textEn: 'Whisk the eggs with the flour, then whisk into the hot milk over low heat, and stir in the parsley.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع من الحرارة ويضاف إليه قطع اللانشون.',
        textEn: 'Remove from the heat and fold in the cold cuts.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل الكريمة',
        ingredients: ['2 ملعقة كبيرة دقيق أو كورن فلاور', '2 كوب لبن', '2 بيضة', 'قشر ليمونة', '3 ملعقة كبيرة جبن رومي مبشور', 'قطع لانشون', 'بقدونس مفري', 'ملح', 'فلفل', 'بهار', 'قرفة', 'قرنفل'],
        instructions: ['يغلي اللبن ويوضع فيه التوابل وقشر الليمونة المغسولة.', 'يضرب البيض مع الدقيق ويقلب جيدا ثم يضاف إلى اللبن الساخن مع ضربهم بالمضرب على درجة حرارة هادئة ثم يضاف إليه البقدونس.', 'يرفع من الحرارة ويضاف إليه قطع اللانشون.']
      }
    }
  },
  {
    id: 'bake-06',
    title: 'الباتية بالجبن',
    titleEn: 'Cheese-Filled Pastry Cups',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '30 دقيقة (+15 دقيقة راحة)',
    cookTime: '20 دقيقة',
    servings: '6-8 قطع',
    masterIngredients: [
      {
        id: 'bk6-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '2.5 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-2',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-3',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-4',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'قليل',
        category: 'liquid',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-5',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-6',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '2 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '2 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-7',
        name: 'عصير ليمون وخل',
        nameEn: 'Lemon juice and vinegar',
        standardAmount: 'عصير 1/2 ليمونة + قليل من الخل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'عصير 1/2 ليمونة + قليل من الخل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-8',
        name: 'ملح',
        nameEn: 'Salt',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-9',
        name: 'جبن',
        nameEn: 'Cheese',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk6-10',
        name: 'زبد',
        nameEn: 'Butter',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يفرك السمن مع الزيت حتى يذابا جيدا، ثم يخلط بالدقيق ويقلب، ثم يكسر عليهما البيض ويفركوا جيدا.',
        textEn: 'Rub the ghee with the oil until well blended, mix into the flour, then work in the eggs by hand.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تعصر الليمونة على قليل من الماء وتسكب على الخليط حتى تصير عجينة لينة، وكلما احتاج للماء نضيفه إليه، ثم تغطى لمدة ربع ساعة.',
        textEn: 'Squeeze the lemon into a little water and add to the mixture to form a soft dough, adding more water as needed, then cover and rest for 15 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدهن الصينية بالسمن أو الزيت خفيفا.',
        textEn: 'Lightly grease the tray with ghee or oil.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تفرد العجينة على سطح ناشف مرشوش بالدقيق، ثم تحشى بالجبن الممزوج بالزبد بالكمية المناسبة.',
        textEn: 'Roll out the dough on a floured surface, then fill with cheese mixed with a suitable amount of butter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تقطع العجينة بالكوب مع ثني الحروف حتى تحتفظ بالحشوة داخلها.',
        textEn: 'Cut rounds with a cup, folding the edges to seal in the filling.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'ترص في الصينية مع دهن وجهها بالبيض، وتدخل فرن متوسط الحرارة حتى يحمر وجهها.',
        textEn: 'Arrange in the tray, brush the tops with egg, and bake in a medium oven until golden.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 10,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الباتية بالجبن',
        ingredients: ['½2 كوب دقيق', '½ كوب سمن', '1 ملعقة صغيرة بيكينج باودر', 'قليل من الماء', '1 ملعقة كبيرة زيت أو سمن', '2 بيضة', '½ ليمونة', 'خل', 'ملح', 'جبن', 'زبد'],
        instructions: ['يفرك السمن مع الزيت حتى يذابا جيدا ثم يخلط بالدقيق ويقلب ثم يكسر عليهم البيض ويفركوا جيدا.', 'تعصر الليمونة على قليل من الماء وتسكب على الخليط حتى تصير عجينة لينة وكلما احتاج للماء نضيفه إليه ثم تغطى لمدة ¼ ساعة.', 'تدهن الصينية بالسمن أو الزيت خفيفا.', 'تفرد العجينة على سطح ناشف مرشوش بالدقيق ثم تحشى بالجبن الممزوج بالزبد بالكمية المناسبة.', 'تقطع العجينة بالكوب مع ثني الحروف حتى تحتفظ بالحشوة داخلها.', 'ترص في الصينية مع دهن وجهها بالبيض.', 'تدخل فرن متوسط الحرارة حتى يحمر وجهها.']
      }
    }
  },
  {
    id: 'bake-07',
    title: 'الجلاش بالباشامل والخضروات',
    titleEn: 'Phyllo Pie with Chicken, Vegetables and Béchamel',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '30 دقيقة',
    cookTime: '35 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'bk7-1',
        name: 'لبن بارد',
        nameEn: 'Cold milk',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-2',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-3',
        name: 'باشاميل (انظري باب الخضروات)',
        nameEn: 'Béchamel (see vegetables section)',
        standardAmount: '2 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-4',
        name: 'بصلة متوسطة',
        nameEn: 'Medium onion',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-5',
        name: 'جزرة',
        nameEn: 'Carrot',
        standardAmount: '1 جزرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 جزرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-6',
        name: 'فلفل رومي',
        nameEn: 'Bell pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-7',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '2 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-8',
        name: 'بازلاء مسلوقة',
        nameEn: 'Boiled green peas',
        standardAmount: '1/2 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-9',
        name: 'كاري',
        nameEn: 'Curry powder',
        standardAmount: '1 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-10',
        name: 'زيتون',
        nameEn: 'Olives',
        standardAmount: 'حسب الرغبة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-11',
        name: 'ملح وفلفل وبهار وقرفة وزعتر',
        nameEn: 'Salt, pepper, mixed spice, cinnamon and thyme',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-12',
        name: 'دجاج مسلوق',
        nameEn: 'Boiled chicken, diced',
        standardAmount: 'حسب الرغبة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk7-13',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تبشر الجزرة والفلفلة ثم تقطع البصلة مكعبات صغيرة.',
        textEn: 'Grate the carrot and pepper, and finely dice the onion.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمر البصلة في الزيت أو السمن ثم نضيف إليها الثوم المفري مع التقليب وترفع.',
        textEn: 'Brown the onion in oil or ghee, add the crushed garlic, stir, and remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط الجزر والفلفل بالبازلاء المسلوقة جيدا ويتبلوا بالتوابل كلها، ثم نضيف الكاري مع قطع من الزيتون ونخلطهم بالبصل والثوم.',
        textEn: 'Mix the grated carrot and pepper with the boiled peas, season with all the spices, then add the curry powder and olive pieces, and combine with the onion and garlic.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يخلط الباشاميل بقطع الدجاج الصغيرة المسلوقة.',
        textEn: 'Mix the béchamel with the small diced boiled chicken.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نسكب الباشاميل على خلطة الخضروات ويقلبوا جيدا.',
        textEn: 'Pour the béchamel over the vegetable mixture and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدهن صينية بالسمن وتوضع نصف كمية الجلاش بعد دهنه خفيفا بالسمن.',
        textEn: 'Grease a tray with ghee and layer half the phyllo, lightly brushed with ghee.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'توضع خلطة الباشاميل عليه ثم يغطى بالنصف الآخر للجلاش، وفوقه ملعقة كبيرة سمن، ويقطَع.',
        textEn: 'Spread the béchamel filling over it, cover with the remaining phyllo, top with a tablespoon of ghee, and score into portions.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يدخل فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Bake in a medium oven until golden on top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'بعد النضج يسقى بكوب اللبن البارد المتبل بالملح والفلفل ويترك حتى يتشرب، ثم يغطى ويطفأ الفرن.',
        textEn: 'Once baked, pour over the cold milk seasoned with salt and pepper, leave until absorbed, then cover and turn off the oven.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 9,
      totalMasterIngredients: 13,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الجلاش بالباشامل والخضروات',
        ingredients: ['كوب لبن', '½ كيلو  جلاش', 'باشامل', 'بصلة متوسطة', 'جزرة', 'ثمرة فلفل رومي', '2 فص ثوم مفري', '½ كوب بازلاء مسلوقة', 'ملعقة صغيرة كاري', 'زيتون', 'ملح', 'فلفل', 'بهار', 'قرفة', 'زعتر', 'قطع من دجاج مسلوق', 'سمن أو زيت'],
        instructions: ['تبشر الجزرة والفلفلة ثم تقطع البصلة مكعبات صغيرة.', 'تحمر البصلة في الزيت أو السمن ثم نضيف إليها الثوم المفري مع التقليب وترفع.', 'يخلط الجزر والفلفل بالبازلاء المسلوقة جيدا ويتبلوا بالتوابل كلها ثم نضيف الكاري مع قطع من الزيتون ونخلطهم بالبصل والثوم.', 'يخلط الباشامل بقطع الدجاج الصغيرة المسلوقة.', 'نسكب الباشامل على خلطة الخضروات ويقلبوا جيدا.', 'تدهن صينية بالسمن وتوضع ½ كمية الجلاش بعد دهنه خفيفا بالسمن.', 'توضع خلطة الباشامل عليه ثم يغطى بالنصف الآخر للجلاش وفوقه ملعقة كبيرة سمن ويقطَع.', 'يدخل فرن متوسط الحرارة حتى يحمر الوجه.', 'بعد النضج  يسقى بكوب اللبن البارد المتبل بالملح والفلفل ويترك حتى يتشرب ثم يغطى ويطفئ الفرن.']
      }
    }
  },
  {
    id: 'bake-08',
    title: 'باتيه الشكشوكة',
    titleEn: 'Phyllo Pie with Shakshuka Filling',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'bk8-1',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk8-2',
        name: 'شكشوكة (انظري الوصفة في باب المحشوات)',
        nameEn: 'Shakshuka filling (see stuffed dishes section)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk8-3',
        name: 'لبن بارد',
        nameEn: 'Cold milk',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk8-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تدهن صينية بالسمن وتوضع نصف كمية الجلاش بعد دهنه خفيفا بالسمن.',
        textEn: 'Grease a tray with ghee and layer half the phyllo, lightly brushed with ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع الشكشوكة عليه ثم يغطى بالنصف الآخر للجلاش، وفوقه ملعقة كبيرة سمن، ويقطَع.',
        textEn: 'Spread the shakshuka over it, cover with the remaining phyllo, top with a tablespoon of ghee, and score into portions.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يدخل فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Bake in a medium oven until golden on top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد النضج يسقى بكوب اللبن البارد المتبل بالملح والفلفل ويترك حتى يتشرب، ثم يغطى ويطفأ الفرن.',
        textEn: 'Once baked, pour over the cold milk seasoned with salt and pepper, leave until absorbed, then cover and turn off the oven.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'باتيه الشكشوكة',
        ingredients: ['½ كيلو  جلاش', 'كوب لبن', 'سمن أو زيت'],
        instructions: ['تدهن صينية بالسمن وتوضع ½ كمية الجلاش بعد دهنه خفيفا بالسمن.', 'توضع الشكشوكة عليه ثم يغطى بالنصف الآخر للجلاش وفوقه ملعقة كبيرة سمن ويقطَع.', 'يدخل فرن متوسط الحرارة حتى يحمر الوجه.', 'بعد النضج  يسقى بكوب اللبن البارد المتبل بالملح والفلفل ويترك حتى يتشرب ثم يغطى ويطفئ الفرن.']
      }
    }
  },
  {
    id: 'bake-09',
    title: 'الرقاق',
    titleEn: 'Ruqaq — Layered Flatbread with Assag in Broth',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'bk9-1',
        name: 'رقاق',
        nameEn: 'Ruqaq flatbread sheets',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk9-2',
        name: 'عصاج (انظري باب اللحوم)',
        nameEn: '"Assag" minced meat filling (see meats section)',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk9-3',
        name: 'مرق لحم أو دجاج',
        nameEn: 'Beef or chicken broth',
        standardAmount: 'حوالي 2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حوالي 2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk9-4',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk9-5',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلى المرق ويترك على درجة حرارة هادئة جدا حتى الانتهاء من عمل الرقاقة، ويضاف له ملعقة سمن ويتبل بالفلفل والبهار.',
        textEn: 'Bring the broth to a boil, then keep it very warm while preparing the dish, stirring in the tablespoon of ghee and seasoning with pepper and mixed spice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر صينية مدهونة بالسمن، ثم نضع أول طبقة من الرقاق مع مراعاة عدم غمس أسفل الرقاقة في المرق حتى لا تلتصق في الصينية.',
        textEn: 'Grease a tray with ghee and lay the first sheet of ruqaq, taking care not to dip its underside in broth so it doesn\'t stick to the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يبلل وجهها فقط بالمرق الساخن.',
        textEn: 'Moisten only the top of the sheet with the hot broth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تؤخذ طبقة طبقة من الرقاق وتبلل خفيفا على الوجهين بالمرق الساخن باحتراس حتى لا ينهري الرقاق، وترص في الصينية حتى تنتهي نصف الكمية.',
        textEn: 'Take the sheets one at a time, lightly moistening both sides with the hot broth (taking care they don\'t fall apart), and layer them until half are used.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يوضع العصاج فوقها، ثم البدء في رص بقية الرقاق المبلل بالمرق المغلي حتى تنتهي الكمية.',
        textEn: 'Spread the assag over the layers, then continue layering the remaining moistened sheets until finished.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدهن وجه الصينية بالسمن وتدخل فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Brush the top with ghee and bake in a medium oven until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تقلب الرقاقة باحتراس على الوجه الآخر وتدخل الفرن حتى يحمر الوجه الآخر.',
        textEn: 'Carefully flip and bake the other side until golden as well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'بعد خروجها من الفرن تغطى على الفور حتى تظل الرقاقة لينة.',
        textEn: 'Cover immediately after baking to keep it tender.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الرقاق',
        ingredients: ['½ كيلو رقاق', '½ كيلو  عصاج (انظري باب اللحوم)', 'مرق لحم أو دجاج ( حوالي 2 كوب ) ملعقة كبيرة سمن', 'ملح', 'فلفل', 'بهار'],
        instructions: ['يغلى المرق ويترك على درجة حرارة هادئة جدا حتى الانتهاء من عمل الرقاقة.', 'يضاف للمرق ملعقة سمن وتتبل بالفلفل والبهار.', 'نحضر صينية مدهونة بالسمن ثم نضع أول طبقة من الرقاق مع مراعاة عدم غمس أسفل الرقاقة في المرق حتى لا تلتصق في الصينية.', 'يبلل وجهها فقط بالمرق الساخن.', 'تؤخذ طبقة طبقة من الرقاق وتبلل خفيفا على الوجهين بالمرق الساخن باحتراس حتى لا ينهري الرقاق وترص في الصينية حتى تنتهي ½ الكمية.', 'يوضع العصاج فوقها  ثم البدء في رص بقية الرقاق المبلل بالمرق المغلي حتى تنتهي الكمية.', 'تدهن وجه الصينية بالسمن وتدخل فرن متوسط الحرارة حتى يحمر الوجه.', 'تقلب الرقاقة باحتراس على الوجه الآخر وتدخل الفرن حتى يحمر الوجه الآخر.', 'بعد خروجها من الفرن تغطى على الفور حتى تظل الرقاقة لينة.']
      }
    }
  },
  {
    id: 'bake-10',
    title: 'فطيرة السبانخ',
    titleEn: 'Egyptian Yeasted Spinach Pastries',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '40 دقيقة (+راحة العجين)',
    cookTime: '20 دقيقة',
    servings: '10-12 قطعة',
    masterIngredients: [
      {
        id: 'bk10-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '3 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk10-2',
        name: 'زيت زيتون أو زيت ذرة',
        nameEn: 'Olive oil or corn oil',
        standardAmount: '1/4 إلى 1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/4 إلى 1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk10-3',
        name: 'ماء دافئ',
        nameEn: 'Warm water, for the dough',
        standardAmount: '1/2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk10-4',
        name: 'خميرة بيرة',
        nameEn: 'Fresh yeast',
        standardAmount: '1 قطعة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 قطعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk10-5',
        name: 'حشوة السبانخ (انظري الوصفة التالية)',
        nameEn: 'Spinach filling (see recipe below)',
        standardAmount: 'حسب الحاجة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk10-6',
        name: 'عصاج (اختياري، انظري باب اللحوم)',
        nameEn: '"Assag" filling, optional (see meats section)',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تذاب الخميرة في الماء الدافئ مع قليل من السكر وتترك لتخمر وتغطى.',
        textEn: 'Dissolve the yeast in the warm water with a little sugar, cover, and let it froth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف الزيت إلى الدقيق ثم يعجن بالماء حتى السمك المطلوب لتصير عجينة متماسكة، ثم تضاف الخميرة وتعجن جيدا.',
        textEn: 'Work the oil into the flour, then knead in water to the right thickness for a firm dough, then knead in the yeast mixture well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تفرد العجينة بالنشابة على سطح مرشوش بالدقيق ثم تقطع قطعا مناسبة بالقطاعة المستديرة أو المربعة.',
        textEn: 'Roll out the dough on a floured surface and cut into suitable rounds or squares.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تحشى كل قطعة بخلطة السبانخ، وممكن إضافة العصاج للحشوة في حالة وجوده، ثم تطوى القطعة جيدا.',
        textEn: 'Fill each piece with the spinach filling (adding assag to the filling if you like), and fold well to seal.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن صينية بالزيت وترص وحدات الفطائر مع دهن الوجه بالزيت، وتدخل فرن متوسط الحرارة حتى يحمر وجه الفطائر.',
        textEn: 'Oil a tray, arrange the pastries, brush the tops with oil, and bake in a medium oven until golden.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'فطيرة السبانخ',
        ingredients: ['3 كوب دقيق أو حسب الحاجة ممكن تقليل الكمية في جميع المقادير', 'من ¼ : ½  كوب زيت زيتون أو زيت ذرة', '½ كوب ماء دافئ للعجين', 'قطعة خميرة بيرة', '¼ كيلو عصاج حسب الحاجة (انظري باب اللحوم).'],
        instructions: ['تذاب الخميرة في الماء الدافئ مع قليل من السكر وتترك لتخمر وتغطى.', 'يضاف الزيت إلى الدقيق ثم يعجنوا بالماء حتى السمك المطلوب لتصير عجينة متماسكة ثم تضاف الخميرة وتعجن جيدا.', 'تفرد العجينة  بالنشابة على سطح مرشوش بالدقيق ثم تقطع قطعا مناسبة بالقطاعة المستديرة أو المربعة.', 'تحشى كل قطعة بخلطة السبانخ وممكن إضافة العصاج للحشوة في حالة وجود العصاج ثم تطوى القطعة جيدا.', 'تدهن صينية بالزيت وترص وحدات الفطائر مع دهن الوجه بالزيت وتدخل فرن متوسط الحرارة حتى يحمر وجه الفطائر.']
      }
    }
  },
  {
    id: 'bake-11',
    title: 'عمل حشوة السبانخ',
    titleEn: 'Spinach Filling (for Pastries)',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '-',
    servings: 'يكفي لعجينة فطيرة واحدة',
    masterIngredients: [
      {
        id: 'bk11-1',
        name: 'سبانخ',
        nameEn: 'Spinach',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk11-2',
        name: 'بصل مفري',
        nameEn: 'Grated onion',
        standardAmount: '2 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk11-3',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk11-4',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk11-5',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع السبانخ رفيعا ويغسل جيدا ويعصر من الماء، ثم يضاف إليه الملح والفلفل وعصير الليمون ويدعك جيدا.',
        textEn: 'Finely shred the spinach, wash well, and squeeze out the water, then mix in salt, pepper and lemon juice, massaging well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يمكن استخدام الخضار المسلوق كالبازلاء والجزر والفلفل الأخضر مع البصل المحمر والتوابل، ثم مزج الخضار بملعقة مستردة والجبن المهروس، أو استخدام لحم الدجاج المسلوق المفروم مع البصلة المحمرة والتوابل.',
        textEn: 'Other fillings can be used instead: boiled vegetables such as peas, carrots and green pepper with browned onion and spices, mixed with a spoonful of mustard and mashed cheese; or minced boiled chicken with browned onion and spices.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'حشوات أخرى',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل حشوة السبانخ',
        ingredients: ['1 كيلو سبانخ', '2 بصلة مفرية', 'عصير ليمون', 'ملح', 'فلفل', 'زيت'],
        instructions: ['يقطع السبانخ رفيعا ويغسل جيدا ويعصر من الماء ثم يضاف إليه الملح والفلفل وعصير الليمون ويدعك جيدا.', 'يستخدم الخضار المسلوق كالبازلاء والجزر والفلفل الأخضر مع البصل المحمر والتوابل ثم مزج الخضار بملعقة مستردة والجبن المهروس.', 'يستخدم لحم الدجاج المسلوق المفروم مع البصلة المحمرة والتوابل.']
      }
    }
  },
  {
    id: 'bake-12',
    title: 'الكانيلوني',
    titleEn: 'Egyptian-Style Cannelloni Crêpes with Shakshuka or Assag',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'bk12-1',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk12-2',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk12-3',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '4 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '4 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk12-4',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk12-5',
        name: 'جبن رومي مبشور',
        nameEn: 'Grated Romy cheese',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk12-6',
        name: 'حشوة الشكشوكة أو عصاج (انظري باب اللحوم)',
        nameEn: 'Shakshuka filling, or assag (see meats section)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk12-7',
        name: 'صلصة طماطم للوجه',
        nameEn: 'Tomato sauce, for the top',
        standardAmount: 'حسب الحاجة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقلب الدقيق مع اللبن تدريجيا، ثم يضرب البيض ويقلبوا معا جيدا.',
        textEn: 'Whisk the flour gradually into the milk, then beat in the eggs and mix well to a smooth batter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر طاسة تيفال صغيرة ونضع قليل من الزيت في طبق صغير وقطعة قطن لدهن الطاسة بالزيت، فتدهن خفيفا حتى تسخن.',
        textEn: 'Lightly grease a small non-stick pan with a little oil using a piece of cotton cloth, and heat it.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نملأ ملعقة كبيرة من العجينة ونضعها بحرص في التيفال على درجة حرارة هادئة، ثم تقلب على الوجه الآخر حتى يصير اللون ذهبيا وتوضع في طبق كبير.',
        textEn: 'Ladle a tablespoon of batter into the pan over low heat, flip once golden, and set aside on a large plate.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تكرر العملية واحدة واحدة حتى ينتهي الخليط كله.',
        textEn: 'Repeat, one crêpe at a time, until all the batter is used.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تحشى كل فطيرة إما بحشوة الشكشوكة أو بالعصاج مع ترك حروف الفطيرة بدون حشو.',
        textEn: 'Fill each crêpe with either the shakshuka or the assag filling, leaving the edges unfilled.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تلف كل فطيرة كالقلم وترص في صينية مدهونة قليلا جدا بالزيت أو السمن.',
        textEn: 'Roll each crêpe into a pen shape and arrange in a lightly oiled or greased tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يدهن وجه كل فطيرة بصلصة الطماطم ثم ترش بالجبن المبشور.',
        textEn: 'Brush the tops with tomato sauce and sprinkle with grated cheese.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'تدخل فرن متوسط الحرارة حوالي ربع ساعة حتى لا تنشف الفطائر.',
        textEn: 'Bake in a medium oven for about 15 minutes, taking care not to dry them out.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكانيلوني',
        ingredients: ['1 كوب لبن', '1 كوب دقيق', '4بيضات', 'زيت', '2 ملعقة كبيرة جبن رومي مبشور', 'حشوة الشكشوكة أو عصاج (انظري باب اللحوم)', 'صلصة طماطم لدهن الوجه'],
        instructions: ['يقلب الدقيق مع اللبن تدريجيا ثم يضرب البيض ويقلبوا معا جيدا.', 'نحضر طاسة تيفال صغيرة ونضع قليل من الزيت في طبق صغير وقطعة قطن لدهن الطاسة بالزيت.', 'تدهن الطاسة خفيفا بالزيت حتى يسخن.', 'نملأ ملعقة كبيرة من العجينة ونضعها بحرص في التيفال على درجة حرارة هادئة – ثم تقلب على الوجه الآخر حتى يصير اللون ذهبيا وتوضع في طبق كبير.', 'تكرر العملية واحدة واحدة حتى ينتهي الخليط كله.', 'تحشى كل فطيرة إما بحشوة الشكشوكة أو بالعصاج مع ترك حروف الفطيرة بدون حشو.', 'تلف كل فطيرة كالقلم وترص في صينية مدهونة قليل جدا بالزيت أو السمن.', 'يدهن وجه كل فطيرة بصلصة الطماطم ثم ترش بالجبن المبشور.', 'تدخل فرن  متوسط الحرارة حوالي ¼ ساعة حتى لا تنشف الفطائر.']
      }
    }
  },
  {
    id: 'bake-13',
    title: 'البيتزا',
    titleEn: 'Egyptian Yogurt-Dough Pizza',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '1 ساعة (+تخمير)',
    cookTime: '20 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'bk13-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk13-2',
        name: 'ذرة ملح',
        nameEn: 'A pinch of salt',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk13-3',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk13-4',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1/2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk13-5',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk13-6',
        name: 'بيكينج باودر أو خميرة بيرة',
        nameEn: 'Baking powder, or fresh yeast',
        standardAmount: '1 ملعقة صغيرة أو 2 ملعقة صغيرة خميرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة أو 2 ملعقة صغيرة خميرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk13-7',
        name: 'طبقة البيتزا (جبن موزاريلا، جبن كيري، جبن أبيض، زيتون، لانشون حلال، تونة، عصاج، شكشوكة، دجاج مفروم، طماطم، فلفل أخضر)',
        nameEn: 'Toppings, any combination: mozzarella, cream cheese, white cheese, olives, halal cold cuts, tuna, assag, shakshuka, minced chicken, tomato slices, green pepper',
        standardAmount: 'حسب الرغبة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تذاب الخميرة في قليل من الماء الدافئ وقليل من السكر وتترك لتخمر ربع ساعة.',
        textEn: 'Dissolve the yeast in a little warm water with a little sugar and let it froth for 15 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يفرك الدقيق في الزيت ثم الزبادي ويخلطوا جيدا، ثم توضع الخميرة وتعجن جيدا حتى تصبح لينة مع ملاحظة تزويدها بالماء.',
        textEn: 'Rub the oil into the flour, then work in the yogurt, then add the yeast and knead well into a soft dough, adding water as needed.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تترك العجينة حتى تخمر في مكان دافئ حوالي ساعة.',
        textEn: 'Let the dough rise in a warm place for about an hour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن صينية بالزيت وترش خفيفا بالدقيق حتى لا تلتصق بها العجينة.',
        textEn: 'Oil a tray and dust lightly with flour so the dough won\'t stick.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'توضع العجينة وتوزع داخل الصينية.',
        textEn: 'Press the dough into the tray, spreading it evenly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'توضع الصلصة على عجينة البيتزا ثم تزوق حسب الرغبة بأي من: جبن الموزاريلا شرائح، الجبن الكيري المدهون بالجبن الأبيض، قطع الزيتون، اللانشون، التونة، العصاج، الشكشوكة، الدجاج المفروم، شرائح الطماطم والفلفل الأخضر.',
        textEn: 'Spread sauce over the dough, then top with any combination: sliced mozzarella, cream cheese with white cheese, olives, cold cuts, tuna, assag, shakshuka, minced chicken, tomato slices and green pepper.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تدخل فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Bake in a medium oven until golden.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'البيتزا',
        ingredients: ['2 كوب دقيق', 'ذرَة ملح', 'كوب زبادي', '½ كوب ماء', '½ كوب زيت أو سمن', 'ملعقة صغيرة بيكينج باودر أو 2 ملعقة صغيرة خميرة بيرة بحجم عين الجمل', 'صلصة البيتزا أي من: شرائح جبن الموزاريلا', 'جبن كيري', 'جبن ابيض', 'زيتون', 'لانشون', 'تونة', 'عصاج', 'شكشوكة', 'دجاج مفروم', 'شرائح الطماطم', 'الفلفل الاخضر'],
        instructions: ['تذاب الخميرة في قليل من الماء الدافئ وقليل من السكر وتترك لتخمر ¼ ساعة.', 'يفرك الدقيق في الزيت ثم الزبادي ويخلطوا جيدا ثم توضع الخميرة وتعجن جيدا حتى تصبح لينة مع ملاحظة تزويدها بالماء.', 'تترك العجينة حتى تخمر في مكان دافئ حوالي ساعة.', 'تدهن صينية ( رقم 30 أو 28 ) بالزيت وترش خفيفا بالدقيق حتى لا تلتصق بها العجينة.', 'توضع العجينة وتوزع داخل الصينية.', 'توضع الصلصة على عجينة البيتزا في الصينية ثم تزوق حسب الرغبة باستخدام الجبن الموتزاريلا المقطع شرائح أو الجبن الكيرى المدهون بالجبن الأبيض مع إضافة قطع الزيتون وقطع اللانشون أو التونة أو العصاج أو الشكشوكة أو الدجاج المفروم و شرائح الطماطم والفلفل الأخضر.', 'تدخل فرن متوسط الحرارة حتى يحمر الوجه.']
      }
    }
  },
  {
    id: 'bake-14',
    title: 'عمل صلصة البيتزا',
    titleEn: 'Simple Pizza Tomato Sauce',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '10 دقائق',
    servings: 'يكفي لبيتزا واحدة',
    masterIngredients: [
      {
        id: 'bk14-1',
        name: 'زبدة أو سمن أو زيت',
        nameEn: 'Butter, ghee or oil',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk14-2',
        name: 'صلصة طماطم',
        nameEn: 'Tomato paste',
        standardAmount: '1 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk14-3',
        name: 'ملح وفلفل وسكر',
        nameEn: 'Salt, pepper and a little sugar',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk14-4',
        name: 'طماطم',
        nameEn: 'Tomato',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk14-5',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '2 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تسيح الزبدة أو السمن أو الزيت في طاسة، ونضع فيها الصلصة مع نصف ملعقة صغيرة سكر وملح وفلفل وقليل من الماء.',
        textEn: 'Melt the butter, ghee or oil in a pan, and add the tomato paste with half a teaspoon of sugar, salt, pepper and a little water.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع الطماطم قطعا صغيرة وكذا الثوم قطعا صغيرة وتضاف إلى الصلصة مع تقليبها حتى تنضج.',
        textEn: 'Finely chop the tomato and garlic, add to the sauce, and cook, stirring, until softened.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل صلصة البيتزا',
        ingredients: ['زبدة أو سمن أو زيت', 'ملعقة كبيرة صلصة طماطم', 'ملح', 'فلفل', 'قليل من السكر', 'ثمرة طماطم', '2 فص ثوم'],
        instructions: ['تسيح الزبد أو السمن أو الزيت في طاسة ونضع فيها الصلصة مع ½ ملعقة صغيرة سكر وملح وفلفل وقليل من الماء.', 'تقطع الطماطم قطعا صغيرة وكذا الثوم قطعا صغيرة وتضاف إلى الصلصة مع تقليبها حتى تنضج.']
      }
    }
  },
  {
    id: 'bake-15',
    title: 'بيتزا الدجاج',
    titleEn: 'Chicken Pizza with Sausage and Olives',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'معجنات',
    cookingMethod: 'فرن',
    prepTime: '1 ساعة (+تخمير)',
    cookTime: '20 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'bk15-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-2',
        name: 'ذرة ملح',
        nameEn: 'A pinch of salt',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-3',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-4',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1/2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-5',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-6',
        name: 'بيكينج باودر أو خميرة بيرة',
        nameEn: 'Baking powder, or fresh yeast',
        standardAmount: '1 ملعقة صغيرة أو 2 ملعقة صغيرة خميرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة أو 2 ملعقة صغيرة خميرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-7',
        name: 'بصلة صغيرة',
        nameEn: 'Small onion',
        standardAmount: '1 بصلة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-8',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '2 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-9',
        name: 'دجاج مسلوق',
        nameEn: 'Boiled chicken',
        standardAmount: 'حسب الرغبة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-10',
        name: 'سجق وزيتون',
        nameEn: 'Sausage and olives',
        standardAmount: 'للتزيين',
        category: 'other',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'bk15-11',
        name: 'صلصة طماطم (انظري الوصفة أعلاه)',
        nameEn: 'Tomato sauce (see recipe above)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تذاب الخميرة في قليل من الماء الدافئ وقليل من السكر وتترك لتخمر ربع ساعة.',
        textEn: 'Dissolve the yeast in a little warm water with a little sugar and let it froth for 15 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يفرك الدقيق في الزيت ثم الزبادي ويخلطوا جيدا، ثم توضع الخميرة وتعجن جيدا حتى تصبح لينة مع ملاحظة تزويدها بالماء.',
        textEn: 'Rub the oil into the flour, then work in the yogurt, then add the yeast and knead well into a soft dough, adding water as needed.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تترك العجينة حتى تخمر في مكان دافئ حوالي ساعة.',
        textEn: 'Let the dough rise in a warm place for about an hour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن صينية بالزيت وترش خفيفا بالدقيق حتى لا تلتصق بها العجينة، ثم توضع العجينة وتوزع داخل الصينية.',
        textEn: 'Oil and flour a tray, then press the dough evenly into it.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تحمَر بصلة صغيرة مفرية في سمن أو زيت ثم إضافة 2 فص ثوم مفري.',
        textEn: 'Brown the grated small onion in ghee or oil, then add the crushed garlic.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يقطَع الدجاج المسلوق قطعا صغيرة ويخلط بالبصل ثم يضاف إليه صلصة الطماطم ويقلبوا جيدا.',
        textEn: 'Dice the boiled chicken, mix with the onion, add the tomato sauce, and mix well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تسكب الخلطة على البيتزا وتجمل بقطع السجق والزيتون وشرائح البصل.',
        textEn: 'Spread the mixture over the pizza dough and garnish with sausage pieces, olives and onion slices, then bake until golden.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 11,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'بيتزا الدجاج',
        ingredients: ['2 كوب دقيق', 'ذرَة ملح', 'كوب زبادي', '½ كوب ماء', '½ كوب زيت أو سمن', 'ملعقة صغيرة بيكينج باودر أو 2 ملعقة صغيرة خميرة بيرة بحجم عين الجمل', 'صلصة البيتزا أي من: بصلة صغيرة مقطعة شرائح', '2 فص ثوم', 'دجاج مسلوق', 'سجق', 'زيتون'],
        instructions: ['تذاب الخميرة في قليل من الماء الدافئ وقليل من السكر وتترك لتخمر ¼ ساعة.', 'يفرك الدقيق في الزيت ثم الزبادي ويخلطوا جيدا ثم توضع الخميرة وتعجن جيدا حتى تصبح لينة مع ملاحظة تزويدها بالماء.', 'تترك العجينة حتى تخمر في مكان دافئ حوالي ساعة.', 'تدهن صينية ( رقم 30 أو 28 ) بالزيت وترش خفيفا بالدقيق حتى لا تلتصق بها العجينة.', 'توضع العجينة وتوزع داخل الصينية.', 'تحمَر بصلة صغيرة مفرية في سمن أو زيت ثم إضافة 2 فص ثوم مفري.', 'يقطَع الدجاج المسلوق قطعا صغيرة ويخلط بالبصل ثم يضاف إليه صلصة الطماطم ويقلبوا جيدا.', 'تسكب الخلطة على البيتزا وتجمل بقطع السجق والزيتون و شرائح البصل.']
      }
    }
  },
  {
    id: 'savory-01',
    title: 'العجة',
    titleEn: 'Egyptian Egg "Ogga" with Onion',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '10 دقائق',
    servings: '2 أفراد',
    masterIngredients: [
      {
        id: 'sv1-1',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '4 بيضات أو حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: '4 بيضات أو حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv1-2',
        name: 'بصلة مفرية',
        nameEn: 'Grated onion',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv1-3',
        name: 'ملح وفلفل ونعناع جاف',
        nameEn: 'Salt, pepper and dried mint',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv1-4',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv1-5',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv1-6',
        name: 'بقدونس مفري',
        nameEn: 'Chopped parsley',
        standardAmount: '1 ملعقة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقدح السمن أو الزيت ويحمر فيه البصلة حتى تصفر، ثم يحمر فيها الدقيق قليلا ويترك ليبرد.',
        textEn: 'Heat the ghee or oil and brown the onion until golden, then stir in the flour briefly, and let it cool.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق البيض المتبل بالملح والفلفل والنعناع والبقدونس، ثم نضيفه إلى البصل المخلوط بالدقيق البارد ويخلط جيدا.',
        textEn: 'Beat the eggs seasoned with salt, pepper, mint and parsley, then add to the cooled onion-flour mixture and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر مقلاة بها قليل من الزيت المقدوح ويصب فيها الخليط على درجة حرارة هادئة حتى يحمر الوجه، ثم يقلب باحتراس على الوجه الآخر حتى يحمر السطح، وتقلب في صحن.',
        textEn: 'Pour the mixture into a lightly oiled pan over low heat until golden on the bottom, carefully flip to brown the other side, then turn out onto a plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'العجة',
        ingredients: ['4 بيضات أو حسب الحاجة', 'بصلة مفرية', 'ملح', 'فلفل', 'نعناع جاف', 'ملعقة كبيرة دقيق', 'ملعقة كبيرة سمن أو زيت', 'ملعقة صغيرة بقدونس مفري'],
        instructions: ['يقدح السمن أو الزيت ويحمر فيه البصلة حتى تصفر ثم يحمر فيها الدقيق قليلا ويترك ليبرد.', 'يخفق البيض المتبل بالملح والفلفل والنعناع والبقدونس ثم نضيفه إلى البصل المخلوط بالدقيق البارد ويخلط جيدا.', 'نحضر مقلاة بها قليل من الزيت المقدوح ويصب فيه الخليط على درجة حرارة هادئة حتى يحمر الوجه ثم يقلب باحتراس على الوجه الآخر حتى يحمر السطح وتقلب في صحن.']
      }
    }
  },
  {
    id: 'savory-02',
    title: 'الأومليت',
    titleEn: 'Classic Omelette with Onion',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '8 دقائق',
    servings: '1-2 أفراد',
    masterIngredients: [
      {
        id: 'sv2-1',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '3 بيضات أو حسب الرغبة',
        category: 'other',
        sourceVariations: {
          doc1: '3 بيضات أو حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv2-2',
        name: 'بصلة مفرية غير ناضجة',
        nameEn: 'Grated raw onion',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv2-3',
        name: 'ملح وفلفل ونعناع',
        nameEn: 'Salt, pepper and mint',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv2-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv2-5',
        name: 'لبن أو قشدة',
        nameEn: 'Milk or clotted cream',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تبشر البصلة وتدعك بالملح والفلفل والنعناع.',
        textEn: 'Grate the onion and mash it with salt, pepper and mint.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق البيض جيدا ثم يخلط بالبصل وملعقة اللبن أو القشدة.',
        textEn: 'Beat the eggs well and mix with the onion and the tablespoon of milk or clotted cream.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يقدح الزيت في مقلاة ويصب البيض مع هز المقلاة للتأكد من تماسك الأومليت وإحمرار السطح.',
        textEn: 'Heat the oil in a pan, pour in the egg mixture, and gently shake the pan to make sure it sets and browns underneath.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تقلب على الوجه الآخر بخفة حتى يحمر السطح الآخر ثم تغرف في الصحن.',
        textEn: 'Flip gently to brown the other side, then transfer to a plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يمكن إضافة الزيتون أثناء خفق البيض أو الطماطم المقطعة صغيرا أو الجبن المبشور أو الفلفل المقطع، أو البطاطس الرفيعة المحمرة وهي تعطي مذاقا جميلا، أو إضافة العصاج أو قطع اللانشون، وهذه العناصر تخلط جيدا مع البيض المخفوق قبل وضعه في المقلاة.',
        textEn: 'Olives, diced tomato, grated cheese, chopped pepper, thin fried potatoes (which add a lovely flavor), assag, or cold cuts can all be whisked into the eggs before cooking.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الأومليت',
        ingredients: ['3 بيضات أو حسب الرغبة', 'بصلة مفرية غير ناضجة', 'ملح', 'فلفل', 'نعناع', 'ملعقة كبيرة سمن أو زيت', 'ملعقة كبيرة لبن أو قشدة'],
        instructions: ['تبشر البصلة وتدعك بالملح والفلفل والنعناع.', 'يخفق البيض جيدا ثم يخلط بالبصل وملعقة اللبن أو القشدة.', 'يقدح الزيت في مقلاة ويصب البيض مع هز المقلاة للتأكد من تماسك الأومليت وإحمرار السطح.', 'تقلب على الوجه الآخر بخفة حتى يحمر السطح الآخر ثم تغرف في الصحن.', 'يمكن إضافة الزيتون أثناء خفق البيض أو الطماطم المقطعة صغيرا أو الجبن المبشور أو الفلفل المقطع – أو البطاطس الرفيعة المحمرة وهي تعطى مذاقا جميلا – أو إضافة العصاج أو قطع اللانشون وهذه العناصر تخلط جيدا مع البيض المخفوق قبل وضعه في المقلاة.']
      }
    }
  },
  {
    id: 'savory-03',
    title: 'الشكشوكة',
    titleEn: 'Shakshuka — Egyptian Egg and Vegetable Skillet',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '10 دقائق',
    servings: '2-3 أفراد',
    masterIngredients: [
      {
        id: 'sv3-1',
        name: 'بصلة كبيرة',
        nameEn: 'Large onion',
        standardAmount: '1 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv3-2',
        name: 'فلفل أخضر كبير',
        nameEn: 'Large green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv3-3',
        name: 'طماطم',
        nameEn: 'Tomato',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv3-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv3-5',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '5-6 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '5-6 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv3-6',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسخن الزيت أو السمن ثم نضيف البصلة المبشورة حتى يصفر لونها.',
        textEn: 'Heat the oil or ghee and add the grated onion, cooking until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضيف الفلفلة المقطعة صغيرا مع ثمرة الطماطم المقطعة أو المبشورة، ويقلبوا مع البصلة تقليبتين فقط.',
        textEn: 'Add the finely chopped pepper with the chopped or grated tomato, stirring briefly with the onion.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفق البيض ويتبل بالملح والفلفل والبهار، ثم يضاف إلى الخلطة ويقلبوا جيدا على درجة حرارة متوسطة حتى يتماسك البيض.',
        textEn: 'Beat the eggs, season with salt, pepper and mixed spice, add to the mixture, and stir well over medium heat until set.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يغرف في الطبق ويقدم ساخنا.',
        textEn: 'Serve hot.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الشكشوكة',
        ingredients: ['بصلة كبيرة', 'ثمرة فلفل أخضر كبيرة', 'ثمرة طماطم', 'سمن أو زيت من 5 : 6 بيضات', 'ملح', 'فلفل', 'بهار'],
        instructions: ['يسخن الزيت أو السمن ثم نضيف البصلة المبشورة حتى يصفر لونها.', 'نضيف الفلفلة المقطعة صغيرا مع ثمرة الطماطم المقطعة أو المبشورة ويقلبوا مع البصلة تقليبتين فقط.', 'يخفق البيض ويتبل بالملح والفلفل والبهار ثم يضاف إلى الخلطة ويقلبوا جيدا في درجة حرارة متوسطة حتى يتماسك البيض.', 'يغرف في الطبق ويقدم ساخنا.']
      }
    }
  },
  {
    id: 'savory-04',
    title: 'الفول بالبيض',
    titleEn: 'Baked Fava Beans with Garlic Tomato Sauce and Egg',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '3-4 أفراد',
    masterIngredients: [
      {
        id: 'sv4-1',
        name: 'فول مهروس أو معصور',
        nameEn: 'Mashed or pressed fava beans',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv4-2',
        name: 'طماطم',
        nameEn: 'Tomatoes',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv4-3',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '3 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '3 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv4-4',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '2 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv4-5',
        name: 'ملح وكمون',
        nameEn: 'Salt and cumin',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv4-6',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يحمر الثوم في الزيت أو السمن حتى يصفر لونه، ثم تسكب الطماطم عليه.',
        textEn: 'Brown the garlic in oil or ghee until golden, then add the tomatoes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'بعد نضج الطماطم يصب عليها الفول ويتبل بالملح والكمون على درجة حرارة هادئة حتى الغليان.',
        textEn: 'Once the tomatoes soften, add the fava beans and season with salt and cumin, simmering over low heat until boiling.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفق البيض جيدا ويملح.',
        textEn: 'Beat the eggs well and season with salt.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر بايركس بحجم كمية الفول والبيض، ونضع فيه الفول ويسكب فوقه البيض.',
        textEn: 'Transfer the beans to a Pyrex dish sized to fit, and pour the beaten egg over the top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يدخل فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Bake in a medium oven until golden on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الفول بالبيض',
        ingredients: ['كمية من الفول المهروس أو المعصور حسب الحاجة', '2 ثمرة طماطم معصورة أو مقطعة', '3 بيضات', '2 فص ثوم مفري', 'ملح', 'كمون', 'زيت أو سمن'],
        instructions: ['يحمر الثوم في الزيت أو السمن حتى يصفر لونه ثم تسكب الطماطم عليه.', 'بعد نضج الطماطم يصب عليها الفول ويتبل بالملح والكمون على درجة حرارة هادئة حتى الغليان.', 'يخفق البيض جيدا ويملح.', 'نحضر بايركس بحجم كمية الفول والبيض ونضع فيه الفول ويسكب فوقه البيض.', 'يدخل فرن متوسط الحرارة حتى يحمر الوجه.']
      }
    }
  },
  {
    id: 'savory-05',
    title: 'العجة بالفول المدمس',
    titleEn: 'Egg "Ogga" with Fava Beans',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '10 دقائق',
    servings: '3-4 أفراد',
    masterIngredients: [
      {
        id: 'sv5-1',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '6 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '6 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv5-2',
        name: 'فول مدمس',
        nameEn: 'Cooked fava beans',
        standardAmount: '4 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv5-3',
        name: 'بصلة متوسطة مفرية',
        nameEn: 'Grated medium onion',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv5-4',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv5-5',
        name: 'بقدونس مفري',
        nameEn: 'Chopped parsley',
        standardAmount: '1 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv5-6',
        name: 'ملح وكمون وفلفل',
        nameEn: 'Salt, cumin and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقشر الفول المدمس ويدهك جيدا بالشوكة.',
        textEn: 'Peel the fava beans and mash well with a fork.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يحمر البصل في الزيت أو السمن حتى اصفرار لونه، ثم يرفع ويترك ليهدأ قليلا.',
        textEn: 'Brown the onion in oil or ghee until golden, then remove and let cool slightly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفق البيض ويتبل بالملح والفلفل والكمون، ثم يخلط بالبصل.',
        textEn: 'Beat the eggs, season with salt, pepper and cumin, and mix with the onion.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف لخليط البيض بالبصل الفول والبقدونس ويخلطوا جيدا.',
        textEn: 'Add the mashed beans and parsley to the egg-onion mixture and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يقدح قليل من الزيت في طاسة تيفال ويصب بها الخليط ويقلى بنفس طريقة تحمير العجة والأومليت على الوجهين.',
        textEn: 'Heat a little oil in a non-stick pan, pour in the mixture, and cook on both sides as for the ogga or omelette.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يجمل بالبقدونس.',
        textEn: 'Garnish with parsley.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'العجة بالفول المدمس',
        ingredients: ['6 بيضات', '4 ملعقة كبيرة فول مدمس', 'بصلة متوسطة مفرية', '2 ملعقة كبيرة سمن أو زيت', 'ملعقة كبيرة بقدونس مفري', 'ملح', 'كمون', 'فلفل'],
        instructions: ['يقشر الفول المدمس ويدهك جيدا بالشوكة.', 'يحمر البصل في الزيت أو السمن حتى اصفرار لونه ثم يرفع ويترك ليهدأ قليلا.', 'يخفق البيض ويتبل بالملح والفلفل والكمون ثم يخلط بالبصل.', 'نضيف لخليط البيض بالبصل الفول والبقدونس ويخلطوا جيدا.', 'يقدح قليل من الزيت في طاسة تيفال ويصب بها الخليط ويقلى بنفس طريقة تحمير العجة والأومليت على الوجهين.', 'يجمل بالبقدونس.']
      }
    }
  },
  {
    id: 'savory-06',
    title: 'الفول المدمس بالتقلية',
    titleEn: 'Fava Beans in Garlic Tomato Sauce',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '3-4 أفراد',
    masterIngredients: [
      {
        id: 'sv6-1',
        name: 'فول مدمس ناضج',
        nameEn: 'Cooked fava beans',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv6-2',
        name: 'بصلة مفرية ناعمة',
        nameEn: 'Finely grated onion',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv6-3',
        name: 'بقدونس',
        nameEn: 'Parsley',
        standardAmount: '2 ملعقة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv6-4',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes, or tomato paste',
        standardAmount: '1 كوب أو 1 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كوب أو 1 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv6-5',
        name: 'كسبرة ناعمة',
        nameEn: 'Ground coriander',
        standardAmount: '1/2 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1/2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv6-6',
        name: 'ملح وفلفل',
        nameEn: 'Salt and pepper',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv6-7',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '4 فصوص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '4 فصوص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv6-8',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv6-9',
        name: 'عصاج (اختياري، انظري باب اللحوم)',
        nameEn: 'Assag, optional (see meats section)',
        standardAmount: '2 ملعقة كبيرة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يحمر البصل في الزيت أو السمن حتى يصفر لونه، ثم يضاف إليه الثوم المفري والكسبرة.',
        textEn: 'Brown the onion in oil or ghee until golden, then add the crushed garlic and coriander.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف كوب الطماطم إلى البصلة على درجة حرارة هادئة حتى تنضج الطماطم.',
        textEn: 'Add the cup of tomatoes to the onion over low heat and cook until softened.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف الفول ويقلب حوالي 10 دقائق، ويضاف الماء إذا احتاج.',
        textEn: 'Add the fava beans and stir for about 10 minutes, adding water if needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف البقدونس المفري ويقلب مع الفول ثم يرفع من الحرارة.',
        textEn: 'Stir in the chopped parsley and remove from the heat.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يمكن إضافة العصاج إلى الفول حسب المذاق.',
        textEn: 'Assag can be stirred in to taste.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الفول المدمس بالتقلية',
        ingredients: ['1 كوب من الفول المدمس الناضج', 'بصلة مفرية ناعما', '2 ملعقة صغيرة بقدونس', '1كوب طماطم ( أو ملعقة صلصة طماطم )', '½ ملعقة صغيرة كسبرة ناعمة', 'ملح', 'فلفل', '4 فصوص ثوم مفري', 'زيت أو سمن', '2 ملعقة كبيرة عصاج (انظري باب اللحوم)'],
        instructions: ['يحمر البصل في الزيت أو السمن حتى يصفر لونه ثم يضاف إليه الثوم المفري والكسبرة.', 'يضاف كوب الطماطم إلى البصلة على درجة حررة هادئة حتى تنضج الطماطم.', 'يضاف الفول ويقلب حوالي 10 دقائق ويضاف الماء إذا احتاج.', 'يضاف البقدونس المفري ويقلب مع الفول ثم يرفع من الحرارة.', 'يمكن اضافة العصاج إلى الفول حسب المذاق.']
      }
    }
  },
  {
    id: 'savory-07',
    title: 'التوست بالبيض',
    titleEn: 'Egg-Dipped Fried Toast',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '5 دقائق',
    servings: '1 فرد',
    masterIngredients: [
      {
        id: 'sv7-1',
        name: 'بيضة',
        nameEn: 'Egg',
        standardAmount: '1 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv7-2',
        name: 'ملح وفلفل ونعناع جاف',
        nameEn: 'Salt, pepper and dried mint',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv7-3',
        name: 'توست',
        nameEn: 'Toast bread',
        standardAmount: '1 شريحة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 شريحة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv7-4',
        name: 'زبد',
        nameEn: 'Butter',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv7-5',
        name: 'فلفل أخضر وجبن مبشور وزيتون (للتزيين)',
        nameEn: 'Green pepper, grated cheese and olives, for garnish',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نخفق البيضة وتتبل بالملح القليل والفلفل والنعناع.',
        textEn: 'Beat the egg and season with a little salt, pepper and mint.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تغمس شريحة التوست في البيض وتترك قليلا لتتشرب، ثم تقلب باحتراس على الوجه الآخر حتى تتشرب البيضة تماما.',
        textEn: 'Dip the toast slice in the egg, letting it soak briefly, then carefully flip to soak the other side.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع زبد في طاسة تيفال صغيرة ويسخن فقط، ثم نضع التوستة باحتراس في الطاسة على درجة حرارة هادئة.',
        textEn: 'Heat a little butter in a small non-stick pan and carefully add the toast over low heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد قليل تقلب على الوجه الآخر باحتراس حتى تأخذ اللون الذهبي في الوجهين، ثم ترفع وتوضع في طبق بحجمها.',
        textEn: 'Flip carefully after a bit until golden on both sides, then remove to a plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تجمَل باستخدام شرائح صغيرة من الفلفل الأخضر مع بشر جبن رومي وزيتون مقطع، أو يمكن أيضا دهن التوست بأي نوع من الجبن ووضع شرائح اللانشون وشرائح الفلفل الأخضر وحولها الزيتون.',
        textEn: 'Garnish with small green pepper strips, grated Romy cheese and sliced olives; alternatively, spread with any cheese and top with cold cuts, green pepper strips and olives around it.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'التوست بالبيض',
        ingredients: ['1 بيضة', 'ملح', 'فلفل', 'نعناع جاف', '1 شريحة توست', 'زبد', 'فلفل أخضر', 'جبن مبشور', 'زيتون'],
        instructions: ['نخفق البيضة وتتبل بالملح القليل والفلفل والنعناع.', 'تغمس شريحة التوست في البيض وتترك قليلا لتتشرب.', 'تقلب باحتراس على الوجه الآخر حتى تتشرب البيضة تماما.', 'يوضع زبد في طاسة تيفال صغيرة ويسخن فقط ثم نضع التوستة باحتراس في الطاسة على درجة حرارة هادئة.', 'بعد قليل تقلب على الوجه الآخر باحتراس حتى تأخذ اللون الذهبي في الوجهين.', 'ترفع التوست وتوضع في طبق بحجمها.', 'تجمَل باستخدام شرائح صغيرة من الفلفل الأخضر مع بشر جبن رومي وزيتون مقطع.', 'يمكن ايضا دهن التوسف بأي نوع من الجبن (مثل جبن المثلثات) ويوضع فوقها شرائح اللانشون و شرائح الفلفل الأخضر وحولها الزيتون.']
      }
    }
  },
  {
    id: 'savory-08',
    title: 'التوست بالزعتر',
    titleEn: 'Fried Thyme Toast',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '5 دقائق',
    servings: '1 فرد',
    masterIngredients: [
      {
        id: 'sv8-1',
        name: 'توست',
        nameEn: 'Toast bread',
        standardAmount: '1 شريحة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 شريحة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv8-2',
        name: 'زعتر',
        nameEn: 'Thyme',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv8-3',
        name: 'زبد أو زيت',
        nameEn: 'Butter or oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv8-4',
        name: 'دقيق أو بقسماط',
        nameEn: 'Flour or breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نحضر إناء صغيرا ويخلط فيه الزعتر بالزيت.',
        textEn: 'Mix the thyme with the oil in a small bowl.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تتبل التوستة بالزعتر ثم تقلب في دقيق أو في بقسماط باحتراس.',
        textEn: 'Rub the toast with the thyme mixture, then carefully coat in flour or breadcrumbs.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يحمر في الزبد أو الزيت على الوجهين.',
        textEn: 'Fry in butter or oil on both sides.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'ممكن وضع شريحة أخرى من التوست فوقها بنفس الطريقة.',
        textEn: 'A second slice can be added on top the same way to make a sandwich.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'التوست بالزعتر',
        ingredients: ['شريحة توست', 'ملعقة كبيرة زعتر', 'زبد أو زيت', 'دقيق أو بقسماط'],
        instructions: ['نحضر إناء صغير ويخلط فيه الزعتر بالزيت.', 'تتبل التوستة بالزعتر ثم تقلب في دقيق أو في بقسماط باحتراس.', 'يحمر في الزبد أو الزيت على الوجهين.', 'ممكن وضع شريحة أخرى من التوست فوقها بنفس الطريقة.']
      }
    }
  },
  {
    id: 'savory-09',
    title: 'التوست بالدجاج',
    titleEn: 'Chicken-Stuffed Fried Toast Rolls',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '10 دقائق',
    servings: 'لكل شخص وحدة',
    masterIngredients: [
      {
        id: 'sv9-1',
        name: 'توست',
        nameEn: 'Toast bread',
        standardAmount: 'شريحة لكل فرد',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'شريحة لكل فرد'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv9-2',
        name: 'بصلة صغيرة مفرية',
        nameEn: 'Grated small onion',
        standardAmount: '1 بصلة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv9-3',
        name: 'دجاج مسلوق مفروم',
        nameEn: 'Minced boiled chicken',
        standardAmount: 'حسب الحاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv9-4',
        name: 'بيضة',
        nameEn: 'Egg',
        standardAmount: '1 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv9-5',
        name: 'ملح وفلفل وبهار وزعتر',
        nameEn: 'Salt, pepper, mixed spice and thyme',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv9-6',
        name: 'دقيق وبقسماط',
        nameEn: 'Flour and breadcrumbs',
        standardAmount: 'للتغليف',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'للتغليف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv9-7',
        name: 'زيت للتحمير',
        nameEn: 'Oil, for frying',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تفرد شريحة التوست باحتراس بالنشابة.',
        textEn: 'Carefully flatten the toast slice with a rolling pin.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمر البصلة في زيت ثم تخلط بقليل من الدجاج المفروم المتبل بالملح والفلفل والبهار والزعتر.',
        textEn: 'Brown the onion in oil, then mix with the minced chicken seasoned with salt, pepper, mixed spice and thyme.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحشى التوستة بهذه الخلطة بكمية صغيرة.',
        textEn: 'Fill the flattened toast with a small amount of the mixture.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تلف التوستة كالإصبع ثم توضع في الدقيق ثم في البيض ثم البقسماط.',
        textEn: 'Roll into a finger shape, then coat in flour, then egg, then breadcrumbs.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدخل الثلاجة حتى تتماسك ثم تحمر في الزيت الساخن.',
        textEn: 'Refrigerate until firm, then fry in hot oil.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تكرر هذه العملية حسب عدد الأسرة.',
        textEn: 'Repeat as needed for the number of servings.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'التوست بالدجاج',
        ingredients: ['شريحة توست', 'بصلة صغيرة مفرية', 'دجاج مسلوق مفروم', 'بيضة', 'ملح', 'فلفل', 'بهار', 'زعتر', 'زيت', 'دقيق', 'بقسماط'],
        instructions: ['تفرد شريحة التوست باحتراس بالنشابة.', 'تحمر البصلة في زيت ثم تخلط بقليل من الدجاج المفروم المتبل بالملح والفلفل والبهار والزعتر.', 'تحشى التوستة بهذه الخلطة بكمية صغيرة.', 'تلف التوستة  كالإصبع ثم توضع في الدقيق ثم في البيض ثم البقسماط.', 'تدخل الثلاجة حتى تتماسك ثم تحمر في الزيت الساخن.', 'تكرر هذه العملية حسب عدد الأسرة.']
      }
    }
  },
  {
    id: 'savory-10',
    title: 'التوست بالخضار',
    titleEn: 'Vegetable and Cheese Toast Sandwich, Breaded and Fried',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '8 دقائق',
    servings: '1 فرد',
    masterIngredients: [
      {
        id: 'sv10-1',
        name: 'توست',
        nameEn: 'Toast bread',
        standardAmount: '2 شريحة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 شريحة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv10-2',
        name: 'مايونيز أو سلطة الطحينة',
        nameEn: 'Mayonnaise, or tahini salad',
        standardAmount: '1 ملعقة صغيرة',
        category: 'other',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv10-3',
        name: 'جبن مثلثات',
        nameEn: 'Triangle cheese',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv10-4',
        name: 'بازلاء ناضجة وجزرة مبشورة',
        nameEn: 'Cooked peas and grated carrot',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv10-5',
        name: 'دقيق وبيض وبقسماط',
        nameEn: 'Flour, egg and breadcrumbs',
        standardAmount: 'للتغليف',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'للتغليف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv10-6',
        name: 'زيت للتحمير',
        nameEn: 'Oil, for frying',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع التوست مستديرا ويدهن سطحه بالمايونيز أو سلطة الطحينة الممزوجة بالخل والماء والملح والكمون.',
        textEn: 'Cut the toast into rounds and spread with mayonnaise, or tahini salad mixed with vinegar, water, salt and cumin.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تخلط البازلاء المسلوقة بكمية صغيرة مع الجزر المبشور والجبن المثلثات.',
        textEn: 'Mix a small amount of the boiled peas with the grated carrot and triangle cheese.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تفرد هذه الخلطة على التوستة المدهونة بالمايونيز أو الطحينة.',
        textEn: 'Spread this mixture on the toast round.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تغطى بتوستة أخرى ثم يغمسا في الدقيق ثم في البيض ثم في البقسماط مع ضغطها باليد حتى يلتصقا إلى حد ما، ثم تحمر في الزيت على الوجهين.',
        textEn: 'Cover with another toast round, press together, then dip in flour, egg and breadcrumbs, and fry in oil on both sides.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'التوست بالخضار',
        ingredients: ['2 شريحة توست', 'ملعقة صغيرة مايونيز أو سلطة الطحينة', 'جبن مثلثات', 'بازلاء ناضجة وجزرة مبشورة', 'دقيق', 'بيض', 'بقسماط', 'زيت'],
        instructions: ['يقطع التوست مستديرا ويدهن سطحه بالمايونيز أو سلطة الطحينة الممزوجة بالخل والماء والملح والكمون.', 'تخلط البازلاء المسلوقة بكمية صغيرة مع الجزر المبشور و الجبن المثلثات.', 'تفرد هذه الخلطة على التوستة المدهونة بالمايونيز أو الطحينة.', 'تغطى بتوستة أخرى ثم يغمسا في الدقيق ثم في البيض ثم في البقسماط مع ضغطها باليد حتى يلتصقا إلى حد ما ثم تحمر في الزيت على الوجهين.']
      }
    }
  },
  {
    id: 'savory-11',
    title: 'التوست بالعصاج',
    titleEn: 'Open Toast Sandwich with Assag, Cheese and Cold Cuts',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '5 دقائق',
    servings: '1 فرد',
    masterIngredients: [
      {
        id: 'sv11-1',
        name: 'توست',
        nameEn: 'Toast bread',
        standardAmount: '2 شريحة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 شريحة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv11-2',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv11-3',
        name: 'فلفل أخضر مفري',
        nameEn: 'Grated green pepper',
        standardAmount: '1 ملعقة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv11-4',
        name: 'عصاج (انظري باب اللحوم)',
        nameEn: '"Assag" minced meat filling (see meats section)',
        standardAmount: '1 ملعقة كبيرة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv11-5',
        name: 'جبن مربعات',
        nameEn: 'Square cheese slices',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv11-6',
        name: 'لانشون حلال (بقري أو دجاج)',
        nameEn: 'Halal beef or chicken cold cuts',
        standardAmount: 'قطع',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'قطع'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv11-7',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv11-8',
        name: 'خس وطماطم',
        nameEn: 'Lettuce and tomato',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يحمر الثوم المفري في الزيت مع الفلفل الأخضر.',
        textEn: 'Brown the crushed garlic in oil with the grated green pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تدهن التوستة بهذه الخلطة.',
        textEn: 'Spread this mixture on the toast.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع فوقها العصاج وعليه الجبن المربعات وشرائح اللانشون.',
        textEn: 'Top with the assag, then the cheese slices and cold cuts.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تغطى بطبقة ثانية من التوست وتجمل بحلقات الخس والطماطم.',
        textEn: 'Cover with a second slice of toast and garnish with lettuce and tomato slices.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'التوست بالعصاج',
        ingredients: ['2 شريحة توست', '1فص ثوم مفري', 'ملعقة صغيرة فلفل أخضر مفري', 'ملعقة كبيرة من العصاج (انظري باب اللحوم)', 'جبن مربعات أو أي نوع', 'قطع لانشون', 'زيت', 'ورق خس', 'طماطم'],
        instructions: ['يحمر الثوم المفري في الزيت مع الفلفل الأخضر.', 'تدهن التوستة بهذه الخلطة.', 'يوضع فوقها العصاج وعليه الجبن المربعات وشرائح اللانشون.', 'تغطى بطبقة ثانية من التوست وتجمل بحلقات الخس والطماطم.']
      }
    }
  },
  {
    id: 'savory-12',
    title: 'الكشك',
    titleEn: 'Kishk — Fermented Yogurt-Flour Soup with Broth and Fried Onion',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'أكلات شهية',
    cookingMethod: 'تسبيك',
    prepTime: '1 ساعة (+تخمير)',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'sv12-1',
        name: 'لبن زبادي',
        nameEn: 'Yogurt',
        standardAmount: '1 كوب كبير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب كبير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv12-2',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: 'حسب الحاجة لعجينة لزجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة لعجينة لزجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv12-3',
        name: 'مرق دجاج أو لحم',
        nameEn: 'Chicken or beef broth',
        standardAmount: '1-1.5 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1-1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv12-4',
        name: 'بصلة متوسطة مفرية',
        nameEn: 'Grated medium onion',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv12-5',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sv12-6',
        name: 'ملح',
        nameEn: 'Salt',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يذاب قليل من الملح في الزبادي ويقلب جيدا، ثم يضاف الدقيق تدريجيا مع التقليب المستمر حتى تتكون عجينة متوسطة الليونة.',
        textEn: 'Dissolve a little salt in the yogurt and mix well, then gradually stir in the flour until a medium-soft dough forms.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تغطى وتترك في مكان دافئ حوالي أكثر من ساعة.',
        textEn: 'Cover and leave in a warm place for more than an hour to ferment.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يغلي المرق بقدر كمية العجينة فقط حتى لا يصير الكشك سائلا.',
        textEn: 'Boil the broth in an amount just proportional to the dough, so the kishk doesn\'t turn out runny.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف خليط الزبادي بالدقيق إلى المرق مع التقليب المستمر باستخدام المضرب مع درجة حرارة متوسطة.',
        textEn: 'Whisk the fermented yogurt-flour mixture into the broth over medium heat, stirring constantly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يترك الخليط يغلي لمدة 5 دقائق مع التقليب حتى يغلظ القوام.',
        textEn: 'Simmer for 5 minutes, stirring, until it thickens.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تحمر البصلة في السمن أو الزيت ثم تصب نصف الكمية فقط على الكشك ويقلب جيدا ثم يرفع من الحرارة.',
        textEn: 'Brown the onion in ghee or oil, stir half of it into the kishk, and remove from the heat.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يغرف في الأطباق ويجمَل ببقية البصل المحمر.',
        textEn: 'Ladle into bowls and garnish with the remaining fried onion.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكشك',
        ingredients: ['كوب كبير لبن زبادي', 'مقدار من الدقيق يكفي لتكوين عجينة لزجة', 'من 1 : ½1 كوب مرق دجاج أو لحم', 'بصلة متوسطة مفرية', '2 ملعقة كبيرة سمن أو زيت'],
        instructions: ['يذاب قليل من الملح في الزبادي ويقلب جيدا ثم يضاف الدقيق تدريحيا مع التقليب المستمر حتى تتكون عجينة متوسطة الليونة.', 'تغطى وتترك في مكان دافئ حوالي أكثر من ساعة.', 'يغلي المرق بقدر كمية العجينة فقط حتى لا يصير الكشك سائلا.', 'يضاف خليط الزبادي بالدقيق إلى المرق مع التقليب المستمر باستخدام المضرب مع درجة حرارة متوسطة.', 'يترك الخليط يغلي لمدة 5 دقائق مع التقليب حتى يغلظ القوام.', 'تحمر البصلة في السمن أو الزيت ثم تصب ½ الكمية فقط على الكشك ويقلب جيدا ثم يرفع من الحرارة.', 'يغرف في الأطباق ويجمَل ببقية البصل المحمر.']
      }
    }
  },
  {
    id: 'quick-01',
    title: 'ساندويتش شاورمة الدجاج بالقشدة أو الكريمة اللبناني',
    titleEn: 'Chicken Shawarma Sandwich with Lebanese Clotted Cream',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'وجبات سريعة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 سندوتشات',
    masterIngredients: [
      {
        id: 'qk1-1',
        name: 'صدور دجاج',
        nameEn: 'Chicken breasts',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk1-2',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1 ملعقة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk1-3',
        name: 'سمن أو زيت',
        nameEn: 'Ghee or oil',
        standardAmount: '1 ملعقة كبيرة أو 2 ملعقة زيت',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة أو 2 ملعقة زيت'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk1-4',
        name: 'قشدة أو كريمة لبنانية',
        nameEn: 'Clotted cream, or Lebanese cream',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk1-5',
        name: 'خبز كايزر',
        nameEn: 'Kaiser rolls',
        standardAmount: '4 أرغفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 أرغفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk1-6',
        name: 'زعتر وفلفل أحمر وكاري',
        nameEn: 'Thyme, red pepper and curry powder',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع الدجاج النيء رفيعا وصغيرا ويضاف له الثوم المفري والسمن أو الزيت، ويتبل بالزعتر والفلفل الأحمر وملعقة صغيرة كاري.',
        textEn: 'Cut the raw chicken into thin, small strips, add the crushed garlic and ghee or oil, and season with thyme, red pepper and a teaspoon of curry powder.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يرفع في إناء على درجة حرارة هادئة حتى تتشرب الماء مع إضافة قليل من الماء حتى النضج.',
        textEn: 'Cook in a pot over low heat until the liquid is absorbed, adding a little water as needed until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقلب القشدة أو الكريمة اللبنانية بملعقة خشب ثم تسكب على الدجاج ويقلبوا جيدا، ثم ترفع على درجة حرارة هادئة لمدة 5 دقائق تقريبا مع التقليب.',
        textEn: 'Stir the clotted cream with a wooden spoon, pour over the chicken, mix well, and simmer over low heat for about 5 minutes, stirring.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تتبل بالزعتر والفلفل والكاري.',
        textEn: 'Season with thyme, pepper and curry powder.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يحشى في خبز التقديم.',
        textEn: 'Stuff into the serving bread.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ساندويتش شاورمة الدجاج بالقشدة أو الكريمة اللبناني',
        ingredients: ['1 كيلو صدور دجاج', 'ملعقة صغيرة ثوم مفري', 'ملعقة كبيرة سمن أو 2 م زيت', 'قشدة أو كريمة لباني', 'كايزر', 'زعتر', 'فلفل أحمر', 'كاري'],
        instructions: ['يقطع الدجاج النيء رفيعا وصغيرا ويضاف له الثوم المفري والسمن أو الزيت ويتبل بالزعتر والفلفل الأحمر وملعقة صغيرة كاري.', 'يرفع في إناء على درجة حرارة هادئة حتى تتشرب الماء مع إضافة قليل من الماء حتى النضج.', 'تقلب القشدة أو الكريمة اللباني بملعقة خشب ثم تسكب على الدجاج ويقلبوا جيداثم ترفع على درجة حرارة هادئة لمدة 5 دقائق تقريبا مع التقليب.', 'تتبل بالزعتر والفلفل والكاري.', 'يحشى في خبز التقديم.']
      }
    }
  },
  {
    id: 'quick-02',
    title: 'ساندويتش شاورمة الدجاج باللبنة',
    titleEn: 'Chicken Shawarma Sandwich with Labneh',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'وجبات سريعة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '2 سندوتشات',
    masterIngredients: [
      {
        id: 'qk2-1',
        name: 'صدور دجاج',
        nameEn: 'Chicken breasts',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk2-2',
        name: 'بصلة صغيرة',
        nameEn: 'Small onion',
        standardAmount: '1 بصلة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk2-3',
        name: 'فلفلة خضراء',
        nameEn: 'Green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk2-4',
        name: 'طماطم',
        nameEn: 'Tomato',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk2-5',
        name: 'لبنة',
        nameEn: 'Labneh',
        standardAmount: '1 علبة صغيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 علبة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk2-6',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تحمر في الزيت البصلة المقطعة شرائح، ثم يضاف إليها شرائح الطماطم ثم شرائح الفلفل، ويضافون إلى قطع صدور الدجاج.',
        textEn: 'Brown the sliced onion in oil, add the tomato slices then the pepper slices, and add to the chicken breast pieces.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'ترفع في إناء على درجة حرارة هادئة مع إضافة الماء حتى النضج.',
        textEn: 'Cook in a pot over low heat, adding water, until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تسكب اللبنة على الدجاج مع التقليب على درجة حرارة هادئة 5 دقائق.',
        textEn: 'Add the labneh to the chicken, stirring over low heat for 5 minutes.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يحشى في خبز التقديم.',
        textEn: 'Stuff into the serving bread.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ساندويتش شاورمة الدجاج باللبنة',
        ingredients: ['¼ كيلو صدور دجاج', 'بصلة صغيرة', 'ثمرة فلفلة خضراء', 'ثمرة طماطم', 'علبة لبنة صغيرة'],
        instructions: ['تحمر في الزيت البصلة المقطعة شرائح ثم يضاف إليها شرائح الطماطم ثم شرائح الفلفل ويضافوا إلى قطع صدور الدجاج.', 'ترفع في إناء على درجة حرارة هادئة مع اضافة الماء حتى النضج.', 'تسكب اللبنة على الدجاج مع التقليب على درجة حرارة هادئة 5 دقائق.', 'يحشى في خبز التقديم.']
      }
    }
  },
  {
    id: 'quick-03',
    title: 'ساندويتش هامبورجر الدجاج',
    titleEn: 'Chicken Burger Sandwich',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'وجبات سريعة',
    cookingMethod: 'تسبيك',
    prepTime: '2 ساعة (تبريد)',
    cookTime: '10 دقائق',
    servings: '3-4 سندوتشات',
    masterIngredients: [
      {
        id: 'qk3-1',
        name: 'دجاجة مسلوقة مفرومة',
        nameEn: 'Minced boiled chicken',
        standardAmount: '1/2 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk3-2',
        name: 'بصلة مفرية',
        nameEn: 'Grated onion',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk3-3',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk3-4',
        name: 'جبن شيدر',
        nameEn: 'Cheddar cheese',
        standardAmount: 'شرائح',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'شرائح'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk3-5',
        name: 'بيضة',
        nameEn: 'Egg',
        standardAmount: '1 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk3-6',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk3-7',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk3-8',
        name: 'خبز كايزر',
        nameEn: 'Kaiser rolls',
        standardAmount: '3-4 أرغفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3-4 أرغفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk3-9',
        name: 'فلفل أخضر وكاتشب',
        nameEn: 'Green pepper and ketchup',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يخلط الدجاج المفروم بالبصلة والثوم والبيضة والملح والفلفل والبهار والزيت خلطا جيدا وتترك لمدة ساعتين في الثلاجة.',
        textEn: 'Mix the minced chicken with the onion, garlic, egg, salt, pepper, mixed spice and oil, and refrigerate for 2 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع العجينة إلى وحدات مستديرة.',
        textEn: 'Shape into round patties.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع زيتا في طاسة تيفال ونضع كل وحدة فيها على درجة حرارة هادئة مع تقليبها على الوجه الآخر حتى النضج.',
        textEn: 'Heat oil in a non-stick pan and cook each patty over low heat, flipping, until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر الكايزر لحشوه بالهامبورجر مع وضع الكاتشب وشرائح الفلفل الأخضر والجبن الشيدر.',
        textEn: 'Stuff into the Kaiser roll with ketchup, green pepper slices and cheddar cheese.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ساندويتش هامبورجر الدجاج',
        ingredients: ['½ دجاجة مسلوقة مفرومة', 'بصلة مفرية', 'فص ثوم مفري', 'جبن شيدر', 'بيضة', '2 م زيت', 'ملح وفلفل وبهار', 'كايزر', 'فلفل أخضر', 'كاتشاب'],
        instructions: ['يخلط الدجاج المفروم بالبصلة والثوم والبيضة والملح والفلفل والبهار والزيت خلطا جيدا وتترك لمدة 2 ساعة في الثلاجة.', 'تقطع العجينة إلى وحدات مستديرة.', 'نضع زيت في طاسة تيفال ونضع كل وحدة فيها على درجة حرارة هادئة مع تقليبها على الوجه الآخر حتى النضج.', 'نحضر الكايزر لحشوه بالهامبورجر مع وضع الكاتشاب وشرائح الفلفل الأخضر والجبن الشيدر.']
      }
    }
  },
  {
    id: 'quick-04',
    title: 'ساندويتش الدجاج المسلوق أو اللحم المسلوق',
    titleEn: 'Baked Kaiser Roll Stuffed with Boiled Chicken or Beef',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'وجبات سريعة',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '10 دقائق',
    servings: '2-3 سندوتشات',
    masterIngredients: [
      {
        id: 'qk4-1',
        name: 'خبز كايزر',
        nameEn: 'Kaiser rolls',
        standardAmount: '2-3 أرغفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2-3 أرغفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk4-2',
        name: 'دجاجة مسلوقة',
        nameEn: 'Boiled chicken',
        standardAmount: '1/2 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk4-3',
        name: 'جبن مبشور',
        nameEn: 'Grated cheese',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk4-4',
        name: 'بيضة',
        nameEn: 'Egg',
        standardAmount: '1 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk4-5',
        name: 'ملح وفلفل وبهار وزعتر ونعناع جاف',
        nameEn: 'Salt, pepper, mixed spice, thyme and dried mint',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk4-6',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk4-7',
        name: 'زيتون',
        nameEn: 'Olives',
        standardAmount: 'للإغلاق',
        category: 'other',
        sourceVariations: {
          doc1: 'للإغلاق'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نحضر الكايزر ونقوره من أعلى ونفرغه من اللبابة.',
        textEn: 'Cut a hole in the top of each Kaiser roll and hollow out the soft crumb inside.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع الدجاجة المسلوقة أو اللحم (وممكن البسطرمة) تقطيعا صغيرا.',
        textEn: 'Cut the boiled chicken or beef (or pastirma) into small pieces.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف إليها الجبن المبشور والبيضة وتتبل بالتوابل كلها ويخلطوا جيدا.',
        textEn: 'Add the grated cheese and egg, season with all the spices, and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر الكايزر ويحشى بالملعقة من الفتحة العلوية.',
        textEn: 'Spoon the mixture into the rolls through the hollowed opening.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرص في صينية مدهونة زيت وتدخل الفرن لمدة 10 دقائق.',
        textEn: 'Arrange in an oiled tray and bake for 10 minutes.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد خروجه تقفل الفتحة بالزيتون.',
        textEn: 'After baking, plug the opening with an olive.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ساندويتش الدجاج المسلوق أو اللحم المسلوق',
        ingredients: ['كايزر', '½ دجاجة مسلوقة', 'ملعقة كبيرة جبن مبشور', 'بيضة', 'ملح وفلفل', 'بهار', 'زعتر', 'نعناع جاف', 'زيت', 'زيتون'],
        instructions: ['نحضر كايزر ونقوره من أعلى ونفرغه من اللبابة.', 'تقطع الدجاجة المسلوقة أو اللحم وممكن البسطرمة تقطعيا صغيرا.', 'يضاف إليها الجبن المبشور والبيضة وتتبل بالتوابل كلها ويخلطوا جيدا.', 'نحضر الكايزر ويحشى بالملعقة من الفتحة العلوية.', 'يرص في صينية مدهونة زيت وتدخل الفرن لمدة 10 دقائق.', 'بعد خروجه تقفل الفتحة بالزيتون.']
      }
    }
  },
  {
    id: 'quick-05',
    title: 'ساندويتش حواوشي الدجاج',
    titleEn: 'Hawawshi-Style Baked Chicken Sandwich',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'وجبات سريعة',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 سندوتشات',
    masterIngredients: [
      {
        id: 'qk5-1',
        name: 'بقايا دجاج مسلوق',
        nameEn: 'Leftover boiled chicken',
        standardAmount: 'حسب الحاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk5-2',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk5-3',
        name: 'فلفلة خضراء',
        nameEn: 'Green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk5-4',
        name: 'مستردة',
        nameEn: 'Mustard',
        standardAmount: '1 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk5-5',
        name: 'خل وعصير ليمون',
        nameEn: 'Vinegar and lemon juice',
        standardAmount: '1 ملعقة كبيرة من كل',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk5-6',
        name: 'ملح وفلفل وبهار',
        nameEn: 'Salt, pepper and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk5-7',
        name: 'خبز كايزر أو خبز بلدي',
        nameEn: 'Kaiser rolls, or baladi bread',
        standardAmount: '4 أرغفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 أرغفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk5-8',
        name: 'زبد',
        nameEn: 'Butter',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع الدجاج المسلوق أو المحمر أو المشوي قطعا صغيرة وتتبل بالملح والفلفل والبهار.',
        textEn: 'Cut the boiled, browned or grilled chicken into small pieces and season with salt, pepper and mixed spice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخلط الزبادي مع الخل وعصير الليمون والفلفلة الخضراء المقطعة صغيرا، وممكن إضافة ملعقة صغيرة مستردة، ويخلطوا جيدا بالدجاج المتبل.',
        textEn: 'Mix the yogurt with the vinegar, lemon juice and finely chopped green pepper (a teaspoon of mustard can be added), and combine well with the seasoned chicken.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر الكايزر أو الخبز البلدي المقطع إلى 4 أجزاء مع فصل الوجه عن الظهر ويدهن خفيفا بالزبد.',
        textEn: 'Split the Kaiser rolls or the baladi bread (cut into quarters) into top and bottom halves, and brush lightly with butter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضع ملعقة كبيرة من الخليط على الخبز ويطبق مثل الكرواسون، أو نضع الخلطة في الكايزر.',
        textEn: 'Spoon a tablespoon of the filling onto the bread and fold closed like a croissant, or stuff it into the Kaiser roll.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يلف الخبز أو الكايزر في فويل، وهكذا حتى ينتهي الخليط.',
        textEn: 'Wrap each in foil; repeat until all the filling is used.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'توضع في صينية وتدخل الفرن لمدة ربع ساعة.',
        textEn: 'Arrange in a tray and bake for 15 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يقدم في أطباق مفروشة بورق الخس.',
        textEn: 'Serve on plates lined with lettuce leaves.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ساندويتش حواوشي الدجاج',
        ingredients: ['بقايا دجاج مسلوق', 'كوب زبادي', 'ثمرة فلفلة خضراء', 'مستردة', 'ملعقة كبيرة خل وعصير ليمون', 'ملح', 'فلفل', 'بهار', 'كايزر', 'زبد', 'خبز بلدي'],
        instructions: ['يقطع الدجاج المسلوق أو المحمر أو المشوي قطعا صغيرة وتتبل بالملح والفلفل والبهار.', 'يخلط الزبادي مع الخل وعصير الليمون والفلفلة الخضراء المقطعة صغيرا وممكن إضافة ملعقة صغيرة مستردة ويخلطوا جيدا بالدجاج المتبل.', 'نحضر الكايزر أو الخبز البلدي المقطع إلى 4 أجزاء مع فصل الوجه عن الظهر ويدهن خفيفا بالزبد.', 'نضع ملعقة كبيرة من الخليط على الخبز ويطبق مثل الكراوسون أو نضع الخلطة في الكايزر.', 'يلف الخبز أو الكايزر في فويل وهكذا حتى ينتهي الخليط.', 'توضع في صينية وتدخل الفرن لمدة ¼ ساعة.', 'يقدم في أطباق مفروشة بورق الخس.']
      }
    }
  },
  {
    id: 'quick-06',
    title: 'ساندويتش حواوشي اللحم المفروم',
    titleEn: 'Hawawshi-Style Grilled Minced Meat Sandwich',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'وجبات سريعة',
    cookingMethod: 'شي',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 سندوتشات',
    masterIngredients: [
      {
        id: 'qk6-1',
        name: 'عصاج (انظري باب اللحوم)',
        nameEn: '"Assag" minced meat filling (see meats section)',
        standardAmount: 'حسب الحاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-2',
        name: 'زبادي كبير',
        nameEn: 'Yogurt',
        standardAmount: '1 كوب كبير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب كبير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-3',
        name: 'فلفلة خضراء',
        nameEn: 'Green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-4',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1 ملعقة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-5',
        name: 'ليمون',
        nameEn: 'Lemon juice',
        standardAmount: 'كثير',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'كثير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-6',
        name: 'مستردة',
        nameEn: 'Mustard',
        standardAmount: '1 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-7',
        name: 'بقدونس مفري',
        nameEn: 'Chopped parsley',
        standardAmount: '1 ملعقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-8',
        name: 'طماطم',
        nameEn: 'Tomato',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-9',
        name: 'خبز كايزر',
        nameEn: 'Kaiser rolls',
        standardAmount: '4 أرغفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 أرغفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk6-10',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نخلط الزبادي بالعصاج ويقلب جيدا، ثم نضيف الفلفل الأخضر المقطع صغيرا والثوم والبقدونس المفري والمستردة للخليط.',
        textEn: 'Mix the yogurt with the assag, then add the finely chopped green pepper, garlic, parsley and mustard.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع الخليط في صينية غير مدهونة ونضع على الوجه شرائح الطماطم مع عصير ليمون كثير، ونفتح الشواية حتى يتشرب اللحم تماما.',
        textEn: 'Spread the mixture in an ungreased tray, top with tomato slices and plenty of lemon juice, and grill under the broiler until the meat is fully cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر الكايزر لحشوه بالخلطة.',
        textEn: 'Stuff into the Kaiser rolls.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 10,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ساندويتش حواوشي اللحم المفروم',
        ingredients: ['عصاج (انظري باب اللحوم)', 'كوب زبادي كبير', 'ثمرة فلفلة خضراء', 'ملعقة صغيرة ثوم مفري', 'ليمون', 'ملعقة صغيرة مستردة', 'م بقدونس', 'ثمرة طماطم', 'كايزر', 'زيت'],
        instructions: ['نخلط الزبادي بالعصاج ويقلب جيدا ثم نضيف الفلفل الأخضر المقطع صغيرة والثوم والبقدونس المفري والمستردة للخليط.', 'نضع الخليط في صينية غير مدهونة ونضع على الوجه شرائح الطماطم مع عصير ليمون كثير ونفتح الشواية حتى يتشرب اللحم تماما.', 'نحضر الكايزر لحشوه بالخلطة.']
      }
    }
  },
  {
    id: 'quick-07',
    title: 'ساندويتش الدجاج البانية بالمايونيز',
    titleEn: 'Breaded Chicken Cutlet Sandwich with Mayonnaise',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'وجبات سريعة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '5 دقائق',
    servings: '2 سندوتشات',
    masterIngredients: [
      {
        id: 'qk7-1',
        name: 'بانية دجاج متبل بالبيض والبقسماط (انظري باب اللحوم)',
        nameEn: 'Breaded chicken cutlets (see meats section)',
        standardAmount: 'حسب الحاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk7-2',
        name: 'خبز كايزر',
        nameEn: 'Kaiser rolls',
        standardAmount: '2 رغيف',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 رغيف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk7-3',
        name: 'مايونيز وكاتشب',
        nameEn: 'Mayonnaise and ketchup',
        standardAmount: 'حسب الرغبة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk7-4',
        name: 'لانشون حلال (بقري أو دجاج)',
        nameEn: 'Halal beef or chicken cold cuts',
        standardAmount: 'قطع',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'قطع'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk7-5',
        name: 'فلفل أخضر',
        nameEn: 'Green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk7-6',
        name: 'جبن مربعات',
        nameEn: 'Square cheese slices',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk7-7',
        name: 'خس',
        nameEn: 'Lettuce',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'بعد تحمير البانية نحضر الكايزر وندهنه بالمايونيز.',
        textEn: 'After frying the breaded cutlets, spread the Kaiser roll with mayonnaise.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع قطع البانية داخل الكايزر وعليها الكيتشاب ثم ورق الخس ثم شريحة لانشون ثم حلقات الفلفل الأخضر ثم شرائح الجبن المربعات.',
        textEn: 'Place the cutlets in the roll, topped with ketchup, lettuce, a slice of cold cuts, green pepper rings, and cheese slices.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ساندويتش الدجاج البانية بالمايونيز',
        ingredients: ['قطع من البانية المتبل بالبيض والبقسماط (انظري باب اللحوم)', 'كايزر', 'مايونيز', 'كيتشاب', 'قطع لانشون', 'ثمرة فلفل أخضر', 'جبن مربعات', 'خس'],
        instructions: ['بعد تحمير البانية نحضر الكايزر وندهنه بالمايونيز.', 'توضع قطع البانية داخل الكايزر وعليها الكيتشاب ثم ورق الخس ثم شريحة لانشون ثم حلقات الفلفل الأخضر ثم شرائح الجبن المربعات.']
      }
    }
  },
  {
    id: 'quick-08',
    title: 'ساندويتش التونة بالمايونيز أو الطحينة',
    titleEn: 'Tuna Sandwich with Mayonnaise or Tahini',
    chapter: 'الباب الثالث: النشويات – المحشوات – المعجنات',
    chapterNumber: 3,
    category: 'وجبات سريعة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '-',
    servings: '2 سندوتشات',
    masterIngredients: [
      {
        id: 'qk8-1',
        name: 'تونة',
        nameEn: 'Canned tuna',
        standardAmount: '1 علبة',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 علبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk8-2',
        name: 'مايونيز أو طحينة',
        nameEn: 'Mayonnaise, or tahini',
        standardAmount: '2 ملعقة كبيرة',
        category: 'other',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk8-3',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk8-4',
        name: 'خبز كايزر',
        nameEn: 'Kaiser rolls',
        standardAmount: '2 رغيف',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 رغيف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk8-5',
        name: 'خيار مخلل',
        nameEn: 'Pickled cucumber',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk8-6',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk8-7',
        name: 'بصل أخضر',
        nameEn: 'Green onion',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk8-8',
        name: 'طماطم',
        nameEn: 'Tomato',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'qk8-9',
        name: 'فلفل رومي',
        nameEn: 'Bell pepper',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تصفى التونة من الزيت ثم تخلط بالمايونيز أو الطحينة الممزوجة بالماء والخل وعصير الليمون.',
        textEn: 'Drain the tuna and mix with mayonnaise, or with tahini thinned with water, vinegar and lemon juice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف إليها قطع الخيار المخلل الصغيرة والثوم المفري مع بصلة خضراء مقطعة صغيرا وقطع الطماطم الصغيرة ويقلبوا جيدا.',
        textEn: 'Add small pickled cucumber pieces, crushed garlic, finely chopped green onion and small tomato pieces, and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'توضع الحشوة داخل الكايزر وعلى وجهها حلقات الفلفل الرومي.',
        textEn: 'Stuff into the Kaiser roll and top with bell pepper rings.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ساندويتش التونة بالمايونيز أو الطحينة',
        ingredients: ['علبة تونة', 'مايونيز أو طحينة', 'عصير ليمون', 'كايزر', 'خيار مخلل', 'فص ثوم مفري', 'بصل أخضر', 'ثمرة طماطم', 'فلفل رومي'],
        instructions: ['تصفى التونة من الزيت ثم تخلط بالمايونيز أو الطحينة الممزوجة بالماء والخل وعصير الليمون.', 'يضاف إليها قطع الخيار المخلل الصغيرة والثوم المفري مع بصلة خضراء مقطعة صغيرا وقطع الطماطم الصغيرة ويقلبوا جيدا.', 'توضع الحشوة داخل الكايزر وعلى وجهها حلقات الفلفل الرومي.']
      }
    }
  },
];
