// Navbar Fixed
// window scroll
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.getElementById("to-Top");

  if (window.pageYOffset > fixedNav) {
    // ini untuk cek pageYoffsetnya math.round itu angka yang mendekati pembulatan
    // console.log(Math.round(window.pageYOffset));

    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const button = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// button.addEventListener("click", function (e) {
//   // button.classList.toggle("hamburger-active");
//   // navMenu.classList.toggle("hidden");
//   console.log(e.target(button));
// });

button.addEventListener("click", function () {
  button.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klick di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != button && e.target != navMenu) {
    button.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }

  // console.log(e.target);
});

// Dark Mode
const DarkToggle = document.getElementById("dark-toggle");
const html = document.querySelector("html");

// console.log(DarkToggle);

DarkToggle.addEventListener("click", function () {
  if (DarkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
  // DarkToggle.checked ? html.classList.add("dark") : html.classList.remove("dark");
});

// pindahkan sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
