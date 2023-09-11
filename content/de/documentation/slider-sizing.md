---
title: "Slider-Größen anpassen"
---

# Anpassung der Slider-Größen

Um das bestmögliche Responsive Erlebnis zu bieten, arbeitet der Elysium Slider mit Seitenverhältnissen, statt mit statischen Pixel-Werten. Im Erlebniswelten Element des Elysium Slider findest du die Einstellungen der Seitenverhältnisse.

<Image
    src="/screenshots/de/admin-cms-setting-sizing.png" 
    alt="Größen Einstellungen im Erlebniswelt Element"
    :caption="true" />

Du kannst für jede Bildschirm-Größe ein eigenes Seitenverhältnis einstellen. Die Bildschirm-Größen orientieren sich am Shopware Standard Theme. Diese können bei eigenen Themes abweichen.  

::: info Hinweis für Entwickler
Intern wird die Twig Funktion `theme_config('breakpoint.<viewport>')` genutzt
:::

## Maximale Höhe
Außerdem kannst du eine maximale Höhe in `px` oder `rem` festlegen. Das ist sinnvoll wenn du zum Beispiel ein Erlebniswelten Layout nutzt welches über die volle Bildschirmbreite geht. Der Slider wird auf diese maximale Höhe begrenzt.  
Wenn du eine maximale Höhe festlegen möchtest, die für alle Bildschirmgrößen gilt, kannst du das in der kleinsten Bildschirmgröße zu tun. Standardgemäß ist das **xs**.