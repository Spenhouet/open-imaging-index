import type { Answer, LicenseRules } from './schema';

// Order from the user's point of view: earlier entries win when licenses are combined.
const worstFirst: Record<'yes' | 'no', Answer[]> = {
  // For permissions, "no" is the worst answer.
  yes: ['no', 'unspecified', 'conditional', 'yes'],
  // For duties and limits, "yes" is the worst answer.
  no: ['yes', 'conditional', 'unspecified', 'no']
};

/**
 * Combines the answers of several licenses of one dataset. With mode "all" every license applies to some part of
 * the data, so the most restrictive answer wins. With "any" the same data is offered under alternatives, so the
 * friendliest one wins.
 */
export function combine(answers: Answer[], good: 'yes' | 'no', mode: 'all' | 'any' = 'all'): Answer {
  const order = worstFirst[good];
  const pick = mode === 'all' ? (a: number, b: number) => a < b : (a: number, b: number) => a > b;
  return answers.reduce((best, a) => (pick(order.indexOf(a), order.indexOf(best)) ? a : best), answers[0]);
}

export type Tone = 'good' | 'bad' | 'mixed' | 'unknown';

export function tone(value: Answer, good: 'yes' | 'no'): Tone {
  if (value === 'unspecified') return 'unknown';
  if (value === 'conditional') return 'mixed';
  return value === good ? 'good' : 'bad';
}

export function ruleById(rules: LicenseRules, id: string) {
  return rules.rules.find((r) => r.id === id);
}
