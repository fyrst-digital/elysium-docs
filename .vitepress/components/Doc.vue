<script setup lang="ts">
    import { useRoute, useData, onContentUpdated } from 'vitepress'
    import { useSidebar } from 'vitepress/theme';
    import { computed, useSlots, ref } from 'vue'
    import { css } from 'styled-system/css';
    import VPDocAside from 'vitepress/dist/client/theme-default/components/VPDocAside.vue'
    import VPDocFooter from 'vitepress/dist/client/theme-default/components/VPDocFooter.vue'

    const { theme } = useData()
    const { hasSidebar, hasAside, leftAside } = useSidebar()
    const slots = useSlots()
    const hasOutline = ref<Boolean>(false)

    const asideSlots = computed(() => {
        return Object.entries(slots).filter(([key, slot]) => {
            // slot().filter((s) => s.children.length > 0)
            // console.log(key, slot())
            return /aside/.test(key)
        })
    }, {})

    const route = useRoute()

    const pageName = computed(() =>
        route.path.replace(/[./]+/g, '_').replace(/_html$/, '')
    )

    onContentUpdated(() => {
        const headers = document.querySelectorAll('.vp-doc :where(h2,h3,h4,h5,h6)')
        hasOutline.value = headers.length > 0
    })
</script>

<template>
    <div
        class="VPDoc"
        :class="[
            css({
                paddingBlock: '32px',
                paddingInline: '24px',
                maxWidth: { 
                    base: '360px', 
                    sm: '420px', 
                    md: '560px', 
                    lg: '640px', 
                    xl: '760px',
                    '2xl': '680px',
                    '3xl': '760px',
                    '4xl': '860px',
                    '5xl': '1000px',
                    '6xl': '1200px',
                },
                marginInline: 'auto',
            }),
            { 'has-sidebar': hasSidebar, 'has-aside': hasAside }
        ]"
    >
        <slot name="doc-top" />
        <div class="container"
            :class="css({
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '24px',
            })">

            <div v-if="hasAside" 
                class="aside" 
                :class="[
                    css({
                        display: 'none',
                        flex: '0 auto',
                        width: '100%',
                        maxWidth: '180px',
                        order: 2,
                        '2xl': { 
                            display: hasOutline ? 'block' : 'none',
                        }
                    }),
                    {'left-aside': leftAside}
                ]">

                <div class="aside-curtain" />
                <div :class="[
                    css({
                        position: 'sticky',
                        top: {
                            base: '150px',
                            '5xl': '100px'
                        }
                    }),
                    'aside-container'
                    ]">
                    <div class="aside-content">
                        <VPDocAside>
                            <template #aside-top><slot name="aside-top" /></template>
                            <template #aside-bottom><slot name="aside-bottom" /></template>
                            <template #aside-outline-before><slot name="aside-outline-before" /></template>
                            <template #aside-outline-after><slot name="aside-outline-after" /></template>
                            <template #aside-ads-before><slot name="aside-ads-before" /></template>
                            <template #aside-ads-after><slot name="aside-ads-after" /></template>
                        </VPDocAside>
                    </div>
                </div>
            </div>

            <div class="content"
                :class="css({
                    flex: '1 0%',
                    order: 1,
                    md: { padding: '24px' }
                })">

                <div class="content-container"
                    :class="css({
                        marginInline: 'auto',
                    })">
                    <slot name="doc-before" />
                    <main class="main">
                        <Content
                            class="vp-doc"
                            :class="[
                                pageName,
                                theme.externalLinkIcon && 'external-link-icon-enabled'
                            ]"
                        />
                    </main>
                    <VPDocFooter>
                        <template #doc-footer-before><slot name="doc-footer-before" /></template>
                    </VPDocFooter>
                    <slot name="doc-after" />
                </div>
            </div>
        </div>
        <slot name="doc-bottom" />
    </div>
</template>