<script>
	import '../app.css';
  import Navigation from '$lib/navigation.svelte';
	
	let { children } = $props();

  import { page } from '$app/stores';
</script>



<div class="min-h-screen flex flex-col">

  <!-- Navigation -->
  <Navigation />

  <!-- Content -->
  <main class="flex-1">
	{@render children?.()}  
</main>
</div>




