<script lang="ts">
	import type { Church } from '$lib/types/sanitySchema';
	import { urlFor } from '$lib/sanity';

	export let data: Church;
	const { elders } = data;
</script>

<div class="relative">
	<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
			<div class="space-y-5 sm:space-y-4">
				<h2>Meet our leadership</h2>
				<p>
					It shall not be so among you. But whoever would be great among you must be your servant... <strong
						>Matthew 20:26</strong
					>
				</p>
			</div>
			<div class="lg:col-span-2">
				<ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
					{#if elders}
						{#each elders as { name, title, imageUrl }}
							<li>
								<div class="flex items-center space-x-4 lg:space-x-6">
									<img
										class="w-16 h-16 object-cover rounded-full lg:w-20 lg:h-20"
										src={urlFor(imageUrl).width(80).format('webp').toString()}
										alt={name}
									/>
									<div class="font-medium text-lg leading-6 space-y-1">
										<h3>{name}</h3>
										<p class="text-green-600">{title}</p>
									</div>
								</div>
							</li>
						{/each}
					{/if}
				</ul>
			</div>
		</div>
	</div>
</div>
