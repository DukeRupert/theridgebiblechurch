<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { statements } = data.church;
</script>

<div class="mx-auto max-w-prose text-lg">
	<h1>
		<span class="font-semibold leading-6 text-primary-600">Our</span>
		<span class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl"
			>Statement of Faith</span
		>
	</h1>
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
