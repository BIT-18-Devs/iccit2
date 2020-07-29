window.onscroll = (event) => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('nav.nav').className = 'nav nav-sticky';
  } else {
    document.querySelector('nav.nav').className = 'nav';
  }
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__items");

  burger.addEventListener("click", () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      nav.classList.remove("nav-active");
      nav.classList.toggle("nav-active2");
    } else {
      nav.classList.remove("nav-active2");
      nav.classList.toggle("nav-active");
    }
    document.querySelector(".burger__line").classList.toggle("burger__line--toggle");
  });
};


navSlide();
