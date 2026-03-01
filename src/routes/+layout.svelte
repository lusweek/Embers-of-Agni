<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import EmberCanvas from '$lib/components/EmberCanvas.svelte';
  let { children } = $props();
</script>

<EmberCanvas />
<Navbar />
<main>
  {@render children()}
</main>
