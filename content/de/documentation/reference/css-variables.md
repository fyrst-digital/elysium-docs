---
title: "CSS Variablen Referenz und Anpassung"
description: "Hier findest du eine Übersicht über verwendete CSS Variablen und wie du diese anspassen kannst"
---

# CSS Variablen Referenz und Anpassung
Hier findest du eine Übersicht über die verwendete CSS Variablen, die du im eigenen CSS oder SCSS verwenden und anpassen kannst. Wir verwenden für CSS Variablen **keine** `:root` Definitionen. Sämtliche Variablen sind an die Slide(r) spezifischen Klassen gebunden.

::: warning Hinweis
Diese CSS Variablen sind ab Version 1.5.2 gültig.
:::

::: info Dynamische Skalierung
Bei der dynamischen Skalierung wird die Anzeige, unter Verwendung der CSS Funktion `clamp()`, auf die verschiedenen Bildschirmgrößen skaliert. Dabei wird einmalig ein minimal `min`, maximal `max` und optimal `scale` Wert definiert. Diese definierten Werte werden über alle Bildschirmgrößen hinweg skaliert. Es werden keine statischen Werte pro breakpoint benötigt.
:::

## Slide Variablen
Dies sind die Standard-Variablen der CSS Klasse `.cms-element-elysium-slide`. Teile dieser Variablen werden durch Benutzer definierte Konfigurationen im Template überschrieben. Zum Beispiel `padding`, `aspect-ratio` oder `max-height`. Für eine finale Überschreibung der Variablen in eigenen CSS / SCSS Dateien empfiehlt sich daher die `!important` Anweisung.

``` scss
.cms-element-elysium-slide {
    --padding-y: 1.5rem;
    --padding-x: 1rem;
    --aspect-ratio-w: 4;
    --aspect-ratio-h: 3;
    --max-height: none;
    --text-color: #ffffff;

    // Dynamische Skalierung (experimentel, findet erst ab Version 1.6.0 Verwendung)
    --padding-x-min: 1rem; 
    --padding-x-max: 8rem;
    --padding-x-scale: 6vw; 
    --padding-y-min: 2rem;
    --padding-y-max: 6rem;
    --padding-y-scale: 6vw; 

    @include media-breakpoint-up( sm ) {
        --aspect-ratio-w: 5;
        --aspect-ratio-h: 3;
    }

    @include media-breakpoint-up( md ) {
        --padding-y: 2rem;
        --padding-x: 3rem;
    }

    @include media-breakpoint-up( lg ) {
        --aspect-ratio-w: 2;
        --aspect-ratio-h: 1;
    }

    @include media-breakpoint-up( xl ) {
        --padding-y: 4rem;
        --padding-x: 6rem;
        --aspect-ratio-w: 12;
        --aspect-ratio-h: 5;
    }

    @include media-breakpoint-up( xxl ) {
        --aspect-ratio-w: 16;
        --aspect-ratio-h: 7;
    }
}
```

### Slide Überschrift
Die Schriftgröße macht Gebrauch von dynamischer Skalierung. 

``` scss
.cms-element-elysium-slide__title {
    --font-size-min: 1.5rem;
    --font-size-max: 3rem;
    --font-size-scale: 4vw;
    --margin-b: 1rem;
}

```

### Slide Beschreibung
Die Schriftgröße macht Gebrauch von dynamischer Skalierung. 

``` scss
.cms-element-elysium-slide__description {
    --font-size-min: 1rem;
    --font-size-max: 1.5rem;
    --font-size-scale: 2vw;
    --margin-b: 1rem;
}
```

### Slide Button
Die Schriftgröße macht Gebrauch von dynamischer Skalierung. 

``` scss
.cms-element-elysium-slide__cta-button {
    --font-size-min: 1rem;
    --font-size-max: 1.25rem;
    --font-size-scale: 2vw;
}
```

## Variablen überschreiben
Du kannst Variablen Global oder pro Slide überschreiben. Dies kanns du in jeder CSS oder SCSS Datei tun welche ich Storefront Theme eingebunden wird. Oder auch direkt im Template über eine `<style></style>` Anweisung. Hier ein Beispiel wie sich die Schriftgröße der Slide Überschrift Global anpassen lässt:

### Globale Überschreibung
``` css
.cms-element-elysium-slide__title {
    --font-size-max: 3.5rem;
    --font-size-scale: 5vw;
}
```
Dies ändert die maximale Schriftgröße, was sich insbesondere auf größeren Bildschirmen bemerkbar macht.  

### Überschreibung pro Slide
Um CSS Variablen pro Slide zu überschreiben, musst du die Slide CSS Klasse samt Slide ID voranstellen:
``` css
[data-elysium-slide-id="<slide-id>"] .cms-element-elysium-slide__title {
    --font-size-max: 3.5rem;
    --font-size-scale: 5vw;
}
```
`slide-id` muss hierbei durch die tatsächliche Slide ID (Zum Beispiel 018a98a675fd7965856511b4e9155bb4) ersetzt werden. Diese ist entweder im Quelltext ersichtlich oder in der Admin-URL wenn du dich im entsprechenden Slide befindest. Zum Beispiel `https://example.com/admin#/blur/elysium/slides/detail/018a98a675fd7965856511b4e9155bb4`  
Ab Version 1.6.0 wird die Slide-ID Außerdem direkt in der Admin Oberfläche ersichtlich sein.  

### Überschreibung pro Slider
Die Überschreibung pro Slide gilt über alle Slider hinweg. Möchtest du alle Überschrift Größen in einem speziellen Slider überschreiben, kannst du das anhand der Slider ID tun. Stelle dazu die Slider CSS ID samt Slider ID (CMS Element ID) voran:
``` css
#elysiumSlider-<slider-id> .cms-element-elysium-slide__title {
    --font-size-max: 3.5rem;
    --font-size-scale: 5vw;
}
```
So wird für jeden Slide innerhalb dieses Sliders die Schriftgröße der Überschrift angepasst. Die `<slider-id>` findet sich aktuell nur im Quelltext. Ab Version 1.6.0 soll die Slider-ID (CMS Element ID) auch direkt in der Admin Oberfläche ersichtlich sein.  

### Kombination beider Ansätze 
Es ist auch möglich Variablen in einem spezifischen Slide pro Slider zu überschreiben und so beide Ansätze zu kombinieren:
``` css
#elysiumSlider-<slider-id> [data-elysium-slide-id="<slide-id>"] .cms-element-elysium-slide__title {
    --font-size-max: 3.5rem;
    --font-size-scale: 5vw;
}
```
Es wird nur für diesen einen Slide in diesem CMS Slider Element die Schriftgröße geändert.