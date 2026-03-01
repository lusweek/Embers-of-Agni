<script>
  import { slide } from 'svelte/transition';
  import { t } from '$lib/i18n.svelte.js';

  let status = $state('idle');
  let showMore = $state(false);

  let formData = $state({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventDate: '',
    eventType: '',
    message: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    status = 'sending';

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('company', formData.company);
    data.append('eventDate', formData.eventDate);
    data.append('eventType', formData.eventType);
    data.append('message', formData.message);
    data.append('_captcha', 'false');

    try {
      const res = await fetch('https://formsubmit.co/ajax/embersofagni@gmail.com', {
        method: 'POST',
        body: data,
      });
      if (!res.ok) throw new Error('Failed');
      status = 'success';
      setTimeout(() => {
        formData = { name: '', email: '', phone: '', company: '', eventDate: '', eventType: '', message: '' };
        status = 'idle';
      }, 3000);
    } catch {
      status = 'error';
    }
  }
</script>

<form onsubmit={handleSubmit} class="contact-form">
  <!-- Core fields -->
  <div class="field">
    <label for="cf-name" class="field-label">{t('contact.form.name')} *</label>
    <input id="cf-name" type="text" required bind:value={formData.name} class="form-input" />
  </div>

  <div class="field">
    <label for="cf-email" class="field-label">{t('contact.form.email')} *</label>
    <input id="cf-email" type="email" required bind:value={formData.email} class="form-input" />
  </div>

  <div class="field">
    <label for="cf-eventType" class="field-label">{t('contact.form.eventType')}</label>
    <select id="cf-eventType" bind:value={formData.eventType} class="form-input">
      <option value=""></option>
      <option value="company">{t('contact.form.eventTypes.company')}</option>
      <option value="wedding">{t('contact.form.eventTypes.wedding')}</option>
      <option value="festival">{t('contact.form.eventTypes.festival')}</option>
      <option value="private">{t('contact.form.eventTypes.private')}</option>
      <option value="staghen">{t('contact.form.eventTypes.staghen')}</option>
      <option value="school">{t('contact.form.eventTypes.school')}</option>
      <option value="other">{t('contact.form.eventTypes.other')}</option>
    </select>
  </div>

  <div class="field">
    <label for="cf-message" class="field-label">{t('contact.form.message')} *</label>
    <textarea id="cf-message" required bind:value={formData.message} rows="4" class="form-input"></textarea>
  </div>

  <!-- Collapsible extra fields -->
  <button
    type="button"
    class="toggle-more"
    onclick={() => showMore = !showMore}
  >
    {showMore ? t('contact.form.lessDetails') : t('contact.form.moreDetails')}
    <svg class="toggle-chevron" class:open={showMore} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>

  {#if showMore}
    <div class="extra-fields" transition:slide={{ duration: 250 }}>
      <div class="field">
        <label for="cf-phone" class="field-label">{t('contact.form.phone')}</label>
        <input id="cf-phone" type="tel" bind:value={formData.phone} class="form-input" />
      </div>

      <div class="field">
        <label for="cf-company" class="field-label">{t('contact.form.company')}</label>
        <input id="cf-company" type="text" bind:value={formData.company} class="form-input" />
      </div>

      <div class="field">
        <label for="cf-eventDate" class="field-label">{t('contact.form.eventDate')}</label>
        <input id="cf-eventDate" type="date" bind:value={formData.eventDate} class="form-input" />
      </div>
    </div>
  {/if}

  {#if status === 'success'}
    <p class="form-success">{t('contact.form.success')}</p>
  {/if}

  {#if status === 'error'}
    <p class="form-error">{t('contact.form.error')}</p>
  {/if}

  <button type="submit" class="btn-primary submit-btn" disabled={status === 'sending'}>
    {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
  </button>
</form>

<style>
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .field-label {
    font-family: 'Cinzel', serif;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-accent);
  }

  .extra-fields {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .toggle-more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-family: 'Crimson Pro', serif;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .toggle-more:hover {
    color: var(--text-primary);
  }

  .toggle-chevron {
    transition: transform 0.25s ease;
  }

  .toggle-chevron.open {
    transform: rotate(180deg);
  }

  .form-success {
    color: var(--ember);
    font-size: 0.95rem;
  }

  .form-error {
    color: #c44a2a;
    font-size: 0.95rem;
  }

  .submit-btn {
    width: 100%;
  }

  /* Date input color fix for dark theme */
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.7);
  }
</style>
