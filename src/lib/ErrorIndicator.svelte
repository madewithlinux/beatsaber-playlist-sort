<script lang="ts">
	export let error: Error | undefined = undefined;
	let is_good: boolean;
	$: is_good = error === undefined;
	$: title = error === undefined ? '' : `${error.name}: ${error.message}`;
	let expand = false;
</script>

<div {title}>
	{#if error && expand}
		<span>{error.name}: {error.message}</span>
	{/if}
	<label class:good={is_good} class:bad={!is_good}>
		<input type="checkbox" bind:checked={expand} />
		{#if is_good}✓{:else}✗{/if}
	</label>
</div>

<style>
	label {
		display: block;
		min-width: 1em;
		text-align: center;
	}
	.good {
		color: green;
	}
	.bad {
		color: red;
		cursor: pointer;
	}
	input[type='checkbox'] {
		display: none;
	}
</style>
