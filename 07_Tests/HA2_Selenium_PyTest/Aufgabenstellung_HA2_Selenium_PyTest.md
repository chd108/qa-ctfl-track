# 1. Hausaufgabe - Selenium Grundlagen & PyTest

In dieser Hausaufgabe wirst du **Selenium** verwenden. Bevor du mit den Aufgaben beginnst, stelle sicher, dass du Selenium in **PyCharm** gemäß der unten angegebenen Anleitung installierst. Erstelle ein Repository in deinem GitHub-Konto und pflege alle Aufgaben in diesem Repository. Dies trägt zum Aufbau deiner **Portfolio-Elemente** bei.

[Einrichtung von Selenium in PyCharm](https://www.notion.so/31eaaf3535384bf8a1f2f2708d0dc50f?pvs=21)

**✍🏻Abgaberichtlinie:**

Füge in deinem Antwortdokument einen Abschnitt hinzu, der sich auf Testautomatisierung bezieht. Für coding-bezogene Aufgaben fügst du entweder den Code oder den Link zu deinem GitHub-Repository hinzu.

## Aufgabe 1 (**Web-Automatisierung mit Selenium**)

Deine Aufgabe ist es, die folgenden Aktionen auf einer Demo-E-Commerce-Website zu automatisieren:

**URL:** https://www.saucedemo.com/

1. **Login-Automatisierung**
    
    Automatisiere den Login-Prozess für die Website mit den bereitgestellten Testzugangsdaten.
    
2. **Produkt-Such-Verifikation**
    
    Navigiere nach dem Login zur Produktseite und überprüfe das Vorhandensein bestimmter Produktnamen.
    

---

1. **Auf der Website einloggen**
    - Navigiere zu https://www.saucedemo.com/.
    - Finde und interagiere mit dem Login-Formular:
        - Gib den Benutzernamen ein: `standard_user`.
        - Gib das Passwort ein: `secret_sauce`.
        - Klicke auf die Schaltfläche **"Login"**.
    - Überprüfe, ob du dich erfolgreich eingeloggt hast, indem du den Seitentitel oder Elemente der Produktseite prüfst.
2. **Bestimmtes Produkt überprüfen**
    - Nachdem du dich eingeloggt hast, finde und überprüfe das Vorhandensein des folgenden Produkts:
        - Produktname: **"Sauce Labs Backpack"**.
    - Stelle sicher (assert), dass der Produktname auf der Seite angezeigt wird.

## Aufgabe 2 (**Parametrisierung und Fixtures**)

Erweitere nun dein Login-Skript, um **Parametrisierung** einzuschließen und eine **Driver-Fixture** zu erstellen. Stelle sicher, dass du **alle Benutzernamen**, die auf [https://www.saucedemo.com](https://www.saucedemo.com/) verfügbar sind, testest.

## Aufgabe 3 (**Benutzer registrieren**)

Schreibe ein Selenium-Skript, das Folgendes durchführt:

1. Browser starten
2. Zur URL navigieren: [http://automationexercise.com](https://automationexercise.com/)
3. Überprüfen, dass die Startseite erfolgreich sichtbar ist
4. Auf die Schaltfläche **„Signup / Login“** klicken
5. Überprüfen, dass **„New User Signup!“** sichtbar ist
6. Namen und E-Mail-Adresse eingeben
7. Auf die Schaltfläche **„Signup“** klicken
8. Überprüfen, dass **„ENTER ACCOUNT INFORMATION“** sichtbar ist
9. Details ausfüllen: Titel, Name, E-Mail, Passwort, Geburtsdatum
10. Kontrollkästchen **„Sign up for our newsletter!“** auswählen
11. Kontrollkästchen **„Receive special offers from our partners!“** auswählen
12. Details ausfüllen: Vorname, Nachname, Firma, Adresse, Adresse2, Land, Bundesstaat, Stadt, Postleitzahl, Handynummer
13. Auf die Schaltfläche **„Create Account“** klicken
14. Überprüfen, dass **„ACCOUNT CREATED!“** sichtbar ist
15. Auf die Schaltfläche **„Continue“** klicken
16. Überprüfen, dass **„Logged in as username“** sichtbar ist
17. Auf die Schaltfläche **„Delete Account“** klicken
18. Überprüfen, dass **„ACCOUNT DELETED!“** sichtbar ist und auf **„Continue“** klicken
