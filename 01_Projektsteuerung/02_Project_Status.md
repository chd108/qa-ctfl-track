Datei erstellt: 2026-03-23  
Letzte Aktualisierung: 2026-03-31 (**Pilot CSS:** **F-META** / **F-LEGEND** in **`base.css`**; **K-Stufen**-Kurzzeile in der **meta-bar** nur dort, wo **FL-(Kx)** o. ä. vorkommt (**9** Kernseiten); **SDLC** 02a/02b Triptych **max-width 1400px**; **04b** *Umsetzungsstand* **F-META**; **04d B.10** Korrekturleiste tokenisiert; **Redaktion** [05-redaktionelle-harmonisierung-2026-04-03.md](designsystem-workshop/05-redaktionelle-harmonisierung-2026-04-03.md) **Fortschreibung** Status / **§2.4 K-Stufen**)  
Zweck: Dokumentiert aktuellen Projektstand und nächste Schritte  
Klassifizierung: Projektsteuerung / Status  
Normative Orientierung: ISO 21502, PMBOK — angepasst an Lern- und Ein-Personen-Projekt.

---

# Project Status — QA-Track

**Berichtsstichtag:** 2026-03-31 · **Projektinhaber (Alias):** chd108  

*Kurzkontext:* QA-Track ist das **gesamte** ISTQB-CTFL-orientierte Lernprogramm (Material, Hausaufgaben, Portfolio, Website, Notizen, Referenzen, Steuerung). **Vision, Ziele und Scope** siehe [01_Project_Charter.md](01_Project_Charter.md); **Ablage, Benennung, Repo-Struktur und Health Check** siehe [03_Project_Standards.md](03_Project_Standards.md) (insb. Abschnitt 3 und 8).

---

## 1. Statusübersicht (Dashboard)

*(Neueste Einordnung zuerst.)*

| Kennzahl | Einschätzung |
|----------|----------------|
| **Programm-Gesamt** | **Stabil / auf Kurs** — Lern- und Arbeitsrepo ist nutzbar; Kursintegration über Notion/MasterSchool maßgeblich. |
| **Website *QA_Lernwebseite*** | **Technische Basis abgeschlossen** — einheitliches Hauptsystem, `index.html` als alleiniger Einstieg, Benennungslogik inkl. Matrix für aktive Seiten umgesetzt; **Designsystem-Pilot:** **F-META** / **F-LEGEND** / Korrekturkomponenten in **`base.css`**, **meta-bar** auf **11** Kernseiten; **K-Stufen**-Kurzzeile im **Hinweis** nur wenn die **meta-bar** bereits **(K1)/(K2)/(K3)** oder **FL-… K1/K2/K3** enthält (**9** Seiten); **SDLC**-Seiten **02a/02b** mit Triptych-Layout und **1400px** Inhaltsbreite. |
| **Lernstrecke HA4/HA5 (Website)** | **Phasen 1–4 abgeschlossen** (Stand **21.03.2026**) — Konsistenz, Story-/UX, formale Einheitlichkeit (**Phase 3 Abschluss:** **21.03.2026**, siehe Abschnitt 2), Standards-Review inkl. CTFL-/IEEE-829-Zitierlogik; Details und Evidenz siehe Abschnitt 2 und 7. |
| **Hausaufgabe HA6 (Testdurchführung)** | **Website-Portfolio:** Testprotokoll, Fehlerbericht und Testabschlussbericht als **A4-Seiten** unter `02_Portfolio/QA_Lernwebseite/pages/` (**06a–06c**) **vorhanden**; **Kursordner** `03_Hausaufgaben/HA6_Testdurchfuehrung/` ggf. separat nach Kursvorgaben (siehe Abschnitt 3). |
| **Nächster Schwerpunkt** | **Komponentenstil / Designsystem light** — **Pilot** (**F-META**, **F-LEGEND**, Korrekturleiste) **in `base.css` umgesetzt** (siehe **04d B.10/B.11/B.12**, **04b** *Umsetzungsstand*). **Nächste Iteration:** weiteres Abbauen von Seiten-Inline-CSS wo sinnvoll, **Callout**-Familien (**F-CHAIN** …) nach Priorität **04b**; Verankerung ausgewählter Regeln in [03_Project_Standards.md](03_Project_Standards.md) (Abschn. 6) bei Bedarf nach Review; **IST→SOLL→Token** weiter [03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md). |
| **Lessons learned (aktuell)** | Teile der **Komponentenlogik** (Story-/Dokumentenkette-Boxen) wurden **vor** dem formalen Designsystem **praktisch eingeführt** — fachlich sinnvoll für die Lernstrecke; **verbindliche Standardisierung** folgt im Architekturblock. Der Workshop hat **explizit** getrennt: **Domäne** (z. B. Syllabus-Chips), **didaktische Funktion** (Callouts, Orientierung), **Darstellung** (Tabellen, SVG, A4) — reduziert Vermischung und gibt **Token-Mapping und Pilot-Phase** eine **Zielrichtung**. |

**Aktueller Fokus (Stand 31.03.2026):**  
Technische Basis und Benennungsmatrix der *QA_Lernwebseite* gelten als **abgeschlossen**; die HA4/HA5-Strecke ist **inhaltlich** durch die Phasen 1–4 **abgedeckt**. **P1:** Erster **CSS-Pilot** **umgesetzt** — **meta-bar** / Syllabus-Chip / **F-LEGEND** / **correction-bar** in **`base.css`**; **K-Stufen**-Hinweis **nur** bei **FL-(Kx)** in der **meta-bar**; **04d B.10** Follow-up größtenteils erledigt. **Nächster Schritt:** **Iteration** (weitere Token-Familien, Callouts, ggf. **`doc-a4.css`**); **03-token-mapping** bei Schemaänderungen fortschreiben.

### Redaktioneller Backlog (Website)

**Dokumentation:** [05-redaktionelle-harmonisierung-2026-04-03.md](designsystem-workshop/05-redaktionelle-harmonisierung-2026-04-03.md) — **Stand 2026-03-31:** **§2.4 ISTQB K-Stufen** (Regel, **9** Seiten, **01b** **FL-1.4.3 (K2)**).

**meta-bar (11 Lernseiten):** **HTML nach SOLL umgesetzt** — Raster Quelle / Syllabus / Lernziele·Funktion·Seitenrolle / Hinweis; **Testmanagement** mit gebündelten **Lernzielen** (5.1–5.5); **K-Stufen**-Legende im **Hinweis** siehe **05** **§2.4**. **Offen** (Backlog): weitere redaktionelle Harmonisierung (Begriffe site-weit, Tonalität, Strukturen) siehe Abschn. 3 ff. in **05-…**.

---

## 2. Erreichte Meilensteine

*(Chronologisch **absteigend**: zuerst das Neueste / zuletzt Abgeschlossene.)*

**So ist dieser Abschnitt gemeint:** Hier steht, **was** im Projekt **schon erledigt** ist — mit Datum und oft mit Fachbegriffen (Git, Phasen, Dateinamen). Nach vielen Blöcken folgt ein kurzer Absatz **„In Klartext“**: was das **praktisch** bedeutet, **ohne** dass man alle Kürzel kennen muss.

### 2026-03-31 — Designsystem: Pilot CSS (F-META, F-LEGEND, Korrekturleiste)

- **`base.css`:** **F-META** (`.meta-bar`, Syllabus-Chip), **F-LEGEND** (`--legend-*`), semantische Aliase **`--ok` / `--warn`**, globale Styles **`.correction-bar`** / **`.ctfl-fix`** (vormals nur auf **01c** mit Hardcodes) — siehe **04d** **B.10**–**B.12**.
- **Kern-Lernseiten** mit **FL-(Kx)** in der **meta-bar:** kompakte **K-Stufen**-Zeile im **Hinweis** (**9** Seiten); **HA**-Seiten **04a / 04c / 05a / 00a** ohne dupliziertes **`.meta-bar`**-CSS.
- **04b:** Abschnitt *Umsetzungsstand* zu **F-META** ergänzt.

**In Klartext:** Der erste **sichtbare** Designsystem-Schritt im Stylesheet ist **drin** — nicht nur auf dem Papier des Token-Mappings, sondern **live** auf den Kernseiten und mit **weniger** doppeltem CSS auf den HA-Seiten.

### 2026-04-02 — Designsystem: Session 3 (Mapping) schriftlich; Pilot-Phase als nächster technischer Schritt

- **Session 3 (schriftlich, Artefakt):** [03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md) — **IST→SOLL→Token** über **C-/F-/P-/S-***; **Zielgröße** ca. **15–30** konsolidierte **`:root`**-Namen; **Workshop-Ordner** bleibt **maßgebliche Referenz** (keine zweite „Token-Welt“ neben dem Workshop).
- **Nächster Schritt (technisch):** **Pilot** — **1–2** Token-Familien in **`base.css`** / **`doc-a4.css`** verankern und **evaluieren**; **kein** vollständiges Umbenennen aller Klassen vor dem Pilot.
- **Workshop-Texte** (Stand u. a. **2026-04-01**, inhaltlich nachgeschärft): u. a. [01-vision-ziele-2026-03-30.md](designsystem-workshop/01-vision-ziele-2026-03-30.md), [02d-drei-ebenen-modell-2026-03-30.md](designsystem-workshop/02d-drei-ebenen-modell-2026-03-30.md), [02e-diataxis-integration-kritisch-2026-03-30.md](designsystem-workshop/02e-diataxis-integration-kritisch-2026-03-30.md), [02f-soll-taxonomie-session3-2026-03-30.md](designsystem-workshop/02f-soll-taxonomie-session3-2026-03-30.md) — u. a. **IA**-Einordnung, **Diátaxis** / **S-***; Cursor-Prompt Session **2d:** [z_PROMPT FÜR CURSOR (Design-Workshop_Session 2d).txt](designsystem-workshop/z_PROMPT%20F%C3%9CR%20CURSOR%20(Design-Workshop_Session%202d).txt) (Präfix **`z_`** zur Sortierung am Ordnerende).
- *Einfach gesagt:* Das **Mapping-Dokument** ist **da**. **Jetzt** zählt **Ausprobieren im Stylesheet** — nicht noch einmal „Session 3 von vorn“ als leeres Blatt.
- **Design-Spec-Cluster (Workshop 04):** [04-design-system-overview.md](designsystem-workshop/04-design-system-overview.md) — **Risiko-Register**, **Component-Spec-Checkliste**, **04a–c** (C/F/P Priorität); **CTFL-Domain** [04d-domain-ctfl-lernwebsite-2026-04-02.md](designsystem-workshop/04d-domain-ctfl-lernwebsite-2026-04-02.md) — Syllabus-Chip / **F-META**, **B.11** (visuelle Sollwerte); **Referenzseite** `01c-testmittel.html`. **Pilot P1** kann starten (siehe §1 Dashboard).

**In Klartext:** **Session 3** meint hier **zwei Dinge sauber trennen:** (1) **schriftlich** — **welche** Tokens und Zuordnungen gelten (**liegt vor**); (2) **technisch** — **Pilot** im CSS, ob sich das **bewährt**. **Rollout** und **Charter/Standards** werden **nach** belastbarer Pilot-Erfahrung geschärft — nicht vor dem ersten Lauf.

### 2026-03-30 — Designsystem-Workshop: Sessions 2–2f (konzeptioneller Abschluss vor Session 3)

- **Ort:** `01_Projektsteuerung/designsystem-workshop/` — ergänzend zu Session **1** ([01-vision-ziele-2026-03-30.md](designsystem-workshop/01-vision-ziele-2026-03-30.md)).  
  - *Einfach gesagt:* Das ist der **Sammelordner** für alle Workshop-Texte zur **einheitlichen Gestaltung** der Lernwebsite; die verlinkte **Session 1** beschreibt **vorher**, **warum** und **welche Ziele** dieses Designsystem haben soll — alles Weitere darunter ist **Ausarbeitung** zu diesem Ziel.

- **Session 2** ([02-informations-taxonomie-2026-03-30.md](designsystem-workshop/02-informations-taxonomie-2026-03-30.md)): **17 Typ-IDs** (T-/O-/D-/M-/X-*) aus IST konsolidiert; bekannte Inkonsistenzen (Tag-Präfixe, Callout-Varianten) dokumentiert.
  - *Einfach gesagt:* Hier wird aus dem bisherigen Wildwuchs (Farben, Boxen, Klassennamen auf der Website) ein **gemeinsames Namensschema** für **Bedeutungen** — z. B. „das ist Prüfungsstoff“, „das ist eine Warnung“, „das ist die Dokumentenkette“ — damit man später **weiß**, *was* man vereinheitlichen will, **bevor** man nur noch über CSS redet.

- **Session 2b** ([02b-darstellungs-patterns-2026-03-30.md](designsystem-workshop/02b-darstellungs-patterns-2026-03-30.md)): **Darstellungs-Patterns** (Tabellen, SVG, Karten, A4) — **WIE** vs. **WAS**.  
  - *Einfach gesagt:* Hier steht, wie Inhalte auf der Lernwebsite aussehen (Tabellen, Diagramme, Karten, A4, Listen, Typo): die Darstellungs-Patterns (WIE). Session 2 hat davor die Informations-Typen (WAS / Bedeutung) beschrieben — 2b trennt bewusst Presentation von Semantik, damit Layout und Token später nicht mit Fachbedeutung vermischt werden.

- **Session 2c** ([02c-vollstaendige-seitenmatrix-2026-03-30.md](designsystem-workshop/02c-vollstaendige-seitenmatrix-2026-03-30.md)): **23 Seiten** (`index.html` + `pages/*.html`) manuell matrixartig erfasst — **IST**-Basis für Mapping.
  - *Einfach gesagt:* Das ist die IST-Landkarte aller 23 HTML-Seiten (index.html + pages/*.html): pro Seite grob erfasst, welche Typen und Patterns vorkommen. Sie dient als faktische Basis für späteres IST→SOLL-Mapping — nicht als kreative Meinung, sondern als Bestandsaufnahme.

- **Session 2d** ([02d-drei-ebenen-modell-2026-03-30.md](designsystem-workshop/02d-drei-ebenen-modell-2026-03-30.md)): **Drei-Ebenen-Modell** Content → Semantic → Presentation; Quellen (u. a. IA, [Diátaxis](https://diataxis.fr/)); Analyse der 17 Typen gegen Ebenen.  
  - *Einfach gesagt:* Hier wird das Drei-Ebenen-Modell festgehalten: Content (Thema), Semantic (didaktische Funktion), Presentation (Form). Mit Bezug auf IA und u. a. Diátaxis; die 17 Typ-IDs werden den Ebenen zugeordert und Vermischungen benannt — damit „Chaos mit Farben“ als strukturierbares Modell lesbar wird.

- **Session 2e** ([02e-diataxis-integration-kritisch-2026-03-30.md](designsystem-workshop/02e-diataxis-integration-kritisch-2026-03-30.md)): **kritische** Diátaxis-Einordnung — **orthogonal** zu Callouts; Optionen A–D; **kein** Ersatz von D-* durch „Explanation“ pro Seite als Dogma; Seiten dürfen **gemischt** sein (Abschnittsebene).  
  - *Einfach gesagt:* Hier steht ehrlich, was Diátaxis kann und nicht kann: es ist kein Ersatz für Callouts (D-*), sondern ein anderes Raster (Dokumentationsmodi). Optionen A–D werden verglichen; keine Pflicht „eine Seite = ein Modus“; Mischformen auf Abschnittsebene sind erlaubt. Ziel: keine falsche Vereinfachung, die später Token und Redaktion verwirrt.

- **Session 2f** ([02f-soll-taxonomie-session3-2026-03-30.md](designsystem-workshop/02f-soll-taxonomie-session3-2026-03-30.md)): **SOLL-Taxonomie** Top-down (**C-***, **F-***, **S-*** Diátaxis, **P-***); Brücke zu **Session 3** (Tokens); **Codes nicht final verbindlich** bis Nutzer-Freigabe / Token-Arbeit.  
  - *Einfach gesagt:* Hier wird das Zielbild beschrieben: C-, F-, **S-*** (Diátaxis: Modus **für Leser sichtbar** — Label/Badge; **Rollout** nach C/F/P), P-* — von oben aus Vision und Best Practice, nicht nur aus IST. Das ist die Brücke zu Session 3 (Design-Tokens); die Codes sind bewusst noch nicht verbindlich, bis du sie freigibst und die Token-Arbeit sie festzieht.

- **Nachwirkung für P1:** Ausgang für **Design-Tokens** und **IST→SOLL-Mapping** ist **geschärft**; [website-analyse-2026-03-28.md](designsystem-workshop/website-analyse-2026-03-28.md) bleibt **IST/Roadmap**-Komplement; Workshop liefert **Semantik- und SOLL-Raster**.
  - *Einfach gesagt:* Für P1 (Designsystem light) ist die Ausgangslage geschärft: **Das schriftliche Mapping** ([03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md)) **setzt** Workshop **02f** und IST-Analysen **um** — nächster Schritt ist **Pilot** im CSS, nicht „Mapping erst noch schreiben“. Die website-analyse-2026-03-28.md (kanonisch unter `designsystem-workshop/`) bleibt IST und Roadmap der Website; der Workshop liefert dazu das Semantik- und SOLL-Raster — beides ergänzt sich, ersetzt sich nicht.

**In Klartext:** Die Lernwebsite **funktioniert** schon länger; bisher fehlte aber ein **gemeinsames Bild**, *welche* Bedeutung hinter Farben, Boxen und Tags steckt und *wie* sich das später **einheitlich gestalten** lässt. Dafür gibt es jetzt **einen Ordner** mit **Workshop-Dokumenten**: zuerst wurde der **Ist-Zustand** der Seiten und Begriffe erfasst, dann ein **Drei-Ebenen-Modell** (Thema → Bedeutung für die Lehre → Darstellung), dazu die **Einordnung** des bekannten **Diátaxis**-Rahmens (wann eher Erklären, wann Nachschlagen, usw.) — **ohne** dass die Website an einem Tag umgebaut werden muss. **„SOLL“** heißt: **Zielbild** für Namen und Komponenten; **„Session 3“** im **schriftlichen** Sinn (**Token-Mapping**) ist mit **[03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md)** **angelegt** — **als Nächstes** folgt der **Pilot** (**konkrete** Variablen und Verhalten in **`base.css`** / **`doc-a4.css`**). Die **Codes** (C-, F-, …) sind **Vorschläge** und werden **mit der Token-Umsetzung** und Review **festgezogen**.

### 2026-03-29 — P4: Steuerungsdokumentation konsolidiert (abgeschlossen)

- **Project\_*-Serie** (`01_Project_Charter.md` … `05_Reference_Quick.md`) ist der **maßgebliche** Steuerungseinstieg unter `01_Projektsteuerung/`; ersetzte frühere Steuerkopien liegen unter **`06_Archiv/Projektsteuerung_alt/`**.  
- **Repo-Struktur** und **Repository Health & Review** bleiben wie beschrieben in **[03_Project_Standards.md](03_Project_Standards.md)** Abschnitt **3** und **8** die Referenz für **Ist-Struktur** und **Health Check**; **Arbeitspaket P4** ist damit **geschlossen**.

**In Klartext:** Die **Projekt-Dokumente** im Ordner `01_Projektsteuerung/` (Charter, Status, Standards, …) sind die **offizielle** Steuerung — ältere Doppelungen liegen im **Archiv**, damit man nicht aus Versehen **veraltete** Anleitungen liest. **„Repo“** ist hier das **eine** Git-Projekt **qa-ctfl-track** auf GitHub; wie Ordner heißen und was geprüft wird, steht in den **Standards**.

### 2026-03-21 — Phase 4 (Website, HA4/HA5): Standards-Konformität

- **CTFL-Zitierung** bereinigt: präzise Formulierung **„CTFL 4.0.2, Kap. 4.2“** statt missverständlich „CTFL 4.2“ (u. a. 05a/05b).  
- **IEEE 829-2008** projektweit **einheitlich**; Kohärenz mit **ISO/IEC/IEEE 29119-3** im **Lernkontext** (ohne Vollnorm-Anspruch).  
- **index.html:** Willkommensbereich mit **Standards-Hinweis** (CTFL 4.0.2, IEEE 829-2008, ISO/IEC/IEEE 29119-3, Lernkontext); Verweis auf das **GitHub-Monorepo** **qa-ctfl-track** (`target="_blank"`, Leserhinweis).  
- **00b-standards.html:** Tab-/Link-Logik für Repo-Verweis analog zur Einstiegsseite.  
- **04d-ha5-testfallentwurf-a4.html:** GM-F03-**Auswahlbegründung** als grüne **`doc-info-box--ok`** (Druck: `print-color-adjust`).  
- **Bewertung:** für ein **Lern-Portfolio** fachlich und formal **professionell genug** (explizit **kein** Anspruch auf vollständige Normabdeckung).  
- **Review-Dokumentation:** u. a. **dieses Dokument** (Abschn. 1–2), [01_Project_Charter.md](01_Project_Charter.md) (Executive Summary), [03_Project_Standards.md](03_Project_Standards.md) (Abschn. 2 und 8).

**In Klartext (Phase 4, 21.03.):** Die **Hausaufgaben-Strecke** rund um **Analyse, Testfälle und Testkonzept** (HA4/HA5) soll **fachlich sauber** zu Prüfungs- und **Normen-Sprache** passen — z. B. **CTFL** und **IEEE**-Bezüge **einheitlich** schreiben, nicht verwirrend abkürzen. Die **Startseite** und die **Standards-Seite** verweisen klar auf **Lehrplan** und **Repository**; beim **Testfallentwurf A4** gibt es z. B. eine **grüne Hinweisbox**, wo eine inhaltliche **Auswahl** (GM-F03) begründet wird. Kurz: **Form und Zitate** wurden **nachgezogen**, damit das Portfolio **seriös** wirkt.

### 2026-03-21 — Phase 3 (Website, HA4/HA5): Formale Einheitlichkeit & Terminologie

- **Abschlussdatum:** **21.03.2026**, **09:19:30 (UTC+1)** — Commit **`1eb5b8f`** (*„QA-Lernwebseite: Phase-3-Konsistenz (HA4/HA5), Meta-Leiste, A4-Status, Terminologie“*).  
- **Schwerpunkt:** **Terminologie-Harmonisierung** und formale Konsistenz (u. a. **Testbasis-Analyse**); **Meta-Leiste**, **A4-Status**; **Querverweise**; **Web/A4-Parität** im Kern (04a–05b).  
- Ergänzungen **`doc-a4.css`**; Umsetzung im Monorepo **qa-ctfl-track** unter **`02_Portfolio/QA_Lernwebseite/`** (siehe Abschnitt 7).  
- *Hinweis zur Reihenfolge am 21.03.2026:* Phase 2 (`9b4349e`, morgens) → Phase 3 (`1eb5b8f`, ca. 09:19) → Phase 4 (`0c43f00`, ca. 09:44) am selben Kalendertag.

**In Klartext (Phase 3):** **Gleiche Begriffe** überall (z. B. „Testbasis-Analyse“), **Meta-Leiste** und **A4-Status** einheitlich, **Web- und A4-Version** der gleichen Inhalte **soweit möglich** auf eine Linie gebracht — damit man beim Lesen nicht zwischen **Widersprüchen** springt.

### Phase 2 (Website, HA4/HA5): Story-Kette und UX — **Detailleistungen vollständig**

1. **04b (A4):** Grüne Hinweis-Box auf Blatt 4 — **Vorschau 9 Testfälle HA5** (3 je Feature).  
2. **04d (A4):** Seite 2 — Box **„Besonderheit GM-F03 — Auswahl-Begründung“** (gleichrangige „In Anforderung“-Fragen, BVA-Grenze 20 €).  
3. **04a:** Blaue **Dokumentenkette**-Box am Seitenende — Verweis formales A4 (04b), unpersönliche Formulierung.  
4. **05a / 04c:** Infos gestrafft — eine kompakte **CTFL/IEEE-Box** auf 05a; auf 04c kurzer Verweis auf 05a statt langer Duplikation; Klarstellung **„Testkonzept folgt später“**.  
5. **Story-Boxen:** Einheitlich **`info-box--note` (blau)** für Dokumentenkette; **gelb/warn** für didaktische „Was ist …?“-Boxen; Titelschema **„Dokumentenkette — … → …“**; sichtbare Linktexte **ohne** Dateikürzel `04a`/`04b`/… in Klammern.  

**Git (Monorepo, Website-Pfad):** Meilenstein-Commit u. a. **`9b4349e`** (Phase 2; Historie der Lernwebsite in **qa-ctfl-track**).

**In Klartext (Phase 2):** Die **rote Linie** der Hausaufgaben (von der Analyse bis zu den Testfällen und dem Konzept) soll für **Leserinnen und Leser** **nachvollziehbar** sein: **blaue Boxen** = „**wohin** gehört das im Dokumentenfluss?“, **gelbe** = „**was bedeutet** das fachlich?“. Vorschauen auf der **A4-Seite** und **Verweise** zwischen Web- und Druckfassung wurden **verdichtet** und **einheitlich** beschriftet.

### Phase 1 (Website, HA4/HA5): Konsistenzprüfung

- Story/Inhalte bereinigt (u. a. **GM-F02**, **GM-F03**, Sterne, Kategorie-Umbruch).  
- **Messbarkeit / Ergebnis:** identifizierte Inkonsistenzen **behoben**.

**In Klartext (Phase 1):** Erster **Durchgang**: Inhalte und Story (Fallstudie GroceryMate) auf **Widersprüche** geprüft und **bereinigt** — Grundlage für die späteren Phasen 2–4.

### Technische Baseline *QA_Lernwebseite* (abgeschlossen)

- **Hauptsystem** vereinheitlicht und als aktives System im Einsatz.  
- **Root-Index final:** `index.html` ist die **einzige** Einstiegsseite; Redirect und frühere Zwischeneinstiege entfernt; aktive Seiten verlinken konsistent auf `index.html`.  
- **Benennungslogik Runde 1** festgezurrt; **Benennungsmatrix** Gruppen 1–4 **fachlich geklärt, dokumentiert und technisch umgesetzt** (Dateinamen, Navigation, `<title>`, `<h1>`, Untertitel, Karten auf der Einstiegsseite).  
- **Migration** im Website-Projekt: Altseiten in **`archive/`** abgegrenzt; **Referenzvorlage** unter **`templates/`**; nachgezogene Seiten (**HA-Einordnung**, **SDLC statisch**, **SDLC animiert**) ins Hauptsystem überführt; **02c Teststufen & Testarten** migration abgeschlossen.

**In Klartext (technische Baseline):** Die Website hat **ein** gemeinsames **Layout und eine klare Navigation**; es gibt **nur noch eine** Einstiegsseite (`index.html`). **Dateinamen und Menüs** folgen einer **festen Logik**; alte Seiten liegen **archiviert**, damit sie nicht mit dem **aktuellen** Lernsystem verwechselt werden.

### Programm: Greenfield-Denkphase & Architektur-Website (Website)

- **Design- und Konsistenz-Harmonisierung** an Haltepunkt **pausiert** (Seitenrahmen-Konzept und Formular-Basis **verbindlich**).  
- Anschließend **Greenfield-Denkphase**: Seitentypen, Komponenten, Benennungslogik und Sollstruktur erarbeitet; **Programmrahmen und Website-Rolle** in **[01_Project_Charter.md](01_Project_Charter.md)**, **operative Regeln, Ordnerlogik, A4-/Dokumentmodus und Workflow** in **[03_Project_Standards.md](03_Project_Standards.md)** (u. a. Abschn. 3, 6, 7) festgehalten.  
- **Dokument-/A4-Modus:** bewusst als **Präsentations-/Layoutmodus** innerhalb **desselben** Systems gefasst (kein eigener Wissens-Seitentyp) — siehe [03_Project_Standards.md](03_Project_Standards.md) Abschn. 6 (*QA_Lernwebseite — gemeinsamer Seitenrahmen*, Dokument-/A4-Modus).

**In Klartext (Greenfield / Architektur):** Bevor **groß** umgebaut wurde, wurden **Regeln** und **Rollen** der Website im **Charter** und in den **Standards** festgehalten: *Was* die Site leisten soll, *wie* Ordner heißen, dass **A4-Seiten** (für Abgaben) **anders aussehen** dürfen als **normale Lernseiten**, aber im **gleichen** Projekt bleiben.

### Repository-Gesamtstruktur (Migration Top-Level, **aktuelle Pfade**)

Die folgende **Ist-Struktur** im Arbeitsverzeichnis **`qa-ctfl-track/`** ersetzt **veraltete** Top-Level-Ordnernamen aus früheren Repo-Versionen (u. a. `00_PROJEKTSTEUERUNG`, `01_Grundlagen …`, `02_Hausaufgaben_und_Testentwurf`, `03_Projekt`, `04_Notizen`, `05_Referenzen`, `99_Archiv`):

**In Klartext:** Das **Projekt** liegt in **einem** Git-Ordner mit **klaren** Hauptzweigen: **Steuerung**, **Portfolio/Website**, **Hausaufgaben**, **Referenzen**, **Notizen**, **Archiv** — damit Materialien **nicht** durcheinandergeraten. Nicht alles wird ins **Internet-Repository** geladen (siehe **`.gitignore`**); das ist **Absicht** für persönliche Aufgaben und Notizen.

| Ordner (aktuell) | Zweck |
|------------------|--------|
| **`01_Projektsteuerung/`** | **Project\_*-Serie:** Charter, Status, Standards, Guidelines, Reference Quick; ältere Steuerkopien können unter **`06_Archiv/`** liegen. |
| **`02_Portfolio/`** | Portfolio-Artefakte; **`QA_Lernwebseite/`** = öffentliche Lernwebsite als **Unterordner** im **Monorepo** **qa-ctfl-track** (ein Git für Steuerung + Website; früheres separates Website-Repository existiert nicht mehr). |
| **`03_Hausaufgaben/`** | Hausaufgaben HA1–HA6 (Testdesign bis Testdurchführung) und zugehörige Abgaben. |
| **`04_Referenzen/`** | ISTQB-Lehrplan, Normen, externe Referenzmaterialien. |
| **`05_Notizen/`** | Unterrichtsnotizen, temporäre Arbeitstexte. |
| **`06_Archiv/`** | Archivierte Themen inkl. ggf. älterer Steuerungskopien (`Projektsteuerung_alt` o. Ä.). |

*Git / Monorepo:* **`qa-ctfl-track`** ist **ein** Repository (**Remote:** `origin` auf GitHub). **`03_Hausaufgaben/`**, **`04_Referenzen/`**, **`05_Notizen/`**, **`06_Archiv/`** und **`07_Tests/`** sind per **`.gitignore`** derzeit **ausgeschlossen** (lokal nutzbar; spätere Versionierung möglich).

*Hinweis:* Ältere Detailstände zur **Design-Harmonisierung** (frühere Phasen 1–5, Formular-Basis-Migration) sind bei Bedarf in **Git-Historie**, **Archiv** oder älteren Statuspassagen nachvollziehbar.

---

## 3. Aktive Arbeitspakete

*(Priorisiert nach Wichtigkeit, nicht rein chronologisch.)*

| P | Arbeitspaket | Stand / Kurzbeschreibung |
|---|----------------|---------------------------|
| **P1** | **Komponentenstil / Designsystem light** (*QA_Lernwebseite*) | **Konzept:** `designsystem-workshop/` Sessions **1 + 2–2f**; [03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md). **Pilot (Stand 2026-03-31):** **F-META** / **F-LEGEND** / **correction-bar** in **`base.css`**; **04b** dokumentiert *Umsetzungsstand* **F-META**. **Weiter:** **1–2** weitere Familien (Callouts, A4) in **`base.css`** / **`doc-a4.css`** **evaluieren**; Mapping **iterieren**. Regeln **nach** Review in **[03_Project_Standards.md](03_Project_Standards.md)** (Abschn. 6 ff.) schärfen. **IST:** [website-analyse-2026-03-28.md](designsystem-workshop/website-analyse-2026-03-28.md), [komponenten-analyse-2026-03-30.md](designsystem-workshop/komponenten-analyse-2026-03-30.md); **SOLL/Semantik:** **02f**, **02d**, **02e**. |
| **P2** | **Konsistenz- und Darstellungsregel-Ebene** (Website, außerhalb HA4/HA5-Kern) | Einheitliche Regeln auch für Module **außerhalb** der fertiggestellten Kernstrecke; ggf. offene Seiten gemäß **Lernplan** ([03_Project_Standards.md](03_Project_Standards.md) Abschn. 2) und Charta-Zielen nachziehen. |
| **P3** | **Kurs- und Portfoliopfad** | Fortführung gemäß **Notion-Lernplan** und MasterSchool-Vorgaben; **HA6** auf der **Lernwebsite** als Kette **06a–06c** abgebildet (siehe Abschnitt 3); weitere offene optionale Punkte (z. B. Portfolio-Automation, Issues) siehe ggf. archivierte oder neue **Hausaufgaben-Analysen** (`06_Archiv/Projektsteuerung_alt/` bzw. Schema `YYYY-MM-DD_Hausaufgabenanalyse.md` in `01_Projektsteuerung/`). |

**Ausgangsbasis Komponentenstil / Designsystem light**

- **IST (Website, Meta):** [website-analyse-2026-03-28.md](designsystem-workshop/website-analyse-2026-03-28.md) — Stichproben, Roadmap, priorisierte Verbesserungen.  
- **IST (Seiten, technisch):** [komponenten-analyse-2026-03-30.md](designsystem-workshop/komponenten-analyse-2026-03-30.md); Seitenmatrix [02c](designsystem-workshop/02c-vollstaendige-seitenmatrix-2026-03-30.md).  
- **SOLL / Semantik / Drei Ebenen:** [02f](designsystem-workshop/02f-soll-taxonomie-session3-2026-03-30.md), [02d](designsystem-workshop/02d-drei-ebenen-modell-2026-03-30.md), [02e](designsystem-workshop/02e-diataxis-integration-kritisch-2026-03-30.md).  
- **Rolle:** **Website-Analyse** = IST-Bewertung; **Workshop** = abgestimmtes **Zielbild**; **[03-token-mapping](designsystem-workshop/03-token-mapping-2026-04-01.md)** = **schriftliche** IST→SOLL→Token-Brücke — **kein** Widerspruch, sondern **Top-down** zu **IST→SOLL**.  
- **Nacharbeit:** **Token-Mapping** bei **Schema- oder Taxonomie-Änderungen** **fortschreiben** (Ausgang: [03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md)); bei neuer IST-Runde ggf. `website-analyse-YYYY-MM-DD.md` unter `designsystem-workshop/` ergänzen.

### HA6 — Testdurchführung (Kurs / Website-Portfolio)

| Bereich | Status |
|---------|--------|
| **Gesamt (QA_Lernwebseite)** | **Abgeschlossen** — **06a** Testprotokoll, **06b** Fehlerbericht (BUG-001 / BUG-002), **06c** Testabschlussbericht als **Musterdokumente** im Hauptsystem. |
| **Testprotokoll (06a-ha6-testprotokoll-a4)** | **Vorhanden** |
| **Fehlerbericht (06b-ha6-fehlerbericht-a4)** | **Vorhanden** |
| **Testabschlussbericht (06c-ha6-testabschlussbericht-a4)** | **Vorhanden** |

*Hinweis:* **Kursabgabe** oder Artefakte unter **`03_Hausaufgaben/HA6_Testdurchfuehrung/`** sind **nicht** automatisch mit der Website identisch; bei Abweichungen gilt der **Kursordner** bzw. die Dozenten-Vorgabe. Die **Lernwebsite** bildet die **konsistente Dokumentenkette** HA4 → HA5 → HA6 ab.

---

## 4. Risiken & Probleme

*(Aktuelle / wirkungsstärkere Punkte zuerst.)*

| ID | Risiko / Problem | Auswirkung | Gegensteuerung (geplant / aktiv) |
|----|-------------------|------------|-----------------------------------|
| **R1** | **Designsystem light** — Rollout über Callouts/A4 **noch offen** | **Teil** der Seiten kann noch **uneinheitlich** wirken | Priorisierung **P1**; **Pilot F-META/F-LEGEND** (2026-03-31) **reduziert** Drift auf Kernseiten; **nächste** Evaluierung: weitere Token-Familien — Verankerung in **[03_Project_Standards.md](03_Project_Standards.md)** / **[01_Project_Charter.md](01_Project_Charter.md)** **nach** belastbarer Iteration |
| **R2** | **Drift Steuerung ↔ Umsetzung** nach größeren Website- oder Strukturänderungen | **Project\_*-Dokumente** oder **README** veralten gegenüber **main** | Manuelle **Querprüfung** bei Architektur-Änderungen; **[04_Project_Guidelines.md](04_Project_Guidelines.md)** (Versionskontrolle & Git) für **qa-ctfl-track**; bei Bedarf **Status** / **Standards** nachziehen |
| **R3** | **Veraltete Steuerkopien** im Ordner | **Fehlnavigation** für Leser | **Einstieg nur** über **Project\_***; Altdateien archivieren; **dieses Dokument** und **[03_Project_Standards.md](03_Project_Standards.md)** als maßgebliche Orientierung |
| **R4** | **Ein-Personen-Engpass** | Verzögerung bei parallelen Kurs- und Website-Meilensteinen | Strikte **Priorisierung**; Fokus **Kursfristen** vor „Nice-to-have“-Website-Themen |

---

## 5. Änderungen / Entscheidungen

*(Neueste / wesentliche Entscheidungen zuerst.)*

| Datum (ca.) | Entscheidung / Änderung |
|-------------|-------------------------|
| **2026-04-02** | **Design-Taxonomie definiert (Pilot-Phase):** [03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md) — IST→SOLL→Token über **C-/F-/P-/S-***; **ca. 15–30** konsolidierte CSS-Variablen **Zielgröße**; **Workshop-Ordner** bleibt **Referenz**; **Umsetzung** im Stylesheet = **Pilot**, nicht Abschluss. **Außerdem:** **02_Project_Status.md** — **einheitliches Narrativ** (**Session 3** *schriftlich* = Mapping **liegt vor**; **nächster technischer Schritt** = **Pilot** in CSS); §2–§4 und Fußnote §7 **abgestimmt**. |
| **2026-04-02** | **`.gitignore`:** Top-Level **`07_Tests/`** ausgeschlossen; **[03_Project_Standards.md](03_Project_Standards.md)** (Geltungsbereich, §3, §8), **[04_Project_Guidelines.md](04_Project_Guidelines.md)**, **[05_Reference_Quick.md](05_Reference_Quick.md)** und **dieses Dokument** (Repo-Tabelle §2) **abgestimmt**. |
| **2026-04-01** | **Diátaxis (S-*)** in **02e** / **02f** geklärt: Modus **für Leser sichtbar** (Label/Badge) — **Zielbild**; **Session 3** priorisiert **C/F/P**-Tokens, **S-***-Umsetzung **phasenweise**; **kein** „nur Doku“ als Endzustand. |
| **2026-03-31** | **IST-Analysen** (`website-analyse-…`, `komponenten-analyse-…`): **kanonische Ablage** = `01_Projektsteuerung/designsystem-workshop/`; **Kopie** der Website-Analyse unter `02_Portfolio/QA_Lernwebseite/` **entfernt**; [README QA_Lernwebseite](../02_Portfolio/QA_Lernwebseite/README.md) und Verweise in **diesem Dokument** zeigen auf den **Workshop-Ordner** (eine gültige Fassung, kein Drift). |
| **2026-03-30** | **Designsystem-Workshop (Sessions 2–2f)** als **Steuerungsgrundlage** für **P1** anerkannt: **Drei Ebenen** (Content / Semantic / Presentation); **Diátaxis** in **Semantic** (**S-***: **nicht** pro Box; **mehrere Modi pro Seite** über Abschnitte möglich; **Ziel** Leser-sichtbare **Labels**); **SOLL-Codes** **C-/F-/S-/P-** als **Zielbild** — **finale Benennung** mit **Session 3 (Tokens)**. **Priorität** Session 3: **C/F/P** zuerst; **S-***-Sichtbarkeit **phasenweise** (§**02f**). |
| **2026-03-29** | **P4 Steuerungskonsolidierung** abgeschlossen: maßgeblich **nur** die **Project\_*-Serie** unter `01_Projektsteuerung/`; ersetzte Altsteuerung unter **`06_Archiv/Projektsteuerung_alt/`**; **Repo-Struktur** und **Repository Health** in **[03_Project_Standards.md](03_Project_Standards.md)** Abschnitt **3** und **8** als Referenz (laufende Pflege bei Strukturänderungen). |
| **2026-03-29** | **Dokumentation & Git:** Steuerungsdateien und READMEs an **Entfall** des früheren separaten Website-Repositories und des Git-Remotes **`website`** angepasst; kanonisch bleibt **nur** das Monorepo **qa-ctfl-track** (`origin`). |
| **2026-03-28** | **Website-Analyse** zunächst unter `02_Portfolio/QA_Lernwebseite/` als **verbindliche Ausgangsbasis** für **P1** verankert — **IST/Roadmap** dort, Steuerung per **Verweis**; *kanonischer Standort der IST-Analysen ab 2026-03-31: `designsystem-workshop/` (siehe Eintrag oben).* |
| **2026-03-21** | **Standards-Review Phase 4** abgeschlossen (u. a. Commit **`0c43f00`**, ca. 09:44 UTC+1); **CTFL-/IEEE-829-Formulierungen** und **index-/Standards-Seiten** angeglichen; Bewertung **„professionell genug“** für Lern-Portfolio dokumentiert. |
| **2026-03-21** | **Phase 3** abgeschlossen (**09:19 UTC+1**, **`1eb5b8f`**): **Terminologie-Harmonisierung**, Meta-Leiste, A4-Status, **Web/A4-Parität** HA4/HA5-Kern. |
| **2026-03-21** | **Phase 2** abgeschlossen (**08:43 UTC+1**, **`9b4349e`**): **Story-/Dokumentenkette**, **Farblogik** (blau = Kette, gelb = didaktisch), GM-F03/04b-Vorschau u. a. |
| **Vor Phase 1–4** | **Benennungsmatrix** und **technische Umsetzung** für alle aktiven `pages/` verbindlich; **Root** bleibt **`index.html`** (Root-Sonderregel). |
| **Konzeptebene** | **A4-Modus** = **Präsentationsmodus**, kein eigener Wissens-Seitentyp; **Einstiegsseite** = Variante des Hauptsystems. |
| **Organisation** | **Greenfield-Systemkonzept** vor großflächigem Refactoring; Harmonisierung älterer Spur an **Haltepunkt** mit verbindlichem Seitenrahmen/Formularbasis. |

---

## 6. Nächste Schritte

*(Priorisierte Reihenfolge — **nicht** Zeitachse der Entstehung.)*

1. **P1 — Designsystem light:** **IST→SOLL→Token-Mapping** liegt in **[03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md)** — **Pilot** (z. B. Chip-Skala + eine Callout-Familie) **ausführen** und **evaluieren**; **[03_Project_Standards.md](03_Project_Standards.md)** (Abschn. 6) bei Bedarf nach **Pilot** schärfen; **[01_Project_Charter.md](01_Project_Charter.md)** bei Bedarf nachziehen. **IST:** [website-analyse-2026-03-28.md](designsystem-workshop/website-analyse-2026-03-28.md) / [komponenten-analyse-2026-03-30.md](designsystem-workshop/komponenten-analyse-2026-03-30.md) weiterhin gültig.  
2. **P2 — Globale Konsistenz:** Darstellungsregeln **über** HA4/HA5-Kernstrecke **erhöhen**; verbleibende Seiten/Module **einordnen**.  
3. **Status & Steuerung:** **Dieses Dokument** ([02_Project_Status.md](02_Project_Status.md)) bei **Meilensteinen** aktualisieren; **Einstieg** für Leser: [01_Project_Charter.md](01_Project_Charter.md) · **dieses Dokument** · [03_Project_Standards.md](03_Project_Standards.md) · [05_Reference_Quick.md](05_Reference_Quick.md). **Designsystem:** Ordner **`designsystem-workshop/`**.  
4. **P3 — Kurs:** Notion-Lernplan und anstehende **Hausaufgaben/Abgaben** **fristgerecht** bedienen; Artefakte unter **`03_Hausaufgaben/`** und Portfolio pflegen.

---

## 7. Metriken / Evidenz

### Versionierung & Lernwebsite (*QA_Lernwebseite* im Monorepo)

| Evidenz | Hinweis |
|---------|---------|
| **Commits (Auszug)** | Website-Meilensteine u. a.: Phase 2 **`9b4349e`** (2026-03-21 08:43 UTC+1); Phase 3 **`1eb5b8f`** (2026-03-21 **09:19** UTC+1); Phase 4 **`0c43f00`** (2026-03-21 09:44 UTC+1); Repo-Links Einstieg/Standards: **`78ee176`** — Historie der Seiten liegt in **einem** Repo (**qa-ctfl-track**), Pfad **`02_Portfolio/QA_Lernwebseite/`**; Branch **`main`**, Remote **`origin`**. |
| **Architektur-Website (Rahmen & Regeln)** | [01_Project_Charter.md](01_Project_Charter.md) — Programmrahmen, Website-Rolle, Qualitätsmaßstab; [03_Project_Standards.md](03_Project_Standards.md) — Ordnerlogik, IA/Benennung im Workflow, A4-/Dokumentmodus (Abschn. 3, 6, 7). |
| **Charter (Programm)** | [01_Project_Charter.md](01_Project_Charter.md) — Vision, Scope, Grenzen. |
| **Status (Ist)** | **Dieses Dokument** — Meilensteine, Arbeitspakete, Risiken. |

### Externe Steuerung

| Ressource | Link |
|-----------|------|
| **Lernplan (Notion)** | [Notion – Lernplan](https://www.notion.so/3029418319f381f19aa6c492dfdbcee2?pvs=21) |
| **MasterSchool Übersicht** | [MasterSchool Notion – chd108](https://www.notion.so/3029418319f38063bbc2c201c57b7ef4) |

### Steuerungsdokumente (Überblick — **Project\_*-Serie**)

| Bereich | Dokument(e) |
|---------|-------------|
| **Projekt (Vision, Scope)** | [01_Project_Charter.md](01_Project_Charter.md) · **dieses Dokument** · Lernplan-Zuordnung und CTFL-Bezug: [03_Project_Standards.md](03_Project_Standards.md) **Abschnitt 2** |
| **Repo / Struktur / Health** | [03_Project_Standards.md](03_Project_Standards.md) **Abschnitt 3** (Ordnerarchitektur) und **Abschnitt 8** (Repository Health & Review) |
| **KI, Rollen, Kommunikation, Git (Monorepo)** | [04_Project_Guidelines.md](04_Project_Guidelines.md) *(Inhalt früher u. a. in Arbeitsvereinbarung, Prompt- und Commit-Richtlinien; maßgeblich ist dieses eine Dokument.)* |
| **Prompts / Schnellnavigation / externe Links** | [05_Reference_Quick.md](05_Reference_Quick.md) *(Inhalt früher u. a. in separaten Prompt- und Schnellreferenz-Dateien.)* |
| **Architektur Website (fachlich)** | [01_Project_Charter.md](01_Project_Charter.md) + [03_Project_Standards.md](03_Project_Standards.md) — **ohne** separates Konzeptdatei neben der Project\_*-Serie |
| **IST-Analysen (Website + Komponenten; P1)** | [website-analyse-2026-03-28.md](designsystem-workshop/website-analyse-2026-03-28.md), [komponenten-analyse-2026-03-30.md](designsystem-workshop/komponenten-analyse-2026-03-30.md) — **kanonisch** unter `designsystem-workshop/`; Verweis in **diesem Dokument** (Abschn. 3) und [README QA_Lernwebseite](../02_Portfolio/QA_Lernwebseite/README.md) |
| **Designsystem-Workshop (Sessions 1–2f, SOLL, Drei Ebenen, Diátaxis)** | `01_Projektsteuerung/designsystem-workshop/` — u. a. [02f-soll-taxonomie-session3-2026-03-30.md](designsystem-workshop/02f-soll-taxonomie-session3-2026-03-30.md); **Session 3:** [03-token-mapping-2026-04-01.md](designsystem-workshop/03-token-mapping-2026-04-01.md) (**Pilot-Phase** CSS) |
| **Reports (Hausaufgaben-Analyse)** | Neu: `01_Projektsteuerung/YYYY-MM-DD_Hausaufgabenanalyse.md` gemäß [03_Project_Standards.md](03_Project_Standards.md) Abschnitt 4; **Beispiel** (archiviert): `06_Archiv/Projektsteuerung_alt/11_Hausaufgabenanalyse_2026-03-09.md` |

---

*Nächste Aktualisierung dieses Statusberichts: nach **Pilot** (**CSS**-Umsetzung / Evaluation), bei **größerer** Revision des **Token-Mappings**, bei **Kurs-Meilensteinen** oder spätestens zur **geplanten Charter-Überprüfung** (siehe [01_Project_Charter.md](01_Project_Charter.md), Abschnitt 8). **Hinweis:** **„Session 3“** ist hier **nicht** gleichbedeutend mit „alles erledigt“ — **schriftliches Mapping** und **Rollout im Stylesheet** sind **getrennt** zu pflegen.*
