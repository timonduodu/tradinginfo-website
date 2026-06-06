// Kompaktes Glossar als JSON für die Tooltip-Funktion in Artikeln
import type { APIRoute } from 'astro';
import { glossar } from '../data/glossar';
import { glossarAnchor } from '../data/glossar-anchor';

export const GET: APIRoute = () => {
  const data = glossar.map(e => ({
    b: e.begriff,
    d: e.definition,
    a: glossarAnchor(e.begriff),
  }));
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
