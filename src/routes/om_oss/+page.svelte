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

<div class="about-info-container">
    <h2 class="h2-title">Lukas och Elin är Embers of Agni</h2>
    <p class="paragraf">Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.</p>
</div>

<div class="img-container">
    <img src={lukas1} alt="">
    <img src={lukas2} alt="">
    <img src={elin1} alt="">
    <img src={elin2} alt="">
</div>

<Devider />

<div class="lukas-container">
    <div>
        <h2 class="h2-title">Mer om Lukas</h2>
        <p>Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.</p>
    </div>

    <div class="images-container">
        <img class="lukas-img1" src={lukas1} alt="">
        <img class="lukas-img2" src={lukas2} alt="">
        <img class="lukas-img3" src={lukas3} alt="">
    </div>
</div>

<Devider margin="200px auto" />

<style>

    .about-info-container{
        width: 500px;
        max-width: 90vw;
        margin: auto;
    }
    
    .about-info-container p{
        text-align: start;
    }

    .img-container{
        width: 500px;
        max-width: 90vw;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;

    }

    .img-container img{
        width: 70px;
        height: 70px;
        max-width: 40vw;
        max-height: 40vw;

        background-size: cover;
    }

    .lukas-container{
        width: 500px;
        max-width: 90vw;
        margin: auto;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
    }

    .lukas-container h2{
        margin-top: 0;
        text-align: start;
    }

    .lukas-container p{

    }

   .images-container{

   }

   .images-container img{
        position: relative;
        border-radius: 5px;
   }

    .lukas-img1{
        top: 23%;
    }

    .lukas-img2{
        position: absolute;
        top: 35%;

    }
    
    .lukas-img3{
        position: absolute;
        
    }

</style>