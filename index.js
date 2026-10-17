const express = require('express');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
// Reads zero-ops's ROUTE_PREFIX env var (always injected, matching this Application's own slug) —
// falls back to '/node-app' if it's ever missing, so this branch keeps working the same way it
// always did for anyone not relying on the new application-route-prefix-awareness env var.
const PREFIX = process.env.ROUTE_PREFIX || '/node-app';

const homePage = (prefix) => `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Zero Ops Node Sample — Deploy OK</title>
  <style>
    body { font-family: -apple-system, system-ui, sans-serif; background: #f9fafb; margin: 0; }
    header { background: #fff; border-bottom: 1px solid #e5e7eb; padding: 16px 24px; font-weight: 700; font-size: 20px; color: #111827; }
    main { max-width: 640px; margin: 80px auto; text-align: center; padding: 0 16px; }
    .icon { width: 64px; height: 64px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 32px; }
    h1 { font-size: 32px; color: #111827; margin-bottom: 16px; }
    p { font-size: 16px; color: #4b5563; margin-bottom: 32px; }
    .card { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; text-align: left; margin-bottom: 32px; }
    .row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; }
    .row:last-child { margin-bottom: 0; }
    .label { color: #6b7280; }
    .value { font-family: monospace; color: #111827; }
    a.btn { display: inline-block; padding: 12px 24px; background: #635bff; color: #fff; border-radius: 8px; text-decoration: none; font-weight: 500; }
    footer { text-align: center; color: #9ca3af; font-size: 13px; padding: 24px; }
  </style>
</head>
<body>
  <header>Zero Ops Node Sample</header>
  <main>
    <div class="icon">&#10003;</div>
    <h1>Deploy realizado com sucesso</h1>
    <p>Se você está vendo esta página, o build e o deploy desta aplicação Node.js de exemplo via <strong>zero-ops</strong> funcionaram de ponta a ponta.</p>
    <div class="card">
      <div class="row"><span class="label">Servidor respondendo em</span><span class="value">${new Date().toISOString()}</span></div>
      <div class="row"><span class="label">Runtime</span><span class="value">node ${process.version}</span></div>
      <div class="row"><span class="label">Endpoint de teste</span><a class="value" href="${prefix}/api">GET /api</a></div>
    </div>
    <a class="btn" href="${prefix}/api">Testar /api</a>
  </main>
  <footer>zero-ops-node-app</footer>
</body>
</html>`;

router.get('/', (req, res) => res.type('html').send(homePage(PREFIX)));
router.get('/home', (req, res) => res.type('html').send(homePage(PREFIX)));

router.get('/api', (req, res) => res.json({ status: 'API is running' }));

router.get('/health', (req, res) => res.json({ status: 'UP' }));

app.use(PREFIX, router);

app.listen(port, () => {
  console.log(`zero-ops-node-app listening on port ${port}`);
});
