import { Recipe } from '../../types';

export const seafoodRecipes: Recipe[] = [
  {
    id: 'sea-01',
    title: 'السمك المقلي (بالدقيق / بالبيض والبقسماط)',
    titleEn: 'Fried Fish (Flour Dusted or Breaded)',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تحمير',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'sf1-1',
        name: 'سمك بلطي أو زبيدي طازج',
        standardAmount: '1 إلى 2 كيلو سمك مناسب للقلي',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 : 2 كيلو سمك يناسب القلي مثل البلطي أو الزبيدي',
          doc2: '1 : 2 كيلو سمك بلطي أو زبيدي',
          doc3: '1 : 2 كيلو سمك بلطي'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf1-2',
        name: 'ثوم مفروم ناعم',
        standardAmount: '1/4 رأس ثوم مفري (حوالي 6 فصوص)',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم',
          doc2: '1/4 رأس ثوم مفري',
          doc3: '1/4 رأس ثوم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf1-3',
        name: 'عصير ليمون طازج',
        standardAmount: 'عصير 2-3 ليمونات',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'عصير ليمون',
          doc2: 'عصير ليمون',
          doc3: 'عصير ليمون'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf1-4',
        name: 'كمون وملح مطحون',
        standardAmount: '1 ملعقة كبيرة كمون + ملح خفيف',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح – كمون',
          doc2: 'ملح – كمون',
          doc3: 'ملح – كمون'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf1-5',
        name: 'دقيق أبيض للتغليف',
        standardAmount: '1-2 كوب دقيق',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'دقيق',
          doc2: 'دقيق',
          doc3: 'دقيق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf1-6',
        name: 'بيض وبقسماط (للنسخة البانيه)',
        standardAmount: '2 بيضة مخفوقة + كوب بقسماط ناعم',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 بيضة – بقسماط (في وصفة السمك المقلي بالبيض)',
          doc2: '2 بيضة – بقسماط',
          doc3: '2 بيضة وبقسماط'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf1-7',
        name: 'زيت نباتي للقلي',
        standardAmount: 'زيت مقدوح للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت للقلي',
          doc2: 'زيت للقلي',
          doc3: 'زيت للقلي'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تنظيف وتجهيز السمك: يجهز السمك ويترك صحيحاً إن كان صغيراً أو يقطع جزل إن كان كبيراً، ويملح تمليحاً خفيفاً بعد عمل شقوق مائلة في الظهر.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'التتبيل: يتبل بالكمون والملح والثوم المفروم وعصير الليمون، ويفرك داخل وخارج السمكة ويترك فترة كافية حتى يتشرب التتبيلة بالكامل.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'طريقة القلي بالدقيق التقليدية: يغطى السمك تغطية خفيفة بالدقيق وينفض الزائد، ثم يقلى في الزيت الساخن المقدوح حتى يصير ذهبياً ومقرمشاً.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'طريقة البيض والبقسماط المقرمشة (النسخة الإضافية): يغطى السمك خفيفاً بالدقيق أولاً، ثم يغمس في البيض المخفوق المتبل بالملح والفلفل، ثم يغلف بالبقسماط ويحمر في الزيت.',
        phase: 'cook',
        isAlternative: true,
        alternativeLabel: 'طريقة السمك بالبيض والبقسماط',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'variation'
      },
      {
        stepNumber: 5,
        text: 'التقديم: يقدم السمك المقلي ساخناً مع سلطة الطحينة وسلطة الخضراء أو الصلصة البيضاء للبحريات.',
        phase: 'finish',
        sourceDocs: ['doc2', 'doc3'],
        importance: 'tip'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 7,
      totalUniqueSteps: 5,
      totalMasterIngredients: 7,
      overlapPercentage: 86,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'دمجت الوثائق طريقتي القلي بالدقيق وقلي البقسماط في سجل رئيسي متكامل للمقادير مع تمييز خطوات التغليف.'
    },
    rawDocVersions: {
      doc1: {
        title: 'السمك المقلي بالدقيق / السمك المقلي بالبيض والبقسماط',
        pageNumber: 51,
        ingredients: ['1 : 2 كيلو سمك بلطي أو زبيدي', '1/4 رأس ثوم', 'ملح - كمون', 'عصير ليمون', 'دقيق', '2 بيضة', 'بقسماط', 'زيت للقلي'],
        instructions: ['يجهز السمك ويملح خفيفا', 'يتبل بالكمون والثوم وعصير الليمون', 'يغطى بالدقيق ويقلى في الزيت المقدوح', 'يغمس في البيض ثم البقسماط ويحمر']
      },
      doc3: {
        title: '1- السمك المقلي بالدقيق / 2- بالبيض والبقسماط',
        pageNumber: 91,
        ingredients: ['1 : 2 كيلو سمك مناسب للقلي', '1/4 رأس ثوم', 'ملح - كمون - عصير ليمون', 'دقيق - زيت للقلي', '2 بيضة وبقسماط'],
        instructions: ['يجهز السمك ويترك صحيحا أو يقطع', 'يتبل بالكمون والملح والثوم وعصير الليمون', 'يغطى خفيفا بالدقيق ثم يقلى', 'مثل الطريقة السابقة وبعد تغطيته بالدقيق يغمس في البيض ثم البقسماط']
      }
    }
  },
  {
    id: 'sea-02',
    title: 'السمك المشوي بالردة ودقة الخل والثوم',
    titleEn: 'Egyptian Grilled Mullet (Samak Mashwi with Radda & Garlic Vinegar Doffa)',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'شوي',
    prepTime: '15 دقيقة',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'sf2-1',
        name: 'سمك بوري طازج',
        standardAmount: '1 إلى 1.5 كيلو سمك بوري',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 : 1 1/2 كيلو سمك بوري',
          doc2: '1 : 1 1/2 كيلو سمك بوري',
          doc3: '1 : 1 1/2 كيلو سمك بوري'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf2-2',
        name: 'ردة ناعمة (نخالة القمح للشواء)',
        standardAmount: '1 كوب ردة ناعمة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'ردة',
          doc2: 'ردة',
          doc3: 'ردة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf2-3',
        name: 'ثوم مفري للدقة والتتبيل',
        standardAmount: '1/4 رأس ثوم + 2 فص إضافي للدقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم – 2 فص ثوم لعمل تتبيلة السمك',
          doc2: '1/4 رأس ثوم – 2 فص ثوم',
          doc3: '1/4 رأس ثوم – 2 فص ثوم مفري'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf2-4',
        name: 'عصير ليمون وخل أبيض',
        standardAmount: 'عصير ليمون + 2 ملعقة كبيرة خل',
        category: 'liquid',
        sourceVariations: {
          doc1: 'عصير ليمون – خل للتتبيلة',
          doc2: 'عصير ليمون – 2 ملعقة كبيرة خل',
          doc3: 'عصير ليمون – 2 ملعقة كبيرة خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf2-5',
        name: 'توابل الشواء (كمون، جوزة الطيب، كرفس، زنجبيل، قرفة)',
        standardAmount: 'كمون، ملح، فلفل، جوزة الطيب، كرفس وزنجبيل وقرفة اختياري',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح – فلفل – كمون – جوزة الطيب – كرفس وزنجبيل وقرفة وزيت زيتون',
          doc2: 'ملح – فلفل – كمون – جوزة الطيب',
          doc3: 'ملح – فلفل – كمون – جوزة الطيب – كرفس وزنجبيل وقرفة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf2-6',
        name: 'زيت نباتي أو زيت زيتون',
        standardAmount: 'قليل لدهن السمك',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت – زيت الزيتون',
          doc2: 'زيت',
          doc3: 'زيت الزيتون'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'ينظف السمك البوري ويجهز، ثم يتبل بالملح والكمون وجوزة الطيب والفلفل والثوم المفروم وعصير الليمون، ويدهن بقليل من الزيت ثم يغطى بالردة تماماً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يشوى السمك على الصاج الساخن أو الشواية بعد رشه بالردة ودهنه بالزيت مع التقليب على الوجهين حتى يتفحم القشر الخارجي برفق وينضج اللحم.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحضير دقة التتبيلة الساخنة (السر البلدي): نخلط 2 فص ثوم مفري مع الملح والكمون والخل حتى تتكون تتبيلة خفيفة متجانسة.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'التغميس الفوري: يتبل السمك وهو ساخن جداً بعد الشوي مباشرة بوضعه في خلطة الدقة والخل والثوم أو سكبها عليه مباشرة، ثم يرفع فوراً في صحن التقديم ليمتص النكهة ويظل طرياً.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تنويع عطري إضافي: يمكن أيضاً تتبيل السمك المشوي بإضافة الكرفس المفروم والزنجبيل والقرفة وزيت الزيتون قبل الشوي لنكهة بحرية غنية.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'تتبيلة الكرفس والزنجبيل',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 90,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'توحيد مقادير شوي السمك البوري بالردة والخلطة الشهيرة مع دقة الثوم والخل والليمون العطري.'
    },
    rawDocVersions: {
      doc1: {
        title: 'السمك المشوي وتتبيلة السمك',
        pageNumber: 52,
        ingredients: ['1 : 1 1/2 كيلو سمك بوري', 'ملح وفلفل وكمون وجوزة الطيب', '1/4 رأس ثوم', 'عصير ليمون', 'ردة', '2 فص ثوم وخل للتتبيلة'],
        instructions: ['ينظف السمك ويتبل ثم يغطى بالردة', 'يشوى بعد رشه بالردة ودهنه بالزيت', 'يتبل السمك وهو ساخن بعد الشوي مباشرة بخلطة الثوم والخل', 'يمكن تتبيله بإضافة الكرفس والزنجبيل والقرفة']
      },
      doc3: {
        title: '3- السمك المشوي / عمل تتبيلة السمك',
        pageNumber: 91,
        ingredients: ['1 : 1 1/2 كيلو سمك بوري', 'ملح وفلفل وكمون', '1/4 رأس ثوم', 'عصير ليمون وردة', '2 فص ثوم مفري - ملح - كمون - 2 م ك خل'],
        instructions: ['ينظف السمك ويتبل بالملح والكمون', 'يشوى بعد رشه بالردة', 'يتبل وهو ساخن بخلطة الثوم والخل والكمون والملح', 'يرفع في صحن التقديم مباشرة']
      }
    }
  },
  {
    id: 'sea-03',
    title: 'صيادية الجمبري (النيء والناضج بالأرز)',
    titleEn: 'Shrimp Sayadia with Spiced Brown Rice',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تسبيك',
    prepTime: '25 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'sf3-1',
        name: 'جمبري مقشر',
        standardAmount: '1 كيلو جمبري',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 كيلو جمبري',
          doc2: '1 كيلو جمبري',
          doc3: '1 كيلو جمبري نيء أو ناضج'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf3-2',
        name: 'أرز مصري مغسول ومصفى',
        standardAmount: '1 إلى 2 كوب أرز مصري',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'كوب أرز',
          doc2: 'كوب أرز',
          doc3: 'كوب أرز مغسول ومصفى'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf3-3',
        name: 'بصل مفروم ناعم للصيادية',
        standardAmount: '1-2 بصلة كبيرة مفرومة ناعماً',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة كبيرة مفرومة ناعما',
          doc2: 'بصلة كبيرة مفرومة',
          doc3: 'بصلة كبيرة مفرية ناعما'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf3-4',
        name: 'زيت نباتي',
        standardAmount: '2 ملعقة كبيرة زيت',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت',
          doc2: '2 ملعقة زيت',
          doc3: '2 ملعقة زيت'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf3-5',
        name: 'ماء ساخن للأرز والمرق',
        standardAmount: '2 كوب ماء',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب ماء',
          doc2: '2 كوب ماء',
          doc3: '2 كوب ماء'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf3-6',
        name: 'توابل وتزيين (ملح، فلفل، بقدونس وشرائح ليمون)',
        standardAmount: 'ملح وفلفل + بقدونس مفروم وحلقات ليمون للتجميل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح وفلفل – بقدونس وحلقات ليمون',
          doc2: 'ملح وفلفل وبقدونس',
          doc3: 'ملح وفلفل وحلقات ليمون رفيعة وبقدونس'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تحمير بصل الصيادية البني: تحمر البصلة المفرية ناعماً في الزيت حتى يغمق لونها البني المميز للصيادية دون حرقها، ثم ترفع وتسحق جيداً لتوزيع لونها في الماء.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'إعداد مرق الصيادية: يضاف 2 كوب من الماء في نفس الإناء وعليه ملح وفلفل ثم يضاف إليه البصل المسحوق ويترك حتى الغليان حتى يكتسب المرق اللون البني الكهرماني.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'طريقة الجمبري النيء: يقشر الجمبري النيء ثم يضاف إلى الماء المغلي ويترك حتى ينضج نصف نضج فقط، ثم يضاف كوب الأرز المغسول والمصفى ويقلب قليلاً، ويترك الإناء مغطى على درجة حرارة منخفضة حتى تمام النضج.',
        phase: 'cook',
        isAlternative: false,
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'طريقة الجمبري الناضج كطبقات (النسخة الإضافية): في حالة استخدام جمبري مطهو ومقشر مسبقاً، يسكب الأرز على الماء المغلي ويسوى نصف تسوية، ثم يضاف نصف الجمبري الناضج ويقلب معه، وعند الغرف يغرف على هيئة طبقات متبادلة مع النصف المتبقي من الجمبري في قالب كبير ثم يقلب في صحن التقديم.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'صيادية الجمبري الناضج كطبقات مقلوبة',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'variation'
      },
      {
        stepNumber: 5,
        text: 'التقديم: يغرف الأرز والصيادية في طبق التقديم ويزين بحلقات الليمون الرفيعة والبقدونس المفروم ويقدم مع سلطة الطحينة وسلطة البحر.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 88,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'دمج وصفتي صيادية الجمبري النيء والصيادية بالجمبري الناضج مع حفظ تقنية تحمير بصل الصيادية الغامق وطبقات القالب المقلوب.'
    },
    rawDocVersions: {
      doc1: {
        title: 'صيادية الجمبري النيء / صيادية الجمبري الناضج',
        pageNumber: 58,
        ingredients: ['1 كيلو جمبري', 'بصلة كبيرة', '2 كوب ماء', 'ملح وفلفل', 'زيت', 'كوب أرز', 'ليمون وبقدونس'],
        instructions: ['تحمر البصلة في الزيت حتى يغمق لونها وتسحق', 'يضاف الماء والملح حتى الغليان', 'يضاف الجمبري النيء ثم الأرز ويترك مغطى للنضج', 'طريقة أخرى للجمبري الناضج بطبقات متبادلة وتقلب في طبق كبير']
      },
      doc3: {
        title: '4- صيادية الجمبري النيء / 5- صيادية الجمبري الناضج',
        pageNumber: 96,
        ingredients: ['بصلة كبيرة', '2 كوب ماء', 'ملح وفلفل', 'زيت', 'كوب أرز', '1 كيلو جمبري'],
        instructions: ['تحمر البصلة حتى يغمق لونها وتسحق', 'يضاف 2 كوب ماء حتى الغليان', 'يقشر الجمبري النيء ويضاف للماء المغلي ثم الأرز', 'الناضج يضاف قبل إتمام نضج الأرز ويغرف طبقات متبادلة']
      }
    }
  },
  {
    id: 'sea-04',
    title: 'سبيط مقلي مقرمش (كاليماري)',
    titleEn: 'Crispy Fried Calamari (Squid Rings / Strips)',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تحمير',
    prepTime: '20 دقيقة',
    cookTime: '10 دقائق',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'sf4-1',
        name: 'سبيط (حبار / كاليماري) طازج',
        standardAmount: '1 كيلو سبيط منظف ومقطع شرائح',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 كيلو سبيط (الكاليماري)',
          doc2: '1 كيلو سبيط',
          doc3: '1 كيلو حبار (سبيط)'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf4-2',
        name: 'خل أبيض',
        standardAmount: '2 ملعقة كبيرة خل',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة خل',
          doc2: '2 ملعقة كبيرة خل',
          doc3: '2 م ك خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf4-3',
        name: 'عصير ليمون طازج',
        standardAmount: 'عصير 2 ليمونة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'عصير ليمونتين',
          doc2: 'عصير ليمونتين',
          doc3: 'عصير ليمونتين'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf4-4',
        name: 'كمون وملح وفلفل أسود',
        standardAmount: 'ملح وفلفل وكمون ناعم',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح – فلفل – كمون',
          doc2: 'ملح – فلفل – كمون',
          doc3: 'ملح – فلفل – كمون'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf4-5',
        name: 'دقيق أبيض للتغليف',
        standardAmount: '3 إلى 4 ملاعق كبيرة دقيق',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'من 3 إلى 4 ملعقة كبيرة دقيق',
          doc2: 'من 3 إلى 4 ملعقة دقيق',
          doc3: 'من 3 إلى 4 م ك دقيق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'sf4-6',
        name: 'زيت غزير للقلي',
        standardAmount: 'زيت غزير مقدوح للقلي السريع',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت للقلي',
          doc2: 'زيت للقلي',
          doc3: 'زيت للقلي'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'التنظيف والغسل بالخل: ينظف السبيط بماء ساخن ويغسل جيداً جداً ثم يقلب مع الخل ويوضع في مصفاة ويترك لمدة دقيقة واحدة للتخلص من الرائحة والرواسب.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'السلق السريع للحجم الكبير: إذا كان السبيط كبير الحجم، يغلى الماء ويسقط فيه السبيط لمدة غلوة واحدة فقط (نصف دقيقة) ثم يصفى فوراً لمنع مطاطيته.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 3,
        text: 'التقطيع والتتبيل: تقطع كل واحدة شرائح بالطول أو حلقات مع تقطيع الأطراف. يوضع في وعاء عميق ويتبل بالملح والفلفل والكمون والليمون ويترك لمدة ساعة على الأقل.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'التجفيف والتغليف: يوضع في مصفاة ليجف تماماً من ماء التتبيلة، ثم يغمس في الدقيق حتى يتغلف جيداً.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'القلي: يقلى في زيت ساخن جداً مقدوح حتى يأخذ لوناً ذهبياً جذاباً ومقرمشاً ويرفع على مناديل ورقية.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 6,
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 92,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'نفس المقادير والخطوات الدقيقة متكررة في الوثائق الثلاث، مع نصيحة الغلوة الواحدة لمنع التجليد في الكاليماري الكبير.'
    },
    rawDocVersions: {
      doc1: {
        title: 'السبيط (الكاليماري)',
        pageNumber: 55,
        ingredients: ['1 كيلو سبيط', '2 ملعقة كبيرة خل', 'ملح - فلفل - كمون', 'عصير ليمونتين', '3 إلى 4 ملعقة كبيرة دقيق', 'زيت للقلي'],
        instructions: ['تنظيف السبيط بماء ساخن وغسله بالخل دقيقة', 'إذا كان السبيط كبير يسقط في ماء مغلي غلوة واحدة فقط ويصفى', 'تقطع شرائح وتتبل ساعة بالكمون والليمون', 'يصفى ويغمس بالدقيق ثم يقلى']
      },
      doc3: {
        title: '2- الحبار (السبيط)',
        pageNumber: 94,
        ingredients: ['1 كيلو حبار (سبيط)', '2 م ك خل', 'ملح وفلفل وكمون', 'عصير ليمونتين', 'من 3 إلى 4 م ك دقيق', 'زيت للقلي'],
        instructions: ['ينظف بماء ساخن ويقلب مع الخل', 'غلوة واحدة إذا كان كبيراً', 'يقطع شرائح ويتبل ساعة في الثلاجة', 'يوضع في مصفاة ليجف تماما ثم يغمس في الدقيق ويقلى']
      }
    }
  },
  {
    id: 'sea-05',
    title: 'الصلصة البيضاء للبحريات',
    titleEn: 'White Sauce for Seafood',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '10 دقائق',
    servings: 'يكفي لطاجن بحريات واحد',
    masterIngredients: [
      {
        id: 'sf5-1',
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
        id: 'sf5-2',
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
        id: 'sf5-3',
        name: 'لبن أو مرق',
        nameEn: 'Milk or fish broth',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf5-4',
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
        text: 'يسخن السمن أو الزيت ويضاف إليه الدقيق ويقلب حتى يصفر قليلا.',
        textEn: 'Heat the ghee or oil, whisk in the flour, and stir until lightly golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف اللبن أو المرق تدريجيا بدون حرارة مع التقليب المستمر حتى يتجانس، ثم يرفع على حرارة متوسطة حتى يغلظ القوام.',
        textEn: 'Off the heat, whisk in the milk or broth gradually until smooth, then return to medium heat, stirring, until it thickens.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يتبل بالملح والفلفل.',
        textEn: 'Season with salt and pepper.',
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
        title: 'الصلصة البيضاء للبحريات',
        ingredients: ['ملعقة كبيرة دقيق', 'ملعقة كبيرة سمن أو زيت', 'كوب لبن أو مرق', 'ملح', 'فلفل'],
        instructions: ['يسيح السمن أو الزيت ثم يضاف الدقيق و يقلب جيدا ثم يرفع من البوتاجاز.', 'يضاف اللبن أو المرق تدريجيا ثم يرفع ثانية على البوتاجاز حتى يصل إلى السمك المطلوب مع مراعاة أن تكون الصلصة مائلة إلى السيولة قليلا.', 'يمكن أن يضاف حسب الرغبة ملعقة صغيرة بقدونس مفري أو ملعقة صغيرة من عصير الليمون للصلصة و هي ساخنة.', 'يمكن أيضا أن نخلط جيدا ملعقة صغيرة من المستردة مع ملعقة كبيرة خل و تضاف إلى الصلصة ثم يعاد غليها على البوتاجاز.', 'يمكن أيضا أن نضيف ملعقة صغيرة من المستردة إلى الصلصة و تقلَب جيدا و تترك لتبرد ثم نخلط الصلصة تدريجيا بملعقة كبيرة زيت و بالتبادل مع ملعقة كبيرة خل مع التقليب المستمر.']
      }
    }
  },
  {
    id: 'sea-06',
    title: 'كزبرية السمك',
    titleEn: 'Fish in Coriander-Garlic Tomato Sauce',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'sf6-1',
        name: 'سمك',
        nameEn: 'Fish',
        standardAmount: '1.5 كيلو',
        category: 'seafood',
        sourceVariations: {
          doc1: '1.5 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf6-2',
        name: 'بصل مفري',
        nameEn: 'Grated onion',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf6-3',
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
        id: 'sf6-4',
        name: 'كسبرة ناشفة',
        nameEn: 'Dried ground coriander',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf6-5',
        name: 'طماطم معصورة',
        nameEn: 'Pressed tomatoes',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf6-6',
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
        id: 'sf6-7',
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
        id: 'sf6-8',
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
        text: 'يشوح البصل المفري في الزيت حتى يصفر لونه، ثم يضاف الثوم المفري والكسبرة الناشفة ويقلبوا.',
        textEn: 'Sauté the grated onion in oil until golden, then add the crushed garlic and dried coriander and stir.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تضاف الطماطم المعصورة ويتبل بالملح والفلفل، ثم يضاف نصف كوب ماء وتترك حتى يتسبك القوام.',
        textEn: 'Add the pressed tomatoes, season with salt and pepper, then add half a cup of water and simmer until the sauce thickens.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع السمك في الصلصة ويترك على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add the fish to the sauce and simmer over low heat until cooked through.',
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
        title: 'كزبرية السمك',
        ingredients: ['½1 كيلو سمك', '½ كيلو بصل مفري', '½ رأس ثوم مفري', 'ملعقة كبيرة كسبرة ناشفة', '¼ كيلو طماطم معصورة', 'زيت', 'ملح', 'فلفل', '½ كوب ماء'],
        instructions: ['يجهز السمك ويحمر نصف تحمير في الزيت ثم يرفع من الزيت.', 'يحمر البصل ثم نضيف الثوم المخلوط بالكسبرة الناشفة.', 'تضاف الطماطم المضروبة في الخلاط ثم تترك على درجة حرارة هادئة مع تمليحها حسب الحاجة وإضافة قليل من الماء عند الحاجة حتى تنضج الطماطم.', 'يوضع السمك في الخليط ويغطى الإناء ويترك على درجة حرارة هادئة حتى النضج.', 'ممكن استبدال الإناء بالصينية وتغطيتها وإدخالها في الفرن.', 'يقدم مع سلطة الطحينة (انظري باب السلطات) أو صلصة البحريات البيضاء.']
      }
    }
  },
  {
    id: 'sea-07',
    title: 'سمك السنجاري',
    titleEn: 'Sangari-Style Fish in Cumin-Tomato Sauce',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'sf7-1',
        name: 'سمك بوري',
        nameEn: 'Mullet fish',
        standardAmount: '1 كيلو',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf7-2',
        name: 'بصل كبير مفري',
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
        id: 'sf7-3',
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
        id: 'sf7-4',
        name: 'كمون وعصير ليمون',
        nameEn: 'Cumin and lemon juice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf7-5',
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
        id: 'sf7-6',
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
        id: 'sf7-7',
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
        id: 'sf7-8',
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
        text: 'يشوح البصل المفري في الزيت، ثم يضاف الثوم المفري ويقلب حتى يصفر.',
        textEn: 'Sauté the grated onion in oil, then add the crushed garlic and stir until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تضاف الطماطم والفلفل الأخضر مقطعين، مع الكمون وعصير الليمون والملح والفلفل، وتترك حتى تنضج الخضار.',
        textEn: 'Add the chopped tomatoes and green peppers, with the cumin, lemon juice, salt and pepper, and cook until the vegetables soften.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع السمك في الصلصة ويترك على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add the fish to the sauce and simmer over low heat until cooked through.',
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
        title: 'سمك السنجاري',
        ingredients: ['1 كيلوسمك بوري', 'بصلة كبيرة مفرية', '¼ رأس ثوم مفري', 'زيت', 'ملح', 'فلفل', 'كمون وعصير ليمون', '2 ثمرة طماطم', '2 ثمرة فلفل أخضر'],
        instructions: ['ينظف السمك ويفتح من بطنه كفتح الكتاب ثم يتبل بالبصل والثوم والتوابل وعصير الليمون.', 'تقطع الطماطم والفلفل الأخضر حلقات رفيعة.', 'توضع الخلطة داخل بطن السمك وتترك لفترة.', 'تدهن صينية وترص فيه السمك وعلى الوجه زيت وليمون ثم يدخل الفرن للشي.', 'يقدم مع سلطة الطحينة (انظري باب السلطات) أو صلصة البحريات البيضاء.']
      }
    }
  },
  {
    id: 'sea-08',
    title: 'السمك البياض',
    titleEn: 'White Fish Stew with Potatoes and Celery',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'sf8-1',
        name: 'سمك مقطع',
        nameEn: 'Fish, cut into pieces',
        standardAmount: '1 كيلو',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf8-2',
        name: 'طماطم كبيرة',
        nameEn: 'Large tomatoes',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf8-3',
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
        id: 'sf8-4',
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
        id: 'sf8-5',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf8-6',
        name: 'زبدة',
        nameEn: 'Butter',
        standardAmount: '3 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf8-7',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '3 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf8-8',
        name: 'كرفس وبقدونس',
        nameEn: 'Celery and parsley',
        standardAmount: 'حسب الرغبة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf8-9',
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
      {
        id: 'sf8-10',
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
        id: 'sf8-11',
        name: 'ملح وفلفل وماء',
        nameEn: 'Salt, pepper and water',
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
        text: 'تحمر الطماطم المقطعة مع البصل والثوم في الزبدة، ويضاف السكر لتوازن الحموضة.',
        textEn: 'Sauté the chopped tomatoes with the onion and garlic in the butter, adding the sugar to balance the acidity.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف الدقيق ويقلب جيدا، ثم تضاف صلصة الطماطم والكرفس والبقدونس والملح والفلفل مع كمية من الماء حسب الحاجة.',
        textEn: 'Stir in the flour, then add the tomato paste, celery, parsley, salt and pepper, along with water as needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف حبات البطاطس المقطعة وتترك حتى تنضج تقريبا.',
        textEn: 'Add the diced potatoes and cook until nearly done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يوضع السمك في الصلصة ويترك على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add the fish to the sauce and simmer over low heat until cooked through.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 11,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'السمك البياض',
        ingredients: ['1 كيلو سمك مقطع', '2 ثمرة طماطم كبيرة', '1 بصلة كبيرة', '3 فصوص ثوم مفري', '½ ملعقة كبيرة سكر', '3 ملعقة كبيرة زبده', '3 ملعقة كبيرة دقيق', 'ملح', 'فلفل', 'كرفس', 'بقدونس', 'ماء حسب الحاجة', '2 حبة بطاطس', '2 ملعقة كبيرة صلصة طماطم'],
        instructions: ['يحمر البصل في الزيت ثم الثوم ثم الطماطم المقطعة ثم يضاف حوالي 1 كوب ماء مع السكر حتى الغليان حوالي 5 دقائق على حرارة متوسطة.', 'تدهن صينية بالزيت ويوضع فيها البصل المحمر بالسائل.', 'تقطع البطاطس مكعبات متوسطة وتضاف إلى هذه الصلصة مع 2 ملعقة كبيرة صلصة طماطم.', 'في نفس الإناء الأول تسيح الزبدة وتقلب مع الدقيق جيدا ثم يضاف لها التوابل والكرافس والبقدونس حتى تصل إلى السمك المتوسط مع إضافة الماء ويفضل أن يكون السمك خفيفا في حالة طهو البطاطس مع السمك.', 'توضع قطع السمك في الخلطة ثم تصب على الصلصة في الصينية مع البطاطس.', 'تغطى الصينية وتدخل الفرن حتى النضج مع ترك قليل من الصوص حتى يسكب على السمك عند التقديم.', 'يقدم مع سلطة الطحينة (انظري باب السلطات) أو صلصة البحريات البيضاء.']
      }
    }
  },
  {
    id: 'sea-09',
    title: 'الحبَار (الكاليماري)',
    titleEn: 'Fried Squid (Calamari) Rings',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'قلي',
    prepTime: '15 دقيقة',
    cookTime: '10 دقائق',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'sf9-1',
        name: 'حبار (سبيط)',
        nameEn: 'Squid (calamari)',
        standardAmount: '1 كيلو',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf9-2',
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
        id: 'sf9-3',
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
        id: 'sf9-4',
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
        id: 'sf9-5',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '3-4 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3-4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf9-6',
        name: 'زيت للقلي',
        nameEn: 'Oil, for frying',
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
        text: 'يقطع الحبار حلقات ويتبل بالخل والملح والفلفل والكمون وعصير الليمونتين.',
        textEn: 'Cut the squid into rings and marinate with the vinegar, salt, pepper, cumin and lemon juice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تغمس الحلقات في الدقيق وتقلى في زيت غزير حتى تصفر.',
        textEn: 'Coat the rings in flour and deep-fry until golden.',
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
        title: 'الحبَار (الكاليماري)',
        ingredients: ['1 كيلو حبَار (سبيط)', '2 ملعقة كبيرة خل', 'ملح', 'فلفل', 'كمون', 'عصير ليمونتين', 'من 3 إلى 4 ملعقة كبيرة دقيق', 'زيت للقلي'],
        instructions: ['ينظف السبيط بماء ساخن ويغسل جيدا جدا ثم يقلب مع الخل ثم يوضع في مصفاة ويترك لمدة دقيقة واحدة.', 'إذا كان السبيط كبير يغلى الماء ويسقط فيه غلوه واحدة فقط ثم يصفى.', 'تقطع كل واحدة شرائح بالطول مع تقطيع الأطراف.', 'إحضار وعاء عميق تتبل فيه الشرائح بالملح والفلفل والكمون والليمون ويترك لمدة ساعة على الأقل.', 'يوضع في مصفاة ليجف تماما من الماء.', 'يغمس في الدقيق ثم يقلى في الزيت.', 'يقدم مع سلطة الطحينة (انظري باب السلطات) أو صلصة البحريات البيضاء.']
      }
    }
  },
  {
    id: 'sea-10',
    title: 'الجمبري (الروبيان)',
    titleEn: 'Shrimp Sautéed with Celery, Cumin and Lemon',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'sf10-1',
        name: 'جمبري',
        nameEn: 'Shrimp',
        standardAmount: '1 كيلو',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf10-2',
        name: 'بصل',
        nameEn: 'Onion',
        standardAmount: '3 بصلات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 بصلات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf10-3',
        name: 'كرفس',
        nameEn: 'Celery',
        standardAmount: '1 حزمة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حزمة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf10-4',
        name: 'كمون وفلفل ومستكة وحبهان',
        nameEn: 'Cumin, pepper, mastic and cardamom',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf10-5',
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
        id: 'sf10-6',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يشوح البصل والكرفس المقطعان في قليل من الزيت.',
        textEn: 'Sauté the chopped onion and celery in a little oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف الجمبري مع الكمون والفلفل والمستكة والحبهان والملح، ويترك حتى ينضج.',
        textEn: 'Add the shrimp with the cumin, pepper, mastic, cardamom and salt, and cook until done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف عصير الليمون قبل التقديم.',
        textEn: 'Add the lemon juice just before serving.',
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
        title: 'الجمبري (الروبيان)',
        ingredients: ['1 كيلو جمبري', '3 بصلات', 'حزمة كرفس', 'كمون', 'فلفل', 'مستكة', 'حبهان', 'ملح', 'عصير الليمون'],
        instructions: ['يغسل عدة مرات للتخلص من الرمل.', 'يقطع البصل حلقات ويوضع في طبقات متبادلة مع الجمبري والكرفس والتوابل وقليل من الملح وعصير الليمون.', 'ممكن إضافة قليل من الماء للجمبري كبير الحجم.', 'يغطى الإناء ويرفع على درجة حرارة هادئة مع تقليبه باستمرار حتى النضج.', 'يرفع الإناء ويهز ما بداخله حتى لا يلتصق.', 'يقدم حسب الرغبة إما بالقشر أو بعد تقشيره.', 'يقدم مع سلطة الطحينة (انظري باب السلطات) أو صلصة البحريات البيضاء.']
      }
    }
  },
  {
    id: 'sea-11',
    title: 'الجمبري بالمايونيز',
    titleEn: 'Shrimp with Mayonnaise Sauce',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'sf11-1',
        name: 'جمبري',
        nameEn: 'Shrimp',
        standardAmount: '1 كيلو',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf11-2',
        name: 'بصل',
        nameEn: 'Onion',
        standardAmount: '3 بصلات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 بصلات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf11-3',
        name: 'كرفس',
        nameEn: 'Celery',
        standardAmount: '1 حزمة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حزمة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf11-4',
        name: 'كمون وفلفل ومستكة وحبهان',
        nameEn: 'Cumin, pepper, mastic and cardamom',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf11-5',
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
        id: 'sf11-6',
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
        id: 'sf11-7',
        name: 'صلصة مايونيز',
        nameEn: 'Mayonnaise sauce (see salads section)',
        standardAmount: '2 ملعقة كبيرة',
        category: 'other',
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
        text: 'يشوح البصل والكرفس المقطعان في قليل من الزيت.',
        textEn: 'Sauté the chopped onion and celery in a little oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف الجمبري مع الكمون والفلفل والمستكة والحبهان والملح وعصير الليمون، ويترك حتى ينضج.',
        textEn: 'Add the shrimp with the cumin, pepper, mastic, cardamom, salt and lemon juice, and cook until done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يترك حتى يبرد ثم يقلب بصلصة المايونيز (انظر باب السلطات) قبل التقديم.',
        textEn: 'Let it cool, then toss with the mayonnaise sauce (see the salads section) before serving.',
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
        title: 'الجمبري بالمايونيز',
        ingredients: ['1 كيلو جمبري', '3 بصلات', 'حزمة كرفس', 'كمون', 'فلفل', 'مستكة', 'حبهان', 'ملح', 'عصير الليمون', '2 ملعقة كبيرة صلصة المايونيز (انظري باب السلطات)'],
        instructions: ['يغسل عدة مرات للتخلص من الرمل.', 'يقطع البصل حلقات ويوضع في طبقات متبادلة مع الجمبري والكرفس والمستكة و الحبهان وقليل من الملح.', 'ممكن إضافة قليل من الماء للجمبري كبير الحجم.', 'يغطى الإناء ويرفع على درجة حرارة هادئة مع تقليبه باستمرار حتى النضج.', 'يرفع الإناء ويهز ما بداخله حتى لا يلتصق.', 'يجفف ويقشر ويتبل بالملح والفلفل والكمون وعصير الليمون.', 'يرص في طبق التقديم ويغطى بصلصة المايونيز.']
      }
    }
  },
  {
    id: 'sea-12',
    title: 'الجمبري بالكاري',
    titleEn: 'Shrimp Curry',
    chapter: 'الباب الأول: اللحوم – الطيور – البحريات (طهو البحريات)',
    chapterNumber: 1,
    category: 'بحريات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'sf12-1',
        name: 'جمبري',
        nameEn: 'Shrimp',
        standardAmount: '1 كيلو',
        category: 'seafood',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf12-2',
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
        id: 'sf12-3',
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
        id: 'sf12-4',
        name: 'كرفس',
        nameEn: 'Celery',
        standardAmount: '1 حزمة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حزمة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'sf12-5',
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
        id: 'sf12-6',
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
        id: 'sf12-7',
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
        id: 'sf12-8',
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
        text: 'يشوح البصل المفري مع الكرفس في الزيت، ثم يضاف الكاري ويقلب.',
        textEn: 'Sauté the grated onion with the celery in oil, then stir in the curry powder.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف كوب الماء ويتبل بالملح والفلفل، ويترك حتى الغليان.',
        textEn: 'Add the cup of water, season with salt and pepper, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع الجمبري في الصلصة مع عصير الليمون ويترك على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add the shrimp to the sauce with the lemon juice and simmer over low heat until cooked through.',
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
        title: 'الجمبري بالكاري',
        ingredients: ['1 كيلو جمبري', '3 بصلات مفرية', 'ملعقة صغيرة كاري', 'حزمة كرفس', 'ملح', 'فلفل', 'ملعقة صغيرة عصير ليمون', 'زيت', '1 كوب ماء'],
        instructions: ['يغسل عدة مرات للتخلص من الرمل.', 'يقطع البصل حلقات ويوضع في طبقات متبادلة مع الجمبري والكرفس والمستكة و الحبهان وقليل من الملح.', 'ممكن إضافة قليل من الماء للجمبري كبير الحجم.', 'يغطى الإناء ويرفع على درجة حرارة هادئة مع تقليبه باستمرارم حتى النضج.', 'يرفع الإناء ويهز ما بداخله حتى لا يلتصق.', 'يجفف جيدا ويقشر.', 'تحمر البصلة المفرية في الزيت حتى تصفر ثم يضاف إليها الكاري وتقلب قليلا ثم يضاف لها الماء مع التحريك حتى الغليان ثم تتبل بالملح والفلفل وعصير الليمون.', 'توضع حبات الجمبري في الصلصة حتى تسخن فقط.', 'تغرف في طبق التقديم وحوله الأرز الأبيض ويجمل بالليمون والبقدونس.']
      }
    }
  },
];
