import { defineConfig, createContentLoader } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import sidebar from "./sidebar"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  buildEnd: async ({ outDir }) => {
    const host = 'https://elysium-slider.blurcreative.de/'
    const sitemap = new SitemapStream({ hostname: host })
    const pages = await createContentLoader('content/**/*.md').load()
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)
    pages.forEach((page) => {
        let pageUrl = page.url.replace(/index$/g, '').replace(/^\/content/, '')
        let pagePriority = page.frontmatter?.sitemap?.priority ?? 1
        let pageChangefreq = page.frontmatter?.sitemap?.changefreq ?? 'weekly'
        sitemap.write({
          url: pageUrl,
          changefreq: pageChangefreq,
          priority: pagePriority
        })
      }
    )
    sitemap.end()

    await new Promise((r) => writeStream.on('finish', r))
    
  },
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
        link: "/documentation/setup",
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
