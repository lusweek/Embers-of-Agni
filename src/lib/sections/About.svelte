<script>
  import { t } from '$lib/i18n.svelte.js';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SectionDivider from '$lib/components/SectionDivider.svelte';
  import ossImg from '$lib/images/om_oss/oss_1.webp';
  import lukasImg from '$lib/images/om_oss/lukas_1_small.webp';
  import elinImg from '$lib/images/om_oss/elin_1_small.webp';
</script>

<section id="about" class="section-padding">
  <ScrollReveal>
    <h2 class="section-title">{t('about.title')}</h2>
  </ScrollReveal>

  <SectionDivider />

  <div class="about-layout">
    <!-- Image / Text split -->
    <ScrollReveal>
      <div class="about-split">
        <div class="about-image">
          <img src={ossImg} alt="Embers of Agni" />
        </div>
        <div class="about-text">
          <p class="story">{t('about.story')}</p>

          <!-- Static stats -->
          <div class="stats-row">
            <span class="stat">{t('about.stats.experience')}</span>
            <span class="stat-dot"></span>
            <span class="stat">{t('about.stats.coverage')}</span>
            <span class="stat-dot"></span>
            <span class="stat">{t('about.stats.shows')}</span>
          </div>

          <!-- Testimonial blockquote -->
          <blockquote class="testimonial-quote">
            <p>"{t('testimonials.items')[0].quote}"</p>
            <cite>— {t('testimonials.items')[0].name}, {t('testimonials.items')[0].event}</cite>
          </blockquote>
        </div>
      </div>
    </ScrollReveal>

    <!-- Performer photos -->
    <ScrollReveal>
      <div class="performers">
        <div class="performer">
          <img src={lukasImg} alt={t('about.lukas.name')} />
          <div class="performer-info">
            <h3>{t('about.lukas.name')}</h3>
            <span class="performer-specialty">{t('about.lukas.specialty')}</span>
          </div>
        </div>
        <div class="performer">
          <img src={elinImg} alt={t('about.elin.name')} />
          <div class="performer-info">
            <h3>{t('about.elin.name')}</h3>
            <span class="performer-specialty">{t('about.elin.specialty')}</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>

<style>
  .about-layout {
    max-width: 72rem;
    margin: 1rem auto 0;
  }

  .about-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .about-image {
    border-radius: 2px;
    overflow: hidden;
  }

  .about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 4/5;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .story {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .stats-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .stat {
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-accent);
  }

  .stat-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--text-secondary);
    flex-shrink: 0;
  }

  .testimonial-quote {
    border-left: 3px solid var(--ember);
    padding-left: 1.5rem;
    margin: 0;
  }

  .testimonial-quote p {
    font-style: italic;
    color: var(--text-primary);
    font-size: 1.05rem;
    line-height: 1.7;
    margin: 0 0 0.75rem;
  }

  .testimonial-quote cite {
    font-style: normal;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .performers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3px;
    margin-top: 4rem;
  }

  .performer {
    position: relative;
    overflow: hidden;
    border-radius: 2px;
  }

  .performer img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    display: block;
  }

  .performer-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background: linear-gradient(to top, rgba(8,6,4,0.9) 0%, transparent 100%);
  }

  .performer-info h3 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  .performer-specialty {
    font-family: 'Crimson Pro', serif;
    font-size: 0.9rem;
    color: var(--text-accent);
  }

  @media (max-width: 768px) {
    .about-split {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .stats-row {
      justify-content: center;
    }
  }
</style>
