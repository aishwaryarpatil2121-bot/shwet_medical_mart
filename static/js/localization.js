// Localization Logic
document.addEventListener('DOMContentLoaded', function () {
    const defaultLang = 'en';
    let currentLang = localStorage.getItem('language') || defaultLang;

    // Initialize Language
    setLanguage(currentLang);

    // Setup Language Switchers involved in the dropdown
    const langLinks = document.querySelectorAll('[data-lang-switch]');
    langLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang-switch');
            setLanguage(selectedLang);

            // Auto-close mobile menu
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                // Check if bootstrap is defined (it should be as per main.js)
                if (typeof bootstrap !== 'undefined') {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
                    bsCollapse.hide();
                } else {
                    // Fallback if bootstrap object isn't available
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
});

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) {
        console.error('Language not found:', lang);
        return;
    }

    // Save preference
    localStorage.setItem('language', lang);
    currentLang = lang;

    // Update Text Content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const rawKey = el.getAttribute('data-i18n');

        let targetAttr = 'textContent';
        let key = rawKey;

        // Check for [attr]key syntax
        if (rawKey.startsWith('[')) {
            const matches = rawKey.match(/^\[([^\]]+)\](.*)$/);
            if (matches) {
                targetAttr = matches[1];
                key = matches[2];
            }
        }

        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            const val = TRANSLATIONS[lang][key];
            if (targetAttr === 'textContent') {
                // Check if key implies HTML (e.g. footer_copy)
                if (key === 'footer_copy' || key === 'about_p2') {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            } else if (targetAttr === 'html') {
                el.innerHTML = val;
            } else {
                el.setAttribute(targetAttr, val);
            }
        }
    });

    // Update Language Dropdown Text
    const langBtn = document.getElementById('languageDropdown');
    if (langBtn) {
        let langName = 'English (US)';
        if (lang === 'mr') langName = 'मराठी';
        if (lang === 'hi') langName = 'हिंदी';

        // Preserve the icon if it exists - actually easier to re-render innerHTML
        langBtn.innerHTML = `<i class="fas fa-globe me-1 text-primary"></i> ${langName}`;
    }

    // Update Active State in Dropdown
    document.querySelectorAll('[data-lang-switch]').forEach(link => {
        if (link.getAttribute('data-lang-switch') === lang) {
            link.classList.add('active');
            link.classList.add('btn-success'); // For mobile buttons
            link.classList.remove('btn-outline-secondary');
        } else {
            link.classList.remove('active');
            link.classList.remove('btn-success');
            if (link.classList.contains('btn-sm')) { // Mobile buttons logic
                link.classList.add('btn-outline-secondary');
            }
        }
    });
}

// Utility to get translation dynamically
function _(key) {
    const lang = localStorage.getItem('language') || 'en';
    return TRANSLATIONS[lang][key] || key;
}
