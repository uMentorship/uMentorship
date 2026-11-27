// Hide the top bar when scrolling down, show it again when scrolling up

const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 80) {
    // scrolling down
    navbar.classList.add("navbar-hidden");
  } else {
    // scrolling up
    navbar.classList.remove("navbar-hidden");
  }

  lastScroll = currentScroll;
});
