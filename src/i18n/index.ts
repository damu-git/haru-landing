import type { Locale, Translations } from './types';
import ko from './ko.json';
import en from './en.json';
import ja from './ja.json';

const STORAGE_KEY = 'haru-locale';
const SUPPORTED_LOCALES: Locale[] = ['ko', 'en', 'ja'];
const DEFAULT_LOCALE: Locale = 'ko';

const translations: Record<Locale, Translations> = {
  ko: ko as Translations,
  en: en as Translations,
  ja: ja as Translations,
};

/**
 * Detect user's preferred locale
 * Priority: URL path > data-locale attribute > localStorage > URL param > browser language > default
 */
export function detectLocale(): Locale {
  // 1. Check URL path (/en/, /ja/)
  const pathMatch = window.location.pathname.match(/^\/(en|ja)\//);
  if (pathMatch && SUPPORTED_LOCALES.includes(pathMatch[1] as Locale)) {
    return pathMatch[1] as Locale;
  }

  // 2. Check data-locale attribute on html element (set during static build)
  const htmlLocale = document.documentElement.getAttribute('data-locale');
  if (htmlLocale && SUPPORTED_LOCALES.includes(htmlLocale as Locale)) {
    return htmlLocale as Locale;
  }

  // 3. Check localStorage (user's explicit previous choice)
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
    return stored as Locale;
  }

  // 4. Check URL parameter (?lang=en)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && SUPPORTED_LOCALES.includes(urlLang as Locale)) {
    return urlLang as Locale;
  }

  // 5. Check browser language (Accept-Language equivalent)
  for (const browserLang of navigator.languages) {
    const shortLang = browserLang.split('-')[0].toLowerCase();
    if (SUPPORTED_LOCALES.includes(shortLang as Locale)) {
      return shortLang as Locale;
    }
  }

  // 6. Default fallback (Korean)
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
 * Set locale and navigate to correct URL path
 */
export function setLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);

  // Get base path (remove any locale prefix)
  let basePath = window.location.pathname.replace(/^\/(en|ja)\//, '/');

  // Build new URL based on locale
  let newPath: string;
  if (locale === 'ko') {
    // Korean is default, use root path
    newPath = basePath;
  } else {
    // Other languages use /locale/ prefix
    newPath = `/${locale}${basePath}`;
  }

  // Navigate to new URL
  const url = new URL(window.location.href);
  url.pathname = newPath;
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
  const ogLocale = locale === 'ko' ? 'ko_KR' : locale === 'ja' ? 'ja_JP' : 'en_US';
  updateMeta('meta[property="og:locale"]', ogLocale);
  updateMeta('meta[name="twitter:title"]', meta.title);
  updateMeta('meta[name="twitter:description"]', meta.description);
}

export type { Locale, Translations };
