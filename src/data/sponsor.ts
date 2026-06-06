// ============================================================
// Zentrale Sponsor-Konfiguration — Quentra (Prop Firm des Betreibers)
//
// AKTIV seit Juni 2026 — Live-Site: https://quentra.pages.dev/
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
  /** Kurze Fakten-Chips (nur im Sidebar-Format gerendert) */
  chips?: string[];
  bgColor: string;
  accentColor: string;
}

export const sponsor = {
  aktiv: true,
  name: 'Quentra',
  url: 'https://quentra.pages.dev/?ref=tradingwissen',

  // Eigenwerbungs-Hinweis: Quentra gehört dem Betreiber dieser Website.
  // Wird bei aktiv=true automatisch im Footer-Disclaimer ergänzt (Transparenz).
  eigenwerbung: true,

  // Texte basieren auf den Konditionen der Live-Site (quentra.pages.dev).
  // Design: echtes Quentra-Branding — Grün-Schwarz (#0b0f0e) mit Grün-Akzent
  // (#0e9f6e), wie auf der Live-Site. Gerendert als eigenständiger Werbebanner
  // (Logo, Button-CTA) in AdSlot.astro, bewusst NICHT im Look der Website.
  ads: {
    top: {
      sponsor: 'QUENTRA',
      headline: 'Trade mit unserem Kapital',
      subline: '90% Profit-Split ab Tag 1 · Kein Zeitlimit · Konten bis 200k',
      cta: 'Challenge starten',
      bgColor: '#0b0f0e',
      accentColor: '#0e9f6e',
    },
    middle: {
      sponsor: 'QUENTRA — PROP TRADING',
      headline: 'Dein Skill. Unser Kapital.',
      subline: 'Beweise dich in der Challenge und trade ein Funded-Konto mit 90% Profit-Split',
      cta: 'Mehr erfahren',
      bgColor: '#0b0f0e',
      accentColor: '#0e9f6e',
    },
    bottom: {
      sponsor: 'QUENTRA',
      headline: 'Bereit für den nächsten Schritt?',
      subline: 'Vom Privattrader zum Funded Trader — Auszahlungen alle 14 Tage',
      cta: 'Jetzt informieren',
      bgColor: '#0b0f0e',
      accentColor: '#0e9f6e',
    },
    sidebar: {
      sponsor: 'QUENTRA',
      headline: 'Prop Trading ohne Zeitlimit',
      subline: 'Trade unser Kapital und behalte 90% des Gewinns',
      chips: ['90% Split', 'Auszahlung alle 14 Tage', 'Bis 400k skalierbar'],
      cta: 'Challenge starten',
      bgColor: '#0b0f0e',
      accentColor: '#0e9f6e',
    },
  } satisfies Record<string, SponsorAd>,
};
