# QA Lernwebseite

Lernmaterialien zu Software Testing, QA und ISTQB CTFL v4.0.2.  
Jede HTML-Seite ist ein eigenständiges Lernmodul — strukturiert entlang des ISTQB CTFL-Lehrplans.

Das Projekt ist öffentlich nutzbar und kann z. B. über GitHub Pages bereitgestellt werden.

**Lizenz:** CC BY-NC-SA 4.0 — Namensnennung, nicht kommerziell, Weitergabe unter gleichen Bedingungen. Siehe LICENSE.

---

## Ziel

Verständliche, lehrplankonforme Aufbereitung der ISTQB CTFL-Inhalte als statische Lernwebseite.  
Schwerpunkt: didaktische Klarheit, visuelle Struktur, Prüfungsrelevanz.

---

## Projektstruktur

| Pfad | Beschreibung |
|---|---|
| `index.html` | Einstiegsseite — Kartenübersicht aller Lernseiten |
| `pages/` | Einzelne Lernmodule (siehe unten) |
| `assets/css/` | Gemeinsames CSS: `base.css` und `subpage.css` für Hauptseiten, `formular-base.css` für A4-/Dokumentseiten |
| `assets/js/` | Skripte für die SDLC-Visualisierungen |
| `archive/` | Ältere Versionen — nicht aktiv, nur zur Dokumentation |
| `templates/` | Referenz-Template für neue Seiten |

---

## Lernmodule — pages/

| Datei | Inhalt | CTFL |
|---|---|---|
| `01-landkarte.html` | Inhaltsverzeichnis des CTFL-Lehrplans v4.0.2 | Kap. 1–6 |
| `01a-glossar.html` | Alle offiziellen Schlüsselbegriffe des CTFL v4.0.2 | Kap. 1–6 |
| `01b-grundlagen.html` | Grundlagen des Testens | Kap. 1 |
| `01c-testmittel.html` | Testmittel und Testaktivitäten | Kap. 1.4.3 |
| `02a-sdlc-statisch.html` | SDLC & ISTQB-Testprozess — statische Übersicht | Kap. 2 |
| `02b-sdlc-animiert.html` | SDLC & ISTQB-Testprozess — animierte Übersicht | Kap. 2 |
| `02c-teststufen.html` | Teststufen, Testarten, Wartungstest | Kap. 2.2–2.3 |
| `03-statisches-testen.html` | Statisches Testen, Reviews, Reviewprozess | Kap. 3 |
| `04-testverfahren.html` | Testentwurfsverfahren im Überblick | Kap. 4 |
| `04a-ha4-anforderungsanalyse.html` | HA4 — Anforderungsanalyse für GroceryMate | Kap. 4.1 |
| `04b-ha4-testbasisanalyse-a4.html` | HA4 — Testbasis-Analyse Formular (A4) | Kap. 4.1 |
| `04c-ha5-testfallentwurf.html` | HA5 — Testfallentwurf für GroceryMate | Kap. 4 |
| `04d-ha5-testfallentwurf-a4.html` | HA5 — Testfallentwurf Formular (A4) | Kap. 4 |
| `05-testmanagement.html` | Testmanagement, Risiko, Planung, Fehlermanagement | Kap. 5 |
| `05a-ha5-testkonzept.html` | HA5 — Testkonzept für GroceryMate | Kap. 5 |
| `05b-ha5-testkonzept-a4.html` | HA5 — Testkonzept Formular (A4) | Kap. 5 |
| `06-testwerkzeuge.html` | Testwerkzeuge im Überblick | Kap. 6 |
| `00a-ha-einordnung.html` | Einordnung der Hausaufgaben im CTFL-Kontext | — |

Die Tabelle bildet den Zielstand der Lernmodule ab; nicht alle genannten Dateien sind bereits im Repo vorhanden.

---

## Technik

- Statisches HTML/CSS — kein Framework, keine Build-Pipeline
- `base.css` und `subpage.css` — visuelle Basis für alle Hauptseiten
- `formular-base.css` — A4-Layout und Druckregeln für Formular-/Dokumentseiten
- Semantische Struktur: `<main>`, `id="main"`, Meta-Descriptions
- Navigation und Skip-Link werden beim Druck ausgeblendet
- Das Projekt hat keine externen Abhängigkeiten und ist als eigenständiges Webprojekt konzipiert

---

## Stand

Erstellt: 2026-03-12  
Zuletzt aktualisiert: 2026-03-15
