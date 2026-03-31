# Komponenten-Bestandsaufnahme — QA_Lernwebseite

**Stand:** 2026-03-30  
**Umfang:** `index.html`, alle Dateien unter `pages/` (**23** Seiten) — **ohne** `templates/` und **ohne** `archive/`.  
**Quellen:** HTML-Dateien sowie `assets/css/` (**base.css**, **subpage.css**, **doc-a4.css**; ergänzend **index.css** als Legacy-/Referenzdatei); **seitenlokales `<style>`** (häufig duplizierte Komponenten wie `.info-box`, `.meta-bar`).  
**Bezug:** Ergänzt [website-analyse-2026-03-28.md](website-analyse-2026-03-28.md) (IST/Roadmap); fokussiert auf **technische und konzeptuelle Wiederholungen** als Grundlage für ein späteres **Designsystem light** (vgl. P1 in `01_Projektsteuerung/02_Project_Status.md`).

**Methode:** Systematische Durchsicht der Stylesheets und Stichproben-/Vollabgleich der HTML-Seiten per Suche nach wiederkehrenden Klassennamen; konzeptuelle Zuordnung („gleiche Absicht“) manuell begründet.

---

## 1. Seitentypen (Trennung A4 vs. Hauptsystem)

| Typ | Kriterium | Anzahl | Dateien |
|-----|-----------|--------|---------|
| **A4 / Dokumentmodus** | Einbindung `assets/css/doc-a4.css` | **6** | `04b-ha4-testbasisanalyse-a4.html`, `04d-ha5-testfallentwurf-a4.html`, `05b-ha5-testkonzept-a4.html`, `06a-ha6-testprotokoll-a4.html`, `06b-ha6-fehlerbericht-a4.html`, `06c-ha6-testabschlussbericht-a4.html` |
| **Hauptsystem (Lernmaterial + Hausaufgaben-Web)** | `base.css` + `subpage.css`, kein `doc-a4.css` | **16** + **`index.html`** | Alle übrigen `pages/*.html` sowie `index.html` |

*Hinweis:* `00b-standards.html` erwähnt `doc-a4.css` nur **inhaltlich** in einer Tabelle, lädt die Datei **nicht** — zählt zum **Hauptsystem**.

---

## 2. Globale CSS-Module (technische Grundlage)

| Datei | Rolle | Wesentliche benannte Bausteine |
|-------|--------|---------------------------------|
| **base.css** | Shell: Navigation, Skip-Link, Page-Chrome | `.top-nav-zone`, `.top-nav-zone--with-logo`, `.nav-logo-link`, `.main-nav`, `.main-nav--assignments`, `.page-chrome`, `.skip-link` |
| **subpage.css** | Typo `header`/`footer`, Quellenzeile | `header`/`footer`-Regeln, `.source-note` |
| **index.css** | **Legacy / Referenz** — laut Projekt-README lädt `index.html` derzeit **`base.css` + `subpage.css` + lokales `<style>`**, **nicht** `index.css` | Enthält u. a. `.intro`, `.main-unit`, `.card-grid`, `.card`, `.card-header`, … (potenziell für ältere/alternative Einstiegsvariante) |
| **doc-a4.css** | A4-Blätter, Formular-/Tabellen-Layout | `.doc-mode`, `.doc-a4`, `.doc-header` (+ BEM `__left`/`__right`), `.doc-feature-strip`, `.doc-body`, `.form-meta` (+ Zellen/Spannen), `.form-field*`, `.doc-soft-note`, `.vague-block*`, `.section__subhead`, `.ref-table`, `.boundary-box`, `.chip` / `.chip-row`, `.open-box`, `.open-list`, `.status-badge*`, `.read-guide*`, `.doc-footer`, `.meta-bar` |

---

## 3. Benannte Komponenten & Patterns (Hauptfokus)

### 3.1 Navigation & Seitenrahmen

| Bezeichnung | CSS-Klassen | In `assets/css` | Vorkommen (Auszug) |
|-------------|-------------|-----------------|---------------------|
| **Doppel-Navigation** | `.main-nav`, `.main-nav--learn`, `.main-nav--assignments` | `base.css` (`.main-nav`, `.main-nav--assignments`) | Nahezu alle Seiten: Lernmaterial-Nav + Hausaufgaben-Nav |
| **Logo-Bereich** | `.top-nav-zone--with-logo`, `.nav-logo-link` | `base.css` | Viele Seiten mit Logo; Ausnahmen möglich bei Minimal-Layout |
| **Skip-Link** | `.skip-link` | `base.css` | Wiederkehrend für Barrierefreiheit |
| **Trennlinie unter Nav** | `.page-chrome` | `base.css` | Standard unterhalb der Nav-Zone |

**Zweck / Intention:** Einheitlicher Einstieg, Zweiteilung **Lernmaterial | Hausaufgaben**.  
**Bereich:** Beide.

---

### 3.2 Meta-Zeile unterhalb Navigation („Kontextleiste“)

| Bezeichnung | CSS-Klassen | Definition | Vorkommen |
|-------------|-------------|------------|-----------|
| **Meta-Bar** | `.meta-bar` | **Doppelt:** (1) in **`doc-a4.css`** für A4-Modus; (2) **inline** auf den meisten Hauptsystem-Seiten **und** in **`index.html`** leicht unterschiedliche Werte (Padding, `justify-content`, Schriftgröße) | `index.html`, sehr viele `pages/*.html`; A4-Seiten mit Modushinweis |

**Zweck / Intention:** Kurzer Kontext (Kap., CTFL-Bezug, Modus **Screen vs. Druck** auf A4).  
**Bereich:** Beide; auf A4 oft **„Modushinweis“**, sonst **„Seitenkontext“**.

**Variante (konzeptuell gleich):** Gleiche Klasse `.meta-bar`, aber **kein** zentrales Stylesheet für Hauptsystem — **viele lokale Kopien** des CSS (Inkonsistenzrisiko).

---

### 3.3 Hinweis-Boxen (hohe konzeptuelle Überschneidung)

| Bezeichnung | CSS-Klassen | Wo definiert | Typische Seiten |
|-------------|-------------|--------------|-------------------|
| **Info-Box (Web-HA)** | `.info-box`, `.info-box--note`, `.info-box--ok`, `.info-box--auto`, `.info-box__title`, `.info-box__content` | **Inline** auf den jeweiligen Seiten (nicht in `assets/css`) | `04a`, `04c`, `05a` (umfangreich), `01b`, `02a`, `02b`, `04-testverfahren`, `01-landkarte`, `01a-glossar`, `index` (ähnlich: `.entry-info-box`) |
| **Doc-Info-Box (A4)** | `.doc-info-box`, `.doc-info-box--ok`, `.doc-info-box--warn`, `.doc-info-box__title` | **Inline** in `04d`, `06a`, `06c` (teilweise ergänzend zu `doc-a4`) | A4-HA5/HA6 |
| **Term-Note (A4, Screen)** | `.term-note`, `.term-note__src` | Inline `06a`, `06c` | Nur diese beiden |
| **Alternativ-Benennung „Hinweis“** | `.aha-box`, `.warn-box` | Inline **`02c-teststufen.html`** | Kommentar im CSS: *optisch an .info-box angeglichen* |
| **Einstiegs-Box** | `.entry-info-box` | Inline `index.html` | Startseite |

**Zweck / Intention:** Didaktische Hinweise, **Dokumentenkette**, CTFL/IEEE-Kontext, Warnung/Orientierung — fachlich **gleiche Familie** wie „Kasten mit linkem Rand“.

**Konzeptuelle Wiederholung:** **„Story-Verweis / Dokumentenkette“** erscheint als  
- **`info-box--note`** (blau/notig) auf `05a`/`04c`/`04a`,  
- **`doc-info-box`** (grau, Druck-Ästhetik) auf A4,  
- **`doc-info-box--ok`** (grün) für z. B. GM-F03-Auswahl **`04d`**.

**Beispiel Text (Dokumentenkette):** *„Dokumentenkette — HA4 Testbasis-Analyse → HA5 Testfallentwurf“* (`04c`, `info-box--note`).

---

### 3.4 Karten-Raster (Einstieg & Lernmodule)

| Bezeichnung | CSS-Klassen | Wo | Vorkommen |
|-------------|-------------|-----|-----------|
| **Einstiegs-Karten** | `.entry-card-split`, `.entry-card-row`, `.entry-card`, `.entry-card__header`, `.entry-card--*`, … | **`index.html`** (lokales `<style>`) | Startseite — **nicht** `index.css` |
| **Modul-Karten (Legacy-CSS)** | `.card-grid`, `.card`, `.c1`–`.c6` | `assets/css/index.css` (von `index.html` **nicht** eingebunden) | Referenz/alternatives Layout in der Datei |
| **HA5-Web Karten** | `.card-grid`, `.card`, … | Inline **`05a-ha5-testkonzept.html`** | Formular-HA-Web |

**Zweck / Intention:** Einstieg und inhaltliche **Kacheln** mit Kapitel-/Kap.-Bezug.  
**Bereich:** Einstieg + ausgewählte Hausaufgaben-Webseiten.

---

### 3.5 Spezialseiten (eigene Komponenten-Sprache)

| Seite | Benannte Patterns (Auszug) | Zweck |
|-------|-----------------------------|--------|
| **`02c-teststufen.html`** | `.stufen-grid`, `.stufe-card`, `.stufe-header`, `.matrix-wrap`, `table.matrix`, `.aha-box`, `.warn-box`, `.tag-ctfl`, … | Teststufen-Matrix, visuell dichter **Custom-Block** |
| **`01-landkarte.html`** | `.landkarte-*`, `.mod-card`, `.kap-meta`, … | Landkarten-/Modul-Navigation |
| **`01a-glossar.html`** | `.glossary-search`, `.glossary-nav`, `.lemma-block`, … | A–Z-Glossar |
| **`00b-standards.html`** | `.table-wrap`, `.legend`, `.leg-dot`, `.cat-*`, Status-Zellen | Tabellen-/Legenden-Layout für **Standards-Übersicht** |
| **`02b-sdlc-animiert.html`** | Einbindung Skript, ggf. eigene Wrapper | Animation (technisch JS-lastig) |

Diese Seiten **teilen** `meta-bar` und globale Nav mit dem Rest, nutzen aber **eigene** Klassen-Ökosysteme — konzeptuell „Karten/Raster/Tabellen“, technisch **nicht** mit den Einstiegs-**`entry-card*`-**Mustern oder den Legacy-**`card*`-**Regeln in `index.css` vereinheitlicht.

---

### 3.6 A4-Dokumente (`doc-a4.css` + Erweiterungen)

| Bezeichnung | CSS-Klassen | Zweck |
|-------------|-------------|--------|
| **Blatt** | `.doc-a4`, `.doc-mode` | A4-Sheet, Screen/Druck |
| **Kopf** | `.doc-header`, `.doc-header__left`, `.doc-header__right` | Titel, Meta „Projekt / Seite“ |
| **Feature-Zeile** | `.doc-feature-strip`, `.doc-feature-strip__num` | Abschnitts-Banderole |
| **Formular-Kopfzeilen** | `.form-meta`, `.form-meta__cell`, `.form-meta__label`, `.form-meta__value` | Metadaten-Grid |
| **Inhaltsfelder** | `.form-field`, `.form-field__label`, `.form-field__value`, `.vague-block*`, `.section__subhead` | Freitext, Unterüberschriften |
| **Tabellen** | `.ref-table`, `.cell-q`, `.cell-a`, `.sum-table`, `table.questions-5col` | Traceability, Summen |
| **Lesepfad** | `.read-guide-grid`, `.read-guide__note` | Leserführung (z. B. Testfragen) |
| **Fuß** | `.doc-footer` | Fußzeile pro Blatt |

**Bereich:** Hausaufgaben **A4**; fachlich **Portfolio-/Abgabe-Dokumente**.

---

## 4. Technische vs. konzeptuelle Wiederholung (Kurzmatrix)

| Muster | Technisch gleiche Klasse? | Konzept gleich? | Anmerkung |
|--------|---------------------------|------------------|-----------|
| Hinweis „Dokumentenkette“ | Teilweise `.info-box--note` vs. `.doc-info-box` | **Ja** | Farbe/Raster: Web vs. A4 |
| Meta-Kontextzeile | `.meta-bar` | **Ja** | CSS meist **dupliziert**, nicht nur zentral |
| „Was ist …?“-Didaktik | `.info-box` | **Ja** | Sehr häufig auf `05a`/`04c` |
| Grüner **OK**-Hinweis | `.info-box--ok` (Web) vs. `.doc-info-box--ok` (A4) | **Ja** | Namensspiegelung, andere Datei/Token |
| Rand-Hinweis allgemein | `.info-box` vs. `.aha-box`/`.warn-box` | **Ja** | `02c` eigene Klassen trotz ähnlicher Optik |

---

## 5. Utility-Beobachtungen (Sekundärfokus)

**Nicht erfasst:** Jede isolierte Utility-Zeile — Fokus auf **Muster, Inkonsistenzen, fehlende Systematik**.

### 5.1 Duplikation statt zentraler Komponenten-CSS

- **`.info-box*`** und **`.meta-bar`:** wiederholte Block-Styles in **vielen** `<style>`-Blöcken statt einer gemeinsamen Datei (z. B. `components.css`) → Risiko: Abweichungen bei Farben/Abständen (bereits sichtbar: `04-testverfahren` mit **hartem** `#e8f0e8` statt ausschließlich CSS-Variablen).

### 5.2 Benennung & gleiche Absicht

- **`entry-info-box`** (`index`) vs. **`info-box`** (Unterseiten): gleiche Rolle „Infokasten“, **unterschiedliche** Klassennamen.
- **`doc-info-box`** vs. **`info-box`:** bewusst andere Welt (A4 vs. Web), aber **konzeptuell** gleiche Familie „Kasten mit Titel/Zeile“.

### 5.3 Spacing & Typo

- Mischung aus **`rem`** (Web-HA), **`pt`** (A4) und gelegentlich **Pixel** in Inline-Styles — **erwartbar** für A4 vs. Screen, aber für ein Designsystem später **explizite Token** sinnvoll (`spacing-screen-*` vs. `spacing-print-*`).

### 5.4 Schatten / Karten

- **`.entry-card`** (`index.html` inline): Schatten/Hover; **`02c`** `box-shadow` auf Matrix — gleiche **Absicht** („schwebende Karte“), **kein** gemeinsamer Utility-Name. Die Datei **`index.css`** definiert zusätzlich **`.card`**, wird auf der Live-Einstiegsseite aber **nicht** geladen.

### 5.5 Barrierefreiheit

- Wiederkehrende **`role="note"`** / **`aria-labelledby`** bei Info-Boxen — gut; nicht auf allen ähnlichen Kästen vereinheitlicht dokumentiert (teilweise nur implizit).

---

## 6. Lücken & nächste Schritte (für P1 / Designsystem)

1. **Zentrale Extraktion:** `.info-box*`, `.meta-bar` (Hauptsystem), optional `.entry-info-box` in **eine** eingebundene Komponenten-CSS-Datei — **WARUM:** eine Quelle der Wahrheit, weniger Drift.  
2. **Semantische Zuordnung:** festlegen, wann **`info-box--note`** (Dokumentenkette) vs. reiner Hinweis — ggf. **ein** Modifier oder Daten-Attribut.  
3. **A4:** `.doc-info-box*` mit `.info-box*` **inhaltlich** mappen (Design-Tokens: „neutral“, „success“, „warning“) ohne Web/A4 zu vermischen.  
4. **Spezialseiten** (`02c`, `01-landkarte`, `01a`, `00b`): entscheiden, ob sie **eigenständige** „Module“ bleiben oder auf gemeinsame Raster/Typo-Utilities migrieren.

---

## 7. Abgrenzung

- Dieses Dokument ist **kein** visuelles Redesign und **keine** vollständige Aufzählung jeder HTML-Klasse.  
- **Templates** (`referenzvorlage-hauptsystem.html`) wurden nicht inventarisiert; kann bei Template-Pflege ergänzt werden.

---

*Ende der Komponenten-Bestandsaufnahme 2026-03-30.*
