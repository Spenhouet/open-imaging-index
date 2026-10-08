import { getCatalog } from '#lib/server/catalog.js';

// The whole catalog as JSON for scripts and other tools. README HTML is left out.
export const prerender = true;

export function GET() {
  const { datasets, licenses, vocab } = getCatalog();
  const body = {
    license: 'CC0-1.0',
    license_note: 'Quotes from license texts and dataset citations belong to their authors.',
    disclaimer:
      'License breakdowns are interpretations, not legal advice. Read the original license of each dataset and confirm your use is allowed. No warranty and, to the extent permitted by law, no liability. See /disclaimer/.',
    datasets: datasets.map(({ readmeHtml: _html, licenses: uses, ...d }) => ({
      ...d,
      licenses: uses.map((u) => ({ id: u.license.id, applies_to: u.applies_to, url: u.url, note: u.note }))
    })),
    licenses,
    vocab
  };
  return new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json' } });
}
