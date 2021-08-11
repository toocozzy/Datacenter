const burger = document.querySelector(".burger");
const asideMenu = document.querySelector(".menu");
const closeAside = document.querySelector(".close-menu");
const filterMenu = document.querySelector(".filter");

function closeMenu() {
  asideMenu.classList.toggle("active");
  filterMenu.classList.toggle("active");
}

burger.addEventListener("click", closeMenu);
closeAside.addEventListener("click", closeMenu);
filterMenu.addEventListener("click", closeMenu);

$(".menu a").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top,
  });
});
