// Post-Build: Entschärft Links auf noch nicht veröffentlichte Artikel.
// Läuft nach `astro build` über dist/ und ersetzt <a href="/blog/X">Text</a>
// durch den blossen Text, wenn dist/blog/X nicht existiert (Artikel geplant,
// pubDate in der Zukunft). Beim täglichen Rebuild werden Links automatisch
// aktiv, sobald der Zielartikel live ist.
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));

function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = path.join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

const exists = new Map();
function targetExists(slug) {
  if (!exists.has(slug)) exists.set(slug, existsSync(path.join(DIST, 'blog', slug)));
  return exists.get(slug);
}

let fixedLinks = 0;
let touchedFiles = 0;

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8');
  const fixed = html.replace(
    /<a\b[^>]*href="\/blog\/([^"/#?]+)\/?(?:#[^"]*)?"[^>]*>([\s\S]*?)<\/a>/g,
    (full, slug, inner) => {
      if (targetExists(slug)) return full;
      fixedLinks++;
      return inner;
    }
  );
  if (fixed !== html) {
    writeFileSync(file, fixed);
    touchedFiles++;
  }
}

console.log(`Unveröffentlichte Links entschärft: ${fixedLinks} in ${touchedFiles} Dateien`);
