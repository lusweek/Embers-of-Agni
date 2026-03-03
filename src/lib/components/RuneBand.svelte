<script>
  let { text = '', reverse = false } = $props();
</script>

<div class="rune-band">
  <div class="rune-band-inner" class:reverse>
    <span>{text}{text}{text}{text}</span>
    <span>{text}{text}{text}{text}</span>
  </div>
</div>
