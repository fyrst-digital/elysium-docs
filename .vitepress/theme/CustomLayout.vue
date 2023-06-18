<script setup>
import { onMounted, watchEffect, watch, computed } from "vue";
import { useData, useRouter, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import HeaderIcon from "./components/HeaderIcon.vue";
import HeroImage from "./components/HeroImage.vue";
import LeadNotFound from "./components/LeadNotFound.vue";

const { Layout } = DefaultTheme;
const { lang, site, page, localeIndex } = useData()
const route = useRoute()
const router = useRouter()
const locales = site.value.locales

const isNotFound = computed(() => {
  return page.value.isNotFound || page.value.frontmatter['404'] ? true : false;
})


/*
watch(lang, async () => {
  console.log('watch lang', lang.value, page.value.isNotFound)
})
*/

onMounted(() => {
  let browserLang = navigator.language.split("-")[0]

  /*
  console.log(router, page.value.isNotFound, browserLang, lang.value, localeIndex.value, locales)



  if (page.value.isNotFound === true) {
    console.log(lang.value, localeIndex.value, route.path, route.data.isNotFound)
    if (locales.hasOwnProperty(browserLang)) {
      
      router.go('/' + browserLang + '/404')
    } else {

      router.go('/404')
    }
  } else {
    if (browserLang !== lang.value && locales.hasOwnProperty(browserLang)) {
      router.go('/' + browserLang + route.path)
    } else if(browserLang === locales.root.lang && browserLang !== lang.value) {
      router.go(route.path.replace('/' + lang.value, ''))
    }
  }
/*
  if ( page.value.frontmatter['404'] !== true ) {
    if (browserLang !== lang.value && locales.hasOwnProperty(browserLang)) {
      router.go('/' + browserLang + route.path)
    } else if(browserLang === locales.root.lang && browserLang !== lang.value) {
      router.go(route.path.replace('/' + lang.value, '/'))
    }
  }
  */
 /*
  let locales = site.value.locales
  let browserLang = navigator.language.split("-")[0]
  
  if (page.value.isNotFound !== true) {

    if (browserLang !== lang.value && locales.hasOwnProperty(browserLang)) {
      router.go('/' + browserLang + route.path)
    } else if(browserLang === locales.root.lang && browserLang !== lang.value) {
      router.go(route.path.replace('/' + lang.value, ''))
    }
  }
  */
});
</script>

<template>
  <Layout>
    <template #nav-bar-title-before><HeaderIcon /></template>
    <template #home-hero-image><HeroImage /></template>
    <template #not-found><LeadNotFound /></template>
  </Layout>
</template>