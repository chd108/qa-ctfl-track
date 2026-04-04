Datei erstellt: 2026-04-02  
Letzte Aktualisierung: 2026-04-03 — **HA3-Pilot → Transfer:** Leitplanken + **bewusst offene** Punkte (Abschnitt **„HA3-Pilot und Transfer“** unten). Zuvor **2026-04-05** **04e** (**`ha3p-*`**, Pilot **0–6**); [pilot-ha3-content-phasen.md](pilot-ha3-content-phasen.md) · **03** §6 / [P03 §2](P03-mapping-ist-soll-token.md). Zuvor **2026-04-04** Phasen **0–6**; zuvor **2026-04-03** **pilot-ha3-content.txt**; davor **P05**, Aufräum-Plan  
Zweck: Living Documentation — Einstieg in den **Designsystem-Workshop** (Rollen, Inventar, Lesereihenfolge, Zielbaum).  
Klassifizierung: Projektsteuerung / Designsystem-Workshop  
Normative Orientierung: [03_Project_Standards.md](../03_Project_Standards.md) (Metablock, README-Ausnahme); Mapping [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md)

---

# Designsystem-Workshop — Einstieg

**Ort:** `01_Projektsteuerung/designsystem-workshop/`  

Living Documentation zum **Designsystem** der *QA_Lernwebseite* (ISTQB-CTFL-orientiert): Begründung, Taxonomie, **IST→SOLL→Token**, Cluster-Specs, Redaktion — alles versioniert im Repo.

---

## Workshop **04a–04c** vs. HTML-Seiten **`pages/04*-ha*`**

**Das sind zwei verschiedene Welten** — gleiche Buchstaben **04a / 04b / 04c**, anderer Kontext:

| | **Workshop** (`designsystem-workshop/*.md`) | **Lernwebsite** (`02_Portfolio/QA_Lernwebseite/pages/*.html`) |
|---|---------------------------------------------|----------------------------------------------------------------|
| **04a** | **P04-01-c-domain-tokens.md** — Spec-Cluster **C-*** (Content/Domäne, Chips) | z. B. **04a-ha4-anforderungsanalyse.html** — Hausaufgabe **HA4** (Web) |
| **04b** | **P04-02-f-semantic-function.md** — Spec-Cluster **F-*** (Semantik, meta-bar, Callouts) | z. B. **04b-ha4-testbasisanalyse-a4.html** — HA4 **A4**-Dokument |
| **04c** | **P04-03-p-presentation.md** — Spec-Cluster **P-*** (Presentation, Chrome, Tabellen) | z. B. **04c-ha5-testfallentwurf.html** — HA5 Testfallentwurf (Web) |

- **Workshop-Dateien 04a–04c** sind **Steuerungs-/Mapping-Dokumente** (C/F/P-Taxonomie). Sie gehören **nicht** zur „Hausaufgaben-Strecke später“ im Sinne des **Rollouts** — sie beschreiben **alle** Codes und sind für **Phase A** (Lerninhalte) genauso relevant wie für **Phase B** (HA/A4).  
- **Rollout „zuerst Lerninhalte, HA/A4 später“** betrifft **welche HTML-Seiten** ihr beim **CSS-Pilot** zuerst anfasst — **nicht** das Weglassen der Workshop-Cluster-Dateien.

### HA3-Pilot und Transfer (Workshop-Leitplanken)

**Sinn:** **04e** ist **Referenz** für **Diátaxis-Rollen** + **Komponentenstil** (Tokens, `ha3p-*`, [pilot-ha3-content-phasen.md](pilot-ha3-content-phasen.md)); **stückweiser** Transfer auf **weitere** Lern-/HA-Seiten und **Einbindung** in **P02** (Ebenen, Diátaxis), **P03** (IST→SOLL→Token), **P04** (Priorität/Rollout), **03** §6 — **kein** Big Bang, **kein** zweites System.

**Bewusst nicht abschließend / vor Transfer klären:** Abnahme pro Seite (nur Optik vs. Token + Mapping in **P03**)? **Web vs. A4** gleiche Semantik oder getrennt? **Zentral** in `base.css` vs. seitenlokal — wann auslagern? **HA3 beweist nicht** „ganzes Projekt = voll Diátaxis“ (vgl. [P02-05-diataxis-kritik.md](P02-05-diataxis-kritik.md)).

**Lektion (Anti-Pattern):** **Semantische** Tokens (z. B. „Lösungskopf“) **nur** dort, wo die **fachliche Rolle** passt — **gleicher Klassen-/Modifier-Name** kann auf **anderen** Seiten **andere** Bedeutung haben (Beispiel: `section--e4` = Kapitel/Landkarte vs. Feature-Band vs. HA3-Lösungs-Hülle). **Vor** Wiederverwendung **Bedeutung** prüfen, nicht nur **Farbe**.

**Warum das schriftlich steht:** Ohne diese Zeilen wirkt die Doku wie „alles geklärt“ — **Transfer und Risiken** sollen **sichtbar** bleiben (Lebendige Doku, nicht Schein-Vollständigkeit).

---

## Lesereihenfolge (empfohlen)

1. **[P01-vision-ziele.md](P01-vision-ziele.md)** — Vision, Nutzen, Informationsarchitektur.  
2. **[P04-00-spec-overview.md](P04-00-spec-overview.md)** — **Navigation** zum Spec-Cluster **04a–04d**, Risiko-Register, Checklisten.  
3. **[P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md)** — **maßgebliche Tabellen** IST / SOLL / Token (bei Widerspruch zu Einzeldateien zuerst hier klären, dann Anpassung).  
4. Nach Bedarf: **04d** (Domain CTFL Lernwebsite), **04a–04c** (C / F / P), **05** (Redaktion).

**Redaktion ([P05-redaktion-harmonisierung.md](P05-redaktion-harmonisierung.md)):** u. a. **§ CTFL-Lehrplan vs. Portfolio (HA5)** — feste **Zwei-Ebenen-Regel** (Syllabus-Kapitel vs. Nav/Dokumente auf der Website); Verankerung auf **04c** / **05a**; ergänzend **§ Dokumentenkette (F-CHAIN)**.

---

## Rollen der Dateien (Inventar Phase 1)

| Rolle | Bedeutung |
|-------|-----------|
| **Einstieg** | Erste Anlaufstelle, Navigation |
| **Konzept** | Begründung, Modelle, Taxonomie-Vorbereitung |
| **IST** | Bestandsaufnahme / Analyse (historisch vergleichbar) |
| **Normativ** | Umsetzungsnahe Vorgaben, Mapping, Cluster-Specs |
| **Redaktion** | Textliche Harmonisierung, nicht primär CSS |

| Datei | Rolle | Kurz |
|-------|--------|-----|
| [P01-vision-ziele.md](P01-vision-ziele.md) | Konzept | Vision & Ziele (Session 1) |
| [P02-01-taxonomie-information.md](P02-01-taxonomie-information.md) | Konzept | T-/O-/D-/M-/X-Typen (Session 2) |
| [P02-02-darstellung-patterns.md](P02-02-darstellung-patterns.md) | Konzept | Darstellung vs. Semantik (Session 2b) |
| [P02-03-seitenmatrix-ist.md](P02-03-seitenmatrix-ist.md) | IST | Seitenmatrix `index` + `pages/*.html` |
| [P02-04-modell-drei-ebenen.md](P02-04-modell-drei-ebenen.md) | Konzept | Content → Semantic → Presentation |
| [P02-05-diataxis-kritik.md](P02-05-diataxis-kritik.md) | Konzept | Diátaxis orthogonal zu Callouts |
| [P02-06-taxonomie-soll.md](P02-06-taxonomie-soll.md) | Konzept → Normativ | SOLL C/F/P/S, Brücke zu Session 3 |
| [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md) | Normativ | **IST→SOLL→Token**-Tabellen |
| [P04-00-spec-overview.md](P04-00-spec-overview.md) | Einstieg | Cluster-Überblick, Risiken, Links zu 04a–04d |
| [P04-01-c-domain-tokens.md](P04-01-c-domain-tokens.md) | Normativ | **C-*** Content / Domäne |
| [P04-02-f-semantic-function.md](P04-02-f-semantic-function.md) | Normativ | **F-*** Semantik / Funktion |
| [P04-03-p-presentation.md](P04-03-p-presentation.md) | Normativ | **P-*** Presentation |
| [P04-04-ctfl-lernwebsite-spec.md](P04-04-ctfl-lernwebsite-spec.md) | Normativ | Domain CTFL, Regeln, **B.11** u. a. |
| [P05-redaktion-harmonisierung.md](P05-redaktion-harmonisierung.md) | Redaktion | Begriffe, meta-bar, K-Stufen |
| [IST-01-analyse-website-meta.md](IST-01-analyse-website-meta.md) | IST | Meta-Stichproben, Roadmap-Bezug |
| [IST-02-analyse-komponenten.md](IST-02-analyse-komponenten.md) | IST | Komponenten-Inventar (kanonisch im Ordner) |
| [pilot-ha3-content-phasen.md](pilot-ha3-content-phasen.md) | Pilot / Arbeitsdokument | HA3 **04e**: Muster **Phasen 0–6** + Arbeits-Tabelle Content → Struktur (iterativ) |
| [pilot-ha3-content.txt](pilot-ha3-content.txt) | Pilot / Input Phase 0 | HA3 **04e**: Roher Lösungstext (Aufgabe, Code, Coverage) + SVG-Referenz — **Nachbar** der `pilot-ha3-content-phasen.md` |

**Hinweis:** `z_PROMPT-cursor-session-2d.txt` ist **Hilfsmittel** (Prompt), **keine** normative Spezifikation.

---

## Aufräum-Plan (Empfehlung)

**Wo wir stehen:** Phasen **1–3** haben den Ordner **lesbarer** gemacht (Köpfe, eine **Prio**-Sprache, **Rollout**, keine falsche „zweite Wahrheit“ in 04 vs. 03). **Schritt C** (eindeutige Workshop-Dateinamen) ist mit der **Konvention P01 / P02-* / P03 / P04-* / P05 / IST-*** (2026-04) **umgesetzt**. **Schritt B** (die drei Cluster-Dateien **P04-01 / P04-02 / P04-03** zu **einer** Datei zusammenlegen) ist **bewusst verworfen:** Nutzen rechtfertigt den Link- und Review-Aufwand nicht, die Trennung bleibt **parallel zu P03** §1/§2/§3 **übersichtlich**. **Phase 4** (Aufräum-Plan) gilt damit als **abgeschlossen** — ohne weitere strukturelle Pflicht aus diesem Plan.

**Ziel (erreicht):** Klarere **Namen** und **Verweise**; **keine** zusätzliche Monolith-Datei für C/F/P.

| Schritt | Was | Warum (einfach) | Risiko |
|---------|-----|------------------|--------|
| **A — Link-Inventar** | Repo durchsuchen: wer verlinkt auf `designsystem-workshop/` (Pfade in **02_Project_Status**, **03_Project_Standards**, **Charter**, ggf. **QA_Lernwebseite/README**)? Liste anlegen. | Vor jedem Umbenennen oder Zusammenlegen muss man wissen, **was** angepasst werden muss. | gering |
| **B — Zusammenlegen P04-01+P04-02+P04-03** | **Verworfen (2026-04):** Die drei Dateien **bleiben getrennt**; Zusammenlegen wäre **mittlerer** Aufwand (Links, Anker, Reviews) bei **geringem** Zusatznutzen nach **C**. | Entscheidung dokumentiert; keine offene Option mehr. | — |
| **C — Umbenennung / klare Namen** | **Erledigt (2026-04):** stabile Präfixe **P04-01 … P04-04** u. a. — **keine** Namenskollision mit **`pages/04a-ha4…`** auf der Ebene der Workshop-Dateinamen. | Lesbarkeit, Suche, einheitliche Verweise. | (war: mittel bis hoch) |
| **D — Nicht anfassen (Empfehlung vorerst)** | **Session-2-Kette** (**P02-01**–**P02-06**) als **einzelne** Dateien lassen — **Denk-/Arbeitsgeschichte**; Zusammenlegen lohnt selten. | Historische Lesbarkeit bleibt; weniger „alles in einem Riesendokument“. | — |

**Vorgehen (Stand Abschluss Phase 4):**

1. **Schritt A** — Link-Inventar (erste Fassung **unten erledigt**).  
2. **Schritt B** — **verworfen** (siehe Tabelle).  
3. **Schritt C** — **abgeschlossen** durch die **P-/IST-**-Umbenennung; weitere Umbenennungen nur bei **neuem** fachlichen Bedarf.

### Link-Inventar (Schritt A — erste Fassung, Stand 2026-04-02)

*Diese Tabelle nennt **Repo-Stellen**, die auf den Workshop-Ordner zeigen. Bei künftigen **Umbenennungen** oder strukturellen Änderungen hier und in den verlinkten Markdown-Dateien nachziehen.*

| Quelle | Was verlinkt wird (Beispiele) |
|--------|--------------------------------|
| [02_Project_Status.md](../02_Project_Status.md) | README, 03, 04-overview, 02c, 05, Sessions, Analysen, viele Einzeldateien |
| [03_Project_Standards.md](../03_Project_Standards.md) | `designsystem-workshop/README.md` (Metablock-Ausnahme) |
| [QA_Lernwebseite/README.md](../../02_Portfolio/QA_Lernwebseite/README.md) | P04-04, P03, IST-Analysen, `02_Project_Status` |
| [base.css](../../02_Portfolio/QA_Lernwebseite/assets/css/base.css) | Kommentar: P03-Mapping, P04-04-Spec |
| **Dieser Ordner** (`designsystem-workshop/*.md`) | untereinander (relative Links) |

**Hinweis:** [01_Project_Charter.md](../01_Project_Charter.md) und Root-**README** verlinken den Workshop-Ordner **nicht** direkt (Stand Suche 2026-04-02).

**Zielbaum Phase 4** (unten): **A** und **C** erledigt; **B** **verworfen** — Phase **4** ist **abgeschlossen**.

---

## Zielbaum — nächste Ausbaustufen (mit Projekt abarbeiten)

- **Phase 1 (erledigt):** Inventar + dieses README; **Metablock Variante B** in allen Workshop-`.md` (inkl. **03**, **04a–04d**, Analysen).  
- **Phase 2 (erledigt):** Abschnitt **Rollout-Plan — Scope** in [P04-00-spec-overview.md](P04-00-spec-overview.md) — **Phase A** = Lerninhalte + `index` + `00b`; **Phase B** = HA-Web + A4 (siehe Tabellen dort, Grundlage **02c** §1).  
- **Phase 3 (erledigt):** **F-LEGEND** in **04b**-Prioritätstabelle; **gemeinsame P0/P1-Erklärung** in [P04-00-spec-overview.md](P04-00-spec-overview.md); **§6** in **03** mit Verweis **Rollout**; **04c** Sortierhinweis vs. **03** §3.  
- **Phase 4 (erledigt — Abschnitt *Aufräum-Plan* oben):** **A** erledigt; **C** (**Klarnamen P04-*/IST-***) erledigt (2026-04); **B** (Zusammenlegen **P04-01–03**) **bewusst verworfen** (2026-04). Keine weiteren Pflichtschritte aus diesem Plan.

---

## Normativität & Änderungen

- **03** ist die **zentrale Mapping-Datei**, aber **nicht unveränderlich** — Änderungen bewusst committen; bei Abweichung zu **04\*** zuerst **03** anpassen oder Overview aktualisieren.  
- Projektsteuerung und Status: [02_Project_Status.md](../02_Project_Status.md).

---

*Ende README — Designsystem-Workshop.*
