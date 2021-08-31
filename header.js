// HEADER FOR MOBILE
const headerMobile = document.querySelector(".header-mob");

// HEADER BURGER
const burger = document.querySelector(".header__burger");
const burgerLines = document.querySelectorAll(".header__burger > div");

// HEADER BURGER LINES
const lineOne = document.querySelector(".header__burger-line-1");
const lineTwo = document.querySelector(".header__burger-line-2");
const lineThree = document.querySelector(".header__burger-line-3");

// NAVIGATION LINKS
const navLinks = document.querySelectorAll(".nav__item > a");

// SELECT FIRST DIV
const divOverlay = document.querySelector(".overlay");

// SELECT LOGO
const headerLogo = document.querySelector(".header__logo");

// SELECT HEADER
const header = document.querySelector(".header");

// EVENT HANDLER WHEN BURGER ICON IS CLICKED
const toggleNavigationHandler = () => {
  headerMobile.classList.toggle("header-mob-active");
  burger.classList.toggle("burger-white");
  burgerLines.forEach((line) => {
    line.classList.toggle("line-white");
  });
  lineOne.classList.toggle("active-1");
  lineTwo.classList.toggle("active-2");
  lineThree.classList.toggle("active-3");

  divOverlay.classList.toggle("dark-overlay");
};

// EVENT HANDLER WHEN CLICKED ON THE OVERLAY BACKGROUND
const removeNavigationHandler = () => {
  headerMobile.classList.remove("header-mob-active");
  burger.classList.remove("burger-white");
  burgerLines.forEach((line) => {
    line.classList.remove("line-white");
  });
  lineOne.classList.remove("active-1");
  lineTwo.classList.remove("active-2");
  lineThree.classList.remove("active-3");

  divOverlay.classList.remove("dark-overlay");
};

// FUNCTION TO FIRE A CLICK EVENT ON THE BURGER ICON
const toggleNavigation = () => {
  burger.addEventListener("click", toggleNavigationHandler);
};

// FUNCTION TO FIRE A CLICK EVENT ON THE OVERLAY BACKGROUND
const removeNavigation = () => {
  divOverlay.addEventListener("click", removeNavigationHandler);
};

// IF A LINK IN NAVIGATION IS CLICKED
const navLinkClicked = () => {
  navLinks.forEach((el) => {
    el.addEventListener("click", function () {
      headerMobile.classList.remove("header-mob-active");
      burgerLines.forEach((line) => {
        line.classList.remove("line-white");
      });
      lineOne.classList.remove("active-1");
      lineTwo.classList.remove("active-2");
      lineThree.classList.remove("active-3");

      divOverlay.classList.remove("dark-overlay");
    });
  });
};

// IF LOGO IN NAVIGATION IS CLICKED
const logoClicked = () => {
  headerLogo.addEventListener("click", () => {
    headerMobile.classList.remove("header-mob-active");
    burgerLines.forEach((line) => {
      line.classList.remove("line-white");
    });
    lineOne.classList.remove("active-1");
    lineTwo.classList.remove("active-2");
    lineThree.classList.remove("active-3");

    divOverlay.classList.remove("dark-overlay");
  });
};

const app = () => {
  toggleNavigation();
  removeNavigation();
  navLinkClicked();
  logoClicked();

  // RESIZE THE HEADER ON SCROLL AT 800PX
  window.addEventListener("scroll", () => {
    header.classList.toggle("scroll-active", window.scrollY > 800);
  });

  // CANCEL ANIMATIONS WHEN RESIZING THE BROWSER WINDOW
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 100);
  });
};

app();
