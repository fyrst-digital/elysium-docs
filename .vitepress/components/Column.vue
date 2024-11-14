<script setup lang="ts">
    import { ref, onMounted, onUnmounted, PropType, computed, CSSProperties } from 'vue'
    import { css } from 'styled-system/css'
    import { useViewStyle, ResponsiveStyles } from './../composables/view-style'

    const { viewStyle } = useViewStyle({
        xl: 1440
    })

    const props = defineProps({
        colsXs: {
            type: Number,
            default: 12
        },
        colsMd: {
            type: Number
        },
        colsXl: {
            type: Number
        }
    })

    const colStyle = computed(() => {
        const styles: ResponsiveStyles = {
            xs: {
                gridColumnEnd: `span ${props.colsXs}`
            }
        }

        if (props.colsMd) {
            styles.md = {
                gridColumnEnd: `span ${props.colsMd}`
            }
        }

        if (props.colsXl) {
            styles.xl = {
                gridColumnEnd: `span ${props.colsXl}`
            }
        }

        return styles
    })
</script>

<template>

    <div
        :class="css({
            display: 'flex',
            flexDirection: 'column',
        })"
        :style="{
            ...viewStyle(colStyle)
        }">
        <slot />
    </div>
</template>