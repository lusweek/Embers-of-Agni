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
    <p class="paragraf">Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.
        <br><br>
        Det var på <a target="_blank" class="link-decoration" href="https://5elementsdance.se/">cirkuslägret Våreld</a> 2024 som vi lärde känna varandra och upptäckte att vi båda leker med eld. Senare den sommaren fick Elin ett eldgig med sin bror utanför Göteborg där Lukas bodde. Han tackade direkt ja när frågan kom om han ville haka på. Detta var första showen och workshop vi tillsammans gjorde. Detta ville vi göra mer. Ett år senare har vi en djup kärlek till varandra och att uppträda tillsammans med eld och dans!
    </p>
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
<p class="paragraf text-start w-[500px]">
    Jag började lära min tricks med snurrstav 2019 i samband med att jag flyttade till lund för att studera till brandman. Att bli brandman var min barndomsdröm som gick i uppfyllelse men djupare fanns en passion för dans och uppträdande. 
    <br /><br />
    I en danslokal i göteborg på <a target="_blank" class="link-decoration" href="https://5elementsdance.se/">5 elements flow</a> skapades en djup kärlek till fridans. Musiken spelades och det krävdes inga särskilda fotsteg eller regler, bara dans rakt från hjärtat med musiken som inspirerar till rörelse. En av de bästa känslorna som finns är att komma in i just dedär dansflowet på scen med eld!
    <br /><br />
    Efter att jag träffade Elin blev jag inspiread att göra mer flowats och intresset för dubbelstav blev stort. Så jag köpte ett par, tränade, dansade och uppträdde med dem. Jag upptäckte att snurra stavar och att kasta upp dem i luften är jättekul! 
    <br /><br />
    Under vår resa till Portugal lärde Elin mig en hel del poi. Jag tyckte det var svårare och det krävde mycket tålamod men SOM vi lekte med våra LED-pois på fester sen! Poi blev ännu en prop på min flowartsresa!  
    <br /><br />
    Jag älskar flowarts för att det finns oändliga kreativa möjligheter och för att det är så underbart att dansa med musik till. 
</p>

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
<p class="paragraf text-start w-[500px]">

    Jag lärde mig först eldkonsten av min bror 2018 och har sedan dess utforskat olika props (flowredskap). De jag fastnat för mest är rockring och pois. Jag älskar att lära mig tekniska tricks som skapar vackra geometriska mönster och kräver en del träning och skicklighet. 
    <br /><br />
    Jag inspireras av andra flowartister jag träffar i verkligheten och hittar på instagram you youtube. Min bror Johan och hans partner Caroline som också gör eldshower, Lisen Hertzman med Kompani Error, Selma Berge, Hank Johansson är alla fatastiska eldartister som inspirerar mig. 
    <a target="_blank" class="link-decoration" href="https://www.instagram.com/skyflowartist/">@skyflowartist</a> 
    <a target="_blank" class="link-decoration" href="https://www.instagram.com/mysticchickpeaflow/">@mysticchickpeaflow </a>
    <a target="_blank" class="link-decoration" href="https://www.instagram.com/lisa_lottie/">@lisa_lottie</a>
    <a target="_blank" class="link-decoration" href="https://www.instagram.com/lizknights/">@lizknights</a> 
    och
    <a target="_blank" class="link-decoration" href="https://www.instagram.com/waywardkay/">@waywardkay</a>är några av alla otroligt skickliga tjejer jag hittat på instagram.
    
    <br /><br />
    Flowarts hjälper mig skapa så mycket glädje i mitt liv genom rörelse, dans, utmaningar och kreativitet.
    En av de roligaste sakerna med att hålla på med flowarts är att lära ut och göra tillsammans. Speciellt roligt att leka med och lära barn och unga. Barn kommer så lätt in i ett utforskande flow bara de får ett redskap i handen, det är härligt att se. 
    <br /><br />
    Att få skapa och göra shower tillsammans med Lukas är så tacksamt och roligt eftersom han, likt barn, är utforskande och har fullt fokus på vad som känns kul och bra för oss. Det gör inte bara att vi har roligt på scen utan att även publiken smittas av känslan vi skapar tillsammans. Magi.
</p>


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