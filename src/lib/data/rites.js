import duoshowHero from '$lib/images/eldshower/duoshow.webp';
import duoshowSecondary from '$lib/images/eldshower/duoshow_med_tema_small.webp';
import soloshowHero from '$lib/images/eldshower/soloshow.webp';
import soloshowSecondary from '$lib/images/home/eldshower_small.webp';
import workshopHero from '$lib/images/Prova på flowarts/prova_pa_flowarts.webp';
import workshopSecondary from '$lib/images/home/prova_pa_flowarts_small.webp';

export const rites = {
  duoshow: {
    slug: 'duoshow',
    translationKey: 'duoshow',
    symbol: 'II',
    heroImage: duoshowHero,
    secondaryImage: duoshowSecondary,
  },
  soloshow: {
    slug: 'soloshow',
    translationKey: 'soloshow',
    symbol: 'I',
    heroImage: soloshowHero,
    secondaryImage: soloshowSecondary,
  },
  workshop: {
    slug: 'workshop',
    translationKey: 'workshop',
    symbol: '◯',
    heroImage: workshopHero,
    secondaryImage: workshopSecondary,
  },
};

export const validSlugs = Object.keys(rites);
