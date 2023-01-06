<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { drawerOpen } from '$lib/utils';
	import Menu from '$lib/icons/Menu.svelte';
</script>

<AppBar>
	<svelte:fragment slot="lead"
		><img class="h-8" src="/RidgeLogo.svg" alt="The Ridge Bible Church logo" /></svelte:fragment
	>
	(center)
	<svelte:fragment slot="trail"
		><button class="btn-icon" type="button" on:click={() => drawerOpen({ id: 'navigation' })}
			><Menu /></button
		></svelte:fragment
	>
</AppBar>
