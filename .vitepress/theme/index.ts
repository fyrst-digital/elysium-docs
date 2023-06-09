// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

import Image from "./components/Image.vue";
import Badge from "./components/Badge.vue";
import HeroImage from "./components/MyComponent.vue";
import HeaderIcon from "./components/HeaderIcon.vue";


export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': () => h(HeroImage),
      'nav-bar-title-before': () => h(HeaderIcon)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image).component('Badge', Badge)
  }
}
