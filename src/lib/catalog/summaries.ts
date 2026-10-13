import type { StatRow } from './stats.js';
import type { DatasetSummary } from './types.js';

/** Puts back the stats fields that summaries.json leaves out. */
export function restoreSummaries(raw: DatasetSummary[]): DatasetSummary[] {
  const defaults = { approx: false, source: '', where: '', note: '', line: 0 };
  for (const d of raw) d.stats = d.stats.map((r): StatRow => Object.assign({ by: {} }, defaults, r));
  return raw;
}
