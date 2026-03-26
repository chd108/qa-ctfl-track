Datei erstellt: 2026-03-23  
Letzte Aktualisierung: 2026-03-25 — Schnellnavigation: Markdown_Form_Refactor_Prompt  
Zweck: Schnellzugriff auf Pfade, Prompts und externe Ressourcen  
Klassifizierung: Projektsteuerung / Referenz  
Normative Orientierung: ISO 21502 — Zugänglichkeit von Projektinformationen.

---

# Reference Quick — QA-Track

## 1. Zweck & Nutzung

Dieses Dokument bündelt **Schnellnavigation** („Aktion → Ort“), **externe Einstiege** (Notion, GitHub, ISTQB) und eine **Prompt-Bibliothek** für wiederkehrende KI-gestützte Reviews — ohne die **Project\_*-Steuerdateien** zu ersetzen.

**Nutzen:** Schnelles Auffinden von Ordnern, kanonischen Markdown-Dateien und kopierfertigen Prompts. **Verbindliche Regeln** zu Prompting, Rollen und Git: [04_Project_Guidelines.md](04_Project_Guidelines.md). **Repo- und Website-Workflow:** [03_Project_Standards.md](03_Project_Standards.md).

**Pfadkonvention in diesem Dokument:** Alle relativen Pfade beziehen sich auf das Arbeitsverzeichnis **`qa-ctfl-track/`**, sofern nicht anders gekennzeichnet.

---

## 2. Schnellnavigation (Aktion → Ort)

| Aktion | Ort |
|--------|-----|
| **Einstieg Programm & Vision** | [01_Project_Charter.md](01_Project_Charter.md) |
| **Aktueller Stand, Meilensteine** | [02_Project_Status.md](02_Project_Status.md) |
| **Repo-Struktur, Ordner, Benennung, Lernplan-Zuordnung** | [03_Project_Standards.md](03_Project_Standards.md) (insb. Abschnitt 2–4, 7–8) |
| **KI, Rollenmodell, Git/Commit (Monorepo)** | [04_Project_Guidelines.md](04_Project_Guidelines.md) |
| **Dieses Dokument — Pfade & Prompts** | [05_Reference_Quick.md](05_Reference_Quick.md) |
| **Markdown formal vereinheitlichen (KI, nur Form — Inhalt unverändert)** | [05_Reference_Quick.md — Abschnitt 4, Markdown_Form_Refactor_Prompt](05_Reference_Quick.md#markdown_form_refactor_prompt) |
| **Hausaufgaben-Analyse (Beispiel-Snapshot, archiviert)** | `06_Archiv/Projektsteuerung_alt/11_Hausaufgabenanalyse_2026-03-09.md` (neue Analysen: siehe Abschnitt 5) |
| **SDLC (ISTQB) — animiert / statisch** | `02_Portfolio/QA_Lernwebseite/pages/02b-sdlc-animiert.html` · `02_Portfolio/QA_Lernwebseite/pages/02a-sdlc-statisch.html` |
| **Testverfahren (CTFL Kap. 4)** | `02_Portfolio/QA_Lernwebseite/pages/04-testverfahren.html` |
| **HA-Einordnung (Testverfahren ↔ Hausaufgaben)** | `02_Portfolio/QA_Lernwebseite/pages/00a-ha-einordnung.html` |
| **Normen & Konsistenz (Website)** | `02_Portfolio/QA_Lernwebseite/pages/00b-standards.html` |
| **Lernwebsite — README & Struktur** | [../02_Portfolio/QA_Lernwebseite/README.md](../02_Portfolio/QA_Lernwebseite/README.md) |
| **ISTQB-Materialien (PDFs, Sample Exams)** | `04_Referenzen/ISTQB/` |
| **HA1** | `03_Hausaufgaben/HA1_Aequivalenzklassen_Grenzwertanalyse/` |
| **HA2** | `03_Hausaufgaben/HA2_Entscheidungstabellentest/` |
| **HA3** | `03_Hausaufgaben/HA3_Zustandsuebergang_Ueberdeckung/` |
| **HA4** | `03_Hausaufgaben/HA4_Anforderungsanalyse/` |
| **HA5** (inkl. Kurs-Arbeitsmaterialien) | `03_Hausaufgaben/HA5_Testkonzept_Testfallentwurf/` |
| **HA6** | `03_Hausaufgaben/HA6_Testdurchfuehrung/` |
| **Neue Hausaufgabe anlegen** | Unter `03_Hausaufgaben/` im passenden `HAx_*`-Ordner; Schema siehe [03_Project_Standards.md](03_Project_Standards.md) Abschnitt 4 |
| **Ersetzte Steuerung / alte Snapshots** | `06_Archiv/` (Unterordner mit README) |
| **Repository-Root & Einstieg** | [../README.md](../README.md) |

---

## 3. Externe Referenzen

| Ressource | Link | Anmerkung |
|-----------|------|-----------|
| **Lernplan (Notion)** | [Notion – Lernplan](https://www.notion.so/3029418319f381f19aa6c492dfdbcee2?pvs=21) | Kurssteuerung MasterSchool |
| **Übersicht / Assessment (Notion)** | [MasterSchool Notion – chd108](https://www.notion.so/3029418319f38063bbc2c201c57b7ef4) | Externe Kurs-Übersicht |
| **Öffentliches Repo (Monorepo)** | [qa-ctfl-track auf GitHub](https://github.com/chd108/qa-ctfl-track) | Branch `main`; Website unter `02_Portfolio/QA_Lernwebseite/`; **GitHub Pages:** [chd108.github.io/qa-ctfl-track](https://chd108.github.io/qa-ctfl-track/) |
| **ISTQB CTFL** | [ISTQB.org — CTFL v4.0](https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0) | Offizielle Zertifizierungsseite |
| **Probeprüfungen (DE)** | [GTB Probeprüfungen](https://www.gtb.de/der-certified-tester/probepruefungen/) | Übungsexamen |

*Hinweis:* Notion- und GitHub-Links sind **Stand 2026-03-23**; bei Umzug oder Umbenennung der Zielseiten **Links in diesem Dokument** und in [03_Project_Standards.md](03_Project_Standards.md) anpassen.

---

## 4. Prompt-Bibliothek

Die folgenden Texte **unverändert oder angepasst** in den KI-Chat einfügen. Ergebnisablage siehe **Abschnitt 5**.

### Homework_Audit_Prompt

```
Analysiere bitte das gesamte aktuelle QA-Track-Projekt.

Ziel der Analyse:

Prüfe, ob alle Hausaufgaben vollständig bearbeitet wurden.

Vergleiche die vorhandenen Hausaufgaben mit dem Notion-Lernplan (falls im Prompt verlinkt oder im Projekt referenziert).

Prüfe jede Hausaufgabe auf:

Vollständigkeit (alle Teilaufgaben beantwortet?)

Inhaltliche Tiefe (nur Stichpunkte oder echte Ausarbeitung?)

Saubere Struktur (Überschriften, Klarheit, Lesbarkeit)

Einheitliche Benennung und Formatierung

Prüfe die gesamte Ordnerstruktur auf:

Logische Organisation

Konsistente Dateibenennung

Redundanzen oder doppelte Inhalte

Leere oder unvollständige Dateien

Identifiziere:

Offene oder nicht begonnene Aufgaben

Unklare oder halbfertige Dokumente

Inkonsistenzen in Struktur oder Stil

Gib eine strukturierte Bewertung aus:

Gesamtstatus (in Prozent oder qualitativ: stabil / gut / lückenhaft)

Liste konkreter Verbesserungspunkte

Liste offener Aufgaben (falls vorhanden)

Einschätzung zur Tauglichkeit für öffentliches Portfolio (öffentlicher Teil des Monorepos vs. lokale/.gitignore-Bereiche)

Bitte sei kritisch, konkret und technisch präzise. Kein allgemeines Lob, sondern echte Analyse.

Das Ergebnis soll als Markdown-Datei unter 01_Projektsteuerung/ abgelegt werden: Dateiname nach Schema YYYY-MM-DD_Hausaufgabenanalyse.md (Datum anpassen).
```

### Repo_Health_Check_Prompt

```
Kontext — aktuelles System (Ist-Architektur)

- Arbeitsverzeichnis: **qa-ctfl-track/** (QA-Track).
- **Ein** Git-Repository (**Monorepo**): Remote in der Regel **origin** → `github.com/chd108/qa-ctfl-track`, Branch **main**.
- **Lernwebsite** liegt im **selben** Repo unter **02_Portfolio/QA_Lernwebseite/** (keine eigene `.git` dort).
- **GitHub Pages:** Deployment per **GitHub Actions** — Workflow **.github/workflows/deploy-pages.yml**; Artifact-Pfad **`02_Portfolio/QA_Lernwebseite`** (Root der Site = u. a. **index.html**).
- Optional kann ein zweites Remote (**website** → älteres Repo **QA_Lernwebseite**) existieren; **kanonisch** für öffentliche Site und Historie ist das **Monorepo**. Hinweis bei Abweichungen erwähnen.
- **.gitignore:** u. a. **03_Hausaufgaben/**, **04_Referenzen/**, **05_Notizen/**, **06_Archiv/** — diese Bereiche sind oft **nur lokal**; im Check klar von **getracktem** Remote-Umfang trennen.
- Verbindliche Git-/Commit-Regeln und verbotene Trailer (z. B. Tool-Zeilen in Messages): **01_Projektsteuerung/04_Project_Guidelines.md**.
- Kanonische Repo-Struktur und Website-Workflow: **01_Projektsteuerung/03_Project_Standards.md** (u. a. Abschnitt 3 und Website-Integrationsworkflow).

---

Aufgabe

Bitte führe einen **Repository Health Check** für **dieses lokale** qa-ctfl-track-Projekt durch.

Wichtig:
- **Nicht** die inhaltliche Qualität einzelner Hausaufgaben prüfen und **nicht** den Notion-Abgleich — dafür gibt es den **Homework_Audit_Prompt**.
- **Nicht** die fachliche Richtigkeit der Lernwebsite-Inhalte (CTFL) tieftauchen — nur **technische** und **repo-strukturelle** Tauglichkeit der Website **als Artefakt** (Pfade, Einstieg, Konsistenz mit Monorepo).

---

A) Lokale technische Basis (befehlsnah; Shell beachten)

Führe nach Möglichkeit aus (bei **Windows PowerShell** Befehle mit **Semikolon** trennen, nicht `&&`, falls die Shell-Version das nicht unterstützt):

- `git status` — sauberer Arbeitsbaum?
- `git branch -vv` / Abgleich **HEAD** mit **origin/main** (oder dem genutzten Upstream).
- `git remote -v` — **origin** korrekt? Zweites Remote **website** nur einordnen, nicht doppelt führen ohne Grund.
- `git fsck --no-dangling` (oder `git fsck`) — offensichtliche Objektprobleme?
- Stichprobe: letzte Commits — **keine** verbotenen Tool-/Herkunftszeilen in Commit-Bodies (siehe **04_Project_Guidelines.md**).
- Existenz prüfen: **LICENSE** (Root), **README.md** (Root), **02_Portfolio/QA_Lernwebseite/index.html**, **.github/workflows/deploy-pages.yml**.
- Optional: letzte **GitHub Actions**-Runs nur erwähnen, wenn du Zugriff hast (z. B. `gh` oder Web); sonst „nicht verifiziert“.

---

B) Struktur und Dokumentation (wie bisher, aber Monorepo-bewusst)

1. **Repository-Struktur** — logisch, klar, langfristig nutzbar? Hauptbereiche getrennt? unnötige Verschachtelung?
2. **Root-Dokumentation** — README Root: Einstieg, Links, Verweis auf **01_Projektsteuerung/** und Monorepo/Pages?
3. **Konsistenz** — Benennung gemäß **03_Project_Standards.md**? auffällige Ausnahmen?
4. **Dokumentationsqualität** — READMEs in Hauptordnern, fehlende Kurz-Kontexte?
5. **Git- und Projektlogik** — Monorepo erkennbar; **.gitignore**-Bereiche bewusst und in Doku erklärt?
6. **Wartbarkeit / Skalierbarkeit** — Wachstum ohne Unordnung möglich?
7. **Sauberkeit** — leere/halbfertige/duplizierte Artefakte, strukturelle Altlasten im **getrackten** Umfang?

---

Erwartete Ausgabe

- **Ausschließlich im Chat** — vollständiger Befund (Gesamtbewertung, Stärken, Schwachstellen, priorisierte Verbesserungen). **Keine** neue Datei anlegen und **keine** bestehende Projektdatei (inkl. **03_Project_Standards.md**) zum Speichern des Health-Check-Ergebnisses bearbeiten.
- Struktur der Ausgabe wie üblich: Kurz-Urteil oben, dann Details; Priorisierung **sofort / später / optional**.

Stil: präzise, kritisch, konkret — kein generisches Lob.
```

### Überblicks_Prompt_Statusbericht

```
Kontext

Wir arbeiten im Repository QA-Track (Arbeitsverzeichnis qa-ctfl-track, Monorepo auf GitHub: chd108/qa-ctfl-track).

Das Projekt enthält:
- eine Projektsteuerung unter 01_Projektsteuerung/ (Project_*-Serie)
- Hausaufgaben unter 03_Hausaufgaben/
- Referenzen, Notizen, Archiv
- die Lernwebsite unter 02_Portfolio/QA_Lernwebseite/ (Teil desselben Git-Repositories; keine separate Website-.git)

Ziel dieser Anfrage

Bitte verschaffe dir einen Überblick über das gesamte Projekt
und gib einen Statusbericht.

Es soll nichts verändert werden.
Keine Dateien ändern.
Keine Refactorings.
Nur Analyse und Einordnung.

Der Bericht dient dazu, den aktuellen Stand des Projekts zu verstehen
(Feierabend-Status).

Aufgabe

Bitte analysiere das gesamte Projekt QA-Track
und beantworte die folgenden Punkte in verständlicher Form.

1. Projektüberblick

- Was ist QA-Track für ein Projekt?
- Welche Hauptbereiche enthält das Repository?
- Wie ist die Struktur aufgebaut?

2. Projektsteuerung

Bitte beschreibe kurz die Rolle von:

01_Projektsteuerung/

Welche zentralen Steuerdateien existieren dort (01_Project_Charter.md, 02_Project_Status.md, 03_Project_Standards.md, 04_Project_Guidelines.md, 05_Reference_Quick.md)
und welche Funktion haben sie im Projekt?

3. Lernmaterialien und Inhalte

Welche Inhalte enthält das Projekt aktuell?

Beispiele:
- Lernwebsite (HTML unter 02_Portfolio/QA_Lernwebseite/)
- Hausaufgaben
- Notizen
- Referenzen

Wie wirken diese Inhalte strukturell
(z.B. Lernsystem, Wissenssammlung, Portfolio)?

4. QA_Lernwebseite

Bitte beschreibe das Webprojekt:

- Zweck der Website
- technische Struktur
- verwendete Technologien
- Grad der technischen Qualität
- Professionalität der Umsetzung

Beispielpunkte:
Struktur, Semantik, CSS, Navigation, Accessibility, Standards.

5. Technische Qualität

Wie würdest du das Projekt technisch bewerten?

Bitte kurz einschätzen:

- Struktur und Organisation
- Webstandards
- Codequalität
- Wartbarkeit
- Skalierbarkeit

6. Inhaltliche Qualität

Wie wirkt das Projekt inhaltlich?

Zum Beispiel:

- Lernwert
- Verständlichkeit
- Systematik
- didaktische Qualität

7. Gesamtbewertung

Bitte gib eine grobe Einschätzung:

- Reifegrad des Projekts
- Professionalität
- mögliche Verwendung (z.B. Lernprojekt, Portfolio, Lehrmaterial)

8. Zukunftsperspektive

Welche sinnvollen Entwicklungsmöglichkeiten siehst du?

Beispiele könnten sein:

- neue Lernmodule
- weitere Visualisierungen
- Erweiterung der Website
- stärkere Strukturierung des Wissens

Wichtig

Bitte kurz, klar und strukturiert antworten.
Keine Änderungen am Projekt durchführen.
Nur Analyse und Einschätzung.
```

### Public_Release_Check_QA_Lernwebseite

```
Kontext

Der öffentliche Website-Teil (Ordner 02_Portfolio/QA_Lernwebseite/ im Repo qa-ctfl-track) soll auf GitHub liegen
und kostenlos für alle als Lernwebsite nutzbar sein.

Wichtig:
- Die Inhalte sollen öffentlich lesbar sein
- Es soll nichts von außen veränderbar sein
- Es dürfen keine sensiblen Daten enthalten sein
- Es sollen keine privaten oder internen Informationen veröffentlicht werden

Ziel

Bitte führe einen professionellen Public-Release-Check für das Webprojekt durch.

Wichtige Regeln
- Keine PowerShell
- Keine Skripte
- Noch nichts veröffentlichen
- Änderungen nur dann direkt umsetzen, wenn sie eindeutig unkritisch sind
- Wenn etwas heikel ist: nur melden

Aufgabe

Bitte prüfe QA_Lernwebseite auf folgende Punkte:

1. Sensible Daten
- private Daten
- Namen, E-Mail-Adressen, Tokens, Zugangsdaten
- lokale Pfade
- interne Hinweise
- versehentlich mit veröffentlichte Notizen
- ungewollte Metadaten oder Kommentare

2. Öffentliche Sichtbarkeit
- was sieht ein fremder Nutzer im Repo?
- was sieht ein Besucher der Website?
- gibt es Dateien, die besser nicht öffentlich sein sollten?

3. Änderbarkeit / Missbrauch
- ist das Projekt als statische Website von außen nur lesbar?
- gibt es irgendwo Formulare, Eingaben, JS oder andere Stellen, die missverständlich oder problematisch sein könnten?
- gibt es Risiken durch öffentliche Bereitstellung?

4. README
- ist die README für ein öffentliches Projekt passend?
- sollte sie kurz angepasst werden für öffentliche Nutzung?
- z. B. Zweck, Nutzung, Hinweis auf Lernprojekt, Struktur, Veröffentlichung

5. Lizenz / Nutzung
- braucht das Projekt eine LICENSE-Datei?
- welche einfache Lizenz wäre passend, wenn die Inhalte kostenlos nutzbar, aber nicht einfach beliebig vereinnahmt werden sollen?

6. GitHub Pages Bereitschaft
- ist das Projekt bereit für öffentliche Bereitstellung über GitHub Pages?
- gibt es noch etwas, das vorher sinnvoll wäre?

Rückgabe

Bitte antworte kurz und strukturiert mit:

- Gefundene Risiken
- Unkritische Punkte
- Empfohlene Änderungen vor Veröffentlichung
- README-Empfehlung
- Lizenz-Empfehlung
- Einschätzung: bereit / fast bereit / noch nicht bereit

Noch nichts kaputt machen und nichts Grundsätzliches umbauen.
Nur prüfen und professionell einschätzen.
```

### Markdown_Form_Refactor_Prompt

**Einsatz:** Eine **Markdown-Datei** (z. B. Steuerungs- oder Hausaufgaben-`.md`) soll **nur formal** vereinheitlicht werden — **ohne** inhaltliche Änderung. Je nach Kontext **eine** der folgenden Varianten kopieren (oder knappe + ausführliche Form kombinieren).

```
--- Variante A — knappe Formulierung ---

„Bitte refaktoriere diese Markdown-Datei nur formal. Vereinheitliche Struktur, Überschriften, Abstände, Listen, Einrückungen, Hervorhebungen, Codeblöcke, Tabellen und Abschnittslogik so, dass sie einem sauberen Dokumentationsstandard entspricht. Der Inhalt darf auf keinen Fall geändert, ergänzt, gekürzt, umgeschrieben oder inhaltlich neu interpretiert werden. Bestehende Aussagen, Reihenfolgen, Begriffe und Bedeutungen müssen vollständig erhalten bleiben. Ziel ist ausschließlich eine einheitliche, logisch gegliederte, gut lesbare und ansprechend formatierte Markdown-Dokumentation.“

--- Variante B — ausführlicher Arbeits-Prompt ---

Bitte überarbeite diese Markdown-Datei ausschließlich in Bezug auf Formatierung und Dokumentationsstruktur.

Ziel:
- einheitliche Markdown-Formatierung
- klare Gliederung
- saubere Hierarchie der Überschriften
- konsistente Listen, Abstände und Einrückungen
- gut lesbare Abschnittsstruktur
- optisch und logisch kohärente Dokumentation

Wichtige Regeln:
- Inhalte dürfen nicht verändert werden
- keine Sätze umschreiben
- nichts hinzufügen
- nichts entfernen
- keine Begriffe ersetzen
- keine Beispiele ergänzen
- keine inhaltliche Umordnung, wenn sie die Bedeutung verändert
- nur formale und strukturelle Vereinheitlichung

Erlaubt ist nur:
- Überschriftenhierarchie bereinigen
- Absätze sauber trennen
- Listen vereinheitlichen
- Markdown-Syntax standardisieren
- Codeblöcke, Tabellen, Zitate und Hervorhebungen konsistent formatieren
- Kapitel und Unterkapitel logisch und lesbar anordnen, sofern der Inhalt dabei exakt gleich bleibt

Bitte orientiere dich an gängigen Dokumentationsstandards für Markdown:
- klare Heading-Struktur
- konsistente Abschnittstypen
- einheitliche Schreibweise für Listen und Codeblöcke
- gute Scanbarkeit
- saubere Lesbarkeit im Rohtext und gerendert

Am Ende:
- gib die überarbeitete Markdown-Version vollständig aus
- ändere nichts am Inhalt, nur an Form, Struktur und Darstellung

--- Variante C — Einzeiler ---

Bitte refaktoriere diese Markdown-Datei rein formal: vereinheitliche Struktur, Überschriften, Listen, Abstände und Markdown-Syntax nach sauberem Dokumentationsstandard, ohne irgendeine inhaltliche Änderung vorzunehmen.
```

---

## 5. Erwartete Outputs

| Prompt (Abschnitt 4) | Empfohlene Ablage / Nutzung |
|----------------------|-----------------------------|
| **Homework_Audit_Prompt** | Neue Datei `01_Projektsteuerung/YYYY-MM-DD_Hausaufgabenanalyse.md` (Schema siehe [03_Project_Standards.md](03_Project_Standards.md) Abschnitt 4). Optional ältere Analysen nach `06_Archiv/` verschieben. |
| **Repo_Health_Check_Prompt** | **Nur Chat-Ausgabe** — kein Schreiben in Steuerungsdateien oder andere Repo-Dateien für den Befund. |
| **Überblicks_Prompt_Statusbericht** | In der Regel **nur Chat-Ausgabe**; bei Bedarf Kernaussagen in [02_Project_Status.md](02_Project_Status.md) übernehmen. |
| **Public_Release_Check_QA_Lernwebseite** | **Empfehlungen im Chat**; umgesetzte Änderungen unter **`02_Portfolio/QA_Lernwebseite/`** im Monorepo **qa-ctfl-track** und nach [04_Project_Guidelines.md](04_Project_Guidelines.md) committen. |
| **Markdown_Form_Refactor_Prompt** | Vollständige überarbeitete **Markdown-Ausgabe im Chat**; Zieldatei im Repo **manuell prüfen** und ersetzen (oder im Editor übernehmen). **Kein** stillschweigendes Überschreiben ohne Abgleich — inhaltliche Treue laut Prompt bewusst verifizieren. |

---

## 6. Index Steuerungsdokumente

Kanalische **Project\_*-Serie** im Ordner `01_Projektsteuerung/`:

| Datei | Inhalt (Kurz) |
|-------|----------------|
| [01_Project_Charter.md](01_Project_Charter.md) | Zweck, Vision, Scope, Stakeholder, Rollenmodell (fachlich), Genehmigung |
| [02_Project_Status.md](02_Project_Status.md) | Ist-Stand, Meilensteine, Risiken, nächste Schritte |
| [03_Project_Standards.md](03_Project_Standards.md) | Repo-Struktur, Benennung, CTFL/Lernplan, Website-Workflow; **Abschnitt 8** = Referenz-Snapshot (kein Ablageort für Health-Check-Läufe) |
| [04_Project_Guidelines.md](04_Project_Guidelines.md) | Fachliche Rollen ↔ KI-Werkzeuge, Kommunikation, Prompting, Git Monorepo **qa-ctfl-track** |
| [05_Reference_Quick.md](05_Reference_Quick.md) | Schnellnavigation, externe Links, Prompt-Bibliothek (dieses Dokument) |

*Hinweis:* Ältere nummerierte Steuerdateien und Kopien liegen bei Bedarf unter **`06_Archiv/`** — für die aktive Arbeit gelten ausschließlich die **Project\_*-Dateien** und dieses Referenzdokument.

---

*Inhaltlich übernommen aus früheren Dateien zur Prompt-Sammlung und Schnellnavigation; Pfade und Steuerungsbezüge auf den Stand **qa-ctfl-track** (Monorepo) / **Project\_*-Serie** aktualisiert.*
