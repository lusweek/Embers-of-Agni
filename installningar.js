/* Vilda Flammor – inställningar för kopplingar.
   Det här är den ENDA filen som behöver ändras när sajten ska kopplas.
   Lämnas ett värde tomt fungerar sajten ändå, men den delen är inte kopplad. */
window.VF_INSTALLNINGAR = {

  /* Bokningsformuläret -> e-post.
     1. Gå till https://web3forms.com och skriv in e-postadressen bokningar ska gå till.
     2. Du får en "Access Key" i mejlen. Klistra in den mellan citattecknen nedan. */
  formularNyckel: "",

  /* Bilagor (bild på platsen) i formuläret. Kräver betald Web3Forms-plan.
     false = fältet döljs och kunden ombeds skicka bilden som svar på ert mejl. */
  bilagor: false,

  /* Instagram-delen i Bibliotek.
     1. Gå till https://behold.so, logga in med @vildaflammor och skapa ett "JSON feed".
     2. Klistra in flödets adress (börjar med https://feeds.behold.so/) nedan.
     Tomt = de nuvarande bilderna visas och länkar till Instagram. */
  instagramFlode: ""

};
