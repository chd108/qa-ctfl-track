# Domain: CTFL-Orientierung (Lernwebsite)

**Stand:** 2026-04-02  
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

## Teil B — Design-Spec: CTFL / Syllabus-Chip (meta-bar & punktuell)

**Status:** **Platzhalter** — Ausarbeitung **nach** Freigabe Teil A (inhaltlich oben bereits festgehalten); Pilot-Code folgt der Spec.

### B.1 Geplanter Inhalt (wenn Spec ausgearbeitet wird)

- HTML-Struktur für **F-META** + optional **C-SYLLABUS**-Chip (einheitliches Label, z. B. „CTFL 4.0.2 · Syllabus“).
- Abgrenzung zu **`.ctfl-fix`** / Korrektur-Bar auf Referenzseite **01c-testmittel.html**.
- Verweis auf **`:root`**-Token aus [03-token-mapping-2026-04-01.md](03-token-mapping-2026-04-01.md) (`--chip-syllabus-*`, `--chrome-meta-*`).
- Liste der **Pilot-Seiten** (Reihenfolge nach Projektentscheid).

---

*Ende 04d — Domain CTFL Lernwebsite.*
