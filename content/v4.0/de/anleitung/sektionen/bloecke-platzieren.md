# Sektion auswählen und Blöcke platzieren
Um einen Block in einer Elysium Sektion zu platzieren, wähle sie zunächst in der Sektionsauswahl aus. Füge dann einen ersten Block per Drag & Drop hinzu. 

<Grid>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/admin-auswahl-blank.png" alt="Auswahl bei leerer Erlebniswelt"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/admin-auswahl-wizard.png" alt="Auswahl beim Erstellen einer Erlebniswelt" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/admin-auswahl-add.png" alt="Auswahl beim Hinzufügen einer Sektion" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
</Grid>

## Weitere Blöcke hinzufügen
Wenn du weitere Blöcke hinzufügen möchtest, ziehe einfach einen neuen Block über einen bereits bestehenden. Der neue Block wird immer rechts vom Bestehenden angefügt. Zum Beispiel: Wenn du einen Textblock über einen Bildblock ziehst, wird der Textblock rechts vom Bildblock platziert. 
Der neue Block fügt sich also immer an den Block an, auf dem er abgelegt wurde. 

<Grid>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-block-selection.png" alt="Block-Auswahl"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-elysium-section-add-block.png" alt="Platzieren eines Blocks in der Elysium Sektion" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
</Grid>

## Blöcke über den Block-Navigator verschieben
Blöcke können über den Block-Navigator strukturell verschoben werden. Dies ermöglicht es, die Anordnung der Blöcke zu ändern.

In den Elysium spezifischen Block Einstellungen kann eine abweichende, optische Reihenfolge festgelegt werden. Die optische Reihenfolge kann für Smartphone, Tablet und Desktop unterschieden werden. Die strukturelle Anordnung bleibt auf jeder Ansicht gleich. 
<!-- @todo(#4) [Details zur optischen Reihenfolge findest du hier](#todo-url). -->

<Grid>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-block-navigator.png" alt="Block-Navigator"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-elysium-section-order-phone.png" alt="Optische Reihenfolge auf Smartphone"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-elysium-section-order-desktop.png" alt="Optische Reihenfolge auf Desktop"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
</Grid>

Im nächsten Artikel erfährst du, wie du die Blockgröße anpassen kannst.
