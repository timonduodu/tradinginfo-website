---
title: "Bitcoin Cash-and-Carry-Arbitrage: Wie Profis Risikoarm an Krypto verdienen"
description: "Cash-and-Carry-Arbitrage zwischen Spot und Futures bei Bitcoin. Eine bewährte institutionelle Strategie und ihre Möglichkeiten für Privatanleger."
pubDate: 2026-04-26
category: "Strategien"
author: "Redaktion"
readingTime: "9 Min. Lesezeit"
---

Während viele Privatanleger Bitcoin als hochvolatile Wette betrachten, nutzen institutionelle Akteure seit Jahren eine deutlich risikoärmere Strategie: Cash-and-Carry-Arbitrage. Die Idee ist einfach, die Umsetzung anspruchsvoll, die Renditen historisch attraktiv — oft im Bereich von 10 bis 30 % annualisiert bei minimalem Marktrisiko.

## Die Grundlogik

Cash-and-Carry-Arbitrage nutzt die Differenz zwischen Spot-Preis und Futures-Preis eines Assets aus. Wenn Bitcoin-Futures mit Lieferung in drei Monaten zu einem höheren Preis gehandelt werden als der aktuelle Spot-Preis, entsteht ein **Premium** — und damit eine Arbitrage-Gelegenheit.

Die klassische Konstruktion:

1. **Long Spot-Bitcoin** kaufen
2. Gleichzeitig **Short Bitcoin-Futures** mit gleichem Nominalwert verkaufen
3. Position bis zum Verfall der Futures halten
4. Bei Verfall konvergieren beide Preise — der Premium wird als Gewinn realisiert

Die Position ist **markt-neutral**: Ob Bitcoin steigt oder fällt, beide Positionen entwickeln sich identisch. Der einzige relevante Faktor ist der Konvergenzprozess zwischen Spot und Future.

> *"Arbitrage is the closest thing to a free lunch in finance — but it's a lunch that requires patience and infrastructure."*
> — **Cliff Asness**, Gründer von AQR Capital

## Konkretes Rechenbeispiel

Annahmen:
- Bitcoin-Spot: 70'000 USD
- Bitcoin-Future (Verfall in 90 Tagen): 71'400 USD
- Premium: 2.0 % auf 90 Tage, entspricht 8.1 % annualisiert

Eine Cash-and-Carry-Position:
- Kauf von 1 BTC zu 70'000 USD am Spot-Markt
- Verkauf von 1 BTC-Future zu 71'400 USD

Drei Szenarien zum Verfall:

**Szenario A: BTC steigt auf 90'000 USD**
- Spot-Gewinn: +20'000 USD
- Future-Verlust: -18'600 USD
- Netto: +1'400 USD ✓

**Szenario B: BTC bleibt bei 70'000 USD**
- Spot-Gewinn: 0
- Future-Gewinn: +1'400 USD
- Netto: +1'400 USD ✓

**Szenario C: BTC fällt auf 50'000 USD**
- Spot-Verlust: -20'000 USD
- Future-Gewinn: +21'400 USD
- Netto: +1'400 USD ✓

In allen Szenarien beträgt der Gewinn 1'400 USD — exakt das anfängliche Premium. Annualisiert sind das **8.1 % bei 90 Tagen Haltedauer** ohne Marktrisiko.

## Warum gibt es überhaupt ein Premium?

Die fundamentale Frage: Warum sollten Marktteilnehmer bereit sein, in der Zukunft mehr zu zahlen, als das Asset heute kostet?

Drei Hauptgründe:

**1. Nachfrage nach Hebel.** Spekulanten, die long Bitcoin gehen wollen, ohne die Coins physisch zu halten, kaufen Futures. Diese Nachfrage drückt den Future-Preis nach oben.

**2. Funding-Kosten.** Wer Bitcoin physisch hält, bindet Kapital, hat Lagerungskosten (Cold-Wallet-Infrastruktur) und trägt das Risiko von Hack oder Verlust. Diese Kosten werden über das Premium kompensiert.

**3. Risikoprämie für unfreiwilligen Liquiditätsabfluss.** In Stressphasen kann Bitcoin-Spot illiquid werden. Wer Spot hält und Future shortet, übernimmt dieses Liquiditätsrisiko und wird dafür mit dem Premium entlohnt.

In Bull-Markt-Phasen mit hoher Spekulationsnachfrage kann das Premium auf 20 bis 40 % annualisiert steigen. In Bärenmärkten kann es auf 0 oder sogar negativ fallen (Backwardation).

## Operative Umsetzung

Cash-and-Carry-Arbitrage ist konzeptuell einfach, operativ jedoch anspruchsvoll:

**Spot-Position aufbauen:**
- Bitcoin direkt auf einer Krypto-Börse kaufen (Coinbase, Kraken, Binance, Bitstamp)
- Alternative: Bitcoin-ETF (in der Schweiz: 21Shares ABTC, Hashdex, etc.)

**Future-Position aufbauen:**
- CME Bitcoin Futures über regulierten Broker (Interactive Brokers)
- Krypto-Perpetuals auf Binance, Bybit, OKX
- Quartals-Futures auf Krypto-Börsen

**Capital Efficiency:**
Wenn Spot und Future bei der gleichen Plattform gehalten werden, kann oft Cross-Margin genutzt werden — die Spot-Position dient als Sicherheit für die Future-Position. Das verbessert die Kapitalrendite erheblich.

## Funding Rates bei Perpetuals

Eine Variante mit Perpetuals (statt Quartals-Futures) nutzt **Funding Rates** statt klassisches Premium.

Perpetuals haben keinen Verfallstermin. Damit der Perpetual-Preis nicht beliebig vom Spot-Preis abweicht, gibt es einen Mechanismus: Long-Positionen zahlen alle 8 Stunden eine Funding Rate an Short-Positionen, wenn der Perpetual über Spot handelt — und umgekehrt.

In Bull-Phasen kann die Funding Rate 0.05 bis 0.1 % pro 8 Stunden betragen — annualisiert bis zu 100 %. Eine Cash-and-Carry-Position kassiert diese Funding Rate kontinuierlich:

- Long Spot
- Short Perpetual

Über die Funding-Zahlungen wird kontinuierlich Premium realisiert, ohne dass auf einen Verfallstermin gewartet werden muss.

> *"Funding rates are the heartbeat of crypto derivatives. They tell you exactly how greedy or fearful the market is."*
> — **Su Zhu**, ehemals Three Arrows Capital

## Risiken

Die Strategie ist **markt-neutral**, aber nicht **risikolos**:

**Counterparty-Risiko.** Wer Spot auf einer Krypto-Börse hält, trägt das Insolvenz-Risiko dieser Börse. FTX 2022 hat schmerzhaft gezeigt, was das bedeutet. Cold-Storage-Selbstverwahrung ist sicherer, macht Cross-Margin aber unmöglich.

**Liquidations-Risiko bei Perpetuals.** Wenn der Bitcoin-Preis stark steigt und die Short-Perpetual-Position nicht ausreichend gedeckt ist, droht eine Zwangsliquidation. Konservative Marginierung (mindestens 30 bis 50 % Eigenkapital gegen die Short) ist essentiell.

**Premium-Verfall.** Wenn das Premium während der Haltedauer schneller schrumpft als linear, kann es vorteilhaft sein, vorzeitig auszusteigen. Aktive Überwachung der Marktstruktur ist wichtig.

**Steuerliche Komplikationen.** In der Schweiz ist die steuerliche Behandlung von Krypto-Arbitrage komplex. Die Strategie kann je nach Umfang und Aktivität als gewerbsmässig eingestuft werden, mit voller Einkommenssteuerpflicht auf die Gewinne.

## Renditen in der Praxis

Historische Daten zeigen:

- **2017 (Bull-Run):** CME-Futures-Premium teilweise über 25 % annualisiert
- **2020-2021 (Bull-Run):** Funding Rates auf Binance/Bybit erreichten 0.1 % alle 8 Stunden — über 100 % annualisiert in Spitzenphasen
- **2022-2023 (Bärenmarkt):** Premium fiel auf 3 bis 5 % annualisiert, teilweise Backwardation
- **2024-2025 (Recovery):** Premium etablierte sich im Bereich von 8 bis 15 % annualisiert

Diese Renditen sind nicht garantiert, aber statistisch attraktiv im Vergleich zu Schweizer Staatsanleihen (~1.5 %) oder Geldmarkt-Produkten.

## Wer sollte das nicht machen

Cash-and-Carry-Arbitrage ist **keine Strategie für Anfänger**. Sie erfordert:

- Verständnis von Spot- und Future-Märkten
- Disziplin bei der Position-Sizing
- Kontinuierliche Überwachung (mindestens täglich)
- Mehrere Accounts bei verschiedenen Anbietern
- Mindestens 20'000 bis 50'000 CHF Einsatzkapital für sinnvolle Skalierung
- Steuerliche Beratung bei höherem Volumen

Wer diese Voraussetzungen nicht erfüllt, fährt mit einfacheren Strategien besser.

## Fazit

Cash-and-Carry-Arbitrage ist eine der wenigen Krypto-Strategien, die strukturell positiv erwartet werden können — ohne direktionales Marktrisiko. Sie ist die Brücke zwischen traditionellem Finanzwesen und der Krypto-Welt: Eine bewährte Konzeptlogik aus dem Rohstoffhandel, angewendet auf eine neue Anlageklasse.

Für vermögende Privatanleger mit Krypto-Affinität kann sie eine sinnvolle Diversifikation zu klassischen Anleihen darstellen. Sie ist jedoch keine "passive Income"-Maschine, sondern verlangt aktives Monitoring und tiefes Verständnis der zugrunde liegenden Marktmechaniken.

---

*Dieser Artikel dient ausschliesslich der Information und stellt keine Anlageberatung dar. Krypto-Trading ist mit erheblichen Risiken verbunden.*
