import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { CompactScoreResponseResponseWithMetadata } from '$lib/beatleader';

export const GET: RequestHandler = async ({ fetch, params, url }) => {
	const { playerId } = params;
	const res = await fetch(`https://api.beatleader.xyz/player/${playerId}/scores/compact?${url.searchParams.toString()}`);
	const item: CompactScoreResponseResponseWithMetadata = await res.json();
	const response = json(item);
	response.headers.set('age', '0');
	response.headers.set('cache-control', `public, max-age=${15 * 60}`);
	return response;
};
