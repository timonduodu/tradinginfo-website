# TradingWissen.ch

Deutschsprachige Trading-Info-Website für Schweizer Anleger. Astro 4 (SSG), deployed auf Vercel (Auto-Deploy bei Push auf `main`). Live: https://www.tradingwissen.ch

## Befehle

```bash
npm run dev        # Dev-Server (Suche funktioniert hier NICHT — Pagefind braucht den Build)
npm run build      # astro build && pagefind --site dist
npm run preview    # Gebaute Site lokal testen (inkl. Suche)
node scripts/optimize-images.mjs  # Neue Fotos in public/images/photos optimieren (max 1600px, q78)
```

## Architektur

- **Content:** `src/content/blog/*.md` — 80+ Artikel, Kategorien: Grundlagen/Broker/Strategien/Steuern/News/Krypto. Frontmatter-Schema in `src/content/config.ts`, inkl. `faq:` (FAQPage-Schema) und `featured:` (Startseiten-Rotation pro Kalenderwoche).
- **Scheduled Publishing:** Artikel mit `pubDate` in der Zukunft werden überall ausgefiltert. Vercel-Cron (06:00 UTC, `api/rebuild.js`) triggert täglich einen Rebuild, der fällige Artikel live schaltet.
- **OG-Images:** `src/pages/og/[slug].png.ts` generiert beim Build pro Artikel ein Bild (satori + sharp, Fonts in `src/assets/fonts/`).
- **Suche:** Pagefind, indiziert nur Seiten mit `data-pagefind-body` (Artikel + Glossar). UI auf `/suche`.
- **Daten:** `src/data/broker.ts` (Vergleichstabelle + Quiz), `src/data/glossar.ts` (87 Begriffe, A–Z-Seite + Tooltips via `/glossar.json`), `src/data/sponsor.ts` (Werbepartner-Schalter).
- **Sponsor/Werbung:** `sponsor.ts` → `aktiv: true` + URL aktiviert VeltaTrades-Anzeigen in allen AdSlots (gehört dem Betreiber; Footer zeigt dann automatisch Transparenz-Hinweis).
- **Dark Mode:** CSS-Variablen in `global.css` (`[data-theme='dark']`), Toggle im Header, Init-Script in BaseLayout vor First Paint. TradingView-Widgets rendern theme-abhängig neu (MutationObserver).
- **Consent:** GA4 lädt erst nach Zustimmung (`CookieBanner.astro` + `window.loadGA()` in BaseLayout). GA4-Events: `newsletter_click`, `outbound_click`, `ad_click`, `search`, `quiz_complete`.
- **Fonts:** Selbst gehostet (`public/fonts/` + `src/styles/fonts.css`) — KEIN Google-CDN einbinden (DSGVO).
- **APIs:** `api/visitors.js` (GA4-Besucherzahl für /werbung, braucht Env-Vars), `api/rebuild.js` (Cron).

## Konventionen

- Schweizer Schreibweise: **ss statt ß**, Zahlen mit Apostroph (13'300), Währung CHF
- Artikel-Links intern relativ: `/blog/<slug>`
- Autor bleibt "Redaktion" — keine erfundenen Autoren-Personas
- Neue Bilder IMMER erst durch `scripts/optimize-images.mjs`

## Gotchas

- **iCloud Drive:** Das Projekt liegt in iCloud. Bei Sync-Konflikten benennt iCloud Dateien in `name 2.ext` um und das Original verschwindet (ist mit package.json passiert). Bei "Datei nicht gefunden": nach `* 2.*`-Kopien suchen.
- Original-Fotos (unoptimiert) liegen als Backup in `../bilder-original-backup/`.
- `npm run dev`: Suche und `/glossar.json`-Tooltips funktionieren erst nach `npm run build` + `preview`.
