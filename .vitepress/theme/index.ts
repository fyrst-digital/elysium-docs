// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

import Image from "./components/Image.vue";
import HeroImage from "./components/MyComponent.vue";


export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': () => h(HeroImage)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image)
  }
}
