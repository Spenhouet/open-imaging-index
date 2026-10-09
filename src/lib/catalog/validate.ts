import type { Dimension, LicenseFile, LicenseRules, Measure, Term, DatasetFile } from './schema';
import { canonicalContrastSet, contrastSetParts, parseAgeBin, total, type StatRow } from './stats';

export interface Problem {
  file: string;
  line?: number;
  level: 'error' | 'warning';
  message: string;
  /**
   * Fails `bun run validate` (and so pull requests) but not the site build. Used for rules added after files were
   * written, so a pull request tested before the change cannot break the deployed site.
   */
  ciOnly?: boolean;
}

/** Rules introduced after licenses existed. Missing answers block pull requests, the site shows "Not stated". */
export const NEWER_RULES = ['product_validation'];

export interface VocabIndex {
  dimensions: Dimension[];
  measures: Measure[];
  terms: Record<string, Term[]>;
  licenseRules: LicenseRules;
}

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
export function isCountry(code: string) {
  return /^[A-Z]{2}$/.test(code) && regionNames.of(code) !== code;
}

/** Source keys that name a kind of source instead of a document. */
export const GENERIC_SOURCE_KEYS = new Set([
  'paper',
  'paper1',
  'paper2',
  'article',
  'publication',
  'preprint',
  'arxiv',
  'doi',
  'pmc',
  'pubmed',
  'website',
  'web',
  'site',
  'page',
  'homepage',
  'portal',
  'github',
  'repo',
  'link',
  'url',
  'data',
  'dataset',
  'metadata',
  'computed',
  'source',
  'sources',
  'ref',
  'reference',
  'docs',
  'documentation',
  'readme',
  'manual'
]);

/** Below this, counts we computed ourselves for combinations of attributes are not published. */
export const SMALL_CELL = 10;

export function checkVocab(file: string, terms: Term[]): Problem[] {
  const problems: Problem[] = [];
  const ids = new Set<string>();
  for (const t of terms) {
    if (ids.has(t.id)) problems.push({ file, level: 'error', message: `term "${t.id}" is listed twice` });
    ids.add(t.id);
  }
  for (const t of terms) {
    if (t.parent && !ids.has(t.parent))
      problems.push({ file, level: 'error', message: `term "${t.id}" has unknown parent "${t.parent}"` });
  }
  return problems;
}

export function checkLicense(file: string, lic: LicenseFile, vocab: VocabIndex): Problem[] {
  const problems: Problem[] = [];
  const err = (message: string) => problems.push({ file, level: 'error', message });
  const expected = file
    .split('/')
    .pop()!
    .replace(/\.yaml$/, '');
  if (lic.id !== expected) err(`id "${lic.id}" must equal the file name "${expected}"`);
  const ruleIds = vocab.licenseRules.rules.map((r) => r.id);
  for (const id of ruleIds) {
    if (id in lic.rules) continue;
    if (id === 'product_validation')
      problems.push({
        file,
        level: 'error',
        ciOnly: true,
        message:
          'rule "product_validation" is missing. Judge it from the license text: can the data be used to test or validate a product without becoming part of it? Use unspecified when the text does not say. A non-commercial clause alone is not a "no"'
      });
    else err(`rule "${id}" is missing. Use value: unspecified if the text is silent`);
  }
  const pv = lic.rules.product_validation;
  const cu = lic.rules.commercial_use;
  if (pv?.value === 'no') {
    if (!pv.quote)
      err(
        'product_validation is "no" without a quote. Quote the clause that rules out testing or validating a product'
      );
    else if (cu?.quote && pv.quote.trim() === cu.quote.trim())
      err(
        'product_validation is "no" based on the commercial-use clause. A non-commercial clause alone does not rule out validation: use unspecified, or quote a clause that addresses testing or validation'
      );
  }
  if (cu?.value === 'yes' && pv && pv.value !== 'yes')
    problems.push({
      file,
      level: 'warning',
      message:
        'commercial use is "yes" but product_validation is not. Commercial use normally covers validating a product'
    });
  for (const id of Object.keys(lic.rules)) if (!ruleIds.includes(id)) err(`unknown rule "${id}"`);
  if (!vocab.licenseRules.purposes.some((p) => p.id === lic.purpose))
    err(`purpose "${lic.purpose}" is not one of ${vocab.licenseRules.purposes.map((p) => p.id).join(', ')}`);
  for (const [id, r] of Object.entries(lic.rules)) {
    const rule = vocab.licenseRules.rules.find((x) => x.id === id);
    // "No duty" needs no quote: the evidence is that the text does not ask for it.
    const silentIsEnough = rule?.good === 'no' && r.value === 'no';
    if (r.value !== 'unspecified' && !silentIsEnough && !r.quote && !r.note)
      problems.push({ file, level: 'warning', message: `rule "${id}" has no quote or note to back it up` });
  }
  checkDate(file, lic.verified.date, problems);
  return problems;
}

function checkDate(file: string, date: string, problems: Problem[]) {
  if (date > new Date().toISOString().slice(0, 10))
    problems.push({ file, level: 'error', message: `verified date ${date} is in the future` });
}

export function checkDataset(
  dir: string,
  ds: DatasetFile,
  vocab: VocabIndex,
  licenseIds: Set<string>,
  datasetIds: Set<string>
): Problem[] {
  const file = `${dir}/dataset.yaml`;
  const problems: Problem[] = [];
  const err = (message: string) => problems.push({ file, level: 'error', message });
  const folder = dir.split('/').pop();
  if (ds.id !== folder) err(`id "${ds.id}" must equal the folder name "${folder}"`);

  const lists: [keyof DatasetFile, string][] = [
    ['modalities', 'modality'],
    ['contrasts', 'contrast'],
    ['tracers', 'tracer'],
    ['anatomy', 'anatomy'],
    ['conditions', 'condition'],
    ['tasks', 'task'],
    ['formats', 'format'],
    ['vendors', 'vendor']
  ];
  for (const [field, vocabId] of lists) {
    const known = new Set((vocab.terms[vocabId] ?? []).map((t) => t.id));
    for (const v of (ds[field] as string[] | undefined) ?? []) {
      if (!known.has(v)) err(`${field}: "${v}" is not in vocab/${vocabId}.yaml${suggest(v, vocab.terms[vocabId])}`);
    }
  }
  for (const c of ds.countries ?? []) if (!isCountry(c)) err(`countries: "${c}" is not an ISO 3166-1 alpha-2 code`);
  if (!(vocab.terms.access ?? []).some((t) => t.id === ds.access.type))
    err(`access.type "${ds.access.type}" is not in vocab/access.yaml`);
  for (const l of ds.licenses) {
    if (!licenseIds.has(l.license)) err(`license "${l.license}" has no file licenses/${l.license}.yaml`);
  }
  if (ds.licenses.length > 1 && ds.licenses.some((l) => !l.applies_to))
    err('with several licenses, every one needs applies_to');
  for (const r of ds.related ?? []) if (!datasetIds.has(r)) err(`related: no dataset "${r}"`);
  const urls = new Map<string, string>();
  for (const [key, s] of Object.entries(ds.sources)) {
    if (GENERIC_SOURCE_KEYS.has(key))
      err(
        `sources: "${key}" says what kind of source it is, not which one. Name the document, e.g. baid2021 or tcia-brats2021`
      );
    const prev = urls.get(s.url);
    if (prev)
      err(`sources: "${key}" and "${prev}" point to the same url. Use one key and the where column for locations`);
    urls.set(s.url, key);
  }
  checkDate(file, ds.verified.date, problems);
  return problems;
}

function suggest(value: string, terms: Term[] = []): string {
  const v = value.toLowerCase();
  const hit = terms.find(
    (t) => t.id.toLowerCase() === v || t.label.toLowerCase() === v || t.synonyms?.some((s) => s.toLowerCase() === v)
  );
  return hit ? `. Did you mean "${hit.id}"?` : '. Add it there first if it is missing';
}

export function checkStats(dir: string, rows: StatRow[], ds: DatasetFile, vocab: VocabIndex): Problem[] {
  const file = `${dir}/stats.csv`;
  const problems: Problem[] = [];
  const err = (line: number, message: string) => problems.push({ file, line, level: 'error', message });
  const warn = (line: number | undefined, message: string) => problems.push({ file, line, level: 'warning', message });
  const dims = new Map(vocab.dimensions.map((d) => [d.id, d]));
  const measures = new Map(vocab.measures.map((m) => [m.id, m]));
  const termIds = (id: string) => new Set(vocab.terms[id]?.map((t) => t.id) ?? []);

  const seen = new Map<string, number>();
  for (const r of rows) {
    const m = measures.get(r.measure);
    if (!m) err(r.line, `unknown measure "${r.measure}". See vocab/measures.yaml`);
    if (m?.kind === 'count' && !Number.isInteger(r.value)) err(r.line, `a count must be a whole number`);
    if (!r.source) err(r.line, 'source is empty. Use a key from sources in dataset.yaml');
    else if (!r.where && ds.sources[r.source]?.kind === 'paper')
      warn(r.line, `say where in ${r.source} this number is, e.g. Table 2 or p. 4 (where column)`);
    else if (!(r.source in ds.sources)) err(r.line, `source "${r.source}" is not a key under sources in dataset.yaml`);

    for (const [dim, value] of Object.entries(r.by)) {
      const d = dims.get(dim);
      if (!d) {
        err(r.line, `unknown dimension "${dim}". See vocab/dimensions.yaml`);
        continue;
      }
      if (d.values === 'vocab' && !termIds(dim).has(value))
        err(r.line, `${dim} "${value}" is not in vocab/${dim}.yaml${suggest(value, vocab.terms[dim] ?? [])}`);
      if (d.values === 'contrast_set') {
        const parts = contrastSetParts(value);
        const known = termIds('contrast');
        for (const p of parts) if (!known.has(p)) err(r.line, `contrast "${p}" is not in vocab/contrast.yaml`);
        if (new Set(parts).size !== parts.length) err(r.line, `contrast_set "${value}" repeats a contrast`);
        const canon = canonicalContrastSet(parts);
        if (canon !== value) err(r.line, `write contrast_set in alphabetical order: ${canon}`);
      }
      if (d.values === 'age_range' && !parseAgeBin(value)) err(r.line, `age "${value}" is not a bin like 60-69 or 90+`);
      if (d.values === 'number' && !(Number(value) > 0)) err(r.line, `${dim} "${value}" is not a positive number`);
      if (d.values === 'country' && !isCountry(value))
        err(r.line, `country "${value}" is not an ISO 3166-1 alpha-2 code`);
    }

    const key = `${r.measure}|${Object.entries(r.by)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join(';')}`;
    if (seen.has(key)) err(r.line, `same measure and breakdown as line ${seen.get(key)}`);
    else seen.set(key, r.line);

    const nDims = Object.keys(r.by).length;
    if (
      nDims >= 2 &&
      ds.sources[r.source]?.kind === 'computed' &&
      m?.kind === 'count' &&
      r.value > 0 &&
      r.value < SMALL_CELL
    )
      err(
        r.line,
        `computed counts for combinations below ${SMALL_CELL} are not published (re-identification risk). Leave the row out`
      );
  }

  // Consistency of counts with their totals and marginals.
  for (const m of vocab.measures.filter((x) => x.kind === 'count')) {
    const own = rows.filter((r) => r.measure === m.id);
    if (!own.length) continue;
    const t = total(rows, m.id);
    if (!t) {
      warn(own[0].line, `no total row for ${m.id} (a row with an empty by column)`);
      continue;
    }
    const slack = (r: StatRow) => (r.approx || t.approx ? 0.05 * t.value : 0);
    for (const r of own) {
      if (r !== t && r.value > t.value + slack(r)) err(r.line, `${r.value} is more than the total ${t.value}`);
    }
    for (const d of vocab.dimensions.filter((x) => x.partition)) {
      const single = own.filter((r) => Object.keys(r.by).length === 1 && d.id in r.by);
      const sum = single.reduce((s, r) => s + r.value, 0);
      const approx = single.some((r) => r.approx) || t.approx;
      if (single.length && sum > t.value * (approx ? 1.05 : 1))
        err(single[0].line, `${d.id} counts add up to ${sum}, more than the total ${t.value}`);
    }
    // A joint row can never exceed one of its marginals.
    for (const r of own.filter((x) => Object.keys(x.by).length >= 2)) {
      for (const [dim, value] of Object.entries(r.by)) {
        const marg = own.find((x) => Object.keys(x.by).length === 1 && x.by[dim] === value);
        if (marg && r.value > marg.value + slack(r))
          err(r.line, `${r.value} is more than ${dim}=${value} (${marg.value})`);
      }
    }
    // Subjects with a contrast must be at least those whose contrast set contains it.
    const sets = own.filter((x) => Object.keys(x.by).length === 1 && 'contrast_set' in x.by);
    for (const c of own.filter((x) => Object.keys(x.by).length === 1 && 'contrast' in x.by)) {
      const inSets = sets
        .filter((s) => contrastSetParts(s.by.contrast_set).includes(c.by.contrast))
        .reduce((s, x) => s + x.value, 0);
      if (inSets > c.value + slack(c))
        err(c.line, `contrast ${c.by.contrast} is ${c.value}, but its contrast sets add up to ${inSets}`);
    }
  }

  // Summary statistics must be ordered.
  const get = (id: string) => total(rows, id)?.value;
  const [min, med, mean, max] = [get('age_min'), get('age_median'), get('age_mean'), get('age_max')];
  if (min !== undefined && max !== undefined && min > max)
    err(total(rows, 'age_min')!.line, 'age_min is above age_max');
  for (const [label, v] of [
    ['age_median', med],
    ['age_mean', mean]
  ] as const) {
    if (v !== undefined && ((min !== undefined && v < min) || (max !== undefined && v > max)))
      err(total(rows, label)!.line, `${label} is outside age_min..age_max`);
  }
  const subjects = get('subjects');
  for (const bigger of ['studies', 'scans']) {
    const v = get(bigger);
    if (subjects !== undefined && v !== undefined && v < subjects)
      warn(total(rows, bigger)!.line, `fewer ${bigger} (${v}) than subjects (${subjects}). Is that right?`);
  }
  return problems;
}
