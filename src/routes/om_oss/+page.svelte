<script>

    import Devider from "$lib/assets/Devider.svelte"

    import ossImg_1 from "$lib/images/om_oss/oss_1.webp"
    import ossImg_2 from "$lib/images/om_oss/oss_2_small.webp"
    import ossImg_3 from "$lib/images/om_oss/oss_3_small.webp"
    import ossImg_4 from "$lib/images/om_oss/oss_4.webp"
    import ossImg_5 from "$lib/images/om_oss/oss_5.webp"

    import lukasImg_1 from "$lib/images/om_oss/lukas_1_small.webp"
    import lukasImg_2 from "$lib/images/om_oss/lukas_2_small.webp"
    import lukasImg_3 from "$lib/images/om_oss/lukas_3_small.webp"

    import elinImg_1 from "$lib/images/om_oss/elin_1_small.webp"
    import elinImg_2 from "$lib/images/om_oss/elin_2_small.webp"
    import elinImg_3 from "$lib/images/om_oss/elin_3_small.webp"
    import elinImg_4 from "$lib/images/om_oss/elin_4_small.webp"

</script>


<h1 class="h1-title">Vilka är vi?</h1>
<Devider />

<!-- Into om oss -->

<div class="about-info-container">
    <h2 class="h2-title">Lukas och Elin är Embers of Agni</h2>
    <p class="paragraf">Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.</p>
</div>

<div class="image-grid-container">
    <img src={ossImg_1} fetchpriority="high" alt="">
    <div class="small-images">
        <img src={ossImg_2} fetchpriority="high" alt="">
        <img src={ossImg_3} fetchpriority="high" alt="">
    </div>
    <img src={ossImg_4} fetchpriority="high" alt="">
    <img src={ossImg_5} fetchpriority="high" alt="">
</div>

<Devider />

<!-- Om Lukas -->

<h2 class="h2-title">Mer om Lukas</h2>
<p class="paragraf text-start w-[500px]">Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.</p>

<div class="image-grid-container">
    <div class="small-images">
        <img  src={lukasImg_1} loading = "lazy" alt="">
        <img  src={lukasImg_3} loading = "lazy" alt="">
    </div>
    <img  src={lukasImg_2} loading = "lazy" alt="">
</div>

<Devider />

<!-- Om Elin -->

<h2 class="h2-title">Mer om Elin</h2>
<p class="paragraf text-start w-[500px]">Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.</p>


<div class="image-grid-container">
    <img  src={elinImg_1} loading = "lazy" alt="">
    <img  src={elinImg_2} loading = "lazy" alt="">
    <img  src={elinImg_3} loading = "lazy" alt="">
    <img  src={elinImg_4} loading = "lazy" alt="">
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

    .image-grid-container{
        width: 500px;
        max-width: 80vw;
        margin: 50px auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: center;
    }

       .small-images{
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        align-items: center;
    }

    .text-start{
        text-align: start;
    }

</style>