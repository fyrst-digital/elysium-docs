export default {
    de: {
        '/de/documentation/': [
            {
                text: 'Anleitung',
                collapsed: false,
                items: [
                    { text: 'Einrichtung', link: '/de/documentation/setup' },
                    { 
                        text: 'Slide Elemente', 
                        link: '/de/documentation/slide-elements/', 
                        collapsed: true,
                        items: [
                            { text: 'Inhalt', link: '/de/documentation/slide-elements/content' },
                            { text: 'Anzeige', link: '/de/documentation/slide-elements/display' },
                            { text: 'Erweitert', link: '/de/documentation/slide-elements/advanced' }
                        ]
                    },
                    { 
                        text: 'Erlebniswelten Slider',
                        link: '/de/documentation/cms-slider/',
                        collapsed: true,
                        items: [
                            { text: 'Inhalt', link: '/de/documentation/cms-slider/content' },
                            { text: 'Einstellungen', link: '/de/documentation/cms-slider/settings' },
                            { text: 'Größen', link: '/de/documentation/cms-slider/sizing' },
                            { text: 'Navigation', link: '/de/documentation/cms-slider/navigation' },
                            { text: 'Pfeile', link: '/de/documentation/cms-slider/arrows' }
                        ]
                    }
                ]
            },
            {
                text: 'Guides',
                collapsed: false,
                items: [
                    { text: 'Slider-Größe', link: '/de/documentation/slider-sizing' },
                    { text: 'Mehrere Slides pro Ansicht', link: '/de/documentation/multi-slides-per-view' },
                    { text: 'Slide Cover Thumbnails', link: '/de/documentation/slide-cover-thumbnails' },
                    { text: 'Individuelle Slide-Templates', link: '/de/documentation/custom-slide-templates' },
                    { text: 'Update Hinweise', link: '/de/documentation/update-notes' }
                ]
            },
            {
                text: 'Referenzen',
                collapsed: false,
                items: [
                    { text: 'CSS Variablen', link: '/de/documentation/reference/css-variables' }
                ]
            }
        ],
    },
    en: {
        '/documentation/': [
            {
                text: 'Manual',
                collapsed: false,
                items: [
                    { 
                        text: 'Setup', 
                        link: '/documentation/setup'
                    },
                    { 
                        text: 'Slide Elements', 
                        link: '/documentation/slide-elements/', 
                        collapsed: true,
                        items: [
                            {
                            text: 'Content',
                            link: '/documentation/slide-elements/content' 
                            },
                            {
                            text: 'Display',
                            link: '/documentation/slide-elements/display' 
                            },
                            {
                            text: 'Advanced',
                            link: '/documentation/slide-elements/advanced' 
                            }
                        ]
                    },
                    { 
                        text: 'Shopping expirience Slider',
                        link: '/documentation/cms-slider/',
                        collapsed: true,
                        items: [
                            {
                            text: 'Content',
                            link: '/documentation/cms-slider/content' 
                            },
                            {
                            text: 'Settings',
                            link: '/documentation/cms-slider/settings' 
                            },
                            {
                            text: 'Sizing',
                            link: '/documentation/cms-slider/sizing' 
                            },
                            {
                            text: 'Navigation',
                            link: '/documentation/cms-slider/navigation' 
                            },
                            {
                            text: 'Arrows',
                            link: '/documentation/cms-slider/arrows' 
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Guides',
                collapsed: false,
                items: [
                    { text: 'Slider Sizing', link: '/documentation/slider-sizing' },
                    { text: 'Multiple Slides per View', link: '/documentation/multi-slides-per-view' },
                    { text: 'Custom Slide Templates', link: '/documentation/custom-slide-templates' },
                    { text: 'Update Notes', link: '/documentation/update-notes' }
                ]
            },
            {
                text: 'References',
                collapsed: true,
                items: [
                    { text: 'CSS Variables', link: '/documentation/reference/css-variables' }
                ]
            }
        ],
    }
}