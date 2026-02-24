import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from '../components/Layout.vue'
import Image from "../components/Image.vue";
import Grid from "../components/Grid.vue";
import Column from "../components/Column.vue";
import VersionSwitcher from 'vitepress-versioning-plugin/src/components/VersionSwitcher.vue'
import './index.css'
import './icons.css'

export default {
	...DefaultTheme,
	Layout: Layout,
	enhanceApp({ app, router, siteData }) {
		app.component('Image', Image).component('Grid', Grid).component('Column', Column).component('VersionSwitcher', VersionSwitcher)
	}
} satisfies Theme