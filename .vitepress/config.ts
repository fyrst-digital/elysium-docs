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
        nav: [
          {
            text: "Guides",
            link: "/de/guides/",
          }
        ],
        sidebar: {
          '/de/guides/': [
            {
              text: 'Guides',
              items: [
                { text: 'Slider-Größe', link: '/de/guides/slider-sizing' },
                { text: 'Updates', link: '/de/guides/updates' }
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
    logo: "/logo.svg",
    search: {
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      {
        text: "Guides",
        link: "/guides/",
      }
    ],
    

    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Updates', link: '/guides/updates' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
