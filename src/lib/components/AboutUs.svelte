<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';

	export let data: InputValue[];
</script>

<div class="mt-24 md:flex">
	<div>
		<div class="flex flex-col justify-center items-center md:mr-4">
			<h2>About Us</h2>

			{#each data as block}
				<PortableText value={block} />
			{/each}
			<div class="mt-6">
				<a href="/contact-us" class="btn btn-filled-primary">Contact Us</a>
			</div>
		</div>
	</div>
	<div class="mt-4 flex-shrink-0 mr-4 md:mr-0">
		<img
			class="w-full h-auto sm:max-w-md lg:max-w-xl object-cover rounded-md"
			src="/images/sunset.webp"
			alt="The ridge bible church at sunset."
		/>
	</div>
</div>
