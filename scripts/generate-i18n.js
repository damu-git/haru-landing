import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const I18N_DIR = path.resolve(__dirname, '../src/i18n');
const LOCALES = ['en', 'ja']; // ko is default at root
const BASE_URL = 'https://haruai.im';

// Load translation files
function loadTranslations(locale) {
  const filePath = path.join(I18N_DIR, `${locale}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// hreflang tags to inject
const hreflangTags = `
    <!-- hreflang for multilingual SEO -->
    <link rel="alternate" hreflang="ko" href="${BASE_URL}/" />
    <link rel="alternate" hreflang="en" href="${BASE_URL}/en/" />
    <link rel="alternate" hreflang="ja" href="${BASE_URL}/ja/" />
    <link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />`;

function updateMetaTags(html, meta, locale) {
  const ogLocale = locale === 'ko' ? 'ko_KR' : locale === 'ja' ? 'ja_JP' : 'en_US';

  // Update title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

  // Update meta tags
  html = html.replace(
    /<meta name="title" content="[^"]*"/,
    `<meta name="title" content="${meta.title}"`
  );
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );
  html = html.replace(
    /<meta name="keywords" content="[^"]*"/,
    `<meta name="keywords" content="${meta.keywords}"`
  );

  // Update Open Graph tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`
  );
  html = html.replace(
    /<meta property="og:locale" content="[^"]*"/,
    `<meta property="og:locale" content="${ogLocale}"`
  );

  // Update Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${meta.title}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${meta.description}"`
  );

  return html;
}

function generateI18nPages() {
  console.log('Generating i18n static pages...');

  const indexPath = path.join(DIST_DIR, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  let indexHtml = fs.readFileSync(indexPath, 'utf-8');

  // Add hreflang tags to head (before </head>)
  if (!indexHtml.includes('hreflang')) {
    indexHtml = indexHtml.replace('</head>', `${hreflangTags}\n  </head>`);
  }

  // Update canonical URL for root (Korean)
  indexHtml = indexHtml.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${BASE_URL}/" />`
  );

  // Add data-locale attribute for root (Korean default)
  if (!indexHtml.includes('data-locale')) {
    indexHtml = indexHtml.replace(
      '<html lang="ko">',
      '<html lang="ko" data-locale="ko">'
    );
  }

  // Save updated root index.html (Korean meta tags are already correct from source)
  fs.writeFileSync(indexPath, indexHtml);
  console.log('Updated: dist/index.html (Korean - default)');

  // Generate pages for other locales
  for (const locale of LOCALES) {
    const localeDir = path.join(DIST_DIR, locale);
    const translations = loadTranslations(locale);

    // Create locale directory
    if (!fs.existsSync(localeDir)) {
      fs.mkdirSync(localeDir, { recursive: true });
    }

    // Create locale-specific HTML
    let localeHtml = indexHtml;

    // Update html lang attribute
    localeHtml = localeHtml.replace(
      /lang="ko"/,
      `lang="${locale}"`
    );

    // Update data-locale attribute
    localeHtml = localeHtml.replace(
      /data-locale="ko"/,
      `data-locale="${locale}"`
    );

    // Update canonical URL
    localeHtml = localeHtml.replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${BASE_URL}/${locale}/" />`
    );

    // Update og:url
    localeHtml = localeHtml.replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${BASE_URL}/${locale}/"`
    );

    // Update twitter:url
    localeHtml = localeHtml.replace(
      /<meta name="twitter:url" content="[^"]*"/,
      `<meta name="twitter:url" content="${BASE_URL}/${locale}/"`
    );

    // Update meta tags with localized content
    localeHtml = updateMetaTags(localeHtml, translations.meta, locale);

    // Fix asset paths (add ../ prefix for subdirectory)
    localeHtml = localeHtml.replace(
      /href="\/assets\//g,
      'href="../assets/'
    );
    localeHtml = localeHtml.replace(
      /src="\/assets\//g,
      'src="../assets/'
    );

    // Fix other root-relative paths
    localeHtml = localeHtml.replace(
      /href="\/favicon/g,
      'href="../favicon'
    );
    localeHtml = localeHtml.replace(
      /href="\/og-image/g,
      'href="../og-image'
    );

    // Save locale HTML
    const localeIndexPath = path.join(localeDir, 'index.html');
    fs.writeFileSync(localeIndexPath, localeHtml);
    console.log(`Generated: dist/${locale}/index.html`);
  }

  console.log('i18n pages generation complete!');
}

generateI18nPages();
