Datei erstellt: 2026-04-04  
Letzte Aktualisierung: 2026-04-04 — Terminologie **Lösung** statt „Musterlösung“ (Seitenabschnitt H2, Anker `#loesung`); zuvor Phase 3 (Hierarchie), Vereinbarung Content-Treue, Phase 1–2  
Zweck: **Pilot** — methodische Grundlage zur Content-Strukturierung der HA3-Überdeckungs-Seite; Erkenntnisse fließen in Designsystem-Entscheidungen (Workshop).  
Klassifizierung: Projektsteuerung / Designsystem-Workshop / Pilot-HA3  
Normative Orientierung: [README.md](README.md), [P02-06-taxonomie-soll.md](P02-06-taxonomie-soll.md), [P04-04-ctfl-lernwebsite-spec.md](P04-04-ctfl-lernwebsite-spec.md) — bei Konflikt zuerst Workshop-README und P04-00-Overview.

---

**Phase-0-Rohinhalt (Text):** [pilot-ha3-content.txt](pilot-ha3-content.txt) — Aufgabenstellung, Code, Tests, Lösung inkl. Coverage-Tabellen und Referenz auf die DAG-SVG; **Input** laut Muster-Tabelle Phase 0, **Nachbar** dieser `.md`.

**Bezug IST:** Lernseite `02_Portfolio/QA_Lernwebseite/pages/04e-ha3-ueberdeckung.html` (Hausaufgabe Überdeckung / White-Box).

**Leitidee:** Vom Rohinhalt zur stabilen Seitenstruktur — als **Documentation Information Architecture Process** (Dokumentations-Informationsarchitektur), kurz **„Doing IA“** (**Information Architecture** im Sinne von: Inhalte erfassen, modellieren, ordnen und mit Darstellung/ Komponenten verzahnen, statt nur „Text schreiben“). **Methodik und Doku** für diesen Pilot laufen **in erster Linie in dieser einen Datei** zusammen; die **eigentliche Seite** (`04e-ha3-ueberdeckung.html`, Assets, ggf. CSS) wird **weiterhin** dort bearbeitet, wo sie im Repo liegt — diese `.md` ersetzt keine Produktdateien.

**Vereinbarung Content-Treue (Pilot HA3):** Für **Aufgabenstellung** und **Lösung** gilt der inhaltliche Maßstab von [pilot-ha3-content.txt](pilot-ha3-content.txt): **weder mehr noch weniger** — gleiche Fakten, Formulierungen, Code, Tabellen und Kennzahlen (keine neuen Anforderungen, keine abweichenden Ergebnisse). **Reihenfolge** auf der Webseite darf **didaktisch** von der TXT abweichen (z. B. Diagramm vor Index). **Aufbereitung** (Struktur der Abschnitte, Komponenten, Layout, Typografie, Interaktion) ist **frei** und ändert nichts an dieser **inhaltlichen** 1:1-Bindung. So bleibt **Content = Content**; die Leitidee **Doing IA** zielt auf **Ordnung, Modell und Darstellung**, nicht auf Umschreiben des Fachstoffs.

---

## Vereinbarung: Muster vs. Arbeits-Tabelle

**Muster (fix):** Die folgende Tabelle mit **Phasen 0–6** (**sieben Zeilen**) und **diesen Spalten** ist die **gemeinsame Referenz** — **Struktur und Inhalt dieser Tabelle werden nicht verändert**, damit alle (Mensch, Cursor, Claude, …) **dieselbe Leiter** haben. Sie ist **kein** fortlaufendes Log, sondern das **Normbild** für das Vorgehen.

**Arbeit:** **Direkt darunter** folgt eine **zweite Tabelle** mit **demselben Spaltenkopf** (`Phase | Disziplin/Begriff | Framework/Methode | Input | Output`). **Nur diese zweite Tabelle** wird **befüllt**, **verfeinert**, bei Bedarf **um Zeilen erweitert** oder **fortgeschrieben** — je nach Arbeitsstand und Erkenntnissen zum **konkreten HA3-Pilot**.

**Begründung:** Ein **eingefrorenes Muster** verhindert Drift („wir ändern die Phasenlage ad hoc“) und macht **Vergleiche** zwischen Projekten später möglich. Eine **separate Arbeits-Tabelle** erlaubt **Iteration**, ohne das Muster zu verwässern.

---

## Muster — Phasen 0–6 (nicht ändern)

| Phase | Disziplin/Begriff | Framework/Methode | Input | Output |
|------:|-------------------|-------------------|-------|--------|
| 0 | IST-Analyse & Materialsammlung | Content Audit | Aufgabenstellung + Lösung (als Text) | Roher Content, Referenz auf SVG |
| 1 | Content Analysis & Diátaxis Mapping | Diátaxis Framework | Roher Content | Diátaxis-typisierte Content-Einheiten |
| 2 | Content Modeling | Structured Content | Diátaxis-typisierte Einheiten | Strukturierte Inhaltstypen |
| 3 | Information Architecture | IA Taxonomy | Inhaltstypen | Hierarchie/Taxonomie |
| 4 | Component Architecture | Atomic Design | Hierarchie | Komponentenliste |
| 5 | Documentation Framework | Diátaxis | Komponenten | Typisierte Komponenten |
| 6 | Presentation Patterns | UI Patterns | Typisierte Komponenten | Darstellungsregeln |

**Hinweise zum Muster (kein Tabelleninhalt):**

- **Content Inventory:** bei Bedarf **im Verlauf** der bestehenden HTML-Seite `04e-ha3-ueberdeckung.html` — **keine** feste eigene Phasenzeile; lässt sich z. B. parallel zu Phase 0 oder 1 nachziehen.
- **SVG:** Kontrollflussgraph (**gerichteter azyklischer Graph** / **Zustandsübergangsdiagramm**) ist **bereits vorhanden** (`assets/ha3-svg/…`, eingebunden in **04e**), wird **referenziert**, gehört fachlich zu **Antwort 1** — **keine Neugestaltung** vorgesehen.

---

## Arbeits-Tabelle — Pilot HA3 (iterativ befüllen, Zeilen bei Bedarf ergänzen)

| Phase | Disziplin/Begriff | Framework/Methode | Input | Output |
|------:|-------------------|-------------------|-------|--------|
| 0 | IST-Analyse & Materialsammlung | Content Audit | Aufgabenstellung + Lösung (als Text) | [pilot-ha3-content.txt](pilot-ha3-content.txt) — Rohtext inkl. SVG-Referenz (Phase 0 abgeschlossen) |
| 1 | Content Analysis & Diátaxis Mapping | Diátaxis Framework | Roher Content ([pilot-ha3-content.txt](pilot-ha3-content.txt)) | Content-Einheiten **A–J** mit **Diátaxis-Quadranten** (primär/sekundär); vgl. Abschnitt *Quadranten-Zuordnung* unten |
| 2 | Content Modeling | Structured Content | Diátaxis-typisierte Einheiten (Phase 1) | **3 Seitenabschnitte** mit Zuordnung der Content-Einheiten; vgl. *Seitenabschnitte (Phase 2)* unten |
| 3 | Information Architecture | IA Taxonomy | 3 Seitenabschnitte + Content-Einheiten (Phase 2) | Konkrete **Überschriftenhierarchie** (H1–H4), **Anker-Navigation**; vgl. *Überschriftenhierarchie (Phase 3)* unten |
| | | | | |

*(Hier dokumentieren wir den **laufenden** Stand für **Phasen 0–6** (und ggf. Zwischenschritte) für **diese** HA3-Seite. Zeilen hinzufügen, wenn z. B. Meilensteine oder Teiliterationen festgehalten werden sollen.)*

---

## Seitenabschnitte — HA3 `04e` (Abschluss Phase 2)

Vorgabe für die **Webseitenstruktur** (bearbeitet in `02_Portfolio/QA_Lernwebseite/pages/04e-ha3-ueberdeckung.html`). Rohinhalt: [pilot-ha3-content.txt](pilot-ha3-content.txt).

| Abschnitt | Content-Einheiten | Hinweis |
|-----------|---------------------|---------|
| **1. Aufgabenstellung** | **B**, **C**, **D**, **E** | **B** = Original-/Beispiel-Links als **Intro** direkt unter **H2 Aufgabenstellung** (**ohne** eigene H3); **C–E** mit fachlichen H3; E = Teilaufgaben (**ACTION**); A (Metablock) typischerweise **nicht** als Lernabschnitt auf der Seite |
| **2. Lösung** | **G** → **F** → **H** → **I** | Auf der Seite **G vor F** (Diagramm zuerst, dann Statement-Index); danach Coverage (**H**) und Teil 3 inkl. **Begründung** (**I**) |
| **3. Quellen** | optional **B** (gebündelt), ggf. Syllabus/Norm aus **A** | Nur falls Links oben schlank gehalten werden; sonsten Abschnitt entfallen |

**Abweichung zum Rohtext:** In [pilot-ha3-content.txt](pilot-ha3-content.txt) steht **F** vor **G**; die **Seite** setzt **G vor F** (didaktisch: zuerst sichtbares DAG, dann Index/Legende).

---

## Überschriftenhierarchie — HA3 `04e` (Abschluss Phase 3)

**Ziel:** Umsetzung der **drei Seitenabschnitte** (Phase 2) mit **fachlichen** Überschriften (keine technischen Platzhalter wie „SVG-Verweis“ als H3-Titel). **Reihenfolge** im Abschnitt **Lösung** auf der Seite: **G → F → H → I** (s. Phase 2).

**Navigation:** Optional **Inhaltsverzeichnis** mit Sprungmarken (z. B. `#aufgabenstellung`, `#loesung`, `#quellen`); bei langer Seite Unteranker unter **Lösung** möglich (z. B. `#loesung-dag`, `#loesung-coverage`).

### Baum (H1 → H4)

```
H1  [Seitentitel — z. B. HA3 – Überdeckung (White-Box)]

H2  Aufgabenstellung
    [Intro: B — Original-/Beispiel-Links ohne eigene Überschrift, direkt unter H2]
    H3  Sachverhalt & Regel                    ← C
    H3  Code & Testaufrufe                    ← D
    H3  Teilaufgaben                            ← E

H2  Lösung
    H3  Kontrollfluss (DAG)                   ← G (fachlicher Titel; SVG eingebettet)
    H3  Zuordnung: Statement-Indizes            ← F
    H3  Überdeckung                             ← H
        H4  Anweisungsüberdeckung               ← optional, wenn visuell getrennt
        H4  Zweigüberdeckung
    H3  Variante ohne Statement 5             ← I
        H4  Begründung                          ← Begründungsblock aus TXT (1:1)

H2  Quellen                                   ← nur wenn Abschnitt 3 genutzt; sonst weglassen
```

### Festlegungen

| Thema | Vereinbarung |
|--------|----------------|
| **H1** | Eine Seite = **ein** H1 (Seitentitel). |
| **H2** | Genau die **drei** Hauptabschnitte (bzw. zwei, wenn **Quellen** entfällt). |
| **B** | **Kein** H3 „Kontext & Quellen“ — Links gehören zum **Einstieg in Aufgabenstellung**, **ohne** eigene Überschriftenebene. |
| **H4** | Unter **Überdeckung** optional; **Begründung** unter Variante **H4** (entspricht `####` im Rohtext). |
| **Content-Treue** | Alle sichtbaren Texte aus Aufgabe/Lösung **1:1** zu [pilot-ha3-content.txt](pilot-ha3-content.txt); nur **Struktur und Präsentation** variieren. |

---

## Quadranten-Zuordnung — Content-Einheiten A–J (Abschluss Phase 1)

**Rahmen (vereinbart):** **ACQUISITION** = Aufgabe + Beispiel · **COGNITION** = Erklärungen · **APPLICATION** = Tabellen/Daten/SVG · **ACTION** = Teilaufgaben (konkrete Schritte).

**Hinweis zu J:** Die früher separate Einheit **Begründung** ist im Rohtext unter **I** (Teil 3, `#### Begründung (kurz)`); es gibt **kein eigenes J** mehr — die Zeile **J** unten = *entfällt / in I*.

| Einheit | Kurzinhalt (s. [pilot-ha3-content.txt](pilot-ha3-content.txt)) | Primär | Sekundär |
|---------|----------------------------------------------------------------|--------|----------|
| **A** | Metablock (Zweck, Klassifizierung, Norm) | APPLICATION | — |
| **B** | Titelbezug + Notion-Links | APPLICATION | — |
| **C** | Sachverhalt + Geschäftsregel | ACQUISITION | COGNITION |
| **D** | Code + gegebene Testaufrufe | APPLICATION | — |
| **E** | Teilaufgaben 1–3 | ACTION | — |
| **F** | Statement-Index (Tabelle + Satz) | APPLICATION | COGNITION |
| **G** | DAG (SVG-Pfad/Embed), Kanten, Knoten | APPLICATION | COGNITION |
| **H** | Statement-/Branch-Coverage, Tabellen, fehlender Zweig | ACQUISITION | APPLICATION |
| **I** | Teil 3 (Variante ohne Zeile) + Begründung | ACQUISITION | COGNITION |
| **J** | *entfällt* (in **I** aufgegangen) | — | — |

---

## Single-File-Fokus für Pilot-Doku (mit bewusster Ausnahme)

**Gilt für diesen Pilot:** Sämtliche **methodischen Notizen, Erkenntnisse, Entscheidungen und Verweise**, die **ausschließlich** diesen HA3-Content-Strukturierungslauf betreffen, werden **zuerst und vorrangig in dieser `.md`** festgehalten. **Andere** Workshop- oder Steuerungsdateien (**P02–P05**, `02_Project_Status`, …) werden **nicht** parallel „mitgeschrieben“, **solange** das **nicht nötig** ist.

**Begründung:** Eine **überschaubare** Zielgröße (eine HA-HTML-Seite) + **eine** Arbeitsdatei = weniger **Streuung**, klarer **Fokus**, schnelleres **Auffinden**. Am Ende liegt eine **abgeschlossene** HA3-Umsetzung vor; **diese Pilot-Datei** kann dann als **Fallbeleg** im Archiv bleiben, ohne dass zwischendurch das **gesamte** Designsystem-Ordnerwerk mitlaufen musste.

**Ausnahme:** Sobald eine Erkenntnis **verbindlich** für **mehr** als diesen Pilot sein soll (z. B. neue **globale** Regel in **P04**), ist ein **bewusster** Ausgriff in andere Dateien **erlaubt und dann sinnvoll** — wird hier im **Notizen**-Abschnitt kurz **vermerkt** (was, wo, warum).

**Weiterhin selbstverständlich:** **P03/P04**, **README**, **Seiten**, **Assets** jederzeit **lesen und zur Orientierung nutzen**; Änderungen an **Code/Assets** an der HA3-Seite erfolgen **dort**, wo sie technisch hingehören — diese Datei **dokumentiert** den Weg, **ersetzt** ihn nicht.

---

## Notizen (frei)

*(Iterationen, offene Fragen, Verweise auf P03/P04/P05, Ausnahmen „Doku ausgelagert nach …“ — nach Bedarf.)*
