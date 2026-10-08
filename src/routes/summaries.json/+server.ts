import { summaries } from '#lib/server/catalog.js';

export const prerender = true;

// Everything the catalog and Explore pages filter on, loaded by the browser after the first paint.
export function GET() {
  return new Response(JSON.stringify(summaries()), { headers: { 'content-type': 'application/json' } });
}
