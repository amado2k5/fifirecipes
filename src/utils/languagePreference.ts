import type { SupportedLanguage } from '../types';
import { TOP_20_LANGUAGES } from '../data/translations';

// The visitor's explicit language choice, kept in localStorage. index.html
// carries a tiny inline script that reads the same key to set <html lang/dir>
// before first paint; keep the key and the RTL list in sync with it.
export const LANGUAGE_STORAGE_KEY = 'fifi.lang';

export function readStoredLanguage(): SupportedLanguage | null {
  try {
    const value = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return TOP_20_LANGUAGES.some(language => language.code === value) ? (value as SupportedLanguage) : null;
  } catch {
    return null; // storage blocked (private mode, disabled cookies)
  }
}

export function storeLanguage(lang: SupportedLanguage): void {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Not persisted; the choice still applies for this visit.
  }
}
