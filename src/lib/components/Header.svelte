<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">(lead)</svelte:fragment>
	(center)
	<svelte:fragment slot="trail">(trail)</svelte:fragment>
</AppBar>
