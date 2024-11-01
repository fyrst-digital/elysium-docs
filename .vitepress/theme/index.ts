import type { Theme } from 'vitepress'
// import DefaultTheme from 'vitepress/theme'
import Layout from '../components/Layout.vue'
import './index.css'
import './icons.css'

export default {
	//extends: DefaultTheme,
	Layout: Layout,
	enhanceApp({ app, router, siteData }) {
	// ...
	}
} satisfies Theme
