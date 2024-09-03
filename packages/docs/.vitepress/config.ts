import { defineConfig } from 'vitepress';
import { getPlausibleScripts } from './plausible';

const basePath = process.env.DOCS_BASE_PATH; // undefined for root /

const createAbsoluteUrl = (path: string) => 'https://enclosed.cc/' +  path.replace(/(^\/$)/g, '');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Enclosed',
  description: 'Send private and secure notes',
  base: basePath,
  lang: 'en-US',
  lastUpdated: true,
  srcDir: './src',
  outDir: './dist',

  markdown: {
    theme: {
      dark: 'github-dark',
      light: 'github-light',
    },
  },

  head: [
    ['meta', { name: 'author', content: 'Corentin Thomasset' }],
    ['meta', { name: 'keywords', content: 'Enclosed, notes, secure, private, encrypted, self-hosted' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],

    ['meta', {name: 'theme-color', content: '#ffffff'}],



    ['meta', {name: 'og:title', content: 'Enclosed documentation'}],
    ['meta', {name: 'og:description', content: 'Send private and secure notes'}],
    ['meta', {name: 'og:image', content: createAbsoluteUrl('og-image.png')}],
    ['meta', {name: 'og:url', content: 'https://enclosed.cc'}],
    ['meta', {name: 'og:type', content: 'website'}],
    ['meta', {name: 'og:site_name', content: 'Enclosed'}],
    ['meta', {name: 'og:locale', content: 'en_US'}],

    ['meta', {name: 'twitter:card', content: 'summary'}],
    ['meta', {name: 'twitter:site', content: '@cthmsst'}],
    ['meta', {name: 'twitter:creator', content: '@cthmsst'}],
    ['meta', {name: 'twitter:title', content: 'Enclosed documentation'}],
    ['meta', {name: 'twitter:description', content: 'Send private and secure notes'}],
    ['meta', {name: 'twitter:image', content: createAbsoluteUrl('og-image.png')}],

    ...getPlausibleScripts(),
  ],

  themeConfig: {

    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'Logo',
    },

    siteTitle: 'Enclosed - DOCS',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Enclosed App', link: 'https://enclosed.cc' },
    ],

    sidebar: [
      {
        text: 'Enclosed',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'How it works?', link: '/how-it-works' },
        ],
      },
      {
        text: 'Self hosting',
        items: [
          { text: 'Using Docker', link: '/self-hosting/docker' },
          { text: 'Using Docker Compose', link: '/self-hosting/docker-compose' },
          { text: 'Configuration', link: '/self-hosting/configuration' },
        ],
      },
      {
        text: 'Integrations',
        items: [
          { text: 'CLI', link: '/integrations/cli' },
          { text: 'NPM package', link: '/integrations/npm-package' },
        ]
      },
    ],


    footer: {
      copyright: 'Copyright © 2024-present Corentin Thomasset',
    },

    editLink: {
      pattern: 'https://github.com/CorentinTh/enclosed/edit/main/packages/docs/src/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CorentinTh/enclosed', ariaLabel: 'GitHub' },
      { icon: 'twitter', link: 'https://twitter.com/cthmsst', ariaLabel: 'Twitter' },
    ],

    search: {
      provider: 'local',

      options: {
        detailedView: true,

        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
          },
          /**
           * @type {import('minisearch').SearchOptions}
           */
          searchOptions: {
            fuzzy: 0.3,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 },
          },
        },
      },
    },
  },
});
 