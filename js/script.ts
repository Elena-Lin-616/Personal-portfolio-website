// Hamburger menu
const btn__hamburger = document.getElementById("menu-btn") as HTMLButtonElement;
const mobile_menu = document.getElementById("menu") as HTMLDivElement;

btn__hamburger.addEventListener("click", navToggle);

function navToggle() {
  btn__hamburger.classList.toggle("open");
  mobile_menu.classList.toggle("flex");
  mobile_menu.classList.toggle("hidden");
}

// Dark/Light Mode
const themeToggleBtn =
  document.querySelectorAll<HTMLButtonElement>(".theme-toggle");
const themeToggleDarkIcon = document.querySelectorAll<SVGElement>(
  ".theme-toggle-dark-icon"
);
const themeToggleLightIcon = document.querySelectorAll<SVGElement>(
  ".theme-toggle-light-icon"
);

// show dark/light icon based on setting
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!localStorage.getItem("color-theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.forEach((icon) => {
    icon.classList.remove("hidden");
  });
} else {
  themeToggleDarkIcon.forEach((icon) => {
    icon.classList.remove("hidden");
  });
}

themeToggleBtn.forEach((btn) => {
  btn.addEventListener("click", toggleMode);
});

function toggleMode() {
  themeToggleDarkIcon.forEach((icon) => icon.classList.toggle("hidden"));
  themeToggleLightIcon.forEach((icon) => icon.classList.toggle("hidden"));

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
