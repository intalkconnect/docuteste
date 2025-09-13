// docusaurus.config.ts
// @ts-check
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Tenta carregar temas do Prism; se não houver, não quebra o build
let prismThemes: any | undefined;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  prismThemes = require('prism-react-renderer').themes;
} catch {
  prismThemes = undefined;
}

const config: Config = {
  title: 'Ninechat Docs',
  tagline: 'API & Guias',
  url: 'https://docs.ninechat.com.br',
  baseUrl: '/', // domínio próprio -> sempre "/"
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ninechat',
  projectName: 'docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  // Página de referência da API em /api
  plugins: [
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'ninechat-api',
            spec: 'openapi.json', // vem de /static/openapi.json
            route: '/api'
          }
        ],
        redocOptions: {
          hideDownloadButton: false,
          pathInMiddlePanel: true,
          expandResponses: '200,201,4xx,5xx',
          theme: {
            colors: { primary: { main: '#2563eb' } },
            typography: {
              fontFamily: 'Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif'
            },
            menu: { width: '280px' }
          }
        }
      }
    ]
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'Ninechat',
      logo: { alt: 'Ninechat', src: 'img/logo.png' }, // opcional
      items: [
        { to: '/api', label: 'API Reference', position: 'left' },
        { to: '/docs', label: 'Guias', position: 'left' }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'API', to: '/api' }, { label: 'Guias', to: '/docs' }] }
      ],
      copyright: `© ${new Date().getFullYear()} Ninechat`,
    },
    // Só aplica Prism se o pacote existir
    prism: prismThemes
      ? { theme: prismThemes.github, darkTheme: prismThemes.dracula }
      : undefined,
  },
};

export default config;
