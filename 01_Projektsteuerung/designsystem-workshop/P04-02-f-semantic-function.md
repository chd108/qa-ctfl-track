Datei erstellt: 2026-04-02  
Letzte Aktualisierung: 2026-04-02 — Phase 3: **F-LEGEND** in Prioritätstabelle; Verweis Projektstatus  
Zweck: Cluster **F-*** — Priorität und Detail zur normativen Tabelle in [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md) §2.  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Normativ  
Normative Orientierung: Bei Abweichung gilt [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md)

---

# Cluster 04b — Semantik / Funktion (F-*)

**Überblick:** [P04-00-spec-overview.md](P04-00-spec-overview.md)  
**Normative Tabelle (vollständig):** [P03-mapping-ist-soll-token.md](P03-mapping-ist-soll-token.md) §2

**Hinweis:** Bei Abweichung gilt **immer** `P03-mapping-ist-soll-token`.

---

## Priorität & Detail

| Prio | Bedeutung |
|------|-----------|
| **P0** | Pilot — meta-bar / Syllabus-Chip-Kontext — **gemeinsame** Einordnung: [P04-00-spec-overview.md](P04-00-spec-overview.md) (*Priorität P0 / P1 / —*) |
| **P1** | Callout-Familien vereinheitlichen |
| **—** | A4/Standards-Sonderfälle |

---

## F-* — Tabelle (mit Priorität)

| SOLL | Prio | Detail-Spec (kurz) |
|------|------|---------------------|
| **F-META** | **P0** | `.meta-bar`; Token `--chrome-meta-*`; optional Syllabus-Chip-Slot — [04d](P04-04-ctfl-lernwebsite-spec.md) |
| **F-LEGEND** | **P0** | Seitenlegende `.legend` / `nav.legend`; Token `--legend-*`; Standort **04d** B.12 — mit **F-META** verzahnt |
| **F-CHAIN** | P1 | Dokumentenkette HA |
| **F-TERM** | P1 | A4 Begriffshinweise |
| **F-INFO** | P1 | Basis-Infobox |
| **F-SUCCESS** | P1 | OK-Boxen |
| **F-CAUTION** | P1 | Warnbox |
| **F-INSIGHT** | P1 | Aha-Box (`02c`) |
| **F-AUTO** | P1 | Auto/Tool-Hinweise |
| **F-AXIS** | P1 | Matrix-Achsen (`02c`), nicht Syllabus-Chips |
| **F-DOC** | — | A4-Dokumentmodus (`doc-a4.css`) |
| **F-STD** | — | Standards-Checkliste |

**Vollständige Spalten** (IST, Token, Beispiel IST): siehe **03** §2.

---

## Umsetzungsstand (Stand 2026-03-31)

- **Gesamtprojekt / Meilensteine:** [02_Project_Status.md](../02_Project_Status.md) — hier nur **Kurz** zum Workshop.
- **F-META (P0):** **umgesetzt** — `assets/css/base.css` (`.meta-bar`, Syllabus-Chip, `--chrome-meta-*`); **11** Kern-Lernseiten; visuelle Sollwerte **04d** Teil **B.11**. Duplizierte Inline-Styles für **`.meta-bar`** auf **04a-ha4**, **04c-ha5-testfallentwurf**, **05a-ha5-testkonzept**, **00a-ha-einordnung** entfernt (ein globales Stylesheet).
- **F-LEGEND (P0):** **umgesetzt** in `base.css` — siehe **04d** B.12; vollständige Zeile in **03** §2.

---

*Ende 04b.*
