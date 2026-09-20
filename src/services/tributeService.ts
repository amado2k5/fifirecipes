import { Tribute } from '../types';

const TRIBUTES_STORAGE_KEY = 'fatma_public_tributes';
const TRIBUTES_UPDATED_EVENT = 'fatma-tribute-updated';

function readLocalTributes(): Tribute[] {
  try {
    const value = localStorage.getItem(TRIBUTES_STORAGE_KEY);
    return value ? JSON.parse(value) as Tribute[] : [];
  } catch {
    return [];
  }
}

/**
 * Add a tribute, stored locally in this browser only
 */
export async function addTribute(tribute: Omit<Tribute, 'id' | 'createdAt'>): Promise<Tribute> {
  const newTribute: Tribute = {
    ...tribute,
    id: 'tribute_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString()
  };
  const localTributes = readLocalTributes();
  localTributes.unshift(newTribute);
  localStorage.setItem(TRIBUTES_STORAGE_KEY, JSON.stringify(localTributes.slice(0, 100)));
  window.dispatchEvent(new Event(TRIBUTES_UPDATED_EVENT));
  return newTribute;
}

/**
 * Subscribe to locally stored tributes
 */
export function subscribeToTributes(onUpdate: (tributes: Tribute[]) => void): () => void {
  const update = () => onUpdate(readLocalTributes());
  update();
  window.addEventListener(TRIBUTES_UPDATED_EVENT, update);
  return () => window.removeEventListener(TRIBUTES_UPDATED_EVENT, update);
}
