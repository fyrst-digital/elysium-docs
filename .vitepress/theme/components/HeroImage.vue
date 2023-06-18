<script setup lang="ts">
import { type Ref, inject } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'
import { useData } from 'vitepress'

export interface HeroAction {
  theme?: 'brand' | 'alt'
  text: string
  link: string
}
defineProps<{
  name?: string
  text?: string
  tagline?: string
  image?: DefaultTheme.ThemeableImage
  actions?: HeroAction[]
}>()
const { title } = useData()
</script>
<template>
  <div class="image-wrapper" style="aspect-ratio: 4 / 3;"> 

    <img src="/hero-image.png" 
      :alt="title" 
      class="image">
  </div>
</template>

<style scoped>
  .image-wrapper {
    width: 460px;
    z-index: 5;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image {
    width: 100%;
    aspect-ratio: 4 / 3;
    max-width: 100%;
  }
  @media screen and (min-width: 960px) {
    .image-wrapper {
    width: 500px;
    }
  }
  @media screen and (min-width: 1280px) {
    .image-wrapper {
    width: 580px;
    }
  }
  @media screen and (min-width: 1440px) {
    .image-wrapper {
    width: 620px;
    }
  }
</style>