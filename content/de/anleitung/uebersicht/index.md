---
slug:
    root: '/manual/overview/'
next:
    text: 'Sections'
    link: '/de/anleitung/uebersicht/sektionen'
---

<script setup lang="ts">
    import { css } from 'styled-system/css'
</script>

- Elysium ist eine Sammlung von Komponenten, welche bei der Erstellung von Erlebniswelten Layouts helfen
- Es beinhaltet eine **Erlebniswelt Sektion**, einen **Slide Builder** sowie **Slider und Banner Elemente** um Slides anzuordnen
- In jeder Komponente liegt Fokus auf einfacher und effektiver Bedienung um schnell zum gewünschten Ergebnis zu kommen
  
- Komponenten haben geräteabhängige Einstellungen, welche für die Ansichten Smartphone, Tablet und Desktop festgelegt werden können
- Dabei kommt der **Mobile-first** Ansatz zum tragen. Einstellungen werden über alle Ansichten veererbt, beginnend ab Smartphone Ansicht
- So müssen geräteabhängige Einstellungen nicht für jede Ansicht gepflegt werden. Hier gibt es nur wenige Ausnahmen

<Grid>
    <Column
        :cols-md="6"
        :cols-xl="3">
        <Image 
            src="/images/admin-cms-block-auswahl.png" 
            alt="Elysium Slides Verwaltung" 
            />
    </Column>
</Grid>