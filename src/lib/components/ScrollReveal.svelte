<script>
  import { onMount } from 'svelte';

  let { children, delay = 0, threshold = 0.15 } = $props();
  let el;
  let visible = $state(false);

  onMount(() => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={el}
  class="reveal"
  class:visible
  style:transition-delay="{delay}ms"
>
  {@render children()}
</div>
