Datei erstellt: 2026-04-02  
Letzte Aktualisierung: 2026-04-02 — **Aufräum-Plan / Phase 4:** Schritt **C** (Klarnamen) als erledigt dokumentiert; **B** (optional Zusammenlegen P04-01–03) bewusst offen; zuvor **Umbenennung** aller Workshop-`.md` (Konvention P01/IST/P04/P05); Verweise im Repo angepasst; **02_Project_Status** nachgezogen; zuvor Phase 3 Doku  
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

---

## Lesereihenfolge (empfohlen)

1. **[P01-vision-ziele.md](P01-vision-ziele.md)** — Vision, Nutzen, Informationsarchitektur.  
2. **[P04-00-spec-overview.md](P04-00-spec-overview.md)** — **Navigation** zum Spec-Cluster **04a–04d**, Risiko-Register, Checklisten.  
3. **[P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md)** — **maßgebliche Tabellen** IST / SOLL / Token (bei Widerspruch zu Einzeldateien zuerst hier klären, dann Anpassung).  
4. Nach Bedarf: **04d** (Domain CTFL Lernwebsite), **04a–04c** (C / F / P), **05** (Redaktion).

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

**Hinweis:** `z_PROMPT-cursor-session-2d.txt` ist **Hilfsmittel** (Prompt), **keine** normative Spezifikation.

---

## Aufräum-Plan (Empfehlung)

**Wo wir stehen:** Phasen **1–3** haben den Ordner **lesbarer** gemacht (Köpfe, eine **Prio**-Sprache, **Rollout**, keine falsche „zweite Wahrheit“ in 04 vs. 03). **Schritt C** (eindeutige Workshop-Dateinamen statt verwechselbarer `04a-…` / Datums-Suffixe) ist mit der **Konvention P01 / P02-* / P03 / P04-* / P05 / IST-*** (2026-04) **umgesetzt** — inklusive repo-weiter Link-Anpassung. **Noch offen** ist nur eine **freiwillige Verdichtung** durch **Zusammenlegen** der drei Cluster-Dateien **P04-01 / P04-02 / P04-03** (früher Schritt **B**): mehr Pflege in einem Rutsch, kein struktureller Zwang.

**Ziel:** Entweder **bewusst bei der aktuellen Datei-Anzahl** bleiben **oder** **B** angehen, ohne Inhalt zu verlieren — mit **klarem** Ablauf und **Links**, die nicht kaputt gehen.

| Schritt | Was | Warum (einfach) | Risiko |
|---------|-----|------------------|--------|
| **A — Link-Inventar** | Repo durchsuchen: wer verlinkt auf `designsystem-workshop/` (Pfade in **02_Project_Status**, **03_Project_Standards**, **Charter**, ggf. **QA_Lernwebseite/README**)? Liste anlegen. | Vor jedem Umbenennen oder Zusammenlegen muss man wissen, **was** angepasst werden muss. | gering |
| **B — Optional: P04-01+P04-02+P04-03 zusammenlegen** | Eine Datei z. B. mit drei großen Kapiteln **C / F / P**; Inhalt aus den jetzigen drei Dateien **verschieben**; alte drei Dateien **löschen** oder nur noch **Weiterleitungshinweis** (ein Satz + Link). | **Weniger** Dateien zum Pflegen; **ein** Ort für „Priorität pro Cluster“. | mittel (viele Links aktualisieren) |
| **C — Umbenennung / klare Namen** | **Erledigt (2026-04):** stabile Präfixe **P04-01 … P04-04** u. a. — **keine** Namenskollision mit **`pages/04a-ha4…`** auf der Ebene der Workshop-Dateinamen. | Lesbarkeit, Suche, einheitliche Verweise. | (war: mittel bis hoch) |
| **D — Nicht anfassen (Empfehlung vorerst)** | **Session-2-Kette** (**P02-01**–**P02-06**) als **einzelne** Dateien lassen — **Denk-/Arbeitsgeschichte**; Zusammenlegen lohnt selten. | Historische Lesbarkeit bleibt; weniger „alles in einem Riesendokument“. | — |

**Vorgehen:**

1. **Schritt A** — Link-Inventar (erste Fassung **unten erledigt**).  
2. **Schritt B** — **nur** bei Bedarf und mit **Go**: ein **einziger** Commit mit allen Link-Fixes; sonst **bewusst offen lassen** (drei Dateien sind mit **P03**-Verweisen gut handhabbar).  
3. **Schritt C** — siehe Tabelle: **abgeschlossen** durch die **P-/IST-**-Umbenennung; weitere Umbenennungen nur bei neuem Bedarf.

### Link-Inventar (Schritt A — erste Fassung, Stand 2026-04-02)

*Diese Tabelle nennt **Repo-Stellen**, die auf den Workshop-Ordner zeigen. Bei **Umbenennung** oder **Zusammenlegen** von Dateien hier und in den verlinkten Markdown-Dateien nachziehen.*

| Quelle | Was verlinkt wird (Beispiele) |
|--------|--------------------------------|
| [02_Project_Status.md](../02_Project_Status.md) | README, 03, 04-overview, 02c, 05, Sessions, Analysen, viele Einzeldateien |
| [03_Project_Standards.md](../03_Project_Standards.md) | `designsystem-workshop/README.md` (Metablock-Ausnahme) |
| [QA_Lernwebseite/README.md](../../02_Portfolio/QA_Lernwebseite/README.md) | P04-04, P03, IST-Analysen, `02_Project_Status` |
| [base.css](../../02_Portfolio/QA_Lernwebseite/assets/css/base.css) | Kommentar: P03-Mapping, P04-04-Spec |
| **Dieser Ordner** (`designsystem-workshop/*.md`) | untereinander (relative Links) |

**Hinweis:** [01_Project_Charter.md](../01_Project_Charter.md) und Root-**README** verlinken den Workshop-Ordner **nicht** direkt (Stand Suche 2026-04-02).

**Zielbaum Phase 4** (unten): Schritt **A** gilt mit dieser Tabelle als **erste Runde erledigt**; **C** ist mit der **P-/IST-Umbenennung** erledigt; **B** bleibt **optional** bis zu eurem **Go**.

---

## Zielbaum — nächste Ausbaustufen (mit Projekt abarbeiten)

- **Phase 1 (erledigt):** Inventar + dieses README; **Metablock Variante B** in allen Workshop-`.md` (inkl. **03**, **04a–04d**, Analysen).  
- **Phase 2 (erledigt):** Abschnitt **Rollout-Plan — Scope** in [P04-00-spec-overview.md](P04-00-spec-overview.md) — **Phase A** = Lerninhalte + `index` + `00b`; **Phase B** = HA-Web + A4 (siehe Tabellen dort, Grundlage **02c** §1).  
- **Phase 3 (erledigt):** **F-LEGEND** in **04b**-Prioritätstabelle; **gemeinsame P0/P1-Erklärung** in [P04-00-spec-overview.md](P04-00-spec-overview.md); **§6** in **03** mit Verweis **Rollout**; **04c** Sortierhinweis vs. **03** §3.  
- **Phase 4 (teilweise — Abschnitt *Aufräum-Plan* oben):** **A** erledigt; **C** (**Klarnamen P04-*/IST-***) erledigt (2026-04). **Optional:** **B** (Zusammenlegen **P04-01–03**) nur mit **Go** und einem Commit für alle Links. Phase 4 gilt als **abgeschlossen**, wenn **B** bewusst **verworfen** oder **umgesetzt** ist.

---

## Normativität & Änderungen

- **03** ist die **zentrale Mapping-Datei**, aber **nicht unveränderlich** — Änderungen bewusst committen; bei Abweichung zu **04\*** zuerst **03** anpassen oder Overview aktualisieren.  
- Projektsteuerung und Status: [02_Project_Status.md](../02_Project_Status.md).

---

*Ende README — Designsystem-Workshop.*
