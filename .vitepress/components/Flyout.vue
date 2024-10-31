<script lang="ts" setup>
    import { ref } from 'vue'
    import { css } from 'styled-system/css'
    import { useFlyout } from 'vitepress/dist/client/theme-default/composables/flyout.js'
    import VPMenu from 'vitepress/dist/client/theme-default/components/VPMenu.vue'


    defineProps<{
        icon?: string
        label?: string
        button?: string
    }>()

    const open = ref(false)
    const el = ref<HTMLElement>()

    useFlyout({ el, onBlur })

    function onBlur() {
        open.value = false
    }
</script>

<template>
    <div
        :class="css({
            position: 'relative',
            zIndex: 1
        })"
        ref="el"
        @mouseenter="open = true"
        @mouseleave="open = false"
    >
      <button
        type="button"
        :class="css({
            fontSize: 'sm',
        })"
        aria-haspopup="true"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span v-if="button || icon" class="text">
          <span v-if="icon" :class="[icon, 'option-icon']" />
          <span v-if="button" v-html="button"></span>
          <span class="vpi-chevron-down text-icon" />
        </span>
  
        <span v-else class="vpi-more-horizontal icon" />
      </button>
  
      <div 
        :class="css({
            display: 'block',
            opacity: open ? 1 : 0,
            visibility: open ? 'visible' : 'hidden',
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 2
        })">

        <VPMenu>
          <slot />
        </VPMenu>
      </div>
    </div>
  </template>