// @ts-check
const lightCodeTheme = /** @type {import('prism-react-renderer').PrismTheme} */ ({
  plain: { color: "#0f172a", backgroundColor: "#ffffff" },
  styles: []
});

module.exports = {
  title: "Ninebasic API",
  tagline: "Referência & guias",
  url: "http://localhost",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "ninebasic",
  projectName: "api-docs",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,         // pode ligar depois se quiser docs em MD
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],

  // 🔴 Redocusaurus (viewer da OpenAPI com Redoc)
  plugins: [
    [
      "redocusaurus",
      {
        specs: [
          {
            id: "api",
            spec: "static/openapi.json", // servida localmente (sem CORS)
            route: "/api"
          }
        ],
        // tema/ opções do ReDoc
        theme: {
          primaryColor: "#2563eb",
          options: {
            hideHostname: true,
            expandResponses: "200,201",
            pathInMiddlePanel: true,
            requiredPropsFirst: true,
            jsonSampleExpandLevel: 2,
            hideDownloadButton: false
          }
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      title: "Ninebasic",
      logo: { alt: "Ninebasic", src: "logo.png" },
      items: [
        { to: "/api", label: "API Reference", position: "left" },
      ]
    },
    footer: {
      style: "light",
      links: [
        { title: "API", items: [{ label: "Referência", to: "/api" }] },
        { title: "Repositórios", items: [{ label: "Frontend", href: "#" }] }
      ],
      copyright: `© ${new Date().getFullYear()} Ninebasic`
    },
    prism: { theme: lightCodeTheme }
  }
};
