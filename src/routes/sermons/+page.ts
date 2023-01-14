import type { YoutubeSnippet } from '$lib/types/youtube';
import type { PageLoad } from './$types';
import { PUBLIC_GOOGLE_API_KEY } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	function parseTitle(str: string) {
		// Function assumes a naming format of: DD MMM YY | SPEAKER NAME
		// Remove special characters
		const filteredString = str.replace(/[^\w\s]/gi, '');
		// Break into array based on empty spaces
		const arr = filteredString.split(' ');
		// Filter out blank values
		const values = arr.filter((val) => val !== '');
		return {
			date: {
				day: values[0],
				month: values[1],
				year: values[2]
			},
			title: values[3] + ' ' + values[4]
		};
	}

	const endpoint = 'https://youtube.googleapis.com/youtube/v3/search?';
	const key = PUBLIC_GOOGLE_API_KEY;
	const id = 'UClnCId37ib0qSFxCqnXnbvQ';
	const part = 'snippet';
	const order = 'date';
	const max = '15';

	const query = `${endpoint}part=${part}&channelId=${id}&maxResults=${max}&order=${order}&type=video&key=${key}`;
	const response = await fetch(query);
	const data: { items: YoutubeSnippet[] } = await response.json();
	if (data) {
		const sermons = data.items.map((i) => ({
			id: i.id.videoId,
			info: parseTitle(i.snippet.title),
			description: i.snippet.description,
			thumbnail: i.snippet.thumbnails.medium
		}));
		if (sermons) return { sermons: sermons, data };
	}
	return;
};
