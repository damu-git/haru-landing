import './style.css'
import { t, getCurrentLocale, setLocale, updateMetaTags } from './i18n'
import type { Locale } from './i18n'

const i18n = t()
const ad = i18n.accountDeletion

// Update page title
document.title = ad.pageTitle
updateMetaTags()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
    <div class="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-stone-800 tracking-tight">${i18n.nav.brand}</a>
      <div class="flex items-center gap-4">
        <!-- Language Switcher -->
        <div class="relative" id="lang-switcher">
          <button id="lang-btn" class="flex items-center gap-1.5 text-stone-600 hover:text-stone-800 px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors text-sm font-medium">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
            <span>${getCurrentLocale() === 'ko' ? i18n.langSwitcher.ko : getCurrentLocale() === 'ja' ? i18n.langSwitcher.ja : i18n.langSwitcher.en}</span>
          </button>
          <div id="lang-dropdown" class="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-stone-100 py-1 hidden z-50">
            <button data-lang="ko" class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${getCurrentLocale() === 'ko' ? 'text-primary font-medium' : 'text-stone-600'}">${i18n.langSwitcher.ko}</button>
            <button data-lang="en" class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${getCurrentLocale() === 'en' ? 'text-primary font-medium' : 'text-stone-600'}">${i18n.langSwitcher.en}</button>
            <button data-lang="ja" class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${getCurrentLocale() === 'ja' ? 'text-primary font-medium' : 'text-stone-600'}">${i18n.langSwitcher.ja}</button>
          </div>
        </div>
        <a href="/" class="text-stone-600 hover:text-stone-800 text-sm font-medium">${ad.backToHome}</a>
      </div>
    </div>
  </nav>

  <!-- Content -->
  <main class="flex-1 pt-24 pb-16 bg-warm-bg min-h-screen">
    <div class="max-w-2xl mx-auto px-6">
      <div class="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-12">
        <h1 class="text-2xl md:text-3xl font-bold text-stone-800 mb-6">${ad.title}</h1>

        <p class="text-stone-600 mb-8 leading-relaxed">
          ${ad.intro}
        </p>

        <div class="space-y-6">
          ${ad.steps.map((step, index) => `
            <div class="flex gap-4">
              <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold text-sm">${index + 1}</span>
              </div>
              <div>
                <h3 class="font-semibold text-stone-800 mb-1">${step.title}</h3>
                <p class="text-stone-500 text-sm">${step.description}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-10 p-4 bg-rose-50 rounded-xl border border-rose-100">
          <h4 class="font-semibold text-rose-700 mb-2">${ad.warningTitle}</h4>
          <ul class="text-sm text-rose-600 space-y-1">
            ${ad.warnings.map(warning => `<li>• ${warning}</li>`).join('')}
          </ul>
        </div>

        <div class="mt-8 pt-6 border-t border-stone-100">
          <p class="text-sm text-stone-500">
            ${ad.contactInfo}
          </p>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="py-8 bg-stone-900 border-t border-stone-800">
    <div class="max-w-2xl mx-auto px-6 text-center text-stone-500 text-sm">
      ${i18n.footer.copyright}
    </div>
  </footer>
`

// Language switcher
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

document.addEventListener('click', () => {
  langDropdown?.classList.add('hidden')
})
