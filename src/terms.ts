import './style.css'
import { t, getCurrentLocale, setLocale, updateMetaTags } from './i18n'
import type { Locale } from './i18n'

const i18n = t()
const terms = i18n.terms

// Update page title
document.title = terms.pageTitle
updateMetaTags()

// Helper to create ordered list
const createOrderedList = (items: string[]) => {
  return `<ol>${items.map(item => `<li>${item}</li>`).join('')}</ol>`
}

// Helper to create unordered list
const createList = (items: string[]) => {
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`
}

const s = terms.sections

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
    <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
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
        <a href="/" class="text-stone-600 hover:text-stone-800 text-sm font-medium">${terms.backToHome}</a>
      </div>
    </div>
  </nav>

  <!-- Content -->
  <main class="pt-24 pb-16 bg-warm-bg min-h-screen">
    <div class="max-w-4xl mx-auto px-6">
      <article class="prose text-stone-600">
        <h1 class="text-stone-800">${terms.title}</h1>
        <p><strong>${terms.effectiveDate}</strong></p>

        <!-- Chapter 1 -->
        <h2>${s.chapter1.title}</h2>

        <h3>${s.chapter1.article1.title}</h3>
        <p>${s.chapter1.article1.content}</p>

        <h3>${s.chapter1.article2.title}</h3>
        ${createOrderedList(s.chapter1.article2.definitions)}

        <h3>${s.chapter1.article3.title}</h3>
        ${createOrderedList(s.chapter1.article3.items)}

        <!-- Chapter 2 -->
        <h2>${s.chapter2.title}</h2>

        <h3>${s.chapter2.article4.title}</h3>
        <p>${s.chapter2.article4.content}</p>
        ${createList(s.chapter2.article4.items)}

        <h3>${s.chapter2.article5.title}</h3>
        <p>${s.chapter2.article5.content}</p>

        <!-- Chapter 3 -->
        <h2>${s.chapter3.title}</h2>

        <h3>${s.chapter3.article6.title}</h3>
        <p>${s.chapter3.article6.content}</p>
        ${createList(s.chapter3.article6.services)}
        ${createOrderedList(s.chapter3.article6.items)}

        <h3>${s.chapter3.article7.title}</h3>
        <p>${s.chapter3.article7.content}</p>
        ${createList(s.chapter3.article7.items)}

        <h3>${s.chapter3.article8.title}</h3>
        ${createOrderedList(s.chapter3.article8.items)}

        <h3>${s.chapter3.article9.title}</h3>
        ${createOrderedList(s.chapter3.article9.items)}

        <h3>${s.chapter3.article10.title}</h3>
        ${createOrderedList(s.chapter3.article10.items)}

        <!-- Chapter 4 -->
        <h2>${s.chapter4.title}</h2>

        <h3>${s.chapter4.article11.title}</h3>
        ${createOrderedList(s.chapter4.article11.items)}

        <h3>${s.chapter4.article12.title}</h3>
        <p>${s.chapter4.article12.content}</p>
        ${createList(s.chapter4.article12.items)}

        <!-- Chapter 5 -->
        <h2>${s.chapter5.title}</h2>

        <h3>${s.chapter5.article13.title}</h3>
        <p>${s.chapter5.article13.content}</p>
        ${createList(s.chapter5.article13.prohibited)}

        <h3>${s.chapter5.article14.title}</h3>
        <p>${s.chapter5.article14.content}</p>
        ${createList(s.chapter5.article14.reasons)}
        ${createOrderedList(s.chapter5.article14.notes)}

        <h3>${s.chapter5.article15.title}</h3>
        <p>${s.chapter5.article15.content}</p>
        ${createList(s.chapter5.article15.measures)}
        ${createOrderedList(s.chapter5.article15.notes)}

        <h3>${s.chapter5.article16.title}</h3>
        ${createOrderedList(s.chapter5.article16.items)}

        <!-- Chapter 6 -->
        <h2>${s.chapter6.title}</h2>

        <h3>${s.chapter6.article17.title}</h3>
        ${createOrderedList(s.chapter6.article17.items)}

        <h3>${s.chapter6.article18.title}</h3>
        <p>${s.chapter6.article18.content}</p>

        <h3>${s.chapter6.article19.title}</h3>
        ${createOrderedList(s.chapter6.article19.items)}

        <h3>${s.chapter6.article20.title}</h3>
        ${createOrderedList(s.chapter6.article20.items)}

        <h3>${s.chapter6.article21.title}</h3>
        <p>${s.chapter6.article21.content}</p>

        <!-- Appendix -->
        <h2>${s.appendix.title}</h2>
        <p>${s.appendix.content}</p>
      </article>
    </div>
  </main>

  <!-- Footer -->
  <footer class="py-8 bg-stone-900 border-t border-stone-800">
    <div class="max-w-4xl mx-auto px-6 text-center text-stone-500 text-sm">
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
