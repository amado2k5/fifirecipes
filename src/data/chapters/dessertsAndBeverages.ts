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
  }
];
