---
title: "Slides durch eigene Templates und Zusatzfelder erweitern"
description: Hier finden sich erweiterte Einstellungen für fortgeschrittene Nutzer oder Entwickler.
---

# {{ $frontmatter.title }}
{{ $frontmatter.description }}

## Eigene Template Datei festlegen

Hier kann eine eigene Twig Datei festgelegt werden. Wenn du also Kenntnisse in Twig hast kannst du dir so individuelle Templates für deine Slides erstellen, welche nach belieben wiederverwendet werden können.

Hast du eine Twig Datei eingetragen, wird dir darunter ein Pfad angezeigt, in dem die Datei angelegt werden muss. Das machst du am besten innerhalb eines Custom Themes oder eines Plugins um Updatesicher zu bleiben. Nicht gefundene Template Dateien werden ignoriert, eine Fehlerausgabe wird also unterdrückt.

## Zusatzfelder anlegen und verknüpfen

Du kannst einem Slide auch Zusatzfelder zuweisen. Wenn du einen neuen Slide erstellst speichere diesen zuerst, damit du auf die Zusatzfelder zugreifen kannst. Um in Shopware Zusatzfelder anzulegen kannst du der [offiziellen Shopware Dokumentation](https://docs.shopware.com/de/shopware-6-de/einstellungen/zusatzfelder) folgen.

::: tip 
Zusatzfelder müssen manuell mit dem Slide Template verknüpft werden und setzen daher Kentnisse im Shopware Templating/Twig voraus. Hier bietet es sich auch an eine **eigene Template Datei** zu erstellen.
:::