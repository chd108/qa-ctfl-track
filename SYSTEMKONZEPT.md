Erstellt am: 2026-03-14
Zuletzt aktualisiert am: 2026-03-14
Zweck: Systemkonzept-Gerüst / Arbeitsdokument der QA_Lernwebseite; Grundlage für Greenfield-Denkphase, Re-Architecture und Template-Strategie. Enthält verbindlichen Stand (Abschn. 1–3) und geklärte bzw. offene Arbeitsbereiche (ab Abschn. 4).

---

## Aktueller Stand (März 2026)

**Wo wir stehen:** Die **praktische V2-Migration ist abgeschlossen**. Das aktive System basiert auf V2: **index.html** im Root ist die einzige Einstiegsseite (kein Redirect, index-v2.html wurde abgelöst und entfernt); alle V2-Seiten in pages/ verlinken auf diese Root-index. archive/ und templates/ sind eingeordnet. Die Root-/Einstiegslogik ist damit bereinigt und konsolidiert. Der **aktuelle Arbeitsfokus** liegt auf **Punkt 7 – Benennungslogik**. Punkt 6 (Komponenten / Komponentenstil / V2-Designsystem light) ist bewusst zurückgestellt, nicht verworfen – folgt als nächster großer Block danach.

**Konkrete Arbeitslogik (Benennung):**
1. Benennungslogik fachlich weiter präzisieren (Abschn. 7).
2. Daraus eine **Benennungsmatrix pro aktiver V2-Seite** ableiten. Die Matrix umfasst mindestens: Dateiname, Navigationstitel, Browser-Titel (`<title>`), sichtbarer Haupttitel (`<h1>`), Untertitel / Einordnung.
3. Erst nach dieser Matrix: technische Umbenennung sowie Link- und Titel-Anpassung.

**Reihenfolge der nächsten Schritte:**
1. **Technische Umsetzung der Benennungsmatrix** – Umbenennung der Dateien und Anpassung von Links/Titeln nach der festgezurrten Matrix (00-index.html, 00a-ha-einordnung.html, 01-landkarte.html usw.); die Matrix ist für alle Gruppen dokumentiert, der Umsetzungsplan folgt.
2. **Komponentenstil / V2-Designsystem light** (zurückgestellt, nächster großer Block)
3. **Rückkehr zur Konsistenz- und Darstellungsregel-Ebene** auf höherem Niveau

*(Erledigt: V2-Migration, Dokumentation, V2-Aktivierung; Root-Index bereinigt – index.html als einzige Einstiegsseite, Redirect und index-v2.html entfernt, alle V2-Seiten verlinken auf index.html.)*

**Meta-Einordnung:** Migrationsphase abgeschlossen; mit der Architekturgrundlage folgt nun die Benennungslogik, danach der Komponentenstil.

**Dokument-/A4-Modus (Kurzfassung):** Kein eigener Wissens- oder Inhalts-Seitentyp, sondern ein **eigener Präsentations-/Layoutmodus** innerhalb desselben Systems. Für normale Webnutzung bleibt das Hauptsystem; für A4-/Druckdarstellung gilt der bewusste Dokument-/A4-Modus mit eigenen Layout- und Darstellungsregeln.

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

**Erste Runde – Dateibenennungslogik (Abschlussergebnis)**

Die erste Runde der Benennungslogik ist fachlich abgeschlossen. Das folgende Ergebnis zieht die **strukturelle** Benennungslogik fest. Semantischer Feinschliff einzelner Wortstämme kann später noch folgen. Nächster konkreter Schritt: Benennungsmatrix pro aktiver V2-Seite; erst danach die technische Gesamtumbenennung nach dem nummerierten Zielsystem.

**Dateibenennungslogik QA-Lernwebseite — Abschlussergebnis**

**Grundprinzip**  
Die Dateibenennungslogik folgt der Informationsarchitektur des Projekts. Die Primärachse ist der ISTQB CTFL-Lehrplan als normativer Kern. Dateinamen machen die fachliche Einordnung, die inhaltliche Reihenfolge und die Kapitelzugehörigkeit direkt sichtbar — im Explorer, in der Navigation und im Index.

**Die Regeln**

**Regel 1 — Numerisches Präfix**  
Jede Datei beginnt mit einer zweistelligen Zahl, die dem CTFL-Kapitel entspricht. 01 bis 06 folgen dem Lehrplan. 00 ist reserviert für Seiten außerhalb der Primärachse (Einstieg, Überblick, Hausaufgaben-Einordnung).

**Regel 2 — Buchstaben-Suffix**  
Gibt es mehrere Seiten innerhalb desselben Kapitels, erhalten sie einen Buchstaben-Suffix: a, b, c usw. Der Buchstabe bestimmt die Reihenfolge innerhalb des Kapitels, trägt aber keine inhaltliche Hierarchie. Unterkapitel-Zuordnung wird über den inhaltlichen Namen im Dateinamen erkennbar gemacht, nicht über zusätzliche Nummern.

**Regel 3 — A4-Suffix**  
Formulare und Druckdokumente im A4-Modus erhalten den Zusatz -a4 am Ende des Dateinamens. Das unterscheidet Erklärseite und Dokumentseite innerhalb eines Paares eindeutig.

**Regel 4 — Kebab-case, Deutsch, knapp**  
Alle Dateinamen sind kleingeschrieben, Wörter durch Bindestriche getrennt, inhaltlich so kurz wie möglich aber so präzise wie nötig. Keine Versionsnummern (-v2), keine technischen Krücken.

**Regel 5 — Erweiterbarkeit**  
Neue Seiten zu einem bestehenden Kapitel bekommen den nächsten freien Buchstaben. Neue Kapitel sind nicht zu erwarten, da der CTFL-Lehrplan stabil ist. Das System ist damit innerhalb seiner Primärachse dauerhaft erweiterbar ohne Umbenennungen.

**Regel 6 — HA-Paare**  
Hausaufgaben-Seiten existieren als Paare: eine fachliche Erklärseite und eine A4-Dokumentseite. Beide gehören zum selben Kapitel und werden als aufeinanderfolgende Buchstaben geführt.

**Finale Dateiliste**

```
00-index.html                          Einstieg / Root

pages/
00a-ha-einordnung.html                 Hausaufgaben-Übersicht

01-landkarte.html                      Kap. 1 — Überblick / Testuniversum
01a-glossar.html                       Kap. 1 — Glossar & Terminologie
01b-grundlagen.html                    Kap. 1 — Grundlagen des Testens
01c-testmittel.html                    Kap. 1.4.3 — Testmittel

02a-sdlc-statisch.html                 Kap. 2 — SDLC statisch
02b-sdlc-animiert.html                 Kap. 2 — SDLC animiert
02c-teststufen.html                    Kap. 2.2/2.3 — Teststufen & Testarten

03-statisches-testen.html              Kap. 3 — Statisches Testen

04-testverfahren.html                  Kap. 4 — Testverfahren
04a-ha4-anforderungsanalyse.html       Kap. 4 — HA4 Erklärseite
04b-ha4-testbasisanalyse-a4.html       Kap. 4 — HA4 Formular A4
04c-ha5-testfallentwurf.html           Kap. 4 — HA5 Testfallentwurf Erklärseite
04d-ha5-testfallentwurf-a4.html        Kap. 4 — HA5 Testfallentwurf Formular A4

05-testmanagement.html                 Kap. 5 — Testmanagement
05a-ha5-testkonzept.html               Kap. 5 — HA5 Testkonzept Erklärseite
05b-ha5-testkonzept-a4.html            Kap. 5 — HA5 Testkonzept Formular A4

06-testwerkzeuge.html                  Kap. 6 — Testwerkzeuge
```

**Offene Bauliste**

- 01b-grundlagen.html — neu zu bauen — Kap. 1 Grundlagen  
- 01c-testmittel.html — Migration ausstehend — Kap. 1.4.3  
- 03-statisches-testen.html — Migration ausstehend — Kap. 3  
- 04-testverfahren.html — Migration ausstehend — Kap. 4  
- 05-testmanagement.html — Migration ausstehend — Kap. 5  
- 06-testwerkzeuge.html — neu zu bauen — Kap. 6  

**Bewertung**  
Das System ist konsistent, fachlich begründet und für dieses Projekt dauerhaft tragfähig. Die Primärachse CTFL ist stabil — Kapitelzahlen werden sich nicht ändern. Erweiterungen sind jederzeit möglich über den nächsten freien Buchstaben. Technisch entstehen keine Nachteile, solange interne Links beim Umbenennen konsequent mitgepflegt werden. Das System ist für eine Person gut beherrschbar und für die Übergabe an ChatGPT und Cursor klar genug dokumentiert.

**Benennungsmatrix – festgezurrter Stand (Gruppe 1 und 2)**

*Gruppe 1:*  
- **Einstieg:** Dateiname 00-index.html · Nav: Einstieg · `<title>`: Einstieg — QA Lernwebseite · `<h1>`: Einstieg · Untertitel: QA Lernwebseite · Überblick und Navigation  
- **HA-Einordnung:** 00a-ha-einordnung.html · Nav: HA-Einordnung · `<title>`: HA-Einordnung — QA Lernwebseite · `<h1>`: HA-Einordnung · Untertitel: Zuordnung der Hausaufgaben im Kontext von CTFL  
- **Landkarte:** 01-landkarte.html · Nav: Landkarte · `<title>`: Landkarte — QA Lernwebseite · `<h1>`: Landkarte · Untertitel: Inhaltsverzeichnis des ISTQB CTFL Lehrplans v4.0.2  
- **Glossar:** 01a-glossar.html · Nav: Glossar · `<title>`: Glossar — QA Lernwebseite · `<h1>`: Glossar · Untertitel: Alle offiziellen Schlüsselbegriffe des ISTQB CTFL v4.0.2  

*Gruppe 2:*  
- **SDLC statisch:** 02a-sdlc-statisch.html · Nav: SDLC & Testprozess (statisch) · `<title>`: SDLC statisch — QA Lernwebseite · `<h1>`: Software-Entwicklungslebenszyklus & ISTQB-Testprozess — Statische Übersicht · Untertitel: Statische Visualisierung des Software Development Life Cycle im Kontext von CTFL Kapitel 2  
- **SDLC animiert:** 02b-sdlc-animiert.html · Nav: SDLC & Testprozess (animiert) · `<title>`: SDLC animiert — QA Lernwebseite · `<h1>`: Software-Entwicklungslebenszyklus & ISTQB-Testprozess — Animierte Übersicht · Untertitel: Animierte Visualisierung des Software Development Life Cycle im Kontext von CTFL Kapitel 2  

*Gruppe 3:*  
- **HA4 Erklärseite:** 04a-ha4-anforderungsanalyse.html · Nav: HA4 Anforderungsanalyse · `<title>`: HA4 Anforderungsanalyse — QA Lernwebseite · `<h1>`: Anforderungsanalyse · Untertitel: HA4 · Testbasis-Analyse dreier neuer Features im Kontext von CTFL Kapitel 4.1  
- **HA4 A4-Dokument:** 04b-ha4-testbasisanalyse-a4.html · Nav: HA4 Testbasis-Analyse A4 · `<title>`: HA4 Testbasis-Analyse A4 — QA Lernwebseite · `<h1>`: Testbasis-Analyse A4 · Untertitel: HA4 · Testbasis-Analyse für GroceryMate im Kontext von CTFL Kapitel 4.1  
- **HA5 Erklärseite:** 04c-ha5-testfallentwurf.html · Nav: HA5 Testfallentwurf · `<title>`: HA5 Testfallentwurf — QA Lernwebseite · `<h1>`: Testfallentwurf · Untertitel: HA5 · Testfallentwurf für drei neue Features im Kontext von CTFL Kapitel 4  
- **HA5 A4-Dokument:** 04d-ha5-testfallentwurf-a4.html · Nav: HA5 Testfallentwurf A4 · `<title>`: HA5 Testfallentwurf A4 — QA Lernwebseite · `<h1>`: Testfallentwurf A4 · Untertitel: HA5 · Testfallentwurf für GroceryMate im Kontext von CTFL Kapitel 4  

*Gruppe 4:*  
- **HA5 Erklärseite:** 05a-ha5-testkonzept.html · Nav: HA5 Testkonzept · `<title>`: HA5 Testkonzept — QA Lernwebseite · `<h1>`: Testkonzept · Untertitel: HA5 · Testkonzept für GroceryMate im Kontext von CTFL Kapitel 5  
- **HA5 A4-Dokument:** 05b-ha5-testkonzept-a4.html · Nav: HA5 Testkonzept A4 · `<title>`: HA5 Testkonzept A4 — QA Lernwebseite · `<h1>`: Testkonzept A4 · Untertitel: HA5 · Testkonzept für GroceryMate im Kontext von CTFL Kapitel 5 · IEEE 829  

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

**5. Logische nächste Schritte (aktualisiert)**
- **Benennungs-/Aufräumfragen** klären.
- **Komponentenstil / V2-Designsystem light** ausarbeiten.
- Anschließend Rückkehr zur Konsistenz- und Darstellungsregel-Ebene auf höherem Niveau.

*(Erledigt: Dokumentation auf aktuellen Stand bringen; V2 aktivieren / Altseiten deaktivieren – V2 ist Standard, Altbestand in archive/, Referenzvorlage unter templates/, drei nachgezogene Seiten im V2-Hauptsystem.)*

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

**5. Strategischer Umgang**
- Dieser Punkt ist wichtig, aber **nach** V2-Aktivierung und ggf. Benennungsaufräumung die nächste größere Baustelle.
- Vorgehen: Nach Aktivierung von V2 werden die wiederkehrenden Stilabweichungen und Muster aus den gebauten V2-Seiten ausgewertet; daraus wird ein **kompakter Stilstandard / Darstellungsstandard** für die kanonischen Komponenten abgeleitet.
- Konkrete Detail-Designregeln werden in diesem Abschnitt bewusst noch nicht festgelegt.
