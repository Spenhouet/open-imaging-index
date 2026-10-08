import { getCatalog } from '#lib/server/catalog.js';
import { REPO_URL, SITE_NAME, SITE_URL } from '#lib/site.js';

export const prerender = true;

// llms.txt (https://llmstxt.org): a plain summary for language models and agents.
export function GET() {
  const { datasets } = getCatalog();
  const list = [...datasets]
    .sort((a, b) => a.meta.name.localeCompare(b.meta.name))
    .map((d) => `- [${d.meta.name}](${SITE_URL}/datasets/${d.id}/): ${d.meta.summary.replace(/\s+/g, ' ').trim()}`)
    .join('\n');
  const body = `# ${SITE_NAME}

> Open, community-built index of medical imaging datasets. Each dataset has a description, aggregate cohort numbers (subjects per contrast, sex, age, condition, scanner) with their sources, and a breakdown of its license into the same yes/no rules (commercial use, model training, sharing data or trained models, agreements, ethics approval). Data is CC0.

## Data for agents

- [catalog.json](${SITE_URL}/catalog.json): every dataset, license and vocabulary in one JSON file
- [Agent skills](${SITE_URL}/skills/): SKILL.md skills to find datasets and to contribute entries, installable in Claude, Codex, Cursor and other agents
- [Data standard](${SITE_URL}/standard/): file formats, dimensions and the rules for where numbers may come from
- [Repository](${REPO_URL}): source of all data, contributions by pull request

## Pages

- [Search and filter](${SITE_URL}/): query parameters such as ?contrasts=FLAIR,T1w&sex=female&age=60-80&rules=commercial_use
- [Explore](${SITE_URL}/explore/): cross tables of any two attributes
- [Licenses](${SITE_URL}/licenses/): all license breakdowns compared

## Datasets

${list}
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
