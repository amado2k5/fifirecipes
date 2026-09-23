import { readFile, readdir } from 'node:fs/promises';

const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://fifi.cooking').replace(/\/$/, '');
const host = new URL(siteUrl).host;

const publicFiles = await readdir('public');
const keyFileName = publicFiles.find(f => /^[a-fA-F0-9-]{8,128}\.txt$/.test(f));
if (!keyFileName) {
  throw new Error('No IndexNow key file found in public/ (expected a file like <key>.txt).');
}
const key = (await readFile(`public/${keyFileName}`, 'utf-8')).trim();
const keyLocation = `${siteUrl}/${keyFileName}`;

const sitemapXml = await readFile('public/sitemap.xml', 'utf-8');
const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].replace(/&amp;/g, '&'));

if (urlList.length === 0) {
  throw new Error('No URLs found in public/sitemap.xml — run the sitemap generator first.');
}

const BATCH_SIZE = 10000;
console.log(`Submitting ${urlList.length} URLs to IndexNow as host "${host}" using key file ${keyFileName}...`);

for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
  const batch = urlList.slice(i, i + BATCH_SIZE);
  const response = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation, urlList: batch })
  });
  console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} URLs): ${response.status} ${response.statusText}`);
  if (!response.ok) {
    const text = await response.text();
    console.error(text);
    process.exitCode = 1;
  }
}
