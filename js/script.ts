// Hamburger menu
const btn__hamburger = document.getElementById("menu-btn") as HTMLButtonElement;
const mobile_menu = document.getElementById("menu") as HTMLDivElement;

btn__hamburger.addEventListener("click", navToggle);

function navToggle() {
  btn__hamburger.classList.toggle("open");
  mobile_menu.classList.toggle("flex");
  mobile_menu.classList.toggle("hidden");
}
