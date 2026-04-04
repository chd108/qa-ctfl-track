Datei erstellt: 2026-04-01  
Letzte Aktualisierung: 2026-04-05 — **§2:** Zeile **HA-Oberflächen** (`--surface-handlung-*`, `--surface-loesung-kopf-bg`); Darstellung [pilot-ha3-content-phasen.md](pilot-ha3-content-phasen.md) Phase 6. Zuvor **2026-04-03** — Verweis **Landkarte:** **C-PRAXIS**-Konvention, **Smoke**/**SonarQube** (Doppelrolle) in [P04-04](P04-04-ctfl-lernwebsite-spec.md) **A.0.1b/c**; **§1** `.tag-group` / `.tags + .tags` in **`base.css`**; zuvor **C-EXTRA**, **A.0.0**  
Zweck: IST → SOLL → Token-Mapping-Tabellen (Session 3) — maßgebliche technische Quelle für C/F/P/S.  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Normativ  
Normative SOLL-Basis: [P02-06-taxonomie-soll.md](P02-06-taxonomie-soll.md) · IST-Inventar u. a. [IST-02-analyse-komponenten.md](IST-02-analyse-komponenten.md); Cluster [P04-00-spec-overview.md](P04-00-spec-overview.md)

---

# Session 3: IST → SOLL → Token-Mapping

**Ort:** `01_Projektsteuerung/designsystem-workshop/`

**Hinweise vor der Tabelle**

- **Token-Namen** sind **Vorschläge** bis Freigabe; **gleiche** Token können für **mehrere** IST-Klassen gelten (siehe Spalte *Hinweis*).
- Geschätzte **Anzahl benannter CSS-Variablen** im Endausbau: **ca. 15–30** (Bandbreite, **nicht** eine fixe Zahl pro Komponente; nicht jede Tabellenzeile erzwingt eine neue Variable).
- **Bestehende** `:root`-Variablen in **`base.css`** / **`doc-a4.css`** wo möglich **fortführen oder aliassen** — vermeidet eine **zweite** Token-Welt parallel zu den bereits genutzten `--e1`–`--e6`, `--note`, `--ctfl-bg` usw.
- **S-\*** (Diátaxis): **Aussehen** von Label/Badge (**Emoji, Farbe, Text, Icon**) ist **noch nicht** entschieden — in den S-Zeilen steht nur: **„Label-System für Leser (Details folgen)“**.
- **Workshop-Ordner** `designsystem-workshop/` bleibt die **maßgebliche Referenz** für **02f**, **P03-mapping-ist-soll-token.md** und Sessions — **nicht** „eingefrorenes Archiv“; Verdichtung in **03_Project_Standards** kann **ergänzend** erfolgen, ersetzt die Quelldateien **nicht** ohne Beschluss.
- **Design-Spec-Cluster (04):** [P04-00-spec-overview.md](P04-00-spec-overview.md) — **ergänzt** dieses Dokument um **Priorität** (P0/P1) und **Domain CTFL**; **normativ** für IST/SOLL/Token bleibt **weiterhin diese Datei (03)**. Vereinfachungs- und Drift-Risiken: siehe Risiko-Register im Overview.
- **Inhaltliche Bedeutung der C-\*-Codes** (einheitlicher Sinn über Lernseiten): [P04-04-ctfl-lernwebsite-spec.md](P04-04-ctfl-lernwebsite-spec.md) **§ A.0** / **A.0.0** (C-SYLLABUS redaktionell) — **ergänzend** zu den Tabellen hier; bei Widerspruch zuerst **Taxonomie (02f)** und **03** klären, dann A.0 anpassen.

---

## Tabellenlegende

| Spalte | Bedeutung |
|--------|-----------|
| **IST** | Bestehende Klasse(n) / Attribut(e) im Repo (oder „—“ wenn noch nicht umgesetzt). |
| **SOLL** | Code aus **02f** (C-/F-/P-/S-*). |
| **Token** | Geplante `:root`-Variablen oder Verweis „wie Zeile …“ / Label-System. |
| **Hinweis** | Web / A4 / Chip / Callout / mehrfach verwendet. |
| **Was passiert?** | Kurzbeschreibung für Menschen: welche Wirkung die Vereinheitlichung hat. |
| **Beispiel IST** | Konkrete Seite + grober Ort (Abschnitt/Kontext). |

---

## 1. C-* (Content / Domäne)

| IST | SOLL | Token | Hinweis | Was passiert? | Beispiel IST |
|-----|------|-------|---------|---------------|--------------|
| `.tag--ctfl` (Farben in `assets/css/base.css`; Hülle/Maße ggf. seitenlokal) | **C-SYLLABUS** | `--chip-syllabus-bg`, `--chip-syllabus-fg` (alias zu bestehenden `--ctfl-bg` / Textfarbe) | Web, Chips | Die grünliche Kennzeichnung für **Prüfungs-/Syllabus-Stoff** wird überall gleich benannt und lässt sich zentral feinjustieren. | `pages/01-landkarte.html` — Chip „CTFL“ / Kap.-Tags in der Landkarte |
| `.tag--praxis` | **C-PRAXIS** | `--chip-praxis-bg`, `--chip-praxis-fg` | Web, Chips | **Berufs-/Praxis**-Bezug ist optisch einheitlich und klar von Syllabus-Chips getrennt. Redaktion Landkarte: **kurz**, **Ausführlich (Kürzel)** — [P04-04](P04-04-ctfl-lernwebsite-spec.md) **A.0.1b**. | `pages/01-landkarte.html` — Chips „Praxis“ |
| `.tag--advanced` | **C-ADV** | `--chip-advanced-bg`, `--chip-advanced-fg` | Web, Chips | **Vertiefung/Advanced** teilt sich eine erkennbare Farbfamilie (Normen, K3-Hinweise). | `pages/01-landkarte.html` — „Advanced“-Chips |
| `.tag--extra` (optional/Legacy) | *kein SOLL mehr auf Landkarte* | `--chip-extra-bg`, `--chip-extra-fg` | Web | Früher „Kontext“; **A.0.1c:** Lern-Chips → **C-SYLLABUS** oder **C-PRAXIS**. Klasse kann in CSS bleiben. | — |
| (inhaltlich Fallstudie; keine eigene Chip-Klasse „C-CASE“) | **C-CASE** | *wie* **C-SYLLABUS** / **C-PRAXIS** je Kontext oder später `--chip-case-*` | Web + HA | Die **GroceryMate-/HA-Kette** bleibt inhaltlich markierbar; Farblogik kann später **eigenes** Chip-Token erhalten. | `pages/04c-ha5-testfallentwurf.html` — Kasten „Dokumentenkette“; HA4–HA6 allgemein |
| `.cat-*` / Tabellen in `00b-standards.html` (Projekt-Meta) | **C-PROJEKT** | `--surface-meta` / `--text-meta` (oder Verweis auf P-Tabelle) | Web | **Repo/Tooling/Standards** wirken als **eigener** visueller Bereich, nicht wie CTFL-Lernchips. | `pages/00b-standards.html` — Kategorien-Tabelle |
| **attr:curriculum** (SOLL: noch **kein** durchgängiges Attribut im HTML) | **attr:curriculum** | `--badge-curriculum-bg`, `--badge-curriculum-fg` (geplant) | Meta | Sobald **Kurs vs. Syllabus** maschinell/visuell getrennt wird, gibt es **ein** Badge-Token statt fünf Varianten im Freitext. | Aktuell: eher **Freitext** „Masterschool …“ in Fußzeilen (z. B. `05b-ha5-testkonzept-a4.html`); **kein** einheitliches `data-*` |

---

## 2. F-* (Semantic / Funktion)

| IST | SOLL | Token | Hinweis | Was passiert? | Beispiel IST |
|-----|------|-------|---------|---------------|--------------|
| `.meta-bar` (inline auf Hauptsystem-Seiten) | **F-META** | `--chrome-meta-bg`, `--chrome-meta-border`, `--chrome-meta-text` | Web (+ teils A4) | Die **Kontextzeile** unter der Navigation (Kap., Bezug) sieht **überall** gleich aus und nutzt gemeinsame Variablen. | `pages/01b-grundlagen.html` — Zeile „Kap. 1 …“ unterhalb Nav |
| **`nav.legend` / `.legend` / `.legend__item` / `.legend__swatch`** in `base.css` | **F-LEGEND** | `--legend-gap`, `--legend-padding-*`, `--legend-margin-bottom`, `--legend-font-size`, `--legend-line-height`, `--legend-surface`, `--legend-swatch-size`, `--legend-item-gap` (+ seitenbezogene Swatch-Modifier nur bei Bedarf) | Web | **Seitenlegende** unterhalb F-META, einheitlicher **Standort** (04d B.12, keine Ausnahmen). | `pages/01-landkarte.html`, `01a-glossar.html`, `02a`/`02b`, `02c`, `04-testverfahren.html` |
| **`aside.chain-callout`** (Dokumentenkette; creme/pastell, nicht F-INFO-Blau) | **F-CHAIN** | `--callout-chain-bg`, `--callout-chain-border-outer`, `--callout-chain-border-accent`, `--callout-chain-title`, `--callout-chain-body`, `--callout-chain-*` (Padding, Radius, …) — 04d **B.13** | Web, Callout | **HA-Dokumentenkette** ist **optisch** von **F-INFO** getrennt (Papier/Traceability); Redaktion: [P05](P05-redaktion-harmonisierung.md) § **Dokumentenkette (F-CHAIN)**. | `pages/04a-ha4-anforderungsanalyse.html`, `04c-ha5-testfallentwurf.html`, `05a-ha5-testkonzept.html` |
| `.ha3p-action`; Kopf `.ha3p-sheet--answer` (**nur** `04e`) | *(Diátaxis-HA3)* | `--surface-handlung-bg`, `--surface-handlung-border-outer`, `--surface-handlung-accent`, `--surface-loesung-kopf-bg` | Web, HA | ACTION = Ocker; Kopf Lösungs-Hülle = `--ctfl-bg`. **`04c`/`05a`:** `section--e4` = Palette **`--e4`**, nicht dieses Token. | `04e-ha3-ueberdeckung.html` |
| `.term-note` (A4) | **F-TERM** | `--callout-term-border`, `--callout-term-bg` | A4, Screen | **Begriffs-Klarstellungen** (Testprotokoll vs. Bericht) sind visuell **eigen** und nicht mit normalen Infoboxen verwechselbar. | `pages/06a-ha6-testprotokoll-a4.html` — Begriffshinweise (falls vorhanden) |
| `.info-box`, `.info-box--note` (allgemeine Erklärung / Wegweiser) | **F-INFO** | `--callout-info-bg`, `--callout-info-border`, `--callout-info-title` | Web (+ inline) | **Neutrale Infokästen** (blau/grau) werden **über Seiten hinweg** gleich gestaltet. | `pages/01b-grundlagen.html` — Kästen „Was ist Testing?“ o. ä.; `pages/05a-ha5-testkonzept.html` — viele `.info-box` |
| `.info-box--ok`, `.doc-info-box--ok` | **F-SUCCESS** | `--callout-success-bg`, `--callout-success-border` | Web + A4 | **Positive Bestätigungen** (Auswahl ok, Review ok) teilen **ein** grünes Erscheinungsbild. | `pages/04d-ha5-testfallentwurf-a4.html` — GM-F03 Auswahlbegründung |
| `.warn-box`, `.doc-info-box--warn` | **F-CAUTION** | `--callout-caution-bg`, `--callout-caution-border` | Web + A4 | **Warnungen** sind sofort erkennbar und **einheitlich**, auch zwischen Web- und A4-Box. | `pages/02c-teststufen.html` — `.warn-box`; A4-Warnungen in HA-Dokumenten |
| `.aha-box` | **F-INSIGHT** | `--callout-insight-bg`, `--callout-insight-border` | Web | **Aha-/Merkpunkte** haben eine **eigene** sanfte Akzentfarbe, nicht dieselbe wie Warnung oder Info. | `pages/02c-teststufen.html` — Aha-Boxen zur Matrix |
| `.info-box--auto` | **F-AUTO** | `--callout-auto-bg`, `--callout-auto-border` | Web | **Automatisierung/Tool**-Hinweise sind über Seiten hinweg **gleich** erkennbar. | `pages/04c-ha5-testfallentwurf.html` — Feature-/Auto-Hinweise |
| `.stag-*` / Matrix-Zellen (Achsen-Semantik) | **F-AXIS** | `--matrix-axis-bg`, `--matrix-cell-defekt` (feinere Token optional) | Web | **Matrix-Achsen** (z. B. Defektlogik) sind **semantisch** eingefärbt, ohne Syllabus-Chips zu imitieren. | `pages/02c-teststufen.html` — Teststufen-Matrix, `.stag-def` etc. |
| `.doc-a4`, `.doc-mode`, Blattstruktur | **F-DOC** | *bereits* `--doc-*` in `doc-a4.css`; ggf. konsolidieren | A4 | **Formale Abgaben** bleiben im **Dokumentmodus** erkennbar; Token bündeln Rand, Fläche, Typo. | `pages/05b-ha5-testkonzept-a4.html` — gesamtes A4-Layout |
| `.cat-*`, Status-Zellen Standards | **F-STD** | `--std-ok`, `--std-warn` / Tabellenzeilen | Web | **Checklisten** „erfüllt / offen“ auf der Standards-Seite nutzen **dieselben** Statusfarben wie andere Projekt-Checks. | `pages/00b-standards.html` — Umsetzungs-Tabelle |

---

## 3. P-* (Presentation / Pattern-Familien)

| IST | SOLL | Token | Hinweis | Was passiert? | Beispiel IST |
|-----|------|-------|---------|---------------|--------------|
| `main`, `section`, `.page-chrome` | **P-SECTION** | `--section-gap`, `--page-max-width` (ergänzend zu `base.css`) | Global | **Abstände** und **Breite** der Hauptspalte werden **steuerbar**, statt nur verstreute Einzelwerte. | Fast alle `pages/*.html` — Hauptinhalt unter `.page-chrome` |
| `table`, `.ref-table`, Glossar-Tabellen | **P-TABELLE** | `--table-header-bg`, `--table-border`, `--table-stripe` | Web + A4 | **Tabellen** (Glossar, Traceability) wirken **einheitlich** lesbar. | `pages/01a-glossar.html` — Lemma-Tabellen; A4 `ref-table` in HA-Dokumenten |
| SVG in SDLC / Diagrammen | **P-SVG** | `--diagram-stroke`, `--diagram-fill` | Web | **Diagramme** teilen Linien-/Füllfarben über **Token**, nicht nur lokale SVG-Styles. | `pages/02a-sdlc-statisch.html` / `02b-sdlc-animiert.html` |
| `.entry-card*`, `.mod-card`, HA-`.card-grid` | **P-KARTEN** | `--card-bg`, `--card-border`, `--card-shadow` | `index` + Module | **Karten** (Einstieg, Module, HA-Web) haben **ein** Raster aus Fläche, Rand und Hover. | `index.html` — Einstiegskarten; `pages/01-landkarte.html` — Modul-Karten |
| `.tag-row`, `.tag`, Landkarten-Chips | **P-CHIPS** | *gemeinsam mit C-\** `--chip-*` | Web | **Chip-Zeilen** (nicht nur Farbe der Domäne) haben einheitliche **Höhe, Abstand, Radius**. | `pages/01-landkarte.html` — `tag-group` / Chips |
| `.info-box*`, `.doc-info-box*`, `.aha-box`, `.warn-box` | **P-CALLOUT**-* | *siehe F-\** `--callout-*` | Web + A4 | **Rahmen, Padding und linke Kante** aller Kasten-Typen folgen **wenigen** Callout-Basistokens + F-Variante. | Überall wo Kästen (s. F-Tabelle) |
| `.doc-a4`, `.doc-header`, `.doc-body` | **P-DOC-A4** | `doc-a4.css` → `--doc-*` (bestehend, Mapping in Session 3 verfeinern) | A4 | **A4-Seiten** bleiben **konsistent** beim Druck und auf dem Screen. | `pages/06a-ha6-testprotokoll-a4.html` |
| `.top-nav-zone`, `.main-nav`, `.skip-link` | **P-CHROME** | `--nav-bg`, `--nav-link`, `--nav-rhythm` (teilw. schon `--nav-vertical-rhythm`) | Global | **Kopf-Navigation** und Skip-Link bleiben **an einem Token-Set** hängend anpassbar. | `assets/css/base.css` + alle Seiten mit Doppel-Nav |
| `.matrix-wrap`, `.stufen-grid`, Raster in 02c | **P-GRID** | `--grid-gap`, `--matrix-min-width` | Web | **Spezialraster** (Matrix, Stufen) haben **einheitliche** Gitterabstände. | `pages/02c-teststufen.html` |
| Canvas/Animation (`02b` animiert) | **P-CANVAS** | `--anim-accent` (optional) | Web | **Animierter** SDLC-Canvas kann Farben aus **einem** Akzent-Token beziehen. | `pages/02b-sdlc-animiert.html` |

---

## 4. S-* (Diátaxis — eigener Block)

**Zielbild:** Jede **Redaktionseinheit** (Seite oder H2) kann einen **S-**-Modus tragen; **Leser** erkennen den **Modus** über ein **Label-System** (Umsetzung **nach** Priorität C/F/P). **Details** (Text, Icon, Farbe, Emoji): **noch offen** — hier nur Platzhalter.

| IST | SOLL | Token / Artefakt | Hinweis | Was passiert? | Beispiel IST |
|-----|------|------------------|---------|---------------|--------------|
| — (noch kein festes IST für Modus-Markup) | **S-TUTORIAL** | Label-System für Leser (Details folgen) | P-CHROME / Badge (geplant) | Leser sehen: **geführte** Lernschritte — wenn das Label-System live ist. | **Noch nicht** als eigener Modus ausgezeichnet; künftig z. B. Übungsseiten mit Schrittfolge |
| — | **S-HOWTO** | Label-System für Leser (Details folgen) | P-CHROME / Badge (geplant) | Leser sehen: **Aufgabe/Artefakt** — „so erledigst du es“. | HA-Web-Seiten (`04c`, `05a`, …) sind **inhaltlich** nah an How-to; **kein** separates Label im HTML **heute** |
| — | **S-REFERENCE** | Label-System für Leser (Details folgen) | P-CHROME / Badge (geplant) | Leser sehen: **Nachschlagen** (Lexikon, Tabellen). | `pages/01a-glossar.html` — **faktisch** Referenz; Modus **nicht** als Label ausgewiesen |
| — | **S-EXPLAIN** | Label-System für Leser (Details folgen) | P-CHROME / Badge (geplant) | Leser sehen: **Verstehen** von Konzepten. | `pages/01b-grundlagen.html`, `pages/04-testverfahren.html` — erklärende Fließtexte **ohne** Modus-Badge |

---

## 5. Kurzüberblick Token-Schätzung

| Gruppe | ca. Anzahl **benannter** Variablen (Zielgröße) |
|--------|-----------------------------------------------|
| Chips / C-* | 8–12 (inkl. Wiederverwendung) |
| Callouts / F-* | 10–18 (mehrere F-Typen teilen eine Basis) |
| Layout / P-* (ohne Duplikat zu oben) | 8–15 |
| S-* | **keine** festen CSS-Token in dieser Phase — **Label-System** separat |

**Gesamt:** die **Summe** der Gruppen **überlappt** (gleiche Variable für Chip + P-CHIPS); realistisch **gesamt** weiterhin **ca. 15–30** **neue oder konsolidierte** Namen im `:root`, nicht 30+ unabhängige Stacks.

---

## 6. Nächste Schritte

1. **Freigabe** Token-Namen / Priorität P0 in `base.css` + `doc-a4.css`.  
2. **Pilot:** eine Callout-Familie + Chip-Skala auf Variablen umstellen.  
3. **S-*:** Workshop-Entscheidung **Label-System** (ohne Festlegung Emoji/Icon) → dann HTML/CSS.

**Welche HTML-Seiten zuerst?** — Nicht jede Seite gleichzeitig: der **Rollout** (zuerst Lerninhalte + Startseite + Standards, später Hausaufgaben/A4) steht in [P04-00-spec-overview.md](P04-00-spec-overview.md) unter **Rollout-Plan — Scope** (Phase A / Phase B). Technische **Prio** (**P0**/**P1**) und diese **Seiten-Reihenfolge** ergänzen sich.

---

## 7. Design-Spec-Cluster (04) und CTFL-Domain

**Einstieg:** [P04-00-spec-overview.md](P04-00-spec-overview.md) — Navigation zu **04a** (C-*), **04b** (F-*), **04c** (P-*), **04d** (Domain CTFL Lernwebsite); **Risiko-Register** und Vereinfachungs-Optionen oben in der Overview.

**CTFL-Orientierung (Regeln + Syllabus-Chip-Spec, zusammengeführt):** [P04-04-ctfl-lernwebsite-spec.md](P04-04-ctfl-lernwebsite-spec.md) — Referenzseite **01c-testmittel.html**; Teil B Spec ggf. noch Platzhalter bis Pilot-Detail.

---

*Ende Session 3 Mapping-Dokument — Stand 2026-04-01; Abschnitt 7 aktualisiert 2026-04-02 (Cluster 04); Hinweise vor §1 ergänzt (**A.0** / **A.0.0**); §1 `.tag--*` **base.css** 2026-04-03.*
