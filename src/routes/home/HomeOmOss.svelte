<script>
	import Button from "$lib/assets/button.svelte";
  import aboutImg from '$lib/images/home/embers_of_agni_small.webp'


</script>
<section class="parent" >

   <img 
      class="div1" 
      src={aboutImg} 
      alt="Elin gör en burnoff" 
      loading="lazy"
    />

  <div 
    class="div2 overlay" 
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
  
  <div class="w-[100%] flex justify-center lg:my-6 md:my-6 div3">  
    <Button 
    href="/om_oss"
    label="Läs mer om oss"
    />
  </div>
  
</section>


  <style>

.parent {
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: auto repeat(5, 10%) repeat(4, auto);
grid-column-gap: 0px;
grid-row-gap: 10px;
}

.div1 { grid-area: 1 / 1 / 7 / 7; }
.div2 { grid-area: 5 / 2 / 10 / 8; }
.div3 { grid-area: 10 / 2 / 11 / 7; }

.parent{
  max-width: 80vw;
  width: 500px;
  margin: auto;
  margin-bottom: 90px;
}

  /* Overlay (grå textruta) */
  .overlay {
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
