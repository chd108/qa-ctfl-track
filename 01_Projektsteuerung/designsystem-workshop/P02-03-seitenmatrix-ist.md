Datei erstellt: 2026-03-30  
Letzte Aktualisierung: 2026-04-02 — Metablock Variante B ergänzt; inhaltlicher Stand 2026-03-30  
Zweck: Vollständige Seitenmatrix (`index` + `pages/*.html`) als IST-Basis für Mapping und Rollout-Planung.  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / IST  
Normative Orientierung: Faktenbasis für [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md)

---

# Session 2.6: Vollständige Seitenmatrix (IST)

**Workshop:** Designsystem — Bestandsaufnahme für Session 3/4  
**Vorgänger:** [P02-01-taxonomie-information.md](P02-01-taxonomie-information.md), [P02-02-darstellung-patterns.md](P02-02-darstellung-patterns.md)  
**Umfang:** `02_Portfolio/QA_Lernwebseite/index.html` + alle `pages/*.html` (**23** Seiten, **ohne** `templates/`).

---

## 0. Methodik (manuell)

| Aspekt | Vorgehen |
|--------|----------|
| **Ziel** | Pro Seite: Informations-Typen (Taxonomie Session 2), Darstellungs-Patterns (Session 2.5), Besonderheiten — als **sichere Basis** für Session 3/4. |
| **Manuell** | Keine automatische Gesamtauswertung (ein früherer PowerShell-Lauf war **nicht zuverlässig**). Stattdessen: **Seite für Seite** gezielt mit Editor-Suche / strukturiertem Lesen — inhaltliche Zuordnung zu Typ-IDs **von Hand** kuratiert. |
| **Technische Hilfe** | Erlaubt und sinnvoll: gezieltes Suchen nach Markup/CSS (z. B. `doc-a4`, `meta-bar`, `card-grid`), um nichts zu übersehen. Das ersetzt keine inhaltliche Einordnung, sondern **stützt** sie. |
| **Bei Unsicherheit** | In dieser Matrix nicht vorgekommen; falls später Zweifel: **`unklar`** notieren statt raten. |
| **Typ-IDs** | Wie in Session 2 konsolidiert: **T-***, **O-***, **D-***, **M-MATRIX**, **X-DOK**, **X-STD** (siehe Taxonomie-Dokument). |

---

## 1. Gesamt-Matrix (alle 23 Seiten)

Legende **Patterns (kurz):** P-SECTION = Sektions-Container (`section` / `section__*` / `section-label`); P-TABELLE = HTML-`<table>` oder tabellarisches Raster; P-KARTEN = Karten-/Grid-Layouts (`entry-card`, `card`, `stufe-card`, `tool-card`, `analysis-card`, …); P-SVG = eingebettetes SVG; P-CANVAS = Canvas (+ ggf. JS); P-GRID-CSS = Matrix o. Ä. ohne klassisches `<table>` (z. B. `risk-matrix`).

| # | Datei (relativ zu `QA_Lernwebseite/`) | Informations-Typen (Taxonomie) | Darstellungs-Patterns | Besonderheiten / Risiko für Redesign |
|---|----------------------------------------|--------------------------------|------------------------|--------------------------------------|
| 1 | `index.html` | O-META; B4-Einstieg (`entry-info-box`); Navigation zu allen Lern-/HA-Routen | P-KARTEN (`entry-card*`, Zeilen/Grids), P-SECTION implizit | **Eigenes** Inline-CSS für Startseite; keine `doc-a4`. Hub-Seite — Änderungen wirken auf alle Einstiege. |
| 2 | `pages/00a-ha-einordnung.html` | O-META; T-PFLICHT über **Verfahrens-Tags** (`tag--bb/wb/co`); D-ERKLAER (`info-box`) | P-TABELLE (Zuordnungstabelle), P-SECTION | Tags **anders** als Landkarte (`tag--bb` vs. `tag--ctfl`). |
| 3 | `pages/00b-standards.html` | **X-STD**; Projekt-Meta; Legende Umsetzung | P-TABELLE (große Referenztabellen, `block-explanation__table`), P-SECTION | Viele **Kategorie-Badges** (`.cat-*`); inhaltlich Meta-Repo, nicht CTFL-Kapitel. |
| 4 | `pages/01a-glossar.html` | O-META; O-BEGRIFF (fachlich Glossar); wenig T-* im Chip-Sinne | P-TABELLE (`ref-table`/Glossar), P-SECTION (`section--e1`…`e6` + A–Z) | Sehr **breite** Tabellen; hohe Dichte — Performance/Lesbarkeit bei Refactor beachten. |
| 5 | `pages/01b-grundlagen.html` | O-META; D-ERKLAER (`info-box` mehrfach); Lehrplan-Kern textlastig | P-TABELLE (`comparison-table`), P-SECTION | Klassische **Vergleichstabellen** eingebettet in Fließtext; kein großes SVG. |
| 6 | `pages/01c-testmittel.html` | O-META; Prozess-/Artefakt-Einordnung | P-TABELLE, P-KARTEN (`activity-grid`), gemischt | **activity-grid** als eigenes Layout — nicht mit `card-grid` verwechseln. |
| 7 | `pages/01-landkarte.html` | **T-PFLICHT, T-PRAXIS, T-VERTIEF, T-EXTRA** (`tag--*`); **T-KURS** (MS); O-META | P-SECTION, **Chip-Zeilen** statt Listen (funktional P-LISTE-äquivalent) | **Referenz** für Syllabus-Farblogik; `tag--`-Syntax. |
| 8 | `pages/02a-sdlc-statisch.html` | O-META; D-ERKLAER (`info-box`) | P-CANVAS (Hypozykel), P-SECTION | **Canvas**-basiert; anderes Medium als SVG auf anderen Seiten. |
| 9 | `pages/02b-sdlc-animiert.html` | wie 02a; Interaktion statt nur Statik | P-CANVAS + Animation (JS) | Wartung: JS + Canvas — Designsystem sollte **Modus** „interaktives Diagramm“ abdecken. |
| 10 | `pages/02c-teststufen.html` | T-* über **`tag-ctfl`** u. a. (**anderer** Klassen-Präfix als Landkarte); **M-MATRIX** (`stag-*`); D-AHA (`aha-box`); D-WARN (`warn-box`) | P-TABELLE (`matrix`), viele Spezial-Grids (`stufen-grid`, `strat-grid`, …), P-SVG (klein, Visuals) | **Höchste Muster-Vielfalt**; Session-2-Warnung: Matrix-Tags **nicht** mit T-* vermischen. |
| 11 | `pages/03-statisches-testen.html` | D-AHA (`aha-box`); `stag` / Mini-Tags; kein klassisches `info-box` | P-TABELLE (`vtable`), P-KARTEN (`card`, `review-card`, …), `review-grid`, `rollen-grid`, `ef-grid`, `section-label` | **Eigene** Box-Namen (`aha-box`/`warn-box`) parallel zu anderen Seiten; nummerierte `section-label` mit Unicode-Kreisen. |
| 12 | `pages/04-testverfahren.html` | O-META; D-ERKLAER (`info-box`) | **P-SVG** (großes Organigramm), P-KARTEN (`card-grid` 4 Spalten), P-SECTION | Zentrales **einzigartiges** SVG — hoher visueller Stellenwert; Redesign-Risiko bei Viewport/Skalierung. |
| 13 | `pages/04a-ha4-anforderungsanalyse.html` | O-META; O-KETTE (`info-box--note` Dokumentenkette); D-ERKLAER; Status-Tags (`tag--ok` …) | P-KARTEN (`analysis-card`, `card-grid`), P-TABELLE in Karten | **HA-Story** klar; Mischung Web-`info-box` und Tabellen in **analysis-card**. |
| 14 | `pages/04b-ha4-testbasisanalyse-a4.html` | **X-DOK**; O-BEGRIFF implizit (Formular-Logik) | **doc-a4**, P-TABELLE (`questions-5col`, `sum-table`, …) | Reines **A4**-Layout; Druck/Zoom-Regeln aus `doc-a4.css`. |
| 15 | `pages/04c-ha5-testfallentwurf.html` | O-KETTE, D-HINWEIS, D-OK, D-AUTO, D-ERKLAER (viele Varianten) | P-SECTION (farbige Kopfzeilen), P-TABELLE, verschachtelte `info-box` | **Parallel** zu 04d — inhaltliche Duplikation Web vs. A4; Konsistenz-Pflege bei Änderungen. |
| 16 | `pages/04d-ha5-testfallentwurf-a4.html` | **X-DOK**; `doc-info-box` inkl. **D-OK** / **D-WARN** (GM-F03) | doc-a4, P-TABELLE, lange **multi-sheet** Struktur | A4-Ergänzungs-CSS neben `doc-a4.css`; viele Blätter. |
| 17 | `pages/05-testmanagement.html` | O-META; viele **Praxis**-Einschübe (inhaltlich D-ERKLAER-ähnlich in `praxis-box`) | P-TABELLE (`vtable`), **P-GRID-CSS** (`risk-matrix`), P-SVG (Testpyramide), `praxis-box` | **Kein** durchgängiges `info-box`-System; stattdessen viele `praxis-box` + Fließtext. |
| 18 | `pages/05a-ha5-testkonzept.html` | O-KETTE; D-ERKLAER / D-HINWEIS über `info-box*` | P-SECTION, P-KARTEN (`card-grid`), P-TABELLE inkl. **`timeline-table`** | Zeitplan als **Tabelle**, nicht als SVG-Timeline — Pattern-Lücke siehe Session 2.5. |
| 19 | `pages/05b-ha5-testkonzept-a4.html` | **X-DOK** | doc-a4, P-TABELLE, mehrere `article.doc-a4` | Fokus **Formular-/Report-Struktur** wie 04b/04d. |
| 20 | `pages/06-testwerkzeuge.html` | D-ERKLAER (`info-box` gelb/warn); kein O-META im üblichen Sinne | P-KARTEN (`tool-grid` / `tool-card`), **Nutzen/Risiken** (`benefits-risks-grid`) | **Keine** `meta-bar`; einfache `section`-Rahmen — von anderen Kap.-Seiten abweichend. |
| 21 | `pages/06a-ha6-testprotokoll-a4.html` | **X-DOK**; **O-BEGRIFF** (`term-note` neben doc-a4) | doc-a4, `doc-info-box`, Spezialtabellen (`flow-summary-table`, `exec-log-table`, …) | **`term-note`** nur auf Screen — explizites Muster „Begriff vor Druck“. |
| 22 | `pages/06b-ha6-fehlerbericht-a4.html` | **X-DOK** | doc-a4, P-TABELLE | Rein A4; Fehler-/BUG-Struktur — an 04d/06a gekoppelt. |
| 23 | `pages/06c-ha6-testabschlussbericht-a4.html` | **X-DOK**; `doc-info-box` | doc-a4, P-TABELLE (`completion-summary-table`, Metriken, …) | Schlussbericht — Metrik-Tabellen als eigenes Unterpattern. |

---

## 2. Kurzstatistik

| Kennzahl | Wert |
|----------|------|
| Seiten gesamt | **23** |
| Mit **`doc-a4` / X-DOK** (A4-Hauptmodus) | **6** (`04b`, `04d`, `05b`, `06a`, `06b`, `06c`) |
| Mit **`meta-bar` (O-META)** | **21** — **ohne:** `06-testwerkzeuge.html` (unklar ob beabsichtigt; Refactoring-Kandidat). |
| Mit **großem SVG** (zentral für die Seite) | **3** (04-testverfahren, 05-testmanagement, 02c-teilweise) |
| Mit **Canvas** | **2** (02a, 02b) |
| Mit **O-KETTE** (explizite „Dokumentenkette“) | **4** (04a, 04c, 05a; 04d verknüpft narrative in `doc-info-box`) |
| Mit **T-* Syllabus-Chips** (`tag--*` oder `tag-ctfl`/`tag-praxis` …) | **2 Kern-Seiten** (01-landkarte, 02c) + **00a** (Verfahrens-Tags) |
| Seite mit **meisten distinct UI-Mustern** | **02c-teststufen.html** |

---

## 3. Erkenntnisse für Session 3

1. **Zwei Welten:** **Web-Lernseiten** (info-box-Familie, section, ggf. SVG/Canvas) vs. **X-DOK A4** (`doc-a4`, `doc-info-box`, `term-note`) — Designsystem sollte **Kopplung** (gleiche Semantik, andere Fläche) explizit machen.  
2. **Tag-Inkonsistenz:** `tag--ctfl` (Landkarte) vs. `tag-ctfl` (02c) vs. Verfahrens-`tag--bb` (00a) — Session 3: **ein** Namensschema oder **Mapping-Tabelle**.  
3. **Callouts:** Neben `info-box*` existieren **`aha-box`/`warn-box`** (02c, 03) und **`praxis-box`** (05) — inhaltlich verwandt mit D-AHA / D-WARN / D-ERKLAER, aber **eigene** CSS-Pfade.  
4. **Matrix-Semantik:** **M-MATRIX** (`stag-*` auf 02c) darf laut Session 2 **nicht** mit T-*-Farben zusammenfallen — bei Token-Design trennen.  
5. **Hub & Ausnahmen:** `index.html` und `06-testwerkzeuge.html` weichen strukturell ab (Karten-Hub bzw. fehlende `meta-bar`) — bei Global-Navigation/Chrome prüfen.  
6. **Redesign-Risiken:** Große SVGs (04), Canvas (02a/02b), sehr breite Tabellen (01a), viele A4-Sheets (04d) — **Test** mit Druckdialog, Zoom und schmalen Viewports einplanen.

---

## 4. Abgleich Session 2.5 (Patterns)

- Abgedeckt in der Matrix: **P-TABELLE**, **P-SVG**, **P-CANVAS**, **P-KARTEN** (mehrere Varianten), **P-SECTION**, **P-GRID-CSS** (Risiko-Matrix).  
- **Noch schwach als eigenes Pattern sichtbar:** reine **Code-/Zitatblöcke**, **Accordion** — wie in 02b genannt, aktuell keine tragende Rolle.  
- **Horizontale Timeline-SVG:** nicht vorhanden; Zeitplan nur als **Tabelle** (`timeline-table` auf 05a).

---

## 5. Nächste Schritte (Workshop)

- **Session 3:** Typ-ID → Komponente / Token; Vereinheitlichung der Callout-Familien; Entscheidung **Tag-Präfix**.  
- **Session 4:** Regeln „wann welcher Typ“ + Review-Checkliste für neue Seiten.

---

*Diese Datei wurde **manuell** erstellt und gegen den Stand der HTML-Dateien im Repo abgeglichen.*
