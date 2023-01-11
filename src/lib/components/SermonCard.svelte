<script lang="ts">
	import type { Sermon } from '$lib/types/youtube';

	export let sermon: Sermon;
</script>

<div class="card h-full card-glass-surface">
	<header class="card-header">
		<img
			src={sermon.thumbnail.url}
			height={sermon.thumbnail.height}
			width={sermon.thumbnail.width}
			class="bg-black/50 w-full aspect-[16/9]"
			alt="Post"
		/>
	</header>
	<div class="p-4">
		<div class="p-4 space-y-4">
			<h6 class="text-primary-500">
				{sermon.info.date.month}
				{sermon.info.date.day}, {sermon.info.date.year}
			</h6>
			<h3>{sermon.info.title}</h3>
			{#if sermon.description}
				<article>
					<p>{sermon.description}</p>
				</article>
			{/if}
		</div>
	</div>
	<footer>
		<a href="https://www.youtube.com/watch?v={sermon.id}" class="btn btn-outline-primary mb-4"
			><span>Watch</span><span>></span></a
		>
	</footer>
</div>
