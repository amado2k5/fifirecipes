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
  },
  {
    id: 'veg-03',
    title: 'طهو الخضار باللحوم',
    titleEn: 'Mixed Vegetables Braised with Beef',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '45 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl5-1',
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
        id: 'vl5-2',
        name: 'خضار مشكل',
        nameEn: 'Mixed vegetables, any kind',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl5-3',
        name: 'بصل كبير مبشور',
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
        id: 'vl5-4',
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
        id: 'vl5-5',
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
        id: 'vl5-6',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1 فص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 فص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl5-7',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '1/4 كيلو أو 1 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو أو 1 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl5-8',
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
        text: 'نضع حوالي 2 ملعقة زيت في إناء ونرفعه على النار ثم نضيف بصلة مبشورة كبيرة ونضع معها اللحم ونقلبهم حتى الاحمرار.',
        textEn: 'Heat about 2 tablespoons of oil in a pot, add the grated large onion with the meat, and stir until browned.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضيف الخل والثوم المفروم والطماطم المعصورة أو صلصة الطماطم حتى تنضج الطماطم في حال استعمالها، ثم نضيف الملح والفلفل.',
        textEn: 'Add the vinegar, minced garlic, and pressed tomatoes or tomato paste, cooking the tomatoes if used, then season with salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف الماء، وبعد الغليان نسكب الخضار مع التوابل وتطهى على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add water, and once boiling, add the vegetables with the seasoning, and simmer over low heat until cooked through.',
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
        title: 'طهو الخضار باللحوم',
        ingredients: ['1 كيلو لحم', '1 كيلو خضار من أي نوع', 'بصلة كبيرة', '2 ملعقة زيت', '1 ملعقة خل', '1 فص ثوم', '¼ كيلو طماطم أو ملعقة صلصة', 'ملح', 'فلفل', 'ماء'],
        instructions: ['نضع حوالي 2 ملعقة زيت في إناء ونرفعه على البوتاجاز ثم نضيف بصلة مبشورة كبيرة ونضع معها اللحم ونقلبهم حتى الإحمرار.', 'نضيف خل وثوم مفروم وطماطم معصورة أو صلصة طماطم حتى تنضج الطماطم في حالة استعمالها ثم نضيف الملح و الفلفل.', 'يضاف الماء وبعد الغليان نسكب الخضار مع التوابل وتطهى على درجة حرارة هادئة حتى النضج.']
      }
    }
  },
  {
    id: 'veg-04',
    title: 'طهو الخضار بمرق الدجاج',
    titleEn: 'Mixed Vegetables in Chicken Broth Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '45 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl6-1',
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
        id: 'vl6-2',
        name: 'خضار مشكل',
        nameEn: 'Mixed vegetables, any kind',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl6-3',
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
        id: 'vl6-4',
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
      {
        id: 'vl6-5',
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
        id: 'vl6-6',
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
        id: 'vl6-7',
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
        id: 'vl6-8',
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
        id: 'vl6-9',
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
        id: 'vl6-10',
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
        text: 'يسلق الدجاج في الماء المغلي مع البصل والحبهان والمستكة والملح والفلفل.',
        textEn: 'Boil the chicken in water with the onion, cardamom, mastic, salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تنزع الدجاجة في مصفاة، وتتبل بالملح والفلفل.',
        textEn: 'Lift the chicken out onto a strainer and season with salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضرب في الخلاط بصلة كبيرة وحوالي 1/4 كيلو طماطم مع ثمرة فلفلة خضراء صغيرة وفصوص من الثوم وملعقة خل.',
        textEn: 'Blend a large onion with about 1/4 kg tomatoes, a small green pepper, garlic cloves and a tablespoon of vinegar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر إناء الطهي ونضع به 2 ملعقة زيت أو حسب الرغبة، وبعد أن يسخن الزيت نسكب فيه الخلطة ونتبلها بالملح والفلفل، ونتركها حتى تغلي.',
        textEn: 'Heat about 2 tablespoons of oil in a pot, pour in the blended mixture, season with salt and pepper, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نضيف لها مقدار من المرق حتى الغليان.',
        textEn: 'Add some of the chicken broth and bring back to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نسكب الخضر وتهدأ درجة الحرارة حتى النضج.',
        textEn: 'Add the vegetables and lower the heat until cooked through.',
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
        title: 'طهو الخضار بمرق الدجاج',
        ingredients: ['1 دجاجة', '1 كيلو خضار من أي نوع', 'بصلة كبيرة', 'حبهان', 'مستكة', 'ملح', 'فلفل', '¼ كيلو طماطم', 'ثمرة فلفل خضراء', '2 فص ثوم', 'ملعقة خل', '2 ملعقة زيت'],
        instructions: ['بعد سلق الدجاج في الماء المغلي والبصل والحبهان والمستكة والملح والفلفل.', 'تنزع الدجاجة في مصفاة , وتتبل بالملح والفلفل.', 'يضرب في الخلاط بصلة كبيرة وحوالي ¼ كيلو  طماطم مع ثمرة فلفلة خضراء صغيرة وفصوص من الثوم وملعقة خل وممكن تقليل الطماطم.', 'نحضر إناء الطهي ونضع به 2 ملعقة زيت أو حسب الرغبة.', 'بعد أن يسخن الزيت نسكب فيها الخلطة ونتبلها بالملح والفلفل ونتركها حتى تغلي ثم نضيف لها مقدار من المرق حتى الغليان.', 'نسكب الخضر وتهدأ درجة الحرارة حتى النضج.']
      }
    }
  },
  {
    id: 'veg-05',
    title: 'السوتيه',
    titleEn: 'Boiled Vegetables in Oil-Lemon Dressing ("Sauté")',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'سلق',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl7-1',
        name: 'خضار كالفاصوليا أو البطاطس',
        nameEn: 'Vegetables such as green beans or potatoes',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl7-2',
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
        id: 'vl7-3',
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
        id: 'vl7-4',
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
        id: 'vl7-5',
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
        id: 'vl7-6',
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
        text: 'نحضر إناء الطهي وبه ماء وملح وبصلة صحيحة وخل.',
        textEn: 'Bring a pot of water to a boil with salt, a whole onion and the vinegar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'بعد الغليان نسكب الخضار ونهدئ درجة الحرارة حتى ينضج، ثم نرفعه في مصفاة.',
        textEn: 'Add the vegetables, lower the heat until cooked, then drain in a colander.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر صحنا غويطا به زيت وليمون وملح وفلفل ويقلبوا جيدا، ثم نضيف فيه الخضار.',
        textEn: 'In a deep dish, mix oil, lemon juice, salt and pepper well, then toss the vegetables in it.',
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
        title: 'السوتيه',
        ingredients: ['1 كيلو خضار كالفاصوليا أو البطاطس و غيرها', 'بصلة', '1 ملعقة خل', 'زيت', 'عصير ليمونة', 'ملح', 'فلفل'],
        instructions: ['نحضر إناء الطهي وبه ماء وملح وبصلة صحيحة وخل.', 'بعد الغليان نسكب الخضار ونهدئ درجة الحرارة حتى ينضج ثم نرفعه في مصفاة.', 'نحضر صحن غويط به زيت وليمون وملح وفلفل ويقلبوا جيدا ثم نذيب فيه الخضار.']
      }
    }
  },
  {
    id: 'veg-06',
    title: 'الفاصوليا بمرق الدجاج',
    titleEn: 'Green Beans in Tomato Sauce with Chicken Broth',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl8-1',
        name: 'فاصوليا خضراء',
        nameEn: 'Green beans',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl8-2',
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
        id: 'vl8-3',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '3 ثمرات أو 1 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 ثمرات أو 1 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl8-4',
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
        id: 'vl8-5',
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
        id: 'vl8-6',
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
        id: 'vl8-7',
        name: 'مرق',
        nameEn: 'Chicken broth',
        standardAmount: 'حوالي 2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حوالي 2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl8-8',
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
        text: 'تقطع الفاصوليا نصفين طوليا ثم تقطع صغيرا وتغسل.',
        textEn: 'Split the beans lengthwise in half, then cut into small pieces and wash.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البصل والطماطم والفلفل الأخضر والثوم مع الملح والفلفل في الخلاط.',
        textEn: 'Blend the onion, tomatoes, bell pepper and garlic with salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع الزيت في إناء الطهي حتى يسخن فقط، ثم نسكب فيه الخليط حتى الغليان على درجة حرارة هادئة.',
        textEn: 'Heat the oil in a pot just until hot, then pour in the blended mixture and bring to a boil over low heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضع الفاصوليا في هذا الخليط ونتركها تتشوح حتى تذبل.',
        textEn: 'Add the beans to this mixture and let them sauté until wilted.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نسكب عليها المرق ونتركه يغلي، ثم نخفض درجة الحرارة مع تغطية الإناء، وكلما احتاجت إلى المرق نضيفه إليها حتى تنضج.',
        textEn: 'Pour in the broth and bring to a boil, then lower the heat, cover, and add more broth as needed until fully cooked.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'الفاصوليا بمرق الدجاج',
        ingredients: ['½ كيلو فاصوليا', 'بصلة متوسطة', '3 ثمرات طماطم أو ملعقة كبيرة صلصة طماطم', 'ثمرة فلفل رومي', '2 ملعقة كبيرة زيت', 'ملح', 'فلفل', '¼ رأس ثوم مفري', 'حوالي 2 كوب مرق'],
        instructions: ['تقطع الفاصوليا نصفين طوليا ثم تقطع صغيرا وتغسل.', 'يضرب البصل والطماطم والفلفل الأخضر والثوم مع الملح والفلفل في الخلاط.', 'نضع الزيت في إناء الطهي حتى يسخن فقط ثم نسكب فيه الخليط حتى الغليان على درجة حرارة هادئة.', 'نضع الفاصوليا في هذا الخليط ونتركها تتشوح حتى تدبل الفاصوليا.', 'نسكب عليها المرق في حالة سلق الدجاج مسبقا ونتركه يغلي ثم نخفض درجة الحارة مع تغطية الإناء وكلما احتاج إلى المرق نضيفه إلى الفاصوليا حتى تنضج.']
      }
    }
  },
  {
    id: 'veg-07',
    title: 'الفاصوليا باللحم',
    titleEn: 'Green Beans with Beef in Tomato Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '45 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl9-1',
        name: 'فاصوليا خضراء',
        nameEn: 'Green beans',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl9-2',
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
        id: 'vl9-3',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '3 ثمرات أو 1 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 ثمرات أو 1 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl9-4',
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
        id: 'vl9-5',
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
        id: 'vl9-6',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl9-7',
        name: 'لحم',
        nameEn: 'Beef',
        standardAmount: 'حسب الرغبة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl9-8',
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
        text: 'يضرب البصل والطماطم والفلفل الرومي والثوم والملح والفلفل في الخلاط.',
        textEn: 'Blend the onion, tomatoes, bell pepper, garlic, salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع اللحم في إناء به زيت ويشوح فقط، ثم يصب عليه خليط البصل والطماطم المضروب حتى تنضج الطماطم.',
        textEn: 'Sear the meat in a pot with oil, then pour over it the blended onion-tomato mixture, cooking until the tomatoes soften.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضيف مقدار من الماء يكفي لكمية الفاصوليا ونتركه يغلي، ونضيف له الملح والفلفل.',
        textEn: 'Add enough water for the amount of beans, bring to a boil, and season with salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد الغليان نضيف الفاصوليا ونخفض درجة الحرارة حتى ينضج الخضار واللحم.',
        textEn: 'Once boiling, add the beans and lower the heat until both the vegetables and meat are cooked through.',
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
        title: 'الفاصوليا باللحم',
        ingredients: ['½ كيلو فاصوليا', 'بصلة متوسطة', '3 ثمرات طماطم أو ملعقة كبيرة صلصة', 'ثمرة فلفل رومي', '2 ملعقة كبيرة زيت', '¼ رأس ثوم', 'ملح', 'فلفل'],
        instructions: ['يضرب البصل و الطماطم و الفلفل الرومي و الثوم و الملح و الفلفل في الخلاط.', 'يوضع اللحم في إناء به زيت ويشوح فقط ثم يصب عليه خليط البصل المضروب بالطماطم في الخلاط حتى تنضج الطماطم.', 'نضيف مقدار من الماء يكفي لكمية الفاصوليا ونتركه يغلي ونضيف له الملح والفلفل.', 'بعد الغليان نضيف الفاصوليا ونخفض درجة الحرارة حتى ينضج الخضار و اللحم.']
      }
    }
  },
  {
    id: 'veg-08',
    title: 'سوتية الفاصوليا بالأرز',
    titleEn: 'Sautéed Green Beans with Rice',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl10-1',
        name: 'فاصوليا خضراء',
        nameEn: 'Green beans',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl10-2',
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
        id: 'vl10-3',
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
        id: 'vl10-4',
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
        id: 'vl10-5',
        name: 'زيت أو زبد',
        nameEn: 'Oil or butter',
        standardAmount: '2 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl10-6',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقدح زيت أو زبد جيدا في طاسة عميقة، ثم يسكب فيها الفاصوليا مجمدة أو طازجة، وتهدأ الحرارة مع التقليب المستمر.',
        textEn: 'Heat oil or butter well in a deep pan, add the beans (frozen or fresh), and lower the heat, stirring constantly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف قليل من الماء والملح والفلفل والزعتر، ثم يغطى ويترك حتى تنضج الفاصوليا.',
        textEn: 'Add a little water, salt, pepper and thyme, then cover and cook until the beans are done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسلق الأرز في ماء ساخن، وقبل نضجه بقليل يصفى من مائه.',
        textEn: 'Boil the rice in hot water and drain it just before fully cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تقطع البصلة قطعا صغيرة جدا وتحمر في الزيت.',
        textEn: 'Finely dice the onion and brown it in oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يخلط البصل المحمر بالفاصوليا الناضجة ثم يخلط بالأرز، ويقلبان جيدا مع تغطية الإناء حتى يظل ساخنا بالبخار مع إطفاء الحرارة.',
        textEn: 'Mix the browned onion into the cooked beans, then mix in the rice, cover, and let it steam off the heat while still hot.',
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
        title: 'سوتية الفاصوليا بالأرز',
        ingredients: ['½ كيلو فاصوليا', 'بصلة متوسطة', 'كوب أرز', '1 كوب ماء', '2 ملعقة كبيرة زيت أو قطعة زبد', 'الملح', 'الفلفل', 'الزعتر'],
        instructions: ['يقدح زيت أو زبد جيدا في طاسة عميقة ثم يسكب فيها الفاصوليا مجمدة أو طازجة ثم تهدأ الحرارة مع التقليب المستمر.', 'يضاف قليل من الماء والملح والفلفل والزعتر ثم يغطى ويترك لتنضج الفاصوليا.', 'يسلق الأرز في ماء ساخن وقبل نضجه بقليل يصفى من مائه.', 'تقطع البصلة قطعا صغيرة جدا وتحمر في الزيت.', 'يخلط البصل المحمر بالسوتيه الناضج ثم يخلط بالأرز ويقلبا جيدا مع تغطية الإناء حتى يظل ساخنا بالبخار مع إطفاء الحرارة.']
      }
    }
  },
  {
    id: 'veg-09',
    title: 'سوتيه الفاصوليا بدون أرز',
    titleEn: 'Sautéed Green Beans in Spiced Garlic Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '40 دقيقة (+نقع)',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl11-1',
        name: 'فاصوليا خضراء',
        nameEn: 'Green beans',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl11-2',
        name: 'بصلة صغيرة مبشورة',
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
        id: 'vl11-3',
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
        id: 'vl11-4',
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
        id: 'vl11-5',
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
        id: 'vl11-6',
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
        id: 'vl11-7',
        name: 'عصير بصل صغيرة، ثوم، سكر للصلصة',
        nameEn: 'Small onion juice, garlic and sugar, for the finishing sauce',
        standardAmount: '1 بصلة، 2 فص ثوم، 1/2 ملعقة صغيرة سكر',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة، 2 فص ثوم، 1/2 ملعقة صغيرة سكر'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl11-8',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تنقع الفاصوليا بعد تقشيرها في الماء لمدة نصف ساعة، ثم نسكب الماء ونكرر النقع مرة أخرى، ثم تصفى من الماء.',
        textEn: 'After trimming, soak the beans in water for half an hour, drain and repeat the soak once more, then drain fully.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر إناء نضع فيه الزيت والفاصوليا مع البصلة الصغيرة المبشورة على درجة حرارة منخفضة، وإضافة الخل والثوم المفري والملح والماء.',
        textEn: 'In a pot, combine the oil and beans with the grated small onion over low heat, and add the vinegar, crushed garlic, salt and water.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر الصلصة بخلط عصير بصلة صغيرة و2 فص ثوم مقطع صغيرا وملح وفلفل وكمون ونصف ملعقة صغيرة سكر، ويقلب الخليط جيدا بملعقة خشب.',
        textEn: 'Prepare a finishing sauce by mixing small onion juice, 2 finely chopped garlic cloves, salt, pepper, cumin and half a teaspoon of sugar, stirring well with a wooden spoon.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد النضج تخلط الفاصوليا بالصلصة جيدا وتدخل الثلاجة لمدة 3 ساعات.',
        textEn: 'Once cooked, toss the beans well with the sauce and refrigerate for 3 hours before serving.',
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
        title: 'سوتيه الفاصوليا بدون أرز',
        ingredients: ['½ كيلو فاصوليا', 'بصلة صغيرة مبشورة', '2 فص ثوم مفري', 'ملعقة كبيرة خل', 'ملح', '2 ملعقة كبيرة زيت', '1 كوب ماء'],
        instructions: ['تنقع الفاصوليا بعد تقشيرها في الماء لمدة نصف ساعة ثم نسكب الماء ونكرر نقع الفاصوليا مرة أخرى ثم تصفى من الماء.', 'نحضر إناء نضع فيه الزيت والفاصوليا مع البصلة الصغيرة المبشورة على درجة حرارة منخفضة وإضافة الخل والثوم المفري والملح و الماء.', 'نحضِر الصلصة بخلط عصير بصلة صغيرة و 2 فص ثوم مقطع صغيرا و ملح وفلفل وكمون و ½ ملعقة صغيرة  سكر ويقلب الخليط جيدا بالملعقة الخشب.', 'بعد النضج تخلط الفاصوليا بالصلصة جيدا وتدخل الثلاجة لمدة 3 ساعات.']
      }
    }
  },
  {
    id: 'veg-10',
    title: 'البازلاء',
    titleEn: 'Green Peas and Carrots in Tomato Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl12-1',
        name: 'بازلاء',
        nameEn: 'Green peas',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl12-2',
        name: 'جزر',
        nameEn: 'Carrots',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl12-3',
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
        id: 'vl12-4',
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
        id: 'vl12-5',
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
        id: 'vl12-6',
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
        id: 'vl12-7',
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
        id: 'vl12-8',
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
        id: 'vl12-9',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تسلق البازلاء في ماء مغلي نصف نضج، ثم يسلق الجزر بمفرده.',
        textEn: 'Parboil the peas halfway in boiling water, then boil the carrots separately.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البصل والثوم والفلفل الأخضر والطماطم والخل في الخلاط.',
        textEn: 'Blend the onion, garlic, green pepper, tomatoes and vinegar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع الزيت في إناء ونسكب فيه الخليط المضروب، وبعد الغليان نسكب المرق حتى يغلي.',
        textEn: 'Heat the oil in a pot, pour in the blended mixture, and once boiling, add the broth and bring back to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف البسلة نصف الناضجة والجزر، وتترك على درجة حرارة هادئة حتى تتسبك مع الصلصة.',
        textEn: 'Add the parboiled peas and the carrots, and simmer over low heat until they absorb the sauce.',
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
        title: 'البازلاء',
        ingredients: ['1 كيلو بازلاء', '¼ كيلو جزر', 'بصلة متوسطة', '3 فصوص ثوم مفري', 'ثمرة فلفل أخضر', 'ملعقة كبيرة خل', '¼ كيلو طماطم', '2 ملعقة كبيرة زيت', '2 كوب مرق'],
        instructions: ['تسلق البازلاء في ماء مغلي نصف نضج ثم يسلق الجزر بمفرده.', 'يضرب البصل والثوم والفلفل الأخضر والطماطم والخل في الخلاط.', 'نضع الزيت في إناء ونسكب فيه الخليط المضروب وبعد الغليان نسكب المرق حتى يغلي.', 'نضيف البسلة الناضجة نصف نضج والجزر وتترك على درجة حرارة هادئة حتى تتسبك مع الصلصة.']
      }
    }
  },
  {
    id: 'veg-11',
    title: 'البازلاء بالأرز',
    titleEn: 'Green Peas with Rice',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق (+نقع الأرز)',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl13-1',
        name: 'أرز منقوع',
        nameEn: 'Rice, soaked',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl13-2',
        name: 'بازلاء',
        nameEn: 'Green peas',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl13-3',
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
        id: 'vl13-4',
        name: 'زبدة أو سمن أو زيت',
        nameEn: 'Butter, ghee or oil',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl13-5',
        name: 'ماء أو مرق',
        nameEn: 'Water or broth',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl13-6',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تشوَح البازلاء والجزر في الزبد، ثم يضاف لها حوالي 2 كوب من الماء أو المرق، وتترك على درجة حرارة هادئة حتى تقارب النضج.',
        textEn: 'Sauté the peas and carrots in butter, then add about 2 cups of water or broth and simmer over low heat until nearly cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمَر بصلة صغيرة مفرومة في الزيت وتسكب على البازلاء، ثم يضاف مقدار قليل من المرق أو الماء ما يكفي لتغطية الأرز مع إضافة الملح.',
        textEn: 'Brown a finely chopped small onion in oil and add it to the peas, then add enough broth or water to cover the rice, with salt.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضيف الأرز إلى البازلاء ويطهى على درجة حرارة منخفضة حتى النضج.',
        textEn: 'Add the rice to the peas and cook over low heat until done.',
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
        title: 'البازلاء بالأرز',
        ingredients: ['كوب أرز منقوع', '½ كيلو بسلة', '1 جزرة', 'زبده أو سمن أوزيت', '2 كوب ماء أو المرق', 'بصلة صغيرة'],
        instructions: ['تشوَح البازلاء و الجزر في الزبد ثم يضاف لها حوالي 2 كوب من الماء أو المرق و تترك على درجة حرارة هادئة حتى قرب النضج.', 'تحمَر بصلة صغيرة مفرومة في الزيت ونسكبها على البازلاء ثم نضع كمية قليلة من المرق أو الماء ما يكفي لتغطية الأرز مع إضافة الملح.', 'نضيف الأرز إلى البازلاء ويطهى على درجة حرارة منخفضة حتى النضج.']
      }
    }
  },
  {
    id: 'veg-12',
    title: 'البازلاء مع العصاج',
    titleEn: 'Layered Peas, Rice, Carrots and Assag (Egyptian "Timbale")',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '40 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'vl14-1',
        name: 'بازلاء',
        nameEn: 'Green peas',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl14-2',
        name: 'جزر',
        nameEn: 'Carrots',
        standardAmount: '4 جزرات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '4 جزرات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl14-3',
        name: 'أرز مفلفل',
        nameEn: 'Cooked fluffy rice (see starches section)',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl14-4',
        name: 'عصاج',
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
        id: 'vl14-5',
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
        id: 'vl14-6',
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
      {
        id: 'vl14-7',
        name: 'صنوبر',
        nameEn: 'Pine nuts',
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
        text: 'تسلق البازلاء في ماء مغلي وملح حتى النضج، ثم يسلق الجزر بمفرده.',
        textEn: 'Boil the peas in salted water until cooked, then boil the carrots separately.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يصفى الخضار من الماء في مصفاة ثم يشوح في الزبدة.',
        textEn: 'Drain the vegetables and sauté them in butter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يطهى أرز مفلفل عادي (انظري باب النشويات).',
        textEn: 'Prepare plain fluffy rice (see the starches section).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يطهى العصاج (انظري باب اللحوم).',
        textEn: 'Prepare the assag filling (see the meats section).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'عند التقديم نحضر سلطانية عميقة، نضع في أسفلها كمية من العصاج والصنوبر، يوضع فوقها كمية من الجزر ثم مقدار من الأرز ثم مقدار من البازلاء، وتعاد الكرة مرة أخرى بالعصاج ثم الجزر ثم الأرز ثم البازلاء، ويوضع العصاج في أعلى السلطانية.',
        textEn: 'To serve, layer in a deep bowl: assag and pine nuts on the bottom, then carrots, rice and peas; repeat the layers of assag, carrots, rice and peas once more, finishing with assag on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نقلب هذا الخليط باحتراس في طبق التقديم.',
        textEn: 'Carefully invert onto the serving plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'البازلاء مع العصاج',
        ingredients: ['1 كيلو بازلاء', 'عدد 4 جزرات', '1 كوب أرز', '½ كيلو عصاج', '2 ملعقة كبيرة زيت', 'زبدة', 'صنوبر'],
        instructions: ['تسلق البازلاء في ماء مغلي وملح حتى النضج ثم يسلق الجزر بمفرده.', 'يصفى الخضار من الماء في مصفاة ثم يشوح في الزبدة.', 'يطهى أرز مفلفل عادي (انظري باب النشويات).', 'يطهى العصاج  (انظري باب اللحوم).', 'عند التقديم نحضر سلطانية عميقة نضع في أسفلها كمية من العصاج والصنوبر.', 'يوضع فوقها كمية من الجزر ثم مقدار من الأرز ثم مقدار من البازلاء.', 'تعاد الكرة مرة أخرى بالعصاج ثم الجزر ثم الأرز ثم البازلاء.', 'يوضع العصاج في أعلى السلطانية.', 'نقلب هذا الخليط باحتراس في طبق التقديم.']
      }
    }
  },
  {
    id: 'veg-13',
    title: 'البامية بمرق الدجاج',
    titleEn: 'Okra in Tomato Sauce with Chicken Broth',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl15-1',
        name: 'بامية',
        nameEn: 'Okra',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl15-2',
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
        id: 'vl15-3',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '3 ثمرات أو 1 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 ثمرات أو 1 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl15-4',
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
        id: 'vl15-5',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl15-6',
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
        id: 'vl15-7',
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
        id: 'vl15-8',
        name: 'مرق',
        nameEn: 'Chicken broth',
        standardAmount: '2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl15-9',
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
        text: 'يضرب البصل والفلفل الأخضر والطماطم والخل والثوم في الخلاط.',
        textEn: 'Blend the onion, green pepper, tomatoes, vinegar and garlic.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع الخضار المضروب في إناء الطهي به زيت أو سمن حتى يغلي.',
        textEn: 'Add the blended mixture to a pot with oil or ghee and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف إليه المرق المتبل بالملح والفلفل حتى الغليان.',
        textEn: 'Add the broth, seasoned with salt and pepper, and bring back to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تضاف البامية وتهدأ الحرارة حتى تنضج البامية.',
        textEn: 'Add the okra and lower the heat until it is cooked through.',
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
        title: 'البامية بمرق الدجاج',
        ingredients: ['1 كيلو بامية', 'بصلة متوسطة', '3 ثمرات طماطم أو ملعقة كبيرة صلصة طماطم', 'ثمرة فلفل رومي', '¼ رأس ثوم', '2 ملعقة كبيرة زيت', 'ملح', 'فلفل', '2 كوب مرق'],
        instructions: ['يضرب البصل والفلفل الأخضر والطماطم والخل و الثوم في الخلاط.', 'يوضع الخضار المضروب في إناء الطهي به زيت أو سمن حتى يغلي.', 'يضاف اليه المرق المتبل بالملح والفلفل حتى الغليان.', 'تضاف البامية وتهدأ الحرارة حتى تنضج البامية.']
      }
    }
  },
  {
    id: 'veg-14',
    title: 'طاجن البامية باللحم أو العصاج',
    titleEn: 'Baked Okra with Beef or Assag',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '45 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl16-1',
        name: 'بامية',
        nameEn: 'Okra',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl16-2',
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
        id: 'vl16-3',
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
        id: 'vl16-4',
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
        id: 'vl16-5',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomato juice or tomato paste',
        standardAmount: '1 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl16-6',
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
        id: 'vl16-7',
        name: 'لحم أو عصاج',
        nameEn: 'Beef, or assag filling (see meats section)',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl16-8',
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
        id: 'vl16-9',
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
        text: 'نضع زيتا أو سمنا في الإناء ونشوح فيه البصلة المفرية ثم الثوم المفري، ثم عصير الطماطم أو صلصة الطماطم مع الملح والفلفل والخل.',
        textEn: 'Heat oil or ghee in a pot and sauté the grated onion, then the crushed garlic, then add the tomato juice or paste with salt, pepper and vinegar.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'بعد تجانسهم نضع اللحم المقطع النيء أو العصاج ونقلبه جيدا معهم، ثم نضع فيها البامية ثم كمية من الماء لتغطيته.',
        textEn: 'Once combined, add the raw diced meat or the assag filling and mix well, then add the okra and enough water to cover.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نسكب البامية في برام أو بايركس مع تغطيته، ثم يدخل الفرن حتى النضج.',
        textEn: 'Transfer to a covered casserole or Pyrex dish and bake until cooked through.',
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
        title: 'طاجن البامية باللحم أو العصاج',
        ingredients: ['1 كيلو بامية', 'بصلة متوسطة', '4 فصوص ثوم مفري', '2 ملعقة كبيرة زيت أو سمن', 'كوب طماطم أو صلصة', 'ملح', 'فلفل', 'م خل', '½ كيلو لحم أو ½ كيلو عصاج (انظري باب اللحوم)', '2 كوب ماء'],
        instructions: ['نضع زيت أو سمن في الإناء ونشوح فيه البصلة المفرية ثم الثوم المفري ثم عصير الطماطم أو صلصة الطماطم مع الملح والفلفل والخل.', 'بعد تجانسهم نضع اللحم المقطع النيء أو العصاج ونقلبه جيدا معهم ثم نضع فيها البامية ثم كمية من الماء لتغطيته.', 'نسكب البامية في برام أوبايركس مع تغطيته ثم يدخل الفرن حتى النضج.']
      }
    }
  },
  {
    id: 'veg-15',
    title: 'الكوسة',
    titleEn: 'Zucchini in Tomato-Garlic Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl17-1',
        name: 'كوسة',
        nameEn: 'Zucchini',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl17-2',
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
        id: 'vl17-3',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '3 ثمرات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 ثمرات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl17-4',
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
        id: 'vl17-5',
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
        id: 'vl17-6',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl17-7',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1.5 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl17-8',
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
        text: 'يضرب البصل والفلفل الأخضر والطماطم والخل والثوم في الخلاط.',
        textEn: 'Blend the onion, green pepper, tomatoes, vinegar and garlic.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يشوَح الخضار المضروب في الزيت حتى يغلي على حرارة هادئة.',
        textEn: 'Sauté the blended mixture in oil until it comes to a boil over low heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تشوَح الكوسة جيدا في هذا الخليط ونسكب عليها المرق حتى الغليان.',
        textEn: 'Sauté the zucchini well in this mixture, then pour in the broth and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تهدأ الحرارة حتى النضج.',
        textEn: 'Lower the heat and simmer until cooked through.',
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
        title: 'الكوسة',
        ingredients: ['1 كيلو كوسة', 'بصلة متوسطة', '3 ثمرات طماطم أو صلصة طماطم', 'ثمرة فلفل رومي', '2 ملعقة كبيرة زيت', '¼ رأس ثوم', 'ملح', 'فلفل', '½1 كوب مرق'],
        instructions: ['يضرب البصل والفلفل الأخضر والطماطم والخل و الثوم في الخلاط.', 'يشوَح الخضار المضروب في الزيت حتى يغلي على حرارة هادئة.', 'تشَوح الكوسة جيدا في هذا الخليط و نسكب عليها المرق حتى الغليان.', 'تهدأ الحرارة حتى النضج.']
      }
    }
  },
  {
    id: 'veg-16',
    title: 'الكوسة بالمرق واللبن',
    titleEn: 'Baked Zucchini in Broth and Milk',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl18-1',
        name: 'كوسة مبشورة',
        nameEn: 'Grated zucchini',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl18-2',
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
        id: 'vl18-3',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl18-4',
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
        id: 'vl18-5',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '1-2 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1-2 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl18-6',
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
        id: 'vl18-7',
        name: 'زبدة',
        nameEn: 'Butter',
        standardAmount: '1 قطعة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl18-8',
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
        text: 'تبشر الكوسة بالبشَارة ثم تشوح في زيت مع البصلة المفرية والملح والفلفل.',
        textEn: 'Grate the zucchini and sauté it in oil with the grated onion, salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يمكن أيضا بشر حبة بطاطس مع ثمرة فلفل أخضر.',
        textEn: 'A grated potato and a green pepper can also be added.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 3,
        text: 'يضاف لها المرق واللبن، وبعد الغليان نحضر بايركس ونضع فيه الخضار والمرق ونضع على الوجه البيض المخفوق مع ملح وفلفل وقطعة زبد.',
        textEn: 'Add the broth and milk, and once boiling, transfer to a Pyrex dish, top with beaten egg seasoned with salt and pepper, and a knob of butter.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Bake in a medium oven until cooked through.',
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
        title: 'الكوسة بالمرق واللبن',
        ingredients: ['1 كيلو كوسة', 'بصلة متوسطة', '1 كوب مرق', '1 كوب لبن', '1 : 2 بيضة', '2 ملعقة كبيرة زيت', 'قطعة زبد', 'ملح', 'فلفل'],
        instructions: ['تبشر الكوسة بالبشَارة ثم تشوح في زيت مع البصلة المفرية والملح والفلفل.', 'يمكن ايضا بشر حبة بطاطس مع ثمرة فلفل أخضر.', 'يضاف لها المرق واللبن وبعد الغليان نحضر بايركس ونضع فيه الخضار والمرق ونضع على الوجه البيض المخفوق مع ملح وفلفل وقطعة زبد.', 'تدخل فرن متوسط الحرارة حتى النضج.']
      }
    }
  },
  {
    id: 'veg-17',
    title: 'الكوسة بالباشامل',
    titleEn: 'Zucchini Gratin with Béchamel',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl19-1',
        name: 'كوسة',
        nameEn: 'Zucchini',
        standardAmount: '3/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl19-2',
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
        id: 'vl19-3',
        name: 'بصلة متوسطة مبشورة',
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
        id: 'vl19-4',
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
        id: 'vl19-5',
        name: 'باشاميل (انظري الوصفة التالية)',
        nameEn: 'Béchamel (see recipe below)',
        standardAmount: '2 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl19-6',
        name: 'بقسماط',
        nameEn: 'Breadcrumbs',
        standardAmount: '1 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl19-7',
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
        id: 'vl19-8',
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
        text: 'تقشر الكوسة وتقطع شرائح عريضة.',
        textEn: 'Peel the zucchini and cut into wide slices.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تبشر بصلة وتدعك بالملح والفلفل.',
        textEn: 'Grate an onion and mash it with salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تشوح الكوسة مع البصلة في السمن أو الزيت حتى تتماسك أجزاؤها.',
        textEn: 'Sauté the zucchini with the onion in ghee or oil until it firms up.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف قليل من الماء أو المرق حسب الحاجة مع تغطية الإناء على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add a little water or broth as needed, cover, and simmer over low heat until cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يدهن قالب بايركس أو صينية بزيت خفيف، ثم ترص فيه الكوسة وتخلط بنصف كمية الباشاميل.',
        textEn: 'Lightly oil a Pyrex dish or tray, arrange the zucchini in it, and mix in half the béchamel.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يخفق البيض في نصف كمية الباشاميل المتبقية وتغطى به الصينية، ويرش الوجه بالبقسماط الناعم وقطعة الزبد.',
        textEn: 'Whisk the egg into the remaining half of the béchamel, pour over the tray, and sprinkle the top with fine breadcrumbs and a knob of butter.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تدخل فرن متوسط الحرارة حتى تنضج ويحمر الوجه.',
        textEn: 'Bake in a medium oven until cooked and golden on top.',
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
        title: 'الكوسة بالباشامل',
        ingredients: ['¾ كيلو كوسة', 'كوب من المرق أو الماء', 'بصلة متوسطة مبشورة', 'بيضة', '2 كوب باشامل', 'ملح', 'فلفل', 'ملعقة كبيرة بقسماط', 'زيت أو سمن'],
        instructions: ['تقشر الكوسة وتقطع شرائح عريضة.', 'تبشر بصلة وتدعك بالملح والفلفل.', 'تشوح الكوسة مع البصلة في السمن أو الزيت حتى تتماسك أجزائها.', 'يضاف قليل من الماء أو المرق حسب الحاجة مع تغطية الإناء على درجة حرارة هادئة حتى النضج.', 'يدهن قالب بايركس أو صينية زيت خفيف ثم ترص فيه الكوسة وتخلط بنصف كمية الباشامل.', 'يخفق البيض على نصف كمية الباشامل المتبقية وتغطى الصينية ويرش الوجه بالقسماط الناعم وقطعة الزبد.', 'تدخل فرن متوسط الحرارة حتى تنضج ويحمر الوجه.']
      }
    }
  },
  {
    id: 'veg-18',
    title: 'عمل الباشامل',
    titleEn: 'Béchamel Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '15 دقيقة',
    servings: 'حوالي 3 كوب',
    masterIngredients: [
      {
        id: 'vl20-1',
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
        id: 'vl20-2',
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
        id: 'vl20-3',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: 'حوالي 3 كوب حسب القوام المطلوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حوالي 3 كوب حسب القوام المطلوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl20-4',
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
        id: 'vl20-5',
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
        text: 'يسيَح السمن أو الزيت ويضاف له الدقيق مع التحريك المستمر على درجة حرارة هادئة حتى يصفر لونه، وينزع من فوق الحرارة.',
        textEn: 'Melt the ghee or oil, whisk in the flour, and stir constantly over low heat until lightly golden, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن ويضاف إلى الدقيق مع التقليب السريع بالمضرب السلكي.',
        textEn: 'Bring the milk to a boil and whisk it into the flour mixture quickly with a wire whisk.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يعاد الإناء على درجة حرارة هادئة مع التقليب المستمر، ثم يتبل بالملح والفلفل حتى يصل إلى القوام المطلوب.',
        textEn: 'Return to low heat, stirring constantly, and season with salt and pepper until it reaches the desired thickness.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد أن يهدأ الخليط يضاف له البيض.',
        textEn: 'Once the mixture has cooled slightly, whisk in the eggs.',
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
        title: 'عمل الباشامل',
        ingredients: ['2 ملعقة كبيرة زيت أو سمن', '2 ملعقة كبيرة دقيق', 'حوالي 3 أكواب لبن حسب السمك المطلوب', '2 بيضة', 'ملح', 'فلفل'],
        instructions: ['يسيَح السمن أو الزيت ويضاف له الدقيق مع التحريك المستمر على درجة حرارة هادئة حتى يصفر لونه و ينزع من فوق الحرارة.', 'يغلي اللبن ويضاف إلى الدقيق مع التقليب السريع بالمضرب السلك.', 'يعاد الإناء على درجة حرارة هادئة مع التقليب المستمر ثم يتبل بالملح والفلفل حتى يصل إلى السمك المطلوب.', 'بعد أن يهدأ الخليط يضاف له البيض.']
      }
    }
  },
  {
    id: 'veg-19',
    title: 'الكوسة بالزيتون',
    titleEn: 'Zucchini Boats Stuffed with Olives and Cheddar',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl21-1',
        name: 'كوسة',
        nameEn: 'Zucchini',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl21-2',
        name: 'جبن شيدر',
        nameEn: 'Cheddar cheese',
        standardAmount: '1/4 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl21-3',
        name: 'زيتون غير مملح',
        nameEn: 'Unsalted olives',
        standardAmount: '1/8 كيلو',
        category: 'other',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl21-4',
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
        text: 'تقشر الكوسة وتسلق في قليل من الماء المغلي نصف سلق.',
        textEn: 'Peel the zucchini and parboil in a little boiling water until half-cooked.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تصفى من الماء ثم تقطع بالطول نصفين.',
        textEn: 'Drain and slice lengthwise in half.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ينزع قلب الكوسة باحتراس ويرص في صينية أو بايركس مدهون بالزيت.',
        textEn: 'Carefully scoop out the centers and arrange the shells in an oiled tray or Pyrex dish.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تحشى الكوسة بقطع صغيرة من الزيتون الأسود وترص فوق قلب الكوسة.',
        textEn: 'Fill with small pieces of black olives, arranged over the hollowed centers.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يبشر الجبن الشيدر ويوضع فوق الكوسة مع قليل من الزبد وتدخل الفرن.',
        textEn: 'Grate the cheddar over the top with a little butter, and bake.',
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
        title: 'الكوسة بالزيتون',
        ingredients: ['1 كيلو كوسة', '¼ كيلو جبن شيدر', '⅛ كيلو زيتون غير مملح', 'زبدة'],
        instructions: ['تقشر الكوسة وتسلق في قليل من الماء المغلي نصف سلق.', 'تصفى من الماء ثم تقطع بالطول نصفين.', 'ينزع قلب الكوسة باحتراس ورصه في صينية أو بايركس مدهون زيت.', 'تحشى الكوسة بقطع صغيرة من الزيتون الأسود وترص فوق قلب الكوسة.', 'يبشر الجبن الشيدر ووضعه فوق الكوسة وقليل من الزبد وتدخل الفرن.']
      }
    }
  },
  {
    id: 'veg-20',
    title: 'الكوسة بالعصاج',
    titleEn: 'Zucchini Boats Stuffed with Assag and Cheese',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl22-1',
        name: 'كوسة',
        nameEn: 'Zucchini',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl22-2',
        name: 'عصاج أو دجاجة مفرومة ناضجة',
        nameEn: 'Assag filling, or minced cooked chicken (see meats section)',
        standardAmount: '1/4 كيلو أو 1/2 دجاجة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو أو 1/2 دجاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl22-3',
        name: 'خضار مشكل مطهو (جزر وبسلة)',
        nameEn: 'Cooked mixed vegetables (carrots and peas)',
        standardAmount: '1/4 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl22-4',
        name: 'صلصة المكرونة (انظري باب النشويات)',
        nameEn: 'Pasta sauce (see starches section)',
        standardAmount: '1 ملعقة كبيرة',
        category: 'other',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl22-5',
        name: 'باشاميل',
        nameEn: 'Béchamel (see recipe above)',
        standardAmount: '1 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl22-6',
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
      {
        id: 'vl22-7',
        name: 'ماء وزيت',
        nameEn: 'Water and oil',
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
        text: 'تقشر الكوسة وتقسم نصفين بالطول بدون سلق.',
        textEn: 'Peel the zucchini and split lengthwise in half, without parboiling.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'ينزع قلب الكوسة وتحشى بالعصاج أو الدجاج المفروم المخلوط بالخضار المشكل المطهو (جزر–بسلة) بعد ضربه مع الدجاج في الكبة.',
        textEn: 'Scoop out the centers and stuff with the assag filling, or minced chicken blended with the cooked mixed vegetables (carrots and peas).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع فوقها قليل من صلصة المكرونة مع تقليبها، ثم تغطى بكوب من الباشاميل، ثم بشر جبن شيدر أو أي نوع جبن.',
        textEn: 'Spoon over a little pasta sauce, mix in, then cover with a cup of béchamel and top with grated cheddar or any cheese.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن صينية بزيت خفيف، ثم ترص حبات الكوسة المحشوة بالعصاج والصلصة والباشاميل والجبن المبشور مع قليل جدا من الماء حتى لا تلتصق.',
        textEn: 'Lightly oil a tray, arrange the stuffed zucchini with the sauce, béchamel and cheese, and add a very little water so it doesn\'t stick.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تغطى وتدخل فرن متوسط الحرارة حتى تنضج، ثم نرفع عنها الغطاء حتى يسيح الجبن على الوجه.',
        textEn: 'Cover and bake in a medium oven until cooked, then uncover to let the cheese melt and brown on top.',
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
        title: 'الكوسة بالعصاج',
        ingredients: ['1 كيلو كوسة', '¼ كيلو عصاج (انظري باب اللحوم)  أو نصف دجاجة مفرومة ناضجة', '¼ كيلوخضار مشكل مطهو (جزر و بسلة)', '1 ملعقة كبيرة صلصة المكرونة (انظري باب النشويات)', 'كوب من الباشامل', '⅛ كيلو جبن مبشور', 'ماء', 'زيت'],
        instructions: ['تقشر الكوسة وتقسم نصفين بالطول بدون سلق.', 'ينزع قلب الكوسة وتحشى بالعصاج أو الدجاج المفروم المخلوط بالخضار المشكل المطهو ( جزر– بسلة ) بعد ضربه مع الدجاج في الكبة.', 'يوضع فوقها قليل من صلصة المكرونة مع تقليبها ثم تغطي بكوب من صلصة الباشامل ثم بشر جبن شيدر أو أي نوع جبن.', 'تدهن صينية زيت خفيف ثم ترص حبات الكوسة المحشوة بالعصاج والصلصة والباشامل والجبن المبشور مع قليل جدا من الماء حتى لا تلتصق.', 'تغطى وتدخل فرن متوسط الحرارة حتى تنضج ثم نرفع عنها الغطاء حتى تسيح الجبن على الوجه.']
      }
    }
  },
  {
    id: 'veg-21',
    title: 'القلقاس بالصلصة',
    titleEn: 'Taro in Tomato-Garlic Broth Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '25 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl23-1',
        name: 'قلقاس',
        nameEn: 'Taro',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl23-2',
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
        id: 'vl23-3',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '3 ثمرات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 ثمرات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl23-4',
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
        id: 'vl23-5',
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
        id: 'vl23-6',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl23-7',
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
        id: 'vl23-8',
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
        id: 'vl23-9',
        name: 'عصير ليمون (للتنظيف)',
        nameEn: 'Lemon juice, for rinsing',
        standardAmount: 'حسب الحاجة',
        category: 'sweet_fruit',
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
        text: 'يقشر القلقاس ويقطع مكعبات متوسطة، وينقع في الماء الدافئ (كي تزول المادة المخاطية)، ثم يشطف بالماء وعصير الليمون.',
        textEn: 'Peel the taro and cut into medium cubes, soak in warm water to remove the sliminess, then rinse with water and lemon juice.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البصل والفلفل الأخضر والطماطم والخل والثوم في الخلاط.',
        textEn: 'Blend the onion, bell pepper, tomatoes, vinegar and garlic.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع الزيت في إناء الطهي حتى يسخن فقط، ثم نسكب فيه هذا الخليط على درجة حرارة هادئة حتى الغليان.',
        textEn: 'Heat the oil in a pot just until hot, then pour in the blended mixture and simmer over low heat until it boils.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نسكب عليه المرق ونتركه يغلي.',
        textEn: 'Pour in the broth and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نضيف القلقاس وتخفض درجة الحرارة مع تغطية الإناء حتى النضج.',
        textEn: 'Add the taro, lower the heat, cover, and simmer until cooked through.',
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
        title: 'القلقاس بالصلصة',
        ingredients: ['1 كيلو قلقاس', 'بصلة متوسطة', '3 ثمرات طماطم أو ملعقة صلصة', 'ثمرة فلفل رومي', '2 ملعقة كبيرة زيت', '¼ رأس ثوم', '2 كوب مرق', 'ملح', 'فلفل'],
        instructions: ['يقشر القلقاس ويقطع مكعبات متوسطة وينقع في الماء الدافئ ( كي تزول المادة المخاطية ) ثم يشطف بالماء وعصير الليمون.', 'يضرب البصل والفلفل الأخضر والطماطم والخل و الثوم في الخلاط.', 'نضع الزيت في إناء الطهي حتى يسخن فقط ثم نسكب فيه هذا الخليط على درجة حرارة هادئة حتى الغليان.', 'نسكب عليه المرق و نتركه يغلي.', 'نضيف القلقاس و تخفض درجة الحرارة مع تغطية الإناء حتى النضج.']
      }
    }
  },
  {
    id: 'veg-22',
    title: 'المسقعة بدون عصاج',
    titleEn: 'Baked Eggplant Moussaka (Meatless)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '30 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl24-1',
        name: 'باذنجان رومي',
        nameEn: 'Round eggplant',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl24-2',
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
        id: 'vl24-3',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl24-4',
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
        id: 'vl24-5',
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
        id: 'vl24-6',
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
        id: 'vl24-7',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة للقلي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl24-8',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1 إلى 1.5 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 إلى 1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl24-9',
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
        text: 'يقشر الباذنجان ثم يقطع مستديرات متوسطة، ويوضع في مصفاة فوق إناء ويرش بالملح حتى يتخلص من مائه، ثم يجفف.',
        textEn: 'Peel the eggplant and cut into medium rounds, place in a colander over a bowl, salt to draw out the bitter liquid, then pat dry.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع في طاسة القلي زيتا مقدوحا ثم يحمر الباذنجان على الوجهين ويوضع على مناديل ورقية.',
        textEn: 'Heat oil well in a frying pan and fry the eggplant on both sides until golden, then drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضرب البصل والطماطم والفلفل والثوم والخل والملح والفلفل في الخلاط.',
        textEn: 'Blend the onion, tomatoes, bell pepper, garlic, vinegar, salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر إناء ونضع فيه قليل من الزيت ونسكب عليه الخلطة المضروبة، ثم نضيف حوالي كوب ونصف إلى 2 كوب مرق.',
        textEn: 'Heat a little oil in a pot, pour in the blended mixture, and add about 1.5 to 2 cups of broth.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد الغليان نحضر البايركس أو الصينية ونرص فيها الباذنجان المقلي ونسكب عليه المرق الممزوج بالصلصة، ويدخل فرن متوسط الحرارة حتى يتشرب وينضج، وممكن تغطيته في الفرن.',
        textEn: 'Once boiling, arrange the fried eggplant in a Pyrex dish or tray, pour the sauce over it, and bake in a medium oven, covered if you like, until the liquid is absorbed and cooked through.',
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
        title: 'المسقعة بدون عصاج',
        ingredients: ['1 كيلو باذنجان رومي', 'بصلة كبيرة مفرية', '2 ثمرة طماطم أو ملعقة كبيرة صلصة طماطم', 'ثمرة فلفل رومي', '¼ رأس ثوم مفري', '1 ملعقة كبيرة خل', 'زيت', 'ملح', 'فلفل', '1 : ½1 كوب مرق'],
        instructions: ['يقشر الباذنجان ثم يقطع مستديرات متوسطة ويوضع في مصفاة فوق إناء ويرش بالملح حتى يتخلص من مائه ثم يجفف.', 'نضع في طاسة القلي زيت مقدوح ثم يحمر الباذنجان على الوجهين ويوضع على مناديل ورقية.', 'نضرب البصل والطماطم والفلفل والثوم والخل والملح والفلفل في الخلاط.', 'نحضر إناء ونضع فيه قليل من الزيت ونسكب عليه الخلطة المضروبة ثم نضيف حوالي ½1 : 2 كوب مرق.', 'بعد الغليان نحضر البايركس أو الصينية ونرص فيها الباذنجان المقلي ونسكب عليه المرق الممزوج بالصلصة.', 'يدخل الفرن المتوسط الحرارة حتى يتشرب وينضج وممكن تغطيته في الفرن.']
      }
    }
  },
  {
    id: 'veg-23',
    title: 'المسقعة بالعصاج',
    titleEn: 'Layered Eggplant Moussaka with Assag',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '35 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl25-1',
        name: 'باذنجان رومي',
        nameEn: 'Round eggplant',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl25-2',
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
        id: 'vl25-3',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1.5 إلى 2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1.5 إلى 2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl25-4',
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
        id: 'vl25-5',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl25-6',
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
        id: 'vl25-7',
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
        id: 'vl25-8',
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
        id: 'vl25-9',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة للقلي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl25-10',
        name: 'باشاميل (اختياري)',
        nameEn: 'Béchamel, optional (see recipe above)',
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
        text: 'يقشر الباذنجان ثم يقطع مستديرات متوسطة، ويوضع في مصفاة فوق إناء ويرش بالملح حتى يتخلص من مائه، ثم يجفف.',
        textEn: 'Peel the eggplant and cut into medium rounds, place in a colander, salt to draw out the liquid, then pat dry.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع في طاسة القلي زيتا مقدوحا ثم يحمر الباذنجان على الوجهين ويوضع على مناديل ورقية.',
        textEn: 'Fry the eggplant in hot oil on both sides until golden, then drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضرب البصل والطماطم والفلفل والثوم والخل والملح والفلفل في الخلاط.',
        textEn: 'Blend the onion, tomatoes, bell pepper, garlic, vinegar, salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر إناء ونضع فيه قليل من الزيت ونسكب عليه الخلطة المضروبة، ثم نضيف حوالي كوب ونصف إلى 2 كوب مرق.',
        textEn: 'Heat a little oil in a pot, pour in the blended mixture, and add about 1.5 to 2 cups of broth.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد الغليان نحضر البايركس أو الصينية، ثم نبدأ في وضع الباذنجان مع العصاج بالتبادل، أي طبقة باذنجان في القاع ثم عصاج، وهكذا حتى تنتهي بطبقة العصاج على الوجه.',
        textEn: 'Once boiling, in a Pyrex dish or tray, alternate layers of eggplant and assag — eggplant on the bottom, then assag — ending with assag on top.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نسكب عليه المرق بالصلصة ويدخل الفرن حتى النضج.',
        textEn: 'Pour the sauce over it and bake until cooked through.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'ممكن إضافة كمية من الباشاميل (1 كوب) على الوجه.',
        textEn: 'A cup of béchamel can be added over the top.',
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
        title: 'المسقعة بالعصاج',
        ingredients: ['1 كيلو باذنجان رومي', '¼ كيلو عصاج (انظري باب اللحوم)', '½1 : 2 كوب مرق', 'بصلة كبيرة مفرية', '2 ثمرة طماطم أو ملعقة كبيرة صلصة طماطم', 'ثمرة فلفل رومي', '¼ رأس ثوم مفري', '1 ملعقة كبيرة خل', 'زيت', 'ملح', 'فلفل'],
        instructions: ['يقشر الباذنجان ثم يقطع مستديرات متوسطة ويوضع في مصفاة فوق إناء ويرش بالملح حتى يتخلص من مائه ثم يجفف.', 'نضع في طاسة القلي زيت مقدوح ثم يحمر الباذنجان على الوجهين ويوضع على مناديل ورقية.', 'نضرب البصل والطماطم والفلفل والثوم والخل والملح والفلفل في الخلاط.', 'نحضر إناء ونضع فيه قليل من الزيت ونسكب عليه الخلطة المضروبة ثم نضيف حوالي ½1 : 2 كوب مرق.', 'بعد الغليان نحضر البايركس أو الصينية ثم نبدأ في وضع الباذنجان مع العصاج بالتبادل أي طبقة باذنجان في القاع ثم عصاج وهكذا حتى تنتهي بطبقة العصاج على الوجه.', 'نسكب عليه المرق بالصلصة ويدخل الفرن حتى النضج.', 'ممكن إضافة كمية من الباشامل (1 كوب) على الوجه.']
      }
    }
  },
  {
    id: 'veg-24',
    title: 'الباذنجان المقلي بالخل والثوم',
    titleEn: 'Fried Eggplant with Garlic-Vinegar Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'قلي',
    prepTime: '25 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl26-1',
        name: 'باذنجان رومي',
        nameEn: 'Round eggplant',
        standardAmount: '1.5 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1.5 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl26-2',
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
        id: 'vl26-3',
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
      {
        id: 'vl26-4',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '2 ملعقة + للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة + للقلي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl26-5',
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
        id: 'vl26-6',
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
        text: 'يقشر الباذنجان ثم يقطع مستديرات متوسطة، ويوضع في مصفاة فوق إناء ويرش بالملح حتى يتخلص من مائه، ثم يجفف.',
        textEn: 'Peel the eggplant and cut into medium rounds, place in a colander, salt to draw out the liquid, then pat dry.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع في طاسة القلي زيتا مقدوحا ثم يحمر الباذنجان على الوجهين ويوضع على مناديل ورقية.',
        textEn: 'Fry the eggplant in hot oil on both sides until golden, then drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نعمل صلصة مكونة من الثوم والخل والملح والفلفل والزيت والماء: يقدح الزيت ويضاف إليه الثوم حتى يصفر لونه، ثم يضاف الخل مع التقليب ثم الماء، ويتبل بالملح والفلفل ويقلب جيدا ثم يرفع من الحرارة.',
        textEn: 'Make a sauce of garlic, vinegar, salt, pepper, oil and water: heat the oil, add the garlic until golden, then stir in the vinegar and water, season with salt and pepper, mix well, and remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يوضع الباذنجان في التتبيلة ويغطى حتى يتشرب تماما، ثم يقلب في صحن التقديم.',
        textEn: 'Add the eggplant to the sauce, cover until it fully absorbs it, then turn out onto the serving dish.',
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
        title: 'الباذنجان المقلي بالخل والثوم',
        ingredients: ['½1 كيلو باذنجان رومي', '½ رأس ثوم مفري', '½ كوب خل', '2 ملعقة زيت', 'ملح', 'فلفل', 'قليل من الماء'],
        instructions: ['يقشر الباذنجان ثم يقطع مستديرات متوسطة ويوضع في مصفاة فوق إناء ويرش بالملح حتى يتخلص من مائه ثم يجفف.', 'نضع في طاسة القلي زيت مقدوح ثم يحمر الباذنجان على الوجهين ويوضع على مناديل ورقية.', 'نعمل صلصة مكونة من الثوم و الخل والملح والفلفل و الزيت و الماء.', 'يقدح الزيت ويضاف إليه الثوم حتى يصفر لونه ثم يضاف الخل مع التقليب ثم الماء ويتبل بالملح والفلفل وتقلب جيدا ثم ترفع من الحرارة.', 'يوضع في التتبيلة الباذنجان ويغطى حتى يتشرب تماما ثم يقلب في صحن التقديم.']
      }
    }
  },
  {
    id: 'veg-25',
    title: 'المقلوبة',
    titleEn: 'Maqlouba (Upside-Down Eggplant, Meat and Rice)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '40 دقيقة',
    cookTime: '1 ساعة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'vl27-1',
        name: 'باذنجان رومي',
        nameEn: 'Round eggplant',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl27-2',
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
        id: 'vl27-3',
        name: 'لحم مكعبات',
        nameEn: 'Diced beef',
        standardAmount: '1/2 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl27-4',
        name: 'ملح وفلفل وحبهان مدقوق وورق لورا',
        nameEn: 'Salt, pepper, crushed cardamom and bay leaf',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl27-5',
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
        id: 'vl27-6',
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
        id: 'vl27-7',
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
        id: 'vl27-8',
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
        id: 'vl27-9',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة للقلي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقشر الباذنجان ويقطع ويرش بالملح، ويوضع في مصفاة فوق إناء ويترك حتى ينزل ما به من الماء.',
        textEn: 'Peel and cut the eggplant, salt it, and let it drain in a colander over a bowl.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر إناء به زيت ونضع فيه مكعبات اللحم الصغيرة، ونقلبها مع بصلة مفرية حتى يصفر اللون، ثم يتبل بالملح والفلفل والحبهان المدقوق وورق اللورا.',
        textEn: 'Heat oil in a pot, add the small meat cubes with the grated onion, stir until golden, then season with salt, pepper, crushed cardamom and bay leaf.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف الماء والخل للإناء ويغطى ويترك على درجة حرارة هادئة حتى النضج، ثم يرفع اللحم من المرق.',
        textEn: 'Add water and vinegar, cover, and simmer over low heat until cooked, then lift the meat out of the broth.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يغسل 2 كوب من الأرز وينقع في ماء دافئ.',
        textEn: 'Wash 2 cups of rice and soak in warm water.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نحضر طاسة بها زيت لقلي الباذنجان ورفعه على مناديل ورقية.',
        textEn: 'Fry the eggplant in a pan of oil and drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نحضر إناء طهو ونضع في القاع شرائح الفلفل والطماطم حتى لا يلتصق الأرز في قاع الإناء.',
        textEn: 'Line the bottom of a cooking pot with slices of pepper and tomato so the rice won\'t stick.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'نبدأ في ترتيب الإناء بوضع مقدار من الأرز وفوقه مقدار من اللحم ثم كمية من الباذنجان المقلي، ثم يكرر نفس الترتيب ثانيا، ثم يرفع على درجة حرارة هادئة حتى يتم نضج الأرز.',
        textEn: 'Layer the rice, then the meat, then the fried eggplant, repeating the layers once more, then cook over low heat until the rice is done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يقلب الباذنجان باللحم والأرز باحتراس في طبق التقديم.',
        textEn: 'Carefully invert onto the serving plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'يجمل بالبقدونس والصنوبر المحمر مع سلطة زبادي.',
        textEn: 'Garnish with parsley and toasted pine nuts, and serve with a yogurt salad.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 9,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'المقلوبة',
        ingredients: ['1 كيلو باذنجان رومي', 'بصلة متوسطة مفرية', '½ كيلو لحم مكعبات', 'ملح و فلفل', 'حبهان مدقوق', 'ورق اللورا', 'ملعقة كبيرة خل', '2 كوب أرز', 'ثمرة فلفل أخضر', 'ثمرة طماطم', '2 كوب مرق', 'زيت'],
        instructions: ['يقشر الباذنجان ويقطع ويرش بالملح ويوضع في مصفاة فوق إناء ويترك حتى ينزل ما به من الماء.', 'نحضر إناء به زيت ونضع فيه مكعبات اللحم الصغيرة ونقلبها مع بصلة مفرية حتى يصفر اللون ثم يتبل بالملح والفلفل والحبهان المدقوق وورق اللورا.', 'يضاف الماء والخل للإناء ويغطى ويترك على درجة حرارة هادئة حتى النضج ثم يرفع اللحم من المرق.', 'يغسل 2 كوب من الأرز وينقع في ماء دافئ.', 'نحضر طاسة بها زيت لقلي الباذنجان ورفعه على مناديل ورقية.', 'نحضر إناء طهو نضع في القاع شرائح الفلفل والطماطم حتى لا يلتصق الأرز في قاع الإناء.', 'نبدأ في ترتيب الإناء بوضع مقدار من الأرز وفوقه مقدار من اللحم ثم كمية من الباذنجان المقلي ثم يكرر نفس الترتيب ثانيا ثم يرفع على درجة حرارة هادئة حتى يتم نضج الأرز.', 'يقلب الباذنجان باللحم والأرز باحتراس في طبق التقديم.', 'يجمل بالبقدونس والصنوبر المحمر مع سلطة زبادي.']
      }
    }
  },
  {
    id: 'veg-26',
    title: 'القنبيط',
    titleEn: 'Baked Fried Cauliflower with Assag in Tomato Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl28-1',
        name: 'قنبيط متوسط',
        nameEn: 'Medium cauliflower',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl28-2',
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
        id: 'vl28-3',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1.5 إلى 2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1.5 إلى 2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl28-4',
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
        id: 'vl28-5',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '3 ثمرات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 ثمرات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl28-6',
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
        id: 'vl28-7',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl28-8',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '2 ملعقة كبيرة + للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة + للقلي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl28-9',
        name: 'ملح وكمون وخل',
        nameEn: 'Salt, cumin and vinegar',
        standardAmount: 'حسب الرغبة و1 ملعقة خل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة و1 ملعقة خل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع القنبيط وتزال أعناقه الغليظة.',
        textEn: 'Cut the cauliflower into florets and remove the thick stems.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع في الماء المغلي المضاف إليه الملح والكمون بحيث تكون الزهرة لأسفل والأعناق لأعلى حتى تنضج نوعا ما.',
        textEn: 'Parboil in salted, cumin-seasoned water with the florets facing down and stems up, until partially cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترفع في مصفاة حتى تجف ثم تحمر في الزيت وترفع على مناديل ورقية.',
        textEn: 'Drain, dry, then fry in oil until golden, and drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضرب البصل والطماطم والفلفل الأخضر والثوم مع الملح والفلفل في الخلاط.',
        textEn: 'Blend the onion, tomatoes, bell pepper, garlic, salt and pepper.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تشوَح هذه الخلطة في إناء به زيت حتى الغليان، ثم نضيف المرق.',
        textEn: 'Sauté this mixture in oil until it boils, then add the broth.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد الغليان نحضر البايركس ثم نخلط القنبيط بالعصاج، ونسكب عليه المرق الممزوج بالصلصة، ويوضع في فرن متوسط الحرارة حتى النضج.',
        textEn: 'Once boiling, mix the cauliflower with the assag in a Pyrex dish, pour the sauce over it, and bake in a medium oven until cooked through.',
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
        title: 'القنبيط',
        ingredients: ['عدد 1 ثمرة قنبيط متوسطة', '¼ كيلو عصاج (انظري باب اللحوم)', '½1 : 2 كوب مرق', 'بصلة متوسطة', '3 ثمرات طماطم أو ملعقة كبيرة صلصة', 'ثمرة فلفل رومي', '2 ملعقة كبيرة زيت', '¼ رأس ثوم', 'ملح', 'كمون', 'ملعقة خل'],
        instructions: ['يقطع القنبيط وتزال أعناقه الغليظة.', 'يوضع في الماء المغلي المضاف إليه الملح والكمون بحيث تكون الزهرة لأسفل والأعناق الخفيفة لأعلى حتى تنضج نوعا ما.', 'ترفع في مصفاة حتى تجف ثم تحمر في الزيت وترفع على مناديل ورقية.', 'يضرب البصل والطماطم والفلفل الأخضر والثوم مع الملح والفلفل في الخلاط.', 'تشوَح هذه الخلطة في إناء به زيت حتى الغليان ثم نضيف المرق.', 'بعد الغليان نحضر البايركس ثم نخلط القنبيط بالعصاج.', 'نسكب عليه المرق الممزوج بالصلصة.', 'يوضع في فرن متوسط الحرارة حتى النضج.']
      }
    }
  },
  {
    id: 'veg-27',
    title: 'القنبيط بالباشامل',
    titleEn: 'Cauliflower and Assag Gratin with Béchamel and Cheese',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl29-1',
        name: 'قنبيط متوسط',
        nameEn: 'Medium cauliflower',
        standardAmount: '1 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl29-2',
        name: 'باشاميل',
        nameEn: 'Béchamel (see recipe above)',
        standardAmount: '1 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl29-3',
        name: 'عصاج (اختياري)',
        nameEn: '"Assag" filling, optional (see meats section)',
        standardAmount: '1/4 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl29-4',
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
        id: 'vl29-5',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl29-6',
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
        id: 'vl29-7',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl29-8',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '2 ملعقة كبيرة + للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة + للقلي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl29-9',
        name: 'ملح وفلفل وكمون وخل',
        nameEn: 'Salt, pepper, cumin and vinegar',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl29-10',
        name: 'زبد وجبن رومي',
        nameEn: 'Butter and Romy cheese',
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
        text: 'يقطع القنبيط وتزال أعناقه الغليظة.',
        textEn: 'Cut the cauliflower into florets and remove the thick stems.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع في الماء المغلي المضاف إليه الملح والكمون بحيث تكون الزهرة لأسفل والأعناق لأعلى حتى تنضج نوعا ما.',
        textEn: 'Parboil in salted, cumin-seasoned water with the florets facing down and stems up, until partially cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترفع في مصفاة حتى تجف ثم تحمر في الزيت وترفع على مناديل ورقية.',
        textEn: 'Drain, dry, then fry in oil until golden, and drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضرب البصل والطماطم والفلفل الأخضر والثوم مع الملح والفلفل في الخلاط، وتشوَح هذه الخلطة في إناء به زيت حتى الغليان.',
        textEn: 'Blend the onion, tomatoes, bell pepper, garlic, salt and pepper, and sauté in oil until it boils.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نحضر بايركس أو صينية فرن ونضع فيه القنبيط المحمر والعصاج (اختياري)، ثم نخلطه بصلصة الخضار جيدا.',
        textEn: 'In a Pyrex dish or tray, combine the fried cauliflower with the assag (optional), and mix well with the vegetable sauce.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يغطى بالباشاميل وتوضع فوقه قطعة من الزبد وترش بالجبن، ويوضع في فرن متوسط الحرارة حتى النضج.',
        textEn: 'Cover with the béchamel, top with a knob of butter and grated cheese, and bake in a medium oven until cooked through.',
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
        title: 'القنبيط بالباشامل',
        ingredients: ['عدد 1 ثمرة قنبيط متوسطة', '1 كوب باشامل', '¼ كيلو عصاج حسب الحاجة (انظري باب اللحوم)', 'بصلة متوسطة', '2 ثمرة طماطم أو ملعقة كبيرة صلصة', 'ثمرة فلفل رومي', '2 ملعقة كبيرة زيت', '¼ رأس ثوم', 'ملح', 'فلفل', 'كمون', 'ملعقة خل', 'زبد', 'جبن رومي'],
        instructions: ['يقطع القنبيط وتزال أعناقه الغليظة.', 'يوضع في الماء المغلي المضاف إليه الملح والكمون بحيث تكون الزهرة لأسفل والأعناق الخفيفة لأعلى حتى تنضج نوعا ما.', 'ترفع في مصفاة حتى تجف ثم تحمر في الزيت وترفع على مناديل ورقية.', 'يضرب البصل والطماطم والفلفل الأخضر والثوم مع الملح والفلفل في الخلاط.', 'تشوَح هذه الخلطة في إناء به زيت حتى الغليان.', 'نحضر بايركس أو صينية فرن و نضع فيه القنبيط المحمر و العصاج (اختياري) ثم نخلطه بصلصة الخضار جيدا.', 'يغطى بالباشامل و توضع فوقه قطعة من الزبد و ترش بالجبن.', 'يوضع في فرن متوسط الحرارة حتى النضج.']
      }
    }
  },
  {
    id: 'veg-28',
    title: 'الخرشوف المسلوق بالزيت والليمون',
    titleEn: 'Boiled Artichokes in Oil, Lemon and Garlic',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'سلق',
    prepTime: '20 دقيقة',
    cookTime: '25 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl30-1',
        name: 'خرشوف',
        nameEn: 'Artichokes',
        standardAmount: 'حوالي 6 حبات أو أقل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حوالي 6 حبات أو أقل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl30-2',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: '1 ملعقة كبيرة + للسلق',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة + للسلق'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl30-3',
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
        id: 'vl30-4',
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
        id: 'vl30-5',
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
        id: 'vl30-6',
        name: 'بقدونس',
        nameEn: 'Parsley',
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
        text: 'تنزع الأوراق الخارجية الخضراء ثم تقشر من جوانبها وأسفلها، ثم تقطع من أعلى وتقسم الثمرة إلى نصفين أو أربعة أقسام.',
        textEn: 'Remove the tough outer leaves, peel the sides and base, trim the top, and cut each artichoke into halves or quarters.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع على الفور في ماء مضاف إليه عصير ليمون أو خل حتى لا يسود لونها.',
        textEn: 'Place immediately in water with lemon juice or vinegar to prevent discoloring.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 3,
        text: 'يسلق الخرشوف في ماء مغلي مضاف إليه الملح وعصير الليمون.',
        textEn: 'Boil the artichokes in salted water with lemon juice.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد النضج نحضر إناء ونضع فيه الزيت وعصير ليمونة وملح وفلفل والثوم المفري، ويقلب الخليط جيدا لكي يغلظ قوامه.',
        textEn: 'Once cooked, mix the oil with lemon juice, salt, pepper and crushed garlic, and stir well until it thickens slightly.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يتبل الخرشوف المسلوق بهذا الخليط ثم يرش بالبقدونس المقطع.',
        textEn: 'Toss the boiled artichokes in this dressing and sprinkle with chopped parsley.',
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
        title: 'الخرشوف المسلوق بالزيت والليمون',
        ingredients: ['حوالي 6 حبات من الخرشوف أو أقل حسب الحاجة', 'ملعقة كبيرة عصير ليمون', '2 ملعقة كبيرة زيت', 'ملح', 'فلفل', '4 فصوص ثوم مفري', 'بقدونس'],
        instructions: ['تنزع الأوراق الخارجية الخضراء ثم تقشر من جوانبها وأسفلها ثم تقطع من أعلى وتقسم الثمرة إلى نصفين أو أربعة أقسام.', 'توضع على الفور في ماء مضاف إليه عصير ليمون أو خل حتى لا يسود لونه.', 'يسلق الخرشوف في ماء مغلي مضاف إليه الملح وعصير الليمون.', 'بعد النضج نحضر إناء ونضع فيه الزيت وعصير ليمونة وملح وفلفل والثوم المفري ويقلب الخيلط جيدا لكي يغلظ قوامه.', 'يتبل الخرشوف المسلوق بهذا الخليط ثم يرش بالبقدونس المقطع.']
      }
    }
  },
  {
    id: 'veg-29',
    title: 'الخرشوف المحشو بالعصاج',
    titleEn: 'Artichokes Stuffed with Assag, Baked',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl31-1',
        name: 'خرشوف',
        nameEn: 'Artichokes',
        standardAmount: 'حوالي 6 حبات أو أقل',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حوالي 6 حبات أو أقل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl31-2',
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
        id: 'vl31-3',
        name: 'طماطم',
        nameEn: 'Tomatoes',
        standardAmount: '1/2 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl31-4',
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
        id: 'vl31-5',
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
        id: 'vl31-6',
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
        id: 'vl31-7',
        name: 'باشاميل (اختياري)',
        nameEn: 'Béchamel, optional (see recipe above)',
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
        text: 'تنزع الأوراق الخارجية الخضراء ثم تقشر من جوانبها وأسفلها، ثم تقطع من أعلى وتقسم الثمرة إلى نصفين أو أربعة أقسام.',
        textEn: 'Remove the tough outer leaves, peel the sides and base, trim the top, and cut each artichoke into halves or quarters.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع على الفور في ماء مضاف إليه عصير ليمون أو خل حتى لا يسود لونها.',
        textEn: 'Place immediately in water with lemon juice or vinegar to prevent discoloring.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 3,
        text: 'يسلق الخرشوف نصف سلق، وبالإمكان عدم سلقه.',
        textEn: 'Parboil the artichokes halfway, or skip boiling entirely.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يحمر في الزيت تحميرا خفيفا ويرفع على مناديل ورقية.',
        textEn: 'Lightly fry in oil and drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يطهى العصاج بالطريقة المعروفة مع إضافة نصف كوب طماطم وملعقة خل حتى النضج.',
        textEn: 'Cook the assag as usual, adding half a cup of tomatoes and a tablespoon of vinegar, until done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يرتب الخرشوف في بايركس أو صينية بنظام ويوضع العصاج بين الطبقات.',
        textEn: 'Arrange the artichokes neatly in a Pyrex dish or tray, layering the assag between them.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يصب كوب من المرق أو الماء المغلي فوقه ويدخل الفرن.',
        textEn: 'Pour a cup of hot broth or water over it and bake.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'ممكن إضافة صلصة الباشاميل (1 كوب) بسكبها فوق الخرشوف.',
        textEn: 'A cup of béchamel can be poured over the artichokes.',
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
        title: 'الخرشوف المحشو بالعصاج',
        ingredients: ['حوالي 6 حبات من الخرشوف أو أقل حسب الحاجة', 'كمية من العصاج (انظري باب اللحوم)', '½ كوب طماطم', 'ملعقة كبيرة خل', '1كوب من المرق أو الماء', 'زيت'],
        instructions: ['تنزع الأوراق الخارجية الخضراء ثم تقشر من جوانبها وأسفلها ثم تقطع من أعلى وتقسم الثمرة إلى نصفين أو أربعة أقسام.', 'توضع على الفور في ماء مضاف إليه عصير ليمون أو خل حتى لا يسود لونه.', 'يسلق الخرشوف نصف سلق وبالإمكان عدم سلقه.', 'يحمر في الزيت تحمير خفيف ويرفع على مناديل ورقية.', 'يطهى العصاج بالطريقة المعروفة مع إضافة نصف كوب طماطم وملعقة خل حتى النضج.', 'يرتب الخرشوف في بايركس أو صينية بنظام ويوضع العصاج بين الطبقات.', 'يصب كوب من المرق أو الماء المغلي فوقه ويدخل الفرن.', 'ممكن إضافة صلصة الباشامل ( 1 كوب ) بسكبها فوق الخرشوف.']
      }
    }
  },
  {
    id: 'veg-30',
    title: 'السبانخ المسلوق بالزيت والليمون',
    titleEn: 'Boiled Spinach in Oil, Lemon and Garlic',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'سلق',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl32-1',
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
        id: 'vl32-2',
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
        id: 'vl32-3',
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
        id: 'vl32-4',
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
        id: 'vl32-5',
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
        text: 'بعد غسله جيدا وتقطيف الورق يسلق في قليل من الماء المغلي والملح حتى النضج.',
        textEn: 'After washing well and picking the leaves, boil in a little salted water until cooked.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'بعد السلق يفرم غليظا.',
        textEn: 'Once boiled, chop coarsely.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر إناء ونضع فيه الزيت وعصير ليمونة وملح وفلفل والثوم المفري، ويقلب الخليط جيدا لكي يغلظ قوامه، ويتَبل به السبانخ جيدا.',
        textEn: 'Mix the oil with lemon juice, salt, pepper and crushed garlic, stirring until it thickens slightly, then toss the spinach well in it.',
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
        title: 'السبانخ المسلوق بالزيت والليمون',
        ingredients: ['1 كيلو سبانخ', '2 ملعقة كبيرة زيت', '4 فصوص ثوم مفري', 'عصير ليمونة', 'ملح', 'فلفل'],
        instructions: ['بعد غسله جيدا وتقطيف الورق يسلق في قليل من الماء المغلي والملح حتى النضج.', 'بعد السلق يفرم غليظا.', 'نحضر إناء ونضع فيه الزيت وعصير ليمونة وملح وفلفل والثوم المفري ويقلب الخيلط جيدا لكي يغلظ قوامه و يتَبل به السبانخ جيدا.']
      }
    }
  },
  {
    id: 'veg-31',
    title: 'السبانخ بالدمعة',
    titleEn: 'Spinach in Fresh Tomato Sauce with Dill and Rice',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl33-1',
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
        id: 'vl33-2',
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
        id: 'vl33-3',
        name: 'طماطم أو صلصة',
        nameEn: 'Tomatoes or tomato paste',
        standardAmount: '2 ثمرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ثمرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl33-4',
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
        id: 'vl33-5',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl33-6',
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
        id: 'vl33-7',
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
        id: 'vl33-8',
        name: 'شبت',
        nameEn: 'Dill',
        standardAmount: '1 حزمة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حزمة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl33-9',
        name: 'أرز أو حمص جاف',
        nameEn: 'Rice, or dried chickpeas',
        standardAmount: '1 ملعقة أرز أو 2 ملعقة حمص',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة أرز أو 2 ملعقة حمص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl33-10',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl33-11',
        name: 'تقلية ثوم',
        nameEn: 'Garlic "taqliya" (finishing garlic tempering)',
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
        text: 'يغسل السبانخ مع حزمة الشبت ويقطع غليظا.',
        textEn: 'Wash the spinach with the dill and chop coarsely.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب في الخلاط الطماطم والفلفل والبصل والثوم والخل.',
        textEn: 'Blend the tomatoes, green pepper, onion, garlic and vinegar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع زيتا في الإناء، وبعد وضع الخلطة على الزيت نتركها حتى تغلي، ثم نضيف السبانخ والشبت مع التقليب أنا فأنا على درجة حرارة هادئة.',
        textEn: 'Heat oil in a pot, add the blended mixture and bring to a boil, then add the spinach and dill, stirring occasionally over low heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف مقدار قليل من المرق كلما احتاج الأمر حتى يقارب النضج.',
        textEn: 'Add a little broth as needed until nearly cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تنقع ملعقة كبيرة أرز لفترة ثم تصفى من الماء وتضاف إلى السبانخ حتى ينضج الأرز مع السبانخ، ويمكن استبدال الأرز بالحمص الجاف المنقوع.',
        textEn: 'Soak a tablespoon of rice, drain, and add to the spinach, cooking until the rice is done along with it; dried soaked chickpeas can be used instead of rice.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد رفع السبانخ من الحرارة ونضجه تماما نضيف إليه التقلية.',
        textEn: 'Once the spinach is off the heat and fully cooked, stir in the garlic tempering (taqliya).',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 11,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'السبانخ بالدمعة',
        ingredients: ['1 كيلو سبانخ', 'بصلة متوسطة', '2 ثمرة طماطم أو صلصة طماطم', 'ثمرة فلفلة خضراء', '¼ رأس ثوم', 'ملعقة كبيرة خل', 'زيت', 'حزمة شبت', '1 ملعقة أرز', 'أو 2 ملعقة حمص جاف', '1 كوب مرق'],
        instructions: ['يغسل السبانخ مع حزمة الشبت ويقطع غليظا.', 'يضرب في الخلاط (الطماطم والفلفل والبصل والثوم والخل).', 'نضع زيت في الإناء وبعد وضع الخلطة على الزيت نتركها حتى تغلي ثم نضيف السبانخ والشبت مع التقليب أناً فأناً على درجة حرارة هادئة.', 'يضاف مقدار قليل من المرق كلما احتاج الأمر حتى يقرب من النضج.', 'تنقع ملعقة كبيرة أرز لفترة ثم تصفى من الماء وتضاف إلى السبانخ حتى ينضج الأرز مع السبانخ – ويمكن استبدال الأرز بالحمص الجاف المنقوع.', 'بعد رفع السبانخ من الحرارة و نضجه تماما نضيف اليه التقلية.']
      }
    }
  },
  {
    id: 'veg-32',
    title: 'السبانخ المسبَك',
    titleEn: 'Alexandrian Spinach with Anise, Cumin and Aged Garlic Oil',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة (+24 ساعة نقع الثوم)',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl34-1',
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
        id: 'vl34-2',
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
        id: 'vl34-3',
        name: 'كمون',
        nameEn: 'Cumin',
        standardAmount: '1 ملعقة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl34-4',
        name: 'ينسون مطحون',
        nameEn: 'Ground anise',
        standardAmount: '1 ملعقة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl34-5',
        name: 'فلفل أحمر مطحون',
        nameEn: 'Ground red pepper',
        standardAmount: '1/2 ملعقة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1/2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl34-6',
        name: 'ثوم مفري منقوع في زيت زيتون 24 ساعة',
        nameEn: 'Crushed garlic, soaked in olive oil for 24 hours',
        standardAmount: '1 ملعقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl34-7',
        name: 'شبت',
        nameEn: 'Dill',
        standardAmount: '1 حزمة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 حزمة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl34-8',
        name: 'صلصة طماطم',
        nameEn: 'Tomato paste',
        standardAmount: '2 ملعقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl34-9',
        name: 'حمص مسلوق',
        nameEn: 'Boiled chickpeas',
        standardAmount: '2 ملعقة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl34-10',
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
        text: 'يقطَع السبانخ بعد غسله، ثم نحضر إناء وتشوح فيه البصلة المفرية، ثم نضيف الثوم المنقوع والينسون والكمون والفلفل المطحون ويشوحوا جيدا.',
        textEn: 'Chop the washed spinach, then sauté the grated onion in a pot, add the soaked garlic, anise, cumin and ground pepper, and sauté well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضيف صلصة الطماطم المخففة بالماء والملح، ثم الحمص المسلوق، ونتركهم حتى الغليان.',
        textEn: 'Add the tomato paste thinned with water and salt, then the boiled chickpeas, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'بعد الغليان نضع السبانخ على درجة حرارة عالية جدا حتى يحتفظ بفائدته.',
        textEn: 'Once boiling, add the spinach and cook over very high heat briefly to preserve its nutrients.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف الشبت وعصير الليمون والماء عند الحاجة، ويغطى الإناء ويترك على حرارة متوسطة بعد ذلك حتى النضج.',
        textEn: 'Add the dill, lemon juice and water as needed, cover, and finish cooking over medium heat until done.',
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
        title: 'السبانخ المسبَك',
        ingredients: ['1 كيلو سبانخ', 'بصلة متوسطة', 'ملعقة كمون', 'ملعقة ينسون مطحون', '½ ملعقة فلفل أحمر مطحون', 'ملعقة ثوم مفري منقوع في زيت الزيتون 24 ساعة', 'حزمة شبت', '2 ملعقة صلصة طماطم', '2 ملعقة حمص مسلوق', 'عصير ليمون'],
        instructions: ['يقطَع السبانخ بعد غسله ثم نحضر إناء وتشوح فيه البصلة المفرية ثم نضيف الثوم المنقوع والينسون والكمون والفلفل المطحون ويشوحوا جيدا.', 'نضيف صلصة الطماطم المخففة بالماء والملح ثم الحمص المسلوق ونتركهم حتى الغليان.', 'بعد الغليان نضع السبانخ على درجة حرارة عالية جدا حتى يحتفظ بفائدته.', 'يضاف الشبت وعصير الليمون والماء عند الحاجة ويغطى الإناء ويترك على حرارة متوسطة بعد ذلك حتى النضج.']
      }
    }
  },
  {
    id: 'veg-33',
    title: 'السبانخ في الفرن',
    titleEn: 'Baked Spinach and Assag Egg Bake',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl35-1',
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
        id: 'vl35-2',
        name: 'بصلة متوسطة مبشورة',
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
        id: 'vl35-3',
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
        id: 'vl35-4',
        name: 'أرز أو حمص منقوع',
        nameEn: 'Soaked rice, or soaked chickpeas',
        standardAmount: '1 ملعقة أرز أو 2 ملعقة حمص',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة أرز أو 2 ملعقة حمص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl35-5',
        name: 'عصاج',
        nameEn: '"Assag" minced meat filling (see meats section)',
        standardAmount: '2-3 ملعقة كبيرة',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '2-3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl35-6',
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
        id: 'vl35-7',
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
        id: 'vl35-8',
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
        text: 'نحضر إناء الطهو ونضع فيه البصلة المبشورة والمدعوكة بالملح والفلفل مع الثوم المفري والأرز أو الحمص المنقوع مع السبانخ المقطعة، ونتركهم على درجة حرارة هادئة مع تغطية الإناء حتى يتشرب السبانخ كل الماء.',
        textEn: 'In a pot, combine the grated onion mashed with salt and pepper, the garlic, the soaked rice or chickpeas, and the chopped spinach; simmer covered over low heat until the spinach absorbs all the liquid.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخلط هذا الخليط بمقدار من العصاج (2-3 ملاعق كبيرة عصاج)، ثم نضعه في بايركس.',
        textEn: 'Mix in 2-3 tablespoons of assag, then transfer to a Pyrex dish.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تخفق 4 بيضات مع الملح والفلفل وتصب فوق السبانخ مع ملعقتي زيت أو سمن على الوجه.',
        textEn: 'Whisk 4 eggs with salt and pepper, pour over the spinach, and drizzle 2 tablespoons of oil or ghee on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يدخل فرن متوسط الحرارة حتى ينضج ويحمر الوجه.',
        textEn: 'Bake in a medium oven until cooked and golden on top.',
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
        title: 'السبانخ في الفرن',
        ingredients: ['1 كيلو سبانخ', 'بصلة متوسطة', '¼ راس ثوم مفري', '1 م أرز منقوع أو 2 م حمص منقوع', 'عصاج', '4 بيضات', '2 م زيت', 'ملح', 'فلفل'],
        instructions: ['نحضر إناء الطهو ونضع فيه البصلة المبشورة والمدعوكة بالملح والفلفل مع الثوم المفري والأرز أو الحمص المنقوع مع السبانخ المقطعة ونتركهم على درجة حرارة هادئة مع تغطية الإناء حتى يتشرب السبانخ كل الماء.', 'يخلط هذا الخليط بمقدار من العصاج (2 : 3 ملاعق كبيرة عصاج) ثم نضعه في بايركس.', 'تخفق 4 بيضات مع الملح والفلفل وتصب فوق السبانخ مع ملعقتي زيت أو سمن على الوجه.', 'يدخل فرن متوسط الحرارة حتى ينضج ويحمر الوجه.']
      }
    }
  },
  {
    id: 'veg-34',
    title: 'الترلي',
    titleEn: 'Turli — Mixed Vegetable and Beef Tray Bake',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '50 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'vl36-1',
        name: 'خضروات متعددة (باذنجان، فاصوليا، بطاطس، بازلاء)',
        nameEn: 'Assorted vegetables (eggplant, green beans, potatoes, peas), equal amounts',
        standardAmount: 'بكميات متساوية',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'بكميات متساوية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl36-2',
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
        id: 'vl36-3',
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
        id: 'vl36-4',
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
        id: 'vl36-5',
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
        id: 'vl36-6',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl36-7',
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
        id: 'vl36-8',
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
        id: 'vl36-9',
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
        id: 'vl36-10',
        name: 'زيت وملح وفلفل',
        nameEn: 'Oil, salt and pepper',
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
        text: 'تجهز الخضر بعد غسلها، ثم يقطع البصل والطماطم والفلفل الأخضر والجزر حلقات والثوم المفري، ويتبلوا بالملح والفلفل وملعقة الخل ويقلبوا جيدا.',
        textEn: 'Wash and slice the onion, tomatoes, green pepper and carrots into rings, mince the garlic, and season with salt, pepper and vinegar, mixing well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر صينية مدهونة زيت وتوضع الخضر مع اللحم المقطع في طبقات متبادلة.',
        textEn: 'Oil a tray and layer the vegetables with the diced meat, alternating layers.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف 2 كوب ماء مغلي به ملعقتين زيت وملح.',
        textEn: 'Add 2 cups of boiling water with 2 tablespoons of oil and salt.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تغطى الصينية وتدخل فرن متوسط الحرارة حتى يتم النضج.',
        textEn: 'Cover the tray and bake in a medium oven until fully cooked.',
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
        title: 'الترلي',
        ingredients: ['أنواع متعددة من الخضروات حسب الرغبة مثل الباذنجان', 'الفاصوليا', 'البطاطس', 'البازلاء بكميات متساوية', '2 بصلة', '2 ثمرة طماطم', '1 ثمرة فلفل أخضر', '2 جزر', '¼ راس ثوم', 'ملعقة كبيرة خل', 'ملح', 'فلفل', 'زيت', '1ك لحم', '2 كوب ماء'],
        instructions: ['تجهز الخضر بعد غسلها ثم يقطع البصل والطماطم والفلفل الأخضر والجزر حلقات والثوم المفري ويتبلوا بالملح والفلفل وملعقة الخل ويقلبوا جيدا.', 'نحضر صينية مدهونة زيت وتوضع الخضر مع اللحم المقطع في طبقات متبادلة.', 'يضاف 2 كوب ماء مغلي به ملعقتين زيت وملح.', 'تغطى الصينية وتدخل فرن متوسط الحرارة حتى يتم النضج.']
      }
    }
  },
  {
    id: 'veg-35',
    title: 'صينية البطاطس في الفرن',
    titleEn: 'Baked Potato and Meat Tray in Tomato Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '50 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'vl37-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl37-2',
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
        id: 'vl37-3',
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
        id: 'vl37-4',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '1/4 رأس ثوم',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/4 رأس ثوم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl37-5',
        name: 'عصير طماطم أو صلصة',
        nameEn: 'Tomato juice or tomato paste',
        standardAmount: '2 كوب أو 2 ملعقة صلصة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 كوب أو 2 ملعقة صلصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl37-6',
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
        id: 'vl37-7',
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
        id: 'vl37-8',
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
        id: 'vl37-9',
        name: 'لحم مقطع أو دجاجة',
        nameEn: 'Diced beef or chicken',
        standardAmount: '1 كيلو',
        category: 'meat_poultry',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl37-10',
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
        text: 'تقطع حبات البطاطس حلقات غليظة نوعا ما وتترك في الماء والملح والخل.',
        textEn: 'Cut the potatoes into fairly thick rounds and leave in water with salt and vinegar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقطع البصل حلقات رفيعة ويدعك جيدا بالملح والفلفل، وتقطع ثمرة الفلفل الأخضر حلقات ويفرم الثوم.',
        textEn: 'Slice the onion thinly and mash well with salt and pepper; slice the green pepper into rings and mince the garlic.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يقطع اللحم أو الدجاج ويتبل بالملح والفلفل (ممكن الاستغناء عنهم).',
        textEn: 'Cut the meat or chicken and season with salt and pepper (this can be omitted for a vegetarian version).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر إناء به زيت وتوضع فيه حلقات البصل والثوم المفري وتقلب حتى تتشرب ما بها من ماء.',
        textEn: 'Heat oil in a pot, add the onion rings and crushed garlic, and stir until they absorb their liquid.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يضاف اللحم المكعبات أو قطع الدجاج ويقلبوا مع البصل والثوم حتى يتشربوا تماما.',
        textEn: 'Add the diced meat or chicken pieces and stir with the onion and garlic until fully browned.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تضاف حلقات الفلفل وتقلب تقليبة واحدة، ثم يسكب عصير الطماطم أو الصلصة المخففة بالماء ونتركها حتى الغليان.',
        textEn: 'Add the pepper rings with one stir, then pour in the tomato juice or paste diluted with water, and bring to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'نحضر صينية مدهونة زيت ونضع بها البطاطس في طبقات متبادلة مع اللحم أو الدجاج المخلوط بالبصل والثوم والفلفل والطماطم.',
        textEn: 'Oil a tray and layer the potatoes alternately with the meat or chicken mixture.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يصب على الخضار الماء حسب كمية البطاطس ويتبل بالملح والفلفل، ويقطَع فوقه ثمرة طماطم حلقات صغيرة مع ملعقة كبيرة زيت.',
        textEn: 'Pour water over it according to the amount of potatoes, season with salt and pepper, and top with tomato rings and a tablespoon of oil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'تغطى الصينية وتدخل فرن متوسط الحرارة؛ قبل تمام النضج يرفع الغطاء حتى تتشرب البطاطس السائل قليلا.',
        textEn: 'Cover and bake in a medium oven; near the end, remove the cover to let the potatoes absorb a little more of the liquid.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 9,
      totalMasterIngredients: 10,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'صينية البطاطس في الفرن',
        ingredients: ['1 كيلو بطاطس', '2 بصلة كبيرة', 'ثمرة فلفل أخضر', '¼ رأس ثوم', 'عصير 2 كوب طماطم أو 2 ملعقة كبيرة صلصة طماطم', '1 ملعقة كبيرة خل', '2 كوب ماء', 'ملح', 'فلفل', '2 ملعقة كبيرة زيت', '1 كيلو  لحم مقطع أو دجاجة'],
        instructions: ['تقطع حبات البطاطس حلقات غليظة نوعا ما وتترك في الماء والملح والخل.', 'يقطع البصل حلقات رفيعة ويدعك جيدا بالملح والفلفل.', 'تقطع ثمرة الفلفل الأخضر حلقات ويفرم الثوم.', 'يقطع اللحم أو الدجاج ويتبل بالملح والفلفل (ممكن الاستغناء عنهم).', 'نحضر إناء به زيت وتوضع فيه حلقات البصل والثوم المفري وتقلب حتى تتشرب ما بها من ماء.', 'يضاف اللحم المكعبات أو قطع الدجاج ويقلبوا مع البصل والثوم حتى يتشربوا تماما.', 'تضاف حلقات الفلفل وتقلب تقليبة واحدة ثم يسكب عصير الطماطم أو الصلصة المخففة بالماء ونتركها حتى الغليان.', 'نحضر صينية مدهونة زيت ونضع بها البطاطس في طبقات متبادلة مع اللحم أو الدجاج المخلوط بالبصل والثوم والفلفل والطماطم.', 'يصب على الخضار الماء حسب كمية البطاطس ويتبل بالملح والفلفل.', 'ويقطَع فوقه ثمرة طماطم حلقات صغيرة مع ملعقة كبيرة زيت.', 'تغطى الصينية وتدخل فرن متوسط الحرارة.', 'قبل اتمام النضج يرفع الغطاء حتى تتشرب البطاطس السائل قليلا.']
      }
    }
  },
  {
    id: 'veg-37',
    title: 'سوتيه البطاطس',
    titleEn: 'Buttery Mashed Potato Sauté',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'سلق',
    prepTime: '10 دقائق',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl38-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl38-2',
        name: 'زبد',
        nameEn: 'Butter',
        standardAmount: '1 قطعة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl38-3',
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
        id: 'vl38-4',
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
      {
        id: 'vl38-5',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسلق البطاطس بقشره في ماء مغلي مع الملح والخل.',
        textEn: 'Boil the potatoes in their skins in salted, vinegared water.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'بعد النضج يقشر ويهرس بالشوكة جيدا وهو ساخن.',
        textEn: 'Once cooked, peel and mash well with a fork while still hot.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر إناء به قليل من الزبد وتسخن فقط ثم نضع البطاطس ونقلبه قليلا حتى يتماسك مع الزبد ثم نرفعه من الحرارة.',
        textEn: 'Heat a little butter in a pot just until melted, add the potatoes, and stir briefly until combined with the butter, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يتبل بالملح والفلفل والبقدونس المفري.',
        textEn: 'Season with salt, pepper and chopped parsley.',
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
        title: 'سوتيه البطاطس',
        ingredients: ['½ كيلو بطاطس أو حسب الحاجة', 'قطعة زبد', 'ملح', 'فلفل', 'بقدونس', 'ملعقة كبيرة خل'],
        instructions: ['يسلق البطاطس بقشره في ماء مغلي مع الملح والخل.', 'بعد النضج يقشر ويهرس بالشوكة جيدا وهو ساخن.', 'نحضر إناء به قليل من الزبد وتسخن فقط ثم نضع البطاطس ونقلبه قليلا حتى يتماسك مع الزبد ثم نرفعه من الحرارة.', 'يتبل بالملح والفلفل والبقدونس المفري.']
      }
    }
  },
  {
    id: 'veg-38',
    title: 'بطاطس ببورية',
    titleEn: 'Creamy Mashed Potatoes with Milk and Butter',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'سلق',
    prepTime: '10 دقائق',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl39-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1/2 كيلو أو أكثر',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو أو أكثر'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl39-2',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1/4 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl39-3',
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
      {
        id: 'vl39-4',
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
        text: 'تسلق البطاطس بقشرها وبعد النضج تقشر وتهرس ساخنة جدا.',
        textEn: 'Boil the potatoes in their skins, then peel and mash while very hot.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر إناء ويوضع فيه اللبن مع الزبد أو السمن والملح والفلفل، ويترك حتى الغليان وترفع من الحرارة.',
        textEn: 'Heat the milk with the butter or ghee, salt and pepper in a pot until boiling, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف البطاطس المهروسة وتخلط جيدا مع السائل حتى تمتزج تماما، وتقدم ساخنة.',
        textEn: 'Add the mashed potatoes and mix well with the liquid until fully combined; serve hot.',
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
        title: 'بطاطس ببورية',
        ingredients: ['½ كيلو بطاطس أو أكثر', '¼ كوب لبن', 'زبد أو سمن', 'ملح', 'فلفل'],
        instructions: ['تسلق البطاطس بقشرها وبعد النضج تقشر وتهرس ساخنة جدا.', 'نحضر إناء ويوضع فيه اللبن مع الزبد أو السمن والملح والفلفل ويترك حتى الغليان وترفع من الحرارة.', 'تضاف البطاطس المهروسة وتخلط جيدا مع السائل حتى تمتزج تماما وتقدم ساخنة.']
      }
    }
  },
  {
    id: 'veg-39',
    title: 'كروكيت البطاطس (كفتة البطاطس)',
    titleEn: 'Potato Croquettes Stuffed with Assag',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'قلي',
    prepTime: '30 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl40-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl40-2',
        name: 'سمن أو زبد',
        nameEn: 'Ghee or butter',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl40-3',
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
        id: 'vl40-4',
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
        id: 'vl40-5',
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
        id: 'vl40-6',
        name: 'بيضة وبقسماط',
        nameEn: 'Egg and breadcrumbs',
        standardAmount: '1 بيضة وحسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة وحسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl40-7',
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
        text: 'تسلق البطاطس وتهرس جيدا بعد تقشيرها.',
        textEn: 'Boil the potatoes, peel, and mash well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر إناء ونسيح فيه السمن أو الزبد ثم يضاف لها البطاطس المهروس.',
        textEn: 'Melt the ghee or butter in a pot, then add the mashed potatoes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع الإناء ويترك ليبرد ثم يتبل بالملح والفلفل والجبن المبشور.',
        textEn: 'Remove from the heat, let cool, then season with salt, pepper and grated cheese.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضع قليلا من الزيت في طبق صغير لدهن اليد منه خفيفا حتى لا تلتصق عجينة البطاطس باليد.',
        textEn: 'Keep a little oil in a small dish to lightly grease your hands so the potato dough doesn\'t stick.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 5,
        text: 'تشكل على هيئة كرات صغيرة ويعمل بها حفرة لحشوها بالعصاج.',
        textEn: 'Shape into small balls, making a hollow in each to stuff with the assag filling.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تغمس الكرات في البيض ثم البقسماط وتحمر في الزيت الغزير.',
        textEn: 'Dip the balls in egg, then breadcrumbs, and deep-fry.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'كروكيت البطاطس (كفتة البطاطس)',
        ingredients: ['½ كيلو بطاطس', 'ملعقة كبيرة سمن أو زبد', 'ملح', 'فلفل', 'جبن مبشور', 'كمية من العصاج (انظري باب اللحوم)', '1 بيضة', 'بقسماط', 'زيت للتحمير'],
        instructions: ['تسلق البطاطس وتهرس جيدا بعد تقشيرها.', 'نحضر إناء ونسيح فيه السمن أو الزبد ثم يضاف لها البطاطس المهروس.', 'يرفع الإناء ويترك ليبرد ثم يتبل بالملح والفلفل والجبن المبشور.', 'نضع قليل من الزيت في طبق صغيرة لدهن اليد منه خفيفا حتى لا تلتصق عجينة البطاطس باليد.', 'تشكل على هيئة كرات صغيرة ويعمل بها حفرة لحشوها بالعصاج.', 'تغمس الكرات في البيض ثم البقسماط وتحمر في الزيت الغزير.']
      }
    }
  },
  {
    id: 'veg-40',
    title: 'صلصة البطاطس بالثوم',
    titleEn: 'Mashed Potatoes with Garlic and Cumin',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'سلق',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl41-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1/2 كيلو أو أقل',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو أو أقل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl41-2',
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
        id: 'vl41-3',
        name: 'كمون وكسبرة',
        nameEn: 'Cumin and coriander',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl41-4',
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
        id: 'vl41-5',
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
        id: 'vl41-6',
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
        text: 'تقطع البطاطس حلقات صغيرة ثم تسلق وتهرس.',
        textEn: 'Cut the potatoes into small rounds, boil, and mash.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر طاسة بها قليل من الزيت حتى يسخن، ثم نضيف الثوم المفري مع الكمون والكسبرة.',
        textEn: 'Heat a little oil in a pan, then add the crushed garlic with the cumin and coriander.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع البطاطس في طبق التقديم ونسكب عليها التتبيلة مع الملح وقليل من اللبن ويخلطوا جيدا.',
        textEn: 'Place the mashed potatoes in the serving dish, pour the garlic mixture over them with salt and a little milk, and mix well.',
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
        title: 'صلصة البطاطس بالثوم',
        ingredients: ['½ كيلو  بطاطس أو أقل', '3 فصوص ثوم مفري', 'كمون', 'كسبرة', 'ملح', 'قليل من اللبن', 'زيت'],
        instructions: ['تقطع البطاطس حلقات صغيرة ثم تسلق وتهرس.', 'نحضر طاسة بها قليل من الزيت حتى يسخن ثم نضيف الثوم المفري مع الكمون والكسبرة.', 'نضع البطاطس في طبق التقديم ونسكب عليه التتبيلة مع الملح وقليل من اللبن ويخلطوا جيدا.']
      }
    }
  },
  {
    id: 'veg-41',
    title: 'صلصة البطاطس بالبصل',
    titleEn: 'Potatoes with Whole Baby Onions in Spiced Tomato Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl42-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl42-2',
        name: 'بصل صغير',
        nameEn: 'Baby onions',
        standardAmount: '6 حبات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '6 حبات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl42-3',
        name: 'صلصة طماطم',
        nameEn: 'Tomato paste',
        standardAmount: 'حسب الحاجة',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl42-4',
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
        id: 'vl42-5',
        name: 'ملح وكمون وقرفة',
        nameEn: 'Salt, cumin and cinnamon',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl42-6',
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
        id: 'vl42-7',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسلق البطاطس المقطع مكعبات متوسطة نصف سلق فقط.',
        textEn: 'Parboil the potatoes, cut into medium cubes, until only half-cooked.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر إناء به زيت ساخن نحمر فيه البصل الصغير الصحيح أو المقطع.',
        textEn: 'Heat oil in a pot and brown the whole or halved baby onions.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نعمل صلصة طماطم متبلة بالملح والكمون والقرفة والخل أو عصير الليمون مع الثوم المفري ويقلبوا جيدا.',
        textEn: 'Make a tomato sauce seasoned with salt, cumin, cinnamon, vinegar or lemon juice, and crushed garlic, mixing well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نسكب البطاطس على الخلطة وتقلب وتغطى وتترك على درجة حرارة هادئة حتى النضج.',
        textEn: 'Add the potatoes to the mixture, stir, cover, and simmer over low heat until cooked through.',
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
        title: 'صلصة البطاطس بالبصل',
        ingredients: ['½ كيلو بطاطس', '6 حبات من البصل الصغير', 'صلصة طماطم', 'زيت', 'ملح', 'كمون', 'قرفة', 'ملعقة كبيرة خل أو عصير ليمونة', '3 فصوص ثوم مفري'],
        instructions: ['يسلق البطاطس المقطع مكعبات متوسطة نصف سلق فقط.', 'نحضر إناء به زيت ساخن نحمر فيه البصل الصغير الصحيح أو المقطع.', 'نعمل صلصة طماطم متبلة بالملح والكمون والقرفة والخل أو عصير الليمون مع الثوم المفري ويقلبوا جيدا.', 'نسكب البطاطس على الخلطة وتقلب وتغطى وتترك على درجة حرارة هادئة حتى النضج.']
      }
    }
  },
  {
    id: 'veg-42',
    title: 'بطاطس بالدمعة',
    titleEn: 'Fried Potatoes in Fresh Tomato Sauce',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl43-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl43-2',
        name: 'دمعة (صلصة طماطم طرية، انظري الوصفة التالية)',
        nameEn: '"Damaa" fresh tomato sauce (see recipe below)',
        standardAmount: '1 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl43-3',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: 'حسب الحاجة للقلي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة للقلي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقطع البطاطس مكعبات ثم يحمر في الزيت ويرفع على مناديل ورقية.',
        textEn: 'Dice the potatoes, fry in oil, and drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يجهز حوالي كوب واحد من الدمعة، وعدم الإكثار منه لأن البطاطس لن تحتاج لفترة طويلة في نضجها.',
        textEn: 'Prepare about one cup of the fresh tomato sauce — not more, since the potatoes won\'t need long to finish cooking.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 3,
        text: 'نضيف البطاطس المحمرة إلى الدمعة ويغطى الإناء على درجة حرارة متوسطة حتى تنضج البطاطس.',
        textEn: 'Add the fried potatoes to the sauce, cover, and cook over medium heat until the potatoes are done.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'بطاطس بالدمعة',
        ingredients: ['1 كيلو بطاطس', '1 كوب من الدمعة', 'زيت'],
        instructions: ['يقطع البطاطس مكعبات ثم يحمر في الزيت ويرفع على مناديل ورقية.', 'يجهز حوالي كوب واحد من الدمعة و عدم الاكثار منه لأن البطاطس لن تحتاج لفترة طويلة في نضجها.', 'نضيف البطاطس المحمرة إلى الدمعة ويغطى الإناء على درجة حرارة متوسطة حتى تنضج البطاطس.']
      }
    }
  },
  {
    id: 'veg-43',
    title: 'عمل الدمعة',
    titleEn: 'Fresh Tomato "Damaa" Sauce (for Fried Potatoes)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '15 دقيقة',
    servings: 'حوالي كوب',
    masterIngredients: [
      {
        id: 'vl44-1',
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
        id: 'vl44-2',
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
        id: 'vl44-3',
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
        id: 'vl44-4',
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
        id: 'vl44-5',
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
        id: 'vl44-6',
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
        textEn: 'Add the vinegar and stir well, then add the water, season with salt and pepper, and bring to a boil.',
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
        title: 'عمل الدمعة',
        ingredients: ['1 كوب طماطم مصفاة', '3 فصوص ثوم مفري', 'ملعقة كبيرة خل', '1 كوب ماء', 'ملح', 'فلفل', 'سمن أو زيت'],
        instructions: ['يحمَر الثوم في السمن أو الزيت خفيفا ثم تضاف الطماطم المعصورة وتترك حتى تنضج.', 'تضاف ملعقة الخل وتقلب جيدا ثم يضاف الماء ويتبل بالملح والفلفل ويترك حتى الغليان.']
      }
    }
  },
  {
    id: 'veg-44',
    title: 'بطاطس بالمرق',
    titleEn: 'Fried Potatoes Simmered in Garlic-Cumin Broth',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl45-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl45-2',
        name: 'مرق',
        nameEn: 'Broth',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl45-3',
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
        id: 'vl45-4',
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
        id: 'vl45-5',
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
        id: 'vl45-6',
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
        text: 'يقطع البطاطس شرائح أو مكعبات.',
        textEn: 'Cut the potatoes into slices or cubes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يحمر في الزيت ويرفع على مناديل ورقية.',
        textEn: 'Fry in oil and drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحمر البصلة في الزيت في وعاء آخر على درجة حرارة منخفضة، ثم يضاف إليها الثوم المفري ثم المرق المتبل بالملح والكمون.',
        textEn: 'In another pot, brown the onion in oil over low heat, then add the crushed garlic and the broth seasoned with salt and cumin.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف البطاطس المقلي إلى المرق ويغطى ويترك على درجة حرارة هادئة حتى يتشرب تقريبا المرق وينضج.',
        textEn: 'Add the fried potatoes to the broth, cover, and simmer over low heat until nearly all the broth is absorbed and cooked through.',
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
        title: 'بطاطس بالمرق',
        ingredients: ['1 كيلو بطاطس', '1كوب مرق', 'بصلة صغيرة', '2 فص ثوم', 'ملح', 'كمون', 'زيت'],
        instructions: ['يقطع البطاطس شرائح أومكعبات.', 'يحمر في الزيت ويرفع على مناديل ورقية.', 'تحمر البصلة في الزيت في وعاء آخر على درجة حرارة منخفضة ثم يضاف إليها الثوم المفري ثم المرق المتبل بالملح والكمون.', 'يضاف البطاطس المقلي إلى المرق ويغطى ويترك على درجة حرارة هادئة حتى يتشرب تقريبا المرق وينضج.']
      }
    }
  },
  {
    id: 'veg-45',
    title: 'البطاطس باللبن',
    titleEn: 'Baked Potato Gratin with Milk and Cheese',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl46-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl46-2',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: 'حوالي 2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حوالي 2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl46-3',
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
        id: 'vl46-4',
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
        id: 'vl46-5',
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
        text: 'تقطع البطاطس شرائح رفيعة مستديرة، ونحضر بايركس مدهون زيت ونضع به نصف كمية البطاطس.',
        textEn: 'Cut the potatoes into thin rounds, and layer half of them in an oiled Pyrex dish.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تسخن كمية اللبن بقدر كمية البطاطس ويتبل بالملح والفلفل.',
        textEn: 'Heat the milk, in proportion to the potatoes, and season with salt and pepper.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نسكب على البطاطس كمية من اللبن الساخن ثم الجبن المبشور.',
        textEn: 'Pour some of the hot milk over the potatoes, then sprinkle with grated cheese.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'ثم نضع بقية البطاطس وتسقى ببقية اللبن ثم الجبن المبشور.',
        textEn: 'Layer the remaining potatoes, pour over the rest of the milk, and top with more grated cheese.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدخل فرن متوسط الحرارة مع ملعقة كبيرة زيت أو سمن وتغطى حتى النضج.',
        textEn: 'Drizzle with a tablespoon of oil or ghee, cover, and bake in a medium oven until cooked through.',
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
        title: 'البطاطس باللبن',
        ingredients: ['1 كيلو بطاطس', '2 كوب لبن تقريبا', 'جبن مبشور', 'زيت', 'ملح', 'فلفل'],
        instructions: ['تقطع البطاطس شرائح رفيعة مستديرة نحضر بايركس مدهون زيت ونضع به نصف كمية البطاطس.', 'تسخن كمية اللبن بقدر كمية البطاطس ويتبل بالملح والفلفل.', 'نسكب على البطاطس كمية من اللبن الساخن ثم الجبن المبشور.', 'ثم نضع بقية البطاطس وتسقى ببقية اللبن ثم الجبن المبشور.', 'تدخل فرن متوسط الحرارة مع ملعقة كبيرة زيت أو سمن وتغطى حتى النضج.']
      }
    }
  },
  {
    id: 'veg-46',
    title: 'شرائح البطاطس',
    titleEn: 'Baked Potato Slices in Milk',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl47-1',
        name: 'بطاطس',
        nameEn: 'Potatoes, cut into medium-long slices',
        standardAmount: '4 حبات',
        category: 'vegetable',
        sourceVariations: {
          doc1: '4 حبات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl47-2',
        name: 'لبن أو ماء',
        nameEn: 'Milk or water',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl47-3',
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
        text: 'تقطع البطاطس إلى شرائح طويلة متوسطة.',
        textEn: 'Cut the potatoes into medium-long slices.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تدهن صينية بالسمن أو الزيت وترص الشرائح جنبا إلى جنب.',
        textEn: 'Grease a tray with ghee or oil and arrange the slices side by side.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تسكب الصلصة الساخنة على البطاطس ويسكب فوقها اللبن أو الماء، وتغطى الصينية وتدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Pour a hot sauce over the potatoes, then the milk or water, cover the tray, and bake in a medium oven until cooked through.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'شرائح البطاطس',
        ingredients: ['4 حبات من البطاطس المقطعة إلى شرائح طويلة متوسطة', 'كوب لبن أو ماء', 'سمن أو زيت'],
        instructions: ['تقطع البطاطس إلى شرائح طويلة متوسطة.', 'تدهن صينية بالسمن أو الزيت وترص الشرائح جنبا إلى جنب.', 'تسكب الصلصة الساخنة على البطاطس ويسكب فوقها اللبن أو الماء وتغطى الصينية وتدخل فرن متوسط الحرارة حتى النضج']
      }
    }
  },
  {
    id: 'veg-47',
    title: 'عمل الصلصة',
    titleEn: 'Garlic-Herb Oil and Vinegar Sauce (for Baked Potatoes)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '5 دقائق',
    servings: 'يكفي لصينية بطاطس',
    masterIngredients: [
      {
        id: 'vl48-1',
        name: 'زيت ذرة',
        nameEn: 'Corn oil',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl48-2',
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
        id: 'vl48-3',
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
        id: 'vl48-4',
        name: 'ملح وفلفل وكمون ونعناع جاف وزعتر وبهار',
        nameEn: 'Salt, pepper, cumin, dried mint, thyme and mixed spice',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl48-5',
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
        id: 'vl48-6',
        name: 'لبن أو ماء',
        nameEn: 'Milk or water',
        standardAmount: 'قليل',
        category: 'dairy_fat',
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
        text: 'نحضر إناء ونضع فيه كل مكونات الصلصة وترفع على درجة حرارة هادئة للتسخين فقط.',
        textEn: 'Combine all the sauce ingredients in a pot and warm over low heat, just until heated through.',
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
        title: 'عمل الصلصة',
        ingredients: ['1 ملعقة كبيرة زيت ذرة', '1 ملعقة كبيرة زيت زيتون', '1 ملعقة كبيرة خل', 'ملح', 'فلفل', 'كمون', 'نعناع جاف', 'زعتر', 'بهار', '2 فص ثوم مفري', 'قليل من اللبن أو الماء'],
        instructions: ['نحضر إناء ونضع فيه كل مكونات الصلصة وترفع على درجة حرارة هادئة للتسخين فقط.']
      }
    }
  },
  {
    id: 'veg-48',
    title: 'حلقات البطاطس',
    titleEn: 'Spiced Fried Potato Rings',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'قلي',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl49-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl49-2',
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
        id: 'vl49-3',
        name: 'ملح وفلفل وكمون وبهار وزعتر',
        nameEn: 'Salt, pepper, cumin, mixed spice and thyme',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl49-4',
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
        id: 'vl49-5',
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
        id: 'vl49-6',
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
        text: 'تقطع البطاطس حلقات متوسطة السمك وتسلق نصف سلق.',
        textEn: 'Cut the potatoes into medium-thick rings and parboil halfway.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تعمل الخلطة بالتوابل والثوم المفري واللبن وتقلب جيدا.',
        textEn: 'Mix the spices, crushed garlic and milk into a batter, stirring well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تخلط البطاطس بهذه الخلطة ثم توضع في دقيق مملح.',
        textEn: 'Coat the potato rings in this mixture, then dredge in salted flour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
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
      totalUniqueSteps: 4,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'حلقات البطاطس',
        ingredients: ['½ كيلو  بطاطس', '2 فص ثوم مفري', 'ملح', 'فلفل', 'كمون', 'بهار', 'زعتر', 'زيت', 'قليل من اللبن', '2 م دقيق'],
        instructions: ['تقطع البطاطس حلقات متوسطة السمك وتسلق نصف سلق', 'تعمل الخلطة بالتوابل والثوم المفري واللبن وتقلب جيدا.', 'تخلط البطاطس بهذه الخلطة ثم توضع في دقيق مملح.', 'تحمر في الزيت.']
      }
    }
  },
  {
    id: 'veg-49',
    title: 'بطاطس شيبسي',
    titleEn: 'Homemade Freezer-Ready Potato Chips',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة',
    cookTime: '3 دقائق',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl50-1',
        name: 'بطاطس',
        nameEn: 'Potatoes',
        standardAmount: '1/2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl50-2',
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
        id: 'vl50-3',
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
        id: 'vl50-4',
        name: 'خل',
        nameEn: 'Vinegar',
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
        text: 'تقطع البطاطس شرائح أو حلقات رفيعة جدا وتوضع في ماء وملح وخل لفترة حتى تحتفظ بالنشا.',
        textEn: 'Cut the potatoes into very thin slices or rings and soak in salted, vinegared water for a while to preserve the starch.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تصفى جيدا من الماء ثم تحمر في طاسة القلي بها زيت متوسط التسخين لمدة 3 دقائق فقط.',
        textEn: 'Drain well, then fry in medium-hot oil for just 3 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تنشل البطاطس وتوضع على مناديل ورقية ثم توضع في كيس الثلاجة داخل الفريزر للتجمد.',
        textEn: 'Drain on paper towels, then pack into a freezer bag and freeze.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 4,
        text: 'عند الاستعمال تحمر في زيت ساخن وهي مجمدة.',
        textEn: 'When ready to serve, fry directly from frozen in hot oil until golden.',
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
        title: 'بطاطس شيبسي',
        ingredients: ['½ كيلو بطاطس', 'زيت', 'ملح', 'خل'],
        instructions: ['تقطع البطاطس شرائح أو حلقات رفيعة جدا وتوضع في ماء وملح وخل لفترة حتى تحتفظ بالنشا.', 'تصفى جيدا من الماء ثم تحمر في طاسة القلي بها زيت متوسط التسخين لمدة 3 دقائق فقط.', 'تنشل البطاطس وتوضع على مناديل ورقية ثم توضع في كيس الثلاجة داخل الفريزر للتجمد.', 'عند الاستعمال تحمر في زيت ساخن وهي مجمدة.']
      }
    }
  },
  {
    id: 'veg-50',
    title: 'حلقات البصل',
    titleEn: 'Crispy Spiced Onion Rings',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة',
    cookTime: '10 دقائق',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl51-1',
        name: 'بصل كبير',
        nameEn: 'Large onions',
        standardAmount: '2 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl51-2',
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
        id: 'vl51-3',
        name: 'كورن فلاور',
        nameEn: 'Cornflour',
        standardAmount: '1 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl51-4',
        name: 'ملح وفلفل وبهار وزعتر وكاري وزنجبيل',
        nameEn: 'Salt, pepper, mixed spice, thyme, curry powder and ginger',
        standardAmount: 'حسب الرغبة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl51-5',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '1-2 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1-2 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl51-6',
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
        text: 'يقطع البصل حلقات رفيعة ويتبل بالتوابل كلها جيدا.',
        textEn: 'Slice the onions into thin rings and season well with all the spices.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع البصل في الدقيق ثم في الكورن فلاور ثم يغمس في البيض.',
        textEn: 'Dredge the onion rings in flour, then cornflour, then dip in egg.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ثم يوضع ثانية في الدقيق ثم في الكورن فلاور ثم يغمس في البيض.',
        textEn: 'Repeat: dredge again in flour, then cornflour, then egg, for a thicker coating.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يترك قليلا في الثلاجة.',
        textEn: 'Refrigerate briefly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يحمر في الزيت ويرفع على مناديل ورقية.',
        textEn: 'Fry in oil and drain on paper towels.',
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
        title: 'حلقات البصل',
        ingredients: ['بصلتين كبيرتين', '1 ملعقة كبيرة دقيق', '1 ملعقة كبيرة كورن فلاور', 'زيت', 'ملح', 'فلفل', 'بهار', 'زعتر', 'كاري', 'زنجبيل', '1 : 2 بيضة'],
        instructions: ['يقطع البصل حلقات رفيعة ويتبل بالتوابل كلها جيدا.', 'يوضع البصل في الدقيق ثم في الكورن فلاور ثم يغمس في البيض.', 'ثم يوضع ثانية في الدقيق ثم في الكورن فلاور ثم يغمس في البيض.', 'يترك قليلا في الثلاجة.', 'يحمر في الزيت ويرفع على مناديل ورقية.']
      }
    }
  },
  {
    id: 'veg-51',
    title: 'هامبورجر الخضروات',
    titleEn: 'Vegetable Burger Patties',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl52-1',
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
        id: 'vl52-2',
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
        id: 'vl52-3',
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
        id: 'vl52-4',
        name: 'جزر مبشور',
        nameEn: 'Grated carrot',
        standardAmount: '1/2 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl52-5',
        name: 'بقدونس مفري',
        nameEn: 'Chopped parsley',
        standardAmount: '3 ملعقة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '3 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl52-6',
        name: 'كسبرة خضراء مفرومة',
        nameEn: 'Chopped fresh coriander',
        standardAmount: '1 ملعقة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl52-7',
        name: 'شبت مفري',
        nameEn: 'Chopped dill',
        standardAmount: '2 ملعقة صغيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl52-8',
        name: 'كاري',
        nameEn: 'Curry powder',
        standardAmount: '2 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl52-9',
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
        id: 'vl52-10',
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
        text: 'تقطع البطاطس مكعبات وتحمر في الزيت حتى يصير لونها ذهبيا ثم ترفع على مناديل ورقية.',
        textEn: 'Dice the potatoes and fry in oil until golden, then drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يحمر البصل المفري في نفس الزيت حتى يصفر لونه.',
        textEn: 'Brown the chopped onion in the same oil until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسكب البطاطس على البصل المحمر ثم يخلط معهما الفلفل الأخضر المفروم مع الجزر المبشور والبقدونس المفري والكسبرة المفرومة والشبت المفري والكاري، ويتبل الخليط بالملح والفلفل والقرفة.',
        textEn: 'Combine the potatoes with the browned onion, then mix in the chopped green pepper, grated carrot, chopped parsley, coriander and dill, and the curry powder; season with salt, pepper and cinnamon.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد خلطه جيدا يشكل على هيئة أقراص مستديرة.',
        textEn: 'Once well mixed, shape into round patties.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تحمر في الزيت وترفع على مناديل ورقية.',
        textEn: 'Fry in oil and drain on paper towels.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'هامبورجر الخضروات',
        ingredients: ['حبتين من البطاطس', '2 بصلة', 'ثمرة فلفلة خضراء', 'زيت', '½ كوب جزر مبشور', '3م بقدونس مفري', '1 ملعقة كبيرة كسبرة خضراء مفرومة', '2 ملعقة صغيرة  شبت مفري', '2 ملعقة صغيرة  كاري', 'ملح', 'فلفل', 'قرفة'],
        instructions: ['تقطع البطاطس مكعبات وتحمر في الزيت حتى يصير لونها ذهبيا ثم ترفع على مناديل ورقية.', 'يحمر البصل المفري في نفس الزيت حتى يصفر لونه.', 'يسكب البطاطس على البصل المحمر ثم يخلط معهما الفلفل الأخضر المفروم مع الجزر المبشور والبقدونس المفري والكسبرة المفرومة والشبت المفري والكاري ويتبل الخليط بالملح والفلفل والقرفة.', 'بعد خلطه جيدا يشكل على هيئة أقراص مستديرة.', 'تحمر في الزيت وترفع على مناديل ورقية.']
      }
    }
  },
  {
    id: 'leg-03',
    title: 'البصارة',
    titleEn: 'Bessara (Fava Bean Purée with Molokhia and Caraway)',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'بقوليات',
    cookingMethod: 'سلق',
    prepTime: '15 دقيقة',
    cookTime: '45 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'vl53-1',
        name: 'فول مدشوش',
        nameEn: 'Split fava beans',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl53-2',
        name: 'ملوخية جافة (إن وجدت)',
        nameEn: 'Dried molokhia, if available',
        standardAmount: '1 ملعقة شاي',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 ملعقة شاي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl53-3',
        name: 'بصل كبير',
        nameEn: 'Large onions',
        standardAmount: '2 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl53-4',
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
        id: 'vl53-5',
        name: 'نعناع جاف',
        nameEn: 'Dried mint',
        standardAmount: '1 ملعقة شاي',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة شاي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl53-6',
        name: 'كرفس ونعناع أخضر',
        nameEn: 'Celery and fresh mint',
        standardAmount: '1 قطعة من كل',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 قطعة من كل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl53-7',
        name: 'كراوية مدقوقة',
        nameEn: 'Crushed caraway',
        standardAmount: '1 ملعقة شاي',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة شاي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'بعد تنقية الفول المدشوش وغسله يوضع مقدار من الماء يكفي لتغطيته، ويرفع على النار حتى يغلي مدة 5 دقائق ثم يصفى من الماء.',
        textEn: 'After sorting and washing the split fava beans, cover with water, bring to a boil for 5 minutes, then drain.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع في الإناء مقدار آخر من الماء والبصل المقطع رفيعا والكرفس والنعناع والفول المدشوش.',
        textEn: 'Return the beans to the pot with fresh water, thinly sliced onion, celery, mint and the beans.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يطهى على درجة حرارة هادئة مع عدم تقليبه مع ملاحظة إضافة الماء كلما احتاج، ويترك حتى ينهري الفول تماما.',
        textEn: 'Cook over low heat without stirring, adding water as needed, until the beans completely fall apart.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد أن يبرد يضرب في الخلاط ثم يصفى بمصفاة ضيقة الثقوب.',
        textEn: 'Once cooled, blend smooth and pass through a fine sieve.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرفع الإناء مع إضافة الملح والنعناع ويترك يغلي مع التقليب المستمر على درجة حرارة هادئة، مع إضافة قليل من الماء إذا احتاج حتى يصير قوام البصارة مناسبا وليس خفيفا.',
        textEn: 'Return to the pot, add salt and mint, and simmer over low heat, stirring constantly and adding water as needed, until the bessara reaches a thick, not runny, consistency.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نصب التقلية على البصارة وتقلب ثم تغرف في الصحون وتجمل بباقي البصل المحمر.',
        textEn: 'Stir in the garlic tempering (taqliya), ladle into bowls, and garnish with the remaining fried onion.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'البصارة',
        ingredients: ['1 كوب فول مدشوش', '1 م شاي ملوخية جافة إن وجدت', '2 بصلة كبيرة', 'ملح وفلفل', '1 م شاي نعناع جاف', 'قطعة كرفس وقطعة نعناع أخضر', '1 م شاي كراوية مدقوقة'],
        instructions: ['بعد تنقية الفول المدشوش وغسله يوضع مقدار من الماء يكفي لتغطيته ويرفع على البوتاجاز حتى يغلي مدة 5دقائق ثم يصفى من الماء.', 'يوضع في الإناء مقدار أخر من الماء والبصل المقطع رفيعا والكرفس والنعناع والفول المدشوش.', 'يطهى على درجة حرارة هادئة مع عدم تقليبه مع ملاحظة إضافة الماء كلما احتاج ويترك حتى ينهري الفول تماما.', 'بعد أن يبرد يضرب في الخلاط ثم يصفى بمصفاة ضيقة الثقوب.', 'يرفع الإناء مع إضافة الملح والنعناع ويترك يغلي مع التقليب المستمر على درجة حرارة هادئة مع إضافة قليل من الماء إذا احتاج حتى يصير قوام البصارة مناسبا وليس خفيفا.', 'نصب التقلية على البصارة وتقلب ثم تغرف في الصحون وتجمل بباقي البصل المحمر.']
      }
    }
  },
  {
    id: 'leg-04',
    title: 'العدس',
    titleEn: 'Smooth Yellow Lentil Purée with Rice and Fried Onion',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'بقوليات',
    cookingMethod: 'سلق',
    prepTime: '10 دقائق',
    cookTime: '40 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl54-1',
        name: 'عدس أصفر',
        nameEn: 'Yellow lentils',
        standardAmount: '1.5 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl54-2',
        name: 'ماء أو مرق',
        nameEn: 'Water or broth',
        standardAmount: 'حسب الحاجة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl54-3',
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
        id: 'vl54-4',
        name: 'ثوم',
        nameEn: 'Garlic',
        standardAmount: '4 فصوص',
        category: 'vegetable',
        sourceVariations: {
          doc1: '4 فصوص'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl54-5',
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
        id: 'vl54-6',
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
        id: 'vl54-7',
        name: 'بصلة مفرية للتحمير',
        nameEn: 'Chopped onion, for frying on top',
        standardAmount: '1 بصلة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 بصلة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl54-8',
        name: 'أرز منقوع',
        nameEn: 'Soaked rice',
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
        text: 'ينقى العدس ويغسل عدة مرات.',
        textEn: 'Pick over the lentils and wash several times.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقطع البصل والثوم ويوضع في الإناء مع العدس ويغطى بالماء أو المرق، ثم يرفع على درجة حرارة هادئة حتى النضج مع ملاحظة إضافة السائل كلما احتاج.',
        textEn: 'Chop the onion and garlic and add to the pot with the lentils, cover with water or broth, and simmer over low heat until cooked, topping up liquid as needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'بعد أن يبرد يضرب في الخلاط ثم في المصفاة ويكون قوامه غليظا نوعا ما.',
        textEn: 'Once cooled, blend and pass through a strainer to a fairly thick consistency.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يوضع في الإناء ويتبل بالملح والكمون مع إضافة ملعقة من الأرز المنقوع، ويترك على درجة حرارة هادئة حتى ينضج الأرز ويرفع.',
        textEn: 'Return to the pot, season with salt and cumin, add a tablespoon of soaked rice, and simmer over low heat until the rice is cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يقدح السمن أو الزيت وتحمر فيه البصلة المفرية، ثم تضاف إلى العدس وتقلب جيدا، ثم تغرف في الأطباق.',
        textEn: 'Heat ghee or oil and fry the chopped onion until browned, stir into the lentils, and ladle into bowls.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
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
        title: 'العدس',
        ingredients: ['½1 كوب عدس أصفر', 'ماء أو مرق', 'بصلة متوسطة', '4 فصوص ثوم', 'ملح وكمون', 'سمن أو زيت', 'بصلة مفرية'],
        instructions: ['ينقى العدس ويغسل عدة مرات.', 'يقطع البصل والثوم ويوضع في الإناء مع العدس ويغطى بالماء أو المرق ثم يرفع على درجة حرارة هادئة حتى النضج مع ملاحظة إضافة السائل كلما احتاج.', 'بعد أن يبرد يضرب في الخلاط ثم في المصفاة ويكون قوامه غليظا نوعا ما.', 'يوضع في الإناء ويتبل بالملح والكمون مع إضافة ملعقة من الأرز المنقوع ويترك على درجة حرارة هادئة حتى ينضج الأرز ويرفع.', 'يقدح السمن أو الزيت وتحمر فيه البصلة المفرية ثم تضاف إلى العدس وتقلب جيدا . ثم تغرف في الأطباق.']
      }
    }
  },
  {
    id: 'leg-05',
    title: 'الفول النابت',
    titleEn: 'Sprouted Fava Beans with Lemon and Cumin',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'بقوليات',
    cookingMethod: 'سلق',
    prepTime: '7 أيام (إنبات)',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'vl55-1',
        name: 'فول',
        nameEn: 'Fava beans',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl55-2',
        name: 'بصل كبير',
        nameEn: 'Large onions',
        standardAmount: '2 بصلة كبيرة',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 بصلة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'vl55-3',
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
        id: 'vl55-4',
        name: 'ملح وفلفل وكمون وحبهان مدقوق',
        nameEn: 'Salt, pepper, cumin and crushed cardamom',
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
        text: 'ينقع الفول بماء بارد مع تغيير الماء مرتين يوميا لمدة أسبوع.',
        textEn: 'Soak the fava beans in cold water, changing the water twice a day, for a week until sprouted.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يسلق الفول بعد أن ينبت في ماء مغلي مع البصل المقطع حلقات والمدعوك بالملح والفلفل والكمون والحبهان المدقوق، ثم يغطى ويترك على حرارة هادئة.',
        textEn: 'Once sprouted, boil the beans in water with onion rings mashed with salt, pepper, cumin and crushed cardamom, covered, over low heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'بعد النضج يعصر عليه ليمون حسب الرغبة.',
        textEn: 'Once cooked, squeeze lemon juice over it to taste.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'طريقة التقديم: يمكن أن يؤكل بقشره داخل الشوربة الخاصة به وعليه كمون وزيت وليمون، أو يمكن أن يقشر الفول ثم يوضع في الشوربة ويغلي مع إضافة الزيت والكمون والليمون.',
        textEn: 'To serve: it can be eaten unpeeled in its own broth topped with cumin, oil and lemon, or the beans can be peeled and simmered in the broth with oil, cumin and lemon.',
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
        title: 'الفول النابت',
        ingredients: ['1 كوب فول', '2 بصلة كبيرة', 'ليمون', 'ملح', 'فلفل', 'كمون', 'حبهان مدقوق'],
        instructions: ['ينقع الفول بماء بارد مع تغيير الماء مرتين يوميا لمدة أسبوع.', 'يسلق الفول بعد أن ينبت في ماء مغلي مع البصل الحلقات المدعوك بالملح والفلفل والكمون والحبهان المدقوق ثم يغطى ويترك على حرارة هادئة.', 'بعد النضج يعصر عليه ليمون حسب الرغبة.', 'يمكن أن يؤكل بقشره داخل الشوربة الخاصة به وعليه كمون وزيت وليمون.', 'يمكن ايضا ان يقشر الفول ثم يوضع في الشوربة ويغلي مع إضافة الزيت والكمون والليمون.']
      }
    }
  },
  {
    id: 'veg-52',
    title: 'نصائح حفظ وتجميد الخضروات',
    titleEn: 'Vegetable Storage & Freezing Tips',
    chapter: 'الباب الثاني: الحساء – السلطات – الخضروات – البقول',
    chapterNumber: 2,
    category: 'خضروات',
    cookingMethod: 'حفظ وتجميد',
    prepTime: '15 دقيقة',
    cookTime: '5 دقائق',
    servings: 'حسب الكمية',
    masterIngredients: [
      {
        id: 'vl52-1',
        name: 'خضار طازج للتجميد (أي نوع)',
        standardAmount: 'حسب الكمية المطلوب حفظها',
        category: 'vegetable',
        sourceVariations: {
          doc1: 'الخضار',
          doc2: 'الخضار',
          doc3: 'الخضار'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl52-2',
        name: 'ماء مغلي مملح مضاف إليه بيكربونات (كربونات)',
        standardAmount: 'كمية كافية لتغطية الخضار',
        category: 'liquid',
        sourceVariations: {
          doc1: 'الماء المغلي والملح والكربونات',
          doc2: 'الماء المغلي والملح والكربونات',
          doc3: 'ماء مع ملح وكربونات'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl52-3',
        name: 'ماء مثلج (لصدمة التبريد)',
        standardAmount: 'كمية كافية للتغطية',
        category: 'liquid',
        sourceVariations: {
          doc1: 'الماء المثلج',
          doc2: 'الماء المثلج',
          doc3: 'ماء مثلج'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl52-4',
        name: 'أكياس تفريز محكمة الغلق',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'كيس في الثلاجة',
          doc2: 'كيس في الثلاجة',
          doc3: 'أكياس داخل الفريزر'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl52-5',
        name: 'مغرفة مرق أو شوربة ساخنة (لتجميد الملوخية)',
        standardAmount: '1 مغرفة لكل كمية ملوخية مفرومة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'مغرفة واحدة فقط من الشوربة',
          doc2: 'مغرفة واحدة فقط من الشوربة',
          doc3: 'مغرفة واحدة فقط من الشوربة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl52-6',
        name: 'زيت زيتون وعصير ليمون كثير (لحفظ الخرشوف)',
        standardAmount: 'حسب الكمية',
        category: 'liquid',
        sourceVariations: {
          doc1: 'زيت زيتون وعصير ليمون كثير',
          doc2: 'زيت زيتون وعصير ليمون كثير',
          doc3: 'زيت زيتون وعصير ليمون كثير'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'vl52-7',
        name: 'خل أبيض (لتبريد شرائح البطاطس)',
        standardAmount: 'قليل، يضاف لماء التبريد',
        category: 'liquid',
        sourceVariations: {
          doc1: 'ماء بارد مضاف إليه خل',
          doc2: 'ماء بارد مضاف إليه خل',
          doc3: 'ماء بارد مضاف إليه خل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'الحفاظ على اللون الأخضر: يُغلى الماء مع الملح والكربونات، ثم يوضع الخضار فيه لمدة دقيقة واحدة فقط، ثم يُنزع فوراً ويوضع في ماء مثلج لوقف الطهو والحفاظ على لونه الأخضر الزاهي.',
        textEn: 'Preserving the green color: boil water with salt and baking soda, drop the vegetables in for just one minute, then immediately transfer them into ice water to stop the cooking and lock in their bright green color.',
        phase: 'prep',
        isAlternative: true,
        alternativeLabel: 'حفظ لون الخضار الأخضر',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 2,
        text: 'حفظ الخضار مجمداً: بعد تنظيف الخضار وغسله يوضع في الماء المغلي المملح والمضاف إليه الكربونات كما سبق، ثم يصفى فوراً في مصفاة ويُسكب عليه الماء المثلج مباشرة. يوضع بعدها في كيس، ويُضغط عليه باليد جيداً لتفريغ الهواء، ثم يُغلق ويُكتب عليه التاريخ ويحفظ في الفريزر لمدة تصل إلى 3 أشهر. عند الاستعمال يُسكب مجمداً مباشرة في الشوربة الساخنة.',
        textEn: 'Freezing vegetables: after washing and cleaning the vegetables, blanch them in the salted, baking-soda water as above, drain immediately in a colander and pour ice water over them right away. Place in a bag, press out the air firmly by hand, seal, label with the date, and keep frozen for up to 3 months. When needed, pour it straight into hot soup while still frozen.',
        phase: 'prep',
        isAlternative: true,
        alternativeLabel: 'حفظ الخضار مجمداً',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 3,
        text: 'حفظ الملوخية مجمدة: بعد غسل الملوخية وتقطيعها وخرطها، تُسكب عليها مغرفة واحدة فقط من الشوربة أو المرق، ثم تُحفظ داخل كيس محكم الغلق في الفريزر حتى الاستعمال.',
        textEn: 'Freezing molokhia: after washing, cutting and mincing the molokhia leaves, pour just one ladle of broth or soup over it, then keep it in a sealed bag in the freezer until needed.',
        phase: 'prep',
        isAlternative: true,
        alternativeLabel: 'حفظ الملوخية مجمدة',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 4,
        text: 'حفظ الخرشوف في الثلاجة: يوضع الخرشوف في ماء مغلي مضاف إليه زيت زيتون وعصير ليمون كثير، ثم يُرفع ويوضع في إناء زجاجي محكم ويُحفظ في الثلاجة.',
        textEn: 'Storing artichokes in the fridge: place the artichokes in boiling water with olive oil and plenty of lemon juice added, then lift them out into a sealed glass container and keep refrigerated.',
        phase: 'prep',
        isAlternative: true,
        alternativeLabel: 'حفظ الخرشوف في الثلاجة',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 5,
        text: 'حفظ البطاطس مجمدة: تُقطع البطاطس شرائح متوسطة السُمك وتوضع في ماء مغلي فوق البوتاجاز لمدة 3-4 دقائق، ثم تُنشل وتوضع في ماء بارد مضاف إليه خل. بعد أن تبرد توضع في مصفاة حتى تجف تماماً ثم تُغلف في أكياس داخل الفريزر. عند القلي يجب إخراجها من الفريزر وقليها وهي مجمدة مباشرة.',
        textEn: 'Freezing potato slices: cut the potatoes into medium-thick slices and boil them for 3-4 minutes, then lift them out into cold water with a little vinegar added. Once cooled, drain in a colander until completely dry, then pack into bags in the freezer. When frying, take them out and fry them straight from frozen.',
        phase: 'prep',
        isAlternative: true,
        alternativeLabel: 'حفظ البطاطس مجمدة',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 5,
      mergedIngredientsCount: 7,
      totalUniqueSteps: 5,
      totalMasterIngredients: 7,
      overlapPercentage: 95,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'مجموعة نصائح متطابقة تقريباً في الوثائق الثلاث حول حفظ وتجميد الخضروات والملوخية والخرشوف والبطاطس، وردت كفقرات قصيرة مستقلة في بداية باب الخضروات ولم تكن مصنّفة كوصفة كاملة، فتم جمعها هنا في وصفة واحدة بخطوات بديلة لكل تقنية حفظ.'
    },
    rawDocVersions: {
      doc1: {
        title: 'حفظ الخضار مجمداً / حفظ لون الخضار الأخضر / حفظ الملوخية مجمدة / حفظ الخرشوف في الثلاجة / حفظ البطاطس مجمداً',
        ingredients: ['الخضار', 'ماء مغلي وملح وكربونات', 'ماء مثلج', 'كيس تفريز', 'مغرفة شوربة (للملوخية)', 'زيت زيتون وعصير ليمون كثير (للخرشوف)', 'ماء بارد وخل (للبطاطس)'],
        instructions: [
          'ينظف الخضار ويغسل ثم يوضع في الماء المغلي والملح والكربونات لمدة دقيقة.',
          'يصفى من الماء الساخن في المصفاة وفوراً نسكب عليه الماء المثلج.',
          'يوضع في كيس في الثلاجة ثم يضغط عليه باليد جيداً لتفريغ الهواء ويغلق ويكتب عليه التاريخ ويظل لمدة 3 شهور.',
          'عند إخراجه مجمداً يسكب في الشوربة الساخنة فوراً.',
          'يغلي الماء مع ملح وكربونات ثم يوضع الخضار لمدة دقيقة، ينزع من الماء المغلي ويوضع فوراً في ماء مثلج.',
          'بعد غسل الملوخية وتقطيعها وخرطها نسكب عليها مغرفة واحدة فقط من الشوربة، ثم تحفظ داخل كيس الثلاجة داخل الفريزر.',
          'نضع الخرشوف في ماء مغلي مضاف إليه زيت زيتون وعصير ليمون كثير ثم يوضع في إناء زجاجي ويحفظ في الثلاجة.',
          'يقطع البطاطس شرائح متوسطة السمك ويوضع في ماء مغلي لمدة 3-4 دقائق فوق البوتاجاز، ينشل من الماء الساخن ويوضع في ماء بارد مضاف إليه خل.',
          'بعد أن يبرد يوضع في مصفاة حتى يجف ويغلف في أكياس داخل الفريزر. عند قلي البطاطس يجب إخراجه مجمداً.'
        ]
      },
      doc3: {
        title: 'تعليمات خاصة بحفظ الخضروات: 1) للحفاظ على لون الخضار الأخضر، 2) حفظ الخضار مجمداً، 3) حفظ الملوخية مجمدة، 4) حفظ الخرشوف في الثلاجة، 5) حفظ البطاطس مجمداً',
        ingredients: ['الخضار', 'ماء مع ملح وكربونات', 'ماء مثلج', 'أكياس فريزر', 'مغرفة شوربة (للملوخية)', 'زيت زيتون وعصير ليمون كثير (للخرشوف)', 'ماء بارد وخل (للبطاطس)'],
        instructions: [
          'غلي الماء مع ملح وكربونات ثم وضع الخضار لمدة دقيقة، نزع الخضار من الماء المغلي ووضعه فوراً في ماء مثلج.',
          'ينظف الخضار ويغسل ثم يوضع في الماء المغلي والملح والكربونات كالسابقة، يصفى من الماء الساخن في المصفاة وفوراً نسكب عليه الماء المثلج.',
          'يوضع في كيس في الثلاجة ثم يضغط عليه باليد جيداً لتفريغ الهواء ويغلق ويكتب عليه التاريخ ويظل لمدة 3 شهور، عند إخراجه مجمداً يسكب في الشوربة الساخنة فوراً.',
          'بعد غسلها وتقطيعها وخرطها نسكب عليها مغرفة واحدة فقط من الشوربة، ثم تحفظ داخل كيس الثلاجة داخل الفريزر.',
          'نضع الخرشوف في ماء مغلي مضاف إليه زيت زيتون وعصير ليمون كثير ثم يوضع في إناء زجاجي ويحفظ في الثلاجة.',
          'يقطع البطاطس شرائح متوسطة السمك ويوضع في ماء مغلي لمدة 3-4 دقائق فوق البوتاجاز، ينشل من الماء الساخن ويوضع في ماء بارد مضاف إليه خل.',
          'بعد أن يبرد يوضع في مصفاة حتى يجف ويغلف في أكياس داخل الفريزر، عند قلي البطاطس يجب إخراجه مجمداً.'
        ]
      }
    }
  },
];
