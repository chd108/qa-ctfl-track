Erstellt am: 2026-03-14
Zuletzt aktualisiert am: 2026-03-21 (Stand nach Phase 4 Standards-Konformität; Phasen 1–3 inhaltlich/formal HA4/HA5; zuvor Migration 02c, Benennungsmatrix umgesetzt)
Zweck: Systemkonzept-Gerüst / Arbeitsdokument der QA_Lernwebseite; Grundlage für Greenfield-Denkphase, Re-Architecture und Template-Strategie. Enthält verbindlichen Stand (Abschn. 1–3) und geklärte bzw. offene Arbeitsbereiche (ab Abschn. 4).

---

## Aktueller Stand (21.03.2026)

**Wo wir stehen:** Die **praktische V2-Migration** und **Punkt 7 – Benennungslogik** sind **abgeschlossen** — alle aktiven Seiten in `pages/` folgen der Benennungsmatrix (Dateinamen, Nav, `<title>`, `<h1>`, Untertitel); **index.html** ist der Einstieg (Root-Sonderregel); **13 Einstiegskarten** und Integration **02c Teststufen & Testarten** sind umgesetzt.

**Abgeschlossen auf der HA4/HA5-Lernstrecke (Phasen 1–4, Stand 21.03.2026):**
- **Phase 1:** Konsistenzprüfung (u. a. GM-F02, GM-F03, Sterne, Kategorie-Umbruch).
- **Phase 2:** Story-Kette und Hinweise — u. a. 04b Vorschau 9 TCs (grüne Box Blatt 4), 04d GM-F03-Auswahlbegründung, 04a Verweis A4-Abgabe, Infoboxen auf 05a/04c gestrafft, **einheitliche blaue Dokumentenkette-Boxen** (`info-box info-box--note`), **Farbregel** blau = Story/Navigation in der Dokumentenkette · gelb/warn = didaktische „Was ist …?“-Boxen; Linktexte in diesen Boxen ohne sichtbare Dateikürzel `04a`/`04b`/… in Klammern.
- **Phase 3:** Formale Einheitlichkeit — u. a. Terminologie **Testbasis-Analyse**, Meta/Querverweise, Web/A4-Parität im Kern (04a–05b), Ergänzungen **`doc-a4.css`**; siehe Commit-Historie **QA_Lernwebseite** (z. B. `1eb5b8f` u. a.).
- **Phase 4 – Standards-Konformität (21.03.2026):** Zitierweise und Normenbezug geprüft und angeglichen:
  - **CTFL:** Irreführende Kurzform „CTFL 4.2“ → **„CTFL 4.0.2, Kap. 4.2“** (05a Überschrift, 05b Formularlabel).
  - **IEEE 829:** durchgängig **IEEE 829-2008** (HA5-Web/A4, 04d-Fußzeilen, **index.html**, Landkarte, README, dieses Dokument), konsistent zu ISO/IEC/IEEE 29119-3.
  - **index.html:** Absatz im Willkommensbereich — Orientierung an CTFL 4.0.2, IEEE 829-2008, ISO/IEC/IEEE 29119-3 ohne 1:1-Normumsetzung (Lernzwecke, Prüfungsanpassung).
  - **Bewertung:** Für ein **Lern-Portfolio** fachlich und formal **professionell genug**; keine Anspruch auf vollständige Normabdeckung.

**Git (Repo QA_Lernwebseite):** Commit **`9b4349e`** dokumentiert u. a. Phase 2; spätere Commits Phase 3/4 (siehe Historie).

**Lessons learned:** Ein Teil der später in **Abschn. 6 und 9** zu formalisierenden **Komponentenstil-Logik** (Story-Box vs. didaktische Box) wurde **praktisch vorweggenommen** — die verbindliche Ausformulierung im Designsystem light bleibt der nächste Architekturschritt.

**Konkrete Arbeitslogik (aktuell):**
- **Benennungslogik (Abschn. 7):** Umgesetzt; optionaler semantischer Feinschliff später möglich.
- **Inhaltliche Phasen 1–4 (HA4/HA5):** Abgeschlossen.
- **Nächster Architektur-Schritt:** **Komponentenstil / V2-Designsystem light** (Abschn. 6 und 9) — u. a. Story-Box-Muster und Info-Box-Varianten aus Phase 2 schriftlich verankern und ausweiten.

**Reihenfolge der nächsten Schritte:**
1. **Komponentenstil / V2-Designsystem light** (Abschn. 6 und 9).
2. Rückkehr zur **Konsistenz- und Darstellungsregel-Ebene** auf höherem Niveau.

*(Erledigt: V2-Migration; Root-Index final; Benennungsmatrix dokumentiert und technisch umgesetzt; 02c Migration; **Phasen 1–4** HA4/HA5 inhaltlich, formal und Standards-Review.)*

**Meta-Einordnung:** Technik und Benennung stehen; inhaltliche Strecke HA4/HA5 ist durch **Phasen 1–4** abgeschlossen. Sichtbarer nächster Meilenstein: **Komponentenstil / Designsystem light**.

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

## 6. Komponenten *(Arbeitsfassung – nächster großer Arbeitsblock)*

**Hinweis zur Reihenfolge:** In der Umsetzung wurde Abschn. 7 (Benennungslogik) vorgezogen und ist abgeschlossen. Abschn. 6 (Komponenten) und Abschn. 9 (Komponentenstil / V2-Designsystem light) bilden zusammen den **nächsten großen Arbeitsblock** – Komponenten inventarisieren und Darstellungsregeln festhalten.

**Klärungsstand:** Die Frage der Komponenten wurde weiter geklärt. Es wird unterschieden zwischen: (1) klar kanonischen Komponenten, (2) Komponenten in Vereinheitlichung / Grauzone, (3) lokalem / seitengebundenem Inhalt.

**Arbeitsfassung Komponenten:**

- **Klar kanonische Komponenten:** Navigation / oberer Rahmen, Source-Note, Dokument-/A4-Page-Footer.
- **Komponenten in Vereinheitlichung / Grauzone:** Section, Card, Tag, Meta-Bereich / Meta-Bar, Info-Box, Legende, Tabellen-Muster.
- **Lokaler / seitengebundener Inhalt:** Diagramme / SVG-Einzelkonstruktionen, Canvas-/JS-Visualisierungen, einmalige Grids, spezielle Formularfelder und Speziallayouts.

**Klarstellungen:**
- Nicht alle wiederkehrenden Bausteine sind bereits als technisch einheitliche Komponente ausformuliert.
- Mehrere Elemente sind aktuell eher als konzeptionell wiederkehrende Muster zu verstehen.
- Der Zweck dieses Abschnitts ist noch nicht die endgültige Komponentenbibliothek, sondern eine saubere Unterscheidung zwischen kanonisch, in Vereinheitlichung und lokal.

**Ergänzung 2026-03-21 (Phase 2 – praktische Vorwegnahme):** Auf den Seiten **04a, 04c, 05a** wurde ein wiederkehrendes Muster für **Dokumentenkette / Story-Verbindung** umgesetzt: Container **`info-box info-box--note`** (blaue „Note“-Optik), Titelzeile im Schema *Dokumentenkette — aktuelles Dokument → nächstes Dokument*, Inhalt mit Querverweisen. Didaktische Erklärboxen („Was ist …?“) bleiben bei **`info-box`** ohne `--note` (warn/gelb). Das ist **noch keine** vollständige Komponentenbibliothek, sondern eine **empirisch etablierte Unterscheidung**, die in **Abschn. 9** formal zu übernehmen ist.

---

## 7. Benennungslogik *(strukturell festgezurrt, technisch umgesetzt)*

**Stand:** Die Benennungslogik wurde in der Arbeitsreihenfolge vorgezogen bearbeitet und ist **strukturell festgezurrt und technisch umgesetzt**. Die folgenden Regeln und die Benennungsmatrix (Gruppen 1–4) sind verbindlich; alle aktiven Seiten in pages/ entsprechen der Matrix (Dateinamen, Navigationstitel, `<title>`, `<h1>`, Untertitel). Root-index.html bleibt als index.html (Root-Sonderregel). Einstiegskarten auf der index.html folgen der gleichen Reihenfolge und Kartentitel = Navigationstitel. Relevant sind mehrere Benennungsebenen: Browser-/Seitentitel (`<title>`), sichtbarer Haupttitel (`<h1>`), Navigationstitel, Dateiname, CSS-Klassenname, konzeptioneller Komponentenname.

**Arbeitsfassung Benennungslogik (Regeln, unverändert gültig):**
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

**Erste Runde – Dateibenennungslogik (Abschlussergebnis, umgesetzt)**

Die erste Runde der Benennungslogik ist fachlich abgeschlossen und **technisch umgesetzt**. (1) Die strukturelle Logik (Regeln, finale Dateiliste, Matrix pro Seite) ist fest. (2) Die **technische Umsetzung** (Umbenennung der Dateien in pages/, Anpassung aller Links, Titel, Navigation, Untertitel; Root-index mit Kartenreihenfolge und Kartentiteln) wurde durchgeführt. (3) **Semantischer Feinschliff** einzelner Wortstämme kann bei Bedarf später noch erfolgen.

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
00b-standards.html             Standards — Web- & Projektstandards, Projektstatus

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

**Umsetzungsstand**

Die in der Benennungsmatrix (Gruppen 1–4) dokumentierten Seiten sind **technisch umgesetzt**: 00a-ha-einordnung.html, 01-landkarte.html, 01a-glossar.html, 02a-sdlc-statisch.html, 02b-sdlc-animiert.html, 02c-teststufen.html, 03-statisches-testen.html, 04-testverfahren.html, 04a bis 04d, 05-testmanagement.html, 05a-ha5-testkonzept.html, 05b-ha5-testkonzept-a4.html. Root-Einstieg bleibt index.html (Root-Sonderregel).

**Offene Bauliste (Erweiterungen, nicht Teil der aktuellen Matrix)**

- 01b-grundlagen.html — neu zu bauen — Kap. 1 Grundlagen  
- 01c-testmittel.html — Migration ausstehend — Kap. 1.4.3  
- 03-statisches-testen.html — migriert — Kap. 3  
- 05-testmanagement.html — migriert — Kap. 5  
- 06-testwerkzeuge.html — neu zu bauen — Kap. 6  

**Bewertung**  
Das System ist konsistent, fachlich begründet und für dieses Projekt dauerhaft tragfähig. Die Primärachse CTFL ist stabil — Kapitelzahlen werden sich nicht ändern. Erweiterungen sind jederzeit möglich über den nächsten freien Buchstaben. Technisch entstehen keine Nachteile, solange interne Links beim Umbenennen konsequent mitgepflegt werden. Das System ist für eine Person gut beherrschbar und für die Übergabe an ChatGPT und Cursor klar genug dokumentiert.

**Benennungsmatrix – festgezurrter Stand (Gruppen 1 bis 4)**

*Die folgenden Gruppen sind fachlich geklärt, festgezurrt und technisch umgesetzt. Die Einstiegsseite liegt als index.html im Root mit den vereinbarten Feldern; alle übrigen Seiten in pages/ tragen die genannten Dateinamen und Felder.*

**Root-Sonderregel:** Logisch gehört der Einstieg zur Benennungslogik als 00-index.html. Technisch bleibt die echte Root-Datei trotzdem **index.html** (Root-Einstieg / GitHub-Pages-Default / praktische Stabilität). Daraus folgt: 00-index.html ist die logische Matrix-Bezeichnung für den Einstieg, aber **keine reale Umbenennung** der Root-Datei – die Root-Datei heißt weiterhin index.html.

*Gruppe 1:*  
- **Einstieg:** Dateiname 00-index.html · Nav: Einstieg · `<title>`: Einstieg — QA Lernwebseite · `<h1>`: QA Lernwebseite · Untertitel: Überblick und Navigation  
- **HA-Einordnung:** 00a-ha-einordnung.html · Nav: HA-Einordnung · `<title>`: HA-Einordnung — QA Lernwebseite · `<h1>`: HA-Einordnung · Untertitel: Zuordnung der Hausaufgaben im Kontext von CTFL  
- **Landkarte:** 01-landkarte.html · Nav: Landkarte · `<title>`: Landkarte — QA Lernwebseite · `<h1>`: Landkarte · Untertitel: Inhaltsverzeichnis des ISTQB CTFL Lehrplans v4.0.2  
- **Glossar:** 01a-glossar.html · Nav: Glossar · `<title>`: Glossar — QA Lernwebseite · `<h1>`: Glossar · Untertitel: Alle offiziellen Schlüsselbegriffe des ISTQB CTFL v4.0.2  
- **Standards:** 00b-standards.html · Nav: Standards · `<title>`: Standards — QA Lernwebseite · `<h1>`: Standards · Untertitel: Anerkannte Standards · Projektstatus · Potenzial — Stand 21.03.2026  

*Gruppe 2:*  
- **SDLC statisch:** 02a-sdlc-statisch.html · Nav: SDLC & Testprozess (statisch) · `<title>`: SDLC statisch — QA Lernwebseite · `<h1>`: Software-Entwicklungslebenszyklus & ISTQB-Testprozess — Statische Übersicht · Untertitel: Statische Visualisierung des Software Development Life Cycle im Kontext von CTFL Kapitel 2  
- **SDLC animiert:** 02b-sdlc-animiert.html · Nav: SDLC & Testprozess (animiert) · `<title>`: SDLC animiert — QA Lernwebseite · `<h1>`: Software-Entwicklungslebenszyklus & ISTQB-Testprozess — Animierte Übersicht · Untertitel: Animierte Visualisierung des Software Development Life Cycle im Kontext von CTFL Kapitel 2  
- **Teststufen & Testarten:** 02c-teststufen.html · Nav: Teststufen & Testarten · `<title>`: Teststufen & Testarten — QA Lernwebseite · `<h1>`: Teststufen & Testarten · Untertitel: Kap. 2.2 · Struktur, Zusammenhänge und typische Fehlerzustände  

- **Testverfahren:** 04-testverfahren.html · Nav: Testverfahren · `<title>`: Testverfahren — QA Lernwebseite · `<h1>`: Testverfahren im Überblick · Untertitel: Testentwurfsverfahren im Kontext von CTFL Kapitel 4  

*Gruppe 3:*  
- **HA4 Erklärseite:** 04a-ha4-anforderungsanalyse.html · Nav: HA4 Anforderungsanalyse · `<title>`: HA4 Anforderungsanalyse — QA Lernwebseite · `<h1>`: Anforderungsanalyse · Untertitel: HA4 · Testbasis-Analyse dreier neuer Features im Kontext von CTFL Kapitel 4.1  
- **HA4 A4-Dokument:** 04b-ha4-testbasisanalyse-a4.html · Nav: HA4 Testbasis-Analyse A4 · `<title>`: HA4 Testbasis-Analyse A4 — QA Lernwebseite · `<h1>`: Testbasis-Analyse A4 · Untertitel: HA4 · Testbasis-Analyse für GroceryMate im Kontext von CTFL Kapitel 4.1  
- **HA5 Erklärseite:** 04c-ha5-testfallentwurf.html · Nav: HA5 Testfallentwurf · `<title>`: HA5 Testfallentwurf — QA Lernwebseite · `<h1>`: Testfallentwurf · Untertitel: HA5 · Testfallentwurf für drei neue Features im Kontext von CTFL Kapitel 4  
- **HA5 A4-Dokument:** 04d-ha5-testfallentwurf-a4.html · Nav: HA5 Testfallentwurf A4 · `<title>`: HA5 Testfallentwurf A4 — QA Lernwebseite · `<h1>`: Testfallentwurf A4 · Untertitel: HA5 · Testfallentwurf für GroceryMate im Kontext von CTFL Kapitel 4  

*Gruppe 4:*  
- **HA5 Erklärseite:** 05a-ha5-testkonzept.html · Nav: HA5 Testkonzept · `<title>`: HA5 Testkonzept — QA Lernwebseite · `<h1>`: Testkonzept · Untertitel: HA5 · Testkonzept für GroceryMate im Kontext von CTFL Kapitel 5  
- **HA5 A4-Dokument:** 05b-ha5-testkonzept-a4.html · Nav: HA5 Testkonzept A4 · `<title>`: HA5 Testkonzept A4 — QA Lernwebseite · `<h1>`: Testkonzept A4 · Untertitel: HA5 · Testkonzept für GroceryMate im Kontext von CTFL Kapitel 5 · IEEE 829-2008  

---

## 8. Nächste Schritte *(Sollstruktur Version 2)*

**1. Erste Sollstruktur Version 2 (umgesetzt)**
- Die Website folgt der festgelegten Informationsarchitektur (Abschn. 4).
- Primärachse: ISTQB / CTFL-Lehrplan als normativer Kern.
- Sekundäre Ebenen strukturieren die Inhalte: Orientierung / Überblick, Nachschlagen / Begriffe / Übersetzung, Praxis / Anwendung, Visualisierung / Veranschaulichung.
- Die didaktische Zusatzebene (Selbstkontrolle / Prüfungsvorbereitung) ist keine eigene Hauptstruktur, sondern wird innerhalb von Seiten und Komponenten umgesetzt.

**2. Grundformen der Seiten (umgesetzt)**
- **Hauptsystem** als kanonischer Standard für normale Inhaltsseiten.
- **Dokument-/A4-Modus** als definierter Sonderfall.
- **Einstiegs-/Übersichtsseite** als Variante des Haupttyps (funktionale Sonderrolle Orientierung / Einstieg, technisch im Hauptsystem).

**3. Rolle der Komponenten**
- Kanonische Komponenten (Abschn. 6) bilden die verbindliche gemeinsame Basis.
- Komponenten in Vereinheitlichung / Grauzone werden schrittweise geklärt – **nächster großer Block: Komponentenstil / V2-Designsystem light** (Abschn. 9).
- Lokaler Inhalt bleibt möglich und muss nicht künstlich generalisiert werden.

**4. Rolle der Benennungslogik (umgesetzt)**
- Benennung (Abschn. 7) ist strukturell festgezurrt und technisch umgesetzt.
- Neue oder überführte Inhalte sollen derselben Benennungslogik folgen.
- Formale Schreibweisen können bei Bedarf in einem späteren Schritt präzisiert werden.

**5. Logische nächste Schritte (aktuell)**
1. **Phase 3 – Formale Einheitlichkeit** — Terminologie, Metadaten, Querverweise; Web- und A4-Seiten über die bereits optimierte HA4/HA5-Kernstrecke hinaus angleichen (messbar).
2. **Komponentenstil / V2-Designsystem light** ausarbeiten (Abschn. 6 und 9) — Darstellungsregeln der kanonischen Komponenten festhalten; **Story-/Dokumentenkette-Box** und **didaktische Info-Box** aus Phase 2 explizit benennen und verallgemeinern.
3. Anschließend Rückkehr zur Konsistenz- und Darstellungsregel-Ebene auf höherem Niveau.

*(Erledigt: V2-Migration; V2-Aktivierung; Root-Index bereinigt; Benennungslogik Runde 1 festgezurrt; Benennungsmatrix Gruppen 1–4 dokumentiert; technische Umsetzung der Matrix; Root-Index final; **Phase 1 + Phase 2** inhaltliche Optimierung HA4/HA5, Git `9b4349e`.)*

---

## 9. Komponentenstil / V2-Designsystem light *(Darstellungsregeln der kanonischen Komponenten – nächster Arbeitsblock)*

Dieser Abschnitt dokumentiert eine Erkenntnis, die beim praktischen Neubau der ersten V2-Seiten (heute z. B. Landkarte, Glossar) sichtbar wurde. Er gehört zum konzeptionellen Arbeitsbereich und beschreibt den **nächsten Architekturpunkt**: die explizite Festlegung eines Komponentenstils. **Aktueller Stand:** Die Benennungslogik (Abschn. 7) ist umgesetzt. **Zusätzlich (21.03.2026):** In **Phase 2** wurden auf 04a/04c/05a **konkrete Darstellungsentscheidungen** für Story- vs. didaktische Boxen getroffen (siehe Ergänzung in Abschn. 6) — sie sind **noch nicht** das vollständige Designsystem light, sondern **Input** für die hier folgende Ausarbeitung. **Nächster großer Architektur-Arbeitsblock:** Komponentenstil / V2-Designsystem light formal schließen; **vorangehend oder parallel** aus Projektsteuerung: **Phase 3 Formale Einheitlichkeit**.

**1. Entstehung der Erkenntnis**
- Beim praktischen Neubau der V2-Seiten zeigte sich: Das System funktioniert strukturell – gemeinsame Grundform, klare Komponenten, sinnvolle Überführung der Inhalte.
- Gleichzeitig wurden Unterschiede in der konkreten visuellen Ausprägung wiederkehrender Komponenten sichtbar (z. B. Meta-Bereich, Hinweis-/Info-Box, Legende, Tabellen-/Referenzbereich; Größen, Abstände, Stilnuancen).
- Diese Unterschiede liegen nicht primär an der Informationsarchitektur oder am Template, sondern daran, dass die Darstellungsregeln der kanonischen Komponenten noch nicht explizit als eigener Standard festgehalten sind.
- Das ist kein Mangel des Templates, sondern ein eigenständiger nächster Systemschritt: die explizite Festlegung eines Komponentenstils bzw. eines V2-Designsystems light.

**2. Fachliche Einordnung**
- Der Punkt gehört nicht mehr primär zur Informationsarchitektur (Abschn. 4) und auch nicht nur zur Frage der Seitentypen (Abschn. 5).
- Er betrifft die **standardisierte Darstellung** wiederkehrender Komponenten und kann als **Komponentenstil**, **V2-Designsystem light** oder **Darstellungsregelwerk der kanonischen Komponenten** verstanden werden.
- Abgrenzung: Das Template beantwortet die **Grundform** der Seite (Rahmen, Hauptbereiche). Die Komponenten (Abschn. 6) beantworten, **welche** Bausteine es gibt. Dieser Punkt beantwortet, **wie** diese Bausteine systemweit aussehen und variieren sollen.

**3. Warum das wichtig ist**
- Ohne einen solchen Standard kann das System strukturell richtig, in der Ausprägung aber uneinheitlich bleiben.
- Für Konsistenz, Wartbarkeit und professionelle Weiterentwicklung braucht das System deshalb nicht nur Struktur-, sondern auch **Darstellungsregeln auf Komponentenebene**.

**4. Warum es als nächster Block ansteht**
- Zuerst mussten die groben Systemfragen geklärt und umgesetzt werden: Informationsarchitektur, Seitentypen, Komponenten, Benennungslogik, technische Umsetzung der Matrix.
- Die Stilfrage der Komponenten wurde dadurch nicht ignoriert; sie war bisher implizit mitgedacht.
- Durch den praktischen V2-Bau wurde deutlich, dass sie als eigener Architekturpunkt **explizit** benannt und verankert werden soll – jetzt, da die Benennungsumstellung abgeschlossen ist.

**5. Strategischer Umgang (nächster Schritt)**
- Dieser Punkt ist der **nächste große Arbeitsblock**.
- Vorgehen: Die wiederkehrenden Stilabweichungen und Muster in den bestehenden V2-Seiten (pages/) auswerten; daraus einen **kompakten Stilstandard / Darstellungsstandard** für die kanonischen Komponenten ableiten und dokumentieren.
- Konkrete Detail-Designregeln werden in diesem Abschnitt bewusst noch nicht festgelegt; sie folgen aus der Ausarbeitung.
