<script>
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { fly, slide, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  // UI-state
  let isDropdownOpen = false;         // desktop dropdown (Erbjudanden)
  let isMobileMenuOpen = false;       // off-canvas mobile menu
  let openMobileDropdown = null;      // vilket mobile dropdown (label) är öppet, eller null

  // Menydata (ändra här i framtiden)
  const menuItems = [
    { label: "Hem", href: "/" },
    { label: "Vi är Empers of Agni", href: "/om_oss" },
    {
      label: "Erbjudanden",
      children: [
        { label: "Eldshower", href: "/eldshower" },
        { label: "LED show", href: "/LED-shower" },
        { label: "Prova på flowarts", href: "/prova_pa_flowarts" }
      ]
    },
    { label: "Priser", href: "/priser" },
    { label: "Info innan bokning", href: "/info_innan_bokning" },
    { label: "Kontakta oss", href: "/kontakta_oss" }
  ];

  // Prenumerera på page-store och spara aktuell path i en vanlig variabel
  let currentPath = "";
  const unsubscribePage = page.subscribe(p => {
    // p kan finnas även under SSR, men pathname är vanligtvis definierad i SvelteKit
    currentPath = p?.url?.pathname ?? "";
  });

  // helper: hitta parent-label om någon child matchar path
  function parentLabelForPath(path) {
    const parent = menuItems.find(i => i.children?.some(child => child.href === path));
    return parent ? parent.label : null;
  }

  // stäng allt vid navigation
  afterNavigate(() => {
    isDropdownOpen = false;
    isMobileMenuOpen = false;
    // uppdatera vilken dropdown som ska vara öppen efter navigation
    openMobileDropdown = parentLabelForPath(currentPath);
  });

  // Klick-utanför öppen navbar logik
  function handleClickOutside(e) {
    if (!e.target.closest(".dropdown")) {
      isDropdownOpen = false;
    }
  }

  onMount(() => {
    // initial state på klienten (efter hydration)
    openMobileDropdown = parentLabelForPath(currentPath);

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  });

  onDestroy(() => {
    unsubscribePage();
  });

  // helper för att stänga mobilen när en länk klickas
  function closeMobileMenu() {
    isMobileMenuOpen = false;
    openMobileDropdown = null;
  }
</script>


<!-- Navbar (fixed top) ta bort fixed om den inte ska följa med scroll -->
<nav class="navbar bg-base-200">
<!-- <nav class="navbar bg-base-200 fixed h-6 top-0 left-0 right-0 z-50">  FIXED NAVBAR -->
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">Embers of Agni</a>
  </div>

  <!-- Desktop: visas från md och upp -->
  <div class="hidden md:flex">
    <ul class="menu menu-horizontal px-1">
      {#each menuItems as item}
        {#if item.children}
          <li class="dropdown relative"
              on:mouseenter={() => (isDropdownOpen = true)}
              on:mouseleave={() => (isDropdownOpen = false)}>
            <button class="flex items-center gap-1">
              {item.label}
              <svg class="w-4 h-4 transition-transform {isDropdownOpen ? 'rotate-180' : ''}"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {#if isDropdownOpen}
              <ul class="absolute bg-base-100 rounded-t-none p-2 shadow"
                in:slide={{ x: 300, duration: 500, easing: cubicOut }}
                out:slide={{ x: 300, duration: 500, easing: cubicOut }}>
                {#each item.children as child}
                  <li>
                    <a href={child.href}
                       on:click={() => (isDropdownOpen = false)}
                       class:active={currentPath === child.href}>
                      {child.label}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {:else}
          <li>
            <a href={item.href} class:active={currentPath === item.href}>
              {item.label}
            </a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>

  <!-- Mobile hamburger -->
  <div class="md:hidden">
    <button on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)} class="btn btn-ghost" aria-label="Öppna meny">
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
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    on:click={() => (isMobileMenuOpen = false)}
    on:keydown={(e) => (e.key === "Enter" || e.key === " ") && (isMobileMenuOpen = false)}
    in:fade={{ duration: 200, easing: cubicOut }}
    out:fade={{ duration: 200, easing: cubicOut }}>
  </div>
{/if}

<!-- mobilmeny -->
{#if isMobileMenuOpen}
  <aside 
    class="fixed top-0 right-0 h-full w-4/5 bg-base-100 shadow-lg z-50 p-6 overflow-y-auto"
    in:fly={{ x: 300, duration: 500, easing: cubicOut }}
    out:fly={{ x: 300, duration: 500, easing: cubicOut }}>

    <div 
      role="presentation" 
      tabindex="-1" 
      on:click|stopPropagation
    >
      <button 
        on:click={() => (isMobileMenuOpen = false)} 
        class="btn btn-sm btn-ghost absolute top-4 right-4" 
        aria-label="Stäng meny">✕
      </button>

      <nav class="space-y-4 mt-8">
        {#each menuItems as item}
          {#if item.children}
            <div>
              <button
                class="flex items-center justify-between w-full text-left py-2"
                on:click={() => openMobileDropdown = openMobileDropdown === item.label ? null : item.label}
                aria-expanded={openMobileDropdown === item.label}
                aria-controls={item.label.replace(/\s+/g, "-") + "-submenu"}>
                <span>{item.label}</span>
                <svg class="w-4 h-4 transition-transform {openMobileDropdown === item.label ? 'rotate-180' : ''}"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {#if openMobileDropdown === item.label}
                <ul id={item.label.replace(/\s+/g, "-") + "-submenu"}
                    class="pl-4 mt-2 space-y-2"
                    in:slide={{ duration: 400, easing: cubicOut }}
                    out:slide={{ duration: 300, easing: cubicOut }}>
                  {#each item.children as child}
                    <li>
                      <a href={child.href}
                         on:click={() => closeMobileMenu()}
                         class:active={currentPath === child.href}>
                        {child.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </div>
          {:else}
            <a href={item.href}
               on:click={() => closeMobileMenu()}
               class="block py-2"
               class:active={currentPath === item.href}>
              {item.label}
            </a>
          {/if}
        {/each}
      </nav>
    </div>
  </aside>
{/if}

<style>
  /* Om du vill kan du justera .active, t.ex.: */
  :global(.active) {
    font-weight: 600;
    color: var(--your-accent-color, #e25822); /* byt till färg om du vill */
  }
</style>
