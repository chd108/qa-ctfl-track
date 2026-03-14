Erstellt am: 2026-03-14
Zuletzt aktualisiert am: 2026-03-14
Zweck: Systemkonzept-Gerüst / Arbeitsdokument der QA_Lernwebseite; Grundlage für Greenfield-Denkphase, Re-Architecture und Template-Strategie. Enthält verbindlichen Stand (Abschn. 1–3) und offene Klärungsfelder (ab Abschn. 4).

---

## Arbeitskontext und Rollenmodell

- **Product Owner / Domain Lead:** Gibt Ziel, Prioritäten, Nutzen und Qualitätsmaßstab vor; verantwortet die fachliche Richtung.
- **Architecture & Coordination:** Strukturiert, ordnet und koordiniert; hält Systemlogik, Konsistenz und Entscheidungsrahmen zusammen.
- **Subject-Matter Review & Content Design:** Unterstützt bei fachlicher Prüfung und inhaltlicher Struktur; besonders für QA-/ISTQB-/Testing-Inhalte und HTML-/Inhaltsentwürfe.
- **Implementation & Delivery:** Setzt technisch um; arbeitet an Dateien, Code, Refactoring und Struktur.

Die Trennung schafft klare Zuständigkeiten, reduziert Rollenvermischung und ermöglicht einen professionelleren Workflow.

---

## 1. Ausgangslage

- Gewachsenes Lern- und Referenzprojekt (QA/ISTQB); funktionsfähige Website mit starken Inhalten.
- Design- und Konsistenz-Harmonisierung an Haltepunkt: Seitenrahmen-Konzept und Formular-Basis verbindlich; weitere Harmonisierung zurückgestellt.
- Bewusster Wechsel in eine Greenfield-Denkphase: System neu durchdenken, ohne sofort Code oder Inhalte zu ändern.

---

## 2. Ziel der Greenfield-Denkphase

- Ein klares, konsistentes System- und Architekturkonzept erarbeiten, das den Bestand erklärt und eine zielgerichtete Weiterentwicklung ermöglicht.
- Re-Architecture und Template-Strategie definieren – wissenschaftlich fundiert und softwareindustriell praktikabel.
- Kein sofortiges Refactoring; erst Konzept, dann schrittweise Umsetzung.

---

## 3. Qualitätsmaßstab

- **Konsistenz:** Einheitliche Regeln für Seitentypen, Komponenten und Benennung.
- **Wartbarkeit:** Klare Trennung von Struktur, Styling und Inhalt; nachvollziehbare Ablage- und Namenslogik.
- **Zielgruppengerechtheit:** Lern- und Referenznutzung; Barrierefreiheit und Lesbarkeit.
- **State-of-the-art:** Bewährte Web-Standards (HTML/CSS), semantische Struktur, keine unnötige Komplexität.

---

*Ab Abschnitt 4: offene Klärungsfelder und Arbeitshypothesen – noch keine verbindlichen Festlegungen.*

---

## 4. Informationsarchitektur *(festgelegt)*

**Klärungsfeld 1: Informationsarchitektur**
- von uns hergeleitet
- von ChatGPT eingeordnet
- von Claude bestätigt
- ohne Korrekturbedarf validiert

**Festgelegte Informationsarchitektur**

**Primärachse**
- ISTQB / CTFL-Lehrplan als normativer Kern

**Sekundäre Ebenen**
- Orientierung / Überblick
- Nachschlagen / Begriffe / Übersetzung
- Praxis / Anwendung
- Visualisierung / Veranschaulichung

**Didaktische Zusatzebene**
- Selbstkontrolle / Prüfungsvorbereitung

---

## 5. Seitentypen *(Klärungsfeld)*

**Bereits erkennbar (Bestand):** Es gibt eine Startseite, Inhaltsseiten mit gemeinsamen Rahmenelementen und Formularseiten mit speziellem Inhaltsbereich.

**Offen / zu klären:**
- Welche Seitentypen wollen wir überhaupt unterscheiden (nur 2–3 oder feiner)? Noch nicht festgelegt.
- Soll der Index dauerhaft als eigener Seitentyp mit Ausnahme vom „gemeinsamen Rahmen“ gelten – oder ist das nur aktueller Stand zur Diskussion?
- Formularseiten: Ist die heutige Aufteilung (sichtbarer Rahmen vs. A4-/Formular-Bereich) endgültig oder nur Arbeitshypothese? Welche Alternativen (ein Rahmen für alles, stärkere Trennung, andere technische Modellierung)?
- Gibt es weitere Seitentypen oder Varianten (z. B. reine Referenzseiten, Druckansichten), die noch nicht modelliert sind?

**Noch zu entscheiden:** Verbindliche Definition der Seitentypen und ihrer Grenzen; ob und welche Sonderrollen bestehen bleiben.

---

## 6. Komponenten *(Klärungsfeld)*

**Bereits erkennbar (Bestand):** Im Bestand tauchen u. a. Navigation, Titel, Untertitel, Footer, Inhaltsblöcke (Text, Tabellen, Code, Visualisierungen) und formularspezifische Elemente (z. B. A4-Container, page-footer) auf.

**Offen / zu klären:**
- Welche Elemente zählen wir als „Rahmen“, welche als „Inhalt“, welche als formularspezifisch? Noch keine verbindliche Einteilung.
- Soll es einen festen Komponentenkatalog geben – und wenn ja, auf welcher Abstraktionsebene (logisch vs. technisch)?
- Sind die jetzigen formularspezifischen Komponenten (z. B. formular-base.css, form-page-nav) das endgültige Modell oder nur ein möglicher Weg?

**Noch zu entscheiden:** Komponentenbegriff schärfen; Katalog und Wiederverwendungsregeln; Abgrenzung zu Seitentypen und Benennung.

---

## 7. Benennungslogik *(Klärungsfeld)*

**Bereits erkennbar (Bestand):** Dateien und Ordner folgen teilweise Kebab-Case; CSS ist in base, subpage, formular-base, index etc. aufgeteilt; es gibt wiederkehrende Begriffe in der Projektsteuerung.

**Offen / zu klären:**
- Welche Benennungskonvention für Dateien/Ordner soll verbindlich sein (Kebab-Case, andere)? Noch nicht festgelegt.
- CSS: BEM, andere Methodik oder bewusst keine strenge Konvention? Zuordnung zu Basis / Layout / Komponenten / seiten-spezifisch ist offen.
- IDs und Klassen: Semantik vs. Präsentation; Präfixe pro Bereich – alles noch zu definieren.
- Glossar der fachlichen und technischen Begriffe (SYSTEMKONZEPT, Projektsteuerung, Code): fehlt noch.

**Noch zu entscheiden:** Verbindliche Regeln für Dateien, CSS, IDs/Klassen und Begriffe; Konsistenz zwischen Dokumentation und Code.

---

## 8. Nächste Schritte *(Arbeitsorientierung)*

- Bestand (Seiten, CSS, JS) sichten und mit diesem Gerüst abgleichen; Lücken und Widersprüche dokumentieren.
- Informationsarchitektur: offene Punkte (s. Abschn. 4) klären und Entscheidungen festhalten.
- Seitentypen: offene Punkte (s. Abschn. 5) klären; keine Vorentscheidung für Index-Sonderrolle oder Formularmodell.
- Komponenten und Benennungslogik: Klärungsfelder (Abschn. 6 und 7) ausarbeiten; Entscheidungen erst nach Klärung treffen.
- Soll-Architektur und Umsetzungsreihenfolge erst festlegen, wenn die Klärungsfelder ausreichend entschieden sind.
