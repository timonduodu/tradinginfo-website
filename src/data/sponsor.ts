// ============================================================
// Zentrale Sponsor-Konfiguration — VeltaTrades (Prop Firm des Betreibers)
//
// AKTIVIERUNG (sobald die VeltaTrades-Website live ist):
//   1. `aktiv` auf true setzen
//   2. `url` mit der Live-URL füllen (idealerweise mit ?ref=tradingwissen)
//   3. Texte in `ads` an das finale Branding/Angebot anpassen
//      (Claims, Profit-Split, Challenge-Modelle von der Live-Site übernehmen)
//   4. npm run build → deployen
//
// Solange `aktiv: false` ist, zeigen die Werbeplätze weiterhin die
// neutralen Mock-Anzeigen mit "Hier könnte Ihre Werbung stehen".
// ============================================================

export interface SponsorAd {
  sponsor: string;
  headline: string;
  subline: string;
  cta: string;
  bgColor: string;
  accentColor: string;
}

export const sponsor = {
  aktiv: false,
  name: 'VeltaTrades',
  url: '', // TODO nach Launch: z.B. "https://veltatrades.com/?ref=tradingwissen"

  // Eigenwerbungs-Hinweis: VeltaTrades gehört dem Betreiber dieser Website.
  // Wird bei aktiv=true automatisch im Footer-Disclaimer ergänzt (Transparenz).
  eigenwerbung: true,

  // ENTWÜRFE — Texte werden nach dem Launch ans echte Branding angepasst.
  // Design: dunkles Navy passend zur Website, gold als Akzent (seriös, edel).
  ads: {
    top: {
      sponsor: 'VELTATRADES',
      headline: 'Trade mit unserem Kapital',
      subline: 'Prop Trading · Faire Bedingungen · Aus der Schweiz',
      cta: 'Challenge starten →',
      bgColor: '#0a1f33',
      accentColor: '#d4af37',
    },
    middle: {
      sponsor: 'VELTATRADES — PROP TRADING',
      headline: 'Dein Skill. Unser Kapital.',
      subline: 'Beweise dich in der Challenge und trade ein gefördertes Konto',
      cta: 'Mehr erfahren →',
      bgColor: '#0a1f33',
      accentColor: '#d4af37',
    },
    bottom: {
      sponsor: 'VELTATRADES',
      headline: 'Bereit für den nächsten Schritt?',
      subline: 'Vom Privattrader zum Funded Trader',
      cta: 'Jetzt informieren →',
      bgColor: '#101418',
      accentColor: '#d4af37',
    },
    sidebar: {
      sponsor: 'VELTATRADES',
      headline: 'Prop Trading aus der Schweiz',
      subline: 'Trade unser Kapital, behalte den Grossteil des Gewinns',
      cta: 'Challenge starten →',
      bgColor: '#0a1f33',
      accentColor: '#d4af37',
    },
  } satisfies Record<string, SponsorAd>,
};
