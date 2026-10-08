import { renderDoc } from '#lib/server/docs.js';

export function load() {
  return { doc: renderDoc('standard.md') };
}
