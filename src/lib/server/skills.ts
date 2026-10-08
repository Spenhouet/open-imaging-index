import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { strToU8, zipSync } from 'fflate';
import { Marked } from 'marked';
import { parse as parseYaml } from 'yaml';

// The agent skills shipped in plugins/open-imaging-index, read for the /skills/ page and its zip downloads.
const ROOT = 'plugins/open-imaging-index/skills';

export interface Skill {
  name: string;
  description: string;
  /** SKILL.md as written, for downloads. */
  raw: string;
  /** Body rendered to HTML, for reading on the page. */
  html: string;
}

const markdown = new Marked({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const d = Math.min(depth + 1, 6);
      return `<h${d}>${this.parser.parseInline(tokens)}</h${d}>\n`;
    }
  }
});

export function getSkills(): Skill[] {
  return readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const raw = readFileSync(join(ROOT, d.name, 'SKILL.md'), 'utf8');
      const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw);
      if (!match) throw new Error(`${d.name}/SKILL.md has no frontmatter`);
      const front = parseYaml(match[1]) as { name: string; description: string };
      if (front.name !== d.name) throw new Error(`${d.name}/SKILL.md: name must equal the folder name`);
      const body = match[2].replace(/^# .*\n+/, '');
      return { name: front.name, description: front.description, raw, html: markdown.parse(body) as string };
    })
    .sort((a, b) => (a.name.startsWith('find') ? -1 : b.name.startsWith('find') ? 1 : a.name.localeCompare(b.name)));
}

/** A zip with one folder per skill, the layout Claude's skill upload expects. */
export function skillZip(skills: Skill[]): Uint8Array {
  const files: Record<string, Record<string, Uint8Array>> = {};
  for (const s of skills) files[s.name] = { 'SKILL.md': strToU8(s.raw) };
  return zipSync(files, { level: 9 });
}
