import React from 'react';
import { X } from 'lucide-react';
import { Recipe } from '../types';

interface OriginalManuscriptModalProps {
  recipe: Recipe;
  onClose: () => void;
}

interface ManuscriptSource {
  docLabel: string;
  pageNumber?: number;
  title: string;
  ingredients: string[];
  instructions: string[];
  notes?: string[];
}

export function getManuscriptSource(recipe: Recipe): ManuscriptSource | null {
  const raw = recipe.rawDocVersions || {};
  const order: Array<{ key: 'doc1' | 'doc2' | 'doc3'; label: string }> = [
    { key: 'doc1', label: 'الوثيقة الأولى' },
    { key: 'doc2', label: 'الوثيقة الثانية' },
    { key: 'doc3', label: 'الوثيقة الثالثة' }
  ];
  for (const { key, label } of order) {
    const version = raw[key];
    if (version && (version.ingredients?.length || version.instructions?.length)) {
      return {
        docLabel: label,
        pageNumber: version.pageNumber,
        title: version.title || recipe.title,
        ingredients: version.ingredients || [],
        instructions: version.instructions || [],
        notes: version.notes
      };
    }
  }
  return null;
}

/** A small symmetric arabesque flourish used as a section divider. */
const FlourishDivider: React.FC = () => (
  <svg viewBox="0 0 220 24" className="mx-auto w-40 sm:w-48 h-auto" aria-hidden="true">
    <g fill="none" stroke="#8a5a2b" strokeWidth="1.25" opacity="0.75">
      <path d="M2 12 H88" />
      <path d="M132 12 H218" />
      <path d="M108 12 l6 -6 l6 6 l-6 6 z" fill="#8a5a2b" stroke="none" />
      <circle cx="96" cy="12" r="2.5" fill="#8a5a2b" stroke="none" />
      <circle cx="124" cy="12" r="2.5" fill="#8a5a2b" stroke="none" />
    </g>
  </svg>
);

/** One quarter-corner arabesque motif; rotated per-corner by the caller. */
const CornerOrnament: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path
      d="M4 4 C 4 22, 4 34, 4 48 C 4 34, 14 24, 30 24 C 44 24, 54 14, 60 4"
      fill="none"
      stroke="#8a5a2b"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <circle cx="4" cy="4" r="3.5" fill="#8a5a2b" opacity="0.7" />
  </svg>
);

export const OriginalManuscriptModal: React.FC<OriginalManuscriptModalProps> = ({ recipe, onClose }) => {
  const source = getManuscriptSource(recipe);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      dir="rtl"
    >
      <div
        className="manuscript-unroll relative w-full max-w-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 w-9 h-9 rounded-full bg-[#3a2411] text-[#e9d8ae] border border-[#8a5a2b]/70 shadow-lg flex items-center justify-center hover:bg-[#4a2f16] transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top scroll rod */}
        <div
          className="relative h-6 sm:h-7 rounded-full shadow-lg"
          style={{
            background: 'linear-gradient(180deg, #8a5a2b 0%, #5c3616 45%, #3a2210 100%)'
          }}
        >
          <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 35% 30%, #c99a52, #5c3616 75%)' }} />
          <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 35% 30%, #c99a52, #5c3616 75%)' }} />
        </div>

        {/* Parchment body */}
        <div
          className="relative overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, #faf1d6 0%, #eeddab 45%, #ddc17f 100%)',
            boxShadow: 'inset 0 0 70px 12px rgba(90,58,18,0.35), inset 0 0 0 1px rgba(138,90,43,0.4)'
          }}
        >
          {/* subtle aged-paper grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
            }}
          />

          {/* corner ornaments */}
          <CornerOrnament className="absolute top-2 right-2 w-12 h-12 sm:w-14 sm:h-14" />
          <CornerOrnament className="absolute top-2 left-2 w-12 h-12 sm:w-14 sm:h-14 -scale-x-100" />
          <CornerOrnament className="absolute bottom-2 right-2 w-12 h-12 sm:w-14 sm:h-14 -scale-y-100" />
          <CornerOrnament className="absolute bottom-2 left-2 w-12 h-12 sm:w-14 sm:h-14 -scale-x-100 -scale-y-100" />

          <div className="relative max-h-[70vh] overflow-y-auto px-6 sm:px-12 py-8 sm:py-10">
            {/* Header */}
            <div className="text-center space-y-2 mb-6">
              <h2 className="manuscript-heading-font text-2xl sm:text-3xl font-bold" style={{ color: '#5c3616' }}>
                المخطوطة الأصلية
              </h2>
              <FlourishDivider />
              <p className="manuscript-body-font text-lg sm:text-xl" style={{ color: '#6b4a24' }}>
                {recipe.title}
              </p>
            </div>

            {source ? (
              <div className="manuscript-body-font space-y-6" style={{ color: '#3a2411' }}>
                {source.title && source.title !== recipe.title && (
                  <p className="text-center text-base sm:text-lg italic opacity-90">{source.title}</p>
                )}

                {source.ingredients.length > 0 && (
                  <section>
                    <h3
                      className="manuscript-heading-font text-lg sm:text-xl font-bold mb-3 text-center"
                      style={{ color: '#8a2c12' }}
                    >
                      المقادير
                    </h3>
                    <p className="text-base sm:text-lg leading-[2.1] text-justify">
                      {source.ingredients.join('  —  ')}
                    </p>
                  </section>
                )}

                {source.instructions.length > 0 && (
                  <section>
                    <h3
                      className="manuscript-heading-font text-lg sm:text-xl font-bold mb-3 text-center"
                      style={{ color: '#8a2c12' }}
                    >
                      الطريقة
                    </h3>
                    <div className="text-base sm:text-lg leading-[2.1] text-justify space-y-2">
                      {source.instructions.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </section>
                )}

                {source.notes && source.notes.length > 0 && (
                  <section>
                    <h3
                      className="manuscript-heading-font text-lg sm:text-xl font-bold mb-3 text-center"
                      style={{ color: '#8a2c12' }}
                    >
                      ملاحظات
                    </h3>
                    <div className="text-base sm:text-lg leading-[2.1] text-justify space-y-2">
                      {source.notes.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </section>
                )}

                <FlourishDivider />
                <p className="text-center text-xs sm:text-sm italic opacity-70">
                  منقول بأمانة عن {source.docLabel}
                  {source.pageNumber ? ` • صفحة ${source.pageNumber}` : ''} من كراسة وصفات د. فاطمة القاوقجي
                </p>
              </div>
            ) : (
              <p className="manuscript-body-font text-center text-base sm:text-lg opacity-80" style={{ color: '#3a2411' }}>
                لا يتوفر نص المخطوطة الأصلية لهذه الوصفة.
              </p>
            )}
          </div>
        </div>

        {/* Bottom scroll rod */}
        <div
          className="relative h-6 sm:h-7 rounded-full shadow-lg"
          style={{
            background: 'linear-gradient(180deg, #8a5a2b 0%, #5c3616 45%, #3a2210 100%)'
          }}
        >
          <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 35% 30%, #c99a52, #5c3616 75%)' }} />
          <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 35% 30%, #c99a52, #5c3616 75%)' }} />
        </div>
      </div>
    </div>
  );
};
