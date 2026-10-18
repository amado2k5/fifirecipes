import React, { useEffect, useRef, useState } from 'react';
import { SupportedLanguage } from '../types';
import { getUIText } from '../data/translations';

export interface ActionItem {
  title: string;
  link: string;
  source?: string; // e.g., 'Eventbrite', 'Google'
}

interface ActionPopupProps {
  title: string;
  items: ActionItem[];
  onClose: () => void;
  lang: SupportedLanguage;
  showLocationPrompt?: boolean;
  onRequestLocation?: (address?: string) => void;
}

export const ActionPopup: React.FC<ActionPopupProps> = ({
  title,
  items,
  onClose,
  lang,
  showLocationPrompt = false,
  onRequestLocation,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [address, setAddress] = useState('');

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Click outside to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleLocationClick = () => {
    setShowAddressInput(true);
  };

  const handleAddressSubmit = () => {
    if (address.trim() && onRequestLocation) {
      onRequestLocation(address.trim());
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-xl max-w-md w-full p-6 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-stone-800"
            aria-label={getUIText(lang, 'close')}
          >
            ✕
          </button>
        </div>
        {showLocationPrompt && onRequestLocation && (
          <div className="mb-3">
            {!showAddressInput ? (
              <button
                onClick={handleLocationClick}
                className="w-full py-2 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
              >
                {getUIText(lang, 'shareLocationBtn')}
              </button>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder={getUIText(lang, 'enterAddressPlaceholder')}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddressSubmit}
                    className="flex-1 py-2 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                  >
                    {getUIText(lang, 'useThisLocation')}
                  </button>
                  <button
                    onClick={() => setShowAddressInput(false)}
                    className="flex-1 py-2 px-4 bg-stone-200 text-stone-700 rounded-lg hover:bg-stone-300 transition"
                  >
                    {getUIText(lang, 'cancel')}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        {items.length === 0 && !showLocationPrompt && (
          <p className="text-sm text-stone-600">{getUIText(lang, 'noResultsFound')}</p>
        )}
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-start py-2 px-3 bg-amber-50 hover:bg-amber-100 rounded transition"
              >
                <span className="font-medium text-stone-800">{item.title}</span>
                {item.source && item.source !== item.title && (
                  <span className="ms-2 text-xs text-stone-500">({item.source})</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
