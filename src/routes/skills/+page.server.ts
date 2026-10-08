import { getSkills } from '#lib/server/skills.js';

export function load() {
  return { skills: getSkills().map(({ name, description, html }) => ({ name, description, html })) };
}
