import { compile } from 'mathjs';
import type { LeaderboardInfoResponse } from '../beatleader';

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

export const build_sort_weight_func = (expression: string, failOnError?: boolean): BeatmapSortWeightFunc | false => {
	try {
		const mathjsFunc = compile(expression);
		return (leaderboardInfo: LeaderboardInfoResponse, failOnError?: boolean) => {
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
			if (failOnError) {
				return mathjsFunc.evaluate(scope);
			}
			try {
				return mathjsFunc.evaluate(scope);
			} catch (error) {
				return 0;
			}
		};
	} catch (error) {
		console.log(error);
		if (failOnError) {
			throw error;
		}
		return false;
	}
};
