// /** @type {import('./$types').PageLoad} */
import type { LeaderboardInfoResponseResponseWithMetadata } from '../../beatleader';
import type { PageLoad } from './$types';

export interface OutputData {
  item: LeaderboardInfoResponseResponseWithMetadata,
}

export const load: PageLoad<OutputData> = async ({ fetch, params, data }) => {
  const res = await fetch(`/leaderboards_beatleader_all_songs.json`);
  const item: LeaderboardInfoResponseResponseWithMetadata = await res.json();

  return { item };
}
