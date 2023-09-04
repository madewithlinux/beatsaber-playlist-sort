import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { LeaderboardInfoResponseResponseWithMetadata } from '$lib/beatleader';

export const GET: RequestHandler = async ({ fetch, url }) => {
	const res = await fetch(`https://api.beatleader.xyz/leaderboards?${url.searchParams.toString()}`);
	const item: LeaderboardInfoResponseResponseWithMetadata = await res.json();
	const response = json(item);
	response.headers.set('age', '0');
	response.headers.set('cache-control', `public, max-age=${15 * 60}`);
	return response;
};
