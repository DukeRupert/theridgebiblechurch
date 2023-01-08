<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import type { PageData } from './$types';
	import type { ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;
	$: formData = form;
</script>

<div class="relative overflow-hidden py-16 bg-gray-50 dark:bg-gray-900">
	<div class="relative px-6 lg:px-8">
		<ContactForm data={data?.church} form={formData} />
	</div>
</div>
