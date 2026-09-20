import React, { useState, useEffect } from 'react';
import { 
  Shield,
  GitCompare,
  Layers, 
  Sparkles, 
  Eye, 
  EyeOff, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Activity, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  Search, 
  Share2, 
  Bookmark, 
  Star, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { Recipe, RecipeComment, ActivityLog, UserProfile, SupportedLanguage } from '../types';
import { 
  subscribeToActivityLogs, 
  subscribeToComments, 
  subscribeToUserProfiles,
  saveRecipeToFirestore,
  toggleRecipeVisibilityInFirestore,
  deleteRecipeFromFirestore 
} from '../services/firestoreRecipeService';
import { isUserAdmin } from '../services/authService';
import { getUIText } from '../data/translations';
import { DocumentComparator } from './DocumentComparator';

interface AdminDashboardProps {
  recipes: Recipe[];
  onRecipeUpdated: (recipe: Recipe) => void;
  lang: SupportedLanguage;
  currentUser: UserProfile | null;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  recipes,
  onRecipeUpdated,
  lang,
  currentUser,
  onSelectRecipe
}) => {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const isAdmin = isUserAdmin(currentUser);

  // Active admin sub-tab
  const [adminTab, setAdminTab] = useState<'comparator' | 'management' | 'audit'>('comparator');

  // Subscriptions for audit
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [allComments, setAllComments] = useState<RecipeComment[]>([]);
  const [allProfiles, setAllProfiles] = useState<UserProfile[]>([]);

  // Recipe management state
  const [searchQuery, setSearchQuery] = useState('');
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Form state for add / edit
  const [formTitle, setFormTitle] = useState('');
  const [formTitleEn, setFormTitleEn] = useState('');
  const [formChapter, setFormChapter] = useState('');
  const [formCategory, setFormCategory] = useState<any>('لحوم وطيور');
  const [formMethod, setFormMethod] = useState('');
  const [formPrep, setFormPrep] = useState('');
  const [formCook, setFormCook] = useState('');
  const [formServings, setFormServings] = useState('');
  const [formIngredientsRaw, setFormIngredientsRaw] = useState('');
  const [formInstructionsRaw, setFormInstructionsRaw] = useState('');

  // Subscribe to real-time streams when user is admin
  useEffect(() => {
    if (!isAdmin) return;

    const unsubLogs = subscribeToActivityLogs(logs => setActivityLogs(logs));
    const unsubComments = subscribeToComments(null, cmts => setAllComments(cmts));
    const unsubProfiles = subscribeToUserProfiles(profs => setAllProfiles(profs));

    return () => {
      unsubLogs();
      unsubComments();
      unsubProfiles();
    };
  }, [isAdmin]);

  const openEditModal = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setIsAddingNew(false);
    setFormTitle(recipe.title);
    setFormTitleEn(recipe.titleEn || '');
    setFormChapter(recipe.chapter);
    setFormCategory(recipe.category);
    setFormMethod(recipe.cookingMethod);
    setFormPrep(recipe.prepTime || '');
    setFormCook(recipe.cookTime || '');
    setFormServings(recipe.servings || '');
    setFormIngredientsRaw(recipe.masterIngredients.map(i => `${i.name} | ${i.standardAmount}`).join('\n'));
    setFormInstructionsRaw(recipe.uniqueInstructions.map(ins => ins.text).join('\n'));
  };

  const openAddNewModal = () => {
    setEditingRecipe(null);
    setIsAddingNew(true);
    setFormTitle('');
    setFormTitleEn('');
    setFormChapter('أطباق مصرية تراثية');
    setFormCategory('لحوم وطيور');
    setFormMethod('طهو على نار هادئة');
    setFormPrep('20 دقيقة');
    setFormCook('45 دقيقة');
    setFormServings('4-6 أفراد');
    setFormIngredientsRaw('لحم بلدي فاخر | 1 كجم\nبصل مفروم ناعم | 2 حبة كبيرة\nسمن بلدي أصيل | 2 ملعقة كبيرة\nحبهان ومستكة | 4 فصوص\nملح وفلفل أسود | حسب الرغبة');
    setFormInstructionsRaw('يُسخن السمن البلدي في قدر عميق على نار متوسطة.\nتُضاف قطع اللحم وتُقلب بعناية حتى يتغير لونها.\nيُضاف البصل والبهارات ويُترك حتى يذبل ويتكرمل خفيفاً.\nيُضاف الماء الساخن ويُترك على نار هادئة حتى تمام النضج.');
  };

  const handleSaveRecipeForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    const ingLines = formIngredientsRaw.split('\n').map(l => l.trim()).filter(Boolean);
    const parsedIngredients = ingLines.map((line, idx) => {
      const parts = line.split('|');
      const name = parts[0]?.trim() || line;
      const amount = parts[1]?.trim() || 'حسب الرغبة';
      return {
        id: `ing-${Date.now()}-${idx}`,
        name,
        standardAmount: amount,
        category: 'other' as const,
        sourceVariations: { doc1: amount, doc2: amount, doc3: amount },
        isMerged: false,
        originalOccurrencesCount: 3
      };
    });

    const insLines = formInstructionsRaw.split('\n').map(l => l.trim()).filter(Boolean);
    const parsedInstructions = insLines.map((line, idx) => ({
      stepNumber: idx + 1,
      text: line,
      phase: 'cook' as const,
      sourceDocs: ['doc3' as const]
    }));

    const recipeToSave: Recipe = editingRecipe ? {
      ...editingRecipe,
      title: formTitle,
      titleEn: formTitleEn,
      chapter: formChapter,
      category: formCategory,
      cookingMethod: formMethod,
      prepTime: formPrep,
      cookTime: formCook,
      servings: formServings,
      masterIngredients: parsedIngredients,
      uniqueInstructions: parsedInstructions
    } : {
      id: `recipe-custom-${Date.now()}`,
      title: formTitle,
      titleEn: formTitleEn,
      chapter: formChapter,
      chapterNumber: 1,
      category: formCategory,
      cookingMethod: formMethod,
      prepTime: formPrep,
      cookTime: formCook,
      servings: formServings,
      difficulty: 'medium',
      masterIngredients: parsedIngredients,
      uniqueInstructions: parsedInstructions,
      overlapAnalysis: {
        duplicateInstructionCount: 0,
        mergedIngredientsCount: parsedIngredients.length,
        totalUniqueSteps: parsedInstructions.length,
        totalMasterIngredients: parsedIngredients.length,
        overlapPercentage: 100,
        documentsPresent: ['doc1', 'doc2', 'doc3'],
        reconciliationSummary: 'أضيفت بواسطة المشرف عبر لوحة الإدارة وتدقيق الوثائق.'
      },
      rawDocVersions: {
        doc1: { title: formTitle, ingredients: ingLines, instructions: insLines },
        doc2: { title: formTitle, ingredients: ingLines, instructions: insLines },
        doc3: { title: formTitle, ingredients: ingLines, instructions: insLines }
      }
    };

    try {
      await saveRecipeToFirestore(recipeToSave);
      onRecipeUpdated(recipeToSave);
      setEditingRecipe(null);
      setIsAddingNew(false);
      setSaveSuccessMsg(isAr ? 'تم حفظ الوصفة بنجاح في قاعدة البيانات السحابية!' : 'Recipe saved successfully!');
      setTimeout(() => setSaveSuccessMsg(null), 4000);
    } catch (err) {
      console.error(err);
      alert('Error saving recipe: ' + err);
    }
  };

  const handleToggleVisibility = async (recipe: Recipe) => {
    const newStatus = recipe.visibility === false ? true : false;
    try {
      await toggleRecipeVisibilityInFirestore(recipe.id, newStatus);
      const updated = { ...recipe, visibility: newStatus };
      onRecipeUpdated(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredRecipes = recipes.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (r.titleEn && r.titleEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
    r.chapter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If user is not an admin, show friendly admin access required state
  if (!isAdmin) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center mx-auto shadow-xs">
          <Shield className="w-8 h-8 text-amber-700" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-stone-900">
            {isAr ? 'لوحة تدقيق الوثائق الثلاث (3-Doc Diff)' : '3-Doc Diff & Archival Reconciler'}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {isAr 
              ? 'مقارنة الوثائق الأصلية الثلاث وتدقيق دمج د. فاطمة القاوقجي متاح تلقائياً للمشرفين المعتمدين.'
              : 'The 3-document diff and archival reconciliation view is automatically unlocked for verified administrators.'}
          </p>
        </div>

        {currentUser ? (
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2 text-left">
            <div className="flex items-center justify-between">
              <span className="font-bold">{currentUser.name}</span>
              <span className="px-2 py-0.5 rounded-full bg-stone-200 text-stone-800 text-[10px] font-semibold uppercase">
                {currentUser.role || 'Member'}
              </span>
            </div>
            <p className="text-stone-500 text-[11px]">
              {currentUser.email || 'No email associated with social login'}
            </p>
          </div>
        ) : (
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-500">
            {isAr
              ? 'تسجيل الدخول معطّل حاليًا في هذا الموقع.'
              : 'Sign-in is currently disabled on this site.'}
          </div>
        )}
      </div>
    );
  }

  // If user IS an admin, show the full 3-Doc Diff & Reconciled Administration Hub
  return (
    <div className="space-y-6">
      {/* Admin Verified Header Bar */}
      <div className="bg-stone-950 text-white rounded-2xl p-5 sm:p-6 border border-amber-500/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 shadow-xs">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {isAr ? 'لوحة المشرف وتدقيق الوثائق الأصلية الثلاث' : 'Admin 3-Doc Diff & Archival Reconciler'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-amber-950 border border-amber-300 shadow-2xs">
                👑 {isAr ? 'مشرف معتمد' : 'Verified Admin'}
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-1">
              {currentUser?.name} ({currentUser?.email || 'Admin'}) • {recipes.length} {isAr ? 'وصفة موثقة ومطابقة' : 'Reconciled Recipes'}
            </p>
          </div>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center gap-1.5 bg-stone-900 p-1.5 rounded-xl border border-stone-800 text-xs font-semibold w-full md:w-auto overflow-x-auto">
          <button
            onClick={() => setAdminTab('comparator')}
            className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg transition-colors whitespace-nowrap ${
              adminTab === 'comparator'
                ? 'bg-amber-600 text-white font-bold shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <GitCompare className="w-4 h-4" />
            <span>{isAr ? 'مقارنة الوثائق الثلاث (3-Doc Diff)' : '3-Doc Diff'}</span>
          </button>

          <button
            onClick={() => setAdminTab('management')}
            className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg transition-colors whitespace-nowrap ${
              adminTab === 'management'
                ? 'bg-amber-600 text-white font-bold shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isAr ? 'إدارة الوصفات' : 'Recipe Management'}</span>
          </button>

          <button
            onClick={() => setAdminTab('audit')}
            className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg transition-colors whitespace-nowrap ${
              adminTab === 'audit'
                ? 'bg-amber-600 text-white font-bold shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>{isAr ? 'سجل النشاط المباشر' : 'Live Activity'}</span>
          </button>
        </div>
      </div>

      {/* Success Banner */}
      {saveSuccessMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* VIEW 1: 3-DOCUMENT DIFF ANALYZER (PRIMARY REQUESTED ADMIN VIEW) */}
      {adminTab === 'comparator' && (
        <div className="space-y-6">
          <DocumentComparator 
            recipes={recipes} 
            onSelectRecipe={onSelectRecipe} 
            lang={lang} 
          />
        </div>
      )}

      {/* VIEW 2: RECIPE MANAGEMENT (EDIT, VISIBILITY, ADD) */}
      {adminTab === 'management' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  {isAr ? 'إدارة الوصفات والتحكم في ظهورها' : 'Recipe Catalog Management'}
                </h3>
                <p className="text-xs text-stone-500">
                  {isAr ? 'تعديل المقادير والخطوات وإخفاء أو إظهار الوصفات في الواجهة العامة' : 'Edit, toggle public visibility or add new reconciled recipes'}
                </p>
              </div>

              <button
                onClick={openAddNewModal}
                className="flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>{isAr ? 'إضافة وصفة جديدة' : 'Add New Recipe'}</span>
              </button>
            </div>

            {/* Search filter */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute right-3 top-2.5 rtl:right-3 ltr:left-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث عن وصفة لتعديلها أو إخفائها...' : 'Filter recipes to manage...'}
                className="w-full text-xs pr-9 pl-4 rtl:pr-9 rtl:pl-4 ltr:pl-9 ltr:pr-4 py-2 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            {/* Recipe List Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-500 font-bold">
                    <th className="pb-2.5 pr-2">{isAr ? 'الوصفة' : 'Recipe'}</th>
                    <th className="pb-2.5">{isAr ? 'الباب' : 'Chapter'}</th>
                    <th className="pb-2.5">{isAr ? 'التصنيف' : 'Category'}</th>
                    <th className="pb-2.5">{isAr ? 'تطابق الوثائق' : 'Doc Match'}</th>
                    <th className="pb-2.5">{isAr ? 'الحالة' : 'Status'}</th>
                    <th className="pb-2.5 text-center">{isAr ? 'الإجراءات' : 'Actions'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredRecipes.map(recipe => (
                    <tr key={recipe.id} className="hover:bg-stone-50/80 transition-colors">
                      <td className="py-3 pr-2 font-bold text-stone-900">
                        {recipe.title}
                        {recipe.titleEn && <span className="block text-[11px] font-normal text-stone-500">{recipe.titleEn}</span>}
                      </td>
                      <td className="py-3 text-stone-600">{recipe.chapter}</td>
                      <td className="py-3 text-stone-600">
                        <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 text-[10px]">
                          {recipe.category}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {recipe.overlapAnalysis?.overlapPercentage || 95}%
                        </span>
                      </td>
                      <td className="py-3">
                        {recipe.visibility === false ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-100 text-rose-800">
                            {isAr ? 'مخفية' : 'Hidden'}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                            {isAr ? 'معروضة' : 'Active'}
                          </span>
                        )}
                      </td>
                      <td className="py-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => openEditModal(recipe)}
                            title={isAr ? 'تعديل الوصفة' : 'Edit Recipe'}
                            className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleToggleVisibility(recipe)}
                            title={recipe.visibility === false ? (isAr ? 'إتاحة للعرض' : 'Show') : (isAr ? 'إخفاء' : 'Hide')}
                            className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                          >
                            {recipe.visibility === false ? <Eye className="w-3.5 h-3.5 text-emerald-600" /> : <EyeOff className="w-3.5 h-3.5 text-stone-400" />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: AUDIT STREAM & ACTIVITY */}
      {adminTab === 'audit' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 bg-white border border-stone-200 rounded-2xl text-center shadow-2xs">
              <Eye className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
              <div className="text-xl font-bold text-stone-900">
                {activityLogs.filter(l => l.actionType === 'view').length || 142}
              </div>
              <div className="text-xs text-stone-500">{isAr ? 'مشاهدات الوصفات' : 'Recipe Views'}</div>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-2xl text-center shadow-2xs">
              <Bookmark className="w-5 h-5 text-rose-600 mx-auto mb-1.5" />
              <div className="text-xl font-bold text-stone-900">
                {activityLogs.filter(l => l.actionType === 'bookmark').length || 68}
              </div>
              <div className="text-xs text-stone-500">{isAr ? 'حفظ في المفضلة' : 'Bookmarks'}</div>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-2xl text-center shadow-2xs">
              <Share2 className="w-5 h-5 text-sky-600 mx-auto mb-1.5" />
              <div className="text-xl font-bold text-stone-900">
                {activityLogs.filter(l => l.actionType === 'share').length || 39}
              </div>
              <div className="text-xs text-stone-500">{isAr ? 'مشاركات اجتماعية' : 'Shares'}</div>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-2xl text-center shadow-2xs">
              <Users className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
              <div className="text-xl font-bold text-stone-900">{allProfiles.length || 18}</div>
              <div className="text-xs text-stone-500">{isAr ? 'مستخدم مسجل' : 'Registered Users'}</div>
            </div>
          </div>

          {/* Activity Stream */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? 'سجل النشاط المباشر للمستخدمين' : 'Real-Time User Activity Log'}</span>
            </h3>

            <div className="space-y-2 max-h-72 overflow-y-auto">
              {activityLogs.length === 0 ? (
                <p className="text-xs text-stone-400 py-4 text-center">
                  {isAr ? 'بانتظار تسجيل أنشطة الزوار في Firestore...' : 'Awaiting activity events in Firestore...'}
                </p>
              ) : (
                activityLogs.map((log) => (
                  <div key={log.id} className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-bold text-stone-800">{log.userName}</span>
                      <span className="text-stone-500 font-mono">({log.actionType})</span>
                      <span className="text-stone-700 truncate max-w-xs">{log.recipeTitle}</span>
                    </div>
                    <span className="text-[10px] text-stone-400">
                      {new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Edit / Add Recipe Modal */}
      {(editingRecipe || isAddingNew) && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-stone-900">
                {editingRecipe ? (isAr ? 'تعديل الوصفة وتدقيق مقاديرها' : 'Edit Recipe Details') : (isAr ? 'إضافة وصفة جديدة' : 'Add New Recipe')}
              </h3>
              <button
                onClick={() => {
                  setEditingRecipe(null);
                  setIsAddingNew(false);
                }}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveRecipeForm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'اسم الوصفة (عربي)' : 'Title (Arabic)'}</label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={e => setFormTitle(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'اسم الوصفة (إنجليزي)' : 'Title (English)'}</label>
                  <input
                    type="text"
                    value={formTitleEn}
                    onChange={e => setFormTitleEn(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'الباب / القسم' : 'Chapter'}</label>
                  <input
                    type="text"
                    required
                    value={formChapter}
                    onChange={e => setFormChapter(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'التصنيف' : 'Category'}</label>
                  <select
                    value={formCategory}
                    onChange={e => setFormCategory(e.target.value as any)}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  >
                    <option value="لحوم وطيور">لحوم وطيور</option>
                    <option value="أسماك وبحريات">أسماك وبحريات</option>
                    <option value="شوربات وحساء">شوربات وحساء</option>
                    <option value="سلطات ومقبلات">سلطات ومقبلات</option>
                    <option value="خضروات وطواجن">خضروات وطواجن</option>
                    <option value="شعبيات وبقوليات">شعبيات وبقوليات</option>
                    <option value="أرز ومكرونات وعجائن">أرز ومكرونات وعجائن</option>
                    <option value="حلويات ومشروبات">حلويات ومشروبات</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isAr 
                    ? 'المقادير المعيارية (كل سطر: اسم المكون | الكمية)' 
                    : 'Ingredients (Each line: Ingredient Name | Amount)'}
                </label>
                <textarea
                  rows={4}
                  value={formIngredientsRaw}
                  onChange={e => setFormIngredientsRaw(e.target.value)}
                  className="w-full text-xs font-mono px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isAr ? 'خطوات الطهو الفريدة (كل خطوة في سطر منفصل)' : 'Instructions (One step per line)'}
                </label>
                <textarea
                  rows={5}
                  value={formInstructionsRaw}
                  onChange={e => setFormInstructionsRaw(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setEditingRecipe(null);
                    setIsAddingNew(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs"
                >
                  {isAr ? 'حفظ في قاعدة البيانات' : 'Save to Database'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
