// /** @type {import('./$types').PageLoad} */
import type { LeaderboardInfoResponseResponseWithMetadata } from '../beatleader';
import type { PageLoad } from './$types';

export interface OutputData {
	item: LeaderboardInfoResponseResponseWithMetadata;
}

const DEFAULT_LEADERBOARD_PARAMS =
	'page=1&count=9999&type=ranked&sortBy=timestamp&order=desc&count=12&mode=Standard&allTypes=0&allRequirements=0';

export const load: PageLoad<OutputData> = async ({ fetch, params, data }) => {
	const res = await fetch(`/api/leaderboards?${DEFAULT_LEADERBOARD_PARAMS}`);
	const item: LeaderboardInfoResponseResponseWithMetadata = await res.json();
	return { item };
};
