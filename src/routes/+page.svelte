<script lang="ts">
	import { page } from '$app/stores';
	import type { BeatmapGridRow } from '$lib/BeatmapGrid.svelte';
	import BeatmapGrid from '$lib/BeatmapGrid.svelte';
	import ErrorIndicator from '$lib/ErrorIndicator.svelte';
	import { generatePlaylistDataURI } from '$lib/generate_playlist';
	import { batch_apply_sort_weight } from '$lib/sort_weight_calc';
	import type { ColumnApi, GridApi } from 'ag-grid-community';
	import type { LeaderboardInfoResponse, LeaderboardInfoResponseResponseWithMetadata } from '../beatleader';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	const leaderboard_info_response: LeaderboardInfoResponseResponseWithMetadata = $page.data.item;
	const maps: LeaderboardInfoResponse[] = leaderboard_info_response.data!;

	// config variables
	let sort_weight_expression = $page.url.searchParams.get('expr') ?? 'stars/nps + techStars/nps - sq(njs-15)/10';
	let playlist_size = Number($page.url.searchParams.get('size') ?? 100);
	let playlist_title = $page.url.searchParams.get('title') ?? 'weighted tech';
	let playlist_author = $page.url.searchParams.get('author') ?? 'Luna';

	$: {
		const pageQueryStr = $page.url.searchParams.toString();
		const query = new URLSearchParams(pageQueryStr);
		query.set('expr', sort_weight_expression.toString());
		query.set('size', playlist_size.toString());
		query.set('title', playlist_title);
		query.set('author', playlist_author);
		const newQueryStr = query.toString();
		if (browser && newQueryStr !== pageQueryStr) {
			goto(`?${newQueryStr}`, { noScroll: true, keepFocus: true });
		}
	}

	// calculations
	let weight_sorted_maps: BeatmapGridRow[];
	let error: Error | undefined = undefined;
	$: {
		try {
			const weight_sorted_maps2 = batch_apply_sort_weight(sort_weight_expression, maps);
			weight_sorted_maps = weight_sorted_maps2;
			error = undefined;
		} catch (e) {
			if (e instanceof Error) {
				error = e;
			} else {
				console.error(e);
				error = new Error(`unknown error ${e}`);
			}
		}
	}
	// $: playlistDataURI = generatePlaylistDataURI(
	// 	weight_sorted_maps.slice(0, playlist_size).map((b) => b.leaderboardInfo),
	// 	playlist_title,
	// 	playlist_author,
	// );
	$: playlistSyncURL = `${$page.url.origin}/api/sorted_playlist?${$page.url.searchParams.toString()}`;

	// stuff for the grid
	let api: GridApi | undefined = undefined;
	let columnApi: ColumnApi | undefined = undefined;
	let songCoverImageEnabled = true;
	let allColumns = false;
	// $: console.log(weight_sorted_maps[1]);
</script>

<div class="container">
	<div class="header">
		<h1>beatleader playlist sort</h1>
		<div class="row">
			<label for="sort-weight-expression"> sort weight expression: </label>
			<input id="sort-weight-expression" class="wide" bind:value={sort_weight_expression} />
			<ErrorIndicator {error} />
		</div>
		<div class="row">
			<label>
				playlist size:
				<input type="number" bind:value={playlist_size} />
			</label>
			<label>
				playlist title:
				<input bind:value={playlist_title} />
			</label>
			<label>
				playlist author:
				<input bind:value={playlist_author} />
			</label>
			<!-- <a href={playlistDataURI} download="{playlist_title}.json"> click to download playlist </a> -->
			<a href={playlistSyncURL} download="{playlist_title}.json"> click to download playlist </a>
		</div>
		<div class="row">
			<button on:click={() => columnApi?.autoSizeAllColumns()}>autoSizeAllColumns</button>
			<button on:click={() => api?.sizeColumnsToFit()}>sizeColumnsToFit</button>
			<label>
				<input type="checkbox" bind:checked={songCoverImageEnabled} />
				show song cover images?
			</label>
			<label>
				<input type="checkbox" bind:checked={allColumns} />
				show all columns?
			</label>
		</div>
	</div>
	<div class="content">
		<BeatmapGrid rowData={weight_sorted_maps} bind:api bind:columnApi {songCoverImageEnabled} {allColumns} />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
			sans-serif;
		font-size: 1.2rem;
		--gap: 0.5em;
	}
	h1 {
		margin: 0;
	}
	div.container {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
	}
	div.header {
		/* padding: 10px; */
		/* padding: 1em; */
		padding-left: 1em;
		padding-right: 1em;
		padding-top: var(--gap);
		padding-bottom: var(--gap);
		gap: var(--gap);
		display: flex;
		flex-direction: column;
		/* gap: 5px; */
	}
	.row {
		display: flex;
		gap: var(--gap);
	}
	.row .wide {
		flex-grow: 1;
	}
	div.content {
		flex-grow: 1;
		display: flex;
	}
</style>
