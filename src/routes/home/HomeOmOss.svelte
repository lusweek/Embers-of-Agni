<script>
	import Button from '$lib/assets/button.svelte';
  import bådaBurnoff from '$lib/images/home/båda_burnoff.jpg'

  
// Räknar ut höjden till wrapper paserat på höjden på bilden och text-overlayen
  import { onMount } from 'svelte'

  let imgEl
  let overlayEl
  let wrapperEl
  let imgHeight = 0

  function updateHeight() {
    if (imgEl && wrapperEl && overlayEl) {
      const imgHeight = imgEl.clientHeight
      const overlayHeight = overlayEl.clientHeight * 0.6  // OBS punkt istället för komma
      
      wrapperEl.style.height = (imgHeight + overlayHeight) + 'px'
    }
  }

  // Uppdatera höjden när bilden laddats
  function onImageLoad() {
    updateHeight()
  }

  onMount(() => {
    // Fånga resize också (om viewport ändras)
    const observer = new ResizeObserver(() => updateHeight())
    if (imgEl) observer.observe(imgEl)

    return () => observer.disconnect()
  })
// ---------

</script>

<section 
  class="wrapper relative block w-[100vw] sm:w-[65vw]" 
  bind:this={wrapperEl}
>
    <img 
      class="image block w-[70%] md:w-[400px] max-w-400px mx-auto" 
      bind:this={imgEl} 
      src={bådaBurnoff} 
      alt="Elin gör en burnoff" 
      on:load={onImageLoad} 
    />

  <div 
    class="overlay box-border w-[70%] md:w-[400px] sm:left-[20%]" 
    role="region" 
    bind:this={overlayEl} 
    aria-label="AgniShowArts - info"
  >
    <h1 class="p-4 sm:p-6 pb-0 text-sm sm:text-base font-bold leading-tight">
      AgniShowArts:
      <span class="sub block font-semibold text-xs sm:text-sm">Lukas och Elin</span>
    </h1>

    <p class="p-4 sm:p-6 text-xs sm:text-sm leading-snug">
      Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.
    </p>
  </div>
  
  
</section>
<div class="w-[100%] flex justify-center my-3">  
  <Button 
  href="/om_oss"
  label="Läs mer om oss"
  />
</div>


  <style>

  .wrapper {
      position: relative;
      display: block;
      margin: auto;
  }

  .wrapper img{
    display: block;
    margin-left: 10%;
  }

  /* Overlay (grå textruta) */
  .overlay {
    position: absolute;
    left: 20%;               /* börjar 90% in från vänster */
    top: 40%;                /* sitter i nederkant */
    background: rgba(128,128,128,0.85); /* grå, lite genomskinlig */
    color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .overlay h1 {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1;
    font-weight: 700;
  }

  /* .overlay h1 .sub {
    display: block;
    font-weight: 600;
    font-size: 0.85rem;
  } */

  .overlay p {
    margin: 0;
    font-size: 0.65rem;
    line-height: 1;
  }

</style>
