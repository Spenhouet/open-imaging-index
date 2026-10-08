// Creates datasets/<id>/ from the template. Usage: bun run new-dataset <id>
import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';

const id = process.argv[2];
if (!id || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
  console.error('Usage: bun run new-dataset <id>   (lowercase letters, digits and dashes, e.g. brats-2021)');
  process.exit(1);
}
const dir = `datasets/${id}`;
if (existsSync(dir)) {
  console.error(`${dir} already exists`);
  process.exit(1);
}
cpSync('datasets/_template', dir, { recursive: true });
const meta = `${dir}/dataset.yaml`;
const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  meta,
  readFileSync(meta, 'utf8')
    .replace(/^#!.*\n/gm, '')
    .replace('id: my-dataset-2024', `id: ${id}`)
    .replace("date: '2026-01-31'", `date: '${today}'`)
);
console.log(`Created ${dir}. Fill in dataset.yaml, README.md and stats.csv, then run bun run validate.`);
