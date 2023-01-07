<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';

	export let data: InputValue[];
</script>

<div class="sm:flex">
	<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
		<img
			class="w-full h-auto max-w-md lg:max-w-xl object-cover"
			src="/images/sunset.webp"
			alt="The ridge bible church at sunset."
		/>
	</div>
	<div>
		<div class="flex flex-col justify-center items-center">
			<h1>About Us</h1>

			{#each data as block}
				<PortableText value={block} />
			{/each}
			<div class="mt-6">
				<a href="/contact-us" class="btn btn-filled-primary">Contact Us</a>
			</div>
		</div>
	</div>
</div>
