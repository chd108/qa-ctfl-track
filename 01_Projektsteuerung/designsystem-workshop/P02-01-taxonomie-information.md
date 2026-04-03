Datei erstellt: 2026-03-30  
Letzte Aktualisierung: 2026-04-03 — Landkarte: **drei** Chip-Kategorien (Syllabus, Praxis, Vertiefung); `.tag--extra` nur Legacy; normativ [P04-04-ctfl-lernwebsite-spec.md](P04-04-ctfl-lernwebsite-spec.md) **A.0.1c**  
Zweck: Informations-Taxonomie (T-/O-/D-/M-/X-Typen) — Designsystem-Workshop Session 2.  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Konzept  
Normative Orientierung: Vorgänger [P01-vision-ziele.md](P01-vision-ziele.md); Grundlage für Session 3

---

# Session 2: Informations-Taxonomie

**Workshop:** Designsystem — Session 2 von 4  
**Vorgänger:** [P01-vision-ziele.md](P01-vision-ziele.md)

---

## 0. Methodik & Quellen-Feedback (vor Start)

| Frage | Einschätzung |
|-------|----------------|
| **Sind die Quellen ausreichend?** | **Größtenteils ja.** Landkarte und `02c` liefern **explizite** Farb-/Tag-Kategorien; die Komponenten-Analyse bündelt **UI-Muster** (Boxen, A4); die Website-Analyse liefert **Empfehlungen** (Callouts, TL;DR, Farbsemantik) — gut als **Soll-Hinweis**, nicht als IST-Taxonomie. |
| **Wie vorgehen?** | (1) Roh-Typen aus Markup/CSS sammeln → (2) **fachlich** clustern → (3) mit **Lernzielen** (Charter / Session 1) abgleichen → (4) **Soll-Menge** definieren (weniger Klassen-Namen, mehr **Bedeutungstypen**). |
| **Was fehlt?** | **Eine** bereits beschlossene „offizielle“ Taxonomie im Repo gibt es **nicht** — diese Datei ist der **erste** konsolidierte Vorschlag. Einzelne Seiten nutzen **parallele** Benennungen (`tag--ctfl` vs. `tag-ctfl`). |

**Ausgewertete Quellen:** `01-landkarte.html` (Legende + Tags), `02c-teststufen.html` (`.tag-*`, `.stag-*`, `.aha-box`/`.warn-box`), [IST-02-analyse-komponenten.md](IST-02-analyse-komponenten.md), [IST-01-analyse-website-meta.md](IST-01-analyse-website-meta.md), ergänzend Session 1 (Vision/Lernziele).

---

## 1. Gefundene Informations-Typen (IST — Rohinventar)

### 1.1 Landkarte — inhaltliche Einordnung (Themen-Tags)

| Technisch (CSS) | In der Legende benannt | Kurzbeschreibung (Seite) |
|-------------------|-------------------------|---------------------------|
| `.tag--ctfl` | **Syllabus / Lehrplan (CTFL v4.0.2)** | Offizieller Lehrplan-Inhalt |
| `.tag--praxis` | **Praxis / Berufsbezug** | Nicht als CTFL-Prüfungsfokus gemeint, beruflich relevant |
| `.tag--advanced` | **Vertiefung** | ISTQB Advanced/Specialist oder Normen (z. B. ISO) |
| `.tag--extra` | *(Legacy; nicht mehr in Landkarte-Legende)* | Inhalte → Syllabus oder Praxis zuordnen ([P04-04](P04-04-ctfl-lernwebsite-spec.md) **A.0.1c**) |
| Zusatzmarker | **MS / MS?** | Masterschool-Curriculum gesichert vs. erschlossen — **orthogonal** zu Chip-Farben |

*Hinweis Landkarte:* Drei Farben: Syllabus, Praxis, Vertiefung. **Reihenfolge** in einer `.tags`-Zeile: **Syllabus → Praxis → Vertiefung** (`01-landkarte.html`).

### 1.2 Teststufen-Seite (`02c`) — zwei Ebenen

**Ebene A — Syllabus-Nähe (Legende oben, analog Landkarte):**  
`.tag-ctfl`, `.tag-praxis`, `.tag-advanced` (gleiche **Semantik** wie Landkarte, **anderer** Klassen-Präfix `tag-` statt `tag--`). `.tag-extra` nur falls noch Legacy.

**Ebene B — Matrix-Zellen (Stufen-Karten):** semantische Mini-Tags **ohne** die vier Syllabus-Farben:

| CSS | Funktion im Raster (Beispiele) |
|-----|--------------------------------|
| `.stag-obj` | Testobjekt / Gegenstand (Komponenten, APIs, …) |
| `.stag-basis` | Testbasis / Artefakt |
| `.stag-def` | typische Fehler / Defektfokus |
| `.stag-resp` | Verantwortliche Rollen |
| `.stag-strat` | Strategie / Vorgehen / Umgebung |

**Ebene C — Hinweis-Kästen:** `.aha-box` (eher Einblick), `.warn-box` (eher Vorsicht) — Kommentar im CSS: *optisch an .info-box angeglichen*.

### 1.3 Info-Boxen & verwandte UI (Komponenten-Analyse)

| Muster | Varianten / Modifier | Typische inhaltliche Rolle |
|--------|----------------------|----------------------------|
| **Web-Info-Box** | `.info-box`, `--note`, `--ok`, `--auto` | Didaktik „Was ist …?“, **Dokumentenkette**, Automatisierungs-Hinweis, grüner **OK**-Hinweis |
| **A4-Doc-Info** | `.doc-info-box`, `--ok`, `--warn` | grauer Kasten im Drucklayout; **OK** für z. B. GM-F03-Auswahl; **warn** für Warnfall |
| **Term-Note** | `.term-note` | Begrifflichkeit nur Bildschirm (A4-Seiten) |
| **Einstieg** | `.entry-info-box` | Orientierung Lernmaterial / Standards / Hausaufgaben |
| **Meta-Zeile** | `.meta-bar` | Seitenkontext, Kap., Modus Screen/Druck |

### 1.4 Standards-Seite (`00b`) — Projekt-Meta

| Muster | Rolle |
|--------|--------|
| `.cat-web`, `.cat-css`, `.cat-js`, `.cat-acc`, `.cat-doc`, … | **Kategorie** des Standards (Web, CSS, …) |
| Legende **ok / warn / no / n.a.** | Umsetzungsstatus |

### 1.5 Website-Analyse — empfohlene *zusätzliche* Typen (noch nicht umgesetzt)

Aus [IST-01-analyse-website-meta.md](IST-01-analyse-website-meta.md): u. a. **TL;DR / Key Takeaways**, **Callouts** für Praxis vs. Theorie, Icons für **Praxistipp / CTFL-Pflicht / häufige Fehler**, klarere Trennung **Kern vs. Randnotiz**.

---

## 2. Cluster: Kategorien (übergreifend)

Die folgenden **Cluster** mischen *inhaltliche* und *darstellungsbezogene* Typen — bewusst, weil das Designsystem beides verbinden soll.

### Cluster A — **Lern-Typen** (Was ist es fachlich im CTFL-Ökosystem?)

| Cluster-Name | Enthält (IST) | Anmerkung |
|--------------|---------------|-----------|
| **A1 Pflicht / Prüfungskern** | `tag--ctfl`, `tag-ctfl` | Foundation-Syllabus |
| **A2 Praxis / Berufsfeld** | `tag--praxis`, `tag-praxis` | Nicht Prüfungskern, aber jobrelevant |
| **A3 Vertiefung / Advanced** | `tag--advanced`, `tag-advanced` | Normen, ISTQB Advanced, „darüber hinaus“ |
| **A4** | *entfällt als Chip-Farbe* | Früher „Kontext/Extra“ → Zuordnung A1 oder A2 ([P04-04](P04-04-ctfl-lernwebsite-spec.md) **A.0.1c**) |
| **A5 Kurs-Ort** | MS, MS? | **Meta zum Curriculum**, kein Lerninhalt |

### Cluster B — **Orientierung & Rahmen** (Wo stehe ich? Wohin verweist die Seite?)

| Cluster-Name | Enthält (IST) |
|--------------|---------------|
| **B1 Navigation / Kontext** | `.meta-bar` (Kap., Funktion, Modus) |
| **B2 Dokumenten-Story** | „Dokumentenkette“ in `info-box--note`, Querverweise HA4→HA5→HA6 |
| **B3 Begriffsklärung** | `.term-note` (A4), Glossar-Seite |
| **B4 Einordnung Einstieg** | `.entry-info-box` auf `index.html` |

### Cluster C — **Didaktische Hervorhebung** (Wie wird es vermittelt?)

| Cluster-Name | Enthält (IST) |
|--------------|---------------|
| **C1 Erklär-Block** | `.info-box` (neutral/gelb), „Was ist …?“ auf HA5-Web |
| **C2 Verknüpfung / Kette** | `.info-box--note` (blau) |
| **C3 Erfolg / Bestätigung** | `.info-box--ok`, `.doc-info-box--ok` |
| **C4 Automatisierung / Verweis** | `.info-box--auto` |
| **C5 Vorsicht / Abweichung** | `.doc-info-box--warn`, `.warn-box` (`02c`) |
| **C6 Einsicht / Merkpunkt** | `.aha-box` (`02c`) |

### Cluster D — **Fach-Matrix** (nur `02c`, Stufen-Tabelle)

| Cluster-Name | Enthält |
|--------------|---------|
| **D1 Raster-Dimensionen** | `.stag-obj`, `.stag-basis`, `.stag-def`, `.stag-resp`, `.stag-strat` — **keine** CTFL/Praxis-Farblogik, sondern **Spalten-Semantik** |

### Cluster E — **Dokument & Abgabe** (A4 / Portfolio)

| Cluster-Name | Enthält |
|--------------|---------|
| **E1 Formular- und Report-Layout** | `doc-a4`, `form-meta`, `form-field`, `ref-table`, … |
| **E2 Narrative Info im Dokument** | `doc-info-box*` |

### Cluster F — **Meta / Projekt / Technik** (nicht CTFL-Kapitel)

| Cluster-Name | Enthält |
|--------------|---------|
| **F1 Standards-Tracking** | `00b` — `.cat-*`, Status-Spalten |
| **F2 Quelle / Version** | Landkarte: „ISTQB CTFL Lehrplan v4.0.2 (GTB 2025)“ |

---

## 3. Typ-Definitionen (konsolidiert)

Die Tabelle fasst **wiederkehrende Bedeutungen** zusammen — unabhängig davon, ob sie aktuell schon **einheitlich** benannt sind.

| Typ-ID | Name (Vorschlag) | Zweck | Wann einsetzen? | Beispiel (Website) |
|--------|-------------------|--------|-------------------|---------------------|
| **T-PFLICHT** | CTFL-Pflichtstoff | Lernziel Prüfung: Kernlehrplan | Themen, die im Syllabus **explizit** gefordert sind | Landkarte: Tag „7 Grundprinzipien“ mit `.tag--ctfl` |
| **T-PRAXIS** | Praxisbezug | Berufliche Begriffe, Tools, Rollen **ohne** CTFL-Pflichtcharakter | Abgrenzung: „im Job“, nicht „in der Klausur“ | „QA Engineer · SDET“ (`.tag--praxis`) |
| **T-VERTIEF** | Vertiefung / Advanced | Über Foundation hinaus: Norm, Spezialthema | Optional, Portfolio-Nuance | „KI-gestütztes Testen“ (`.tag--advanced`) |
| **T-EXTRA** | *deprecated als Chip-Typ* | Inhalte über **T-PFLICHT** / **T-PRAXIS** abbilden | — | Siehe **A.0.1c** |
| **T-KURS** | Curriculum-Marker | Transparenz **Kurs vs. Syllabus** | Nur wo MS/MS? Sinn macht | MS-Badge an Landkarten-Tags |
| **O-META** | Seiten-Kontext | Orientierung: wo bin ich, welches Kap.? | Oben unterhalb Nav | `.meta-bar` „Kap. 4 · Testentwurf“ |
| **O-KETTE** | Dokumenten-/Story-Kette | Verständnis der **HA-Reihe** und Artefakte | HA-Webseiten, Verweise A4↔Web | „Dokumentenkette — HA4 → HA5“ (`info-box--note`) |
| **O-BEGRIFF** | Begriffsklärung | CTFL- vs. IEEE-Begriff, Screen-only vor Druck | A4 mit `term-note` | Testprotokoll vs. Testbericht (`06a`) |
| **D-ERKLAER** | Didaktik-Grundblock | „Was ist X?“ neutral einführen | Lange Erklärseiten, HA5 | `info-box` „Was ist eine Teststrategie?“ |
| **D-HINWEIS** | Hinweis / Verknüpfung | Querverweis, Lesepfad, nicht zwingend „Warnung“ | Blaue Note-Box | `info-box--note` |
| **D-OK** | Bestätigung / Soll-Hinweis | Positiver Abgleich, Auswahl begründet | GM-F03 grün | `doc-info-box--ok`, `info-box--ok` |
| **D-AUTO** | Automatisierung | Hinweis „automatisierbar“, Tool-Bezug | HA5 Testfall-Features | `info-box--auto` |
| **D-WARN** | Warnung / Risiko | Abweichung, Vorsicht, Review | `warn-box`, `doc-info-box--warn` | Warnbox in `02c` |
| **D-AHA** | Merkpunkt / Einsicht | Kompakter Erkenntnis-Hinweis | Zwischen Abschnitten | `aha-box` in `02c` |
| **M-MATRIX** | Matrix-Dimension | **Nur** für tabellarische Achsen (Objekt, Basis, Defekt, …) | Teststufen-Matrix | `.stag-def` „Falsche Logik“ |
| **X-DOK** | Formales Dokument | Abgabe, Druck, Portfolio | A4-Seiten | `doc-a4`, Formularfelder |
| **X-STD** | Projekt-Standard | Tooling, Web, Norm **als Projekt-Checkliste** | `00b-standards.html` | `.cat-css`, Umsetzung ✓ |

---

## 4. Soll-Vorschlag: Welche Typen **sollten** wir haben?

**Ableitung aus Vision / Lernzielen** ([01_Project_Charter.md](../01_Project_Charter.md), Session 1):

1. **Prüfungsvorbereitung** → Mindestens klar trennen: **Pflicht (T-PFLICHT)** vs. **Nicht-Pflicht** (T-PRAXIS, T-VERTIEF).  
2. **Portfolio & Normen** → eigener Modus **X-DOK** + **O-KETTE** (Traceability), dazu **O-BEGRIFF** wo Begriffe kollidieren.  
3. **Berufsnähe** → T-PRAXIS und D-AUTO explizit behalten.  
4. **Transparenz Kurs** → T-KURS (MS) optional, aber **einheitlich** benennen.  
5. **Lesbarkeit** (Website-Analyse) → ergänzend **zwei** optionale Typen in einer späteren Ausbaustufe: **D-TLDR** (Kernaussage oben) und **D-RAND** (Randnotiz / „nice to know“) — aktuell **nicht** als CSS vorhanden, aber fürs Designsystem **vormerken**.

**Empfehlung zur Reduktion für das Designsystem „light“:**

| Priorität | Typen bündeln auf … |
|-----------|---------------------|
| **P0** | T-PFLICHT, T-PRAXIS, T-VERTIEF **eine** Farb-/Token-Skala (wie Landkarte; drei Legendenzeilen) |
| **P0** | D-HINWEIS, D-OK, D-WARN, D-ERKLAER **eine** Callout-Familie (Web + A4 visuell spiegeln) |
| **P1** | O-META, O-KETTE, O-BEGRIFF als **strukturelle** Muster (nicht zwingend neue Farben) |
| **P2** | M-MATRIX nur auf Seiten mit Fach-Matrix — **nicht** mit Syllabus-Tags vermischen |
| **P2** | D-AHA vs. D-WARN vs. D-ERKLAER **schreibregeln** (wann welche Box) |

**Benennung im CSS (langfristig):** Von `info-box--note` zu **semantischen** Namen in Tokens (z. B. `callout--link`, `callout--success`) **oder** Mapping-Tabelle „CSS-Klasse → Typ-ID“ in der Komponenten-Doku.

---

## 5. Bekannte Inkonsistenzen (für Session 3/4)

1. **Doppelte Tag-Syntax:** `tag--ctfl` (Landkarte) vs. `tag-ctfl` (`02c`) — gleiche Bedeutung, **unterschiedliche** Klassen.  
2. **„Warnung“:** mal `.warn-box`, mal `doc-info-box--warn`, mal neutraler gelber `info-box` — **keine** einheitliche Regel im Repo-Dokument.  
3. **Matrix-Tags** (`.stag-*`) sind **orthogonal** zu CTFL/Praxis — im Designsystem **nicht** dieselbe Farbpalette erzwingen.  
4. **Website-Analyse** empfiehlt Icons (💡📚⚠️) — politisch/Barrierefreiheit: eher **SVG/aria** als Emoji in Produktion.

---

## 6. Nächste Schritte (Workshop)

- **Session 3:** Mapping **Typ-ID → Komponente / CSS-Token** (welche Farbe, welcher Rand).  
- **Session 4:** Regeln **„wann welcher Typ“** für neue Seiten + Review-Checkliste.

---

*Ende Session 2 — Informations-Taxonomie (Stand 2026-04-03).*
