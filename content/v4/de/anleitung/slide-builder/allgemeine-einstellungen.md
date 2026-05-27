---
title: Allgemeine Einstellungen und Inhalte festlegen
description: In den Allgemeinen Einstellungen lassen sich Inhalte wie Überschrift und Beschreibung, sowie die Verlinkung des Slides festlegen
---

## Inhalte eines Slides festlegen

Der **Slide Name** ist das einzige Pflichtfeld in einem Slide. Dieser muss einzigartig sein und dient der internen Bezeichnung des Slides um ihn in der Administration zu identifizieren. So kannst du deine Slides in der Übersicht, Suche oder im Slider Einkaufswelt-Element schneller finden.

Eine optimale Bezeichnung ist in Kleinbuchstaben und getrennt durch Bindestriche, also ohne Leerzeichen. Zum Beispiel: `mein-erster-slide` oder `summer-sale-2023`.

Es können verschiedene Optionen für die **Überschrift des Slides** festgelegt werden. Es können die Textfarbe und das **HTML-Element** (`div`, `h1`–`h6`) festgelegt werden. Außerdem kannst du die Schriftgröße für die Smartphone-, Tablet- und Desktop-Ansicht im Storefront festlegen. Die Überschrift kann auch als **visuell verborgen** (`sr-only`) markiert werden, sodass sie nur für Screenreader wahrnehmbar ist.

Außerdem können im Inhaltsfeld einfache HTML-Tags geschrieben werden, welche dann im Storefront entsprechend ausgegeben werden. Zulässige Tags sind `<br>`, `<b>`, `<i>`, `<u>` und `<strong>`.  

Ebenso kann eine **Beschreibung des Slides**, in der HTML Markup hinterlegt werden kann, festgelegt werden. Hier können zusätzlich noch Textfarbe und Schriftgröße eingestellt werden. 

Du kannst eine oder mehrere, durch Leerzeichen getrennte, **CSS Klassen** festlegen und deinen Slide so noch weiter individualisieren.

## Verlinkung eines Slides festlegen

Ein Slide lässt sich individuell, mit einem Produkt oder mit einer Kategorie verknüpfen.

Bei einer **individuellen Verlinkung** kannst du eine entsprechende Adresse festlegen. Dies kann ein Anker (`#ein-seitenabschnitt`), eine relative ('`/eine-kategorie`') oder eine absolute (`https://beispiel.de`) Verlinkung sein.

Bei einer **Produktverlinkung** kannst du ein entsprechendes Produkt auswählen. Dabei wird der Produktname als Slide-Überschrift und die Produktbeschreibung als Slide-Beschreibung verwendet. Dies gilt aber nur, wenn die entsprechenden Felder im Slide nicht befüllt sind.  
Außerdem wird das Produktvorschaubild, falls hinterlegt, als Slide Fokusbild genutzt. Dies kann mit der Option **Produktbild anzeigen** ein- oder ausgeblendet werden. Du kannst außerdem steuern, ob der Produkt**name** und die **Beschreibung** auf dem Slide angezeigt werden.

Bei einer **Kategorieverlinkung** (seit 4.8.0) kannst du eine Kategorie auswählen. Ähnlich wie bei der Produktverlinkung können der Kategoriename, die Beschreibung und das Bild auf dem Slide verwendet werden. Du kannst steuern, ob das Kategorie**bild**, der **Name** und die **Beschreibung** angezeigt werden.

Es kann ein Button angezeigt werden, wenn das Feld **Buttonbeschriftung** befüllt ist. Dabei können das **Erscheinungsbild** (primary, secondary, outline, etc.) und die **Größe** (klein, mittel, groß) des Buttons eingestellt werden.

Außerdem kann die Verlinkung **In einem neuen Fenster** geöffnet oder der gesamte Slide als **Overlay** verlinkt werden. Bei aktivem Overlay wird der gesamte Slide verlinkt und der Button ausgeblendet.

::: info Zeitgesteuerte Slides
Wenn die Technische Vorschau-Funktion "Zeitsteuerung" aktiviert ist, kannst du außerdem die Felder **Aktiv von** und **Aktiv bis** festlegen, um zu planen, wann der Slide im Storefront angezeigt werden soll.
:::