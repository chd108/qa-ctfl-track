# 1. Hausaufgabe - PyTest

In dieser Hausaufgabe wirst du PyTest verwenden.

Bevor du mit den Aufgaben beginnst, installiere PyTest in deiner PyCharm-Umgebung.

Verwende dein Software-Test-Repository, um die Dateien dieser Hausaufgabe zu verwalten.

## Installation von PyTest

Führe im Terminal von PyCharm folgenden Befehl aus:

```bash
pip install pytest
```

## Abgaberichtlinie

Füge den Link zu deinem Repository in dein Antwortdokument ein.

## Gegebene Funktion

**Funktion:** `count_word_matches()`

Die Funktion soll:

1. Zwei Eingaben annehmen:
    - einen String (`text`)
    - ein einzelnes Wort (`target`)
2. Zählen, wie oft das Zielwort (`target`) als eigenständiges Wort im Text vorkommt (Groß-/Kleinschreibung wird ignoriert).
3. Die Anzahl zurückgeben.

## Implementierung

```python
def count_word_matches(text, target):
    """
    Zählt, wie oft ein Zielwort als eigenständiges Wort im Text vorkommt.
    Die Übereinstimmung erfolgt ohne Berücksichtigung der Groß-/Kleinschreibung,
    und Wörter sind durch Leerzeichen getrennt.

    Args:
        text (str): Eingabetext, in dem gesucht wird.
        target (str): Das gesuchte Wort.

    Returns:
        int: Anzahl der Vorkommen des Zielwortes als eigenständiges Wort.
    """
    if not text or not target:
        return 0
    
    # Text in Wörter aufteilen und für case-insensitive Vergleich in Kleinbuchstaben umwandeln
    words = text.lower().split()
    target = target.lower()
    
    # Eigenständige Vorkommen des Zielwortes zählen
    return words.count(target)
```

## Funktionsbeschreibung

- **Wortübereinstimmung:**
    - Ein „eigenständiges Wort“ ist eine Zeichenfolge, die durch Leerzeichen getrennt ist.
    - Vergleich ohne Berücksichtigung der Groß-/Kleinschreibung (z. B. „Cat“ entspricht „cat“).
- **Eingabebehandlung:**
    - Der Text wird anhand von Leerzeichen in Wörter zerlegt.
    - Falls `text` oder `target` leer ist, wird `0` zurückgegeben.
- **Zählung:**
    - Verwendet `list.count()` von Python, um exakte Übereinstimmungen des Zielwortes in der Wortliste zu zählen.

## Aufgaben

### **Übung 1: Basis-Tests mit Parametrisierung**

Nutze Parametrisierung, um `count_word_matches` mit mehreren Eingabekombinationen aus `text` und `target` sowie den erwarteten Ausgaben zu testen.

Schreibe einen parametrisierten Test, um die Funktion für einfache, gemischte und einfache Randfallszenarien zu validieren.

**Testfälle:**

1. `text="The cat sat on the mat"`, `target="cat"` → Erwartet: 1 *(Nur „cat“ zählt, nicht „cat“ in „concatenate“)*
2. `text="Dog dog DOG dOg"`, `target="dog"` → Erwartet: 4 *(Groß-/Kleinschreibung ignoriert)*
3. `text="Hello world"`, `target="world"` → Erwartet: 1
4. `text="hello hello HELLO"`, `target="hello"` → Erwartet: 3
5. `text="No matches here"`, `target="yes"` → Erwartet: 0 *(Keine Übereinstimmungen)*
6. `text="catcat cat catdog"`, `target="cat"` → Erwartet: 1 *(Nur eigenständiges „cat“ zählt)*
7. `text="a a a"`, `target="a"` → Erwartet: 3

---

### Übung 2: Testen von Randfällen (Edge Case Testing)

Erstelle ein Fixture, das häufige Randfall-Eingaben bereitstellt, und teste die Funktion mit parametrisierten Tests.

Fokussiere auf leere Eingaben, Leerzeichen und Interpunktion.

Testfälle:

1. Leerer Text: `text=""`, `target="word"` → Erwartet: 0
2. Leeres Zielwort: `text="hello world"`, `target=""` → Erwartet: 0
3. Beides leer: `text=""`, `target=""` → Erwartet: 0
4. Mehrere Leerzeichen: `text="hello world"`, `target="world"` → Erwartet: 1 *(Zusätzliche Leerzeichen ignoriert)*
5. Führende/nachgestellte Leerzeichen: `text=" cat "`, `target="cat"` → Erwartet: 1
6. Satzzeichen nicht als Trennzeichen behandelt: `text="cat,dog cat"`, `target="cat"` → Erwartet: 1
7. Einzelzeichen: `text="x y z"`, `target="x"` → Erwartet: 1

---

### Übung 3: Negativtests (Negative Testing)

Teste die Funktion auf ungültige Eingaben wie `None`, Ganzzahlen oder Listen, um sicherzustellen, dass sie die entsprechenden Ausnahmen (Exceptions) auslöst.

Verwende ein Fixture, um Testfälle für ungültige Eingaben bereitzustellen.

Testfälle:

1. Text = `None`, Zielwort = `"word"` → Erwartet: 0
2. Text = `"hello world"`, Zielwort = `None` → Erwartet: 0
3. Text = `123`, Zielwort = `"word"` → Erwartet: AttributeError
4. Text = `"hello world"`, Zielwort = `456` → Erwartet: AttributeError
5. Text = `["hello", "world"]`, Zielwort = `"world"` → Erwartet: AttributeError
6. Text = `"hello world"`, Zielwort = `["world"]` → Erwartet: AttributeError
