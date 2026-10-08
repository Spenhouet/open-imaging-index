// Times the Explore computations on a summaries.json. Usage: bun scripts/profile-explore.ts <summaries.json>
import { readFileSync } from 'node:fs';
import { CHARTS, breakdown, coverage, summarize } from '../src/lib/catalog/cohort';
import { emptyFilters, makeSearch, run } from '../src/lib/catalog/filter';
import { loadCatalog } from '../src/lib/catalog/load';

const datasets = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const { vocab } = loadCatalog().catalog;
const search = makeSearch(datasets);
const time = (label: string, fn: () => unknown) => {
  const t = performance.now();
  fn();
  console.log(label.padEnd(28), (performance.now() - t).toFixed(0), 'ms');
};
for (const f of [emptyFilters(), { ...emptyFilters(), facets: { modality: ['MR'] }, contrasts: ['FLAIR'] }]) {
  console.log('--- filters', JSON.stringify({ ...f.facets, contrasts: f.contrasts }));
  time('run', () => run(datasets, search, f, vocab));
  time('summarize', () => summarize(datasets, search, f, vocab, ['commercial_use']));
  for (const c of CHARTS) time(`breakdown ${c.id}`, () => breakdown(datasets, search, f, vocab, c));
  time('coverage', () => coverage(datasets, vocab));
}
