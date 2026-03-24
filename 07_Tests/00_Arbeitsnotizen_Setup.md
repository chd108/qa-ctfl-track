# 07_Tests — Arbeitsnotizen (Setup mit KI)

**Zweck:** Kurz festhalten, was bei der **gemeinsamen Anlage** von `07_Tests/` besprochen bzw. entschieden wurde — **kein** Ersatz für [03_Project_Standards.md](../01_Projektsteuerung/03_Project_Standards.md) oder [04_Project_Guidelines.md](../01_Projektsteuerung/04_Project_Guidelines.md).

**Letzte Ergänzung:** 2026-03-24 — HA4 Projektstruktur angelegt

**Nutzung:** Diese Datei kann in **neuen Chats** per `@07_Tests/00_Arbeitsnotizen_Setup.md` eingebunden werden, damit Kontext aus dem Setup erhalten bleibt.

---

## Struktur & Benennung

| Hausaufgabe | Ordner | Aufgabenstellung | Weitere Dateien |
|-------------|--------|------------------|-----------------|
| HA1 PyTest | `HA1_PyTest/` | `Aufgabenstellung_HA1_PyTest.md` | — |
| HA2 Selenium + PyTest | `HA2_Selenium_PyTest/` | `Aufgabenstellung_HA2_Selenium_PyTest.md` | — |
| HA3 XPath | `HA3_XPath/` | `Aufgabenstellung_HA3_XPath.md` | `xpath_task_1.md`, `xpath_task_2.md` (Platzhalter für Abgabe), `assets/` (Screenshots) |
| HA4 Projekt Testautomatisierung | `HA4_Testautomatisierung_Projekt/` | `Aufgabenstellung_HA4_Testautomatisierung_Projekt.md` | `README.md`, `tests/`, `pages/`, `utils/` (`constants.py`, `helpers.py`), `screenshots/`, `reports/` (Gerüst) |

- Pro HA: **kein** verpflichtendes `README.md` im Unterordner, wenn nicht ausdrücklich gewünscht — **Ausnahme HA4:** kurzes `README.md` zum PyCharm-/Ordnerbezug.
- Aufgabenstellung-Dateien: Name **`Aufgabenstellung_HA…`** (präziser als nur „hausaufgabe“).

---

## Versionierung

- **`07_Tests/`** steht **nicht** in `.gitignore` — Inhalt soll **mit ins Repo** (bewusst, im Gegensatz zu `03_Hausaufgaben/` etc.).

---

## Inhaltliche Hinweise (einzelne Aufgaben)

### HA1 PyTest
- Funktionsbeschreibung / Anmerkungen: deutsche **„…“**-Anführungszeichen wie in der Vorlage; Python-Codeblöcke bleiben mit ASCII-`"`.
- Überschrift im Original: „# 1. Hausaufgabe“ trotz Reihe unter `07_Tests` — **1:1** übernommen, wenn nicht korrigiert werden soll.

**Aufgabenspezifika (Umsetzung):**
- **Installation:** `pip install pytest` (laut Aufgabe, PyCharm-Terminal).
- **Code-Basis:** `count_word_matches(text, target)` ist **vorgegeben**; nicht die Aufgabenstellung ändern, sondern Tests schreiben.
- **Übung 1:** `@pytest.mark.parametrize` — 7 Fälle (inkl. Groß/Klein, Teilwort „cat“ in „catcat“, keine Treffer).
- **Übung 2:** **Fixture** für Randfälle + Parametrisierung — leere Strings, Leerzeichen, Interpunktion (`cat,dog cat` → ein „cat“ als Worttoken je nach `split()`-Verhalten der Referenzimplementierung).
- **Übung 3:** Fixture für ungültige Eingaben; laut Aufgabe: `None` für Text/Ziel → Erwartung **`0`** (die gegebene Implementierung macht `if not text or not target: return 0`), **kein** Exception bei `None`. **`AttributeError`** bei Typen ohne `.lower()` / `.split()` (z. B. `int`, `list`) — mit Aufgabenstellung abgleichen.
- **Abgabe:** Link zum Repo ins Antwortdokument; Artefakte hier unter `07_Tests/HA1_PyTest/` pflegen.

### HA2 Selenium
- Gleiches Thema: Original-Überschrift kann weiter „1. Hausaufgabe“ lauten.
- `automationexercise`-Link: im Original `[http://…](https://…)` — Ziel ist **https**.
- **Notion:** Einrichtung Selenium in PyCharm verlinkt in der Aufgabenstellung.

**Aufgabenspezifika (Umsetzung):**
- **Aufgabe 1 — saucedemo.com:** Login `standard_user` / `secret_sauce`, dann Assert z. B. Produkt **„Sauce Labs Backpack“** sichtbar; Seitentitel/Produktseite als Erfolgskriterium.
- **Aufgabe 2:** **Parametrisierung** + **Driver-Fixture**; **alle** auf der Login-Seite angebotenen Demo-Benutzernamen testen (Liste von der Seite / Dokumentation beziehen, nicht nur `standard_user`).
- **Aufgabe 3 — automationexercise.com:** Vollständiger Sign-up- bis Delete-Account-Flow (viele Schritte). **Risiken bei echter Ausführung:** einmalige E-Mail, Captchas/Spam-Schutz, Wartezeiten/Flakiness, sich änderndes DOM — ggf. explizite Waits, Testdaten-Strategie.
- **Abgabe:** Im Antwortdokument Abschnitt **Testautomatisierung**; Code oder **GitHub-Link** (Monorepo: sinnvoller Pfad unter `07_Tests/…` oder klar benanntes Teilrepo laut Kursvorgabe).

### HA3 XPath
- HTML-Block in der Vorlage fälschlich als ` ```python ` markiert — **1:1** belassen (nur kosmetisch in der IDE).
- **Aufgabe 2 — Bilder:** Auf der **Kursseite** sind **drei** Abbildungen; im Repo: `assets/image1.webp` … `image3.webp` in **dieser** Reihenfolge (Start → `/auth` → Sign-Up).
- Schritte **`/store`** (Modal „Confirm“) und **Shop / Oranges:** in der offiziellen Fassung **ohne** weiteres Bild — Arbeit mit **Live-Seite** / DevTools. (In manchen Roh-Exports/Notion können **mehr** `attachment:`-Zeilen vorkommen als sichtbare Figuren auf dem LMS.)
- `xpath_task_1.md` / `xpath_task_2.md`: Platzhalter für die spätere Abgabe; laut Aufgabe nach jeder Aufgabe **committen/pushen** (Hinweis an Studierende).

**Aufgabenspezifika (Umsetzung):**
- **Aufgabe 1:** **15** XPath-Ausdrücke zum **eingebetteten HTML** (DOM-Kenntnis, Achsen, Attribute, Textknoten).
- **Aufgabe 2:** GroceryMate-URLs wie in der Aufgabenstellung; **Nummerierung** im Original teils mehrfach **„1.“** — absichtlich so übernommen.
- **Abgabe:** Laut Aufgabe **`.md`-Dateien** pro Aufgabe (`xpath_task_1.md`, `xpath_task_2.md`) mit den Ausdrücken; **Portfolio-Repository** = dieses Repo bzw. der vom Kurs geforderte Nachweis.

### HA4 Projekt Testautomatisierung (GroceryMate)
- **Bezug:** Automatisierung der Fälle aus manuellem Testen — Notion: *1. Hausaufgabe: Testplan & Testfallentwurf* (Link in der Aufgabenstellung).
- **SUT:** https://grocerymate.masterschool.com — **drei neue Features**; Umsetzung **ohne Abwandlungen** zu den definierten Tests.
- **Stack:** PyCharm, Selenium + pytest, **Page Object Model** (`pages/`, `tests/`), **WebDriver-Fixture** (`conftest.py` vorgesehen), Parametrisierung, Waits in Page Objects, Konstanten in `utils/constants.py`, **pytest-html** (`pytest --html=report.html`).
- **Struktur:** Im Beispielbaum hieß das Wurzelverzeichnis `selenium_pytest_project/` — im Repo heißt der Arbeitsordner **`HA4_Testautomatisierung_Projekt/`** (gleiche Unterstruktur).
- **Aufgabenstellung:** Codeblöcke in der Vorlage als ` ```jsx ` — übernommen; kaputte Notion-Links im Originalbaum durch **normale Dateinamen** in der Markdown-Kopie ersetzt (lesbar im Git).

**Aufgabenspezifika (Umsetzung):**
- HTML-Report unter `reports/` ablegen sinnvoll; `screenshots/` bei Fehlern.
- `reports/` in `.gitignore` optional später, wenn große Artefakte nicht versioniert werden sollen — aktuell bewusst leer versionierbar (nur `.gitkeep`).

---

## Ablauf mit KI (vereinbart)

- Zuerst **Analyse + Bericht im Chat**, dann erst auf explizites **„Go“** Dateien anlegen/ändern — vermeidet Vorgriffe.
- **Windows PowerShell:** Befehlsverkettung oft mit **`;`**, nicht `&&` (je nach PS-Version) — relevant bei Git-/Health-Checks.

---

*Bei weiteren HAs diesen Block ergänzen oder Datum der letzten Ergänzung anpassen.*
