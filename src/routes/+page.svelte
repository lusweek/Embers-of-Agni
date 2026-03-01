<script>
  import { homePage } from '$lib/seo/homePage.js';
  import { t } from '$lib/i18n.svelte.js';

  import Hero from '$lib/sections/Hero.svelte';
  import RuneBand from '$lib/components/RuneBand.svelte';
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
<RuneBand text={t('runeBand.text')} />
<Services />
<Gallery />
<RuneBand text={t('runeBand.text')} reverse={true} />
<About />
<Contact />
<RuneBand text={t('runeBand.text')} reverse={true} />
<Footer />
