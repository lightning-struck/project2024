const path = window.location.pathname;

const trimmedPath = path.substring(1);

const navLinks = document.querySelectorAll(".nav__link");

if (navLinks) {
  navLinks.forEach((link) => {
    let currentPath = link.getAttribute("data-header-link");
    if (currentPath === path) {
      link.classList.add("nav__link--current");
    } else {
      link.classList.remove("nav__link--current");
    }
  });
}
