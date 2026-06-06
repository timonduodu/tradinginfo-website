// Einheitliche Anker-IDs für Glossar-Begriffe (Glossar-Seite + Tooltips)
export function glossarAnchor(begriff: string): string {
  return begriff
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
