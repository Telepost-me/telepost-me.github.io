// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import globalVariables from './src/custom/globalVariables.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Telepost FAQ',
  tagline: 'Прежде, чем задавать вопрос — поищи ответ здесь!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${globalVariables.github.projectRepository}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: globalVariables.github.organizationName, // Usually your GitHub org/user name.
  projectName: globalVariables.github.projectRepository, // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // https://docusaurus.io/docs/i18n/tutorial#configure-your-site
  i18n: {
    defaultLocale: 'ru',
    locales: [
      'ru',
      'en',
    ],
    localeConfigs: {
      ru: {
        htmlLang: 'ru-RU',
      },
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl: `${globalVariables.github.projectUrl}/edit/master/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Telepost FAQ',
        logo: {
          alt: 'Telepost Logo',
          src: 'img/telepost_icon-194x194.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'start',
            label: '🚀 Старт',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'faq',
            label: '⁉️ FAQ',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorials',
            label: '📚 Туториалы',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'errors',
            label: '🚑 Ошибки и проблемы',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: globalVariables.github.projectUrl,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Telepost',
            items: [
              {
                label: globalVariables.telepost.site.name,
                href: globalVariables.telepost.site.url,
              },
              {
                label: globalVariables.telepost.webApp.name,
                href: globalVariables.telepost.webApp.url,
              },
              {
                label: globalVariables.telepost.bot.name,
                href: globalVariables.telepost.bot.url,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: globalVariables.telepost.supportChat.name,
                href: globalVariables.telepost.supportChat.url,
              },
              {
                label: 'GitHub issues',
                href: globalVariables.github.issues.urlQuery,
              },
              {
                label: 'Instatus Dashboard',
                href: globalVariables.instatus.url,
              },
            ],
          },
          {
            title: 'GitHub issues',
            items: [
              {
                label: globalVariables.github.issues.bugs.title,
                to: globalVariables.github.issues.bugs.url,
              },
              {
                label: globalVariables.github.issues.ideas.title,
                to: globalVariables.github.issues.ideas.url,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Telepost. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  markdown: {
    format: 'detect',
    preprocessor: ({ fileContent }) => {
      let content = fileContent;
      content = content.replaceAll(
        /{{\s*([\w.]+)\s*}}/g,
        (_, variablePath) => {
          const value = variablePath
            .split('.')
            .reduce((v, key) => v && v[key], globalVariables);

          if (Array.isArray(value)) {
            // If the value is an array, return it as a JSON string or handle it as needed
            return JSON.stringify(value); // Converts the array to a JSON string
          }
          else {
            return value !== undefined
            ? value
            : `{{ ${variablePath} }}`; // keep placeholder if not found in globalVariables
          }
        }
      );
      return content;
    },
    parseFrontMatter: async (params) => {
      // Reuse the default parser
      const result = await params.defaultParseFrontMatter(params)
      // Disable pagiation
      result.frontMatter.pagination_prev = null
      result.frontMatter.pagination_next = null
      return result
    },
  },
};

config.plugins = [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    // https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#theme-options
    {
      hashed: true,
      docsRouteBasePath: "/",
      language: ["ru", "en"],
      removeDefaultStopWordFilter: true,
      removeDefaultStemmer: false,
      highlightSearchTermsOnTargetPage: true,
      searchResultLimits: 15,
      indexBlog: false,
    },
  ],
];

export default config;
