import React, { useState } from 'react';
import { Recipe, SupportedLanguage } from '../types';
import { 
  GitCompare, 
  Layers, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  FileText,
  CheckCircle2
} from 'lucide-react';

interface DocumentComparatorProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  lang: SupportedLanguage;
}

export const DocumentComparator: React.FC<DocumentComparatorProps> = ({
  recipes,
  onSelectRecipe,
  lang
}) => {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(recipes[0]?.id || '');

  const activeRecipe = recipes.find(r => r.id === selectedRecipeId) || recipes[0];

  if (!activeRecipe) return null;

  return (
    <div className="space-y-6">
      {/* Selector & overview */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <GitCompare className="w-6 h-6 text-sky-600" />
              <span>{isAr ? 'مقارنة الوثائق الثلاث بالتفصيل (3-Doc Diff Analyzer)' : '3-Document Text Comparison'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              {isAr 
                ? 'قارن بين محتوى الوثائق الثلاث لنفس الوصفة وشاهد كيف تم دمج المكونات واستخلاص التعليمات الفريدة.'
                : 'Inspect the 3 source versions side by side and observe how redundancies were collapsed into the master record.'}
            </p>
          </div>

          {/* Selector */}
          <div className="w-full sm:w-80">
            <label className="block text-xs font-bold text-stone-600 mb-1.5">
              {isAr ? 'اختر وصفة للمقارنة:' : 'Select a recipe:'}
            </label>
            <select
              value={selectedRecipeId}
              onChange={(e) => setSelectedRecipeId(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors font-medium text-stone-900"
            >
              {recipes.map(r => (
                <option key={r.id} value={r.id}>
                  {r.title} ({r.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats on active recipe */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 text-stone-700">
            <span className="text-stone-500">{isAr ? 'الباب:' : 'Chapter:'}</span>
            <span className="font-bold text-stone-900">{activeRecipe.chapter}</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>{activeRecipe.overlapAnalysis.mergedIngredientsCount} {isAr ? 'مكونات مكررة تم دمجها' : 'merged ingredients'}</span>
          </div>

          <div className="flex items-center gap-1.5 text-purple-800 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>{activeRecipe.overlapAnalysis.totalUniqueSteps} {isAr ? 'خطوات فريدة نهائية' : 'unique steps'}</span>
          </div>

          <button
            onClick={() => onSelectRecipe(activeRecipe)}
            className="mr-auto inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800"
          >
            <span>{isAr ? 'فتح بطاقة الوصفة الشاملة' : 'View full modal'}</span>
            {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 3-Column Document Raw Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Document 1 */}
        <div className="bg-white rounded-xl border border-amber-200/80 p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-amber-100">
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 mb-1">
                الوثيقة الأولى (Document 1)
              </span>
              <h4 className="font-bold text-stone-900 text-sm">
                {activeRecipe.rawDocVersions.doc1?.title || activeRecipe.title}
              </h4>
            </div>
            <span className="text-[11px] font-medium text-stone-500 bg-stone-50 px-2 py-1 rounded border border-stone-200">
              ص {activeRecipe.rawDocVersions.doc1?.pageNumber || '1'}
            </span>
          </div>

          <div>
            <h5 className="text-xs font-bold text-stone-500 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>المقادير الواردة في الوثيقة 1:</span>
            </h5>
            <ul className="space-y-1 text-xs text-stone-700">
              {activeRecipe.rawDocVersions.doc1?.ingredients.map((item, i) => (
                <li key={i} className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-stone-500 mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>طريقة الإعداد الأصلية:</span>
            </h5>
            <div className="space-y-1.5 text-xs text-stone-700 leading-relaxed">
              {activeRecipe.rawDocVersions.doc1?.instructions.map((ins, i) => (
                <p key={i} className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                  <span className="font-bold text-amber-800 ml-1">{i + 1}.</span> {ins}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Document 2 */}
        <div className="bg-white rounded-xl border border-sky-200/80 p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-sky-100">
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-sky-100 text-sky-800 mb-1">
                الوثيقة الثانية (Document 2)
              </span>
              <h4 className="font-bold text-stone-900 text-sm">
                {activeRecipe.rawDocVersions.doc2?.title || activeRecipe.title}
              </h4>
            </div>
            <span className="text-[11px] font-medium text-stone-500 bg-stone-50 px-2 py-1 rounded border border-stone-200">
              ص {activeRecipe.rawDocVersions.doc2?.pageNumber || 'متطابقة'}
            </span>
          </div>

          <div>
            <h5 className="text-xs font-bold text-stone-500 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>المقادير الواردة في الوثيقة 2:</span>
            </h5>
            <ul className="space-y-1 text-xs text-stone-700">
              {(activeRecipe.rawDocVersions.doc2?.ingredients || activeRecipe.rawDocVersions.doc1?.ingredients || []).map((item, i) => (
                <li key={i} className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-stone-500 mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-sky-600" />
              <span>طريقة الإعداد الأصلية:</span>
            </h5>
            <div className="space-y-1.5 text-xs text-stone-700 leading-relaxed">
              {(activeRecipe.rawDocVersions.doc2?.instructions || activeRecipe.rawDocVersions.doc1?.instructions || []).map((ins, i) => (
                <p key={i} className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                  <span className="font-bold text-sky-800 ml-1">{i + 1}.</span> {ins}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Document 3 */}
        <div className="bg-white rounded-xl border border-purple-200/80 p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-purple-100">
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-purple-100 text-purple-800 mb-1">
                الوثيقة الثالثة (Document 3)
              </span>
              <h4 className="font-bold text-stone-900 text-sm">
                {activeRecipe.rawDocVersions.doc3?.title || activeRecipe.title}
              </h4>
            </div>
            <span className="text-[11px] font-medium text-stone-500 bg-stone-50 px-2 py-1 rounded border border-stone-200">
              ص {activeRecipe.rawDocVersions.doc3?.pageNumber || 'مبوبة'}
            </span>
          </div>

          <div>
            <h5 className="text-xs font-bold text-stone-500 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-600" />
              <span>المقادير الواردة في الوثيقة 3:</span>
            </h5>
            <ul className="space-y-1 text-xs text-stone-700">
              {(activeRecipe.rawDocVersions.doc3?.ingredients || activeRecipe.rawDocVersions.doc1?.ingredients || []).map((item, i) => (
                <li key={i} className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-stone-500 mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-purple-600" />
              <span>طريقة الإعداد الأصلية:</span>
            </h5>
            <div className="space-y-1.5 text-xs text-stone-700 leading-relaxed">
              {(activeRecipe.rawDocVersions.doc3?.instructions || activeRecipe.rawDocVersions.doc1?.instructions || []).map((ins, i) => (
                <p key={i} className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                  <span className="font-bold text-purple-800 ml-1">{i + 1}.</span> {ins}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Synthesis Summary Banner */}
      <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5 text-emerald-950">
        <div className="flex items-center gap-2.5 font-bold mb-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <h4 className="text-sm sm:text-base">
            {isAr ? 'نتيجة الدمج واستخلاص السجل الموحد (Master Output Result):' : 'Synthesis Result:'}
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
          {activeRecipe.overlapAnalysis.reconciliationSummary}
        </p>
      </div>
    </div>
  );
};
