# Sektion auswählen und Blöcke platzieren
- Wähle Elysium Sektion in Sektionsauswahl aus
- Füge, wie gewohnt, einen ersten Block per Drag & Drop hinzu
- Um weitere Blöcke hinzuzufügen, ziehe einen neuen Block über ein bereits bestehenden
- Der neue Block wird immer rechts vom bestehenden Block angefügt.
- Beispiel: Ziehst du einen Text Block über einen Bild Block, fügt sich der Block rechts vom Bild Block an
- Wenn du mehrere Blcke hast fügt sich der neue Block immer an den Block an, auf dem er abgelegt wurde
- Im näcchsten Artikel erfährst du wie du die Blockgröße anpassen kannst

<Grid>
    <Column :cols-md="6" :cols-xl="4">
        <Image src="/images/sektion/admin-auswahl-blank.png" alt="Sektion Auswahl bei leerer Erlebniswelt"
        :sizes="{xs: 300, lg: 600}" />
    </Column>
    <Column :cols-md="6" :cols-xl="4">
        <Image src="/images/sektion/admin-auswahl-wizard.png" alt="Sektion Auswahl beim erstellen einer Erlebniswelt" />
    </Column>
    <Column :cols-md="6" :cols-xl="4">
        <Image src="/images/sektion/admin-auswahl-add.png" alt="Sektion Auswahl beim hinzufügen einer Sektion" />
    </Column>
</Grid>