// Writes JSON Schema files for editor autocompletion (yaml-language-server). Run after changing schema.ts.
import { writeFileSync } from 'node:fs';
import { z } from 'zod';
import {
  datasetSchema,
  dimensionsSchema,
  licenseRulesSchema,
  licenseSchema,
  measuresSchema,
  vocabSchema
} from '../src/lib/catalog/schema';

const out: [string, z.ZodType][] = [
  ['dataset', datasetSchema],
  ['license', licenseSchema],
  ['vocab', vocabSchema],
  ['dimensions', dimensionsSchema],
  ['measures', measuresSchema],
  ['license-rules', licenseRulesSchema]
];
for (const [name, schema] of out) {
  const json = z.toJSONSchema(schema, { io: 'input', unrepresentable: 'any' });
  writeFileSync(`schema/${name}.schema.json`, JSON.stringify(json, null, 2) + '\n');
  console.log(`schema/${name}.schema.json`);
}
