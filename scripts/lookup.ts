// Finds ontology ids for a term via the EBI Ontology Lookup Service.
// Usage: bun run lookup "glioma" [mondo|uberon|hp|ncit]
const [query, ontology = 'mondo,hp,uberon'] = process.argv.slice(2);
if (!query) {
  console.error('Usage: bun run lookup "<term>" [mondo|uberon|hp|ncit]');
  process.exit(1);
}
const url = `https://www.ebi.ac.uk/ols4/api/search?q=${encodeURIComponent(query)}&ontology=${ontology}&rows=8&fieldList=obo_id,label,ontology_prefix`;
const res = await fetch(url);
const { response } = (await res.json()) as { response: { docs: { obo_id: string; label: string }[] } };
for (const d of response.docs) console.log(`${d.obo_id.padEnd(16)} ${d.label}`);
