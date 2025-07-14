const hamburger = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
