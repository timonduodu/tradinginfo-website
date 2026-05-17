// Diese Funktion wird täglich um 06:00 UTC (07:00 Schweizer Zeit im Sommer, 08:00 im Winter)
// von Vercel Cron aufgerufen. Sie triggert einen Rebuild der Seite,
// damit scheduled Posts am pubDate automatisch erscheinen.
//
// SETUP NACH DEPLOY:
// 1. Vercel Dashboard → Settings → Git → Deploy Hooks
// 2. Deploy Hook erstellen, Name: "daily-cron", Branch: main
// 3. Hook-URL kopieren (sieht aus wie: https://api.vercel.com/v1/integrations/deploy/prj_...)
// 4. Vercel Dashboard → Settings → Environment Variables
// 5. Variable hinzufügen: DEPLOY_HOOK_URL = (deine Hook-URL)
// 6. Optional: CRON_SECRET = (zufälliger String für Sicherheit)
// 7. Redeploy auslösen

export default async function handler(req, res) {
  // Optional: Schutz gegen unbefugte Aufrufe
  const authHeader = req.headers['authorization'];
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const deployHookUrl = process.env.DEPLOY_HOOK_URL;

  if (!deployHookUrl) {
    return res.status(500).json({
      error: 'DEPLOY_HOOK_URL nicht konfiguriert',
      hint: 'Setze die Environment Variable im Vercel Dashboard.'
    });
  }

  try {
    const response = await fetch(deployHookUrl, { method: 'POST' });
    const data = await response.json();
    return res.status(200).json({
      success: true,
      message: 'Daily rebuild getriggert',
      vercelResponse: data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Rebuild fehlgeschlagen',
      details: error.message
    });
  }
}
