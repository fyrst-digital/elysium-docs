---
title: "Einstellungen der Elysium Sektion"
slug:
    root: '/manual/sections/section-settings'
---

Um die Einstellungen einer Sektion zu ändern, gehe auf das Layout-Symbol, welches links von der Sektion angezeigt wird. Daraufhin öffnet sich die Sidebar mit den Standardeinstellungen der Sektion. Klicke in der Sidebar auf das Layout-Symbol, um die Elysium Sektions-Einstellungen zu öffnen. In diesen Einstellungen kannst du die horizontale Ausrichtung der Blöcke, den Abstand des Raums zwischen den Blöcken und die äußeren Abstände der Sektion anpassen. Diese Einstellungen sind geräteabhängig und können für Smartphone, Tablet und Desktop separat eingestellt werden.

<Grid>
    <Column :cols="{xs: 12, '6xl': 10}" :col-start="{'6xl': 2}">
        <Image src="section/de-admin-cms-section-settings.png" alt="Einstellungen der Elysium Sektion"
        :sizes="{xs: 200, lg: 600, '6xl': 800}" :lazy="false" />
    </Column>
</Grid>

**Block Ausrichtung** legt die vertikale Ausrichtung aller Blöcke in der Sektion fest.  
- Bei **Strecken** werden alle Blöcke einer Sektion auf eine gleiche Höhe angepasst.
- **Beginn** richtet die Blöcke am Beginn einer Sektion aus
- **Ende** richtet die Blöcke am Ende einer Sektion aus
- **Zentriert** richtet die Blöcke mittig einer Sektion aus

Die **Abstände** einer Sektion können angepasst werden. Du kannst den horizontalen und vertikalen Abstand der Sektion, sowie den Abstand zwischen den Blöcken, festlegen.

## Breakpoint pro Sektion ändern

Du kannst auch die Breakpoints für jede Sektion anpassen. Breakpoints bestimmen, ab welcher Bildschirmbreite das Layout geändert wird.
