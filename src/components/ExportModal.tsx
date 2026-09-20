import React, { useState } from 'react';
import { Recipe, DatabaseStats, SupportedLanguage } from '../types';
import { buildGlobalIngredientRegistry } from '../data/recipes';
import { 
  X, 
  Download, 
  FileCode, 
  FileSpreadsheet, 
  Database, 
  BookOpen, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';

interface ExportModalProps {
  recipes: Recipe[];
  stats: DatabaseStats;
  isOpen: boolean;
  onClose: () => void;
  lang: SupportedLanguage;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  recipes,
  stats,
  isOpen,
  onClose,
  lang
}) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';

  const downloadFile = (filename: string, content: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExportJSON = () => {
    const payload = {
      metadata: {
        databaseName: "Master Recipe Database (3-Document Reconciled)",
        createdAt: new Date().toISOString(),
        totalRecipes: stats.totalRecipes,
        totalMasterIngredients: stats.totalMasterIngredients,
        totalUniqueInstructions: stats.totalUniqueInstructions,
        deduplicationStats: stats
      },
      recipes
    };
    downloadFile('master_recipe_database.json', JSON.stringify(payload, null, 2), 'application/json');
  };

  const handleExportIngredientsCSV = () => {
    const registry = buildGlobalIngredientRegistry(recipes);
    const headers = ['Ingredient Name', 'Category', 'Recipe Count', 'Standard Usages'];
    const rows = registry.map(item => [
      `"${item.name.replace(/"/g, '""')}"`,
      `"${item.category}"`,
      item.recipesCount,
      `"${item.recipeTitles.map(r => `${r.title} (${r.standardAmount})`).join('; ').replace(/"/g, '""')}"`
    ]);
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    downloadFile('master_ingredients_registry.csv', csvContent, 'text/csv;charset=utf-8;');
  };

  const handleExportRecipesCSV = () => {
    const headers = ['ID', 'Title', 'Title (EN)', 'Chapter', 'Category', 'Cooking Method', 'Prep Time', 'Cook Time', 'Master Ingredients Count', 'Unique Steps Count', 'Overlap %'];
    const rows = recipes.map(r => [
      `"${r.id}"`,
      `"${r.title.replace(/"/g, '""')}"`,
      `"${(r.titleEn || '').replace(/"/g, '""')}"`,
      `"${r.chapter.replace(/"/g, '""')}"`,
      `"${r.category}"`,
      `"${r.cookingMethod}"`,
      `"${r.prepTime || ''}"`,
      `"${r.cookTime || ''}"`,
      r.masterIngredients.length,
      r.uniqueInstructions.length,
      r.overlapAnalysis.overlapPercentage
    ]);
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    downloadFile('master_recipes_catalog.csv', csvContent, 'text/csv;charset=utf-8;');
  };

  const handleExportSQL = () => {
    let sql = `-- Master Cooking Recipe Database Schema & Seed
-- Generated automatically from 3 merged recipe documents

CREATE TABLE IF NOT EXISTS recipes (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    title_en VARCHAR(255),
    chapter VARCHAR(255),
    category VARCHAR(100),
    cooking_method VARCHAR(100),
    prep_time VARCHAR(50),
    cook_time VARCHAR(50),
    servings VARCHAR(50),
    overlap_ratio INT
);

CREATE TABLE IF NOT EXISTS recipe_ingredients (
    id VARCHAR(50) PRIMARY KEY,
    recipe_id VARCHAR(50) REFERENCES recipes(id),
    name VARCHAR(255) NOT NULL,
    standard_amount VARCHAR(255),
    category VARCHAR(100),
    is_merged BOOLEAN,
    doc_occurrences INT
);

CREATE TABLE IF NOT EXISTS recipe_instructions (
    id SERIAL PRIMARY KEY,
    recipe_id VARCHAR(50) REFERENCES recipes(id),
    step_number INT NOT NULL,
    instruction_text TEXT NOT NULL,
    phase VARCHAR(50),
    is_alternative BOOLEAN DEFAULT FALSE,
    source_docs VARCHAR(100)
);

`;

    recipes.forEach(r => {
      const cleanTitle = r.title.replace(/'/g, "''");
      const cleanEn = (r.titleEn || '').replace(/'/g, "''");
      const cleanChapter = r.chapter.replace(/'/g, "''");
      sql += `INSERT INTO recipes (id, title, title_en, chapter, category, cooking_method, prep_time, cook_time, servings, overlap_ratio) VALUES ('${r.id}', '${cleanTitle}', '${cleanEn}', '${cleanChapter}', '${r.category}', '${r.cookingMethod}', '${r.prepTime || ''}', '${r.cookTime || ''}', '${r.servings || ''}', ${r.overlapAnalysis.overlapPercentage});\n`;

      r.masterIngredients.forEach(ing => {
        const cleanName = ing.name.replace(/'/g, "''");
        const cleanAmount = ing.standardAmount.replace(/'/g, "''");
        sql += `INSERT INTO recipe_ingredients (id, recipe_id, name, standard_amount, category, is_merged, doc_occurrences) VALUES ('${ing.id}', '${r.id}', '${cleanName}', '${cleanAmount}', '${ing.category}', ${ing.isMerged}, ${ing.originalOccurrencesCount});\n`;
      });

      r.uniqueInstructions.forEach(ins => {
        const cleanIns = ins.text.replace(/'/g, "''");
        sql += `INSERT INTO recipe_instructions (recipe_id, step_number, instruction_text, phase, is_alternative, source_docs) VALUES ('${r.id}', ${ins.stepNumber}, '${cleanIns}', '${ins.phase}', ${!!ins.isAlternative}, '${ins.sourceDocs.join(',')}');\n`;
      });
    });

    downloadFile('master_recipe_database.sql', sql, 'application/sql');
  };

  const handleExportMarkdown = () => {
    let md = `# كتاب الوصفات المصرية والعربية الموحدة (Master Recipe Cookbook)
> مستخلص من ثلاث وثائق متداخلة مع دمج المقادير المكررة وتجريد التعليمات الفريدة.

**إحصائيات قاعدة البيانات:**
- إجمالي الوصفات المدمجة: ${stats.totalRecipes}
- إجمالي المقادير الموحدة: ${stats.totalMasterIngredients}
- إجمالي الخطوات الفريدة: ${stats.totalUniqueInstructions}
- معدل إزالة التكرار: ${stats.averageOverlapRatio}%

---\n\n`;

    recipes.forEach(r => {
      md += `## ${r.title} ${r.titleEn ? `(${r.titleEn})` : ''}\n`;
      md += `* **الباب**: ${r.chapter}\n`;
      md += `* **التصنيف**: ${r.category} | **طريقة الطهو**: ${r.cookingMethod}\n`;
      md += `* **الوقت**: تحضير: ${r.prepTime || '-'} | طهو: ${r.cookTime || '-'} | الحصص: ${r.servings || '-'}\n\n`;

      md += `### المقادير الموحدة (Master Ingredients):\n`;
      r.masterIngredients.forEach(ing => {
        md += `- **${ing.name}**: ${ing.standardAmount} *(مدمج من ${ing.originalOccurrencesCount} وثائق)*\n`;
      });
      md += `\n### خطوات الطهو الفريدة المستخلصة (Unique Instructions):\n`;
      r.uniqueInstructions.forEach(step => {
        md += `${step.stepNumber}. ${step.text} *[مرحلة: ${step.phase} | المصدر: ${step.sourceDocs.join(', ')}]*\n`;
      });

      md += `\n*تقرير الفرز:* ${r.overlapAnalysis.reconciliationSummary}\n\n---\n\n`;
    });

    downloadFile('master_cookbook.md', md, 'text/markdown');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Download className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-lg">
              {isAr ? 'تصدير قاعدة بيانات الوصفات الموحدة' : 'Export Master Recipe Database'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-stone-600">
            {isAr
              ? 'اختر الصيغة المناسبة لتصدير قاعدة البيانات المدمجة للاستخدام في تطبيقاتك أو قواعد بيانات SQL أو التقارير التحليلية:'
              : 'Choose the format to export your deduplicated recipes, master ingredients registry, or relational database seed:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* JSON */}
            <button
              onClick={handleExportJSON}
              className="p-4 rounded-xl border border-stone-200 hover:border-amber-500 hover:bg-amber-50/40 transition-all text-right flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <FileCode className="w-6 h-6 text-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                  JSON
                </span>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">{isAr ? 'ملف JSON الشامل' : 'Full Database JSON'}</h4>
                <p className="text-xs text-stone-500 mt-1">{isAr ? 'هيكل برمجي كامل لكافة الوصفات والمقادير والوثائق' : 'Nested structured object with full provenance'}</p>
              </div>
            </button>

            {/* SQL */}
            <button
              onClick={handleExportSQL}
              className="p-4 rounded-xl border border-stone-200 hover:border-amber-500 hover:bg-amber-50/40 transition-all text-right flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <Database className="w-6 h-6 text-sky-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                  SQL
                </span>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">{isAr ? 'سكريبت قواعد البيانات SQL' : 'Relational SQL DDL & Seed'}</h4>
                <p className="text-xs text-stone-500 mt-1">{isAr ? 'جداول علائقية ومفاتيح أجنبية متوافقة مع PostgreSQL/SQLite' : 'DDL tables & normalized INSERT statements'}</p>
              </div>
            </button>

            {/* CSV Ingredients */}
            <button
              onClick={handleExportIngredientsCSV}
              className="p-4 rounded-xl border border-stone-200 hover:border-amber-500 hover:bg-amber-50/40 transition-all text-right flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <FileSpreadsheet className="w-6 h-6 text-emerald-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                  CSV
                </span>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">{isAr ? 'جدول المكونات الموحدة (CSV)' : 'Master Ingredients CSV'}</h4>
                <p className="text-xs text-stone-500 mt-1">{isAr ? 'سجل إكسيل بالمقادير الموحدة وتصنيفاتها ومرات تكرارها' : 'Spreadsheet of canonical ingredients and categories'}</p>
              </div>
            </button>

            {/* Markdown */}
            <button
              onClick={handleExportMarkdown}
              className="p-4 rounded-xl border border-stone-200 hover:border-amber-500 hover:bg-amber-50/40 transition-all text-right flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                  Markdown
                </span>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">{isAr ? 'كتاب الوصفات Markdown' : 'Markdown Cookbook'}</h4>
                <p className="text-xs text-stone-500 mt-1">{isAr ? 'ملف توثيقي منسق جاهز للقراءة والطباعة والنشر' : 'Clean readable documentation book'}</p>
              </div>
            </button>
          </div>
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100"
          >
            {isAr ? 'إغلاق النافذة' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
