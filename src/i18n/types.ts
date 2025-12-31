export type Locale = 'ko' | 'en';

export interface ChatMessage {
  type: 'ai' | 'user';
  text: string;
}

export interface Card {
  title: string;
  description: string;
}

export interface TimelineStep {
  title: string;
  description: string;
  hint?: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    brand: string;
    cta: string;
  };
  hero: {
    headline1: string;
    headline2: string;
    headline3: string;
    subheadline1: string;
    subheadline2: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  phone: {
    greeting: string;
    aiFriendLabel: string;
  };
  chat: ChatMessage[];
  problem: {
    badge: string;
    title: string;
    subtitle: string;
    cards: Card[];
  };
  solution: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
    quote: string;
    features: Card[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    cards: Card[];
  };
  connection: {
    comingSoon: string;
    badge: string;
    title: string;
    subtitle: string;
    cards: Card[];
  };
  howItWorks: {
    badge: string;
    title: string;
    steps: TimelineStep[];
  };
  cta: {
    badge: string;
    title1: string;
    title2: string;
    subtitle1: string;
    subtitle2: string;
    comingSoon: string;
    appStore: string;
    googlePlay: string;
    toast: string;
  };
  footer: {
    brand: string;
    tagline1: string;
    tagline2: string;
    service: string;
    featuresLink: string;
    download: string;
    company: string;
    terms: string;
    privacy: string;
    contact: string;
    copyright: string;
  };
  langSwitcher: {
    ko: string;
    en: string;
  };
}
