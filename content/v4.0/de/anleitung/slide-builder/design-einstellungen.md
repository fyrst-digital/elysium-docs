---
title: Slide-Design und Erscheinungsbild anpassen
description: In den Design-Einstellungen kann das Erscheinungsbild des Slides angepasst werden.
---

## Gesamten Slide anpassen
Unter **Slide** kann das Design des gesamten Slides angepasst werden.

<Grid>
    <Column :cols="{xs: 12, 'lg': 10, '2xl': 12, '4xl': 10}" :col-start="{'lg': 2, '4xl': 2}">
        <Image src="slide-builder/visualize-slide.svg" alt="Visualisierung des gesamten Slides"
        :lazy="false" aspect-ratio="2 / 1" />
    </Column>
</Grid>

Es können eine **Hintergrundfarbe** sowie ein **Farbverlauf** festgelegt werden. Dabei wird das Slide-Cover priorisiert. Wenn also ein Slide-Cover für die entsprechende Geräteansicht eingestellt ist, sind die Hintergrundfarbe und der Farbverlauf nicht ersichtlich.

Es lässt sich auch der innere **Abstand des Slides** (Horizontal und Vertikal), sowie eine Kantenrundung einstellen. Diese Einstellungen sind geräteabhängig.

Unter **Ausrichtung** lässt sich die Ausrichtung des inneren Containers bestimmen. Der innere Container umschließt das Inhaltselement und das Fokusbild.

## Inneren Container anpassen
Unter **Container** kann das Design des inneren Containers angepasst werden. Der innere Container umschließt das Inhaltselement und das Fokusbild.

<Grid>
    <Column :cols="{xs: 12, 'lg': 10, '2xl': 12, '4xl': 10}" :col-start="{'lg': 2, '4xl': 2}">
        <Image src="slide-builder/visualize-container.svg" alt="Visualisierung des inneren Container"
        :lazy="false" aspect-ratio="2 / 1" />
    </Column>
</Grid>

Die Option **Elemente untereinander anzeigen** legt fest ob die Elemente innerhalb des Container untereinander angezeigt werden sollen oder nicht. Diese Einstellung ist geräteabhängig.

Die **Layout Reihenfolge** legt fest in welcher Reihenfolge das Inhaltselement und das Fokusbild angezeigt werden sollen. Dies hat nur einen Effekt wenn ein Fokusbild hinterlegt ist. Ausßerdem kann dem Container eine **Hintergrundfarbe** zugewiesen werden und er lässt sich in der **Breite beschränken**.

Es lassen sich **Abstände und Kantenrundung**, sowie die **Ausrichtung** des Containers festlegen. In den Abständen lässt sich auch **Zwischenraum** zwischen dem Inhaltselement und dem Fokusbild festlegen. Die Kantenrundung hat nur einen sichtbaren Effekt wenn dem Container eine Hintergrundfarbe zugewiesen wurde.  
Die Ausrichtung beeinflusst die Ausrichtung der inneren Containerelemente, also Inhaltselement und Fokusbild. Wenn die Elemente untereinander angezeigt werden, werden diese Einstellungen umgekehrt.

## Inhaltselement anpassen
Das Inhaltselement umschließt Überschrift, Beschreibung und Button des Slides.

<Grid>
    <Column :cols="{xs: 12, 'lg': 10, '2xl': 12, '4xl': 10}" :col-start="{'lg': 2, '4xl': 2}">
        <Image src="slide-builder/visualize-content.svg" alt="Visualisierung des Inhaltselements"
        :lazy="false" aspect-ratio="2 / 1" />
    </Column>
</Grid>

Es lässt sich in der **Breite beschränken** und die **inneren Abstände** können angepasst werden. Außerdem lässt sich die **Textausrichtung** festlegen.