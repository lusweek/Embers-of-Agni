<script>
	import Button from '$lib/assets/button.svelte';
  import aboutImg from '$lib/images/home/embers_of_agni_small.webp'

  
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
      src={aboutImg} 
      alt="Elin gör en burnoff" 
      on:load={onImageLoad} 
      loading="lazy"
    />

  <div 
    class="overlay box-border w-[70%] md:w-[400px] sm:left-[20%] card-bg" 
    role="region" 
    bind:this={overlayEl} 
    aria-label="embersofagni - info"
  >
    <h1 class="p-4 sm:p-6 pb-0 text-sm sm:text-base font-bold leading-tight">
      Embers of Agni:
      <span class="sub block font-semibold text-xs sm:text-sm">Lukas och Elin</span>
    </h1>

    <p class="p-4 paragraf">
      Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.
    </p>
  </div>
  
  
</section>
<div class="w-[100%] flex justify-center my-[60px] lg:my-2 md:my-6">  
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
    border-radius: 2px;
  }

  /* Overlay (grå textruta) */
  .overlay {
    position: absolute;
    left: 20%;
    top: 40%;
    background: linear-gradient(-97deg, rgb(122 95 90) 0%, rgb(115 38 38) 100%);
    color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 2px;
  }

  .overlay h1 {
    margin: 0;
    font-size: 1rem;
    line-height: 1;
    font-weight: 700;
  }

  .overlay p {
    text-align: start;
    margin: 0;
    font-size: 0.9rem; 
    line-height: 1.1;
  }

</style>
