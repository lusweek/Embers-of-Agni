<div class="divider" aria-hidden="true">
  <svg viewBox="0 0 400 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <!-- Left line -->
    <line x1="0" y1="12" x2="160" y2="12" stroke="currentColor" stroke-width="0.5" opacity="0.3" />
    <!-- Norse knotwork diamond -->
    <g transform="translate(200,12)" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4">
      <!-- Outer diamond -->
      <path d="M0,-10 L10,0 L0,10 L-10,0 Z" />
      <!-- Inner crossing knot -->
      <path d="M0,-6 L6,0 L0,6 L-6,0 Z" />
      <!-- Cross detail -->
      <line x1="0" y1="-10" x2="0" y2="10" stroke-width="0.5" />
      <line x1="-10" y1="0" x2="10" y2="0" stroke-width="0.5" />
    </g>
    <!-- Right line -->
    <line x1="240" y1="12" x2="400" y2="12" stroke="currentColor" stroke-width="0.5" opacity="0.3" />
  </svg>
</div>

<style>
  .divider {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    color: var(--text-accent);
    max-width: 600px;
    margin: 0 auto;
  }

  .divider svg {
    width: 100%;
    height: 24px;
  }
</style>
