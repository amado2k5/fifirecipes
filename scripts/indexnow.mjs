#!/usr/bin/env node
/**
 * Tells IndexNow (Bing, Yandex, Naver, Seznam, Yep...) which pages changed.
 *
 *   node scripts/indexnow.mjs --since=2026-10-10   URLs whose sitemap <lastmod> is on or after that day
 *   node scripts/indexnow.mjs --all                every URL in the sitemaps
 *   node scripts/indexnow.mjs --sitemaps           only the sitemap index and the per-language sitemaps
 *   add --dry-run to print what would be sent without sending it
 *
 * Reads the sitemaps that scripts/generate-public-index.ts wrote to public/
 * (run it, or `npm run build`, first). The key is the public/<key>.txt file
 * served at https://fifi.cooking/<key>.txt. Nothing is sent unless this script
 * is run: the deploy workflow runs it after a deploy with --since set to the
 * previous commit's date.
 */
import { readFile, readdir } from 'node:fs/promises';

const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://fifi.cooking').replace(/\/$/, '');
const host = new URL(siteUrl).host;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH_SIZE = 10000; // IndexNow accepts up to 10,000 URLs per request.
// Right after a fresh deploy IndexNow can take a few minutes to re-fetch the key
// file and briefly answers 403 SiteVerificationNotCompleted: retry through that.
const MAX_ATTEMPTS = 8;
const RETRY_DELAY_MS = 20000;

const args = process.argv.slice(2);
const flag = name => args.includes(`--${name}`);
const since = args.find(arg => arg.startsWith('--since='))?.slice('--since='.length);
const dryRun = flag('dry-run');
if (!since && !flag('all') && !flag('sitemaps')) {
  console.error('Usage: node scripts/indexnow.mjs --since=YYYY-MM-DD | --all | --sitemaps [--dry-run]');
  process.exit(2);
}
if (since && !/^\d{4}-\d{2}-\d{2}$/.test(since)) {
  console.error(`--since must be a date like 2026-10-10, got "${since}"`);
  process.exit(2);
}

const keyFileName = (await readdir('public')).find(name => /^[a-fA-F0-9-]{8,128}\.txt$/.test(name));
if (!keyFileName) throw new Error('No IndexNow key file in public/ (expected <key>.txt).');
const key = (await readFile(`public/${keyFileName}`, 'utf-8')).trim();
const keyLocation = `${siteUrl}/${keyFileName}`;

const unescape = value => value.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const indexXml = await readFile('public/sitemap-index.xml', 'utf-8').catch(() => {
  throw new Error('No public/sitemap-index.xml: run `npx tsx scripts/generate-public-index.ts` first.');
});
const sitemapUrls = [...indexXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => unescape(match[1]));

const changed = [];
const changedSitemaps = [];
if (!flag('sitemaps')) {
  for (const sitemapUrl of sitemapUrls) {
    const xml = await readFile(`public/${new URL(sitemapUrl).pathname.slice(1)}`, 'utf-8');
    let count = 0;
    for (const [, body] of xml.matchAll(/<url>(.*?)<\/url>/gs)) {
      const loc = body.match(/<loc>(.*?)<\/loc>/)?.[1];
      const lastmod = body.match(/<lastmod>(.*?)<\/lastmod>/)?.[1] ?? '';
      if (loc && (flag('all') || lastmod.slice(0, 10) >= since)) {
        changed.push(unescape(loc));
        count++;
      }
    }
    if (count) changedSitemaps.push(sitemapUrl);
  }
}

const urlList = flag('sitemaps')
  ? [`${siteUrl}/sitemap-index.xml`, ...sitemapUrls]
  : changed.length
    ? [...changed, `${siteUrl}/sitemap-index.xml`, ...changedSitemaps]
    : [];

if (urlList.length === 0) {
  console.log(`No URL changed since ${since}; nothing to submit.`);
  process.exit(0);
}

console.log(`${dryRun ? '[dry run] Would submit' : 'Submitting'} ${urlList.length} URLs to IndexNow as ${host} (key file ${keyLocation}).`);
if (dryRun) {
  for (const url of urlList.slice(0, 20)) console.log(`  ${url}`);
  if (urlList.length > 20) console.log(`  ... and ${urlList.length - 20} more`);
  process.exit(0);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
  const batch = urlList.slice(i, i + BATCH_SIZE);
  const batchNumber = i / BATCH_SIZE + 1;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key, keyLocation, urlList: batch })
    });
    if (response.ok) {
      console.log(`Batch ${batchNumber} (${batch.length} URLs): ${response.status} ${response.statusText}`);
      break;
    }
    const text = await response.text();
    if (response.status === 403 && text.includes('SiteVerificationNotCompleted') && attempt < MAX_ATTEMPTS) {
      console.log(`Batch ${batchNumber}: key verification pending (attempt ${attempt}/${MAX_ATTEMPTS}), retrying in ${RETRY_DELAY_MS / 1000}s...`);
      await sleep(RETRY_DELAY_MS);
      continue;
    }
    console.error(`Batch ${batchNumber} (${batch.length} URLs): ${response.status} ${response.statusText}\n${text}`);
    process.exitCode = 1;
    break;
  }
}
