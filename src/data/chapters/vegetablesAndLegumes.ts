import { Recipe } from '../../types';

export const vegetablesAndLegumesRecipes: Recipe[] = [
  {
    id: 'veg-01',
    title: 'الملوخية المصرية الخضراء بالتقلية',
    titleEn: 'Classic Egyptian Molokhia with Garlic-Coriander Taqlia',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '25 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl1-1',
        name: 'أوراق ملوخية طازجة مخروطة ناعم',
        standardAmount: '1 كيلو ملوخية طازجة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو ملوخية',
          doc2: '1 كيلو ملوخية',
          doc3: '1 ك ملوخية'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl1-2',
        name: 'مرق طيور أو لحم أو أرانب دسم',
        standardAmount: '2 كوب مرق مغلي مركز',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب مرق (أرانب أو دجاج أو لحم)',
          doc2: '2 كوب مرق',
          doc3: '2 كوب مرق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl1-3',
        name: 'ثوم مفري ناعم للشوربة والتقلية',
        standardAmount: '1/2 رأس ثوم مفري ناعم',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'قليل من الثوم المفري في الشوربة + 1/2 رأس ثوم مفري للتقلية',
          doc2: 'قليل من الثوم المفري + نصف رأس ثوم',
          doc3: 'قليل من الثوم المفري + نصف رأس ثوم مفري'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl1-4',
        name: 'كسبرة جافة مطحونة ناعمة',
        standardAmount: '1 ملعقة كبيرة كسبرة ناعمة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملعقة كسبرة ناعمة',
          doc2: 'ملعقة كسبرة ناعمة',
          doc3: 'ملعقة كسبرة ناعمة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl1-5',
        name: 'سمن بلدي فاخر',
        standardAmount: '2 ملعقة سمن',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 م سمن',
          doc2: '2 م سمن',
          doc3: '2 م سمن'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تجهيز الملوخية: بعد غسل الملوخية جيداً تقطف الأوراق وتترك لتجف تماماً على قماش قطني، ثم تفرم بمفرمة الملوخية (المخرطة) حتى تنعم.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'إعداد المرق: بعد سلق الأرانب أو الدجاج أو اللحم في الماء والملح والفلفل والحبهان والبصلة الصحيحة وثمرة الطماطم، نرفع الطيور أو اللحوم عن المرق ونصفيه.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'إسقاط الملوخية: نحضر إناء لطهو الملوخية ونضع به حوالي 2 كوب مرق مغلي مع قليل من الثوم المفري النيء حتى الغليان، ثم نضيف الملوخية وتهدأ درجة الحرارة مع تقليبها بالمضرب السلك حتى تتفكك وتتجانس عرق الملوخية.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'قاعدة عدم التغطية: تترك الملوخية بدون غطاء حتى تغلي غلوتين فقط وترفع من الحرارة (تغطيتها تؤدي إلى سقوطها في القاع).',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 5,
        text: 'عمل التقلية (الطشة): يسخن السمن في طاسة التيفال ثم يضاف الثوم المفري المخلوط بالكسبرة الناعمة حتى يصفر لونه الذهبي وتفوح رائحته الزكية وترفع من الحرارة فوراً.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'الطشة المميزة: نأخذ كبشة من الملوخية الساخنة وتضاف بسرعة إلى التقلية الساخنة في المقلاة ثم نسكبها على إناء الملوخية ونقلبها وتترك بدون غطاء حتى لا تسقط.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 4,
      mergedIngredientsCount: 5,
      totalUniqueSteps: 6,
      totalMasterIngredients: 5,
      overlapPercentage: 95,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'نص موحد للملوخية المصرية والتقلية بالثوم والكسبرة مع تأكيد ملاحظة الطهاة الحاسمة بعدم تركها تغلي أكثر من غلوتين وعدم تغطية الإناء.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الملوخية / عمل التقلية',
        pageNumber: 101,
        ingredients: ['1 كيلو ملوخية', '2 كوب مرق', 'قليل من الثوم المفري', '1/2 رأس ثوم مفري مخلوط بملعقة كسبرة ناعمة', '2 م سمن'],
        instructions: ['تقطف الأوراق وتخرط', 'يسخن المرق ويسقط به قليل من الثوم ثم الملوخية', 'تترك بدون غطاء تغلي غلوتين فقط', 'تسخن السمن ويضاف الثوم بالكسبرة حتى يصفر', 'تؤخذ كبشة من الملوخية وتضاف للتقلية وتسكب عليها']
      },
      doc3: {
        title: '24- الملوخية / عمل التقلية',
        pageNumber: 63,
        ingredients: ['1ك ملوخية', '2 كوب مرق', 'قليل من الثوم المفري', 'نصف رأس ثوم مفري بملعقة كسبرة', '2 م سمن'],
        instructions: ['غسل الملوخية وتجفيفها ثم فرمها بمفرمة الملوخية', 'وضع المرق مع الثوم حتى الغليان وإضافة الملوخية وتقليبها بدون غطاء', 'تجهيز التقلية بمجرد بدء الملوخية في الغليان']
      }
    }
  },
  {
    id: 'veg-02',
    title: 'القلقاس بالسلق والخضرة والتقلية',
    titleEn: 'Taro with Swiss Chard (Qolqas bil Salq & Coriander)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '30 دقيقة',
    cookTime: '45 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl2-1',
        name: 'قلقاس بلدي مكعبات',
        standardAmount: '1 كيلو قلقاس',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'كيلو قلقاس',
          doc2: 'كيلو قلقاس',
          doc3: '1 ك قلقاس'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl2-2',
        name: 'سلق وخضرة طازجة',
        standardAmount: '2 حزمة سلق + حزمة كسبرة خضراء',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حزمتان سلق',
          doc2: 'حزمتان سلق',
          doc3: 'حزمتان سلق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl2-3',
        name: 'لحم أو دجاج مع المرق',
        standardAmount: '1 كيلو لحم أو دجاجة مسلوقة + 2 كوب مرق',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'كيلو لحم أو دجاجة – مرق',
          doc2: 'كيلو لحم أو دجاجة',
          doc3: 'كيلو لحم أو دجاجة – 2 كوب مرق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl2-4',
        name: 'ثوم مفري للتقلية',
        standardAmount: '1 رأس ثوم كاملة مفرومة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'رأس ثوم',
          doc2: 'رأس ثوم',
          doc3: 'رأس ثوم صغير'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl2-5',
        name: 'سمن أو زيت',
        standardAmount: '2 ملعقة سمن أو زيت',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت أوسمن',
          doc2: 'زيت أوسمن',
          doc3: 'زيت أوسمن'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl2-6',
        name: 'عصير ليمون وتوابل',
        standardAmount: 'عصير ليمونة + ملح وفلفل وحبهان',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'عصير الليمون – ملح وفلفل وحبهان',
          doc2: 'عصير الليمون – ملح وفلفل',
          doc3: 'عصير ليمون – ملح وفلفل وحبهان'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تقشير وتنظيف القلقاس: يقشر القلقاس ويقطع مكعبات متوسطة وينقع في الماء الدافئ حتى تزول المادة المخاطية، ثم يشطف بالماء الجاري وعصير الليمون ويجفف تماماً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'سلق اللحم والقلقاس: يسلق اللحم أو الدجاج مع البصل والملح والفلفل والحبهان ثم يرفع من المرق. يضاف القلقاس لحوالي 2 كوب مرق مغلي على درجة حرارة هادئة حتى يقترب من النضج.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحضير السلق الأخضر: تغسل حزمتان من السلق مع نزع العروق الغليظة ثم تضرب الأوراق في الكبة.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تحمير السلق بالثوم: نحضر طاسة بها زيت أو سمن ساخن فقط ثم نضع فيه السلق حتى يغمق لونه إلى حد ما حوالي 10 دقائق. يضاف الثوم المفري ويخلط بالسلق ويقلب حتى يصفر لون الثوم ثم يهرس جيداً بالملعقة الخشب حتى يصير ناعماً مخملياً.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'إتمام الطبخة: يضاف السلق المحمر بالثوم إلى القلقاس بعد نضجه ويترك حتى يغلي على درجة حرارة هادئة لمدة 5 دقائق ليتشرب القلقاس اللون الأخضر الزمردي والنكهة المميزة.',
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
      overlapPercentage: 91,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'طريقة القلقاس الأخضر بالسلق والليمون تم توحيدها من النسخ الثلاث، مبرزة تقنية نزع العروق وتحمير السلق مع الثوم والهرس بالملعقة الخشبية.'
    },
    rawDocVersions: {
      doc1: {
        title: 'القلقاس بالسلق والخضرة',
        pageNumber: 89,
        ingredients: ['كيلو قلقاس', 'كيلو لحم أو دجاجة', 'بصلة', 'رأس ثوم', 'حزمتان سلق', 'زيت أو سمن', 'ملح وفلفل وحبهان', 'عصير ليمون'],
        instructions: ['يقشر القلقاس وينقع في ماء دافئ لإزالة المادة المخاطية', 'يسلق اللحم ثم يسلق القلقاس في المرق', 'تضرب أوراق السلق في الكبة بدون عروق', 'يحمر السلق في السمن حتى يغمق ثم يضاف الثوم ويهرس', 'يضاف السلق بالثوم للقلقاس 5 دقائق']
      },
      doc3: {
        title: '14- القلقاس بالسلق والخضرة',
        pageNumber: 54,
        ingredients: ['1 ك قلقاس', 'موث سأر', 'حزمتان سلق', 'زيت أوسمن', 'ملح - فلفل - حبهان', '2 كوب مرق'],
        instructions: ['يقشر القلقاس ويشطف بالماء وعصير الليمون', 'يسلق القلقاس في المرق المغلي', 'يحمر السلق حتى يغمق لونه ثم يضاف الثوم المفري', 'يضاف السلق بالثوم إلى القلقاس بعد نضجه 5 دقائق']
      }
    }
  },
  {
    id: 'leg-01',
    title: 'الكشري المصري الأصيل وصلصة الخل والكمون',
    titleEn: 'Traditional Egyptian Koshari with Tangy Garlic-Tomato Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'بقوليات',
    cookingMethod: 'تسبيك',
    prepTime: '30 دقيقة',
    cookTime: '40 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'vl3-1',
        name: 'عدس بجبة (بني)',
        standardAmount: '1 كوب عدس بجبة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'كوب عدس بجبه',
          doc2: 'كوب عدس بجبه',
          doc3: 'كوب عدس بحبه'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl3-2',
        name: 'أرز مصري مفلفل',
        standardAmount: '1 كوب أرز مصري',
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
        id: 'vl3-3',
        name: 'مكرونة مشكلة مسلوقة',
        standardAmount: '2 كوب مكرونة مسلوقة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 كوب مكرونة مسلوقة',
          doc2: '2 كوب مكرونة مسلوقة',
          doc3: '2 كوب مكرونة مسلوقة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl3-4',
        name: 'بصل للورد المقرمش والتسبيك',
        standardAmount: '1 بصلة مفرية + 1-2 بصلة حلقات رفيعة للتحمير',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بصلة مفرية – بصلة مقطعة حلقات رفيعة للتحمير',
          doc2: 'بصلة مفرية – بصلة مقطعة حلقات',
          doc3: 'بصلة مفرية – بصلة مقطعة حلقات رفيعة للتحمير'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl3-5',
        name: 'طماطم وصلصة للكشري',
        standardAmount: '1 إلى 1.5 كوب عصير طماطم أو 2 ملعقة كبيرة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 : 1 كوب طماطم – 2 ملعقة كبيرة خل – كوب ماء',
          doc2: 'كوب طماطم – خل – ماء',
          doc3: 'من نصف كوب – كوب طماطم – 2 م ك خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl3-6',
        name: 'خل أبيض وزيت وتوابل',
        standardAmount: '2 ملعقة كبيرة خل + زيت كافي + ملح وفلفل وكمون',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'زيت كافي – ملح وفلفل – 2 ملعقة كبيرة خل',
          doc2: 'زيت كافي – ملح – فلفل',
          doc3: 'زيت كافي – ملح – فلفل – 2 م ك خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'طهو العدس والأرز: ينقى العدس ويغسل ثم يوضع في إناء به ماء مغلي بدون ملح حتى يقترب من النضج، وفي إناء آخر يسلق الأرز بماء وقليل من الملح نصف سلق. يملح العدس عند نضجه ويصفى من مائه، ثم يخلط العدس والأرز معاً في إناء واحد.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'التطعيم بالبصل المفروم: يقدح الزيت أو السمن وتحمر فيه البصلة المفرية ثم تضاف لإناء الأرز والعدس وتقلب جيداً، وتترك على درجة حرارة هادئة جداً لمدة 10 دقائق ليتشرب الأرز نكهة البصل المحمر.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'قلي بصل الورد المقرمش: يحمر البصل المقطع حلقات رفيعة في طاسة بها زيت ساخن حتى يصير لونه ذهبياً ومقرمشاً، ثم يرفع على مناديل ورقية ليظل مقرمشاً.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'عمل صلصة الكشري: يقدح الزيت ويضاف إليه عصير الطماطم أو 2 ملعقة كبيرة صلصة طماطم مخففة بالماء وتترك على درجة حرارة هادئة، ثم يضاف كوب ماء مملح حتى الغليان، ثم يرفع ويضاف إليها الخل والفلفل والكمون.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'التنسيق والتقديم: يغرف الكشري في أطباق التقديم، وتوضع فوقه المكرونة المسلوقة، ثم يجمل بحلقات البصل المحمرة المقرمشة، وتوضع الصلصة في سلطانية بجانبه.',
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
      overlapPercentage: 93,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'دمج دقيق لمقادير الكشري المصري وصلصة الطماطم بالخل والكمون وبصل الورد المقرمش من النسخ الثلاث.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكشري / عمل صلصة الكشري',
        pageNumber: 116,
        ingredients: ['كوب عدس بجبه', 'كوب أرز', '2 كوب مكرونة مسلوقة', 'ملح وفلفل', 'بصلة مفرية', 'بصلة حلقات للتحمير', 'زيت كافي', 'طماطم وخل للصلصة'],
        instructions: ['يسلق العدس بدون ملح ويسلق الأرز نصف سلق', 'يخلط العدس والأرز في إناء واحد', 'تحمر بصلة مفرية وتضاف للإناء 10 دقائق هادئة', 'يحمر بصل الحلقات ويوضع على مناديل', 'عمل الصلصة بالطماطم والخل والماء المملح', 'يغرف الكشري وفوقه المكرونة وحلقات البصل والصلصة في سلطانية']
      },
      doc3: {
        title: '3- الكشري / صلصة الكشري تعمل كالآتي',
        pageNumber: 77,
        ingredients: ['كوب عدس بحبه', 'كوب أرز', '2 كوب مكرونة مسلوقة', 'بصلة مفرية وبصلة حلقات', 'زيت كافي', 'نصف كوب طماطم - 2 م ك خل'],
        instructions: ['ينقي العدس ويغسل ويسلق', 'يسلق الأرز ويخلط مع العدس', 'يقدح الزيت ويحمر البصل المفروم ويضاف للكشري', 'يحمر البصل الحلقات', 'يقدح الزيت للصلصة ويضاف الخل والملح']
      }
    }
  },
  {
    id: 'leg-02',
    title: 'الطعمية المصرية الأصلية (الفلافل)',
    titleEn: 'Authentic Egyptian Taameya (Fava Bean Falafel with Sesame)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'بقوليات',
    cookingMethod: 'تحمير',
    prepTime: '12 ساعة نقع + 20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'vl4-1',
        name: 'فول مدشوش منقوع ومصفى',
        standardAmount: '1 كوب فول مدشوش',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب فول مدشوش',
          doc2: '1 كوب فول مدشوش',
          doc3: '1 كوب فول مدشوش'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl4-2',
        name: 'ثوم مقشر',
        standardAmount: '1/4 إلى 1/3 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 : 1/3 رأس ثوم',
          doc2: '1/4 : 1/3 رأس ثوم',
          doc3: 'من ربع – ثلث رأس ثوم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl4-3',
        name: 'بصل متوسط وبصل أخضر',
        standardAmount: '2 بصلة متوسطة + عود بصل أخضر',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلتان متوسطتان – بصل أخضر',
          doc2: '2 بصلتان – بصل أخضر',
          doc3: '2 بصلتان متوسطتان – بصل أخضر'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl4-4',
        name: 'خضرة طازجة (بقدونس وشبت وكسبرة خضراء)',
        standardAmount: 'بقدونس وشبت وكسبرة خضراء',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بقدونس وشبت – كسبرة',
          doc2: 'بقدونس وشبت – كسبرة',
          doc3: 'بقدونس وشبت – كسبرة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl4-5',
        name: 'سمسم أبيض للتزيين',
        standardAmount: 'سمسم للتغطية والرش على السطح',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'سمسم',
          doc2: 'سمسم',
          doc3: 'سمسم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl4-6',
        name: 'بيكربونات الصوديوم (كربوناتو)',
        standardAmount: 'ذرة بيكربونات الصوديوم',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ذرة بيكربونات الصوديوم',
          doc2: 'ذرة بيكربونات الصوديوم',
          doc3: 'ذرة بيكربونات الصوديوم'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl4-7',
        name: 'توابل (كمون، كسبرة جافة، ملح)',
        standardAmount: 'كمون وكسبرة وملح',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملح – كمون – كسبرة',
          doc2: 'ملح – كمون – كسبرة',
          doc3: 'ملح – كمون – كسبرة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl4-8',
        name: 'زيت غزير للقلي',
        standardAmount: 'زيت كافي للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت كاف للقلي',
          doc2: 'زيت كاف للقلي',
          doc3: 'زيت كاف للقلي'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نقع الفول: يغسل الفول المدشوش وينقع في الماء لمدة 12 ساعة ثم يصفى تماماً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تجهيز الخضار: تغسل الخضر (البقدونس والشبت والكسبرة والبصل الأخضر) ويقشر البصل والثوم وتقطع جميعها قطعاً غليظة.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'الفرم المزدوج في الكبة: تخلط جميع المقادير وتفرم في الكبة مرتين للحصول على عجينة ناعمة وخفيفة القوام.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'التخمير والهشاشة: تضاف إليها التوابل (الكمون والكسبرة والملح) ويضاف إليها ذرة بيكربونات الصوديوم وتترك لمدة نصف ساعة لتختمر وتصبح هشة.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'التشكيل والقلي: تقطع الطعمية قطعاً متساوية وتبسط بالأصابع ويرش سطحها بالسمسم الأبيض، ثم تقلى الكمية المراد تناولها في الزيت الساخن حتى تطفو وتتحمر بلون ذهبي مقرمش.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'طريقة التفريز والحفظ: أما باقي العجينة فيمكن أن توضع في أكياس محكمة بالفريزر مجمدة حتى استعمالها مرة أخرى دون إضافة الكربوناتو إلا قبل القلي مباشرة.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 3,
      mergedIngredientsCount: 8,
      totalUniqueSteps: 6,
      totalMasterIngredients: 8,
      overlapPercentage: 94,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'وصفة الطعمية المصرية الأصيلة متطابقة في الوثائق الثلاث، مع تفصيل خطوات الفرم مرتين في الكبة وسر التخمير بالكربوناتو والتفريز.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الطعمية',
        pageNumber: 118,
        ingredients: ['1 كوب فول مدشوش', '1/4 : 1/3 رأس ثوم', 'سمسم', '2 بصلتان متوسطتان', 'ملح وكمون وكسبرة', 'ذرة بيكربونات الصوديوم', 'بقدونس وشبت وبصل أخضر', 'زيت كاف للقلي'],
        instructions: ['يغسل الفول وينقع 12 ساعة', 'تقطع الخضر والبصل والثوم', 'تفرم المقادير في الكبة مرتين', 'تضاف التوابل والبيكربونات وتترك نصف ساعة لتختمر', 'تشكل ويرش سطحها بالسمسم وتقلى في الزيت', 'باقي العجينة يحفظ مجمداً بالفريزر']
      },
      doc3: {
        title: '5- الطعمية',
        pageNumber: 79,
        ingredients: ['1 كوب فول مدشوش', 'من ربع - ثلث رأس ثوم', 'سمسم', '2 بصلتان متوسطتان', 'ملح - كمون - كسبرة', 'ذرة بيكربونات الصوديوم', 'بقدونس وشبت - بصل أخضر', 'زيت كاف للقلي'],
        instructions: ['يغسل الفول وينقع 12 ساعة ثم يصفى', 'تفرم جميع المقادير في الكبة مرتين', 'يضاف البيكربونات وتترك نصف ساعة لتختمر', 'تقطع متساوية ويرش بالسمسم وتقلى في الزيت', 'باقي العجينة توضع في الفريزر مجمدة']
      }
    }
  }
];
