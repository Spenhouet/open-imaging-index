import { describe, expect, it } from 'vitest';
import { datasetCharts, type DatasetCharts } from './charts.js';
import { loadCatalog } from './load.js';
import { parseStats } from './stats.js';

const { catalog } = loadCatalog();

// Every row the page can show, across all measure variants.
function placed(c: DatasetCharts) {
  const v = <T>(vs: { rows: T[] }[]) => vs.flatMap((x) => x.rows);
  return [
    ...c.totals,
    ...Object.values(c.age).filter((r) => !!r),
    ...v(c.sex),
    ...(c.sexAgeNote?.rows ?? []),
    ...v(c.ageBins),
    ...v(c.pyramid),
    ...v(c.combos),
    ...c.breakdowns.flatMap((b) => v(b.variants)),
    ...c.crosses.flatMap((x) => v(x.variants)),
    ...c.other
  ];
}

describe('datasetCharts', () => {
  it('places every stats row exactly once, for every dataset', () => {
    for (const d of catalog.datasets) {
      const p = placed(datasetCharts(d.stats, catalog.vocab));
      expect(new Set(p).size, d.id).toBe(p.length);
      expect(p.length, d.id).toBe(d.stats.length);
    }
  });

  it('draws cross tables and age notes, and offers a measure switch', () => {
    const csv = `measure,by,value,source,where,note
subjects,,100,a,T1,
scans,,300,a,T1,
subjects,condition=AD,40,a,T1,
subjects,condition=CN,60,a,T1,
scans,condition=AD,120,a,T1,
age_mean,condition=AD,74.2,a,T1,
age_sd,condition=AD,6.1,a,T1,
subjects,condition=AD;sex=female,22,a,T2,
subjects,condition=CN;sex=female,35,a,T2,
subjects,condition=AD;sex=male;split=train,9,a,T3,
`;
    const c = datasetCharts(parseStats(csv).rows, catalog.vocab);
    const cond = c.breakdowns.find((b) => b.dim === 'condition')!;
    expect(cond.variants.map((v) => v.measure)).toEqual(['subjects', 'scans']);
    expect(cond.variants[0].data.find((i) => i.key === 'AD')?.note).toBe('Age mean 74.2 ± 6.1');
    expect(c.crosses).toHaveLength(1);
    expect(c.crosses[0].title).toBe('Condition by sex');
    expect(c.other.map((r) => r.value)).toEqual([9]);
  });
});
