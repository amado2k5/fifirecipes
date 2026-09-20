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
  // Authentication succeeds independently of the optional cloud profile sync.
  // Keep the signed-in local session when Firestore is temporarily unavailable.
  try {
    await saveUserProfileToFirestore(profile);
  } catch (error) {
    console.warn('Signed in, but could not synchronize the profile to Firestore.', error);
  }
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
