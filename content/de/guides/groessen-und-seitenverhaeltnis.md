---
title: "Größen und Seitenverhätnis"
description: "Dieser Guide bringt dir das einstellen von Größen als Seitenverhältnis näher"
---

## Anpassung der Slider-Größen
Für das bestmögliche Verhalten im responsiven Design, arbeiten sämtliche Elysium Elemente mit Seitenverhältnissen, statt mit statischen Pixel-Werten. So ist eine konsistente Skalierung über alle Bildschirmgrößen möglich, auch unabhängig von verschiedenen Thumbnailgrößen.

<Grid>
    <Column :cols="{xs: 12, md: 6, '2xl': 12, '4xl': 6}">
        <Image
            src="/screenshots/de/admin-cms-setting-sizing.png" 
            alt="Größen Einstellungen im Slider Element"
            :caption="true" />
    </Column>
    <Column :cols="{xs: 12, md: 6, '2xl': 12, '4xl': 6}">
        <Image
            src="/screenshots/de/admin-cms-setting-sizing.png" 
            alt="Größen Einstellungen im Banner Element"
            :caption="true" />
    </Column>
</Grid>

Die Seitenverhätlnise für Slider und Banner Elemente lässt sich jeweils für die Smartphone, Tablet und Desktop Ansicht festlegen.  
Die verwendeten Theme-Breakpoints können Global in den Elysium Einstellungen angepasst werden. 

In der Elysium Sektion lassen sich alternative Theme-Breakpoints festlegen. Diese funktionieren unabhängigen von den Globalen Breakpoints und sind jeweils für die betroffene Sektion gültig.

<Grid>
    <Column :cols="{xs: 12, md: 6, '2xl': 12, '4xl': 6}">
        <Image
            src="/screenshots/de/admin-cms-setting-sizing.png" 
            alt="Theme-Breakpoints in den Elysium Einstellungen"
            :caption="true" />
    </Column>
    <Column :cols="{xs: 12, md: 6, '2xl': 12, '4xl': 6}">
        <Image
            src="/screenshots/de/admin-cms-setting-sizing.png" 
            alt="Theme-Breakpoints in einer Elysium Sektion"
            :caption="true" />
    </Column>
</Grid>

::: info Hinweis für Entwickler
Intern wird die Twig Funktion `theme_config('breakpoint.<viewport>')` genutzt
:::

## Maximale Höhe
Du kannst in Slider und Banner Elementen auch eine maximale Höhe in `px` festlegen. Das ist sinnvoll wenn du zum Beispiel ein Erlebniswelten Layout nutzt welches über die volle Bildschirmbreite geht. Das Element wird auf diese maximale Höhe begrenzt.  
Wenn du eine maximale Höhe festlegen möchtest, die für alle Bildschirmgrößen gilt, kannst du das in der kleinsten Bildschirmgröße zu tun. Standardgemäß ist das **Smartphone**.
