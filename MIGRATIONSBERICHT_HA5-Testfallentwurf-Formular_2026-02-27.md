# Migrationsbericht: HA5 Testfallentwurf-Formular

**Datum:** 2026-02-27  
**Migriert:** `pages/ha5-testfallentwurf-formular.html` auf `assets/css/formular-base.css`

---

## 1. Entfernte Regeln (jetzt aus formular-base.css)

| Regel | Begründung |
|-------|------------|
| `:root` (--text, --mid, --soft, --bdr, --light, --head) | Identisch mit formular-base.css |
| `* { box-sizing: border-box; margin: 0; padding: 0; }` | Reset in Basis |
| `body` (background, font-family, display, flex, padding, gap) | Layout in Basis – nur `font-size: 9pt` lokal ergänzt |
| `main` | Identisch mit Basis |
| `.a4` | Identisch mit Basis |
| `.page-footer` | Identisch mit Basis |
| `.form-page-nav` + ul, a, a:hover, a.current | Identisch mit Basis |
| `.skip-link` + :focus | Identisch mit Basis |
| `@media print` | Identisch mit Basis |

---

## 2. Bewusst lokal geblieben

| Regel / Bereich | Begründung |
|-----------------|------------|
| `:root` (--ep, --bva, --uc, --eg) | Seitenspezifische Tech-Badge-Farben (EP, BVA, UC, EG) |
| `body { font-size: 9pt; }` | Andere Grundschriftgröße als Pilot (10pt) – bewusst 9pt beibehalten |
| `.doc-header`, `.doc-title`, `.doc-subtitle` | Seitenlayout |
| `.meta-info` (5 Spalten), `.meta-item strong` | Seitenspezifisch, z.B. font-size 6.5pt / 8pt |
| `.section`, `.section-header` | Seitenspezifisch, z.B. font-size 8.5pt |
| `.info-box` | Nur auf dieser Seite |
| `.summary-table` (+ th, td, .tc-id, .center) | Andere Struktur als form-table im Pilot |
| `.tech-badge`, `.tech-ep`, `.tech-bva`, `.tech-uc`, `.tech-eg` | Seitenspezifische Badges |
| `.prio-badge`, `.prio-high/med/low` | Seitenspezifische Prioritätsbadges |
| `.auto-yes`, `.auto-no` | Seitenspezifisch |
| `.testcase-card`, `.testcase-header`, `.testcase-id`, `.testcase-title` | Seitenspezifische Karten |
| `.tc-field`, `.tc-label`, `.tc-value` | Seitenspezifische Formularfelder |
| `.tc-steps` + li::before | Seitenspezifische Schrittdarstellung |
| `.grid-2`, `.grid-3` (gap: 2mm bei grid-3) | Seitenspezifisch, grid-3 mit gap 2mm (Pilot: 3mm) |

---

## 3. Aus Vorsicht nicht extrahiert

| Regel | Begründung |
|-------|------------|
| Keine | Alle Basis-Regeln sind in formular-base.css bereits vorhanden und deckungsgleich. Es gab keine Grenzfälle. |

---

## 4. Prüfung: Bildschirm- und Druckansicht

| Prüfpunkt | Ergebnis |
|-----------|----------|
| **Bildschirmansicht unverändert?** | Ja – Basis (body, main, .a4) und lokale Inhaltsstile sind gleich geblieben. |
| **Druckansicht unverändert?** | Ja – @media print aus formular-base.css übernimmt Nav/Skip-Link-Ausblendung sowie .a4-Anpassung. |
| **Navigation sichtbar?** | Ja – .form-page-nav aus formular-base.css, `.current` auf aktiver Seite. |
| **Navigation im Druck ausgeblendet?** | Ja – `display: none !important` in formular-base.css. |
| **page-footer korrekt?** | Ja – gleiche Werte wie bisher, jetzt aus Basis. |
| **Kollisionen?** | Nein – Basis und lokale Regeln ergänzen einander, keine Konflikte. |

---

## 5. Geänderte Dateien

| Datei | Änderung |
|-------|----------|
| `pages/ha5-testfallentwurf-formular.html` | formular-base.css eingebunden; ~85 Zeilen Basis-CSS entfernt; lokale Regeln beibehalten. |
| `assets/css/formular-base.css` | Unverändert. |

---

## 6. Kurzfassung

- **Entfernt:** ~85 Zeilen (Reset, body, main, .a4, .page-footer, .form-page-nav, .skip-link, @media print, doppelte :root-Variablen).
- **Beibehalten:** Seitenspezifische Variablen (--ep, --bva, --uc, --eg), font-size 9pt und alle Inhaltsklassen.
- **Status:** Migration abgeschlossen, Bildschirm- und Druckansicht stabil.
