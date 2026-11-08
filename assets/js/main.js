// Progressive enhancement: navigation remains visible without JavaScript.
const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.hidden = false;
  siteNav.dataset.collapsed = 'true';

  const setMenuOpen = (isOpen) => {
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? 'Close' : 'Menu';
    siteNav.dataset.collapsed = String(!isOpen);
  };

  navToggle.addEventListener('click', () => {
    setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      navToggle.focus();
    }
  });
}
