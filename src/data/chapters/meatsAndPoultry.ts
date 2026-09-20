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
  },
  {
    id: 'meat-08',
    title: 'اللحم المشوي',
    titleEn: 'Grilled Lamb or Veal',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'شي',
    prepTime: '2 ساعة (تتبيل)',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp8-1',
        name: 'لحم ضأن أو بتلو',
        nameEn: 'Lamb or veal cuts',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp8-2',
        name: 'بصل',
        nameEn: 'Onion',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp8-3',
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
        id: 'mp8-4',
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
        id: 'mp8-5',
        name: 'خل',
        nameEn: 'Vinegar',
        standardAmount: 'حسب الرغبة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp8-6',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '3 ملاعق كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملاعق كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يتبل اللحم بالبصل المدعوك بالملح والفلفل والليمون والخل والزيت، ويوضع في صينية وتدخل الثلاجة حوالي ساعتين على الأقل وتمتد حتى 12 ساعة.',
        textEn: 'Rub the meat with grated onion mashed with salt, pepper, lemon juice, vinegar and oil. Place in a tray and refrigerate for at least 2 hours, up to 12 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر الشواية ونضع فيها قطع اللحم مع قليل من الزيت والبصل المتبل حتى تتماسك قطع اللحم على الشواية.',
        textEn: 'Heat the grill and place the meat pieces on it with a little oil and the marinated onion, until the meat firms up on the grill.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نأخذ اللحم ونضعه في صينية وتغطى ثم تدخل الفرن لمدة ساعة ونصف.',
        textEn: 'Transfer the meat to a tray, cover it, and finish it in the oven for 1.5 hours.',
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
        title: 'اللحم المشوي',
        ingredients: ['1 كيلو لحم ضأن أو بتلو', '¼ كيلو بصل', 'ملح', 'فلفل', 'معصور 2 ليمونة', 'خل', '3 ملاعق زيت'],
        instructions: ['يتبل اللحم بالبصل المدعوك بالملح والفلفل والليمون والخل والزيت ويوضع في صينية وتدخل الثلاجة حوالي ساعتين على الأقل وتمتد حتى 12 ساعة.', 'نحضر الشواية ونضع فيها قطع اللحم مع قليل من الزيت والبصل المتبل حتى تتماسك قطع اللحم على الشواية.', 'نأخذ اللحم ونضعه في صينية وتغطيتها وندخلها الفرن لمدة ½1 ساعة.']
      }
    }
  },
  {
    id: 'meat-09',
    title: 'الدجاج المشوي',
    titleEn: 'Grilled Chicken',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'شي',
    prepTime: '2 ساعة (تتبيل)',
    cookTime: '35 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp9-1',
        name: 'دجاجة',
        nameEn: 'Whole chickens',
        standardAmount: '2 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '2 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp9-2',
        name: 'بصل متوسط',
        nameEn: 'Medium onion',
        standardAmount: '2 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp9-3',
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
        id: 'mp9-4',
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
        id: 'mp9-5',
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
        id: 'mp9-6',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: 'للدهن',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'للدهن'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطَع الدجاج نصفين طوليا ويُدَق جيدا، ثم يتبل بعصير البصل (بصلتين) والليمون والخل والملح والفلفل، ويترك لمدة ساعتين على الأقل.',
        textEn: 'Split each chicken lengthwise in half and pound well. Marinate in the juice of two grated onions, lemon juice, vinegar, salt and pepper for at least 2 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تدهن القطع بالزيت أو السمن ثم تشوى على الفحم مع التقليب.',
        textEn: 'Brush the pieces with oil or ghee, then grill over charcoal, turning regularly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترص في طبق التقديم مع الليمون والبطاطس المحمرة.',
        textEn: 'Arrange on the serving plate with lemon wedges and fried potatoes.',
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
        title: 'الدجاج المشوي',
        ingredients: ['2 دجاجة', '2 بصلة متوسطة', 'معصور 2 ليمونة', 'ملعقة خل', 'ملح', 'فلفل', 'زيت أو سمن'],
        instructions: ['يقطَع الدجاج نصفين طوليا وتدق جيدا ثم تتبل بعصير البصل ( بصلتين ) والليمون والخل والملح والفلفل وتترك لمدة ساعتين على الأقل.', 'تدهن القطع بالزيت أو السمن ثم تشوي على الفحم مع التقليب.', 'ترص في طبق التقديم مع الليمون والبطاطس المحمرة.']
      }
    }
  },
  {
    id: 'meat-10',
    title: 'الشيش طاووق',
    titleEn: 'Shish Tawook (Grilled Chicken Skewers)',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'شي',
    prepTime: '4 ساعات (تتبيل)',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp10-1',
        name: 'دجاج مخلي',
        nameEn: 'Boneless chicken',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp10-2',
        name: 'بصل متوسط مفري',
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
        id: 'mp10-3',
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
        id: 'mp10-4',
        name: 'مستردة',
        nameEn: 'Mustard',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp10-5',
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
        id: 'mp10-6',
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
        id: 'mp10-7',
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
        id: 'mp10-8',
        name: 'فلفل أخضر وطماطم وبصل للتشبيك',
        nameEn: 'Green pepper, tomato and onion, for skewering',
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
        text: 'يقطع لحم الدجاج مكعبات ويتبل ببصلة متوسطة مفرية مع ملح وفلفل وبهار وملعقة مستردة و2 ملعقة خل وعصير ليمونة والزيت.',
        textEn: 'Cut the chicken into cubes and marinate with grated onion, salt, pepper, mixed spice, mustard, vinegar, lemon juice and oil.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغطى ويترك في الثلاجة لمدة 4 ساعات.',
        textEn: 'Cover and refrigerate for 4 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يقطع الفلفل الأخضر شرائح والبصل أرباعا، ثم تشبك قطع الدجاج بالتبادل مع الخضروات في أسياخ.',
        textEn: 'Slice the green pepper and cut the onion into quarters, then thread the chicken pieces onto skewers, alternating with the vegetables.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يشوى الدجاج على الفحم، وقبل إنهاء الشواء تشبك حبات الطماطم لسرعة نضجها.',
        textEn: 'Grill over charcoal; thread the tomato pieces on just before the skewers finish, since they cook quickly.',
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
        title: 'الشيش طاووق',
        ingredients: ['½ كيلو دجاج مخلي', 'بصلة متوسطة', 'ملح', 'فلفل', 'بهار', 'ملعقة مستردة', '2 ملعقة خل', 'معصور ليمونة', '½ كوب زيت', 'فلفل اخضر', 'طماطم', 'بصل'],
        instructions: ['يقطع لحم الدجاج مكعبات ويتبل ببصلة متوسطة مفرية مع ملح وفلفل وبهار وملعقة مستردة مع 2 ملعقة خل وعصير ليمونة و الزيت.', 'يغطى ويترك في الثلاجة لمدة 4 ساعات.', 'يقطع الفلفل الأخضر شرائح والبصل أرباع ثم تشبك قطع الدجاج بالتبادل مع الخضروات في أسياخ.', 'يشوى الدجاج على الفحم وقبل إنهاء الشواء تشبك حبات الطماطم لسرعة نضجها.']
      }
    }
  },
  {
    id: 'meat-11',
    title: 'اللحم الفيليه أو صدور الدجاج',
    titleEn: 'Beef Fillet or Chicken Breast in Garlic-Parsley Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '35 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp11-1',
        name: 'لحم بتلو أو صدور دجاج',
        nameEn: 'Veal or chicken breast',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp11-2',
        name: 'بصل صغير',
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
        id: 'mp11-3',
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
        id: 'mp11-4',
        name: 'بقدونس أو فلفل أخضر',
        nameEn: 'Parsley or green pepper',
        standardAmount: 'قليل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp11-5',
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
      {
        id: 'mp11-6',
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
        id: 'mp11-7',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'حسب الحاجة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp11-8',
        name: 'خل وعصير ليمون وسمن',
        nameEn: 'Vinegar, lemon juice and ghee (extra step)',
        standardAmount: 'ملعقة خل - عصير ليمونة - 2 ملعقة سمن',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملعقة خل - عصير ليمونة - 2 ملعقة سمن'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp11-9',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '2 حبة، مقطعة مكعبات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 حبة، مقطعة مكعبات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يتبل اللحم أو الدجاج بالفلفل الأسود.',
        textEn: 'Season the meat or chicken with black pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر وعاء به 2 ملعقة زيت وبصلة صغيرة صحيحة، ونحمر فيه اللحم أو الدجاج.',
        textEn: 'Heat 2 tablespoons of oil with a whole small onion in a pot, and brown the meat or chicken in it.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحمر ملعقة الثوم المفري مع البقدونس المقطع قطعا صغيرة أو الفلفل الأخضر المقطع وقليل من الماء والملح، ويترك على درجة حرارة هادئة جدا، وكلما احتاج للماء يضاف له حتى ينضج ويتشرب تماما.',
        textEn: 'Brown the crushed garlic with finely chopped parsley or chopped green pepper, a little water and salt, then simmer over very low heat, adding water gradually as needed until fully cooked and absorbed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'طريقة إضافية: نضع على اللحم أو الدجاج ملعقة خل وعصير ليمونة و2 ملعقة سمن أو زيت وملح وفلفل، ونتركه على درجة حرارة هادئة جدا مع التقليب المستمر.',
        textEn: 'Additional method: add a tablespoon of vinegar, lemon juice, 2 tablespoons of ghee or oil, salt and pepper to the meat or chicken, and simmer over very low heat with constant stirring.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة إضافية بالخل والليمون والسمن',
        sourceDocs: ['doc1'],
        importance: 'variation'
      },
      {
        stepNumber: 5,
        text: 'كلما احتاج إلى الماء نضيفه تدريجيا حتى النضج، ثم ننشل اللحم الناضج.',
        textEn: 'Add water gradually whenever needed until fully cooked, then lift out the cooked meat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نحمر حبتين من البطاطس المقطعتين مكعبات، ثم نضعهما في الصوص حتى يتشرباه.',
        textEn: 'Brown two diced potatoes and add them to the sauce until they absorb its flavor.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'اللحم الفيليه أو صدور الدجاج',
        ingredients: ['1 كيلو  لحم بتلو أو 1 كيلو  صدور دجاج', 'بصلة صغيرة', 'ملعقة صغيرة  ثوم مفري قليل من البقدونس أو الفلفل الأخضر', 'زيت للتحمير', 'ملح', 'فلفل', 'ماء'],
        instructions: ['يتبل اللحم أو الدجاج بالفلفل الأسود.', 'نحضر وعاء به 2معلقة زيت وبصلة صغيرة صحيحة ونحمر فيه اللحم أو الدجاج.', 'نحمِر ملعقة الثوم المفري مع البقدونس المقطع قطعا صغيرة أو قطع الفلفل الأخضر وقليل من الماء والملح ، ويترك على درجة حرارة هادئة جدا وكلما احتاج للماء أضيف لها حتى تنضج وتتشرب تماما.', 'نضع على اللحم أو الدجاج ملعقة خل وعصير ليمونة و2 ملعقة سمن أو زيت وملح وفلفل ونتركه على درجه حرارة هادئة جدا مع التقليب المستمر.', 'كلما احتاج إلى الماء نضيفه تدريجيا حتى النضج ثم ننشل اللحم الناضج.', 'نحمر حبتين من البطاطس المقطعتان مكعبات ثم نضعها في الصوص حتى يتشربه.']
      }
    }
  },
  {
    id: 'meat-12',
    title: 'اللحم بالفلفل الأخضر',
    titleEn: 'Beef with Green Peppers',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '40 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp12-1',
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
        id: 'mp12-2',
        name: 'بصل كبير',
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
        id: 'mp12-3',
        name: 'فلفل أخضر',
        nameEn: 'Green peppers',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp12-4',
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
        id: 'mp12-5',
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
        id: 'mp12-6',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'حسب الحاجة',
        category: 'liquid',
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
        text: 'يقطع اللحم مع البصل والفلفل الأخضر شرائح.',
        textEn: 'Slice the meat along with the onion and green peppers.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يحمر اللحم في الزيت أو السمن ثم يرفع جانبا.',
        textEn: 'Brown the meat in oil or ghee, then set it aside.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف البصل ويشوح، ثم يضاف الفلفل الأخضر ويضافان للحم، ويتبلان بالملح والفلفل مع إضافة قليل من الماء كلما احتاج، مع تغطيته حتى النضج.',
        textEn: 'Add the onion and sauté, then add the green peppers, return the meat to the pot, and season with salt and pepper, adding a little water as needed, covered, until cooked through.',
        phase: 'cook',
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
        title: 'اللحم بالفلفل الأخضر',
        ingredients: ['½ كيلو لحم', 'بصلة كبيرة', '2 ثمرة فلفل أخضر', 'زيت أو سمن', 'ملح وفلفل', 'ماء'],
        instructions: ['يقطع اللحم مع البصل والفلفل الأخضر شرائح.', 'يحمر اللحم في الزيت أو السمن ثم يرفع جانبا.', 'يضاف البصل ويشوح ثم يضاف الفلفل الأخضر ويضافوا للحم ويتبلوا بالملح والفلفل مع إضافة قليل من الماء كلما احتاج مع تغطيته حتى النضج.']
      }
    }
  },
  {
    id: 'meat-13',
    title: 'كمونية اللحم',
    titleEn: 'Cumin-Spiced Beef',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '45 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp13-1',
        name: 'لحم',
        nameEn: 'Beef',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp13-2',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp13-3',
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
        id: 'mp13-4',
        name: 'بصل صغير صحيح',
        nameEn: 'Whole small onion',
        standardAmount: '1 بصلة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp13-5',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1.5 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp13-6',
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
      {
        id: 'mp13-7',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع اللحم قطعا صغيرة ويحمر في الزيت أو السمن.',
        textEn: 'Cut the meat into small pieces and brown it in oil or ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف له الثوم المفري حسب مقدار اللحم ثم يضاف الكمون، ويقلب حتى يصفر الثوم.',
        textEn: 'Add the crushed garlic in proportion to the meat, then add the cumin, and stir until the garlic turns golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف مقدار كوب ونصف ماء مع ملعقة الخل والبصلة الصحيحة، ويترك على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add a cup and a half of water with the tablespoon of vinegar and the whole onion, and simmer over low heat until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'كمونية اللحم',
        ingredients: ['1 كيلو لحم', '¼  رأس ثوم مفري', 'ملعقة كبيرة خل', 'بصلة صغيرة صحيحه', '½1 كوب ماء', '2 م زيت أو سمن', 'ملعقة صغيرة  كمون.'],
        instructions: ['يقطع اللحم قطعا صغيرة وتحمر في الزيت أو السمن.', 'يضاف له الثوم المفري حسب مقدار اللحم ثم يضاف الكمون ويقلبوا حتى يصفر الثوم.', 'يضاف مقدار واحد و نصف  كوب ماء مع ملعقة الخل والبصلة الصحيحة وتترك على درجة حرارة هادئه حتى النضج.']
      }
    }
  },
  {
    id: 'meat-14',
    title: 'اللحم بالدمعة',
    titleEn: 'Beef in Fresh Tomato Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '50 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp14-1',
        name: 'لحم',
        nameEn: 'Beef',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp14-2',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp14-3',
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
      {
        id: 'mp14-4',
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
        id: 'mp14-5',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '1/2 كيلو طماطم أو 2 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو طماطم أو 2 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp14-6',
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
        id: 'mp14-7',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع اللحم قطعا متوسطة ثم يحمر في الزيت أو السمن، ثم يضاف إليه الثوم المفري ويقلب حتى يصفر لونه، ثم يتبل بالملح والفلفل.',
        textEn: 'Cut the meat into medium pieces and brown it in oil or ghee, then add the crushed garlic and stir until golden, then season with salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تضرب الطماطم في الخلاط ثم تضاف إلى اللحم حتى ينضج قوامها.',
        textEn: 'Blend the tomatoes and add them to the meat until the sauce thickens and cooks down.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف الخل ويقلب جيدا، ثم تضاف حوالي 2 كوب ماء، ويترك على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add the vinegar and stir well, then add about 2 cups of water, and simmer over low heat until fully cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'اللحم بالدمعة',
        ingredients: ['1 كيلو  لحم', '¼ رأس ثوم مفري', '2 م زيت أو سمن', 'ملح وفلفل', '½ كيلو  طماطم أو 2 ملعقة صلصة', 'ملعقة كبيرة خل', '2 كوب ماء.'],
        instructions: ['يقطع اللحم قطعا متوسطة ثم يحمر في الزيت أو السمن ثم يضاف إليه الثوم المفري ويقلب حتى يصفر لونه ثم يتبل بالملح والفلفل.', 'تضرب الطماطم في الخلاط ثم تضاف إلى اللحم حتى يتم نضج الطماطم.', 'يضاف الخل ويقلب جيدا ثم إضافة حوالي 2 كوب ماء ويترك على درجة حرارة هادئة حتى النضج.']
      }
    }
  },
  {
    id: 'meat-15',
    title: 'اللحم المحمر',
    titleEn: 'Browned Beef in Onion-Lemon Glaze',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '45 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp15-1',
        name: 'لحم',
        nameEn: 'Beef',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp15-2',
        name: 'بصل كبير معصور',
        nameEn: 'Large onion, juiced',
        standardAmount: '1 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp15-3',
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
        id: 'mp15-4',
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
        id: 'mp15-5',
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
        id: 'mp15-6',
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
        text: 'يتبل اللحم بعصير البصلة والليمون أو الخل مع الملح والفلفل.',
        textEn: 'Marinate the meat in onion juice, lemon juice or vinegar, salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع اللحم المتبل في إناء به زيت أو سمن على درجة حرارة هادئة مع تغطيته حتى يتشرب ما به من ماء، ثم يضاف له قليل من الزيت أو السمن ويقلب حتى يحمر لونه، ثم تضاف كمية من الماء حتى النضج.',
        textEn: 'Place the marinated meat in a pot with oil or ghee over low heat, covered, until it absorbs its own liquid; add a little more oil or ghee and stir until browned, then add water until fully cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'اللحم المحمر',
        ingredients: ['1 كيلو لحم', 'بصلة كبيرة معصورة', 'عصير ليمونة أو ملعقة كبيرة خل', 'ملح وفلفل', 'ماء قليل', '2 ملعقة كبيرة زيت أو سمن.'],
        instructions: ['يتبل اللحم بعصير البصلة والليمون أو الخل مع الملح والفلفل.', 'يوضع اللحم المبتل في إناء به زيت أو سمن على درجة حرارة هادئة مع تغطيتها حتى تمتص الماء ثم يضاف لها قليل من الزيت أو السمن ويقلبوا حتى يحمر لونها ثم إضافة كمية من الماء حتى النضج.']
      }
    }
  },
  {
    id: 'meat-16',
    title: 'شرائح اللحم بالصلصة',
    titleEn: 'Beef Strips in Tomato-Milk Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '40 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp16-1',
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
        id: 'mp16-2',
        name: 'بصل متوسط',
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
        id: 'mp16-3',
        name: 'صلصة طماطم',
        nameEn: 'Tomato paste',
        standardAmount: '1 ملعقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp16-4',
        name: 'ملح وفلفل وبهارات',
        nameEn: 'Salt, pepper and mixed spices',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp16-5',
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
        id: 'mp16-6',
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
        id: 'mp16-7',
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
        text: 'يقطع اللحم طوليا كالأصابع ويتبل بالملح والفلفل والبهارات.',
        textEn: 'Cut the meat lengthwise into finger-like strips and season with salt, pepper and mixed spices.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يسخن الزيت أو السمن في إناء، ثم تضاف شرائح اللحم حتى يحمر لونها، ثم ترفع من الإناء.',
        textEn: 'Heat oil or ghee in a pot, add the meat strips until browned, then remove them from the pot.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'في نفس الإناء توضع بصلة مقطعة شرائح وتشوح، ثم تضاف شرائح اللحم مع ملعقة صلصة الطماطم، وتترك على درجة حرارة هادئة مع التغطية.',
        textEn: 'In the same pot, sauté sliced onion, then return the meat strips with the tomato paste, and simmer covered over low heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف الماء كلما احتاج اللحم حتى يقارب النضج.',
        textEn: 'Add water as needed until the meat is nearly cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يضاف نصف كوب اللبن إلى اللحم على حرارة هادئة لمدة 5 دقائق مع التقليب.',
        textEn: 'Add half a cup of milk and simmer over low heat for 5 minutes, stirring.',
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
        title: 'شرائح اللحم بالصلصة',
        ingredients: ['½ كيلو لحم', 'بصلة متوسطة', 'ملعقة صلصلة الطماطم', 'ملح', 'فلفل', 'بهارات', '½ كوب لبن', 'قليل من الماء', '2 ملعقة كبيرة زيت أو سمن.'],
        instructions: ['يقطع اللحم طوليا كالأصابع ويتبل بالملح والفلفل والبهارات.', 'يسخن الزيت أو السمن في إناء ثم تضاف شرائح اللحم حتى يحمر لونها ثم ترفع من الإناء.', 'في نفس الإناء توضع بصلة مقطعة شرائح وتشوح ثم تضاف شرائح اللحم مع ملعقة صلصة الطماطم وتترك على درجة حرارة هادئة مع التغطية.', 'يضاف الماء كلما احتاج اللحم حتى النضج تقريبا.', 'يضاف ½ كوب اللبن إلى اللحم على حرارة هادئة لمدة 5 دقائق مع التقليب.']
      }
    }
  },
  {
    id: 'meat-17',
    title: 'صدور الدجاج بالكريمة',
    titleEn: 'Chicken Breast in Cream Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp17-1',
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
        id: 'mp17-2',
        name: 'بصل متوسط مقطع',
        nameEn: 'Chopped medium onion',
        standardAmount: '2 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp17-3',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1 ملعقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp17-4',
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
        id: 'mp17-5',
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
      {
        id: 'mp17-6',
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
        id: 'mp17-7',
        name: 'كريمة',
        nameEn: 'Cream',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp17-8',
        name: 'مستردة',
        nameEn: 'Mustard',
        standardAmount: '1 ملعقة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp17-9',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يتبل الدجاج بالفلفل الأسود.',
        textEn: 'Season the chicken with black pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع الزيت أو السمن في إناء ونبدأ بتشويح الدجاج كله دفعة واحدة على درجة حرارة عالية، ونقلبه على الوجه الآخر ثم يرفع من الإناء.',
        textEn: 'Heat oil or ghee in a pot and sear all the chicken at once over high heat, turning it once, then remove it from the pot.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'في نفس الإناء نضع البصل المقطع صغيرا ثم ملعقة الثوم المفري ويشوحان، ثم نضيف كمية من الماء والملح حتى الغليان.',
        textEn: 'In the same pot, sauté the finely chopped onion and the crushed garlic, then add water and salt and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تقطع ثمرة فلفلة خضراء صغيرا وتخلط بنصف كوب كريمة وملعقة مستردة ويقلبان جيدا (يمكن استبدال الكريمة بملعقة كبيرة قشدة مذابة في قليل من اللبن).',
        textEn: 'Finely chop a green pepper and mix it with half a cup of cream and a tablespoon of mustard, stirring well (cream can be substituted with a tablespoon of clotted cream dissolved in a little milk).',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 5,
        text: 'نضع الدجاج المشوح في هذا الخليط ونرفعه في الإناء مع تغطيته على درجة حرارة هادئة حتى النضج.',
        textEn: 'Return the seared chicken to this mixture and simmer covered over low heat until cooked through.',
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
        title: 'صدور الدجاج بالكريمة',
        ingredients: ['1 كيلو صدور دجاج', '2 بصلة متوسطة مقطعة', '1 ملعقة ثوم مفري', 'ملح وفلفل', '2 ملعقة كبيرة زيت أو سمن', 'ثمرة فلفل أخضر', '½ كوب كريمة', 'ملعقة مستردة', 'مقدار قليل من الماء.'],
        instructions: ['يتبل الدجاج بالفلفل الأسود.', 'نضع الزيت أو السمن في إناء لدرجة التسخين ثم نبدأ في تشويح الدجاج كله دفعة واحدة على درجة حرارة عالية ونقلبه على الوجه الآخر ثم يرفع من الإناء.', 'في نفس الإناء نضع البصل المقطع صغيرا ثم ملعقة الثوم المفري ويشوحوا ثم نضيف كمية من الماء والملح حتى الغليان.', 'تقطع ثمرة فلفلة خضراء صغيرا وتخلط بنصف كوب كريمة وملعقة مستردة ويقلبوا جيدا. (يمكن استبدال الكريمة بملعقة كبيرة قشدة مذابة في قليل من اللبن).', 'نضع الدجاج المشوح في هذا الخليط ونرفعه في الإناء مع تغطيته على درجة حرارة هادئة حتى النضج.']
      }
    }
  },
  {
    id: 'meat-18',
    title: 'صدور الدجاج بالدقيق',
    titleEn: 'Flour-Dusted Chicken Breast in Tomato Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp18-1',
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
        id: 'mp18-2',
        name: 'دقيق للتتبيل',
        nameEn: 'Flour, for dusting',
        standardAmount: 'كمية تكفي',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'كمية تكفي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp18-3',
        name: 'كمون وكسبرة',
        nameEn: 'Cumin and coriander',
        standardAmount: '1 ملعقة صغيرة من كل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp18-4',
        name: 'بصل متوسط',
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
        id: 'mp18-5',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '3 فصوص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 فصوص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp18-6',
        name: 'ملح وفلفل وزعتر',
        nameEn: 'Salt, pepper and thyme',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp18-7',
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
        id: 'mp18-8',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يتبل الدجاج في الدقيق المخلوط بالكمون والكسبرة والملح.',
        textEn: 'Coat the chicken in flour mixed with cumin, coriander and salt.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمر في الزيت حتى يصير لونها بنيا وترفع من الإناء.',
        textEn: 'Brown in oil until golden, then remove from the pot.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'في نفس الإناء تشوح بصلة مقطعة قطعا صغيرة، ثم يضاف الثوم المفري والملح والفلفل والزعتر مع التقليب.',
        textEn: 'In the same pot, sauté finely chopped onion, then add the crushed garlic, salt, pepper and thyme, stirring.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تضاف عصير الطماطم أو صلصة الطماطم حتى يتسبك القوام، ثم يوضع الدجاج فوق الصلصة مع تغطية الإناء وإضافة قليل من الماء إن احتاج الأمر حتى النضج.',
        textEn: 'Add the tomato juice or tomato paste until it reduces to a sauce, then place the chicken over the sauce, cover, and add a little water if needed until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'قبل تمام النضج يمكن رش قليل من البقدونس المقطع.',
        textEn: 'Just before it finishes cooking, sprinkle over a little chopped parsley.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'صدور الدجاج بالدقيق',
        ingredients: ['1 كيلو صدور دجاج', 'كمية من الدقيق تكفى لتتبيل الدجاج', 'ملعقة صغيرة  كمون وملعقة صغيرة  كسبرة', 'بصلة متوسطة', '3 فصوص ثوم مفري', 'ملح وفلفل وزعتر', 'عصير كوب طماطم أو 2 ملعقة كبيرة صلصلة الطماطم', '2 ملعقة كبيرة زيت'],
        instructions: ['يتبل الدجاج في الدقيق المخلوط بالكمون والكسبرة والملح.', 'تحمر في الزيت حتى يصير لونها بنيا وترفع من الإناء.', 'في نفس الإناء تشوح بصلة مقطعة قطعا صغيرة ثم إضافة الثوم المفري والملح والفلفل والزعتر مع التقليب.', 'إضافة عصير الطماطم أو صلصة الطماطم حتى التسبيك ثم وضع الدجاج فوق الصلصة مع تغطية الإناء مع إضافة  قليل من الماء إذ احتاج الأمر حتى النضج.', 'قبل تمام النضج ممكن رش قليل من البقدونس المقطع.']
      }
    }
  },
  {
    id: 'meat-19',
    title: 'صدور الدجاج بالصوص',
    titleEn: 'Chicken Breast in White Milk Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '2 ساعة (تتبيل)',
    cookTime: '35 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp19-1',
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
        id: 'mp19-2',
        name: 'بصل كبير',
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
        id: 'mp19-3',
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
        id: 'mp19-4',
        name: 'حبهان مفري',
        nameEn: 'Crushed cardamom',
        standardAmount: '2 فص',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '2 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp19-5',
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
        id: 'mp19-6',
        name: 'ملح وفلفل وقرفة',
        nameEn: 'Salt, pepper and cinnamon',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp19-7',
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
        id: 'mp19-8',
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
        id: 'mp19-9',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '2 ملعقة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يتبل الدجاج بعصير نصف البصلة فقط مع الملح والفلفل، وتترك مغطاة في الثلاجة على الأقل ساعتين.',
        textEn: 'Marinate the chicken in the juice of half the onion with salt and pepper, covered in the refrigerator for at least 2 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع الدجاج في الدقيق مع تقليبه جيدا على الوجهين، ثم يحمر في الزيت حتى يصفر لونه ويرفع من الإناء.',
        textEn: 'Coat the chicken well in flour on both sides, then brown in oil until golden and remove from the pot.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط الثوم المفري والحبهان المفري بالملح والفلفل والقرفة، ثم يشوحان في نفس الزيت.',
        textEn: 'Mix the crushed garlic and crushed cardamom with salt, pepper and cinnamon, then sauté in the same oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تقطع نصف البصلة الباقية صغيرا وتشوح معهم.',
        textEn: 'Finely chop the remaining half onion and sauté it along with them.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تضاف كوب اللبن والماء حتى الغليان، ثم يوضع الدجاج المحمر في هذا السائل حتى النضج مع ملاحظة بقاء قليل من الصوص الأبيض.',
        textEn: 'Add the cup of milk and the water and bring to a boil, then return the browned chicken to this liquid until cooked through, keeping a little of the white sauce.',
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
        title: 'صدور الدجاج بالصوص',
        ingredients: ['1 كيلو صدور دجاج', 'بصلة كبيرة', '2 فص ثوم مفري', '2 فص حبهان مفري', '2 ملعقة كبيرة دقيق', 'الملح والفلفل', 'قليل من القرفة', 'كوب لبن', 'كوب ماء', '2 ملعقة زيت'],
        instructions: ['يتبل الدجاج بعصير نصف البصلة فقط مع الملح والفلفل وتترك مغطاة في الثلاجة على الأقل ساعتين.', 'يوضع الدجاج في الدقيق مع تقليبه جيدا على الوجهين ثم يحمر في الزيت حتى يصفر لونه ويرفع من الإناء.', 'يخلط الثوم المفري والحبهان المفري بالملح والفلفل والقرفة ثم يشوحوا في نفس الزيت.', 'تقطع نصف البصلة الباقية صغيرا وتشوح معهم.', 'إضافة كوب اللبن والماء حتى الغليان ثم نضع الدجاج المحمر في هذا السائل حتى النضج مع ملاحظة بقاء قليل من الصوص الأبيض.']
      }
    }
  },
  {
    id: 'meat-20',
    title: 'دجاج بالكاري',
    titleEn: 'Chicken Curry',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '35 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp20-1',
        name: 'دجاج',
        nameEn: 'Chicken',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp20-2',
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
        id: 'mp20-3',
        name: 'كاري',
        nameEn: 'Curry powder',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp20-4',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp20-5',
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
        text: 'يقطع الدجاج صغيرا ويشوح في زيت ساخن جدا مع تغطيته أثناء التحمير حتى يصفر لونه، ثم يرفع من الزيت.',
        textEn: 'Cut the chicken into small pieces and sauté in very hot oil, covered while browning, until golden, then lift out of the oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخلط الدقيق بالكاري ثم يضاف له تدريجيا 2 كوب ماء حتى يصير القوام متوسطا.',
        textEn: 'Mix the flour with the curry powder, then gradually add 2 cups of water until it reaches a medium consistency.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع الدجاج في هذه الخلطة وترفع على درجة حرارة هادئة مع تغطيتها حتى النضج.',
        textEn: 'Return the chicken to this mixture and simmer covered over low heat until cooked through.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'دجاج بالكاري',
        ingredients: ['1 كيلو دجاج', '2 ملعقة كبيرة دقيق', 'ملعقة كبيرة كاري', '2 كوب ماء', 'زيت'],
        instructions: ['يقطع الدجاج صغيرا ويشوح في زيت ساخن جدا مع تغطيته أثناء التحمير حتى يصفر لونه ثم يرفع من الزيت.', 'يخلط الدقيق بالكاري ثم يضاف لها تدريجيا 2كوب ماء حتى يصير السمك متوسطا.', 'يوضع الدجاج في هذه الخلطة وترفع على درجة حرارة هادئة مع تغطيتها حتى النضج.']
      }
    }
  },
  {
    id: 'meat-21',
    title: 'شاورمة اللحم',
    titleEn: 'Beef Shawarma with Tahini Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '35 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp21-1',
        name: 'لحم',
        nameEn: 'Beef',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp21-2',
        name: 'بصل متوسط',
        nameEn: 'Medium onion',
        standardAmount: '2 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp21-3',
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
        id: 'mp21-4',
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
        id: 'mp21-5',
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
        id: 'mp21-6',
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
        id: 'mp21-7',
        name: 'خل أو عصير ليمون',
        nameEn: 'Vinegar or lemon juice',
        standardAmount: '1 ملعقة كبيرة',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp21-8',
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
        id: 'mp21-9',
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
      {
        id: 'mp21-10',
        name: 'بقدونس',
        nameEn: 'Parsley',
        standardAmount: 'قليل',
        category: 'vegetable',
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
        text: 'يقطع اللحم شرائح صغيرة ويتبل بالملح والفلفل والخل أو الليمون.',
        textEn: 'Cut the meat into thin strips and season with salt, pepper and vinegar or lemon juice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تشوح شرائح اللحم المتبل في الزيت على درجة حرارة منخفضة وتترك حتى يصل نضجها إلى النصف مع تغطية الإناء.',
        textEn: 'Sauté the marinated meat strips in oil over low heat, covered, until about half cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يقطع البصل مربعات صغيرة مع الطماطم والفلفل الأخضر والثوم المفري والبقدونس المقطع أو المفري.',
        textEn: 'Dice the onion into small squares along with the tomato and green pepper, and add the crushed garlic and chopped parsley.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'توضع هذه التتبيلة على اللحم وتترك حتى النضج تماما.',
        textEn: 'Add this mixture to the meat and cook until fully done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نذيب 2 ملعقة كبيرة طحينة في ملعقة خل ثم نخففها تدريجيا بالماء حتى القوام المطلوب مع ملح وفلفل.',
        textEn: 'Dissolve 2 tablespoons of tahini in a tablespoon of vinegar, then thin it gradually with water to the desired consistency, and season with salt and pepper.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تسكب على اللحم وتقلب تقليبة واحدة وترفع من البوتاجاز.',
        textEn: 'Pour it over the meat, give it one stir, and remove from the heat.',
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
        title: 'شاورمة اللحم',
        ingredients: ['1 كيلو لحم', '2 بصلة متوسطة', 'ثمرة طماطم', 'ثمرة فلفلة خضراء', '2 فص ثوم مفري', '2 ملعقة كبيرة طحينة', 'ملعقة كبيرة خل أوعصير ليمونة', 'ملح وفلفل', 'زيت للتحمير', 'قليل من البقدونس'],
        instructions: ['يقطع اللحم شرائح صغيرة ويتبل بالملح والفلفل والخل أو الليمون.', 'تشوح شرائح اللحم المتبل في الزيت على درجة حرارة منخفضة وتترك حتى تنضح نصف  نضج مع تغطية الإناء.', 'يقطع البصل مربعات صغيرة مع الطماطم والفلفل والأخضر والثوم المفري والبقدونس المقطع أو المفري.', 'توضع هذه التتبيلة على اللحم وتترك حتى النضج تماما.', 'نذيب 2 ملعقة كبيرة طحينة في ملعقة خل ثم نخففها تدريجيا بالماء حتى السمك المطلوب مع ملح وفلفل.', 'تسكب على اللحم وتقلب تقليبه واحدة وترفع من البوتاجاز.']
      }
    }
  },
  {
    id: 'meat-22',
    title: 'شاورمة بخلطة سبايس',
    titleEn: 'Shawarma with Spice-Mix Packet',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '35 دقيقة',
    servings: '3-4 أفراد',
    masterIngredients: [
      {
        id: 'mp22-1',
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
        id: 'mp22-2',
        name: 'خلطة شاورمة جاهزة',
        nameEn: 'Ready-made shawarma spice packet',
        standardAmount: '1 كيس',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 كيس'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp22-3',
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
        id: 'mp22-4',
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
        id: 'mp22-5',
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
        id: 'mp22-6',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'ما يكفي للتغطية',
        category: 'liquid',
        sourceVariations: {
          doc1: 'ما يكفي للتغطية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع اللحم رفيعا كالأصابع، ثم يوضع في إناء به زيت على درجة حرارة هادئة مع تغطيته حتى يتشرب تماما ما به من ماء بدون أية توابل.',
        textEn: 'Cut the meat into thin, finger-like strips, then place it in a pot with oil over low heat, covered, without any seasoning, until it fully absorbs its own liquid.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف ماء يكفي لتغطيته، وعند تشرب اللحم تقريبا ثلاثة أرباع كمية الماء، تضاف خلطة السبايس ويقلب جيدا.',
        textEn: 'Add enough water to cover it, and once the meat has absorbed about three-quarters of the water, add the spice packet and stir well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقطع الطماطم والفلفل الأخضر قطعا صغيرة ثم تضاف إلى اللحم مع تقليبه تقليبة واحدة فقط.',
        textEn: 'Cut the tomato and green pepper into small pieces and add them to the meat with just one stir.',
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
        title: 'شاورمة بخلطة سبايس',
        ingredients: ['½ كيلو لحم', 'كيس من خلطة الشاورمة', 'ثمرة طماطم', 'ثمرة فلفله خضراء', '2 ملعقة زيت', 'ماء يكفى لتغطيته'],
        instructions: ['يقطع اللحم رفيعا كالأصابع ثم نضعه في إناء به زيت على درجة حرارة هادئة مع تغطيته حتى يتشرب تماما ما به من ماء بدون أية توابل.', 'إضافة ماء يكفى لتغطيته – وعند تشرب اللحم تقريبا ثلاثة أرباع  كمية الماء نضيف له خلطة السبايس ونقلبه جيدا.', 'تقطع الطماطم والفلفل الأخضر قطعا صغيرة ثم تضاف إلى اللحم مع تقليبه فقط تقلبيه واحدة.']
      }
    }
  },
  {
    id: 'meat-23',
    title: 'البفتيك أو البانيه',
    titleEn: 'Beefsteak or Breaded Cutlets (Bifteck / Panné)',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '1 ساعة (تتبيل)',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp23-1',
        name: 'لحم بتلو أو صدور دجاج',
        nameEn: 'Veal or chicken breast',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp23-2',
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
        id: 'mp23-3',
        name: 'عصير ليمون وبصل',
        nameEn: 'Lemon juice and onion juice',
        standardAmount: 'عصير 2 ليمونة وعصير 2 بصلة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'عصير 2 ليمونة وعصير 2 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp23-4',
        name: 'ملح وفلفل وكسبرة وزعتر',
        nameEn: 'Salt, pepper, coriander and thyme',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp23-5',
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
        id: 'mp23-6',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '3 بيضات أو أقل',
        category: 'other',
        sourceVariations: {
          doc1: '3 بيضات أو أقل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp23-7',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp23-8',
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
        text: 'تدق قطع اللحم أو الدجاج المخلي جيدا، ثم تتبل بالملح والفلفل والكسبرة والثوم المفري والزعتر مع عصير البصل والليمون، أو باستخدام أي من تتبيلات التحمير.',
        textEn: 'Pound the boneless meat or chicken pieces well, then season with salt, pepper, coriander, crushed garlic and thyme, along with onion juice and lemon juice (or any of the frying marinades).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع في الثلاجة لمدة ساعة على الأقل.',
        textEn: 'Refrigerate for at least an hour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تنزع من التتبيلة وتغطى بالدقيق، ثم توضع في البيض المخفوق بالملح والفلفل، ثم توضع في البقسماط، وتحمر في الزيت.',
        textEn: 'Lift out of the marinade and coat in flour, then dip in egg beaten with salt and pepper, then coat in breadcrumbs, and fry in oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يمكن إضافة الخل والحبهان المدقوق وكمية صغيرة من اللبن للتتبيلة السابقة.',
        textEn: 'Vinegar, crushed cardamom, and a small amount of milk can be added to the marinade above.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'إضافة للتتبيلة',
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
        title: 'البفتيك أو البانيه',
        ingredients: ['1 كيلو لحم بتلو أو 1 كيلو صدور دجاج', '1 فص ثوم مفري', 'عصير 2 ليمونة', 'عصير 2بصلة', 'ملح وفلفل وكسبرة وزعتر', '2 ملعقة كبيرة دقيق', '3 بيضات أو أقل', 'بقسماط', 'زيت للتحمير'],
        instructions: ['تدق قطع اللحم أو الدجاج المخلي جيدا ثم تتبل بالملح والفلفل والكسبرة والثوم المفري والزعتر مع عصير البصل والليمون أو باستخدام أي من تتبيلات التحمير.', 'توضع في الثلاجة لمدة ساعة على الأقل .', 'تنزع من التتبيلة وتغطى بالدقيق ثم توضع في البيض المخفوق بالملح والفلفل ثم توضع في البقسماط وتحمر في الزيت .', 'يمكن إضافة الخل والحبهان المدقوق وكمية صغيرة من اللبن للتتبيلة السابقة.']
      }
    }
  },
  {
    id: 'meat-24',
    title: 'صدور الدجاج بالصويا',
    titleEn: 'Chicken Breast in Soy Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '3 ساعات (تتبيل)',
    cookTime: '15 دقيقة',
    servings: '3-4 أفراد',
    masterIngredients: [
      {
        id: 'mp24-1',
        name: 'صدور دجاج',
        nameEn: 'Chicken breasts',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp24-2',
        name: 'بصل مفري',
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
        id: 'mp24-3',
        name: 'صلصة الصويا',
        nameEn: 'Soy sauce',
        standardAmount: '2 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp24-4',
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
        id: 'mp24-5',
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
        id: 'mp24-6',
        name: 'دقيق أو نشا',
        nameEn: 'Flour or cornstarch',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp24-7',
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
        text: 'تقطع الدجاج إلى شرائح رفيعة وتتبل بالبصل والملح والفلفل والبهار، ثم تضاف لها صلصة الصويا حسب كمية الدجاج مع عصير الليمون أو الخل.',
        textEn: 'Cut the chicken into thin slices and marinate with onion, salt, pepper and mixed spice, then add soy sauce in proportion to the chicken, along with lemon juice or vinegar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع في الثلاجة لمدة 3 ساعات.',
        textEn: 'Refrigerate for 3 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر الدقيق أو النشا ونضع فيه الدجاج المتبل ثم يحمر في الزيت.',
        textEn: 'Coat the marinated chicken in flour or cornstarch, then fry it in oil.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'صدور الدجاج بالصويا',
        ingredients: ['½ كيلو صدور دجاج', 'بصلة مفرية', '2 ملعقة كبيرة صلصة الصويا', 'عصير ليمونة أو ملعقة كبيرة خل', 'ملح', 'فلفل', 'بهار', '2 ملعقة كبيرة دقيق أو نشا', 'زيت'],
        instructions: ['تقطع الدجاج إلى شرائح رفيعة وتتبل بالبصل والملح والفلفل والبهار ثم يضاف لها صلصة الصويا حسب كمية الدجاج مع عصير الليمون أو الخل.', 'توضع في الثلاجة لمدة 3 ساعات.', 'نحضر الدقيق أو النشا ونضع فيها الدجاج المتبل ثم يحمر في الزيت.']
      }
    }
  },
  {
    id: 'meat-25',
    title: 'رسولز الدجاج',
    titleEn: 'Chicken Rissoles',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp25-1',
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
        id: 'mp25-2',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: '4 ملعقة كبيرة، وأكثر للتغطية',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة، وأكثر للتغطية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp25-3',
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
        id: 'mp25-4',
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
        id: 'mp25-5',
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
        id: 'mp25-6',
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
        text: 'تفرم الدجاجة ويضاف إليها البقسماط، وتتبل بالملح والفلفل وعصير الليمون، أو باستخدام أي من تتبيلات التحمير.',
        textEn: 'Mince the chicken and add breadcrumbs, then season with salt, pepper and lemon juice (or any of the frying marinades).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تعجن بالبيض وتقلب جيدا حتى تصير عجينة يابسة.',
        textEn: 'Knead in the egg and mix well until it forms a firm dough.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تكوَر أو تصَبع حسب الذوق.',
        textEn: 'Shape into balls or fingers, as preferred.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تغمس في البيض ثم البقسماط ثم تحمر في الزيت.',
        textEn: 'Dip in egg, then breadcrumbs, and fry in oil.',
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
        title: 'رسولز الدجاج',
        ingredients: ['1 دجاجة مسلوقة', '4 ملعقة كبيرة بقسماط', 'ملح', 'فلفل', 'عصير ليمونة', '2 بيضة', 'بقسماط', 'زيت للتحمير'],
        instructions: ['تفرم الدجاجة ويضاف إليها البقسماط وتتبل بالملح والفلفل وعصير الليمونة أو باستخدام أي من تتبيلات التحمير.', 'تعجن بالبيض وتقلب جيدا حتى تصير عجينة يابسة.', 'تكوَر أو تصَبع حسب الذوق.', 'تغمس في البيض ثم البقسماط ثم تحمر في الزيت.']
      }
    }
  },
  {
    id: 'meat-26',
    title: 'ضلع الدجاج المفري',
    titleEn: 'Breaded Chicken Croquette "Cutlets" (Béchamel-Style)',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '30 دقيقة (+تبريد)',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp26-1',
        name: 'دجاجة ناضجة مفرية',
        nameEn: 'Cooked shredded chicken',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp26-2',
        name: 'بصل صغير مفري',
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
        id: 'mp26-3',
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
        id: 'mp26-4',
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
        id: 'mp26-5',
        name: 'ملح وفلفل وجوزة الطيب',
        nameEn: 'Salt, pepper and nutmeg',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp26-6',
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
        id: 'mp26-7',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '1 بيضة للخليط + 1 للتغليف',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة للخليط + 1 للتغليف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp26-8',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp26-9',
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
        text: 'تشوح بصلة صغيرة مفرية في الزيت أو السمن، ثم يضاف لها الدقيق حتى يصفر فقط، وترفع من الحرارة.',
        textEn: 'Sauté the grated small onion in oil or ghee, then add the flour until just golden, and remove from the heat.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف لها بدون حرارة كوب اللبن مع الملح والفلفل.',
        textEn: 'Off the heat, whisk in the cup of milk with salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع ثانية على درجة حرارة متوسطة حتى يغلظ القوام.',
        textEn: 'Return to medium heat until it thickens into a béchamel.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يتبل لحم الدجاج الناضج المفري بالملح والفلفل وجوزة الطيب ويخلط بالصلصة البيضاء (الباشاميل).',
        textEn: 'Season the shredded cooked chicken with salt, pepper and nutmeg, and mix it into the béchamel.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرفع الإناء من الحرارة وتضاف البيضة وتقلب جيدا.',
        textEn: 'Remove the pot from the heat, beat in the egg, and mix well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يترك الخليط حتى يبرد تماما ويقسم إلى 6 قطع ثم يشكل على هيئة ضلع الكستليته.',
        textEn: 'Let the mixture cool completely, divide into 6 portions, and shape each like a cutlet.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تغمس القطع في قليل من الدقيق ثم تغطى بالبيض ثم البقسماط وتحمر في الزيت.',
        textEn: 'Dip the pieces lightly in flour, then coat in egg, then breadcrumbs, and fry in oil.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'ضلع الدجاج المفري',
        ingredients: ['¼ كيلو دجاجة ناضجة مفرية', 'بصلة صغيرة مفرية', 'ملعقة كبيرة دقيق', '½ كوب صلصة بيضاء', 'ملح  فلفل', 'جوزة الطيب', 'بقسماط', '1 بيضة', 'زيت للتحمير', 'ملعقة كبيرة سمن', 'كوب لبن', 'ملعقة كبيرة دقيق'],
        instructions: ['تشوح بصلة صغيرة مفرية في الزيت أو السمن ثم يضاف لها الدقيق حتى يصفر فقط وترفع من الحرارة.', 'يضاف لها بدون حرارة كوب اللبن مع الملح والفلفل.', 'يرفع ثانية على درجة حرارة متوسطة حتى يغلظ القوام.', 'يتبل لحم الدجاج الناضج المفري بالملح والفلفل وجوزة الطيب ويخلط بالصلصة البيضاء ( الباشامل ).', 'يرفع الإناء من الحرارة و تضاف البيضة و تقلب جيدا.', 'يترك الخليط حتى يبرد تماما و يقسم إلى 6 قطع ثم يشكل على هيئة ضلع الكستليته.', 'تغمس القطع في قليل من الدقيق ثم تغطى بالبيض ثم البقسماط وتحمر في الزيت.']
      }
    }
  },
  {
    id: 'meat-27',
    title: 'الدجاج بالدقيق والبيض',
    titleEn: 'Twice-Fried Chicken in Flour and Egg',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '2 ساعة (تتبيل)',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp27-1',
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
        id: 'mp27-2',
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
        id: 'mp27-3',
        name: 'ملح وفلفل وكسبرة وزعتر وحبهان',
        nameEn: 'Salt, pepper, coriander, thyme and crushed cardamom',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp27-4',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp27-5',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '2 ملعقة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp27-6',
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
        id: 'mp27-7',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp27-8',
        name: 'زيت للتحمير',
        nameEn: 'Oil, for deep-frying',
        standardAmount: 'غزير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'غزير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع الدجاج قطعا صغيرة ويتبل في دقيق وبيض ولبن مع تقليبهم جيدا وإضافة الفلفلة المضروبة في الخلاط ثم التوابل.',
        textEn: 'Cut the chicken into small pieces and coat in a mix of flour, egg and milk, stirring well, adding the blended green pepper and the spices.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع في الثلاجة لمدة ساعتين.',
        textEn: 'Refrigerate for 2 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تغمس في البقسماط وتقلى في زيت غزير مرة واحدة كل القطع ثم ترفع من الحرارة، وتقلى مرة ثانية حتى يصير لونها أصفر.',
        textEn: 'Coat in breadcrumbs and deep-fry all the pieces once, then lift out; fry a second time until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يقدم معها صلصة الثومية (انظري قسم السلطات).',
        textEn: 'Serve with garlic sauce (toumeya) — see the salads section.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 5,
        text: 'بعد سلق الدجاجة وتقطيعها إلى أرباع تدق خفيفا، ثم تغمس في دقيق به قليل من البيكينج باودر والبهارات والمستردة وقليل من اللبن أو الماء، وتحمر في الزيت.',
        textEn: 'After boiling the chicken and cutting it into quarters, pound lightly, then dip in flour mixed with a little baking powder, spices, mustard and a little milk or water, and fry in oil.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة إضافية',
        sourceDocs: ['doc1'],
        importance: 'variation'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الدجاج بالدقيق والبيض',
        ingredients: ['دجاجة مسلوقة', 'ثمرة فلفلة خضراء', 'ملح', 'فلفل', 'كسبرة', 'زعتر', 'حبهان مدقوق', 'بقسماط', '2 ملعقة دقيق', '2 بيضة', '2 ملعقة كبيرة لبن', 'زيت للتحمير'],
        instructions: ['يقطع الدجاج قطع صغيرة ويتبل في دقيق وبيض ولبن مع تقليبهم جيدا وإضافة الفلفلة المضروبة في الخلاط ثم التوابل.', 'توضع في الثلاجة لمدة ساعتين.', 'تغمس في البقسماط وتقلى في زيت غزير مرة واحدة كل القطع ثم ترفع من الحرارة – وتقلى مرة ثانية حتى يصير لونها أصفر.', 'يقدم معها صلصة الثومية (انظري قسم السلطات).', 'بعد سلق الدجاجة و تقطيعها الى إربع تدق خفيفا.', 'تغمس في دقيق به قليل من البيكينج باودر و البهارات و المستردة و قليل من اللبن أو الماء.', 'تحمر في الزيت.']
      }
    }
  },
  {
    id: 'meat-28',
    title: 'دجاج الكنتاكي',
    titleEn: 'Kentucky-Style Fried Chicken',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '3 ساعات (تتبيل)',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp28-1',
        name: 'دجاجة مقطعة',
        nameEn: 'Cut-up chicken',
        standardAmount: '1 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp28-2',
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
        id: 'mp28-3',
        name: 'بصل متوسط',
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
        id: 'mp28-4',
        name: 'نشا',
        nameEn: 'Cornstarch',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp28-5',
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
        id: 'mp28-6',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp28-7',
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
        id: 'mp28-8',
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
        text: 'تتبل قطع الدجاج بالبصل المدعوك بالملح والفلفل والبهار.',
        textEn: 'Marinate the chicken pieces in grated onion mashed with salt, pepper and mixed spice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تغمس قطع الدجاج في الدقيق المخلوط بالنشا ثم تدخل الثلاجة لمدة 3 ساعات.',
        textEn: 'Coat the chicken pieces in flour mixed with cornstarch, then refrigerate for 3 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'توضع في البيض ثم البقسماط، وتدخل مرة ثانية في الثلاجة حتى تتماسك، ثم تحمر في الزيت.',
        textEn: 'Dip in egg, then breadcrumbs, refrigerate again until firm, then fry in oil.',
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
        title: 'دجاج الكنتاكي',
        ingredients: ['1 دجاجة مقطعة', '2 ملعقة كبيرة دقيق', 'بصلة متوسطة', '2 ملعقة كبيرة نشا', '2 بيضة', 'بقسماط', 'ملح', 'فلفل', 'زيت للتحمير'],
        instructions: ['تتبل قطع الدجاج بالبصل المدعوك بالملح والفلفل والبهار.', 'تغمس قطع الدجاج في الدقيق المخلوط بالنشا ثم تدخل الثلاجة لمدة 3 ساعات.', 'توضع في البيض ثم البقسماط وتدخل مرة ثانية في الثلاجة حتى تتماسك ثم تحمر في الزيت.']
      }
    }
  },
  {
    id: 'meat-29',
    title: 'دجاج التكا',
    titleEn: 'Chicken Tikka-Style Fried Chicken',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '1 ساعة (تتبيل)',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp29-1',
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
        id: 'mp29-2',
        name: 'بصل مفري',
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
        id: 'mp29-3',
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
        id: 'mp29-4',
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
        id: 'mp29-5',
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
        id: 'mp29-6',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp29-7',
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
        id: 'mp29-8',
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
        text: 'تقطع الدجاجة إلى أرباع بعد سلقها ويعصر عليها بصلة مدعوكة بالملح والفلفل والبهار مع الليمونة.',
        textEn: 'Quarter the chicken after boiling and pour over it grated onion mashed with salt, pepper, mixed spice and lemon juice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تدخل الثلاجة لمدة ساعة على الأقل حتى تتبل جيدا.',
        textEn: 'Refrigerate for at least an hour until well marinated.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نخلط 2 بيضة مع اللبن والملح والفلفل والبهار ثم نضيف الدقيق تدريجيا بمضرب البيض.',
        textEn: 'Whisk 2 eggs with the milk, salt, pepper and mixed spice, then whisk in the flour gradually.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضع الدجاج في الخليط ونتركه حتى يتشرب قليلا.',
        textEn: 'Dip the chicken in the batter and let it soak briefly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يحمر في الزيت على الوجهين.',
        textEn: 'Fry in oil on both sides.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يتبل الدجاج النيء بعصير الليمون ويدخل الثلاجة يوما كاملا، ثم نعمل خلطة من 2 ملعقة كبيرة دقيق وقليل من اللبن وبودرة الثوم، وتغمس قطع الدجاج فيها وتحمر جيدا في الزيت.',
        textEn: 'Marinate the raw chicken in lemon juice and refrigerate for a full day, then make a batter of 2 tablespoons of flour, a little milk and garlic powder; dip the chicken pieces in it and fry well in oil.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة إضافية بالثوم',
        sourceDocs: ['doc1'],
        importance: 'variation'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'دجاج التكا',
        ingredients: ['1 دجاجة مسلوقة', 'بصلة مفرية', 'عصير ليمونة', 'ملح', 'فلفل', 'بهار', '2 بيضة', '2 ملعقة كبيرة لبن', '2 ملعقة كبيرة دقيق', 'زيت للتحمير'],
        instructions: ['تقطع الدجاجة إلى إربع بعد سلقها ويعصر عليها بصلة مدعوكة بالملح والفلفل والبهار مع الليمونة.', 'تدخل الثلاجة لمدة ساعة على الأقل حتى تتبل جيدا.', 'نخلط 2 بيضة مع اللبن والملح والفلفل والبهار ثم نضيف الدقيق تدريجيا بمضرب البيض.', 'نضع الدجاج في الخليط ونتركه حتى يتشرب قليلا.', 'يحمر في الزيت على الوجهين.', 'يتبل الدجاج النيء بعصير الليمون ويدخل الثلاجة يوما كاملا.', 'نعمل خلطة مكونة من 2 ملعقة كبيرة دقيق وقليل من اللبن وبودرة الثوم.', 'تغمس قطع الدجاج في الخلطة وتحمر جيدا في الزيت.']
      }
    }
  },
  {
    id: 'meat-30',
    title: 'الهامبورجر',
    titleEn: 'Homemade Beef Burger Patties',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '20 دقيقة',
    cookTime: '10 دقائق',
    servings: '6-8 أقراص',
    masterIngredients: [
      {
        id: 'mp30-1',
        name: 'لحم مفروم',
        nameEn: 'Minced beef',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp30-2',
        name: 'بصل متوسط مفري',
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
        id: 'mp30-3',
        name: 'فلفل أخضر مقطع',
        nameEn: 'Chopped green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp30-4',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '3 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp30-5',
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
        id: 'mp30-6',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '4 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp30-7',
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
        id: 'mp30-8',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تشوح البصلة في الزيت ثم نضيف لها الفلفلة والثوم حتى يصفر اللون.',
        textEn: 'Sauté the onion in oil, then add the green pepper and garlic until golden.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يعجن اللحم المفروم بالبيض والدقيق ويخلطان جيدا ويتبل.',
        textEn: 'Knead the minced beef with the egg and flour, mix well, and season.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف خليط البصل المشوح في الزيت إلى اللحم المفروم ويعجن جيدا.',
        textEn: 'Add the sautéed onion mixture to the minced beef and knead well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تكوَر العجينة ثم تفرد على شكل دوائر، ثم تغمس في الدقيق.',
        textEn: 'Shape the mixture into balls, flatten into patties, and coat in flour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تحمَر في الزيت الساخن جدا لمدة ثوانٍ فقط، وتقلب على الوجه الآخر حتى تتماسك فقط.',
        textEn: 'Sear in very hot oil for just a few seconds, flipping once, only until firmed up.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تغطى الأقراص بعد تحميرها البسيط بطبقات من الفويل وترص فوق بعضها داخل الفريزر حتى تتجمد. بعد خروجها من الفريزر تدهن صينية دهنا بسيطا بالزيت وترص فيها الأقراص، ثم تدخل الفرن حتى تسخن.',
        textEn: 'After the brief searing, wrap the patties in layers of foil and stack them in the freezer until frozen. When ready to use, lightly oil a tray, arrange the patties on it, and bake until heated through.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'للتخزين والتسخين',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 7,
        text: 'أو يمكن أيضا دهن صينية بعد تحمير الأقراص بالزيت، وفرش قاع الصينية بالفلفل المقطع شرائح، ثم رص الأقراص عليها وإدخالها الفرن حتى النضج.',
        textEn: 'Alternatively, after searing, oil a tray, line its base with sliced peppers, arrange the patties on top, and bake until fully cooked.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة أخرى للتسخين',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'الهامبورجر',
        ingredients: ['½ كيلو لحم مفروم', 'بصلة متوسطة مفرية', 'ثمرة فلفلة خضراء مقطعة', '3 فص ثوم مفري', '2 بيضة', '4 ملعقة كبيرة دقيق', 'ملح', 'فلفل', 'بهار', '2 ملعقة كبيرة زيت'],
        instructions: ['تشوح البصلة في الزيت ثم نضيف لها الفلفلة والثوم حتى يصفر اللون.', 'يعجن اللحم المفروم بالبيض والدقيق ويخلطوا جيدا ويتبلوا.', 'يضاف خليط البصل المشوح في الزيت إلى اللحم المفروم ويعجنوا جيدا.', 'تكوَر العجينة ثم تفرد على شكل دوائر ثم تغمس في الدقيق.', 'تحمَر في الزيت الساخن جدا لمدة ثواني فقط وتقلب على الوجه الآخر حتى تتماسك فقط.', 'تغطى الدوائر بعد تحميرها البسيط بطبقات من الفويل وترص فوق بعضها داخل الفريزر حتى تتجمد.', 'بعد خروجها من الفريزر تدهن صينية دهنا بسيطا بالزيت وترص فيها الدوائر ثم تدخل الفرن حتى تسخن.', 'تدهن صينية بعد تحمير الدوائر بالزيت ويفرش قاع الصينية بالفلفل المقطع الى شرائح ثم ترص عليها الدوائر.', 'تدخل الفرن حتى النضج.']
      }
    }
  },
  {
    id: 'meat-31',
    title: 'هامبورجر الدجاج',
    titleEn: 'Chicken Burger Patties',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '2 ساعة (تبريد)',
    cookTime: '10 دقائق',
    servings: '4-6 أقراص',
    masterIngredients: [
      {
        id: 'mp31-1',
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
        id: 'mp31-2',
        name: 'بصل متوسط مفري',
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
        id: 'mp31-3',
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
        id: 'mp31-4',
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
        id: 'mp31-5',
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
        id: 'mp31-6',
        name: 'ملح وفلفل وبهار وقرفة',
        nameEn: 'Salt, pepper, mixed spice and cinnamon',
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
        text: 'تخلط الدجاجة بعد سلقها بالبصلة والثوم المفري والبيضة والزيت، ويتبلوا بالتوابل أو باستخدام أي من تتبيلات التحمير، وتقطع دوائر.',
        textEn: 'Shred the boiled chicken and mix with the onion, crushed garlic, egg and oil, season with the spices (or any frying marinade), and shape into patties.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'بعد خلطها جيدا تغطى وتوضع داخل الثلاجة لمدة ساعتين.',
        textEn: 'After mixing well, cover and refrigerate for 2 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدهن طاسة تيفال بالزيت الخفيف وترص فيها أقراص الهامبورجر على درجة حرارة متوسطة مع التقليب حتى النضج.',
        textEn: 'Lightly oil a non-stick pan and cook the patties over medium heat, turning, until done.',
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
        title: 'هامبورجر الدجاج',
        ingredients: ['دجاجة مسلوقة', 'بصلة متوسطة مفرية', '2 فص ثوم مفري', 'بيضة', '2 ملعقة كبيرة زيت', 'ملح', 'فلفل', 'بهار', 'قرفه'],
        instructions: ['تخلط الدجاجة بعد سلقها بالبصلة والثوم المفري والبيضة والزيت ويتبلوا بالتوابل أو باستخدام أي من تتبيلات التحمير وتقطع دوائر.', 'بعد خلطها جيدا تغطى وتوضع داخل الثلاجة لمدة ساعتين.', 'تدهن طاسة تيفال بالزيت الخفيف وترص فيها أقراص الهامبورجر على درجة حرارة متوسطة مع التقليب حتى النضج.']
      }
    }
  },
  {
    id: 'meat-32',
    title: 'كفتة الدجاج',
    titleEn: 'Chicken Kofta',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '1 ساعة (تبريد)',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp32-1',
        name: 'بواقي دجاجة مفرومة ناضجة',
        nameEn: 'Minced cooked leftover chicken',
        standardAmount: 'حسب الكمية المتاحة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الكمية المتاحة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp32-2',
        name: 'بصل صغير مفري',
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
        id: 'mp32-3',
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
        id: 'mp32-4',
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
        id: 'mp32-5',
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
        id: 'mp32-6',
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
        id: 'mp32-7',
        name: 'زيت أو سمن للتحمير',
        nameEn: 'Oil or ghee, for frying',
        standardAmount: 'غزير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'غزير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تعجن بواقي الدجاجة المفرومة بالبصلة والملح والفلفل والليمون، وتترك داخل الثلاجة لمدة ساعة.',
        textEn: 'Knead the minced leftover chicken with the grated onion, salt, pepper and lemon juice, and refrigerate for an hour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تشكل على هيئة أصابع أو دوائر.',
        textEn: 'Shape into fingers or patties.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تغطى بالدقيق ثم تغمس في البيض المخفوق ثم البقسماط.',
        textEn: 'Coat in flour, then dip in beaten egg, then coat in breadcrumbs.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تحمر في زيت أو سمن غزير.',
        textEn: 'Deep-fry in oil or ghee.',
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
        title: 'كفتة الدجاج',
        ingredients: ['بواقي دجاجة مفرومة ناضجة', 'بصلة صغيرة مفرية', 'ملح', 'فلفل', 'عصير ليمونة', 'بيضة', 'دقيق', 'بقسماط', 'زيت أو سمن للتحمير'],
        instructions: ['تعجن بواقي الدجاجة المفرومة بالبصلة والملح والفلفل والليمون وتترك داخل الثلاجة لمدة ساعة.', 'تشكل على هيئة أصابع أو دوائر.', 'تغطى بالدقيق ثم تغمس في البيض المخفوق ثم البقسماط.', 'تحمر في زيت أو سمن غزير.']
      }
    }
  },
  {
    id: 'meat-33',
    title: 'كفتة اللحم بالخبز البلدي',
    titleEn: 'Beef Kofta with Baladi Bread',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp33-1',
        name: 'لحم مفروم',
        nameEn: 'Minced beef',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp33-2',
        name: 'رغيف خبز بلدي',
        nameEn: 'Baladi bread loaf',
        standardAmount: '1 رغيف',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 رغيف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp33-3',
        name: 'بصل متوسط',
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
        id: 'mp33-4',
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
        id: 'mp33-5',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '1-2 بيضة + 1 للتغليف',
        category: 'other',
        sourceVariations: {
          doc1: '1-2 بيضة + 1 للتغليف'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp33-6',
        name: 'ثوم وبقدونس مفري',
        nameEn: 'Crushed garlic and chopped parsley',
        standardAmount: '2 فص ثوم وقليل من البقدونس',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 فص ثوم وقليل من البقدونس'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp33-7',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp33-8',
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
        text: 'ينقع الرغيف البلدي في ماء قليل حتى يلين ثم يعصر جيدا من الماء.',
        textEn: 'Soak the baladi bread in a little water until soft, then squeeze out the water well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخلط باللحم المفروم جيدا ثم يتبل بالملح والفلفل.',
        textEn: 'Mix it well with the minced beef, then season with salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تبشر البصلة وتعصر من مائها جيدا ويؤخذ البشر فقط دون الماء، وتخلط جيدا باللحم، ثم يضاف البيض حسب سمك العجينة مع الثوم المفري والبقدونس ويعجنوا جيدا.',
        textEn: 'Grate the onion and squeeze out its juice well, using only the grated flesh; mix it well into the meat, then add egg according to the dough\'s thickness along with the crushed garlic and parsley, and knead well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تكوَر صغيرا ثم تبطط على هيئة دوائر.',
        textEn: 'Shape into small balls, then flatten into patties.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'توضع الدوائر أولا في البقسماط خفيفا جدا، ثم بالفرشة يدهن الوجهان بالبيض.',
        textEn: 'Dust the patties very lightly in breadcrumbs first, then brush both sides with egg.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تحمر في الزيت.',
        textEn: 'Fry in oil.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'كفتة اللحم بالخبز البلدي',
        ingredients: ['½ كيلو لحم مفروم', 'رغيف بلدي', 'بصلة متوسطة', 'ملح وفلفل', 'من 1 : 2 بيضة', '2 فص ثوم مفري وقليل من البقدونس المفري', 'بقسماط', 'بيضة للتحمير', 'زيت'],
        instructions: ['ينقع الرغيف البلدي في ماء قليل حتى يلين ثم يعصر جيدا من الماء.', 'يخلط باللحم المفروم جيدا ثم يتبل بالملح والفلفل.', 'تبشر البصلة وتعصر من مائها جيدا ويؤخذ البشر فقط دون الماء وتخلط جيدا باللحم ثم يضاف البيض حسب سمك العجينة مع الثوم المفري والبقدونس ويعجنوا جيدا.', 'تكوَر صغيرا ثم تبطط على هيئة دوائر.', 'توضع الدوائر أولا في البقسماط خفيفا جدا ثم بالفرشة يدهن الوجهين بالبيض.', 'تحمر في الزيت']
      }
    }
  },
  {
    id: 'meat-34',
    title: 'كفتة اللحم بالأرز',
    titleEn: 'Beef and Rice Kofta',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '20 دقيقة',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp34-1',
        name: 'لحم مفروم',
        nameEn: 'Minced beef',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp34-2',
        name: 'أرز مسلوق',
        nameEn: 'Boiled rice',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp34-3',
        name: 'بصل متوسط مفري',
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
        id: 'mp34-4',
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
        id: 'mp34-5',
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
        id: 'mp34-6',
        name: 'ملح وفلفل وبهار ونعناع جاف',
        nameEn: 'Salt, pepper, mixed spice and dried mint',
        standardAmount: '1 ملعقة صغيرة نعناع، وبقية التوابل حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة نعناع، وبقية التوابل حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp34-7',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'بعد سلق الأرز يصفى جيدا من الماء ويترك ليبرد ثم يضرب في الكبة.',
        textEn: 'After boiling the rice, drain it well, let it cool, then process it in a food mill or grinder.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يتبل اللحم المفروم بالبصلة والثوم والملح والفلفل والبهار وبقية التوابل.',
        textEn: 'Season the minced beef with the grated onion, garlic, salt, pepper, mixed spice and the remaining spices.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط اللحم المتبل بالأرز المسلوق ويعجن جيدا بالبيضة.',
        textEn: 'Mix the seasoned meat with the boiled rice and knead well with the egg.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يشكل على هيئة أصابع أو دوائر.',
        textEn: 'Shape into fingers or patties.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يطهى على البخار حتى تتماسك الأصابع، ثم تترك لتبرد.',
        textEn: 'Steam until the fingers firm up, then let them cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تغطى بالبيض والبقسماط ثم تحمر في الزيت.',
        textEn: 'Coat in egg and breadcrumbs, then fry in oil.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يمكن إلغاء الطهو على البخار باستبداله بأن تغمس أصابع الكفتة أو الدوائر في الدقيق ثم البيض ثم البقسماط، وتترك في الثلاجة لمدة ساعة حتى تتماسك ثم تحمر في الزيت.',
        textEn: 'The steaming step can be skipped by instead dipping the kofta fingers or patties in flour, then egg, then breadcrumbs, refrigerating for an hour until firm, and then frying in oil.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'بدون طهو بالبخار',
        sourceDocs: ['doc1'],
        importance: 'variation'
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
        title: 'كفتة اللحم بالأرز',
        ingredients: ['¼ كيلو لحم مفروم', '½ كوب أرز مسلوق', 'بصلة متوسطة مفرية', 'بيضة', '4 فصوص ثوم مفريين', 'ملح', 'فلفل', 'بهار', 'ملعقة صغيرة  نعناع جاف', 'بقدونس مفري'],
        instructions: ['بعد سلق الأرز يصفى جيدا من الماء ويترك ليبرد ثم يضرب في الكبة.', 'يتبل اللحم المفروم بالبصلة والثوم والملح والفلفل والبهار وبقية التوابل.', 'يخلط اللحم المتبل بالأرز المسلوق ويعجن جيدا بالبيضة.', 'يشكل على هيئة أصابع أو دوائر.', 'يطهى على البخار حتى تتماسك الأصابع ثم تترك لتبرد.', 'تغطى بالبيض والبقسماط ثم تحمر في الزيت.', 'يمكن إلغاء الطهو على البخار باستبدالها بأن تغمس أصابع الكفتة أو الدوائر في الدقيق ثم البيض و البقسماط.', 'تترك في الثلاجة لمدة ساعة حتى تتماسك ثم تحمر في الزيت.']
      }
    }
  },
  {
    id: 'meat-35',
    title: 'كفتة الأرز مع صلصة الخضار',
    titleEn: 'Rice Kofta with Vegetable Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '15 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp35-1',
        name: 'لحم مفروم',
        nameEn: 'Minced beef',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp35-2',
        name: 'بصل كبير',
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
        id: 'mp35-3',
        name: 'بقدونس وشبت',
        nameEn: 'Parsley and dill',
        standardAmount: '1/2 حزمة من كل',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 حزمة من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp35-4',
        name: 'أرز مدقوق',
        nameEn: 'Ground rice',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp35-5',
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
        id: 'mp35-6',
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
        id: 'mp35-7',
        name: 'صلصة الخضار',
        nameEn: 'Vegetable sauce (see recipe below)',
        standardAmount: 'الكمية الناتجة من الوصفة التالية',
        category: 'other',
        sourceVariations: {
          doc1: 'الكمية الناتجة من الوصفة التالية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يخلط اللحم المفروم في الكبة مع البصلة والبقدونس والشبت، ثم يضاف إليه الأرز المدقوق والتوابل ويضربوا حتى يسمك الخليط.',
        textEn: 'Process the minced beef with the onion, parsley and dill in a food mill, then add the ground rice and spices and process until the mixture thickens.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تشَكل على هيئة كور صغيرة ثم تحمر في الزيت.',
        textEn: 'Shape into small balls and fry in oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'توضع الكفتة في الصلصة وتترك لمدة ربع ساعة على درجة حرارة هادئة.',
        textEn: 'Add the kofta to the vegetable sauce and simmer over low heat for 15 minutes.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'كفتة الأرز مع صلصة الخضار',
        ingredients: ['½ كيلو لحم مفروم', 'بصلة كبيرة', '½ حزمة بقدونس', '½ حزمة شبت', '½ كوب أرز مدقوق', 'ملح', 'فلفل', 'بهار', 'زيت', 'صلصة الخضار'],
        instructions: ['يخلط اللحم المفروم في الكبة مع البصلة والبقدونس والشبت ثم يضاف إليها الأرز المدقوق والتوابل ويضربوا حتى يسمك الخليط.', 'تشَكل على هيئة كور صغيرة ثم تحمر في الزيت.', 'توضع الكفتة في الصلصة وتترك لمدة ربع ساعة على درجة حرارة هادئة.']
      }
    }
  },
  {
    id: 'meat-36',
    title: 'عمل صلصة الخضار',
    titleEn: 'Vegetable Sauce (for Rice Kofta)',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: 'يكفي لطاجن كفتة الأرز',
    masterIngredients: [
      {
        id: 'mp36-1',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp36-2',
        name: 'طماطم معصورة أو صلصة',
        nameEn: 'Pressed tomatoes or tomato paste',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp36-3',
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
        id: 'mp36-4',
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
        id: 'mp36-5',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '3 أكواب',
        category: 'liquid',
        sourceVariations: {
          doc1: '3 أكواب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp36-6',
        name: 'جزر',
        nameEn: 'Carrots',
        standardAmount: '2 جزرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 جزرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp36-7',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '2 حبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 حبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسخَن الزيت ويصفر فيه الثوم فقط، ثم تضاف الطماطم، ثم تتبل بالملح والفلفل والخل وترفع من الحرارة.',
        textEn: 'Heat oil and lightly golden the garlic in it, then add the tomatoes, season with salt, pepper and vinegar, and remove from the heat.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر إناء به حوالي 3 أكواب ماء مغلي وملح وفلفل، ثم نضع فيه الجزر المقطع مكعبات صغيرة لمدة ربع ساعة.',
        textEn: 'Bring about 3 cups of water to a boil with salt and pepper, then add the carrots, diced small, and cook for 15 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضيف حبات البطاطس المكعبات إلى الجزر في الماء المغلي، ثم يضاف إليها الصلصة، وتترك على درجة حرارة متوسطة حتى تصير الصلصة سميكة لمدة ربع ساعة.',
        textEn: 'Add the diced potatoes to the carrots in the boiling water, then stir in the tomato sauce, and simmer over medium heat for 15 minutes until the sauce thickens.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 3,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل صلصة الخضار',
        ingredients: ['¼ رأس ثوم مفري', '¼ كيلو طماطم معصورة أو صلصة طماطم', 'ملعقة كبيرة خل', 'ملح', 'فلفل', '3 أكواب ماء', 'عدد 2 جزرة', '2 حبة بطاطس'],
        instructions: ['يسخَن الزيت ويصفر فيه الثوم فقط ثم تضاف الطماطم ثم تتبل بالملح والفلفل والخل وترفع من الحرارة.', 'نحضر إناء به حوالي 3 أكواب ماء مغلي وملح وفلفل ثم نضع فيه الجزر المقطع مكعبات صغيرة لمدة ربع ساعة.', 'نضيف حبات البطاطس المكعبات إلى الجزر في الماء المغلي ثم يضاف إليها الصلصة وتترك على درجة حرارة متوسطة حتى تصير الصلصة سميكة لمدة ربع ساعة.']
      }
    }
  },
  {
    id: 'meat-37',
    title: 'كفتة اللحم بالدمعة',
    titleEn: 'Beef Kofta in Fresh Tomato Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '1 ساعة (تبريد)',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp37-1',
        name: 'لحم مفروم',
        nameEn: 'Minced beef',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp37-2',
        name: 'بصل متوسط مفري أو عصير بصل',
        nameEn: 'Grated medium onion or onion juice',
        standardAmount: '1 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp37-3',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '3 فصوص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 فصوص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp37-4',
        name: 'بقدونس مفري',
        nameEn: 'Chopped parsley',
        standardAmount: '1 ملعقة شاي',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة شاي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp37-5',
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
        id: 'mp37-6',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp37-7',
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
        id: 'mp37-8',
        name: 'دمعة (صلصة طماطم طرية)',
        nameEn: '"Damaa" fresh tomato sauce (see recipe below)',
        standardAmount: 'الكمية الناتجة من الوصفة التالية',
        category: 'other',
        sourceVariations: {
          doc1: 'الكمية الناتجة من الوصفة التالية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يخلط اللحم المفروم بالبصلة أو عصير البصلة والثوم والبقدونس والتوابل.',
        textEn: 'Mix the minced beef with the grated onion or onion juice, garlic, parsley and spices.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تدخل الثلاجة لمدة ساعة.',
        textEn: 'Refrigerate for an hour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يغسل الأرز ويصفى جيدا من الماء حتى يجف تماما، ثم يوضع في الكبة حتى ينعم.',
        textEn: 'Wash the rice and drain it completely dry, then process it in a food mill until fine.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يخلط الأرز المدقوق باللحم المفروم جيدا.',
        textEn: 'Mix the ground rice well into the minced beef.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يشكل حسب الرغبة إما أصابع أو مستديرات.',
        textEn: 'Shape into fingers or rounds, as preferred.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يطهى على البخار حتى تتماسك الكفتة.',
        textEn: 'Steam until the kofta firms up.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'ترفع وتترك حتى تبرد ثم تحمر في الزيت.',
        textEn: 'Remove, let cool, then fry in oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'توضع أصابع الكفتة المحمرة في الدمعة، ويغطى الإناء على درجة حرارة هادئة حتى يتم نضج الكفتة وتتشرب قليلا الدمعة.',
        textEn: 'Add the fried kofta fingers to the fresh tomato sauce, cover, and simmer over low heat until the kofta is fully cooked and has absorbed a little of the sauce.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'كفتة اللحم بالدمعة',
        ingredients: ['½ كيلو لحم مفروم', 'بصلة متوسطة مفرية أو عصير بصلة', '3 فصوص ثوم مفري', 'ملعقة شاي بقدونس مفري', 'ملح', 'فلفل', 'بهار', 'ملعقة كبيرة أرز', 'زيت', 'دمعة'],
        instructions: ['يخلط اللحم المفروم بالبصلة أو عصير البصلة والثوم والبقدونس والتوابل.', 'تدخل الثلاجة لمدة ساعة.', 'يغسل الأرز ويصفى جيدا من الماء حتى يجف تماما ثم يوضع في الكبة حتى ينعم.', 'يخلط الأرز المدقوق باللحم المفروم جيدا.', 'يشكل حسب الرغبة إما أصابع أو مستديرات.', 'يطهى على البخار حتى تتماسك الكفتة.', 'ترفع وتترك حتى تبرد ثم تحمر في الزيت.', 'توضع أصابع الكفتة المحمرة في الدمعة ويغطى الإناء على درجة حرارة هادئة حتى يتم نضج الكفتة وتتشرب قليلا الدمعة.']
      }
    }
  },
  {
    id: 'meat-38',
    title: 'عمل دمعة للكفته',
    titleEn: 'Fresh Tomato "Damaa" Sauce (for Kofta)',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '5 دقائق',
    cookTime: '20 دقيقة',
    servings: 'يكفي لطاجن كفتة',
    masterIngredients: [
      {
        id: 'mp38-1',
        name: 'طماطم مصفاة',
        nameEn: 'Strained tomatoes',
        standardAmount: '2 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp38-2',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp38-3',
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
        id: 'mp38-4',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp38-5',
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
        id: 'mp38-6',
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
        text: 'يحمَر الثوم في السمن أو الزيت خفيفا، ثم تضاف الطماطم المعصورة وتترك حتى تنضج.',
        textEn: 'Lightly brown the garlic in ghee or oil, then add the strained tomatoes and cook until softened.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تضاف ملعقة الخل وتقلب جيدا، ثم يضاف الماء ويتبل بالملح والفلفل ويترك حتى الغليان.',
        textEn: 'Add the tablespoon of vinegar and stir well, then add the water, season with salt and pepper, and bring to a boil.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل دمعة للكفته',
        ingredients: ['2 كوب طماطم مصفاة', '¼ رأس ثوم مفري', 'ملعقة كبيرة خل', '2 كوب ماء', 'ملح', 'فلفل', 'سمن أو زيت'],
        instructions: ['يحمَر الثوم في السمن أو الزيت خفيفا ثم تضاف الطماطم المعصورة وتترك حتى تنضج.', 'تضاف ملعقة الخل وتقلب جيدا ثم يضاف الماء ويتبل بالملح والفلفل ويترك حتى الغليان.']
      }
    }
  },
  {
    id: 'meat-39',
    title: 'الكفتة بالصلصة',
    titleEn: 'Kofta in Tomato Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '15 دقيقة',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp39-1',
        name: 'لحم مفروم',
        nameEn: 'Minced beef',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp39-2',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1 ملعقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp39-3',
        name: 'شبت مفري',
        nameEn: 'Chopped dill',
        standardAmount: '1 ملعقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp39-4',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp39-5',
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
        id: 'mp39-6',
        name: 'صلصة طماطم جاهزة (وصفة النشويات)',
        nameEn: 'Tomato pasta sauce (see starches section)',
        standardAmount: 'الكمية الناتجة من وصفة الصلصة',
        category: 'other',
        sourceVariations: {
          doc1: 'الكمية الناتجة من وصفة الصلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يتبل اللحم المفروم بالشبت والثوم والبقسماط والتوابل ويعجن جيدا.',
        textEn: 'Season the minced beef with dill, garlic, breadcrumbs and spices, and knead well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تكوَر حسب الرغبة إما أصابع أو دوائر.',
        textEn: 'Shape into fingers or patties, as preferred.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحمر في الزيت أو السمن.',
        textEn: 'Fry in oil or ghee.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تجهز صلصة مثل صلصة المكرونة (قسم النشويات).',
        textEn: 'Prepare a tomato sauce as for pasta (see the starches section).',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد غليان الصلصة توضع فيها الكفتة على درجة حرارة هادئة حتى النضج.',
        textEn: 'Once the sauce boils, add the kofta and simmer over low heat until cooked through.',
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
        title: 'الكفتة بالصلصة',
        ingredients: ['½ كيلو لحم مفروم', 'م ثوم مفري', 'م شبت مفري', 'بقسماط', 'ملح', 'فلفل'],
        instructions: ['يتبل اللحم المفروم بالشبت والثوم والبقسماط والتوابل ويعجن جيدا.', 'تكوَر حسب الرغبة إما أصابع أو دوائر.', 'تحمر في الزيت أو السمن.', 'تجهز صلصة مثل صلصة المكرونة ( قسم النشويات).', 'بعد غليان الصلصة توضع فيها الكفتة على درجة حرارة هادئة حتى النضج.']
      }
    }
  },
  {
    id: 'meat-40',
    title: 'الكبيبة الشامي',
    titleEn: 'Levantine Kibbeh, Stuffed and Baked',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '40 دقيقة',
    cookTime: '25 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'mp40-1',
        name: 'لحم بتلو',
        nameEn: 'Veal',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp40-2',
        name: 'برغل ناعم',
        nameEn: 'Fine bulgur',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp40-3',
        name: 'بصل متوسط',
        nameEn: 'Medium onion',
        standardAmount: '2 بصلة متوسطة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp40-4',
        name: 'ملح وفلفل وبهار وقرفة',
        nameEn: 'Salt, pepper, mixed spice and cinnamon',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp40-5',
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
        id: 'mp40-6',
        name: 'عصاج (حشوة اللحم المفروم بالصنوبر)',
        nameEn: '"Assag" minced-meat filling with pine nuts (see recipe)',
        standardAmount: 'الكمية الناتجة من وصفة العصاج',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'الكمية الناتجة من وصفة العصاج'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يفرم اللحم ناعما مع قليل من الملح، ثم يفرم البصل ويضاف إلى اللحم المفروم مرتين.',
        textEn: 'Mince the meat finely with a little salt, then mince the onion and combine with the meat, passing the mixture through the grinder twice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغسل البرغل عدة مرات ويصفى جيدا من الماء.',
        textEn: 'Wash the bulgur several times and drain it completely.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف البرغل إلى اللحم المفروم ويخلط جيدا ويتبل بالتوابل، ثم يفرم هذا الخليط مرتين.',
        textEn: 'Add the bulgur to the minced meat, mix well, season with the spices, and pass this mixture through the grinder twice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يقطع الخليط بحجم البيضة ويضغط عليه بالإصبع في الوسط، ثم يحشى بمقدار من العصاج ويقفل بشرط أن تكون مجوفة.',
        textEn: 'Portion the mixture into egg-sized pieces, press a finger into the center of each to hollow it out, stuff with some of the assag filling, and seal, keeping it hollow.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تحمر في الزيت أو السمن.',
        textEn: 'Fry in oil or ghee.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'طريقة إضافية: بعد تجهيز الكبيبة والحشو كالسابق، تدهن صينية ويوضع فيها نصف مقدار الكبيبة، ثم يوضع فوقها طبقة من العصاج والصنوبر، ثم يوضع بقية مقدار الكبيبة. يرش السطح بالسمن أو الزبد وتقطع على هيئة سمبوسات، وتدخل فرنا متوسط الحرارة حتى النضج ويحمر الوجه قليلا.',
        textEn: 'Alternative baked-tray method: after preparing the kibbeh mixture and filling as above, oil a tray and spread half the kibbeh mixture in it, top with a layer of the assag filling and pine nuts, then cover with the rest of the kibbeh mixture. Drizzle the top with ghee or butter, cut into diamond shapes, and bake in a medium oven until cooked and lightly golden on top.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'كبيبة الصينية المخبوزة',
        sourceDocs: ['doc1'],
        importance: 'variation'
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
        title: 'الكبيبة الشامي',
        ingredients: ['½ كيلو لحم بتلو', '½ كوب برغل ناعم', '2 بصلة متوسطة', 'ملح', 'فلفل', 'بهار', 'قرفه', '2 م سمن', 'عصاج'],
        instructions: ['يفرم اللحم ناعما مع قليل من الملح ثم يفرم البصل ويضاف إلى اللحم المفروم مرتين.', 'يغسل البرغل عدة مرات ويصفى جيدا من الماء.', 'يضاف البرغل إلى اللحم المفروم ويخلط جيدا ويتبل بالتوابل ثم يفرم هذا الخليط مرتين.', 'يقطع الخليط بحجم البيضة ويضغط عليه بالاصبع في الوسط ثم يحشى بمقدار من العصاج ويقفل بشرط أن تكون مجوفة.', 'تحمر في الزيت أو السمن.', 'نفس الخطوات في تجهيز الكبية والحشو.', 'تدهن صينية ويوضع فيها نصف مقدار الكبيبة ثم يوضع فوقها طبقة من العصاج والصنوبر ثم يوضع بقية مقدار الكبيبة.', 'يرش السطح بالسمن أو الزبد وتقطع على هيئة سمبوسات.', 'تدخل في فرن متوسط الحراة حتى النضج ويحمر الوجه قليلا.']
      }
    }
  },
  {
    id: 'meat-41',
    title: 'عمل العصاج (للحشو)',
    titleEn: '"Assag" Minced Meat and Pine Nut Filling (for Stuffing)',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'تحمير',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: 'حشوة متعددة الاستخدام',
    masterIngredients: [
      {
        id: 'mp41-1',
        name: 'لحم مفروم',
        nameEn: 'Minced meat',
        standardAmount: '1/8 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp41-2',
        name: 'صنوبر',
        nameEn: 'Pine nuts',
        standardAmount: '2 ملعقة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp41-3',
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
        id: 'mp41-4',
        name: 'بصل مقطع حلقات رفيعة',
        nameEn: 'Onion, thinly sliced into rings',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp41-5',
        name: 'ملح وفلفل وبهار وقرفة',
        nameEn: 'Salt, pepper, mixed spice and cinnamon',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp41-6',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقدح السمن أو الزيت ويضاف إليه البصل ويشوح، ثم يضاف اللحم المفروم والتوابل، ويطهى على درجة حرارة هادئة حتى النضج مع إضافة الماء.',
        textEn: 'Heat the ghee or oil, add the onion and sauté, then add the minced meat and spices, and cook over low heat until done, adding water as needed.',
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
        title: 'عمل العصاج (للحشو)',
        ingredients: ['⅛ كيلو لحم مفروم', '2 ملعقة صنوبر', '2 ملعقة سمن أو زيت', 'بصلة مقطعة حلقات رفيعة', 'ملح', 'فلفل', 'بهار', 'قرفه', 'ماء'],
        instructions: ['يقدح السمن أو الزيت ويضاف إليها البصل ويشوح ثم يضاف اللحم المفروم والتوابل ويطهى على درجة حرارة هادئة حتى النضج مع إضافة الماء.']
      }
    }
  },
  {
    id: 'meat-42',
    title: 'تتبيلة الزبادي',
    titleEn: 'Yogurt Marinade (for Oven-Roasted Meat or Chicken)',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '-',
    servings: 'يكفي لتتبيل 1 كيلو لحم أو دجاج',
    masterIngredients: [
      {
        id: 'mp42-1',
        name: 'بصلة',
        nameEn: 'Onion',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp42-2',
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
        id: 'mp42-3',
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
        id: 'mp42-4',
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
        id: 'mp42-5',
        name: 'كرفس',
        nameEn: 'Celery',
        standardAmount: 'قليل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp42-6',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp42-7',
        name: 'حبهان مدقوق وقرفة وزعتر',
        nameEn: 'Crushed cardamom, cinnamon and thyme',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp42-8',
        name: 'زيت وملح وفلفل وماء',
        nameEn: 'Oil, salt, pepper and a little water',
        standardAmount: 'حسب الحاجة',
        category: 'liquid',
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
        text: 'يضرب في الخلاط الطماطم والجزر والثوم والكرفس، ثم يضاف لهم الزبادي والملح والفلفل.',
        textEn: 'Blend the tomato, carrot, garlic and celery, then stir in the yogurt, salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمر بصلة مقطعة حلقات في الزيت ثم تضاف إلى الخلطة.',
        textEn: 'Brown onion rings in oil, then add them to the mixture.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تتبل في هذه الخلطة اللحوم أو الدجاج.',
        textEn: 'Marinate the meat or chicken in this mixture before roasting.',
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
        title: 'تتبيلة الزبادي',
        ingredients: ['بصلة', 'ثمرة طماطم', 'جزرة', '2 فص ثوم', 'كرفس', 'زبادي', 'حبهان مدقوق', 'قرفة', 'زعتر', 'زيت', 'ملح', 'فلفل', 'قليل من الماء'],
        instructions: ['يضرب في الخلاط الطماطم و الجزر و الثوم و الكرفس ثم يضاف لهم الزبادي و الملح و الفلفل.', 'تحمر بصلة مقطعة حلقات في الزيت ثم تضاف الى الخلطة.', 'تتبل في هذه الخلطة اللحوم و الدجاج.']
      }
    }
  },
  {
    id: 'meat-43',
    title: 'تتبيلة صلصة الطماطم',
    titleEn: 'Tomato Sauce Marinade (for Oven-Roasted Meat or Chicken)',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: 'حسب الصينية',
    servings: 'يكفي لتتبيل 1 كيلو لحم أو دجاج',
    masterIngredients: [
      {
        id: 'mp43-1',
        name: 'بصل',
        nameEn: 'Onion',
        standardAmount: '2 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp43-2',
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
        id: 'mp43-3',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: '2 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp43-4',
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
        id: 'mp43-5',
        name: 'ملح وفلفل وبهارات وزعتر وقرفة وقرنفل وحبهان',
        nameEn: 'Salt, pepper, mixed spice, thyme, cinnamon, cloves and crushed cardamom',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp43-6',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '2 ملعقة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp43-7',
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
        id: 'mp43-8',
        name: 'طماطم أو صلصة طماطم وماء',
        nameEn: 'Tomatoes or tomato paste, and water',
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
        text: 'يفرم في الكبة البصل والثوم والفلفل الأخضر وجميع التوابل.',
        textEn: 'Process the onion, garlic, bell pepper and all the spices in a food mill.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف لها الطماطم المعصورة أو صلصة الطماطم والزيت ويقلبوا جيدا مع الليمون.',
        textEn: 'Add the pressed tomatoes or tomato paste and the oil, and mix well with the lemon juice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تتبل في هذه الخلطة اللحوم أو الدجاج.',
        textEn: 'Marinate the meat or chicken in this mixture.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن صينية بالزيت وتوضع فيها اللحوم المتبلة مع قليل من الماء وتغطى وتدخل الفرن.',
        textEn: 'Oil a tray, place the marinated meat in it with a little water, cover, and bake.',
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
        title: 'تتبيلة صلصة الطماطم',
        ingredients: ['2 بصلة', '2 فص ثوم', '2 ملعقة كبيرة عصير ليمون', 'ورق اللورا المطحون', 'ملح', 'فلفل', 'بهارات', '2 ملعقة زيت', 'زعتر', 'قرفة', 'قرنفل', 'حبهان مدقوق', 'فلفل رومي', 'طماطم أو ملعقة صلصة طماطم', 'ماء'],
        instructions: ['يفرم في الكبة البصل و الثوم و الفلفل الاخضر و جميع التوابل.', 'يضاف لها الطماطم المعصورة أو صلصة الطماطم و الزيت و يقلبوا جيدا مع الليمون.', 'تتبل في هذه الخلطة اللحوم أو الدجاج.', 'تدهن صينية بالزيت و توضع فيها اللحوم المتبلة مع قليل من الماء و تغطى و تدخل الفرن.']
      }
    }
  },
  {
    id: 'meat-44',
    title: 'اللحم أو الدجاج في الصينية (رستوبتلو)',
    titleEn: 'Oven-Braised Meat or Chicken Tray ("Rosto Batlo")',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '1 ساعة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'mp44-1',
        name: 'لحم بتلو أو صدور دجاج',
        nameEn: 'Veal or chicken breast',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp44-2',
        name: 'بصل كبير',
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
        id: 'mp44-3',
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
        id: 'mp44-4',
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
        id: 'mp44-5',
        name: 'ثوم مفري',
        nameEn: 'Crushed garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp44-6',
        name: 'عصير طماطم أو صلصة',
        nameEn: 'Tomato juice or tomato paste',
        standardAmount: '2 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp44-7',
        name: 'عصير ليمون أو خل',
        nameEn: 'Lemon juice or vinegar',
        standardAmount: '1 ملعقة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp44-8',
        name: 'ملح وفلفل وبهار وزعتر وقرفة وقرنفل وحبهان',
        nameEn: 'Salt, pepper, mixed spice, thyme, cinnamon, cloves and a little crushed cardamom',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp44-9',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'حسب الحاجة',
        category: 'liquid',
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
        text: 'يحمر اللحم أو الدجاج في إناء به زيت أو سمن حتى يأخذ اللون الذهبي، ثم يوضع في صينية الفرن.',
        textEn: 'Brown the meat or chicken in a pot with oil or ghee until golden, then transfer it to an oven tray.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تتبل بصلة كبيرة مقطعة شرائح بالملح والفلفل والبهار والقرفة والزعتر والقرنفل، وتضاف إلى اللحم في الصينية، أو باستخدام أي من تتبيلات الطهو في الفرن.',
        textEn: 'Season sliced onion with salt, pepper, mixed spice, cinnamon, thyme and cloves, and add it to the meat in the tray (or use any of the oven marinades above).',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقطع فلفلة خضراء شرائح مع فصوص الثوم المفري وعصير الطماطم أو 2 ملعقة كبيرة من صلصة الطماطم المخففة بالماء، ويضافون إلى اللحم أو الدجاج.',
        textEn: 'Slice the green pepper, add it with the crushed garlic and the tomato juice (or 2 tablespoons of tomato paste diluted with water), and add to the meat or chicken.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تضاف كمية مناسبة من الماء به عصير الليمون أو الخل والحبهان المدقوق، وتترك حتى الغليان ثم يوضع زيت على الوجه.',
        textEn: 'Add enough water mixed with the lemon juice or vinegar and the crushed cardamom, bring to a boil, then drizzle a little oil on top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تغطى الصينية بالفويل وتدخل الفرن حتى النضج، وقرب النضج يرفع الغطاء وتترك الصينية حتى تتشرب تماما كل السائل.',
        textEn: 'Cover the tray with foil and bake until cooked; near the end, remove the foil and let the tray bake uncovered until all the liquid is fully absorbed.',
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
        title: 'اللحم أو الدجاج في الصينية (رستوبتلو)',
        ingredients: ['1 كيلو لحم بتلو أو كيلو صدور دجاج', 'بصلة كبيرة', 'ثمرة فلفل خضراء', 'زيت أو سمن', '¼ رأس ثوم مفري', 'عصير 2 كوب طماطم أو صلصة طماطم', 'عصير ليمون أو م خل', 'ملح', 'فلفل', 'بهار', 'زعتر', 'قرفه', 'قرنفل', 'قليل من الحبهان المدقوق', 'كمية من الماء'],
        instructions: ['يحمر اللحم أو الدجاج في إناء به زيت أو سمن حتى تأخذ اللون الذهبي ثم توضع في صينية الفرن.', 'تتبل بصلة كبيرة ومقطعة شرائح بالملح والفلفل والبهار والقرفه والزعتر والقرنفل وتضاف إلى اللحم في الصينية أو باستخدام أي من تتبيلات الطهو في الفرن.', 'تقطع فلفلة خضراء شرائح مع فصوص الثوم المفري وعصير الطماطم أو 2 ملعقة كبيرة من صلصة الطماطم المخففة بالماء ويضافوا إلى اللحم أو الدجاج.', 'تضاف كمية مناسبة من الماء به عصير الليمون أو الخل والحبهان المدقوق وتترك حتى الغليان ثم يوضع زيت على الوجه.', 'تغطى الصينية بالفويل وتدخل الفرن حتى النضج وقرب النضج يرفع الغطاء وتترك الصينية حتى تشرب تماما كل السائل.']
      }
    }
  },
  {
    id: 'meat-45',
    title: 'صينية اللحم أو الدجاج بالخضروات',
    titleEn: 'Meat or Chicken Tray with Vegetables and Cheese',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'mp45-1',
        name: 'لحم أو صدور دجاج',
        nameEn: 'Meat or chicken breast',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp45-2',
        name: 'بصلة',
        nameEn: 'Onion',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp45-3',
        name: 'فلفل أخضر',
        nameEn: 'Green pepper',
        standardAmount: '1 حبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp45-4',
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
        id: 'mp45-5',
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
        id: 'mp45-6',
        name: 'كوسة',
        nameEn: 'Zucchini',
        standardAmount: '1 حبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp45-7',
        name: 'زيتون أسود',
        nameEn: 'Black olives',
        standardAmount: 'حسب الرغبة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp45-8',
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
        id: 'mp45-9',
        name: 'بيضة وبقسماط',
        nameEn: 'Egg and breadcrumbs',
        standardAmount: '1 بيضة وحسب الحاجة من البقسماط',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة وحسب الحاجة من البقسماط'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp45-10',
        name: 'ملح وفلفل وزيت',
        nameEn: 'Salt, pepper and oil',
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
        text: 'يطهى على البخار الجزر والكوسة والبطاطس المقطعة مكعبات صغيرة جدا.',
        textEn: 'Steam the carrot, zucchini and potato, diced very small.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تعمل خلطة من حلقات البصل والفلفل الأخضر مع شرائح من جبن الشيدر والزيتون والملح والفلفل.',
        textEn: 'Make a mixture of onion rings and green pepper with slices of cheddar cheese, olives, salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف هذه الخلطة إلى الخضار المطهو وتعجن جيدا.',
        textEn: 'Add this mixture to the steamed vegetables and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن صينية بالزيت وترص فيها طبقة من عجينة الخلطة ثم طبقة من اللحوم أو الدجاج.',
        textEn: 'Oil a tray and layer in the vegetable mixture, then a layer of the meat or chicken.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يدهن الوجه بالبيض المخفوق ثم يرش بالبقسماط.',
        textEn: 'Brush the top with beaten egg, then sprinkle with breadcrumbs.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تغطى وتدخل الفرن.',
        textEn: 'Cover and bake.',
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
        title: 'صينية اللحم أو الدجاج بالخضروات',
        ingredients: ['1 كيلو لحم أو كيلو صدور دجاج', 'بصلة', 'حبة فلفل أخضر', 'جزرة', 'حبة بطاطس', 'حبة كوسة', 'زيتون أسود', 'جبن شيدر', 'ملح', 'فلفل', 'زيت', 'بيضة', 'بقسماط'],
        instructions: ['يطهى على البخار الجزر و الكوسة و البطاطس المكعبات الصغيرة جدا.', 'تعمل خلطة من حلقات البصل و الفلفل الأخضر مع شرائح من جبن الشيدر و الزيتون و الملح و الفلفل.', 'تضاف هذه الخلطة الى الخضار المطهو و تعجن جيدا.', 'تدهن صينية بالزيت و ترص فيها طبقة من عجينة الخلطة ثم طبقة من اللحوم أو الدجاج.', 'يدهن الوجه بالبيض المخفوق ثم ترش بالبقسماط.', 'تغطى و تدخل الفرن.']
      }
    }
  },
  {
    id: 'meat-46',
    title: 'صينية الدجاج المحمَر',
    titleEn: 'Tray-Baked Browned Chicken',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '40 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp46-1',
        name: 'دجاجة',
        nameEn: 'Whole chicken',
        standardAmount: '1 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp46-2',
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
        id: 'mp46-3',
        name: 'كمون وكسبرة',
        nameEn: 'Cumin and coriander',
        standardAmount: '1 ملعقة كمون وقليل من الكسبرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كمون وقليل من الكسبرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp46-4',
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
        id: 'mp46-5',
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
        text: 'يخلط جيدا الدقيق بالكمون والكسبرة والملح والفلفل.',
        textEn: 'Mix the flour well with the cumin, coriander, salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطَع الدجاجة أرباعا وتتبل في الخليط.',
        textEn: 'Quarter the chicken and coat it in the mixture.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحمر في الزيت حتى يصير لونها بنيا وترفع على مناديل ورقية.',
        textEn: 'Brown in oil until golden, then drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن صينية بالزيت وترص فيها اللحوم أو الدجاج، وتغطى وتدخل الفرن.',
        textEn: 'Oil a tray, arrange the chicken in it, cover, and bake.',
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
        title: 'صينية الدجاج المحمَر',
        ingredients: ['1 دجاجة', '2 ملعقة كبيرة دقيق', 'ملعقة كمون', 'كسبرة', 'ملح', 'فلفل', 'زيت'],
        instructions: ['يخلط جيدا الدقيق بالكمون و الكسبرة و الملح و الفلفل.', 'تقطَع الدجاجة إربع و تتبل في الخليط.', 'تحمر في الزيت حتى يصير لونها بنيا و ترفع على مناديل ورقية.', 'تدهن صينية بالزيت و ترص فيها اللحوم أو الدجاج و تغطى و تدخل الفرن.']
      }
    }
  },
  {
    id: 'meat-47',
    title: 'الفخدة',
    titleEn: 'Oven-Roasted Veal Leg',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '2 ساعة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'mp47-1',
        name: 'فخدة بتلو',
        nameEn: 'Veal leg',
        standardAmount: '1 فخدة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 فخدة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp47-2',
        name: 'بصل كبير',
        nameEn: 'Large onion',
        standardAmount: '2 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp47-3',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/2 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp47-4',
        name: 'عصير بصل',
        nameEn: 'Onion juice',
        standardAmount: 'عصير بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'عصير بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp47-5',
        name: 'ملح وفلفل وبهار وقرفة',
        nameEn: 'Salt, pepper, mixed spice and cinnamon',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp47-6',
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
        id: 'mp47-7',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تشوح الفخدة في صينية بها زيت أو سمن مع بصل مقطع حلقات ومدعوك بالملح والفلفل والبهار والقرفة.',
        textEn: 'Sear the leg in a tray with oil or ghee, with onion rings mashed with salt, pepper, mixed spice and cinnamon.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تغرز في الفخدة فصوص الثوم صحيحة أو توضع بدون غرز.',
        textEn: 'Insert whole garlic cloves into the leg, or leave them alongside without inserting.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 3,
        text: 'نضيف للفخدة عصير بصلة والخل.',
        textEn: 'Add onion juice and the vinegar to the leg.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تلف جيدا في فويل داخل الصينية ونسكب حولها قليل من الماء.',
        textEn: 'Wrap well in foil in the tray and pour a little water around it.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدخل الفرن مع ملاحظة احتياجها للماء حتى النضج.',
        textEn: 'Roast in the oven, topping up water as needed, until fully cooked.',
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
        title: 'الفخدة',
        ingredients: ['فخدة بتلو', '2 بصلة كبيرة', '½ رأس ثوم', 'عصير بصلة', 'قليل من الماء', 'ملح', 'فلفل', 'بهار قرفة', '2 ملعقة كبيرة خل'],
        instructions: ['تشوح الفخدة في صينية بها زيت أو سمن مع بصل مقطع حلقات ومدعوك بالملح والفلفل والبهار والقرفة.', 'تغرز في الفخدة فصوص الثوم صحيحة أو توضع بدون غرز.', 'نضيف للفخدة عصير بصلة والخل.', 'تلف جيدا في فويل داخل الصينية ونسكب حولها قليل من الماء.', 'تدخل الفرن مع ملاحظة احتياجها للماء حتى النضج.']
      }
    }
  },
  {
    id: 'meat-48',
    title: 'طريقة أخرى لحشوة الفخذة',
    titleEn: 'Another Yogurt-Roasted Leg of Veal, with Thickened Gravy',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '2 ساعة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'mp48-1',
        name: 'بصلة',
        nameEn: 'Onion',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp48-2',
        name: 'ملح وفلفل وجوزة الطيب وزعتر',
        nameEn: 'Salt, pepper, nutmeg and thyme',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp48-3',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp48-4',
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
        id: 'mp48-5',
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
        id: 'mp48-6',
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
        id: 'mp48-7',
        name: 'نشا أو دقيق',
        nameEn: 'Cornstarch or flour',
        standardAmount: '1 ملعقة كبيرة',
        category: 'grain_starch',
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
        text: 'يضرب في الخلاط البصل مع الملح والفلفل والثوم والطماطم والتوابل ثم الزبادي، أو باستخدام أي من تتبيلات الطهو في الفرن.',
        textEn: 'Blend the onion with salt, pepper, garlic, tomatoes and spices, then stir in the yogurt (or use any of the oven marinades above).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تفتح فتحة عميقة بجانب العظم ونسكب فيها نصف الخلطة.',
        textEn: 'Cut a deep pocket alongside the bone and pour in half the marinade.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقلب الفخدة على الوجه الآخر وتوضع بقية التتبيلة ثم الزيت.',
        textEn: 'Turn the leg over, add the rest of the marinade, then the oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تلف داخل الفويل وتوضع في الصينية وتدخل الفرن حتى النضج.',
        textEn: 'Wrap in foil, place in the tray, and roast until fully cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد أن تنضج الفخدة يؤخذ المتبقي من الصوص ويوضع في إناء. نخلط النشا أو الدقيق حسب كمية الصوص بقليل من الماء ثم يسكب على الصوص على درجة حرارة هادئة حتى يصبح سميكا إلى حد ما.',
        textEn: 'Once the leg is cooked, collect the remaining sauce in a pot. Dissolve the cornstarch or flour, in proportion to the sauce, in a little water, then stir it into the sauce over low heat until it thickens somewhat.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يفتح الفويل ويسكب الصوص على الفخدة.',
        textEn: 'Unwrap the foil and pour the sauce over the leg.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'ممكن عمل سوتيه خضروات ويوضع بجانب الفخدة.',
        textEn: 'Sautéed vegetables can be prepared and served alongside the leg.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'طريقة أخرى لحشوة الفخذة',
        ingredients: ['بصلة', 'ملح', 'فلفل', 'جوزة الطيب', 'زعتر', 'رأس ثوم', '2 زبادي', '2 ثمرة طماطم', 'زيت', 'ملعقة كبيرة نشا أو دقيق'],
        instructions: ['يضرب في الخلاط البصل مع الملح والفلفل والثوم والطماطم والتوابل ثم الزبادي أو باستخدام أي من تتبيلات الطهو في الفرن.', 'تفتح فتحة عميقة بجانب العظم ونسكب فيها نصف الخلطة.', 'تقلب الفخدة على الوجه الآخر وتوضع بقية التتبيلة ثم الزيت.', 'تلف داخل الفويل وتوضع في الصينية وتدخل الفرن حتى النضج.', 'بعد أن تنضج الفخدة يؤخذ المتبقي من الصوص ويوضع في إناء.', 'نخلط النشا أو الدقيق حسب كمية الصوص بقليل من الماء ثم يسكب على الصوص على درجة حرارة هادئة حتى يصبح سميكا إلى حد ما.', 'يفتح الفويل ويسكب الصوص على الفخدة.', 'ممكن عمل سوتية خضروات ويوضع بجانب الفخدة.']
      }
    }
  },
  {
    id: 'meat-49',
    title: 'اللحم أو الدجاج بالزبادي',
    titleEn: 'Oven-Roasted Meat or Chicken in Yogurt Marinade',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '4 ساعات (تتبيل)',
    cookTime: '50 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'mp49-1',
        name: 'لحم أو صدور دجاج',
        nameEn: 'Meat or chicken breast',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp49-2',
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
        id: 'mp49-3',
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
        id: 'mp49-4',
        name: 'بصل متوسط',
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
        id: 'mp49-5',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '3 فصوص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 فصوص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp49-6',
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
        id: 'mp49-7',
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
        id: 'mp49-8',
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
        id: 'mp49-9',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: '2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp49-10',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يضرب في الخلاط الطماطم والبصل والفلفل والثوم والليمون أو الخل والمستردة مع التوابل والزبادي، أو باستخدام أي من تتبيلات الطهو في الفرن.',
        textEn: 'Blend the tomato, onion, green pepper, garlic, lemon juice or vinegar, and mustard, with the spices and yogurt (or use any of the oven marinades above).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع اللحم أو الدجاج في صينية مدهونة زيت ويسكب فوقها الخليط، وتغطى وتترك في الثلاجة لمدة 4 ساعات.',
        textEn: 'Place the meat or chicken in an oiled tray, pour the mixture over it, cover, and refrigerate for 4 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدخل الصينية في الفرن في درجة حرارة متوسطة مع إضافة قليل من الماء إذا احتاج الأمر حتى النضج.',
        textEn: 'Bake in a medium oven, adding a little water if needed, until fully cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يرفع الغطاء وتترك داخل الفرن حتى تتشرب السائل تماما.',
        textEn: 'Remove the cover and continue baking until all the liquid is absorbed.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 10,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'اللحم أو الدجاج بالزبادي',
        ingredients: ['1 كيلو لحم أو كيلو صدور دجاج', 'ثمرة  طماطم', 'فلفلة خضراء', 'بصلة متوسطة', '3 فصوص ثوم', 'عصير ليمونة أو ملعقة كبيرة خل', 'ملعقة صغيرة  مستردة', 'ملح', 'فلفل', 'بهار', 'زعتر', '2 كوب زبادي حسب كمية اللحم أو الدجاج', '2 ملعقة كبيرة زيت'],
        instructions: ['يضرب في الخلاط الطماطم والبصل والفلفل والثوم والليمون أو الخل والمستردة مع التوابل والزبادي أو باستخدام أي من تتبيلات الطهو في الفرن.', 'يوضع اللحم أو الدجاج في صينية مدهونة زيت ويسكب فوقها الخليط وتغطى وتترك في الثلاجة لمدة 4 ساعات.', 'تدخل الصينية في الفرن في درجة حرارة متوسطة مع إضافة قليل من الماء إذا احتاج الأمر حتى النضج.', 'يرفع الغطاء وتترك داخل الفرن حتى تتشرب السائل تماما.']
      }
    }
  },
  {
    id: 'meat-50',
    title: 'اللحم الملفوف',
    titleEn: 'Foil-Wrapped Oven-Roasted Beef',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '2 ساعة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'mp50-1',
        name: 'لحم',
        nameEn: 'Beef',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp50-2',
        name: 'بصل كبير',
        nameEn: 'Large onion',
        standardAmount: '2 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp50-3',
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
        id: 'mp50-4',
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
        text: 'يقطع البصل حلقات ويدعك بالملح والفلفل والبهار.',
        textEn: 'Slice the onion into rings and mash it with salt, pepper and mixed spice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقطع اللحم قطعا صغيرة متساوية ويوضع عليه الزيت.',
        textEn: 'Cut the meat into small, even pieces and drizzle with the oil.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط اللحم بالبصل المدعوك والزيت ويوضع في الفويل ويغلق جيدا.',
        textEn: 'Mix the meat with the mashed onion and oil, wrap in foil, and seal well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يدخل الفرن لمدة ساعتين تقريبا حتى النضج.',
        textEn: 'Bake for about 2 hours, until fully cooked.',
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
        title: 'اللحم الملفوف',
        ingredients: ['1 كيلو لحم', '2 بصلة كبيرة', '2 ملعقة كبيرة زيت', 'ملح', 'فلفل', 'بهار'],
        instructions: ['يقطع البصل حلقات ويدعك بالملح والفلفل والبهار.', 'يقطع اللحم قطع صغيرة متساوية ويوضع عليه الزيت.', 'يخلط اللحم بالبصل المدعوك و الزيت ويوضع في الفويل ويغلق جيدا.', 'يدخل الفرن لمدة ساعتين تقريبا حتى النضج.']
      }
    }
  },
  {
    id: 'meat-51',
    title: 'اللحم أو الدجاج المفروم',
    titleEn: 'Baked Minced Meat or Chicken Loaf',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '45 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp51-1',
        name: 'لحم أو بواقي دجاجة مسلوقة',
        nameEn: 'Beef or leftover boiled chicken',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp51-2',
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
        id: 'mp51-3',
        name: 'جزرة مبشورة',
        nameEn: 'Grated carrot',
        standardAmount: '1 جزرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 جزرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp51-4',
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
        id: 'mp51-5',
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
        id: 'mp51-6',
        name: 'ملح وفلفل وزعتر وبهار وكركم',
        nameEn: 'Salt, pepper, thyme, mixed spice and turmeric',
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
        text: 'نحضر الكبة لفرم اللحم أو بواقي الدجاج مع الجزرة المبشورة والفلفلة الخضراء والتوابل.',
        textEn: 'Grind the meat or leftover chicken in a food mill with the grated carrot, green pepper and spices.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف إلى الخلطة بيضة مضروبة في نصف كوب لبن ويخلطوا جيدا.',
        textEn: 'Add an egg beaten into half a cup of milk to the mixture and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر قالبا ونضع الخليط فيه بالضغط عليه بعد دهن القالب بالزيت.',
        textEn: 'Oil a loaf pan, press the mixture into it firmly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل الفرن في درجة حرارة متوسطة، وبعد النضج تقطع شرائح.',
        textEn: 'Bake in a medium oven, and once cooked, slice and serve.',
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
        title: 'اللحم أو الدجاج المفروم',
        ingredients: ['½ كيلو لحم أو بواقي دجاجة مسلوقة', 'ثمرة فلفلة خضراء', 'جزرة مبشورة', '1بيضة', '½ كوب لبن', 'ملح وفلفل', 'زعتر', 'بهار', 'كركم'],
        instructions: ['نحضر الكبة لفرم اللحم أو بواقي الدجاج مع الجزرة المبشورة والفلفلة الخضراء والتوابل.', 'يضاف إلى الخلطة بيضة مضروبة في نصف كوب لبن ويخلطوا جيدا.', 'نحضر قالب ونضع الخليط فيه بالضغط عليه بعد دهن القالب بالزيت.', 'تدخل الفرن في درجة حرارة متوسطة وبعد النضج تقطع شرائح.']
      }
    }
  },
  {
    id: 'meat-52',
    title: 'الدجاج المسلوق بالصلصة',
    titleEn: 'Boiled Chicken Baked in Spiced Tomato Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp52-1',
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
        id: 'mp52-2',
        name: 'طماطم',
        nameEn: 'Tomato',
        standardAmount: '1/2 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp52-3',
        name: 'بصل متوسط',
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
        id: 'mp52-4',
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
        id: 'mp52-5',
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
        id: 'mp52-6',
        name: 'زيت وخل',
        nameEn: 'Oil and vinegar',
        standardAmount: 'حسب الحاجة و1 ملعقة كبيرة خل',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حسب الحاجة و1 ملعقة كبيرة خل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp52-7',
        name: 'مرق أو ماء',
        nameEn: 'Broth or water',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp52-8',
        name: 'ملح وفلفل وبهار وزعتر وقرفة وقرنفل',
        nameEn: 'Salt, pepper, mixed spice, thyme, cinnamon and cloves',
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
        text: 'تدهن صينية بالزيت وتقطع الدجاجة المسلوقة أرباعا وتوضع في الصينية.',
        textEn: 'Oil a tray, quarter the boiled chicken, and arrange it in the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع البصلة شرائح وتحمر في الزيت حتى الاصفرار داخل إناء.',
        textEn: 'Slice the onion and brown it in oil in a pot until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقطع الفلفلة شرائح وتضاف إلى البصلة مع الثوم المفري ويشوحان جيدا، ثم يضاف الخل والتوابل.',
        textEn: 'Slice the green pepper and add it to the onion with the crushed garlic, sauté well, then add the vinegar and spices.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف كوب من المرق أو الماء للخليط، وبعد الغليان يصب على الدجاج ويدخل فرن متوسط الحرارة حتى يتشرب السائل ويحمر الوجه.',
        textEn: 'Add a cup of broth or water to the mixture, bring to a boil, then pour over the chicken and bake in a medium oven until the liquid is absorbed and the top is golden.',
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
        title: 'الدجاج المسلوق بالصلصة',
        ingredients: ['1 دجاجة', '½ كوب طماطم', 'بصلة متوسطة', 'ثمرة فلفلة خضراء', '2 فص ثوم', 'زيت', 'ملعقة كبيرة خل', 'كوب مرق أو ماء', 'ملح', 'فلفل', 'بهار', 'زعتر', 'قرفة', 'قرنفل'],
        instructions: ['تدهن صينية بالزيت وتقطع الدجاجة المسلوقة إربع وتوضع في الصينية.', 'تقطع البصلة شرائح وتحمر في الزيت حتى الإصفرار داخل الإناء.', 'تقطع الفلفلة شرائح وتضاف إلى البصلة مع الثوم المفري ويشوحوا جيدا ثم يضاف الخل والتوابل.', 'نضيف كوب من المرق أو الماء للخليط وبعد الغليان يصب على الدجاج ويدخل فرن متوسط الحرارة حتى يتشرب السائل ويحمر الوجه.']
      }
    }
  },
  {
    id: 'meat-53',
    title: 'الدجاج بالكورن فليكس',
    titleEn: 'Chicken Bake with Corn Flakes and Béchamel',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp53-1',
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
        id: 'mp53-2',
        name: 'زيتون أسود',
        nameEn: 'Black olives',
        standardAmount: '1/8 كيلو',
        category: 'other',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp53-3',
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
        id: 'mp53-4',
        name: 'كورن فليكس',
        nameEn: 'Corn flakes',
        standardAmount: 'كمية قليلة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'كمية قليلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp53-5',
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
        id: 'mp53-6',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '2 ملعقة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp53-7',
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
        id: 'mp53-8',
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
        id: 'mp53-9',
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
        text: 'نحضر صينية أو بايركس ونفرشها بالكورن فليكس كقاعدة للصينية.',
        textEn: 'Line the base of a tray or Pyrex dish with corn flakes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقطع الدجاج صغيرا وكذا الزيتون والفلفلة إلى شرائح.',
        textEn: 'Cut the chicken into small pieces, and slice the olives and green pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع الدجاج مع الزيتون والفلفلة فوق الكورن فليكس.',
        textEn: 'Arrange the chicken, olives and green pepper over the corn flakes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نعمل باشاميل سميك القوام بتسخين زيت ثم إضافة ملعقة الدقيق، وبعد الاصفرار يضاف كوب اللبن مع الملح والفلفل بدون حرارة مع التقليب، ثم يرفع على درجة حرارة متوسطة حتى يغلظ القوام.',
        textEn: 'Make a thick béchamel: heat oil, whisk in the tablespoon of flour, and once golden, off the heat whisk in the cup of milk with salt and pepper, then return to medium heat, stirring, until it thickens.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تضاف الباشاميل فوق الدجاج مع رش جبن رومي مبشور على الوجه.',
        textEn: 'Pour the béchamel over the chicken and sprinkle grated Romy cheese on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'ترش كمية بسيطة من الكورن فليكس على الجبن المبشور، وتغطى وتدخل الفرن.',
        textEn: 'Sprinkle a little more corn flakes over the cheese, cover, and bake.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'الدجاج بالكورن فليكس',
        ingredients: ['1 دجاجة', '⅛ كيلو زيتون أسود', 'ثمرة فلفلة خضراء', 'كمية قليلة من الكورن فليكس', 'ملعقة كبيرة دقيق', '2 م زيت', 'كوب لبن', 'بشر جبن رومي', 'ملح وفلفل'],
        instructions: ['نحضر صينية أو بايركس ونفرشها بالكورن فليكس كقاعدة للصينية.', 'يقطع الدجاج صغيرا وكذا الزيتون والفلفة الى شرائح.', 'يوضع الدجاج مع الزيتون والفلفة فوق الكورن فليكس.', 'نعمل باشامل سميك القوام بتسخين زيت ثم يضاف إليه ملعقة الدقيق وبعد الاصفرار يضاف كوب اللبن مع الملح والفلفل بدون حرارة مع التقليب ثم يرفع على درجة حرارة متوسطة حتى يغلظ القوام.', 'تضاف الباشامل فوق الدجاج مع رش جبن رومي مبشور على الوجه.', 'ترش كمية بسيطة من الكورن فليكس على الجبن المبشور وتغطى وتدخل الفرن.']
      }
    }
  },
  {
    id: 'meat-54',
    title: 'الدجاج بالمستردة',
    titleEn: 'Chicken Breast in Mustard-Cream Sauce',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp54-1',
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
        id: 'mp54-2',
        name: 'زيت أو سمن',
        nameEn: 'Oil or ghee',
        standardAmount: '2 ملعقة كبيرة، ثم 2 أخرى',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة، ثم 2 أخرى'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp54-3',
        name: 'مستردة',
        nameEn: 'Mustard',
        standardAmount: '2 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp54-4',
        name: 'قشدة',
        nameEn: 'Clotted cream',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp54-5',
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
        id: 'mp54-6',
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
        text: 'تقطع صدور الدجاج رفيعة وتحمر في زيت ساخن حتى تصير ذهبية اللون، ثم ترفع من الإناء وترص في صينية.',
        textEn: 'Slice the chicken breasts thinly and brown in hot oil until golden, then remove and arrange in a tray.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'في نفس الإناء نضيف الزيت أو السمن مرة أخرى ونصب فيه المستردة ونقلب بسرعة على درجة حرارة هادئة، ثم نضيف القشدة المذابة في اللبن ونقلب جيدا، ثم نضيف الماء حسب الحاجة.',
        textEn: 'In the same pot, add more oil or ghee, whisk in the mustard quickly over low heat, then whisk in the clotted cream dissolved in milk, and add water as needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'بعد الغليان يصب الخليط فوق الدجاج في الصينية، وتغطى وتدخل الفرن حتى النضج.',
        textEn: 'Once it boils, pour the sauce over the chicken in the tray, cover, and bake until fully cooked.',
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
        title: 'الدجاج بالمستردة',
        ingredients: ['1 كيلو صدور دجاج', '2 ملعقة كبيرة زيت أو سمن', '2 ملعقة كبيرة مستردة', '1 ملعقة كبيرة قشدة', 'قليل من اللبن', '½ كوب ماء'],
        instructions: ['تقطع صدور الدجاج رفيعة وتحمر في زيت ساخن حتى تصير ذهبية اللون ثم ترفع من الإناء وترص في صينية.', 'في نفس الإناء نضيف الزيت أو السمن مرة أخرى ونصب فيه المستردة وتقلب بسرعة على درجة حرارة هادئة ثم إضافة القشدة المذابة في اللبن ويقلبوا جيدا ثم إضافة الماء حسب الحاجة.', 'بعد الغليان يصب الخليط فوق الدجاج في الصينية وتغطى وتدخل الفرن حتى النضج.']
      }
    }
  },
  {
    id: 'meat-55',
    title: 'الدجاج بالجبن',
    titleEn: 'Chicken Breast Baked with Cheese and Cream',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp55-1',
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
        id: 'mp55-2',
        name: 'بصلة كبيرة مبشورة',
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
        id: 'mp55-3',
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
        id: 'mp55-4',
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
        id: 'mp55-5',
        name: 'جبن مبشور',
        nameEn: 'Grated cheese',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp55-6',
        name: 'كريمة',
        nameEn: 'Cream',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp55-7',
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
        text: 'تقطع صدور الدجاج شرائح وتشوح في الزيت حتى يصفر لونها ثم ترفع من الحرارة.',
        textEn: 'Slice the chicken breasts and sauté in oil until golden, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تتبل البصلة المبشورة بالملح والفلفل والبهار والخل، وتوضع على الدجاج في الصينية.',
        textEn: 'Season the grated onion with salt, pepper, mixed spice and vinegar, and spread it over the chicken in the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع فوق الدجاج الجبن المبشور من أي نوع ويقلب جيدا مع الدجاج.',
        textEn: 'Top the chicken with grated cheese, of any kind, and mix it in well.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يصب على الوجه كوب الكريمة ويدخل الفرن حتى النضج ويحمر الوجه.',
        textEn: 'Pour the cup of cream over the top and bake until fully cooked and golden on top.',
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
        title: 'الدجاج بالجبن',
        ingredients: ['1 كيلو صدور دجاج', 'بصلة كبيرة', 'ملعقة كبيرة خل', 'ملح', 'فلفل', 'بهار', 'كوب جبن مبشور', 'كوب كريمة', 'زيت'],
        instructions: ['تقطع صدور الدجاج شرائح وتشوح في الزيت حتى يصفر لونها ثم ترفع من الحرارة.', 'تتبل البصلة المبشورة بالملح والفلفل والبهار والخل وتوضع على الدجاج في الصينية.', 'يوضع فوق الدجاج الجبن المبشور من أي نوع ويقلب جيداً مع الدجاج.', 'يصب على الوجه كوب الكريمة ويدخل الفرن حتى النضج ويحمر الوجه.']
      }
    }
  },
  {
    id: 'meat-56',
    title: 'رستو البط',
    titleEn: 'Roast Duck, Stuffed',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '1.5 ساعة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp56-1',
        name: 'بطة متوسطة',
        nameEn: 'Medium duck',
        standardAmount: '1 بطة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 بطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp56-2',
        name: 'بصل مفري',
        nameEn: 'Grated onion',
        standardAmount: '3 بصلات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 بصلات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp56-3',
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
        id: 'mp56-4',
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
        id: 'mp56-5',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp56-6',
        name: 'لبن',
        nameEn: 'Milk, for kneading',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp56-7',
        name: 'زيت للوجه',
        nameEn: 'Oil, for the top',
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
        text: 'يدعك البصل المفري بالملح والفلفل والبهار والزعتر.',
        textEn: 'Mash the grated onion with salt, pepper, mixed spice and thyme.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تضاف الملعقة الكبيرة من السمن والبقسماط ويخلطوا جيدا، ثم تعجن باللبن حتى تصير لينة.',
        textEn: 'Add the tablespoon of ghee and the breadcrumbs, mix well, then knead in milk until soft.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحشى البطة بهذه الخلطة وتوضع في صينية مدهونة بالزيت أو السمن، ويرش على الوجه مقدار من السمن أو الزيت وتغطى بالفويل.',
        textEn: 'Stuff the duck with this mixture, place it in an oiled or ghee-greased tray, drizzle a little more oil or ghee on top, and cover with foil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل في فرن متوسط الحرارة حتى النضج، ثم يرفع الفويل حتى يحمر الوجه.',
        textEn: 'Roast in a medium oven until cooked, then remove the foil to let the top brown.',
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
        title: 'رستو البط',
        ingredients: ['1 بطة متوسطة', '3 بصلات', 'ملح', 'فلفل', 'بهار', 'زعتر', 'ملعقة كبيرة سمن', '½ كوب بقسماط', 'لبن للعجن', 'زيت للوجه'],
        instructions: ['يدعك البصل المفري بالملح والفلفل والبهار والزعتر.', 'تضاف الملعقة الكبيرة من السمن والبقسماط ويخلطوا جيداً ثم تعجن باللبن حتى تصير لينة.', 'تحشى البطة بهذه الخلطة وتوضع في صينية مدهونة بالزيت أو السمن ويرش على الوجه مقدار من السمن أو الزيت وتغطى بالفويل.', 'تدخل في فرن متوسط الحرارة حتى النضج ثم يرفع الفويل حتى يحمر الوجه.']
      }
    }
  },
  {
    id: 'meat-57',
    title: 'الديك الرومي',
    titleEn: 'Roast Turkey with Lemon and Bay Leaf',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '1 يوم (تتبيل)',
    cookTime: '2 ساعة',
    servings: '8-10 أفراد',
    masterIngredients: [
      {
        id: 'mp57-1',
        name: 'ديك رومي متوسط',
        nameEn: 'Medium turkey',
        standardAmount: '1 ديك رومي',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 ديك رومي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp57-2',
        name: 'بصل كبير',
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
        id: 'mp57-3',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '3 فصوص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 فصوص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp57-4',
        name: 'عصير ليمون',
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
        id: 'mp57-5',
        name: 'ورق لورا',
        nameEn: 'Bay leaf',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp57-6',
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
        id: 'mp57-7',
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
        text: 'يفرم البصل مع الثوم وورق اللورا، ثم يتبل بالتوابل ويعصر عليه ليمون كثير.',
        textEn: 'Grind the onion with the garlic and bay leaf, season with the spices, and squeeze plenty of lemon juice over it.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يتبل الديك من الداخل والخارج جيدا ويدخل الثلاجة يوما كاملا.',
        textEn: 'Rub the marinade over the turkey inside and out, and refrigerate for a full day.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر صينية مدهونة زيت ويوضع فيها الديك المتبل ويغطى بالفويل.',
        textEn: 'Place the marinated turkey in an oiled tray and cover with foil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'ويدخل الفرن لمدة ساعتين تقريبا مع ملاحظة تقليبه على الوجه الآخر.',
        textEn: 'Roast for about 2 hours, turning it over partway through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد النضج يمكن تقطيعه شرائح ويرص في طبق التقديم.',
        textEn: 'Once cooked, it can be sliced and arranged on a serving plate.',
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
        title: 'الديك الرومي',
        ingredients: ['1 ديك متوسط', 'بصلة كبيرة', '3 فصوص ثوم', 'عصير ليمون كثير', 'ورق اللورا', 'ملح', 'فلفل', 'بهار', 'زيت'],
        instructions: ['يفرم البصل مع الثوم وورق اللورا ثم يتبل بالتوابل ويعصر عليه ليمون كثير.', 'يتبل الديك من الداخل والخارج جيدا ويدخل الثلاجة يوما كاملا.', 'نحضر صينية مدهونة زيت ويوضع فيه الديك المتبل ويغطى بالفويل.', 'ويدخل الفرن لمدة ساعتين تقريبا مع ملاحظة تقليبة على الوجه الآخر.', 'بعد النضج ممكن تقطيعة شرائح ويرص في طبق التقديم.']
      }
    }
  },
  {
    id: 'meat-58',
    title: 'الكفتة في الصينية',
    titleEn: 'Tray-Baked Kofta with Smoked Charcoal Aroma',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '12 ساعة (تتبيل)',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp58-1',
        name: 'لحم مفروم',
        nameEn: 'Minced beef',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp58-2',
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
        id: 'mp58-3',
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
        id: 'mp58-4',
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
        id: 'mp58-5',
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
        id: 'mp58-6',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp58-7',
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
        id: 'mp58-8',
        name: 'فحم طبيعي',
        nameEn: 'Natural charcoal, for smoking',
        standardAmount: '1 قطعة',
        category: 'other',
        sourceVariations: {
          doc1: '1 قطعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp58-9',
        name: 'سمن للوجه',
        nameEn: 'Ghee, for the top',
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
        text: 'يخلط اللحم بالبصلة المفرية وعصير الليمون والتوابل، وتترك في الثلاجة 12 ساعة.',
        textEn: 'Mix the beef with the grated onion, lemon juice and spices, and refrigerate for 12 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يعجن الخليط بالبيضة والبقسماط حسب القوام المطلوب.',
        textEn: 'Knead the mixture with the eggs and breadcrumbs to the desired consistency.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تصبع الكفتة كالأصابع المتوسطة مع خرقها بالسيخ لعمل فتحة.',
        textEn: 'Shape into medium-sized fingers, piercing each with a skewer to make a hole through the center.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن الصينية بالسمن وتوضع فيها أصابع الكفتة، ثم 2 ملعقة كبيرة سمن على الوجه، وتدخل في فرن متوسط الحرارة مع تغطيتها.',
        textEn: 'Grease a tray with ghee, arrange the kofta fingers in it, drizzle 2 tablespoons of ghee on top, cover, and bake in a medium oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد النضج تحرق قطعة فحم جيدا على البوتاجاز، ثم توضع في وسط الصينية على قليل من السمن وتغطى في الحال، ثم تهز الصينية حتى تنتشر رائحة الفحم على كل جوانب الصينية.',
        textEn: 'Once cooked, heat a piece of charcoal until glowing on the stovetop, place it in the center of the tray on a little ghee, cover immediately, and shake the tray gently so the smoky aroma spreads through it.',
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
        title: 'الكفتة في الصينية',
        ingredients: ['½ كيلو لحم مفروم', 'بصلة متوسطة', 'عصير 2 ليمونة', 'ملح', 'فلفل', '1بيضة', 'بيضة', 'بقسماط حسب الحاجة', 'سمن أو زيت', 'فحم', '2 ملعقة كبيرة سمن للوجه'],
        instructions: ['يخلط اللحم بالبصلة المفرية وعصير الليمون والتوابل وتترك في الثلاجة 12ساعة.', 'يعجن الخليط بالبيضة والبقسماط حسب السمك المطلوب.', 'تصبع الكفتة كالأصابع المتوسطة مع خرقها بالسيخ لعمل فتحة.', 'تدهن الصينية بالسمن وتوضع فيها أصابع الكفتة ثم 2 ملعقة كبيرة سمن على الوجه وتدخل في فرن متوسط الحرارة مع تغطيتها.', 'بعد النضج تحرق قطعة فحم جيدا على البوتاجاز ثم توضع في وسط الصينية على قليل من السمن وتغطى في الحال ثم تهز الصينية حتى تنتشر رائحة الفحم على كل جوانب الصينية.']
      }
    }
  },
  {
    id: 'meat-59',
    title: 'شاورمة الدجاج',
    titleEn: 'Chicken Shawarma with Yogurt-Mustard Marinade',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'mp59-1',
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
        id: 'mp59-2',
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
        id: 'mp59-3',
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
        id: 'mp59-4',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: '1 علبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 علبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp59-5',
        name: 'مستردة',
        nameEn: 'Mustard',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp59-6',
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
        id: 'mp59-7',
        name: 'فلفلة خضراء وطماطم',
        nameEn: 'Green pepper and tomato',
        standardAmount: '1 ثمرة من كل',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp59-8',
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
        id: 'mp59-9',
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
        id: 'mp59-10',
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
        text: 'تدعك البصلة المفرية بالخل والثوم والزبادي والمستردة.',
        textEn: 'Mash the grated onion with the vinegar, garlic, yogurt and mustard.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقطع الدجاج المسلوق قطعا صغيرة وتخلط جيدا مع الخليط.',
        textEn: 'Cut the boiled chicken into small pieces and mix well with the marinade.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يشوح في إناء بدون زيت على درجة حرارة هادئة حتى يمتص ماء البصل وترفع من الحرارة.',
        textEn: 'Sauté in a dry pot over low heat until the onion\'s liquid is absorbed, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر صينية ويوضع فيها الدجاج بعد دهنها بالزيت، ثم تقطع الفلفلة والطماطم شرائح وتوضع على الدجاج مع عصير الليمون والخل والبقدونس، وذلك حتى لا تصير الدجاجة ناشفة.',
        textEn: 'Oil a tray and add the chicken, then top with sliced green pepper and tomato, lemon juice, vinegar and parsley, to keep the chicken from drying out.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'لاحمرار الوجه ممكن وضع الصينية تحت الشواية مدة بسيطة جدا.',
        textEn: 'To brown the top, the tray can be placed briefly under the broiler.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 10,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'شاورمة الدجاج',
        ingredients: ['دجاجة مسلوقة', 'بصلة مفرية', '2 فص ثوم مفري', '1 زبادي', 'ملعقة كبيرة مستردة', 'ملعقة كبيرة خل', 'ثمرة فلفلة خضراء', 'ثمرة طماطم', 'بقدونس مفري', 'عصير 2 ليمونة', 'زيت'],
        instructions: ['تدعك البصلة المفرية بالخل والثوم والزبادي والمستردة.', 'يقطع الدجاج المسلوق قطعا صغيرة وتخلط جيدا مع الخليط.', 'يشوح في إناء بدون زيت على درجة حرارة هادئة حتى يمتص ماء البصل وترفع من الحرارة.', 'نحضر صينية ويوضع فيها الدجاج بعد دهنها بالزيت ثم تقطع الفلفلة والطماطم شرائح وتوضع على الدجاج مع عصير الليمون والخل والبقدونس وذلك حتى لا تصير الدجاجة ناشفة.', 'لاحمرار الوجه ممكن وضع الصينية تحت الشواية مدة بسيطة جدا.']
      }
    }
  },
  {
    id: 'meat-60',
    title: 'صدور الدجاج بالجلاش',
    titleEn: 'Chicken and Cheese Phyllo Triangles',
    chapter: 'الباب الأول: اللحم – الطيور – البحريات',
    chapterNumber: 1,
    category: 'لحوم وطيور',
    cookingMethod: 'فرن',
    prepTime: '30 دقيقة',
    cookTime: '20 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'mp60-1',
        name: 'صدور دجاج مفرومة',
        nameEn: 'Minced chicken breast',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp60-2',
        name: 'فلفلة خضراء مفرومة',
        nameEn: 'Chopped green pepper',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp60-3',
        name: 'جبن مهروس',
        nameEn: 'Mashed cheese',
        standardAmount: '1 قطعة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp60-4',
        name: 'طحينة',
        nameEn: 'Tahini',
        standardAmount: '1 ملعقة',
        category: 'other',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'mp60-5',
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
        id: 'mp60-6',
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
        id: 'mp60-7',
        name: 'زبدة',
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
        text: 'تتبل صدور الدجاج بالملح والفلفل والفلفلة المفرومة والجبن والطحينة جيدا.',
        textEn: 'Season the minced chicken well with salt, pepper, the chopped green pepper, cheese and tahini.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحضر رقة من الجلاش مدهونة بالزبدة، ثم نضع كمية من خلطة الدجاج بداخلها ونلفها كالمثلثات، ويدهن من الخارج بالزبدة.',
        textEn: 'Take a sheet of phyllo brushed with butter, place some of the chicken filling on it, fold into a triangle, and brush the outside with butter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع في صينية مدهونة خفيفا وهكذا في بقية رقات الجلاش.',
        textEn: 'Place on a lightly oiled tray, and repeat with the remaining phyllo sheets.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Bake in a medium oven until golden on top.',
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
        title: 'صدور الدجاج بالجلاش',
        ingredients: ['½ كيلو صدور دجاج مفروم', 'ثمرة فلفلة خضراء مفرومة', 'قطعة جبن مهروسة', 'ملعقة طحينة', 'ملح', 'فلفل', '½ كيلو جلاش', 'زبدة'],
        instructions: ['تتبل صدور الدجاج بالملح والفلفل والفلفة المفرومة والجبن والطحينة جيدا.', 'تحضر  راق من الجلاش مدهون بالزبدة ثم نضع كمية من خلطة الدجاج بداخله ونلفه كالمثلثات ويدهن من الخارج بالزبدة.', 'يوضع في صينية مدهونة خفيفا وهكذا في بقية راقات الجلاش.', 'تدخل فرن متوسط الحرارة حتى يحمر الوجه.']
      }
    }
  },
];
