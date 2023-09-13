// Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const navbarBlur = header.offsetTop;

  if (window.scrollY > navbarBlur) {
    header.classList.add("navbar-blur");
  } else {
    header.classList.remove("navbar-blur");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#navbar-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbarMenu.classList.toggle("hidden");
});

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Toggle Switch
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
