// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Accessible dropdown on click/focus (works on mobile)
const dropdownParent = document.querySelector('.has-dropdown');
if (dropdownParent) {
  const btn = dropdownParent.querySelector('.nav-link-btn');
  const menu = dropdownParent.querySelector('.dropdown');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      dropdownParent.toggleAttribute('aria-expanded');
    });
    document.addEventListener('click', (e) => {
      if (!dropdownParent.contains(e.target)) {
        btn.setAttribute('aria-expanded','false');
        dropdownParent.removeAttribute('aria-expanded');
      }
    });
  }
}

// Smooth scroll helper for cards
window.scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
