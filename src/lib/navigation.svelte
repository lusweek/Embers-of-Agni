<script>
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { fly, fade, slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  // UI-state
  let isMobileMenuOpen = false;
  let isDesktopDropdownOpen = false;
  let openMobileDropdown = null;

  // Menydata (ändra här i framtiden)
  const menuItems = [
    {
      label: "Eldshow",
      href: "/eldshow",
      children: [
        { label: "Stora showen", href: "/eldshow/stora-showen" },
        { label: "Lilla showen", href: "/eldshow/lilla-showen" }
      ]
    },
    { label: "Workshops", href: "/workshops" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Bibliotek", href: "/bibliotek" }
  ];

  // Prenumerera på page-store och spara aktuell path i en vanlig variabel
  let currentPath = "";
  const unsubscribePage = page.subscribe(p => {
    currentPath = p?.url?.pathname ?? "";
  });

  function parentLabelForPath(path) {
    const parent = menuItems.find(i => i.children?.some(child => path === child.href || path.startsWith(child.href + "/")));
    return parent ? parent.label : null;
  }

  afterNavigate(() => {
    isMobileMenuOpen = false;
    isDesktopDropdownOpen = false;
    openMobileDropdown = parentLabelForPath(currentPath);
  });

  onMount(() => {
    window.addEventListener("scroll", handleDesktopScroll);
    openMobileDropdown = parentLabelForPath(currentPath);
    return () => {
      window.removeEventListener("scroll", handleDesktopScroll);
    };
  });

  onDestroy(() => {
    unsubscribePage();
  });

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
      // Eldshow-dropdownen ska alltid vara öppen när menyn fälls ut
      openMobileDropdown = "Eldshow";
    }
  }

  function toggleMobileDropdown(label) {
    openMobileDropdown = openMobileDropdown === label ? null : label;
  }

  function isActive(href) {
    return currentPath === href || currentPath.startsWith(href + "/");
  }

  /* scroll-logik för desktop navbar */
  let lastWindowScroll = 0;
  let hideDesktopNavbar = false;

  function handleDesktopScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > lastWindowScroll && currentScroll > 40) {
      hideDesktopNavbar = true;
    } else {
      hideDesktopNavbar = false;
    }

    lastWindowScroll = currentScroll;
  }
</script>

<nav class="vf-nav {hideDesktopNavbar ? 'is-hidden' : ''}">
  <div class="wrap vf-nav-inner">
    <a class="brand" href="/">Vilda<span>Flammor</span></a>

    <ul class="navlinks hidden lg:flex">
      {#each menuItems as item}
        {#if item.children}
          <li class="has-dropdown"
              on:mouseenter={() => (isDesktopDropdownOpen = true)}
              on:mouseleave={() => (isDesktopDropdownOpen = false)}>
            <a href={item.href} class:active={isActive(item.href)}>
              {item.label}
              <svg class="caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {#if isDesktopDropdownOpen}
              <ul class="dropdown" transition:slide={{ duration: 180, easing: cubicOut }}>
                {#each item.children as child}
                  <li>
                    <a href={child.href} class:active={isActive(child.href)}>{child.label}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {:else}
          <li>
            <a href={item.href} class:active={isActive(item.href)}>
              {item.label}
            </a>
          </li>
        {/if}
      {/each}
    </ul>

    <a class="nav-cta hidden lg:inline-block" href="/boka">Boka show</a>

    <!-- Mobile hamburger -->
    <button
      class="hamburger lg:hidden"
      on:click={toggleMobileMenu}
      aria-label="Öppna meny"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>

<!-- Overlay (bakom menyn) -->
{#if isMobileMenuOpen}
  <div
    role="button"
    tabindex="0"
    aria-label="Stäng mobilmenyn"
    class="mobile-overlay"
    on:click={() => (isMobileMenuOpen = false)}
    on:keydown={(e) => (e.key === "Enter" || e.key === " ") && (isMobileMenuOpen = false)}
    in:fade={{ duration: 200, easing: cubicOut }}
    out:fade={{ duration: 200, easing: cubicOut }}>
  </div>
{/if}

<!-- mobilmeny -->
{#if isMobileMenuOpen}
  <aside
    class="mobile-aside"
    in:fly={{ x: 300, duration: 400, easing: cubicOut }}
    out:fly={{ x: 300, duration: 400, easing: cubicOut }}>

    <div class="mobile-aside-head">
      <a class="brand" href="/" on:click={closeMobileMenu}>Vilda<span>Flammor</span></a>
      <button on:click={closeMobileMenu} class="mobile-close" aria-label="Stäng meny">✕</button>
    </div>

    <nav class="mobile-menu-content">
      {#each menuItems as item}
        {#if item.children}
          <div class="mobile-dropdown-group">
            <div class="mobile-dropdown-row">
              <a href={item.href}
                 on:click={closeMobileMenu}
                 class="mobile-dropdown-label"
                 class:active={isActive(item.href)}>
                {item.label}
              </a>
              <button
                class="mobile-dropdown-arrow"
                on:click={() => toggleMobileDropdown(item.label)}
                aria-expanded={openMobileDropdown === item.label}
                aria-label="Visa undermeny för {item.label}"
              >
                <svg class="caret" class:open={openMobileDropdown === item.label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {#if openMobileDropdown === item.label}
              <div class="mobile-submenu" transition:slide={{ duration: 220, easing: cubicOut }}>
                {#each item.children as child}
                  <a href={child.href} on:click={closeMobileMenu} class:active={isActive(child.href)}>{child.label}</a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <a href={item.href}
             on:click={closeMobileMenu}
             class:active={isActive(item.href)}>
            {item.label}
          </a>
        {/if}
      {/each}
      <a class="nav-cta mobile-cta" href="/boka" on:click={closeMobileMenu}>Boka show</a>
    </nav>
  </aside>
{/if}

<style>
  .vf-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: rgba(13, 8, 6, 0.82);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 201, 74, 0.12);
    transition: transform 0.3s ease;
  }

  .vf-nav.is-hidden {
    transform: translateY(-100%);
  }

  .vf-nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 32px;
    gap: 24px;
  }

  .navlinks {
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14.5px;
  }

  .navlinks > li {
    position: relative;
  }

  .navlinks a {
    text-decoration: none;
    color: var(--ink-dim);
    transition: color 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .navlinks a:hover,
  .navlinks a.active,
  .dropdown a.active,
  .mobile-menu-content a.active {
    color: var(--gold);
  }

  .caret {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }

  .has-dropdown:hover .caret {
    transform: rotate(180deg);
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    padding-top: 14px;
    list-style: none;
    margin: 0;
    z-index: 10;
  }

  .dropdown::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 14px;
  }

  .dropdown-inner,
  .dropdown {
    background: transparent;
  }

  .dropdown > li {
    background: var(--bg-alt);
    border: 1px solid rgba(255, 201, 74, 0.2);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  }

  .dropdown > li:first-child {
    border-radius: 10px 10px 0 0;
    border-bottom: none;
  }

  .dropdown > li:last-child {
    border-radius: 0 0 10px 10px;
  }

  .dropdown a {
    display: block;
    padding: 11px 18px;
    white-space: nowrap;
    color: var(--ink-dim);
    font-size: 14px;
  }

  .dropdown a:hover {
    background: rgba(255, 201, 74, 0.1);
    color: var(--gold);
  }

  .hamburger {
    background: transparent;
    border: none;
    color: var(--ink);
    cursor: pointer;
    padding: 6px;
  }

  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 40;
  }

  .mobile-aside {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 78vw;
    width: 320px;
    background: var(--bg-alt);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.4);
    z-index: 50;
    display: flex;
    flex-direction: column;
    border-left: 1px solid rgba(255, 201, 74, 0.15);
  }

  .mobile-aside-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid rgba(255, 201, 74, 0.12);
  }

  .mobile-close {
    background: transparent;
    border: none;
    color: var(--ink);
    font-size: 18px;
    cursor: pointer;
    padding: 4px 8px;
  }

  .mobile-menu-content {
    flex: 1;
    overflow-y: auto;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .mobile-menu-content > a {
    text-decoration: none;
    color: var(--ink);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 0.02em;
  }

  .mobile-dropdown-group {
    display: flex;
    flex-direction: column;
  }

  .mobile-dropdown-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
  }

  .mobile-dropdown-label {
    text-decoration: none;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 0.02em;
    color: var(--ink);
  }

  .mobile-dropdown-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 10px;
    margin: -10px;
    cursor: pointer;
  }

  .mobile-dropdown-arrow .caret {
    width: 16px;
    height: 16px;
    color: var(--ink);
    transition: transform 0.2s ease;
  }

  .mobile-dropdown-arrow .caret.open {
    transform: rotate(180deg);
  }

  .mobile-submenu {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 18px 0 0 16px;
  }

  .mobile-submenu a {
    text-decoration: none;
    color: var(--ink-dim);
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
  }

  .mobile-cta {
    text-align: center;
    margin-top: 12px;
  }

  .mobile-menu-content a.mobile-cta {
    color: #1b0800;
    font-family: 'Work Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
  }

  :global(main.padding-top) {
    padding-top: 78px;
  }
</style>
