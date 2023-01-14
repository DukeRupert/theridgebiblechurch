<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import type { Elder } from '$lib/types/sanitySchema';
	import { PortableText } from '@portabletext/svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data: PageData;
	const { slug } = $page.params;

	async function getElder(slug: string, elders: Elder[]) {
		const elder = data?.church?.elders.find((el) => el.slug === slug);
		if (elder) return elder;
	}
</script>

<div class="mx-auto max-w-prose text-lg">
	{#await getElder(slug, data?.church?.elders)}
		<!-- getElder(slug, data?.church?.elders) is pending -->
	{:then elder}
		<!-- getElder(slug, data?.church?.elders) was fulfilled -->
		{#if typeof elder !== 'undefined'}
			{#if elder.title && elder.name}
				<h3 class="block text-center text-xl font-semibold leading-6 text-primary-600">
					{elder.title}
				</h3>
				<h1 class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
					{elder.name}
				</h1>
			{/if}
			{#if elder.imageUrl}
				<div class="mt-6 w-full flex justify-center">
					<Avatar src={elder.imageUrl} width="w-48" />
				</div>
			{/if}
			{#if elder.bio}
				<div class="prose prose-lg dark:prose-invert mx-auto mt-6">
					<PortableText value={elder.bio} />
				</div>
			{/if}
		{/if}
	{:catch error}
		<h2>Bio not found.</h2>
	{/await}
	<div class="w-full flex justify-center space-x-8 mt-8">
		<a href="/staff" class="btn btn-filled-primary">Go back</a>
		<a href="/" class="btn btn-ringed-secondary">Return Home</a>
	</div>
</div>
