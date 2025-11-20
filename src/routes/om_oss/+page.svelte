<script>

    import Devider from "$lib/assets/Devider.svelte"

    import elin1 from "$lib/images/om_oss/elin_burnoff.jpeg"
    import elin2 from "$lib/images/om_oss/elin_karna_pose.jpg"
    import elin3 from "$lib/images/om_oss/elin_karna_pose_galen.jpg"
    
    import lukas1 from "$lib/images/om_oss/lukas_burnoff_roots.jpeg"
    import lukas2 from "$lib/images/om_oss/lukas_karna_pose.jpg"
    import lukas3 from "$lib/images/om_oss/lukas_karna_spin.jpg"

</script>


<h1 class="h1-title">Vilka är vi?</h1>
<Devider />

<!-- Into om oss -->

<div class="about-info-container">
    <h2 class="h2-title">Lukas och Elin är Embers of Agni</h2>
    <p class="paragraf">Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.</p>
</div>

<div class="img-container-1">
    <img src={lukas1} alt="">
    <img src={lukas2} alt="">
    <img src={elin1} alt="">
    <img src={elin2} alt="">
</div>

<Devider />

<!-- Om Lukas -->

<h2 class="h2-title">Mer om Lukas</h2>
<p class="paragraf text-start w-[500px]">Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.</p>

<div class="img-container-2">
    <div>
        <img  src={lukas2} alt="">
        <img  src={lukas3} alt="">
    </div>
    <img class="lukas-img1" src={lukas1} alt="">
</div>

<Devider />

<!-- Om Elin -->

<h2 class="h2-title">Mer om Elin</h2>
<p class="paragraf text-start w-[500px]">Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.</p>


<div class="img-container-2">
    <img class="elin-img3" src={elin1} alt="">
    <img  src={elin3} alt="">
    <img  src={elin2} alt="">
</div>


<Devider />

<style>

    .about-info-container{
        width: 500px;
        max-width: 80vw;
        margin: auto;
    }
    
    .about-info-container p{
        text-align: start;
    }

    .img-container-1{
        width: 500px;
        max-width: 80vw;
        margin: 50px auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

    }

   .img-container-2{
    width: 500px;
    max-width: 80vw;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
   }

   .img-container-2 img{
        border-radius: 2px;
   }

     .img-container-2 div{
        display: grid;
        gap: 20px;
    }

    .elin-img3{
        /* från kollumn 1 till 3 (trots att griden bara har 2 kolumner måste man skriva såhär) */
        grid-column: 1 / 3;
    }

    .text-start{
        text-align: start;
    }

</style>