<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Seo from "$lib/components/Seo.svelte";
  import { bokaPage } from "$lib/seo/bokaPage";
  import Loader from "$lib/assets/Loader.svelte";

  const MAX_FILE_BYTES = 10 * 1024 * 1024; // formsubmit.co:s gräns är 10MB

  let namn = "";
  let epost = "";
  let telefon = "";
  let datum = "";
  let eventtyp = "";
  let show = "";
  let plats = "";
  let gaster = "";
  let bild = null;
  let meddelande = "";
  let status = "";
  let submitSuccess = false;
  let fileError = "";

  let copiedField = "";

  // Absolut URL som formsubmit.co skickar tillbaka besökaren till efter en
  // "riktig" (icke-AJAX) inskickning-krävs när en bilaga finns med.
  $: nextUrl = `${$page.url.origin}/boka?sent=1`;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      submitSuccess = true;
      window.history.replaceState({}, "", window.location.pathname);
    }
  });

  function copyToClipboard(text, field) {
    navigator.clipboard.writeText(text).then(() => {
      copiedField = field;
      setTimeout(() => (copiedField = ""), 1500);
    });
  }

  function handleFile(event) {
    const file = event.target.files?.[0] ?? null;
    if (file && file.size > MAX_FILE_BYTES) {
      fileError = "Bilden är för stor (max 10MB). Välj en mindre bild.";
      bild = null;
      event.target.value = "";
      return;
    }
    fileError = "";
    bild = file;
  }

  // Bilagor kräver en riktig (icke-AJAX) formulärinskickning med
  // enctype="multipart/form-data"-formsubmit.co:s /ajax/-endpoint tar
  // inte emot filer. Utan bild använder vi AJAX för snabbare, kvarvarande
  // bekräftelse utan sidladdning.
  async function handleSubmit(event) {
    if (bild) {
      // Låt webbläsaren sköta en vanlig multipart-POST (ingen preventDefault).
      status = "loading";
      return;
    }

    event.preventDefault();
    status = "loading";

    const formData = new FormData();
    formData.append("namn", namn);
    formData.append("epost", epost);
    formData.append("telefon", telefon);
    formData.append("datum", datum);
    formData.append("eventtyp", eventtyp);
    formData.append("show", show);
    formData.append("plats", plats);
    formData.append("antal_gaster", gaster);
    formData.append("meddelande", meddelande);
    formData.append("_captcha", "false");
    formData.append("_subject", "Ny bokningsförfrågan – Vilda Flammor");

    try {
      const res = await fetch("https://formsubmit.co/ajax/vildaflammor@gmail.com", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        status = "success";
        submitSuccess = true;
        namn = "";
        epost = "";
        telefon = "";
        datum = "";
        eventtyp = "";
        show = "";
        plats = "";
        gaster = "";
        meddelande = "";
      } else {
        status = "error";
      }
    } catch (error) {
      status = "error";
      console.error(error);
    }

    setTimeout(() => {
      status = "";
    }, 3000);
  }
</script>

<Seo
  title="Boka Eldshow – Kalmar, Göteborg & Sverige – Vilda Flammor"
  description="Boka eldshow eller flowarts-workshop med Vilda Flammor i Kalmar, Göteborg eller övriga Sverige. Ring, mejla eller fyll i formuläret så återkommer vi med förslag på show och upplägg."
  path="/boka"
  image="/og/boka.jpg"
  jsonLd={bokaPage}
/>

<section class="hero-simple">
  <div class="wrap">
    <span class="eyebrow">Boka</span>
    <h1>Boka er eldshow</h1>
    <p class="lead">Fyll i formuläret så återkommer vi med förslag på show och upplägg - eller ring oss direkt om ni redan vet vad ni vill ha. Vi bokas i Kalmar, Göteborg och i hela Sverige.</p>
  </div>
</section>

<section class="section" style="padding-top:24px;">
  <div class="wrap">
    <div class="form-wrap">

      <div class="call-card">
        <div>
          <span class="eyebrow" style="margin-bottom:6px;">Snabbast</span>
          <h2>Ring oss gärna - även bara för att fråga</h2>
          <p>Boka, bolla en idé eller ställ en snabb fråga. Vi svarar direkt i telefonen.</p>
        </div>
        <div class="call-card-contact">
          <div class="copy-row">
            <a class="call-btn" href="tel:+46738546407">+46 73 854 64 07</a>
            <button type="button" class="copy-btn {copiedField === 'phone' ? 'copied' : ''}" aria-label="Kopiera telefonnummer" on:click={() => copyToClipboard('+46738546407', 'phone')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span class="copied-tip">Kopierat!</span>
            </button>
          </div>
          <div class="copy-row">
            <span class="call-alt">eller mejla: <a class="ph-inline" href="mailto:vildaflammor@gmail.com" style="text-decoration:none;">vildaflammor@gmail.com</a></span>
            <button type="button" class="copy-btn {copiedField === 'email' ? 'copied' : ''}" aria-label="Kopiera e-postadress" on:click={() => copyToClipboard('vildaflammor@gmail.com', 'email')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span class="copied-tip">Kopierat!</span>
            </button>
          </div>
        </div>
      </div>

      <div class="section-head" style="margin-bottom:24px;">
        <span class="eyebrow">Formulär</span>
        <h2 style="font-size:30px;">Berätta om ert event</h2>
      </div>

      <div class="form-card">
        <form
          method="POST"
          action="https://formsubmit.co/vildaflammor@gmail.com"
          enctype="multipart/form-data"
          on:submit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Ny bokningsförfrågan – Vilda Flammor" />
          <input type="hidden" name="_next" value={nextUrl} />

          <div class="form-row">
            <div class="field">
              <label for="namn">Namn <span class="req">*</span></label>
              <input type="text" id="namn" name="namn" bind:value={namn} required />
            </div>
            <div class="field">
              <label for="epost">E-post <span class="req">*</span></label>
              <input type="email" id="epost" name="epost" bind:value={epost} required />
            </div>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="telefon">Telefon</label>
              <input type="tel" id="telefon" name="telefon" bind:value={telefon} />
            </div>
            <div class="field">
              <label for="datum">Datum</label>
              <input type="date" id="datum" name="datum" lang="en-GB" bind:value={datum} />
              <span class="helper">Inte spikat än? Skriv ett ungefärligt datum i meddelandet i stället.</span>
            </div>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="eventtyp">Typ av event <span class="req">*</span></label>
              <input type="text" id="eventtyp" name="eventtyp" bind:value={eventtyp} placeholder="T.ex. 40-årskalas / Företagsfest / Bröllop" required />
            </div>
            <div class="field">
              <label for="show">Vad intresserar er?</label>
              <select id="show" name="show" class="select-arrow" bind:value={show}>
                <option value="">Vet inte än - ge mig förslag</option>
                <option>Stora showen (15 min)</option>
                <option>Lilla showen (8 min)</option>
                <option>Workshop</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="plats">Plats / stad</label>
              <input type="text" id="plats" name="plats" bind:value={plats} />
            </div>
            <div class="field">
              <label for="gaster">Ungefärligt antal gäster</label>
              <input type="text" id="gaster" name="antal_gaster" bind:value={gaster} />
            </div>
          </div>

          <div class="form-row">
            <div class="field full">
              <label for="bild">Bild på plats <span class="optional">(valfritt)</span></label>
              <div class="file-input-row">
                <label for="bild" class="file-btn">Välj fil</label>
                <input type="file" id="bild" name="attachment" accept="image/*" class="file-input-hidden" on:change={handleFile} />
                {#if bild}
                  <span class="file-chosen">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    {bild.name}
                  </span>
                {:else}
                  <span class="file-chosen file-chosen-empty">Ingen fil vald</span>
                {/if}
              </div>
              {#if fileError}
                <span class="helper file-error">{fileError}</span>
              {:else}
                <span class="helper">Inget måste just nu - men har ni redan en bild på scenen eller platsen hjälper det oss planera.</span>
              {/if}
            </div>
          </div>

          <div class="form-row">
            <div class="field full">
              <label for="meddelande">Berätta om ert event</label>
              <textarea id="meddelande" name="meddelande" bind:value={meddelande} placeholder="T.ex. plats, tidpunkt, önskad stämning eller något annat som är bra för oss att veta."></textarea>
            </div>
          </div>

          <div class="submit-row">
            <button type="submit" class="btn-primary">Skicka förfrågan</button>
            <span class="submit-note">Vi återkommer vanligtvis inom 24–48 timmar.</span>
          </div>

          {#if submitSuccess}
            <p class="success-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Tack för ditt meddelande
            </p>
          {/if}
        </form>
      </div>

      <div class="response-note">
        <span>*</span>
        <span>Ingen betalning eller bindande bokning i det här steget - bara en förfrågan. <b>Vi hör av oss</b> för att bekräfta detaljerna.</span>
      </div>

    </div>
  </div>
</section>

{#if status}
  <Loader {status} />
{/if}
