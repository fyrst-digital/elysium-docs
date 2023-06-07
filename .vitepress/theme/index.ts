// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

import MyComponent from "./components/MyComponent.vue";



export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      //'home-hero-info': () => h(MyComponent)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('MyComponent', MyComponent /* ... */)
  }
}
