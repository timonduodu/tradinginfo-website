---
title: "Slippage im Trading: Warum Ihre Order teurer ausgeführt wird, als Sie dachten"
description: "Sie wollen zu 100 kaufen, aber die Order wird zu 100.20 ausgeführt. Das nennt sich Slippage, und kostet Trader jährlich Milliarden. Wie sie entsteht und vermieden wird."
pubDate: 2026-05-25
category: "Grundlagen"
subcategory: "Mechanik"
author: "Redaktion"
readingTime: "9 Min. Lesezeit"
faq:
  - question: "Was ist Slippage im Trading?"
    answer: "Slippage bezeichnet die Differenz zwischen dem erwarteten und dem tatsächlichen Ausführungspreis einer Order. Sie kann in beide Richtungen auftreten, in der Praxis dominiert aber die negative Slippage, bei der die Order teurer ausgeführt wird als erwartet."
  - question: "Warum entsteht Slippage?"
    answer: "Slippage entsteht durch zeitliche Verzögerung zwischen Klick und Ausführung, durch Liquiditätsmangel, wenn die Order durch das Orderbuch läuft, sowie durch volatile Phasen wie Marktöffnungen, Wirtschaftsdaten oder Gap-Eröffnungen."
  - question: "Wie kann man Slippage reduzieren?"
    answer: "Slippage lässt sich begrenzen durch Limit-Orders statt Market-Orders, die Bevorzugung liquider Werte, das Vermeiden volatiler Phasen, das Aufteilen grosser Orders (Order-Splitting) sowie durch Slippage-Schutz-Einstellungen mancher Broker."
  - question: "Welche Rolle spielt Slippage bei Stop-Loss-Orders?"
    answer: "Sobald der Stop-Preis erreicht wird, wird die Stop-Order zur Market-Order und trägt alle Slippage-Risiken. Bei Gap-Eröffnungen kann ein Stop-Loss deutlich schlechter ausgeführt werden als geplant. Guaranteed Stop-Loss Orders bieten gegen Aufpreis eine garantierte Ausführung am Stop-Preis."
---

Sie sehen auf Ihrem Bildschirm einen Kurs von 100.00. Sie klicken "kaufen". Die Order wird ausgeführt, zu 100.20. Was ist passiert?

Sie haben gerade **Slippage** erlebt. Das Phänomen, bei dem der tatsächliche Ausführungspreis vom erwarteten Preis abweicht, gehört zu den unterschätzten Kostenfaktoren im modernen Trading. Über Tausende Trades summiert sich Slippage zu erheblichen Beträgen.

## Was Slippage genau ist

Slippage bezeichnet die Differenz zwischen dem **erwarteten Ausführungspreis** und dem **tatsächlichen Ausführungspreis** einer Order. Sie kann in beide Richtungen auftreten:

**Negative Slippage:** Die Order wird teurer ausgeführt als erwartet. Bei einem Kauf zu höherem Preis, bei einem Verkauf zu niedrigerem Preis.

**Positive Slippage:** Die Order wird günstiger ausgeführt als erwartet. Selten, aber möglich, vor allem bei Limit-Orders.

In der Praxis dominiert die negative Slippage. Sie wirkt wie eine versteckte Kostenposition, die in den Trading-Statistiken vieler Anleger nicht erfasst wird.

> *"Slippage is the silent killer of trading systems. It looks profitable in the backtest, until you actually trade it."*
>, Trader-Sprichwort

## Warum Slippage entsteht

Slippage hat verschiedene Ursachen, die oft kombiniert auftreten:

### 1. Zeitliche Verzögerung

Zwischen dem Moment, in dem Sie auf "kaufen" klicken, und dem Moment, in dem die Order an der Börse eintrifft, vergeht Zeit. Selbst bei modernen Verbindungen sind das mindestens 100 bis 500 Millisekunden. In dieser Zeit kann sich der Preis verändern.

Bei volatilen Werten oder in schnellen Marktphasen reichen Millisekunden für nennenswerte Bewegungen.

### 2. Liquiditätsmangel

Wenn Sie 10'000 Aktien kaufen wollen, am best ask aber nur 1'000 Stück verfügbar sind, läuft Ihre Order durch das [Orderbuch](/blog/orderbuch-lesen). Die ersten 1'000 Aktien werden zum besten Preis ausgeführt, die nächsten zum zweitbesten, und so weiter.

Der durchschnittliche Ausführungspreis liegt damit über dem ursprünglichen best ask, das ist klassische Slippage durch unzureichende Markttiefe.

### 3. Marktöffnungen und Wirtschaftsdaten

Direkt nach der Marktöffnung oder bei Veröffentlichung wichtiger Wirtschaftsdaten (US-Arbeitsmarktbericht, Fed-Zinsentscheidung, EZB-Sitzung) springt der Markt oft sprunghaft. Wer in diesen Sekunden eine Market-Order setzt, kann massive Slippage erleben.

### 4. Gap-Eröffnungen

Wenn eine Aktie über Nacht oder über das Wochenende eine wichtige Nachricht bekommt, kann sie am nächsten Handelstag mit einer Lücke (Gap) eröffnen. Eine Aktie, die Freitag bei 50 schloss und Montag bei 45 eröffnet, lässt jeden Stop-Loss zwischen 49 und 46 leerlaufen, die Ausführung erfolgt erst bei 45 oder darunter.

## Slippage in Zahlen

Empirische Studien zeigen typische Slippage-Werte:

| Markt | Typische Slippage |
|---|---|
| Grosse US-Aktien (Apple, Microsoft) | 0.01 bis 0.05 % |
| Schweizer Blue Chips | 0.02 bis 0.10 % |
| Kleine Nebenwerte | 0.2 bis 2 % |
| Hauptwährungspaare | 0.2 bis 1 Pip |
| Exotische Forex-Paare | 5 bis 50 Pips |
| Bitcoin (liquide Börsen) | 0.05 bis 0.5 % |
| Optionen | 5 bis 20 % des Spreads |

In Stressphasen können sich diese Werte vervielfachen. Während des CHF-Schocks im Januar 2015 erlebten Trader Slippage von mehreren Hundert Pips auf EUR/CHF.

## Ein konkretes Beispiel

Ein Daytrader handelt 500 Mal pro Jahr Schweizer Aktien. Durchschnittliches Trade-Volumen: 10'000 CHF. Durchschnittliche Slippage: 0.05 % pro Trade.

Jährliche Slippage-Kosten:
- 500 Trades × 10'000 CHF × 0.05 % × 2 (Round-Trip) = **5'000 CHF**

Diese 5'000 CHF verschwinden lautlos aus dem Konto. Sie tauchen nicht in der Spread-Aufstellung auf, nicht in den Kommissions-Abrechnungen, nicht im Broker-Statement. Sie ergeben sich aus der Differenz zwischen dem, was der Trader erwartete, und dem, was tatsächlich passierte.

## Wie sich Slippage reduzieren lässt

Slippage ist nicht vollständig vermeidbar, aber begrenzbar. Folgende Massnahmen helfen:

### 1. Limit-Orders statt Market-Orders

Eine [Limit-Order](/blog/limit-order-erklaert) garantiert den maximalen Kaufpreis oder minimalen Verkaufspreis. Wird der Preis nicht erreicht, erfolgt keine Ausführung, keine Slippage möglich.

Nachteil: Die Order wird möglicherweise nicht ausgeführt. Wer eine Aktie zwingend braucht, muss mit Market-Order arbeiten.

### 2. Liquide Werte bevorzugen

In Werten mit hohem Handelsvolumen ist die Markttiefe gross genug, dass selbst grosse Orders ohne nennenswerte Slippage durchgehen.

### 3. Volatile Phasen vermeiden

Wer um 16:00 Uhr eine Apple-Aktie kauft (US-Marktöffnung), zahlt typisch höhere Slippage als um 18:00 Uhr im ruhigen Mittagshandel. Wer vor dem US-Arbeitsmarktbericht eine Forex-Order setzt, riskiert dramatische Slippage in den ersten Sekunden nach der Veröffentlichung.

### 4. Order-Splitting

Bei grossen Orders kann Aufteilen in mehrere kleinere Tranchen die Slippage reduzieren. Statt 50'000 Aktien auf einmal lieber zehn Orders à 5'000 über mehrere Stunden.

Professionelle Trading-Plattformen bieten dafür **TWAP** (Time-Weighted Average Price) und **VWAP** (Volume-Weighted Average Price) Algorithmen.

### 5. Slippage-Schutz nutzen

Manche Broker bieten "Slippage Control" oder "Maximum Slippage" Einstellungen an. Dabei wird die Order nur ausgeführt, wenn die Abweichung vom erwarteten Preis unter einem definierten Limit liegt.

> *"The best execution is the execution you don't think about. The worst is the one you didn't see coming."*
>, anonymer Institutional Trader

## Slippage und Stop-Loss

Ein besonders heikles Thema ist Slippage bei [Stop-Loss-Orders](/blog/stop-loss-richtig-setzen). Sobald der Stop-Preis erreicht wird, wird die Stop-Order automatisch zur Market-Order, mit allen Slippage-Risiken.

Beispiele aus der Praxis:

**Gap-Eröffnung.** Eine Aktie schliesst Freitag bei 50, Montag eröffnet sie bei 42. Ein Stop-Loss bei 48 wird zu 42 ausgeführt, sechs Punkte schlechter als geplant.

**Flash Crash.** Im Mai 2010 fiel der Dow Jones innerhalb von Minuten um fast 1'000 Punkte und erholte sich kurz darauf. Stop-Losses, die in diesem Zeitfenster auslösten, wurden teilweise zu absurden Preisen ausgeführt.

**Wirtschaftsdaten.** Ein Stop-Loss auf EUR/USD bei 1.0900 kann nach einem überraschend hohen US-Inflationsbericht zu 1.0855 ausgeführt werden.

Schutz dagegen bieten **Guaranteed Stop-Loss Orders** (von manchen Brokern gegen Aufpreis angeboten), die eine garantierte Ausführung am Stop-Preis bieten, unabhängig von Marktbedingungen.

## Slippage und Trading-Strategie

Bei der Entwicklung von Trading-Strategien wird Slippage oft vergessen. Eine Strategie, die im Backtest 15 % Jahresrendite zeigt, kann nach realistischer Slippage-Berücksichtigung nur noch 8 % erwirtschaften.

Faustregel: Strategien mit hoher Handelsfrequenz und kleinen Gewinnzielen pro Trade sind am stärksten von Slippage betroffen. Langfristige [Buy-and-Hold-Strategien](/blog/buy-and-hold-vs-trading) sind nahezu immun.

Vor jedem Live-Einsatz einer Strategie sollte die geschätzte Slippage von der theoretischen Rendite abgezogen werden, und im Zweifel grosszügig kalkuliert werden.

## Fazit

Slippage ist eine reale, oft unterschätzte Kostenposition im Trading. Sie ist nicht vollständig vermeidbar, aber durch bewusste Wahl von Order-Arten, Handelszeiten und Märkten erheblich reduzierbar.

Wer professionell handelt, kalkuliert Slippage mit ein und berücksichtigt sie bei jeder Strategie-Bewertung. Wer naiv handelt, verliert über Tausende Trades Geld, ohne zu wissen warum.

Der bewusste Umgang mit Slippage ist eine der ersten Disziplinen, die jeder ernsthafte Trader nach den Grundlagen lernen muss.

---

*Dieser Artikel dient ausschliesslich der Information und stellt keine Anlageberatung dar.*
