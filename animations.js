// SWIPER JS FOR TESTIMONIALS
var swiper = new Swiper(".testimonials__swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// GSAP ANIMATIONS
// HOME
const tlHome = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
  },
});

tlHome
  .from(".anim__home-w1", {
    opacity: 0,
    stagger: 0.3,
    y: 50,
    duration: 0.8,
    ease: "power4.out",
  })
  .from(
    ".anim__home-w2",
    {
      opacity: 0,
      x: 50,
      stagger: 0.15,
    },
    "-=.25"
  );

const tlHomeCard = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: 200,
  },
});

tlHomeCard.from(".anim__home-card", {
  opacity: 0,
  y: 60,
  ease: "power4.out",
});

// ABOUT
let tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top-=300",
  },
});

tlAbout
  .from(".anim__about-main", {
    opacity: 0,
    x: -200,
    duration: 1,
    ease: "power4.out",
  })
  .from(
    ".anim__about-item",
    {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: "power4.out",
    },
    "-=.5"
  )
  .from(
    ".anim__about-img",
    {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power4.out",
    },
    "-=1"
  );

// CALL TO ACTION
let tlCta = gsap.timeline({
  scrollTrigger: {
    trigger: ".cta",
    start: "top center",
  },
});

tlCta.from(".anim__cta", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
});

// TESTIMONIALS
let tlTestimonials = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top-=400",
  },
});

tlTestimonials
  .from(".anim__testimonials-w1", {
    opacity: 0,
    x: -200,
    duration: 1,
    ease: "power4.out",
  })
  .from(
    ".anim__testimonials-w2",
    {
      opacity: 0,
      y: 50,
      ease: "power4.out",
    },
    "-=.5"
  );

// FAQS
let tlFaq = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq",
    start: "top-=400",
  },
});

tlFaq
  .from(".anim__faq-w1", {
    opacity: 0,
    x: 200,
    duration: 1,
    ease: "power4.out",
  })
  .from(
    ".anim__faq-w2",
    {
      opacity: 0,
      y: 50,
      ease: "power4.out",
    },
    "-=.5"
  );

// BLOGS
tlBlogs = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog",
    start: "top-=400",
  },
});

tlBlogs.from(".anim__blog-card", {
  opacity: 0,
  x: 50,
  stagger: 0.2,
});
