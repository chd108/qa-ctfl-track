#!/usr/bin/env python3
"""
Erzeugt den gemeinsamen Block top-nav-zone aus tools/main_nav.json und ersetzt ihn
in allen QA_Lernwebseite-HTML-Dateien (Root, pages/*, templates).

Aufruf (im Ordner QA_Lernwebseite):
  python tools/build_main_nav.py
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

SITE_ROOT = Path(__file__).resolve().parent.parent
JSON_PATH = Path(__file__).resolve().parent / "main_nav.json"
MARKER = '<div class="top-nav-zone">'


def load_config() -> dict:
    with open(JSON_PATH, encoding="utf-8") as f:
        return json.load(f)


def rel_href(site: Path, from_rel: Path, to_rel: Path) -> str:
    a = site / from_rel
    b = site / to_rel
    r = os.path.relpath(b, a.parent).replace("\\", "/")
    if r == ".":
        return "index.html"
    return r


def find_top_nav_zone_end(html: str, start: int) -> int:
    """Index direkt nach dem schließenden </div> der äußeren top-nav-zone."""
    tag_re = re.compile(r"<div\b|</div\s*>", re.I)
    depth = 0
    for m in tag_re.finditer(html, start):
        if m.group(0).lower().startswith("<div"):
            depth += 1
        else:
            depth -= 1
            if depth == 0:
                return m.end()
    raise ValueError("top-nav-zone: unausgewogen / kein Ende")


def current_keys(from_rel: Path) -> tuple[str | None, str | None, str | None]:
    """
    Welcher Eintrag ist aktiv: (learn, assignments, summary) — jeweils Dateiname
    oder 'home' für die Startseite in Nav 1.
    """
    parts = from_rel.parts
    if from_rel.name == "index.html" and len(parts) == 1:
        return ("home", None, None)
    if "referenzvorlage-hauptsystem.html" in parts:
        return (None, None, None)
    if "01-lerninhalte" in parts:
        return (from_rel.name, None, None)
    if "02-hausaufgaben" in parts:
        return (None, from_rel.name, None)
    if "03-lektionen" in parts:
        return (None, None, from_rel.name)
    return (None, None, None)


def assets_prefix_for(from_rel: Path) -> str:
    if from_rel.name == "index.html" and len(from_rel.parts) == 1:
        return "assets/"
    if "templates" in from_rel.parts:
        return "../assets/"
    return "../../assets/"


def render_nav(cfg: dict, from_rel: Path) -> str:
    site = SITE_ROOT
    cur_learn, cur_assign, cur_summary = current_keys(from_rel)
    ap = assets_prefix_for(from_rel)

    lines: list[str] = [
        '<div class="top-nav-zone">',
        '  <div class="top-nav-zone__brand-row">',
        '    <div class="top-nav-zone__nav-stack">',
        '      <nav class="main-nav main-nav--learn" aria-label="Lernmaterial">',
        "    <ul>",
    ]

    for item in cfg["learn"]:
        if item.get("kind") == "home":
            href = rel_href(site, from_rel, Path("index.html"))
            is_cur = cur_learn == "home"
            if is_cur:
                lines.append(
                    f'      <li><a href="{href}" class="current main-nav__home" '
                    f'aria-label="Einstieg (Startseite)" aria-current="page">'
                    f'<img class="main-nav__home-img" src="{ap}qa-favicon-256.png" alt="" '
                    f'width="48" height="48" decoding="async"></a></li>'
                )
            else:
                lines.append(
                    f'      <li><a href="{href}" class="main-nav__home" '
                    f'aria-label="Zur Startseite QA Lernwebseite">'
                    f'<img class="main-nav__home-img" src="{ap}qa-favicon-256.png" alt="" '
                    f'width="48" height="48" decoding="async"></a></li>'
                )
        else:
            fn = item["file"]
            to = Path("pages/01-lerninhalte") / fn
            href = rel_href(site, from_rel, to)
            is_cur = cur_learn == fn
            if is_cur:
                lines.append(
                    f'      <li><a href="{href}" class="current" aria-current="page">{item["label"]}</a></li>'
                )
            else:
                lines.append(f'      <li><a href="{href}">{item["label"]}</a></li>')

    lines.extend(
        [
            "    </ul>",
            "  </nav>",
            '      <nav class="main-nav main-nav--assignments" aria-label="Hausaufgaben">',
            "    <ul>",
        ]
    )

    for item in cfg["assignments"]:
        fn = item["file"]
        to = Path("pages/02-hausaufgaben") / fn
        href = rel_href(site, from_rel, to)
        is_cur = cur_assign == fn
        if is_cur:
            lines.append(
                f'      <li><a href="{href}" class="current" aria-current="page">{item["label"]}</a></li>'
            )
        else:
            lines.append(f'      <li><a href="{href}">{item["label"]}</a></li>')

    lines.extend(
        [
            "    </ul>",
            "  </nav>",
            '      <nav class="main-nav main-nav--summary" aria-label="Lernzusammenfassung und Kursfolien">',
            "    <ul>",
        ]
    )

    for item in cfg["summary"]:
        fn = item["file"]
        to = Path("pages/03-lektionen") / fn
        href = rel_href(site, from_rel, to)
        is_cur = cur_summary == fn
        if is_cur:
            lines.append(
                f'      <li><a href="{href}" class="current" aria-current="page">{item["label"]}</a></li>'
            )
        else:
            lines.append(f'      <li><a href="{href}">{item["label"]}</a></li>')

    lines.extend(
        [
            "    </ul>",
            "  </nav>",
            "    </div>",
            "  </div>",
            "</div>",
        ]
    )

    return "\n".join(lines)


def collect_html_files() -> list[Path]:
    out: list[Path] = []
    for p in SITE_ROOT.rglob("*.html"):
        rel = p.relative_to(SITE_ROOT)
        if "tools" in rel.parts:
            continue
        out.append(rel)
    return sorted(out)


def patch_file(cfg: dict, rel: Path) -> bool:
    path = SITE_ROOT / rel
    text = path.read_text(encoding="utf-8")
    start = text.find(MARKER)
    if start == -1:
        print(f"SKIP (kein {MARKER}): {rel}", file=sys.stderr)
        return False
    end = find_top_nav_zone_end(text, start)
    new_block = render_nav(cfg, rel)
    new_text = text[:start] + new_block + text[end:]
    if new_text != text:
        path.write_text(new_text, encoding="utf-8", newline="\n")
        return True
    return False


def main() -> int:
    cfg = load_config()
    updated = 0
    for rel in collect_html_files():
        if patch_file(cfg, rel):
            print(f"OK {rel}")
            updated += 1
    print(f"Fertig. Geändert: {updated} Datei(en).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
