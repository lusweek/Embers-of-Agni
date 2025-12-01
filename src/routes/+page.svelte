<script>
    import { performingGroup } from "$lib/seo/performingGroup.js";

    import VideoSection from './home/VideoSection.svelte';
    import HomeErbjudandenUtanLed from './home/HomeErbjudandenUtanLed.svelte';
    import HomeOmOss from './home/HomeOmOss.svelte';
    import HomeBilder from './home/HomeBilder.svelte';

    
</script>

<!-- preforminGroup är strukturerad data till google för bättre SEO -->
<svelte:head>
    <title>Eldshow, eldartister & stav, poi och hoop workshop – Embers of Agni</title>
    <meta name="description" content="Professionella eldshower och inspirerande flowarts-workshops med poi, stav och rockring. Föreställningar och lärande för event och grupper." />
    <script type="application/ld+json">
        {JSON.stringify(performingGroup)}
    </script>
</svelte:head>

<VideoSection />

<HomeErbjudandenUtanLed />

<HomeOmOss />

<HomeBilder />
