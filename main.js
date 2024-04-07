"use strict";

const toggleMenuBtn = document.querySelector(".menu__icon");
const closeMenuBtn = document.querySelector(".close__icon");
const listMenu = document.querySelector(".list__menu");
const nav = document.querySelector(".menu__container");

const scrollUpBtn = document.querySelector(".scroll__up");

// ===================== MENU ========================
toggleMenuBtn.addEventListener("click", () => {
  listMenu.style.top = 0;
});

closeMenuBtn.addEventListener("click", () => {
  listMenu.style.top = "-150%";
});

window.addEventListener("scroll", () => {
  if (this.scrollY > 10) {
    nav.style.backgroundColor = `hsl(0, 0%, 100%)`;
    nav.style.boxShadow = `1px 3px 23px -2px hsla(148, 64%, 45%, 0.247)`;
    nav.style.width = `100%`;
    nav.style.padding = `0 3rem`;
  } else {
    nav.style.backgroundColor = `transparent`;
    nav.style.boxShadow = "none";
    nav.style.width = `90%`;
  }
});

// ===================== SCROLL UP ========================
window.addEventListener("scroll", () => {
  this.scrollY > 400
    ? scrollUpBtn.classList.add("active-scroll")
    : scrollUpBtn.classList.remove("active-scroll");
});

// ===================== CLICK MENU ========================
listMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu__link")) listMenu.style.top = "-150%";
});

// =============SECTION ACTIVE================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const windowScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 110;
    const sectionId = section.getAttribute("id");

    const linkMenu = document.querySelector(
      `.list__menu .menu__item a[href*=${sectionId}]`
    );

    windowScroll > sectionTop && windowScroll < sectionHeight + sectionTop
      ? linkMenu.classList.add("active-link")
      : linkMenu.classList.remove("active-link");
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home__img`);
sr.reveal(`.home__content`, { delay: 400 });
sr.reveal(`.work__card, .work__card`, { scale: 1, origin: "bottom" });
sr.reveal(
  `.about__img__1, .about__content__1, .about__content__2, .about__img__2`,
  { scale: 1, origin: "bottom" }
);
sr.reveal(`.calculate, .contact__us`, { scale: 1, origin: "right" });
