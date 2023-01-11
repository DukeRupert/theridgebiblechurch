<script lang="ts">
	import type { PageData } from './$types';
	import SermonCard from '$lib/components/SermonCard.svelte';

	export let data: PageData;
	console.log(data);
</script>

<div class="mx-auto max-w-prose prose text-lg">
	<h3 class="block text-center text-xl font-semibold leading-6 text-primary-600">
		The Ridge Bible Church
	</h3>
	<h1 class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
		Sermons
	</h1>
	<p class="font-light">
		But we preach Christ crucified, a stumbling block to Jews and folly to Gentiles, but to those
		who are called, both Jews and Greeks, Christ the power of God and the wisdom of God. <strong
			>1 Corinthians 1:23-24</strong
		>
	</p>
</div>

<div class="relative">
	<div class="mx-auto py-12 max-w-7xl lg:py-24">
		{#if data.sermons}
			<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
				{#each data.sermons as sermon}
					<li
						class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
					>
						<SermonCard {sermon} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	<div class="flex w-full justify-center mt-6">
		<a href="https://www.youtube.com/@theridgetechteam5382/featured" class="btn btn-filled-primary">
			View More
		</a>
	</div>
</div>
