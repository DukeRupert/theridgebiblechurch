<script lang="ts">
	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity';
	import { Divider } from '@skeletonlabs/skeleton';

	export let data: PageData;
	const { elders, deacons, directors, supports } = data?.church;
</script>

<div class="relative">
	<div class="mx-auto py-12 max-w-7xl lg:py-24">
		<div class="text-center space-y-5 sm:space-y-4">
			<h3 class="block text-center text-xl font-semibold leading-6 text-primary-600">The Ridge Bible Church</h3>
			<h1 class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl">Staff</h1>
		<p class="font-light">It shall not be so among you. But whoever would be great among you must be your servant... <strong>Matthew 20:26</strong></p>
		</div>
		<div class="mt-6 lg:mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
			{#if elders}
				<div class="lg:col-span-2">
					<h2>Elders</h2>
					<Divider />
					<ul class="mt-6 space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
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
					</ul>
				</div>
			{/if}
			{#if deacons}
				<div class="lg:col-span-2">
					<h2>Deacons</h2>
					<Divider />
					<ul class="mt-6 space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
						{#each deacons as { name, title, imageUrl }}
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
					</ul>
				</div>
			{/if}
			{#if directors}
				<div class="lg:col-span-2">
					<h2>Directors</h2>
					<Divider />
					<ul class="mt-6 space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
						{#each deacons as { name, title, imageUrl }}
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
					</ul>
				</div>
			{/if}
			{#if supports}
				<div class="lg:col-span-2">
					<h2>Support</h2>
					<Divider />
					<ul class="mt-6 space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
						{#each supports as { name, title, imageUrl }}
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
					</ul>
				</div>
			{/if}
		</div>
	</div>
</div>
<div class="mt-6 w-full flex items-center">
	<a href="/" class="mt-6 btn btn-filled-primary mx-auto">Return Home</a>
</div>
