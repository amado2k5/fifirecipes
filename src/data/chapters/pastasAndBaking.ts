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
  }
];
