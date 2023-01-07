import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import type { SanityClient } from '@sanity/client';

export const client: SanityClient = sanityClient({
	projectId: '0edefeh9',
	dataset: 'production',
	apiVersion: '2021-09-18', // use current UTC date - see "specifying API version"!
	token:
		'skLuVoMOwFm4BzUV0Ha6SWPgrHLacSfx3XpP4ALw6tmB58J7DhM4oB19hVLRC6HWKtEpOeAdZUKwhj0vHlEwaLsfS6p8Vgqh4KLQjSHcWgClXG6HxVXlu7oju7WH98uyPyQbCS88XT79ttJWYDaUBLt2yoZeH7maG83CbdCFdwrMyJVJytpZ', // or leave blank for unauthenticated usage
	useCdn: false // `false` if you want to ensure fresh data
});

// Get a pre-configured url-builder from your sanity client
const builder = ImageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: string) {
	return builder.image(source);
}

export default client;
