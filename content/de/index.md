---
layout: home

head:
  - - link
    - rel: canonical
      content: "https://elysium-slider.blurcreative.de/de/"

title: "Erlebniswelten Slider für Shopware 6"
description: "Flexibler und wiederverwendbarer Slider für Shopware 6"

hero:
  name: "Elysium Slider"
  text: "Flexibler und wiederverwendbarer Slider für Shopware"
  actions:
    - theme: brand
      external: true
      text: Zum Shopware Store
      link: https://store.shopware.com/blur358402810171f/elysium-slider-fuer-erlebniswelten.html
    - theme: alt
      text: Zur Dokumentation
      link: /de/documentation/setup

features:
  - title: "Zentrale Verwaltung deiner Slides"
    details: "Verwalte einzelne Slides in einer eigenen Übersicht anstelle im Slider Element der Erlebniswelten. So erhältst du einen besseren Überblick. Einem Slider kannst du nach belieben Slides zuweisen und anordnen."
  - title: "Einfach wiederverwendbar"
    details: "Durch die Trennung von Slider Element und Slides kannst du deine angelegten Slides beliebig wiederverwenden.
    Lege deinen Slide einmalig an und verwende ihn in unterschiedlichen Slider Elementen."
  - title: "Zahlreiche Einstellungen"
    details: "Unserer Slider bietet jede Menge Einstellungen. Hintergrundbilder für Portrait- und Landscape-Ansicht, Video-Support, eigene CSS-Klassen, individuelle Verlinkung und vieles, vieles mehr."
  - title: "Durch Zusatzfelder erweiterbar"
    details: "Du kannst jeden Slide durch beliebige Zusatzfelder erweitern. Erstelle einfach ein Zusatzfelder-Set für Elysium Slides und lege deine Felder fest."
  - title: "Individuelle Slide-Templates"
    details: "Du kannst für jeden Slide ein individuelles Twig-Template festlegen, welches du in deinem Custom Theme oder Plugin frei anpassen kannst."
  - title: "Updates und Support"
    details: "Der Elysium Slider wird stetig weiterentwickelt. Außerdem steht neben unserer ausführlichen Dokumentation auch exklusiver Ticket-Support zur Verfügung."
---

<HomeContent
  title="Die Idee hinter dem Elysium Slider für Shopware 6"
  titleTag="h3">
  Shopware hat in seinen Erlebniswelt Elementen nur einen sehr einfachen Bild Slider. Dieser bietet nur eine Größe für alle Bildschirmgrößen und man kann nur ein Bild hochladen. Okay, in der aktuellen Version kann man auch Videos hochladen und die Reihenfolge der Bilder anpassen. Aber das reicht uns und vor allem vielen Shopbetreibern nicht.
  Also musste ein Slider für Shopware her der die benötigten Features, eine gutes Nutzererlebnis und Erweiterbarkeit mitbringt. So entstand der Elysium Slider
</HomeContent>

<HomeContent
  title="Trennung von Slide Inhalten und Slider Verhalten: Slide- und Slider-Elemente"
  titleTag="h3">
  Die ersten Überlegungen widmeten wir dem Aufbau und der Bedienung. Sollten wir die Inhalte des Sliders wirklich an das Erlebniswelt Element binden? Auf der einen Seite macht es keinen Spaß die Inhalte in dem kleinen PopUp des Erlebniswelten Elements zu pflegen. Auf der anderen Seite ist es schwierig, einzelne Slides an anderen Stellen wiederzuverwenden. Zum Beispiel möchte man auf der Startseite einen Slide haben, welchen man auf einer Kategorie- oder Produktseite wiederverwenden möchte. So müsste man die Inhalte händisch kopieren. Und was ist bei Änderungen des Inhalts? Das ganze Spiel von vorne.<br/>
  <br/>
  Also haben wir den Inhalt, also die einzelnen Slides, in eine eigenständige Komponente ausgelagert. Du pflegst die Slides also an einer zentralen Stelle. Diese Slides kannst du im Erlebniswelten Slider-Element beliebig zusammenstellen. Dort kannst du auch das Verhalten und Erscheinung des gesamten Slider anpassen. Zum Beispiel Auto-Wiedergabe, Anzeige der Navigations-Puinkte oder Pfeile, Farben und mehr.<br/>
  Dieses Konzept bringt dir als Shhopbetreiber maximale Flexibilität und Wiederverwendbarkeit
</HomeContent>

<!--
<HomeContent
  title="Der optimale Mix zwischen Funktionsumfang und Übersicht"
  titleTag="h3">
</HomeContent>
-->
<HomeContent
  title="Erweiterbar durch Zusatzfelder und individuelle Slide Twig-Templates"
  titleTag="h3">
  Jeder Slide ist durch Zusatzfelder erweiterbar. Du kannst also ein eigenes Zusatzfelder-Set für die Elysium Slides anlegen und im entsprechenden Slide pflegen. Damit die Zusatzfelder im Frontend sichbar sind, müssen diese im Slide Template verknüpft werden. Da dies nicht im Template des Plugins gemacht werden sollte, kommt hier ein weiterer Ansatz ins Spiel. Nämlich individuelle Twig-Templates für jeden Slide. Lege ein eigenes Twig-Template in deinem Custom Theme oder Plugin an und verknüpfe dort die Zusatzfelder. Du kannst auch sonstige stukturelle Anpassungen am Slide vornehmen, den Möglichkeiten sind keine Grenzen gesetzt. Wenn du einen einfachen Einstiegspunkt benötigst, kannst du auch von unserem Standard-Template ableiten. In unserer Dokumentation erfährt du mehr dazu.<br/>
  <br/>
  Das setzt Kenntnisse in Twig und dem Template Aufbau von Shopware voraus. Solltest du diese nicht haben, kannst du uns gern für die Umsetzung deiner Ideen kontaktieren.
</HomeContent>
