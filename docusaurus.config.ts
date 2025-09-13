import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Ninechat Docs',
  tagline: 'APIs e Guias',
  url: 'https://docs.ninechat.com.br',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Opcional: se quiser pt-BR como default e único
  // i18n: { defaultLocale: 'pt-BR', locales: ['pt-BR'] },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Coloca docs na raiz ("/"), se preferir "/docs", troque para routeBasePath: 'docs'
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/intalkconnect/docuteste/edit/main/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      } satisfies Preset.Options,
    ],
  ],

  // 🔴 Importante: use o Redocusaurus aqui (plugins), não em "presets"
  plugins: [
    [
      'redocusaurus',
      {
        // Você pode apontar specs locais (em /static) ou remotas
        specs: [
          {
            id: 'ninebasic-remote',
            route: '/api/ninebasic', // página ficará em /api/ninebasic
            // Use o RAW do GitHub (não a URL /blob/…)
            spec:
              'https://raw.githubusercontent.com/intalkconnect/ninebasic/86afae825ec5704689889df28b2ac6496f174329/openapi.json',
            layout: {
              title: 'Ninechat API',
              description: 'Referência completa da API Ninechat',
            },
            redocOptions: {
              hideDownloadButton: true,
              expandResponses: '200,201',
              pathInMiddlePanel: true,
              hideHostname: true,
              theme: {
                colors: { primary: { main: '#0ea5e9' } },
                typography: {
                  fontSize: '14px',
                  lineHeight: '1.55',
                  fontFamily:
                    "-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,Arial,sans-serif",
                  headings: { fontFamily: 'inherit', fontWeight: '800' },
                },
                sidebar: { backgroundColor: '#ffffff' },
              },
            },
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'Ninechat',
      logo: { alt: 'Ninechat', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Guias', position: 'left' },
        { to: '/api/ninebasic', label: 'API Reference', position: 'left' },
        { href: 'https://github.com/intalkconnect/docuteste', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        { title: 'Docs', items: [{ label: 'API', to: '/api/ninebasic' }] },
        { title: 'GitHub', items: [{ label: 'docuteste', href: 'https://github.com/intalkconnect/docuteste' }] },
      ],
      copyright: `© ${new Date().getFullYear()} Ninechat`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;
