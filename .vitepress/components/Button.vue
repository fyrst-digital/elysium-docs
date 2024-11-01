<script setup lang="ts">
    import { computed } from 'vue'
    import { button } from 'styled-system/recipes'

    interface Props {
        tag?: string
        size?: 'md' | 'lg'
        theme?: 'primary'
        text: string
        href?: string
        isExternal?: boolean;
        rel?: string;
    }
    const props = withDefaults(defineProps<Props>(), {
        size: 'md',
        theme: 'primary',
        isExternal: false,
    })

    const component = computed(() => {
        return props.tag || (props.href ? 'a' : 'button')
    })

    const createButton = () => {
        return button({
            theme: props.theme
        })
    }
</script>

<template>
    <component
        :is="component"
        :class="createButton()"
        :href="props.href ? props.href: undefined"
        :target="isExternal ? '_blank' : undefined"
        :rel="props.rel ?? (isExternal ? 'noreferrer' : undefined)"
    >
        <slot name="prefix" />
        <span v-html="text" />
        <slot name="suffix" />
    </component>
</template>