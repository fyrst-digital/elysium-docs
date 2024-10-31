<script lang="ts" setup>
    import { computed } from 'vue';
    import { useData } from 'vitepress'
    import Flyout from '../components/Flyout.vue'
    import {css} from 'styled-system/css';
    
    const { theme, site, frontmatter, localeIndex, page, hash } = useData()

    const locales = computed(() => {
        return Object.entries(site.value.locales).map(([key, value]) => ({
            label: value.label,
            link: resolveLink(key, value.link),
            active: key === localeIndex.value,
            id: key
        }))
    })

    const resolveLink = (langId: string, link?: string | null) =>
        frontmatter.value.slug?.[langId] 
        || link 
        || (langId === 'root' ? '/' : `/${langId}/`)

    const styeLangBtn = (isActive: boolean) => {
        return css({
            display: 'flex',
            alignItems: 'center',
            bg: isActive ? 'contrast.soft' : 'transparent',
            color: { base: 'var(--vp-c-text-1)', _hover: isActive ? null : 'primary !important' },
            fontSize: 'sm',
            userSelect: 'none',
            cursor: isActive ? 'default' : 'pointer',
            paddingInline: '2',
            paddingBlock: '1',
            borderRadius: '6px',
            transition: 'color 200ms',
        })
    }
</script>

<template>
    <Flyout
        icon="vpi-languages"
        :label="theme.langMenuLabel || 'Change language'"
        :button="theme.langMenuLabel || 'Language'"
    >
        <template v-for="locale in locales" :key="locale.link">
            <div v-if="locale.active"
                :class="styeLangBtn(true)">
                {{ locale.label }}
            </div>
            <a v-else
                :class="styeLangBtn(false)"
                :href="locale.link"
                v-html="locale.label" />

        </template>
    </Flyout>
</template>
  