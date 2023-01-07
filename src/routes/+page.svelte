<script lang="ts">
	import AnimatedLogo from '$lib/components/AnimatedLogo.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
	import RidgeRunner from '$lib/components/RidgeRunner.svelte';
	import Staff from '$lib/components/Staff.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { enhance } from '$app/forms';

	import type { LayoutData } from './$types';
	import type { ActionData } from './$types';

	export let data: LayoutData;
	export let form: ActionData;

	// Reactively assign in order to pass into ContactForm component.
	$: formData = form;
</script>

<div
	class="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 md:justify-start md:space-x-10 lg:px-8"
>
	<AnimatedLogo />
	<AboutUs data={data.church.about} />
	<RidgeRunner />
	<Staff data={data.church} />
	<ContactForm data={data.church} form={formData} />
</div>
