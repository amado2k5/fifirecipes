/**
 * Writes a small card-sized copy of every recipe photo to
 * public/recipe-images/thumbs/<recipe id>.jpg. Recipe cards show only a
 * 12rem-tall banner, so loading the full photos there wastes bandwidth on
 * slow mobile connections. Run `npm run thumbnails` after adding photos.
 */
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = path.resolve('public/recipe-images');
const THUMB_DIR = path.join(SOURCE_DIR, 'thumbs');
// Cards are at most ~400px wide, so this stays sharp on 2x screens.
const THUMB_WIDTH = 800;

async function main() {
  await mkdir(THUMB_DIR, { recursive: true });
  const files = (await readdir(SOURCE_DIR)).filter(file => file.endsWith('.jpg'));
  let written = 0;
  for (const file of files) {
    const source = path.join(SOURCE_DIR, file);
    const target = path.join(THUMB_DIR, file);
    const targetStat = await stat(target).catch(() => undefined);
    if (targetStat && targetStat.mtimeMs >= (await stat(source)).mtimeMs) continue;
    await sharp(source)
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 70, progressive: true, mozjpeg: true })
      .toFile(target);
    written++;
  }
  console.log(`Wrote ${written} thumbnail(s); ${files.length - written} already up to date.`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
