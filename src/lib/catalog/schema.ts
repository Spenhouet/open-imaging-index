import { z } from 'zod';

// Shapes of the files contributors write. Vocabulary membership and stats consistency are
// checked separately in validate.ts, because they depend on other files.

const slug = z
  .string()
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'use lowercase letters, digits and single dashes, e.g. brats-2021');
const url = z.url({ protocol: /^https?$/ });
const isoDate = z.iso.date();
const verified = z
  .object({
    date: isoDate.describe('Day someone last checked this entry against its sources (YYYY-MM-DD)'),
    by: z.string().min(1).describe('GitHub handle of that person')
  })
  .strict();

export const termSchema = z
  .object({
    id: z.string().min(1),
    label: z.string().min(1),
    description: z.string().optional(),
    synonyms: z.array(z.string()).optional(),
    parent: z.string().optional().describe('id of a broader term in the same file'),
    group: z.string().optional(),
    mappings: z
      .record(z.string(), z.string())
      .optional()
      .describe('Codes in other vocabularies, e.g. mondo, uberon, bids')
  })
  .strict();

export const vocabSchema = z.object({ terms: z.array(termSchema).min(1) }).strict();

export const dimensionSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    description: z.string(),
    values: z.enum(['vocab', 'contrast_set', 'age_range', 'number', 'country']),
    combine: z.enum(['all', 'any']),
    partition: z.boolean()
  })
  .strict();
export const dimensionsSchema = z.object({ dimensions: z.array(dimensionSchema) }).strict();

export const measureSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    kind: z.enum(['count', 'summary']),
    unit: z.string().optional(),
    description: z.string().optional()
  })
  .strict();
export const measuresSchema = z.object({ measures: z.array(measureSchema) }).strict();

export const answer = z.enum(['yes', 'no', 'conditional', 'unspecified']);
const duoRef = z.object({ code: z.string(), label: z.string() }).strict();

export const licenseRulesSchema = z
  .object({
    groups: z.array(z.object({ id: z.string(), label: z.string() }).strict()),
    rules: z.array(
      z
        .object({
          id: z.string(),
          group: z.string(),
          label: z.string(),
          question: z.string(),
          good: z.enum(['yes', 'no']),
          duo: duoRef.extend({ when: answer }).strict().optional()
        })
        .strict()
    ),
    purposes: z.array(z.object({ id: z.string(), label: z.string(), duo: duoRef.optional() }).strict())
  })
  .strict();

const ruleAnswer = z
  .object({
    value: answer,
    note: z.string().optional().describe('Plain-language explanation, required for conditional answers'),
    quote: z.string().optional().describe('The sentence in the license text this answer is based on'),
    source: url.optional().describe('Where the quote comes from, if not the license text itself')
  })
  .strict()
  .refine((r) => r.value !== 'conditional' || !!r.note, { message: 'a conditional answer needs a note' });

export const licenseSchema = z
  .object({
    id: z
      .string()
      .regex(/^(LicenseRef-)?[A-Za-z0-9.+-]+$/, 'use the SPDX id, or LicenseRef-<name> for a custom license'),
    name: z.string().min(1),
    short_name: z.string().max(24).optional().describe('Label for badges, e.g. "CC BY 4.0"'),
    url: url.describe('Where the full license text lives'),
    version: z.string().optional().describe('Version or date of the license text that was read'),
    summary: z.string().min(20).max(600),
    purpose: z.string().describe('Allowed purpose, see vocab/license-rules.yaml purposes'),
    rules: z.record(z.string(), ruleAnswer),
    commercial_license: z
      .object({ available: answer, note: z.string().optional(), url: url.optional() })
      .strict()
      .optional()
      .describe('Whether the provider sells a separate commercial license'),
    verified
  })
  .strict();

const source = z
  .object({
    title: z.string().min(1),
    url,
    kind: z
      .enum(['paper', 'website', 'data', 'computed'])
      .describe('computed = counted from openly licensed data, with the script linked in url')
  })
  .strict();

export const datasetSchema = z
  .object({
    id: slug.describe('Must equal the folder name'),
    name: z.string().min(1).max(60),
    full_name: z.string().optional(),
    summary: z
      .string()
      .min(50)
      .max(320)
      .describe('One or two sentences shown in search results and as the page description'),
    homepage: url,
    doi: z
      .string()
      .regex(/^10\.\d{4,9}\/\S+$/, 'write the bare DOI, e.g. 10.7937/K9/TCIA.2015.LO9QL9SX')
      .optional(),
    year: z.number().int().min(1980).max(2100).describe('Year of the first public release'),
    updated: z.number().int().min(1980).max(2100).optional().describe('Year of the latest release'),
    version: z.string().optional(),
    status: z.enum(['active', 'superseded', 'retired']).default('active'),
    creators: z.array(z.object({ name: z.string(), url: url.optional() }).strict()).min(1),
    species: z.string().default('human'),
    modalities: z.array(z.string()).min(1),
    contrasts: z.array(z.string()).optional(),
    tracers: z.array(z.string()).optional(),
    anatomy: z.array(z.string()).min(1),
    conditions: z.array(z.string()).optional(),
    tasks: z.array(z.string()).optional(),
    formats: z.array(z.string()).optional(),
    countries: z.array(z.string().regex(/^[A-Z]{2}$/, 'ISO 3166-1 alpha-2 code')).optional(),
    vendors: z.array(z.string()).optional(),
    field_strengths: z.array(z.number().positive()).optional(),
    size_gb: z.number().positive().optional(),
    access: z
      .object({
        type: z.string().describe('See vocab/access.yaml'),
        url,
        note: z.string().optional()
      })
      .strict(),
    licenses: z
      .array(
        z
          .object({
            license: z.string().describe('File name in licenses/ without .yaml'),
            applies_to: z.string().optional().describe('Which part of the data, if the dataset mixes licenses'),
            url: url.optional().describe('This dataset’s copy of the license, if it differs from the license file'),
            note: z.string().optional()
          })
          .strict()
      )
      .min(1),
    license_combine: z
      .enum(['all', 'any'])
      .default('all')
      .describe(
        'all: each license covers a different part, all apply (default). any: the same data is offered under alternative licenses, pick one'
      ),
    citation: z.object({ text: z.string().optional(), bibtex: z.string().optional() }).strict().optional(),
    sources: z
      .record(z.string().regex(/^[a-z0-9][a-z0-9_-]*$/, 'lowercase letters, digits, dashes and underscores'), source)
      .refine((s) => Object.keys(s).length > 0, 'add at least one source'),
    related: z.array(slug).optional(),
    keywords: z.array(z.string()).optional(),
    verified
  })
  .strict();

export type Term = z.infer<typeof termSchema>;
export type Dimension = z.infer<typeof dimensionSchema>;
export type Measure = z.infer<typeof measureSchema>;
export type Answer = z.infer<typeof answer>;
export type LicenseRules = z.infer<typeof licenseRulesSchema>;
export type LicenseFile = z.infer<typeof licenseSchema>;
export type DatasetFile = z.infer<typeof datasetSchema>;
