<script lang="ts">
	import { theRidge, ridgeline, bibleChurch } from '$lib/shapes';
	import { sineIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	const stroke: string = 'stroke:#b61200; stroke-width: 0.5';
	const fill: string = 'stroke:#b60000; fill: #b60000';

	// Animations do not play on initial load by default. Condition change used to trigger logo animation.
	let condition: boolean = false;
	setTimeout(() => (condition = true));
</script>

<h1 class="hidden">The Ridge Bible Church</h1>
{#if condition}
	<svg version="1.1" viewBox="0 0 268 116" xmlns="http://www.w3.org/2000/svg">
		<g transform="translate(-16.4 -40.2)" fill="#b60000" stroke-width=".0847">
			<path d={theRidge}>
				<title>theRidge</title>
			</path>
			<g in:fade={{ delay: 500, duration: 2000, easing: sineIn }} fill="#FFFFFF">
				<path style={stroke} d={ridgeline}>
					<title>ridgeline</title>
				</path>
				<path style={fill} d={ridgeline}>
					<title>ridgeline</title>
				</path>
			</g>
			<path d={bibleChurch}>
				<title>bibleChurch</title>
			</path>
		</g>
	</svg>
{/if}

<style>
	svg {
		margin-top: var(--section-margin-top);
		margin-bottom: var(--half-section);
	}
</style>
