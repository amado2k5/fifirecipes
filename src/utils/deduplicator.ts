import { DocumentId, MasterIngredient, UniqueInstruction, OverlapAnalysis } from '../types';

/**
 * Normalizes Arabic text for precise deduplication and comparison
 */
export function normalizeArabicText(text: string): string {
  if (!text) return '';
  return text
    // Remove Arabic diacritics (tashkeel)
    .replace(/[\u064B-\u065F\u0670]/g, '')
    // Normalize Alef variants
    .replace(/[إأآا]/g, 'ا')
    // Normalize Teh Marbuta & Heh
    .replace(/ة/g, 'ه')
    // Normalize Yaa variants
    .replace(/[ىي]/g, 'ي')
    // Normalize Hamza
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    // Remove tatweel (kashida)
    .replace(/\u0640/g, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * Calculate Jaccard similarity between two sentences based on words
 */
export function calculateTextSimilarity(textA: string, textB: string): number {
  const normA = normalizeArabicText(textA);
  const normB = normalizeArabicText(textB);
  
  if (normA === normB) return 1.0;
  if (!normA || !normB) return 0;

  const wordsA = new Set(normA.split(' ').filter(w => w.length > 2));
  const wordsB = new Set(normB.split(' ').filter(w => w.length > 2));

  if (wordsA.size === 0 || wordsB.size === 0) return 0;

  let intersection = 0;
  wordsA.forEach(w => {
    if (wordsB.has(w)) intersection++;
  });

  const union = new Set([...wordsA, ...wordsB]).size;
  return intersection / union;
}

/**
 * Categorize ingredient by keyword
 */
export function guessIngredientCategory(name: string): MasterIngredient['category'] {
  const norm = normalizeArabicText(name);
  if (norm.includes('لحم') || norm.includes('دجاج') || norm.includes('ارانب') || norm.includes('حمام') || norm.includes('فراخ') || norm.includes('كبد') || norm.includes('عصاج') || norm.includes('بط') || norm.includes('ديك')) {
    return 'meat_poultry';
  }
  if (norm.includes('سمك') || norm.includes('جمبري') || norm.includes('روبيان') || norm.includes('سبيط') || norm.includes('حبار') || norm.includes('تونه') || norm.includes('كاليماري') || norm.includes('بوري') || norm.includes('بلطي')) {
    return 'seafood';
  }
  if (norm.includes('بصل') || norm.includes('ثوم') || norm.includes('طماطم') || norm.includes('بطاطس') || norm.includes('كوسه') || norm.includes('جزر') || norm.includes('فلفل') || norm.includes('بقدونس') || norm.includes('شبت') || norm.includes('كرنب') || norm.includes('سبانخ') || norm.includes('قلقاس') || norm.includes('باذنجان') || norm.includes('باميه') || norm.includes('بازلاء') || norm.includes('بسله') || norm.includes('فاصوليا') || norm.includes('قنبيط') || norm.includes('خرشوف') || norm.includes('خس') || norm.includes('خيار') || norm.includes('جرجير')) {
    return 'vegetable';
  }
  if (norm.includes('سمن') || norm.includes('زيت') || norm.includes('زبده') || norm.includes('لبن') || norm.includes('زبادي') || norm.includes('قشده') || norm.includes('كريمه') || norm.includes('جبن') || norm.includes('بيض') || norm.includes('لبنه')) {
    return 'dairy_fat';
  }
  if (norm.includes('ارز') || norm.includes('دقيق') || norm.includes('مكرونه') || norm.includes('شعريه') || norm.includes('لسان عصفور') || norm.includes('جلاش') || norm.includes('رقاق') || norm.includes('عيش') || norm.includes('خبز') || norm.includes('توست') || norm.includes('برغل') || norm.includes('كسكسي') || norm.includes('بقسماط') || norm.includes('لازانيا') || norm.includes('فريك')) {
    return 'grain_starch';
  }
  if (norm.includes('ملح') || norm.includes('بهار') || norm.includes('كمون') || norm.includes('كسبره') || norm.includes('حبهان') || norm.includes('لورا') || norm.includes('قرفه') || norm.includes('قرنفل') || norm.includes('مستكه') || norm.includes('فانيليا') || norm.includes('مستردة') || norm.includes('خل') || norm.includes('زعتر') || norm.includes('نعناع') || norm.includes('سماق') || norm.includes('كاري') || norm.includes('جنزبيل') || norm.includes('زنجبيل') || norm.includes('جوز الطيب') || norm.includes('كركم')) {
    return 'spice_seasoning';
  }
  if (norm.includes('سكر') || norm.includes('عسل') || norm.includes('شربات') || norm.includes('مربي') || norm.includes('شيكولاته') || norm.includes('فواكه') || norm.includes('تفاح') || norm.includes('برتقال') || norm.includes('ليمون') || norm.includes('فراوله') || norm.includes('موز') || norm.includes('زبيب') || norm.includes('مكسرات') || norm.includes('لوز') || norm.includes('بندق') || norm.includes('فستق') || norm.includes('جوز هند') || norm.includes('عجوه') || norm.includes('بلح') || norm.includes('قراصيا') || norm.includes('مشمش')) {
    return 'sweet_fruit';
  }
  if (norm.includes('ماء') || norm.includes('مرق') || norm.includes('شوربه') || norm.includes('عصير')) {
    return 'liquid';
  }
  return 'other';
}

/**
 * Deduplicate raw instructions from up to 3 documents, extracting unique steps
 * and flagging variations or alternative methods.
 */
export function deduplicateInstructions(
  doc1Steps: string[] = [],
  doc2Steps: string[] = [],
  doc3Steps: string[] = []
): { uniqueInstructions: UniqueInstruction[]; duplicateCount: number } {
  const rawList: { text: string; doc: DocumentId }[] = [
    ...doc1Steps.map(text => ({ text: text.trim(), doc: 'doc1' as DocumentId })),
    ...doc2Steps.map(text => ({ text: text.trim(), doc: 'doc2' as DocumentId })),
    ...doc3Steps.map(text => ({ text: text.trim(), doc: 'doc3' as DocumentId }))
  ].filter(item => item.text.length > 0);

  const clustered: {
    canonicalText: string;
    docs: Set<DocumentId>;
    isAlternative: boolean;
    altLabel?: string;
  }[] = [];

  let duplicateCount = 0;

  for (const item of rawList) {
    const isAlt = item.text.includes('طريقة إضافية') || 
                  item.text.includes('طريقة اضافية') || 
                  item.text.includes('طريقة أخرى') || 
                  item.text.includes('أو يمكن') ||
                  item.text.includes('وصفة أخرى');
                  
    let matchedCluster = null;

    for (const cluster of clustered) {
      const sim = calculateTextSimilarity(item.text, cluster.canonicalText);
      // High similarity threshold for merging duplicate instructions
      if (sim > 0.65) {
        matchedCluster = cluster;
        break;
      }
    }

    if (matchedCluster) {
      matchedCluster.docs.add(item.doc);
      // Prefer longer, more descriptive wording if available
      if (item.text.length > matchedCluster.canonicalText.length) {
        matchedCluster.canonicalText = item.text;
      }
      duplicateCount++;
    } else {
      clustered.push({
        canonicalText: item.text,
        docs: new Set([item.doc]),
        isAlternative: isAlt,
        altLabel: isAlt ? 'طريقة بديلة / إضافية' : undefined
      });
    }
  }

  const uniqueInstructions: UniqueInstruction[] = clustered.map((c, idx) => {
    let phase: UniqueInstruction['phase'] = 'cook';
    const norm = normalizeArabicText(c.canonicalText);
    
    if (c.isAlternative) {
      phase = 'alternative';
    } else if (norm.includes('يتبل') || norm.includes('ينقع') || norm.includes('يغسل') || norm.includes('يقطع') || norm.includes('نحضر') || norm.includes('تدعك') || norm.includes('يخلط')) {
      phase = 'prep';
    } else if (norm.includes('يقدم') || norm.includes('يجمل') || norm.includes('يغرف') || norm.includes('يرش') || norm.includes('يترك ليبرد')) {
      phase = 'finish';
    }

    const docArray = Array.from(c.docs);
    return {
      stepNumber: idx + 1,
      text: c.canonicalText,
      phase,
      isAlternative: c.isAlternative,
      alternativeLabel: c.altLabel,
      sourceDocs: docArray,
      isUniqueToDoc: docArray.length === 1 ? docArray[0] : undefined,
      importance: c.isAlternative ? 'variation' : (docArray.length > 1 ? 'core' : 'tip')
    };
  });

  return { uniqueInstructions, duplicateCount };
}

/**
 * Merge raw ingredient lines from 3 documents into unified Master Ingredients
 */
export function mergeIngredients(
  doc1List: string[] = [],
  doc2List: string[] = [],
  doc3List: string[] = []
): { masterIngredients: MasterIngredient[]; mergedCount: number } {
  const rawList: { line: string; doc: DocumentId }[] = [
    ...doc1List.map(line => ({ line: line.trim(), doc: 'doc1' as DocumentId })),
    ...doc2List.map(line => ({ line: line.trim(), doc: 'doc2' as DocumentId })),
    ...doc3List.map(line => ({ line: line.trim(), doc: 'doc3' as DocumentId }))
  ].filter(item => item.line.length > 0);

  interface Group {
    key: string;
    representativeName: string;
    variations: { doc1?: string; doc2?: string; doc3?: string };
    amounts: string[];
    occurrences: number;
  }

  const groups: Group[] = [];
  let mergedCount = 0;

  for (const item of rawList) {
    const cleanLine = item.line.replace(/^[-•*]\s*/, '').trim();
    // Normalize to detect base ingredient
    const norm = normalizeArabicText(cleanLine);

    // Extract core ingredient name by stripping common quantity prefixes
    const coreKey = extractCoreIngredientKey(norm);

    let found = groups.find(g => {
      const gNorm = normalizeArabicText(g.key);
      return gNorm === coreKey || calculateTextSimilarity(gNorm, coreKey) > 0.6;
    });

    if (found) {
      found.variations[item.doc] = cleanLine;
      found.amounts.push(cleanLine);
      found.occurrences++;
      mergedCount++;
    } else {
      groups.push({
        key: coreKey,
        representativeName: cleanLine,
        variations: { [item.doc]: cleanLine },
        amounts: [cleanLine],
        occurrences: 1
      });
    }
  }

  const masterIngredients: MasterIngredient[] = groups.map((g, idx) => {
    const bestCleanName = cleanIngredientDisplayName(g.representativeName);
    return {
      id: `ing-${idx + 1}`,
      name: bestCleanName.name,
      standardAmount: bestCleanName.amount,
      category: guessIngredientCategory(bestCleanName.name),
      sourceVariations: g.variations,
      isMerged: g.occurrences > 1,
      originalOccurrencesCount: g.occurrences
    };
  });

  return { masterIngredients, mergedCount };
}

function extractCoreIngredientKey(norm: string): string {
  return norm
    .replace(/^(\d+(\.\d+|\/\d+)?|\d+\s*:\s*\d+)?\s*(كيلو|ك|كليو|جرام|جم|كوب|باكو|علبة|ملعقة|م|ملعقة كبيرة|كبيرة|صغيرة|ملعقة شاي|حبة|فص|رأس|حزمة|ربطة)\s*/g, '')
    .replace(/^(من|مع)\s+/g, '')
    .trim();
}

function cleanIngredientDisplayName(rawLine: string): { name: string; amount: string } {
  const parts = rawLine.split('–').join('-').split('-');
  const primary = parts[0].trim();
  
  // Try to extract quantity and name
  const match = primary.match(/^([\d\/\.\s\:\+]+(?:\s*(?:كيلو|ك|كليو|جرام|جم|كوب|باكو|علبة|ملعقة كبيرة|ملعقة صغيرة|ملعقة|م ك|م ص|م|فصوص|فص|رأس|حبات|حبة|حزمة))?)\s*(.*)$/);
  
  if (match && match[2] && match[2].trim().length > 0) {
    return {
      amount: match[1].trim(),
      name: match[2].trim()
    };
  }

  return {
    amount: 'حسب الرغبة / الوصفة',
    name: primary
  };
}
