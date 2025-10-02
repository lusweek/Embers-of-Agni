<script>
  import { Phone, Instagram, Mail } from "lucide-svelte";
</script>


<footer class="bg-gray-900 text-white p-6 h-[150px]">
  <div class="max-w-6xl mx-auto flex sm:flex-row justify-around gap-4 h-full flex-wrap">

    <!-- Telefon -->
    <a href="tel:0738546407" 
       class="flex items-center gap-2 hover:text-orange-400 transition-colors">
      <Phone size="20" />
      <span>073 854 64 07</span>
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com/embersofagni"
       title="Embers of Agni"
       target="_blank"
       rel="noopener noreferrer"
       class="flex items-center gap-2 hover:text-orange-400 transition-colors">
      <Instagram size="20" />
      <span>Embers of Agni</span>
    </a>

    <!-- Mail -->
    <a href="mailto:embersofagni@gmail.com" 
       class="flex items-center gap-2 hover:text-orange-400 transition-colors">
      <Mail size="20" />
      <span>embersofagni@gmail.com</span>
    </a>

  </div>
</footer>
