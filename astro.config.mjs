import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL || 'https://www.tradingwissen.ch';

// Slugs aller bereits veröffentlichten Artikel (pubDate <= heute).
// Wird beim Build einmal eingelesen — der tägliche Vercel-Cron-Rebuild
// aktualisiert die Liste automatisch.
function publishedSlugs() {
  const dir = path.resolve('./src/content/blog');
  const now = new Date();
  const slugs = new Set();
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    const m = src.match(/^pubDate:\s*["']?(\d{4}-\d{2}-\d{2})/m);
    if (m && new Date(m[1]) <= now) slugs.add(file.replace(/\.md$/, ''));
  }
  return slugs;
}

// Remark-Plugin: Interne Links auf noch NICHT veröffentlichte Artikel werden
// zu normalem Text entschärft (kein 404). Sobald der Zielartikel live geht,
// wird der Link beim nächsten Rebuild automatisch aktiv.
function remarkSkipUnpublishedLinks() {
  const published = publishedSlugs();
  function walk(node) {
    if (!node || !Array.isArray(node.children)) return;
    node.children = node.children.flatMap(child => {
      if (child.type === 'link' && typeof child.url === 'string') {
        const m = child.url.match(/^\/blog\/([^/#?]+)\/?$/);
        if (m && !published.has(m[1])) {
          // Link auflösen: nur den Linktext (Kind-Knoten) behalten
          return child.children || [];
        }
      }
      walk(child);
      return [child];
    });
  }
  return tree => walk(tree);
}

export default defineConfig({
  site: SITE_URL,

  build: {
    format: 'directory',
  },

  markdown: {
    remarkPlugins: [remarkSkipUnpublishedLinks],
  },

  integrations: [sitemap()],
});
