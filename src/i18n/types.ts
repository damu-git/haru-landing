export type Locale = 'ko' | 'en' | 'ja';

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

export interface AccountDeletionStep {
  title: string;
  description: string;
}

export interface PrivacySection {
  title: string;
  intro?: string;
  content?: string;
  note?: string;
  headers?: string[];
  rows?: string[][];
  items?: string[];
}

export interface PrivacyTranslations {
  title: string;
  pageTitle: string;
  backToHome: string;
  intro: string;
  effectiveDate: string;
  sections: {
    purpose: PrivacySection & { headers: string[]; rows: string[][] };
    collection: PrivacySection & {
      required: string;
      requiredHeaders: string[];
      requiredRows: string[][];
      auto: string;
      autoItems: string[];
      optional: string;
      optionalItems: string[];
    };
    retention: PrivacySection & { headers: string[]; rows: string[][] };
    thirdParty: PrivacySection & { items: string[] };
    outsourcing: PrivacySection & { headers: string[]; rows: string[][] };
    overseas: PrivacySection & { headers: string[]; rows: string[][] };
    destruction: PrivacySection & { items: string[] };
    rights: PrivacySection & { headers: string[]; rows: string[][] };
    security: PrivacySection & { items: string[] };
    officer: PrivacySection & { headers: string[]; rows: string[][] };
    remedies: PrivacySection & { items: string[] };
    changes: PrivacySection & { content: string };
  };
}

export interface AccountDeletionTranslations {
  pageTitle: string;
  title: string;
  backToHome: string;
  intro: string;
  steps: AccountDeletionStep[];
  warningTitle: string;
  warnings: string[];
  contactInfo: string;
}

export interface TermsSection {
  title: string;
  content?: string;
  items?: string[];
  subsections?: {
    title: string;
    content?: string;
    items?: string[];
  }[];
}

export interface SafetyPolicyTranslations {
  pageTitle: string;
  title: string;
  backToHome: string;
  intro: string;
  effectiveDate: string;
  emergency: {
    title: string;
    content: string;
  };
  sections: {
    commitment: {
      title: string;
      content: string;
    };
    ageRestriction: {
      title: string;
      intro: string;
      items: string[];
    };
    prohibitedContent: {
      title: string;
      intro: string;
      items: string[];
    };
    reporting: {
      title: string;
      intro: string;
      inApp: {
        title: string;
        items: string[];
      };
      email: {
        title: string;
        content: string;
      };
    };
    response: {
      title: string;
      intro: string;
      items: string[];
    };
    cooperation: {
      title: string;
      content: string;
    };
    education: {
      title: string;
      content: string;
    };
    contact: {
      title: string;
      content: string;
    };
    updates: {
      title: string;
      content: string;
    };
  };
}

export interface TermsTranslations {
  pageTitle: string;
  title: string;
  backToHome: string;
  effectiveDate: string;
  sections: {
    chapter1: {
      title: string;
      article1: TermsSection;
      article2: TermsSection & { definitions: string[] };
      article3: TermsSection & { items: string[] };
    };
    chapter2: {
      title: string;
      article4: TermsSection & { items: string[] };
      article5: TermsSection;
    };
    chapter3: {
      title: string;
      article6: TermsSection & { services: string[]; items: string[] };
      article7: TermsSection & { items: string[] };
      article8: TermsSection & { items: string[] };
      article9: TermsSection & { items: string[] };
    };
    chapter4: {
      title: string;
      article10: TermsSection & { items: string[] };
      article11: TermsSection & { items: string[] };
    };
    chapter5: {
      title: string;
      article12: TermsSection & { prohibited: string[] };
      article13: TermsSection & { measures: string[] };
    };
    chapter6: {
      title: string;
      article14: TermsSection & { items: string[] };
      article15: TermsSection;
      article16: TermsSection & { items: string[] };
      article17: TermsSection & { items: string[] };
      article18: TermsSection;
    };
    appendix: {
      title: string;
      content: string;
    };
  };
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
    safety: string;
    contact: string;
    copyright: string;
  };
  langSwitcher: {
    ko: string;
    en: string;
    ja: string;
  };
  privacy: PrivacyTranslations;
  accountDeletion: AccountDeletionTranslations;
  terms: TermsTranslations;
  safetyPolicy: SafetyPolicyTranslations;
}
