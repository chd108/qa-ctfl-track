Datei erstellt: 2026-03-23  
Letzte Aktualisierung: 2026-03-23 (Klärung: kein „Konzeptdokument“ mehr; Verweise auf Charter/Standards präzisiert)  
Zweck: Definiert Arbeitsweisen für KI-gestützte Arbeit, ein verbindliches fachliches Rollenmodell (Autor / KI-Werkzeuge) und Versionskontrolle  
Klassifizierung: Projektsteuerung / Guidelines  
Normative Orientierung: ISO 21502, PMBOK — angepasst an KI-gestützte Ein-Personen-Arbeit.

---

# Project Guidelines — QA-Track

## 1. Zweck & Anwendung

Dieses Dokument regelt **Zusammenarbeit mit KI-gestützten Werkzeugen** (ChatGPT, Cursor, Claude), das **verbindliche fachliche Rollenmodell** (Abschnitt 2) sowie **Versionskontrolle und Commit-Praxis** für die **öffentliche Lernwebsite *QA_Lernwebseite*** — im Einklang mit [03_Project_Standards.md](03_Project_Standards.md) (Geltungsbereich, Steuerungslogik).

**Geltung:** Verbindlich für alle Arbeiten, bei denen KI den **QA-Track** (`000_QA_Track`) oder die **Lernwebsite** unterstützt oder verändert, und für alle **Git-Commits und Pushes**, die **ausschließlich** das **Website-Repository** betreffen (siehe Abschnitt 5).

**Lesereihenfolge mit anderen Steuerungsdokumenten:** Zuerst [01_Project_Charter.md](01_Project_Charter.md) und [03_Project_Standards.md](03_Project_Standards.md) für Kontext und Ablage; dieses Dokument für **Kommunikation, Prompting und Git der Website**.

---

## 2. Rollen & Verantwortung

### Fachliche Rollen und Akteure

**Einordnung:** Entspricht der **Steuerungslogik** in [03_Project_Standards.md](03_Project_Standards.md) (QA-Track `000_QA_Track/`, eingebettete **QA_Lernwebseite**). Die folgenden **fachlichen Rollen** sind **kein** externes RACI-Modell für Teams, sondern ein **Arbeitsmodell für Ein-Personen-Projekt + KI**: Sie klären, **welches Werkzeug** für welche **Denk- und Arbeitslage** zuständig ist. **Maßgeblich** für **KI-Arbeit, Kommunikation und Git** ist **dieses Dokument**. **Architektur- und Qualitätsrahmen der Lernwebsite** (Ziele, Scope, Benennung, Ordnerlogik, A4-/Dokumentmodus, Workflow) stehen in **[01_Project_Charter.md](01_Project_Charter.md)** und **[03_Project_Standards.md](03_Project_Standards.md)** — **ohne** separate Konzeptdatei neben der **Project\_*-Serie**.

**Zuordnung fachliche Rolle → Akteur (verbindlich):**

| # | Fachliche Rolle | Akteur | Typischer Fokus |
|---|-----------------|--------|-----------------|
| 1 | Product Owner / Domain Lead | **Autor** (Projektinhaber) | Ziele, Prioritäten, Nutzen, Qualitätsmaßstab, fachliche Richtung, Freigaben |
| 2 | Architecture & Coordination | **ChatGPT** | Struktur, Einordnung, Systemlogik; Konsistenz und Entscheidungsrahmen **im Dialog** |
| 3 | Subject-Matter Review & Content Design | **Claude** | Fachliche Prüfung, inhaltliche Struktur, QA-/ISTQB-/Testing-Inhalte, HTML-/Inhaltsentwürfe — typischerweise **im Dialog**; Übernahme ins Repo durch **Autor** oder **Cursor** |
| 4 | Implementation & Delivery | **Cursor** | Technische Umsetzung **direkt im Repo** (Dateien, Code, Refactoring, Struktur) |

**Inhalt der fachlichen Rollen (Sachebene):**

- **Product Owner / Domain Lead:** Gibt Ziel, Prioritäten, Nutzen und Qualitätsmaßstab vor; verantwortet die fachliche Richtung.
- **Architecture & Coordination:** Strukturiert, ordnet und koordiniert; hält Systemlogik, Konsistenz und Entscheidungsrahmen zusammen.
- **Subject-Matter Review & Content Design:** Unterstützt bei fachlicher Prüfung und inhaltlicher Struktur; besonders für QA-/ISTQB-/Testing-Inhalte und HTML-/Inhaltsentwürfe.
- **Implementation & Delivery:** Setzt technisch um; arbeitet an Dateien, Code, Refactoring und Struktur.

**Technischer Zugriff:** **Cursor** hat **Lese- und Schreibzugriff** auf die im Workspace geöffneten Projektdateien und trägt damit **Implementation & Delivery** im Repo. **ChatGPT** und **Claude** haben **keinen** automatischen Dateizugriff; ihre Ausgaben (u. a. **Architecture & Coordination**, **Subject-Matter Review**) sind vom Autor zu **prüfen** und ggf. **manuell** oder **über Cursor** ins Artefakt zu übernehmen. **Git-Commits** der Website folgen unverändert **Abschnitt 5**.

### Arbeitsprinzipien

**Grundprinzip:** KI liefert **Vorschläge und Ausführungen**; der Autor **prüft, entscheidet und gibt Rückmeldung**. **Keine** Änderungen ohne klaren Auftrag; bei Unklarheiten **nachfragen oder Rückversicherung** statt stiller Annahme (siehe Abschnitt 3 und 7).

**Shared Mental Model (mit KI):** Gemeinsames Verständnis von **Ziel** (z. B. Lernmaterial strukturieren, Website konsistent halten) und **Struktur** (Ordner, Benennung, Steuerungsdokumente gemäß **Project Standards**). Unklarheiten werden **benannt**, nicht unterstellt.

---

## 3. Kommunikationsprotokoll

### Struktur einer Anfrage oder Rückmeldung

| Aspekt | Bedeutung |
|--------|-----------|
| **Was ist bekannt** | Fakten, Kontext, bereits Festgelegtes (inkl. Verweis auf Charter/Standards, wenn relevant). |
| **Was ist unklar** | Offene Fragen, Interpretationsspielraum. |
| **Aufgabe** | Konkret, was getan werden soll (Datei, Ordner, Umfang). |
| **Rückmeldung** | Wie das Ergebnis genutzt wird (prüfen, übernehmen, anpassen). |

### Regeln

- Bei **Verständnisfragen** oder **wichtigen Anweisungen** des Autors: KI **zuerst Rückversicherung**, **dann** Umsetzung (kein „blindes“ Arbeiten gegen unklare Ziele).  
- **Grenzen im Prompt** klar benennen (siehe Abschnitt 4): was **nicht** geändert werden soll.  
- **Sensible Inhalte:** keine Passwörter, Tokens oder personenbezogenen Daten in Prompts oder Commits.

---

## 4. Leitlinien für KI-Prompting

Prompts sollen **eindeutig, vollständig und handlungsorientiert** sein: **wo** gearbeitet wird, **was** getan wird, **wie** das Ergebnis aussehen soll.

**Abgleich mit Abschnitt 2:** Vor der Formulierung kurz die **passende fachliche Rolle** wählen — **Architecture & Coordination** → **ChatGPT**; **Subject-Matter Review & Content Design** → **Claude**; **Implementation & Delivery** (Code, Refactoring, Dateien im Repo) → **Cursor**. **Product Owner / Domain Lead** bleibt beim **Autor** (Zielvorgabe im Prompt, keine Delegation der Verantwortung).

### Bestandteile eines guten Prompts

| Bestandteil | Bedeutung |
|-------------|-----------|
| **Kontext** | Thema, betroffene Bereiche (Website vs. restlicher Track), relevante Regeln. |
| **Grenze** | Was **nicht** getan werden soll (andere Ordner, Dateien, Scope-Creep, Refactors „nebenbei“). |
| **Aufgabe** | Konkrete Anweisung („Erstelle …“, „Ändere …“, „Prüfe …“). |
| **Rückgabeform** | Format (Markdown, Tabelle, Diff), Dateinamen, Struktur der Antwort. |
| **Unsicherheit** | Offen benennen („Unklar, ob …“ / „Bitte nachfragen, wenn …“), damit die KI **nachfragt** statt **rät**. |
| **Git (falls relevant)** | Wenn Commits gewünscht: **Geltungsbereich nur Website-Repo** (Abschnitt 5); Commit-Stil und **keine** Tool-Kennzeichen in Messages (Abschnitt 5–6). |

### Kurzformel

**Kontext + Grenze + Aufgabe + Rückgabeform + Unsicherheiten** — bei Git-Themen die **Regeln aus Abschnitt 5 und 6** mitdenken.

---

## 5. Versionskontrolle & Git

### Aktueller Geltungsbereich (**Stand dieser Richtlinie**)

**Versioniert, committet und gepusht wird ausschließlich** das **Git-Repository der Lernwebsite *QA_Lernwebseite***.

- **Pfad im Workspace:** `02_Portfolio/QA_Lernwebseite/` (Root des Website-Repos, inkl. `.git/`).  
- **Nicht** Gegenstand dieses Git-Prozesses: der **gesamte** Ordner `000_QA_Track` **oberhalb** der Website — dort wird **aus dieser Richtlinie heraus** **kein** `git commit` / **kein** Push für das Gesamtprojekt erwartet.

**Ausblick:** Geplant ist, **später** das **gesamte** Arbeitsverzeichnis **`000_QA_Track`** unter **einem** Git-Repository zu führen. **Bis zur Einführung** dieser Erweiterung bleibt die **Trennung**: **nur** die **QA_Lernwebseite** ist das öffentlich versionierte Produkt; Steuerungsdateien und Hausaufgaben liegen **lokal** bzw. außerhalb dieses Website-Git-Prozesses.

### Abgleich mit dem QA-Track (manuell)

Änderungen an **Architektur, Inhalten oder Benennung** der Website können **Auswirkungen** auf die **Steuerungsdokumentation** im Ordner `01_Projektsteuerung/` haben — namentlich **Charter** (Programmrahmen, Website-Rolle), **Status** (Ist, Meilensteine) und **Standards** (Repo, Benennung, Website-Integration, A4-/Dokumentmodus). Das gehört **nicht** automatisch in jeden Website-Commit. **Wer** die Website anpasst, **prüft bei Bedarf**, ob diese **Project\_*-Dateien** noch mit dem Ist-Stand übereinstimmen.

### Vor dem Commit (Website-Repo)

| Prüfpunkt | Frage |
|-----------|--------|
| **Staging** | Sind nur die **gewollten** Dateien vorgemerkt? |
| **Inhalt** | Sind die Änderungen **aktuell**, **vollständig** und in **einem Satz** erklärbar? |
| **Begleit-Doku** | Bei sichtbaren oder strukturellen Änderungen: **`README.md`** der Website mitgezogen? |
| **Risiko** | Keine **Secrets**, keine **lokalen Nur-mir-Pfade**; **öffentliches** Repo beachten. |

**Nicht** committen: temporäre Dateien, Backups, Cache, persönliche Notizen, Dateien **ohne** klaren Bezug zur Website.

### Commit-Nachrichten

**Ziel:** Historie wie ein **Projekttagebuch** — **warum**, **in welchem Kontext** (Phase, Meilenstein, Standards, didaktische Linie) und **was sich wo** ändert. Bei inhaltlich oder strukturell relevanten Änderungen ist ein **ausführlicher Body** der **Normalfall** (orientiert an der bestehenden `main`-Historie der Website).

**Erste Zeile (Betreff):** kurz, suchbar; Präfixe wie `docs:`, `fix:`, `feat:` möglich. **Keine** internen Arbeits- oder Layout-Labels wie „V2“, „V3“ in Betreff oder Body. Stattdessen **sachlich**: Hauptsystem, Navigation, Einstieg, A4-/Dokumentmodus, konkrete Seiten/Dateien.

**Body (bei relevanten Commits):** u. a. Hintergrund, Änderungen im Detail (gern nach Datei/Seite), bewusste Nicht-Entscheidungen, **Liste geänderter Dateien**, ggf. Hinweis für Review/Drucktest, **Stand-Datum** (`TT.MM.JJJJ`) abgestimmt mit README/Standards-Seite der Website. Unterüberschriften im Body mit **Unterstreichung** (`-------`) sind **erwünscht**.  
**Nicht** in Commit-Texten: Zeilen wie `Made-with: Cursor` oder andere **Tool-/KI-Herkunfts-Kennzeichnungen** im öffentlichen Log.

**Kurze Messages** nur bei **trivialen** Änderungen (Tippfehler, minimale Korrekturen).

**Praktisch:** Längere Messages mit `git commit -F nachricht.txt` (oder Editor) setzen.

### Push

- Standard: Branch **`main`** → Remote **`origin`** (`git push origin main`).  
- **`git push --force`** auf **`main`** nur bei triftigem Grund und **bewusster** Entscheidung.

---

## 6. Nacharbeit nach Commit

- **Nach jedem abgeschlossenen Commit** bzw. **Push** der Website: die **vollständige** Commit-Nachricht (Betreff + Body) **im Chat** (bzw. dem genutzten KI-/Arbeitskanal) **mitteilen** — für **Nachvollziehbarkeit**, Lernen und **Folgeaufgaben**.  
- **Steuerung im QA-Track:** Wenn der Commit fachlich **Steuerungsdokumente** betrifft, **parallel** prüfen, ob **Status** oder **Standards** ein kurzes Update brauchen (ohne Pflicht zu jedem Website-Commit).

---

## 7. Konflikte & Klärung

- **Priorität:** Autor entscheidet bei Widersprüchen zwischen KI-Vorschlag und Projektzielen.  
- **Eskalation im Ein-Personen-Setup:** **Stopp**, Problem **schriftlich** klären (Ziel, Scope, Akzeptanzkriterien), dann erst weiterarbeiten.  
- **Zwischen Website und Track:** Wenn Git **nur** die Website betrifft, aber Inhalte **Steuerung** widersprechen könnten → **zuerst** Standards/Charter lesen, dann ggf. **Steuerung** anpassen oder Website-Inhalt korrigieren — **keine** stillschweigende Divergenz.  
- **Geplantes Gesamt-Git:** Wenn `000_QA_Track` später versioniert wird, **Commit-Regeln** und **Branch-Strategie** in **diesem Dokument** und in **Project Standards** zu ergänzen — bis dahin nur Website-Repo.

---

## 8. Checklisten

### Kurz vor einem Website-Commit

- [ ] Nur beabsichtigte Dateien im **Staging**  
- [ ] Änderung **in einem Satz** beschreibbar  
- [ ] **`README.md`** der Website bei Bedarf mitaktualisiert  
- [ ] Keine **Secrets**, keine irrelevanten **lokalen** Pfade  
- [ ] Commit-Message: **sachlicher** Betreff, bei Bedarf **ausführlicher** Body, **keine** V2/V3-Labels, **keine** Tool-Zeile  

### Kurz vor einem KI-gestützten Eingriff

- [ ] **Fachliche Rolle** und **Werkzeug** passen zusammen (Abschnitt 2: Architektur → ChatGPT, Subject-Matter/Content → Claude, Umsetzung im Repo → Cursor)  
- [ ] **Kontext** und **Grenze** im Prompt genannt  
- [ ] **Aufgabe** und **gewünschte Ausgabeform** klar  
- [ ] Unklarheiten **offen** benannt oder **Rückversicherung** eingeholt  

### Nach Commit / Push (Website)

- [ ] Vollständige Commit-Nachricht im **Chat** dokumentiert  
- [ ] Bei Bedarf **Status** / **Standards** im QA-Track geprüft  

---

*Dieses Dokument ersetzt inhaltlich frühere getrennte Vereinbarungen zu Arbeitsweise, Prompt-Formulierung und Website-Git sowie das darin gebündelte **fachliche Rollenmodell** — ohne Verweis auf deren Dateinamen in der aktiven Steuerung.*
