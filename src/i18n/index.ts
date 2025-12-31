import type { Locale, Translations } from './types';
import ko from './ko.json';
import en from './en.json';

const STORAGE_KEY = 'haru-locale';
const SUPPORTED_LOCALES: Locale[] = ['ko', 'en'];
const DEFAULT_LOCALE: Locale = 'ko';

const translations: Record<Locale, Translations> = {
  ko: ko as Translations,
  en: en as Translations,
};

/**
 * Detect user's preferred locale
 * Priority: localStorage > URL param > browser language > default
 */
export function detectLocale(): Locale {
  // 1. Check localStorage (user's explicit previous choice)
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
    return stored as Locale;
  }

  // 2. Check URL parameter (?lang=en)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && SUPPORTED_LOCALES.includes(urlLang as Locale)) {
    return urlLang as Locale;
  }

  // 3. Check browser language (Accept-Language equivalent)
  for (const browserLang of navigator.languages) {
    const shortLang = browserLang.split('-')[0].toLowerCase();
    if (SUPPORTED_LOCALES.includes(shortLang as Locale)) {
      return shortLang as Locale;
    }
  }

  // 4. Default fallback
  return DEFAULT_LOCALE;
}

/**
 * Get current locale from storage or detect it
 */
export function getCurrentLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
    return stored as Locale;
  }
  return detectLocale();
}

/**
 * Set locale and reload page
 */
export function setLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);
  // Remove lang param from URL if present
  const url = new URL(window.location.href);
  url.searchParams.delete('lang');
  window.location.href = url.toString();
}

/**
 * Get translations for current locale
 */
export function t(): Translations {
  return translations[getCurrentLocale()];
}

/**
 * Update HTML meta tags based on current locale
 */
export function updateMetaTags(): void {
  const locale = getCurrentLocale();
  const meta = t().meta;

  // Update html lang attribute
  document.documentElement.lang = locale;

  // Update title
  document.title = meta.title;

  // Helper to update meta tags
  const updateMeta = (selector: string, content: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', content);
  };

  updateMeta('meta[name="description"]', meta.description);
  updateMeta('meta[name="title"]', meta.title);
  updateMeta('meta[name="keywords"]', meta.keywords);
  updateMeta('meta[property="og:title"]', meta.title);
  updateMeta('meta[property="og:description"]', meta.description);
  updateMeta('meta[property="og:locale"]', locale === 'ko' ? 'ko_KR' : 'en_US');
  updateMeta('meta[name="twitter:title"]', meta.title);
  updateMeta('meta[name="twitter:description"]', meta.description);
}

export type { Locale, Translations };
