<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { navigating } from '$app/stores';
	import { drawerClose } from '$lib/utils';
	import MobileMenu from './MobileMenu.svelte';

	$: if ($navigating?.to) drawerClose();
</script>

<Drawer position="right" width="fit-content">
	{#if $drawerStore.id === 'navigation'}
		<div class="p-4 h-full">
			<MobileMenu />
		</div>
	{:else if $drawerStore.id === 'something'}
		<p>Show something else</p>
	{:else}
		<p>(fallback contents)</p>
	{/if}
</Drawer>
