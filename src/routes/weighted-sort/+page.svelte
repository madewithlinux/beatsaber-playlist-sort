<script lang="ts">
	import type {
		LeaderboardInfoResponse,
		LeaderboardInfoResponseResponseWithMetadata
	} from '../../beatleader';
	import { sortBy } from 'lodash-es';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	const leaderboard_info_response: LeaderboardInfoResponseResponseWithMetadata = $page.data.item;
	const maps: LeaderboardInfoResponse[] = leaderboard_info_response.data!;

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
	// const sorted_maps = sortBy(songs, [compute_leaderboard_entry_rank]);
	// const sorted_maps = [...maps]
	// 	.sort((a, b) => compute_leaderboard_entry_rank(b) - compute_leaderboard_entry_rank(a))
	// 	.slice(0, 10);
	const weight_sorted_maps = [...maps]
		.map((map) => [compute_leaderboard_entry_rank(map), map] as const)
		// .sort()
        // sort it in the reverse
		.sort((a,b) => (b[0] - a[0]))
		.slice(0, 10);
</script>

<h1>beatleader playlist sort</h1>
<h1>{leaderboard_info_response.data?.length}</h1>

<table>
	<tbody>
		<tr>
            <th>weight</th>
			<th>name</th>
			<th>difficultyName</th>
			<th>nps</th>
			<th>njs</th>
			<th>stars</th>
			<th>predictedAcc</th>
			<th>passRating</th>
			<th>accRating</th>
			<th>techRating</th>
		</tr>
		<!-- {#each sorted_maps as map} -->
		{#each weight_sorted_maps as [weight, map]}
			<tr>
				<td>{weight}</td>
                <td>
					<a href={`https://www.beatleader.xyz/leaderboard/global/${map.id}/1`}>
						{map.song?.name}
					</a>
				</td>
				<td>{map.difficulty?.difficultyName}</td>
				<td>{map.difficulty?.nps}</td>
				<td>{map.difficulty?.njs}</td>
				<td>{map.difficulty?.stars}</td>
				<td>{map.difficulty?.predictedAcc}</td>
				<td>{map.difficulty?.passRating}</td>
				<td>{map.difficulty?.accRating}</td>
				<td>{map.difficulty?.techRating}</td>
				<!-- <td>{map.song?.author}</td> -->
			</tr>
		{/each}
	</tbody>
</table>
