<script setup lang="ts">
    import { type Ref, inject, ref } from 'vue'
    import type { DefaultTheme } from 'vitepress/theme'
    
    interface Props {
        src: string
        alt?: string
        caption?: boolean
        aspectRatio?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        src: "",
        alt: "",
        caption: true,
        aspectRatio: "16 / 10"
    });

    const modalState = ref(false)
</script>
<template>
    <div class="image-container">

        <div class="image-wrapper"
            :style="{
                aspectRatio: aspectRatio
            }">
            <img 
                :src="src" 
                :alt="alt"
                class="image"
                @click="modalState = true">
        </div>
        <div v-if="alt"
            class="caption">
            {{ alt }}
        </div>
    </div>
    <div v-if="modalState"
        class="image-modal"
        @click.exact="modalState = false">
        <img 
            :src="src" 
            :alt="alt"
            class="image-full"
            @click.stop>

            <button type="button"
                class="modal-close">
                Close
            </button>
        </div>
</template>

<style scoped>
    .image-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100%;
        inset: 0;
        padding: clamp(2rem, 6vw, 6rem);
        cursor: pointer;
        background-color: var(--image-modal-bg-color);
    }
    .modal-close {
        color: white;
        position: absolute;
        inset: 0 0 auto auto;
        margin: 2rem;
        font-weight: 500;
        font-size: 1rem;
    }
    .image-full {
        max-width: 100%;
        max-height: 100%;
        border-radius: var(--image-border-radius);
        box-shadow: 0 0 2rem var(--image-shadow-color);
        cursor: default;
        object-fit: contain;
        object-position: center;
    }
    .image-container {
        margin: var(--image-gaps) 0;
    }
    .image-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--image-gaps);
        padding: var(--image-gaps);
        background-color: var(--vp-sidebar-bg-color);
        border-radius: 1rem;
    }
    .image {
        align-self: center;
        border-radius: var(--image-border-radius);
        width: 100%;
        cursor: pointer;
        box-shadow: 0 0 1rem var(--image-shadow-color);
        transition: all .3s;
    }
    .image:hover {
        transform: scale(1.1);
    }
    .dark .image {
        --image-shadow-color: rgba(0, 0, 0, 0.5);
    }
    .dark .image-modal {
        --image-modal-bg-color: rgba(0, 0, 0, 0.5);
    }
    .caption 
    {
        font-size: 80%;
        font-style: italic;
        color: var(--vp-c-text-2);
        padding: 1rem 0;
    }
</style>