const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu-close");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});
