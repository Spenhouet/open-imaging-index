import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Marked } from 'marked';
import { parse as parseYaml } from 'yaml';
import type { z } from 'zod';
import { combine } from './rules';
import {
  datasetSchema,
  dimensionsSchema,
  licenseRulesSchema,
  licenseSchema,
  measuresSchema,
  vocabSchema,
  type DatasetFile,
  type LicenseFile
} from './schema';
import { contrastSetParts, parseStats, type StatRow } from './stats';
import type { Catalog, DatasetEntry } from './types';
import {
  NEWER_RULES,
  checkDataset,
  checkLicense,
  checkStats,
  checkVocab,
  type Problem,
  type VocabIndex
} from './validate';

// Reads datasets/, licenses/ and vocab/ from disk. Server and scripts only.

const escapeHtml = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

// Raw HTML in READMEs is shown as text, so a pull request cannot inject scripts.
const markdown = new Marked({
  gfm: true,
  renderer: {
    html: ({ text }) => escapeHtml(text),
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const safe = /^(https?:|mailto:|#)/.test(href) ? href : '#';
      const t = title ? ` title="${escapeHtml(title)}"` : '';
      return `<a href="${escapeHtml(safe)}"${t} rel="noopener" target="_blank">${text}</a>`;
    },
    // Headings in the README sit below the page's own h2 sections.
    heading({ tokens, depth }) {
      return `<h${Math.min(depth + 2, 6)}>${this.parser.parseInline(tokens)}</h${Math.min(depth + 2, 6)}>\n`;
    }
  }
});

export interface LoadResult {
  catalog: Catalog;
  problems: Problem[];
}

function readYaml<T extends z.ZodType>(path: string, schema: T, rel: string, problems: Problem[]): z.infer<T> | null {
  let raw: unknown;
  try {
    raw = parseYaml(readFileSync(path, 'utf8'));
  } catch (e) {
    problems.push({ file: rel, level: 'error', message: `invalid YAML: ${(e as Error).message.split('\n')[0]}` });
    return null;
  }
  const result = schema.safeParse(raw);
  if (!result.success) {
    for (const issue of result.error.issues) {
      const where = issue.path.length ? `${issue.path.join('.')}: ` : '';
      problems.push({ file: rel, level: 'error', message: `${where}${issue.message}` });
    }
    return null;
  }
  return result.data;
}

export function loadCatalog(root = process.cwd()): LoadResult {
  const problems: Problem[] = [];
  const vocabDir = join(root, 'vocab');

  const dims = readYaml(join(vocabDir, 'dimensions.yaml'), dimensionsSchema, 'vocab/dimensions.yaml', problems);
  const measures = readYaml(join(vocabDir, 'measures.yaml'), measuresSchema, 'vocab/measures.yaml', problems);
  const licenseRules = readYaml(
    join(vocabDir, 'license-rules.yaml'),
    licenseRulesSchema,
    'vocab/license-rules.yaml',
    problems
  );
  const terms: VocabIndex['terms'] = {};
  for (const f of readdirSync(vocabDir).filter((f) => f.endsWith('.yaml'))) {
    if (['dimensions.yaml', 'measures.yaml', 'license-rules.yaml'].includes(f)) continue;
    const rel = `vocab/${f}`;
    const v = readYaml(join(vocabDir, f), vocabSchema, rel, problems);
    if (!v) continue;
    problems.push(...checkVocab(rel, v.terms));
    terms[f.replace(/\.yaml$/, '')] = v.terms;
  }
  if (!dims || !measures || !licenseRules) {
    return {
      catalog: {
        datasets: [],
        licenses: [],
        vocab: { dimensions: [], measures: [], terms, licenseRules: licenseRules! }
      },
      problems
    };
  }
  for (const d of dims.dimensions) {
    if (d.values === 'vocab' && !terms[d.id])
      problems.push({
        file: 'vocab/dimensions.yaml',
        level: 'error',
        message: `dimension "${d.id}" needs vocab/${d.id}.yaml`
      });
  }
  const vocab: VocabIndex = { dimensions: dims.dimensions, measures: measures.measures, terms, licenseRules };

  const licenses: LicenseFile[] = [];
  const licDir = join(root, 'licenses');
  for (const f of readdirSync(licDir)
    .filter((f) => f.endsWith('.yaml'))
    .sort()) {
    const rel = `licenses/${f}`;
    const lic = readYaml(join(licDir, f), licenseSchema, rel, problems);
    if (!lic) continue;
    problems.push(...checkLicense(rel, lic, vocab));
    // A rule added after this file was written shows as "Not stated" until someone answers it.
    for (const id of NEWER_RULES)
      lic.rules[id] ??= { value: 'unspecified', note: 'Not yet assessed for this license.' };
    licenses.push(lic);
  }
  const licenseById = new Map(licenses.map((l) => [l.id, l]));

  const dsDir = join(root, 'datasets');
  const folders = readdirSync(dsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
    .map((d) => d.name)
    .sort();
  const datasetIds = new Set(folders);
  const datasets: DatasetEntry[] = [];

  for (const folder of folders) {
    const rel = `datasets/${folder}`;
    const dir = join(dsDir, folder);
    const metaPath = join(dir, 'dataset.yaml');
    if (!existsSync(metaPath)) {
      problems.push({ file: rel, level: 'error', message: 'dataset.yaml is missing' });
      continue;
    }
    const meta = readYaml(metaPath, datasetSchema, `${rel}/dataset.yaml`, problems);
    if (!meta) continue;
    problems.push(...checkDataset(rel, meta, vocab, new Set(licenseById.keys()), datasetIds));

    let rows: StatRow[] = [];
    const statsPath = join(dir, 'stats.csv');
    if (existsSync(statsPath)) {
      const parsed = parseStats(readFileSync(statsPath, 'utf8'));
      for (const e of parsed.errors)
        problems.push({ file: `${rel}/stats.csv`, line: e.line, level: 'error', message: e.message });
      rows = parsed.rows;
      problems.push(...checkStats(rel, rows, meta, vocab));
    } else {
      problems.push({ file: rel, level: 'warning', message: 'no stats.csv. Even a single total row helps' });
    }

    const readmePath = join(dir, 'README.md');
    let readmeHtml = '';
    if (existsSync(readmePath)) {
      const text = readFileSync(readmePath, 'utf8').trim();
      if (text.length < 200)
        problems.push({ file: `${rel}/README.md`, level: 'warning', message: 'the description is very short' });
      readmeHtml = markdown.parse(text) as string;
    } else problems.push({ file: rel, level: 'error', message: 'README.md is missing' });

    datasets.push(buildEntry(meta, rows, readmeHtml, licenseById, vocab));
  }

  return { catalog: { datasets, licenses, vocab }, problems };
}

function buildEntry(
  meta: DatasetFile,
  rows: StatRow[],
  readmeHtml: string,
  licenseById: Map<string, LicenseFile>,
  vocab: VocabIndex
): DatasetEntry {
  const facets: Record<string, Set<string>> = {};
  const add = (dim: string, values: (string | number)[] | undefined) => {
    for (const v of values ?? []) (facets[dim] ??= new Set()).add(String(v));
  };
  add('modality', meta.modalities);
  add('contrast', meta.contrasts);
  add('tracer', meta.tracers);
  add('anatomy', meta.anatomy);
  add('condition', meta.conditions);
  add('country', meta.countries);
  add('vendor', meta.vendors);
  add('field_strength', meta.field_strengths);
  add('task', meta.tasks);
  add('format', meta.formats);
  for (const r of rows) {
    if (r.value === 0) continue;
    for (const [dim, value] of Object.entries(r.by)) {
      if (dim === 'contrast_set') add('contrast', contrastSetParts(value));
      else if (!['age', 'sex', 'split'].includes(dim)) add(dim, [value]);
    }
  }

  const totals: Record<string, number> = {};
  for (const r of rows) if (!Object.keys(r.by).length) totals[r.measure] = r.value;

  const licenses = meta.licenses.flatMap((l) => {
    const license = licenseById.get(l.license);
    return license ? [{ ...l, license }] : [];
  });
  const rules: DatasetEntry['rules'] = {};
  for (const rule of vocab.licenseRules.rules) {
    const answers = licenses.map((l) => l.license.rules[rule.id]?.value ?? 'unspecified');
    rules[rule.id] = answers.length ? combine(answers, rule.good, meta.license_combine) : 'unspecified';
  }
  const purposes = [...new Set(licenses.map((l) => l.license.purpose))];

  return {
    id: meta.id,
    meta,
    stats: rows,
    facets: Object.fromEntries(Object.entries(facets).map(([k, v]) => [k, [...v].sort()])),
    totals,
    licenses,
    rules,
    purposes,
    readmeHtml
  };
}
