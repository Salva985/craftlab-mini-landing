// Single place to edit content per client.
// Keep it simple: edit text + links + images here.

export const SITE = {
    brand: {
      name: "CraftLab-Mini",
      tagline: "A clean one-page site for small local brands.",
      logoText: "CraftLab", // swap with image later if you want
    },
  
    links: {
      primaryCta: { label: "Book / Contact", href: "#contact" },
      whatsapp: { label: "WhatsApp", phoneInternational: "+34600000000" }, // change per client
      instagram: { label: "Instagram", href: "https://instagram.com/" },
    },
  
    hero: {
      headline: "A premium one-page website that converts.",
      subheadline:
        "Clear message, services, gallery, testimonials and a fast contact flow — mobile-first and ready to share.",
      highlight: "Fast • Clean • Ready for bookings",
      heroImage: "assets/images/hero.jpg", // put any image here
    },
  
    about: {
      title: "About",
      text:
        "This template is designed to be duplicated and adapted in minutes for any small business. Swap the accent color, update the content, and deploy.",
      bullets: ["Mobile-first layout", "Easy to customize", "WhatsApp-first conversion"],
    },
  
    services: {
      title: "Services",
      items: [
        {
            title: "Service One",
            image: "assets/images/service-card1.jpg",
            short: "Quick summary",
            details:
              "Longer description explaining benefits, outcomes and who this is for."
          },
          {
            title: "Service Two",
            image: "assets/images/service-card2.jpg",
            short: "Quick summary",
            details:
              "Explain value clearly and confidently."
          },
          {
            title: "Service Three",
            image: "assets/images/service-card3.jpg",
            short: "Quick summary",
            details:
              "Add clarity and trust-building message."
          },
      ],
    },
  
    gallery: {
      title: "Gallery",
      images: [
        "assets/images/gallery1.jpg",
        "assets/images/gallery2.jpg",
        "assets/images/gallery3.jpg",
        "assets/images/gallery4.jpg",
        "assets/images/gallery5.jpg",
        "assets/images/gallery6.png",
      ],
    },
  
    testimonial: {
      quote:
        "“Super clean, fast and easy to book. Exactly what I needed for my small studio.”",
      name: "Client Name",
      role: "Local Business Owner",
    },
  
    cta: {
      title: "Ready to get more bookings?",
      text: "Send a message and we’ll set up your mini landing in days — without overcomplicating it.",
      buttonLabel: "Message on WhatsApp",
    },
  
    contact: {
      title: "Contact",
      text: "Tell us what you do and what you need. We’ll reply quickly.",
      emailTo: "hello@craftlab-studio.com", // optional mailto fallback
    },
  
    footer: {
      note: "Website by CraftLab Studio",
      city: "Barcelona",
    },
  };
  
  export function getWhatsAppLink(phoneInternational, text) {
    const clean = phoneInternational.replace(/[^\d+]/g, "");
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${clean.replace("+", "")}?text=${encoded}`;
  }