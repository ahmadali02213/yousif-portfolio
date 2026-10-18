(() => {
  const toggle = document.getElementById('languageToggle');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  let language = 'ar';

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-ar][data-en]').forEach((element) => {
      element.innerHTML = element.dataset[next];
    });
    toggle.textContent = next === 'ar' ? 'EN' : 'عربي';
    toggle.setAttribute('aria-label', next === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.title = next === 'ar' ? 'يوسف الصوفي | Portfolio' : 'Yousif Alsofi | Portfolio';
    try { localStorage.setItem('portfolio-language', next); } catch (_) {}
  }

  toggle.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
  try {
    const saved = localStorage.getItem('portfolio-language');
    if (saved === 'en') setLanguage('en');
  } catch (_) {}
})();