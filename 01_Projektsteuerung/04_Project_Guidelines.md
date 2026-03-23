Datei erstellt: 2026-03-23  
Letzte Aktualisierung: 2026-03-23 (Versionskontrolle: gesamtes Repo qa-ctfl-track / Monorepo; Regel Aktuelles Datum; Commit-Nacharbeit: Git-Text + Prosa)  
Zweck: Definiert Arbeitsweisen für KI-gestützte Arbeit, ein verbindliches fachliches Rollenmodell (Autor / KI-Werkzeuge) und Versionskontrolle  
Klassifizierung: Projektsteuerung / Guidelines  
Normative Orientierung: ISO 21502, PMBOK — angepasst an KI-gestützte Ein-Personen-Arbeit.

---

# Project Guidelines — QA-Track

## 1. Zweck & Anwendung

Dieses Dokument regelt **Zusammenarbeit mit KI-gestützten Werkzeugen** (ChatGPT, Cursor, Claude), das **verbindliche fachliche Rollenmodell** (Abschnitt 2) sowie **Versionskontrolle und Commit-Praxis** für das **gesamte Git-Repository *qa-ctfl-track*** (Monorepo: Steuerung, Workflow, Website unter **`02_Portfolio/QA_Lernwebseite/`**) — im Einklang mit [03_Project_Standards.md](03_Project_Standards.md) (Geltungsbereich, Steuerungslogik).

**Geltung:** Verbindlich für alle Arbeiten, bei denen KI den **QA-Track** (`qa-ctfl-track`) oder die **Lernwebsite** unterstützt oder verändert, und für alle **Git-Commits und Pushes** auf **`origin`** (siehe Abschnitt 5). Ordner **`03_Hausaufgaben/`**, **`04_Referenzen/`**, **`05_Notizen/`**, **`06_Archiv/`** sind per **`.gitignore`** derzeit **nicht** Teil des Standard-Commit-Umfangs.

**Lesereihenfolge mit anderen Steuerungsdokumenten:** Zuerst [01_Project_Charter.md](01_Project_Charter.md) und [03_Project_Standards.md](03_Project_Standards.md) für Kontext und Ablage; dieses Dokument für **Kommunikation, Prompting und Git** (Monorepo).

### Aktuelles Datum (für KI und Autor)

- **Tagesdaten** in Metadaten und Texten („Letzte Aktualisierung“, „Zuletzt aktualisiert“, Changelogs, formale Datumsangaben in Artefakten) **nicht schätzen, nicht aus dem Training ableiten und nicht „einfach den nächsten Tag“ setzen**.
- **Maßgeblich** ist das **vom System bzw. der Sitzung mitgeteilte aktuelle Datum** (z. B. Nutzer-/Umgebungskontext „Today’s date: …“) **oder** ein **explizit vom Autor genanntes Datum**. Fehlt beides → **nachfragen** statt ein Datum zu erfinden.
- **Konsequenz:** Wenn der Autor korrigiert („heute ist der 23., nicht der 24.“), ist das **verbindlich**; KI passt alle betroffenen Datumsfelder an.

---

## 2. Rollen & Verantwortung

### Fachliche Rollen und Akteure

**Einordnung:** Entspricht der **Steuerungslogik** in [03_Project_Standards.md](03_Project_Standards.md) (QA-Track **`qa-ctfl-track/`**, Monorepo mit Lernwebsite **`02_Portfolio/QA_Lernwebseite/`**). Die folgenden **fachlichen Rollen** sind **kein** externes RACI-Modell für Teams, sondern ein **Arbeitsmodell für Ein-Personen-Projekt + KI**: Sie klären, **welches Werkzeug** für welche **Denk- und Arbeitslage** zuständig ist. **Maßgeblich** für **KI-Arbeit, Kommunikation und Git** ist **dieses Dokument**. **Architektur- und Qualitätsrahmen der Lernwebsite** (Ziele, Scope, Benennung, Ordnerlogik, A4-/Dokumentmodus, Workflow) stehen in **[01_Project_Charter.md](01_Project_Charter.md)** und **[03_Project_Standards.md](03_Project_Standards.md)** — **ohne** separate Konzeptdatei neben der **Project\_*-Serie**.

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

**Technischer Zugriff:** **Cursor** hat **Lese- und Schreibzugriff** auf die im Workspace geöffneten Projektdateien und trägt damit **Implementation & Delivery** im Repo. **ChatGPT** und **Claude** haben **keinen** automatischen Dateizugriff; ihre Ausgaben (u. a. **Architecture & Coordination**, **Subject-Matter Review**) sind vom Autor zu **prüfen** und ggf. **manuell** oder **über Cursor** ins Artefakt zu übernehmen. **Git-Commits** folgen **Abschnitt 5** (Monorepo **qa-ctfl-track**).

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
| **Git (falls relevant)** | Wenn Commits gewünscht: **Monorepo** **qa-ctfl-track** (Abschnitt 5); bei reinen Website-Änderungen Präfix/Bezug zu **`02_Portfolio/QA_Lernwebseite/`**; Commit-Stil und **keine** Tool-Kennzeichen in Messages (Abschnitt 5–6). |

### Kurzformel

**Kontext + Grenze + Aufgabe + Rückgabeform + Unsicherheiten** — bei Git-Themen die **Regeln aus Abschnitt 5 und 6** mitdenken.

---

## 5. Versionskontrolle & Git

### Aktueller Geltungsbereich (**Stand dieser Richtlinie**)

**Versioniert, committet und gepusht wird** das **gesamte** Repository **qa-ctfl-track** (Remote **`origin`** auf GitHub).

- **Git-Root:** Arbeitsverzeichnis **`qa-ctfl-track/`** (ein **`.git`**).  
- **Lernwebsite:** Pfad **`02_Portfolio/QA_Lernwebseite/`** — **kein** eigenes Unter-Repository; Änderungen gehen in **dieselbe** Historie wie Steuerung und Workflow-Dateien.  
- **`.gitignore`:** **`03_Hausaufgaben/`**, **`04_Referenzen/`**, **`05_Notizen/`**, **`06_Archiv/`** sind standardmäßig **ausgeschlossen** — dortige Dateien **erscheinen nicht** in `git status`, bis die Regeln bewusst geändert werden.

**Subtree (optional):** Für **Synchronisation** mit dem früheren separaten Website-Repo kann ein Remote z. B. **`website`** existieren; Updates dann z. B. per **`git subtree pull`** — siehe [03_Project_Standards.md](03_Project_Standards.md) (Integrations-Workflow).

### Abgleich Steuerung ↔ Umsetzung (manuell)

Änderungen an **Architektur, Inhalten oder Benennung** der Website können **Auswirkungen** auf **`01_Projektsteuerung/`** haben — **Charter**, **Status**, **Standards**. Das gehört **nicht** automatisch in jeden Commit. **Wer** die Website oder die Struktur anpasst, **prüft bei Bedarf**, ob **Project\_*-Dateien** und **README** noch passen.

### Vor dem Commit (Monorepo)

| Prüfpunkt | Frage |
|-----------|--------|
| **Staging** | Sind nur die **gewollten** Pfade vorgemerkt (Website, Steuerung, `.github`, Root-README, …)? |
| **Inhalt** | Sind die Änderungen **aktuell**, **vollständig** und in **einem Satz** erklärbar? |
| **Begleit-Doku** | Bei sichtbaren Website-Änderungen: **`02_Portfolio/QA_Lernwebseite/README.md`** ggf. mitgezogen; bei Steuerungsrelevanz **Status** / **Standards** prüfen. |
| **Risiko** | Keine **Secrets**, keine **lokalen Nur-mir-Pfade**; **öffentliches** Repo beachten. |

**Nicht** committen: Inhalte unter den per **`.gitignore`** ausgeschlossenen Ordnern (solange die Regel gilt), temporäre Dateien, Backups, Cache.

### Commit-Nachrichten

**Ziel:** Historie wie ein **Projekttagebuch** — **warum**, **Kontext** und **was sich wo** ändert. Bei **Website-lastigen** Commits an die bestehende, ausführliche Stilpraxis der **Lernwebsite-Historie** anknüpfen; bei **Steuerungs-** oder **Repo-Commits** (z. B. `chore:`, `docs:`) kurz und klar.

**Erste Zeile (Betreff):** kurz, suchbar; Präfixe wie `docs:`, `fix:`, `feat:`, `chore:` möglich. **Keine** internen Layout-Labels „V2“/„V3“. **Website:** sachlich Hauptsystem, Navigation, Seiten/Dateien nennen.

**Body (bei größeren Commits):** Hintergrund, Detailänderungen, ggf. **Liste geänderter Dateien**; bei Website-Commits ggf. **Stand-Datum** wie bisher. **Nicht** in Commit-Texten: **Tool-/KI-Herkunftszeilen** (`Made-with: …`).

**Kurze Messages** bei trivialen Änderungen.

**Praktisch:** Längere Messages mit `git commit -F nachricht.txt` (oder Editor) setzen.

**Abgrenzung zur Chat-Dokumentation:** Was nach dem Push **zusätzlich** im Arbeitskanal stehen soll (neben der reinen Git-Message), ist in **Abschnitt 6** festgelegt — dort ist verbindlich **zwei** getrennte Teile vorgesehen.

### Push

- Standard: Branch **`main`** → Remote **`origin`** (`git push origin main`).  
- **`git push --force`** auf **`main`** nur bei triftigem Grund und **bewusster** Entscheidung.

---

## 6. Nacharbeit nach Commit

**Verbindlich nach jedem abgeschlossenen Commit** bzw. **Push** (insb. mit **Website-Anteil**): Im **Chat** (bzw. KI-/Arbeitskanal) **zwei getrennte Teile** mitteilen — nicht nur eines von beidem:

1. **Vollständige Commit-Nachricht (wortgleich mit Git):** Betreff und **gesamter** Body, so wie sie in `git log` / `git show` stehen. Dient **Nachvollziehbarkeit**, Copy-Paste, exakter Bezug zur Historie und **Folgeaufgaben** ohne Raten.
2. **Kurze Prosa-Zusammenfassung:** Ein **Absatz oder wenige Sätze** in **verständlicher Einordnung** — was sich **inhaltlich** ändert (z. B. für Leser der Website, für das Repo), **warum** es gemacht wurde, und **falls relevant** Einschränkungen (z. B. ausgelassene Ordner wegen `.gitignore`, bewusst nicht mitcommittete Pfade).  
   - Die Prosa **ersetzt** die Git-Message **nicht** und **dupliziert** sie nicht zeilenweise; sie **ergänzt** sie, damit der Autor nicht nur Roh-Bulletpoints interpretieren muss.

**Steuerung:** Wenn der Commit **Website** oder **Struktur** betrifft, **bei Bedarf** prüfen, ob **Status** oder **Standards** ein kurzes Update brauchen.

---

## 7. Konflikte & Klärung

- **Priorität:** Autor entscheidet bei Widersprüchen zwischen KI-Vorschlag und Projektzielen.  
- **Eskalation im Ein-Personen-Setup:** **Stopp**, Problem **schriftlich** klären (Ziel, Scope, Akzeptanzkriterien), dann erst weiterarbeiten.  
- **Zwischen Website und Steuerung:** Wenn Commits **nur** `02_Portfolio/QA_Lernwebseite/` betreffen, aber Inhalte der **Steuerung** widersprechen könnten → **zuerst** Standards/Charter lesen, dann ggf. **Steuerung** anpassen oder Website-Inhalt korrigieren — **keine** stillschweigende Divergenz.

---

## 8. Checklisten

### Kurz vor einem Commit (Monorepo)

- [ ] Nur beabsichtigte Pfade im **Staging** (Website, Steuerung, CI, …)  
- [ ] Änderung **in einem Satz** beschreibbar  
- [ ] Bei Website-Änderungen: **`02_Portfolio/QA_Lernwebseite/README.md`** ggf. mitaktualisiert  
- [ ] Keine **Secrets**, keine irrelevanten **lokalen** Pfade  
- [ ] Commit-Message: **sachlicher** Betreff, bei Bedarf **Body**, **keine** V2/V3-Labels, **keine** Tool-Zeile  

### Kurz vor einem KI-gestützten Eingriff

- [ ] **Fachliche Rolle** und **Werkzeug** passen zusammen (Abschnitt 2: Architektur → ChatGPT, Subject-Matter/Content → Claude, Umsetzung im Repo → Cursor)  
- [ ] **Kontext** und **Grenze** im Prompt genannt  
- [ ] **Aufgabe** und **gewünschte Ausgabeform** klar  
- [ ] Unklarheiten **offen** benannt oder **Rückversicherung** eingeholt  
- [ ] **Datum:** bei Änderungen an „Letzte Aktualisierung“ / README-Datum / vergleichbaren Feldern nur das **aktuelle Sitzungsdatum** oder **vom Autor genanntes Datum** verwenden — **nicht** raten (siehe **Abschnitt 1, Aktuelles Datum**)  

### Nach Commit / Push

- [ ] Im **Chat:** **vollständige** Commit-Nachricht (Betreff + Body, wortgleich mit Git) **und** **kurze Prosa-Zusammenfassung** (siehe **Abschnitt 6**)  
- [ ] Bei Bedarf **Status** / **Standards** geprüft  

---

*Dieses Dokument ersetzt inhaltlich frühere getrennte Vereinbarungen zu Arbeitsweise, Prompt-Formulierung und Website-Git sowie das darin gebündelte **fachliche Rollenmodell** — ohne Verweis auf deren Dateinamen in der aktiven Steuerung.*
