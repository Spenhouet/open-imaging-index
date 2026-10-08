import { readFileSync } from 'node:fs';
import { Marked } from 'marked';
import { resolve } from '$app/paths';

// Renders docs/*.md for the site. Links between docs point to their pages instead.
const pages: Record<string, string> = { 'standard.md': 'standard/', 'contributing.md': 'contribute/' };

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export function renderDoc(file: string): { html: string; title: string; headings: { id: string; text: string }[] } {
  const text = readFileSync(`docs/${file}`, 'utf8');
  const headings: { id: string; text: string }[] = [];
  let title = '';
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        if (depth === 1) {
          title = text;
          return '';
        }
        const id = slug(text);
        if (depth === 2) headings.push({ id, text });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      link({ href, tokens }) {
        const inner = this.parser.parseInline(tokens);
        const page = pages[href.split('#')[0]];
        if (page) return `<a href="${(resolve as unknown as (p: string) => string)(page)}">${inner}</a>`;
        return `<a href="${href}">${inner}</a>`;
      }
    }
  });
  return { html: marked.parse(text) as string, title, headings };
}
