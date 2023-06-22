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
const locales = site.value.locales;
</script>

<template>
  <Layout>
    <template #nav-bar-title-before><HeaderIcon /></template>
    <template #home-hero-image><HeroImage /></template>
    <template #not-found><LeadNotFound /></template>
  </Layout>
</template>