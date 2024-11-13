<script setup lang="ts">
    import { type Ref, inject, ref } from 'vue'
    import { css } from 'styled-system/css'
    import { useImageZoom } from './../composables/image-zoom'
    
    interface Props {
        src: string
        alt?: string
        caption?: boolean
        aspectRatio?: string
        lazy?: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        src: "",
        alt: "",
        caption: true,
        aspectRatio: "16 / 10",
        lazy: true
    })

    const {
        imageZoomStyle,
        handleZoom,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleDragStart,
        handleDragMove,
        handleDragEnd,
        resetZoom
    } = useImageZoom()

    const modalState = ref(false)

    const toggleModal = (state: boolean) => {
        modalState.value = state
        document.body.style.overflow = state ? 'hidden' : ''
        if (!state) resetZoom()
    }
</script>

<template>

    <div>

        <div 
            :class="css({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                bg: { base: 'var(--vp-c-bg-soft)', _dark: 'var(--vp-c-bg-alt)' },
                borderRadius: '12'
            })"
            :style="{
                aspectRatio: aspectRatio
            }">

            <picture>

                <slot />
                <img 
                    :src="src" 
                    :alt="alt"
                    :class="css({
                        alignSelf: 'center',
                        borderRadius: '6',
                        width: '100%',
                        cursor: 'pointer',
                        boxShadow: '0 0 1rem rgba(0, 0, 0, 0.2)',
                        transition: 'all .3s',
                        _hover: {
                            transform: 'scale(1.05)'
                        }
                    })"
                    :loading="lazy ? 'lazy' : 'eager'"
                    @click="toggleModal(true)">
            </picture>
        </div>

        <div v-if="alt"
            :class="css({
                fontSize: '80%',
                fontStyle: 'italic',
                color: 'var(--vp-c-text-2)',
                paddingBlock: '4'
            })">
            {{ alt }}
        </div>
    </div>

    <div v-if="modalState"
        :class="css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            zIndex: '100',
            width: '100%',
            height: '100%',
            inset: '0',
            padding: '16',
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 500ms'
        })"
        @click.exact="toggleModal(false)">

        <div
            :class="css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                // maxWidth: '100%',
                // maxHeight: '100%',
                borderRadius: '6',
                bg: 'var(--vp-c-bg)',
                maxWidth: '1600px',
                boxShadow: '0 0 2rem rgba(0, 0, 0, 0.5)',
                cursor: 'default',
                overflow: 'hidden',
            })"
            @wheel="handleZoom"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @mousedown="handleDragStart"
            @mousemove="handleDragMove" 
            @mouseup="handleDragEnd"
            @click.stop>

            <img 
                :src="src" 
                :alt="alt"
                :class="css({
                    userSelect: 'none',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transformOrigin: 'center',
                })"
                :style="imageZoomStyle"
                loading="lazy"
                @click.stop
                @dragstart.prevent>
        </div>

        <button type="button"

            :class="css({
                color: 'white !important',
                position: 'absolute',
                inset: '0 0 auto auto',
                margin: '6',
                fontWeight: '500',
                fontSize: '24px'
            })">
            <span class="icon icon-x" />
        </button>
        </div>
</template>