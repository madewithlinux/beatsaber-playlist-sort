// /** @type {import('./$types').PageLoad} */
import type { ScoreResponseWithMyScoreResponseWithMetadata } from '$lib/beatleader';
import type { PageLoad } from './$types';

export interface OutputData {
	item: ScoreResponseWithMyScoreResponseWithMetadata;
}

const DEFAULT_LEADERBOARD_PARAMS =
'page=1&count=9999&type=&sortBy=timestamp&order=desc&count=12&allTypes=0&allRequirements=0';
// 'page=1&count=9999&type=ranked&sortBy=timestamp&order=desc&count=12&mode=Standard&allTypes=0&allRequirements=0';
// 'sortBy=date&order=0&page=1&count=8';

export const load: PageLoad<OutputData> = async ({ fetch, params, data }) => {
	const { playerId } = params;
	const res = await fetch(`/api/player/${playerId}/scores?${DEFAULT_LEADERBOARD_PARAMS}`);
	const item: ScoreResponseWithMyScoreResponseWithMetadata = await res.json();
	return { item };
};
