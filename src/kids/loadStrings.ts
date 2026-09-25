import type { SupportedLanguage } from '../types';
import { hasKidsStrings, registerKidsStrings, type KidsStrings } from './strings';

// Each language's strings become their own small chunk.
const FILES = import.meta.glob<{ default: KidsStrings }>('./i18n/*.ts');

/** Makes getKidsStrings(lang) return that language's strings. */
export async function loadKidsStrings(lang: SupportedLanguage): Promise<void> {
  if (hasKidsStrings(lang)) return;
  const load = FILES[`./i18n/${lang}.ts`];
  if (load) registerKidsStrings(lang, (await load()).default);
}
