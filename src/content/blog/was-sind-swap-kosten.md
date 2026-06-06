---
title: "Swap-Kosten verstehen: Was Trader über Übernacht-Gebühren wissen sollten"
description: "Wer Positionen über Nacht hält, zahlt Swap. Wie hoch diese Kosten tatsächlich sind, woraus sie sich zusammensetzen und welche Strategien sie reduzieren können."
pubDate: 2026-05-16
category: "Grundlagen"
subcategory: "Kosten"
author: "Redaktion"
readingTime: "8 Min. Lesezeit"
featured: true
faq:
  - question: "Was sind Swap-Kosten?"
    answer: "Swap-Kosten, auch Overnight-Fees genannt, sind Zinsen für das geliehene Kapital, das beim Handel auf Margin eingesetzt wird. Mathematisch ist ein Swap die Zinsdifferenz zwischen den beiden Vermögenswerten oder Währungen einer Position; wer Positionen über Nacht hält, zahlt Swap."
  - question: "Warum verdienen Broker am Swap mit?"
    answer: "Broker bauen einen Aufschlag (Markup) in beide Richtungen ein, sodass der berechnete Swap selten dem theoretischen Wert entspricht. Bei einigen Anbietern beträgt der Markup über 50 Prozent; ECN- und STP-Broker wie Interactive Brokers oder Saxo Bank operieren näher an den Interbank-Zinssätzen."
  - question: "Wie lassen sich Swap-Kosten reduzieren?"
    answer: "Drei Strategien helfen: Intraday-Trading, bei dem alle Positionen vor dem Roll-Zeitpunkt (meist 22:00 bis 23:00 Uhr Schweizer Zeit) geschlossen werden, die Wahl eines transparenten ECN- oder STP-Brokers sowie Carry-Trades mit positivem Swap, die jedoch hochriskant sind."
  - question: "Was ist eine Funding Rate bei Krypto-Perpetuals?"
    answer: "Die Funding Rate ist das Krypto-Pendant zum Swap, unterscheidet sich aber: Die Zahlung erfolgt typischerweise alle acht Stunden, fliesst zwischen Long- und Short-Tradern statt an den Broker, und ihre Höhe wird durch die Marktstimmung bestimmt. In Bullenmärkten kann sie annualisiert über 100 Prozent erreichen."
---

Der [Handel auf Margin](/blog/hebel-und-margin) bedeutet, dass ein Trader effektiv Geld leiht, um eine grössere Position einzugehen, als sein Kapital erlauben würde. Für dieses geliehene Kapital fallen Zinsen an, die sogenannten Swap-Kosten oder Overnight-Fees. Wer die Mechanik nicht kennt, verliert über die Zeit erhebliche Summen, ohne einen einzigen schlechten Trade gemacht zu haben.

> *"Risk comes from not knowing what you're doing."*
>, **Warren Buffett**

## Die Funktionsweise

Ein Swap ist mathematisch betrachtet die Zinsdifferenz zwischen den beiden Vermögenswerten oder Währungen einer Position. Bei einer Forex-Position kauft der Trader effektiv eine Währung und verkauft eine andere. Für die gekaufte Währung erhält er den jeweiligen Marktzins, für die verkaufte zahlt er ihn.

Ein typisches Beispiel: Eine Long-Position auf EUR/USD im Gegenwert von 10'000 Euro.

- Die EUR-Position erhält einen Zinssatz von beispielsweise 3.5 % p.a.
- Die USD-Verbindlichkeit kostet 4.75 % p.a.
- Die Differenz beträgt −1.25 % pro Jahr

Auf 10'000 Euro ergibt das **125 Euro Kosten pro Jahr** oder rund **0.34 Euro pro Tag**. Auf den ersten Blick eine kleine Summe. Bei einer gehebelten Position mit 1:30 Leverage und längerer Haltedauer entwickeln sich diese Beträge jedoch zu signifikanten Belastungen der Margin.

## Der Markup der Broker

Was viele Marktteilnehmer übersehen: Der Swap, den ein Retail-Broker seinen Kunden berechnet, entspricht selten dem theoretischen Wert. Broker bauen einen Aufschlag ein, und zwar in beide Richtungen.

| Position | Theoretischer Swap | Bei typischem CFD-Broker | Differenz |
|---|---|---|---|
| EUR/USD Long | −0.34 € / Tag | −0.48 € / Tag | +41 % Kosten |
| EUR/USD Short | +0.34 € / Tag | +0.12 € / Tag | −65 % Erlös |

Diese Spreizung bedeutet: Unabhängig von der Trade-Richtung verdient der Broker am Swap mit. Bei einigen Anbietern beträgt der Markup über 50 % des theoretischen Werts. Bei ECN- und STP-Brokern wie Interactive Brokers oder Saxo Bank fällt dieser Aufschlag deutlich geringer aus, da diese Broker enger an den Interbank-Zinssätzen operieren.

> *"The individual investor should act consistently as an investor and not as a speculator. This means that he should be able to justify every purchase he makes and each price he pays by impersonal, objective reasoning."*
>, **Benjamin Graham**

## Drei Strategien zur Reduktion von Swap-Kosten

### 1. Intraday-Trading

Die einfachste Methode, Swap-Kosten vollständig zu vermeiden, besteht darin, alle Positionen vor dem täglichen Roll-Zeitpunkt zu schliessen. Dieser liegt bei den meisten Brokern zwischen 22:00 und 23:00 Uhr Schweizer Zeit. Wer ausschliesslich Intraday handelt, zahlt keine Übernacht-Gebühren.

### 2. Wahl eines transparenten Brokers

ECN- und STP-Broker mit direkter Marktanbindung berechnen Swaps fairer als klassische Market-Maker-CFD-Anbieter. Vergleichsportale wie BrokerChooser dokumentieren Differenzen von 30 bis 60 % bei identischen Positionen zwischen verschiedenen Anbietern.

### 3. Carry-Trades mit positivem Swap

Bei bestimmten Währungspaaren ist der Swap positiv, der Trader erhält Geld für das Halten der Position. Klassisches Beispiel waren über Jahre [Long-Positionen in türkischer Lira](/blog/carry-trade-grundlagen) oder südafrikanischem Rand gegen den japanischen Yen. Diese Strategie ist jedoch hochriskant: Sobald die Hochzinswährung abwertet, fressen Kursverluste den Carry innerhalb von Stunden auf.

> *"Markets can remain irrational longer than you can remain solvent."*
>, zugeschrieben an **John Maynard Keynes**

## Funding-Rates bei Krypto-Perpetuals

Im Krypto-Bereich existiert ein vergleichbares Konzept unter dem Namen Funding Rate. Die Mechanik unterscheidet sich jedoch in mehreren Punkten:

- Die Zahlung erfolgt typischerweise alle acht Stunden, nicht täglich
- Sie fliesst zwischen Long- und Short-Tradern, nicht primär an den Broker
- Die Höhe wird durch die Marktstimmung bestimmt, nicht durch Zinsdifferenzen

In ausgeprägten Bullenmärkten können Long-Funding-Kosten 0.1 % alle acht Stunden erreichen, annualisiert über 100 %. Bitcoin-Halter, die ihre Position auf gehebelten Perpetual-Märkten statt im Spot-Markt aufbauen, verlieren in solchen Phasen erhebliches Kapital allein durch Funding-Zahlungen.

## Die Bedeutung im Gesamtkontext

Eine Analyse der durchschnittlichen Trading-Kosten zeigt: Bei gehebelten Positionen mit Haltedauern über mehrere Wochen machen Swap-Kosten häufig **30 bis 60 % aller Handelskosten** aus, mehr als [Spreads](/blog/spreads-erklaert) und Kommissionen zusammen.

> *"In investing, what is comfortable is rarely profitable."*
>, **Robert Arnott**, Gründer von Research Affiliates

Vor jeder mehrtägigen Position sollte die zentrale Frage daher lauten: Rechtfertigt die erwartete Kursbewegung die Swap-Kosten über die geplante Haltedauer? Wenn nicht, ist der Trade nicht profitabel, unabhängig davon, ob die Marktrichtung korrekt prognostiziert wird.

## Praktische Schritte für Trader

1. Den eigenen Broker auf der Swap-Übersicht prüfen, meist unter "Kontraktspezifikationen" oder "Trading-Konditionen"
2. Theoretische Swap-Werte anhand der aktuellen Notenbank-Zinssätze (SNB-Leitzins, EZB-Hauptrefinanzierungssatz, Fed Funds Rate) selbst berechnen
3. Die Differenz als versteckte Kostenposition im Trading-Plan berücksichtigen
4. Bei Positionen über einer Woche: Alternative Instrumente prüfen, Futures, Optionen oder direkter Spot-Handel kommen oft günstiger

Wer die wahre Höhe seiner Swap-Kosten kennt, trifft fundiertere Entscheidungen über Haltedauer und Positionsgrösse, und vermeidet die häufigste Form von schleichendem Kapitalverlust.

---

*Dieser Artikel dient ausschliesslich der Information und stellt keine Anlageberatung dar. Der Handel mit Hebelprodukten ist mit erheblichen Risiken verbunden und kann zum Totalverlust führen.*
