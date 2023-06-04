<script lang="ts">
	import { page } from '$app/stores';
	import type { BeatmapGridRow } from '$lib/BeatmapGrid.svelte';
	import BeatmapGrid from '$lib/BeatmapGrid.svelte';
	import SortWeightFuncChecker from '$lib/SortWeightFuncChecker.svelte';
	import { build_sort_weight_func } from '$lib/sort_weight_calc';
	import type { BeatmapSortWeightFunc } from '$lib/sort_weight_calc';
	import type { LeaderboardInfoResponse, LeaderboardInfoResponseResponseWithMetadata } from '../../beatleader';

	const leaderboard_info_response: LeaderboardInfoResponseResponseWithMetadata = $page.data.item;
	const maps: LeaderboardInfoResponse[] = leaderboard_info_response.data!;

	// let sort_weight_expression = 'techRating / nps - sq(njs-15)/10';
	let sort_weight_expression = 'stars/nps + techStars/nps - sq(njs-15)/10';
	let sort_weight_func: BeatmapSortWeightFunc = () => 0.0;
	$: {
		const res = build_sort_weight_func(sort_weight_expression);
		if (res !== false) {
			sort_weight_func = res;
		}
	}

	let weight_sorted_maps: BeatmapGridRow[];
	$: weight_sorted_maps = [...maps]
		.map((leaderboardInfo) => ({
			sortWeight: sort_weight_func(leaderboardInfo),
			leaderboardInfo,
		}))
		// sort it in the reverse
		.sort((a, b) => b.sortWeight - a.sortWeight);
</script>

<div class="container">
	<div class="header">
		<h1>beatleader playlist sort</h1>
		<div class="sort-weight-expression">
			<label for="sort-weight-expression"> sort weight expression: </label>
			<input id="sort-weight-expression" class="wide" bind:value={sort_weight_expression} />
			<SortWeightFuncChecker {sort_weight_expression} map={maps[0]} />
		</div>
	</div>
	<div class="content">
		<BeatmapGrid rowData={weight_sorted_maps} />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
	}
	div.container {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
	}
	div.header {
		padding: 5px;
	}
	.sort-weight-expression {
		display: flex;
		gap: 5px;
	}
	.sort-weight-expression input {
		flex-grow: 1;
	}
	div.content {
		flex-grow: 1;
		display: flex;
	}
</style>
