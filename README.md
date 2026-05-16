# tradinginfo.ch

Editoriale Trading-Informationsplattform für Schweizer Trader.

## 🚀 Schnellstart — von Null auf Live in 30 Minuten

### Was du brauchst (alles gratis)

1. **Node.js** installieren — https://nodejs.org (LTS-Version)
2. **GitHub-Account** — https://github.com (gratis)
3. **Vercel-Account** — https://vercel.com (mit GitHub einloggen)

### Schritt 1: Lokal ausprobieren

```bash
# In den Projekt-Ordner wechseln
cd tradinginfo-website

# Abhängigkeiten installieren (einmalig)
npm install

# Entwicklungsserver starten
npm run dev
```

Dann im Browser http://localhost:4321 öffnen. Du siehst die Seite!

### Schritt 2: Auf GitHub hochladen

1. Auf github.com einen neuen, leeren Repository erstellen: `tradinginfo-website`
2. Im Terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/tradinginfo-website.git
git push -u origin main
```

### Schritt 3: Auf Vercel deployen

1. Auf vercel.com einloggen
2. "Add New Project" klicken
3. Dein GitHub-Repo `tradinginfo-website` auswählen
4. Vercel erkennt Astro automatisch — einfach "Deploy" klicken
5. Nach ~1 Minute ist deine Seite live unter `tradinginfo-website-xxx.vercel.app`

### Schritt 4: Eigene Domain (~12 CHF/Jahr)

1. Domain bei Cloudflare oder Hostpoint.ch registrieren (`tradinginfo.ch`)
2. In Vercel: Settings → Domains → Add → `tradinginfo.ch` eingeben
3. Vercel zeigt dir DNS-Einstellungen — bei deinem Registrar eintragen
4. Nach ~10 Minuten ist die Seite unter deiner echten Domain live

## 📝 Neue Artikel schreiben

Erstelle eine neue Markdown-Datei in `src/content/blog/`:

```markdown
---
title: "Titel des Artikels"
description: "Kurze Beschreibung für Suchmaschinen (max. 160 Zeichen)"
pubDate: 2026-05-20
category: "Grundlagen"  # oder: Broker, Strategien, Steuern, News
author: "Timon"
readingTime: "5 Min. Lesezeit"
featured: false  # auf true setzen für den Hero-Artikel
---

Hier kommt dein Artikel-Text...

## Eine Überschrift

Lorem ipsum...
```

Nach jedem `git push` deployed Vercel automatisch die neue Version.

## 🎨 Anpassungen

- **Farben/Fonts:** `src/styles/global.css` — alle CSS-Variablen oben
- **Navigation:** `src/components/Header.astro`
- **Footer/Disclaimer:** `src/components/Footer.astro`
- **Werbeplätze:** Bestandteil der Layouts, gekennzeichnet als `.ad-slot`

## 📊 Analytics einrichten (Gratis)

### Google Analytics 4
1. Auf analytics.google.com einen Account erstellen
2. Tracking-ID kopieren (Format: `G-XXXXXXXXXX`)
3. In `src/layouts/BaseLayout.astro` den Tracking-Code aktivieren

### Google Search Console
1. search.google.com/search-console
2. Property hinzufügen → DNS-Verifizierung
3. Sitemap einreichen: `https://tradinginfo.ch/sitemap-index.xml`

## 💰 Werbung schalten

Die Werbeplätze sind bereits im Layout vorbereitet. Drei Optionen:

### 1. Google AdSense (passiv)
- Anmeldung bei adsense.google.com (braucht ~20 veröffentlichte Artikel)
- AdSense-Code in die `.ad-slot` divs einfügen

### 2. Direkte Werbedeals
- Unternehmen über `/werbung` kontaktieren lassen
- Eigene Banner-Bilder in `public/ads/` hochladen
- In Layouts statt der Platzhalter einbinden

### 3. Affiliate-Links
- Broker-Partnerprogramme: IBKR, Saxo, DEGIRO etc.
- Links in Artikeln einbauen
- Disclosure im Artikel (ist bereits automatisch eingebaut)

## ✅ Was schon drin ist

- ✅ Editoriales Layout mit Newspaper-Aesthetic
- ✅ Vollständig responsive (Mobile, Tablet, Desktop)
- ✅ SEO optimiert (Meta-Tags, Open Graph, Sitemap)
- ✅ RSS-Feed automatisch generiert
- ✅ Newsletter-Anmelde-Formular (Backend muss noch verbunden werden)
- ✅ 4 Werbe-Slot-Positionen pro Artikel
- ✅ Rechtliche Disclaimer (Anlageberatung-Haftungsausschluss)
- ✅ Werbe-Verkaufsseite für potenzielle Kunden
- ✅ 2 Beispielartikel als Vorlage

## 🔧 Was du noch tun musst

1. Domain registrieren
2. Auf Vercel deployen
3. Google Analytics 4 verbinden
4. Google Search Console verbinden
5. Newsletter-Service wählen (Buttondown, Beehiiv, oder MailerLite — alle gratis bis ~500 Subscriber) und Formular verbinden
6. Echtes Impressum + Datenschutzerklärung schreiben (gibt Generatoren wie datenschutz-generator.de)
7. Erste 5–10 Artikel veröffentlichen
8. Erste Werbekunden anschreiben (sobald du etwas Traffic hast)

## 🤝 Hilfe?

Wenn du irgendwo stecken bleibst — frag mich. Wir machen das zusammen.
