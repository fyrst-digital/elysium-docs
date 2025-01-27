import { link } from "node:fs";

export default {
    en: {
        '/manual/': [
            {
                text: 'Overview',
                link: '/manual/overview/index',
                collapsed: false,
                items: [
                    { 
                        text: 'Sections', 
                        link: '/manual/overview/sections'
                    },
                    { 
                        text: 'Slide Builder',
                        link: '/manual/overview/slide-builder'
                    },
                    { 
                        text: 'Slider & Banner elements',
                        link: '/manual/overview/slider-banner-elements'
                    }
                ]
            }, 
            {
                text: 'Sections',
                collapsed: false,
                items: [
                    { 
                        text: 'Placing blocks',
                        link: '/manual/sections/placing-blocks'
                    },
                    {
                        text: 'Adjust block size',
                        link: '/manual/sections/adjust-block-size'
                    },
                    {
                        text: 'Section settings',
                        link: '/manual/sections/section-settings'
                    },
                    {
                        text: 'Block settings',
                        link: '/manual/sections/block-settings'
                    }
                ]
            },
            {
                text: 'Slide Builder',
                collapsed: false,
                items: [
                    { 
                        text: 'Getting started',
                        link: '/manual/slide-builder/getting-started'
                    },
                    { 
                        text: 'General settings',
                        link: '/manual/slide-builder/general-settings'
                    },
                    { 
                        text: 'Media settings',
                        link: '/manual/slide-builder/media-settings'
                    },
                    { 
                        text: 'Design settings',
                        link: '/manual/slide-builder/design-settings'
                    },
                    { 
                        text: 'Advanced settings',
                        link: '/manual/slide-builder/advanced-settings'
                    },
                ]
            },
            {
                text: 'CMS elements',
                collapsed: false,
                items: [
                    { 
                        text: 'Slider',
                        link: '/manual/cms-elements/slider'
                    },
                    { 
                        text: 'Banner',
                        link: '/manual/cms-elements/banner'
                    }
                ]
            }
        ],
        '/guides/': [
            {
                text: 'Guides',
                collapsed: false,
                items: [
                    {
                        text: 'Sizing and aspect ratio',
                        link: '/guides/sizing-and-aspect-ratio'
                    },
                    {
                        text: 'Slides per Slider view',
                        link: '/guides/slides-per-slider-view'
                    },
                    {
                        text: 'Slide cover thumbnails',
                        link: '/guides/slide-cover-thumbnails'
                    },
                    {
                        text: 'Custom Slide templates',
                        link: '/guides/custom-slide-templates'
                    },
                ]
            },
        ]
    },
    de: {
        '/de/anleitung/': [
            {
                text: 'Übersicht',
                link: '/de/anleitung/uebersicht/index',
                collapsed: false,
                items: [
                    { 
                        text: 'Sektionen', 
                        link: '/de/anleitung/uebersicht/sektionen'
                    },
                    { 
                        text: 'Slide Builder',
                        link: '/de/anleitung/uebersicht/slide-builder'
                    },
                    { 
                        text: 'Slider & Banner Elemente',
                        link: '/de/anleitung/uebersicht/slider-banner-elemente'
                    }
                ]
            }, 
            {
                text: 'Sektionen',
                collapsed: false,
                items: [
                    { 
                        text: 'Blöcke platzieren',
                        link: '/de/anleitung/sektionen/bloecke-platzieren'
                    },
                    { 
                        text: 'Blockgröße anpassen',
                        link: '/de/anleitung/sektionen/blockgroesse-anpassen'
                    },
                    { 
                        text: 'Sektion Einstellungen',
                        link: '/de/anleitung/sektionen/sektion-einstellungen'
                    },
                    { 
                        text: 'Block Einstellungen',
                        link: '/de/anleitung/sektionen/block-einstellungen'
                    }
                ]
            },
            {
                text: 'Slide Builder',
                collapsed: false,
                items: [
                    { 
                        text: 'Erste Schritte',
                        link: '/de/anleitung/slide-builder/erste-schritte'
                    },
                    { 
                        text: 'Allgemeine Einstellungen',
                        link: '/de/anleitung/slide-builder/allgemeine-einstellungen'
                    },
                    { 
                        text: 'Medien Einstellungen',
                        link: '/de/anleitung/slide-builder/medien-einstellungen'
                    },
                    { 
                        text: 'Design Einstellungen',
                        link: '/de/anleitung/slide-builder/design-einstellungen'
                    },
                    { 
                        text: 'Erweiterte Einstellungen',
                        link: '/de/anleitung/slide-builder/erweiterte-einstellungen'
                    },
                ]
            },
            {
                text: 'Erlebniswelt Elemente',
                collapsed: false,
                items: [
                    { 
                        text: 'Slider',
                        link: '/de/anleitung/cms-elemente/slider'
                    },
                    { 
                        text: 'Banner',
                        link: '/de/anleitung/cms-elemente/banner'
                    }
                ]
            }
        ],
        '/de/guides/': [
            {
                text: 'Guides',
                collapsed: false,
                items: [
                    {
                        text: 'Größen und Seitenverhältnis',
                        link: '/de/guides/groessen-und-seitenverhaeltnis'
                    },
                    {
                        text: 'Slides pro Ansicht',
                        link: '/de/guides/slides-pro-slider-ansicht'
                    },
                    {
                        text: 'Slide Cover Thumbnails',
                        link: '/de/guides/slide-cover-thumbnails'
                    },
                    {
                        text: 'Individuelle Slide-Templates',
                        link: '/de/guides/individuelle-slide-templates'
                    },
                ]
            },
        ],
        // '/de/examples/': [
        //     {
        //         text: 'Sektion',
        //         collapsed: false,
        //         items: [
        //             {
        //                 text: 'Responsives Raster',
        //             },
        //             {
        //                 text: 'Zeilen zusammenführen',
        //             }
        //         ]
        //     },
        //     {
        //         text: 'Slider & Banner',
        //         collapsed: false,
        //         items: [
        //             {
        //                 text: 'Bild Slider & Banner',
        //             },
        //             {
        //                 text: 'SEO Slider & Banner',
        //             }
        //         ]
        //     }
        // ]
    }
}
