---
title: "Limit Up und Limit Down: Wenn der Markt stillsteht"
description: "An der NYSE und CME gibt es automatische Handelsstopps, wenn Preise zu schnell bewegen. Wie Circuit Breaker funktionieren und warum sie für Trader entscheidend sind."
pubDate: 2026-06-01
category: "Grundlagen"
subcategory: "Marktmechanik"
author: "Redaktion"
readingTime: "8 Min. Lesezeit"
faq:
  - question: "Was ist ein Circuit Breaker an der Börse?"
    answer: "Ein Circuit Breaker ist eine automatische Handelsunterbrechung, die ausgelöst wird, wenn sich Marktpreise zu schnell oder zu weit bewegen. Sie soll Panik-Verkäufen Zeit zum Abkühlen geben, algorithmische Kaskaden stoppen und Liquidität wiederherstellen."
  - question: "Bei welchen Schwellen greifen die US-Circuit-Breaker?"
    answer: "Seit 2013 gelten für den S&P 500 dreistufige Schwellen: Level 1 bei minus 7 Prozent und Level 2 bei minus 13 Prozent lösen je eine 15-minütige Handelspause aus, Level 3 bei minus 20 Prozent stellt den Handel für den Tag ein."
  - question: "Haben Krypto-Börsen Circuit Breaker?"
    answer: "Nein, Krypto-Börsen haben in der Regel keine Circuit Breaker. Bitcoin kann an einem Tag 30 Prozent fallen, ohne dass der Handel pausiert wird, was zur Härte von Krypto-Liquidationen beiträgt."
  - question: "Werden Stop-Loss-Orders während eines Handelsstopps ausgeführt?"
    answer: "Nein, wenn ein Wertpapier gestoppt wird, werden offene Orders einschliesslich Stop-Loss-Orders nicht ausgeführt. Erst bei Wiederaufnahme des Handels erfolgt die Ausführung, möglicherweise zu deutlich anderen Preisen."
---

Am 9. März 2020 öffnete der S&P 500 mit einem Minus von über 7 Prozent. Innerhalb von Minuten wurde der Handel automatisch unterbrochen, die erste Aktivierung eines marktweiten Circuit Breakers seit 1997. Was hier auf den ersten Blick wie ein technisches Versagen wirkt, ist in Wahrheit ein bewusst eingebauter Schutzmechanismus moderner Finanzmärkte.

## Was Circuit Breaker sind

Circuit Breaker sind automatische Handelsunterbrechungen, die ausgelöst werden, wenn Marktpreise sich zu schnell oder zu weit bewegen. Sie sollen:

- **Panik-Verkäufen Zeit zum Abkühlen geben**
- **Algorithmische Kaskaden stoppen**
- **Liquidität wiederherstellen**, indem sich Käufer und Verkäufer neu sortieren

Es gibt zwei Hauptarten:

**Marktweite Circuit Breaker:** Stoppen den gesamten Markt, wenn Indizes wie der S&P 500 stark fallen.

**Einzelaktien-Circuit Breaker:** Unterbrechen den Handel in einzelnen Wertpapieren bei extremen Bewegungen.

## Das US-System

In den USA gelten seit 2013 dreistufige Circuit Breaker für den S&P 500:

| Level | Schwelle | Folge |
|---|---|---|
| Level 1 | -7 % vom Vortagesschluss | 15 Min. Handelspause |
| Level 2 | -13 % vom Vortagesschluss | 15 Min. Handelspause |
| Level 3 | -20 % vom Vortagesschluss | Handel für den Tag eingestellt |

Diese Regeln gelten nur für Bewegungen vor 15:25 Uhr lokaler Zeit (kurz vor Handelsschluss). Nach 15:25 Uhr greift nur noch Level 3.

Im März 2020 wurde Level 1 viermal innerhalb von zwei Wochen ausgelöst, eine historisch beispiellose Häufung.

## Limit Up und Limit Down

Während Circuit Breaker den gesamten Markt betreffen, gibt es für **einzelne Wertpapiere** das **Limit Up - Limit Down** (LULD) System, eingeführt 2012.

Die Mechanik:

- Für jede liquide US-Aktie wird ein **Referenzpreis** berechnet (gleitender Durchschnitt der letzten 5 Minuten).
- Eine Preis-Band wird festgelegt (typisch ±5 % oder ±10 %, je nach Aktiengruppe).
- Bewegt sich der Aktienkurs ans obere oder untere Bandende, **stoppt der Handel für 5 bis 10 Sekunden**.
- Lässt sich der Markt in dieser Zeit innerhalb des Bandes wieder bewegen, geht der Handel weiter. Sonst folgt eine längere Auktion.

Diese Mechanik schützt vor "Mini Flash Crashes", Situationen, in denen ein einzelner Algorithmus oder eine fehlerhafte Order eine ganze Aktie kurzzeitig auf null treiben könnte.

## Futures-Märkte: Andere Regeln

Bei Futures gelten teilweise abweichende Mechaniken:

**E-mini S&P 500 Futures (CME):**
- Limit-Down-Schwellen: -7 %, -13 %, -20 % vom Vortagsschluss
- Zusätzlich Übernacht-Limits von ±5 %

**Crude Oil Futures:**
- Tageslimit historisch ±10 % vom Vortagsschluss
- Bei extremen Bewegungen Anpassung

**Agrarprodukte:**
- Oft tägliche Limits in absoluten Beträgen (z.B. ±50 Cents bei Mais)
- Kann zu "Limit Days" führen, an denen der Markt komplett gesperrt ist

> *"Limit days in commodities can lock you in a position for days. By the time you can exit, the damage is done."*
>, Rohstoff-Trader

## Die Geschichte: Black Monday 1987

Circuit Breaker entstanden als Reaktion auf den **Black Monday** vom 19. Oktober 1987, als der Dow Jones an einem einzigen Tag um 22.6 Prozent fiel, der grösste Tagesverlust der Wallstreet-Geschichte.

Die Untersuchung danach zeigte: Automatischer Programmhandel und sogenannte "Portfolio Insurance" Strategien verstärkten den Verkaufsdruck. Hätte es Handelsunterbrechungen gegeben, wäre der Crash möglicherweise weniger katastrophal verlaufen.

Die ersten marktweiten Circuit Breaker wurden 1988 eingeführt und seitdem mehrfach verfeinert.

## Bedeutung für Trader

Was bedeuten Circuit Breaker für die Praxis?

**Order-Ausführungen während Stops.** Wenn ein Wertpapier gestoppt wird, werden offene Orders nicht ausgeführt, auch nicht Stop-Loss-Orders. Erst wenn der Handel wieder aufgenommen wird, erfolgt die Ausführung, möglicherweise zu deutlich anderen Preisen.

**Liquidation in Stress-Phasen.** Wer in fallenden Märkten versucht, schnell zu verkaufen, kann durch Circuit Breaker verzögert werden. Manchmal helfen sie aber auch, sie verhindern Panik-Verkäufe zum schlechtesten Zeitpunkt.

**Optionen und Derivate.** Bei gestoppten Underlying-Werten können Optionen extrem volatil werden. Im Frühjahr 2020 verzeichneten S&P 500 Optionen in den Stop-Phasen Spreads, die das Zehnfache des Normalen betrugen.

**Übernacht-Risiko.** Wenn ein Markt am Ende des Tages mit Circuit Breaker schliesst, ist ungewiss, wo er am nächsten Tag öffnet. Gap-Bewegungen von mehreren Prozent sind möglich.

## Schweizer Markt: SIX Swiss Exchange

Auch die SIX hat Circuit Breaker, allerdings mit anderen Regeln:

**Volatilitätsunterbrechungen.** Wenn der Preis einer Aktie eine vordefinierte Bandbreite verlässt, wird der Handel kurz unterbrochen und eine Auktion durchgeführt. Die Bandbreiten variieren je nach Liquidität.

**Marktweite Stops.** Die SIX hat keine derartig formalisierten marktweiten Circuit Breaker wie die NYSE. In Stress-Phasen kann der Handel aber dennoch ausgesetzt werden.

In den vergangenen Jahren waren Schweizer Marktstopps die Ausnahme. Bei einzelnen Aktien, etwa nach Übernahmeangeboten oder Insolvenzmeldungen, kommt es regelmässig zu temporären Stopps.

## Krypto-Märkte: Keine Circuit Breaker

Ein wichtiger Unterschied: Krypto-Börsen haben in der Regel **keine Circuit Breaker**. Bitcoin kann an einem Tag 30 % fallen, ohne dass der Handel pausiert wird.

Das ist ein wesentlicher struktureller Unterschied zu traditionellen Märkten und einer der Gründe, warum Krypto-Liquidationen so brutal sein können. Während ein S&P-500-Crash bei 20 % gestoppt würde, läuft eine Bitcoin-Bewegung ohne Pause weiter, mit der gesamten Spirale aus Margin-Calls und Liquidationen.

## Was Trader tun sollten

Praktische Empfehlungen:

1. **Stop-Losses kennen ihre Grenzen.** In schnellen Märkten greifen sie nicht zwingend zum gewünschten Preis.
2. **Guaranteed Stops in volatilen Phasen.** Bei wichtigen Wirtschaftsdaten oder geopolitischen Ereignissen lohnt der Aufpreis für garantierte Stops.
3. **Position-Sizing anpassen.** In Stress-Phasen kleinere Positionen, mehr Liquiditätspuffer.
4. **Markt-Calendars beachten.** Vor wichtigen Ankündigungen Positionen reduzieren oder gezielt absichern.

## Fazit

Circuit Breaker und Limit-Mechanismen sind unsichtbare Schutznetze der modernen Finanzmärkte. Sie helfen, Panik-Spiralen zu unterbrechen und systemische Risiken zu reduzieren, gleichzeitig schaffen sie aber Komplikationen für aktive Trader.

Wer in Stress-Phasen aktiv ist, sollte das Funktionsprinzip kennen. In ruhigen Marktphasen spielt es keine Rolle. In Crashes kann es darüber entscheiden, ob ein Trade rechtzeitig geschlossen werden kann oder erst zu deutlich schlechteren Preisen abgewickelt wird.

---

*Dieser Artikel dient ausschliesslich der Information und stellt keine Anlageberatung dar.*
