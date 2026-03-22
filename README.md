# QA Lernwebseite

Lernmaterialien zu Software Testing, QA und **ISTQB CTFL v4.0.2**.  
Jede HTML-Seite in `pages/` ist ein eigenständiges Lernmodul — strukturiert entlang des CTFL-Lehrplans. Die **HA4/HA5/HA6-Strecke** (GroceryMate) verknüpft **Testbasis-Analyse**, **Testfallentwurf**, **Testkonzept** sowie **Testprotokoll** und **Fehlerbericht (Incident)** und bezieht sich ergänzend auf **ISO/IEC/IEEE 29119-3** und **IEEE 829-2008**, wo es in den Inhalten ausgewiesen ist.

Das Projekt ist öffentlich nutzbar und kann z. B. über **GitHub Pages** bereitgestellt werden.

**Lizenz:** CC BY-NC-SA 4.0 — Namensnennung, nicht kommerziell, Weitergabe unter gleichen Bedingungen. Siehe `LICENSE`.

---

## Ziel

Verständliche, lehrplankonforme Aufbereitung der ISTQB-CTFL-Inhalte als **statische** Lernwebseite.  
Schwerpunkt: didaktische Klarheit, visuelle Struktur, Prüfungsrelevanz — inklusive **Web- und A4-/Dokumentansicht** für ausgewählte Hausaufgaben-Abgaben.

---

## Projektstruktur

| Pfad | Beschreibung |
|------|----------------|
| `index.html` | Einstiegsseite — **20 Karten** zu allen aktiven Lernmodulen |
| `pages/` | Einzelne Lernmodule (siehe Tabelle unten) |
| `assets/css/` | `base.css`, `subpage.css` — Hauptsystem; `doc-a4.css` — **A4-/Dokumentmodus** (HA-A4-Seiten, u. a. 04b, 04d, 05b, 06a–06c); `index.css` — Einstieg |
| `assets/js/` | Skripte u. a. für SDLC-Visualisierungen (`sdlc-hypocycle-animiert.js`) |
| `templates/` | Referenzvorlage für neue Hauptsystem-Seiten (`referenzvorlage-hauptsystem.html`) |
| `archive/` | Ältere Versionen — nicht aktiv, nur zur Dokumentation |

**Systemkonzept (nicht in diesem Repo):** Das Architektur- und Arbeitsdokument liegt im übergeordneten **QA-Track** unter **`00_PROJEKTSTEUERUNG/12_SYSTEMKONZEPT.md`** (lokaler Gesamtworkspace). Beim **alleinigen** Klon von **QA_Lernwebseite** auf GitHub ist diese Datei nicht enthalten.

---

## Lernmodule — `pages/`

| Datei | Inhalt | CTFL (Orientierung) |
|-------|--------|----------------------|
| `01-landkarte.html` | Inhaltsverzeichnis / Landkarte des CTFL-Lehrplans v4.0.2 | Kap. 1–6 |
| `01a-glossar.html` | Schlüsselbegriffe CTFL v4.0.2 | Kap. 1–6 |
| `01b-grundlagen.html` | *Geplant — noch nicht im Repo* | Kap. 1 |
| `01c-testmittel.html` | Testmittel und Testaktivitäten | Kap. 1.4.3 |
| `02a-sdlc-statisch.html` | SDLC & ISTQB-Testprozess — statisch | Kap. 2 |
| `02b-sdlc-animiert.html` | SDLC & ISTQB-Testprozess — animiert | Kap. 2 |
| `02c-teststufen.html` | Teststufen, Testarten, Wartungstest | Kap. 2.2–2.3 |
| `03-statisches-testen.html` | Statisches Testen, Reviews | Kap. 3 |
| `04-testverfahren.html` | Testverfahren / Testentwurf im Überblick | Kap. 4 |
| `04a-ha4-anforderungsanalyse.html` | HA4 — Anforderungsanalyse aus Tester-Sicht (= Testbasis-Analyse), GroceryMate | Kap. 4.1 |
| `04b-ha4-testbasisanalyse-a4.html` | HA4 — Testbasis-Analyse **A4-/Dokumentmodus** | Kap. 4.1 |
| `04c-ha5-testfallentwurf.html` | HA5 — Testfallentwurf (Web), GroceryMate | Kap. 4.2 |
| `04d-ha5-testfallentwurf-a4.html` | HA5 — Testfallentwurf **A4** mit Traceability | Kap. 4.2 |
| `05-testmanagement.html` | Testmanagement, Risiko, Planung | Kap. 5 |
| `05a-ha5-testkonzept.html` | HA5 — Testkonzept (Web), GroceryMate | Kap. 5 |
| `05b-ha5-testkonzept-a4.html` | HA5 — Testkonzept **A4** (u. a. IEEE-829-orientiert) | Kap. 5 |
| `06a-ha6-testprotokoll-a4.html` | HA6 — Testprotokoll **A4** (Test Execution Log, 9 TC) | Kap. 5 |
| `06b-ha6-fehlerbericht-a4.html` | HA6 — Fehlerbericht **A4** (Incident Report, Blankovorlage) | Kap. 5 |
| `06c-ha6-testabschlussbericht-a4.html` | HA6 — Testabschlussbericht **A4** (Test Completion Report, Blankovorlage) | Kap. 5 |
| `06-testwerkzeuge.html` | *Geplant — noch nicht im Repo* | Kap. 6 |
| `00a-ha-einordnung.html` | Einordnung der Hausaufgaben im CTFL-Kontext | — |
| `00b-standards.html` | Standards, Projektstatus, Referenzen | — |

**Ist-Stand Repo:** Alle in der Tabelle genannten Dateien **außer** `01b-grundlagen.html` und `06-testwerkzeuge.html` sind vorhanden und in **Navigation** sowie **Einstiegskarten** eingebunden.

---

## Technik

- Statisches **HTML/CSS** — kein Framework, keine Build-Pipeline.
- **Hauptsystem:** gemeinsame Kopf-/Nav-Struktur, Skip-Link, Meta-Descriptions, Druckstyles (Nav ausblenden).
- **Dokument-/A4-Modus:** dieselben Rahmen-Styles wie das Hauptsystem (`base.css` / `subpage.css`) plus **`doc-a4.css`** für Drucklayout und Formular-/Blatt-Optik.
- Keine Laufzeit-Abhängigkeiten von CDN für Kernseiten — die Seite ist als **eigenständiges** Webprojekt nutzbar.

---

## Dokumentation

- **Systemkonzept:** **`12_SYSTEMKONZEPT.md`** im QA-Track, Ordner **`00_PROJEKTSTEUERUNG/`** — verbindlicher Stand zu Informationsarchitektur, Seitentypen, Benennungslogik, Dokument-/A4-Modus und Arbeitsstand der Website (siehe Hinweis unter „Projektstruktur“; nicht Bestandteil des Website-Repos allein).

---

## Stand

| | |
|--|--|
| **README erstellt** | 2026-03-12 |
| **README zuletzt aktualisiert** | 2026-03-23 |

**Kurzüberblick (Stand 23.03.2026):** V2-Hauptsystem und Benennungsmatrix sind umgesetzt; **02c** ist migriert; die **HA4/HA5/HA6-Lernstrecke** (04a–06c) ist inhaltlich und formal gehärtet — u. a. einheitliche **Meta-Informationen** (Status, Daten, Features), **Dokumentenkette** zwischen Web- und A4-Fassungen, konsistente Terminologie **Testbasis-Analyse**, **HA6 Testprotokoll A4** (Test Execution Log), **HA6 Fehlerbericht A4** (Incident Report), **HA6 Testabschlussbericht A4** (Test Completion Report nach ISO/IEC/IEEE 29119-3), sowie A4-Ergänzungen in **`doc-a4.css`** (z. B. Status-Badge für Review). Details und Commit-Historie: **Git-Repository `QA_Lernwebseite`**.
