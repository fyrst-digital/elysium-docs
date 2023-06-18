<script setup>
import { useData, useRouter, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import HeaderIcon from "./components/HeaderIcon.vue";
import HeroImage from "./components/HeroImage.vue";

const { Layout } = DefaultTheme;
const { lang, site } = useData()
const route = useRoute()
let locales = site.value.locales

let browserLang = navigator.language.split("-")[0]

/* automatic language switch
  if (browserLang !== lang.value && locales.hasOwnProperty(browserLang)) {
      useRouter().go('/' + browserLang + route.path)
  } else if(browserLang === locales.root.lang && browserLang !== lang.value) {
      useRouter().go(route.path.replace('/' + lang.value, ''))
  }
*/
</script>

<template>
  <Layout>
    <template #nav-bar-title-before><HeaderIcon /></template>
    <template #home-hero-image><HeroImage /></template>
  </Layout>
</template>