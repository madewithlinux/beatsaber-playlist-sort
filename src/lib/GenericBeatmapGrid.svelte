<script lang="ts">
	import type { ColDef, ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
	import 'ag-grid-community/styles/ag-grid.css';
	import 'ag-grid-community/styles/ag-theme-balham.css';
	import AgGridSvelte from 'ag-grid-svelte';
	import type { GenericBeatmapGridRow } from './GenericBeatmapGridLib';
	import { fillGenericBeatmapGridRows } from './GenericBeatmapGridLib';
	import { formatFixedDecimal, formatPercentage, mapperNameCellRenderer2, songNameCellRenderer2 } from './grid_util';

	export let rowData: GenericBeatmapGridRow[];
	$: filledRowData = fillGenericBeatmapGridRows(rowData ?? []);
	// $: console.log((rowData ?? [])[0], (filledRowData ?? [])[0]);

	//////// display options
	export let songCoverImageEnabled = true;
	export let allColumns = false;

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
			field: 'song.name',
			cellRenderer: songNameCellRenderer2({ showCoverImage: songCoverImageEnabled }),
		},
		{ headerName: 'artist', field: 'song.author', hide: !allColumns },
		{
			headerName: 'mapper',
			field: 'song.mapper',
			cellRenderer: mapperNameCellRenderer2,
			hide: !allColumns,
		},
		{ headerName: 'tags', field: 'song.tags', hide: !allColumns },
		{ headerName: 'diff', field: 'difficultyDescription.difficultyName' },
		{ headerName: 'mode', field: 'difficultyDescription.modeName', hide: !allColumns },
		{
			headerName: 'nps',
			field: 'difficultyDescription.nps',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{ headerName: 'njs', field: 'difficultyDescription.njs', type: 'numericColumn' },
		{ headerName: 'duration', field: 'difficultyDescription.duration', type: 'numericColumn' },
		{
			headerName: 'maxScore',
			field: 'difficultyDescription.maxScore',
			type: 'numericColumn',
			hide: !allColumns,
		},
		{
			headerName: 'predictedAcc',
			field: 'difficultyDescription.predictedAcc',
			type: 'numericColumn',
			valueFormatter: formatPercentage,
			hide: !allColumns,
		},
		{
			headerName: '★stars★',
			field: 'difficultyDescription.stars',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{
			headerName: '★pass★',
			field: 'difficultyDescription.passRating',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{
			headerName: '★acc★',
			field: 'difficultyDescription.accRating',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{
			headerName: '★tech★',
			field: 'difficultyDescription.techRating',
			type: 'numericColumn',
			valueFormatter: formatFixedDecimal(2),
		},
		{ headerName: 'notes', field: 'difficultyDescription.notes', type: 'numericColumn' },
		{ headerName: 'bombs', field: 'difficultyDescription.bombs', type: 'numericColumn' },
		{ headerName: 'walls', field: 'difficultyDescription.walls', type: 'numericColumn' },
		{
			headerName: 'uploadTime',
			field: 'song.uploadTime',
			hide: !allColumns,
		},
		{
			headerName: 'nominatedTime',
			field: 'difficultyDescription.nominatedTime',
			hide: !allColumns,
		},
		{
			headerName: 'qualifiedTime',
			field: 'difficultyDescription.qualifiedTime',
			hide: !allColumns,
		},
		{
			headerName: 'rankedTime',
			field: 'difficultyDescription.rankedTime',
			hide: !allColumns,
		},
		{
			headerName: 'timepost',
			field: 'scoreResponse.timepost',
			hide: !allColumns,
		},
	];

	export let api: GridApi | undefined = undefined;
	export let columnApi: ColumnApi | undefined = undefined;
	let gridOptions: GridOptions = {
		defaultColDef: {
			resizable: true,
			sortable: true,
		},
	};
</script>

<div class="container">
	<div class="AgGridSvelte-theme-container ag-grid ag-theme-balham">
		<AgGridSvelte
			{columnDefs}
			rowData={filledRowData}
			bind:api
			bind:columnApi
			{gridOptions}
			onGridReady={({ columnApi }) => {
				columnApi.autoSizeAllColumns();
				// by default, don't make the song name super wide like that
				columnApi.setColumnWidth('song.name', 200);
			}}
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
	.AgGridSvelte-theme-container {
		flex-grow: 1;
		flex-direction: column;
	}
</style>
