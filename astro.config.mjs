// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'
// https://astro.build/config
export default defineConfig({
	site: 'https://astrot2del.netlify.app/',
	integrations: [
        mdx(), 
        sitemap(),
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
    ],
});