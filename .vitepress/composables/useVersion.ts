import { computed } from 'vue'
import { useRouter } from 'vitepress'
import { versions, latestVersion } from '../../theme.config.mts'

export function useVersion() {
    const router = useRouter()

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

    const versionPath = (version: string, locale?: string) => {
        if (locale === 'de') {
            return `/${version}/de/`
        }
        return `/${version}/`
    }

    return {
        versions,
        latestVersion,
        currentVersion,
        currentLocale,
        versionPath
    }
}
