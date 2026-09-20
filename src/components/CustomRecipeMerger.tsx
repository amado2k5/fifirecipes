import React, { useState } from 'react';
import { mergeIngredients, deduplicateInstructions, normalizeArabicText } from '../utils/deduplicator';
import { MasterIngredient, UniqueInstruction, Recipe } from '../types';
import { saveRecipeToFirestore } from '../services/firestoreRecipeService';
import { 
  Sparkles, 
  Layers, 
  Play, 
  RotateCcw, 
  FileText, 
  CheckCircle2, 
  Sliders,
  HelpCircle,
  Copy,
  Check,
  Database,
  CloudCheck,
  RefreshCw
} from 'lucide-react';

interface CustomRecipeMergerProps {
  lang: 'ar' | 'en';
}

const PRESET_DEMO = {
  title: 'كباب الحلة المصري المكرمل بالبصل',
  doc1Ingredients: `1 كيلو لحم مكعبات أحمر
3 بصلات كبار مفرومة ناعم
2 ملعقة كبيرة سمن بلدي
1 ملعقة صغيرة فلفل أسود
ملح حسب الرغبة
نصف كوب ماء مغلي تدريجياً`,
  doc1Instructions: `نضع السمن البلدي في إناء على نار متوسطة حتى يسخن تماماً.
نشوح مكعبات اللحم جيداً حتى يتغير لونها وتتحمر من جميع الجهات.
نضيف البصل المفروم والفلفل الأسود ونقلب حتى يذبل البصل ويتحول للون الكهرماني الذهبي.
نضيف نصف كوب ماء مغلي كلما جف الماء ونغطي الإناء على نار هادئة.
نكرر إضافة الماء تدريجياً حتى ينضج اللحم ويصبح البصل صلصة بنية سميكة.
نضيف الملح في النهاية بعد النضج لكي لا يشد اللحم ويقدم مع الأرز الأبيض.`,

  doc2Ingredients: `كيلو لحم بتلو أو بقري مقطع مكعبات
3 حبات بصل كبيرة مفرومة
2 م ك سمنة بلدي
ملعقة فلفل أسود وبهارات لحم
ملح طعام
ماء ساخن للتشريب`,
  doc2Instructions: `يسخن السمن في حلة ساخنة وتضاف قطع اللحم للتحمير وقفل المسام.
يضاف البصل المفروم مع الفلفل الأسود ويقلب حتى يتكرمل بلون ذهبي شهي.
يغطى الإناء مع إضافة القليل من الماء الساخن كلما احتاج اللحم.
يترك على نار هادئة تماماً حتى استواء اللحم تماماً وتكون صوص بني كثيف.
يملح اللحم بعد التأكد من تمام النضج ويقدم ساخناً.`,

  doc3Ingredients: `1 ك لحم قطع
3 بصلات ك مفروم ناعم
2 م سمن
فلفل أسود وملح
رشة حبهان مطحون
ماء مغلي`,
  doc3Instructions: `تشويح قطع اللحم في ملعقتين سمن حتى تأخذ لون بني محمر.
إضافة البصل المفروم مع التقليب المستمر حتى يذبل ويتكرمل.
وضع فلفل أسود ورشة حبهان مطحون.
إضافة ربع كوب ماء مغلي وتغطية القدر على درجة حرارة خفيفة جداً.
الاستمرار في سقي اللحم بقليل من الماء الساخن حتى نضج اللحم تماماً.
تتبيل بالملح وتقديمه في طبق غويط مع الأرز المفلفل.`
};

export const CustomRecipeMerger: React.FC<CustomRecipeMergerProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [title, setTitle] = useState(PRESET_DEMO.title);
  const [doc1Ing, setDoc1Ing] = useState(PRESET_DEMO.doc1Ingredients);
  const [doc1Ins, setDoc1Ins] = useState(PRESET_DEMO.doc1Instructions);
  const [doc2Ing, setDoc2Ing] = useState(PRESET_DEMO.doc2Ingredients);
  const [doc2Ins, setDoc2Ins] = useState(PRESET_DEMO.doc2Instructions);
  const [doc3Ing, setDoc3Ing] = useState(PRESET_DEMO.doc3Ingredients);
  const [doc3Ins, setDoc3Ins] = useState(PRESET_DEMO.doc3Instructions);

  const [similarityThreshold, setSimilarityThreshold] = useState<number>(0.65);
  const [mergedIngredients, setMergedIngredients] = useState<MasterIngredient[] | null>(null);
  const [uniqueSteps, setUniqueSteps] = useState<UniqueInstruction[] | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSavingToCloud, setIsSavingToCloud] = useState(false);
  const [savedToCloudSuccess, setSavedToCloudSuccess] = useState(false);

  const handleRunMerger = () => {
    // Process Ingredients
    const list1 = doc1Ing.split('\n').map(s => s.trim()).filter(Boolean);
    const list2 = doc2Ing.split('\n').map(s => s.trim()).filter(Boolean);
    const list3 = doc3Ing.split('\n').map(s => s.trim()).filter(Boolean);
    const ingResult = mergeIngredients(list1, list2, list3);

    // Process Instructions
    const steps1 = doc1Ins.split('\n').map(s => s.trim()).filter(Boolean);
    const steps2 = doc2Ins.split('\n').map(s => s.trim()).filter(Boolean);
    const steps3 = doc3Ins.split('\n').map(s => s.trim()).filter(Boolean);
    const insResult = deduplicateInstructions(steps1, steps2, steps3);

    setMergedIngredients(ingResult.masterIngredients);
    setUniqueSteps(insResult.uniqueInstructions);
    setSavedToCloudSuccess(false);
  };

  const handleSaveToCloud = async () => {
    if (!mergedIngredients || !uniqueSteps) return;
    setIsSavingToCloud(true);
    try {
      const customRecipeId = `custom-${Date.now()}`;
      const newRecipe: Recipe = {
        id: customRecipeId,
        title: title || 'وصفة مدمجة جديدة',
        titleEn: 'Custom Reconciled Recipe',
        chapter: 'وصفات مخصصة مدمجة',
        chapterNumber: 99,
        category: 'أطباق مدمجة',
        cookingMethod: 'متعدد',
        prepTime: '20 دقيقة',
        cookTime: '45 دقيقة',
        servings: '4 - 6 أفراد',
        masterIngredients: mergedIngredients,
        uniqueInstructions: uniqueSteps,
        overlapAnalysis: {
          duplicateInstructionCount: (doc1Ins.split('\n').filter(Boolean).length + doc2Ins.split('\n').filter(Boolean).length + doc3Ins.split('\n').filter(Boolean).length) - uniqueSteps.length,
          mergedIngredientsCount: (doc1Ing.split('\n').filter(Boolean).length + doc2Ing.split('\n').filter(Boolean).length + doc3Ing.split('\n').filter(Boolean).length) - mergedIngredients.length,
          totalUniqueSteps: uniqueSteps.length,
          totalMasterIngredients: mergedIngredients.length,
          overlapPercentage: 75,
          documentsPresent: ['doc1', 'doc2', 'doc3'],
          reconciliationSummary: 'تم دمج هذه الوصفة وحفظها مباشرة في قاعدة بيانات Firebase Firestore السحابية.'
        },
        rawDocVersions: {
          doc1: {
            title: 'نسخة وثيقة 1',
            ingredients: doc1Ing.split('\n').filter(Boolean),
            instructions: doc1Ins.split('\n').filter(Boolean)
          },
          doc2: {
            title: 'نسخة وثيقة 2',
            ingredients: doc2Ing.split('\n').filter(Boolean),
            instructions: doc2Ins.split('\n').filter(Boolean)
          },
          doc3: {
            title: 'نسخة وثيقة 3',
            ingredients: doc3Ing.split('\n').filter(Boolean),
            instructions: doc3Ins.split('\n').filter(Boolean)
          }
        }
      };

      await saveRecipeToFirestore(newRecipe);
      setSavedToCloudSuccess(true);
      setTimeout(() => setSavedToCloudSuccess(false), 4000);
    } catch (err) {
      console.error('Failed to save custom recipe to Firestore:', err);
      alert('حدث خطأ أثناء الحفظ في Firestore. يرجى المحاولة لاحقاً.');
    } finally {
      setIsSavingToCloud(false);
    }
  };

  const handleReset = () => {
    setTitle(PRESET_DEMO.title);
    setDoc1Ing(PRESET_DEMO.doc1Ingredients);
    setDoc1Ins(PRESET_DEMO.doc1Instructions);
    setDoc2Ing(PRESET_DEMO.doc2Ingredients);
    setDoc2Ins(PRESET_DEMO.doc2Instructions);
    setDoc3Ing(PRESET_DEMO.doc3Ingredients);
    setDoc3Ins(PRESET_DEMO.doc3Instructions);
    setMergedIngredients(null);
    setUniqueSteps(null);
  };

  const copyResult = () => {
    if (!mergedIngredients || !uniqueSteps) return;
    const text = `
=== ${title} (سجل موحد مدمج) ===

المقادير الموحدة (Master Ingredients):
${mergedIngredients.map((ing, idx) => `${idx + 1}. ${ing.name} — ${ing.standardAmount} (${ing.category})`).join('\n')}

التعليمات الفريدة المستخلصة (Unique Instructions):
${uniqueSteps.map(s => `${s.stepNumber}. ${s.text} [مرحلة: ${s.phase}]`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-6">
      {/* Intro header */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <span>{isAr ? 'أداة دمج الوثائق واستخلاص التعليمات الحية' : 'Live Document Ingestion & Deduplicator'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              {isAr
                ? 'جرب خوارزمية الدمج والتطبيع العربي مباشرة على أي نصوص وصفات متطابقة أو جديدة من الوثائق.'
                : 'Test the Arabic normalization and Jaccard deduplication engine in real time with custom inputs.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isAr ? 'استعادة النموذج التوضيحي' : 'Load Demo'}</span>
            </button>
            <button
              onClick={handleRunMerger}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isAr ? 'تشغيل الدمج وإزالة التكرار' : 'Execute Merge'}</span>
            </button>
          </div>
        </div>

        {/* Title & Threshold setting */}
        <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-stone-600 mb-1">
              {isAr ? 'عنوان الوصفة المدمجة:' : 'Recipe Title:'}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 font-semibold text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-bold text-stone-600 mb-1">
              <span>{isAr ? 'معامل تشابه النصوص (Threshold):' : 'Similarity Threshold:'}</span>
              <span className="text-amber-700 font-bold">{similarityThreshold}</span>
            </div>
            <input
              type="range"
              min="0.40"
              max="0.90"
              step="0.05"
              value={similarityThreshold}
              onChange={(e) => setSimilarityThreshold(parseFloat(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* 3 Source Inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Doc 1 Input */}
        <div className="bg-white rounded-xl border border-amber-200/80 p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-amber-100">
            <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded">الوثيقة 1 (Doc 1)</span>
            <span className="text-[11px] text-stone-400 font-medium">النسخة الأساسية</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1">المقادير (سطر لكل مكون):</label>
            <textarea
              rows={6}
              value={doc1Ing}
              onChange={(e) => setDoc1Ing(e.target.value)}
              className="w-full p-2.5 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white font-mono leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1">التعليمات (سطر لكل خطوة):</label>
            <textarea
              rows={7}
              value={doc1Ins}
              onChange={(e) => setDoc1Ins(e.target.value)}
              className="w-full p-2.5 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white leading-relaxed"
            />
          </div>
        </div>

        {/* Doc 2 Input */}
        <div className="bg-white rounded-xl border border-sky-200/80 p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-sky-100">
            <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded">الوثيقة 2 (Doc 2)</span>
            <span className="text-[11px] text-stone-400 font-medium">النسخة المقارنة 1</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1">المقادير (سطر لكل مكون):</label>
            <textarea
              rows={6}
              value={doc2Ing}
              onChange={(e) => setDoc2Ing(e.target.value)}
              className="w-full p-2.5 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white font-mono leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1">التعليمات (سطر لكل خطوة):</label>
            <textarea
              rows={7}
              value={doc2Ins}
              onChange={(e) => setDoc2Ins(e.target.value)}
              className="w-full p-2.5 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white leading-relaxed"
            />
          </div>
        </div>

        {/* Doc 3 Input */}
        <div className="bg-white rounded-xl border border-purple-200/80 p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-purple-100">
            <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded">الوثيقة 3 (Doc 3)</span>
            <span className="text-[11px] text-stone-400 font-medium">النسخة المقارنة 2</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1">المقادير (سطر لكل مكون):</label>
            <textarea
              rows={6}
              value={doc3Ing}
              onChange={(e) => setDoc3Ing(e.target.value)}
              className="w-full p-2.5 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white font-mono leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1">التعليمات (سطر لكل خطوة):</label>
            <textarea
              rows={7}
              value={doc3Ins}
              onChange={(e) => setDoc3Ins(e.target.value)}
              className="w-full p-2.5 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Output / Results Section */}
      {mergedIngredients && uniqueSteps && (
        <div className="bg-white rounded-2xl border-2 border-emerald-500/40 p-5 sm:p-7 shadow-lg space-y-6 animate-in fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block mb-1">
                {isAr ? 'تم الاستخلاص والدمج بنجاح' : 'Synthesis Complete'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">{title}</h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleSaveToCloud}
                disabled={isSavingToCloud}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg transition-colors shadow-xs disabled:opacity-50"
              >
                {isSavingToCloud ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Database className="w-4 h-4" />
                )}
                <span>
                  {isSavingToCloud 
                    ? (isAr ? 'جارِ الحفظ...' : 'Saving...') 
                    : (isAr ? 'حفظ في Firebase Firestore' : 'Save to Firestore')}
                </span>
              </button>

              <button
                onClick={copyResult}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-200"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ السجل الموحد' : 'Copy Master Record')}</span>
              </button>
            </div>
          </div>

          {savedToCloudSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs sm:text-sm text-emerald-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {isAr
                  ? 'تم حفظ الوصفة المدمجة بنجاح في قاعدة بيانات Firebase Firestore السحابية!'
                  : 'Recipe successfully saved to Firebase Firestore cloud database!'}
              </span>
            </div>
          )}

          {/* Quick Stats on this execution */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
              <div className="text-xl font-bold text-stone-900">{mergedIngredients.length}</div>
              <div className="text-xs text-stone-500">{isAr ? 'مكون رئيسي موحد' : 'Master Ingredients'}</div>
            </div>
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
              <div className="text-xl font-bold text-emerald-700">{uniqueSteps.length}</div>
              <div className="text-xs text-stone-500">{isAr ? 'خطوات فريدة نهائية' : 'Unique Steps'}</div>
            </div>
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
              <div className="text-xl font-bold text-amber-700">
                {(doc1Ing.split('\n').filter(Boolean).length + doc2Ing.split('\n').filter(Boolean).length + doc3Ing.split('\n').filter(Boolean).length) - mergedIngredients.length}
              </div>
              <div className="text-xs text-stone-500">{isAr ? 'تكرار تم دمجه بالمقادير' : 'Merged Ingredients'}</div>
            </div>
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
              <div className="text-xl font-bold text-purple-700">
                {(doc1Ins.split('\n').filter(Boolean).length + doc2Ins.split('\n').filter(Boolean).length + doc3Ins.split('\n').filter(Boolean).length) - uniqueSteps.length}
              </div>
              <div className="text-xs text-stone-500">{isAr ? 'جمل مكررة تم حذفها' : 'Redundant Steps Removed'}</div>
            </div>
          </div>

          {/* Master Ingredients Table */}
          <div className="space-y-3">
            <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-600" />
              <span>{isAr ? 'المقادير الموحدة بعد الدمج (Master Record Ingredients):' : 'Reconciled Master Ingredients:'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {mergedIngredients.map((ing, idx) => (
                <div key={ing.id} className="p-3 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">{ing.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                    {ing.standardAmount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Unique Instructions Sequence */}
          <div className="space-y-3 pt-4 border-t border-stone-100">
            <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>{isAr ? 'التعليمات الفريدة المستخلصة (Unique Step Sequence):' : 'Extracted Unique Instructions:'}</span>
            </h4>
            <div className="space-y-2.5">
              {uniqueSteps.map((step) => (
                <div key={step.stepNumber} className="p-3.5 rounded-xl border border-stone-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-md bg-stone-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.stepNumber}
                  </span>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                        {step.phase === 'prep' ? 'تحضير' : step.phase === 'finish' ? 'تقديم' : 'طهو'}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {isAr ? 'مستخلصة من: ' : 'From: '} {step.sourceDocs.join(', ')}
                      </span>
                    </div>
                    <p className="text-stone-800 text-xs sm:text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
