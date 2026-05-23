import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL || 'https://tradingwissen.ch';

export default defineConfig({
  site: SITE_URL,

  build: {
    format: 'directory',
  },

  integrations: [sitemap()],
});