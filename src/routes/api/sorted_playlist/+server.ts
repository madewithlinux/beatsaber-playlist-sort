import type { RequestHandler } from './$types';
import type { LeaderboardInfoResponseResponseWithMetadata } from '../../../beatleader';
import type { BeatmapGridRow } from '$lib/BeatmapGrid.svelte';
import { batch_apply_sort_weight } from '$lib/sort_weight_calc';
import { generatePlaylistObject } from '$lib/generate_playlist';
import { json_stringify } from '$lib/response_util';

const DEFAULT_LEADERBOARD_PARAMS =
	'page=1&count=9999&type=ranked&sortBy=timestamp&order=desc&count=12&mode=Standard&allTypes=0&allRequirements=0';

export const GET: RequestHandler = async ({ fetch, url }) => {
	let sort_weight_expression = url.searchParams.get('expr')!;
	let playlist_size = Number(url.searchParams.get('size'))!;
	let playlist_title = url.searchParams.get('title')!;
	let playlist_author = url.searchParams.get('author')!;

	const res = await fetch(`/api/leaderboards?${DEFAULT_LEADERBOARD_PARAMS}`);
	const item: LeaderboardInfoResponseResponseWithMetadata = await res.json();
	const maps = item.data!;

	// calculations
	const weight_sorted_maps: BeatmapGridRow[] = batch_apply_sort_weight(sort_weight_expression, maps);
	const playlistObject = generatePlaylistObject(
		weight_sorted_maps.slice(0, playlist_size).map((b) => b.leaderboardInfo),
		playlist_title,
		playlist_author,
	);
	playlistObject.customData = { syncURL: url.href };

	const response = json_stringify(playlistObject, {
		// TODO: figure out how to explicitly set the key order without messing up the individual song JSONs
		// replacer: ['playlistTitle', 'playlistAuthor', 'songs', 'image', 'customData'],
		space: 2,
	});
	response.headers.set('age', '0');
	response.headers.set('cache-control', `public, max-age=${15 * 60}`);
	return response;
};
