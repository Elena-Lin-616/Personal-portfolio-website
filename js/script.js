// Hamburger menu
var btn__hamburger = document.getElementById("menu-btn");
var mobile_menu = document.getElementById("menu");
btn__hamburger.addEventListener("click", navToggle);
function navToggle() {
    btn__hamburger.classList.toggle("open");
    mobile_menu.classList.toggle("flex");
    mobile_menu.classList.toggle("hidden");
}
// Dark/Light Mode
var themeToggleBtn = document.getElementById("theme-toggle");
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
// show dark/light icon based on setting
if (localStorage.getItem("color-theme") === "dark" ||
    (!localStorage.getItem("color-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    themeToggleLightIcon.classList.remove("hidden");
}
else {
    themeToggleDarkIcon.classList.remove("hidden");
}
themeToggleBtn.addEventListener("click", toggleMode);
function toggleMode() {
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");
    if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        }
    }
    else {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
    }
}
