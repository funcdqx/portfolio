const navResponsive = document.querySelector(".nav-responsive");
const navigation = document.querySelector("nav");
const body = document.querySelector("body");

window.addEventListener("scroll", function (e) {
  navigation.classList.toggle("sticky", this.window.scrollY > 0);
});

navResponsive.addEventListener("click", function (e) {
  const navMenu = document.querySelector(".nav-menu");

  navMenu.classList.toggle("activeNav");
});

const nightTheme = document.querySelector(".night_theme");
const jumbotron = document.querySelector(".jumbotron");
const aboutProfile = document.querySelector(".about__profile");
const workTitle = document.querySelector(".work_title");

nightTheme.addEventListener("click", function () {
  body.classList.toggle("change_theme");
  jumbotron.classList.toggle("change_theme__text");
  aboutProfile.classList.toggle("change_theme__text");
  workTitle.classList.toggle("change_theme__text");

  if (body.className === "change_theme") {
    nightTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    nightTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
