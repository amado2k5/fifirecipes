import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TOP_20_LANGUAGES } from '../data/translations';

interface LanguageSelectorProps {
  currentLanguage?: SupportedLanguage;
  currentLang?: SupportedLanguage;
  onSelectLanguage?: (lang: SupportedLanguage) => void;
  onSelectLang?: (lang: SupportedLanguage) => void;
  detectedLocale?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  currentLang,
  onSelectLanguage,
  onSelectLang,
  detectedLocale = 'auto'
}) => {
  const activeLang = currentLang || currentLanguage || 'ar';
  const handleSelect = (code: SupportedLanguage) => {
    if (onSelectLang) onSelectLang(code);
    if (onSelectLanguage) onSelectLanguage(code);
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = TOP_20_LANGUAGES.find(l => l.code === activeLang) || TOP_20_LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        id="language-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 rounded-lg transition-colors border border-stone-300 shadow-xs"
        title={`Detected browser locale: ${detectedLocale}`}
      >
        <span className="text-base leading-none">{currentLangObj.flag}</span>
        <span className="font-medium">{currentLangObj.nativeName}</span>
        <Globe className="w-3.5 h-3.5 text-stone-500" />
      </button>

      {isOpen && (
        <div className="absolute start-0 lg:start-auto lg:end-0 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-xl shadow-xl bg-white ring-1 ring-black/5 divide-y divide-stone-100 focus:outline-none z-50 overflow-hidden border border-stone-200">
          <div className="p-2.5 bg-stone-50 text-[11px] text-stone-600 border-b border-stone-200">
            <div className="font-bold text-stone-800">Arabic / English</div>
            <div className="text-[10px] text-stone-500">Detected: {detectedLocale}</div>
          </div>

          <div className="max-h-64 overflow-y-auto py-1 scrollbar-thin">
            {TOP_20_LANGUAGES.map(lang => {
              const isSelected = lang.code === currentLanguage;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                    isSelected ? 'bg-amber-50 text-amber-900 font-bold' : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <span className="font-medium">{lang.nativeName}</span>
                    <span className="text-[10px] text-stone-400">({lang.name})</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-600" />}
                </button>
              );
            })}
          </div>

        </div>
      )}
    </div>
  );
};
