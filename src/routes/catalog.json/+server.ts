import { getCatalog } from '#lib/server/catalog.js';

// The whole catalog as JSON for scripts and other tools. README HTML is left out.
export const prerender = true;

export function GET() {
  const { datasets, licenses, vocab } = getCatalog();
  const body = {
    license: 'CC0-1.0',
    datasets: datasets.map(({ readmeHtml: _html, licenses: uses, ...d }) => ({
      ...d,
      licenses: uses.map((u) => ({ id: u.license.id, applies_to: u.applies_to, url: u.url, note: u.note }))
    })),
    licenses,
    vocab
  };
  return new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json' } });
}
