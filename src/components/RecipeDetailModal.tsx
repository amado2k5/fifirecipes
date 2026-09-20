import React, { useState, useEffect } from 'react';
import { Recipe, SupportedLanguage, UserProfile, RecipeComment } from '../types';
import { 
  X, 
  Layers, 
  Sparkles, 
  GitCompare, 
  Clock, 
  Flame, 
  Users, 
  HelpCircle,
  FileCheck,
  Share2,
  Heart,
  Star,
  Download,
  MessageSquare,
  Send,
  Printer,
  FileText,
  FileCode,
  BookOpen
} from 'lucide-react';
import { getRecipeImage } from '../data/recipeImages';
import { getUIText } from '../data/translations';
import { isUserAdmin } from '../services/authService';
import { getLocalizedIngredient, getLocalizedIngredientAmount, getLocalizedInstruction, getLocalizedPhase, getLocalizedRecipe } from '../utils/recipeLocalization';
import { 
  subscribeToComments, 
  addCommentToFirestore, 
  logActivityToFirestore 
} from '../services/firestoreRecipeService';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  lang: SupportedLanguage;
  currentUser: UserProfile | null;
  isBookmarked: boolean;
  onToggleBookmark: (recipe: Recipe) => void;
  onOpenShareModal: (recipe: Recipe) => void;
  onUserRate: (recipe: Recipe, rating: number) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ 
  recipe, 
  onClose, 
  lang,
  currentUser,
  isBookmarked,
  onToggleBookmark,
  onOpenShareModal,
  onUserRate
}) => {
  const [activeTab, setActiveTab] = useState<'master' | 'instructions' | 'compare' | 'comments' | 'audit'>('master');
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  
  // Comments state
  const [comments, setComments] = useState<RecipeComment[]>([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentRating, setNewCommentRating] = useState(5);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  // User star rating hover
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';

  useEffect(() => {
    if (!recipe) return;
    const unsub = subscribeToComments(recipe.id, (cmts) => setComments(cmts));
    return () => unsub();
  }, [recipe?.id]);

  if (!recipe) return null;

  const imageUrl = getRecipeImage(recipe.id, recipe.imageUrl);
  const localized = getLocalizedRecipe(recipe, lang);
  const userRating = currentUser?.ratings?.[recipe.id] || 0;

  const toggleIngredientCheck = (id: string) => {
    setCheckedIngredients(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRatingClick = (rating: number) => {
    onUserRate(recipe, rating);
    logActivityToFirestore({
      actionType: 'rating',
      recipeId: recipe.id,
      recipeTitle: recipe.title,
      userId: currentUser?.id,
      userName: currentUser?.name,
      userProvider: currentUser?.provider,
      details: `Rated ${rating} out of 5 stars`
    });
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    setIsSubmittingComment(true);
    try {
      await addCommentToFirestore({
        recipeId: recipe.id,
        recipeTitle: recipe.title,
        userId: currentUser?.id || 'guest_' + Date.now(),
        userName: currentUser?.name || (isAr ? 'زائر كريم' : 'Culinary Guest'),
        userAvatar: currentUser?.avatar,
        userProvider: currentUser?.provider || 'guest',
        comment: newCommentText.trim(),
        rating: newCommentRating
      });
      setNewCommentText('');
      setActiveTab('comments');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh] my-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Visual Hero Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900 shrink-0">
          <img
            src={imageUrl}
            alt={localized.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-black/30" />

          {/* Top Bar Actions */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-600/90 text-white backdrop-blur-xs shadow-xs">
                {localized.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-stone-200 backdrop-blur-xs border border-white/10">
                {localized.cookingMethod}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Share Single Recipe */}
              <button
                onClick={() => onOpenShareModal(recipe)}
                className="w-9 h-9 rounded-full bg-white/90 text-stone-800 hover:text-amber-800 hover:bg-white flex items-center justify-center shadow-xs transition-transform active:scale-95"
                title={getUIText(lang, 'shareRecipe')}
              >
                <Share2 className="w-4 h-4" />
              </button>

              {/* Bookmark Toggle */}
              <button
                onClick={() => onToggleBookmark(recipe)}
                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-xs transition-transform active:scale-95 ${
                  isBookmarked
                    ? 'bg-rose-500 text-white hover:bg-rose-600'
                    : 'bg-white/90 text-stone-800 hover:text-rose-500 hover:bg-white'
                }`}
                title={isBookmarked ? getUIText(lang, 'bookmarkRemoved') : getUIText(lang, 'bookmarkSaved')}
              >
                <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              {/* Close */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-stone-300 hover:text-white flex items-center justify-center border border-white/10 shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Hero Info */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="space-y-1 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-xs">
                  {localized.title}
                </h2>
                {recipe.titleEn && (
                  <p className="text-xs sm:text-sm text-stone-300 font-medium" dir="ltr">
                    {recipe.titleEn}
                  </p>
                )}
              </div>

              {/* Interactive Star Rating on Hero */}
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/10 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      onClick={() => handleRatingClick(star)}
                      className="text-amber-400 hover:scale-110 transition-transform p-0.5"
                    >
                      <Star 
                        className={`w-4 h-4 ${
                          (hoverRating || userRating || 5) >= star 
                            ? 'fill-current text-amber-400' 
                            : 'text-stone-500'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
                <span className="text-xs font-bold text-amber-300">
                  {userRating ? `${userRating}.0` : '5.0'}
                </span>
              </div>
            </div>

            {/* Quick Specs Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-2 mt-2 border-t border-white/10">
              {localized.prepTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? `التحضير: ${localized.prepTime}` : `Prep: ${localized.prepTime}`}</span>
                </div>
              )}
              {localized.cookTime && (
                <div className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? `الطهو: ${localized.cookTime}` : `Cook: ${localized.cookTime}`}</span>
                </div>
              )}
              {localized.servings && (
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{localized.servings}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-stone-200 bg-stone-50 px-4 sm:px-6 overflow-x-auto scrollbar-none shrink-0">
          <button
            onClick={() => setActiveTab('master')}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'master'
                ? 'border-amber-600 text-amber-900 bg-white shadow-2xs font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-600" />
            <span>{getUIText(lang, 'ingredients')}</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-amber-100 text-amber-800 font-bold">
              {recipe.masterIngredients.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('instructions')}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'instructions'
                ? 'border-amber-600 text-amber-900 bg-white shadow-2xs font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{getUIText(lang, 'instructions')}</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-800 font-bold">
              {recipe.uniqueInstructions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('comments')}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'comments'
                ? 'border-amber-600 text-amber-900 bg-white shadow-2xs font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-sky-600" />
            <span>{getUIText(lang, 'reviewsAndComments')}</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-sky-100 text-sky-800 font-bold">
              {comments.length}
            </span>
          </button>

          {/* Advanced audit tabs: only shown for administrators */}
          {isUserAdmin(currentUser) && (
            <>
              <button
                onClick={() => setActiveTab('compare')}
                className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                  activeTab === 'compare'
                    ? 'border-amber-600 text-amber-900 bg-white shadow-2xs font-bold'
                    : 'border-transparent text-stone-600 hover:text-stone-900'
                }`}
              >
                <GitCompare className="w-4 h-4 text-purple-600" />
                <span>{isAr ? 'مقارنة المحتوى (مشرف)' : 'Content Comparison (Admin)'}</span>
              </button>

              <button
                onClick={() => setActiveTab('audit')}
                className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                  activeTab === 'audit'
                    ? 'border-amber-600 text-amber-900 bg-white shadow-2xs font-bold'
                    : 'border-transparent text-stone-600 hover:text-stone-900'
                }`}
              >
                <FileCheck className="w-4 h-4 text-amber-700" />
                <span>{isAr ? 'سجل الدمج (مشرف)' : 'Audit (Admin)'}</span>
              </button>
            </>
          )}
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: MASTER INGREDIENTS */}
          {activeTab === 'master' && (
            <div className="space-y-4">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p>
                    {isAr
                      ? 'المقادير المعيارية المضبوطة بدقة. يمكنك النقر على المربع لتحديد المكونات الجاهزة أثناء الطهو.'
                      : 'Exact master measurements reconciled across Dr. Fatma’s notes. Check off ingredients as you prepare.'}
                  </p>
                </div>
                <button
                  onClick={() => onOpenShareModal(recipe)}
                  className="px-3 py-1 text-xs font-semibold text-amber-800 bg-white border border-amber-300 rounded-lg hover:bg-amber-50 shrink-0"
                >
                  {getUIText(lang, 'shareRecipe')}
                </button>
              </div>

              <div className="divide-y divide-stone-100 border border-stone-200/80 rounded-2xl overflow-hidden bg-white">
                {recipe.masterIngredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[ing.id];
                  return (
                    <div key={ing.id} className={`p-4 transition-colors ${isChecked ? 'bg-stone-50/60' : 'hover:bg-stone-50/40'}`}>
                      <div className="flex items-center justify-between select-none">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleIngredientCheck(ing.id)}
                            className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-stone-300 cursor-pointer"
                          />
                          <div className={isChecked ? 'line-through opacity-50' : ''}>
                            <span className="font-bold text-stone-900 text-sm sm:text-base">
                              {getLocalizedIngredient(ing, lang)}
                            </span>
                            <span className="mx-2 text-stone-400">—</span>
                            <span className="text-amber-800 font-semibold text-xs sm:text-sm bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                              {getLocalizedIngredientAmount(ing, lang)}
                            </span>
                            {ing.notes && (
                              <span className="text-stone-500 text-xs mr-2 italic">({ing.notes})</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: UNIQUE INSTRUCTIONS */}
          {activeTab === 'instructions' && (
            <div className="space-y-4">
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-xs sm:text-sm text-emerald-900 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    {isAr ? 'خطوات الطهو الفريدة بعد تنقية وتوحيد الشروح' : 'Step-by-step master cooking instructions'}
                  </p>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    {isAr
                      ? 'مرتبة بالتسلسل الزمني الدقيق للتحضير مع إبراز الطرق البديلة ونكهات فاطمة القاوقجي الخاصة.'
                      : 'Sequence verified for optimal culinary results.'}
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {recipe.uniqueInstructions.map((step) => (
                  <div 
                    key={step.stepNumber}
                    className="p-4 rounded-2xl border border-stone-200/80 bg-white hover:border-amber-300 transition-all shadow-2xs"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 bg-stone-900 text-white">
                        {step.stepNumber}
                      </span>
                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                            {getLocalizedPhase(step.phase, lang)}
                          </span>
                        </div>
                        <p className="recipe-reading-copy text-stone-800">
                          {getLocalizedInstruction(recipe.id, step.stepNumber, step.text, lang, step.textEn)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {recipe.culturalNotes && (
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl">
                  <h4 className="font-bold text-xs text-amber-900 mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    <span>{getUIText(lang, 'tips')}</span>
                  </h4>
                  <p className="recipe-reading-copy text-stone-700">
                    {localized.culturalNotes}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: REVIEWS & COMMUNITY COMMENTS */}
          {activeTab === 'comments' && (
            <div className="space-y-6">
              {/* Add Comment Form */}
              <form onSubmit={handleSubmitComment} className="bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-stone-900">
                    {getUIText(lang, 'addComment')}
                  </h4>
                  {/* Rating Selector */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(st => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setNewCommentRating(st)}
                        className="text-amber-400 p-0.5"
                      >
                        <Star className={`w-4 h-4 ${newCommentRating >= st ? 'fill-current text-amber-400' : 'text-stone-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  required
                  rows={3}
                  value={newCommentText}
                  onChange={e => setNewCommentText(e.target.value)}
                  placeholder={getUIText(lang, 'commentPlaceholder')}
                  className="w-full text-xs sm:text-sm p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-stone-500">
                    {currentUser ? `Posting as: ${currentUser.name} (${currentUser.provider})` : 'Posting as Guest'}
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmittingComment}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors shadow-xs disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{getUIText(lang, 'submitComment')}</span>
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-3">
                {comments.length === 0 ? (
                  <div className="text-center py-8 text-stone-400 text-xs">
                    كن أول من يجرب هذه الوصفة ويشارك رأيه وتجربته!
                  </div>
                ) : (
                  comments.map(cmt => (
                    <div key={cmt.id} className="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={cmt.userAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
                            alt={cmt.userName}
                            className="w-7 h-7 rounded-full object-cover border border-amber-500"
                            referrerPolicy="no-referrer"
                          />
                          <span className="font-bold text-xs text-stone-800">{cmt.userName}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 uppercase font-semibold">
                            {cmt.userProvider}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map(st => (
                            <Star 
                              key={st} 
                              className={`w-3 h-3 ${cmt.rating >= st ? 'fill-current text-amber-400' : 'text-stone-300'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-stone-700 leading-relaxed">
                        {cmt.comment}
                      </p>

                      <div className="text-[10px] text-stone-400">
                        {new Date(cmt.createdAt).toLocaleDateString()} • {new Date(cmt.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 4: 3-DOC RAW COMPARISON */}
          {activeTab === 'compare' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-stone-200 rounded-2xl p-4 bg-white shadow-2xs space-y-2">
                <span className="font-bold text-amber-800 text-xs block pb-1 border-b border-stone-100">الوثيقة 1</span>
                <ul className="text-xs space-y-1 text-stone-700">
                  {recipe.rawDocVersions.doc1?.ingredients.map((item, i) => (
                    <li key={i} className="bg-stone-50 p-1.5 rounded">• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-stone-200 rounded-2xl p-4 bg-white shadow-2xs space-y-2">
                <span className="font-bold text-sky-800 text-xs block pb-1 border-b border-stone-100">الوثيقة 2</span>
                <ul className="text-xs space-y-1 text-stone-700">
                  {(recipe.rawDocVersions.doc2?.ingredients || recipe.rawDocVersions.doc1?.ingredients || []).map((item, i) => (
                    <li key={i} className="bg-stone-50 p-1.5 rounded">• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-stone-200 rounded-2xl p-4 bg-white shadow-2xs space-y-2">
                <span className="font-bold text-purple-800 text-xs block pb-1 border-b border-stone-100">الوثيقة 3</span>
                <ul className="text-xs space-y-1 text-stone-700">
                  {(recipe.rawDocVersions.doc3?.ingredients || recipe.rawDocVersions.doc1?.ingredients || []).map((item, i) => (
                    <li key={i} className="bg-stone-50 p-1.5 rounded">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 5: AUDIT */}
          {activeTab === 'audit' && (
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs text-stone-700">
              <div className="font-bold text-stone-900 text-sm">تقرير المعالجة والمطابقة:</div>
              <p className="leading-relaxed">{recipe.overlapAnalysis.reconciliationSummary}</p>
              <div className="flex gap-4 pt-2 text-stone-500 font-semibold">
                <span>المكونات الموحدة: {recipe.overlapAnalysis.totalMasterIngredients}</span>
                <span>الخطوات الفريدة: {recipe.overlapAnalysis.totalUniqueSteps}</span>
                <span>نسبة التطابق: {recipe.overlapAnalysis.overlapPercentage}%</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

