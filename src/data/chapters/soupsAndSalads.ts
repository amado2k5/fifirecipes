import { Recipe } from '../../types';

export const soupsAndSaladsRecipes: Recipe[] = [
  {
    id: 'soup-01',
    title: 'شوربة الخضار (الصحية / باللبن والشبت)',
    titleEn: 'Vegetable Soup (Clear Broth or Creamy Milk & Dill)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'شوربات وحساء',
    cookingMethod: 'سلق',
    prepTime: '15 دقيقة',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'ss1-1',
        name: 'كوسة وجزر وبطاطس مكعبات',
        standardAmount: '1/2 ك كوسة + 2 جزرة + 2 بطاطس',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 جزرة – 2 بطاطس – 1/2 كيلو كوسة',
          doc2: '2 جزرة – 2 بطاطس – 1/2 كيلو كوسة',
          doc3: '2 جزرة – 2 بطاطس – نصف ك كوسة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss1-2',
        name: 'بصلة صغيرة مفرية',
        standardAmount: '1-2 بصلة صغيرة مفرية',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة صغيرة مفرية',
          doc2: '2 بصلة صغيرة مفرية (في الشوربة باللبن)',
          doc3: 'بصلة صغيرة مفرية'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss1-3',
        name: 'مرق لحم أو دجاج صافي',
        standardAmount: '3 أكواب مرق',
        category: 'liquid',
        sourceVariations: {
          doc1: '3 أكواب مرق',
          doc2: '3 أكواب مرق',
          doc3: '3 أكواب مرق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss1-4',
        name: 'شعرية محمرة',
        standardAmount: 'ملعقة كبيرة شعرية',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'قليل من الشعرية',
          doc2: 'قليل من الشعرية',
          doc3: 'قليل من الشعرية'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss1-5',
        name: 'سمن أو زيت',
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
        id: 'ss1-6',
        name: 'لبن ودقيق وبقدونس وشبت (لشوربة الخضار باللبن)',
        standardAmount: '1 كوب لبن + 1 ملعقة دقيق + شبت وبقدونس مفري',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'كوب لبن – ملعقة كبيرة دقيق – قليل من البقدونس والشبت المفري',
          doc2: 'كوب لبن – ملعقة دقيق – بقدونس وشبت',
          doc3: 'كوب لبن – م ك دقيق – قليل من البقدونس والشبت المفري'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تجهيز الخضار: تقطع الكوسة والجزر والبطاطس مكعبات صغيرة متساوية.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'التشويح: تشوح البصلة المفرية في السمن أو الزيت حتى يصفر لونها، ثم تشوح معها مكعبات الخضروات لمدة 5 دقائق لإغلاق مسامها وحفظ نكهتها.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'السلق: يضاف المرق الساخن والملح والفلفل وتترك على درجة حرارة هادئة حتى تنضج الخضروات.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'طريقة الشعرية: تحمر ملعقة شعرية في السمن جانباً ثم تسكب على الخضار الناضج وتترك على نار هادئة حوالي 5 دقائق حتى تنضج الشعرية.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'طريقة شوربة الخضار باللبن الكريمية (بديل): تجهز كالطريقة السابقة بدون إضافة الشعرية، وبعد أن تنضج تترك لتبرد ثم تضرب في الخلاط وتصفى. تمزج ملعقة الدقيق بكوب اللبن البارد جيداً ثم تضاف إلى الشوربة المصفاة مع التقليب والشبت والبقدونس المفري، وترفع على نار هادئة حتى الغليان لمدة 5 دقائق.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'شوربة الخضار الكريمية باللبن',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'variation'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 90,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'دمج وصفتي شوربة الخضار الصافية بالشعرية وشوربة الخضار البيضاء باللبن والشبت المفروم في سجل واحد.'
    },
    rawDocVersions: {
      doc1: {
        title: 'شوربة الخضار / شوربة الخضار باللبن',
        pageNumber: 62,
        ingredients: ['بصلة صغيرة مفرية', '2 جزرة', '2 بطاطس', '1/2 كيلو كوسة', '2 م سمن أو زيت', '3 أكواب مرق', 'شعرية', 'كوب لبن ودقيق وشبت'],
        instructions: ['تقطع الخضر مكعبات', 'تشوح البصلة ثم الخضر 5 دقائق', 'يضاف المرق والملح والفلفل', 'تحمر الشعرية وتسكب على الخضار', 'طريقة اللبن: تضرب الشوربة في الخلاط ويضاف اللبن مع الدقيق والشبت']
      },
      doc3: {
        title: '1- شوربة الخضار / 2- شوربة الخضار باللبن',
        pageNumber: 32,
        ingredients: ['بصلة صغيرة مفرية', '2 جزرة', '2 بطاطس', 'نصف ك كوسة', '2 م سمن أو زيت', '3 أكواب مرق', 'قليل من الشعرية'],
        instructions: ['تجهز الخضر مكعبات صغيرة', 'تشوح البصلة مع الخضروات 5 دقائق', 'يضاف المرق والملح والفلفل', 'تسلق حتى النضج وتضاف الشعرية أو تضرب باللبن والدقيق']
      }
    }
  },
  {
    id: 'soup-02',
    title: 'شوربة العدس الأصفر والخبز المحمص',
    titleEn: 'Yellow Lentil Soup with Croutons',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'شوربات وحساء',
    cookingMethod: 'سلق',
    prepTime: '15 دقيقة',
    cookTime: '40 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'ss2-1',
        name: 'عدس أصفر منقى ومغسول',
        standardAmount: '1 كوب عدس أصفر',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب عدس أصفر',
          doc2: '1 كوب عدس أصفر',
          doc3: '1 كوب عدس أصفر'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss2-2',
        name: 'خضروات عطرية (طماطم، جزر، بطاطس، كوسة، بصل، ثوم)',
        standardAmount: '1 طماطم + 1 جزرة + 1 بطاطس + 2 كوسة + 1 بصلة كبيرة صحيحة + 2 فص ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'ثمرة طماطم – جزرة – حبة بطاطس – 2 حبة كوسة – بصلة كبيرة صحيحة – 2 فص ثوم',
          doc2: 'ثمرة طماطم – جزرة – حبة بطاطس – 2 حبة كوسة – بصلة كبيرة – 2 فص ثوم',
          doc3: 'ثمرة طماطم – جزرة – حبة بطاطس – 2 كوسة – بصلة ك صحيحة – 2 فص ثوم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss2-3',
        name: 'ماء نقي للسلق',
        standardAmount: '1 لتر ماء',
        category: 'liquid',
        sourceVariations: {
          doc1: 'لتر ماء',
          doc2: 'لتر ماء',
          doc3: 'لتر ماء'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss2-4',
        name: 'شعرية محمرة',
        standardAmount: '1 ملعقة كبيرة شعرية',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'م شعرية',
          doc2: 'م شعرية',
          doc3: 'م شعرية'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss2-5',
        name: 'سمن أو زيت',
        standardAmount: '2 ملعقة سمن أو زيت',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'سمن أو زيت',
          doc2: 'سمن أو زيت',
          doc3: 'سمن أو زيت'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss2-6',
        name: 'خبز بلدي محمص مقرمش',
        standardAmount: '2 رغيف بلدي مقطع مكعبات ومحمر',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'خبز بلدي قطع صغيرة محمر في الزيت',
          doc2: 'خبز بلدي محمر',
          doc3: '2 خبز بلدي'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss2-7',
        name: 'توابل (كمون، ملح، فلفل أسود)',
        standardAmount: 'ملح وفلفل وكمون ناعم',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح – فلفل – كمون',
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
        text: 'يغسل العدس جيداً وتجهز الخضر بتقطيعها صغيراً (الطماطم، الجزر، البطاطس، الكوسة، البصل، الثوم).',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يشوح العدس مع الخضر في السمن أو الزيت لمدة 5 دقائق مع التقليب لاكتساب نكهة غنية.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف لتر الماء على الخليط ويترك لمدة ساعة تقريباً على درجة حرارة هادئة مع التقليب آن فآن حتى النضج التام لكافة المكونات.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'الخلط والتنعيم: بعد أن يبرد الخليط يضرب في الخلاط ثم يصفى ويعاد إلى الإناء على نار هادئة ويتبل بالملح والفلفل والكمون.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تقلية الشعرية: تحمر ملعقة شعرية في سمن أو زيت ثم تصب على العدس وتترك على نار هادئة حتى تنضج الشعرية مع مراعاة السمك المطلوب وإمكانية تزويد ماء دافئ إن احتاج.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'التقديم: يقطع الخبز البلدي قطعاً صغيرة ويحمر في الزيت ويرفع على مناديل ورقية، ويقدم مقرمشاً بجانب شوربة العدس الساخنة مع الليمون والبصل الأخضر.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 4,
      mergedIngredientsCount: 7,
      totalUniqueSteps: 6,
      totalMasterIngredients: 7,
      overlapPercentage: 94,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'شوربة العدس المصرية الأصلية مطابقة في الوثائق الثلاث، تم استخلاص خضروات السلق مع تقنية طش الشعرية والخبز المحمص البلدي.'
    },
    rawDocVersions: {
      doc1: {
        title: 'شوربة العدس',
        pageNumber: 63,
        ingredients: ['1 كوب عدس أصفر', 'ملح وفلفل', 'سمن أو زيت', '2 فص ثوم', 'بصلة كبيرة صحيحة', 'ثمرة طماطم', 'جزرة', 'حبة بطاطس', '2 حبة كوسة', 'م شعرية', 'لتر ماء', 'خبز بلدي'],
        instructions: ['يغسل العدس وتقطع الخضر', 'يشوح العدس والخضر 5 دقائق', 'يضاف الماء ويترك ساعة للنضج', 'يضرب في الخلاط ويصفى', 'تحمر الشعرية وتصب على العدس', 'يقدم مع الخبز المحمر']
      },
      doc3: {
        title: '3- شوربة العدس',
        pageNumber: 33,
        ingredients: ['1كوب عدس أصفر', 'ملح وفلفل', 'سمن أو زيت', '2 فص ثوم', 'بصلة ك صحيحة', 'ثمرة طماطم', 'جزرة', 'حبة بطاطس', '2 كوسة', 'م شعرية', 'لتر ماء', '2 خبز بلدي'],
        instructions: ['يغسل العدس وتجهز الخضر بتقطيعها صغيرا', 'يشوح العدس والخضر في السمن', 'يضاف الماء ساعة حتى النضج', 'يضرب في الخلاط ويصفى', 'تحمر ملعقة شعرية وتسكب على العدس', 'يقدم مع الخبز المحمر']
      }
    }
  },
  {
    id: 'salad-01',
    title: 'سلطة الطحينة وسلطة الطحينة بالبصل',
    titleEn: 'Tahini Salad (Classic Garlic or Pickled Onion Variations)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '10 دقائق',
    cookTime: 'بدون طهو',
    servings: 'طبق مقبلات',
    masterIngredients: [
      {
        id: 'ss3-1',
        name: 'طحينة سمسم خام',
        standardAmount: '4 ملاعق كبيرة طحينة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة طحينة',
          doc2: '4 ملعقة كبيرة طحينة',
          doc3: '4 م ك طحينة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss3-2',
        name: 'خل أبيض نقي',
        standardAmount: '3 ملاعق كبيرة خل',
        category: 'liquid',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة خل',
          doc2: '3 ملعقة كبيرة خل',
          doc3: '3 م ك خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss3-3',
        name: 'ثوم مفري ناعم',
        standardAmount: '3 فصوص ثوم مفري',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 فصوص ثوم مفري',
          doc2: '3 فصوص ثوم مفري',
          doc3: '3 فصوص ثوم مفري'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss3-4',
        name: 'بصلة صغيرة مفرية (لسلطة الطحينة بالبصل)',
        standardAmount: '1 بصلة صغيرة مبشورة ومنقوعة في الخل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة صغيرة (في سلطة الطحينة بالبصل)',
          doc2: 'بصلة صغيرة',
          doc3: 'بصلة صغيرة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss3-5',
        name: 'ماء دافئ للحل والتخفيف',
        standardAmount: 'قليل من الماء حتى الحصول على القوام المطلوب',
        category: 'liquid',
        sourceVariations: {
          doc1: 'ماء',
          doc2: 'ماء',
          doc3: 'ماء'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss3-6',
        name: 'زيت وكمون وملح وبقدونس للتزيين',
        standardAmount: '1 ملعقة كبيرة زيت + كمون وملح + بقدونس مفروم',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح – كمون – ملعقة كبيرة زيت – بقدونس مقطع صغيرا',
          doc2: 'ملح – كمون – زيت – بقدونس',
          doc3: 'ملح – كمون – م ك زيت – بقدونس مقطع صغيرا'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'حل الطحينة: تخلط الطحينة مع الخل تدريجياً وتخفق جيداً حتى تتكتل ثم تفتح، مع إضافة قليل من الماء الفاتر مع الخفق السريع حتى نحصل على القوام الكريمي المطلوب ولون أبيض فاتح.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'التتبيل بالثوم: يتبل الخليط بالملح والكمون والثوم المفروم وملعقة الزيت ويقلب جيداً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'طريقة الطحينة بالبصل (النسخة الإضافية): يتم الاستغناء عن الثوم واستبداله ببصلة؛ تدعك بصلة صغيرة بالملح والفلفل بعد بشرها وتنقع في 3 ملاعق كبيرة خل لمدة دقيقة ثم تعصر جيداً من مائها ويضاف البصل المعصور إلى سلطة الطحينة المخفوقة.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'سلطة الطحينة بالبصل المنقوع بالخل',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'variation'
      },
      {
        stepNumber: 4,
        text: 'التقديم: تقدم وتجمل بالبقدونس المقطع صغيراً ورشة زيت زيتون أو كمون وشطة على السطح.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 2,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 92,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'دمج سلطة الطحينة بالثوم وسلطة الطحينة بالبصل المتبل بالخل في سجل موحد مع تفصيل خطوات خفق الطحينة حتى تفتح.'
    },
    rawDocVersions: {
      doc1: {
        title: 'سلطة الطحينة / سلطة الطحينة بالبصل',
        pageNumber: 69,
        ingredients: ['4 ملعقة كبيرة طحينة', '3 ملعقة كبيرة خل', 'ملح وكمون', '3 فصوص ثوم مفري', 'ملعقة كبيرة زيت', 'ماء', 'بصلة صغيرة'],
        instructions: ['تخلط الطحينة مع الخل تدريجيا وتخفق جيدا مع الماء', 'يتبل بالملح والكمون والثوم والزيت', 'طريقة البصل: تدعك بصلة بالملح والفلفل وتنقع في الخل دقيقة ثم تعصر وتضاف للطحينة']
      },
      doc3: {
        title: '5- سلطة الطحينة / 6- سلطة الطحينة بالبصل',
        pageNumber: 37,
        ingredients: ['4 م ك طحينة', '3 م ك خل', 'ملح - كمون', '3 فصوص ثوم مفري', 'م ك زيت', 'ماء', 'بصلة صغيرة'],
        instructions: ['تخلط الطحينة مع الخل وتخفق جيدا مع قليل من الماء', 'يتبل الخليط بالملح والكمون والثوم والزيت وتجمل بالبقدونس', 'بالبصل: مع الاستغناء عن الثوم واستبداله بالبصل']
      }
    }
  },
  {
    id: 'salad-02',
    title: 'سلطة بابا غنوج بالباذنجان المشوي',
    titleEn: 'Baba Ghanoush (Smoked Roasted Eggplant with Tahini & Garlic)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'ss4-1',
        name: 'باذنجان رومي مشوي',
        standardAmount: '1/2 كيلو باذنجان رومي',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو باذنجان رومي مشوي',
          doc2: '1/2 كيلو باذنجان رومي',
          doc3: 'نصف ك باذنجان رومي مشوي'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss4-2',
        name: 'بصل مشوي في الفرن',
        standardAmount: '2 بصلة كبيرة مشوية',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة كبيرة مشوية',
          doc2: '2 بصلة مشوية',
          doc3: '2 بصلة ك مشوية'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss4-3',
        name: 'طحينة خام',
        standardAmount: '1/4 كوب طحينة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/4 كوب طحينة',
          doc2: '1/4 كوب طحينة',
          doc3: 'ربع كوب طحينة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss4-4',
        name: 'ثوم مفروم ناعم',
        standardAmount: '4 فصوص ثوم مفري',
        category: 'vegetable',
        sourceVariations: {
          doc1: '4 فصوص ثوم مفري',
          doc2: '4 فصوص ثوم مفري',
          doc3: '4 فصوص ثوم مفري'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss4-5',
        name: 'عصير ليمون أو خل أبيض',
        standardAmount: '4 ملاعق كبيرة خل أو عصير ليمون',
        category: 'liquid',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة خل أو عصير ليمون',
          doc2: '4 ملعقة كبيرة خل أو ليمون',
          doc3: '4 م ك خل أو عصير ليمون'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'ss4-6',
        name: 'زيت وكمون وملح وبقدونس',
        standardAmount: '3 ملاعق كبيرة زيت + كمون وملح + ملعقة كبيرة بقدونس مفري',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة زيت – ملعقة كبيرة بقدونس مفري – ملح – كمون',
          doc2: '3 ملعقة زيت – بقدونس – ملح وكمون',
          doc3: '3 م ك زيت – م ك بقدونس مفري – ملح – كمون'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'شواء الباذنجان والبصل: بعد غسل الباذنجان يجفف ويوضع صحيحاً في صينية داخل فرن متوسط الحرارة ويوضع معه البصل حتى تمام النضج والطرواة واكتساب رائحة الشواء المدخنة.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'التقشير والخلط: يقشر الباذنجان المشوي والبصل ويخلطا جيداً في الكبة أو يهرسا بالشوكة للحفاظ على القوام.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'إعداد صوص الطحينة: تمزج الطحينة بالخل أو عصير الليمون ثم تخفف بقليل جداً من الماء حتى تتجانس.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'المزج والتقديم: يضاف الثوم المفري وخليط الباذنجان والبصل والزيت، وتتبل جميعها بالملح والكمون ويقلبوا جيداً. عند التقديم تجمل بالبقدونس المفري ورشة زيت زيتون.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 2,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 93,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'شواء البصل مع الباذنجان الرومي في الفرن يشكل الميزة الفريدة لهذه الوصفة المصرية الأصيلة، موحدة بدقة من الوثائق الثلاث.'
    },
    rawDocVersions: {
      doc1: {
        title: 'سلطة بابا غنوج',
        pageNumber: 71,
        ingredients: ['1/2 كيلو باذنجان رومي مشوي', '2 بصلة كبيرة مشوية', '1/4 كوب طحينة', '4 فصوص ثوم مفري', 'قليل من الماء', 'ملعقة كبيرة بقدونس مفري', 'ملح وكمون', '3 ملعقة كبيرة زيت', '4 ملعقة كبيرة خل أو عصير ليمون'],
        instructions: ['يوضع الباذنجان والبصل في الفرن حتى النضج', 'يقشر الباذنجان والبصل ويخلطا في الكبة', 'تمزج الطحينة بالخل وتخفف بالماء', 'يضاف الثوم وخليط الباذنجان والزيت وتتبل بالملح والكمون وتجمل بالبقدونس']
      },
      doc3: {
        title: '8- سلطة بابا غنوج',
        pageNumber: 39,
        ingredients: ['نصف ك باذنجان رومي مشوي', '2 بصلة ك مشوية', 'ربع كوب طحينة', '4 فصوص ثوم مفري', 'م ك بقدونس', '3 م ك زيت', '4 م ك خل أو عصير ليمون'],
        instructions: ['بعد غسل الباذنجان يجفف ويوضع صحيحا داخل فرن مع البصل', 'يقشر الباذنجان المشوي والبصل ويخلطا جيدا', 'تمزج الطحينة بالخل ثم تخفف بالماء', 'يضاف الثوم المفري والزيت والتوابل']
      }
    }
  },
  {
    id: 'soup-03',
    title: 'شوربة الشعرية أو لسان العصفور',
    titleEn: 'Vermicelli or Orzo Broth Soup',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'شوربات وحساء',
    cookingMethod: 'سلق',
    prepTime: '5 دقائق',
    cookTime: '15 دقيقة',
    servings: '2-3 أفراد',
    masterIngredients: [
      {
        id: 'ss5-1',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1-2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1-2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss5-2',
        name: 'شعرية أو لسان عصفور',
        nameEn: 'Vermicelli or orzo pasta',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss5-3',
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
        id: 'ss5-4',
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
        text: 'تحمر الشعرية أو لسان العصفور في السمن.',
        textEn: 'Toast the vermicelli or orzo in the ghee until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تسكب عليها المرق المملح مع الفلفل وتترك حتى الغليان وتخفض درجة الحرارة حتى النضج (لسان العصفور يحتاج مدة أطول لنضجه وقد يحتاج لكمية زائدة من المرق).',
        textEn: 'Pour in the seasoned broth with pepper, bring to a boil, then lower the heat until cooked (orzo needs longer and may need extra broth).',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'للمذاق الطيب ممكن استعمال المستكة في المرق.',
        textEn: 'For extra flavor, a little mastic can be added to the broth.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'شوربة الشعرية أو لسان العصفور',
        ingredients: ['1 : 2 كوب من المرق', '2 ملعقة كبيرة شعرية أو لسان عصفور', 'سمن', 'ملح', 'فلفل'],
        instructions: ['تحمر الشعرية أو لسان العصفور في السمن.', 'تسكب عليها المرق المملح مع الفلفل وتترك حتى الغليان و تخفض درجة الحرارة حتى النضج (لسان العصفور يحتاج مدة أطول لنضجه و قد يحتاج لكمية زائدة من المرق يضاف للإناء).', 'للمذاق الطيب ممكن استعمال المستكة في المرق.']
      }
    }
  },
  {
    id: 'soup-04',
    title: 'شوربة اللبن',
    titleEn: 'Creamy Milk Soup with Chicken',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'شوربات وحساء',
    cookingMethod: 'سلق',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'ss6-1',
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
        id: 'ss6-2',
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
        id: 'ss6-3',
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
        id: 'ss6-4',
        name: 'مكعب مرقة جاهز',
        nameEn: 'Bouillon cube',
        standardAmount: '1 مكعب',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 مكعب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss6-5',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss6-6',
        name: 'كريمة',
        nameEn: 'Cream',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss6-7',
        name: 'قطع دجاج ناضج',
        nameEn: 'Cooked chicken pieces',
        standardAmount: 'حسب الرغبة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss6-8',
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
        id: 'ss6-9',
        name: 'زبد أو سمن',
        nameEn: 'Butter or ghee',
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
        text: 'تصفر البصلة في الزبد أو السمن، ثم يضاف لها الدقيق مع تقليبها، ثم إضافة المرق أو الماء مع مكعب المرقة بالتدريج، وتترك حتى الغليان على درجة حرارة هادئة.',
        textEn: 'Lightly brown the onion in butter or ghee, stir in the flour, then gradually add the broth or water with the bouillon cube, and simmer over low heat until boiling.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'بعد أن تبرد تضرب في الخلاط، ثم ترفع ثانية في الإناء مع إضافة الكريمة وقطع الدجاج الناضج مع اللبن حسب سمك الشوربة، وتتبل بالملح والفلفل.',
        textEn: 'Once cooled, blend it smooth, then return to the pot and add the cream, cooked chicken pieces and milk to the desired thickness, and season with salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يمكن استبدال قطع الدجاج بالجبن المبشور.',
        textEn: 'The chicken pieces can be replaced with grated cheese.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 4,
        text: 'مراعاة أن تقدم الشوربة ساخنة جدا عند تناولها.',
        textEn: 'Serve the soup piping hot.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'شوربة اللبن',
        ingredients: ['بصلة صغيرة', '2 ملعقة كبيرة دقيق', '2كوب من المرق أو الماء', 'ماجي', '½ كوب لبن', 'ملعقة كبيرة كريمة', 'قطع دجاج ناضج', 'ملح وفلفل', 'زبد أو سمن'],
        instructions: ['تصفر البصلة في الزبد أو السمن ثم يضاف لها الدقيق مع تقليبها ثم إضافة المرق أو الماء مع الماجي بالتدريج وتركها حتى الغليان على درجة حرارة هادئة.', 'بعد أن تبرد تضرب في الخلاط ثم ترفع ثانية في الإناء مع إضافة الكريمة وقطع الدجاج الناضج مع اللبن حسب سمك الشوربة وتتبل بالملح والفلفل.', 'يمكن استبدال قطع الدجاج بالجبن المبشور.', 'مراعاة أن تقدم الشوربة ساخنة جدا عند تناولها.']
      }
    }
  },
  {
    id: 'soup-05',
    title: 'شوربة الطماطم',
    titleEn: 'Cream of Tomato Soup',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'شوربات وحساء',
    cookingMethod: 'سلق',
    prepTime: '10 دقائق',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'ss7-1',
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
        id: 'ss7-2',
        name: 'طماطم',
        nameEn: 'Tomato',
        standardAmount: '1 حبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss7-3',
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
        id: 'ss7-4',
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
        id: 'ss7-5',
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
        id: 'ss7-6',
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
        id: 'ss7-7',
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
        id: 'ss7-8',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: 'قليل',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss7-9',
        name: 'صفار بيضة',
        nameEn: 'Egg yolk',
        standardAmount: '1 صفار',
        category: 'other',
        sourceVariations: {
          doc1: '1 صفار'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تصفر بصلة مقطعة حلقات في الزبد حتى تصفر.',
        textEn: 'Lightly brown sliced onion rings in butter until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تضاف الطماطم المقطعة مع ملعقة الصلصة والدقيق ويخلطوا جيدا مع البصل.',
        textEn: 'Add the chopped tomato with the tomato paste and flour, and mix well with the onion.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسكب المرق على الخليط على درجة حرارة منخفضة حتى النضج.',
        textEn: 'Pour in the broth over low heat and cook until done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد أن يبرد الخليط يضرب في الخلاط.',
        textEn: 'Once cooled, blend the mixture smooth.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يخلط قليل من اللبن بصفار البيضة جيدا مع الملح والفلفل، وتسكب على الشوربة المضروبة، ثم ترفع ثانية في الإناء على درجة حرارة هادئة لمدة 5 دقائق.',
        textEn: 'Mix a little milk well with the egg yolk, salt and pepper, stir it into the blended soup, and return to low heat for 5 minutes.',
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
        title: 'شوربة الطماطم',
        ingredients: ['بصلة متوسطة', 'حبة طماطم', 'ملعقة كبيرة صلصة طماطم', 'ملح وفلفل', 'زبد', 'ملعقة كبيرة دقيق', '2 كوب مرق', 'قليل من اللبن', 'صفار بيضة.'],
        instructions: ['تصفر بصلة مقطعة حلقات في الزبد حتى تصفر.', 'تضاف الطماطم المقطعة مع ملعقة الصلصة والدقيق ويخلطوا جيدا مع البصل.', 'يسكب المرق على الخليط في درجة حرارة منخفضة حتى النضج.', 'بعد أن يبرد الخليط يضرب في الخلاط.', 'يخلط قليل من اللبن بصفار البيضة جيدا مع الملح والفلفل.', 'تسكب على الشوربة المضروبة ثم ترفع ثانية في الإناء على درجة حرارة هادئة لمدة 5 دقائق.']
      }
    }
  },
  {
    id: 'salad-03',
    title: 'سلطة المايونيز',
    titleEn: 'Homemade Mayonnaise',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '10 دقائق',
    cookTime: '-',
    servings: 'حوالي كوب',
    masterIngredients: [
      {
        id: 'ss8-1',
        name: 'بيضة أو صفار بيضة',
        nameEn: 'Egg or egg yolk',
        standardAmount: '1 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss8-2',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss8-3',
        name: 'مستردة',
        nameEn: 'Mustard',
        standardAmount: '1/2 ملعقة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1/2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss8-4',
        name: 'خل',
        nameEn: 'Vinegar',
        standardAmount: '1/8 إلى 1/4 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1/8 إلى 1/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss8-5',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: '1 ملعقة صغيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss8-6',
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
        text: 'تضرب البيضة مع الملح والفلفل والليمون والخل بالمضرب السلكي جيدا.',
        textEn: 'Whisk the egg well with the salt, pepper, lemon juice and vinegar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف الزيت بحذر نقطة نقطة حتى يسمك القوام نوعا ما.',
        textEn: 'Add the oil carefully, drop by drop, whisking constantly, until the mixture thickens somewhat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع المايونيز في وعاء ويضاف إليه المستردة ويقلبوا جيدا.',
        textEn: 'Transfer the mayonnaise to a bowl, stir in the mustard, and mix well.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يدخل في الثلاجة بعد وضعه في برطمان جاف جدا.',
        textEn: 'Store in a completely dry jar and refrigerate.',
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
        title: 'سلطة المايونيز',
        ingredients: ['1 بيضة أو صفار بيضة', '½ كوب زيت', '½ م مستردة', '⅛ : ¼ كوب خل', 'ملعقة صغيرة  عصير ليمون', 'ملح', 'فلفل'],
        instructions: ['تضرب البيضة مع الملح والفلفل والليمون والخل بالمضرب السلك جيدا.', 'يضاف الزيت بحذر نقطة نقطة حتى يسمك قوامه نوعا ما.', 'يوضع المايونيز في وعاء ويضاف إليه المستردة ويقلبوا جيدا.', 'يدخل في الثلاجة بعد وضعه في برطمان جاف جدا.']
      }
    }
  },
  {
    id: 'salad-04',
    title: 'سلطة دجاج بالمايونيز',
    titleEn: 'Chicken Salad with Mayonnaise and Toast',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '15 دقيقة',
    cookTime: '10 دقائق',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'ss9-1',
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
        id: 'ss9-2',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: '2 علبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 علبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss9-3',
        name: 'صلصة مايونيز',
        nameEn: 'Mayonnaise (see recipe above)',
        standardAmount: '3 ملعقة كبيرة',
        category: 'other',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss9-4',
        name: 'زيت زيتون',
        nameEn: 'Olive oil',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss9-5',
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
        id: 'ss9-6',
        name: 'توست',
        nameEn: 'Toast bread',
        standardAmount: '4 شرائح',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 شرائح'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'بعد سلق الدجاج تقطع شرائح صغيرة.',
        textEn: 'After boiling the chicken, cut it into small strips.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخلط الزبادي مع صلصة المايونيز وزيت الزيتون، ويتبل المقدار بالملح والفلفل ويخلطوا جيدا.',
        textEn: 'Mix the yogurt with the mayonnaise and olive oil, season with salt and pepper, and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحمص شرائح التوست المقطعة مكعبات في الفرن حتى يصير لونها ذهبيا.',
        textEn: 'Toast diced bread cubes in the oven until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يصب خليط المايونيز على الدجاج المقطع ويقدم في صحن التقديم مع مكعبات التوست المحمص.',
        textEn: 'Pour the mayonnaise mixture over the chicken and serve with the toasted bread cubes.',
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
        title: 'سلطة دجاج بالمايونيز',
        ingredients: ['½ دجاجة مسلوقة', '2 علبة زبادي', '3 ملعقة كبيرة من صلصة المايونيز', 'ملعقة كبيرة زيت زيتون', 'ملح وفلفل', '4 شرائح توست'],
        instructions: ['بعد سلق الدجاج تقطع شرائح صغيرة.', 'يخلط الزبادي مع صلصة المايونيز وزيت الزيتون ويتبل المقدار بالملح والفلفل ويخلطوا جيدا.', 'تحمص شرائح التوست المقطعة مكعبات في  الفرن حتى يصير لونها ذهبيا.', 'يصب خليط المايونيز على الدجاج المقطع ويقدم في صحن التقديم مع مكعبات التوست المحمص.']
      }
    }
  },
  {
    id: 'salad-05',
    title: 'سلطة اللبن الزبادي',
    titleEn: 'Yogurt and Garlic Salad',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '10 دقائق',
    cookTime: '-',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'ss10-1',
        name: 'لبن زبادي',
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
        id: 'ss10-2',
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
        id: 'ss10-3',
        name: 'نعناع جاف',
        nameEn: 'Dried mint',
        standardAmount: 'قليل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss10-4',
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
        id: 'ss10-5',
        name: 'خيار أو بقدونس مفري',
        nameEn: 'Cucumber or chopped parsley',
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
        text: 'يضاف الثوم إلى الزبادي مع الملح والفلفل والنعناع ويخفقوا جيدا.',
        textEn: 'Add the garlic to the yogurt with salt, pepper and mint, and whisk well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع السلطة في وعاء وتقطع فيه قطع صغيرة من الخيار أو تستبدل بقليل من البقدونس المفري.',
        textEn: 'Transfer to a serving bowl and add small diced cucumber, or chopped parsley instead.',
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
        title: 'سلطة اللبن الزبادي',
        ingredients: ['كوب لبن زبادي', '2 فص ثوم مفري', 'قليل من النعناع الجاف', 'ملح وفلفل', 'خيار أو بقدونس مفري'],
        instructions: ['يضاف الثوم إلى الزبادي مع الملح والفلفل والنعناع ويخفقوا جيدا.', 'توضع السلطة في وعاء وتقطع فيه قطع صغيرة من الخيار أو استبداله بقليل من البقدونس المفري.']
      }
    }
  },
  {
    id: 'salad-06',
    title: 'سلطة الخل والثوم',
    titleEn: 'Garlic and Vinegar Dressing (for Fried Eggplant or Grilled Fish)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '5 دقائق',
    cookTime: '-',
    servings: 'يكفي لطبق تقديم واحد',
    masterIngredients: [
      {
        id: 'ss11-1',
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
        id: 'ss11-2',
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
        id: 'ss11-3',
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
        id: 'ss11-4',
        name: 'خل',
        nameEn: 'Vinegar',
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
        text: 'يفرم الثوم مع الكمون والملح، ثم يضاف الخل ويقلبوا جيدا.',
        textEn: 'Crush the garlic with the cumin and salt, then add the vinegar and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقدم هذه السلطة مع الباذنجان المقلي والسمك المشوي.',
        textEn: 'Serve this dressing with fried eggplant and grilled fish.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'سلطة الخل والثوم',
        ingredients: ['½ رأس ثوم مفري', 'ملعقة صغيرة  كمون', 'ملح', '½ كوب خل'],
        instructions: ['يفرم الثوم مع الكمون والملح ثم يضاف الخل ويقلبوا جيدا.', 'تقدم هذه السلطة مع الباذنجان المقلي والسمك المشوي.']
      }
    }
  },
  {
    id: 'salad-07',
    title: 'سلطة الحمص',
    titleEn: 'Hummus with Tahini and Yogurt',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '15 دقيقة',
    cookTime: '-',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'ss12-1',
        name: 'حمص مسلوق',
        nameEn: 'Boiled chickpeas',
        standardAmount: '2 علبة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 علبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss12-2',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: 'عصير 2 ليمونة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'عصير 2 ليمونة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss12-3',
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
        id: 'ss12-4',
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
        id: 'ss12-5',
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
        id: 'ss12-6',
        name: 'طحينة',
        nameEn: 'Tahini',
        standardAmount: '2 ملعقة كبيرة',
        category: 'other',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss12-7',
        name: 'زيت زيتون',
        nameEn: 'Olive oil',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss12-8',
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
        id: 'ss12-9',
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
        id: 'ss12-10',
        name: 'بقدونس ونعناع',
        nameEn: 'Parsley and mint',
        standardAmount: 'للتزيين',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع الفلفل الأخضر ويوضع في الخلاط مع الثوم والملح والكمون والخل والليمون، ثم الحمص المسلوق مع الزبادي ثم الطحينة والنعناع الجاف.',
        textEn: 'Chop the green pepper and blend it with the garlic, salt, cumin, vinegar and lemon juice, then add the boiled chickpeas with the yogurt, tahini and dried mint.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تخلط العناصر خلطا جيدا ثم تقلب في صحن التقديم.',
        textEn: 'Blend everything together well and spread onto the serving plate.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسكب عليها زيت الزيتون وترش بالبقدونس المفري.',
        textEn: 'Drizzle with olive oil and sprinkle with chopped parsley.',
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
        title: 'سلطة الحمص',
        ingredients: ['2 علبة حمص مسلوق', '2 ليمونة معصورة', 'ثمرة فلفلة خضراء', '1 كوب زبادي', '2 ملعقة كبيرة خل', '2 ملعقة كبيرة طحينة', '1ملعقة كبيرة زيت زيتون', '4 فصوص ثوم مفري', 'ملح', 'ملعقة صغيرة  كمون', 'بقدونس ونعناع'],
        instructions: ['يقطع الفلفل الأخضر ويوضع في الخلاط مع الثوم والملح والكمون والخل والليمون ثم الحمص المسلوق مع الزبادي ثم الطحينة والنعناع الجاف.', 'تخلط العناصر خلطا جيدا ثم تقلب في صحن التقديم.', 'يسكب عليها زيت الزيتون وترش بالبقدونس المفري.']
      }
    }
  },
  {
    id: 'salad-08',
    title: 'سلطة الفتوش',
    titleEn: 'Fattoush Salad',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '15 دقيقة',
    cookTime: '-',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'ss13-1',
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
        id: 'ss13-2',
        name: 'خيار',
        nameEn: 'Cucumbers',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss13-3',
        name: 'بقدونس مفري',
        nameEn: 'Chopped parsley',
        standardAmount: '3 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss13-4',
        name: 'نعناع جاف',
        nameEn: 'Dried mint',
        standardAmount: '1 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss13-5',
        name: 'أوراق خس',
        nameEn: 'Lettuce leaves',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss13-6',
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
      {
        id: 'ss13-7',
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
        id: 'ss13-8',
        name: 'رغيف شامي',
        nameEn: 'Shami flatbread',
        standardAmount: '1 رغيف',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 رغيف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss13-9',
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
        id: 'ss13-10',
        name: 'زيتون أسود',
        nameEn: 'Black olives',
        standardAmount: 'قليل',
        category: 'other',
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
        text: 'تقطع الطماطم مكعبات وكذا الخيار، ويضاف إليهم البقدونس المفري مع النعناع الجاف وأوراق الخس المقطع رفيعا مع عصير الليمونة، ويتبل الخليط بالملح والفلفل والخل.',
        textEn: 'Dice the tomatoes and cucumbers, add the chopped parsley, dried mint and thinly sliced lettuce with the lemon juice, and season with salt, pepper and vinegar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يحمص رغيف شامي مقطع صغيرا.',
        textEn: 'Toast diced pieces of the shami flatbread.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'توضع السلطة في طبق التقديم ويضاف إليها الزيتون الأسود ثم يضاف الخبز المحمص.',
        textEn: 'Transfer the salad to a serving plate, add the black olives, then top with the toasted bread.',
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
        title: 'سلطة الفتوش',
        ingredients: ['2 ثمرة طماطم', '2 ثمرة خيار', '3 ملعقة كبيرة بقدونس مفري', 'ملعقة صغيرة  نعناع جاف', 'أوراق خس', 'عصير ليمونة', 'ملعقة كبيرة خل', 'رغيف شامي', 'ملح وفلفل', 'قليل من الزيتون الأسود'],
        instructions: ['تقطع الطماطم مكعبات وكذا الخيار ويضاف إليهم البقدونس المفري مع النعناع الجاف وأوراق الخس المقطع رفيعا مع عصير الليمونة ويتبل الخليط بالملح والفلفل والخل.', 'يحمص رغيف شامي مقطع صغيرا.', 'توضع السلطة في طبق التقديم ويضاف إليه الزيتون الأسود ثم يضاف الخبز المحمص.']
      }
    }
  },
  {
    id: 'salad-09',
    title: 'سلطة الثومية',
    titleEn: 'Toumeya Garlic Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '10 دقائق',
    cookTime: '-',
    servings: 'حوالي كوب',
    masterIngredients: [
      {
        id: 'ss14-1',
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
        id: 'ss14-2',
        name: 'مستردة',
        nameEn: 'Mustard',
        standardAmount: '2 ملعقة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss14-3',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '2 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss14-4',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
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
        text: 'تخفق المستردة مع البيض إما بضرب الصفار وحده والبياض وحده وإما بضرب البيض كاملا.',
        textEn: 'Whisk the mustard with the eggs, either whisking the yolks and whites separately or the whole eggs together.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف الثوم المفري مع الزيت ويخفقوا جيدا، ثم يضاف إلى خليط البيض والمستردة ويتبل بالملح مع الخفق الجيد حتى ينعم الخليط ويصير كالكراميل.',
        textEn: 'Whisk the crushed garlic with the oil, then fold into the egg and mustard mixture, season with salt, and whisk until smooth and caramel-like in texture.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'سلطة الثومية',
        ingredients: ['3 بيضات', '2 م مستردة', '2 ملعقة كبيرة ثوم مفري', '½ كوب زيت'],
        instructions: ['تخفق المستردة مع البيض إما بضرب الصفار وحده والبياض وحده وإما بضرب البيض كاملا.', 'يضاف الثوم المفري مع الزيت ويخفقوا جيدا ثم يضاف إلى خليط البيض والمستردة ويتبل بالملح مع الخفق الجيد حتى ينعم الخليط ويصير كالكرميل.']
      }
    }
  },
  {
    id: 'salad-10',
    title: 'السلطة الروسي',
    titleEn: 'Russian Salad',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '15 دقيقة',
    cookTime: '20 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'ss15-1',
        name: 'بازلاء مسلوقة',
        nameEn: 'Boiled green peas',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss15-2',
        name: 'بطاطس مسلوقة مقطعة مكعبات',
        nameEn: 'Boiled potatoes, diced',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss15-3',
        name: 'جزر مسلوق',
        nameEn: 'Boiled carrots',
        standardAmount: '2 جزرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 جزرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss15-4',
        name: 'صلصة مايونيز',
        nameEn: 'Mayonnaise (see recipe above)',
        standardAmount: '1 إلى 1.5 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '1 إلى 1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تخلط الخضروات المسلوقة ثم تتبل بنصف مقدار صلصة المايونيز.',
        textEn: 'Mix the boiled vegetables together and toss with half the mayonnaise.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تصب في صحن التقديم ثم يغطى السطح بباقي الصلصة ويجمل بالخيار.',
        textEn: 'Transfer to a serving dish, spread the remaining mayonnaise over the top, and garnish with cucumber.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'السلطة الروسي',
        ingredients: ['¼ كيلو بسلة مسلوقة', '¼ كيلو بطاطس مسلوقة ومقطعة مكعبات', 'جزرتان مسلوقتان', '1 : ½1 كوب صلصة مايونيز'],
        instructions: ['تخلط الخضروات المسلوقة ثم تتبل بنصف مقدار صلصة المايونيز.', 'تصب في صحن التقديم ثم يغطى السطح بباقي الصلصة ويجمل بالخيار.']
      }
    }
  },
  {
    id: 'salad-11',
    title: 'سلطة البطاطس',
    titleEn: 'Potato Salad with Garlic-Lemon Dressing',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'سلطات',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '20 دقيقة',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'ss16-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss16-2',
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
        id: 'ss16-3',
        name: 'فلفل رومي',
        nameEn: 'Bell peppers',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss16-4',
        name: 'عصير بصل صغير',
        nameEn: 'Small onion, juiced',
        standardAmount: '1 بصلة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss16-5',
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
        id: 'ss16-6',
        name: 'بقدونس مفري',
        nameEn: 'Finely chopped parsley',
        standardAmount: 'قليل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss16-7',
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
        id: 'ss16-8',
        name: 'ملح وفلفل وكمون',
        nameEn: 'Salt, pepper and cumin',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'ss16-9',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تغسل البطاطس بقشرها جيدا.',
        textEn: 'Scrub the potatoes well, unpeeled.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تسلق البطاطس بقشرها في ماء مغلي مملح حتى تنضج مع مراعاة ألا تتهرى.',
        textEn: 'Boil the potatoes in their skins in salted water until cooked, taking care they don\'t fall apart.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقشر البطاطس وتقطع مكعبات متوسطة.',
        textEn: 'Peel the potatoes and cut into medium cubes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'في طبق عميق نعمل التتبيلة بمزج الزيت مع الملح والكمون، ثم يضاف عصير البصل والثوم المفري وعصير الليمون أو الخل ويقلبوا جيدا.',
        textEn: 'In a deep dish, make the dressing by mixing the oil with salt and cumin, then add the onion juice, crushed garlic and lemon juice or vinegar, and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تقطع الطماطم قطعا متوسطة وكذا الفلفل الأخضر، ويقطع البقدونس صغيرا، ثم يضافون إلى التتبيلة ويخلطون جيدا.',
        textEn: 'Cut the tomatoes and bell peppers into medium pieces, finely chop the parsley, and add them to the dressing, mixing well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'توضع مكعبات البطاطس داخل الخلطة وتقلب جيدا.',
        textEn: 'Add the potato cubes to the mixture and toss well.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تدخل الثلاجة حتى موعد التقديم.',
        textEn: 'Refrigerate until ready to serve.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'نصائح عامة لحفظ الخضار: يُسلق الخضار المفروم للتجميد دقيقة واحدة في ماء مغلي مملح به قليل من الكربونات ثم يصفى فورا في ماء مثلج، ثم يجفف ويعبأ في أكياس محكمة الغلق داخل الفريزر لمدة لا تتجاوز 3 أشهر (ويسكب مباشرة في الشوربة الساخنة وهو مجمد). الملوخية تحفظ بعد فرمها بغمرها بمغرفة من الشوربة قبل التجميد. الخرشوف يحفظ في الثلاجة داخل ماء مغلي به زيت زيتون وعصير ليمون كثير. شرائح البطاطس تُسلق 3-4 دقائق ثم تبرد في ماء وخل قبل تجفيفها وتجميدها، وتُقلى وهي لا تزال مجمدة.',
        textEn: 'General vegetable-freezing tips: blanch chopped vegetables for one minute in salted, lightly bicarbonated boiling water, then plunge immediately into ice water, dry, and pack into airtight freezer bags for up to 3 months (add straight from frozen into hot soup). Chopped molokhia is preserved by covering it with a ladle of broth before freezing. Artichokes keep refrigerated in boiled water with olive oil and plenty of lemon juice. Potato slices are parboiled 3-4 minutes, cooled in water with vinegar, then dried and frozen, and fried directly from frozen.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'نصائح تجميد الخضروات',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'سلطة البطاطس',
        ingredients: ['¼ كيلو بطاطس', '2 ثمرة طماطم', '2 ثمرة فلفل رومي', 'عصير بصلة صغيرة', '2 فص ثوم مفري', 'بقدونس مقطع صغيرا', '2 ملعقة كبيرة زيت', 'ملح', 'فلفل', 'كمون', 'عصير ليمونة أو ملعقة كبيرة خل'],
        instructions: ['تغسل البطاطس بقشرها جيدا.', 'تسلق البطاطس بقشرها في ماء مغلي مملح حتى تنضج مع مراعاة ألا تنهري.', 'تقشر البطاطس وتقطع مكعبات متوسطة.', 'في طبق عميق نعمل التتبيلة بمزج الزيت مع الملح والكمون ثم يضاف عصير البصل والثوم المفري وعصير الليمون أو الخل ويقلبوا جيدا.', 'تقطع الطماطم قطع متوسطة وكذا الفلفل الأخضر ويقطع البقدونس صغيرا ثم يضافوا إلى التتبيلة ويخلطوا جيدا.', 'توضع مكعبات البطاطس داخل الخلطة وتقلب جيدا.', 'تدخل الثلاجة حتى موعد التقديم.', 'ينظف الخضار ويغسل ثم يوضع في الماء المغلي والملح والكربونات لمدة دقيقة.', 'يصفى من الماء الساخن في المصفاة وفورا نسكب عليه الماء المثلج.', 'يوضع في كيس في الثلاجة ثم يضغط عليه باليد جيدا لتفريغ الهواء ويغلق ويكتب عليه التاريخ ويظل لمدة 3 شهور فقط داخل الفريزر.', 'عند إخراجه مجمدا يسكب في الشوربة الساخنة فورا.', 'يغلي الماء مع ملح وكربونات ثم يوضع الخضار لمدة دقيقة.', 'ينزع الخضار من الماء المغلي ويوضع فورا في ماء مثلج.', 'بعد غسلها وتقطيعها وخرطها نسكب عليها مغرفة واحدة فقط من الشوربة . ثم تحفظ داخل كيس الثلاجة داخل الفريزر.', 'نضع الخرشوف في ماء مغلي مضاف إليه زيت زيتون وعصير ليمون كثير ثم يوضع في إناء زجاجي ويحفظ في الثلاجة.', 'يقطع البطاطس شرائح متوسطة السمك ويوضع في ماء مغلي لمدة 3 – 4 دقائق فوق البوتاجاز.', 'ينشل من الماء الساخن ويوضع في ماء بارد مضاف إليه خل.', 'بعد أن يبرد يوضع في مصفاة حتى يجف ويغلف في أكياس داخل الفريزر.', 'عند قلي البطاطس يجب إخراجه مجمدا.']
      }
    }
  },
];
