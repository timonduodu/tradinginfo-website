// Generiert beim Build für jeden Artikel ein individuelles OG-Image (1200×630)
// mit Titel, Kategorie und Branding — für schönere Vorschauen auf X/LinkedIn/WhatsApp.
import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export async function getStaticPaths() {
  const now = new Date();
  const posts = (await getCollection('blog')).filter(post => post.data.pubDate <= now);
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

interface Props {
  post: CollectionEntry<'blog'>;
}

// Fonts einmal laden (Modul-Scope, wird über alle Seiten wiederverwendet)
const fontsDir = path.resolve('./src/assets/fonts');
const [fraunces, interRegular, interBold] = await Promise.all([
  readFile(path.join(fontsDir, 'Fraunces-Bold.ttf')),
  readFile(path.join(fontsDir, 'Inter-Regular.ttf')),
  readFile(path.join(fontsDir, 'Inter-Bold.ttf')),
]);

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as Props;
  const title = post.data.title;
  // Lange Titel etwas kleiner setzen
  const fontSize = title.length > 70 ? 52 : title.length > 45 ? 60 : 72;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          backgroundColor: '#0a2540',
          backgroundImage: 'linear-gradient(135deg, #0a2540 0%, #103a63 100%)',
          color: '#faf8f5',
          fontFamily: 'Inter',
        },
        children: [
          // Kopfzeile: Logo + Kategorie
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', alignItems: 'center', gap: '14px' },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            backgroundColor: '#faf8f5',
                            color: '#0a2540',
                            fontFamily: 'Fraunces',
                            fontWeight: 700,
                            fontSize: '34px',
                            padding: '4px 14px',
                          },
                          children: 'CH',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: { fontFamily: 'Fraunces', fontWeight: 700, fontSize: '36px' },
                          children: 'TradingWissen',
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: '22px',
                      fontWeight: 700,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      border: '2px solid rgba(250, 248, 245, 0.4)',
                      padding: '8px 20px',
                    },
                    children: post.data.category,
                  },
                },
              ],
            },
          },
          // Titel
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                fontFamily: 'Fraunces',
                fontWeight: 700,
                fontSize: `${fontSize}px`,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                maxWidth: '1020px',
              },
              children: title,
            },
          },
          // Fusszeile
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '24px',
                color: 'rgba(250, 248, 245, 0.75)',
              },
              children: [
                { type: 'div', props: { style: { display: 'flex' }, children: 'tradingwissen.ch' } },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex' },
                    children: 'Unabhängige Trading-Information aus der Schweiz',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Fraunces', data: fraunces, weight: 700, style: 'normal' },
        { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
