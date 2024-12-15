---
title: Allgemeine Einstellungen und Inhalte festlegen
description: In den Allgemeinen Einstellungen lassen sich Inhalte wie Überschrift und Beschreibung, sowie die Verlinkung des Slides festlegen
---

# {{ $frontmatter.title }}
{{ $frontmatter.description }}

## Inhalte eines Slides festlegen

Der **Slide Name** ist das einzige Pflichtfeld in einem Slide. Dieser muss einzigartig sein und dient der internen Bezeichnung des Slides um ihn in der Administration zu identifizieren. So kannst du deine Slides in der Übersicht, Suche oder im Slider Einkaufswelt-Element schneller finden.

Eine optimale Bezeichnung ist in Kleinbuchstaben und getrennt durch Bindestriche, also ohne Leerzeichen. Zum Beispiel: `mein-erster-slide`oder `summer-sale-2023`.

Es können verschiedene Optionen für die **Überschrift des Slides** festgelegt werden. Es kann die Textfarbe und das HTML-Element festgelegt werden. Außerdem kannst du die Schriftgröße für die Smartphone, Tablet und Desktop Ansicht im Storefront festlegen.  
Außerdem können Im Inhaltsfeld einfache HTML-Tags geschrieben werden, welche dann im Storefront entsprechend ausgegeben werden. Zulässige Tags sind `<br>`, `<b>`, `<i>`, `<u>` und `<strong>`.  

Ebenso kann eine **Beschreibung des Slides**, in der HTML Markup hinterlegt werden kann, festgelegt werden. Hier können zusätzlich noch Textfarbe und Schriftgröße eingestellt werden. 

Du kannst eine oder mehrere, durch Leerzeichen getrennte, **CSS Klassen** festlegen und deinen Slide so noch weiter individualisieren.

## Verlinkung eines Slides festlegen

Aktuell lässt sich ein Slide individuell oder mit einem Produkt verknüpfen.

Bei einer **individuellen Verlinkung** kannst du eine entsprechende Adresse festlegen. Dies kann ein Anker (`#ein-seitenabschnitt`), eine relative ('`/eine-kategorie`') oder eine absolute (`https://beispiel.de`) Verlinkung sein.

Bei einer **Produkt Verlinkung** kannst du ein entsprechendes Produkt auswählen. Dabei wird der Produktname als Slide-Überschrift und die Produktbeschreibung als Slide-Beschreibung verwendet. Dies gilt aber nur wenn die entsprechenden Felder im Slide nicht befüllt sind.  
Außerdem wird das Produktvorschaubild, falls hinterlegt, als Slide Fokusbild genutzt. Dies kann mit der Option **Produktbild anzeigen** ein- oder ausgeblendet werden.

Es kann ein Button angezeigt werden, wenn das Feld **Buttonbeschriftung** befüllt ist. Dabei kann das **Erscheinungbild** und die **Größe** des Buttons eingestellt werden.

Außerdem kann die Verlinkung **In einem neuen Fenster** geöffnet oder die **Verlinkung als Overlay** dargestellt werden. Bei aktiven Overlay wird der gesamte Slide verlinkt und der Button ausgeblendet.