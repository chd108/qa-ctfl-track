Datei erstellt: 2026-03-23  
Letzte Aktualisierung: 2026-03-23 (Legacy-Verweise → Project_*-Serie)  
Zweck: Dokumentiert aktuellen Projektstand und nächste Schritte  
Klassifizierung: Projektsteuerung / Status  
Normative Orientierung: ISO 21502, PMBOK — angepasst an Lern- und Ein-Personen-Projekt.

---

# Project Status — QA-Track

**Berichtsstichtag:** 2026-03-23 · **Projektinhaber (Alias):** chd108  

*Kurzkontext:* QA-Track ist das **gesamte** ISTQB-CTFL-orientierte Lernprogramm (Material, Hausaufgaben, Portfolio, Website, Notizen, Referenzen, Steuerung). **Vision, Ziele und Scope** siehe [01_Project_Charter.md](01_Project_Charter.md); **Ablage, Benennung, Repo-Struktur und Health Check** siehe [03_Project_Standards.md](03_Project_Standards.md) (insb. Abschnitt 3 und 8).

---

## 1. Statusübersicht (Dashboard)

*(Neueste Einordnung zuerst.)*

| Kennzahl | Einschätzung |
|----------|----------------|
| **Programm-Gesamt** | **Stabil / auf Kurs** — Lern- und Arbeitsrepo ist nutzbar; Kursintegration über Notion/MasterSchool maßgeblich. |
| **Website *QA_Lernwebseite*** | **Technische Basis abgeschlossen** — einheitliches Hauptsystem, `index.html` als alleiniger Einstieg, Benennungslogik inkl. Matrix für aktive Seiten umgesetzt. |
| **Lernstrecke HA4/HA5 (Website)** | **Phasen 1–4 abgeschlossen** (Stand **21.03.2026**) — Konsistenz, Story-/UX, formale Einheitlichkeit (**Phase 3 Abschluss:** **21.03.2026**, siehe Abschnitt 2), Standards-Review inkl. CTFL-/IEEE-829-Zitierlogik; Details und Evidenz siehe Abschnitt 2 und 7. |
| **Hausaufgabe HA6 (Testdurchführung)** | **In Bearbeitung** — Testprotokoll (**06a**) erledigt; **Fehlerbericht (06b)** und **Testabschlussbericht (06c)** ausstehend (siehe Abschnitt 3). |
| **Nächster Schwerpunkt** | **Komponentenstil / Designsystem light** — Rahmen in [01_Project_Charter.md](01_Project_Charter.md); Ausarbeitung der Darstellungs- und Konsistenzregeln in [03_Project_Standards.md](03_Project_Standards.md) (insb. Abschn. 6 und 7); danach **Konsistenz- und Darstellungsregel-Ebene** über die HA4/HA5-Kernstrecke hinaus. |
| **Lessons learned (aktuell)** | Teile der **Komponentenlogik** (Story-/Dokumentenkette-Boxen) wurden **vor** dem formalen Designsystem **praktisch eingeführt** — fachlich sinnvoll für die Lernstrecke; **verbindliche Standardisierung** folgt im Architekturblock. |

**Aktueller Fokus (aus Steuerungseinstieg, Stand Vorlage 22.03.2026):**  
Technische Basis und Benennungsmatrix der *QA_Lernwebseite* gelten als **abgeschlossen**; inhaltlich sind die **vier Phasen** der HA4/HA5-Strecke **beendet**; der **sichtbare nächste Meilenstein** ist die **Ausformulierung des Komponentenstils / Designsystems light**.

---

## 2. Erreichte Meilensteine

*(Chronologisch **absteigend**: zuerst das Neueste / zuletzt Abgeschlossene.)*

### 2026-03-21 — Phase 4 (Website, HA4/HA5): Standards-Konformität

- **CTFL-Zitierung** bereinigt: präzise Formulierung **„CTFL 4.0.2, Kap. 4.2“** statt missverständlich „CTFL 4.2“ (u. a. 05a/05b).  
- **IEEE 829-2008** projektweit **einheitlich**; Kohärenz mit **ISO/IEC/IEEE 29119-3** im **Lernkontext** (ohne Vollnorm-Anspruch).  
- **index.html:** Willkommensbereich mit **Standards-Hinweis** (CTFL 4.0.2, IEEE 829-2008, ISO/IEC/IEEE 29119-3, Lernkontext); Verweis auf **GitHub-Repository** der Website (`target="_blank"`, Leserhinweis).  
- **00b-standards.html:** Tab-/Link-Logik für Repo-Verweis analog zur Einstiegsseite.  
- **04d-ha5-testfallentwurf-a4.html:** GM-F03-**Auswahlbegründung** als grüne **`doc-info-box--ok`** (Druck: `print-color-adjust`).  
- **Bewertung:** für ein **Lern-Portfolio** fachlich und formal **professionell genug** (explizit **kein** Anspruch auf vollständige Normabdeckung).  
- **Review-Dokumentation:** u. a. **dieses Dokument** (Abschn. 1–2), [01_Project_Charter.md](01_Project_Charter.md) (Executive Summary), [03_Project_Standards.md](03_Project_Standards.md) (Abschn. 2 und 8).

### 2026-03-21 — Phase 3 (Website, HA4/HA5): Formale Einheitlichkeit & Terminologie

- **Abschlussdatum:** **21.03.2026**, **09:19:30 (UTC+1)** — Commit **`1eb5b8f`** (*„QA-Lernwebseite: Phase-3-Konsistenz (HA4/HA5), Meta-Leiste, A4-Status, Terminologie“*).  
- **Schwerpunkt:** **Terminologie-Harmonisierung** und formale Konsistenz (u. a. **Testbasis-Analyse**); **Meta-Leiste**, **A4-Status**; **Querverweise**; **Web/A4-Parität** im Kern (04a–05b).  
- Ergänzungen **`doc-a4.css`**; Umsetzung im **Website-Repo** *QA_Lernwebseite* (siehe Abschnitt 7).  
- *Hinweis zur Reihenfolge am 21.03.2026:* Phase 2 (`9b4349e`, morgens) → Phase 3 (`1eb5b8f`, ca. 09:19) → Phase 4 (`0c43f00`, ca. 09:44) am selben Kalendertag.

### Phase 2 (Website, HA4/HA5): Story-Kette und UX — **Detailleistungen vollständig**

1. **04b (A4):** Grüne Hinweis-Box auf Blatt 4 — **Vorschau 9 Testfälle HA5** (3 je Feature).  
2. **04d (A4):** Seite 2 — Box **„Besonderheit GM-F03 — Auswahl-Begründung“** (gleichrangige „In Anforderung“-Fragen, BVA-Grenze 20 €).  
3. **04a:** Blaue **Dokumentenkette**-Box am Seitenende — Verweis formales A4 (04b), unpersönliche Formulierung.  
4. **05a / 04c:** Infos gestrafft — eine kompakte **CTFL/IEEE-Box** auf 05a; auf 04c kurzer Verweis auf 05a statt langer Duplikation; Klarstellung **„Testkonzept folgt später“**.  
5. **Story-Boxen:** Einheitlich **`info-box--note` (blau)** für Dokumentenkette; **gelb/warn** für didaktische „Was ist …?“-Boxen; Titelschema **„Dokumentenkette — … → …“**; sichtbare Linktexte **ohne** Dateikürzel `04a`/`04b`/… in Klammern.  

**Git (Website-Repo):** Meilenstein-Commit u. a. **`9b4349e`** (Phase 2).

### Phase 1 (Website, HA4/HA5): Konsistenzprüfung

- Story/Inhalte bereinigt (u. a. **GM-F02**, **GM-F03**, Sterne, Kategorie-Umbruch).  
- **Messbarkeit / Ergebnis:** identifizierte Inkonsistenzen **behoben**.

### Technische Baseline *QA_Lernwebseite* (abgeschlossen)

- **Hauptsystem** vereinheitlicht und als aktives System im Einsatz.  
- **Root-Index final:** `index.html` ist die **einzige** Einstiegsseite; Redirect und frühere Zwischeneinstiege entfernt; aktive Seiten verlinken konsistent auf `index.html`.  
- **Benennungslogik Runde 1** festgezurrt; **Benennungsmatrix** Gruppen 1–4 **fachlich geklärt, dokumentiert und technisch umgesetzt** (Dateinamen, Navigation, `<title>`, `<h1>`, Untertitel, Karten auf der Einstiegsseite).  
- **Migration** im Website-Projekt: Altseiten in **`archive/`** abgegrenzt; **Referenzvorlage** unter **`templates/`**; nachgezogene Seiten (**HA-Einordnung**, **SDLC statisch**, **SDLC animiert**) ins Hauptsystem überführt; **02c Teststufen & Testarten** migration abgeschlossen.

### Programm: Greenfield-Denkphase & Architektur-Website (Website)

- **Design- und Konsistenz-Harmonisierung** an Haltepunkt **pausiert** (Seitenrahmen-Konzept und Formular-Basis **verbindlich**).  
- Anschließend **Greenfield-Denkphase**: Seitentypen, Komponenten, Benennungslogik und Sollstruktur erarbeitet; **Programmrahmen und Website-Rolle** in **[01_Project_Charter.md](01_Project_Charter.md)**, **operative Regeln, Ordnerlogik, A4-/Dokumentmodus und Workflow** in **[03_Project_Standards.md](03_Project_Standards.md)** (u. a. Abschn. 3, 6, 7) festgehalten.  
- **Dokument-/A4-Modus:** bewusst als **Präsentations-/Layoutmodus** innerhalb **desselben** Systems gefasst (kein eigener Wissens-Seitentyp) — siehe [03_Project_Standards.md](03_Project_Standards.md) Abschn. 6 (*QA_Lernwebseite — gemeinsamer Seitenrahmen*, Dokument-/A4-Modus).

### Repository-Gesamtstruktur (Migration Top-Level, **aktuelle Pfade**)

Die folgende **Ist-Struktur** im Arbeitsverzeichnis **`000_QA_Track/`** ersetzt **veraltete** Top-Level-Ordnernamen aus früheren Repo-Versionen (u. a. `00_PROJEKTSTEUERUNG`, `01_Grundlagen …`, `02_Hausaufgaben_und_Testentwurf`, `03_Projekt`, `04_Notizen`, `05_Referenzen`, `99_Archiv`):

| Ordner (aktuell) | Zweck |
|------------------|--------|
| **`01_Projektsteuerung/`** | **Project\_*-Serie:** Charter, Status, Standards, Guidelines, Reference Quick; ältere Steuerkopien können unter **`06_Archiv/`** liegen. |
| **`02_Portfolio/`** | Portfolio-Artefakte; enthält **`QA_Lernwebseite/`** (eigenes Git-Repository) als digitales Hauptprodukt. |
| **`03_Hausaufgaben/`** | Hausaufgaben HA1–HA6 (Testdesign bis Testdurchführung) und zugehörige Abgaben. |
| **`04_Referenzen/`** | ISTQB-Lehrplan, Normen, externe Referenzmaterialien. |
| **`05_Notizen/`** | Unterrichtsnotizen, temporäre Arbeitstexte. |
| **`06_Archiv/`** | Archivierte Themen inkl. ggf. älterer Steuerungskopien (`Projektsteuerung_alt` o. Ä.). |

*Hinweis:* Ältere Detailstände zur **Design-Harmonisierung** (frühere Phasen 1–5, Formular-Basis-Migration) sind bei Bedarf in **Git-Historie**, **Archiv** oder älteren Statuspassagen nachvollziehbar.

---

## 3. Aktive Arbeitspakete

*(Priorisiert nach Wichtigkeit, nicht rein chronologisch.)*

| P | Arbeitspaket | Stand / Kurzbeschreibung |
|---|----------------|---------------------------|
| **P1** | **Komponentenstil / Designsystem light** (*QA_Lernwebseite*) | Darstellungsregeln **kanonischer** Komponenten **schriftlich schließen**; Muster aus Phase 2 (**Story-Box** vs. didaktische Box, ggf. A4-**doc-info-box**) **verallgemeinern** und in **[03_Project_Standards.md](03_Project_Standards.md)** (Qualitäts- und Konsistenzregeln, Abschn. 6) sowie abgestimmt mit **[01_Project_Charter.md](01_Project_Charter.md)** **verankern**. |
| **P2** | **Konsistenz- und Darstellungsregel-Ebene** (Website, außerhalb HA4/HA5-Kern) | Einheitliche Regeln auch für Module **außerhalb** der fertiggestellten Kernstrecke; ggf. offene Seiten gemäß **Lernplan** ([03_Project_Standards.md](03_Project_Standards.md) Abschn. 2) und Charta-Zielen nachziehen. |
| **P3** | **Kurs- und Portfoliopfad** | Fortführung gemäß **Notion-Lernplan** und MasterSchool-Vorgaben; **HA6** aktiv (siehe unten); weitere offene optionale Punkte (z. B. Portfolio-Automation, Issues) siehe ggf. archivierte oder neue **Hausaufgaben-Analysen** (`06_Archiv/Projektsteuerung_alt/` bzw. Schema `YYYY-MM-DD_Hausaufgabenanalyse.md` in `01_Projektsteuerung/`). |
| **P4** | **Steuerungsdokumentation konsolidieren** | **Project\_*-Serie** ist **kanonisch** (`01_Project_Charter.md` … `05_Reference_Quick.md`); verbleibende **alte** Steuerdateien im Ordner `01_Projektsteuerung/` nach **`06_Archiv/Projektsteuerung_alt/`** verschieben, sobald inhaltlich ersetzt. **Repo-Struktur und Health Check** ausschließlich in **[03_Project_Standards.md](03_Project_Standards.md)** Abschnitt **3** und **8** pflegen. |

### HA6 — Testdurchführung (Kurs, Stand laut Steuerung)

| Bereich | Status |
|---------|--------|
| **Gesamt** | **In Bearbeitung** |
| **Testprotokoll (Website: 06a-ha6-testprotokoll-a4)** | **Erledigt** (siehe auch Artefakte unter `03_Hausaufgaben/HA6_Testdurchfuehrung/`). |
| **Fehlerbericht (06b-ha6-fehlerbericht-a4)** | **Ausstehend** |
| **Testabschlussbericht (06c-ha6-testabschlussbericht-a4)** | **Ausstehend** |

*Hinweis:* Im Website-Repo können zu **Entwicklungs-/Layoutzwecken** bereits Commits zu HA6-Seiten existieren; der **fachliche Abschluss** der HA6-Lieferobjekte **06b/06c** ist hier weiterhin als **offen** geführt, bis die Bearbeitung und ggf. Kursabgabe abgeschlossen sind.

---

## 4. Risiken & Probleme

*(Aktuelle / wirkungsstärkere Punkte zuerst.)*

| ID | Risiko / Problem | Auswirkung | Gegensteuerung (geplant / aktiv) |
|----|-------------------|------------|-----------------------------------|
| **R1** | **Designsystem light** verzögert sich | Visuelle und strukturelle **Inkonsistenzen** bleiben länger **implizit** | Priorisierung **P1**; Muster aus Phase 2 in **[03_Project_Standards.md](03_Project_Standards.md)** / **[01_Project_Charter.md](01_Project_Charter.md)** **explizit** nachziehen |
| **R2** | **Zwei Git-Kontexte** (Gesamt-Workspace vs. `QA_Lernwebseite`) | **Dokumentations-Drift** zwischen Website-Commits und Track-Steuerung | Manuelle **Querprüfung** bei Architektur-Änderungen; **[04_Project_Guidelines.md](04_Project_Guidelines.md)** (Versionskontrolle & Git) für das Website-Repo |
| **R3** | **Veraltete Steuerkopien** im Ordner | **Fehlnavigation** für Leser | **Einstieg nur** über **Project\_***; Altdateien archivieren; **dieses Dokument** und **[03_Project_Standards.md](03_Project_Standards.md)** als maßgebliche Orientierung |
| **R4** | **Ein-Personen-Engpass** | Verzögerung bei parallelen Kurs- und Website-Meilensteinen | Strikte **Priorisierung**; Fokus **Kursfristen** vor „Nice-to-have“-Website-Themen |

---

## 5. Änderungen / Entscheidungen

*(Neueste / wesentliche Entscheidungen zuerst.)*

| Datum (ca.) | Entscheidung / Änderung |
|-------------|-------------------------|
| **2026-03-21** | **Standards-Review Phase 4** abgeschlossen (u. a. Commit **`0c43f00`**, ca. 09:44 UTC+1); **CTFL-/IEEE-829-Formulierungen** und **index-/Standards-Seiten** angeglichen; Bewertung **„professionell genug“** für Lern-Portfolio dokumentiert. |
| **2026-03-21** | **Phase 3** abgeschlossen (**09:19 UTC+1**, **`1eb5b8f`**): **Terminologie-Harmonisierung**, Meta-Leiste, A4-Status, **Web/A4-Parität** HA4/HA5-Kern. |
| **2026-03-21** | **Phase 2** abgeschlossen (**08:43 UTC+1**, **`9b4349e`**): **Story-/Dokumentenkette**, **Farblogik** (blau = Kette, gelb = didaktisch), GM-F03/04b-Vorschau u. a. |
| **Vor Phase 1–4** | **Benennungsmatrix** und **technische Umsetzung** für alle aktiven `pages/` verbindlich; **Root** bleibt **`index.html`** (Root-Sonderregel). |
| **Konzeptebene** | **A4-Modus** = **Präsentationsmodus**, kein eigener Wissens-Seitentyp; **Einstiegsseite** = Variante des Hauptsystems. |
| **Organisation** | **Greenfield-Systemkonzept** vor großflächigem Refactoring; Harmonisierung älterer Spur an **Haltepunkt** mit verbindlichem Seitenrahmen/Formularbasis. |

---

## 6. Nächste Schritte

*(Priorisierte Reihenfolge — **nicht** Zeitachse der Entstehung.)*

1. **P1 — Designsystem light:** In **[03_Project_Standards.md](03_Project_Standards.md)** (Abschn. 6 ff.) und abgestimmt mit **[01_Project_Charter.md](01_Project_Charter.md)** **kanonische** vs. **Grauzonen-** vs. **lokale** Komponenten **schließen**; bestehende **CSS/HTML-Muster** konsolidieren.  
2. **P2 — Globale Konsistenz:** Darstellungsregeln **über** HA4/HA5-Kernstrecke **erhöhen**; verbleibende Seiten/Module **einordnen**.  
3. **P4 — Steuerung:** **Dieses Dokument** ([02_Project_Status.md](02_Project_Status.md)) bei **Meilensteinen** aktualisieren; **Einstieg** für Leser: [01_Project_Charter.md](01_Project_Charter.md) · **dieses Dokument** · [03_Project_Standards.md](03_Project_Standards.md) · [05_Reference_Quick.md](05_Reference_Quick.md).  
4. **P3 — Kurs:** Notion-Lernplan und anstehende **Hausaufgaben/Abgaben** **fristgerecht** bedienen; Artefakte unter **`03_Hausaufgaben/`** und Portfolio pflegen.

---

## 7. Metriken / Evidenz

### Website-Repository (*QA_Lernwebseite*)

| Evidenz | Hinweis |
|---------|---------|
| **Commits (Auszug)** | Phase 2: **`9b4349e`** (2026-03-21 08:43 UTC+1); Phase 3 (Terminologie/Formal): **`1eb5b8f`** (2026-03-21 **09:19** UTC+1); Phase 4 (Standards): **`0c43f00`** (2026-03-21 09:44 UTC+1); Repo-Links Einstieg/Standards: **`78ee176`** — vollständige Historie: Branch **`main`**, Remote **`origin`**. |
| **Architektur-Website (Rahmen & Regeln)** | [01_Project_Charter.md](01_Project_Charter.md) — Programmrahmen, Website-Rolle, Qualitätsmaßstab; [03_Project_Standards.md](03_Project_Standards.md) — Ordnerlogik, IA/Benennung im Workflow, A4-/Dokumentmodus (Abschn. 3, 6, 7). |
| **Charter (Programm)** | [01_Project_Charter.md](01_Project_Charter.md) — Vision, Scope, Grenzen. |
| **Status (Ist)** | **Dieses Dokument** — Meilensteine, Arbeitspakete, Risiken. |

### Externe Steuerung

| Ressource | Link |
|-----------|------|
| **Lernplan (Notion)** | [Notion – Lernplan](https://www.notion.so/3029418319f381f19aa6c492dfdbcee2?pvs=21) |
| **MasterSchool Übersicht** | [MasterSchool Notion – chd108](https://www.notion.so/3029418319f38063bbc2c201c57b7ef4) |

### Steuerungsdokumente (Überblick — **Project\_*-Serie**)

| Bereich | Dokument(e) |
|---------|-------------|
| **Projekt (Vision, Scope)** | [01_Project_Charter.md](01_Project_Charter.md) · **dieses Dokument** · Lernplan-Zuordnung und CTFL-Bezug: [03_Project_Standards.md](03_Project_Standards.md) **Abschnitt 2** |
| **Repo / Struktur / Health** | [03_Project_Standards.md](03_Project_Standards.md) **Abschnitt 3** (Ordnerarchitektur) und **Abschnitt 8** (Repository Health & Review) |
| **KI, Rollen, Kommunikation, Git (Website)** | [04_Project_Guidelines.md](04_Project_Guidelines.md) *(Inhalt früher u. a. in Arbeitsvereinbarung, Prompt- und Commit-Richtlinien; maßgeblich ist dieses eine Dokument.)* |
| **Prompts / Schnellnavigation / externe Links** | [05_Reference_Quick.md](05_Reference_Quick.md) *(Inhalt früher u. a. in separaten Prompt- und Schnellreferenz-Dateien.)* |
| **Architektur Website (fachlich)** | [01_Project_Charter.md](01_Project_Charter.md) + [03_Project_Standards.md](03_Project_Standards.md) — **ohne** separates Konzeptdatei neben der Project\_*-Serie |
| **Reports (Hausaufgaben-Analyse)** | Neu: `01_Projektsteuerung/YYYY-MM-DD_Hausaufgabenanalyse.md` gemäß [03_Project_Standards.md](03_Project_Standards.md) Abschnitt 4; **Beispiel** (archiviert): `06_Archiv/Projektsteuerung_alt/11_Hausaufgabenanalyse_2026-03-09.md` |

---

*Nächste Aktualisierung dieses Statusberichts: bei **Abschluss Designsystem light**, bei **Kurs-Meilensteinen** oder spätestens zur **geplanten Charter-Überprüfung** (siehe [01_Project_Charter.md](01_Project_Charter.md), Abschnitt 8).*
