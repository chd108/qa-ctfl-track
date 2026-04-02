# Redaktionelle Harmonisierung — QA_Lernwebseite

**Stand:** 2026-03-31 (Fortschreibung: meta-bar-Status, **ISTQB K-Stufen** im **Hinweis**)  
**Ort:** `01_Projektsteuerung/designsystem-workshop/`  
**Bezug Design (visuell):** [04d-domain-ctfl-lernwebsite-2026-04-02.md](04d-domain-ctfl-lernwebsite-2026-04-02.md) Teil **B.11** (meta-bar / Chip) und **B.12** (Seitenlegende **F-LEGEND** — umgesetzt in `base.css` + Lernseiten). **Standort** der Legende: **nur** 04d B.12 (**keine** Ausnahmen).

---

## Zweck dieses Dokuments

Dieses Dokument sammelt **redaktionelle** Harmonisierungsarbeit für die **gesamte** öffentliche Lernwebsite unter `02_Portfolio/QA_Lernwebseite/`.  
**Erster Abschnitt:** meta-bar-**Texte** und Informationsarchitektur der Kontextzeile (IST/SOLL).  
**Weitere Abschnitte** folgen schrittweise (Begrifflichkeiten, „Kap.“ vs. „Kapitel“, Tonalität, …).

**Abgrenzung:** Keine erneute **visuelle** Spec — die gilt weiter **04d B.11** (meta-bar) und **B.12** (Legende: Darstellung, HTML, **verbindlicher** Platz in `main`). Hier geht es um **Inhalt**, **Labels** und **Wiedererkennbarkeit** für Leserinnen und Leser. **Wann** eine Seitenlegende inhaltlich sinnvoll ist, bleibt **redaktionell** (diese Datei); **wo** sie steht, ist **technisch** in **04d B.12** festgelegt (**keine** Standort-Ausnahmen).

---

## Problem

Nach der visuellen Vereinheitlichung der meta-bar fallen **inhaltliche** Inkonsistenzen auf: unterschiedliche **Spaltenüberschriften**, **Reihenfolgen** der Informationstypen, **Datums-/GTB-Formate**, Singular/Plural (**Lernziel** vs. **Lernziele**), mal **CTFL-Referenz** mal nur **Quelle**, unterschiedliche **Seitenrollen** (Übersicht vs. Kapitel vs. Nachschlagewerk).

---

## Scope

| Bereich | Einbezogen |
|---------|------------|
| **Lernseiten (IST-Analyse)** | `01-landkarte.html` bis `06-testwerkzeuge.html` (**11 Seiten**) |
| **Nicht Gegenstand dieser Datei (optional später)** | Einstieg (`index.html`), Standards (`00b`), Hausaufgaben-Seiten (`00a`, `04a`–`06c` …) — **eigenes** Vorgehen möglich |

---

## Ziel

**Harmonisierung:** ein **erkennbares**, **professionelles** Raster für die meta-bar (und später site-weit konsistente **Begriffe** und **Strukturen**), ohne didaktischen Inhalt der Seiten zu verwässern.

**Status meta-bar (HTML):** **Umgesetzt** — alle **11 Lernseiten** (`01-landkarte` … `06-testwerkzeuge`) nach Raster **Quelle → Syllabus → Lernziele / Funktion / Seitenrolle → Hinweis**; **Quelle** einheitlich mit **(GTB, 01.03.2025)**; **Testmanagement:** **Lernziele** mehrzeilig (5.1–5.5) unter einem Label.

**Status ISTQB K-Stufen (Hinweis):** **Umgesetzt** (2026-03-31) — kompakte Legende **`K-Stufen: K1 (erinnern) · K2 (verstehen) · K3 (anwenden)`** nur in der **meta-bar**, wenn dort bereits eine **Lernziel-Kennzeichnung** vorkommt: **(K1)** / **(K2)** / **(K3)** oder **FL-…** mit **K1/K2/K3** (Lehrplan v4.0.2). **9** Kern-Lernseiten; **ohne** K-Stufen-Zeile: **Landkarte**, **Glossar** (keine FL-(Kx) in der Kontextzeile). **Grundlagen (01b):** im Hinweis **`FL-1.4.3 (K2)`** (Testmittel), damit die Regel greift — siehe **§2.4**.

**Weitere** redaktionelle Themen (Abschn. 3 ff. unten) **offen**.

---

# Abschnitt 1 — meta-bar: IST-Analyse (11 Lernseiten)

*Snapshot der frühen IST-Erfassung (Aufbau/Labels); die **aktuelle** HTML-Umsetzung ist der **Maßstab** (inkl. **Quelle** / **Syllabus** / gebündelter **Lernziele** bei 05). Syllabus-Chip (visuell) ist auf allen Seiten Spalte 0 und hier nicht noch einmal aufgeführt.*

| # | Seite | Spalte 1 | Spalte 2 | Spalte 3 | Spalte 4 | Spalte 5+ |
|---|--------|----------|----------|----------|----------|-----------|
| 1 | **01-landkarte** | **Quelle:** ISTQB CTFL Lehrplan v4.0.2 (GTB 2025) | **Seite:** Testuniversum (Hauptsystem) | — | — | — |
| 2 | **01a-glossar** | **Quelle:** … (GTB, 01.03.2025) | **Umfang:** 97 / 102 … | **Hinweis:** Verweis auf Legende unter meta-bar | — | — |
| 3 | **01b-grundlagen** | **Quelle:** … | **Syllabus:** Kap. 1 — Grundlagen | **Hinweis:** Aufbau 1.1–1.5 · … · **FL-1.4.3 (K2)** (Testmittel) · Links · optional **K-Stufen**-Zeile (s. §2.4) | — | — |
| 4 | **01c-testmittel** | **CTFL-Referenz:** Kap. 1.4.3 (FL-1.4.3 K2) | **Lernziel:** … (ein Satz) | **Quelle:** … (GTB, 01.03.2025) | **Kursreferenz:** Udemy … | — |
| 5 | **02a-sdlc-statisch** | **Quelle:** … (GTB 2025) · SDLC & … | **Zweck:** Statische Visualisierung … | — | — | — |
| 6 | **02b-sdlc-animiert** | **Quelle:** … (GTB 2025) · SDLC & … | **Zweck:** Animierte Visualisierung … | — | — | — |
| 7 | **02c-teststufen** | **CTFL-Referenz:** Kap. 2.2 (FL-2.2.1 · …) | **Lernziele:** drei Stichpunkte | **Quelle:** … (GTB, 01.03.2025) | — | — |
| 8 | **03-statisches-testen** | **Lernziele:** lange FL-Liste | **Norm:** ISO/IEC 20246 | **Schlüsselbegriffe:** Aufzählung | — | — |
| 9 | **04-testverfahren** | **Quelle:** … (GTB 2025) | **Kontext:** Kap. 4 — … | **Inhalt:** Verfahrensklassen … | — | — |
| 10 | **05-testmanagement** | **5.1 Testplanung:** FL-… | **5.2 Risiko:** … | **5.3 Überwachung:** … | **5.4 KM:** … | **5.5 Fehlermanagement:** … |
| 11 | **06-testwerkzeuge** | **Quelle:** … · Kapitel 6 | **Aufbau:** 6.1 · 6.2 | — | — | — |

### Erkannte Inkonsistenzen (kurz)

1. **Reihenfolge:** mal **Quelle** zuerst, mal **CTFL-Referenz** / **Lernziele** zuerst (z. B. 01c, 03).  
2. **„Quelle“:** auf **03** fehlt als eigene Spalte; auf **01c** / **02c** steht sie **nach** Referenz/Lernziel(en).  
3. **GTB-Angabe:** „GTB 2025“ vs. „GTB, 01.03.2025“ — nicht vereinheitlicht.  
4. **Kapitel:** „Kapitel 1“ vs. „Kap. …“.  
5. **Lernziel(e):** Singular/Plural und unterschiedliche Position.  
6. **Syllabus-Bezug:** Label **CTFL-Referenz** vs. Einbettung nur in **Quelle** / **Kontext** / **Aufbau**.  
7. **HTML:** teils `<span>`, teils `<div>` für Spalten — **kein** redaktionelles Problem, bei Umsetzung einheitlich wählen.

---

# Abschnitt 2 — meta-bar: SOLL-Schema

## 2.1 Prinzipien

- **Quelle** und **Syllabus-Bezug** klar trennen: **Quelle** = Dokument (Lehrplan-Version), **Syllabus** = Ort im Lehrplan (Kap., FL wo sinnvoll).  
- **Kein Sonderfall Testmanagement:** gleiches **Grundschema** wie auf allen anderen Kapitelseiten; **Lernziele** dürfen bei **Kap. 5** **mehrzeilig unter einem Label** stehen (Unterzeilen 5.1–5.5 bleiben inhaltlich erhalten, nur **unter** „Lernziele:“ gebündelt).  
- **Labels flexibel:**  
  - **„Lernziele:“** nur dort, wo **Lernziele / FL** sachlich passen (typisch: Kapitel-Lernseiten).  
  - Auf **Landkarte** / **Glossar** stattdessen **„Funktion:“** oder **„Seitenrolle:“** (Nachschlagen, Überblick — kein erzwungenes „Lernziele“).  
- **Hinweis** (optional): Normen, Kursbezug, Legenden-Kurzverweis, Vertiefungs-Links — **ein** Label, nur wenn nötig.

## 2.2 Vorgeschlagenes Spaltenraster (nach Syllabus-Chip)

| Reihenfolge | Label | Inhalt |
|-------------|--------|--------|
| 1 | **Quelle:** | Immer zuerst (einheitliches Format, GTB-Datum redaktionell festlegen). |
| 2 | **Syllabus:** | Kurz: `Kap. …` ggf. FL in Klammern. |
| 3 | **Lernziele:** **oder** **Funktion:** **oder** **Seitenrolle:** | Je nach Seitentyp (s. u.). Bei **05-testmanagement:** **ein** Label **Lernziele:**, darunter **mehrzeilig** die bisherigen 5.1–5.5-Zeilen. |
| 4 | **Hinweis:** | Optional (Norm, Kurs, Legende, Vertiefung, Zweck der Visualisierung, …). |

## 2.3 Testmanagement (05) — Standard-Schema, Lernziele gebündelt

**Kein** eigenes „5-Spalten-Layout“ in der meta-bar nötig. **SOLL-Struktur:**

```text
Quelle: ISTQB CTFL Lehrplan v4.0.2 (GTB, TT.MM.JJJJ)
Syllabus: Kap. 5 — Management der Testaktivitäten (5.1–5.5)
Lernziele:
  5.1 Testplanung: FL-5.1.1 (K2) · … · FL-5.1.7 (K2)
  5.2 Risiko: FL-5.2.1–5.2.4 (K1/K2)
  5.3 Überwachung: FL-5.3.1–5.3.3 (K1/K2)
  5.4 KM: FL-5.4.1 (K2)
  5.5 Fehlermanagement: FL-5.5.1 (K3 — anwenden!)
Hinweis: (optional, z. B. Schwerpunkt Prüfung)
```

Umsetzung in HTML: **eine** Region **Lernziele** mit **mehreren** Zeilen (z. B. `<span>`/`<div>` pro Unterzeile oder eine Liste — bei GO zu entscheiden), **nicht** fünf gleichwertige Top-Level-Spalten.

## 2.4 ISTQB K-Stufen — kompakte Legende im **Hinweis**

**Zweck:** Leserinnen und Leser ordnen die **(K1)/(K2)/(K3)**-Suffixe am **FL-…** im Lehrplan (Bloom-Stufen) ohne zusätzliche Seite.

**Regel (redaktionell):**

- Die Zeile **`K-Stufen: K1 (erinnern) · K2 (verstehen) · K3 (anwenden)`** steht **nur** im **Hinweis** der **meta-bar**, wenn **in derselben meta-bar** bereits mindestens eine **K**-Kennzeichnung vorkommt: **`(K1)`**, **`(K2)`**, **`(K3)`** (z. B. in **Lernzielen** oder im **Hinweis**) oder **`FL-… K1`/`K2`/`K3`**.
- **Ohne** solche Referenz ist die Zeile **überflüssig** (z. B. **01-landkarte**, **01a-glossar**).
- **Grundlagen (01b):** im Hinweis **`FL-1.4.3 (K2)`** ausweisen, sobald die Vertiefung **Testmittel** genannt wird — Referenz: [ISTQB_CTFL_Lehrplan-2025_V4.0.2_DE.md](../../04_Referenzen/ISTQB/ISTQB_CTFL_Lehrplan-2025_V4.0.2_DE.md) (Lernziel **FL-1.4.3**).

**Umsetzung:** **9** Seiten mit K-Stufen-Zeile: `01b-grundlagen`, `01c-testmittel`, `02a-sdlc-statisch`, `02b-sdlc-animiert`, `02c-teststufen`, `03-statisches-testen`, `04-testverfahren`, `05-testmanagement`, `06-testwerkzeuge`.

## 2.5 Seitenlegende (F-LEGEND) — redaktionell vs. technisch

- **Technik und Platz:** ausschließlich **04d B.12** — **`nav.legend`** unmittelbar **nach** **`div.meta-bar`**, **vor** Infobox/Sections; **keine** abweichenden Standorte auf Einzelseiten.
- **Redaktion:** *Ob* eine Seite eine Legende braucht (Farben/Symbole/Badges erklären), bleibt **inhaltliche** Entscheidung; die **11** Kernseiten mit Legende sind in der Praxis abgebildet (u. a. Landkarte, Hypozykel, Teststufen, Testverfahren, Glossar).

## 2.6 Kurzbeispiele SOLL (nicht final — zur Freigabe)

| Seite | Spalte 3-Label (Beispiel) |
|--------|---------------------------|
| **Landkarte** | **Seitenrolle:** Überblick Testuniversum (Hauptsystem) |
| **Glossar** | **Funktion:** K1-Begriffe nachschlagen · **Hinweis:** Kurzverweis; **Badge-Legende** in **`nav.legend`** direkt unter meta-bar (04d B.12) |
| **Testmittel (01c)** | **Lernziele:** … · **Hinweis:** Kursreferenz … |

*(Endformulierungen bei HTML-Umsetzung abstimmen.)*

---

# Weitere Abschnitte (Platzhalter)

| Abschnitt | Thema | Status |
|-----------|--------|--------|
| **3** | Begrifflichkeiten site-weit („Kap.“ vs. „Kapitel“, CTFL vs. ISTQB in Fließtext) | offen |
| **4** | Tonalität und Ansprache (einheitliche Du/Sie-Regel, falls relevant) | offen |
| **5** | Struktur wiederkehrender Bausteine (Callouts, Fußnoten); **Seitenlegende:** Platz/Darstellung **04d B.12** | teils erledigt (Legende) |

---

## Nächste Schritte

1. ~~**Quelle-Zeile:** ein **verbindliches** Datums-/GTB-Format festlegen.~~ **Erledigt:** `(GTB, 01.03.2025)` in der meta-bar.  
2. ~~**HTML meta-bar** nach SOLL~~ **Erledigt** (s. Status oben).  
3. ~~**ISTQB K-Stufen** im **Hinweis** (Regel + **9** Seiten, **01b** mit **FL-1.4.3 (K2)**)~~ **Erledigt** (s. Status oben, **§2.4**).  
4. **Folge:** Begrifflichkeiten, Tonalität, weitere Bausteine (Abschn. 3 ff.) — bei Bedarf **versionieren** (Stand-Datum im Kopf anpassen).

---

*Ende 05-redaktionelle-harmonisierung-2026-04-03.md*
