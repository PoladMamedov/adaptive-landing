const menuBtn = document.querySelector(".main-header__burger-btn");
const menu = document.querySelector(".main-header__menu");
menuBtn.addEventListener("click", (e) => {
  const target = e.target.closest("button");
  for (const i of target.children) {
    i.classList.toggle("main-header__brgrbtnsvg--hidden");
  }
  menu.classList.toggle("main-header__menu--show");
});
window.addEventListener("resize", () => {
  if (
    window.matchMedia("(min-width: 768px)").matches &&
    menu.classList.contains("main-header__menu--show")
  ) {
    menu.classList.remove("main-header__menu--show");
    menuBtn.children[0].classList.remove("main-header__brgrbtnsvg--hidden");
    menuBtn.children[1].classList.add("main-header__brgrbtnsvg--hidden");
  }
});
