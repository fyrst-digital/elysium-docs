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
  <div class="image-wrapper"> 

    <img src="/hero-image.png" 
      :alt="title" 
      style="aspect-ratio: 4 / 3;"
      class="image">
  </div>
</template>

<style scoped>
  .image-wrapper {
    z-index: 5;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image {
    width: 100%;
    aspect-ratio: 4 / 3;
    max-width: clamp(200px, 80vw, 600px);
  }
</style>