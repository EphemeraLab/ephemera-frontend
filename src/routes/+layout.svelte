<script lang="ts">
	import '../app.css';

	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconMenu from '@lucide/svelte/icons/menu';
	import IconChat from '@lucide/svelte/icons/message-square-text';
	import IconTracing from '@lucide/svelte/icons/search';
	import IconMemories from '@lucide/svelte/icons/brain';
	import IconSettings from '@lucide/svelte/icons/settings';

	let isExpansed = $state(true);

	function toggleExpanded() {
		isExpansed = !isExpansed;
	}

	let { children } = $props();
</script>

<div class="card border-surface-100-900 grid h-screen w-full grid-cols-[auto_1fr] border-[1px] overflow-hidden">
	<Navigation.Rail expanded={isExpansed} classes="sticky top-0">
		{#snippet header()}
			<Navigation.Tile labelExpanded="Menu" onclick={toggleExpanded} title="Toggle Menu Width">
				<IconMenu />
			</Navigation.Tile>
		{/snippet}
		{#snippet tiles()}
			<Navigation.Tile labelExpanded="Chat" href="/chat">
				<IconChat />
			</Navigation.Tile>
			<Navigation.Tile labelExpanded="Tracing" href="/tracing">
				<IconTracing />
			</Navigation.Tile>
			<Navigation.Tile labelExpanded="Memories" href="/memories">
				<IconMemories />
			</Navigation.Tile>
			<Navigation.Tile labelExpanded="Settings" href="/settings" title="Settings">
				<IconSettings />
			</Navigation.Tile>
		{/snippet}
		{#snippet footer()}
			<div></div>
		{/snippet}
	</Navigation.Rail>
	
	<!-- Content -->
	<div class="h-screen m-2">
		{@render children()}
	</div>
</div>
