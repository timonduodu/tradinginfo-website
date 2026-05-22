---
title: "Pairs Trading: Mit Aktienpaaren marktneutral handeln"
description: "Pairs Trading ist eine marktneutrale Strategie für Fortgeschrittene. Wir erklären die Mechanik, Risiken und welche Aktienpaare sich an Schweizer und DACH-Märkten anbieten."
pubDate: 2026-07-27
category: "Strategien"
subcategory: "Fortgeschritten"
author: "TradingWissen Redaktion"
featured: false
---

## Was ist Pairs Trading?

Pairs Trading ist eine marktneutrale Strategie, bei der du gleichzeitig zwei Aktien handelst — eine long, eine short. Idealerweise zwei Aktien, die historisch stark korreliert sind, sich aber gerade temporär auseinander entwickelt haben. Du wettest darauf, dass sie wieder zueinander finden.

Beispiel: BMW und Mercedes-Benz Group. Beides deutsche Premium-Autohersteller. Wenn BMW relativ zu Mercedes überdurchschnittlich steigt, wetten Pairs Trader darauf, dass dieser Spread wieder zusammenrückt — also: Short BMW, Long Mercedes.

Die geniale Idee: **Egal in welche Richtung der Markt insgesamt geht** — solange der Spread zwischen BMW und Mercedes sich verringert, gewinnst du.

## Die Mechanik

**Schritt 1**: Identifiziere ein Paar mit hoher historischer Korrelation (>0,8).

**Schritt 2**: Berechne den "Spread" — entweder als Preisdifferenz oder als Verhältnis (Ratio).

**Schritt 3**: Überwache, wann der Spread vom historischen Mittel abweicht — z.B. 2 Standardabweichungen.

**Schritt 4**: Wenn der Spread abnormal hoch ist:
- Short die teurere Aktie
- Long die günstigere Aktie

**Schritt 5**: Position halten, bis der Spread wieder zum Mittel zurückgekehrt ist — dann Gewinn realisieren.

## Beispielrechnung

Annahme: Du beobachtest BMW (EUR 80) und Mercedes (EUR 60). Historisches Preisverhältnis: BMW/Mercedes = 1,4. Aktuelles Verhältnis: 80/60 = 1,33 — BMW relativ "billig". 

**Strategie**:
- Long 100 BMW-Aktien (EUR 8.000 Einsatz)
- Short 133 Mercedes-Aktien (EUR 7.980 Einsatz)
- Position-Wert: ca. 16.000 EUR, aber nur ca. 4.000 EUR Margin nötig

**Szenario 1**: Markt fällt 10%. BMW fällt auf 72, Mercedes auf 54.
- Long: -800 EUR
- Short: +800 EUR
- Netto: 0 — marktneutral!

**Szenario 2**: Spread normalisiert sich. BMW steigt auf 84, Mercedes auf 60.
- Long: +400 EUR
- Short: 0 EUR
- Netto: +400 EUR

Das ist die Magie: Du profitierst von der Normalisierung, nicht von der Marktrichtung.

## Welche Paare eignen sich?

**Gute Paare**:
- Zwei Aktien aus derselben Branche und Region
- Ähnliche Geschäftsmodelle
- Vergleichbare Marktkapitalisierung
- Historische Korrelation > 0,8

**Klassische Beispiele in DACH**:
- BMW vs Mercedes-Benz (DE)
- Allianz vs Munich Re (DE)
- Nestlé vs Unilever (CH/UK)
- Roche vs Novartis (CH)
- Erste Group vs Raiffeisen (AT)
- UBS vs Credit Suisse — historisch das klassische Paar (heute durch Fusion irrelevant)

**Aber Achtung**: Manche scheinbar "passende" Paare sind eben NICHT korreliert — z.B. Adidas und Puma sehen ähnlich aus, haben aber unterschiedliche Margen und Strategien.

## Pair-Finding-Tools

**Statistische Methoden**:
- **Pearson-Korrelation**: Misst lineare Korrelation
- **Kointegration**: Statistischer Test für langfristige Beziehungen — empfohlen statt blosser Korrelation
- **Z-Score**: Wie viele Standardabweichungen ist der aktuelle Spread vom Mittel entfernt

**Software**:
- Python mit pandas und statsmodels — der Profistandard
- TradingView mit Custom-Skripten
- QuantConnect — Plattform für quantitatives Trading
- Excel — für Anfänger

## Risiken

**1. "Pair breakdown"**: Die historische Korrelation funktioniert plötzlich nicht mehr. Bestes Beispiel: VW vs BMW im Abgas-Skandal 2015 — VW kollabierte, BMW nicht. Wer gegen den Spread positioniert war, hatte massive Verluste.

**2. Beidseitige Verluste**: Wenn der Spread weiter auseinandergeht statt sich zu schliessen, verlierst du auf beiden Seiten.

**3. Übernachtfinanzierung**: Bei Short-Positionen über CFDs fallen täglich Finanzierungskosten an. Bei langen Haltedauern frisst das die Rendite.

**4. Dividendenrisiko**: Wenn die Long-Aktie Dividende zahlt, bekommst du sie. Bei der Short-Aktie musst du sie aber zahlen. Asymmetrisch.

**5. Margin Calls**: Wenn dein Konto zu klein ist und der Spread sich gegen dich bewegt, kommt der Margin Call.

## Praktische Umsetzung (CH/DE/AT)

**Schweiz**: Pairs Trading ist anspruchsvoll umzusetzen. Echtes Short-Selling ist für Privatanleger schwierig. Realistisch sind:
- Über CFDs (z.B. Swissquote eTrading, Saxo)
- Über Optionen für ausgewählte Aktien
- Bei Interactive Brokers professionell möglich

**Deutschland und Österreich**: CFDs sind weit verbreitet. ESMA-Hebellimits gelten:
- Aktien-CFDs: max. 1:5 Hebel
- Index-CFDs: max. 1:20

Das limitiert das Profitpotenzial, schützt aber auch vor Totalverlust.

## Steuerliche Behandlung

**Schweiz**: Komplexe Situation. Pairs Trading erfüllt mehrere Kriterien des gewerbsmässigen Wertschriftenhandels:
- Aktive Strategie mit kurzen Haltedauern
- Einsatz von Hebeln/Derivaten
- Systematisches Trading

Die ESTV wird Pairs Trading mit hoher Wahrscheinlichkeit als gewerbsmässig einstufen. Konsequenz: Gewinne sind als Einkommen steuerpflichtig + AHV/IV. Privatanleger sollten das im Hinterkopf haben.

**Deutschland**: CFD-Gewinne unterliegen der Abgeltungsteuer. **Aber**: Termingeschäfte (CFDs) haben die Verlustverrechnungsbeschränkung von 20.000 EUR pro Jahr — bei aktiven Pairs Traders sehr relevant.

**Österreich**: KESt 27,5%. Bei Pairs Trading über ausländische Broker selbst zu deklarieren. Verluste nur im selben Jahr verrechenbar.

## Wer macht Pairs Trading?

Pairs Trading wurde in den 1980ern von Morgan-Stanley-Quant Nunzio Tartaglia und seinem Team entwickelt. Heute ist es:

- Eine der wichtigsten Strategien für Hedge Funds und Quant Funds
- Beliebt bei Marktneutralen-Strategien
- Mathematisch anspruchsvoll, weshalb 95% der Privatanleger es nicht nutzen

## Realistische Renditen

Pairs Trading hat eine niedrige Volatilität, aber auch geringere Renditen als Long-Only-Strategien. Realistisch sind 5-15% pro Jahr — aber mit deutlich geringerem Drawdown als bei reinem Aktien-Investment.

Der Sharpe-Ratio (risikoadjustierte Rendite) ist oft besser als beim Markt — das macht es für institutionelle Investoren attraktiv.

## Häufige Fehler

**1. Korrelation als Garantie behandeln**: Vergangene Korrelation ist keine Zukunftsgarantie. Strukturelle Änderungen (Skandale, neue Konkurrenz, regulatorische Eingriffe) können Paare zerstören.

**2. Zu kleine Stichprobe**: Wer Korrelation aus 6 Monaten Daten ableitet, hat keine zuverlässige Basis. Mindestens 2-3 Jahre Daten verwenden.

**3. Transaktionskosten unterschätzen**: Bei jedem Trade zwei Positionen — also doppelte Kosten und Spreads.

**4. Zu konzentrierte Bets**: Wer 80% seines Kapitals in einem Pair-Trade hat, fliegt beim Pair Breakdown ab.

**5. Stop-Loss vernachlässigen**: Auch bei marktneutralen Strategien braucht es ein Risikolimit.

## Pairs Trading für Anfänger?

Ehrlich: Nein. Pairs Trading verlangt:
- Solides statistisches Wissen
- Programmierfähigkeiten (zumindest Excel-Pro)
- Verständnis von Optionen oder CFDs
- Diszipliniertes Risikomanagement
- Geduld (Spreads können lange auseinander bleiben)

Für die meisten Anleger ist es einfacher und effektiver, in einen breiten ETF zu investieren. Wer aber den intellektuellen Reiz und Spielraum für Experimente sucht, findet im Pairs Trading eine spannende Strategie.

## Fazit

Pairs Trading ist eine elegante, mathematisch fundierte Strategie, die in Theorie marktunabhängig sein kann. In der Praxis ist es komplex umzusetzen, hat versteckte Kosten und kann bei "Pair Breakdowns" hohe Verluste verursachen. Für institutionelle Investoren und ambitionierte Privatanleger mit Quant-Background ist es ein wertvolles Werkzeug. Für die meisten anderen ist es Overkill — ein gut diversifiziertes Aktien-ETF-Portfolio liefert ähnliche Vorteile bei viel weniger Aufwand und Stress.
