import { describe, expect, it } from 'vitest';
import {
  estimate,
  parseAgeBin,
  parseCsv,
  parseStats,
  type Constraint,
  type DimensionInfo,
  type EstimateContext
} from './stats';

const dims: Record<string, DimensionInfo> = {
  contrast: { id: 'contrast', combine: 'all', partition: false, values: 'vocab' },
  contrast_set: { id: 'contrast_set', combine: 'all', partition: true, values: 'contrast_set' },
  sex: { id: 'sex', combine: 'any', partition: true, values: 'vocab' },
  age: { id: 'age', combine: 'any', partition: true, values: 'age_range' },
  condition: { id: 'condition', combine: 'any', partition: false, values: 'vocab' }
};

function ctx(csv: string, facets: Record<string, string[]> = {}): EstimateContext {
  // Fixtures are written without the where column, which these tests do not need.
  const withWhere = csv
    .split('\n')
    .map((l) => l.replace(/,([^,]*)$/, ',,$1'))
    .join('\n');
  const { rows, errors } = parseStats(`measure,by,value,source,where,note\n${withWhere}`);
  expect(errors).toEqual([]);
  return { rows, dims, facets };
}

describe('parseCsv', () => {
  it('handles quotes, commas and CRLF', () => {
    expect(parseCsv('a,"b, c","say ""hi"""\r\n1,2,3\n')).toEqual([
      ['a', 'b, c', 'say "hi"'],
      ['1', '2', '3']
    ]);
  });
});

describe('parseStats', () => {
  it('reads approximate values and breakdowns', () => {
    const { rows } = parseStats(
      'measure,by,value,source,where,note\nsubjects,sex=female;age=60-69,~12,doe2024,Table 2,x\n'
    );
    expect(rows[0]).toMatchObject({ by: { sex: 'female', age: '60-69' }, value: 12, approx: true, where: 'Table 2' });
  });
  it('rejects a wrong header', () => {
    expect(parseStats('measure,value\n').errors[0].message).toMatch(/header/);
  });
});

describe('parseAgeBin', () => {
  it('uses completed years', () => {
    expect(parseAgeBin('60-69')).toEqual([60, 70]);
    expect(parseAgeBin('90+')).toEqual([90, Infinity]);
    expect(parseAgeBin('0-0.5')).toEqual([0, 0.5]);
    expect(parseAgeBin('70-60')).toBeNull();
  });
});

describe('estimate', () => {
  it('returns the total without constraints', () => {
    expect(estimate(ctx('subjects,,100,p,'), 'subjects', [])).toEqual({ lo: 100, hi: 100, total: 100 });
  });

  it('gives Fréchet bounds for two contrasts from marginals only', () => {
    const c = ctx('subjects,,100,p,\nsubjects,contrast=T1w,90,p,\nsubjects,contrast=FLAIR,70,p,', {
      contrast: ['T1w', 'FLAIR']
    });
    // At least 90 + 70 − 100 = 60, at most min(90, 70) = 70.
    expect(estimate(c, 'subjects', [{ dim: 'contrast', values: ['T1w', 'FLAIR'] }])).toMatchObject({ lo: 60, hi: 70 });
  });

  it('is exact with contrast sets', () => {
    const c = ctx(
      [
        'subjects,,100,p,',
        'subjects,contrast_set=FLAIR+T1w,55,p,',
        'subjects,contrast_set=T1w,35,p,',
        'subjects,contrast_set=FLAIR,10,p,'
      ].join('\n'),
      { contrast: ['FLAIR', 'T1w'] }
    );
    expect(estimate(c, 'subjects', [{ dim: 'contrast', values: ['T1w', 'FLAIR'] }])).toMatchObject({ lo: 55, hi: 55 });
    expect(estimate(c, 'subjects', [{ dim: 'contrast', values: ['T1w'] }])).toMatchObject({ lo: 90, hi: 90 });
  });

  it('is zero for a contrast the dataset does not have', () => {
    const c = ctx('subjects,,100,p,', { contrast: ['T1w'] });
    expect(estimate(c, 'subjects', [{ dim: 'contrast', values: ['FLAIR'] }])).toMatchObject({ lo: 0, hi: 0 });
  });

  it('is zero for contrasts when the dataset lists none', () => {
    const c = ctx('subjects,,100,p,', { modality: ['DX'] });
    expect(estimate(c, 'subjects', [{ dim: 'contrast', values: ['T1w'] }])).toMatchObject({ hi: 0 });
  });

  it('sums selected values of a partition and bounds the rest', () => {
    const c = ctx('subjects,,100,p,\nsubjects,sex=female,60,p,\nsubjects,sex=male,40,p,');
    expect(estimate(c, 'subjects', [{ dim: 'sex', values: ['female'] }])).toMatchObject({ lo: 60, hi: 60 });
    const partial = ctx('subjects,,100,p,\nsubjects,sex=male,40,p,');
    expect(estimate(partial, 'subjects', [{ dim: 'sex', values: ['female'] }])).toMatchObject({ lo: 0, hi: 60 });
  });

  it('handles age ranges that cut through a bin', () => {
    const c = ctx('subjects,,100,p,\nsubjects,age=40-59,30,p,\nsubjects,age=60-79,50,p,\nsubjects,age=80+,20,p,');
    // 60 to 70 is inside 60-79 only partially: nothing certain, up to 50.
    expect(estimate(c, 'subjects', [{ dim: 'age', range: [60, 70] }])).toMatchObject({ lo: 0, hi: 50 });
    expect(estimate(c, 'subjects', [{ dim: 'age', range: [60, Infinity] }])).toMatchObject({ lo: 70, hi: 70 });
  });

  it('uses age_min and age_max', () => {
    const c = ctx('subjects,,100,p,\nage_min,,20,p,\nage_max,,50,p,');
    expect(estimate(c, 'subjects', [{ dim: 'age', range: [60, 80] }])).toMatchObject({ hi: 0 });
    expect(estimate(c, 'subjects', [{ dim: 'age', range: [18, 90] }])).toMatchObject({ lo: 100, hi: 100 });
  });

  it('combines dimensions with Fréchet and uses cross tables when present', () => {
    const base =
      'subjects,,100,p,\nsubjects,sex=female,60,p,\nsubjects,sex=male,40,p,\nsubjects,age=60-69,50,p,\nsubjects,age=20-59,50,p,';
    const q: Constraint[] = [
      { dim: 'sex', values: ['female'] },
      { dim: 'age', range: [60, 70] as [number, number] }
    ];
    // 60 + 50 − 100 = 10, at most min(60, 50) = 50.
    expect(estimate(ctx(base), 'subjects', q)).toMatchObject({ lo: 10, hi: 50 });
    const joint = `${base}\nsubjects,sex=female;age=60-69,33,p,\nsubjects,sex=male;age=60-69,17,p,\nsubjects,sex=female;age=20-59,27,p,\nsubjects,sex=male;age=20-59,23,p,`;
    expect(estimate(ctx(joint), 'subjects', q)).toMatchObject({ lo: 33, hi: 33 });
  });

  it('does not add up overlapping conditions', () => {
    const c = ctx('subjects,,100,p,\nsubjects,condition=a,30,p,\nsubjects,condition=b,20,p,', {
      condition: ['a', 'b']
    });
    // Some subjects may have both: at least 30, at most 50.
    expect(estimate(c, 'subjects', [{ dim: 'condition', values: ['a', 'b'] }])).toMatchObject({ lo: 30, hi: 50 });
  });

  it('gives an open range without a total', () => {
    const c = ctx('subjects,sex=female,60,p,');
    expect(estimate(c, 'subjects', [{ dim: 'sex', values: ['female'] }])).toMatchObject({ lo: 60, hi: Infinity });
  });
});

import { combine } from './rules';

describe('combine', () => {
  it('takes the most restrictive answer when all licenses apply', () => {
    expect(combine(['yes', 'no', 'unspecified'], 'yes')).toBe('no');
    expect(combine(['no', 'conditional'], 'no')).toBe('conditional');
  });
  it('takes the friendliest answer for alternative licenses', () => {
    expect(combine(['yes', 'no'], 'yes', 'any')).toBe('yes');
    expect(combine(['yes', 'no'], 'no', 'any')).toBe('no');
  });
});
