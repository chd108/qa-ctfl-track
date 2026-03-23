Datei erstellt: 2026-03-23  
Letzte Aktualisierung: 2026-03-23  
Zweck: Schnellzugriff auf Pfade, Prompts und externe Ressourcen  
Klassifizierung: Projektsteuerung / Referenz  
Normative Orientierung: ISO 21502 — Zugänglichkeit von Projektinformationen.

---

# Reference Quick — QA-Track

## 1. Zweck & Nutzung

Dieses Dokument bündelt **Schnellnavigation** („Aktion → Ort“), **externe Einstiege** (Notion, GitHub, ISTQB) und eine **Prompt-Bibliothek** für wiederkehrende KI-gestützte Reviews — ohne die **Project\_*-Steuerdateien** zu ersetzen.

**Nutzen:** Schnelles Auffinden von Ordnern, kanonischen Markdown-Dateien und kopierfertigen Prompts. **Verbindliche Regeln** zu Prompting, Rollen und Git: [04_Project_Guidelines.md](04_Project_Guidelines.md). **Repo- und Website-Workflow:** [03_Project_Standards.md](03_Project_Standards.md).

**Pfadkonvention in diesem Dokument:** Alle relativen Pfade beziehen sich auf das Arbeitsverzeichnis **`000_QA_Track/`**, sofern nicht anders gekennzeichnet.

---

## 2. Schnellnavigation (Aktion → Ort)

| Aktion | Ort |
|--------|-----|
| **Einstieg Programm & Vision** | [01_Project_Charter.md](01_Project_Charter.md) |
| **Aktueller Stand, Meilensteine** | [02_Project_Status.md](02_Project_Status.md) |
| **Repo-Struktur, Ordner, Benennung, Lernplan-Zuordnung** | [03_Project_Standards.md](03_Project_Standards.md) (insb. Abschnitt 2–4, 7–8) |
| **KI, Rollenmodell, Git/Commit (Website)** | [04_Project_Guidelines.md](04_Project_Guidelines.md) |
| **Dieses Dokument — Pfade & Prompts** | [05_Reference_Quick.md](05_Reference_Quick.md) |
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
| **Öffentliche Lernwebsite (Git)** | [QA_Lernwebseite auf GitHub](https://github.com/chd108/QA_Lernwebseite) | Branch `main`; GitHub Pages o. ä. |
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

Einschätzung zur Tauglichkeit für öffentliches Portfolio (Website-Repo und Repo-Gesamtbild)

Bitte sei kritisch, konkret und technisch präzise. Kein allgemeines Lob, sondern echte Analyse.

Das Ergebnis soll als Markdown-Datei unter 01_Projektsteuerung/ abgelegt werden: Dateiname nach Schema YYYY-MM-DD_Hausaufgabenanalyse.md (Datum anpassen).
```

### Repo_Health_Check_Prompt

```
Bitte führe einen Repository Health Check für dieses gesamte QA-Track-Projekt durch.

Wichtig:
Dieser Check soll NICHT die inhaltliche Qualität einzelner Hausaufgaben prüfen und auch NICHT den Notion-Abgleich übernehmen. Dafür gibt es einen separaten Homework-Audit. Hier geht es nur um die Qualität, Ordnung und Wartbarkeit des Repositories selbst.

Prüfe bitte diese Punkte:

1. Repository-Struktur
- Ist die Ordnerstruktur logisch, klar und langfristig nutzbar?
- Sind die Hauptbereiche sauber getrennt?
- Gibt es unnötige Verschachtelungen oder unklare Ablagen?

2. Root-Dokumentation
- Ist die README im Root klar, aktuell und als Einstieg geeignet?
- Funktionieren interne Verweise und Einstiege sinnvoll?
- Führt die Dokumentation klar zur Project_*-Steuerung in 01_Projektsteuerung/?

3. Konsistenz
- Sind Dateinamen und Ordnernamen einheitlich?
- Wird die definierte Benennungslogik konsequent eingehalten?
- Gibt es widersprüchliche, unklare oder chaotische Benennungen?

4. Dokumentationsqualität
- Haben wichtige Ordner oder Bereiche genug Kontext, damit die Struktur auch später noch verständlich bleibt?
- Fehlen an zentralen Stellen kurze erklärende Hinweise?

5. Git- und Projektlogik
- Ist die Git-Struktur für dieses Lernprojekt sinnvoll aufgebaut?
- Ist erkennbar, dass die öffentliche Lernwebsite QA_Lernwebseite unter 02_Portfolio/QA_Lernwebseite/ ein eingebettetes eigenes Git-Repository ist?
- Ist diese Trennung strukturell sauber und nachvollziehbar?

6. Wartbarkeit und Skalierbarkeit
- Kann das Repository in den nächsten Wochen und Monaten sauber weiterwachsen?
- Lassen sich neue Hausaufgaben, Notizen, Materialien und Projektdateien leicht ergänzen, ohne Unordnung zu erzeugen?

7. Sauberkeit
- Gibt es leere, halbfertige, doppelte oder veraltete Dateien?
- Gibt es strukturelle Ungereimtheiten oder Bereiche, die aufgeräumt werden sollten?

Erwartete Ausgabe:
- Kurze Gesamtbewertung des Repositories
- Konkrete Stärken der aktuellen Struktur
- Konkrete Schwachstellen oder Risiken
- Klare Liste mit Verbesserungsvorschlägen
- Wenn möglich: Priorisierung in
  - sofort sinnvoll
  - später sinnvoll
  - optional

Bitte sei präzise, kritisch und konkret.
Kein allgemeines Lob, sondern eine echte Strukturprüfung.

Das Ergebnis soll in 03_Project_Standards.md im Abschnitt „Repository Health & Review“ (Abschnitt 8) dokumentiert werden — bestehende Tabelle/Absätze ersetzen oder ergänzen; Datum im Dokument anpassen.
```

### Überblicks_Prompt_Statusbericht

```
Kontext

Wir arbeiten im Repository QA-Track (Arbeitsverzeichnis 000_QA_Track).

Das Projekt enthält:
- eine Projektsteuerung unter 01_Projektsteuerung/ (Project_*-Serie)
- Hausaufgaben unter 03_Hausaufgaben/
- Referenzen, Notizen, Archiv
- die eingebettete Lernwebsite QA_Lernwebseite unter 02_Portfolio/QA_Lernwebseite/ (eigenes Git-Repository)

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

Das Projekt QA_Lernwebseite soll öffentlich auf GitHub liegen
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

---

## 5. Erwartete Outputs

| Prompt (Abschnitt 4) | Empfohlene Ablage / Nutzung |
|----------------------|-----------------------------|
| **Homework_Audit_Prompt** | Neue Datei `01_Projektsteuerung/YYYY-MM-DD_Hausaufgabenanalyse.md` (Schema siehe [03_Project_Standards.md](03_Project_Standards.md) Abschnitt 4). Optional ältere Analysen nach `06_Archiv/` verschieben. |
| **Repo_Health_Check_Prompt** | Befund in [03_Project_Standards.md](03_Project_Standards.md) **Abschnitt 8** (Repository Health & Review) einarbeiten; **Letzte Aktualisierung** im Metablock von Standards setzen. |
| **Überblicks_Prompt_Statusbericht** | In der Regel **nur Chat-Ausgabe**; bei Bedarf Kernaussagen in [02_Project_Status.md](02_Project_Status.md) übernehmen. |
| **Public_Release_Check_QA_Lernwebseite** | **Empfehlungen im Chat**; umgesetzte Änderungen nur im **Website-Repo** `02_Portfolio/QA_Lernwebseite/` und nach [04_Project_Guidelines.md](04_Project_Guidelines.md) committen. |

---

## 6. Index Steuerungsdokumente

Kanalische **Project\_*-Serie** im Ordner `01_Projektsteuerung/`:

| Datei | Inhalt (Kurz) |
|-------|----------------|
| [01_Project_Charter.md](01_Project_Charter.md) | Zweck, Vision, Scope, Stakeholder, Rollenmodell (fachlich), Genehmigung |
| [02_Project_Status.md](02_Project_Status.md) | Ist-Stand, Meilensteine, Risiken, nächste Schritte |
| [03_Project_Standards.md](03_Project_Standards.md) | Repo-Struktur, Benennung, CTFL/Lernplan, Website-Workflow, Health Check |
| [04_Project_Guidelines.md](04_Project_Guidelines.md) | Fachliche Rollen ↔ KI-Werkzeuge, Kommunikation, Prompting, Git nur QA_Lernwebseite |
| [05_Reference_Quick.md](05_Reference_Quick.md) | Schnellnavigation, externe Links, Prompt-Bibliothek (dieses Dokument) |

*Hinweis:* Ältere nummerierte Steuerdateien und Kopien liegen bei Bedarf unter **`06_Archiv/`** — für die aktive Arbeit gelten ausschließlich die **Project\_*-Dateien** und dieses Referenzdokument.

---

*Inhaltlich übernommen aus früheren Dateien zur Prompt-Sammlung und Schnellnavigation; Pfade und Steuerungsbezüge auf den Stand **000_QA_Track** / **Project\_*-Serie** aktualisiert.*
