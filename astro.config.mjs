// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://tarowang.com',
  output: 'static',
  integrations: [mdx(), sitemap()],

  markdown: {
      shikiConfig: {
          theme: 'github-dark',
          wrap: true,
      },
	},

  adapter: cloudflare(),
});