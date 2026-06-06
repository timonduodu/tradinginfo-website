// Einmaliges Optimierungs-Script: verkleinert alle JPGs in public/images/photos
// auf max. 1600px Breite und komprimiert sie mit mozjpeg (q78).
// Aufruf: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, stat, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = fileURLToPath(new URL('../public/images/photos/', import.meta.url));
const MAX_WIDTH = 1600;

const files = (await readdir(DIR)).filter(f => /\.jpe?g$/i.test(f));
let before = 0, after = 0;

for (const file of files) {
  const filePath = path.join(DIR, file);
  const origSize = (await stat(filePath)).size;
  before += origSize;

  const tmpPath = filePath + '.tmp';
  await sharp(filePath)
    .rotate() // EXIF-Orientierung übernehmen
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(tmpPath);

  await rename(tmpPath, filePath);
  const newSize = (await stat(filePath)).size;
  after += newSize;
  console.log(`${file}: ${(origSize / 1e6).toFixed(2)} MB → ${(newSize / 1e6).toFixed(2)} MB`);
}

console.log(`\nGesamt: ${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(1)} MB (−${Math.round((1 - after / before) * 100)}%)`);
