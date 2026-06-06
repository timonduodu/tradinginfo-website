---
title: "Optionen verstehen: Calls, Puts und die Greeks im Überblick"
description: "Optionen sind eines der mächtigsten Werkzeuge der Finanzmärkte. Eine fundierte Einführung in Calls, Puts, Strike-Preise, Verfallstermine und die wichtigsten Greeks."
pubDate: 2026-04-16
category: "Grundlagen"
subcategory: "Derivate"
author: "Redaktion"
readingTime: "12 Min. Lesezeit"
faq:
  - question: "Was ist der Unterschied zwischen Call und Put?"
    answer: "Eine Call-Option gibt das Recht zum Kauf des Basiswerts, eine Put-Option das Recht zum Verkauf. Für dieses Recht zahlt der Käufer eine Optionsprämie an den Verkäufer."
  - question: "Was sind die Greeks bei Optionen?"
    answer: "Die Greeks beschreiben die Sensitivitäten des Optionspreises gegenüber verschiedenen Variablen. Delta misst die Reaktion auf den Basiswert, Gamma die Veränderung von Delta, Theta den Zeitwertverfall, Vega die Sensitivität gegenüber der impliziten Volatilität und Rho gegenüber Zinsen."
  - question: "Was bedeutet Theta bei Optionen?"
    answer: "Theta misst den Zeitwertverfall, also wie viel Wert eine Option pro Tag verliert. Für Käufer ist Theta negativ, für Stillhalter positiv, und kurz vor Verfall beschleunigt sich der Verfall dramatisch."
  - question: "Wie viel kann ich beim Kauf einer Option maximal verlieren?"
    answer: "Der Käufer einer Option kann maximal die gezahlte Prämie verlieren, selbst wenn der Basiswert um 99 Prozent fällt. Der Verkäufer hingegen trägt ein theoretisch unbegrenztes Verlustrisiko bei Calls."
---

Optionen sind die vielseitigsten Instrumente der Finanzmärkte. Mit ihnen lassen sich konservative Income-Strategien, gehebelte Spekulationen und massgeschneiderte Absicherungen umsetzen. Gleichzeitig sind sie das Instrument, bei dem Anleger am häufigsten ohne ausreichendes Verständnis Geld verlieren. Dieser Artikel führt in die Grundlagen ein.

## Was eine Option ist

Eine Option ist ein **Vertrag, der dem Käufer das Recht, nicht die Pflicht, gibt**, einen Basiswert (z.B. eine Aktie) zu einem festgelegten Preis (Strike) zu einem definierten Zeitpunkt (Verfall) zu kaufen oder zu verkaufen.

Zwei Grundtypen:

**Call-Option:** Das Recht zum **Kauf** des Basiswerts.
**Put-Option:** Das Recht zum **Verkauf** des Basiswerts.

Für dieses Recht zahlt der Käufer eine **Optionsprämie** an den Verkäufer (Stillhalter, Writer).

> *"Options are not derivatives of underlying. They are derivatives of probability."*
>, **Nassim Nicholas Taleb**

## Konkretes Beispiel: Call auf Apple

Annahmen:
- Apple-Aktie aktuell: 180 USD
- Call-Option mit Strike 200 USD, Verfall in 3 Monaten
- Optionsprämie: 5 USD pro Aktie

Der Käufer der Call-Option zahlt 5 USD pro Aktie (insgesamt 500 USD für einen Standard-Kontrakt über 100 Aktien). Im Gegenzug erhält er das Recht, in den nächsten drei Monaten Apple zu 200 USD zu kaufen, unabhängig davon, wo der Markt steht.

Drei Szenarien zum Verfall:

**Apple bei 250 USD:** Der Käufer übt aus. Er kauft Apple zu 200 USD und kann sofort zu 250 USD verkaufen. Gewinn: 50 - 5 (Prämie) = **45 USD pro Aktie** = **4'500 USD pro Kontrakt**.

**Apple bei 220 USD:** Der Käufer übt aus. Gewinn pro Aktie: 20 - 5 = **15 USD** = **1'500 USD pro Kontrakt**.

**Apple bei 180 USD oder niedriger:** Der Käufer übt nicht aus. Verlust: die gesamte Prämie = **500 USD pro Kontrakt**.

## Asymmetrisches Risiko-Profil

Diese Mechanik schafft ein einzigartiges Risiko-Profil: **begrenzte Verluste, theoretisch unbegrenzte Gewinne**. Der Käufer einer Option kann maximal die gezahlte Prämie verlieren, selbst wenn der Basiswert um 99 % fällt.

Für den **Verkäufer (Stillhalter)** ist die Situation umgekehrt:

- Maximaler Gewinn: die erhaltene Prämie
- Maximaler Verlust: theoretisch unbegrenzt (bei Calls) oder bis zum Strike (bei Puts)

Diese Asymmetrie macht Optionen interessant für komplexe Strategien, und gefährlich für naive Stillhalter, die das Risiko unterschätzen.

## In-the-Money, At-the-Money, Out-of-the-Money

Optionen werden nach ihrem Verhältnis zum aktuellen Marktpreis kategorisiert:

| Status | Call | Put |
|---|---|---|
| In-the-Money (ITM) | Strike < Marktpreis | Strike > Marktpreis |
| At-the-Money (ATM) | Strike ≈ Marktpreis | Strike ≈ Marktpreis |
| Out-of-the-Money (OTM) | Strike > Marktpreis | Strike < Marktpreis |

ITM-Optionen haben **inneren Wert** (intrinsic value), der Betrag, um den sie bereits "im Geld" sind.

ATM- und OTM-Optionen haben nur **Zeitwert** (extrinsic value), die Wahrscheinlichkeitsbewertung, dass sie bis zum Verfall ITM werden.

## Die Greeks: Sensitivitäten verstehen

Der Wert einer Option hängt von mehreren Variablen ab. Die Sensitivitäten gegenüber diesen Variablen werden als "Greeks" bezeichnet.

### Delta (Δ)

Delta misst, wie stark sich der Optionspreis bei einer Bewegung des Basiswerts um 1 USD verändert.

- Call-Delta: zwischen 0 und +1
- Put-Delta: zwischen 0 und -1

Eine ATM-Option hat Delta ≈ 0.50. Eine tief ITM-Option Delta ≈ 1.0 (verhält sich wie der Basiswert). Eine tief OTM-Option Delta ≈ 0.05.

Delta kann auch als Näherung der **Wahrscheinlichkeit interpretiert werden, dass die Option ITM verfällt**: Eine Option mit Delta 0.30 hat eine etwa 30-prozentige Chance, im Geld zu enden.

### Gamma (Γ)

Gamma misst, wie schnell sich Delta verändert. Hohes Gamma bedeutet, dass Delta auf Marktbewegungen stark reagiert.

ATM-Optionen kurz vor Verfall haben das höchste Gamma, kleine Marktbewegungen führen zu grossen Delta-Veränderungen. Tief ITM oder tief OTM Optionen haben niedriges Gamma.

### Theta (Θ)

Theta misst den **Zeitwertverfall**, wie viel Wert die Option pro Tag verliert, wenn alles andere gleich bleibt.

Theta ist für Käufer immer negativ, die Option verliert Wert über die Zeit. Für Stillhalter ist Theta positiv, die Position gewinnt durch reine Zeitabnutzung.

Theta beschleunigt sich kurz vor Verfall dramatisch. Eine ATM-Option in der letzten Verfallswoche kann täglich 10 bis 20 % ihres Werts verlieren, nur durch Zeitablauf.

> *"Options are decaying batteries. The question is whether you're buying them or selling them."*
>, **Karen Bruton**, ehemals Optionen-Traderin

### Vega (ν)

Vega misst die Sensitivität gegenüber der **impliziten Volatilität**. Eine Option mit Vega 0.10 gewinnt 0.10 USD an Wert pro 1 Prozentpunkt Anstieg der impliziten Volatilität.

Hohe implizite Volatilität verteuert Optionen, niedrige Volatilität verbilligt sie. Wer eine Option kauft, ist long Volatilität, wer schreibt, ist short.

### Rho (ρ)

Rho misst die Sensitivität gegenüber Zinsen. Bei den meisten kurzfristigen Optionen ist Rho vernachlässigbar, bei langlaufenden LEAPS-Optionen kann es relevant werden.

## Implizite Volatilität

Implizite Volatilität (IV) ist die wichtigste Variable, die Optionspreise bestimmt. Sie repräsentiert die **vom Markt erwartete zukünftige Volatilität**.

Hohe IV macht Optionen teuer, niedrige IV macht sie günstig. Vor wichtigen Events (Earnings, Notenbank-Entscheidungen) steigt IV typischerweise. Nach dem Event fällt sie rapide, der berüchtigte "IV Crush", der viele unerfahrene Optionskäufer überrascht.

Praktische Konsequenz: Wer Optionen kauft, sollte sicherstellen, dass die IV nicht ausserordentlich hoch ist. Wer schreibt, profitiert von hoher IV.

## Bewertungsmodelle

Die mathematische Grundlage der Optionsbewertung ist das **Black-Scholes-Modell** (1973), für das Myron Scholes und Robert Merton 1997 den Nobelpreis erhielten. Es modelliert den Optionspreis als Funktion von:

- Aktueller Preis des Basiswerts
- Strike-Preis
- Restlaufzeit
- Risikofreier Zinssatz
- Erwartete Volatilität
- Dividenden (bei Aktienoptionen)

Trotz seiner Limitationen ist Black-Scholes der branchenweite Standard. Verfeinerte Modelle (Binomial-Bäume, Monte-Carlo-Simulationen) werden für Spezialanwendungen verwendet.

## Strategien-Klassen

Optionen erlauben eine fast unbegrenzte Bandbreite von Strategien. Die wichtigsten Klassen:

**Directional Long.** Long Call (bullisch) oder Long Put (bärisch). Klassische gehebelte Wetten auf Marktrichtung.

**Income-Strategien.** Short Put (Cash Secured Put), Covered Call, Iron Condor. Verkauf von Prämien, oft mit definiertem Risiko.

**Volatility-Strategien.** Long Straddle, Long Strangle (Wetten auf grosse Bewegung), Short Straddle (Wette auf ruhigen Markt).

**Spread-Strategien.** Bull Call Spread, Bear Put Spread, Calendar Spread. Reduzieren Kosten oder Risiko durch Kombination von Kauf und Verkauf.

**Synthetics.** Kombinationen, die das Verhalten anderer Positionen replizieren, z.B. ein synthetisches Long über Long Call + Short Put.

Jede dieser Strategien hat eigene Eigenschaften, Risiken und ideale Marktbedingungen.

## Häufige Fehler

Aus der Optionspraxis lassen sich typische Fehler identifizieren:

**Fehler 1: Theta unterschätzen.** Wer OTM-Optionen mit kurzer Restlaufzeit kauft, kämpft gegen den täglichen Zeitverfall. Selbst bei korrekter Marktrichtung kann die Option Geld verlieren.

**Fehler 2: IV-Niveau ignorieren.** Optionen vor Earnings zu kaufen, wenn IV bereits hoch ist, führt fast immer zu Verlusten, selbst bei korrekter Richtungsprognose.

**Fehler 3: Naked Short Selling.** Optionen zu schreiben ohne Verständnis des unbegrenzten Risikos hat in jeder Generation Trader ruiniert.

**Fehler 4: Komplexe Strategien ohne Greeks-Verständnis.** Iron Condors und ähnliche Konstruktionen erfordern aktives Management. Wer die Greeks nicht beherrscht, kann nicht intervenieren.

## Optionen für Schweizer Anleger

Schweizer Anleger haben mehrere Wege zu Optionsmärkten:

- **EUREX:** Europäische Optionen auf DAX, Euro Stoxx 50, SMI, Einzelaktien
- **CBOE/CME:** US-Optionen auf SPX, NDX, Einzelaktien
- **SIX Structured Products:** Strukturierte Produkte mit Optionscharakter (Warrants, Knock-outs)

Broker mit gutem Options-Zugang: Interactive Brokers, Saxo Bank, Swissquote (eingeschränkt).

## Fazit

Optionen sind keine Spielzeuge, sondern hochkomplexe Finanzinstrumente. Ihre Vielseitigkeit macht sie zu einem mächtigen Werkzeug, aber nur in den Händen jener, die die zugrunde liegende Mathematik verstehen.

Wer mit Optionen ernsthaft arbeiten möchte, sollte mindestens drei bis sechs Monate Theorie investieren, bevor echtes Geld eingesetzt wird. Paper-Trading mit Optionen ist essentiell, um die Greeks, Zeitverfall und Volatilitätsdynamik praktisch zu erleben.

Optionen können, richtig eingesetzt, die Rendite eines Portfolios glätten, gezielte Absicherungen ermöglichen und gehebelte Spekulationen mit definiertem Risiko erlauben. Falsch eingesetzt, sind sie der schnellste Weg zum Kontoverlust.

---

*Dieser Artikel dient ausschliesslich der Information und stellt keine Anlageberatung dar. Der Handel mit Optionen ist hochriskant.*
