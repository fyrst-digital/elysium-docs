---
title: "Guides: Mehrere Slides pro Ansicht"
---

# Mehrere Slides pro Ansicht
Es ist ab Version 1.5.5 möglich mehrere Slides pro Ansicht festzulegen. Diese Einstellung ist Abhängig von der gewählten Bildschirmgröße und berücksichtigt die Einstellungen der letzt kleineren Bildschirmgröße.  
Wenn du also nur in `xs` 1 Slides pro Ansicht eingestellt hast, wird über alle Bildschirmgrößen nur 1 Slide angezeigt. Stellt du nun in `lg` 2 Slides ein, wird bis `lg` 1 Slide und ab `lg` 2 Slides angezeigt.  
Der Standardwert, wenn in keiner Bildschirmgröße ein Wert hinterlegt ist, ist immer 1 Slide.
Genau so verhält es sich mit der Option **Abstand zwischen Slides**. Der Standardwert ist hier 0px oder 0rem, also kein Abstand zwischen den Slides.

## Slidegröße bei mehreren Slides
Die Slidegröße ist auch bei mehreren Slides pro Ansicht abhängig vom Seitenverhältnis. Das Seitenverhältnis bezieht sich immer auf einen einzelnen Slide und nicht den Slider als ganzen. Die maximale Höhe bezieht sich ebenfalls auf die einzelnen Slides.