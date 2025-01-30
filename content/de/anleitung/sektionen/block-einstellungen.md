---
title: "Block Einstellungen in einer Elysium Sektion"
description: "Erfahre, wie du spezifische Einstellungen für Blöcke innerhalb einer Elysium Sektion anpasst, einschließlich der optischen Reihenfolge und der Anzahl der Zeilen, die ein Block einnehmen soll."
---

Es gibt spezifische Einstellungen für Blöcke innerhalb einer ElysiumSektion. Diese Einstellungen findest du in der Sidebar, indem du auf das Layout-Symbol klickst. Alle Block-Einstellungen sind geräteabhängig und können separat für Smartphone, Tablet und Desktop festgelegt werden.

Diese Einstellungen **sind nur innerhalb von Elysium Sektionen** wirksam. Sobald du einen Block in eine andere Sektion verschiebst, werden die Einstellungen ignoriert.
Die Einstellungen werden jedoch gespeichert. Wenn also ein Block wieder zurück in eine Elysium Sektion verschoben wird, sind die Einstellungen wie gehabt.

<Grid>
    <Column :cols="{xs: 12, '6xl': 10}" :col-start="{'6xl': 2}">
        <Image src="section/de-admin-cms-block-settings.png" alt="Block Einstellungen in einer Elysium Sektion"
        :sizes="{xs: 200, lg: 600, '6xl': 800}" :lazy="false" />
    </Column>
</Grid>

Du kannst die **optische Reihenfolge** von Blöcken festlegen. Dies ist nützlich, wenn ein Block beispielsweise auf einem Smartphone an einer anderen Position angezeigt werden soll als auf einem Desktop. Wenn keine Reihenfolge für einen Block festgelegt wurde (auto), wird dieser immer als letztes angezeigt. Beachte, dass dies nur die optische und nicht die strukturelle Reihenfolge betrifft. Die strukturelle Reihenfolge bleibt immer so bestehen, wie sie im Block-Navigator zu sehen ist.

Mit der Einstellung **Zeilen** kannst du festlegen, wie viele Zeilen ein Block einnehmen soll. Zum Beispiel können Blöcke zu einem sogenannten "Grid Layout" zusammengefügt werden, sodass auf der linken Seite zwei Blöcke untereinander und auf der rechten Seite ein Block dargestellt wird, der über diese zwei Blöcke geht. Dies ist nur ein einfaches Beispiel, komplexere Grid-Layouts sind natürlich auch möglich.

<!-- Die Kombination aus Reihenfolge und Zeilen ist ein mächtiges Werkzeug, um einfache, aber auch komplexe Layouts zu erstellen, **optional auch pro Ansicht**. Auf unserer Beispielseite (Link zur Seite) findest du einige Layouts und Anleitungen, wie diese nachzubilden sind. -->
