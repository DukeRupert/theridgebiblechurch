<script lang="ts">
	import { org } from '$lib/settings';
	import SocialMedia from './SocialMedia.svelte';

	const tel = `tel:${org.tel.international}-${org.tel.area}-${org.tel.exchange}-${org.tel.number}`;
	const phone = `(${org.tel.area})&nbsp;${org.tel.exchange}-${org.tel.number}`;
</script>

<footer>
	<div class="mx-auto max-w-7xl overflow-hidden py-12 px-6 lg:px-8">
		<div class="flex flex-col items-center space-x-2 space-y-4">
			<p>{org.address.location} | {org.address.city}, {org.address.state} {org.address.zip}</p>

			<p><a href={tel}>{@html phone}</a></p>
			<div class="flex">
				<SocialMedia />
			</div>
			<p>&copy; 2020 The Ridge Bible Church</p>
		</div>
	</div>
</footer>
