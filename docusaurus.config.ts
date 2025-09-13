// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme  = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Ninechat Docs',
  tagline: 'API & Guias',
  url: 'https://docs.ninechat.com.br',
  baseUrl: '/',                 // importante p/ domínio próprio
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ninechat', // qualquer valor
  projectName: 'docs',          // qualquer valor

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'docs',        // /docs
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      'redocusaurus',
      {
        // página da API em /api
        specs: [
          {
            id: 'ninechat-api',
            spec: 'openapi.json',       // servido a partir de /static
            route: '/api'
          }
        ],
        theme: {
          // customização do Redoc (sem branding)
          // (cores, fontes, etc)
          primaryColor: '#2563eb',
        },
        redocOptions: {
          hideDownloadButton: false,
          expandResponses: '200,201,4xx,5xx',
          pathInMiddlePanel: true,
          theme: {
            colors: { primary: { main: '#2563eb' } },
            typography: { fontFamily: 'Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif' },
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
      logo: { alt: 'Ninechat', src: 'img/logo.png' }, // coloque um logo em static/img/logo.png
      items: [
        { to: '/api', label: 'API Reference', position: 'left' },
        { to: '/docs', label: 'Guias', position: 'left' },
        { href: 'https://ninechat.com.br', label: 'Site', position: 'right' }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'API', to: '/api' }, { label: 'Guias', to: '/docs' }] },
      ],
      copyright: `© ${new Date().getFullYear()} Ninechat`,
    },
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
  },
};
