import { defineConfig } from 'astro/config';

const SITE_URL = process.env.SITE_URL || 'https://tradinginfo.ch';

export default defineConfig({
  site: SITE_URL,
  build: {
    format: 'directory',
  },
});
