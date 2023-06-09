<script setup lang="ts">
    import { type Ref, inject, ref } from 'vue'
    import type { DefaultTheme } from 'vitepress/theme'

    defineProps<{
        src: string,
        alt?: string,
        caption?: boolean
    }>()

    const modalState = ref(false)
</script>
<template>
    <div class="badge">
        <slot />
    </div>
</template>

<style scoped>
    .dark .badge {
        --badge-bg-color: var(--vp-c-bg-soft-mute);
    }
    .badge {
        display: inline-flex;
        padding: 0.25rem 0.75rem;
        line-height: 1;
        font-size: 75%;
        border-radius: 10rem;
        font-weight: 500;
        margin-left: 1rem;
        background-color: var(--badge-bg-color);
    }
</style>