export function createSidebar(version: string) {
    const enManual = [
        {
            text: 'Overview',
            link: `/${version}/manual/overview/index`,
            collapsed: false,
            items: [
                {
                    text: 'Sections',
                    link: `/${version}/manual/overview/sections`
                },
                {
                    text: 'Slide Builder',
                    link: `/${version}/manual/overview/slide-builder`
                },
                {
                    text: 'Slider & Banner elements',
                    link: `/${version}/manual/overview/slider-banner-elements`
                }
            ]
        },
        {
            text: 'Sections',
            collapsed: false,
            items: [
                {
                    text: 'Placing blocks',
                    link: `/${version}/manual/sections/placing-blocks`
                },
                {
                    text: 'Adjust block size',
                    link: `/${version}/manual/sections/adjust-block-size`
                },
                {
                    text: 'Section settings',
                    link: `/${version}/manual/sections/section-settings`
                },
                {
                    text: 'Block settings',
                    link: `/${version}/manual/sections/block-settings`
                }
            ]
        },
        {
            text: 'Slide Builder',
            collapsed: false,
            items: [
                {
                    text: 'Getting started',
                    link: `/${version}/manual/slide-builder/getting-started`
                },
                {
                    text: 'General settings',
                    link: `/${version}/manual/slide-builder/general-settings`
                },
                {
                    text: 'Media settings',
                    link: `/${version}/manual/slide-builder/media-settings`
                },
                {
                    text: 'Design settings',
                    link: `/${version}/manual/slide-builder/design-settings`
                },
                {
                    text: 'Advanced settings',
                    link: `/${version}/manual/slide-builder/advanced-settings`
                },
            ]
        },
        {
            text: 'CMS elements',
            collapsed: false,
            items: [
                {
                    text: 'Slider',
                    link: `/${version}/manual/cms-elements/slider`
                },
                {
                    text: 'Banner',
                    link: `/${version}/manual/cms-elements/banner`
                }
            ]
        }
    ]

    const enGuides = [
        {
            text: 'Guides',
            collapsed: false,
            items: [
                {
                    text: 'Sizing and aspect ratio',
                    link: `/${version}/guides/sizing-and-aspect-ratio`
                },
                {
                    text: 'Slides per Slider view',
                    link: `/${version}/guides/slides-per-slider-view`
                },
                {
                    text: 'Slide cover thumbnails',
                    link: `/${version}/guides/slide-cover-thumbnails`
                },
                {
                    text: 'Custom Slide templates',
                    link: `/${version}/guides/custom-slide-templates`
                },
            ]
        },
    ]

    const deAnleitung = [
        {
            text: 'Übersicht',
            link: `/${version}/de/anleitung/uebersicht/index`,
            collapsed: false,
            items: [
                {
                    text: 'Sektionen',
                    link: `/${version}/de/anleitung/uebersicht/sektionen`
                },
                {
                    text: 'Slide Builder',
                    link: `/${version}/de/anleitung/uebersicht/slide-builder`
                },
                {
                    text: 'Slider & Banner Elemente',
                    link: `/${version}/de/anleitung/uebersicht/slider-banner-elemente`
                }
            ]
        },
        {
            text: 'Sektionen',
            collapsed: false,
            items: [
                {
                    text: 'Blöcke platzieren',
                    link: `/${version}/de/anleitung/sektionen/bloecke-platzieren`
                },
                {
                    text: 'Blockgröße anpassen',
                    link: `/${version}/de/anleitung/sektionen/blockgroesse-anpassen`
                },
                {
                    text: 'Sektion Einstellungen',
                    link: `/${version}/de/anleitung/sektionen/sektion-einstellungen`
                },
                {
                    text: 'Block Einstellungen',
                    link: `/${version}/de/anleitung/sektionen/block-einstellungen`
                }
            ]
        },
        {
            text: 'Slide Builder',
            collapsed: false,
            items: [
                {
                    text: 'Erste Schritte',
                    link: `/${version}/de/anleitung/slide-builder/erste-schritte`
                },
                {
                    text: 'Allgemeine Einstellungen',
                    link: `/${version}/de/anleitung/slide-builder/allgemeine-einstellungen`
                },
                {
                    text: 'Medien Einstellungen',
                    link: `/${version}/de/anleitung/slide-builder/medien-einstellungen`
                },
                {
                    text: 'Design Einstellungen',
                    link: `/${version}/de/anleitung/slide-builder/design-einstellungen`
                },
                {
                    text: 'Erweiterte Einstellungen',
                    link: `/${version}/de/anleitung/slide-builder/erweiterte-einstellungen`
                },
            ]
        },
        {
            text: 'Erlebniswelt Elemente',
            collapsed: false,
            items: [
                {
                    text: 'Slider',
                    link: `/${version}/de/anleitung/cms-elemente/slider`
                },
                {
                    text: 'Banner',
                    link: `/${version}/de/anleitung/cms-elemente/banner`
                }
            ]
        }
    ]

    const deGuides = [
        {
            text: 'Guides',
            collapsed: false,
            items: [
                {
                    text: 'Größen und Seitenverhältnis',
                    link: `/${version}/de/guides/groessen-und-seitenverhaeltnis`
                },
                {
                    text: 'Slides pro Ansicht',
                    link: `/${version}/de/guides/slides-pro-slider-ansicht`
                },
                {
                    text: 'Slide Cover Thumbnails',
                    link: `/${version}/de/guides/slide-cover-thumbnails`
                },
                {
                    text: 'Individuelle Slide-Templates',
                    link: `/${version}/de/guides/individuelle-slide-templates`
                },
            ]
        },
    ]

    return {
        en: {
            '/manual/': enManual,
            '/guides/': enGuides
        },
        de: {
            '/de/anleitung/': deAnleitung,
            '/de/guides/': deGuides
        }
    }
}