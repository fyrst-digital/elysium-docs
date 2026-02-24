<script setup lang="ts">
import { useRouter } from 'vitepress'
import { computed } from 'vue'

const router = useRouter()

const versions = ['v4.0', 'v3.0']
const latestVersion = 'v4.0'

const currentVersion = computed(() => {
    for (const v of versions) {
        if (router.route.path.startsWith(`/${v}/`)) {
            return v
        }
    }
    return latestVersion
})

const currentLocale = computed(() => {
    const path = router.route.path
    for (const v of versions) {
        if (path.startsWith(`/${v}/de/`)) {
            return 'de'
        }
    }
    return ''
})

const navLinks = computed(() => {
    if (currentLocale.value === 'de') {
        return [
            { text: 'Anleitung', link: `/${currentVersion.value}/de/anleitung/uebersicht/index` },
            { text: 'Guides', link: `/${currentVersion.value}/de/guides/groessen-und-seitenverhaeltnis` }
        ]
    }
    return [
        { text: 'Manual', link: `/${currentVersion.value}/manual/overview/index` },
        { text: 'Guides', link: `/${currentVersion.value}/guides/sizing-and-aspect-ratio` }
    ]
})
</script>

<template>
    <nav class="VPNavBarMenu">
        <a
            v-for="item in navLinks"
            :key="item.text"
            class="VPNavBarMenuLink"
            :href="item.link"
        >{{ item.text }}</a>
    </nav>
</template>

<style>
.VPNavBarMenu {
    display: flex;
    align-items: center;
}

.VPNavBarMenuLink {
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    transition: color 0.25s;
}

.VPNavBarMenuLink:hover {
    color: var(--vp-c-brand-1);
}
</style>
