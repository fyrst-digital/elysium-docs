# Sektion auswählen und Blöcke platzieren
Um einen Block in einer Elysium Sektion zu platzieren, wähle sie zunächst in der Sektionsauswahl aus. Füge dann einen ersten Block per Drag & Drop hinzu. 

<Grid>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="sektion/admin-auswahl-blank.png" alt="Auswahl bei leerer Erlebniswelt"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="sektion/admin-auswahl-wizard.png" alt="Auswahl beim Erstellen einer Erlebniswelt" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="sektion/admin-auswahl-add.png" alt="Auswahl beim Hinzufügen einer Sektion" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
</Grid>

## Weitere Blöcke hinzufügen

Wenn du weitere Blöcke hinzufügen möchtest, ziehe einfach einen neuen Block über einen bereits bestehenden. Der neue Block wird immer rechts vom Bestehenden angefügt. Zum Beispiel: Wenn du einen Textblock über einen Bildblock ziehst, wird der Textblock rechts vom Bildblock platziert. 
Der neue Block fügt sich also immer an den Block an, auf dem er abgelegt wurde. 

<Grid>
    <Column :cols="{xs: 12, lg: 6, '5xl': 4}">
        <Image src="sektion/admin-auswahl-blank.png" alt="Block-Auswahl"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, lg: 6, '5xl': 4}">
        <Image src="sektion/admin-auswahl-wizard.png" alt="Platzieren eines Blocks in der Elysium Sektion" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
</Grid>

## Blöcke über den Block-Navigator verschieben
- Blöcke können über den Block-Navigator strukturell verschoben werden.
- In den Elysium Sektion spezifischen Block Einstellungen kann eine abweichende, optische Reihenfolge festgelegt werden. Dabei bleibt die strukturelle Reihenfolge immer bestehen. Die optische Reihenfolge kann für Smartphone, Tablet, Desktop unterschiedlich festgelegt werden. Die strukturelle Reihenfolge bleibt auf jeder Ansicht gleich. [Details zur optischen Reihenfolge findest du hier](#sektion/block-einstellungen).

Im nächsten Artikel erfährst du, wie du die Blockgröße anpassen kannst.
