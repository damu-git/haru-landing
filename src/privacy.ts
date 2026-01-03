import './style.css'
import { t, getCurrentLocale, setLocale, updateMetaTags } from './i18n'
import type { Locale } from './i18n'

const i18n = t()
const p = i18n.privacy

// Update page title
document.title = p.pageTitle
updateMetaTags()

// Helper to create table
const createTable = (headers: string[], rows: string[][]) => {
  return `
    <table>
      <thead>
        <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  `
}

// Helper to create list
const createList = (items: string[]) => {
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`
}

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
        <a href="/" class="text-stone-600 hover:text-stone-800 text-sm font-medium">${p.backToHome}</a>
      </div>
    </div>
  </nav>

  <!-- Content -->
  <main class="pt-24 pb-16 bg-warm-bg min-h-screen">
    <div class="max-w-4xl mx-auto px-6">
      <article class="prose text-stone-600">
        <h1 class="text-stone-800">${p.title}</h1>
        <p>${p.intro}</p>
        <p><strong>${p.effectiveDate}</strong></p>

        <h2>${p.sections.purpose.title}</h2>
        <p>${p.sections.purpose.intro}</p>
        ${createTable(p.sections.purpose.headers, p.sections.purpose.rows)}

        <h2>${p.sections.collection.title}</h2>
        <h3 class="text-base font-semibold text-stone-700 mt-4 mb-2">${p.sections.collection.required}</h3>
        ${createTable(p.sections.collection.requiredHeaders, p.sections.collection.requiredRows)}
        <h3 class="text-base font-semibold text-stone-700 mt-4 mb-2">${p.sections.collection.auto}</h3>
        ${createList(p.sections.collection.autoItems)}
        <h3 class="text-base font-semibold text-stone-700 mt-4 mb-2">${p.sections.collection.optional}</h3>
        ${createList(p.sections.collection.optionalItems)}

        <h2>${p.sections.retention.title}</h2>
        ${createTable(p.sections.retention.headers, p.sections.retention.rows)}
        <p class="text-sm text-stone-500">${p.sections.retention.note}</p>

        <h2>${p.sections.thirdParty.title}</h2>
        <p>${p.sections.thirdParty.intro}</p>
        ${createList(p.sections.thirdParty.items)}

        <h2>${p.sections.outsourcing.title}</h2>
        <p>${p.sections.outsourcing.intro}</p>
        ${createTable(p.sections.outsourcing.headers, p.sections.outsourcing.rows)}
        <p class="text-sm text-stone-500">${p.sections.outsourcing.note}</p>

        <h2>${p.sections.overseas.title}</h2>
        <p>${p.sections.overseas.intro}</p>
        ${createTable(p.sections.overseas.headers, p.sections.overseas.rows)}

        <h2>${p.sections.destruction.title}</h2>
        <p>${p.sections.destruction.intro}</p>
        ${createList(p.sections.destruction.items)}

        <h2>${p.sections.rights.title}</h2>
        <p>${p.sections.rights.intro}</p>
        ${createTable(p.sections.rights.headers, p.sections.rights.rows)}
        <p class="text-sm text-stone-500">${p.sections.rights.note}</p>

        <h2>${p.sections.security.title}</h2>
        <p>${p.sections.security.intro}</p>
        ${createList(p.sections.security.items)}

        <h2>${p.sections.officer.title}</h2>
        ${createTable(p.sections.officer.headers, p.sections.officer.rows)}
        <p>${p.sections.officer.note}</p>

        <h2>${p.sections.remedies.title}</h2>
        <p>${p.sections.remedies.intro}</p>
        ${createList(p.sections.remedies.items)}

        <h2>${p.sections.changes.title}</h2>
        <p>${p.sections.changes.content}</p>
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
