<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';

	export let data: InputValue[];
</script>

<div class="relative">
	<div class="mx-auto py-12 max-w-7xl lg:py-24 mt-12 lg:mt-24">
		<div class="md:flex">
			<div class="mt-4 flex-shrink-0">
				<img
					class="w-full h-auto md:max-w-md lg:max-w-xl object-cover rounded-md"
					src="/images/sunset.webp"
					alt="The ridge bible church at sunset."
				/>
			</div>
			<div class="mt-4">
				<div class="flex flex-col prose justify-center items-center sm:ml-4 md:ml-8">
					<h2>About Us</h2>

					{#each data as block}
						<PortableText value={block} />
					{/each}
					<div class="mt-6">
						<a href="/contact-us" class="btn btn-filled-primary no-underline">Contact Us</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
