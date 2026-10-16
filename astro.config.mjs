import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiContent from './scripts/wiki-content.mjs';
import { unified } from '@astrojs/markdown-remark';

export default defineConfig({
  // Optional canonical origin for generated metadata.
  ...(process.env.WIKI_SITE ? { site: process.env.WIKI_SITE } : {}),
  output: 'static',
  markdown: { processor: unified({ rehypePlugins: [wikiContent] }) },
  integrations: [starlight({
    title: 'The Forgotten Frontier',
    favicon: '/images/icons/site-emblem.png',
    tableOfContents: false,
    components: { Footer: './src/components/WikiFooter.astro' },
    description: 'An explorer’s archive for The Forgotten Frontier.',
    social: [{ icon: 'github', label: 'Wiki source', href: 'https://github.com/jeatheak/forgotten-frontier-wiki' }],
    customCss: ['./src/styles/frontier.css'],
    sidebar: [
      { label: 'Begin', items: ['getting-started', 'gallery', 'about'] },
      { label: 'The World', items: [{ autogenerate: { directory: 'world' } }, { autogenerate: { directory: 'biomes' } }] },
      { label: 'Enemies', items: [{ autogenerate: { directory: 'creatures' } }, { autogenerate: { directory: 'bosses' } }] },
      { label: 'Equipment & Echoes', items: ['equipment', 'equipment/gear', 'equipment/calculator', 'equipment/items', 'runes'] },
      { label: 'Crafting', items: ['crafting', 'crafting/stations', 'crafting/recipes'] },
      { label: 'Survival', items: [{ autogenerate: { directory: 'mechanics' } }, 'progression'] },
      { label: 'Archive', items: [{ autogenerate: { directory: 'lore' } }, { autogenerate: { directory: 'updates' } }] }
    ]
  })]
});
