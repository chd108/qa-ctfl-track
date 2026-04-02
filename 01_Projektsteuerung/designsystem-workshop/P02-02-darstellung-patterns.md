Datei erstellt: 2026-03-30  
Letzte Aktualisierung: 2026-04-02 — Metablock Variante B ergänzt; inhaltlicher Stand 2026-03-30  
Zweck: Darstellungs-Patterns (WIE vs. WAS) — Ergänzung zu Session 2.  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Konzept  
Normative Orientierung: Kopplung an [P02-01-taxonomie-information.md](P02-01-taxonomie-information.md)

---

# Session 2.5: Darstellungs-Patterns

**Workshop:** Designsystem — Ergänzung zu Session 2 (Informations-Typen = **WAS**; hier **WIE** / Präsentation)  
**Vorgänger:** [P02-01-taxonomie-information.md](P02-01-taxonomie-information.md), [IST-02-analyse-komponenten.md](IST-02-analyse-komponenten.md), [IST-01-analyse-website-meta.md](IST-01-analyse-website-meta.md)

---

## 0. Feedback vor Start

| Frage | Einschätzung |
|-------|----------------|
| **1. Reichen die Pattern-Kategorien (Tabellen, Diagramme, Karten, …)?** | **Ja als Gerüst.** Ergänzend sinnvoll: **„Sektions-Container“** (`.section` mit Kopf/Leib), **Zwei-/Dreispalter** ohne Kartencharakter, **A4-/Druck-Layout** als eigene Spalte — sonst werden Mischformen verkannt. |
| **2. Fehlende visuelle Form?** | **Code-/Zitatblöcke** (`<pre>`, `code`) falls später mehr Technik; **Accordion** (Website-Analyse empfiehlt Landkappen) — aktuell **kein** wiederkehrendes Accordion-Muster. |
| **3. Struktur der Analyse** | Zuerst **Pattern-Typen** (IST) mit CSS-Namen → **Seiten-Matrix** → **Lücken** → **Soll** → **Kopplung** an Info-Typen (Session 2). |
| **4. Wichtigste Seiten** | **02c**, **04-testverfahren**, **05-testmanagement**, **03** (viele Raster), **01b** (textlastig), **05a/04c** (HA-Karten + Tabellen), **01-landkarte** (Tags), **01a** (Tabellen-Glossar), **A4-Seiten** (`doc-a4`). |
| **5. Weitere Quellen?** | **Nein** für diese Inventur; bei Detail-Refactoring ggf. Screenshot-Pass mit festem Viewport. |

**Fokus:** Wiederkehrende Muster; Einzelfälle nur wo sie eine **Klasse** begründen (z. B. einziges große SVG-Baumdiagramm auf `04-testverfahren`).

---

## 1. Pattern-Inventar (IST)

### 1.1 Tabellen / Matrizen

| Pattern | Wo (Auszug) | Wofür | Technik / CSS | Kurzbeschreibung |
|---------|-------------|--------|----------------|------------------|
| **Glossar-Tabelle** | `01a-glossar.html` | DE/EN/Abk/Kap. je Lemma | `.ref-table`, Zellen `.cell-de`, `.cell-en`, … | Sehr breite Referenztabellen, Abschnitte `section--e1` … |
| **Vergleichstabelle** | `01b-grundlagen.html` | QA vs. Testen, Aktivitäten, Kompetenzen | `.comparison-table` | Klassische Vergleiche, eingebettet in Fließtext-Sections |
| **Statik vs. Dynamik** | `03-statisches-testen.html` | Merkmalsvergleich | `table.vtable`, `.vtable-wrap`, `.vtable-head` | Sektion mit Label `section-label` (Nummer-Zeichen) |
| **Review-/Rollen-Grids** | `03-statisches-testen.html` | Review-Arten, Rollen | `.review-grid`, `.rollen-grid`, `.ef-grid` | Kartenartige Blöcke in Grid, ergänzend zu Tabellen |
| **Teststufen-Matrix** | `02c-teststufen.html` | Stufen × Testarten | `table.matrix`, `.matrix-wrap`, `.matrix-head` | Überschrift über voller Breite, Zellen für Kreuze/Text |
| **Weitere Grids auf 02c** | `02c` | Strategien, Abnahme, Visuals | `.strat-grid`, `.abnahme-grid`, `.arten-grid`, `.vs-grid`, `.visual-grid` | Spezial-Layouts pro Unterthema |
| **Risiko-Matrix (CSS Grid)** | `05-testmanagement.html` | Eintritt × Schaden | `.risk-matrix`, `.risk-matrix-wrap` | Kleine **Raster-Matrix** ohne HTML-`<table>` |
| **Tabellen in Karten** | `05a`, `04c`, `04a` | HA-Inhalte, TC-Metadaten | `.card-grid` + innen `<table>`, `.section` | Modul-„Karten“ mit Tabellen im Inneren |
| **Zeitplan-Tabelle** | `05a-ha5-testkonzept.html` | Phasen / Deliverables | `table.timeline-table` | Leicht andere Kopfzeilen-Farbe (`thead`) |
| **A4-Referenztabellen** | `04b`, `04d`, `05b`, `06a`… | Fragen/Antworten, Summen, Logs | `doc-a4.css`: `.ref-table`, `.sum-table`, `questions-5col`, `flow-summary-table`, … | **Druck-** und Formular-Logik, oft 8.25pt |

**Visuell:** Von **schlicht referenzial** (Glossar) bis **hoch strukturiert** (02c-Matrix, 05-Management).

---

### 1.2 Diagramme / Organigramme / Bäume

| Pattern | Wo | Wofür | Technik | Beschreibung |
|---------|-----|--------|---------|----------------|
| **Großes Kategorie-Baum-SVG** | `04-testverfahren.html` | 4 Verfahrensklassen + 11 Verfahren + HA-Badges | **Inline-SVG** (`viewBox="0 0 1440 945"`), Linien/Rechtecke | Zentrales „Organigramm“; **Legende** `nav.legend` **oberhalb** der Grafik (direkt unter meta-bar, 04d B.12); **4-Spalten-Karten** `card-grid` unter der Section mit SVG |
| **Testpyramide / Schichten-SVG** | `05-testmanagement.html` | Unit vs. Integration vs. E2E | Inline-SVG ca. 400×280 | Neben **Praxis-Box** `.praxis-box` und **Quad-Grid** |
| **Wartungs-Szenarien-SVG** | `02c-teststufen.html` | Release vs. Hotfix vs. Migration vs. Decommissioning | Zwei kleine SVGs in `.visual-grid` | Illustrative **Vier-Felder**-Logik |
| **Hypozykel (Canvas)** | `02a-sdlc-statisch.html` | SDLC + ISTQB-Testprozess | **HTML5 Canvas** + JS-Zeichnung | Einmaliges Laden; anderes Medium als SVG |
| **Animierter SDLC** | `02b-sdlc-animiert.html` | Interaktiver Ablauf | JS (`sdlc-hypocycle-animiert.js`) | **Animation**, nicht statisches Diagramm |

**Hinweis:** **Kein** einheitliches „Diagramm-Modul“ — jedes große visuelle Element ist **seiten-spezifisch** eingebettet.

---

### 1.3 Karten-Raster / Card-Layouts

| Pattern | Wo | Wofür | CSS (typisch) |
|---------|-----|--------|----------------|
| **Einstiegs-Karten** | `index.html` | Lernmaterial / HA-Module | `.entry-card*`, `.entry-card-split` |
| **4-Spalten-Karten** | `04-testverfahren.html` | Kurzbeschreibung je Verfahrensklasse | `.card-grid`, `.card`, `.card__title` |
| **HA5-Web** | `05a`, `04c` | Produkte/Phasen/TC-Blöcke | `.section`, `.card-grid`, teils `.card` |
| **Testwerkzeuge** | `06-testwerkzeuge.html` | Werkzeugkategorien | `.tool-grid` |
| **Nutzen/Risiken** | `06-testwerkzeuge.html` | Zwei-Spalten | `.benefits-risks-grid` |
| **Teststufen-Hauptkarten** | `02c` | 5 Teststufen | `.stufen-grid`, `.stufe-card`, `.stufe-header` … |
| **HA4-Analyse** | `04a` | Features/AC | `.analysis-card`, `.schema-item` |

**Konflikt-Potenzial:** Namen wie **`.card`** und **`.card-grid`** kommen auf **mehreren** Seiten vor, aber mit **unterschiedlichen** Inline-Definitionen — **kein** globales `components.css`.

---

### 1.4 Prozess-Abläufe / Schritte / „Timeline“

| Pattern | Wo | Wofür | Darstellung |
|---------|-----|--------|-------------|
| **Nummerierte Testschritte** | `04c`, `04d` (Web/A4) | TC-Schritte | `<ol class="tc__steps">` bzw. `ol.doc-steps` |
| **Phasen-Zeitleiste (Tabelle)** | `05a` | Zeitplan Deliverables | `table.timeline-table` (kein horizontales Zeitstrahl-SVG) |
| **Ablauf implicit** | `02b` | SDLC | Animation statt Schrittliste |
| **Hypozykel** | `02a` | Phasen im Kreis | Canvas |

**Echte Timelines** (horizontale Achse, Milestones) — **nicht** vorhanden; stattdessen **tabellarische** Zeitplanung auf `05a`.

---

### 1.5 Listen / Aufzählungen

| Variante | Wo | Wofür |
|----------|-----|--------|
| **Tag-„Listen“ (visuell Chips)** | `01-landkarte.html` | Lehrplan-Granularität | `.tag-group`, `.tag`, keine `<ul>` für jedes Thema |
| **Bullet-Listen im Fließtext** | fast alle Seiten | Standard-Erklärung | `<ul>` in Sections |
| **Nummerierte Listen** | Kap.-Seiten, HA | Schritte, Prioritäten | `<ol>` |
| **Definitions-artig** | Glossar | Spalten statt DL | Tabelle statt `<dl>` |
| **Symbol-Zeichen als Überschrift** | `03-statisches-testen.html` | Abschnittsreihenfolge | `&#9312;` … in `.section-label` |

**Besonderheit Landkarte:** hohe **Informationsdichte** durch Chip-Zeilen statt klassischer Liste — gleiche **Funktion** wie Liste, anderes **Layout**.

---

### 1.6 Vorwiegend Text-Seiten („Nur Text + wenig Struktur“)

| Seite | Charakter | Was fehlt optisch (relativ zu 02c/04)? |
|-------|-----------|----------------------------------------|
| **01b-grundlagen** | Lange `<section>`-Ketten, **einige** Tabellen + Info-Boxen | Sichtbare **Zwischenanker**, TL;DR, mehr **visuelle Rhythmus**-Wechsel (Website-Analyse) |
| **01c-testmittel** | Mix aus Grid + Tabellen — **mittel** dicht | — |
| **06-testwerkzeuge** | Sections + **Grids** — schon aufgelockert | Optional: ein **Diagramm** Kategorien |
| **00a-ha-einordnung** | eher **Prosa** | stärkeres **Raster** oder Infografik |
| **A4-Dokumente** | **Formular-Ästhetik**, nicht „Tutorial-Seite“ | bewusst anders; kein Mangel, sondern **Modus** |

---

### 1.7 Typografie-Varianten (IST)

| Aspekt | Einheitlich? | Beobachtung |
|--------|----------------|-------------|
| **Seitentitel** | weitgehend ja | `header h1` / `subpage.css`, Serif |
| **Untertitel** | ja | kursiv, `header p` |
| **Sans für UI-Labels** | häufig | `'Helvetica Neue', Helvetica, Arial, sans-serif` in Meta, Kartenköpfen, Tabellenköpfen |
| **Kapitel-Sections** | unterschiedlich | mal `.section` + Schatten (`04`, `05a`), mal nur `<section>` ohne Box (`01b`) |
| **Hervorhebung** | gemischt | `strong`, Kapitel-Farben in Glossar (`.cell-abk`), Warnfarben in Notizen |
| **Inkonsistenzen** | ja | `body { font-size }` und `--fs` **pro Seite** leicht unterschiedlich; **nicht** ein Token-System |

---

### 1.8 Bilder / Grafiken

| Typ | Wo | Zweck |
|-----|-----|--------|
| **Logo/Favicon in Nav** | fast alle Seiten | Branding, nicht inhaltlich |
| **SVG-Diagramme** | `04-testverfahren`, `05-testmanagement`, `02c` | **Erklärung**, Struktur |
| **Canvas** | `02a` | SDLC/Prozess |
| **Screenshots** | (HA6-Assets, verlinkt) | Nachweis — **nicht** eingebettet als `<img>` in den meisten Lernseiten |
| **Externe Stock-Fotos** | **keine** im Kern | — |

**Fazit:** Illustrationen sind **funktional** (Diagramm), kaum **Dekoration**.

---

## 2. Seiten-Matrix (kompakt)

Legende: **●** = stark/nachweisbar · **◐** = teilweise · **—** = kaum/nicht

| Seite | Tabellen | Diagramm/SVG/Canvas | Karten-Grid | Listen/Chips | Text-dominant |
|-------|----------|---------------------|-------------|--------------|---------------|
| index | — | — | ● | — | ◐ |
| 01-landkarte | — | — | ◐ (Tags) | ● (Tags) | ◐ |
| 01a-glossar | ● | — | — | — | ◐ |
| 01b-grundlagen | ● | — | — | ● | ● |
| 01c-testmittel | ● | — | ● | ● | ◐ |
| 02a-sdlc | — | ● (Canvas) | — | ● | ◐ |
| 02b-sdlc | — | ● (JS-Anim) | — | ● | ◐ |
| 02c-teststufen | ● | ● (SVG) | ● | ● | ◐ |
| 03-statisch | ● | — | ● | ● | ◐ |
| 04-testverfahren | — | ● (großes SVG) | ● | ● | ◐ |
| 04a/04c/05a | ● | — | ● | ● | ◐ |
| 05-testmanagement | ● | ● (SVG) | ● | ● | ◐ |
| 06-testwerkzeuge | — | — | ● | ● | ◐ |
| 00b-standards | ● | — | — | — | ◐ |
| A4 (04b/04d/…) | ● | — | ◐ (doc-grid) | ● | Formular |

---

## 3. Lücken-Analyse

| Bereich | Befund | Konkrete Idee (ohne Umsetzung) |
|---------|--------|--------------------------------|
| **01b-grundlagen** | Lang, **monotone** Section-Kette (vgl. [IST-01-analyse-website-meta.md](IST-01-analyse-website-meta.md)) | Sprungmarken/TOC oben; **Key-Takeaways-Box** pro Hauptabschnitt; optional **Icon** für Kernprinzipien |
| **01-landkarte** | Sehr **dicht** | Accordion pro Kapitel oder „**Kurzüberblick**“-Zeile oben |
| **Einheitliche Section-Hülle** | Mal `.section` mit Schatten, mal bloßes `<section>` | **Ein** Section-Pattern (P0) für Lernseiten |
| **Diagramme** | **Kein** Wiederverwendungs-Template; SVG-Code **dupliziert** Logik | Token für **Kantenfarben** / Typo in SVG-Text (P1) |
| **Timelines** | Nur tabellarisch | Wenn Zeitachse gewünscht: **ein** horizontales Pattern (P2) |
| **Tag vs. Liste** | Landkarte ist **Spezialfall** | In Designsystem: **„Chip-Leiste“** als eigenes Layout-Pattern benennen |

---

## 4. Soll-Vorschlag (Standard-Patterns)

| Priorität | Pattern | Begründung (Kurz) |
|-----------|---------|-------------------|
| **P0** | **Section-Container** (Überschrift + optional Untertitel + Inhalt, ein Schatten/Radius-Token) | Lesbarkeit, Einheit Lernseiten vs. „alles gleich wichtig“ |
| **P0** | **Vergleichstabelle** (mindestens ein Spalten-Header-Stil aus `vtable` / Glossar zusammenführen) | Wiederkehrend in 01b, 03, Glossar |
| **P0** | **Karten-Grid** (ein semantisches Raster für „Modul-Kacheln“ — Einstieg/HA/Werkzeuge) | Reduziert Wildwuchs bei `.card-grid`-Kopien |
| **P1** | **Diagramm-Platzhalter** (Rahmen, Legende, `aria-labelledby`, max-width) — Inhalt SVG/Canvas **austauschbar** | 04, 05, 02c teilen ähnliche Bedürfnisse |
| **P1** | **Chip-/Tag-Zeile** (Landkarten-Ästhetik als optionales Modul) | T-PFLICHT vs. T-PRAXIS farblich konsistent (Session 2) |
| **P1** | **Nummerierte Schritte** (`.tc__steps` / `doc-steps` vereinheitlichen) | Portfolio/HA |
| **P2** | **Horizontale Timeline** | nur wenn inhaltlich gewünscht |
| **P2** | **Accordion** | Landkarte / lange Seiten |
| **nice** | **TL;DR-Box** / **Key takeaways** | Didaktik, Website-Analyse |

---

## 5. Kombination mit Informations-Typen (Session 2)

Beispiele, wie **Inhaltstyp (T/O/D/…)** mit **Darstellungs-Pattern (P-…)** zusammenwirken können:

| Kombination | Lesart |
|-------------|--------|
| **T-PFLICHT** + **Chip-Leiste** (Landkarten-Stil) | Pflichtthemen **scannen** ohne Fließtext |
| **T-PFLICHT** + **großes SVG** (`04-testverfahren`) | **Struktur** des Syllabus-Kapitels **auf einen Blick** |
| **O-KETTE** + **Karten + Verweistabelle** (`05a`/`04c`) | Dokumentenpfad **navigierbar** |
| **D-ERKLAER** + **Section + Info-Box** | „Was ist X?“ **kapseln** ohne volle Seitenbreite |
| **D-WARN** + **Rand-Box** (`.warn-box` / Callout) | Risiko **optisch** von Fließtext trennen |
| **X-DOK (A4)** + **ref-table / form-meta** | **Norm-/Abgabe-Modus** bewusst **nicht** wie Tutorial-Seite |

*Hinweis:* Gleicher **Info-Typ** kann auf **verschiedene** Patterns gemappt werden (z. B. T-PRAXIS als Chip **oder** Fußnote) — im Designsystem **Priorität** und **Kontextregeln** festlegen.

---

## 6. Nächste Schritte (Vorbereitung Session 3)

1. **Token-Liste** skizzieren: Abstände, Radius, Schatten, **eine** Sans für UI-Labels, Section-Hintergrund — abgleichen mit `base.css` `:root`.  
2. **Mapping-Tabelle:** Pattern-Name (P-Section, P-Table-Vergleich, …) → bestehende CSS-Klassen **oder** Refactoring-Ziel.  
3. **Pilotseite** wählen (Vorschlag: **01b** oder **01-landkarte**) für ersten **Style-Vergleich** „vorher/vorläufig nachher“.  
4. Session-2-Typen **D-TLDR** / **D-RAND** nur aktivieren, wenn ein **konkretes** Section-/Callout-Pattern steht.

---

*Ende Session 2.5 — Darstellungs-Patterns (2026-03-30).*
