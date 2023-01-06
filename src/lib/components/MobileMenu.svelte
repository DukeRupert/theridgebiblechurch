<script lang="ts">
	import { Divider } from '@skeletonlabs/skeleton';
</script>

<div id="mobile-menu" class="flex flex-col">
	<div class="flex flex-col space-y-4 pt-2 pb-3">
		<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
		<a href="/staff" class="block px-6 py-4">Staff</a>
		<a href="/giving" class="block px-6 py-4">Giving</a>
		<a href="/sermons" class="block px-6 py-4">Sermons</a>
		<a href="/statement-of-fait" class="block px-6 py-4">Statement of faith</a>
	</div>
	<Divider />
	<div class="flex flex-col space-y-6 pt-8 pb-3">
		<a class="btn btn-filled-primary" href="https://theridgebiblechurch.breezechms.com/give/online"
			>Give</a
		>

		<a class="btn btn-filled-secondary" href="https://theridgebiblechurch.breezechms.com/login"
			>Sign In</a
		>
	</div>
</div>
