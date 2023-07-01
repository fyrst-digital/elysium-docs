# Inhalt

## Allgemeine Angaben

Hier findest du alle allgemeinen Einstellungen der Slides.

### Slide Name (Pflichtfeld)

**Dieser Name muss einzigartig sein** und dient der internen Bezeichnung des Slides um ihn in der Administration zu identifizieren. So kannst du deine Slides in der Übersicht, Suche oder im Slider Einkaufswelt-Element schneller finden. Diese Angabe ist das einzige Pflichtfeld.  

Eine Best Practice Bezeichnung ist in Kleinbuchstaben und ohne Leerzeichen. Also beispielsweise `mein-erster-slide` oder `summer-sale-2023`

### Überschrift

Legt die Überschrift des Slides fest, welche im Frontend als erstes angezeigt wird. Für die Überschrift kannst du auch eine Textfarbe und ein HTML-Element festlegen. Die Schriftgröße wird automatisch, je nach Bildschirmbreite, skaliert. Die Schriftgröße kann durch die Anpassung folgender CSS Variablen angepasst werden:  

**`--bc-esld-headline-font-size-min`** <small>Standard: 2rem</small>  
Gibt die minimale Schriftgröße an  

**`--bc-esld-headline-font-size-max`** <small>Standard: 3rem</small>  
Gibt die maximale Schriftgröße an  

**`--bc-esld-headline-font-size-scale`** <small>Standard: 2vw</small>  
Gibt den Grad der automatischen Skalierung an  

### Kurzbeschreibung

Legt die kurzbeschreibung des Slides fest, welcher im Theme unterhalb der Überschrift angezeigt wird. Da dies ein HTML-Feld ist kannst du auch einfaches HTML hinterlegen oder die Textfarbe anpassen. Die Schriftgröße wird automatisch, je nach Bildschirmbreite, skaliert. Die Schriftgröße kann durch die Anpassung folgender CSS Variablen angepasst werden:  

**`--bc-esld-description-font-size-min`** <small>Standard: 2rem</small>  
Gibt die minimale Schriftgröße an  

**`--bc-esld-description-font-size-max`** <small>Standard: 3rem</small>  
Gibt die maximale Schriftgröße an  

**`--bc-esld-description-font-size-scale`** <small>Standard: 2vw</small>  
Gibt den Grad der automatischen Skalierung an  

### Slide Hintergrundfarbe

Legt eine Hintergrundfarbe für den Slide fest.

### CSS Klasse

Du kannst für den Slide eine oder mehrere (durch Leerzeichen getrennt) CSS Klassen festlegen und deinen Slide so noch weiter individualisieren.

## Verlinkung

Hier findest du alle relevanten Einstellungen für die Verlinkung des Slides.

### Slide URL

Gibt die URL des Slides an. Dies kann sowohl eine absolute `https://my-awesome-shop.com/category` als auch eine relative `/my-awesome-product` URL sein. Dieses Feld ist Sprachabhängig. Du kannst also für verschiedene Sprachen unterschiedliche URLs festlegen.

### URL Ziel

Lege fest ob die Verlinkung Intern (im selben Tab/Fenster) oder Extern (im neuen Tab/Fenster) geöffnet werden soll.

### URL Overlay

Bei aktiven URL Overlay wir der gesamte Slide als Verlinkungsfläche genutzt und der Button automatisch ausgeblendet.

### Button Beschriftung

Legt die Beschriftung des Buttons fest. Die Schriftgröße wird automatisch, je nach Bildschirmbreite, skaliert. Die Schriftgröße kann durch die Anpassung folgender CSS Variablen angepasst werden:  

**`--bc-esld-button-font-size-min`** <small>Standard: 2rem</small>  
Gibt die minimale Schriftgröße an  

**`--bc-esld-button-font-size-max`** <small>Standard: 3rem</small>  
Gibt die maximale Schriftgröße an  

**`--bc-esld-button-font-size-scale`** <small>Standard: 2vw</small>  
Gibt den Grad der automatischen Skalierung an  

### Button Farbgebung

Legt die Farbgebung des Buttons fest. Die Farben orientieren sich an den Einstellungen des Themes.

## Medien

Hier kannst du Medien für deinen Slide festlegen. Die Slides sind so konzipiert dass nur zwischen Portrait- und Landschafts-Modus, und nicht einzelnen Theme-Breakpoints, unterschieden wird. Wir glauben dass ist die optimale Balance zwischen Anzeigekontrolle und unkomplizierter Konfiguration.

::: info Landscape Modus
Der Landscape-Modus wird verwendet wenn die Bildschirmbreite das Seitenverhältnis von 1:1 überschreitet. Typischerweise ist das bei der Desktopansicht oder Smartphones/Tablets im "Querformat" der Fall.
:::

::: info Portrait Modus
Der Portrait-Modus wird verwendet wenn die Bildschirmhöhe das Seitenverhältnis von 1:1 überschreitet. Typischerweise ist das bei Smartphones/Tablets im "Hochformat" der Fall.
:::

### Slide Cover

Definiert das Hintergrundbild des Slides im Landscape- und Portrait-Modus. Für eine optimale responsive Darstellung empfehlen wir ein optimiertes Seitenverhältnis des Bildes für den jeweiligen Modus zu erstellen. Weitere Hinweise zum Seitenverhältnis und Slider-Größe [findest du hier](/de/documentation/slider-sizing).  
Neben Bildern kannst du auch ein Video als Slide Cover hochladen. Das Portrait Medium wird nicht genutzt sobald ein Video im Slide-Cover Landscape festgelegt wurde.

::: info Unterstützte Datei Formate
Für Bilder werden die Formate **jpg, png, webp** und für Videos werden **mp4 und webm** unterstützt.
:::

## Zusatzfelder

Du kannst einem Slide auch Zusatzfelder zuweisen. Wenn du einen neuen Slide erstellst speichere diesen zuerst, damit du auf die Zusatzfelder zugreifen kannst. Um in Shopware Zusatzfelder anzulegen kannst du der offiziellen [Shopware Dokumentation](https://docs.shopware.com/de/shopware-6-de/einstellungen/zusatzfelder) folgen.

::: info Hinweis
Zusatzfelder müssen manuell mit dem Slide Template verknüpft werden und setzen daher Kentnisse im Shopware Templating/Twig voraus. Hier bietet es sich auch an [individuelle Slide-Templates](/de/documentation/custom-slide-templates) zu erstellen.
:::