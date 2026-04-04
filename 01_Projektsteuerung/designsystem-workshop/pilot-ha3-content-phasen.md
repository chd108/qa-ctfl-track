Datei erstellt: 2026-04-04  
Letzte Aktualisierung: 2026-04-05 — **04e** produktiv: **`ha3p-*`**, Inhalt **1:1** `pilot-ha3-content.txt`, **Lösung** zweispaltig (**`.ha3p-loesung-cols`**). **Farbregel HA** (ACTION vs. Lösungskopf): **`base.css`** + **Phase 6** unten · normativ **[P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md) §2** · **[03_Project_Standards.md](../03_Project_Standards.md) §6**. Zuvor **2026-04-04** Phase 6 (**04e**-Spec); zuvor Phase 5–1  
Zweck: **Pilot** — methodische Grundlage zur Content-Strukturierung der HA3-Überdeckungs-Seite; Erkenntnisse fließen in Designsystem-Entscheidungen (Workshop).  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Pilot-HA3  
Normative Orientierung: [README.md](README.md), [P02-06-taxonomie-soll.md](P02-06-taxonomie-soll.md), [P04-04-ctfl-lernwebsite-spec.md](P04-04-ctfl-lernwebsite-spec.md) — bei Konflikt zuerst Workshop-README und P04-00-Overview.

---

**Phase-0-Rohinhalt (Text):** [pilot-ha3-content.txt](pilot-ha3-content.txt) — Aufgabenstellung, Code, Tests, Lösung inkl. Coverage-Tabellen und Referenz auf die DAG-SVG; **Input** laut Muster-Tabelle Phase 0, **Nachbar** dieser `.md`.

**Bezug IST:** Lernseite `02_Portfolio/QA_Lernwebseite/pages/04e-ha3-ueberdeckung.html` (Hausaufgabe Überdeckung / White-Box).

**Leitidee:** Vom Rohinhalt zur stabilen Seitenstruktur — als **Documentation Information Architecture Process** (Dokumentations-Informationsarchitektur), kurz **„Doing IA“** (**Information Architecture** im Sinne von: Inhalte erfassen, modellieren, ordnen und mit Darstellung/ Komponenten verzahnen, statt nur „Text schreiben“). **Methodik und Doku** für diesen Pilot laufen **in erster Linie in dieser einen Datei** zusammen; die **eigentliche Seite** (`04e-ha3-ueberdeckung.html`, Assets, ggf. CSS) wird **weiterhin** dort bearbeitet, wo sie im Repo liegt — diese `.md` ersetzt keine Produktdateien.

**Vereinbarung Content-Treue (Pilot HA3):** Für **Aufgabenstellung** und **Lösung** gilt der inhaltliche Maßstab von [pilot-ha3-content.txt](pilot-ha3-content.txt): **weder mehr noch weniger** — gleiche Fakten, Formulierungen, Code, Tabellen und Kennzahlen (keine neuen Anforderungen, keine abweichenden Ergebnisse). **Reihenfolge** auf der Webseite darf **didaktisch** von der TXT abweichen (z. B. Diagramm vor Index). **Aufbereitung** (Struktur der Abschnitte, Komponenten, Layout, Typografie, Interaktion) ist **frei** und ändert nichts an dieser **inhaltlichen** 1:1-Bindung. So bleibt **Content = Content**; die Leitidee **Doing IA** zielt auf **Ordnung, Modell und Darstellung**, nicht auf Umschreiben des Fachstoffs.

---

## Vereinbarung: Muster vs. Arbeits-Tabelle

**Muster (fix):** Die folgende Tabelle mit **Phasen 0–6** (**sieben Zeilen**) und **diesen Spalten** ist die **gemeinsame Referenz** — **Struktur und Inhalt dieser Tabelle werden nicht verändert**, damit alle (Mensch, Cursor, Claude, …) **dieselbe Leiter** haben. Sie ist **kein** fortlaufendes Log, sondern das **Normbild** für das Vorgehen.

**Arbeit:** **Direkt darunter** folgt eine **zweite Tabelle** mit **demselben Spaltenkopf** (`Phase | Disziplin/Begriff | Framework/Methode | Input | Output`). **Nur diese zweite Tabelle** wird **befüllt**, **verfeinert**, bei Bedarf **um Zeilen erweitert** oder **fortgeschrieben** — je nach Arbeitsstand und Erkenntnissen zum **konkreten HA3-Pilot**.

**Begründung:** Ein **eingefrorenes Muster** verhindert Drift („wir ändern die Phasenlage ad hoc“) und macht **Vergleiche** zwischen Projekten später möglich. Eine **separate Arbeits-Tabelle** erlaubt **Iteration**, ohne das Muster zu verwässern.

---

## Muster — Phasen 0–6 (nicht ändern)

| Phase | Disziplin/Begriff | Framework/Methode | Input | Output |
|------:|-------------------|-------------------|-------|--------|
| 0 | IST-Analyse & Materialsammlung | Content Audit | Aufgabenstellung + Lösung (als Text) | Roher Content, Referenz auf SVG |
| 1 | Content Analysis & Diátaxis Mapping | Diátaxis Framework | Roher Content | Diátaxis-typisierte Content-Einheiten |
| 2 | Content Modeling | Structured Content | Diátaxis-typisierte Einheiten | Strukturierte Inhaltstypen |
| 3 | Information Architecture | IA Taxonomy | Inhaltstypen | Hierarchie/Taxonomie |
| 4 | Component Architecture | Atomic Design | Hierarchie | Komponentenliste |
| 5 | Documentation Framework | Diátaxis | Komponenten | Typisierte Komponenten |
| 6 | Presentation Patterns | UI Patterns | Typisierte Komponenten | Darstellungsregeln |

**Hinweise zum Muster (kein Tabelleninhalt):**

- **Content Inventory:** bei Bedarf **im Verlauf** der bestehenden HTML-Seite `04e-ha3-ueberdeckung.html` — **keine** feste eigene Phasenzeile; lässt sich z. B. parallel zu Phase 0 oder 1 nachziehen.
- **SVG:** Kontrollflussgraph (**gerichteter azyklischer Graph** / **Zustandsübergangsdiagramm**) ist **bereits vorhanden** (`assets/ha3-svg/…`, eingebunden in **04e**), wird **referenziert**, gehört fachlich zu **Antwort 1** — **keine Neugestaltung** vorgesehen.

---

## Arbeits-Tabelle — Pilot HA3 (iterativ befüllen, Zeilen bei Bedarf ergänzen)

| Phase | Disziplin/Begriff | Framework/Methode | Input | Output |
|------:|-------------------|-------------------|-------|--------|
| 0 | IST-Analyse & Materialsammlung | Content Audit | Aufgabenstellung + Lösung (als Text) | [pilot-ha3-content.txt](pilot-ha3-content.txt) — Rohtext inkl. SVG-Referenz (Phase 0 abgeschlossen) |
| 1 | Content Analysis & Diátaxis Mapping | Diátaxis Framework | Roher Content ([pilot-ha3-content.txt](pilot-ha3-content.txt)) | Content-Einheiten **A–J** mit **Diátaxis-Quadranten** (primär/sekundär); vgl. Abschnitt *Quadranten-Zuordnung* unten |
| 2 | Content Modeling | Structured Content | Diátaxis-typisierte Einheiten (Phase 1) | **3 Seitenabschnitte** mit Zuordnung der Content-Einheiten; vgl. *Seitenabschnitte (Phase 2)* unten |
| 3 | Information Architecture | IA Taxonomy | 3 Seitenabschnitte + Content-Einheiten (Phase 2) | Konkrete **Überschriftenhierarchie** (H1–H4), **Anker-Navigation**; vgl. *Überschriftenhierarchie (Phase 3)* unten |
| 4 | Component Architecture | Atomic Design | Überschriftenhierarchie + Content-Einheiten (Phase 3, B–I) | **UI-Komponenten** mit Zuordnung **B–I** (Code, Tabellen, Listen, SVG, Callouts); vgl. *UI-Komponenten (Phase 4)* unten |
| 5 | Documentation Framework | Diátaxis | UI-Komponenten-Typen (Phase 4, 8 Bausteine) | **Typisierte Komponenten:** Quadranten-Zuordnung **primär/sekundär** + Kontext; vgl. *Documentation Framework — Diátaxis (Phase 5)* unten |
| 6 | Presentation Patterns | UI Patterns | Typisierte Komponenten (Phase 5) | **Darstellungsregeln** für die **8** UI-Typen (`base.css`-Tokens); vgl. *Presentation Patterns (Phase 6)* unten |

*(Phasen **0–6** der Arbeits-Tabelle sind für diesen Pilot **befüllt**; bei Bedarf **zusätzliche** Zeilen für Meilensteine oder Teiliterationen möglich.)*

---

## Seitenabschnitte — HA3 `04e` (Abschluss Phase 2)

Vorgabe für die **Webseitenstruktur** (bearbeitet in `02_Portfolio/QA_Lernwebseite/pages/04e-ha3-ueberdeckung.html`). Rohinhalt: [pilot-ha3-content.txt](pilot-ha3-content.txt).

| Abschnitt | Content-Einheiten | Hinweis |
|-----------|---------------------|---------|
| **1. Aufgabenstellung** | **B**, **C**, **D**, **E** | **B** = Original-/Beispiel-Links als **Intro** direkt unter **H2 Aufgabenstellung** (**ohne** eigene H3); **C–E** mit fachlichen H3; E = Teilaufgaben (**ACTION**); A (Metablock) typischerweise **nicht** als Lernabschnitt auf der Seite |
| **2. Lösung** | **G** → **F** → **H** → **I** | Auf der Seite **G vor F** (Diagramm zuerst, dann Statement-Index); danach Coverage (**H**) und Teil 3 inkl. **Begründung** (**I**) |
| **3. Quellen** | optional **B** (gebündelt), ggf. Syllabus/Norm aus **A** | Nur falls Links oben schlank gehalten werden; sonsten Abschnitt entfallen |

**Abweichung zum Rohtext:** In [pilot-ha3-content.txt](pilot-ha3-content.txt) steht **F** vor **G**; die **Seite** setzt **G vor F** (didaktisch: zuerst sichtbares DAG, dann Index/Legende).

---

## Überschriftenhierarchie — HA3 `04e` (Abschluss Phase 3)

**Ziel:** Umsetzung der **drei Seitenabschnitte** (Phase 2) mit **fachlichen** Überschriften (keine technischen Platzhalter wie „SVG-Verweis“ als H3-Titel). **Reihenfolge** im Abschnitt **Lösung** auf der Seite: **G → F → H → I** (s. Phase 2).

**Navigation:** Optional **Inhaltsverzeichnis** mit Sprungmarken (z. B. `#aufgabenstellung`, `#loesung`, `#quellen`); bei langer Seite Unteranker unter **Lösung** möglich (z. B. `#loesung-dag`, `#loesung-coverage`).

### Baum (H1 → H4)

```
H1  [Seitentitel — z. B. HA3 – Überdeckung (White-Box)]

H2  Aufgabenstellung
    [Intro: B — Original-/Beispiel-Links ohne eigene Überschrift, direkt unter H2]
    H3  Sachverhalt & Regel                    ← C
    H3  Code & Testaufrufe                    ← D
    H3  Teilaufgaben                            ← E

H2  Lösung
    H3  Kontrollfluss (DAG)                   ← G (fachlicher Titel; SVG eingebettet)
    H3  Zuordnung: Statement-Indizes            ← F
    H3  Überdeckung                             ← H
        H4  Anweisungsüberdeckung               ← optional, wenn visuell getrennt
        H4  Zweigüberdeckung
    H3  Variante ohne Statement 5             ← I
        H4  Begründung                          ← Begründungsblock aus TXT (1:1)

H2  Quellen                                   ← nur wenn Abschnitt 3 genutzt; sonst weglassen
```

### Festlegungen

| Thema | Vereinbarung |
|--------|----------------|
| **H1** | Eine Seite = **ein** H1 (Seitentitel). |
| **H2** | Genau die **drei** Hauptabschnitte (bzw. zwei, wenn **Quellen** entfällt). |
| **B** | **Kein** H3 „Kontext & Quellen“ — Links gehören zum **Einstieg in Aufgabenstellung**, **ohne** eigene Überschriftenebene. |
| **H4** | Unter **Überdeckung** optional; **Begründung** unter Variante **H4** (entspricht `####` im Rohtext). |
| **Content-Treue** | Alle sichtbaren Texte aus Aufgabe/Lösung **1:1** zu [pilot-ha3-content.txt](pilot-ha3-content.txt); nur **Struktur und Präsentation** variieren. |

---

## UI-Komponenten — HA3 `04e` (Abschluss Phase 4)

**Ziel:** Konkrete **UI-Bausteine** für die Umsetzung in `02_Portfolio/QA_Lernwebseite/pages/04e-ha3-ueberdeckung.html` — abgestimmt auf **Hierarchie (Phase 3)** und **Content-Einheiten B–I** (ohne **A**, typischerweise nicht auf der Lernseite).

**Bezug Technik:** Bestehende Seiten nutzen **`base.css`**-Muster (Absätze, `<pre><code>`, Tabellen, ggf. **Callouts**). **Exakte Klassennamen** werden bei der Umsetzung gegen [P04-03-p-presentation.md](P04-03-p-presentation.md) und **04b** (Priorität/Umsetzungsstand) geklärt — hier zuerst die **inhaltliche** Komponentenwahl.

### Wiederkehrende Bausteine (Querschnitt)

| Muster | Vorkommen |
|--------|-----------|
| **Absatz / Fließtext** | **B**, **C**, Erklärtexte bei **F**, **G**, **H**, **I** |
| **Fett / Inline-Code** | Überall dort, wo die TXT `**…**` / `` `…` `` vorsieht |
| **Externe Links** | **B** (Notion) |
| **Überschriften** | Struktur aus Phase 3 (H2–H4); layoutrelevant |
| **Tabellen** | **F**, **H**, **I** (Datentabellen; Spalten-/Zeilenzahl unterschiedlich) |
| **Codeblock** | **D** (zweimal Python) — dieselbe Komponente wiederholt |
| **Optional: TOC / Sprungmarken** | Seite global (Phase 3) |

### Pro Content-Einheit

| Einheit | Inhalt | Komponente(n) | Besonderheiten |
|--------|--------|---------------|----------------|
| **B** | Titelbezug + zwei Notion-Links | **Absatz** mit **Inline-Links** (oder kompakte Link-Zeile) | Kein eigener H3; direkt unter **H2 Aufgabenstellung** |
| **C** | Rahmen + Geschäftsregel | **Absatz(e)**; Regel mit **Strong** wie in TXT | Optional: **Callout** „Szenario“ / „Regel“ zur optischen Trennung — **inhaltlich** weiter 1:1 |
| **D** | Code + Testaufrufe | **Zwei Codeblöcke** (`<pre><code class="language-python">` o. ä.) | Optional **Präsentations-Zwischenüberschrift** (z. B. „Code“ / „Gegebene Testaufrufe“) — **ohne** neuen Fachtext |
| **E** | Teilaufgaben 1–3 | **Geordnete Liste** (`<ol>`) | **ACTION:** z. B. **Callout**-Wrapper, falls im Designsystem vorgesehen — sonst Klasse am `<ol>`-Container |
| **F** | Statement-Index | **Einleitungsabsatz** + **eine Tabelle** | Viel **Inline-Code** in Zellen; erste Spalte numerisch — **`th`/`scope`** für Barrierefreiheit |
| **G** | DAG + Kanten/Knoten | **`figure`** mit eingebettetem **SVG** (`<img src="…">` oder inline `<svg>`) + optional **figcaption** + **Absatz** | Pfad **`../assets/ha3-svg/HA3-Teil2_DAG.svg`**; Max-Breite/Skalierung per CSS |
| **H** | Coverage | **Zwei Tabellen** + **Fließtext** (Vereinigung, %, fehlender Zweig) | Optional **zwei H4**-Blöcke; Branch-Tabelle mit **starker** Zeile wie in TXT |
| **I** | Variante + Begründung | **Eine Tabelle** + **Aufzählungsliste** (`<ul>`) unter **H4 Begründung** | Drei Bulletpoints **1:1** aus TXT |

### Wiederholungen (explizit)

- **Codeblock:** **2×** bei **D** (gleiche Komponente).
- **Tabelle:** **F** (1×), **H** (2×), **I** (1×) → **ein** Tabellen-Stil / eine Komponentenfamilie, **Varianten** (2 vs. 3 Spalten, hervorgehobene Zeile).
- **Liste:** **E** = `<ol>`, **I** (Begründung) = `<ul>` — strukturell Liste, **optisch** unterscheidbar (ACTION vs. Erklärung).
- **Callout:** sinnvoll bei **E**, optional bei **C**; für **F/G/H/I** nicht zwingend, wenn Tabelle/Code genug Struktur bieten.

### Kurz-Inventar (Checkliste Umsetzung)

1. Intro-Links (Absatz)  
2. Fließtext / Strong / Inline-Code  
3. Codeblock (Python), mehrfach  
4. Ordered List + optional ACTION-Callout  
5. Data Table (Varianten)  
6. Figure + SVG + Begleittext  
7. Unordered List (Begründung)  
8. Optional: TOC / Anker (Seite)  

---

## Documentation Framework — Diátaxis (Abschluss Phase 5)

**Ziel:** Die **8 Komponenten-Typen** aus Phase 4 (*Kurz-Inventar*) den **vereinbarten Quadranten** zuordnen — **primärer Zweck** pro Komponente, damit später **ACTION** vs. **APPLICATION** (und **COGNITION**) **visuell** sauber trennbar sind (CSS / Callout-Familien).

**Rahmen (wie Phase 1):** **ACQUISITION** = Aufgabe + Beispiel · **COGNITION** = Erklärungen · **APPLICATION** = Tabellen/Daten/SVG · **ACTION** = Teilaufgaben (konkrete Schritte).

### 1. Intro-Links (Absatz)

| | |
|--|--|
| **Primär** | **APPLICATION** |
| **Kontext / Einheiten** | **B** — Notion-Links als **Referenz**; optional Wiederholung im Abschnitt **Quellen**. |
| **Visuell** | eher **ruhig / informativ**, nicht wie Handlungsaufforderung. |

### 2. Fließtext / Strong / Inline-Code

| | |
|--|--|
| **Primär** | **kontextabhängig** (Trägerkomponente) |
| **Kontext / Einheiten** | **C:** überwiegend **ACQUISITION** + **COGNITION**. **F, G, H:** **ACQUISITION** (Musterlösung) + Anteile **COGNITION**. **I:** **ACQUISITION** (Variante) + **COGNITION** im Fließtext neben Liste. |
| **Visuell** | Semantik aus **Umgebung** (Abschnitt Aufgabe vs. Lösung), nicht pro Absatz eigene „Quadranten-Farbe“. |

### 3. Codeblock (Python), mehrfach

| | |
|--|--|
| **Primär** | **APPLICATION** |
| **Kontext / Einheiten** | **D** — Code und Testaufrufe als **Artefakte** (Daten/Referenz). |
| **Visuell** | Monospace, klar abgegrenzt; **kein** Tutorial-Schritt-Look. |

### 4. Geordnete Liste (`<ol>`) + optional ACTION-Callout

| | |
|--|--|
| **Primär** | **ACTION** |
| **Kontext / Einheiten** | **E** — die drei **Teilaufgaben**; Callout verstärkt **Handlung**. |
| **Visuell** | **hervorgehoben**, klar von **APPLICATION**-Blöcken (Tabellen, Code) trennen. |

### 5. Data Table (Varianten)

| | |
|--|--|
| **Primär** | **APPLICATION** |
| **Sekundär (auf 04e)** | **ACQUISITION** — Tabellen in **F / H / I** tragen das **durchgerechnete Beispiel** (Mitverstehen des Lernpfads). |
| **Kontext / Einheiten** | **F:** Index (**APPLICATION** dominiert). **H:** Coverage — **APPLICATION** + **ACQUISITION**. **I:** Metrik-Vergleich — **APPLICATION** + **ACQUISITION**. |
| **Visuell** | ein Tabellen-Stil; Unterscheidung Aufgabe/Lösung eher über **H2/H3** als über zwei Table-Designs. |

### 6. Figure + SVG + Begleittext

| | |
|--|--|
| **Primär** | **APPLICATION** |
| **Kontext / Einheiten** | **G** — Diagramm als **Daten/Modell**; Kanten-/Knoten-Texte: **APPLICATION** + etwas **COGNITION**. |
| **Visuell** | diagrammartig; von Code und Tabelle unterscheidbar. |

### 7. Unordered List (`<ul>`) — Begründung

| | |
|--|--|
| **Primär** | **COGNITION** |
| **Kontext / Einheiten** | **I** unter **H4 Begründung** — Definitionen, ISTQB-Bezug, fehlende Kante; **nicht** mit **ACTION** verwechseln. |
| **Visuell** | eher **Erklär-Oberfläche** (z. B. an Erklär-Callout angleichen), **nicht** wie **E** (`<ol>`). |

### 8. TOC / Sprungmarken (optional)

| | |
|--|--|
| **Primär** | **APPLICATION** (Navigation als **Information**) |
| **Sekundär** | **ACQUISITION** — Orientierung im langen Beispiel. |
| **Kontext / Einheiten** | Seite global; z. B. `#aufgabenstellung`, `#loesung`, `#quellen`. |
| **Visuell** | kompakt, navigativ; **nicht** wie **ACTION**-Callout. |

### Kurzmatrix (CSS / Umsetzung)

| # | Komponenten-Typ | Primär |
|---|-------------------|--------|
| 1 | Intro-Links | APPLICATION |
| 2 | Fließtext / Strong / Inline-Code | kontextabhängig (ACQ / COG) |
| 3 | Codeblock | APPLICATION |
| 4 | Ordered List (+ Callout) | **ACTION** |
| 5 | Data Table | APPLICATION (+ ACQUISITION in Lösung) |
| 6 | Figure + SVG | APPLICATION |
| 7 | Unordered List (Begründung) | **COGNITION** |
| 8 | TOC / Anker | APPLICATION |

**Leitplanken Umsetzung:** **4** (**ACTION**) klar von **3, 5, 6** (**APPLICATION**) trennen; **7** (**COGNITION**) nicht wie **ACTION** stylen.

---

## Presentation Patterns — HA3 `04e` (Abschluss Phase 6)

**Ziel:** Konkrete **Darstellungsregeln** für die **8 Komponenten-Typen** (Phase 4/5) — Farben, Abstände, Rahmen — abgestimmt auf **`02_Portfolio/QA_Lernwebseite/assets/css/base.css`** (`:root`). **Umsetzung** in HTML/CSS erfolgt **gesondert** (Pilot-Architektur Phasen 0–5); hier nur die **verbindliche Spezifikation** für **04e**.

**Design-Referenz (Tokens):** Seitenbasis `--bg`, `--text`, `--mid`, `--soft`, `--bdr`; **`--ctfl`** / **`--ctfl-bg`**; Karten **`--e3`** / **`--e4`** (Aufgaben-Kopf `--e3`); **`--callout-chain-*`** (**F-CHAIN**). **HA-Flächen (nur 04e):** **`--surface-handlung-*`** (ACTION), **`--surface-loesung-kopf-bg`** (Kopf Lösungs-Hülle). **`04c`/`05a`** / Landkarte / Glossar: **`section--e4`** → **`--e4`** (kein Lösungs-Token). **Kein** globales Tauschen von `--e4`/`--ctfl-bg`. Konkrete Werte/Maße: Tabelle *Fest getroffene Entscheidungen* + Regeln Komponente **4** / **Querschnitt** unten.

### Fest getroffene Entscheidungen (Empfehlungen übernommen)

| Thema | Festlegung |
|--------|------------|
| **COGNITION / Begründungsliste (7)** | **F-CHAIN / Creme:** `--callout-chain-bg`, `--callout-chain-border-outer`, linker Akzent `--callout-chain-accent-width` + `--callout-chain-border-accent` — **nicht** Vollflächen-`--advanced-bg` (Vermeidung falscher „Vertiefungs“-Assoziation). |
| **Hervorgehobene Tabellenzeile** (z. B. fehlender Zweig in **H**) | **Dezente Zeilen-Tint** `rgba(201, 232, 210, 0.35)` (abgeschwächtes Syllabus-Grün) **plus** **`font-weight: 600`** in der **ersten Spalte** (Kante) — **kein** Zebra-Streifen auf der ganzen Tabelle. |
| **ACTION / Teilaufgaben (4)** | Fläche **`--surface-handlung-bg`** (Ocker, alias **`--e4`**), Rand **`1px solid var(--surface-handlung-border-outer)`**, linker Akzent **`4px solid var(--surface-handlung-accent)`** — klar von weißen Tabellen/Code getrennt. |
| **Kopf Lösungs-Hülle** (`.ha3p-sheet--answer`, **nur** **04e**) | Hintergrund **`--surface-loesung-kopf-bg`** (Syllabus-Grün, alias **`--ctfl-bg`**). |

### Regeln pro Komponente (1–8)

**1. Intro-Links (APPLICATION)** — Kein eigener Kasten; Absatz auf Seitenhintergrund. Links farbig (`--ctfl` oder `--advanced`), Unterstreichung nur `:hover`. Abstand nach unten `1rem`.

**2. Fließtext / Strong / Inline-Code** — Absatz: `line-height` 1.65–1.7, `margin-bottom` `1rem`, `--text`. **Strong:** `font-weight` 600/700. **Inline-Code:** Monospace, leicht verkleinert, Hintergrund `rgba(255,255,255,0.55)`, `padding` `0.12em 0.35em`, `border-radius` `4px`, `border` `1px solid var(--bdr)`. Quadranten nur über Kontext (Überschriften/Sheets), nicht pro Absatz eigene Fläche.

**3. Codeblock Python (APPLICATION)** — Hintergrund `rgba(255,255,255,0.6)`; Rahmen `1px solid var(--bdr)`; **Radius** `6px`; Padding `1rem 1.2rem`; Außen `1rem 0`. Monospace; optional Sans-Überschrift (`--mid`, ~`1.05rem`).

**4. Geordnete Liste + ACTION-Callout (ACTION)** — Container: **`--surface-handlung-bg`**, **`border: 1px solid var(--surface-handlung-border-outer)`**, **`border-left: 4px solid var(--surface-handlung-accent)`**; **Padding** `1rem`–`1.25rem`; **Radius** `8px`; Außen `1.25rem 0`. `ol` innen ohne Zusatzmargen, `padding-left` ~`1.35rem`, `line-height` ~`1.65`.

**5. Data Table (APPLICATION / ACQUISITION)** — Volle Breite, `border-collapse: collapse`; Außenrahmen `1px solid var(--bdr)`; **Radius** `8px`, `overflow: hidden`; Zellenhintergrund `rgba(255,255,255,0.5)`; Zellenpadding ~`0.7rem 1rem`; Trennlinien `1px solid var(--bdr)`; **Header:** Hintergrund `rgba(0,0,0,0.04)`, **fett**, Text `--soft` oder `--mid`; **kein Zebra**; **Highlight-Zeile** wie oben (Tint + erste Spalte fett). Schriftgröße ~`0.9rem` (optional `0.82rem` in engen Layouts).

**6. Figure + SVG (APPLICATION)** — `margin` `1rem 0 1.5rem`; SVG max. Breite (z. B. `540px`) oder `100%` mit Cap; Rahmen optional `1px solid var(--bdr)`. Caption/Begleittext: `0.85rem`, `--soft`, `line-height` 1.4.

**7. Unordered List Begründung (COGNITION)** — Wrapper im **F-CHAIN-Stil** (`--callout-chain-bg`, Border, linker Akzent, Padding/Radius wie `--callout-chain-*`). `ul` mit üblichem `padding-left`. **Nicht** wie der **ACTION**-Kasten (Ocker); **F-CHAIN-Creme** beibehalten.

**8. TOC / Anker (APPLICATION)** — Hintergrund z. B. `--legend-surface` oder `rgba(255,255,255,0.45)`; Rahmen `1px solid var(--bdr)`; Radius `6–8px`; Padding ~`0.65rem 1rem`; Sans, klein (~`0.8125rem`), `--mid`; `margin-bottom` ~`1.25–1.5rem`. Kein Button-Look.

### Querschnitt

- **Vertikaler Rhythmus:** zwischen Blöcken **1–1,5rem**; H3/H4-Abstände an bestehende HA-Sheet-Logik anlehnen.  
- **Radien:** Code **6px**, Karten/Callouts/Tabellen **8px**.  
- **Trennung:** ACTION (**Ocker**, `--surface-handlung-*`) vs. **Kopf Lösungs-Hülle** (**Syllabus-Grün**, `--surface-loesung-kopf-bg`) vs. APPLICATION (**weiß/transparenz + `--bdr`**) vs. COGNITION (**F-CHAIN-Creme**).

---

## Quadranten-Zuordnung — Content-Einheiten A–J (Abschluss Phase 1)

**Rahmen (vereinbart):** **ACQUISITION** = Aufgabe + Beispiel · **COGNITION** = Erklärungen · **APPLICATION** = Tabellen/Daten/SVG · **ACTION** = Teilaufgaben (konkrete Schritte).

**Hinweis zu J:** Die früher separate Einheit **Begründung** ist im Rohtext unter **I** (Teil 3, `#### Begründung (kurz)`); es gibt **kein eigenes J** mehr — die Zeile **J** unten = *entfällt / in I*.

| Einheit | Kurzinhalt (s. [pilot-ha3-content.txt](pilot-ha3-content.txt)) | Primär | Sekundär |
|---------|----------------------------------------------------------------|--------|----------|
| **A** | Metablock (Zweck, Klassifizierung, Norm) | APPLICATION | — |
| **B** | Titelbezug + Notion-Links | APPLICATION | — |
| **C** | Sachverhalt + Geschäftsregel | ACQUISITION | COGNITION |
| **D** | Code + gegebene Testaufrufe | APPLICATION | — |
| **E** | Teilaufgaben 1–3 | ACTION | — |
| **F** | Statement-Index (Tabelle + Satz) | APPLICATION | COGNITION |
| **G** | DAG (SVG-Pfad/Embed), Kanten, Knoten | APPLICATION | COGNITION |
| **H** | Statement-/Branch-Coverage, Tabellen, fehlender Zweig | ACQUISITION | APPLICATION |
| **I** | Teil 3 (Variante ohne Zeile) + Begründung | ACQUISITION | COGNITION |
| **J** | *entfällt* (in **I** aufgegangen) | — | — |

---

## Single-File-Fokus für Pilot-Doku (mit bewusster Ausnahme)

**Gilt für diesen Pilot:** Sämtliche **methodischen Notizen, Erkenntnisse, Entscheidungen und Verweise**, die **ausschließlich** diesen HA3-Content-Strukturierungslauf betreffen, werden **zuerst und vorrangig in dieser `.md`** festgehalten. **Andere** Workshop- oder Steuerungsdateien (**P02–P05**, `02_Project_Status`, …) werden **nicht** parallel „mitgeschrieben“, **solange** das **nicht nötig** ist.

**Begründung:** Eine **überschaubare** Zielgröße (eine HA-HTML-Seite) + **eine** Arbeitsdatei = weniger **Streuung**, klarer **Fokus**, schnelleres **Auffinden**. Am Ende liegt eine **abgeschlossene** HA3-Umsetzung vor; **diese Pilot-Datei** kann dann als **Fallbeleg** im Archiv bleiben, ohne dass zwischendurch das **gesamte** Designsystem-Ordnerwerk mitlaufen musste.

**Ausnahme:** Sobald eine Erkenntnis **verbindlich** für **mehr** als diesen Pilot sein soll (z. B. neue **globale** Regel in **P04**), ist ein **bewusster** Ausgriff in andere Dateien **erlaubt und dann sinnvoll** — wird hier im **Notizen**-Abschnitt kurz **vermerkt** (was, wo, warum).

**Weiterhin selbstverständlich:** **P03/P04**, **README**, **Seiten**, **Assets** jederzeit **lesen und zur Orientierung nutzen**; Änderungen an **Code/Assets** an der HA3-Seite erfolgen **dort**, wo sie technisch hingehören — diese Datei **dokumentiert** den Weg, **ersetzt** ihn nicht.

---

## Notizen (frei)

- **2026-04-05:** **IST-Umsetzung** — **`04e-ha3-ueberdeckung.html`** Pilot **0–6**; **Lösung** zweispaltig (DAG links, Aufgaben 2+3 rechts; schmal untereinander).

*(Iterationen, offene Fragen, Verweise auf P03/P04/P05, Ausnahmen „Doku ausgelagert nach …“ — nach Bedarf.)*
