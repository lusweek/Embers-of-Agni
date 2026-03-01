<script>
  import { homePage } from '$lib/seo/homePage.js';

  import Hero from '$lib/sections/Hero.svelte';
  import Services from '$lib/sections/Services.svelte';
  import Gallery from '$lib/sections/Gallery.svelte';
  import About from '$lib/sections/About.svelte';
  import Contact from '$lib/sections/Contact.svelte';
  import Footer from '$lib/sections/Footer.svelte';
</script>

<svelte:head>
  <title>Eldshow, eldartister & flowarts — Embers of Agni</title>
  <meta name="description" content="Professionella eldshower och flowarts-uppträdanden för bröllop, företagsevent och festivaler i hela Sverige. Boka Embers of Agni." />
  {@html `<script type="application/ld+json">${JSON.stringify(homePage)}</script>`}
</svelte:head>

<Hero />
<Services />
<Gallery />
<About />
<Contact />
<Footer />
