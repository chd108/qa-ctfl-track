# Domain: CTFL-Orientierung (Lernwebsite)

**Stand:** 2026-04-02 · **Teil B Spec:** 2026-04-03 (inkl. B.11 Visuelle Spezifikation)  
**Ort:** `01_Projektsteuerung/designsystem-workshop/`  
**Cluster-Überblick:** [04-design-system-overview.md](04-design-system-overview.md)  
**Normative technische Anbindung:** [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md) (**C-SYLLABUS**, **F-META**)

Diese Datei bündelt **Teil A — Entscheidungsregeln** und **Teil B — Design-Spec** (Syllabus-Chip / meta-bar). Inhalt übernommen aus den vormals getrennten Dateien `04-ctfl-orientierung-regeln-2026-04-02.md` und `04-design-spec-ctfl-meta-chip-2026-04-02.md` (ersetzt durch diese Datei).

---

## Teil A — Entscheidungsregeln

### A.1 Beschlossene Richtung (Kurz)

- **Grüner Syllabus-/CTFL-Chip** als **einheitliches Erkennungsmerkmal** (Schwerpunkt **meta-bar** / **F-META**).
- **Zusätzlich punktuell** auf Seiten, wo es der Leser:in hilft — **nicht** nur in der meta-bar.
- **Redundanz:** nicht als harte Obergrenze „CTFL nur einmal pro Seite“; siehe A.3.

### A.2 Referenzseite: Testmittel (`02_Portfolio/QA_Lernwebseite/pages/01c-testmittel.html`)

Diese Seite ist das **kanonische Beispiel** für die Kombination **„meta-bar dicht + punktuelle CTFL-Markierung“** (ohne Landkarten-Chip-Flut).

| Ebene | IST (aktuell im Markup) | Leseraufgabe |
|-------|-------------------------|--------------|
| **Header** (`page-chrome`) | Untertitel: STLC · **Kap. 1.4.3** | Kapitel-/Abschnitts-Orientierung beim Einstieg |
| **meta-bar** | Vier Blöcke: **CTFL-Referenz** (Kap. 1.4.3, FL-1.4.3 K2), **Lernziel**, **Quelle** (ISTQB CTFL Lehrplan v4.0.2 …), **Kursreferenz** (Udemy → CTFL) | Rahmen: Syllabus-Bezug, Lernziel, normative Quelle, Abgrenzung Kursmaterial |
| **correction-bar** | Hinweis + kleines **„CTFL“**-Label (Inline-Stil) bei Terminologie-Korrekturen | Signal: „hier wurde auf Lehrplan-Terminologie korrigiert“ |
| **Aktivitäten-Listen** | Klasse **`.ctfl-fix`** an Einzelbegriffen | Punktuelle Markierung korrigierter / syllabus-relevanter Terme |

**Ableitung für Pilot / Design-Spec:** Mehrere CTFL- oder Syllabus-Signale **auf derselben Seite** sind hier **fachlich begründet**, weil **Header**, **meta-bar**, **Korrekturkasten** und **Inline-Tags** **verschiedene Aufgaben** erfüllen — nicht weil viermal derselbe Satz steht.

### A.3 Redundanz — bewusst **weich** formuliert

Eine **zu harte** Lesart („kein CTFL mehr als einmal“, „nicht dreimal im Block“) **gilt nicht** als Regel.

**Stattdessen:**

1. **Mehrfaches Vorkommen** von Syllabus-/CTFL-Signalen **auf einer Seite ist erlaubt** und kann **hilfreich** sein, wenn die **jeweilige Stelle eine eigene Leseraufgabe** hat (Orientierung im Kopf vs. Quellenzeile vs. Warn-/Korrekturbereich vs. Begriff im Fließtext).
2. Die **Varianten A / B / C** aus der Voranalyse sind **Gestaltungsoptionen**, um **gratuitäre** Dopplung zu vermeiden — **innerhalb desselben engen Kontexts** (z. B. meta-bar), nicht als Verbot zusätzlicher Signale an **anderen** Stellen der Seite:
   - **A:** Chip **ersetzt** oder **bündelt** eine wiederholte Formulierung (z. B. „Quelle: ISTQB …“ und visueller Syllabus-Chip **ohne** zweimal denselben vollen Satz).
   - **B:** **Typografische** „erste Spalte“ / Chip-Spalte in der meta-bar statt losen Text + redundanter zweiter Chip.
   - **C:** Verstärkung **gezielt** dort, wo der Rahmen **dünn** ist (z. B. Seiten mit minimaler meta-bar — vergleiche `06-testwerkzeuge.html`).
3. **Entscheidungsfrage:** Nicht „Wie oft steht CTFL?“, sondern: **Erfüllt diese konkrete Wiederholung eine eigene Funktion?** Wenn zwei Elemente **im selben Blickfeld** **denselben** Inhalt **ohne** Mehrwert liefern → **zusammenführen** (A oder B). Wenn nicht → **beide** behalten.

---

## Teil B — Design-Spec: Syllabus-Chip (visuell) + meta-bar (F-META)

**Entscheidung (Option A):** Der **Syllabus-Chip** ist **nur visuell** — grüne Fläche/Badge, **ohne** sichtbaren Text im Chip (kein „CTFL 4.0.2“ im Element). Semantik für Hilfstechnologien über **`aria-label`** auf dem Chip-Element. Pilot-Code folgt dieser Spec.

---

### B.1 Zweck

Teil B definiert **konkret** HTML/CSS/Tokens für:

- **F-META:** die Zeile `.meta-bar` unterhalb `page-chrome` (bestehendes Muster).
- **C-SYLLABUS:** ein **optionaler** grüner **Syllabus-Chip** in oder neben der meta-bar als **einheitliches Erkennungsmerkmal** (siehe Teil A).

Ziel: **eine** nachvollziehbare Umsetzung für den Pilot — ohne jede Lernseite neu zu erfinden.

---

### B.2 Bezug zu [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md)

| SOLL-Code | Rolle in dieser Spec |
|-----------|----------------------|
| **C-SYLLABUS** | Visueller Chip (Badge); Farben über `--chip-syllabus-*` |
| **F-META** | Container `.meta-bar`; optional `--chrome-meta-*` **nach** Einführung in `base.css` (Pilot Schritt 2) |

Die **vollständige** IST→SOLL→Token-Tabelle bleibt in **03**; hier keine Duplikation der Mapping-Zeilen.

---

### B.3 Klassen-Übersicht

| Klasse (Vorschlag) | Bedeutung |
|--------------------|-----------|
| `.meta-bar` | Region **F-META** (unverändert Semantik) |
| `.meta-bar__syllabus-chip` | Optionaler Wrapper um den Chip (Flex-Ausrichtung) — **kann** entfallen, wenn Chip direkt erstes Kind ist |
| `.chip` | Gemeinsame Chip-Hülle (Padding nur falls später Text-Chips dieselbe Basis nutzen) |
| `.chip--syllabus` | Modifier **C-SYLLABUS** |
| `.chip--syllabus-visual` | Modifier: **nur** Fläche, **kein** Innentext (Option A) |

**Hinweis:** Auf der **Landkarte** bleiben `.tag` / `.tag--ctfl` bestehen — dort **mit** Text. Diese Spec betrifft den **Meta-Kontext** und den **visuellen** Syllabus-Badge.

---

### B.4 HTML-Struktur (Minimalbeispiel)

**Syllabus-Chip visuell** — leeres `span`, Bedeutung nur über `aria-label` (sichtbarer Fließtext „ISTQB …“ bleibt in den **folgenden** `.meta-bar`-Spalten):

```html
<div class="meta-bar" role="region" aria-label="Seitenkontext">
  <span class="chip chip--syllabus chip--syllabus-visual"
        aria-label="Inhalt nach ISTQB CTFL Lehrplan (Syllabus)"></span>
  <div><strong>CTFL-Referenz:</strong> Kap. 1.4.3 (FL-1.4.3 K2)</div>
  <div><strong>Lernziel:</strong> …</div>
  <div><strong>Quelle:</strong> ISTQB CTFL Lehrplan v4.0.2 …</div>
</div>
```

- **Reihenfolge:** Chip **zuerst** (Orientierung „Syllabus-Kontext“), dann die bestehenden Textblöcke — **oder** nach Projektgeschmack **nach** erstem Block; inhaltlich klar halten (keine doppelte „Quelle“-Zeile ohne Mehrwert; siehe Teil A.3).
- **Kein** `aria-hidden` auf dem Chip, wenn `aria-label` die einzige Benennung ist (Screenreader sollen das Label bekommen).

---

### B.5 CSS-Layering

| Ebene | Inhalt |
|-------|--------|
| **`base.css`** | `:root`-Tokens (`--chip-syllabus-bg`, `--chip-syllabus-fg`, ggf. `--chip-padding-*`, `--chip-radius` — **bereits** vorhanden); **neu im Pilot:** Regeln für `.chip.chip--syllabus.chip--syllabus-visual` (Maße, `display`, Hintergrund, Radius). Optional später: `.meta-bar` global hierher ziehen statt Inline-`<style>` auf Einzelseiten. |
| **Seiten-`<style>` / `subpage.css`** | Nur falls eine Seite **vor** globalem Rollout Sonderabstände braucht — nicht Standard. |
| **Landkarte / andere Chips mit Text** | Unverändert eigene Selektoren (`.tag--ctfl`); nicht mit `.chip--syllabus-visual` vermischen. |

---

### B.6 Tokens

| Token | Verwendung in dieser Spec |
|-------|---------------------------|
| `--chip-syllabus-bg` | Hintergrund des **visuellen** Syllabus-Chips |
| `--chip-syllabus-fg` | Optional: Rand oder Fokus-Ring; **nicht** für Innentext (Chip leer) |
| `--chip-radius`, `--chip-border` | Form des Badges |
| `--chrome-meta-*` | **Geplant** laut 03 für F-META — **Pilot Schritt 2:** in `base.css` ergänzen, dann meta-bar-Fläche darauf umstellen |

---

### B.11 Visuelle Spezifikation — meta-bar (F-META) & Syllabus-Chip (C-SYLLABUS, visuell)

**Ziel:** Ein **Soll-Raster**, das Pilot und spätere globale CSS-Zentralisierung abdeckt. **Bis** `base.css` global ausrollt, gelten diese Werte als **Referenz** zum Angleichen der Seiten-`<style>`-Blöcke.

#### B.11.1 Typografie (meta-bar)

| Eigenschaft | Soll (Pilot) | Anmerkung |
|-------------|----------------|-----------|
| `font-family` | `"Helvetica Neue", Helvetica, Arial, sans-serif` | Entspricht den meisten Lernseiten mit expliziter Sans-Angabe |
| `font-size` | `0.9rem` | **Einheit** statt Mix `12px` / `0.9rem` (12px ≈ 0.75rem bei 16px-Root — daher **0.9rem** als Kompromiss) |
| `font-weight` | `400` (normal) für Fließtext; `strong` bleibt **browser-default bold** | |
| `line-height` | `1.45` | Explizit setzen, damit mehrzeilige meta-bar-Zeilen nicht „kleben“ |
| `color` | `var(--mid)` | Bereits etabliert |
| `strong` | `color: var(--text)` | Bereits etabliert |

**Konkrekt (CSS-Ausschnitt, Ziel `base.css`):**

```css
.meta-bar {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--mid);
}
.meta-bar strong { color: var(--text); }
```

#### B.11.2 Abstände & Layout (meta-bar)

| Eigenschaft | Soll (Pilot) |
|-------------|----------------|
| `display` | `flex` |
| `flex-wrap` | `wrap` |
| `align-items` | `center` |
| `gap` | `1rem` |
| `padding` | `0.6rem 1rem` |
| `margin-bottom` | `1.5rem` |
| `border-radius` | `8px` |
| `border` | `1px solid var(--bdr)` |
| `background` | `rgba(255,255,255,0.55)` (Abweichung `0.5` → bei globalem Rollout auf **einen** Wert vereinheitlichen) |

#### B.11.3 Syllabus-Chip **visuell** (`.chip.chip--syllabus.chip--syllabus-visual`)

| Eigenschaft | Soll (Pilot) | Anmerkung |
|-------------|----------------|-----------|
| `display` | `inline-block` | |
| `width` × `height` | `0.65rem` × `1.25rem` **oder** `10px` × `20px` — **eine** Variante festlegen | Rechteck-Badge; bei Wunsch nach „Pille“: `height` = `width` + `border-radius: 999px` (separat entscheiden) |
| `min-width` / `min-height` | gleich width/height | Verhindert Kollaps |
| `border-radius` | `var(--chip-radius)` (aktuell `4px` in `base.css`) | |
| `background` | `var(--chip-syllabus-bg)` | |
| `border` | `var(--chip-border)` optional | |
| `vertical-align` | `middle` | Ausrichtung in der Flex-Zeile |
| `flex-shrink` | `0` | Wenn Chip in Flex-Item |

**Text im Chip:** keiner (Option A). Bedeutung nur `aria-label` (siehe B.8).

#### B.11.4 Zustände

| Element | Hover | Focus |
|---------|--------|--------|
| meta-bar (Container) | *kein* Pflicht-Hover | nur wenn fokussierbare Kinder — Chip ist **nicht** fokussierbar |
| Syllabus-Chip (`span`) | optional: leichte `opacity` oder `filter` — **Pilot: weglassen**, um Scope klein zu halten | nicht fokussierbar → kein `:focus-visible` nötig |

#### B.11.5 Schatten & Transition

- **Schatten:** meta-bar **ohne** Box-Shadow im Pilot (wie IST).
- **Transition:** **keine** Pflicht.

#### B.11.6 Responsive

- `flex-wrap: wrap` reicht; **kein** zusätzlicher Breakpoint in Pilot-Pflicht.
- Optional später: `gap` bei sehr schmalen Viewports reduzieren — **Follow-up**.

#### B.11.7 Abgleich IST → Soll (Pilot-Aufgabe)

- Seiten mit **`12px`** / **`gap: 2rem`** / **`padding` 1.2rem** (u. a. Glossar, Testmanagement) auf **B.11.1–B.11.2** **oder** bewusst als **Ausnahme** in einer Tabelle dokumentieren — **kein** stillschweigendes Mischen.

---

### B.7 Abgrenzung

| Baustein | Abgrenzung |
|----------|------------|
| **`.chip--syllabus-visual` in meta-bar** | Nur **grünes** Erkennungsmerkmal; **kein** Text im Chip. Kapitel/Version stehen in **Header** oder **meta-bar-Textspalten**. |
| **Landkarte `.tag--ctfl`** | Text-Chips mit Ref — **anderes** Muster, gleiche **Farbfamilie** über `--chip-syllabus-*` / `--ctfl-bg`. |
| **`.ctfl-fix`** (z. B. 01c) | Kleines **Text**-Label „CTFL“ an Begriffen — **kein** Ersatz für den Meta-Syllabus-Chip; beide dürfen auf einer Seite coexistieren (Teil A). |
| **correction-bar** | Inline-„CTFL“-Hervorhebung — perspektivisch auf **Klassen + Token** angleichen (Pilot-Follow-up), nicht Teil des ersten Chip-in-meta-bar-Schritts zwingend. |

---

### B.8 Accessibility

| Thema | Vorgabe |
|-------|---------|
| **Region** | `.meta-bar` behält `role="region"` und sinnvolles `aria-label` (z. B. „Seitenkontext“) — **bestehend**. |
| **Visueller Chip** | Pflicht: **`aria-label`** auf dem `span` (z. B. „Inhalt nach ISTQB CTFL Lehrplan (Syllabus)“) — kurz, verständlich, **deutsch** wie die Seite. |
| **Fokus** | Reines `span` ist **nicht** fokussierbar — korrekt für rein dekoratives/semantisches Badge **ohne** Aktion. Kein `tabindex`. |
| **Kontrast** | Fläche `--chip-syllabus-bg` ist Badge-Hintergrund; bei Fokus-Erweiterung später `outline` prüfen (WCAG bei Bedarf). |

---

### B.9 Pilot-Plan

| Schritt | Inhalt | Abnahme |
|---------|--------|---------|
| **1** | `base.css`: Styles für `.chip.chip--syllabus.chip--syllabus-visual` (Mindestgröße z. B. 0.65 rem × 1.25 rem oder gleichseitig rund — **ein** konsistenter Wert im Pilot) | Chip sichtbar, nutzt `--chip-syllabus-bg` |
| **2** | Eine **Pilot-Seite** (empfohlen: `01c-testmittel.html`): meta-bar um visuellen Chip ergänzen, lokales CSS für `.meta-bar` **entfernen** oder auf globale Klasse reduzieren, sobald global vorhanden | Struktur wie B.4, `aria-label` gesetzt |
| **3** | Zweite Seite mit „dünnem“ Kontext (z. B. `06-testwerkzeuge.html`): meta-bar **ein** + Chip nach gleichem Muster | Kein Bruch zum ersten Pilot |
| **4** | Optional: `--chrome-meta-*` + meta-bar global in `base.css` | Reduzierte Duplikation in Seiten |

**Reihenfolge:** 1 → 2 → 3; 4 wenn Zeit.

---

### B.10 Follow-up

- Meta-bar-Styles **global** in `base.css` / `subpage.css` bündeln; Seiten-Inline-`<style>` abbauen.
- **correction-bar** / `.ctfl-fix`: Farben auf Token umstellen (keine Hardcodes `#cde8d2`).
- **04b** (`F-META`): nach Pilot Abschnitt „F-META umgesetzt“ ergänzen.
- **Syllabus-Chip punktuell** außerhalb meta-bar: gleiche Klassen + `aria-label`, nicht neue Farbe erfinden.

---

*Ende 04d — Domain CTFL Lernwebsite.*
