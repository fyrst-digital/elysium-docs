<script setup lang="ts">
    import { ref, onBeforeMount, computed } from 'vue'
    import { css } from 'styled-system/css'
    import { breakpoints, breakpointsStruct } from '../../theme.config.mts'
    import { v4 as uuidv4 } from 'uuid'

    const props = defineProps({
        cols: {
            type: Object
        },
        colStart: {
            type: Object
        }
    })

    const id = ref(null)

    const defaultCols = { ...breakpointsStruct, xs: 12 }
    const defaultColStart = { ...breakpointsStruct, xs: 'auto' }

    const columnId = computed(() => {
        return `column-${id.value}`
    })

    function generateRules(key: string, styles: any) {
        const { colsValue, colStartValue } = styles

        const rules = []
        if (colsValue != null) rules.push(`grid-column-end: span ${colsValue};`)
        if (colStartValue != null && colStartValue !== 'auto') rules.push(`grid-column-start: ${colStartValue};`)

        if (rules.length) {
            return `#${columnId.value} { ${rules.join(' ')} }`
        }
    }

    function wrapWithMediaQuery(key: string, content: string) {
        const minWidth = breakpoints[key] ?? '0px'
        return key === 'xs'
            ? content
            : `@media screen and (min-width: ${minWidth}) { ${content} }`
    }

    const style = computed(() =>
        Object.keys(breakpointsStruct)
            .map((key) => {
                const rules = generateRules(key, { 
                    colsValue: props.cols?.[key] ?? defaultCols[key], 
                    colStartValue: props.colStart?.[key] ?? defaultColStart[key] 
                })
                if (rules) {
                    return wrapWithMediaQuery(key, rules)
                }
            })
            .filter(Boolean)
    )

    onBeforeMount(() => {
        id.value = uuidv4()
    })
</script>

<template>
    <component v-if="id" :is="'style'">
        {{ style.join(' ') }}
    </component>

    <div
        v-if="id"
        :class="css({
            display: 'flex',
            flexDirection: 'column',
        })"
        :id="columnId"
    >
        <slot />
    </div>
</template>