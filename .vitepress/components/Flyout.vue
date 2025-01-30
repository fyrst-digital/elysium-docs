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
            display: 'flex',
            alignItems: 'center',
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
            display: 'flex',
            alignItems: 'center',
            fontSize: 'sm',
            _hover: {
                color: 'primary !important',
            },
        })"
        aria-haspopup="true"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span 
            v-if="button || icon" 
            :class="css({
                display: 'inline-flex' ,
                alignItems: 'center',
                gap: '2'
            })">
            <span :class="[
                'icon icon-translate',
                css({
                    fontSize: 'lg',
                })
            ]"></span>
            <span v-if="button" 
                :class="css({
                    display: 'none',
                    'xl': {
                        display: 'block',
                    },
                })"
                v-html="button" />
            <span class="icon icon-caret-down" />
        </span>
  
        <span v-else class="vpi-more-horizontal icon" />
      </button>
  
      <div 
        :class="css({
            width: '200px',
            display: 'block',
            opacity: open ? 1 : 0,
            visibility: open ? 'visible' : 'hidden',
            position: 'absolute',
            top: '100%',
            right: 0,
            left: 'auto',
            paddingBlock: '2',
            zIndex: 2,
            transition: 'all 200ms',
        })">

        <VPMenu
            :class="css({
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
            })">
            <slot />
        </VPMenu>
      </div>
    </div>
  </template>