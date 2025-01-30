import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import sidebar from './config.sidebar'
import nav from './config.nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    // https://vitejs.dev/config/
    esbuild: {
      target: 'es2022'
    },
    resolve: {
      alias: [
        {
          find: 'styled-system',
          replacement: fileURLToPath(new URL('./../styled-system', import.meta.url))
        },
        {
          find: /^.*\/VPNavBarTranslations\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/NavBarTranslations.vue', import.meta.url)
          )          
        },
        {
          find: /^.*\/VPDoc\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/Doc.vue', import.meta.url)
          )          
        },
        {
          find: /^.*\/VPButton\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/Button.vue', import.meta.url)
          )          
        },
      ]
    },
  },
  srcDir: './content',
  head: [
    ['link', { rel: 'icon', href: '/icon-elysium.svg' }]
  ],
  sitemap: {
    hostname: 'https://elysium.blurcreative.de'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      themeConfig: {
        nav: nav.de,
        sidebar: sidebar.de,
        outline: {
          label: 'Inhaltsverzeichnis',
        },
        langMenuLabel: 'Sprache',
        lastUpdated: {
          text: 'Zuletzt aktualisiert',
        },
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite',
        },
        returnToTopLabel: 'Zurück nach oben',
        skipToContentLabel: 'Zum Inhalt springen',
        darkModeSwitchLabel: 'Farbschema',
        lightModeSwitchTitle: 'Helle Ansicht',
        darkModeSwitchTitle: 'Dunkle Ansicht',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Suche',
              },
              modal: {
                displayDetails: 'Details anzeigen',
                resetButtonTitle: 'Zurücksetzen',
                footer: {
                  selectText: 'Auswählen',
                  navigateText: 'Navigieren',
                  closeText: 'Schließen',
                },
              }
            }
          }
        }
      }
    }
  },
  markdown: {
    html: true,
    component: {}
  },
  cleanUrls: true,
  lastUpdated: true,
  title: "Elysium",
  description: "Section, Slider and Banner for Shopware",
  themeConfig: {
    logo: '/icon-elysium.svg',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: nav.en,
    sidebar: sidebar.en,
  }
})
