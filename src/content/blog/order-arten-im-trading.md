---
title: "Order-Arten im Trading: Market, Limit, Stop und ihre Tücken"
description: "Market-Order, Limit-Order, Stop-Loss, Trailing-Stop, die wichtigsten Order-Arten im Überblick. Welche wann eingesetzt wird und welche versteckten Risiken existieren."
pubDate: 2026-05-04
category: "Grundlagen"
subcategory: "Mechanik"
author: "Redaktion"
readingTime: "9 Min. Lesezeit"
faq:
  - question: "Was ist der Unterschied zwischen Market-Order und Limit-Order?"
    answer: "Eine Market-Order wird sofort zum aktuell verfügbaren Marktpreis ausgeführt und bietet maximale Ausführungssicherheit, aber keine Preiskontrolle. Eine Limit-Order garantiert den gewünschten Preis, aber nicht die Ausführung."
  - question: "Was ist ein Trailing-Stop?"
    answer: "Ein Trailing-Stop ist ein automatisch nachziehender Stop-Loss, der statt eines fixen Preises einen Abstand in Pips oder Prozent definiert. Bewegt sich der Markt in Trade-Richtung, zieht der Stop nach, bewegt er sich dagegen, bleibt er stehen."
  - question: "Was bedeutet OCO-Order?"
    answer: "Eine OCO-Order (One Cancels the Other) kombiniert zwei Orders, von denen die Ausführung der einen automatisch die andere storniert. Typisch ist die Kombination von Take-Profit und Stop-Loss auf eine offene Position."
  - question: "Warum kann ein Stop-Loss schlechter ausgeführt werden als geplant?"
    answer: "Sobald der Stop-Preis erreicht wird, löst ein Stop-Loss eine Market-Order aus. In schnellen Märkten kann die Ausführung weit unter dem Stop-Preis erfolgen, wie beim CHF-Schock 2015, als Stops bei 1.19 teils zu 0.90 ausgeführt wurden."
---

Eine Order ist die Anweisung an den Broker, einen Kauf oder Verkauf auszuführen. Was wie eine triviale Funktion klingt, ist in Wahrheit ein komplexes Feld mit erheblichen Konsequenzen für Ausführungspreis, Slippage und Gesamtperformance. Wer die wichtigsten Order-Arten nicht beherrscht, verschenkt regelmässig Geld an den Markt.

## Market-Order: Die einfachste Form

Eine Market-Order weist den Broker an, sofort zum aktuell verfügbaren Marktpreis auszuführen, beim Kauf zum Ask-Preis, beim Verkauf zum Bid-Preis. Die Vorteile: Maximale Ausführungssicherheit. Die Nachteile: Keine Kontrolle über den exakten Ausführungspreis.

In ruhigen, liquiden Märkten ist eine Market-Order unproblematisch. In schnellen Märkten, etwa während Wirtschaftsdaten oder Notenbank-Entscheidungen, kann die Slippage erheblich sein. Eine Market-Order auf EUR/USD kurz vor einem Fed-Zinsentscheid kann statt mit 1.0850 zu 1.0865 ausgeführt werden, ein Verlust von 15 Pips, bevor der Trade überhaupt beginnt.

> *"The most expensive four words in trading are 'I'll just use market.'"*
>, anonymer Floor-Trader

## Limit-Order: Preiskontrolle vor Ausführung

Eine Limit-Order setzt einen maximalen Kauf- bzw. minimalen Verkaufspreis. Der Broker führt nur aus, wenn der Markt diesen Preis erreicht. Die Limit-Order garantiert den gewünschten Preis, aber nicht die Ausführung.

Beispiel: EUR/USD steht bei 1.0850. Ein Trader setzt eine Buy-Limit-Order bei 1.0830, er kauft also nur, wenn der Kurs auf 1.0830 fällt. Steigt der Kurs stattdessen, wird die Order nie ausgeführt. Sinkt er auf 1.0830, wird sie ausgeführt, möglicherweise sogar zu einem besseren Preis bei volatilen Bewegungen.

Limit-Orders sind das Werkzeug disziplinierter Trader. Sie zwingen zur Vorab-Planung und verhindern impulsive Markteintritte.

## Stop-Loss: Die wichtigste Order überhaupt

Ein Stop-Loss ist eine Order zum Verlustbegrenzen. Erreicht der Markt einen vordefinierten Preis gegen die Position, wird automatisch geschlossen. Beispiel: Long EUR/USD bei 1.0850, Stop-Loss bei 1.0800, fällt der Kurs auf 1.0800, schliesst die Position automatisch mit 50 Pips Verlust.

Die mechanische Funktion eines Stop-Loss ist wichtig zu verstehen: Sobald der Stop-Preis erreicht wird, wird automatisch eine Market-Order ausgelöst. Bei normalen Marktbedingungen erfolgt die Ausführung nahe am Stop-Preis. In schnellen Märkten, etwa bei einer Marktöffnung nach dem Wochenende oder nach unerwarteten Ereignissen, kann der Stop weit unter dem ursprünglichen Niveau ausgeführt werden.

> *"The market does not know your stop-loss. But your broker does."*
>, Trader-Wahrheit

Ein klassisches Beispiel ist der **CHF-Schock vom 15. Januar 2015**: Die Schweizerische Nationalbank gab überraschend die EUR/CHF-Untergrenze auf, der Kurs fiel innerhalb von Minuten von 1.20 auf 0.85. Stop-Loss-Orders, die auf 1.19 lagen, wurden teilweise zu 0.90 oder 0.95 ausgeführt, mit Verlusten, die zehnfach grösser waren als ursprünglich kalkuliert.

## Guaranteed Stop-Loss

Manche Broker bieten gegen Aufpreis garantierte Stop-Loss-Orders an. Diese werden unabhängig von Marktbedingungen exakt am angegebenen Preis ausgeführt. Der Aufpreis liegt typischerweise bei 0.5 bis 2 Pips zusätzlichem Spread.

Für hoch volatile Instrumente, etwa Krypto-Perpetuals, exotische Währungspaare oder einzelne Aktien, können garantierte Stops sinnvoll sein. Für Hauptwährungspaare in normalen Marktbedingungen lohnen sie den Aufpreis meist nicht.

## Trailing-Stop

Ein Trailing-Stop ist ein automatisch nachziehender Stop-Loss. Statt eines fixen Preises wird ein **Abstand** in Pips oder Prozent definiert. Bewegt sich der Markt in Trade-Richtung, zieht der Stop nach. Bewegt sich der Markt gegen den Trade, bleibt der Stop stehen.

Beispiel: Long EUR/USD bei 1.0850 mit Trailing-Stop von 30 Pips. Initial liegt der Stop bei 1.0820. Steigt der Kurs auf 1.0900, zieht der Stop automatisch auf 1.0870. Fällt der Kurs dann zurück, wird bei 1.0870 geschlossen, der Trader sichert 20 Pips Gewinn.

Trailing-Stops sind elegant in der Theorie, in der Praxis aber problematisch: Normale Marktschwankungen ("Noise") führen häufig zu vorzeitigen Ausstösen, bevor der eigentliche Trend zu Ende ist. Die Wahl der Trailing-Distanz ist eine Wissenschaft für sich.

## Stop-Limit: Die hybride Form

Eine Stop-Limit-Order kombiniert die zwei Konzepte. Erreicht der Markt den Stop-Preis, wird statt einer Market-Order eine Limit-Order ausgelöst. Vorteil: Schutz vor extremer Slippage. Nachteil: In stark bewegten Märkten wird die Limit-Order möglicherweise nie ausgeführt, was zu unbegrenzten Verlusten führen kann.

Ein Stop-Loss auf EUR/USD bei 1.0800 mit Limit von 1.0790 würde nur ausgeführt, wenn der Markt bei 1.0790 oder besser handelt. Springt der Kurs direkt von 1.0810 auf 1.0780, bleibt die Position offen, möglicherweise zu noch viel grösseren Verlusten.

## OCO: One Cancels the Other

Eine OCO-Order kombiniert zwei Orders, von denen die Ausführung der einen automatisch die andere storniert. Typischer Anwendungsfall: Ein Trader setzt sowohl Take-Profit als auch Stop-Loss auf eine offene Position. Wird der Take-Profit ausgelöst, verschwindet automatisch der Stop-Loss, und umgekehrt.

OCO-Orders sind Standard bei jedem ernsthaften Trading-System und sollten konsequent genutzt werden.

## Time-in-Force: Wie lange gilt eine Order?

Jede pending Order (Limit, Stop) hat eine Gültigkeitsdauer. Die wichtigsten Optionen:

- **GTC (Good Till Cancelled):** Die Order bleibt aktiv, bis sie ausgeführt oder manuell storniert wird.
- **Day Order:** Die Order verfällt am Ende des Handelstages.
- **GTD (Good Till Date):** Die Order verfällt an einem definierten Datum.
- **IOC (Immediate or Cancel):** Sofortige Ausführung des verfügbaren Teils, der Rest wird storniert.
- **FOK (Fill or Kill):** Vollständige Ausführung oder gar nichts.

> *"The greatest weapon of the disciplined trader is the pending order."*
>, **Mark Douglas**, Autor von *Trading in the Zone*

## Praktische Empfehlungen

Aus der professionellen Trading-Praxis lassen sich folgende Prinzipien ableiten:

1. **Stop-Loss vor Markteintritt definieren.** Wer keinen Stop hat, hat keinen Plan.
2. **Limit-Orders bevorzugen.** Sie zwingen zur Vorab-Analyse und reduzieren impulsives Handeln.
3. **Take-Profit definieren.** Ein Trade ohne Ausstiegsplan endet selten gut.
4. **OCO-Orders nutzen.** Stop und Limit gemeinsam, nicht einzeln.
5. **Market-Orders nur in liquiden Märkten.** In Phasen niedriger Liquidität droht erhebliche Slippage.
6. **Vor wichtigen Ereignissen Stops überprüfen.** Slippage-Risiko vor Wirtschaftsdaten ist erheblich.

## Fazit

Order-Arten sind keine technische Nebensächlichkeit, sondern strategische Werkzeuge. Wer die Unterschiede nicht versteht, verliert Geld durch ungünstige Ausführungen, falsch platzierte Stops oder verpasste Einstiege. Die Beherrschung der Order-Mechanik ist eine der ersten Disziplinen, die jeder Trader nach den theoretischen Grundlagen vertiefen sollte.

---

*Dieser Artikel dient ausschliesslich der Information und stellt keine Anlageberatung dar.*
