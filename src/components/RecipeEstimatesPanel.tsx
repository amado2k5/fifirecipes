import React from 'react';
import { Activity, Coins, HeartPulse, Info } from 'lucide-react';
import { SupportedLanguage } from '../types';
import {
  COST_GROUP_ORDER,
  RecipeEstimate,
  formatServings,
  formatUsd,
  getCostTotal,
  getEnergySplit,
  getHealthTags,
  toRange
} from '../data/recipeEstimates';
import { getEstimateStrings } from '../data/estimateTranslations';

interface RecipeEstimatesPanelProps {
  estimate: RecipeEstimate;
  lang: SupportedLanguage;
}

export const RecipeEstimatesPanel: React.FC<RecipeEstimatesPanelProps> = ({ estimate, lang }) => {
  const s = getEstimateStrings(lang);
  const split = getEnergySplit(estimate);
  const tags = getHealthTags(estimate);
  const total = getCostTotal(estimate);
  const perServingCost = total / estimate.servings;

  // Numbers are isolated as LTR so ranges stay in order next to RTL units.
  const range = ([lo, hi]: [number, number], unit: string) => (
    <>
      <bdi dir="ltr">{lo === hi ? lo : `${lo} – ${hi}`}</bdi> {unit}
    </>
  );
  const kcalRange = toRange(estimate.kcal, 0.1, 10);
  const nutrientRows: { label: string; value: React.ReactNode; highlight?: boolean }[] = [
    { label: s.calories, value: range(kcalRange, s.kcal), highlight: true },
    { label: s.protein, value: range(toRange(estimate.protein, 0.15, 1), s.grams) },
    { label: s.fat, value: range(toRange(estimate.fat, 0.15, 1), s.grams) },
    { label: s.carbs, value: range(toRange(estimate.carbs, 0.15, 1), s.grams) },
    { label: s.fiber, value: range(toRange(estimate.fiber, 0.2, 1), s.grams) },
    { label: s.sugar, value: range(toRange(estimate.sugar, 0.2, 1), s.grams) }
  ];

  const splitSegments = [
    { key: 'protein', label: s.protein, pct: split.protein, color: 'bg-rose-500' },
    { key: 'fat', label: s.fat, pct: split.fat, color: 'bg-amber-500' },
    { key: 'carbs', label: s.carbs, pct: split.carbs, color: 'bg-emerald-500' }
  ];

  const costRows = COST_GROUP_ORDER.filter(g => (estimate.cost[g] || 0) > 0);
  const estimatedTag = <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">{s.estimated}</span>;

  return (
    <div className="space-y-5">
      {/* Nutrition */}
      <section className="rounded-2xl border border-stone-200/80 bg-white overflow-hidden">
        <header className="px-4 py-3 bg-rose-50/70 border-b border-rose-100 flex items-center justify-between gap-2">
          <h3 className="font-bold text-sm sm:text-base text-rose-950 flex items-center gap-2">
            <Activity className="w-4 h-4 text-rose-600" />
            {s.nutritionTitle}
          </h3>
          {estimatedTag}
        </header>
        <p className="px-4 pt-3 text-xs text-stone-600">
          {s.perServingBasis.split('{n}').map((part, i) => (
            <React.Fragment key={i}>
              {i > 0 && <bdi dir="ltr">{formatServings(estimate.servings)}</bdi>}
              {part}
            </React.Fragment>
          ))}
        </p>
        <table className="w-full text-sm mt-2">
          <thead>
            <tr className="text-xs text-stone-500">
              <th className="text-start font-semibold px-4 py-1.5">{s.nutrient}</th>
              <th className="text-end font-semibold px-4 py-1.5">{s.perServing}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {nutrientRows.map(row => (
              <tr key={row.label}>
                <td className={`px-4 py-2 ${row.highlight ? 'font-bold text-stone-900' : 'text-stone-700'}`}>{row.label}</td>
                <td className={`px-4 py-2 text-end tabular-nums whitespace-nowrap ${row.highlight ? 'font-bold text-rose-800' : 'text-stone-800'}`}>
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-4 py-3 border-t border-stone-100">
          <p className="text-xs font-semibold text-stone-600 mb-2">{s.energySplit}</p>
          <div className="flex h-2.5 w-full rounded-full overflow-hidden bg-stone-100" aria-hidden="true">
            {splitSegments.map(seg => (
              <div key={seg.key} className={seg.color} style={{ width: `${seg.pct}%` }} />
            ))}
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-stone-700">
            {splitSegments.map(seg => (
              <li key={seg.key} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-sm ${seg.color}`} />
                <span>{seg.label}</span>
                <bdi className="font-semibold tabular-nums" dir="ltr">{seg.pct}%</bdi>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Health notes */}
      {tags.length > 0 && (
        <section className="rounded-2xl border border-stone-200/80 bg-white p-4">
          <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-center gap-2 mb-3">
            <HeartPulse className="w-4 h-4 text-emerald-600" />
            {s.healthTitle}
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {tags.map(tag => (
              <li key={tag} className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-3 py-2">
                <p className="text-xs sm:text-sm font-bold text-emerald-900">{s.tags[tag].label}</p>
                <p className="text-xs text-emerald-800/90 mt-0.5">{s.tags[tag].hint}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Cost */}
      <section className="rounded-2xl border border-stone-200/80 bg-white overflow-hidden">
        <header className="px-4 py-3 bg-amber-50/70 border-b border-amber-100 flex items-center justify-between gap-2">
          <h3 className="font-bold text-sm sm:text-base text-amber-950 flex items-center gap-2">
            <Coins className="w-4 h-4 text-amber-600" />
            {s.costTitle}
          </h3>
          {estimatedTag}
        </header>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-stone-500">
              <th className="text-start font-semibold px-4 py-1.5">{s.ingredientGroup}</th>
              <th className="text-end font-semibold px-4 py-1.5">{s.costUsd}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {costRows.map(g => (
              <tr key={g}>
                <td className="px-4 py-2 text-stone-700">{s.groups[g]}</td>
                <td className="px-4 py-2 text-end tabular-nums text-stone-800"><bdi dir="ltr">{formatUsd(estimate.cost[g] || 0)}</bdi></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-amber-50/60 border-t border-amber-200">
              <td className="px-4 py-2.5 font-bold text-amber-950">{s.total}</td>
              <td className="px-4 py-2.5 text-end font-bold tabular-nums text-amber-900"><bdi dir="ltr">{formatUsd(total)}</bdi></td>
            </tr>
            <tr className="bg-amber-50/60">
              <td className="px-4 pb-2.5 text-xs font-semibold text-amber-900">{s.costPerServing}</td>
              <td className="px-4 pb-2.5 text-end text-xs font-semibold tabular-nums text-amber-900"><bdi dir="ltr">≈ {formatUsd(perServingCost)}</bdi></td>
            </tr>
          </tfoot>
        </table>
      </section>

      <div className="flex items-start gap-2 text-[11px] sm:text-xs text-stone-500 leading-relaxed">
        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
        <p>{s.nutritionNote} {s.costNote}</p>
      </div>
    </div>
  );
};
