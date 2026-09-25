import React, { useState } from 'react';
import { Download } from 'lucide-react';
import type { SupportedLanguage } from '../types';
import type { LocalizedKidsRecipe } from './types';
import { ART } from './art';
import { KidsArt } from './KidsArt';
import { fill, type KidsStrings } from './strings';

interface KidsCertificateProps {
  recipe: LocalizedKidsRecipe;
  lang: SupportedLanguage;
  text: KidsStrings;
}

/** A drawing as a standalone SVG image, crayon filter included, for the canvas. */
function artImage(id: string): Promise<HTMLImageElement> {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 108 108" width="400" height="400"><defs><filter id="c" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4" result="w"/><feDisplacementMap in="SourceGraphic" in2="w" scale="2.5" xChannelSelector="R" yChannelSelector="G" result="d"/><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="9" result="g"/><feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 2.05" result="p"/><feComposite in="d" in2="p" operator="in"/></filter></defs><g filter="url(#c)" stroke="#4a3426" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">${ART[id] ?? ''}</g></svg>`;
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  });
}

async function drawCertificate(recipe: LocalizedKidsRecipe, name: string, text: KidsStrings, rtl: boolean): Promise<Blob> {
  const font = rtl ? "'Baloo Bhaijaan 2', sans-serif" : "'Baloo 2', sans-serif";
  await Promise.all([document.fonts.load(`800 60px ${font}`), document.fonts.load(`700 40px ${font}`)]).catch(() => undefined);
  const [cover, star] = await Promise.all([artImage(recipe.cover), artImage('star')]);

  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 850;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff8e7';
  ctx.fillRect(0, 0, 1200, 850);
  const colors = ['#ff4d5e', '#ff9f1c', '#ffc93c', '#4caf50', '#4a6fe3', '#9c6ade'];
  colors.forEach((color, i) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.strokeRect(20 + i * 9, 20 + i * 9, 1160 - i * 18, 810 - i * 18);
  });
  ctx.drawImage(star, 90, 90, 130, 130);
  ctx.drawImage(star, 980, 90, 130, 130);
  ctx.drawImage(cover, 470, 330, 260, 260);

  ctx.direction = rtl ? 'rtl' : 'ltr';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#5b21b6';
  ctx.font = `800 84px ${font}`;
  ctx.fillText(`${text.superChef}`, 600, 190);
  ctx.fillStyle = '#44403c';
  ctx.font = `700 40px ${font}`;
  ctx.fillText(text.certificate, 600, 260);
  ctx.fillStyle = '#1c1917';
  ctx.font = `800 52px ${font}`;
  ctx.fillText(fill(text.certificateLine, { name, recipe: recipe.title }), 600, 680, 1040);
  ctx.fillStyle = '#78716c';
  ctx.font = `700 30px ${font}`;
  ctx.fillText(`${new Date().toLocaleDateString(document.documentElement.lang)} · fifi.cooking`, 600, 750);

  return new Promise((resolve, reject) => canvas.toBlob(blob => (blob ? resolve(blob) : reject(new Error('canvas'))), 'image/png'));
}

/** "Super Chef" certificate with the child's name, saved or shared as a picture. */
export const KidsCertificate: React.FC<KidsCertificateProps> = ({ recipe, lang, text }) => {
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);
  const rtl = lang === 'ar' || lang === 'fa' || lang === 'ur';

  const save = async () => {
    setBusy(true);
    try {
      const blob = await drawCertificate(recipe, name.trim(), text, rtl);
      const file = new File([blob], `${recipe.id}-certificate.png`, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: text.certificate }).catch(() => undefined);
      } else {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = file.name;
        link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 1000);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="rounded-3xl bg-white border-4 border-violet-300 p-4 sm:p-6">
      <h2 className="text-2xl font-extrabold text-violet-900">🏅 {text.certificate}</h2>
      <div className="my-4 mx-auto max-w-md rounded-2xl border-[6px] border-double border-amber-400 bg-amber-50 p-4">
        <div className="flex items-center justify-center gap-2">
          <KidsArt id="star" className="w-8 h-8" />
          <span className="text-2xl font-extrabold text-violet-800">{text.superChef}</span>
          <KidsArt id="star" className="w-8 h-8" />
        </div>
        <KidsArt id={recipe.cover} className="w-20 h-20 mx-auto" />
        <p className="text-lg font-extrabold">{fill(text.certificateLine, { name: name.trim() || '⭐', recipe: recipe.title })}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2">
        <input
          value={name}
          onChange={e => setName(e.target.value.slice(0, 30))}
          placeholder={text.yourName}
          aria-label={text.yourName}
          className="min-h-12 px-4 rounded-full border-2 border-stone-300 bg-white text-lg font-bold text-center focus:outline-none focus:border-violet-500"
        />
        <button
          onClick={save}
          disabled={!name.trim() || busy}
          className="inline-flex items-center justify-center gap-2 min-h-12 px-5 rounded-full bg-violet-500 border-2 border-violet-600 text-white text-lg font-extrabold disabled:opacity-40"
        >
          <Download className="w-5 h-5" /> {text.saveCertificate}
        </button>
      </div>
    </section>
  );
};
