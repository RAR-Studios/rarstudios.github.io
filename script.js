const header = document.querySelector("header");

function headerOffset() {
  return header ? header.offsetHeight + 16 : 0;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({ top, behavior: "smooth" });
}

// IMPORTANT: only intercept HASH links (#section). Do NOT block normal pages (shop.html).
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return; // allow dropdown toggles that use "#"
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return; // if section doesn't exist, do nothing and allow default
    e.preventDefault();
    scrollToSection(id);
  });
});
