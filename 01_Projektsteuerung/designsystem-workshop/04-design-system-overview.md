## ⚠️ STRUKTUR-RISIKEN & VEREINFACHUNGS-OPTIONEN

**Stand:** 2026-04-02 — Initiale 5-Dateien-Struktur

**BEKANNTE RISIKEN:**

- **Double Truth:** `03-token-mapping` vs. **04a–c** — Drift-Gefahr, wenn Tabellen kopiert und später nur eine Seite gepflegt wird.
- **Link-Brüche** bei Umbenennung oder Zusammenlegen von Dateien.
- **Scope-Creep:** Fünf Dateien = mehr Pflegefläche als eine Monolith-Datei.

**VEREINFACHUNGS-OPTIONEN (im Verlauf möglich):**

- [ ] **04a–c** in **eine** Datei zusammenlegen.
- [ ] Tabellen aus **04** entfernen, **nur** auf [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md) verweisen (04 = nur Priorität + Detail zu P0).
- [ ] **04e** (S-*) weglassen oder vollständig in diesem Overview integrieren.

**ENTSCHEIDUNG:** Im Verlauf prüfen — **nach erstem Pilot** erneut bewerten.

---

# Design-System-Spec (Cluster) — Überblick

**Stand:** 2026-04-02  
**Ort:** `01_Projektsteuerung/designsystem-workshop/`  
**Normatives Mapping (IST→SOLL→Token):** [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md)  
**SOLL-Taxonomie (C/F/P/S):** [02f-soll-taxonomie-session3-2026-03-30.md](02f-soll-taxonomie-session3-2026-03-30.md)

---

## Zweck dieses Clusters

Die **Session-3-Tabellen** in **03** bleiben die **maßgebliche** technische Quelle für IST/SOLL/Token.  
Die **04*-Dateien** ergänzen sie um:

- **Navigierbare** Cluster (C / F / P) + **Domain CTFL** (Lernwebsite),
- **Priorität** (P0 Pilot / P1 / —) für die Umsetzungsreihenfolge,
- **Detail-Specs** v. a. für **P0** — ohne jedes Taxonomie-Element voll auszuschreiben.

**Struktur kann sich ändern** — siehe Risiko-Register oben.

---

## Navigation (Cluster-Dateien)

| Datei | Inhalt |
|-------|--------|
| [04a-content-domain-tokens-2026-04-02.md](04a-content-domain-tokens-2026-04-02.md) | **C-*** Content/Domäne + Chip-Semantik |
| [04b-semantic-function-2026-04-02.md](04b-semantic-function-2026-04-02.md) | **F-*** Semantik / Funktion (Callouts, meta-bar, …) |
| [04c-presentation-patterns-2026-04-02.md](04c-presentation-patterns-2026-04-02.md) | **P-*** Presentation / Pattern-Familien |
| [04d-domain-ctfl-lernwebsite-2026-04-02.md](04d-domain-ctfl-lernwebsite-2026-04-02.md) | **Domain:** CTFL-Orientierung Lernwebsite (Regeln + Syllabus-Chip-Spec) |

**S-* (Diátaxis):** weiterhin nur in [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md) §4; kein separates **04e** — optional später oder in Overview integrieren (siehe Vereinfachungs-Optionen).

---

## Granularität (vereinbart)

- **Alle** C/F/P-Codes: mindestens **eine Tabellenzeile** (in **03**; **04a–c** mit Prioritätsspalte).
- **Detail-Spec** zuerst für **P0** (v. a. **C-SYLLABUS**, **F-META**, Pilot-Chip).
- Keine Pflicht zu **31** gleich langen Einzel-Specs.

---

## Pilot & Status

- **P1 Pilot** (CSS): nach freigegebener Spec — siehe [02_Project_Status.md](../02_Project_Status.md).
- **CTFL/Syllabus-Chip:** Regeln und Platzhalter-Spec in **04d**, Teil A + B.

---

*Ende Overview — Design-System-Spec-Cluster.*
