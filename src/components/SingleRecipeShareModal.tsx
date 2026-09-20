import React, { useState } from 'react';
import { 
  X, 
  Share2, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  FileCode, 
  MessageCircle, 
  Mail, 
  Send, 
  Sparkles,
  Smartphone
} from 'lucide-react';
import { Recipe, SupportedLanguage } from '../types';
import {
  shareToWhatsApp,
  shareToSMS,
  shareToX,
  shareToEmail,
  copyRecipeLink,
  exportRecipeAsMarkdown,
  exportRecipeAsPdf
} from '../services/recipeShareService';
import { getUIText } from '../data/translations';

interface SingleRecipeShareModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  lang: SupportedLanguage;
}

export const SingleRecipeShareModal: React.FC<SingleRecipeShareModalProps> = ({
  recipe,
  isOpen,
  onClose,
  lang
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !recipe) return null;

  const handleCopyLink = async () => {
    const ok = await copyRecipeLink(recipe, lang);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-600/30 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-stone-100">
                {getUIText(lang, 'shareRecipe')}
              </h3>
              <p className="text-[11px] text-stone-400 truncate max-w-[240px]">
                {recipe.title}
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

        {/* Share buttons */}
        <div className="p-6 space-y-5">
          {/* Quick Copy Link */}
          <div className="flex items-center gap-2 p-2 bg-stone-50 rounded-xl border border-stone-200">
            <input
              type="text"
              readOnly
              value={typeof window !== 'undefined' ? `${window.location.origin}/?recipe=${recipe.id}&lang=${lang}` : ''}
              className="w-full text-xs bg-transparent text-stone-600 outline-none px-2 font-mono truncate"
            />
            <button
              onClick={handleCopyLink}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 ${
                copied 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-stone-800 text-white hover:bg-stone-900'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? getUIText(lang, 'linkCopied') : getUIText(lang, 'copyLink')}</span>
            </button>
          </div>

          {/* Social Channels */}
          <div>
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              Share to Channels / مشاركة سريعة
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {/* WhatsApp */}
              <button
                onClick={() => {
                  shareToWhatsApp(recipe, lang);
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800 group-hover:text-emerald-800">
                    {getUIText(lang, 'shareToWhatsapp')}
                  </div>
                  <div className="text-[10px] text-stone-500">Send to chat</div>
                </div>
              </button>

              {/* X / Twitter */}
              <button
                onClick={() => {
                  shareToX(recipe, lang);
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-stone-800 hover:bg-stone-50 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-xs font-bold">𝕏</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800 group-hover:text-stone-950">
                    {getUIText(lang, 'shareToX')}
                  </div>
                  <div className="text-[10px] text-stone-500">Post update</div>
                </div>
              </button>

              {/* SMS */}
              <button
                onClick={() => {
                  shareToSMS(recipe, lang);
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-sky-500 hover:bg-sky-50/50 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800 group-hover:text-sky-800">
                    {getUIText(lang, 'shareToSms')}
                  </div>
                  <div className="text-[10px] text-stone-500">Text message</div>
                </div>
              </button>

              {/* Email */}
              <button
                onClick={() => {
                  shareToEmail(recipe, lang);
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-amber-500 hover:bg-amber-50/50 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800 group-hover:text-amber-800">
                    {getUIText(lang, 'shareToEmail')}
                  </div>
                  <div className="text-[10px] text-stone-500">Send mail</div>
                </div>
              </button>
            </div>
          </div>

          {/* Export Single Recipe Options (PDF & Markdown only) */}
          <div className="pt-2 border-t border-stone-100">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              Single Recipe File Export / تصدير الوصفة الفردية
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {/* PDF Print/Export */}
              <button
                onClick={() => {
                  exportRecipeAsPdf(recipe, lang);
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-rose-400 hover:bg-rose-50/40 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800 group-hover:text-rose-900">
                    {getUIText(lang, 'exportPdf')}
                  </div>
                  <div className="text-[10px] text-stone-500">Printable A4 Card</div>
                </div>
              </button>

              {/* Markdown Export */}
              <button
                onClick={() => {
                  exportRecipeAsMarkdown(recipe, lang);
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-purple-400 hover:bg-purple-50/40 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <FileCode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800 group-hover:text-purple-900">
                    {getUIText(lang, 'exportMarkdown')}
                  </div>
                  <div className="text-[10px] text-stone-500">.md Recipe file</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-3.5 bg-stone-50 border-t border-stone-200 text-center">
          <p className="text-[11px] text-stone-500">
            Heritage recipes of Dr. Fatma Alkawokgy (1943–2026) • Only single recipe sharing is permitted
          </p>
        </div>
      </div>
    </div>
  );
};
