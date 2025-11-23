<script>
	import Devider from '$lib/assets/Devider.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';
    import ElinPose from '$lib/images/eldshower/elin_karna_pose_gap.jpg'
    import LukasBurnoff from "$lib/images/eldshower/lukas_roots_burnof_spin.jpeg"

</script>

<!-- Titel + undertitel -->
<h1 class="h1-title">Eldshower</h1>

<p class="undertitle">Vilken passar ditt tillfälle? Här hittar du våra eldshower och kan läsa mer om dem.</p>

<Devider />

<!-- Duowhow med tema -->

<InfoBox
title = "Duoshow med tema"
image = {ElinPose}
imageAlt = "Elin pose med fakla"
>
<p class="paragraf">Önska ett tema på showen, t.ex. pirater, vikingar eller barnkalas. Vi kommer med kostym, smink och den perfekta musiken, bara fantasin sätter gränserna! För detta behöver vi minst en månads framförhållning. </p>
</InfoBox>

<Devider />

<!-- Duowhow -->

<InfoBox
title = "Duoshow"
image = {ElinPose}
imageAlt = "Eldtrix tillsammans"
>
<p class="paragraf">Här intar vi scenen tillsammans och bjuder på en 15 minuter lång föreställning full av känsla, dans, lek och framförallt - massor av eld! Vi rör oss både var för sig och möts i partertricks. Denna show är flytande och dynamisk med smidiga övergångar och hela tiden något nytt och spännande. Vi har färdig musik till denna show.</p>
</InfoBox>

<Devider />

<!-- Soloshow -->

<InfoBox
title = "Soloshow"
image = {LukasBurnoff}
imageAlt = "Lukas burnoff"
>
<p class="paragraf">Vår soloshow står Lukas för.  Han använder eldredskapen: snurrstav, dubbelstav och kontaktstav. Dans har länge varit en stor del av Lukas liv vilket tydligt syns när han står på scen.</p>
<p class="paragraf">Denna show är ca 12 min och musiken består av mjuka melodier, tunga beats och lekfullhet. </p>
<p class="paragraf">Känslan i denna show är rörelseglädje, contemporary dans, skönhet och styrka.
Mindre anpassningar i musik och känsla kan göras för att passa just ert tillfälle. </p>
</InfoBox>

<Devider />