<script setup lang="ts">
import { computed } from 'vue'
import { useVersion } from '../composables/useVersion'

const { currentVersion, currentLocale } = useVersion()

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