Erstellt am: 2026-03-14
Zuletzt aktualisiert am: 2026-03-14
Zweck: Systemkonzept-Gerüst / Arbeitsdokument der QA_Lernwebseite; Grundlage für Greenfield-Denkphase, Re-Architecture und Template-Strategie. Enthält verbindlichen Stand (Abschn. 1–3) und offene Klärungsfelder (ab Abschn. 4).

---

## Arbeitskontext und Rollenmodell

- **Product Owner / Domain Lead:** Gibt Ziel, Prioritäten, Nutzen und Qualitätsmaßstab vor; verantwortet die fachliche Richtung.
- **Architecture & Coordination:** Strukturiert, ordnet und koordiniert; hält Systemlogik, Konsistenz und Entscheidungsrahmen zusammen.
- **Subject-Matter Review & Content Design:** Unterstützt bei fachlicher Prüfung und inhaltlicher Struktur; besonders für QA-/ISTQB-/Testing-Inhalte und HTML-/Inhaltsentwürfe.
- **Implementation & Delivery:** Setzt technisch um; arbeitet an Dateien, Code, Refactoring und Struktur.

Die Trennung schafft klare Zuständigkeiten, reduziert Rollenvermischung und ermöglicht einen professionelleren Workflow.

---

## 1. Ausgangslage

- Gewachsenes Lern- und Referenzprojekt (QA/ISTQB); funktionsfähige Website mit starken Inhalten.
- Design- und Konsistenz-Harmonisierung an Haltepunkt: Seitenrahmen-Konzept und Formular-Basis verbindlich; weitere Harmonisierung zurückgestellt.
- Bewusster Wechsel in eine Greenfield-Denkphase: System neu durchdenken, ohne sofort Code oder Inhalte zu ändern.

---

## 2. Ziel der Greenfield-Denkphase

- Ein klares, konsistentes System- und Architekturkonzept erarbeiten, das den Bestand erklärt und eine zielgerichtete Weiterentwicklung ermöglicht.
- Re-Architecture und Template-Strategie definieren – wissenschaftlich fundiert und softwareindustriell praktikabel.
- Kein sofortiges Refactoring; erst Konzept, dann schrittweise Umsetzung.

---

## 3. Qualitätsmaßstab

- **Konsistenz:** Einheitliche Regeln für Seitentypen, Komponenten und Benennung.
- **Wartbarkeit:** Klare Trennung von Struktur, Styling und Inhalt; nachvollziehbare Ablage- und Namenslogik.
- **Zielgruppengerechtheit:** Lern- und Referenznutzung; Barrierefreiheit und Lesbarkeit.
- **State-of-the-art:** Bewährte Web-Standards (HTML/CSS), semantische Struktur, keine unnötige Komplexität.

---

*Ab Abschnitt 4: konzeptioneller Arbeitsbereich – festgelegte Punkte (z. B. Abschn. 4), Arbeitsfassungen (Abschn. 5–7) und Sollableitungen (Abschn. 8).*

---

## 4. Informationsarchitektur *(festgelegt)*

**Klärungsfeld 1: Informationsarchitektur**
- von uns hergeleitet
- von ChatGPT eingeordnet
- von Claude bestätigt
- ohne Korrekturbedarf validiert

**Festgelegte Informationsarchitektur**

**Primärachse**
- ISTQB / CTFL-Lehrplan als normativer Kern

**Sekundäre Ebenen**
- Orientierung / Überblick
- Nachschlagen / Begriffe / Übersetzung
- Praxis / Anwendung
- Visualisierung / Veranschaulichung

**Didaktische Zusatzebene**
- Selbstkontrolle / Prüfungsvorbereitung

---

## 5. Seitentypen *(geklärt)*

**Klärungsstand:** Punkt 5 ist inhaltlich weiter geklärt. Es gibt einen kanonischen Hauptseitentyp und einen definierten Sonderfall; die Einstiegsseite ist als Variante des Haupttyps eingeordnet.

**Geklärter Stand:**
- ein kanonischer **Hauptseitentyp** / Hauptsystem
- die **Einstiegs-/Übersichtsseite** ist keine eigene Typdefinition, sondern eine **Variante des Haupttyps**
- der **Dokument-/Formular-Sonderfall** bzw. Dokument-/A4-Modus bleibt der **eigentliche Sonderfall**

**Klarstellungen:**
- Die Einstiegsseite hat funktional eine eigene Rolle (Orientierung / Einstieg), gehört aber technisch und gestalterisch in dasselbe Hauptsystem.
- Lernkontrolle / Prüfungsvorbereitung bleibt didaktische Funktion, kein eigener Seitentyp.
- Visualisierung und Praxis / Anwendung sind weiterhin keine automatisch eigenen kanonischen Seitentypen.

**Präzisierung: Dokument-/A4-Modus als Präsentationsmodus (Erkenntnis aus HA4-Formular-V2-Test)**

Der bewusste Test mit der Seite „HA4 Testbasis-Analyse Formular V2“ diente als Architekturtest: Kann das Formular wie eine normale V2-Seite im Hauptsystem abgebildet werden, oder erweist sich ein eigener Dokument-/A4-Modus als zwingend?

Das Ergebnis zeigt zweierlei:
- **Inhaltlich** kann das Formular im Hauptsystem dargestellt werden – die gleiche Grundform, Sections, Meta-Bereich, Tabellen und Analyseblöcke reichen aus.
- **Darstellerisch** erfüllt das Hauptsystem allein aber nicht das Ziel einer echten A4-/Dokumentansicht (z. B. für Druck oder formale Abgabe).

Daraus folgt die präzise Einordnung:
- Es handelt sich **nicht** um einen eigenen Wissens- oder Inhalts-Seitentyp.
- Es handelt sich vielmehr um einen **eigenen Präsentations- bzw. Layoutmodus**.

Kurz: Kein eigener Wissens- oder Inhalts-Seitentyp, aber ein eigener Präsentations- bzw. Layoutmodus.

**Praktische Konsequenz:**
- Das Hauptsystem bleibt für die normale Webnutzung tragfähig; Formularinhalte können dort vollwertig abgebildet werden.
- Für A4-/Druckdarstellung braucht das System einen **bewussten Dokument-/A4-Modus** mit eigenen Layout- und Darstellungsregeln.
- Dieser Modus ist keine eigene „Welt“, sondern Teil desselben Systems mit anderer Präsentationslogik.

**Warum diese Erkenntnis erst jetzt sichtbar wurde:** Sie ergab sich durch den praktischen Test am echten Formular (HA4-Formular-V2), nicht aus theoretischer Ableitung. Erst die Überführung in die normale V2-Grundform machte sichtbar, dass Inhalt und gewünschte A4-Darstellung zwei verschiedene Aspekte sind.

**Warum sie wichtig ist:** Ohne diese Trennung würden **Inhaltstyp** und **Darstellungsmodus** vermischt – mit der Folge, dass entweder unnötig eigene Seitentypen definiert oder die Anforderung an eine echte Dokumentansicht unterschätzt würde.

**Strategischer Umgang:** Normale Seiten weiter im Hauptsystem migrieren; den Dokument-/A4-Modus anschließend bewusst ausarbeiten (eigene Layout- und Darstellungsregeln), ohne ihn als eigenen Wissens- oder Inhalts-Seitentyp zu führen.

---

## 6. Komponenten *(Arbeitsfassung)*

**Klärungsstand:** Die Frage der Komponenten wurde weiter geklärt. Es wird unterschieden zwischen: (1) klar kanonischen Komponenten, (2) Komponenten in Vereinheitlichung / Grauzone, (3) lokalem / seitengebundenem Inhalt.

**Arbeitsfassung Komponenten:**

- **Klar kanonische Komponenten:** Navigation / oberer Rahmen, Source-Note, Dokument-/A4-Page-Footer.
- **Komponenten in Vereinheitlichung / Grauzone:** Section, Card, Tag, Meta-Bereich / Meta-Bar, Info-Box, Legende, Tabellen-Muster.
- **Lokaler / seitengebundener Inhalt:** Diagramme / SVG-Einzelkonstruktionen, Canvas-/JS-Visualisierungen, einmalige Grids, spezielle Formularfelder und Speziallayouts.

**Klarstellungen:**
- Nicht alle wiederkehrenden Bausteine sind bereits als technisch einheitliche Komponente ausformuliert.
- Mehrere Elemente sind aktuell eher als konzeptionell wiederkehrende Muster zu verstehen.
- Der Zweck dieses Abschnitts ist noch nicht die endgültige Komponentenbibliothek, sondern eine saubere Unterscheidung zwischen kanonisch, in Vereinheitlichung und lokal.

---

## 7. Benennungslogik *(Arbeitsfassung)*

**Klärungsstand:** Die Benennungslogik wurde weiter geklärt. Relevant sind mehrere Benennungsebenen: Browser-/Seitentitel (`<title>`), sichtbarer Haupttitel (`<h1>`), Navigationstitel, Dateiname, CSS-Klassenname, konzeptioneller Komponentenname.

**Arbeitsfassung Benennungslogik:**
- Navigationstitel und Dateiname sollen möglichst denselben deutschen Wortstamm teilen.
- Der Browser-/Seitentitel darf den Navigationstitel um Kontext erweitern.
- Der sichtbare Haupttitel (`<h1>`) ist eine eigene Ebene und muss nicht wortgleich mit dem `<title>` sein.
- CSS-Klassennamen sollen funktionsbezogen statt inhaltsbezogen gedacht werden.
- Konzeptionelle Komponentennamen sind von den konkreten CSS-Klassen zu unterscheiden.

**Klarstellungen:**
- Die aktuelle Bestandslage ist noch nicht vollständig vereinheitlicht.
- Bei Formularseiten können Dateiname und sichtbare Benennung stärker auseinanderfallen als bei normalen Seiten.
- Die Regel für CSS-Klassennamen ist aktuell als Soll-Richtung zu verstehen, nicht als bereits vollständig erreichter Ist-Zustand.
- Ziel dieses Abschnitts ist eine belastbare Arbeitslogik, noch keine abschließende Naming-Convention bis auf Casing-Ebene.

*Formale Schreibweisen (z. B. für Klassen, Dateien, Komponenten) können in einem späteren Schritt präzisiert werden.*

---

## 8. Nächste Schritte *(Sollstruktur Version 2)*

**1. Erste Sollstruktur Version 2**
- Die Website folgt der festgelegten Informationsarchitektur (Abschn. 4).
- Primärachse: ISTQB / CTFL-Lehrplan als normativer Kern.
- Sekundäre Ebenen strukturieren die Inhalte: Orientierung / Überblick, Nachschlagen / Begriffe / Übersetzung, Praxis / Anwendung, Visualisierung / Veranschaulichung.
- Die didaktische Zusatzebene (Selbstkontrolle / Prüfungsvorbereitung) ist keine eigene Hauptstruktur, sondern wird innerhalb von Seiten und Komponenten umgesetzt.

**2. Grundformen der Seiten**
- **Hauptsystem** als kanonischer Standard für normale Inhaltsseiten.
- **Dokument-/A4-Modus** als definierter Sonderfall.
- **Einstiegs-/Übersichtsseite** als Variante des Haupttyps (funktionale Sonderrolle Orientierung / Einstieg, technisch im Hauptsystem).

**3. Rolle der Komponenten**
- Kanonische Komponenten (Abschn. 6) bilden die verbindliche gemeinsame Basis.
- Komponenten in Vereinheitlichung / Grauzone werden schrittweise geklärt.
- Lokaler Inhalt bleibt möglich und muss nicht künstlich generalisiert werden.

**4. Rolle der Benennungslogik**
- Benennung (Abschn. 7) dient der Konsistenz und Skalierbarkeit.
- Neue oder überführte Inhalte sollen derselben Benennungslogik folgen.
- Formale Schreibweisen können in einem späteren Schritt präzisiert werden.

**5. Logische nächste Schritte**
- Grauzonen-Komponenten konkretisieren.
- Formale Benennungsregeln präzisieren.
- Bestand gegen Sollstruktur abgleichen.
- Danach Migrations- und Umsetzungsreihenfolge festlegen.

---

## 9. Komponentenstil / V2-Designsystem light *(Darstellungsregeln der kanonischen Komponenten)*

Dieser Abschnitt dokumentiert eine Erkenntnis, die beim praktischen Neubau der ersten V2-Seiten (testuniversum-v2.html, glossar-v2.html) sichtbar wurde. Er gehört zum konzeptionellen Arbeitsbereich und beschreibt den nächsten Architekturpunkt nach der Sollstruktur Version 2.

**1. Entstehung der Erkenntnis**
- Beim praktischen Neubau der ersten V2-Seiten zeigte sich: Das System funktioniert strukturell – gemeinsame Grundform, klare Komponenten, sinnvolle Überführung der Inhalte.
- Gleichzeitig wurden Unterschiede in der konkreten visuellen Ausprägung wiederkehrender Komponenten sichtbar (z. B. Meta-Bereich, Hinweis-/Info-Box, Legende, Tabellen-/Referenzbereich; Größen, Abstände, Stilnuancen).
- Diese Unterschiede liegen nicht primär an der Informationsarchitektur oder am Template, sondern daran, dass die Darstellungsregeln der kanonischen Komponenten noch nicht explizit als eigener Standard festgehalten sind.
- Das ist kein Mangel des Templates, sondern ein eigenständiger nächster Systemschritt: die explizite Festlegung eines Komponentenstils bzw. eines V2-Designsystems light.

**2. Fachliche Einordnung**
- Der Punkt gehört nicht mehr primär zur Informationsarchitektur (Abschn. 4) und auch nicht nur zur Frage der Seitentypen (Abschn. 5).
- Er betrifft die **standardisierte Darstellung** wiederkehrender Komponenten und kann als **Komponentenstil**, **V2-Designsystem light** oder **Darstellungsregelwerk der kanonischen Komponenten** verstanden werden.
- Abgrenzung: Das Template beantwortet die **Grundform** der Seite (Rahmen, Hauptbereiche). Die Komponenten (Abschn. 6) beantworten, **welche** Bausteine es gibt. Dieser neue Punkt beantwortet, **wie** diese Bausteine systemweit aussehen und variieren sollen.

**3. Warum das wichtig ist**
- Ohne einen solchen Standard kann das System strukturell richtig, in der Ausprägung aber uneinheitlich bleiben.
- Für Konsistenz, Wartbarkeit und professionelle Weiterentwicklung braucht das System deshalb nicht nur Struktur-, sondern auch **Darstellungsregeln auf Komponentenebene**.

**4. Warum es bisher nicht explizit festgehalten war**
- Zuerst mussten die groben Systemfragen geklärt werden: Informationsarchitektur, Seitentypen, Komponenten, Benennungslogik, Sollstruktur Version 2.
- Die Stilfrage der Komponenten wurde dadurch nicht ignoriert; sie war bisher implizit mitgedacht.
- Erst durch den praktischen V2-Bau wurde deutlich, dass sie als eigener nächster Architekturpunkt **explizit** benannt und verankert werden sollte.

**5. Strategischer Umgang ab jetzt**
- Dieser Punkt ist wichtig, aber aktuell **nicht blockierend**. Die Migration wird nicht gestoppt.
- Vorgehen: Zunächst werden weitere Seiten im V2-System gebaut, um wiederkehrende Stilabweichungen und Muster belastbarer zu beobachten.
- Daraus wird danach ein **kompakter Stilstandard / Darstellungsstandard** für die kanonischen Komponenten abgeleitet.
- Dieser Schritt soll zeitnah erfolgen und als **nächste größere Baustelle** nach den ersten weiteren V2-Migrationen behandelt werden.
- Es geht hier um die Verankerung der Erkenntnis und der Strategie; konkrete Detail-Designregeln werden in diesem Abschnitt bewusst noch nicht festgelegt.
