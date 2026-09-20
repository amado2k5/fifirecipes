import { Recipe } from '../../types';

export const dessertsAndBeveragesRecipes: Recipe[] = [
  {
    id: 'des-01',
    title: 'البسبوسة المصرية المرملة وعمل الشربات',
    titleEn: 'Egyptian Semolina Basbousa with Aromatic Syrup',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة + ساعة راحة',
    cookTime: '30 دقيقة',
    servings: '8-10 أفراد',
    masterIngredients: [
      {
        id: 'db1-1',
        name: 'دقيق سميد خشن / وسط (دقيق بسبوسة)',
        standardAmount: '2 كوب دقيق سميد',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 كوب دقيق سميد',
          doc2: '2 كوب دقيق سميد',
          doc3: '2 كوب دقيق سميد'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db1-2',
        name: 'سمن بلدي دافئ',
        standardAmount: '3/4 كوب سمن بلدي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3/4 كوب سمن',
          doc2: '3/4 كوب سمن',
          doc3: '3/4 كوب سمن'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db1-3',
        name: 'سكر أبيض ناعم',
        standardAmount: '1 كوب سكر (للبسبوسة) + 1.5 كوب (للشربات)',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب سكر للبسبوسة + 1 1/2 كوب سكر للشربات',
          doc2: '1 كوب سكر + 1.5 كوب سكر',
          doc3: '1 كوب سكر + 1 1/2 كوب سكر'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db1-4',
        name: 'زبادي وقشطة بلدي',
        standardAmount: '1 كوب زبادي كبير + 2 ملعقة قشطة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب زبادي كبير – قشدة',
          doc2: '1 كوب زبادي – قشدة',
          doc3: '1 كوب زبادي ك – قشدة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db1-5',
        name: 'جوز هند ناعم',
        standardAmount: '1 كوب جوز هند',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب جوز هند',
          doc2: '1 كوب جوز هند',
          doc3: '1 كوب جوز هند'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db1-6',
        name: 'بيكنج باودر وفانيليا',
        standardAmount: '1 ملعقة كبيرة بيكنج باودر + رشة فانيليا',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملعقة كبيرة بيكينج باودر – رشة فانيليا',
          doc2: 'ملعقة كبيرة بيكينج باودر',
          doc3: 'م ك ب ب – رشة فانيليا'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db1-7',
        name: 'ماء وعصير ليمون للشربات',
        standardAmount: '3/4 كوب ماء + نصف ملعقة صغيرة عصير ليمون + ملعقة سمن',
        category: 'liquid',
        sourceVariations: {
          doc1: '3/4 كوب ماء – ملعقة صغيرة عصير ليمون – ملعقة سمن',
          doc2: '3/4 كوب ماء – ليمون',
          doc3: '3/4 كوب ماء – م ص عصير ليمون'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'بث السمن والسكر (سر الترمل): يدعك السمن بملعقة خشب أو باليد ثم يضاف السكر ويدعك جيداً حتى يصير الخليط هشاً وكريمياً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'الخلط الخفيف: يضاف الزبادي ويقلب ثم دقيق السميد والبيكنج باودر والقشطة ويقلبوا معاً بخفة شديدة (دون عجن مفرط) مع إضافة رشة الفانيليا وجوز الهند.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'الراحة والتحديد: يوضع الخليط في صينية مدهونة بالسمن وتترك مدة ساعة أو أكثر لترتاح حبات السميد وتتشرب الدهون، ثم تحدد العجينة بالسكين على شكل مربعات بدون تقطيع كامل.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 4,
        text: 'الخبز: تدخل فرن متوسط الحرارة حتى يحمر الوجه والأطراف وتكتسب لوناً ذهبياً متساوياً.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'عمل الشربات المعقود الخفيف: يذاب 1.5 كوب سكر في 3/4 كوب ماء مغلي على درجة حرارة هادئة ثم يضاف عصير الليمون، وتقوى درجة الحرارة ويترك السائل حتى يعقد قليلاً ويصير لزجاً نوعاً ما، ونضع في الشربات ملعقة سمن وفانيليا ثم يرفع عن البوتاجاز.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'التشريب الساخن: تسقى البسبوسة الساخنة فور خروجها بالشربات المعتدل أو البارد وتغطى فوراً بغطاء الصينية حتى تظل طرية ومرملة.',
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
      overlapPercentage: 95,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'طريقة البسبوسة المصرية التقليدية مطابقة بين الوثائق الثلاث في ترك العجينة ترتاح ساعة وفي خفق السمن بالسكر للحصول على القوام المرمل والشربات المضاف له ملعقة سمن بلدي.'
    },
    rawDocVersions: {
      doc1: {
        title: 'البسبوسة / عمل الشربات',
        pageNumber: 224,
        ingredients: ['2 كوب دقيق سميد', 'ملعقة كبيرة بيكينج باودر', '3/4 كوب سمن', '1 كوب زبادي كبير', 'رشة فانيليا', '1 كوب جوز هند', '1 كوب سكر', 'قشدة', 'شربات: 1.5 كوب سكر، 3/4 كوب ماء، ليمون، فانيليا وسمن'],
        instructions: ['يدعك السمن باليد ثم يضاف السكر حتى يصير هشا', 'يضاف الزبادي والسميد والبيكنج باودر والقشدة بخفة', 'تترك في صينية مدهونة ساعة أو أكثر', 'تحدد بالسكين وتدخل فرن متوسط', 'تسقى بالشربات فور خروجها وتغطى']
      },
      doc3: {
        title: 'البسبوسة / عمل الشربات',
        pageNumber: 195,
        ingredients: ['2 كوب دقيق سميد', 'م ك ب ب', '3/4 كوب سمن', '1 كوب زبادي ك', 'رشة فانيليا', '1 كوب جوز هند', '1 كوب سكر', 'قشدة'],
        instructions: ['يدعك السمن بملعقة خشب أو باليد ثم يضاف السكر', 'يضاف الزبادي والسميد والباودر والقشطة بخفة', 'يوضع الخليط في صينية مدهونة وتترك ساعة', 'تدخل فرن متوسط الحرارة وتسقى بالشربات']
      }
    }
  },
  {
    id: 'des-02',
    title: 'لقمة القاضي (الزلابية المقرمشة) بعرق الحلاوة',
    titleEn: 'Luqmat Al-Qadi (Crispy Egyptian Dumplings with Soapwort/Rose Water)',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تحمير',
    prepTime: 'ساعتان تخمير',
    cookTime: '20 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db2-1',
        name: 'دقيق أبيض فاخر',
        standardAmount: '1/2 كيلو دقيق (حوالي 3.5 كوب)',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو دقيق',
          doc2: '1/2 كيلو دقيق',
          doc3: 'نصف ك دقيق'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db2-2',
        name: 'خميرة بيرة طبيعية',
        standardAmount: 'قطعة خميرة بيرة بحجم عين الجمل',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'قطعة خميرة بيرة في حجم عين الجمل',
          doc2: 'قطعة خميرة بيرة',
          doc3: 'قطعة خميرة بيرة بحجم عين الجمل'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db2-3',
        name: 'عرق حلاوة مدقوق (سر القرمشة الشرقية التراثية)',
        standardAmount: '1 ملعقة كبيرة عرق حلاوة مدقوق مذاب في كوب ماء بارد',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ملعقة كبيرة من عرق الحلاوة المدقوقة',
          doc2: 'ملعقة كبيرة عرق الحلاوة',
          doc3: 'ملعقة ك من عرق الحلاوة المدقوقة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db2-4',
        name: 'سكر أبيض للخميرة',
        standardAmount: '1 ملعقة صغيرة سكر',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة سكر',
          doc2: '1 ملعقة صغيرة سكر',
          doc3: '1 م ص سكر'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db2-5',
        name: 'ماء دافئ للعجين',
        standardAmount: 'ماء دافئ حسب تماسك العجين',
        category: 'liquid',
        sourceVariations: {
          doc1: 'ماء دافئ للعجين',
          doc2: 'ماء دافئ للعجين',
          doc3: 'ماء دافئ للعجين'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db2-6',
        name: 'زيت غزير للقلي على مرحلتين',
        standardAmount: 'زيت غزير مقدوح للتحمير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'زيت للتحمير',
          doc2: 'زيت للتحمير',
          doc3: 'زيت للتحمير'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db2-7',
        name: 'شربات بارد كثيف وجوز هند',
        standardAmount: 'شربات معقود بارد + جوز هند للتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'شربات – جوز الهند',
          doc2: 'شربات – جوز هند',
          doc3: 'شربات – جوز الهند'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'إذابة عرق الحلاوة وتنشيط الخميرة: يذاب عرق الحلاوة في 1 كوب ماء بارد ثم يصفى. تدعك الخميرة مع قليل من السكر والماء الدافئ حتى تسيل.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'عجن الدقيق: نضع الدقيق في وعاء ونعمل حفرة في وسطه ويصب بها خليط الخميرة. يعجن الدقيق مع الخميرة حتى يصبح ليناً.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'خفق الرغوة وإدخال الهواء: يدفأ ماء عرق الحلاوة المصفى ويحرك باليد حتى تتكون رغوة غنية، ثم تجمع هذه الرغوة وتضاف للعجينة وتخفق جيداً لإدخال أكبر كمية من الهواء فيها لضمان انتفاخها.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'tip'
      },
      {
        stepNumber: 4,
        text: 'التخمير: تغطى العجينة وتترك في مكان دافئ حتى تختمر وتتضاعف.',
        phase: 'prep',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'التقطيع والقلي الأول: تؤخذ قطعة عجين صغيرة باليد اليسرى وتقطع بملعقة شاي مدهونة بالزيت أو مبللة بالماء البارد، وتحمر في الزيت الغزير المقدوح تحميراً خفيفاً جداً (نصف قلية) ثم تنشل وتوضع على مصفاة حتى تهدأ حرارتها.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'القلي الثاني والتعسيل (سر القرمشة الدائمة): يعاد تحميرها مرة ثانية في الزيت حتى يصبح لونها وردياً ذهبياً مقرمشاً، ثم تنشل وتصفى من الزيت، وتوضع فوراً في الشربات البارد ثم ترفع منه بسرعة وتزين بجوز الهند أو السكر البودرة.',
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
      overlapPercentage: 96,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'احتفظت الوثائق بالتقنية التراثية النادرة لاستخدام عرق الحلاوة وخفقه لعمل رغوة هوائية مع القلي على مرحلتين للقرمشة المستمرة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'لقمة القاضي',
        pageNumber: 233,
        ingredients: ['1/2 كيلو دقيق', 'قطعة خميرة بيرة بحجم عين الجمل', 'جوز الهند', '1 ملعقة صغيرة سكر', 'ملعقة كبيرة عرق الحلاوة المدقوقة', 'ماء دافئ للعجين', 'زيت للتحمير', 'شربات'],
        instructions: ['يذاب عرق الحلاوة في كوب ماء بارد ويصفى', 'تدعك الخميرة مع السكر والماء الدافئ', 'يعجن الدقيق مع الخميرة حتى يلين', 'يحرك ماء عرق الحلاوة حتى تتكون رغوة وتخفق مع العجينة', 'تقطع بملعقة شاي وتحمر تحميرا خفيفا ثم ترفع', 'يعاد تحميرها حتى تصبح وردية وتوضع في الشربات البارد']
      },
      doc3: {
        title: '9- لقمة القاضي',
        pageNumber: 201,
        ingredients: ['1/2 ك دقيق', 'قطعة خميرة بيرة بحجم عين الجمل', 'جوز الهند', '1 م ص سكر', 'ملعقة ك عرق الحلاوة المدقوقة', 'ماء دافئ', 'زيت', 'شربات'],
        instructions: ['يذاب عرق الحلاوة في 1 كوب ماء بارد', 'تدعك الخميرة حتى تسيل', 'توضع الخميرة في حفرة وسط الدقيق ويعجن', 'يحرك ماء عرق الحلاوة باليد لعمل رغوة', 'تحمر في الزيت الغزير خفيفا ثم يعاد تحميرها']
      }
    }
  },
  {
    id: 'bev-01',
    title: 'مشروب الخروب الطبيعي المركز',
    titleEn: 'Traditional Egyptian Carob Drink (Kharroub)',
    chapter: 'الباب الرابع: المشروبات',
    chapterNumber: 4,
    category: 'مشروبات وآيس كريم',
    cookingMethod: 'سلطات ومشروبات',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '6-8 أكواب',
    masterIngredients: [
      {
        id: 'db3-1',
        name: 'خروب مجروش قطع صغيرة',
        standardAmount: '1 كوب خروب قطع صغيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب خروب قطع صغيرة',
          doc2: '1 كوب خروب قطع صغيرة',
          doc3: '1 كوب خروب قطع صغيرة'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db3-2',
        name: 'سكر أبيض للكرملة',
        standardAmount: '3/4 كوب سكر',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3/4 كوب سكر',
          doc2: '3/4 كوب سكر',
          doc3: '3/4 كوب سكر'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      },
      {
        id: 'db3-3',
        name: 'ماء نقي',
        standardAmount: '7 إلى 8 أكواب ماء',
        category: 'liquid',
        sourceVariations: {
          doc1: '7 : 8 أكواب ماء',
          doc2: '7 : 8 أكواب ماء',
          doc3: 'من 7 – 8 أكواب ماء'
        },
        isMerged: true,
        originalOccurrencesCount: 3
      }
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'كرملة السكر مع الخروب: يوضع الخروب المجروش مع السكر في قدر ويرفع على درجة حرارة هادئة مع تقليبهما باستمرار حتى يذوب السكر ويصبح لونه ذهبياً مائلاً للبني (يتكرمل) بدون أن يحترق لاكتساب النكهة المميزة.',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'إضافة الماء والغليان: تضاف كمية المياه ويغطى الإناء على نار هادئة حتى يذوب السكر والخروب مع الماء تماماً، ثم يترك لمدة دقائق معدودة يغلي (حوالي 4 دقائق).',
        phase: 'cook',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'التبريد والتصفية: يرفع ويترك مغطى حتى يبرد تماماً ويتشرب الطعم، ثم يصفى بمصفاة ضيقة ويدخل الثلاجة ويقدم بارداً ومثلجاً.',
        phase: 'finish',
        sourceDocs: ['doc1', 'doc2', 'doc3'],
        importance: 'core'
      }
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 2,
      mergedIngredientsCount: 3,
      totalUniqueSteps: 3,
      totalMasterIngredients: 3,
      overlapPercentage: 97,
      documentsPresent: ['doc1', 'doc2', 'doc3'],
      reconciliationSummary: 'نص موحد متطابق في الوثائق الثلاث، يوضح سر كرملة السكر مع الخروب أولاً قبل سكب الماء للحصول على اللون البني الكهرماني والمذاق الغني.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مشروب الخروب',
        pageNumber: 220,
        ingredients: ['1 كوب خروب قطع صغيرة', '3/4 كوب سكر', '7 : 8 أكواب ماء'],
        instructions: ['يوضع الخروب مع السكر على نار هادئة حتى يتكرمل بلون ذهبي بني', 'تضاف كمية المياه ويترك يغلي 4 دقائق', 'يترك مغطى حتى يبرد ثم يصفى ويدخل الثلاجة']
      },
      doc3: {
        title: '1- مشروب الخروب',
        pageNumber: 190,
        ingredients: ['1 كوب خروب قطع صغيرة', '3/4 كوب سكر', 'من 7 - 8 أكواب ماء'],
        instructions: ['يوضع الخروب مع السكر على درجة حرارة هادئة مع تقليبهم حتى يصير ذهبيا مائلا للبني', 'تضاف كمية المياه ويغطي الإناء حتى يذوب السكر', 'يرفع ويترك مغطى حتى يبرد ثم يصفى ويدخل الثلاجة']
      }
    }
  },
  {
    id: 'des-03',
    title: 'البانكيك',
    titleEn: 'Simple Pancakes with Molasses or Jam',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '10 دقائق',
    servings: '2-3 أفراد',
    masterIngredients: [
      {
        id: 'db4-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '6 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '6 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db4-2',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1/2 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db4-3',
        name: 'زيت أو زبدة',
        nameEn: 'Oil or butter',
        standardAmount: '1 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db4-4',
        name: 'عسل أسود أو مربى',
        nameEn: 'Molasses or jam',
        standardAmount: 'للتقديم',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتقديم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db4-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'رشة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'رشة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db4-6',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يضاف البيكنج باودر إلى الدقيق ثم يعجن مع الزيت والفانيليا مع إضافة اللبن حتى يصير قوامه متوسط الليونة.',
        textEn: 'Mix the baking powder into the flour, then work in the oil and vanilla, adding milk until you get a medium-soft batter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يسخن الزيت في التيفال ثم نملأ ملعقة كبيرة من الخليط ونضعها في الزيت أو الزبد، ثم نقلبه على الوجهين حتى يصفر لونه، وتكرر العملية واحدة واحدة.',
        textEn: 'Heat oil in a non-stick pan, drop in tablespoons of batter, and cook on both sides until golden; repeat one at a time.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'بعد الانتهاء من الخليط نضع وحدات البانكيك في طبق مسطح ثم نبدأ بتجميله.',
        textEn: 'Arrange the pancakes on a flat plate to garnish.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يوضع قليل من الزبد على الوجه وفوقها عسل أسود أو مربى، وممكن وضع طبقة من الكاسترد والمكسرات.',
        textEn: 'Top with a little butter and molasses or jam, and optionally a layer of custard and nuts.',
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
        title: 'البانكيك',
        ingredients: ['6 م ك دقيق', '½ م ب ب', '1 م ك زيت أو قطعة زبدة', 'عسل أسود أو مربى', 'رشة فانيليا', 'قليل من اللبن'],
        instructions: ['يضاف البيكنج باودر إلى الدقيق ثم يعجن مع الزيت والفانيليا مع إضافة اللبن حتى يصير قوامه متوسط الليونة.', 'يسخن الزيت في التيفال ثم نملأ ملعقة كبيرة من الخليط ونضعها في الزيت أو الزبد ثم نقلبه على الوجهين حتى يصفر لونه وتكرر العملية واحدة واحدة.', 'بعد الانتهاء من الخليط نضع وحدات اليانكيك في طبق مسطح ثم نبدأ بتجميله.', 'يوضع قليل من الزبد على الوجه وفوقها عسل أسود أو مربى وممكن وضع طبقة من الكستر والمكسرات.']
      }
    }
  },
  {
    id: 'des-04',
    title: 'بانكيك الشيكولاتة',
    titleEn: 'Chocolate Caramel Pancake Stack with Strawberries',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'تسبيك',
    prepTime: '30 دقيقة (+45 دقيقة تبريد)',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db5-1',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1.25 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1.25 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db5-2',
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
        id: 'db5-3',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db5-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'رشة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'رشة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db5-5',
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
        id: 'db5-6',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/4 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db5-7',
        name: 'زبدة',
        nameEn: 'Butter',
        standardAmount: '1 قطعة متوسطة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db5-8',
        name: 'كريمة كراميل بالشيكولاتة (انظري الوصفة التالية)',
        nameEn: 'Chocolate caramel cream (see recipe below)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db5-9',
        name: 'كريم شانتيه ومكسرات وفراولة',
        nameEn: 'Chantilly cream, chopped nuts and strawberries',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'نضع الزبدة مع اللبن ونسيَحها في إناء على درجة حرارة متوسطة.',
        textEn: 'Melt the butter with the milk in a pot over medium heat.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نخلط الدقيق بالبيكنج باودر ونضيفه إلى السكر ونخلطهم.',
        textEn: 'Mix the flour with the baking powder and combine with the sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضرب البيض بالمضرب السلكي والفانيليا مع اللبن والزبدة، ثم نسكبهم على الدقيق والسكر ونضربهم بمضرب السلك.',
        textEn: 'Whisk the eggs with the vanilla into the milk-butter mixture, then whisk this into the flour and sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يدخل الخليط في الثلاجة حوالي ثلاثة أرباع الساعة.',
        textEn: 'Refrigerate the batter for about 45 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نحضر طاسة تيفال ونضع فيها قليلا من الزيت مع تسخينه قليلا.',
        textEn: 'Lightly oil and warm a non-stick pan.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نملأ كبشة بالعجين ونسكبها في الطاسة حتى تملأها.',
        textEn: 'Pour a ladleful of batter to fill the pan.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'بعد أن تتماسك العجينة تقلب على الوجه الآخر حتى تحمر، ثم ترفع وتوضع في الطبق.',
        textEn: 'Once set, flip to brown the other side, then remove to a plate.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'تدهن الطاسة دهنا خفيفا بالزيت وتكرر العملية، وتوضع فوق الطبقة الأولى داخل الطبق، وهكذا طبقتين طبقتين حتى ينتهي مقدار العجينة.',
        textEn: 'Lightly re-oil the pan and repeat, stacking each pancake on the last, until all the batter is used.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'يجمَل بأن نبدأ في دهن واحدة من البانكيك بالكراميل بالشيكولاته، ثم توضع الثانية فوقها ونضع كمية من الكراميل على الوجه وحولها فراولة.',
        textEn: 'To finish, spread one pancake with the chocolate caramel, stack another on top, and pour more caramel over the top, garnished with strawberries around it.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 10,
        text: 'يمكن أن يجمَل أيضا بعمل كمية من كريم شانتيه يضاف له المكسرات المفرية، وندهن بها الطبقة الأولى ثم نغطيها بالثانية ونجملها بالكريم شانتيه في الجوانب مع الفراولة والكريمة في الوسط.',
        textEn: 'Alternatively, whip Chantilly cream with chopped nuts, spread between the layers, and decorate the sides with more Chantilly cream, strawberries and cream in the center.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة أخرى بكريم شانتيه',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 10,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'بانكيك الشيكولاتة',
        ingredients: ['¼1 كوب لبن', '1 كوب دقيق', 'ملعقة كبيرة بيكينج باودر', 'فانيليا', '2 بيضة', '¼ كوب سكر', 'قطعة متوسطة زبدة', 'كريمة', 'كريم شانتية', 'مكسرات مفرية', 'فراولة'],
        instructions: ['نضع الزبدة مع اللبن ونسيَحها في إناء على درجة حرارة متوسطة.', 'نخلط الدقيق بالبيكنج باودر ونضيفه إلى السكر ونخلطهم.', 'يضرب البيض بالمضرب السلك والفانيليا مع اللبن والزبدة ثم نسكبهم على الدقيق والسكر ونضربهم بمضرب السلك.', 'يدخل الخليط في الثلاجة حوالي ¾ ساعة.', 'نحضر طاسة تيفال ونضع فيها قليل من الزيت مع تسخينه قليلا.', 'نملأ كبشة بالعجين ونسكبها في الطاسة حتى تملأها.', 'بعد أن تتماسك العجينة تقلب على الوجه الآخر حتى تحمر ثم ترفع وتوضع في الطبق.', 'تدهن الطاسة دهنا خفيفا بالزيت وتكرر العملية وتوضع فوق الراق الأول داخل الطبق . وهكذا وحدتين وحدتين حتى ينتهي مقدار العجينة.', 'يجمَل بأن نبدأ في دهن واحدة من البانكيك بالكراميل بالشيكولاته ، ثم توضع الثانية فوقها ونضع كمية من الكراميل على الوجه وحولها فراولة.', 'يمكن أن يجمَل ايضا بعمل كمية من كريم شانتيه يضاف له المكسرات المفرية وندهن بها الراق الأول ثم نغطيه بالثاني ونجمله بالكريم شانتيه في الجوانب  مع الفراولة والكريمة في الوسط.']
      }
    }
  },
  {
    id: 'des-05',
    title: 'عمل الكريمة',
    titleEn: 'Chocolate Caramel Cream (for Pancake Stack)',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '10 دقائق',
    servings: 'يكفي لبانكيك الشيكولاتة',
    masterIngredients: [
      {
        id: 'db6-1',
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
        id: 'db6-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db6-3',
        name: 'شيكولاته مبشورة',
        nameEn: 'Grated chocolate',
        standardAmount: '3/4 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db6-4',
        name: 'فراولة',
        nameEn: 'Strawberries',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'نضع السكر في طاسة مع قليل من الماء حتى يحمر قليلا ويصبح كراملة.',
        textEn: 'Cook the sugar in a pan with a little water until lightly browned into a caramel.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضيف الكريمة للكراملة مع التقليب على درجة حرارة هادئة حتى تسيح تماما، ثم نضيف الشيكولاته المبشورة.',
        textEn: 'Add the cream to the caramel, stirring over low heat until fully dissolved, then stir in the grated chocolate.',
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
        title: 'عمل الكريمة',
        ingredients: ['2 ملعقة كبيرة دقيق أو كورن فلاور', '2 كوب لبن', '2 بيضة', 'قشر ليمونة', '3 ملعقة كبيرة جبن رومي مبشور', 'قطع لانشون', 'بقدونس مفري', 'ملح', 'فلفل', 'بهار', 'قرفة', 'قرنفل'],
        instructions: ['يغلي اللبن ويوضع فيه التوابل وقشر الليمونة المغسولة.', 'يضرب البيض مع الدقيق ويقلب جيدا ثم يضاف إلى اللبن الساخن مع ضربهم بالمضرب على درجة حرارة هادئة ثم يضاف إليه البقدونس.', 'يرفع من الحرارة ويضاف إليه قطع اللانشون.']
      }
    }
  },
  {
    id: 'des-06',
    title: 'بانكيك مقلوب',
    titleEn: 'Upside-Down Apple Pancake Bake',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة (+30 دقيقة تبريد)',
    cookTime: '25 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db7-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db7-2',
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
        id: 'db7-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db7-4',
        name: 'بشر برتقال',
        nameEn: 'Orange zest',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db7-5',
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
        id: 'db7-6',
        name: 'لبن رايب',
        nameEn: 'Buttermilk',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db7-7',
        name: 'تفاح',
        nameEn: 'Apples',
        standardAmount: '1/4 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db7-8',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يضاف البيكينج باودر للدقيق ويقلبوا، ثم نضيف نصف كمية السكر ويقلبوا جيدا.',
        textEn: 'Mix the baking powder into the flour, then stir in half the sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تسيَح قطعة زبد في إناء، ثم نضع فيه التفاح المقطع مع نصف مقدار السكر المتبقي حتى يتشرب تماما وينضج، ثم نتركه حتى يبرد.',
        textEn: 'Melt a knob of butter in a pot, add the sliced apples with half the remaining sugar, and cook until softened and the liquid absorbed; let cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر سلطانية ونخفق فيها البيض مع اللبن الرايب والفانيليا بالمضرب، ثم يسكب عليه الدقيق مرة واحدة ويخلط قليلا.',
        textEn: 'Whisk the eggs with the buttermilk and vanilla, then add the flour all at once and mix just briefly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر البايركس ويرص فيه قطع التفاح وعليه بشر البرتقال.',
        textEn: 'Arrange the apple pieces in a Pyrex dish and sprinkle with orange zest.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يسكب الخليط على التفاح بدون تقليب ثم يترك نصف ساعة في الثلاجة.',
        textEn: 'Pour the batter over the apples without stirring, and refrigerate for half an hour.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يدخل فرن متوسط الحرارة مع ملاحظة سرعة نضجه.',
        textEn: 'Bake in a medium oven, watching closely as it cooks quickly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يقلب البانكيك في طبق التقديم.',
        textEn: 'Invert onto the serving plate.',
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
        title: 'بانكيك مقلوب',
        ingredients: ['½ كوب دقيق', 'ملعقة صغيرة بيكينج باودر', '1 كوب سكر', 'بشر برتقال', '2 بيضة', '½ كوب لبن رايب', '¼ كيلو تفاح', 'زبدة'],
        instructions: ['يضاف البيكينج باودر للدقيق و يقلبوا ثم نضيف ½ كمية السكر و يقلبوا جيدا.', 'تسيَح قطعة زبد في إناء ثم نضع فيه التفاح المقطع مع ½ مقدار السكر المتبقي حتى يتشرب تماما وينضج – ثم نتركه حتى يبرد.', 'نحضر سلطانية ونخفق فيها البيض مع اللبن الرايب والفانيليا بالمضرب ثم يسكب عليه الدقيق مرة واحدة ويخلط قليلا.', 'نحضر البايركس ويرص فيه قطع التفاح وعليه بشر البرتقال.', 'يسكب الخليط على التفاح بدون تقليب ثم يترك ½ ساعة في الثلاجة.', 'يدخل فرن متوسط الحرارة مع ملاحظة سرعة نضجه.', 'يقلب البانكيك في طبق التقديم.']
      }
    }
  },
  {
    id: 'des-07',
    title: 'فطير مقلي',
    titleEn: 'Fried Sweet Fatayer with Sugar or Honey',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة (+15 دقيقة راحة)',
    cookTime: '15 دقيقة',
    servings: '6-8 قطع',
    masterIngredients: [
      {
        id: 'db8-1',
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
        id: 'db8-2',
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
        id: 'db8-3',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1/2 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db8-4',
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
        id: 'db8-5',
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
        id: 'db8-6',
        name: 'سكر بودرة أو عسل أبيض',
        nameEn: 'Powdered sugar or white honey, for garnish',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db8-7',
        name: 'زيت للتحمير',
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
        text: 'يضاف البيكنج باودر إلى الدقيق ثم يفرك جيدا مع السمن، مع إضافة كمية الماء أو حسب الحاجة.',
        textEn: 'Mix the baking powder into the flour, then rub in the ghee, adding water as needed to form a dough.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغطى الخليط ويترك حوالي ربع ساعة.',
        textEn: 'Cover and rest for about 15 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تكور العجينة قطعا صغيرة بحجم الليمونة، ثم تبطط فوق لوح أو صينية حتى تصبح رقيقة جدا بحجم طبق الشاي.',
        textEn: 'Shape into lemon-sized balls, then flatten very thin, about the size of a saucer.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يسخن زيت غزير في طاسة واسعة وتحمر واحدة واحدة، ثم توضع في طبق مستطيل.',
        textEn: 'Heat plenty of oil in a wide pan and fry one at a time, then arrange on a rectangular plate.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'ترش الوحدات بالسكر البودرة أو بالعسل الأبيض أو الأسود.',
        textEn: 'Dust with powdered sugar or drizzle with white or black honey.',
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
        title: 'فطير مقلي',
        ingredients: ['1 كوب دقيق', 'ذرة ملح', '½ ملعقة صغيرة بيكينج باودر', 'ملعقة كبيرة سمن', '½ كوب ماء', 'للتجميل سكر بودرة أو عسل أبيض', 'زيت للتحمير'],
        instructions: ['يضاف البيكنج باودر إلى الدقيق ثم يفرك جيدا مع السمن مع إضافة كمية الماء أو حسب الحاجة.', 'يغطى الخليط ويترك حوالي ¼ ساعة.', 'تكور العجينة قطع صغيرة بحجم الليمونة ثم تبطط فوق لوح أوصينية حتى تصبح رقيقة جداو بحجم طبق الشاي.', 'يسخن زيت غزير في طاسة واسعة وتحمر واحدة واحدة ثم توضع في طبق مستطيل.', 'ترش الوحدات بالسكر البودرة أو بالعسل الأبيض أو الأسود.']
      }
    }
  },
  {
    id: 'des-08',
    title: 'التارت بالمربى أو فطيرة البسطافلورا',
    titleEn: 'Apricot Jam Lattice Tart (Pasta Frolla Style)',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'فرن',
    prepTime: '30 دقيقة (+30 دقيقة تبريد)',
    cookTime: '30 دقيقة',
    servings: '8-10 أفراد',
    masterIngredients: [
      {
        id: 'db9-1',
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
        id: 'db9-2',
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
        id: 'db9-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db9-4',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '3/4 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db9-5',
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
        id: 'db9-6',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'رشة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'رشة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db9-7',
        name: 'مربى مشمش',
        nameEn: 'Apricot jam',
        standardAmount: 'للحشو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للحشو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يضاف البيكنج باودر مع ذرة ملح إلى الدقيق والسمن وتفرك بالأصابع جيدا.',
        textEn: 'Mix the baking powder and a pinch of salt into the flour and ghee, and rub in well with your fingers.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البيض مع الفانيليا ويضاف السكر ويقلبوا جيدا.',
        textEn: 'Whisk the eggs with the vanilla, add the sugar, and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف خليط الدقيق إلى البيض بالسكر وتمزج جيدا حتى تتكون عجينة متوسطة الليونة.',
        textEn: 'Add the flour mixture to the egg-sugar mixture and combine into a medium-soft dough.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل الثلاجة لمدة نصف ساعة.',
        textEn: 'Refrigerate for half an hour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن صينية بالزبد خفيفا ويفرد فيها ثلثا العجينة مع تغطية جوانب الصينية بالعجينة.',
        textEn: 'Lightly grease a tray with butter and press two-thirds of the dough into it, covering the sides of the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تغطى بمربى المشمش أو أي فاكهة.',
        textEn: 'Spread with apricot jam, or any fruit preserve.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يقطع ثلث العجينة الباقية على هيئة شرائط وتفرد فوق المربى على شكل مربعات.',
        textEn: 'Cut the remaining third of the dough into strips and arrange in a lattice pattern over the jam.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يدهن السطح بالبيض المخفوق ثم تدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Brush the surface with beaten egg and bake in a medium oven until done.',
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
        title: 'التارت بالمربى أو فطيرة البسطافلورا',
        ingredients: ['3 كوب دقيق', 'بيكينج باودر', '1 كوب سكر', '¾ كوب سمن', '3 بيضات', 'فانيليا', 'مربى مشمش للحشو'],
        instructions: ['يضاف البيكنج باودر مع ذرةملح إلى الدقيق والسمن وتفرك بالأصابع جيدا.', 'يضرب البيض مع الفانيليا ويضاف السكر ويقلبوا جيدا.', 'يضاف خليط الدقيق إلى البيض بالسكر وتمزج جيدا حتى تتكون عجينة متوسطة الليونة.', 'تدخل الثلاجة لمدة ½ ساعة.', 'تدهن صينية بالزبد خفيفا ويفرد فيها ⅔ العجينة مع تغطية جوانب الصينية بالعجينة.', 'تغطى بمربى المشمش أو أي فاكهة.', 'يقطع ⅓ العجينة الباقية على هيئة شرائط وتفرد فوق المربى على شكل مربعات.', 'يدهن السطح بالبيض المخفوق ثم تدخل فرن متوسط الحرارة حتى النضج.']
      }
    }
  },
  {
    id: 'des-09',
    title: 'فطيرة الجلاش بالكريمة',
    titleEn: 'Phyllo Pie with Custard and Nuts',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db10-1',
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
        id: 'db10-2',
        name: 'زيت أو سمن سايح',
        nameEn: 'Oil, or melted ghee',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db10-3',
        name: 'لبن بارد',
        nameEn: 'Cold milk',
        standardAmount: '1 كوب كبير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب كبير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db10-4',
        name: 'كريمة (كاسترد، انظري الوصفة التالية)',
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
        id: 'db10-5',
        name: 'مكسرات مفرية وزبيب وجوز هند',
        nameEn: 'Chopped nuts, raisins and coconut',
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
        text: 'تدهن الصينية خفيفا ويوضع فيها نصف كمية الجلاش بدون تقطيع.',
        textEn: 'Lightly grease the tray and layer in half the phyllo, unfolded.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'توضع الحشوة على الجلاش وترش فوقها المكسرات المفرية والزبيب وجوز الهند.',
        textEn: 'Spread the custard over the phyllo and sprinkle with chopped nuts, raisins and coconut.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تغطى بباقي الجلاش، ثم يسخن نصف كوب الزيت أو السمن السايح جيدا جدا ثم يصب فوق الجلاش وتدخل الفرن.',
        textEn: 'Cover with the remaining phyllo, heat the oil or melted ghee very well, pour over the top, and bake.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'عند قرب النضج يصب عليها كوب اللبن البارد ولا داعي للقشدة حتى لا تكون دسمة.',
        textEn: 'Near the end of baking, pour the cup of cold milk over it (no need for clotted cream, to keep it from being too rich).',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدخل الفرن ثانية حتى تتشرب كل السائل لمدة بسيطة ويحمر الوجه.',
        textEn: 'Return to the oven briefly until all the liquid is absorbed and the top is golden.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد خروجها مباشرة ترش بسكر البودرة وتغطى.',
        textEn: 'As soon as it comes out, dust with powdered sugar and cover.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'فطيرة الجلاش بالكريمة',
        ingredients: ['½ كيلو جلاش', '½ كوب زيت أو سمن سايح', '1 كوب كبير من اللبن', 'قشدة للوجه', 'كريمة', 'مكسرات مفرية', 'زبيب', 'جوز الهند'],
        instructions: ['تدهن الصينية خفيفا ويوضع فيها ½ كمية الجلاش بدون تقطيع.', 'توضع الحشوة على الجلاش وترش فوقها المكسرات المفرية  والزبيب وجوز الهند.', 'تغطى بباقي الجلاش ثم يسخن ½ كوب الزيت أو السمن السايح جيدا جدا ثم تصب فوق الجلاش وتدخل الفرن.', 'عند قرب النضج يصب عليها كوب اللبن البارد ولا داعي للقشدة حتى لا تكون دسمة.', 'تدخل الفرن ثانية حتى تتشرب كل السائل لمدة بسيطة ويحمر الوجه.', 'بعد خروجها مباشرة ترش بسكر البودرة وتغطى.']
      }
    }
  },
  {
    id: 'des-10',
    title: 'عمل الكريمة',
    titleEn: 'Vanilla-Cinnamon Custard Cream (for Phyllo Pie)',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '15 دقيقة',
    servings: 'يكفي لفطيرة جلاش واحدة',
    masterIngredients: [
      {
        id: 'db11-1',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '4 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db11-2',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db11-3',
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
        id: 'db11-4',
        name: 'قرفة وفانيليا',
        nameEn: 'Cinnamon and vanilla',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db11-5',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يخفق البيض ثم نضيف ملعقتين من اللبن ونقلبهم، ثم نضيف الكورن فلاور ويضربوا جيدا مع القرفة والفانيليا.',
        textEn: 'Beat the eggs, whisk in two tablespoons of milk, then whisk in the cornflour with the cinnamon and vanilla.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نغلي اللبن مع السكر ونسكب منه قليلا على الخليط (لسرعة ذوبانه) ثم نسكب الخليط على اللبن المغلي، ويضربوا جيدا بالمضرب على درجة حرارة هادئة حتى يغلظ القوام.',
        textEn: 'Boil the milk with the sugar, temper the egg mixture with a little of the hot milk, then whisk it all back into the milk over low heat until it thickens.',
        phase: 'cook',
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
        title: 'عمل الكريمة',
        ingredients: ['1 كوب كريمة', '1 كوب سكر', '¾ كوب شيكولاته مبشورة', 'وحدات فراولة'],
        instructions: ['نضع السكر في طاسة مع قليل من الماء حتى يحمر قليلا ويصبح كرملة.', 'نضيف الكريمة للكرملة مع التقليب على درجة حرارة هادئة حتى تسيح تماما . ثم نضيف الشيكولاته المبشورة.']
      }
    }
  },
  {
    id: 'des-11',
    title: 'فطيرة الجلاش بالعسل الأسود',
    titleEn: 'Phyllo Pie with Milk and Molasses',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db12-1',
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
        id: 'db12-2',
        name: 'زيت أو سمن سايح',
        nameEn: 'Oil, or melted ghee',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db12-3',
        name: 'لبن بارد',
        nameEn: 'Cold milk',
        standardAmount: '1 كوب كبير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب كبير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db12-4',
        name: 'قشدة',
        nameEn: 'Clotted cream',
        standardAmount: 'للوجه',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'للوجه'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db12-5',
        name: 'عسل أسود',
        nameEn: 'Black molasses',
        standardAmount: 'للتقديم',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتقديم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تدهن الصينية خفيفا ويوضع فيها كمية الجلاش كلها بدون تقطيع.',
        textEn: 'Lightly grease the tray and layer in all the phyllo, unfolded.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يسخن نصف كوب الزيت أو السمن جيدا جدا وتصب فوق الجلاش وتدخل فرن متوسط الحرارة.',
        textEn: 'Heat the oil or ghee very well, pour over the phyllo, and bake in a medium oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'عند قرب النضج يصب فوقها كوب كبير من اللبن البارد الممزوج بالقشدة.',
        textEn: 'Near the end of baking, pour over a large cup of cold milk mixed with clotted cream.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل ثانية الفرن حتى تتشرب السائل ويحمر الوجه، وتغطى مباشرة بعد خروجها.',
        textEn: 'Return to the oven until the liquid is absorbed and the top is golden, and cover as soon as it comes out.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'هذه الفطيرة تستعمل مع العسل الأسود وتؤكل ساخنة.',
        textEn: 'Serve this pie warm, drizzled with black molasses.',
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
        title: 'فطيرة الجلاش بالعسل الأسود',
        ingredients: ['½ كيلو جلاش', '½ كوب زيت أو سمن سايح', '1 كوب كبير من اللبن', 'قشدة للوجه', 'عسل أسود'],
        instructions: ['تدهن الصينية خفيفا ويوضع فيها كمية الجلاش كلها بدون تقطيع.', 'يسخن ½ كوب الزيت أو السمن جيدا جدا وتصب فوق الجلاش وتدخل فرن متوسط الحرارة.', 'عند قرب النضج يصب فوقها كوب كبير من اللبن البارد الممزوج بالقشدة.', 'تدخل ثانية الفرن حتى تتشرب السائل ويحمر الوجه.', 'تغطى مباشرة بعد خروجها.', 'هذه الفطيرة تستعمل مع العسل الأسود وتؤكل ساخنة.']
      }
    }
  },
  {
    id: 'des-12',
    title: 'الرقاقة الحلوة',
    titleEn: 'Sweet Ruqaq with Nuts, Raisins and Cinnamon',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '25 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'db13-1',
        name: 'لفة رقاق',
        nameEn: 'Ruqaq flatbread roll',
        standardAmount: '1 لفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 لفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db13-2',
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
        id: 'db13-3',
        name: 'مكسرات',
        nameEn: 'Chopped nuts',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db13-4',
        name: 'زبيب',
        nameEn: 'Raisins',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db13-5',
        name: 'قرفة',
        nameEn: 'Cinnamon',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db13-6',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تدهن صينية بالسمن جيدا، ثم يوضع أول طبق من الرقاق غير المبلل، ثم تبلل نصف كمية الرقائق بالماء أو باللبن واحدة واحدة وتوضع في الصينية.',
        textEn: 'Grease a tray well with ghee, lay the first unmoistened sheet, then dip half the remaining sheets in water or milk, one at a time, layering them in.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع المكسرات المفرية مع الزبيب والقرفة فوق الرقاق (نصف الكمية).',
        textEn: 'Sprinkle the chopped nuts, raisins and cinnamon (half the amount) over the layers.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يغطى الحشو بالنصف الآخر للرقائق ثم سمن على الوجه.',
        textEn: 'Cover the filling with the remaining sheets, and drizzle ghee on top.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن متوسط الحرارة حتى نصف المدة، ثم تقلب باحتراس على الوجه الآخر.',
        textEn: 'Bake in a medium oven for half the time, then carefully flip to bake the other side.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد نضجها تماما نطفئ الموقد ونسكب على الفطيرة كوب اللبن وقليلا من القرفة مع تغطيتها وإدخالها الفرن حتى تطرى الرقاقة.',
        textEn: 'Once fully baked, turn off the oven and pour the cup of milk with a little cinnamon over it, cover, and return to the (turned-off, still-warm) oven until softened.',
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
        title: 'الرقاقة الحلوة',
        ingredients: ['لفة رقاق', 'سمن', 'مكسرات', 'زبيب', 'قرفة', 'كوب لبن'],
        instructions: ['تدهن صينية بالسمن جيدا ثم يوضع أول راق من الرقاق الغير مبلل ، ثم تبلل ½ كمية الرقائق بالماء أو باللبن واحدة واحدة وتوضع في الصينية.', 'نضع المكسرات المفرية مع الزبيب والقرفة فوق الرقاق (½ الكمية).', 'يغطى الحشو بالنصف الآخر للرقائق ثم سمن على الوجه.', 'تدخل فرن متوسط الحرارة حتى ½ المدة ثم تقلب باحتراس على الوجه الأخر.', 'بعد نضجها تماما نطفئ البوتاجاز ونسكب على الفطيرة أو الرقاقة كوب اللبن وقليل من ا لقرفة مع تغطيتها وإدخالها الفرن حتى تطرى الرقاقة.']
      }
    }
  },
  {
    id: 'des-13',
    title: 'كريب المربى',
    titleEn: 'Jam-Filled Crêpe Rolls',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db14-1',
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
        id: 'db14-2',
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
        id: 'db14-3',
        name: 'ملح',
        nameEn: 'Salt',
        standardAmount: 'ذرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'ذرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db14-4',
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
        id: 'db14-5',
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
        id: 'db14-6',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'رشة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'رشة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db14-7',
        name: 'مربى مشمش أو فراولة',
        nameEn: 'Apricot or strawberry jam',
        standardAmount: 'للحشو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للحشو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db14-8',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db14-9',
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
        id: 'db14-10',
        name: 'مكسرات وزبيب وجوز هند',
        nameEn: 'Nuts, raisins and coconut',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'نحضر سلطانية ونضع بها الدقيق والملح.',
        textEn: 'Combine the flour and salt in a bowl.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البيض مع اللبن والفانيليا ثم يسكب على الدقيق ويقلب جيدا بملعقة خشب حتى تتكون عجينة سائلة.',
        textEn: 'Whisk the eggs with the milk and vanilla, pour over the flour, and mix well with a wooden spoon into a liquid batter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر طاسة تيفال ونضع بها قليلا من الزيت.',
        textEn: 'Lightly oil a non-stick pan.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نملأ فنجانا صغيرا أو ملعقة كبيرة بالخليط ونصبه باحتراس في الطاسة الساخنة حتى يملأها تماما على شكل قرص.',
        textEn: 'Pour a small cupful or tablespoon of batter into the hot pan, tilting to spread it into a thin round.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نهز الطاسة ثم نقلبه مثل الكانيلوني أو الأومليت على الوجه الآخر حتى يتماسك ويصفر لونه.',
        textEn: 'Shake the pan, then flip as with the cannelloni or omelette, cooking until set and golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'ينشل من الطاسة ويوضع في طبق وتكرر العملية حتى ينتهي مقدار العجين ونحصل على فطائر رقيقة.',
        textEn: 'Remove and repeat until all the batter is used, yielding thin crêpes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تحشى الفطائر بمقدار من المربى لكل فطيرة ثم تلف مثل الرولو وترص في طبق التقديم.',
        textEn: 'Fill each crêpe with a little jam, roll up like a log, and arrange on the serving plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'ترش بالسكر البودرة من جميع جوانبها وترش بالمكسرات المفرية والزبيب وجوز الهند.',
        textEn: 'Dust all over with powdered sugar and sprinkle with chopped nuts, raisins and coconut.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'يمكن أيضا أن يوضع قليل من الكريم شانتيه فوق سكر البودرة.',
        textEn: 'A little Chantilly cream can also be added on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'كريب المربى',
        ingredients: ['1 كوب دقيق', 'زبدة', 'ملح', '1كوب لبن', '2 بيضة', 'رشة فانيليا', 'مربى مشمش أو فراولة', 'سكر بودرة', 'زيت أو سمن', 'مكسرات وزبيب'],
        instructions: ['نحضر سلطانية ونضع بها الدقيق والملح.', 'يضرب البيض مع اللبن والفانيليا ثم يسكب على الدقيق ويقلب جيدا بملعقة خشب حتى تتكون عجينة سائلة.', 'نحضر طاسة تيفال ونضع بها قليل من الزيت.', 'نملأ فنجان صغير أو ملعقة كبيرة بالخليط ونصبه باحتراس في الطاسة الساخنة حتى يملأها تماما على شكل قرص.', 'نهز الطاسة ثم نقلبه مثل الكانيلوني أو البيض الأومليت على الوجه الآخر حتى يتماسك ويصفر لونه.', 'ينشل من الطاسة ويوضع في طبق وتكرر العملية حتى ينتهي مقدار العجين ونحصل على فطائر رقيقة.', 'تحشى الفطائر بمقدار من المربى لكل فطيرة ثم تلف مثل الرولو وترص في طبق التقديم.', 'ترش بالسكر البودرة من جميع جوانبها و ترش بالمكسرات المفرية والزبيب وجوز الهند.', 'يمكن ايضا ان يوضع قليل من الكريم شانتيه فوق سكر البودرة.']
      }
    }
  },
  {
    id: 'des-14',
    title: 'فطيرة التفاح',
    titleEn: 'French-Style Apple Tart with Custard Glaze',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '45 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db15-1',
        name: 'تفاح كبير',
        nameEn: 'Large apples',
        standardAmount: '4 تفاحات',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '4 تفاحات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db15-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '3 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db15-3',
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
        id: 'db15-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'رشة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'رشة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db15-5',
        name: 'قشدة',
        nameEn: 'Clotted cream',
        standardAmount: '4-5 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '4-5 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db15-6',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db15-7',
        name: 'عجينة باتيه جاهزة',
        nameEn: 'Ready-made pâte brisée dough',
        standardAmount: '500 جم',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '500 جم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يدهن قالب بايركس مستدير بالزبد خفيفا وتفرد عجينة الباتيه مع رفعها عند حافة القالب 2 سم وتفرد بالشوكة.',
        textEn: 'Lightly butter a round Pyrex dish, press in the pâte brisée dough, raising it 2 cm at the edges, and prick with a fork.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقشَر التفاح وتقطع كل واحدة 8 أجزاء ثم ترص شرائح التفاح فوق العجينة.',
        textEn: 'Peel the apples, cut each into 8 pieces, and arrange the slices over the dough.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرش 3 ملاعق كبيرة سكر فوق التفاح وتدخل الفرن حوالي نصف ساعة.',
        textEn: 'Sprinkle 3 tablespoons of sugar over the apples and bake for about half an hour.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تخفق البيضة مع القشدة والسكر البودرة والفانيليا جيدا بالمضرب.',
        textEn: 'Whisk the egg well with the clotted cream, powdered sugar and vanilla.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرفع البايركس من الفرن ويصب فوقه خليط البيض بالقشدة والسكر، ثم يعاد إلى الفرن حتى يصير لونه ذهبيا.',
        textEn: 'Remove from the oven, pour the egg-cream glaze over the top, and return to the oven until golden.',
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
        title: 'فطيرة التفاح',
        ingredients: ['4 تفاحات كبيرة', '3 ملعقة كبيرة سكر', '1 بيضة', 'فانيليا', '4 : 5 ملاعق كبيرة قشدة', '½ كوب سكر بودرة', 'عجينة باتيه جاهزة 500جم'],
        instructions: ['يدهن قالب بايركس مستدير بالزبد خفيفا وتفرد عجينة الباتيه مع رفعها عند حافة القالب 2سم وتفرد بالشوكة.', 'يقشَر التفاح وتقطع كل واحدة 8  أجزاء ثم ترص شرائح التفاح فوق العجينة.', 'يرش 3 ملاعق كبيرة سكر فوق التفاح وتدخل الفرن حوالي ½ ساعة.', 'تخفق البيضة مع القشدة والسكر البودرة والفانيليا جيدا بالمضرب.', 'يرفع البايركس من الفرن ويصب فوقه خليط البيض بالقشدة والسكر ثم يعاد إلى الفرن حتى يصير لونه ذهبيا.']
      }
    }
  },
  {
    id: 'des-15',
    title: 'الكرواسون',
    titleEn: 'Savory-Filled Croissants',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'فرن',
    prepTime: '45 دقيقة (+تخمير)',
    cookTime: '20 دقيقة',
    servings: '10-12 قطعة',
    masterIngredients: [
      {
        id: 'db16-1',
        name: 'ماء دافئ',
        nameEn: 'Warm water',
        standardAmount: '1 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db16-2',
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
        id: 'db16-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'رشة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'رشة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db16-4',
        name: 'سمن سايح',
        nameEn: 'Melted ghee',
        standardAmount: '3 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db16-5',
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
        id: 'db16-6',
        name: 'خميرة بيرة',
        nameEn: 'Fresh yeast',
        standardAmount: '1 قطعة بحجم عين الجمل',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 قطعة بحجم عين الجمل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db16-7',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db16-8',
        name: 'عصاج أو جبن رومي أو جبن أبيض بالنعناع',
        nameEn: 'Assag, Romy cheese, or white cheese with mint, for filling',
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
        text: 'تقلب الخميرة مع قليل من السكر ثم يضاف إليها الماء الدافئ تدريجيا وتترك قليلا حتى تتخمر.',
        textEn: 'Mix the yeast with a little sugar, gradually add the warm water, and let it froth briefly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البيض جيدا ثم يضاف الدقيق تدريجيا حتى تتكون عجينة يابسة نوعا.',
        textEn: 'Beat the eggs well, then gradually work in flour until a fairly firm dough forms.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف الخميرة للعجينة مع عصير الليمون وذرة ملح وتقلب جيدا.',
        textEn: 'Knead in the yeast mixture with the lemon juice and a pinch of salt.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تفرد على لوحة مرشوشة بالدقيق حتى تكون سمك نصف سم.',
        textEn: 'Roll out on a floured surface to about half a centimeter thick.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرش السمن السايح على السطح حتى تتشربه العجينة، ثم تلف أو تطوى كالفطيرة وتترك لفترة.',
        textEn: 'Brush the surface with melted ghee, fold or roll it up like a pastry, and let rest.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تفرد مرة ثانية وتقطع وتشكل بتقطيعه كالمثلثات.',
        textEn: 'Roll out again and cut into triangles.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تحشى إما بالعصاج أو الجبن الرومي أو الجبن الأبيض بالنعناع أو سادة.',
        textEn: 'Fill with assag, Romy cheese, white cheese with mint, or leave plain.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يلف كل مثلث على شكل حدوة وتوضع على صينية مدهونة وتترك لتخمر.',
        textEn: 'Roll each triangle into a crescent shape, place on a greased tray, and let rise.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'يدهن الوجه بالبيض أو اللبن المحلى.',
        textEn: 'Brush the tops with egg or sweetened milk.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 10,
        text: 'تدخل فرن على درجة حرارة عالية حتى يحمر وينضج.',
        textEn: 'Bake in a hot oven until golden and cooked through.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 10,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكرواسون',
        ingredients: ['1 كوب ماء دافئ', '3 بيضة', 'رشة فانيليا', '3 ملعقة كبيرة سمن سايح', '1 ملعقة صغيرة عصير ليمون', 'قطعة خميرة بيرة بحجم عين الجمل', 'دقيق حسب الطلب'],
        instructions: ['تقلب الخميرة مع قليل من السكر ثم يضاف إليها الماء الدافئ تدريجيا وتترك قليلا حتى تتخمر.', 'يضرب البيض جيدا ثم يضاف الدقيق تدريجيا حتى تتكون عجينة يابسة نوعا.', 'تضاف الخميرة للعجينة مع عصير الليمون وذرة ملح وتقلب جيدا.', 'تفرد على لوحة مرشوشة بالدقيق حتى تكون سمك ½ سم.', 'يرش السمن السايح على السطح حتى تتشربه العجينة ، ثم تلف أو تطوى كالفطيرة وتترك لفترة.', 'تفرد مرة ثانية وتقطع وتشكل بتقطيعه كالمثلثات.', 'تحشى إما بالعصاج أو الجبن الرومي أو الجبن الأبيض بالنعناع أو سادة.', 'يلف كل مثلث على شكل حدوه وتوضع على صينية مدهونة وتترك لتخمر.', 'يدهن الوجه بالبيض أو اللبن المحلي.', 'تدخل في فرن على درجة حرارة عالية حتى يحمر وينضج.']
      }
    }
  },
  {
    id: 'des-16',
    title: 'التوست بالفانيليا',
    titleEn: 'Sweet Vanilla French Toast',
    chapter: 'الباب الرابع: الفطائر الحلوة',
    chapterNumber: 4,
    category: 'فطائر حلوة',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '5 دقائق',
    servings: '1 فرد',
    masterIngredients: [
      {
        id: 'db17-1',
        name: 'بيضة لكل قطعة توست',
        nameEn: 'Egg, one per slice of toast',
        standardAmount: '1 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db17-2',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'رشة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'رشة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db17-3',
        name: 'زبد أو سمن',
        nameEn: 'Butter or ghee',
        standardAmount: '1 قطعة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db17-4',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db17-5',
        name: 'مكسرات وزبيب وجوز هند وشيكولاتة مبشورة (اختياري)',
        nameEn: 'Nuts, raisins, coconut or grated chocolate, optional',
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
        text: 'تضرب بيضة في صحن عميق وعليها رشة فانيليا جيدا.',
        textEn: 'Beat an egg in a deep dish with a good pinch of vanilla.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع فيها قطعة التوست ونتركها قليلا، ثم نقلبها باحتراس على الوجه الآخر حتى تتشرب البيضة تماما.',
        textEn: 'Soak the toast slice in it briefly, then carefully flip so it fully absorbs the egg.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تسخن في طاسة تيفال صغيرة الزبد أو السمن، ثم نضع بها التوستة باحتراس على درجة حرارة هادئة، ثم نقلبها على الوجه الآخر باحتراس حتى تأخذ اللون الذهبي على الوجهين بدون حرق.',
        textEn: 'Heat the butter or ghee in a small non-stick pan, add the toast over low heat, and carefully flip until golden on both sides without burning.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر طبقا قدر حجم التوستة ويُرش بالسكر البودرة، ثم نضع عليه التوستة ثم نرشها بالسكر البودرة على السطح.',
        textEn: 'Dust a plate the size of the toast with powdered sugar, place the toast on it, and dust the top as well.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'ممكن إضافة المكسرات والزبيب وجوز الهند أو الشيكولاته المبشورة فوق السكر البودرة.',
        textEn: 'Nuts, raisins, coconut or grated chocolate can be added over the powdered sugar.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 6,
        text: 'يجمَل التوست أيضا بتسييح مربى المشمش مع قليل من الماء على درجة حرارة هادئة، ثم تقطع فواكه كالتفاح أو الكمثرى أو البلح قطعا صغيرة جدا وتخلط بالمربى مع زبد قليل مع التقليب، ثم يسكب على التوست؛ أو يمكن أيضا تجميله بالكراميل والشيكولاته المبشورة مع فواكه مقطعة أو آيس كريم، أو طهو التفاح بالقرفة والسكر ثم سكبه مع الصوص فوق التوست.',
        textEn: 'It can also be topped by melting apricot jam with a little water over low heat, then mixing in very finely diced fruit (apple, pear, or dates) with a little butter and pouring over the toast; or with caramel and grated chocolate with diced fruit or ice cream; or with apples cooked in cinnamon and sugar poured over the top.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طرق تجميل أخرى',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'التوست بالفانيليا',
        ingredients: ['1 بيضة لكل قطعة توست', 'فانيليا', 'قطعة زبد أو سمن'],
        instructions: ['تضرب بيضة في صحن عميق وعليها رشة فانيليا جيدا.', 'نضع فيها قطعة التوست ونتركها قليلا ، ثم نقلبها باحتراس على الوجه الآخر حتى تتشرب البيضة تماما.', 'تسخن في طاسة تيفال صغيرة الزبد أو السمن ثم نضع بها التوستة باحتراس على درجة حرارة هادئة ثم نقلبها على الوجه الآخر باحتراس حتى تأخذ اللون الذهبي على الوجهين بدون حرق.', 'نحضر طبق قدر حجم التوستة ويُرش بالسكر البودرة ثم نضع عليه التوستة ثم نرشها بالسكر البودرة على السطح.', 'ممكن إضافة ا لمكسرات والزبيب وجوز الهند أو الشيكولاته المبشوة فوق السكر البودرة.', 'يجمَل التوست ايضا بتسييح مربى المشمش مع قليل من الماء على درجة حرارة هادئة ثم نقطع فواكه كالتفاح أو الكمثرى أو البلح قطعا صغيرة جدا ثم تخلط بالمربى مع زبد قليل مع التقليب ثم يسكب على التوست.', 'يمكن ايضا تجميلها بالكراميل والشيكولاته المبشورة وسكبها على التوستة مع وضع فواكه مقطعة أو أيس كريم.', 'ايضا يمكن طهو التفاح بالقرفة والسكر ثم سكبه مع الصوص فوق التوست.']
      }
    }
  },
  {
    id: 'des-17',
    title: 'المهلبية',
    titleEn: 'Classic Mahalabia (Vanilla Milk Pudding)',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db18-1',
        name: 'لبن كبير',
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
        id: 'db18-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db18-3',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '4 ملاعق',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 ملاعق'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db18-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
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
        text: 'يذاب الكورن فلاور في حوالي نصف كوب لبن بارد.',
        textEn: 'Dissolve the cornflour in about half a cup of cold milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع اللبن الباقي على درجة حرارة متوسطة ويحلي بالسكر حتى الغليان.',
        textEn: 'Heat the remaining milk over medium heat, sweetened with sugar, until it boils.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تؤخذ حوالي كبشة كبيرة من اللبن المغلي وتسكب على مزيج الكورن فلاور واللبن حتى يسهل خلطه ويقلب جيدا.',
        textEn: 'Temper the cornflour mixture with a large ladleful of the hot milk, stirring to combine smoothly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يصب هذا الخليط على بقية اللبن المغلي مع التقليب الجيد بعد رفعه من الموقد.',
        textEn: 'Pour this back into the rest of the hot milk, off the heat, stirring well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يعاد الخليط على درجة حرارة هادئة لمدة 3 دقائق تقريبا مع التقليب المستمر.',
        textEn: 'Return to low heat for about 3 minutes, stirring constantly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تضاف الفانيليا ثم تصب المهلبية في قوالب صغيرة مبللة فقط بالماء البارد.',
        textEn: 'Add the vanilla, then pour into small molds rinsed only with cold water.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تترك حتى تبرد ثم تجمل بالمكسرات والزبيب أو الفستق وجوز الهند أو بالموز المقطع أو الفراولة أو الكريز.',
        textEn: 'Let cool, then garnish with nuts and raisins or pistachios and coconut, or with sliced banana, strawberries or cherries.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 8,
        text: 'يجمَل أيضا بالكريم شانتيه على الوجه وفوقه الفواكه أو المكسرات أو يجمَل بالآيس كريم.',
        textEn: 'It can also be topped with Chantilly cream and fruit or nuts, or served with ice cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'المهلبية',
        ingredients: ['2 كوب لبن كبير', 'سكر للتحلية', '4 ملاعق كورن فلاور أوكستر أو نشا', 'قليل من الفانيليا'],
        instructions: ['يذاب الكورن فلاور في حوالي ½ كوب لبن بارد.', 'يوضع اللبن الباقي على درجة حرارة متوسطة ويحلي بالسكر حتى الغليان.', 'تؤخذ حوالي كبشه كبيرة من اللبن المغلي وتسكب على مزيج الكورن فلاور واللبن حتى يسهل خلطه ويقلب جيدا.', 'يصب هذا الخليط على بقية اللبن المغلي مع التقليب الجيد بعد رفعه من البوتاجاز.', 'يعاد الخليط على درجة حرارة هادئة لمدة 3 دقائق تقريبا مع التقليب المستمر.', 'تضاف الفانيليا ثم تصب المهلبية في قوالب صغيرة مبللة فقط بالماء البارد.', 'تترك حتى تبرد ثم تجمل بالمكسرات والزبيب أو الفستق وجوز الهند أو بالموز المقطع أو الفراولة أو الكريز.', 'يجمَل أيضا بالكريم شانتيه على الوجه وفوقه الفواكه أو المكسرات أو يجمَل بالآيس كريم.']
      }
    }
  },
  {
    id: 'des-18',
    title: 'المهلبية بالشيكولاته',
    titleEn: 'Chocolate Mahalabia',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db19-1',
        name: 'لبن كبير',
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
        id: 'db19-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db19-3',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '4 ملاعق',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 ملاعق'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db19-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db19-5',
        name: 'شيكولاته مبشورة أو كاكاو',
        nameEn: 'Grated chocolate, or cocoa powder',
        standardAmount: '1 ملعقة كبيرة شيكولاتة أو 2 ملعقة كاكاو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة شيكولاتة أو 2 ملعقة كاكاو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يذاب الكورن فلاور في حوالي نصف كوب لبن بارد.',
        textEn: 'Dissolve the cornflour in about half a cup of cold milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع اللبن الباقي على درجة حرارة متوسطة ويحلي بالسكر حتى الغليان.',
        textEn: 'Heat the remaining milk over medium heat, sweetened with sugar, until it boils.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تذاب الشيكولاته أو الكاكاو في اللبن المحلي بالسكر.',
        textEn: 'Dissolve the chocolate or cocoa in the sweetened milk.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تؤخذ حوالي كبشة كبيرة من اللبن المغلي وتسكب على مزيج الكورن فلاور واللبن حتى يسهل خلطه ويقلب جيدا.',
        textEn: 'Temper the cornflour mixture with a large ladleful of the hot milk, stirring to combine smoothly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يصب هذا الخليط على بقية اللبن المغلي مع التقليب الجيد بعد رفعه من الموقد.',
        textEn: 'Pour this back into the rest of the hot milk, off the heat, stirring well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يعاد الخليط على درجة حرارة هادئة لمدة 3 دقائق تقريبا مع التقليب المستمر.',
        textEn: 'Return to low heat for about 3 minutes, stirring constantly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تضاف الفانيليا ثم تصب المهلبية في قوالب صغيرة مبللة فقط بالماء البارد.',
        textEn: 'Add the vanilla, then pour into small molds rinsed only with cold water.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'تترك حتى تبرد ثم تجمل بالمكسرات والزبيب أو الفستق وجوز الهند أو بالموز المقطع أو الفراولة أو الكريز.',
        textEn: 'Let cool, then garnish with nuts and raisins or pistachios and coconut, or with sliced banana, strawberries or cherries.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 9,
        text: 'تجمل بالشيكولاته المبشورة أو المكسرات أو آيس كريم الشيكولاتة.',
        textEn: 'Garnish with grated chocolate, nuts, or a scoop of chocolate ice cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 9,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'المهلبية بالشيكولاته',
        ingredients: ['2 كوب لبن كبير', 'سكر للتحلية', '4 ملاعق كورن فلاور أوكستر أو نشا', 'قليل من الفانيليا', '1 ملعقة كبيرة من شيكولاته مبشورة أو 2 ملعقة كبيرة كاكاو.'],
        instructions: ['يذاب الكورن فلاور في حوالي ½ كوب لبن بارد.', 'يوضع اللبن الباقي على درجة حرارة متوسطة ويحلي بالسكر حتى الغليان.', 'تذاب الشيكولاته أو الكاكاو في اللبن المحلي بالسكر.', 'تؤخذ حوالي كبشه كبيرة من اللبن المغلي وتسكب على مزيج الكورن فلاور واللبن حتى يسهل خلطه ويقلب جيدا.', 'يصب هذا الخليط على بقية اللبن المغلي مع التقليب الجيد بعد رفعه من البوتاجاز.', 'يعاد الخليط على درجة حرارة هادئة لمدة 3 دقائق تقريبا مع التقليب المستمر.', 'تضاف الفانيليا ثم تصب المهلبية في قوالب صغيرة مبللة فقط بالماء البارد.', 'تترك حتى تبرد ثم تجمل بالمكسرات والزبيب أو الفزدق وجوز الهند أو بالموز المقطع أو الفراولة أو الكريز.', 'تجمل بالشيكولاته المبشورة أو المكسرات أو آيس كريم الشيكولاتة.']
      }
    }
  },
  {
    id: 'des-19',
    title: 'جيلي بالفواكه والبسكويت',
    titleEn: 'Jelly with Fresh Fruit and Biscuits',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة (+تبريد)',
    cookTime: '5 دقائق',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db20-1',
        name: 'جيلي (علبة)',
        nameEn: 'Jelly powder (packet)',
        standardAmount: '1 علبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 علبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db20-2',
        name: 'فواكه مشكلة مقطعة صغيرا',
        nameEn: 'Mixed fruit, finely diced',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db20-3',
        name: 'بسكويت',
        nameEn: 'Biscuits',
        standardAmount: '1 باكو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 باكو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يوضع الجيلي في الماء المغلي مع التقليب الجيد حتى يذوب تماما، وممكن وضع فيه قليل من السكر، ويترك ليبرد.',
        textEn: 'Dissolve the jelly powder in boiling water, stirring until fully dissolved (a little sugar can be added), and let cool.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع في وعاء غويط أو سلطانية باكو البسكويت بعد تكسيره والفواكه المقطعة، ويضاف إليهم الجيلي ويخلطوا جيدا.',
        textEn: 'In a deep bowl, combine the crushed biscuits and diced fruit, add the jelly, and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدخل الثلاجة حتى تتماسك جيدا.',
        textEn: 'Refrigerate until fully set.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تجمَل بالكريم شانتيه أو كراميل سائل أو الكاسترد بجوز الهند.',
        textEn: 'Garnish with Chantilly cream, liquid caramel, or custard with coconut.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 3,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'جيلي بالفواكه والبسكويت',
        ingredients: ['علبة جيلي', 'فواكه مشكلة ومقطعة صغيرا', 'باكو بسكويت'],
        instructions: ['يوضع الجيلي في الماء المغلي مع التقليب الجيد حتى يذوب تماما وممكن وضع فيه قليل من السكر ويترك ليبرد.', 'يوضع في وعاء غويط أو سلطانية باكو البسكوت بعد تكسيره والفواكه المقطعة ويضاف إليهم الجيلي ويخلطوا جيدا.', 'تدخل الثلاجة حتى تتماسك جيدا.', 'تجمَل بالكريم شانتيه أو كراميل سائل أو الكستر بالجوز هند.']
      }
    }
  },
  {
    id: 'des-20',
    title: 'البودنج',
    titleEn: 'Chocolate Pudding with Biscuit Base',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db21-1',
        name: 'لبن كبير',
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
        id: 'db21-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db21-3',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '4 ملاعق',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 ملاعق'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db21-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db21-5',
        name: 'شيكولاته مبشورة أو كاكاو',
        nameEn: 'Grated chocolate, or cocoa powder',
        standardAmount: '1 ملعقة كبيرة شيكولاتة أو 2 ملعقة كاكاو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة شيكولاتة أو 2 ملعقة كاكاو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db21-6',
        name: 'بسكويت',
        nameEn: 'Biscuits',
        standardAmount: 'حسب الرغبة',
        category: 'grain_starch',
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
        text: 'نحضر كاسات أو سلاطين صغيرة مبللة فقط بالماء.',
        textEn: 'Rinse small cups or bowls with water only.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يكسَر بعض البسكويت حسب الرغبة ويوضع في القاع.',
        textEn: 'Crush some biscuits and place them in the base of each cup.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يذاب الكورن فلاور في حوالي نصف كوب لبن بارد، ويوضع اللبن الباقي على درجة حرارة متوسطة ويحلي بالسكر حتى الغليان.',
        textEn: 'Dissolve the cornflour in half a cup of cold milk; heat the remaining milk with sugar over medium heat until it boils.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تذاب الشيكولاته أو الكاكاو في اللبن المحلي بالسكر.',
        textEn: 'Dissolve the chocolate or cocoa in the sweetened milk.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تؤخذ حوالي كبشة كبيرة من اللبن المغلي وتسكب على مزيج الكورن فلاور واللبن حتى يسهل خلطه ويقلب جيدا، ثم يصب هذا الخليط على بقية اللبن المغلي مع التقليب الجيد بعد رفعه من الموقد.',
        textEn: 'Temper the cornflour mixture with a ladleful of hot milk, then pour it all back into the rest of the milk, off the heat, stirring well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يعاد الخليط على درجة حرارة هادئة لمدة 3 دقائق تقريبا مع التقليب المستمر.',
        textEn: 'Return to low heat for about 3 minutes, stirring constantly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تضاف الفانيليا ثم تصب المهلبية فوق البسكويت.',
        textEn: 'Add the vanilla, then pour the mixture over the biscuits.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'بعد أن تبرد نضع فوقها شيكولاته مبشورة أو مقطعة صغيرا. يمكن أيضا أن يرش السطح بالمكسرات والزبيب وجوز الهند.',
        textEn: 'Once cooled, top with grated or finely chopped chocolate; nuts, raisins and coconut can also be sprinkled on top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'البودنج',
        ingredients: ['2 كوب لبن كبير', 'سكر للتحلية', '4 ملاعق كورن فلاور أوكستر أو نشا', 'قليل من الفانيليا', '1 ملعقة كبيرة من شيكولاته مبشورة أو 2 ملعقة كبيرة كاكاو', 'بسكويت'],
        instructions: ['نحضر كاسات أو سلاطين صغيرة مبللة فقط بالماء.', 'يكسَر بعض البسكويت حسب الرغبة ويوضع في القاع.', 'يذاب الكورن فلاور في حوالي ½ كوب لبن بارد.', 'يوضع اللبن الباقي على درجة حرارة متوسطة ويحلي بالسكر حتى الغليان.', 'تذاب الشيكولاته أو الكاكاو في اللبن المحلي بالسكر.', 'تؤخذ حوالي كبشه كبيرة من اللبن المغلي وتسكب على مزيج الكورن فلاور واللبن حتى يسهل خلطه ويقلب جيدا.', 'يصب هذا الخليط على بقية اللبن المغلي مع التقليب الجيد بعد رفعه من البوتاجاز.', 'يعاد الخليط على درجة حرارة هادئة لمدة 3 دقائق تقريبا مع التقليب المستمر.', 'تضاف الفانيليا ثم تصب المهلبية فوق البسكويت.', 'بعد أن تبرد نضع فوقها شيكولاته مبشورة أو مقطعة صغيرا .', 'يمكن ايضا أن يرش السطح بالمكسرات والزبيب و جوز الهند.']
      }
    }
  },
  {
    id: 'des-21',
    title: 'بودنح هندي',
    titleEn: 'Indian-Style Cornmeal Pudding with Molasses',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '2 ساعة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db22-1',
        name: 'دقيق ذرة',
        nameEn: 'Cornmeal',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db22-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db22-3',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '2 كوب + 1/2 كوب للوجه',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب + 1/2 كوب للوجه'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db22-4',
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
        id: 'db22-5',
        name: 'عسل أسود',
        nameEn: 'Black molasses',
        standardAmount: '1/4 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db22-6',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1/4 ملعقة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/4 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db22-7',
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
        id: 'db22-8',
        name: 'فانيليا',
        nameEn: 'Vanilla',
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
        text: 'يخلط الدقيق بقليل من اللبن جيدا.',
        textEn: 'Mix the cornmeal well with a little milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع اللبن في إناء على درجة حرارة هادئة لتدفئته، ثم نسكب خليط الدقيق باللبن على بقية اللبن ونقلبه لمدة 5 دقائق.',
        textEn: 'Warm the rest of the milk gently, then whisk in the cornmeal mixture, stirring for 5 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع الخليط ونضيف له الزبدة والعسل والسكر والبيكينج باودر ويقلب جيدا حتى تسيح الزبدة تماما.',
        textEn: 'Remove from the heat and stir in the butter, molasses, sugar and baking powder until the butter fully melts.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تضرب البيضة مع الفانيليا ثم تسكب على البودنج (الخليط).',
        textEn: 'Beat the egg with the vanilla and stir into the pudding mixture.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن قالب بايركس صغير بالزبدة ويوضع فيه الخليط ويصب اللبن على الوجه.',
        textEn: 'Butter a small Pyrex dish, pour in the mixture, and pour the extra milk over the top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يوضع في حمام ماء ساخن في صينية كبيرة حتى منتصفها في فرن هادئ جدا، مع مراعاة زيادة الماء إذا نقص في الصينية.',
        textEn: 'Place in a water bath in a large tray, halfway up the dish, in a very low oven, topping up the water as needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يستمر في الفرن حوالي ساعتين حتى يحمر الوجه.',
        textEn: 'Bake for about 2 hours until golden on top.',
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
        title: 'بودنح هندي',
        ingredients: ['1 كوب دقيق ذرة', '½ كوب سكر', '2 كوب لبن', '1 بيضة', '¼ كوب عسل أسود', '¼ ملعقة بيكينج باودر', 'زبدة', '½ كوب لبن للوجه', 'فانيليا'],
        instructions: ['يخلط الدقيق بقليل من اللبن جيدا.', 'يوضع اللبن في إناء على درجة حرارة هادئة لتدفئته ثم نسكب خليط الدقيق باللبن على بقية اللبن ونقلبه لمدة 5 دقائق.', 'يرفع الخليط ونضيف له الزبدة والعسل والسكر إلى بيكينج باودر ويقلب جيدا حتى تسيح الزبدة تماما.', 'تضرب البيضة مع الفانيليا ثم تسكب على البوذنج (الخليط).', 'تدهن قالب بايركس صغير بالزبدة ويوضع فيه الخليط ويصب اللبن على الوجه.', 'يوضع في حمام ماء ساخن في صينية كبيرة حتى منتصفها في فرن هادئ جدا مع مراعاة زيادة الماء إذا نقص في الصينية.', 'يستمر في الفرن حوالي ساعتين حتى يحمر الوجه.', 'ممكن تجميله حسب الذوق.']
      }
    }
  },
  {
    id: 'des-22',
    title: 'مهلبية البسبوسة',
    titleEn: 'Basbousa-Semolina Pudding with Coconut',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db23-1',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '3 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db23-2',
        name: 'دقيق بسبوسة (سميد)',
        nameEn: 'Semolina flour',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db23-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db23-4',
        name: 'فانيليا أو مستكة',
        nameEn: 'Vanilla, or mastic',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db23-5',
        name: 'جوز هند',
        nameEn: 'Coconut',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db23-6',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db23-7',
        name: 'كريم شانتيه',
        nameEn: 'Chantilly cream',
        standardAmount: 'للتزيين',
        category: 'dairy_fat',
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
        text: 'يذاب الكورن فلاور في قليل من اللبن البارد.',
        textEn: 'Dissolve the cornflour in a little cold milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن المتبقي ثم نضيف جزءا بسيطا منه على مزيج الكورن فلاور واللبن ويقلَبوا، ثم نسكبه على اللبن المغلي مع التقليب المستمر ثم إضافة جوز الهند.',
        textEn: 'Boil the remaining milk, temper the cornflour mixture with a little of it, then stir it all back into the boiling milk and add the coconut.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضيف دقيق البسبوسة (السميد) على الخليط مع التقليب المستمر والسريع بمضرب البيض السلكي على درجة حرارة هادئة لمدة 10 دقائق حتى يصبح القوام سميكا نوعا ما.',
        textEn: 'Whisk in the semolina flour, whisking constantly over low heat for 10 minutes until it thickens somewhat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف كمية السكر والفانيليا أو المستكة مع الاستمرار في التقليب حتى ذوبان السكر، وبعد أن تبرد يدخل الثلاجة.',
        textEn: 'Add the sugar and vanilla or mastic, stirring until the sugar dissolves, then let cool and refrigerate.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نحضر بايركس لوضع المهلبية بداخله وتجمَل بالكريم شانتيه وعليه موز أو فراولة.',
        textEn: 'Transfer to a Pyrex dish and garnish with Chantilly cream and banana or strawberries.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يمكن تجميلها أيضا بالمكسرات والزبيب وجوز الهند.',
        textEn: 'It can also be garnished with nuts, raisins and coconut.',
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
        title: 'مهلبية البسبوسة',
        ingredients: ['3 كوب لبن', '½ كوب دقيق بسبوسة', '½ كوب سكر', 'فانيليا أو مستكة', 'كمية من الجوز هند', '2 ملعقة كبيرة كورن فلاور أو نشا', 'كريم شانتيه'],
        instructions: ['يذاب الكورن فلاور في قليل من اللبن البارد.', 'يغلي اللبن المتبقي ثم نضيف جزء بسيط منه على مزيج الكورن فلاور واللبن ويقلَبوا ثم نسكبه على اللبن المغلي مع التقليب المستمر ثم إضافة جوز الهند.', 'نضيف دقيق البسبوسة (السميد) على الخليط مع التقليب المستمر والسريع بمضرب البيض السلك على درجة حرارة هادئة لمدة 10 دقائق حتى يصبح القوام سميكا نوعا ما.', 'نضيف كمية السكر والفانيليا أو المستكة مع الاستمرار في التقليب حتى ذوبان السكر وبعد أن تبرد يدخل الثلاجة.', 'نحضر بايركس لوضع المهلبية بداخله وتجمَل بالكريم شانتيه وعليه موز أو فراولة', 'يمكن تجميلها ايضا بالمكسرات والزبيب وجوز الهند.']
      }
    }
  },
  {
    id: 'des-23',
    title: 'مهلبية البسبوسة بالكراميل',
    titleEn: 'Basbousa-Semolina Pudding over Caramel',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '20 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db24-1',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '3 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db24-2',
        name: 'دقيق بسبوسة (سميد)',
        nameEn: 'Semolina flour',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db24-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db24-4',
        name: 'فانيليا أو مستكة',
        nameEn: 'Vanilla, or mastic',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db24-5',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db24-6',
        name: 'كراميل (انظري الوصفة أدناه)',
        nameEn: 'Caramel (see recipe below)',
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
        text: 'يذاب الكورن فلاور في قليل من اللبن البارد.',
        textEn: 'Dissolve the cornflour in a little cold milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن المتبقي ثم نضيف جزءا بسيطا منه على مزيج الكورن فلاور واللبن ويقلَبوا، ثم نسكبه على اللبن المغلي مع التقليب المستمر.',
        textEn: 'Boil the remaining milk, temper the cornflour mixture with a little of it, then stir it all back into the boiling milk.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضيف دقيق البسبوسة (السميد) على الخليط مع التقليب المستمر والسريع بمضرب البيض السلكي على درجة حرارة هادئة لمدة 10 دقائق حتى يصبح القوام سميكا نوعا ما.',
        textEn: 'Whisk in the semolina flour, whisking constantly over low heat for 10 minutes until it thickens somewhat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف كمية السكر والفانيليا أو المستكة مع الاستمرار في التقليب حتى ذوبان السكر.',
        textEn: 'Add the sugar and vanilla or mastic, stirring until the sugar dissolves.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نحضر البايركس ونضع فيه الكراملة الباردة ثم توضع فوقها مهلبية البسبوسة، ثم توضع في الثلاجة.',
        textEn: 'Pour the cooled caramel into a Pyrex dish, top with the semolina pudding, and refrigerate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'عند التقديم حسب الرغبة ممكن قلب المهلبية في طبق التقديم أو تركه في البايركس كما هو.',
        textEn: 'To serve, either turn out onto a serving plate or leave it in the Pyrex dish.',
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
        title: 'مهلبية البسبوسة بالكراميل',
        ingredients: ['3 كوب لبن', '½ كوب دقيق بسبوسة', '½ كوب سكر', 'فانيليا أو مستكة', '2 ملعقة كبيرة كورن فلاور أو نشا', 'كراميل'],
        instructions: ['يذاب الكورن فلاور في قليل من اللبن البارد.', 'يغلي اللبن المتبقي ثم نضيف جزء بسيط منه على مزيج الكورن فلاور واللبن ويقلَبوا ثم نسكبه على اللبن المغلي مع التقليب المستمر ثم إضافة جوز الهند.', 'نضيف دقيق البسبوسة (السميد) على الخليط مع التقليب المستمر والسريع بمضرب البيض السلك على درجة حرارة هادئة لمدة 10 دقائق حتى يصبح القوام سميكا نوعا ما.', 'نضيف كمية السكر والفانيليا أو المستكة مع الاستمرار في التقليب حتى ذوبان السكر.', 'نحضر البايركس ونضع فيه الكراملة الباردة ثم توضع فوقها مهلبية البسبوسة ثم توضع في الثلاجة.', 'عند التقديم حسب الرغبة ممكن قلب المهلبية في طبق التقديم أو تركه في البايركس كما هو.']
      }
    }
  },
  {
    id: 'des-24',
    title: 'عمل الكراميل',
    titleEn: 'Simple Sugar Caramel (for Puddings)',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '2 دقائق',
    cookTime: '10 دقائق',
    servings: 'يكفي لطاجن حلوى واحد',
    masterIngredients: [
      {
        id: 'db25-1',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '8 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '8 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db25-2',
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
        id: 'db25-3',
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
        text: 'يذاب السكر مع الماء على درجة حرارة هادئة.',
        textEn: 'Dissolve the sugar in the water over low heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يعصر الليمون حتى يحمر اللون وتصبح كراميل.',
        textEn: 'Add the lemon juice and continue cooking until it turns amber and becomes caramel.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يمكن إضافة أي كمية أخرى من الماء حتى لا تجف الكراميل.',
        textEn: 'A little more water can be added so the caramel doesn\'t dry out.',
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
        title: 'عمل الكراميل',
        ingredients: ['2 ملعقة كبيرة سكر', 'ملعقة كبيرة ماء', '½ ملعقة صغيرة  ليمون'],
        instructions: ['يحرق السكر مع الماء والليمون على درجة حرارة هادئة حتى تصبح كراميلة وتترك حتى تبرد تماما وتجمد']
      }
    }
  },
  {
    id: 'des-25',
    title: 'الأرز باللبن',
    titleEn: 'Egyptian Rice Pudding (Roz bel Laban)',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db26-1',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db26-2',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1/2 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db26-3',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '1 ملعقة كبيرة أو أكثر',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة أو أكثر'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db26-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db26-5',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db26-6',
        name: 'فاكهة أو مكسرات أو قشدة أو كريم شانتيه أو آيس كريم',
        nameEn: 'Fruit, nuts, clotted cream, Chantilly cream, or ice cream, for garnish',
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
        text: 'يسلق الأرز بعد غسله في إناء به ماء مغلي، ثم يترك حتى ينضج بحيث لا ينهري وعلى درجة حرارة هادئة.',
        textEn: 'Wash the rice and boil it in water over low heat until cooked but not falling apart.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يصفى من الماء تماما في المصفاة.',
        textEn: 'Drain thoroughly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يغلي اللبن المحلي بالسكر، ثم نضع الأرز فيه وتخفض درجة الحرارة مع التقليب حوالي 5 دقائق حتى يصير سمكه جيدا وغير سائل، ونرفعه من فوق الموقد.',
        textEn: 'Boil the sweetened milk, add the rice, and lower the heat, stirring for about 5 minutes until it thickens nicely, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'في حالة إن كان القوام لا زال سائلا تخلط ملعقة كورن فلاور في قليل من اللبن البارد ثم نسكبه على خليط الأرز باللبن ونرفعه فوق الموقد ثانية مع التقليب المستمر حتى يأخذ القوام المضبوط.',
        textEn: 'If still too thin, mix a tablespoon of cornflour into a little cold milk, stir it into the pudding, and return to the heat briefly, stirring, until properly thickened.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 5,
        text: 'تضاف الفانيليا ويرفع الخليط من فوق الموقد.',
        textEn: 'Add the vanilla and remove from the heat.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تحضر كاسات أو سلاطين مبللة بالماء فقط وتملأ بالخليط حتى تبرد.',
        textEn: 'Fill cups or bowls rinsed only with water, and let cool.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تجمَل بالمكسرات والزبيب وجوز الهند أو بوضع القشدة أو الكريم شانتيه على الوجه، ويمكن أن توضع الفواكه المقطعة وخاصة الموز فوق القشدة أو الكريمة أو بوضع آيس كريم.',
        textEn: 'Garnish with nuts, raisins and coconut, or top with clotted cream or Chantilly cream; sliced fruit — especially banana — or a scoop of ice cream can be added too.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'الأرز باللبن',
        ingredients: ['½ كوب أرز', '½ كيلو لبن', '1 ملعقة كبيرة أو أكثر كورن فلاور أو نشا', 'فانيليا', 'سكر للتحلية', 'فاكهة أو مكسرات أو قشدة أو كريم شانتيه أو أيس كريم'],
        instructions: ['يسلق الأرز بعد غسله في إناء به ماء مغلي ثم يترك حتى ينضج بحيث لا ينهري وعلى درجة حرارة هادئة.', 'يصفى من الماء تماما في المصفاة.', 'يغلي اللبن المحلي بالسكر ثم نضع الأرز فيه وتخفض درجة الحرارة مع التقليب حوالي 5 دقائق حتى يصير سمكه جيدا وغير سائل ونرفعه من فوق البوتاجاز.', 'في حالة إن كان السمك لا زال سائلا تخلط ملعقة كورن فلاور في قليل من اللبن البارد ثم نسكبه على خليط الأرز باللبن ونرفعه فوق البوتاجاز ثانية مع التقليب المستمر حتى يأخذ القوام المضبوط.', 'تضاف الفانيليا ويرفع الخليط من فوق البوتاجاز.', 'تحضر كاسات أو سلاطين مبللة بالماء فقط وتملئ بالخليط حتى تبرد.', 'تجمَل بالمكسرات والزبيب وجوز الهند أو بوضع القشدة أو الكريم شانتيه على الوجه.', 'يمكن أن توضع الفواكه المقطعة وخاصة الموز فوق القشدة أو الكريمة أو بوضع أيس كريم.']
      }
    }
  },
  {
    id: 'des-26',
    title: 'الأرز باللبن بالمستكة',
    titleEn: 'Slow-Cooked Rice Pudding with Mastic',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '1 ساعة (+نقع)',
    cookTime: '30 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'db27-1',
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
        id: 'db27-2',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '5 أكواب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '5 أكواب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db27-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '10-12 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '10-12 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db27-4',
        name: 'فانيليا ومستكة',
        nameEn: 'Vanilla and mastic',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db27-5',
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
        id: 'db27-6',
        name: 'قشدة ومكسرات وكريم شانتيه وآيس كريم',
        nameEn: 'Clotted cream, nuts, Chantilly cream and ice cream, for garnish',
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
        text: 'ينقع الأرز حوالي ثلاثة أرباع الساعة ثم يصفى من الماء.',
        textEn: 'Soak the rice for about 45 minutes, then drain.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع في الإناء قطعة من الزبد تسخن فقط، ثم نسكب فيه الأرز ويقلب في الزبدة حتى يتشربها، ثم نسكب عليه ماء ساخنا لتغطيته فقط مع تخفيض درجة الحرارة، ثم يغطى حتى يتشرب الماء.',
        textEn: 'Melt the butter, add the rice and stir to coat, then cover with just enough hot water, lower the heat, and cover until absorbed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نبدأ في سكب 3 أكواب لبن فقط على الأرز مع تحليته بالسكر والفانيليا والمستكة.',
        textEn: 'Add just 3 cups of the milk, sweetened with sugar, vanilla and mastic.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تخفض درجة الحرارة ويقلب بين الحين والآخر لمدة 10 دقائق مع جعل غطاء الإناء غير مغطى تماما.',
        textEn: 'Lower the heat and stir occasionally for 10 minutes, keeping the pot only partially covered.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نضيف الكوبين من اللبن إلى الأرز مع تغطية الإناء كاملا في حالة عدم نضج الأرز تماما مع التقليب بين الحين والآخر، ولا نجعل الأرز يتشرب اللبن تماما.',
        textEn: 'Add the remaining 2 cups of milk, cover fully if the rice isn\'t quite done, stirring occasionally, without letting the rice absorb all the milk.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد أن يبرد يوضع في الثلاجة.',
        textEn: 'Once cooled, refrigerate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يجمَل بجوز الهند والزبيب والمكسرات أو بالكريم شانتيه أو الآيس كريم.',
        textEn: 'Garnish with coconut, raisins and nuts, or with Chantilly cream or ice cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'الأرز باللبن بالمستكة',
        ingredients: ['1 كوب أرز منقوع', '5 أكواب لبن', '10 : 12 ملعقة كبيرة سكر', 'فانيليا', 'مستكة', 'قشدة', 'مكسرات', 'كريم شانتيه', 'آيس كريم'],
        instructions: ['ينقع الأرز حوالي ¾ ساعة ثم يصفى من الماء.', 'نضع في الإناء قطعة من الزبد تسخن فقط ثم نسكب فيه الأرز ويقلب في الزبدة حتى يتشربها ثم نسكب عليه ماء ساخن لتغطيته فقط مع تخفيض درجة الحرارة ثم يغطى حتى يتشرب الماء.', 'يسخن اللبن أو يترك باردا.', 'نبدأ في سكب 3 أكواب لبن فقط على الأرز مع تحليته بالسكر والفانيليا والمستكة.', 'تخفض درجة الحرارة ويقلب بين الحين والآخر لمدة 10 دقائق مع جعل غطاء الإناء غير مغطى تماما.', 'نضيف الكوبين من اللبن إلى الأرز مع تغطية الإناء كاملاً في حالة عدم نضج الأرز  تماما مع التقليب بين الحين والآخر  ولا نجعل الأرز يتشرب اللبن تماما.', 'بعد أن يبرد يوضع في الثلاجة.', 'يجمَل بالجوز هند  والزبيب والمكسرات أو بالكريم شانتيه أو الآيس كريم.']
      }
    }
  },
  {
    id: 'des-27',
    title: 'الأرز بلبن مع الفواكه المجففة',
    titleEn: 'Rice Pudding with Dried Fruit and Orange',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '40 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'db28-1',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1/2 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db28-2',
        name: 'أرز مسلوق ومصفى',
        nameEn: 'Boiled, drained rice',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db28-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db28-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db28-5',
        name: 'عصير برتقال',
        nameEn: 'Orange juice',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db28-6',
        name: 'بشر برتقالة',
        nameEn: 'Orange zest',
        standardAmount: '1 برتقالة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 برتقالة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db28-7',
        name: 'فواكه مجففة (مشمشية، قراصيا، تين، زبيب)',
        nameEn: 'Dried fruit (apricots, prunes, figs, raisins)',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db28-8',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'لتغطية الفاكهة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'لتغطية الفاكهة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسلق الأرز بعد غسله في إناء به ماء مغلي، ثم يترك حتى ينضج بحيث لا ينهري وعلى درجة حرارة هادئة، ثم يصفى من الماء تماما.',
        textEn: 'Wash and boil the rice over low heat until cooked but not falling apart, then drain thoroughly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن المحلي بالسكر ثم نضع الأرز فيه وتخفض درجة الحرارة مع التقليب حوالي 5 دقائق حتى يصير سمكه جيدا وغير سائل ونرفعه من فوق الموقد.',
        textEn: 'Boil the sweetened milk, add the rice, and lower the heat, stirring for about 5 minutes until thickened, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف الفانيليا ويرفع الخليط من فوق الموقد، وبعد أن يبرد نضيف له بشر البرتقالة.',
        textEn: 'Add the vanilla, remove from the heat, and once cooled, stir in the orange zest.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'توضع في إناء كمية من الماء كافية لتغطية الفواكه المجففة ويضاف السكر.',
        textEn: 'Cover the dried fruit with enough water in a pot and add sugar.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تترك على درجة حرارة هادئة مع إضافة الماء كلما احتاج الأمر.',
        textEn: 'Simmer over low heat, adding water as needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'وقبل إتمام النضج نضيف له عصير البرتقال حتى يتشرب تماما، ثم يترك حتى يتم نضجها تماما ويكون السكر مضبوطا.',
        textEn: 'Just before it finishes cooking, add the orange juice until fully absorbed, then finish cooking, adjusting the sweetness.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'نحضر بايركس ونرص الفواكه في القاع ثم نسكب عليها الأرز باللبن، وبعد أن تبرد توضع في الثلاجة.',
        textEn: 'Arrange the fruit in the base of a Pyrex dish, top with the rice pudding, and once cooled, refrigerate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'نحضر طبق التقديم ويقلب فيه الخليط على الوجه الآخر بحيث تكون الفواكه على الوجه.',
        textEn: 'Invert onto the serving plate so the fruit ends up on top.',
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
        title: 'الأرز بلبن مع الفواكه المجففة',
        ingredients: ['½ كيلو لبن', 'ماء', '½ كوب أرز مسلوق ومصفى', 'سكر للتحلية', 'فانيليا', '1 كوب عصير برتقال', 'بشر برتقالة', '1 كوب فواكه مجففة (مشمشية', 'قراصيا', 'تين', 'زبيب)'],
        instructions: ['يسلق الأرز بعد غسله في إناء به ماء مغلي ثم يترك حتى ينضج بحيث لا ينهري وعلى درجة حرارة هادئة.', 'يصفى من الماء تماما في المصفاة.', 'يغلي اللبن المحلي بالسكر ثم نضع الأرز فيه وتخفض درجة الحرارة مع التقليب حوالي 5 دقائق حتى يصير سمكه جيدا وغير سائل ونرفعه من فوق البوتاجاز.', 'تضاف الفانيليا ويرفع الخليط من فوق البوتاجاز.', 'بعد أن يبرد نضيف له بشر البرتقالة.', 'توضع في إناء كمية من الماء كافية لتغطية الفواكه المجففة و يضاف السكر.', 'تترك على درجة حرارة هادئة مع إضافة الماء كلما احتاج الأمر.', 'وقبل إتمام النضج نضيف له عصير البرتقال حتى يتشرب تماما ثم يترك حتى يتم نضجها تماما ويكون السكر مضبوط.', 'نحضر بايركس ونرص الفواكه في القاع ثم نسكب عليها الأرز باللبن وبعد أن تبرد توضع في الثلاجة.', 'نحضر طبق التقديم ويقلب فبه الخليط على الوجه الآخر  بحيث تكون الفواكه على الوجه.']
      }
    }
  },
  {
    id: 'des-28',
    title: 'الأرز بلبن مع الكراميل',
    titleEn: 'Rice Pudding over Caramel',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db29-1',
        name: 'أرز',
        nameEn: 'Rice',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db29-2',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1/2 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db29-3',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '1 ملعقة كبيرة أو أكثر',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة أو أكثر'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db29-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db29-5',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db29-6',
        name: 'كراميل (انظري الوصفة أعلاه)',
        nameEn: 'Caramel (see recipe above)',
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
        text: 'يسلق الأرز بعد غسله في إناء به ماء مغلي، ثم يترك حتى ينضج بحيث لا ينهري وعلى درجة حرارة هادئة، ثم يصفى من الماء تماما.',
        textEn: 'Wash and boil the rice over low heat until cooked but not falling apart, then drain thoroughly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن المحلي بالسكر ثم نضع الأرز فيه وتخفض درجة الحرارة مع التقليب حوالي 5 دقائق حتى يصير سمكه جيدا وغير سائل ونرفعه من فوق الموقد.',
        textEn: 'Boil the sweetened milk, add the rice, and lower the heat, stirring for about 5 minutes until thickened, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف الفانيليا ويرفع الخليط من فوق الموقد.',
        textEn: 'Add the vanilla and remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد أن يبرد نضعه باحتراس فوق الكراميل ثم ندخله الثلاجة.',
        textEn: 'Once cooled, carefully pour it over the caramel and refrigerate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نحضر طبق التقديم ونحرك أطراف الأرز من الجوانب مع الكراميل ثم نسكبه في الطبق.',
        textEn: 'Loosen the edges gently, then invert onto the serving plate.',
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
        title: 'الأرز بلبن مع الكراميل',
        ingredients: ['½ كوب أرز', '½ كيلو لبن', '1 ملعقة كبيرة أو أكثر كورن فلاور أو نشا', 'فانيليا', 'سكر للتحلية', 'كراميل'],
        instructions: ['يسلق الأرز بعد غسله في إناء به ماء مغلي ثم يترك حتى ينضج بحيث لا ينهري وعلى درجة حرارة هادئة.', 'يصفى من الماء تماما في المصفاة.', 'يغلي اللبن المحلي بالسكر ثم نضع الأرز فيه وتخفض درجة الحرارة مع التقليب حوالي 5 دقائق حتى يصير سمكه جيدا وغير سائل ونرفعه من فوق البوتاجاز.', 'تضاف الفانيليا ويرفع الخليط من فوق البوتاجاز.', 'بعد أن يبرد نضعه باحتراس فوق الكراميل ثم ندخله الثلاجة .', 'نحضر طبق التقديم ونحرك حروف الأرز من الجوانب مع الكراميل ثم نسكبه في الطبق.']
      }
    }
  },
  {
    id: 'des-29',
    title: 'الأرز المعمر بالسكر',
    titleEn: 'Baked Sweet Rice Pudding with Clotted Cream',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق (+4 ساعات نقع)',
    cookTime: '35 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db30-1',
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
        id: 'db30-2',
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
        id: 'db30-3',
        name: 'قشدة',
        nameEn: 'Clotted cream',
        standardAmount: 'للوجه',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'للوجه'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db30-4',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1 قطعة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db30-5',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يوضع الأرز في إناء بعد غسله جيدا وتصفيته من الماء.',
        textEn: 'Wash the rice well and drain.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن ويحلي بالسكر حتى يذوب، ثم يسكب على الأرز ويغطى ويرفع من فوق الحرارة ويترك لمدة 4 ساعات.',
        textEn: 'Boil the milk, sweeten with sugar until dissolved, pour over the rice, cover, remove from heat, and let sit for 4 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر بايركس مدهونة بالسمن، ثم نضع فيه الأرز وعليه قشدة على الوجه مع قطعة سمن أو زبد، ثم يدخل الفرن حتى يحمر الوجه.',
        textEn: 'Grease a Pyrex dish with ghee, add the rice, top with clotted cream and a knob of ghee or butter, and bake until golden on top.',
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
        title: 'الأرز المعمر بالسكر',
        ingredients: ['1 كوب أرز', '2 كوب لبن', 'قشدة', 'سمن', 'سكر للتحلية'],
        instructions: ['يوضع الأرز في إناء بعد غسله جيدا وتصفيته من الماء.', 'يغلي اللبن ويحلي بالسكر حتى يذوب ثم يسكب على الأرز ويغطي ويرفع من فوق الحرارة ويترك لمدة 4 ساعات.', 'نحضر بايركس مدهونة بالسمن ثم نضع فيه الأرز وعليه قشدة على الوجه مع قطعة سمن أو زبد ثم يدخل الفرن حتى يحمر الوجه.']
      }
    }
  },
  {
    id: 'des-30',
    title: 'الكريم كراميل',
    titleEn: 'Classic Crème Caramel (Flan)',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '1 ساعة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'db31-1',
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
        id: 'db31-2',
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
        id: 'db31-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '4 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db31-4',
        name: 'فانيليا',
        nameEn: 'Vanilla bean, or vanilla extract',
        standardAmount: '1 ورقة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ورقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db31-5',
        name: 'كراميل (انظري الوصفة أعلاه)',
        nameEn: 'Caramel (see recipe above)',
        standardAmount: 'للقالب',
        category: 'other',
        sourceVariations: {
          doc1: 'للقالب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نضع اللبن مع السكر ويرفع على الموقد حتى يذوب السكر مع الغليان.',
        textEn: 'Heat the milk with the sugar until the sugar dissolves and it comes to a boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البيض مع الفانيليا ثم يخلط باللبن بعد أن يبرد.',
        textEn: 'Whisk the eggs with the vanilla, then whisk into the milk once cooled.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يترك الكراميل حتى يجمد ثم يصب باحتراس فوقه خليط البيض باللبن.',
        textEn: 'Let the caramel set in the mold, then carefully pour the egg-milk mixture over it.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يدخل فرن متوسط الحرارة من ثلاثة أرباع إلى ساعة في حمام مائي عن طريق غلي ماء في صينية إلى نصفها وتدخل الفرن ونضع فوقها القالب أو الإناء حتى النضج.',
        textEn: 'Bake in a medium oven for 45 minutes to an hour in a water bath — a tray of hot water halfway up the mold.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'لاختبار النضج يغمس نصل سكينة في سطح الخليط، فإن لم يلتصق بها تكون قد نضجت.',
        textEn: 'To test doneness, insert a knife blade into the center; if it comes out clean, it\'s done.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 6,
        text: 'تدخل الثلاجة حتى تبرد.',
        textEn: 'Refrigerate until fully chilled.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'نحضر طبق التقديم المستدير ونحاول زحزحة جوانب الكريم كراميل حتى تهتز، ثم تسكب بوضع الطبق فوقها.',
        textEn: 'Loosen the edges gently until it shifts, then invert onto a round serving plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يمكن عمل حمام ماء ساخن ويوضع عليه قالب الكريمة حتى تتحرك ثم تقلب.',
        textEn: 'Dipping the mold briefly in hot water first can help it release before turning out.',
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
        title: 'الكريم كراميل',
        ingredients: ['5 : 6 بيضات', '2 كوب لبن', '4 ملعقة كبيرة سكر', 'ورقة فانيليا'],
        instructions: ['نضع اللبن مع السكر ويرفع على البوتاجاز حتى يذوب السكر مع الغليان.', 'يضرب البيض مع الفانيليا ثم يخلط باللبن بعد أن يبرد.', 'يترك الكراميل حتى يجمد ثم يصب باحتراس فوقه خليط البيض باللبن.', 'يدخل فرن متوسط الحرارة من ¾ : 1 ساعة في حمام مائي عن طريق غلي ماء في صينية إلى نصفها وتدخل الفرن ونضع فوقها القالب أو الإناء حتى النضج.', 'لاختبار النضج يغمس نصل سكينة في سطح الخليط فإن لم يلتصق بها تكون قد نضجت.', 'تدخل الثلاجة حتى تبرد.', 'نحضر طبق التقديم المستدير ونحاول زحزحة جوانب الكريم كراميل حتى تهتز ثم تسكب بوضع الطبق فوقها.', 'يمكن عمل حمام ماء ساخن ويوضع عليه قالب الكريمة حتى تتحرك ثم تقلب.']
      }
    }
  },
  {
    id: 'des-31',
    title: 'البليلة',
    titleEn: 'Balila — Sweet Boiled Wheat with Milk',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'سلق',
    prepTime: '6 ساعات (نقع)',
    cookTime: '1 ساعة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db32-1',
        name: 'قمح',
        nameEn: 'Whole wheat berries',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db32-2',
        name: 'ماء للتغطية',
        nameEn: 'Water, to cover',
        standardAmount: 'حسب الحاجة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db32-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db32-4',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db32-5',
        name: 'زبد',
        nameEn: 'Butter',
        standardAmount: '1 قطعة صغيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'ينقى القمح ويغسل جيدا، ثم ينقع في إناء به ماء حوالي 6 ساعات أو أكثر، ثم يصفى من ماء النقع.',
        textEn: 'Sort and wash the wheat, soak in water for at least 6 hours, then drain.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع في إناء به ماء وبعد الغليان تخفض درجة الحرارة حتى ينضج القمح تماما مع إضافة الماء كلما احتاج.',
        textEn: 'Boil in fresh water, then lower the heat and simmer until fully tender, topping up water as needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحلى بالسكر وتقدم ساخنة.',
        textEn: 'Sweeten with sugar and serve hot.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يمكن أيضا أن تحلى بالسكر ويضاف إليها اللبن الساخن مع قطعة الزبد.',
        textEn: 'It can also be sweetened and served with hot milk and a knob of butter.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'البليلة',
        ingredients: ['½ كيلو قمح', 'ماء للتغطية', 'سكر للتحلية', 'مقدار من اللبن', 'قطعة صغيرة من الزبد'],
        instructions: ['ينقى القمح ويغسل جيدا ثم ينقع في إناء به ماء حوالي 6 ساعات أو أكثر ثم يصفى من ماء النقع.', 'يوضع في إناء به ماء وبعد الغليان تخفض درجة الحرارة حتى ينضج القمح تماما مع إضافة الماء كلما احتاج.', 'تحلى بالسكر وتقدم ساخنة.', 'يمكن ايضا أن تحلى بالسكر ويضاف إليها اللبن الساخن مع قطعة الزبد.']
      }
    }
  },
  {
    id: 'des-32',
    title: 'العاشوراء',
    titleEn: 'Ashura — Sweet Wheat Pudding with Nuts and Cinnamon',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'سلق',
    prepTime: '6 ساعات (نقع)',
    cookTime: '1.5 ساعة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db33-1',
        name: 'قمح',
        nameEn: 'Whole wheat berries',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db33-2',
        name: 'ماء للتغطية',
        nameEn: 'Water, to cover',
        standardAmount: 'حسب الحاجة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db33-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/4 كيلو أو حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/4 كيلو أو حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db33-4',
        name: 'نشا أو كورن فلاور',
        nameEn: 'Cornstarch or cornflour',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db33-5',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '2 كوب حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db33-6',
        name: 'مكسرات وزبيب وجوز هند',
        nameEn: 'Nuts, raisins and coconut',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db33-7',
        name: 'فانيليا وقرفة',
        nameEn: 'Vanilla and cinnamon',
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
        text: 'ينقى القمح ويغسل جيدا، ثم ينقع في إناء به ماء حوالي 6 ساعات أو أكثر، ثم يصفى من ماء النقع.',
        textEn: 'Sort and wash the wheat, soak in water for at least 6 hours, then drain.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع في إناء به ماء وبعد الغليان تخفض درجة الحرارة حتى ينضج القمح تماما مع إضافة الماء كلما احتاج.',
        textEn: 'Boil in fresh water, then lower the heat and simmer until fully tender, topping up water as needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يمزج النشا أو الكورن فلاور جيدا بقليل من الماء ثم يضاف للخليط مع التقليب المستمر، ويترك على درجة حرارة متوسطة حتى يغلي لمدة 5 دقائق مع إضافة الماء أو اللبن إذا احتاج، مع ملاحظة أن تكون العاشوراء سميكة.',
        textEn: 'Mix the cornstarch with a little water, stir into the wheat, and simmer over medium heat for 5 minutes, adding water or milk as needed, keeping it thick.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف إلى الخليط الفانيليا والمكسرات والزبيب.',
        textEn: 'Stir in the vanilla, nuts and raisins.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تغرف في كاسات أو سلاطين مبللة بالماء وتترك حتى تبرد تماما.',
        textEn: 'Ladle into cups or bowls rinsed with water and let cool completely.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يجمل السطح بمسحوق القرفة مع المكسرات المفرية وجوز الهند وتقدم باردة.',
        textEn: 'Garnish the top with cinnamon, chopped nuts and coconut, and serve cold.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يمكن أيضا بعد طهو العاشوراء ونضجها أن تترك حتى تبرد، ثم تضرب في الخلاط وتصفى للتخلص من القشر ثم تجمَل.',
        textEn: 'Alternatively, once cooked and cooled, it can be blended smooth and strained to remove the husks before garnishing.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'نسخة مصفاة ناعمة',
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
        title: 'العاشوراء',
        ingredients: ['½ كيلو قمح', 'ماء للتغطية', '¼ كيلو سكر أو حسب الرغبة', '2 ملعقة كبيرة نشا أو كورن فلاور', '2 كوب لبن حسب الرغبة', 'كمية من المكسرات والزبيب وجوز الهند', 'فانيليا', 'قرفه'],
        instructions: ['ينقى القمح ويغسل جيدا ثم ينقع في إناء به ماء حوالي 6 ساعات أو أكثر ثم يصفى من ماء النقع.', 'يوضع في إناء به ماء وبعد الغليان تخفض درجة الحرارة حتى ينضج القمح تماما مع إضافة الماء كلما احتاج.', 'يمزج النشا أو الكورن فلاور جيدا بقليل من الماء ثم يضاف للخليط مع التقليب المستمر ويترك على درجة حرارة متوسطة حتى يغلى لمدة 5 دقائق مع إضافة الماء أو اللبن إذا احتاج مع ملاحظة أن تكون العاشوراء سميكة.', 'يضاف إلى الخليط الفانيليا والمكسرات والزبيب.', 'تغرف في كاسات أو سلاطين مبللة بالماء وتترك حتى تبرد تماما.', 'يجمل السطح بمسحوق القرفة مع المكسرات المفرية وجوز الهند وتقدم باردة.', 'يمكن ايضا بعد طهو العاشوراء ونضجها أن تترك حتى تبرد ثم تضرب في الخلاط وتصفى للتخلص من القشر ثم تجمَل.']
      }
    }
  },
  {
    id: 'des-33',
    title: 'قمر الدين المطهو',
    titleEn: 'Cooked Apricot "Qamar al-Din" Pudding',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة (+نقع)',
    cookTime: '15 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db34-1',
        name: 'قمر الدين مصفى',
        nameEn: 'Strained apricot paste ("qamar al-din")',
        standardAmount: '2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db34-2',
        name: 'نشا',
        nameEn: 'Cornstarch',
        standardAmount: '2 ملعقة كبيرة مسطحة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة مسطحة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db34-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db34-4',
        name: 'زبيب ومكسرات وجوز هند',
        nameEn: 'Raisins, nuts and coconut',
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
        text: 'يقطع قمر الدين وينقع في ماء ساخن لمدة طويلة حتى يطرى ويضرب في الخلاط.',
        textEn: 'Cut up the apricot paste and soak in hot water for a long time until soft, then blend smooth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر إناء ونضع فيه القمر الدين المصفى مع تحليته بالسكر ويقلب حتى الذوبان، ثم يترك ليغلي على درجة حرارة هادئة.',
        textEn: 'Heat the strained apricot mixture with sugar, stirring until dissolved, and bring to a gentle boil.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يمزج النشا بقليل من الماء البارد ثم يضاف إلى القمر الدين المغلي مع التقليب المستمر على درجة حرارة هادئة ويترك لمدة 5 دقائق حتى يصير سمكه مثل المهلبية.',
        textEn: 'Mix the cornstarch with a little cold water, stir into the boiling apricot mixture, and simmer for 5 minutes until it thickens like mahalabia.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر الكاسات أو السلاطين المبللة بالماء ونضع فيها القمر الدين مع تجميل الوجه بالمكسرات والزبيب وجوز الهند.',
        textEn: 'Pour into cups or bowls rinsed with water and garnish with nuts, raisins and coconut.',
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
        title: 'قمر الدين المطهو',
        ingredients: ['2 كوب قمر الدين مصفى', '2 ملعقة كبيرة مسطحة من النشا', 'سكر للتحلية', 'مقدار من الزبيب والمكسرات والجوز هند'],
        instructions: ['يقطع قمر الدين وينقع في ماء ساخن لمدة طويلة حتى يطرى و يضرب في الخلاط.', 'نحضر إناء ونضع فيه القمر الدين المصفى مع تحليته بالسكر ويقلب حتى الذوبان ثم يترك ليغلى على درجة حرارة هادئة.', 'يمزج النشا بقليل من الماء البارد ثم يضاف إلى القمر الدين المغلي مع التقليب المستمر على درجة حرارة هادئة ويترك لمدة 5 دقائق حتى يصير سمكه مثل المهلبية.', 'نحضر الكاسات أو السلاطين المبللة بالماء ونضع فيه القمر الدين مع تجميل الوجه بالمكسرات والزبيب والجوز هند.']
      }
    }
  },
  {
    id: 'des-34',
    title: 'صينية البطاطا الحلوة',
    titleEn: 'Baked Sweet Potato Tray with Nuts and Syrup',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '25 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'db35-1',
        name: 'بطاطا حلوة مسلوقة',
        nameEn: 'Boiled sweet potato',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db35-2',
        name: 'جوز هند',
        nameEn: 'Coconut',
        standardAmount: '1.5 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1.5 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db35-3',
        name: 'زبيب',
        nameEn: 'Raisins',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db35-4',
        name: 'مكسرات محمصة مفرية',
        nameEn: 'Toasted, chopped nuts',
        standardAmount: '1.5 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1.5 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db35-5',
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
        id: 'db35-6',
        name: 'لبن للعجن',
        nameEn: 'Milk, for kneading',
        standardAmount: 'قليل',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db35-7',
        name: 'قرفة',
        nameEn: 'Cinnamon',
        standardAmount: '1/2 ملعقة صغيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db35-8',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db35-9',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '1/4 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '1/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db35-10',
        name: 'عصير ليمون وفانيليا',
        nameEn: 'Lemon juice and vanilla',
        standardAmount: '2 نقطة ليمون',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 نقطة ليمون'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'تسلق البطاطا وتهرس جيدا بالشوكة.',
        textEn: 'Boil the sweet potato and mash well with a fork.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يدهن بايركس بالزبد أو السمن السايح ثم ترص نصف كمية البطاطا بحيث لا تترك فجوات.',
        textEn: 'Grease a Pyrex dish with butter or melted ghee and press in half the sweet potato with no gaps.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترص المكسرات فوقها مع نصف كمية القرفة ونصف كمية جوز الهند.',
        textEn: 'Layer the nuts over it with half the cinnamon and half the coconut.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يوضع النصف الثاني من البطاطا فوقها ثم يرش بالمكسرات وبقية كمية جوز الهند والقرفة وقطعة زبد ثم تدخل الفرن.',
        textEn: 'Top with the second half of the sweet potato, sprinkle with the remaining nuts, coconut and cinnamon, add a knob of butter, and bake.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نعمل شرابا بخلط السكر والماء والليمون والفانيليا مع التقليب حتى يصير سميكا نوعا ما.',
        textEn: 'Make a syrup by simmering the sugar, water, lemon juice and vanilla, stirring until somewhat thick.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد خروج البطاطا من الفرن تسقى بالشراب وتترك لتبرد.',
        textEn: 'Once out of the oven, pour the syrup over it and let cool.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يمكن تقطيع موز أو بشر جزر وعليها المكسرات.',
        textEn: 'Sliced banana or grated carrot can be added on top with more nuts.',
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
        title: 'صينية البطاطا الحلوة',
        ingredients: ['1 كيلو بطاطا حلوة مسلوقة', '½1 ملعقة كبيرة جوز هند', '1 ملعقة كبيرة زبيب', '½1 ملعقة كبيرة مكسرات محمصه مفرية', 'قطعة زبد', 'قليل من اللبن للعجن', '½ ملعقة صغيرة قرفه', '½ كوب سكر', '¼ كوب ماء', '2 نقطة ليمون', 'فانيليا'],
        instructions: ['تسلق البطاطا وتهرس جيدا بالشوكة.', 'يدهن بايركس بالزبد أو السمن السايح ثم ترص ½ كمية البطاطا بحيث لا تترك فجوات.', 'ترص المكسرات فوقها مع ½ كمية القرفة و ½ كمية جوز الهند.', 'يوضع النصف الثاني من البطاطا فوقها ثم يرش بالمكسرات وبقية كمية جوز الهند والقرفة وقطعة زبد ثم تدخل الفرن.', 'نعمل شراب بخلط السكر و الماء و الليمون و الفانيليا مع التقليب حتى يصير سميكا نوعا ما.', 'بعد خروج البطاطا من الفرن تسقى بالشراب و تترك لتبرد.', 'يمكن تقطيع موز أو بشر جزر وعليها المكسرات.']
      }
    }
  },
  {
    id: 'des-35',
    title: 'صينية البطاطا الحلوة بالكراميل',
    titleEn: 'Baked Sweet Potato Purée with Clotted Cream',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db36-1',
        name: 'بطاطا حلوة',
        nameEn: 'Sweet potato',
        standardAmount: '2 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db36-2',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db36-3',
        name: 'قشدة',
        nameEn: 'Clotted cream',
        standardAmount: '4 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db36-4',
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
        id: 'db36-5',
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
        id: 'db36-6',
        name: 'سكر للوجه',
        nameEn: 'Sugar, for the top',
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
        text: 'تسلق البطاطا جيدا ثم تقشر وتهرس بالشوكة.',
        textEn: 'Boil the sweet potato well, then peel and mash with a fork.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تخلط البطاطا مع السكر والقشدة واللبن ثم يضربوا في الخلاط.',
        textEn: 'Blend the sweet potato with the sugar, clotted cream and milk until smooth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدهن الصينية أو البايركس بالزبد ويصب فوقها خليط البطاطا وتدخل الفرن حتى النضج.',
        textEn: 'Butter a tray or Pyrex dish, pour in the mixture, and bake until set.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يرش الوجه بالسكر ثم تدخل الصينية تحت شواية الفرن حتى يصير اللون ذهبيا.',
        textEn: 'Sprinkle sugar on top and broil briefly until golden.',
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
        title: 'صينية البطاطا الحلوة بالكراميل',
        ingredients: ['2 كيلو بطاطا حلوة', '1 كوب سكر بودره', '4 ملعقة كبيرة قشدة', '1 كوب لبن'],
        instructions: ['تسلق البطاطا جيدا ثم تقشر وتهرس بالشوكة.', 'تخلط البطاطا مع السكر والقشدة واللبن ثم يضربوا في الخلاط.', 'تدهن الصينية أو البايركس بالزبد ويصب فوقها خليط البطاطا وتدخل الفرن حتى النضج.', 'يرش الوجه بالسكر ثم تدخل الصينية تحت شواية الفرن حتى يصير اللون ذهبيا.']
      }
    }
  },
  {
    id: 'des-36',
    title: 'القرع العسلي',
    titleEn: 'Candied Pumpkin with White Sauce and Nuts',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'فرن',
    prepTime: '30 دقيقة',
    cookTime: '40 دقيقة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db37-1',
        name: 'قرع استامبولي',
        nameEn: 'Pumpkin (Istanbuli squash)',
        standardAmount: '1 كيلو',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db37-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كيلو + 2 ملعقة كبيرة للحشو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو + 2 ملعقة كبيرة للحشو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db37-3',
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
        id: 'db37-4',
        name: 'صلصة بيضاء (انظري الوصفة التالية)',
        nameEn: 'Sweet white sauce (see recipe below)',
        standardAmount: '3 كوب',
        category: 'other',
        sourceVariations: {
          doc1: '3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db37-5',
        name: 'زبيب ومكسرات مفرية',
        nameEn: 'Raisins and chopped nuts',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db37-6',
        name: 'فانيليا أو ماء ورد',
        nameEn: 'Vanilla, or rose water',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db37-7',
        name: 'سمن وبقسماط',
        nameEn: 'Ghee and breadcrumbs',
        standardAmount: 'للصينية',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'للصينية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقشَر القرع ويقطع شرائح، ثم يوضع في إناء ويضاف إليه نصف كيلو سكر والماء.',
        textEn: 'Peel and slice the pumpkin, place in a pot with the half kilo of sugar and the water.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يرفع على درجة حرارة هادئة حتى النضج ثم يصفى للتخلص من الماء.',
        textEn: 'Simmer over low heat until tender, then drain.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف صفار البيض والفانيليا إلى الصلصة البيضاء ويقلبوا جيدا.',
        textEn: 'Stir the egg yolks and vanilla into the white sauce and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تخلط المكسرات المفرية والزبيب وحوالي 2 ملعقة كبيرة سكر والفانيليا أو ماء الورد.',
        textEn: 'Mix the chopped nuts and raisins with about 2 tablespoons of sugar and vanilla or rose water.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن صينية أو بايركس بالسمن دهنا جيدا ثم ترش بطبقة سميكة من البقسماط الناعم.',
        textEn: 'Grease a tray or Pyrex dish well with ghee and dust with a thick layer of fine breadcrumbs.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يوضع نصف مقدار الصلصة البيضاء فوق البقسماط ثم يوضع عليه نصف مقدار القرع في طبقة متساوية.',
        textEn: 'Spread half the white sauce over the breadcrumbs, then layer half the pumpkin evenly on top.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يوضع فوقها الحشو بالتساوي.',
        textEn: 'Spread the nut-raisin filling evenly over it.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يعكس الترتيب وذلك بوضع النصف المتبقي من القرع فوق الحشو ثم باقي مقدار الصلصة.',
        textEn: 'Reverse the layering: top with the remaining pumpkin, then the rest of the sauce.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'توضع في فرن هادئ وتترك حتى تتماسك وتنضج ويحمر الوجه.',
        textEn: 'Bake in a low oven until set, cooked through and golden on top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 10,
        text: 'تترك حتى تبرد ثم تقلب باحتراس في طبق التقديم.',
        textEn: 'Let cool, then carefully invert onto the serving plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 10,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'القرع العسلي',
        ingredients: ['1 كيلو قرع استامبولي', '½ كيلو سكر', '½ كوب ماء', '3 أكواب صلصلة بيضاء', 'سكر للتحلية', '3 أكواب لبن', 'صفار 3 بيضات', '½ ملعقة صغيرة فانيليا', 'زبيب', 'مكسرات مفرية', '2 ملعقة كبيرة سكر', 'فانيليا أو ماء ورد'],
        instructions: ['يقشَر القرع ويقطع شرائح ثم يوضع في إناء ويضاف إليه ½ كيلو سكر والماء.', 'يرفع على درجة حرارة هادئة حتى النضج ثم يصفى للتخلص من الماء.', 'يضاف صفار البيض والفانيليا الى الصلصة البيضاء ويقلبوا جيدا.', 'تخلط المكسرات المفرية والزبيب وحوالي 2 ملعقة كبيرة سكر والفانيليا أو ماء الورد.', 'تدهن صينية أو بايركس بالسمن دهنا جيدا ثم ترش بطبقة سميكة من البقسماط الناعم.', 'يوضع ½ مقدار الصلصة البيضاء فوق البقسماط ثم يوضع عليه ½ مقدار القرع في طبقة متساوية.', 'يوضع فوقها الحشو بالتساوي.', 'يعكس الترتيب وذلك بوضع ½ المقدار المتبقي من القرع فوق الحشو ثم باقي مقدار الصلصة.', 'توضع في فرن هادئ وتترك حتى تتماسك وتنضج ويحمر الوجه.', 'تترك حتى تبرد ثم تقلب باحتراس في طبقة التقديم.']
      }
    }
  },
  {
    id: 'des-37',
    title: 'عمل الصلصة البيضاء',
    titleEn: 'Sweet White Sauce (for Candied Pumpkin)',
    chapter: 'الباب الرابع: اصناف الحلويات الخفيفة',
    chapterNumber: 4,
    category: 'حلويات خفيفة',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '15 دقيقة',
    servings: 'حوالي 3 كوب',
    masterIngredients: [
      {
        id: 'db38-1',
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
        id: 'db38-2',
        name: 'سمن أو زبد',
        nameEn: 'Ghee or butter',
        standardAmount: '3 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db38-3',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '3 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db38-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db38-5',
        name: 'صفار بيض وفانيليا',
        nameEn: 'Egg yolks and vanilla',
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
        text: 'يسيح السمن في إناء ثم يضاف إليه الدقيق مع رفعه من فوق الموقد وتحريكه جيدا بالملعقة الخشب.',
        textEn: 'Melt the ghee, whisk in the flour off the heat, stirring well with a wooden spoon.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع على درجة حرارة هادئة لمدة 3 دقائق.',
        textEn: 'Return to low heat for 3 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع ثانية من الموقد لإضافة اللبن المغلي مرة واحدة على الدقيق مع التقليب السريع بالمضرب.',
        textEn: 'Remove from the heat again, add the boiling milk all at once, whisking briskly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يعاد الإناء على الموقد على درجة حرارة هادئة مع التقليب المستمر حتى درجة الغليان من 5 إلى 7 دقائق حتى يتم نضج الدقيق ويحلى بالسكر.',
        textEn: 'Return to low heat, stirring constantly, until it boils, for 5-7 minutes until the flour is cooked, then sweeten with sugar.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد أن تبرد الصلصة يضاف صفار البيض والفانيليا ويقلبوا جيدا.',
        textEn: 'Once cooled, whisk in the egg yolks and vanilla.',
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
        title: 'عمل الصلصة البيضاء',
        ingredients: ['3 ملعقة كبيرة دقيق', '3 ملعقة كبيرة سمن أو زبد', '3 كوب لبن'],
        instructions: ['يسيح السمن في إناء ثم يضاف إليه الدقيق مع رفعه من فوق البوتاجاز وتحريكه جيدا بالملعقة الخشب.', 'يوضع على درجة حرارة هادئة لمدة 3 دقائق.', 'يرفع ثانية من البوتاجاز لإضافة اللبن المغلي مرة واحدة على الدقيق مع التقليب السريع بالمضرب.', 'يعاد الإناء على البوتاجاز على درجة حرارة هادئة مع التقليب المستمر حتى درجة الغليان من 5 : 7 دقائق حتى يتم نضج الدقيق ويحلى بالسكر.', 'بعد أن تبرد الصلصة يضاف صفار البيض والفانيليا ويقلبوا جيدا.']
      }
    }
  },
  {
    id: 'des-38',
    title: 'الخشاف بالفاكهة الطازجة بدون طهي',
    titleEn: 'No-Cook Fresh Fruit Khoshaf',
    chapter: 'الباب الرابع: الخشاف',
    chapterNumber: 4,
    category: 'خشاف',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '-',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db39-1',
        name: 'عصير فاكهة',
        nameEn: 'Fruit juice',
        standardAmount: '1-2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1-2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db39-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'حسب الحاجة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db39-3',
        name: 'فواكه مشكلة مقطعة',
        nameEn: 'Assorted fruit, diced',
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
        text: 'يضرب في الخلاط عصير الفاكهة ويضاف إليه السكر حسب الحاجة.',
        textEn: 'Blend the fruit juice, adding sugar as needed.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقلب أنواع الفواكه المختارة لعمل الخشاف في سلطانية للتقديم بعد تقطيعها.',
        textEn: 'Combine the diced fruit for the khoshaf in a serving bowl.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف العصير المضروب في الخلاط إلى الفاكهة ثم تبرَد.',
        textEn: 'Pour the blended juice over the fruit and chill before serving.',
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
        title: 'الخشاف بالفاكهة الطازجة بدون طهي',
        ingredients: [],
        instructions: ['يضرب في الخلاط عصير الفاكهة و يضاف اليه السكر حسب الحاجة.', 'تقلب أنواع الفواكه المختارة لعمل الخشاف في سلطانية للتقديم بعد تقطيعها.', 'يضاف العصير المضروب في الخلاط إلى الفاكهة ثم تبرَد.']
      }
    }
  },
  {
    id: 'des-39',
    title: 'خشاف الفاكهة الطازجة بالزبادي أو الكريم شانتيه',
    titleEn: 'Fresh Fruit Khoshaf with Yogurt or Chantilly Cream',
    chapter: 'الباب الرابع: الخشاف',
    chapterNumber: 4,
    category: 'خشاف',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '-',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db40-1',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: '3 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db40-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db40-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db40-4',
        name: 'فواكه متنوعة (مشمش وتفاح وكنتالوب)',
        nameEn: 'Assorted fruit (apricot, apple, cantaloupe)',
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
        text: 'تقطع الفواكه تقطيعا مناسبا وتوضع في سلطانية.',
        textEn: 'Dice the fruit and place in a serving bowl.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب الزبادي مع السكر والفانيليا بمضرب البيض أو في الخلاط حتى يذوب تماما لمدة 5 دقائق.',
        textEn: 'Whisk the yogurt with the sugar and vanilla, or blend, for 5 minutes until fully dissolved.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يصب السائل فوق الفواكه المقطعة ويقلب جيدا.',
        textEn: 'Pour over the diced fruit and mix well.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يمكن استبدال الزبادي بالكريم شانتيه.',
        textEn: 'The yogurt can be replaced with Chantilly cream.',
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
        title: 'خشاف الفاكهة الطازجة بالزبادي أو الكريم شانتيه',
        ingredients: ['3 كوب زبادي', '½ كوب سكر', 'فانيليا', 'فواكه متنوعة كالمشمش والتفاح والكنتالوب'],
        instructions: ['تقطع الفواكه تقطيعا مناسبا وتوضع في سلطانية.', 'يضرب الزبادي مع السكر والفانيليا بمضرب البيض أو في الخلاط حتى يذوب تماما لمدة 5 دقائق.', 'يصب السائل فوق الفواكه المقطعة ويقلب جيداز', 'يمكن استبدال الزبادي بالكريم شانتيه.']
      }
    }
  },
  {
    id: 'des-40',
    title: 'خشاف الفاكهة الطازجة بالطهو',
    titleEn: 'Poached Fresh Fruit Khoshaf',
    chapter: 'الباب الرابع: الخشاف',
    chapterNumber: 4,
    category: 'خشاف',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '20 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db41-1',
        name: 'فاكهة طازجة (كالخوخ)',
        nameEn: 'Fresh fruit, such as peaches',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db41-2',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'لتغطية الفاكهة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'لتغطية الفاكهة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db41-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يوضع نوع من الفاكهة الطازجة مثل الخوخ في إناء يغطى فقط بالماء ثم يرفع على الموقد.',
        textEn: 'Place the fresh fruit (such as peaches) in a pot, cover with just enough water, and bring to the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف له السكر لتحليته.',
        textEn: 'Add sugar to sweeten.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يطهى على درجة حرارة هادئة حتى ينضج ويتبقى معه جزء من المحلول السكري.',
        textEn: 'Simmer over low heat until tender, keeping some of the sugar syrup with it.',
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
        title: 'خشاف الفاكهة الطازجة بالطهو',
        ingredients: [],
        instructions: ['يوضع نوع  من الفاكهة الطازجة مثل الخوخ في إناء يغطى فقط بالماء ثم يرفع على البوتاجاز.', 'يضاف له السكر لتحليته.', 'يطهى على درجة حرارة هادئة حتى ينضج ويتبقى معه جزء من المحلول السكري.']
      }
    }
  },
  {
    id: 'des-41',
    title: 'الخشاف بطهو الفاكهة الجافة',
    titleEn: 'Poached Dried Fruit Khoshaf',
    chapter: 'الباب الرابع: الخشاف',
    chapterNumber: 4,
    category: 'خشاف',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '25 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db42-1',
        name: 'فاكهة مجففة',
        nameEn: 'Dried fruit',
        standardAmount: '1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db42-2',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '4 أكواب لكل نصف كيلو فاكهة',
        category: 'liquid',
        sourceVariations: {
          doc1: '4 أكواب لكل نصف كيلو فاكهة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db42-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '4 ملعقة كبيرة أو حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة أو حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db42-4',
        name: 'فانيليا ومكسرات وزبيب وجوز هند',
        nameEn: 'Vanilla, nuts, raisins and coconut',
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
        text: 'يوضع حوالي 4 أكواب من الماء لكل نصف كيلو فاكهة مجففة.',
        textEn: 'Use about 4 cups of water per half kilo of dried fruit.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'إضافة 4 ملاعق كبيرة سكر أو حسب الرغبة.',
        textEn: 'Add 4 tablespoons of sugar, or to taste.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترفع على درجة حرارة هادئة وتوضع فيها الفاكهة المجففة حتى تنضج.',
        textEn: 'Simmer over low heat with the dried fruit until tender.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد رفعها ممكن أن تضاف الفانيليا والمكسرات والزبيب وجوز الهند.',
        textEn: 'Once off the heat, vanilla, nuts, raisins and coconut can be added.',
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
        title: 'الخشاف بطهو الفاكهة الجافة',
        ingredients: [],
        instructions: ['يوضع حوالي 4 أكواب من الماء لكل ½ فاكهة مجففة.', 'إضافة 4 ملاعق كبيرة سكر أو حسب الرغبة.', 'ترفع على درجة حرارة هادئة وتوضع فيها الفاكهة المجففة حتى تنضج.', 'بعد رفعها ممكن أن تضاف الفانيليا والمكسرات والزبيب و جوز الهند.']
      }
    }
  },
  {
    id: 'des-42',
    title: 'خشاف القراصيا والمشمشية',
    titleEn: 'Prune and Apricot Khoshaf with Figs and Dates',
    chapter: 'الباب الرابع: الخشاف',
    chapterNumber: 4,
    category: 'خشاف',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db43-1',
        name: 'قراصيا',
        nameEn: 'Prunes',
        standardAmount: '1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db43-2',
        name: 'مشمشية (مشمش مجفف)',
        nameEn: 'Dried apricots',
        standardAmount: '1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db43-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db43-4',
        name: 'تين مجفف',
        nameEn: 'Dried figs',
        standardAmount: '1/4 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db43-5',
        name: 'بلح مجفف',
        nameEn: 'Dried dates',
        standardAmount: '1/4 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db43-6',
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
        id: 'db43-7',
        name: 'زبيب ومكسرات وجوز هند وفانيليا',
        nameEn: 'Raisins, nuts, coconut and vanilla',
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
        text: 'توضع في إناء كمية من الماء كافية لتغطية القراصيا والمشمشية ويضاف السكر.',
        textEn: 'Cover the prunes and apricots with enough water in a pot and add sugar.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تضاف القراصيا وتترك على درجة حرارة هادئة حتى تنضج نصف نضج فقط.',
        textEn: 'Add the prunes and simmer over low heat until only half cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف المشمشية للقراصيا حتى تنضج تماما بدون أن تنهري كل من القراصيا أو المشمشية، مع إضافة الماء كلما احتاج الأمر.',
        textEn: 'Add the apricots and simmer until both are fully tender without falling apart, adding water as needed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'ترفع من الموقد وترش بقليل من الفانيليا على كمية السائل القليل بعد نضج الفاكهة، وتوضع في وعاء التقديم.',
        textEn: 'Remove from the heat, stir a little vanilla into the small amount of remaining syrup, and transfer to the serving bowl.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يضاف لها التين الجاف المقطع والبلح الجاف المقطع بدون نواة، ويغطى ويترك ليبرد.',
        textEn: 'Add the sliced dried figs and pitted, sliced dried dates, cover, and let cool.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تجمل بالزبيب والمكسرات.',
        textEn: 'Garnish with raisins and nuts.',
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
        title: 'خشاف القراصيا والمشمشية',
        ingredients: ['½ كيلو قراصيا', '½ كيلو مشمشية', 'سكر للتحلية', '¼ كيلو تين مجفف', '¼ كيلو بلح مجفف', 'ماء حسب الكمية', 'كمية من الزبيب والمكسرات وجوز الهند والفانيليا'],
        instructions: ['توضع في إناء كمية من الماء كافية لتغطية القراصيا والمشمشية و يضاف السكر.', 'تضاف القراصيا و تترك على درجة حرارة هادئة حتى تنضج نصف نضج فقط.', 'تضاف المشمشية للقراصيا حتى تنضج تماما بدون أن تنهري كل من القراصيا أو المشمشية مع إضافة الماء كلما احتاج الأمر.', 'ترفع من على البوتاجاز وترش بقليل من الفانيليا على كمية السائل القليل بعد نضج الفاكهة ، وتوضع في وعاء التقديم.', 'يضاف لها التين الجاف المقطع والبلح الجاف المقطع بدون نواة ويغطى ويترك ليبرد.', 'تجمل بالزبيب والمكسرات.']
      }
    }
  },
  {
    id: 'des-43',
    title: 'آيس كريم الفانيليا',
    titleEn: 'Homemade Vanilla Ice Cream',
    chapter: 'الباب الرابع: الأيس كريم',
    chapterNumber: 4,
    category: 'آيس كريم',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة (+تجميد)',
    cookTime: '15 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'db44-1',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db44-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '2.5 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2.5 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db44-3',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '3 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db44-4',
        name: 'بيضة كبيرة',
        nameEn: 'Large egg',
        standardAmount: '1 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db44-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
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
        text: 'يمزج الكورن فلاور (أو النشا) جيدا مع ملعقتين كبيرتين من اللبن البارد.',
        textEn: 'Mix the cornflour well with two tablespoons of cold milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي باقي مقدار اللبن ويصب فوقه خليط الكورن فلاور مع التقليب السريع بدون حرارة.',
        textEn: 'Boil the remaining milk, and off the heat, whisk in the cornflour mixture briskly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع الخليط على درجة حرارة هادئة ويغلي مع التقليب حوالي 10 دقائق.',
        textEn: 'Return to low heat and simmer, stirring, for about 10 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يحلى بالسكر ويرفع من الموقد ويترك ليبرد.',
        textEn: 'Sweeten with sugar, remove from the heat, and let cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تخفق البيضة مع الفانيليا جيدا ثم تضاف للخليط البارد.',
        textEn: 'Beat the egg well with the vanilla and stir into the cooled mixture.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدخل الفريزر إما بوضعها في آلة التثليج أو قوالب الثلج أو أي قالب بلاستيك وتترك حتى تتجمد.',
        textEn: 'Freeze in an ice cream maker, ice trays, or any plastic mold until frozen.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تخرج من الفريزر وتقلب جيدا ثم يعاد التجميد.',
        textEn: 'Remove from the freezer, stir well, and refreeze.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'آيس كريم الفانيليا',
        ingredients: ['1 كيلو لبن', '½2 ملعقة كبيرة سكر', '3 ملعقة كبيرة كورن فلاور أوكستر', 'بيضة كبيرة', 'فانيليا'],
        instructions: ['يمزج الكورن فلاور (أوالكستر) جيدا مع ملعقتين كبيرتين من اللبن البارد.', 'يغلي باقي مقدار اللبن ويصب فوقه خليط الكورن فلاور مع التقليب السريع بدون حرارة.', 'يرفع الخليط على درجة حرارة هادئة ويغلي مع التقليب حوالي 10 دقائق.', 'يحلي بالسكر ويرفع من البوتاجاز ويترك ليبرد.', 'تخفق البيضة مع الفانيليا جيدا ثم تضاف للخليط البارد.', 'تدخل الفريزر إما بوضعها في آلة التثليج أو قوالب الثلج أو أي قالب بلاستيك وتترك حتى تتجمد.', 'تخرج من الفريزر وتقلب جيدا ثم يعاد التجميد.']
      }
    }
  },
  {
    id: 'des-44',
    title: 'آيس كريم ببسكويت سافوي',
    titleEn: 'Layered Ice Cream and Savoy Biscuit Cake',
    chapter: 'الباب الرابع: الأيس كريم',
    chapterNumber: 4,
    category: 'آيس كريم',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة (+تجميد)',
    cookTime: '-',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db45-1',
        name: 'آيس كريم جاهز',
        nameEn: 'Ready-made ice cream',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db45-2',
        name: 'بسكويت سافوي',
        nameEn: 'Savoy biscuits (ladyfingers)',
        standardAmount: 'حسب كمية الأيس كريم',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب كمية الأيس كريم'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db45-3',
        name: 'لبن وفواكه مخلوطة',
        nameEn: 'Milk and blended fruit',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db45-4',
        name: 'مكسرات مفرية وجوز هند',
        nameEn: 'Chopped nuts and coconut',
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
        text: 'يسيح آيس كريم جاهز في صينية ستانلس ثم يجمد قليلا.',
        textEn: 'Soften ready-made ice cream in a stainless tray, then let it firm up slightly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نخرجه من الفريزر ونضع عليه بسكويت سافوي حسب كمية الأيس كريم.',
        textEn: 'Remove from the freezer and layer savoy biscuits over it, in proportion to the ice cream.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضرب اللبن مع الفواكه المخلوطة في الخلاط ويضاف إلى الصينية.',
        textEn: 'Blend the milk with the mixed fruit and pour over the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تضاف المكسرات المفرية وجوز الهند.',
        textEn: 'Add the chopped nuts and coconut.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'توضع طبقة أخرى من الأيس كريم فوق الخليط، وتدخل الفريزر حتى التجمد.',
        textEn: 'Add another layer of ice cream on top and freeze until solid.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'عند التقديم ممكن وضعها فوق بخار ماء ساخن حتى تهتز فقط، ثم تسكب في طبق التقديم أو قوالب صغيرة.',
        textEn: 'To serve, hold briefly over hot water steam just until it loosens, then invert onto a serving plate or small molds.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'آيس كريم ببسكويت سافوي',
        ingredients: [],
        instructions: ['يسيح آيس كريم جاهز في صينية ستانلس ثم يجمد قليلا.', 'نخرجه من الفريزر ونضع عليه بسكويت سافوى حسب كمية الأيس كريم.', 'يضرب اللبن مع الفواكه المخلوطة في الخلاط و يضاف الى الصينية.', 'تضاف المكسرات المفرية وجوز الهند.', 'توضع طبقة أخرى من الأيس كريم فوق الخليط.', 'تدخل الفريزر حتى التجمد.', 'عند التقديم ممكن وضعها فوق بخار ماء ساخن حتى تهتز فقط ثم تسكب في طبق التقديم أو قوالب صغيرة.']
      }
    }
  },
  {
    id: 'des-45',
    title: 'آيس كريم بالكريم شانتيه',
    titleEn: 'Mango Ice Cream with Chantilly Cream',
    chapter: 'الباب الرابع: الأيس كريم',
    chapterNumber: 4,
    category: 'آيس كريم',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق (+تجميد)',
    cookTime: '-',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db46-1',
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
        id: 'db46-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db46-3',
        name: 'عصير مانجو طازج',
        nameEn: 'Fresh mango juice',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db46-4',
        name: 'كريم شانتيه',
        nameEn: 'Chantilly cream',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
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
        text: 'يخلط اللبن مع السكر والعصير ويضربوا في المضرب الكهربائي حتى يصير متجانسا.',
        textEn: 'Combine the milk, sugar and mango juice and beat with an electric mixer until smooth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخلط الكريم شانتيه بعد ضربه معهم في المضرب.',
        textEn: 'Whip the Chantilly cream and fold it in.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يصب في قالب ويدخل الفريزر.',
        textEn: 'Pour into a mold and freeze.',
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
        title: 'آيس كريم بالكريم شانتيه',
        ingredients: ['1 كوب لبن', '½ كوب سكر', '1 كوب عصير طازج (مانجو)', '1 كوب كريم شانتيه'],
        instructions: ['يخلط اللبن مع السكر والعصير ويضربوا في المضرب الكهربائي حتى يصير متجانسا.', 'يخلط الكريم شانتيه بعد ضربه معهم في المضرب.', 'يصب في قالب ويدخل الفريزر.']
      }
    }
  },
  {
    id: 'des-46',
    title: 'آيس كريم الشيكولاتة',
    titleEn: 'Churned Chocolate Ice Cream',
    chapter: 'الباب الرابع: الأيس كريم',
    chapterNumber: 4,
    category: 'آيس كريم',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة (+تجميد)',
    cookTime: '10 دقائق',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'db47-1',
        name: 'شيكولاتة مبشورة سادة',
        nameEn: 'Grated plain chocolate',
        standardAmount: '1/8 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db47-2',
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
        id: 'db47-3',
        name: 'صفار بيض',
        nameEn: 'Egg yolks',
        standardAmount: '2 صفار',
        category: 'other',
        sourceVariations: {
          doc1: '2 صفار'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db47-4',
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
        id: 'db47-5',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1/2 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db47-6',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db47-7',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db47-8',
        name: 'كريم شانتيه',
        nameEn: 'Chantilly cream',
        standardAmount: '1 باكو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 باكو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يخفق البيض مع الصفار جيدا في سلطانية.',
        textEn: 'Whisk the eggs and egg yolks well together in a bowl.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن وتضاف إليه الشيكولاته المبشورة حتى تذوب تماما.',
        textEn: 'Boil the milk and add the grated chocolate, stirring until fully dissolved.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف إليه السكر.',
        textEn: 'Add the sugar.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يصب هذا الخليط على البيض المخفوق في السلطانية ويمزج جيدا بالمضرب.',
        textEn: 'Pour the hot milk over the beaten eggs, whisking well to combine.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يصب الخليط في آلة الأيس كريم وتدار الآلة حتى يبرد جيدا في الفريزر.',
        textEn: 'Pour into an ice cream maker and churn until well chilled and frozen.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يخفق الكريم شانتيه في المضرب الكهربائي جيدا ثم يضاف إلى الخليط في الآلة وتدار حتى تجمد.',
        textEn: 'Whip the Chantilly cream well and fold into the machine, continuing to churn until frozen.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يمكن استعمال القالب بدلا من الآلة.',
        textEn: 'A freezer mold can be used instead of an ice cream maker, stirring occasionally.',
        phase: 'finish',
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
        title: 'آيس كريم الشيكولاتة',
        ingredients: ['⅛ كيلو شيكولاته مبشورة سادة بدون لبن', '2 بيضة', '2 صفار بيضة', 'كوب كريمة', '½ كيلو لبن', 'فانيليا', 'سكر للتحلية', 'باكو كريم شانتيه'],
        instructions: ['يخفق البيض مع الصفار جيدا في سلطانية.', 'يغلي اللبن وتضاف إليه الشيكولاته المبشورة حتى تذوب تماما .', 'يضاف إليه السكر .', 'يصب هذا الخليط على البيض المخفوق في السلطانية ويمزج جيدا بالمضرب .', 'يصب الخليط في آلة الأيس كريم وتدار الآلة حتى يبرد جيدا في الفريزر .', 'يخفق الكريم شانتيه في المضرب الكهربائي جيدا ثم يضاف إلى الخليط في الآلة وتدار حتى تجمد .', 'يمكن استعمال القالب بدلا من الآلة.']
      }
    }
  },
  {
    id: 'des-47',
    title: 'آيس كريم بالكريمة',
    titleEn: 'Rich Custard Cream Ice Cream',
    chapter: 'الباب الرابع: الأيس كريم',
    chapterNumber: 4,
    category: 'آيس كريم',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة (+تجميد)',
    cookTime: '10 دقائق',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db48-1',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db48-2',
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
        id: 'db48-3',
        name: 'صفار بيض',
        nameEn: 'Egg yolks',
        standardAmount: '7 صفار',
        category: 'other',
        sourceVariations: {
          doc1: '7 صفار'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db48-4',
        name: 'ملح',
        nameEn: 'Salt',
        standardAmount: 'قليل',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db48-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: '1 ملعقة صغيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db48-6',
        name: 'كريمة جاهزة',
        nameEn: 'Ready-made cream',
        standardAmount: '4 كوب',
        category: 'dairy_fat',
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
        text: 'نضع السكر والماء في إناء على درجة حرارة متوسطة مع التحريك المستمر حتى ذوبان السكر ويصبح شرابا خفيفا.',
        textEn: 'Heat the sugar and water over medium heat, stirring, until the sugar dissolves into a light syrup.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق صفار البيض جيدا حتى يصير المزيج خفيفا وبه رغوة.',
        textEn: 'Whisk the egg yolks well until light and frothy.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسكب الشراب تدريجيا وببطء على صفار البيض المخفوق مع الخفق المستمر حتى يندمج ويصبح المزيج باردا، ثم نضيف الملح والفانيليا مع الاستمرار في الخفق، ونضيف الكريمة مع خفقها معهم جيدا.',
        textEn: 'Slowly drizzle the hot syrup into the whisked yolks, whisking constantly until combined and cooled, then whisk in the salt and vanilla, and finally fold in the cream.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يسكب الخليط في آلة الأيس كريم أو في قوالب وتدخل الفريزر حتى التجمد.',
        textEn: 'Pour into an ice cream maker or molds and freeze until solid.',
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
        title: 'آيس كريم بالكريمة',
        ingredients: ['1 كوب سكر', '½ كوب ماء', '7 صفار بيض', 'قليل من الملح', '1 ملعقة صغيرة فانيليا', '4 أكواب كريمة جاهزة'],
        instructions: ['نضع السكر والماء في إناء على درجة حرارة متوسطة مع التحريك المستمر حتى ذوبان السكر ويصبح شرابا خفيفا.', 'يخفق صفار البيض جيدا حتى يصير المزيج خفيفا وبه رغوة.', 'يسكب الشراب تدريجيا وببطء على صفار البيض المخفوق مع الخفق المستمر حتى يندمج ويصبح المزيج باردا ثم نضيف الملح والفانيليا مع الاستمرار في الخفق نضيف الكريمة مع خفقها معهم جيدا.', 'يسكب الخليط في آلة الأيس كريم أو في قوالب وتدخل الفريزر حتى التجمد.']
      }
    }
  },
  {
    id: 'des-48',
    title: 'آيس كريم الكرملة',
    titleEn: 'Caramel Custard Ice Cream',
    chapter: 'الباب الرابع: الأيس كريم',
    chapterNumber: 4,
    category: 'آيس كريم',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق (+تجميد)',
    cookTime: '10 دقائق',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db49-1',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '4 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db49-2',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '6 ملعقة كبيرة',
        category: 'liquid',
        sourceVariations: {
          doc1: '6 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db49-3',
        name: 'صفار بيض',
        nameEn: 'Egg yolks',
        standardAmount: '2 صفار',
        category: 'other',
        sourceVariations: {
          doc1: '2 صفار'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db49-4',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يوضع السكر مع ثلث الماء في إناء صغير على درجة حرارة متوسطة حتى يذوب السكر، ثم نرفع درجة الحرارة حتى يغلي ويصير لونه بنيا.',
        textEn: 'Heat the sugar with a third of the water over medium heat until the sugar dissolves, then raise the heat until it boils and turns brown.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف باقي مقدار الماء ويغلي معه حتى يصير كرملة.',
        textEn: 'Add the remaining water and boil until it becomes caramel.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفق صفار البيض جيدا حتى يبيض لونه، ثم يضاف للكرملة ويترك ليبرد.',
        textEn: 'Whisk the egg yolks well until pale, then whisk into the caramel and let cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تضاف الكريمة للخليط السابق وتقلب جيدا ويترك ليبرد.',
        textEn: 'Fold in the cream, mixing well, and let cool.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يصب الخليط في قالب الآيس كريم أو الآلة وتدخل الفريزر لمدة ساعتين.',
        textEn: 'Pour into an ice cream mold or machine and freeze for 2 hours.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تخرج من الفريزر وتخفق جيدا ثم تعاد ثانية إلى الفريزر حتى التجمد.',
        textEn: 'Remove, whisk well, and return to the freezer until fully set.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 4,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'آيس كريم الكرملة',
        ingredients: ['4 ملعقة كبيرة سكر', '6 ملعقة كبيرة ماء', '2 صفار بيض', 'كوب كريمة'],
        instructions: ['يوضع السكر مع ⅓ الماء في إناء صغير على درجة حرارة متوسطة حتى يذوب السكر ثم نرفع درجة الحرارة حتى يغلي ويصير لونه بنيا.', 'يضاف باقي مقدار الماء ويغلي معه حتى يصير كرملة.', 'يخفق صفار البيض جيدا حتى يبيض لونه ثم يضاف للكرملة ويترك ليبرد.', 'تضاف الكريمة للخليط السابق وتقلب جيدا ويترك ليبرد.', 'يصب الخليط في قالب الآيس كريم أو الآلة وتدخل الفريزر لمدة ساعتين.', 'تخرج من الفريزر وتخفق جيدا ثم تعاد ثانية إلى الفريزر حتى التجمد.']
      }
    }
  },
  {
    id: 'des-49',
    title: 'آيس كريم الخوخ',
    titleEn: 'Peach and Berry Ice Cream',
    chapter: 'الباب الرابع: الأيس كريم',
    chapterNumber: 4,
    category: 'آيس كريم',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة (+تجميد)',
    cookTime: '25 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db50-1',
        name: 'خوخ مسلوق ومهروس',
        nameEn: 'Boiled, mashed peaches',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db50-2',
        name: 'عصير توت أو عنب',
        nameEn: 'Berry or grape juice',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db50-3',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '2/3 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2/3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db50-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db50-5',
        name: 'بياض بيض',
        nameEn: 'Egg whites',
        standardAmount: '2 بياض',
        category: 'other',
        sourceVariations: {
          doc1: '2 بياض'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db50-6',
        name: 'كريمة مخفوقة',
        nameEn: 'Whipped cream',
        standardAmount: '2/3 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2/3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يهرس الخوخ ويخلط بالعصير ويطهى لمدة 20 دقيقة حتى يصير لينا.',
        textEn: 'Mash the peaches, mix with the juice, and cook for 20 minutes until soft.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي السكر مع الماء 5 دقائق، ثم يخفق بياض البيض ويصب في الشراب الساخن مع التقليب المستمر ويترك ليبرد.',
        textEn: 'Boil the sugar with the water for 5 minutes, whip the egg whites, pour into the hot syrup, stirring constantly, and let cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تخفق الكريمة ثم تضاف لخليط البيض والخوخ ويقلبوا جيدا.',
        textEn: 'Whip the cream and fold it into the egg-peach mixture, mixing well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يصب الخليط في قالب عميق ويغطى ويدخل الفريزر حتى التجمد.',
        textEn: 'Pour into a deep mold, cover, and freeze until solid.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'عند التقديم يقطع شرائح مع بعض الفواكه.',
        textEn: 'Slice to serve, with a little extra fruit.',
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
        title: 'آيس كريم الخوخ',
        ingredients: ['½ كوب خوخ مسلوق ومهروس', '½ كوب عصير توت أو عنب', '⅔ كوب ماء', '½ كوب سكر', '2 بياض بيض', '⅔ كوب كريمة مخفوقة'],
        instructions: ['يهرس الخوخ ويخلط بالعصير ويطهى لمدة 20 دقيقة حتى يصير لينا.', 'يغلي السكر مع الماء 5 دقائق ثم يخفق بياض البيض ويصب في الشراب الساخن مع التقليب المستمر ويترك ليبرد.', 'تخفق الكريمة ثم تضاف لخليط البيض والخوخ ويقلبوا جيدا.', 'يصب الخليط في قالب عميق ويغطى ويدخل الفريزر حتى التجمد.', 'عند التقديم يقطع شرائح مع بعض الفواكه.']
      }
    }
  },
  {
    id: 'des-50',
    title: 'آيس كريم ملوكي',
    titleEn: 'Layered "Royal" Ice Cream Sundae',
    chapter: 'الباب الرابع: الأيس كريم',
    chapterNumber: 4,
    category: 'آيس كريم',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة (+تجميد)',
    cookTime: '-',
    servings: '4 أكواب',
    masterIngredients: [
      {
        id: 'db51-1',
        name: 'كيك',
        nameEn: 'Sponge cake',
        standardAmount: 'شرائح رفيعة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'شرائح رفيعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db51-2',
        name: 'آيس كريم',
        nameEn: 'Ice cream',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db51-3',
        name: 'مكسرات وزبيب',
        nameEn: 'Nuts and raisins',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db51-4',
        name: 'مهلبية شيكولاتة أو جيلي',
        nameEn: 'Chocolate mahalabia, or jelly',
        standardAmount: 'طبقة خفيفة',
        category: 'other',
        sourceVariations: {
          doc1: 'طبقة خفيفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db51-5',
        name: 'شيكولاتة وجوز هند',
        nameEn: 'Chocolate and coconut',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db51-6',
        name: 'فواكه مقطعة (كنتالوب، تفاح، موز) أو كومبوت مشكل',
        nameEn: 'Diced fruit (cantaloupe, apple, banana), or mixed compote',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db51-7',
        name: 'مربى',
        nameEn: 'Jam, any kind',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'نحضر الكاسة ونضع في أسفلها طبقة رفيعة من الكيك، ثم فوقها طبقة خفيفة من الأيس كريم وعليها مكسرات وزبيب.',
        textEn: 'In a serving glass, layer a thin slice of cake, then a light layer of ice cream, topped with nuts and raisins.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع طبقة أخرى خفيفة من مهلبية الشيكولاتة أو طبقة خفيفة من الجيلي، ثم يبشر عليها قطع شيكولاته وجوز هند.',
        textEn: 'Add another light layer of chocolate mahalabia or jelly, then grate chocolate and coconut over it.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع 3 كرات صغيرة أيس كريم.',
        textEn: 'Top with 3 small scoops of ice cream.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يجمَل بالفواكه المقطعة مثل الكنتالوب أو التفاح أو الموز أو الكومبوت المشكل.',
        textEn: 'Garnish with diced fruit such as cantaloupe, apple, banana, or mixed compote.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يمكن أيضا أن يجمل بقطع متناثرة من المربى من أي نوع.',
        textEn: 'Dots of any jam can also be added as garnish.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 6,
        text: 'توضع الكاسات في الفريزر حتى قبل موعد التقديم، ثم توضع في الثلاجة الرف العلوي.',
        textEn: 'Keep the glasses in the freezer until just before serving, then move to the top shelf of the refrigerator.',
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
        title: 'آيس كريم ملوكي',
        ingredients: [],
        instructions: ['نحضر الكاسة ونضع في أسفلها طبقة رفيعة من الكيك ثم فوقها طبقة خفيفة من الأيس كريم وعليها مكسرات زبيب.', 'نضع طبقة أخرى خفيفة من مهلبية الشيكولاتة أو طبقة خفيفة من الجيلي ثم يبشر عليها قطع شيكولاته وجوز هند.', 'نضع 3 كرات صغيرة أيس كريم.', 'يجمَل بالفواكه المقطعة مثل الكنتالوب أو التفاح أو الموز أو الكمبوت المشكل.', 'يمكن ايضا أن يجمل بقطع متناثرة من المربى من أي نوع.', 'توضع الكاسات في الفريزر حتى قبل موعد التقديم ثم توضع في الثلاجة الرف العلوي.']
      }
    }
  },
  {
    id: 'bev-02',
    title: 'مشروب التمر هندي',
    titleEn: 'Tamarind Drink',
    chapter: 'الباب الرابع: المشروبات',
    chapterNumber: 4,
    category: 'مشروبات',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق (+5 ساعات نقع)',
    cookTime: '-',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db52-1',
        name: 'تمر هندي',
        nameEn: 'Tamarind pulp',
        standardAmount: '1 قطعة مناسبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 قطعة مناسبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db52-2',
        name: 'ماء مغلي',
        nameEn: 'Boiling water',
        standardAmount: 'حوالي 3 أكواب',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حوالي 3 أكواب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db52-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'كافٍ للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'كافٍ للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يغلي الماء مع كمية السكر الكافية، ثم يوضع فيه التمر هندي بعد رفعه من الموقد، ويترك منقوعا في السائل حوالي 5 ساعات مع تغطيته.',
        textEn: 'Boil the water with enough sugar, then off the heat add the tamarind, and let it steep, covered, for about 5 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يصفى بالمصفاة السلكية ثم يوضع في الثلاجة.',
        textEn: 'Strain through a fine sieve and refrigerate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 2,
      totalMasterIngredients: 3,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مشروب التمر هندي',
        ingredients: ['قطعة مناسبة من التمر هندي', 'حوالي 3 أكواب ماء مغلي', 'سكر كافي للتحلية'],
        instructions: ['يغلي الماء مع كمية السكر الكافية ثم يوضع فيه التمر هندي بعد رفعه من البوتاجاز ويترك منقوعا في السائل حوالي 5 ساعات مع تغطيته.', 'يصفى بالمصفاة السلك ثم يوضع في الثلاجة.']
      }
    }
  },
  {
    id: 'bev-03',
    title: 'مشروب العرقسوس',
    titleEn: 'Egyptian Licorice Root Drink',
    chapter: 'الباب الرابع: المشروبات',
    chapterNumber: 4,
    category: 'مشروبات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق (+5 ساعات تخمير)',
    cookTime: '-',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db53-1',
        name: 'عرقسوس (جذور مطحونة)',
        nameEn: 'Ground licorice root',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db53-2',
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
        text: 'نحضر إناء أو صحنا غويطا يوضع فيه كمية من العرقسوس حسب الحاجة.',
        textEn: 'Place the ground licorice root in a deep bowl.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تعجن كمية العرقسوس مع قليل جدا من الماء بالأصابع لمجرد ترطيبه، ثم يغطى ويترك حوالي 5 ساعات حتى يختمر.',
        textEn: 'Work in just enough water with your fingers to moisten it, then cover and let it ferment for about 5 hours.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر دورقا وفوقه مصفاة سلك وعليها شاشة، ثم نضع عجينة العرقسوس المرطبة داخل الشاشة.',
        textEn: 'Set a wire strainer lined with cheesecloth over a pitcher, and place the moistened licorice paste in the cloth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نصب عليها من فلتر الماء نقطة نقطة أو نسكب عليها الماء قليلا قليلا حتى نحصل على اللون المطلوب والطعم.',
        textEn: 'Slowly pour filtered water over it, a little at a time, until the desired color and flavor are achieved.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يوضع الدورق داخل الثلاجة ثم نسكب الخلطة من الشاشة.',
        textEn: 'Refrigerate the pitcher, straining the liquid through the cloth as it collects.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 5,
      totalMasterIngredients: 2,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مشروب العرقسوس',
        ingredients: [],
        instructions: ['نحضر إناء أو صحن غويط يوضع فيه كمية من العرقسوس حسب الحاجة.', 'تعجن كمية العرقسوس مع قليل جدا من الماء بالأصابع لمجرد ترطيبه ثم يغطي ويترك حوالي 5 ساعات حتى يختمر.', 'نحضر دورقا وفوقه مصفاة سلك وعليها شاشة ثم نضع عجينة العرقسوس المرطبة داخل الشاشة.', 'نصب عليها من فلتر الماء نقطة نقطة أو نسكب عليها الماء قليلا قليلا حتى نحصل على اللون المطلوب والطعم.', 'يوضع الدورق داخل الثلاجة ثم نسكب الخلطة من الشاشة.']
      }
    }
  },
  {
    id: 'bev-04',
    title: 'مشروب قمر الدين',
    titleEn: 'Qamar al-Din Apricot Drink',
    chapter: 'الباب الرابع: المشروبات',
    chapterNumber: 4,
    category: 'مشروبات',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة (+نقع)',
    cookTime: '-',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db54-1',
        name: 'قمر الدين',
        nameEn: 'Dried apricot paste ("qamar al-din")',
        standardAmount: '1/2 لفة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 لفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db54-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '10 ملاعق صغيرة أو حسب الحاجة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '10 ملاعق صغيرة أو حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db54-3',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'حوالي 3 أكواب',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حوالي 3 أكواب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'ينقع القمر الدين في ماء، ويفضل أن يكون ساخنا، لمدة طويلة ويكون الماء كافيا لنقعه حتى يبرد الماء.',
        textEn: 'Soak the apricot paste in water (preferably hot) for a long time, using enough water, until it cools.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب خليط القمر الدين والماء في الخلاط مع إضافة السكر.',
        textEn: 'Blend the soaked apricot with its water and the sugar until smooth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفف بالماء حتى نحصل على القوام المطلوب.',
        textEn: 'Thin with more water to the desired consistency.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يوضع في دورق ويدخل الثلاجة.',
        textEn: 'Pour into a pitcher and refrigerate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 4,
      totalMasterIngredients: 3,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'مشروب قمر الدين',
        ingredients: ['½ لفة قمر الدين تكفى لأربعة أشخاص تقريبا', '10 ملاعق سكر صغيرة أو حسب الحاجة', 'حوالي 3 أكواب ماء مع زيادة الكمية إذ احتاج الأمر لتأخذ السمك المطلوب'],
        instructions: ['ينقع القمر الدين في ماء ويفضل أن يكون ساخنا لمدة طويلة ويكون الماء كافيا لنقعه حتى يبرد الماء.', 'يضرب خليط القمر الدين والماء في الخلاط مع إضافة السكر.', 'يخفف بالماء حتى نحصل على السمك المطلوب.', 'يوضع في دورق ويدخل الثلاجة.']
      }
    }
  },
  {
    id: 'bev-05',
    title: 'المغات المحمر',
    titleEn: 'Roasted Meghat (Sago) Warm Drink',
    chapter: 'الباب الرابع: المشروبات',
    chapterNumber: 4,
    category: 'مشروبات',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db55-1',
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
        id: 'db55-2',
        name: 'مغات',
        nameEn: 'Meghat (sago starch)',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db55-3',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '4 أكواب',
        category: 'liquid',
        sourceVariations: {
          doc1: '4 أكواب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db55-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db55-5',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db55-6',
        name: 'بندق محمص ومفري',
        nameEn: 'Toasted, chopped hazelnuts',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'يقدح السمن ويحمر فيه المغات على درجة حرارة هادئة حتى يصفر لونه.',
        textEn: 'Heat the ghee and toast the meghat in it over low heat until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يرفع من الموقد ويضاف إليه الماء تدريجيا مع التقليب المستمر حتى يصل إلى قرب القوام المطلوب.',
        textEn: 'Remove from the heat and gradually whisk in the water until nearly the desired consistency.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع على الموقد في درجة حرارة متوسطة مع إضافة السكر مع التقليب المستمر حتى الغليان.',
        textEn: 'Return to medium heat, add sugar, and stir constantly until it boils.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'عند التقديم يضاف إليه اللبن الساخن المحلى إذ احتاج.',
        textEn: 'Add hot sweetened milk to serve, if desired.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرش الوجه بالبندق المحمص المفري والجوز هند.',
        textEn: 'Garnish with toasted chopped hazelnuts and coconut.',
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
        title: 'المغات المحمر',
        ingredients: ['2 ملعقة كبيرة سمن', '2 ملعقة كبيرة مغات', '4 أكواب ماء', 'لبن حسب الحاجة', 'بندق محمص ومفري'],
        instructions: ['يقدح السمن ويحمر فيه المغات على درجة حرارة هادئة حتى يصفر لونه.', 'يرفع من البوتاجاز ويضاف إليه الماء تدريجيا مع التقليب المستمر حتى يصل إلى قرب السمك المطلوب.', 'يوضع على البوتاجاز في درجة حرارة متوسطة مع إضافة السكر مع التقليب المستمر حتى الغليان.', 'عند التقديم يضاف إليه اللبن الساخن المحلي إذ احتاج.', 'يرش الوجه بالبندق المحمص المفري والجوز هند.']
      }
    }
  },
  {
    id: 'des-51',
    title: 'البقلاوة',
    titleEn: 'Classic Baklawa with Nuts and Syrup',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '30 دقيقة',
    servings: '8-10 أفراد',
    masterIngredients: [
      {
        id: 'db56-1',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1 لفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 لفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db56-2',
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
        id: 'db56-3',
        name: 'مكسرات',
        nameEn: 'Mixed nuts',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db56-4',
        name: 'زبيب',
        nameEn: 'Raisins',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db56-5',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db56-6',
        name: 'شربات (انظري وصفة عمل الشربات)',
        nameEn: 'Sugar syrup (see the syrup recipe)',
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
        text: 'تدهن صينية إما مستطيلة أو مستديرة بالسمن السايح دهنا جيدا.',
        textEn: 'Grease a rectangular or round tray well with melted ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع رقائق الجلاش باتساع الصينية.',
        textEn: 'Trim the phyllo sheets to fit the width of the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع نصف الكمية واحدة تلو الأخرى مع دهن قليل جدا من السمن السايح بين كل طبقة وأخرى.',
        textEn: 'Layer in half the sheets one at a time, brushing very lightly with melted ghee between each layer.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تخلط المكسرات المفرية مع الزبيب وجوز الهند بقليل من السكر ثم توضع في الوسط، ويمكن إضافة القرفة للمكسرات.',
        textEn: 'Mix the chopped nuts with raisins and coconut and a little sugar, and spread in the middle (cinnamon can be added to the nuts).',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يغطى الحشو بباقي الرقائق وبنفس الطريقة في النصف الأول.',
        textEn: 'Cover the filling with the remaining sheets, brushing the same way as the first half.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يقطع الجلاش بالسكين على شكل سامبوسات.',
        textEn: 'Score into diamond shapes with a knife.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يسيح السمن ويصب على السطح وتدخل فرن متوسط الحرارة حتى يحمر لونها وتنضج، ثم تسقى بالشراب البارد وتغطى حتى تبرد تماما.',
        textEn: 'Pour melted ghee over the top and bake in a medium oven until golden, then pour the cold syrup over it and cover until fully cooled.',
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
        title: 'البقلاوة',
        ingredients: ['لفة جلاش', '½ كوب سمن', 'مكسرات', 'زبيب', 'جوز الهند', 'شربات'],
        instructions: ['تدهن صينية إما مستطيلة أو مستديرة بالسمن السايح دهنا جيدا.', 'تقطع رقائق الجلاش باتساع الصينية.', 'يوضع نصف الكمية واحدة تلو الأخرى مع دهن قليل جدا من السمن السايح بين كل طبقة وأخرى.', 'تخلط المكسرات المفرية مع الزبيب وجوز الهند بقليل من السكر ثم توضع في الوسط  ويمكن إضافة القرفة للمكسرات.', 'يغطى الحشو بباقي الرقائق وبنفس الطريقة في النصف الأول.', 'يقطع الجلاش بالسكين على شكل سامبوسات.', 'يسيح السمن ويصب على السطح وتدخل فرن متوسط الحرارة حتى يحمر لونها وتنضج ثم تسقى بالشراب البارد وتغطى حتى تبرد تماما.']
      }
    }
  },
  {
    id: 'des-52',
    title: 'البقلاوة باللبن',
    titleEn: 'Baklawa Soaked in Sweet Milk',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '30 دقيقة',
    servings: '8-10 أفراد',
    masterIngredients: [
      {
        id: 'db57-1',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1 لفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 لفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db57-2',
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
        id: 'db57-3',
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
        id: 'db57-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '3/4 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db57-5',
        name: 'كريمة',
        nameEn: 'Custard cream (see recipe above)',
        standardAmount: 'للحشو',
        category: 'other',
        sourceVariations: {
          doc1: 'للحشو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db57-6',
        name: 'مكسرات',
        nameEn: 'Mixed nuts',
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
        text: 'تدهن صينية إما مستطيلة أو مستديرة بالسمن السايح دهنا جيدا.',
        textEn: 'Grease a rectangular or round tray well with melted ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع رقائق الجلاش باتساع الصينية.',
        textEn: 'Trim the phyllo sheets to fit the width of the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع نصف الكمية واحدة تلو الأخرى ويسقى كل رق بالملعقة بقليل من اللبن الدافئ مع قليل من السمن السايح.',
        textEn: 'Layer in half the sheets, moistening each with a spoonful of warm milk and a little melted ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف حشوة الكريمة والمكسرات.',
        textEn: 'Spread the custard filling and nuts over it.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يغطى الحشو بباقي الرقائق وبنفس الطريقة في النصف الأول.',
        textEn: 'Cover with the remaining sheets, moistened the same way.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يرش السطح بالسمن الدافئ ويدخل فرن متوسط الحرارة حتى النضج واحمرار الوجه.',
        textEn: 'Drizzle warm ghee on top and bake in a medium oven until cooked and golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يذاب السكر في اللبن ويسكب بهدوء على وجه الصينية، ثم يطفأ الفرن وتغطى الصينية.',
        textEn: 'Dissolve the sugar in the milk and gently pour over the top, then turn off the oven and cover the tray.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يمكن استبدال كريمة الحشو بالقشدة أو الكاسترد مع المكسرات.',
        textEn: 'The custard filling can be replaced with clotted cream, or plain custard with nuts.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 8,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'البقلاوة باللبن',
        ingredients: ['لفة جلاش', '½ كوب سمن', 'كوب لبن', '¾ كوب سكر', 'كريمة', 'مكسرات'],
        instructions: ['تدهن صينية إما مستطيلة أو مستديرة بالسمن السايح دهنا جيدا.', 'تقطع رقائق الجلاش باتساع الصينية.', 'يوضع نصف الكمية واحدة تلو الأخرى و يسقى كل راق بالملعقة بقليل من اللبن الدافئ مع قليل من السمن السايح.', 'نضيف حشوة الكريمة و المكسرات.', 'يغطى الحشو بباقي الرقائق وبنفس الطريقة في النصف الأول.', 'يرش السطح بالسمن الدافئ و يدخل فرن متوسط الحرارة حتى النضج واحمرار الوجه.', 'يذاب السكر في اللبن و يسكب بهدوء على وجه الصينية.', 'يطفأ البوتاجاز وتغطى الصينية.', 'يمكن استبدال كريمة الحشو بالقشدة أو الكستر مع المكسرات.']
      }
    }
  },
  {
    id: 'des-53',
    title: 'البقلاوة باللوز المطحون',
    titleEn: 'Baklawa with Ground Almond Filling',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '30 دقيقة',
    servings: '8-10 أفراد',
    masterIngredients: [
      {
        id: 'db58-1',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1 لفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 لفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db58-2',
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
        id: 'db58-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '3/4 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db58-4',
        name: 'حشوة اللوز (انظري الوصفة التالية)',
        nameEn: 'Almond filling (see recipe below)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db58-5',
        name: 'شربات',
        nameEn: 'Sugar syrup',
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
        text: 'تدهن صينية إما مستطيلة أو مستديرة بالسمن السايح دهنا جيدا.',
        textEn: 'Grease a rectangular or round tray well with melted ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع رقائق الجلاش باتساع الصينية.',
        textEn: 'Trim the phyllo sheets to fit the width of the tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يوضع نصف الكمية واحدة تلو الأخرى ويسقى كل رق بالملعقة بقليل من السمن السايح.',
        textEn: 'Layer in half the sheets, moistening each with a little melted ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف حشوة اللوز.',
        textEn: 'Spread the almond filling over it.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يغطى الحشو بباقي الرقائق وبنفس الطريقة في النصف الأول.',
        textEn: 'Cover with the remaining sheets, moistened the same way.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يسيح السمن ويصب على السطح وتدخل فرن متوسط الحرارة حتى يحمر لونها وتنضج.',
        textEn: 'Pour melted ghee over the top and bake in a medium oven until golden and cooked.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'بعد الخروج من الفرن تسقى بالشراب البارد وتغطى حتى تبرد تماما.',
        textEn: 'After baking, pour cold syrup over it and cover until fully cooled.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'البقلاوة باللوز المطحون',
        ingredients: ['لفة جلاش', '½ كوب سمن', '¾ كوب سكر', 'حشوة اللوز', 'شربات'],
        instructions: ['تدهن صينية إما مستطيلة أو مستديرة بالسمن السايح دهنا جيدا.', 'تقطع رقائق الجلاش باتساع الصينية.', 'يوضع نصف الكمية واحدة تلو الأخرى و يسقى كل راق بالملعقة بقليل من السمن السايح.', 'نضيف حشوة اللوز.', 'يغطى الحشو بباقي الرقائق وبنفس الطريقة في النصف الأول.', 'يسيح السمن ويصب على السطح وتدخل فرن متوسط الحرارة حتى يحمر لونها وتنضج.', 'بعد الخروج من الفرن تسقى بالشراب البارد وتغطى حتى تبرد تماما.']
      }
    }
  },
  {
    id: 'des-54',
    title: 'عمل حشوة اللوز',
    titleEn: 'Ground Almond Filling (for Baklawa)',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '-',
    servings: 'يكفي لبقلاوة واحدة',
    masterIngredients: [
      {
        id: 'db59-1',
        name: 'لوز مقشر مطحون ناعما',
        nameEn: 'Finely ground blanched almonds',
        standardAmount: '1/8 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db59-2',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1/8 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db59-3',
        name: 'بشر ليمون',
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
        id: 'db59-4',
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
        id: 'db59-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
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
        text: 'يخلط اللوز مع السكر ويقلبوا مع قليل من الماء.',
        textEn: 'Mix the almonds with the sugar and a little water.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تخفق البيضة جيدا وتضاف مع بشر الليمونة والفانيليا وتخلط الحشوة جيدا.',
        textEn: 'Beat the egg well and mix in with the lemon zest and vanilla, combining thoroughly.',
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
        title: 'عمل حشوة اللوز',
        ingredients: ['⅛ كيلو لوز مقشر مطحون ناعما', '⅛ كيلو سكر بودرة', 'بشر ليمونة', 'بيضة', 'فانيليا'],
        instructions: ['يخلط اللوز مع السكر ويقلبوا مع قليل من الماء.', 'تخفق البيضة جيدا و تضاف مع بشر الليمونة و الفانيليا و تخلط الحشوة جيدا.']
      }
    }
  },
  {
    id: 'des-55',
    title: 'الكنافة',
    titleEn: 'Kunafa with Nuts, Raisins and Coconut',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db60-1',
        name: 'كنافة',
        nameEn: 'Kunafa (shredded phyllo dough)',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db60-2',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '4 ملعقة كبيرة أو أكثر',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة أو أكثر'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db60-3',
        name: 'مكسرات مفرية',
        nameEn: 'Chopped nuts',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db60-4',
        name: 'زبيب',
        nameEn: 'Raisins',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db60-5',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db60-6',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db60-7',
        name: 'شربات',
        nameEn: 'Sugar syrup',
        standardAmount: 'حسب الحاجة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db60-8',
        name: 'فستق أو بندق للتجميل',
        nameEn: 'Pistachios or hazelnuts, for garnish',
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
        text: 'تفكك الكنافة بالأصابع رفيعا.',
        textEn: 'Loosen the kunafa strands finely with your fingers.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يسيح نصف مقدار السمن ويخلط بالكنافة.',
        textEn: 'Melt half the ghee and mix it into the kunafa.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدهن صينية وتفرد فيها نصف مقدار الكنافة، ثم يوضع الحشو من المكسرات المفرية والزبيب وجوز الهند مع ملعقة سكر.',
        textEn: 'Grease a tray and press in half the kunafa, then spread the filling of chopped nuts, raisins and coconut with a tablespoon of sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'توضع بقية الكنافة ويضغط عليها باليد ضغطا جيدا.',
        textEn: 'Top with the remaining kunafa, pressing down firmly by hand.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرش باقي مقدار السمن السايح على السطح وتدخل فرن متوسط الحرارة حتى يحمر السطح ثم تقلب على الوجه الآخر حتى يحمر بدوره.',
        textEn: 'Drizzle the remaining melted ghee on top and bake in a medium oven until golden, then flip to brown the other side.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تسقى بالشراب البارد وتغطى وتترك حتى تبرد، ثم تجمل إما بالفستق أو البندق.',
        textEn: 'Pour cold syrup over it, cover, let cool, and garnish with pistachios or hazelnuts.',
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
        title: 'الكنافة',
        ingredients: ['½ كيلو كنافة', '4 ملعقة كبيرة سمن أو أكثر', 'مكسرات مفرية', 'زبيب', 'جوز الهند', '1 ملعقة كبيرة سكر', 'شربات', 'فستق أو بندق للتجميل'],
        instructions: ['تفكك الكنافة بالأصابع رفيعا.', 'يسيح ½ مقدار السمن ويخلط بالكنافة.', 'تدهن صينية وتفرد فيها ½ مقدار الكنافة ثم يوضع الحشو من المكسرات المفرية والزبيب وجوز الهند مع ملعقة سكر.', 'توضع بقية الكنافة ويضغط عليها باليد ضغطا جيدا.', 'يرش باقي مقدار السمن السايح على السطح وتدخل فرن متوسط الحرارة حتى يحمر السطح ثم تقلب على الوجه الآخر حتى يحمر بدوره.', 'تسقى بالشراب البارد وتغطى وتترك حتى تبرد ثم تجمل إما بالفستق أو البندق.']
      }
    }
  },
  {
    id: 'des-56',
    title: 'كنافة عثمانلي',
    titleEn: 'Kunafa Osmalieh with Cream',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '20 دقيقة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db61-1',
        name: 'كنافة',
        nameEn: 'Kunafa (shredded phyllo dough)',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db61-2',
        name: 'سمن سايح',
        nameEn: 'Melted ghee',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db61-3',
        name: 'شربات',
        nameEn: 'Sugar syrup',
        standardAmount: 'حسب الحاجة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db61-4',
        name: 'قشدة أو كريمة',
        nameEn: 'Clotted cream, or cream',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db61-5',
        name: 'فستق أو بندق للتجميل',
        nameEn: 'Pistachios or hazelnuts, for garnish',
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
        text: 'تفكك الكنافة بالأصابع رفيعا.',
        textEn: 'Loosen the kunafa strands finely with your fingers.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تحمر الكنافة في السمن حتى يصير لونها ذهبيا.',
        textEn: 'Fry the kunafa in the ghee until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تسقى بالشراب البارد.',
        textEn: 'Pour cold syrup over it.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تفرد نصف مقدار الكنافة في طبق مستدير ثم توضع الكريمة أو القشدة.',
        textEn: 'Spread half the kunafa on a round plate, then add the cream or clotted cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'توضع بقية الكنافة ويضغط عليها باليد ضغطا جيدا.',
        textEn: 'Top with the remaining kunafa, pressing down firmly by hand.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تجمل إما بالفستق أو البندق.',
        textEn: 'Garnish with pistachios or hazelnuts.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'كنافة عثمانلي',
        ingredients: ['½ كيلو كنافة', '1 كوب سمن سايح', 'شربات', 'قشدة أو كريمة', 'فستق أو بندق للتجميل'],
        instructions: ['تفكك الكنافة بالأصابع رفيعا.', 'تحمر الكنافة في السمن حتى يصير لونها ذهبيا.', 'تسقى بالشراب البارد', 'تفرد ½ مقدار الكنافة في طبق مستدير ثم توضع الكريمة أو القشدة.', 'توضع بقية الكنافة ويضغط عليها باليد ضغطا جيدا.', 'تجمل إما بالفستق أو البندق.']
      }
    }
  },
  {
    id: 'des-57',
    title: 'القطايف',
    titleEn: 'Sweet Qatayef with Nuts and Coconut',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db62-1',
        name: 'قطايف صغيرة',
        nameEn: 'Small qatayef pancakes',
        standardAmount: '1/2 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db62-2',
        name: 'مكسرات مفرية غليظة',
        nameEn: 'Coarsely chopped nuts',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db62-3',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db62-4',
        name: 'زبيب',
        nameEn: 'Raisins',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db62-5',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db62-6',
        name: 'زيت أو سمن للتحمير',
        nameEn: 'Oil or ghee, for frying',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db62-7',
        name: 'فستق أو بندق للتجميل',
        nameEn: 'Pistachios or hazelnuts, for garnish',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db62-8',
        name: 'شربات',
        nameEn: 'Sugar syrup',
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
        text: 'تخلط المكسرات مع جوز الهند والزبيب مع السكر.',
        textEn: 'Mix the nuts with the coconut and raisins and sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع جزء من الحشو في القطايف ثم تطوى نصفين مع الضغط على الطرفين حتى يلتصقا.',
        textEn: 'Place some of the filling on a qatayef pancake, fold in half, and press the edges to seal.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تحمر في السمن أو الزيت المقدوح وتنشل.',
        textEn: 'Fry in hot ghee or oil and remove.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'توضع في الشراب البارد ثم ترفع منه بسرعة وتوضع في طبق التقديم.',
        textEn: 'Dip briefly in cold syrup, lift out quickly, and arrange on the serving plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يمكن أن تجمل برشها بالفستق أو البندق المفري.',
        textEn: 'Garnish with chopped pistachios or hazelnuts.',
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
        title: 'القطايف',
        ingredients: ['½ كيلو قطايف صغيرة', 'مكسرات مفرية غليظة', 'جوز الهند', 'زبيب', 'ملعقة كبيرة سكر', 'زيت أو سمن للتحمير', 'فستق أو بندق للتجميل', 'شربات'],
        instructions: ['تخلط المكسرات مع جوز الهند و الزبيب مع السكر', 'يوضع جزء من الحشو في القطايف ثم تطوى نصفين مع الضغط على الطرفين حتى يلتصقا.', 'تحمر في السمن أو الزيت المقدوح وتنشل.', 'توضع في الشراب البارد ثم ترفع منه بسرعة وتوضع في طبق التقديم.', 'يمكن أن تجمل برشها بالفستق أو البندق المفري.']
      }
    }
  },
  {
    id: 'des-58',
    title: 'بلح الشام',
    titleEn: 'Balah El-Sham (Fried Choux Pastry Fingers in Syrup)',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db63-1',
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
        id: 'db63-2',
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
        id: 'db63-3',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: 'حوالي 2 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حوالي 2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db63-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db63-5',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '3 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db63-6',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '5 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '5 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db63-7',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db63-8',
        name: 'شربات',
        nameEn: 'Sugar syrup',
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
        text: 'يخلط الدقيق بذرة الملح والبيكنج باودر.',
        textEn: 'Mix the flour with the salt and baking powder.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع الماء في إناء مع السمن أو الزبد حتى يغلي، ثم نضيف الدقيق كوبا تلو الآخر.',
        textEn: 'Bring the water to a boil with the ghee, then add the flour gradually.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نستمر في التقليب على درجة حرارة متوسطة لمدة 5 دقائق.',
        textEn: 'Continue stirring over medium heat for 5 minutes until it forms a smooth dough.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يرفع من الحرارة ويترك ليبرد.',
        textEn: 'Remove from the heat and let cool.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نضيف البيض واحدة تلو الأخرى مع عجنه باليد حتى تلف العجينة مع اليد.',
        textEn: 'Beat in the eggs one at a time, kneading by hand until the dough comes together smoothly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يقطع قطعا مناسبة ويحمر في الزيت الغزير ثم يرفع ويسقى بالشراب البارد.',
        textEn: 'Pipe or shape into fingers, deep-fry until golden, then soak in cold syrup.',
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
        title: 'بلح الشام',
        ingredients: ['2 كوب دقيق', 'ذرة ملح', 'حوالي 2 كوب ماء', 'فانيليا', '3 ملعقة كبيرة سمن', '5 بيضات', 'ملعقة كبيرة بيكينج باودر', 'شربات'],
        instructions: ['يخلط الدقيق بذرة الملح والبيكنج باودر.', 'يوضع الماء في إناء مع السمن أو الزبد حتى يغلي ثم نضيف الدقيق كوب تلو الاخر.', 'نستمر في التقليب على درجة حرارة متوسطة لمدة 5 دقائق.', 'يرفع من الحرارة ويترك ليبرد.', 'نضيف البيض واحدة تلو الاخرى مع عجنه باليد حتى تلف العجينة مع اليد.', 'يقطع قطع مناسبة ويحمر في الزيت الغزير ثم يرفع ويسقى بالشراب البارد.']
      }
    }
  },
  {
    id: 'des-59',
    title: 'البسيمة',
    titleEn: 'Basima — Baked Coconut and Milk Squares',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '8-10 قطع',
    masterIngredients: [
      {
        id: 'db64-1',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: '1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db64-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db64-3',
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
        id: 'db64-4',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1 كوب أو أقل',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب أو أقل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db64-5',
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
        id: 'db64-6',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسيَح السمن ثم يرفع من الحرارة ويضاف إليه اللبن والسكر.',
        textEn: 'Melt the ghee, remove from the heat, and stir in the milk and sugar.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يعاد إلى الحرارة ثانية مع التقليب حتى يذوب السكر تماما ويترك ليبرد.',
        textEn: 'Return to the heat, stirring until the sugar fully dissolves, then let cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف إليه جوز الهند المبشور ثم الدقيق المضاف إليه البيكنج باودر ويقلب الخليط جيدا حتى يتماسك.',
        textEn: 'Stir in the grated coconut, then the flour mixed with baking powder, until it comes together.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يصب الخليط في صينية مدهونة جيدا ويقطع سمبوسات.',
        textEn: 'Pour into a well-greased tray and score into diamond shapes.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
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
      totalUniqueSteps: 5,
      totalMasterIngredients: 6,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'البسيمة',
        ingredients: ['½ كيلو جوز الهند', '½ كيلو سكر', '2 كوب لبن', '1 كوب سمن أو أقل', '1 ملعقة صغيرة بيكينج باودر', '1 كوب دقيق'],
        instructions: ['يسيَح السمن ثم يرفع من الحرارة ويضاف إليه اللبن والسكر.', 'يعاد الى الحرارة ثانية مع التقليب حتى يذوب السكر تماما ويترك ليبرد.', 'يضاف إليه جوز الهند المبشور ثم الدقيق المضاف إليه البيكنج باودر ويقلب الخليط جيدا حتى يتماسك.', 'يصب الخليط في صينية مدهونة جيدا ويقطع سمبوسات.', 'يدخل فرن متوسط الحرارة حتى ينضج ويحمر الوجه.']
      }
    }
  },
  {
    id: 'des-60',
    title: 'جوز الهند',
    titleEn: 'Coconut Squares with Syrup and Nuts',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة (+تبريد)',
    cookTime: '10 دقائق',
    servings: '8-10 قطع',
    masterIngredients: [
      {
        id: 'db65-1',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: '1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db65-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '2 كوب أو أقل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 كوب أو أقل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db65-3',
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
        id: 'db65-4',
        name: 'مكسرات مفرية',
        nameEn: 'Chopped nuts',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db65-5',
        name: 'زبيب',
        nameEn: 'Raisins',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db65-6',
        name: 'فستق',
        nameEn: 'Pistachios',
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
        text: 'يضاف السكر إلى الماء في إناء ويرفع على درجة حرارة متوسطة حتى الغليان لمدة دقيقتين حتى يصبح القوام غليظا نوعا ما.',
        textEn: 'Boil the sugar with the water over medium heat for 2 minutes until it thickens somewhat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر إناء آخر ونضع فيه كمية جوز الهند، وبعد أن يبرد قليلا شراب السكر نضيفه إلى جوز الهند ويقلب جيدا.',
        textEn: 'In another bowl, add the coconut, and once the syrup has cooled slightly, pour it over the coconut, mixing well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نحضر صينية متوسطة ونفرش بها خليط جوز الهند ونضغطه باليد جيدا.',
        textEn: 'Press the coconut mixture into a medium tray firmly by hand.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف فوقه الزبيب والمكسرات المفرية والفستق ونضغطها في جوز الهند جيدا.',
        textEn: 'Press the raisins, chopped nuts and pistachios into the top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدخل الثلاجة حتى تبرد ويصبح قوامها جامدا ثم تقطع مربعات.',
        textEn: 'Refrigerate until firm, then cut into squares.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يمكن أن يشوح جوز الهند في تيفال بدون سمن حتى يصبح لونه ذهبيا ثم يجهز بنفس الطريقة السابقة.',
        textEn: 'The coconut can also be toasted dry in a non-stick pan until golden, then prepared the same way.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'جوز الهند المحمر',
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
        title: 'جوز الهند',
        ingredients: ['½ كيلو جوز الهند', '2 كوب سكر أو أقل', '1 كوب ماء', 'مكسرات مفرية', 'زبيب', 'فستق'],
        instructions: ['يضاف السكر إلى الماء في إناء ويرفع على درجة حرارة متوسطة حتى الغليان لمدة دقيقتين حتى يصبح قوامه غليظا نوعا ما.', 'نحضر إناء آخر ونضع فيه كمية جوز الهند وبعد أن يبرد قليلا شراب السكر نضيفه إلى جوز الهند ويقلب جيدا.', 'نحضر صينية متوسطة ونفرش بها خليط جوز الهند ونضغطه باليد جيدا.', 'نضيف فوقه الزبيب والمكسرات المفرية والفزدق ونضغطها في جوز الهند جيدا.', 'تدخل الثلاجة حتى تبرد ويصبح قوامها جامد ثم تقطع مربعات.', 'يمكن أن يشوح جوز الهند في تيفال بدون سمن حتى يصبح لونه ذهبيا ثم يجهز بنفس الطريقة السابقة.']
      }
    }
  },
  {
    id: 'des-61',
    title: 'البسيسة',
    titleEn: 'Basisa — Cornmeal and Yogurt Sheet Cake with Tangerine Zest',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '30 دقيقة',
    servings: '10-12 قطعة',
    masterIngredients: [
      {
        id: 'db66-1',
        name: 'دقيق ذرة',
        nameEn: 'Cornmeal',
        standardAmount: '3 أكواب كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3 أكواب كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db66-2',
        name: 'دقيق قمح',
        nameEn: 'Wheat flour',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db66-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db66-4',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db66-5',
        name: 'زبادي كبير',
        nameEn: 'Yogurt',
        standardAmount: '2 كوب كبير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب كبير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db66-6',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db66-7',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '4-5 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '4-5 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db66-8',
        name: 'قشر يوسفي',
        nameEn: 'Tangerine zest, washed and dried',
        standardAmount: '3 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يخلط الدقيق (الذرة + القمح) مع البيكنج باودر جيدا.',
        textEn: 'Mix the cornmeal and wheat flour well with the baking powder.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البيض بالمضرب ثم يضاف إليه السكر ويخفقوا جيدا.',
        textEn: 'Beat the eggs, add the sugar, and whisk well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف الزيت ويخلطوا جيدا، ثم يضاف الزبادي ثم قشر اليوسفي ثم الدقيق بالتدريج.',
        textEn: 'Mix in the oil, then the yogurt, then the tangerine zest, then gradually the flour mixture.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'لضبط سمك العجينة نضيف لها بعض الدقيق إن كانت خفيفة أو نضيف قليلا من اللبن إن كانت سميكة.',
        textEn: 'Adjust the batter\'s thickness by adding more flour if too thin, or a little milk if too thick.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 5,
        text: 'تدهن الصينية بالسمن وترش بالدقيق ثم نسكب فوقها العجينة ونهزها حتى تتساوى في الصينية.',
        textEn: 'Grease and flour the tray, pour in the batter, and shake gently to level.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدخل الفرن في درجة حرارة هادئة حتى يحمر الوجه.',
        textEn: 'Bake in a low oven until golden on top.',
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
        title: 'البسيسة',
        ingredients: ['3 أكواب كبيرة من دقيق الذرة', '1 كوب دقيق قمح', '2 كوب سكر', '1 كوب زيت', '2 كوب كبير زبادي', '1 ملعقة كبيرة بيكينج باودر يخلط مع نوعى الدقيق جيدا', '4 : 5 بيضات', '3 ملعقة كبيرة قشر يوسفي مغسول جيدا وجاف'],
        instructions: ['يخلط الدقيق (الذرة + القمح) مع البيكنج باودر جيدا.', 'يضرب البيض بالمضرب ثم يضاف إليه السكر ويخفقوا جيدا.', 'يضاف الزيت ويخلطوا جيدا ثم يضاف الزبادي ثم قشر اليوسفي ثم الدقيق بالتدريج.', 'لضبط سمك العجينة نضيف لها بعض الدقيق إن كانت خفيفة أو نضيف قليل من اللبن إن كانت سميكة.', 'تدهن الصينية بالسمن وترش بالدقيق ثم نسكب فوقه العجينة ونهزها حتى تتساوى في الصينية.', 'تدخل الفرن في درجة حرارة هادئة حتى يحمر الوجه.']
      }
    }
  },
  {
    id: 'des-62',
    title: 'البغاشة',
    titleEn: 'Baghasha — Fried Twisted Dough Rings in Syrup',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '6 أفراد',
    masterIngredients: [
      {
        id: 'db67-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1.5 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db67-2',
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
        id: 'db67-3',
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
        id: 'db67-4',
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
        id: 'db67-5',
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
        id: 'db67-6',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1/2 ملعقة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db67-7',
        name: 'شربات',
        nameEn: 'Sugar syrup',
        standardAmount: 'حسب الحاجة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db67-8',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'يخلط السمن مع الدقيق جيدا، ثم يخفق البيض بالمضرب ويعجن مع الدقيق مع إضافة قليل من الماء حتى تصير عجينة لينة.',
        textEn: 'Mix the ghee well into the flour, then whisk in the eggs and knead with a little water into a soft dough.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تفرد العجينة على صاج مرشوش دقيق بالنشابة وتقطع إلى شرائح حوالي 2 سم.',
        textEn: 'Roll out the dough on a floured surface and cut into strips about 2 cm wide.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تلف كل شريحة على شكل دائرة ثم تقلى في الزيت الغزير.',
        textEn: 'Twist each strip into a ring shape and deep-fry.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'توضع في الشراب البارد وتنشل ثم ترش بجوز الهند.',
        textEn: 'Dip in cold syrup, lift out, and sprinkle with coconut.',
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
        title: 'البغاشة',
        ingredients: ['½1 كوب دقيق', 'ذرة ملح', '½ كوب سمن', '2 بيضة', 'قليل من الماء', '½ ملعقة بيكينج باودر', 'شربات', 'جوز الهند'],
        instructions: ['يخلط السمن مع الدقيق جيدا ثم يخفق البيض بالمضرب ويعجن مع الدقيق مع إضافة قليل من الماء حتى تصير عجينة لينة.', 'تفرد العجينة على صاج مرشوش دقيق بالنشَابه وتقطع إلى شرائح حوالي 2سم.', 'تلف كل شريحة على شكل دائرة ثم تقلى في الزيت الغزير.', 'توضع في الشراب البارد و تنشل ثم ترش بجوز الهند.']
      }
    }
  },
  {
    id: 'des-63',
    title: 'الشكلمة',
    titleEn: 'Shaklama — Baked Coconut and Condensed Milk Bites',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '10 دقائق',
    cookTime: '30 دقيقة',
    servings: '12-15 قطعة',
    masterIngredients: [
      {
        id: 'db68-1',
        name: 'جوز هند',
        nameEn: 'Coconut',
        standardAmount: '3 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db68-2',
        name: 'لبن مركز محلى',
        nameEn: 'Sweetened condensed milk',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db68-3',
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
        text: 'تدعك المقادير جميعها جيدا.',
        textEn: 'Mix and knead all the ingredients together well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تدهن صينية بالسمن وتشكل بملعقة كور صغيرة أو باليد.',
        textEn: 'Grease a tray with ghee and shape the mixture into small balls with a spoon or by hand.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدخل الفرن لمدة نصف ساعة في درجة حرارة متوسطة حتى يكون لونها ذهبيا.',
        textEn: 'Bake in a medium oven for half an hour until golden.',
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
        title: 'الشكلمة',
        ingredients: ['3 كوب جوز هند', '1 كوب لبن مركَز محلَى', '1 ملعقة كبيرة سمن'],
        instructions: ['تدعك المقادير جميعها جيدا.', 'تدهن صينية بالسمن وتشكل بملعقة كور صغيرة أو باليد.', 'تدخل الفرن لمدة ½ ساعة في درجة حرارة متوسطة حتى يكون لونها ذهبيا.']
      }
    }
  },
  {
    id: 'des-64',
    title: 'عيش السرايا',
    titleEn: 'Aish El Saraya — Caramel-Soaked Toast Dessert',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db69-1',
        name: 'توست (حروف مقطوعة)',
        nameEn: 'Toast bread, crusts removed',
        standardAmount: '2/3 كيس',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2/3 كيس'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db69-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1.5 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db69-3',
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
        id: 'db69-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db69-5',
        name: 'قشدة أو كريم شانتيه',
        nameEn: 'Clotted cream, or Chantilly cream',
        standardAmount: 'للتزيين',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db69-6',
        name: 'فستق ومكسرات مفرية',
        nameEn: 'Pistachios and chopped nuts',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'تحرق على الموقد في إناء 4 ملاعق كبيرة من السكر بدون ماء مع هز الإناء دائما حتى يصير لون السكر ذهبيا ثم يحمر مع عدم حرقه.',
        textEn: 'Cook 4 tablespoons of the sugar dry in a pot, swirling constantly, until it turns golden then amber, without burning.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضع عليه بقية السكر ثم نضيف الماء مع تغطية الإناء وتركه على درجة حرارة هادئة حتى يغلي ويذوب السكر تماما، ثم نضيف الفانيليا.',
        textEn: 'Add the rest of the sugar and the water, cover, and simmer over low heat until it boils and the sugar fully dissolves, then stir in the vanilla.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نرتب التوست في بايركس أو صينية تقديم بوضع طبقتين من التوست فوق بعضهما حتى تنتهي الكمية.',
        textEn: 'Arrange the toast in a Pyrex dish or serving tray, layering two slices deep until finished.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يسكب المحلول ساخنا على التوست بالضغط عليه بالملعقة حتى يتشرب تماما ويترك ليبرد.',
        textEn: 'Pour the hot syrup over the toast, pressing with a spoon until fully absorbed, and let cool.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'ممكن تجميله إما بالقشدة أو عمل كريم شانتيه وسكبه على الوجه حتى يتغطى التوست بالكامل.',
        textEn: 'Garnish with clotted cream, or Chantilly cream poured over to fully cover the toast.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يضاف عليه الفستق أو المكسرات المفرية.',
        textEn: 'Sprinkle with pistachios or chopped nuts.',
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
        title: 'عيش السرايا',
        ingredients: ['⅔ كيس توست تقطع الحروف الناشفة منه', '½1 كوب سكر', '½1 كوب ماء', 'فانيليا', 'قشدة أو كريم شانتيه', 'فستق', 'مكسرات مفرية'],
        instructions: ['تحرق على البوتاجاز في إناء 4 ملاعق كبيرة من السكر بدون ماء مع هز الإناء دائما حتى يصير لون السكر ذهبي ثم يحمر مع عدم حرقه.', 'نضع عليه بقية السكر ثم نضيف الماء مع تغطية الإناء وتركه على درجة حرارة هادئة حتى يغلي ويذوب السكر تماما ثم نضيف الفانيليا.', 'نرتب التوست في بايركس أو صينية تقديم بوضع طبقتين من التوست فوق بعضهما حتى تنتهي الكمية.', 'يسكب المحلول ساخنا على التوست بالضغط عليه بالملعقة حتى يتشرب تماما ويترك ليبرد.', 'ممكن تجميله إما بالقشدة أو عمل كريم شانتيه وسكبه على الوجه حتى يتغطى التوست بالكامل.', 'يضاف عليه الفستق أو المكسرات المفرية.']
      }
    }
  },
  {
    id: 'des-65',
    title: 'الأورميك',
    titleEn: 'Awarma-Style Toasted Semolina Sweet',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db70-1',
        name: 'دقيق سميد',
        nameEn: 'Semolina flour',
        standardAmount: '1 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db70-2',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '2/3 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '2/3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db70-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db70-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db70-5',
        name: 'مكسرات',
        nameEn: 'Nuts',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db70-6',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db70-7',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسيح السمن في إناء على درجة حرارة هادئة ثم نسكب الدقيق ويقلب حتى يصبح اللون ذهبيا.',
        textEn: 'Melt the ghee over low heat, add the semolina, and stir until golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يذاب السكر في الماء إما بضربه في الخلاط أو بغليه على الموقد مسبقا مع الفانيليا وتركه يبرد.',
        textEn: 'Dissolve the sugar in the water, either blended or pre-boiled with the vanilla, and let it cool.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يسكب المحلول السكري على خليط الدقيق ونقلبه حتى يتشرب المحلول.',
        textEn: 'Pour the sugar syrup over the toasted semolina and stir until absorbed.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر طبقا مسطحا وتفرد فيه العجينة ونغطيها بالمكسرات وجوز الهند.',
        textEn: 'Spread onto a flat plate and cover with nuts and coconut.',
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
        title: 'الأورميك',
        ingredients: ['1 كوب دقيق السميد', '⅔ كوب ماء', 'فانيليا', '½ كوب سكر', 'مكسرات', 'جوز الهند', '2 ملعقة كبيرة سمن'],
        instructions: ['يسيح السمن في إناء على درجة حرارة هادئة ثم نسكب الدقيق ويقلب حتى يصبح اللون ذهبي.', 'يذاب السكر في الماء إما بضربه في الخلاط أو بغليه على البوتاجاز مسبقا مع الفانيليا وتركه يبرد.', 'يسكب المحلول السكري على خليط الدقيق ونقلبه حتى يتشرب المحلول.', 'نحضر طبق مسطح وتفرد فيه العجينة ونغطيها بالمكسرات وجوز الهند.']
      }
    }
  },
  {
    id: 'des-66',
    title: 'سد الحنك',
    titleEn: 'Sadd El-Hanak — Toasted Flour Sweet with Coconut',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '15 دقيقة',
    servings: '4 أفراد',
    masterIngredients: [
      {
        id: 'db71-1',
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
        id: 'db71-2',
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
        id: 'db71-3',
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
        id: 'db71-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db71-5',
        name: 'جوز الهند ومكسرات للتزيين',
        nameEn: 'Coconut and nuts, for garnish',
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
        text: 'يذاب السكر في الماء بضربه في الخلاط.',
        textEn: 'Dissolve the sugar in the water by blending.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يسيح السمن في إناء ثم يوضع الدقيق ويقلب حتى يصير لونه أكثر من الأصفر.',
        textEn: 'Melt the ghee, add the flour, and stir until it turns a deep golden color.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع من الحرارة ويسكب عليه المحلول السكري البارد ويقلب جيدا.',
        textEn: 'Remove from the heat, pour in the cooled sugar solution, and mix well.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يرفع على الموقد ويقلب بخفة على درجة حرارة منخفضة حتى يلف في الإناء.',
        textEn: 'Return to low heat, stirring gently, until it comes together and pulls away from the pot.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يفرش في صينية ويرش بجوز الهند والمكسرات ثم يقطع مربعات.',
        textEn: 'Spread in a tray, sprinkle with coconut and nuts, and cut into squares.',
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
        title: 'سد الحنك',
        ingredients: ['1 كوب دقيق', '2 ملعقة كبيرة سمن', '1 كوب ماء', '½ كوب سكر'],
        instructions: ['يذاب السكر في الماء بضربه في الخلاط.', 'يسيح السمن في إناء ثم يوضع الدقيق ويقلب حتى يصير لونه أكثر من الأصفر.', 'يرفع من الحرارة ويسكب عليه المحلول السكري البارد ويقلب جيدا.', 'يرفع على البوتاجاز ويقلب بخفة على درجة حرارة منخفضة حتى يلف في الإناء.', 'يفرش في صينية ويرش بجوز الهند والمكسرات ثم يقطع مربعات.']
      }
    }
  },
  {
    id: 'des-67',
    title: 'أم علي',
    titleEn: 'Om Ali — Baked Phyllo Milk Pudding with Nuts',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db72-1',
        name: 'جلاش',
        nameEn: 'Phyllo pastry',
        standardAmount: '1/4 لفة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/4 لفة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db72-2',
        name: 'مكسرات (لوز وبندق)',
        nameEn: 'Nuts (almonds and hazelnuts)',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db72-3',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1 كيلو أو أكثر حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كيلو أو أكثر حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db72-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db72-5',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: 'حسب الحاجة للتحمير',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة للتحمير'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db72-6',
        name: 'كريم شانتيه أو قشدة',
        nameEn: 'Chantilly cream, or clotted cream',
        standardAmount: 'للوجه',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'للوجه'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db72-7',
        name: 'زبيب وجوز هند وقرفة',
        nameEn: 'Raisins, coconut and cinnamon',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db72-8',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'حسب اللبن (3 ملعقة صغيرة لكل كوب)',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب اللبن (3 ملعقة صغيرة لكل كوب)'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يحمر الجلاش في سمن أو زيت واحدة تلو الأخرى ثم ترفع على مناديل ورقية.',
        textEn: 'Fry the phyllo sheets one at a time in ghee or oil, then drain on paper towels.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يمكن بدلا من ذلك أن يوضع الجلاش مقطعا في صينية في الفرن ويدخل حتى يأخذ اللون الذهبي من الناحيتين.',
        textEn: 'Alternatively, torn phyllo can be baked on a tray in the oven until golden on both sides.',
        phase: 'alternative',
        isAlternative: true,
        alternativeLabel: 'طريقة الفرن بدلا من القلي',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 3,
        text: 'يسخن قليل من الماء ثم يسلق فيه اللوز ويرفع بمجرد أن تطرى القشرة لمدة دقيقة ثم يقشر، وبنفس الطريقة يسلق البندق ويقشر ثم يحمر.',
        textEn: 'Blanch the almonds briefly until the skins loosen, then peel; blanch and peel the hazelnuts the same way, then toast.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر بايركس ونضع فيه الجلاش المفتت ونخلطه باللوز والبندق المفريين مع الزبيب وجوز الهند وقليل من القرفة.',
        textEn: 'In a Pyrex dish, combine the crumbled phyllo with the chopped almonds and hazelnuts, raisins, coconut and a little cinnamon.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يغلي اللبن المحلى بالسكر، تقريبا لكل كوب لبن 3 ملعقة صغيرة سكر، ثم الفانيليا.',
        textEn: 'Boil the milk sweetened with sugar (about 3 teaspoons per cup) with the vanilla.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يسكب اللبن الساخن على الجلاش ويدخل الفرن من 8 إلى 10 دقائق.',
        textEn: 'Pour the hot milk over the phyllo and bake for 8-10 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يسكب الكريم شانتيه أو القشدة على الوجه ثم تدخل تحت الشواية قليلا جدا حتى يحمر الوجه.',
        textEn: 'Top with Chantilly cream or clotted cream and broil very briefly until golden.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يفضَل أن تؤكل دافئة.',
        textEn: 'Best served warm.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'أم علي',
        ingredients: ['¼ لفة جلاش', 'مكسرات', '1 كيلو لبن أو أكثر حسب الحاجة', 'فانيليا', 'سمن', 'كريم شانتيه أو قشدة', 'مكسرات', 'قرفة'],
        instructions: ['يحمر الجلاش في سمن أو زيت واحدة تلو الأخرى ثم ترفع على مناديل ورقية.', 'يمكن بدلا من ذلك أن يوضع الجلاش مقطعا في صينية في الفرن ويدخل حتى يأخذ اللون الذهبي من الناحيتين.', 'يسخن قليل من الماء ثم يسلق فيه اللوز ويرفع بمجرد أن تطرى القشرة لمدة دقيقة ثم يقشر.', 'بنفس الطريقة يسلق البندق ويقشر ثم يحمر.', 'نحضر بايركس ونضع فيه الجلاش المفتت ونخلطه باللوز والبندق المفريين مع الزبيب و جوز الهند وقليل من القرفة.', 'يغلي اللبن المحلي بالسكر ، تقريبا لكل كوب لبن 3 ملعقة صغيرة سكر ثم الفانيليا.', 'يسكب اللبن الساخن على الجلاش ويدخل الفرن من 8 : 10 دقائق.', 'يسكب الكريم شانتيه أو القشدة على الوجه ثم تدخل تحت الشواية قليلا جدا حتى يحمر الوجه.', 'يفضَل أن تؤكل دافئة.']
      }
    }
  },
  {
    id: 'des-68',
    title: 'رموش الست',
    titleEn: '"Lady\'s Lashes" — Almond-Shaped Semolina Cookies in Syrup',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '20 دقيقة',
    servings: '20-25 قطعة',
    masterIngredients: [
      {
        id: 'db73-1',
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
        id: 'db73-2',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db73-3',
        name: 'زبد',
        nameEn: 'Butter',
        standardAmount: '1.5 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db73-4',
        name: 'دقيق سميد',
        nameEn: 'Semolina flour',
        standardAmount: '1/2 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db73-5',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db73-6',
        name: 'بياض بيض',
        nameEn: 'Egg whites',
        standardAmount: '3 بياض',
        category: 'other',
        sourceVariations: {
          doc1: '3 بياض'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db73-7',
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
        id: 'db73-8',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db73-9',
        name: 'شربات',
        nameEn: 'Sugar syrup',
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
        text: 'يضاف البيكنج باودر للدقيق وذرة ملح.',
        textEn: 'Mix the baking powder and a pinch of salt into the flour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفف السكر مع الزبدة بالمضرب حتى يصير مثل الكريمة، ثم يضاف دقيق السميد وجوز الهند مع التقليب الجيد.',
        textEn: 'Cream the sugar with the butter until light, then mix in the semolina and coconut.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفق بياض البيض مع الفانيليا ويقلب مع الخليط السابق.',
        textEn: 'Whisk the egg whites with the vanilla and fold into the mixture.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف للعجينة الدقيق ويعجن جيدا حتى يتجانس.',
        textEn: 'Work in the flour mixture and knead until combined.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تقطع العجينة على شكل عيون وترص في صينية مدهونة زيت خفيف.',
        textEn: 'Shape into small almond ("eye") shapes and arrange on a lightly oiled tray.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدخل فرن متوسط الحرارة حتى يتم النضج.',
        textEn: 'Bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تسقى بالشراب البارد وترص في صحن التقديم.',
        textEn: 'Soak in cold syrup and arrange on the serving plate.',
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
        title: 'رموش الست',
        ingredients: ['½2 كوب دقيق', '½ كوب سكر بودرة', '½1 كوب زبد', '½ كوب دقيق سميد', '½ كوب جوز الهند', '3 بياض بيض', '1 ملعقة صغيرة بيكينج باودر', 'فانيليا', 'شربات'],
        instructions: ['يضاف البيكنج باودر للدقيق وذرة ملح.', 'يخفف السكر مع الزبدة بالمضرب حتى يصير مثل الكريمة ثم يضاف دقيق السميد وجوز الهند مع التقليب الجيد.', 'يخفق بياض البيض مع الفانيليا ويقلب مع الخليط السابق.', 'يضاف للعجينة الدقيق ويعجن جيدا حتى يتجانس.', 'تقطع العجينية على شكل عيون وترص في صينية مدهونة زيت خفيف.', 'تدخل فرن متوسط الحرارة حتى يتم النضج.', 'تسقى بالشراب البارد وترص في صحن التقديم.']
      }
    }
  },
  {
    id: 'des-69',
    title: 'الكسكسي الحلو',
    titleEn: 'Sweet Steamed Couscous with Ghee',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '15 دقيقة',
    cookTime: '1 ساعة',
    servings: '4-6 أفراد',
    masterIngredients: [
      {
        id: 'db74-1',
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
        id: 'db74-2',
        name: 'دقيق',
        nameEn: 'Flour (for sealing the steamer)',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db74-3',
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
        id: 'db74-4',
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
        id: 'db74-5',
        name: 'سكر ناعم وجوز هند للتقديم',
        nameEn: 'Fine sugar and coconut, for serving',
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
        text: 'نحضر إناء واسعا ومرتفع الحافة ويملأ بالماء لمنتصفه، وتوضع مصفاة فوقه وتلحم معها بطبقة من العجين (دقيق معجون بالماء)، ويرفع على درجة حرارة متوسطة حتى الغليان.',
        textEn: 'Fill a wide, deep pot halfway with water. Place a steamer basket over it, sealing the join with a strip of flour-and-water dough, and bring to a boil over medium heat.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع الكسكسي في شاش بحجمه وتطوى أطرافها داخل المصفاة لتغطيته، ثم تغطى بغطاء الإناء، ويترك على درجة حرارة هادئة من 20 إلى 30 دقيقة.',
        textEn: 'Place the couscous in a cloth sized to fit the steamer, fold the edges over to cover it, put the lid on, and steam over low heat for 20-30 minutes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترفع الشاش من المصفاة بحرص ويفرد الكسكسي في وعاء ويقلب بالمقصوصة لفصل الذرات بعضها عن بعض، ثم يترك ليهدأ. يرش بمقدار كوب من الماء البارد أو المرق وتفكك الذرات بخفة باليد.',
        textEn: 'Carefully lift out the cloth and spread the couscous in a bowl, fluffing it with a fork, then let it rest. Sprinkle with about a cup of cold water or broth and gently break up the grains by hand.',
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
        text: 'يغرف في صحن ويرش بالسكر الناعم مع إضافة جوز الهند.',
        textEn: 'Serve in a dish, sprinkled with fine sugar and coconut.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 6,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الكسكسي الحلو',
        ingredients: ['½ كيلو كسكسي', '2 ملعقة كبيرة دقيق', '1 كوب مرق أو ماء', '2 ملعقة كبيرة سمن'],
        instructions: ['نحضر إناء واسع ومرتفع الحافة ويملأ بالماء لمنتصفه.', 'توضع مصفاة فوق الإناء وتلحم معها بطبقة من العجين (المكون من دقيق معجون بالماء).', 'يرفع الإناء على درجة حرارة متوسطة حتى الغليان.', 'يوضع الكسكسي في شاشة بحجمه وتطوى أطرافها داخل المصفاة لتغطيته ثم تغطى بغطاء الإناء.', 'يترك على درجة حرارة هادئة من 20 : 30 دقيقة.', 'ترفع الشاشة من المصفاة بحرص ويفرد الكسكسي في وعاء ويقلب بالمقصوصة لفصل الذرات بعضها عن بعض ثم يترك ليهدأ.', 'يرش بمقدار كوب من الماء البارد أو المرق وتفكك الذرات بخفه باليد.', 'يعاد الكسكسي إلى الشاشة ويوضع في المصفاة ويغطي ويطهى ثانيا لمدة 30 دقيقة.', 'ينزع من الشاشة ويوضع في الوعاء على درجة حرارة هادئة ويضاف إليه السمن حسب الرغبة ويقلَب بالمقصوصة وهو ساخن.', 'يغرف في صحن ويرش بالسكر الناعم مع إضافة جوز الهند.']
      }
    }
  },
  {
    id: 'des-70',
    title: 'الغريِبة',
    titleEn: 'Ghraybeh — Melt-in-the-Mouth Shortbread with Almonds',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '20 دقيقة',
    servings: '15-18 قطعة',
    masterIngredients: [
      {
        id: 'db75-1',
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
        id: 'db75-2',
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
        id: 'db75-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/4 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db75-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db75-5',
        name: 'لوز مقشور',
        nameEn: 'Peeled almonds',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'يدعك السمن مع السكر جيدا حتى يصير كالقشدة، ثم يضاف إليه الدقيق حتى يصبح عجينة مناسبة.',
        textEn: 'Cream the ghee with the sugar until smooth, then work in the flour to form a suitable dough.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تقطع مستديرات صغيرة ويغرز في وسطها لوزة مقشرة.',
        textEn: 'Shape into small rounds and press a peeled almond into the center of each.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترص على صاج فرن غير مدهون.',
        textEn: 'Arrange on an ungreased baking sheet.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن هادئ الحرارة حتى لا يتغير لونها.',
        textEn: 'Bake in a low oven, keeping them pale — they should not brown.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد النضج تترك لتبرد.',
        textEn: 'Let cool once baked.',
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
        title: 'الغريِبة',
        ingredients: ['1كوب دقيق', '½ كوب سمن', '¼ كوب سكر', 'فانيليا', 'لوز مقشور'],
        instructions: ['يدعك السمن مع السكر جيدا حتى يصير كالقشدة ثم يضاف إليه الدقيق حتى يصبح عجينة مناسبة.', 'تقطع مستديرات صغيرة ويغرز في وسطها لوزة مقشرة.', 'ترص على صاج فرن غير مدهون.', 'تدخل فرن هادئ الحرارة حتى لا يتغير لونها.', 'بعد النضج تترك لتبرد.']
      }
    }
  },
  {
    id: 'des-71',
    title: 'الكحك',
    titleEn: 'Kahk — Egyptian Eid Cookies, Stuffed',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '40 دقيقة',
    cookTime: '20 دقيقة',
    servings: '30-35 قطعة',
    masterIngredients: [
      {
        id: 'db76-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db76-2',
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
        id: 'db76-3',
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
        id: 'db76-4',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1/2 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db76-5',
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
        id: 'db76-6',
        name: 'رائحة الكحك',
        nameEn: 'Kahk essence (mahlab and spice blend)',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db76-7',
        name: 'سمسم',
        nameEn: 'Sesame seeds',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db76-8',
        name: 'حشوة الكحك (ملبن أو عجمية، انظري الوصفتين التاليتين)',
        nameEn: 'Kahk filling — malban or ajamiya (see recipes below)',
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
        text: 'يخلط جزء صغير من الدقيق بالبيكنج باودر ويترك جانبا.',
        textEn: 'Mix a small portion of the flour with the baking powder and set aside.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقدح السمن ويصب على بقية الدقيق، ثم نضيف باقي الدقيق المخلوط بالبيكنج باودر.',
        textEn: 'Heat the ghee and pour it over the rest of the flour, then add the flour-baking powder mixture.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تضاف رائحة الكحك والسمسم.',
        textEn: 'Add the kahk essence and sesame seeds.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يذاب الملح في الماء الدافئ ثم يعجن به الدقيق.',
        textEn: 'Dissolve the salt in warm water and knead into the flour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يشكل مستديرات صغيرة نوعا ويحشى.',
        textEn: 'Shape into fairly small rounds and stuff with the filling.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'ينقش ثم يخبز على صاج في فرن متوسط الحرارة.',
        textEn: 'Stamp a pattern on top with kahk tongs, and bake on a tray in a medium oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يترك ليهدأ ثم يرش بالسكر البودرة.',
        textEn: 'Let cool, then dust with powdered sugar.',
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
        title: 'الكحك',
        ingredients: ['1 كيلو دقيق', 'ذرَة ملح', '1 ملعقة صغيرة بيكينج باودر', '½ كيلو سمن', '½1 كوب ماء', '1 ملعقة كبيرة رائحة الكحك', '1 ملعقة كبيرة سمسم', 'حشوة الكحك'],
        instructions: ['يخلط جزء صغير من الدقيق بالبيكنج باودر ويترك جانبا.', 'يقدح السمن ويصب على بقية الدقيق ثم نضيف باقي الدقيق المخلوط بالبيكنج باودر.', 'تضاف رائحة الكحك والسمسم.', 'يذاب الملح في الماء الدافئ ثم يعجن به الدقيق.', 'يشكل مستديرات صغيرة نوعا و يحشى.', 'ينقش ثم يخبز على صاج في فرن متوسط الحرارة.', 'يترك ليهدأ ثم يرش بالسكر البودرة.']
      }
    }
  },
  {
    id: 'des-72',
    title: 'عمل حشوة الملبن',
    titleEn: 'Malban (Turkish Delight) Filling for Kahk',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '-',
    servings: 'يكفي لعجينة كحك واحدة',
    masterIngredients: [
      {
        id: 'db77-1',
        name: 'ملبن',
        nameEn: 'Malban (Turkish delight)',
        standardAmount: '1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db77-2',
        name: 'عين جمل',
        nameEn: 'Walnuts',
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
        text: 'يقطع الملبن صغيرا ويخلط بعين الجمل.',
        textEn: 'Dice the malban small and mix with the walnuts.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 1,
      totalMasterIngredients: 2,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'عمل حشوة الملبن',
        ingredients: ['½ كيلو ملبن', 'عين جمل'],
        instructions: ['يقطع الملبن صغيرا ويخلط بعين الجمل.']
      }
    }
  },
  {
    id: 'des-73',
    title: 'عمل حشوة العجمية',
    titleEn: 'Ajamiya — Honey, Sesame and Flour Filling for Kahk',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '10 دقائق',
    servings: 'يكفي لعجينة كحك واحدة',
    masterIngredients: [
      {
        id: 'db78-1',
        name: 'عسل أبيض',
        nameEn: 'White honey (light molasses)',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db78-2',
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
        id: 'db78-3',
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
        id: 'db78-4',
        name: 'رائحة كحك أو فانيليا',
        nameEn: 'Kahk essence, or vanilla',
        standardAmount: '1 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db78-5',
        name: 'سمسم',
        nameEn: 'Sesame seeds',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
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
        text: 'يقدح السمن ويضاف إليه الدقيق ورائحة الكحك أو الفانيليا ويقلبوا على درجة حرارة هادئة حتى يصفر لون الدقيق، ثم يضاف السمسم حتى يصفر، ثم يرفع الإناء من الحرارة.',
        textEn: 'Heat the ghee, add the flour and kahk essence or vanilla, and stir over low heat until the flour turns golden, then add the sesame until golden, and remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف العسل تدريجيا مع التقليب الجيد، ثم يعاد الإناء على الموقد مع التقليب المستمر حتى يغلظ قوامها.',
        textEn: 'Gradually stir in the honey, then return to the heat, stirring constantly, until it thickens.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع من الموقد ويرش بالفانيليا في حالة استعمالها وتترك حتى تبرد.',
        textEn: 'Remove from the heat, stir in vanilla if using it, and let cool.',
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
        title: 'عمل حشوة العجمية',
        ingredients: ['1 كوب عسل أبيض', '1 ملعقة كبيرة دقيق', '1 ملعقة كبيرة سمن', '1 ملعقة صغيرة رائحة كحك أو فانيليا', '1 ملعقة كبيرة سمسم'],
        instructions: ['يقدح السمن ويضاف إليه الدقيق ورائحة الكحك أو الفانيليا ويقلبوا على درجة حرارة هادئة حتى يصفر لون الدقيق ثم يضاف السمسم حتى يصفر ثم يرفع الإناء من الحرارة.', 'يضاف العسل تدريجيا مع التقليب الجيد ثم يعاد الإناء على البوتاجاز مع التقليب المستمر حتى يغلظ قوامها.', 'يرفع من البوتاجاز ويرش بالفانيليا في حالة استعمالها وتترك حتى تبرد.']
      }
    }
  },
  {
    id: 'des-74',
    title: 'المنين',
    titleEn: 'Mounin — Yeasted Anise and Sesame Bread Rolls',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '40 دقيقة (+تخمير)',
    cookTime: '25 دقيقة',
    servings: '10-12 قطعة',
    masterIngredients: [
      {
        id: 'db79-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db79-2',
        name: 'ملح',
        nameEn: 'Salt',
        standardAmount: '1/4 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1/4 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db79-3',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1/2 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db79-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/4 إلى 1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/4 إلى 1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db79-5',
        name: 'شمر وينسون',
        nameEn: 'Fennel and anise seeds',
        standardAmount: '1 ملعقة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db79-6',
        name: 'سمسم',
        nameEn: 'Sesame seeds',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db79-7',
        name: 'خميرة بيرة',
        nameEn: 'Fresh yeast',
        standardAmount: '1 قطعة بحجم عين الجمل',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 قطعة بحجم عين الجمل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db79-8',
        name: 'ماء دافئ',
        nameEn: 'Warm water, for the dough',
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
        text: 'يضاف الملح والشمر والينسون إلى الدقيق.',
        textEn: 'Mix the salt, fennel and anise into the flour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تعمل حفرة بوسط الدقيق ويوضع فيها السمسم.',
        textEn: 'Make a well in the center of the flour and add the sesame.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يقدح السمن ويصب في الحفرة، ثم يقلب جيدا مع الدقيق بملعقة خشب حتى تهدأ الحرارة، ثم يفرك جيدا باليد، ثم يضاف السكر ويفركوا معا.',
        textEn: 'Heat the ghee and pour into the well, stir with a wooden spoon, then rub in by hand once cool, then work in the sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدعك الخميرة بقليل من السكر حتى تسيل، ثم يضاف إليها قليل من الماء الدافئ، ثم تضاف إلى الدقيق وتعجن جيدا مع إضافة الماء الدافئ تدريجيا حتى تصبح العجينة يابسة نوعا.',
        textEn: 'Rub the yeast with a little sugar until liquid, add a little warm water, then knead into the flour, adding warm water gradually until a fairly firm dough forms.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تغطى العجينة وتترك لتختمر.',
        textEn: 'Cover the dough and let it rise.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تقطع ثم تشكل مستديرات بحجم متساو.',
        textEn: 'Divide and shape into equal-sized rounds.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'نحضر صاجا ويرش خفيفا بالدقيق، ثم توضع العجينة ويدهن الوجه بالسمن السايح ويترك لفترة أخرى ليختمر.',
        textEn: 'Lightly flour a baking sheet, arrange the dough, brush the tops with melted ghee, and let rise again.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يدخل في فرن متوسط الحرارة حتى النضج.',
        textEn: 'Bake in a medium oven until cooked through.',
        phase: 'cook',
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
        title: 'المنين',
        ingredients: ['1 كيلو دقيق', '¼ ملعقة صغيرة ملح', '½ كيلو سمن', '¼ : ½ كيلو سكر', 'ملعقة شمر و ينسون', 'ملعقة كبيرة سمسم', 'قطعة خميرة بيرة بحجم عين الجمل', 'ماء دافئ للعجن'],
        instructions: ['يضاف الملح والشمر والينسون إلى الدقيق.', 'تعمل حفرة بوسط الدقيق ويوضع فيها السمسم.', 'يقدح السمن ويصب في الحفرة ثم يقلب جيدا مع الدقيق بملعقة خشب حتى تهدأ الحرارة ثم يفرك جيدا باليد ثم يضاف السكر ويفركوا معا.', 'تدعك الخميرة بقليل من السكر حتى تسيل ثم يضاف إليها قليل من الماء الدافئ ثم تضاف إلى الدقيق وتعجن جيدا مع إضافة الماء الدافئ تدريجيا حتى تصبح العجينة يابسة نوعا.', 'تغطى العجينة وتترك لتختمر.', 'تقطع ثم تشكل مستديرات بحجم متساو.', 'نحضر صاج ويرش خفيفا بالدقيق ثم توضع العجينة ويدهن الوجه بالسمن السايح ويترك لفترة أخرى ليختمر.', 'يدخل في فرن متوسط الحرارة حتى النضج.']
      }
    }
  },
  {
    id: 'des-75',
    title: 'الفطير بالعجوة',
    titleEn: 'Date-Stuffed Yeasted Fatir',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '50 دقيقة (+تخمير)',
    cookTime: '25 دقيقة',
    servings: '10-12 قطعة',
    masterIngredients: [
      {
        id: 'db80-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1 كيلو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db80-2',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1/2 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db80-3',
        name: 'عجوة (بلح)',
        nameEn: 'Date paste (ajwa)',
        standardAmount: '1/2 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db80-4',
        name: 'سمسم',
        nameEn: 'Sesame seeds',
        standardAmount: '1 ملعقة كبيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db80-5',
        name: 'شمر وينسون',
        nameEn: 'Fennel and anise seeds',
        standardAmount: '1 ملعقة صغيرة',
        category: 'spice_seasoning',
        sourceVariations: {
          doc1: '1 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db80-6',
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
        id: 'db80-7',
        name: 'ماء دافئ',
        nameEn: 'Warm water, for the dough',
        standardAmount: 'حسب الحاجة',
        category: 'liquid',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db80-8',
        name: 'سكر وملح',
        nameEn: 'Sugar and salt',
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
        text: 'تقشر العجوة وتفصص ثم تضرب في الكبة.',
        textEn: 'Pit and segment the dates, then process in a food mill.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تعجن العجوة بحوالي 2 ملعقة كبيرة سمن من المقدار جيدا.',
        textEn: 'Knead the date paste well with about 2 tablespoons of the ghee.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف الملح والشمر والينسون إلى الدقيق.',
        textEn: 'Mix the salt, fennel and anise into the flour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تعمل حفرة بوسط الدقيق ويوضع فيها السمسم.',
        textEn: 'Make a well in the center of the flour and add the sesame.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يقدح السمن ويصب في الحفرة، ثم يقلب جيدا مع الدقيق بملعقة خشب حتى تهدأ الحرارة، ثم يفرك جيدا باليد، ثم يضاف السكر ويفركوا معا.',
        textEn: 'Heat the remaining ghee and pour into the well, stir with a wooden spoon, then rub in by hand once cool, then work in the sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدعك الخميرة بقليل من السكر حتى تسيل، ثم يضاف إليها قليل من الماء الدافئ، ثم تضاف إلى الدقيق وتعجن جيدا مع إضافة الماء الدافئ تدريجيا حتى تصبح العجينة يابسة نوعا.',
        textEn: 'Rub the yeast with a little sugar until liquid, add a little warm water, then knead into the flour, adding warm water gradually until a fairly firm dough forms.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تغطى العجينة وتترك لتختمر.',
        textEn: 'Cover the dough and let it rise.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'تؤخذ قطعة تلو الأخرى من العجين وتكور وتحفر بوسطها لوضع قطعة من العجوة، ثم تغلق العجينة وتبطط، وهكذا حتى انتهاء المقدار.',
        textEn: 'Take pieces of dough, one at a time, roll into balls, hollow the center to add a piece of date paste, seal, and flatten; repeat until finished.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'يرص الفطير على الصاج ويترك لمدة بسيطة حتى يختمر ثم يدخل في فرن متوسط الحرارة.',
        textEn: 'Arrange on a baking sheet, let rise briefly, then bake in a medium oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 9,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'الفطير بالعجوة',
        ingredients: ['1 كيلو دقق', '½ كيلو سمن', '½ كيلو عجوة', 'ملعقة كبيرة سمسم', 'ملعقة صغيرة شمر وينسون', 'قطعة خميرة بيرة', 'ماء دافئ للعجن'],
        instructions: ['تقشر العجوة وتفصص ثم تضرب في الكبة.', 'تعجن العجوة بحوالي 2 ملعقة كبيرة سمن من المقدار جيدا.', 'يضاف الملح والشمر والينسون إلى الدقيق.', 'تعمل حفرة بوسط الدقيق ويوضع فيها السمسم.', 'يقدح السمن ويصب في الحفرة ثم يقلب جيدا مع الدقيق بملعقة خشب حتى تهدأ الحرارة ثم يفرك جيدا باليد ثم يضاف السكر ويفركوا معا.', 'تدعك الخميرة بقليل من السكر حتى تسيل ثم يضاف إليها قليل من الماء الدافئ ثم تضاف إلى الدقيق وتعجن جيدا مع إضافة الماء الدافئ تدريجيا حتى تصبح العجينة يابسة نوعا.', 'تغطى العجينة وتترك لتختمر.', 'تؤخذ قطعة تلو الاخرى من العجين وتكور وتحفر بوسطها لوضع قطعة من العجوة ثم تغلق العجينة وتبطط وهكذا حتى انتهاء المقدار.', 'يرص الفطير على الصاج ويترك لمدة بسيطة حتى يختمر ثم يدخل في فرن متوسط الحرارة.']
      }
    }
  },
  {
    id: 'des-76',
    title: 'بسكويت الجزر',
    titleEn: 'Carrot Cookies',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '15 دقيقة',
    servings: '20-25 قطعة',
    masterIngredients: [
      {
        id: 'db81-1',
        name: 'جزر مبشور ناعم',
        nameEn: 'Finely grated carrot',
        standardAmount: '1 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db81-2',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1.5 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db81-3',
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
        id: 'db81-4',
        name: 'زيت أو زبد',
        nameEn: 'Oil or butter',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db81-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db81-6',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db81-7',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يخلط الزبد جيدا مع السكر حتى يبيض لونه، ثم يخفق البيض مع الفانيليا ويضاف إلى السكر مع الخفق، ثم يضاف الجزر المبشور ويقلب جيدا.',
        textEn: 'Cream the butter with the sugar until pale, whisk in the egg with the vanilla, then fold in the grated carrot.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخلط الدقيق بالبيكنج باودر ويضاف ويقلب الخليط جيدا.',
        textEn: 'Mix the flour with the baking powder and fold into the batter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يشكل البسكويت بآلة البسكويت ويرص في صاج الفرن ويدخل فرن متوسط الحرارة.',
        textEn: 'Pipe or shape into cookies on a baking sheet and bake in a medium oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد خروجه مباشرة يرفع باحتراس من الصاجات ويترك حتى يبرد.',
        textEn: 'Carefully remove from the sheets right after baking and let cool.',
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
        title: 'بسكويت الجزر',
        ingredients: ['1 كوب جزر مبشور ناعم', '½1 كوب دقيق', '1 ملعقة صغيرة بيكينج باودر', '½ كوب زيت أو زبد', 'فانيليا', '1 كوب سكر بودرة', '2 بيضة'],
        instructions: ['يخلط الزبد جيدا مع السكر حتى يبيض لونه ثم يخفق البيض مع الفانيليا ويضاف إلى السكر مع الخفق ثم يضاف الجزر المبشور ويقلب جيدا.', 'يخلط الدقيق بالبيكنج باودر ويضاف ويقلب الخليط جيدا.', 'يشكل البسكوت بآلة البسكوت ويرص في صاج الفرن ويدخل فرن متوسط الحرارة.', 'بعد خروجه مباشرة يرفع باحتراس من الصاجات ويترك حتى يبرد.']
      }
    }
  },
  {
    id: 'des-77',
    title: 'بسكويت جوز الهند',
    titleEn: 'Coconut Cookie Bars',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '20 دقيقة',
    servings: '20 قطعة',
    masterIngredients: [
      {
        id: 'db82-1',
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
        id: 'db82-2',
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
        id: 'db82-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db82-4',
        name: 'لبن بالقشدة',
        nameEn: 'Milk with clotted cream',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db82-5',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db82-6',
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
        id: 'db82-7',
        name: 'فانيليا',
        nameEn: 'Vanilla',
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
        text: 'يخفق البيض مع ثلاثة أرباع كمية السكر فقط حتى يغلظ القوام وتضاف الفانيليا.',
        textEn: 'Whisk the eggs with three-quarters of the sugar until thickened, then add the vanilla.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخلط الدقيق بالبيكنج باودر ويضاف مع اللبن بالتبادل والبيض المخفوق ويمزج جيدا.',
        textEn: 'Mix the flour with the baking powder, alternating it into the batter with the milk and beaten eggs, mixing well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف جوز الهند ويخلط جيدا مع بقية المقادير حتى تصير العجينة يابسة.',
        textEn: 'Fold in the coconut and mix well until the dough firms up.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نحضر صاج الفرن ويدهن خفيفا بالسكر وقليل من جوز الهند، ثم يدهن وجه البسكويت ببقية اللبن ويقطع ويدخل في فرن متوسط الحرارة.',
        textEn: 'Lightly dust a baking sheet with sugar and a little coconut, spread the dough, brush the top with the remaining milk, score into pieces, and bake in a medium oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يرفع ويترك حتى يبرد.',
        textEn: 'Remove and let cool.',
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
        title: 'بسكويت جوز الهند',
        ingredients: ['2 كوب دقيق', 'ملعقة صغيرة بيكينج باودر', '1 كوب سكر', '1 كوب لبن بالقشدة', '1 كوب جوز الهند', '3 بيضات', 'فانيليا'],
        instructions: ['يخفق البيض مع ¾ كمية السكر فقط حتى يغلظ القوام وتضاف الفانيليا.', 'يخلط الدقيق بالبيكنج باودر ويضاف مع اللبن بالتبادل والبيض المخفوق ويمزج جيدا.', 'يضاف جوز الهند ويخلط جيدا مع بقية المقادير حتى تصير العجينة يابسة.', 'نحضر صاج الفرن ويدهن خفيفا بالسكر وقليل من جوز الهند ثم يدهن وجه البسكويت ببقية اللبن ويقطع ويدخل في فرن متوسط الحرارة.', 'يرفع ويترك حتى يبرد.']
      }
    }
  },
  {
    id: 'des-78',
    title: 'بسكويت سافوي',
    titleEn: 'Savoy Sponge Fingers (Ladyfingers)',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '25-30 قطعة',
    masterIngredients: [
      {
        id: 'db83-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '2.5 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2.5 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db83-2',
        name: 'كورن فلاور',
        nameEn: 'Cornflour',
        standardAmount: '2.5 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2.5 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db83-3',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1 كوب متوسط',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب متوسط'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db83-4',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '7 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '7 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db83-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
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
        text: 'يفصل صفار البيض عن البيض ثم يضرب مع السكر حتى يغلظ قوامه وتضاف إليه الفانيليا.',
        textEn: 'Separate the egg yolks and whisk with the sugar until thick, then add the vanilla.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق بياض البيض حتى يجمد.',
        textEn: 'Whip the egg whites to stiff peaks.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط الدقيق بالكورن فلاور ويضافون إلى زلال البيض تدريجيا.',
        textEn: 'Mix the flour with the cornflour and fold gradually into the egg whites.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف الخليط إلى صفار البيض والسكر مرة واحدة مع التقليب بخفة.',
        textEn: 'Fold this into the yolk-sugar mixture all at once, gently.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن قوالب مستطيلة بالسمن السايح جيدا وترش بالدقيق.',
        textEn: 'Grease rectangular molds well with melted ghee and dust with flour.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تصب العجينة مع تقطيعها على هيئة أصابع.',
        textEn: 'Pipe or spoon the batter into finger shapes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تدخل فرن متوسط الحرارة.',
        textEn: 'Bake in a medium oven.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 7,
      totalMasterIngredients: 5,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'بسكويت سافوي',
        ingredients: ['½2 ملعقة كبيرة دقيق', '½2 ملعقة كبيرة كورن فلاور', '1 كوب متوسط سكر بودرة', '7 بيضات', 'فانيليا'],
        instructions: ['يفصل صفار البيض عن البيض ثم يضرب مع السكر حتى يغلظ قوامه وتضاف إليه الفانيليا.', 'يخفق بياض البيض حتى يجمد.', 'يخلط الدقيق بالكورن فلاور ويضافوا إلى زلال البيض تدريجيا.', 'يضاف الخليط إلى صفار البيض والسكر مرة واحدة مع التقليب بخفة.', 'تدهن قوالب مستطيلة بالسمن السايح جيدا وترش بالدقيق.', 'تصب العجينية مع تقطيعها على هيئة أصابع.', 'تدخل فرن متوسط الحرارة.']
      }
    }
  },
  {
    id: 'des-79',
    title: 'بسكويت القرفة',
    titleEn: 'Cinnamon Sandwich Cookies with Jam',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '15 دقيقة',
    servings: '20 قطعة',
    masterIngredients: [
      {
        id: 'db84-1',
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
        id: 'db84-2',
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
        id: 'db84-3',
        name: 'قرفة ناعمة',
        nameEn: 'Ground cinnamon',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db84-4',
        name: 'زبدة أو سمن',
        nameEn: 'Butter or ghee',
        standardAmount: '3/4 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db84-5',
        name: 'سكر ناعم',
        nameEn: 'Fine sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db84-6',
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
        id: 'db84-7',
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
        id: 'db84-8',
        name: 'مربى ومكسرات للتزيين',
        nameEn: 'Jam and chopped nuts, for garnish',
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
        text: 'يخلط الدقيق مع البيكنج باودر ويوضع مع الزبدة ثم تفرك بأطراف الأصابع حتى تختلط الزبدة تماما مع الدقيق.',
        textEn: 'Mix the flour with the baking powder, add the butter, and rub in with your fingertips until fully combined.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تضاف القرفة والسكر وتخلط جيدا مع البيض المخفوق، ثم تخلط جميع المقادير حتى تصير عجينة متوسطة الليونة ويضاف قليل من اللبن حسب سمك العجينة.',
        textEn: 'Add the cinnamon and sugar, mix well with the beaten eggs, and combine into a medium-soft dough, adding a little milk as needed.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تفرد بالنشابة وتقطع دوائر مستديرة، واحدة مغلقة وأخرى بها ثقب صغير في الوسط، حتى ينتهي العجين.',
        textEn: 'Roll out and cut into rounds, alternating plain rounds with ones that have a small hole in the center, until all the dough is used.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن متوسط الحرارة، وبعد خروجها تترك لتبرد.',
        textEn: 'Bake in a medium oven, then let cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يلصق البسكويت المستدير مع الآخر الموجود به ثقب بالمربى.',
        textEn: 'Sandwich a plain round with a holed round using jam.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يرش السطح بالسكر الناعم ثم يجمل في الوسط بالمكسرات المفرية.',
        textEn: 'Dust with fine sugar and garnish the center hole with chopped nuts.',
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
        title: 'بسكويت القرفة',
        ingredients: ['2 كوب دقيق', '1 ملعقة صغيرة بيكينج باودر', 'ملعقة كبيرة قرفة ناعمة', '¾ كوب زبده أو سمن', '1 كوب سكر ناعم', '2 بيضة', 'قليل من اللبن'],
        instructions: ['يخلط الدقيق مع البيكنج باودر ويوضع مع الزبدة ثم تفرك بأطراف الأصابع حتى تختلط الزبدة تماما مع الدقيق.', 'تضاف القرفة والسكر وتخلط جيدا مع البيض المخفوق ثم تخلط جميع المقادير حتى تصير عجينة متوسطة الليونة ويضاف قليل من اللبن حسب سمك العجينة.', 'تفرد بالنشابة وتقطع دوائر مستديرة واحدة مغلقة وأخرى بها ثقب صغير في الوسط حتى ينتهي العجين.', 'تدخل فرن متوسط الحرارة وبعد خروجها تترك لتبرد.', 'يلصق البسكويت المستدير مع الآخر الموجود به ثقب بالمربى.', 'يرش السطح بالسكر الناعم ثم يجمل في الوسط بالمكسرات المفرية.']
      }
    }
  },
  {
    id: 'des-80',
    title: 'بسكويت الفانيليا بالبلح',
    titleEn: 'Vanilla Cookies Stuffed with Date Paste',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '10 دقائق',
    servings: '20-25 قطعة',
    masterIngredients: [
      {
        id: 'db85-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1.75 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.75 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db85-2',
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
        id: 'db85-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '3/4 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db85-4',
        name: 'سمن أو زبد',
        nameEn: 'Ghee or butter',
        standardAmount: '1/8 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db85-5',
        name: 'بلح مفري (عجوة)',
        nameEn: 'Date paste (ajwa)',
        standardAmount: '1/8 كيلو',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/8 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db85-6',
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
        id: 'db85-7',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db85-8',
        name: 'فول سوداني مفري',
        nameEn: 'Chopped peanuts',
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
        text: 'يدعك السمن أو الزبد مع السكر حتى يصير هشا.',
        textEn: 'Cream the ghee or butter with the sugar until light.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف البيض المخفوق بالفانيليا والبلح إلى السكر ويمزجوا جيدا.',
        textEn: 'Beat in the egg with the vanilla and date paste, mixing well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط الدقيق بالبيكنج باودر ويضاف إلى الخليط حتى تصير عجينة يابسة نوعا.',
        textEn: 'Mix the flour with the baking powder and work into the mixture until a fairly firm dough forms.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تفرد العجينة على صاج حتى سمك نصف سم وتقطع مستديرات.',
        textEn: 'Roll out to about half a centimeter thick and cut into rounds.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يدهن سطح البسكويت بالبيض الخفيف ويرش فوقه الفول السوداني المفري المخلوط بقليل من السكر.',
        textEn: 'Brush the tops with beaten egg and sprinkle with the chopped peanuts mixed with a little sugar.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدخل فرن حار مدة 10 دقائق وبعد النضج يترك ليبرد.',
        textEn: 'Bake in a hot oven for 10 minutes, then let cool.',
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
        title: 'بسكويت الفانيليا بالبلح',
        ingredients: ['¾1 كوب دقيق', '1 ملعقة صغيرة بيكنج باودر', '¾ كوب سكر', '⅛ كيلو سمن أو زبد', '⅛ كيلو بلح مفري (عجوة)', '2 بيضة', 'فانيليا', '1 ملعقة كبيرة فول سوداني مفري'],
        instructions: ['يدعك السمن أو الزبد مع السكر حتى يصير هشا.', 'يضاف البيض المخفوق بالفانيليا والبلح إلى السكر ويمزجوا جيدا.', 'يخلط الدقيق بالبيكنج باودر ويضاف إلى الخليط حتى تصير عجينة يابسة نوعا.', 'تفرد العجينية على صاج حتى سمك ½ سم وتقطع مستديرات.', 'يدهن سطح البسكويت بالبيض الخفيف ويرش فوقه الفول السوداني المفري المخلوط بقليل من السكر.', 'تدخل فرن حار مدة 10 دقائق وبعد النضج يترك ليبرد.']
      }
    }
  },
  {
    id: 'des-81',
    title: 'البتي فور',
    titleEn: 'Petits Fours with Jam and Chocolate',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '25 دقيقة',
    cookTime: '15 دقيقة',
    servings: '25-30 قطعة',
    masterIngredients: [
      {
        id: 'db86-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '4 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db86-2',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1/2 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db86-3',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db86-4',
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
        id: 'db86-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db86-6',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 إلى 1.25 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 إلى 1.25 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db86-7',
        name: 'مربى وشيكولاتة سايحة ومكسرات للتزيين',
        nameEn: 'Jam, melted chocolate and nuts, for garnish',
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
        text: 'يدعك السمن مع السكر جيدا حتى يصير كالقشدة.',
        textEn: 'Cream the ghee with the sugar until smooth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق البيض وتضاف إليه الفانيليا ثم تضاف إلى السكر والسمن وتخفق جيدا.',
        textEn: 'Beat the eggs with the vanilla and mix into the ghee-sugar mixture, beating well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط الدقيق بالبيكنج باودر ثم يضاف إلى الخليط حتى تصير عجينة مناسبة.',
        textEn: 'Mix the flour with the baking powder and work into the mixture to form a suitable dough.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يقطع العجين على صاج غير مدهون إما باستعمال ماكينة البتي فور أو باستعمال البلبلة على هيئة أصابع أو وردات.',
        textEn: 'Pipe the dough onto an ungreased baking sheet using a cookie press or piping bag, into fingers or rosettes.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يدخل فرن هادئ نوعا ما، وبعد خروجه يترك ليبرد.',
        textEn: 'Bake in a fairly low oven, then let cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يلصق كل اثنين بالمربى ويجمل الوجه بالشيكولاته السايحة والمكسرات.',
        textEn: 'Sandwich pairs together with jam and decorate the tops with melted chocolate and nuts.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يمكن إضافة الكاكاو أو الشيكولاته للعجينة للحصول على بتي فور بالشيكولاته.',
        textEn: 'Cocoa or melted chocolate can be added to the dough for a chocolate version.',
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
        title: 'البتي فور',
        ingredients: ['4 كوب دقيق', '½ ملعقة صغيرة بيكينج باودر', '2 كوب سمن', '3 بيضات', 'فانيليا', '1 : ¼1 كوب سكر'],
        instructions: ['يدعك السمن مع السكر جيدا حتى يصير كالقشدة.', 'يخفق البيض وتضاف إليه الفانيليا ثم تضاف إلى السكر والسمن وتخفق جيدا.', 'يخلط الدقيق بالبيكنج باودر ثم يضاف إلى الخليط حتى تصير عجينة مناسبة.', 'يقطع العجين على صاج غير مدهون إما باستعمال ماكينة البيتي فور أو باستعمال البلبلة على هيئة أصابع أو وردات.', 'يدخل فرن هادئ نوعا ما وبعد خروجه يترك ليبرد.', 'يلصق كل اثنين بالمربى ويجمل الوجه بالشيكولاته السايحة والمكسرات.', 'يمكن إضافة الكاكاو أو الشيكولاته للعجينة للحصول على بتي فور بالشيكولاته.']
      }
    }
  },
  {
    id: 'des-82',
    title: 'بتي فور تشيكي',
    titleEn: 'Coconut Petits Fours Soaked in Syrup',
    chapter: 'الباب الخامس: الحلويات الشرقية',
    chapterNumber: 5,
    category: 'حلويات شرقية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة (+10 دقائق راحة)',
    cookTime: '15 دقيقة',
    servings: '20 قطعة',
    masterIngredients: [
      {
        id: 'db87-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1.5 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db87-2',
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
        id: 'db87-3',
        name: 'زبدة أو سمن',
        nameEn: 'Butter or ghee',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db87-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db87-5',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db87-6',
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
        id: 'db87-7',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db87-8',
        name: 'شربات',
        nameEn: 'Sugar syrup',
        standardAmount: 'حسب الحاجة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db87-9',
        name: 'شيكولاتة سايحة وبندق مفري (اختياري)',
        nameEn: 'Melted chocolate and chopped hazelnuts, optional',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'يضرب في المضرب الزبد والسكر والبيض وجوز الهند والفانيليا، ثم يضاف للخليط الدقيق الممزوج بالبيكنج باودر.',
        textEn: 'Beat the butter, sugar, egg, coconut and vanilla together, then fold in the flour mixed with baking powder.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تترك لمدة 10 دقائق.',
        textEn: 'Rest for 10 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تقطع العجينة دوائر صغيرة مثل الكور وبحجم ليمونة كبيرة.',
        textEn: 'Shape into small, lemon-sized balls.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن الصينية بالزيت وتوضع بها الكور على مسافات بعيدة.',
        textEn: 'Oil a tray and space the balls well apart.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد خروجها مباشرة تسقى بالشراب بالملعقة.',
        textEn: 'As soon as they come out, spoon syrup over each one.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يمكن أيضا أن تدهن كل واحدة بقليل من الشيكولاته السايحة وفوقها البندق المفري.',
        textEn: 'Each can also be brushed with a little melted chocolate and topped with chopped hazelnuts.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'بتي فور تشيكي',
        ingredients: ['½1 كوب دقيق', 'ملعقة صغيرة بيكينج باودر', '½ كوب زبدة أو سمن', '½ كوب سكر', '½ كوب جوز الهند', '1 بيضة', 'فانيليا', 'شربات'],
        instructions: ['يضرب في المضرب الزبد والسكر والبيض وجوز الهند والفانيليا ثم يضاف للخليط الدقيق الممزوج بالبيكنج باودر.', 'تترك لمدة 10 دقائق.', 'تقطع العجينة دوائر صغيرة مثل الكور وبحجم ليمونة كبيرة.', 'تدهن الصينية بالزيت وتوضع بها الكور على مسافات بعيدة.', 'تدخل فرن متوسط الحرارة حتى النضج.', 'بعد خروجها مباشرة تسقى بالشراب بالملعقة.', 'يمكن ايضا أن تدهن كل واحدة بقليل من الشيكولاته السايحة وفوقها البندق المفري.']
      }
    }
  },
  {
    id: 'des-83',
    title: 'الكيكة',
    titleEn: 'Marbled Lemon-Yogurt Cake',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '40 دقيقة',
    servings: '10-12 أفراد',
    masterIngredients: [
      {
        id: 'db88-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '4 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db88-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '2.5 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db88-3',
        name: 'بشر ليمون',
        nameEn: 'Lemon zest',
        standardAmount: '1 ليمونة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ليمونة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db88-4',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '7-8 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '7-8 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db88-5',
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
        id: 'db88-6',
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
        id: 'db88-7',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db88-8',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '1.5 فنجان',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1.5 فنجان'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db88-9',
        name: 'كاكاو',
        nameEn: 'Cocoa powder',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db88-10',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يضرب البيض جيدا مع السكر، ثم نضيف السمن ويقلبوا جيدا، ثم نخلط الدقيق مع البيكينج باودر ونخلطه بالبيض والزبادي والفانيليا والليمون.',
        textEn: 'Whisk the eggs well with the sugar, mix in the ghee, then fold in the flour mixed with baking powder, along with the yogurt, vanilla and lemon zest.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نقطع قطعة من العجينة ونقلبها بملعقة كاكاو ونخفقها باللبن حتى يصبح سمكها أخف من بقية العجينة.',
        textEn: 'Set aside a portion of the batter, mix in a spoonful of cocoa, and thin with milk until slightly looser than the rest.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'تدهن الصينية بالسمن جيدا وترش بالدقيق، ونضع نصف عجينة الكيكة ثم نسكب عليها عجينة الكيكة المخففة باللبن والكاكاو ثم نضع فوقها بقية الكيكة.',
        textEn: 'Grease and flour the tray, pour in half the plain batter, top with the chocolate batter, then cover with the rest of the plain batter for a marbled effect.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل في فرن متوسط الحرارة حتى تنضج ويصير لونها مائلا إلى البني.',
        textEn: 'Bake in a medium oven until cooked through and golden brown.',
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
        title: 'الكيكة',
        ingredients: ['4 كوب دقيق', '½2 كوب سكر', 'بشر ليمونة', '7 : 8 بيضات', 'كوب زبادي', 'ملعقة صغيرة بيكينج باودر', 'فانيليا', '½1 فنجان سمن', 'ملعقة كبيرة كاكاو', 'قليل من اللبن'],
        instructions: ['يضرب البيض جيدا مع السكر ثم نضيف السمن ويقلبوا جيدا ثم نخلط الدقيق مع البيكينج باودر ونخلطه بالبيض والزبادي والفانيليا والليمون.', 'نقطع قطعة من العجينة ونقلبها بملعقة كاكاو ونخفقها باللبن حتى يصبح سمكها أخف من بقية العجينة.', 'تدهن الصينية بالسمن جيدا وترش بالدقيق ونضع نصف عجينة الكيكة ثم نسكب عليها عجينة الكيكة المخففة باللبن والكاكاو ثم نضع فوقها بقية الكيكة.', 'تدخل في فرن متوسط الحرارة حتى تنضج ويصير لونها مائلا إلى البني.']
      }
    }
  },
  {
    id: 'des-84',
    title: 'الكيكة الاسفنجية',
    titleEn: 'Basic Sponge Cake (for Tortes)',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '25 دقيقة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db89-1',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '5 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '5 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db89-2',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db89-3',
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
        id: 'db89-4',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '3/4 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db89-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
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
        text: 'يخفق البيض جيدا مع السكر حتى يغلظ قوامه ثم نضع الفانيليا.',
        textEn: 'Whisk the eggs well with the sugar until thickened, then add the vanilla.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف الدقيق مع البيكنج باودر إلى خليط البيض والسكر المخفوق بخفة وتدريجيا حتى يختفي الدقيق.',
        textEn: 'Gently and gradually fold in the flour mixed with baking powder, just until incorporated.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يصب الخليط في صينية مستديرة مدهونة ثم يخبز في فرن متوسط الحرارة حتى النضج.',
        textEn: 'Pour into a greased round tray and bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تستعمل هذه الكيكة في عمل التورتات المختلفة.',
        textEn: 'This sponge is used as the base for various layered tortes.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'الكيكة الاسفنجية',
        ingredients: ['5 بيضات', '1 كوب سكر بودرة', '1 ملعقة صغيرة بيكينج باودر', '¾ كوب دقيق', 'فانيليا'],
        instructions: ['يخفق البيض جيدا مع السكر حتى يغلظ قوامه ثم نضع الفانيليا.', 'يضاف الدقيق مع البيكنج باودر إلى خليط البيض والسكر المخفوق بخفة وتدريجيا حتى يختفي الدقيق.', 'يصب الخليط في صينية مستديرة مدهونة ثم يخبز في فرن متوسط الحرارة حتى النضج.', 'تستعمل هذه الكيكة في عمل التورتات المختلفة.']
      }
    }
  },
  {
    id: 'des-85',
    title: 'كيكة جوز الهند',
    titleEn: 'Coconut Cake with Syrup',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db90-1',
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
        id: 'db90-2',
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
        id: 'db90-3',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '3 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db90-4',
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
        id: 'db90-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db90-6',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '2/3 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2/3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db90-7',
        name: 'جوز الهند',
        nameEn: 'Coconut',
        standardAmount: '2.5 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db90-8',
        name: 'شربات',
        nameEn: 'Sugar syrup',
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
        text: 'يخفق السمن جيدا ثم يضاف إليه السكر حتى يصير الخليط مثل الكريمة.',
        textEn: 'Beat the ghee well, add the sugar, and cream until smooth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف البيض واحدة واحدة ويخفق جيدا حتى يتجانس الخليط وتضاف الفانيليا.',
        textEn: 'Add the eggs one at a time, beating well after each, and stir in the vanilla.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف جوز الهند ويقلب مع الخليط ثم يضاف الدقيق مع البيكنج باودر وتقلب جيدا.',
        textEn: 'Fold in the coconut, then the flour mixed with baking powder, mixing well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن صينية خفيفا بالسمن وتصب فيها العجينة ثم تدخل فرن متوسط الحرارة.',
        textEn: 'Lightly grease a tray with ghee, pour in the batter, and bake in a medium oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تسقى الكيكة فور خروجها من الفرن بالشراب البارد ثم تقطع.',
        textEn: 'As soon as it comes out of the oven, pour cold syrup over it, then slice.',
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
        title: 'كيكة جوز الهند',
        ingredients: ['3 ملعقة كبيرة دقيق', '1 ملعقة صغيرة بيكينج باودر', '3 ملعقة كبيرة سمن', '3 بيضات', 'فانيليا', '⅔ كوب سكر', '½2 كوب جوز الهند', 'شربات'],
        instructions: ['يخفق السمن جيدا ثم يضاف إليه السكر حتى يصير الخليط مثل الكريمة.', 'يضاف البيض واحدة واحدة ويخفق جيدا حتى يتجانس الخليط وتضاف الفانيليا.', 'يضاف الجوز هند ويقلب مع الخليط ثم يضاف الدقيق مع البيكنج باودر وتقلب جيدا.', 'تدهن صينية خفيفا بالسمن وتصب فيها العجينة ثم تدخل فرن متوسط الحرارة.', 'تسقى الكيكة فور خروجها من الفرن بالشراب البارد ثم تقطع.']
      }
    }
  },
  {
    id: 'des-86',
    title: 'كيكة براوني',
    titleEn: 'Fudgy Chocolate Brownies',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '25 دقيقة',
    servings: '10-12 قطعة',
    masterIngredients: [
      {
        id: 'db91-1',
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
        id: 'db91-2',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db91-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db91-4',
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
        id: 'db91-5',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1/4 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/4 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db91-6',
        name: 'شيكولاته سايحة',
        nameEn: 'Melted chocolate',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db91-7',
        name: 'زبدة أو زيت',
        nameEn: 'Butter or oil',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db91-8',
        name: 'مكسرات وجوز هند',
        nameEn: 'Nuts and coconut',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'نضرب البيض مع السكر في المضرب الكهربائي ثم نضيف الزيت ثم الشيكولاته والفانيليا.',
        textEn: 'Beat the eggs with the sugar, then mix in the oil, melted chocolate and vanilla.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نخلط الدقيق بالبيكنج باودر ونضعه على الخليط ثم نبدأ بتقليبه بالملعقة جيدا حتى تصبح العجينة مطاطية.',
        textEn: 'Mix the flour with the baking powder, fold in, and stir with a spoon until the batter turns glossy and elastic.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع فويل داخل صينية ونسكب عليه الخليط وفوقه مكسرات وجوز الهند وتفرد العجينة بالملعقة حتى تملأ الصينية كلها.',
        textEn: 'Line a tray with foil, pour in the batter, top with nuts and coconut, and spread evenly with a spoon.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن في درجة حرارة مرتفعة.',
        textEn: 'Bake in a hot oven.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد النضج تصبح سهلة رفعها بالفويل ثم تقطيعها.',
        textEn: 'Once baked, lift out easily using the foil and cut into pieces.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يمكن تجميلها بالشيكولاته المبشورة.',
        textEn: 'Garnish with grated chocolate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'كيكة براوني',
        ingredients: ['1 كوب دقيق', '½ كوب سكر بودرة', 'فانليليا', '2 بيضة', '¼ ملعقة صغيرة بيكينج باودر', '½ كوب شيكولاته سايحة', '½ كوب زبدة أو زيت'],
        instructions: ['نضرب البيض مع السكر في المضرب الكهربائي ثم نضيف الزيت ثم الشيكولاته والفانيليا.', 'نخلط الدقيق بالبيكنج باودر ونضعه على الخليط ثم نبدأ بتقليبه بالملعقة جيدا حتى تصبح العجينة مطاطية.', 'نضع فويل داخل صينية ونسكب عليه الخليط وفوقه مكسرات وجوز الهند وتفرد العجينة بالملعقة حتى تملأ الصينية كلها.', 'تدخل فرن في درجة حرارة مرتفعة.', 'بعد النضج تصبح سهلة رفعها بالفويل ثم تقطيعها.', 'يمكن تجميلها بالشيكولاته المبشورة.']
      }
    }
  },
  {
    id: 'des-87',
    title: 'كيكة الجزر الأصفر',
    titleEn: 'Yellow Carrot Cake with Cinnamon',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '10 أفراد',
    masterIngredients: [
      {
        id: 'db92-1',
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
        id: 'db92-2',
        name: 'جزر مبشور رفيعا جدا',
        nameEn: 'Very finely grated carrot',
        standardAmount: '2 كوب',
        category: 'vegetable',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db92-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1.5 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db92-4',
        name: 'قرفة',
        nameEn: 'Cinnamon',
        standardAmount: '1 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db92-5',
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
        id: 'db92-6',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1 باكو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 باكو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db92-7',
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
        id: 'db92-8',
        name: 'زيت',
        nameEn: 'Oil',
        standardAmount: '3/4 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'نضيف البيكنج باودر مع ذرة الملح للدقيق.',
        textEn: 'Mix the baking powder and a pinch of salt into the flour.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البيض ثم يضاف السكر قليلا قليلا ثم يضاف الزيت تدريجيا.',
        textEn: 'Beat the eggs, gradually add the sugar, then gradually add the oil.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يصب الدقيق المخلوط بالبيكنج باودر تدريجيا ثم ترش القرفة وفي النهاية نضع الجزر ويقلب باليد جيدا.',
        textEn: 'Fold in the flour mixture gradually, sprinkle in the cinnamon, and finally fold in the carrot by hand.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن الصينية ثم يصب فيها الخليط ونوزعه في كل الصينية ونهزها قبل دخولها الفرن.',
        textEn: 'Grease the tray, pour in the batter, spread evenly, and tap gently before baking.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد خروجها من الفرن لا تغطى الصينية حتى تبرد.',
        textEn: 'Leave uncovered after baking until it cools.',
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
        title: 'كيكة الجزر الأصفر',
        ingredients: ['2 كوب دقيق', '2 كوب جزر مبشور رفيعا جدا', '½1 كوب سكر', '1 ملعقة كبيرة قرفه', '4 بيضات', 'باكو بيكينج باودر', 'ذرة ملح', '¾ كوب زيت'],
        instructions: ['نضيف البيكنج باودر مع ذرة الملح للدقيق.', 'يضرب البيض ثم يضاف السكر قليلا قليلاً ثم يضاف الزيت تدريجيا.', 'يصب الدقيق المخلوط بالبيكنج باودر تدريجيا ثم ترش القرفة وفي النهاية نضع الجزر ويقلب باليد جيدا.', 'تدهن الصينية ثم يصب فيها الخليط ونوزعه في كل الصينية ونهزها قبل دخولها الفرن.', 'بعد خروجها من الفرن لا تغطى الصينية حتى تبرد.']
      }
    }
  },
  {
    id: 'des-88',
    title: 'كيكة التوست',
    titleEn: 'Layered Toast and Fruit Custard Cake',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db93-1',
        name: 'توست',
        nameEn: 'Toast bread',
        standardAmount: 'حسب الحاجة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db93-2',
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
        id: 'db93-3',
        name: 'زبادي',
        nameEn: 'Yogurt',
        standardAmount: '2-3 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2-3 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db93-4',
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
        id: 'db93-5',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db93-6',
        name: 'قرفة',
        nameEn: 'Cinnamon',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db93-7',
        name: 'فواكه طازجة (كمثرى أو تفاح)',
        nameEn: 'Fresh fruit (pear or apple)',
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
        text: 'يوضع التوست في البايركس المدهون.',
        textEn: 'Line a greased Pyrex dish with the toast.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق البيض مع الزبادي والسكر والفانيليا جيدا.',
        textEn: 'Whisk the eggs with the yogurt, sugar and vanilla well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نطهو كمية من الفواكه الطازجة كالكمثرى أو التفاح في إناء به الزبد والسكر وقليل من القرفة.',
        textEn: 'Cook the fresh fruit (pear or apple) in a pot with butter, sugar and a little cinnamon.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يصب فوق التوست نصف مقدار الخليط ثم الفواكه المطهية.',
        textEn: 'Pour half the egg mixture over the toast, then add the cooked fruit.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'ثم طبقة أخرى من التوست وعليها بقية الخليط.',
        textEn: 'Add another layer of toast, topped with the remaining mixture.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Bake in a medium oven until set.',
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
        title: 'كيكة التوست',
        ingredients: ['كمية من التوست', '3 بيضات', 'من 2 : 3 كوب زبادي', 'زبد', 'سكر للتحلية', 'قرفة', 'فواكه طازجة'],
        instructions: ['يوضع التوست في البايركس المدهون.', 'يخفق البيض مع الزبادي والسكر والفانيليا جيدا.', 'نطهو كمية من الفواكه الطازجة كالكمثرى أو التفاح في إناء به الزبد والسكر وقليل من القرفة.', 'يصب فوق التوست نصف مقدار الخليط ثم الفواكه المطهية.', 'ثم طبقة أخرى من التوست وعليها بقية الخليط.', 'تدخل فرن متوسط الحرارة حتى النضج.']
      }
    }
  },
  {
    id: 'des-89',
    title: 'كيكة الشيكولاتة',
    titleEn: 'Chocolate Cake with Ganache Glaze',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '40 دقيقة',
    servings: '10-12 أفراد',
    masterIngredients: [
      {
        id: 'db94-1',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: '1 كوب وأكثر بقليل',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب وأكثر بقليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db94-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1.75 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1.75 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db94-3',
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
        id: 'db94-4',
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
        id: 'db94-5',
        name: 'سمن',
        nameEn: 'Ghee',
        standardAmount: '3 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db94-6',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '5 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '5 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db94-7',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db94-8',
        name: 'بشر ليمون',
        nameEn: 'Lemon zest',
        standardAmount: '1 ليمونة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ليمونة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db94-9',
        name: 'كاكاو',
        nameEn: 'Cocoa powder',
        standardAmount: '3 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db94-10',
        name: 'دهان الشيكولاتة (انظري الوصفة التالية)',
        nameEn: 'Chocolate glaze (see recipe below)',
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
        text: 'يضرب البيض والفانيليا جيدا ثم يضاف إليه السمن ثم السكر ثم اللبن وبشر الليمون.',
        textEn: 'Beat the eggs with the vanilla, then mix in the ghee, sugar, milk and lemon zest.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف 3 ملاعق كاكاو كبيرة ويخلطوا جيدا.',
        textEn: 'Add the 3 tablespoons of cocoa and mix well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ممكن إضافة 2 ملعقة كبيرة من زبيب أو مربى مشمش أو لارنج أو خشاف أو فاكهة ناضجة مقطعة مثل التفاح.',
        textEn: '2 tablespoons of raisins, apricot jam, candied orange peel, khoshaf, or diced ripe fruit such as apple can be added.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
      {
        stepNumber: 4,
        text: 'يضاف الدقيق المخلوط بالبيكنج باودر تدريجيا حتى تنتهي الكمية.',
        textEn: 'Fold in the flour mixed with baking powder gradually until fully combined.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن الصينية بالسمن ثم الدقيق برشه خفيفا فوق السمن، ثم نضع الكيكة وتدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Grease the tray with ghee, dust lightly with flour, pour in the batter, and bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد أن تبرد نقلبها في طبق ونجملها بسكب الشيكولاته السايحة ساخنة فوق الكيكة.',
        textEn: 'Once cooled, turn out onto a plate and pour hot melted chocolate glaze over it.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'بعد أن تبرد ممكن تجميل الوجه بالبندق المقشر أو عين الجمل.',
        textEn: 'Once set, garnish the top with peeled hazelnuts or walnuts.',
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
        title: 'كيكة الشيكولاتة',
        ingredients: ['كوب لبن أو أكثر بقليل', '¾1 كوب سكر', '3 كوب دقيق', 'ملعقة صغيرة بيكينج باودر', '3 ملاعق كبيرة سمن', '5 بيضات', 'فانيليا', 'بشر ليمونة', '3 ملعقة كبيرة كاكاو', 'دهان الشيكولاتة'],
        instructions: ['يضرب البيض والفانيليا جيدا ثم يضاف إليه السمن ثم السكر ثم اللبن وبشر الليمون.', 'يضاف 3 ملاعق كاكاو كبيرة و يخلطوا جيدا.', 'ممكن إضافة 2 ملعقة كبيرة من زبيب أو مربى مشمش أو لارنج أو خشاف أو فاكهة ناضجة مقطعة مثل التفاح.', 'يضاف الدقيق المخلوط بالبيكنج باودر تدريجيا حتى تنتهي الكمية.', 'تدهن الصينية بالسمن ثم الدقيق برشه خفيفا فوق السمن ثم نضع الكيكة وتدخل فرن متوسط الحرارة حتى النضج.', 'بعد أن تبرد نقلبها في طبق ونجملها بسكب الشيكولاته السايحة ساخنة فوق الكيكة.', 'بعد أن تبرد ممكن تجميل الوجه بالبندق المقشر أو عين الجمل.']
      }
    }
  },
  {
    id: 'des-90',
    title: 'عمل دهان الشيكولاتة',
    titleEn: 'Simple Chocolate Glaze',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '5 دقائق',
    servings: 'يكفي لكيكة واحدة',
    masterIngredients: [
      {
        id: 'db95-1',
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
        id: 'db95-2',
        name: 'كاكاو سادة',
        nameEn: 'Plain cocoa powder',
        standardAmount: '2 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db95-3',
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
        id: 'db95-4',
        name: 'شيكولاته',
        nameEn: 'Chocolate pieces',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db95-5',
        name: 'قشدة',
        nameEn: 'Clotted cream',
        standardAmount: 'حسب الرغبة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db95-6',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'توضع كل المقادير على درجة حرارة هادئة حتى تصير سائلة.',
        textEn: 'Combine all the ingredients over low heat until melted and smooth.',
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
        title: 'عمل دهان الشيكولاتة',
        ingredients: ['قطعة زبدة', '2 ملعقة كبيرة كاكاو سادة', 'قليل من اللبن', 'قطع من الشيكولاته', 'قشدة', 'سكر للتحلية'],
        instructions: ['توضع  كل المقادير على درجة حرارة هادئة حتى تصير سائلة.']
      }
    }
  },
  {
    id: 'des-91',
    title: 'كيكة بالزبدة',
    titleEn: 'Classic Buttermilk Pound Cake',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '40 دقيقة',
    servings: '10-12 أفراد',
    masterIngredients: [
      {
        id: 'db96-1',
        name: 'زبدة أو سمن',
        nameEn: 'Butter, or ghee',
        standardAmount: '1 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db96-2',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '5 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '5 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db96-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db96-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db96-5',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '3 كوب أو أكثر',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3 كوب أو أكثر'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db96-6',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '2 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db96-7',
        name: 'لبن أو زبادي',
        nameEn: 'Milk, or yogurt',
        standardAmount: '1 كوب أو 1 كوب كبير زبادي',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 كوب أو 1 كوب كبير زبادي'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db96-8',
        name: 'بشر ليمون',
        nameEn: 'Lemon zest',
        standardAmount: '1 ليمونة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 ليمونة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db96-9',
        name: 'كاكاو (اختياري)',
        nameEn: 'Cocoa powder, optional',
        standardAmount: '2 ملعقة',
        category: 'sweet_fruit',
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
        text: 'يخفق الزبد أو السمن جيدا حتى يبيض لونه، ثم يضاف السكر تدريجيا مع الخفق المستمر.',
        textEn: 'Cream the butter or ghee until pale, then gradually beat in the sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضاف البيض واحدة تلو الأخرى مع الخفق الجيد بعد كل بيضة، ثم تضاف الفانيليا وبشر الليمون.',
        textEn: 'Add the eggs one at a time, beating well after each, then stir in the vanilla and lemon zest.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط الدقيق بالبيكنج باودر ويضاف تدريجيا بالتبادل مع اللبن أو الزبادي حتى ينتهي المقدار.',
        textEn: 'Mix the flour with the baking powder and fold in gradually, alternating with the milk or yogurt, until fully combined.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن الصينية بالسمن وترش بالدقيق، ثم يصب فيها الخليط وتدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Grease and flour the tray, pour in the batter, and bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'يمكن تلوين جزء من العجينة بالكاكاو لعمل كيكة مخططة.',
        textEn: 'Part of the batter can be tinted with cocoa to make a marbled cake.',
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
        title: 'كيكة بالزبدة',
        ingredients: ['1 كوب زبدة أو كوب سمن', '5 بيضات', 'فانيليا', '2 كوب سكر', '3 كوب دقيق أو أكثر', '2 ملعقة صغيرة بيكينج باودر', '1 كوب لبن أو كوب كبير زبادي', 'بشر ليمونة', '2 ملعقة كاكاو'],
        instructions: []
      }
    }
  },
  {
    id: 'des-92',
    title: 'كيكة البرتقال',
    titleEn: 'Upside-Down Orange Cake',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '35 دقيقة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db97-1',
        name: 'برتقال',
        nameEn: 'Oranges',
        standardAmount: 'حوالي 4 برتقالات',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حوالي 4 برتقالات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db97-2',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: 'حسب الحاجة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db97-3',
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
        id: 'db97-4',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db97-5',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db97-6',
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
        id: 'db97-7',
        name: 'بشر ليمون',
        nameEn: 'Lemon zest',
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
        text: 'يقطع البرتقال ويرش بالسكر البودرة.',
        textEn: 'Slice the oranges and dust with powdered sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر صينية ندهنها بقليل من الزبدة، ثم نرص البرتقال المرشوش بالسكر البودرة جنبا إلى جنب في الصينية، وممكن رش جوز هند ومكسرات فوق البرتقال.',
        textEn: 'Butter a tray lightly and arrange the sugared orange slices side by side; coconut and nuts can be sprinkled over them.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفق البيض والسكر والفانيليا وبشر الليمون ثم يسكب على البرتقال ونضع زبدة على الوجه.',
        textEn: 'Whisk the eggs with the sugar, vanilla and lemon zest, pour over the oranges, and dot with butter on top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن متوسط الحرارة حتى يحمر الوجه.',
        textEn: 'Bake in a medium oven until golden on top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد أن تبرد ممكن تجميلها بالكريم شانتيه مع وضع أي نوع من الفواكه مثل الفراولة أو الأناناس في وسط الكريم شانتيه وحولها الفستق أو المكسرات المفرية أو حسب الذوق.',
        textEn: 'Once cooled, garnish with Chantilly cream topped with fruit such as strawberries or pineapple, surrounded by pistachios or chopped nuts, to taste.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'كيكة البرتقال',
        ingredients: ['حوالي 4 برتقالات بصرَه', 'سكر بودرة', '4 بيضات', 'فانيليا', '½ كوب سكر', 'زبدة', 'بشر ليمونة'],
        instructions: ['يقطع البرتقال ويرشوا بالسكر البودرة.', 'نحضر صينية ندهنها بقليل من الزبدة ثم نقطع البرتقال ونرشه بسكر البودرة ويرص في الصينية الواحدة بجانب الأخرى وممكن رش جوز هند ومكسرات فوق البرتقال.', 'يخفق البيض والسكر والفانيليا وبشر الليمون ثم يسكب على البرتقال ونضع زبدة على الوجه.', 'تدخل فرن متوسط الحرارة حتى يحمر الوجه.', 'بعد أن تبرد ممكن تجميلها بالكريم شانتيه مع وضع أي نوع من الفواكه مثل الفراولة أو الأناناس في وسط الكريم شانتيه وحولها الفستق أو المكسرات المفرية أو حسب الذوق.']
      }
    }
  },
  {
    id: 'des-93',
    title: 'كيكة الكراميل (قدرة قادر)',
    titleEn: '"Qedret Qader" Upside-Down Caramel Custard Cake',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '1 ساعة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db98-1',
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
        id: 'db98-2',
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
        id: 'db98-3',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db98-4',
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
        id: 'db98-5',
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
        id: 'db98-6',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1/2 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1/2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db98-7',
        name: 'كراميل (انظري الوصفة أعلاه)',
        nameEn: 'Caramel (see recipe above)',
        standardAmount: 'للقالب',
        category: 'other',
        sourceVariations: {
          doc1: 'للقالب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db98-8',
        name: 'كريم كراميل (انظري وصفة الكريم كراميل)',
        nameEn: 'Crème caramel custard (see recipe)',
        standardAmount: '1 حصة',
        category: 'other',
        sourceVariations: {
          doc1: '1 حصة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يوضع الكراميل الساخن في الصينية حتى يبرد ويجمد.',
        textEn: 'Pour the hot caramel into the mold and let it set.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع الكريم كراميل تدريجيا فوق الكراميل.',
        textEn: 'Gradually pour the crème caramel custard over the set caramel.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نسكب الكيكة فوق الكريم كراميل باحتراس ونجهز الحمام المائي.',
        textEn: 'Carefully pour the cake batter over the custard and prepare a water bath.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل في فرن متوسط الحرارة حتى تنضج، وبعد أن تبرد تقلب في طبق التقديم.',
        textEn: 'Bake in a medium oven (in the water bath) until set, and once cooled, invert onto the serving plate.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'ممكن تجميلها بالكريم شانتيه بالبلبلة في الجوانب ونضع الفواكه في الوسط والمربى فوق الكريم شانتيه.',
        textEn: 'Garnish with piped Chantilly cream around the edges, fruit in the center, and jam over the cream.',
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
        title: 'كيكة الكراميل (قدرة قادر)',
        ingredients: ['2 بيضة', '1 كوب دقيق', '1 كوب سكر بودرة', '½ كوب زي', '2 ملعقة كبيرة لبن', '½ ملعقة صغيرة بيكينج باودر', 'كراميل', 'كريم كراميل'],
        instructions: ['يوضع الكراميل الساخن في الصينية حتى يبرد ويجمد.', 'يوضع الكريم كراميل تدريجيا فوق الكراميل.', 'نسكب الكيكة فوق الكريم كراميل باحتراس ونجهز الحمام المائي.', 'تدخل في فرن متوسط الحرارة حتى تنضج وبعد أن تبرد تقلب في طبق التقديم.', 'ممكن تجميلها بالكريم شانتيه بالبلبلة في الجوانب ونضع الفواكه في الوسط والمربى فوق الكريم شانتيه.']
      }
    }
  },
  {
    id: 'des-94',
    title: 'كيكة الفواكه بالكراميل',
    titleEn: 'Upside-Down Fruit and Caramel Cake',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '40 دقيقة',
    servings: '8-10 أفراد',
    masterIngredients: [
      {
        id: 'db99-1',
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
        id: 'db99-2',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '2 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db99-3',
        name: 'بشر ليمون أو برتقال',
        nameEn: 'Lemon or orange zest',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db99-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '3/4 إلى 1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3/4 إلى 1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db99-5',
        name: 'سمن سايح أو زيت',
        nameEn: 'Melted ghee, or oil',
        standardAmount: '3/4 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db99-6',
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
        id: 'db99-7',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'رشة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'رشة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db99-8',
        name: 'عصير برتقال',
        nameEn: 'Orange juice',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db99-9',
        name: 'فاكهة (أي نوع)',
        nameEn: 'Fruit, any kind',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db99-10',
        name: 'كراميل (انظري وصفة الكراميل)',
        nameEn: 'Caramel (see recipe above)',
        standardAmount: 'للقالب',
        category: 'other',
        sourceVariations: {
          doc1: 'للقالب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يضرب البيض في المضرب الكهربائي ثم السكر ثم الزيت أو السمن السايح ثم العصير وبشر الليمون أو البرتقال والفانيليا.',
        textEn: 'Beat the eggs, then the sugar, then the oil or melted ghee, then the orange juice, zest and vanilla.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'بعد ذوبان السكر نضيف الدقيق تدريجيا حتى يختلط تماما.',
        textEn: 'Once the sugar dissolves, fold in the flour gradually until fully combined.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضع عجينة الكيكة فوق الكراميل البارد باحتراس شديد.',
        textEn: 'Very carefully pour the batter over the set, cold caramel.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدخل فرن متوسط الحرارة حتى تنضج ويحمر الوجه.',
        textEn: 'Bake in a medium oven until cooked through and golden.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بمجرد خروج الصينية من الفرن نعمل ثقوبا في الكيكة خفيفا بالشوكة.',
        textEn: 'As soon as it comes out, prick the cake lightly all over with a fork.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'نحضر طبق التقديم بنفس حجم الصينية ونضع الطبق فوق الكيكة ونقلبها باحتراس ونترك فوقها الصينية كغطاء حتى تتشرب الكيكة كل الكراميل.',
        textEn: 'Place a serving plate the same size as the tray over the cake, carefully invert, and leave the tray on top as a cover until the cake fully absorbs the caramel.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'بعد أن تبرد ممكن تجميلها بالمكسرات وجوز الهند.',
        textEn: 'Once cooled, garnish with nuts and coconut.',
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
        title: 'كيكة الفواكه بالكراميل',
        ingredients: ['2 كوب دقيق', '2 ملعقة صغيرة بيكنج باودر', 'بشر ليمونة أو برتقالة', '¾ : 1 كوب سكر', '¾ كوب سمن سايح أو زيت', '4 بيضات', 'رشة فانيليا', 'كوب عصير برتقال', 'أي نوع فاكهة'],
        instructions: ['يضرب البيض في المضرب الكهربائي ثم السكر ثم الزيت أو السمن السايح ثم العصير وبشر الليمون أو البرتقال والفانيليا.', 'بعد ذوبان السكر نضيف الدقيق تدريجيا حتى يختلط تماما.', 'نضع عجينة الكيكة فوق الكراميل البارد باحتراس شديد.', 'تدخل فرن متوسط الحرارة حتى تنضج ويحمر الوجه.', 'بمجرد خروج الصينية من الفرن نعمل ثقوب في الكيكة خفيفا بالشوكة.', 'نحضر طبق التقديم بنفس حجم الصينية و نضع الطبق فوق الكيكة ونقلبها باحتراس ونترك فوقها الصينية كغطاء حتى تتشرب الكيكة كل الكراميل.', 'بعد أن تبرد ممكن تجميلها بالمكسرات وجوز الهند.']
      }
    }
  },
  {
    id: 'des-95',
    title: 'عمل الكراميل',
    titleEn: 'Buttery Caramel with Pineapple or Peach',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '10 دقائق',
    servings: 'يكفي لقالب كيكة واحد',
    masterIngredients: [
      {
        id: 'db100-1',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db100-2',
        name: 'ماء',
        nameEn: 'Water',
        standardAmount: '3/4 كوب',
        category: 'liquid',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db100-3',
        name: 'زبدة',
        nameEn: 'Butter',
        standardAmount: '1/2 باكو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 باكو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db100-4',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: '2 نقطة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 نقطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db100-5',
        name: 'أناناس أو خوخ مطهو (خشاف)',
        nameEn: 'Pineapple, or poached peach (khoshaf)',
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
        text: 'نضع السكر والماء والليمون على درجة حرارة هادئة، وبعد ذوبان السكر يعقد قليلا ثم نضيف إليه الزبدة ولونه لا زال أبيضا.',
        textEn: 'Heat the sugar, water and lemon juice over low heat; once the sugar dissolves and starts to thicken slightly, add the butter while it\'s still pale.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يقلب حتى يصير لونه أصفر أو أغمق قليلا.',
        textEn: 'Stir until it turns golden or slightly darker.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'ترفع الصينية من فوق الحرارة وترص فيها وحدات الأناناس أو الخوخ المطهو (خشاف) بالشكل المناسب حسب الذوق.',
        textEn: 'Remove from the heat and arrange the pineapple pieces or poached peaches over the caramel as desired.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تترك الصينية حتى تبرد وتجمد الكراميل.',
        textEn: 'Let the tray cool until the caramel sets.',
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
        title: 'عمل الكراميل',
        ingredients: ['2 ملعقة كبيرة سكر', 'ملعقة كبيرة ماء', '½ ملعقة صغيرة  ليمون'],
        instructions: ['يحرق السكر مع الماء والليمون على درجة حرارة هادئة حتى تصبح كراميلة وتترك حتى تبرد تماما وتجمد']
      }
    }
  },
  {
    id: 'des-96',
    title: 'كيكة السيكو سيكو',
    titleEn: 'Sicko-Sicko Small Butter Cakes with Cream and Cherries',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '20 دقيقة',
    servings: '8-10 قطع',
    masterIngredients: [
      {
        id: 'db101-1',
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
        id: 'db101-2',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '3 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db101-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db101-4',
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
        id: 'db101-5',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db101-6',
        name: 'زبدة أو سمن',
        nameEn: 'Butter, or ghee',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db101-7',
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
        id: 'db101-8',
        name: 'كريز',
        nameEn: 'Cherries',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db101-9',
        name: 'كريمة',
        nameEn: 'Cream',
        standardAmount: 'للتزيين',
        category: 'dairy_fat',
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
        text: 'يخلط السكر مع الزبدة حتى يبيَض لون الزبدة، ثم يضاف البيض ويخفق الخليط جيدا، ثم اللبن والفانيليا، ثم الدقيق المخلوط بالبيكنج باودر تدريجيا ويخلطوا جيدا حتى تصير عجينة لينة نوعا.',
        textEn: 'Cream the sugar with the butter until pale, beat in the eggs, then the milk and vanilla, then gradually fold in the flour mixed with baking powder into a fairly soft batter.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يصب في قوالب صغيرة وتدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Pour into small molds and bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يجمل بالكريمة وفوقها الكريز أو أي فاكهة.',
        textEn: 'Garnish with cream topped with cherries or any fruit.',
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
        title: 'كيكة السيكو سيكو',
        ingredients: ['½2 كوب دقيق', '3 ملعقة صغيرة بيكينج باودر', 'فانيليا', '1 كوب لبن', '1 كوب سكر بودرة', '½ كوب زبده أو سمن', '3 بيضات', 'كريز', 'كريمة'],
        instructions: ['يخلط السكر مع الزبده حتى يبيَض لون الزبده ثم يضاف البيض ويخفق الخليط جيدا ثم اللبن والفانيليا ثم الدقيق المخلوط بالبيكنج باودر تدريجيا ويخلطوا جيدا حتى تصير عجينة لينة نوعا.', 'يصب في قوالب صغيرة وتدخل فرن متوسط الحرارة حتى النضج.', 'يجمل بالكريمة وفوقها الكريز أو أي فاكهة.']
      }
    }
  },
  {
    id: 'des-97',
    title: 'البابا',
    titleEn: 'Baba — Yeasted Yogurt Cake in Syrup',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '15 دقيقة',
    cookTime: '30 دقيقة',
    servings: '8 أفراد',
    masterIngredients: [
      {
        id: 'db102-1',
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
        id: 'db102-2',
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
        id: 'db102-3',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1 باكو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1 باكو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db102-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '3/4 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db102-5',
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
        id: 'db102-6',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db102-7',
        name: 'شربات',
        nameEn: 'Sugar syrup',
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
        text: 'يضرب البيض بالمضرب لمدة 5 دقائق بالسرعة الكبيرة.',
        textEn: 'Beat the eggs on high speed for 5 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضيف السكر فوق البيض ثم الزبادي ونضربهم بالسرعة البطيئة.',
        textEn: 'Add the sugar, then the yogurt, beating on low speed.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نخلط الدقيق مع البيكنج باودر ونسكبه على الخليط في المضرب تدريجيا وبالسرعة البطيئة.',
        textEn: 'Mix the flour with the baking powder and add gradually to the mixer on low speed.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'بعد مزج الدقيق جيدا بالعجينة يضرب بالسرعة الكبيرة لمدة دقيقة.',
        textEn: 'Once fully combined, beat on high speed for one minute.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن الصينية جيدا بالسمن والدقيق.',
        textEn: 'Grease the tray well with ghee and flour.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تدخل الفرن في درجة حرارة متوسطة حتى تنضج ويحمر الوجه فقط.',
        textEn: 'Bake in a medium oven until cooked through and just golden on top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'بعد خروجها مباشرة من الفرن نثقبها كلها بالشوكة وخاصة الوسط.',
        textEn: 'As soon as it comes out, prick it all over with a fork, especially the center.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'نسقي بالشراب بكبشة حتى لا يتسرب الشراب إلى الجوانب حتى نصف الكمية فقط، وبعد 5 دقائق نسكب النصف الثاني من الشراب.',
        textEn: 'Ladle over half the syrup carefully so it doesn\'t run off the sides, then after 5 minutes pour over the remaining half.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'تترك لتبرد بدون غطاء ثم تقلب في طبق التقديم.',
        textEn: 'Let cool uncovered, then invert onto the serving plate.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 10,
        text: 'تجمَل بدهن السطح بالمربى ثم فوقها الكريم شانتيه وعليه الفراولة، أو برش السطح بجوز الهند، أو بتقطيع الفواكه ووضعها على السطح بدون كريم شانتيه.',
        textEn: 'Garnish by brushing with jam and topping with Chantilly cream and strawberries, or by sprinkling with coconut, or with sliced fruit on top without cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 10,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'البابا',
        ingredients: ['3 بيضات', '2 كوب دقيق', 'باكو بيكنج باودر', '¾ كوب سكر', 'كوب زبادي كبير', 'فانيليا', 'شربات'],
        instructions: ['يضرب البيض بالمضرب لمدة 5 دقائق بالسرعة الكبيرة.', 'نضيف السكر فوق البيض ثم الزبادي ونضربهم بالسرعة البطيئة.', 'نخلط الدقيق مع البيكنج باودر ونسكبه على الخليط في المضرب تدريجيا وبالسرعة البطيئة.', 'بعد مزج الدقيق جيدا بالعجينة يضرب بالسرعة الكبيرة لمدة دقيقة.', 'تدهن الصينية جيدا بالسمن والدقيق.', 'تدخل الفرن في درجة حرارة متوسطة حتى تنضج و يحمر الوجه فقط.', 'بعد خروجها مباشرة من الفرن نثقبها كلها بالشوكة وخاصة الوسط.', 'نسقى الشراب بكبشه حتى لا يتسرب الشراب إلى الجوانب حتى نصف الكمية فقط وبعد 5 دقائق نسكب النصف الثاني من الشراب.', 'تترك لتبرد بدون غطاء ثم تقلب في طبق التقديم.', 'تجمَل بدهن السطح بالمربى ثم فوقها الكريم شانتيه وعليه الفراولة أو برش السطح بجوز الهند أو بتقطيع الفواكه ووضعها على السطح بدون كريم شانتيه.']
      }
    }
  },
  {
    id: 'des-98',
    title: 'تورتة الكيكة الاسفنجية',
    titleEn: 'Layered Sponge Torte with Cream and Fruit',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '30 دقيقة',
    cookTime: '25 دقيقة',
    servings: '10 أفراد',
    masterIngredients: [
      {
        id: 'db103-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1.5 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db103-2',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1.5 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db103-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1.5 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db103-4',
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
        id: 'db103-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db103-6',
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
        id: 'db103-7',
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
        id: 'db103-8',
        name: 'كريمة',
        nameEn: 'Cream',
        standardAmount: 'للحشو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'للحشو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db103-9',
        name: 'فواكه مقطعة',
        nameEn: 'Diced fruit',
        standardAmount: 'للحشو والتزيين',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للحشو والتزيين'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يفصل البياض عن الصفار.',
        textEn: 'Separate the egg whites from the yolks.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البياض في المضرب جيدا جدا بعد إضافة 3 ملاعق صغيرة ماء.',
        textEn: 'Beat the whites very well with 3 teaspoons of water added.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفق الصفار جيدا في إناء ثم يضاف إلى البياض المضروب في الخلاط مع إضافة السكر ويضرب الخليط جيدا حتى ذوبان السكر.',
        textEn: 'Whisk the yolks well, fold into the whipped whites, add the sugar, and beat until dissolved.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يخلط الدقيق بالبيكنج باودر ويضاف تدريجيا إلى الخليط بالتبادل مع اللبن حتى ينتهي المقدار.',
        textEn: 'Mix the flour with the baking powder and fold in gradually, alternating with the milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن الصينية بالسمن ويرش خفيفا بالدقيق ثم توضع الكيكة عليها وتدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Grease and flour a tray, pour in the batter, and bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد خروجها تترك لتبرد ثم تقطَع نصفين بسكين طويل.',
        textEn: 'Once cooled, slice in half horizontally with a long knife.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'يسقى النصف الأول بمقدار قليل من اللبن المحلي بالسكر أو شراب الفواكه (الخشاف) أو سفن أب، مع عمل ثقوب في الكيكة بالشوكة حتى يتخللها السائل، وملاحظة ألا تنهري الكيكة.',
        textEn: 'Moisten the bottom half with a little sweetened milk, khoshaf syrup, or lemon-lime soda, pricking with a fork so the liquid soaks in, taking care it doesn\'t fall apart.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'تصب الكريمة فوق النصف الثاني من الكيكة ثم تترك لتبرد ثم يرص فوقها الفواكه المقطعة.',
        textEn: 'Spread cream over the top half, chill, then arrange the diced fruit over it.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'نضع فوقها النصف الثاني من الكيكة ثم يثقب أيضا وجهها خفيفا ليسقى بأي نوع من السوائل.',
        textEn: 'Reassemble the layers, and lightly prick the top so it can be moistened too.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 10,
        text: 'يعمل كريم شانتيه أبيض أو بإضافة الكاكاو حتى يصير بلون الشيكولاته ويوضع بتساو فوق سطح الكيكة.',
        textEn: 'Prepare white Chantilly cream, or tint it with cocoa to a chocolate color, and spread evenly over the top.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 11,
        text: 'ممكن تجميله حسب الذوق إما بالشيكولاته المقطعة صغيرا أو المكسرات أو الفواكه.',
        textEn: 'Garnish to taste with finely chopped chocolate, nuts, or fruit.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 11,
      totalMasterIngredients: 9,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'تورتة الكيكة الاسفنجية',
        ingredients: ['½1 كوب دقيق', '½1 ملعقة صغيرة بيكينج باودر', '½1 كوب سكر', '6 بيضات', 'فانيليا', '½ كوب لبن', 'قليل من الماء', 'كريمة'],
        instructions: ['يفصل البياض عن الصفار.', 'يضرب البياض في المضرب جيدا جدا بعد إضافة 3 ملاعق صغيرة ماء.', 'يخفق الصفار جيدا في إناء ثم يضاف إلى البياض المضروب في الخلاط مع إضافة السكر ويضرب الخليط جيدا حتى ذوبان السكر.', 'يخلط الدقيق بالبيكنج باودر ويضاف تدريجيا إلى الخليط بالتبادل مع اللبن حتى ينتهي المقدار.', 'تدهن الصينية بالسمن ويرش خفيفا بالدقيق ثم توضع الكيكة عليها وتدخل فرن متوسط الحرارة حتى النضج.', 'بعد خروجها تترك لتبرد ثم تقطَع نصفين بسكين طويل.', 'يسقى النصف الأول بمقدار قليل من اللبن المحلي بالسكر أو شراب الفواكه (الخشاف) أو سفن اب مع عمل ثقوب في  الكيكة بالشوكة حتى يتخللها السائل وملاحظة ألا تنهري الكيكة.', 'تصب الكريمة فوق النصف الثاني من الكيكة ثم تترك لتبرد ثم يرص فوقها الفواكه المقطعة.', 'نضع فوقها النصف الثاني من الكيكة ثم يثقب أيضا وجهها خفيفا ليسقى بأي نوع من السوائل.', 'يعمل كريم شانتيه أبيض أو بإضافة الكاكاو حتى يصير بلون الشيكولاته ويوضع بتساو فوق سطح الكيكة.', 'ممكن تجميله حسب الذوق إما بالشيكولاته المقطعة صغيرا أو المكسرات أو الفواكه.']
      }
    }
  },
  {
    id: 'des-99',
    title: 'عمل الكريمة',
    titleEn: 'Vanilla Custard Cream (for Sponge Torte)',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '15 دقيقة',
    servings: 'يكفي لتورتة واحدة',
    masterIngredients: [
      {
        id: 'db104-1',
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
        id: 'db104-2',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '2-3 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '2-3 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db104-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db104-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '4 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db104-5',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
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
        text: 'يكسر البيض ويضاف له الكورن فلاور ويضرب جيدا.',
        textEn: 'Beat the eggs, whisk in the cornflour, and beat well.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن المحلى بالسكر ثم يرفع من الموقد ونضيف له خليط البيض ونخلطهم جيدا، ثم يرفع على درجة حرارة هادئة مع خفقه بمضرب البيض جيدا، ثم ترش الفانيليا ويصير سميكا نوعا.',
        textEn: 'Boil the sweetened milk, remove from the heat, whisk in the egg mixture, then return to low heat, whisking well, and stir in the vanilla until it thickens somewhat.',
        phase: 'cook',
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
        title: 'عمل الكريمة',
        ingredients: ['2 ملعقة كبيرة دقيق أو كورن فلاور', '2 كوب لبن', '2 بيضة', 'قشر ليمونة', '3 ملعقة كبيرة جبن رومي مبشور', 'قطع لانشون', 'بقدونس مفري', 'ملح', 'فلفل', 'بهار', 'قرفة', 'قرنفل'],
        instructions: ['يغلي اللبن ويوضع فيه التوابل وقشر الليمونة المغسولة.', 'يضرب البيض مع الدقيق ويقلب جيدا ثم يضاف إلى اللبن الساخن مع ضربهم بالمضرب على درجة حرارة هادئة ثم يضاف إليه البقدونس.', 'يرفع من الحرارة ويضاف إليه قطع اللانشون.']
      }
    }
  },
  {
    id: 'des-100',
    title: 'تورتة الميل فاي',
    titleEn: 'Mille-Feuille Torte with Custard Cream',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '1 ساعة',
    cookTime: '20 دقيقة',
    servings: '10 أفراد',
    masterIngredients: [
      {
        id: 'db105-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '4 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db105-2',
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
        id: 'db105-3',
        name: 'زبدة',
        nameEn: 'Butter',
        standardAmount: '1/4 كيلو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/4 كيلو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db105-4',
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
        id: 'db105-5',
        name: 'عصير ليمون',
        nameEn: 'Lemon juice',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db105-6',
        name: 'كريمة (كاسترد)',
        nameEn: 'Custard cream, for filling',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db105-7',
        name: 'سكر بودرة أو مربى وفواكه',
        nameEn: 'Powdered sugar, or jam and fruit, for the top',
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
        text: 'يضاف الملح للدقيق ويقلب ثم يضاف الماء تدريجيا حتى تتكون عجينة متماسكة يابسة.',
        textEn: 'Mix the salt into the flour, then gradually add the water to form a firm, cohesive dough.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر صاجا ويرش بالدقيق ثم تفرد العجينة كمستطيل.',
        textEn: 'Flour a surface and roll the dough into a rectangle.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'توضع الزبدة غير المتماسكة على نصف العجينة المفرودة ثم يطوى عليها النصف الآخر ويضغط على الأطراف بخفة.',
        textEn: 'Spread the softened butter over half the dough, fold the other half over it, and press the edges lightly.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدار العجينة على شكل نصف دائرة ثم يضغط على العجينة بالنشابة لتوزيع الهواء داخلها.',
        textEn: 'Turn the dough a quarter turn and roll gently with the pin to press out any air pockets.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تفرد العجينة لسمك نصف سم.',
        textEn: 'Roll out to about half a centimeter thick.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تكرر عملية طي العجينة وفردها حوالي 6 مرات مع الحرص على عدم خروج الزبد من العجينة.',
        textEn: 'Repeat the folding and rolling about 6 times, taking care the butter doesn\'t break through.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تترك في مكان بارد مدة 10 دقائق.',
        textEn: 'Chill for 10 minutes.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'تفرد العجينة في صينية مبللة بالماء ثم تثقب العجينة بالشوكة.',
        textEn: 'Roll into a water-sprinkled tray and prick all over with a fork.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'تدخل فرن حار حتى تنضج ثم تقطع إلى قطعتين متساويتين.',
        textEn: 'Bake in a hot oven until cooked, then cut into two equal pieces.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 10,
        text: 'تحشى بالكريمة بين الطبقات ثم تغطى بالطبقة الثانية مع دهن الوجه إما بالسكر البودرة أو المربى وعليها الفاكهة المحفوظة أو الطازجة ثم وردات الكريم شانتيه.',
        textEn: 'Fill with custard cream between the layers, cover with the second layer, and top with powdered sugar or jam, preserved or fresh fruit, and rosettes of Chantilly cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 10,
      totalMasterIngredients: 7,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'تورتة الميل فاي',
        ingredients: ['4 أكواب دقيق', '1 كوب ماء', '¼ كيلو زبده', 'ذرة ملح', 'قليل من عصير الليمون'],
        instructions: ['يضاف الملح للدقيق ويقلب ثم يضاف الماء تدريجيا حتى تتكون عجينة متماسكة يابسة.', 'نحضر صاج ويرش بالدقيق ثم تفرد العجينة كمستطيل.', 'توضع الزبدة الغير متماسكة على ½ العجينة المفرودة ثم يطوى عليها النصف الآخر ويضغط على الأطراف بخفه.', 'تدار العجينة على شكل ½ دائرة ثم يضغط على العجينة بالنشابة لتوزيع الهواء داخلها.', 'تفرد العجينة لسمك ½سم.', 'تكرر عملية طي العجينة وفردها حوالي 6 مرات مع الحرص على عدم خروج الزبد من العجينة.', 'تترك في مكان بارد مدة 10 دقائق.', 'تفرد العجينة في صينية مبللة بالماء ثم تثقب العجينة بالشوكة.', 'تدخل فرن حار حتى تنضج ثم تقطع إلى قطعتين متساويتين.', 'تحشى بالكريمة بين الطبقات ثم تغطى بالطبقة الثانية مع دهن الوجه إما بالسكر البودرة أو المربى وعليها الفاكهة المحفوظة أو الطازجة ثم وردات الكريم شانتيه.']
      }
    }
  },
  {
    id: 'des-101',
    title: 'تورتة بلاك فورست',
    titleEn: 'Black Forest Chocolate Torte',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '30 دقيقة',
    cookTime: '25 دقيقة',
    servings: '10 أفراد',
    masterIngredients: [
      {
        id: 'db106-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '3/4 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '3/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db106-2',
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
        id: 'db106-3',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db106-4',
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
        id: 'db106-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db106-6',
        name: 'كاكاو أو مسحوق شيكولاتة',
        nameEn: 'Cocoa or chocolate powder',
        standardAmount: '2 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db106-7',
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
        id: 'db106-8',
        name: 'كريمة الشيكولاتة (انظري الوصفة التالية)',
        nameEn: 'Chocolate buttercream (see recipe below)',
        standardAmount: 'للحشو والتغطية',
        category: 'other',
        sourceVariations: {
          doc1: 'للحشو والتغطية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db106-9',
        name: 'بندق مفري',
        nameEn: 'Chopped hazelnuts',
        standardAmount: 'للتزيين',
        category: 'sweet_fruit',
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
        text: 'يفصل البياض عن الصفار.',
        textEn: 'Separate the egg whites from the yolks.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يضرب البياض في المضرب جيدا جدا بعد إضافة 3 ملاعق صغيرة ماء.',
        textEn: 'Beat the whites very well with 3 teaspoons of water added.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخفق الصفار جيدا في إناء ثم يضاف إلى البياض المضروب في الخلاط مع إضافة السكر ويضرب الخليط جيدا حتى ذوبان السكر.',
        textEn: 'Whisk the yolks well, fold into the whipped whites, add the sugar, and beat until dissolved.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يخلط الدقيق بالكاكاو وبالبيكنج باودر ويضاف تدريجيا إلى الخليط بالتبادل مع اللبن حتى ينتهي المقدار.',
        textEn: 'Mix the flour with the cocoa and baking powder, and fold in gradually, alternating with the milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن الصينية بالسمن ويرش خفيفا بالدقيق ثم توضع الكيكة عليها وتدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Grease and flour a tray, pour in the batter, and bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد خروجها تترك لتبرد.',
        textEn: 'Let cool once baked.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تقطع الكيكة نصفين وتحشى بجزء من كريمة الشيكولاته ويمكن رشه بالبندق المفري.',
        textEn: 'Slice the cake in half and fill with some of the chocolate buttercream, sprinkled with chopped hazelnuts.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يوضع النصف الثاني للكيكة ويغطى بباقي الكريمة، ثم يرش السطح بالشيكولاتة المقطعة وتغطى الجوانب بالبندق المفري.',
        textEn: 'Top with the second half, cover with the remaining buttercream, sprinkle chopped chocolate on top, and coat the sides with chopped hazelnuts.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'ممكن تجميله أيضا بإضافة وردات من الكريم شانتيه مع الكريز المسكر.',
        textEn: 'Rosettes of Chantilly cream with candied cherries can also be added.',
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
        title: 'تورتة بلاك فورست',
        ingredients: ['¾ كوب دقيق', '1 ملعقة صغيرة بيكينج باودر', '1 كوب سكر بودرة', '6 بيضات', 'فانيليا', '2 ملعقة كبيرة كاكاو أو مسحوق الشيكولاته', 'كريمة الشيكولاتة', 'بندق مفري'],
        instructions: ['يفصل البياض عن الصفار.', 'يضرب البياض في المضرب جيدا جدا بعد إضافة 3 ملاعق صغيرة ماء.', 'يخفق الصفار جيدا في إناء ثم يضاف إلى البياض المضروب في الخلاط مع إضافة السكر ويضرب الخليط جيدا حتى ذوبان السكر.', 'يخلط الدقيق بالكاكاو و بالبيكنج باودر ويضاف تدريجيا إلى الخليط بالتبادل مع اللبن حتى ينتهي المقدار.', 'تدهن الصينية بالسمن ويرش خفيفا بالدقيق ثم توضع الكيكة عليها وتدخل فرن متوسط الحرارة حتى النضج.', 'بعد خروجها تترك لتبرد.', 'تقطع الكيكة نصفين وتحشى بجزء من كريمة الشيكولاته ويمكن رشه بالبندق المفري.', 'يوضع النصف الثاني للكيكة ويغطى بباقي الكريمة ثم يرش السطح بالشيكولاتة المقطعة وتغطى الجوانب بالبندق المفري.', 'ممكن تجميله أيضا بإضافة وردات من الكريم شانتيه مع الكريز المسكر.']
      }
    }
  },
  {
    id: 'des-102',
    title: 'كريمة الزبد بالشيكولاتة',
    titleEn: 'Chocolate Buttercream',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '5 دقائق',
    servings: 'يكفي لتورتة واحدة',
    masterIngredients: [
      {
        id: 'db107-1',
        name: 'زبدة',
        nameEn: 'Butter',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db107-2',
        name: 'كاكاو',
        nameEn: 'Cocoa powder',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db107-3',
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
        id: 'db107-4',
        name: 'سكر بودرة',
        nameEn: 'Powdered sugar',
        standardAmount: '1.5 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يضاف السكر إلى اللبن بعد تسخينه ويخلط جيدا حتى يذوب السكر.',
        textEn: 'Add the sugar to the warmed milk and mix until dissolved.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق الزبد مع الكاكاو ثم يضاف إلى اللبن ويخفق جيدا حتى يغلظ القوام.',
        textEn: 'Beat the butter with the cocoa, then add to the milk and beat well until thickened.',
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
        title: 'كريمة الزبد بالشيكولاتة',
        ingredients: ['½ كوب زبدة', '½ كوب كاكاو', '½ كوب لبن', '½1 كوب سكر بودرة'],
        instructions: ['يضاف السكر إلى اللبن بعد تسخينه ويخلط جيدا حتى يذوب السكر.', 'يخفق الزبد مع الكاكاو ثم يضاف إلى اللبن ويخفق جيدا حتى يغلظ القوام.']
      }
    }
  },
  {
    id: 'des-103',
    title: 'تورته الجيلي',
    titleEn: 'Jelly and Fruit Torte',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '40 دقيقة (+تجميد)',
    cookTime: '25 دقيقة',
    servings: '10 أفراد',
    masterIngredients: [
      {
        id: 'db108-1',
        name: 'دقيق',
        nameEn: 'Flour',
        standardAmount: '1.5 كوب',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db108-2',
        name: 'بيكينج باودر',
        nameEn: 'Baking powder',
        standardAmount: '1.5 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db108-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1.5 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1.5 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db108-4',
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
        id: 'db108-5',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db108-6',
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
        id: 'db108-7',
        name: 'جيلي مشمش أو فراولة (علبة)',
        nameEn: 'Apricot or strawberry jelly powder (packet)',
        standardAmount: '1 علبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 علبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db108-8',
        name: 'فواكه محفوظة أو طازجة أو أناناس',
        nameEn: 'Preserved or fresh fruit, or pineapple slices',
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
        text: 'يفصل البياض عن الصفار ويضرب البياض في المضرب جيدا جدا بعد إضافة 3 ملاعق صغيرة ماء.',
        textEn: 'Separate the whites from the yolks, and beat the whites very well with 3 teaspoons of water added.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق الصفار جيدا في إناء ثم يضاف إلى البياض المضروب في الخلاط مع إضافة السكر ويضرب الخليط جيدا حتى ذوبان السكر.',
        textEn: 'Whisk the yolks well, fold into the whipped whites, add the sugar, and beat until dissolved.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يخلط الدقيق بالبيكنج باودر ويضاف تدريجيا إلى الخليط بالتبادل مع اللبن حتى ينتهي المقدار.',
        textEn: 'Mix the flour with the baking powder and fold in gradually, alternating with the milk.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'تدهن الصينية بالسمن ويرش خفيفا بالدقيق ثم توضع الكيكة عليها وتدخل فرن متوسط الحرارة حتى النضج.',
        textEn: 'Grease and flour a tray, pour in the batter, and bake in a medium oven until cooked through.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد خروجها تترك لتبرد ثم تقلب في طبق التقديم.',
        textEn: 'Once cooled, invert onto the serving plate.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يغلي 5 أكواب ماء مع إضافة السكر حسب الحاجة ثم يرفع ويضاف إليه الجيلي مع التقليب المستمر حتى الذوبان التام.',
        textEn: 'Boil 5 cups of water with sugar to taste, remove from the heat, and stir in the jelly powder until fully dissolved.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'نصب ثلث مقدار الجيلي فوق الكيكة.',
        textEn: 'Pour a third of the jelly over the cake.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'نضع باقي الجيلي في الثلاجة دون التجمد فقط ليتماسك.',
        textEn: 'Chill the rest of the jelly (not freezing) just until it starts to set.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 9,
        text: 'يقطع الموز أو الأناناس شرائح وترص فوق الجيلي بشكل منسق.',
        textEn: 'Slice the banana or pineapple and arrange neatly over the jelly.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 10,
        text: 'يضاف ثلث مقدار الجيلي فوق الفاكهة ويعاد إلى الثلاجة ليتماسك ثم في الفريزر ليتجمد الجيلي.',
        textEn: 'Pour another third of the jelly over the fruit, chill until set, then freeze until firm.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 11,
        text: 'توضع الكيكة بحرص فوق الجيلي ويصب فوقها ثلث الجيلي المتبقي المتماسك بحرص، وتعاد إلى الفريزر حتى تتجمد.',
        textEn: 'Carefully place the cake over the jelly, pour the remaining set jelly over it, and return to the freezer until firm.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 12,
        text: 'عند التقديم تحرك الصينية فوق بخار ماء ساخن عدة ثوان ثم تقلب في طبق التقديم، وممكن تجميل السطح بوردات الكريم شانتيه.',
        textEn: 'To serve, hold the mold briefly over hot water steam, then invert onto the serving plate; garnish with rosettes of Chantilly cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
      },
    ],
    overlapAnalysis: {
      duplicateInstructionCount: 0,
      mergedIngredientsCount: 0,
      totalUniqueSteps: 12,
      totalMasterIngredients: 8,
      overlapPercentage: 0,
      documentsPresent: ['doc1'],
      reconciliationSummary: 'مصدر واحد (كراسة الوصفات الأصلية)، لم تتوفر نسخ إضافية للمقارنة.'
    },
    rawDocVersions: {
      doc1: {
        title: 'تورته الجيلي',
        ingredients: ['½1 كوب دقيق', '½1 ملعقة صغيرة بيكينج باودر', '½1 كوب سكر', '6 بيضات', 'فانيليا', '½ كوب لبن', 'قليل من الماء', 'باكو جيلي مشمش أو فراولة', 'فواكه محفوظة أو طازجة أو شرائح الأناناس'],
        instructions: ['يفصل البياض عن الصفار.', 'يضرب البياض في المضرب جيدا جدا بعد إضافة 3 ملاعق صغيرة ماء.', 'يخفق الصفار جيدا في إناء ثم يضاف إلى البياض المضروب في الخلاط مع إضافة السكر ويضرب الخليط جيدا حتى ذوبان السكر.', 'يخلط الدقيق بالبيكنج باودر ويضاف تدريجيا إلى الخليط بالتبادل مع اللبن حتى ينتهي المقدار.', 'تدهن الصينية بالسمن ويرش خفيفا بالدقيق ثم توضع الكيكة عليها وتدخل فرن متوسط الحرارة حتى النضج.', 'بعد خروجها تترك لتبرد ثم تقلب في طبق التقديم.', 'يغلي 5 أكواب ماء مع إضافة السكر حسب الحاجة ثم يرفع ويضاف إليه الجيلي مع التقليب المستمر حتى الذوبان التام.', 'نصب ⅓ مقدار الجيلي فوق الكيكة.', 'نضع باقي الجلي في الثلاجة دون التجمد فقط ليتماسك.', 'يقطع الموز أوالأناناس شرائح وترص فوق الجيلي بشكل منسق.', 'يضاف ⅓ مقدار الجيلي فوق الفاكهة ويعاد إلى الثلاجة ليتماسك ثم في الفريزر ليتجمد الجيلي.', 'توضع الكيكة بحرص فوق الجيلي ويصب فوقها ⅓ الجيلي المتبقي المتماسك وبحرص وتعاد إلى الفريزر حتى تتجمد.', 'عند التقديم تحرك الصينية فوق بخار ماء ساخن عدة ثوان ثم تقلب في طبق التقديم وممكن تجميل السطح بوردات الكريم شانتيه.']
      }
    }
  },
  {
    id: 'des-104',
    title: 'البروفترول',
    titleEn: 'Profiteroles with Chocolate Sauce',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'فرن',
    prepTime: '20 دقيقة',
    cookTime: '25 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db109-1',
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
        id: 'db109-2',
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
        id: 'db109-3',
        name: 'زبدة أو سمن',
        nameEn: 'Butter, or ghee',
        standardAmount: '3 ملعقة كبيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db109-4',
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
        id: 'db109-5',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '4-5 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '4-5 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db109-6',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db109-7',
        name: 'صلصة الشيكولاتة (انظري الوصفة التالية)',
        nameEn: 'Chocolate sauce (see recipe below)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db109-8',
        name: 'كريم شانتيه أو كريمة باتسيير للحشو',
        nameEn: 'Chantilly cream, or pastry cream, for filling',
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
        text: 'يغلى الماء والزبدة معا ثم يرفعوا من فوق الموقد.',
        textEn: 'Bring the water and butter to a boil together, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضيف الدقيق وذرة الملح إلى الماء المغلي دفعة واحدة مع التقليب المستمر.',
        textEn: 'Add the flour and salt all at once, stirring constantly.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يرفع على درجة حرارة هادئة مع التحريك المستمر لمدة 5 دقائق حتى يتكور ثم يرفع ويترك حتى يبرد.',
        textEn: 'Return to low heat, stirring constantly, for 5 minutes until it forms a ball, then remove and let cool.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يضاف إلى العجينة البيض والفانيليا واحدة تلو الأخرى مع التقليب الجيد.',
        textEn: 'Beat in the eggs one at a time with the vanilla, mixing well after each.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'نحضر صاج فرن مدهون دهنا خفيفا وتقطع عليه عجينة الشو قطعا صغيرة في حجم البندقة الكبيرة مع ترك مسافات بين كل واحدة.',
        textEn: 'On a lightly greased baking sheet, pipe the choux dough into small mounds about the size of a large hazelnut, spaced apart.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'تخبز في فرن حار حتى تنضج ويجمد سطحها.',
        textEn: 'Bake in a hot oven until cooked and firm on top.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'تترك لتبرد ويمكن أن تشق من أسفل وتحشى بالكريم شانتيه أو الكريم باتسيير.',
        textEn: 'Let cool, then slit underneath and fill with Chantilly cream or pastry cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 8,
        text: 'يرص البروفترول في طبق الخشاف العميق ثم يصب فوقه صلصة الشيكولاته.',
        textEn: 'Arrange the profiteroles in a deep dish and pour the chocolate sauce over them.',
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
        title: 'البروفترول',
        ingredients: ['3 ملعقة كبيرة دقيق', 'ذرة ملح', '3 ملعقة كبيرة زبدة أو سمن', '1 كوب ماء', '4 : 5 بيضات', 'فانيليا', 'صلصة الشيكولاتة'],
        instructions: ['يغلى الماء والزبدة معاً ثم يرفعوا من فوق البو تاجاز.', 'نضيف الدقيق وذرة الملح إلى الماء المغلي دفعة واحدة مع التقليب المستمر.', 'يرفع على درجة حرارة هادئة مع التحريك المستمر لمدة  5 دقائق حتى يتكور ثم يرفع ويترك حتى يبرد.', 'يضاف إلى العجينة البيض والفانيليا واحدة تلو الأخرى مع التقليب الجيد.', 'نحضر صاج فرن مدهون دهناً خفيفاً وتقطع عليه عجينة الشو قطع صغيرة في حجم البندقة الكبيرة مع يرك مسافات بين كل واحدة.', 'تخبز في فرن حار حتى تنضج ويجمد سطحها.', 'تترك لتبرد ويمكن أن تشق من أسفل وتحشى بالكريم  شانتيه أو الكريم باتسيير.', 'يرص البروفترول في طبق الخشاف العميق ثم يصب فوقه صلصة الشيكولاته.']
      }
    }
  },
  {
    id: 'des-105',
    title: 'عمل صلصة الشيكولاتة',
    titleEn: 'Chocolate Sauce (for Profiteroles)',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '10 دقائق',
    servings: 'يكفي للبروفترول',
    masterIngredients: [
      {
        id: 'db110-1',
        name: 'مسحوق الشيكولاتة',
        nameEn: 'Chocolate powder',
        standardAmount: '3 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '3 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db110-2',
        name: 'كورن فلاور أو نشا',
        nameEn: 'Cornflour or cornstarch',
        standardAmount: '1.5 ملعقة صغيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '1.5 ملعقة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db110-3',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '8 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '8 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db110-4',
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
        id: 'db110-5',
        name: 'زبد',
        nameEn: 'Butter',
        standardAmount: '1 قطعة صغيرة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة صغيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يقلب الكورن فلاور بقليل من الماء البارد ثم يخلط بمسحوق الشيكولاته ثم يضاف إليه باقي مقدار الماء تدريجيا مع التقليب المستمر.',
        textEn: 'Mix the cornflour with a little cold water, combine with the chocolate powder, then gradually stir in the rest of the water.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يرفع الخليط على درجة حرارة متوسطة مع تقليبه بالمضرب السلكي حتى يغلي.',
        textEn: 'Heat over medium heat, whisking, until it boils.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف إليه السكر والزبد ويترك حتى يغلي مع التقليب لمدة 5 دقائق حتى يغلظ القوام.',
        textEn: 'Add the sugar and butter and simmer, stirring, for 5 minutes until thickened.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يرفع من فوق الموقد ويستعمل فورا لتغطية البروفترول كله.',
        textEn: 'Remove from the heat and use immediately to cover all the profiteroles.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد أن تبرد الصلصة فوق البروفترول تدخل الثلاجة.',
        textEn: 'Once the sauce cools over the profiteroles, refrigerate.',
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
        title: 'عمل صلصة الشيكولاتة',
        ingredients: ['3 ملعقة كبيرة مسحوق الشيكولاتة', '½1 ملعقة صغيرة كورن فلاور أو نشا', '8 ملعقة كبيرة سكر', '½1 كوب ماء', 'قطعة زبد صغيرة'],
        instructions: ['يقلب الكورن فلاور بقليل من الماء البارد ثم يخلط بمسحوق الشيكولاته ثم يضاف إليه باقي مقدار الماء تدريجياً مع التقليب المستمر.', 'يرفع الخليط على درجة حرارة متوسطة مع تقليبه بالمضرب السلك حتى يغلي.', 'يضاف إليه السكر والزبد ويترك حتى يغلي مع التقليب لمدة 5 دقائق حتى يغلظ القوام.', 'يرفع من فوق البوتاجاز ويستعمل فورا لتغطية البروفترول كله.', 'بعد أن تبرد الصلصة فوق البروفترول تدخل الثلاجة.']
      }
    }
  },
  {
    id: 'des-106',
    title: 'البكاعا بالشامبنيون',
    titleEn: 'Choux Pastry Fritters with Cinnamon Sugar',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'قلي',
    prepTime: '20 دقيقة',
    cookTime: '15 دقيقة',
    servings: '6-8 أفراد',
    masterIngredients: [
      {
        id: 'db111-1',
        name: 'بيض',
        nameEn: 'Eggs',
        standardAmount: '7 بيضات',
        category: 'other',
        sourceVariations: {
          doc1: '7 بيضات'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db111-2',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db111-3',
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
        id: 'db111-4',
        name: 'زبدة',
        nameEn: 'Butter',
        standardAmount: '1/4 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/4 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db111-5',
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
        id: 'db111-6',
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
        id: 'db111-7',
        name: 'زبيب ومكسرات',
        nameEn: 'Raisins and nuts',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db111-8',
        name: 'سكر بودرة وقرفة',
        nameEn: 'Powdered sugar and cinnamon, for dusting',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db111-9',
        name: 'زيت للتحمير',
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
        text: 'يغلي الماء مع الزبد ويقلبوا ثم نضيف الفانيليا ونرفعه من الحرارة.',
        textEn: 'Boil the water with the butter, then add the vanilla and remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نضيف الدقيق مع ذرة الملح إلى الماء المغلي تدريجيا مع الاستمرار فوق الموقد في التقليب حتى يذوب تماما ثم يرفع من فوق الموقد.',
        textEn: 'Add the flour and salt gradually to the hot water, stirring over the heat until fully combined, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'بعد أن تبرد العجينة نضيف لها البيض واحدة بعد واحدة ونخفقها جيدا مع الخليط بالمضرب.',
        textEn: 'Once the dough has cooled, beat in the eggs one at a time, whisking well after each.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'نضيف لها الزبيب والمكسرات.',
        textEn: 'Fold in the raisins and nuts.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'تدهن اليد بقليل من الزيت ونأخذ قطعة صغيرة من العجينة ونحمرها في زيت ساخن غير مقدوح ثم ترفع على مناديل ورقية.',
        textEn: 'Lightly oil your hands, take small pieces of dough, and fry in hot (not scorching) oil, then drain on paper towels.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'بعد تحمير كل الكمية نرشها بالسكر البودرة والقرفة.',
        textEn: 'Once all are fried, dust with powdered sugar and cinnamon.',
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
        title: 'البكاعا بالشامبنيون',
        ingredients: ['7 بيضات', 'فانيليا', '½ كوب ماء', '¼ كوب زبدة', '2 كوب دقيق', 'ذرة ملح', 'زبيب ومكسرات', 'سكر بودرة', 'قرفة', 'زيت للتحمير'],
        instructions: ['يغلي الماء مع الزبد ويقلبوا ثم نضيف الفانيليا ونرفعه من الحرارة.', 'نضيف الدقيق مع ذرة الملح إلى الماء المغلي تدريجيا مع الاستمرار فوق البوتاجاز في التقليب حتى يذوب تماما ثم يرفع من فوق البوتاجاز.', 'بعد أن تبرد العجينة نضيف لها البيض واحدة بعد واحدة ونخفقها جيدا مع الخليط بالمضرب.', 'نضيف لها الزبيب والمكسرات.', 'تدهن اليد بقليل من الزيت ونأخذ قطعة صغيرة من العجينة ونحمرها في زيت ساخن غير مقدوح ثم ترفع على مناديل ورقية.', 'بعد تحمير كل الكمية نرشها بالسكر البودرة والقرفة.']
      }
    }
  },
  {
    id: 'des-107',
    title: 'البافارواز بالبسكويت',
    titleEn: 'Layered Biscuit Bavarois with Fruit and Cream',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '30 دقيقة (+تبريد)',
    cookTime: '-',
    servings: '8-10 أفراد',
    masterIngredients: [
      {
        id: 'db112-1',
        name: 'بسكويت شورتي أو ماري',
        nameEn: 'Shortbread or Marie biscuits',
        standardAmount: '2-3 باكو',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2-3 باكو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db112-2',
        name: 'كريمة باتسيير (انظري باب الحلويات الغربية)',
        nameEn: 'Pastry cream (see recipe below)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db112-3',
        name: 'مكسرات وجوز هند',
        nameEn: 'Nuts and coconut',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db112-4',
        name: 'مربى وقشدة',
        nameEn: 'Jam and clotted cream',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db112-5',
        name: 'كريم شانتيه بالفواكه (انظري الوصفة التالية)',
        nameEn: 'Fruit Chantilly cream (see recipe below)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db112-6',
        name: 'خشاف خوخ أو فاكهة أخرى',
        nameEn: 'Peach khoshaf, or other fruit',
        standardAmount: '1 علبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 علبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db112-7',
        name: 'صلصة تجميل (كراميل أو شيكولاتة أو زبد برتقال أو مربى)',
        nameEn: 'Finishing sauce (caramel, chocolate, orange butter, or jam)',
        standardAmount: 'حسب الحاجة',
        category: 'other',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db112-8',
        name: 'كاكاو أو شيكولاتة مبشورة وبندق وعين جمل ومكسرات مفرية للتزيين',
        nameEn: 'Cocoa or grated chocolate, hazelnuts, walnuts and chopped nuts, for garnish',
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
        text: 'نحضر بايركس ونكسر فيه البسكويت قطعا حسب كمية الكريمة.',
        textEn: 'Break the biscuits into a Pyrex dish, in proportion to the amount of cream.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'تصب كريمة الباتسيير وهي ساخنة فوق البسكويت ويخلطوا معا حتى يتشرب البسكويت الكريمة مع عدم أن ينهري البسكويت.',
        textEn: 'Pour the hot pastry cream over the biscuits and mix so the biscuits soak it up without falling apart.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نخلط قليلا من المربى مع قليل من القشدة ثم نضيف لهم المكسرات وجوز الهند ثم نوزعهم على خليط البسكويت بالكريمة.',
        textEn: 'Mix a little jam with a little clotted cream, add nuts and coconut, and spread over the biscuit-cream mixture.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يرش الوجه بالشيكولاته المبشورة وتترك لتبرد ثم تدخل الثلاجة.',
        textEn: 'Sprinkle grated chocolate on top, let cool, then refrigerate.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 5,
        text: 'بعد أن تبرد نخرج البايركس من الثلاجة ونصب عليها خليط الكريم شانتيه ونضع فوقها الفاكهة المقطعة حسب الذوق أو الخشاف المشكل ثم يدخل الثلاجة ثانية.',
        textEn: 'Once chilled, top with the fruit Chantilly cream and diced fruit or mixed khoshaf, then refrigerate again.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 6,
        text: 'يجمَل باستخدام صلصة الكراميل أو الشيكولاته أو الزبد بالبرتقال أو المربى ونوزعها جيدا فوق الفواكه والكريم شانتيه.',
        textEn: 'Garnish with caramel sauce, chocolate sauce, orange butter, or jam, drizzled evenly over the fruit and cream.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 7,
        text: 'ترش شيكولاتة مبشورة على الوجه بالتناسق مع البندق المقشر أو عين الجمل أو المكسرات المفرية أو حسب الذوق.',
        textEn: 'Finish with grated chocolate alongside peeled hazelnuts, walnuts, or chopped nuts, to taste.',
        phase: 'finish',
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
        title: 'البافارواز بالبسكويت',
        ingredients: ['2 : 3 بسكويت شورتي أو ماري', 'كريمة باتسيير مكسرات', 'جوز الهند', 'كريم شانتيه بالفواكه', 'صلصة تجميل', 'علبة خشاف خوخ أو أيه فاكهة', 'كاكاو أوشيكولاتة مبشورة', 'بندق مقشر', 'عين جمل', 'مكسرات مفرية'],
        instructions: ['نحضر بايركس ونكسر فيه البسكويت قطعا حسب كمية الكريمة.', 'تصب كريمة الباتسيير و هي ساخنة فوق البسكويت ويخلطوا معا حتى يتشرب البسكويت الكريمة مع عدم أن ينهري البسكوت.', 'نخلط قليل من المربى مع قليل من القشدة ثم نضيف لهم المكسرات وجوز الهند ثم نوزعهم على خليط البسكويت بالكريمة.', 'يرش الوجه بالشيكولاته المبشورة وتترك لتبرد ثم تدخل الثلاجة.', 'بعد أن تبرد نخرج البايركس من الثلاجة ونصب عليها خليط الكريم شانتيه ونضع فوقها الفاكهة المقطعة حسب الذوق أو الخشاف المشكل ثم يدخل الثلاجة ثانية.', 'يجمَل باستخدام صلصة الكراميل أو الشيكولاته أو الزبد بالبرتقال أو المربى ونوزعها جيدا فوق الفواكه والكريم شانتيه.', 'ترش شيكولاتة مبشورة على الوجه بالتناسق مع البندق المقشر أو عين الجمل أو المكسرات المفرية أو حسب الذوق']
      }
    }
  },
  {
    id: 'des-108',
    title: 'عمل كريمة الباتسيير',
    titleEn: 'Chocolate Pastry Cream',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '15 دقيقة',
    servings: 'يكفي للبافارواز',
    masterIngredients: [
      {
        id: 'db113-1',
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
        id: 'db113-2',
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
        id: 'db113-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db113-4',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '4 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '4 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db113-5',
        name: 'كورن فلاور أو كاسترد',
        nameEn: 'Cornflour, or custard powder',
        standardAmount: '2 ملعقة كبيرة',
        category: 'grain_starch',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db113-6',
        name: 'كاكاو أو شيكولاته مقطعة',
        nameEn: 'Cocoa, or chopped chocolate',
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
        text: 'يخفق البيض جيدا ثم يضاف الكورن فلاور أو الكاسترد ويضربوا جيدا.',
        textEn: 'Whisk the eggs well, then whisk in the cornflour or custard powder.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يغلي اللبن مع السكر على درجة متوسطة ثم يرفع من فوق الموقد.',
        textEn: 'Boil the milk with the sugar over medium heat, then remove from the heat.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف له خليط البيض ويقلبوا جيدا ثم يعاد ثانيا على درجة حرارة هادئة مع ضربه بالمضرب جيدا ثم يرش بالفانيليا حتى يصير سميكا نوعا للاستعمال.',
        textEn: 'Whisk in the egg mixture, return to low heat, whisking well, and stir in the vanilla until thick enough to use.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 4,
        text: 'يخلط بالشيكولاته المقطعة أو الكاكاو حتى يصير اللون بنيا.',
        textEn: 'Stir in the chopped chocolate or cocoa until brown.',
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
        title: 'عمل كريمة الباتسيير',
        ingredients: ['2 كوب لبن', '3 بيضات', 'فانيليا', '4 ملعقة كبيرة سكر', '2 ملعقة كبيرة كورن فلاور أو كستر', 'كاكاو أوشيكولاتة مقطعة'],
        instructions: ['يخفق البيض جيدا ثم يضاف الكورن فلاور أو الكستر ويضربوا جيدا.', 'يغلي اللبن مع السكر على درجة متوسطة ثم يرفع من فوق البوتاجاز.', 'يضاف له خليط البيض ويقلبوا جيدا ثم يعاد ثانيا على درجة حرارة هادئة مع ضربه بالمضرب جيدا ثم يرش بالفانيليا حتى يصير سميكا نوعا للاستعمال.', 'يخلط بالشيكولاته المقطعة أو الكاكاو حتى يصير اللون بنيا.']
      }
    }
  },
  {
    id: 'des-109',
    title: 'عمل الكريم شانتيه بالفواكه',
    titleEn: 'Fruit-Blended Chantilly Cream',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '-',
    servings: 'يكفي لتزيين تورتة واحدة',
    masterIngredients: [
      {
        id: 'db114-1',
        name: 'كريم شانتيه (بودرة)',
        nameEn: 'Chantilly cream powder',
        standardAmount: '2 باكو',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '2 باكو'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db114-2',
        name: 'لبن',
        nameEn: 'Milk',
        standardAmount: 'حسب الحاجة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: 'حسب الحاجة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db114-3',
        name: 'موز أو فراولة أو جوافة أو خوخ أو أناناس',
        nameEn: 'Banana, strawberry, guava, peach, or pineapple',
        standardAmount: 'حسب الرغبة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'حسب الرغبة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db114-4',
        name: 'سكر',
        nameEn: 'Sugar',
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
        text: 'نضرب في الخلاط اللبن مع أي نوع من الفواكه مثل موزة أو قليل من الفراولة أو الجوافة أو الخوخ أو الأناناس مع السكر.',
        textEn: 'Blend the milk with any fruit — banana, strawberry, guava, peach, or pineapple — and sugar.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نحضر مضرب البيض الكهربائي ونسكب خليط اللبن بالفواكه ونسكب فوقه بودرة الكريم شانتيه ويضرب بالمضرب لمدة 3 دقائق تقريبا.',
        textEn: 'In an electric mixer, combine the fruit-milk mixture with the Chantilly cream powder and beat for about 3 minutes.',
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
        title: 'عمل الكريم شانتيه بالفواكه',
        ingredients: ['2 باكو كريم شانتيه', 'مقدار من اللبن', 'موز أو فراولة', 'الفواكه الطازجة'],
        instructions: ['نضرب في الخلاط اللبن مع أي نوع من الفواكه مثل موزة أو قليل من الفراولة أو الجوافة أو الخوخ أو الاناناس مع السكر.', 'نحضر مضرب البيض الكهربائي ونسكب خليط اللبن بالفواكه ونسكب فوقه بودرة الكريم شانتيه ويضرب بالمضرب لمدة 3 دقائق تقريبا.']
      }
    }
  },
  {
    id: 'des-110',
    title: 'عمل صلصة الكراميل و الشيكولاتة',
    titleEn: 'Caramel and Chocolate Cream Sauce',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '10 دقائق',
    servings: 'يكفي لتزيين تورتة واحدة',
    masterIngredients: [
      {
        id: 'db115-1',
        name: 'كريمة لبانية أو قشدة',
        nameEn: 'Whipping cream, or clotted cream',
        standardAmount: '1 مكيال أو علبة متوسطة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 مكيال أو علبة متوسطة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db115-2',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: '1 مكيال',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 مكيال'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db115-3',
        name: 'شيكولاته مبشورة',
        nameEn: 'Grated chocolate',
        standardAmount: '1/2 إلى 3/4 مكيال',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 إلى 3/4 مكيال'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db115-4',
        name: 'فراولة',
        nameEn: 'Strawberries',
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
        text: 'نحضر طاسة ونضع فيها السكر وقليلا من الماء حتى يحمر ويصبح اللون كالكراميل.',
        textEn: 'Cook the sugar with a little water in a pan until it browns into caramel.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'نسكب الكريمة أو القشدة على الكراميل ونخفض درجة الحرارة ونقلبها باحتراس للتأكد أنها ساحت تماما.',
        textEn: 'Pour the cream or clotted cream over the caramel, lower the heat, and stir carefully until fully melted.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'نضيف لها الشيكولاته المبشورة.',
        textEn: 'Stir in the grated chocolate.',
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
        title: 'عمل صلصة الكراميل و الشيكولاتة',
        ingredients: ['1 مكيال كريمة لباني أو علبة متوسطة قشدة', '1 مكيال سكر', '½ : ¾ مكيال شيكولاته مبشورة', 'بعض الفراولة'],
        instructions: ['نحضر طاسة ونضع فيها السكر وقليل من الماء حتى يحمر ويصبح الون كالكرميل.', 'نسكب الكريمة أو القشدة على الكرميل ونخفض درجة الحرارة ونقلبها باحتراس للتأكد أنها ساحت تماما.', 'نضيف لها الشيكولاته المبشورة.']
      }
    }
  },
  {
    id: 'des-111',
    title: 'عمل صلصة الشيكولاية السايحة',
    titleEn: 'Fluid Chocolate Sauce with Egg',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '5 دقائق',
    cookTime: '5 دقائق',
    servings: 'يكفي لتغطية تورتة واحدة',
    masterIngredients: [
      {
        id: 'db116-1',
        name: 'زبد أو سمن',
        nameEn: 'Butter, or ghee',
        standardAmount: '1 قطعة',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1 قطعة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db116-2',
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
        id: 'db116-3',
        name: 'فانيليا',
        nameEn: 'Vanilla',
        standardAmount: 'قليل',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'قليل'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db116-4',
        name: 'كاكاو سادة أو بودرة شيكولاتة',
        nameEn: 'Plain cocoa, or chocolate powder',
        standardAmount: '2 ملعقة كبيرة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '2 ملعقة كبيرة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db116-5',
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
        id: 'db116-6',
        name: 'سكر',
        nameEn: 'Sugar',
        standardAmount: 'للتحلية',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: 'للتحلية'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db116-7',
        name: 'شيكولاته مقطعة',
        nameEn: 'Chopped chocolate',
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
        text: 'تخلط جميع المقادير بالمضرب حتى تتجانس.',
        textEn: 'Beat all the ingredients together until smooth.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يوضع الخليط على درجة حرارة هادئة مع التقليب حتى يسيل قوامها.',
        textEn: 'Heat gently, stirring, until it becomes a fluid sauce.',
        phase: 'cook',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يمكن مضاعفة المقادير حتى تكفي لتغطية الوجه بالكامل.',
        textEn: 'The recipe can be doubled to fully cover the top of a cake.',
        phase: 'finish',
        sourceDocs: ['doc1'],
        importance: 'tip'
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
        title: 'عمل صلصة الشيكولاية السايحة',
        ingredients: ['قطعة زبد أو سمن', '2 بيضة', 'فانيليا', '2 ملعقة كبيرة من الكاكاو السادة أو بودرة الشيكولاته', 'قليل من اللبن', 'سكر للتحلية', 'بعض الشيكولاته المقطعة'],
        instructions: ['تخلط جميع المقادير بالمضرب حتى تتجانس.', 'يوضع الخليط على درجة حرارة هادئة مع التقليب حتى يسيل قوامها', 'يمكن مضاعفة المقادير حتى تكفى لتغطية الوجه بالكامل']
      }
    }
  },
  {
    id: 'des-112',
    title: 'عمل حلوي الزبد بالبرتقال',
    titleEn: 'Orange Butter Cream',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '-',
    servings: 'يكفي لتزيين تورتة واحدة',
    masterIngredients: [
      {
        id: 'db117-1',
        name: 'سكر ناعم',
        nameEn: 'Fine sugar',
        standardAmount: '1/2 كوب',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db117-2',
        name: 'زبدة',
        nameEn: 'Butter',
        standardAmount: '1/2 كوب',
        category: 'dairy_fat',
        sourceVariations: {
          doc1: '1/2 كوب'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db117-3',
        name: 'بشر برتقال',
        nameEn: 'Orange zest',
        standardAmount: '1 برتقالة',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1 برتقالة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يخفق الزبد جيدا ثم يضاف له السكر تدريجيا مع الخفق المستمر، ثم يضاف بشر برتقالة ناعمة ويخفقوا جيدا.',
        textEn: 'Beat the butter well, gradually add the sugar while beating, then add the finely grated orange zest and beat well.',
        phase: 'prep',
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
        title: 'عمل حلوي الزبد بالبرتقال',
        ingredients: ['½ كوب سكر ناعم', '½ كوب زبدة', 'بشر برتقالة'],
        instructions: ['يخفق الزبد جيدا ثم يضاف له السكر تدريجيا مع الخفق  المستمر ثم يضاف بشر برتقالة ناعمة ويخفقوا جيدا.']
      }
    }
  },
  {
    id: 'des-113',
    title: 'عمل حلوى المربى أو الجيلي',
    titleEn: 'Whipped Jam or Jelly Meringue Topping',
    chapter: 'الباب السادس: الحلويات الغربية',
    chapterNumber: 6,
    category: 'حلويات غربية',
    cookingMethod: 'تسبيك',
    prepTime: '10 دقائق',
    cookTime: '5 دقائق',
    servings: 'يكفي لتزيين تورتة واحدة',
    masterIngredients: [
      {
        id: 'db118-1',
        name: 'مربى أو جيلي مطهو',
        nameEn: 'Cooked jam, or jelly',
        standardAmount: '1/2 فنجان',
        category: 'sweet_fruit',
        sourceVariations: {
          doc1: '1/2 فنجان'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db118-2',
        name: 'زلال بيضة',
        nameEn: 'Egg white',
        standardAmount: '1 بيضة',
        category: 'other',
        sourceVariations: {
          doc1: '1 بيضة'
        },
        isMerged: false,
        originalOccurrencesCount: 1
      },
      {
        id: 'db118-3',
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
    ],
    uniqueInstructions: [
      {
        stepNumber: 1,
        text: 'يسيح الجيلي أو المربى على حمام مائي حتى يصبح خفيف القوام.',
        textEn: 'Melt the jelly or jam in a water bath until it loosens.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 2,
        text: 'يخفق زلال البيض مع ذرة الملح حتى يجمد.',
        textEn: 'Whip the egg white with a pinch of salt to stiff peaks.',
        phase: 'prep',
        sourceDocs: ['doc1'],
        importance: 'core'
      },
      {
        stepNumber: 3,
        text: 'يضاف الجيلي أو المربى إلى زلال البيض ثم يخفقوا جيدا حتى يصير قوامها متوسطا ليسهل فردها على الوجه.',
        textEn: 'Fold the jelly or jam into the egg white and beat well until medium-thick and easy to spread on top.',
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
        title: 'عمل حلوى المربى أو الجيلي',
        ingredients: ['½ فنجان مربى أو جيلي مطهو', 'زلال بيضة', 'ذرة ملح'],
        instructions: ['يسيح الجيلي أو المربى على حمام مائي حتى يصبح خفيف القوام.', 'يخفق زلال البيض مع ذرة الملح حتى يجمد.', 'يضاف الجيلي أو المربى إلى زلال البيض ثم يخفقوا جيدا حتى يصير قوامها متوسطا ليسهل فردها على الوجه.']
      }
    }
  },
];
