<script>
	import '../app.css';
  import Navigation from '$lib/navigation.svelte';
	import Footer from '$lib/Footer.svelte';
  import { page } from '$app/stores';
	
	let { children } = $props();
  
</script>



<div class="min-h-screen flex flex-col">

  <!-- Navigation -->
  <Navigation />

  <!-- Content -->
  <main class="flex-1">
	{@render children?.()}  
</main>

<Footer />

</div>




