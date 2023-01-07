import { client } from '$lib/sanity';
import type { LayoutLoad } from './$types';
import type { Church } from '$lib/types/sanitySchema';
import { error } from '@sveltejs/kit';

export const load: LayoutLoad = async () => {
	const filter = '*[_type == "church"][0]';
	const projection = `{
 		phone, 
  		services,
		about,
		carousel[]{caption, alt, "imageUrl" : asset->url}, 
  		elders[]->{name, "slug" : slug.current, title, bio, "imageUrl" : image.asset->url},
  		deacons[]->{name, "slug" : slug.current, title, bio, "imageUrl" : image.asset->url},
  		directors[]->{name, "slug" : slug.current, title, bio, "imageUrl" : image.asset->url},
  		supports[]->{name, "slug" : slug.current, title, bio, "imageUrl" : image.asset->url},
		statements[]->{title, statement}	
	}`;

	const query = filter + projection;
	const church: Church = await client.fetch(query);

	if (church) {
		return {
			church
		};
	}

	throw error(500, 'Error fetching church data');
};
