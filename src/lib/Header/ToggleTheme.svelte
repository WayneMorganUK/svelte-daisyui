<script lang="ts">
	import { theme } from '$lib/runes/localStorage.svelte';
	import { daisyuiThemes } from '$lib/runes/daisyuiThemes';
</script>

<div class="dropdown dropdown-end">
	<div tabindex="0" role="button" class="btn m-1">
		<svg
			width="12px"
			height="12px"
			class="inline-block h-2 w-2 fill-current opacity-60"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
		>
			<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
		</svg>
		🎨 {theme.value}
	</div>

	<!-- <ul
		class="dropdown-content menu bg-base-300 rounded-box z-1 max-h-[calc(100vh-8.6rem)] w-32 overflow-y-auto p-2 shadow-2xl"
	> -->
	<ul
		class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5"
	>
		{#each daisyuiThemes as daisyuiTheme}
			<li>
				<input
					onchange={() => (theme.value = daisyuiTheme)}
					type="radio"
					name="theme-dropdown"
					class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					aria-label={daisyuiTheme}
					value={daisyuiTheme}
				/>
			</li>
		{/each}
	</ul>
</div>

<!-- <ul class="dropdown-content menu bg-base-100 m-1 h-96  p-2 shadow-sm"></ul> -->
