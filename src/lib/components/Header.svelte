<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { drawerOpen } from '$lib/utils';
	import Menu from '$lib/icons/Menu.svelte';
	import { menu } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead"
		><img class="h-8" src="/RidgeLogo.svg" alt="The Ridge Bible Church logo" /></svelte:fragment
	>

	<nav class="relative hidden md:flex justify-between">
		<div class="ml-4 flex items-center space-x-6">
			<span class="relative">
				<button use:menu={{ menu: 'about-us' }}>About Us</button>
				<div class="list-nav card p-4 w-64 shadow-xl" data-menu="about-us">
					<ul>
						<li><a href="/why-the-ridge">Why the Ridge?</a></li>
						<li><a href="/statement-of-faith">Statement of Faith</a></li>
						<li><a href="/staff">Staff</a></li>
					</ul>
				</div>
			</span>
			<a href="/sermons" class="block">Sermons</a>
			<a href="/contact-us" class="block">Contact Us</a>
		</div>
		<div class="ml-auto">
			<a
				class="btn btn-filled-primary"
				href="https://theridgebiblechurch.breezechms.com/give/online">Give</a
			>

			<a class="btn btn-outline-secondary" href="https://theridgebiblechurch.breezechms.com/login"
				>Sign In</a
			>
		</div>
	</nav>

	<svelte:fragment slot="trail"
		><button
			class="btn-icon md:hidden"
			type="button"
			on:click={() => drawerOpen({ id: 'navigation' })}><Menu /></button
		></svelte:fragment
	>
</AppBar>
