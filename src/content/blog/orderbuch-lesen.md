---
title: "Das Orderbuch lesen: Was die Tiefe des Markts dir verrät"
description: "Das Orderbuch zeigt dir, wer wo kaufen oder verkaufen will. Wer es lesen kann, erkennt Liquidität, Trends und Manipulation. Praxisanleitung für Schweizer und DACH-Trader."
pubDate: 2026-07-06
category: "Grundlagen"
subcategory: "Trading-Mechanik"
author: "TradingInfo Redaktion"
featured: false
---

## Was ist das Orderbuch?

Das Orderbuch (auch "Level 2" genannt) zeigt dir alle aktuellen Kauf- und Verkaufsorders einer Aktie oder eines anderen Wertpapiers. Es ist sozusagen die Versammlung aller Angebote und Nachfragen, geordnet nach Preis.

Die zwei Seiten:
- **Bid** (links): Kaufgebote — was Käufer maximal bereit sind zu zahlen
- **Ask** (rechts): Verkaufsangebote — was Verkäufer mindestens haben wollen

Der höchste Bid und der niedrigste Ask treffen sich in der Mitte — das ist der Spread.

## Ein praktisches Beispiel

Hier ein vereinfachtes Orderbuch für eine fiktive Schweizer Aktie:

```
BID (Käufer)              ASK (Verkäufer)
Preis    Menge            Preis    Menge
99.95    1.500            100.05   800
99.90    3.200            100.10   2.100
99.85    1.800            100.15   1.500
99.80    5.000            100.20   3.800
99.75    2.100            100.25   2.500
```

- **Best Bid**: 99.95 CHF, jemand will 1.500 Aktien kaufen
- **Best Ask**: 100.05 CHF, jemand will 800 Aktien verkaufen
- **Spread**: 0.10 CHF
- **Mid-Price**: 100.00 CHF

Wenn du jetzt 500 Aktien kaufen willst (Market Order), bekommst du sie alle zu 100.05 CHF. Wolltest du 1.000 Aktien, bekämst du die ersten 800 zu 100.05 CHF und die restlichen 200 zu 100.10 CHF.

## Was kann man aus dem Orderbuch ablesen?

### 1. Liquidität

Je mehr Orders im Buch stehen und je grösser sie sind, desto liquider die Aktie. Eine UBS oder Nestlé hat hunderttausende Aktien in jedem Preislevel — du kannst grosse Mengen kaufen, ohne den Kurs zu bewegen. Eine kleine SMI-Mid-Cap kann pro Level vielleicht nur ein paar hundert Aktien haben — schon eine Order von 5.000 Aktien lässt den Kurs spürbar springen.

### 2. Spread als Kostenindikator

Der Spread zwischen Best Bid und Best Ask ist deine Mindestkosten. Wenn du sofort kaufst und sofort verkaufst, verlierst du diesen Spread.

**Faustregel**: Bei Schweizer Blue Chips (Nestlé, Roche) liegt der Spread typischerweise bei 0,01-0,05 CHF. Bei einer Penny Stock oder einer wenig gehandelten Aktie kann er bei 5-10% des Kurses liegen — was ein massiver Kostenfaktor ist.

### 3. Unterstützung und Widerstand

Wenn du im Orderbuch siehst, dass bei einem bestimmten Preis eine ungewöhnlich grosse Order liegt, kann das ein Hinweis auf eine Unterstützungs- oder Widerstandszone sein:

- **Grosse Bid-Order auf einem Niveau**: Möglicher Support — viele wollen dort kaufen
- **Grosse Ask-Order auf einem Niveau**: Möglicher Widerstand — viele wollen dort verkaufen

### 4. Iceberg Orders

Profis verstecken oft grosse Orders, indem sie nur einen kleinen Teil sichtbar machen ("Iceberg Order"). Wird der sichtbare Teil ausgeführt, erscheint automatisch der nächste. Wer das Orderbuch über die Zeit beobachtet, erkennt manchmal solche Muster: Bei einem bestimmten Preis verkauft jemand immer wieder grosse Mengen, ohne dass der Kurs wegläuft.

## Wo bekomme ich Level 2-Daten?

Standard-Broker zeigen meist nur den Best Bid und Best Ask. Für das volle Orderbuch (Tiefe) brauchst du Level 2-Daten, die oft kostenpflichtig sind:

**In der Schweiz**:
- Swissquote: Level 2 für SIX-Aktien gegen Aufpreis
- Saxo Bank: integriert in der Plattform
- Interactive Brokers: für die meisten Märkte verfügbar, oft mit Abo

**In Deutschland und Österreich**:
- Trade Republic: zeigt nur einfache Tiefe
- DKB, ING etc.: meist nur Best Bid/Ask
- Capital.com, IG, Plus500: für CFDs oft Level 2

## Praktische Trading-Anwendung

**Beispiel-Szenario**: Du willst eine Position in einer Aktie aufbauen, die wenig liquide ist. Wenn du eine Market Order über deine geplante Stückzahl gibst, könntest du den Kurs deutlich nach oben treiben — und am Ende viel teurer kaufen als geplant.

**Bessere Strategie**:
1. Schau ins Orderbuch
2. Identifiziere die Liquidität auf den nächsten Levels
3. Splitte deine Order auf mehrere kleinere Trades
4. Oder nutze eine Limit-Order und warte, bis sie zum gewünschten Preis ausgeführt wird

## Spoofing und Manipulation

Im Orderbuch passiert auch Manipulation. **Spoofing** ist eine illegale Praxis, bei der Trader grosse Orders einstellen, um den Markt zu täuschen — und sie dann sofort wieder zurückziehen, bevor sie ausgeführt werden.

Beispiel: Ein Manipulator stellt eine grosse Bid-Order ins Buch, um anderen Tradern den Eindruck von Kaufdruck zu vermitteln. Die anderen kaufen, der Kurs steigt, der Manipulator verkauft schnell — und zieht dann seine Bid-Order zurück.

Spoofing ist in den USA, Deutschland, Schweiz und EU strafbar. Es gibt regelmässig Verfahren gegen institutionelle Trader. Aber für Privatanleger heisst das: nicht zu viel in das Orderbuch hineininterpretieren — manches sieht echter aus, als es ist.

## Orderbuch vs Time & Sales

Das Orderbuch zeigt dir Orders, die noch im Markt stehen. Das **Time & Sales** (auch "Tape" genannt) zeigt dir, was tatsächlich gehandelt wurde — also die Trades, die ausgeführt wurden. Beide zusammen ergeben das vollständige Bild:

- Orderbuch: Was wollen die Marktteilnehmer?
- Time & Sales: Was haben sie wirklich getan?

Profis schauen beides parallel an.

## Steuerliche Relevanz (DACH)

Das Orderbuch selbst hat keine steuerlichen Implikationen — es ist ein Informationsinstrument, kein Steuerfall. Aber: Wer Level 2-Daten abonniert und damit aktiv tradet, bewegt sich tiefer in Richtung "professionelles Trading". In der Schweiz kann das für die Einstufung als gewerbsmässiger Wertschriftenhändler relevant werden. Wer das volle Level-2-Equipment nutzt und damit hochfrequent handelt, riskiert die Einkommensbesteuerung seiner Gewinne.

## Spezialfall: Crypto

Bei Kryptowährungen ist das Orderbuch öffentlich und einsehbar — auf Börsen wie Bitstamp, Kraken oder Binance kannst du jederzeit die volle Tiefe sehen, ohne Abo. Krypto-Trader nutzen das intensiv für Scalping-Strategien.

## Fazit

Das Orderbuch ist eines der unterschätztesten Werkzeuge im Trader-Arsenal. Wer es lesen kann, versteht den Markt auf einer Mikro-Ebene, die anderen verborgen bleibt: Wo ist echte Liquidität, wo nur Bluff? Wo werden grosse Player aktiv? Wo sind die wahren Supports und Widerstände? Für langfristige Buy-and-Hold-Investoren ist das Orderbuch irrelevant. Aber für aktive Trader — vor allem bei kleineren Aktien — kann es den Unterschied zwischen einem guten und einem schlechten Trade ausmachen.
