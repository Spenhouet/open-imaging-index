import { describe, expect, it } from 'vitest';
import { CHARTS, breakdown, summarize, toggle, usability } from './cohort';
import { emptyFilters, makeSearch } from './filter';
import { parseStats } from './stats';
import type { DatasetSummary, VocabData } from './types';

const vocab = {
  dimensions: [
    { id: 'modality', label: '', description: '', values: 'vocab', combine: 'all', partition: false },
    { id: 'contrast', label: '', description: '', values: 'vocab', combine: 'all', partition: false },
    { id: 'contrast_set', label: '', description: '', values: 'contrast_set', combine: 'all', partition: true },
    { id: 'sex', label: '', description: '', values: 'vocab', combine: 'any', partition: true },
    { id: 'age', label: '', description: '', values: 'age_range', combine: 'any', partition: true },
    { id: 'anatomy', label: '', description: '', values: 'vocab', combine: 'any', partition: false },
    { id: 'condition', label: '', description: '', values: 'vocab', combine: 'any', partition: false }
  ],
  measures: [],
  terms: { modality: [], condition: [], anatomy: [], access: [] },
  licenseRules: {
    groups: [],
    rules: [{ id: 'commercial_use', group: 'use', label: 'Commercial use', question: '', good: 'yes' }],
    purposes: []
  }
} as unknown as VocabData;

function ds(id: string, csv: string, facets: Record<string, string[]>, commercial: 'yes' | 'no'): DatasetSummary {
  const { rows } = parseStats(`measure,by,value,source,where,note\n${csv}`);
  return {
    id,
    meta: { name: id, access: { type: 'open' }, year: 2020 } as DatasetSummary['meta'],
    stats: rows,
    facets,
    totals: Object.fromEntries(rows.filter((r) => !Object.keys(r.by).length).map((r) => [r.measure, r.value])),
    rules: { commercial_use: commercial } as DatasetSummary['rules'],
    purposes: [],
    licenseIds: [],
    searchText: id
  };
}

const a = ds(
  'a',
  'subjects,,100,p,,\nsubjects,sex=female,60,p,,\nsubjects,sex=male,40,p,,\nsubjects,contrast_set=FLAIR+T1w,100,p,,',
  { modality: ['MR'], contrast: ['FLAIR', 'T1w'], anatomy: ['brain'] },
  'yes'
);
const b = ds(
  'b',
  'subjects,,50,p,,\nsubjects,contrast=T1w,50,p,,',
  { modality: ['MR'], contrast: ['T1w'], anatomy: ['brain'] },
  'no'
);
const all = [a, b];
const search = makeSearch(all);

describe('summarize', () => {
  it('sums matching subjects and splits them by intended use', () => {
    const f = { ...emptyFilters(), contrasts: ['T1w'] };
    const s = summarize(all, search, f, vocab, ['commercial_use']);
    expect(s.total).toEqual({ lo: 150, hi: 150 });
    expect(s.byUse.usable.range).toEqual({ lo: 100, hi: 100 });
    expect(s.byUse.blocked.datasets).toBe(1);
  });
});

describe('breakdown', () => {
  it('counts subjects per value while ignoring its own selection', () => {
    const chart = CHARTS.find((c) => c.id === 'sex')!;
    const f = { ...emptyFilters(), sex: ['female'] };
    const bars = breakdown(all, search, f, vocab, chart);
    const female = bars.find((x) => x.key === 'female')!;
    expect(female.selected).toBe(true);
    // a: exactly 60. b: no sex breakdown, so anywhere from 0 to 50.
    expect(female.range).toEqual({ lo: 60, hi: 110 });
    expect(bars.find((x) => x.key === 'male')!.range).toEqual({ lo: 40, hi: 90 });
  });
});

describe('toggle', () => {
  it('builds a contiguous age range from decade clicks', () => {
    const chart = CHARTS.find((c) => c.id === 'age')!;
    let f = toggle(emptyFilters(), chart, '60');
    expect(f.age).toEqual([60, 69]);
    f = toggle(f, chart, '70');
    expect(f.age).toEqual([60, 79]);
    f = toggle(f, chart, '60');
    expect(f.age).toEqual([60, 69]);
  });
});

describe('usability', () => {
  it('is usable without needs and follows the license otherwise', () => {
    expect(usability(b, [], vocab)).toBe('usable');
    expect(usability(b, ['commercial_use'], vocab)).toBe('blocked');
  });
});

import { coverage } from './cohort';

describe('coverage', () => {
  it('leaves out combinations no subject has', () => {
    const mixed = ds(
      'mixed',
      'subjects,,30,p,,\nsubjects,modality=MR,20,p,,\nsubjects,modality=CT,10,p,,\nsubjects,condition=x,10,p,,\nsubjects,modality=CT;condition=x,10,p,,\nsubjects,modality=MR;condition=x,0,p,,',
      { modality: ['CT', 'MR'], condition: ['x'] },
      'yes'
    );
    const v = { ...vocab, terms: { ...vocab.terms, condition: [{ id: 'x', label: 'X' }] } } as VocabData;
    const c = coverage([mixed], v);
    expect(c.cells.get('x|CT')?.datasets).toBe(1);
    expect(c.cells.has('x|MR')).toBe(false);
  });
});
