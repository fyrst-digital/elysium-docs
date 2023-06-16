// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import CustomLayout from './CustomLayout.vue'

import Image from "./components/Image.vue";
import Badge from "./components/Badge.vue";

export default {
  ...Theme,
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image).component('Badge', Badge)
  }
}
