<script lang="ts">
	import ToggleTheme from '$lib/Header/ToggleTheme.svelte';
</script>

<div class="navbar bg-secondary my-4 rounded-3xl shadow-sm">
	<div class="flex flex-1">
		<a class="btn btn-ghost text-secondary-content text-xl" href="/">Home</a>
		<a class="btn btn-ghost text-secondary-content text-xl" href="/about">About</a>
		<a class="btn btn-ghost text-secondary-content text-xl" href="/projects">Projects</a>
		<a class="btn btn-ghost text-secondary-content text-xl" href="/contact">Contact</a>
	</div>

	<ToggleTheme />
</div>
