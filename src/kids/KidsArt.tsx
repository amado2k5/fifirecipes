import React from 'react';
import { ART } from './art';

const INK = '#4a3426';

/**
 * The coloured-pencil look: outlines wobble a little and the colour has a
 * grainy, crayon-like texture. Rendered once by KidsApp and shared by every
 * drawing on the page.
 */
export const CrayonFilter: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
    <defs>
      <filter id="kids-crayon" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4" result="wobble" />
        <feDisplacementMap in="SourceGraphic" in2="wobble" scale="2.5" xChannelSelector="R" yChannelSelector="G" result="drawn" />
        <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="9" result="grain" />
        <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 2.05" result="paper" />
        <feComposite in="drawn" in2="paper" operator="in" />
      </filter>
    </defs>
  </svg>
);

interface PlacedArtProps {
  id: string;
  x: number;
  y: number;
  size: number;
  rotate?: number;
}

/** One drawing placed inside a larger picture, keeping a steady line width. */
const PlacedArt: React.FC<PlacedArtProps> = ({ id, x, y, size, rotate = 0 }) => {
  const scale = size / 100;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate} ${size / 2} ${size / 2}) scale(${scale})`}>
      <g stroke={INK} strokeWidth={Math.min(6, 2.6 / scale)} strokeLinejoin="round" strokeLinecap="round" dangerouslySetInnerHTML={{ __html: ART[id] ?? '' }} />
    </g>
  );
};

interface KidsArtProps {
  id: string;
  className?: string;
  label?: string;
}

/** A single drawing, e.g. an ingredient or a recipe's card picture. */
export const KidsArt: React.FC<KidsArtProps> = ({ id, className, label }) => (
  <svg viewBox="-4 -4 108 108" className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
    <g filter="url(#kids-crayon)">
      <PlacedArt id={id} x={0} y={0} size={100} />
    </g>
  </svg>
);

// ---- Step pictures ----

type Layout = 'into' | 'tool' | 'appliance' | 'stove' | 'hands' | 'onto' | 'skewer' | 'wait' | 'eat';
type Mark = 'drops' | 'dots' | 'swirl' | 'zig' | 'steam' | 'sidesteam' | 'heat' | 'snow' | 'waves' | 'cut' | 'down' | 'roll' | 'flip' | 'sparkle' | 'rain' | 'strips';

interface Scene {
  layout: Layout;
  /** The container or appliance drawn when the step does not name one. */
  base?: string;
  tool?: string;
  marks?: Mark[];
}

/** Every action a step can show. Recipes name one of these as their `act`. */
export const SCENES: Record<string, Scene> = {
  pour: { layout: 'into', base: 'bowl', marks: ['drops'] },
  sprinkle: { layout: 'into', base: 'bowl', marks: ['dots'] },
  drizzle: { layout: 'into', base: 'bowl', marks: ['drops'] },
  crack: { layout: 'into', base: 'bowl', marks: ['drops'] },
  soak: { layout: 'into', base: 'bowl', marks: ['drops', 'steam'] },
  dip: { layout: 'into', base: 'bowl', marks: ['down'] },
  fill: { layout: 'into', base: 'pita', marks: ['down'] },
  layer: { layout: 'into', base: 'glass', marks: ['down'] },
  stir: { layout: 'tool', base: 'bowl', tool: 'spoon', marks: ['swirl'] },
  mix: { layout: 'tool', base: 'bowl', tool: 'spoon', marks: ['swirl'] },
  whisk: { layout: 'tool', base: 'bowl', tool: 'whisk', marks: ['swirl'] },
  mash: { layout: 'tool', base: 'bowl', tool: 'fork', marks: ['zig'] },
  spread: { layout: 'tool', base: 'toast', tool: 'butter-knife', marks: ['zig'] },
  cut: { layout: 'tool', base: 'board', tool: 'knife', marks: ['cut'] },
  cook: { layout: 'stove', base: 'pan', tool: 'spatula', marks: ['sidesteam'] },
  flip: { layout: 'stove', base: 'pan', tool: 'spatula', marks: ['flip'] },
  bake: { layout: 'appliance', base: 'oven', marks: ['heat'] },
  microwave: { layout: 'appliance', base: 'microwave', marks: ['waves'] },
  blend: { layout: 'appliance', base: 'blender', marks: ['zig'] },
  freeze: { layout: 'appliance', base: 'fridge', marks: ['snow'] },
  chill: { layout: 'appliance', base: 'fridge', marks: ['snow'] },
  peel: { layout: 'hands', marks: ['strips'] },
  rinse: { layout: 'hands', marks: ['rain'] },
  squeeze: { layout: 'hands', marks: ['drops'] },
  knead: { layout: 'hands', marks: ['zig'] },
  roll: { layout: 'hands', marks: ['roll'] },
  press: { layout: 'hands', marks: ['down'] },
  tear: { layout: 'hands', marks: ['strips'] },
  wrap: { layout: 'hands', marks: ['roll'] },
  shake: { layout: 'hands', marks: ['zig'] },
  fold: { layout: 'hands', marks: ['flip'] },
  rub: { layout: 'hands', marks: ['zig'] },
  scoop: { layout: 'into', base: 'bowl', marks: ['down'] },
  stack: { layout: 'into', base: 'plate', marks: ['down'] },
  'roll-out': { layout: 'tool', base: 'baking-paper', tool: 'rolling-pin', marks: ['zig'] },
  shape: { layout: 'tool', base: 'board', tool: 'cookie-cutter', marks: ['down'] },
  stamp: { layout: 'tool', base: 'board', tool: 'cookie-mold', marks: ['down'] },
  boil: { layout: 'stove', base: 'pot', marks: ['steam'] },
  simmer: { layout: 'stove', base: 'pot', tool: 'spoon', marks: ['steam'] },
  toast: { layout: 'appliance', base: 'toaster', marks: ['heat'] },
  arrange: { layout: 'onto', base: 'plate', marks: ['sparkle'] },
  thread: { layout: 'skewer', marks: ['sparkle'] },
  cool: { layout: 'wait', marks: ['steam'] },
  eat: { layout: 'eat', marks: ['sparkle'] }
};

/** Where an appliance's contents are drawn, on its own 100×100 canvas. */
const APPLIANCE_SLOT: Record<string, { x: number; y: number; size: number }> = {
  oven: { x: 28, y: 36, size: 44 },
  microwave: { x: 20, y: 28, size: 46 },
  blender: { x: 28, y: 14, size: 44 },
  fridge: { x: -62, y: 30, size: 50 },
  toaster: { x: 24, y: -14, size: 40 }
};

const MARKS: Record<Mark, string> = {
  drops: `<g fill="#4fc3f7" stroke="${INK}" stroke-width="1.5"><path d="M78 34 q5 8 0 11 q-5 -3 0 -11z"/><path d="M86 46 q5 8 0 11 q-5 -3 0 -11z"/><path d="M76 52 q4 7 0 9 q-4 -2 0 -9z"/></g>`,
  dots: `<g stroke="none"><rect x="66" y="36" width="5" height="3" rx="1.5" fill="#e91e63"/><rect x="80" y="30" width="5" height="3" rx="1.5" fill="#ffc107" transform="rotate(40 82 31)"/><rect x="92" y="40" width="5" height="3" rx="1.5" fill="#2196f3"/><rect x="74" y="48" width="5" height="3" rx="1.5" fill="#4caf50" transform="rotate(-30 76 49)"/><rect x="88" y="52" width="5" height="3" rx="1.5" fill="#9c27b0"/></g>`,
  swirl: `<g fill="none" stroke="#ff7043" stroke-width="3" stroke-linecap="round"><path d="M34 58 Q34 44 80 44 Q126 44 126 58"/><path d="M118 50 l8 8 l4 -10"/></g>`,
  zig: `<g fill="none" stroke="#ff7043" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M132 70 l8 -6 l-4 10 l8 -6"/><path d="M18 70 l-8 -6 l4 10 l-8 -6"/></g>`,
  steam: `<g fill="none" stroke="#90a4ae" stroke-width="3" stroke-linecap="round"><path d="M64 26 q-6 -6 0 -12 q6 -6 0 -12"/><path d="M80 24 q-6 -6 0 -12 q6 -6 0 -12"/><path d="M96 26 q-6 -6 0 -12 q6 -6 0 -12"/></g>`,
  // Steam beside the pan, which fills the top of the stove picture.
  sidesteam: `<g fill="none" stroke="#90a4ae" stroke-width="3" stroke-linecap="round"><path d="M18 50 q-6 -6 0 -12 q6 -6 0 -12"/><path d="M30 40 q-6 -6 0 -12 q6 -6 0 -12"/></g>`,
  heat: `<g fill="none" stroke="#ff7043" stroke-width="3" stroke-linecap="round"><path d="M16 40 q6 -6 0 -12 q-6 -6 0 -12"/><path d="M28 50 q6 -6 0 -12 q-6 -6 0 -12"/><path d="M144 40 q6 -6 0 -12 q-6 -6 0 -12"/></g>`,
  snow: `<g fill="none" stroke="#42a5f5" stroke-width="2.5" stroke-linecap="round"><path d="M144 16 v14 M137 23 h14 M139 18 l10 10 M149 18 l-10 10"/><path d="M140 84 v10 M135 89 h10"/><path d="M20 12 v10 M15 17 h10"/></g>`,
  waves: `<g fill="none" stroke="#ffb300" stroke-width="3" stroke-linecap="round"><path d="M20 30 q-8 12 0 24"/><path d="M12 24 q-10 18 0 36"/><path d="M140 30 q8 12 0 24"/><path d="M148 24 q10 18 0 36"/></g>`,
  cut: `<g fill="none" stroke="#e53935" stroke-width="2.5" stroke-dasharray="4 4" stroke-linecap="round"><path d="M64 44 v56"/><path d="M84 44 v56"/></g>`,
  down: `<g fill="none" stroke="#ff7043" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M126 20 v26 M118 38 l8 8 l8 -8"/></g>`,
  roll: `<g fill="none" stroke="#ff7043" stroke-width="3" stroke-linecap="round"><path d="M56 20 A26 26 0 0 1 108 20"/><path d="M100 12 l8 8 l-10 4"/><path d="M104 48 A26 26 0 0 1 60 48"/><path d="M66 56 l-6 -8 l10 -2"/></g>`,
  flip: `<g fill="none" stroke="#ff7043" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M44 20 Q74 -12 104 16"/><path d="M96 12 l8 4 l0 -10"/></g>`,
  sparkle: `<g fill="#ffd54f" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"><path d="M18 18 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3z"/><path d="M142 14 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 l6 -2.5z"/><path d="M146 80 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2z"/></g>`,
  rain: `<g fill="#4fc3f7" stroke="${INK}" stroke-width="1.5"><path d="M62 4 q4 7 0 9 q-4 -2 0 -9z"/><path d="M80 0 q4 7 0 9 q-4 -2 0 -9z"/><path d="M98 4 q4 7 0 9 q-4 -2 0 -9z"/><path d="M70 16 q4 7 0 9 q-4 -2 0 -9z"/><path d="M90 16 q4 7 0 9 q-4 -2 0 -9z"/></g>`,
  strips: `<g fill="none" stroke="#ffb300" stroke-width="4" stroke-linecap="round"><path d="M112 20 q12 4 16 16"/><path d="M48 20 q-12 4 -16 16"/></g>`
};

/** Spreads n drawings across the top of the picture, leaning toward the middle. */
function fan(items: string[], top: number, left = 8, right = 152) {
  const size = items.length <= 1 ? 50 : items.length === 2 ? 44 : items.length === 3 ? 38 : 30;
  const span = right - left - size;
  return items.map((id, i) => {
    const t = items.length === 1 ? 0.5 : i / (items.length - 1);
    return { id, x: left + span * t, y: top + Math.abs(t - 0.5) * 10, size, rotate: (0.5 - t) * -40 };
  });
}

interface StepPictureProps {
  act: string;
  items?: string[];
  on?: string;
  tool?: string;
  className?: string;
}

/**
 * The drawing for one step: the action's scene (a bowl, the oven, hands…)
 * with the step's ingredients placed in it, plus motion marks.
 */
export const StepPicture: React.FC<StepPictureProps> = ({ act, items = [], on, tool, className }) => {
  const scene = SCENES[act] ?? SCENES.arrange;
  const base = on ?? scene.base;
  const pieces: PlacedArtProps[] = [];
  const shown = act === 'crack' ? items.map(id => (id === 'egg' ? 'egg-cracked' : id)) : items;

  switch (scene.layout) {
    case 'into':
      pieces.push({ id: base!, x: 38, y: 36, size: 84 });
      pieces.push(...fan(shown, 0, shown.length > 3 ? 4 : 18, shown.length > 3 ? 156 : 142));
      break;
    case 'tool':
      pieces.push({ id: base!, x: 26, y: 30, size: 92 });
      shown.slice(0, 3).forEach((id, i, list) => {
        const size = list.length === 1 ? 46 : 36;
        pieces.push({ id, x: 72 - (list.length * size) / 2 + i * size, y: 34, size });
      });
      pieces.push({ id: tool ?? scene.tool!, x: 100, y: 0, size: 62, rotate: 30 });
      break;
    case 'appliance': {
      const size = 96;
      const x = base === 'fridge' ? 72 : 32;
      pieces.push({ id: base!, x, y: 10, size });
      const slot = APPLIANCE_SLOT[base!] ?? { x: 28, y: 30, size: 44 };
      shown.slice(0, 2).forEach((id, i) =>
        pieces.push({ id, x: x + (slot.x + i * 18) * (size / 100), y: 10 + (slot.y + i * 6) * (size / 100), size: slot.size * (size / 100) })
      );
      break;
    }
    case 'stove':
      pieces.push({ id: 'stove', x: 24, y: 16, size: 104 });
      if (base === 'pot') {
        // What goes into the pot is shown tipping in from the side.
        pieces.push({ id: 'pot', x: 46, y: 8, size: 60 });
        shown.slice(0, 2).forEach((id, i) => pieces.push({ id, x: 4 + i * 6, y: 4 + i * 34, size: 34, rotate: 30 }));
      } else {
        pieces.push({ id: 'pan', x: 46, y: 18, size: 64 });
        shown.slice(0, 1).forEach(id => pieces.push({ id, x: 57, y: 30, size: 30 }));
      }
      if (tool ?? scene.tool) pieces.push({ id: tool ?? scene.tool!, x: 106, y: 4, size: 50, rotate: 35 });
      break;
    case 'hands':
      pieces.push({ id: 'hands', x: 36, y: 40, size: 88 });
      shown.slice(0, 2).forEach((id, i, list) =>
        pieces.push({ id, x: list.length === 1 ? 56 : 34 + i * 44, y: 10, size: list.length === 1 ? 48 : 42 })
      );
      break;
    case 'onto': {
      pieces.push({ id: base!, x: 24, y: 26, size: 112 });
      const spots = [
        { x: 50, y: 40 }, { x: 82, y: 40 }, { x: 66, y: 62 }, { x: 40, y: 64 }, { x: 94, y: 64 }
      ];
      shown.slice(0, 5).forEach((id, i) => pieces.push({ id, ...spots[i], size: 30 }));
      break;
    }
    case 'skewer':
      pieces.push({ id: 'skewer', x: 20, y: 0, size: 120 });
      shown.slice(0, 6).forEach((id, i, list) => {
        const t = list.length === 1 ? 0.5 : i / (list.length - 1);
        pieces.push({ id, x: 30 + t * 76, y: 70 - t * 66, size: 26 });
      });
      break;
    case 'wait':
      pieces.push({ id: shown[0] ?? 'plate', x: 26, y: 28, size: 84 });
      pieces.push({ id: 'timer', x: 106, y: 44, size: 48 });
      break;
    case 'eat':
      pieces.push({ id: 'chef', x: 10, y: 22, size: 78 });
      pieces.push({ id: shown[0] ?? 'star', x: 78, y: 38, size: 70 });
      break;
  }

  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <g filter="url(#kids-crayon)">
        {pieces.map((piece, i) => <PlacedArt key={i} {...piece} />)}
        {scene.marks?.map(mark => <g key={mark} dangerouslySetInnerHTML={{ __html: MARKS[mark] }} />)}
      </g>
    </svg>
  );
};
