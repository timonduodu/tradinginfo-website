export interface GlossarEintrag {
  begriff: string;
  definition: string;       // 2–3 Sätze, deutsch, Schweizer Schreibweise (ss statt ß), faktisch korrekt
  artikelSlug?: string;     // optional: Slug eines passenden Artikels (ohne /blog/ Präfix)
}

export const glossar: GlossarEintrag[] = [
  {
    begriff: "Aktie",
    definition: "Eine Aktie ist ein Wertpapier, das einen Anteil am Eigenkapital einer Aktiengesellschaft verbrieft. Wer Aktien hält, ist Miteigentümer des Unternehmens und kann von Kurssteigerungen und Dividenden profitieren, trägt aber auch das Verlustrisiko.",
  },
  {
    begriff: "Airdrop",
    definition: "Ein Airdrop ist die kostenlose Verteilung von Krypto-Token an Wallet-Adressen, oft zur Bewerbung eines neuen Projekts oder als Belohnung für bestehende Nutzer. Steuerlich gelten zugeteilte Token im DACH-Raum je nach Land als Einkommen oder erst beim Verkauf als relevant.",
    artikelSlug: "airdrops-steuern-dach",
  },
  {
    begriff: "Ask",
    definition: "Der Ask (Briefkurs) ist der Preis, zu dem ein Verkäufer bereit ist, ein Wertpapier zu verkaufen. Er liegt stets über dem Bid (Geldkurs); die Differenz zwischen beiden bildet den Spread.",
    artikelSlug: "bid-ask-spread",
  },
  {
    begriff: "Ausschüttend",
    definition: "Ein ausschüttender Fonds oder ETF zahlt vereinnahmte Dividenden und Zinsen regelmässig an die Anleger aus, statt sie wieder anzulegen. Das schafft laufende Erträge, die der Anleger selbst reinvestieren oder verbrauchen kann.",
    artikelSlug: "thesaurierend-vs-ausschuettend",
  },
  {
    begriff: "Backwardation",
    definition: "Backwardation beschreibt eine Terminmarktsituation, in der der Futures-Preis unter dem aktuellen Kassapreis liegt. Sie tritt häufig bei knappen Gütern auf und ist das Gegenteil von Contango.",
    artikelSlug: "contango-backwardation",
  },
  {
    begriff: "Bärenmarkt",
    definition: "Ein Bärenmarkt bezeichnet eine längere Phase fallender Kurse, oft definiert als ein Rückgang von mindestens 20 Prozent von einem vorherigen Hoch. Die Stimmung am Markt ist dabei überwiegend pessimistisch.",
  },
  {
    begriff: "Bid",
    definition: "Der Bid (Geldkurs) ist der Preis, zu dem ein Käufer bereit ist, ein Wertpapier zu kaufen. Er liegt stets unter dem Ask; die Differenz ist der Spread, eine indirekte Handelskosten.",
    artikelSlug: "bid-ask-spread",
  },
  {
    begriff: "Blockchain",
    definition: "Eine Blockchain ist ein dezentral geführtes, manipulationssicheres Register, in dem Transaktionen in verketteten Blöcken gespeichert werden. Sie bildet die technische Grundlage von Kryptowährungen wie Bitcoin und Ethereum.",
  },
  {
    begriff: "Broker",
    definition: "Ein Broker ist ein Finanzdienstleister, der den Kauf und Verkauf von Wertpapieren oder anderen Finanzinstrumenten für seine Kunden ausführt. Für diese Vermittlung erhebt er in der Regel Kommissionen oder verdient am Spread.",
    artikelSlug: "schweizer-broker-vergleich",
  },
  {
    begriff: "Bullenmarkt",
    definition: "Ein Bullenmarkt bezeichnet eine anhaltende Phase steigender Kurse mit überwiegend optimistischer Marktstimmung. Anleger erwarten in dieser Phase weiter steigende Preise und sind eher bereit, Risiken einzugehen.",
  },
  {
    begriff: "Buy and Hold",
    definition: "Buy and Hold ist eine langfristige Anlagestrategie, bei der Wertpapiere gekauft und über Jahre oder Jahrzehnte gehalten werden, unabhängig von kurzfristigen Kursschwankungen. Sie setzt auf den langfristigen Wertzuwachs und spart Transaktionskosten.",
    artikelSlug: "buy-and-hold-vs-trading",
  },
  {
    begriff: "Cap-Gewinn",
    definition: "Ein Kapitalgewinn (Cap-Gewinn) entsteht, wenn ein Wertpapier zu einem höheren Preis verkauft wird als beim Kauf bezahlt wurde. Für private Anleger in der Schweiz sind solche Gewinne auf beweglichem Privatvermögen in der Regel steuerfrei.",
    artikelSlug: "privater-anleger-gewerbsmaessig",
  },
  {
    begriff: "Carry Trade",
    definition: "Beim Carry Trade nimmt ein Anleger einen Kredit in einer Währung mit niedrigem Zins auf und investiert in eine Anlage mit höherem Zins. Der Gewinn ergibt sich aus der Zinsdifferenz, birgt aber ein Wechselkursrisiko.",
    artikelSlug: "carry-trade-grundlagen",
  },
  {
    begriff: "Contango",
    definition: "Contango beschreibt eine Terminmarktsituation, in der der Futures-Preis über dem aktuellen Kassapreis liegt. Beim Rollen von Kontrakten entstehen dadurch Rollverluste, was besonders Rohstoff-ETFs betrifft.",
    artikelSlug: "contango-backwardation",
  },
  {
    begriff: "Correlation",
    definition: "Die Korrelation misst, wie stark sich die Kurse zweier Anlagen im Gleichlauf bewegen, auf einer Skala von minus eins bis plus eins. Eine geringe oder negative Korrelation zwischen Portfoliopositionen verbessert die Diversifikation.",
    artikelSlug: "korrelationen-im-portfolio",
  },
  {
    begriff: "DA-1",
    definition: "Das Formular DA-1 dient in der Schweiz dazu, die pauschale Anrechnung ausländischer Quellensteuern auf Dividenden und Zinsen zu beantragen. So lässt sich eine Doppelbesteuerung von Erträgen aus dem Ausland reduzieren.",
    artikelSlug: "us-quellensteuer-da1",
  },
  {
    begriff: "DCA",
    definition: "Dollar Cost Averaging (DCA) bezeichnet das regelmässige Anlegen eines festen Betrags unabhängig vom aktuellen Kurs. Dadurch werden bei tiefen Kursen mehr und bei hohen Kursen weniger Anteile gekauft, was den durchschnittlichen Einstandspreis glättet.",
    artikelSlug: "dollar-cost-averaging-dca",
  },
  {
    begriff: "DeFi",
    definition: "Decentralized Finance (DeFi) bezeichnet Finanzdienstleistungen wie Kreditvergabe, Handel oder Zinsen, die ohne zentrale Vermittler über Smart Contracts auf einer Blockchain laufen. Nutzer behalten dabei die Kontrolle über ihre Vermögenswerte, tragen aber erhöhte technische Risiken.",
    artikelSlug: "defi-einsteiger-steuern",
  },
  {
    begriff: "Derivat",
    definition: "Ein Derivat ist ein Finanzinstrument, dessen Wert von einem zugrunde liegenden Basiswert wie einer Aktie, einem Rohstoff oder einem Index abgeleitet wird. Zu den Derivaten zählen unter anderem Optionen, Futures und Swaps.",
    artikelSlug: "was-sind-derivate",
  },
  {
    begriff: "Diversifikation",
    definition: "Diversifikation ist die Streuung von Kapital über verschiedene Anlagen, Branchen oder Regionen, um das Gesamtrisiko zu senken. Verluste einzelner Positionen können so durch andere ausgeglichen werden.",
    artikelSlug: "korrelationen-im-portfolio",
  },
  {
    begriff: "Dividende",
    definition: "Eine Dividende ist der Teil des Gewinns, den eine Aktiengesellschaft an ihre Aktionäre ausschüttet. Sie wird in der Regel jährlich beschlossen und ist für Schweizer Anleger als Vermögensertrag steuerpflichtig.",
    artikelSlug: "dividenden-schweizer-anleger",
  },
  {
    begriff: "Drawdown",
    definition: "Der Drawdown bezeichnet den prozentualen Rückgang eines Portfolios oder einer Anlage von einem Höchststand bis zum darauffolgenden Tiefstand. Der maximale Drawdown ist eine wichtige Kennzahl für das Verlustrisiko einer Strategie.",
    artikelSlug: "risikomanagement",
  },
  {
    begriff: "ETF",
    definition: "Ein Exchange Traded Fund (ETF) ist ein börsengehandelter Indexfonds, der einen Index wie den SMI oder MSCI World möglichst genau nachbildet. ETFs sind kostengünstig, breit gestreut und lassen sich wie Aktien fortlaufend handeln.",
    artikelSlug: "etf-vs-aktiver-fonds",
  },
  {
    begriff: "FIFO",
    definition: "First In, First Out (FIFO) ist eine Methode zur Zuordnung von Verkäufen zu Kaufzeitpunkten, bei der die zuerst gekauften Stücke als zuerst verkauft gelten. Sie ist in der Steuerberechnung von Kryptowährungen und Wertpapieren gebräuchlich.",
    artikelSlug: "fifo-vs-durchschnitt-dach",
  },
  {
    begriff: "Future",
    definition: "Ein Future ist ein standardisierter, börsengehandelter Terminkontrakt, der den Käufer und Verkäufer verpflichtet, einen Basiswert zu einem festgelegten Preis an einem künftigen Datum zu handeln. Futures werden zur Absicherung und Spekulation eingesetzt.",
    artikelSlug: "was-sind-derivate",
  },
  {
    begriff: "Gewerbsmässiger Wertschriftenhändler",
    definition: "Als gewerbsmässiger Wertschriftenhändler gilt in der Schweiz, wer den Wertpapierhandel über die private Vermögensverwaltung hinaus betreibt. In diesem Fall werden Kapitalgewinne steuerpflichtig, und es fallen Sozialabgaben an.",
    artikelSlug: "privater-anleger-gewerbsmaessig",
  },
  {
    begriff: "Handelsvolumen",
    definition: "Das Handelsvolumen gibt an, wie viele Anteile oder Kontrakte eines Wertpapiers in einem bestimmten Zeitraum gehandelt wurden. Ein hohes Volumen deutet auf gute Liquidität und stärkeres Marktinteresse hin.",
    artikelSlug: "handelsvolumen-verstehen",
  },
  {
    begriff: "Hebel",
    definition: "Der Hebel (Leverage) ermöglicht es, mit wenig Eigenkapital eine grosse Position zu kontrollieren, indem Fremdkapital eingesetzt wird. Er vergrössert sowohl mögliche Gewinne als auch Verluste überproportional.",
    artikelSlug: "hebel-und-margin",
  },
  {
    begriff: "Hot Wallet",
    definition: "Ein Hot Wallet ist eine mit dem Internet verbundene Krypto-Wallet, die schnellen Zugriff auf Coins ermöglicht. Wegen der Online-Verbindung ist es bequem für den Handel, aber anfälliger für Hackerangriffe als ein Cold Wallet.",
    artikelSlug: "krypto-wallets-hot-cold",
  },
  {
    begriff: "Cold Wallet",
    definition: "Ein Cold Wallet bewahrt Kryptowährungen offline auf, etwa auf einem Hardware-Gerät oder Papier. Diese Trennung vom Internet bietet hohen Schutz vor Diebstahl und eignet sich für die langfristige Aufbewahrung grösserer Bestände.",
    artikelSlug: "krypto-sicher-aufbewahren",
  },
  {
    begriff: "Index",
    definition: "Ein Index bildet die Wertentwicklung eines Korbs ausgewählter Wertpapiere ab, etwa der grössten Schweizer Aktien im SMI. Er dient als Vergleichsmassstab für die Performance und als Basis für Indexfonds und ETFs.",
  },
  {
    begriff: "KGV",
    definition: "Das Kurs-Gewinn-Verhältnis (KGV) setzt den Aktienkurs ins Verhältnis zum Gewinn je Aktie. Es zeigt, wie viele Jahresgewinne im Kurs eingepreist sind, und dient als grobe Kennzahl zur Bewertung einer Aktie.",
    artikelSlug: "kgv-verstehen",
  },
  {
    begriff: "Korrektur",
    definition: "Eine Korrektur ist ein Kursrückgang von etwa 10 bis 20 Prozent von einem vorherigen Hoch. Sie gilt als normaler Bestandteil von Marktzyklen und ist weniger ausgeprägt als ein Bärenmarkt.",
  },
  {
    begriff: "Kryptowährung",
    definition: "Eine Kryptowährung ist ein digitaler Vermögenswert, der auf einer Blockchain basiert und durch Kryptografie gesichert wird. Bekannte Beispiele sind Bitcoin und Ethereum, die ohne zentrale Instanz wie eine Bank funktionieren.",
    artikelSlug: "krypto-versteuern-leitfaden-ch",
  },
  {
    begriff: "Limit-Order",
    definition: "Eine Limit-Order ist ein Kauf- oder Verkaufsauftrag, der nur zu einem festgelegten oder besseren Preis ausgeführt wird. Sie schützt vor ungünstigen Kursen, garantiert aber keine Ausführung.",
    artikelSlug: "limit-order-erklaert",
  },
  {
    begriff: "Limit Up / Limit Down",
    definition: "Limit Up und Limit Down sind festgelegte Preisgrenzen, ab denen der Handel eines Wertpapiers oder Kontrakts vorübergehend ausgesetzt wird. Sie sollen extreme Kursausschläge und Panikreaktionen dämpfen.",
    artikelSlug: "limit-up-limit-down",
  },
  {
    begriff: "Liquidität",
    definition: "Liquidität beschreibt, wie schnell und kostengünstig ein Vermögenswert ge- oder verkauft werden kann, ohne den Preis stark zu bewegen. Liquide Märkte haben enge Spreads und hohes Handelsvolumen.",
    artikelSlug: "handelsvolumen-verstehen",
  },
  {
    begriff: "Long-Position",
    definition: "Eine Long-Position bedeutet, dass ein Anleger ein Wertpapier kauft, um von steigenden Kursen zu profitieren. Sie ist die klassische Form der Geldanlage und das Gegenstück zur Short-Position.",
    artikelSlug: "long-vs-short-erklaert",
  },
  {
    begriff: "Margin",
    definition: "Margin ist die Sicherheitsleistung, die ein Anleger hinterlegen muss, um eine gehebelte Position zu eröffnen oder zu halten. Reicht die Margin nicht mehr aus, kann es zu einem Margin Call oder zur Zwangsliquidation kommen.",
    artikelSlug: "hebel-und-margin",
  },
  {
    begriff: "Marktkapitalisierung",
    definition: "Die Marktkapitalisierung ist der Gesamtwert aller Aktien eines Unternehmens und ergibt sich aus dem Aktienkurs multipliziert mit der Anzahl ausstehender Aktien. Sie dient zur Einordnung der Unternehmensgrösse in Small, Mid und Large Cap.",
    artikelSlug: "marktkapitalisierung-verstehen",
  },
  {
    begriff: "Market-Order",
    definition: "Eine Market-Order ist ein Auftrag, ein Wertpapier sofort zum nächstbesten verfügbaren Kurs zu kaufen oder zu verkaufen. Sie wird in der Regel rasch ausgeführt, der genaue Preis ist jedoch nicht garantiert.",
    artikelSlug: "order-arten-im-trading",
  },
  {
    begriff: "Mean Reversion",
    definition: "Mean Reversion ist eine Strategie, die darauf setzt, dass Kurse nach starken Ausschlägen tendenziell zu ihrem Mittelwert zurückkehren. Anleger kaufen bei übermässig gefallenen und verkaufen bei übermässig gestiegenen Kursen.",
    artikelSlug: "mean-reversion-vs-trendfolge",
  },
  {
    begriff: "Mining",
    definition: "Mining bezeichnet das Erzeugen neuer Coins durch das Lösen rechenintensiver Aufgaben, mit denen Transaktionen einer Proof-of-Work-Blockchain validiert werden. Die Miner erhalten dafür eine Belohnung in der jeweiligen Kryptowährung.",
    artikelSlug: "mining-steuern-dach",
  },
  {
    begriff: "NFT",
    definition: "Ein Non-Fungible Token (NFT) ist ein einzigartiges, nicht austauschbares digitales Zertifikat auf einer Blockchain, das Eigentum an einem digitalen oder physischen Gut nachweist. NFTs werden etwa für digitale Kunst, Sammelobjekte oder Spielgegenstände genutzt.",
    artikelSlug: "nft-steuern-dach",
  },
  {
    begriff: "Option",
    definition: "Eine Option gibt dem Inhaber das Recht, aber nicht die Pflicht, einen Basiswert zu einem festgelegten Preis innerhalb einer bestimmten Frist zu kaufen (Call) oder zu verkaufen (Put). Für dieses Recht zahlt er eine Prämie.",
    artikelSlug: "optionen-verstehen",
  },
  {
    begriff: "Orderbuch",
    definition: "Das Orderbuch listet alle offenen Kauf- und Verkaufsaufträge eines Wertpapiers mit ihren Preisen und Mengen auf. Es zeigt Angebot und Nachfrage und gibt Hinweise auf die Liquidität und mögliche Preisbewegungen.",
    artikelSlug: "orderbuch-lesen",
  },
  {
    begriff: "Pairs Trading",
    definition: "Pairs Trading ist eine marktneutrale Strategie, bei der gleichzeitig eine Aktie long und eine korrelierte Aktie short gehandelt wird. Der Gewinn ergibt sich aus der relativen Kursentwicklung der beiden Titel zueinander.",
    artikelSlug: "pairs-trading",
  },
  {
    begriff: "Pip",
    definition: "Ein Pip ist die kleinste übliche Kursbewegungseinheit im Devisenhandel, meist die vierte Nachkommastelle eines Währungspaares. Er dient zur Messung von Kursgewinnen und -verlusten sowie zur Berechnung des Spreads.",
    artikelSlug: "was-ist-ein-pip",
  },
  {
    begriff: "Portfolio",
    definition: "Ein Portfolio ist die Gesamtheit aller Anlagen eines Investors, etwa Aktien, Anleihen, ETFs und Kryptowährungen. Seine Zusammensetzung bestimmt das Verhältnis von Rendite und Risiko.",
    artikelSlug: "portfolio-rebalancing",
  },
  {
    begriff: "Positionsgrösse",
    definition: "Die Positionsgrösse legt fest, wie viel Kapital in einen einzelnen Trade investiert wird. Eine durchdachte Berechnung anhand des akzeptierten Risikos ist zentral für das Risikomanagement.",
    artikelSlug: "positionsgroesse-berechnen",
  },
  {
    begriff: "Quellensteuer",
    definition: "Die Quellensteuer ist eine Steuer, die direkt an der Quelle der Auszahlung von Erträgen wie Dividenden oder Zinsen einbehalten wird. Bei ausländischen Anlagen kann ein Teil über Doppelbesteuerungsabkommen zurückgefordert werden.",
    artikelSlug: "us-quellensteuer-zurueckholen",
  },
  {
    begriff: "Rebalancing",
    definition: "Rebalancing ist das periodische Zurücksetzen eines Portfolios auf die ursprünglich gewünschte Gewichtung der Anlageklassen. Dabei werden überproportional gewachsene Positionen reduziert und untergewichtete aufgestockt.",
    artikelSlug: "portfolio-rebalancing",
  },
  {
    begriff: "Rendite",
    definition: "Die Rendite ist der prozentuale Ertrag einer Anlage über einen bestimmten Zeitraum, bezogen auf das eingesetzte Kapital. Sie umfasst Kursgewinne sowie laufende Erträge wie Dividenden oder Zinsen.",
  },
  {
    begriff: "Risikomanagement",
    definition: "Risikomanagement umfasst alle Massnahmen, mit denen ein Anleger Verluste begrenzt, etwa durch Stop-Loss-Orders, Positionsgrössen und Diversifikation. Es ist die Grundlage für langfristig nachhaltiges Trading.",
    artikelSlug: "risikomanagement",
  },
  {
    begriff: "Säule 3a",
    definition: "Die Säule 3a ist die gebundene private Vorsorge in der Schweiz, deren Einzahlungen bis zu einem jährlichen Maximalbetrag vom steuerbaren Einkommen abgezogen werden können. Das Guthaben kann auch in Wertpapiere oder ETFs investiert werden.",
    artikelSlug: "saeule-3a-etf",
  },
  {
    begriff: "Sharpe Ratio",
    definition: "Die Sharpe Ratio misst die risikoadjustierte Rendite einer Anlage, indem sie die Überrendite gegenüber dem risikolosen Zins durch die Schwankungsbreite teilt. Ein höherer Wert bedeutet ein besseres Verhältnis von Ertrag zu Risiko.",
    artikelSlug: "sharpe-ratio-erklaert",
  },
  {
    begriff: "Short-Position",
    definition: "Bei einer Short-Position verkauft ein Anleger ein geliehenes Wertpapier, um es später günstiger zurückzukaufen und von fallenden Kursen zu profitieren. Das Verlustrisiko ist theoretisch unbegrenzt, da Kurse beliebig steigen können.",
    artikelSlug: "long-vs-short-erklaert",
  },
  {
    begriff: "Short Squeeze",
    definition: "Ein Short Squeeze entsteht, wenn ein steigender Kurs Leerverkäufer zum Eindecken zwingt, was die Nachfrage und damit den Kurs weiter antreibt. Dies kann zu sehr starken, kurzfristigen Kursanstiegen führen.",
    artikelSlug: "short-squeeze-erklaert",
  },
  {
    begriff: "Slippage",
    definition: "Slippage ist die Differenz zwischen dem erwarteten und dem tatsächlich erzielten Ausführungspreis eines Trades. Sie tritt vor allem bei volatilen Märkten oder geringer Liquidität auf und verschlechtert das Handelsergebnis.",
    artikelSlug: "slippage-erklaert",
  },
  {
    begriff: "Spot-ETF",
    definition: "Ein Spot-ETF hält den zugrunde liegenden Basiswert physisch, etwa echte Bitcoin, statt ihn über Derivate abzubilden. Anleger erhalten so ein an der Börse handelbares Engagement, das eng dem Kassakurs folgt.",
    artikelSlug: "spot-etf-erklaert",
  },
  {
    begriff: "Spread",
    definition: "Der Spread ist die Differenz zwischen dem Geldkurs (Bid) und dem Briefkurs (Ask) eines Wertpapiers. Er stellt eine indirekte Handelskosten dar und ist bei liquiden Werten in der Regel enger.",
    artikelSlug: "spreads-erklaert",
  },
  {
    begriff: "Stablecoin",
    definition: "Ein Stablecoin ist eine Kryptowährung, deren Wert an einen stabilen Bezug wie den US-Dollar oder Euro gekoppelt ist. Er soll die Kursschwankungen typischer Kryptowährungen vermeiden und dient als Wertaufbewahrung und Zahlungsmittel im Krypto-Ökosystem.",
    artikelSlug: "stablecoins-erklaert",
  },
  {
    begriff: "Staking",
    definition: "Beim Staking werden Kryptowährungen in einer Proof-of-Stake-Blockchain hinterlegt, um das Netzwerk zu sichern und Transaktionen zu validieren. Als Gegenleistung erhalten die Teilnehmer regelmässige Belohnungen, die steuerlich als Ertrag gelten können.",
    artikelSlug: "staking-steuern-dach",
  },
  {
    begriff: "Stempelabgabe",
    definition: "Die eidgenössische Stempelabgabe ist eine schweizerische Steuer auf den Handel mit Wertpapieren, die beim Kauf und Verkauf über inländische Broker anfällt. Der Satz unterscheidet sich zwischen inländischen und ausländischen Titeln.",
    artikelSlug: "schweizer-stempelabgabe",
  },
  {
    begriff: "Stop-Loss",
    definition: "Eine Stop-Loss-Order verkauft eine Position automatisch, sobald ein festgelegter Kurs unterschritten wird, um Verluste zu begrenzen. Sie ist ein zentrales Werkzeug des Risikomanagements.",
    artikelSlug: "stop-loss-richtig-setzen",
  },
  {
    begriff: "Swap-Kosten",
    definition: "Swap-Kosten, auch Finanzierungs- oder Rollover-Gebühren, fallen beim Halten gehebelter Positionen über Nacht an. Sie ergeben sich aus den Zinsdifferenzen der gehandelten Instrumente und können je nach Richtung positiv oder negativ sein.",
    artikelSlug: "was-sind-swap-kosten",
  },
  {
    begriff: "Swing Trading",
    definition: "Swing Trading ist eine Handelsweise, bei der Positionen über mehrere Tage bis Wochen gehalten werden, um mittelfristige Kursbewegungen auszunutzen. Sie liegt zwischen dem kurzfristigen Daytrading und dem langfristigen Investieren.",
    artikelSlug: "swing-trading-erklaert",
  },
  {
    begriff: "Thesaurierend",
    definition: "Ein thesaurierender Fonds oder ETF legt vereinnahmte Dividenden und Zinsen automatisch wieder an, statt sie auszuschütten. Dadurch profitiert der Anleger vom Zinseszinseffekt, ohne selbst reinvestieren zu müssen.",
    artikelSlug: "thesaurierend-vs-ausschuettend",
  },
  {
    begriff: "Trailing Stop",
    definition: "Ein Trailing Stop ist eine Stop-Loss-Order, die dem Kurs in eine günstige Richtung folgt und ihren Abstand beibehält. So sichert sie aufgelaufene Gewinne, ohne die Position bei normalen Schwankungen vorzeitig zu schliessen.",
    artikelSlug: "stop-loss-richtig-setzen",
  },
  {
    begriff: "Trendfolge",
    definition: "Trendfolge ist eine Strategie, die darauf setzt, bestehende Kurstrends zu identifizieren und in deren Richtung zu handeln. Anleger kaufen in Aufwärtstrends und verkaufen oder leerverkaufen in Abwärtstrends.",
    artikelSlug: "trendfolge-strategien",
  },
  {
    begriff: "Value Investing",
    definition: "Value Investing ist ein Anlagestil, der unterbewertete Aktien mit soliden Fundamentaldaten sucht, deren Kurs unter dem inneren Wert liegt. Ziel ist es, langfristig vom Aufholen des Marktpreises zu profitieren.",
    artikelSlug: "value-investing-basics",
  },
  {
    begriff: "Verrechnungssteuer",
    definition: "Die Verrechnungssteuer ist eine schweizerische Quellensteuer von 35 Prozent auf Erträge wie Dividenden und Zinsen. Wer die Erträge korrekt deklariert, bekommt sie vollständig zurückerstattet oder mit der Steuer verrechnet.",
    artikelSlug: "verrechnungssteuer-schweiz",
  },
  {
    begriff: "Vermögenssteuer",
    definition: "Die Vermögenssteuer ist eine kantonale und kommunale Steuer in der Schweiz auf das Nettovermögen einer Person, einschliesslich Wertpapieren und Krypto-Beständen. Die Sätze und Freibeträge unterscheiden sich je nach Kanton.",
    artikelSlug: "vermoegenssteuer-schweiz",
  },
  {
    begriff: "VIX",
    definition: "Der VIX ist ein Index, der die vom Markt erwartete Schwankungsbreite des US-Aktienindex S&P 500 für die nächsten 30 Tage misst. Er gilt als Angstbarometer, da er in unsicheren Phasen stark ansteigt.",
    artikelSlug: "vix-volatilitaet",
  },
  {
    begriff: "Volatilität",
    definition: "Volatilität beschreibt das Ausmass der Kursschwankungen eines Wertpapiers über einen bestimmten Zeitraum. Eine hohe Volatilität bedeutet grössere Preisausschläge und damit höhere Chancen, aber auch höhere Risiken.",
    artikelSlug: "volatilitaet-verstehen",
  },
  {
    begriff: "Wallet",
    definition: "Eine Wallet ist eine digitale Brieftasche, die die kryptografischen Schlüssel zur Verwaltung von Kryptowährungen speichert. Man unterscheidet zwischen Hot Wallets mit Internetverbindung und Cold Wallets zur Offline-Aufbewahrung.",
    artikelSlug: "krypto-wallets-hot-cold",
  },
  {
    begriff: "Zinseszins",
    definition: "Der Zinseszinseffekt entsteht, wenn Erträge wieder angelegt werden und ihrerseits Erträge erwirtschaften. Über lange Zeiträume führt er zu einem exponentiellen Wachstum des angelegten Kapitals.",
  },
  {
    begriff: "Anleihe",
    definition: "Eine Anleihe ist ein verzinsliches Wertpapier, mit dem ein Staat oder Unternehmen Fremdkapital aufnimmt. Der Anleger erhält während der Laufzeit Zinsen und am Ende den Nennwert zurück.",
  },
  {
    begriff: "Daytrading",
    definition: "Daytrading bezeichnet den Handel, bei dem Positionen innerhalb desselben Handelstages eröffnet und wieder geschlossen werden. Ziel ist es, von kleinen, kurzfristigen Kursbewegungen zu profitieren, was hohe Aufmerksamkeit und Disziplin erfordert.",
  },
  {
    begriff: "Fonds",
    definition: "Ein Fonds bündelt das Kapital vieler Anleger und investiert es nach festgelegten Regeln in Wertpapiere wie Aktien oder Anleihen. Aktiv verwaltete Fonds versuchen, den Markt zu schlagen, während passive Fonds einen Index nachbilden.",
    artikelSlug: "etf-vs-aktiver-fonds",
  },
  {
    begriff: "Hebelprodukt",
    definition: "Ein Hebelprodukt ist ein Derivat, das die Kursbewegung eines Basiswerts überproportional abbildet. Dazu zählen etwa Optionsscheine, Knock-out-Zertifikate und CFDs, die hohe Gewinne, aber auch Totalverluste ermöglichen.",
    artikelSlug: "hebel-und-margin",
  },
  {
    begriff: "Kassakurs",
    definition: "Der Kassakurs (Spot-Preis) ist der aktuelle Marktpreis, zu dem ein Vermögenswert sofort gekauft oder verkauft werden kann. Er bildet die Grundlage für die Bewertung von Termin- und Derivatgeschäften.",
    artikelSlug: "spot-etf-erklaert",
  },
  {
    begriff: "Trading-Tagebuch",
    definition: "Ein Trading-Tagebuch ist eine systematische Aufzeichnung aller Trades mit Einstieg, Ausstieg, Grösse und Begründung. Es hilft, eigene Fehler zu erkennen, die Strategie zu verbessern und diszipliniert zu handeln.",
    artikelSlug: "trading-tagebuch-fuehren",
  },
  {
    begriff: "Transaktionskosten",
    definition: "Transaktionskosten sind alle Gebühren, die beim Handel anfallen, etwa Kommissionen, Spreads, Börsengebühren und Steuern. Sie schmälern die Rendite und sollten bei jeder Handelsstrategie berücksichtigt werden.",
    artikelSlug: "wahre-kosten-eines-trades",
  },
  {
    begriff: "Calendar Spread",
    definition: "Ein Calendar Spread ist eine Optionsstrategie, bei der zwei Optionen mit gleichem Basispreis, aber unterschiedlicher Laufzeit kombiniert werden. Der Trader profitiert vom unterschiedlichen Zeitwertverfall der beiden Kontrakte.",
    artikelSlug: "calendar-spreads",
  },
  {
    begriff: "Cash and Carry",
    definition: "Cash and Carry ist eine Arbitragestrategie, bei der ein Vermögenswert am Kassamarkt gekauft und gleichzeitig per Future verkauft wird. Der Gewinn ergibt sich aus der Differenz zwischen Kassa- und Terminpreis abzüglich der Haltekosten.",
    artikelSlug: "bitcoin-cash-and-carry",
  },
  {
    begriff: "KESt",
    definition: "Die Kapitalertragsteuer (KESt) ist die österreichische Steuer auf Kapitalerträge wie Zinsen, Dividenden und realisierte Kursgewinne. Sie wird in der Regel direkt von der depotführenden Stelle einbehalten.",
    artikelSlug: "oesterreich-kest-erklaert",
  },
];
