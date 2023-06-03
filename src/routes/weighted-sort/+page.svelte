<script lang="ts">
	import { page } from '$app/stores';
	import type { BeatmapGridRow } from '$lib/BeatmapGrid.svelte';
	import BeatmapGrid from '$lib/BeatmapGrid.svelte';
	import type {
		LeaderboardInfoResponse,
		LeaderboardInfoResponseResponseWithMetadata,
	} from '../../beatleader';

	const leaderboard_info_response: LeaderboardInfoResponseResponseWithMetadata = $page.data.item;
	const maps: LeaderboardInfoResponse[] = leaderboard_info_response.data!;

	// TODO: abstract this out
	const compute_leaderboard_entry_rank = (lb: LeaderboardInfoResponse) => {
		const difficulty = lb.difficulty!;
		const nps = difficulty.nps!;
		const njs = difficulty.njs!;
		const stars = difficulty.stars!;
		const predictedAcc = difficulty.predictedAcc!;
		const passRating = difficulty.passRating!;
		const accRating = difficulty.accRating!;
		const techRating = difficulty.techRating!;
		if (njs >= 11) {
			return techRating / nps;
		} else {
			return techRating / nps / 10;
		}
		// return techRating / nps;
	};

	const weight_sorted_maps: BeatmapGridRow[] = [...maps]
		.map((leaderboardInfo) => ({
			sortWeight: compute_leaderboard_entry_rank(leaderboardInfo),
			leaderboardInfo,
		}))
		// sort it in the reverse
		.sort((a, b) => b.sortWeight - a.sortWeight);
</script>

<div class="container">
	<div class="header">
		<h1>beatleader playlist sort</h1>
		<h1>{leaderboard_info_response.data?.length}</h1>
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
		padding: 10px;
	}
	div.content {
		flex-grow: 1;
		display: flex;
	}
</style>
