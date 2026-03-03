import { sv } from './translations/sv.js';
import { en } from './translations/en.js';

const translations = { sv, en };

let locale = $state(
  (typeof localStorage !== 'undefined' && localStorage.getItem('locale')) || 'sv'
);

export function getLocale() {
  return locale;
}

export function setLocale(newLocale) {
  locale = newLocale;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('locale', newLocale);
  }
}

export function t(key) {
  const keys = key.split('.');
  let value = translations[locale];
  for (const k of keys) {
    if (value === undefined) return key;
    value = value[k];
  }
  return value ?? key;
}
