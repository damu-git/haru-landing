import './style.css'
import { t, getCurrentLocale, setLocale, updateMetaTags } from './i18n'
import type { Locale } from './i18n'

// Update meta tags on load
updateMetaTags()

const i18n = t()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="nav">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-stone-800 tracking-tight">${i18n.nav.brand}</a>
      <div class="flex items-center gap-3">
        <!-- Language Switcher -->
        <div class="relative" id="lang-switcher">
          <button id="lang-btn" class="flex items-center gap-1.5 text-stone-600 hover:text-stone-800 px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors text-sm font-medium">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
            <span id="current-lang-label">${getCurrentLocale() === 'ko' ? i18n.langSwitcher.ko : getCurrentLocale() === 'ja' ? i18n.langSwitcher.ja : i18n.langSwitcher.en}</span>
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div id="lang-dropdown" class="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-stone-100 py-1 hidden z-50">
            <button data-lang="ko" class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors flex items-center gap-2 ${getCurrentLocale() === 'ko' ? 'text-primary font-medium' : 'text-stone-600'}">
              ${i18n.langSwitcher.ko}
              ${getCurrentLocale() === 'ko' ? '<svg class="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : ''}
            </button>
            <button data-lang="en" class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors flex items-center gap-2 ${getCurrentLocale() === 'en' ? 'text-primary font-medium' : 'text-stone-600'}">
              ${i18n.langSwitcher.en}
              ${getCurrentLocale() === 'en' ? '<svg class="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : ''}
            </button>
            <button data-lang="ja" class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors flex items-center gap-2 ${getCurrentLocale() === 'ja' ? 'text-primary font-medium' : 'text-stone-600'}">
              ${i18n.langSwitcher.ja}
              ${getCurrentLocale() === 'ja' ? '<svg class="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : ''}
            </button>
          </div>
        </div>
        <a href="#download" class="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
          ${i18n.nav.cta}
        </a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="min-h-screen relative overflow-hidden bg-gradient-to-b from-warm-bg via-warm-surface to-white">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-blob" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <!-- Left: Copy -->
        <div class="animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight mb-6">
            ${i18n.hero.headline1}<br>
            <span class="text-primary">${i18n.hero.headline2}</span>${i18n.hero.headline3}
          </h1>
          <p class="text-lg md:text-xl text-stone-500 mb-10 max-w-lg leading-relaxed">
            ${i18n.hero.subheadline1}<br>
            ${i18n.hero.subheadline2}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#download" class="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-3">
              ${i18n.hero.ctaPrimary}
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#about" class="bg-white hover:bg-stone-50 text-stone-700 px-8 py-4 rounded-2xl text-lg font-semibold transition-all border border-stone-200 hover:border-stone-300 flex items-center justify-center">
              ${i18n.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <!-- Right: Phone Mockup -->
        <div class="relative flex justify-center lg:justify-end animate-fade-in" style="animation-delay: 0.3s;">
          <div class="relative">
            <!-- Floating decorative elements -->
            <div class="absolute -top-8 -left-8 w-16 h-16 bg-accent/30 rounded-2xl animate-float-slow rotate-12"></div>
            <div class="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/30 rounded-full animate-float-delay"></div>
            <div class="absolute top-1/2 -left-12 w-8 h-8 bg-primary-light/40 rounded-lg animate-float rotate-45"></div>

            <!-- Phone -->
            <div class="phone-mockup w-[280px] md:w-[320px] animate-float-slow">
              <div class="phone-screen aspect-[9/19] flex flex-col">
                <!-- Status bar placeholder -->
                <div class="h-8 flex items-center justify-center">
                  <div class="w-20 h-5 bg-stone-800 rounded-full"></div>
                </div>
                <!-- App content placeholder -->
                <div class="flex-1 p-4 flex flex-col">
                  <div class="text-center mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl mx-auto mb-3 flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </div>
                    <p class="text-stone-800 font-semibold text-sm">${i18n.phone.greeting}</p>
                  </div>
                  <!-- Chat bubbles -->
                  <div id="chat-container" class="space-y-2.5 flex-1 overflow-hidden">
                  </div>
                  <!-- Input placeholder -->
                  <div class="mt-auto pt-3">
                    <div class="bg-white border border-stone-200 rounded-full px-4 py-3 flex items-center gap-2">
                      <div id="input-text" class="flex-1 text-xs text-stone-500 truncate"></div>
                      <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>

  <!-- Problem Section -->
  <section id="about" class="py-24 md:py-32 bg-gradient-to-b from-white to-warm-bg relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-warm-bg/50 to-transparent pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="text-center mb-16 reveal">
        <p class="text-primary font-medium mb-3">${i18n.problem.badge}</p>
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
          ${i18n.problem.title}
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto">
          ${i18n.problem.subtitle}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
        <!-- Card 1 -->
        <div class="group bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 border border-stone-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">${i18n.problem.cards[0].title}</h3>
          <p class="text-stone-500 text-sm leading-relaxed">${i18n.problem.cards[0].description}</p>
        </div>

        <!-- Card 2 -->
        <div class="group bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 border border-stone-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">${i18n.problem.cards[1].title}</h3>
          <p class="text-stone-500 text-sm leading-relaxed">${i18n.problem.cards[1].description}</p>
        </div>

        <!-- Card 3 -->
        <div class="group bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 border border-stone-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">${i18n.problem.cards[2].title}</h3>
          <p class="text-stone-500 text-sm leading-relaxed">${i18n.problem.cards[2].description}</p>
        </div>

        <!-- Card 4 -->
        <div class="group bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 border border-stone-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">${i18n.problem.cards[3].title}</h3>
          <p class="text-stone-500 text-sm leading-relaxed">${i18n.problem.cards[3].description}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="py-24 md:py-32 bg-gradient-to-b from-warm-bg to-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Illustration -->
        <div class="relative reveal order-2 lg:order-1">
          <div class="relative max-w-md mx-auto">
            <!-- Abstract illustration -->
            <div class="aspect-square relative">
              <!-- Background circles -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-soft"></div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-60 h-60 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 animate-pulse-soft" style="animation-delay: 1s;"></div>
              </div>
              <!-- Center card -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="glass-card rounded-3xl p-8 max-w-xs animate-float-slow">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <p class="text-stone-700 font-medium text-lg leading-relaxed">
                    ${i18n.solution.quote}
                  </p>
                </div>
              </div>
              <!-- Floating elements -->
              <div class="absolute top-8 right-8 w-12 h-12 bg-accent/30 rounded-xl animate-float rotate-12"></div>
              <div class="absolute bottom-12 left-8 w-10 h-10 bg-primary/30 rounded-full animate-float-delay"></div>
            </div>
          </div>
        </div>

        <!-- Right: Copy -->
        <div class="reveal order-1 lg:order-2">
          <p class="text-primary font-medium mb-3">${i18n.solution.badge}</p>
          <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
            ${i18n.solution.title}
          </h2>
          <p class="text-xl text-stone-600 mb-8 leading-relaxed">
            ${i18n.solution.description1}<br>
            ${i18n.solution.description2}<br>
            ${i18n.solution.description3}
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-800 mb-1">${i18n.solution.features[0].title}</h4>
                <p class="text-stone-500">${i18n.solution.features[0].description}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-800 mb-1">${i18n.solution.features[1].title}</h4>
                <p class="text-stone-500">${i18n.solution.features[1].description}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-800 mb-1">${i18n.solution.features[2].title}</h4>
                <p class="text-stone-500">${i18n.solution.features[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-24 md:py-32 bg-gradient-to-b from-white to-warm-surface relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-20 reveal">
        <p class="text-primary font-medium mb-3">${i18n.features.badge}</p>
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
          ${i18n.features.title}
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto">
          ${i18n.features.subtitle}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Feature 1 -->
        <div class="text-center reveal">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center mx-auto rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center -rotate-3 shadow-lg shadow-primary/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">${i18n.features.cards[0].title}</h3>
          <p class="text-stone-500 leading-relaxed">
            ${i18n.features.cards[0].description}
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="text-center reveal" style="animation-delay: 0.1s;">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl flex items-center justify-center mx-auto -rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center rotate-3 shadow-lg shadow-accent/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">${i18n.features.cards[1].title}</h3>
          <p class="text-stone-500 leading-relaxed">
            ${i18n.features.cards[1].description}
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="text-center reveal" style="animation-delay: 0.2s;">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-violet-100 to-violet-50 rounded-3xl flex items-center justify-center mx-auto rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-violet-400 to-violet-500 rounded-2xl flex items-center justify-center -rotate-3 shadow-lg shadow-violet-500/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">${i18n.features.cards[2].title}</h3>
          <p class="text-stone-500 leading-relaxed">
            ${i18n.features.cards[2].description}
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Connection Features Section -->
  <section class="py-24 md:py-32 bg-gradient-to-b from-warm-surface via-rose-50/30 to-warm-bg relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-1/4 right-0 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="text-center mb-20 reveal">
        <div class="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full text-sm text-rose-600 mb-4">
          <span class="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></span>
          ${i18n.connection.comingSoon}
        </div>
        <p class="text-primary font-medium mb-3">${i18n.connection.badge}</p>
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
          ${i18n.connection.title}
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto">
          ${i18n.connection.subtitle}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Connection Feature 1 -->
        <div class="text-center reveal">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-rose-100 to-rose-50 rounded-3xl flex items-center justify-center mx-auto rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center -rotate-3 shadow-lg shadow-rose-500/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">${i18n.connection.cards[0].title}</h3>
          <p class="text-stone-500 leading-relaxed">
            ${i18n.connection.cards[0].description}
          </p>
        </div>

        <!-- Connection Feature 2 -->
        <div class="text-center reveal" style="animation-delay: 0.1s;">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl flex items-center justify-center mx-auto -rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center rotate-3 shadow-lg shadow-amber-500/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">${i18n.connection.cards[1].title}</h3>
          <p class="text-stone-500 leading-relaxed">
            ${i18n.connection.cards[1].description}
          </p>
        </div>

        <!-- Connection Feature 3 -->
        <div class="text-center reveal" style="animation-delay: 0.2s;">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl flex items-center justify-center mx-auto rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center -rotate-3 shadow-lg shadow-emerald-500/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">${i18n.connection.cards[2].title}</h3>
          <p class="text-stone-500 leading-relaxed">
            ${i18n.connection.cards[2].description}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- How it works Section -->
  <section class="py-24 md:py-32 bg-gradient-to-b from-warm-bg to-stone-100 relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-20 reveal">
        <p class="text-primary font-medium mb-3">${i18n.howItWorks.badge}</p>
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800">
          ${i18n.howItWorks.title}
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-7 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40"></div>

        <!-- Step 1 -->
        <div class="relative flex items-center gap-6 md:gap-12 mb-16 reveal">
          <div class="hidden md:block flex-1 text-right pr-12">
            <h3 class="text-xl font-bold text-stone-800 mb-2">${i18n.howItWorks.steps[0].title}</h3>
            <p class="text-stone-500">${i18n.howItWorks.steps[0].description}</p>
          </div>
          <div class="w-14 h-14 bg-white rounded-full border-3 border-primary flex items-center justify-center shadow-xl z-10 flex-shrink-0">
            <span class="text-xl font-bold text-primary">1</span>
          </div>
          <div class="flex-1 md:pl-12">
            <h3 class="text-xl font-bold text-stone-800 mb-2 md:hidden">${i18n.howItWorks.steps[0].title}</h3>
            <p class="text-stone-500 md:hidden">${i18n.howItWorks.steps[0].description}</p>
            <p class="hidden md:block text-stone-400">${i18n.howItWorks.steps[0].hint}</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative flex items-center gap-6 md:gap-12 mb-16 reveal" style="animation-delay: 0.1s;">
          <div class="hidden md:block flex-1 text-right pr-12">
            <p class="text-stone-400">${i18n.howItWorks.steps[1].hint}</p>
          </div>
          <div class="w-14 h-14 bg-white rounded-full border-3 border-primary/60 flex items-center justify-center shadow-xl z-10 flex-shrink-0">
            <span class="text-xl font-bold text-primary/80">2</span>
          </div>
          <div class="flex-1 md:pl-12">
            <h3 class="text-xl font-bold text-stone-800 mb-2">${i18n.howItWorks.steps[1].title}</h3>
            <p class="text-stone-500">${i18n.howItWorks.steps[1].description}</p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative flex items-center gap-6 md:gap-12 mb-16 reveal" style="animation-delay: 0.2s;">
          <div class="hidden md:block flex-1 text-right pr-12">
            <h3 class="text-xl font-bold text-stone-800 mb-2">${i18n.howItWorks.steps[2].title}</h3>
            <p class="text-stone-500">${i18n.howItWorks.steps[2].description}</p>
          </div>
          <div class="w-14 h-14 bg-white rounded-full border-3 border-primary/60 flex items-center justify-center shadow-xl z-10 flex-shrink-0">
            <span class="text-xl font-bold text-primary/80">3</span>
          </div>
          <div class="flex-1 md:pl-12">
            <h3 class="text-xl font-bold text-stone-800 mb-2 md:hidden">${i18n.howItWorks.steps[2].title}</h3>
            <p class="text-stone-500 md:hidden">${i18n.howItWorks.steps[2].description}</p>
            <p class="hidden md:block text-stone-400">${i18n.howItWorks.steps[2].hint}</p>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="relative flex items-center gap-6 md:gap-12 mb-16 reveal" style="animation-delay: 0.3s;">
          <div class="hidden md:block flex-1 text-right pr-12">
            <p class="text-stone-400">${i18n.howItWorks.steps[3].hint}</p>
          </div>
          <div class="w-14 h-14 bg-white rounded-full border-3 border-primary/60 flex items-center justify-center shadow-xl z-10 flex-shrink-0">
            <span class="text-xl font-bold text-primary/80">4</span>
          </div>
          <div class="flex-1 md:pl-12">
            <h3 class="text-xl font-bold text-stone-800 mb-2">${i18n.howItWorks.steps[3].title}</h3>
            <p class="text-stone-500">${i18n.howItWorks.steps[3].description}</p>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="relative flex items-center gap-6 md:gap-12 reveal" style="animation-delay: 0.4s;">
          <div class="hidden md:block flex-1 text-right pr-12">
            <h3 class="text-xl font-bold text-stone-800 mb-2">${i18n.howItWorks.steps[4].title}</h3>
            <p class="text-stone-500">${i18n.howItWorks.steps[4].description}</p>
          </div>
          <div class="w-14 h-14 bg-white rounded-full border-3 border-primary flex items-center justify-center shadow-xl z-10 flex-shrink-0">
            <span class="text-xl font-bold text-primary">5</span>
          </div>
          <div class="flex-1 md:pl-12">
            <h3 class="text-xl font-bold text-stone-800 mb-2 md:hidden">${i18n.howItWorks.steps[4].title}</h3>
            <p class="text-stone-500 md:hidden">${i18n.howItWorks.steps[4].description}</p>
            <p class="hidden md:block text-stone-400">${i18n.howItWorks.steps[4].hint}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="download" class="py-24 md:py-32 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-4xl mx-auto px-6 text-center relative reveal">
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/80 mb-8 border border-white/10">
        <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
        ${i18n.cta.badge}
      </div>

      <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
        ${i18n.cta.title1}<br>${i18n.cta.title2}
      </h2>
      <p class="text-xl text-stone-300 mb-12 max-w-lg mx-auto">
        ${i18n.cta.subtitle1}<br>
        ${i18n.cta.subtitle2}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button id="btn-appstore" class="group bg-white hover:bg-stone-50 text-stone-900 px-8 py-4 rounded-2xl text-lg font-semibold transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-3 relative">
          <span class="absolute -top-2 -right-2 text-xs font-semibold text-white bg-gradient-to-r from-primary to-primary-dark px-2 py-0.5 rounded-full">${i18n.cta.comingSoon}</span>
          <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          ${i18n.cta.appStore}
        </button>
        <button id="btn-playstore" class="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all border border-white/20 hover:border-white/30 hover:-translate-y-1 inline-flex items-center justify-center gap-3 backdrop-blur-sm relative">
          <span class="absolute -top-2 -right-2 text-xs font-semibold text-white bg-gradient-to-r from-primary to-primary-dark px-2 py-0.5 rounded-full">${i18n.cta.comingSoon}</span>
          <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
          </svg>
          ${i18n.cta.googlePlay}
        </button>
      </div>

      <!-- Toast -->
      <div id="toast" class="fixed bottom-8 left-1/2 -translate-x-1/2 bg-stone-800 text-white px-6 py-3 rounded-full shadow-xl opacity-0 pointer-events-none transition-all duration-300 translate-y-4">
        ${i18n.cta.toast}
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-16 bg-stone-900 border-t border-stone-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <p class="text-2xl font-bold text-white mb-3">${i18n.footer.brand}</p>
          <p class="text-stone-400 text-sm">
            ${i18n.footer.tagline1}<br>
            ${i18n.footer.tagline2}
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">${i18n.footer.service}</h4>
          <ul class="space-y-3 text-stone-400">
            <li><a href="#features" class="hover:text-white transition-colors">${i18n.footer.featuresLink}</a></li>
            <li><a href="#download" class="hover:text-white transition-colors">${i18n.footer.download}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">${i18n.footer.company}</h4>
          <ul class="space-y-3 text-stone-400">
            <li><a href="#" class="hover:text-white transition-colors">${i18n.footer.terms}</a></li>
            <li><a href="/privacy.html" class="hover:text-white transition-colors">${i18n.footer.privacy}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">${i18n.footer.contact}</h4>
          <ul class="space-y-3 text-stone-400">
            <li><a href="mailto:damu@damu.dev" class="hover:text-white transition-colors">damu@damu.dev</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
        ${i18n.footer.copyright}
      </div>
    </div>
  </footer>
`

// Language switcher functionality
const langSwitcher = document.getElementById('lang-switcher')
const langBtn = document.getElementById('lang-btn')
const langDropdown = document.getElementById('lang-dropdown')

langBtn?.addEventListener('click', (e) => {
  e.stopPropagation()
  langDropdown?.classList.toggle('hidden')
})

langDropdown?.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang') as Locale
    if (lang !== getCurrentLocale()) {
      setLocale(lang)
    }
  })
})

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (langSwitcher && !langSwitcher.contains(e.target as Node)) {
    langDropdown?.classList.add('hidden')
  }
})

// Scroll animations with Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el)
})

// Navigation background on scroll
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav?.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-stone-100')
  } else {
    nav?.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-stone-100')
  }
})

// Toast for coming soon buttons
const toast = document.getElementById('toast')
const showToast = () => {
  if (!toast) return
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4')
  toast.classList.add('opacity-100', 'translate-y-0')

  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4')
    toast.classList.remove('opacity-100', 'translate-y-0')
  }, 3000)
}

document.getElementById('btn-appstore')?.addEventListener('click', showToast)
document.getElementById('btn-playstore')?.addEventListener('click', showToast)

// Chat animation
const chatContainer = document.getElementById('chat-container')
const inputText = document.getElementById('input-text')

// Use translated chat messages
const chatMessages = i18n.chat

const createTypingIndicator = () => {
  const div = document.createElement('div')
  div.className = 'chat-bubble bg-primary/15 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[50%] flex items-center gap-1'
  div.innerHTML = `
    <span class="typing-dot w-1.5 h-1.5 bg-stone-500 rounded-full"></span>
    <span class="typing-dot w-1.5 h-1.5 bg-stone-500 rounded-full"></span>
    <span class="typing-dot w-1.5 h-1.5 bg-stone-500 rounded-full"></span>
  `
  div.style.animation = 'chat-appear 0.3s ease-out forwards'
  return div
}

const createMessage = (type: string, text: string) => {
  const div = document.createElement('div')
  if (type === 'ai') {
    div.className = 'chat-bubble bg-primary/15 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-stone-700 max-w-[80%]'
  } else {
    div.className = 'chat-bubble bg-stone-200 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-stone-700 max-w-[80%] ml-auto'
  }
  div.textContent = text
  div.style.animation = 'chat-appear 0.3s ease-out forwards'
  return div
}

let currentIndex = 0
let typingIndicator: HTMLElement | null = null

const createEndBadge = () => {
  const div = document.createElement('div')
  div.className = 'chat-bubble flex items-center justify-center gap-1.5 py-3'
  div.innerHTML = `
    <div class="w-5 h-5 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
      <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    </div>
    <span class="text-xs font-medium text-stone-500">${i18n.phone.aiFriendLabel}</span>
  `
  div.style.animation = 'chat-appear 0.4s ease-out forwards'
  return div
}

const resetChat = () => {
  if (!chatContainer) return
  // Fade out all messages
  chatContainer.style.transition = 'opacity 0.5s ease-out'
  chatContainer.style.opacity = '0'

  setTimeout(() => {
    // Clear and reset
    chatContainer.innerHTML = ''
    chatContainer.style.opacity = '1'
    currentIndex = 0
    // Restart animation
    setTimeout(animateChat, 500)
  }, 500)
}

const animateChat = () => {
  if (!chatContainer || !inputText) return
  if (currentIndex >= chatMessages.length) {
    // Show end badge
    const endBadge = createEndBadge()
    chatContainer.appendChild(endBadge)
    chatContainer.scrollTop = chatContainer.scrollHeight
    // Wait 5 seconds then reset
    setTimeout(resetChat, 5000)
    return
  }

  const msg = chatMessages[currentIndex]

  if (msg.type === 'ai') {
    // Show typing indicator first
    typingIndicator = createTypingIndicator()
    chatContainer.appendChild(typingIndicator)
    chatContainer.scrollTop = chatContainer.scrollHeight

    setTimeout(() => {
      // Remove typing indicator and show message
      typingIndicator?.remove()
      const msgEl = createMessage('ai', msg.text)
      chatContainer.appendChild(msgEl)
      chatContainer.scrollTop = chatContainer.scrollHeight
      currentIndex++
      setTimeout(animateChat, 1200)
    }, 800)
  } else {
    // Show typing in input field
    inputText.textContent = msg.text

    setTimeout(() => {
      // Clear input and show message
      inputText.textContent = ''
      const msgEl = createMessage('user', msg.text)
      chatContainer.appendChild(msgEl)
      chatContainer.scrollTop = chatContainer.scrollHeight
      currentIndex++
      setTimeout(animateChat, 1200)
    }, 600)
  }
}

// Start chat animation after page load
setTimeout(animateChat, 1000)
