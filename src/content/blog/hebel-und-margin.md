---
title: "Hebel und Margin: Wie gehebeltes Trading wirklich funktioniert"
description: "Margin-Mechanik, Hebel-Berechnung und der Margin Call. Was Trader über gehebeltes Handeln wissen müssen, bevor sie Geld einsetzen."
pubDate: 2026-05-10
category: "Grundlagen"
subcategory: "Hebel"
author: "Redaktion"
readingTime: "9 Min. Lesezeit"
faq:
  - question: "Was bedeutet ein Hebel von 1:10?"
    answer: "Ein Hebel von 1:10 bedeutet, dass für eine Position über 10'000 CHF nur 1'000 CHF Eigenkapital, die sogenannte Margin, hinterlegt werden müssen. Die restlichen 9'000 CHF werden effektiv vom Broker geliehen, wofür Zinsen anfallen."
  - question: "Was ist ein Margin Call?"
    answer: "Ein Margin Call ist die Aufforderung des Brokers, zusätzliche Sicherheit nachzuschiessen. In der Praxis schliessen die meisten Broker Positionen automatisch und ohne Vorwarnung, sobald die Maintenance Margin unterschritten wird."
  - question: "Welche maximalen Hebel gelten in der EU für Privatanleger?"
    answer: "Die ESMA hat seit 2018 Obergrenzen festgelegt: 1:30 für Hauptwährungspaare, 1:20 für Nebenwährungspaare, Gold und Aktien-Indizes, 1:10 für andere Rohstoffe, 1:5 für Einzelaktien und 1:2 für Kryptowährungen."
  - question: "Wie viele Retail-CFD-Trader verlieren Geld?"
    answer: "Studien der französischen AMF und der ESMA zeigen konsistent, dass zwischen 70 und 85 Prozent der Retail-CFD-Trader Geld verlieren. Die Ursache liegt selten in der Strategie, sondern fast immer im psychologischen Umgang mit dem Hebel."
---

Hebel ist das Werkzeug, das aus 1'000 CHF Kapital eine 30'000-CHF-Position macht. Für Broker ist es der Hauptverkaufsgrund ihrer Produkte. Für Trader ist es gleichzeitig das mächtigste Werkzeug und die häufigste Ursache für den Totalverlust ihres Kontos.

## Was Hebel mathematisch bedeutet

Hebel, auch Leverage genannt, ist das Verhältnis zwischen der Grösse einer eingegangenen Position und dem dafür hinterlegten Eigenkapital. Ein Hebel von 1:10 bedeutet, dass für eine Position über 10'000 CHF nur 1'000 CHF Eigenkapital, die sogenannte Margin, hinterlegt werden müssen.

Die restlichen 9'000 CHF werden effektiv vom Broker geliehen. Diese Konstruktion ist keine "kostenlose" Hebelung, sondern ein klassischer Kredit. Entsprechend fallen Zinsen an, die in der Forex- und CFD-Welt als Swap oder Übernacht-Gebühr bezeichnet werden.

> *"Leverage is the only way a smart guy can go broke."*
>, **Warren Buffett**

## Initial Margin vs. Maintenance Margin

Bei einer Position werden zwei Margin-Werte unterschieden:

**Initial Margin** ist die Sicherheit, die zur Eröffnung der Position hinterlegt werden muss. Bei einem Hebel von 1:30 sind das 3.33 % des Positionsvolumens.

**Maintenance Margin** ist der Mindestbetrag, der während der Haltedauer der Position auf dem Konto verbleiben muss. Sie liegt typischerweise bei 50 bis 80 % der Initial Margin. Fällt das Eigenkapital unter diesen Wert, wird die Position zwangsliquidiert.

## Der Margin Call

Ein Margin Call ist die Aufforderung des Brokers, zusätzliche Sicherheit nachzuschiessen. In der modernen Trading-Realität existiert dieser Begriff vor allem noch im Sprachgebrauch, die meisten Broker schliessen Positionen automatisch und ohne Vorwarnung, sobald die Maintenance Margin unterschritten wird. Diese Stop-Out-Marken liegen bei seriösen Brokern bei 50 % der Initial Margin, bei aggressiven CFD-Brokern teilweise bei 20 oder 10 %.

## Rechenbeispiel: Wie schnell ein gehebeltes Konto stirbt

Angenommen, ein Trader hat 10'000 CHF Eigenkapital und nutzt einen Hebel von 1:30 auf EUR/USD. Die Positionsgrösse beträgt damit 300'000 CHF.

- Bewegt sich EUR/USD um 1 % gegen die Position, ergibt das einen Verlust von 3'000 CHF, also 30 % des Eigenkapitals.
- Bei einer Bewegung von 3.33 % gegen die Position ist das gesamte Eigenkapital verloren.

Historische Tagesbewegungen von EUR/USD übersteigen 1 % regelmässig. Eine Bewegung von 3 % an einem einzigen Tag, etwa nach einer überraschenden Notenbank-Entscheidung, ist nicht aussergewöhnlich. Die Brexit-Abstimmung 2016 bewegte GBP/USD an einem Tag um über 11 %.

## Hebel-Vorschriften in der DACH-Region

Die regulatorische Lage unterscheidet sich erheblich zwischen Schweiz und EU:

**Schweiz (FINMA):** Die Schweizer Finanzmarktaufsicht hat **keine generellen Hebel-Obergrenzen** für FINMA-regulierte Broker erlassen. Schweizer Broker wie Dukascopy oder Swissquote dürfen für ihre Schweizer Kunden grundsätzlich höhere Hebel anbieten. In der Praxis halten sich aber auch viele Schweizer Broker an die EU-Vorgaben.

**EU / EWR (ESMA):** Die europäische ESMA hat seit 2018 strenge Hebel-Obergrenzen für Retail-Kunden festgelegt. Diese gelten für alle in der EU regulierten Broker, auch wenn sie Schweizer Kunden bedienen:

| Instrument | Maximaler Hebel (Retail, ESMA) |
|---|---|
| Hauptwährungspaare (EUR/USD etc.) | 1:30 |
| Nebenwährungspaare | 1:20 |
| Gold | 1:20 |
| Aktien-Indizes (Hauptmärkte) | 1:20 |
| Andere Rohstoffe | 1:10 |
| Einzelaktien | 1:5 |
| Kryptowährungen | 1:2 |

**Deutschland und Österreich** folgen den ESMA-Regeln durch BaFin bzw. FMA, dort sind diese Limits für Retail-Kunden bindend.

**Professionelle Kunden** (mit hohem Vermögen, Trading-Erfahrung und Berufshintergrund) können sich in der EU als "Professional" einstufen lassen und höhere Hebel nutzen, verlieren dabei aber Negativsaldoschutz und andere Sicherheiten.

**Wichtig für Schweizer Trader:** Wer einen ausländischen EU-Broker nutzt (z.B. Interactive Brokers Irland, DEGIRO), unterliegt automatisch den ESMA-Regeln. Wer einen Schweizer Broker nutzt, kann je nach Anbieter andere Konditionen haben.

Professionelle Kunden, definiert über Vermögen, Erfahrung und Trading-Aktivität, können auf höhere Hebel zugreifen. Wer als "professionell" klassifiziert wird, verliert jedoch wichtige Schutzmassnahmen wie den negativen Kontoschutz.

> *"Risk is not a number on a screen. Risk is the probability that you will not be in the market tomorrow."*
>, **Howard Marks**, Oaktree Capital

## Negative Kontoschutz

Seit 2018 gilt in der EU und der Schweiz für Retail-Kunden ein gesetzlich vorgeschriebener negativer Kontoschutz: Der Trader kann nie mehr verlieren als sein eingezahltes Kapital. Diese Regelung wurde nach Marktverwerfungen wie der Aufhebung des EUR/CHF-Mindestkurses 2015 eingeführt, bei der zahlreiche Retail-Trader nicht nur ihr Konto, sondern auch zusätzliche Nachschüsse von 50'000 bis 500'000 CHF leisten mussten.

Für professionelle Kunden gilt dieser Schutz nicht. Wer freiwillig in den Profi-Status wechselt, akzeptiert das volle Nachschussrisiko.

## Sinnvolle Hebel-Nutzung

Die akademische Forschung zur optimalen Hebelhöhe (Kelly Criterion, Optimal F) zeigt: Für die meisten profitablen Trading-Strategien liegt der mathematisch optimale Hebel bei 1:2 bis 1:5, deutlich tiefer als die regulatorischen Maxima. Höhere Hebel führen zwar zu höheren absoluten Gewinnen in guten Phasen, gleichzeitig steigt die Drawdown-Wahrscheinlichkeit exponentiell.

Praktische Daumenregeln aus der Trading-Literatur:

1. **Pro Trade nie mehr als 1 bis 2 % des Eigenkapitals riskieren.** Bei 10'000 CHF Konto sind das maximal 100 bis 200 CHF Verlustrisiko pro Position.

2. **Hebel nach Volatilität anpassen.** Ein 1:30-Hebel auf EUR/USD entspricht etwa dem Risiko eines 1:5-Hebels auf einen volatilen Krypto-Asset.

3. **Stops setzen, bevor die Position eröffnet wird.** Das Stop-Loss-Niveau definiert die maximale Verlustgrösse, und damit die maximal vertretbare Positionsgrösse.

## Hebel bei verschiedenen Instrumenten

**Forex CFDs:** Der "klassische" Hebel, oft 1:30 oder höher. Hohe Liquidität, enge Spreads, aber substantielle Swap-Kosten bei längerer Haltedauer.

**Aktien-Margin:** Bei Brokern wie Interactive Brokers können Aktien auf Margin gekauft werden. Margin-Zinsen liegen etwa 1.5 % über dem Leitzins, günstiger als die meisten Konsumkredite, aber dennoch eine Kostenposition.

**Futures:** Mathematisch hochgehebelte Instrumente, ein E-mini S&P-500-Kontrakt repräsentiert rund 250'000 USD und erfordert nur 12'000 USD Margin. Im Gegensatz zu CFDs fallen keine Swap-Kosten an, dafür müssen Kontrakte regelmässig gerollt werden.

**Optionen:** Optionen sind selbst eine Form von Hebel, der Käufer einer Option erhält den Anspruch auf eine grosse Position für einen Bruchteil ihres Werts. Im Gegensatz zu CFDs ist das maximale Risiko auf die Prämie beschränkt.

## Die psychologische Dimension

Studien des Französischen AMF und der ESMA zeigen konsistent: Zwischen 70 und 85 % der Retail-CFD-Trader verlieren Geld. Bei Brokern, die ihre Quote publizieren müssen, finden sich diese Zahlen prominent in den Risikohinweisen.

Die Ursache liegt selten in der Strategie selbst, sondern fast immer im psychologischen Umgang mit dem Hebel. Eine Position, die "nur" 333 CHF Margin gebunden hat, fühlt sich kleiner an als eine 10'000-CHF-Aktien-Position, obwohl das Risiko identisch ist.

## Fazit

Hebel ist ein neutrales Werkzeug. Er multipliziert sowohl Gewinne als auch Verluste, und genau deshalb erfordert er disziplinierten Umgang. Vor der ersten gehebelten Position sollte jeder Trader berechnen können: Wie viel Prozent des Eigenkapitals verliere ich bei einer 1 %, 2 % oder 5 % Bewegung gegen mich? Wer diese Zahlen nicht im Schlaf kennt, sollte mit ungehebeltem Trading beginnen.

---

*Dieser Artikel dient ausschliesslich der Information und stellt keine Anlageberatung dar. Der Handel mit Hebelprodukten kann zum Totalverlust führen.*
