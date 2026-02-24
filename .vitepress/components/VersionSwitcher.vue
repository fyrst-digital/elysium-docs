<script setup lang="ts">
import { useRouter } from 'vitepress'
import { computed, onMounted, watch, nextTick } from 'vue'
import VPMenuLink from 'vitepress/dist/client/theme-default/components/VPMenuLink.vue'
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'

const props = defineProps<{
    versions: string[]
    latestVersion: string
}>()

const router = useRouter()

const currentVersion = computed(() => {
    for (const v of props.versions) {
        if (router.route.path.startsWith(`/${v}/`)) {
            return v
        }
    }
    return props.latestVersion
})

const currentLocale = computed(() => {
    const path = router.route.path
    for (const v of props.versions) {
        if (path.startsWith(`/${v}/de/`)) {
            return 'de'
        }
    }
    return ''
})

const versionLink = (version: string) => {
    if (currentLocale.value) {
        return `/${version}/de/`
    }
    return `/${version}/`
}

function updateNavLinks() {
    const version = currentVersion.value
    const locale = currentLocale.value

    const navItems = document.querySelectorAll('.VPNavBarMenuLink')
    navItems.forEach((item) => {
        const el = item as HTMLElement
        const text = el.textContent?.trim()
        const href = el.getAttribute('href')

        if (!href || href.startsWith('/v')) return

        if (text === 'Manual') {
            el.setAttribute('href', `/${version}/manual/overview/index`)
        } else if (text === 'Guides') {
            el.setAttribute('href', `/${version}/guides/sizing-and-aspect-ratio`)
        } else if (text === 'Anleitung') {
            el.setAttribute('href', `/${version}/de/anleitung/uebersicht/index`)
        }
    })
}

onMounted(() => {
    updateNavLinks()
})

watch(() => router.route.path, () => {
    nextTick(() => {
        updateNavLinks()
    })
})
</script>

<template>
    <VPFlyout class="VPVersionSwitcher" :button="currentVersion" label="Switch Version">
        <div class="items">
            <VPMenuLink
                v-for="version in versions"
                :key="version"
                :item="{
                    text: version,
                    link: versionLink(version),
                }"
            />
        </div>
    </VPFlyout>
</template>

<style>
.vpi-versioning.option-icon {
    margin-right: 2px !important;
}

.vpi-versioning {
    --icon: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMi4yIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNvbG9yPSIjMDAwMDAwIj48cGF0aCBkPSJNMTcgN0MxOC4xMDQ2IDcgMTkgNi4xMDQ1NyAxOSA1QzE5IDMuODk1NDMgMTguMTA0NiAzIDE3IDNDMTUuODk1NCAzIDE1IDMuODk1NDMgMTUgNUMxNSA2LjEwNDU3IDE1Ljg5NTQgNyAxNyA3WiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTcgN0M4LjEwNDU3IDcgOSA2LjEwNDU3IDkgNUM5IDMuODk1NDMgOC4xMDQ1NyAzIDcgM0M1Ljg5NTQzIDMgNSAzLjg5NTQzIDUgNUM1IDYuMTA0NTcgNS44OTU0MyA3IDcgN1oiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik03IDIxQzguMTA0NTcgMjEgOSAyMC4xMDQ2IDkgMTlIOSAxNy44OTU0IDguMTA0NTcgMTcgNyAxN0M1Ljg5NTQzIDE3IDUgMTcuODk1NCA1IDE5QzUgMjAuMTA0NiA1Ljg5NTQzIDIxIDcgMjFaIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNNyA3VjE3IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTcgN1Y4QzE3IDEwLjUgMTUgMTEgMTUgMTFMOSAxM0M5IDEzIDcgMTMuNSA3IDE2VjE3IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L3N2Zz4=")
}

.VPVersionSwitcher {
    display: flex;
    align-items: center;
}
</style>