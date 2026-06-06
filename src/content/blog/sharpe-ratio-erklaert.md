---
title: "Sharpe Ratio: Wie viel Rendite pro Einheit Risiko?"
description: "Die Sharpe Ratio ist das Standardmass für risiko-adjustierte Rendite. Wie sie berechnet wird, was sie wirklich misst und welche Schwächen sie hat."
pubDate: 2026-06-15
category: "Grundlagen"
subcategory: "Kennzahlen"
author: "Redaktion"
readingTime: "8 Min. Lesezeit"
faq:
  - question: "Wie wird die Sharpe Ratio berechnet?"
    answer: "Die Sharpe Ratio ergibt sich aus der Rendite minus dem risikofreien Zinssatz, geteilt durch die Volatilität. Sie misst, wie viel Überrendite pro Einheit Risiko erwirtschaftet wird."
  - question: "Was ist eine gute Sharpe Ratio?"
    answer: "Werte zwischen 1,0 und 2,0 gelten als sehr gut, 2,0 bis 3,0 als exzellent. Der S&P 500 liegt historisch bei etwa 0,4 bis 0,5, Werte über 3 sind aussergewöhnlich und oft unrealistisch."
  - question: "Was sind die Schwächen der Sharpe Ratio?"
    answer: "Sie behandelt Aufwärts- und Abwärtsvolatilität gleich, setzt eine Normalverteilung der Renditen voraus (reale Märkte haben Fat Tails), ist zeitabhängig und reagiert auf den risikofreien Zins. Alternativen sind etwa die Sortino Ratio oder die Calmar Ratio."
  - question: "Warum ist eine sehr hohe Sharpe Ratio verdächtig?"
    answer: "Eine Sharpe Ratio über 3 über mehrere Jahre deutet oft auf Überfitting oder nicht erfasste Risiken hin. Bernie Madoffs angebliche Performance hatte eine Sharpe Ratio von etwa 4, war aber ein Schneeballsystem."
---

Zwei Trader im Vergleich: Trader A erzielte im letzten Jahr 30 % Rendite. Trader B nur 15 %. Wer ist der bessere Trader?

Die Antwort ist nicht so eindeutig, wie sie scheint. Wenn Trader A in volatilen Krypto-Werten gehandelt hat und mehrmals fast pleite war, während Trader B mit defensiver Aktienauswahl gleichmässig wuchs, wer hat wirklich besser performt?

Die **Sharpe Ratio** beantwortet diese Frage. Sie ist seit Jahrzehnten das wichtigste Mass für **risiko-adjustierte Performance** in der Anlagewelt.

## Die Formel

Die Sharpe Ratio wurde 1966 vom US-Ökonomen **William F. Sharpe** entwickelt, der 1990 den Wirtschaftsnobelpreis erhielt. Die Formel:

**Sharpe Ratio = (Rendite − risikofreier Zinssatz) / Volatilität**

Konkret: Wie viel Überrendite (über dem risikofreien Zins) wird pro Einheit Risiko erwirtschaftet?

Beispiel:
- Portfolio-Rendite: 12 %
- Risikofreier Zins (Schweizer Bundesobligationen): 1.5 %
- Volatilität des Portfolios: 14 %
- Sharpe Ratio: (12 − 1.5) / 14 = **0.75**

## Wie eine Sharpe Ratio einzuordnen ist

Eine grobe Orientierung:

| Sharpe Ratio | Einordnung |
|---|---|
| Unter 0 | Schlechter als der risikofreie Zins |
| 0 bis 0.5 | Suboptimal |
| 0.5 bis 1.0 | Akzeptabel bis gut |
| 1.0 bis 2.0 | Sehr gut |
| 2.0 bis 3.0 | Exzellent |
| Über 3.0 | Aussergewöhnlich (oder unrealistisch) |

Zur Kalibrierung:
- Der S&P 500 hat historisch eine Sharpe Ratio von etwa 0.4 bis 0.5
- Berkshire Hathaway hat über lange Zeiträume eine Sharpe Ratio um 0.7
- Spitzenhedgefonds wie Renaissance Technologies sollen Sharpe Ratios über 2 erzielen
- Ein Forex-EA, der eine Sharpe Ratio von 5 verspricht, ist mit Sicherheit überfittet

> *"Anyone showing you a Sharpe Ratio above 3 over more than a few years is either lying, has discovered something extraordinary, or hasn't lived through a real bear market yet."*
>, Cliff Asness, AQR Capital

## Was die Sharpe Ratio richtig macht

Die Sharpe Ratio adressiert ein fundamentales Problem klassischer Renditebewertung: Sie **bestraft [Volatilität](/blog/volatilitaet-verstehen)**.

Zwei Beispiele:

**Strategie X:** Konstant 1 % Rendite pro Monat, ohne Drawdowns. Jahresrendite 12.6 %, Volatilität ca. 1 %. Sharpe Ratio: ≈ 11.

**Strategie Y:** Sprunghafte Rendite (+30 % im Q1, -10 % im Q2, +5 % im Q3, +5 % im Q4). Jahresrendite 28 %, Volatilität ca. 25 %. Sharpe Ratio: ≈ 1.

Klassische Rendite-Betrachtung würde Strategie Y bevorzugen. Die Sharpe Ratio bevorzugt Strategie X, und liegt damit aus Risikoperspektive richtig.

## Schwächen der Sharpe Ratio

Trotz ihrer Popularität hat die Sharpe Ratio gravierende Schwächen:

### 1. Sie behandelt Aufwärts- und Abwärtsvolatilität gleich

Volatilität misst Schwankungen in beide Richtungen. Eine Strategie mit positiven Ausreissern (gut!) wird genauso "bestraft" wie eine mit negativen (schlecht!).

Antwort darauf: die **Sortino Ratio**, die nur die Abwärtsvolatilität berücksichtigt.

### 2. Sie geht von Normalverteilung aus

Die Sharpe Ratio funktioniert mathematisch sauber nur, wenn Renditen normalverteilt sind. Reale Märkte sind das nicht, sie haben **Fat Tails**.

Eine Strategie kann jahrelang fantastische Sharpe Ratios liefern und dann in einem einzigen Crash alles verlieren (siehe LTCM 1998, viele Quant-Fonds 2007/08).

### 3. Sie ist zeitabhängig

Die Sharpe Ratio des letzten Jahres kann komplett anders ausfallen als die der letzten 10 Jahre. Wer eine kurze "Goldphase" als repräsentativ darstellt, kann jede Strategie schöngerechnet aussehen lassen.

### 4. Sie reagiert auf den risikofreien Zins

Bei tiefen Zinsen sehen Sharpe Ratios besser aus, bei hohen Zinsen schlechter, auch wenn die Strategie identisch performt. Vergleiche über Zeitepochen müssen das berücksichtigen.

> *"The Sharpe Ratio is the most cited number in finance, and one of the most misused."*
>, David Harding, Winton Capital

## Verwandte Kennzahlen

Mehrere Kennzahlen versuchen, die Schwächen der Sharpe Ratio zu adressieren:

**Sortino Ratio.** Statt Gesamtvolatilität nur Abwärtsvolatilität. Strafe nur für negative Ausreisser.

**Calmar Ratio.** Rendite geteilt durch maximalen [Drawdown](/blog/risikomanagement). Fokus auf das schlimmste historische Szenario.

**Information Ratio.** Wie Sharpe, aber relativ zu einem Benchmark statt zum risikofreien Zins. Standard für Asset Manager.

**Treynor Ratio.** Verwendet Beta statt Volatilität, sinnvoll für diversifizierte Portfolios.

**Omega Ratio.** Komplexer mathematischer Ansatz, der die gesamte Renditeverteilung berücksichtigt.

Welche Kennzahl ideal ist, hängt vom Anwendungsfall ab. Für die Mehrheit der Privatanleger ist die Sharpe Ratio ein vernünftiger erster Anhaltspunkt.

## Anwendung in der Praxis

Sinnvolle Anwendungen der Sharpe Ratio:

**Strategie-Vergleich.** Wenn zwei Strategien getestet werden, ist die mit der höheren Sharpe Ratio meist die bessere, bei vergleichbarem Backtest-Zeitraum.

**Manager-Auswahl.** Bei der Auswahl eines aktiven Fonds-Managers ist die Sharpe Ratio über mehrere Jahre ein wichtiges Kriterium.

**Portfolio-Optimierung.** Die Sharpe Ratio ist die Zielgrösse, die in der Markowitz-Optimierung maximiert wird.

**Positions-Bewertung.** Wenn ein Trade beendet wird, kann ex-post die Sharpe Ratio der Position berechnet werden, als Lerninstrument.

## Eine warnende Beobachtung

Hohe Sharpe Ratios sind oft Anzeichen dafür, dass **etwas nicht stimmt**:

- Eine Strategie mit Sharpe Ratio 5 über ein Jahr: könnte Glück sein
- Über 5 Jahre: vermutlich überfittet oder Risiken nicht erfasst
- Über 10 Jahre: praktisch unmöglich ohne unfaire Vorteile

Bernie Madoffs angebliche Performance hatte eine Sharpe Ratio von etwa 4, ein Wert, der professionelle Investoren misstrauisch hätte machen müssen. Es war ein Schneeballsystem.

> *"If it looks too good to be true, the Sharpe Ratio will confirm it. Unfortunately, most people don't bother to check."*
>, anonymer Risk Manager

## Berechnungs-Tools

Wer seine eigene Sharpe Ratio berechnen möchte:

**Excel.** STABW.S (Stichproben-Standardabweichung) auf die monatlichen oder täglichen Renditen, dann annualisiert (× √12 oder × √252).

**Python.** numpy.std() + pandas. Standardrechnung in 3 Zeilen.

**Broker-Reports.** Interactive Brokers, Saxo und einige andere Broker zeigen die Sharpe Ratio direkt in ihren Performance-Reports an.

**Online-Tools.** Portfolio Visualizer (portfoliovisualizer.com) berechnet Sharpe Ratios für Standard-Indizes und benutzerdefinierte Portfolios.

## Fazit

Die Sharpe Ratio ist eine der nützlichsten Kennzahlen für Anleger, aber kein Allheilmittel. Sie hilft, Renditen relativ zur eingegangenen Volatilität zu beurteilen und Strategien fair zu vergleichen.

Wer sie blind anwendet, wird von ihren Schwächen überrascht. Wer sie als **ein Werkzeug unter mehreren** einsetzt, gewinnt einen wichtigen Baustein für sein Anlageverständnis.

Vor allem: Wer eine ausserordentlich hohe Sharpe Ratio sieht, sollte skeptisch werden. Echte Marktrenditen sind selten so reibungslos, wie statistische Kennzahlen es darstellen.

---

*Dieser Artikel dient ausschliesslich der Information und stellt keine Anlageberatung dar.*
