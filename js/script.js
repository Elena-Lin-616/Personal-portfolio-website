// Hamburger menu
var btn__hamburger = document.getElementById("menu-btn");
var mobile_menu = document.getElementById("menu");
btn__hamburger.addEventListener("click", navToggle);
function navToggle() {
    btn__hamburger.classList.toggle("open");
    mobile_menu.classList.toggle("flex");
    mobile_menu.classList.toggle("hidden");
}
