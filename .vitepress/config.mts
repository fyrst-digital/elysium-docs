import defineVersionedConfig from 'vitepress-versioning-plugin'
import { fileURLToPath, URL } from 'node:url'
import sidebar from './config.sidebar'

const sidebarEn = {
    '/v4.0/manual/': sidebar.en['/manual/'],
    '/v4.0/guides/': sidebar.en['/guides/'],
    '/v3.0/manual/': sidebar.en['/manual/'],
    '/v3.0/guides/': sidebar.en['/guides/']
}

const sidebarDe = {
    '/v4.0/de/anleitung/': sidebar.de['/de/anleitung/'],
    '/v4.0/de/guides/': sidebar.de['/de/guides/'],
    '/v3.0/de/anleitung/': sidebar.de['/de/anleitung/'],
    '/v3.0/de/guides/': sidebar.de['/de/guides/']
}

export default defineVersionedConfig({
    versioning: {
        latestVersion: 'v4.0',
        switcher: {
            text: 'Version',
            includeLatestVersion: true
        },
        sidebars: {
            processSidebarURLs: true
        }
    },
    vite: {
        esbuild: {
            target: 'es2022'
        },
        resolve: {
            alias: [
                {
                    find: 'styled-system',
                    replacement: fileURLToPath(new URL('./../styled-system', import.meta.url))
                },
                {
                    find: /^.*\/VPNavBarTranslations\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/NavBarTranslations.vue', import.meta.url)
                    )          
                },
                {
                    find: /^.*\/VPDoc\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/Doc.vue', import.meta.url)
                    )          
                },
                {
                    find: /^.*\/VPButton\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/Button.vue', import.meta.url)
                    )          
                },
            ]
        },
    },
    srcDir: './content',
    head: [
        ['link', { rel: 'icon', href: '/icon-elysium.svg' }]
    ],
    sitemap: {
        hostname: 'https://elysium.blurcreative.de'
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/',
        },
        de: {
            label: 'Deutsch',
            lang: 'de',
            link: '/v4.0/de/',
            themeConfig: {
                nav: [
                    { text: 'Anleitung', link: '/v4.0/de/anleitung/uebersicht' },
                    { text: 'Guides', link: '/v4.0/de/guides/groessen-und-seitenverhaeltnis' },
                    { component: 'VersionSwitcher' }
                ],
                sidebar: sidebarDe,
                outline: {
                    label: 'Inhaltsverzeichnis',
                },
                langMenuLabel: 'Sprache',
                lastUpdated: {
                    text: 'Zuletzt aktualisiert',
                },
                docFooter: {
                    prev: 'Vorherige Seite',
                    next: 'Nächste Seite',
                },
                returnToTopLabel: 'Zurück nach oben',
                skipToContentLabel: 'Zum Inhalt springen',
                darkModeSwitchLabel: 'Farbschema',
                lightModeSwitchTitle: 'Helle Ansicht',
                darkModeSwitchTitle: 'Dunkle Ansicht',
                search: {
                    provider: 'local',
                    options: {
                        translations: {
                            button: {
                                buttonText: 'Suche',
                            },
                            modal: {
                                displayDetails: 'Details anzeigen',
                                resetButtonTitle: 'Zurücksetzen',
                                footer: {
                                    selectText: 'Auswählen',
                                    navigateText: 'Navigieren',
                                    closeText: 'Schließen',
                                },
                            }
                        }
                    }
                }
            }
        }
    },
    markdown: {
        html: true,
        component: {}
    },
    cleanUrls: true,
    lastUpdated: true,
    title: "Elysium",
    description: "Section, Slider and Banner for Shopware",
    themeConfig: {
        logo: '/icon-elysium.svg',
        versionSwitcher: false,
        search: {
            provider: 'local',
        },
        nav: [
            { text: 'Manual', link: '/v4.0/manual/overview' },
            { text: 'Guides', link: '/v4.0/guides/sizing-and-aspect-ratio' },
            { component: 'VersionSwitcher' }
        ],
        sidebar: sidebarEn,
    }
}, __dirname)