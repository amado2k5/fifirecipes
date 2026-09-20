import { Recipe } from '../../types';

export const meatsAndPoultryRecipes: Recipe[] = [
  {
    id: 'meat-01',
    title: 'اللحوم والطيور المسلوقة',
    titleEn: 'Boiled Meats & Poultry',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'سلق',
    prepTime: '20 دقيقة',
    cookTime: '60-90 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'mp1-1',
        name: 'لحم أو دجاجة كاملة',
        standardAmount: '1 كيلو أو دجاجة كاملة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو لحم أو دجاجة',
          doc2: '1 كيلو لحم أو دجاجة',
          doc3: '1 ك لحم بتلو أو 1 ك صدور دجاج'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp1-2',
        name: 'بصل مبشور / مقطع',
        standardAmount: '1 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة كبيرة صحيحة أو مقطعة أو مفرية',
          doc2: 'بصلة كبيرة صحيحة أو مفرية',
          doc3: 'بصلة كبيرة مدعوكة بالملح والفلفل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp1-3',
        name: 'طماطم طازجة',
        standardAmount: '1 ثمرة طماطم',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'ثمرة طماطم',
          doc2: 'ثمرة طماطم',
          doc3: 'ثمرة طماطم صحيحة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp1-4',
        name: 'ثوم طازج',
        standardAmount: '1 فص ثوم كبير',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'فص ثوم كبير',
          doc2: 'فص ثوم كبير',
          doc3: 'فص ثوم مفروم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp1-5',
        name: 'سمن أو زيت نباتي',
        standardAmount: 'قليل للتشويح (1-2 ملعقة)',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'قليل من الزيت',
          doc2: 'قليل من الزيت',
          doc3: 'ملعقة سمن أو زيت'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp1-6',
        name: 'توابل عطرية (حبهان مدقوق، ملح، فلفل أسود)',
        standardAmount: 'ملح وفلفل وحبهان مدقوق',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح – فلفل – حبهان مدقوق',
          doc2: 'ملح – فلفل – حبهان مدقوق',
          doc3: 'ملح وفلفل وحبهان ومستكة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp1-7',
        name: 'خل أبيض',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملعقة كبيرة خل',
          doc2: 'ملعقة كبيرة خل',
          doc3: 'م ك خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp1-8',
        name: 'ماء نقي للسلق',
        standardAmount: 'مقدار كافٍ يغطي اللحم',
        category: 'liquid',
        sourceVariations: {
          doc1: 'مقدار من الماء يكفي لنضج اللحم أو الدجاج',
          doc2: 'ماء كافي للتغطية',
          doc3: 'ماء مغلي كافٍ'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تحضير مسبق وتدليك: لسلق اللحوم تدعك بالبصل المبشور المتبل بالملح والفلفل. لسلق الطيور تتبل بالدقيق أو بالخل ثم تشطف بالماء لإزالة أي زفارة.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'التشويح: نضع قليل من الزيت أو السمن في إناء على البوتاجاز ومعه البصلة صحيحة أو مقطعة، ثم نضيف التوابل (الملح والفلفل والحبهان المدقوق) والطماطم والخل والثوم.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'التقليب والتحمير الأولي: تشوح قطع اللحوم أو الدجاج في الإناء مع الخلطة السابقة مع التقليب الجيد حتى تتشرب المياه تماماً وتأخذ نكهة التتبيل.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'السلق على نار هادئة: نضيف المقدار الكافي من الماء المغلي حتى الغليان، ثم تهدأ الحرارة ويغطى الإناء وتترك حتى تمام النضج.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'طريقة إضافية بالخضار العطري (النسخة 1 و 2): تحمر البصلة مع الثوم والفلفل الأخضر وملعقة حمص ناضج وحزمة كرفس مقطعة، ثم يضاف اللحم مع التقليب ويضاف البقدونس والكسبرة لإعطاء نكهة مميزة قبل إضافة ماء السلق.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة الطيور المتبلة بالكرفس والحمص',
        sourceDocs: ['doc1', 'doc2'],
        importance: 'variation'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 8,
      totalUniqueSteps: 5,
      totalMasterIngredients: 8,
      overlapPercentage: 88,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'تم دمج 8 مقادير متطابقة بين الوثائق الثلاث، وتوحيد خطوات التنظيف بالسلق والتدليك بالبصل واستخلاص طريقة الكرفس كإضافة نوعية.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الطهو بالسلق: اللحوم و الطيور',
        pageNumber: 2,
        ingredients: ['1 كيلو لحم أو دجاجة', 'بصلة كبيرة', 'ثمرة طماطم', 'فص ثوم كبير', 'قليل من الزيت', 'مقدار من الماء', 'ملح وفلفل وحبهان مدقوق', 'ملعقة كبيرة خل'],
        instructions: ['تدعك بالبصل المبشور المتبل بالملح والفلفل', 'نضع الزيت في إناء مع البصلة والتوابل والطماطم والثوم والخل', 'تشوح اللحوم حتى تتشرب المياه تماما', 'نضيف الماء المغلي وتهدأ الحرارة']
      },
      doc2: {
        title: 'الطهو بالسلق: اللحوم والطيور',
        pageNumber: 2,
        ingredients: ['1 كيلو لحم أو دجاجة', 'بصلة كبيرة', 'ثمرة طماطم', 'فص ثوم كبير', 'قليل من الزيت', 'ماء للنضج', 'ملح وفلفل وحبهان', 'ملعقة خل'],
        instructions: ['لسلق اللحوم تدعك بالبصل', 'تشوح في الإناء مع التوابل', 'يضاف الماء الكافي حتى النضج']
      },
      doc3: {
        title: '1- لطهو اللحوم والطيور بالسلق',
        pageNumber: 5,
        ingredients: ['1 ك لحم أو دجاجة', 'بصلة كبيرة مقطعة أو مفرية', 'ثمرة طماطم صحيحة', 'فص ثوم كبير', 'زيت أو سمن', 'ملح وفلفل وحبهان مدقوق', 'ملعقة خل'],
        instructions: ['تنظيف الدجاج بالدقيق والخل', 'تشويح اللحوم في الزيت مع التوابل', 'إضافة الماء المغلي الكافي حتى النضج']
      }
    }
  },
  {
    id: 'meat-02',
    title: 'الأرانب (مسلوقة / كباب حلة / بالدمعة)',
    titleEn: 'Rabbit (Boiled, Kabab Halla, or Tomato Sauce)',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '25 دقيقة',
    cookTime: '50 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp2-1',
        name: 'أرانب مقطعة',
        standardAmount: '1 إلى 2 أرنب',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 : 2 أرنب',
          doc2: '1 : 2 أرنب',
          doc3: 'من 1 : 2 أرنب'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp2-2',
        name: 'بصل مفروم أو شرائح',
        standardAmount: '1-2 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة كبيرة مقطعة',
          doc2: 'بصلة مقطعة',
          doc3: 'بصلة كبيرة تشوح حتى تصير بني'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp2-3',
        name: 'طماطم معصورة / صلصة',
        standardAmount: '1 كوب عصير طماطم مصفى',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'كوب من الطماطم المعصورة',
          doc2: 'كوب من الطماطم المعصورة',
          doc3: 'صلصة طماطم من كوب طماطم معصورة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp2-4',
        name: 'ثوم مفروم',
        standardAmount: '1/4 رأس ثوم مفري (3-4 فصوص)',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم مفري',
          doc2: '1/4 رأس ثوم مفري',
          doc3: 'ثوم مفري 1/4 رأس'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp2-5',
        name: 'سمن بلدي أو زيت',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'قليل من الزيت أو سمن',
          doc2: '2 ملعقة كبيرة زيت أو سمن',
          doc3: 'سمن أو زيت'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp2-6',
        name: 'خل وبهارات وحبهان',
        standardAmount: '1 ملعقة خل + ملح + فلفل + حبهان',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملعقة خل – ملح – فلفل – حبهان',
          doc2: 'ملعقة خل – ملح – فلفل – حبهان',
          doc3: 'خل وتوابل وحبهان'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'طريقة السلق: نضع الزيت في وعاء الطهو مع البصلة المقطعة والخل والتوابل، ثم نضيف الأرانب وتشوح جيداً حتى تتشرب المياه، ثم نضيف ماء يغطيها حتى النضج على نار هادئة.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'طريقة كباب الحلة: تشوح البصلة في الزيت ثم نضع معها قطع الأرانب والتوابل حتى تصير البصلة بنية اللون، ونضيف القليل من الماء والخل تدريجياً مع تغطية الإناء على حرارة هادئة حتى تنضج مع قليل من الصوص المركز.',
        phase: 'cook',
        isAlternative: true,
        alternativeLabel: 'كباب الحلة',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'variation'
      },
      {
        stepNumber: 3,
        text: 'طريقة الأرانب بالدمعة: تقطع الأرانب وتحمر في السمن أو الزيت ثم ترفع جانباً. في نفس الوعاء يحمر الثوم وتضاف إليه الطماطم المعصورة حتى تتسبك، ثم يضاف الخل والماء وتتبل بالملح والفلفل حتى الغليان، وتعاد قطع الأرانب في الدمعة وتغطى على نار هادئة حتى تمام النضج.',
        phase: 'cook',
        isAlternative: true,
        alternativeLabel: 'الأرانب بالدمعة',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'variation'
      },
      {
        stepNumber: 4,
        text: 'طريقة صينية الأرانب بالمرق: نحضر صينية بحجم قطع الأرانب، ونضع فيها قليل من المرق والزيت والخل والتوابل، ثم نضيف الأرانب المقطعة وتقلب من آن لآخر حتى تتشرب المرق تماماً وتتحمر.',
        phase: 'cook',
        isAlternative: true,
        alternativeLabel: 'صينية الأرانب بالمرق',
        sourceDocs: ['doc1', 'doc2'],
        importance: 'variation'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 4,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 85,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'جمعت الوثائق 4 طرق متباينة للأرانب (سلق، كباب حلة، دمعة، صينية مرق) بتركيبات مقادير متطابقة تم توحيدها في سجل رئيسي واحد.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الأرانب المسلوقة / كباب الحلة / بالدمعة',
        pageNumber: 3,
        ingredients: ['1 : 2 أرنب', 'بصلة كبيرة', 'ملعقة خل', 'قليل من الزيت', 'ملح وفلفل وحبهان', 'طماطم معصورة للدمعة'],
        instructions: ['سلق الأرانب بتشويح البصل والخل', 'كباب الحلة بتشويح البصل حتى البني', 'الدمعة بتحمير الثوم وتسبيك الطماطم']
      },
      doc3: {
        title: '2- سلق الأرانب - 3 طرق',
        pageNumber: 6,
        ingredients: ['من 1 : 2 أرنب', 'مرق أرنب', 'ملعقة زيت', 'ملعقة خل', 'ملح وفلفل', 'فص ثوم مفري'],
        instructions: ['أ- صينية بحجم قطع الأرانب مع المرق والزيت', 'ب- مثل طهو كباب الحلة مع تزويد الماء تدريجيا', 'ج- الأرانب بالدمعة']
      }
    }
  },
  {
    id: 'meat-03',
    title: 'كباب الحلة باللحم البتلو والبطاطس',
    titleEn: 'Kabab Halla (Egyptian Beef Stew with Potatoes)',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '60 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp3-1',
        name: 'لحم بتلو مكعبات',
        standardAmount: '1/2 كيلو مكعبات',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو لحم بتلو',
          doc2: '1/2 كيلو لحم بتلو',
          doc3: 'نصف ك لحم بتلو'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp3-2',
        name: 'بصل صحيح ومتوسط',
        standardAmount: '1 بصلة متوسطة صحيحة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة متوسطة صحيحة',
          doc2: 'بصلة متوسطة صحيحة',
          doc3: 'بصلة متوسطة صحيحة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp3-3',
        name: 'ثوم مفروم ناعم',
        standardAmount: '4 فصوص ثوم مفري مدقوق',
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
        id: 'mp3-4',
        name: 'بطاطس مكعبات محمرة',
        standardAmount: '2 حبة بطاطس متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حبتين بطاطس مكعبات',
          doc2: 'حبتين بطاطس',
          doc3: '2 وحدة بطاطس'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp3-5',
        name: 'سمن أو زيت',
        standardAmount: '2 ملعقة كبيرة سمن أو زيت',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة زيت أو سمن',
          doc2: '2 ملعقة كبيرة زيت أو سمن',
          doc3: '2 م ك زيت أو سمن'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp3-6',
        name: 'قرفة وبهارات وملح وفلفل',
        standardAmount: 'قليل من القرفة والملح والفلفل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'قليل من القرفة – ملح – فلفل',
          doc2: 'قليل من القرفة – ملح – فلفل',
          doc3: 'قليل من القرفة – ملح – فلفل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع اللحم مكعبات ويتبل بالملح والفلفل والقرفة، ثم يوضع في الإناء مع البصلة الصحيحة مع التقليب حتى يتشرب ماءه الذاتي تماماً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف الزيت أو السمن مع استمرار التقليب حتى يصبح لون اللحم بنياً شهياً، ثم يضاف الثوم المدقوق ويقلب حتى يصفر لونه وتخرج رائحته.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضيف مقداراً قليلاً جداً من الماء الساخن ويغطى الإناء، وكلما احتاج اللحم للماء يضاف له القليل تدريجياً حتى ينضج تماماً ويتكون صوص بني كثيف.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تقطع البطاطس مكعبات وتحمر في زيت غزير ثم توضع على مناديل ورقية لتصفية الزيت.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تسكب مكعبات البطاطس المحمرة فوق اللحم الناضج والصوص ويقلبان برفق مع تغطية الإناء لمدة 5 دقائق حتى تصبح البطاطس طرية ومتشربة لنكهة الصوص.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 4,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 92,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'تطابق كامل في الوصفة عبر الوثائق الثلاث، مع تفاصيل دقيقة لتسوية الصوص وإضافة البطاطس المقرمشة لتتشرب نكهة كباب الحلة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'كباب الحلة',
        pageNumber: 11,
        ingredients: ['1/2 كيلو لحم بتلو', '4 فصوص ثوم مفري', 'بصلة متوسطة صحيحة', 'ملح وفلفل وقرفة', '2 ملعقة كبيرة زيت أو سمن', 'حبتين بطاطس'],
        instructions: ['يقطع اللحم مكعبات ويتبل بالقرفة والملح والفلفل', 'يقلب مع البصلة حتى يتشرب ماءه', 'يضاف السمن ثم الثوم حتى يصفر', 'إضافة ماء قليل حتى النضج', 'تحمر البطاطس وتسكب فوق اللحم']
      },
      doc3: {
        title: '4- كباب الحلة',
        pageNumber: 11,
        ingredients: ['نصف ك لحم بتلو', '4 فصوص ثوم مفري', 'بصلة متوسطة صحيحة', 'ملح - فلفل - قليل من القرفة', '2 م ك زيت أو سمن', '2 وحدة بطاطس'],
        instructions: ['يقطع اللحم مكعبات ويتبل بالملح والفلفل والقرفة', 'يضاف الزيت أو السمن حتى يصبح بني', 'تحمر البطاطس المكعبات وتسكب فوق اللحم الناضج والصوص']
      }
    }
  },
  {
    id: 'meat-04',
    title: 'العصاج البلدي المسبك',
    titleEn: 'Classic Minced Meat Filling (Assag)',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '25 دقيقة',
    servings: 'حشوة متعددة الاستخدام',
    masterIngredients: [
      {
        id: 'mp4-1',
        name: 'لحم مفروم كوندوز أو بتلو',
        standardAmount: '1/2 كيلو لحم مفروم',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو لحم كوندوز',
          doc2: '1/2 كيلو لحم كوندوز مفروم',
          doc3: 'نصف كيلو لحم كوندوز'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp4-2',
        name: 'بصلة كبيرة مفرية',
        standardAmount: '1 بصلة كبيرة مفرية ناعم',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة كبيرة',
          doc2: 'بصلة كبيرة',
          doc3: 'بصلة كبيرة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp4-3',
        name: 'صلصة طماطم مركزة',
        standardAmount: '1-2 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'ملعقة كبيرة صلصة طماطم',
          doc2: 'ملعقة كبيرة صلصة طماطم',
          doc3: 'م ك صلصة طماطم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp4-4',
        name: 'ثوم مفري وعصير ليمون أو خل',
        standardAmount: '1 فص ثوم كبير + ملعقة خل أو ليمون',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'فص ثوم كبير – عصير ليمونة أو ملعقة كبيرة خل',
          doc2: 'فص ثوم كبير – عصير ليمونة أو خل',
          doc3: 'فص ثوم كبير – عصير ليمونة أو ملعقة ك خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp4-5',
        name: 'سمن بلدي أو زيت نباتي',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت أو سمن',
          doc2: 'زيت أو سمن',
          doc3: 'زيت أو سمن'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp4-6',
        name: 'توابل (ملح، فلفل، بهار لحم، قرفة، صنوبر اختياري)',
        standardAmount: 'ملح، فلفل، بهار، قرفة، صنوبر وزبيب اختياري',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح وفلفل وبهار – قرفة',
          doc2: 'ملح وفلفل وبهار – قرفة',
          doc3: 'ملح وفلفل وبهار – قرفة – صنوبر وزبيب'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'الطريقة الكلاسيكية الأولى: تبشر البصلة وتتبل بالملح والفلفل والبهار ثم تخلط باللحم المفروم. يضاف لها الصلصة والليمون المعصور أو الخل وفص الثوم المفري. يوضع الخليط في إناء به زيت أو سمن على درجة حرارة هادئة حتى يتشرب الماء ثم إضافة قليل من الماء كلما احتاج الأمر مع تغطية الإناء حتى النضج التام.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'طريقة التشويح الإضافية (سريعة النكهة): تحمر البصلة في الزيت أو السمن أولاً حتى تصفر ثم يضاف لها اللحم والتوابل على درجة حرارة هادئة حتى يتشرب ماءه، ثم يضاف الماء تدريجياً، مع إضافة الصنوبر المحمر والصلصة، وفي النهاية يضاف الزبيب حسب الرغبة.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة تشويح البصل أولاً بالصنوبر والزبيب',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'variation'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 2,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 2,
      totalMasterIngredients: 6,
      overlapPercentage: 90,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'العصاج يمثل الأساس المشترك لأكثر من 15 وصفة أخرى (مكرونة بشاميل، جلاش، رقاق، كوسة محشوة، مسقعة، بطاطس). تم استخلاص الطريقتين بدقة مع ذكر المكونات التكميلية كالصنوبر والزبيب.'
    },
    rawDocVersions: {
      doc1: {
        title: 'العصاج',
        pageNumber: 16,
        ingredients: ['بصلة كبيرة', '1/2 كيلو لحم كوندوز', 'ملح وفلفل وبهار', 'ملعقة كبيرة صلصة طماطم', 'عصير ليمونة أو خل', 'فص ثوم كبير', 'زيت أو سمن'],
        instructions: ['تبشر البصلة وتتبل بالملح والفلفل والبهار وتخلط باللحم', 'توضع على نار هادئة حتى يتشرب الماء', 'طريقة إضافية: تحمر البصلة في الزيت ثم يضاف اللحم والتوابل والصلصة والصنوبر والزبيب']
      },
      doc3: {
        title: '12- العصاج',
        pageNumber: 14,
        ingredients: ['بصلة كبيرة', 'نصف كيلو لحم كوندوز', 'ملح وفلفل وبهار', 'م ك صلصة طماطم', 'عصير ليمونة أو م ك خل', 'فص ثوم كبير', 'زيت أو سمن'],
        instructions: ['تبشر البصلة وتتبل وتخلط باللحم المفروم', 'تطهى على حرارة هادئة', 'طريقة أخرى للعصاج بتحمير البصل ثم اللحم والصلصة والصنوبر']
      }
    }
  },
  {
    id: 'meat-05',
    title: 'الكفتة بالبرغل المشوية على الفحم',
    titleEn: 'Burghul Meat Kofta with Charcoal Aroma',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '45 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-5 أفراد',
    masterIngredients: [
      {
        id: 'mp5-1',
        name: 'لحم مفروم ناعم',
        standardAmount: '1/2 كيلو لحم مفروم',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو لحم مفروم',
          doc2: '1/2 كيلو لحم مفروم',
          doc3: 'نصف كيلو لحم مفروم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp5-2',
        name: 'برغل مغسول ومنقوع',
        standardAmount: '1/2 كوب برغل ناعم',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب برغل',
          doc2: '1/2 كوب برغل',
          doc3: 'نصف كوب برغل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp5-3',
        name: 'بصلة مفرية ناعمة',
        standardAmount: '1 بصلة متوسطة مفرية',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة متوسطة مفرية',
          doc2: 'بصلة متوسطة مفرية',
          doc3: 'بصلة متوسطة مفرية'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp5-4',
        name: 'بقسماط ناعم',
        standardAmount: '1 ملعقة كبيرة (إذا احتاج الأمر للتماسك)',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'ملعقة كبيرة بقسماط',
          doc2: 'ملعقة كبيرة بقسماط',
          doc3: 'م ك بقسماط'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp5-5',
        name: 'سمن بلدي',
        standardAmount: '2 ملعقة كبيرة سمن',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة سمن',
          doc2: '2 ملعقة كبيرة سمن',
          doc3: '2 م ك سمن'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp5-6',
        name: 'فحم طبيعي للشواء',
        standardAmount: 'قطعة فحم ساخنة جداً للتبخير',
        category: 'other',
        sourceVariations: {
          doc1: 'فحم',
          doc2: 'فحم',
          doc3: 'فحم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp5-7',
        name: 'توابل كفتة (ملح، فلفل، بهارات)',
        standardAmount: 'ملح وفلفل وبهارات مشكلة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح فلفل بهارات',
          doc2: 'ملح فلفل بهارات',
          doc3: 'ملح فلفل بهارات'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'ينقع حوالي نصف كوب برغل في الماء ثم يسكب الماء وينقع مرة أخرى وتكرر العملية كذا مرة حتى نتخلص تماماً من الحصى والشوائب ثم يصفى جيداً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يتبل اللحم المفروم بالبصلة المفرية والملح والفلفل والبهار ثم يدخل الثلاجة حوالي ساعة ليتماسك ويتشرب النكهة.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط اللحم المفروم بالبرغل المصفى جيداً، ويمكن إضافة ملعقة بقسماط إذا احتاج الخليط لتماسك إضافي. يكوّر اللحم ويبطط على هيئة دوائر أو أصابع.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يرفع في إناء به السمن مع إضافة كمية قليلة من الماء على درجة حرارة هادئة حتى ينضج اللحم ويتشرب ماءه بالكامل.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'التبخير بالفحم: نحضر قطعة فحم ساخنة جداً ونضعها في ورقة قصدير بوسط الإناء، ونسكب عليها قطرة سمن ثم نغطي الإناء فوراً ونطفئ الحرارة لتتشرب الكفتة رائحة الشواء على الفحم.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 7,
      totalUniqueSteps: 5,
      totalMasterIngredients: 7,
      overlapPercentage: 91,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'طريقة البرغل والتبخير بالفحم متطابقة نصياً عبر النسخ، وتجسد تقنية الكفتة المصرية البيتية المحبوبة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'كفتة البرغل',
        pageNumber: 19,
        ingredients: ['1/2 كوب برغل', '1/2 كيلو لحم مفروم', 'بصلة متوسطة مفرية', 'ملح فلفل بهارات', 'ملعقة كبيرة بقسماط', '2 ملعقة كبيرة سمن', 'فحم'],
        instructions: ['نقع البرغل وتكرار العملية', 'تتبيل اللحم المفروم ودخوله الثلاجة ساعة', 'خلط البرغل وتشكيل دوائر', 'النضج مع السمن والماء القليل', 'إشعال الفحم وتغطية الإناء']
      },
      doc3: {
        title: '15- كفتة البرغل',
        pageNumber: 16,
        ingredients: ['نصف كوب برغل', 'نصف كيلو لحم مفروم', 'بصلة متوسطة مفرية', 'ملح فلفل بهارات', 'م ك بقسماط', '2 م ك سمن', 'فحم'],
        instructions: ['ينقع نصف كوب برغل في الماء كذا مرة', 'يتبل اللحم بالبصلة ويدخل الثلاجة', 'يكور اللحم ويبطط على هيئة دوائر', 'يرفع في إناء به 2 م سمن', 'نحضر فحم ساخن جداً ونضعه في وسط الإناء ونطفئ الحرارة']
      }
    }
  },
  {
    id: 'meat-06',
    title: 'الكبدة الإسكندراني الحارة',
    titleEn: 'Alexandrian Style Spiced Liver',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '15 دقيقة',
    cookTime: '10 دقائق',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp6-1',
        name: 'كبدة بلدي شرائح رفيعة',
        standardAmount: '1 كيلو كبدة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو كبده',
          doc2: '1 كيلو كبده',
          doc3: '1 كيلو كبده'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp6-2',
        name: 'عصير ليمون طازج',
        standardAmount: 'عصير ليمون كثير (3-4 ليمونات)',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'عصير ليمون كثير',
          doc2: 'عصير ليمون كثير',
          doc3: 'عصير ليمون كثير'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp6-3',
        name: 'ثوم مفروم ناعم',
        standardAmount: '1 ملعقة كبيرة ثوم مفري (رأس ثوم كاملة)',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'ملعقة ثوم مفري – رأس ثوم',
          doc2: 'ملعقة ثوم مفري',
          doc3: 'رأس ثوم – ثوم مفري م'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp6-4',
        name: 'فلفل رومي وفلفل حار',
        standardAmount: '2 ثمرة فلفل رومي مقطع',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فلفلة رومي',
          doc2: '2 فلفلة رومي',
          doc3: '2 ثمرة فلفل رومي'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp6-5',
        name: 'زيت غزير مقدوح',
        standardAmount: 'زيت كافي للتحمير السريع',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت للتحمير',
          doc2: 'زيت',
          doc3: 'زيت'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp6-6',
        name: 'كمون وملح وفلفل أسود',
        standardAmount: 'ملعقة صغيرة كمون + ملح وفلفل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح وفلفل – كمون',
          doc2: 'ملح وفلفل – كمون',
          doc3: 'ملح وفلفل – م ص كمون'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تقطع الكبدة شرائح صغيرة رفيعة جداً (عصافيري أو شرائح طولية)، ويعصر عليها كمية وفيرة من الليمون ويضاف إليها الملح والفلفل والكمون والثوم المفروم ثم يقطع عليها الفلفل الرومي.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تتبل الكبدة جيداً وتترك ساعتين داخل الثلاجة لتتشرب التتبيلة.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقنية الصدمة الحرارية (الطريقة الإسكندرية الأصلية): تحمر في زيت مقدوح جداً وليس غزيراً مع رفع درجة الحرارة جداً، وتقلب الكبدة سريعاً حتى تتماسك وتتشرب كل السوائل دون أن تجف.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'طريقة التحمير التدريجي (النسخة 1 و 3): يوضع نصف كمية التتبيلة أولاً في الزيت حتى تصفر وتخرج رائحتها، ثم تضاف الكبدة، وقرب النضج يضاف النصف المتبقي من التتبيلة ويطفأ البوتاجاز فوراً لتحتفظ بنكهة الثوم والليمون الطازجة.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'سر إضافة باقي التتبيلة قرب النضج',
        sourceDocs: ['doc1', 'doc3'],
        importance: 'variation'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 89,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'تم دمج مقادير الكبدة الإسكندراني والكمون والليمون والثوم، وحفظ سر الطهاة الشهير بإضافة دفعة ثانية من التتبيلة في الثواني الأخيرة قبل إطفاء النار.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكبده الاسكندراني / الكبده',
        pageNumber: 34,
        ingredients: ['1 كيلو كبده', 'عصير ليمون كثير', 'ملح وفلفل', 'كمون', 'ملعقة ثوم مفري', '2 فلفلة رومي', 'زيت'],
        instructions: ['تقطع الكبده شرائح صغيرة جدا ويعصر عليها الليمون', 'تترك ساعتين داخل الثلاجة', 'تحمر في زيت مقدوح جدا وليس غزيرا حتى تتشرب كل السائل']
      },
      doc3: {
        title: '20- الكبده / 21- طريقة أخرى للكبده',
        pageNumber: 29,
        ingredients: ['1 كيلو كبده', 'رأس ثوم', '2 ثمرة فلفل رومي', 'ملعقة صغيرة كمون', 'ملح وفلفل', 'زيت'],
        instructions: ['يفرم الثوم والفلفل في الكبة مع الكمون', 'نضع نصف التتبيلة في زيت حتى تحمر', 'تضاف الكبدة مع رفع درجة الحرارة', 'قرب النضوج تضاف بقية التتبيلة ويطفئ البوتاجاز']
      }
    }
  },
  {
    id: 'meat-07',
    title: 'الحمام المحشو بالأرز أو الفريك',
    titleEn: 'Stuffed Pigeon with Rice or Freekeh',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'سلق',
    prepTime: '30 دقيقة',
    cookTime: '45 دقيقة',
    servings: 'زوج حمام لشخصين',
    masterIngredients: [
      {
        id: 'mp7-1',
        name: 'حمام نظيف وجاهز للحشو',
        standardAmount: 'زوج حمام (2 فردة)',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'زوج حمام',
          doc2: 'زوج حمام',
          doc3: 'زوج من الحمام (2 حمام)'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp7-2',
        name: 'أرز مصري أو فريك منقى',
        standardAmount: '1/2 كوب أرز أو فريك',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب أرز أو فريك',
          doc2: '1/2 كوب أرز أو فريك',
          doc3: '1.2 كوب أرز أو استبدال الأرز بالفريك'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp7-3',
        name: 'بصل مفروم وبصلة صحيحة',
        standardAmount: '1 بصلة متوسطة مفرية + 1 بصلة كبيرة صحيحة للمرق',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة متوسطة مفرية – بصلة كبيرة صحيحة',
          doc2: 'بصلة متوسطة مفرية – بصلة كبيرة صحيحة',
          doc3: 'بصلة متوسطة مفرية – بصلة صحيحة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp7-4',
        name: 'حوائج الحمام (كبد وقوانص)',
        standardAmount: 'كبد وقوانص الحمام مقطعة صغيراً جداً',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حوائج الحمام المقطعة صغيرة جدا',
          doc2: 'حوائج الحمام المقطعة صغيرا',
          doc3: 'حوائج الحمام المقطعة صغيرة جدا'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp7-5',
        name: 'سمن بلدي وزيت للتحمير',
        standardAmount: '1 ملعقة كبيرة سمن للحشو + زيت أو سمن للتحمير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'ملعقة سمن كبيرة – زيت للتحمير',
          doc2: 'ملعقة كبيرة سمن – زيت للتحمير',
          doc3: 'ملعقة كبيرة سمن – زيت للتحمير'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'mp7-6',
        name: 'بهارات حشو (ملح، فلفل، حبهان مدقوق ومستكة)',
        standardAmount: 'ملح وفلفل وحبهان مدقوق',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح وفلفل – حبهان مدقوق',
          doc2: 'ملح وفلفل – حبهان مدقوق',
          doc3: 'ملح وفلفل وحبهان مدقوق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'إعداد الخلطة: يدعك البصل المفروم بالملح والفلفل الأسود وحوائج الحمام (الكبد والقوانص) المقطعة صغيرة جداً مع ملعقة السمن البلدي.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'الحشو والغلق: يخلط الأرز أو الفريك مع الخلطة ويحشى به بطن الحمام ورقبة الحمام باعتدال (حتى لا ينفجر أثناء السلق)، ويفضل أن يخاط بالخيط النظيف أو يكتف برجليه.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'السلق الهادئ: نحضر إناء ويغلي به الماء مع البصلة الصحيحة والملح والفلفل والحبهان المدقوق، ويوضع فيه الحمام ثم تهدأ الحرارة حتى تمام النضج (حوالي 35-45 دقيقة).',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'التحمير الذهبي: يرفع الحمام من المرق ويترك في مصفاة حتى يجف تماماً من السوائل، ثم يحمر في السمن البلدي أو الزيت حتى يكتسب لوناً ذهبياً شهياً من جميع الجهات.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 92,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'توافق كامل بين الوثائق الثلاث في طريقة حشو الحمام وسلقه وتحميره، مع توحيد خياري الأرز المصري والفريك الصعيدي.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الحمام المحشو بالأرز أو الفريك',
        pageNumber: 5,
        ingredients: ['زوج حمام', 'بصلة متوسطة مفرية', 'بصلة كبيرة صحيحة', '1/2 كوب أرز أو فريك', 'ملح وفلفل', 'حبهان مدقوق', 'ملعقة سمن كبيرة', 'مقدار من الماء'],
        instructions: ['يدعك البصل بالملح والفلفل وحوائج الحمام والسمن', 'تحشى الحمام بالخلطة ويفضل أن يخاط ويكتف', 'يغلى الماء مع البصلة الصحيحة ويسلق الحمام', 'يرفع ليجف ثم يحمر في الزيت']
      },
      doc3: {
        title: '3- الحمام المحشو بالأرز / 4- بالفريك',
        pageNumber: 7,
        ingredients: ['زوج من الحمام', 'بصلة متوسطة مفرية', '1.2 كوب أرز', 'ملح - فلفل - حبهان مدقوق', '2 حمام', 'ملعقة كبيرة سمن'],
        instructions: ['يدعك البصل بالملح والفلفل وحوائج الحمام والسمن', 'تحشى الحمام مع الأرز', 'سلق الحمام في ماء به بصلة صحيحة', 'يرفع ويترك حتى يجف ثم يحمر في الزيت']
      }
    }
  }
];
