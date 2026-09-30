/**
 * Fills src/data/fatmaAbuHaty/titlesEn.json from a completed English draft file.
 *
 *   npx tsx scripts/translations/fill-titles.ts <slug|all>
 *
 * Reads the completed scripts/translations/drafts/en/{slug}.json files (post
 * apply-fills) and writes {id: title} into titlesEn.json.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { readdirSync, existsSync } from 'node:fs';

async function main() {
  const slugArg = process.argv[2];
  if (!slugArg) { console.error('usage: fill-titles.ts <slug|all>'); process.exit(1); }
  const dir = 'scripts/translations/drafts/en';
  const slugs = slugArg === 'all'
    ? readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''))
    : [slugArg];
  const titlesPath = 'src/data/fatmaAbuHaty/titlesEn.json';
  const titles = existsSync(titlesPath)
    ? JSON.parse(await readFile(titlesPath, 'utf-8'))
    : {};
  let added = 0;
  for (const slug of slugs) {
    const draft = JSON.parse(await readFile(`${dir}/${slug}.json`, 'utf-8'));
    for (const [id, entry] of Object.entries(draft)) {
      const t = (entry as { title?: string }).title?.trim();
      if (!t) { console.error(`${id}: empty title in ${slug} draft — run apply-fills first`); process.exit(1); }
      titles[id] = t; added++;
    }
  }
  await writeFile(titlesPath, JSON.stringify(titles, null, 2) + '\n');
  console.log(`titlesEn.json: wrote ${added} titles (total ${Object.keys(titles).length})`);
}

main().catch((e) => { console.error(e); process.exit(1); });
