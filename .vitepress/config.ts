import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
      // would render:
      //
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
      description: "Anleitung, Dokumentation und Guides für Elysium Slider",
      themeConfig: { 
        lastUpdatedText: "Zuletzt aktualisiert",
        outlineTitle: 'Auf dieser Seite',
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },
        nav: [
          {
            text: "Dokumentation",
            link: "/de/documentation/",
          }
        ],
        sidebar: {
          '/de/documentation/': [
            {
              text: 'Anleitung',
              collapsed: false,
              items: [
                { text: 'Einrichtung', link: '/de/documentation/setup' },
                { 
                  text: 'Slide Elemente', 
                  link: '/de/documentation/slide-elements/', 
                  items: [
                    {
                      text: 'Inhalt',
                      link: '/de/documentation/slide-elements/content' 
                    }
                  ]
                },
                { text: 'Erlebniswelten Slider', link: '/de/documentation/setup' }
              ]
            },
            {
              text: 'Guides',
              collapsed: false,
              items: [
                { text: 'Slider-Größe', link: '/de/documentation/slider-sizing' },
                { text: 'Individuelle Slide-Templates', link: '/de/documentation/custom-slide-templates' },
                { text: 'Updates', link: '/de/documentation/updates' }
              ]
            }
          ],
        },
      }
    },
  },
  title: "Elysium Slider",
  description: "Manual, Documentation and Guides for Elysium Slider",
  themeConfig: {
    search: {
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      {
        text: "Documentation",
        link: "/documentation/",
      }
    ],
  
    sidebar: {
      '/documentation/': [
        {
          text: 'Guides',
          collapsed: false,
          items: [
            { text: 'Slider Sizing', link: '/documentation/slider-sizing' },
            { text: 'Updates', link: '/documentation/updates' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://fsdfsd.com/vuejs/vitepress' },
    ],

    
  }
})
