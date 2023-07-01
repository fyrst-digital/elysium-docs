// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import CustomLayout from './CustomLayout.vue'

import HomeContent from "./components/HomeContent.vue";
import Image from "./components/Image.vue";
import Badge from "./components/Badge.vue";
import LeadNotFound from "./components/LeadNotFound.vue";

export default {
  ...Theme,
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image).component('Badge', Badge).component('LeadNotFound',LeadNotFound).component('HomeContent',HomeContent)
  }
}
