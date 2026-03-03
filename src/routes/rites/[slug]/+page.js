import { error } from '@sveltejs/kit';
import { rites, validSlugs } from '$lib/data/rites.js';

export function load({ params }) {
  if (!validSlugs.includes(params.slug)) {
    error(404, 'Rite not found');
  }

  return {
    rite: rites[params.slug],
  };
}
