
// ========================================
// HEADER AND SMOOTH SCROLLING
// ========================================

const header = document.querySelector("header");

function headerOffset() {
  return header ? header.offsetHeight + 16 : 0;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top +
    window.scrollY -
    headerOffset();

  window.scrollTo({
    top,
    behavior: "smooth"
  });
}

// Only intercept links pointing to sections on the current page.

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");

    if (!href || href === "#") return;

    const id = href.slice(1);
    const el = document.getElementById(id);

    if (!el) return;

    e.preventDefault();
    scrollToSection(id);
  });
});


// ========================================
// PRODUCT PHOTO LIGHTBOX
// ========================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCounter = document.getElementById("lightbox-counter");

const closeButton = document.getElementById("lightbox-close");
const prevButton = document.getElementById("lightbox-prev");
const nextButton = document.getElementById("lightbox-next");

let currentImages = [];
let currentImageIndex = 0;
let lastTrigger = null;


// Open a product gallery

function openLightbox(productCard, trigger) {
  const mainImage = productCard.querySelector(".product-main-image");
  const additionalImages = productCard.querySelectorAll(".product-gallery img");

  if (!mainImage) return;

  currentImages = [
    {
      src: mainImage.src,
      alt: mainImage.alt
    },
    ...Array.from(additionalImages).map((img) => ({
      src: img.src,
      alt: img.alt
    }))
  ];

  currentImageIndex = 0;
  lastTrigger = trigger;

  updateLightbox();

  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");

  closeButton.focus();
}


// Update the displayed photograph

function updateLightbox() {
  if (!currentImages.length) return;

  const image = currentImages[currentImageIndex];

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;

  lightboxCounter.textContent =
    `${currentImageIndex + 1} / ${currentImages.length}`;

  // Hide arrows if there is only one photograph

  const multipleImages = currentImages.length > 1;

  prevButton.hidden = !multipleImages;
  nextButton.hidden = !multipleImages;
}


// Next photograph

function nextImage() {
  if (!currentImages.length) return;

  currentImageIndex =
    (currentImageIndex + 1) % currentImages.length;

  updateLightbox();
}


// Previous photograph

function previousImage() {
  if (!currentImages.length) return;

  currentImageIndex =
    (currentImageIndex - 1 + currentImages.length) %
    currentImages.length;

  updateLightbox();
}


// Close gallery

function closeLightbox() {
  if (lightbox.hidden) return;

  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");

  currentImages = [];

  if (lastTrigger) {
    lastTrigger.focus();
    lastTrigger = null;
  }
}


// Attach gallery events to each product

document.querySelectorAll(".product-image-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");

    if (productCard) {
      openLightbox(productCard, button);
    }
  });
});

closeButton.addEventListener("click", closeLightbox);
prevButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);


// Close by clicking outside the photograph

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});


// Keyboard controls

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;

  if (e.key === "Escape") {
    closeLightbox();
  }

  if (e.key === "ArrowRight") {
    nextImage();
  }

  if (e.key === "ArrowLeft") {
    previousImage();
  }
});


// ========================================
// INSTAGRAM ENQUIRIES
// ========================================

const instagramURL = "https://ig.me/m/rar.studiosig";

document.querySelectorAll(".instagram-button").forEach((button) => {

  button.addEventListener("click", async () => {

    const productCard = button.closest(".product-card");

    if (!productCard) return;

    const productName =
      productCard.querySelector("h4")?.textContent.trim() ||
      "Jewellery piece";

    const price =
      productCard.querySelector(".price")?.textContent.trim() ||
      "";

    const message =
      `Hello! I'm interested in the ${productName} (${price}). Is it still available?`;

    const status =
      productCard.querySelector(".message-status");

    // Open the Instagram conversation

    window.open(instagramURL, "_blank", "noopener,noreferrer");

    // Copy the product-specific message

    try {
      await navigator.clipboard.writeText(message);

      if (status) {
        status.textContent =
          "Enquiry copied. Paste it into your Instagram chat.";
      }

    } catch (error) {

      if (status) {
        status.textContent =
          "Instagram opened. Please mention " + productName + " in your message.";
      }

    }

  });

});
