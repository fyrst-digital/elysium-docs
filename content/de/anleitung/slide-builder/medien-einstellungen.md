---
title: "Medien Einstellungen:  Slide Cover und Fokusbild festlegen"
description: In den Medien Einstellungen können Slide Cover oder ein Fokusbild festgelegt werden.
---

# {{ $frontmatter.title }}
{{ $frontmatter.description }}

## Slide Hintergründe als Bild oder Video Cover
Das Slide Cover ist das Hintergrund-Medium eines Slides. Es kann entweder ein Bild oder ein Video sein.  

Das **Cover Bild** kann für Smartphone-, Tablet- und Desktop-Ansicht unterschieden werden. Das Desktop Bild dient als Standard. Gültige Bildformate sind `jpg`, `png`, `webp`, `svg`, `avif`.

Das **Cover Video** ist für alle Ansichten gleich und kann nicht unterschieden werden. Gültige Videoformate sind `mp4` und `webm`.

Für Bild und Video lassen sich **Objekt-Positionen und -Anpassung** festlegen. Diese Einstellungen kommen vor allem zum tragen, wenn das Bild oder Video nicht dem Größenverhätniss des Slides entspricht. So kann das Bild oder Video noch nachjustiert werden.  
Diese Einstellungen können für die Smartphone-, Tablet- und Desktop-Ansicht unterschieden werden.

### Tipp: Bildgrößen als Seitenverhältniss definieren

In modernen Grafikdesign macht es Sinn Bildgrößen für das resposive Web im Seitenverhältniss zu denken. Zum einen funktioniert so die Skalierung für Thumbnail-Varianten besser, CLS (Cumulative Layout Shift) lässt sich einfacher vermeiden und eine konistenz im Shop-Design wird gewährleitet.

Aufgrund dieser Vorteile definieren wir die Größen in Slider und Banner Elementen als Seitenverhältnisse, anstatt festen Pixeln.
Bedenke dies beim erstellen deiner Grafiken.

## Eigenständiges Fokusbild neben Slide-Inhalt

Für einen Slide kann ein Fokusbild festgelegt werden. Das Fokusbild wird als separates Bild neben dem Inhaltsbereich angezeigt.

<Grid>
    <Column :cols="{xs: 12, 'lg': 6, '2xl': 12, '4xl': 6}">
        <Image src="placeholder.svg" alt="Visualisierung des Fokusbild"
        :lazy="false" />
    </Column>
</Grid>

Das Bild lässt sich dabei **auf volle Breite strecken** oder in der **Breite beschränken**. Diese Optionen sind geräteabhängig.