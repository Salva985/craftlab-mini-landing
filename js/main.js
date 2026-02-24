import { SITE, getWhatsAppLink } from "../config/site-config.js";

function $(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = $(id);
  if (el) el.innerHTML = value;
}

function setHref(id, href) {
  const el = $(id);
  if (el) el.setAttribute("href", href);
}

function renderServices() {
    const wrap = $("servicesList");
    if (!wrap) return;
  
    wrap.innerHTML = SITE.services.items
      .map(
        (s, index) => `
        <div class="flip-card">
          <div class="flip-card__inner">
  
            <!-- FRONT -->
            <div class="flip-card__front">
              <img src="${s.image}" alt="${s.title}" />
              <div class="flip-card__overlay">
                <h3>${s.title}</h3>
                <button class="btn btn--primary btn--small" data-flip="${index}">
                  See more
                </button>
              </div>
            </div>
  
            <!-- BACK -->
            <div class="flip-card__back">
              <h3>${s.title}</h3>
              <p>${s.details}</p>
              <button class="btn btn--outline btn--small" data-flip="${index}">
                Back
              </button>
            </div>
  
          </div>
        </div>
      `
      )
      .join("");
  
    // Flip toggle logic
    wrap.querySelectorAll("[data-flip]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".flip-card");
        card.classList.toggle("is-flipped");
      });
    });
  }

function renderGallery() {
  const wrap = $("galleryGrid");
  if (!wrap) return;

  wrap.innerHTML = SITE.gallery.images
    .map((src) => `<img src="${src}" alt="Gallery image" loading="lazy" />`)
    .join("");
}

function initWhatsAppLinks() {
  const msg = `Hi! I saw your website and I’d like to get more info.`;
  const wa = getWhatsAppLink(SITE.links.whatsapp.phoneInternational, msg);

  const contactBtn = document.getElementById("whatsAppContact");
    if (contactBtn) {
    contactBtn.setAttribute("href", wa);
    }

  const floating = document.getElementById("floatingWhatsApp");
    if (floating) {
    floating.setAttribute("href", wa);
    }

  const heroBtn = $("whatsAppHero");
  const ctaBtn = $("whatsAppCta");
  const footerWa = $("whatsAppFooter");

  [heroBtn, ctaBtn, footerWa].forEach((btn) => {
    if (!btn) return;
    btn.setAttribute("href", wa);
  });
}

function initFormFallback() {
  const form = $("contactForm");
  if (!form) return;

  // For demo: use mailto fallback (no backend).
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"]?.value?.trim();
    const email = form.elements["email"]?.value?.trim();
    const message = form.elements["message"]?.value?.trim();

    const subject = encodeURIComponent(`Website enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name || "-"}\nEmail: ${email || "-"}\n\nMessage:\n${message || "-"}`
    );

    window.location.href = `mailto:${SITE.contact.emailTo}?subject=${subject}&body=${body}`;
  });
}

function init() {
  // Header
  setText("brandName", SITE.brand.name);
  setText("brandTagline", SITE.brand.tagline);

  // Hero
  setText("heroHeadline", SITE.hero.headline);
  setText("heroSubheadline", SITE.hero.subheadline);
  setText("heroHighlight", SITE.hero.highlight);

  const heroImg = $("heroImage");
  if (heroImg) heroImg.src = SITE.hero.heroImage;

  // Primary CTA
  setText("primaryCtaLabel", SITE.links.primaryCta.label);
  setHref("primaryCta", SITE.links.primaryCta.href);

  // About
  setText("aboutTitle", SITE.about.title);
  setText("aboutText", SITE.about.text);

  setHTML(
    "aboutBullets",
    SITE.about.bullets
      .map((b) => `<div class="bullet"><span class="dot"></span><span>${b}</span></div>`)
      .join("")
  );

  // Services/Gallery
  setText("servicesTitle", SITE.services.title);
  renderServices();

  setText("galleryTitle", SITE.gallery.title);
  renderGallery();

  // Testimonial
  setText("quoteText", SITE.testimonial.quote);
  setText("quoteMeta", `${SITE.testimonial.name} — ${SITE.testimonial.role}`);

  // CTA
  setText("ctaTitle", SITE.cta.title);
  setText("ctaText", SITE.cta.text);
  setText("ctaBtnLabel", SITE.cta.buttonLabel);

  // Contact
  setText("contactTitle", SITE.contact.title);
  setText("contactText", SITE.contact.text);

  // Footer
  setText("footerNote", SITE.footer.note);
  setText("footerCity", SITE.footer.city);

  // Social links
  setHref("instagramLink", SITE.links.instagram.href);

  // WhatsApp
  initWhatsAppLinks();

  // Form
  initFormFallback();

}

function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("navLinks");
  
    if (!burger || !nav) return;
  
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        document.body.classList.toggle("menu-open");
        document.querySelector(".header").classList.toggle("menu-open");
      });
  
    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
  });

document.addEventListener("DOMContentLoaded", init);