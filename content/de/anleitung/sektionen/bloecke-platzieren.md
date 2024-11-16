# Sektion auswählen und Blöcke platzieren
Um einen Block in einer Elysium Sektion zu platzieren, wähle sie zunächst in der Sektionsauswahl aus. Füge dann einen ersten Block per Drag & Drop hinzu. 

<Grid>
    <Column :cols="{xs: 12, lg: 6, '5xl': 4}">
        <Image src="sektion/admin-auswahl-blank.png" alt="Auswahl bei leerer Erlebniswelt"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, lg: 6, '5xl': 4}">
        <Image src="sektion/admin-auswahl-wizard.png" alt="Auswahl beim Erstellen einer Erlebniswelt" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
    <Column :cols="{xs: 12, lg: 6, '5xl': 4}">
        <Image src="sektion/admin-auswahl-add.png" alt="Auswahl beim Hinzufügen einer Sektion" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
</Grid>

Wenn du weitere Blöcke hinzufügen möchtest, ziehe einfach einen neuen Block über einen bereits bestehenden Block. Der neue Block wird immer rechts vom bestehenden Block angefügt. Zum Beispiel: Wenn du einen Textblock über einen Bildblock ziehst, wird der Textblock rechts vom Bildblock platziert. 
Der neue Block fügt sich also immer an den Block an, auf dem er abgelegt wurde. 

Im nächsten Artikel erfährst du, wie du die Blockgröße anpassen kannst.
