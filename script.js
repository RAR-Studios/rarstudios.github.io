const header = document.querySelector('header');
const headerOffset = () => (header ? header.offsetHeight + 24 : 0);

window.scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({ top, behavior: 'smooth' });
};

// Smooth scrolling for anchor links within the page
const internalLinks = document.querySelectorAll('a[href^="#"][href!="#"]');
internalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const id = href.replace('#', '');
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
