import { summaries } from '#lib/server/catalog.js';

export const prerender = true;

// Everything the catalog and Explore pages filter on, loaded by the browser after the first paint. Stats rows leave
// out empty and default fields to keep the file small; restoreSummaries in browse.svelte.ts puts them back.
export function GET() {
  const body = summaries().map((d) => ({
    ...d,
    stats: d.stats.map((r) => ({
      measure: r.measure,
      value: r.value,
      ...(Object.keys(r.by).length ? { by: r.by } : {}),
      ...(r.approx ? { approx: true } : {})
    }))
  }));
  return new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json' } });
}
