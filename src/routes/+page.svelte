<script lang="ts">
	import AnimatedLogo from '$lib/components/AnimatedLogo.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
	import RidgeRunner from '$lib/components/RidgeRunner.svelte';
	import Staff from '$lib/components/Staff.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import triggerToast from '$lib/toast';

	import type { LayoutData } from './$types';
	import type { ActionData } from './$types';

	export let data: LayoutData;
	export let form: ActionData;

	// Reactively assign in order to pass into ContactForm component.
	$: formData = form;
	// Trigger toast notifications
	$: if (form) {
		if (!form.success) {
			triggerToast({
				message: 'Something went wrong.',
				classes: '!bg-warning-500 text-on-warning-token'
			});
		}

		if (form.success) {
			triggerToast({
				message: 'Success',
				classes: '!bg-primary-500 text-on-primary-token'
			});
		}
	}
</script>

<div
	class="bg-gray-50 dark:bg-gray-900 mx-auto flex flex-col max-w-7xl items-center justify-between p-6 md:justify-start md:space-x-10 lg:px-8"
>
	<AnimatedLogo />
	<AboutUs data={data.church.about} />
	<RidgeRunner />
	<Staff data={data.church} />
	<ContactForm data={data.church} form={formData} />
</div>
