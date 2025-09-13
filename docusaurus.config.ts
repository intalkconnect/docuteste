import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Ninechat Docs',
  tagline: 'APIs e Guias',
  url: 'https://docs.ninechat.com.br',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Se quiser pt-BR como default:
  // i18n: { defaultLocale: 'pt-BR', locales: ['pt-BR'] },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // docs na raiz
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/intalkconnect/docuteste/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'Ninechat',
      logo: { alt: 'Ninechat', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Guias', position: 'left' },
        // Quando quiser re-adicionar API, coloque um item aqui
        { href: 'https://github.com/intalkconnect/docuteste', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        { title: 'Docs', items: [{ label: 'Guias', to: '/' }] },
        { title: 'GitHub', items: [{ label: 'docuteste', href: 'https://github.com/intalkconnect/docuteste' }] },
      ],
      copyright: `© ${new Date().getFullYear()} Ninechat`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
