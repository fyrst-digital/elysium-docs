import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import sidebar from './config.sidebar'
import nav from './config.nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    // https://vitejs.dev/config/
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
        }
      ]
    },
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
        sidebar: sidebar.de
      }
    }
  },
  cleanUrls: true,
  lastUpdated: true,
  title: "Elysium",
  description: "Section, Slider and Banner for Shopware",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav.en,
    sidebar: sidebar.en,
    socialLinks: [
      { icon: 'x', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
