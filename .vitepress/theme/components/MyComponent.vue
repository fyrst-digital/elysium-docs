<script setup lang="ts">
import { type Ref, inject } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'

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
</script>
<template>
    WOHOHOP
    
</template>