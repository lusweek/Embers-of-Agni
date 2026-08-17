<script>
  // Gemensam SEO-komponent: sätter title, meta description, canonical,
  // Open Graph, Twitter Card och ett eller flera JSON-LD-schema. Används på
  // varje sida istället för att skriva samma <svelte:head>-taggar för hand,
  // så att ingen sida glömmer bort t.ex. canonical eller og:image.

  export let title;
  export let description;
  export let path = "/"; // t.ex. "/eldshow" — utan domän, med inledande /
  export let image = "/og/home.jpg"; // absolut mot domänen, sätts nedan
  export let jsonLd = null; // ett schema-objekt eller en array av flera
  export let noindex = false;

  const BASE_URL = "https://vildaflammor.se";

  $: canonicalUrl = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
  $: imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  // Flera scheman samlas i EN array istället för flera taggar (stöds av
  // Google). OBS: en script-tagg med ett Svelte-uttryck som innehåll tolkas
  // bara dynamiskt när den står direkt i en routens egna +page.svelte — i en
  // återanvändbar komponents svelte:head (som denna) renderas den som
  // statisk text istället. Därför byggs taggen som en HTML-sträng nedan och
  // injiceras rått, med "<" i datan escapat så inget kan bryta ut ur den.
  $: schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  $: schemaJson = schemas.length === 1 ? schemas[0] : schemas.length > 1 ? schemas : {};
  $: schemaScript = `<script type="application/ld+json">${JSON.stringify(schemaJson).replace(/</g, "\\u003c")}<\/script>`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {/if}

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Vilda Flammor" />
  <meta property="og:locale" content="sv_SE" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />

  {@html schemaScript}
</svelte:head>
