import { compile } from 'mathjs';
import type { LeaderboardInfoResponse } from '../beatleader';
import type { BeatmapGridRow } from './BeatmapGrid.svelte';

export type BeatmapSortWeightFunc = (leaderboardInfo: LeaderboardInfoResponse, failOnError?: boolean) => number;

//#region helper functions
const sq = (x: number) => Math.pow(x, 2);
const sqrt = (x: number) => Math.sqrt(x);
const linear = (x: number) => (x > 0 ? x : 0);
const globalScope = {
	sq,
	sqrt,
	linear,
};
//#endregion

export const build_sort_weight_func = (expression: string): BeatmapSortWeightFunc => {
	const mathjsFunc = compile(expression);
	return (leaderboardInfo: LeaderboardInfoResponse) => {
		const difficulty = leaderboardInfo?.difficulty;
		const scope = {
			...globalScope,
			nps: difficulty?.nps ?? 0,
			njs: difficulty?.njs ?? 0,
			stars: difficulty?.stars ?? 0,
			predictedAcc: difficulty?.predictedAcc ?? 0,
			passStars: difficulty?.passRating ?? 0,
			accStars: difficulty?.accRating ?? 0,
			techStars: difficulty?.techRating ?? 0,
			notes: difficulty?.notes ?? 0,
			bombs: difficulty?.bombs ?? 0,
			walls: difficulty?.walls ?? 0,
			duration: difficulty?.duration ?? 0,
		};
		return mathjsFunc.evaluate(scope);
	};
};

export const batch_apply_sort_weight = (
	sort_weight_expression: string,
	maps: LeaderboardInfoResponse[],
): BeatmapGridRow[] => {
	const sort_weight_func = build_sort_weight_func(sort_weight_expression);
	return (
		maps
			.map((leaderboardInfo) => ({
				sortWeight: sort_weight_func(leaderboardInfo),
				leaderboardInfo,
			}))
			// sort it in the reverse
			.sort((a, b) => b.sortWeight - a.sortWeight)
	);
};
