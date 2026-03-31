# Session 2f: SOLL-Taxonomie & Weg zu Session 3 (Top-down)

**Stand:** 2026-03-30  
**Workshop:** Designsystem — **SOLL** vor **IST** (Fundament für Design-Tokens)  
**Vorgänger:** [01-vision-ziele-2026-03-30.md](01-vision-ziele-2026-03-30.md), [02-informations-taxonomie-2026-03-30.md](02-informations-taxonomie-2026-03-30.md), [02b-darstellungs-patterns-2026-03-30.md](02b-darstellungs-patterns-2026-03-30.md), [02c-vollstaendige-seitenmatrix-2026-03-30.md](02c-vollstaendige-seitenmatrix-2026-03-30.md), [02d-drei-ebenen-modell-2026-03-30.md](02d-drei-ebenen-modell-2026-03-30.md), [02e-diataxis-integration-kritisch-2026-03-30.md](02e-diataxis-integration-kritisch-2026-03-30.md)

**Hinweis:** Im Workshop-Ordner gibt es **keine** Datei `02a`; die Kette ist **02 → 02b → 02c → 02d → 02e → 02f**.

---

## 0. Ausgangslage (User-Erkenntnis)

> „Ich weiß nicht, welche **Komponententypen** ich wirklich haben **will** und **brauche** — das **SOLL** ist unklar.“

**Diese Datei beantwortet:** Was **soll** eine **professionelle** QA-Lernwebsite **systematisch** können — **bevor** IST aufgeräumt wird — und wie das **Session 3** (Tokens) speist.

---

## 1. Haben wir SOLL schon definiert?

| Quelle | Was sie liefert | Reicht als „Komponenten-SOLL“? |
|--------|-----------------|--------------------------------|
| **Session 1** ([01-vision-ziele](01-vision-ziele-2026-03-30.md), Charter, README) | **Warum** die Site existiert: CTFL-Kern, Orientierung, Visualisierung, HA/Portfolio, **zwei Kanäle** (Web + A4), IEEE/ISO als **strukturierende** Referenz für Artefakte | **Ja** für **strategische** Anforderungen — **nein** für eine **geschlossene** Liste von UI-/Dokument-Komponententypen |
| **Session 2** §4 „Soll-Vorschlag“ ([02-informations-taxonomie](02-informations-taxonomie-2026-03-30.md)) | **Prioritäten** (P0/P1/P2) für **Taxonomie-Bündelung** (Chips, Callouts, …) | **Teil-SOLL** auf **Semantik-Ebene**, **kein** vollständiges **Komponentenverzeichnis** |
| **Session 2d** §6 | Optional **C-***/**F-***/**P-** Namensvorschlag | **Konzeptionell** hilfreich — **nicht** beschlossenes Projekt-SOLL |
| **Session 2e** | Diátaxis **orthogonal** zu D-*; **kein** Ersatz für Callouts | **Klärung** der Rollen — **kein** SOLL-Katalog |
| **02b** | **IST-Patterns** (P-TABELLE, P-SVG, …) | **Darstellung IST**, nicht SOLL-Minimum |
| **02c** | **IST** pro Seite | Mapping-Ziel, **kein** SOLL |

**Fazit:** Es fehlt eine **einzige**, **explizite** **SOLL-Definition**: *Welche **Kategorien** von Bausteinen** braucht diese Website **fachlich und didaktisch**, unabhängig vom heutigen CSS?* — Diese Datei **02f** schließt die Lücke.

---

## 2. Methodik: Top-down & Fundierung

**Top-down:** Von **Lernzielen und Standards** (Charter, README, [03_Project_Standards.md](../03_Project_Standards.md)) → **Schichten** (Session 2d) → **minimale Typmenge** → **Session 3 = Tokens + Komponenten** mappen.

**Wissenschaftlich / Best-Practice-Bezüge (kurz, ohne Spekulation):**

| Bezug | Nutzen für SOLL |
|--------|------------------|
| **Informationsarchitektur** — Inhalt getrennt von Darstellung; Struktur vor Oberfläche (vgl. etablierte Content-/IA-Literatur, [02d](02d-drei-ebenen-modell-2026-03-30.md) §1) | Begründet **drei Schichten** (Domäne → Funktion → Darstellung). |
| **[Diátaxis](https://diataxis.fr/)** (Procida) | Vier **Seiten-/Dokumentmodi** (Tutorial, How-to, Reference, Explanation) — **optional** auf **Seite**-Ebene ([02e](02e-diataxis-integration-kritisch-2026-03-30.md)). |
| **Technische Dokumentation / Testdokumentation** | Im Projekt: **IEEE 829** / **ISO/IEC/IEEE 29119-3** als **Struktur** für Testartefakte (Charter/Standards — **Lernkontext**, keine Vollnorm). Begründet **formale Dokument-Komponenten** (A4-Modus), nicht die **CTFL-Kapiteltexte**. |
| **Barrierefreiheit** | Für **Presentation**: Kontrast, Fokus, semantisches HTML — **W3C WAI** / WCAG als **Qualitätsrahmen** für Token-Entscheide (Farben, Schriftgrößen), nicht als neue „Typ-ID“. |

**E-Learning:** Es gibt **kein** einzelnes verbindliches „ISO-Schema“ für **alle** privaten Kurswebsites; sinnvoll sind **Diátaxis** + **didaktische Bausteine** (Orientierung, Übung, Feedback) — bei euch **teilweise** durch HA und **Callouts** abgedeckt.

---

## 3. SOLL: Was **braucht** diese Website (professionelles Minimum)?

Abgeleitet aus **Session 1** + Charter/README + den **Rollen** der drei Ebenen.

### 3.1 Ebene 1 — Content / Thematische Domäne (**WAS** ist der Stoff?)

Eine QA-Lernwebsite mit eurem Auftrag **soll** unterscheiden können:

| SOLL-Kategorie | Code (Vorschlag) | Begründung |
|----------------|------------------|------------|
| Prüfungskern (Syllabus) | **C-SYLLABUS** | Charter: CTFL als **normativer Kern** |
| Berufsfeld / Nicht-Prüfungskern | **C-PRAXIS** | Berufsnähe, explizit in Vision |
| Vertiefung / Norm-Spezial | **C-ADV** | Normen „einordnen“ — [Charter §2](../01_Project_Charter.md) |
| Didaktische Ergänzung / Kontext | **C-EXTRA** | Motivation, Randmodelle — Session 2 |
| Fallstudie / Traceability-Story | **C-CASE** | GroceryMate HA4–HA6 — README |
| Projekt- & Engineering-Meta | **C-PROJEKT** | Standards-Seite, Repo — nicht CTFL-Kapitel |
| Curriculum-Provenienz (optional) | **attr:curriculum** | MS / MS? — **Attribut**, kein „Wissens“-Typ ([02e](02e-diataxis-integration-kritisch-2026-03-30.md)) |

**Anzahl (Ebene 1):** **6 Domänen** + **1 Attribut** — oder **4 Chip-Farben** + Badge, wenn **C-ADV** und **C-EXTRA** getrennt bleiben sollen (wie heute).

### 3.2 Ebene 2 — Semantic / Funktion (**WOZU** dient das Element?)

**2a — Seitenmodus (optional, [Diátaxis](https://diataxis.fr/))**

| SOLL | Code |
|------|------|
| Geführt lernen | **S-TUTORIAL** |
| Aufgabe / Artefakt | **S-HOWTO** |
| Nachschlagen | **S-REFERENCE** |
| Konzepte verstehen | **S-EXPLAIN** |

**Genau ein** Modus pro Seite (Redaktion), siehe [02e](02e-diataxis-integration-kritisch-2026-03-30.md).

**2b — Komponentenfunktionen (Callouts, Rahmen, Spezial)**

| SOLL | Code | Entspricht (Session 2, grob) |
|------|------|------------------------------|
| Seiten-/Kapitelkontext | **F-META** | O-META |
| Dokumenten-/HA-Kette | **F-CHAIN** | O-KETTE |
| Begriff klären (inkl. Screen-only vor Druck) | **F-TERM** | O-BEGRIFF |
| Neutraler Infoblock / Wegweiser | **F-INFO** | D-ERKLAER + D-HINWEIS (eine Familie, ggf. Unterarten in Doku) |
| Erfolg / Bestätigung | **F-SUCCESS** | D-OK |
| Warnung / Risiko | **F-CAUTION** | D-WARN |
| Merkpunkt / Einsicht | **F-INSIGHT** | D-AHA |
| Automatisierung / Tool | **F-AUTO** | D-AUTO |
| Matrix-Achse (nicht Syllabus-Chip) | **F-AXIS** | M-MATRIX |
| Formales Abgabe-/Report-Layout | **F-DOC** | X-DOK (Kanal) |
| Projekt-Standards-Checkliste | **F-STD** | X-STD |

**Anzahl (Ebene 2b):** **11** Funktionscodes — **schlanker** als 17, weil **D-ERKLAER/D-HINWEIS** zu **F-INFO** zusammengeführt sind (optional getrennt halten, wenn ihr **zwei** Styles **bewusst** braucht).

### 3.3 Ebene 3 — Presentation (**WIE** sieht es aus?)

SOLL aus **02b** + Session-2-Priorität — **keine** „50 Typen“, sondern **Pattern-Familien**:

| SOLL-Pattern-Familie | Session-2.5 / 02b |
|----------------------|-------------------|
| Fließtext + Überschriften | Basis-Typografie |
| **Section**-Rahmen (Kapitel-/Blockcontainer) | P-SECTION |
| **Vergleichs- / Datentabellen** | P-TABELLE |
| **Matrix / Spezialraster** | P-TABELLE / P-GRID |
| **Diagramm** (SVG / Canvas / animiert) | P-SVG / P-CANVAS |
| **Karten-Raster** (Einstieg, HA, Module) | P-KARTEN |
| **Chip-/Tag-Zeile** (Syllabus-Farben) | P-CHIPS |
| **Callout** (ein Satz Varianten an **F-***) | P-CALLOUT-* |
| **Dokument A4** | P-DOC-A4 |
| **Navigation / Meta-Leiste** | P-CHROME |

**Anzahl (Ebene 3):** **~10** Pattern-Familien — in Session 3 als **Komponenten + Token** konkretisiert.

---

## 4. SOLL-Taxonomie — kompakte Gesamtliste

**Zählweise:** Domäne **C-*** (6+1) · Seitenmodus **S-*** (4, optional) · Funktion **F-*** (11) · Darstellung **P-*** (~10) — **nicht** alles ist ein eigenes CSS-Präfix; **C/F/S** sind **semantische** Zielnamen, **P-** mappt auf **Komponenten**.

| Schicht | Anzahl (Ziel) | Rolle in Session 3 |
|---------|---------------|---------------------|
| **C-*** | 6 + Attribut | **Farb-Tokens** Chips, ggf. Badge |
| **S-*** | 4 | **Kein** Pflicht-CSS — Redaktion/README; optional später `data-page-mode` |
| **F-*** | 11 | **Callout-Varianten**, Meta, Kette, Matrix-Achse, Kanal |
| **P-*** | ~10 | **Layout-/Komponenten-Tokens** (Spacing, Radius, Tabellenkopf, …) |

**Wirklich nötig für „Designsystem light“:** **~15–25 Token-Namen** im Stylesheet (nicht 50 Typ-IDs).

---

## 5. Verhältnis zu Session 2 (17 Typ-IDs)

| Session-2-ID | SOLL-Ziel (02f) |
|--------------|-----------------|
| T-PFLICHT … T-EXTRA, T-KURS | **C-*** + **attr:curriculum** |
| O-META, O-KETTE, O-BEGRIFF | **F-META**, **F-CHAIN**, **F-TERM** |
| D-* | **F-INFO**, **F-SUCCESS**, **F-CAUTION**, **F-INSIGHT**, **F-AUTO** |
| M-MATRIX | **F-AXIS** |
| X-DOK, X-STD | **F-DOC**, **F-STD** (+ **P-DOC-A4**) |

**IST→SOLL:** Nächster Schritt = **Mapping-Tabelle** (Session 3): `bestehende Klasse` → `Token` + optional `F-*` / `C-*`.

---

## 6. Weg zu Session 3 (konkret)

1. **02f** als **normatives SOLL** für Workshop und Session 3 verwenden (diese Datei).  
2. **Session 3 Artefakt:** `03-token-mapping-…md` (oder gleichwertig): Spalten **Komponente / Pattern**, **SOLL-Code (C/F/P)**, **IST (CSS-Klassen)**, **Token-Name**.  
3. **02e nicht duplizieren:** Diátaxis bleibt in **02e**; **02f** verankert **S**-* nur als **SOLL-Zeile**.  
4. **Charter/README:** Keine Änderung zwingend nötig — **02f** ist die **Designsystem-spezifische** Verdichtung.

---

## 7. Essenz (Shared Mental Model)

- **SOLL** war **teilweise** in Vision + Session 2 §4 angedeutet — **nicht** als **ein** Komponenten-SOLL.  
- **Professionell** für euch heißt: **Syllabus klar**, **Praxis abgegrenzt**, **Story HA**, **Normen referenziert**, **Artefakte** druckbar, **Orientierung** in Navigation — das **übersetzt** sich in **C-** + **F-** + **P-** + optional **S-**.  
- **Session 3** baut **P-** und **visuelle C-/F-Zuordnung** — **nicht** 17× Umbenennung im HTML an Tag eins.

---

## 8. Offene Punkte (bewusst)

- **F-INFO** eine oder zwei **visuelle** Varianten (Definition vs. Wegweiser)? — **Session 4** Schreibregeln oder zwei Token.  
- **S-*** in HTML **persistent** machen oder nur **Dokumentation**? — **Empfehlung:** erst **Dokumentation**, keine Blockade für CSS.

---

*Ende Session 2f — SOLL-Taxonomie & Brücke zu Session 3 (2026-03-30).*
