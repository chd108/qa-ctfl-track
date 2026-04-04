Datei erstellt: 2026-04-02  
Letzte Aktualisierung: 2026-04-03 — Risiko-Register: **Pilot vs. Vollständigkeit** (HA3-Transfer → [README](README.md), Abschnitt **HA3-Pilot und Transfer**). Zuvor **04d** **A.0.0** C-SYLLABUS + Pilot `.tag--*` `base.css`; Navigationszeile A.0; Phase 3 P0/P1  
Zweck: Navigation zum Design-System-Spec-Cluster **04a–04d**, Risiko-Register, Checklisten, **Rollout-Scope**.  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Spec-Überblick  
Normative Orientierung: [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md); bei Konflikt zuerst Mapping klären.

---

**Einstieg / Living Docs:** [README.md](README.md) — Rollen, Inventar der `.md`-Dateien, Lesereihenfolge, Zielbaum (Phasen).

---

## ⚠️ STRUKTUR-RISIKEN & VEREINFACHUNGS-OPTIONEN

**Stand:** 2026-04-02 — Initiale 5-Dateien-Struktur

**BEKANNTE RISIKEN:**

- **Double Truth:** `P03-mapping-ist-soll-token` vs. **04a–c** — Drift-Gefahr, wenn Tabellen kopiert und später nur eine Seite gepflegt wird.
- **Pilot vs. Vollständigkeit:** **HA3 (04e)** ist **Referenz** für Diátaxis/Komponenten — **nicht** Abschluss einer projektweiten Umsetzung; **offene Transfer-Punkte**, **Anti-Pattern** (Token nur bei passender Rolle) und **bewusst nicht Entschiedenes:** [README.md](README.md) — Abschnitt **„HA3-Pilot und Transfer (Workshop-Leitplanken)“**.
- **Link-Brüche** bei Umbenennung oder Zusammenlegen von Dateien.
- **Scope-Creep:** Fünf Dateien = mehr Pflegefläche als eine Monolith-Datei.

**VEREINFACHUNGS-OPTIONEN (im Verlauf möglich):**

- [ ] **04a–c** in **eine** Datei zusammenlegen.
- [ ] Tabellen aus **04** entfernen, **nur** auf [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md) verweisen (04 = nur Priorität + Detail zu P0).
- [ ] **04e** (S-*) weglassen oder vollständig in diesem Overview integrieren.

**ENTSCHEIDUNG:** Im Verlauf prüfen — **nach erstem Pilot** erneut bewerten.

---

## Component Spec — Mindestinhalt (Checkliste)

Vor Abnahme einer **Component-/Pattern-Spec** (z. B. in **04d**, künftig weitere Cluster) prüfen — **nicht** nur Farben/Tokens:

| Kategorie | Pflichtinhalt (je nach Baustein) |
|-----------|-----------------------------------|
| **Farben / Tokens** | `:root`-Namen, Semantik (C/F/P) |
| **Typografie** | `font-family`, `font-size`, `line-height`, `font-weight` wo relevant |
| **Abstände** | `padding`, `margin`, `gap` (Container & Kinder) |
| **Maße** | `width`/`height` oder `min-*`, ggf. Chip-Geometrie |
| **Radius / Rand** | `border-radius`, `border` |
| **Zustände** | `hover` / `focus-visible` / `active` — oder **bewusst nein** |
| **Schatten / Motion** | `box-shadow`, `transition` — oder **bewusst keine** |
| **Responsive** | Wrap/Breakpoints — oder **bewusst nur Flex-Wrap** |
| **Accessibility** | `role`, `aria-*`, Tastatur, Kontrast-Hinweis |

**Prozess:** Spec als **unvollständig** kennzeichnen, wenn ein Pflichtfeld fehlt („offen: …“). Verweis: [P04-04-ctfl-lernwebsite-spec.md](P04-04-ctfl-lernwebsite-spec.md) Teil B inkl. **B.11** (Visuelle Spezifikation).

---

# Design-System-Spec (Cluster) — Überblick

**Stand:** 2026-04-02 · **Checkliste ergänzt:** 2026-04-03  
**Ort:** `01_Projektsteuerung/designsystem-workshop/`  
**Normatives Mapping (IST→SOLL→Token):** [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md)  
**SOLL-Taxonomie (C/F/P/S):** [P02-06-taxonomie-soll.md](P02-06-taxonomie-soll.md)

---

## Zweck dieses Clusters

Die **Session-3-Tabellen** in **03** bleiben die **maßgebliche** technische Quelle für IST/SOLL/Token.  
Die **04*-Dateien** ergänzen sie um:

- **Navigierbare** Cluster (C / F / P) + **Domain CTFL** (Lernwebsite),
- **Priorität** (P0 Pilot / P1 / —) für die Umsetzungsreihenfolge,
- **Detail-Specs** v. a. für **P0** — ohne jedes Taxonomie-Element voll auszuschreiben.

**Struktur kann sich ändern** — siehe Risiko-Register oben.

---

## Priorität **P0** / **P1** / **—** (einheitlich im Cluster 04)

**Einfach erklärt:** Überall in **04a**, **04b** und **04c** stehen dieselben **Kürzel** — damit nicht drei verschiedene „P0“-Welten entstehen, gilt **projektweit** diese **eine** Einordnung:

| Prio | Was das für die Praxis heißt | Typische Bausteine |
|------|------------------------------|---------------------|
| **P0** | **Zuerst** im CSS-Pilot: ohne diese Teile wirken Navigation, Kontext unter der Nav und Chips nicht wie **ein System**. | z. B. **C-SYLLABUS**, **F-META**, **F-LEGEND**, **P-CHIPS**, **P-CHROME** |
| **P1** | **Direkt danach** oder **parallel**: häufige Muster vereinheitlichen (Kästen, Tabellen, Karten, Raster). | z. B. **F-CHAIN**, **F-INFO**, **P-TABELLE**, **P-KARTEN** |
| **—** | **Später** oder **nur wo nötig** (A4-Sonderfälle, Canvas-Feinschliff, …). | z. B. **F-DOC**, **P-CANVAS** |

Die **Cluster-Dateien** formulieren dasselbe noch **fachlich** (nur C, nur F, nur P) — diese Tabelle ist die **gemeinsame Übersetzung** für alle drei.

---

## Navigation (Cluster-Dateien)

| Datei | Inhalt |
|-------|--------|
| [P04-01-c-domain-tokens.md](P04-01-c-domain-tokens.md) | **C-*** Content/Domäne + Chip-Semantik |
| [P04-02-f-semantic-function.md](P04-02-f-semantic-function.md) | **F-*** Semantik / Funktion (Callouts, meta-bar, …) |
| [P04-03-p-presentation.md](P04-03-p-presentation.md) | **P-*** Presentation / Pattern-Familien |
| [P04-04-ctfl-lernwebsite-spec.md](P04-04-ctfl-lernwebsite-spec.md) | **Domain:** CTFL-Orientierung (Regeln, **A.0** vier Domänen-Codes, Syllabus-Chip-Spec Teil B) |

**Nicht verwechseln:** Die Dateien **04a / 04b / 04c** **hier** sind die **Spec-Cluster** **C-*** / **F-*** / **P-*** (Markdown in diesem Ordner). Das sind **nicht** die HTML-Seiten **`04a-ha4-…`**, **`04b-ha4-…`**, **`04c-ha5-…`** unter `02_Portfolio/QA_Lernwebseite/pages/` (Hausaufgaben). Ausführliche Tabelle: [README.md](README.md) — Abschnitt *Workshop 04a–04c vs. HTML-Seiten*.

**S-* (Diátaxis):** weiterhin nur in [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md) §4; kein separates **04e** — optional später oder in Overview integrieren (siehe Vereinfachungs-Optionen).

---

## Granularität (vereinbart)

- **Alle** C/F/P-Codes: mindestens **eine Tabellenzeile** (in **03**; **04a–c** mit Prioritätsspalte).
- **Detail-Spec** zuerst für **P0** (v. a. **C-SYLLABUS**, **F-META**, Pilot-Chip).
- Keine Pflicht zu **31** gleich langen Einzel-Specs.

---

## Pilot & Status

- **P1 Pilot** (CSS): nach freigegebener Spec — siehe [02_Project_Status.md](../02_Project_Status.md).
- **CTFL/Syllabus-Chip:** **04d** Teil A + B inkl. **B.11** (visuelle Sollwerte meta-bar / Chip).

---

## Rollout-Plan — Scope (Designsystem / CSS)

**Entscheidung:** Zuerst **Lerninhalts-Seiten** (Hauptsystem, kein `doc-a4`-Pflichtmodus), plus **Einstieg** und **Projekt-Standards**. **Hausaufgaben-Web** und **A4-Dokumente** (**X-DOK**) in einer **späteren** Ausbauphase — weniger parallele Muster, klarere Pilot-Iteration.

**Quelle der Dateiliste:** [P02-03-seitenmatrix-ist.md](P02-03-seitenmatrix-ist.md) §1 (23 Seiten = `index.html` + `pages/*.html`).

### Phase A — jetzt (Lerninhalte + Einstieg + Standards)

| # | Pfad (relativ zu `02_Portfolio/QA_Lernwebseite/`) |
|---|---------------------------------------------------|
| 1 | `index.html` |
| 2 | `pages/00b-standards.html` |
| 3 | `pages/01a-glossar.html` |
| 4 | `pages/01b-grundlagen.html` |
| 5 | `pages/01c-testmittel.html` |
| 6 | `pages/01-landkarte.html` |
| 7 | `pages/02a-sdlc-statisch.html` |
| 8 | `pages/02b-sdlc-animiert.html` |
| 9 | `pages/02c-teststufen.html` |
| 10 | `pages/03-statisches-testen.html` |
| 11 | `pages/04-testverfahren.html` |
| 12 | `pages/05-testmanagement.html` |
| 13 | `pages/06-testwerkzeuge.html` |

**Anzahl:** **14** HTML-Dateien (eine Einstiegsseite + **13** Seiten unter `pages/`).

### Phase B — später (Hausaufgaben & A4)

| # | Pfad |
|---|------|
| 1 | `pages/00a-ha-einordnung.html` |
| 2 | `pages/04a-ha4-anforderungsanalyse.html` |
| 3 | `pages/04b-ha4-testbasisanalyse-a4.html` |
| 4 | `pages/04c-ha5-testfallentwurf.html` |
| 5 | `pages/04d-ha5-testfallentwurf-a4.html` |
| 6 | `pages/05a-ha5-testkonzept.html` |
| 7 | `pages/05b-ha5-testkonzept-a4.html` |
| 8 | `pages/06a-ha6-testprotokoll-a4.html` |
| 9 | `pages/06b-ha6-fehlerbericht-a4.html` |
| 10 | `pages/06c-ha6-testabschlussbericht-a4.html` |

**Anzahl:** **10** HTML-Dateien (3 HA-Web mit Hauptsystem-CSS + **1** Einordnung + **6** A4/`doc-a4`).

**Hinweis:** `templates/` und Archiv-Seiten sind **nicht** Teil dieser Matrix; bei Pilot-Erweiterung gesondert einbeziehen.

---

*Ende Overview — Design-System-Spec-Cluster.*
