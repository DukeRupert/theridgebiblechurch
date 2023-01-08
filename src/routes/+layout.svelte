<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { Toast } from '@skeletonlabs/skeleton';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import type { LayoutData } from './$types';
	import { navigating } from '$app/stores';
	import { drawerClose } from '$lib/utils';

	export let data: LayoutData;

	$: if ($navigating) drawerClose();
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment slot="sidebarRight"><Drawer /></svelte:fragment>
	<!-- Router Slot -->
	<div class="relative overflow-hidden py-16 bg-gray-50 dark:bg-gray-900">
		<div class="relative px-6 lg:px-8">
			<slot />
		</div>
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
<Toast />
