# QA Lernwebseite

> Zuletzt aktualisiert: 2026-03-23

**Teil des Monorepos [qa-ctfl-track](https://github.com/chd108/qa-ctfl-track)** — Pfad im Repo: **`02_Portfolio/QA_Lernwebseite/`**.  
**Öffentliche Ansicht:** [chd108.github.io/qa-ctfl-track](https://chd108.github.io/qa-ctfl-track/) (GitHub Pages aus demselben Repository).

Öffentliches **Lern- und Referenzprojekt** zu Software Testing, QA und **ISTQB Certified Tester Foundation Level (CTFL) v4.0.2**.  
Inhaltlich als **statische Website** umgesetzt: jedes Modul unter `pages/` ist eine eigenständige HTML-Seite entlang des CTFL-Lehrplans.

Die **HA4/HA5/HA6-Strecke** (Fallstudie **GroceryMate**) verbindet **Testbasis-Analyse**, **Testfallentwurf**, **Testkonzept**, **Testprotokoll** (Test Execution Log), **Fehlerbericht** (Incident Report) und **Testabschlussbericht** (Test Completion Report) und verweist dort, wo ausgewiesen, auf **ISO/IEC/IEEE 29119-3** und **IEEE 829-2008**.

**Bereitstellung:** z. B. **GitHub Pages** oder beliebiger statischer Host — kein Build-Schritt nötig.

**Lizenz:** **CC BY-NC-SA 4.0** — Namensnennung, nicht kommerziell, Weitergabe unter gleichen Bedingungen. Details in `LICENSE`.

---

## Ziel

- **Didaktik:** klare Struktur, Prüfungsnähe, nachvollziehbare Begriffe (u. a. **Testbasis-Analyse**).  
- **Formate:** **Web-Ansicht** für Lesen und Üben; **A4-/Dokumentmodus** (`doc-a4.css`) für ausgewählte HA-Abgaben und Druck.  
- **Wartbarkeit:** ein gemeinsames **Hauptsystem** (Navigation, Typo, Farbvariablen), konsistente Datei- und Seitennamen.

---

## Navigation und Seitenaufbau

Auf **`index.html`**, allen Seiten in **`pages/`** und der **`templates/referenzvorlage-hauptsystem.html`** gilt dieselbe Kopfstruktur:

| Bereich | Inhalt |
|--------|--------|
| **Skip-Link** | Sprung zu `#main` (Tastatur/Screenreader). |
| **`.top-nav-zone`** | Volle Viewport-Breite; **zwei** `<nav>`-Elemente untereinander. |
| **Nav 1 — Lernmaterial** | `class="main-nav main-nav--learn"`, `aria-label="Lernmaterial"`: Einstieg, Landkarte, Glossar, Testmittel, SDLC statisch/animiert, Teststufen, Statisches Testen, Testverfahren, Testmanagement, Standards. |
| **Nav 2 — Hausaufgaben** | `class="main-nav main-nav--assignments"`, `aria-label="Hausaufgaben"`: HA-Einordnung, HA4–HA6 (Web- und A4-Seiten). Optisch: etwas **kleinere Schrift**, Linkfarbe **`var(--mid)`**; Hover und aktuelle Seite **`var(--text)`**. |
| **`.page-chrome`** | Kopf mit Seitentitel und Untertitel (`subpage.css`). |
| **`main#main`** | Seiteninhalt. |

**Vertikaler Rhythmus** in der Kopfzone: CSS-Variable **`--nav-vertical-rhythm: 1.75rem`** in `base.css` — Abstand oben in der Zone, **zwischen** den beiden Nav-Leisten und **unter** der zweiten Leiste vor dem Seitentitel. Der **obere** Außenabstand der Seite kommt aus der Zone; **`body`** hat auf den betroffenen Seiten **`padding-top: 0`** (seitlich und unten bleiben die jeweiligen Seitenwerte).

**Pfade:** von `pages/` aus zeigt **Einstieg** auf `../index.html`; die Vorlage unter `templates/` nutzt `../index.html` und `../pages/…`.

---

## Projektstruktur

| Pfad | Beschreibung |
|------|----------------|
| `index.html` | **Einstieg** — zwei Kartenbereiche (**Lernmaterial** / **Hausaufgaben**), je **10** Verweiskarten auf die aktiven Module; layoutspezifisches CSS inline, sonst wie Hauptsystem. |
| `pages/` | **20** aktive Lern- bzw. HA-Seiten (siehe Tabelle unten). |
| `assets/css/base.css` | Globale Variablen (`:root`), Body-Hintergrund, **`.top-nav-zone`**, **`.main-nav`** / **`.main-nav--assignments`**, Skip-Link. |
| `assets/css/subpage.css` | Gemeinsame **`header`**-/`footer`-Typo für Unterseiten. |
| `assets/css/doc-a4.css` | **A4-/Dokumentmodus** inkl. Screen-`body`-Ränder; wird von HA-A4-Seiten zusätzlich eingebunden. |
| `assets/css/index.css` | Ältere/alternative Einstiegs-Styles — **`index.html` lädt derzeit `base.css` + `subpage.css` und lokales `<style>`**; Datei bleibt im Repo zur Referenz und Standards-Doku. |
| `assets/js/` | u. a. **`sdlc-hypocycle-animiert.js`** für die animierte SDLC-Seite. |
| `templates/referenzvorlage-hauptsystem.html` | Referenz für neue **Hauptsystem**-Seiten (Nav, `page-chrome`, `main`). |
| `archive/` | Nicht aktive ältere Versionen — nur Dokumentation. |

**Systemkonzept (Programm):** Architektur und Steuerung im übergeordneten **QA-Track** unter **`01_Projektsteuerung/`** (Project\_*-Serie) und ggf. **`06_Archiv/`** (z. B. ältere Konzept-Snapshots). Historie der Website-Dateien ist per **`git subtree`** in **qa-ctfl-track** eingebunden.

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

**Ist-Stand:** Alle genannten Dateien **außer** `01b-grundlagen.html` und `06-testwerkzeuge.html` sind vorhanden und in **beiden Nav-Leisten** sowie auf der **Einstiegsseite** verlinkt.

---

## Technik

- **Stack:** statisches **HTML/CSS**, optional **JavaScript** nur wo nötig (z. B. SDLC-Animation).  
- **Kein** Framework, **keine** Build-Pipeline, **keine** CDN-Pflicht für Kernseiten.  
- **Design tokens:** Farben und Abstände über **`:root`** in `base.css` (`--bg`, `--text`, `--e1`–`--e6`, `--nav-vertical-rhythm`, …).  
- **Druck:** Navigationsbereich ausblendbar wo vorgesehen; A4-Seiten nutzen zusätzlich Druckregeln in `doc-a4.css`.

---

## Dokumentation und Steuerung

| Dokument | Ort | Hinweis |
|----------|-----|---------|
| **Systemkonzept / Steuerung** (IA, Seitentypen, Benennung) | QA-Track: `01_Projektsteuerung/` (Charter, Standards, …); Archiv: `06_Archiv/` | Ein **Git-Repository** (`qa-ctfl-track`) für Programm und Website. |
| **Commit-/Push-Regeln** | [04_Project_Guidelines.md](../../01_Projektsteuerung/04_Project_Guidelines.md) | Gilt für das **gesamte** Repo; Website-Änderungen unter `02_Portfolio/QA_Lernwebseite/`. |

---

## Stand

| | |
|--|--|
| **README erstellt** | 2026-03-12 |
| **README zuletzt aktualisiert** | **2026-03-22** |

**Kurzüberblick (Stand 22.03.2026)**

- **Hauptsystem:** einheitliche Kopf-/Fuß- und Typo-Schicht (`base.css`, `subpage.css`); **02c** im gemeinsamen Section-Muster.  
- **HA4/HA5/HA6:** inhaltlich und formal gehärtet — Meta-Informationen, Kette Web ↔ A4, Terminologie **Testbasis-Analyse**; HA6 mit **Testprotokoll A4**, **Fehlerbericht A4**, **Testabschlussbericht A4** (ISO/IEC/IEEE 29119-3); Ergänzungen in **`doc-a4.css`** (u. a. Status-Badge für Review).  
- **Einstieg (`index.html`):** breites Layout (`max-width` 1800px), **zwei sichtbare Bereichsüberschriften** (Lernmaterial / Hausaufgaben), responsives Kartenraster (Breakpoints 900px / 640px), CSS mit gemeinsamen Variablen; HA-Karten-Metas mit **Kap.-Hinweisen**; A4-HA-Karten mit hervorgehobenem **Formular**-Hinweis.  
- **Kopfnavigation:** **Zwei Leisten** in `.top-nav-zone` — **Lernmaterial** vs. **Hausaufgaben**, semantisch getrennt, `aria-label`s; vertikaler Rhythmus **`--nav-vertical-rhythm` (1,75rem)**; HA-Leiste über **`.main-nav--assignments`** visuell abgesetzt.  

Details und Historie: **Monorepo [qa-ctfl-track](https://github.com/chd108/qa-ctfl-track)** (Branch `main`; Website-Pfad `02_Portfolio/QA_Lernwebseite/`).
