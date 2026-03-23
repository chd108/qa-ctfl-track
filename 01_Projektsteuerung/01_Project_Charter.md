Datei erstellt: 2026-03-23  
Letzte Aktualisierung: 2026-03-23 (Monorepo qa-ctfl-track: GitHub / Pages)  
Zweck: Definiert Vision, Ziele und Umfang des QA-Track Lernprojekts  
Klassifizierung: Projektsteuerung / Charter  
Normative Orientierung: ISO 21502 (Projektmanagement), PMI PMBOK (Integrationsmanagement) — angepasst an Lern- und Ein-Personen-Projekt.

---

# Project Charter — QA-Track

## 1. Executive Summary

**QA-Track** ist ein **ganzheitliches Lern- und Referenzprogramm** für Software-Testing und Qualitätssicherung, ausgerichtet am **ISTQB Certified Tester Foundation Level (CTFL) Syllabus v4.0.2**. Es umfasst **strukturierte Lernmaterialien, Hausaufgaben, Projekt- und Portfolioarbeit, persönliche Notizen, Referenzdokumente sowie die öffentlich nutzbare Lernwebsite *QA_Lernwebseite*** als zentrales digitales Hauptprodukt — eingebettet in das versionierte **Monorepo *[qa-ctfl-track](https://github.com/chd108/qa-ctfl-track)*** (Steuerung und Website unter **`02_Portfolio/QA_Lernwebseite/`** in **einem** Git-Repository).

**Aktueller Stand (Stand Steuerungsdokumentation, März 2026):** Die technische Basis der *QA_Lernwebseite* ist **vereinheitlicht**: ein **Hauptsystem** für reguläre Seiten, ein definierter **Dokument-/A4-Präsentationsmodus** für formale Abgaben/Druck, **einstiegszentrierte Navigation** (`index.html` als alleiniger Einstieg unter **`02_Portfolio/QA_Lernwebseite/`** im Monorepo) und eine **strukturell umgesetzte Benennungslogik** entlang der CTFL-Primärachse. Die **inhaltliche Lernstrecke HA4/HA5** auf der Website wurde in **vier Phasen** (Konsistenz, Story-/UX, formale Einheitlichkeit, Standards-Review) **abgeschlossen**; Referenzdokumentation und Qualitätsmaßstab sind im **Systemkonzept** der Website festgehalten.

**Nächste priorisierte Ausrichtung** auf Programmebene (Website): **Komponentenstil / Designsystem light** — Darstellungsregeln wiederkehrender Bausteine verbindlich schließen — gefolgt von einer **höheren Konsistenz- und Darstellungsregel-Ebene** über die HA4/HA5-Kernstrecke hinaus. Parallel bleiben **Studium, Hausaufgaben, Portfolio und Projektsteuerung** die tragenden Säulen des Gesamtprogramms.

---

## 2. Projektvision

Das Programm soll eine **nachhaltige, berufsnah nutzbare Wissens- und Arbeitsbasis** schaffen: Theorie und Praxis des Testens werden **systematisch** mit dem **CTFL-Lehrplan als normativem Kern** verzahnt; die *QA_Lernwebseite* vermittelt **Orientierung, Nachschlagen, Anwendung und Visualisierung** entlang dieser Achse, ergänzt um eine **didaktische Ebene** zur Selbstkontrolle und Prüfungsvorbereitung.

Architektonisch gilt: **ein kanonisches Hauptsystem** für Lernseiten, die **Einstiegsseite** als funktionale Variante dieses Systems, und der **Dokument-/A4-Modus** als **eigenständiger Präsentations- bzw. Layoutmodus** — nicht als separater „Welt“-Seitentyp, sondern als **bewusste zweite Darstellungsebene** innerhalb desselben Systems (Webnutzung vs. formale Dokument-/Druckdarstellung).

Die Weiterentwicklung folgt dem Prinzip **Konzept vor großflächigem Refactoring**: Architektur und Template-Strategie werden **wissenschaftlich und ingenieurtechnisch belastbar** dokumentiert und **schrittweise** umgesetzt. Qualität wird an **Konsistenz, Wartbarkeit, Zielgruppengerechtheit (Lern- und Referenznutzung)** und **bewährten Web-Standards** (semantisches HTML, schlanke CSS-Lösungen) gemessen — **ohne** Anspruch auf vollständige industrielle Normabdeckung; Normenbezüge dienen **Lernzwecken, Transparenz und Portfolio-Tauglichkeit**.

---

## 3. Geschäfts-/Lernziele & Erfolgskriterien

### Strategische Lern- und Ergebnisziele

| Ziel | Erfolgskriterium (messbar / überprüfbar) |
|------|------------------------------------------|
| **Prüfungsvorbereitung ISTQB CTFL** | **Prüfungsreife ISTQB CTFL 4.0.2 Zertifizierung:** Wissen und Übung sind mit dem offiziellen Lehrplan **ISTQB CTFL Syllabus v4.0.2** abgeglichen; der Lernende kann Kernkonzepte erklären, Testtechniken anwenden und prüfungsnahe Aufgabenstellungen bearbeiten (ergänzt durch Sample-Exams und Kursvorgaben). |
| **Methodenkompetenz Testdesign & -management** | Ausarbeitung und Dokumentation von **Testfällen, Testkonzepten und projektbezogenen Testartefakten** nach anerkannten Mustern (u. a. Bezug **IEEE 829-2008**, **ISO/IEC/IEEE 29119-3** im Lernkontext); nachvollziehbare Verknüpfung von Anforderungen, Testbasis und Testdokumentation (u. a. HA4/HA5-Strecke). |
| **Portfolio- und Berufsfähigkeit** | **Nachweisbare Artefakte** (Website, strukturierte Abgaben, Portfolio-Repository) demonstrieren **Arbeitsweise, Qualitätsdenken und Dokumentationskompetenz** gegenüber **Personalverantwortlichen und technischen Prüfern** — auf dem Niveau eines **professionell genügenden Lern-Portfolios** (kein Produktivsystem). |
| **Langfristige Referenz** | Das Repository bleibt **auffindbar, konsistent benannt und erweiterbar**; Inhalte sind **ohne externe Kurshilfe** grundsätzlich nachvollziehbar (Steuerungsdokumente, Standards, Schnellreferenzen). |

### Qualitätsziele für das digitale Hauptprodukt (Lernwebsite)

- **Konsistenz** von Struktur, Terminologie und Querverweisen im Rahmen des Hauptsystems und des A4-Modus.  
- **Wartbarkeit** durch klare Trennung von Struktur, Darstellung und Inhalt sowie nachvollziehbare Navigations- und Einstiegslogik.  
- **Zugänglichkeit und Lesbarkeit** als Lernmedium (Orientierung, klare Überschriftenhierarchien, sinnvolle Linktexte — im Rahmen des Projekts fortlaufend verbessert).

### Operatives Lernverhalten (Kursintegration)

- Regelmäßige **Selbstreflexion** (Was gelernt? Offene Fragen? Wiederholungsbedarf?) gemäß dem im Programm vereinbarten Review-Ansatz.  
- **Zeitliche und inhaltliche Priorisierung** der Aufgaben erfolgt **maßgeblich** über den **Kurs-Lernplan** (Notion / MasterSchool); das Repository spiegelt den **Ist-Stand** und die **Artefakte** wider.

---

## 4. Umfang (Scope In/Out)

### Scope In (zum Programm gehörend)

- **Unterrichts- und Selbstlernmaterial** (inkl. strukturierter Web-Lernmodule über die *QA_Lernwebseite*).  
- **Hausaufgaben und Übungen** (Testdesign HA1–HA3, Anforderungs- und Testplanungsstrecken HA4/HA5, ggf. weitere Kursphasen).  
- **Projekt- und Portfolioarbeit** (eigenes Portfolio-Repository, STLC-/Projektartefakte nach Kursvorgabe).  
- **Projektsteuerung und -standards** (Charter, Status, Standards, Guidelines, Schnellreferenz — fortlaufend konsolidiert).  
- **Persönliche Notizen und Arbeitshypothesen** (ohne Veröffentlichungspflicht).  
- **Referenzmaterial** (u. a. ISTQB-Lehrplan, Normen-PDFs, externe Links) zur inhaltlichen Absicherung.  
- **Archivierung** abgeschlossener oder ersetzter Versionen nach den im Programm definierten Ablageregeln.

### Scope Out (bewusst ausgeschlossen oder nicht Ziel)

- **Produktivbetrieb** oder Wartung eines geschäftskritischen Systems.  
- **Speicherung von Zugangsdaten, Secrets oder personenbezogenen Daten** ohne Lernbezug.  
- **Kommerzielle Unterlagen** ohne Bezug zum Lernziel.  
- **Vollständige rechtsverbindliche Normenumsetzung** oder Zertifizierung des Repos als „compliant“ gegenüber IEEE/ISO durch Dritte.  
- **Ersatz offizieller Kursabgaben** ausschließlich durch die Website (siehe Klarstellung unten).

### Klarstellung: Rolle der *QA_Lernwebseite*

Die *QA_Lernwebseite* ist ein **integrierter Bestandteil** des QA-Track-Programms und sein **sichtbares digitales Hauptprodukt** — sie **ersetzt jedoch nicht** die **offiziellen Abgabe- und Bewertungswege** des Kurses (Notion, Plattformen der Ausbildungsorganisation, Portale der MasterSchool o. Ä.). **Kurskonforme Einreichungen** und **fristgerechte Abgaben** bleiben **außerhalb** dieser Website zu erbringen; das Repository und die Website dienen **Vorbereitung, Dokumentation, Lernen und Portfolio-Präsentation**.

---

## 5. Haupt-Ergebnisse (Deliverables)

Das Programm liefert **fünf Ergebnislinien** (nebeneinander; **Steuerung** und **Lernwebsite** im **Monorepo** **[qa-ctfl-track](https://github.com/chd108/qa-ctfl-track)** — öffentlich u. a. **[GitHub Pages](https://chd108.github.io/qa-ctfl-track/)**; weitere Arbeitsordner lokal bzw. nach `.gitignore`-Regel; **Kurs-Portfolio** ggf. separat):

1. **Lernwebsite (*QA_Lernwebseite*)** — statische, öffentlich einsetzbare Lern- und Referenzwebsite mit einheitlichem Hauptsystem, Einstiegslogik und Dokument-/A4-Modus; Inhalte entlang der CTFL-Primärachse inkl. Hausaufgaben-Einordnung und Standards-Orientierung.  
2. **Hausaufgaben und Studienartefakte** — strukturierte Bearbeitung der Kurs-HAs (u. a. Testdesign, Entscheidungstabellen, Zustandsübergänge, Anforderungsanalyse, Testkonzept/Testfallentwurf) inkl. Lösungs- und Belegdateien im QA-Track-Arbeitsverzeichnis.  
3. **Portfolio** — separates, berufsorientiertes Nachweis-Repository (z. B. STLC-Dokumentation, ausgewählte Abgaben) gemäß Kursvorgaben zur **externen Sichtbarkeit** gegenüber Arbeitgebern.  
4. **Projektsteuerung** — Charter, Statusberichte, Standards, Arbeitsrichtlinien und Referenzdokumente zur **Steuerung, Nachvollziehbarkeit und Weiterentwicklung** des Programms.  
5. **Notizen und persönliche Arbeitsspuren** — fortlaufende Erfassung von Lernimpulsen, Reflexion und temporären Arbeitshilfen (ohne Qualitätsanspruch auf Publikationsniveau).

---

## 6. Annahmen & Einschränkungen

### Annahmen

- Der **ISTQB CTFL Syllabus v4.0.2** (Stand Lehrplan-Dokument) bleibt die **maßgebliche inhaltliche Referenz** für Prüfungs- und Lernausrichtung.  
- **Kursplan und Aufgabenstellungen** (Notion, MasterSchool) definieren **Reihenfolge, Abgabemodalitäten und Bewertungskontext**; das QA-Track-Repository **dokumentiert und unterstützt** die Umsetzung, ersetzt aber keine Kursinstitution.  
- Die *QA_Lernwebseite* wird **öffentlich** über **GitHub Pages** bereitgestellt (**[chd108.github.io/qa-ctfl-track](https://chd108.github.io/qa-ctfl-track/)**); Quellcode und Steuerung liegen im Repository **[github.com/chd108/qa-ctfl-track](https://github.com/chd108/qa-ctfl-track)**. Es werden **keine** sicherheitskritischen oder datenschutzrelevanten Live-Systeme angebunden.  
- **Normen** (CTFL-Bezug, IEEE 829-2008, ISO/IEC/IEEE 29119-3) werden **didaktisch genutzt** und **konsistent referenziert**, ohne Vollständigkeit oder Zertifizierungsanspruch der Organisation „QA-Track“.

### Einschränkungen

- **Ein-Personen-Projekt:** Kein formales PMO; Entscheidungswege sind **kurz**, Verantwortung liegt **konzentriert** beim Projektinhaber **chd108** (Alias).  
- **Ressourcen:** Begrenzte Zeit; Priorisierung nach **Kursmeilensteinen** und **Portfolio-Relevanz**.  
- **Technische und gestalterische Tiefe:** Detaillierte **Benennungsmatrizen, Komponentenkataloge und CSS-/HTML-Feinregeln** werden **nicht** im Charter geführt — sie bleiben **Fachdokumentation** des Systemkonzepts bzw. künftiger Standarddokumente.  
- **Iterative Architektur:** Einzelne Darstellungsmuster können der **formalen Designsystem-Ausarbeitung** zeitlich **vorangehen** (bewusstes technisches und didaktisches Vorgehen).

---

## 7. Rollen & Verantwortlichkeiten

### Logisches Rollenmodell (Ein-Personen-Setup)

Im Sinne eines professionellen Arbeitsmodells werden **Zuständigkeiten getrennt gedacht**, auch wenn sie **von derselben Person** wahrgenommen werden:

| Rolle | Verantwortung |
|--------|----------------|
| **Product Owner / Domain Lead** | Ziele, Prioritäten, fachlicher Qualitätsmaßstab, inhaltliche Finalentscheidungen. |
| **Architecture & Coordination** | Systemlogik, Informationsarchitektur, Konsistenz, Entscheidungsrahmen, Schnittstellen zwischen **Lernwebsite** (`02_Portfolio/QA_Lernwebseite/`), **Monorepo-Root** (Steuerung, CI) und **Kurs-Portfolio**. |
| **Subject-Matter Review & Content Design** | fachliche Prüfung QA/ISTQB, inhaltliche Struktur, didaktische Aufbereitung (Web und Dokumente). |
| **Implementation & Delivery** | technische Umsetzung (HTML/CSS/JS, Repository-Struktur, Pflege von Build-/Veröffentlichungsprozessen der Website). |

### Stakeholder und externe Bezugspunkte (minimal)

- **Projektinhaber / Lernender:** **chd108** (Alias) — Inhaber:in aller oben genannten Rollen; **alleinige Entscheidungs- und Ergebnisverantwortung** für QA-Track.  
- **Kurs / Notion (MasterSchool):** **Rahmen** für Aufgaben, Fristen und Bewertung; **kein** operativer Projektpartner im Repository, aber **maßgeblicher** externer Steuerungskontext.  
- **Arbeitgeber / Personalverantwortliche (indirekt):** **Adressaten** der **Portfolio-Sichtbarkeit**; Nutzen entsteht über **öffentlich zugängliche und nachvollziehbare Artefakte**, nicht über die interne Kursabgabe.

---

## 8. Genehmigung / Gültigkeit

| Feld | Eintrag |
|------|---------|
| **Charter-Inhaber** | chd108 (Alias), Projektinhaber / Lernender (QA-Track) |
| **Datum der Billigung** | 2026-03-23 |
| **Gültigkeit** | **Gültig bis nächste formale Überprüfung (geplant: 2026-09-23)** — Anlass: Halbjahres-Review, Kursphasenwechsel oder wesentliche Änderung von Zielen/Umfang. |

*Mit der Billigung dieses Charters wird das QA-Track-Programm in der beschriebenen Ausprägung **zur Umsetzung freigegeben**; Änderungen am Zweck oder am Gesamtumfang werden **versioniert** in Charter und Status nachvollziehbar gemacht.*
