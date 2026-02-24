import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { createSidebar } from './config.sidebar'
import { versions, latestVersion } from '../theme.config.mts'

const sidebarV40 = createSidebar('v4')
const sidebarV30 = createSidebar('v3')

const sidebarEn = {
    '/v4/manual/': sidebarV40.en['/manual/'],
    '/v4/guides/': sidebarV40.en['/guides/'],
    '/v3/manual/': sidebarV30.en['/manual/'],
    '/v3/guides/': sidebarV30.en['/guides/']
}

const sidebarDe = {
    '/v4/de/anleitung/': sidebarV40.de['/de/anleitung/'],
    '/v4/de/guides/': sidebarV40.de['/de/guides/'],
    '/v3/de/anleitung/': sidebarV30.de['/de/anleitung/'],
    '/v3/de/guides/': sidebarV30.de['/de/guides/']
}

export default defineConfig({
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
            link: '/v4/de/',
            themeConfig: {
                nav: [
                    { component: 'NavBar' },
                    { component: 'VersionSwitcher', props: { versions, latestVersion } }
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
        search: {
            provider: 'local',
        },
        nav: [
            { component: 'NavBar' },
            { component: 'VersionSwitcher', props: { versions, latestVersion } }
        ],
        sidebar: sidebarEn,
    }
})