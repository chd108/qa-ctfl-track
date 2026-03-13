Erstellt am: 2026-03-12
Zuletzt aktualisiert am: 2026-03-12
Zweck: Kurzbeschreibung und Struktur des eigenständigen Webprojekts QA Lernwebseite.

---

# QA Lernwebseite

Kostenlose Lernmaterialien zu Software Testing / QA und ISTQB CTFL. Jede HTML-Seite ist ein eigenständiges Lernmodul. Das Projekt ist als Lernprojekt öffentlich nutzbar und kann z. B. über GitHub Pages bereitgestellt werden.

**Ziel:** Verständliche Visualisierung von QA-Grundlagen (z. B. SDLC, Testverfahren, Einordnung von Konzepten).

**Lizenz:** Dieses Projekt steht unter [CC BY-NC-SA 4.0](LICENSE) (Namensnennung, nicht kommerziell, Weitergabe unter gleichen Bedingungen). Siehe [LICENSE](LICENSE).

## Struktur

| Pfad | Beschreibung |
|------|--------------|
| `index.html` | Einstieg, Kartenübersicht aller Lernseiten (Reihenfolge: Testuniversum, Kap. 4, Terminologie → Hausaufgaben → Visualisierungen) |
| `pages/` | Einzelne Lernseiten: Testuniversum, Testverfahren (Kap. 4), Glossar, HA-Einordnung, HA4 Anforderungsanalyse, HA4 Formular, HA5 Testkonzept, HA5 Testkonzept Formular, HA5 Testfallentwurf, HA5 Testfallentwurf Formular, SDLC Hypozykel (statisch/animiert) |
| `assets/css/` | Gemeinsames CSS (`base.css`: gemeinsame visuelle Basis, Variablen, Reset, Hauptnavigation, Skip-Link) |
| `assets/js/` | Ausgelagerte Skripte für die Hypozykel-Seiten (`sdlc-hypocycle-statisch.js`, `sdlc-hypocycle-animiert.js`) |

**Technik:** `base.css` bildet die gemeinsame visuelle Basis (Variablen, Reset, Body, Header, Hauptnavigation, Skip-Link für Barrierefreiheit). Die meisten Unterseiten binden `base.css` ein und haben jeweils eigenes Inline-CSS für das Modul-Layout. Die HA5-Formularseiten (Testkonzept, Testfallentwurf) nutzen eigenständiges A4-Layout ohne base.css; die obere Navigation wird beim Druck ausgeblendet. Meta-Descriptions und semantische Struktur (`<main>`, `id="main"`) sind auf allen Seiten umgesetzt.

Der Ordner ist als **eigenständiges Webprojekt** gedacht und hat möglichst keine Abhängigkeiten zu anderen Ordnern. Er kann separat verwendet oder veröffentlicht werden (z. B. über GitHub Pages).
