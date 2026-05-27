// api/visitors.js
// Holt die Anzahl aktiver Nutzer der letzten 30 Tage (rollierend) aus Google Analytics 4.
// Verwendet KEINE externen Libraries — nur Node-Bordmittel (crypto, fetch).

import crypto from 'crypto';

let cache = { value: null, timestamp: 0 };
const CACHE_MS = 30 * 60 * 1000; // 30 Minuten

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getAccessToken(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };

  const unsigned =
    base64url(JSON.stringify(header)) + '.' + base64url(JSON.stringify(claim));

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsigned);
  signer.end();
  const signature = signer
    .sign(privateKey)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const jwt = unsigned + '.' + signature;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error('Token-Fehler: ' + txt);
  }
  const data = await res.json();
  return data.access_token;
}

async function fetchVisitors(propertyId, accessToken) {
  const url =
    'https://analyticsdata.googleapis.com/v1beta/properties/' +
    propertyId +
    ':runReport';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      metrics: [{ name: 'activeUsers' }],
    }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error('GA4-Fehler: ' + txt);
  }

  const data = await res.json();
  const value =
    data.rows && data.rows[0] && data.rows[0].metricValues[0]
      ? parseInt(data.rows[0].metricValues[0].value, 10)
      : 0;
  return value;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');

  try {
    const now = Date.now();
    if (cache.value !== null && now - cache.timestamp < CACHE_MS) {
      return res.status(200).json({ visitors: cache.value, cached: true });
    }

    const propertyId = process.env.GA_PROPERTY_ID;
    const clientEmail = process.env.GA_CLIENT_EMAIL;
    let privateKey = process.env.GA_PRIVATE_KEY;

    if (!propertyId || !clientEmail || !privateKey) {
      return res.status(500).json({ error: 'Environment-Variablen fehlen' });
    }

    if (privateKey.includes('\\n')) {
      privateKey = privateKey.replace(/\\n/g, '\n');
    }

    const token = await getAccessToken(clientEmail, privateKey);
    const visitors = await fetchVisitors(propertyId, token);

    cache = { value: visitors, timestamp: now };

    return res.status(200).json({ visitors, cached: false });
  } catch (err) {
    return res.status(500).json({ error: String(err.message || err) });
  }
}
