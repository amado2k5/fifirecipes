import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  writeBatch,
  serverTimestamp,
  query,
  where,
  orderBy,
  limit,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { firestoreDb } from '../lib/firebase';
import { Recipe, RecipeComment, ActivityLog, UserProfile, Tribute } from '../types';

const RECIPES_COLLECTION = 'recipes';
const COMMENTS_COLLECTION = 'comments';
const TRIBUTES_COLLECTION = 'tributes';
const TRIBUTES_STORAGE_KEY = 'fatma_public_tributes';
const ACTIVITY_COLLECTION = 'activity_logs';
const PROFILES_COLLECTION = 'user_profiles';
const METADATA_COLLECTION = 'metadata';

/**
 * Remove undefined values recursively so Firestore setDoc never throws an error
 */
function sanitizeForFirestore<T>(data: T): T {
  if (data === null || data === undefined) {
    return null as unknown as T;
  }
  if (Array.isArray(data)) {
    return data.map(item => sanitizeForFirestore(item)) as unknown as T;
  }
  if (typeof data === 'object') {
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined) {
        result[key] = sanitizeForFirestore(value);
      }
    }
    return result as T;
  }
  return data;
}

/**
 * Fetch all recipes stored in Firestore
 */
export async function fetchRecipesFromFirestore(): Promise<Recipe[]> {
  const colRef = collection(firestoreDb, RECIPES_COLLECTION);
  const snapshot = await getDocs(colRef);
  const recipes: Recipe[] = [];
  snapshot.forEach(docSnap => {
    recipes.push(docSnap.data() as Recipe);
  });
  return recipes;
}

/**
 * Save or update a single recipe in Firestore
 */
export async function saveRecipeToFirestore(recipe: Recipe): Promise<void> {
  const docRef = doc(firestoreDb, RECIPES_COLLECTION, recipe.id);
  const cleanData = sanitizeForFirestore({
    ...recipe,
    updatedAt: new Date().toISOString()
  });
  await setDoc(docRef, cleanData, { merge: true });
}

/**
 * Toggle hide / disable visibility of a recipe
 */
export async function toggleRecipeVisibilityInFirestore(recipeId: string, disabled: boolean): Promise<void> {
  const docRef = doc(firestoreDb, RECIPES_COLLECTION, recipeId);
  await setDoc(docRef, { disabled, updatedAt: new Date().toISOString() }, { merge: true });
}

/**
 * Delete a recipe from Firestore
 */
export async function deleteRecipeFromFirestore(recipeId: string): Promise<void> {
  const docRef = doc(firestoreDb, RECIPES_COLLECTION, recipeId);
  await deleteDoc(docRef);
}

/**
 * Batch upload / sync all master recipes to Firestore
 */
export async function syncAllRecipesToFirestore(
  recipes: Recipe[],
  onProgress?: (current: number, total: number) => void
): Promise<{ success: boolean; count: number; error?: string }> {
  try {
    const total = recipes.length;
    const batchSize = 100;
    for (let i = 0; i < recipes.length; i += batchSize) {
      const batch = writeBatch(firestoreDb);
      const chunk = recipes.slice(i, i + batchSize);

      chunk.forEach(recipe => {
        const docRef = doc(firestoreDb, RECIPES_COLLECTION, recipe.id);
        const cleanData = sanitizeForFirestore({
          ...recipe,
          syncedAt: new Date().toISOString()
        });
        batch.set(docRef, cleanData, { merge: true });
      });

      await batch.commit();
      if (onProgress) {
        onProgress(Math.min(i + batchSize, total), total);
      }
    }

    const metaRef = doc(firestoreDb, METADATA_COLLECTION, 'status');
    await setDoc(metaRef, {
      totalRecipes: total,
      lastSyncedAt: new Date().toISOString(),
      updatedAt: serverTimestamp()
    }, { merge: true });

    return { success: true, count: total };
  } catch (err: any) {
    console.error('Error syncing recipes to Firestore:', err);
    return { success: false, count: 0, error: err?.message || 'Failed to sync to Firestore' };
  }
}

/**
 * Subscribe to real-time changes in Firestore recipes collection
 */
export function subscribeToRecipes(
  onUpdate: (recipes: Recipe[]) => void,
  onError?: (error: any) => void
): () => void {
  const colRef = collection(firestoreDb, RECIPES_COLLECTION);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const recipes: Recipe[] = [];
      snapshot.forEach(docSnap => {
        recipes.push(docSnap.data() as Recipe);
      });
      onUpdate(recipes);
    },
    (err) => {
      console.warn('Firestore snapshot error:', err);
      if (onError) onError(err);
    }
  );
}

/**
 * Add a user comment/review to a recipe
 */
export async function addCommentToFirestore(comment: Omit<RecipeComment, 'id' | 'createdAt'>): Promise<RecipeComment> {
  const commentId = 'cmt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const newComment: RecipeComment = {
    ...comment,
    id: commentId,
    createdAt: new Date().toISOString()
  };
  const docRef = doc(firestoreDb, COMMENTS_COLLECTION, commentId);
  await setDoc(docRef, sanitizeForFirestore(newComment));

  // Log activity
  await logActivityToFirestore({
    actionType: 'comment',
    recipeId: comment.recipeId,
    recipeTitle: comment.recipeTitle,
    userId: comment.userId,
    userName: comment.userName,
    userProvider: comment.userProvider,
    details: `Rating: ${comment.rating}★ - "${comment.comment.slice(0, 45)}..."`
  });

  return newComment;
}

/**
 * Subscribe to comments for a recipe or all comments
 */
export function subscribeToComments(
  recipeId: string | null,
  onUpdate: (comments: RecipeComment[]) => void
): () => void {
  const colRef = collection(firestoreDb, COMMENTS_COLLECTION);
  const q = recipeId 
    ? query(colRef, where('recipeId', '==', recipeId))
    : query(colRef, limit(100));

  return onSnapshot(q, (snapshot) => {
    const list: RecipeComment[] = [];
    snapshot.forEach(docSnap => {
      list.push(docSnap.data() as RecipeComment);
    });
    // Sort descending by date
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    onUpdate(list);
  }, (err) => {
    console.warn('Error reading comments:', err);
  });
}

export async function addTributeToFirestore(tribute: Omit<Tribute, 'id' | 'createdAt'>): Promise<Tribute> {
  const tributeId = 'tribute_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const newTribute: Tribute = {
    ...tribute,
    id: tributeId,
    createdAt: new Date().toISOString()
  };
  try {
    await setDoc(doc(firestoreDb, TRIBUTES_COLLECTION, tributeId), sanitizeForFirestore(newTribute));
  } catch (err) {
    console.warn('Tribute service is offline; saving this tribute locally.', err);
    const localTributes = readLocalTributes();
    localTributes.unshift(newTribute);
    localStorage.setItem(TRIBUTES_STORAGE_KEY, JSON.stringify(localTributes.slice(0, 100)));
    window.dispatchEvent(new Event('fatma-tribute-updated'));
  }
  return newTribute;
}

export function subscribeToTributes(onUpdate: (tributes: Tribute[]) => void): () => void {
  const colRef = collection(firestoreDb, TRIBUTES_COLLECTION);
  const updateFromSnapshot = (snapshot: any) => {
    const list: Tribute[] = [];
    snapshot.forEach((docSnap: QueryDocumentSnapshot) => list.push(docSnap.data() as Tribute));
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    onUpdate(list.slice(0, 100));
  };
  const updateFromLocal = () => onUpdate(readLocalTributes());
  const handleError = (err: unknown) => {
    console.warn('Error reading tributes:', err);
    updateFromLocal();
  };
  const unsubscribe = onSnapshot(colRef, updateFromSnapshot, handleError);
  updateFromLocal();
  window.addEventListener('fatma-tribute-updated', updateFromLocal);
  return () => {
    unsubscribe();
    window.removeEventListener('fatma-tribute-updated', updateFromLocal);
  };
}

function readLocalTributes(): Tribute[] {
  try {
    const value = localStorage.getItem(TRIBUTES_STORAGE_KEY);
    return value ? JSON.parse(value) as Tribute[] : [];
  } catch {
    return [];
  }
}

/**
 * Log user action (share, bookmark, rating, view) for Admin auditing
 */
export async function logActivityToFirestore(activity: Omit<ActivityLog, 'id' | 'createdAt'>): Promise<void> {
  try {
    const logId = 'log_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const logItem: ActivityLog = {
      ...activity,
      id: logId,
      createdAt: new Date().toISOString()
    };
    const docRef = doc(firestoreDb, ACTIVITY_COLLECTION, logId);
    await setDoc(docRef, sanitizeForFirestore(logItem));
  } catch (err) {
    console.warn('Failed to log activity:', err);
  }
}

/**
 * Subscribe to recent activity logs for the Admin view
 */
export function subscribeToActivityLogs(
  onUpdate: (logs: ActivityLog[]) => void,
  maxCount: number = 80
): () => void {
  const colRef = collection(firestoreDb, ACTIVITY_COLLECTION);
  const q = query(colRef, limit(maxCount));

  return onSnapshot(q, (snapshot) => {
    const list: ActivityLog[] = [];
    snapshot.forEach(docSnap => {
      list.push(docSnap.data() as ActivityLog);
    });
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    onUpdate(list);
  }, (err) => {
    console.warn('Error reading activity logs:', err);
  });
}

/**
 * Save / update user profile in Firestore
 */
export async function saveUserProfileToFirestore(profile: UserProfile): Promise<void> {
  try {
    const docRef = doc(firestoreDb, PROFILES_COLLECTION, profile.id);
    const clean = sanitizeForFirestore({
      ...profile,
      lastActiveAt: new Date().toISOString()
    });
    await setDoc(docRef, clean, { merge: true });
  } catch (err) {
    console.warn('Failed to save profile:', err);
  }
}

/**
 * Record activity log helper
 */
export async function recordActivityLog(
  actionType: ActivityLog['actionType'],
  recipeId: string,
  recipeTitle: string,
  userId?: string,
  userName?: string,
  details?: string
): Promise<void> {
  await logActivityToFirestore({
    actionType,
    recipeId,
    recipeTitle,
    userId,
    userName,
    details
  });
}

/**
 * Subscribe to user profiles for Admin view
 */
export function subscribeToUserProfiles(onUpdate: (profiles: UserProfile[]) => void): () => void {
  const colRef = collection(firestoreDb, PROFILES_COLLECTION);
  return onSnapshot(colRef, (snapshot) => {
    const list: UserProfile[] = [];
    snapshot.forEach(docSnap => {
      list.push(docSnap.data() as UserProfile);
    });
    onUpdate(list);
  }, (err) => {
    console.warn('Error reading profiles:', err);
  });
}

