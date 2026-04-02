# Domain: CTFL-Orientierung (Lernwebsite)

**Stand:** 2026-04-02 · **Teil B Spec:** 2026-04-03 (inkl. B.11 F-META, **B.12 F-LEGEND**)  
**Ort:** `01_Projektsteuerung/designsystem-workshop/`  
**Cluster-Überblick:** [04-design-system-overview.md](04-design-system-overview.md)  
**Normative technische Anbindung:** [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md) (**C-SYLLABUS**, **F-META**, **F-LEGEND**)

Diese Datei bündelt **Teil A — Entscheidungsregeln** und **Teil B — Design-Spec** (Syllabus-Chip / meta-bar / **Seitenlegende**). Inhalt übernommen aus den vormals getrennten Dateien `04-ctfl-orientierung-regeln-2026-04-02.md` und `04-design-spec-ctfl-meta-chip-2026-04-02.md` (ersetzt durch diese Datei).

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

## Teil B — Design-Spec: Syllabus-Chip (visuell) + meta-bar (F-META) + Seitenlegende (F-LEGEND)

**Entscheidung (Option A):** Der **Syllabus-Chip** ist **nur visuell** — grüne Fläche/Badge, **ohne** sichtbaren Text im Chip (kein „CTFL 4.0.2“ im Element). Semantik für Hilfstechnologien über **`aria-label`** auf dem Chip-Element. Pilot-Code folgt dieser Spec.

---

### B.1 Zweck

Teil B definiert **konkret** HTML/CSS/Tokens für:

- **F-META:** die Zeile `.meta-bar` unterhalb `page-chrome` (bestehendes Muster).
- **C-SYLLABUS:** ein **optionaler** grüner **Syllabus-Chip** in oder neben der meta-bar als **einheitliches Erkennungsmerkmal** (siehe Teil A).
- **F-LEGEND:** die **Seitenlegende** `.legend` unterhalb F-META, wo **Farben/Symbole** der Karte oder des Diagramms erklärt werden (**B.12**).

Ziel: **eine** nachvollziehbare Umsetzung für den Pilot — ohne jede Lernseite neu zu erfinden.

---

### B.2 Bezug zu [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md)

| SOLL-Code | Rolle in dieser Spec |
|-----------|----------------------|
| **C-SYLLABUS** | Visueller Chip (Badge); Farben über `--chip-syllabus-*` |
| **F-META** | Container `.meta-bar`; optional `--chrome-meta-*` **nach** Einführung in `base.css` (Pilot Schritt 2) |
| **F-LEGEND** | Container `.legend`; Items/Swatches; Tokens `--legend-*` (**B.12**) |

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

### B.12 Visuelle Spezifikation — Seitenlegende (F-LEGEND)

**Ziel:** Ein **Soll-Raster** für die **Kontextzeile unterhalb** der meta-bar (F-META), wo **Farben/Symbole** der **Landkarte, Diagramme oder SVGs** erklärt werden — **nicht** die redaktionelle Regel *wann* eine Legende nötig ist (siehe [05-redaktionelle-harmonisierung-2026-04-03.md](05-redaktionelle-harmonisierung-2026-04-03.md)); hier nur **Darstellung** und **Technik**.

**Standort (verbindlich, keine Ausnahmen):** **`nav.legend`** steht in **`main`** **unmittelbar nach** **`div.meta-bar`** und **vor** jedem weiteren Block (Infobox, Sections, Visualisierung). Die Legende bezieht sich inhaltlich auf die Grafik/Tabelle weiter unten; die Position ist **site-weit einheitlich**.

**Semantik:** **F-LEGEND** = Fläche **`.legend`** mit **Items** + **Swatches**; **kein** Ersatz für F-META (Syllabus-Quelle, Lernziele).

**IST → Soll (Umsetzung):** **F-LEGEND** ist in **`assets/css/base.css`** mit **`--legend-*`** und BEM **`.legend` / `.legend__item` / `.legend__swatch`** verankert; die **11 Kern-Lernseiten** nutzen **`nav.legend`** unmittelbar **nach** **`div.meta-bar`** (siehe **Standort** oben — **ohne** Standort-Ausnahmen). Verbleibende Feinarbeit: **03-token-mapping** um Zeile **F-LEGEND** ergänzen; Inline-Reduktion wo noch lokal dupliziert.

#### B.12.1 Typografie (`.legend`)

| Eigenschaft | Soll (Pilot) | Anmerkung |
|-------------|----------------|-----------|
| `font-family` | `"Helvetica Neue", Helvetica, Arial, sans-serif` | Wie B.11.1 |
| `font-size` | `0.8125rem` (13px bei 16px Root) | **Eine** Stufe kleiner als meta-bar (`0.9rem`), damit F-LEGEND untergeordnet wirkt |
| `font-weight` | `400` (normal) | |
| `line-height` | `1.4` | Explizit; mehrsprachige oder zweizeilige Labels nicht „kleben“ |
| `color` | `var(--mid)` | |
| `strong` | `color: var(--text)` | Falls in Items genutzt |

**Konkrekt (CSS-Ausschnitt, Ziel `base.css`):**

```css
.legend {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: var(--mid);
}
```

#### B.12.2 Abstände & Layout (Container `.legend`)

| Eigenschaft | Soll (Pilot) | Anmerkung |
|-------------|----------------|-----------|
| `display` | `flex` | |
| `flex-wrap` | `wrap` | |
| `justify-content` | `center` | |
| `align-items` | `center` | |
| `gap` | `1rem` | Token: `--legend-gap` |
| `padding` | `0.65rem 1rem` | Token: `--legend-padding-y` / `--legend-padding-x` |
| `margin-bottom` | `1.5rem` | Gleicher Abstand wie F-META nach unten; Token: `--legend-margin-bottom` |
| `margin-top` | `0` | Keine abweichenden Sonderfälle pro Seite |
| `border-radius` | `8px` | Wie B.11.2 |
| `border` | `1px solid var(--bdr)` | |
| `background` | `rgba(255, 255, 255, 0.45)` | Etwas **zurückhaltender** als meta-bar `0.55`; Token: `--legend-surface` |

#### B.12.3 Legenden-Item (`.legend__item`)

| Eigenschaft | Soll (Pilot) |
|-------------|----------------|
| `display` | `flex` |
| `align-items` | `center` |
| `gap` | `0.5rem` | Token: `--legend-item-gap` |
| `min-height` | optional `1.25rem` | Touch-Follow-up |

**BEM (Soll):** Block **`.legend`**, Elemente **`.legend__item`**, **`.legend__swatch`**. Bestehende Klasse **`.legend-item`** (ohne BEM) → Migration auf **`legend__item`** im Rollout.

#### B.12.4 Swatch (`.legend__swatch`)

| Eigenschaft | Soll (Pilot) | Anmerkung |
|-------------|----------------|-----------|
| Breite × Höhe | `12px` × `12px` (oder `0.75rem`) | **Eine** Standardgröße; Token: `--legend-swatch-size` |
| `flex-shrink` | `0` | |
| `border-radius` | `50%` (**Punkt**) **oder** `3px` (**Kachel**) | Zwei erlaubte Varianten: Modifikator **`.legend__swatch--tile`** für eckige Kacheln (z. B. Verfahrensklassen) |
| `border` | optional `1px solid …` | Wo semantisch nötig (Kontrast zum Hintergrund) |
| `aria-hidden` | `true` auf **dekorativen** Swatches | Bedeutung nur im **sichtbaren Text** des Items |

**Kein** Mix aus 11px / 12px / 14px ohne dokumentierten Modifikator (z. B. **`.legend__swatch--lg`** = `14px` nur nach Freigabe).

#### B.12.5 Responsive

| Regel | Soll (Pilot) |
|--------|----------------|
| Standard | `flex-wrap: wrap` reicht |
| Schmal | Optional unter `max-width: 480px`: `gap` auf `0.75rem` reduzieren |
| Überlauf | Optional: `max-width: min(100%, 90vw)` auf `.legend` bei schmalen Viewports — **falls** global eingeführt; keine seitenbezogenen Sonderklassen |

#### B.12.6 Zustände (Hover / Focus)

| Element | Hover | Focus |
|---------|--------|--------|
| Container `.legend` | **kein** Pflicht-Hover | — |
| **Keine** interaktiven Steuerelemente in der Standard-Legende | — | — |

#### B.12.7 Druck / A4

- **Follow-up:** `print-color-adjust` auf Swatches, wo **Farbe** in PDF-Abgaben sichtbar bleiben soll — analog `doc-a4.css`-Muster.

#### B.12.8 Accessibility

| Thema | Vorgabe |
|-------|---------|
| **Container** | **`nav`** mit **`aria-label`** **spezifisch** (z. B. „Legende Farben Kapitelkacheln“, „Legende Hypozykel“, „Legende Teststufen“, „Legende Verfahrensklassen“) — **nicht** nur „Legende“ ohne Kontext |
| **Alternative** | `role="region"` + `aria-label` nur wenn **`nav`** semantisch unpassend — **Soll:** bevorzugt **`nav`** für seiteninterne Orientierung |
| **Swatch** | `aria-hidden="true"` wenn Text daneben die Bedeutung trägt |

#### B.12.9 Design-Tokens (`:root` / Pilot `base.css`)

| Token | Wert (Pilot) |
|-------|----------------|
| `--legend-gap` | `1rem` |
| `--legend-padding-y` | `0.65rem` |
| `--legend-padding-x` | `1rem` |
| `--legend-margin-bottom` | `1.5rem` |
| `--legend-font-size` | `0.8125rem` |
| `--legend-line-height` | `1.4` |
| `--legend-surface` | `rgba(255, 255, 255, 0.45)` |
| `--legend-swatch-size` | `12px` |
| `--legend-item-gap` | `0.5rem` |

Bereits vorhandene Tokens nutzen: `var(--bdr)`, `var(--mid)`, `var(--text)`.

#### B.12.10 Abgleich IST → Soll (Pilot-Aufgabe)

- Seiten mit **abweichendem** gap, padding, Schriftgröße, Swatch-Größe oder veralteten Klassennamen (`legend-item` vs `legend__item`) auf **B.12.1–B.12.4** angleichen; verbleibende **IST-Abweichungen** nur **bewusst** in einer Prüftabelle festhalten — **kein** stillschweigendes Mischen (keine **Standort**-Sonderregeln für `.legend`).
- **Pilot:** Tokens in `base.css` → **eine** Referenzseite (empfohlen: `04-testverfahren.html` oder `01-landkarte.html`) → Rollout Landkarte, 02a, 02b, 02c, 04; Inline-`<style>` reduzieren.

---

### B.7 Abgrenzung

| Baustein | Abgrenzung |
|----------|------------|
| **`.chip--syllabus-visual` in meta-bar** | Nur **grünes** Erkennungsmerkmal; **kein** Text im Chip. Kapitel/Version stehen in **Header** oder **meta-bar-Textspalten**. |
| **F-LEGEND (`.legend`)** | **Schlüssel** zu Farben/Symbolen **auf derselben Seite** (Karte, Diagramm, SVG); **kein** zweites Syllabus-Signal, **kein** Ersatz für F-META. Redaktion **wann** Legende: **05**; **wie** sichtbar: **B.12**. |
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

- Meta-bar-Styles **global** in `base.css` / `subpage.css` bündeln; Seiten-Inline-`<style>` abbauen — **Stand 2026-03-31:** **04a / 04c / 05a / 00a** ohne lokales **`.meta-bar`**-CSS; weitere Seiten bei Bedarf nachziehen.
- **F-LEGEND:** **erledigt** — `base.css` + Kernseiten; **03-token-mapping:** Zeile **F-LEGEND** / `--legend-*` — bei Token-Drift mit **04d B.12.9** abgleichen.
- **correction-bar** / `.ctfl-fix`: **erledigt** — in `base.css` mit **`--ok` / `--warn`** (Aliase zu **C-SYLLABUS** / **C-PRAXIS**), keine Seiten-Hardcodes für Farben auf **01c**.
- **04b** (`F-META`): **erledigt** — Abschnitt *Umsetzungsstand* in **04b-semantic-function-2026-04-02.md**.
- **Syllabus-Chip punktuell** außerhalb meta-bar: gleiche Klassen + `aria-label`, nicht neue Farbe erfinden — **offen** nur bei neuen Sonderfällen.

---

*Ende 04d — Domain CTFL Lernwebsite.*
