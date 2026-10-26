// Turns the client build in dist/ into one real HTML file per page, so search
// engines and AI crawlers see the content without running JavaScript.
//   1. `vite build` writes dist/index.html and the hashed assets.
//   2. `vite build --ssr` writes dist-server/entry-server.js.
//   3. This script renders every path into the template, then writes
//      404.html, sitemap.xml and robots.txt. A 404.html also turns off
//      Cloudflare Pages' single-page fallback, so unknown URLs return a real 404.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = resolve('dist');
const server = resolve('dist-server');
const template = await readFile(join(dist, 'index.html'), 'utf8');
const { render, PATHS, SITE_URL } = await import(pathToFileURL(join(server, 'entry-server.js')).href);

const HEAD = /<!--app-head-->[\s\S]*?<!--\/app-head-->/;
if (!HEAD.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html is missing the <!--app-head--> markers or the empty root div');
}

function page(path) {
  const { html, head } = render(path);
  return template.replace(HEAD, head).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

async function write(file, contents) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, contents);
}

for (const path of PATHS) {
  await write(join(dist, path, 'index.html'), page(path));
  console.log('prerendered', path);
}
await write(join(dist, '404.html'), page('/404/'));
console.log('prerendered /404.html');

const today = new Date().toISOString().slice(0, 10);
const urls = PATHS.map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
await write(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
);
await write(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`wrote sitemap.xml (${PATHS.length} URLs) and robots.txt`);

await rm(server, { recursive: true, force: true });
