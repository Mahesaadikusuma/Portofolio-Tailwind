// Navbar Fixed
// window scroll
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    // ini untuk cek pageYoffsetnya math.round itu angka yang mendekati pembulatan
    // console.log(Math.round(window.pageYOffset));

    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const button = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

button.addEventListener("click", () => {
  button.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
