<script>
	import Button from "$lib/assets/button.svelte";
  import Loader from "$lib/assets/Loader.svelte";

  let name = "";
  let email = "";
  let company = "";
  let message = "";
  let status = ""; // för att visa tack-meddelande

  async function handleSubmit(event) {
    event.preventDefault(); // stoppar standard POST
    status = "loading";
    console.log(status)

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("company", company);
    formData.append("message", message);
    formData.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/embersofagni@gmail.com", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        status = "success";
    console.log(status)

        // Rensa formuläret
        name = "";
        email = "";
        company = "";
        message = "";
      } else {
        status = "error";
      }
    } catch (error) {
      status = "error";
      console.error(error);
    }

     setTimeout(() => {
      status = "";
    }, 3000);
  }

</script>

<form class="contact-form" on:submit={handleSubmit}>
  <!-- Namn -->
  <input type="text" bind:value={name} placeholder="Namn *" required />

  <!-- Email -->
  <input type="email" bind:value={email} placeholder="Email *" required />

  <!-- Företag -->
  <input type="text" bind:value={company} placeholder="Företag" />

  <!-- Meddelande -->
  <textarea bind:value={message} placeholder="Skriv ditt meddelande här..." rows="6" required></textarea>

  <!-- Skicka-knapp -->
  <button type="submit" class="custom-button form-button">Skicka</button>

    {#if status}
      <Loader {status} />
    {/if}
</form>

<style>
  .contact-form {
    width: 300px;
    max-width: 90vw;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input, textarea {
    margin-top: 10px;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    background-color: #555;
  }

  .form-button{
    height: 41.33px;
    width: 120px;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    align-items: center;
  }

</style>
