<script>
  import LanguageToggle from './LanguageToggle.svelte';

  let scrolled = $state(false);

  $effect(() => {
    function onScroll() {
      scrolled = window.scrollY > 50;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<header class="navbar" class:scrolled>
  <nav class="navbar-inner">
    <a href="#hero" class="brand">Embers of Agni</a>
    <LanguageToggle />
  </nav>
</header>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 40;
    transition: background-color 0.3s ease, border-color 0.3s ease, opacity 0.3s ease;
    background: transparent;
    border-bottom: 1px solid transparent;
    opacity: 0.4;
  }

  .navbar.scrolled {
    background: var(--bg-elevated);
    border-bottom-color: var(--border-subtle);
    opacity: 1;
  }

  .navbar-inner {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.12em;
    color: var(--text-primary);
    text-transform: uppercase;
  }
</style>
