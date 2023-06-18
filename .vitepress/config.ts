import { defineConfig } from 'vitepress'
import urls from "./rewrites"
import sidebar from "./sidebar"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // rewrites: urls,
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: './components/CustomHero.vue'
        },
        {
          find: /^.*\/VPButton\.vue$/,
          replacement: './components/CustomButton.vue'
        }
      ]
    }
  },
  srcDir: "./content",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg', href: '/logo.svg' }
    ],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      title: "Elysium Slider",
      titleTemplate: ":title — Elysium Slider",
      description: "Anleitung, Dokumentation und Guides für Elysium Slider",
      themeConfig: { 
        lastUpdatedText: "Zuletzt aktualisiert",
        outlineTitle: 'Auf dieser Seite',
        returnToTopLabel: "Zurück nach oben",
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },
        nav: [
          {
            text: "Dokumentation",
            link: "/de/documentation/setup",
          }
        ],
        sidebar: sidebar.de
      }
    },
  },
  title: "Elysium Slider",
  description: "Manual, Documentation and Guides for Elysium Slider",
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          de: {
            translations: {
              button: {
                buttonText: "Suchen",
              },
              modal: {
                noResultsText: "Keine Ergebnisse für",
                footer: {
                  navigateText: "navigieren",
                  selectText: "auswählen",
                  closeText: "schließen",
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      {
        text: "Documentation",
        link: "/documentation/",
      }
    ],
  
    sidebar: sidebar.en
    /*
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://fsdfsd.com/vuejs/vitepress' },
    ],
    */
    
  }
})
