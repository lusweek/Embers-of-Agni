<script>
  let canvas = $state(null);

  $effect(() => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 0.5,
      speed: Math.random() * 0.3 + 0.1,
      drift: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.005 + 0.002,
      hue: Math.random() > 0.5 ? `rgba(196,84,26,${Math.random() * 0.5 + 0.2})` : `rgba(180,60,20,${Math.random() * 0.4 + 0.15})`,
    }));

    function animate() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y -= p.speed;
        p.drift += p.driftSpeed;
        p.x += Math.sin(p.drift) * 0.5;

        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hue;
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<canvas bind:this={canvas} class="ember-canvas" aria-hidden="true"></canvas>

<style>
  .ember-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }
</style>
