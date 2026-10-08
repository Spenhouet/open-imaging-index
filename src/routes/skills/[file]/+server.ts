import { error } from '@sveltejs/kit';
import { getSkills, skillZip } from '#lib/server/skills.js';

export const prerender = true;

export function entries() {
  return [...getSkills().map((s) => ({ file: `${s.name}.zip` })), { file: 'open-imaging-index-skills.zip' }];
}

export function GET({ params }) {
  const skills = getSkills();
  const pick =
    params.file === 'open-imaging-index-skills.zip' ? skills : skills.filter((s) => `${s.name}.zip` === params.file);
  if (!pick.length) error(404, 'No such skill');
  return new Response(skillZip(pick) as BodyInit, { headers: { 'content-type': 'application/zip' } });
}
