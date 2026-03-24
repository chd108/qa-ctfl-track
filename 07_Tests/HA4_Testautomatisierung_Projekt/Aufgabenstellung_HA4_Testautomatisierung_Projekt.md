# Projekt: Test Automatisierung

In diesem finalen Projekt der Test Automatisierung, wirst du die Testfälle die während des Manuellen testens bereits ausgeführt wurden automatisieren - [1. Hausaufgabe: Testplan & Testfallentwurf](https://www.notion.so/2689418319f3804e94bedcf5af327168?pvs=21)

Das zu testende System ist weiterhin - https://grocerymate.masterschool.com und die 3 neuen Features, und soll die bereits definierten tests ohne abwandlungen und abkürzungen implementieren.

## Anforderungen

1. Erstellung eines Pycharm projektes und Installation der erforderlichen Plugins und Libraries
2. Page Object Model soll verwendet werden - Alle Seiten im  `pages` package.
3. Page Object Model soll verwendet werden - Alle tests im  `tests` directory.
4. Eine Fixture soll für die Erstellung des Webdrivers verwendet werden
5. Code duplizierung soll vermieden werden
    1. Verwendung von Parametrisierten tests um die Selben tests mit verschiedenen datensets auszuführen
    2. Verwendung von implizierten waits bzw. waits in den Seiten objekten um häufig kopierte waits zu vermeiden
6. Testdaten bzw Variablen sollen nicht “Hardcoded” werden und sollen in einem Seperaten file configurierbar sein e.g. `utils/constants.py` 
7. Klare und verständliche Assertions sollen verwendet werden
8. Ein detailierter HTML test report soll erstellt werden

```jsx
# Install package
pip install pytest-html

# Generate report (type in terminal)
pytest --html=report.html
```

## Beispiel Projekt Struktur

```jsx
selenium_pytest_project/
│
├── tests/                          # Contains all test scripts
│   ├── test_login.py               # Example test file for login functionality
│   ├── test_registration.py        # Example test file for registration
│   ├── conftest.py                 # PyTest fixtures and configurations
│
├── pages/                          # Implements the Page Object Model
│   ├── login_page.py               # Login page elements and actions
│   ├── registration_page.py        # Registration page elements and actions
│
├── utils/                          # Utility and helper modules
│   ├── constants.py                # Application constants (URLs, credentials)
│   ├── helpers.py                  # Reusable utility functions
│
├── screenshots/                    # Stores screenshots for test failures
│
├── reports/                        # Stores test execution reports (e.g., HTML)
│
├── README.md                       # Documentation for the project
```
