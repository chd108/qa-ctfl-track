# QA Lernwebseite

> Zuletzt aktualisiert: 2026-03-31

**Teil des Monorepos [qa-ctfl-track](https://github.com/chd108/qa-ctfl-track)** — Pfad im Repo: **`02_Portfolio/QA_Lernwebseite/`**.  
**Öffentliche Ansicht:** [chd108.github.io/qa-ctfl-track](https://chd108.github.io/qa-ctfl-track/) (GitHub Pages aus demselben Repository).

Öffentliches **Lern- und Referenzprojekt** zu Software Testing, QA und **ISTQB Certified Tester Foundation Level (CTFL) v4.0.2**.  
Inhaltlich als **statische Website** umgesetzt: jedes Modul unter `pages/` ist eine eigenständige HTML-Seite entlang des CTFL-Lehrplans.

Die **HA4/HA5/HA6-Strecke** (Fallstudie **GroceryMate**) verbindet **Testbasis-Analyse**, **Testfallentwurf**, **Testkonzept**, **Testprotokoll** (Test Execution Log), **Fehlerbericht** (Incident Report) und **Testabschlussbericht** (Test Completion Report) und verweist dort, wo ausgewiesen, auf **ISO/IEC/IEEE 29119-3** und **IEEE 829-2008**.

**Bereitstellung:** z. B. **GitHub Pages** oder beliebiger statischer Host — kein Build-Schritt nötig.

**Lizenz:** **CC BY-NC-SA 4.0** — Namensnennung, nicht kommerziell, Weitergabe unter gleichen Bedingungen. Textdatei: [`LICENSE`](../../LICENSE) im **Repository-Root** (Monorepo).

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
| **`.top-nav-zone`** | Volle Viewport-Breite; **`.top-nav-zone__brand-row`** zentriert den Inhalt (`display: flex`, `justify-content: center`) und umschließt nur **`.top-nav-zone__nav-stack`** — **zwei** `<nav>` untereinander (**Lernmaterial** / **Hausaufgaben**). Kein separates Logo links außerhalb der Leisten. |
| **Nav 1 — Lernmaterial** | `class="main-nav main-nav--learn"`, `aria-label="Lernmaterial"`: **erster Punkt** = **Startseite** als **Logo** (`class="main-nav__home"`, Bild `qa-favicon-256.png`, Höhe **`--nav-inline-logo-height`** in `base.css`), dann Landkarte, Glossar, … Standards. Auf der Startseite: `aria-current="page"` / `.current` am Logo-Link. |
| **Nav 2 — Hausaufgaben** | `class="main-nav main-nav--assignments"`, `aria-label="Hausaufgaben"`: HA-Einordnung, HA4–HA6 (Web- und A4-Seiten). Optisch: etwas **kleinere Schrift**, Linkfarbe **`var(--mid)`**; Hover und aktuelle Seite **`var(--text)`**. |
| **`.page-chrome`** | Kopf mit Seitentitel und Untertitel (`subpage.css`). |
| **`main#main`** | Seiteninhalt. |

**Vertikaler Rhythmus** in der Kopfzone: CSS-Variable **`--nav-vertical-rhythm: 1.75rem`** in `base.css` — Abstand oben in der Zone, **zwischen** den beiden Nav-Leisten und **unter** der zweiten Leiste vor dem Seitentitel. **Horizontal:** Nav-Blöcke bleiben **zur Viewport-Mitte zentriert** (über die zentrierte **`.top-nav-zone__brand-row`**). In beiden **`.main-nav ul`** ist **`align-items: center`** gesetzt, damit **Logo** und **Textlinks** in einer Zeile optisch **mittig** zueinander stehen. Der **obere** Außenabstand der Seite kommt aus der Zone; **`body`** hat auf den betroffenen Seiten **`padding-top: 0`** (seitlich und unten bleiben die jeweiligen Seitenwerte).

**Pfade:** der **erste Link** in Nav 1 zeigt von `pages/` aus auf **`../index.html`** (Logo, `aria-label="Zur Startseite QA Lernwebseite"`); auf **`index.html`** auf **`index.html`** (Startseite, mit `aria-label` / `aria-current` wie im Markup). Die Vorlage unter `templates/` nutzt dieselben relativen Pfade zu `index.html` und `pages/…`.

---

## Projektstruktur

| Pfad | Beschreibung |
|------|----------------|
| `index.html` | **Einstieg** — zwei Kartenbereiche (**Lernmaterial** / **Hausaufgaben**), **12** Verweiskarten Lernmaterial und **10** Hausaufgaben; layoutspezifisches CSS inline, sonst wie Hauptsystem. |
| `pages/` | **22** aktive Lern- bzw. HA-Seiten (siehe Tabelle unten). |
| `assets/qa-favicon-256.png` | **Favicon** (PNG 256×256, **QA**-Monogramm); dieselbe Datei als **Logo** im ersten Nav-Punkt (`main-nav__home`). In allen HTML-Seiten per `<link rel="icon" …>`. |
| `assets/css/base.css` | Globale Variablen (`:root`), u. a. **`--nav-inline-logo-height`** (Darstellung des Logos in Nav 1), Body-Hintergrund, **`.top-nav-zone`**, **`.main-nav`** / **`.main-nav--assignments`**, **`.main-nav__home`**, Skip-Link; **Designsystem-Pilot:** **`.meta-bar`** (**F-META**), Syllabus-Chip, **Seitenlegende** **`.legend`** (**F-LEGEND**, `--legend-*`), **`--ok`/`--warn`**-Aliase, **`.correction-bar`** / **`.ctfl-fix`** (siehe `01_Projektsteuerung/designsystem-workshop/P04-04-ctfl-lernwebsite-spec.md`). |
| `assets/css/subpage.css` | Gemeinsame **`header`**-/`footer`-Typo für Unterseiten. |
| `assets/css/doc-a4.css` | **A4-/Dokumentmodus** inkl. Screen-`body`-Ränder; **Flex-Spalte** auf `.doc-a4` (`.doc-body` wächst, **`.doc-footer`** mit `margin-top: auto` am unteren Blattrand); Druck: `@page` A4, `min-height`/`width` angepasst; schmale Viewports: seitliches Scrollen statt Quetschen. Wird von HA-A4-Seiten zusätzlich eingebunden. |
| `assets/css/index.css` | Ältere/alternative Einstiegs-Styles — **`index.html` lädt derzeit `base.css` + `subpage.css` und lokales `<style>`**; Datei bleibt im Repo zur Referenz und Standards-Doku. |
| `assets/js/` | u. a. **`sdlc-hypocycle-animiert.js`** für die animierte SDLC-Seite. |
| `assets/ha6-screenshots/` | **HA6** — Screenshots zur **Testausführung** im Testprotokoll (`06a-ha6-testprotokoll-a4.html`, PASS) sowie zu **BUG-001 / BUG-002** im Fehlerbericht (`06b-ha6-fehlerbericht-a4.html`); liegt im **Pages-Artifact** und ist öffentlich erreichbar. |
| `templates/referenzvorlage-hauptsystem.html` | Referenz für neue **Hauptsystem**-Seiten (Nav, `page-chrome`, `main`). |
| `archive/` | Nicht aktive ältere Versionen — nur Dokumentation. |

**Systemkonzept (Programm):** Architektur und Steuerung im übergeordneten **QA-Track** unter **`01_Projektsteuerung/`** (Project\_*-Serie) und ggf. **`06_Archiv/`** (z. B. ältere Konzept-Snapshots). Die Lernwebsite wird **nur** im Monorepo **qa-ctfl-track** versioniert (früheres separates Website-Repository ist nicht mehr vorhanden).

---

## Lernmodule — `pages/`

| Datei | Inhalt | CTFL (Orientierung) |
|-------|--------|----------------------|
| `01-landkarte.html` | Inhaltsverzeichnis / Landkarte des CTFL-Lehrplans v4.0.2 | Kap. 1–6 |
| `01a-glossar.html` | Schlüsselbegriffe CTFL v4.0.2; Zählung **97** eindeutige K1-Lemmata vs. **102** Tabellenzeilen; alphabetisches **A–Z**-Register | Kap. 1–6 |
| `01b-grundlagen.html` | Grundlagen des Testens (Was/Warum, QA vs. Testen, Fehlerkette, Grundsätze, Aktivitäten) | Kap. 1 |
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
| `06b-ha6-fehlerbericht-a4.html` | HA6 — Fehlerbericht **A4** (Incident Report, Musterdokument BUG-001 / BUG-002, 4 Blätter) | Kap. 5 |
| `06c-ha6-testabschlussbericht-a4.html` | HA6 — Testabschlussbericht **A4** (Test Completion Report, Blankovorlage) | Kap. 5 |
| `06-testwerkzeuge.html` | Testwerkzeuge: Kategorien, Nutzen &amp; Risiken der Testautomatisierung | Kap. 6 |
| `00a-ha-einordnung.html` | Einordnung der Hausaufgaben im CTFL-Kontext | — |
| `00b-standards.html` | Standards, Projektstatus, Referenzen | — |

**Ist-Stand:** Alle genannten Dateien sind vorhanden und in **beiden Nav-Leisten** sowie auf der **Einstiegsseite** verlinkt.

---

## Technik

- **Stack:** statisches **HTML/CSS**, optional **JavaScript** nur wo nötig (z. B. SDLC-Animation).  
- **Kein** Framework, **keine** Build-Pipeline, **keine** CDN-Pflicht für Kernseiten.  
- **Design tokens:** Farben und Abstände über **`:root`** in `base.css` (`--bg`, `--text`, `--e1`–`--e6`, `--nav-vertical-rhythm`, **`--nav-inline-logo-height`**, …). **Pilot P1 (Chips):** `--ctfl` / `--ctfl-bg` und **Alias** `--chip-syllabus-*` … `--chip-extra-*` sowie `--chip-padding-*`, `--chip-gap` (siehe `01_Projektsteuerung/designsystem-workshop/P03-mapping-ist-soll-token.md`).  
- **Druck:** Navigationsbereich ausblendbar wo vorgesehen; A4-Seiten nutzen zusätzlich Druckregeln in `doc-a4.css`.

---

## Dokumentation und Steuerung

| Dokument | Ort | Hinweis |
|----------|-----|---------|
| **Systemkonzept / Steuerung** (IA, Seitentypen, Benennung) | QA-Track: `01_Projektsteuerung/` (Charter, Standards, …); Archiv: `06_Archiv/` | Ein **Git-Repository** (`qa-ctfl-track`) für Programm und Website. |
| **Commit-/Push-Regeln** | [04_Project_Guidelines.md](../../01_Projektsteuerung/04_Project_Guidelines.md) | Gilt für das **gesamte** Repo; Website-Änderungen unter `02_Portfolio/QA_Lernwebseite/`. |
| **IST-Analysen (Website + Komponenten, Roadmap)** | [IST-01-analyse-website-meta.md](../../01_Projektsteuerung/designsystem-workshop/IST-01-analyse-website-meta.md), [IST-02-analyse-komponenten.md](../../01_Projektsteuerung/designsystem-workshop/IST-02-analyse-komponenten.md) (`01_Projektsteuerung/designsystem-workshop/`) | Meta- und technische Bestandsaufnahme; **kanonische Ablage** beim **Designsystem-Workshop** (keine zweite Kopie hier). **Ausgangsbasis** für **Komponentenstil / Designsystem light** ([02_Project_Status.md](../../01_Projektsteuerung/02_Project_Status.md), Arbeitspaket **P1**). |

### Analysen & Roadmap

- **`IST-01-analyse-website-meta.md`** / **`IST-02-analyse-komponenten.md`** — liegen unter **`01_Projektsteuerung/designsystem-workshop/`**; umfassende IST-Bewertung bzw. Komponenten-Inventar und Vorschlags-Backlog; dienen der Phase **Komponentenstil** vor schriftlicher Kanonisierung in den Project\_*-Standards. Neuere Website-Reviews können dort als zusätzliche Datei `website-analyse-YYYY-MM-DD.md` folgen.

---

## Stand

| | |
|--|--|
| **README erstellt** | 2026-03-12 |
| **README zuletzt aktualisiert** | **2026-03-31** |

**Kurzüberblick (Stand 31.03.2026)**

- **Hauptsystem:** einheitliche Kopf-/Fuß- und Typo-Schicht (`base.css`, `subpage.css`); **02c** im gemeinsamen Section-Muster; **Chip-Tokens** (Landkarte, Teststufen-Tags) **zentral** in `base.css` (Pilot **P1**).  
- **HA4/HA5/HA6:** inhaltlich und formal gehärtet — Meta-Informationen, Kette Web ↔ A4, Terminologie **Testbasis-Analyse**; HA6 mit **Testprotokoll A4**, **Fehlerbericht A4** (Musterdokument BUG-001 / BUG-002), **Testabschlussbericht A4** (ISO/IEC/IEEE 29119-3); Ergänzungen in **`doc-a4.css`** (u. a. Status-Badge für Review).  
- **Einstieg (`index.html`):** gleiche maximale Lesespalte wie die übrigen Hauptseiten (`max-width` 1400px), **zwei Bereichsüberschriften** (Lernmaterial / Hausaufgaben), kompaktes Intro und Orientierungshinweis; Kartenbeschreibungen mit **Kap.-Bezug** (Lernmaterial) bzw. **GroceryMate / Druck** (HA); HA-Meta **Thematisch · Kap. …** bzw. **Formular · A4** (Badge); Karten in jeder Rasterzeile **gleich hoch** (Flex-Spalte).  
- **Kopfnavigation:** **Zwei Leisten** in `.top-nav-zone` — **Lernmaterial** vs. **Hausaufgaben**, semantisch getrennt, `aria-label`s; **Startseite** als **Logo** im ersten Punkt von Nav 1 (Favicon-Asset, **`--nav-inline-logo-height`**); kein zusätzliches Header-Logo links; Zeilen mit **`align-items: center`**; vertikaler Rhythmus **`--nav-vertical-rhythm` (1,75rem)**; HA-Leiste über **`.main-nav--assignments`** visuell abgesetzt.  

Details und Historie: **Monorepo [qa-ctfl-track](https://github.com/chd108/qa-ctfl-track)** (Branch `main`; Website-Pfad `02_Portfolio/QA_Lernwebseite/`).
