import { getCatalog } from '#lib/server/catalog.js';
import { SITE_URL } from '#lib/site.js';

export const prerender = true;

export function GET() {
  const { datasets, licenses } = getCatalog();
  const pages: { path: string; lastmod?: string }[] = [
    { path: '' },
    { path: 'explore/' },
    { path: 'licenses/' },
    { path: 'standard/' },
    { path: 'vocabulary/' },
    { path: 'contribute/' },
    { path: 'about/' },
    ...datasets.map((d) => ({ path: `datasets/${d.id}/`, lastmod: d.meta.verified.date })),
    ...licenses.map((l) => ({ path: `licenses/${l.id}/`, lastmod: l.verified.date }))
  ];
  const urls = pages
    .map((p) => `  <url><loc>${SITE_URL}/${p.path}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}</url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'content-type': 'application/xml' } });
}
