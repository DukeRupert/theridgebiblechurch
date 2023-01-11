<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { statements } = data.church;
</script>

<div class="mx-auto max-w-prose text-lg">
	<div class="text-center space-y-5 sm:space-y-4">
			<h3 class="block text-center text-xl font-semibold leading-6 text-primary-600">The Ridge Bible Church</h3>
			<h1 class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl">Statement of Faith</h1>
		</div>
</div>
<div class="prose prose-lg dark:prose-invert mx-auto mt-6">
	{#each statements as { statement, title }}
		<h3>{title}</h3>
		<PortableText value={statement} />
	{/each}
</div>
<div class="mt-6 w-full flex items-center">
	<a href="/" class="mt-6 btn btn-filled-primary mx-auto">Return Home</a>
</div>
