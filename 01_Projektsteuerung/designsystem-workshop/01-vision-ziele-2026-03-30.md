# Session 1: Vision & Ziele

**Stand:** 2026-03-30  
**Workshop:** Designsystem — Session 1 von 4 (Top-down: WARUM → WAS → WIE)  
**Primärquellen:** [01_Project_Charter.md](../01_Project_Charter.md), [03_Project_Standards.md](../03_Project_Standards.md) (v. a. §2, §3, §6, §7), [README QA_Lernwebseite](../../02_Portfolio/QA_Lernwebseite/README.md)  
**Ergänzend:** Root-[README.md](../../README.md), [index.html](../../02_Portfolio/QA_Lernwebseite/index.html) (Willkommenstext), [website-analyse-2026-03-28.md](website-analyse-2026-03-28.md) (Meta-Stichproben), [komponenten-analyse-2026-03-30.md](../../02_Portfolio/QA_Lernwebseite/komponenten-analyse-2026-03-30.md) (technische Bestandsaufnahme — liegt unter `02_Portfolio/QA_Lernwebseite/`, nicht im Workshop-Ordner).

*Die folgenden Abschnitte sind **Auswertung und Zusammenführung**, keine wörtliche Abschrift.*

---

## 1.1 Vision & Zweck

**Erkenntnisse**

Die *QA_Lernwebseite* ist im Programm **QA-Track** das **sichtbare digitale Hauptprodukt** im Monorepo: Sie soll **Orientierung, Nachschlagen, Anwendung und Visualisierung** entlang des **ISTQB CTFL v4.0.2** bieten und eine **didaktische Ebene** zur Selbstkontrolle und **Prüfungsvorbereitung** — eingebettet in ein größeres Setup aus **Kurs (MasterSchool / Notion)**, **Hausaufgaben**, **Portfolio** und **Steuerung** ([Charter §1–2](../01_Project_Charter.md)).

**Warum es die Website gibt (Kern):**

1. **Lern- und Referenzmedium** mit CTFL als **normativem Kern**, aber **ohne** Anspruch, offizielles Lehrwerk oder Kursabgabe zu ersetzen ([Charter §4 „Rolle der Website“](../01_Project_Charter.md); [README Website](../../02_Portfolio/QA_Lernwebseite/README.md)).  
2. **Berufsnähe & Nachweisbarkeit:** strukturierte Artefakte und **nachvollziehbare Dokumentation** (u. a. IEEE-/ISO-Bezüge im Lernkontext, Fallstudie GroceryMate HA4–HA6) zur **Portfolio- und Berufsfähigkeit** ([Charter §3](../01_Project_Charter.md)).  
3. **Technische Einheit:** ein **Hauptsystem** für reguläre Seiten plus **Dokument-/A4-Modus** für formale, drucknahe Darstellung — bewusst **zwei Darstellungsebenen** innerhalb desselben Systems ([Charter §2](../01_Project_Charter.md); [Standards §6](../03_Project_Standards.md)).

**Was sie von „einfach CTFL-Material“ unterscheidet (Synthese):**

| Aspekt | Kurzinterpretation |
|--------|---------------------|
| **Integration** | Theorie (Kap. 1–6) und **praktische HA-Strecke** (GroceryMate) sind auf der Site **verzahnt** und über Querverweise verbunden — nicht nur ein Syllabus-Abdruck. |
| **Normen & Formate** | Einheitliche Zitierweise CTFL; **IEEE 829-2008** / **29119-3** als **strukturierende** Referenz für Testdokumente; **A4-Layout** für ausgewählte Abgaben ([Standards §2](../03_Project_Standards.md); [README Website](../../02_Portfolio/QA_Lernwebseite/README.md)). |
| **Öffentliches Repo & Lizenz** | **CC BY-NC-SA 4.0**, GitHub Pages — explizit als **persönliches Lern- und Entwicklungsprojekt** mit Transparenz des Quelltexts ([index.html](../../02_Portfolio/QA_Lernwebseite/index.html)). |
| **Standards-Seite** | `00b-standards.html` adressiert **Projekt-/Web-Standards und Status** — **außerhalb** der CTFL-Kapitel-Linie, aber Teil der Navigation ([README Website](../../02_Portfolio/QA_Lernwebseite/README.md)). |

**Besonderheiten:** **Portfolio-taugliche** Web- und A4-Artefakte; **zweigleisige Navigation** (Lernmaterial | Hausaufgaben); **kein** Ersatz für offizielle MasterSchool-Abgaben ([Charter §4](../01_Project_Charter.md)).

**Quellen:** [01_Project_Charter.md](../01_Project_Charter.md) §1–5; [03_Project_Standards.md](../03_Project_Standards.md) §2; [README QA_Lernwebseite](../../02_Portfolio/QA_Lernwebseite/README.md); [index.html](../../02_Portfolio/QA_Lernwebseite/index.html).

---

## 1.2 Nutzer & Kontext

**Erkenntnisse**

| Frage | Beantwortbarkeit | Inhalt |
|-------|------------------|--------|
| **Primärer Nutzer** | **Implizit klar** | Das Programm ist dokumentiert als **Ein-Personen-Projekt** mit fokussierter Verantwortung **chd108** ([Charter §6 / Rollen](../01_Project_Charter.md)). Die Website adressiert **dieselbe Person** als Lernende und Autorin. |
| **Sekundärnutzer** | **Aus README/Lizenz ableitbar** | **Öffentliche** Publikation (GitHub Pages, CC BY-NC-SA): potenziell **andere Lernende**, **Prüfer/Arbeitgeber** im Portfolio-Kontext — aber **nicht** als persona mit Anforderungsprofil dokumentiert. |
| **Kontext** | **Ja** | **Weiterbildung QA (MasterSchool)** explizit im Willkommenstext; **Selbstlernen** und **Kursführung** über **Notion-Lernplan** ([Standards §2](../03_Project_Standards.md); [index.html](../../02_Portfolio/QA_Lernwebseite/index.html); Root-[README](../../README.md)). |
| **Prüfungsvorbereitung** | **Ja** | Explizites strategisches Ziel **ISTQB CTFL Prüfungsreife** ([Charter §3](../01_Project_Charter.md)). |
| **Vorkenntnisse** | **Kaum dokumentiert** | Weder Charter noch Standards definieren eine **Zielgruppe „Einstieg vs. Fortgeschritten“** für die Website. Annahme: Alignment mit **CTFL-Kurs** — konkrete Voraussetzungen (Vorkenntnis Programmierung, Englischniveau, …) **fehlen**. |

**Quellen:** [01_Project_Charter.md](../01_Project_Charter.md) §3, §6; [03_Project_Standards.md](../03_Project_Standards.md) §2; [index.html](../../02_Portfolio/QA_Lernwebseite/index.html); [README.md](../../README.md).

---

## 1.3 Lern-Ziele

**Erkenntnisse** (gebündelt aus Charter-Zieltabelle und README-Zielblock)

**Was der Nutzer können soll (Kompetenzen):**

- **CTFL-Kernkonzepte erklären**, Testtechniken **anwenden**, **prüfungsnahe** Aufgaben bearbeiten ([Charter §3 — Prüfungsvorbereitung](../01_Project_Charter.md)).  
- **Testfälle, Testkonzept und projektbezogene Testartefakte** nach anerkannten Mustern ausarbeiten und **dokumentieren** (Bezug IEEE/ISO im Lernkontext; HA4/HA5-Strecke) ([Charter §3](../01_Project_Charter.md)).  
- **Arbeitsweise und Dokumentationskompetenz** über **nachweisbare Artefakte** (Website, strukturierte Abgaben, Repo) **extern darstellbar** machen — Niveau **„professionell genügendes Lern-Portfolio“** ([Charter §3](../01_Project_Charter.md)).

**Was er verstehen soll (Wissen / Einordnung):**

- **Theorie und Praxis des Testens** systematisch mit **CTFL-Lehrplan** verzahnt; **Normen** didaktisch **einordnen**, nicht als Vollnorm ([Charter §2](../01_Project_Charter.md)).  
- **Zusammenhänge Fallstudie:** GroceryMate von Analyse über Konzept bis **Testdurchführung und Berichte** ([README Website](../../02_Portfolio/QA_Lernwebseite/README.md)).

**Was er „haben“ soll (Artefakte / Deliverables):**

- **Lernwebsite** als integriertes Ergebnis; **Hausaufgaben- und Studienartefakte** (Repo-Struktur); **Portfolio** ggf. **zusätzlich** zum Monorepo laut Kurs — Charter nennt **fünf Ergebnislinien** ([Charter §5](../01_Project_Charter.md)).  
- Konkret auf der Website: **Web-Module** + **A4-Dokumente** (z. B. Testkonzept, Testfallentwurf, Testprotokoll, Fehlerbericht) als **referenzierbare Dokumente** ([README Website](../../02_Portfolio/QA_Lernwebseite/README.md)).

**Quellen:** [01_Project_Charter.md](../01_Project_Charter.md) §3, §5; [README QA_Lernwebseite](../../02_Portfolio/QA_Lernwebseite/README.md) („Ziel“).

---

## 1.4 Informationsarchitektur (IST)

**Erkenntnisse**

**Haupt-Bereiche (Navigation & Einstieg):**

1. **Lernmaterial** — `main-nav--learn`: Einstieg, Landkarte, Glossar, Grundlagen, Testmittel, SDLC, Teststufen, statisches Testen, Testverfahren, Testmanagement, Testwerkzeuge, **Standards** ([README Website](../../02_Portfolio/QA_Lernwebseite/README.md)).  
2. **Hausaufgaben** — `main-nav--assignments`: HA-Einordnung, HA4–HA6 (Web- und A4-Seiten) ([README Website](../../02_Portfolio/QA_Lernwebseite/README.md)).  
3. **Einstiegsseite** spiegelt dieselbe Zweiteilung in **zwei Kartenbereichen**; **Standards** ist inhaltlich **nicht** CTFL-Kapitel, sondern **Meta/Projekt** — im Orientierungstext der Startseite erklärt ([index.html](../../02_Portfolio/QA_Lernwebseite/index.html)).

**Informations-Typen (sprachlich im Projekt vorkommend):**

- **CTFL-Pflichtstoff** entlang **Kap. 1–6** (Tabelle `pages/` ↔ Kapitel) ([README Website](../../02_Portfolio/QA_Lernwebseite/README.md); [Standards §2 Lernplan](../03_Project_Standards.md)).  
- **Fallstudie / Story** GroceryMate (HA4–HA6) mit **Traceability** und Normenbezug ([README Website](../../02_Portfolio/QA_Lernwebseite/README.md)).  
- **Meta:** Projektstandards, Web-Konventionen, Repo-Status (`00b-standards.html`).  
- **„Praxis“** als didaktisches Label (z. B. Landkarten-Karte: „Masterschool-Bezüge“) — **keine** formale Taxonomie „Pflicht vs. Praxis vs. Extra“ in den Steuerdokumenten außer der **Lernphasen-Tabelle** (Grundlagenphase, Testdesign-Phase, …) in [Standards §2](../03_Project_Standards.md).

**Definierte Kategorien / Tags:**

- **Kein zentrales Tag-System** in Charter/Standards beschrieben.  
- **Landkarte** wird auf der Einstiegskarte mit **„Themen-Tagging“** beworben ([index.html](../../02_Portfolio/QA_Lernwebseite/index.html)) — Detailgrad der Tags **nicht** in den Primärquellen spezifiziert.  
- **Spezialseite `02c-teststufen.html`** nutzt eigene **Klassen-Tags** (`.tag-ctfl`, `.tag-praxis`, …) — **lokal**, nicht als globales Kategorienschema dokumentiert ([komponenten-analyse](../../02_Portfolio/QA_Lernwebseite/komponenten-analyse-2026-03-30.md)).

**Quellen:** [README QA_Lernwebseite](../../02_Portfolio/QA_Lernwebseite/README.md); [03_Project_Standards.md](../03_Project_Standards.md) §2, §6, §7; [index.html](../../02_Portfolio/QA_Lernwebseite/index.html).

---

## 1.5 Offene Fragen / Lücken

| Thema | Was fehlt oder ist unklar? |
|-------|----------------------------|
| **Zielgruppen-Personas** | Keine dokumentierte Unterscheidung **Autor vs. externe Leser**; keine **Akzeptanzkriterien** für „fremde“ Nutzer. |
| **Vorkenntnisse** | Keine explizite Definition; kein „Minimum vor Kapitel 4“ o. Ä. |
| **Informations-Typen als Design-Tokens** | Begriffe wie **Story**, **Warnung**, **Dokumentenkette** sind **inhaltlich** da, aber **nicht** als einheitliche **IA- oder UI-Typologie** im Steuerwerk festgeschrieben. |
| **Tagging / Kategorien** | **Keine** kanonische Tag-Liste; Landkarte vs. `02c`-Tags möglicherweise **inkonsistent** für ein Designsystem. |
| **Pfad Komponenten-Analyse** | Workshop-Prompt verwies auf `designsystem-workshop/komponenten-analyse-…` — **Ist-Ablage:** `02_Portfolio/QA_Lernwebseite/komponenten-analyse-2026-03-30.md`. |

---

## 1.6 Vorschläge (Klärungen, Quellen, Vorgehen)

**Was wir in Session 2–4 noch klären sollten**

1. **Designrelevante Inhaltstypen** festlegen (z. B. *Pflicht-Lernkachel*, *Story-Box*, *Norm-Hinweis*, *Formularfeld A4*) und an **bestehende** Komponenten aus der Komponenten-Analyse koppeln.  
2. **Sekundärnutzer** bewusst entscheiden: rein **„Portfolio-Leser“** vs. **„fremder CTFL-Lernender“** — beeinflusst Tonalität, Tiefe, Einstiegshilfen.  
3. **Tagging:** entweder **ein** Projekt-Glossar für Kategorien (CTFL/Praxis/Meta) oder **bewusst** bei Seiten-Spezifika belassen — vermeidet Designsystem-Overhead.

**Welche Quellen zusätzlich helfen könnten**

- [02_Project_Status.md](../02_Project_Status.md) — aktuelle Priorität **P1 Designsystem light**.  
- [website-analyse-2026-03-28.md](website-analyse-2026-03-28.md) — bereits **Nutzerperspektive** (Stichproben, was funktioniert).  
- Einzelne **High-Impact-Seiten** (`01-landkarte`, `05a`, `04d`) für **Story- und Boxen-Muster** beim Feintuning.

**Was ich anders angehen würde (methodisch)**

- **Ein** „Vision“-Dokument im Workshop-Ordner **verlinken** von Charter/README (ein Zeile), damit die Spur **Designsystem ↔ Steuerung** nicht verloren geht.  
- Nach Session 1 kurz **abgleichen**, ob **Offene Fragen** in Charter/Standards **Eintrag** bekommen (optional) oder nur Workshop-intern bleiben — vermeidet Drift.

---

*Ende Session 1 — Vision & Ziele (2026-03-30).*
