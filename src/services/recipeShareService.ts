import { Recipe, SupportedLanguage } from '../types';

/**
 * Clean URL of the current recipe
 */
export function getRecipeShareUrl(recipeId: string, lang: SupportedLanguage): string {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('recipe', recipeId);
    url.searchParams.set('lang', lang);
    return url.toString();
  }
  return `https://fatma-alkawokgy-recipes.web.app/?recipe=${recipeId}&lang=${lang}`;
}

/**
 * Summarize ingredients for share text
 */
function getIngredientsSummaryText(recipe: Recipe, max: number = 4): string {
  const list = recipe.masterIngredients.slice(0, max).map(i => `• ${i.name}: ${i.standardAmount}`).join('\n');
  return list;
}

/**
 * Share via WhatsApp
 */
export async function shareToWhatsApp(recipe: Recipe, lang: SupportedLanguage): Promise<void> {
  const url = getRecipeShareUrl(recipe.id, lang);
  const text = `🍳 *${recipe.title}* (${recipe.chapter})\n` +
    `كتاب وصفات د. فاطمة القاوقجي (1943-2026)\n\n` +
    `⏱ التحضير: ${recipe.prepTime || '20 دقيقة'} | الطهو: ${recipe.cookTime || '40 دقيقة'}\n` +
    `أبرز المقادير:\n${getIngredientsSummaryText(recipe)}\n\n` +
    `طريقة العمل والمقادير الكاملة:\n${url}`;

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
}

/**
 * Share via SMS
 */
export async function shareToSMS(recipe: Recipe, lang: SupportedLanguage): Promise<void> {
  const url = getRecipeShareUrl(recipe.id, lang);
  const body = `وصفة "${recipe.title}" من كتاب د. فاطمة القاوقجي للطهي التراثي:\n${url}`;
  window.location.href = `sms:?body=${encodeURIComponent(body)}`;
}

/**
 * Share via X (Twitter)
 */
export async function shareToX(recipe: Recipe, lang: SupportedLanguage): Promise<void> {
  const url = getRecipeShareUrl(recipe.id, lang);
  const text = `أسرار تحضير "${recipe.title}" من كتاب وصفات د. فاطمة القاوقجي للطهي المصري التراثي 🍲\n#مطبخ_مصري #فاطمة_القاوقجي`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(xUrl, '_blank');
}

/**
 * Share via Email
 */
export async function shareToEmail(recipe: Recipe, lang: SupportedLanguage): Promise<void> {
  const url = getRecipeShareUrl(recipe.id, lang);
  const subject = `وصفة: ${recipe.title} - كتاب د. فاطمة القاوقجي`;
  const body = `مرحباً،\n\nأشاركك هذه الوصفة الشهية والمضبوطة من كتاب د. فاطمة القاوقجي (1943–2026) للطهي المصري الأصيل:\n\n${recipe.title}\nالقسم: ${recipe.chapter}\nوقت التحضير: ${recipe.prepTime || '-'} | وقت الطهي: ${recipe.cookTime || '-'}\n\nالمقادير:\n${getIngredientsSummaryText(recipe, 8)}\n\nيمكنك مشاهدة الوصفة كاملة مع النصائح والخطوات عبر الرابط التالي:\n${url}\n\nبالهناء والشفاء!`;

  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Copy link to clipboard
 */
export async function copyRecipeLink(recipe: Recipe, lang: SupportedLanguage): Promise<boolean> {
  try {
    const url = getRecipeShareUrl(recipe.id, lang);
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Export single recipe as formatted Markdown file
 */
export async function exportRecipeAsMarkdown(recipe: Recipe, lang: SupportedLanguage): Promise<void> {
  let md = `# ${recipe.title}\n\n`;
  md += `**English Title:** ${recipe.titleEn}\n`;
  md += `**Chapter / الباب:** ${recipe.chapter}\n`;
  md += `**Category / التصنيف:** ${recipe.category}\n`;
  md += `**Cooking Method / طريقة الطهو:** ${recipe.cookingMethod}\n`;
  md += `**Prep Time:** ${recipe.prepTime || 'N/A'} | **Cook Time:** ${recipe.cookTime || 'N/A'} | **Servings:** ${recipe.servings || '4-6'}\n\n`;
  md += `---\n\n`;

  md += `## 🧂 Master Ingredients / المقادير المعيارية المضبوطة\n\n`;
  recipe.masterIngredients.forEach(ing => {
    md += `- **${ing.name}**: ${ing.standardAmount} ${ing.notes ? `*(${ing.notes})*` : ''}\n`;
  });
  md += `\n`;

  md += `## 🍳 Preparation & Cooking Instructions / خطوات الإعداد والطهو\n\n`;
  recipe.uniqueInstructions.forEach(ins => {
    md += `${ins.stepNumber}. ${ins.text}\n`;
  });
  md += `\n`;

  if (recipe.servingSuggestions) {
    md += `## 🍽️ Serving Suggestions / اقتراحات التقديم\n\n${recipe.servingSuggestions}\n\n`;
  }

  if (recipe.culturalNotes) {
    md += `## 📜 Heritage Notes / أصل الوصفة وتراثها\n\n${recipe.culturalNotes}\n\n`;
  }

  md += `---\n*From the Living Heritage Archive of Dr. Fatma Alkawokgy (1943–2026)*\n`;

  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = `Fatma_Alkawokgy_${recipe.id}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(downloadUrl);
}

/**
 * Export single recipe as clean printable PDF
 */
export async function exportRecipeAsPdf(recipe: Recipe, lang: SupportedLanguage): Promise<void> {
  const isAr = lang === 'ar' || lang === 'fa' || lang === 'ur';
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const html = `
    <!DOCTYPE html>
    <html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="utf-8">
        <title>${recipe.title} - Fatma Alkawokgy Recipe Book</title>
        <style>
          @page { size: A4; margin: 20mm; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Cairo", sans-serif;
            color: #292524;
            line-height: 1.6;
            margin: 0;
            padding: 0;
          }
          .header {
            border-bottom: 2px solid #b45309;
            padding-bottom: 12px;
            margin-bottom: 20px;
          }
          .title {
            font-size: 24pt;
            font-weight: bold;
            color: #1c1917;
            margin: 0 0 6px 0;
          }
          .sub {
            color: #78716c;
            font-size: 11pt;
          }
          .meta-box {
            background-color: #f5f5f4;
            border-radius: 8px;
            padding: 12px 16px;
            margin-bottom: 24px;
            display: flex;
            gap: 20px;
            font-size: 10pt;
          }
          .meta-item strong { color: #b45309; }
          h2 {
            font-size: 14pt;
            color: #44403c;
            border-bottom: 1px solid #e7e5e4;
            padding-bottom: 4px;
            margin-top: 24px;
          }
          ul, ol { padding-${isAr ? 'right' : 'left'}: 20px; }
          li { margin-bottom: 8px; font-size: 10.5pt; }
          .footer {
            margin-top: 40px;
            padding-top: 12px;
            border-top: 1px solid #d6d3d1;
            font-size: 9pt;
            color: #a8a29e;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">${recipe.title}</h1>
          <div class="sub">${recipe.titleEn} • ${recipe.chapter}</div>
        </div>

        <div class="meta-box">
          <div class="meta-item"><strong>وقت التحضير:</strong> ${recipe.prepTime || '20 دقيقة'}</div>
          <div class="meta-item"><strong>وقت الطهو:</strong> ${recipe.cookTime || '40 دقيقة'}</div>
          <div class="meta-item"><strong>عدد الحصص:</strong> ${recipe.servings || '4-6 أفراد'}</div>
          <div class="meta-item"><strong>الأسلوب:</strong> ${recipe.cookingMethod}</div>
        </div>

        <h2>المقادير المعيارية المضبوطة</h2>
        <ul>
          ${recipe.masterIngredients.map(ing => `<li><strong>${ing.name}:</strong> ${ing.standardAmount} ${ing.notes ? `<em>(${ing.notes})</em>` : ''}</li>`).join('')}
        </ul>

        <h2>طريقة الإعداد وخطوات الطهو</h2>
        <ol>
          ${recipe.uniqueInstructions.map(ins => `<li>${ins.text}</li>`).join('')}
        </ol>

        ${recipe.culturalNotes ? `<h2>أسرار وتراث الوصفة</h2><p style="font-size:10pt; color:#57534e;">${recipe.culturalNotes}</p>` : ''}

        <div class="footer">
          كتاب وصفات د. فاطمة القاوقجي (1943–2026) • أستاذة الموسيقى بالزمالك ومؤرخة فنون الطهي التراثي
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}
