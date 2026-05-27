# Einrichtung und erste Schritte

Nachdem du das Plugin installiert und aktiviert hast, findest du im **Menüpunkt Inhalte den neuen Eintrag Slide Builder**. Hier werden alle Slides verwaltet. Du kannst neue Slides erstellen, duplizieren oder nicht mehr benötigte löschen. Hast du einen oder mehrere Slides erstellt, kannst du diese im Elysium Slider oder Banner Erlebniswelten Element festlegen.

<Grid>
    <Column :cols="{xs: 12, '6xl': 10}" :col-start="{'6xl': 2}">
        <Image src="slide-builder/de-admin-slide-builder-overview.png" alt="Slide Builder Übersicht"
        :sizes="{xs: 200, lg: 600, '6xl': 800}" :lazy="false" />
    </Column>
</Grid>

## Slide erstellen

In der Slide Builder Übersicht kannst du einzelne Slides erstellen, kopieren, bearbeiten oder löschen. Fangen wir an und erstellen unseren ersten Slide.

::: info Standardsprache
Der Slide wird immer in deiner Standardsprache erstellt. Willst du den Slide in einer anderen Sprache pflegen, erstelle und speichere ihn zuerst in deiner Standardsprache.
:::

Um einen Slide hinzuzufügen, klicke oben rechts auf den Button Slide erstellen. So gelangst du zur Detailansicht und kannst den Slide pflegen. In den nachfolgenden Seiten findest du mehr Details zu den Einstellungsmöglichkeiten.

::: tip Slide-Name Validierung
Seit Version 4.7.0 werden Slide-Namen validiert. Es sind nur Buchstaben, Zahlen, Leerzeichen und Bindestriche erlaubt. Leerzeichen am Anfang oder Ende werden abgelehnt.
:::

Nachdem du einen Slide angelegt hast, kannst du ihn im Elysium Slider oder Banner Element einer Erlebniswelt verknüpfen.

::: tip Elysium Sektion zur Gestaltung und Anordnung
Nutze zur Aufbereitung eines Erlebniswelten Layouts auch die neue Elysium Sektion (ab Version 3.6). Sie bietet viele Möglichkeiten zur responsiven und individuellen Gestaltung.
:::

## Live-Vorschau

Seit Version 4.8.0 bietet der Slide Builder eine Live-Vorschau. Während du einen Slide bearbeitest, werden deine Änderungen sofort in einer realen Storefront-Vorschau angezeigt. So siehst du das Ergebnis sofort, ohne speichern und in die Storefront wechseln zu müssen.

::: tip Live-Vorschau Daten
Wenn du zum ersten Mal eine Produkt- oder Kategorieverlinkung festlegst, lädt die Live-Vorschau automatisch den entsprechenden Namen, die Beschreibung und die Bilddaten.
:::

## Slide in Erlebniswelt-Elementen verknüpfen

In einem Erlebniswelten Layout kannst du unter der Block Gruppe **Elysium Blöcke** das Slider oder Banner Element auswählen und wie gewohnt, per Drag & Drop, an die gewünschte Position ziehen.

Nutze für die Gestaltung und Anordung der Elemente die neue Elysium Sektion. [Mehr dazu findest du hier.](/v4/de/anleitung/sektionen/bloecke-platzieren)

::: warning Zwei Spalten Block wird ab Version 4.0 entfernt
Der zwei Spalten Block ist ab Version 3.6 als veraltet markiert und wird mit **Version 4.0** vollständig entfernt. Achte vor einem Update darauf diese Blöcke in den Erlebniswelten zu entfernen, ansonsten werden diese Inhalte nicht mehr im Storefront angezeigt.
:::

<Grid>
    <Column :cols="{xs: 12, '6xl': 10}" :col-start="{'6xl': 2}">
        <Image src="section/de-admin-cms-block-selection.png" alt="Elysium Elemente in der Erlebniswelten Block-Auswahl"
        :sizes="{xs: 200, lg: 600, '6xl': 800}" :lazy="false" />
    </Column>
</Grid>