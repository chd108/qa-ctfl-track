Datei erstellt: 2026-03-23  
Letzte Aktualisierung: 2026-04-04 — Hausaufgaben-Tabelle **HA3**: Web-SVG unter **`QA_Lernwebseite/assets/ha3-svg/`**; zuvor **2026-04-03** §6 **CSS-Dateien**; …  
Zweck: Definiert Regeln und Standards für Repo-Struktur, Dokumentation und Qualität  
Klassifizierung: Projektsteuerung / Standards  
Normative Orientierung: ISO 21502, PMBOK, ISTQB CTFL Syllabus **v4.0.2**, **IEEE 829-2008**, **ISO/IEC/IEEE 29119-3** (jeweils im **Lern- und Portfolio-Kontext**, ohne Anspruch auf vollständige Normenzertifizierung).

---

# Project Standards — QA-Track

## 1. Zweck & Geltungsbereich

### Zweck

Dieses Dokument ist die **kanonische Regel- und Standardreferenz** für das Arbeitsverzeichnis **`qa-ctfl-track/`** (QA-Track, **Monorepo**): **Ordnerlogik**, **Benennung**, **Ablage**, **Markdown- und Metadaten-Konventionen**, **Qualitäts- und Konsistenzregeln**, den **Integrations-Workflow** der **Lernwebsite** unter **`02_Portfolio/QA_Lernwebseite/`** sowie **Repository Health & Review**.

Dieses Dokument **bündelt** früher auf mehrere Steuerungsdateien verteilte Themen (Repo-Struktur, Benennung, Workflow der Lernwebsite, formale Dokumentationsregeln, Referenz **Repository Health & Review** in Abschnitt 8). **Maßgeblich** für die aktive Arbeit am QA-Track ist ausschließlich die **Project_*-Serie** im Ordner `01_Projektsteuerung/` — **ohne** Verweis auf abzulegende nummerierte Altdateien in diesem Text.

### Geltungsbereich

| Bereich | Einbezogen |
|---------|------------|
| **Gesamt-Repo** | Alle Top-Level-Ordner unter `qa-ctfl-track/` (siehe Abschnitt 3). |
| **Projektsteuerung** | `01_Projektsteuerung/` — **Project_*-Serie:** Charter, Status, diese Standards, Guidelines, Reference Quick. **Website-Architektur und Benennung** sind in **[01_Project_Charter.md](01_Project_Charter.md)** und **diesem Dokument** (u. a. Abschnitt 3, 6, 7) geführt — **ohne** separate Konzeptdatei. |
| **Website** | `02_Portfolio/QA_Lernwebseite/` — öffentliche Lernwebsite als **Unterordner** im **einen** Git-Repository **qa-ctfl-track** (kein separates Website-`.git` mehr). |
| **Hausaufgaben & Kursartefakte** | `03_Hausaufgaben/`. |
| **Referenzen** | `04_Referenzen/` (u. a. ISTQB-PDFs). |
| **Notizen** | `05_Notizen/`. |
| **Archiv** | `06_Archiv/`. |
| **Tests** | `07_Tests/` (lokal; per **`.gitignore`** nicht im Standard-Remote-Umfang). |

### Abgrenzung zu anderen Steuerungsdokumenten (nur **Project_*-Serie**)

- **Programm-Zweck, Vision, Scope:** [01_Project_Charter.md](01_Project_Charter.md)  
- **Aktueller Stand, Meilensteine, Risiken:** [02_Project_Status.md](02_Project_Status.md)  
- **Rollenmodell (fachliche Rollen ↔ Akteure), KI, Kommunikation, Git/Commit:** [04_Project_Guidelines.md](04_Project_Guidelines.md)  
- **Schnellnavigation, Prompt-Bausteine:** [05_Reference_Quick.md](05_Reference_Quick.md)  

*Inhaltlicher Lernplan, Kurslinks und CTFL-Abgleich:* in diesem Dokument **Abschnitt 2**; bei Pfadfragen gilt **Abschnitt 3**. *Architektur, IA und Benennungslogik der Lernwebsite (`QA_Lernwebseite/`):* Rahmen und Qualitätsziele in **[01_Project_Charter.md](01_Project_Charter.md)**; operative Regeln, Ordnerlogik und Integrations-Workflow in **diesem Dokument** (Abschnitt 3, 6 und 7).

---

## 2. Referenzrahmen (CTFL, IEEE, ISO)

### ISTQB Certified Tester Foundation Level (CTFL)

- **Maßgebliche Syllabus-Version:** **v4.0.2** (Lehrplan-Dokument **01.03.2025**).  
- **Ablage im Repo:** `04_Referenzen/ISTQB/ISTQB_CTFL_Lehrplan-2025_V4.0.2_DE.pdf` — von `01_Projektsteuerung/` aus: [ISTQB_CTFL_Lehrplan-2025_V4.0.2_DE.pdf](../04_Referenzen/ISTQB/ISTQB_CTFL_Lehrplan-2025_V4.0.2_DE.pdf) (Version 4.0.2, Stand Lehrplan **01.03.2025**).  
- **Zitierweise in Artefakten und auf der Website:** eindeutig **„CTFL 4.0.2“** bzw. **Kapitelangaben** (z. B. **„CTFL 4.0.2, Kap. 4.2“**); keine missverständlichen Kurzformen (z. B. nicht „CTFL 4.2“ im Sinne einer Version).  
- **Externe Angebote:** [ISTQB.org — CTFL v4.0](https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0) · [GTB Probeprüfungen](https://www.gtb.de/der-certified-tester/probepruefungen/)

### IEEE 829 und ISO/IEC/IEEE 29119-3

- **Testdokumentation (Lern- und Portfolio-Kontext):** Bezug auf **IEEE 829-2008** und **ISO/IEC/IEEE 29119-3** zur **Begriffsbildung** und **Strukturierung** von Testplänen, -fällen und Berichten — **ohne** Behauptung einer vollständigen organisationsweiten Normenumsetzung.  
- **Konsistenz:** Einmal gewählte Normenbezeichnungen (z. B. **IEEE 829-2008**) **projektweit** in Lernmaterial, Website und Hausaufgaben **gleich halten**.

### Kurs- und Lernsteuerung (MasterSchool / Notion)

- **Lernplan und Abgaben:** [Notion – Lernplan](https://www.notion.so/3029418319f381f19aa6c492dfdbcee2?pvs=21)  
- **Übersicht / Assessment:** [MasterSchool Notion – chd108](https://www.notion.so/3029418319f38063bbc2c201c57b7ef4)

### Lernplan — inhaltlicher Roter Faden (mit **aktuellen Projektordnern**)

| Kapitel | Thema | Zeit (ca.) | Zuordnung im Repo `qa-ctfl-track/` |
|---------|-------|------------|-------------------------------------|
| **1** | Grundlagen des Testens | 180 min | Primär **Lernwebsite:** `02_Portfolio/QA_Lernwebseite/` · Referenz: `04_Referenzen/` |
| **2** | Testen im SDLC | 130 min | Wie oben (u. a. SDLC-Seiten, Teststufen) |
| **3** | Statischer Test | 80 min | Wie oben |
| **4** | Testanalyse und -entwurf | 390 min | **`03_Hausaufgaben/`** — HA1–HA3 (Testdesign), dazu Lernmodule auf der Website |
| **5** | Management der Testaktivitäten | 335 min | **`03_Hausaufgaben/`** — u. a. HA4, HA5; ergänzend Lernwebsite unter **`02_Portfolio/QA_Lernwebseite/`** |
| **6** | Testwerkzeuge | 20 min | **`05_Notizen/`**, **`03_Hausaufgaben/`**, Website-Module |

*Ergänzung MasterSchool (Automatisierung):* Selenium, Pytest, DOM/XPath — gemäß Kursphase.

### Hausaufgaben — Ordnerzuordnung (**Ist-Struktur**)

| Nr. | Thema | Ordner unter `03_Hausaufgaben/` |
|-----|-------|----------------------------------|
| **HA1** | Äquivalenzklassen & Grenzwertanalyse | `HA1_Aequivalenzklassen_Grenzwertanalyse/` |
| **HA2** | Entscheidungstabellentest | `HA2_Entscheidungstabellentest/` |
| **HA3** | Zustandsübergang & Überdeckung | `HA3_Zustandsuebergang_Ueberdeckung/` — **Web-Diagramm (SVG):** `02_Portfolio/QA_Lernwebseite/assets/ha3-svg/HA3-Teil2_DAG.svg`, Seite `pages/04e-ha3-ueberdeckung.html` |
| **HA4** | Anforderungen / Testbasis (GroceryMate) | `HA4_Anforderungsanalyse/` |
| **HA5** | Testkonzept & Testfallentwurf | `HA5_Testkonzept_Testfallentwurf/` (inkl. `arbeitsmaterialien/` für **Portfolio-Einrichtung** im Kurs-Sinne, Aufgaben 00–03) |
| **HA6** | Testdurchführung | `HA6_Testdurchfuehrung/` |

**Hinweis „Portfolio“:** Das **Arbeits- und Nachweis-Repository** für dieses Programm ist **`qa-ctfl-track`** (**ein** Git-Monorepo) mit der Lernwebsite unter **`02_Portfolio/QA_Lernwebseite/`**. **`03_Hausaufgaben/`**, **`04_Referenzen/`**, **`05_Notizen/`**, **`06_Archiv/`** und **`07_Tests/`** sind per **`.gitignore`** derzeit **nicht versioniert** (lokal vorhanden; spätere Aufnahme möglich). Eine **zusätzliche**, separat zu pflegende Bewerbungs-Portfolio-Repository ist **kein** Bestandteil der hier beschriebenen Struktur.

### Scope (Ablage — für Qualitätssicherung)

**Im Repo erlaubt und erwünscht:** Unterrichts- und Lernmaterial, Hausaufgaben, Projekt-/Portfoliobezug, externe Quellen (Referenzen), Notizen, Steuerung, Archiv.

**Nicht:** Zugangsdaten/Passwörter; kommerzielle Unterlagen ohne Lernbezug; sinnlose Duplikate (ersetzte Versionen nach **`06_Archiv/`**, Dateinamen nach Möglichkeit **beibehalten**).

### Lernphasen & Review (operative Qualität)

| Phase | ISTQB-Kapitel | Beschreibung |
|-------|---------------|--------------|
| Grundlagenphase | 1–3 | Basiswissen, SDLC, statischer Test |
| Testdesign-Phase | 4 | Black-Box, White-Box, erfahrungsbasiert |
| Automatisierungsphase | 6 + MS | Werkzeuge, Selenium, Pytest |
| Projektphase | 5 | Planung, Risiko, Berichte |
| Prüfungsphase | alle | CTFL-Prüfungsvorbereitung |

**Wöchentliches Selbst-Review (empfohlen):** Was gelernt? Offene Fragen? Wiederholungsbedarf?

---

## 3. Informations- & Ordnerarchitektur

### Top-Level-Struktur `qa-ctfl-track/` (kanonisch)

| Ordner | Zweck |
|--------|--------|
| **`01_Projektsteuerung/`** | **Project_*-Serie** (Charter, Status, diese Standards, Guidelines, Reference Quick). Website-Architektur/Benennung: **[01_Project_Charter.md](01_Project_Charter.md)** + **dieses Dokument** — keine zusätzliche Konzeptdatei. |
| **`02_Portfolio/`** | Enthält **`QA_Lernwebseite/`** — öffentliche Lernwebsite (z. B. GitHub Pages) als **Unterordner** im **Monorepo** **qa-ctfl-track**. **Kein** eingebettetes **`.git`** mehr unter der Website; Commits und Push betreffen **das gesamte** Repo (Website-Änderungen mit Präfix `02_Portfolio/QA_Lernwebseite/`). Siehe **04_Project_Guidelines.md** (Versionskontrolle). |
| **`03_Hausaufgaben/`** | Hausaufgaben HA1–HA6; pro HA typischerweise `00_Loesung*`, `01_Original_Aufgabe*`, `02_Aufgabe_umformuliert*`, `03_Beispiel*` (Abweichungen nur bewusst, z. B. HA5 mit geteilten Beispieldateien). |
| **`04_Referenzen/`** | ISTQB-Lehrplan, Sample Exams, Normen-PDFs, externe Links — README pflegen. |
| **`05_Notizen/`** | Unterrichtsnotizen, Übungen, temporäre Texte (`ddmm.txt` o. Ä. kann historisch existieren). |
| **`06_Archiv/`** | Abgeschlossene oder ersetzte Themen; Unterordner nach Thema möglich (z. B. `alt-claude-PW/`, `Projektsteuerung_alt/`); jeweils kurz per **README** erklären. |
| **`07_Tests/`** | Lokale Test-/Experimentier-Artefakte; per **`.gitignore`** derzeit **nicht** Teil des Standard-Commit-Umfangs. |

**Root:** Keine losen Arbeitsdateien; ausnahmslos **`README.md`** als Einstieg (siehe Abschnitt 8 — Referenz-Snapshot).

*Historisch:* Vor Umbenennung der Top-Level-Ordner existierten andere Verzeichnisnamen und eine andere Steuerungsdatei-Struktur. **Nach Archivierung des Altbestands** sind diese Namen **nur noch im Archiv** nachvollziehbar — in aktiven **Project_*-Dokumenten** wird **nicht** auf einzelne Legacy-Dateien verwiesen.

### Logik der Steuerungsdokumente im Ordner `01_Projektsteuerung/`

| Ebene | Bedeutung | Kanonische Dateien (Zielbild) |
|-------|-----------|--------------------------------|
| **Programm** | Zweck, Ziele, Umfang | `01_Project_Charter.md` |
| **Status** | Stand, Meilensteine, Risiken, nächste Schritte | `02_Project_Status.md` |
| **Standards** | Repo, Dokumentation, Qualität, Workflow | **`03_Project_Standards.md`** (dieses Dokument) |
| **Richtlinien** | Rollenmodell (fachliche Rollen ↔ Akteure), KI, Kommunikation, Git | `04_Project_Guidelines.md` |
| **Navigation & Prompts** | Aktion → Ort, Textbausteine | `05_Reference_Quick.md` |
| **Architektur Website** | System, IA, Benennung, A4 | **[01_Project_Charter.md](01_Project_Charter.md)** (Programmrahmen, Website-Rolle) und **dieses Dokument** (Abschnitt 3, 6, 7) |
| **Analysen / Snapshots** | Qualitäts- oder Hausaufgaben-Reviews | Datierte Markdown-Dateien nach Bedarf im Steuerungsordner oder unter `06_Archiv/` |

---

## 4. Benennungs- und Ablagestandards

### Dateinamen (allgemein)

**Format:** `YYYY-MM-DD_Thema_Typ.[ext]` — gilt für **neue** Dateien über alle Typen hinweg, soweit sinnvoll.

**Hausaufgaben-Artefakte:** Präfix **`HAx_`** zur Zuordnung (z. B. `HA1_`, `HA2_`) in Kombination mit Datum, wo üblich.

**Beispiele:**

- `2026-02-27_HA1_Grenzwertanalyse_Versandkosten_HA.xlsx`  
- `2026-02-27_HA2_Entscheidungstabelle_Zugticket_HA.xlsx`

### Dokumenttypen (Suffix `Typ`)

| Typ | Bedeutung |
|-----|-----------|
| **HA** | Hausaufgabe |
| **NOTE** | Unterrichtsnotiz |
| **REF** | Externe Referenz / Abschrift |
| **PROJ** | Projektbezug |
| **TESTCASE** | Testfall / testcase-Bezug |

### Ablage- und Archivregeln

1. Jede Hausaufgabe erhält **eigene** Dateien im **zugehörigen** Unterordner von `03_Hausaufgaben/`.  
2. **Keine** losen Dateien im **Root** von `qa-ctfl-track/`.  
3. Neue dateibasierte Artefakte: **Datum** `YYYY-MM-DD` im Namen, sofern nicht ausnahmsweise sinnlos (z. B. feste Kursvorlagen).  
4. Abgeschlossene oder ersetzte Themen: nach **`06_Archiv/`** verschieben; **ursprünglichen Dateinamen** bevorzugt **beibehalten**.  
5. **HA-Navigation in Verweiszeilen:** Reihenfolge **Original** vor **umformulierte Aufgabe**: `01_Original_*` → `02_Aufgabe_umformuliert_*`.
6. **Markdown-Metadaten** für **neue** oder **inhaltlich überarbeitete** `.md`-Artefakte: **§5** *Markdown in `03_Hausaufgaben/`* — **Metablock Variante B** (nicht nur README-Kurzform).

### Ausnahmen und technische Sonderfälle

- **Git-Root** ist **`qa-ctfl-track/`** (ein Repository). **`02_Portfolio/QA_Lernwebseite/`** hat **kein** eigenes **`.git`**; Website-Änderungen werden **im Monorepo** committet. Regeln in **04_Project_Guidelines.md** (Abschnitt Versionskontrolle & Git). Ein früheres separates Website-Repository und zugehörige **Subtree-/Zweit-Remote-Workflows** sind **obsolet** (Remote nicht mehr vorhanden).  
- **Kursaufgabe Portfolio-Einrichtung:** liegt unter **`03_Hausaufgaben/HA5_Testkonzept_Testfallentwurf/arbeitsmaterialien/`** (Dateien `*_Portfolio_Einrichtung.md`), nicht als eigener Top-Level-Ordner.

---

## 5. Dokumentationsstandards (Markdown)

### Metablock für Master-Dokumente in `01_Projektsteuerung/`

**Variante A (dreizeilig, kompakt):**

```text
Erstellt am: YYYY-MM-DD
Zuletzt aktualisiert am: YYYY-MM-DD
Zweck: Kurzbeschreibung des Dokuments.
```

**Variante B (neue Project_*-Serie, empfohlen):**

```text
Datei erstellt: YYYY-MM-DD
Letzte Aktualisierung: YYYY-MM-DD
Zweck: …
Klassifizierung: …
Normative Orientierung: …
```

Die Metadaten stehen am **Anfang** der Datei; danach Trennlinie `---` und der Hauptinhalt.

### README-Dateien

**Geltung:** Alle **`README.md`** im Repo — **Root**, **Top-Level-Ordner**, **Unterordner** (z. B. Website, Referenzen, Archiv), sofern nicht ausnahmsweise leer oder rein technisch.

| Regel | Inhalt |
|--------|--------|
| **Mini-Metablock** | Eine Zeile als **Blockzitat** (Markdown `>`): **`> Zuletzt aktualisiert: YYYY-MM-DD`** |
| **Position** | **Unmittelbar unter** der **Hauptüberschrift** der Datei (`# …`) — vor dem ersten Fließtext-Absatz |
| **Kein voller Metablock** | **Keine** Zeilen wie „Datei erstellt“, „Zweck“, „Klassifizierung“ — das bleibt den **Project\_*-Steuerdateien** in `01_Projektsteuerung/` vorbehalten |
| **Ausnahme** | **`01_Projektsteuerung/designsystem-workshop/README.md`** — **Master-Dokument**-Einstieg zum Workshop: **Variante B** (Abschnitt *Metablock für Master-Dokumente in `01_Projektsteuerung/`* in diesem Dokument) mit **Datei erstellt** und **Letzte Aktualisierung** **vor** der `#`-Überschrift, danach `---`, dann Inhalt (gleiche Reihenfolge wie Project\_*-Serie). |
| **Aktualisieren** | Datum bei **inhaltlichen** Änderungen am README anpassen |

**Begründung:** READMEs sind **Einstiegs-** und **Orientierungsdokumente**, keine Steuerungs-Masterdateien. **Schnelle Lesbarkeit** wiegt schwerer als vollständige Metadaten; das **Datum** signalisiert **Aktualität**.

**Beispiel:**

```markdown
# QA-Track

> Zuletzt aktualisiert: 2026-03-23

Kurzer Einleitungstext …
```

*Alternative:* Das Blockzitat kann **direkt vor** der ersten `#`-Überschrift stehen (z. B. ganz oben in der Datei), wenn die Überschrift den Projektnamen trägt — dann bleibt die **Zeile „Zuletzt aktualisiert“** sichtbar ohne die H1 zu spalten.

### Markdown in `03_Hausaufgaben/` (Hausaufgaben-Artefakte)

**Geltung:** Markdown-Dateien unter **`03_Hausaufgaben/`** (z. B. **Lösungen**, Teilbearbeitungen, strukturierte Abgabetexte) — **nicht** die **`README.md`**-Kurzregel aus dem vorigen Abschnitt.

**Metablock:** **Variante B** wie unter *Metablock für Master-Dokumente in `01_Projektsteuerung/`* — **Datei erstellt**, **Letzte Aktualisierung**, **Zweck**, **Klassifizierung**; **Normative Orientierung** **optional** (z. B. ISTQB-Kapitel, Kursbezug).

**Aufbau:** Metadaten **am Anfang** der Datei (vor der ersten `#`-Überschrift), danach **`---`**, dann **Hauptüberschrift** und Fließtext — gleiche Reihenfolge wie bei der **Project\_*-Serie**.

**Klassifizierung (Beispiele):** `03_Hausaufgaben / HA3 / Lösung` bzw. `… / Arbeitsmaterial` — kurz und wiedererkennbar (Nummer der jeweiligen HA einsetzen).

**Bestandsdateien** ohne diesen Kopf: **kein** Pflicht-Rückbau; bei **nächster inhaltlicher Bearbeitung** den Metablock **ergänzen**. Neue Dateien **von Anfang an** so anlegen.

### Chronologische Inhalte

Bei Changelogs, Protokollen, Status-Historien:

- **Neueste Einträge oben**  
- **Ältere unten**

### Änderungen an Regeln und Struktur

Wesentliche Änderungen an **Struktur, Regeln oder Prozessen** **zuerst** in den **zuständigen Steuerungsdokumenten** festhalten (dieses Dokument, Charter, Status, Systemkonzept). Feld **„Letzte Aktualisierung“** / **„Zuletzt aktualisiert“** bei inhaltlichen Änderungen anpassen.

### Berichte und Prüfzusammenfassungen

- **Standard:** Ergebnisse in **Chat** oder in **bestehende** Steuerungsdokumente (z. B. Status) **einarbeiten** — **ausgenommen** der **Repository Health Check** (Prompt in **05_Reference_Quick.md**): dort **nur Chat**, **keine** Ablage des Befunds in Projektdateien.  
- **Keine** spontanen neuen Berichtdateien im **Root** oder in **Teilprojekt-Roots** — **außer** ausdrücklich gewünscht (z. B. datierter Analyse-Snapshot im Steuerungsordner nach festgelegtem Namensschema).  
- **Reports** nicht als „Ballast“ in `02_Portfolio/QA_Lernwebseite/` ablegen, wenn sie nicht zur öffentlichen Website gehören.

---

## 6. Qualitäts- und Konsistenzregeln

### QA_Lernwebseite — gemeinsamer Seitenrahmen

- **Unterseiten** nutzen den **gemeinsamen sichtbaren Rahmen** (Navigation, Titel, Untertitel, **meta-bar**, optional **Seitenlegende** `nav.legend`, Inhalt, Footer). **Technik und Platz** der Legende: **04d** Teil **B.12** (**F-LEGEND**); **keine** Standort-Ausnahmen pro Seite.  
- **Index (`index.html`):** bewusste Ausnahme — **Einstiegs-/Übersichtsseite**; **Karten** ersetzen dort die **obere** Navigationslogik der Unterseiten.  
- **Formular- / A4-Seiten:** kein eigener „Sondertyp“ im Sinne eines völlig freien Layouts außerhalb des Systems; **Abweichungen** primär im **lokalen Formular-/A4-Inhaltsbereich** (technisch gekapselt).  
- **Dokument-/A4-Modus:** eigener **Präsentations-/Layoutmodus** innerhalb desselben Systems — Rahmen im **[01_Project_Charter.md](01_Project_Charter.md)**; Umsetzungs- und Konsistenzregeln in **diesem Dokument** (Abschnitt 6 und 7).

### CSS-Dateien: Rollen (`assets/css/`)

**Einordnung:** Aufteilung in mehrere Stylesheets ist **Organisation** (Schichten, Wartbarkeit), **kein** technisches Muss des Browsers; analog zu gängigen Architekturmustern (z. B. **Basis** vs. **Layout**).

| Datei | Inhalt (Oberbegriffe) | Strategie / Warum |
|--------|------------------------|-------------------|
| **`base.css`** | Design-Tokens (`:root`), globale Typo/Grundlagen, Navigations-/Page-Chrome, wiederverwendbare Bausteine (Chips, Legenden, Kacheln, …) | **Gemeinsame Basis** für die ganze Site; ein Ort für alles, was überall oder oft vorkommt. |
| **`subpage.css`** | Layout-Muster **Seitenkopf** (`header`, `h1`, Untertitel) und **Fuß** (`.source-note`) | **Schicht** für ein wiederkehrendes Unterseiten-Muster, getrennt von der großen Basisdatei — kürzer, gezielter pflegbar. |
| **`doc-a4.css`** | Zusätzliche Schicht für **A4-/Formularseiten** (Druck-/Dokumentlayout) | Wird **nach** `base.css` und `subpage.css` eingebunden, wo der A4-Modus gilt (siehe Checkliste unten, §7). |

### Inhaltliche und terminologische Konsistenz

- **CTFL 4.0.2** als inhaltlicher **Leitfaden**; Begriffe dort, wo die Website oder HA-Artefakte **Normen** nennen, **einheitlich** und **prüfungsnah** halten.  
- **Testdokumentation:** konsistente Bezüge zu **IEEE 829-2008** / **29119-3** im **Lernkontext** (siehe Abschnitt 2).  
- **Querverweise** zwischen Lernmodulen, HA-Erklärseiten und A4-Dokumenten **pflegen** (Broken Links vermeiden).

### Barrierefreiheit und Web-Qualität (Lernwebsite)

- Semantisches **HTML**, sinnvolle **Überschriftenhierarchie**, **Skip-Link**, **`main id="main"`**, nachvollziehbare **Linktexte** und **`aria-label`** für Navigationsleisten — gemäß Vorlagen und bestehendem Hauptsystem.  
- **Keine unnötige Komplexität** in CSS/JS; Wartbarkeit vor Effekt.

### Informationsarchitektur und Designsystem-Workshop (Verweis)

- **Fundierung (IA, Content Taxonomy, Drei Ebenen):** `01_Projektsteuerung/designsystem-workshop/P02-04-modell-drei-ebenen.md` — **§1.0** (Begriffe, Problem/Lösung, Kurzreferenzen), **§1.1** (Trennung von Belangen).  
- **SOLL-Codes** (C / F / S / P) und Brücke zu Session 3: `designsystem-workshop/P02-06-taxonomie-soll.md`.  
- **IST-Typen** (Session 2): `designsystem-workshop/P02-01-taxonomie-information.md`.  
- **Design-Taxonomie (definiert, Pilot-Phase):** IST→SOLL→Token — `designsystem-workshop/P03-mapping-ist-soll-token.md`; **Umsetzung** der **ca. 15–30** Ziel-Variablen **schrittweise** in `02_Portfolio/QA_Lernwebseite/assets/css/` — siehe [02_Project_Status.md](02_Project_Status.md).
- **Domain CTFL — meta-bar & Seitenlegende:** `designsystem-workshop/P04-04-ctfl-lernwebsite-spec.md` (**B.11** F-META, **B.12** F-LEGEND); **Redaktion** (Labels, *wann* Legende, **ISTQB K-Stufen** im **Hinweis** — **§2.4**): `designsystem-workshop/P05-redaktion-harmonisierung.md`.
- **Design-Spec-Cluster (Einstieg, Priorität, Domain CTFL):** `designsystem-workshop/P04-00-spec-overview.md` — **ergänzt** das Token-Mapping um **04a–d**; **kein** zweites normatives Mapping; Drift-Vermeidung: normative Tabelle bleibt **P03-mapping-ist-soll-token.md**.

---

## 7. Integrations-Workflow QA_Lernwebseite

### Pfad und Git

- **Workspace-Pfad:** `02_Portfolio/QA_Lernwebseite/`  
- **Versionierung:** **Gesamt-Repo** **qa-ctfl-track** — Commits können Steuerung, Workflow und Website **gemeinsam** betreffen; für **reine** Website-Änderungen sinnvolle Commit-Nachrichten mit klarem Bezug zu **`02_Portfolio/QA_Lernwebseite/`**. Details und Commit-Stil in **04_Project_Guidelines.md** (Versionskontrolle & Git): u. a. **keine** veralteten internen Layout-Versions-Labels in Nachrichten; sachlich **Hauptsystem**, **Module**, **Dateien** benennen.

### Checkliste: neue oder geänderte Seite

1. **Benennung & Pflichtfelder** gemäß **[01_Project_Charter.md](01_Project_Charter.md)** und **diesem Dokument** (Abschnitt 3 und 7; Benennungslogik, Root-`index.html`, `pages/`).  
2. **Neue Datei** unter `pages/` anlegen; Anbindung: `assets/css/base.css`, `subpage.css`, bei A4/Formular **`doc-a4.css`** (Reihenfolge der `<link>`-Tags wie genannt); **Rollen** der Dateien: **Abschnitt 6**, Unterabschnitt *CSS-Dateien: Rollen*. **Skip-Link**, **`.page-chrome`**, `<main id="main">`, Footer mit Quellenzeile, sinnvolle **Meta-Description**. Orientierung: `templates/referenzvorlage-hauptsystem.html`.  
3. **Kopfnavigation — zwei Leisten** in `.top-nav-zone` (gleiche Reihenfolge überall):  
   - **Lernmaterial:** `nav.main-nav.main-nav--learn` · `aria-label="Lernmaterial"`  
   - **Hausaufgaben:** `nav.main-nav.main-nav--assignments` · `aria-label="Hausaufgaben"`  
   Neuen Link **in allen betroffenen** `pages/*.html` **und** in **`index.html`**, **`templates/referenzvorlage-hauptsystem.html`** eintragen, wenn die Kopfstruktur geteilt wird.  
4. **Einstiegsseite:** neue **Karte** in `index.html` im passenden Bereich (Lernmaterial vs. Hausaufgaben), konsistent zu Nav und **[README.md](../02_Portfolio/QA_Lernwebseite/README.md)**.  
5. **README** der QA_Lernwebseite (Struktur / Seitenliste) aktualisieren.  
6. Bei **Architektur- oder Namensänderungen** **[01_Project_Charter.md](01_Project_Charter.md)** und **dieses Dokument** (Standards), wo betroffen, anpassen — ggf. **[02_Project_Status.md](02_Project_Status.md)** zum Ist-Stand.  
7. **Workflow-Änderungen:** diesen Abschnitt in **`03_Project_Standards.md`** pflegen.

---

## 8. Repository Health & Review

*Hinweis:* Wiederkehrende **Repository Health Checks** (Prompt **Repo_Health_Check_Prompt** in **05_Reference_Quick.md**) liefern ihr Ergebnis **ausschließlich im Chat**; dieser Abschnitt ist **kein** Ablageort für neue Läufe, sondern ein **statischer Referenz-Snapshot** zur Orientierung.

**Stand des Snapshots (einmalig dokumentiert, Pfade/Ordner Monorepo):** 2026-03-23

### Gesamtbewertung

| Aspekt | Bewertung |
|--------|-----------|
| **Repository-Struktur** | Logisch, klar, langfristig nutzbar |
| **Root-Dokumentation** | Klar; Verweis auf Projektsteuerung soll auf **Charter / Status / Standards** zeigen |
| **Dokumentationsqualität** | Gut — READMEs in Hauptordnern; Steuerung wird konsolidiert |
| **Konsistenz** | Ordner- und HA-Schema überwiegend konsequent; vereinzelte Ausnahmen (siehe unten) |
| **Git-Struktur** | **Ein** Repository **qa-ctfl-track**; Lernwebsite unter **`02_Portfolio/QA_Lernwebseite/`**; **`03_Hausaufgaben/`** bis **`07_Tests/`** (jeweils per **`.gitignore`**) optional lokal, nicht im Remote-Pflichtumfang |
| **Sauberkeit** | Root ohne lose Dateien; punktuelle Redundanzen |

**Gesamt: Gut.** Die genannten Schwachstellen sind **klein** und **priorisierbar**.

### Stärken

- **Klare Top-Level-Ordner** (`01_`–`07_`) mit erkennbarem Zweck.  
- **Root-README** als Einstieg; **QA_Lernwebseite** mit eigenem README und klarer Rolle.  
- **HA-Ordner** mit wiederkehrendem Schema (`00_Loesung`, `01_Original`, …).  
- **Arbeitsbaum:** öffentliche Website unter **`02_Portfolio/`**; HA/Referenzen/Notizen/Archiv/Tests können **lokal** genutzt werden, sind per **`.gitignore`** im Remote **optional**.  
- **Archiv** mit README und Themen-Unterordnern.

### Schwachstellen und Risiken

| Thema | Befund |
|-------|--------|
| **Doppelung HA4** | `03_Hausaufgaben/HA4_Anforderungsanalyse/` — `00_Loesung_HA4.txt` und `00_Loesung_HA4.md` (gleicher Typ). Entscheiden: bewusstes Backup oder eine Variante nach `06_Archiv/` / löschen; ggf. in HA4-README vermerken. |
| **Benennung Notizen** | Unter `05_Notizen/` existieren Dateien **ohne** Datums-Präfix / ohne `_NOTE`-Suffix (z. B. `ddmm.txt`). **Neue** Notizen nach Schema anlegen; Bestandes **bei Gelegenheit** umbenennen oder Ausnahmen im `05_Notizen/README.md` dokumentieren. |
| **Archiv-Unterordner** | `06_Archiv/alt-claude-PW/` u. a. — bei weiteren **Alt**-Ordnern kurze **Konvention** im Archiv-README (Thema, keine beliebige Verschachtelung ohne Beschreibung). |
| **Abgleich Alt vs. Neu** | Nach **vollständiger Archivierung** nummerierter Steuerungsdateien: verbleibende **HA-/README-Verweise** im Repo schrittweise auf **diese Standards** und **05_Reference_Quick.md** trimmen. |

### Verbesserungsvorschläge (Priorität)

| Priorität | Maßnahme |
|-----------|----------|
| **Sofort sinnvoll** | HA4: Entscheidung **.txt/.md** treffen und dokumentieren. |
| **Später sinnvoll** | `05_Notizen/`: Benennungsschema für neue Dateien; Altbestand bereinigen oder Ausnahmen README. |
| **Optional** | `06_Archiv/README.md`: Regel zu Unterordnern und Benennung ergänzen. |
| **Fortlaufend** | Struktur- und Qualitätsregeln (Abschnitte 3 ff.) bei echten **Änderungen am Repo** pflegen; **Health-Check-Befunde** nicht hier festhalten (nur Chat). |

### Kurzfassung

Das Repository ist **strukturiert**, **verständlich** und an die **Project_*-Steuerung** angebunden. Die **kanonische Ordnerstruktur** steht in **Abschnitt 3**; verbleibende Arbeit liegt in **Feinabgleich** älterer Artefakt-READMEs und **kleinen Redundanzen** (z. B. HA4 doppelte Lösungsdatei).

---

*Hinweis:* **Repository Health Checks** (Prompt-Bibliothek **05_Reference_Quick.md**) werden **nicht** in diesem Abschnitt abgelegt — **nur Chat-Ausgabe**. Abschnitt 8 bleibt Referenz-Snapshot.
