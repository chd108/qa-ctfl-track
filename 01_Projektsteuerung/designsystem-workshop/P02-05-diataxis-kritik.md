Datei erstellt: 2026-03-30  
Letzte Aktualisierung: 2026-04-02 — Metablock Variante B ergänzt; inhaltlicher Stand 2026-04-01  
Zweck: Kritische Einordnung von Diátaxis vs. Callouts (F-*) und Taxonomie.  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Konzept  
Normative Orientierung: [02f](P02-06-taxonomie-soll.md) §3.2; [03](P03-mapping-ist-soll-token.md) §4 S-*

---

# Session 2e: Diátaxis & Taxonomie — kritische Einordnung

**Workshop:** Designsystem — Reflexionspunkt vor Session 3  
**Vorgänger:** [P02-01-taxonomie-information.md](P02-01-taxonomie-information.md), [P02-04-modell-drei-ebenen.md](P02-04-modell-drei-ebenen.md), [P02-03-seitenmatrix-ist.md](P02-03-seitenmatrix-ist.md)

**Externe Referenz:** [Diátaxis](https://diataxis.fr/) — vier Dokumentationsformen (Tutorial, How-to, Reference, Explanation), Daniele Procida.

---

## 0. Kritische Reflexion

**Kurz:** [Diátaxis](https://diataxis.fr/) ist **kein Fehler**, aber es ist **nicht** die automatische Lösung für eure 17 Typ-IDs. Es beantwortet eine **andere Frage**.

| Frage | Wer beantwortet sie? |
|--------|----------------------|
| *Welche **Nutzerabsicht** hat diese **Dokumentation** (lernen / tun / nachschlagen / verstehen)?* | **Diátaxis** — Makro-Ebene (Seite, ggf. Abschnitt). |
| *Ist dieses Thema **Syllabus** oder **Praxis**?* | Eure **T-**\* Typen — **Domäne** (Ebene 1). |
| *Ist diese **Box** eine Warnung, ein OK, eine Kette, Automatisierung?* | Eure **D-**\* / **O-**\* — **feine Semantik** (Ebene 2, aber **nicht** dasselbe wie die vier Diátaxis-Quadranten). |
| *Tabelle, SVG, Chip, A4?* | **Presentation** (Session 2.5 / Ebene 3). |

**Ehrliche Meinung:** Wenn „**Einfacher werden**“ das Ziel ist, dann **gefährdet** Diátaxis das Ziel **genau dann**, wenn es als **zweites vollständiges Klassifikationssystem** neben **T-/D-/O-/…** gelebt wird — **ohne** klare Regel, *wo* es hingehört.

**Wann hilft Diátaxis?** Wenn es eine **eigene** **Ebene** bleibt: „**Seitenmodus**“ für **Leser-Orientierung** — **sichtbar** (Label/Badge), **nicht** nur interne Notiz — und **nicht** als Ersatz für Callouts (**F-***).

**Wann schadet es?** Wenn **Option A** (siehe unten) wörtlich genommen wird: **D-ERKLAER** mit **Explanation** gleichzusetzen ist **fachlich falsch** — *Explanation* ist eine **Gesamtdokumentation** („Warum?“), **D-ERKLAER** ist oft eine **inline-Box** („Was ist X?“). Ein **How-to** kann **dutzend** D-ERKLAER-Boxen enthalten; umgekehrt ist eine **Explanation-Seite** nicht „nur D-ERKLAER“.

**Einfacher als Diátaxis?** Für **Session 3** ja: **Token-Familien** (Chips, Callouts, Chrome, A4) + **Mapping** von CSS-Klassen → **keine** 50 semantischen Codes im Stylesheet.

---

## 0b. Diátaxis-Modi und Nutzerbedürfnis (Referenz)

Die folgende **Matrix** fasst die **vier Modi** und das **Nutzerbedürfnis** nach [Diátaxis](https://diataxis.fr/) zusammen — **einmalig** hier; in **02f** §3.2 **2a** erscheinen dieselben Modi als **S-***-Codes (**S-EXPLAIN** = **Explanation**).

| Modus | Nutzer-Bedürfnis | Dimensionen |
|-------|------------------|---------------|
| **Tutorial** | Learning | Acquisition + Action |
| **How-to** | Goals | Action + Application |
| **Explanation** | Understanding | Acquisition + Cognition |
| **Reference** | Information | Application + Cognition |

*Quelle der Zuordnung Modus / Bedürfnis / Dimensionen: [diataxis.fr](https://diataxis.fr/).*

---

## 1. Vergleich der Optionen

### Option A: Diátaxis als Haupt-Struktur (F-TUTORIAL …, D-ERKLAER/D-HINWEIS fallen weg)

| Pro | Contra |
|-----|--------|
| Ein **bekanntes** Raster aus der Industrie | **Kategoriefehler:** Diátaxis-Modi **ersetzen** keine **inline**-Callouts |
| Weniger **D-**-Namen | **T-PFLICHT**, **O-KETTE**, **M-MATRIX**, **X-DOK** passen **nicht** in die vier Quadranten |

**Urteil:** **Nicht empfehlenswert** in der skizzierten Form. **F-WARN** ist außerdem **kein** Diátaxis-Konzept — „Warnung“ ist eine **Admonition** (Rand-/Hervorhebung), nicht ein *documentation type*.

---

### Option B: Diátaxis als Meta-Layer (Ebene 2a + 2b parallel)

| Pro | Contra |
|-----|--------|
| Trennt **„Seitenrolle“** von **„Box-Rolle“** | **Zwei** Ebenen in Ebene 2 — **mehr** zu dokumentieren |
| Entspricht der Realität: **Seite** ≠ **Komponente** | Risiko: **Doppelpflege** („Jede Box noch einen Diátaxis-Typ?“ — **nein**) |

**Urteil:** **Grundsätzlich richtig** — **wenn** `2a` auf **Redaktionseinheit** (**ganze Seite** oder **H2-Hauptabschnitt**, siehe **02f** §3.2 **2a**) angewendet wird und **2b** die **Callouts/Tags** bleiben. **Voraussetzung:** klare Regel: **Diátaxis nie pro Box**; **gemischte** Modi auf **einer** Seite über **mehrere H2** sind **erlaubt**.

---

### Option C: Minimal — aufräumen, Diátaxis nur Inspiration

| Pro | Contra |
|-----|--------|
| **Geringste** Einführungslast | Kein **externes** Raster für IA-Navigation |
| **D-ERKLAER + D-HINWEIS** → **eine** ID + **Schreibregeln** möglich | **T-EXTRA** / **T-VERTIEF** bleiben **Grenzfälle** (Kriterien nötig) |

**Urteil:** **Sicherster Weg** für „weniger Komplexität“ — aber ihr **verzichtet** auf ein **geteiltes Vokabular** mit anderen Doc-Teams (nur intern).

---

### Option D: Synthese (Vorschlag)

1. **Drei Ebenen** behalten — **als Denkmodell**, **ohne** Pflicht-Umbenennung in **C-/F-/P-** vor Session 3.  
2. **Diátaxis** = `Seitenmodus` (einer von vier) — **nur** Ebene 2 „oberhalb“ der Boxen; **ersetzt** keine **D-**\* / **O-**\* . **Für Leser** soll der Modus **erkennbar** sein (vgl. **02f** §3.2 **2a**, §8); **Rollout** kann **nach** C/F/P erfolgen.  
3. **17 → ~12** **Redaktions**-Typen durch **Zusammenführen** wo sinnvoll; **Tokens** im CSS **~10–15** Familien.  
4. **Option B** in **leicht**-Form: **nur** wo es **nutzt** (README, ggf. später Frontmatter).

---

## 2. Empfehlung

**Was ich tun würde (Priorität):**

| Prio | Maßnahme |
|------|----------|
| **P0** | **Session 3:** Komponenten + **Token-Liste** (Farben, Callout-Varianten, Chip-Skala, A4) — **Mapping** `Klassenname → Token`. |
| **P1** | **Taxonomie aufräumen:** **D-ERKLAER** und **D-HINWEIS** **nicht** mit Diátaxis vermischen; optional **D-EXPLAIN** als **Oberbegriff** mit **Unterarten** `definition` / `signpost` **nur in der Doku** (oder Schreibregeln in Session 4). |
| **P2** | **Diátaxis:** Tabelle „**Seite/H2 → S-Modus**“ für **Redaktion**; **Ziel:** dieselben Modi **für Leser sichtbar** (Label/Badge), **nicht** nur interne Tabelle. **HTML/CSS** folgt **Priorität** nach Session-3-C/F/P; **Endzustand** ≠ „nur Doku“. |
| **P3** | **T-EXTRA** vs. **T-VERTIEF:** **Kriterium** festhalten (siehe [02d](P02-04-modell-drei-ebenen.md), §4) — **oder** zu **T-PLUS** zusammenführen mit **Facet** „normativ“ vs. „didaktisch extra“. |

**Warum nicht Option A:** Sie verwechselt **Dokumentationsmodus** mit **UI-Semantik**.

**Warum Option B nur „light“:** Volle **2a+2b** für jede Komponente **überfordert**.

**Warum Option C allein nicht reicht:** Ein **bisschen** Diátaxis (oder ein **Seitenmodus**) hilft **Redaktion** und **Leser-Orientierung** — **wenn** es **nicht** mit den Typ-IDs **konkurriert**.

---

## 3. Konkrete Taxonomie (Vorschlag — so wenig wie nötig)

**Prinzip:** Zwei **Achsen** nicht vermischen: **(A) Thema** · **(B) Seitenmodus (Diátaxis)** · **(C) Komponentenfunktion** · **(D) Darstellung**.

### Ebene 1 — Thema / Domäne (Chips)

| ID | Rolle |
|----|--------|
| **T-SYLLABUS** | CTFL-Pflichtstoff (ehem. T-PFLICHT) |
| **T-PRAXIS** | Berufsfeld, nicht Prüfungskern |
| **T-PLUS** | *Optional:* **ein** Bucket für **T-VERTIEF + T-EXTRA** + **Kriterium** im Text — **oder** beide **behalten**, wenn ihr die Farben **ohne** Diskussion braucht |
| **T-KURS** | MS / MS? — **Attribut**, **kein** „Wissensinhalt“ |

*Anzahl: **3–4** sichtbare Chip-Typen + MS-Badge.*

### Ebene 2a — Seitenmodus (Diátaxis)

**Ein Wert** pro **Redaktionseinheit** (ganze Seite **oder** H2-Hauptabschnitt), **nicht** pro Box — siehe **02f** §3.2 **2a** und **Abschnitt 0b** oben.

| Modus | Wann |
|--------|------|
| **TUTORIAL** | Geführtes Lernen, „folge Schritt für Schritt“ (bei euch **selten** auf ganzer Seite) |
| **HOWTO** | Aufgabe/Artefakt lösen (HA-Web, Teile von **04c**) |
| **REFERENCE** | Nachschlagen — **01a Glossar**, **Tabellen** als „Lexikon“ |
| **EXPLANATION** | Konzeptuelles Verstehen — **01b**, **02c**, **04-testverfahren** |

**Wichtig:** Das ist **orthogonal** zu **D-WARN** / **D-OK**. Eine **EXPLANATION-Seite** kann **warnen** und **Bestätigen**.

### Ebene 2b — Komponenten- & Funktionssemantik (Rest von Session 2, verschlankt)

| Cluster | IDs | Anmerkung |
|---------|-----|-----------|
| **Orientierung** | **O-META**, **O-KETTE**, **O-BEGRIFF** | unverändert |
| **Callouts** | **D-OK**, **D-WARN**, **D-AUTO**, **D-AHA** | klar getrennt |
| **Neutraler Block** | **D-INFO** | *Vorschlag:* **D-ERKLAER** + **D-HINWEIS** → **eine** ID **D-INFO** mit **Redaktionsregel** (*Definition* vs. *Wegweiser*) — **oder** beide **behalten**, wenn ihr **zwei** Styles wollt |
| **Matrix** | **M-MATRIX** | nur **Achsen** / Zellsemantik — **nie** mit T-Chips verwechseln |
| **Kanal / Artefakt** | **X-DOK**, **X-STD** | A4, Projektstandards |

*Zählung Ebene 2b: **3 O-** + **4–5 D-** + **1 M-** + **2 X-** ≈ **13** — **vorher 17**, wenn **D-ERKLAER** und **D-HINWEIS** zusammengeführt werden **oder** als **Untertypen** von **D-INFO** dokumentiert.*

### Ebene 3 — Presentation

Unverändert **Session 2.5** — **P-TABELLE**, **P-SVG**, …; **nicht** als „Typen“ im gleichen Atemzug wie **T-**\* zählen.

---

## 4. Praktischer Test (drei Seiten)

### `01b-grundlagen.html`

| Schicht | Vorher (Session 2) | Nachher (Vorschlag) |
|---------|-------------------|------------------------|
| **1 — Thema** | Implizit Kap. 1 CTFL | **T-SYLLABUS**-Inhalt (kein Chip auf jeder Zeile — **ok**) |
| **2a — Diátaxis** | *(nicht geführt)* | **EXPLANATION** — „Grundlagen **verstehen**“ |
| **2b — Funktion** | O-META, D-ERKLAER | O-META, **D-INFO** (Boxen: Definition/Einordnung) |
| **3 — Presentation** | P-TABELLE, P-SECTION | unverändert |

**Einfacher?** **Konzeptuell ja:** Ihr taggt die **Seite** einmal als **EXPLANATION** statt jede **info-box** semantisch zu überinterpretieren. **Technisch** gleicher Aufwand.

---

### `02c-teststufen.html`

| Schicht | Vorher | Nachher |
|---------|--------|---------|
| **1** | T-*, M-MATRIX | **T-SYLLABUS** / … per Chip; **M-MATRIX** für `stag-*` |
| **2a** | — | **EXPLANATION** — „Zusammenhänge verstehen“; **REFERENCE** für Matrix-Nachschlagen **optional** als zweiter Abschnitt — **oder** **eine** Seite = **EXPLANATION** (reicht) |
| **2b** | D-AHA, D-WARN | **D-AHA**, **D-WARN** (bleiben) |
| **3** | Matrix, SVG, Grids | unverändert |

**Einfacher?** **Nein** für diese Seite — sie ist **inhaltlich** dicht. **Diátaxis** hilft **Lesern** („das ist eine **Verstehen**-Seite“), **nicht** der Token-Arbeit.

---

### `04c-ha5-testfallentwurf.html`

| Schicht | Vorher | Nachher |
|---------|--------|---------|
| **1** | Fallstudie GM | **Thema** + **T-SYLLABUS**-Bezug in **Testfällen** |
| **2a** | — | **HOWTO** (Artefakt: Testfälle **nachvollziehen** / **ausführen**) **oder** **REFERENCE** (Tabellenübersicht) — **eine** Hauptwahl: **HOWTO** passt zur **HA-Strecke** |
| **2b** | O-KETTE, D-HINWEIS, D-OK, D-AUTO, D-ERKLAER | O-KETTE; **D-INFO** für blaue Kette + Erklärungen; **D-OK**, **D-AUTO** |
| **3** | Sections, Tabellen, Karten | unverändert |

**Einfacher?** **Ja**, wenn die **Dokumentenkette** klar **O-KETTE** bleibt und **blaue** Boxen **D-INFO** (statt ERKLAER vs. HINWEIS **streiten**).

---

## 5. Risiken & Grenzen

| Risiko | Beschreibung |
|--------|----------------|
| **Diátaxis-Müdigkeit** | Jede Seite **zwingend** einordnen — **Aufwand**; **gegensteuern** mit **phasenweiser** Einführung **sichtbarer** Labels (**02f** §8) |
| **Falsche Zuordnung** | **REFERENCE** vs. **EXPLANATION** bei Mischseiten (02c) — **grenzwertig** |
| **Doppelarbeit** | **README** sagt Diátaxis, **HTML** zeigt **keinen** Modus — **Drift**; **Ziel:** HTML/Label **alignen** mit Workshop-Tabelle |
| **Holzweg** | **Alle** Probleme in **Taxonomie** lösen wollen — **Session 3** braucht **Tokens**, **nicht** 20 neue Namen |
| **Eigene Vorschläge** | Ich habe **D-INFO** als Merge vorgeschlagen — wenn ihr **zwei** Styles **bewusst** braucht, **bleibt** bei zwei IDs |

---

## 6. Nächste Schritte (weg zu Session 3)

1. **SOLL fest:** **S-***-Modi **für Leser sichtbar** machen (**02f** §3.2 **2a**, §8); **Reihenfolge:** Session 3 zuerst **C/F/P**-Tokens — **S-***-Label-System (Badge/Chrome) **danach** oder **parallel** niedriger Prio — **kein** Widerspruch zu „label by type“.  
2. **Session 3 Artefakt:** `P03-mapping-ist-soll-token.md` (oder gleichwertig): **Komponente** → **CSS-Token** → **SOLL-Code**; **S-***-**Sichtbarkeit** als eigenständiger Abschnitt.  
3. **Pilot:** **eine** Callout-Familie + **eine** Chip-Skala vereinheitlichen (z. B. **warn-box** / **info-box--warn** / **doc-info-box--warn** → **ein** `callout-danger`).  
4. **Session 4:** **Schreibregeln** für **D-INFO** (Definition vs. Wegweiser) **oder** bewusst **zwei** D-IDs behalten.

---

## 7. Shared Mental Model (kurz)

Wir **verwechseln** nicht:

- **„Was für eine **Seite** ist das?“** (Diátaxis / **S-*** — **Leser** soll es **sehen** können)  
- **„Was für eine **Box** ist das?“** (D-/O-*)  
- **„Wovon handelt der **Stoff**?“** (T-*)  
- **„Wie sieht es **aus**?“** (P-*, CSS)

**Einfachheit** entsteht, wenn **Session 3** zuerst **C/F/P** **bindet** (Tokens) — **S-***-**Labels** folgen **ohne** Diátaxis zum **reinen** internen Schema zu machen.

---

*Ende Session 2e — kritische Einordnung Diátaxis (Stand 2026-04-01).*
