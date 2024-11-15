<script setup lang="ts">
    import { ref, onMounted, onBeforeMount, onUnmounted, PropType, computed, CSSProperties, reactive, watch, getCurrentInstance } from 'vue'
    import { css } from 'styled-system/css'
    import { breakpoints } from '../../theme.config.mts';
    import { v4 as uuidv4 } from 'uuid'

    const props = defineProps({
        cols: {
            type: Object
        }
    })

    const id = ref(null)

    const defaultCols = {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        '2xl': null,
        '3xl': null,
        '4xl': null,
        '5xl': null,
        '6xl': null,
    }

    const columnId = computed(() => {
        console.log(id.value)
        return `column-${id.value}`
    })

    const style = computed(() => {
        const arr = []

        const mergedCols = {
            ...defaultCols,
            ...props.cols
        }
        
        for (const [key, value] of Object.entries(mergedCols)) {
            if (value !== null) {
                arr.push(`@media screen and (min-width: ${breakpoints[key] ?? '0px'}) { #column-${id.value} { grid-column-end: span ${value}; } }`)
            }
        }

        return arr
    })

    onBeforeMount(() => {
        id.value = uuidv4()
    })

</script>

<template>

    <component 
        v-if="id"
        :is="'style'"> 
            {{style.join(' ')}}
    </component>

    <div 
        v-if="id"
        :class="[css({
            display: 'flex',
            flexDirection: 'column',
        }),]"
        :id="columnId">
        <slot />
    </div>

</template>