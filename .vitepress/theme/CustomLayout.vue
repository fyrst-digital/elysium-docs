<script setup>
import { onMounted, watchEffect, watch, computed, reactive } from "vue";
import { useData, useRouter, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import HeaderIcon from "./components/HeaderIcon.vue";
import HeroImage from "./components/HeroImage.vue";
import LeadNotFound from "./components/LeadNotFound.vue";

const { Layout } = DefaultTheme;
const { lang, site, page, localeIndex, frontmatter } = useData()
const route = useRoute()
const router = useRouter()
const locales = site.value.locales

console.log(frontmatter.value)

/*
watchEffect(async () => {

  if (page.value.isNotFound === true) {
    let locales = site.value.locales
    let browserLang = navigator.language.split("-")[0]

    if (lang.value !== "en" && locales.hasOwnProperty(browserLang)) {
      router.go('/' + browserLang + '/404')
      console.log('-----------------')
    } else {
      router.go('/404')
      console.log('++++++++++++++', localeIndex.value, browserLang, lang)
    }
    
  }
})
*/

// array of multiple sources
watch([lang, () => page.value.isNotFound], ([newLang, pageNotFound]) => {
   //console.log(lang, pageNotFound, page.value.frontmatter['404'])
  // let locales = site.value.locales
  // let browserLang = navigator.language.split("-")[0]
  //console.log('watch:', isNotFound.value, newLang, lang.value, pageNotFound, page.value.frontmatter['404'])
  /*

  if (pageNotFound === true) {
    if (locales.hasOwnProperty(newLang)) {
      console.log('gsdjgk++++++++')
      router.go('/' + newLang + '/404')
    } else {
      console.log('gsdjgk++++++++')
      router.go('/404')
    }
  }
  */

  /*
  if (pageNotFound === true || page.value.frontmatter['404'] === true) {
    if (newLang !== "en") {
      router.go('/' + newLang + '/404')
      console.log('meddl A+', newLang)
    } else {
      router.go('/404')
      console.log('meddl B+', newLang)
    }
  } else {
    let locales = site.value.locales
    let browserLang = navigator.language.split("-")[0]
    console.log('page exists:',newLang, locales, browserLang)

    if (browserLang !== newLang && locales.hasOwnProperty(browserLang)) {
      console.log('go A')
      router.go('/' + browserLang + route.path)
    } else if(browserLang === locales.root.lang && browserLang !== newLang) {
      console.log('go B')
      router.go(route.path.replace('/' + newLang, ''))
    }
  }
  */
})
/*
watch(lang, async () => {
  console.log('watch lang', lang.value, page.value.isNotFound)
})
*/

onMounted(() => {
  let browserLang = navigator.language.split("-")[0]

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