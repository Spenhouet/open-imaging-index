import type { Term } from './schema';
import type { VocabData } from './types';

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

export function countryName(code: string) {
  try {
    return regionNames.of(code) ?? code;
  } catch {
    return code;
  }
}

export function term(vocab: VocabData, dim: string, id: string): Term | undefined {
  return vocab.terms[dim]?.find((t) => t.id === id);
}

/** Human label for a value of any dimension or dataset field. */
export function label(vocab: VocabData, dim: string, id: string): string {
  if (dim === 'country') return countryName(id);
  if (dim === 'field_strength') return `${id} T`;
  if (dim === 'contrast_set')
    return id
      .split('+')
      .map((p) => label(vocab, 'contrast', p))
      .join(' + ');
  if (dim === 'license') return id;
  return term(vocab, dim, id)?.label ?? id;
}

/** The id plus every narrower term below it, e.g. glioma -> glioma, glioblastoma. */
export function withDescendants(vocab: VocabData, dim: string, id: string): string[] {
  const terms = vocab.terms[dim] ?? [];
  const out = [id];
  for (let i = 0; i < out.length; i++) {
    for (const t of terms) if (t.parent === out[i] && !out.includes(t.id)) out.push(t.id);
  }
  return out;
}

const MODALITY_SLOTS: Record<string, number> = { MR: 1, CT: 2, PT: 3, CR: 4, DX: 4, US: 5, SM: 6, MG: 7, NM: 8 };

/** Fixed color per modality, so a modality has the same color on every page. */
export function modalityColor(id: string): string {
  const slot = MODALITY_SLOTS[id];
  return slot ? `var(--series-${slot})` : 'var(--series-other)';
}

export function compact(n: number): string {
  if (!Number.isFinite(n)) return '?';
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1).replace(/\.0$/, '')}M`;
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  return n.toLocaleString('en-US');
}

export function formatNumber(n: number, approx = false): string {
  if (!Number.isFinite(n)) return '?';
  const s = Number.isInteger(n) ? n.toLocaleString('en-US') : n.toLocaleString('en-US', { maximumFractionDigits: 1 });
  return approx ? `~${s}` : s;
}
