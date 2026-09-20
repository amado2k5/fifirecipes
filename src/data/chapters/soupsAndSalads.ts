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
  }
];
