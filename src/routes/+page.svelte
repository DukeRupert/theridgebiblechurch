<script lang="ts">
	import AnimatedLogo from '$lib/components/AnimatedLogo.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	console.log(data);
</script>

<div
	class="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 md:justify-start md:space-x-10 lg:px-8"
>
	<AnimatedLogo />
	<AboutUs data={data.church.about} />
</div>
