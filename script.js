const header = document.querySelector("header");

const headerOffset = () => (header ? header.offsetHeight + 16 : 0);

window.scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({ top, behavior: "smooth" });
};

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"][href!="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    const id = href ? href.slice(1) : "";
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    scrollToSection(id);
  });
});

// IG “shop-like” flow: copy template + open DM
window.messageIG = async (productName, price) => {
  const template =
`Hi RAR Studios,
I want to reserve: ${productName}
Price: ${price}

My size (if ring): ____
Shipping city/country: ____
Name: ____`;

  try {
    await navigator.clipboard.writeText(template);
  } catch (_) {
    // ignore (some browsers block clipboard). Still open IG.
  }

  window.open("https://ig.me/m/rar.studiosig", "_blank", "noopener");
};
