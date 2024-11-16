<script setup lang="ts">
    import { type Ref, inject, ref, computed } from 'vue'
    import { css } from 'styled-system/css'
    import { breakpoints, thumbnailSizes } from '../../theme.config.mts';
    import { useImageZoom } from './../composables/image-zoom'
    
    interface Sizes {
        xs: number
        sm: number
        md: number,
        lg: number,
        xl: number,
        '2xl': number,
        '3xl': number,
        '4xl': number,
        '5xl': number,
        '6xl': number,
    }

    interface Props {
        basePath?: string
        src: string
        alt?: string
        caption?: boolean
        aspectRatio?: string
        lazy?: boolean,
        sizes?: Partial<Sizes>
    }

    const props = withDefaults(defineProps<Props>(), {
        basePath: "/images/",
        src: "",
        alt: "",
        caption: true,
        aspectRatio: "16 / 10",
        lazy: true,
    })

    const defaultSizes: Partial<Sizes> = {
        xs: 200
    }
    
    const srcSet = computed(() => thumbnailSizes.map(size => {
        const srcPath = props.src.split('.')[0]
        const srcSuffix = props.src.split('.')[1]
        return `${props.basePath}thumbnails/${srcPath}_${size}.webp ${size}w`
    }).join(', '))

    /**
     * @todo make an object as prop with the following structure and 
     * build the according sizes media queries string
     * {
     *   xs: 600, // xs refers to the theme breakpoint with value 0px
     *   sm: 200, // sm refers to the theme breakpoint with value 420px
     *   md: 300,
     *   xl: 500,
     * }
     */
    const srcSizes = computed(() => {
        return Object.entries({...defaultSizes, ...props.sizes}).reverse().map(([key, value]) => {
            return `(min-width: ${breakpoints[key] ?? '0px'}) ${value}px`
        }).join(', ')
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

    <div 
        :class="css({
            display: 'flex',
            flexDirection: 'column',
            gap: '4',
        })">

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
                    :src="`${basePath}source/${src}`" 
                    :srcset="srcSet"
                    :sizes="srcSizes"
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
                :src="`${basePath}source/${src}`" 
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