<script lang="ts">
	import type { LeaderboardInfoResponse } from '../beatleader';
	import { build_sort_weight_func } from './sort_weight_calc';

	export let sort_weight_expression: string;
	// export let sort_weight_func: BeatmapSortWeightFunc;
	export let map: LeaderboardInfoResponse;

	let error: Error | undefined = undefined;
	$: {
		try {
            // we gotta build the sort weight func again ourselves just in case there's an exception while building it
			const sort_weight_func = build_sort_weight_func(sort_weight_expression, true);
			if (sort_weight_func === false) {
				throw new Error('build_sort_weight_func() returned false anyway');
			}
			error = undefined;
			sort_weight_func(map, true);
		} catch (e) {
			if (e instanceof Error) {
				error = e;
			} else {
				console.error(e);
				error = new Error(`unknown error ${e}`);
			}
		}
	}
</script>

<span>
	{#if error}
		{sort_weight_expression}: <span class="bad">✗</span> {error.name}: {error.message}
	{:else}
		<span class="good">✓</span>
	{/if}
</span>

<style>
	.good {
		color: green;
	}
	.bad {
		color: red;
	}
</style>
