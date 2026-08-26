/**
 * Pre-renders the legal routes to real static HTML.
 *
 * GitHub Pages has no SPA rewrite: it serves 404.html for unknown paths, so a
 * client-only /privacy answers with an HTTP 404 status and an empty shell.
 * Google Play's policy review (and any crawler) needs those URLs to return 200
 * with the policy text actually in the document, so we render them at build
 * time into dist/<route>/index.html, which Pages serves directly.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const ROUTES = [
  {
    path: '/privacy',
    title: 'AfyaQuest — Privacy Policy',
    description:
      'How the AfyaQuest Android app for Community Health Workers collects, uses, shares, and deletes personal information.',
  },
  {
    path: '/data-safety',
    title: 'AfyaQuest — Data Safety',
    description:
      'A plain-language disclosure of the data the AfyaQuest Android app collects, how it is shared and secured, and how to request deletion.',
  },
];

const { render } = await import(
  pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href
);

const template = await readFile(resolve(root, 'dist/index.html'), 'utf8');

for (const route of ROUTES) {
  const html = template
    .replace(
      '<title>AfyaQuest — Transforming Community Healthcare</title>',
      `<title>${route.title}</title>\n    <meta name="description" content="${route.description}" />\n    <link rel="canonical" href="https://afyaquest.com${route.path}" />`
    )
    .replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`);

  const out = resolve(root, `dist${route.path}/index.html`);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html, 'utf8');
  console.log(`prerendered ${route.path}`);
}
