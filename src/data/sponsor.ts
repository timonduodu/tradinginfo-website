// ============================================================
// Zentrale Sponsor-Konfiguration — Veltrade (Prop Firm des Betreibers)
//
// AKTIV seit Juni 2026 — Live-Site: https://veltrade.pages.dev/
// Konditionen (Stand Launch): 90% Profit-Split ab Tag 1, Auszahlung
// alle 14 Tage, Konten 10k–200k (skalierbar bis 400k), kein Zeitlimit.
//
// Zum Deaktivieren `aktiv` auf false setzen — die Werbeplätze zeigen
// dann wieder die neutralen Mock-Anzeigen ("Hier könnte Ihre Werbung
// stehen"). Bei Wechsel auf eine Custom Domain nur `url` anpassen.
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
  aktiv: true,
  name: 'Veltrade',
  url: 'https://veltrade.pages.dev/?ref=tradingwissen',

  // Eigenwerbungs-Hinweis: Veltrade gehört dem Betreiber dieser Website.
  // Wird bei aktiv=true automatisch im Footer-Disclaimer ergänzt (Transparenz).
  eigenwerbung: true,

  // Texte basieren auf den Konditionen der Live-Site (veltrade.pages.dev).
  // Design: dunkles Navy passend zur Website, gold als Akzent (seriös, edel).
  ads: {
    top: {
      sponsor: 'VELTRADE',
      headline: 'Trade mit unserem Kapital',
      subline: '90% Profit-Split ab Tag 1 · Kein Zeitlimit · Konten bis 200k',
      cta: 'Challenge starten →',
      bgColor: '#0a1f33',
      accentColor: '#d4af37',
    },
    middle: {
      sponsor: 'VELTRADE — PROP TRADING',
      headline: 'Dein Skill. Unser Kapital.',
      subline: 'Beweise dich in der Challenge und trade ein Funded-Konto mit 90% Profit-Split',
      cta: 'Mehr erfahren →',
      bgColor: '#0a1f33',
      accentColor: '#d4af37',
    },
    bottom: {
      sponsor: 'VELTRADE',
      headline: 'Bereit für den nächsten Schritt?',
      subline: 'Vom Privattrader zum Funded Trader — Auszahlungen alle 14 Tage',
      cta: 'Jetzt informieren →',
      bgColor: '#101418',
      accentColor: '#d4af37',
    },
    sidebar: {
      sponsor: 'VELTRADE',
      headline: 'Prop Trading ohne Zeitlimit',
      subline: 'Trade unser Kapital und behalte 90% des Gewinns',
      cta: 'Challenge starten →',
      bgColor: '#0a1f33',
      accentColor: '#d4af37',
    },
  } satisfies Record<string, SponsorAd>,
};
