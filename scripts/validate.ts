// Checks every dataset, license and vocabulary file. Run with `bun run validate`.
// Exits with 1 when there are errors, so CI blocks the pull request.
import { loadCatalog } from '../src/lib/catalog/load';

const { catalog, problems } = loadCatalog();
const errors = problems.filter((p) => p.level === 'error');
const warnings = problems.filter((p) => p.level === 'warning');
const gh = !!process.env.GITHUB_ACTIONS;

for (const p of [...errors, ...warnings]) {
  const where = p.line ? `${p.file}:${p.line}` : p.file;
  if (gh) console.log(`::${p.level} file=${p.file}${p.line ? `,line=${p.line}` : ''}::${p.message}`);
  else console.log(`${p.level === 'error' ? '✗' : '!'} ${where}  ${p.message}`);
}
console.log(
  `\n${catalog.datasets.length} datasets, ${catalog.licenses.length} licenses. ${errors.length} errors, ${warnings.length} warnings.`
);
process.exit(errors.length ? 1 : 0);
