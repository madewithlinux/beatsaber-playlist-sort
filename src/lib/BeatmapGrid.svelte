<script context="module" lang="ts">
	import type { LeaderboardInfoResponse } from '../beatleader';

	export interface BeatmapGridRow {
		leaderboardInfo: LeaderboardInfoResponse;
		sortWeight: number;
	}
</script>

<script lang="ts">
	import type { ColDef, ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
	import 'ag-grid-community/styles/ag-grid.css';
	import 'ag-grid-community/styles/ag-theme-balham.css';
	import AgGridSvelte from 'ag-grid-svelte';
	import { formatFixedDecimal, formatPercentage, songNameCellRenderer } from './grid_util';

	export let rowData: BeatmapGridRow[];

	//////// display options
	let songCoverImageEnabled = true;

	//////// grid config
	let columnDefs: ColDef[];
	$: columnDefs = [
		{
			headerName: 'weight',
			field: 'sortWeight',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(3),
		},
		{
			headerName: 'name',
			field: 'leaderboardInfo.song.name',
			cellRenderer: songNameCellRenderer({ showCoverImage: songCoverImageEnabled }),
		},
		{ headerName: 'diff', field: 'leaderboardInfo.difficulty.difficultyName' },
		{ headerName: 'mode', field: 'leaderboardInfo.difficulty.modeName', hide: true },
		{
			headerName: 'nps',
			field: 'leaderboardInfo.difficulty.nps',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{ headerName: 'njs', field: 'leaderboardInfo.difficulty.njs', type: 'numericColumn' },
		{ headerName: 'duration', field: 'leaderboardInfo.difficulty.duration', type: 'numericColumn' },
		{
			headerName: 'maxScore',
			field: 'leaderboardInfo.difficulty.maxScore',
			type: 'numericColumn',
			hide: true,
		},
		{
			headerName: 'predictedAcc',
			field: 'leaderboardInfo.difficulty.predictedAcc',
			type: 'numericColumn',
			valueFormatter: formatPercentage,
			hide: true,
		},
		{
			headerName: '★stars★',
			field: 'leaderboardInfo.difficulty.stars',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{
			headerName: '★pass★',
			field: 'leaderboardInfo.difficulty.passRating',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{
			headerName: '★acc★',
			field: 'leaderboardInfo.difficulty.accRating',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{
			headerName: '★tech★',
			field: 'leaderboardInfo.difficulty.techRating',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{ headerName: 'notes', field: 'leaderboardInfo.difficulty.notes', type: 'numericColumn' },
		{ headerName: 'bombs', field: 'leaderboardInfo.difficulty.bombs', type: 'numericColumn' },
		{ headerName: 'walls', field: 'leaderboardInfo.difficulty.walls', type: 'numericColumn' },
		{
			headerName: 'uploadTime',
			field: 'leaderboardInfo.song.uploadTime',
			hide: true,
		},
		{
			headerName: 'nominatedTime',
			field: 'leaderboardInfo.difficulty.nominatedTime',
			hide: true,
		},
		{
			headerName: 'qualifiedTime',
			field: 'leaderboardInfo.difficulty.qualifiedTime',
			hide: true,
		},
		{
			headerName: 'rankedTime',
			field: 'leaderboardInfo.difficulty.rankedTime',
			hide: true,
		},
	];

	let api: GridApi, columnApi: ColumnApi;
	let gridOptions: GridOptions = {
		defaultColDef: {
			resizable: true,
			sortable: true,
		},
	};
</script>

<div class="container">
	<div class="gridButtons">
		<button on:click={() => columnApi.autoSizeAllColumns()}>autoSizeAllColumns</button>
		<button on:click={() => api.sizeColumnsToFit()}>sizeColumnsToFit</button>
		<label>
			<input type="checkbox" bind:checked={songCoverImageEnabled} />
			show song cover images?
		</label>
	</div>
	<div class="AgGridSvelte-theme-container ag-grid ag-theme-balham">
		<AgGridSvelte
			{columnDefs}
			{rowData}
			bind:api
			bind:columnApi
			{gridOptions}
			onGridReady={({ columnApi }) => columnApi.autoSizeAllColumns()}
		/>
	</div>
</div>

<style>
	div.container :global(.song-name-cell) {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
	}
	div.container :global(.cover-image) {
		height: 24px;
	}

	div.container {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
	div.gridButtons {
		padding: 10px;
		display: flex;
		gap: 10px;
	}
	.AgGridSvelte-theme-container {
		flex-grow: 1;
		flex-direction: column;
	}
</style>
