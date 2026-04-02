# Cluster 04b — Semantik / Funktion (F-*)

**Stand:** 2026-04-02  
**Überblick:** [04-design-system-overview.md](04-design-system-overview.md)  
**Normative Tabelle (vollständig):** [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md) §2

**Hinweis:** Bei Abweichung gilt **immer** `03-token-mapping`.

---

## Priorität & Detail

| Prio | Bedeutung |
|------|-----------|
| **P0** | Pilot — meta-bar / Syllabus-Chip-Kontext |
| **P1** | Callout-Familien vereinheitlichen |
| **—** | A4/Standards-Sonderfälle |

---

## F-* — Tabelle (mit Priorität)

| SOLL | Prio | Detail-Spec (kurz) |
|------|------|---------------------|
| **F-META** | **P0** | `.meta-bar`; Token `--chrome-meta-*`; optional Syllabus-Chip-Slot — [04d](04d-domain-ctfl-lernwebsite-2026-04-02.md) |
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

- **F-META (P0):** **umgesetzt** — `assets/css/base.css` (`.meta-bar`, Syllabus-Chip, `--chrome-meta-*`); **11** Kern-Lernseiten; visuelle Sollwerte **04d** Teil **B.11**. Duplizierte Inline-Styles für **`.meta-bar`** auf **04a-ha4**, **04c-ha5-testfallentwurf**, **05a-ha5-testkonzept**, **00a-ha-einordnung** entfernt (ein globales Stylesheet).
- **F-LEGEND** und weitere F-* außerhalb **F-META:** nicht Inhalt dieser Datei; siehe **04d B.12** bzw. **03-token-mapping**.

---

*Ende 04b.*
