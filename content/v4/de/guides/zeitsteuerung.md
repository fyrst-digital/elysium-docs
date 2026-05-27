---
title: "Zeitgesteuerte Slides und CMS-Zeitsteuerung"
description: "Dieser Guide erklärt, wie du Slides, Sektionen und Blöcke mit der Zeitsteuerungsfunktion planst"
---

## Übersicht

Die Zeitsteuerungsfunktion (Technische Vorschau seit 4.7.0) ermöglicht es dir, zu planen, wann Slides, Elysium CMS Sektionen und Elysium CMS Blöcke im Storefront sichtbar sein sollen. Du kannst für jedes Element ein Startdatum (**Aktiv von**) und ein Enddatum (**Aktiv bis**) festlegen.

## Slides planen

Im Slide Builder kannst du die Felder **Aktiv von** und **Aktiv bis** in den allgemeinen Einstellungen eines Slides festlegen. Der Slide wird im Storefront nur innerhalb dieses Zeitraums angezeigt. Außerhalb dieses Zeitraums wird der Slide automatisch ausgeblendet.

::: tip Sichtbarkeit der Zeitsteuerung
Die Zeitsteuerungsfelder sind im Slide Builder nur sichtbar, wenn das Feature-Flag `elysium_preview_time_control` aktiviert ist.
:::

## CMS Sektionen und Blöcke planen

Die Zeitsteuerung ist auch für Elysium CMS Sektionen und Blöcke verfügbar. Die Planungseinstellungen findest du in der jeweiligen Sektions- oder Blockkonfiguration im Erlebniswelten-Editor.

Bei **Sektionen** bestimmt die Zeitsteuerung, wann die gesamte Sektion und alle ihre Blöcke sichtbar sind.

Bei **Blöcken** bestimmt die Zeitsteuerung, wann ein einzelner Block innerhalb einer Elysium Sektion sichtbar ist. Dies ermöglicht eine feingranulare Steuerung über die Sichtbarkeit bestimmter Inhaltsblöcke.

## Wichtig: CLI-Worker Konfiguration

Damit die Zeitsteuerung in Verbindung mit aktivem HTTP-Cache zuverlässig funktioniert, müssen **CLI-Worker in Shopware korrekt eingerichtet sein**. Mit Admin-Workern, welche in produktiven Systemen nicht verwendet werden sollten, kommt es zu Problemen bei der Aktualisierung geplanter Sichtbarkeiten.

Mehr Informationen zu [CLI- und Admin-Workern findest du in der Shopware-Dokumentation](https://docs.shopware.com/de/shopware-6-de/tutorials-und-faq/message-queue-und-scheduled-tasks#admin-worker-deaktivieren-und-cli-worker-einrichten).

::: warning HTTP-Cache
Ohne korrekt konfigurierte CLI-Worker können geplante Änderungen bei aktivem HTTP-Cache nicht sofort wirksam werden, da die Cache-Invalidierung von der Verarbeitung der Nachrichtenwarteschlange abhängt.
:::
