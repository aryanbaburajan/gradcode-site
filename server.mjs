import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const port = Number(process.env.PORT || 4173);
const routes = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/styles.css': ['styles.css', 'text/css; charset=utf-8'],
  '/app.js': ['app.js', 'text/javascript; charset=utf-8'],
  '/install': ['install', 'text/plain; charset=utf-8'],
  '/favicon.svg': ['favicon.svg', 'image/svg+xml'],
};

createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (path === '/releases/latest') {
    res.writeHead(302, { Location: process.env.RELEASE_URL || 'https://github.com/aryanbaburajan/gradcode/releases/tag/gradcode-v0.1.0' });
    return res.end();
  }
  const route = routes[path];
  if (!route) { res.writeHead(404); return res.end('Not found'); }
  try {
    const body = await readFile(new URL(`./public/${route[0]}`, import.meta.url));
    res.writeHead(200, { 'Content-Type': route[1], 'X-Content-Type-Options': 'nosniff' });
    res.end(body);
  } catch {
    res.writeHead(500);
    res.end('Unable to load page');
  }
}).listen(port, '0.0.0.0', () => console.log(`Gradcode: http://localhost:${port}`));
