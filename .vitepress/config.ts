import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  rewrites: {
    'de/documentation/index.md': 'de/dokumentation/index.md',
    'de/documentation/setup.md': 'de/dokumentation/einrichtung.md',
    'de/documentation/slide-elements/index.md': 'de/dokumentation/slide-elemente/index.md',
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
            link: "/de/dokumentation/",
          }
        ],
        sidebar: {
          '/de/dokumentation/': [
            {
              text: 'Anleitung',
              collapsed: false,
              items: [
                { text: 'Einrichtung', link: '/de/dokumentation/einrichtung' },
                { 
                  text: 'Slide Elemente', 
                  link: '/de/dokumentation/slide-elemente/', 
                  collapsed: true,
                  items: [
                    {
                      text: 'Inhalt',
                      link: '/de/dokumentation/slide-elements/content' 
                    },
                    {
                      text: 'Anzeige',
                      link: '/de/dokumentation/slide-elements/display' 
                    },
                    {
                      text: 'Erweitert',
                      link: '/de/dokumentation/slide-elements/advanced' 
                    }
                  ]
                },
                { 
                  text: 'Erlebniswelten Slider',
                  link: '/de/dokumentation/cms-slider/',
                  collapsed: true,
                  items: [
                    {
                      text: 'Inhalt',
                      link: '/de/dokumentation/cms-slider/content' 
                    }                    
                  ]
                }
              ]
            },
            {
              text: 'Guides',
              collapsed: false,
              items: [
                { text: 'Slider-Größe', link: '/de/dokumentation/slider-sizing' },
                { text: 'Individuelle Slide-Templates', link: '/de/dokumentation/custom-slide-templates' },
                { text: 'Updates', link: '/de/dokumentation/updates' }
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
