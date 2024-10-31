<script lang="ts" setup>
    import { computed } from 'vue';
    import { useData } from 'vitepress'
    import Flyout from '../components/Flyout.vue'
    import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
    
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
</script>

<template>
    <Flyout
        icon="vpi-languages"
        :label="theme.langMenuLabel || 'Change language'"
        :button="theme.langMenuLabel || 'Change language'"
    >
        <div class="items">
            <template v-for="locale in locales" :key="locale.link">
                <div v-if="locale.active">
                    {{ locale.label }}
                </div>
                <VPLink
                    v-else
                    :href="locale.link"
                    :no-icon="true"
                    >
                    <span v-html="locale.label"></span>
                </VPLink>
            </template>
        </div>
    </Flyout>
</template>
  