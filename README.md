Erstellt am: 2026-03-12
Zuletzt aktualisiert am: 2026-03-12
Zweck: Kurzbeschreibung und Struktur des eigenständigen Webprojekts QA Lernwebseite.

---

# QA Lernwebseite

Sammlung visueller Lernmaterialien zu Software Testing / QA. Jede HTML-Seite ist ein eigenständiges Lernmodul.

**Ziel:** Verständliche Visualisierung von QA-Grundlagen (z. B. SDLC, Testverfahren, Einordnung von Konzepten).

## Struktur

| Pfad | Beschreibung |
|------|--------------|
| `index.html` | Einstieg, Kartenübersicht aller Lernseiten (Reihenfolge: Testuniversum, Kap. 4, Terminologie → Hausaufgaben → Visualisierungen) |
| `pages/` | Einzelne Lernseiten: Testuniversum, Testverfahren (Kap. 4), Glossar, HA-Einordnung, HA4 Anforderungsanalyse, HA4 Formular, SDLC Hypozykel (statisch/animiert) |
| `assets/css/` | Gemeinsames CSS (`base.css`: Variablen, Reset, Rücklink, Skip-Link) |
| `assets/js/` | Ausgelagerte Skripte für die Hypozykel-Seiten (`sdlc-hypocycle-statisch.js`, `sdlc-hypocycle-animiert.js`) |

**Technik:** `base.css` bildet die gemeinsame Basis (Variablen, Reset, Body, Header, einheitlicher „Zurück zur Übersicht“-Link, Skip-Link für Barrierefreiheit). Die Unterseiten binden `base.css` ein und haben jeweils eigenes Inline-CSS für das Modul-Layout. Meta-Descriptions und semantische Struktur (`<main>`, `id="main"`) sind auf allen Seiten umgesetzt.

Der Ordner ist als **eigenständiges Webprojekt** gedacht und hat möglichst keine Abhängigkeiten zu anderen Ordnern. Er kann separat verwendet oder veröffentlicht werden.
