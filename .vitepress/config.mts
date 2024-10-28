import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import sidebar from './config.sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    // https://vitejs.dev/config/
    resolve: {
      alias: {
        'styled-system': fileURLToPath(new URL('./../styled-system', import.meta.url))
      }
    },
    server: {
    }
  },
  cleanUrls: true,
  lastUpdated: true,
  title: "Elysium",
  description: "Section, Slider and Banner for Shopware",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Manual', link: '/manual/overview' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: sidebar.en,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
