import { 
  GoogleAuthProvider, 
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, 
  signOut as firebaseSignOut, 
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { AuthProviderType, UserProfile, SupportedLanguage } from '../types';
import { saveUserProfileToFirestore } from './firestoreRecipeService';

const LOCAL_STORAGE_USER_KEY = 'fatma_cooking_user_session';

/**
 * Check if a user has administrator role
 */
export function isUserAdmin(user: UserProfile | null): boolean {
  if (!user) return false;
  if (user.role === 'admin') return true;
  const email = (user.email || '').trim().toLowerCase();
  if (email === 'ahamdy@gmail.com' || email.includes('admin@') || email === 'admin') {
    return true;
  }
  return false;
}

export function getStoredUser(): UserProfile | null {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveStoredUser(user: UserProfile | null): void {
  try {
    if (user) {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    }
  } catch {
    // ignore
  }
}

function profileFromFirebaseUser(fbUser: FirebaseUser, preferredLanguage?: SupportedLanguage): UserProfile {
  const existing = getStoredUser();
  const email = (fbUser.email || '').toLowerCase();
  const isAdmin = email === 'ahamdy@gmail.com' || email.includes('admin') || existing?.role === 'admin';
  return {
    id: fbUser.uid,
    name: fbUser.displayName || fbUser.email?.split('@')[0] || (isAdmin ? 'Admin' : 'Food Lover'),
    email: fbUser.email || undefined,
    provider: fbUser.providerData[0]?.providerId === 'password' ? 'email' : 'google',
    avatar: fbUser.photoURL || undefined,
    role: isAdmin ? 'admin' : 'user',
    preferredLanguage: preferredLanguage || existing?.preferredLanguage || 'ar',
    bookmarks: existing?.bookmarks || [],
    history: existing?.history || [],
    ratings: existing?.ratings || {},
    createdAt: existing?.createdAt || new Date().toISOString(),
    lastActiveAt: new Date().toISOString()
  };
}

async function saveFirebaseProfile(fbUser: FirebaseUser, preferredLanguage?: SupportedLanguage): Promise<UserProfile> {
  const profile = profileFromFirebaseUser(fbUser, preferredLanguage);
  saveStoredUser(profile);
  await saveUserProfileToFirestore(profile);
  return profile;
}

/**
 * Sign in using Firebase Google Auth
 */
export async function signInWithGoogle(preferredLanguage?: SupportedLanguage): Promise<UserProfile> {
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  return saveFirebaseProfile(cred.user, preferredLanguage);
}

export async function signInWithEmail(email: string, password: string, preferredLanguage?: SupportedLanguage): Promise<UserProfile> {
  const credential = await signInWithEmailAndPassword(auth, email.trim(), password);
  const profile = await saveFirebaseProfile(credential.user, preferredLanguage);
  profile.provider = 'email';
  saveStoredUser(profile);
  return profile;
}

export async function signUpWithEmail(name: string, email: string, password: string, preferredLanguage?: SupportedLanguage): Promise<UserProfile> {
  const credential = await createUserWithEmailAndPassword(auth, email.trim(), password);
  if (name.trim()) {
    await updateProfile(credential.user, { displayName: name.trim() });
  }
  const profile = await saveFirebaseProfile(credential.user, preferredLanguage);
  profile.name = name.trim() || profile.name;
  profile.provider = 'email';
  saveStoredUser(profile);
  return profile;
}

export async function signInWithOAuthProvider(provider: Exclude<AuthProviderType, 'google' | 'email'>, preferredLanguage?: SupportedLanguage): Promise<UserProfile> {
  const providers = {
    apple: () => new OAuthProvider('apple.com'),
    facebook: () => new FacebookAuthProvider(),
    x: () => new TwitterAuthProvider(),
    instagram: () => new OAuthProvider('oidc.instagram'),
    tiktok: () => new OAuthProvider('oidc.tiktok')
  } as const;
  const credential = await signInWithPopup(auth, providers[provider]());
  const profile = await saveFirebaseProfile(credential.user, preferredLanguage);
  profile.provider = provider;
  saveStoredUser(profile);
  return profile;
}

/**
 * Sign in using any supported social provider (Apple, Facebook, X, Instagram, TikTok)
 */
export async function signInWithSocialProvider(
  provider: AuthProviderType,
  customName?: string,
  customEmail?: string,
  preferredLanguage?: SupportedLanguage,
  forceAdmin?: boolean
): Promise<UserProfile> {
  const providerNames: Record<AuthProviderType, string> = {
    google: 'Google Food Enthusiast',
    apple: 'Apple Culinary Member',
    facebook: 'Egyptian Kitchen Fan (FB)',
    x: 'X Food Critic (@cook)',
    instagram: 'Instagram Home Chef',
    tiktok: 'TikTok Recipe Taster',
    email: 'Email Member'
  };

  const providerAvatars: Record<AuthProviderType, string> = {
    google: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    apple: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    facebook: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    x: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    instagram: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    tiktok: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    email: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  };

  const existing = getStoredUser();
  const userId = `${provider}_${Date.now().toString(36)}`;
  const email = (customEmail || existing?.email || '').trim().toLowerCase();
  const isAdmin = forceAdmin || email === 'ahamdy@gmail.com' || email.includes('admin') || existing?.role === 'admin';

  const profile: UserProfile = {
    id: existing?.id || userId,
    name: customName?.trim() || existing?.name || (isAdmin ? 'Admin (' + (customEmail || 'ahamdy@gmail.com') + ')' : providerNames[provider]),
    email: customEmail || existing?.email || (isAdmin ? 'ahamdy@gmail.com' : undefined),
    provider,
    avatar: providerAvatars[provider],
    role: isAdmin ? 'admin' : 'user',
    preferredLanguage: preferredLanguage || existing?.preferredLanguage || 'ar',
    bookmarks: existing?.bookmarks || [],
    history: existing?.history || [],
    ratings: existing?.ratings || {},
    createdAt: existing?.createdAt || new Date().toISOString(),
    lastActiveAt: new Date().toISOString()
  };

  saveStoredUser(profile);
  await saveUserProfileToFirestore(profile);
  return profile;
}

/**
 * Sign out
 */
export async function signOutUser(): Promise<void> {
  try {
    await firebaseSignOut(auth);
  } catch {
    // ignore
  }
  saveStoredUser(null);
}
