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
  }
];
