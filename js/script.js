const burger = document.querySelector(".burger");
const asideMenu = document.querySelector(".menu");
const closeAside = document.querySelector(".close-menu");
const section = document.querySelector(".welcome-section");

function closeMenu() {
  asideMenu.classList.toggle("active");
}

function addBlur() {
  section.classList.toggle("blur");
}

burger.addEventListener("click", addBlur);

burger.addEventListener("click", closeMenu);
closeAside.addEventListener("click", closeMenu);

$(".menu a").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top,
  });
});
