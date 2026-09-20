import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  History, 
  Star, 
  LogOut,
  Shield,
  Globe,
    Check,
    Mail
} from 'lucide-react';
import { AuthProviderType, UserProfile, SupportedLanguage } from '../types';
  import { signInWithGoogle, signInWithOAuthProvider, signInWithEmail, signUpWithEmail, signOutUser, isUserAdmin } from '../services/authService';
import { getUIText, TOP_20_LANGUAGES } from '../data/translations';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onUserChanged: (user: UserProfile | null) => void;
  lang: SupportedLanguage;
  onSelectLanguage: (lang: SupportedLanguage) => void;
}

function getAuthErrorMessage(error: unknown, isAr: boolean): string {
  const authError = error as { code?: string; message?: string };
  const hostname = typeof window === 'undefined' ? 'this website' : window.location.hostname;

  switch (authError.code) {
    case 'auth/unauthorized-domain':
      return isAr
        ? `هذا النطاق (${hostname}) غير مضاف إلى النطاقات المصرح بها في Firebase Authentication.`
        : `This site (${hostname}) is not authorized for Firebase Authentication.`;
    case 'auth/operation-not-allowed':
      return isAr
        ? 'طريقة تسجيل الدخول هذه غير مفعّلة في Firebase بعد.'
        : 'This sign-in method has not been enabled in Firebase yet.';
    case 'auth/popup-blocked':
      return isAr ? 'حظر المتصفح نافذة تسجيل الدخول. اسمح بالنوافذ المنبثقة ثم حاول مجدداً.' : 'Your browser blocked the sign-in popup. Allow popups and try again.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
      return isAr ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' : 'The email address or password is incorrect.';
    case 'auth/email-already-in-use':
      return isAr ? 'يوجد حساب بهذا البريد الإلكتروني بالفعل.' : 'An account already exists for this email address.';
    default:
      return authError.message || (isAr ? 'تعذر إتمام تسجيل الدخول. حاول مرة أخرى.' : 'Sign-in could not be completed. Please try again.');
  }
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onUserChanged,
  lang,
  onSelectLanguage
}) => {
  const [loadingProvider, setLoadingProvider] = useState<AuthProviderType | null>(null);
  const [customName, setCustomName] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>(lang);
  const [authMode, setAuthMode] = useState<'signIn' | 'signUp'>('signIn');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (currentUser?.preferredLanguage) {
      setSelectedLang(currentUser.preferredLanguage);
    } else {
      setSelectedLang(lang);
    }
  }, [currentUser, lang]);

  if (!isOpen) return null;

  const isAr = selectedLang === 'ar' || selectedLang === 'fa' || selectedLang === 'ur';

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setSelectedLang(newLang);
    onSelectLanguage(newLang);
  };

  const handleGoogleSignIn = async () => {
    setLoadingProvider('google');
    try {
      const user = await signInWithGoogle(selectedLang);
      onUserChanged(user);
      onClose();
    } catch (err: any) {
      setAuthError(getAuthErrorMessage(err, isAr));
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleSocialSignIn = async (provider: AuthProviderType) => {
    setLoadingProvider(provider);
    try {
      if (provider === 'google' || provider === 'email') return;
      const user = await signInWithOAuthProvider(provider, selectedLang);
      onUserChanged(user);
      onClose();
    } catch (err: any) {
      setAuthError(getAuthErrorMessage(err, isAr));
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleEmailAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    setAuthError('');
    setLoadingProvider('email');
    try {
      const user = authMode === 'signUp'
        ? await signUpWithEmail(customName, customEmail, password, selectedLang)
        : await signInWithEmail(customEmail, password, selectedLang);
      onUserChanged(user);
      onClose();
    } catch (err: any) {
      setAuthError(getAuthErrorMessage(err, isAr));
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleSignOut = async () => {
    await signOutUser();
    onUserChanged(null);
    onClose();
  };

  const socialProviders: { id: Exclude<AuthProviderType, 'email'>; name: string; icon: string; bg: string; text: string }[] = [
    { id: 'google', name: 'Google', icon: 'https://cdn.simpleicons.org/google/4285F4', bg: 'bg-white hover:bg-stone-50 border-stone-300 text-stone-800', text: isAr ? 'دخول عبر حساب Google' : 'Sign in with Google' },
    { id: 'apple', name: 'Apple ID', icon: 'https://cdn.simpleicons.org/apple/FFFFFF', bg: 'bg-black hover:bg-stone-900 border-black text-white', text: isAr ? 'دخول عبر حساب Apple' : 'Sign in with Apple' },
    { id: 'facebook', name: 'Facebook', icon: 'https://cdn.simpleicons.org/facebook/FFFFFF', bg: 'bg-[#1877F2] hover:bg-[#166fe5] border-transparent text-white', text: isAr ? 'متابعة عبر Facebook' : 'Continue with Facebook' },
    { id: 'x', name: 'X (Twitter)', icon: 'https://cdn.simpleicons.org/x/FFFFFF', bg: 'bg-black hover:bg-stone-900 border-stone-800 text-white', text: isAr ? 'دخول عبر منصة X' : 'Sign in with X' },
    { id: 'instagram', name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/FFFFFF', bg: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white border-transparent', text: isAr ? 'متابعة عبر Instagram' : 'Continue with Instagram' },
    { id: 'tiktok', name: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/FFFFFF', bg: 'bg-stone-950 hover:bg-black text-white border-stone-800', text: isAr ? 'متابعة عبر TikTok' : 'Continue with TikTok' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-600/30 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-100">
                {currentUser ? getUIText(selectedLang, 'welcomeUser') : getUIText(selectedLang, 'signInToPersonalize')}
              </h3>
              <p className="text-[11px] text-stone-400">
                {currentUser ? currentUser.name : getUIText(selectedLang, 'signInPrompt')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto space-y-5">
          {/* Preferred Language Picker (Accessible on login and when authenticated) */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-700" />
                <span>{getUIText(selectedLang, 'choosePreferredLanguage')}</span>
              </label>
              <span className="text-[11px] font-semibold text-amber-800">
                {TOP_20_LANGUAGES.find(l => l.code === selectedLang)?.nativeName}
              </span>
            </div>

            <select
              value={selectedLang}
              onChange={(e) => handleLanguageChange(e.target.value as SupportedLanguage)}
              className="w-full text-xs font-medium px-3 py-2 border border-amber-300 rounded-lg bg-white text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            >
              {TOP_20_LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.nativeName} ({l.name})
                </option>
              ))}
            </select>
          </div>

          {currentUser ? (
            <div className="space-y-5">
              {/* Profile Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <img 
                  src={currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'} 
                  alt={currentUser.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-600 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-stone-900 text-base truncate">{currentUser.name}</h4>
                    {isUserAdmin(currentUser) ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold border border-amber-400">
                        👑 {isAr ? 'مشرف معتمد' : 'Verified Admin'}
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-200 text-stone-800 font-semibold uppercase">
                        {currentUser.provider}
                      </span>
                    )}
                  </div>
                  {currentUser.email && (
                    <p className="text-xs text-stone-500 truncate mt-0.5">{currentUser.email}</p>
                  )}
                  <p className="text-[11px] text-stone-400 mt-1">
                    {isAr ? 'تاريخ الانضمام:' : 'Joined:'} {new Date(currentUser.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Personalization Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-center">
                  <Heart className="w-4 h-4 text-rose-500 mx-auto mb-1" />
                  <div className="font-bold text-stone-900 text-sm">{currentUser.bookmarks?.length || 0}</div>
                  <div className="text-[10px] text-stone-500">{isAr ? 'المفضلة' : 'Saved'}</div>
                </div>

                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-center">
                  <Star className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                  <div className="font-bold text-stone-900 text-sm">{Object.keys(currentUser.ratings || {}).length}</div>
                  <div className="text-[10px] text-stone-500">{isAr ? 'التقييمات' : 'Ratings'}</div>
                </div>

                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-center">
                  <History className="w-4 h-4 text-sky-500 mx-auto mb-1" />
                  <div className="font-bold text-stone-900 text-sm">{currentUser.history?.length || 0}</div>
                  <div className="text-[10px] text-stone-500">{isAr ? 'المشاهدات' : 'Viewed'}</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{getUIText(selectedLang, 'signOut')}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex gap-2 border-b border-stone-200 pb-2">
                <button type="button" onClick={() => setAuthMode('signIn')} className={`flex-1 py-2 text-xs font-bold border-b-2 ${authMode === 'signIn' ? 'border-amber-600 text-amber-800' : 'border-transparent text-stone-400'}`}>
                  {isAr ? 'تسجيل الدخول' : 'Sign in'}
                </button>
                <button type="button" onClick={() => setAuthMode('signUp')} className={`flex-1 py-2 text-xs font-bold border-b-2 ${authMode === 'signUp' ? 'border-amber-600 text-amber-800' : 'border-transparent text-stone-400'}`}>
                  {isAr ? 'إنشاء حساب' : 'Create account'}
                </button>
              </div>

              <form onSubmit={handleEmailAuth} className="space-y-2.5 rounded-xl border border-stone-200 bg-stone-50 p-3.5">
                {authMode === 'signUp' && (
                  <input type="text" value={customName} onChange={e => setCustomName(e.target.value)} required placeholder={isAr ? 'الاسم' : 'Name'} className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden" />
                )}
                <input type="email" value={customEmail} onChange={e => setCustomEmail(e.target.value)} required placeholder={isAr ? 'البريد الإلكتروني' : 'Email address'} className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} placeholder={isAr ? 'كلمة المرور (6 أحرف على الأقل)' : 'Password (at least 6 characters)'} className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden" />
                <button type="submit" disabled={loadingProvider !== null} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 text-white py-2.5 text-xs font-bold hover:bg-stone-800 disabled:opacity-50">
                  <Mail className="w-3.5 h-3.5" />
                  {loadingProvider === 'email' ? (isAr ? 'جارٍ التنفيذ...' : 'Working...') : authMode === 'signUp' ? (isAr ? 'إنشاء حساب بالبريد' : 'Create account with email') : (isAr ? 'الدخول بالبريد' : 'Sign in with email')}
                </button>
              </form>

              {authError && <p role="alert" className="rounded-lg bg-rose-50 border border-rose-200 px-3 py-2 text-xs text-rose-700">{authError}</p>}

              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-stone-400"><span className="h-px flex-1 bg-stone-200" /><span>{isAr ? 'أو باستخدام مزود' : 'Or continue with a provider'}</span><span className="h-px flex-1 bg-stone-200" /></div>

              {/* Social Login Buttons */}
              <div className="space-y-2 pt-1">
                {socialProviders.map(p => {
                  const isLoading = loadingProvider === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => p.id === 'google' ? handleGoogleSignIn() : handleSocialSignIn(p.id)}
                      disabled={loadingProvider !== null}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold border shadow-xs transition-all ${p.bg} disabled:opacity-50`}
                    >
                      <div className="flex items-center gap-3">
                        <img src={p.icon} alt="" className="h-5 w-5 object-contain" />
                        <span>{p.text}</span>
                      </div>
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Sparkles className="w-3.5 h-3.5 opacity-60" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200 text-[11px] text-stone-600">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isAr 
                    ? 'تسجيل آمن ومشفر. يتم حفظ مفضلتك وتقييماتك ولغتك المختارة بأمان.'
                    : 'Secure authentication. Your recipe favorites, ratings, and language choice are saved privately.'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
