<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';

	export let data: InputValue[];
	console.log(data);
</script>

<div class="flex flex-col justify-center items-center">
	<h1>About Us</h1>

	{#each data as block}
		<PortableText value={block} />
	{/each}
	<div class="mt-6">
		<a href="/contact-us" class="btn btn-filled-primary">Contact Us</a>
	</div>
</div>
