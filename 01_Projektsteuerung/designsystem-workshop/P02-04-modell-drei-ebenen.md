Datei erstellt: 2026-03-30  
Letzte Aktualisierung: 2026-04-02 — Metablock Variante B ergänzt; inhaltlicher Stand 2026-04-01  
Zweck: Drei-Ebenen-Modell (Content → Semantic → Presentation) — Grundlage für Token- und Komponentenlogik.  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Konzept  
Normative Orientierung: Brücke zwischen Session 2 und Session 3

---

# Session 2d: Drei-Ebenen-Modell (Content → Semantic → Presentation)

**Workshop:** Designsystem — Fundamentales Verständnis (Ergänzung zu Session 2)  
**Vorgänger:** [P02-01-taxonomie-information.md](P02-01-taxonomie-information.md), [P02-02-darstellung-patterns.md](P02-02-darstellung-patterns.md), [P02-03-seitenmatrix-ist.md](P02-03-seitenmatrix-ist.md), [P01-vision-ziele.md](P01-vision-ziele.md)

---

## 0. Executive Summary

Die QA-Lernwebsite wirkt auf den ersten Blick wie ein **Mosaik aus lokalen CSS-Klassen und Farben**. Die zentrale Erkenntnis von Session 2d ist: Dahinter liegt **kein willkürliches Chaos**, sondern (oft unbewusst) ein **Drei-Ebenen-Modell**:

| Ebene | Kurzfrage | Rolle im Designsystem |
|-------|-----------|------------------------|
| **1 — Content (Domäne)** | *Was ist der Gegenstand des Wissens?* | Einordnung in **Syllabus, Praxis, Norm, Projekt-Meta** — **ohne** schon zu sagen, *wie* es dargestellt wird. |
| **2 — Semantic (Didaktik & Funktion)** | *Welche **Lern- oder Dokumentfunktion** hat dieses Stück Information?* | **Callouts**, Orientierung, Story, Warnung, Matrix-Achsen — das, was in Session 2 als T-/O-/D-/M-/X-Typen begonnen wurde. |
| **3 — Presentation (Darstellung)** | *In welcher **Form** erscheint es?* | Tabellen, SVG, Canvas, Chips, Boxen, A4-Drucklayout — Session 2.5 (Patterns). |

**Warum das wichtig ist:** Session 3 (Tokens, Komponenten) betrifft **primär Ebene 3**. Viele Konflikte in Session 2 (z. B. „ist `tag--ctfl` ein Inhaltstyp oder eine Farbe?“) entstehen, wenn **Ebenen vermischt** werden. Dieses Dokument macht die Trennung **explizit** und prüft die **17 Typ-IDs** dagegen.

---

## 1. Theoretische Fundierung

### 1.0 Begriffe: IA, Content Taxonomy, Problem / Lösung

**Einordnung:** Mit **Information Architecture (IA)** ist die **strukturelle** Gestaltung geteilter Informationsumgebungen gemeint. **Content Taxonomies** (inhaltliche Taxonomien) liefern dafür häufig ein **kontrolliertes Vokabular** zur **Klassifikation** und zum **Wiederfinden** von Inhalten — ein **professioneller Standard** in IA und UX, nicht eine Projekt-Erfindung.

**Im QA-Track:** Systematische Benennung von **Content-Typen** (Domäne), **Funktionen** (didaktisch / Dokument) und **Darstellungsformen** — in diesem Workshop ausgedrückt als **drei Ebenen** (siehe §0) und in Session 2f als **SOLL-Codes** (**C-** / **F-** / **S-** / **P-**).

**Problem → Lösung:** Viele **CSS-Klassen** wachsen historisch; **gleiche oder ähnliche Absicht** kann unter **verschiedenen Namen** stehen (z. B. mehrere Boxen für einen **Story-/Dokumenten-Verweis**). Ohne gemeinsame **Semantik** bleibt die Pflege **fragil**. **Lösung:** **Eine** fachliche Sprache — z. B. „Dokumenten-/Story-Verweis“ = **F-CHAIN** ([02f](P02-06-taxonomie-soll.md) §3.2) — und darauf abgestimmte **Design-Tokens** (Session 3), statt nur isolierte Klassennamen.

**Software / Frontend:** Die Trennung **Content / Semantic / Presentation** entspricht **separation of concerns**: derselbe **SOLL-Baustein** soll **über Kontexte** (Web, A4, Druck) **gleiche Bedeutung** tragen können bei **angepasster** Darstellung — sofern **Bedeutung** und **Form** nicht vermischt werden (siehe §1.1 ff.).

**Kurzreferenzen (extern, ergänzend zu §1.1):**

| Thema | Hinweis |
|-------|---------|
| IA, Auffindbarkeit | [Nielsen Norman Group — Information Architecture](https://www.nngroup.com/articles/information-architecture-3/) |
| Taxonomien, Tagging | [Nielsen Norman Group — Tagging & Taxonomies](https://www.nngroup.com/articles/tagging-taxonomy/) |

*Hinweis:* Die **drei Ebenen** und die Workshop-Dokumente (**02d**–**02f**) bleiben die **maßgebliche** Projektfassung; die Links dienen der **Einordnung** in die **Breite** der Branche.

### 1.1 Einordnung: Ja, dieses Grundmuster ist Standard

Aus dem Training und der einschlägigen Literatur ist die **Trennung von Belangen** (separation of concerns) ein Leitprinzip: *Inhaltliche Bedeutung* soll nicht von *Darstellung* abhängen — damit dieselbe Information z. B. für Screen, Druck und Hilfstechnologien **anders gerendert** werden kann, ohne die Bedeutung zu verlieren.

**Content vs. Presentation** wird in der Web-Community seit Jahrzehnten diskutiert; ein pragmatischer Abriss betont: Bedeutung soll nicht **nur** über Layout oder Farbe vermittelt werden müssen (z. B. für Barrierefreiheit und maschinelle Verarbeitung). Siehe die Diskussion zu **„separating content and presentation“** (z. B. [Story Needle — Separating content and presentation](https://storyneedle.com/separating-content-and-presentation-moving-past-fud/)).

**Information Architecture / Content Architecture** beschreibt mehrere Schichten von der Strategie bis zur Oberfläche. Larry Swanson fasst verwandte Praxisfelder zusammen: u. a. **Content Strategy**, **Content Modeling**, **Information Architecture** (Struktur *unabhängig* vom Rendering), **Content Design**, **UX Writing** ([Content Architecture — Überblick](https://www.larryswanson.com/content-architecture/)). Das entspricht gedanklich unserer **Feinaufteilung** in Domäne → Funktion → Darstellung — auch wenn die **Namen** in der Branche je nach Autor variieren.

**Hinweis „Semantic Layer“:** In **Analytics / Data Warehousing** (z. B. Databricks) bezeichnet „Semantic Layer“ eine **geschäftssemantische** Schicht zwischen Rohdaten und Auswertung — **nicht** identisch mit „didaktischer Funktion“ auf einer Lernwebsite, aber **analog**: eine Zwischenschicht, die **Bedeutung** konsolidiert, bevor etwas „nach außen“ geht.

### 1.2 Wie wir es benennen (Vorschlag)

| Unsere Ebene | Nah verwandte Fachbegriffe |
|--------------|----------------------------|
| **Ebene 1 — Content / Domäne** | *Content domain*, *Themenfeld*, *Content model* (Objekte/Beziehungen), *curriculum alignment* |
| **Ebene 2 — Semantic / Funktion** | *Intent*, *rhetorical purpose* (technische Kommunikation), *instructional function* (E-Learning), *document function* (Normen/IEEE) |
| **Ebene 3 — Presentation** | *Presentation layer*, *layout*, *visual pattern*, *WAI* — Darstellung getrennt von Semantik |

**Semantic Web** (RDF/Ontologie) ist ein **formales** Semantik-Modell; unsere „Ebene 2“ ist **didaktisch-pragmatischer** — gleiche Idee („Bedeutung vor Haut“), **kein** Anspruch auf OWL-Ontologie.

### 1.3 Alternative / ergänzende Modelle (kurz)

| Modell | Nutzen für uns |
|--------|----------------|
| **Garrett: Strategy → Scope → Structure → Skeleton → Surface** | Erinnert daran, dass **Struktur (IA)** vor **oberflächlichem Layout** kommt — passt zu E1/E2 vor E3. |
| **[Diátaxis](https://diataxis.fr/)** — vier Dokumentationsformen (Tutorial, How-to, Reference, Explanation) | Hilft bei **Lücken**: Wo liegen unsere Seiten? Viele CTFL-Seiten sind **Explanation/Reference**; HA-Artefakte sind **How-to/Report**-nah. |
| **Bloom / SOLO** (Lernzieltaxonomien) | Ebene 2 könnte man später verfeinern („erinnern vs. analysieren“) — aktuell **nicht** im Repo modelliert. |

**Kritische Einschränkung:** Reines **„Content ist formatfrei“** ist bei **Lernmaterial mit starker Visualisierung** (Landkarte-Chips, Matrix) nur bedingt erreichbar: *Manche* Inhalte sind **von Haus aus** als Chip oder Tabelle gedacht. Das Ziel ist nicht dogmatische Entkopplung, sondern **klare Zuordnung**, *was* Domäne, *was* didaktische Absicht und *was* Layout ist.

### 1.4 Passt das zur QA-Lernwebsite?

**Ja — mit einer Präzisierung:** Das Projekt hat bereits **zwei Darstellungsmodi** (Hauptsystem vs. **A4/Dokument**, vgl. [P01-vision-ziele.md](P01-vision-ziele.md), Charter). Das ist **Ebene 3** auf Meta-Ebene (Kanal „Web“ vs. „Druck-PDF“). **Ebene 1** ist bei euch zusätzlich **gespalten**: CTFL-Syllabus · QA/Praxis · Portfolio-/Normenkontext · **Projekt-Meta** (`00b`).

**Schwäche der naiven Dreiteilung:** **Traceability** (HA4→HA6) ist gleichzeitig **Story** (E2) und **fachlicher Gegenstand** (E1 — Fallstudie). Solche **Querschnittsthemen** sind nicht „falsch“, aber sie zeigen: Manchmal braucht es **explizite Regeln**, welche Ebene **führt**.

---

## 2. Die drei Ebenen (konkret für die QA-Website)

### Ebene 1 — Content Layer (Thematische Domäne)

**Frage:** *Wovon handelt der Inhalt — unabhängig davon, ob er als Warnbox oder Tabelle erscheint?*

| Kategorie (Vorschlag) | Beispiele auf den 23 Seiten | Anmerkung |
|----------------------|-----------------------------|-----------|
| **Syllabus / CTFL** | Kapitel 1–6, Lernziele, Prüfungskern | Landkarten-Tags `tag--ctfl` / `tag-ctfl` |
| **Praxis / Berufsfeld** | Rollen, Tools, nicht-klausurrelevante Begriffe | `tag--praxis` |
| **Vertiefung / Norm** | ISO-Nuance, KI-Test, „Advanced“ | `tag--advanced` |
| **Kontext / Extra** | Spiralmodell, Smoke — didaktische Ergänzung | `tag--extra` |
| **Fallstudie / Artefaktlinie** | GroceryMate, HA4–HA6 | Inhaltlich E1, funktional stark mit O-KETTE verknüpft |
| **Projekt- & Web-Standards** | `00b-standards.html` | **X-STD** — technische Meta-Domäne, kein CTFL-Kapitel |
| **Kurs-/Curriculum-Meta** | MS / MS? | **T-KURS** — *kein* fachlicher Sachverhalt, sondern **Provenienz** |

**Überschneidungen:** „Praxis“ (Beruf) und „Tool-Wissen“ (Kap. 6) können **sowohl** E1 **als auch** später in D-AUTO (E2) landen — **gleiches Stichwort**, verschiedene **Schicht**.

**Optional fein:** **„Normative Referenz“** (ISO/IEC, IEEE) als *Facet* unter E1 — aktuell eher in T-VERTIEF / Glossar / Fußnoten verstreut, **kein** eigener Typ-ID-Pflichtkandidat, solange kein Bedarf.

### Ebene 2 — Semantic Layer (Didaktische & Dokumentfunktion)

**Frage:** *Wozu dient dieses Informationselement für die Lernenden — Orientierung, Warnung, Erklärung, Story, Matrix-Achse, Dokumentmodus?*

Typische **Funktionen** (nicht zwingend 1:1 mit euren IDs):

| Funktion | Session-2-IDs (Anker) | Standard in E-Learning (Stichwort) |
|----------|------------------------|-------------------------------------|
| Orientierung / „Wo bin ich?“ | **O-META** | Course orientation, „You are here“ |
| Story / Pfad / Traceability | **O-KETTE** | Learning path, scaffolding |
| Begriffsklärung / Konflikt lösen | **O-BEGRIFF** | Glossary, disambiguation |
| Neutral einführen | **D-ERKLAER** | Explanation (Diátaxis) |
| Verknüpfen / Lesepfad | **D-HINWEIS** | Signposting |
| Erfolg / Bestätigung | **D-OK** | Positive feedback |
| Risiko / Vorsicht | **D-WARN** | Alert, misconception |
| Merkpunkt / Einsicht | **D-AHA** | Highlight, „key insight“ |
| Automatisierung / Toolbezug | **D-AUTO** | Practical note |
| Matrix-Achsen (nicht Syllabus-Farbe) | **M-MATRIX** | Structural role in grids |
| Formales Dokument / Abgabe | **X-DOK** | Assignment artefact |
| Projekt-Checkliste | **X-STD** | Engineering standards |

**Was „E-Learning-Standard“ zusätzlich kennt** und bei euch **noch schwach als Typ** existiert:

- **Übung / Aufgabe** (Assessment, frei textlich in HA, aber **kein** eigener Typ-ID)  
- **Reflexion / Selbstcheck** (nicht modelliert)  
- **Zusammenfassung / TL;DR** (in [IST-01-analyse-website-meta.md](IST-01-analyse-website-meta.md) gewünscht — **D-TLDR** nur als Soll-Idee in Session 2)

### Ebene 3 — Presentation Layer (Darstellung)

**Frage:** *Welches **Pattern** wird verwendet?*

Verweis auf **[P02-02-darstellung-patterns.md](P02-02-darstellung-patterns.md)** — Tabellen, SVG, Canvas, Karten-Grids, Chip-Leisten, Section-Container, A4-Layout (`doc-a4`), Typografie.

**Wichtig:** Dieselbe **Ebene-2-Funktion** (z. B. D-WARN) kann als `warn-box`, als Randfarbe in einer Tabelle oder (schlecht) nur als **fetter Text** erscheinen — **Ebene 3 ist austauschbar**, Ebene 2 sollte **stabil** bleiben.

---

## 3. Analyse der 17 Typen (Verteilung auf Ebenen)

**Legende:** ✓ = trifft klar zu · (~) = anteilig oder gebunden an Darstellung · — = nein

Die Spalte **„Vermischung“** beschreibt das **eigentliche Problem**: Wo IDs **mehrere Ebenen** zugleich adressieren oder historisch mit **CSS-Farbe** verklebt sind.

| Typ-ID | Ebene 1 (Content) | Ebene 2 (Semantic) | Ebene 3 (Presentation) | Kurzbegründung & Vermischung |
|--------|--------------------|----------------------|-------------------------|-------------------------------|
| **T-PFLICHT** | ✓ | ✓ (~) | (~) | Domänenlabel „Syllabus-Kern“ **+** Lernpriorität „muss ich für CTFL“ — **+** Chip-Farbe ist **E3**. |
| **T-PRAXIS** | ✓ | ✓ (~) | (~) | Wie T-PFLICHT: Domäne „Job“ + Priorität „nicht Klausur“ + **Chip** (E3). |
| **T-VERTIEF** | ✓ | ✓ (~) | (~) | Domäne „darüber hinaus“ + didaktisch „optional vertiefen“ + Chip. |
| **T-EXTRA** | ✓ | ✓ (~) | (~) | Grenze zu T-VERTIEF **fließend** — Risiko **Catchall** (siehe §4). |
| **T-KURS** | ✓ (~) | — | (~) | **Provenienz-Meta** (MS) — **nicht** Wissensinhalt; Marker kann **E3** (Badge) sein. |
| **O-META** | — | ✓ | ✓ (~) | Rein **Navigation/Kontext** (E2); Umsetzung `.meta-bar` (E3). Trennung i. d. R. klar. |
| **O-KETTE** | (~) | ✓ | ✓ (~) | **Story** GroceryMate ist E1-nah, *Funktion* „Dokumentenpfad“ ist E2; blaue Box (E3). |
| **O-BEGRIFF** | — | ✓ | ✓ (~) | Begriffsklärung (E2); `term-note` + Typo (E3). |
| **D-ERKLAER** | — | ✓ | ✓ (~) | „Was ist X?“ (E2); Box/Section (E3). |
| **D-HINWEIS** | — | ✓ | ✓ (~) | Lesepfad/Link (E2); `info-box--note` (E3). **Grenze zu D-ERKLAER** oft inhaltlich dünn (§4). |
| **D-OK** | — | ✓ | ✓ (~) | Bestätigung (E2); grüner Callout / `doc-info-box--ok` (E3). |
| **D-AUTO** | (~) | ✓ | ✓ (~) | Tool/Automatisierung — **E1** „Werkzeug“ kann kollidieren mit **E2** „Hinweis auf Automatisierbarkeit“. |
| **D-WARN** | — | ✓ | ✓ (~) | Risiko (E2); `warn-box` / doc-warn (E3). |
| **D-AHA** | — | ✓ | ✓ (~) | Einsicht (E2); `aha-box` (E3). |
| **M-MATRIX** | — | ✓ | ✓ | Semantik der **Matrix-Achse** (E2); **ohne** sinnvolle **Tabelle/Grid** kaum darstellbar → **stark E3-gekoppelt**. |
| **X-DOK** | ✓ (~) | ✓ | ✓ | **Artefakttyp** Portfolio (E1-nah) + **Modus** „formales Dokument“ (E2) + **A4-Layout** (E3) — **bewusst** drei Schichten. |
| **X-STD** | ✓ | (~) | ✓ (~) | Domäne „Projektstandards“ (E1); Tabellen/Status (E3); **geringe** E2 außer „Lesbarkeit der Checkliste“. |

### 3.1 Problem: Wo Typen „vermischt“ sind

1. **Alle T-\***: Die **ID** beschreibt **Ebene 1 + Lernpriorität (E2-Anteil)**; in der **Implementierung** ist sie **unmittelbar** mit **Chip-Farbe (E3)** gekoppelt — *fachlich* verständlich, *systematisch* eine **Doppelbelastung** einer ID.  
2. **O-KETTE**: Story (E2) und **Fallstudien-Inhalt** (E1) — bei Traceability **gemeinsam**; Designsystem sollte **O-KETTE** als **Funktion** definieren, nicht als „Feature-Text“.  
3. **M-MATRIX**: Semantisch **E2** (Achsenbedeutung), aber **ohne** tabellarisches Pattern **nicht** sinnvoll — enger als D-* an E3 gebunden.  
4. **X-DOK / X-STD**: Beide sind **„Meta- oder Dokumentdomäne“** (E1) **plus** spezifische **Oberflächen** — gut, solange Session 3 **Tokens** für den A4-Kanal trennt.

---

## 4. Redundanzen & Lücken

### 4.1 Redundanzen / Namensüberlagerung

| Thema | Befund | Empfehlung (Vorschlag) |
|-------|--------|-------------------------|
| **D-ERKLAER vs. D-HINWEIS** | Inhaltlich oft: „erklärt + verweist“ in **einer** Box (v. a. HA-Seiten) | **Schreibregeln** statt sofortiger Zusammenlegung: *ERKLAER* = definitorisch neutral; *HINWEIS* = Navigation zwischen Artefakten/Kapiteln. Wenn eine Box beides tut: **primäre** Funktion taggen. |
| **T-EXTRA vs. T-VERTIEF** | Beide „nicht Pflicht“ — **T-EXTRA** neigt zum **Sammelbecken** | Kriterium: **VERTIEF** = normativ/spezialisiert (ISO, KI); **EXTRA** = didaktisches **Randmodell** ohne Prüfungsnähe. Sonst **abschaffen oder umbenennen**. |
| **T-KURS (MS)** | Orthogonal zu CTFL-Inhalten | Als **Overlay/Attribut** modellieren (z. B. „`curriculum=ms`“), **nicht** als gleichwertige „Wissensart“ mit T-PFLICHT — außer ihr wollt explizit **vier** Chip-Farben + MS-Badge dauerhaft. |
| **D-AHA vs. D-WARN vs. D-ERKLAER** | CSS: `aha-box` / `warn-box` / `info-box` — ähnliche **visuelle** Familie | Session 3: **eine Callout-Komponente**, Varianten nach **Ebene 2** (nicht nach Seiten-Datei). |
| **`praxis-box` (05-testmanagement)** | Nicht als eigene ID geführt — **funktional** nahe D-ERKLAER + T-PRAXIS | Explizit zu **D-PRAXIS** oder Mapping „praxis-box → D-ERKLAER (Variante Praxis)“ entscheiden. |

### 4.2 Lücken (IST vs. Soll)

| Lücke | IST | Soll (didaktisch) |
|-------|-----|-------------------|
| **TL;DR / Key Takeaways** | Empfohlen in Website-Analyse, **kein** Typ | **D-TLDR** optional (Session 2 schon erwähnt) — **nach** Section-Pattern (02b). |
| **Übungen / Aufgaben** | HA als **Seiten**, aber kein generischer „Aufgaben“-Typ | E2: **A-AUFGABE** oder Nutzung **X-DOK** + Label — nur wenn ihr **nicht-HA-Übungen** plant. |
| **Explizite Fallstudie** | Inhaltlich da (GM), **kein** eigener E1-Typ | Optional **C-FALLSTUDIE** oder weiter **über** O-KETTE + Inhalt modellieren. |
| **Norm als eigener Block** | In Fließtext, Glossar, T-VERTIEF | Optional Facette unter E1 — **nicht** nötig vor Token-Arbeit. |

### 4.3 Was auf Seiten vorkommt, aber (noch) keinen Typ hat

- **`praxis-box`** (siehe oben)  
- **Status-Badges** in Tabellen (`tag--ok` auf 04a) — nah **D-OK**, aber **kontextuell** „Review-Status“  
- **Nummerierte Section-Labels** (`03-statisches-testen`) — **E3** Pattern, kein eigener Typ-ID nötig

---

## 5. Weitergedacht

### 5.1 Andere Plattformen (stark verkürzt)

| Beispiel | Content-Typen (oberflächlich) | Lernbar |
|----------|-------------------------------|---------|
| **Coursera / MOOCs** | Video, Reading, Quiz, Peer Assessment, Week-Struktur | Klare **E2**: Assessment vs. Reference; **E3**: feste Player/Quiz-Patterns |
| **Udemy** | Curriculum-Sections, „resources“, Q&A — weniger formal | Weniger **Semantik** sichtbar; für euch weniger Vorbild für **Traceability** |
| **MDN** | Diátaxis-artig: Guide vs. Reference vs. Tutorials | **Trennung Explanation/Reference** — gut für lange CTFL-Textseiten (`01b`) |

**Takeaway:** Professionelle Lernsysteme trennen **Aktivität** (Quiz/HA) von **Referenz** — eure Stärke ist **Dokumenten-Strecke** (X-DOK, O-KETTE), nicht ein integriertes Quiz-Tool.

### 5.2 QA-spezifisch

- **Normen (ISO, IEEE):** eher **E1-Facette** „normativ“ oder **T-VERTIEF** — eigener Typ nur, wenn ihr **viele** normengeführte Seiten bekommt.  
- **Tool-Dokumentation:** eher **D-AUTO** + Kap. 6 — oder **T-PRAXIS** wenn es um **Berufswerkzeuge** geht.  
- **Fallstudien:** bereits **inhaltlich** abgedeckt; **ID** optional.

### 5.3 Skalierung / Zukunft

Das **Drei-Ebenen-Modell skaliert**, solange **Session 3** Tokens **pro Kanal** (Web vs. A4) und **pro Ebene-2-Variante** (Callout) führt. **Neue Kapitel** = neue **E1**-Zuordnung; **neue HA-Typen** = meist **X-DOK** + O-KETTE. Risiko: **weitere** lokale CSS-Kopien — Migration auf **gemeinsame** Callout-Komponente.

### 5.4 Kritische Ehrlichkeit (was ich anders machen würde)

1. **Nicht** 17 IDs für immer **heilig** halten — sie sind **Arbeitshypothese** aus IST-Inventar.  
2. **T-* nicht mit D-* in derselben visuellen Familie** ohne Legende mischen (Session 2 hat das schon gesehen).  
3. **M-MATRIX** konsequent als **Struktursemantik** dokumentieren, nicht als „noch ein Tag“.  
4. **Ebene 3** zuerst **vereinheitlichen** (Spacing, Section, Callout), **ohne** jedes T-* umzubauen — **Parallelstrategie**.

---

## 6. Vorschlag: Bereinigte Taxonomie (Soll — Entwurf)

### 6.1 Ebene 1 — Content (Domäne)

| Code | Name | Beschreibung |
|------|------|--------------|
| **C-SYLLABUS** | CTFL-Kern | Prüfungsrelevant nach Syllabus |
| **C-PRAXIS** | Berufsfeld | Job/Tool ohne Pflichtcharakter |
| **C-VERTIEF** | Vertiefung | Norm/Spezialthema über Foundation |
| **C-EXTRA** | Kontext | Didaktische Ergänzung, klausurfremd |
| **C-FALLSTUDIE** | Fallstudie | GroceryMate / Szenario (optional explizit) |
| **C-PROJEKT** | Projekt-Meta | Standards, Repo, Web — **X-STD**-Inhalt |
| *Attribut* | **curriculum** | z. B. `ms` — **statt** eigener „T-KURS“-Gleichordnung |

*Mapping:* T-PFLICHT → **C-SYLLABUS**; T-PRAXIS → **C-PRAXIS**; T-VERTIEF → **C-VERTIEF**; T-EXTRA → **C-EXTRA**; X-STD-Inhalt → **C-PROJEKT**; T-KURS → **Attribut** `curriculum`.

### 6.2 Ebene 2 — Semantic (Funktion)

| Code | Name | Beschreibung |
|------|------|--------------|
| **F-META** | Kontext | Seiten-/Kapitel-Ort |
| **F-KETTE** | Story / Traceability | Dokumentenpfad |
| **F-BEGRIFF** | Begriffsklärung | Konflikt CTFL/IEEE etc. |
| **F-ERKLAER** | Erklären | Neutral einführen |
| **F-HINWEIS** | Wegweiser | Verknüpfung, Lesepfad |
| **F-OK** | Bestätigung | Positiv / Soll erfüllt |
| **F-WARN** | Warnung | Risiko, Missverständnis |
| **F-AHA** | Merkpunkt | Einsicht |
| **F-AUTO** | Automatisierung / Tool | Praxis-/Toolfokus |
| **F-MATRIX** | Matrix-Achse | Nur strukturelle Rolle in Raster |
| **F-DOK** | Dokumentmodus | Formales Artefakt / Abgabe-Logik |

*Mapping:* O-META → **F-META**; O-KETTE → **F-KETTE**; O-BEGRIFF → **F-BEGRIFF**; D-* → **F-*** entsprechend; M-MATRIX → **F-MATRIX**; X-DOK (funktional) → **F-DOK** + Kanal A4.

**Hinweis:** Umbenennung **O→F** und **D→F** ist **optional** — sie zeigt: **alles Ebene 2** ist **Funktion**, nicht Thema. Wenn ihr **T-** und **D-** behalten wollt: nur **mentale** Zuordnung zu E1/E2 nutzen.

### 6.3 Ebene 3 — Presentation

Unverändert **Session 2.5** — **P-TABELLE**, **P-SVG**, **P-CANVAS**, **P-KARTEN**, **P-SECTION**, **P-CHIP-ZEILE**, **P-A4**, **P-CALLOUT-*** (zukünftig vereinheitlicht).

---

## 7. Auswirkungen auf Session 3

| Thema | Konsequenz |
|-------|------------|
| **Design-Tokens** | Primär **Ebene 3** — Farben, Abstände, Typografie, Callout-Varianten. |
| **Semantik-Tokens** | **Ebene 2** — „Welche Callout-Variante?“ **nicht** „welche Chip-Farbe?“. |
| **Content-Tokens / CMS** | Falls später: **Ebene 1** als **Metadaten** (Facetten), nicht als CSS-Klasse pro Lemma. |
| **Mapping-Tabelle** | **Pflicht:** `CSS-Klasse (IST)` → **Ebene 2 (Funktion)** → **Ziel-Komponente**; **optional** `data-intent="f-warn"` für HTML. |
| **A4** | **F-DOK** / X-DOK: **gleiche** F-WARN/F-OK wie Web, **andere** Flächen-Tokens (`doc-a4.css`). |

---

## 8. Offene Fragen

1. Soll **T-KURS** dauerhaft **gleichwertig** zu Syllabus-Tags bleiben oder in ein **Attribut** wandern?  
2. Ist **T-EXTRA** noch **10 Jahre haltbar**, oder wird es zum **Resteimer**?  
3. Soll **`praxis-box`** offiziell **D-PRAXIS** / **F-PRAXIS** werden?  
4. Wann ist **ein** Callout **D-ERKLAER vs. D-HINWEIS** — **Redaktionsrichtlinie** nötig (Session 4)?  
5. Sollen **externe Leser** (Portfolio) eigene **E2-Funktionen** bekommen (z. B. „Portfoliotauglichkeit“-Hinweis)? — bisher nicht modelliert.

---

## 9. Quellen & weiterführende Literatur (Auswahl)

1. Swanson, L.: *Content Architecture* — Überblick Strategy / Modeling / IA / Design / UX Writing ([larryswanson.com/content-architecture](https://www.larryswanson.com/content-architecture/)).  
2. *Separating content and presentation* — Diskussion Trägheit vs. Barrierefreiheit ([storyneedle.com](https://storyneedle.com/separating-content-and-presentation-moving-past-fud/)).  
3. Procida, D.: *Diátaxis* — systematischer Ansatz für technische Dokumentation (Tutorials, How-to, Reference, Explanation): [diataxis.fr](https://diataxis.fr/).  
4. Workshop-intern: [P02-01-taxonomie-information.md](P02-01-taxonomie-information.md), [P02-02-darstellung-patterns.md](P02-02-darstellung-patterns.md), [P02-03-seitenmatrix-ist.md](P02-03-seitenmatrix-ist.md), [P01-vision-ziele.md](P01-vision-ziele.md).

---

*Ende Session 2d — Drei-Ebenen-Modell (Stand 2026-04-01).*
